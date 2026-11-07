// PDF-Auszug zum Weitergeben (nur Porträts verstorbener Personen, siehe data/verstorben.js).
// Wird erst beim ersten Porträt-Aufruf nachgeladen. Layout per Canvas, Ausgabe als PDF mit
// anklickbaren Links (kein Fremdcode nötig). Aufbau: Kopfzeile, Bild, Name, Typ, ausgewählte Abschnitte, Hinweiskasten.
import { VERSTORBEN } from "./verstorben.js?v=5";
import { drawQr } from "./qr-draw.js?v=1";

const SITE = "https://kompass.verlagshausrathmer.com";
const PAGE_W = 595.28, PAGE_H = 841.89, MARGIN = 56.7, S = 2.0;          // S = Canvas-Pixel je PDF-Punkt
const FONT = 'Georgia, "Times New Roman", serif';
const COPPER = "#9a5b34", INK = "#2a2420", MUTED = "#6b625a", LINE = "#d9cdbd", PAPER = "#faf6ef";

const T = {
  de: {
    brand: "Enneagramm-Heilungskompass",
    rubric: { beruehmte: "Berühmte Persönlichkeiten", krankheitsportraets: "Krankheitsporträts", kriminalpsychologie: "Kriminalpsychologie" },
    eyebrow: "Porträt",
    ctaTitle: "Mehr entdecken:",
    ctaText: "Dieses Porträt stammt aus dem Enneagramm-Heilungskompass. Dort finden Sie über 1.100 weitere Porträts, die Parallelen zu anderen Persönlichkeiten desselben Subtyps, den Lebensmusterkompass und alle 27 Subtypen.",
    full: "Dieses Porträt in der App ansehen:",
    fullCard: "Das vollständige Porträt finden Sie unter:",
    all: "Alle Porträts und die App:",
    foot: "Ein Enneagramm-Subtypen-Porträt von Detlef Rathmer. Die Zuordnung zu einem Subtyp ist eine Deutung und keine Diagnose.",
    footMed: " Keine medizinische Aussage.",
    shareTitle: "Porträt als PDF weitergeben",
    btn: "Als PDF weitergeben",
    btnImg: "Als Bild teilen",
    busy: "PDF wird erstellt …",
    err: "Das PDF konnte nicht erstellt werden.",
    page: "Seite",
    base: SITE + "/"
  },
  en: {
    brand: "Enneagram Healing Compass",
    rubric: { beruehmte: "Famous Personalities", krankheitsportraets: "Illness Portraits", kriminalpsychologie: "Criminal Psychology" },
    eyebrow: "Portrait",
    ctaTitle: "Discover more:",
    ctaText: "This portrait comes from the Enneagram Healing Compass. There you will find over 1,100 more portraits, the parallels to other personalities of the same subtype, the Life Pattern Compass and all 27 subtypes.",
    full: "View this portrait in the app:",
    fullCard: "You will find the full portrait at:",
    all: "All portraits and the app:",
    foot: "An Enneagram subtype portrait by Detlef Rathmer. The assignment to a subtype is an interpretation, not a diagnosis.",
    footMed: " Not a medical statement.",
    shareTitle: "Share portrait as PDF",
    btn: "Share as PDF",
    btnImg: "Share as image",
    busy: "Creating PDF …",
    err: "The PDF could not be created.",
    page: "Page",
    base: SITE + "/en/"
  }
};

export function isShareable(route) { return VERSTORBEN.has(route); }

/* ---------- Inline-Text → Runs ---------- */
function runsFrom(node, base, lang, out, style) {
  node.childNodes.forEach(n => {
    if (n.nodeType === 3) { if (n.textContent) out.push({ t: n.textContent, b: style.b, i: style.i, href: style.href }); }
    else if (n.nodeType === 1) {
      const tag = n.tagName.toLowerCase();
      if (tag === "br") { out.push({ t: "\n" }); return; }
      const s = { b: style.b || tag === "strong" || tag === "b", i: style.i || tag === "em" || tag === "i", href: style.href };
      if (tag === "a") {
        const h = n.getAttribute("href") || "";
        if (h.startsWith("#")) { const r = h.slice(1); s.href = (lang === "en" ? SITE + "/en/" : SITE + "/") + r + "/"; }
        else if (/^https?:/.test(h)) s.href = h;
      }
      runsFrom(n, base, lang, out, s);
    }
  });
  return out;
}

