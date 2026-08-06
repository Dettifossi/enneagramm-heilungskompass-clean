// Extrahiert alle Porträt-Funktionen (berühmte Persönlichkeiten + Kriminalpsychologie-Fälle)
// direkt aus app.js zu zitierfähigen Wissens-Chunks. Diese Inhalte liegen als eigene
// JS-Funktionen im Code (nicht in data/*.js), daher ein anderes Extraktionsverfahren
// als bei den strukturierten Datendateien: Funktionskörper anhand Klammerbalance
// herausschneiden, HTML-Tags entfernen, Klartext als Chunk speichern.
//
// Aufruf: node ai-prototype/extract-portraits.mjs
// Erzeugt: ai-prototype/knowledge-portraits.json

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const appJs = fs.readFileSync(path.join(rootDir, "app.js"), "utf-8");

// 1. Route -> Funktionsname-Zuordnung einsammeln (z.B. "kriminalpsychologie-michael-franzese": michaelFranzesePortraitPage)
const routeMap = new Map(); // funktionsname -> route
const routeRegex = /"([a-z0-9-]+)":\s*([a-zA-Z0-9]+PortraitPage),/g;
let m;
while ((m = routeRegex.exec(appJs))) {
  routeMap.set(m[2], m[1]);
}
console.log(`Routen-Zuordnungen gefunden: ${routeMap.size}`);

// 2. Alle Funktionsdefinitionen "function xyzPortraitPage() {" finden und deren
//    Körper anhand Klammerbalance extrahieren.
const funcStartRegex = /^function ([a-zA-Z0-9]+PortraitPage)\(\) \{/gm;
const chunks = [];
let count = 0;

while ((m = funcStartRegex.exec(appJs))) {
  const funcName = m[1];
  const bodyStart = m.index + m[0].length;
  let depth = 1;
  let i = bodyStart;
  while (depth > 0 && i < appJs.length) {
    const ch = appJs[i];
    if (ch === "{") depth++;
    else if (ch === "}") depth--;
    i++;
  }
  const body = appJs.slice(bodyStart, i - 1);

  // HTML-Tags entfernen, überflüssigen Whitespace/Template-Syntax grob bereinigen
  let text = body
    .replace(/return shell\(`/, "") // Funktionsrahmen-Reste raus
    .replace(/<[^>]+>/g, " ") // HTML-Tags raus
    .replace(/\$\{[^}]*\}/g, " ") // einfache ${...}-Interpolationen raus (ohne verschachtelte)
    .replace(/&middot;/g, "·")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length < 80) continue; // zu kurz / vermutlich kein echter Inhalt

  const route = routeMap.get(funcName);
  const readableName = funcName
    .replace(/PortraitPage$/, "")
    .replace(/([A-Z])/g, " $1")
    .trim();

  chunks.push({
    code: route ? `PORTRAIT-${route}` : `PORTRAIT-${funcName}`,
    source: "portraits",
    text: `Porträt: ${readableName}. ${text}`,
  });
  count++;
}

console.log(`Funktionen gefunden: ${count}`);

const outPath = path.join(__dirname, "knowledge-portraits.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} Porträt-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
