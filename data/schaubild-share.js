// Schaubilder zum Weitergeben: Bild mit Markenband (JPEG) oder als PDF mit anklickbarem Link.
// Erscheint nur auf Schaubild-Seiten mit genau einem Hauptbild. Wird erst bei Bedarf nachgeladen.
import { pagesToPdf } from "./pdf-share.js?v=13";
import { drawQr } from "./qr-draw.js?v=1";

const SITE = "https://kompass.verlagshausrathmer.com";
const MIN_WIDTH = 1200;   // Mindestbreite des Originalbilds in Pixeln
const FONT = 'Georgia, "Times New Roman", serif';
const COPPER = "#9a5b34", INK = "#2a2420", MUTED = "#6b625a", LINE = "#d9cdbd", PAPER = "#faf6ef";

const T = {
  de: { brand: "Enneagramm-Heilungskompass", img: "Schaubild teilen", pdf: "Als PDF", busy: "Wird erstellt …", err: "Das Schaubild konnte nicht erstellt werden.",
        from: "Aus dem Enneagramm-Heilungskompass", online: "Dieses Schaubild in der App ansehen:", all: "Alle Schaubilder und die App:", base: SITE + "/",
        msg: t => "›" + t + "‹ – aus dem Enneagramm-Heilungskompass" },
  en: { brand: "Enneagram Healing Compass", img: "Share chart", pdf: "As PDF", busy: "Creating …", err: "The chart could not be created.",
        from: "From the Enneagram Healing Compass", online: "View this chart in the app:", all: "All charts and the app:", base: SITE + "/en/",
        msg: t => "›" + t + "‹ – from the Enneagram Healing Compass" }
};

function loadImg(src) {
  return new Promise(res => {
    const im = new Image(); im.crossOrigin = "anonymous";
    im.onload = () => res(im); im.onerror = () => res(null); im.src = src;
  });
}

function wrap(ctx, text, maxW) {
  const words = text.split(/\s+/), lines = []; let cur = "";
  words.forEach(w => { const t = cur ? cur + " " + w : w; if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; });
  if (cur) lines.push(cur); return lines;
}

async function imageCard(img, tx, route) {
  const W = Math.min(img.naturalWidth, 2000), s = W / img.naturalWidth, H0 = Math.round(img.naturalHeight * s);
  const band = Math.max(160, Math.round(W * 0.115));
  const c = document.createElement("canvas"); c.width = W; c.height = H0 + band;
  const x = c.getContext("2d");
  x.fillStyle = "#fff"; x.fillRect(0, 0, W, c.height);
  x.drawImage(img, 0, 0, W, H0);
  x.fillStyle = PAPER; x.fillRect(0, H0, W, band);
  x.fillStyle = COPPER; x.fillRect(0, H0, W, Math.max(3, Math.round(band * 0.04)));
  const pad = Math.round(band * 0.4);
  x.textBaseline = "middle"; x.textAlign = "left";
  x.fillStyle = COPPER; x.font = `bold ${Math.round(band * 0.30)}px ${FONT}`;
  x.fillText(tx.brand, pad, H0 + band * 0.42);
  x.fillStyle = MUTED; x.font = `${Math.round(band * 0.22)}px ${FONT}`;
  x.fillText(tx.base.replace("https://", "") + route + "/", pad, H0 + band * 0.72);
  const qs = Math.round(band * 0.86); drawQr(x, tx.base + route + "/", W - qs - Math.round(band * 0.1), H0 + Math.round((band - qs) / 2), qs);
  return await new Promise(r => c.toBlob(r, "image/jpeg", 0.95));
}

