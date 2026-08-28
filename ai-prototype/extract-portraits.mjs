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

// 1. Route -> Funktionsname-Zuordnung einsammeln. Erfasst sowohl die übliche
//    "...PortraitPage"-Konvention als auch abweichende Namen wie
//    "astrologieAlbertEinsteinPage", "bellaThornePage" oder "borisBeckerKriminalPage" —
//    wichtig ist nur, dass die Route mit beruehmte-/astrologie-/kriminalpsychologie-/
//    krankheitsportraets-/bibel- beginnt.
const routeMap = new Map(); // funktionsname -> route
const routeRegex = /"((?:beruehmte|astrologie|kriminalpsychologie|krankheitsportraets|bibel)-[a-z0-9-]+)":\s*([a-zA-Z0-9]+),/g;
let m;
while ((m = routeRegex.exec(appJs))) {
  routeMap.set(m[2], m[1]);
}
console.log(`Routen-Zuordnungen gefunden: ${routeMap.size}`);

// 2. Für jede so gefundene Funktion den Körper anhand Klammerbalance extrahieren
//    (statt eines starren "*PortraitPage"-Namensmusters, das Astrologie-Portraits
//    und ein paar abweichend benannte Funktionen bisher stillschweigend ausließ).
const chunks = [];
let count = 0;

for (const funcName of routeMap.keys()) {
  const funcStartRegex = new RegExp(`^function ${funcName}\\(\\) \\{`, "m");
  const startMatch = funcStartRegex.exec(appJs);
  if (!startMatch) continue; // Funktion nicht als eigenständige Definition gefunden
  const bodyStart = startMatch.index + startMatch[0].length;
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
    .replace(/(?:Portrait)?Page$/, "")
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