function readPage(lang) {
  const wrap = document.querySelector(".krim-portrait-wrap");
  if (!wrap) return null;
  const q = s => ((wrap.querySelector(s) || {}).textContent || "").replace(/\s+/g, " ").trim();
  const img = wrap.querySelector(".krim-portrait-img");
  const sections = []; let intro = null;
  const content = document.querySelector(".page-content");
  if (content && content.querySelector("h2.vb-section")) {
    // Berühmte Persönlichkeiten: h2 + blockquote
    content.querySelectorAll("h2.vb-section").forEach(h => {
      let bq = h.nextElementSibling;
      while (bq && bq.tagName !== "BLOCKQUOTE" && bq.tagName !== "H2") bq = bq.nextElementSibling;
      if (!bq || bq.tagName !== "BLOCKQUOTE") return;
      const paras = [];
      bq.querySelectorAll("p").forEach(p => paras.push(runsFrom(p, "", lang, [], {})));
      sections.push({ title: h.textContent.trim(), paras });
    });
  } else {
    // Krankheits- und Kriminalporträts: Einleitung + div.vb-section (h3 + Absätze, evtl. Typzuordnungs-Kasten ohne Überschrift)
    const root = wrap.parentElement;
    const pi = root.querySelector("p.psycho-intro");
    if (pi) intro = runsFrom(pi, "", lang, [], {});
    root.querySelectorAll("div.vb-section").forEach(d => {
      const h = d.querySelector("h3");
      const paras = [];
      d.querySelectorAll("p, li").forEach(p => {
        const r = runsFrom(p, "", lang, [], {});
        if (p.tagName === "LI") r.unshift({ t: "\u2022 " });
        if (r.some(x => (x.t || "").trim())) paras.push(r);
      });
      if (paras.length) sections.push({ title: h ? h.textContent.trim() : "", paras });
    });
  }
  return { name: q(".krim-portrait-name"), typ: q(".krim-portrait-typ"), sub: q(".krim-portrait-subtitle"), imgSrc: img ? (img.getAttribute("src") || "") : "", intro, sections };
}

// Das PDF enthält das ganze Porträt (alle Abschnitte, auch »Parallelen« mit anklickbaren Links).
function pickSections(sections) {
  const box = sections.filter(s => !s.title).slice(0, 1);
  return [...box, ...sections.filter(s => s.title)];
}

function loadImage(src) {
  return new Promise(res => {
    if (!src) return res(null);
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.onload = () => res(im);
    im.onerror = () => {
      const m = src.match(/\/assets\/portraits\/[^?]+/);
      if (!m) return res(null);
      const im2 = new Image();
      im2.onload = () => res(im2); im2.onerror = () => res(null);
      im2.src = m[0];
    };
    im.src = src;
  });
}