async function pdfBlob(img, title, tx, route) {
  const land = img.naturalWidth / img.naturalHeight > 1.15;
  const W = land ? 841.89 : 595.28, H = land ? 595.28 : 841.89, M = 36;
  const S = Math.min(4, Math.max(2, Math.ceil(img.naturalWidth / (W - 2 * M))));   // so viele Pixel je Punkt, dass das Bild nicht verkleinert wird
  const c = document.createElement("canvas"); c.width = Math.round(W * S); c.height = Math.round(H * S);
  const x = c.getContext("2d"); x.scale(S, S); x.fillStyle = "#fff"; x.fillRect(0, 0, W, H);
  x.textBaseline = "alphabetic"; x.textAlign = "left";
  // Kopf
  x.fillStyle = COPPER; x.font = `600 9px ${FONT}`; x.letterSpacing = "0.8px"; x.fillText(tx.brand.toUpperCase(), M, M); x.letterSpacing = "0px";
  x.strokeStyle = COPPER; x.lineWidth = 1; x.beginPath(); x.moveTo(M, M + 7); x.lineTo(W - M, M + 7); x.stroke();
  // Titel
  x.fillStyle = INK; x.font = `bold 20px ${FONT}`;
  const tl = wrap(x, title, W - 2 * M); let y = M + 34;
  tl.slice(0, 3).forEach(l => { x.fillText(l, M, y); y += 25; });
  // Fußbereich
  const footH = 104, top = y + 4, bottom = H - M - footH;
  const aw = W - 2 * M, ah = bottom - top, sc = Math.min(aw / img.naturalWidth, ah / img.naturalHeight);
  const iw = img.naturalWidth * sc, ih = img.naturalHeight * sc;
  x.drawImage(img, M + (aw - iw) / 2, top + (ah - ih) / 2, iw, ih);
  const links = [];
  let fy = H - M - footH + 30;
  const QRS = 74;
  x.fillStyle = PAPER; x.fillRect(M, bottom + 8, W - 2 * M, footH - 8);
  x.strokeStyle = COPPER; x.lineWidth = 1.2; x.strokeRect(M, bottom + 8, W - 2 * M, footH - 8);
  const full = tx.base + route + "/";
  drawQr(x, full, W - M - 14 - QRS, bottom + 8 + 15, QRS);
  [[tx.online, full], [tx.all, tx.base]].forEach(([label, url]) => {
    x.fillStyle = INK; x.font = `11.5px ${FONT}`; x.fillText(label, M + 14, fy);
    const lw = x.measureText(label + " ").width;
    x.fillStyle = COPPER; x.font = `bold 11.5px ${FONT}`; const uw = x.measureText(url.replace("https://", "")).width;
    x.fillText(url.replace("https://", ""), M + 14 + lw, fy);
    x.strokeStyle = COPPER; x.lineWidth = 0.6; x.beginPath(); x.moveTo(M + 14 + lw, fy + 2); x.lineTo(M + 14 + lw + uw, fy + 2); x.stroke();
    links.push({ href: url, x1: M + 14 + lw, x2: M + 14 + lw + uw, y1: fy - 12, y2: fy + 4 });
    fy += 24;
  });
  return await pagesToPdf([{ cv: c, links }], title + " – " + tx.brand, W, H);
}

async function share(blob, fname, mime, tx, title, route) {
  const file = new File([blob], fname, { type: mime });
  const text = tx.msg(title) + "\n" + tx.base + route + "/";
  if (window.__shareTest) { window.__shareTest(blob, fname); return; }
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title, text }); return; }
    catch (e) { if (e && e.name === "AbortError") return; }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = fname; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

export async function mountSchaubildButtons(lang) {
  const eb = document.querySelector("main .eyebrow:not([data-sbs])") || document.querySelector(".eyebrow:not([data-sbs])");
  if (!eb) return;
  eb.dataset.sbs = "1";
  if (!/^(Schaubild|Chart|Diagram)/i.test(eb.textContent.trim())) return;
  const root = document.querySelector("main") || document.body;
  const all = [...root.querySelectorAll("img")].filter(i => !i.closest("header, nav, .book-tip, .topline, .page-back-bar"));
  let cand = all.filter(i => i.classList.contains("psycho-img"));
  if (!cand.length) cand = all.filter(i => /assets\/.+\.(jpe?g|png|webp)/i.test(i.getAttribute("src") || "") && !/icon|logo|avatar|cover|tier|sounds/i.test(i.getAttribute("src") || ""));
  if (cand.length < 1 || cand.length > 2) return;          // Galerien mit vielen Bildern: kein Knopf
  const main = cand[0];
  if (document.querySelector(".schaubild-share")) return;
  // Nur scharfe Schaubilder weitergeben: zu kleine Bilder wirken beim Teilen und Drucken unscharf (schlechte Werbung)
  const probe = await loadImg(main.currentSrc || main.src);
  if (!probe || probe.naturalWidth < MIN_WIDTH) return;
  const route = location.hash.replace(/^#/, "").split("?")[0];
  if (!route || route.includes("/")) return;
  const tx = T[lang];
  const title = ((root.querySelector("h1") || {}).textContent || document.title).replace(/\s+/g, " ").trim();
  const box = document.createElement("div"); box.className = "schaubild-share";
  const mk = (label, kind) => {
    const b = document.createElement("button"); b.type = "button"; b.className = "pdf-share-btn"; b.textContent = label;
    b.addEventListener("click", async () => {
      const old = b.textContent; b.disabled = true; b.textContent = tx.busy;
      try {
        const img = await loadImg(main.currentSrc || main.src);
        if (!img) throw new Error("img");
        const slug = route.replace(/[^a-z0-9-]/gi, "");
        if (kind === "img") await share(await imageCard(img, tx, route), slug + ".jpg", "image/jpeg", tx, title, route);
        else await share(await pdfBlob(img, title, tx, route), slug + ".pdf", "application/pdf", tx, title, route);
      } catch (e) {
        console.error(e);
        const text = tx.msg(title) + "\n" + tx.base + route + "/";
        if (navigator.share) navigator.share({ title, text }).catch(() => {}); else alert(tx.err);
      } finally { b.disabled = false; b.textContent = old; }
    });
    return b;
  };
  box.appendChild(mk(tx.img, "img")); box.appendChild(mk(tx.pdf, "pdf"));
  (main.closest(".psycho-img-wrap") || main.parentElement || main).after(box);
}
