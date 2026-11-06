// Testergebnis als Bildkarte weitergeben (Typentest, Motivations-Schnelltest, Diagnosetest ...).
// Erscheint auf Ergebnisseiten mit der Karte .typentest-card--result. Nur Typ, Name, Tier und Kurztext:
// kein Ersatz für die App, sondern ein Anreiz, selbst zu testen. Wird erst bei Bedarf nachgeladen.
const SITE = "https://kompass.verlagshausrathmer.com";
const FONT = 'Georgia, "Times New Roman", serif';
const COPPER = "#9a5b34", INK = "#2a2420", MUTED = "#6b625a", LINE = "#d9cdbd", PAPER = "#faf6ef";

const T = {
  de: { brand: "Enneagramm-Heilungskompass", mine: "Mein Tipp-Typ im Enneagramm", tier: "Mein Tier", find: "Finde deinen Typ im Enneagramm-Heilungskompass",
        note: "Selbsteinschätzung – ein Orientierungshinweis, kein Urteil.", mineTier: "Mein Enneagramm-Tier", beat: "Schaffst du mehr?", tryIt: "Probier es im Enneagramm-Heilungskompass", btn: "Ergebnis als Bild teilen", busy: "Wird erstellt …", err: "Die Karte konnte nicht erstellt werden.",
        base: SITE + "/", msg: (t, tier) => "Mein Tipp-Typ im Enneagramm: " + t + (tier ? " – " + tier : "") + ".\nFinde deinen Typ: " + SITE + "/",
        lazy: "./lazy/lebensmusterkompass.js",
        msgTier: (tier, line) => "Mein Enneagramm-Tier: " + tier + (line ? " (" + line + ")" : "") + ".\nFinde dein Tier: " + SITE + "/",
        msgScore: (lab, s) => "Subtyp-Quiz – " + lab + ": " + s + ".\nSchaffst du mehr? " + SITE + "/" },
  en: { brand: "Enneagram Healing Compass", mine: "My Enneagram type guess", tier: "My animal", find: "Find your type in the Enneagram Healing Compass",
        note: "Self-assessment – an orientation, not a verdict.", mineTier: "My Enneagram animal", beat: "Can you beat that?", tryIt: "Try it in the Enneagram Healing Compass", btn: "Share result as image", busy: "Creating …", err: "The card could not be created.",
        base: SITE + "/en/", msg: (t, tier) => "My Enneagram type guess: " + t + (tier ? " – " + tier : "") + ".\nFind your type: " + SITE + "/en/",
        lazy: "../en/data/lazy/lebensmusterkompass.js",
        msgTier: (tier, line) => "My Enneagram animal: " + tier + (line ? " (" + line + ")" : "") + ".\nFind yours: " + SITE + "/en/",
        msgScore: (lab, s) => "Enneagram quiz – " + lab + ": " + s + ".\nCan you beat that? " + SITE + "/en/" }
};

const txt = el => (el ? el.textContent : "").replace(/\s+/g, " ").trim();

async function tierFor(lang, badgeText) {
  const m = badgeText.match(/(\d)\s*[·\-–]\s*(S[EPOX])/i) || badgeText.match(/(S[EPOX])\s*[·\-–]?\s*(\d)/i);
  if (!m) return "";
  let num, inst;
  if (/^\d$/.test(m[1])) { num = m[1]; inst = m[2]; } else { inst = m[1]; num = m[2]; }
  inst = inst.toUpperCase().replace("SP", "SE");
  try {
    const mod = await import(T[lang].lazy);
    const e = mod.LEBENSMUSTERKOMPASS && mod.LEBENSMUSTERKOMPASS[inst + num];
    return e ? e.tier : "";
  } catch (e) { return ""; }
}

function wrapLines(x, text, font, maxW) {
  x.font = font; const ws = text.split(" "), ls = []; let cur = "";
  ws.forEach(w => { const t = cur ? cur + " " + w : w; if (x.measureText(t).width > maxW && cur) { ls.push(cur); cur = w; } else cur = t; });
  if (cur) ls.push(cur); return ls;
}

