// bundle.js ist über Monate auf 16 MB angewachsen - auf dem Handy führt das
// bei speicherintensiven Seiten (z.B. "Berühmte Persönlichkeiten" mit
// hunderten Porträt-Karten) zu Safaris "Es ist wiederholt ein Problem
// aufgetreten"-Absturzmeldung (WebKit killt den Tab wegen Speicherdrucks).
//
// Dieses Skript zerlegt bundle.js/en/bundle.js verlustfrei in mehrere
// sequenziell geladene <script defer>-Chunks, OHNE den bestehenden
// Bearbeitungsworkflow zu ändern: bundle.js bleibt die einzige Datei, die
// inhaltlich bearbeitet wird. Die Chunks werden bei jedem Deploy aus
// bundle.js neu erzeugt (siehe .git/hooks/post-commit).
//
// Sicherheit des Splits: Es wird nur an Stellen geschnitten, an denen die
// Klammertiefe ({[( )]}) exakt 0 ist, wir uns nicht in einem String/Template-
// Literal/Kommentar befinden, UND das vorangehende Zeichen ';' oder '}' ist -
// also garantiert nach dem Ende einer vollständigen Top-Level-Anweisung.
// Die Rückverkettung aller Chunks ergibt exakt wieder die Originaldatei
// (siehe verifySplit()).
//
// Aufruf: node ai-prototype/split-bundle.mjs
// Erzeugt: bundle-parts/*.js + bundle-parts/manifest.json
//          en/bundle-parts/*.js + en/bundle-parts/manifest.json

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const TARGET_CHUNK_BYTES = 1_000_000; // ~1 MB pro Chunk

// Schlüsselwörter, nach denen ein '/' ein Regex-Literal einleitet statt
// einer Division (Standard-Heuristik von JS-Tokenizern).
const REGEX_PRECEDING_KEYWORDS = new Set([
  "return", "typeof", "instanceof", "in", "of", "new", "delete", "void",
  "throw", "yield", "case", "do", "else", "await",
]);

function findSafeSplitOffsets(source) {
  const offsets = [];
  const len = source.length;
  let idx = 0;
  let braceDepth = 0;
  let m = null; // null | 'sq' | 'dq' | 'tpl' | 'lc' | 'bc' | 're'
  const tplPauseStack = [];
  let lastSignificantChar = ""; // letztes Nicht-Whitespace-Zeichen im Normalmodus
  let lastIdent = ""; // laufender Bezeichner (für Keyword-Erkennung vor Regex)
  let reInClass = false; // innerhalb [...] eines Regex-Literals

  while (idx < len) {
    const ch = source[idx];
    const ch2 = source[idx + 1];

    if (m === "lc") { if (ch === "\n") m = null; idx++; continue; }
    if (m === "bc") { if (ch === "*" && ch2 === "/") { m = null; idx += 2; continue; } idx++; continue; }
    if (m === "sq") { if (ch === "\\") { idx += 2; continue; } if (ch === "'") m = null; idx++; continue; }
    if (m === "dq") { if (ch === "\\") { idx += 2; continue; } if (ch === '"') m = null; idx++; continue; }
    if (m === "re") {
      if (ch === "\\") { idx += 2; continue; }
      if (ch === "[") { reInClass = true; idx++; continue; }
      if (ch === "]") { reInClass = false; idx++; continue; }
      if (ch === "/" && !reInClass) {
        idx++;
        while (idx < len && /[a-z]/i.test(source[idx])) idx++; // Flags (g, i, m, ...)
        m = null;
        lastSignificantChar = "/"; // zählt wie ein Ausdrucksende
        lastIdent = "";
        continue;
      }
      if (ch === "\n") { m = null; } // Regex ohne schließendes '/' vor Zeilenende: abbrechen (defensiv)
      idx++;
      continue;
    }
    if (m === "tpl") {
      if (ch === "\\") { idx += 2; continue; }
      if (ch === "`") { m = null; idx++; continue; }
      if (ch === "$" && ch2 === "{") {
        tplPauseStack.push(braceDepth);
        braceDepth++;
        m = null;
        idx += 2;
        continue;
      }
      idx++;
      continue;
    }

    if (ch === "/" && ch2 === "/") { m = "lc"; idx += 2; continue; }
    if (ch === "/" && ch2 === "*") { m = "bc"; idx += 2; continue; }
    if (ch === "/") {
      const isDivision =
        /[A-Za-z0-9_$)\]]/.test(lastSignificantChar) &&
        !REGEX_PRECEDING_KEYWORDS.has(lastIdent);
      if (isDivision) {
        lastSignificantChar = "/";
        lastIdent = "";
        idx++;
        continue;
      }
      m = "re";
      reInClass = false;
      idx++;
      continue;
    }
    if (ch === "'") { m = "sq"; lastSignificantChar = "'"; lastIdent = ""; idx++; continue; }
    if (ch === '"') { m = "dq"; lastSignificantChar = '"'; lastIdent = ""; idx++; continue; }
    if (ch === "`") { m = "tpl"; lastSignificantChar = "`"; lastIdent = ""; idx++; continue; }
    if (ch === "{" || ch === "(" || ch === "[") {
      braceDepth++;
      lastSignificantChar = ch;
      lastIdent = "";
      idx++;
      continue;
    }
    if (ch === "}" || ch === ")" || ch === "]") {
      braceDepth--;
      lastSignificantChar = ch;
      lastIdent = "";
      idx++;
      if (tplPauseStack.length && braceDepth === tplPauseStack[tplPauseStack.length - 1]) {
        tplPauseStack.pop();
        m = "tpl";
      }
      continue;
    }
    if (ch === "\n" && braceDepth === 0 && m === null) {
      offsets.push(idx + 1);
    }
    if (/\s/.test(ch)) { idx++; continue; }
    if (/[A-Za-z0-9_$]/.test(ch)) {
      lastIdent += ch;
      lastSignificantChar = ch;
      idx++;
      continue;
    }
    // sonstiges Satzzeichen/Operator
    lastSignificantChar = ch;
    lastIdent = "";
    idx++;
  }
  return offsets;
}

