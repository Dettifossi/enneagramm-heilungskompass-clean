// Minimaler funktionaler Vorab-Check vor dem Deploy. Kein Ersatz für echte Tests,
// aber fängt genau die Klasse von Fehlern ab, die in dieser Session mehrfach erst
// durch Nutzer-Feedback auffiel: JS-Fehler/weißer Bildschirm auf zentralen Routen,
// die ein reiner `node --check`-Syntaxcheck nicht erkennen kann (der prüft nur,
// ob die Datei als JS geparst werden kann, nicht ob sie beim Rendern im Browser
// tatsächlich funktioniert).
//
// Nutzung: node ai-prototype/smoke-test.cjs
// Voraussetzung: lokaler Server läuft nicht bereits auf Port 4174 (das Skript
// startet selbst einen `python3 -m http.server 4174` und beendet ihn danach).
//
// Bewusst NICHT in die GitHub-Actions-Deploy-Pipeline (.github/workflows/deploy-pages.yml)
// eingebunden – das wäre eine Änderung an der kritischen CI/CD-Pipeline und sollte
// erst nach ausdrücklicher Freigabe erfolgen. Bis dahin: manuell vor größeren
// Releases laufen lassen, oder bei Bedarf selbst in eine Routine packen.

const { chromium } = require("/opt/node-tools/node_modules/playwright");
const { spawn } = require("child_process");
const path = require("path");

const PORT = 4174;
const BASE = `http://localhost:${PORT}`;

// Routen, die in dieser Session tatsächlich kaputt waren oder viel DOM/Media
// gleichzeitig laden (Jazz-/Songs-Seite, Gesichts-Scan) plus die Startseite als
// genereller Rauchmelder.
const ROUTES = [
  { hash: "", label: "Startseite" },
  { hash: "#gesichts-scan", label: "Gesichts-Scan" },
  { hash: "#detlef-rathmer-jazz", label: "Jazz & Musik (Klick-zum-Laden-Videos)" },
  { hash: "#david-rathmer-impulse", label: "David Rathmer – Impulse" },
  { hash: "#beruehmte-yannick-van-de-velde", label: "Neues Porträt: Yannick van de Velde" },
  { hash: "en/#beruehmte-yannick-van-de-velde", label: "Neues EN-Porträt: Yannick van de Velde" },
  { hash: "#beruehmte-hillary-clinton", label: "Neues Porträt: Hillary Clinton" },
  { hash: "en/#beruehmte-hillary-clinton", label: "Neues EN-Porträt: Hillary Clinton" },
  { hash: "#beruehmte-henri-poincare", label: "Neues Porträt: Henri Poincaré" },
  { hash: "en/#beruehmte-henri-poincare", label: "Neues EN-Porträt: Henri Poincaré" },
  { hash: "#beruehmte-carl-xvi-gustaf", label: "Neues Porträt: Carl XVI. Gustaf" },
  { hash: "en/#beruehmte-carl-xvi-gustaf", label: "Neues EN-Porträt: Carl XVI. Gustaf" },
];

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn("python3", ["-m", "http.server", String(PORT)], {
      cwd: path.join(__dirname, ".."),
      stdio: "ignore",
    });
    proc.on("error", reject);
    // kurze Wartezeit, bis der Server tatsächlich antwortet
    setTimeout(() => resolve(proc), 1200);
  });
}

async function checkRoute(browser, route) {
  const page = await browser.newPage();
  const errors = [];
  // Nur echte, unbehandelte JS-Laufzeitfehler zählen (pageerror) – reine
  // Ressourcen-/Netzwerkfehler externer Drittanbieter (Google Fonts, OneSignal-SW-
  // Import, Cloudflare Analytics) erzeugen in Sandbox-/CI-Umgebungen ohne echtes
  // Internet zuverlässig Fehler, die mit dem Zustand der eigenen App nichts zu tun
  // haben. In einer Umgebung mit echtem Internetzugang treten sie nicht auf.
  const ENV_NOISE = [
    "ServiceWorker script evaluation failed",
    "ERR_TUNNEL_CONNECTION_FAILED",
    "ERR_CERT_AUTHORITY_INVALID",
    "ERR_PROXY_CONNECTION_FAILED",
    "ERR_NAME_NOT_RESOLVED",
  ];
  page.on("pageerror", (err) => {
    if (ENV_NOISE.some((n) => err.message.includes(n))) return;
    errors.push(err.message);
  });

  await page.goto(`${BASE}/${route.hash}`, { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(500);

  let clickOk = true;
  if (route.hash === "#detlef-rathmer-jazz") {
    // Klick-zum-Laden-Facade testen: Thumbnail antippen, prüfen dass ein echter
    // Iframe mit sichtbarer Größe erscheint (genau der Bug, der zuletzt gemeldet wurde).
    const facade = page.locator('[onclick^="window.ytFacadePlay"]').first();
    if (await facade.count()) {
      await facade.click();
      await page.waitForTimeout(400);
      const iframe = page.locator('[onclick^="window.ytFacadePlay"]').first().locator("iframe");
      const box = await iframe.boundingBox().catch(() => null);
      clickOk = !!box && box.width > 10 && box.height > 10;
    }
  }

  await page.close();
  return { ...route, errors, clickOk };
}

(async () => {
  console.log("Starte lokalen Server …");
  const server = await startServer();
  const browser = await chromium.launch();
  let failed = false;

  try {
    for (const route of ROUTES) {
      const result = await checkRoute(browser, route);
      const ok = result.errors.length === 0 && result.clickOk;
      console.log(`${ok ? "✅" : "❌"} ${result.label} (${BASE}/${result.hash || ""})`);
      if (result.errors.length) {
        failed = true;
        result.errors.slice(0, 5).forEach((e) => console.log("   JS-Fehler:", e));
      }
      if (!result.clickOk) {
        failed = true;
        console.log("   Klick-zum-Laden-Video: Iframe nach Klick nicht sichtbar/zu klein.");
      }
    }
  } finally {
    await browser.close();
    server.kill();
  }

  if (failed) {
    console.log("\nSmoke-Test FEHLGESCHLAGEN.");
    process.exit(1);
  }
  console.log("\nAlle geprüften Routen ok.");
})();