async function buildCard(lang, card) {
  const tx = T[lang];
  const badge = card.querySelector(".typentest-result-badge");
  const badgeText = txt(badge);
  const title = txt(card.querySelector("h2, .typentest-titel"));
  const sub = txt(card.querySelector(".typentest-subline"));
  const body = txt(card.querySelector(".typentest-result-text"));
  const color = badge ? getComputedStyle(badge).color : COPPER;
  const tier = await tierFor(lang, badgeText);
  const W = 1080, H = 1350;
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  const x = c.getContext("2d");
  x.fillStyle = PAPER; x.fillRect(0, 0, W, H);
  x.fillStyle = color; x.fillRect(0, 0, W, 14);
  x.textAlign = "center"; x.textBaseline = "alphabetic";
  x.fillStyle = COPPER; x.font = `600 26px ${FONT}`; x.letterSpacing = "3px"; x.fillText(tx.brand.toUpperCase(), W / 2, 66); x.letterSpacing = "0px";
  x.fillStyle = MUTED; x.font = `italic 34px ${FONT}`; x.fillText(tx.mine, W / 2, 140);
  // Abzeichen
  const bw = Math.min(900, Math.max(360, badgeText.length * 38)), bh = 120, bx = (W - bw) / 2, by = 190;
  x.strokeStyle = color; x.lineWidth = 6; x.beginPath(); x.roundRect ? x.roundRect(bx, by, bw, bh, 60) : x.rect(bx, by, bw, bh); x.stroke();
  x.fillStyle = color; x.font = `bold 58px ${FONT}`; x.fillText(badgeText, W / 2, by + 80);
  let y = by + bh + 100;
  x.fillStyle = color; wrapLines(x, title, `bold 64px ${FONT}`, W - 140).slice(0, 2).forEach(l => { x.font = `bold 64px ${FONT}`; x.fillText(l, W / 2, y); y += 74; });
  if (sub) { x.fillStyle = MUTED; x.font = `34px ${FONT}`; x.fillText(sub, W / 2, y); y += 56; }
  if (tier) {
    y += 14;
    x.fillStyle = INK; x.font = `34px ${FONT}`; x.fillText(tx.tier + ":", W / 2, y); y += 64;
    x.fillStyle = COPPER; x.font = `bold 70px ${FONT}`; x.fillText(tier, W / 2, y); y += 70;
  }
  y += 22;
  x.fillStyle = INK;
  const maxLines = tier ? 6 : 8;
  wrapLines(x, body, `32px ${FONT}`, W - 170).slice(0, maxLines).forEach(l => { x.font = `32px ${FONT}`; x.fillText(l, W / 2, y); y += 44; });
  // Fuß
  x.fillStyle = COPPER; x.fillRect(0, H - 150, W, 3);
  x.fillStyle = MUTED; x.font = `24px ${FONT}`; x.fillText(tx.note, W / 2, H - 112);
  x.fillStyle = INK; x.font = `28px ${FONT}`; x.fillText(tx.find, W / 2, H - 66);
  x.fillStyle = COPPER; x.font = `bold 30px ${FONT}`; x.fillText(tx.base.replace("https://", ""), W / 2, H - 24);
  const blob = await new Promise(r => c.toBlob(r, "image/jpeg", 0.92));
  return { blob, tier, label: (badgeText + " " + title).trim() };
}

async function shareCard(lang, card, btn) {
  const tx = T[lang], old = btn.textContent;
  btn.disabled = true; btn.textContent = tx.busy;
  try {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    const { blob, tier, label } = await buildCard(lang, card);
    const file = new File([blob], (lang === "en" ? "my-enneagram-type" : "mein-enneagramm-typ") + ".jpg", { type: "image/jpeg" });
    const text = tx.msg(label, tier);
    if (window.__resTest) { window.__resTest(blob, file.name); return; }
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: tx.mine, text }); return; }
      catch (e) { if (e && e.name === "AbortError") return; }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = file.name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  } catch (e) { console.error(e); alert(tx.err); }
  finally { btn.disabled = false; btn.textContent = old; }
}