function isGoodCutPoint(src, off) {
  if (off <= 0 || off >= src.length) return false;
  let j = off - 1;
  while (j >= 0 && /[ \t\r\n]/.test(src[j])) j--;
  if (j < 0) return false;
  return src[j] === ";" || src[j] === "}";
}

// Der handgeschriebene Scanner oben ist eine Heuristik (Regex- vs.
// Divisions-Erkennung etc.) und kann in Randfällen danebenliegen. Deshalb
// gilt: jeder vorgeschlagene Cut wird zusätzlich durch den echten JS-Parser
// (vm.Script) geprüft, BEVOR er tatsächlich verwendet wird. Nur Cuts, bei
// denen beide resultierenden Seiten für sich genommen gültiges JS sind,
// werden akzeptiert - das macht die Heuristik oben zu einem reinen
// Kandidaten-Generator, nicht zur Wahrheitsquelle.
function isValidStandaloneScript(code) {
  try {
    new vm.Script(code);
    return true;
  } catch {
    return false;
  }
}

function splitSource(src, targetSize) {
  const candidates = findSafeSplitOffsets(src).filter((o) => isGoodCutPoint(src, o));
  const chunks = [];
  let chunkStart = 0;
  let lastGood = 0;
  for (const off of candidates) {
    if (off - chunkStart >= targetSize) {
      if (lastGood > chunkStart) {
        chunks.push(src.slice(chunkStart, lastGood));
        chunkStart = lastGood;
      }
    }
    lastGood = off;
  }
  chunks.push(src.slice(chunkStart));

  // Validierungs-/Merge-Runde: jeder Chunk muss für sich allein gültiges JS
  // sein. Ist er es nicht, mit dem nächsten Chunk verschmelzen und erneut
  // prüfen, bis alle Chunks einzeln gültig sind (im Zweifel wird der Chunk
  // dadurch größer statt kaputt).
  let merged = true;
  while (merged) {
    merged = false;
    for (let i = 0; i < chunks.length; i++) {
      if (!isValidStandaloneScript(chunks[i])) {
        if (i + 1 < chunks.length) {
          chunks[i] = chunks[i] + chunks[i + 1];
          chunks.splice(i + 1, 1);
        } else if (i > 0) {
          chunks[i - 1] = chunks[i - 1] + chunks[i];
          chunks.splice(i, 1);
        } else {
          break; // einziger Chunk und ungültig - kann hier nicht behoben werden
        }
        merged = true;
        break;
      }
    }
  }

  return chunks;
}

function verifySplit(src, chunks) {
  const rejoined = chunks.join("");
  if (rejoined !== src) {
    throw new Error("Split-Verifikation fehlgeschlagen: Chunks ergeben nicht wieder die Originaldatei!");
  }
  for (const [i, chunk] of chunks.entries()) {
    // node --check-tauglich machen wir separat über die CLI; hier nur eine
    // Minimalprüfung, dass kein Chunk leer/kaputt aussieht.
    if (!chunk.trim()) throw new Error(`Chunk ${i + 1} ist leer - Split fehlgeschlagen.`);
  }
}

function buildAndWrite(inputRelPath, outDirRelPath, baseName) {
  const inputPath = path.join(rootDir, inputRelPath);
  const outDir = path.join(rootDir, outDirRelPath);
  const src = fs.readFileSync(inputPath, "utf-8");

  const chunks = splitSource(src, TARGET_CHUNK_BYTES);
  verifySplit(src, chunks);

  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  // Bewusst KEIN "use strict" vorangestellt: mindestens ein Chunk enthält
  // Code, der nur im Sloppy Mode gültig ist (z.B. doppelte Funktionsparameter
  // oder eine Oktalzahl-Notation) und würde mit "use strict" zum
  // SyntaxError. Klassische <script>-Tags ohne "use strict" sind ein
  // Superset von Strict Mode, verhalten sich also für bereits striktes Original-
  // Modul-Verhalten weiterhin korrekt.
  const fileNames = [];
  chunks.forEach((chunk, idx) => {
    const fname = `${baseName}.part${idx + 1}.js`;
    if (!isValidStandaloneScript(chunk)) {
      throw new Error(`${inputRelPath}: Chunk ${idx + 1} ist auch nach der Merge-Runde kein gültiges JS - Split abgebrochen.`);
    }
    fs.writeFileSync(path.join(outDir, fname), chunk, "utf-8");
    fileNames.push(fname);
  });

  fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(fileNames, null, 2) + "\n");

  const totalSize = chunks.reduce((s, c) => s + c.length, 0);
  console.log(`${inputRelPath} -> ${outDirRelPath}: ${chunks.length} Chunks, ${(totalSize / 1e6).toFixed(2)} MB gesamt`);
  return fileNames;
}

buildAndWrite("bundle.js", "bundle-parts", "bundle");

// en/bundle.js ist (anders als bundle.js) ein echtes ES-Modul mit
// top-level `import`-Statements aus data/*.js - kann nicht wie bundle.js
// als klassische <script>-Kette aufgeteilt werden (Module haben keinen
// gemeinsamen globalen Scope). Bleibt vorerst als ein Stück; eigenständiges
// Folgeprojekt, falls die englische Version dieselben Speicherprobleme zeigt.

console.log("Fertig. Chunks liegen in bundle-parts/ (manifest.json). en/bundle.js unverändert (siehe Kommentar oben).");