/* ---------- Layout ---------- */
class Doc {
  constructor(tx, route) {
    this.tx = tx; this.route = route; this.pages = []; this.links = []; this.newPage();
  }
  newPage() {
    const c = document.createElement("canvas");
    c.width = Math.round(PAGE_W * S); c.height = Math.round(PAGE_H * S);
    const x = c.getContext("2d");
    x.scale(S, S); x.fillStyle = "#ffffff"; x.fillRect(0, 0, PAGE_W, PAGE_H);
    x.strokeStyle = "#cdb8a2"; x.lineWidth = 0.8; x.strokeRect(22, 22, PAGE_W - 44, PAGE_H - 44);   // zarter Rahmen
    this.ctx = x; this.cv = c; this.pages.push({ cv: c, links: [] });
    this.y = MARGIN; this.pageIndex = this.pages.length - 1;
    this.header();
  }
  header() {
    const x = this.ctx, tx = this.tx;
    x.fillStyle = COPPER; x.font = `600 9px ${FONT}`; x.textBaseline = "alphabetic";
    const left = tx.brand.toUpperCase(), right = (tx.rubric[this.rubric] || "").toUpperCase();
    x.letterSpacing = "0.8px";
    x.textAlign = "left"; x.fillText(left, MARGIN, this.y);
    x.textAlign = "right"; x.fillText(right, PAGE_W - MARGIN, this.y);
    x.letterSpacing = "0px"; x.textAlign = "left";
    x.strokeStyle = COPPER; x.lineWidth = 1; x.beginPath(); x.moveTo(MARGIN, this.y + 7); x.lineTo(PAGE_W - MARGIN, this.y + 7); x.stroke();
    this.y += 30;
  }
  footerAll() {
    this.pages.forEach((p, i) => {
      const x = p.cv.getContext("2d");
      x.fillStyle = MUTED; x.font = `9px ${FONT}`; x.textAlign = "center"; x.textBaseline = "alphabetic";
      x.fillText(`${this.tx.page} ${i + 1} / ${this.pages.length}`, PAGE_W / 2, PAGE_H - 34);
    });
  }
  font(b, i, size) { return `${i ? "italic " : ""}${b ? "bold " : ""}${size}px ${FONT}`; }
  need(h) { if (this.y + h > PAGE_H - MARGIN - 14) this.newPage(); }
  // Absatz aus Runs mit Umbruch; gibt true zurück
  paragraph(runs, size, lh, color, opts = {}) {
    const x = this.ctx, maxW = (opts.width || (PAGE_W - 2 * MARGIN)), x0 = opts.x || MARGIN;
    // Tokens (Wörter und Leerräume)
    const toks = [];
    runs.forEach(r => {
      if (r.t === "\n") { toks.push({ nl: true }); return; }
      r.t.split(/(\s+)/).forEach(w => { if (w !== "") toks.push({ s: w, b: r.b || opts.bold, i: r.i || opts.italic, href: r.href, sp: /^\s+$/.test(w) }); });
    });
    const lines = []; let cur = [], curW = 0;
    const flush = () => { while (cur.length && cur[cur.length - 1].sp) cur.pop(); lines.push(cur); cur = []; curW = 0; };
    toks.forEach(tk => {
      if (tk.nl) { flush(); return; }
      x.font = this.font(tk.b, tk.i, size);
      const w = x.measureText(tk.sp ? " " : tk.s).width;
      if (tk.sp) { if (cur.length) { cur.push({ ...tk, w }); curW += w; } return; }
      if (curW + w > maxW && cur.length) flush();
      cur.push({ ...tk, w }); curW += w;
    });
    if (cur.length) flush();
    lines.forEach((ln, li) => {
      this.need(lh);
      let xx = x0;
      if (opts.align === "center") { const tw = ln.reduce((a, t) => a + t.w, 0); xx = x0 + (maxW - tw) / 2; }
      const yBase = this.y + size;
      ln.forEach(tk => {
        this.ctx.font = this.font(tk.b, tk.i, size);
        this.ctx.fillStyle = tk.href ? COPPER : color;
        this.ctx.textAlign = "left"; this.ctx.textBaseline = "alphabetic";
        if (!tk.sp) this.ctx.fillText(tk.s, xx, yBase);
        if (tk.href) {
          if (!tk.sp) { this.ctx.strokeStyle = COPPER; this.ctx.lineWidth = 0.6; this.ctx.beginPath(); this.ctx.moveTo(xx, yBase + 2); this.ctx.lineTo(xx + tk.w, yBase + 2); this.ctx.stroke(); }
          const pg = this.pages[this.pageIndex];
          const last = pg.links[pg.links.length - 1];
          if (last && last.href === tk.href && last.line === li + "_" + this.y && Math.abs(last.x2 - xx) < 0.5) { last.x2 = xx + tk.w; }
          else pg.links.push({ href: tk.href, x1: xx, x2: xx + tk.w, y1: this.y + 1, y2: this.y + lh - 2, line: li + "_" + this.y });
        }
        xx += tk.w;
      });
      this.y += lh;
    });
    return lines.length;
  }
}

