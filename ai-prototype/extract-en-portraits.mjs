// Extrahiert BERUEHMT_PORTRAITS + KRIMINAL_PORTRAITS aus en/bundle.js.
// Anders als bei DE (app.js, ausformulierte Funktionskörper) liegen hier
// nur strukturierte Kurz-Teaser vor (heading + teaser) - kürzer, aber
// bereits vollständig englisch und sofort nutzbar.
// Aufruf: node ai-prototype/extract-en-portraits.mjs
// Erzeugt: ai-prototype/knowledge-en-portraits.json

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(rootDir, "en", "bundle.js"), "utf-8");

function extractConst(name) {
  const startMarker = `const ${name} = `;
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) throw new Error(`${name} nicht gefunden`);
  const bodyStart = startIdx + startMarker.length;
  let depth = 1;
  let i = bodyStart + 1;
  while (depth > 0 && i < src.length) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") depth--;
    i++;
  }
  const literal = src.slice(bodyStart, i);
  const context = { module: { exports: {} } };
  vm.createContext(context);
  return vm.runInContext(`(${literal})`, context);
}

const BERUEHMT_PORTRAITS = extractConst("BERUEHMT_PORTRAITS");
const KRIMINAL_PORTRAITS = extractConst("KRIMINAL_PORTRAITS");

const chunks = [];

for (const p of BERUEHMT_PORTRAITS) {
  chunks.push({
    code: `PORTRAIT-${p.route}`,
    source: "portraits-en",
    text: `Portrait: ${p.heading || p.name} (Subtype ${p.subtyp}). ${p.teaser || ""}`,
  });
}

for (const p of KRIMINAL_PORTRAITS) {
  chunks.push({
    code: `PORTRAIT-${p.route}`,
    source: "portraits-en",
    text: `Criminal psychology case: ${p.heading || p.name} (Subtype ${p.subtyp}). ${p.teaser || ""}`,
  });
}

const outPath = path.join(__dirname, "knowledge-en-portraits.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} EN-Portraet-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
