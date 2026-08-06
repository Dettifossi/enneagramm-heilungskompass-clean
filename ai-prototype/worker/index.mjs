// Cloudflare-Worker-Function: der Online-Zwilling von ai-prototype/server.mjs
// Nimmt Fragen entgegen, sucht relevante Wissens-Chunks, ruft Gemini auf,
// gibt Antwort + Quellen zurück. Der API-Key steckt NIE im Code, sondern
// als Worker-Secret (siehe Deploy-Anleitung).

import knowledge from "./knowledge.json";
import { retrieveRelevantChunks } from "../retrieval.mjs";

const SYSTEM_INSTRUCTION_DE = `Du bist "Der Wegweiser", der Wissens-Assistent des Enneagramm-Heilungskompass von Detlef Rathmer.
Beantworte Fragen AUSSCHLIESSLICH auf Basis der bereitgestellten Quellentexte.
Wenn die Antwort nicht in den Quellen steht, sag das ehrlich, statt zu spekulieren oder zu erfinden.
Antworte auf Deutsch, freundlich und klar. Nenne am Ende in Klammern die verwendeten Subtyp-Codes als Quellenangabe.`;

const SYSTEM_INSTRUCTION_EN = `You are "The Guide", the knowledge assistant of the Enneagram Healing Compass by Detlef Rathmer.
Answer questions EXCLUSIVELY based on the provided source texts.
If the answer is not contained in the sources, say so honestly instead of speculating or inventing information.
Answer in English, friendly and clear. At the end, cite the subtype codes used as sources in parentheses.`;

async function askGemini(question, chunks, apiKey, lang) {
  const context = chunks
    .map((c) => `--- Quelle: ${c.code} (${c.source}) ---\n${c.text}`)
    .join("\n\n");

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

      const relevant = retrieveRelevantChunks(question, knowledge, 5);
      if (relevant.length === 0) {
        const noMatch =
          lang === "en"
            ? "I couldn't find matching content in the knowledge base for that."
            : "Dazu finde ich in der Wissensbasis keine passenden Inhalte.";
        return new Response(JSON.stringify({ answer: noMatch, sources: [] }), {
          headers: { ...corsHeaders(request), "Content-Type": "application/json" },
        });
      }

      const answer = await askGemini(question, relevant, env.GEMINI_API_KEY, lang);
      const sources = [...new Set(relevant.map((c) => c.code))];

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