async function build(lang, route) {
  const tx = T[lang];
  const data = readPage(lang);
  if (!data) throw new Error("no page");
  const rubric = route.split("-")[0];
  const doc = new Doc(tx, route);
  doc.rubric = rubric;
  doc.pages[0].cv.getContext("2d");
  // Kopf der ersten Seite wurde schon im Konstruktor ohne Rubrik gezeichnet -> neu zeichnen
  doc.pages = []; doc.newPage();

  const img = await loadImage(data.imgSrc);
  const x = doc.ctx;
  // Hero: Bild links, Text rechts
  const imgSz = 142, gap = 20;
  const heroTop = doc.y;
  if (img) {
    x.save(); x.beginPath(); x.rect(MARGIN, heroTop, imgSz, imgSz); x.clip();
    const sc = Math.max(imgSz / img.naturalWidth, imgSz / img.naturalHeight);
    const w = img.naturalWidth * sc, h = img.naturalHeight * sc;
    x.drawImage(img, MARGIN + (imgSz - w) / 2, heroTop + (imgSz - h) / 2, w, h); x.restore();
    x.strokeStyle = LINE; x.lineWidth = 1; x.strokeRect(MARGIN, heroTop, imgSz, imgSz);
  }
  const tX = img ? MARGIN + imgSz + gap : MARGIN, tW = PAGE_W - MARGIN - tX;
  doc.y = heroTop + 4;
  x.fillStyle = MUTED; x.font = `9.5px ${FONT}`; x.letterSpacing = "1px"; x.fillText(tx.eyebrow.toUpperCase(), tX, doc.y + 10); x.letterSpacing = "0px";
  doc.y += 18;
  doc.paragraph([{ t: data.name }], 29, 33, INK, { x: tX, width: tW, bold: true });
  doc.y += 4;
  doc.paragraph([{ t: data.typ }], 13, 18, COPPER, { x: tX, width: tW, bold: true });
  doc.y += 2;
  doc.paragraph([{ t: data.sub }], 11.5, 16, MUTED, { x: tX, width: tW, italic: true });
  doc.y = Math.max(doc.y, heroTop + imgSz) + 14;

  if (data.intro) { doc.paragraph(data.intro, 12, 18.5, INK); doc.y += 7; }
  pickSections(data.sections).forEach(sec => {
    doc.need(60);
    doc.y += 10;
    if (sec.title) { doc.paragraph([{ t: sec.title }], 15, 20, COPPER, { bold: true }); doc.y += 3; }
    sec.paras.forEach(p => { doc.paragraph(p, 12, 18.5, INK); doc.y += 7; });
  });

  // Hinweiskasten
  const QR = 84;
  const boxW = PAGE_W - 2 * MARGIN - 36 - QR - 14;
  const full = tx.base + route + "/";
  // Höhe vorab messen: Seitenumbruch erzwingen, wenn wenig Platz
  doc.need(275);
  doc.y += 14;
  const boxTop = doc.y, boxPage = doc.pageIndex;
  doc.y += 16;
  doc.paragraph([{ t: tx.ctaTitle + " ", b: true }, { t: tx.ctaText }], 12, 19, INK, { x: MARGIN + 18, width: boxW });
  doc.y += 6;
  doc.paragraph([{ t: tx.full }], 12, 19, INK, { x: MARGIN + 18, width: boxW });
  doc.paragraph([{ t: full.replace("https://", ""), b: true, href: full }], 11, 17, COPPER, { x: MARGIN + 18, width: boxW });
  doc.y += 4;
  doc.paragraph([{ t: tx.all }], 12, 19, INK, { x: MARGIN + 18, width: boxW });
  doc.paragraph([{ t: tx.base.replace("https://", ""), b: true, href: tx.base }], 11, 17, COPPER, { x: MARGIN + 18, width: boxW });
  doc.y += 10;
  if (doc.pageIndex === boxPage) {
    const cx = doc.pages[boxPage].cv.getContext("2d");
    cx.save(); cx.globalCompositeOperation = "destination-over"; cx.fillStyle = PAPER; cx.fillRect(MARGIN, boxTop, PAGE_W - 2 * MARGIN, doc.y - boxTop); cx.restore();
    cx.strokeStyle = COPPER; cx.lineWidth = 1.2; cx.strokeRect(MARGIN, boxTop, PAGE_W - 2 * MARGIN, doc.y - boxTop);
    drawQr(cx, full, PAGE_W - MARGIN - 18 - QR, boxTop + 18, QR);
  }
  doc.y += 12;
  const foot = tx.foot + (rubric === "krankheitsportraets" ? tx.footMed : "");
  doc.need(48);
  doc.paragraph([{ t: foot }], 9.5, 14, MUTED, {});
  doc.footerAll();
  return { doc, name: data.name };
}

