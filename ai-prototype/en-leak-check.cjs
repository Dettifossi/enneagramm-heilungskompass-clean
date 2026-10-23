// Sucht deutsche Reste in der englischen Seite (en/#<route>) für alle Nicht-Porträt-Routen
// aus registerEntriesEN (Wissen, Praxis, Schaubilder, Astrologie, Tools …).
// Ergänzt portrait-check.cjs, das nur Porträtseiten prüft.
//
// Heuristik: Seiten mit mindestens --min (Standard 3) deutschen Funktionswörtern
// (und, nicht, für, ist, eine, auch, wird, oder, aber, wenn …) oder deutschen
// Überschrift-Markern (Porträt, Flügel, Subtyp-Profil …) werden gemeldet, jeweils mit Ausschnitt.
// Zitate und Namen mit Umlauten werden nicht gezählt; Treffer sind Hinweise, keine Urteile.
//
// Nutzung:
//   node ai-prototype/en-leak-check.cjs                  # alle Nicht-Porträt-Routen
//   node ai-prototype/en-leak-check.cjs --filter yoga    # nur Routen mit Teilstring
//   node ai-prototype/en-leak-check.cjs --limit 30 --workers 6 --min 2

const os = require("os");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

function loadPlaywright() {
  for (const c of ["/opt/node-tools/node_modules/playwright", path.join(os.homedir(), ".node-tools/node_modules/playwright-core"), "playwright"]) {
    try { return require(c); } catch (e) {}
  }
  console.error("Playwright nicht gefunden: mkdir -p ~/.node-tools && cd ~/.node-tools && npm i playwright-core");
  process.exit(2);
}
const { chromium } = loadPlaywright();

const ROOT = path.join(__dirname, "..");
const PORT = 4174;
const BASE = `http://localhost:${PORT}`;
const STOP = /\b(und|nicht|für|ist|eine|einen|einem|auch|wird|werden|oder|aber|wenn|dass|sind|wurde|kann|noch|über|durch|sich|dem|zum|zur|bei)\b/g;
const MARK = /Porträt|[Ff]lügel|Tierentsprechung|Selbsterhaltend|Sozialer Typ|Sexueller Typ|Subtyp-Profil|Lebensmusterkompass|Alle berühmten|Radix/g;

function arg(n, d) { const i = process.argv.indexOf(`--${n}`); return i === -1 ? d : process.argv[i + 1]; }

function routes() {
  const t = fs.readFileSync(path.join(ROOT, "data/register.js"), "utf8");
  const en = t.slice(t.indexOf("registerEntriesEN"));
  const set = new Set();
  const re = /route:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(en))) if (!/^(beruehmte|krankheitsportraets|kriminalpsychologie)-/.test(m[1])) set.add(m[1]);
  return [...set].sort();
}

async function main() {
  const filter = arg("filter", "");
  const limit = parseInt(arg("limit", "0"), 10);
  const workers = parseInt(arg("workers", "4"), 10);
  const min = parseInt(arg("min", "3"), 10);
  let list = routes();
  if (filter) list = list.filter((r) => r.includes(filter));
  if (limit) list = list.slice(0, limit);
  console.log(`Prüfe ${list.length} englische Seiten …`);

  const server = spawn("python3", ["-m", "http.server", String(PORT)], { cwd: ROOT, stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 1200));
  let browser;
  try { browser = await chromium.launch(); } catch (e) { browser = await chromium.launch({ channel: "chrome" }); }
  const ctx = await browser.newContext();
  await ctx.addInitScript(() => { try { localStorage.setItem("enneagramm-kompass:tier", "heilwissen"); } catch (e) {} });

  const hits = [];
  let next = 0, done = 0;
  async function worker() {
    const page = await ctx.newPage();
    while (next < list.length) {
      const r = list[next++];
      let text = "";
      try {
        await page.goto(`${BASE}/en/#${r}`, { waitUntil: "domcontentloaded" });
        await page.reload({ waitUntil: "domcontentloaded" });
        await page.waitForTimeout(2500);
        text = await page.evaluate(() => (document.querySelector("#app") || document.body).innerText || "");
      } catch (e) { hits.push({ r, err: String(e.message).slice(0, 80) }); }
      const stops = text.match(STOP) || [];
      const marks = text.match(MARK) || [];
      if (stops.length + marks.length >= min) {
        const ctxs = [];
        const re = new RegExp(`.{0,40}(${STOP.source}|${MARK.source}).{0,40}`, "g");
        let m; while ((m = re.exec(text)) && ctxs.length < 3) ctxs.push(m[0].replace(/\s+/g, " "));
        hits.push({ r, n: stops.length + marks.length, ctxs });
        console.log(`⚠️  ${r} (${stops.length + marks.length})\n    ${ctxs.join("\n    ")}`);
      }
      if (++done % 50 === 0) console.log(`… ${done}/${list.length}`);
    }
    await page.close();
  }
  try { await Promise.all(Array.from({ length: workers }, worker)); }
  finally { await browser.close(); server.kill(); }
  console.log(`\n${list.length - hits.length} von ${list.length} Seiten ohne Auffälligkeit, ${hits.length} zu prüfen.`);
  if (hits.length) process.exit(1);
}
main();
