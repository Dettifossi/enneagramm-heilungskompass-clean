// Baut die Wissensbasis einmalig zu einer statischen JSON-Datei zusammen,
// damit die Cloudflare-Worker-Function sie ohne Dateisystemzugriff einbetten kann.
// Aufruf: node ai-prototype/build-knowledge.mjs
// Erzeugt: ai-prototype/worker/knowledge.json
// Bei neuen/geänderten Subtyp-Inhalten einfach erneut ausführen + Worker neu deployen.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllKnowledge } from "./knowledge-loader.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const chunks = loadAllKnowledge(rootDir);

// Länderzuordnungen ergänzen (falls bereits per extract-laender.mjs generiert)
const laenderPath = path.join(__dirname, "knowledge-laender.json");
if (fs.existsSync(laenderPath)) {
  const laenderChunks = JSON.parse(fs.readFileSync(laenderPath, "utf-8"));
  chunks.push(...laenderChunks);
}

// Weitere Wissensquellen ergänzen (falls bereits per extract-more.mjs generiert):
// Tierlexikon, Situationskompass, Beziehungspaarungen, Verhalten, Differenzierungen
const morePath = path.join(__dirname, "knowledge-more.json");
if (fs.existsSync(morePath)) {
  const moreChunks = JSON.parse(fs.readFileSync(morePath, "utf-8"));
  chunks.push(...moreChunks);
}

const outDir = path.join(__dirname, "worker");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "knowledge.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));

console.log(`${chunks.length} Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
