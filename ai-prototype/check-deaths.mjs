// Prüft, ob bei Personen, die in der App als lebend geführt werden, inzwischen ein Todesdatum bei Wikidata steht.
// Ändert nichts an der App, schreibt nur einen Bericht: docs/todesfall-bericht.md (und .json).
// Zusätzlich listet er fällige Einträge aus docs/aktualisierungen-watchlist.md.
// Aufruf: node ai-prototype/check-deaths.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// --- Porträtlisten aus bundle.js lesen (wie die App sie kennt) ---
function arr(src, name) {
  const i = src.indexOf("const " + name + " = [");
  let d = 0, j = src.indexOf("[", i), k = j;
  for (; k < src.length; k++) { const c = src[k]; if (c === "[") d++; else if (c === "]") { d--; if (d === 0) break; } }
  return new Function("return " + src.slice(j, k + 1))();
}
const src = fs.readFileSync(path.join(root, "bundle.js"), "utf8");
const { VERSTORBEN } = await import(path.join(root, "data/verstorben.js"));
const entries = [];
for (const n of ["BERUEHMT_PORTRAITS", "KRIMINAL_PORTRAITS", "KRANKHEITS_PORTRAITS"]) {
  for (const e of arr(src, n)) entries.push({ route: e.route, name: e.name, teaser: e.teaser || "" });
}

function cleanName(n) {
  return n.replace(/\(.*?\)/g, "").replace(/['‘’"„“”][^'‘’"„“”]*['‘’"„“”]/g, " ")
    .replace(/\b(Dr\.|Prof\.|med\.|Sir|Mrs\.|Mr\.|Dame|Mutter|Königin|König)\s*/g, "").replace(/\s+/g, " ").trim();
}
function birthYearHint(teaser) {
  const t = teaser.replace(/^[A-Z]{2}\d(?:w\d)?\s*[·–-]\s*/, "");
  const m = t.match(/(?:geb\.|Jahrgang)\s*(?:um\s*)?(\d{4})/i) || t.match(/(?<!\d)(1[89]\d\d|20[0-2]\d)(?!\d)/);
  return m ? parseInt(m[1]) : null;
}

// Eine Person pro Name (Porträts derselben Person in mehreren Rubriken zusammenfassen)
const people = new Map();
for (const e of entries) {
  const key = cleanName(e.name).toLowerCase();
  if (!people.has(key)) people.set(key, { name: cleanName(e.name), routes: [], year: null, listedDead: false });
  const p = people.get(key); p.routes.push(e.route);
  if (VERSTORBEN.has(e.route)) p.listedDead = true;
  if (!p.year) p.year = birthYearHint(e.teaser);
}
const list = [...people.values()];

// --- Wikidata ---
const API = "https://www.wikidata.org/w/api.php";
const UA = { "User-Agent": "EnneagrammKompass-Todesfallpruefung/1.0 (https://kompass.verlagshausrathmer.com)" };
async function jget(params) {
  const url = API + "?" + new URLSearchParams({ format: "json", ...params });
  for (let i = 0; i < 3; i++) {
    try { const r = await fetch(url, { headers: UA }); if (r.ok) return await r.json(); } catch {}
    await new Promise(res => setTimeout(res, 800 * (i + 1)));
  }
  return null;
}
const year = t => (t ? parseInt(t.replace(/^[+-]/, "").slice(0, 4)) : null);
function claimTime(ent, prop) { const c = ent && ent.claims && ent.claims[prop]; return c && c[0] && c[0].mainsnak && c[0].mainsnak.datavalue ? c[0].mainsnak.datavalue.value.time : null; }
function isHuman(ent) { const c = ent && ent.claims && ent.claims.P31; return !!c && c.some(x => x.mainsnak && x.mainsnak.datavalue && x.mainsnak.datavalue.value.id === "Q5"); }

// 1) Suche
const found = [];
let idx = 0;
async function worker() {
  while (idx < list.length) {
    const p = list[idx++];
    const r = await jget({ action: "wbsearchentities", search: p.name, language: "de", uselang: "de", type: "item", limit: "8" });
    p.cands = ((r && r.search) || []).map(s => s.id);
    await new Promise(res => setTimeout(res, 120));
  }
}
await Promise.all(Array.from({ length: 5 }, worker));

// 2) Einträge holen (Stapel zu 50)
const ids = [...new Set(list.flatMap(p => p.cands || []))];
const ents = {};
for (let i = 0; i < ids.length; i += 50) {
  const r = await jget({ action: "wbgetentities", ids: ids.slice(i, i + 50).join("|"), props: "claims|descriptions", languages: "de|en" });
  Object.assign(ents, (r && r.entities) || {});
  await new Promise(res => setTimeout(res, 150));
}

