// Cloudflare-Worker-Function: der Online-Zwilling von ai-prototype/server.mjs
// Nimmt Fragen entgegen, sucht relevante Wissens-Chunks, ruft Gemini auf,
// gibt Antwort + Quellen zurück. Der API-Key steckt NIE im Code, sondern
// als Worker-Secret (siehe Deploy-Anleitung).

import knowledgeDE from "./knowledge.json";
import knowledgeEN from "./knowledge-en.json";
import { retrieveRelevantChunks } from "../retrieval.mjs";

const SYSTEM_INSTRUCTION_DE = `Du bist "Der Wegweiser", der Wissens-Assistent des Enneagramm-Heilungskompass von Detlef Rathmer.
Beantworte Fragen AUSSCHLIESSLICH auf Basis der bereitgestellten Quellentexte.
Wenn die Antwort nicht in den Quellen steht, sag das ehrlich, statt zu spekulieren oder zu erfinden.
Antworte auf Deutsch, freundlich und klar. Nenne am Ende in Klammern die verwendeten Subtyp-Codes als Quellenangabe.`;

const SYSTEM_INSTRUCTION_EN = `You are "The Guide", the knowledge assistant of the Enneagram Healing Compass by Detlef Rathmer.
Answer questions EXCLUSIVELY based on the provided source texts.
If the answer is not contained in the sources, say so honestly instead of speculating or inventing information.
Answer in English, friendly and clear. At the end, cite the subtype codes used as sources in parentheses.`;

const EMBED_MODEL = "gemini-embedding-001";
const EMBED_DIMENSIONS = 768;

// Lookup-Tabellen code -> vollständiger Chunk, einmalig pro Worker-Instanz gebaut
// (nicht pro Request), damit Vectorize-Treffer (die nur gekürzten Text als
// Metadaten tragen) wieder den vollen Originaltext bekommen.
const knowledgeByCodeDE = new Map(knowledgeDE.map((c) => [c.code, c]));
const knowledgeByCodeEN = new Map(knowledgeEN.map((c) => [c.code, c]));

async function embedQuery(question, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${EMBED_MODEL}:embedContent?key=${apiKey}`;
  const body = {
    model: `models/${EMBED_MODEL}`,
    content: { parts: [{ text: question }] },
    outputDimensionality: EMBED_DIMENSIONS,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Embedding-Fehler ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.embedding.values;
}

// Hybrid-Retrieval: semantische Vektorsuche (versteht Bedeutung, nicht nur
// Wort-Overlap) ergänzt um die bisherige Keyword-Suche (sehr präzise bei
// exakten Codes/Namen, z.B. "SE1", Länder-Sammelfragen). Fällt bei jedem
// Fehler (Vectorize/Embedding nicht erreichbar) sauber auf reine
// Keyword-Suche zurück, statt die Anfrage scheitern zu lassen.
async function hybridRetrieve(question, { knowledge, knowledgeByCode, vectorizeIndex, apiKey }) {
  const keywordHits = retrieveRelevantChunks(question, knowledge, 5);

  if (!vectorizeIndex) return keywordHits;

  try {
    const qVector = await embedQuery(question, apiKey);
    const result = await vectorizeIndex.query(qVector, { topK: 6, returnMetadata: "all" });
    const vectorHits = (result.matches || [])
      .map((m) => knowledgeByCode.get(m.metadata?.code))
      .filter(Boolean);

    const merged = [];
    const seen = new Set();
    for (const c of vectorHits) {
      if (!seen.has(c.code)) {
        merged.push(c);
        seen.add(c.code);
      }
    }
    for (const c of keywordHits) {
      if (!seen.has(c.code)) {
        merged.push(c);
        seen.add(c.code);
      }
    }
    return merged.slice(0, 10);
  } catch (err) {
    console.error("Vectorize-Suche fehlgeschlagen, nutze Keyword-Fallback:", err.message);
    return keywordHits;
  }
}

// Enzyklopädie-Chunks tragen keinen Subtyp-Code (kommen nicht aus
// knowledge.json, sondern direkt aus den Vectorize-Metadaten, da die
// Rohdaten/knowledge-Datei absichtlich nie ins Repo/den Worker-Bundle
// gelangen - siehe .gitignore). Nur Deutsch, kein knowledgeByCode-Join nötig.
async function retrieveEncyclopedia(question, { vectorizeIndex, apiKey }) {
  if (!vectorizeIndex) return [];
  try {
    const qVector = await embedQuery(question, apiKey);
    const result = await vectorizeIndex.query(qVector, { topK: 4, returnMetadata: "all" });
    return (result.matches || [])
      .filter((m) => m.metadata?.text)
      .map((m) => ({ source: m.metadata.source, text: m.metadata.text }));
  } catch (err) {
    console.error("Enzyklopädie-Suche fehlgeschlagen:", err.message);
    return [];
  }
}

async function askGemini(question, chunks, encyclopediaChunks, apiKey, lang) {
  const context = [
    ...chunks.map((c) => `--- Quelle: ${c.code} (${c.source}) ---\n${c.text}`),
    ...encyclopediaChunks.map((c) => `--- Quelle: Profiling-Enzyklopädie (${c.source}) ---\n${c.text}`),
  ].join("\n\n");

  const systemInstruction = lang === "en" ? SYSTEM_INSTRUCTION_EN : SYSTEM_INSTRUCTION_DE;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${apiKey}`;
  const body = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: [{ role: "user", parts: [{ text: `Kontext:\n${context}\n\nFrage: ${question}` }] }],
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Gemini API Fehler ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "(keine Antwort erhalten)";
}

