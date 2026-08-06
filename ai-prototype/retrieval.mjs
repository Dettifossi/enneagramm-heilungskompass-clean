// Reine Retrieval-Logik ohne Node-Abhängigkeiten (fs etc.) —
// läuft sowohl lokal (Node) als auch im Cloudflare Worker.

function tokenize(str) {
  return (str.toLowerCase().match(/[a-zäöüß]+/g) || []).filter((w) => w.length > 3);
}

export function retrieveRelevantChunks(question, chunks, topN = 5) {
  const qTokens = new Set(tokenize(question));
  const qUpper = question.toUpperCase();

  const scored = chunks.map((chunk) => {
    let score = 0;
    if (qUpper.includes(chunk.code)) score += 10;
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
