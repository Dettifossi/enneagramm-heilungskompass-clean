// Eigener, kleiner QR-Code-Erzeuger (Byte-Modus, Fehlerkorrektur M, Versionen 1–10 = bis 213 Zeichen),
// ohne Fremdcode. Zeichnet schwarz auf weiß mit Ruhezone auf ein Canvas. Geprüft mit der macOS-Barcode-Erkennung.

// Je Version: [Gesamt-Codewörter, EC-Codewörter pro Block, [Blockanzahl, Datenwörter] ...] – Stufe M
const VER = [
  null,
  [26, 10, [1, 16]], [44, 16, [1, 28]], [70, 26, [1, 44]], [100, 18, [2, 32]], [134, 24, [2, 43]],
  [172, 16, [4, 27]], [196, 18, [4, 31]], [242, 22, [2, 38], [2, 39]], [292, 22, [3, 36], [2, 37]], [346, 26, [4, 43], [1, 44]],
];
const ALIGN = [null, [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50]];

// Galois-Feld GF(256), Polynom 0x11D
const EXP = new Array(512), LOG = new Array(256);
(() => { let x = 1; for (let i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 256) x ^= 0x11d; } for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255]; })();
const mul = (a, b) => (a === 0 || b === 0 ? 0 : EXP[LOG[a] + LOG[b]]);

function rsGenerator(n) {
  let g = [1];
  for (let i = 0; i < n; i++) {
    const next = new Array(g.length + 1).fill(0);
    for (let j = 0; j < g.length; j++) { next[j] ^= g[j]; next[j + 1] ^= mul(g[j], EXP[i]); }
    g = next;
  }
  return g;
}
function rsEncode(data, ecLen) {
  const gen = rsGenerator(ecLen), res = new Array(ecLen).fill(0);
  for (const d of data) {
    const f = d ^ res[0]; res.shift(); res.push(0);
    if (f !== 0) for (let i = 0; i < ecLen; i++) res[i] ^= mul(gen[i + 1], f);
  }
  return res;
}

function utf8(s) { return Array.from(new TextEncoder().encode(s)); }

function dataCapacity(v) { const e = VER[v]; let d = 0; for (let i = 2; i < e.length; i++) d += e[i][0] * e[i][1]; return d; }

function buildCodewords(bytes, v) {
  const cap = dataCapacity(v), bits = [];
  const put = (val, n) => { for (let i = n - 1; i >= 0; i--) bits.push((val >> i) & 1); };
  put(0b0100, 4); put(bytes.length, v <= 9 ? 8 : 16); bytes.forEach(b => put(b, 8));
  put(0, Math.min(4, cap * 8 - bits.length));
  while (bits.length % 8) bits.push(0);
  const cw = []; for (let i = 0; i < bits.length; i += 8) { let b = 0; for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j]; cw.push(b); }
  for (let pad = 0; cw.length < cap; pad++) cw.push(pad % 2 === 0 ? 0xec : 0x11);
  // in Blöcke teilen, EC berechnen, verschachteln
  const e = VER[v], ecLen = e[1], blocks = []; let p = 0;
  for (let i = 2; i < e.length; i++) for (let k = 0; k < e[i][0]; k++) { const d = cw.slice(p, p + e[i][1]); p += e[i][1]; blocks.push({ d, ec: rsEncode(d, ecLen) }); }
  const out = [], maxD = Math.max(...blocks.map(b => b.d.length));
  for (let i = 0; i < maxD; i++) blocks.forEach(b => { if (i < b.d.length) out.push(b.d[i]); });
  for (let i = 0; i < ecLen; i++) blocks.forEach(b => out.push(b.ec[i]));
  return out;
}

function bch(value, poly, bitsLen) {
  let d = value << bitsLen; const msb = x => 31 - Math.clz32(x);
  const pl = msb(poly);
  while (d !== 0 && msb(d) >= pl) d ^= poly << (msb(d) - pl);
  return (value << bitsLen) | d;
}