function finish(blob, name, mime, tx, title, text) {
  const file = new File([blob], name, { type: mime });
  if (window.__resTest) { window.__resTest(blob, name); return Promise.resolve(); }
  const done = () => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  };
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    return navigator.share({ files: [file], title, text }).catch(e => { if (!(e && e.name === "AbortError")) done(); });
  }
  done(); return Promise.resolve();
}

function loadImg(src) {
  return new Promise(res => { if (!src) return res(null); const im = new Image(); im.crossOrigin = "anonymous"; im.onload = () => res(im); im.onerror = () => res(null); im.src = src; });
}

function frame(tx, color) {
  const W = 1080, H = 1350, c = document.createElement("canvas"); c.width = W; c.height = H;
  const x = c.getContext("2d"); x.fillStyle = PAPER; x.fillRect(0, 0, W, H);
  x.fillStyle = color || COPPER; x.fillRect(0, 0, W, 14);
  x.textAlign = "center"; x.textBaseline = "alphabetic";
  x.fillStyle = COPPER; x.font = `600 26px ${FONT}`; x.letterSpacing = "3px"; x.fillText(tx.brand.toUpperCase(), W / 2, 66); x.letterSpacing = "0px";
  return { c, x, W, H };
}
function footer(x, W, H, tx, line1) {
  x.fillStyle = COPPER; x.fillRect(0, H - 150, W, 3);
  x.fillStyle = MUTED; x.font = `24px ${FONT}`; x.fillText(line1, W / 2, H - 112);
  x.fillStyle = INK; x.font = `28px ${FONT}`; x.fillText(tx.find, W / 2, H - 66);
  x.fillStyle = COPPER; x.font = `bold 30px ${FONT}`; x.fillText(tx.base.replace("https://", ""), W / 2, H - 24);
}

// Tierquiz: Tierbild, Tiername, Subtyp, Kurzbeschreibung
async function tierCard(lang, card) {
  const tx = T[lang];
  const name = txt(card.querySelector("h1, h2"));
  const line = txt([...card.querySelectorAll("p")].find(p => /\(S[EPOX]\d\)/.test(p.textContent)));
  const body = txt([...card.querySelectorAll("p")].find(p => /text-align:\s*left/.test(p.getAttribute("style") || "") && p.textContent.length > 60));
  const img = await loadImg((card.querySelector("img") || {}).src);
  const { c, x, W, H } = frame(tx);
  x.fillStyle = MUTED; x.font = `italic 34px ${FONT}`; x.fillText(tx.mineTier, W / 2, 140);
  const r = 210, cx = W / 2, cy = 400;
  x.save(); x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.clip();
  if (img) { const sc = Math.max(2 * r / img.naturalWidth, 2 * r / img.naturalHeight) * 1.05; x.drawImage(img, cx - img.naturalWidth * sc / 2, cy - img.naturalHeight * sc / 2, img.naturalWidth * sc, img.naturalHeight * sc); }
  else { x.fillStyle = LINE; x.fillRect(cx - r, cy - r, 2 * r, 2 * r); }
  x.restore(); x.strokeStyle = COPPER; x.lineWidth = 6; x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.stroke();
  let y = cy + r + 110;
  x.fillStyle = INK; x.font = `bold 84px ${FONT}`; x.fillText(name, W / 2, y); y += 62;
  x.fillStyle = COPPER; x.font = `bold 34px ${FONT}`; x.fillText(line, W / 2, y); y += 66;
  x.fillStyle = INK; wrapLines(x, body, `30px ${FONT}`, W - 170).slice(0, 6).forEach(l => { x.font = `30px ${FONT}`; x.fillText(l, W / 2, y); y += 42; });
  footer(x, W, H, tx, tx.note);
  return { blob: await new Promise(r2 => c.toBlob(r2, "image/jpeg", 0.92)), text: tx.msgTier(name, line.replace(/.*\((S[EPOX]\d)\).*/, "$1")), title: tx.mineTier, fname: lang === "en" ? "my-enneagram-animal.jpg" : "mein-enneagramm-tier.jpg" };
}

