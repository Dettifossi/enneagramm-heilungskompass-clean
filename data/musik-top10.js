// »Meine Top 10« für die Musikseite (Jazz & Musik): Sterne an Videos und einzelnen Songs,
// eine Rangliste mit höchstens zehn Einträgen, nur im Browser dieses Geräts gespeichert.
// Wird von bundle.js / en/bundle.js erst geladen, wenn die Seite Sterne (data-t10) enthält.

const KEY = "kompass:musik-top10";
const MAX = 10;

const T = {
  de: {
    title: "Meine Top 10",
    lead: "Ihre Lieblingssongs und -videos, in Ihrer Reihenfolge. Tippen Sie bei einem Song oder Video auf den Stern ☆, um ihn hier zu merken.",
    empty: "Noch leer. Der Stern ☆ steht neben jedem Titel und jedem Song.",
    full: "Die Liste ist voll (10). Entfernen Sie zuerst einen Eintrag.",
    add: "Zu »Meine Top 10« hinzufügen",
    del: "Aus »Meine Top 10« entfernen",
    up: "Nach oben",
    down: "Nach unten",
    rm: "Entfernen",
    clear: "Liste leeren",
    confirm: "Die ganze Liste leeren?",
    local: "Nur auf diesem Gerät gespeichert.",
    count: n => n + " von 10"
  },
  en: {
    title: "My Top 10",
    lead: "Your favorite songs and videos, in your order. Tap the star ☆ next to a song or video to keep it here.",
    empty: "Still empty. The star ☆ sits next to every title and every song.",
    full: "The list is full (10). Remove an entry first.",
    add: "Add to “My Top 10”",
    del: "Remove from “My Top 10”",
    up: "Move up",
    down: "Move down",
    rm: "Remove",
    clear: "Clear list",
    confirm: "Clear the whole list?",
    local: "Saved on this device only.",
    count: n => n + " of 10"
  }
};

let lang = "de";
const tx = () => T[lang];