// 3) Zuordnen
const dead = [], unsure = [], notFound = [], alive = [], listedOk = [], listedMismatch = [];
for (const p of list) {
  const humans = (p.cands || []).map(id => ({ id, ent: ents[id] })).filter(x => isHuman(x.ent));
  let pick = null, sure = false;
  if (p.year) { pick = humans.find(x => { const b = year(claimTime(x.ent, "P569")); return b && Math.abs(b - p.year) <= 1; }); sure = !!pick; }
  if (!pick && humans.length === 1 && !p.year) { pick = humans[0]; sure = false; }
  if (!pick) { notFound.push(p); continue; }
  const d = claimTime(pick.ent, "P570");
  const desc = ((pick.ent.descriptions || {}).de || (pick.ent.descriptions || {}).en || {}).value || "";
  const rec = { name: p.name, routes: p.routes, qid: pick.id, born: year(claimTime(pick.ent, "P569")), died: d ? d.replace(/^\+/, "").slice(0, 10) : null, desc, sure };
  if (p.listedDead) { (d ? listedOk : (sure ? listedMismatch : [])).push(rec); continue; }
  if (d) (sure ? dead : unsure).push(rec); else alive.push(rec);
}

// --- Watchlist: fällige Einträge ---
const today = new Date();
const wlPath = path.join(root, "docs/aktualisierungen-watchlist.md");
const due = [];
if (fs.existsSync(wlPath)) {
  for (const line of fs.readFileSync(wlPath, "utf8").split("\n")) {
    if (!line.startsWith("|") || /Porträt|---/.test(line)) continue;
    const cells = line.split("|").map(s => s.trim());
    const m = (cells[3] || "").match(/(\d{2})\.(\d{2})\.(\d{4})/);
    if (m && new Date(`${m[3]}-${m[2]}-${m[1]}`) <= today && !/erledigt|~~/.test(line)) due.push(cells[1] + " – " + cells[2] + " (prüfen ab " + cells[3] + ")");
  }
}

// --- Bericht ---
const iso = today.toISOString().slice(0, 10);
const nListed = list.filter(p => p.listedDead).length;
let md = `# Todesfall-Bericht (${iso})\n\nGeprüft: ${list.length} Personen (Quelle: Wikidata), davon ${list.length - nListed} als lebend geführt und ${nListed} als verstorben geführt. Lebende: ${alive.length} bestätigt lebend. Verstorbene: ${listedOk.length} mit Todesdatum bestätigt. ${notFound.length} Personen sind nicht eindeutig zuordenbar (meist unbekanntere Personen).\n\n`;
md += `## Sehr wahrscheinlich verstorben (Geburtsjahr passt)\n` + (dead.length ? dead.map(r => `- **${r.name}** (*${r.born}, † ${r.died}), ${r.desc} – Routen: ${r.routes.join(", ")} – https://www.wikidata.org/wiki/${r.qid}`).join("\n") : "- keine") + "\n\n";
md += `## Möglicherweise verstorben (Zuordnung unsicher, bitte prüfen)\n` + (unsure.length ? unsure.map(r => `- ${r.name} († ${r.died}), ${r.desc} – Routen: ${r.routes.join(", ")} – https://www.wikidata.org/wiki/${r.qid}`).join("\n") : "- keine") + "\n\n";
md += `## Als verstorben geführt, aber bei Wikidata ohne Todesdatum (bitte prüfen, ob die Person wirklich tot ist; sehr neue Todesfälle fehlen bei Wikidata manchmal noch)\n` + (listedMismatch.length ? listedMismatch.map(r => `- ${r.name} (*${r.born}), ${r.desc} – Routen: ${r.routes.join(", ")} – https://www.wikidata.org/wiki/${r.qid}`).join("\n") : "- keine") + "\n\n";
md += `## Fällige Einträge aus der Watchlist\n` + (due.length ? due.map(x => "- " + x).join("\n") : "- keine") + "\n\n";
md += `## Vorgehen bei einem Todesfall\nTodesdatum im Porträt ergänzen (DE und EN), Route in data/verstorben.js eintragen, Lebensmusterkompass-Texte prüfen, Cache-Zähler hochzählen.\n`;
fs.writeFileSync(path.join(root, "docs/todesfall-bericht.md"), md, "utf8");
fs.writeFileSync(path.join(root, "docs/todesfall-bericht.json"), JSON.stringify({ date: iso, dead, unsure, listedMismatch, due, notFound: notFound.length }, null, 1), "utf8");
console.log(`Geprüft ${list.length}; lebend bestätigt ${alive.length}; wahrscheinlich verstorben ${dead.length}; unsicher ${unsure.length}; als verstorben geführt ohne Wikidata-Todesdatum ${listedMismatch.length}; nicht zuordenbar ${notFound.length}; fällige Watchlist-Einträge ${due.length}`);
listedMismatch.forEach(r => console.log("  ? " + r.name + " (" + r.routes[0] + ")"));
dead.forEach(r => console.log("  † " + r.name + " " + r.died + " (" + r.routes[0] + ")"));