// Quiz-Punktestand: große Zahl und Herausforderung
async function scoreCard(lang, page) {
  const tx = T[lang];
  const label = txt(page.querySelector(".eyebrow")).replace(/^[^·]*·\s*/, "");
  const nums = txt(page.querySelector("h1")).match(/(\d+)\D+(\d+)/) || ["", "?", "10"];
  const score = nums[1] + " / " + nums[2];
  const msg = txt([...page.querySelectorAll("p")].find(p => p.textContent.trim().length > 40 && !/Best/i.test(p.textContent)));
  const { c, x, W, H } = frame(tx);
  x.fillStyle = MUTED; x.font = `italic 36px ${FONT}`; x.fillText(label, W / 2, 190);
  x.fillStyle = COPPER; x.font = `bold 300px ${FONT}`; x.fillText(score, W / 2, 560);
  let y = 680;
  x.fillStyle = INK; wrapLines(x, msg, `38px ${FONT}`, W - 180).slice(0, 5).forEach(l => { x.font = `38px ${FONT}`; x.fillText(l, W / 2, y); y += 54; });
  y = Math.max(y + 50, 1010);
  x.fillStyle = COPPER; x.font = `bold 64px ${FONT}`; x.fillText(tx.beat, W / 2, y); y += 60;
  x.fillStyle = INK; x.font = `34px ${FONT}`; x.fillText(tx.tryIt, W / 2, y);
  footer(x, W, H, tx, tx.brand);
  return { blob: await new Promise(r => c.toBlob(r, "image/jpeg", 0.92)), text: tx.msgScore(label, score), title: label, fname: lang === "en" ? "my-quiz-score.jpg" : "mein-quiz-ergebnis.jpg" };
}

function addButton(lang, anchor, builder, container, place) {
  const tx = T[lang];
  const row = document.createElement("div"); row.className = "schaubild-share";
  const b = document.createElement("button"); b.type = "button"; b.className = "pdf-share-btn"; b.textContent = tx.btn;
  b.addEventListener("click", async () => {
    const old = b.textContent; b.disabled = true; b.textContent = tx.busy;
    try {
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
      const r = await builder(lang, container);
      await finish(r.blob, r.fname, "image/jpeg", tx, r.title, r.text);
    } catch (e) { console.error(e); alert(tx.err); }
    finally { b.disabled = false; b.textContent = old; }
  });
  row.appendChild(b);
  if (place === "before") anchor.before(row); else anchor.after(row);
}

export function mountResultShare(lang) {
  const card = document.querySelector(".typentest-card--result:not([data-share])");
  if (card) mountTypCard(lang, card);
  mountOthers(lang);
}
function mountTypCard(lang, card) {
  card.dataset.share = "1";
  const tx = T[lang];
  const row = document.createElement("div"); row.className = "schaubild-share";
  const b = document.createElement("button"); b.type = "button"; b.className = "pdf-share-btn"; b.textContent = tx.btn;
  b.addEventListener("click", () => shareCard(lang, card, b));
  row.appendChild(b);
  const anchor = card.querySelector(".typentest-cta-group") || card.querySelector(".typentest-disclaimer");
  if (anchor && anchor.classList.contains("typentest-cta-group")) anchor.before(row); else if (anchor) anchor.after(row); else card.appendChild(row);
}
function mountOthers(lang) {
  // Tierquiz-Ergebnis (hat bereits einen Textknopf »Ergebnis teilen«, wir ergänzen die Bildkarte)
  const tq = document.querySelector('button[onclick*="_tqShare"]:not([data-share])');
  if (tq) { tq.dataset.share = "1"; const c2 = tq.closest(".typentest-card") || tq.parentElement; addButton(lang, tq, tierCard, c2, "after"); }
  // Quiz-Punktestand (Subtyp-Motivationsquiz und Comic-Quiz)
  const sq = document.querySelector('button.flash-btn[onclick*="Restart"]:not([data-share])');
  if (sq && /\d+\D+\d+/.test(txt((sq.closest(".page-content") || document).querySelector("h1")))) { sq.dataset.share = "1"; addButton(lang, sq, scoreCard, sq.closest(".page-content"), "before"); }
}