const ALLOWED_ORIGINS = new Set([
  "https://kompass.verlagshausrathmer.com",
  "http://localhost:4174",
]);

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : "https://kompass.verlagshausrathmer.com";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(request) });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders(request) });
    }

    try {
      const { question, lang } = await request.json();
      if (!question || typeof question !== "string") {
        return new Response(JSON.stringify({ error: "Feld 'question' fehlt." }), {
          status: 400,
          headers: { ...corsHeaders(request), "Content-Type": "application/json" },
        });
      }

      const isEN = lang === "en";
      const knowledge = isEN ? knowledgeEN : knowledgeDE;
      const knowledgeByCode = isEN ? knowledgeByCodeEN : knowledgeByCodeDE;
      const vectorizeIndex = isEN ? env.VECTORIZE_EN : env.VECTORIZE_DE;

      const relevant = await hybridRetrieve(question, {
        knowledge,
        knowledgeByCode,
        vectorizeIndex,
        apiKey: env.GEMINI_API_KEY,
      });

      // Enzyklopädie-Anbindung bewusst deaktiviert (nicht gelöscht): Premium-
      // Wissensbasis wird erst zusammen mit der Bezahlschranke live geschaltet,
      // nicht vorher. Bis dahin bleibt sie für alle Nutzer unsichtbar.
      const encyclopediaChunks = [];

      if (relevant.length === 0 && encyclopediaChunks.length === 0) {
        const noMatch = isEN
          ? "I couldn't find matching content in the knowledge base for that."
          : "Dazu finde ich in der Wissensbasis keine passenden Inhalte.";
        return new Response(JSON.stringify({ answer: noMatch, sources: [] }), {
          headers: { ...corsHeaders(request), "Content-Type": "application/json" },
        });
      }

      const answer = await askGemini(question, relevant, encyclopediaChunks, env.GEMINI_API_KEY, lang);
      const sources = [
        ...new Set(relevant.map((c) => c.code)),
        ...encyclopediaChunks.map((c) => c.source),
      ];

      return new Response(JSON.stringify({ answer, sources }), {
        headers: { ...corsHeaders(request), "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders(request), "Content-Type": "application/json" },
      });
    }
  },
};
