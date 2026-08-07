// Reine Retrieval-Logik ohne Node-Abhängigkeiten (fs etc.) —
// läuft sowohl lokal (Node) als auch im Cloudflare Worker.

// Häufige Füllwörter, die in praktisch jedem Textblock vorkommen und daher
// beim reinen Wort-Overlap-Scoring nichtssagende Treffer erzeugen
// (z.B. "tell me about X" matcht sonst zufällig lange, generische Texte
// stärker als kurze, thematisch genau passende Chunks).
const STOPWORDS = new Set([
  "dass", "auch", "eine", "einen", "einer", "eines", "sich", "sind", "wird", "werden",
  "kann", "kannst", "könnte", "haben", "hast", "hat", "wenn", "aber", "oder", "nicht",
  "mehr", "sehr", "noch", "schon", "immer", "diese", "dieser", "dieses", "welche",
  "welcher", "welches", "über", "unter", "durch", "bitte", "bist", "kannst", "gibt",
  "about", "there", "their", "these", "those", "which", "would", "could", "should",
  "please", "tell", "give", "know", "what", "when", "where", "your", "you're",
  "does", "with", "that", "this", "have", "will", "just", "like", "into", "than",
  "then", "them", "some", "such", "more", "most", "very", "much", "many", "list",
]);

function tokenize(str) {
  return (str.toLowerCase().match(/[a-zäöüß]+/g) || []).filter((w) => w.length > 3 && !STOPWORDS.has(w));
}

export function retrieveRelevantChunks(question, chunks, topN = 5) {
  const qTokens = new Set(tokenize(question));
  const qUpper = question.toUpperCase();

  // Sammel-Fragen erkennen ("alle Länder mit Typ 3", "welche Länder sind Typ 6") und die
  // passende Übersichtsliste (Chunk-Code z.B. "LAND-TYP3") stark bevorzugen, statt dass sie
  // in den 200+ Einzel-Länder-Chunks untergeht.
  const typMatch = question.match(/typ\w*\s*(\d)/i);
  const boostedCode = typMatch ? `LAND-TYP${typMatch[1]}` : null;

  // Zwei Subtyp-Codes in einer Frage ("SE1 und SO4") -> Beziehungspaarungs-Chunk
  // bevorzugen (Reihenfolge in der Datenbasis ist nicht garantiert, beide Richtungen prüfen).
  const subtypeCodes = qUpper.match(/S[EOX][1-9]/g) || [];
  const beziehungCodes = new Set();
  if (subtypeCodes.length >= 2) {
    for (let i = 0; i < subtypeCodes.length; i++) {
      for (let j = i + 1; j < subtypeCodes.length; j++) {
        beziehungCodes.add(`BEZIEHUNG-${subtypeCodes[i]}-${subtypeCodes[j]}`);
        beziehungCodes.add(`BEZIEHUNG-${subtypeCodes[j]}-${subtypeCodes[i]}`);
      }
    }
  }

  const scored = chunks.map((chunk) => {
    let score = 0;
    if (qUpper.includes(chunk.code)) score += 10;
    if (boostedCode && chunk.code === boostedCode) score += 50;
    if (beziehungCodes.has(chunk.code)) score += 50;
    const chunkTokenSet = new Set(tokenize(chunk.text));
    for (const t of qTokens) {
      if (chunkTokenSet.has(t)) score += 1;
    }
    return { ...chunk, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
    .filter((c) => c.score > 0);
}