function makeMatrix(v, codewords, mask) {
  const n = 17 + 4 * v, m = Array.from({ length: n }, () => new Array(n).fill(null)), fn = Array.from({ length: n }, () => new Array(n).fill(false));
  const set = (r, c, val) => { if (r >= 0 && r < n && c >= 0 && c < n) { m[r][c] = val; fn[r][c] = true; } };
  const finder = (r, c) => { for (let i = -1; i <= 7; i++) for (let j = -1; j <= 7; j++) { const inside = i >= 0 && i <= 6 && j >= 0 && j <= 6 && (i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4)); set(r + i, c + j, inside); } };
  finder(0, 0); finder(0, n - 7); finder(n - 7, 0);
  for (let i = 8; i < n - 8; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
  const al = ALIGN[v];
  al.forEach(r => al.forEach(c => { if ((r === 6 && c === 6) || (r === 6 && c === al[al.length - 1]) || (r === al[al.length - 1] && c === 6)) return; for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) set(r + i, c + j, Math.max(Math.abs(i), Math.abs(j)) !== 1); }));
  set(n - 8, 8, true);                                     // dunkles Modul
  // Formatbereiche reservieren
  for (let i = 0; i < 9; i++) { if (!fn[8][i]) { m[8][i] = false; fn[8][i] = true; } if (!fn[i][8]) { m[i][8] = false; fn[i][8] = true; } }
  for (let i = 0; i < 8; i++) { if (!fn[8][n - 1 - i]) { m[8][n - 1 - i] = false; fn[8][n - 1 - i] = true; } if (!fn[n - 1 - i][8]) { m[n - 1 - i][8] = false; fn[n - 1 - i][8] = true; } }
  if (v >= 7) { const vi = bch(v, 0x1f25, 12); for (let i = 0; i < 18; i++) { const bit = ((vi >> i) & 1) === 1, a = Math.floor(i / 3), b = i % 3 + n - 11; set(a, b, bit); set(b, a, bit); } }
  // Daten im Zickzack
  const bits = []; codewords.forEach(cw => { for (let i = 7; i >= 0; i--) bits.push((cw >> i) & 1); });
  if (v >= 2 && v <= 6) for (let i = 0; i < 7; i++) bits.push(0);
  let bi = 0, up = true;
  for (let col = n - 1; col > 0; col -= 2) {
    if (col === 6) col--;
    for (let k = 0; k < n; k++) {
      const r = up ? n - 1 - k : k;
      for (let dc = 0; dc < 2; dc++) {
        const c = col - dc; if (fn[r][c]) continue;
        let bit = bi < bits.length ? bits[bi++] === 1 : false;
        const masks = [(r + c) % 2 === 0, r % 2 === 0, c % 3 === 0, (r + c) % 3 === 0, (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0, (r * c) % 2 + (r * c) % 3 === 0, ((r * c) % 2 + (r * c) % 3) % 2 === 0, ((r + c) % 2 + (r * c) % 3) % 2 === 0];
        if (masks[mask]) bit = !bit;
        m[r][c] = bit;
      }
    }
    up = !up;
  }
  // Formatinformation (Stufe M = 00)
  const fmt = bch((0b00 << 3) | mask, 0x537, 10) ^ 0x5412;
  const fbit = i => ((fmt >> i) & 1) === 1;
  for (let i = 0; i <= 5; i++) m[i][8] = fbit(i);
  m[7][8] = fbit(6); m[8][8] = fbit(7); m[8][7] = fbit(8);
  for (let i = 9; i < 15; i++) m[8][14 - i] = fbit(i);
  for (let i = 0; i < 8; i++) m[8][n - 1 - i] = fbit(i);
  for (let i = 8; i < 15; i++) m[n - 15 + i][8] = fbit(i);
  m[n - 8][8] = true;
  return m;
}

function penalty(m) {
  const n = m.length; let p = 0;
  for (let pass = 0; pass < 2; pass++) {
    for (let a = 0; a < n; a++) {
      let run = 1;
      for (let b = 1; b < n; b++) {
        const cur = pass ? m[b][a] : m[a][b], prev = pass ? m[b - 1][a] : m[a][b - 1];
        if (cur === prev) { run++; if (run === 5) p += 3; else if (run > 5) p++; } else run = 1;
      }
    }
  }
  for (let r = 0; r < n - 1; r++) for (let c = 0; c < n - 1; c++) { const x = m[r][c]; if (x === m[r][c + 1] && x === m[r + 1][c] && x === m[r + 1][c + 1]) p += 3; }
  const pat = [true, false, true, true, true, false, true, false, false, false, false];
  const rev = [...pat].reverse();
  const has = (get) => { let k = 0; for (let s = 0; s + 11 <= n; s++) { let a = true, b = true; for (let i = 0; i < 11; i++) { const v = get(s + i); if (v !== pat[i]) a = false; if (v !== rev[i]) b = false; } if (a) k++; if (b) k++; } return k; };
  for (let a = 0; a < n; a++) { p += 40 * has(i => m[a][i]); p += 40 * has(i => m[i][a]); }
  let dark = 0; m.forEach(row => row.forEach(x => { if (x) dark++; }));
  p += Math.floor(Math.abs(dark * 20 - n * n * 10) / (n * n)) * 10;
  return p;
}

// Liefert die Modulmatrix (true = dunkel) oder null, wenn der Text zu lang ist.
export function qrMatrix(text) {
  const bytes = utf8(text);
  let v = 1;
  while (v <= 10 && dataCapacity(v) * 8 < 4 + (v <= 9 ? 8 : 16) + bytes.length * 8) v++;
  if (v > 10) return null;
  const cw = buildCodewords(bytes, v);
  let best = null, bp = Infinity;
  for (let mask = 0; mask < 8; mask++) { const m = makeMatrix(v, cw, mask), pe = penalty(m); if (pe < bp) { bp = pe; best = m; } }
  return best;
}

export function drawQr(ctx, text, x, y, size) {
  const m = qrMatrix(text);
  if (!m) return false;
  const n = m.length, quiet = 4, s = size / (n + 2 * quiet);
  ctx.save();
  ctx.fillStyle = "#ffffff"; ctx.fillRect(x, y, size, size);
  ctx.fillStyle = "#1a1613";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (m[r][c]) ctx.fillRect(x + (c + quiet) * s - 0.2, y + (r + quiet) * s - 0.2, s + 0.4, s + 0.4);
  ctx.restore();
  return true;
}