function load() {
  try {
    const a = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(a) ? a.filter(x => x && typeof x.id === "string" && /^[\w-]{6,20}$/.test(x.id) && typeof x.t === "string").slice(0, MAX).map(x => ({ id: x.id, s: Math.max(0, parseInt(x.s, 10) || 0), t: x.t.slice(0, 200) })) : [];
  } catch (e) { return []; }
}
function save(list) { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
const keyOf = x => x.id + "|" + x.s;

function ensureStyle() {
  if (document.getElementById("t10-style")) return;
  const st = document.createElement("style"); st.id = "t10-style";
  st.textContent =
    ".t10-star{flex:none;background:none;border:0;padding:.15rem .3rem;font-size:1.25rem;line-height:1;cursor:pointer;color:var(--muted,#8a7a66);}" +
    ".t10-star[aria-pressed=true]{color:var(--gold,#b48000);}" +
    ".t10-star:hover{color:var(--copper,#9a5b34);}" +
    "li .t10-star{font-size:1.05rem;vertical-align:baseline;margin-left:.2rem;}" +
    ".t10-box{border:1px solid var(--line,#ddd);border-radius:14px;background:var(--paper,#fffaf0);padding:1rem 1.1rem 1.1rem;margin:0 0 1.8rem;}" +
    ".t10-box h2{margin:0 0 .3rem;font-size:1.15rem;}" +
    ".t10-box p{margin:0 0 .6rem;font-size:.88rem;color:var(--muted,#6b5a46);line-height:1.5;}" +
    ".t10-list{list-style:none;margin:.6rem 0 0;padding:0;counter-reset:t10;}" +
    ".t10-list li{display:flex;align-items:center;gap:.5rem;padding:.45rem 0;border-top:1px solid var(--line,#e5dccb);counter-increment:t10;}" +
    ".t10-list li:first-child{border-top:0;}" +
    ".t10-list li::before{content:counter(t10);flex:none;width:1.6rem;height:1.6rem;border-radius:50%;background:var(--copper,#9a5b34);color:#fff;font-size:.8rem;font-weight:700;display:flex;align-items:center;justify-content:center;}" +
    ".t10-list a{flex:1;min-width:0;color:var(--ink,#2b2118);text-decoration:none;font-size:.92rem;line-height:1.35;word-break:break-word;}" +
    ".t10-list a:hover{text-decoration:underline;}" +
    ".t10-act{flex:none;background:none;border:1px solid var(--line,#d9c9ad);border-radius:8px;min-width:2rem;height:2rem;cursor:pointer;color:var(--ink,#2b2118);font-size:.85rem;}" +
    ".t10-act:disabled{opacity:.35;cursor:default;}" +
    ".t10-foot{display:flex;justify-content:space-between;align-items:center;gap:.6rem;margin-top:.7rem;font-size:.8rem;color:var(--muted,#6b5a46);}" +
    ".t10-clear{background:none;border:0;color:var(--copper,#9a5b34);cursor:pointer;font-size:.82rem;text-decoration:underline;padding:0;}" +
    ".t10-msg{color:#a33;font-size:.85rem;margin:.4rem 0 0;}";
  document.head.appendChild(st);
}

function refreshStars(root) {
  const on = new Set(load().map(keyOf));
  (root || document).querySelectorAll("[data-t10]").forEach(b => {
    const k = b.dataset.t10.split("|"); const key = k[0] + "|" + (parseInt(k[1], 10) || 0);
    const pressed = on.has(key);
    b.dataset.t10Init = "1";
    if (b.getAttribute("aria-pressed") !== String(pressed)) { b.setAttribute("aria-pressed", String(pressed)); b.textContent = pressed ? "★" : "☆"; }
    const label = pressed ? tx().del : tx().add;
    if (b.getAttribute("aria-label") !== label) { b.setAttribute("aria-label", label); b.title = label; }
  });
}

function renderPanel(msg) {
  const box = document.getElementById("t10-panel");
  if (!box) return;
  const list = load(); const t = tx();
  box.className = "t10-box";
  box.innerHTML = "";
  const h = document.createElement("h2"); h.textContent = "★ " + t.title; box.appendChild(h);
  const p = document.createElement("p"); p.textContent = list.length ? t.lead : t.empty; box.appendChild(p);
  if (list.length) {
    const ol = document.createElement("ol"); ol.className = "t10-list";
    list.forEach((x, i) => {
      const li = document.createElement("li");
      const a = document.createElement("a"); a.href = "https://www.youtube.com/watch?v=" + x.id + (x.s ? "&t=" + x.s + "s" : ""); a.target = "_blank"; a.rel = "noopener"; a.textContent = x.t; li.appendChild(a);
      const mk = (txt, act, label, dis) => { const b = document.createElement("button"); b.type = "button"; b.className = "t10-act"; b.dataset.t10Act = act; b.dataset.t10I = String(i); b.textContent = txt; b.setAttribute("aria-label", label); b.title = label; if (dis) b.disabled = true; li.appendChild(b); };
      mk("▲", "up", t.up, i === 0); mk("▼", "down", t.down, i === list.length - 1); mk("✕", "rm", t.rm, false);
      ol.appendChild(li);
    });
    box.appendChild(ol);
    const foot = document.createElement("div"); foot.className = "t10-foot";
    const c = document.createElement("span"); c.textContent = t.count(list.length) + " · " + t.local; foot.appendChild(c);
    const cl = document.createElement("button"); cl.type = "button"; cl.className = "t10-clear"; cl.dataset.t10Act = "clear"; cl.textContent = t.clear; foot.appendChild(cl);
    box.appendChild(foot);
  }
  if (msg) { const m = document.createElement("p"); m.className = "t10-msg"; m.setAttribute("role", "status"); m.textContent = msg; box.appendChild(m); }
  box.dataset.t10Ready = "1";
}

let wired = false;
function wire() {
  if (wired) return; wired = true;
  document.addEventListener("click", e => {
    const star = e.target.closest && e.target.closest("[data-t10]");
    if (star && star.classList.contains("t10-star")) {
      e.preventDefault(); e.stopPropagation();
      const [id, s] = star.dataset.t10.split("|"); const item = { id, s: parseInt(s, 10) || 0, t: star.dataset.t10T || "" };
      const list = load(); const i = list.findIndex(x => keyOf(x) === keyOf(item));
      let msg = "";
      if (i >= 0) list.splice(i, 1);
      else if (list.length >= MAX) msg = tx().full;
      else list.push(item);
      if (!msg) save(list);
      renderPanel(msg); refreshStars();
      return;
    }
    const act = e.target.closest && e.target.closest("[data-t10-act]");
    if (act) {
      const list = load(); const i = parseInt(act.dataset.t10I, 10);
      if (act.dataset.t10Act === "clear") { if (!window.confirm(tx().confirm)) return; save([]); }
      else {
        if (act.dataset.t10Act === "rm") list.splice(i, 1);
        else if (act.dataset.t10Act === "up" && i > 0) [list[i - 1], list[i]] = [list[i], list[i - 1]];
        else if (act.dataset.t10Act === "down" && i < list.length - 1) [list[i + 1], list[i]] = [list[i], list[i + 1]];
        save(list);
      }
      renderPanel(); refreshStars();
    }
  }, true);
}

export function mountTop10(l) {
  lang = l === "en" ? "en" : "de";
  ensureStyle(); wire();
  const box = document.getElementById("t10-panel");
  if (box && !box.dataset.t10Ready) renderPanel();
  refreshStars(document);
}
