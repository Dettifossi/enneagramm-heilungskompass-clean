// Massenprüfung aller Porträtseiten (Berühmte, Kriminal, Krankheit), DE und EN.
// Ergänzt smoke-test.cjs, der nur eine feste Auswahl prüft.
//
// Pro Route geprüft: Seite rendert (Name, mindestens 5 Abschnitte), keine JS-Fehler,
// kein "undefined"/"null" im Text, Porträtbild auf R2 erreichbar (HTTP 200).
//
// Nutzung:
//   node ai-prototype/portrait-check.cjs                 # alle Porträts, DE + EN
//   node ai-prototype/portrait-check.cjs --lang de       # nur DE (oder en)
//   node ai-prototype/portrait-check.cjs --filter kunze  # nur Routen mit diesem Teilstring
//   node ai-prototype/portrait-check.cjs --limit 20      # nur die ersten 20 Routen
//   node ai-prototype/portrait-check.cjs --workers 6     # parallele Browser-Tabs (Standard 4)
//
// Startet selbst `python3 -m http.server 4174` und beendet ihn danach
// (Port 4174 darf nicht schon belegt sein). Exit-Code 1 bei Fehlern.

const os = require("os");
function loadPlaywright() {
  const candidates = [
    "/opt/node-tools/node_modules/playwright",
    path.join(os.homedir(), ".node-tools/node_modules/playwright-core"),
    "playwright",
  ];
  for (const c of candidates) {
    try { return require(c); } catch (e) {}
  }
  console.error("Playwright nicht gefunden. Installieren: mkdir -p ~/.node-tools && cd ~/.node-tools && npm i playwright-core");
  process.exit(2);
}
async function launchBrowser(chromium) {
  try { return await chromium.launch(); } catch (e) {}
  return chromium.launch({ channel: "chrome" }); // Fallback: installiertes Google Chrome
}
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { chromium } = loadPlaywright();

const ROOT = path.join(__dirname, "..");
const PORT = 4174;
const BASE = `http://localhost:${PORT}`;
const TIER_KEY = "enneagramm-kompass:tier";
const TIER_VAL = "heilwissen";

// Routen mit passendem Präfix, die keine Einzelporträts sind.
const NOT_PORTRAITS = new Set(["beruehmte-persoenlichkeiten", "beruehmte-obama"]);

function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? def : process.argv[i + 1];
}

function routesFrom(file) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const found = new Set();
  const re = /\{\s*route:\s*"((?:beruehmte|kriminalpsychologie|krankheitsportraets)-[a-z0-9-]+)"\s*,\s*name:/g;
  let m;
  while ((m = re.exec(src))) if (!NOT_PORTRAITS.has(m[1])) found.add(m[1]);
  return [...found];
}

function startServer() {
  return new Promise((resolve, reject) => {
    const s = spawn("python3", ["-m", "http.server", String(PORT)], { cwd: ROOT, stdio: "ignore" });
    s.on("error", reject);
    setTimeout(() => resolve(s), 1200);
  });
}

async function checkRoute(page, lang, route) {
  const errors = [];
  const onErr = (e) => errors.push(String(e.message || e).slice(0, 160));
  const onConsole = (m) => {
    if (m.type() === "error" && !/Failed to load resource|cloudflareinsights|CORS policy|ERR_FAILED/.test(m.text())) errors.push(m.text().slice(0, 160));
  };
  page.on("pageerror", onErr);
  page.on("console", onConsole);

  const url = `${BASE}/${lang === "en" ? "en/" : ""}#${route}`;
  let info = { name: "", sections: 0, img: "", bad: false };
  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.reload({ waitUntil: "domcontentloaded" });
    await page
      .waitForFunction(() => document.querySelectorAll("h2.vb-section").length > 0, null, { timeout: 15000 })
      .catch(() => {});
    info = await page.evaluate(() => {
      const text = document.body.innerText || "";
      return {
        name: document.querySelector(".krim-portrait-name")?.textContent?.trim() || "",
        sections: document.querySelectorAll("h2.vb-section").length,
        img: document.querySelector(".krim-portrait-wrap img")?.src || "",
        bad: /\bundefined\b|\[object Object\]/.test(text),
      };
    });
  } catch (e) {
    errors.push("Navigation: " + String(e.message).slice(0, 120));
  }
  page.off("pageerror", onErr);
  page.off("console", onConsole);

  const problems = [];
  if (!info.name) problems.push("kein Porträtname (Seite leer oder falsche Route)");
  if (info.sections < 5) problems.push(`nur ${info.sections} Abschnitte`);
  if (info.bad) problems.push('"undefined" oder "[object Object]" im Text');
  if (info.img) {
    const ok = await fetch(info.img, { method: "HEAD" }).then((r) => r.ok).catch(() => false);
    if (!ok) problems.push("Bild nicht erreichbar: " + info.img.split("/").pop());
  } else if (info.name) {
    problems.push("kein Bild-Element");
  }
  errors.slice(0, 3).forEach((e) => problems.push("JS: " + e));
  return { route, lang, problems };
}

(async () => {
  const lang = arg("lang", "all");
  const filter = arg("filter", "");
  const limit = parseInt(arg("limit", "0"), 10);
  const workers = parseInt(arg("workers", "4"), 10);

  const jobs = [];
  for (const l of ["de", "en"]) {
    if (lang !== "all" && lang !== l) continue;
    let routes = routesFrom(l === "en" ? "en/bundle.js" : "bundle.js");
    if (filter) routes = routes.filter((r) => r.includes(filter));
    if (limit) routes = routes.slice(0, limit);
    routes.forEach((r) => jobs.push({ lang: l, route: r }));
  }
  console.log(`Prüfe ${jobs.length} Porträtseiten mit ${workers} Tabs …`);

  const server = await startServer();
  const browser = await launchBrowser(chromium);
  const context = await browser.newContext();
  await context.addInitScript(([k, v]) => {
    try { localStorage.setItem(k, v); } catch (e) {}
  }, [TIER_KEY, TIER_VAL]);

  const failed = [];
  let done = 0;
  let next = 0;
  async function worker() {
    const page = await context.newPage();
    while (next < jobs.length) {
      const job = jobs[next++];
      const res = await checkRoute(page, job.lang, job.route);
      done++;
      if (res.problems.length) {
        failed.push(res);
        console.log(`❌ [${res.lang}] ${res.route}\n   ${res.problems.join("\n   ")}`);
      }
      if (done % 25 === 0) console.log(`… ${done}/${jobs.length}`);
    }
    await page.close();
  }

  try {
    await Promise.all(Array.from({ length: Math.max(1, workers) }, worker));
  } finally {
    await browser.close();
    server.kill();
  }

  console.log(`\n${jobs.length - failed.length} von ${jobs.length} Seiten ok.`);
  if (failed.length) {
    console.log(`${failed.length} mit Problemen (siehe oben).`);
    process.exit(1);
  }
})();
