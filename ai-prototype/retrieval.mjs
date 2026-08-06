// Reine Retrieval-Logik ohne Node-Abhängigkeiten (fs etc.) —
// läuft sowohl lokal (Node) als auch im Cloudflare Worker.

function tokenize(str) {
  return (str.toLowerCase().match(/[a-zäöüß]+/g) || []).filter((w) => w.length > 3);
}

export function retrieveRelevantChunks(question, chunks, topN = 5) {
  const qTokens = new Set(tokenize(question));
  const qUpper = question.toUpperCase();

  // Sammel-Fragen erkennen ("alle Länder mit Typ 3", "welche Länder sind Typ 6") und die
  // passende Übersichtsliste (Chunk-Code z.B. "LAND-TYP3") stark bevorzugen, statt dass sie
  // in den 200+ Einzel-Länder-Chunks untergeht.
  const typMatch = question.match(/typ\s*(\d)/i);
  const boostedCode = typMatch ? `LAND-TYP${typMatch[1]}` : null;

  const scored = chunks.map((chunk) => {
    let score = 0;
    if (qUpper.includes(chunk.code)) score += 10;
    if (boostedCode && chunk.code === boostedCode) score += 50;
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