/* ---------- PDF schreiben ---------- */
function concat(chunks) {
  let n = 0; chunks.forEach(c => n += c.length);
  const out = new Uint8Array(n); let o = 0; chunks.forEach(c => { out.set(c, o); o += c.length; });
  return out;
}
const enc = new TextEncoder();
function esc(s) { return s.replace(/[\\()]/g, m => "\\" + m); }

async function toPdf(doc, title, W = PAGE_W, H = PAGE_H) {
  const jpegs = [];
  for (const p of doc.pages) {
    const blob = await new Promise(r => p.cv.toBlob(r, "image/jpeg", 0.82));
    jpegs.push(new Uint8Array(await blob.arrayBuffer()));
  }
  const objs = [];   // {id, parts[]}
  let nextId = 3;
  const pageIds = [];
  const add = parts => { const id = nextId++; objs.push({ id, parts }); return id; };
  doc.pages.forEach((p, i) => {
    const imgId = add([enc.encode(`<< /Type /XObject /Subtype /Image /Width ${p.cv.width} /Height ${p.cv.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegs[i].length} >>\nstream\n`), jpegs[i], enc.encode("\nendstream")]);
    const cs = `q ${W} 0 0 ${H} 0 0 cm /Im0 Do Q`;
    const csId = add([enc.encode(`<< /Length ${cs.length} >>\nstream\n${cs}\nendstream`)]);
    const annIds = p.links.map(l => add([enc.encode(`<< /Type /Annot /Subtype /Link /Rect [${l.x1.toFixed(2)} ${(H - l.y2).toFixed(2)} ${l.x2.toFixed(2)} ${(H - l.y1).toFixed(2)}] /Border [0 0 0] /A << /S /URI /URI (${esc(l.href)}) >> >>`)]));
    const pageId = add([enc.encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /Im0 ${imgId} 0 R >> >> /Contents ${csId} 0 R${annIds.length ? " /Annots [" + annIds.map(a => a + " 0 R").join(" ") + "]" : ""} >>`)]);
    pageIds.push(pageId);
  });
  const infoId = add([enc.encode(`<< /Title (${esc(title.replace(/[^\x20-\x7eÀ-ÿ]/g, ""))}) /Creator (Enneagramm-Heilungskompass) >>`)]);
  const head = [enc.encode("%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")];
  const body = []; const offsets = {};
  let pos = head[0].length;
  const emit = (id, parts) => {
    offsets[id] = pos;
    const a = enc.encode(`${id} 0 obj\n`), z = enc.encode("\nendobj\n");
    body.push(a); parts.forEach(c => body.push(c)); body.push(z);
    pos += a.length + parts.reduce((s, c) => s + c.length, 0) + z.length;
  };
  emit(1, [enc.encode("<< /Type /Catalog /Pages 2 0 R >>")]);
  emit(2, [enc.encode(`<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds.map(i => i + " 0 R").join(" ")}] >>`)]);
  objs.forEach(o => emit(o.id, o.parts));
  const total = nextId;
  let xref = `xref\n0 ${total}\n0000000000 65535 f \n`;
  for (let i = 1; i < total; i++) xref += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
  const trailer = `trailer\n<< /Size ${total} /Root 1 0 R /Info ${infoId} 0 R >>\nstartxref\n${pos}\n%%EOF`;
  return new Blob([concat([...head, ...body, enc.encode(xref + trailer)])], { type: "application/pdf" });
}

export function pagesToPdf(pages, title, W, H) { return toPdf({ pages }, title, W, H); }

function plain(runs) { return runs.map(r => r.t || "").join("").replace(/\s+/g, " ").trim(); }
function excerpt(data) {
  let txt = data.intro ? plain(data.intro) : "";
  const s = data.sections.find(x => x.paras.length);
  if (s) for (const p of s.paras) { if (txt.length >= 380) break; txt += (txt ? " " : "") + plain(p); }
  if (txt.length <= 520) return txt;
  const cut = txt.slice(0, 520), p = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  return p > 260 ? cut.slice(0, p + 1) : cut.replace(/\s+\S*$/, "") + " …";
}

// Bildkarte 1080 x 1350 (4:5) zum Teilen, z. B. für Facebook und Instagram (dort sind PDFs nicht möglich)
async function buildCard(lang, route) {
  const tx = T[lang], data = readPage(lang);
  if (!data) throw new Error("no page");
  const W = 1080, H = 1350;
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  const x = c.getContext("2d");
  x.fillStyle = PAPER; x.fillRect(0, 0, W, H);
  x.fillStyle = COPPER; x.fillRect(0, 0, W, 12);
  x.textBaseline = "alphabetic"; x.textAlign = "center";
  x.fillStyle = COPPER; x.font = `600 26px ${FONT}`; x.letterSpacing = "3px"; x.fillText(tx.brand.toUpperCase(), W / 2, 62); x.letterSpacing = "0px";
  const img = await loadImage(data.imgSrc);
  const sz = 560, ix = (W - sz) / 2, iy = 92;
  if (img) {
    x.save(); x.beginPath(); x.rect(ix, iy, sz, sz); x.clip();
    const sc = Math.max(sz / img.naturalWidth, sz / img.naturalHeight), w = img.naturalWidth * sc, h = img.naturalHeight * sc;
    x.drawImage(img, ix + (sz - w) / 2, iy + (sz - h) / 2, w, h); x.restore();
    x.strokeStyle = LINE; x.lineWidth = 2; x.strokeRect(ix, iy, sz, sz);
  }
  let y = iy + sz + 70;
  const wrapLines = (txt, font, maxW) => { x.font = font; const ws = txt.split(" "), ls = []; let cur = ""; ws.forEach(w => { const t2 = cur ? cur + " " + w : w; if (x.measureText(t2).width > maxW && cur) { ls.push(cur); cur = w; } else cur = t2; }); if (cur) ls.push(cur); return ls; };
  x.fillStyle = INK; wrapLines(data.name, `bold 54px ${FONT}`, W - 140).slice(0, 2).forEach(l => { x.font = `bold 54px ${FONT}`; x.fillText(l, W / 2, y); y += 62; });
  x.fillStyle = COPPER; wrapLines(data.typ, `bold 32px ${FONT}`, W - 140).slice(0, 2).forEach(l => { x.font = `bold 32px ${FONT}`; x.fillText(l, W / 2, y); y += 40; });
  y += 14;
  x.fillStyle = INK;
  {
    const all = wrapLines(excerpt(data), `30px ${FONT}`, W - 150), room = Math.max(1, Math.floor((H - 290 - y) / 42));
    let lines = all.slice(0, room);
    if (all.length > room) {
      const joined = lines.join(" "), p = Math.max(joined.lastIndexOf(". "), joined.lastIndexOf("! "), joined.lastIndexOf("? "));
      lines = p > joined.length * 0.5 ? wrapLines(joined.slice(0, p + 1), `30px ${FONT}`, W - 150) : wrapLines(joined.replace(/[\s,;:]+\S*$/, "") + " …", `30px ${FONT}`, W - 150);
    }
    lines.forEach(l => { x.font = `30px ${FONT}`; x.fillText(l, W / 2, y); y += 42; });
  }
  // Fuß mit QR-Code
  const url = tx.base + route + "/";
  x.fillStyle = COPPER; x.fillRect(0, H - 262, W, 3);
  drawQr(x, url, W / 2 - 80, H - 250, 160);
  x.textAlign = "center"; x.fillStyle = MUTED; x.font = `24px ${FONT}`; x.fillText(tx.fullCard.replace(/:$/, ""), W / 2, H - 62);
  let fs = 26; x.font = `bold ${fs}px ${FONT}`; while (x.measureText(url.replace("https://", "")).width > W - 80 && fs > 16) { fs--; x.font = `bold ${fs}px ${FONT}`; }
  x.fillStyle = COPPER; x.fillText(url.replace("https://", ""), W / 2, H - 24);
  const blob = await new Promise(r => c.toBlob(r, "image/jpeg", 0.92));
  return { blob, name: data.name };
}

export async function sharePortraitCard(lang, route, btn) {
  const tx = T[lang];
  const label = btn ? btn.textContent : "";
  if (btn) { btn.disabled = true; btn.textContent = tx.busy; }
  try {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    const { blob, name } = await buildCard(lang, route);
    const fname = route.replace(/^[a-z]+-/, "") + (lang === "en" ? "-card" : "-karte") + ".jpg";
    const file = new File([blob], fname, { type: "image/jpeg" });
    const text = name + " – " + tx.brand + "\n" + tx.base + route + "/";
    if (window.__pdfTest) { window.__pdfTest(blob, fname); return; }
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: name, text }); return; }
      catch (e) { if (e && e.name === "AbortError") return; }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = fname; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  } catch (e) { console.error(e); alert(tx.err); }
  finally { if (btn) { btn.disabled = false; btn.textContent = label; } }
}

export async function sharePortraitPdf(lang, route, btn) {
  const tx = T[lang];
  const label = btn ? btn.textContent : "";
  if (btn) { btn.disabled = true; btn.textContent = tx.busy; }
  try {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    const { doc, name } = await build(lang, route);
    const blob = await toPdf(doc, name + " – " + tx.brand);
    const fname = route.replace(/^[a-z]+-/, "") + (lang === "en" ? "-portrait" : "-portraet") + ".pdf";
    const file = new File([blob], fname, { type: "application/pdf" });
    if (window.__pdfTest) { window.__pdfTest(blob, fname); return; }
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: tx.shareTitle, text: name + " – " + tx.brand }); return; }
      catch (e) { if (e && e.name === "AbortError") return; }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = fname; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  } catch (e) {
    console.error(e); alert(tx.err);
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = label; }
  }
}

export function mountPdfButton(lang) {
  const route = location.hash.replace(/^#/, "").split("?")[0];
  const wrap = document.querySelector(".krim-portrait-wrap");
  if (!wrap || wrap.dataset.pdf) return;
  wrap.dataset.pdf = "1";
  if (!isShareable(route)) return;
  const tx = T[lang];
  const row = document.createElement("div"); row.className = "schaubild-share";
  const mk = (label, fn) => { const b = document.createElement("button"); b.type = "button"; b.className = "pdf-share-btn"; b.textContent = label; b.addEventListener("click", () => fn(lang, route, b)); return b; };
  row.appendChild(mk(tx.btn, sharePortraitPdf));
  row.appendChild(mk(tx.btnImg, sharePortraitCard));
  wrap.appendChild(row);
}
