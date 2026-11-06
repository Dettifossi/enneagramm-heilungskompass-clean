// Testergebnis als Bildkarte weitergeben (Typentest, Motivations-Schnelltest, Diagnosetest ...).
// Erscheint auf Ergebnisseiten mit der Karte .typentest-card--result. Nur Typ, Name, Tier und Kurztext:
// kein Ersatz für die App, sondern ein Anreiz, selbst zu testen. Wird erst bei Bedarf nachgeladen.
const SITE = "https://kompass.verlagshausrathmer.com";
const FONT = 'Georgia, "Times New Roman", serif';
const COPPER = "#9a5b34", INK = "#2a2420", MUTED = "#6b625a", LINE = "#d9cdbd", PAPER = "#faf6ef";

const T = {
  de: { brand: "Enneagramm-Heilungskompass", mine: "Mein Tipp-Typ im Enneagramm", tier: "Mein Tier", find: "Finde deinen Typ im Enneagramm-Heilungskompass",
        note: "Selbsteinschätzung – ein Orientierungshinweis, kein Urteil.", btn: "Ergebnis als Bild teilen", busy: "Wird erstellt …", err: "Die Karte konnte nicht erstellt werden.",
        base: SITE + "/", msg: (t, tier) => "Mein Tipp-Typ im Enneagramm: " + t + (tier ? " – " + tier : "") + ".\nFinde deinen Typ: " + SITE + "/",
        lazy: "./lazy/lebensmusterkompass.js" },
  en: { brand: "Enneagram Healing Compass", mine: "My Enneagram type guess", tier: "My animal", find: "Find your type in the Enneagram Healing Compass",
        note: "Self-assessment – an orientation, not a verdict.", btn: "Share result as image", busy: "Creating …", err: "The card could not be created.",
        base: SITE + "/en/", msg: (t, tier) => "My Enneagram type guess: " + t + (tier ? " – " + tier : "") + ".\nFind your type: " + SITE + "/en/",
        lazy: "../en/data/lazy/lebensmusterkompass.js" }
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

export function mountResultShare(lang) {
  const card = document.querySelector(".typentest-card--result:not([data-share])");
  if (!card) return;
  card.dataset.share = "1";
  const tx = T[lang];
  const row = document.createElement("div"); row.className = "schaubild-share";
  const b = document.createElement("button"); b.type = "button"; b.className = "pdf-share-btn"; b.textContent = tx.btn;
  b.addEventListener("click", () => shareCard(lang, card, b));
  row.appendChild(b);
  const anchor = card.querySelector(".typentest-cta-group") || card.querySelector(".typentest-disclaimer");
  if (anchor && anchor.classList.contains("typentest-cta-group")) anchor.before(row); else if (anchor) anchor.after(row); else card.appendChild(row);
}
