
// Roadmap der rund 100 häufigsten Krankheitsbilder in den westlichen Industrienationen
// (Deutschland/Europa) – kategorisiert nach demselben Schema wie PSYCHOSOMATIK_KATEGORIEN.
// Werden nach und nach ausformuliert und dann nach PSYCHOSOMATIK_KRANKHEITEN verschoben
// (Definition, Notfall-Hinweis falls zutreffend, Disclaimer, alle 27 Subtypen). Bis dahin
// erscheinen sie auf der Übersichtsseite als "in Vorbereitung" ohne eigene Detailseite.

const PSYCHOSOMATIK_GEPLANT = {
  "herz-kreislauf": [],
  "bewegungsapparat": [],
  "atemwege": [],
  "verdauung": [],
  "haut": [],
  "hormone-stoffwechsel": [],
  "nerven-psyche": [],
  "immunsystem": [],
  "onkologie": [],
  "sonstige": [],
};

function _psychosomatikBuecherHtml() {
  const w = text.werk;
  const cardsFor = (cat) => werkRegister.filter(b => b.category === cat).map((book) => {
    const isPending = book.status === "link_pruefen";
    const verlagsLink = isPending
      ? `<span class="deepen-link deepen-link--pending">${w.linkPending}</span>`
      : `<a class="deepen-link" href="${book.link}" target="_blank" rel="noopener">${w.openBook} →</a>`;
    const bodLink = !isPending && book.bodUrl
      ? `<a class="deepen-link deepen-link--bod" href="${book.bodUrl}" target="_blank" rel="noopener">Bei BoD kaufen →</a>`
      : "";
    const coverImg = `<img src="${R2_CDN}assets/covers/${book.id}.jpg" alt="" loading="lazy"
      onerror="this.parentElement.style.display='none'"
      style="width:60px;flex-shrink:0;border-radius:4px;object-fit:cover;align-self:flex-start;box-shadow:0 1px 4px rgba(0,0,0,.18);">`;
    return `
      <article class="werk-card" style="display:flex;gap:.75rem;align-items:flex-start;">
        <div style="width:60px;flex-shrink:0;">${coverImg}</div>
        <div style="min-width:0;">
          <h3 style="margin-top:0;">${book.title}</h3>
          <p class="werk-card__themes">${w.themes}: ${book.themes.join(" · ")}</p>
          <div class="werk-card__links">${verlagsLink}${bodLink}</div>
        </div>
      </article>`;
  }).join("");

  return `
    <section class="werk" style="margin-top:2.5rem;">
      <div class="section-divider"><span>Fachbücher zur Heilung</span></div>
      <p class="lead-small werk__lead">Das Verlagshausprogramm zur Homöopathie und zur Enneagramm-Heilkunde &ndash; die fachliche Grundlage, aus der auch dieses Psychosomatik-Register schöpft.</p>
      <div class="werk-grid">${cardsFor("homoeopathie")}</div>
    </section>
    <section class="werk" style="margin-top:2rem;">
      <div class="section-divider"><span>Spirituelle & persönliche Heilungsbücher</span></div>
      <p class="lead-small werk__lead">Über die Fachliteratur hinaus bietet das Verlagshausprogramm auch spirituelle und persönlichkeitsorientierte Titel zu Heilung und Leidenschaft.</p>
      <div class="werk-grid">${cardsFor("persönliche-entwicklung")}</div>
    </section>
  `;
}

function psychosomatikPage() {
  const entries = Object.entries(PSYCHOSOMATIK_KRANKHEITEN);
  const byKategorie = {};
  entries.forEach(([slug, k]) => {
    const kat = k.kategorie || "sonstige";
    (byKategorie[kat] = byKategorie[kat] || []).push([slug, k]);
  });
  const geplantByKategorie = PSYCHOSOMATIK_GEPLANT || {};
  const aktiveKategorien = PSYCHOSOMATIK_KATEGORIEN.filter(kat => byKategorie[kat.key] || (geplantByKategorie[kat.key] && geplantByKategorie[kat.key].length));

  const quickNav = aktiveKategorien.map(kat => {
    const f = kat.farbe || "var(--copper)";
    return `<a href="#" onclick="event.preventDefault();var el=document.getElementById('psy-${kat.key}');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});"
      style="display:inline-block;padding:0.3rem 0.7rem;border-radius:6px;border:1.5px solid ${f};font-size:0.8rem;font-weight:700;color:${f};background:var(--bg);text-decoration:none;opacity:0.85;"
      onmouseover="this.style.opacity='1';this.style.background='color-mix(in srgb, ${f} 12%, var(--bg))'"
      onmouseout="this.style.opacity='0.85';this.style.background='var(--bg)'">${kat.label}</a>`;
  }).join("");

  const sections = aktiveKategorien.map(kat => {
    const f = kat.farbe || "var(--copper)";
    const items = (byKategorie[kat.key] || [])
      .slice()
      .sort((a, b) => a[1].titel.localeCompare(b[1].titel, "de"));
    const cards = items.map(([slug, k]) => `
      <button class="tool-card--link" data-route="psychosomatik/${slug}" style="display:block;width:100%;text-align:left;background:var(--ivory);border:1.5px solid var(--border);border-left:4px solid ${f};border-radius:12px;padding:1.1rem 1.3rem;margin-bottom:0.9rem;cursor:pointer;">
        <div style="display:flex;align-items:center;gap:0.7rem;margin-bottom:0.4rem;">
          <span style="font-size:1.4rem;">${k.icon}</span>
          <h3 style="margin:0;font-size:1.1rem;color:var(--ink);">${k.titel}</h3>
        </div>
        <p style="margin:0;font-size:0.9rem;color:var(--muted);">${k.kurz}</p>
      </button>
    `).join("");
    const geplant = (geplantByKategorie[kat.key] || []).slice().sort((a, b) => a.localeCompare(b, "de"));
    const geplantHtml = geplant.length ? `
      <div style="margin:${cards ? "0.3rem" : "0"} 0 0.9rem;">
        <p style="font-size:0.72rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.06em;margin:0 0 0.5rem;">In Vorbereitung</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
          ${geplant.map(titel => `<span style="display:inline-block;padding:0.3rem 0.65rem;border-radius:6px;background:color-mix(in srgb, ${f} 10%, var(--paper));color:color-mix(in srgb, ${f} 70%, var(--muted));font-size:0.82rem;">${titel}</span>`).join("")}
        </div>
      </div>
    ` : "";
    return `
      <div id="psy-${kat.key}" style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;color:${f};text-transform:uppercase;padding:1.2rem 0 0.4rem;margin-top:0.5rem;border-bottom:1.5px solid color-mix(in srgb, ${f} 30%, var(--paper));">${kat.label}</div>
      <div style="margin-top:0.8rem;">${cards}${geplantHtml}</div>
    `;
  }).join("");

  const subtypeRegister = [1,2,3,4,5,6,7,8,9].map(typNr => {
    const farbe = typeColor(typNr);
    return ["SE","SO","SX"].map(inst => {
      const code = inst + typNr;
      const tierKey = code.toLowerCase();
      return `<button data-route="psychosomatik-subtyp/${code}" style="display:inline-flex;align-items:center;gap:.35rem;padding:.35rem .7rem .35rem .4rem;border-radius:6px;border:1.5px solid ${farbe};background:var(--bg);color:${farbe};font-size:.82rem;font-weight:700;cursor:pointer;font-family:inherit;">
        <span style="position:relative;width:22px;height:22px;border-radius:50%;overflow:hidden;flex-shrink:0;display:inline-block;box-shadow:0 0 0 1.5px ${farbe};">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${tierKey}.jpg" alt="" loading="lazy" style="position:absolute;top:${tierAvatarTop(code)};left:${tierAvatarLeft(code)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
        </span>${code}</button>`;
    }).join("");
  }).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("psychosomatik")}
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:var(--ink);margin:1.2rem 0 0.5rem;">Psychosomatik-Register</h1>
      <p class="psycho-intro">${entries.length} Krankheitsbilder aus psychosomatischer Sicht, verknüpft mit dem Enneagramm: Wo zeigen sich bei welchem Subtyp typische innere Muster, die – neben vielen anderen Faktoren – mit bestimmten Beschwerdebildern in Verbindung gebracht werden? <strong>Wichtig: Jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Diese Seite ersetzt keine ärztliche Diagnose oder Behandlung, sondern bietet eine ergänzende, ganzheitliche Deutungsebene – im selben Sinn, in dem auch der Homöopathie-Bereich dieses Kompasses arbeitet: nicht am Symptom ansetzen, sondern an der zugrunde liegenden Lebenskraft. Das Register wird regelmäßig um weitere Krankheitsbilder erweitert.</p>
      <img src="./assets/schaubilder/psychosomatik-register-header.jpg?v=2" alt="K\xf6rper und Enneagramm-Symbol als Sinnbild f\xfcr das Psychosomatik-Register" loading="lazy" style="width:100%;max-width:640px;border-radius:14px;margin:1.3rem 0;box-shadow:0 4px 18px rgba(0,0,0,.12);display:block;">
      <div style="background:var(--ivory);border:1px solid var(--border);border-radius:12px;padding:1.1rem 1.3rem;margin:0 0 1.3rem;max-width:640px;">
        <p style="font-size:0.75rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.07em;margin:0 0 0.4rem;">Suchregister nach Subtyp</p>
        <p style="margin:0 0 0.8rem;font-size:0.88rem;color:var(--muted);">Alle Krankheitsbilder dieses Registers auf einen Blick nach Subtyp gefiltert &ndash; zum Beispiel, wie sich der Herzinfarkt, aber künftig auch alle weiteren Krankheiten, bei der SE1 oder der SX7 zeigen.</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">${subtypeRegister}</div>
      </div>
      <button class="tool-card--link" data-route="symptomlexikon" style="display:flex;align-items:center;gap:0.8rem;width:100%;text-align:left;background:var(--ivory);border:1.5px solid var(--border);border-radius:12px;padding:1rem 1.3rem;margin-bottom:1.3rem;max-width:640px;cursor:pointer;">
        <span style="font-size:1.5rem;">📖</span>
        <span>
          <span style="display:block;font-weight:700;color:var(--ink);font-size:1rem;">Symptomlexikon</span>
          <span style="display:block;font-size:0.85rem;color:var(--muted);">Schneller Überblick: Welche Symptome gehören typischerweise zu welchem Krankheitsbild?</span>
        </span>
      </button>
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem 0.4rem;margin:1.3rem 0 0.4rem;">
        ${quickNav}
      </div>
      <div style="max-width:640px;margin-top:0.6rem;">
        ${sections}
      </div>
      <img src="./assets/schaubilder/psychosomatik-register-beratung.jpg?v=2" alt="Beratungsgespr\xe4ch mit Enneagramm-Symbol und anatomischen Modellen auf dem Tisch" loading="lazy" style="width:100%;max-width:640px;border-radius:14px;margin:1.6rem 0 1.3rem;box-shadow:0 4px 18px rgba(0,0,0,.12);display:block;">
      ${_psychosomatikBuecherHtml()}
      <section class="beratungs-cta" style="grid-template-columns:1fr;max-width:640px;">
        <div class="beratungs-cta__card beratungs-cta__card--behandlung">
          <div class="beratungs-cta__text">
            <p class="beratungs-cta__eyebrow">Naturheilpraxis Detlef Rathmer</p>
            <h3 class="beratungs-cta__title">Sie m\xf6chten Ihre Beschwerden psychosomatisch begleiten lassen?</h3>
            <p class="beratungs-cta__body">Die psychologische Homöopathie verbindet die Muster dieses Registers mit einer individuellen Behandlung Ihres Subtyps. Bei Interesse an einer Erstberatung können Sie sich gerne melden.</p>
          </div>
          <div class="beratungs-cta__contact">
            <a class="beratungs-cta__btn beratungs-cta__btn--secondary" href="mailto:detlefrathmer@t-online.de?subject=Anfrage%20zur%20psychosomatischen%20Begleitung">✉ E-Mail</a>
            <a class="beratungs-cta__btn beratungs-cta__btn--whatsapp" href="https://wa.me/4915758786201?text=Ich%20m%C3%B6chte%20mich%20zu%20einer%20psychosomatischen%20Begleitung%20erkundigen." target="_blank" rel="noopener">WhatsApp</a>
          </div>
          <a class="beratungs-cta__web" href="https://www.psychologische-homoeopathie.de" target="_blank" rel="noopener">Naturheilpraxis Detlef Rathmer → psychologische-homoeopathie.de</a>
        </div>
      </section>
      ${relatedLinks([
        {route:"healing", label:"Heilmittel-Kompass"},
        {route:"homoeopathie", label:"Hom\xf6opathische Mittel"},
        {route:"tcm", label:"TCM & Meridiane"},
      ])}
    </div>
  `);
}

function psychosomatikSubtypPage(code) {
  code = (code || "").toUpperCase();
  const typNr = parseInt(code.slice(-1), 10);
  const farbe = typeColor(typNr);
  const entries = Object.entries(PSYCHOSOMATIK_KRANKHEITEN);
  const treffer = [];
  entries.forEach(([slug, k]) => {
    const t = (k.typen || []).find(t => t.typ === typNr);
    if (!t) return;
    const v = (t.varianten || []).find(v => v.code === code);
    if (!v) return;
    const kat = PSYCHOSOMATIK_KATEGORIEN.find(kt => kt.key === k.kategorie);
    treffer.push({ slug, k, v, kat });
  });

  const cards = treffer.length ? treffer.map(({ slug, k, v, kat }) => {
    const katFarbe = kat ? kat.farbe : farbe;
    return `
    <button class="tool-card--link" data-route="psychosomatik/${slug}" style="display:block;width:100%;text-align:left;background:var(--ivory);border:1.5px solid var(--border);border-left:4px solid ${katFarbe};border-radius:12px;padding:1.1rem 1.3rem;margin-bottom:0.9rem;cursor:pointer;">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.5rem;">
        <span style="font-size:1.3rem;">${k.icon}</span>
        <div>
          <h3 style="margin:0;font-size:1.05rem;color:var(--ink);">${k.titel}</h3>
          ${kat ? `<p style="margin:0;font-size:0.72rem;color:${katFarbe};text-transform:uppercase;letter-spacing:0.05em;font-weight:700;">${kat.label}</p>` : ""}
        </div>
      </div>
      <p style="margin:0;font-size:0.9rem;line-height:1.6;color:var(--ink);">${v.text}</p>
    </button>
  `;
  }).join("") : `<p style="color:var(--muted);font-size:0.92rem;max-width:640px;">Für ${code} sind noch keine Krankheitsbilder ausgearbeitet – das Register wächst laufend weiter, sobald neue Krankheitsbilder hinzukommen, erscheinen sie automatisch hier.</p>`;

  const subtypeNav = [1,2,3,4,5,6,7,8,9].map(t => {
    const f = typeColor(t);
    return ["SE","SO","SX"].map(inst => {
      const c = inst + t;
      const active = c === code;
      const tierKey = c.toLowerCase();
      return `<button data-route="psychosomatik-subtyp/${c}" style="display:inline-flex;align-items:center;gap:.3rem;padding:.3rem .6rem .3rem .35rem;border-radius:6px;border:1.5px solid ${f};background:${active ? f : "var(--bg)"};color:${active ? "#fff" : f};font-size:.78rem;font-weight:700;cursor:pointer;font-family:inherit;">
        <span style="position:relative;width:18px;height:18px;border-radius:50%;overflow:hidden;flex-shrink:0;display:inline-block;box-shadow:0 0 0 1.5px ${active ? "#fff" : f};">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${tierKey}.jpg" alt="" loading="lazy" style="position:absolute;top:${tierAvatarTop(c)};left:${tierAvatarLeft(c)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
        </span>${c}</button>`;
    }).join("");
  }).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("psychosomatik")}
      <button class="ghost-link" data-route="psychosomatik" style="margin-bottom:1rem;">&larr; Alle Krankheitsbilder</button>
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:${farbe};margin:0 0 0.5rem;display:flex;align-items:center;gap:0.6rem;">
        <span style="position:relative;width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;display:inline-block;box-shadow:0 0 0 2px ${farbe};">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${code.toLowerCase()}.jpg" alt="" loading="lazy" style="position:absolute;top:${tierAvatarTop(code)};left:${tierAvatarLeft(code)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
        </span>${code}
      </h1>
      <p class="psycho-intro" style="max-width:640px;">Alle Krankheitsbilder aus dem Psychosomatik-Register, die für den Subtyp ${code} bislang ausgearbeitet sind &ndash; auf einen Blick. <strong>Wichtig: Jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp;</strong> hier geht es um Muster, die in der Praxis auffallen, nicht um eine statistische Aussage.</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin:1.2rem 0 1.4rem;max-width:640px;">${subtypeNav}</div>
      <div style="max-width:640px;">${cards}</div>
      ${relatedLinks([
        {route:"psychosomatik", label:"Alle Krankheitsbilder"},
        {route:"subtype/" + code.toLowerCase(), label:"Subtyp-Profil " + code},
      ])}
    </div>
  `);
}

function symptomlexikonPage() {
  const entries = Object.entries(PSYCHOSOMATIK_KRANKHEITEN).filter(([, k]) => k.symptome && k.symptome.length);
  const byKategorie = {};
  entries.forEach(([slug, k]) => {
    const kat = k.kategorie || "sonstige";
    (byKategorie[kat] = byKategorie[kat] || []).push([slug, k]);
  });
  const geplantByKategorie = PSYCHOSOMATIK_GEPLANT || {};
  const aktiveKategorien = PSYCHOSOMATIK_KATEGORIEN.filter(kat => byKategorie[kat.key] || (geplantByKategorie[kat.key] && geplantByKategorie[kat.key].length));

  const quickNav = aktiveKategorien.map(kat => {
    const f = kat.farbe || "var(--copper)";
    return `<a href="#" onclick="event.preventDefault();var el=document.getElementById('sym-${kat.key}');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});"
      style="display:inline-block;padding:0.3rem 0.7rem;border-radius:6px;border:1.5px solid ${f};font-size:0.8rem;font-weight:700;color:${f};background:var(--bg);text-decoration:none;opacity:0.85;"
      onmouseover="this.style.opacity='1';this.style.background='color-mix(in srgb, ${f} 12%, var(--bg))'"
      onmouseout="this.style.opacity='0.85';this.style.background='var(--bg)'">${kat.label}</a>`;
  }).join("");

  const sections = aktiveKategorien.map(kat => {
    const f = kat.farbe || "var(--copper)";
    const items = (byKategorie[kat.key] || []).slice().sort((a, b) => a[1].titel.localeCompare(b[1].titel, "de"));
    const cards = items.map(([slug, k]) => `
      <div style="background:var(--ivory);border:1.5px solid var(--border);border-left:4px solid ${f};border-radius:12px;padding:1.1rem 1.3rem;margin-bottom:0.9rem;">
        <div style="display:flex;align-items:center;gap:0.7rem;margin-bottom:0.5rem;">
          <span style="font-size:1.3rem;">${k.icon}</span>
          <h3 style="margin:0;font-size:1.05rem;color:var(--ink);">${k.titel}</h3>
        </div>
        <ul style="margin:0 0 0.7rem;padding-left:1.2rem;">
          ${k.symptome.map(s => `<li style="font-size:0.88rem;line-height:1.6;color:var(--ink);margin-bottom:0.25rem;">${s}</li>`).join("")}
        </ul>
        <button class="ghost-link" data-route="psychosomatik/${slug}" style="font-size:0.82rem;">Mehr zu ${k.titel} &rarr;</button>
      </div>
    `).join("");
    const geplant = (geplantByKategorie[kat.key] || []).slice().sort((a, b) => a.localeCompare(b, "de"));
    const geplantHtml = geplant.length ? `
      <div style="margin:${cards ? "0.3rem" : "0"} 0 0.9rem;">
        <p style="font-size:0.72rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.06em;margin:0 0 0.5rem;">In Vorbereitung</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
          ${geplant.map(titel => `<span style="display:inline-block;padding:0.3rem 0.65rem;border-radius:6px;background:color-mix(in srgb, ${f} 10%, var(--paper));color:color-mix(in srgb, ${f} 70%, var(--muted));font-size:0.82rem;">${titel}</span>`).join("")}
        </div>
      </div>
    ` : "";
    return `
      <div id="sym-${kat.key}" style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;color:${f};text-transform:uppercase;padding:1.2rem 0 0.4rem;margin-top:0.5rem;border-bottom:1.5px solid color-mix(in srgb, ${f} 30%, var(--paper));">${kat.label}</div>
      <div style="margin-top:0.8rem;">${cards}${geplantHtml}</div>
    `;
  }).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("symptomlexikon")}
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:var(--ink);margin:1.2rem 0 0.5rem;">Symptomlexikon</h1>
      <p class="psycho-intro">Ein schneller Überblick über typische Symptome der Krankheitsbilder aus dem Psychosomatik-Register – zur ersten Orientierung, wenn die Frage im Raum steht: &bdquo;Ist das jetzt eigentlich ernst?&ldquo; <strong>Wichtig: Dieses Lexikon ersetzt keine ärztliche Diagnose.</strong> Bei akuten, plötzlich auftretenden oder starken Beschwerden immer sofort ärztlichen bzw. notärztlichen Rat einholen, statt hier nachzuschlagen. Die ausführliche psychosomatische Deutung je Krankheitsbild findet sich im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>.</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem 0.4rem;margin:1.3rem 0 0.4rem;">
        ${quickNav}
      </div>
      <div style="max-width:640px;margin-top:0.6rem;">
        ${sections}
      </div>
      ${relatedLinks([
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"healing", label:"Heilmittel-Kompass"},
      ])}
    </div>
  `);
}

function psychosomatikDetailPage(slug) {
  const k = PSYCHOSOMATIK_KRANKHEITEN[slug];
  if (!k) return psychosomatikPage();
  const subtypBloecke = k.typen.map(t => {
    const farbe = typeColor(t.typ);
    return `
    <div style="background:color-mix(in srgb, ${farbe} 5%, var(--paper));border-left:3px solid ${farbe};border-radius:0 8px 8px 0;padding:1.1rem 1.3rem;margin-bottom:1rem;max-width:640px;">
      <p style="font-size:0.78rem;font-weight:700;color:${farbe};text-transform:uppercase;letter-spacing:0.07em;margin:0 0 0.3rem;">Typ ${t.typ}</p>
      <p style="font-family:var(--serif);font-size:1.1rem;color:var(--ink);margin:0 0 0.8rem;font-weight:600;">${t.titel}</p>
      ${t.varianten.map(v => `
        <p style="margin:0 0 0.7rem;font-size:0.93rem;line-height:1.65;color:var(--ink);">
          <span style="font-weight:700;color:${farbe};">${v.code}</span> &middot; ${v.text}
        </p>
      `).join("")}
    </div>
  `;
  }).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("psychosomatik")}
      <button class="ghost-link" data-route="psychosomatik" style="margin-bottom:1rem;">&larr; Alle Krankheitsbilder</button>
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:var(--ink);margin:0 0 0.6rem;">${k.icon} ${k.titel}</h1>
      ${k.definition ? `
      <div style="background:var(--ivory);border:1px solid var(--border);border-radius:10px;padding:1rem 1.2rem;margin-bottom:1rem;max-width:640px;">
        <p style="font-size:0.75rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.07em;margin:0 0 0.5rem;">Definition</p>
        <p style="margin:0;font-size:0.92rem;line-height:1.65;color:var(--ink);">${k.definition}</p>
      </div>` : ""}
      ${k.symptome && k.symptome.length ? `
      <div style="background:var(--ivory);border:1px solid var(--border);border-radius:10px;padding:1rem 1.2rem;margin-bottom:1rem;max-width:640px;">
        <p style="font-size:0.75rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.07em;margin:0 0 0.5rem;">Typische Symptome</p>
        <ul style="margin:0;padding-left:1.2rem;">
          ${k.symptome.map(s => `<li style="font-size:0.92rem;line-height:1.65;color:var(--ink);margin-bottom:0.3rem;">${s}</li>`).join("")}
        </ul>
      </div>` : ""}
      ${k.notfall ? `
      <div style="background:color-mix(in srgb, #c0392b 10%, var(--paper));border:1.5px solid #c0392b;border-radius:10px;padding:1rem 1.2rem;margin-bottom:1rem;max-width:640px;">
        <p style="font-size:0.75rem;font-weight:700;color:#c0392b;text-transform:uppercase;letter-spacing:0.07em;margin:0 0 0.5rem;">⚠ Wichtiger Hinweis für den Notfall</p>
        <p style="margin:0;font-size:0.92rem;line-height:1.65;color:var(--ink);font-weight:600;">${k.notfall}</p>
      </div>` : ""}
      <div style="background:color-mix(in srgb, var(--copper) 8%, var(--paper));border-radius:10px;padding:1rem 1.2rem;margin-bottom:1.3rem;max-width:640px;">
        <p style="margin:0;font-size:0.88rem;font-style:italic;color:var(--muted);">${k.disclaimer}</p>
      </div>
      <p class="psycho-intro" style="max-width:640px;">${k.einleitung}</p>
      <p style="font-size:0.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.07em;margin:1.3rem 0 0.8rem;">Anknüpfungspunkte im Enneagramm</p>
      ${subtypBloecke}
      <p class="psycho-intro" style="max-width:640px;margin-top:1rem;">${k.abschluss}</p>
      ${relatedLinks([
        {route:"psychosomatik", label:"Alle Krankheitsbilder"},
        {route:"healing", label:"Heilmittel-Kompass"},
        {route:"homoeopathie", label:"Hom\xf6opathische Mittel"},
      ])}
    </div>
  `);
}

function homoeopathiePage() {
  const param = state.route.split("/")[1];
  const typNr = param ? parseInt(param) : null;

  const DATA = [
    { typ:1, label:"Typ 1 \u00b7 Der Ordnungsorientierte", leidenschaft:"Wut", leidenschaftsMittel:"Platinum metallicum", wundeMittel:"Arsenicum album", thema:`Gewonnen aus dem Edelmetall Platin \u2013 einem der reinsten, kostbarsten und widerstandsf\u00e4higsten Metalle \u00fcberhaupt, das von keiner S\u00e4ure angegriffen wird. Genau diese Signatur pr\u00e4gt das Mittelbild: ein Streben nach Reinheit, Vollkommenheit und moralischer Unantastbarkeit, verbunden mit einem feinen Gef\u00fchl der Erhabenheit \u00fcber das Gew\u00f6hnliche. Wie das Metall sich nicht verunreinigen l\u00e4sst, will die Eins fehlerlos, korrekt und integer sein. Das Bed\u00fcrfnis, alles richtig zu machen, ruht auf einem starken inneren Anspruch nach Perfektion, Ordnung und Integrit\u00e4t \u2013 und auf der Angst, sich durch einen Fehler herabzusetzen.`, wirkung:`Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als strenge Kontrolle, innerer Druck, Anspannung und unerbittliche Selbstverurteilung zeigt. Es hilft, den hohen Anspruch von der erstarrten H\u00e4rte zu l\u00f6sen, sodass W\u00fcrde und Aufrichtigkeit bleiben d\u00fcrfen, ohne in Verbissenheit und \u00dcberlegenheit zu kippen. So darf die Eins Ma\u00df und Menschlichkeit wiederfinden \u2013 richtig sein, ohne sich selbst zu richten.` },
    { typ:2, label:"Typ 2 \u00b7 Der Beziehungsorientierte", leidenschaft:"Stolz", leidenschaftsMittel:"Hyoscyamus niger", wundeMittel:"Pulsatilla pratensis", thema:`Gewonnen aus dem Schwarzen Bilsenkraut, einer Nachtschattenpflanze mit stark berauschender, das Verhalten enthemmender Wirkung. In ihrer Signatur liegt ein verzweifeltes Ringen um Aufmerksamkeit und Liebe: Eifersucht, das Bed\u00fcrfnis, gesehen zu werden, und die Angst, verlassen oder \u00fcbergangen zu werden. Genau das pr\u00e4gt das Mittelbild der Zwei \u2013 das starke Verlangen nach N\u00e4he, Anerkennung und Gebrauchtwerden. Das Bed\u00fcrfnis, geliebt zu werden, wird so gro\u00df, dass die eigene Mitte dar\u00fcber aus dem Blick ger\u00e4t.`, wirkung:`Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als emotionale Abh\u00e4ngigkeit, Besitzanspruch und Angst vor Zur\u00fcckweisung zeigt. Es hilft, das anklammernde Werben um Zuwendung zu beruhigen und die Liebe wieder auf einen festen inneren Grund zu stellen. So darf N\u00e4he entstehen, ohne sich zu verlieren oder st\u00e4ndig um Best\u00e4tigung k\u00e4mpfen zu m\u00fcssen.` },
    { typ:3, label:"Typ 3 \u00b7 Der Erfolgsorientierte", leidenschaft:"L\u00fcge / Selbstt\u00e4uschung", leidenschaftsMittel:"Tarentula hispanica", wundeMittel:"Lycopodium clavatum", thema:`Gewonnen aus der spanischen Tarantel \u2013 einem ruhelosen Tier, dessen Biss der \u00dcberlieferung nach zu fiebrigem, getriebenem Tanzen zwingt. Diese Signatur durchzieht das Mittelbild: eine rastlose, hektische Betriebsamkeit, das Bed\u00fcrfnis zu beeindrucken, geschickte Wendigkeit und ein st\u00e4ndiges Unter-Strom-Stehen. Genau das pr\u00e4gt die Drei \u2013 der starke Antrieb nach Wirkung, Erfolg und Anerkennung. Wie die Tarantel kann sie kaum innehalten, immer in Bewegung, immer auf der B\u00fchne.`, wirkung:`Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Leistungsdruck, Getriebenheit und blo\u00dfes Funktionieren zeigt. Es hilft, das innere Tempo zu drosseln und den Wert nicht l\u00e4nger an Wirkung und Applaus zu kn\u00fcpfen. So darf die Drei zur Ruhe kommen und sp\u00fcren, dass sie auch ohne st\u00e4ndiges Gl\u00e4nzen gen\u00fcgt.` },
    { typ:4, label:"Typ 4 \u00b7 Der Identit\u00e4tssuchende", leidenschaft:"Neid", leidenschaftsMittel:"Ignatia amara", wundeMittel:"Ignatia amara", thema:`Gewonnen aus der Bohne des Ignatiusbaums \u2013 einem Samen mit paradoxer, widerspr\u00fcchlicher Wirkung, der seit jeher mit Kummer und entt\u00e4uschter Liebe verbunden ist. Diese Signatur pr\u00e4gt das Mittelbild: feine Empfindsamkeit, wechselnde, gegens\u00e4tzliche Stimmungen, Seufzen und ein Hang zur Idealisierung. Genau das lebt in der Vier \u2013 das Bed\u00fcrfnis, sich selbst treu zu sein und verstanden zu werden, getragen von tiefer Sehnsucht nach Authentizit\u00e4t und Bedeutung. Das Gef\u00fchl schwingt zwischen H\u00f6hen und Tiefen, immer auf der Suche nach dem Echten.`, wirkung:`Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich emotionale Intensit\u00e4t, innerer R\u00fcckzug und tiefe Sehnsucht zeigen. Es hilft, das Auf und Ab der Gef\u00fchle zu mildern, ohne die Tiefe zu verlieren. So darf die Vier in ihrer Empfindsamkeit ruhen, statt sich in ihr zu verlieren.` },
    { typ:5, label:"Typ 5 \u00b7 Der Wissensorientierte", leidenschaft:"Geiz / R\u00fcckzug", leidenschaftsMittel:"Stramonium", wundeMittel:"Silicea", thema:`Der Stechapfel ist ein hochgiftiges Nachtschattengew\u00e4chs, das Bilder von Dunkelheit, Bedrohung und Schrecken hervorruft. In seiner Signatur liegt das Bed\u00fcrfnis, sich vor einer als \u00fcberw\u00e4ltigend erlebten Welt zu sch\u00fctzen und Halt im Inneren zu suchen. Das pr\u00e4gt das Mittelbild der F\u00fcnf \u2013 der starke Drang, sich zur\u00fcckzuziehen, um zu verstehen, getragen von der Suche nach Wissen, Unabh\u00e4ngigkeit und innerer Klarheit. Der R\u00fcckzug in den Kopf wird zum sicheren Ort gegen\u00fcber einer bedrohlich wirkenden Au\u00dfenwelt.`, wirkung:`Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo mentaler R\u00fcckzug, innere Isolation und \u00dcberforderung auftreten. Es hilft, die Distanz zur Welt zu mildern und sich wieder sicherer im Kontakt zu f\u00fchlen. So darf die F\u00fcnf aus dem Beobachten heraustreten und am Leben teilnehmen, ohne sich bedroht zu f\u00fchlen.` },
    { typ:6, label:"Typ 6 \u00b7 Der Sicherheitsorientierte", leidenschaft:"Angst", leidenschaftsMittel:"Opium", wundeMittel:"Opium", thema:`Gewonnen aus dem Schlafmohn \u2013 einem Stoff, der Schmerz, Angst und Wahrnehmung bet\u00e4ubt und in dumpfe Ruhe h\u00fcllt. Diese Signatur zeigt ein Wesen, das nach Sicherheit und Geborgenheit verlangt und Gefahr lieber ausblendet, als sie zu durchleben. Das pr\u00e4gt die Leidenschaft der Sechs \u2013 der starke Wunsch nach Schutz und die Vermeidung von Bedrohung. Wo das Mittel bet\u00e4ubt, sucht die Seele Sicherheit, indem sie das Beunruhigende abd\u00e4mpft.`, wirkung:`Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo \u00fcberm\u00e4\u00dfige Angst, innere Anspannung, Sorgen und dauerhafte Wachsamkeit auftreten. Es hilft, die festgehaltene Schreckspannung zu l\u00f6sen und das Nervensystem zu beruhigen. So darf an die Stelle st\u00e4ndiger Alarmbereitschaft ein Gef\u00fchl von Geborgenheit treten.` },
    { typ:7, label:"Typ 7 \u00b7 Der Genussorientierte", leidenschaft:"Ma\u00dflosigkeit", leidenschaftsMittel:"Belladonna", wundeMittel:"Calcium carbonicum", thema:`Die Tollkirsche ist eine Nachtschattenpflanze, deren Bild von Hitze, Fieber, F\u00fclle und gl\u00fchender Erregung gepr\u00e4gt ist. Diese Signatur durchzieht das Mittelbild: eine fiebrige Intensit\u00e4t, ein Drang nach lebhaften, starken Eindr\u00fccken und ein rasches Aufflammen. Genau das lebt in der Sieben \u2013 das Bed\u00fcrfnis, Schmerz zu vermeiden und das Leben in vollen Z\u00fcgen zu erleben, getragen von einem fiebrigen Drang nach mehr M\u00f6glichkeiten, Reizen und Genuss. Wie das Fieber will alles hell, schnell und intensiv sein.`, wirkung:`Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als \u00dcberf\u00fclle, rastlose Getriebenheit und fiebrige Reizsuche zeigt. Es hilft, die \u00fcberschie\u00dfende Erregung zu k\u00fchlen und zur Ruhe zu bringen. So darf die Sieben F\u00fclle genie\u00dfen, ohne von ihr getrieben zu werden.` },
    { typ:8, label:"Typ 8 \u00b7 Der Machtorientierte", leidenschaft:"Lust / Dominanz", leidenschaftsMittel:"Veratrum album", wundeMittel:"Veratrum album", thema:`Der Wei\u00dfe Germer ist eine kraftvolle, giftige Gebirgspflanze, deren Bild von Gr\u00f6\u00dfe, Anspruch und pl\u00f6tzlichem Zusammenbruch gepr\u00e4gt ist. Ihre Signatur zeigt einen m\u00e4chtigen Drang nach Ausweitung, Einfluss und \u00dcberlegenheit \u2013 bis hin zu H\u00e4rte und Hochmut. Genau das pr\u00e4gt die Leidenschaft der Acht \u2013 das Bed\u00fcrfnis, stark, unabh\u00e4ngig und unangreifbar zu sein, getragen von einem m\u00e4chtigen inneren Drang nach Kontrolle. Die Kraft will sich ausdehnen und alles in der Hand behalten.`, wirkung:`Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als ma\u00dflose Expansion, \u00dcbersteigerung und das Erzwingen von Kontrolle zeigt. Es hilft, die \u00fcberschie\u00dfende Kraft zu m\u00e4\u00dfigen, ohne die St\u00e4rke zu verlieren. So darf die Acht f\u00fchren und sch\u00fctzen, ohne sich und andere zu \u00fcberfordern.` },
    { typ:9, label:"Typ 9 \u00b7 Der Harmonieorientierte", leidenschaft:"Tr\u00e4gheit / Selbstvergessenheit", leidenschaftsMittel:"Cannabis indica", wundeMittel:"Staphysagria", thema:`Der indische Hanf ruft Bilder von Vernebelung, traumartiger Ferne und einem seligen Verschwimmen von Zeit und Raum hervor. Diese Signatur pr\u00e4gt das Mittelbild: ein Abtauchen aus der scharfen Wirklichkeit in eine weiche, konfliktfreie Benommenheit. Genau das lebt in der Neun \u2013 das Bed\u00fcrfnis nach Frieden und Harmonie, getragen vom Wunsch, Konflikt, Spannung und Aufruhr zu vermeiden. Die Welt wird weichgezeichnet, damit nichts mehr wehtut oder reibt.`, wirkung:`Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Vernebelung, Selbstvergessenheit und das Abtauchen aus der eigenen Pr\u00e4senz zeigt. Es hilft, wieder klarer und wacher gegenw\u00e4rtig zu werden. So darf die Neun aus dem Nebel auftauchen und sich selbst wieder sp\u00fcren.` },
  ];

  if (typNr && typNr >= 1 && typNr <= 9) {
    const d = DATA[typNr - 1];
    const sameMittel = d.leidenschaftsMittel === d.wundeMittel;
    return shell(`
      ${pageHeader("homoeopathie")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="homoeopathie">&larr; Alle Typen</button>
        <h1 class="psycho-detail__title">${d.label}</h1>
        <div class="remedy-detail-card" style="background:color-mix(in srgb, var(--copper) 6%, var(--paper));border:1px solid var(--line);border-radius:12px;padding:1.5rem;margin-bottom:1.5rem;max-width:640px;">
          <p style="font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin:0 0 .4rem;">Leidenschaft &middot; ${d.leidenschaft}</p>
          <div style="margin-bottom:1.2rem;">
            <span style="font-size:.75rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">Leidenschaftsmittel</span>
            <p style="font-family:var(--serif);font-size:1.35rem;color:var(--copper);margin:.2rem 0 0;font-style:italic;">${d.leidenschaftsMittel}</p>
          </div>
          ${sameMittel ? "" : `
          <div style="padding-top:1rem;border-top:1px solid var(--line);">
            <span style="font-size:.75rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">Wundenmittel</span>
            <p style="font-family:var(--serif);font-size:1.35rem;color:var(--copper);margin:.2rem 0 0;font-style:italic;">${d.wundeMittel}</p>
          </div>`}
          ${sameMittel ? `
          <p style="font-size:.8rem;color:var(--muted);margin:.6rem 0 0;padding-top:.8rem;border-top:1px solid var(--line);">Leidenschaftsmittel und Wundenmittel sind identisch.</p>` : ""}
        </div>
        ${d.thema ? `
        <div style="background:color-mix(in srgb, var(--copper) 4%, var(--paper));border-left:3px solid var(--copper);border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin-bottom:1rem;max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--copper);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .5rem;">Mittelbild \u00b7 ${d.leidenschaftsMittel}</p>
          <p style="font-size:.93rem;line-height:1.7;margin:0;color:var(--ink);">${d.thema}</p>
        </div>` : ""}
        ${d.wirkung ? `
        <div style="background:color-mix(in srgb, var(--copper) 4%, var(--paper));border-left:3px solid color-mix(in srgb, var(--copper) 60%, var(--paper));border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin-bottom:1.5rem;max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .5rem;">Hom\u00f6opathische Wirkung</p>
          <p style="font-size:.93rem;line-height:1.7;margin:0;color:var(--ink);">${d.wirkung}</p>
        </div>` : ""}
        ${AFFILIATE_LINKS.homoeopathie[d.leidenschaftsMittel] ? `<div style="max-width:640px;margin-bottom:1rem;">${affiliateBoxHtml("homoeopathie", d.leidenschaftsMittel)}</div>` : ""}
        ${(!sameMittel && AFFILIATE_LINKS.homoeopathie[d.wundeMittel]) ? `<div style="max-width:640px;margin-bottom:1rem;">${affiliateBoxHtml("homoeopathie", d.wundeMittel)}</div>` : ""}
        <p style="font-size:.8rem;color:var(--muted);font-style:italic;max-width:580px;">Anwendung nur in therapeutischer R\u00fccksprache. Die Zuordnungen gelten f\u00fcr den Kerntypus &ndash; im Einzelfall kommen je nach Fl\u00fcgel-, Stress- und Entspannungsrichtung weitere Mittel in Betracht.</p>
        <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--line);max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .6rem;">Subtyp-Detail &middot; Heilmittel-Kompass</p>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
            <button class="ghost-link" data-route="subtype/se${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SE${typNr} &ndash; Selbsterhaltend</button>
            <button class="ghost-link" data-route="subtype/so${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SO${typNr} &ndash; Sozial</button>
            <button class="ghost-link" data-route="subtype/sx${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SX${typNr} &ndash; Sexuell</button>
          </div>
        </div>
        <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--line);max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .6rem;">Passende Schaubilder</p>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
            <button class="ghost-link" data-route="angst-essenz" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Angst &#8594; Essenz</button>
          
            <button class="ghost-link" data-route="heilungsweg" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Heilungsweg des Menschen</button>
            <button class="ghost-link" data-route="laster-tugenden-affirmationen" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Laster &middot; Tugenden &middot; Affirmationen</button>
          </div>
        </div>
      </div>
    `);
  }

  // Overview
  return shell(`
    ${pageHeader("homoeopathie")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">Heilung &middot; Hom\u00f6opathische Mittel</p>
        <h1>Hom\u00f6opathische Mittel</h1>
        <p class="lead-small">Leidenschafts- und Wundenmittel f\u00fcr alle 9 Enneagrammtypen &ndash; aus der hom\u00f6opathischen Enneagramm-Praxis nach dem \u00c4hnlichkeitsgesetz.</p>
      </div>
    </section>
    <section class="oils-grid" style="padding:0 1rem 3rem;">
      ${DATA.map(d => {
        const sameMittel = d.leidenschaftsMittel === d.wundeMittel;
        return `
        <article class="oil-card" style="cursor:pointer;" data-route="homoeopathie/${d.typ}">
          <div class="oil-card__body" style="padding:1.2rem;">
            <span class="oil-card__type">Typ ${d.typ}</span>
            <h3 style="font-size:1rem;margin:.3rem 0 .6rem;">${d.label.split(" \u00b7 ")[1]}</h3>
            <div style="margin-bottom:.5rem;">
              <span style="font-size:.7rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:.15rem;">Leidenschaftsmittel</span>
              <span style="font-family:var(--serif);font-size:1.05rem;color:var(--copper);font-style:italic;">${d.leidenschaftsMittel}</span>
            </div>
            ${sameMittel ? "" : `
            <div style="margin-bottom:.5rem;padding-top:.5rem;border-top:1px solid var(--line);">
              <span style="font-size:.7rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:.15rem;">Wundenmittel</span>
              <span style="font-family:var(--serif);font-size:1.05rem;color:var(--copper);font-style:italic;">${d.wundeMittel}</span>
            </div>`}
            <p style="font-size:.7rem;color:var(--muted);margin:.6rem 0 0;">Leidenschaft: ${d.leidenschaft}</p>
          </div>
        </article>`;
      }).join("")}
    </section>
    <p style="font-size:.8rem;color:var(--muted);font-style:italic;text-align:center;padding:0 1rem 2rem;max-width:580px;margin:0 auto;">Anwendung nur in therapeutischer R\u00fccksprache. Die Zuordnungen gelten f\u00fcr den Kerntypus.</p>
  `);
}

function mineralstoffePage() {
  const param = state.route.split("/")[1];
  const typNr = param ? parseInt(param) : null;

  const DATA = [
    { typ:1, label:"Typ 1 \u00b7 Der Ordnungsorientierte", leidenschaft:"Wut", leidenschaftsSalz:"Kalium sulfuricum", wundeSalz:"Kalium chloratum", nr:"6", wirkungsfeld:`Reinigung, Stoffwechsel und innere Erneuerung`, beschreibung:`Kalium sulfuricum verweist auf Ausgleich, Reinigung und Erneuerung. Es unterst\u00fctzt symbolisch die F\u00e4higkeit, innere Spannung zu l\u00f6sen und Ordnung nicht starr, sondern beweglich zu halten.` },
    { typ:2, label:"Typ 2 \u00b7 Der Beziehungsorientierte", leidenschaft:"Stolz", leidenschaftsSalz:"Natrium chloratum", wundeSalz:"Natrium chloratum", nr:"8", wirkungsfeld:`Fl\u00fcssigkeitshaushalt und L\u00f6sen von altem Kummer`, beschreibung:`` },
    { typ:3, label:"Typ 3 \u00b7 Der Erfolgsorientierte", leidenschaft:"L\u00fcge / Selbstt\u00e4uschung", leidenschaftsSalz:"Ferrum phosphoricum", wundeSalz:"Ferrum phosphoricum", nr:"3", wirkungsfeld:`Energie, Widerstandskraft und Initiative`, beschreibung:`` },
    { typ:4, label:"Typ 4 \u00b7 Der Identit\u00e4tssuchende", leidenschaft:"Neid", leidenschaftsSalz:"Kalium phosphoricum", wundeSalz:"Kalium phosphoricum", nr:"5", wirkungsfeld:`Nervenkraft bei Ersch\u00f6pfung, seelische St\u00e4rke`, beschreibung:`` },
    { typ:5, label:"Typ 5 \u00b7 Der Wissensorientierte", leidenschaft:"Geiz / R\u00fcckzug", leidenschaftsSalz:"Silicea", wundeSalz:"Silicea", nr:"11", wirkungsfeld:`innere Struktur, Standfestigkeit und Selbstvertrauen`, beschreibung:`` },
    { typ:6, label:"Typ 6 \u00b7 Der Sicherheitsorientierte", leidenschaft:"Angst", leidenschaftsSalz:"Magnesium phosphoricum", wundeSalz:"Magnesium phosphoricum", nr:"7", wirkungsfeld:`Entspannung und L\u00f6sen von Anspannung`, beschreibung:`` },
    { typ:7, label:"Typ 7 \u00b7 Der Genussorientierte", leidenschaft:"Ma\u00dflosigkeit", leidenschaftsSalz:"Natrium phosphoricum", wundeSalz:"Natrium phosphoricum", nr:"9", wirkungsfeld:`S\u00e4ure-Basen-Ausgleich und innere Balance`, beschreibung:`` },
    { typ:8, label:"Typ 8 \u00b7 Der Machtorientierte", leidenschaft:"Lust / Dominanz", leidenschaftsSalz:"Calcium fluoratum", wundeSalz:"Calcium fluoratum", nr:"1", wirkungsfeld:`Festigkeit und Elastizit\u00e4t zugleich`, beschreibung:`` },
    { typ:9, label:"Typ 9 \u00b7 Der Harmonieorientierte", leidenschaft:"Tr\u00e4gheit / Selbstvergessenheit", leidenschaftsSalz:"Natrium sulfuricum", wundeSalz:"Natrium sulfuricum", nr:"10", wirkungsfeld:`Ausscheidung und Loslassen von Belastendem`, beschreibung:`` },
  ];

  if (typNr && typNr >= 1 && typNr <= 9) {
    const d = DATA[typNr - 1];
    const sameSalz = d.leidenschaftsSalz === d.wundeSalz;
    return shell(`
      ${pageHeader("mineralstoffe")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="mineralstoffe">&larr; Alle Typen</button>
        <h1 class="psycho-detail__title">${d.label}</h1>
        <div class="remedy-detail-card" style="background:color-mix(in srgb, var(--copper) 6%, var(--paper));border:1px solid var(--line);border-radius:12px;padding:1.5rem;margin-bottom:1.5rem;max-width:640px;">
          <p style="font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin:0 0 .4rem;">Leidenschaft &middot; ${d.leidenschaft}</p>
          <div style="margin-bottom:${sameSalz ? "0" : "1.2rem"};">
            <span style="font-size:.75rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">Leidenschafts-Salz</span>
            <p style="font-family:var(--serif);font-size:1.35rem;color:var(--copper);margin:.2rem 0 .1rem;font-style:italic;">${d.leidenschaftsSalz}</p>
            ${d.nr !== "?" ? `<span style="font-size:.78rem;color:var(--muted);">Sch&uuml;&szlig;ler-Salz Nr.&thinsp;${d.nr}</span>` : ""}
          </div>
          ${sameSalz ? `<p style="font-size:.8rem;color:var(--muted);margin:.8rem 0 0;padding-top:.8rem;border-top:1px solid var(--line);">Leidenschafts-Salz und Wunden-Salz sind identisch.</p>` : `
          <div style="padding-top:1rem;border-top:1px solid var(--line);">
            <span style="font-size:.75rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">Wunden-Salz</span>
            <p style="font-family:var(--serif);font-size:1.35rem;color:var(--copper);margin:.2rem 0 0;font-style:italic;">${d.wundeSalz}</p>
          </div>`}
        </div>
        ${d.wirkungsfeld ? `
        <div style="background:color-mix(in srgb, var(--copper) 4%, var(--paper));border-left:3px solid var(--copper);border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin-bottom:1rem;max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--copper);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .4rem;">Wirkungsfeld</p>
          <p style="font-size:.95rem;line-height:1.6;margin:0;color:var(--ink);">${d.wirkungsfeld}</p>
        </div>` : ""}
        ${d.beschreibung ? `
        <div style="background:color-mix(in srgb, var(--copper) 4%, var(--paper));border-left:3px solid color-mix(in srgb, var(--copper) 60%, var(--paper));border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin-bottom:1.5rem;max-width:640px;">
          <p style="font-size:.93rem;line-height:1.7;margin:0;color:var(--ink);">${d.beschreibung}</p>
        </div>` : ""}
        ${AFFILIATE_LINKS.schuessler[d.leidenschaftsSalz] ? `<div style="max-width:640px;margin-bottom:1rem;">${affiliateBoxHtml("schuessler", d.leidenschaftsSalz)}</div>` : ""}
        ${(!sameSalz && AFFILIATE_LINKS.schuessler[d.wundeSalz]) ? `<div style="max-width:640px;margin-bottom:1rem;">${affiliateBoxHtml("schuessler", d.wundeSalz)}</div>` : ""}
        <p style="font-size:.8rem;color:var(--muted);font-style:italic;max-width:580px;">Anwendung nur in therapeutischer R&uuml;cksprache. Die Zuordnungen gelten f&uuml;r den Kerntypus &ndash; im Einzelfall kommen je nach Fl&uuml;gel-, Stress- und Entspannungsrichtung weitere Mittel in Betracht.</p>
        <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--line);max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .6rem;">Subtyp-Detail &middot; Heilmittel-Kompass</p>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
            <button class="ghost-link" data-route="subtype/se${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SE${typNr} &ndash; Selbsterhaltend</button>
            <button class="ghost-link" data-route="subtype/so${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SO${typNr} &ndash; Sozial</button>
            <button class="ghost-link" data-route="subtype/sx${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SX${typNr} &ndash; Sexuell</button>
          </div>
        </div>
        <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--line);max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .6rem;">Passende Schaubilder</p>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
            <button class="ghost-link" data-route="angst-essenz" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Angst &#8594; Essenz</button>
          
            <button class="ghost-link" data-route="koerperregulation" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">K&ouml;rperregulation</button>
            <button class="ghost-link" data-route="heilungsweg" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Heilungsweg des Menschen</button>
          </div>
        </div>
      </div>
    `);
  }

  // Overview
  return shell(`
    ${pageHeader("mineralstoffe")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">Heilung &middot; Mineralstoffimpulse</p>
        <h1>Mineralstoffimpulse (Sch&uuml;&szlig;ler-Salze)</h1>
        <p class="lead-small">Leidenschafts- und Wunden-Salze f&uuml;r alle 9 Enneagrammtypen &ndash; aus der hom&ouml;opathischen Enneagramm-Praxis nach dem &Auml;hnlichkeitsgesetz.</p>
      </div>
    </section>
    <section class="oils-grid" style="padding:0 1rem 3rem;">
      ${DATA.map(d => {
        const sameSalz = d.leidenschaftsSalz === d.wundeSalz;
        return `
        <article class="oil-card" style="cursor:pointer;" data-route="mineralstoffe/${d.typ}">
          <div class="oil-card__body" style="padding:1.2rem;">
            <span class="oil-card__type">Typ ${d.typ}${d.nr !== "?" ? ` &middot; Nr.&thinsp;${d.nr}` : ""}</span>
            <h3 style="font-size:1rem;margin:.3rem 0 .6rem;">${d.label.split(" \u00b7 ")[1]}</h3>
            <div style="margin-bottom:.5rem;">
              <span style="font-size:.7rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:.15rem;">Leidenschafts-Salz</span>
              <span style="font-family:var(--serif);font-size:1.05rem;color:var(--copper);font-style:italic;">${d.leidenschaftsSalz}</span>
            </div>
            ${sameSalz ? "" : `
            <div style="margin-bottom:.5rem;padding-top:.5rem;border-top:1px solid var(--line);">
              <span style="font-size:.7rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:.15rem;">Wunden-Salz</span>
              <span style="font-family:var(--serif);font-size:1.05rem;color:var(--copper);font-style:italic;">${d.wundeSalz}</span>
            </div>`}
            ${d.wirkungsfeld ? `<p style="font-size:.7rem;color:var(--muted);margin:.5rem 0 0;line-height:1.4;">${d.wirkungsfeld}</p>` : ""}
          </div>
        </article>`;
      }).join("")}
    </section>
    <div style="max-width:580px;margin:0 auto;padding:0 1rem;">
      ${bookTip("enneagramm-biochemie", "Die neun Regulationsmuster des Enneagramms, verbunden mit den biochemischen Mineralsalzen nach Dr. Sch\u00fc\u00dfler \u2013 Orientierung f\u00fcr Therapeuten, Berater und interessierte Leser.", "Enneagramm-Biochemie")}
    </div>
    <p style="font-size:.8rem;color:var(--muted);font-style:italic;text-align:center;padding:0 1rem 2rem;max-width:580px;margin:0 auto;">Anwendung nur in therapeutischer R&uuml;cksprache. Die Zuordnungen gelten f&uuml;r den Kerntypus.</p>
  `);
}

function bachbluetenPage() {
  const param = state.route.split("/")[1];
  const typNr = param ? parseInt(param) : null;

  const DATA = [
    { typ:1, label:"Typ 1 \u00b7 Der Ordnungsorientierte", leidenschaft:"Wut", leidenschaftsBl:"Rock Water", wundeBl:"Rock Water", wirkungsfeld:`Flexibilit\u00e4t statt starrer Selbststrenge`, beschreibung:`` },
    { typ:2, label:"Typ 2 \u00b7 Der Beziehungsorientierte", leidenschaft:"Stolz", leidenschaftsBl:"Chicory", wundeBl:"Chicory", wirkungsfeld:`selbstlose Liebe ohne Besitzanspruch`, beschreibung:`` },
    { typ:3, label:"Typ 3 \u00b7 Der Erfolgsorientierte", leidenschaft:"L\u00fcge / Selbstt\u00e4uschung", leidenschaftsBl:"Vervain", wundeBl:"Walnut", wirkungsfeld:`gelassene Begeisterung statt \u00dcbereifer`, beschreibung:`` },
    { typ:4, label:"Typ 4 \u00b7 Der Identit\u00e4tssuchende", leidenschaft:"Neid", leidenschaftsBl:"Sweet Chestnut", wundeBl:"Willow", wirkungsfeld:`Hoffnung und Halt in tiefer Not`, beschreibung:`` },
    { typ:5, label:"Typ 5 \u00b7 Der Wissensorientierte", leidenschaft:"Geiz / R\u00fcckzug", leidenschaftsBl:"Water Violet", wundeBl:"Water Violet", wirkungsfeld:`aus R\u00fcckzug zu warmer Verbundenheit`, beschreibung:`` },
    { typ:6, label:"Typ 6 \u00b7 Der Sicherheitsorientierte", leidenschaft:"Angst", leidenschaftsBl:"Aspen", wundeBl:"Cerato", wirkungsfeld:`Vertrauen bei unbestimmter Angst`, beschreibung:`` },
    { typ:7, label:"Typ 7 \u00b7 Der Genussorientierte", leidenschaft:"Ma\u00dflosigkeit", leidenschaftsBl:"Agrimony", wundeBl:"Agrimony", wirkungsfeld:`Echtheit hinter der Heiterkeit`, beschreibung:`` },
    { typ:8, label:"Typ 8 \u00b7 Der Machtorientierte", leidenschaft:"Lust / Dominanz", leidenschaftsBl:"Vine", wundeBl:"Oak", wirkungsfeld:`St\u00e4rke und F\u00fchrung ohne Dominanz`, beschreibung:`` },
    { typ:9, label:"Typ 9 \u00b7 Der Harmonieorientierte", leidenschaft:"Tr\u00e4gheit / Selbstvergessenheit", leidenschaftsBl:"Wild Rose", wundeBl:"Wild Rose", wirkungsfeld:`aus Resignation zu lebendiger Teilnahme`, beschreibung:`` },
  ];

  if (typNr && typNr >= 1 && typNr <= 9) {
    const d = DATA[typNr - 1];
    const sameBl = d.leidenschaftsBl === d.wundeBl;
    return shell(`
      ${pageHeader("bachblueten")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="bachblueten">&larr; Alle Typen</button>
        <h1 class="psycho-detail__title">${d.label}</h1>
        <div class="remedy-detail-card" style="background:color-mix(in srgb, var(--copper) 6%, var(--paper));border:1px solid var(--line);border-radius:12px;padding:1.5rem;margin-bottom:1.5rem;max-width:640px;">
          <p style="font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin:0 0 .4rem;">Leidenschaft &middot; ${d.leidenschaft}</p>
          <div style="margin-bottom:${sameBl ? "0" : "1.2rem"};">
            <span style="font-size:.75rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">Leidenschafts-Bl\u00fcte</span>
            <p style="font-family:var(--serif);font-size:1.35rem;color:var(--copper);margin:.2rem 0 0;font-style:italic;">${d.leidenschaftsBl}</p>
          </div>
          ${sameBl ? `<p style="font-size:.8rem;color:var(--muted);margin:.8rem 0 0;padding-top:.8rem;border-top:1px solid var(--line);">Leidenschafts-Bl\u00fcte und Wunden-Bl\u00fcte sind identisch.</p>` : `
          <div style="padding-top:1rem;border-top:1px solid var(--line);">
            <span style="font-size:.75rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">Wunden-Bl\u00fcte</span>
            <p style="font-family:var(--serif);font-size:1.35rem;color:var(--copper);margin:.2rem 0 0;font-style:italic;">${d.wundeBl}</p>
          </div>`}
        </div>
        ${d.wirkungsfeld ? `
        <div style="background:color-mix(in srgb, var(--copper) 4%, var(--paper));border-left:3px solid var(--copper);border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin-bottom:1rem;max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--copper);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .4rem;">Wirkungsfeld</p>
          <p style="font-size:.95rem;line-height:1.6;margin:0;color:var(--ink);">${d.wirkungsfeld}</p>
        </div>` : ""}
        ${d.beschreibung ? `
        <div style="background:color-mix(in srgb, var(--copper) 4%, var(--paper));border-left:3px solid color-mix(in srgb, var(--copper) 60%, var(--paper));border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin-bottom:1.5rem;max-width:640px;">
          <p style="font-size:.93rem;line-height:1.7;margin:0;color:var(--ink);">${d.beschreibung}</p>
        </div>` : ""}
        ${AFFILIATE_LINKS.bachbluete[d.leidenschaftsBl] ? `<div style="max-width:640px;margin-bottom:1rem;">${affiliateBoxHtml("bachbluete", d.leidenschaftsBl)}</div>` : ""}
        ${(!sameBl && AFFILIATE_LINKS.bachbluete[d.wundeBl]) ? `<div style="max-width:640px;margin-bottom:1rem;">${affiliateBoxHtml("bachbluete", d.wundeBl)}</div>` : ""}
        <p style="font-size:.8rem;color:var(--muted);font-style:italic;max-width:580px;">Anwendung nur in therapeutischer R&uuml;cksprache. Die Zuordnungen gelten f&uuml;r den Kerntypus &ndash; im Einzelfall kommen je nach Fl&uuml;gel-, Stress- und Entspannungsrichtung weitere Mittel in Betracht.</p>
        <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--line);max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .6rem;">Subtyp-Detail &middot; Heilmittel-Kompass</p>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
            <button class="ghost-link" data-route="subtype/se${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SE${typNr} &ndash; Selbsterhaltend</button>
            <button class="ghost-link" data-route="subtype/so${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SO${typNr} &ndash; Sozial</button>
            <button class="ghost-link" data-route="subtype/sx${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SX${typNr} &ndash; Sexuell</button>
          </div>
        </div>
        <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--line);max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .6rem;">Passende Schaubilder</p>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
            <button class="ghost-link" data-route="angst-essenz" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Angst &#8594; Essenz</button>
          
            <button class="ghost-link" data-route="basisemotionen" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Basisemotionen</button>
            <button class="ghost-link" data-route="mangelgefuehle" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Mangelgef&uuml;hle</button>
          </div>
        </div>
      </div>
    `);
  }

  // Overview
  return shell(`
    ${pageHeader("bachblueten")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">Heilung &middot; Bachbl&uuml;ten</p>
        <h1>Bachbl&uuml;ten <span style="font-size:.65em;font-weight:400;color:var(--muted);">(nach Dr. Edward Bach)</span></h1>
        <p class="lead-small">Leidenschafts- und Wunden-Bl&uuml;ten f&uuml;r alle 9 Enneagrammtypen &ndash; aus der hom&ouml;opathischen Enneagramm-Praxis nach dem &Auml;hnlichkeitsgesetz.</p>
      </div>
    </section>
    <section class="oils-grid" style="padding:0 1rem 3rem;">
      ${DATA.map(d => {
        const sameBl = d.leidenschaftsBl === d.wundeBl;
        return `
        <article class="oil-card" style="cursor:pointer;" data-route="bachblueten/${d.typ}">
          <div class="oil-card__body" style="padding:1.2rem;">
            <span class="oil-card__type">Typ ${d.typ}</span>
            <h3 style="font-size:1rem;margin:.3rem 0 .6rem;">${d.label.split(" \u00b7 ")[1]}</h3>
            <div style="margin-bottom:.5rem;">
              <span style="font-size:.7rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:.15rem;">Leidenschafts-Bl\u00fcte</span>
              <span style="font-family:var(--serif);font-size:1.05rem;color:var(--copper);font-style:italic;">${d.leidenschaftsBl}</span>
            </div>
            ${sameBl ? "" : `
            <div style="margin-bottom:.5rem;padding-top:.5rem;border-top:1px solid var(--line);">
              <span style="font-size:.7rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:.15rem;">Wunden-Bl\u00fcte</span>
              <span style="font-family:var(--serif);font-size:1.05rem;color:var(--copper);font-style:italic;">${d.wundeBl}</span>
            </div>`}
            ${d.wirkungsfeld ? `<p style="font-size:.7rem;color:var(--muted);margin:.5rem 0 0;line-height:1.4;">${d.wirkungsfeld}</p>` : ""}
          </div>
        </article>`;
      }).join("")}
    </section>
    <div style="max-width:580px;margin:0 auto;padding:0 1rem;">
      ${bookTip("enneagramm-bachblueten-therapie", "Die neun Enneagrammtypen verbunden mit den Bachbl\u00fcten nach Dr. Edward Bach \u2013 Leidenschafts- und Wunden-Bl\u00fcten aus der therapeutischen Praxis.", "Enneagramm-Bachbl\u00fcten-Therapie")}
    </div>
    <p style="font-size:.8rem;color:var(--muted);font-style:italic;text-align:center;padding:0 1rem 2rem;max-width:580px;margin:0 auto;">Anwendung nur in therapeutischer R&uuml;cksprache. Die Zuordnungen gelten f&uuml;r den Kerntypus.</p>
  `);
}


function heilteesPage() {
  const param = state.route.split("/")[1];
  const typNr = param ? parseInt(param) : null;

  const DATA = [
    { typ:1, label:"Typ 1 \u00b7 Der Ordnungsorientierte", leidenschaft:"Wut", tee:"Melissentee", teename:"The Mind Detox", wirkungsfeld:`beruhigend und nervenst\u00e4rkend`, beschreibung:`` },
    { typ:2, label:"Typ 2 \u00b7 Der Beziehungsorientierte", leidenschaft:"Stolz", tee:"Rosenbl\u00fctentee", teename:"Self-Love Elixir", wirkungsfeld:`herz\u00f6ffnend und harmonisierend`, beschreibung:`` },
    { typ:3, label:"Typ 3 \u00b7 Der Erfolgsorientierte", leidenschaft:"L\u00fcge / Selbstt\u00e4uschung", tee:"Rosmarintee", teename:"The Performance Boost", wirkungsfeld:`belebend und kr\u00e4ftigend`, beschreibung:`` },
    { typ:4, label:"Typ 4 \u00b7 Der Identit\u00e4tssuchende", leidenschaft:"Neid", tee:"Weidenr\u00f6schentee", teename:"The Grounding Brew", wirkungsfeld:`bes\u00e4nftigend und ausgleichend`, beschreibung:`` },
    { typ:5, label:"Typ 5 \u00b7 Der Wissensorientierte", leidenschaft:"Geiz / R\u00fcckzug", tee:"Haferkrauttee", teename:"The Battery Recharge", wirkungsfeld:`nervenst\u00e4rkend und aufbauend`, beschreibung:`` },
    { typ:6, label:"Typ 6 \u00b7 Der Sicherheitsorientierte", leidenschaft:"Angst", tee:"Kamillenbl\u00fctentee", teename:"The Safety Zone", wirkungsfeld:`beruhigend und wohltuend`, beschreibung:`` },
    { typ:7, label:"Typ 7 \u00b7 Der Genussorientierte", leidenschaft:"Ma\u00dflosigkeit", tee:"Pfefferminztee", teename:"The Fresh Vibe", wirkungsfeld:`erfrischend und kl\u00e4rend`, beschreibung:`` },
    { typ:8, label:"Typ 8 \u00b7 Der Machtorientierte", leidenschaft:"Lust / Dominanz", tee:"Ingwertee", teename:"The Power Balance", wirkungsfeld:`w\u00e4rmend und anregend`, beschreibung:`` },
    { typ:9, label:"Typ 9 \u00b7 Der Harmonieorientierte", leidenschaft:"Tr\u00e4gheit / Selbstvergessenheit", tee:"Fencheltee", teename:"The Harmony Flow", wirkungsfeld:`entspannend und ausgleichend`, beschreibung:`` },
  ];

  if (typNr && typNr >= 1 && typNr <= 9) {
    const d = DATA[typNr - 1];
    return shell(`
      ${pageHeader("heiltees")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="heiltees">&larr; Alle Typen</button>
        <h1 class="psycho-detail__title">${d.label}</h1>
        <div class="remedy-detail-card" style="background:color-mix(in srgb, var(--copper) 6%, var(--paper));border:1px solid var(--line);border-radius:12px;padding:1.5rem;margin-bottom:1.5rem;max-width:640px;">
          <p style="font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin:0 0 .4rem;">Leidenschaft &middot; ${d.leidenschaft}</p>
          <span style="font-size:.75rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">Heiltee</span>
          <p style="font-family:var(--serif);font-size:1.35rem;color:var(--copper);margin:.2rem 0 0;font-style:italic;">${d.tee}</p>
          <p style="font-size:.8rem;color:var(--muted);letter-spacing:.05em;margin:.15rem 0 0;">${d.teename}</p>
        </div>
        ${d.wirkungsfeld ? `
        <div style="background:color-mix(in srgb, var(--copper) 4%, var(--paper));border-left:3px solid var(--copper);border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin-bottom:1rem;max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--copper);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .4rem;">Wirkungsfeld</p>
          <p style="font-size:.95rem;line-height:1.6;margin:0;color:var(--ink);">${d.wirkungsfeld}</p>
        </div>` : ""}
        ${d.beschreibung ? `
        <div style="background:color-mix(in srgb, var(--copper) 4%, var(--paper));border-left:3px solid color-mix(in srgb, var(--copper) 60%, var(--paper));border-radius:0 8px 8px 0;padding:1rem 1.2rem;margin-bottom:1.5rem;max-width:640px;">
          <p style="font-size:.93rem;line-height:1.7;margin:0;color:var(--ink);">${d.beschreibung}</p>
        </div>` : ""}
        ${AFFILIATE_LINKS.tee[d.tee] ? `<div style="max-width:640px;margin-bottom:1rem;">${affiliateBoxHtml("tee", d.tee)}</div>` : ""}
        <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--line);max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .6rem;">Subtyp-Detail &middot; Heilmittel-Kompass</p>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
            <button class="ghost-link" data-route="subtype/se${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SE${typNr} &ndash; Selbsterhaltend</button>
            <button class="ghost-link" data-route="subtype/so${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SO${typNr} &ndash; Sozial</button>
            <button class="ghost-link" data-route="subtype/sx${typNr}" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">SX${typNr} &ndash; Sexuell</button>
          </div>
        </div>
        <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--line);max-width:640px;">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .6rem;">Passende Schaubilder</p>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
            <button class="ghost-link" data-route="tee-enneagramm" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">&#9749; Tee &amp; Enneagramm &ndash; ausf\u00fchrlich</button>
            <button class="ghost-link" data-route="angst-essenz" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Angst &#8594; Essenz</button>
          
            <button class="ghost-link" data-route="koerperregulation" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">K&ouml;rperregulation</button>
          </div>
        </div>
      </div>
    `);
  }

  // Overview
  return shell(`
    ${pageHeader("heiltees")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">Heilung &middot; Heiltees</p>
        <h1>Heiltees</h1>
        <p class="lead-small">Der heilende Tee f&uuml;r alle 9 Enneagrammtypen &ndash; abgestimmt auf die Leidenschaft und die innere Dynamik des jeweiligen Typs.</p>
      </div>
    </section>
    <section class="oils-grid" style="padding:0 1rem 3rem;">
      ${DATA.map(d => `
        <article class="oil-card" style="cursor:pointer;" data-route="heiltees/${d.typ}">
          <div class="oil-card__body" style="padding:1.2rem;">
            <span class="oil-card__type">Typ ${d.typ}</span>
            <h3 style="font-size:1rem;margin:.3rem 0 .6rem;">${d.label.split(" \u00b7 ")[1]}</h3>
            <div style="margin-bottom:.5rem;">
              <span style="font-size:.7rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:.15rem;">Heiltee</span>
              <span style="font-family:var(--serif);font-size:1.05rem;color:var(--copper);font-style:italic;">${d.tee}</span>
              <span style="font-size:.65rem;color:var(--muted);letter-spacing:.04em;display:block;margin-top:.1rem;">${d.teename}</span>
            </div>
            ${d.wirkungsfeld ? `<p style="font-size:.7rem;color:var(--muted);margin:.5rem 0 0;line-height:1.4;">${d.wirkungsfeld}</p>` : ""}
          </div>
        </article>`).join("")}
    </section>
    <p style="text-align:center;padding:0 1rem 2.5rem;">
      <button class="ghost-link" data-route="tee-enneagramm" style="font-size:.9rem;border:1px solid var(--line);padding:.4rem 1rem;border-radius:6px;">&#9749; Tee &amp; Enneagramm &ndash; ausf&uuml;hrliche &Uuml;bersicht &rarr;</button>
    </p>
  `);
}
function edelsteinePage() {
  const param = state.route.split("/")[1];
  const typNr = param ? parseInt(param) : null;

  if (typNr && typNr >= 1 && typNr <= 9) {
    const e = EDELSTEINE[typNr - 1];
    return shell(`
      ${pageHeader("edelsteine")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="edelsteine">\u2190 Alle Edelsteine</button>
        <h1 class="psycho-detail__title">Typ ${e.typ} &ndash; ${e.name}</h1>
        <p style="font-size:.82rem;color:var(--muted);letter-spacing:.05em;margin:-.3rem 0 1rem;">${e.crystal}</p>
        <div class="psycho-img-wrap">
          <img src="${R2_CDN}assets/schaubilder/edelsteine/${e.file}"
               alt="Typ ${e.typ} &ndash; ${e.name}"
               class="psycho-img" />
        </div>
        ${AFFILIATE_LINKS.edelstein[e.name] ? `
        <div style="margin-top:1.2rem;">
          ${affiliateBoxHtml("edelstein", e.name)}
        </div>` : ""}

        <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--line);">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .6rem;">Passende Schaubilder</p>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
            <button class="ghost-link" data-route="aetherische-oele" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">\u00c4therische \u00d6le &amp; Enneagramm</button>
            <button class="ghost-link" data-route="angst-essenz" style="font-size:.85rem;padding:.35rem .75rem;border:1px solid var(--line);border-radius:6px;">Angst &#8594; Essenz</button>
          </div>
        </div>
      </div>
    `);
  }

  return shell(`
    ${pageHeader("edelsteine")}
    <div class="psycho-wrap">
      <p class="eyebrow">Schaubilder \u00b7 Edelsteine &amp; Enneagramm</p>
      <h1 class="section-title">Edelsteine &amp; Enneagramm</h1>
      <p class="psycho-intro">Jedem Enneagrammtyp ist ein Edelstein zugeordnet, dessen Eigenschaften mit den seelischen Themen, Mustern und Entwicklungsimpulsen des Typs resonieren. Tippe auf einen Typ, um das Schaubild gro\u00df zu sehen.</p>
      <div class="psycho-grid">
        ${EDELSTEINE.map(e => `
          <button class="psycho-card" data-route="edelsteine/${e.typ}" style="border-color:${typeColor(e.typ)};background:linear-gradient(160deg, ${typeColor(e.typ)}18, ${typeColor(e.typ)}08);">
            <span class="psycho-card__nr" style="color:${typeColor(e.typ)};">${e.typ}</span>
            <span class="psycho-card__name">${e.name}</span>
            <span style="font-size:.68rem;color:var(--muted);letter-spacing:.03em;margin-top:.1rem;">${e.crystal}</span>
            <span class="psycho-card__arrow" style="color:${typeColor(e.typ)};">\u2192</span>
          </button>
        `).join("")}
      </div>
      ${relatedLinks([
        {route:"aetherische-oele", label:"\xc4therische \xd6le"},
        {route:"edelsteine", label:"Edelsteine"},
        {route:"tee-enneagramm", label:"Tee-Enneagramm"},
      ])}
    </div>
  `);
}

function aetherischeOelePage() {
  return shell(`
    ${pageHeader("aetherische-oele")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 \u00c4therische \u00d6le &amp; Enneagramm</p>
      <h1>\u00c4therische \u00d6le &amp; Enneagramm</h1>
      <p class="lead-small">Jedem Enneagrammtyp ist ein \u00e4therisches \u00d6l zugeordnet, das direkt auf der Wunden-Ebene wirkt &ndash; dort, wo die tiefste Pr\u00e4gung sitzt. D\u00fcfte ber\u00fchren das limbische System unmittelbar und k\u00f6nnen heilsame Bewegung in festgefahrene Muster bringen.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/oele/aetherische-oele.png"
             alt="\u00c4therische \u00d6le und Enneagramm &ndash; \u00dcbersicht"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"edelsteine", label:"Edelsteine"},
        {route:"tee-enneagramm", label:"Tee-Enneagramm"},
        {route:"heilungsweg", label:"Heilungsweg"},
      ])}
    </section>
  `);
}

function triadendefizitePage() {
  return shell(`
    ${pageHeader("triadendefizite")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Triaden</p>
      <h1 class="section-title">Triadendefizite</h1>
      <h2 style="font-size:1rem;font-weight:600;color:var(--muted);margin:-.4rem 0 1.2rem;letter-spacing:.03em;">Schutz \xb7 Liebe \xb7 Vertrauen</h2>
      <p class="psycho-intro">Im Enneagramm lassen sich die neun Typen in drei Grundzentren ordnen: Bauch, Herz und Kopf. Diese Zentren beschreiben weniger Verhalten als vielmehr die prim\xe4re Art, wie ein Mensch Wirklichkeit verarbeitet und wie er auf ein empfundenes Grunddefizit reagiert. Die Bauchtriade ist von einem Schutzdefizit gepr\xe4gt, die Herztriade von einem Liebesdefizit und die Kopftriade von einem Vertrauensdefizit. Aus diesen Grundspannungen entfalten sich die unterschiedlichen Strategien der einzelnen Typen.</p>

      <img src="./assets/triadendefizite-1.png" alt="Triadendefizite Schaubild 1"
        style="width:100%;border-radius:12px;margin:0 auto 1.5rem;display:block;" />
      <img src="./assets/triadendefizite-2.png" alt="Triadendefizite Schaubild 2"
        style="width:100%;border-radius:12px;margin:0 auto 2.5rem;display:block;" />

      <div class="vb-section" style="max-width:100%;">

        <div class="vb-typ">
          <h3 class="vb-typ__head" style="color:#8b5e3c;"><span class="vb-typ__nr" style="background:#8b5e3c;">Bauchtriade</span> Typen 8, 9 und 1 &ndash; Schutzdefizit</h3>
          <p class="vb-typ__text">Die Bauchtypen organisieren sich um das Thema Schutz und Integrit\xe4t. Die innere Frage lautet unbewusst: <em>Bin ich sicher, unversehrt, unangreifbar?</em></p>
          <div style="display:grid;gap:.5rem;font-size:.85rem;margin:.7rem 0;line-height:1.65;">
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa08</span> kompensiert das Schutzdefizit durch \xdcberkompensation: St\xe4rke, Kontrolle und Durchsetzung, damit Verwundbarkeit gar nicht erst sp\xfcrbar wird. <span style="color:var(--muted);">Schutz durch Kraft.</span></div>
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa09</span> sch\xfctzt sich durch Bet\xe4ubung von Spannung: Konflikt wird vermieden, innere Absenkung stabilisiert Harmonie. <span style="color:var(--muted);">Schutz durch Ruhe.</span></div>
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa01</span> sucht Schutz durch Ordnung: eine verl\xe4ssliche Welt, in der Fehler, Chaos und moralische Unstimmigkeit reduziert sind. <span style="color:var(--muted);">Schutz durch Korrektheit.</span></div>
          </div>
          <p class="vb-typ__text">Alle drei Bauchtypen ringen um Unversehrtheit &mdash; doch der eine sch\xfctzt durch Kraft, der andere durch Ruhe, der dritte durch Ordnung.</p>
        </div>

        <div class="vb-typ">
          <h3 class="vb-typ__head" style="color:#b05080;"><span class="vb-typ__nr" style="background:#b05080;">Herztriade</span> Typen 2, 3 und 4 &ndash; Liebesdefizit</h3>
          <p class="vb-typ__text">Die Herztypen bewegen sich um ein Liebesdefizit. Die innere Frage lautet: <em>Bin ich liebenswert, wertvoll, gesehen?</em></p>
          <div style="display:grid;gap:.5rem;font-size:.85rem;margin:.7rem 0;line-height:1.65;">
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa02</span> versucht, Liebe durch Geben zu sichern: zugewandt, unterst\xfctzend, f\xfcrsorglich. <span style="color:var(--muted);">Liebe durch N\xe4he.</span></div>
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa03</span> strebt nach Leistung und Anerkennung, weil Bewunderung als Ersatz f\xfcr Liebe erlebt wird. <span style="color:var(--muted);">Liebe durch Erfolg.</span></div>
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa04</span> sucht tiefe, authentische Resonanz &mdash; im innersten Wesen gesehen zu werden. <span style="color:var(--muted);">Liebe durch Echtheit.</span></div>
          </div>
          <p class="vb-typ__text">Alle drei Herztypen ringen um Liebesgew\xefsheit &mdash; doch der eine sucht sie durch Geben, der andere durch Leistung, der dritte durch Identit\xe4t.</p>
        </div>

        <div class="vb-typ">
          <h3 class="vb-typ__head" style="color:#3a6b8a;"><span class="vb-typ__nr" style="background:#3a6b8a;">Kopftriade</span> Typen 5, 6 und 7 &ndash; Vertrauensdefizit</h3>
          <p class="vb-typ__text">Die Kopftypen sind vom Vertrauensdefizit gepr\xe4gt. Die innere Frage lautet: <em>Kann ich der Welt, den anderen und mir selbst trauen?</em></p>
          <div style="display:grid;gap:.5rem;font-size:.85rem;margin:.7rem 0;line-height:1.65;">
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa05</span> baut Wissen, Klarheit und geistige Autonomie auf, um Unsicherheit zu reduzieren. <span style="color:var(--muted);">Vertrauen durch Kompetenz.</span></div>
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa06</span> pr\xfcft, zweifelt, antizipiert Risiken und sucht Verl\xe4sslichkeit in Strukturen und Loyalit\xe4ten. <span style="color:var(--muted);">Vertrauen durch Absicherung.</span></div>
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa07</span> h\xe4lt M\xf6glichkeiten offen und orientiert sich in Zukunft und Freiheit, um Enge und Schmerz auszuweichen. <span style="color:var(--muted);">Vertrauen durch Offenheit.</span></div>
          </div>
          <p class="vb-typ__text">Alle drei Kopftypen ringen mit Unsicherheit &mdash; doch der eine begegnet ihr mit Erkenntnis, der andere mit Sicherung, der dritte mit Freiheit.</p>
        </div>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1rem;">
          <p class="vb-intro">So zeigen sich drei Grundbewegungen: Schutz, Liebe und Vertrauen. Die Bauchtypen suchen Unversehrtheit, die Herztypen suchen Liebesgew\xefsheit, die Kopftypen suchen Verl\xe4sslichkeit. Jeder Typ ist eine spezifische Antwort auf ein empfundenes Defizit. Nicht das sichtbare Verhalten ist entscheidend, sondern die tieferliegende Bewegung, mit der das System immer wieder versucht, seine Grundunsicherheit zu regulieren.</p>
        </div>

        <div style="border-left:3px solid var(--gold);padding:.9rem 1.1rem;margin:1.8rem 0;background:var(--paper);border-radius:0 8px 8px 0;">
          <p style="margin:0;font-size:.92rem;color:var(--ink);line-height:1.8;font-style:italic;">M\xf6gen diese Schaubilder und der begleitende Text Ihnen helfen, die drei inneren Zentren noch klarer zu sehen und den eigenen Weg darin mit mehr Verst\xe4ndnis, Tiefe und freundlicher Wachheit zu gehen.</p>
        </div>

        ${relatedLinks([
          {route:"schutzdefizite", label:"Schutzdefizite"},
          {route:"grundformel", label:"Grundformel des Rathmer-Enneagramms"},
          {route:"drei-zentren", label:"Drei Zentren"},
        ])}
      </div>
    </div>
  `);
}

function teeEnneagrammPage() {
  return shell(`
    ${pageHeader("tee-enneagramm")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Tee &amp; Enneagramm</p>
      <h1>Tee &amp; Enneagramm</h1>
      <p class="lead-small">Welcher Tee passt zu welchem Enneagrammtyp? Diese zwei \u00dcbersichten zeigen, wie die heilsamen Eigenschaften verschiedener Teesorten mit den Themen, Wunden und Entwicklungsimpulsen der neun Typen korrespondieren.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/tee/tee-uebersicht-1.png"
             alt="Tee und Enneagramm &ndash; \u00dcbersicht 1"
             class="psycho-img" />
      </div>
      <div class="psycho-img-wrap" style="margin-top:2rem;">
        <img src="./assets/schaubilder/tee/tee-uebersicht-2.png"
             alt="Tee und Enneagramm &ndash; \u00dcbersicht 2"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.6rem;color:#5f5f5f;">Typ 1 &ndash; Melissentee</h3>
        <p class="vb-intro"><strong>Pflanzenqualit\u00e4t:</strong> mild, entkrampfend, ausgleichend, nervlich beruhigend. <strong>F\u00f6rdert:</strong> Gelassenheit, innere Weichheit, Entspannung, freundliche Selbstregulation. <strong>Passt zu Typ 1, weil:</strong> die Strenge weicher werden darf, ohne dass Klarheit verloren geht. <strong>Leitidee:</strong> Weniger innere Verkrampfung, mehr milde Ordnung.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#7a2fa8;">Typ 2 &ndash; Rosenbl\u00fctentee</h3>
        <p class="vb-intro"><strong>Pflanzenqualit\u00e4t:</strong> herz\u00f6ffnend, harmonisierend, verfeinernd, emotional w\u00e4rmend. <strong>F\u00f6rdert:</strong> Selbstwert, Herzensw\u00e4rme, Empf\u00e4nglichkeit, liebevolle Pr\u00e4senz. <strong>Passt zu Typ 2, weil:</strong> Zuwendung nicht nur nach au\u00dfen flie\u00dfen muss, sondern auch nach innen. <strong>Leitidee:</strong> Geben und Empfangen kommen in ein besseres Gleichgewicht.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#1fa688;">Typ 3 &ndash; Rosmarintee</h3>
        <p class="vb-intro"><strong>Pflanzenqualit\u00e4t:</strong> anregend, kl\u00e4rend, sammelnd, aufrichtend. <strong>F\u00f6rdert:</strong> Pr\u00e4senz, Fokus, Wachheit, innere Ausrichtung. <strong>Passt zu Typ 3, weil:</strong> Aktivit\u00e4t und Zielkraft in echte innere Sammlung zur\u00fcckgef\u00fchrt werden. <strong>Leitidee:</strong> Weniger Fassade, mehr Substanz und Richtung.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#3cbf1f;">Typ 4 &ndash; Weidenr\u00f6schentee</h3>
        <p class="vb-intro"><strong>Pflanzenqualit\u00e4t:</strong> fein, regulierend, bes\u00e4nftigend, zur\u00fccknehmend, seelisch differenziert. <strong>F\u00f6rdert:</strong> Sammlung, innere Beruhigung, Abgrenzung, stille Zentrierung. <strong>Passt zu Typ 4, weil:</strong> emotionale Tiefe da sein darf, ohne sich im Eigengef\u00fchl zu verlieren. <strong>Leitidee:</strong> Tiefe mit Ma\u00df, Gef\u00fchl mit stiller Form.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#124fcc;">Typ 5 &ndash; Haferkrauttee</h3>
        <p class="vb-intro"><strong>Pflanzenqualit\u00e4t:</strong> n\u00e4hrend, aufbauend, nervenst\u00e4rkend, schlicht stabilisierend. <strong>F\u00f6rdert:</strong> Substanz, Regeneration, Verk\u00f6rperung, ruhige Belastbarkeit. <strong>Passt zu Typ 5, weil:</strong> der R\u00fcckzug nicht noch mehr Vergeistigung braucht, sondern Nahrung und Boden. <strong>Leitidee:</strong> Mehr Kraft, Dichte und Anbindung an den Leib.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#8a5222;">Typ 6 &ndash; Kamillenbl\u00fctentee</h3>
        <p class="vb-intro"><strong>Pflanzenqualit\u00e4t:</strong> beruhigend, entkrampfend, haltgebend, vertraut. <strong>F\u00f6rdert:</strong> Sicherheit, Loslassen, nervliche Beruhigung, Vertrauen. <strong>Passt zu Typ 6, weil:</strong> innere Alarmbereitschaft und Gr\u00fcbelspannung bes\u00e4nftigt werden. <strong>Leitidee:</strong> Weniger Dauervigilanz, mehr innere Geborgenheit.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#d4a800;">Typ 7 &ndash; Pfefferminztee</h3>
        <p class="vb-intro"><strong>Pflanzenqualit\u00e4t:</strong> frisch, beweglich, kl\u00e4rend, belebend. <strong>F\u00f6rdert:</strong> geistige Frische, Leichtigkeit, freie Bewegung, Aufhellung. <strong>Passt zu Typ 7, weil:</strong> der helle, mobile, luftige Charakter des Typs direkt gespiegelt wird. <strong>Leitidee:</strong> Lebensfreude und Beweglichkeit in klarer Form.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#a00802;">Typ 8 &ndash; Ingwertee</h3>
        <p class="vb-intro"><strong>Pflanzenqualit\u00e4t:</strong> w\u00e4rmend, aktivierend, durchdringend, vitalisierend. <strong>F\u00f6rdert:</strong> Kraft, Entschiedenheit, W\u00e4rme, Durchsetzung, Pr\u00e4senz. <strong>Passt zu Typ 8, weil:</strong> Intensit\u00e4t und Lebenskraft eine klare, unmittelbare Entsprechung finden. <strong>Leitidee:</strong> Kraft mit W\u00e4rme und Direktheit.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#cc6e00;">Typ 9 &ndash; Fencheltee</h3>
        <p class="vb-intro"><strong>Pflanzenqualit\u00e4t:</strong> mild, harmonisierend, rund, freundlich ausgleichend. <strong>F\u00f6rdert:</strong> Zentrierung, Bek\u00f6mmlichkeit, innere Ruhe, sanfte Pr\u00e4senz. <strong>Passt zu Typ 9, weil:</strong> er nicht \u00fcberfordert, aber dennoch leise in Bewegung bringt. <strong>Leitidee:</strong> Sanft aus der Tr\u00e4gheit in mehr Pr\u00e4senz.</p>
      </div>

      ${relatedLinks([
        {route:"aetherische-oele", label:"\xc4therische \xd6le"},
        {route:"edelsteine", label:"Edelsteine"},
        {route:"heilungsweg", label:"Heilungsweg"},
      ])}
    </section>
  `);
}

function psychogrammePage() {
  const param = state.route.split("/")[1];
  const typNr = param ? parseInt(param) : null;

  if (typNr && typNr >= 1 && typNr <= 9) {
    const t = PSYCHOGRAMM_TYPEN[typNr - 1];
    return shell(`
      ${pageHeader("psychogramme")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="psychogramme">\u2190 Alle Psychogramme</button>
        <h1 class="psycho-detail__title">Typ ${t.typ} &ndash; ${t.name}</h1>
        <p class="psycho-detail__kern">${t.kern}</p>
        <div class="psycho-img-wrap">
          <img src="${R2_CDN}assets/schaubilder/psychogramme/typ-${t.typ}.jpg" alt="Psychogramm Typ ${t.typ}" class="psycho-img" />
        </div>
      </div>
    `);
  }

  // \u00dcbersicht aller 9 Typen
  return shell(`
    ${pageHeader("psychogramme")}
    <div class="psycho-wrap">
      <p class="eyebrow">Tiefenpsychologie</p>
      <h1 class="section-title">Psychogramme der 9 Enneagrammtypen</h1>
      <p class="psycho-intro">Jedes Psychogramm zeigt den vollst\u00e4ndigen tiefenpsychologischen Kreislauf eines Typs: vom H\u00f6heren Selbst \u00fcber das untergr\u00fcndige Mangelgef\u00fchl bis zum fiktiven Selbstbild und Schatten \u2014 und den Weg zur\u00fcck zur Integration.</p>
      <div class="psycho-grid">
        ${PSYCHOGRAMM_TYPEN.map(t => `
          <button class="psycho-card" data-route="psychogramme/${t.typ}" style="border-color:${typeColor(t.typ)};background:linear-gradient(160deg, ${typeColor(t.typ)}18, ${typeColor(t.typ)}08);">
            <span class="psycho-card__nr" style="color:${typeColor(t.typ)};">${t.typ}</span>
            <span class="psycho-card__name">${t.name}</span>
            <span class="psycho-card__kern">${t.kern}</span>
            <span class="psycho-card__arrow" style="color:${typeColor(t.typ)};">\u2192</span>
          </button>
        `).join("")}
      </div>
      ${relatedLinks([
        {route:"ego-persoenlichkeit", label:"Ego-Pers\xf6nlichkeit"},
        {route:"wer-wir-sind", label:"Wer wir sind"},
        {route:"aufmerksamkeitsfokus", label:"Aufmerksamkeitsfokus"},
      ])}
    </div>
  `);
}

// \u2500\u2500 Typalbum: IndexedDB-Helfer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const ALBUM_DB = "kompass-typalbum";
const ALBUM_STORE = "fotos";

function albumDb() {
  return new Promise((res, rej) => {
    const req = indexedDB.open(ALBUM_DB, 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore(ALBUM_STORE);
    req.onsuccess = e => res(e.target.result);
    req.onerror   = e => rej(e.target.error);
  });
}
async function albumGet(code) {
  const db = await albumDb();
  return new Promise((res, rej) => {
    const tx = db.transaction(ALBUM_STORE, "readonly");
    const req = tx.objectStore(ALBUM_STORE).get(code);
    req.onsuccess = () => res(req.result || []);
    req.onerror   = () => rej(req.error);
  });
}
async function albumSet(code, arr) {
  const db = await albumDb();
  return new Promise((res, rej) => {
    const tx = db.transaction(ALBUM_STORE, "readwrite");
    const req = tx.objectStore(ALBUM_STORE).put(arr, code);
    req.onsuccess = () => res();
    req.onerror   = () => rej(req.error);
  });
}

// \u2500\u2500 Typalbum-Seite \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function typalbumPage() {
  const sektionen = GRUNDTYPEN.map(t => {
    const dreiHtml = ["se","so","sx"].map(v => {
      const code = v + t.num;
      return `
        <div class="album-subtyp" data-code="${code}">
          <div class="album-subtyp__header" style="border-left:3px solid ${typeColor(t.num)};padding-left:0.7rem;margin-bottom:0.6rem;">
            <strong style="color:${typeColor(t.num)};font-size:0.92rem;">${code.toUpperCase()}</strong>
            <span style="color:var(--muted);font-size:0.82rem;margin-left:0.4rem;">\u00b7 ${t.name}</span>
          </div>
          <div class="album-grid" id="grid-${code}" style="display:flex;flex-wrap:wrap;gap:0.5rem;min-height:48px;"></div>
          <label class="album-add-btn" data-add="${code}" style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.5rem;cursor:pointer;font-size:0.8rem;color:var(--copper);background:var(--surface);border:1.5px solid var(--gold);border-radius:20px;padding:0.35rem 0.9rem;font-weight:600;box-shadow:0 1px 4px rgba(0,0,0,0.08);transition:background 0.15s;">
            \uff0b Foto hochladen
            <input type="file" accept="image/*" data-file="${code}" style="display:none;" />
          </label>
        </div>`;
    }).join("");
    return `
      <div style="margin-bottom:2rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border);">
        <p style="font-family:'EB Garamond',serif;font-size:1rem;color:${typeColor(t.num)};font-weight:700;margin-bottom:0.8rem;">Typ ${t.num} \u00b7 ${t.name}</p>
        <div style="display:flex;flex-direction:column;gap:1rem;">${dreiHtml}</div>
      </div>`;
  }).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("Mein Typalbum")}
      <div style="padding:0 0.5rem 1rem;">
        <p style="color:var(--muted);font-size:0.88rem;margin-bottom:1.5rem;">Lade Fotos von Menschen hoch und ordne sie den 27 Subtypen zu \u2014 als pers\u00f6nliches Enneagramm-Notizbuch.</p>
        <div id="album-lightbox" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:9999;align-items:center;justify-content:center;flex-direction:column;gap:1rem;">
          <img id="album-lb-img" style="max-width:90vw;max-height:70vh;border-radius:12px;object-fit:contain;" />
          <p id="album-lb-name" style="color:#fff;font-size:1rem;text-align:center;"></p>
          <div style="display:flex;gap:1rem;">
            <button id="album-lb-del" style="background:rgba(200,60,60,0.85);color:#fff;border:none;border-radius:8px;padding:0.5rem 1.2rem;cursor:pointer;font-size:0.9rem;">\u2715 L\u00f6schen</button>
            <button id="album-lb-close" style="background:rgba(255,255,255,0.15);color:#fff;border:none;border-radius:8px;padding:0.5rem 1.2rem;cursor:pointer;font-size:0.9rem;">Schlie\u00dfen</button>
          </div>
        </div>
        ${sektionen}
      </div>
    </div>
  `);
}

function typalbumInit() {
  const allCodes = GRUNDTYPEN.flatMap(t => ["se","so","sx"].map(v => v + t.num));

  // Alle Grids bef\u00fcllen
  allCodes.forEach(async code => {
    const grid = document.getElementById("grid-" + code);
    if (!grid) return;
    const fotos = await albumGet(code);
    renderAlbumGrid(grid, code, fotos);
  });

  // Lightbox
  let lbCode = null, lbIdx = null;
  const lb      = document.getElementById("album-lightbox");
  const lbImg   = document.getElementById("album-lb-img");
  const lbName  = document.getElementById("album-lb-name");
  const lbDel   = document.getElementById("album-lb-del");
  const lbClose = document.getElementById("album-lb-close");

  window.__albumOpenLb = async (code, idx) => {
    const fotos = await albumGet(code);
    if (!fotos[idx]) return;
    lbCode = code; lbIdx = idx;
    lbImg.src  = fotos[idx].dataUrl;
    lbName.textContent = fotos[idx].name || "";
    lb.style.display = "flex";
  };

  lbClose.addEventListener("click", () => { lb.style.display = "none"; });
  lb.addEventListener("click", e => { if (e.target === lb) lb.style.display = "none"; });

  lbDel.addEventListener("click", async () => {
    if (lbCode === null || lbIdx === null) return;
    const fotos = await albumGet(lbCode);
    fotos.splice(lbIdx, 1);
    await albumSet(lbCode, fotos);
    lb.style.display = "none";
    const grid = document.getElementById("grid-" + lbCode);
    if (grid) renderAlbumGrid(grid, lbCode, fotos);
  });

  // Upload-Handler
  document.querySelectorAll("input[data-file]").forEach(input => {
    input.addEventListener("change", async e => {
      const code = input.dataset.file;
      const file = e.target.files[0];
      if (!file) return;
      // Name abfragen
      const name = prompt("Name f\u00fcr diese Person (optional):", "") ?? "";
      const reader = new FileReader();
      reader.onload = async ev => {
        const img = new Image();
        img.onload = async () => {
          const canvas = document.createElement("canvas");
          const MAX = 400;
          const ratio = Math.min(MAX / img.width, MAX / img.height);
          canvas.width  = Math.round(img.width  * ratio);
          canvas.height = Math.round(img.height * ratio);
          canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
          const fotos = await albumGet(code);
          fotos.push({ dataUrl, name });
          await albumSet(code, fotos);
          const grid = document.getElementById("grid-" + code);
          if (grid) renderAlbumGrid(grid, code, fotos);
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
      input.value = "";
    });
  });
}

function renderAlbumGrid(grid, code, fotos) {
  if (!fotos.length) { grid.innerHTML = ""; return; }
  grid.innerHTML = fotos.map((f, i) => `
    <div onclick="window.__albumOpenLb('${code}',${i})" style="cursor:pointer;text-align:center;">
      <img src="${f.dataUrl}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;border:2px solid var(--border);" />
      ${f.name ? `<p style="font-size:0.68rem;color:var(--muted);margin:0.2rem 0 0;max-width:60px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${f.name}</p>` : ""}
    </div>`).join("");
}

function freischaltPage() {
  return shell(`
    <section class="freischalt-page">
      <div class="freischalt-card">
        <div class="freischalt-card__lock">\u2726</div>
        <h1 class="freischalt-card__title">Enneagramm-Heilungskompass</h1>
        <p class="freischalt-card__desc">Das interaktive Navigationssystem f\u00fcr alle 27 Enneagramm-Subtypen \u2014 Blickqualit\u00e4ten, Profiling, Hom\u00f6opathie, Bachbl\u00fcten, Sch\u00fc\u00dfler-Salze, Edelsteine, Teeempfehlungen, TCM, Musik und vieles mehr.</p>

        <ul style="text-align:left;font-size:0.9rem;color:var(--muted);line-height:1.8;margin:0 0 1.4rem;padding-left:1.3rem;">
          <li><strong style="color:var(--ink);">Alle 27 Subtyp-Portraits</strong> \u2013 tiefenpsychologische Profile mit Tier, Heilungsweg & Naturheilkunde</li>
          <li><strong style="color:var(--ink);">Hunderte Schaubilder</strong> \u2013 Enneagramm, Spiritualit\u00e4t, Philosophie, Musik & mehr</li>
          <li><strong style="color:var(--ink);">Alle 3 Typen-Tests</strong> \u2013 Diagnose-, Struktur- & Motivationstest mit pers\u00f6nlicher Auswertung</li>
          <li><strong style="color:var(--ink);">Einmalig kaufen</strong> \u2013 lebenslanger Zugang, w\u00e4chst st\u00e4ndig weiter</li>
        </ul>

        <div class="freischalt-card__angebote" style="justify-content:center;">
          <div class="freischalt-angebot freischalt-angebot--gesamt">
            <strong>Vollzugang</strong>
            <span class="freischalt-angebot__preis">\u20ac 79</span>
            <span class="freischalt-angebot__label">einmalig \u00b7 inkl. aller Updates</span>
            <a class="freischalt-card__buy-btn freischalt-card__buy-btn--gold" href="https://buy.stripe.com/fZuaEXdJ64GegJY9jl4gg3E" target="_blank" rel="noopener">Jetzt Zugang kaufen \u2192</a>
          </div>
        </div>

        <div class="freischalt-card__divider"><span>Bereits gekauft? Jetzt anmelden:</span></div>

        <!-- E-Mail-Login (neue Kunden) -->
        <div id="panelEmail">
          <input id="fbEmail" type="email" placeholder="Ihre E-Mail-Adresse" autocomplete="email" spellcheck="false"
            style="width:100%;box-sizing:border-box;padding:0.7rem 1rem;border:1px solid #ddd;border-radius:8px;font-size:1rem;font-family:inherit;margin-bottom:0.5rem;" />
          <input id="fbPass" type="password" placeholder="Ihr Passwort (aus der Best\u00e4tigungs-E-Mail)" autocomplete="current-password"
            style="width:100%;box-sizing:border-box;padding:0.7rem 1rem;border:1px solid #ddd;border-radius:8px;font-size:1rem;font-family:inherit;margin-bottom:0.75rem;" />
          <button id="fbLoginBtn" class="primary" style="width:100%;">Anmelden</button>
          <p id="fbMsg" class="freischalt-card__msg"></p>
        </div>

        <!-- Zugangscode (alte Kunden, ausklappbar) -->
        <div style="margin-top:1rem;text-align:center;">
          <button id="toggleCode" style="background:none;border:none;color:var(--muted);font-size:.85rem;cursor:pointer;text-decoration:underline;font-family:inherit;">
            Ich habe einen Zugangscode
          </button>
        </div>
        <div id="panelCode" style="display:none;margin-top:.75rem;">
          <input id="unlockName" type="text" placeholder="Ihr Vor- und Zuname" autocomplete="name" spellcheck="false"
            style="width:100%;box-sizing:border-box;padding:0.7rem 1rem;border:1px solid #ddd;border-radius:8px;font-size:1rem;font-family:inherit;margin-bottom:0.5rem;" />
          <input id="unlockCode" type="text" placeholder="Zugangscode eingeben" autocomplete="off" spellcheck="false"
            style="width:100%;box-sizing:border-box;padding:0.7rem 1rem;border:1px solid #ddd;border-radius:8px;font-size:1rem;font-family:inherit;margin-bottom:.75rem;" />
          <button id="unlockBtn" class="primary" style="width:100%;">Aktivieren</button>
          <p id="unlockMsg" class="freischalt-card__msg"></p>
        </div>

        <button class="ghost-link freischalt-card__back" data-route="start" style="margin-top:.75rem;">\u2190 Zur\u00fcck zur Startseite</button>
      </div>
    </section>
  `);
}

function legalFooter() {
  const name = getLizenzName();
  const lizenz = name ? `<span class="legal-footer__lizenz">Lizenziert f\u00fcr ${name}</span>` : "";
  const abmelden = hasBasis() ? `<span class="legal-footer__sep">\u00b7</span><button class="legal-footer__link" id="fbLogoutBtn" style="opacity:.6;">Abmelden</button>` : "";
  return `<footer class="legal-footer">
    ${lizenz}
    <button class="legal-footer__link" data-route="impressum">Impressum</button>
    <span class="legal-footer__sep">\u00b7</span>
    <button class="legal-footer__link" data-route="datenschutz">Datenschutz</button>
    <span class="legal-footer__sep">\u00b7</span>
    <a class="legal-footer__link" href="mailto:detlefrathmer@t-online.de?subject=Kompass-Hinweis" style="font-size:.78rem;opacity:.6;color:inherit;text-decoration:none;">Anmerkung senden</a>
    ${abmelden}
  </footer>`;
}

function legalPage(title, bodyHtml) {
  return `<div class="legal-page">
    <button class="legal-page__back" data-route="start">\u2190 Zur\u00fcck</button>
    <h1 class="legal-page__title">${title}</h1>
    <div class="legal-page__body">${bodyHtml}</div>
    ${legalFooter()}
  </div>`;
}

function impressumPage() {
  return legalPage("Impressum", `
    <h2>Angaben gem\u00e4\u00df \u00a7 5 TMG</h2>
    <p>Detlef Rathmer<br>Verlagshaus Rathmer<br>Molkereiweg 9<br>48727 Billerbeck<br>Deutschland</p>
    <h2>Kontakt</h2>
    <p>Telefon: +49 (0) 2543 / 931 85 07<br>WhatsApp: 01575-8786201<br>E-Mail: <a href="mailto:detlefrathmer@t-online.de">detlefrathmer@t-online.de</a></p>
    <h2>Verantwortlich f\u00fcr den Inhalt nach \u00a7 18 Abs. 2 MStV</h2>
    <p>Detlef Rathmer<br>Molkereiweg 9<br>48727 Billerbeck</p>
    <h2>Verbraucherstreitbeilegung</h2>
    <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    <h2>Haftung f\u00fcr Inhalte</h2>
    <p>Als Diensteanbieter sind wir gem\u00e4\u00df \u00a7 7 Abs. 1 TMG f\u00fcr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00a7\u00a7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00fcbermittelte oder gespeicherte fremde Informationen zu \u00fcberwachen oder nach Umst\u00e4nden zu forschen, die auf eine rechtswidrige T\u00e4tigkeit hinweisen.</p>
    <h2>Haftung f\u00fcr Links</h2>
    <p>Unser Angebot enth\u00e4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. F\u00fcr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
    <h2>Urheberrecht</h2>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\u00e4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00dferhalb der Grenzen des Urheberrechtes bed\u00fcrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
  `);
}

function datenschutzPage() {
  return legalPage("Datenschutz", `
    <p class="legal-page__intro">Informationen gem\u00e4\u00df Art. 13 DSGVO \u00fcber die Verarbeitung personenbezogener Daten bei der Nutzung dieser App.</p>
    <h2>1. Verantwortlicher</h2>
    <p>Detlef Rathmer \u00b7 Verlagshaus Rathmer \u00b7 Molkereiweg 9 \u00b7 48727 Billerbeck<br>E-Mail: <a href="mailto:detlefrathmer@t-online.de">detlefrathmer@t-online.de</a></p>
    <h2>2. Hosting</h2>
    <p>Diese App wird \u00fcber GitHub Pages gehostet (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, ein Tochterunternehmen der Microsoft Corporation). Beim Aufruf werden technisch notwendige Daten (IP-Adresse, Browsertyp, aufgerufene Datei, Datum/Uhrzeit) automatisch in Server-Logfiles gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen: <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">docs.github.com</a>.</p>
    <h2>3. Lokaler Speicher (localStorage &amp; IndexedDB)</h2>
    <p>Diese App speichert Ihren freigeschalteten Zugang (Zugangsstufe), optionale Profileingaben sowie \u2013 falls Sie diese Funktionen nutzen \u2013 ein eigenes Profilfoto und selbst hochgeladene Bilder in Ihrem Album ausschlie\u00dflich lokal in Ihrem Browser (localStorage bzw. IndexedDB). Diese Daten verlassen Ihr Ger\u00e4t nicht, werden nicht an einen Server \u00fcbertragen und sind nur auf dem jeweils verwendeten Ger\u00e4t sichtbar. Sie k\u00f6nnen diese Daten jederzeit \u00fcber die Browser-Einstellungen oder die entsprechenden L\u00f6sch-Funktionen in der App wieder entfernen.</p>
    <h2>4. Optionale Anmeldung (Firebase Authentication)</h2>
    <p>Wenn Sie sich in der App optional per E-Mail anmelden, um Ihren Zugang ger\u00e4te\u00fcbergreifend zu nutzen, wird hierf\u00fcr der Dienst Firebase Authentication eingesetzt, ein Angebot der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (Firebase ist ein Google-Dienst). Dabei werden Ihre E-Mail-Adresse und ein technischer Anmeldestatus verarbeitet, um Ihren freigeschalteten Zugang Ihrem Konto zuzuordnen. Eine Verarbeitung durch Google kann auch au\u00dferhalb der EU erfolgen; Google verpflichtet sich hierbei zur Einhaltung der EU-Standardvertragsklauseln bzw. des EU-US Data Privacy Framework. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Erf\u00fcllung des Nutzungsvertrags). Weitere Informationen: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a>. Ohne diese Anmeldung ist die App auf dem jeweiligen Ger\u00e4t ebenso vollst\u00e4ndig nutzbar; der Anmeldedienst selbst speichert keine Fotos, Alben oder Profilangaben \u2013 diese verbleiben wie unter Punkt 3 beschrieben lokal auf Ihrem Ger\u00e4t.</p>
    <h2>5. YouTube-Videos</h2>
    <p>An zahlreichen Stellen der App sind Videos von YouTube eingebunden (u. a. Portr\u00e4ts, Musik, Fachvideos). Beim Aufruf einer Seite mit einem eingebetteten YouTube-Video wird eine Verbindung zu Servern von YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) hergestellt; dabei kann Google bereits vor dem Abspielen technische Daten wie Ihre IP-Adresse erfassen und ggf. Cookies setzen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen, auch zu Ihren Widerspruchsm\u00f6glichkeiten: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p>
    <h2>6. Gesichts-Scan &amp; Video-Aufnahme (Kamera- und Mikrofonzugriff)</h2>
    <p>Auf der optionalen Seite \u201eGesichts-Scan &amp; Video" zur Vorbereitung einer pers\u00f6nlichen Typberatung fragt Ihr Browser mit Ihrer ausdr\u00fccklichen Erlaubnis Zugriff auf Kamera und ggf. Mikrofon ab (Art. 6 Abs. 1 lit. a DSGVO, Einwilligung). Die dabei entstehenden Fotos bzw. das Video werden ausschlie\u00dflich lokal auf Ihrem eigenen Ger\u00e4t verarbeitet und gespeichert; es findet keine automatische \u00dcbertragung an einen Server statt. Erst wenn Sie selbst aktiv den Versand per E-Mail oder WhatsApp ausw\u00e4hlen, verlassen die Aufnahmen Ihr Ger\u00e4t (siehe Punkt 8). Sie k\u00f6nnen den Kamerazugriff jederzeit \u00fcber Ihre Browser- bzw. Ger\u00e4teeinstellungen widerrufen.</p>
    <h2>6a. \u201eDer Wegweiser" \u2013 KI-Wissens-Assistent (Beta)</h2>
    <p>\u00dcber den Kompass-Button (\ud83e\udded) k\u00f6nnen Sie \u201eDer Wegweiser" nutzen, einen experimentellen KI-Assistenten, der Ihre Fragen anhand der Inhalte dieser App beantwortet. Ihre eingegebene Frage sowie die zur Beantwortung passenden Textausz\u00fcge aus der App werden dabei an die Gemini-API der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (ein Google-Dienst) \u00fcbermittelt und dort verarbeitet, um eine Antwort zu erzeugen. Es werden dabei keine Profildaten, kein Name und keine sonstigen personenbezogenen Angaben von Ihnen \u00fcbermittelt \u2013 lediglich der von Ihnen eingegebene Frage-Text. Eine Verarbeitung durch Google kann auch au\u00dferhalb der EU erfolgen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktive Nutzung der Funktion). Weitere Informationen: <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener">ai.google.dev/gemini-api/terms</a>. Wenn Sie diese Funktion nicht nutzen m\u00f6chten, klicken Sie den Kompass-Button einfach nicht an \u2013 die App ist ohne diese Funktion vollst\u00e4ndig nutzbar.</p>
    <h2>7. Google Fonts</h2>
    <p>Diese App verwendet Schriftarten des Dienstes Google Fonts (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Beim Laden der Seite wird eine Verbindung zu Google-Servern hergestellt, wobei Ihre IP-Adresse \u00fcbertragen wird. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p>
    <h2>8. Kauf, Zahlungsabwicklung und Kontaktaufnahme</h2>
    <p>Der Kauf von Zugangscodes erfolgt \u00fcber Stripe (stripe.com). Diese App selbst verarbeitet keine Zahlungsdaten. Rechtsgrundlage f\u00fcr die Verarbeitung durch den Zahlungsanbieter: Art. 6 Abs. 1 lit. b DSGVO.</p>
    <p>An einigen Stellen bietet die App an, Detlef Rathmer direkt per E-Mail oder \u00fcber WhatsApp (WhatsApp Ireland Limited, Dublin, Irland, ein Meta-Unternehmen) zu kontaktieren, etwa zur Terminvereinbarung einer pers\u00f6nlichen Beratung. Diese Funktionen \u00f6ffnen lediglich Ihr E-Mail-Programm bzw. WhatsApp mit einem vorbereiteten Text; ob und welche Daten Sie dabei \u00fcbermitteln, entscheiden Sie selbst. Rechtsgrundlage: Art. 6 Abs. 1 lit. a bzw. b DSGVO.</p>
    <h2>9. Amazon-Partnerprogramm (Affiliate-Links)</h2>
    <p>An einigen Stellen der App empfehle ich passende Produkte (z. B. Edelsteine, Bachbl\u00fcten, \u00e4therische \u00d6le, Meditationskissen, B\u00fccher) und verlinke dabei auf Amazon. Diese App nimmt am Partnerprogramm von Amazon Europe S.\u00e0 r.l. und verbundenen Unternehmen (Amazon-Partnerprogramm) teil, einem Werbeprogramm, das zur Bereitstellung eines Mediums f\u00fcr Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu amazon.de Werbekostenerstattung verdient werden kann. Als Amazon-Partner verdiene ich an qualifizierten K\u00e4ufen eine Provision.</p>
    <p>Entsprechend gekennzeichnete Links sind Affiliate-Links (Werbelinks). Klicken Sie auf einen solchen Link und kaufen Sie anschlie\u00dfend bei Amazon ein, wird bei Amazon ein Cookie gesetzt, das dieser App den Kauf f\u00fcr die Provisionsabrechnung zuordnet; f\u00fcr Sie entstehen dadurch keine Mehrkosten. Es werden hierbei keine \u00fcber den Klick hinausgehenden personenbezogenen Daten durch diese App selbst verarbeitet oder gespeichert &ndash; die Datenverarbeitung nach dem Klick erfolgt ausschlie\u00dflich bei Amazon. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Finanzierung des kostenlosen App-Angebots). Weitere Informationen zum Datenschutz bei Amazon: <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010" target="_blank" rel="noopener">amazon.de/Datenschutzerkl\u00e4rung</a>.</p>
    <h2>10. Cookies und Tracking</h2>
    <p>Diese App setzt selbst keine Cookies und verwendet keine eigenen Analyse- oder Tracking-Dienste. Wie unter Punkt 5 beschrieben, k\u00f6nnen eingebettete YouTube-Videos technisch bedingt Cookies der jeweiligen Anbieter setzen; wie unter Punkt 9 beschrieben, kann ein Klick auf einen Amazon-Affiliate-Link zum Setzen eines Cookies bei Amazon f\u00fchren.</p>
    <h2>11. Ihre Rechte</h2>
    <p>Sie haben das Recht auf Auskunft, Berichtigung, L\u00f6schung, Einschr\u00e4nkung der Verarbeitung sowie Daten\u00fcbertragbarkeit (Art. 15&ndash;20 DSGVO) und das Recht, der Verarbeitung zu widersprechen (Art. 21 DSGVO). Beschwerden richten Sie an eine Datenschutzaufsichtsbeh\u00f6rde, z. B. die LDI NRW (<a href="https://www.ldi.nrw.de" target="_blank" rel="noopener">ldi.nrw.de</a>).</p>
  `);
}

function showTagesimpuls() {
  const IMPULS_KEY = "enneagramm-kompass:tagesimpuls";
  const today = new Date().toISOString().slice(0, 10);
  if (localStorage.getItem(IMPULS_KEY) === today) return;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const impuls = TAGESIMPULSE[dayOfYear % TAGESIMPULSE.length];
  if (!impuls) return;
  const paragraphs = impuls.text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  const card = document.createElement("div");
  card.className = "tagesimpuls-overlay";
  card.innerHTML = `
    <div class="tagesimpuls-card">
      <div class="tagesimpuls-card__ornament" aria-hidden="true">\u25c8</div>
      <div class="tagesimpuls-card__header">
        <span class="tagesimpuls-card__label">Impuls f\u00fcr heute</span>
        <button class="tagesimpuls-card__close" aria-label="Schlie\u00dfen">\u2715</button>
      </div>
      <h2 class="tagesimpuls-card__titel">${impuls.titel}</h2>
      <div class="tagesimpuls-card__text">${paragraphs}</div>
      <p class="tagesimpuls-card__impuls"><em>${impuls.impuls}</em></p>
      <p class="tagesimpuls-card__autor">\u2014 Detlef Rathmer</p>
      <div class="tagesimpuls-card__actions">
        <button class="tagesimpuls-card__btn">Den Impuls mitnehmen \u2726</button>
        <button class="tagesimpuls-card__share">\u2197 Teilen</button>
      </div>
    </div>
  `;
  document.body.appendChild(card);
  requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add("tagesimpuls-overlay--open")));
  const close = () => {
    localStorage.setItem(IMPULS_KEY, today);
    card.classList.remove("tagesimpuls-overlay--open");
    setTimeout(() => card.remove(), 350);
  };
  card.querySelector(".tagesimpuls-card__close").addEventListener("click", close);
  card.querySelector(".tagesimpuls-card__btn").addEventListener("click", close);
  card.querySelector(".tagesimpuls-card__share").addEventListener("click", () => {
    const shareText = `\u201e${impuls.impuls}\u201c \u2014 Detlef Rathmer\nhttps://dettifossi.github.io/enneagramm-heilungskompass/`;
    if (navigator.share) { navigator.share({ text: shareText }); }
    else { window.open("https://wa.me/?text=" + encodeURIComponent(shareText), "_blank"); }
  });
  card.addEventListener("click", e => { if (e.target === card) close(); });
}

function tischdialogePage() {
  const Q = (s) => `\u201e${s}\u201c`;
  const DIALOGE = [
    { code:"SE1", typ:1, leidenschaft:"Groll / Zorn", instinkt:"Selbsterhaltung", kategorie:"Normaltyp",       dialog:`${Q("Ich will Ordnung.")} &ndash; ${Q("Ich will Sicherheit.")}`,           ergebnis:"Disziplin, Korrektheit." },
    { code:"SO1", typ:1, leidenschaft:"Groll / Zorn", instinkt:"Sozial",           kategorie:"Verst\xe4rkungstyp", dialog:`${Q("Ich halte Zorn zur\xfcck.")} &ndash; ${Q("Du musst erziehen.")}`,  ergebnis:"Strenge Moral." },
    { code:"SX1", typ:1, leidenschaft:"Groll / Zorn", instinkt:"Sexuell",          kategorie:"Kontratyp",       dialog:`${Q("Ich will Zorn verbergen.")} &ndash; ${Q("Ich will Intensit\xe4t.")}`, ergebnis:"Zorn bricht offen hervor." },
    { code:"SE2", typ:2, leidenschaft:"Stolz",         instinkt:"Selbsterhaltung", kategorie:"Kontratyp",       dialog:`${Q("Ich wei\xdf, was andere brauchen.")} &ndash; ${Q("Ich will klein wirken.")}`, ergebnis:"Scheinbare Demut." },
    { code:"SO2", typ:2, leidenschaft:"Stolz",         instinkt:"Sozial",           kategorie:"Verst\xe4rkungstyp", dialog:`${Q("Ich will wichtig sein.")} &ndash; ${Q("Ich will gebraucht werden.")}`, ergebnis:"Offenes Helfen." },
    { code:"SX2", typ:2, leidenschaft:"Stolz",         instinkt:"Sexuell",          kategorie:"Normaltyp",       dialog:`${Q("Ich will N\xe4he.")} &ndash; ${Q("Ich will Bindung.")}`,              ergebnis:"Leidenschaftliche Zuwendung." },
    { code:"SE3", typ:3, leidenschaft:"Eitelkeit",     instinkt:"Selbsterhaltung", kategorie:"Kontratyp",       dialog:`${Q("Ich will gl\xe4nzen.")} &ndash; ${Q("Ich will unauff\xe4llig wirken.")}`, ergebnis:"Bodenst\xe4ndig, aber leistungsgetrieben." },
    { code:"SO3", typ:3, leidenschaft:"Eitelkeit",     instinkt:"Sozial",           kategorie:"Verst\xe4rkungstyp", dialog:`${Q("Ich will Erfolg zeigen.")} &ndash; ${Q("Ich will Status.")}`,      ergebnis:"Erfolgsorientierung pur." },
    { code:"SX3", typ:3, leidenschaft:"Eitelkeit",     instinkt:"Sexuell",          kategorie:"Normaltyp",       dialog:`${Q("Ich will attraktiv sein.")} &ndash; ${Q("Ich will Beziehung.")}`,    ergebnis:"Charmant, dynamisch." },
    { code:"SE4", typ:4, leidenschaft:"Neid",          instinkt:"Selbsterhaltung", kategorie:"Kontratyp",       dialog:`${Q("Ich sehe, was fehlt.")} &ndash; ${Q("Ich will sichere Besonderheit.")}`, ergebnis:"Weniger dramatisch." },
    { code:"SO4", typ:4, leidenschaft:"Neid",          instinkt:"Sozial",           kategorie:"Verst\xe4rkungstyp", dialog:`${Q("Ich vergleiche mich.")} &ndash; ${Q("Ich will Status.")}`,         ergebnis:"Dramatischer Vergleich." },
    { code:"SX4", typ:4, leidenschaft:"Neid",          instinkt:"Sexuell",          kategorie:"Normaltyp",       dialog:`${Q("Ich sehne mich.")} &ndash; ${Q("Ich will Intensit\xe4t.")}`,         ergebnis:"Leidenschaftliche Suche." },
    { code:"SE5", typ:5, leidenschaft:"Geiz",          instinkt:"Selbsterhaltung", kategorie:"Verst\xe4rkungstyp", dialog:`${Q("Ich will nichts hergeben.")} &ndash; ${Q("Ich will minimalistisch sein.")}`, ergebnis:"Asketisch, zur\xfcckgezogen." },
    { code:"SO5", typ:5, leidenschaft:"Geiz",          instinkt:"Sozial",           kategorie:"Normaltyp",       dialog:`${Q("Ich halte Wissen zur\xfcck.")} &ndash; ${Q("Ich will teilnehmen.")}`, ergebnis:"Distanziert, aber beteiligt." },
    { code:"SX5", typ:5, leidenschaft:"Geiz",          instinkt:"Sexuell",          kategorie:"Kontratyp",       dialog:`${Q("Ich spare Energie.")} &ndash; ${Q("Ich will intensive N\xe4he.")}`,  ergebnis:"Ambivalenz: N\xe4he & R\xfcckzug." },
    { code:"SE6", typ:6, leidenschaft:"Angst",         instinkt:"Selbsterhaltung", kategorie:"Verst\xe4rkungstyp", dialog:`${Q("Ich sp\xfcre Gefahren.")} &ndash; ${Q("Ich will Vorsorge.")}`,     ergebnis:"Sicherheitsfanatiker." },
    { code:"SO6", typ:6, leidenschaft:"Angst",         instinkt:"Sozial",           kategorie:"Normaltyp",       dialog:`${Q("Ich will nicht allein sein.")} &ndash; ${Q("Ich will Zugeh\xf6rigkeit.")}`, ergebnis:"Loyalit\xe4t, Gruppenhalt." },
    { code:"SX6", typ:6, leidenschaft:"Angst",         instinkt:"Sexuell",          kategorie:"Kontratyp",       dialog:`${Q("Ich bin unsicher.")} &ndash; ${Q("Ich provoziere.")}`,               ergebnis:"Angriff als Abwehr." },
    { code:"SE7", typ:7, leidenschaft:"V\xf6llerei",   instinkt:"Selbsterhaltung", kategorie:"Normaltyp",       dialog:`${Q("Ich will mehr.")} &ndash; ${Q("Ich will Komfort.")}`,                 ergebnis:"Genussfreude, Lebenslust." },
    { code:"SO7", typ:7, leidenschaft:"V\xf6llerei",   instinkt:"Sozial",           kategorie:"Kontratyp",       dialog:`${Q("Ich will genie\xdfen.")} &ndash; ${Q("Ich will Ideale.")}`,          ergebnis:"Moralische, kopfgesteuerte Sieben." },
    { code:"SX7", typ:7, leidenschaft:"V\xf6llerei",   instinkt:"Sexuell",          kategorie:"Verst\xe4rkungstyp", dialog:`${Q("Ich will Ekstase.")} &ndash; ${Q("Ich will Abenteuer.")}`,        ergebnis:"Ruhelos, extrem." },
    { code:"SE8", typ:8, leidenschaft:"Wollust",       instinkt:"Selbsterhaltung", kategorie:"Normaltyp",       dialog:`${Q("Ich will Kraft zeigen.")} &ndash; ${Q("Ich will Sicherheit.")}`,     ergebnis:"Durchsetzungsstark, klassisch." },
    { code:"SO8", typ:8, leidenschaft:"Wollust",       instinkt:"Sozial",           kategorie:"Kontratyp",       dialog:`${Q("Ich will Macht.")} &ndash; ${Q("Ich will f\xfcr andere sorgen.")}`,  ergebnis:"Besch\xfctzerrolle." },
    { code:"SX8", typ:8, leidenschaft:"Wollust",       instinkt:"Sexuell",          kategorie:"Verst\xe4rkungstyp", dialog:`${Q("Ich will Intensit\xe4t.")} &ndash; ${Q("Ich will Leidenschaft.")}`, ergebnis:"Extrem, magnetisch." },
    { code:"SE9", typ:9, leidenschaft:"Tr\xe4gheit",   instinkt:"Selbsterhaltung", kategorie:"Normaltyp",       dialog:`${Q("Ich will mich ver\xe4ndern.")} &ndash; ${Q("Ich will Komfort.")}`,   ergebnis:"Gem\xfctlich, stabil." },
    { code:"SO9", typ:9, leidenschaft:"Tr\xe4gheit",   instinkt:"Sozial",           kategorie:"Kontratyp",          dialog:`${Q("Ich will mich zur\xfcckziehen.")} &ndash; ${Q("Ich will aktiv wirken.")}`, ergebnis:"Gesch\xe4ftig, aber fremdgesteuert." },
    { code:"SX9", typ:9, leidenschaft:"Tr\xe4gheit",   instinkt:"Sexuell",          kategorie:"Verst\xe4rkungstyp", dialog:`${Q("Ich will mich nicht sp\xfcren.")} &ndash; ${Q("Ich will im anderen aufgehen.")}`, ergebnis:"Selbstaufl\xf6sung." },
  ];

  const filterBar = `
    <div class="tv-filterbar" style="margin-bottom:1.5rem;">
      <button class="tv-filter is-active" data-typ="0">Alle</button>
      ${[1,2,3,4,5,6,7,8,9].map(n => `<button class="tv-filter" data-typ="${n}" data-color="${TYPE_COLORS[n]}" style="border-color:${TYPE_COLORS[n]};color:${TYPE_COLORS[n]}">Typ ${n}</button>`).join("")}
    </div>
  `;

  const kategorieKlasse = k => k === "Kontratyp" ? "td-kt--contra" : k === "Verst\u00e4rkungstyp" ? "td-kt--verst" : "td-kt--normal";

  const rows = DIALOGE.map(d => `
    <tr class="td-row" data-typ="${d.typ}">
      <td class="td-code" style="border-left:3px solid ${TYPE_COLORS[d.typ]}"><a href="#subtype/${d.code.toLowerCase()}" class="td-link" style="color:${TYPE_COLORS[d.typ]};font-weight:700">${d.code}</a></td>
      <td class="td-leidenschaft">${d.leidenschaft}</td>
      <td class="td-instinkt">${d.instinkt}</td>
      <td class="td-kat"><span class="td-kt ${kategorieKlasse(d.kategorie)}">${d.kategorie}</span></td>
      <td class="td-dialog">${d.dialog}<br><span class="td-ergebnis">\u2192 ${d.ergebnis}</span></td>
    </tr>
  `).join("");

  return shell(`
    ${pageHeader("tischdialoge")}
    <div class="schaubild-page">
      <h1 class="schaubild-page__title">Tischdialoge der 27 Subtypen</h1>
      <p class="schaubild-page__intro">Jeder Subtyp f\u00fchrt einen inneren &bdquo;Tischdialog" zwischen seiner Leidenschaft und seinem Instinkt. Das Ergebnis zeigt, wie dieser Konflikt im Verhalten sichtbar wird.</p>
      ${filterBar}
      <div class="td-table-wrap">
        <table class="td-table">
          <thead>
            <tr>
              <th>Subtyp</th>
              <th>Leidenschaft</th>
              <th>Instinkt</th>
              <th>Kategorie</th>
              <th>Dialog \u2192 Ergebnis</th>
            </tr>
          </thead>
          <tbody id="td-tbody">${rows}</tbody>
        </table>
      </div>
      ${relatedLinks([
        {route:"subtypen-schaubilder", label:"Subtypen-Schaubilder"},
        {route:"bedeutung-27-subtypen", label:"Bedeutung der 27 Subtypen"},
        {route:"antriebskraefte", label:"Antriebskr\xe4fte"},
      ])}
    </div>
  `);
}

function gesichtsausdrueckePage() {
  return `
    <div class="schaubild-page">
      <h1 class="schaubild-page__title">Gesichtsausdr\u00fccke der 9 Typen</h1>
      <p class="schaubild-page__intro">Die Gesichtsausdr\u00fccke der Enneagrammtypen k\u00f6nnen als Spiegel ihrer inneren Welt und ihrer typischen emotionalen Zust\u00e4nde gesehen werden.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/gesichtsausdruecke.jpg" alt="Die Gesichtsausdr\u00fccke der 9 Enneagrammtypen" class="psycho-img" style="max-width:480px;" />
      </div>
    </div>
  `;
}

function maennlicheWeiblicheSeitePage() {
  return `
    <div class="schaubild-page">
      <h1 class="schaubild-page__title">M\u00e4nnliche &amp; weibliche Seite des Enneagramms</h1>
      <p class="schaubild-page__intro">Typen 5&ndash;8 verk\u00f6rpern die m\u00e4nnliche Seite (Rebellion, eher antisozial, psychopathische Tendenz), Typen 1&ndash;4 die weibliche Seite (Verf\u00fchrung, sozial, hysterische Tendenz). Typ 9 steht als neutraler Pol in der Mitte.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/maennliche-weibliche-seite.jpg" alt="Die weibliche und die m\u00e4nnliche Seite des Enneagramms" class="psycho-img" style="max-width:480px;" />
      </div>
    </div>
  `;
}


function flagEmoji(iso) {
  if (!iso || iso.length !== 2) return "";
  const A = 0x1F1E6;
  const chars = iso.toUpperCase().split("").map(c => String.fromCodePoint(A + c.charCodeAt(0) - 65));
  return chars.join("");
}

const LAENDER_REGIONEN = [
  { region: "Europa", laender: [
    { name: "Deutschland", iso: "DE", typ: 6, unsicher: false, text: "Der Begriff \u201eGerman Angst\u201c ist selbst international zum stehenden Ausdruck geworden \u2013 kaum eine Kultur hat ihre eigene Vorsicht so konsequent institutionalisiert. Das zeigt sich im Alltag an tausend Stellen: an der weltweit h\u00f6chsten Versicherungsdichte, an DIN-Normen f\u00fcr beinahe jeden Gegenstand, am T\u00dcV, der Autos und Aufz\u00fcge in festen Intervallen pr\u00fcft, an der akribischen M\u00fclltrennung. Auch das Sparverhalten ist bezeichnend \u2013 Deutsche horten Bargeld und meiden die B\u00f6rse weit st\u00e4rker als Nachbarl\u00e4nder, aus Angst vor Verlust. Selbst der Wohlstand wird \u00fcber Jahrzehnte hinweg mit der \u201eschwarzen Null\u201c verteidigt, dem Prinzip, keine neuen Schulden zu machen, komme was wolle. Diese kollektive Wachsamkeit ist nicht German Angst als Klischee, sondern gelebte Motivation \u201eSicherheit, Struktur, Verl\u00e4sslichkeit\u201c \u2013 die Sechs in Reinform.", subtyp: "so6", subtypText: "Die deutsche Sechs zeigt sich in erster Linie sozial gepr\u00e4gt: Sicherheit wird nicht individuell gesucht, sondern \u00fcber kollektiv verbindliche Systeme hergestellt \u2013 DIN-Normen, T\u00dcV, Sozialversicherungen, ein dichtes Regelwerk, dem sich alle gleicherma\u00dfen unterwerfen. Die Autorit\u00e4t liegt nicht bei einer Person, sondern bei der Institution selbst, der man vertraut, weil sie f\u00fcr alle gilt. Daneben ist ein deutlicher selbsterhaltender Einschlag erkennbar: das private Sparverhalten, die hohe Versicherungsdichte im eigenen Haushalt, die Vorsicht im Umgang mit dem eigenen Geld. Die sexuelle Variante, die sich eher in offener Konfrontation oder mutigem Vorpreschen zeigen w\u00fcrde, tritt in der deutschen Kultur insgesamt in den Hintergrund \u2013 Regelkonformit\u00e4t wird der offenen Kraftprobe vorgezogen." },
    { name: "Frankreich", iso: "FR", typ: 4, unsicher: false, text: "Kaum ein Land hat das Gef\u00fchl selbst zur Kunstform erhoben wie Frankreich: Im Caf\u00e9 wird nicht nur Kaffee getrunken, sondern stundenlang \u00fcber den Sinn des Lebens diskutiert \u2013 Philosophie ist Pflichtfach bis zum Abitur, das \u201ebac philo\u201c. Die Mode, von Coco Chanel bis zur Haute Couture, versteht sich nicht als Funktionskleidung, sondern als Ausdruck des Unverwechselbaren. Das franz\u00f6sische Kino, das \u201ecin\u00e9ma d\u2019auteur\u201c, stellt bis auf den heutigen Tag die pers\u00f6nliche Vision des Regisseurs \u00fcber den Massengeschmack. Und wenn Franzosen mit den \u201eGilets Jaunes\u201c oder anderen Protesten auf die Stra\u00dfe gehen, geht es fast immer auch darum, geh\u00f6rt und als Individuum ernst genommen zu werden \u2013 nicht nur um konkrete Forderungen. Das \u201eje ne sais quoi\u201c, das Unbeschreibliche, ist selbst ein Nationalmythos: die \u00dcberzeugung, dass es etwas gibt, das sich nicht erkl\u00e4ren, nur f\u00fchlen l\u00e4sst.", subtyp: "sx4", subtypText: "Bei Frankreich \u00fcberwiegt vermutlich die sexuelle Vier: die Kultur der Verf\u00fchrung, der gro\u00dfen Leidenschaft, des \u201ecoup de foudre\u201c \u2013 Liebe und Begehren werden nicht ged\u00e4mpft, sondern kultiviert und zelebriert, von der Literatur bis zum Kino. Das intensive, oft dramatische Ringen um die eine besondere Verbindung ist hier keine Ausnahme, sondern Ideal. Ein sozialer Einschlag zeigt sich in der institutionalisierten Bedeutung von Kunst und Intellekt als kollektivem Statussymbol \u2013 wer als Individualist erkannt und in den Salons, Feuilletons und Filmfestivals gew\u00fcrdigt wird, hat gesellschaftlich gewonnen. Die selbsterhaltende Vier, die sich eher stumm zur\u00fcckzieht, tritt hier deutlich zur\u00fcck gegen\u00fcber der \u00f6ffentlich gelebten, oft theatralischen Leidenschaft." },
    { name: "Portugal", iso: "PT", typ: 4, unsicher: false, text: "\u201eSaudade\u201c ist kein literarisches Konzept, sondern ein Wort, das jedes Kind kennt und im Alltag benutzt \u2013 die wehm\u00fctige Sehnsucht nach etwas, das vielleicht nie wiederkommt. Im Fado, gesungen in kleinen, verrauchten Lokalen von Lissabon bis Coimbra, wird dieses Gef\u00fchl jeden Abend neu zelebriert, oft bis zu Tr\u00e4nen. Die blau-wei\u00dfen Azulejo-Kacheln an unz\u00e4hligen Hausfassaden erz\u00e4hlen von der Zeit der gro\u00dfen Entdeckungen \u2013 einer verlorenen Gr\u00f6\u00dfe, der man bis heute nachtrauert. Auch die riesige portugiesische Diaspora, Millionen Menschen weltweit, h\u00e4lt an dieser Sehnsucht nach der Heimat mit einer Intensit\u00e4t fest, die selten so w\u00f6rtlich benannt wird wie hier. Der Dichter Fernando Pessoa erfand gleich mehrere literarische Identit\u00e4ten f\u00fcr sich selbst \u2013 ein Sinnbild daf\u00fcr, wie sehr diese Kultur mit Sehnsucht, Vielschichtigkeit und Melancholie ringt.", subtyp: "se4", subtypText: "Die portugiesische Vier wirkt vor allem selbsterhaltend gef\u00e4rbt: Die \u201eSaudade\u201c ist keine laute, nach au\u00dfen gerichtete Dramatik, sondern eine stille, in den Alltag eingesenkte Sehnsucht \u2013 man tr\u00e4gt sie mit sich, arbeitet, kocht, lebt weiter, w\u00e4hrend sie im Hintergrund mitschwingt. Es ist eine Melancholie, die sich eher im Ausharren zeigt als im Ausbruch. Ein sozialer Anteil ist in der kollektiven Erinnerung an die verlorene Gr\u00f6\u00dfe der Seefahrernation und in der weltweiten Diaspora zu erkennen, die diese Sehnsucht gemeinsam tr\u00e4gt und pflegt. Die sexuelle Vier, mit ihrer offenen, konkurrierenden Intensit\u00e4t, tritt in der eher zur\u00fcckhaltenden portugiesischen Gef\u00fchlskultur kaum hervor." },
    { name: "Italien", iso: "IT", typ: 2, unsicher: false, text: "Der sonnt\u00e4gliche Familientisch, an dem sich drei Generationen \u00fcber Stunden hinweg versammeln, ist keine Ausnahme, sondern gelebte Norm. \u201eLa mamma\u201c kocht, weil Essen hier gleichbedeutend mit Liebe ist \u2013 ein Teller, der nicht bis zum Rand gef\u00fcllt ist, gilt als Zeichen mangelnder F\u00fcrsorge. Erwachsene Kinder wohnen oft bis weit in die Drei\u00dfiger bei den Eltern, nicht aus Mangel an Alternativen, sondern weil die Familie als Nest empfunden wird, das man nicht vorschnell verl\u00e4sst. Die abendliche \u201epasseggiata\u201c, der gemeinsame Spaziergang durchs Dorf oder die Altstadt, dient einzig dazu, gesehen zu werden und andere zu gr\u00fc\u00dfen \u2013 ein t\u00e4gliches Ritual der Zugeh\u00f6rigkeit. Und die Institution der Paten, der \u201epadrini\u201c, verankert jedes Kind in einem Netz zus\u00e4tzlicher F\u00fcrsorge, das \u00fcber die Kernfamilie hinausreicht.", subtyp: "so2", subtypText: "Italien zeigt sich sehr klar sozial gepr\u00e4gt: F\u00fcrsorge wird hier nicht nur in der Kernfamilie gelebt, sondern in einem weiten Netz aus Verwandten, Nachbarn und Paten organisiert \u2013 die Institution der \u201epadrini\u201c verankert jedes Kind in mehreren F\u00fcrsorgekreisen zugleich. Die abendliche \u201epasseggiata\u201c ist ein \u00f6ffentliches Ritual des Gesehen- und Gegr\u00fc\u00dftwerdens, bei dem sich Zugeh\u00f6rigkeit im sozialen Raum best\u00e4tigt, nicht in der Zweierbeziehung. Ein selbsterhaltender Unterton zeigt sich im Gewicht, das dem gemeinsamen Essen und dem materiellen Wohl der Familie beigemessen wird \u2013 der \u00fcbervolle Teller als Liebesbeweis. Die sexuelle Zwei, die N\u00e4he \u00fcber eine einzelne, exklusive Bindung sucht, tritt hinter dem breiten, gemeinschaftlichen F\u00fcrsorgenetz zur\u00fcck." },
    { name: "Spanien", iso: "ES", typ: 8, unsicher: false, text: "Der spanische Tagesrhythmus \u2013 sp\u00e4tes Mittagessen, Siesta, Abendessen erst um 22 Uhr \u2013 ist eine offene Weigerung, sich fremden Effizienznormen zu unterwerfen; man lebt nach eigenen Regeln. Im Stierkampf und im Flamenco wird Konfrontation und Leidenschaft nicht kaschiert, sondern zur Kunstform erhoben \u2013 Schmerz, Stolz und Wut werden mit dem ganzen K\u00f6rper ausgedr\u00fcckt, nicht verborgen. Regionale Identit\u00e4ten wie die katalanische oder baskische werden mit einer Vehemenz verteidigt, die bis zu Unabh\u00e4ngigkeitsbestrebungen reicht \u2013 Nachgeben gilt als Schw\u00e4che. Die Erinnerung an den B\u00fcrgerkrieg ist nach wie vor emotional roh, Denkmalstreit und Exhumierungen sind aktuelle Themen, kein abgeschlossenes Kapitel. Auch im Alltag ist die Begr\u00fc\u00dfung k\u00f6rperlich direkt \u2013 zwei K\u00fcsse, festes H\u00e4ndesch\u00fctteln, Blickkontakt, der nicht ausweicht.", subtyp: "sx8", subtypText: "Bei Spanien \u00fcberwiegt wahrscheinlich die sexuelle Acht: Stierkampf und Flamenco sind keine ged\u00e4mpften, sondern k\u00f6rperlich unmittelbare Ausdrucksformen von Kraft, Stolz und Konfrontation \u2013 Intensit\u00e4t wird gesucht, nicht vermieden. Diese Direktheit zeigt sich auch im Alltag, im festen Blickkontakt, im k\u00f6rperlich nahen Gr\u00fc\u00dfen. Ein starker sozialer Einschlag wird in den regionalen Unabh\u00e4ngigkeitsbewegungen sichtbar \u2013 katalanische oder baskische Identit\u00e4t wird kollektiv und mit gro\u00dfer Vehemenz gegen eine wahrgenommene Fremdbestimmung verteidigt, eine Gruppen-Acht, die f\u00fcr das Kollektiv k\u00e4mpft. Die selbsterhaltende Acht, die sich eher in stiller materieller Absicherung zeigen w\u00fcrde, tritt gegen\u00fcber dieser offen gelebten, k\u00f6rperlichen und kollektiven Kraft deutlich zur\u00fcck." },
    { name: "Griechenland", iso: "GR", typ: 9, unsicher: false, text: "Das griechische Wort \u201emeraki\u201c \u2013 etwas mit Seele und Hingabe tun, ohne Eile \u2013 beschreibt eine Grundhaltung, die sich im stundenlangen Sitzen im Kafenio ebenso zeigt wie in der K\u00fcche. Gastfreundschaft, \u201ephiloxenia\u201c, ist eine heilige Pflicht seit der Antike: Fremde werden bewirtet, noch bevor man ihren Namen kennt. Selbst die tiefe Wirtschaftskrise nach 2010, mit Massenarbeitslosigkeit und leeren Staatskassen, f\u00fchrte nicht zu Chaos oder B\u00fcrgerkrieg, sondern wurde mit einer bemerkenswerten kollektiven Gelassenheit getragen. Das Inselleben, wo F\u00e4hrpl\u00e4ne eher als Richtwert denn als Gesetz gelten, pr\u00e4gt eine Zeitauffassung, die sich nicht hetzen l\u00e4sst. Die griechisch-orthodoxe Kirche, mit ihren endlosen Liturgien und der Betonung von Gelassenheit vor Gott, verst\u00e4rkt diese kulturelle Grundmelodie der Harmonie zus\u00e4tzlich.", subtyp: "so9", subtypText: "Griechenland zeigt sich vor allem sozial gepr\u00e4gt: Die \u201ephiloxenia\u201c, die heilige Pflicht zur Gastfreundschaft gegen\u00fcber Fremden, ist ein zutiefst gemeinschaftliches Prinzip \u2013 Harmonie wird nicht f\u00fcr sich selbst gesucht, sondern durch das Wohlergehen und die Einbindung anderer hergestellt. Auch die Art, wie die Wirtschaftskrise nach 2010 kollektiv und ohne Chaos getragen wurde, spricht f\u00fcr eine sozial verankerte Gelassenheit. Ein selbsterhaltender Unterton zeigt sich im entspannten Inselleben, in dem F\u00e4hrpl\u00e4ne eher Richtwert als Gesetz sind \u2013 eine Weigerung, sich von \u00e4u\u00dferen Zeitvorgaben hetzen zu lassen. Die sexuelle Neun, die Harmonie \u00fcber eine einzelne, intensive Verschmelzung sucht, tritt gegen\u00fcber dieser breiten, gemeinschaftlichen Gelassenheit in den Hintergrund." },
    { name: "Gro\u00dfbritannien", iso: "GB", typ: 5, unsicher: false, text: "Das Anstehen in der Schlange, die \u201equeue\u201c, ist beinahe heilig \u2013 Vordr\u00e4ngeln gilt als eine der gr\u00f6\u00dften sozialen S\u00fcnden, weil es Distanz und Ordnung zwischen Fremden verletzt. Der trockene, oft sehr subtile britische Humor funktioniert als Schutzschild: Man h\u00e4lt Gef\u00fchle auf Arml\u00e4nge Abstand, indem man sie in Ironie verpackt. Das Gespr\u00e4ch \u00fcber das Wetter ist notorisch \u2013 ein sicheres, unverf\u00e4ngliches Thema, das echte N\u00e4he geschickt umgeht. Das Oxbridge-Tutorial-System, in dem Studierende wochenlang allein \u00fcber einem Text br\u00fcten, bevor sie ihn mit einem Tutor besprechen, feiert das eigenst\u00e4ndige, zur\u00fcckgezogene Denken als h\u00f6chste akademische Tugend. Und der t\u00e4gliche Tee um f\u00fcnf ist ein Ritual der kontrollierten Pause \u2013 eine Distanzierung vom Tag in klar abgesteckter, ritualisierter Form.", subtyp: "so5", subtypText: "Gro\u00dfbritannien zeigt vermutlich eine sozial gef\u00e4rbte F\u00fcnf: Die heilige \u201equeue\u201c ist ein implizites, aber verbindliches Regelwerk, das Distanz zwischen Fremden ordnet und sch\u00fctzt \u2013 Wissen um die richtige soziale Form, nicht pers\u00f6nliche N\u00e4he, h\u00e4lt die Gruppe zusammen. Das Oxbridge-Tutorial-System, in dem intellektuelle Autorit\u00e4t durch stille Einzelarbeit erworben und dann in einem klar geregelten Rahmen vorgetragen wird, verst\u00e4rkt dieses Bild einer institutionell verankerten, distanzierten Beobachterrolle. Ein selbsterhaltender Anteil zeigt sich im t\u00e4glichen Tee-Ritual um f\u00fcnf Uhr, einer klar abgegrenzten, pers\u00f6nlichen R\u00fcckzugspause vom Tag. Die sexuelle F\u00fcnf, die sich in intensiver Hingabe an eine einzelne Sache oder Person zeigen w\u00fcrde, tritt hinter dieser reservierten, sozial geordneten Zur\u00fcckhaltung zur\u00fcck." },
    { name: "Irland", iso: "IE", typ: 7, unsicher: false, text: "Der Pub ist nicht in erster Linie ein Ort zum Trinken, sondern das soziale Wohnzimmer der Nation \u2013 hier trifft man sich, um Geschichten zu erz\u00e4hlen, \u201ethe craic\u201c, jene un\u00fcbersetzbare Mischung aus Klatsch, Witz und geteilter Freude. Traditionelle Musiksessions entstehen spontan, wenn jemand eine Fiddle oder ein Bodhr\u00e1n mitbringt, ohne Planung, ohne B\u00fchne. Der Humor \u00fcber die eigene, oft schwere Geschichte \u2013 von der gro\u00dfen Hungersnot bis zur Kolonialzeit \u2013 ist typisch irisch: Man lacht \u00fcber das Schwere, statt daran zu zerbrechen. Millionen Auswanderer feiern den St. Patrick\u2019s Day weltweit mit einer Ausgelassenheit, die Identit\u00e4t \u00fcber Distanz am Leben h\u00e4lt. Und die irische Literatur, von Joyce bis Wilde, ist gepr\u00e4gt von spr\u00fchendem Witz, der noch im Ernst die Leichtigkeit sucht.", subtyp: "so7", subtypText: "Irland zeigt eine klar soziale Sieben: Der Pub als \u201esoziales Wohnzimmer der Nation\u201c, die spontanen Musiksessions, \u201ethe craic\u201c \u2013 all das ist Lebensfreude, die sich ausdr\u00fccklich in der Gruppe entfaltet, nicht allein. Auch der St. Patrick's Day, weltweit von der Diaspora gemeinsam gefeiert, zeigt, wie sehr Identit\u00e4t und Freude hier \u00fcber geteilte, kollektive Rituale am Leben gehalten werden. Humor \u00fcber die eigene schwere Geschichte wird gemeinsam erz\u00e4hlt und weitergegeben, nicht allein verarbeitet. Selbsterhaltende oder sexuelle Varianten, die sich eher in individuellem Genuss oder in exklusiver Zweisamkeit zeigen w\u00fcrden, treten gegen\u00fcber dieser ausgepr\u00e4gt geselligen, gruppenorientierten Lebensfreude in Irland insgesamt zur\u00fcck." },
    { name: "Schweiz", iso: "CH", typ: 1, unsicher: false, text: "Direkte Demokratie bedeutet in der Schweiz, dass mehrmals im Jahr \u00fcber hochkomplexe Sachfragen pr\u00e4zise formulierte Abstimmungstexte vorliegen m\u00fcssen \u2013 Ungenauigkeit ist hier keine Option, sondern ein Verfassungsproblem. Die Z\u00fcge fahren auf die Minute genau, und Versp\u00e4tungen von wenigen Minuten werden landesweit diskutiert \u2013 P\u00fcnktlichkeit ist Nationalstolz. Das f\u00f6derale System mit 26 Kantonen, von denen jeder eigene Gesetze hat, verlangt ein hohes Ma\u00df an sauberer Regelarchitektur, damit das Ganze funktioniert. Das Bankwesen, jahrhundertelang f\u00fcr Diskretion und Zuverl\u00e4ssigkeit bekannt, beruht auf demselben Prinzip: Ordnung und Vertrauen durch Verl\u00e4sslichkeit. Selbst die Bergrettung ist hochorganisiert und diszipliniert \u2013 hier z\u00e4hlt Pr\u00e4zision buchst\u00e4blich \u00fcber Leben und Tod.", subtyp: "so1", subtypText: "Die Schweiz zeigt eine deutlich soziale Eins: Die direkte Demokratie verlangt, dass komplexe Sachfragen kollektiv, pr\u00e4zise und f\u00fcr alle verbindlich formuliert werden \u2013 Richtigkeit ist hier kein individueller Anspruch, sondern ein gemeinsam zu erf\u00fcllender Standard. Das f\u00f6derale System mit 26 Kantonen, die sich auf ein gemeinsames Regelwerk einigen m\u00fcssen, verst\u00e4rkt dieses Bild einer kollektiv verantworteten Ordnung. Ein selbsterhaltender Unterton zeigt sich in der sprichw\u00f6rtlichen pers\u00f6nlichen P\u00fcnktlichkeit und im diszipliniert-pr\u00e4zisen Umgang mit den eigenen Angelegenheiten, etwa im Bankwesen. Die sexuelle Eins, die ihre Prinzipien mit missionarischer Intensit\u00e4t nach au\u00dfen tragen w\u00fcrde, tritt hinter dieser eher institutionellen, kollektiv abgestimmten Ordnungsliebe zur\u00fcck." },
    { name: "\u00d6sterreich", iso: "AT", typ: 9, unsicher: false, text: "Das Wiener Kaffeehaus ist eine Institution des ungest\u00f6rten Verweilens: Ein einziger Kaffee berechtigt dazu, stundenlang zu sitzen, zu lesen, nichts zu tun \u2013 niemand wird gedr\u00e4ngt zu gehen. Der \u201eSchm\u00e4h\u201c, jene typisch \u00f6sterreichische Mischung aus Charme, Ironie und Ausweichen, ist ein Werkzeug, mit dem Konflikte elegant umschifft statt ausgetragen werden. Die immerw\u00e4hrende Neutralit\u00e4t, seit 1955 Verfassungsgrundsatz, ist mehr als Au\u00dfenpolitik \u2013 sie ist Ausdruck eines nationalen Selbstverst\u00e4ndnisses, sich m\u00f6glichst nicht in Konfrontationen hineinziehen zu lassen. Die alpine Langsamkeit, das bewusste \u201enicht hudeln\u201c, gilt vielerorts als Tugend statt als Tr\u00e4gheit. Und der Walzer, in gleichm\u00e4\u00dfigem Dreivierteltakt getanzt, ist ein Sinnbild f\u00fcr die \u00f6sterreichische Vorliebe f\u00fcr harmonischen, unaufgeregten Fluss statt abrupter Br\u00fcche.", subtyp: "se9", subtypText: "\u00d6sterreich zeigt vermutlich eine selbsterhaltend gef\u00e4rbte Neun: Das Wiener Kaffeehaus als Ort des ungest\u00f6rten, pers\u00f6nlichen Verweilens, die alpine Langsamkeit, das bewusste \u201enicht hudeln\u201c \u2013 hier steht die eigene, private Gem\u00fctlichkeit im Vordergrund, nicht die Gruppe. Der \u201eSchm\u00e4h\u201c, mit dem Konflikte charmant und individuell umschifft werden, dient eher dem eigenen inneren Frieden als einer aktiven Gruppenharmonie. Ein sozialer Anteil zeigt sich in der immerw\u00e4hrenden Neutralit\u00e4t als kollektivem Selbstverst\u00e4ndnis, das seit 1955 die \u00f6sterreichische Identit\u00e4t nach au\u00dfen pr\u00e4gt. Die sexuelle Neun, mit ihrer intensiven Verschmelzung in eine einzelne Beziehung, tritt gegen\u00fcber dieser behaglichen, eher zur\u00fcckgezogenen Grundhaltung deutlich zur\u00fcck." },
    { name: "Niederlande", iso: "NL", typ: 9, unsicher: false, text: "Das \u201ePoldermodell\u201c \u2013 Konsenssuche zwischen Arbeitgebern, Gewerkschaften und Staat, bis alle Seiten zustimmen k\u00f6nnen \u2013 ist seit Jahrzehnten das Grundprinzip niederl\u00e4ndischer Politik. Diese Konsenskultur reicht Jahrhunderte zur\u00fcck: Ohne gemeinsames, kooperatives Wassermanagement gegen die Nordsee g\u00e4be es das Land in seiner heutigen Form gar nicht. Die liberale Politik gegen\u00fcber Cannabis und Sexarbeit ist weniger Regelbruch als vielmehr das pragmatische Bestreben, Konflikte zu entsch\u00e4rfen, statt sie zu kriminalisieren und eskalieren zu lassen. Das Fahrrad als bevorzugtes Verkehrsmittel schafft einen geteilten, ruhigen \u00f6ffentlichen Raum, in dem R\u00fccksichtnahme einge\u00fcbte Praxis ist. Die vielzitierte niederl\u00e4ndische Direktheit dient dabei nicht der Machtdemonstration, sondern soll Missverst\u00e4ndnisse von vornherein vermeiden \u2013 auch das letztlich ein Dienst an der Harmonie.", subtyp: "so9", subtypText: "Die niederl\u00e4ndische Neun zeigt sich klar sozial gepr\u00e4gt: Das \u201ePoldermodell\u201c ist w\u00f6rtlich eine Institution der kollektiven Konsenssuche zwischen Arbeitgebern, Gewerkschaften und Staat \u2013 Harmonie wird nicht individuell gesucht, sondern gemeinsam ausgehandelt, bis alle zustimmen k\u00f6nnen. Die jahrhundertealte Notwendigkeit, sich gegen die Nordsee zusammenzuschlie\u00dfen, hat diese Konsenskultur tief verankert. Ein selbsterhaltender Unterton zeigt sich im pragmatischen, undramatischen Umgang mit heiklen Themen wie Cannabis oder Sexarbeit \u2013 lieber praktisch entsch\u00e4rfen als eskalieren lassen. Die vielzitierte niederl\u00e4ndische Direktheit dient dabei letztlich der Vermeidung von Missverst\u00e4ndnissen im Alltag, nicht der Konfrontation. Die sexuelle Neun, mit ihrer intensiven Verschmelzung, tritt gegen\u00fcber dieser breiten, institutionalisierten Konsenskultur deutlich zur\u00fcck." },
    { name: "Schweden", iso: "SE", typ: 7, unsicher: false, text: "Schweden ist eines der wenigen L\u00e4nder, das seine eigene gesellschaftliche Offenheit exportf\u00e4hig gemacht hat: IKEA verkauft nicht nur M\u00f6bel, sondern ein demokratisches Lebensgef\u00fchl, das jedem zug\u00e4nglich sein soll. ABBA, Popmusik-Exportweltmacht seit den Siebzigern, steht f\u00fcr unbeschwerte, massentaugliche Lebensfreude. Die gro\u00dfz\u00fcgige Elternzeit-Regelung \u2013 \u00fcber ein Jahr, aufteilbar zwischen beiden Elternteilen \u2013 schafft bewusst Freir\u00e4ume f\u00fcr neue Lebensmodelle. Die Mittsommerfeiern, mit Tanz um den Blumenpfahl bis tief in die helle Nacht, zeigen eine Kultur, die Feste und kollektive Ausgelassenheit ernst nimmt. Und gesellschaftliche Experimentierfreude \u2013 von liberalen Familienmodellen bis zu neuen Wohnformen \u2013 wird hier eher als Fortschritt gefeiert als als Bedrohung empfunden.", subtyp: "so7", subtypText: "Schweden zeigt eine deutlich soziale Sieben: IKEA exportiert nicht nur M\u00f6bel, sondern ein demokratisches, f\u00fcr alle zug\u00e4ngliches Lebensgef\u00fchl, ABBA steht f\u00fcr massentaugliche, geteilte Lebensfreude. Die gro\u00dfz\u00fcgige, zwischen beiden Elternteilen aufteilbare Elternzeit ist eine kollektive, institutionell abgesicherte Erweiterung von Lebensm\u00f6glichkeiten. Die Mittsommerfeiern, gemeinsam bis in die helle Nacht gefeiert, zeigen Ausgelassenheit als geteiltes, gesellschaftliches Ereignis. Ein sexueller Einschlag zeigt sich in der Experimentierfreude gegen\u00fcber neuen, individuellen Familien- und Wohnmodellen, die als pers\u00f6nlicher Fortschritt gefeiert wird. Die selbsterhaltende Sieben, die sich eher in stillem, privatem Genuss zeigen w\u00fcrde, tritt hinter dieser gesellschaftlich geteilten Aufbruchsfreude zur\u00fcck." },
    { name: "Norwegen", iso: "NO", typ: 5, unsicher: false, text: "\u201eFriluftsliv\u201c, das Leben im Freien, ist mehr als ein Hobby \u2013 es ist ein tief verankertes kulturelles Bed\u00fcrfnis nach R\u00fcckzug in die eigene, unber\u00fchrte Stille. Fast jede Familie besitzt oder mietet eine \u201ehytte\u201c, eine einfache Berg- oder K\u00fcstenh\u00fctte ohne Strom und flie\u00dfend Wasser, in die man sich bewusst zur\u00fcckzieht. Der gewaltige Staatsfonds aus \u00d6lgewinnen wird auffallend zur\u00fcckhaltend verwaltet \u2013 kein Prestigeprojekt, sondern eine still wachsende Reserve f\u00fcr kommende Generationen. Mit gerade einmal f\u00fcnf Millionen Menschen auf einer riesigen, zerkl\u00fcfteten Fl\u00e4che ist Weite und Einsamkeit hier nicht Ausnahme, sondern Alltagserfahrung. Wortkargheit gilt nicht als unh\u00f6flich, sondern als respektvolle Zur\u00fcckhaltung gegen\u00fcber dem Gegen\u00fcber.", subtyp: "se5", subtypText: "Norwegen zeigt eine klar selbsterhaltend gepr\u00e4gte F\u00fcnf: \u201eFriluftsliv\u201c ist der bewusste, individuelle R\u00fcckzug in unber\u00fchrte Stille, die \u201ehytte\u201c ohne Strom und flie\u00dfend Wasser ein ganz pers\u00f6nlicher Ort der Gen\u00fcgsamkeit. Wortkargheit gilt hier nicht als Distanzlosigkeit, sondern als respektvolle, in sich ruhende Zur\u00fcckhaltung. Ein sozialer Unterton zeigt sich in der Verwaltung des riesigen \u00d6lfonds \u2013 zur\u00fcckhaltend, ohne Prestigeprojekte, als still wachsende, kollektiv verantwortete Reserve f\u00fcr kommende Generationen. Die sexuelle F\u00fcnf, mit ihrer intensiven, exklusiven Hingabe, tritt gegen\u00fcber dieser weiten, in sich gekehrten norwegischen Zur\u00fcckgezogenheit deutlich zur\u00fcck." },
    { name: "Finnland", iso: "FI", typ: 5, unsicher: false, text: "Die Sauna ist der zentrale Ort finnischer Geselligkeit \u2013 und dort wird bezeichnenderweise meist geschwiegen, nicht geredet. Das Internet-Meme \u201ekalsarik\u00e4nni\u201c, zu Hause allein in Unterw\u00e4sche trinken, ohne die Absicht, auszugehen, wurde von Finnen selbst gepr\u00e4gt und liebevoll angenommen \u2013 ein Bekenntnis zur eigenen Introvertiertheit. Die langen, dunklen Winter erfordern eine F\u00e4higkeit zur stillen, selbstgen\u00fcgsamen Ausdauer, die im Finnischen \u201esisu\u201c hei\u00dft. Nokia, einst Weltmarktf\u00fchrer bei Mobiltelefonen, entstand aus einer Ingenieurskultur, die Substanz \u00fcber Selbstdarstellung stellt. Schweigen wird in Finnland nicht als Gespr\u00e4chspause missverstanden, die gef\u00fcllt werden muss, sondern als vollwertiger, angenehmer Teil der Kommunikation.", subtyp: "se5", subtypText: "Finnland zeigt ebenfalls eine \u00fcberwiegend selbsterhaltende F\u00fcnf: Das \u201ekalsarik\u00e4nni\u201c \u2013 allein zu Hause in Unterw\u00e4sche trinken, ohne auszugehen \u2013 ist ein liebevoll akzeptiertes Bekenntnis zur eigenen, privaten Introvertiertheit. Das \u201esisu\u201c, die stille, selbstgen\u00fcgsame Ausdauer durch die langen dunklen Winter, ist eine zutiefst pers\u00f6nliche Kraft, kein kollektives Ritual. Ein sozialer Einschlag zeigt sich in der finnischen Ingenieurskultur, etwa bei Nokia, die Substanz und Funktion \u00fcber Selbstdarstellung stellt \u2013 eine Art institutionalisierte Zur\u00fcckhaltung. Schweigen wird nicht als L\u00fccke empfunden, die gef\u00fcllt werden muss, sondern als vollwertiger Teil der Kommunikation. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser durchg\u00e4ngig introvertierten Grundhaltung kaum hervor." },
    { name: "D\u00e4nemark", iso: "DK", typ: 2, unsicher: false, text: "Hygge bedeutet im Kern, dass man es sich und vor allem anderen gem\u00fctlich macht \u2013 Kerzen werden angez\u00fcndet, wenn G\u00e4ste kommen, nicht nur f\u00fcr sich allein. D\u00e4nemark investiert einen \u00fcberdurchschnittlichen Anteil seines Sozialbudgets in Kinderbetreuung und Altenpflege \u2013 die Sorge um die Schw\u00e4chsten der Gemeinschaft ist politischer Konsens, nicht Streitpunkt. Die fahrradfreundliche Stadtplanung Kopenhagens, mit breiten, sicheren Radwegen, ist explizit darauf ausgelegt, R\u00fccksicht auf alle Verkehrsteilnehmer einzu\u00fcben. Das \u201eJantelov\u201c, die ungeschriebene Regel, sich nicht \u00fcber andere zu erheben, dient letztlich dazu, dass sich niemand in der Gruppe unwohl f\u00fchlt. F\u00fcrsorge f\u00fcr das Wohlbefinden anderer ist hier also nicht Nebeneffekt, sondern der eigentliche Kern der Kultur.", subtyp: "so2", subtypText: "D\u00e4nemark zeigt eine klar soziale Zwei: \u201eHygge\u201c bedeutet im Kern, es sich vor allem f\u00fcr andere gem\u00fctlich zu machen \u2013 Kerzen werden angez\u00fcndet, wenn G\u00e4ste kommen. Der \u00fcberdurchschnittliche Anteil des Sozialbudgets f\u00fcr Kinderbetreuung und Altenpflege macht die Sorge um die Schw\u00e4chsten zum politischen Konsens, nicht zum Streitpunkt. Das \u201eJantelov\u201c, sich nicht \u00fcber andere zu erheben, dient letztlich dem Wohlbefinden der ganzen Gruppe. Ein selbsterhaltender Unterton zeigt sich in der praktischen, alltagstauglichen F\u00fcrsorge \u2013 etwa der fahrradfreundlichen Stadtplanung, die R\u00fccksichtnahme konkret im Alltag ein\u00fcbt. Die sexuelle Zwei, mit ihrer exklusiven, intensiven Zuwendung zu einer einzelnen Person, tritt hinter dieser breiten, gesellschaftlich verankerten F\u00fcrsorgekultur zur\u00fcck." },
    { name: "Island", iso: "IS", typ: 5, unsicher: false, text: "Mit rund 380.000 Einwohnern auf einer vulkanischen Insel mitten im Nordatlantik ist Isolation hier keine Metapher, sondern geografische Realit\u00e4t. Der Elfen- und Naturgeisterglaube, den viele Isl\u00e4nder noch heute ernst nehmen, spiegelt eine Kultur, die der unber\u00fchrten, introvertierten Natur mehr zutraut als lauter Zivilisation. Die mittelalterlichen Sagas, m\u00fcndlich \u00fcber Generationen weitergegeben, bevor sie aufgeschrieben wurden, zeugen von einer reichen inneren Erz\u00e4hltradition trotz \u00e4u\u00dferer Kargheit. Geothermale Energie macht das Land nahezu energieautark \u2013 auch das ein Ausdruck von Eigenst\u00e4ndigkeit statt Abh\u00e4ngigkeit von au\u00dfen. Kaum ein anderes Land hat pro Kopf so viele ver\u00f6ffentlichte B\u00fccher \u2013 stille, in sich gekehrte Besch\u00e4ftigung als Volkssport.", subtyp: "se5", subtypText: "Island zeigt eine besonders ausgepr\u00e4gte selbsterhaltende F\u00fcnf: Mit rund 380.000 Menschen auf einer vulkanischen Insel im Nordatlantik ist Isolation hier keine Metapher, sondern gelebter Alltag \u2013 geothermale Energie macht das Land zus\u00e4tzlich nahezu autark. Der bis in die Gegenwart gepflegte Glaube an Elfen und Naturgeister spiegelt ein Vertrauen in die stille, introvertierte Natur, mehr als in laute Zivilisation. Kaum ein anderes Land hat pro Kopf so viele ver\u00f6ffentlichte B\u00fccher \u2013 stille, in sich gekehrte Besch\u00e4ftigung als Volkssport. Ein sozialer Unterton zeigt sich in den mittelalterlichen Sagas, die m\u00fcndlich \u00fcber Generationen als gemeinsames kulturelles Erbe weitergegeben wurden, bevor sie aufgeschrieben wurden. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser tief verwurzelten, insularen Zur\u00fcckgezogenheit kaum hervor." },
    { name: "Polen", iso: "PL", typ: 6, unsicher: false, text: "Die Solidarno\u015b\u0107-Bewegung der 1980er-Jahre organisierte sich im Untergrund gegen die kommunistische Staatsmacht \u2013 Wachsamkeit gegen\u00fcber staatlicher Willk\u00fcr ist tief im kollektiven Ged\u00e4chtnis verankert. Die katholische Kirche war w\u00e4hrend der kommunistischen Zeit einer der wenigen verl\u00e4sslichen Schutzr\u00e4ume und genie\u00dft auch heute noch enormen gesellschaftlichen Einfluss. Heiligabend, die \u201eWigilia\u201c, mit zw\u00f6lf traditionellen Gerichten und einem freien Stuhl f\u00fcr einen unerwarteten Gast, ist das wichtigste Familienritual des Jahres \u2013 Sicherheit im engsten Kreis. Millionen Polen, die im Ausland arbeiten, halten \u00fcber w\u00f6chentliche Anrufe und Heimatbesuche engen Kontakt \u2013 Bindung als Absicherung gegen Entwurzelung. Die Erfahrung wiederholter Teilungen und Besatzungen (Preu\u00dfen, Russland, \u00d6sterreich, dann Nazi-Deutschland und die Sowjetunion) hat ein tiefes nationales Sicherheitsbed\u00fcrfnis hinterlassen, das bis in die heutige Verteidigungspolitik hineinwirkt.", subtyp: "so6", subtypText: "Polen zeigt eine vor allem sozial gepr\u00e4gte Sechs: Die Solidarno\u015b\u0107-Bewegung organisierte sich als kollektiver, untergr\u00fcndiger Widerstand gegen staatliche Willk\u00fcr, und die katholische Kirche bot w\u00e4hrend der kommunistischen Zeit einen der wenigen verl\u00e4sslichen, gemeinschaftlichen Schutzr\u00e4ume. Auch die Erfahrung wiederholter Teilungen und Besatzungen hat ein tiefes, national geteiltes Sicherheitsbed\u00fcrfnis hinterlassen. Ein selbsterhaltender Unterton zeigt sich in der Wigilia, dem wichtigsten Familienritual des Jahres mit einem freien Stuhl f\u00fcr einen unerwarteten Gast \u2013 Sicherheit im engsten, privaten Kreis. Auch die Millionen im Ausland arbeitenden Polen, die \u00fcber w\u00f6chentliche Anrufe und Heimatbesuche engen Kontakt halten, zeigen diese Bindung als pers\u00f6nliche Absicherung. Die sexuelle Sechs, mit ihrer mutigen, offenen Konfrontation, tritt gegen\u00fcber dieser institutionell und famili\u00e4r verankerten Wachsamkeit zur\u00fcck." },
    { name: "Ungarn", iso: "HU", typ: 4, unsicher: false, text: "Ungarisch geh\u00f6rt zu keiner der gro\u00dfen europ\u00e4ischen Sprachfamilien \u2013 diese linguistische Insellage verst\u00e4rkt ein Gef\u00fchl kultureller Einzigartigkeit, das mit Stolz gepflegt wird. Die Roma-Musiktradition, mit ihrer emotional aufgeladenen Geigenmusik, hat die ungarische Musikkultur tief gepr\u00e4gt, von Volksliedern bis zu Franz Liszts Rhapsodien. Die Thermalb\u00e4der Budapests, allen voran das Sz\u00e9chenyi-Bad, sind Orte stiller, introspektiver Erholung inmitten der Stadt \u2013 ein Ritual des R\u00fcckzugs in Gesellschaft. Der Dichter S\u00e1ndor Pet\u0151fi, Symbolfigur der Revolution von 1848, verband politischen Widerstand untrennbar mit lyrischem, gef\u00fchlsbetontem Ausdruck. Diese Mischung aus sprachlicher Eigenst\u00e4ndigkeit, musikalischer Melancholie und poetischer Tiefe macht Ungarn zu einem Land, das sein Anderssein aktiv zelebriert.", subtyp: "so4", subtypText: "Ungarn zeigt vor allem eine sozial gef\u00e4rbte Vier: Die sprachliche Einzigartigkeit des Ungarischen, das zu keiner gro\u00dfen europ\u00e4ischen Sprachfamilie geh\u00f6rt, wird als kollektiver Stolz gepflegt, \u00f6ffentlich zelebriert, nicht im Stillen getragen. Der Dichter S\u00e1ndor Pet\u0151fi verband politischen Widerstand untrennbar mit lyrischem Ausdruck \u2013 eine \u00f6ffentlich sichtbare, national bedeutsame Verbindung von Gef\u00fchl und Identit\u00e4t. Ein selbsterhaltender Unterton zeigt sich in den Thermalb\u00e4dern Budapests, Orten stiller, introspektiver Erholung inmitten der Stadt \u2013 ein pers\u00f6nlicher R\u00fcckzug in Gesellschaft. Die emotional aufgeladene Roma-Musiktradition tr\u00e4gt zus\u00e4tzlich einen sexuellen Farbton bei, tritt aber gegen\u00fcber der \u00f6ffentlich zelebrierten kulturellen Einzigartigkeit insgesamt zur\u00fcck." },
    { name: "Tschechien", iso: "CZ", typ: 5, unsicher: false, text: "Bier ist in Tschechien allgegenw\u00e4rtig \u2013 aber die Kneipenkultur ist eher kontemplativ als ausgelassen: lange, ruhige Gespr\u00e4che bei niedrigem Alkoholgehalt, kein lautes Gr\u00f6len. Das Marionettentheater, UNESCO-Kulturerbe, erlaubt es, ernste und satirische Themen aus sicherer, beobachtender Distanz zu verhandeln. Jaroslav Ha\u0161eks \u201eDer brave Soldat Schwejk\u201c \u2013 die Geschichte eines Mannes, der die Absurdit\u00e4t der Macht durch scheinbare Naivit\u00e4t blo\u00dfstellt, statt offen zu rebellieren \u2013 gilt als Nationalepos. Auch der Widerstand gegen den Kommunismus, etwa die Charta 77, war gepr\u00e4gt von leisem, intellektuellem, oft ironischem Dissens statt lautem Aufstand. Franz Kafka, der bekannteste literarische Sohn Prags, verk\u00f6rpert wie kein anderer die genaue, distanzierte Beobachtung b\u00fcrokratischer Absurdit\u00e4t von au\u00dfen.", subtyp: "se5", subtypText: "Tschechien zeigt eine \u00fcberwiegend selbsterhaltende F\u00fcnf: Die Kneipenkultur ist trotz allgegenw\u00e4rtigem Bier eher kontemplativ als ausgelassen \u2013 lange, ruhige Gespr\u00e4che statt lautem Feiern. Jaroslav Ha\u0161eks \u201eBraver Soldat Schwejk\u201c, der die Absurdit\u00e4t der Macht durch scheinbare Naivit\u00e4t unterl\u00e4uft statt offen zu rebellieren, und Kafkas distanzierte Beobachtung b\u00fcrokratischer Absurdit\u00e4t zeigen dieselbe Haltung: genaues Hinsehen aus sicherer, pers\u00f6nlicher Distanz. Ein sozialer Unterton zeigt sich im leisen, aber kollektiv organisierten intellektuellen Dissens, etwa der Charta-77-Bewegung, und im Marionettentheater als gemeinsam geteilter Form indirekter Kritik. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser durchg\u00e4ngig beobachtenden, unaufgeregten Grundhaltung deutlich zur\u00fcck." },
    { name: "Russland", iso: "RU", typ: 1, unsicher: false, text: "Die russische B\u00fcrokratie ist legend\u00e4r f\u00fcr ihre Formularflut und Stempelkultur \u2013 ein System, das auf minuti\u00f6ser, hierarchischer Ordnung beruht, unabh\u00e4ngig davon, wer gerade regiert. Milit\u00e4rparaden auf dem Roten Platz, mit exakt synchronisierten Schritten Tausender Soldaten, sind ein j\u00e4hrliches Schaufenster disziplinierter Pr\u00e4zision. Schach ist Nationalsport und Bildungsfach \u2013 ein Spiel, das reine strategische Kontrolle \u00fcber den Zufall stellt. Das Bolschoi-Ballett steht f\u00fcr eine \u00c4sthetik, in der jede Bewegung \u00fcber Jahre hinweg bis zur Perfektion gedrillt wird. Von den Zaren \u00fcber Stalin bis zur Gegenwart zieht sich ein Muster durch: eine \u201evertikale der Macht\u201c, in der Ordnung von oben durchgesetzt wird \u2013 die Sehnsucht nach starker, kontrollierender F\u00fchrung ist historisch bemerkenswert konstant.", subtyp: "so1", subtypText: "Russland zeigt eine ausgepr\u00e4gt soziale Eins: Die legend\u00e4re B\u00fcrokratie mit ihrer Formularflut und Stempelkultur beruht auf minuti\u00f6ser, hierarchischer Ordnung, die f\u00fcr alle gleicherma\u00dfen gilt, unabh\u00e4ngig von der Person. Milit\u00e4rparaden mit exakt synchronisierten Schritten Tausender Soldaten und das bis zur Perfektion gedrillte Bolschoi-Ballett zeigen dieselbe Logik: Disziplin als kollektiv vorgef\u00fchrtes, \u00f6ffentliches Ideal. Die historische \u201evertikale der Macht\u201c, von den Zaren \u00fcber Stalin bis auf den heutigen Tag, verlangt Ordnung, die von oben durchgesetzt und von allen mitgetragen wird. Ein selbsterhaltender Unterton zeigt sich im Schach als Nationalsport und Schulfach \u2013 strategische, individuell erlernte Kontrolle \u00fcber den Zufall. Die sexuelle Eins, die ihre Prinzipien mit pers\u00f6nlicher, missionarischer Intensit\u00e4t durchsetzen w\u00fcrde, tritt gegen\u00fcber dieser kollektiv-institutionellen Ordnungsmacht zur\u00fcck." },
    { name: "Ukraine", iso: "UA", typ: 6, unsicher: false, text: "Der Holodomor, die von Stalin herbeigef\u00fchrte Hungersnot der 1930er-Jahre mit Millionen Toten, ist ein bis heute offener kollektiver Schmerz, der j\u00e4hrlich \u00f6ffentlich begangen wird \u2013 ein permanentes Mahnmal der Verwundbarkeit. Die bestickte \u201eWyschywanka\u201c, traditionelle Hemden mit regionalen Mustern, wird seit dem Krieg noch bewusster als Schutzsymbol der eigenen Identit\u00e4t getragen. Zivile Freiwilligennetzwerke, die seit 2014 und verst\u00e4rkt seit 2022 Verteidigung, Versorgung und Wiederaufbau organisieren, zeigen einen Zusammenhalt, der direkt aus der Bedrohung erw\u00e4chst. Borschtsch, gemeinsam am Familientisch gekocht, ist weit mehr als ein Gericht \u2013 er steht sinnbildlich f\u00fcr das Zuhause, das es zu verteidigen gilt. Die Sonnenblumenfelder, die die ukrainische Landschaft pr\u00e4gen, sind seit dem Krieg zu einem weltweiten Symbol der Widerstandsf\u00e4higkeit gegen Bedrohung geworden.", subtyp: "so6", subtypText: "Die Ukraine zeigt vor allem eine sozial gepr\u00e4gte Sechs: Die zivilen Freiwilligennetzwerke, die seit 2014 und verst\u00e4rkt seit 2022 Verteidigung, Versorgung und Wiederaufbau organisieren, zeigen Sicherheit als etwas, das gemeinsam und kollektiv hergestellt wird. Auch der j\u00e4hrlich \u00f6ffentlich begangene Holodomor-Gedenktag und die zum weltweiten Symbol gewordenen Sonnenblumenfelder verankern diese Erfahrung im kollektiven, geteilten Ged\u00e4chtnis der ganzen Gesellschaft. Ein selbsterhaltender Unterton zeigt sich im Borschtsch, gemeinsam am Familientisch gekocht \u2013 ein sehr pers\u00f6nliches Sinnbild f\u00fcr das Zuhause, das es zu verteidigen gilt \u2013, sowie in der bestickten \u201eWyschywanka\u201c, die als ganz pers\u00f6nliches Schutzsymbol der eigenen Identit\u00e4t getragen wird. Die sexuelle Sechs, mit ihrer mutigen, offenen Konfrontation, tritt gegen\u00fcber dieser vor allem gemeinschaftlich und famili\u00e4r getragenen Widerstandsf\u00e4higkeit zur\u00fcck." },
    { name: "T\u00fcrkei", iso: "TR", typ: 3, unsicher: false, text: "Istanbul, die einzige Stadt der Welt auf zwei Kontinenten, versteht sich seit Jahrhunderten als Br\u00fccke \u2013 ein Status, der mit sichtbarem Stolz gepflegt wird. Der Gro\u00dfe Basar, seit \u00fcber 500 Jahren in Betrieb, ist Symbol einer tief verwurzelten Handelsmentalit\u00e4t, in der Verhandlungsgeschick und gesch\u00e4ftlicher Erfolg hohes Ansehen genie\u00dfen. Die massive Baut\u00e4tigkeit der vergangenen zwei Jahrzehnte, von Hochh\u00e4usern bis zu Gro\u00dfflugh\u00e4fen, wird von der Regierung bewusst als Symbol nationalen Aufstiegs inszeniert. Fu\u00dfballvereine wie Galatasaray oder Fenerbah\u00e7e sind weit mehr als Sport \u2013 ihr Erfolg wird als kollektiver Statusbeweis gefeiert, mit einer Fan-Intensit\u00e4t, die international auff\u00e4llt. Die Teehauskultur, in der Gesch\u00e4fte oft erst nach langem geselligen Vorgepl\u00e4nkel abgeschlossen werden, verbindet dabei Beziehungsaufbau untrennbar mit wirtschaftlichem Erfolg.", subtyp: "so3", subtypText: "Bei der T\u00fcrkei \u00fcberwiegt vermutlich die soziale Drei: Der Gro\u00dfe Basar und die massive, staatlich inszenierte Baut\u00e4tigkeit zeigen wirtschaftlichen Erfolg als \u00f6ffentlich sichtbares, national bedeutsames Statussymbol \u2013 Istanbul als Br\u00fccke zwischen Kontinenten wird mit sichtbarem, kollektivem Stolz gepflegt. Fu\u00dfballvereine wie Galatasaray oder Fenerbah\u00e7e sind weit mehr als Sport, ihr Erfolg wird als kollektiver Statusbeweis gefeiert. Ein sexueller Einschlag zeigt sich in der Teehauskultur, in der Gesch\u00e4fte erst nach pers\u00f6nlichem, geselligem Beziehungsaufbau abgeschlossen werden \u2013 Erfolg \u00fcber die unmittelbare, pers\u00f6nliche Beziehung zum Verhandlungspartner. Die selbsterhaltende Drei, die sich eher in stillem, funktionalem Arbeiten zeigen w\u00fcrde, tritt hinter diesem \u00f6ffentlich inszenierten, kollektiven Erfolgsstolz zur\u00fcck." },
    { name: "Serbien", iso: "RS", typ: 8, unsicher: false, text: "Die Schlacht auf dem Amselfeld 1389, eine historische Niederlage gegen die Osmanen, wird nach wie vor als Gr\u00fcndungsmythos nationalen Stolzes und Widerstands erinnert \u2013 Niederlage wird hier zu Ehre umgedeutet. Turbo-Folk-Musik, laut, trotzig und unverbl\u00fcmt, wurde in den Neunzigern zur Trotz-Kultur einer international isolierten Nation. Sportfans, insbesondere im Fu\u00dfball und Basketball, sind f\u00fcr ihre Intensit\u00e4t ber\u00fcchtigt \u2013 Emotionen werden hier nicht zur\u00fcckgehalten, sondern mit voller Wucht ausgelebt. Die jahrhundertelange Geschichte des Widerstands gegen das Osmanische Reich und sp\u00e4ter gegen internationale Isolation hat ein starkes, kompromissloses Selbstbehauptungsnarrativ gepr\u00e4gt. Direkte, oft unverbl\u00fcmte Kommunikation gilt hier als ehrlich, nicht als unh\u00f6flich \u2013 Zur\u00fcckhaltung wird eher als Schw\u00e4che gelesen.", subtyp: "so8", subtypText: "Serbien zeigt vor allem eine sozial gepr\u00e4gte Acht: Die Erinnerung an die Schlacht auf dem Amselfeld als nationaler Gr\u00fcndungsmythos und das jahrhundertelange Selbstbehauptungsnarrativ gegen fremde M\u00e4chte sind kollektive, kompromisslose St\u00e4rke \u2013 eine Gruppen-Acht, die f\u00fcr das ganze Volk steht. Turbo-Folk als Trotz-Kultur einer international isolierten Nation verst\u00e4rkt dieses Bild einer gemeinsam gelebten Widerstandshaltung. Ein sexueller Einschlag zeigt sich in der ber\u00fcchtigten Intensit\u00e4t der Sportfans, bei denen Emotionen mit voller, k\u00f6rperlicher Wucht und ohne Zur\u00fcckhaltung ausgelebt werden. Die selbsterhaltende Acht, die sich eher in stiller materieller Absicherung zeigen w\u00fcrde, tritt gegen\u00fcber dieser laut gelebten, kollektiven und pers\u00f6nlichen Kompromisslosigkeit deutlich zur\u00fcck." },
    { name: "Rum\u00e4nien", iso: "RO", typ: 6, unsicher: false, text: "Unter Ceau\u0219escu \u00fcberwachte die Securitate praktisch jeden Lebensbereich \u2013 gesch\u00e4tzt war jeder Dritte Rum\u00e4ne irgendeine Form von Informant, was ein noch heute nachwirkendes tiefes Misstrauen selbst gegen\u00fcber engen Bekannten hinterlassen hat. Die Waisenhaus-Krise nach 1989, als westliche Medien Zehntausende verwahrloste Kinder in staatlichen Heimen entdeckten, ist ein nationales Trauma, \u00fcber das bis in die Gegenwart gesprochen wird. Dorfgemeinschaften und Gro\u00dffamilien gelten traditionell als verl\u00e4sslicherer Schutz als der Staat \u2013 ein Muster, das sich in starker Nachbarschaftshilfe und engem Familienzusammenhalt zeigt. Die Dracula-Legende um Vlad \u021aepe\u0219, touristisch vermarktet, spiegelt unfreiwillig ein kulturelles Grundthema wider: die Furcht vor Bedrohung und die Notwendigkeit, sich mit aller H\u00e4rte zu verteidigen. Rum\u00e4nisch ist zudem die einzige romanische Sprache Osteuropas, umgeben von slawischen Nachbarn \u2013 auch das ein Gef\u00fchl kultureller Insellage, die Wachsamkeit beg\u00fcnstigt.", subtyp: "se6", subtypText: "Rum\u00e4nien zeigt vor allem eine selbsterhaltend gepr\u00e4gte Sechs: Nach den Erfahrungen der Securitate-\u00dcberwachung gelten Dorfgemeinschaften und Gro\u00dffamilien auch heute noch als verl\u00e4sslicherer Schutz als der Staat \u2013 Sicherheit wird im engsten, pers\u00f6nlichen Kreis gesucht, nicht in Institutionen. Die enge Nachbarschaftshilfe und der starke Familienzusammenhalt sind direkte Antworten auf ein tief sitzendes, sehr pers\u00f6nliches Misstrauen. Ein sexueller Einschlag zeigt sich in der Dracula-Legende um Vlad \u021aepe\u0219: die Furcht vor Bedrohung wird hier nicht vermieden, sondern mit kompromissloser, fast trotziger H\u00e4rte beantwortet \u2013 eine counterphobische Note. Die soziale Sechs, die sich eher in kollektiven Institutionen zeigen w\u00fcrde, tritt gegen\u00fcber dieser privaten, famili\u00e4r verankerten Vorsicht zur\u00fcck." },
    { name: "Kroatien", iso: "HR", typ: 8, unsicher: false, text: "Der Vaterl\u00e4ndische Krieg der 1990er-Jahre gegen die jugoslawische Volksarmee ist zentraler Bezugspunkt nationaler Identit\u00e4t \u2013 Gedenkfeiern und Kriegsveteranen genie\u00dfen hohen gesellschaftlichen Status. Das Schachbrettmuster der Nationalflagge und des Wappens wird mit sichtbarem Stolz getragen, von Fu\u00dfballtrikots bis zu \u00f6ffentlichen Geb\u00e4uden. Die kroatische Fu\u00dfballnationalmannschaft, die 2018 das WM-Finale erreichte, wird als Symbol daf\u00fcr gefeiert, dass ein kleines Land sich gegen gro\u00dfe Gegner behaupten kann. Die dalmatinische K\u00fcstenkultur ist stolz und unabh\u00e4ngig, mit eigenen Dialekten und Br\u00e4uchen, die bewusst von der Hauptstadt Zagreb abgegrenzt werden. Zwischen K\u00fcstenregionen und Kontinentalkroatien besteht bis auf den heutigen Tag ein gewisser Konkurrenzgeist \u2013 jede Region verteidigt entschlossen ihre eigene Identit\u00e4t.", subtyp: "so8", subtypText: "Kroatien zeigt eine vor allem sozial gepr\u00e4gte Acht: Der Vaterl\u00e4ndische Krieg als zentraler Bezugspunkt nationaler Identit\u00e4t, der hohe gesellschaftliche Status von Kriegsveteranen und das mit Stolz getragene Schachbrett-Wappen sind kollektive Symbole einer gemeinsam behaupteten St\u00e4rke. Der Erfolg der Fu\u00dfballnationalmannschaft wird explizit als Beweis gefeiert, dass ein kleines Land sich gegen gro\u00dfe Gegner behaupten kann \u2013 eine Gruppen-Acht par excellence. Ein sexueller Einschlag zeigt sich im ausgepr\u00e4gten Konkurrenzgeist zwischen den Regionen, etwa der stolz-unabh\u00e4ngigen dalmatinischen K\u00fcstenkultur, die sich bewusst von der Hauptstadt abgrenzt \u2013 Behauptung auf lokaler, fast pers\u00f6nlicher Ebene. Die selbsterhaltende Acht tritt gegen\u00fcber dieser offen gelebten, kollektiven wie regionalen Kraft zur\u00fcck." },
    { name: "Slowenien", iso: "SI", typ: 5, unsicher: false, text: "\u00dcber 60 Prozent der Landesfl\u00e4che sind bewaldet \u2013 damit ist Slowenien eines der waldreichsten L\u00e4nder Europas, und diese W\u00e4lder werden als Ort der Ruhe und des R\u00fcckzugs gesch\u00e4tzt, nicht nur als Ressource. Der Triglav, der h\u00f6chste Berg des Landes, ist so identit\u00e4tsstiftend, dass er auf der Flagge abgebildet ist \u2013 ein Symbol stiller, erhabener Gr\u00f6\u00dfe statt lauter Selbstdarstellung. Mit nur rund zwei Millionen Einwohnern pflegt Slowenien eine bescheidene, unaufgeregte \u00d6ffentlichkeit, die internationale Aufmerksamkeit eher meidet als sucht. Die Bienenzucht hat in Slowenien einen fast meditativen Kultstatus \u2013 ein still-konzentriertes Handwerk, dem ein eigener Feiertag gewidmet ist. H\u00f6flichkeit und Zur\u00fcckhaltung gegen\u00fcber Fremden werden hier eher als Respekt denn als K\u00e4lte verstanden.", subtyp: "se5", subtypText: "Slowenien zeigt eine klar selbsterhaltend gepr\u00e4gte F\u00fcnf: Die weiten W\u00e4lder werden als pers\u00f6nlicher Ort der Ruhe und des R\u00fcckzugs gesch\u00e4tzt, nicht nur als Ressource, und die fast meditative Bienenzucht steht f\u00fcr ein still-konzentriertes, in sich gekehrtes Handwerk. Die bescheidene, unaufgeregte \u00d6ffentlichkeit, die internationale Aufmerksamkeit eher meidet als sucht, verst\u00e4rkt dieses Bild zus\u00e4tzlich. Ein sozialer Unterton zeigt sich darin, dass der Triglav, der h\u00f6chste Berg, als stilles, erhabenes Identit\u00e4tssymbol sogar auf der Nationalflagge erscheint \u2013 kollektive Gr\u00f6\u00dfe, aber leise und zur\u00fcckhaltend, nicht laut zur Schau gestellt. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser durchg\u00e4ngig zur\u00fcckhaltenden slowenischen Grundhaltung kaum hervor." },
    { name: "Bulgarien", iso: "BG", typ: 6, unsicher: false, text: "Das bulgarische Kopfsch\u00fctteln bedeutet traditionell \u201eJa\u201c, das Nicken \u201eNein\u201c \u2013 ein f\u00fcr Au\u00dfenstehende verwirrendes Detail, das eine tief verwurzelte kulturelle Eigenst\u00e4ndigkeit sichtbar macht. Das Rosental um Kazanlak, seit Jahrhunderten Zentrum der Rosen\u00f6lproduktion, steht f\u00fcr eine Wirtschaftsform, die auf \u00fcber Generationen weitergegebenem, gesch\u00fctztem Wissen beruht. Viele Kinder wachsen bei den Gro\u00dfeltern auf, w\u00e4hrend die Eltern aus wirtschaftlicher Not im Ausland arbeiten \u2013 ein famili\u00e4res Sicherheitsnetz, das \u00fcber L\u00e4ndergrenzen hinweg funktionieren muss. Die kommunistische Vergangenheit, mit einem der loyalsten Sowjet-Satellitenstaaten, hinterlie\u00df ein bis heute sp\u00fcrbares Misstrauen gegen\u00fcber schnellen politischen Versprechen. Zwischen wechselnden Gro\u00dfm\u00e4chten \u2013 Osmanisches Reich, Russland, EU \u2013 gelegen, hat sich eine vorsichtige, abwartende Grundhaltung als \u00dcberlebensstrategie eingepr\u00e4gt.", subtyp: "se6", subtypText: "Bulgarien zeigt vor allem eine selbsterhaltend gepr\u00e4gte Sechs: Viele Kinder wachsen bei den Gro\u00dfeltern auf, w\u00e4hrend die Eltern im Ausland arbeiten \u2013 ein famili\u00e4res Sicherheitsnetz, das \u00fcber L\u00e4ndergrenzen hinweg funktionieren muss. Das \u00fcber Generationen weitergegebene, gesch\u00fctzte Wissen der Rosen\u00f6lproduktion um Kazanlak zeigt dieselbe Logik: Sicherheit durch bewahrtes, famili\u00e4r \u00fcberliefertes K\u00f6nnen. Ein sozialer Unterton zeigt sich im kollektiven, aus der kommunistischen Vergangenheit stammenden Misstrauen gegen\u00fcber schnellen politischen Versprechen und in der vorsichtig-abwartenden Grundhaltung gegen\u00fcber wechselnden Gro\u00dfm\u00e4chten. Die sexuelle Sechs, mit ihrer mutigen Konfrontation, tritt gegen\u00fcber dieser famili\u00e4r und kollektiv verankerten Vorsicht deutlich zur\u00fcck." },
    { name: "Zypern", iso: "CY", typ: 6, unsicher: false, text: "Nikosia ist bislang die letzte geteilte Hauptstadt Europas \u2013 eine \u201eGreen Line\u201c mit UN-Pufferzone verl\u00e4uft mitten durch die Stadt, seit der Teilung 1974 t\u00e4gliche, sichtbare Realit\u00e4t. Halloumi-K\u00e4se, traditionell auf der ganzen Insel hergestellt, wurde selbst zum Politikum, als die EU seine Herkunftsbezeichnung sch\u00fctzte \u2013 ein Symbol daf\u00fcr, wie tief Teilung und Identit\u00e4t ineinandergreifen. \u00c4ltere Generationen erz\u00e4hlen nach wie vor von verlorenen H\u00e4usern und D\u00f6rfern auf der jeweils anderen Seite der Insel \u2013 ein kollektives Trauma, das \u00fcber Generationen weitergegeben wird. Zwischen Osmanischem Reich, britischer Kolonialherrschaft und der noch heute ungel\u00f6sten Teilung hat die Insel selten stabile, langfristige Sicherheit erlebt. Famili\u00e4rer Zusammenhalt und Vorsicht gegen\u00fcber politischen Versprechen sind direkte Folgen dieser wiederholten historischen Erfahrung von Bedrohung.", subtyp: "so6", subtypText: "Zypern zeigt vor allem eine sozial gepr\u00e4gte Sechs: Die geteilte Hauptstadt Nikosia mit ihrer \u201eGreen Line\u201c ist t\u00e4gliche, kollektiv geteilte Realit\u00e4t f\u00fcr die gesamte Gesellschaft, und der EU-Schutz des Halloumi-K\u00e4ses zeigt, wie tief Teilung und nationale Identit\u00e4t ineinandergreifen. Zwischen Osmanischem Reich, britischer Kolonialherrschaft und ungel\u00f6ster Teilung hat die Insel als Ganzes selten stabile Sicherheit erlebt. Ein selbsterhaltender Unterton zeigt sich darin, dass \u00e4ltere Generationen bis in die Gegenwart pers\u00f6nlich von verlorenen H\u00e4usern erz\u00e4hlen \u2013 ein famili\u00e4r weitergegebenes Trauma \u2013 und dass famili\u00e4rer Zusammenhalt als direkte, private Antwort auf wiederholte Bedrohung dient. Die sexuelle Sechs tritt gegen\u00fcber dieser kollektiven wie famili\u00e4ren Wachsamkeit zur\u00fcck." },
    { name: "Slowakei", iso: "SK", typ: 6, unsicher: false, text: "Traditionelle Trachten und Dorffeste, etwa die Folklorefestivals in V\u00fdchodn\u00e1, werden mit gro\u00dfem Ernst gepflegt \u2013 sie geben l\u00e4ndlichen Gemeinschaften ein Gef\u00fchl von Kontinuit\u00e4t und Zusammenhalt. Die Hirtenkultur der \u201eba\u010da\u201c in den Tatra-Bergen, mit eigener K\u00e4seherstellung und Selbstversorgung, steht sinnbildlich f\u00fcr eine Tradition des Sich-selbst-Behelfens abseits staatlicher Absicherung. Nach der Trennung von Tschechien 1993 musste sich das Land als eigenst\u00e4ndiger Staat neu positionieren \u2013 eine Erfahrung, die vorsichtiges, schrittweises Vorgehen gegen\u00fcber gro\u00dfen Ver\u00e4nderungen beg\u00fcnstigte. Die Familie bleibt in l\u00e4ndlichen Regionen die zentrale soziale Absicherung, oft wichtiger als staatliche Institutionen. Skepsis gegen\u00fcber schnellen politischen oder wirtschaftlichen Umbr\u00fcchen ist auch heute noch in Umfragen und Wahlverhalten deutlich zu erkennen.", subtyp: "se6", subtypText: "Die Slowakei zeigt vor allem eine selbsterhaltend gepr\u00e4gte Sechs: Die Hirtenkultur der \u201eba\u010da\u201c in den Tatra-Bergen, mit eigener K\u00e4seherstellung und Selbstversorgung, steht sinnbildlich f\u00fcr eine Tradition des Sich-selbst-Behelfens abseits staatlicher Absicherung. In l\u00e4ndlichen Regionen bleibt die Familie die zentrale, pers\u00f6nliche soziale Absicherung, oft wichtiger als staatliche Institutionen. Ein sozialer Unterton zeigt sich in den mit gro\u00dfem Ernst gepflegten Dorffesten und Trachten, die l\u00e4ndlichen Gemeinschaften ein kollektives Gef\u00fchl von Kontinuit\u00e4t geben, sowie in der nach der Trennung von Tschechien 1993 gewachsenen, gemeinsam geteilten Skepsis gegen\u00fcber schnellen Umbr\u00fcchen. Die sexuelle Sechs tritt gegen\u00fcber dieser famili\u00e4r und d\u00f6rflich verankerten Vorsicht zur\u00fcck." },
    { name: "Estland", iso: "EE", typ: 5, unsicher: false, text: "Estland hat als erstes Land der Welt eine digitale \u201ee-Residency\u201c eingef\u00fchrt \u2013 man kann hier ein Unternehmen f\u00fchren, ohne physisch anwesend zu sein. Diese Vorliebe f\u00fcr Distanz-Interaktion statt pers\u00f6nlicher N\u00e4he zieht sich durch den ganzen Alltag. Das S\u00e4ngerfest \u201eLaulupidu\u201c, bei dem sich alle f\u00fcnf Jahre \u00fcber hunderttausend Menschen zum gemeinsamen Singen versammeln, ist einer der seltenen Momente kollektiven emotionalen Ausbruchs in einer sonst zur\u00fcckhaltenden Kultur. Die Sauna, meist allein oder mit engster Familie genutzt, dient der stillen Reinigung, nicht dem geselligen Gespr\u00e4ch. Mit nur 1,3 Millionen Einwohnern auf gro\u00dfer Fl\u00e4che ist physische Distanz zwischen Menschen im Alltag selbstverst\u00e4ndlich. Wortkargheit gilt hier nicht als unfreundlich, sondern als Zeichen von Aufrichtigkeit \u2013 man sagt nur, was wirklich gemeint ist.", subtyp: "se5", subtypText: "Estland zeigt eine klar selbsterhaltend gepr\u00e4gte F\u00fcnf: Die digitale \u201ee-Residency\u201c, die pers\u00f6nliche Anwesenheit \u00fcberfl\u00fcssig macht, und die Sauna, meist allein oder im engsten Familienkreis zur stillen Reinigung genutzt, zeigen eine durchg\u00e4ngige Vorliebe f\u00fcr Distanz statt geselliger N\u00e4he. Bei nur 1,3 Millionen Einwohnern auf gro\u00dfer Fl\u00e4che ist physische Distanz zwischen Menschen selbstverst\u00e4ndlicher Alltag, und Wortkargheit gilt als Zeichen von Aufrichtigkeit, nicht als Unfreundlichkeit. Ein sozialer Unterton zeigt sich im S\u00e4ngerfest \u201eLaulupidu\u201c, bei dem sich alle f\u00fcnf Jahre \u00fcber hunderttausend Menschen zum gemeinsamen Singen versammeln \u2013 einer der seltenen Momente kollektiven emotionalen Ausbruchs in einer sonst zur\u00fcckhaltenden Kultur. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser distanzierten estnischen Grundhaltung kaum hervor." },
    { name: "Lettland", iso: "LV", typ: 5, unsicher: false, text: "Wie in Estland ist das S\u00e4nger- und Tanzfest, alle f\u00fcnf Jahre in Riga, einer der wenigen Momente, in denen sich die sonst zur\u00fcckhaltende lettische \u00d6ffentlichkeit kollektiv und laut zeigt. Die Bernsteinverarbeitung, ein traditionelles Kunsthandwerk an der Ostseek\u00fcste, ist eine stille, meditative Einzelarbeit, die \u00fcber Generationen weitergegeben wird. Die h\u00e4ufigen Fremdherrschaften \u2013 schwedische, russische, deutsche, sowjetische \u2013 haben eine vorsichtige, beobachtende Grundhaltung gegen\u00fcber Machthabern hinterlassen. Die W\u00e4lder, die einen Gro\u00dfteil des Landes bedecken, werden traditionell als R\u00fcckzugsort gesch\u00e4tzt, in dem man ungest\u00f6rt seine Ruhe finden kann. Pers\u00f6nliche Distanz im Alltag, auch zwischen Bekannten, wird hier als selbstverst\u00e4ndlicher Respekt verstanden, nicht als K\u00e4lte.", subtyp: "se5", subtypText: "Auch Lettland zeigt eine \u00fcberwiegend selbsterhaltend gepr\u00e4gte F\u00fcnf: Die Bernsteinverarbeitung als stille, meditative Einzelarbeit und die W\u00e4lder, die als ungest\u00f6rter R\u00fcckzugsort gesch\u00e4tzt werden, pr\u00e4gen den Alltag ebenso wie die h\u00e4ufigen Fremdherrschaften, die eine vorsichtige, beobachtende Grundhaltung hinterlassen haben. Pers\u00f6nliche Distanz, auch zwischen Bekannten, wird hier als selbstverst\u00e4ndlicher Respekt verstanden, nicht als K\u00e4lte. Ein sozialer Unterton zeigt sich, wie in Estland, im alle f\u00fcnf Jahre stattfindenden S\u00e4nger- und Tanzfest in Riga \u2013 einem der wenigen Momente, in denen sich die sonst zur\u00fcckhaltende lettische \u00d6ffentlichkeit kollektiv und laut zeigt. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser beobachtenden, distanzierten Grundhaltung deutlich zur\u00fcck." },
    { name: "Litauen", iso: "LT", typ: 6, unsicher: false, text: "Der \u201eBaltische Weg\u201c von 1989, eine 600 Kilometer lange Menschenkette durch Litauen, Lettland und Estland gegen die sowjetische Besatzung, ist eines der eindr\u00fccklichsten Symbole gemeinsamen Widerstands gegen Bedrohung in der europ\u00e4ischen Geschichte. Basketball ist Nationalsport und beinahe Ersatzreligion \u2013 der Erfolg der Nationalmannschaft gilt als Ausdruck kollektiver St\u00e4rke eines kleinen, oft bedrohten Landes. Die Partisanenbewegung der Waldbr\u00fcder, die bis in die 1950er-Jahre gegen die sowjetische Besatzung k\u00e4mpfte, ist tief im nationalen Ged\u00e4chtnis verankert. Familien- und Dorfgemeinschaften galten historisch als der verl\u00e4sslichste Schutz gegen wiederkehrende Fremdherrschaft \u2013 ein Muster, das bis auf den heutigen Tag in starken famili\u00e4ren Bindungen nachwirkt. Das Kreuzberg-Heiligtum bei \u0160iauliai, mit hunderttausenden aufgestellten Kreuzen trotz sowjetischer Zerst\u00f6rungsversuche, zeigt einen z\u00e4hen, stillen Widerstandswillen.", subtyp: "so6", subtypText: "Litauen zeigt vor allem eine sozial gepr\u00e4gte Sechs: Der \u201eBaltische Weg\u201c von 1989, eine 600 Kilometer lange Menschenkette gegen die sowjetische Besatzung, und der beinahe religi\u00f6se Status des Basketballs als Ausdruck kollektiver St\u00e4rke eines kleinen, oft bedrohten Landes zeigen Sicherheit als gemeinsam erk\u00e4mpfte, geteilte Erfahrung. Ein deutlicher sexueller Einschlag zeigt sich in der Partisanenbewegung der Waldbr\u00fcder, die bis in die 1950er-Jahre bewaffnet gegen die sowjetische Besatzung k\u00e4mpfte \u2013 keine abwartende, sondern eine aktiv-k\u00e4mpferische, counterphobische Antwort auf Bedrohung. Auch das Kreuzberg-Heiligtum, das trotz sowjetischer Zerst\u00f6rungsversuche immer wieder neu best\u00fcckt wurde, zeigt diesen z\u00e4hen, trotzigen Widerstandswillen. Die selbsterhaltende Sechs, die sich eher famili\u00e4r zur\u00fcckz\u00f6ge, tritt gegen\u00fcber dieser kollektiv-k\u00e4mpferischen Haltung zur\u00fcck." },
    { name: "Luxemburg", iso: "LU", typ: 1, unsicher: false, text: "Als einer der bedeutendsten Finanzpl\u00e4tze Europas lebt Luxemburg von Pr\u00e4zision, Diskretion und regulatorischer Verl\u00e4sslichkeit \u2013 Fehler im Bankwesen sind hier existenzbedrohend f\u00fcrs gesamte Land. Die Mehrsprachigkeit \u2013 Luxemburgisch, Franz\u00f6sisch und Deutsch parallel im Alltag und in der Verwaltung \u2013 erfordert ein hohes Ma\u00df an strukturierter Ordnung, damit Kommunikation reibungslos funktioniert. Als Sitz mehrerer wichtiger EU-Institutionen, etwa des Europ\u00e4ischen Gerichtshofs, ist das Land auf permanente b\u00fcrokratische Genauigkeit angewiesen. Trotz seiner geringen Gr\u00f6\u00dfe verf\u00fcgt Luxemburg \u00fcber eines der h\u00f6chsten Pro-Kopf-Einkommen der Welt \u2013 ein Erfolg, der auf stabiler, langfristig verl\u00e4sslicher Wirtschaftspolitik beruht, nicht auf spektakul\u00e4ren Wetten. Ordentliche, saubere \u00f6ffentliche R\u00e4ume und eine hohe Verwaltungseffizienz pr\u00e4gen den Alltag.", subtyp: "so1", subtypText: "Luxemburg zeigt eine deutlich soziale Eins: Als bedeutender Finanzplatz lebt das Land von Pr\u00e4zision, Diskretion und regulatorischer Verl\u00e4sslichkeit, die f\u00fcr alle Akteure gleicherma\u00dfen gelten muss, und als Sitz mehrerer EU-Institutionen ist es auf permanente, kollektiv verbindliche b\u00fcrokratische Genauigkeit angewiesen. Die im Alltag gelebte Dreisprachigkeit erfordert ein hohes Ma\u00df an strukturierter, f\u00fcr alle g\u00fcltiger Ordnung, damit Kommunikation reibungslos funktioniert. Ein selbsterhaltender Unterton zeigt sich im hohen Pro-Kopf-Einkommen, das auf stabiler, langfristig verl\u00e4sslicher \u2013 statt spektakul\u00e4rer \u2013 pers\u00f6nlicher wie wirtschaftlicher Vorsicht beruht. Die sexuelle Eins, die ihre Prinzipien mit missionarischer Intensit\u00e4t nach au\u00dfen tragen w\u00fcrde, tritt hinter dieser institutionellen, kollektiv abgestimmten Ordnungsliebe zur\u00fcck." },
    { name: "Belgien", iso: "BE", typ: 3, unsicher: false, text: "Als Sitz der EU-Kommission und zahlreicher internationaler Institutionen hat sich Br\u00fcssel bewusst als politisches Machtzentrum Europas positioniert \u2013 ein Status, der aktiv gepflegt und vermarktet wird. Belgische Schokolade und belgisches Bier sind international gesch\u00fctzte G\u00fctesiegel und Exportschlager, mit denen das kleine Land global sichtbar wird. Der Comic \u201eTim und Struppi\u201c und die belgische Comic-Tradition insgesamt wurden zu einem international anerkannten kulturellen Aush\u00e4ngeschild gemacht. Die traditionsreichen H\u00e4fen Antwerpen und Zeebrugge machen Belgien zu einem der wichtigsten Handelsdrehkreuze Europas \u2013 wirtschaftliche Betriebsamkeit als nationales Selbstverst\u00e4ndnis, \u00e4hnlich dem Ruhrgebiet oder Nordrhein-Westfalen. Die Spannung zwischen dem wirtschaftsstarken, unternehmerischen Flandern und dem industriell gepr\u00e4gten Wallonien zeigt, wie sehr wirtschaftlicher Status regional wie national gleicherma\u00dfen im Zentrum steht.", subtyp: "so3", subtypText: "Belgien zeigt eine sehr klar soziale Drei: Br\u00fcssel wurde als politisches Machtzentrum Europas bewusst positioniert und aktiv vermarktet, belgische Schokolade und belgisches Bier sind international gesch\u00fctzte, gezielt exportierte G\u00fctesiegel, und der Comic \u201eTim und Struppi\u201c wurde zum international anerkannten kulturellen Aush\u00e4ngeschild gemacht \u2013 Erfolg wird hier konsequent nach au\u00dfen sichtbar gemacht. Die traditionsreichen H\u00e4fen Antwerpen und Zeebrugge verst\u00e4rken das Bild wirtschaftlicher Betriebsamkeit als nationales Selbstverst\u00e4ndnis. Ein selbsterhaltender Unterton zeigt sich in der praktischen, unspektakul\u00e4ren Zuverl\u00e4ssigkeit dieser Handelsdrehkreuze. Sowohl die selbsterhaltende als auch die sexuelle Drei treten gegen\u00fcber diesem konsequent \u00f6ffentlich inszenierten, kollektiven Statusbewusstsein deutlich zur\u00fcck." },
    { name: "Vatikanstadt", iso: "VA", typ: 1, unsicher: false, text: "Als kleinster souver\u00e4ner Staat der Welt beansprucht der Vatikan dennoch moralische Autorit\u00e4t \u00fcber mehr als 1,3 Milliarden Katholiken weltweit \u2013 Ordnung und Lehre als zentrales Machtinstrument. Das Kirchenrecht (Codex Iuris Canonici), \u00fcber Jahrhunderte kodifiziert und verfeinert, regelt bis ins Detail Lehre, Ritus und Hierarchie. Die strenge, unver\u00e4nderliche Liturgie und ein Jahrtausende altes Zeremoniell durchziehen den Alltag bis in kleinste Gesten. Historisch verstand sich die Kirche als H\u00fcterin einer einzig g\u00fcltigen moralischen und doktrin\u00e4ren Ordnung, von der Inquisition bis zu heutigen Lehrschreiben. Gleichzeitig ringt der Vatikan intern sichtbar mit dem Spannungsfeld zwischen unver\u00e4nderlicher Tradition und notwendiger Reform \u2013 ein innerer Richter, der sich selbst nie ganz gen\u00fcgt.", subtyp: "so1", subtypText: "Der Vatikan zeigt eine ausgepr\u00e4gt soziale Eins: Die beanspruchte moralische Autorit\u00e4t \u00fcber mehr als 1,3 Milliarden Katholiken weltweit, das \u00fcber Jahrhunderte kodifizierte Kirchenrecht und die unver\u00e4nderliche, jahrtausendealte Liturgie sind Ordnung und Lehre als zentrales, kollektiv verbindliches Machtinstrument. Historisch verstand sich die Kirche als H\u00fcterin einer einzig g\u00fcltigen, f\u00fcr alle geltenden moralischen Ordnung. Ein selbsterhaltender Unterton zeigt sich im internen Ringen der Institution mit sich selbst, zwischen unver\u00e4nderlicher Tradition und notwendiger Reform \u2013 ein innerer Richter, der sich selbst nie ganz gen\u00fcgt, eine sehr pers\u00f6nliche, nach innen gerichtete Facette der Einer-Leidenschaft. Die sexuelle Eins tritt gegen\u00fcber dieser institutionellen, kollektiv-verbindlichen Ordnungsmacht deutlich zur\u00fcck." },
    { name: "Malta", iso: "MT", typ: 2, unsicher: false, text: "Der Malteserorden, urspr\u00fcnglich als \u201eRitter vom Spital des heiligen Johannes\u201c gegr\u00fcndet, widmete sich Jahrhunderte lang der Pflege kranker und armer Pilger \u2013 F\u00fcrsorge als Staatsgr\u00fcndungsmythos. Die kleine Insel diente historisch als Zufluchtsort und Drehscheibe zwischen den Kulturen des Mittelmeers, offen f\u00fcr Handel, Glaubensfl\u00fcchtlinge und Durchreisende. Die ber\u00fchmte maltesische Gastfreundschaft, oft als \u201eaufdringlich herzlich\u201c beschrieben, zeigt sich bis heute im dichten Netz gegenseitiger Nachbarschaftshilfe in den D\u00f6rfern. Als EU-Mitglied \u00fcbernimmt Malta \u00fcberproportional oft Vermittlerrollen und humanit\u00e4re Aufgaben, etwa bei der Seenotrettung im Mittelmeer. Die tief verwurzelte katholische Fr\u00f6mmigkeit, mit \u00fcber 350 Kirchen auf einer winzigen Insel, verbindet sich mit einem Alltag, in dem Familie und gegenseitige F\u00fcrsorge oberste Priorit\u00e4t haben.", subtyp: "so2", subtypText: "Malta zeigt eine klar soziale Zwei: Der Malteserorden widmete sich Jahrhunderte lang institutionell der Pflege kranker und armer Pilger \u2013 F\u00fcrsorge als kollektiver Staatsgr\u00fcndungsmythos \u2013, und als EU-Mitglied \u00fcbernimmt Malta nach wie vor \u00fcberproportional oft humanit\u00e4re Aufgaben wie die Seenotrettung im Mittelmeer. Die ber\u00fchmte, \u201eaufdringlich herzliche\u201c maltesische Gastfreundschaft zeigt sich im dichten Netz gegenseitiger Nachbarschaftshilfe in den D\u00f6rfern. Ein selbsterhaltender Unterton zeigt sich in der tief verwurzelten katholischen Fr\u00f6mmigkeit und darin, dass Familie und gegenseitige F\u00fcrsorge im privaten Alltag oberste Priorit\u00e4t haben. Die sexuelle Zwei, mit ihrer exklusiven Zuwendung zu einer einzelnen Person, tritt gegen\u00fcber dieser breiten, institutionell wie nachbarschaftlich gelebten F\u00fcrsorgekultur zur\u00fcck." },
    { name: "Belarus", iso: "BY", typ: 6, unsicher: false, text: "Unter Alexander Lukaschenko, seit 1994 im Amt, hat sich Belarus zu einem der am dichtesten \u00fcberwachten Staaten Europas entwickelt \u2013 Kontrolle als Antwort auf die tiefe Angst vor Instabilit\u00e4t. Nach den Massenprotesten von 2020 wurde ein engmaschiges Sicherheitsapparat weiter ausgebaut, mit tausenden Verhaftungen und einer der repressivsten Pressegesetzgebungen des Kontinents. Die historische Erfahrung als \u201eDurchmarschland\u201c zwischen Russland und Westeuropa \u2013 verheerend zerst\u00f6rt im Zweiten Weltkrieg \u2013 pr\u00e4gt ein tiefes kollektives Sicherheitsbed\u00fcrfnis. Die enge, fast vollst\u00e4ndige Anlehnung an Russland wird von der F\u00fchrung explizit als Schutzb\u00fcndnis gegen westlichen Einfluss gerechtfertigt. Misstrauen gegen\u00fcber unabh\u00e4ngigen Institutionen, freier Presse und ziviler Selbstorganisation durchzieht noch heute den gesamten \u00f6ffentlichen Raum.", subtyp: "so6", subtypText: "Belarus zeigt eine ausgepr\u00e4gt soziale Sechs: Der dichte staatliche \u00dcberwachungsapparat, verst\u00e4rkt nach den Massenprotesten 2020, und die enge Anlehnung an Russland als explizit gerechtfertigtes Schutzb\u00fcndnis zeigen Sicherheit als etwas, das von oben, kollektiv und institutionell hergestellt wird. Auch die historische Erfahrung als \u201eDurchmarschland\u201c zwischen Russland und Westeuropa hat ein tief kollektives, geteiltes Sicherheitsbed\u00fcrfnis gepr\u00e4gt. Ein selbsterhaltender Unterton zeigt sich im allt\u00e4glichen, sehr pers\u00f6nlichen Misstrauen gegen\u00fcber unabh\u00e4ngigen Institutionen und freier Presse, das den gesamten \u00f6ffentlichen Raum durchzieht \u2013 Vorsicht auch im kleinen, privaten Kreis. Die sexuelle Sechs, mit ihrer mutigen, offenen Konfrontation der Bedrohung, tritt gegen\u00fcber dieser vor allem institutionell und kollektiv organisierten Kontrolle deutlich zur\u00fcck." },
    { name: "Albanien", iso: "AL", typ: 6, unsicher: false, text: "Unter dem paranoiden Diktator Enver Hoxha lie\u00df Albanien zwischen 1967 und 1986 \u00fcber 700.000 Bunker im gesamten Land errichten \u2013 aus tiefer, nie eingetretener Angst vor einer Invasion durch NATO oder Warschauer Pakt gleicherma\u00dfen. Diese Bunker, oft mitten in Wohngebieten, Feldern und Str\u00e4nden, pr\u00e4gen bis in die Gegenwart sichtbar die albanische Landschaft als steinerne Denkm\u00e4ler kollektiver Wachsamkeit. Die jahrzehntelange, fast vollst\u00e4ndige Selbstisolation des Landes von der Au\u00dfenwelt \u2013 radikaler als selbst in anderen kommunistischen Staaten \u2013 zeigt ein extremes Misstrauen gegen\u00fcber \u00e4u\u00dferen Einfl\u00fcssen. Nach dem Zusammenbruch des Kommunismus 1991 st\u00fcrzte das Land in ein Pyramidensystem-Finanzdesaster (1997), das erneut tiefes Misstrauen gegen\u00fcber Institutionen best\u00e4rkte. Der heutige, energische EU- und NATO-Beitrittswunsch wird explizit als Bed\u00fcrfnis nach endg\u00fcltiger, verl\u00e4sslicher Sicherheit nach Jahrzehnten der Isolation und des Misstrauens gerahmt.", subtyp: "so6", subtypText: "Albanien zeigt eine ausgepr\u00e4gt soziale Sechs: Die \u00fcber 700.000 unter Enver Hoxha errichteten Bunker im ganzen Land und die jahrzehntelange, radikale Selbstisolation von der Au\u00dfenwelt sind kollektive, staatlich verordnete Wachsamkeit pur \u2013 Sicherheit wurde hier zur nationalen Doktrin erhoben. Der heutige energische Wunsch nach EU- und NATO-Beitritt wird explizit als Bed\u00fcrfnis nach verl\u00e4sslicher, institutionell abgesicherter Sicherheit gerahmt. Ein selbsterhaltender Unterton zeigt sich im Pyramidensystem-Finanzdesaster von 1997, das Millionen Albaner ihre pers\u00f6nlichen Ersparnisse kostete und ein sehr konkretes, individuelles Misstrauen gegen\u00fcber Institutionen vertiefte. Die sexuelle Sechs tritt gegen\u00fcber dieser vor allem kollektiv-staatlich gepr\u00e4gten Wachsamkeit deutlich zur\u00fcck." },
    { name: "Nordmazedonien", iso: "MK", typ: 9, unsicher: false, text: "Der jahrzehntelange Namensstreit mit Griechenland \u2013 Nordmazedonien durfte sich bis 2019 offiziell nicht einmal \u201eMazedonien\u201c nennen \u2013 wurde letztlich durch einen m\u00fchsam ausgehandelten Kompromiss gel\u00f6st, nicht durch Konfrontation. Das Land, ethnisch tief gespalten zwischen slawischen Mazedoniern und einer gro\u00dfen albanischen Minderheit, vermied nach dem bewaffneten Konflikt von 2001 eine Eskalation durch das Ohrid-Rahmenabkommen \u2013 Machtteilung statt B\u00fcrgerkrieg. Die bewusste Namens\u00e4nderung zu \u201eNordmazedonien\u201c selbst war ein schmerzhafter, aber pragmatischer Kompromiss, um EU- und NATO-Beitritt endlich zu erm\u00f6glichen. In der Hauptstadt Skopje leben verschiedene ethnische und religi\u00f6se Gruppen in dichter Nachbarschaft, oft mit stillschweigend eingespielten Regeln des Nebeneinanders statt offener Konfrontation. Das kleine Land navigiert bewusst zwischen \u00f6stlichen und westlichen Einflusssph\u00e4ren, ohne sich eindeutig zu positionieren \u2013 Ausgleich als au\u00dfenpolitisches Grundprinzip.", subtyp: "so9", subtypText: "Nordmazedonien zeigt eine klar sozial gepr\u00e4gte Neun: Der jahrzehntelange Namensstreit mit Griechenland wurde durch einen m\u00fchsam ausgehandelten Kompromiss gel\u00f6st, nicht durch Konfrontation, und das Ohrid-Rahmenabkommen verhinderte nach 2001 eine Eskalation durch Machtteilung statt B\u00fcrgerkrieg \u2013 Harmonie wird hier bewusst institutionell hergestellt. Auch die au\u00dfenpolitische Balance zwischen \u00f6stlichen und westlichen Einflusssph\u00e4ren zeigt Ausgleich als bewusstes, kollektives Grundprinzip. Ein selbsterhaltender Unterton zeigt sich im Alltag der Hauptstadt Skopje, wo verschiedene ethnische und religi\u00f6se Gruppen nach stillschweigend eingespielten, pers\u00f6nlichen Regeln des Nebeneinanders zusammenleben. Die sexuelle Neun tritt gegen\u00fcber dieser vor allem verhandelten, institutionellen Harmoniesuche deutlich zur\u00fcck." },
    { name: "Montenegro", iso: "ME", typ: 9, unsicher: false, text: "Das kleinste Land des ehemaligen Jugoslawien l\u00f6ste sich 2006 durch ein friedliches, \u00fcberw\u00e4ltigend knappes Referendum von Serbien \u2013 Trennung durch demokratischen Konsens statt durch Waffengewalt. Montenegro h\u00e4lt traditionell eine bemerkenswert entspannte, oft fast beil\u00e4ufige Haltung gegen\u00fcber politischen Spannungen, die andere Balkanstaaten weit st\u00e4rker ersch\u00fcttert haben. Die orthodoxe Kirche ist tief im Alltag verwurzelt, ohne den konfliktreichen Ton religi\u00f6ser Auseinandersetzungen anderer Nachbarl\u00e4nder zu \u00fcbernehmen. Als kleinstes NATO-Mitglied (seit 2017) navigiert das Land bewusst zwischen russischen kulturellen Bindungen und westlicher Integration, ohne sich klar auf eine Seite zu schlagen. Die entspannte mediterrane K\u00fcstenkultur an der Bucht von Kotor steht im auff\u00e4lligen Kontrast zur turbulenten Balkan-Geschichte ringsum \u2013 ein Land, das dem Sturm lieber ausweicht als ihn sucht.", subtyp: "se9", subtypText: "Montenegro zeigt eine eher selbsterhaltend gef\u00e4rbte Neun: Die traditionell entspannte, fast beil\u00e4ufige Haltung gegen\u00fcber politischen Spannungen und die entspannte mediterrane K\u00fcstenkultur an der Bucht von Kotor zeigen eine pers\u00f6nliche, alltagsnahe Gelassenheit \u2013 ein Land, das dem Sturm lieber ausweicht als ihn sucht. Ein sozialer Unterton zeigt sich in der friedlichen Losl\u00f6sung von Serbien 2006 durch ein demokratisches Referendum statt durch Waffengewalt, sowie in der bewussten au\u00dfenpolitischen Balance zwischen russischen kulturellen Bindungen und westlicher NATO-Integration. Die sexuelle Neun tritt gegen\u00fcber dieser durchg\u00e4ngig entspannten, ausweichenden Grundhaltung kaum hervor." },
    { name: "Bosnien und Herzegowina", iso: "BA", typ: 6, unsicher: false, text: "Der Bosnienkrieg (1992\u20131995), mit dem V\u00f6lkermord von Srebrenica als tiefstem Trauma, hinterlie\u00df ein Land, das auch heute noch in drei ethnisch-religi\u00f6se Bl\u00f6cke (Bosniaken, Serben, Kroaten) gespalten ist. Das Friedensabkommen von Dayton schuf eine hochkomplexe, absichtlich misstrauische Machtteilungsstruktur mit rotierender Pr\u00e4sidentschaft, um keine Gruppe je die alleinige Kontrolle erlangen zu lassen. Checkpoints, geteilte Schulsysteme und getrennte Wohngebiete zeigen ein bis auf den heutigen Tag tief verankertes Bed\u00fcrfnis nach Absicherung gegen erneute Eskalation. Die internationale Milit\u00e4rpr\u00e4senz (zun\u00e4chst NATO, dann EU-Truppen) blieb Jahrzehnte nach Kriegsende bestehen \u2013 Sicherheit von au\u00dfen, weil internes Vertrauen fehlt. Trotz formalen Friedens bleibt eine tiefe kollektive Wachsamkeit gegen\u00fcber der jeweils anderen Volksgruppe bestehen, die politische Entscheidungen bis heute pr\u00e4gt.", subtyp: "so6", subtypText: "Bosnien und Herzegowina zeigt eine sehr ausgepr\u00e4gt soziale Sechs: Das Friedensabkommen von Dayton schuf eine hochkomplexe, absichtlich misstrauische Machtteilungsstruktur mit rotierender Pr\u00e4sidentschaft, damit keine Gruppe je die alleinige Kontrolle erlangen kann \u2013 institutionalisiertes Misstrauen als Staatsprinzip. Checkpoints, geteilte Schulsysteme und die jahrzehntelang fortbestehende internationale Milit\u00e4rpr\u00e4senz zeigen Sicherheit als etwas, das kollektiv und von au\u00dfen abgesichert werden muss. Ein selbsterhaltender Unterton zeigt sich in den getrennten Wohngebieten, in denen Familien im allt\u00e4glichen, pers\u00f6nlichen Umfeld Vorsicht gegen\u00fcber der jeweils anderen Volksgruppe \u00fcben. Die sexuelle Sechs tritt gegen\u00fcber dieser tief institutionalisierten, kollektiven Wachsamkeit deutlich zur\u00fcck." },
    { name: "Andorra", iso: "AD", typ: 6, unsicher: false, text: "Als eines der letzten europ\u00e4ischen Kleinstaaten mit einer bis 1993 fortbestehenden Doppelherrschaft (Ko-F\u00fcrstentum unter dem franz\u00f6sischen Staatsoberhaupt und dem Bischof von Urgell) hat Andorra seine Souver\u00e4nit\u00e4t stets durch geschickte Absicherung zwischen zwei gro\u00dfen Nachbarn statt durch Konfrontation bewahrt. Das Land unterh\u00e4lt traditionell keine eigene Armee und verl\u00e4sst sich auf vertraglich abgesicherte Schutzgarantien Frankreichs und Spaniens. Andorras Wohlstand als Bankenstandort und Steueroase beruht auf jahrzehntelang sorgf\u00e4ltig gepflegter Diskretion und Regelkonformit\u00e4t gegen\u00fcber internationalen Aufsichtsbeh\u00f6rden. Die abgeschottete Lage in den Pyren\u00e4en wurde historisch bewusst zur Absicherung vor gr\u00f6\u00dferen Konflikten genutzt. Auch die relativ sp\u00e4te, vorsichtige demokratische \u00d6ffnung (erste Verfassung erst 1993) spiegelt eine grunds\u00e4tzlich abw\u00e4gende, sicherheitsbedachte Staatskultur wider.", subtyp: "so6", subtypText: "Andorra zeigt eine deutlich soziale Sechs: Das Land unterh\u00e4lt keine eigene Armee und verl\u00e4sst sich stattdessen auf vertraglich abgesicherte Schutzgarantien Frankreichs und Spaniens \u2013 Sicherheit wird bewusst institutionell und durch B\u00fcndnis hergestellt, nicht durch eigene St\u00e4rke. Andorras Wohlstand als Bankenstandort beruht auf jahrzehntelang gepflegter Regelkonformit\u00e4t gegen\u00fcber internationalen Aufsichtsbeh\u00f6rden, und auch die vorsichtige, erst 1993 vollzogene demokratische \u00d6ffnung zeigt eine grunds\u00e4tzlich abw\u00e4gende Staatskultur. Ein selbsterhaltender Unterton zeigt sich in der bewusst genutzten, abgeschotteten Lage in den Pyren\u00e4en, die historisch als geografischer Schutz vor gr\u00f6\u00dferen Konflikten diente. Die sexuelle Sechs tritt gegen\u00fcber dieser vertrags- und regelbasierten Sicherheitskultur deutlich zur\u00fcck." },
    { name: "San Marino", iso: "SM", typ: 6, unsicher: false, text: "Als \u00e4lteste noch bestehende Republik der Welt (gegr\u00fcndet 301 n. Chr.) verdankt San Marino sein \u00dcberleben \u00fcber 1700 Jahre einer Strategie best\u00e4ndiger Neutralit\u00e4t und vorsichtiger B\u00fcndnispolitik statt milit\u00e4rischer St\u00e4rke. Die Lage auf einem schwer zug\u00e4nglichen Berg (Monte Titano) diente von Beginn an dem Schutz vor gr\u00f6\u00dferen M\u00e4chten. Das Land bewahrte seine Unabh\u00e4ngigkeit sogar w\u00e4hrend der napoleonischen und der Einigungskriege Italiens durch geschickte diplomatische Zur\u00fcckhaltung. Die traditionell alle sechs Monate wechselnde Doppelspitze (Capitani Reggenti) verhindert bewusst die Konzentration von Macht in einer einzelnen Person \u2013 ein strukturelles Misstrauen gegen\u00fcber Alleinherrschaft. San Marinos Wirtschaft, stark auf Tourismus und Finanzdienstleistungen ausgerichtet, wird traditionell vorsichtig und auf Stabilit\u00e4t statt Risiko ausgerichtet gemanagt.", subtyp: "so6", subtypText: "San Marino zeigt eine ausgepr\u00e4gt soziale Sechs: Das \u00dcberleben \u00fcber 1700 Jahre verdankt die \u00e4lteste Republik der Welt einer Strategie best\u00e4ndiger Neutralit\u00e4t und vorsichtiger B\u00fcndnispolitik, nicht milit\u00e4rischer St\u00e4rke \u2013 und die alle sechs Monate wechselnde Doppelspitze verhindert bewusst, dass Macht sich je in einer einzelnen Person konzentriert, ein strukturelles, institutionalisiertes Misstrauen gegen\u00fcber Alleinherrschaft. Ein selbsterhaltender Unterton zeigt sich im vorsichtigen, auf Stabilit\u00e4t statt Risiko ausgerichteten Management der Wirtschaft. Die sexuelle Sechs, mit ihrer mutigen Konfrontation, tritt gegen\u00fcber dieser \u00fcber Jahrhunderte bew\u00e4hrten, institutionell verankerten Vorsicht deutlich zur\u00fcck." },
    { name: "Monaco", iso: "MC", typ: 3, unsicher: false, text: "Das winzige F\u00fcrstentum Monaco hat sich bewusst als Inbegriff von Glamour, Reichtum und exklusivem Erfolg positioniert \u2013 von der Formel-1-Rennstrecke \u00fcber das Casino von Monte Carlo bis zum j\u00e4hrlichen roten Teppich der Filmfestspiele in der N\u00e4he. Mit einem der h\u00f6chsten Pro-Kopf-Einkommen und der h\u00f6chsten Million\u00e4rsdichte der Welt wird sichtbarer materieller Erfolg als zentrales nationales Image gepflegt. Die F\u00fcrstenfamilie Grimaldi inszeniert sich seit Jahrzehnten gezielt medienwirksam, von F\u00fcrstin Gracia Patricia (Grace Kelly) bis zu prunkvollen Hochzeiten \u2013 Erfolg und Status als \u00f6ffentlich sichtbares Familienunternehmen. Die Steuerfreiheit f\u00fcr Einkommen zieht gezielt eine internationale Elite an, die Monaco als B\u00fchne wirtschaftlichen Erfolgs nutzt. Der monegassische Hafen, ges\u00e4umt von Superyachten, dient explizit der Zurschaustellung von Wohlstand und Status.", subtyp: "so3", subtypText: "Monaco zeigt eine sehr klar soziale Drei: Das F\u00fcrstentum hat sich bewusst als Inbegriff von Glamour und exklusivem Erfolg positioniert \u2013 von der Formel 1 \u00fcber das Casino bis zu den nahen Filmfestspielen \u2013 und sichtbarer materieller Erfolg wird gezielt als nationales Image gepflegt. Die F\u00fcrstenfamilie Grimaldi inszeniert sich seit Jahrzehnten medienwirksam als \u00f6ffentlich sichtbares Familienunternehmen aus Erfolg und Status. Ein sexueller Einschlag zeigt sich in der bewussten Zurschaustellung von Anziehungskraft und Glamour, etwa im Hafen voller Superyachten oder in der ikonischen Liebesgeschichte von F\u00fcrstin Gracia Patricia (Grace Kelly) \u2013 Verf\u00fchrung als Teil des \u00f6ffentlichen Images. Die selbsterhaltende Drei tritt gegen\u00fcber diesem durchg\u00e4ngig nach au\u00dfen gerichteten Erfolgs- und Statusbewusstsein deutlich zur\u00fcck." },
    { name: "Liechtenstein", iso: "LI", typ: 1, unsicher: false, text: "Das F\u00fcrstentum Liechtenstein gilt als eines der am strengsten regulierten und zugleich wohlhabendsten L\u00e4nder der Welt \u2013 wirtschaftlicher Erfolg wird explizit durch penible Regeltreue statt Risikobereitschaft erreicht. Als Sitz zahlreicher Trusts und Stiftungen hat das Land seinen Ruf strikter, korrekter Verwaltung gezielt gepflegt, nach fr\u00fcherer internationaler Kritik an mangelnder Transparenz seit den 2000er-Jahren durch umfassende Regelreformen konsequent verbessert. Die Industrie, allen voran Pr\u00e4zisionstechnik und Zahntechnik, spiegelt eine kulturelle Neigung zu Genauigkeit und makelloser Ausf\u00fchrung wider. Das Land unterh\u00e4lt seit 1868 keine eigene Armee mehr und regelt zwischenstaatliche Beziehungen konsequent \u00fcber Vertr\u00e4ge und Ordnungssysteme statt \u00fcber Konfrontation. Die geordnete, fast l\u00fcckenlose soziale Absicherung und niedrige Kriminalit\u00e4tsrate werden von den Liechtensteinern selbst als Ausdruck ihrer disziplinierten Staatskultur verstanden.", subtyp: "so1", subtypText: "Liechtenstein zeigt eine deutlich soziale Eins: Als eines der am strengsten regulierten L\u00e4nder der Welt wird wirtschaftlicher Erfolg hier explizit durch penible, f\u00fcr alle geltende Regeltreue erreicht, nicht durch Risikobereitschaft, und das Land regelt zwischenstaatliche Beziehungen seit 1868 konsequent \u00fcber Vertr\u00e4ge statt Konfrontation. Auch die geordnete, fast l\u00fcckenlose soziale Absicherung wird von den Liechtensteinern selbst als Ausdruck einer disziplinierten, kollektiven Staatskultur verstanden. Ein selbsterhaltender Unterton zeigt sich in der Pr\u00e4zisionstechnik-Industrie, die eine sehr pers\u00f6nliche, handwerkliche Neigung zu Genauigkeit und makelloser Ausf\u00fchrung widerspiegelt. Die sexuelle Eins tritt gegen\u00fcber dieser institutionellen, kollektiv abgestimmten Ordnungsliebe deutlich zur\u00fcck." },
    { name: "Moldau", iso: "MD", typ: 4, unsicher: false, text: "Moldau, eingeklemmt zwischen Rum\u00e4nien und der Ukraine, ringt seit der Unabh\u00e4ngigkeit 1991 um eine eigenst\u00e4ndige nationale Identit\u00e4t, die sich weder vollst\u00e4ndig mit Rum\u00e4nien verschmelzen noch von der sowjetischen Vergangenheit l\u00f6sen will. Die abtr\u00fcnnige Region Transnistrien, seit einem Krieg 1992 de facto unabh\u00e4ngig und von russischen Truppen gest\u00fctzt, verst\u00e4rkt das Gef\u00fchl eines Landes, das um seine eigene, ungekl\u00e4rte Identit\u00e4t ringt. Als eines der \u00e4rmsten L\u00e4nder Europas tr\u00e4gt Moldau ein tiefes Bewusstsein wirtschaftlicher und kultureller Randst\u00e4ndigkeit, verst\u00e4rkt durch massive Abwanderung junger Menschen. Die Sprachfrage \u2013 Rum\u00e4nisch oder \u201eMoldauisch\u201c? \u2013 wurde jahrzehntelang politisch und identit\u00e4tsstiftend aufgeladen diskutiert, ohne endg\u00fcltige Einigung. Die Weinbautradition und die einzigartige unterirdische Weinstadt Cricova werden bewusst als unverwechselbares kulturelles Alleinstellungsmerkmal gegen\u00fcber den gr\u00f6\u00dferen Nachbarn gepflegt.", subtyp: "se4", subtypText: "Moldau zeigt eine eher selbsterhaltend gef\u00e4rbte Vier: Als eines der \u00e4rmsten L\u00e4nder Europas tr\u00e4gt das Land ein tiefes, sehr pers\u00f6nliches Bewusstsein wirtschaftlicher und kultureller Randst\u00e4ndigkeit, verst\u00e4rkt durch massive Abwanderung junger Menschen \u2013 ein stilles Ringen ums eigene \u00dcberleben und die eigene Identit\u00e4t, eingeklemmt zwischen gr\u00f6\u00dferen Nachbarn. Ein sozialer Unterton zeigt sich in der bewusst gepflegten Weinbautradition und der einzigartigen unterirdischen Weinstadt Cricova, die gezielt als unverwechselbares kulturelles Alleinstellungsmerkmal gegen\u00fcber Rum\u00e4nien und der Ukraine positioniert werden, sowie in der jahrzehntelang politisch aufgeladenen Sprachfrage. Die sexuelle Vier tritt gegen\u00fcber diesem stillen, eher nach innen gerichteten Ringen um Identit\u00e4t zur\u00fcck." },
    { name: "Kosovo", iso: "XK", typ: 4, unsicher: false, text: "Kosovo, 2008 einseitig von Serbien unabh\u00e4ngig erkl\u00e4rt, aber nach wie vor nur von rund der H\u00e4lfte der UN-Mitgliedstaaten anerkannt, tr\u00e4gt eine tiefe nationale Identit\u00e4t, die ma\u00dfgeblich aus dem Erlebnis internationaler Nichtanerkennung und historischer Verfolgung geformt ist. Der Kosovokrieg (1998\u20131999), mit ethnischen S\u00e4uberungen an der albanischst\u00e4mmigen Bev\u00f6lkerungsmehrheit und der anschlie\u00dfenden NATO-Intervention, bleibt das zentrale, generationenpr\u00e4gende Trauma der nationalen Erz\u00e4hlung. Die anhaltende Nichtanerkennung durch Serbien, Russland, China und mehrere EU-Staaten verst\u00e4rkt ein kollektives Gef\u00fchl international unvollst\u00e4ndiger, st\u00e4ndig zu verteidigender Eigenst\u00e4ndigkeit. Der jahrhundertealte Mythos der Schlacht auf dem Amselfeld (1389), von Serben wie Albanern jeweils unterschiedlich gedeutet, zeigt exemplarisch den identit\u00e4tsstiftenden Streit um dasselbe Territorium und dieselbe Geschichte. Die \u00fcberwiegend junge, albanischsprachige Bev\u00f6lkerung pflegt ein ausgepr\u00e4gtes Bewusstsein kultureller und politischer Eigenst\u00e4ndigkeit gegen\u00fcber sowohl Serbien als auch dem gr\u00f6\u00dferen albanischen Nachbarland.", subtyp: "so4", subtypText: "Kosovo zeigt eine ausgepr\u00e4gt sozial gepr\u00e4gte Vier: Die nationale Identit\u00e4t ist ma\u00dfgeblich aus dem Erlebnis internationaler Nichtanerkennung geformt \u2013 noch heute erkennen nur rund die H\u00e4lfte der UN-Staaten das Land an \u2013, und der jahrhundertealte Amselfeld-Mythos wird von Serben wie Albanern jeweils unterschiedlich gedeutet: ein \u00f6ffentlich ausgetragener Streit um Identit\u00e4t und Territorium. Der Kosovokrieg bleibt das zentrale, generationenpr\u00e4gende kollektive Trauma der nationalen Erz\u00e4hlung. Ein sexueller Einschlag zeigt sich in der \u00fcberwiegend jungen, albanischsprachigen Bev\u00f6lkerung, die ihre kulturelle und politische Eigenst\u00e4ndigkeit gegen\u00fcber Serbien wie dem albanischen Nachbarland mit sp\u00fcrbarer, leidenschaftlicher Energie verteidigt. Die selbsterhaltende Vier tritt gegen\u00fcber dieser \u00f6ffentlich behaupteten, kollektiven Identit\u00e4tssuche zur\u00fcck." },
    { name: "Gr\u00f6nland", iso: "GL", typ: 5, unsicher: false, text: "Gr\u00f6nland, mit rund 56.000 Einwohnern auf der weltgr\u00f6\u00dften Insel, lebt in einer Weite und K\u00e4lte, die R\u00fcckzug und stille Selbstgen\u00fcgsamkeit fast zur Notwendigkeit macht statt zur Wahl. Die d\u00e4nische Krone gew\u00e4hrte 2009 weitreichende Autonomie, doch die eigentliche Selbstst\u00e4ndigkeit wird von den Gr\u00f6nl\u00e4ndern eher schrittweise, beobachtend und wissenschaftlich fundiert vorbereitet als \u00fcberst\u00fcrzt erkl\u00e4rt \u2013 Klimaforschung und Rohstoffgutachten pr\u00e4gen den politischen Diskurs st\u00e4rker als gro\u00dfe Reden. Die traditionelle Inuit-Kultur, mit ihrem enormen praktischen Wissen \u00fcber Eis, Wetter und Jagd, wurde \u00fcber Generationen m\u00fcndlich weitergegeben und gilt als eigenst\u00e4ndige Wissenstradition neben westlicher Wissenschaft. Internationale Klimaforscher betrachten Gr\u00f6nland als Schl\u00fcssel-Freilandlabor f\u00fcrs Verst\u00e4ndnis des globalen Klimawandels, was dem Land eine eigent\u00fcmliche Rolle als beobachtetes und selbst beobachtendes Wissenszentrum verleiht. Die extreme Dunkelheit der Wintermonate beg\u00fcnstigt eine introvertierte, in sich gekehrte Kultur des Lesens, Gr\u00fcbelns und stillen Nachdenkens.", subtyp: "se5", subtypText: "Gr\u00f6nland zeigt eine klar selbsterhaltend gepr\u00e4gte F\u00fcnf: Die enorme Weite und K\u00e4lte machen R\u00fcckzug und stille Selbstgen\u00fcgsamkeit fast zur Notwendigkeit statt zur Wahl, und die extreme Dunkelheit der Wintermonate beg\u00fcnstigt eine introvertierte, in sich gekehrte Kultur des Lesens und stillen Nachdenkens. Ein sozialer Unterton zeigt sich in der schrittweisen, wissenschaftlich fundierten Vorbereitung der Selbstst\u00e4ndigkeit \u2013 Klimaforschung und Rohstoffgutachten pr\u00e4gen den politischen Diskurs st\u00e4rker als gro\u00dfe Reden \u2013 sowie in der traditionellen Inuit-Wissenstradition, die \u00fcber Generationen m\u00fcndlich als gemeinsames Erbe weitergegeben wurde. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser durchg\u00e4ngig zur\u00fcckhaltenden, beobachtenden gr\u00f6nl\u00e4ndischen Grundhaltung kaum hervor." },
    { name: "F\u00e4r\u00f6er-Inseln", iso: "FO", typ: 1, unsicher: false, text: "Die F\u00e4r\u00f6er-Inseln, autonomer Teil des K\u00f6nigreichs D\u00e4nemark mit eigenem Parlament (L\u00f8gting) seit 1948, regeln fast alle inneren Angelegenheiten \u2013 bis auf Au\u00dfen- und Verteidigungspolitik \u2013 nach einem pr\u00e4zise austarierten, klar strukturierten Selbstverwaltungsmodell. Der traditionelle Walfang (\u201eGrindadr\u00e1p\u201c) unterliegt strengen, jahrhundertealten Regeln \u00fcber Ablauf, Beteiligung und gerechte Verteilung des Fleisches an die gesamte Gemeinde \u2013 Ordnung und Fairness stehen im Zentrum dieser umstrittenen Praxis. Die Schafzucht, so zentral, dass der Landesname w\u00f6rtlich \u201eSchafinseln\u201c bedeutet, folgt bis in die Gegenwart exakt geregelten, \u00fcber Generationen festgelegten Weiderechten zwischen den Familien. Die extrem pr\u00e4zise Fahrplanorganisation von F\u00e4hren und Hubschraubern zwischen den 18 Inseln, oft die einzige verl\u00e4ssliche Verbindung bei rauem Nordatlantikwetter, erfordert eine hochgradig disziplinierte, fehlerfreie Logistik. Die kleine, homogene Bev\u00f6lkerung von rund 54.000 Menschen pflegt ein starkes Bewusstsein f\u00fcr Regeltreue und gegenseitige Verl\u00e4sslichkeit als Grundlage des Zusammenlebens auf engem Raum.", subtyp: "so1", subtypText: "Die F\u00e4r\u00f6er-Inseln zeigen eine sehr ausgepr\u00e4gt soziale Eins: Das pr\u00e4zise austarierte Selbstverwaltungsmodell, die streng geregelte, gerechte Verteilung des Walfangs an die gesamte Gemeinde und die hochgradig disziplinierte F\u00e4hrlogistik zwischen den 18 Inseln zeigen Ordnung und Fairness als kollektiv verbindliches Prinzip. Die kleine, homogene Bev\u00f6lkerung pflegt ein starkes, geteiltes Bewusstsein f\u00fcr Regeltreue und gegenseitige Verl\u00e4sslichkeit als Grundlage des Zusammenlebens. Ein selbsterhaltender Unterton zeigt sich in den exakt geregelten, \u00fcber Generationen zwischen einzelnen Familien festgelegten Weiderechten der Schafzucht \u2013 pers\u00f6nliche, famili\u00e4r \u00fcberlieferte Ordnung. Die sexuelle Eins tritt gegen\u00fcber dieser durchg\u00e4ngig kollektiv-institutionellen Ordnungsliebe deutlich zur\u00fcck." },
  ]},
    { region: "Nordamerika", laender: [
    { name: "USA", iso: "US", typ: 3, unsicher: false, text: "Der \u201eAmerican Dream\u201c ist keine leere Floskel, sondern ein gelebtes Versprechen: Vom Tellerw\u00e4scher zum Million\u00e4r \u2013 Selfmade-Erfolgsgeschichten wie die von Oprah Winfrey oder Steve Jobs werden zu nationalen Legenden erhoben. Bewerbungsgespr\u00e4che, Elevator Pitches, LinkedIn-Profile \u2013 die F\u00e4higkeit, sich selbst und die eigenen Erfolge \u00fcberzeugend zu pr\u00e4sentieren, wird von klein auf trainiert und belohnt. Universit\u00e4tsprestige (Ivy League), H\u00e4usergr\u00f6\u00dfe, Autos und Berufsbezeichnungen fungieren als sichtbare Statussymbole, an denen Erfolg unmittelbar abgelesen wird. Motivationsliteratur und Coaching sind eine milliardenschwere Industrie \u2013 die \u00dcberzeugung, dass jeder es mit genug Einsatz \u201enach oben\u201c schaffen kann, ist tief verankert. Sogar Scheitern wird kulturell reinterpretiert: Der \u201eFail Fast\u201c-Gedanke des Silicon Valley verlangt nicht R\u00fcckzug nach einem R\u00fcckschlag, sondern sofortigen neuen sichtbaren Anlauf.", subtyp: "so3", subtypText: "Die USA zeigen eine sehr ausgepr\u00e4gt soziale Drei: Der \u201eAmerican Dream\u201c als gelebtes, kollektiv geteiltes Versprechen, Statussymbole wie Universit\u00e4tsprestige, Hausgr\u00f6\u00dfe und Berufsbezeichnung sowie die milliardenschwere Motivations- und Coaching-Industrie zeigen Erfolg als \u00f6ffentlich sichtbares, gesellschaftlich verankertes Ideal. Auch der \u201eFail Fast\u201c-Gedanke des Silicon Valley \u2013 Scheitern nicht als R\u00fcckzug, sondern als sofortigen neuen, sichtbaren Anlauf \u2013 ist ein kollektiv geteiltes Erfolgsnarrativ. Ein sexueller Einschlag zeigt sich in der von klein auf trainierten F\u00e4higkeit zur pers\u00f6nlichen Selbstpr\u00e4sentation \u2013 Elevator Pitch, Bewerbungsgespr\u00e4ch, LinkedIn-Profil \u2013, bei der der einzelne Mensch selbst zur Marke wird. Die selbsterhaltende Drei, die sich eher in stiller, funktionaler Arbeit zeigen w\u00fcrde, tritt gegen\u00fcber diesem durchg\u00e4ngig \u00f6ffentlich zelebrierten Erfolgsstreben zur\u00fcck." },
    { name: "Kanada", iso: "CA", typ: 5, unsicher: false, text: "\u201eSorry\u201c zu sagen, selbst wenn man selbst angerempelt wurde, gilt als typisch kanadisch \u2013 ein reflexhaftes Zur\u00fccknehmen der eigenen Position, um Distanz zu wahren, statt Konflikt zu riskieren. Auf einer der am d\u00fcnnsten besiedelten Fl\u00e4chen der Welt \u2013 \u00fcber neun Millionen Quadratkilometer bei rund 40 Millionen Menschen \u2013 ist physischer Abstand zwischen Menschen allt\u00e4gliche Realit\u00e4t, nicht Ausnahme. Kanada positioniert sich international bewusst als Vermittler und UN-Friedensmission-Nation, beobachtend und moderierend statt selbst in Konflikte verwickelt. Die eigene Identit\u00e4t wird oft eher \u00fcber Abgrenzung vom lauten s\u00fcdlichen Nachbarn USA definiert als \u00fcber eigene laute Selbstbehauptung \u2013 Zur\u00fcckhaltung als bewusstes nationales Markenzeichen. Die Weite der kanadischen Wildnis, von den Rocky Mountains bis zur Arktis, wird kulturell als Ort der stillen Kontemplation verkl\u00e4rt, nicht der Eroberung.", subtyp: "se5", subtypText: "Kanada zeigt eine klar selbsterhaltend gepr\u00e4gte F\u00fcnf: Das reflexhafte \u201eSorry\u201c, selbst wenn man selbst angerempelt wurde, und die kanadische Wildnis, die kulturell als Ort stiller Kontemplation statt der Eroberung verkl\u00e4rt wird, zeigen ein durchg\u00e4ngiges Bed\u00fcrfnis, pers\u00f6nliche Distanz zu wahren statt Konflikt zu riskieren. Bei einer der am d\u00fcnnsten besiedelten Fl\u00e4chen der Welt ist physischer Abstand zwischen Menschen allt\u00e4gliche, individuell gelebte Realit\u00e4t. Ein sozialer Unterton zeigt sich in der bewussten internationalen Positionierung als Vermittler- und UN-Friedensmission-Nation sowie in der nationalen Identit\u00e4t, die sich eher \u00fcber Abgrenzung vom lauten s\u00fcdlichen Nachbarn als \u00fcber eigene laute Selbstbehauptung definiert \u2013 Zur\u00fcckhaltung als kollektives Markenzeichen. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser durchg\u00e4ngig zur\u00fcckhaltenden kanadischen Grundhaltung kaum hervor." },
    { name: "Mexiko", iso: "MX", typ: 9, unsicher: false, text: "\u201eNo pasa nada\u201c \u2013 \u201eist schon okay\u201c \u2013 ist eine der meistgebrauchten Redewendungen im mexikanischen Alltag, eine Formel, mit der Spannungen und Konflikte routinem\u00e4\u00dfig heruntergespielt werden. Der D\u00eda de los Muertos, der Tag der Toten, verwandelt eines der gr\u00f6\u00dften Tabus \u2013 den Tod \u2013 in ein buntes, vers\u00f6hnliches Familienfest statt in Trauer und Angst. Trotz Drogenkrieg, Armut und politischer Korruption bleibt der Alltag vieler Mexikaner erstaunlich unaufgeregt \u2013 Resilienz zeigt sich hier als Gelassenheit, nicht als Kampfgeist. Die Siesta-Kultur und ein entspannter Umgang mit Zeitpl\u00e4nen (\u201ela hora mexicana\u201c) dr\u00fccken eine Priorit\u00e4t f\u00fcr Gelassenheit \u00fcber Effizienz aus. Familienfeste, oft mit Dutzenden Verwandten \u00fcber viele Stunden, dienen weniger der aktiven F\u00fcrsorge f\u00fcreinander als dem gemeinsamen Verweilen und Dabeisein \u2013 Verbindung als Zustand, nicht als Handlung.", subtyp: "so9", subtypText: "Mexiko zeigt eine klar sozial gepr\u00e4gte Neun: \u201eNo pasa nada\u201c als eine der meistgebrauchten Redewendungen, mit der Spannungen routinem\u00e4\u00dfig heruntergespielt werden, und der D\u00eda de los Muertos, der den Tod in ein buntes, vers\u00f6hnliches Familienfest verwandelt statt in Trauer, zeigen Harmonie als aktiv gepflegtes, gemeinschaftliches Prinzip. Auch die stundenlangen Familienfeste mit Dutzenden Verwandten, bei denen gemeinsames Verweilen wichtiger ist als aktives Umeinander-K\u00fcmmern, zeigen Verbindung als geteilten Zustand, nicht als Handlung. Ein selbsterhaltender Unterton zeigt sich in der Siesta-Kultur und der entspannten \u201ehora mexicana\u201c \u2013 pers\u00f6nliche Gelassenheit \u00fcber Effizienz gestellt. Die sexuelle Neun tritt gegen\u00fcber dieser durchg\u00e4ngig gemeinschaftlich gelebten Gelassenheit deutlich zur\u00fcck." },
    { name: "Bermuda", iso: "BM", typ: 3, unsicher: false, text: "Bermuda, britisches \u00dcberseegebiet im Nordatlantik, hat sich trotz winziger Fl\u00e4che und ohne nennenswerte Rohstoffe zu einem der wohlhabendsten Territorien der Welt entwickelt \u2013 vor allem durch aggressive Positionierung als globales R\u00fcckversicherungs- und Offshore-Finanzzentrum. Die Insel wirbt gezielt mit niedrigen Steuers\u00e4tzen und gesch\u00e4ftsfreundlicher Regulierung, um internationale Konzerne und Versicherer anzuziehen, und hat damit ein Pro-Kopf-Einkommen erreicht, das viele souver\u00e4ne Industrienationen \u00fcbertrifft. Die pastellfarbenen, streng nach Bauvorschrift errichteten H\u00e4user und die makellos gepflegten Golfpl\u00e4tze werden bewusst als Aush\u00e4ngeschild gepflegten Wohlstands pr\u00e4sentiert, nicht nur als Tourismuskulisse. Das j\u00e4hrliche Bermuda Sailing Week und die Ausrichtung des America's Cup 2017 wurden gezielt genutzt, um die Insel international als exklusiven, erfolgreichen Standort zu positionieren. Trotz seines Status als nicht-souver\u00e4nes Territorium tritt Bermuda in Wirtschaftsfragen selbstbewusst und eigenst\u00e4ndig auf internationalem Parkett auf, mit eigener W\u00e4hrung und eigenem Auftreten bei globalen Wirtschaftsforen.", subtyp: "so3", subtypText: "Bermuda zeigt eine sehr klar soziale Drei: Die aggressive Positionierung als globales R\u00fcckversicherungs- und Offshore-Finanzzentrum, die pastellfarbenen, streng regulierten H\u00e4user als Aush\u00e4ngeschild gepflegten Wohlstands und das gezielt gepflegte Auftreten auf internationalem wirtschaftlichem Parkett zeigen Erfolg als bewusst nach au\u00dfen inszeniertes, kollektives Image. Ein sexueller Einschlag zeigt sich in der Nutzung exklusiver, prestigetr\u00e4chtiger Ereignisse wie der Bermuda Sailing Week und des America's Cup 2017, mit denen die Insel gezielt Bewunderung und internationale Anziehungskraft erzeugt. Die selbsterhaltende Drei, die sich eher in stiller, praktischer Verl\u00e4sslichkeit zeigen w\u00fcrde, tritt gegen\u00fcber diesem durchg\u00e4ngig nach au\u00dfen gerichteten Erfolgsimage zur\u00fcck." },
  ]},
    { region: "Mittelamerika & Karibik", laender: [
    { name: "Panama", iso: "PA", typ: 2, unsicher: false, text: "Panama-H\u00fcte werden traditionell nicht in Panama, sondern in Ecuador hergestellt \u2013 ein kleines Kuriosum, das aber zeigt, wie sehr das Land seine Identit\u00e4t \u00fcber Gastfreundschaft statt \u00fcber eigene Produktexporte definiert. Der Panamakanal, als internationale Handelsverbindung zwischen den Ozeanen, pr\u00e4gt ein Selbstverst\u00e4ndnis als Gastgeber und Vermittler zwischen Welten. Im direkten pers\u00f6nlichen Erleben \u2013 wie Detlef selbst berichtete \u2013 begegnet man dort einer auffallend warmen, f\u00fcrsorglichen Alltagskultur, die Besucher aktiv einbindet statt sie nur zu tolerieren. Familienfeiern und Nachbarschaftsfeste sind fester Bestandteil des Wochenrhythmus, mit einer Selbstverst\u00e4ndlichkeit, mit der Fremde eingeladen werden. Die K\u00fcche, gepr\u00e4gt von \u201eSancocho\u201c, einem gemeinsam gekochten Eintopf f\u00fcr viele, symbolisiert F\u00fcrsorge als geteilte, praktische Handlung.", subtyp: "so2", subtypText: "Panama zeigt eine klar sozial gepr\u00e4gte Zwei: Der Panamakanal als internationale Handelsverbindung pr\u00e4gt ein Selbstverst\u00e4ndnis als Gastgeber und Vermittler zwischen Welten, und die auffallend warme, f\u00fcrsorgliche Alltagskultur bindet Besucher aktiv ein, statt sie nur zu tolerieren \u2013 F\u00fcrsorge als gemeinschaftliches, nach au\u00dfen gerichtetes Prinzip. Die K\u00fcche, gepr\u00e4gt vom gemeinsam gekochten \u201eSancocho\u201c-Eintopf f\u00fcr viele, symbolisiert F\u00fcrsorge als geteilte, praktische Handlung. Ein selbsterhaltender Unterton zeigt sich in den fest im Wochenrhythmus verankerten Familienfeiern und Nachbarschaftsfesten, bei denen Fremde mit gro\u00dfer Selbstverst\u00e4ndlichkeit eingeladen werden. Die sexuelle Zwei, mit ihrer exklusiven Zuwendung zu einer einzelnen Person, tritt gegen\u00fcber dieser breiten, gastfreundlichen F\u00fcrsorgekultur zur\u00fcck." },
    { name: "Kuba", iso: "CU", typ: 7, unsicher: false, text: "Trotz jahrzehntelangem US-Embargo und chronischem Mangel an Grundg\u00fctern ist die kubanische Stra\u00dfe erf\u00fcllt von Musik \u2013 Son, Salsa, Rumba, live gespielt an fast jeder Ecke Havannas. Alte amerikanische Stra\u00dfenkreuzer aus den 1950ern werden mit Improvisationsgeschick am Leben gehalten \u2013 Kreativit\u00e4t im Mangel statt Resignation. Die \u201eCasa de la Trova\u201c-Musikh\u00e4user sind Institutionen, in denen mehrere Generationen gemeinsam tanzen, nicht getrennt nach Alter. Der Baseballsport genie\u00dft Kultstatus, mit Stra\u00dfenspielen praktisch \u00fcberall, wo Platz ist. Trotz politischer Isolation exportiert Kuba \u00c4rzte und T\u00e4nzer in alle Welt \u2013 eine Kultur, die ihre Lebensfreude und ihr K\u00f6nnen als eigentlichen Reichtum begreift, wenn schon nicht materiellen Wohlstand.", subtyp: "so7", subtypText: "Kuba zeigt eine sehr ausgepr\u00e4gt soziale Sieben: Trotz jahrzehntelangem Embargo und chronischem Mangel ist die Stra\u00dfe erf\u00fcllt von live gespielter Musik, die \u201eCasa de la Trova\u201c-Musikh\u00e4user bringen mehrere Generationen gemeinsam zum Tanzen, und Kuba exportiert \u00c4rzte und T\u00e4nzer in alle Welt \u2013 Lebensfreude wird hier durchg\u00e4ngig als geteiltes, \u00f6ffentliches Gut verstanden, nicht als privates Vergn\u00fcgen. Auch der Baseballsport mit seinem Kultstatus und den allgegenw\u00e4rtigen Stra\u00dfenspielen zeigt Freude als kollektiv gelebte Praxis. Ein selbsterhaltender Unterton zeigt sich im improvisationsreichen Erhalt alter amerikanischer Stra\u00dfenkreuzer aus den 1950ern \u2013 praktischer Erfindungsreichtum im Mangel statt Resignation. Die sexuelle Sieben tritt gegen\u00fcber dieser durchg\u00e4ngig gemeinschaftlich gelebten Lebensfreude zur\u00fcck." },
    { name: "Costa Rica", iso: "CR", typ: 9, unsicher: false, text: "1948 schaffte Costa Rica als eines der wenigen L\u00e4nder der Welt sein Milit\u00e4r vollst\u00e4ndig ab \u2013 ein einzigartiger, auch heute noch geltender verfassungsrechtlicher Verzicht auf organisierte Gewalt. \u201ePura Vida\u201c, w\u00f6rtlich \u201epures Leben\u201c, ist Gru\u00dfformel, Lebensmotto und Werbeslogan zugleich \u2013 eine tief verankerte Haltung entspannter Zufriedenheit. Das Land investiert \u00fcberdurchschnittlich in Umweltschutz und Nationalparks; \u00fcber ein Viertel der Landesfl\u00e4che steht unter Schutz, was f\u00fcr eine bewusste, undramatische Koexistenz mit der Natur steht statt f\u00fcr Ausbeutung. Politische Stabilit\u00e4t und Demokratie seit Jahrzehnten, in einer Region voller Krisen, zeigen einen Hang zu Ausgleich statt Umsturz. Bildung und Gesundheitsversorgung werden traditionell hoch priorisiert \u2013 ein leiser, unaufgeregter Wohlstandsweg statt lautem wirtschaftlichem Wettbewerb.", subtyp: "so9", subtypText: "Costa Rica zeigt eine ausgepr\u00e4gt sozial gepr\u00e4gte Neun: Die vollst\u00e4ndige, verfassungsrechtlich verankerte Abschaffung des Milit\u00e4rs 1948, der \u00fcberdurchschnittliche Umweltschutz mit \u00fcber einem Viertel gesch\u00fctzter Landesfl\u00e4che und die seit Jahrzehnten stabile Demokratie in einer krisengeplagten Region zeigen Frieden und Ausgleich als bewusst institutionalisiertes, kollektives Prinzip. Auch die hohe Priorit\u00e4t f\u00fcr Bildung und Gesundheitsversorgung folgt einem leisen, unaufgeregten Wohlstandsweg statt lautem wirtschaftlichem Wettbewerb. Ein selbsterhaltender Unterton zeigt sich in \u201ePura Vida\u201c \u2013 w\u00f6rtlich \u201epures Leben\u201c \u2013, einer tief verankerten, sehr pers\u00f6nlichen Haltung entspannter Zufriedenheit, die als Gru\u00dfformel den ganzen Alltag durchzieht. Die sexuelle Neun tritt gegen\u00fcber dieser durchg\u00e4ngig auf Ausgleich und Koexistenz ausgerichteten Grundhaltung deutlich zur\u00fcck." },
    { name: "Dominikanische Republik", iso: "DO", typ: 7, unsicher: false, text: "Merengue und Bachata sind nicht nur Musikstile, sondern allt\u00e4gliche Lebensbegleiter \u2013 in Kolmados (kleinen Nachbarschaftsl\u00e4den) wird bei lauter Musik getanzt, w\u00e4hrend nebenbei eingekauft wird. Baseball ist Nationalsport mit religi\u00f6sem Stellenwert, und Talente werden von klein auf gef\u00f6rdert \u2013 der Traum vom Erfolg in der US-amerikanischen Major League treibt ganze Gemeinden an. Trotz wirtschaftlicher Herausforderungen ist die dominikanische Stra\u00dfenkultur laut, farbenfroh und feierfreudig, mit Karneval-Feiern, die Monate im Voraus vorbereitet werden. Der Nationalgetr\u00e4nk-Rum und die gesellige Trinkkultur unter freiem Himmel unterstreichen eine kollektive Vorliebe f\u00fcr gemeinsame, ausgelassene Abende. Auch bei wirtschaftlicher Not wird der Alltag mit auff\u00e4lliger Lebensfreude und Optimismus gestaltet, statt in R\u00fcckzug zu verfallen.", subtyp: "so7", subtypText: "Die Dominikanische Republik zeigt eine sehr ausgepr\u00e4gt soziale Sieben: Merengue und Bachata als allt\u00e4gliche Lebensbegleiter, in Nachbarschaftsl\u00e4den bei lauter Musik getanzt, sowie die laute, farbenfrohe Stra\u00dfenkultur mit monatelang vorbereiteten Karnevalsfeiern zeigen Lebensfreude als durchg\u00e4ngig geteiltes, \u00f6ffentliches Fest. Auch der Nationalgetr\u00e4nk-Rum und die gesellige Trinkkultur unter freiem Himmel unterstreichen eine kollektive Vorliebe f\u00fcr gemeinsame, ausgelassene Abende, selbst bei wirtschaftlicher Not. Ein sexueller Einschlag zeigt sich im Baseballsport mit seinem beinahe religi\u00f6sen Stellenwert, wo der Traum vom pers\u00f6nlichen Erfolg in der US-amerikanischen Major League ganze Gemeinden mit intensiver, idealisierender Energie antreibt. Die selbsterhaltende Sieben tritt gegen\u00fcber dieser durchg\u00e4ngig \u00f6ffentlich zelebrierten Lebensfreude deutlich zur\u00fcck." },
    { name: "Jamaika", iso: "JM", typ: 7, unsicher: false, text: "Reggae und die Rastafari-Bewegung, weltber\u00fchmt durch Bob Marley, verbinden spirituelle Tiefe mit einer unbeschwerten, freiheitsliebenden Lebenshaltung. \u201eNo problem, mon\u201c ist mehr als eine Touristenfloskel \u2013 es beschreibt eine tats\u00e4chlich gelebte Grundhaltung, Schwierigkeiten nicht dramatisch zu nehmen. Jamaika hat trotz seiner geringen Gr\u00f6\u00dfe \u00fcberdurchschnittlich viele Weltklasse-Sprinter hervorgebracht \u2013 Usain Bolts L\u00e4ssigkeit selbst im Hochleistungssport ist geradezu symptomatisch f\u00fcr die nationale Selbstdarstellung. Stra\u00dfenfeste, \u201eDancehall\u201c-Partys und Soundsystem-Kultur pr\u00e4gen die N\u00e4chte in Kingston und dar\u00fcber hinaus. Auch wirtschaftliche Schwierigkeiten und hohe Kriminalit\u00e4tsraten in bestimmten Vierteln \u00e4ndern wenig an der nach au\u00dfen gelebten kulturellen Priorit\u00e4t: Lebensfreude wird aktiv verteidigt, nicht der Realit\u00e4t geopfert.", subtyp: "so7", subtypText: "Jamaika zeigt eine klar sozial gepr\u00e4gte Sieben: Stra\u00dfenfeste, \u201eDancehall\u201c-Partys und die Soundsystem-Kultur pr\u00e4gen die N\u00e4chte in Kingston, und Jamaika hat trotz seiner geringen Gr\u00f6\u00dfe \u00fcberdurchschnittlich viele Weltklasse-Sprinter hervorgebracht \u2013 Lebensfreude wird hier als kollektiv geteiltes, \u00f6ffentlich zelebriertes und aktiv verteidigtes Gut verstanden, auch trotz wirtschaftlicher Schwierigkeiten. Ein sexueller Einschlag zeigt sich in Reggae und der Rastafari-Bewegung, die spirituelle Tiefe mit einer unbeschwerten, freiheitsliebenden Lebenshaltung verbinden, sowie in der beinahe ikonischen pers\u00f6nlichen L\u00e4ssigkeit von Ausnahmeathleten wie Usain Bolt selbst im Hochleistungssport. Die selbsterhaltende Sieben tritt gegen\u00fcber dieser durchg\u00e4ngig \u00f6ffentlich und leidenschaftlich gelebten Lebensfreude zur\u00fcck." },
    { name: "Guatemala", iso: "GT", typ: 2, unsicher: false, text: "In den Maya-gepr\u00e4gten Hochlandd\u00f6rfern rund um Chichicastenango ist das gemeinschaftliche \u201eCofrad\u00eda\u201c-System \u2013 lokale religi\u00f6se Bruderschaften, die sich gegenseitig bei Festen und in Notzeiten unterst\u00fctzen \u2013 bis auf den heutigen Tag aktiv gelebte soziale Absicherung. Handgewebte Textilien, deren Muster von Dorf zu Dorf variieren, werden von M\u00fcttern an T\u00f6chter weitergegeben \u2013 ein generationen\u00fcbergreifendes F\u00fcrsorgehandwerk. Der Wochenmarkt ist weit mehr als Handel: Er ist ein sozialer Treffpunkt, an dem Neuigkeiten, Sorgen und Hilfe ausgetauscht werden. Trotz Armut und politischer Instabilit\u00e4t bleibt die Gro\u00dffamilie das verl\u00e4sslichste soziale Netz, oft \u00fcber mehrere Generationen unter einem Dach. Gastfreundschaft gegen\u00fcber Fremden, auch mit sehr begrenzten Mitteln, gilt als selbstverst\u00e4ndliche Pflicht, nicht als Ausnahme.", subtyp: "so2", subtypText: "Guatemala zeigt eine klar sozial gepr\u00e4gte Zwei: Das gemeinschaftliche \u201eCofrad\u00eda\u201c-System \u2013 lokale religi\u00f6se Bruderschaften, die sich gegenseitig bei Festen und in Notzeiten unterst\u00fctzen \u2013 und der Wochenmarkt als sozialer Treffpunkt, an dem Neuigkeiten, Sorgen und Hilfe ausgetauscht werden, zeigen F\u00fcrsorge als institutionalisiertes, gemeinschaftliches Prinzip. Auch die selbstverst\u00e4ndliche Gastfreundschaft gegen\u00fcber Fremden, selbst bei sehr begrenzten Mitteln, gilt als Pflicht der ganzen Gemeinschaft. Ein selbsterhaltender Unterton zeigt sich in der Gro\u00dffamilie als verl\u00e4sslichstem sozialen Netz, oft \u00fcber mehrere Generationen unter einem Dach, sowie in den handgewebten Textilien, deren Muster von M\u00fcttern an T\u00f6chter weitergegeben werden \u2013 ein sehr pers\u00f6nliches, famili\u00e4res F\u00fcrsorgehandwerk. Die sexuelle Zwei tritt gegen\u00fcber dieser breiten, gemeinschaftlich wie famili\u00e4r gelebten F\u00fcrsorgekultur zur\u00fcck." },
    { name: "Honduras", iso: "HN", typ: 6, unsicher: false, text: "Als eines der L\u00e4nder mit den h\u00f6chsten Gewaltraten Lateinamerikas hat Honduras eine tiefe Vertrautheit mit Unsicherheit entwickelt \u2013 Nachbarschaftswachen und famili\u00e4re Schutznetzwerke sind praktische Alltagsantworten. Die Gro\u00dffamilie, oft mit drei Generationen im selben Haushalt oder Viertel, dient als prim\u00e4res soziales Sicherheitsnetz, da staatliche Institutionen oft als unzuverl\u00e4ssig erlebt werden. Migration in die USA, h\u00e4ufig unter gro\u00dfem pers\u00f6nlichen Risiko, wird von ganzen Familien mitgetragen und finanziert \u2013 ein kollektives Bem\u00fchen um Sicherheit f\u00fcr Einzelne. Religi\u00f6se Gemeinschaften, evangelikal wie katholisch, bieten zus\u00e4tzlichen sozialen Halt und Orientierung in unsicheren Zeiten. Vorsicht im \u00f6ffentlichen Raum, etwa beim Ausgehen nach Einbruch der Dunkelheit, ist allt\u00e4gliche, notwendige Praxis, keine \u00fcbertriebene \u00c4ngstlichkeit.", subtyp: "se6", subtypText: "Honduras zeigt eine klar selbsterhaltend gepr\u00e4gte Sechs: Die Gro\u00dffamilie, oft mit drei Generationen im selben Haushalt oder Viertel, dient als prim\u00e4res, sehr pers\u00f6nliches soziales Sicherheitsnetz, da staatliche Institutionen oft als unzuverl\u00e4ssig erlebt werden, und Nachbarschaftswachen sind praktische, konkrete Alltagsantworten auf Unsicherheit. Auch die Migration in die USA, h\u00e4ufig unter gro\u00dfem pers\u00f6nlichen Risiko, wird von ganzen Familien gemeinsam finanziert und mitgetragen \u2013 kollektive Sicherheit f\u00fcr das einzelne Familienmitglied. Ein sozialer Unterton zeigt sich in religi\u00f6sen Gemeinschaften, evangelikal wie katholisch, die zus\u00e4tzlichen institutionellen Halt und Orientierung bieten. Die sexuelle Sechs, mit ihrer mutigen Konfrontation der Bedrohung, tritt gegen\u00fcber dieser famili\u00e4r und nachbarschaftlich verankerten Vorsicht deutlich zur\u00fcck." },
    { name: "Puerto Rico", iso: "PR", typ: 7, unsicher: false, text: "Reggaeton, heute ein globales Musikph\u00e4nomen, hat seine Wurzeln ma\u00dfgeblich in den Stra\u00dfen von San Juan \u2013 Musik als lauter, k\u00f6rperlicher Ausdruck von Lebensfreude trotz wirtschaftlicher Talfahrt und wiederholter Hurrikan-Katastrophen. Nach dem verheerenden Hurrikan Maria 2017 organisierten sich Nachbarschaften spontan zu Stra\u00dfenfesten und gemeinsamem Kochen \u2013 Feiern als aktive Bew\u00e4ltigungsstrategie, nicht als Verdr\u00e4ngung. Salsa-Tanzabende in Altstadt-Pl\u00e4tzen sind w\u00f6chentliche Institution, offen f\u00fcr Alt und Jung gleicherma\u00dfen. Die enge, oft komplizierte Beziehung zu den USA als Au\u00dfengebiet wird von vielen Puertoricanern mit einer Mischung aus Stolz auf die eigene Kultur und beharrlichem Optimismus verarbeitet. Trotz hoher Schuldenlast und Abwanderung bleibt die karibische Insel f\u00fcr ihre unersch\u00fctterliche Feierlaune bekannt.", subtyp: "so7", subtypText: "Puerto Rico zeigt eine sehr ausgepr\u00e4gt soziale Sieben: Reggaeton als lauter, k\u00f6rperlicher Ausdruck von Lebensfreude, die spontan organisierten Stra\u00dfenfeste und das gemeinsame Kochen nach Hurrikan Maria als aktive, geteilte Bew\u00e4ltigungsstrategie sowie die w\u00f6chentlichen Salsa-Tanzabende auf Altstadt-Pl\u00e4tzen zeigen Freude durchg\u00e4ngig als \u00f6ffentlich gefeiertes, gemeinschaftliches Gut. Ein selbsterhaltender Unterton zeigt sich im beharrlichen, sehr pers\u00f6nlichen Optimismus, mit dem viele Puertoricaner trotz hoher Schuldenlast und Abwanderung ihren Alltag gestalten. Die sexuelle Sieben tritt gegen\u00fcber dieser durchg\u00e4ngig gemeinschaftlich gelebten Feierlaune zur\u00fcck." },
    { name: "Trinidad und Tobago", iso: "TT", typ: 7, unsicher: false, text: "Der Karneval von Port of Spain gilt als einer der ausgelassensten der Karibik \u2013 monatelange Vorbereitung von Kost\u00fcmen und Steel-Pan-Orchestern m\u00fcndet in tagelange Stra\u00dfenfeste. Die Steel Drum, aus alten \u00d6lf\u00e4ssern gefertigt, ist eine genuine lokale Erfindung und Nationalstolz \u2013 ein Musikinstrument, das aus Mangel Kreativit\u00e4t schuf. Calypso- und Soca-Musik dienen traditionell auch der politischen Satire \u2013 gesellschaftliche Spannungen werden gesungen und getanzt, nicht nur diskutiert. Die multiethnische Gesellschaft, aus afrikanischen, indischen und weiteren Wurzeln zusammengesetzt, feiert ihre Vielfalt durch gemeinsame, ausgelassene Feste wie Diwali und Karneval gleicherma\u00dfen. Der informelle, spontane Umgang mit Zeit und Pl\u00e4nen \u2013 \u201eTrini time\u201c \u2013 wird kulturell eher als Ausdruck von Lebensfreude denn als Problem verstanden.", subtyp: "so7", subtypText: "Trinidad und Tobago zeigt eine sehr ausgepr\u00e4gt soziale Sieben: Der Karneval von Port of Spain mit monatelanger, gemeinschaftlicher Vorbereitung, die multiethnische Gesellschaft, die ihre Vielfalt durch gemeinsame Feste wie Diwali und Karneval gleicherma\u00dfen zelebriert, und Calypso/Soca als gesungene, getanzte politische Satire zeigen Lebensfreude durchg\u00e4ngig als \u00f6ffentlich geteiltes, gemeinschaftliches Gut. Auch die entspannte \u201eTrini time\u201c wird kulturell als kollektiver Ausdruck von Lebensfreude verstanden, nicht als Problem. Ein selbsterhaltender Unterton zeigt sich in der Steel Drum, aus alten \u00d6lf\u00e4ssern gefertigt \u2013 praktischer, pers\u00f6nlicher Erfindungsreichtum aus Mangel heraus. Die sexuelle Sieben tritt gegen\u00fcber dieser durchg\u00e4ngig gemeinschaftlich zelebrierten Lebensfreude zur\u00fcck." },
    { name: "Haiti", iso: "HT", typ: 9, unsicher: false, text: "Trotz einer der traumatischsten Geschichten der westlichen Hemisph\u00e4re \u2013 Sklaverei, gewaltsame Kolonialherrschaft, verheerende Erdbeben und politische Instabilit\u00e4t \u2013 hat sich in Haiti ein spiritueller Alltag entwickelt, der Gegens\u00e4tze zu vers\u00f6hnen sucht: Der Voodoo-Glaube, oft missverstanden, ist im Kern eine Praxis, Ahnen, Geister und die Lebenden in Einklang zu bringen. Gemeinschaftliche \u201eKonbit\u201c-Arbeitsgruppen, bei denen Nachbarn reihum gemeinsam auf den Feldern arbeiten, sind ein jahrhundertealtes Prinzip kollektiver, undramatischer Zusammenarbeit. Trotz extremer Armut ist die haitianische Kunst \u2013 naive Malerei in leuchtenden Farben \u2013 international f\u00fcr ihre lebensbejahende, oft friedliche Bildsprache bekannt. Musik und Tanz begleiten religi\u00f6se wie weltliche Anl\u00e4sse gleicherma\u00dfen als Mittel des Ausgleichs. Die bemerkenswerte F\u00e4higkeit, nach jeder Katastrophe den Alltag geduldig neu aufzubauen, statt in Verzweiflung zu verharren, pr\u00e4gt das kollektive Selbstbild bis heute.", subtyp: "so9", subtypText: "Haiti zeigt eine klar sozial gepr\u00e4gte Neun: Die gemeinschaftlichen \u201eKonbit\u201c-Arbeitsgruppen, bei denen Nachbarn reihum gemeinsam auf den Feldern arbeiten, und der Voodoo-Glaube, der im Kern Ahnen, Geister und die Lebenden in Einklang bringt, zeigen ein jahrhundertealtes Prinzip kollektiver, undramatischer Zusammenarbeit und Ausgleich. Musik und Tanz begleiten religi\u00f6se wie weltliche Anl\u00e4sse gleicherma\u00dfen als gemeinschaftliches Mittel des Ausgleichs. Ein selbsterhaltender Unterton zeigt sich in der bemerkenswerten, sehr pers\u00f6nlichen F\u00e4higkeit, nach jeder Katastrophe den eigenen Alltag geduldig neu aufzubauen, statt in Verzweiflung zu verharren. Die sexuelle Neun tritt gegen\u00fcber dieser durchg\u00e4ngig gemeinschaftlich und geduldig gelebten Ausgleichshaltung zur\u00fcck." },
    { name: "El Salvador", iso: "SV", typ: 8, unsicher: false, text: "Nach Jahrzehnten der h\u00f6chsten Mordrate der Welt, gepr\u00e4gt von brutalen Stra\u00dfenbanden (MS-13, Barrio 18), lie\u00df Pr\u00e4sident Nayib Bukele ab 2022 einen landesweiten Ausnahmezustand verh\u00e4ngen und \u00fcber 80.000 mutma\u00dfliche Bandenmitglieder verhaften. Das eigens gebaute Mega-Gef\u00e4ngnis CECOT, mit Platz f\u00fcr 40.000 Insassen, wurde bewusst als abschreckendes Symbol staatlicher Machtdemonstration inszeniert. Bukele selbst bezeichnet sich \u00f6ffentlich scherzhaft als \u201eder coolste Diktator der Welt\u201c \u2013 Macht wird nicht verborgen, sondern zur Schau gestellt. Die Zustimmungswerte der Bev\u00f6lkerung liegen trotz (oder wegen) der harten Repression bei \u00fcber 80 Prozent \u2013 Sicherheit durch bedingungslose H\u00e4rte wird breit goutiert. Kritik an Menschenrechtsverletzungen wird von der Regierung offen und selbstbewusst als Preis f\u00fcr wiedergewonnene \u00f6ffentliche Ordnung abgetan.", subtyp: "so8", subtypText: "El Salvador zeigt eine ausgepr\u00e4gt soziale Acht: Die Verhaftung von \u00fcber 80.000 mutma\u00dflichen Bandenmitgliedern, das eigens gebaute Mega-Gef\u00e4ngnis CECOT als bewusst inszeniertes Symbol staatlicher Machtdemonstration und die Zustimmungswerte von \u00fcber 80 Prozent zeigen St\u00e4rke als kollektiv gewolltes, \u00f6ffentlich zelebriertes Prinzip \u2013 Sicherheit durch bedingungslose, gemeinsam getragene H\u00e4rte. Auch die offene, selbstbewusste Zur\u00fcckweisung internationaler Kritik als Preis f\u00fcr wiedergewonnene \u00f6ffentliche Ordnung ist ein kollektiv geteiltes Statement. Ein sexueller Einschlag zeigt sich in der pers\u00f6nlichen, provokanten Selbstinszenierung Pr\u00e4sident Bukeles, der sich \u00f6ffentlich scherzhaft als \u201eder coolste Diktator der Welt\u201c bezeichnet \u2013 Macht als individuelle, zur Schau gestellte Pers\u00f6nlichkeit. Die selbsterhaltende Acht tritt gegen\u00fcber dieser durchg\u00e4ngig \u00f6ffentlich zelebrierten Machtdemonstration zur\u00fcck." },
    { name: "Nicaragua", iso: "NI", typ: 8, unsicher: false, text: "Daniel Ortega, einst Anf\u00fchrer der Sandinistischen Revolution gegen die Somoza-Diktatur, hat seit seiner R\u00fcckkehr an die Macht 2007 selbst ein zunehmend autorit\u00e4res Kontrollsystem errichtet \u2013 aus dem Revolution\u00e4r wurde der neue starke Mann. Nach den Protesten von 2018, brutal niedergeschlagen mit hunderten Toten, festigte die Regierung ihre Macht durch systematische Ausschaltung jeder ernstzunehmenden Opposition. Zahlreiche Oppositionelle, Priester und Journalisten wurden inhaftiert, ins Exil gezwungen oder ausgeb\u00fcrgert \u2013 Kontrolle \u00fcber die eigene Erz\u00e4hlung als oberste Priorit\u00e4t. Die enge Machtkonzentration in der Pr\u00e4sidentenfamilie, mit der Ehefrau als Vizepr\u00e4sidentin, zeigt ein System, das pers\u00f6nliche Macht \u00fcber institutionelle Kontinuit\u00e4t stellt. Direkte Konfrontation mit internationaler Kritik, etwa dem R\u00fcckzug aus der Organisation Amerikanischer Staaten, wird selbstbewusst als Souver\u00e4nit\u00e4tsbeweis inszeniert statt als Isolation empfunden.", subtyp: "so8", subtypText: "Nicaragua zeigt eine ausgepr\u00e4gt soziale Acht: Die systematische Ausschaltung jeder ernstzunehmenden Opposition nach den Protesten von 2018, die brutale Niederschlagung mit hunderten Toten und die Inhaftierung, Ausb\u00fcrgerung oder Vertreibung zahlreicher Oppositioneller, Priester und Journalisten zeigen Macht als kollektiv-institutionell durchgesetztes Kontrollsystem. Ein sexueller Einschlag zeigt sich in der direkten, konfrontativen Zur\u00fcckweisung internationaler Kritik \u2013 etwa dem R\u00fcckzug aus der Organisation Amerikanischer Staaten \u2013 die selbstbewusst als pers\u00f6nlicher Souver\u00e4nit\u00e4tsbeweis inszeniert wird, sowie in der engen Machtkonzentration in der Pr\u00e4sidentenfamilie selbst, mit der Ehefrau als Vizepr\u00e4sidentin. Die selbsterhaltende Acht tritt gegen\u00fcber dieser durchg\u00e4ngig konfrontativen, institutionell wie pers\u00f6nlich durchgesetzten Machtaus\u00fcbung zur\u00fcck." },
    { name: "Belize", iso: "BZ", typ: 9, unsicher: false, text: "Belize, das einzige englischsprachige Land Zentralamerikas, pflegt eine au\u00dfergew\u00f6hnlich diverse, aber weitgehend konfliktarme Gesellschaft aus Kreolen, Maya, Garifuna, Mestizen und Mennoniten. Das Nationalmotto \u201eSub Umbra Floreo\u201c (Im Schatten gedeihe ich) spiegelt eine kulturelle Grundhaltung wider, in Ausgleich mit gr\u00f6\u00dferen Kr\u00e4ften zu bestehen statt gegen sie anzuk\u00e4mpfen. Das riesige Barriereriff, zweitgr\u00f6\u00dftes der Welt, wird als gemeinsames nationales Naturerbe gepflegt, das \u00fcber ethnische Gruppen hinweg Identit\u00e4t stiftet. Trotz eines langj\u00e4hrigen Grenzstreits mit Guatemala verfolgt Belize konsequent den Weg internationaler Vermittlung und diplomatischer Geduld statt milit\u00e4rischer Eskalation. Die entspannte \u201eBelizean go slow\u201c-Mentalit\u00e4t, oft von Besuchern bemerkt, wird von den Bewohnern selbst als bewusster Gegenentwurf zum Tempo der Nachbarl\u00e4nder verstanden.", subtyp: "so9", subtypText: "Belize zeigt eine klar sozial gepr\u00e4gte Neun: Die au\u00dfergew\u00f6hnlich diverse, aber weitgehend konfliktarme Gesellschaft aus Kreolen, Maya, Garifuna, Mestizen und Mennoniten, das gemeinsam gepflegte Barriereriff als nationales, ethnien\u00fcbergreifendes Naturerbe und der konsequente Weg internationaler Vermittlung statt milit\u00e4rischer Eskalation im Grenzstreit mit Guatemala zeigen Ausgleich als kollektiv gelebtes Grundprinzip \u2013 im Einklang mit gr\u00f6\u00dferen Kr\u00e4ften bestehen statt gegen sie anzuk\u00e4mpfen. Ein selbsterhaltender Unterton zeigt sich in der entspannten \u201eBelizean go slow\u201c-Mentalit\u00e4t, die von den Bewohnern selbst als bewusster, pers\u00f6nlicher Gegenentwurf zum Tempo der Nachbarl\u00e4nder verstanden wird. Die sexuelle Neun tritt gegen\u00fcber dieser durchg\u00e4ngig auf Koexistenz ausgerichteten Grundhaltung deutlich zur\u00fcck." },
    { name: "Barbados", iso: "BB", typ: 3, unsicher: false, text: "Barbados, die erste Karibikinsel, die 2021 die britische K\u00f6nigin als Staatsoberhaupt abschaffte und Republik wurde, pr\u00e4sentiert sich bewusst als fortschrittlicher Vorreiter der Region. Die Insel produzierte mit Rihanna einen der weltweit erfolgreichsten Popstars, die als Nationalheldin und Botschafterin gefeiert wird \u2013 sichtbarer globaler Erfolg als Quelle nationalen Stolzes. Barbados gilt als eines der wirtschaftlich am weitesten entwickelten L\u00e4nder der Karibik mit hoher Alphabetisierung und stabilem Finanzsektor. Premierministerin Mia Mottley positioniert das Land international sehr sichtbar als Vorreiter in Klimaverhandlungen und Wirtschaftsreformen (\u201eBridgetown-Initiative\u201c). Der historische Aufstieg vom einstigen Zuckerrohr-Kolonialgebiet zu einem der stabilsten demokratischen Inselstaaten der Karibik wird als nationale Erfolgserz\u00e4hlung gepflegt.", subtyp: "so3", subtypText: "Barbados zeigt eine sehr ausgepr\u00e4gt soziale Drei: Der Schritt zur Republik 2021, die international sehr sichtbare Positionierung durch Premierministerin Mia Mottley in Klimaverhandlungen und Wirtschaftsreformen und der gefeierte globale Erfolg von Rihanna als Nationalheldin zeigen Erfolg als bewusst nach au\u00dfen inszeniertes, kollektives Statussymbol. Auch der historische Aufstieg vom Zuckerrohr-Kolonialgebiet zum stabilen demokratischen Vorreiter der Karibik wird als nationale Erfolgserz\u00e4hlung gepflegt. Ein selbsterhaltender Unterton zeigt sich in der praktischen wirtschaftlichen Substanz dahinter \u2013 hoher Alphabetisierung und einem stabilen Finanzsektor, der den \u00f6ffentlichen Erfolg auch materiell tr\u00e4gt. Die sexuelle Drei tritt gegen\u00fcber diesem durchg\u00e4ngig \u00f6ffentlich zelebrierten, kollektiven Erfolgsbewusstsein zur\u00fcck." },
    { name: "Grenada", iso: "GD", typ: 6, unsicher: false, text: "Grenada erlebte 1983 eine der dramatischsten Souver\u00e4nit\u00e4tsverletzungen der Karibik, als die USA nach einem blutigen innerparteilichen Umsturz milit\u00e4risch intervenierten \u2013 ein Trauma, das nach wie vor ein wachsames Bewusstsein kleinstaatlicher Verwundbarkeit gegen\u00fcber Gro\u00dfm\u00e4chten gepr\u00e4gt hat. Seither verfolgt das Land eine bewusst vorsichtige Au\u00dfenpolitik, die enge, absichernde Beziehungen zu regionalen B\u00fcndnissen (CARICOM, Organisation Ostkaribischer Staaten) \u00fcber Alleing\u00e4nge stellt. Nach der verheerenden Zerst\u00f6rung durch Hurrikan Ivan 2004, der \u00fcber 90 % der Geb\u00e4ude besch\u00e4digte, investierte Grenada gezielt in Bauvorschriften und Fr\u00fchwarnsysteme zur Risikominderung. Die als \u201eGew\u00fcrzinsel\u201c bekannte Muskatnuss-Wirtschaft wird bewusst diversifiziert abgesichert, um nicht erneut von einem Wetterereignis existenziell getroffen zu werden. Die kleine Bev\u00f6lkerung pflegt ein starkes, absicherndes Gemeinschaftsgef\u00fchl \u00fcber Kirchengemeinden und Nachbarschaftsnetzwerke, besonders in Krisenzeiten.", subtyp: "so6", subtypText: "Grenada zeigt eine ausgepr\u00e4gt soziale Sechs: Die bewusst vorsichtige Au\u00dfenpolitik, die enge, absichernde Beziehungen zu regionalen B\u00fcndnissen wie CARICOM \u00fcber Alleing\u00e4nge stellt, sowie die gezielten Investitionen in Bauvorschriften und Fr\u00fchwarnsysteme nach Hurrikan Ivan zeigen Sicherheit als institutionell und kollektiv organisiertes Prinzip \u2013 eine direkte Antwort auf das Trauma der US-Intervention von 1983. Auch die bewusste Diversifizierung der Muskatnuss-Wirtschaft dient der kollektiven Absicherung gegen k\u00fcnftige Ersch\u00fctterungen. Ein selbsterhaltender Unterton zeigt sich im starken, absichernden Gemeinschaftsgef\u00fchl \u00fcber Kirchengemeinden und Nachbarschaftsnetzwerke, besonders in Krisenzeiten \u2013 Sicherheit im engen, pers\u00f6nlichen Kreis. Die sexuelle Sechs tritt gegen\u00fcber dieser institutionell wie nachbarschaftlich verankerten Vorsicht zur\u00fcck." },
    { name: "St. Lucia", iso: "LC", typ: 2, unsicher: false, text: "St. Lucia, bekannt f\u00fcr seine au\u00dfergew\u00f6hnlich gastfreundliche Tourismuskultur, positioniert sich bewusst als Insel der pers\u00f6nlichen F\u00fcrsorge und herzlichen Betreuung von Besuchern \u2013 von familiengef\u00fchrten Boutique-Resorts bis zu pers\u00f6nlich gef\u00fchrten Inseltouren. Die traditionelle \u201eJounen Kw\u00e9y\u00f2l\u201c (Kreolischer Tag), ein j\u00e4hrliches Fest der Gemeinschaft, feiert Zusammengeh\u00f6rigkeit und gegenseitige F\u00fcrsorge zwischen den Bewohnern \u00fcber wirtschaftliche oder politische Differenzen hinweg. Als Geburtsort zweier Nobelpreistr\u00e4ger (Derek Walcott, Literatur; Arthur Lewis, Wirtschaft) pflegt St. Lucia stolz eine Kultur, in der pers\u00f6nliche F\u00f6rderung und Mentorschaft junger Talente als nationales Anliegen verstanden wird. Die Gesundheitsversorgung und Sozialf\u00fcrsorge, eng \u00fcber Kirchengemeinden und Familienverb\u00e4nde organisiert, betont traditionell gegenseitige pers\u00f6nliche Unterst\u00fctzung vor staatlicher Anonymit\u00e4t. Das nationale Selbstbild als \u201efreundlichste Insel der Karibik\u201c wird von St. Lucianern selbst aktiv gepflegt und als Quelle des touristischen wie sozialen Erfolgs verstanden.", subtyp: "so2", subtypText: "St. Lucia zeigt eine klar sozial gepr\u00e4gte Zwei: Die traditionelle \u201eJounen Kw\u00e9y\u00f2l\u201c, ein j\u00e4hrliches Gemeinschaftsfest, das Zusammengeh\u00f6rigkeit \u00fcber wirtschaftliche und politische Differenzen hinweg feiert, sowie das aktiv gepflegte nationale Selbstbild als \u201efreundlichste Insel der Karibik\u201c zeigen F\u00fcrsorge als bewusst kultiviertes, kollektives Markenzeichen. Auch die Kultur der pers\u00f6nlichen F\u00f6rderung und Mentorschaft junger Talente \u2013 als Geburtsort zweier Nobelpreistr\u00e4ger \u2013 wird als nationales Anliegen verstanden. Ein selbsterhaltender Unterton zeigt sich in den familiengef\u00fchrten Boutique-Resorts, den pers\u00f6nlich gef\u00fchrten Inseltouren und der eng \u00fcber Kirchengemeinden und Familienverb\u00e4nde organisierten Gesundheits- und Sozialf\u00fcrsorge, die pers\u00f6nliche Unterst\u00fctzung vor staatlicher Anonymit\u00e4t betont. Die sexuelle Zwei tritt gegen\u00fcber dieser breiten, \u00f6ffentlich wie famili\u00e4r gelebten F\u00fcrsorgekultur zur\u00fcck." },
    { name: "Dominica", iso: "DM", typ: 9, unsicher: false, text: "Dominica, bekannt als \u201eNaturinsel der Karibik\u201c, hat sich bewusst dem sanften Einklang mit seiner \u00fcppigen Regenwald- und Vulkanlandschaft verschrieben statt aggressiver touristischer Erschlie\u00dfung wie viele Nachbarinseln. Nach der fast v\u00f6lligen Zerst\u00f6rung durch Hurrikan Maria 2017 verk\u00fcndete die Regierung das ehrgeizige Ziel, als erstes klimaresilientes Land der Welt zu gelten \u2013 eine bewusste Antwort des Ausgleichs mit den Naturgewalten statt reiner Wiederaufbau-Logik. Die verbliebene indigene Kalinago-Bev\u00f6lkerung, eine der letzten pr\u00e4kolumbianischen Gemeinschaften der Karibik, lebt in einem eigenen Territorium in vergleichsweise friedlicher Koexistenz mit der Mehrheitsbev\u00f6lkerung. Die geringe Bev\u00f6lkerungsdichte und der Verzicht auf Massentourismus (kaum Sandstr\u00e4nde, daf\u00fcr Wanderwege und hei\u00dfe Quellen) spiegeln eine kulturelle Entscheidung f\u00fcr Gleichgewicht statt wirtschaftlicher Maximierung wider. Dominica bietet als eines der ersten L\u00e4nder ein \u201eStaatsb\u00fcrgerschaft-durch-Investition\u201c-Programm an, das bewusst genutzt wird, um wirtschaftlichen Ausgleich zu schaffen, ohne die eigene Identit\u00e4t zu verlieren.", subtyp: "so9", subtypText: "Dominica zeigt eine sehr ausgepr\u00e4gt sozial gepr\u00e4gte Neun: Die bewusste Entscheidung gegen aggressive touristische Erschlie\u00dfung zugunsten sanften Einklangs mit der Regenwald- und Vulkanlandschaft, das ehrgeizige Ziel, nach Hurrikan Maria als erstes klimaresilientes Land der Welt zu gelten, und die friedliche Koexistenz mit der verbliebenen indigenen Kalinago-Bev\u00f6lkerung zeigen Ausgleich als bewusst institutionalisiertes, kollektives Prinzip. Auch das \u201eStaatsb\u00fcrgerschaft-durch-Investition\u201c-Programm wird gezielt genutzt, um wirtschaftlichen Ausgleich zu schaffen, ohne die eigene Identit\u00e4t zu verlieren. Ein selbsterhaltender Unterton zeigt sich im Verzicht auf Massentourismus zugunsten von Wanderwegen und hei\u00dfen Quellen \u2013 pers\u00f6nlicher, stiller R\u00fcckzug in die Natur statt wirtschaftlicher Maximierung. Die sexuelle Neun tritt gegen\u00fcber dieser durchg\u00e4ngig auf Gleichgewicht ausgerichteten Grundhaltung deutlich zur\u00fcck." },
    { name: "Antigua und Barbuda", iso: "AG", typ: 7, unsicher: false, text: "Antigua und Barbuda wirbt bewusst mit \u201e365 Str\u00e4nden \u2013 einer f\u00fcr jeden Tag des Jahres\u201c als touristischem Markenzeichen einer Kultur des Genusses, der Vielfalt an Erlebnissen und des unbeschwerten Insellebens. Die ber\u00fchmte \u201eEnglish Harbour\u201c und das j\u00e4hrliche Antigua Sailing Week gelten als internationale Treffpunkte f\u00fcr Segel- und Freizeitbegeisterte, die das Land gezielt als B\u00fchne f\u00fcr Abenteuer und Lebensfreude vermarktet. Die karnevalsartige Feierkultur, insbesondere der farbenpr\u00e4chtige Antigua Carnival, zelebriert Musik, Tanz und gemeinschaftliches Vergn\u00fcgen als zentrales kulturelles Element. Cricket als Nationalsport, mit Legenden wie Viv Richards, wird mit demonstrativer Leidenschaft und geselliger Begeisterung verfolgt statt n\u00fcchterner Wettkampfh\u00e4rte. Das Land positioniert sich touristisch konsequent als Ort grenzenloser, abwechslungsreicher Urlaubserlebnisse, von Tauchg\u00e4ngen bis zu historischen Erkundungen, statt als ruhiges R\u00fcckzugsziel.", subtyp: "so7", subtypText: "Antigua und Barbuda zeigt eine sehr ausgepr\u00e4gt soziale Sieben: Die Vermarktung als \u201e365 Str\u00e4nde \u2013 einer f\u00fcr jeden Tag des Jahres\u201c, die karnevalsartige Feierkultur mit Musik, Tanz und gemeinschaftlichem Vergn\u00fcgen sowie Cricket als Nationalsport, mit demonstrativer, geselliger Leidenschaft verfolgt, zeigen Lebensfreude durchg\u00e4ngig als \u00f6ffentlich zelebriertes, gemeinschaftliches Gut. Auch die internationalen Treffpunkte wie English Harbour und die Antigua Sailing Week positionieren das Land bewusst als gemeinschaftliche B\u00fchne f\u00fcr Abenteuer. Ein sexueller Einschlag zeigt sich in der Vermarktung grenzenloser, abwechslungsreicher Erlebnisse \u2013 von Tauchg\u00e4ngen bis zu historischen Erkundungen \u2013 als intensive, pers\u00f6nliche Erfahrungssuche. Die selbsterhaltende Sieben tritt gegen\u00fcber dieser durchg\u00e4ngig \u00f6ffentlich zelebrierten Erlebnis- und Feierkultur zur\u00fcck." },
    { name: "St. Kitts und Nevis", iso: "KN", typ: 6, unsicher: false, text: "St. Kitts und Nevis, der kleinste souver\u00e4ne Staat Amerikas, verfolgt seit der Unabh\u00e4ngigkeit 1983 eine bewusst vorsichtige Politik enger regionaler B\u00fcndnisse (OECS, CARICOM) statt au\u00dfenpolitischer Alleing\u00e4nge, um die eigene geringe Gr\u00f6\u00dfe abzusichern. Das Land war Vorreiter der \u201eStaatsb\u00fcrgerschaft durch Investition\u201c (seit 1984), ein Programm, das gezielt zus\u00e4tzliche finanzielle Absicherung gegen wirtschaftliche Verwundbarkeit als Kleinstaat schaffen sollte. Die historische Festung Brimstone Hill, einst eine der am besten befestigten Anlagen der Karibik, symbolisiert noch heute das jahrhundertealte Bewusstsein milit\u00e4rischer Verwundbarkeit kleiner Inselstaaten. Nevis erhielt 1998 durch Verfassungs\u00e4nderung das Recht, sich per Referendum von St. Kitts abzuspalten \u2013 eine bewusst geschaffene rechtliche Absicherung gegen k\u00fcnftige Konflikte zwischen den beiden Inseln. Die Wirtschaft, einst stark von Zuckerrohr abh\u00e4ngig, wurde nach dessen Niedergang 2005 bewusst breit auf Tourismus, Offshore-Finanzen und die genannten Investitionsprogramme diversifiziert, um erneute wirtschaftliche Verwundbarkeit zu vermeiden.", subtyp: "so6", subtypText: "St. Kitts und Nevis zeigt eine ausgepr\u00e4gt soziale Sechs: Die bewusst vorsichtige Politik enger regionaler B\u00fcndnisse (OECS, CARICOM) seit der Unabh\u00e4ngigkeit, die Vorreiterrolle beim \u201eStaatsb\u00fcrgerschaft durch Investition\u201c-Programm zur finanziellen Absicherung und die nach dem Zuckerrohr-Niedergang bewusst breit diversifizierte Wirtschaft zeigen Sicherheit als institutionell organisiertes, kollektives Prinzip gegen die eigene Verwundbarkeit als Kleinstaat. Auch die historische Festung Brimstone Hill symbolisiert bis in die Gegenwart dieses jahrhundertealte, kollektive Bewusstsein milit\u00e4rischer Verwundbarkeit. Ein selbsterhaltender Unterton zeigt sich im 1998 verfassungsrechtlich verankerten Recht Nevis, sich per Referendum von St. Kitts abzuspalten \u2013 eine sehr pers\u00f6nliche, auf die eigene, kleinere Identit\u00e4t bezogene rechtliche Absicherung. Die sexuelle Sechs tritt gegen\u00fcber dieser durchg\u00e4ngig institutionell verankerten Vorsicht zur\u00fcck." },
    { name: "Bahamas", iso: "BS", typ: 7, unsicher: false, text: "Die Bahamas, bestehend aus \u00fcber 700 Inseln, haben sich seit Jahrzehnten bewusst als Inbegriff von unbeschwertem Urlaubsvergn\u00fcgen positioniert \u2013 von Kreuzfahrtdrehkreuz Nassau \u00fcber exklusive Resortinseln bis zu Freizeitangeboten wie Schwimmen mit Schweinen oder Haien. Der historische Ruf als einstiges Piraten- und Schmugglerparadies wird touristisch bewusst romantisiert als Symbol ungez\u00fcgelten, abenteuerlichen Freiheitsgef\u00fchls. Die Wirtschaft, fast vollst\u00e4ndig auf Tourismus und Offshore-Finanzdienstleistungen ausgerichtet, bevorzugt konsequent kurzweiligen, erlebnisorientierten Konsum gegen\u00fcber industrieller Produktion. Die Junkanoo-Parade, ein farbenpr\u00e4chtiges, lautstarkes Stra\u00dfenfest zu Weihnachten und Neujahr, zelebriert Musik, Kost\u00fcme und ausgelassene Feierlaune als zentrales kulturelles Fest. Die Bahamas vermarkten sich international konsequent \u00fcber Sinnesreize \u2013 t\u00fcrkises Wasser, Sonnenunterg\u00e4nge, Partyszene \u2013 statt \u00fcber kulturelle Tiefe oder politische Themen.", subtyp: "so7", subtypText: "Die Bahamas zeigen eine sehr ausgepr\u00e4gt soziale Sieben: Die bewusste Positionierung als Inbegriff unbeschwerten Urlaubsvergn\u00fcgens, die Junkanoo-Parade als farbenpr\u00e4chtiges, lautstarkes gemeinschaftliches Stra\u00dfenfest und die konsequente internationale Vermarktung \u00fcber t\u00fcrkises Wasser, Sonnenunterg\u00e4nge und Partyszene zeigen Lebensfreude durchg\u00e4ngig als \u00f6ffentlich inszeniertes, gemeinschaftliches Erlebnis. Ein sexueller Einschlag zeigt sich in der bewussten, touristischen Romantisierung des historischen Piraten- und Schmugglerrufs als Symbol ungez\u00fcgelten, abenteuerlichen, pers\u00f6nlichen Freiheitsgef\u00fchls. Die selbsterhaltende Sieben, die sich eher in stillem, funktionalem Wirtschaften zeigen w\u00fcrde, tritt gegen\u00fcber dieser durchg\u00e4ngig \u00f6ffentlich zelebrierten Erlebniskultur zur\u00fcck." },
  ]},
    { region: "S\u00fcdamerika", laender: [
    { name: "Brasilien", iso: "BR", typ: 7, unsicher: false, text: "Der Karneval von Rio, mit monatelanger Vorbereitung der Sambaschulen und Millionen Teilnehmenden, ist keine touristische Show, sondern das zentrale kulturelle Gro\u00dfereignis des Jahres. Fu\u00dfball wird in Brasilien nicht als Sport, sondern als \u201ejoga bonito\u201c, das sch\u00f6ne Spiel, verstanden \u2013 Kreativit\u00e4t und Freude am Spiel z\u00e4hlen mehr als reine Effizienz. Die Str\u00e4nde von Copacabana und Ipanema sind allt\u00e4gliche soziale Treffpunkte, an denen Leben drau\u00dfen und k\u00f6rperlich stattfindet, nicht hinter verschlossenen T\u00fcren. Trotz enormer sozialer Ungleichheit ist die brasilianische Musik \u2013 Samba, Bossa Nova, Funk Carioca \u2013 von einer Leichtigkeit gepr\u00e4gt, die Missst\u00e4nde eher humorvoll kommentiert als anklagt. \u201eJeitinho brasileiro\u201c, die Kunst, kreative Umwege um Regeln und Hindernisse zu finden, gilt als bewunderte nationale Eigenschaft \u2013 Optionenvielfalt statt starrer Struktur.", subtyp: "so7", subtypText: "Brasilien zeigt eine sehr ausgepr\u00e4gt soziale Sieben: Der Karneval von Rio mit monatelanger, gemeinschaftlicher Vorbereitung der Sambaschulen und Millionen Teilnehmenden sowie die Str\u00e4nde als allt\u00e4gliche, \u00f6ffentliche soziale Treffpunkte zeigen Lebensfreude durchg\u00e4ngig als geteiltes, \u00f6ffentliches Fest. Auch die brasilianische Musik \u2013 Samba, Bossa Nova, Funk Carioca \u2013, die Missst\u00e4nde trotz enormer sozialer Ungleichheit eher humorvoll kommentiert als anklagt, zeigt Leichtigkeit als kollektive Bew\u00e4ltigungsstrategie. Ein sexueller Einschlag zeigt sich im \u201eJeitinho brasileiro\u201c, der Kunst, kreative, pers\u00f6nliche Umwege um Regeln und Hindernisse zu finden \u2013 Charme und Einfallsreichtum im Umgang mit dem Einzelnen statt starrer Struktur. Die selbsterhaltende Sieben tritt gegen\u00fcber dieser durchg\u00e4ngig \u00f6ffentlich gelebten Lebensfreude zur\u00fcck." },
    { name: "Argentinien", iso: "AR", typ: 4, unsicher: false, text: "Der Tango, in den Hafenvierteln von Buenos Aires entstanden, ist ein Tanz der Sehnsucht und des Verlusts \u2013 \u201etres minutos de melancol\u00eda bailada\u201c, drei Minuten getanzter Melancholie, wie es S\u00e4nger Enrique Santos Disc\u00e9polo formulierte. Der Nationaldichter Jorge Luis Borges verwob Zeit, Identit\u00e4t und Verlust zu einer Literatur von au\u00dfergew\u00f6hnlicher introspektiver Tiefe. Fu\u00dfball-Ikone Diego Maradona wird auch heute noch nicht nur als Sportler, sondern als tragische, zutiefst menschliche Figur verehrt \u2013 Fehlbarkeit und Gr\u00f6\u00dfe untrennbar verwoben. Die Wirtschaftskrisen der letzten Jahrzehnte, mit wiederholtem Verm\u00f6gensverlust der Mittelschicht, haben ein kollektives Gef\u00fchl kollektiver, oft stolz getragener Tragik hinterlassen. Caf\u00e9s in Buenos Aires, viele \u00fcber hundert Jahre alt, sind Orte langer, melancholischer Gespr\u00e4che \u00fcber verlorene Gr\u00f6\u00dfe und das, was h\u00e4tte sein k\u00f6nnen.", subtyp: "sx4", subtypText: "Argentinien zeigt eine ausgepr\u00e4gt sexuell gef\u00e4rbte Vier: Der Tango, \u201edrei Minuten getanzter Melancholie\u201c, ist ein intensiver, k\u00f6rperlich enger Tanz der Sehnsucht und des Verlusts zwischen zwei Menschen, und die bis auf den heutigen Tag andauernde, fast leidenschaftliche Verehrung Diego Maradonas als tragische, zutiefst menschliche Figur zeigt intensive, pers\u00f6nliche Identifikation statt distanzierter Bewunderung. Ein selbsterhaltender Unterton zeigt sich in der introspektiven Tiefe der Literatur Jorge Luis Borges' und in den \u00fcber hundert Jahre alten Caf\u00e9s von Buenos Aires, Orten stiller, pers\u00f6nlicher Gespr\u00e4che \u00fcber verlorene Gr\u00f6\u00dfe. Die soziale Vier, die sich eher in kollektiv geteilter, \u00f6ffentlicher Trauer zeigen w\u00fcrde, tritt gegen\u00fcber dieser durchg\u00e4ngig intensiv-pers\u00f6nlichen Melancholie zur\u00fcck." },
    { name: "Kolumbien", iso: "CO", typ: 2, unsicher: false, text: "Kolumbianische Gastfreundschaft zeigt sich im spontanen Einladen zum Essen selbst bei Fremdem \u2013 T\u00fcren und K\u00fchlschr\u00e4nke stehen Besuchern traditionell offen. Trotz jahrzehntelangem B\u00fcrgerkrieg mit der FARC und dem Drogenkonflikt der Neunziger hat sich die international wahrgenommene Warmherzigkeit der Menschen kaum ver\u00e4ndert \u2013 St\u00e4dte wie Medell\u00edn, einst Symbol der Gewalt, gelten heute als Modell f\u00fcr gemeinschaftliche Stadterneuerung durch Nachbarschaftsprojekte. Musik, von Cumbia bis Vallenato, wird meist gemeinschaftlich bei Familienfesten gespielt, nicht als Einzeldarbietung. Die \u201eSobremesa\u201c \u2013 das lange Sitzenbleiben am Tisch nach dem Essen, um zu reden \u2013 ist gelebte F\u00fcrsorge f\u00fcreinander in Form geteilter Zeit. Auch nach dem Friedensabkommen von 2016 bleibt der Wiederaufbau von Vertrauen zwischen ehemaligen Konfliktparteien ein zentrales gesellschaftliches Projekt, getragen von zivilgesellschaftlichem Engagement.", subtyp: "so2", subtypText: "Kolumbien zeigt eine klar sozial gepr\u00e4gte Zwei: Die spontane Gastfreundschaft, bei der T\u00fcren und K\u00fchlschr\u00e4nke selbst Fremden offenstehen, die gemeinschaftlich bei Familienfesten gespielte Musik und der von zivilgesellschaftlichem Engagement getragene Wiederaufbau von Vertrauen nach dem Friedensabkommen von 2016 zeigen F\u00fcrsorge als breites, gesellschaftliches Prinzip. Ein selbsterhaltender Unterton zeigt sich in der \u201eSobremesa\u201c, dem langen Sitzenbleiben am Tisch nach dem Essen \u2013 gelebte F\u00fcrsorge im engen, pers\u00f6nlichen Kreis, als geteilte Zeit statt gro\u00dfe Geste. Die sexuelle Zwei, mit ihrer exklusiven Zuwendung zu einer einzelnen Person, tritt gegen\u00fcber dieser breiten, gesellschaftlich gelebten Warmherzigkeit zur\u00fcck." },
    { name: "Chile", iso: "CL", typ: 1, unsicher: false, text: "Chile gilt wirtschaftlich und institutionell als eines der stabilsten und am besten organisierten L\u00e4nder Lateinamerikas \u2013 ein Ruf, der bewusst \u00fcber Jahrzehnte durch disziplinierte Fiskalpolitik gepflegt wurde. Das Land hat als erstes in der Region ein unabh\u00e4ngiges, regelbasiertes Rentensystem und eine strenge Zentralbank-Unabh\u00e4ngigkeit eingef\u00fchrt. Chilenische Weinproduktion folgt strengen, international anerkannten Qualit\u00e4tsstandards, die konsequent eingehalten werden. Die Bildungsprotestbewegung der 2010er-Jahre, obwohl konfliktreich, m\u00fcndete in einen geordneten, langwierigen Verfassungsprozess statt in dauerhaftes Chaos \u2013 selbst der Umbruch verlief strukturiert. Im regionalen Vergleich gilt Chile als das Land mit dem h\u00f6chsten Anspruch an Regeltreue, Verl\u00e4sslichkeit und geordnete Institutionen.", subtyp: "so1", subtypText: "Chile zeigt eine sehr ausgepr\u00e4gt soziale Eins: Das unabh\u00e4ngige, regelbasierte Rentensystem, die strenge Zentralbank-Unabh\u00e4ngigkeit und die geordnete, langwierige Verfassungsreform nach der Bildungsprotestbewegung statt dauerhaftem Chaos zeigen Ordnung als bewusst institutionalisiertes, kollektives Prinzip \u2013 selbst der Umbruch verlief strukturiert. Auch der regionale Ruf als Land mit dem h\u00f6chsten Anspruch an Regeltreue und geordnete Institutionen wird \u00fcber Jahrzehnte diszipliniert gepflegt. Ein selbsterhaltender Unterton zeigt sich in der chilenischen Weinproduktion, die strengen, international anerkannten Qualit\u00e4tsstandards folgt \u2013 pers\u00f6nliche, handwerkliche Pr\u00e4zision. Die sexuelle Eins tritt gegen\u00fcber dieser durchg\u00e4ngig institutionell verankerten Ordnungsliebe deutlich zur\u00fcck." },
    { name: "Peru", iso: "PE", typ: 5, unsicher: false, text: "Machu Picchu, versteckt hoch in den Anden und \u00fcber Jahrhunderte von der Au\u00dfenwelt kaum bemerkt, ist ein treffendes Sinnbild f\u00fcr ein Land, das seinen gr\u00f6\u00dften Schatz lange zur\u00fcckgezogen und im Verborgenen bewahrte. Die Quechua-Kultur, mit einer \u00fcber Jahrtausende gewachsenen spirituellen Verbindung zu den Bergen (Apus) und der Erde (Pachamama), pflegt introvertierte, rituelle Formen der Naturverehrung fernab lauter \u00f6ffentlicher Zurschaustellung. Die peruanische K\u00fcche, heute international gefeiert, entstand \u00fcber Jahrhunderte in relativer Isolation aus indigenen, spanischen und asiatischen Einfl\u00fcssen, bevor sie der Welt pr\u00e4sentiert wurde. Andine Gemeinschaften in gro\u00dfer H\u00f6henlage leben oft physisch isoliert von urbanen Zentren, mit eigenen, unabh\u00e4ngigen Versorgungssystemen. R\u00fcckzug, Geduld und ein tiefes, eher stilles als lautes Verh\u00e4ltnis zum eigenen kulturellen Erbe pr\u00e4gen den nationalen Charakter.", subtyp: "se5", subtypText: "Peru zeigt eine sehr klar selbsterhaltend gepr\u00e4gte F\u00fcnf: Machu Picchu, jahrhundertelang von der Au\u00dfenwelt kaum bemerkt, die introvertierten, rituellen Formen der Quechua-Naturverehrung fernab \u00f6ffentlicher Zurschaustellung und die andinen Gemeinschaften, die oft physisch isoliert mit eigenen, unabh\u00e4ngigen Versorgungssystemen leben, zeigen R\u00fcckzug und stille Bewahrung als durchg\u00e4ngiges kulturelles Prinzip. Ein sozialer Unterton zeigt sich in der peruanischen K\u00fcche, die \u00fcber Jahrhunderte in relativer Isolation entstand, bevor sie der Welt bewusst und kontrolliert pr\u00e4sentiert wurde \u2013 ein gemeinsamer kultureller Schatz, irgendwann geteilt. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser durchg\u00e4ngig zur\u00fcckgezogenen, geduldigen peruanischen Grundhaltung deutlich zur\u00fcck." },
    { name: "Venezuela", iso: "VE", typ: 3, unsicher: false, text: "Venezuela hat mehr Misswahl-Kronen gewonnen als jedes andere Land der Welt \u2013 Sch\u00f6nheitswettbewerbe genie\u00dfen einen gesellschaftlichen Stellenwert, der weit \u00fcber Unterhaltung hinausgeht und als Weg zu sozialem Aufstieg gilt. Plastische Chirurgie ist gesellschaftlich normalisiert und wird offen diskutiert, oft als legitimer Versuch verstanden, die eigene Sichtbarkeit und Ausdrucksst\u00e4rke zu erh\u00f6hen. Trotz schwerer Wirtschaftskrise und Massenauswanderung in den letzten Jahren bleibt eine kulturelle Priorisierung von \u00e4u\u00dferer Erscheinung und Selbstdarstellung bemerkenswert bestehen. Die einstige Erd\u00f6lwirtschaft schuf jahrzehntelang ein Selbstbild wirtschaftlichen Erfolgs und Status, das bis heute nachwirkt, auch wenn die Realit\u00e4t sich drastisch ver\u00e4ndert hat. Diese Einsch\u00e4tzung bleibt jedoch unsicherer als bei anderen L\u00e4ndern, da die politische Krise viele traditionelle kulturelle Muster \u00fcberlagert.", subtyp: "so3", subtypText: "Venezuela zeigt vermutlich eine sozial gepr\u00e4gte Drei: Die international beispiellose Zahl gewonnener Misswahl-Kronen, die gesellschaftlich als Weg zu sozialem Aufstieg gelten, und das lange nachwirkende Selbstbild wirtschaftlichen Erfolgs aus der Erd\u00f6lzeit zeigen Erfolg als \u00f6ffentlich sichtbares, kollektiv geteiltes Statussymbol. Ein sexueller Einschlag zeigt sich in der gesellschaftlich normalisierten plastischen Chirurgie, die offen als legitimer, sehr pers\u00f6nlicher Weg verstanden wird, die eigene Sichtbarkeit und Ausdrucksst\u00e4rke zu erh\u00f6hen. Die selbsterhaltende Drei tritt gegen\u00fcber dieser durchg\u00e4ngig auf \u00e4u\u00dfere Erscheinung und \u00f6ffentliches Image ausgerichteten Grundhaltung zur\u00fcck. Diese Einsch\u00e4tzung bleibt, wie schon beim Haupttyp, unsicherer als bei anderen L\u00e4ndern, da die anhaltende politische Krise viele traditionelle kulturelle Muster \u00fcberlagert." },
    { name: "Ecuador", iso: "EC", typ: 2, unsicher: false, text: "Auf M\u00e4rkten wie dem von Otavalo ist Handeln nicht nur Gesch\u00e4ft, sondern sozialer Austausch \u2013 Verk\u00e4ufer und K\u00e4ufer pflegen oft \u00fcber Jahre pers\u00f6nliche Beziehungen. Die indigene Kichwa-Kultur der Anden praktiziert \u201eMinga\u201c, gemeinschaftliche freiwillige Arbeit f\u00fcr das Dorf, bei der jede Familie mithilft, ohne dass Bezahlung erwartet wird. Gastfamilien nehmen Besucher, auch Fremde, oft mit einer Selbstverst\u00e4ndlichkeit auf, die \u00fcber blo\u00dfe H\u00f6flichkeit hinausgeht. Die Andenregion und das Amazonasgebiet leben von engen Familienverb\u00e4nden, die f\u00fcreinander bei Ernte, Krankheit und Festen einstehen. Auch politische Instabilit\u00e4t in den letzten Jahrzehnten hat diesen tief verwurzelten gegenseitigen F\u00fcrsorgeimpuls im Alltag kaum ver\u00e4ndert.", subtyp: "so2", subtypText: "Ecuador zeigt eine klar sozial gepr\u00e4gte Zwei: Die \u201eMinga\u201c, gemeinschaftliche freiwillige Arbeit f\u00fcr das Dorf, bei der jede Familie ohne Bezahlung mithilft, die \u00fcber Jahre gepflegten pers\u00f6nlichen Beziehungen zwischen H\u00e4ndlern und Kunden auf M\u00e4rkten wie Otavalo und die selbstverst\u00e4ndliche Aufnahme von Gastfamilien, auch Fremden, zeigen F\u00fcrsorge als breites, gemeinschaftliches Prinzip. Ein selbsterhaltender Unterton zeigt sich in den engen Familienverb\u00e4nden der Anden- und Amazonasregion, die f\u00fcreinander bei Ernte, Krankheit und Festen einstehen \u2013 F\u00fcrsorge im engen, pers\u00f6nlichen Kreis. Die sexuelle Zwei tritt gegen\u00fcber dieser durchg\u00e4ngig gemeinschaftlich gelebten F\u00fcrsorgekultur zur\u00fcck." },
    { name: "Bolivien", iso: "BO", typ: 5, unsicher: false, text: "Mit dem Titicacasee und dem Altiplano-Hochland auf \u00fcber 3.800 Metern lebt ein erheblicher Teil der Bev\u00f6lkerung in einer der abgeschiedensten bewohnten Regionen der Welt. Die Aymara- und Quechua-Kulturen bewahren eigenst\u00e4ndige spirituelle und landwirtschaftliche Traditionen, oft weitgehend unabh\u00e4ngig von staatlichen Strukturen in La Paz. Der \u201eCholita\u201c-Wrestling in El Alto verbindet traditionelle indigene Kleidung mit moderner Unterhaltung \u2013 ein Ausdruck eigenst\u00e4ndiger kultureller Neuinterpretation abseits \u00e4u\u00dferer Trends. Boliviens historische Isolation, ohne Zugang zum Meer seit dem Verlust der K\u00fcstenregion 1904, verst\u00e4rkt ein Selbstverst\u00e4ndnis als introvertiertes Binnenland. Traditionelles Wissen \u00fcber Landwirtschaft in extremer H\u00f6henlage wird meist innerhalb der Gemeinschaft weitergegeben, nicht nach au\u00dfen vermarktet.", subtyp: "se5", subtypText: "Bolivien zeigt eine sehr klar selbsterhaltend gepr\u00e4gte F\u00fcnf: Das Leben eines erheblichen Bev\u00f6lkerungsteils in einer der abgeschiedensten bewohnten Regionen der Welt, die historische Isolation als Binnenland seit 1904 und das traditionelle Wissen \u00fcber Landwirtschaft in extremer H\u00f6henlage, das meist innerhalb der Gemeinschaft bleibt statt nach au\u00dfen vermarktet zu werden, zeigen R\u00fcckzug und Selbstgen\u00fcgsamkeit als durchg\u00e4ngiges kulturelles Prinzip. Ein sozialer Unterton zeigt sich in den eigenst\u00e4ndigen spirituellen und landwirtschaftlichen Traditionen der Aymara- und Quechua-Kulturen, die weitgehend unabh\u00e4ngig von staatlichen Strukturen, aber innerhalb der eigenen Gemeinschaft gepflegt werden. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser durchg\u00e4ngig introvertierten, in sich gekehrten bolivianischen Grundhaltung deutlich zur\u00fcck." },
    { name: "Uruguay", iso: "UY", typ: 9, unsicher: false, text: "Uruguay war das erste Land Lateinamerikas, das Homo-Ehe und Cannabis-Konsum legalisierte \u2013 nicht aus Provokation, sondern aus einem pragmatischen Bestreben, gesellschaftliche Konflikte zu entsch\u00e4rfen statt sie zu kriminalisieren. Der fr\u00fchere Pr\u00e4sident Jos\u00e9 Mujica, der einen Gro\u00dfteil seines Gehalts spendete und in einem einfachen Farmhaus lebte, wurde international zum Symbol f\u00fcr unaufgeregte, bescheidene Politik. Im Vergleich zu den Nachbarl\u00e4ndern Argentinien und Brasilien verlief die politische Geschichte auffallend undramatisch, mit stabiler Demokratie seit den 1980er-Jahren. Fu\u00dfball, National-Leidenschaft wie \u00fcberall in der Region, wird in Uruguay bemerkenswert friedlich und ohne die Gewaltexzesse mancher Nachbarl\u00e4nder zelebriert. Die \u201eMate\u201c-Teetrinkritual, gemeinsam aus einem Gef\u00e4\u00df mit vielen geteilt, symbolisiert eine entspannte, undramatische Geselligkeit im Alltag.", subtyp: "so9", subtypText: "Uruguay zeigt eine sehr ausgepr\u00e4gt sozial gepr\u00e4gte Neun: Die pragmatische Legalisierung von Homo-Ehe und Cannabis, um gesellschaftliche Konflikte zu entsch\u00e4rfen statt sie zu kriminalisieren, die auffallend undramatische politische Geschichte mit stabiler Demokratie seit den 1980ern und das bemerkenswert friedlich zelebrierte Fu\u00dfballfieber ohne die Gewaltexzesse mancher Nachbarl\u00e4nder zeigen Ausgleich als durchg\u00e4ngig kollektives, gesellschaftliches Prinzip. Auch das gemeinsame \u201eMate\u201c-Teetrinken aus einem geteilten Gef\u00e4\u00df symbolisiert entspannte, undramatische Geselligkeit im Alltag. Ein selbsterhaltender Unterton zeigt sich in der Person des fr\u00fcheren Pr\u00e4sidenten Jos\u00e9 Mujica, der einen Gro\u00dfteil seines Gehalts spendete und in einem einfachen Farmhaus lebte \u2013 pers\u00f6nliche, unaufgeregte Bescheidenheit als gelebtes Prinzip. Die sexuelle Neun tritt gegen\u00fcber dieser durchg\u00e4ngig gesellschaftlich gelebten Gelassenheit deutlich zur\u00fcck." },
    { name: "Paraguay", iso: "PY", typ: 6, unsicher: false, text: "Nach dem verheerenden Dreibund-Krieg des 19. Jahrhunderts, der sch\u00e4tzungsweise die H\u00e4lfte der m\u00e4nnlichen Bev\u00f6lkerung das Leben kostete, und einer langen Diktatur unter Stroessner im 20. Jahrhundert ist Vorsicht gegen\u00fcber politischen Versprechen tief verankert. Die Guaran\u00ed-Sprache wird parallel zum Spanischen aktiv gepflegt \u2013 ein Festhalten an eigener Identit\u00e4t als Schutz gegen Vereinnahmung von au\u00dfen. Gro\u00dffamilien, oft \u00fcber mehrere Generationen im selben Haushalt, bleiben das wichtigste soziale Sicherungssystem, wichtiger als staatliche Institutionen. Landwirtschaftliche Gemeinschaften im Hinterland leben vielerorts noch heute von Subsistenzwirtschaft und gegenseitiger Nachbarschaftshilfe statt von Markintegration. Politische Zur\u00fcckhaltung und ein eher abwartendes Verh\u00e4ltnis zu schnellen gesellschaftlichen Ver\u00e4nderungen pr\u00e4gen nach wie vor den nationalen Charakter.", subtyp: "se6", subtypText: "Paraguay zeigt eine klar selbsterhaltend gepr\u00e4gte Sechs: Gro\u00dffamilien, oft \u00fcber mehrere Generationen im selben Haushalt, bleiben das wichtigste, sehr pers\u00f6nliche soziale Sicherungssystem, wichtiger als staatliche Institutionen, und landwirtschaftliche Gemeinschaften im Hinterland leben vielerorts von Subsistenzwirtschaft und gegenseitiger Nachbarschaftshilfe statt von Marktintegration. Ein sozialer Unterton zeigt sich im tief verankerten, kollektiv geteilten Misstrauen gegen\u00fcber politischen Versprechen nach dem verheerenden Dreibund-Krieg und der langen Stroessner-Diktatur, sowie im aktiven Pflegen der Guaran\u00ed-Sprache neben dem Spanischen als kollektiver Schutz der eigenen Identit\u00e4t. Die sexuelle Sechs tritt gegen\u00fcber dieser durchg\u00e4ngig famili\u00e4r und historisch verankerten Vorsicht zur\u00fcck." },
    { name: "Suriname", iso: "SR", typ: 9, unsicher: false, text: "Suriname ist eines der ethnisch vielf\u00e4ltigsten L\u00e4nder der Welt \u2013 Nachfahren afrikanischer Sklaven, indischer und javanischer Vertragsarbeiter, indigener V\u00f6lker, Chinesen und Niederl\u00e4nder leben hier auf engstem Raum zusammen, ohne die dortige Vielfalt in offene Konflikte m\u00fcnden zu lassen. Die Hauptstadt Paramaribo gilt mit Moscheen, Synagogen, Hindu-Tempeln und Kirchen in unmittelbarer Nachbarschaft als gelebtes Beispiel religi\u00f6ser Koexistenz, UNESCO-Welterbe nicht zuletzt wegen dieser friedlichen N\u00e4he. Der informelle Nationalspruch \u201eWan pipel\u201c (Ein Volk) wird bewusst als einigendes, undramatisches Identit\u00e4tsangebot \u00fcber alle Volksgruppen hinweg gepflegt. Trotz eines kurzen, blutigen B\u00fcrgerkriegs in den 1980er-Jahren kehrte das Land rasch zu einem Alltag der pragmatischen Anpassung und des Ausgleichs zwischen den Bev\u00f6lkerungsgruppen zur\u00fcck. Die dichten, kaum erschlossenen Regenw\u00e4lder im Landesinneren, die \u00fcber neunzig Prozent der Fl\u00e4che bedecken, spiegeln eine kulturelle Grundhaltung wider, Konflikte eher zu umgehen als sie zu suchen.", subtyp: "so9", subtypText: "Suriname zeigt eine sehr ausgepr\u00e4gt sozial gepr\u00e4gte Neun: Die au\u00dfergew\u00f6hnliche ethnische Vielfalt, die ohne offene Konflikte zusammenlebt, die Hauptstadt Paramaribo mit Moscheen, Synagogen, Hindu-Tempeln und Kirchen in unmittelbarer Nachbarschaft als gelebtes Beispiel religi\u00f6ser Koexistenz, und der Nationalspruch \u201eWan pipel\u201c (Ein Volk) als bewusst gepflegtes, einigendes Identit\u00e4tsangebot zeigen Ausgleich als durchg\u00e4ngig kollektives, gesellschaftliches Prinzip. Ein selbsterhaltender Unterton zeigt sich in den dichten, kaum erschlossenen Regenw\u00e4ldern, die \u00fcber neunzig Prozent der Fl\u00e4che bedecken \u2013 eine kulturelle Grundhaltung, Konflikte eher pers\u00f6nlich zu umgehen als sie zu suchen. Die sexuelle Neun tritt gegen\u00fcber dieser durchg\u00e4ngig auf Koexistenz ausgerichteten Grundhaltung deutlich zur\u00fcck." },
    { name: "Guyana", iso: "GY", typ: 5, unsicher: false, text: "Guyana, eines der am d\u00fcnnsten besiedelten L\u00e4nder der Erde mit riesigen, kaum erforschten Regenwaldgebieten, hat sich international vor allem durch wissenschaftliche und \u00f6kologische Forschungsprojekte einen Namen gemacht statt durch politische oder wirtschaftliche Machtdemonstration. Das Land beherbergt eine au\u00dfergew\u00f6hnliche biologische Vielfalt, die zunehmend systematisch kartiert und erforscht wird \u2013 Wissen \u00fcber das eigene, kaum erschlossene Territorium als nationales Kapital. Die extreme ethnische und sprachliche Vielfalt (Nachfahren indischer, afrikanischer, indigener, chinesischer und portugiesischer Einwanderer) wird eher zur\u00fcckhaltend und analytisch verwaltet als offen zelebriert. Der jahrzehntelange, akribisch mit historischen Dokumenten und Kartenmaterial gef\u00fchrte Grenzstreit mit Venezuela um die \u00f6lreiche Essequibo-Region wird von Guyana bewusst \u00fcber internationale Gerichte und faktenbasierte juristische Argumentation statt Konfrontation ausgetragen. Die \u00fcberwiegend introvertierte, unaufgeregte \u00f6ffentliche Kultur Guyanas steht im auff\u00e4lligen Kontrast zu den lauteren, extrovertierteren karibischen Nachbarl\u00e4ndern.", subtyp: "se5", subtypText: "Guyana zeigt eine sehr klar selbsterhaltend gepr\u00e4gte F\u00fcnf: Der internationale Bekanntheitsgrad vor allem durch wissenschaftliche und \u00f6kologische Forschungsprojekte statt durch politische oder wirtschaftliche Machtdemonstration, die zur\u00fcckhaltende, analytische statt offen zelebrierte Verwaltung der extremen ethnischen Vielfalt und die \u00fcberwiegend introvertierte, unaufgeregte \u00f6ffentliche Kultur \u2013 im auff\u00e4lligen Kontrast zu den lauteren karibischen Nachbarl\u00e4ndern \u2013 zeigen R\u00fcckzug und stilles Wissen als durchg\u00e4ngiges kulturelles Prinzip. Ein sozialer Unterton zeigt sich im jahrzehntelangen Grenzstreit mit Venezuela um die Essequibo-Region, der bewusst \u00fcber internationale Gerichte und faktenbasierte juristische Argumentation statt Konfrontation ausgetragen wird \u2013 institutionelle, sachliche Distanz statt offener Auseinandersetzung. Die sexuelle F\u00fcnf tritt gegen\u00fcber dieser durchg\u00e4ngig introvertierten guyanischen Grundhaltung deutlich zur\u00fcck." },
  ]},
    { region: "Afrika", laender: [
    { name: "Marokko", iso: "MA", typ: 2, unsicher: false, text: "In Marokko gilt: Ein Gast, der das Haus betritt, muss vor dem Weggehen mindestens dreimal zum Tee eingeladen worden sein – Ablehnen des ersten Angebots gehört zum Ritual, doch am Ende bleibt niemand ohne Bewirtung. Die traditionelle Riad-Architektur, mit Innenhöfen statt Fenstern zur Straße, symbolisiert, dass das Zentrum des Hauses und der Fürsorge nach innen, zu den Menschen darin, gerichtet ist. Auf den Souks von Marrakesch und Fès ist Feilschen ein sozialer Akt der Beziehungspflege, nicht nur Preisverhandlung – wer zu schnell zustimmt, gilt fast als unhöflich, weil das Gespräch fehlt. Familien nehmen häufig auch entfernte Verwandte oder in Not geratene Nachbarn dauerhaft bei sich auf, ohne dass dies als außergewöhnliche Geste gilt. Reisende berichten immer wieder, spontan zum Essen eingeladen worden zu sein – eine gelebte Selbstverständlichkeit, keine Ausnahme für besondere Anlässe.", subtyp: "so2", subtypText: "Marokko zeigt eine deutlich soziale Zwei: Das Ritual der dreifachen Tee-Einladung, das gemeinsame Feilschen als Beziehungspflege und die Aufnahme entfernter Verwandter oder bedürftiger Nachbarn in den Haushalt zeigen Fürsorge als öffentlich gelebte, an Gastfreundschaftsregeln gebundene Norm, nicht als private Ausnahme. Ein selbsterhaltender Einschlag zeigt sich in der Riad-Architektur, die das Zentrum des Hauses konsequent nach innen zu den Bewohnern richtet – Fürsorge beginnt im engsten, geschützten Kreis. Die sexuelle Zwei, die sich in exklusiver Zuwendung zu Einzelnen zeigen würde, tritt hinter dieser breiten, ritualisierten Gastfreundschaft gegenüber praktisch jedem Besucher zurück." },
    { name: "\u00c4gypten", iso: "EG", typ: 6, unsicher: false, text: "Nicht die Pyramiden, sondern der Alltag der Menschen zeigt das \u00e4gyptische Grundmuster: Die Gro\u00dffamilie, oft mit drei Generationen im selben Haus oder Viertel, gilt als wichtigste Absicherung gegen wirtschaftliche und politische Unsicherheit. Der Ausdruck \u201eInschallah\u201c \u2013 \u201eso Gott will\u201c \u2013 begleitet fast jede Zukunftsaussage und dr\u00fcckt eine vorsichtige Zur\u00fcckhaltung gegen\u00fcber festen Zusagen aus. Nach Jahrzehnten politischer Umbr\u00fcche, von Nasser \u00fcber Sadat, Mubarak bis zum Arabischen Fr\u00fchling 2011, bleibt Misstrauen gegen\u00fcber schnellen politischen Versprechen tief verankert. Nachbarschaftliche \u201eBaltagiya\u201c-Netzwerke zur informellen Selbstverteidigung in Vierteln entstanden historisch als Antwort auf unzuverl\u00e4ssige staatliche Sicherheit. Religion, ob islamisch oder koptisch-christlich, bietet vielen \u00c4gyptern einen zus\u00e4tzlichen, verl\u00e4sslichen Rahmen von Struktur und Gemeinschaft in unsicheren Zeiten.", subtyp: "se6", subtypText: "\u00c4gypten zeigt eine ausgepr\u00e4gt selbsterhaltende Sechs: Die Gro\u00dffamilie als wichtigste Absicherung gegen wirtschaftliche und politische Unsicherheit, das Misstrauen gegen\u00fcber politischen Versprechen und informelle Nachbarschafts-Sicherheitsnetzwerke wie die \u201eBaltagiya\u201c zielen direkt auf konkreten, materiellen Schutz des eigenen Umfelds. Ein sozialer Anteil zeigt sich in Religion und Gemeinschaft, die zus\u00e4tzlichen Halt und Struktur bieten \u2013 ob islamisch oder koptisch-christlich, stets als kollektiver Rahmen. Die sexuelle Sechs, die sich in trotziger Konfrontation mit Autorit\u00e4t zeigen w\u00fcrde, tritt gegen\u00fcber dieser vorsichtigen, famili\u00e4r verankerten Absicherungsstrategie zur\u00fcck." },
    { name: "S\u00fcdafrika", iso: "ZA", typ: 9, unsicher: false, text: "Nach Jahrzehnten der Apartheid, mit systematischer Trennung und Unterdr\u00fcckung der schwarzen Mehrheit, w\u00e4hlte S\u00fcdafrika nach 1994 bewusst den Weg der \u201eWahrheits- und Vers\u00f6hnungskommission\u201c statt Vergeltung \u2013 \u00f6ffentliches Aussprechen von Unrecht als Weg zu Frieden, nicht Rache. \u201eUbuntu\u201c \u2013 ich bin, weil wir sind \u2013 ist mehr als ein Schlagwort: Es beschreibt eine gelebte Philosophie, in der individuelles Wohl untrennbar mit dem der Gemeinschaft verbunden gedacht wird. Nelson Mandela, 27 Jahre inhaftiert, wurde nach seiner Freilassung nicht zum Racheengel, sondern zum Symbol vers\u00f6hnlicher F\u00fchrung \u2013 ein nationales Vorbild, das noch heute nachwirkt. Die \u201eRegenbogennation\u201c, mit elf offiziellen Amtssprachen, versucht bewusst, Vielfalt zusammenzuhalten statt sie zu unterdr\u00fccken. Trotz anhaltender sozialer Spannungen und Kriminalit\u00e4t bleibt der \u00f6ffentliche Diskurs auffallend gepr\u00e4gt von der Suche nach gemeinsamem Weg statt nach Spaltung.", subtyp: "so9", subtypText: "S\u00fcdafrika zeigt eine sehr ausgepr\u00e4gt soziale Neun: \u201eUbuntu\u201c \u2013 ich bin, weil wir sind \u2013 macht individuelles Wohl explizit vom Wohl der Gemeinschaft abh\u00e4ngig, und die \u201eRegenbogennation\u201c mit elf Amtssprachen sucht bewusst Zusammenhalt trotz Vielfalt statt R\u00fcckzug in Teilgruppen. Die Wahrheits- und Vers\u00f6hnungskommission, die \u00f6ffentliches Aussprechen von Unrecht dem R\u00fcckzug in Schweigen vorzog, zeigt dieselbe Priorit\u00e4t auf kollektiver Harmonie. Ein selbsterhaltender Unterton liegt im pragmatischen Festhalten am gemeinsamen nationalen Alltag trotz Kriminalit\u00e4t und Spannungen. Die sexuelle Neun, die sich in exklusiver Verschmelzung mit Einzelnen zeigen w\u00fcrde, tritt hinter diesem breiten, nationalen Vers\u00f6hnungsprojekt zur\u00fcck." },
    { name: "Nigeria", iso: "NG", typ: 3, unsicher: false, text: "Nollywood, Nigerias Filmindustrie, produziert nach Bollywood die meisten Spielfilme der Welt – ein explosives, unternehmerisches Wachstum trotz begrenzter Mittel und Infrastruktur. Afrobeats-Stars wie Burna Boy oder Wizkid füllen heute internationale Stadien – musikalischer Erfolg wird als nationaler Stolz und Beweis globaler Konkurrenzfähigkeit gefeiert. Die „Hustle“-Mentalität, informeller Unternehmergeist in einem oft schwierigen wirtschaftlichen Umfeld, ist alltäglich sichtbar, von Straßenhändlern bis zu Tech-Start-ups in Lagos. Nigerianische Mode, von Designern wie Lisa Folawiyo international vertreten, verbindet traditionelle Muster mit selbstbewusster, moderner Statuspräsentation. Bildungserfolg wird in nigerianischen Familien mit großem Nachdruck verfolgt – ein Universitätsabschluss oder Auslandsstudium gilt als Beweis für Aufstieg und wird entsprechend gefeiert.", subtyp: "se3", subtypText: "Nigeria zeigt eine stark selbsterhaltende Drei: Die „Hustle“-Mentalität, der informelle Unternehmergeist von Straßenhändlern bis Tech-Start-ups in Lagos, zielt direkt auf wirtschaftliches Überleben und Aufstieg unter schwierigen materiellen Bedingungen. Der familiäre Nachdruck auf Bildungserfolg und Universitätsabschluss als sichtbarem Beweis für Aufstieg verstärkt dieses Bild einer Statuserarbeitung durch harte, konkrete Leistung. Ein sozialer Einschlag zeigt sich in Nollywood und den international gefeierten Afrobeats-Stars, deren Erfolg als kollektiver nationaler Stolz gilt. Die sexuelle Drei, die individuelle Attraktivität und Wettbewerb um eine Person sucht, tritt hinter dieser breiten, wirtschaftlich getriebenen Aufstiegskultur zurück." },
    { name: "Kenia", iso: "KE", typ: 2, unsicher: false, text: "„Harambee“ – Suaheli für „alle gemeinsam ziehen“ – war nicht nur Staatsmotto nach der Unabhängigkeit, sondern beschreibt bis in die Gegenwart lokale Selbsthilfegruppen, die gemeinsam Geld für Schulgebühren, Hochzeiten oder medizinische Notfälle von Nachbarn sammeln. Die kenianische Gastfreundschaft zeigt sich im spontanen Teilen von Chai (Tee) mit jedem Besucher, unabhängig von dessen Status. Marathonläufer aus dem Rift Valley trainieren traditionell in Gruppen und teilen Wissen und Trainingspläne offen miteinander, statt Konkurrenten Vorteile vorzuenthalten. „Harambee“-Bauprojekte, bei denen ganze Dörfer gemeinsam Schulen oder Brunnen errichten, sind auch heute noch üblich, auch ohne staatliche Förderung. Großfamilien-Netzwerke erstrecken sich oft über mehrere Städte und Länder, mit klarer gegenseitiger finanzieller Unterstützungspflicht innerhalb der erweiterten Familie.", subtyp: "so2", subtypText: "Kenia zeigt eine klar soziale Zwei: „Harambee“ – alle gemeinsam ziehen – ist als Staatsmotto und gelebte Praxis lokaler Selbsthilfegruppen die Institutionalisierung gegenseitiger Fürsorge auf Gemeinschaftsebene, sichtbar in gemeinsam finanzierten Schulen und Brunnen. Das offene Teilen von Trainingswissen unter Marathonläufern des Rift Valley statt Konkurrenzdenken bestätigt dieses Muster kollektiver statt individueller Förderung. Ein selbsterhaltender Anteil zeigt sich in den Großfamilien-Netzwerken mit klarer gegenseitiger finanzieller Unterstützungspflicht über Städte und Länder hinweg. Die sexuelle Zwei, die exklusive Zuwendung zu Einzelnen sucht, tritt hinter dieser breiten, institutionalisierten Gemeinschaftsfürsorge zurück." },
    { name: "\u00c4thiopien", iso: "ET", typ: 5, unsicher: false, text: "Als einziges afrikanisches Land, das nie dauerhaft kolonisiert wurde (abgesehen von einer kurzen italienischen Besatzung), hat \u00c4thiopien ein tief verwurzeltes Selbstverst\u00e4ndnis kultureller Eigenst\u00e4ndigkeit bewahrt \u2013 eine eigene Schrift (Ge\u2019ez), einen eigenen Kalender und sogar eine eigene Zeitrechnung. Die \u00e4thiopisch-orthodoxe Kirche, eine der \u00e4ltesten christlichen Traditionen der Welt, praktiziert lange, kontemplative Liturgien in relativer Abgeschiedenheit von westlichen kirchlichen Einfl\u00fcssen. Die traditionelle Kaffeezeremonie, bei der Bohnen vor den Augen der G\u00e4ste ger\u00f6stet und \u00fcber Stunden zubereitet werden, ist ein Ritual der langsamen, introspektiven Geselligkeit, nicht der Eile. Die Hochland-Topografie, mit vielen isolierten Bergd\u00f6rfern, hat \u00fcber Jahrhunderte eigenst\u00e4ndige, voneinander unabh\u00e4ngige lokale Kulturen bewahrt. \u00c4thiopiens Zur\u00fcckhaltung gegen\u00fcber schnellem \u00e4u\u00dferen Einfluss zeigt sich bis auf den heutigen Tag in einer bewussten Pflege der eigenen, urspr\u00fcnglichen Traditionen.", subtyp: "se5", subtypText: "\u00c4thiopien zeigt eine deutlich selbsterhaltende F\u00fcnf: Die nie dauerhaft erfolgte Kolonisierung, die eigene Schrift, der eigene Kalender und die eigene Zeitrechnung zeigen ein Bed\u00fcrfnis, das eigene Ressourcen- und Wissensreservoir unabh\u00e4ngig von \u00e4u\u00dferem Zugriff zu bewahren. Die isolierten Hochland-D\u00f6rfer mit eigenst\u00e4ndigen, voneinander unabh\u00e4ngigen Kulturen und die kontemplative, von westlichem Einfluss abgeschirmte Liturgie der \u00e4thiopisch-orthodoxen Kirche verst\u00e4rken dieses Bild von R\u00fcckzug und Selbstgen\u00fcgsamkeit. Ein sozialer Anteil zeigt sich in der Kaffeezeremonie als langsames, geteiltes Ritual der Geselligkeit. Die sexuelle F\u00fcnf, die sich in intensiver Verschmelzung mit wenigen Vertrauten zeigen w\u00fcrde, tritt hinter dieser breiten kulturellen Zur\u00fcckhaltung zur\u00fcck." },
    { name: "Senegal", iso: "SN", typ: 2, unsicher: false, text: "„Teranga“, das senegalesische Wort für Gastfreundschaft, ist so zentral, dass Senegal sich selbst offiziell als „Land der Teranga“ bezeichnet – Gastfreundschaft als nationale Markenidentität. Ein senegalesisches Sprichwort besagt, ein Gast bringe Segen ins Haus – Besucher werden entsprechend mit dem Besten bewirtet, was verfügbar ist, auch wenn es wenig ist. Das gemeinsame Essen aus einer großen Schüssel, bei dem alle Familienmitglieder und Gäste gemeinsam mit der rechten Hand essen, ist tägliches, verbindendes Ritual. Musik, insbesondere die Sabar-Trommeln, begleitet nahezu jedes soziale Ereignis und lädt aktiv zur gemeinsamen Teilnahme aller Anwesenden ein. Der Sufismus, die vorherrschende Form des Islam in Senegal, betont Gemeinschaft und spirituelle Führerschaft, die sich um das Wohl der Anhänger kümmert.", subtyp: "so2", subtypText: "Senegal zeigt eine sehr ausgeprägt soziale Zwei: „Teranga“ ist als offizielle nationale Selbstbezeichnung Gastfreundschaft, die zur kollektiven Identität erhoben wurde, sichtbar im gemeinsamen Essen aus einer Schüssel und den Sabar-Trommeln, die aktiv alle Anwesenden einladen. Der Sufismus als vorherrschende Islam-Form, der spirituelle Führerschaft explizit um das Wohl der Gemeinschaft der Anhänger organisiert, verstärkt dieses Muster institutionalisierter Fürsorge. Ein selbsterhaltender Unterton zeigt sich im Sprichwort, ein Gast bringe Segen ins Haus – Bewirtung auch mit knappen Mitteln als Absicherung des eigenen Ansehens. Die sexuelle Zwei tritt hinter dieser öffentlichen, ritualisierten Gastfreundschaft für jeden Besucher zurück." },
    { name: "Ghana", iso: "GH", typ: 7, unsicher: false, text: "Ghana war 1957 die erste Subsahara-Kolonie, die ihre Unabhängigkeit erlangte, und feiert dies bis heute mit besonderem, unbeschwertem Stolz statt mit schwerer Symbolik. Highlife- und später Afrobeats-Musik, mit tanzbaren Rhythmen, begleiten praktisch jeden gesellschaftlichen Anlass, von Beerdigungen bis Hochzeiten. Ghanaische Beerdigungen sind berühmt-berüchtigt für ihre aufwendigen, teils tagelangen Feierlichkeiten mit Musik und Tanz – selbst der Tod wird hier zum Fest des Lebens umgedeutet. Die „Fantasy Coffins“, kunstvoll geformte Särge in Form von Autos, Tieren oder Werkzeugen, zeigen eine Kultur, die selbst ernsten Anlässen Kreativität und Leichtigkeit abringt. Straßenmärkte und lokale Gemeinschaftsfeste sind laut, farbenfroh und einladend – Geselligkeit als Grundton des Alltags, trotz wirtschaftlicher Herausforderungen.", subtyp: "so7", subtypText: "Ghana zeigt eine ausgeprägt soziale Sieben: Highlife- und Afrobeats-Musik begleiten praktisch jeden gesellschaftlichen Anlass, und selbst Beerdigungen werden zu tagelangen, gemeinschaftlichen Festen mit Musik und Tanz umgedeutet – Lebensfreude wird konsequent öffentlich und kollektiv zelebriert, nicht privat genossen. Die „Fantasy Coffins“ und die laute, farbenfrohe Straßenmarkt-Kultur bestätigen, dass Kreativität und Leichtigkeit bewusst mit anderen geteilt werden. Ein selbsterhaltender Anteil zeigt sich im unbeschwerten Stolz auf die 1957 erlangte Unabhängigkeit als früheste Subsahara-Kolonie, gefeiert ohne schwere Symbolik. Die sexuelle Sieben, mit ihrer Suche nach dem einen intensiven Erlebnis, tritt hinter dieser breiten, alltäglichen Geselligkeit zurück." },
    { name: "Algerien", iso: "DZ", typ: 8, unsicher: false, text: "Der algerische Unabhängigkeitskrieg gegen Frankreich (1954–1962), mit geschätzt über einer Million Toten, gehört zu den blutigsten antikolonialen Konflikten der Geschichte und ist nach wie vor zentraler Bezugspunkt nationalen Stolzes. Die „Front de Libération Nationale“ wird in Schulbüchern und öffentlichem Gedenken als heroischer Widerstand gefeiert, nicht verschwiegen oder relativiert. Auch nach der Unabhängigkeit blieb die algerische Geschichte von Konfrontation geprägt, etwa im blutigen Bürgerkrieg der 1990er-Jahre gegen islamistische Gruppen. Die „Hirak“-Protestbewegung von 2019, die den langjährigen Präsidenten Bouteflika zum Rücktritt zwang, zeigte erneut eine Bereitschaft zu entschlossener, kollektiver Konfrontation mit der Staatsmacht. Direktheit und ein robustes, unnachgiebiges Auftreten gelten in der algerischen Gesellschaft eher als Stärke denn als Problem.", subtyp: "so8", subtypText: "Algerien zeigt eine ausgeprägt soziale Acht: Der Unabhängigkeitskrieg mit über einer Million Toten wird als kollektiver, heroischer Widerstand in Schulbüchern gefeiert, und die „Hirak“-Protestbewegung von 2019 zeigte erneut organisierte, gemeinschaftliche Konfrontation mit der Staatsmacht statt Einzelkampf. Auch der Bürgerkrieg der 1990er-Jahre wurde als kollektive Auseinandersetzung der Gesellschaft mit islamistischen Gruppen erlebt und verarbeitet. Ein selbsterhaltender Unterton zeigt sich in der noch heute robusten, unnachgiebigen Grundhaltung im Alltag als Überlebensstrategie. Die sexuelle Acht, die sich in intensiver Ein-zu-eins-Konfrontation zeigen würde, tritt hinter dieser breiten, historisch verankerten kollektiven Widerstandskultur zurück." },
    { name: "Tunesien", iso: "TN", typ: 2, unsicher: false, text: "Tunesische Gastfreundschaft ist eng verwandt mit der marokkanischen Tradition: Besucher werden mit Minztee und Gebäck empfangen, noch bevor über den eigentlichen Anlass des Besuchs gesprochen wird. In den Medinas von Tunis oder Sousse ist der persönliche Bezug zwischen Händlern und Stammkunden über Jahre gewachsen, mit Gesprächen, die weit über den Verkauf hinausgehen. Familienfeste, insbesondere Hochzeiten, dauern oft mehrere Tage und beziehen die gesamte erweiterte Nachbarschaft mit ein. Als Geburtsort des Arabischen Frühlings 2011 zeigte Tunesien zugleich eine bemerkenswerte Fähigkeit zu vergleichsweise friedlichem, verhandeltem politischem Übergang statt anhaltender Gewalt. Die Betonung von Bildung und sozialem Zusammenhalt, auch in wirtschaftlich schwierigen Zeiten, spiegelt eine Kultur, die Fürsorge füreinander hochhält.", subtyp: "so2", subtypText: "Tunesien zeigt eine sozial geprägte Zwei: Die über Jahre gewachsenen persönlichen Bindungen zwischen Händlern und Stammkunden in den Medinas und mehrtägige Hochzeitsfeste, die die gesamte Nachbarschaft einbeziehen, zeigen Fürsorge als gemeinschaftlich organisiertes, wiederkehrendes Ritual. Der vergleichsweise friedliche, verhandelte politische Übergang nach dem Arabischen Frühling 2011 bestätigt eine Kultur, die kollektiven Zusammenhalt der Konfrontation vorzieht. Ein selbsterhaltender Anteil zeigt sich im Empfangsritual mit Minztee und Gebäck vor jedem eigentlichen Gesprächsanlass – Fürsorge beginnt im unmittelbaren, häuslichen Rahmen. Die sexuelle Zwei tritt hinter dieser breiten, gesellschaftlich verankerten Fürsorgekultur zurück." },
    { name: "Uganda", iso: "UG", typ: 7, unsicher: false, text: "Uganda, von Winston Churchill einst als „Perle Afrikas“ bezeichnet, verbindet trotz einer schwierigen Geschichte unter Idi Amin eine auffallend lebensfrohe Gegenwartskultur. Musik und Tanz, von traditionellen Kiganda-Rhythmen bis zu modernem Afrobeat, begleiten praktisch jedes soziale Zusammenkommen, von Kirchengottesdiensten bis Marktplätzen. Die jugendliche Bevölkerungsstruktur – eine der jüngsten der Welt – prägt eine energiegeladene, optimistische Straßenkultur in Städten wie Kampala. Lokale Comedy-Shows und improvisiertes Straßentheater sind beliebte, oft kostenlose Unterhaltungsformen, die trotz wirtschaftlicher Enge florieren. Geselligkeit in Form gemeinsamer Mahlzeiten, oft mit Matoke (Kochbananen) als Basis, ist alltägliches, verbindendes Ritual quer durch alle sozialen Schichten.", subtyp: "so7", subtypText: "Uganda zeigt eine sozial gefärbte Sieben: Musik und Tanz begleiten praktisch jedes Zusammenkommen von Kirchengottesdiensten bis Marktplätzen, und die jugendliche, energiegeladene Straßenkultur in Kampala zeigt Optimismus als geteiltes, öffentliches Grundgefühl statt individuellem Vergnügen. Lokale Comedy-Shows und improvisiertes Straßentheater als beliebte, oft kostenlose Unterhaltung bestätigen dieses Muster kollektiver Leichtigkeit trotz schwieriger Geschichte unter Idi Amin. Ein selbsterhaltender Anteil zeigt sich in den gemeinsamen Mahlzeiten mit Matoke als verbindendem Alltagsritual quer durch alle sozialen Schichten. Die sexuelle Sieben tritt hinter dieser breiten, öffentlich gelebten Lebensfreude zurück." },
    { name: "Tansania", iso: "TZ", typ: 9, unsicher: false, text: "Julius Nyerere, Tansanias erster Präsident, entwickelte mit „Ujamaa“ ein explizites politisches Programm der Familiengemeinschaft und des gemeinschaftlichen Wirtschaftens statt Konkurrenz – ein Harmonieideal, das die nationale Politik jahrzehntelang prägte. Sansibar und das Festland vereinten sich 1964 zu einer der wenigen dauerhaft friedlichen Staatenunionen Afrikas, ohne größere anhaltende Konflikte. Suaheli, als gemeinsame Nationalsprache über Dutzende Ethnien hinweg gefördert, diente bewusst dem Ziel, Einheit statt ethnischer Spaltung zu schaffen. Im Vergleich zu vielen Nachbarländern blieb Tansania von größeren Bürgerkriegen oder Völkermorden verschont – ein bemerkenswertes Maß an politischer Stabilität. Der Alltag in ländlichen Regionen ist bis in die Gegenwart geprägt von gemeinschaftlicher Landwirtschaft und einem entspannten, wenig konfrontativen Umgangston.", subtyp: "so9", subtypText: "Tansania zeigt eine sehr ausgeprägt soziale Neun: „Ujamaa“ war ein explizites politisches Programm der Familiengemeinschaft und des gemeinschaftlichen Wirtschaftens statt Konkurrenz, und die als Nationalsprache geförderte Suaheli-Sprache diente bewusst dem Ziel, Einheit statt ethnischer Spaltung über Dutzende Ethnien hinweg zu schaffen. Die friedliche Vereinigung von Sansibar und Festland 1964 sowie das weitgehende Ausbleiben größerer Bürgerkriege bestätigen diese Priorität auf kollektiver Harmonie. Ein selbsterhaltender Unterton zeigt sich in der gemeinschaftlichen Landwirtschaft und dem entspannten, wenig konfrontativen Alltag ländlicher Regionen. Die sexuelle Neun tritt hinter diesem breiten, politisch wie sprachlich verankerten Einheitsideal zurück." },
    { name: "Simbabwe", iso: "ZW", typ: 6, unsicher: false, text: "Nach Jahren politischer und wirtschaftlicher Turbulenzen – Hyperinflation, die 2008 astronomische Ausmaße erreichte, und anhaltende politische Repression – hat sich in Simbabwe ein tiefes Bedürfnis nach familiärer und gemeinschaftlicher Absicherung entwickelt. Großfamilien-Netzwerke, oft über Stadt und Land verteilt, unterstützen sich gegenseitig finanziell und praktisch, wenn staatliche Institutionen versagen. Kirchliche Gemeinschaften, ob traditionell christlich oder in Form charismatischer neuer Bewegungen, bieten zusätzlichen sozialen Halt und Vorhersehbarkeit in unsicheren Zeiten. Die Erfahrung, dass Ersparnisse durch Hyperinflation quasi über Nacht wertlos werden konnten, hat ein tiefes Misstrauen gegenüber offiziellen wirtschaftlichen Versprechen hinterlassen. Vorsicht, Sparsamkeit und informelle Rücklagenbildung – etwa in Form von Vieh oder Naturalien statt Bargeld – sind auch heute noch verbreitete Vorsichtsstrategien.", subtyp: "se6", subtypText: "Simbabwe zeigt eine deutlich selbsterhaltende Sechs: Die Erfahrung der Hyperinflation von 2008, die Ersparnisse quasi über Nacht wertlos machte, hat konkrete Vorsichtsstrategien wie Rücklagenbildung in Form von Vieh oder Naturalien statt Bargeld hervorgebracht – Absicherung durch materielle statt monetäre Werte. Die Großfamilien-Netzwerke, die sich gegenseitig finanziell und praktisch unterstützen, wenn staatliche Institutionen versagen, verstärken dieses Bild praktischer Selbstversorgung. Ein sozialer Anteil zeigt sich in kirchlichen Gemeinschaften, die zusätzlichen sozialen Halt und Vorhersehbarkeit bieten. Die sexuelle Sechs, die sich in trotziger Konfrontation zeigen würde, tritt hinter dieser vorsichtigen, materiell verankerten Absicherungsstrategie zurück." },
    { name: "Elfenbeink\u00fcste", iso: "CI", typ: 7, unsicher: false, text: "Coup\u00e9-D\u00e9cal\u00e9, ein in Paris von ivorischen Migranten erfundener, heute in ganz Westafrika popul\u00e4rer Musik- und Tanzstil, verk\u00f6rpert eine Kultur, die selbst aus der Ferne Feierlaune und Stolz exportiert. Stra\u00dfenfeste (Maquis) mit gegrilltem Fisch und lauter Musik sind fester Bestandteil des Abendlebens in Abidjan, unabh\u00e4ngig vom wirtschaftlichen Auf und Ab des Landes. Trotz zweier B\u00fcrgerkriege in den 2000er- und 2010er-Jahren erholte sich die ivorische Feierkultur bemerkenswert schnell \u2013 Musik und Tanz als kollektive Wege, wieder nach vorn zu blicken. Fu\u00dfball genie\u00dft enormen Stellenwert, mit spontanen Stra\u00dfenfeiern bei jedem Sieg der Nationalmannschaft, den \u201eElefanten\u201c. Die traditionelle Gastfreundschaft gegen\u00fcber Reisenden verbindet sich mit einer ausgepr\u00e4gten Vorliebe f\u00fcr laute, gesellige Zusammenk\u00fcnfte statt zur\u00fcckgezogener Stille.", subtyp: "so7", subtypText: "Die Elfenbeink\u00fcste zeigt eine sehr ausgepr\u00e4gt soziale Sieben: Coup\u00e9-D\u00e9cal\u00e9, in Paris von ivorischen Migranten erfunden und heute in ganz Westafrika popul\u00e4r, sowie die Stra\u00dfenfeste (Maquis) mit gegrilltem Fisch und lauter Musik zeigen Feierlaune als kollektiv exportierten, \u00f6ffentlichen Grundton. Die spontanen Stra\u00dfenfeiern bei jedem Sieg der \u201eElefanten\u201c und die bemerkenswert schnelle Erholung der Feierkultur nach zwei B\u00fcrgerkriegen best\u00e4tigen Musik und Tanz als geteilten Weg, gemeinsam nach vorn zu blicken. Ein selbsterhaltender Unterton zeigt sich in der traditionellen Gastfreundschaft gegen\u00fcber Reisenden. Die sexuelle Sieben tritt hinter dieser breiten, lauten Gemeinschaftskultur zur\u00fcck." },
    { name: "Kamerun", iso: "CM", typ: 2, unsicher: false, text: "Mit über 250 ethnischen Gruppen und Sprachen ist Kamerun eines der kulturell vielfältigsten Länder Afrikas – zusammengehalten wird diese Vielfalt traditionell durch enge familiäre und dörfliche Fürsorgenetzwerke statt durch erzwungene Vereinheitlichung. Der „Njangi“, ein traditionelles Rotationsspar-System, bei dem Gruppenmitglieder reihum finanzielle Unterstützung erhalten, ist bis auf den heutigen Tag weit verbreitete praktische Solidarität. Gemeinsame Mahlzeiten, oft mit Ndolé oder anderen traditionellen Gerichten, werden bewusst mit Nachbarn und erweiterter Familie geteilt, nicht nur im engsten Kreis. Traditionelle Häuptlingstümer (Fondoms), besonders im Westen des Landes, bewahren bis heute soziale Fürsorgestrukturen, die älter sind als der moderne Staat. Kirchliche und muslimische Gemeinschaften bieten zusätzliche, oft grenzüberschreitende Unterstützungsnetzwerke für Familien in Not.", subtyp: "so2", subtypText: "Kamerun zeigt eine sozial geprägte Zwei: Der „Njangi“, ein traditionelles Rotationsspar-System mit reihum verteilter finanzieller Unterstützung, und die über 250 ethnischen Gruppen, die durch familiäre und dörfliche Fürsorgenetzwerke statt erzwungener Vereinheitlichung zusammengehalten werden, zeigen Fürsorge als institutionalisiertes Gemeinschaftssystem. Die traditionellen Häuptlingstümer (Fondoms), die soziale Fürsorgestrukturen älter als der moderne Staat bewahren, verstärken dieses Muster. Ein selbsterhaltender Anteil zeigt sich im bewussten Teilen gemeinsamer Mahlzeiten mit Nachbarn und erweiterter Familie über den engsten Kreis hinaus. Die sexuelle Zwei tritt hinter diesen breiten, systematisch organisierten Solidaritätsstrukturen zurück." },
    { name: "DR Kongo", iso: "CD", typ: 6, unsicher: false, text: "Unter der belgischen Kolonialherrschaft, insbesondere w\u00e4hrend der pers\u00f6nlichen Herrschaft K\u00f6nig Leopolds II., wurden im sogenannten Kongo-Freistaat Millionen Menschen durch Zwangsarbeit im Kautschukhandel get\u00f6tet oder verst\u00fcmmelt \u2013 eine der brutalsten Kolonialgeschichten \u00fcberhaupt, deren Trauma nach wie vor im kollektiven Ged\u00e4chtnis nachwirkt. Seit den 1990er-Jahren erlebte das Land mehrere der t\u00f6dlichsten bewaffneten Konflikte seit dem Zweiten Weltkrieg, mit Millionen Toten in den sogenannten Kongokriegen. Trotz dieser Geschichte hat sich eine der lebendigsten Musikkulturen Afrikas entwickelt \u2013 Rumba Congolaise und Soukous gelten als Vorl\u00e4ufer vieler afrikanischer Popmusikstile \u2013, doch sie entstand oft gerade als Bew\u00e4ltigungsversuch angesichts anhaltender Unsicherheit. Familien- und Dorfgemeinschaften bleiben in weiten Teilen des Landes die verl\u00e4sslichste, oft einzige funktionierende Schutzinstanz. Wachsamkeit gegen\u00fcber bewaffneten Gruppen und Vorsicht im Alltag sind in vielen Regionen noch heute schlichte \u00dcberlebensnotwendigkeit.", subtyp: "se6", subtypText: "Die DR Kongo zeigt eine deutlich selbsterhaltende Sechs: Wachsamkeit gegen\u00fcber bewaffneten Gruppen und Vorsicht im Alltag sind in weiten Teilen des Landes schlichte \u00dcberlebensnotwendigkeit, und Familien- sowie Dorfgemeinschaften bleiben die verl\u00e4sslichste, oft einzige funktionierende Schutzinstanz angesichts des Traumas der Kolonialzeit und wiederholter Kriege. Ein sozialer Anteil zeigt sich in der lebendigen, gemeinschaftlich getragenen Musikkultur \u2013 Rumba Congolaise und Soukous \u2013, die oft gerade als kollektiver Bew\u00e4ltigungsversuch angesichts anhaltender Unsicherheit entstand. Die sexuelle Sechs, die sich in trotziger Konfrontation zeigen w\u00fcrde, tritt hinter dieser vorsichtigen, auf das n\u00e4here Umfeld konzentrierten \u00dcberlebensstrategie zur\u00fcck." },
    { name: "Ruanda", iso: "RW", typ: 9, unsicher: false, text: "Nach dem V\u00f6lkermord von 1994, bei dem innerhalb von etwa hundert Tagen sch\u00e4tzungsweise 800.000 Menschen get\u00f6tet wurden, entschied sich Ruanda bewusst f\u00fcr einen Weg der Vers\u00f6hnung statt der Vergeltung \u2013 die traditionellen \u201eGacaca\u201c-Gerichte erm\u00f6glichten T\u00e4tern Gest\u00e4ndnis und Wiedergutmachung anstelle reiner Bestrafung. Die Regierung verbot in der Folge offiziell die ethnischen Bezeichnungen Hutu und Tutsi im \u00f6ffentlichen Diskurs, um eine gemeinsame nationale Identit\u00e4t zu f\u00f6rdern. Jeden letzten Samstag im Monat findet \u201eUmuganda\u201c statt, ein verpflichtender gemeinschaftlicher Arbeitseinsatz, bei dem Nachbarn gemeinsam Stra\u00dfen bauen oder Gr\u00fcnfl\u00e4chen pflegen \u2013 kollektive Anstrengung als bewusst gepflegtes Vers\u00f6hnungsritual. Kigali gilt heute als eine der saubersten und sichersten St\u00e4dte Afrikas, mit einer gesellschaftlichen Priorit\u00e4t auf Ordnung und Miteinander statt auf Konfrontation. Das gesamte politische Selbstverst\u00e4ndnis Ruandas seit 1994 ist explizit auf \u201eNie wieder\u201c und aktiven, gestalteten Frieden ausgerichtet.", subtyp: "so9", subtypText: "Ruanda zeigt eine sehr ausgepr\u00e4gt soziale Neun: \u201eUmuganda\u201c, der verpflichtende gemeinschaftliche Arbeitseinsatz am letzten Samstag jeden Monats, macht Vers\u00f6hnung zu einem bewusst gepflegten kollektiven Ritual, und das Verbot der ethnischen Bezeichnungen Hutu und Tutsi im \u00f6ffentlichen Diskurs zielt direkt auf eine gemeinsame nationale Identit\u00e4t statt Spaltung. Die \u201eGacaca\u201c-Gerichte, die Gest\u00e4ndnis und Wiedergutmachung statt reiner Bestrafung erm\u00f6glichten, best\u00e4tigen diese Priorit\u00e4t auf gesellschaftlicher Harmonie nach dem V\u00f6lkermord. Ein selbsterhaltender Unterton zeigt sich in Kigalis Ruf als eine der saubersten und sichersten St\u00e4dte Afrikas \u2013 Ordnung als praktische Absicherung. Die sexuelle Neun tritt hinter diesem breiten, staatlich orchestrierten Vers\u00f6hnungsprojekt zur\u00fcck." },
    { name: "Libyen", iso: "LY", typ: 8, unsicher: false, text: "Seit dem Sturz Gaddafis 2011 zerfiel Libyen in konkurrierende Machtzentren, kontrolliert von rivalisierenden Milizen, St\u00e4mmen und zwei parallelen Regierungen \u2013 ein Land, das sich seither \u00fcber die schiere Durchsetzungsf\u00e4higkeit bewaffneter Gruppen definiert. Warlords wie General Chalifa Haftar bauten eigene milit\u00e4rische Machtapparate auf, die reale Kontrolle \u00fcber Territorium oft wichtiger nehmen als jede zentralstaatliche Legitimit\u00e4t. Die enormen \u00d6leinnahmen des Landes wurden historisch zum Objekt erbitterter Machtk\u00e4mpfe zwischen rivalisierenden Fraktionen, nicht zur gemeinsamen Entwicklung genutzt. Stammesstrukturen und bewaffnete Milizen bieten in Abwesenheit eines funktionierenden Staates den einzig verl\u00e4sslichen Schutz \u2013 Territorium und Waffen als Garanten der eigenen Position. Direkte, oft gewaltsame Konfliktaustragung wird in weiten Teilen des Landes nach wie vor der langwierigen politischen Verhandlung vorgezogen. Passend dazu gilt auch Muammar Gaddafi selbst, der das Land 42 Jahre lang pr\u00e4gte, im Enneagramm als SX8w9 \u2013 die sexuelle Acht mit Neunerfl\u00fcgel, deren Machtanspruch sich mit einer eigent\u00fcmlichen, fast tr\u00e4gen Beh\u00e4bigkeit in Auftreten und Rhetorik verband.", subtyp: "se8", subtypText: "Libyen zeigt eine deutlich selbsterhaltende Acht: Stammesstrukturen und bewaffnete Milizen bieten in Abwesenheit eines funktionierenden Staates den einzig verl\u00e4sslichen Schutz \u2013 Territorium und Waffen als konkrete Garanten der eigenen Position, nicht abstrakte Prinzipien. Die enormen \u00d6leinnahmen als Objekt erbitterter Machtk\u00e4mpfe zwischen rivalisierenden Fraktionen best\u00e4tigen, dass es um die Kontrolle materieller Ressourcen geht. Ein sozialer Anteil zeigt sich in den Stammesloyalit\u00e4ten, die Zugeh\u00f6rigkeit organisieren. Die sexuelle Acht, wie bei Gaddafi selbst (SX8w9) sichtbar, tritt gegen\u00fcber diesem breiten, auf Territorium und Ressourcen gerichteten Machtkampf zwischen mehreren Zentren zur\u00fcck." },
    { name: "Botswana", iso: "BW", typ: 1, unsicher: false, text: "Botswana gilt seit der Unabh\u00e4ngigkeit 1966 als eines der am wenigsten korrupten L\u00e4nder Afrikas \u2013 eine bewusst gepflegte Reputation disziplinierter, regelbasierter Verwaltung statt Ausbeutung der eigenen Diamantenvorkommen. Die Einnahmen aus dem Diamantenabbau wurden, anders als in vielen Nachbarl\u00e4ndern, systematisch in Bildung, Infrastruktur und einen Staatsfonds investiert statt in private Bereicherung. Das Land h\u00e4lt seit der Unabh\u00e4ngigkeit ununterbrochen freie, faire Wahlen ab \u2013 demokratische Kontinuit\u00e4t als bewusstes nationales Ordnungsprinzip. Traditionelle \u201eKgotla\u201c-Versammlungen, \u00f6ffentliche Dorfr\u00e4te zur Konsensfindung, wurden bewusst in moderne demokratische Strukturen integriert statt verworfen. Die strikte, oft als streng empfundene Regeltreue im \u00f6ffentlichen Leben wird von Botswanern selbst als Quelle des nationalen Erfolgs und Stolzes verstanden.", subtyp: "so1", subtypText: "Botswana zeigt eine sehr ausgepr\u00e4gt soziale Eins: Die systematische Investition der Diamanteneinnahmen in Bildung, Infrastruktur und einen Staatsfonds statt private Bereicherung sowie die ununterbrochene Reihe freier, fairer Wahlen zeigen Regeltreue als kollektives, institutionalisiertes Ordnungsprinzip. Die traditionellen \u201eKgotla\u201c-Versammlungen, \u00f6ffentliche Dorfr\u00e4te zur Konsensfindung, die bewusst in moderne demokratische Strukturen integriert wurden, best\u00e4tigen dieses Muster gemeinschaftlich getragener Disziplin. Ein selbsterhaltender Anteil zeigt sich im landesweiten Ruf als eines der am wenigsten korrupten L\u00e4nder Afrikas \u2013 Integrit\u00e4t als praktischer Schutz des eigenen Wohlstands. Die sexuelle Eins tritt hinter dieser breiten, institutionell verankerten Regeltreue zur\u00fcck." },
    { name: "Eritrea", iso: "ER", typ: 6, unsicher: false, text: "Nach dem drei\u00dfigj\u00e4hrigen Unabh\u00e4ngigkeitskrieg gegen \u00c4thiopien (1961\u20131991) hat sich Eritrea zu einem der abgeschottetsten Staaten der Welt entwickelt \u2013 st\u00e4ndige Kriegsbereitschaft als politisches Grundprinzip. Der zeitlich unbegrenzte Nationaldienst, dem praktisch jeder B\u00fcrger unterliegt, wird offiziell mit der permanenten Bedrohung durch \u00c4thiopien und Nachbarl\u00e4nder gerechtfertigt. Die Regierung unter Isaias Afwerki, seit der Unabh\u00e4ngigkeit ununterbrochen an der Macht, h\u00e4lt Presse- und Meinungsfreiheit aus erkl\u00e4rten Sicherheitsgr\u00fcnden fast vollst\u00e4ndig unterdr\u00fcckt. Die jahrzehntelange, zerm\u00fcrbende Erfahrung des Unabh\u00e4ngigkeitskampfs pr\u00e4gt bis in die Gegenwart ein kollektives Misstrauen gegen\u00fcber Au\u00dfenstehenden und internationalen Institutionen. Trotz eines Friedensabkommens mit \u00c4thiopien 2018 bleibt die Grenzregion milit\u00e4risch hochger\u00fcstet \u2013 Frieden wird als fragil und jederzeit widerrufbar wahrgenommen.", subtyp: "so6", subtypText: "Eritrea zeigt eine sehr ausgepr\u00e4gt soziale Sechs: Der zeitlich unbegrenzte Nationaldienst, dem praktisch jeder B\u00fcrger unterliegt, macht kollektive Wachsamkeit zum verpflichtenden, gemeinschaftlich getragenen Staatsprinzip gegen die permanente Bedrohung durch \u00c4thiopien und Nachbarl\u00e4nder. Die fast vollst\u00e4ndige Unterdr\u00fcckung von Presse- und Meinungsfreiheit aus erkl\u00e4rten Sicherheitsgr\u00fcnden zeigt, wie sehr Kontrolle \u00fcber die Gruppe als Ganzes im Vordergrund steht. Ein selbsterhaltender Unterton zeigt sich im tiefen, aus dem Unabh\u00e4ngigkeitskrieg stammenden Misstrauen gegen\u00fcber Au\u00dfenstehenden. Die sexuelle Sechs, die sich in trotziger Einzelkonfrontation zeigen w\u00fcrde, tritt hinter dieser breiten, staatlich organisierten Kriegsbereitschaft zur\u00fcck." },
    { name: "Namibia", iso: "NA", typ: 9, unsicher: false, text: "Nach der Unabh\u00e4ngigkeit von S\u00fcdafrika 1990 verfolgte Namibia eine bemerkenswert vers\u00f6hnliche Politik des nationalen Ausgleichs statt Vergeltung gegen\u00fcber der fr\u00fcheren Kolonial- und Apartheidsordnung. Die Verfassung sch\u00fctzt explizit alle ethnischen Gruppen und Sprachen gleicherma\u00dfen, in einem Land mit au\u00dfergew\u00f6hnlicher kultureller Vielfalt von Ovambo \u00fcber Herero bis San und deutschst\u00e4mmigen Namibiern. Die weiten, kargen Landschaften der Namib- und Kalahari-W\u00fcste pr\u00e4gen eine kulturelle Grundhaltung von Gelassenheit und Anpassung an ein karges, aber im Gleichgewicht gehaltenes \u00d6kosystem. Namibia gilt international als Vorreiter im gemeinschaftsbasierten Naturschutz (\u201eConservancies\u201c), bei dem lokale Gemeinschaften und Wildtiere in bewusst ausbalancierter Koexistenz leben. Trotz der Kolonial- und Apartheidsgeschichte pflegt das Land auch heute noch ungew\u00f6hnlich ruhige, undramatische zwischenethnische Beziehungen im s\u00fcdafrikanischen Vergleich.", subtyp: "so9", subtypText: "Namibia zeigt eine ausgepr\u00e4gt soziale Neun: Die Verfassung sch\u00fctzt explizit alle ethnischen Gruppen und Sprachen gleicherma\u00dfen, und die vers\u00f6hnliche Politik des nationalen Ausgleichs nach 1990 statt Vergeltung zeigt Harmonie als bewusst gew\u00e4hltes kollektives Prinzip trotz Kolonial- und Apartheidsgeschichte. Die \u201eConservancies\u201c, in denen lokale Gemeinschaften und Wildtiere in ausbalancierter Koexistenz leben, best\u00e4tigen dieses Muster gemeinschaftlich austarierten Gleichgewichts. Ein selbsterhaltender Anteil zeigt sich in der Anpassung an die kargen, aber im Gleichgewicht gehaltenen \u00d6kosysteme der Namib- und Kalahari-W\u00fcste. Die sexuelle Neun tritt hinter dieser breiten, ruhigen zwischenethnischen Koexistenz zur\u00fcck." },
    { name: "Sambia", iso: "ZM", typ: 9, unsicher: false, text: "Sambia gilt als eines der politisch stabilsten und friedlichsten L\u00e4nder im s\u00fcdlichen Afrika, mit einer bemerkenswerten Geschichte friedlicher Machtwechsel statt Putschen oder B\u00fcrgerkriegen seit der Unabh\u00e4ngigkeit 1964. \u00dcber siebzig ethnische Gruppen leben im Land weitgehend konfliktfrei zusammen, ohne die scharfen ethnischen Spannungen mancher Nachbarl\u00e4nder. Der erste Pr\u00e4sident Kenneth Kaunda pr\u00e4gte mit seiner Philosophie des \u201eHumanismus\u201c \u2013 Gemeinschaft, Ausgleich und Konsens vor Konfrontation \u2013 die politische Kultur des Landes nachhaltig. Trotz wirtschaftlicher Abh\u00e4ngigkeit vom Kupferabbau und wiederkehrender Krisen reagierte die sambische Bev\u00f6lkerung \u00fcberwiegend mit Anpassung und Geduld statt mit Unruhen. Die informelle, entspannte Alltagskultur, oft als \u201esambische Gelassenheit\u201c beschrieben, wird von Sambiern selbst als nationale Eigenart und Quelle des inneren Friedens des Landes verstanden.", subtyp: "so9", subtypText: "Sambia zeigt eine ausgepr\u00e4gt soziale Neun: Die Philosophie des \u201eHumanismus\u201c von Kenneth Kaunda \u2013 Gemeinschaft, Ausgleich und Konsens vor Konfrontation \u2013 pr\u00e4gte die politische Kultur des ganzen Landes, und \u00fcber siebzig ethnische Gruppen leben weitgehend konfliktfrei zusammen, ohne die Spannungen mancher Nachbarl\u00e4nder. Die bemerkenswerte Geschichte friedlicher Machtwechsel statt Putschen seit 1964 best\u00e4tigt dieses Muster kollektiver Harmonie. Ein selbsterhaltender Unterton zeigt sich in der \u00fcberwiegenden Reaktion mit Anpassung und Geduld statt Unruhen trotz wirtschaftlicher Krisen. Die sexuelle Neun tritt hinter dieser breiten, als \u201esambische Gelassenheit\u201c benannten Nationaleigenart zur\u00fcck." },
    { name: "Kap Verde", iso: "CV", typ: 9, unsicher: false, text: "Der Inselstaat Kap Verde vor der K\u00fcste Westafrikas gilt als eines der politisch stabilsten und friedlichsten L\u00e4nder Afrikas, mit einer bemerkenswert unaufgeregten demokratischen Kontinuit\u00e4t seit der Unabh\u00e4ngigkeit 1975. Die kreolische Kultur, entstanden aus der Vermischung afrikanischer und portugiesischer Einfl\u00fcsse, wird als harmonisches Miteinander statt als Konfliktlinie zwischen den Kulturen verstanden und gefeiert. Das Konzept der \u201eMorabeza\u201c \u2013 eine tief verwurzelte, warme Gastfreundschaft und Gelassenheit \u2013 pr\u00e4gt den kapverdischen Alltag und wird von den Bewohnern selbst als nationale Identit\u00e4t benannt. Trotz begrenzter nat\u00fcrlicher Ressourcen und h\u00e4ufiger D\u00fcrreperioden reagiert die Bev\u00f6lkerung traditionell mit Anpassung, Auswanderung und famili\u00e4rem Zusammenhalt statt mit Unruhen. Die melancholisch-sehnsuchtsvolle Morna-Musik, weltber\u00fchmt durch Ces\u00e1ria \u00c9vora, verarbeitet Verlust und Distanz auf eine leise, vers\u00f6hnliche statt aufgew\u00fchlte Weise.", subtyp: "se9", subtypText: "Kap Verde zeigt eine deutlich selbsterhaltende Neun: Trotz begrenzter nat\u00fcrlicher Ressourcen und h\u00e4ufiger D\u00fcrreperioden reagiert die Bev\u00f6lkerung traditionell mit Anpassung, Auswanderung und famili\u00e4rem Zusammenhalt statt mit Unruhen \u2013 Gelassenheit als praktische \u00dcberlebensstrategie unter kargen Bedingungen. Die \u201eMorabeza\u201c, eine tief verwurzelte, warme Gastfreundschaft, wird von den Bewohnern selbst als nationale Identit\u00e4t benannt und verbindet Selbsterhaltung mit gelebter W\u00e4rme im Alltag. Ein sozialer Anteil zeigt sich in der kreolischen Kultur, die als harmonisches Miteinander afrikanischer und portugiesischer Einfl\u00fcsse gefeiert wird. Die sexuelle Neun tritt hinter dieser leisen, famili\u00e4r verankerten Gelassenheit zur\u00fcck, wie sie auch die Morna-Musik in ged\u00e4mpfter Form ausdr\u00fcckt." },
    { name: "Dschibuti", iso: "DJ", typ: 6, unsicher: false, text: "Das kleine Dschibuti am strategisch wichtigen Bab-el-Mandeb, einer der meistbefahrenen Schifffahrtsrouten der Welt, hat seine Existenz seit der Unabh\u00e4ngigkeit 1977 vor allem durch geschickte Absicherung mittels ausl\u00e4ndischer Milit\u00e4rbasen statt eigener St\u00e4rke gesichert. Das Land beherbergt gleichzeitig Milit\u00e4rst\u00fctzpunkte der USA, Frankreichs, Japans und Chinas \u2013 eine bewusste Strategie, die eigene Sicherheit durch die Pr\u00e4senz mehrerer Gro\u00dfm\u00e4chte zugleich abzusichern. Die extreme Abh\u00e4ngigkeit von seinem Hafen als Handelsdrehscheibe f\u00fcr das binnenl\u00e4ndische \u00c4thiopien macht Absicherung von Handelsrouten und politische Stabilit\u00e4t zur obersten Priorit\u00e4t der Regierung. Pr\u00e4sident Isma\u00efl Omar Guelleh, seit 1999 an der Macht, rechtfertigt seine lange Amtszeit explizit mit dem Erhalt von Stabilit\u00e4t in einer instabilen Region. Die multiethnische Bev\u00f6lkerung aus Afar und Issa-Somali lebt trotz historischer Spannungen unter einem sorgf\u00e4ltig austarierten politischen Machtteilungssystem, das erneute Konflikte pr\u00e4ventiv verhindern soll.", subtyp: "se6", subtypText: "Dschibuti zeigt eine deutlich selbsterhaltende Sechs: Die Strategie, gleichzeitig Milit\u00e4rst\u00fctzpunkte der USA, Frankreichs, Japans und Chinas zu beherbergen, sichert die eigene Existenz bewusst durch die Pr\u00e4senz mehrerer Gro\u00dfm\u00e4chte statt durch eigene St\u00e4rke \u2013 Absicherung als zentrales \u00dcberlebensprinzip. Die extreme Abh\u00e4ngigkeit vom eigenen Hafen als Handelsdrehscheibe f\u00fcr das binnenl\u00e4ndische \u00c4thiopien macht die Absicherung von Handelsrouten zur obersten Priorit\u00e4t. Ein sozialer Anteil zeigt sich im sorgf\u00e4ltig austarierten Machtteilungssystem zwischen Afar und Issa-Somali zur pr\u00e4ventiven Konfliktvermeidung. Die sexuelle Sechs tritt hinter dieser vorsichtigen, auf \u00e4u\u00dfere Absicherung ausgerichteten \u00dcberlebensstrategie zur\u00fcck." },
    { name: "Komoren", iso: "KM", typ: 6, unsicher: false, text: "Die Komoren, ein Inselarchipel im Indischen Ozean, gelten als eines der politisch instabilsten L\u00e4nder der Welt mit \u00fcber 20 Putschversuchen seit der Unabh\u00e4ngigkeit 1975 \u2013 eine Geschichte, die tiefes Misstrauen gegen\u00fcber zentraler Macht und ein starkes Bed\u00fcrfnis nach Absicherung gepr\u00e4gt hat. Die komplexe Verfassungsstruktur mit rotierender Pr\u00e4sidentschaft zwischen den drei Hauptinseln (Grande Comore, Anjouan, Moh\u00e9li) wurde bewusst geschaffen, um erneute Sezessionsversuche und Machtk\u00e4mpfe zwischen den Inseln zu verhindern. Die anhaltend ungel\u00f6ste Frage um die vierte, von Frankreich verwaltete Insel Mayotte, die sich 1974 gegen die Unabh\u00e4ngigkeit entschied, bleibt eine offene nationale Wunde und Quelle st\u00e4ndiger diplomatischer Vorsicht gegen\u00fcber Frankreich. Die tief religi\u00f6se, sunnitisch-muslimische Bev\u00f6lkerung h\u00e4lt an traditionellen, absichernden Ritualen wie dem \u201eGrand Mariage\u201c fest, einer aufwendigen Hochzeitszeremonie, die soziale Stabilit\u00e4t und Status innerhalb der Gemeinschaft dauerhaft festigt. Wirtschaftliche Fragilit\u00e4t, unter anderem durch die starke Abh\u00e4ngigkeit von Vanille- und Ylang-Ylang-Exporten, verst\u00e4rkt eine kollektive Vorsicht gegen\u00fcber externen Schocks und Marktschwankungen.", subtyp: "so6", subtypText: "Die Komoren zeigen eine ausgepr\u00e4gt soziale Sechs: Die komplexe Verfassungsstruktur mit rotierender Pr\u00e4sidentschaft zwischen den drei Hauptinseln wurde bewusst geschaffen, um erneute Sezessionsversuche und Machtk\u00e4mpfe kollektiv zu verhindern \u2013 Absicherung durch ein austariertes Gruppensystem statt individuelle Macht. Der \u201eGrand Mariage\u201c, eine aufwendige Hochzeitszeremonie, die soziale Stabilit\u00e4t und Status innerhalb der Gemeinschaft dauerhaft festigt, best\u00e4tigt dieses Muster gemeinschaftlich abgesicherter Ordnung. Ein selbsterhaltender Unterton zeigt sich in der wirtschaftlichen Vorsicht angesichts der Abh\u00e4ngigkeit von Vanille- und Ylang-Ylang-Exporten. Die sexuelle Sechs tritt hinter diesem breiten, auf Machtteilung und Ritual gegr\u00fcndeten Sicherheitsstreben zur\u00fcck." },
    { name: "Mauritius", iso: "MU", typ: 9, unsicher: false, text: "Mauritius gilt als eines der ethnisch und religi\u00f6s vielf\u00e4ltigsten L\u00e4nder der Welt \u2013 Hindus, Muslime, Christen und Buddhisten unterschiedlichster Herkunft (indisch, afrikanisch, chinesisch, europ\u00e4isch) leben seit der Kolonialzeit in bemerkenswert konfliktarmer Koexistenz zusammen. Das Land wird regelm\u00e4\u00dfig als eines der stabilsten und friedlichsten Demokratien Afrikas ausgezeichnet, mit einer ununterbrochenen Geschichte friedlicher Machtwechsel seit der Unabh\u00e4ngigkeit 1968. Die \u201eRainbow Nation\u201c-Rhetorik, \u00e4hnlich wie in S\u00fcdafrika, wird auf Mauritius als gelebte Realit\u00e4t kultureller Durchmischung ohne gr\u00f6\u00dfere Spannungen verstanden. Feiertage aller gro\u00dfen Religionen werden landesweit gemeinsam begangen, was einen tief verwurzelten gesellschaftlichen Konsens des gegenseitigen Respekts widerspiegelt. Die Wirtschaft, einst fast vollst\u00e4ndig von Zuckerrohr abh\u00e4ngig, wurde behutsam und ausgewogen auf Tourismus, Textilindustrie und Finanzdienstleistungen diversifiziert, ohne abrupte gesellschaftliche Verwerfungen.", subtyp: "so9", subtypText: "Mauritius zeigt eine sehr ausgepr\u00e4gt soziale Neun: Hindus, Muslime, Christen und Buddhisten unterschiedlichster Herkunft leben seit der Kolonialzeit in bemerkenswert konfliktarmer Koexistenz, und das landesweit gemeinsame Begehen der Feiertage aller gro\u00dfen Religionen spiegelt einen tief verwurzelten gesellschaftlichen Konsens des gegenseitigen Respekts. Die ununterbrochene Geschichte friedlicher Machtwechsel seit 1968 best\u00e4tigt diese Priorit\u00e4t auf kollektiver Harmonie statt Konfrontation. Ein selbsterhaltender Anteil zeigt sich in der behutsamen, ausgewogenen wirtschaftlichen Diversifizierung ohne abrupte Verwerfungen. Die sexuelle Neun tritt hinter dieser breiten, multikulturellen \u201eRainbow Nation\u201c-Harmonie zur\u00fcck." },
    { name: "Seychellen", iso: "SC", typ: 9, unsicher: false, text: "Die Seychellen, ein Archipel aus 115 Inseln im Indischen Ozean, pflegen trotz ihrer Mischbev\u00f6lkerung aus afrikanischen, indischen, chinesischen und europ\u00e4ischen Wurzeln eine bemerkenswert konfliktarme, harmonische Kreolkultur. Das Land verzichtet bewusst auf Massentourismus zugunsten eines \u00f6kologisch ausgewogenen, nachhaltigen Modells \u2013 \u00fcber 50 Prozent der Landesfl\u00e4che stehen unter Naturschutz. Politische Spannungen der 1970er- und 80er-Jahre (Putsch, Einparteienherrschaft) wurden in den 1990er-Jahren durch einen bemerkenswert friedlichen \u00dcbergang zur Mehrparteiendemokratie beigelegt, ohne B\u00fcrgerkrieg oder anhaltende Gewalt. Die kreolische Sprache und Kultur, aus der Vermischung verschiedenster Einfl\u00fcsse entstanden, wird als verbindendes, undramatisches nationales Identit\u00e4tsangebot gepflegt statt als Konfliktlinie. Die geografische Abgeschiedenheit f\u00f6rdert eine kulturelle Grundhaltung des gelassenen, im Einklang mit der Natur lebenden Insellebens.", subtyp: "se9", subtypText: "Die Seychellen zeigen eine deutlich selbsterhaltende Neun: Der bewusste Verzicht auf Massentourismus zugunsten eines \u00f6kologisch ausgewogenen, nachhaltigen Modells \u2013 \u00fcber 50 Prozent der Landesfl\u00e4che stehen unter Naturschutz \u2013 zeigt Gelassenheit als praktisch gelebtes Gleichgewicht mit den eigenen begrenzten Ressourcen. Die geografische Abgeschiedenheit f\u00f6rdert diese Grundhaltung eines im Einklang mit der Natur lebenden Insellebens zus\u00e4tzlich. Ein sozialer Anteil zeigt sich im bemerkenswert friedlichen \u00dcbergang zur Mehrparteiendemokratie in den 1990er-Jahren und in der kreolischen Kultur als verbindendem nationalem Identit\u00e4tsangebot. Die sexuelle Neun tritt hinter dieser ruhigen, ressourcenbewussten Insel-Gelassenheit zur\u00fcck." },
    { name: "S\u00e3o Tom\u00e9 und Pr\u00edncipe", iso: "ST", typ: 9, unsicher: false, text: "S\u00e3o Tom\u00e9 und Pr\u00edncipe, der zweitkleinste Staat Afrikas, gilt trotz seiner kolonialen Vergangenheit als Sklaven- und Plantagenwirtschaft als eines der friedlichsten und politisch stabilsten L\u00e4nder des Kontinents. Nach der Unabh\u00e4ngigkeit von Portugal 1975 vollzog das Land einen vergleichsweise sanften \u00dcbergang von sozialistischer Einparteienherrschaft zu Mehrparteiendemokratie in den 1990er-Jahren, ohne gr\u00f6\u00dfere Gewalt. Die kleine, \u00fcberwiegend katholisch gepr\u00e4gte Bev\u00f6lkerung lebt auf den beiden Hauptinseln in enger d\u00f6rflicher Gemeinschaft, in der gegenseitige Unterst\u00fctzung und Ausgleich Vorrang vor Konkurrenz haben. Die einstige Kakao-Monokultur-Wirtschaft wurde nach ihrem Niedergang behutsam auf \u00d6kotourismus und nachhaltige Landwirtschaft umgestellt, statt auf abrupte, konflikttr\u00e4chtige wirtschaftliche Umbr\u00fcche zu setzen. Trotz erheblicher Armut bleibt das Land von den gewaltsamen Konflikten verschont, die andere westafrikanische Staaten ersch\u00fcttert haben \u2013 eine kulturelle Grundhaltung des Ausgleichs statt der Konfrontation.", subtyp: "se9", subtypText: "S\u00e3o Tom\u00e9 und Pr\u00edncipe zeigt eine deutlich selbsterhaltende Neun: Die kleine, d\u00f6rflich organisierte Bev\u00f6lkerung auf den beiden Hauptinseln lebt in enger Gemeinschaft, in der gegenseitige Unterst\u00fctzung und Ausgleich Vorrang vor Konkurrenz haben \u2013 Harmonie als praktisch gelebte Absicherung des gemeinsamen Alltags. Die behutsame Umstellung von der einstigen Kakao-Monokultur auf \u00d6kotourismus und nachhaltige Landwirtschaft statt abrupter Umbr\u00fcche best\u00e4tigt diese Vorsicht gegen\u00fcber Konfrontation. Ein sozialer Anteil zeigt sich im vergleichsweise sanften \u00dcbergang von Einparteienherrschaft zu Mehrparteiendemokratie ohne gr\u00f6\u00dfere Gewalt. Die sexuelle Neun tritt hinter dieser leisen, dorfnahen Ausgleichskultur zur\u00fcck." },
    { name: "Sudan", iso: "SD", typ: 8, unsicher: false, text: "Der seit April 2023 tobende B\u00fcrgerkrieg zwischen der sudanesischen Armee und den paramilit\u00e4rischen \u201eRapid Support Forces\u201c zeigt einen brutalen Machtkampf zweier milit\u00e4rischer F\u00fchrungspers\u00f6nlichkeiten, die keine Teilung der Macht akzeptieren wollen. Bereits zuvor pr\u00e4gten Jahrzehnte von Milit\u00e4rputschen (mindestens sechs seit der Unabh\u00e4ngigkeit 1956) eine politische Kultur, in der Macht meist \u00fcber die Waffe statt \u00fcber Institutionen erlangt und gesichert wird. Der jahrzehntelange B\u00fcrgerkrieg mit dem heutigen S\u00fcdsudan, der 2011 in dessen Abspaltung m\u00fcndete, zeigte bereits fr\u00fch die Bereitschaft, territoriale und ideologische Konflikte mit \u00e4u\u00dferster milit\u00e4rischer H\u00e4rte auszutragen. Die Krise in Darfur ab 2003, von den Vereinten Nationen als V\u00f6lkermord eingestuft, offenbarte eine r\u00fccksichtslose Durchsetzung ethnisch-politischer Vorherrschaft durch bewaffnete Milizen. Trotz enormer humanit\u00e4rer Kosten bleibt die direkte, gewaltsame Konfrontation rivalisierender Machtzentren bis auf den heutigen Tag das dominante Muster sudanesischer Politik.", subtyp: "sx8", subtypText: "Der Sudan zeigt eine ausgepr\u00e4gt sexuelle Acht: Der seit 2023 tobende B\u00fcrgerkrieg zwischen zwei milit\u00e4rischen F\u00fchrungspers\u00f6nlichkeiten, die keine Teilung der Macht akzeptieren wollen, zeigt Machtkampf als direkte Ein-gegen-einen-Konfrontation statt verhandelter Institutionen. Bereits die Jahrzehnte von Milit\u00e4rputschen und die Abspaltung des S\u00fcdsudan 2011 zeigten dieselbe Bereitschaft, territoriale und ideologische Konflikte mit \u00e4u\u00dferster pers\u00f6nlicher H\u00e4rte auszutragen. Ein selbsterhaltender Unterton zeigt sich im Griff um Ressourcen und Territorium als materielle Machtgrundlage. Die soziale Acht, die sich in organisierter Gruppenkonfrontation zeigen w\u00fcrde, tritt hinter diesem zugespitzten Zweikampf rivalisierender Anf\u00fchrer zur\u00fcck." },
    { name: "Somalia", iso: "SO", typ: 8, unsicher: false, text: "Somalia gilt seit dem Zusammenbruch der Zentralregierung 1991 als Musterbeispiel eines \u201egescheiterten Staates\u201c, in dem Clan-Milizen, Warlords und sp\u00e4ter die Terrorgruppe al-Shabaab um territoriale Kontrolle mit Waffengewalt konkurrieren. Die traditionelle Clan-Struktur, in der Zugeh\u00f6rigkeit und Loyalit\u00e4t \u00fcber Blutlinien organisiert sind, bestimmt bis heute reale Machtverh\u00e4ltnisse oft st\u00e4rker als formale Staatsinstitutionen. Somalische Piraterie vor der K\u00fcste am Golf von Aden, die in den 2000er-Jahren internationale Schlagzeilen machte, zeigte eine r\u00fccksichtslose Bereitschaft, wirtschaftliche Interessen mit direkter Gewaltandrohung durchzusetzen. Die international kaum anerkannte, aber de facto autonome Region Somaliland behauptet seit 1991 selbstbewusst ihre eigene Kontrolle \u00fcber ihr Territorium, ohne formale internationale Anerkennung abzuwarten. Trotz internationaler Interventionen (US-Einsatz 1993, sp\u00e4tere AU-Mission) bleibt die Durchsetzung von Macht durch bewaffnete St\u00e4rke statt durch verhandelte Institutionen das pr\u00e4gende Muster somalischer Politik.", subtyp: "se8", subtypText: "Somalia zeigt eine deutlich selbsterhaltende Acht: Die traditionelle Clan-Struktur, in der Zugeh\u00f6rigkeit und Loyalit\u00e4t \u00fcber Blutlinien organisiert sind, bestimmt reale Machtverh\u00e4ltnisse oft st\u00e4rker als formale Institutionen \u2013 \u00dcberleben und Schutz durch die eigene Blutlinie statt durch den Staat. Die somalische Piraterie vor dem Golf von Aden, die wirtschaftliche Interessen mit direkter Gewaltandrohung durchsetzte, best\u00e4tigt dieses Muster materiell motivierter Machtaus\u00fcbung. Ein sozialer Anteil zeigt sich im selbstbewussten, kollektiven Beharren der de facto autonomen Region Somaliland auf eigener Kontrolle. Die sexuelle Acht tritt hinter dieser breiten, auf Clan-Loyalit\u00e4t und Ressourcen gegr\u00fcndeten \u00dcberlebensstrategie zur\u00fcck." },
    { name: "Mali", iso: "ML", typ: 8, unsicher: false, text: "Mali erlebte seit 2012 eine Kette bewaffneter Konflikte \u2013 Tuareg-Aufstand, islamistische Besetzung des Nordens, franz\u00f6sische Milit\u00e4rintervention, mehrere Milit\u00e4rputsche (2012, 2020, 2021) \u2013 die einen Staat zeigen, in dem Macht wiederholt gewaltsam neu verteilt wird. Die Milit\u00e4rjunta unter Assimi Go\u00efta ersetzte 2022 die franz\u00f6sischen Truppen demonstrativ durch die russische Wagner-Gruppe (heute Africa Corps) \u2013 ein bewusster Schulterschluss mit einer weiteren machtorientierten, kompromisslosen Kraft. Dschihadistische Gruppen wie die JNIM kontrollieren gro\u00dfe Teile des Landes durch direkte territoriale Eroberung und Einsch\u00fcchterung der lokalen Bev\u00f6lkerung statt durch politische Verhandlung. Der historische Ruhm des mittelalterlichen Malireichs unter Mansa Musa, einst eines der reichsten und m\u00e4chtigsten Reiche der Welt, wird von der heutigen Milit\u00e4rf\u00fchrung bewusst als Symbol vergangener und zuk\u00fcnftiger nationaler St\u00e4rke beschworen. Die Ablehnung westlicher Einmischung und die selbstbewusste, oft konfrontative Rhetorik gegen\u00fcber Frankreich und der internationalen Gemeinschaft zeigen eine Politik demonstrativer Souver\u00e4nit\u00e4tsbehauptung durch H\u00e4rte statt Diplomatie.", subtyp: "so8", subtypText: "Mali zeigt eine ausgepr\u00e4gt soziale Acht: Der demonstrative Schulterschluss der Milit\u00e4rjunta mit der Wagner-Gruppe statt der franz\u00f6sischen Truppen zeigt Machtbehauptung als bewusst inszenierten kollektiven B\u00fcndniswechsel, und die selbstbewusste, konfrontative Rhetorik gegen\u00fcber Frankreich und der internationalen Gemeinschaft richtet sich an ein Publikum, nicht an einen einzelnen Gegner. Der beschworene historische Ruhm des Malireichs unter Mansa Musa als Symbol nationaler St\u00e4rke best\u00e4tigt dieses Muster kollektiver Machtdemonstration. Ein selbsterhaltender Anteil zeigt sich in der direkten territorialen Kontrolle dschihadistischer Gruppen wie der JNIM. Die sexuelle Acht tritt hinter dieser breiten, \u00f6ffentlich inszenierten Souver\u00e4nit\u00e4tsbehauptung zur\u00fcck." },
    { name: "Eswatini", iso: "SZ", typ: 6, unsicher: false, text: "Eswatini (fr\u00fcher Swasiland) ist die letzte absolute Monarchie Afrikas \u2013 K\u00f6nig Mswati III. regiert seit 1986 mit umfassender Kontrolle \u00fcber politische Parteien, die de facto verboten bleiben, aus erkl\u00e4rter Sorge vor Instabilit\u00e4t durch Parteienpluralismus. Die traditionelle \u201eUmhlanga\u201c-Zeremonie (Schilfrohrtanz) und andere jahrhundertealte Rituale werden bewusst als stabilisierende, Kontinuit\u00e4t stiftende nationale Traditionen gegen westlichen kulturellen Einfluss gepflegt. Nach Protesten f\u00fcr mehr Demokratie 2021, die gewaltsam niedergeschlagen wurden, verst\u00e4rkte die Regierung Sicherheitsapparat und Kontrolle \u00fcber abweichende Meinungen weiter. Die enge Anlehnung an S\u00fcdafrika, wirtschaftlich wie politisch, wird von der F\u00fchrung als notwendige Absicherung der eigenen kleinen Monarchie zwischen m\u00e4chtigeren Nachbarn verstanden. Traditionelle Ahnenverehrung und ein tief verwurzeltes hierarchisches Gesellschaftssystem bieten den B\u00fcrgern ein Gef\u00fchl geordneter, vorhersehbarer sozialer Sicherheit trotz begrenzter politischer Freiheiten.", subtyp: "se6", subtypText: "Eswatini zeigt eine deutlich selbsterhaltende Sechs: Die enge wirtschaftliche und politische Anlehnung an S\u00fcdafrika wird von der F\u00fchrung explizit als notwendige Absicherung der eigenen kleinen Monarchie zwischen m\u00e4chtigeren Nachbarn verstanden \u2013 Sicherheit durch Anlehnung an eine st\u00e4rkere Macht. Die verst\u00e4rkte Kontrolle \u00fcber abweichende Meinungen nach den Protesten von 2021 zeigt zus\u00e4tzliche Vorsicht gegen\u00fcber Instabilit\u00e4t. Ein sozialer Anteil zeigt sich im hierarchischen Gesellschaftssystem und der traditionellen Ahnenverehrung, die den B\u00fcrgern geordnete, vorhersehbare Sicherheit bieten. Die sexuelle Sechs, die sich in trotziger Konfrontation zeigen w\u00fcrde, tritt hinter dieser vorsichtigen, auf Kontinuit\u00e4t und Anlehnung gegr\u00fcndeten Absicherungsstrategie zur\u00fcck." },
    { name: "Burkina Faso", iso: "BF", typ: 8, unsicher: false, text: "Burkina Faso erlebte seit 2022 gleich zwei Milit\u00e4rputsche binnen eines Jahres, angef\u00fchrt vom heutigen Machthaber Ibrahim Traor\u00e9 \u2013 ein junger Offizier, der Macht durch entschlossenes milit\u00e4risches Handeln statt durch demokratische Legitimation ergriff. Angesichts massiver dschihadistischer Gewalt im Norden des Landes reagierte die Milit\u00e4rregierung mit einer Politik demonstrativer H\u00e4rte: Massenmobilisierung von \u201eVaterlandsverteidigern\u201c und aggressive Milit\u00e4roffensiven statt Verhandlungsl\u00f6sungen. Der Bruch mit der ehemaligen Kolonialmacht Frankreich, verbunden mit dem Rauswurf franz\u00f6sischer Truppen und der Hinwendung zu russischer Unterst\u00fctzung, wurde bewusst als selbstbewusste Machtdemonstration gegen\u00fcber dem Westen inszeniert. Traor\u00e9 positioniert sich rhetorisch als panafrikanischer Revolution\u00e4r in der Tradition Thomas Sankaras, dessen kompromisslose Rhetorik der Selbstbestimmung er explizit wiederbelebt. Die Bildung einer Allianz mit den ebenfalls von Milit\u00e4rjuntas regierten Nachbarn Mali und Niger (Alliance des \u00c9tats du Sahel) zeigt eine bewusste B\u00fcndelung milit\u00e4rischer Machtanspr\u00fcche gegen internationale Kritik.", subtyp: "so8", subtypText: "Burkina Faso zeigt eine ausgepr\u00e4gt soziale Acht: Die Bildung der Alliance des \u00c9tats du Sahel mit den ebenfalls von Milit\u00e4rjuntas regierten Nachbarn Mali und Niger zeigt eine bewusste, kollektive B\u00fcndelung milit\u00e4rischer Machtanspr\u00fcche gegen internationale Kritik statt Einzelkampf. Die Massenmobilisierung von \u201eVaterlandsverteidigern\u201c und Traor\u00e9s Selbstinszenierung als panafrikanischer Revolution\u00e4r in der Tradition Sankaras richten sich explizit an eine Bewegung, nicht nur an die eigene Machtposition. Ein selbsterhaltender Anteil zeigt sich in der aggressiven milit\u00e4rischen Reaktion auf die dschihadistische Bedrohung im Norden. Die sexuelle Acht tritt hinter dieser breiten, b\u00fcndnisorientierten Machtdemonstration zur\u00fcck." },
    { name: "Niger", iso: "NE", typ: 6, unsicher: false, text: "Niger, seit dem Milit\u00e4rputsch von 2023 von einer Junta unter General Abdourahamane Tiani regiert, rechtfertigt die Macht\u00fcbernahme explizit mit dem Versagen der Vorg\u00e4ngerregierung, das Land ausreichend gegen dschihadistische Bedrohungen aus der Sahelregion abzusichern. Die extrem lange, por\u00f6se Grenze zu instabilen Nachbarn (Mali, Libyen, Nigeria) wird von der Bev\u00f6lkerung seit Jahrzehnten als st\u00e4ndige Quelle der Verwundbarkeit wahrgenommen. Nach dem Putsch k\u00fcndigte die Regierung Milit\u00e4rabkommen mit westlichen Partnern (USA, Frankreich) auf und suchte stattdessen Absicherung durch neue, angeblich zuverl\u00e4ssigere B\u00fcndnisse mit Russland und den Nachbarjuntas. Die traditionelle nomadische Tuareg-Kultur im Norden pflegt seit Generationen eigene, informelle Sicherheitsnetzwerke gegen\u00fcber einem oft als abwesend empfundenen Zentralstaat. Trotz enormer Uranvorkommen, die das Land eigentlich wohlhabend machen k\u00f6nnten, bleibt wirtschaftliche und politische Absicherung gegen externe Abh\u00e4ngigkeit das dominante nationale Anliegen.", subtyp: "se6", subtypText: "Niger zeigt eine deutlich selbsterhaltende Sechs: Die extrem lange, por\u00f6se Grenze zu instabilen Nachbarn wird seit Jahrzehnten als st\u00e4ndige Quelle konkreter Verwundbarkeit wahrgenommen, und die K\u00fcndigung westlicher Milit\u00e4rabkommen zugunsten neuer, angeblich zuverl\u00e4ssigerer B\u00fcndnisse mit Russland zeigt die Suche nach materieller Absicherung durch wechselnde Partner. Trotz enormer Uranvorkommen bleibt wirtschaftliche und politische Absicherung gegen externe Abh\u00e4ngigkeit das dominante Anliegen. Ein sozialer Anteil zeigt sich in den informellen Sicherheitsnetzwerken der nomadischen Tuareg-Kultur. Die sexuelle Sechs tritt hinter dieser breiten, auf B\u00fcndnisse und Ressourcen gerichteten Absicherungsstrategie zur\u00fcck." },
    { name: "Tschad", iso: "TD", typ: 6, unsicher: false, text: "Der Tschad, geografisch von instabilen Nachbarn umgeben (Libyen, Sudan, Nigeria mit Boko Haram, Zentralafrikanische Republik), hat seine Politik \u00fcber Jahrzehnte konsequent auf Absicherung durch starke milit\u00e4rische B\u00fcndnisse ausgerichtet, zuletzt vor allem mit Frankreich. Die Pr\u00e4sidentendynastie D\u00e9by \u2013 Idriss D\u00e9by regierte von 1990 bis zu seinem Tod 2021 an der Front gegen Rebellen, sein Sohn Mahamat \u00fcbernahm anschlie\u00dfend direkt die Macht \u2013 zeigt ein System, das milit\u00e4rische Kontinuit\u00e4t \u00fcber demokratischen Wandel stellt, um Instabilit\u00e4t zu verhindern. Der Kampf gegen die Terrormiliz Boko Haram am Tschadsee wird von der Regierung als existenzielle Sicherheitsfrage behandelt, die massive Milit\u00e4rpr\u00e4senz in der Region rechtfertigt. Wiederkehrende Rebellenaufst\u00e4nde aus dem Nachbarland Libyen, teils mit direkten milit\u00e4rischen Vorst\u00f6\u00dfen auf die Hauptstadt N'Djamena, haben ein tiefes kollektives Bewusstsein st\u00e4ndiger \u00e4u\u00dferer Bedrohung gepr\u00e4gt. Die multiethnische, religi\u00f6s gemischte Bev\u00f6lkerung (muslimischer Norden, christlicherer S\u00fcden) wird durch ein bewusst austariertes, oft autorit\u00e4r abgesichertes Machtgleichgewicht zusammengehalten.", subtyp: "se6", subtypText: "Der Tschad zeigt eine deutlich selbsterhaltende Sechs: Die Politik ist \u00fcber Jahrzehnte konsequent auf Absicherung durch starke milit\u00e4rische B\u00fcndnisse, zuletzt vor allem mit Frankreich, ausgerichtet, und die Pr\u00e4sidentendynastie D\u00e9by stellt milit\u00e4rische Kontinuit\u00e4t bewusst \u00fcber demokratischen Wandel, um Instabilit\u00e4t zu verhindern. Wiederkehrende Rebellenaufst\u00e4nde aus Libyen, teils mit direkten Vorst\u00f6\u00dfen auf die Hauptstadt, haben ein tiefes kollektives Bewusstsein st\u00e4ndiger \u00e4u\u00dferer Bedrohung gepr\u00e4gt. Ein sozialer Anteil zeigt sich im austarierten Machtgleichgewicht zwischen muslimischem Norden und christlicherem S\u00fcden. Die sexuelle Sechs tritt hinter dieser breiten, b\u00fcndnisgest\u00fctzten Absicherungsstrategie zur\u00fcck." },
    { name: "Zentralafrikanische Republik", iso: "CF", typ: 8, unsicher: false, text: "Die Zentralafrikanische Republik gilt seit ihrer Unabh\u00e4ngigkeit 1960 als eines der von Machtk\u00e4mpfen am st\u00e4rksten gepr\u00e4gten L\u00e4nder Afrikas \u2013 von Kaiser Bokassas exzentrischer, gewaltsamer Selbstkr\u00f6nung 1976 bis zu wiederkehrenden bewaffneten Rebellionen der S\u00e9l\u00e9ka- und Anti-Balaka-Milizen seit 2013. Territoriale Kontrolle wird im Land traditionell weniger durch staatliche Institutionen als durch bewaffnete Gruppen und deren direkte Gewaltandrohung gegen\u00fcber der Zivilbev\u00f6lkerung ausge\u00fcbt. Pr\u00e4sident Faustin-Archange Touad\u00e9ra st\u00fctzt seine Macht seit 2018 ma\u00dfgeblich auf die russische Wagner-Gruppe (heute Africa Corps), die im Austausch gegen Sicherheitsgarantien weitreichenden Zugriff auf Rohstoffvorkommen erhielt \u2013 Macht gegen Ressourcen als politisches Grundprinzip. Die enormen Diamanten- und Goldvorkommen des Landes wurden historisch selten zum kollektiven Wohlstand genutzt, sondern h\u00e4ufig zum Gegenstand bewaffneter Kontrolle durch jeweils herrschende Fraktionen. Direkte milit\u00e4rische Konfrontation statt politischer Verhandlung bleibt nach wie vor das bestimmende Muster, mit dem konkurrierende Akteure ihre Anspr\u00fcche auf Territorium und Ressourcen durchsetzen.", subtyp: "se8", subtypText: "Die Zentralafrikanische Republik zeigt eine deutlich selbsterhaltende Acht: Territoriale Kontrolle wird traditionell weniger durch staatliche Institutionen als durch bewaffnete Gruppen und deren direkte Gewaltandrohung ausge\u00fcbt, und Pr\u00e4sident Touad\u00e9ra st\u00fctzt seine Macht auf die Wagner-Gruppe im Austausch gegen weitreichenden Zugriff auf Rohstoffvorkommen \u2013 Macht gegen Ressourcen als politisches Grundprinzip. Die enormen Diamanten- und Goldvorkommen wurden historisch selten zum kollektiven Wohlstand genutzt, sondern zum Gegenstand bewaffneter Kontrolle. Ein sozialer Anteil zeigt sich in den organisierten Milizen S\u00e9l\u00e9ka und Anti-Balaka. Die sexuelle Acht tritt hinter diesem breiten, ressourcengetriebenen Machtkampf zur\u00fcck." },
    { name: "Gabun", iso: "GA", typ: 3, unsicher: false, text: "Gabun, dank Erd\u00f6lvorkommen eines der wohlhabendsten L\u00e4nder Afrikas pro Kopf, pr\u00e4sentierte sich unter der Bongo-Dynastie (1967\u20132023) international lange als stabiler, moderner Musterstaat der Region. Die Hauptstadt Libreville wurde mit sichtbarem Prunk \u2013 breiten Boulevards, modernen Regierungsgeb\u00e4uden, internationalen Konferenzzentren \u2013 als Schaufenster wirtschaftlichen Erfolgs inszeniert. Gabun positionierte sich international gezielt als Vorreiter des Naturschutzes, mit rund 11 Prozent der Landesfl\u00e4che als Nationalparks \u2013 ein bewusst gepflegtes, international anerkanntes Umweltimage. Trotz Erd\u00f6lreichtums blieb die Einkommensverteilung extrem ungleich, was jahrzehntelang durch demonstrativen Wohlstand der herrschenden Elite und internationale Anerkennung \u00fcberdeckt wurde statt durch soziale Reformen adressiert. Der Milit\u00e4rputsch von 2023, der die Bongo-Dynastie beendete, wurde von der neuen F\u00fchrung ausdr\u00fccklich als Chance pr\u00e4sentiert, das Land international neu als Erfolgsgeschichte der Erneuerung zu positionieren.", subtyp: "so3", subtypText: "Gabun zeigt eine ausgepr\u00e4gt soziale Drei: Libreville wurde mit sichtbarem Prunk \u2013 breiten Boulevards, modernen Regierungsgeb\u00e4uden, internationalen Konferenzzentren \u2013 bewusst als Schaufenster wirtschaftlichen Erfolgs f\u00fcr ein internationales Publikum inszeniert, und die Positionierung als Vorreiter des Naturschutzes mit rund 11 Prozent Nationalparkfl\u00e4che diente demselben international anerkannten Erfolgsimage. Der Milit\u00e4rputsch von 2023 wurde von der neuen F\u00fchrung ausdr\u00fccklich als Chance genutzt, das Land erneut als Erfolgsgeschichte zu positionieren. Ein selbsterhaltender Anteil zeigt sich im demonstrativen Wohlstand der herrschenden Elite trotz ungleicher Einkommensverteilung. Die sexuelle Drei tritt hinter diesem breiten, auf internationale Anerkennung gerichteten Erfolgsimage zur\u00fcck." },
    { name: "Republik Kongo", iso: "CG", typ: 8, unsicher: false, text: "Die Republik Kongo (Kongo-Brazzaville) wird seit fast vier Jahrzehnten von Pr\u00e4sident Denis Sassou Nguesso regiert, der seine Macht 1997 nach einem blutigen B\u00fcrgerkrieg gegen den demokratisch gew\u00e4hlten Pr\u00e4sidenten Lissouba gewaltsam zur\u00fcckeroberte. Die Kontrolle \u00fcber die enormen Erd\u00f6lvorkommen des Landes wurde historisch weniger transparent verwaltet als vielmehr als Machtinstrument zur Absicherung der eigenen Herrschaft und Patronage-Netzwerke genutzt. Wiederholte Verfassungs\u00e4nderungen, zuletzt 2015, wurden gezielt genutzt, um Amtszeitbegrenzungen aufzuheben und die pers\u00f6nliche Machtkonzentration des Pr\u00e4sidenten zu verl\u00e4ngern. Bewaffnete Milizen (\u201eNinja\u201c-K\u00e4mpfer) im B\u00fcrgerkrieg der 1990er-Jahre zeigten, dass politische Auseinandersetzungen im Land wiederholt \u00fcber direkte milit\u00e4rische Konfrontation statt \u00fcber Institutionen ausgetragen wurden. Die enge, oft r\u00fccksichtslose Verflechtung von \u00d6leinnahmen, pers\u00f6nlicher Bereicherung der F\u00fchrungsschicht und Absicherung der eigenen Macht bleibt noch heute das bestimmende politische Muster des Landes.", subtyp: "se8", subtypText: "Die Republik Kongo zeigt eine deutlich selbsterhaltende Acht: Die Kontrolle \u00fcber die enormen Erd\u00f6lvorkommen wurde historisch als Machtinstrument zur Absicherung der eigenen Herrschaft und der Patronage-Netzwerke genutzt, und wiederholte Verfassungs\u00e4nderungen dienten gezielt dazu, Amtszeitbegrenzungen aufzuheben und die pers\u00f6nliche Machtkonzentration zu verl\u00e4ngern. Sassou Nguessos gewaltsame R\u00fcckeroberung der Macht 1997 nach dem B\u00fcrgerkrieg gegen Lissouba best\u00e4tigt dieses Muster materiell abgesicherter Herrschaft. Ein sozialer Anteil zeigt sich in den organisierten \u201eNinja\u201c-Milizen des B\u00fcrgerkriegs. Die sexuelle Acht tritt hinter dieser breiten, auf Ressourcen und pers\u00f6nliche Bereicherung gerichteten Machtabsicherung zur\u00fcck." },
    { name: "Angola", iso: "AO", typ: 3, unsicher: false, text: "Angola, nach jahrzehntelangem B\u00fcrgerkrieg (1975\u20132002) reich an Erd\u00f6l- und Diamantenvorkommen, pr\u00e4sentierte sich unter Pr\u00e4sident Jos\u00e9 Eduardo dos Santos und seiner Tochter Isabel als aufstrebende Wirtschaftsmacht mit spektakul\u00e4ren Wiederaufbauprojekten in Luanda, einer der teuersten St\u00e4dte der Welt f\u00fcr Expatriates. Die \u201eMarginal\u201c-Uferpromenade Luandas mit ihren Wolkenkratzern wurde bewusst als Symbol nationalen wirtschaftlichen Aufstiegs nach dem B\u00fcrgerkrieg inszeniert. Isabel dos Santos, einst als reichste Frau Afrikas gefeiert, verk\u00f6rperte \u00fcber Jahre demonstrativ unternehmerischen Erfolg als nationales Aush\u00e4ngeschild, bevor Korruptionsvorw\u00fcrfe ihr Image besch\u00e4digten. Angola positioniert sich international zunehmend als Standort ausl\u00e4ndischer Investitionen und wirtschaftlicher Diversifizierung, um von der reinen \u00d6labh\u00e4ngigkeit wegzukommen und neuen Erfolg zu demonstrieren. Trotz enormer Einnahmen aus Rohstoffexporten bleibt die sichtbare Zurschaustellung wirtschaftlichen Erfolgs der herrschenden Elite ein auff\u00e4lliges nationales Muster gegen\u00fcber breiterer sozialer Entwicklung.", subtyp: "se3", subtypText: "Angola zeigt eine deutlich selbsterhaltende Drei: Die \u201eMarginal\u201c-Uferpromenade Luandas mit ihren Wolkenkratzern wurde bewusst als Symbol nationalen wirtschaftlichen Aufstiegs nach dem B\u00fcrgerkrieg inszeniert, und die sichtbare Zurschaustellung wirtschaftlichen Erfolgs der herrschenden Elite \u2013 bis hin zu Luanda als einer der teuersten St\u00e4dte der Welt f\u00fcr Expatriates \u2013 zeigt Statuserwerb \u00fcber konkreten materiellen Besitz. Isabel dos Santos, einst als reichste Frau Afrikas gefeiert, verk\u00f6rperte \u00fcber Jahre demonstrativ unternehmerischen Erfolg als pers\u00f6nliches Verm\u00f6gen. Ein sozialer Anteil zeigt sich in der internationalen Positionierung als Investitionsstandort. Die sexuelle Drei tritt hinter diesem breiten, materiell demonstrierten Wohlstand zur\u00fcck." },
    { name: "Mosambik", iso: "MZ", typ: 6, unsicher: false, text: "Mosambik, nach einem verheerenden 16-j\u00e4hrigen B\u00fcrgerkrieg (1977\u20131992) zwischen Regierung und RENAMO-Rebellen, hat seither eine politische Kultur entwickelt, die stark auf Absicherung durch Friedensabkommen und internationale Vermittlung setzt. Die anhaltende dschihadistische Aufstandsbewegung in der n\u00f6rdlichen Provinz Cabo Delgado seit 2017, verbunden mit brutalen Angriffen auf Zivilisten, hat ein tiefes kollektives Sicherheitsbed\u00fcrfnis verst\u00e4rkt und internationale Milit\u00e4rhilfe (Ruanda, SADC) notwendig gemacht. Wiederholt aufflammende Spannungen mit der ehemaligen Rebellenbewegung RENAMO, auch nach offiziellem Kriegsende, zeigen ein anhaltendes Misstrauen zwischen den einstigen B\u00fcrgerkriegsparteien. Die extreme Anf\u00e4lligkeit f\u00fcr Naturkatastrophen (verheerende Zyklone wie Idai 2019) hat zus\u00e4tzlich eine kulturelle Grundhaltung der Vorsicht und des Bem\u00fchens um Absicherung gegen unvorhersehbare Bedrohungen gef\u00f6rdert. Trotz erheblicher Gasvorkommen vor der K\u00fcste bleibt politische und soziale Stabilit\u00e4t, nicht wirtschaftliche Expansion, das erkl\u00e4rte oberste Regierungsziel.", subtyp: "se6", subtypText: "Mosambik zeigt eine deutlich selbsterhaltende Sechs: Die politische Kultur setzt seit dem verheerenden B\u00fcrgerkrieg stark auf Absicherung durch Friedensabkommen und internationale Vermittlung, und die extreme Anf\u00e4lligkeit f\u00fcr Naturkatastrophen wie den Zyklon Idai 2019 hat eine kulturelle Grundhaltung der Vorsicht und des Bem\u00fchens um Absicherung gegen unvorhersehbare Bedrohungen gef\u00f6rdert. Die dschihadistische Aufstandsbewegung in Cabo Delgado seit 2017 verst\u00e4rkte das kollektive Sicherheitsbed\u00fcrfnis zus\u00e4tzlich. Ein sozialer Anteil zeigt sich im anhaltenden Misstrauen zwischen den einstigen B\u00fcrgerkriegsparteien. Die sexuelle Sechs tritt hinter dieser breiten, auf Absicherung und Stabilit\u00e4t gerichteten Grundhaltung zur\u00fcck." },
    { name: "Malawi", iso: "MW", typ: 9, unsicher: false, text: "Malawi gilt trotz erheblicher Armut als eines der politisch stabilsten und friedlichsten L\u00e4nder im s\u00fcdlichen Afrika, oft als \u201edas warme Herz Afrikas\u201c bezeichnet \u2013 ein Name, den die Bewohner selbst aktiv pflegen. Die traditionelle Gastfreundschaftskultur, tief in Dorfstrukturen verwurzelt, betont gegenseitige F\u00fcrsorge und Ausgleich gegen\u00fcber Fremden ebenso wie Nachbarn. Nach dem Ende der autorit\u00e4ren Herrschaft Hastings Bandas 1994 vollzog das Land einen bemerkenswert friedlichen, unblutigen \u00dcbergang zur Mehrparteiendemokratie ohne B\u00fcrgerkrieg. Die historisch verwurzelte matrilineare Gesellschaftsstruktur in weiten Teilen des Landes, in der Erbfolge \u00fcber die weibliche Linie l\u00e4uft, f\u00f6rdert traditionell auf Konsens statt Konfrontation ausgerichtete Familien- und Gemeinschaftsstrukturen. Trotz wiederkehrender wirtschaftlicher Krisen und Naturkatastrophen reagiert die Bev\u00f6lkerung \u00fcberwiegend mit gemeinschaftlicher Anpassung und gegenseitiger Unterst\u00fctzung statt mit politischer Radikalisierung.", subtyp: "so9", subtypText: "Malawi zeigt eine sehr ausgepr\u00e4gt soziale Neun: Der Name \u201edas warme Herz Afrikas\u201c, den die Bewohner selbst aktiv pflegen, und die traditionelle, tief in Dorfstrukturen verwurzelte Gastfreundschaftskultur betonen gegenseitige F\u00fcrsorge und Ausgleich gegen\u00fcber Fremden wie Nachbarn. Die matrilineare Gesellschaftsstruktur, in der Erbfolge \u00fcber die weibliche Linie l\u00e4uft, f\u00f6rdert traditionell auf Konsens statt Konfrontation ausgerichtete Familien- und Gemeinschaftsstrukturen. Der bemerkenswert friedliche, unblutige \u00dcbergang zur Mehrparteiendemokratie 1994 best\u00e4tigt diese Priorit\u00e4t auf Harmonie. Ein selbsterhaltender Anteil zeigt sich in der gemeinschaftlichen Anpassung bei wirtschaftlichen Krisen. Die sexuelle Neun tritt hinter dieser breiten, gastfreundlichen Gemeinschaftskultur zur\u00fcck." },
    { name: "Lesotho", iso: "LS", typ: 6, unsicher: false, text: "Lesotho, ein Binnenstaat, der vollst\u00e4ndig von S\u00fcdafrika umschlossen ist, hat seine gesamte nationale Existenz auf einer historischen Strategie der Absicherung gegen\u00fcber dem \u00fcberm\u00e4chtigen Nachbarn aufgebaut. K\u00f6nig Moshoeshoe I. sicherte im 19. Jahrhundert das \u00dcberleben seines Volkes durch geschickte diplomatische B\u00fcndnisse mit den Briten gegen konkurrierende Buren-Anspr\u00fcche, statt milit\u00e4rischen Widerstand allein zu riskieren. Wiederholte politische Krisen und Milit\u00e4rinterventionen der s\u00fcdafrikanischen Entwicklungsgemeinschaft (SADC), zuletzt nach der Krise von 2014, zeigen die anhaltende Abh\u00e4ngigkeit des kleinen Landes von externer Absicherung seiner eigenen Stabilit\u00e4t. Die Wirtschaft ist fast vollst\u00e4ndig mit S\u00fcdafrika verflochten \u2013 von der gemeinsamen W\u00e4hrungsanbindung bis zur Abh\u00e4ngigkeit von s\u00fcdafrikanischen Wasserabkommen (Lesotho-Hochland-Wasserprojekt) als zentrale Einnahmequelle. Die Bergkultur des Landes, mit traditionellen Basotho-H\u00fcten und -Decken als Schutz vor dem rauen Hochlandklima, spiegelt symbolisch eine tief verwurzelte kulturelle Grundhaltung der Vorsorge und des Schutzes gegen widrige \u00e4u\u00dfere Bedingungen wider.", subtyp: "se6", subtypText: "Lesotho zeigt eine sehr ausgepr\u00e4gt selbsterhaltende Sechs: K\u00f6nig Moshoeshoe I. sicherte im 19. Jahrhundert das \u00dcberleben seines Volkes durch geschickte diplomatische B\u00fcndnisse statt milit\u00e4rischen Widerstand, und die Wirtschaft ist bis in die Gegenwart fast vollst\u00e4ndig mit S\u00fcdafrika verflochten \u2013 von der W\u00e4hrungsanbindung bis zum Wasserabkommen als zentraler Einnahmequelle. Die traditionellen Basotho-H\u00fcte und -Decken als Schutz vor dem rauen Hochlandklima spiegeln symbolisch dieselbe Grundhaltung der Vorsorge. Ein sozialer Anteil zeigt sich in der wiederholten Abh\u00e4ngigkeit von externer Absicherung durch die SADC. Die sexuelle Sechs tritt hinter dieser tief verwurzelten, auf B\u00fcndnis und Vorsorge gegr\u00fcndeten \u00dcberlebensstrategie zur\u00fcck." },
    { name: "Gambia", iso: "GM", typ: 9, unsicher: false, text: "Gambia, das kleinste Land Festlandafrikas, das sich als schmaler Streifen um den Fluss Gambia schl\u00e4ngelt und fast vollst\u00e4ndig vom gr\u00f6\u00dferen Senegal umschlossen wird, vollzog 2017 einen bemerkenswert friedlichen Machtwechsel: Der langj\u00e4hrige Diktator Yahya Jammeh gab nach seiner Wahlniederlage schlie\u00dflich dem diplomatischen Druck der westafrikanischen Nachbarn nach und ging ohne B\u00fcrgerkrieg ins Exil. Die ethnisch vielf\u00e4ltige Bev\u00f6lkerung (Mandinka, Fula, Wolof und weitere Gruppen) lebt traditionell in enger, konfliktarmer d\u00f6rflicher Nachbarschaft zusammen. Als eines der kleinsten und \u00e4rmsten L\u00e4nder Afrikas setzt Gambia bewusst auf sanften \u00d6kotourismus entlang des Flusses statt auf aggressive wirtschaftliche Expansion. Die \u201eWahrheits-, Vers\u00f6hnungs- und Reparationskommission\u201c nach Jammehs Sturz verfolgte explizit einen Weg des Ausgleichs und der Aufarbeitung statt der Vergeltung gegen\u00fcber fr\u00fcheren T\u00e4tern. Die Bev\u00f6lkerung Gambias gilt regional als besonders freundlich und gastfreundlich, was sich im inoffiziellen Beinamen \u201eSmiling Coast of Africa\u201c widerspiegelt.", subtyp: "so9", subtypText: "Gambia zeigt eine ausgepr\u00e4gt soziale Neun: Der bemerkenswert friedliche Machtwechsel 2017, bei dem Diktator Yahya Jammeh dem diplomatischen Druck der westafrikanischen Nachbarn nachgab statt B\u00fcrgerkrieg zu riskieren, und die \u201eWahrheits-, Vers\u00f6hnungs- und Reparationskommission\u201c, die explizit Ausgleich statt Vergeltung verfolgte, zeigen kollektive Harmonie als bewusst gew\u00e4hltes politisches Prinzip. Die ethnisch vielf\u00e4ltige Bev\u00f6lkerung, die traditionell in enger, konfliktarmer d\u00f6rflicher Nachbarschaft zusammenlebt, best\u00e4tigt dieses Muster. Ein selbsterhaltender Anteil zeigt sich im bewussten Setzen auf sanften \u00d6kotourismus statt aggressiver Expansion. Die sexuelle Neun tritt hinter diesem als \u201eSmiling Coast\u201c bekannten, breiten Gemeinschaftsfrieden zur\u00fcck." },
    { name: "Guinea", iso: "GN", typ: 8, unsicher: false, text: "Guinea erlebte 2021 einen Milit\u00e4rputsch unter Oberst Mamadi Doumbouya, der den langj\u00e4hrigen Pr\u00e4sidenten Alpha Cond\u00e9 absetzte, nachdem dieser zuvor selbst die Verfassung ge\u00e4ndert hatte, um sich eine dritte Amtszeit zu sichern \u2013 ein Muster wiederholter, gewaltsamer Macht\u00fcbernahmen seit der Unabh\u00e4ngigkeit 1958. Bereits der erste Pr\u00e4sident S\u00e9kou Tour\u00e9 regierte drei Jahrzehnte mit harter Hand, mit tausenden Inhaftierten und Hingerichteten in einem der repressivsten Regime Westafrikas. Guinea besitzt die weltweit gr\u00f6\u00dften Bauxitreserven, deren Kontrolle historisch wiederholt zum Objekt erbitterter Machtk\u00e4mpfe zwischen Regierung, internationalen Konzernen und lokalen Eliten wurde. Die aktuelle Milit\u00e4rjunta rechtfertigt ihre fortgesetzte Kontrolle mit dem Versprechen einer \u201e\u00dcbergangsphase\u201c, verschob demokratische Wahlen jedoch wiederholt zugunsten der eigenen Machtkonsolidierung. Direkte, oft brutale Niederschlagung von Protesten gegen die jeweilige Regierung bleibt seit Jahrzehnten das bestimmende Muster politischer Auseinandersetzung im Land.", subtyp: "se8", subtypText: "Guinea zeigt eine deutlich selbsterhaltende Acht: Die weltweit gr\u00f6\u00dften Bauxitreserven wurden historisch wiederholt zum Objekt erbitterter Machtk\u00e4mpfe zwischen Regierung, internationalen Konzernen und lokalen Eliten \u2013 Kontrolle \u00fcber konkrete Ressourcen als zentrales Machtziel. Bereits S\u00e9kou Tour\u00e9 regierte drei Jahrzehnte mit harter Hand \u00fcber eines der repressivsten Regime Westafrikas, um seine Machtbasis materiell abzusichern. Ein sozialer Anteil zeigt sich im Muster wiederholter, kollektiv getragener Milit\u00e4rputsche seit der Unabh\u00e4ngigkeit 1958. Die sexuelle Acht tritt hinter diesem breiten, auf Ressourcenkontrolle gerichteten Machtkampf zur\u00fcck." },
    { name: "Guinea-Bissau", iso: "GW", typ: 6, unsicher: false, text: "Guinea-Bissau gilt als eines der politisch instabilsten L\u00e4nder der Welt, mit mehreren Dutzend versuchten oder erfolgreichen Milit\u00e4rputschen seit der Unabh\u00e4ngigkeit 1974 \u2013 kein einziger gew\u00e4hlter Pr\u00e4sident hat je seine regul\u00e4re Amtszeit vollst\u00e4ndig beendet. Diese permanente politische Unsicherheit hat ein tiefes kollektives Misstrauen gegen\u00fcber staatlichen Institutionen gepr\u00e4gt, verst\u00e4rkt durch die massive Durchdringung des Landes durch internationalen Drogenschmuggel seit den 2000er-Jahren, der Staat und Milit\u00e4r zus\u00e4tzlich unterwandert. Die traditionellen Dorfstrukturen und \u00c4ltestenr\u00e4te bieten in Abwesenheit verl\u00e4sslicher zentralstaatlicher Institutionen ein informelles, absicherndes soziales Netz. Die enge sicherheitspolitische Anlehnung an die Wirtschaftsgemeinschaft Westafrikanischer Staaten (ECOWAS), die wiederholt milit\u00e4risch eingriff, um Putsche zu verhindern oder r\u00fcckg\u00e4ngig zu machen, zeigt die Abh\u00e4ngigkeit von externer Stabilisierung. Die Bev\u00f6lkerung reagiert auf die anhaltende politische Volatilit\u00e4t meist mit vorsichtiger Zur\u00fcckhaltung und dem R\u00fcckzug auf famili\u00e4re und d\u00f6rfliche Absicherungsnetzwerke statt auf offene Konfrontation.", subtyp: "se6", subtypText: "Guinea-Bissau zeigt eine deutlich selbsterhaltende Sechs: Die Bev\u00f6lkerung reagiert auf die anhaltende politische Volatilit\u00e4t meist mit vorsichtiger Zur\u00fcckhaltung und dem R\u00fcckzug auf famili\u00e4re und d\u00f6rfliche Absicherungsnetzwerke statt auf offene Konfrontation, und die traditionellen Dorfstrukturen und \u00c4ltestenr\u00e4te bieten in Abwesenheit verl\u00e4sslicher zentralstaatlicher Institutionen ein informelles, absicherndes soziales Netz. Die massive Durchdringung durch internationalen Drogenschmuggel, der Staat und Milit\u00e4r zus\u00e4tzlich unterwandert, verst\u00e4rkt das kollektive Misstrauen gegen\u00fcber Institutionen. Ein sozialer Anteil zeigt sich in der Abh\u00e4ngigkeit von externer Stabilisierung durch die ECOWAS. Die sexuelle Sechs tritt hinter dieser vorsichtigen, famili\u00e4r verankerten R\u00fcckzugsstrategie zur\u00fcck." },
    { name: "Sierra Leone", iso: "SL", typ: 4, unsicher: false, text: "Sierra Leone tr\u00e4gt auch heute noch ein tiefes, unverwechselbares nationales Trauma aus dem elfj\u00e4hrigen B\u00fcrgerkrieg (1991\u20132002), gepr\u00e4gt von der ber\u00fcchtigten Praxis der Amputationen durch Rebellengruppen und dem internationalen Bekanntwerden der \u201eBlutdiamanten\u201c \u2013 ein Leid, das die nationale Identit\u00e4t nachhaltig pr\u00e4gte. Die \u201eSpecial Court for Sierra Leone\u201c, ein einzigartiges Hybridgericht aus nationalem und internationalem Recht, wurde eigens geschaffen, um die Kriegsverbrechen dieser besonderen Geschichte juristisch aufzuarbeiten. Die weltber\u00fchmte Krwio-Kultur und die einzigartige Geschichte Freetowns als Zufluchtsort befreiter Sklaven im 18./19. Jahrhundert verleihen dem Land eine kulturelle Identit\u00e4t, die sich deutlich von Nachbarl\u00e4ndern unterscheidet. Ehemalige Kindersoldaten und Amputierte des B\u00fcrgerkriegs k\u00e4mpfen bis auf den heutigen Tag um Anerkennung ihres besonderen, oft unvergleichbaren Leidenswegs sowie um Wiedereingliederung in die Gesellschaft. Die anhaltende Ebola-Krise 2014\u20132016, die das Land besonders schwer traf, wurde von den Bewohnern selbst als weiteres Kapitel eines einzigartigen nationalen Schicksals der Widerstandsf\u00e4higkeit gegen wiederholte Katastrophen verstanden.", subtyp: "so4", subtypText: "Sierra Leone zeigt eine ausgepr\u00e4gt soziale Vier: Das Leid aus dem elfj\u00e4hrigen B\u00fcrgerkrieg, gepr\u00e4gt von der ber\u00fcchtigten Praxis der Amputationen und den international bekannt gewordenen \u201eBlutdiamanten\u201c, pr\u00e4gte die nationale Identit\u00e4t als kollektiv geteilte, unvergleichbare Erfahrung, und die eigens geschaffene \u201eSpecial Court for Sierra Leone\u201c unterstreicht den Anspruch, diese besondere Geschichte einzigartig aufzuarbeiten. Die Ebola-Krise 2014\u20132016 wurde von den Bewohnern selbst als weiteres Kapitel eines einzigartigen nationalen Schicksals verstanden. Ein selbsterhaltender Anteil zeigt sich im anhaltenden Kampf ehemaliger Kindersoldaten und Amputierter um Wiedereingliederung. Die sexuelle Vier tritt hinter diesem breiten, kollektiv geteilten Alleinstellungsbewusstsein zur\u00fcck." },
    { name: "Liberia", iso: "LR", typ: 4, unsicher: false, text: "Liberia tr\u00e4gt eine einzigartige nationale Gr\u00fcndungsgeschichte ohne Vergleich in Afrika: 1847 als erste unabh\u00e4ngige Republik des Kontinents von befreiten amerikanischen Sklaven gegr\u00fcndet, mit einer Verfassung und Flagge, die bewusst den USA nachempfunden wurden \u2013 ein unverwechselbares kulturelles Erbe zwischen amerikanischer und afrikanischer Identit\u00e4t. Die tiefen Spannungen zwischen dieser amerikanisch-liberianischen Gr\u00fcnderelite und der einheimischen Bev\u00f6lkerungsmehrheit pr\u00e4gten \u00fcber Jahrzehnte ein besonderes, oft schmerzhaftes nationales Identit\u00e4tsproblem. Der B\u00fcrgerkrieg (1989\u20132003), einer der brutalsten Afrikas mit Kriegsherrn wie Charles Taylor und massivem Einsatz von Kindersoldaten, hinterlie\u00df ein tiefes, generationen\u00fcbergreifendes kollektives Trauma. Ellen Johnson Sirleaf, 2005 gew\u00e4hlt, wurde als erste demokratisch gew\u00e4hlte Pr\u00e4sidentin eines afrikanischen Staates zur international gefeierten Symbolfigur eines einzigartigen nationalen Neuanfangs nach dem Krieg. Die Ebola-Epidemie 2014, die Liberia besonders hart traf, wurde von den Bewohnern als weiteres einschneidendes Kapitel eines von wiederholtem, unvergleichlichem Leid gepr\u00e4gten nationalen Schicksals erlebt.", subtyp: "so4", subtypText: "Liberia zeigt eine ausgepr\u00e4gt soziale Vier: Die 1847 von befreiten amerikanischen Sklaven gegr\u00fcndete Republik tr\u00e4gt eine einzigartige Gr\u00fcndungsgeschichte ohne Vergleich in Afrika, und die tiefen Spannungen zwischen der amerikanisch-liberianischen Gr\u00fcnderelite und der einheimischen Bev\u00f6lkerungsmehrheit pr\u00e4gten ein besonderes, kollektiv erlebtes nationales Identit\u00e4tsproblem. Ellen Johnson Sirleaf wurde als erste demokratisch gew\u00e4hlte Pr\u00e4sidentin eines afrikanischen Staates zur international gefeierten Symbolfigur eines einzigartigen nationalen Neuanfangs. Ein selbsterhaltender Anteil zeigt sich im generationen\u00fcbergreifenden Trauma des B\u00fcrgerkriegs. Die sexuelle Vier tritt hinter diesem breiten, kollektiv geteilten Alleinstellungsbewusstsein zur\u00fcck." },
    { name: "Togo", iso: "TG", typ: 6, unsicher: false, text: "Togo wird seit 1967 ununterbrochen von der Familie Gnassingb\u00e9 regiert \u2013 zun\u00e4chst Gnassingb\u00e9 Eyad\u00e9ma, seit dessen Tod 2005 direkt gefolgt von seinem Sohn Faure \u2013 eine der l\u00e4ngsten Machtdynastien Afrikas, gerechtfertigt mit dem Erhalt politischer Stabilit\u00e4t in einer historisch von Putschversuchen gepr\u00e4gten Region. Nach mehreren gewaltsamen Macht\u00fcbernahmeversuchen in den 1960er- und 70er-Jahren baute das Regime einen dichten Sicherheits- und \u00dcberwachungsapparat auf, der bis heute Presse- und Versammlungsfreiheit stark einschr\u00e4nkt. Verfassungs\u00e4nderungen der letzten Jahre, zuletzt 2024 mit der Einf\u00fchrung eines neuen politischen Systems, wurden von Kritikern als gezielte Strategie interpretiert, die Familienherrschaft dauerhaft gegen demokratische Herausforderung abzusichern. Die Bev\u00f6lkerung, gepr\u00e4gt von wiederholt gewaltsam niedergeschlagenen Protesten (zuletzt 2017), reagiert \u00fcberwiegend mit vorsichtiger Zur\u00fcckhaltung statt offener Konfrontation mit der Staatsmacht. Togos Rolle als traditioneller Vermittler in westafrikanischen Konflikten wird von der Regierung bewusst genutzt, um internationale Legitimit\u00e4t und Absicherung der eigenen Position zu erlangen.", subtyp: "se6", subtypText: "Togo zeigt eine deutlich selbsterhaltende Sechs: Das Regime baute nach mehreren gewaltsamen Macht\u00fcbernahmeversuchen einen dichten Sicherheits- und \u00dcberwachungsapparat auf, der nach wie vor Presse- und Versammlungsfreiheit stark einschr\u00e4nkt \u2013 konkrete, kontrollbasierte Absicherung der Familienherrschaft. Verfassungs\u00e4nderungen wie 2024 werden von Kritikern als gezielte Strategie interpretiert, die Familienherrschaft dauerhaft gegen demokratische Herausforderung abzusichern. Ein sozialer Anteil zeigt sich in Togos Rolle als Vermittler in westafrikanischen Konflikten zur internationalen Legitimit\u00e4tsgewinnung. Die sexuelle Sechs tritt hinter dieser breiten, sicherheitsapparat-gest\u00fctzten Machtabsicherung zur\u00fcck." },
    { name: "Benin", iso: "BJ", typ: 9, unsicher: false, text: "Benin, historisches Zentrum des K\u00f6nigreichs Dahomey und Geburtsort des Voodoo-Glaubens, gilt seit den 1990er-Jahren als eines der demokratisch stabilsten L\u00e4nder Westafrikas \u2013 ein Land, das nach Jahren sozialistischer Einparteienherrschaft einen bemerkenswert friedlichen, verhandelten \u00dcbergang zur Mehrparteiendemokratie vollzog. Die \u201eNationale Konferenz\u201c von 1990, bei der Regierung, Opposition und Zivilgesellschaft gemeinsam eine neue politische Ordnung aushandelten, wird international oft als Vorbild friedlicher Systemtransformation durch Dialog statt Gewalt gew\u00fcrdigt. Voodoo, offiziell als Religion anerkannt und j\u00e4hrlich mit einem eigenen Nationalfeiertag gefeiert, wird von Christen, Muslimen und Voodoo-Anh\u00e4ngern in bemerkenswert konfliktarmem Nebeneinander praktiziert. Die zahlreichen ethnischen Gruppen des Landes leben trotz historisch unterschiedlicher K\u00f6nigreichstraditionen in vergleichsweise harmonischem Miteinander ohne gr\u00f6\u00dfere Konfliktlinien. Benin positioniert sich international bewusst als Vermittler und Ort des kulturellen Dialogs, unter anderem mit umfassenden Vers\u00f6hnungsprojekten zur Aufarbeitung der eigenen Sklavenhandelsgeschichte.", subtyp: "so9", subtypText: "Benin zeigt eine sehr ausgepr\u00e4gt soziale Neun: Die \u201eNationale Konferenz\u201c von 1990, bei der Regierung, Opposition und Zivilgesellschaft gemeinsam eine neue politische Ordnung aushandelten, wird international oft als Vorbild friedlicher Systemtransformation durch Dialog statt Gewalt gew\u00fcrdigt. Voodoo, offiziell als Religion anerkannt, wird von Christen, Muslimen und Voodoo-Anh\u00e4ngern in bemerkenswert konfliktarmem Nebeneinander praktiziert \u2013 Vielfalt als geteilte, gepflegte Normalit\u00e4t. Ein selbsterhaltender Anteil zeigt sich in den umfassenden Vers\u00f6hnungsprojekten zur Aufarbeitung der eigenen Sklavenhandelsgeschichte. Die sexuelle Neun tritt hinter diesem breiten, dialogorientierten Harmonieideal zur\u00fcck." },
    { name: "Mauretanien", iso: "MR", typ: 6, unsicher: false, text: "Mauretanien, zwischen dem arabisch-berberischen Norden und dem subsaharisch-afrikanischen S\u00fcden gelegen, hat seine Politik seit der Unabh\u00e4ngigkeit 1960 stark auf Absicherung gegen innere ethnische Spannungen und \u00e4u\u00dfere dschihadistische Bedrohungen aus der Sahelregion ausgerichtet. Das Land erlebte mehrere Milit\u00e4rputsche (zuletzt 2008), wobei jede neue F\u00fchrung ihre Macht\u00fcbernahme regelm\u00e4\u00dfig mit dem Erhalt von Stabilit\u00e4t gegen Instabilit\u00e4t rechtfertigte. Als eines der letzten L\u00e4nder der Welt, das Sklaverei formal erst 1981 abschaffte (und erst 2007 unter Strafe stellte), bleibt das komplexe Verh\u00e4ltnis zwischen verschiedenen ethnischen und sozialen Gruppen noch heute eine sensible, vorsichtig gehandhabte innenpolitische Frage. Mauretanien gilt als wichtiger westlicher Sicherheitspartner im Kampf gegen dschihadistischen Terrorismus in der Sahelzone und positioniert sich bewusst als stabilisierender Anker in einer zunehmend instabilen Nachbarschaft (Mali, Westsahara). Die nomadische Beduinen-Tradition weiter Landesteile, gepr\u00e4gt von Anpassung an eine extrem harte W\u00fcstenumgebung, f\u00f6rdert traditionell eine kulturelle Grundhaltung der Vorsicht und der langfristigen Absicherung gegen knappe Ressourcen.", subtyp: "se6", subtypText: "Mauretanien zeigt eine deutlich selbsterhaltende Sechs: Die nomadische Beduinen-Tradition weiter Landesteile, gepr\u00e4gt von Anpassung an eine extrem harte W\u00fcstenumgebung, f\u00f6rdert eine kulturelle Grundhaltung der Vorsicht und langfristigen Absicherung gegen knappe Ressourcen, und die Politik ist seit der Unabh\u00e4ngigkeit stark auf Absicherung gegen innere ethnische Spannungen und \u00e4u\u00dfere dschihadistische Bedrohungen ausgerichtet. Jede neue F\u00fchrung nach den mehreren Milit\u00e4rputschen rechtfertigte ihre Macht\u00fcbernahme mit dem Erhalt von Stabilit\u00e4t. Ein sozialer Anteil zeigt sich in der Positionierung als wichtiger westlicher Sicherheitspartner in der Sahelzone. Die sexuelle Sechs tritt hinter dieser breiten, ressourcenbewussten Absicherungsstrategie zur\u00fcck." },
    { name: "S\u00fcdsudan", iso: "SS", typ: 8, unsicher: false, text: "Der S\u00fcdsudan, 2011 nach jahrzehntelangem B\u00fcrgerkrieg gegen den Sudan als j\u00fcngster Staat der Welt unabh\u00e4ngig geworden, st\u00fcrzte bereits 2013 in einen neuen, brutalen B\u00fcrgerkrieg zwischen den Machtbl\u00f6cken von Pr\u00e4sident Salva Kiir und seinem Rivalen Riek Machar \u2013 ein Machtkampf, der die Erwartungen auf den Neuanfang der Unabh\u00e4ngigkeit fast sofort zunichtemachte. Die politische Landschaft des Landes ist bis in die Gegenwart ma\u00dfgeblich von bewaffneten ethnischen Milizen gepr\u00e4gt, deren Loyalit\u00e4t eher pers\u00f6nlichen F\u00fchrern als staatlichen Institutionen gilt. Die enormen Erd\u00f6lvorkommen, eigentlich Grundlage f\u00fcr wirtschaftlichen Aufbau, wurden wiederholt zum zentralen Streitobjekt rivalisierender Machtfraktionen statt zur gemeinsamen nationalen Entwicklung genutzt. Trotz mehrerer international vermittelter Friedensabkommen (zuletzt 2018) bleibt die Machtteilung zwischen Kiir und Machar fragil und wird von beiden Seiten immer wieder als Mittel zur eigenen Machtsicherung statt zur echten Vers\u00f6hnung genutzt. Direkte, oft gewaltsame Konfrontation rivalisierender F\u00fchrungspers\u00f6nlichkeiten bleibt auch heute noch das bestimmende Muster s\u00fcdsudanesischer Politik, trotz der urspr\u00fcnglichen Hoffnung auf einen friedlichen neuen Staat.", subtyp: "sx8", subtypText: "Der S\u00fcdsudan zeigt eine ausgepr\u00e4gt sexuelle Acht: Der Machtkampf zwischen Pr\u00e4sident Salva Kiir und seinem Rivalen Riek Machar seit 2013 ist ein direkter, pers\u00f6nlicher Zweikampf zweier F\u00fchrungspers\u00f6nlichkeiten, dem sich bewaffnete ethnische Milizen eher pers\u00f6nlich als staatlichen Institutionen verpflichtet f\u00fchlen. Auch die mehrfach international vermittelten, aber fragilen Friedensabkommen wurden von beiden Seiten immer wieder als Mittel zur eigenen Machtsicherung statt zur echten Vers\u00f6hnung genutzt \u2013 Konfrontation zwischen zwei Personen, nicht zwischen Institutionen. Ein selbsterhaltender Unterton zeigt sich im Streit um die enormen Erd\u00f6lvorkommen als materielle Machtgrundlage. Die soziale Acht, die sich in organisierter Gruppenkonfrontation zeigen w\u00fcrde, tritt hinter diesem zugespitzten pers\u00f6nlichen Rivalenkampf zur\u00fcck." },
    { name: "Burundi", iso: "BI", typ: 6, unsicher: false, text: "Burundi, wie das benachbarte Ruanda von jahrzehntelangen ethnischen Spannungen zwischen Hutu und Tutsi gepr\u00e4gt, erlebte einen zw\u00f6lfj\u00e4hrigen B\u00fcrgerkrieg (1993\u20132005) mit sch\u00e4tzungsweise 300.000 Toten, der bis auf den heutigen Tag ein tiefes kollektives Sicherheitsbed\u00fcrfnis in der Bev\u00f6lkerung gepr\u00e4gt hat. Das Friedensabkommen von Arusha 2000 schuf ein sorgf\u00e4ltig austariertes, ethnisch quotiertes Machtteilungssystem in Regierung, Milit\u00e4r und Verwaltung, um erneute Eskalation strukturell zu verhindern. Nach einer schweren politischen Krise 2015, als Pr\u00e4sident Pierre Nkurunziza eine umstrittene dritte Amtszeit anstrebte, verst\u00e4rkte die Regierung \u00dcberwachung und Kontrolle \u00fcber oppositionelle Kr\u00e4fte und internationale Beobachter erheblich. Die Erinnerung an fr\u00fchere Massaker, insbesondere 1972 und 1993, wird in der Bev\u00f6lkerung als st\u00e4ndige, wachsame Mahnung an die Fragilit\u00e4t des Friedens weitergegeben. Wirtschaftliche Isolation und internationale Sanktionen nach der Krise von 2015 verst\u00e4rkten zus\u00e4tzlich ein kollektives Bewusstsein der Verwundbarkeit gegen\u00fcber externem politischen und wirtschaftlichem Druck.", subtyp: "so6", subtypText: "Burundi zeigt eine ausgepr\u00e4gt soziale Sechs: Das Friedensabkommen von Arusha 2000 schuf ein sorgf\u00e4ltig austariertes, ethnisch quotiertes Machtteilungssystem in Regierung, Milit\u00e4r und Verwaltung, um erneute Eskalation strukturell zu verhindern \u2013 Sicherheit durch ein kollektiv abgesichertes Gruppensystem statt individuelle Vorsicht. Die Erinnerung an fr\u00fchere Massaker, insbesondere 1972 und 1993, wird in der Bev\u00f6lkerung als st\u00e4ndige, wachsame Mahnung weitergegeben \u2013 ein geteiltes kollektives Ged\u00e4chtnis der Wachsamkeit. Ein selbsterhaltender Anteil zeigt sich in der verst\u00e4rkten Kontrolle \u00fcber oppositionelle Kr\u00e4fte nach der Krise 2015. Die sexuelle Sechs tritt hinter diesem breiten, institutionell abgesicherten Sicherheitssystem zur\u00fcck." },
    { name: "\u00c4quatorialguinea", iso: "GQ", typ: 3, unsicher: false, text: "\u00c4quatorialguinea, seit der Entdeckung gro\u00dfer Erd\u00f6lvorkommen in den 1990er-Jahren eines der L\u00e4nder mit dem h\u00f6chsten Pro-Kopf-Einkommen Afrikas, pr\u00e4sentiert sich unter Pr\u00e4sident Teodoro Obiang Nguema (seit 1979 an der Macht) demonstrativ als moderne, aufstrebende Erfolgsgeschichte. Die neu erbaute Verwaltungshauptstadt Oyala (Ciudad de la Paz), mitten im Dschungel aus dem Nichts errichtet, wurde als spektakul\u00e4res Prestigeprojekt und Vitrine nationaler wirtschaftlicher Leistungsf\u00e4higkeit inszeniert. Der Sohn und designierte Nachfolger, Vizepr\u00e4sident Teodor\u00edn Obiang, pflegt international einen extravaganten Lebensstil mit Luxusvillen, Supersportwagen und Beziehungen zur globalen Prominenz \u2013 demonstrativer Erfolg als \u00f6ffentlich zur Schau gestellte Familienmarke. Trotz enormer \u00d6leinnahmen bleibt die Einkommensverteilung extrem ungleich, was von der F\u00fchrung durch die sichtbare Zurschaustellung nationalen Wohlstands eher \u00fcberdeckt als durch soziale Reformen adressiert wird. Das Land positioniert sich international zunehmend als Gastgeber gro\u00dfer Sportereignisse und diplomatischer Konferenzen, um seinen Status als bedeutender, erfolgreicher Akteur in Zentralafrika zu unterstreichen.", subtyp: "se3", subtypText: "\u00c4quatorialguinea zeigt eine deutlich selbsterhaltende Drei: Die neu erbaute Verwaltungshauptstadt Oyala, mitten im Dschungel aus dem Nichts errichtet, wurde als spektakul\u00e4res Prestigeprojekt und Vitrine nationaler wirtschaftlicher Leistungsf\u00e4higkeit inszeniert, und der extravagante Lebensstil des designierten Nachfolgers Teodor\u00edn Obiang mit Luxusvillen und Supersportwagen zeigt Erfolg als \u00f6ffentlich zur Schau gestellte Familienmarke, konkret materiell verankert. Trotz enormer \u00d6leinnahmen bleibt die Einkommensverteilung extrem ungleich, was durch sichtbaren Wohlstand eher \u00fcberdeckt als durch Reformen adressiert wird. Ein sozialer Anteil zeigt sich in der internationalen Positionierung als Gastgeber gro\u00dfer Sportereignisse. Die sexuelle Drei tritt hinter diesem breiten, materiell demonstrierten Familienerfolg zur\u00fcck." },
    { name: "Madagaskar", iso: "MG", typ: 4, unsicher: false, text: "Madagaskar, vor rund 88 Millionen Jahren von Afrika getrennt, entwickelte durch seine geografische Isolation eine einzigartige Tier- und Pflanzenwelt (\u00fcber 90 Prozent endemisch, darunter die ber\u00fchmten Lemuren), die weltweit ihresgleichen sucht. Die madagassische Kultur selbst ist ein unverwechselbares Amalgam aus austronesischen (nicht afrikanischen) Wurzeln, malaiisch-polynesischer Sprache und afrikanischen sowie arabischen Einfl\u00fcssen \u2013 eine kulturelle Identit\u00e4t, die sich deutlich von jedem afrikanischen Nachbarland unterscheidet. Der \u201eFamadihana\u201c-Brauch, bei dem die Gebeine Verstorbener rituell exhumiert, in neue T\u00fccher geh\u00fcllt und erneut bestattet werden, zeigt eine einzigartige, tief verwurzelte Beziehung zu Ahnen und Tod, die es in dieser Form nirgendwo sonst gibt. Wiederkehrende politische Krisen und mehrere verfassungswidrige Machtwechsel seit der Unabh\u00e4ngigkeit 1960 werden von vielen Madagassen als Ausdruck eines eigenen, oft missverstandenen politischen Sonderwegs erlebt, fernab kontinentaler afrikanischer Muster. Die extreme Artenvielfalt und \u00f6kologische Einzigartigkeit der Insel wird von der internationalen Gemeinschaft wie den Bewohnern selbst als nationales Alleinstellungsmerkmal von globaler Bedeutung verstanden.", subtyp: "so4", subtypText: "Madagaskar zeigt eine ausgepr\u00e4gt soziale Vier: Die madagassische Kultur, ein unverwechselbares Amalgam aus austronesischen Wurzeln, malaiisch-polynesischer Sprache sowie afrikanischen und arabischen Einfl\u00fcssen, wird bewusst als kulturelle Identit\u00e4t verstanden, die sich deutlich von jedem afrikanischen Nachbarland unterscheidet \u2013 Einzigartigkeit als kollektives Selbstverst\u00e4ndnis, nicht individuelle Abgrenzung. Die extreme Artenvielfalt und \u00f6kologische Einzigartigkeit der Insel wird von Bewohnern wie internationaler Gemeinschaft gleicherma\u00dfen als nationales Alleinstellungsmerkmal gepflegt. Ein selbsterhaltender Anteil zeigt sich im \u201eFamadihana\u201c-Brauch, der eine einzigartige, d\u00f6rflich gelebte Beziehung zu Ahnen und Tod pflegt. Die sexuelle Vier tritt hinter dieser breiten, kollektiv getragenen kulturellen Sonderstellung zur\u00fcck." },
  ]},
    { region: "Naher Osten", laender: [
    { name: "Israel", iso: "IL", typ: 6, unsicher: false, text: "Fast jeder erwachsene Israeli hat Wehrdienst geleistet und bleibt Jahrzehnte in der Reserve einsatzbereit \u2013 ein kollektives Bewusstsein permanenter Bedrohungslage, das den Alltag durchdringt, von Schulausfl\u00fcgen bis zu Bunkeranlagen in fast jedem Wohnhaus. Die \u201eSabra\u201c-Mentalit\u00e4t \u2013 benannt nach der stacheligen Kaktusfeige, hart au\u00dfen, weich innen \u2013 beschreibt einen kulturellen Umgang mit Vorsicht: schroff im ersten Kontakt, aber tief loyal im engeren Kreis. Der Holocaust, als kollektives Trauma, wird j\u00e4hrlich mit landesweiten Gedenkfeiern und einer Schweigeminute begangen, bei der buchst\u00e4blich der ganze Verkehr stillsteht. Sicherheitschecks, von Einkaufszentren bis zu Bushaltestellen, sind allt\u00e4gliche, selbstverst\u00e4ndlich hingenommene Routine, nicht Ausnahmezustand. Trotz h\u00e4ufiger Konflikte in der Region investiert Israel \u00fcberdurchschnittlich in zivile Fr\u00fchwarnsysteme und Schutzr\u00e4ume \u2013 Vorsorge als Staatsprinzip.", subtyp: "so6", subtypText: "Israel zeigt eine sehr ausgepr\u00e4gt soziale Sechs: Fast jeder erwachsene Israeli hat Wehrdienst geleistet und bleibt Jahrzehnte in der Reserve einsatzbereit \u2013 kollektive Wachsamkeit als geteilte, institutionalisierte B\u00fcrgerpflicht, nicht individuelle Vorsicht. Die landesweiten Gedenkfeiern zum Holocaust, bei denen buchst\u00e4blich der ganze Verkehr stillsteht, best\u00e4tigen dieses Muster gemeinschaftlich zelebrierter Erinnerung und Wachsamkeit. Ein selbsterhaltender Anteil zeigt sich in den Sicherheitschecks und Schutzr\u00e4umen als allt\u00e4gliche, praktische Vorsorge in fast jedem Wohnhaus. Die sexuelle Sechs tritt hinter dieser breiten, kollektiv getragenen Sicherheitskultur zur\u00fcck." },
    { name: "Saudi-Arabien", iso: "SA", typ: 1, unsicher: false, text: "Die f\u00fcnf t\u00e4glichen Gebetszeiten strukturieren den gesamten \u00f6ffentlichen Alltag \u2013 Gesch\u00e4fte schlie\u00dfen p\u00fcnktlich, der Verkehr ordnet sich unmittelbar danach. Die Scharia bildet die Grundlage des Rechtssystems, mit klaren, unver\u00e4nderlichen Verhaltensregeln f\u00fcr nahezu jeden Lebensbereich, von Kleidung bis Gesch\u00e4ftsbeziehungen. Mekka, als heiligste St\u00e4tte des Islam, empf\u00e4ngt j\u00e4hrlich Millionen Pilger im Rahmen der Hadsch \u2013 ein hochorganisiertes, minuti\u00f6s geplantes logistisches Gro\u00dfereignis. Die Vision 2030, das ehrgeizige staatliche Reformprogramm, wird mit derselben strukturierten, top-down gesteuerten Pr\u00e4zision umgesetzt wie traditionell religi\u00f6se Ordnung durchgesetzt wurde. \u00d6ffentliche Ordnung, Geschlechtertrennung in vielen Bereichen und ein ausgepr\u00e4gtes System sozialer Kontrolle pr\u00e4gen bis heute den gesellschaftlichen Alltag, trotz j\u00fcngerer Lockerungen.", subtyp: "so1", subtypText: "Saudi-Arabien zeigt eine sehr ausgepr\u00e4gt soziale Eins: Die f\u00fcnf t\u00e4glichen Gebetszeiten strukturieren den gesamten \u00f6ffentlichen Alltag \u2013 Gesch\u00e4fte schlie\u00dfen p\u00fcnktlich, der Verkehr ordnet sich unmittelbar danach \u2013, und die Scharia bildet mit klaren, unver\u00e4nderlichen Verhaltensregeln die Grundlage kollektiv verbindlicher Ordnung f\u00fcr nahezu jeden Lebensbereich. Die hochorganisierte, minuti\u00f6s geplante Hadsch, die j\u00e4hrlich Millionen Pilger empf\u00e4ngt, zeigt dieselbe Pr\u00e4zision im Dienst der Gemeinschaft. Ein selbsterhaltender Anteil zeigt sich im ausgepr\u00e4gten System sozialer Kontrolle im unmittelbaren Alltag. Die sexuelle Eins tritt hinter dieser breiten, top-down durchgesetzten \u00f6ffentlichen Ordnung zur\u00fcck." },
    { name: "Iran", iso: "IR", typ: 8, unsicher: false, text: "Das persische Neujahrsfest Nowruz, seit \u00fcber 3.000 Jahren gefeiert, wird mit sichtbarem Stolz als eigenst\u00e4ndige, vorislamische kulturelle Wurzel gepflegt \u2013 ein bewusstes Festhalten an persischer statt rein arabisch-islamischer Identit\u00e4t. Die Dichter Hafis und Rumi genie\u00dfen einen gesellschaftlichen Status, der dem von Nationalhelden gleicht \u2013 ihre Gedichte werden im Alltag zitiert, zur Wahrsagung genutzt und auswendig gelernt. Trotz internationaler Sanktionen und wirtschaftlichem Druck zeigt sich in der iranischen Gesellschaft eine bemerkenswerte Widerstandsf\u00e4higkeit und Weigerung, sich \u00e4u\u00dferem Druck zu beugen \u2013 von der Kunstszene bis zu Protestbewegungen wie \u201eFrau, Leben, Freiheit\u201c. Der historische Stolz auf das persische Reich, eine der \u00e4ltesten Hochkulturen der Welt, wird bewusst gegen arabische und westliche Einfl\u00fcsse in Stellung gebracht. Direkte, oft konfrontative politische Rhetorik, sowohl von staatlicher Seite als auch von der Protestbewegung, zeigt eine Kultur, die sich nicht leicht unterordnet.", subtyp: "so8", subtypText: "Iran zeigt eine ausgepr\u00e4gt soziale Acht: Das seit \u00fcber 3.000 Jahren gefeierte Nowruz-Fest wird mit sichtbarem, kollektivem Stolz als eigenst\u00e4ndige persische statt rein arabisch-islamische Identit\u00e4t gepflegt, und der historische Stolz auf das persische Reich wird bewusst gegen arabische und westliche Einfl\u00fcsse in Stellung gebracht \u2013 nationale Behauptung als geteiltes Widerstandsprinzip. Sowohl staatliche Rhetorik als auch Protestbewegungen wie \u201eFrau, Leben, Freiheit\u201c zeigen dieselbe Weigerung, sich \u00e4u\u00dferem Druck zu beugen. Ein selbsterhaltender Anteil zeigt sich in der bemerkenswerten wirtschaftlichen Widerstandsf\u00e4higkeit trotz Sanktionen. Die sexuelle Acht tritt hinter diesem breiten, kollektiven Behauptungswillen zur\u00fcck." },
    { name: "Libanon", iso: "LB", typ: 3, unsicher: false, text: "Beirut galt einst als \u201eParis des Nahen Ostens\u201c \u2013 ein Ruf als kosmopolitisches Handels- und Kulturzentrum, den viele Libanesen trotz wiederholter Krisen aktiv am Leben halten wollen. Die libanesische Diaspora, gr\u00f6\u00dfer als die Bev\u00f6lkerung im Land selbst, ist f\u00fcr unternehmerischen Erfolg weltweit bekannt, von Handelsimperien bis zur Finanzbranche. Trotz B\u00fcrgerkrieg (1975\u20131990), wirtschaftlichem Kollaps und der Explosionskatastrophe von Beiruts Hafen 2020 h\u00e4lt die libanesische Gesch\u00e4ftswelt an einem bemerkenswert unternehmerischen, aufstiegsorientierten Selbstbild fest. Die Vielzahl an Banken und Finanzdienstleistern in einem so kleinen Land unterstreicht historisch die Bedeutung von Beirut als regionales Finanzzentrum. Bildung und akademischer Erfolg genie\u00dfen enormen gesellschaftlichen Status \u2013 ein Universit\u00e4tsabschluss, oft im Ausland erworben, gilt als Statussymbol und Karriereversprechen zugleich.", subtyp: "so3", subtypText: "Der Libanon zeigt eine ausgepr\u00e4gt soziale Drei: Der Ruf Beiruts als \u201eParis des Nahen Ostens\u201c, den viele Libanesen trotz wiederholter Krisen aktiv am Leben halten wollen, und der enorme gesellschaftliche Status von Bildung und akademischem Erfolg \u2013 ein Universit\u00e4tsabschluss als Statussymbol \u2013 zeigen Erfolg als kollektiv anerkanntes, \u00f6ffentlich sichtbares Gut. Die libanesische Diaspora, weltweit f\u00fcr unternehmerischen Erfolg bekannt, verst\u00e4rkt dieses Bild eines national geteilten Aufstiegs-Selbstbilds. Ein selbsterhaltender Anteil zeigt sich im Festhalten der Gesch\u00e4ftswelt an unternehmerischem Denken trotz wirtschaftlichem Kollaps. Die sexuelle Drei tritt hinter diesem breiten, gesellschaftlich verankerten Erfolgsbild zur\u00fcck." },
    { name: "Jordanien", iso: "JO", typ: 2, unsicher: false, text: "Gastfreundschaft ist in der jordanischen Beduinenkultur nahezu heilig: Traditionell muss selbst ein Fremder, der ins Zelt kommt, drei Tage lang bewirtet werden, bevor \u00fcberhaupt nach seinem Anliegen gefragt wird. Das gemeinsame \u201eMansaf\u201c-Gericht, aus einer riesigen gemeinsamen Sch\u00fcssel mit der rechten Hand gegessen, ist Symbol geteilter Gastfreundschaft bei Festen und wichtigen Anl\u00e4ssen. Jordanien hat \u00fcber Jahrzehnte hinweg Millionen Fl\u00fcchtlinge aus Pal\u00e4stina, dem Irak und Syrien aufgenommen \u2013 eine national gelebte F\u00fcrsorgepraxis trotz eigener begrenzter Ressourcen. Familien- und Stammesstrukturen bleiben zentrale soziale Institutionen, die sich gegenseitig bei Hochzeiten, Krankheit und finanziellen N\u00f6ten unterst\u00fctzen. Die Beduinenkultur der W\u00fcste Wadi Rum lebt nach wie vor von einem Ethos gegenseitiger F\u00fcrsorge, das f\u00fcr das \u00dcberleben unter kargen Bedingungen historisch notwendig war.", subtyp: "so2", subtypText: "Jordanien zeigt eine sehr ausgepr\u00e4gt soziale Zwei: Gastfreundschaft ist in der Beduinenkultur nahezu heilig \u2013 ein Fremder muss traditionell drei Tage lang bewirtet werden, bevor \u00fcberhaupt nach seinem Anliegen gefragt wird \u2013, und die Aufnahme von Millionen Fl\u00fcchtlingen aus Pal\u00e4stina, dem Irak und Syrien \u00fcber Jahrzehnte hinweg zeigt F\u00fcrsorge als national gelebte, institutionalisierte Praxis. Das gemeinsame \u201eMansaf\u201c-Gericht aus einer Sch\u00fcssel symbolisiert geteilte Gastfreundschaft bei Festen. Ein selbsterhaltender Anteil zeigt sich in den Familien- und Stammesstrukturen, die sich gegenseitig bei Hochzeiten, Krankheit und finanziellen N\u00f6ten unterst\u00fctzen. Die sexuelle Zwei tritt hinter dieser breiten, national gelebten F\u00fcrsorgepraxis zur\u00fcck." },
    { name: "Vereinigte Arabische Emirate", iso: "AE", typ: 3, unsicher: false, text: "Dubai, einst ein bescheidener Fischer- und Perlentaucherort, verwandelte sich innerhalb weniger Jahrzehnte bewusst in ein globales Symbol von Luxus, H\u00f6he und Superlativen \u2013 der Burj Khalifa, das h\u00f6chste Geb\u00e4ude der Welt, steht sinnbildlich f\u00fcr dieses Aufstiegsnarrativ. Die Emirate investieren gezielt in spektakul\u00e4re, international sichtbare Gro\u00dfprojekte \u2013 k\u00fcnstliche Inseln, die h\u00f6chsten Hotels, spektakul\u00e4re Weltausstellungen \u2013 um globale Aufmerksamkeit und Status zu erzeugen. Steuerfreiheit und gezielte Wirtschaftsf\u00f6rderung locken internationale Unternehmen und Fachkr\u00e4fte an, mit dem erkl\u00e4rten Ziel, als globales Business- und Statuszentrum wahrgenommen zu werden. Auch kulturell wird Sichtbarkeit gesucht: der Louvre Abu Dhabi und spektakul\u00e4re Museumsprojekte sollen internationales Prestige demonstrieren. Der rasante Aufstieg von einer traditionellen W\u00fcstenregion zu einem der wohlhabendsten Orte der Welt wird als nationales Erfolgsnarrativ aktiv gepflegt und vermarktet.", subtyp: "so3", subtypText: "Die Vereinigten Arabischen Emirate zeigen eine sehr ausgepr\u00e4gt soziale Drei: Dubai verwandelte sich bewusst in ein globales Symbol von Luxus und Superlativen, und die gezielten Investitionen in spektakul\u00e4re, international sichtbare Gro\u00dfprojekte \u2013 k\u00fcnstliche Inseln, h\u00f6chste Hotels, Weltausstellungen \u2013 dienen explizit der Erzeugung globaler Aufmerksamkeit und Status vor einem internationalen Publikum. Der Louvre Abu Dhabi und \u00e4hnliche Museumsprojekte demonstrieren dasselbe Streben nach internationalem Prestige. Ein selbsterhaltender Anteil zeigt sich in der gezielten Steuerfreiheit zur Anwerbung internationaler Fachkr\u00e4fte. Die sexuelle Drei tritt hinter diesem breiten, \u00f6ffentlich vermarkteten nationalen Erfolgsnarrativ zur\u00fcck." },
    { name: "Irak", iso: "IQ", typ: 8, unsicher: false, text: "Der Irak, historisches Mesopotamien und eine der Wiegen der Zivilisation, tr\u00e4gt seine jahrtausendealte Geschichte als Quelle nationalen Stolzes trotz jahrzehntelanger Kriege und Besatzung. Stammesstrukturen, mit eigenen bewaffneten Verteidigungsf\u00e4higkeiten und Ehrenkodizes, haben historisch oft mehr reale Macht und Legitimit\u00e4t besessen als die jeweilige Zentralregierung. Nach dem Sturz Saddam Husseins 2003, der US-Besatzung und dem anschlie\u00dfenden Kampf gegen den \u201eIslamischen Staat\u201c hat sich eine Kultur entwickelt, in der Durchsetzungsf\u00e4higkeit und Wehrhaftigkeit hoch geachtet werden. Milizen und bewaffnete Gruppen, ob schiitisch, sunnitisch oder kurdisch, verstehen sich oft explizit als Besch\u00fctzer ihrer jeweiligen Gemeinschaft gegen \u00e4u\u00dfere Bedrohung. Direkte, konfrontative Konfliktaustragung, sei es politisch oder gesellschaftlich, wird h\u00e4ufiger gew\u00e4hlt als langwierige diplomatische Kompromisssuche.", subtyp: "se8", subtypText: "Der Irak zeigt eine deutlich selbsterhaltende Acht: Stammesstrukturen mit eigenen bewaffneten Verteidigungsf\u00e4higkeiten und Ehrenkodizes besitzen historisch oft mehr reale Macht und Legitimit\u00e4t als die jeweilige Zentralregierung \u2013 Schutz und Territorium konkret in der eigenen Hand statt beim Staat. Milizen, ob schiitisch, sunnitisch oder kurdisch, verstehen sich explizit als Besch\u00fctzer ihrer jeweiligen Gemeinschaft gegen \u00e4u\u00dfere Bedrohung, was auf materiellen Schutz des eigenen Umfelds zielt. Ein sozialer Anteil zeigt sich im kollektiven Stolz auf die jahrtausendealte Geschichte Mesopotamiens. Die sexuelle Acht tritt hinter dieser breiten, auf Stammes- und Gemeinschaftsschutz gerichteten Wehrhaftigkeit zur\u00fcck." },
    { name: "Katar", iso: "QA", typ: 3, unsicher: false, text: "Katar, einst eine der \u00e4rmsten Regionen am Golf, nutzte enorme Erdgasvorkommen, um sich binnen weniger Jahrzehnte zu einem der reichsten L\u00e4nder der Welt pro Kopf zu entwickeln \u2013 ein bewusst inszenierter, rasanter Aufstieg. Die Fu\u00dfball-Weltmeisterschaft 2022, mit Milliardeninvestitionen in Stadien und Infrastruktur, wurde explizit als internationales Statement globaler Bedeutung und Sichtbarkeit inszeniert. Al Jazeera, der von Katar finanzierte internationale Nachrichtensender, verschaffte dem kleinen Land eine mediale Reichweite weit \u00fcber seine tats\u00e4chliche Gr\u00f6\u00dfe hinaus. Bildungsstadt Doha, mit Dependancen westlicher Elite-Universit\u00e4ten, soll internationales akademisches Prestige ins Land holen. \u00c4hnlich wie die Emirate setzt Katar bewusst auf spektakul\u00e4re, international sichtbare Projekte als Ausdruck seines wirtschaftlichen und politischen Aufstiegs.", subtyp: "so3", subtypText: "Katar zeigt eine sehr ausgepr\u00e4gt soziale Drei: Die Fu\u00dfball-Weltmeisterschaft 2022 mit Milliardeninvestitionen wurde explizit als internationales Statement globaler Bedeutung inszeniert, und Al Jazeera verschaffte dem kleinen Land eine mediale Reichweite weit \u00fcber seine tats\u00e4chliche Gr\u00f6\u00dfe hinaus \u2013 Status wird bewusst f\u00fcr ein internationales Publikum erzeugt. Die Bildungsstadt Doha mit Dependancen westlicher Elite-Universit\u00e4ten soll internationales akademisches Prestige ins Land holen. Ein selbsterhaltender Anteil zeigt sich in der Nutzung der Erdgasvorkommen zur wirtschaftlichen Absicherung des raschen Aufstiegs. Die sexuelle Drei tritt hinter diesem breiten, medial inszenierten Statusaufbau zur\u00fcck." },
    { name: "Jemen", iso: "YE", typ: 6, unsicher: false, text: "Der Jemen, gepr\u00e4gt von einem der am l\u00e4ngsten andauernden bewaffneten Konflikte der Gegenwart, hat eine tief verwurzelte Stammeskultur, in der Zugeh\u00f6rigkeit zum eigenen Clan \u00fcber Generationen hinweg Schutz und Identit\u00e4t bietet. Waffenbesitz ist traditionell weit verbreitet und wird nicht prim\u00e4r als Aggression, sondern als notwendiges Mittel der Selbstverteidigung und famili\u00e4ren Absicherung verstanden. Historische Stammesfehden und deren traditionelle Schlichtung durch \u00c4ltestenr\u00e4te zeigen ein kulturelles System, das auf Vorsicht und ausgehandeltem Interessenausgleich zwischen bewaffneten Gruppen beruht. Die humanit\u00e4re Krise der vergangenen Jahre, mit Hungersnot und Vertreibung, hat famili\u00e4re Solidarit\u00e4tsnetzwerke noch wichtiger gemacht als staatliche, oft kaum funktionierende Institutionen. Misstrauen gegen\u00fcber externen M\u00e4chten, ob regionalen Nachbarn oder internationalen Akteuren, ist historisch tief begr\u00fcndet und pr\u00e4gt noch heute politische Entscheidungen.", subtyp: "se6", subtypText: "Der Jemen zeigt eine deutlich selbsterhaltende Sechs: Waffenbesitz ist traditionell weit verbreitet und wird nicht prim\u00e4r als Aggression, sondern als notwendiges Mittel der Selbstverteidigung und famili\u00e4ren Absicherung verstanden, und die humanit\u00e4re Krise hat famili\u00e4re Solidarit\u00e4tsnetzwerke noch wichtiger gemacht als staatliche, oft kaum funktionierende Institutionen. Die tief verwurzelte Stammeskultur, in der Zugeh\u00f6rigkeit zum eigenen Clan \u00fcber Generationen hinweg Schutz und Identit\u00e4t bietet, verst\u00e4rkt dieses Bild konkreter, famili\u00e4r organisierter Absicherung. Ein sozialer Anteil zeigt sich in der traditionellen Schlichtung von Stammesfehden durch \u00c4ltestenr\u00e4te. Die sexuelle Sechs tritt hinter dieser breiten, famili\u00e4r verankerten Vorsichtsstrategie zur\u00fcck." },
    { name: "Afghanistan", iso: "AF", typ: 6, unsicher: false, text: "Nach jahrzehntelangen Kriegen \u2013 gegen die Sowjetunion, im B\u00fcrgerkrieg, gegen die USA und NATO-Truppen \u2013 ist Wachsamkeit in Afghanistan keine \u00fcbertriebene Vorsicht, sondern gelebte Realit\u00e4t mehrerer Generationen. Die Stammes- und Clanstruktur, mit dem paschtunischen Ehrenkodex \u201ePashtunwali\u201c, regelt bis in die Gegenwart Gastfreundschaft, Konfliktl\u00f6sung und gegenseitigen Schutz oft wirksamer als staatliche Institutionen. Loya Jirgas, traditionelle gro\u00dfe Ratsversammlungen von Stammes\u00e4ltesten, werden seit Jahrhunderten genutzt, um in Krisenzeiten kollektiv nach Sicherheit und Konsens zu suchen. Familien bewahren traditionell \u00fcber Generationen Waffen und Vorr\u00e4te auf, als Vorsichtsma\u00dfnahme gegen wiederkehrende Instabilit\u00e4t. Die extreme geografische Zersplitterung in isolierte Bergt\u00e4ler hat historisch eigenst\u00e4ndige, misstrauisch-vorsichtige lokale Gemeinschaften beg\u00fcnstigt, die sich selten vollst\u00e4ndig einer Zentralmacht unterordneten.", subtyp: "se6", subtypText: "Afghanistan zeigt eine deutlich selbsterhaltende Sechs: Familien bewahren traditionell \u00fcber Generationen Waffen und Vorr\u00e4te auf, als konkrete Vorsichtsma\u00dfnahme gegen wiederkehrende Instabilit\u00e4t, und die extreme geografische Zersplitterung in isolierte Bergt\u00e4ler hat eigenst\u00e4ndige, misstrauisch-vorsichtige lokale Gemeinschaften beg\u00fcnstigt, die sich selten vollst\u00e4ndig einer Zentralmacht unterordneten. Der paschtunische Ehrenkodex \u201ePashtunwali\u201c, der Gastfreundschaft, Konfliktl\u00f6sung und gegenseitigen Schutz regelt, verst\u00e4rkt diese famili\u00e4r-lokale Sicherheitsorientierung. Ein sozialer Anteil zeigt sich in den Loya Jirgas, den traditionellen Ratsversammlungen zur kollektiven Konsenssuche in Krisenzeiten. Die sexuelle Sechs tritt hinter dieser breiten, famili\u00e4r-lokal verankerten Wachsamkeit zur\u00fcck." },
    { name: "Georgien", iso: "GE", typ: 6, unsicher: false, text: "Jahrhundertelang zwischen persischen, osmanischen, mongolischen und schlie\u00dflich russisch-sowjetischen Gro\u00dfm\u00e4chten zerrieben, hat Georgien ein tief verankertes Bewusstsein f\u00fcr die eigene Verwundbarkeit zwischen m\u00e4chtigen Nachbarn entwickelt \u2013 ein Bewusstsein, das durch den Krieg um S\u00fcdossetien und Abchasien 2008 schmerzhaft aktuell blieb. Die Georgisch-Orthodoxe Kirche, deren Wurzeln bis ins 4. Jahrhundert zur\u00fcckreichen, wurde \u00fcber Jahrhunderte muslimischer Fremdherrschaft zum zentralen Anker nationaler Identit\u00e4t und Kontinuit\u00e4t \u2013 Glaube als Schutzraum, nicht nur als Fr\u00f6mmigkeit. Die traditionelle \u201eSupra\u201c, das rituell durchstrukturierte Festmahl mit einem \u201eTamada\u201c als Trinkspruch-Zeremonienmeister, zelebriert in kunstvollen Toasten immer wieder aufs Neue Treue zu Familie, Freunden, Vorfahren und Heimat \u2013 Loyalit\u00e4t als wiederholt bekr\u00e4ftigtes Bekenntnis. Die zerkl\u00fcftete Gebirgslandschaft des Kaukasus beg\u00fcnstigte historisch eigenst\u00e4ndige, wehrhafte Berggemeinschaften und Clanstrukturen, die sich selten vollst\u00e4ndig einer Zentralmacht unterwarfen. Bis heute navigiert Georgien wachsam zwischen dem Wunsch nach EU- und NATO-Anbindung und der st\u00e4ndigen Sorge vor russischem Einfluss \u2013 die Vorsicht eines kleinen Landes im Schatten gro\u00dfer M\u00e4chte.", subtyp: "so6", subtypText: "Georgien zeigt eine ausgepr\u00e4gt soziale Sechs: Die traditionelle \u201eSupra\u201c, das rituell durchstrukturierte Festmahl mit einem \u201eTamada\u201c als Zeremonienmeister, zelebriert in kunstvollen Toasten immer wieder aufs Neue Treue zu Familie, Freunden, Vorfahren und Heimat \u2013 Loyalit\u00e4t als wiederholt bekr\u00e4ftigtes, gemeinschaftliches Bekenntnis. Die Georgisch-Orthodoxe Kirche wurde \u00fcber Jahrhunderte muslimischer Fremdherrschaft zum zentralen Anker kollektiver nationaler Identit\u00e4t. Ein selbsterhaltender Anteil zeigt sich in der wachsamen Navigation zwischen EU-Anbindung und der Sorge vor russischem Einfluss. Die sexuelle Sechs tritt hinter dieser breiten, rituell gepflegten Loyalit\u00e4tskultur zur\u00fcck." },
    { name: "Kasachstan", iso: "KZ", typ: 3, unsicher: false, text: "Innerhalb einer einzigen Generation verwandelte sich Kasachstan von einer sowjetischen Steppenrepublik in einen selbstbewusst inszenierten Aufsteiger mit Wolkenkratzern, Weltausstellung (Expo 2017) und einer komplett neu errichteten Hauptstadt Astana als Vitrine des nationalen Aufstiegs. Die Umbenennung und der Neubau der Hauptstadt selbst \u2013 ein Prestigeprojekt von Grund auf \u2013 gelten als bewusste Inszenierung von Modernit\u00e4t und globalem Anschluss. \u00d6l- und Rohstoffreichtum werden gezielt in sichtbare Gro\u00dfprojekte, internationale Sportevents und ein poliertes Image investiert. Die \u201eNomaden-Spiele\u201c, eine eigens ins Leben gerufene internationale Sportveranstaltung, zeigen den Wunsch, traditionelle Wurzeln als globales Markenzeichen zu pr\u00e4sentieren. Zwischen Russland und China navigierend, pflegt Kasachstan bewusst eine Multi-Vektor-Au\u00dfenpolitik, die eigene Bedeutung auf der Weltb\u00fchne demonstrativ unterstreicht.", subtyp: "so3", subtypText: "Kasachstan zeigt eine sehr ausgepr\u00e4gt soziale Drei: Die komplett neu errichtete Hauptstadt Astana als Vitrine des nationalen Aufstiegs und die Ausrichtung der Expo 2017 zeigen bewusste Inszenierung von Modernit\u00e4t f\u00fcr ein internationales Publikum, nicht privaten Wohlstand. Die eigens ins Leben gerufenen \u201eNomaden-Spiele\u201c zeigen den Wunsch, traditionelle Wurzeln als globales Markenzeichen zu pr\u00e4sentieren. Ein selbsterhaltender Anteil zeigt sich in der gezielten Investition von \u00d6l- und Rohstoffreichtum in sichtbare Gro\u00dfprojekte. Die sexuelle Drei tritt hinter dieser breiten, auf internationale Anerkennung gerichteten Aufstiegsinszenierung zur\u00fcck." },
    { name: "Armenien", iso: "AM", typ: 4, unsicher: false, text: "Als erster Staat der Welt, der 301 n. Chr. das Christentum zur Staatsreligion erhob, tr\u00e4gt Armenien ein tiefes Bewusstsein kultureller Einzigartigkeit inmitten \u00fcberwiegend muslimischer Nachbarn. Der V\u00f6lkermord von 1915, auch heute noch von der T\u00fcrkei nicht anerkannt, ist zum zentralen, generationen\u00fcbergreifenden Trauma der nationalen Identit\u00e4t geworden \u2013 Erinnerung als Akt des \u00dcberlebens. Die armenische Diaspora, gr\u00f6\u00dfer als die Bev\u00f6lkerung im Land selbst, pflegt eine intensive, oft schmerzvoll-sehns\u00fcchtige Verbindung zur verlorenen Heimat. Der Verlust von Bergkarabach 2020 und 2023 wurde nicht nur als milit\u00e4rische, sondern als tief identit\u00e4tsstiftende Niederlage erlebt und \u00f6ffentlich betrauert. Die einzigartige armenische Schrift, die jahrhundertealten Kirchen aus vulkanischem Tuffstein und eine reiche Dichtkunst der Melancholie halten ein kulturelles Selbstbild lebendig, das sich bewusst von seiner Umgebung abhebt.", subtyp: "so4", subtypText: "Armenien zeigt eine ausgepr\u00e4gt soziale Vier: Als erster Staat der Welt, der 301 n. Chr. das Christentum zur Staatsreligion erhob, tr\u00e4gt Armenien ein kollektiv geteiltes Bewusstsein kultureller Einzigartigkeit inmitten \u00fcberwiegend muslimischer Nachbarn \u2013 Andersartigkeit als nationales Selbstverst\u00e4ndnis, nicht individuelle Abgrenzung. Der V\u00f6lkermord von 1915, bis auf den heutigen Tag nicht anerkannt, ist zum zentralen, generationen\u00fcbergreifenden Trauma der nationalen Identit\u00e4t geworden, das die Diaspora gemeinsam tr\u00e4gt. Ein selbsterhaltender Anteil zeigt sich in der schmerzvollen Verbindung der Diaspora zur verlorenen Heimat. Die sexuelle Vier tritt hinter diesem breiten, kollektiv gepflegten kulturellen Alleinstellungsbewusstsein zur\u00fcck." },
    { name: "Oman", iso: "OM", typ: 5, unsicher: false, text: "Bis 1970, unter Sultan Said bin Taimur, war Oman fast vollst\u00e4ndig von der Au\u00dfenwelt abgeschottet \u2013 Radios, Brillen und selbst Sonnenschirme waren zeitweise verboten, aus tiefem Misstrauen gegen fremden Einfluss. Anders als seine glanzvollen Golf-Nachbarn verzichtet Oman bewusst auf spektakul\u00e4re Prestigeprojekte und setzt stattdessen auf zur\u00fcckhaltende, ressourcenschonende Entwicklung. Das Land pflegt traditionell eine diskrete, oft geheime Vermittlerrolle bei internationalen Konflikten \u2013 zwischen Iran und dem Westen, bei US-Geiselverhandlungen \u2013 lieber im Hintergrund als im Rampenlicht. Wasser gilt als knappstes Gut der Region; das jahrhundertealte Faladsch-Bew\u00e4sserungssystem zeigt einen kulturellen Grundzug \u00e4u\u00dferster Sparsamkeit im Umgang mit begrenzten Ressourcen. Omanis gelten in der gesamten arabischen Welt als besonders zur\u00fcckhaltend, beobachtend und wenig redselig \u2013 eine kollektive Zur\u00fcckgezogenheit, die eher analysiert als sich zeigt.", subtyp: "se5", subtypText: "Oman zeigt eine sehr ausgepr\u00e4gt selbsterhaltende F\u00fcnf: Anders als seine glanzvollen Golf-Nachbarn verzichtet Oman bewusst auf spektakul\u00e4re Prestigeprojekte und setzt stattdessen auf zur\u00fcckhaltende, ressourcenschonende Entwicklung, und das jahrhundertealte Faladsch-Bew\u00e4sserungssystem zeigt einen kulturellen Grundzug \u00e4u\u00dferster Sparsamkeit im Umgang mit begrenzten Ressourcen. Die fast vollst\u00e4ndige Abschottung von der Au\u00dfenwelt bis 1970 verst\u00e4rkt dieses Bild bewusster Zur\u00fcckgezogenheit. Ein sozialer Anteil zeigt sich in der diskreten, oft geheimen Vermittlerrolle bei internationalen Konflikten. Die sexuelle F\u00fcnf tritt hinter dieser breiten, ressourcenbewussten Zur\u00fcckhaltung zur\u00fcck." },
    { name: "Usbekistan", iso: "UZ", typ: 1, unsicher: false, text: "Usbekistan investiert seit Jahren massiv in die minuti\u00f6se Restaurierung seiner Seidenstra\u00dfen-St\u00e4dte Samarkand, Buchara und Chiwa \u2013 Ordnung und Perfektion als nationales Verm\u00e4chtnis, nicht als blo\u00dfe Denkmalpflege. Unter jahrzehntelanger autorit\u00e4rer F\u00fchrung (Karimow, sp\u00e4ter Mirsijojew) durchzieht ein engmaschiges System staatlicher Kontrolle noch immer Verwaltung, Presse und \u00f6ffentliches Leben. Die strengen, oft unver\u00e4nderlichen Vorschriften f\u00fcr religi\u00f6se Praxis \u2013 reguliert bis ins Detail \u2013 zeigen ein tiefes Bed\u00fcrfnis, Ordnung auch im Glauben durchzusetzen. Der Kult um Timur (Tamerlan), heute als nationaler Ordnungsstifter verehrt, verdr\u00e4ngt bewusst die sowjetische Vergangenheit zugunsten eines disziplinierten, geordneten Nationalnarrativs. Wirtschaftliche Reformen der letzten Jahre werden mit derselben top-down gesteuerten, systematischen Pr\u00e4zision umgesetzt, mit der historisch religi\u00f6se und staatliche Ordnung durchgesetzt wurde.", subtyp: "so1", subtypText: "Usbekistan zeigt eine sehr ausgepr\u00e4gt soziale Eins: Die minuti\u00f6se Restaurierung der Seidenstra\u00dfen-St\u00e4dte Samarkand, Buchara und Chiwa zeigt Ordnung und Perfektion als nationales Verm\u00e4chtnis, und das engmaschige System staatlicher Kontrolle, das Verwaltung, Presse und \u00f6ffentliches Leben durchzieht, setzt kollektive Regelkonformit\u00e4t top-down durch. Die strengen, bis ins Detail regulierten Vorschriften f\u00fcr religi\u00f6se Praxis zeigen dasselbe Bed\u00fcrfnis, Ordnung auch im Glauben durchzusetzen. Ein selbsterhaltender Anteil zeigt sich im Kult um Timur als nationalem Ordnungsstifter. Die sexuelle Eins tritt hinter dieser breiten, systematisch durchgesetzten \u00f6ffentlichen Ordnung zur\u00fcck." },
    { name: "Kuwait", iso: "KW", typ: 6, unsicher: false, text: "Die irakische Invasion von 1990 und die siebenmonatige Besatzung bleiben das zentrale nationale Trauma Kuwaits \u2013 ein kollektives Bewusstsein permanenter Verwundbarkeit gegen\u00fcber m\u00e4chtigeren Nachbarn. Als einziger Golfstaat mit einem echten, gew\u00e4hlten Parlament mit realer Kontrollmacht zeigt Kuwait ein tiefes Bed\u00fcrfnis nach institutioneller Absicherung gegen Machtmissbrauch. Die enge milit\u00e4rische Anbindung an die USA und westliche Verb\u00fcndete wird explizit als Lebensversicherung gegen k\u00fcnftige Bedrohungen verstanden, nicht nur als B\u00fcndnispolitik. Kuwaitische Familien pflegen traditionell enge, verl\u00e4ssliche Netzwerke gegenseitiger Absicherung, die in Krisenzeiten \u2013 wie w\u00e4hrend der Besatzung \u2013 lebensrettend waren. Der j\u00e4hrliche \u201eLiberation Day\u201c wird mit gro\u00dfem \u00f6ffentlichen Aufwand begangen \u2013 Erinnerung an die Befreiung als st\u00e4ndige Mahnung zur Wachsamkeit.", subtyp: "se6", subtypText: "Kuwait zeigt eine deutlich selbsterhaltende Sechs: Die enge milit\u00e4rische Anbindung an die USA und westliche Verb\u00fcndete wird explizit als Lebensversicherung gegen k\u00fcnftige Bedrohungen verstanden, und kuwaitische Familien pflegen traditionell enge, verl\u00e4ssliche Netzwerke gegenseitiger Absicherung, die w\u00e4hrend der Besatzung 1990 lebensrettend waren \u2013 konkreter, materieller Schutz im Vordergrund. Als einziger Golfstaat mit einem echten, gew\u00e4hlten Parlament mit realer Kontrollmacht zeigt sich zus\u00e4tzlich ein institutionelles Absicherungsbed\u00fcrfnis. Ein sozialer Anteil zeigt sich im j\u00e4hrlichen \u201eLiberation Day\u201c als kollektivem Wachsamkeitsritual. Die sexuelle Sechs tritt hinter dieser breiten, auf konkrete Absicherung gerichteten Vorsichtsstrategie zur\u00fcck." },
    { name: "Bahrain", iso: "BH", typ: 3, unsicher: false, text: "Als erster Golfstaat, der bereits in den 1930er Jahren \u00d6l f\u00f6rderte, positionierte sich Bahrain fr\u00fch als regionaler Vorreiter und baute diesen Statusvorsprung gezielt zu einem Finanz- und Bankenzentrum des Nahen Ostens aus. Die Formel-1-Rennstrecke von Sakhir, seit 2004 j\u00e4hrlicher Austragungsort des Bahrain Grand Prix, dient explizit der internationalen Sichtbarkeit eines Landes, das geografisch kaum gr\u00f6\u00dfer als eine Gro\u00dfstadt ist. Trotz begrenzter eigener \u00d6lreserven im Vergleich zu den Nachbarn investiert Bahrain gezielt in Diversifizierung, um den Status als moderne, aufstrebende Wirtschaftsmacht zu behaupten. Die Verbindung zum gr\u00f6\u00dferen, m\u00e4chtigeren Saudi-Arabien \u00fcber den King-Fahd-Causeway wird als Br\u00fccke zu Wohlstand und Status genutzt, nicht als Zeichen der Abh\u00e4ngigkeit. Internationale Konferenzen, Bankenniederlassungen und ein bewusst kosmopolitisches Image sollen ein kleines K\u00f6nigreich als bedeutenden Akteur auf der Weltb\u00fchne erscheinen lassen.", subtyp: "so3", subtypText: "Bahrain zeigt eine sehr ausgepr\u00e4gt soziale Drei: Als erster Golfstaat mit \u00d6lf\u00f6rderung positionierte sich Bahrain fr\u00fch als regionaler Vorreiter und baute diesen Statusvorsprung gezielt zu einem Finanz- und Bankenzentrum aus, und die Formel-1-Rennstrecke von Sakhir dient explizit der internationalen Sichtbarkeit vor einem globalen Publikum. Internationale Konferenzen und ein bewusst kosmopolitisches Image sollen das kleine K\u00f6nigreich als bedeutenden Akteur auf der Weltb\u00fchne erscheinen lassen. Ein selbsterhaltender Anteil zeigt sich in der gezielten wirtschaftlichen Diversifizierung trotz begrenzter eigener \u00d6lreserven. Die sexuelle Drei tritt hinter diesem breiten, auf internationale Anerkennung gerichteten Statusaufbau zur\u00fcck." },
    { name: "Turkmenistan", iso: "TM", typ: 3, unsicher: false, text: "Der fr\u00fchere Pr\u00e4sident Saparmurat Nijasow lie\u00df sich selbst goldene Statuen errichten, benannte Monate und Brote nach sich und seiner Mutter um und schrieb ein eigenes spirituelles Nationalbuch, das \u201eRuhnama\u201c \u2013 Selbstinszenierung als Staatsprinzip. In der Hauptstadt Aschgabat stehen mehr wei\u00dfe Marmorgeb\u00e4ude pro Kopf als in fast jeder anderen Stadt der Welt \u2013 ein bewusst inszeniertes Bild von Wohlstand und Modernit\u00e4t, finanziert durch enorme Gasvorkommen. Der \u201eKrater der H\u00f6lle\u201c von Darvaza, ein seit Jahrzehnten brennendes Erdgasloch, wird gezielt als touristische Attraktion und Symbol nationaler Gr\u00f6\u00dfe vermarktet, statt gel\u00f6scht zu werden. Riesige, oft menschenleere Prachtstra\u00dfen und Monumentalbauten sollen internationalen Besuchern ein Bild von Erfolg und Fortschritt vermitteln, unabh\u00e4ngig von der tats\u00e4chlichen wirtschaftlichen Realit\u00e4t. Das Land z\u00e4hlt gleichzeitig zu den am st\u00e4rksten von der Au\u00dfenwelt abgeschotteten Staaten \u2013 Erfolg wird inszeniert, aber selten der internationalen Pr\u00fcfung ausgesetzt.", subtyp: "sx3", subtypText: "Turkmenistan zeigt eine sehr ausgepr\u00e4gt sexuelle Drei: Der fr\u00fchere Pr\u00e4sident Nijasow lie\u00df sich selbst goldene Statuen errichten, benannte Monate und Brote nach sich und seiner Mutter um und schrieb ein eigenes spirituelles Nationalbuch \u2013 Selbstinszenierung als pers\u00f6nlicher, fast narzisstischer Personenkult statt kollektiver Leistung. Die riesigen, oft menschenleeren Prachtstra\u00dfen und Monumentalbauten sollen Erfolg vermitteln, unabh\u00e4ngig von der tats\u00e4chlichen wirtschaftlichen Realit\u00e4t. Ein selbsterhaltender Anteil zeigt sich in den enormen Gasvorkommen, die diese Inszenierung finanzieren. Die soziale Drei, die sich in international sichtbarer Anerkennung zeigen w\u00fcrde, tritt hinter diesem pers\u00f6nlichen, weitgehend von der Au\u00dfenwelt abgeschotteten F\u00fchrerkult zur\u00fcck." },
    { name: "Kirgistan", iso: "KG", typ: 9, unsicher: false, text: "Als demokratischste, aber auch politisch instabilste Republik Zentralasiens hat Kirgistan seit der Unabh\u00e4ngigkeit 1991 drei Revolutionen erlebt (2005, 2010, 2020) \u2013 jedes Mal mit vergleichsweise wenig Blutvergie\u00dfen und einem baldigen Zur\u00fcckfinden zu Alltagsnormalit\u00e4t. Die traditionelle nomadische Jurten-Kultur, in der Gastfreundschaft und Gemeinschaftssinn zentrale Werte sind, kontrastiert mit der politischen Instabilit\u00e4t in den St\u00e4dten. Die epische Dichtung \u201eManas\u201c, eines der l\u00e4ngsten m\u00fcndlich \u00fcberlieferten Epen der Welt, wird als kulturelles Bindeglied gepflegt, das \u00fcber politische Umbr\u00fcche hinweg Kontinuit\u00e4t stiftet. Anders als die autorit\u00e4reren Nachbarn Usbekistan und Turkmenistan bewahrt Kirgistan trotz Chaos eine bemerkenswert offene Zivilgesellschaft und freie Presse. Das Land navigiert pragmatisch zwischen russischem, chinesischem und westlichem Einfluss, ohne sich in offene Konfrontation mit einer der M\u00e4chte zu begeben.", subtyp: "so9", subtypText: "Kirgistan zeigt eine ausgepr\u00e4gt soziale Neun: Nach jeder der drei Revolutionen seit 1991 fand das Land vergleichsweise schnell zu Alltagsnormalit\u00e4t zur\u00fcck statt anhaltender Konfrontation, und die traditionelle nomadische Jurten-Kultur, in der Gastfreundschaft und Gemeinschaftssinn zentrale Werte sind, pr\u00e4gt den gesellschaftlichen Grundton. Die epische Dichtung \u201eManas\u201c wird als kulturelles Bindeglied gepflegt, das \u00fcber politische Umbr\u00fcche hinweg Kontinuit\u00e4t stiftet \u2013 gemeinsame Erz\u00e4hlung als Stabilit\u00e4tsanker. Ein selbsterhaltender Anteil zeigt sich im pragmatischen Navigieren zwischen Gro\u00dfm\u00e4chten ohne offene Konfrontation. Die sexuelle Neun tritt hinter dieser breiten, gemeinschaftlich getragenen Normalisierungskraft zur\u00fcck." },
    { name: "Tadschikistan", iso: "TJ", typ: 6, unsicher: false, text: "Der B\u00fcrgerkrieg (1992\u20131997), einer der blutigsten postsowjetischen Konflikte mit rund 100.000 Toten, hinterlie\u00df ein Land, das bis heute von tiefem Misstrauen zwischen Regionen und Clans gepr\u00e4gt ist. Pr\u00e4sident Emomali Rahmon, seit dem Kriegsende ununterbrochen an der Macht, rechtfertigt seine autorit\u00e4re Kontrolle explizit mit der Verhinderung eines erneuten B\u00fcrgerkriegs. Die abgelegene Pamir-Region, geografisch fast vollst\u00e4ndig isoliert, bewahrt traditionell eigenst\u00e4ndige, misstrauisch-vorsichtige Gemeinschaften, die selten der Zentralmacht vertrauten. Die lange, por\u00f6se Grenze zu Afghanistan wird als st\u00e4ndige Bedrohungsquelle wahrgenommen, mit massiver Milit\u00e4rpr\u00e4senz zur Absicherung. Checkpoints, Ausweiskontrollen und ein dichtes Sicherheitsnetz durchziehen den Alltag als sichtbares Erbe der Nachkriegs-Wachsamkeit.", subtyp: "se6", subtypText: "Tadschikistan zeigt eine deutlich selbsterhaltende Sechs: Checkpoints, Ausweiskontrollen und ein dichtes Sicherheitsnetz durchziehen den Alltag als sichtbares, konkretes Erbe der Nachkriegs-Wachsamkeit, und die lange, por\u00f6se Grenze zu Afghanistan wird als st\u00e4ndige Bedrohungsquelle mit massiver Milit\u00e4rpr\u00e4senz zur Absicherung wahrgenommen. Pr\u00e4sident Rahmon rechtfertigt seine autorit\u00e4re Kontrolle explizit mit der Verhinderung eines erneuten B\u00fcrgerkriegs \u2013 Sicherheit als oberstes, pers\u00f6nlich verantwortetes Staatsziel. Ein sozialer Anteil zeigt sich im tiefen Misstrauen zwischen Regionen und Clans nach dem B\u00fcrgerkrieg. Die sexuelle Sechs tritt hinter dieser breiten, materiell sichtbaren Sicherheitsarchitektur zur\u00fcck." },
    { name: "Aserbaidschan", iso: "AZ", typ: 3, unsicher: false, text: "Aserbaidschan hat seinen \u00d6lreichtum gezielt in spektakul\u00e4re Prestigeprojekte investiert \u2013 von den futuristischen \u201eFlame Towers\u201c in Baku bis zur Ausrichtung des Eurovision Song Contest 2012 und der Formel 1 seit 2016. Pr\u00e4sident Ilham Alijew, Sohn seines Vorg\u00e4ngers, inszeniert das Land international konsequent als moderne, aufstrebende Erfolgsgeschichte am Kaspischen Meer. Der Sieg im zweiten Bergkarabach-Krieg 2020 wurde landesweit als triumphaler nationaler Erfolg zelebriert, mit Milit\u00e4rparaden und einem eigens errichteten \u201eTroph\u00e4enpark\u201c gefallener armenischer Ausr\u00fcstung. Baku wurde binnen weniger Jahrzehnte von einer sowjetischen Industriestadt zu einer gl\u00e4nzenden Metropole mit Wolkenkratzern und internationalen Konferenzen umgestaltet \u2013 sichtbarer Fortschritt als Staatsr\u00e4son. Die Ausrichtung der UN-Klimakonferenz COP29 2024 diente ebenfalls explizit der internationalen Anerkennung und Imagepflege des Landes als bedeutender globaler Akteur.", subtyp: "so3", subtypText: "Aserbaidschan zeigt eine sehr ausgepr\u00e4gt soziale Drei: Pr\u00e4sident Alijew inszeniert das Land international konsequent als moderne, aufstrebende Erfolgsgeschichte, und die gezielte Ausrichtung von Eurovision, Formel 1 und der UN-Klimakonferenz COP29 dient explizit der internationalen Anerkennung vor einem globalen Publikum. Der Sieg im zweiten Bergkarabach-Krieg 2020 wurde landesweit mit Milit\u00e4rparaden als kollektiver, \u00f6ffentlicher Triumph zelebriert. Ein selbsterhaltender Anteil zeigt sich in der gezielten Investition des \u00d6lreichtums in die eigene wirtschaftliche Absicherung. Die sexuelle Drei tritt hinter diesem breiten, medial inszenierten nationalen Erfolgsnarrativ zur\u00fcck." },
    { name: "Syrien", iso: "SY", typ: 8, unsicher: false, text: "Syrien wurde von 1970 bis zum Sturz 2024 durch die Familie Assad regiert \u2013 zun\u00e4chst Hafiz al-Assad, dann sein Sohn Baschar \u2013, deren Herrschaft sich \u00fcber Jahrzehnte auf einen der brutalsten Geheimdienst- und Sicherheitsapparate der Region st\u00fctzte. Der B\u00fcrgerkrieg ab 2011, ausgel\u00f6st durch die brutale Niederschlagung ziviler Proteste, eskalierte zu einem der verheerendsten bewaffneten Machtk\u00e4mpfe des 21. Jahrhunderts, mit Fassbomben, Chemiewaffeneins\u00e4tzen und Hunderttausenden Toten. Rivalisierende Machtzentren \u2013 Regierungstruppen, verschiedene Rebellengruppen, der IS, kurdische Kr\u00e4fte \u2013 k\u00e4mpften \u00fcber ein Jahrzehnt lang um territoriale Kontrolle, unterst\u00fctzt von konkurrierenden ausl\u00e4ndischen M\u00e4chten (Russland, Iran, T\u00fcrkei, USA). Der \u00fcberraschend schnelle Sturz Assads Ende 2024 durch die Offensive islamistischer Rebellengruppen zeigte erneut, dass in Syrien Territorium und Herrschaft letztlich durch milit\u00e4rische Durchsetzungsf\u00e4higkeit entschieden werden, nicht durch Verhandlung. Die neue F\u00fchrung unter Ahmed al-Scharaa steht seither vor der Aufgabe, ein Land aus rivalisierenden bewaffneten Fraktionen und Milizen \u00fcberhaupt erst wieder unter eine gemeinsame Autorit\u00e4t zu bringen.", subtyp: "so8", subtypText: "Syrien zeigt eine ausgepr\u00e4gt soziale Acht: Rivalisierende Machtzentren \u2013 Regierungstruppen, verschiedene Rebellengruppen, der IS, kurdische Kr\u00e4fte \u2013 k\u00e4mpften \u00fcber ein Jahrzehnt lang um territoriale Kontrolle, jeweils unterst\u00fctzt von konkurrierenden ausl\u00e4ndischen M\u00e4chten \u2013 organisierte Gruppenkonfrontation statt Einzelkampf. Der \u00fcberraschend schnelle Sturz Assads Ende 2024 durch die Offensive islamistischer Rebellengruppen zeigte erneut, dass Territorium durch kollektive milit\u00e4rische Durchsetzungsf\u00e4higkeit entschieden wird. Ein selbsterhaltender Anteil zeigt sich im jahrzehntelangen, auf Kontrolle und \u00dcberwachung gest\u00fctzten Sicherheitsapparat der Familie Assad. Die sexuelle Acht tritt hinter diesem breiten, faktions\u00fcbergreifenden Machtkampf zur\u00fcck." },
    { name: "Pal\u00e4stina", iso: "PS", typ: 4, unsicher: false, text: "Pal\u00e4stina, seit 2012 als \u201eNichtmitgliedsbeobachterstaat\u201c bei den Vereinten Nationen gef\u00fchrt, aber ohne volle Souver\u00e4nit\u00e4t \u00fcber sein beanspruchtes Gebiet, tr\u00e4gt eine nationale Identit\u00e4t, die tief aus der \u201eNakba\u201c von 1948 (der Vertreibung und Flucht hunderttausender Pal\u00e4stinenser) und jahrzehntelanger Besatzung geformt ist. Die geografische und politische Zerrissenheit zwischen Westjordanland (Pal\u00e4stinensische Autonomiebeh\u00f6rde) und Gazastreifen (Hamas), oft mit offener Rivalit\u00e4t zwischen beiden Machtzentren, verst\u00e4rkt ein Bewusstsein einzigartiger, komplexer nationaler Zerrissenheit. Das Konzept des \u201eSumud\u201c (standhaftes Ausharren, Verwurzelung im eigenen Land trotz aller Widrigkeiten) wird als zentraler, unverwechselbarer kultureller Wert gepflegt, der die eigene Erfahrung von der jedes anderen Volkes abhebt. Die pal\u00e4stinensische Diaspora, weltweit verstreut und in Fl\u00fcchtlingslagern in Nachbarl\u00e4ndern lebend, pflegt eine intensive, oft schmerzvolle Verbindung zu einer verlorenen oder unzug\u00e4nglichen Heimat als zentrales Identit\u00e4tsmerkmal. Der Konflikt um dieselbe historische Landschaft, dieselben St\u00e4dte und dieselbe Geschichte mit Israel bleibt der bestimmende, alles \u00fcberschattende Bezugspunkt pal\u00e4stinensischer nationaler Selbstverortung.", subtyp: "so4", subtypText: "Pal\u00e4stina zeigt eine ausgepr\u00e4gt soziale Vier: Die nationale Identit\u00e4t, tief aus der \u201eNakba\u201c von 1948 und jahrzehntelanger Besatzung geformt, wird als kollektiv geteilte, einzigartige Erfahrung verstanden, die sich von der jedes anderen Volkes abhebt \u2013 Andersartigkeit als gemeinsames nationales Selbstverst\u00e4ndnis. Das Konzept des \u201eSumud\u201c, standhaftes Ausharren und Verwurzelung im eigenen Land, wird als zentraler, unverwechselbarer kultureller Wert kollektiv gepflegt. Ein selbsterhaltender Anteil zeigt sich in der schmerzvollen Verbindung der weltweit verstreuten Diaspora zu einer verlorenen oder unzug\u00e4nglichen Heimat. Die sexuelle Vier tritt hinter diesem breiten, national geteilten Identit\u00e4tsbewusstsein zur\u00fcck." },
  ]},
    { region: "Asien", laender: [
    { name: "Japan", iso: "JP", typ: 4, unsicher: false, text: "Kaum ein Wort ist so un\u00fcbersetzbar japanisch wie \u201eMono no Aware\u201c \u2013 das wehm\u00fctige, zutiefst gef\u00fchlte Bewusstsein f\u00fcr die Verg\u00e4nglichkeit der Dinge, gefeiert etwa in der j\u00e4hrlichen Kirschbl\u00fcte, die absichtlich nur wenige Tage w\u00e4hrt. \u201eWabi-Sabi\u201c, die \u00c4sthetik des Unvollkommenen und Verg\u00e4nglichen, findet sich in der Keramikkunst Kintsugi, bei der zerbrochenes Porzellan mit Goldlack repariert wird \u2013 der Bruch wird sichtbar gefeiert, nicht versteckt. Haiku-Dichtung, mit ihrer knappen, gef\u00fchlsintensiven Erfassung eines fl\u00fcchtigen Augenblicks, ist seit Jahrhunderten hochgeachtete Kunstform. Die Teezeremonie, in aller Stille und Pr\u00e4zision zelebriert, dient letztlich dazu, einen einmaligen, nie wiederkehrenden Moment gemeinsamen Erlebens bewusst zu w\u00fcrdigen \u2013 \u201eIchi-go ichi-e\u201c, eine Begegnung, ein Moment. Diese tiefe Gef\u00fchlskultur wird jedoch nicht ungez\u00fcgelt ausgelebt, sondern in hochdisziplinierte Formen gegossen \u2013 Ordnung als Gef\u00e4\u00df f\u00fcr tiefe Emotion, nicht deren Gegenteil.", subtyp: "se4", subtypText: "Japan zeigt eine deutlich selbsterhaltende Vier: \u201eMono no Aware\u201c und \u201eWabi-Sabi\u201c werden nicht ungez\u00fcgelt ausgelebt, sondern in hochdisziplinierte, private Formen gegossen \u2013 die Teezeremonie, in aller Stille zelebriert, w\u00fcrdigt einen einmaligen Moment innerhalb strenger, ritualisierter Form. Kintsugi, bei dem zerbrochenes Porzellan mit Goldlack repariert wird, zeigt Melancholie als etwas, das konkret, handwerklich und im eigenen Zuhause gepflegt wird. Ein sozialer Anteil zeigt sich in der \u00fcber Jahrhunderte hochgeachteten Haiku-Dichtung als geteilter Kunstform. Die sexuelle Vier tritt hinter dieser leisen, diszipliniert eingehegten Gef\u00fchlskultur zur\u00fcck." },
    { name: "China", iso: "CN", typ: 3, unsicher: false, text: "Der Aufstieg vom Fahrrad-Land der 1980er zur zweitgr\u00f6\u00dften Volkswirtschaft der Welt innerhalb einer einzigen Generation ist eines der dramatischsten wirtschaftlichen Aufstiegsnarrative der Geschichte \u2013 und wird als solches auch aktiv gefeiert. Der \u201eGaokao\u201c, Chinas nationale Universit\u00e4tsaufnahmepr\u00fcfung, gilt als eines der kompetitivsten Bildungssysteme der Welt \u2013 Familien investieren enorme Ressourcen, damit Kinder gesellschaftlich aufsteigen. Statussymbole \u2013 von internationalen Luxusmarken bis zu Wohnungsgr\u00f6\u00dfe in Millionenst\u00e4dten \u2013 werden offen als Erfolgsbeweis zur Schau gestellt. Millionen Wanderarbeiter verlie\u00dfen l\u00e4ndliche Regionen f\u00fcr die St\u00e4dte, angetrieben vom Versprechen wirtschaftlichen Aufstiegs, oft unter erheblichen pers\u00f6nlichen Opfern. Gleichzeitig trug das alte China \u00fcber Jahrtausende eine ganz andere, introvertiertere Note: die konfuzianische und daoistische Gelehrtentradition, Kalligrafie und Meditation als Wege stiller Erkenntnis. Diese Spannung zwischen historischem R\u00fcckzugsideal und gegenw\u00e4rtigem Erfolgsstreben ist selbst die eigentliche Erkenntnis \u00fcber den kulturellen Wandel Chinas.", subtyp: "so3", subtypText: "China zeigt eine ausgepr\u00e4gt soziale Drei: Der Aufstieg vom Fahrrad-Land zur zweitgr\u00f6\u00dften Volkswirtschaft der Welt wird als kollektives nationales Erfolgsnarrativ aktiv gefeiert, und der \u201eGaokao\u201c als eines der kompetitivsten Bildungssysteme der Welt zeigt, dass Familien enorme Ressourcen investieren, damit Kinder gesellschaftlich aufsteigen \u2013 Erfolg als geteiltes, gesellschaftlich anerkanntes Ziel. Statussymbole werden offen zur Schau gestellt als sichtbarer Erfolgsbeweis vor der Gemeinschaft. Ein selbsterhaltender Anteil zeigt sich in den Millionen Wanderarbeitern, die f\u00fcr wirtschaftlichen Aufstieg pers\u00f6nliche Opfer bringen. Die sexuelle Drei tritt hinter diesem breiten, kollektiv gefeierten Aufstiegsnarrativ zur\u00fcck." },
    { name: "Indien", iso: "IN", typ: 9, unsicher: false, text: "Mit 22 offiziellen Amtssprachen, Hunderten weiterer Dialekte und praktisch allen Weltreligionen auf einem Subkontinent vereint, funktioniert Indien nur, weil eine tiefe kulturelle F\u00e4higkeit besteht, Widerspr\u00fcche nebeneinander bestehen zu lassen, statt sie aufzul\u00f6sen. Der Hinduismus selbst kennt keine zentrale Dogmatik, sondern eine enorme Bandbreite an G\u00f6ttern, Philosophien und Praktiken, die gleichberechtigt nebeneinander verehrt werden. Auf \u00fcberf\u00fcllten Stra\u00dfen, in \u00fcberf\u00fcllten Z\u00fcgen, bei chaotischem Verkehr zeigt sich eine bemerkenswerte kollektive Gelassenheit gegen\u00fcber Enge und scheinbarem Durcheinander \u2013 \u201eAdjust kar lo\u201c, \u201epasst euch eben an\u201c, ist eine allt\u00e4gliche Redewendung. Yoga und Meditation, urspr\u00fcnglich spirituelle Praktiken zur inneren Ausgeglichenheit, sind so tief in der Alltagskultur verwurzelt, dass sie l\u00e4ngst globaler Exportartikel wurden. Trotz enormer sozialer Spannungen und Konflikte bewahrt Indien seit der Unabh\u00e4ngigkeit 1947 die gr\u00f6\u00dfte Demokratie der Welt \u2013 ein fortw\u00e4hrendes, oft chaotisches, aber selten gewaltsam eskalierendes Ringen um Ausgleich zwischen extrem unterschiedlichen Interessen.", subtyp: "so9", subtypText: "Indien zeigt eine sehr ausgepr\u00e4gt soziale Neun: Mit 22 offiziellen Amtssprachen und praktisch allen Weltreligionen auf einem Subkontinent funktioniert das Land nur, weil eine tiefe kulturelle F\u00e4higkeit besteht, Widerspr\u00fcche kollektiv nebeneinander bestehen zu lassen statt sie aufzul\u00f6sen \u2013 \u201eAdjust kar lo\u201c als allt\u00e4gliche, geteilte Redewendung. Die gr\u00f6\u00dfte Demokratie der Welt bewahrt seit 1947 ein fortw\u00e4hrendes, selten gewaltsam eskalierendes Ringen um Ausgleich zwischen extrem unterschiedlichen Interessen. Ein selbsterhaltender Anteil zeigt sich in Yoga und Meditation als tief verwurzelten Praktiken innerer Ausgeglichenheit. Die sexuelle Neun tritt hinter dieser breiten, gesellschaftlich gelebten Gelassenheit zur\u00fcck." },
    { name: "S\u00fcdkorea", iso: "KR", typ: 2, unsicher: false, text: "\u201eJeong\u201c, ein Konzept tiefer emotionaler Verbundenheit und Zugeh\u00f6rigkeit, das \u00fcber blo\u00dfe Freundschaft hinausgeht, gilt als zentraler Kitt s\u00fcdkoreanischer Beziehungen \u2013 man ist f\u00fcreinander verantwortlich, oft \u00fcber Jahrzehnte. Der enorme Bildungsdruck, mit Nachhilfeschulen (Hagwon) bis sp\u00e4t in die Nacht, wird von Eltern nicht prim\u00e4r als individuelles Erfolgsstreben verstanden, sondern als Investition in die Ehre und Zukunft der ganzen Familie. K-Pop-Bands, streng trainiert und choreografiert, pflegen mit ihren Fans eine Beziehungskultur, die auf gegenseitiger emotionaler F\u00fcrsorge und Loyalit\u00e4t basiert, nicht nur auf Konsum. Gemeinsames Essen von einer geteilten Platte, mit Trinkritualen, bei denen man einander aktiv einschenkt, symbolisiert allt\u00e4gliche gegenseitige F\u00fcrsorge. Firmen werden traditionell als quasi-famili\u00e4re Gemeinschaften verstanden, in denen Vorgesetzte sich um das Wohl der Angestellten k\u00fcmmern sollen, im Austausch f\u00fcr Loyalit\u00e4t \u2013 ein Beziehungsvertrag, der \u00fcber reine Lohnarbeit hinausgeht.", subtyp: "so2", subtypText: "S\u00fcdkorea zeigt eine sehr ausgepr\u00e4gt soziale Zwei: \u201eJeong\u201c, ein Konzept tiefer emotionaler Verbundenheit \u00fcber blo\u00dfe Freundschaft hinaus, gilt als zentraler Kitt aller Beziehungen, und Firmen werden traditionell als quasi-famili\u00e4re Gemeinschaften verstanden, in denen Vorgesetzte sich um das Wohl der Angestellten k\u00fcmmern \u2013 F\u00fcrsorge als institutionalisiertes Beziehungsprinzip. K-Pop-Bands pflegen mit ihren Fans eine Beziehungskultur gegenseitiger emotionaler F\u00fcrsorge und Loyalit\u00e4t. Ein selbsterhaltender Anteil zeigt sich im enormen Bildungsdruck als Investition in die Ehre der ganzen Familie. Die sexuelle Zwei tritt hinter dieser breiten, institutionell verankerten F\u00fcrsorgekultur zur\u00fcck." },
    { name: "Thailand", iso: "TH", typ: 2, unsicher: false, text: "\u201eLand des L\u00e4chelns\u201c ist kein reiner Werbeslogan: Das L\u00e4cheln erf\u00fcllt in Thailand viele soziale Funktionen \u2013 es entschuldigt, tr\u00f6stet, begr\u00fc\u00dft und zeigt aktiv F\u00fcrsorge, weit \u00fcber blo\u00dfe H\u00f6flichkeit hinaus. \u201eKreng Jai\u201c, die R\u00fccksichtnahme darauf, anderen keine Last oder Unannehmlichkeit zu bereiten, pr\u00e4gt t\u00e4gliche soziale Interaktionen bis ins Detail. Stra\u00dfenverk\u00e4ufer und Nachbarn teilen selbstverst\u00e4ndlich Essen miteinander, auch ohne besonderen Anlass \u2013 F\u00fcrsorge als allt\u00e4gliche, unspektakul\u00e4re Praxis. Der Buddhismus, den \u00fcber 90 Prozent der Bev\u00f6lkerung praktizieren, betont aktives Verdienst-Sammeln durch gute Taten f\u00fcr andere, nicht nur passive Meditation. Famili\u00e4re F\u00fcrsorge erstreckt sich traditionell auch auf betagte Eltern, die selbstverst\u00e4ndlich von ihren Kindern zu Hause gepflegt werden, nicht in Heime gegeben \u2013 aktive, gelebte Zuwendung als kultureller Grundwert.", subtyp: "so2", subtypText: "Thailand zeigt eine sehr ausgepr\u00e4gt soziale Zwei: Das L\u00e4cheln erf\u00fcllt viele soziale Funktionen \u2013 es entschuldigt, tr\u00f6stet, begr\u00fc\u00dft und zeigt aktiv F\u00fcrsorge \u2013, und \u201eKreng Jai\u201c, die R\u00fccksichtnahme darauf, anderen keine Last zu bereiten, pr\u00e4gt t\u00e4gliche soziale Interaktionen bis ins Detail. Der von \u00fcber 90 Prozent praktizierte Buddhismus betont aktives Verdienst-Sammeln durch gute Taten f\u00fcr andere, nicht nur passive Meditation. Ein selbsterhaltender Anteil zeigt sich in der famili\u00e4ren Pflege betagter Eltern zu Hause statt im Heim. Die sexuelle Zwei tritt hinter dieser breiten, allt\u00e4glich gelebten F\u00fcrsorgekultur zur\u00fcck." },
    { name: "Vietnam", iso: "VN", typ: 6, unsicher: false, text: "Nach Jahrhunderten chinesischer Herrschaft, franz\u00f6sischer Kolonialisierung und dem verheerenden Vietnamkrieg mit Millionen Toten ist Wachsamkeit gegen\u00fcber \u00e4u\u00dferer Einmischung tief im nationalen Bewusstsein verankert. Der Widerstandsgeist gegen \u00fcberm\u00e4chtige Gegner \u2013 ob China, Frankreich oder die USA \u2013 wird in Schulen und \u00f6ffentlichen Denkm\u00e4lern als zentrales nationales Narrativ vermittelt. Familien- und Dorfgemeinschaften, mit engen gegenseitigen Verpflichtungen, dienten historisch als verl\u00e4sslichster Schutz in Kriegszeiten, wenn Zentralmacht fehlte oder unzuverl\u00e4ssig war. Der Ahnenkult, mit Hausalt\u00e4ren in nahezu jedem vietnamesischen Zuhause, verbindet Sicherheit im Diesseits eng mit F\u00fcrsorge und Schutz durch verstorbene Vorfahren. Auch im heutigen wirtschaftlichen Aufschwung bleibt eine kulturelle Vorsicht gegen\u00fcber schnellen, ungepr\u00fcften Versprechen erkennbar \u2013 Vertrauen muss sich \u00fcber Zeit beweisen.", subtyp: "se6", subtypText: "Vietnam zeigt eine deutlich selbsterhaltende Sechs: Familien- und Dorfgemeinschaften mit engen gegenseitigen Verpflichtungen dienten historisch als verl\u00e4sslichster Schutz in Kriegszeiten, wenn Zentralmacht fehlte, und der Ahnenkult mit Hausalt\u00e4ren in nahezu jedem Zuhause verbindet Sicherheit im Diesseits eng mit F\u00fcrsorge durch verstorbene Vorfahren \u2013 konkreter, famili\u00e4r verankerter Schutz. Auch im heutigen wirtschaftlichen Aufschwung bleibt eine kulturelle Vorsicht gegen\u00fcber ungepr\u00fcften Versprechen erkennbar. Ein sozialer Anteil zeigt sich im landesweit vermittelten Widerstandsnarrativ gegen \u00fcberm\u00e4chtige Gegner. Die sexuelle Sechs tritt hinter dieser breiten, famili\u00e4r verankerten Wachsamkeit zur\u00fcck." },
    { name: "Indonesien", iso: "ID", typ: 9, unsicher: false, text: "Mit \u00fcber 17.000 Inseln, Hunderten Ethnien und Sprachen sowie der weltweit gr\u00f6\u00dften muslimischen Bev\u00f6lkerung neben bedeutenden hinduistischen, christlichen und buddhistischen Minderheiten h\u00e4lt Indonesien seine Vielfalt durch das Staatsmotto \u201eBhinneka Tunggal Ika\u201c \u2013 Einheit in Vielfalt \u2013 bewusst zusammen. \u201eGotong Royong\u201c, das Prinzip gegenseitiger, unb\u00fcrokratischer Nachbarschaftshilfe, ist von der Dorfebene bis in die Verfassung als Grundwert verankert. Die balinesische Kultur etwa integriert hinduistische, animistische und sp\u00e4ter islamische Einfl\u00fcsse zu einer eigenst\u00e4ndigen, friedlichen Synthese statt gegenseitiger Verdr\u00e4ngung. Trotz gelegentlicher religi\u00f6ser Spannungen bleibt die indonesische Gesellschaft im regionalen Vergleich bemerkenswert stabil und wenig eskalierend. Das ausgepr\u00e4gte Prinzip des \u201eMusyawarah\u201c \u2013 Konsensfindung durch gemeinsame Beratung, bis alle zustimmen k\u00f6nnen \u2013 pr\u00e4gt Entscheidungsprozesse von Dorfversammlungen bis zur nationalen Politik.", subtyp: "so9", subtypText: "Indonesien zeigt eine sehr ausgepr\u00e4gt soziale Neun: Das Staatsmotto \u201eBhinneka Tunggal Ika\u201c \u2013 Einheit in Vielfalt \u2013 h\u00e4lt die enorme Vielfalt bewusst kollektiv zusammen, und \u201eGotong Royong\u201c, das Prinzip gegenseitiger, unb\u00fcrokratischer Nachbarschaftshilfe, ist von der Dorfebene bis in die Verfassung als Grundwert verankert. Das Prinzip des \u201eMusyawarah\u201c \u2013 Konsensfindung durch gemeinsame Beratung, bis alle zustimmen k\u00f6nnen \u2013 pr\u00e4gt Entscheidungsprozesse auf allen Ebenen. Ein selbsterhaltender Anteil zeigt sich in der balinesischen Kultur, die verschiedene religi\u00f6se Einfl\u00fcsse zu einer friedlichen Synthese integriert. Die sexuelle Neun tritt hinter diesem breiten, verfassungsrechtlich verankerten Einheitsideal zur\u00fcck." },
    { name: "Philippinen", iso: "PH", typ: 2, unsicher: false, text: "\u201eBayanihan\u201c, w\u00f6rtlich das gemeinschaftliche Tragen eines ganzen Hauses beim Umzug durch die Nachbarschaft, ist zum Sinnbild philippinischer Solidarit\u00e4t geworden \u2013 gegenseitige praktische Hilfe ohne Gegenleistungserwartung. Gro\u00dfe Familienfeiern, oft mit Dutzenden Verwandten, sind zentraler Bestandteil des sozialen Lebens, mit klaren gegenseitigen Verpflichtungen zwischen den Generationen. Millionen philippinische Arbeitskr\u00e4fte im Ausland \u2013 \u201eOverseas Filipino Workers\u201c \u2013 schicken einen erheblichen Teil ihres Einkommens nach Hause, eine gelebte, oft aufopfernde F\u00fcrsorge f\u00fcr die zur\u00fcckgebliebene Familie. Katholische Glaubenspraxis, mit intensiven Festen wie der Karwoche, betont aktive N\u00e4chstenliebe und gegenseitige F\u00fcrsorge innerhalb der Gemeinde. Auch bei Naturkatastrophen, die die Philippinen h\u00e4ufig treffen, zeigt sich eine bemerkenswert schnelle, unb\u00fcrokratische Nachbarschaftssolidarit\u00e4t beim Wiederaufbau.", subtyp: "so2", subtypText: "Die Philippinen zeigen eine sehr ausgepr\u00e4gt soziale Zwei: \u201eBayanihan\u201c, das gemeinschaftliche Tragen eines ganzen Hauses beim Umzug durch die Nachbarschaft, ist zum Sinnbild geteilter, praktischer Hilfe ohne Gegenleistungserwartung geworden, und die schnelle, unb\u00fcrokratische Nachbarschaftssolidarit\u00e4t beim Wiederaufbau nach Naturkatastrophen best\u00e4tigt dieses Muster kollektiver F\u00fcrsorge. Katholische Glaubenspraxis betont aktive N\u00e4chstenliebe innerhalb der Gemeinde. Ein selbsterhaltender Anteil zeigt sich in den Millionen \u201eOverseas Filipino Workers\u201c, die einen erheblichen Teil ihres Einkommens f\u00fcr die Familie nach Hause schicken. Die sexuelle Zwei tritt hinter dieser breiten, gemeinschaftlich gelebten Solidarit\u00e4tskultur zur\u00fcck." },
    { name: "Pakistan", iso: "PK", typ: 6, unsicher: false, text: "Seit der oft blutigen Teilung von Indien 1947, mit Millionen Vertriebenen und Todesopfern, sowie mehreren Kriegen mit dem Nachbarn Indien ist ein tiefes kollektives Sicherheitsbed\u00fcrfnis Teil der nationalen Identit\u00e4t. Clan- und Gro\u00dffamilienstrukturen, mit dem Ehrenkodex \u201eIzzat\u201c, regeln nach wie vor Schutz, Loyalit\u00e4t und gegenseitige Verpflichtung st\u00e4rker als staatliche Institutionen in vielen Regionen. In den Stammesgebieten an der afghanischen Grenze gilt der paschtunische Ehrenkodex, der Gastfreundschaft und Schutz der eigenen Gemeinschaft als heilige Pflicht versteht. Milit\u00e4r und Sicherheitsapparat genie\u00dfen traditionell hohes gesellschaftliches Ansehen als Garanten nationaler Sicherheit in einer als bedrohlich empfundenen geopolitischen Lage. Famili\u00e4re Ehe- und Verwandtschaftsnetzwerke, oft innerhalb der erweiterten Familie arrangiert, dienen auch der Absicherung von Vertrauen und gegenseitigem Beistand.", subtyp: "se6", subtypText: "Pakistan zeigt eine deutlich selbsterhaltende Sechs: Clan- und Gro\u00dffamilienstrukturen mit dem Ehrenkodex \u201eIzzat\u201c regeln noch heute Schutz, Loyalit\u00e4t und gegenseitige Verpflichtung st\u00e4rker als staatliche Institutionen in vielen Regionen, und famili\u00e4re Ehe- und Verwandtschaftsnetzwerke, oft innerhalb der erweiterten Familie arrangiert, dienen der konkreten Absicherung von Vertrauen und gegenseitigem Beistand. Der paschtunische Ehrenkodex in den Stammesgebieten versteht Gastfreundschaft und Schutz der eigenen Gemeinschaft als heilige Pflicht. Ein sozialer Anteil zeigt sich im hohen gesellschaftlichen Ansehen von Milit\u00e4r und Sicherheitsapparat als Garanten nationaler Sicherheit. Die sexuelle Sechs tritt hinter dieser breiten, famili\u00e4r verankerten Sicherheitsstrategie zur\u00fcck." },
    { name: "Nepal", iso: "NP", typ: 9, unsicher: false, text: "Als Geburtsort Buddhas und mit einer \u00fcber Jahrhunderte gewachsenen Koexistenz von Hinduismus und Buddhismus praktiziert Nepal eine bemerkenswert friedliche religi\u00f6se Vielfalt \u2013 viele Nepalesen besuchen selbstverst\u00e4ndlich sowohl hinduistische Tempel als auch buddhistische Stupas. Die \u00fcber hundert ethnischen Gruppen des Landes, von den Sherpas im Himalaya bis zu den Newar im Kathmandu-Tal, leben trotz unterschiedlicher Sprachen und Br\u00e4uche in \u00fcberwiegend friedlicher Nachbarschaft. Der zehnj\u00e4hrige maoistische B\u00fcrgerkrieg (1996\u20132006) endete, anders als viele vergleichbare Konflikte, in einem verhandelten Friedensprozess und einer neuen, integrativen Verfassung statt in dauerhafter Spaltung. Die Sherpa-Kultur im Everest-Gebiet ist bekannt f\u00fcr ihre Gelassenheit und ihren undramatischen Umgang mit den extremen Gefahren des H\u00f6henbergsteigens. Buddhistische Gebetsfahnen und Manisteine, die \u00fcberall im Land zu finden sind, sollen Frieden und Wohlwollen aktiv \u00fcber die Landschaft verbreiten.", subtyp: "so9", subtypText: "Nepal zeigt eine sehr ausgepr\u00e4gt soziale Neun: Die \u00fcber hundert ethnischen Gruppen des Landes leben trotz unterschiedlicher Sprachen und Br\u00e4uche in \u00fcberwiegend friedlicher Nachbarschaft, und der zehnj\u00e4hrige maoistische B\u00fcrgerkrieg endete in einem verhandelten Friedensprozess und einer neuen, integrativen Verfassung statt in dauerhafter Spaltung. Die \u00fcber Jahrhunderte gewachsene, friedliche Koexistenz von Hinduismus und Buddhismus best\u00e4tigt diese kollektive F\u00e4higkeit zu Ausgleich. Ein selbsterhaltender Anteil zeigt sich in der Gelassenheit der Sherpa-Kultur im Umgang mit den Gefahren des H\u00f6henbergsteigens. Die sexuelle Neun tritt hinter diesem breiten, gesellschaftlich gelebten Friedensideal zur\u00fcck." },
    { name: "Mongolei", iso: "MN", typ: 5, unsicher: false, text: "Auf einer der am d\u00fcnnsten besiedelten Fl\u00e4chen der Erde \u2013 etwa zwei Einwohner pro Quadratkilometer \u2013 ist Weite und Alleinsein allt\u00e4gliche Lebensrealit\u00e4t f\u00fcr die traditionell nomadischen Hirtenfamilien. Das Ger, das traditionelle Rundzelt, erm\u00f6glicht ein Leben in bewusster Distanz zu gr\u00f6\u00dferen Siedlungen, oft Tagesreisen von der n\u00e4chsten Ortschaft entfernt. Die Nomadenkultur lehrt seit Kindheit Eigenst\u00e4ndigkeit und Selbstversorgung \u2013 Familien ziehen mit ihren Herden oft mehrmals j\u00e4hrlich um, unabh\u00e4ngig von festen Gemeinschaften. Schamanistische und buddhistische Traditionen betonen die stille, introspektive Verbindung des Einzelnen mit Natur und Geistwelt, weniger die laute, kollektive Zeremonie. Trotz der modernen Hauptstadt Ulaanbaatar bleibt die kulturelle Identit\u00e4t stark durch das Bild des einsamen Reiters in endloser Steppe gepr\u00e4gt \u2013 R\u00fcckzug und Eigenst\u00e4ndigkeit als Kernideal.", subtyp: "se5", subtypText: "Die Mongolei zeigt eine sehr ausgepr\u00e4gt selbsterhaltende F\u00fcnf: Das Ger, das traditionelle Rundzelt, erm\u00f6glicht ein Leben in bewusster Distanz zu gr\u00f6\u00dferen Siedlungen, und die Nomadenkultur lehrt seit Kindheit Eigenst\u00e4ndigkeit und Selbstversorgung \u2013 Familien ziehen mit ihren Herden unabh\u00e4ngig von festen Gemeinschaften. Auf einer der am d\u00fcnnsten besiedelten Fl\u00e4chen der Erde sind Weite und Alleinsein allt\u00e4gliche, praktische Lebensrealit\u00e4t. Ein sozialer Anteil zeigt sich in schamanistischen und buddhistischen Traditionen, die dennoch eher die introspektive Einzelverbindung zur Geistwelt betonen. Die sexuelle F\u00fcnf tritt hinter diesem breiten, ressourcenbewussten R\u00fcckzugsideal zur\u00fcck." },
    { name: "Sri Lanka", iso: "LK", typ: 9, unsicher: false, text: "Nach einem 26 Jahre w\u00e4hrenden B\u00fcrgerkrieg zwischen der singhalesisch-buddhistischen Mehrheit und der tamilischen Minderheit, der 2009 endete, hat sich Sri Lanka in eine Phase bewusster, wenn auch nicht abgeschlossener Vers\u00f6hnung begeben. Der Theravada-Buddhismus, den die Mehrheit praktiziert, betont Gelassenheit und das Loslassen von Groll als Weg zu innerem Frieden \u2013 eine Haltung, die auch politisch immer wieder beschworen wird. Die ber\u00fchmte Gastfreundschaft gegen\u00fcber Reisenden, unabh\u00e4ngig von deren Herkunft, zeigt eine Kultur, die trotz interner Konflikte nach au\u00dfen bemerkenswert offen bleibt. Traditionelle Dorfgemeinschaften pflegen gemeinsame religi\u00f6se Feste, die singhalesische und tamilische Elemente teils \u00fcberschneidend feiern. Die Teeplantagen im Hochland, mit ihrem geruhsamen, jahreszeitlich getakteten Arbeitsrhythmus, stehen sinnbildlich f\u00fcr eine Kultur, die trotz H\u00e4rten eine gewisse gelassene Kontinuit\u00e4t bewahrt.", subtyp: "so9", subtypText: "Sri Lanka zeigt eine ausgepr\u00e4gt soziale Neun: Nach dem 26 Jahre w\u00e4hrenden B\u00fcrgerkrieg hat sich das Land in eine Phase bewusster, kollektiver Vers\u00f6hnung begeben, und der Theravada-Buddhismus, den die Mehrheit praktiziert, betont Gelassenheit und das Loslassen von Groll als politisch immer wieder beschworenen Weg zu innerem Frieden. Traditionelle Dorfgemeinschaften pflegen gemeinsame religi\u00f6se Feste, die singhalesische und tamilische Elemente teils \u00fcberschneidend feiern. Ein selbsterhaltender Anteil zeigt sich im geruhsamen, jahreszeitlich getakteten Arbeitsrhythmus der Teeplantagen. Die sexuelle Neun tritt hinter diesem breiten, gesellschaftlich gepflegten Vers\u00f6hnungsprozess zur\u00fcck." },
    { name: "Bangladesch", iso: "BD", typ: 6, unsicher: false, text: "Als eines der am dichtesten besiedelten L\u00e4nder der Welt, h\u00e4ufig von verheerenden \u00dcberschwemmungen und Wirbelst\u00fcrmen heimgesucht, hat sich in Bangladesch eine ausgepr\u00e4gte Kultur der famili\u00e4ren und nachbarschaftlichen Vorsorge entwickelt. Fr\u00fchwarnsysteme und Evakuierungspl\u00e4ne f\u00fcr Zyklone geh\u00f6ren zum Alltagswissen vieler K\u00fcstenbewohner, oft \u00fcber Generationen weitergegeben. Der Unabh\u00e4ngigkeitskrieg von 1971 gegen (West-)Pakistan, mit gesch\u00e4tzt bis zu drei Millionen Toten, ist zentraler, schmerzhafter Bezugspunkt nationaler Identit\u00e4t und Wachsamkeit. Gro\u00dffamilien, oft mit mehreren Generationen unter einem Dach, bilden das wichtigste soziale Sicherungsnetz gegen wirtschaftliche und klimatische Unsicherheit. Mikrokredit-Systeme wie die von der Grameen Bank, urspr\u00fcnglich aus lokalen Selbsthilfegruppen entstanden, zeigen einen kulturellen Reflex, gemeinsam finanzielle Sicherheit gegen unsichere \u00e4u\u00dfere Umst\u00e4nde aufzubauen.", subtyp: "se6", subtypText: "Bangladesch zeigt eine deutlich selbsterhaltende Sechs: Fr\u00fchwarnsysteme und Evakuierungspl\u00e4ne f\u00fcr Zyklone geh\u00f6ren zum Alltagswissen vieler K\u00fcstenbewohner, oft \u00fcber Generationen weitergegeben, und Gro\u00dffamilien, oft mit mehreren Generationen unter einem Dach, bilden das wichtigste soziale Sicherungsnetz gegen wirtschaftliche und klimatische Unsicherheit \u2013 konkrete, famili\u00e4r organisierte Vorsorge. Der Unabh\u00e4ngigkeitskrieg von 1971 bleibt zentraler, schmerzhafter Bezugspunkt nationaler Wachsamkeit. Ein sozialer Anteil zeigt sich in Mikrokredit-Systemen wie der Grameen Bank, die gemeinsam finanzielle Sicherheit aufbauen. Die sexuelle Sechs tritt hinter dieser breiten, famili\u00e4r und wirtschaftlich verankerten Vorsorgekultur zur\u00fcck." },
    { name: "Myanmar", iso: "MM", typ: 9, unsicher: false, text: "Der Theravada-Buddhismus pr\u00e4gt den myanmarischen Alltag bis in die Gegenwart tief \u2013 junge M\u00e4nner verbringen traditionell zeitweise als M\u00f6nche im Kloster, um Gelassenheit und inneren Frieden zu kultivieren. Pagoden wie die goldene Shwedagon in Yangon sind zentrale Orte t\u00e4glicher, ruhiger spiritueller Praxis f\u00fcr Millionen Menschen. Gleichzeitig ist der andauernde Konflikt \u2013 Milit\u00e4rputsch 2021, jahrzehntelange B\u00fcrgerkriege mit ethnischen Gruppen wie den Karen oder Kachin, die Rohingya-Krise \u2013 selbst Ausdruck eines zutiefst neunerhaften Grundthemas: das schwierige Ringen um Frieden und Zusammenhalt in einem Land voller innerer Zerrissenheit, das sich nicht endg\u00fcltig festigen will. Traditionelle Dorfgemeinschaften pflegen trotz politischer Instabilit\u00e4t oft ein bemerkenswert friedliches, kooperatives Alltagsleben. Die weit verbreitete Praxis der Meditation, auch au\u00dferhalb des Klosterlebens, unterstreicht eine kulturelle Sehnsucht nach innerer Ruhe inmitten \u00e4u\u00dferer Turbulenz.", subtyp: "so9", subtypText: "Myanmar zeigt eine ausgepr\u00e4gt soziale Neun: Der Theravada-Buddhismus pr\u00e4gt den Alltag tief \u2013 junge M\u00e4nner verbringen traditionell Zeit als M\u00f6nche im Kloster, um Gelassenheit und inneren Frieden zu kultivieren \u2013, und Pagoden wie die Shwedagon sind zentrale Orte t\u00e4glicher, gemeinsamer spiritueller Praxis f\u00fcr Millionen Menschen. Der andauernde Konflikt selbst ist Ausdruck eines zutiefst neunerhaften Grundthemas: das schwierige Ringen um Frieden und Zusammenhalt in einem Land voller innerer Zerrissenheit. Ein selbsterhaltender Anteil zeigt sich im bemerkenswert friedlichen, kooperativen Alltagsleben trotz politischer Instabilit\u00e4t. Die sexuelle Neun tritt hinter dieser breiten Sehnsucht nach kollektiver innerer Ruhe zur\u00fcck." },
    { name: "Kambodscha", iso: "KH", typ: 9, unsicher: false, text: "Nach dem Terror-Regime der Roten Khmer (1975\u20131979), das sch\u00e4tzungsweise zwei Millionen Menschenleben forderte \u2013 etwa ein Viertel der damaligen Bev\u00f6lkerung \u2013, hat sich in Kambodscha eine auffallend vers\u00f6hnliche Alltagskultur entwickelt, die viele Beobachter \u00fcberrascht. Buddhistische Tempel, w\u00e4hrend der Schreckensherrschaft gezielt zerst\u00f6rt, wurden mit gro\u00dfem gesellschaftlichen Engagement wieder aufgebaut und sind heute erneut Zentren des Gemeinschaftslebens. Die Khmer-Rouge-Tribunale, die T\u00e4ter zur Rechenschaft zogen, liefen bewusst geordnet und ohne gr\u00f6\u00dfere Racheakte gegen die Bev\u00f6lkerung ab. Angkor Wat, das monumentale Tempelerbe der Khmer-Reiche, wird als Quelle stolzer, friedlicher nationaler Identit\u00e4t gepflegt, jenseits der Traumata des 20. Jahrhunderts. Allt\u00e4gliches L\u00e4cheln und Gastfreundschaft gegen\u00fcber Besuchern bleiben trotz der j\u00fcngeren, extrem gewaltvollen Geschichte bemerkenswert intakt \u2013 ein bewusstes kollektives Weiterleben in Frieden.", subtyp: "so9", subtypText: "Kambodscha zeigt eine sehr ausgepr\u00e4gt soziale Neun: Nach dem Terror-Regime der Roten Khmer hat sich eine auffallend vers\u00f6hnliche Alltagskultur entwickelt, und buddhistische Tempel, w\u00e4hrend der Schreckensherrschaft gezielt zerst\u00f6rt, wurden mit gro\u00dfem gesellschaftlichen Engagement wieder aufgebaut und sind heute erneut Zentren des Gemeinschaftslebens. Die Khmer-Rouge-Tribunale liefen bewusst geordnet und ohne gr\u00f6\u00dfere Racheakte gegen die Bev\u00f6lkerung ab \u2013 kollektive Vers\u00f6hnung statt individueller Vergeltung. Ein selbsterhaltender Anteil zeigt sich im allt\u00e4glichen L\u00e4cheln und der Gastfreundschaft trotz der extrem gewaltvollen Geschichte. Die sexuelle Neun tritt hinter diesem breiten, bewusst gepflegten kollektiven Frieden zur\u00fcck." },
    { name: "Taiwan", iso: "TW", typ: 6, unsicher: false, text: "Unter der st\u00e4ndigen geopolitischen Spannung mit der Volksrepublik China, die Taiwan als abtr\u00fcnnige Provinz betrachtet, lebt die taiwanische Gesellschaft in permanenter, allt\u00e4glich pr\u00e4senter Wachsamkeit gegen\u00fcber einer m\u00f6glichen milit\u00e4rischen Eskalation. Zivilschutz\u00fcbungen, mit landesweiten Luftschutzsirenen und verpflichtender Teilnahme, geh\u00f6ren zum j\u00e4hrlichen Alltag. Der starke gesellschaftliche Zusammenhalt zeigt sich in einer der weltweit h\u00f6chsten Impfraten und diszipliniertesten Reaktionen auf die Corona-Pandemie \u2013 kollektives, koordiniertes Handeln als Schutzstrategie. Familienunternehmen, oft \u00fcber Generationen weitergegeben, bilden das R\u00fcckgrat der taiwanischen Wirtschaft, mit starkem Vertrauen innerhalb der Familie statt externer Investoren. Die demokratische Identit\u00e4t Taiwans wird bewusst als Gegenmodell und Schutzschild gegen\u00fcber dem autorit\u00e4ren chinesischen Nachbarn gepflegt und verteidigt.", subtyp: "so6", subtypText: "Taiwan zeigt eine ausgepr\u00e4gt soziale Sechs: Zivilschutz\u00fcbungen mit landesweiten Luftschutzsirenen und verpflichtender Teilnahme geh\u00f6ren zum j\u00e4hrlichen kollektiven Alltag, und der starke gesellschaftliche Zusammenhalt zeigt sich in einer der weltweit h\u00f6chsten Impfraten und diszipliniertesten Reaktionen auf die Corona-Pandemie \u2013 kollektives, koordiniertes Handeln als Schutzstrategie. Die demokratische Identit\u00e4t wird bewusst als gemeinschaftliches Gegenmodell zum autorit\u00e4ren chinesischen Nachbarn gepflegt und verteidigt. Ein selbsterhaltender Anteil zeigt sich in Familienunternehmen mit starkem Vertrauen innerhalb der Familie statt externer Investoren. Die sexuelle Sechs tritt hinter dieser breiten, kollektiv koordinierten Wachsamkeit zur\u00fcck." },
    { name: "Singapur", iso: "SG", typ: 1, unsicher: false, text: "Kaugummi-Verkauf ist in Singapur seit 1992 weitgehend verboten \u2013 ein oft zitiertes, aber treffendes Beispiel f\u00fcr den Anspruch an totale \u00f6ffentliche Sauberkeit und Ordnung. Strenge Gesetze, von hohen Strafen f\u00fcrs M\u00fcllwegwerfen bis zu genauen Regeln f\u00fcr \u00f6ffentliches Verhalten, werden konsequent und ohne Ausnahmen durchgesetzt. Der U-Bahn-Betrieb gilt als einer der p\u00fcnktlichsten und saubersten der Welt, mit strikten Verhaltensregeln, die von den meisten B\u00fcrgern selbstverst\u00e4ndlich befolgt werden. Das Bildungssystem, hochkompetitiv und strukturiert, bereitet Sch\u00fcler von fr\u00fch an auf strenge Standardisierungstests vor. Die von der Regierung propagierte \u201eMeritokratie\u201c \u2013 Aufstieg durch Leistung nach klaren, festgelegten Regeln \u2013 ist offizielles Staatsprinzip und wird konsequent in Bildungs- und Besch\u00e4ftigungspolitik umgesetzt.", subtyp: "so1", subtypText: "Singapur zeigt eine sehr ausgepr\u00e4gt soziale Eins: Strenge Gesetze, von hohen Strafen f\u00fcrs M\u00fcllwegwerfen bis zu genauen Regeln f\u00fcr \u00f6ffentliches Verhalten, werden konsequent und ohne Ausnahmen durchgesetzt, und die von der Regierung propagierte \u201eMeritokratie\u201c \u2013 Aufstieg durch Leistung nach klaren, festgelegten Regeln \u2013 ist offizielles, kollektiv verbindliches Staatsprinzip. Der U-Bahn-Betrieb, einer der p\u00fcnktlichsten und saubersten der Welt, mit strikten Verhaltensregeln, die von den meisten B\u00fcrgern selbstverst\u00e4ndlich befolgt werden, best\u00e4tigt dieses Muster gesellschaftlich verinnerlichter Ordnung. Ein selbsterhaltender Anteil zeigt sich im hochkompetitiven Bildungssystem, das Sch\u00fcler fr\u00fch auf Standardisierungstests vorbereitet. Die sexuelle Eins tritt hinter dieser breiten, top-down durchgesetzten \u00f6ffentlichen Ordnung zur\u00fcck." },
    { name: "Malaysia", iso: "MY", typ: 9, unsicher: false, text: "In Malaysia leben Malaien, Chinesen, Inder und zahlreiche indigene Gruppen mit jeweils eigenen Religionen \u2013 Islam, Buddhismus, Hinduismus, Christentum \u2013 seit Jahrzehnten in einem austarierten gesellschaftlichen Miteinander. Feiertage aller gro\u00dfen Religionen, von Hari Raya \u00fcber Chinese New Year bis Diwali, werden landesweit gemeinsam gefeiert, oft mit \u201eOpen House\u201c-Traditionen, bei denen alle Malaysier eingeladen sind, unabh\u00e4ngig vom eigenen Glauben. Die \u201eRukun Negara\u201c, die nationalen Staatsprinzipien, betonen explizit Einheit und Harmonie zwischen den ethnischen Gruppen als oberstes politisches Ziel. Stra\u00dfenm\u00e4rkte (Pasar Malam) mit St\u00e4nden unterschiedlichster ethnischer K\u00fcchen nebeneinander sind allt\u00e4gliches Symbol friedlicher Koexistenz. Auch wirtschaftliche Politik, etwa Quotenregelungen zwischen ethnischen Gruppen, zielt trotz gelegentlicher Kritik prim\u00e4r auf den Erhalt eines austarierten sozialen Gleichgewichts statt auf Konfrontation.", subtyp: "so9", subtypText: "Malaysia zeigt eine sehr ausgepr\u00e4gt soziale Neun: Malaien, Chinesen, Inder und indigene Gruppen mit jeweils eigenen Religionen leben seit Jahrzehnten in einem austarierten gesellschaftlichen Miteinander, und die \u201eRukun Negara\u201c, die nationalen Staatsprinzipien, betonen explizit Einheit und Harmonie zwischen den ethnischen Gruppen als oberstes politisches Ziel. Feiertage aller gro\u00dfen Religionen werden landesweit mit \u201eOpen House\u201c-Traditionen gemeinsam gefeiert, unabh\u00e4ngig vom eigenen Glauben. Ein selbsterhaltender Anteil zeigt sich in der wirtschaftlichen Quotenpolitik zum Erhalt des sozialen Gleichgewichts. Die sexuelle Neun tritt hinter diesem breiten, verfassungsrechtlich verankerten Harmonieideal zur\u00fcck." },
    { name: "Nordkorea", iso: "KP", typ: 6, unsicher: false, text: "Das nordkoreanische Staatssystem beruht auf einer allgegenw\u00e4rtigen, verpflichtenden Loyalit\u00e4t gegen\u00fcber der F\u00fchrung, verst\u00e4rkt durch permanente Propaganda \u00fcber \u00e4u\u00dfere Bedrohung durch die USA und S\u00fcdkorea. Massenaufm\u00e4rsche und synchronisierte Massenspiele mit Zehntausenden Teilnehmern demonstrieren nach au\u00dfen wie nach innen kollektive Disziplin und Geschlossenheit. Der verpflichtende Milit\u00e4rdienst, einer der l\u00e4ngsten der Welt, und die permanente Mobilmachungsbereitschaft pr\u00e4gen den gesamten gesellschaftlichen Alltag. Bunkeranlagen und Zivilschutz\u00fcbungen geh\u00f6ren ebenso zum Alltag wie in kaum einem anderen Land der Welt \u2013 eine erzwungene, aber real gelebte permanente Wachsamkeit. Wie tief diese Loyalit\u00e4t tats\u00e4chlich freiwillig verankert ist oder allein durch Kontrolle und fehlenden Zugang zu Alternativen erzwungen wird, l\u00e4sst sich von au\u00dfen nur schwer beurteilen \u2013 ein Land, das sich bewusst weitgehend von externer Beobachtung abschottet.", subtyp: "so6", subtypText: "Nordkorea zeigt eine sehr ausgepr\u00e4gt soziale Sechs: Massenaufm\u00e4rsche und synchronisierte Massenspiele mit Zehntausenden Teilnehmern demonstrieren nach au\u00dfen wie nach innen kollektive Disziplin und Geschlossenheit, und der verpflichtende Milit\u00e4rdienst sowie die permanente Mobilmachungsbereitschaft pr\u00e4gen den gesamten gesellschaftlichen Alltag als organisierte Gruppenwachsamkeit. Die allgegenw\u00e4rtige, verpflichtende Loyalit\u00e4t gegen\u00fcber der F\u00fchrung wird durch permanente Propaganda \u00fcber \u00e4u\u00dfere Bedrohung verst\u00e4rkt. Ein selbsterhaltender Anteil zeigt sich in Bunkeranlagen und Zivilschutz\u00fcbungen als konkreter, allt\u00e4glicher Vorsorge. Die sexuelle Sechs tritt hinter dieser breiten, staatlich organisierten kollektiven Wachsamkeit zur\u00fcck." },
    { name: "Bhutan", iso: "BT", typ: 9, unsicher: false, text: "Bhutan ersetzte das Bruttoinlandsprodukt offiziell durch das \u201eBruttonationalgl\u00fcck\u201c als zentralen staatlichen Ma\u00dfstab \u2013 Zufriedenheit als erkl\u00e4rtes Staatsziel statt Wachstum um jeden Preis. Bis in die 1970er Jahre bewusst von der Au\u00dfenwelt abgeschottet, \u00f6ffnete sich das Land nur behutsam und in eigenem Tempo, ohne sich fremden Modellen unterzuordnen. Der Buddhismus pr\u00e4gt den Alltag als ruhige, alles durchdringende Grundstimmung, nicht als lautes Bekenntnis. Umweltschutz ist verfassungsrechtlich verankert \u2013 mindestens 60 Prozent der Landesfl\u00e4che m\u00fcssen f\u00fcr immer bewaldet bleiben, ein einzigartiges Bekenntnis zu Ausgleich statt Ausbeutung. Fernsehen und Internet wurden erst 1999 zugelassen, aus der bewussten Sorge, die innere Ruhe des Landes k\u00f6nnte durch \u00e4u\u00dfere Reize gest\u00f6rt werden.", subtyp: "se9", subtypText: "Bhutan zeigt eine sehr ausgepr\u00e4gt selbsterhaltende Neun: Fernsehen und Internet wurden erst 1999 zugelassen, aus der bewussten Sorge, die innere Ruhe des Landes k\u00f6nnte durch \u00e4u\u00dfere Reize gest\u00f6rt werden, und die \u00d6ffnung bis in die 1970er Jahre erfolgte nur behutsam und in eigenem Tempo, ohne sich fremden Modellen unterzuordnen \u2013 Schutz des eigenen inneren Gleichgewichts vor \u00e4u\u00dferem Einfluss. Umweltschutz ist verfassungsrechtlich verankert, mit mindestens 60 Prozent dauerhaft bewaldeter Fl\u00e4che als Bekenntnis zu Ausgleich statt Ausbeutung. Ein sozialer Anteil zeigt sich im \u201eBruttonationalgl\u00fcck\u201c als offiziellem, kollektivem Staatsziel. Die sexuelle Neun tritt hinter dieser breiten, ressourcenbewussten Schutzhaltung zur\u00fcck." },
    { name: "Laos", iso: "LA", typ: 9, unsicher: false, text: "Als das am st\u00e4rksten pro Kopf bombardierte Land der Geschichte \u2013 die USA warfen w\u00e4hrend des Vietnamkriegs mehr Bomben auf Laos als im gesamten Zweiten Weltkrieg \u2013 tr\u00e4gt das Land ein tiefes, aber \u00f6ffentlich kaum artikuliertes Kriegstrauma. Trotz dieser Vergangenheit h\u00e4lt Laos auch heute noch bewusst eine zur\u00fcckhaltende, neutrale Au\u00dfenpolitik, die Konfrontation mit m\u00e4chtigeren Nachbarn China, Vietnam und Thailand konsequent vermeidet. Der Theravada-Buddhismus pr\u00e4gt den Alltag als ruhige, gelassene Grundhaltung \u2013 die Hauptstadt Vientiane gilt als eine der leisesten und am wenigsten hektischen Hauptst\u00e4dte Asiens. Das kommunistische Einparteiensystem h\u00e4lt bewusst eine niedrige internationale Sichtbarkeit, ohne den lauten ideologischen Ton mancher Nachbarl\u00e4nder zu \u00fcbernehmen. Unger\u00e4umte Blindg\u00e4nger aus dem Krieg fordern bis auf den heutigen Tag j\u00e4hrlich Opfer \u2013 ein stilles, andauerndes Erbe, mit dem das Land ohne gro\u00dfe \u00f6ffentliche Klage weiterlebt.", subtyp: "se9", subtypText: "Laos zeigt eine sehr ausgepr\u00e4gt selbsterhaltende Neun: Als das am st\u00e4rksten pro Kopf bombardierte Land der Geschichte tr\u00e4gt Laos ein tiefes, aber \u00f6ffentlich kaum artikuliertes Kriegstrauma, und unger\u00e4umte Blindg\u00e4nger fordern bis heute j\u00e4hrlich Opfer \u2013 ein stilles, andauerndes Erbe, mit dem das Land ohne gro\u00dfe \u00f6ffentliche Klage weiterlebt. Die bewusst zur\u00fcckhaltende, neutrale Au\u00dfenpolitik, die Konfrontation mit m\u00e4chtigeren Nachbarn konsequent vermeidet, und die niedrige internationale Sichtbarkeit des Einparteiensystems best\u00e4tigen dieses Muster stiller Zur\u00fcckhaltung. Ein sozialer Anteil zeigt sich im Theravada-Buddhismus als ruhiger, gelassener Alltagsgrundton in Vientiane. Die sexuelle Neun tritt hinter dieser breiten, still ertragenen Zur\u00fcckhaltung zur\u00fcck." },
    { name: "Brunei", iso: "BN", typ: 6, unsicher: false, text: "Das kleine, \u00f6lreiche Sultanat Brunei verfolgt eine bewusst zur\u00fcckhaltende, auf Stabilit\u00e4t und Absicherung ausgerichtete Au\u00dfenpolitik, die jede Konfrontation mit den m\u00e4chtigeren Nachbarn Malaysia und Indonesien konsequent vermeidet. Der enorme Staats- und \u00d6lfonds wird explizit als Absicherung f\u00fcr zuk\u00fcnftige Generationen nach dem Ende der \u00d6lreserven aufgebaut, nicht f\u00fcr kurzfristigen Konsum. Sultan Hassanal Bolkiah, seit 1967 ununterbrochen an der Macht, garantiert seinen B\u00fcrgern umfassende soziale Absicherung \u2013 kostenlose Bildung, Gesundheitsversorgung, keine Einkommenssteuer \u2013 im Austausch f\u00fcr politische Stabilit\u00e4t und Loyalit\u00e4t. Die strikte Umsetzung der Scharia seit 2014 wird offiziell auch mit dem Erhalt gesellschaftlicher Ordnung und Sicherheit begr\u00fcndet, nicht prim\u00e4r mit religi\u00f6sem Expansionsstreben. Bruneis konsequent isolationistische, auf Berechenbarkeit bedachte Position in der ASEAN-Region unterscheidet sich deutlich von den dynamischeren, risikofreudigeren Nachbarstaaten.", subtyp: "se6", subtypText: "Brunei zeigt eine sehr ausgepr\u00e4gt selbsterhaltende Sechs: Der enorme Staats- und \u00d6lfonds wird explizit als Absicherung f\u00fcr zuk\u00fcnftige Generationen nach dem Ende der \u00d6lreserven aufgebaut, und Sultan Hassanal Bolkiah garantiert seinen B\u00fcrgern umfassende soziale Absicherung \u2013 kostenlose Bildung, Gesundheitsversorgung, keine Einkommenssteuer \u2013 im Austausch f\u00fcr Stabilit\u00e4t und Loyalit\u00e4t, konkrete materielle Vorsorge im Zentrum. Die bewusst zur\u00fcckhaltende, auf Stabilit\u00e4t ausgerichtete Au\u00dfenpolitik vermeidet jede Konfrontation mit m\u00e4chtigeren Nachbarn. Ein sozialer Anteil zeigt sich in der strikten Scharia-Umsetzung, offiziell mit dem Erhalt gesellschaftlicher Ordnung begr\u00fcndet. Die sexuelle Sechs tritt hinter dieser breiten, materiell abgesicherten Stabilit\u00e4tsstrategie zur\u00fcck." },
    { name: "Osttimor", iso: "TL", typ: 4, unsicher: false, text: "Osttimor, das j\u00fcngste Land Asiens (unabh\u00e4ngig erst seit 2002), tr\u00e4gt eine tiefe nationale Identit\u00e4t, die ma\u00dfgeblich aus jahrzehntelangem Leiden geformt ist \u2013 24 Jahre indonesische Besatzung (1975\u20131999) mit sch\u00e4tzungsweise 100.000 bis 200.000 Toten haben ein kollektives Bewusstsein tiefer, einzigartiger historischer Wunde gepr\u00e4gt. Der Widerstandskampf, oft romantisiert als David-gegen-Goliath-Geschichte gegen einen \u00fcberm\u00e4chtigen Nachbarn, wird als zentraler, identit\u00e4tsstiftender nationaler Mythos gepflegt, der Osttimor von allen Nachbarl\u00e4ndern unterscheidet. Die einzigartige Mischung aus portugiesischem Kolonialerbe, katholischem Glauben (einzigartig in \u00fcberwiegend muslimischer Nachbarschaft) und austronesisch-melanesischen Wurzeln macht das Land kulturell unverwechselbar in der Region. Der Friedensnobelpreis f\u00fcr die Unabh\u00e4ngigkeitsf\u00fchrer Ramos-Horta und Bischof Belo 1996 wurde von den Osttimoresen als internationale Anerkennung ihres einzigartigen, unvergleichbaren Leidenswegs empfunden. Die anhaltende Erinnerungskultur an das Massaker von Santa Cruz und andere Gr\u00e4ueltaten wird bewusst als unverwechselbares nationales Trauma bewahrt, nicht verdr\u00e4ngt.", subtyp: "so4", subtypText: "Osttimor zeigt eine ausgepr\u00e4gt soziale Vier: Der Widerstandskampf gegen einen \u00fcberm\u00e4chtigen Nachbarn wird als zentraler, identit\u00e4tsstiftender nationaler Mythos gepflegt, der Osttimor bewusst von allen Nachbarl\u00e4ndern unterscheidet, und die anhaltende Erinnerungskultur an das Massaker von Santa Cruz wird als unverwechselbares kollektives Trauma bewahrt, nicht verdr\u00e4ngt. Der Friedensnobelpreis 1996 wurde als internationale Anerkennung des einzigartigen, unvergleichbaren nationalen Leidenswegs empfunden. Ein selbsterhaltender Anteil zeigt sich in der Mischung aus portugiesischem, katholischem und austronesisch-melanesischem Erbe als unverwechselbarem kulturellem Fundament. Die sexuelle Vier tritt hinter diesem breiten, kollektiv gepflegten Alleinstellungsbewusstsein zur\u00fcck." },
    { name: "Malediven", iso: "MV", typ: 7, unsicher: false, text: "Die Malediven, ein Archipel aus \u00fcber 1.000 Koralleninseln, haben sich international bewusst als ultimative B\u00fchne f\u00fcr exklusives, sinnliches Urlaubsvergn\u00fcgen positioniert \u2013 Overwater-Bungalows, private Inselresorts und t\u00fcrkisfarbenes Wasser als Markenzeichen grenzenlosen Genusses. Die touristische Strategie \u201eeine Insel, ein Resort\u201c schafft bewusst abgeschottete Erlebniswelten, in denen jeder Aufenthalt als einzigartiges, unvergessliches Ereignis inszeniert wird. Trotz der realen Bedrohung durch den steigenden Meeresspiegel setzt die Regierung parallel auf spektakul\u00e4re, mediale Aktionen wie ein Unterwasser-Kabinettstreffen 2009, um internationale Aufmerksamkeit zu erzeugen statt blo\u00df zu warnen. Tauchsafaris zu einigen der artenreichsten Riffe der Welt werden als Abenteuer- und Entdeckungserlebnis vermarktet, das \u00fcber reine Erholung hinausgeht. Die Kultur des \u201eBodu Beru\u201c (gro\u00dfformatige Trommelmusik) und ausgelassener Inselfeste zeigt eine tief verwurzelte Freude an gemeinschaftlichem, sinnenfrohem Feiern.", subtyp: "sx7", subtypText: "Die Malediven zeigen eine sehr ausgepr\u00e4gt sexuelle Sieben: Die Positionierung als ultimative B\u00fchne f\u00fcr exklusives, sinnliches Urlaubsvergn\u00fcgen \u2013 Overwater-Bungalows, private Inselresorts, t\u00fcrkisfarbenes Wasser als Markenzeichen grenzenlosen Genusses \u2013 zeigt Intensit\u00e4t und Genuss als zentrales, pers\u00f6nlich erlebtes Erfolgsprinzip. Die Strategie \u201eeine Insel, ein Resort\u201c schafft bewusst abgeschottete Erlebniswelten, in denen jeder Aufenthalt als einzigartiges, unvergessliches Ereignis inszeniert wird. Ein sozialer Anteil zeigt sich in spektakul\u00e4ren, medial inszenierten Aktionen wie dem Unterwasser-Kabinettstreffen 2009 zur internationalen Aufmerksamkeitserzeugung. Die selbsterhaltende Sieben tritt hinter diesem breiten, auf Intensit\u00e4t und Exklusivit\u00e4t gerichteten Genussprinzip zur\u00fcck." },
  ]},
    { region: "Ozeanien", laender: [
    { name: "Australien", iso: "AU", typ: 7, unsicher: false, text: "\u201eNo worries, mate\u201c ist der wohl meistgeh\u00f6rte Ausdruck Australiens \u2013 eine reflexhafte Zur\u00fcckweisung von Drama und Anspannung im Alltag, selbst bei echten Problemen. Der \u201eSunday Roast\u201c am Strand, Grillabende (Barbie) mit Nachbarn und der informelle, spontane Umgang miteinander pr\u00e4gen ein Freizeitleben, das explizit auf Leichtigkeit ausgerichtet ist. Surfen, Wandern und Camping im \u201eOutback\u201c sind nicht Luxus, sondern allt\u00e4glicher, oft w\u00f6chentlicher Ausgleich zum Berufsleben \u2013 die enorme geografische Weite l\u00e4dt aktiv zum Erkunden ein statt zum R\u00fcckzug. Die informelle, oft respektlos-humorvolle Umgangsform, selbst gegen\u00fcber Autorit\u00e4ten, gilt als typisch australisch und wird kulturell gesch\u00e4tzt statt sanktioniert. Trotz gelegentlicher Naturkatastrophen wie Buschbr\u00e4nden bewahrt die australische \u00d6ffentlichkeit einen auffallend unaufgeregten, optimistischen Grundton \u2013 Freiheit und Erlebnislust als nationale Priorit\u00e4t.", subtyp: "so7", subtypText: "Australien zeigt eine ausgepr\u00e4gt soziale Sieben: \u201eNo worries, mate\u201c ist der meistgeh\u00f6rte Ausdruck des Landes \u2013 eine reflexhafte, geteilte Zur\u00fcckweisung von Drama im Alltag \u2013, und der \u201eSunday Roast\u201c am Strand sowie Grillabende mit Nachbarn pr\u00e4gen ein explizit auf gemeinsame Leichtigkeit ausgerichtetes Freizeitleben. Die informelle, respektlos-humorvolle Umgangsform, selbst gegen\u00fcber Autorit\u00e4ten, wird kulturell gesch\u00e4tzt statt sanktioniert \u2013 ein geteilter nationaler Ton. Ein selbsterhaltender Anteil zeigt sich im aktiven Erkunden von Outback und Natur als w\u00f6chentlichem Ausgleich. Die sexuelle Sieben tritt hinter diesem breiten, \u00f6ffentlich gelebten Optimismus zur\u00fcck." },
    { name: "Neuseeland", iso: "NZ", typ: 9, unsicher: false, text: "Neuseeland war das erste Land der Welt, das Frauen 1893 das Wahlrecht gew\u00e4hrte \u2013 ein fr\u00fcher, undramatischer Schritt zu gr\u00f6\u00dferer gesellschaftlicher Ausgeglichenheit statt erzwungenem, konfliktreichem Wandel. Der Vertrag von Waitangi (1840) zwischen der britischen Krone und den M\u0101ori bildet nach wie vor die Grundlage eines fortlaufenden, bewusst gepflegten Vers\u00f6hnungsprozesses zwischen indigener und kolonialer Bev\u00f6lkerung. Das M\u0101ori-Konzept \u201eKaitiakitanga\u201c, verantwortungsvolle Sorge um Land und Natur als gemeinschaftliche Aufgabe, pr\u00e4gt zunehmend auch die staatliche Umweltpolitik. Neuseeland gilt international konsequent als eines der politisch stabilsten und am wenigsten korrupten L\u00e4nder \u2013 geringe gesellschaftliche Reibung als anerkanntes nationales Markenzeichen. Die abgelegene geografische Lage, fernab gro\u00dfer Weltkonflikte, wird kulturell als Segen empfunden \u2013 ein bewusst gepflegtes Selbstverst\u00e4ndnis als ruhiger, unaufgeregter Ort abseits globaler Turbulenzen.", subtyp: "so9", subtypText: "Neuseeland zeigt eine sehr ausgepr\u00e4gt soziale Neun: Der Vertrag von Waitangi bildet noch heute die Grundlage eines fortlaufenden, bewusst gepflegten Vers\u00f6hnungsprozesses zwischen indigener und kolonialer Bev\u00f6lkerung, und das M\u0101ori-Konzept \u201eKaitiakitanga\u201c, verantwortungsvolle Sorge um Land und Natur als gemeinschaftliche Aufgabe, pr\u00e4gt zunehmend die staatliche Umweltpolitik. Das Land gilt international konsequent als eines der politisch stabilsten und am wenigsten korrupten \u2013 geringe gesellschaftliche Reibung als anerkanntes nationales Markenzeichen. Ein selbsterhaltender Anteil zeigt sich im gesch\u00e4tzten Selbstverst\u00e4ndnis als ruhiger Ort abseits globaler Turbulenzen. Die sexuelle Neun tritt hinter diesem breiten, gesellschaftlich gepflegten Ausgleichsideal zur\u00fcck." },
    { name: "Fidschi", iso: "FJ", typ: 2, unsicher: false, text: "Der \u201eBula\u201c-Gru\u00df, mit dem Besucher \u00fcberall auf den Inseln herzlich empfangen werden, ist weit mehr als eine Floskel \u2013 er dr\u00fcckt eine aktiv gelebte, warmherzige Willkommenskultur aus, die touristisch wie im Alltag gepflegt wird. Die traditionelle Kava-Zeremonie, bei der eine leicht bet\u00e4ubende Wurzel-Mixtur gemeinsam aus einer Schale getrunken wird, dient explizit dem Aufbau und der Pflege von Gemeinschaft und Vertrauen zwischen Gastgebern und G\u00e4sten. Dorfgemeinschaften (Koro) funktionieren nach dem Prinzip kollektiver Verantwortung f\u00fcreinander, mit H\u00e4uptlingen, die traditionell f\u00fcr das Wohl aller Dorfbewohner Sorge tragen. Gro\u00dffamilien-Netzwerke erstrecken sich oft \u00fcber mehrere Inseln, mit der Erwartung gegenseitiger finanzieller und praktischer Unterst\u00fctzung in Notzeiten. Gemeinsames Essen und Feste, oft mit der gesamten Dorfgemeinschaft, sind fester, h\u00e4ufiger Bestandteil des sozialen Lebens, nicht seltene Ausnahme.", subtyp: "so2", subtypText: "Fidschi zeigt eine sehr ausgepr\u00e4gt soziale Zwei: Der \u201eBula\u201c-Gru\u00df dr\u00fcckt eine aktiv gelebte, warmherzige Willkommenskultur aus, und die traditionelle Kava-Zeremonie dient explizit dem Aufbau und der Pflege von Gemeinschaft und Vertrauen zwischen Gastgebern und G\u00e4sten. Dorfgemeinschaften (Koro) funktionieren nach dem Prinzip kollektiver Verantwortung f\u00fcreinander, mit H\u00e4uptlingen, die traditionell f\u00fcr das Wohl aller Dorfbewohner Sorge tragen. Ein selbsterhaltender Anteil zeigt sich in Gro\u00dffamilien-Netzwerken mit gegenseitiger finanzieller Unterst\u00fctzung \u00fcber mehrere Inseln hinweg. Die sexuelle Zwei tritt hinter dieser breiten, institutionalisierten Gastfreundschaftskultur zur\u00fcck." },
    { name: "Papua-Neuguinea", iso: "PG", typ: 5, unsicher: false, text: "Mit \u00fcber 800 verschiedenen Sprachen auf vergleichsweise kleiner Fl\u00e4che ist Papua-Neuguinea das sprachlich vielf\u00e4ltigste Land der Welt \u2013 ein Ergebnis jahrtausendelanger geografischer Isolation einzelner Bergt\u00e4ler und Inselgemeinschaften voneinander. Viele Gemeinschaften im zerkl\u00fcfteten Hochland lebten bis weit ins 20. Jahrhundert praktisch unabh\u00e4ngig voneinander, ohne nennenswerten Kontakt zu Nachbart\u00e4lern. Traditionelle \u201eSing-Sing\u201c-Feste, bei denen einzelne St\u00e4mme in aufwendigem Schmuck ihre eigene, unverwechselbare kulturelle Identit\u00e4t zeigen, unterstreichen bis in die Gegenwart starke lokale statt nationaler Zugeh\u00f6rigkeit. Der dichte Regenwald und das gebirgige Terrain erschweren auch heute noch Infrastruktur und Reisen zwischen Regionen erheblich, was eigenst\u00e4ndige, voneinander unabh\u00e4ngige lokale Kulturen beg\u00fcnstigt. Diese extreme kulturelle Fragmentierung macht generalisierende Aussagen \u00fcber \u201edie\u201c Kultur Papua-Neuguineas besonders schwierig \u2013 introvertierte Eigenst\u00e4ndigkeit einzelner Gemeinschaften bleibt jedoch ein wiederkehrendes Muster.", subtyp: "se5", subtypText: "Papua-Neuguinea zeigt eine sehr ausgepr\u00e4gt selbsterhaltende F\u00fcnf: Viele Gemeinschaften im zerkl\u00fcfteten Hochland lebten bis weit ins 20. Jahrhundert praktisch unabh\u00e4ngig voneinander, ohne nennenswerten Kontakt zu Nachbart\u00e4lern, und der dichte Regenwald sowie das gebirgige Terrain beg\u00fcnstigen bis auf den heutigen Tag eigenst\u00e4ndige, voneinander unabh\u00e4ngige lokale Kulturen. Mit \u00fcber 800 Sprachen auf kleiner Fl\u00e4che ist introvertierte Eigenst\u00e4ndigkeit einzelner Gemeinschaften ein wiederkehrendes, geografisch bedingtes Muster. Ein sozialer Anteil zeigt sich in den \u201eSing-Sing\u201c-Festen, bei denen St\u00e4mme ihre kulturelle Identit\u00e4t gemeinschaftlich zeigen. Die sexuelle F\u00fcnf tritt hinter dieser breiten, isolationsbedingten Eigenst\u00e4ndigkeit zur\u00fcck." },
    { name: "Samoa", iso: "WS", typ: 9, unsicher: false, text: "Der pazifische Inselstaat Samoa wird kulturell ma\u00dfgeblich vom \u201eFa'a Samoa\u201c (dem samoanischen Weg) gepr\u00e4gt \u2013 einem tief verwurzelten System aus Gemeinschaft, gegenseitigem Respekt und Konsensfindung, das \u00e4lter ist als jede westliche Verwaltungsstruktur. Die traditionelle Matai-\u00c4ltestenordnung, in der H\u00e4uptlinge Streitf\u00e4lle durch Diskussion und Ausgleich statt durch Gerichtsurteile l\u00f6sen, bleibt bis heute parallel zum staatlichen Rechtssystem lebendig. Als eines der ersten pazifischen L\u00e4nder, das 1962 unabh\u00e4ngig wurde, vollzog Samoa den \u00dcbergang von neuseel\u00e4ndischer Verwaltung bemerkenswert reibungslos und undramatisch. Die \u201eFa'aaloalo\u201c (Respekt) genannte Grundhaltung gegen\u00fcber \u00c4lteren, Familie und Gemeinschaft strukturiert nahezu jeden sozialen Umgang im Alltag. Trotz Modernisierung und Migration in westliche L\u00e4nder bewahrt die samoanische Diaspora ihre gemeinschaftsorientierten Werte weltweit als verbindendes kulturelles Fundament.", subtyp: "so9", subtypText: "Samoa zeigt eine sehr ausgepr\u00e4gt soziale Neun: \u201eFa'a Samoa\u201c, der samoanische Weg, ist ein tief verwurzeltes System aus Gemeinschaft, gegenseitigem Respekt und Konsensfindung, und die traditionelle Matai-\u00c4ltestenordnung l\u00f6st Streitf\u00e4lle durch Diskussion und Ausgleich statt durch Gerichtsurteile. Der bemerkenswert reibungslose \u00dcbergang von neuseel\u00e4ndischer Verwaltung zur Unabh\u00e4ngigkeit 1962 best\u00e4tigt diese Priorit\u00e4t auf gesellschaftlicher Harmonie. Ein selbsterhaltender Anteil zeigt sich darin, dass die weltweite Diaspora ihre gemeinschaftsorientierten Werte als kulturelles Fundament bewahrt. Die sexuelle Neun tritt hinter diesem breiten, tief verwurzelten Konsensideal zur\u00fcck." },
    { name: "Tonga", iso: "TO", typ: 6, unsicher: false, text: "Das K\u00f6nigreich Tonga ist der einzige pazifische Inselstaat, der nie formell von einer europ\u00e4ischen Macht kolonisiert wurde \u2013 ein Umstand, den Tongaer nach wie vor stolz auf die geschickte diplomatische Absicherung ihrer Monarchie im 19. Jahrhundert zur\u00fcckf\u00fchren. K\u00f6nig George Tupou I. sicherte die Unabh\u00e4ngigkeit damals durch fr\u00fchzeitige Verfassungsgebung (1875) und Vertr\u00e4ge mit Gro\u00dfbritannien, die formelle Souver\u00e4nit\u00e4t garantierten, statt milit\u00e4rischen Widerstand zu riskieren. Die Monarchie, eine der letzten verbliebenen Polynesiens, wird von den meisten Tongaern als stabilisierender, Kontinuit\u00e4t sichernder Anker gesch\u00e4tzt, trotz gelegentlicher Rufe nach mehr Demokratie. Die tief religi\u00f6se, methodistisch gepr\u00e4gte Gesellschaft h\u00e4lt strenge Sonntagsruhe und traditionelle Werte als Schutz vor als bedrohlich empfundenem kulturellem Wandel von au\u00dfen aufrecht. Nach dem verheerenden Vulkanausbruch und Tsunami 2022 reagierte das Land mit sofortiger, gut organisierter R\u00fcckbesinnung auf traditionelle Selbstversorgungsstrukturen statt auf externe Abh\u00e4ngigkeit.", subtyp: "se6", subtypText: "Tonga zeigt eine sehr ausgepr\u00e4gt selbsterhaltende Sechs: K\u00f6nig George Tupou I. sicherte die Unabh\u00e4ngigkeit im 19. Jahrhundert durch fr\u00fchzeitige Verfassungsgebung und Vertr\u00e4ge mit Gro\u00dfbritannien statt milit\u00e4rischen Widerstand zu riskieren \u2013 konkrete, diplomatisch abgesicherte Existenzsicherung. Nach dem Vulkanausbruch 2022 reagierte das Land mit sofortiger R\u00fcckbesinnung auf traditionelle Selbstversorgungsstrukturen statt auf externe Abh\u00e4ngigkeit. Die tief religi\u00f6se, methodistisch gepr\u00e4gte Gesellschaft h\u00e4lt traditionelle Werte als Schutz vor bedrohlich empfundenem \u00e4u\u00dferem Wandel aufrecht. Ein sozialer Anteil zeigt sich in der Monarchie als von den meisten gesch\u00e4tztem, stabilisierendem Anker. Die sexuelle Sechs tritt hinter dieser breiten, auf konkrete Absicherung gerichteten Vorsichtsstrategie zur\u00fcck." },
    { name: "Vanuatu", iso: "VU", typ: 9, unsicher: false, text: "Vanuatu, ein Archipel aus \u00fcber 80 Inseln mit mehr als 100 verschiedenen Sprachen, gilt trotz dieser au\u00dfergew\u00f6hnlichen Vielfalt als eines der friedlichsten L\u00e4nder der Erde und belegt in internationalen Gl\u00fccksrankings regelm\u00e4\u00dfig Spitzenpl\u00e4tze. Das traditionelle \u201eKastom\u201c-System, ein Netz aus Br\u00e4uchen, gegenseitigen Verpflichtungen und \u00c4ltestenr\u00e4ten, regelt Konflikte auf Dorfebene bevorzugt durch Ausgleich statt durch formelles Recht. Trotz jahrzehntelanger gemeinsamer britisch-franz\u00f6sischer Kolonialverwaltung (dem sogenannten \u201eKondominium\u201c, einem einzigartigen Doppelregierungssystem) vollzog sich der \u00dcbergang zur Unabh\u00e4ngigkeit 1980 vergleichsweise friedlich. Die \u201eKava\u201c-Zeremonie, gemeinschaftlich zelebriert, dient als zentrales soziales Ventil zur Beilegung von Spannungen zwischen Gemeinschaften. Wiederkehrende Naturkatastrophen wie Zyklone und Vulkanausbr\u00fcche werden von den Bewohnern traditionell mit gemeinschaftlicher Anpassung und gegenseitiger Unterst\u00fctzung statt mit Panik oder Konflikt bew\u00e4ltigt.", subtyp: "so9", subtypText: "Vanuatu zeigt eine sehr ausgepr\u00e4gt soziale Neun: Das traditionelle \u201eKastom\u201c-System, ein Netz aus Br\u00e4uchen, gegenseitigen Verpflichtungen und \u00c4ltestenr\u00e4ten, regelt Konflikte auf Dorfebene bevorzugt durch Ausgleich statt durch formelles Recht, und trotz \u00fcber 100 verschiedener Sprachen gilt das Land als eines der friedlichsten der Erde. Der vergleichsweise friedliche \u00dcbergang zur Unabh\u00e4ngigkeit 1980 nach jahrzehntelanger britisch-franz\u00f6sischer Doppelverwaltung best\u00e4tigt diese Priorit\u00e4t auf Ausgleich. Ein selbsterhaltender Anteil zeigt sich in der gemeinschaftlichen Anpassung an wiederkehrende Naturkatastrophen. Die sexuelle Neun tritt hinter diesem breiten, auf Konsens gegr\u00fcndeten Friedensideal zur\u00fcck." },
    { name: "Marshallinseln", iso: "MH", typ: 4, unsicher: false, text: "Die Marshallinseln tragen ein tiefes, einzigartiges nationales Trauma: Zwischen 1946 und 1958 testeten die USA hier 67 Atombomben, darunter die Wasserstoffbombe \u201eCastle Bravo\u201c auf Bikini-Atoll, deren Fallout noch heute Gesundheit und Land unbewohnbar macht. Diese beispiellose Erfahrung als \u201eam st\u00e4rksten verstrahltes Volk der Erde\u201c pr\u00e4gt die nationale Identit\u00e4t als einzigartig Betroffene, deren Leid mit keinem anderen Land vergleichbar ist. Die vertriebenen Bewohner Bikinis und anderer Testatolle k\u00e4mpfen bis in die Gegenwart um Anerkennung, Entsch\u00e4digung und das Recht auf Heimkehr in ein f\u00fcr immer ver\u00e4ndertes Land. Die extreme geografische Zerstreuung \u00fcber mehr als 1000 Inseln bei nur rund 180 km\u00b2 Landfl\u00e4che unterstreicht die Fragilit\u00e4t und Besonderheit der marshallesischen Existenz. Als eines der am st\u00e4rksten vom Klimawandel bedrohten L\u00e4nder der Welt (durchschnittliche H\u00f6he nur zwei Meter \u00fcber dem Meeresspiegel) artikulieren die Marshallinseln international ihre einzigartige, existenzielle Verletzlichkeit sehr bewusst und eindringlich.", subtyp: "so4", subtypText: "Die Marshallinseln zeigen eine ausgepr\u00e4gt soziale Vier: Die Erfahrung als \u201eam st\u00e4rksten verstrahltes Volk der Erde\u201c pr\u00e4gt die nationale Identit\u00e4t als einzigartig Betroffene, deren Leid mit keinem anderen Land vergleichbar ist \u2013 kollektiv geteilte Andersartigkeit als nationales Selbstverst\u00e4ndnis. International artikulieren die Marshallinseln ihre einzigartige, existenzielle Verletzlichkeit gegen\u00fcber dem Klimawandel sehr bewusst und eindringlich vor einem globalen Publikum. Ein selbsterhaltender Anteil zeigt sich im anhaltenden Kampf der vertriebenen Bikini-Bewohner um Entsch\u00e4digung und Heimkehr. Die sexuelle Vier tritt hinter diesem breiten, kollektiv artikulierten Alleinstellungsbewusstsein zur\u00fcck." },
    { name: "Palau", iso: "PW", typ: 9, unsicher: false, text: "Palau, ein winziger Inselstaat im westlichen Pazifik, hat als eines der ersten L\u00e4nder weltweit ein umfassendes Meeresschutzgebiet (den \u201ePalau National Marine Sanctuary\u201c, rund 80 % seiner Gew\u00e4sser) eingerichtet \u2013 eine bewusste Entscheidung f\u00fcr langfristiges Gleichgewicht mit der Natur statt kurzfristiger wirtschaftlicher Ausbeutung. Besucher m\u00fcssen bei der Einreise seit 2017 einen \u201ePalau Pledge\u201c unterschreiben, ein Umweltversprechen im Reisepass, das \u00f6kologische R\u00fccksichtnahme als nationale Verpflichtung gegen\u00fcber zuk\u00fcnftigen Generationen festschreibt. Die traditionelle matrilineare Gesellschaftsordnung, in der Frauen als Klan\u00e4lteste zentrale Vermittlerrollen einnehmen, betont Ausgleich und Konsens gegen\u00fcber hierarchischer Konfrontation. Trotz jahrhundertelanger wechselnder Kolonialherrschaft (Spanien, Deutschland, Japan, USA) bewahrte Palau seine kulturelle Kontinuit\u00e4t durch beharrliche, undramatische Anpassung statt Widerstand. Die \u201eBul\u201c-Tradition, eine zeitweise Fischereipause zur Schonung der Best\u00e4nde, zeigt eine jahrhundertealte kulturelle Praxis des \u00f6kologischen Gleichgewichts, die heute als Vorbild moderner Naturschutzpolitik dient.", subtyp: "so9", subtypText: "Palau zeigt eine sehr ausgepr\u00e4gt soziale Neun: Der \u201ePalau National Marine Sanctuary\u201c, der rund 80 % der eigenen Gew\u00e4sser sch\u00fctzt, und der \u201ePalau Pledge\u201c, ein Umweltversprechen im Reisepass jedes Besuchers, zeigen eine bewusste, kollektiv verankerte Entscheidung f\u00fcr langfristiges Gleichgewicht mit der Natur. Die traditionelle matrilineare Gesellschaftsordnung, in der Frauen als Klan\u00e4lteste zentrale Vermittlerrollen einnehmen, betont Ausgleich und Konsens gegen\u00fcber hierarchischer Konfrontation. Ein selbsterhaltender Anteil zeigt sich in der \u201eBul\u201c-Tradition der zeitweisen Fischereipause zur Bestandsschonung. Die sexuelle Neun tritt hinter diesem breiten, \u00f6kologisch verankerten Gleichgewichtsideal zur\u00fcck." },
    { name: "Kiribati", iso: "KI", typ: 4, unsicher: false, text: "Kiribati, verstreut \u00fcber 33 Atolle beiderseits von \u00c4quator und Datumsgrenze, tr\u00e4gt ein einzigartiges, existenzielles nationales Schicksal: Als eines der am niedrigsten gelegenen L\u00e4nder der Erde (durchschnittlich nur 1,8 Meter \u00fcber dem Meeresspiegel) steht es dem realen Risiko gegen\u00fcber, durch den steigenden Meeresspiegel als erstes Land der Welt vollst\u00e4ndig unbewohnbar zu werden. Der fr\u00fchere Pr\u00e4sident Anote Tong kaufte 2014 symbolisch Land auf Fidschi als m\u00f6glichen zuk\u00fcnftigen Zufluchtsort \u2013 ein beispielloser, einzigartiger Schritt eines Staates, der seine eigene m\u00f6gliche Ausl\u00f6schung aktiv vorbereitet. Kiribati beansprucht als erstes Land der Welt, das neue Jahr zu begr\u00fc\u00dfen (dank der 1995 \u00f6stlich verschobenen Datumsgrenze), ein kleines, aber bewusst gepflegtes Alleinstellungsmerkmal. Die Mikronesier Kiribatis pflegen eine unverwechselbare, von keinem anderen Volk geteilte Kultur des \u201eTe Katei ni Kiribati\u201c, die trotz Kolonialgeschichte und drohendem Untergang mit besonderer Beharrlichkeit bewahrt wird. Das nationale Bewusstsein, buchst\u00e4blich um die eigene physische Existenz zu ringen, verleiht Kiribati eine international einzigartige, kaum vergleichbare Stimme in Klimaverhandlungen.", subtyp: "so4", subtypText: "Kiribati zeigt eine ausgepr\u00e4gt soziale Vier: Der fr\u00fchere Pr\u00e4sident Anote Tong kaufte 2014 symbolisch Land auf Fidschi als m\u00f6glichen Zufluchtsort \u2013 ein beispielloser, \u00f6ffentlich sichtbarer Schritt eines Staates, der seine eigene m\u00f6gliche Ausl\u00f6schung aktiv vor der Welt\u00f6ffentlichkeit vorbereitet. Das Bewusstsein, buchst\u00e4blich um die eigene physische Existenz zu ringen, verleiht dem Land eine international einzigartige, kaum vergleichbare Stimme in Klimaverhandlungen. Die unverwechselbare Kultur des \u201eTe Katei ni Kiribati\u201c wird trotz drohendem Untergang mit besonderer Beharrlichkeit kollektiv bewahrt. Ein selbsterhaltender Anteil zeigt sich im gepflegten Anspruch, als erstes Land das neue Jahr zu begr\u00fc\u00dfen. Die sexuelle Vier tritt hinter diesem breiten, international artikulierten Alleinstellungsbewusstsein zur\u00fcck." },
    { name: "Nauru", iso: "NR", typ: 8, unsicher: false, text: "Nauru, mit rund 21 km\u00b2 das drittkleinste Land der Welt, erlebte durch den Abbau seiner Phosphatvorkommen in den 1970er-Jahren einen der spektakul\u00e4rsten Reichtumsaufstiege der Geschichte \u2013 zeitweise das h\u00f6chste Pro-Kopf-Einkommen weltweit, r\u00fccksichtslos und ohne langfristige Vorsorge maximal ausgebeutet. Als die Phosphatreserven Anfang der 2000er-Jahre ersch\u00f6pft waren, hinterlie\u00df diese kompromisslose Ausbeutungslogik eine buchst\u00e4blich zerst\u00f6rte, gr\u00f6\u00dftenteils unbewohnbare Insellandschaft. Um wirtschaftlich zu \u00fcberleben, verfolgte Nauru danach aggressive, kontroverse Strategien: Offshore-Bankgesch\u00e4fte mit laxer Regulierung, der Verkauf diplomatischer Anerkennung an Taiwan bzw. China gegen Zahlungen, und ab 2001 die umstrittene Beherbergung australischer Fl\u00fcchtlingslager gegen erhebliche finanzielle Kompensation. Diese Bereitschaft, die eigene Souver\u00e4nit\u00e4t kompromisslos als verhandelbares Machtinstrument zur Einkommenssicherung einzusetzen, pr\u00e4gt Nauru auch heute noch als politisch unberechenbaren, machtbewussten Akteur trotz seiner winzigen Gr\u00f6\u00dfe. Das Land zeigt damit ein Muster kompromissloser, oft ausbeuterischer Durchsetzung eigener Interessen gegen\u00fcber Natur wie internationalen Partnern.", subtyp: "se8", subtypText: "Nauru zeigt eine sehr ausgepr\u00e4gt selbsterhaltende Acht: Der Abbau der Phosphatvorkommen wurde r\u00fccksichtslos und ohne langfristige Vorsorge maximal ausgebeutet, bis eine buchst\u00e4blich zerst\u00f6rte Insellandschaft zur\u00fcckblieb \u2013 konkrete materielle Ausbeutung ohne R\u00fccksicht auf Zukunft. Um wirtschaftlich zu \u00fcberleben, verfolgte Nauru danach aggressive Strategien wie Offshore-Bankgesch\u00e4fte, den Verkauf diplomatischer Anerkennung und die Beherbergung australischer Fl\u00fcchtlingslager gegen finanzielle Kompensation \u2013 Souver\u00e4nit\u00e4t als kompromissloses \u00dcberlebensinstrument. Ein sozialer Anteil zeigt sich im wechselnden diplomatischen Schulterschluss mit Taiwan bzw. China. Die sexuelle Acht tritt hinter diesem breiten, auf materielles \u00dcberleben gerichteten Durchsetzungsmuster zur\u00fcck." },
    { name: "Mikronesien", iso: "FM", typ: 9, unsicher: false, text: "Die F\u00f6derierten Staaten von Mikronesien, ein loser Verbund von vier sehr unterschiedlichen Inselgruppen (Chuuk, Kosrae, Pohnpei, Yap), bewahren trotz erheblicher kultureller und geografischer Unterschiede zwischen den Bundesstaaten einen bemerkenswert konfliktarmen, ausgleichenden Zusammenhalt. Die f\u00f6derale Verfassung von 1979 wurde bewusst so gestaltet, dass jeder Bundesstaat weitgehende Autonomie beh\u00e4lt \u2013 ein Kompromissmodell, das Spannungen durch Machtteilung statt Zentralisierung vorbeugt. Die traditionelle Steinhandgeld-Kultur Yaps, riesige Kalksteinscheiben (\u201eRai\u201c), die nie bewegt werden, sondern deren Besitzwechsel nur m\u00fcndlich anerkannt wird, zeigt ein auf Vertrauen und sozialem Konsens beruhendes, undramatisches Wertesystem. Der als \u201eCompact of Free Association\u201c bekannte Sonderstatus mit den USA sichert wirtschaftliche Unterst\u00fctzung und Sicherheit, ohne die eigene kulturelle Eigenst\u00e4ndigkeit aufzugeben \u2013 ein bewusst austarierter Mittelweg. Die geografische Zersplitterung \u00fcber mehr als 600 Inseln f\u00f6rdert eine kulturelle Grundhaltung des geduldigen Sich-Arrangierens mit Distanz und Verschiedenheit statt erzwungener Einheitlichkeit.", subtyp: "so9", subtypText: "Mikronesien zeigt eine sehr ausgepr\u00e4gt soziale Neun: Die f\u00f6derale Verfassung von 1979 wurde bewusst so gestaltet, dass jeder Bundesstaat weitgehende Autonomie beh\u00e4lt \u2013 ein Kompromissmodell, das Spannungen durch Machtteilung statt Zentralisierung vorbeugt. Die traditionelle Steinhandgeld-Kultur Yaps, deren Besitzwechsel nur m\u00fcndlich anerkannt wird, zeigt ein auf Vertrauen und sozialem Konsens beruhendes, undramatisches Wertesystem. Der \u201eCompact of Free Association\u201c mit den USA sichert Unterst\u00fctzung, ohne die eigene kulturelle Eigenst\u00e4ndigkeit aufzugeben \u2013 ein austarierter Mittelweg. Ein selbsterhaltender Anteil zeigt sich im geduldigen Sich-Arrangieren mit geografischer Distanz. Die sexuelle Neun tritt hinter diesem breiten, f\u00f6deral verankerten Ausgleichsideal zur\u00fcck." },
    { name: "Tuvalu", iso: "TV", typ: 4, unsicher: false, text: "Tuvalu, mit nur rund 26 km\u00b2 Landfl\u00e4che eines der kleinsten und am niedrigsten gelegenen L\u00e4nder der Erde, f\u00fchrt als erstes Land der Welt ein \u201edigitales Zwillingsprojekt\u201c durch: Die Regierung erstellt eine vollst\u00e4ndige virtuelle Kopie der Nation im Metaversum, um im Falle vollst\u00e4ndiger \u00dcberflutung durch den Meeresspiegelanstieg als Staat digital fortzubestehen \u2013 ein weltweit einzigartiger, beispielloser Schritt. Das Land, das seine Top-Level-Domain \u201e.tv\u201c gewinnbringend an internationale Medienunternehmen lizenziert hat, zeigt eine kreative, unverwechselbare Antwort auf die eigene wirtschaftliche Randlage. Tuvalus Premierminister hielt 2021 eine international vielbeachtete Rede zur Klimakonferenz COP26 buchst\u00e4blich kniehoch im Meer stehend \u2013 eine symbolische, unverwechselbare Inszenierung der eigenen einzigartigen existenziellen Lage. Die winzige Bev\u00f6lkerung von nur rund 11.000 Menschen, verteilt \u00fcber neun Atolle, bewahrt trotz internationaler Randst\u00e4ndigkeit ein starkes Bewusstsein kultureller Eigenst\u00e4ndigkeit und Unverwechselbarkeit. Die Aussicht auf m\u00f6glichen vollst\u00e4ndigen Verlust der physischen Heimat hat eine tiefe, kollektive Auseinandersetzung mit Identit\u00e4t, Erinnerung und kultureller Kontinuit\u00e4t jenseits von Territorium hervorgebracht.", subtyp: "so4", subtypText: "Tuvalu zeigt eine sehr ausgepr\u00e4gt soziale Vier: Als erstes Land der Welt erstellt die Regierung eine vollst\u00e4ndige virtuelle Kopie der Nation im Metaversum, um im Falle vollst\u00e4ndiger \u00dcberflutung als Staat digital fortzubestehen \u2013 ein weltweit einzigartiger, \u00f6ffentlich inszenierter Schritt. Die kniehoch im Meer stehend gehaltene COP26-Rede des Premierministers 2021 war eine symbolische, unverwechselbare Inszenierung der eigenen existenziellen Lage vor internationalem Publikum. Die Aussicht auf m\u00f6glichen Verlust der physischen Heimat hat eine tiefe, kollektive Auseinandersetzung mit Identit\u00e4t jenseits von Territorium hervorgebracht. Ein selbsterhaltender Anteil zeigt sich in der kreativen Lizenzierung der Top-Level-Domain \u201e.tv\u201c. Die sexuelle Vier tritt hinter diesem breiten, kollektiv artikulierten Alleinstellungsbewusstsein zur\u00fcck." },
    { name: "Salomonen", iso: "SB", typ: 6, unsicher: false, text: "Die Salomonen, Schauplatz einiger der blutigsten Schlachten des Pazifikkriegs (u. a. Guadalcanal), tragen bis auf den heutigen Tag ein kollektives Bewusstsein milit\u00e4rischer Verwundbarkeit, verst\u00e4rkt durch innere ethnische Unruhen zwischen 1998 und 2003 (\u201eThe Tensions\u201c), die eine internationale Friedensmission (RAMSI) notwendig machten. Das Land verl\u00e4sst sich seither auf ein sorgf\u00e4ltig ausbalanciertes Netz internationaler Sicherheitsgarantien, zuletzt sichtbar am 2022 unterzeichneten, international umstrittenen Sicherheitsabkommen mit China als zus\u00e4tzliche Absicherung neben traditionellen australischen Partnerschaften. Die traditionelle \u201eWantok\u201c-Solidarit\u00e4t \u2013 gegenseitige Verpflichtung innerhalb von Sprachgruppen und Clans \u2013 dient bis heute als informelles soziales Sicherheitsnetz, das staatliche Institutionen erg\u00e4nzt, wo diese als unzureichend wahrgenommen werden. Die extreme geografische Zersplitterung \u00fcber fast 1000 Inseln erschwert zentrale Kontrolle und f\u00f6rdert ein Bewusstsein lokaler Verwundbarkeit, das durch enge Clan- und Inselbindungen kompensiert wird. Wiederkehrende Naturkatastrophen (Erdbeben, Tsunamis, Zyklone) verst\u00e4rken eine kulturelle Grundhaltung der Wachsamkeit und vorsorglichen Absicherung gegen\u00fcber unvorhersehbaren \u00e4u\u00dferen Bedrohungen.", subtyp: "se6", subtypText: "Die Salomonen zeigen eine deutlich selbsterhaltende Sechs: Die traditionelle \u201eWantok\u201c-Solidarit\u00e4t \u2013 gegenseitige Verpflichtung innerhalb von Sprachgruppen und Clans \u2013 dient nach wie vor als informelles, konkretes soziales Sicherheitsnetz, das staatliche Institutionen erg\u00e4nzt, und wiederkehrende Naturkatastrophen verst\u00e4rken eine kulturelle Grundhaltung der Wachsamkeit und vorsorglichen Absicherung. Das Land verl\u00e4sst sich zus\u00e4tzlich auf ein sorgf\u00e4ltig ausbalanciertes Netz internationaler Sicherheitsabkommen, zuletzt mit China neben traditionellen australischen Partnerschaften. Ein sozialer Anteil zeigt sich im kollektiven Bewusstsein milit\u00e4rischer Verwundbarkeit seit dem Pazifikkrieg. Die sexuelle Sechs tritt hinter dieser breiten, clan- und b\u00fcndnisgest\u00fctzten Absicherungsstrategie zur\u00fcck." },
    { name: "Cookinseln", iso: "CK", typ: 9, unsicher: false, text: "Die Cookinseln, in freier Assoziierung mit Neuseeland, pflegen bewusst ein politisches Modell, das Eigenst\u00e4ndigkeit und enge, spannungsfreie Bindung an einen gr\u00f6\u00dferen Partner miteinander in Einklang bringt, statt sich f\u00fcr das eine oder andere zu entscheiden. Das Konzept \u201eCook Islands Way of Life\u201c, das traditionelle polynesische Werte und moderne Verwaltung verbindet, wird gezielt als harmonischer Mittelweg zwischen Tradition und Fortschritt vermarktet. Die 15 verstreuten Inseln, kulturell und geografisch sehr unterschiedlich, werden \u00fcber ein austariertes, konsensorientiertes politisches System zusammengehalten, das Rivalit\u00e4ten zwischen den Inseln bewusst vermeidet. Der traditionelle \u201eTivaevae\u201c-Handwerkskunst, gemeinschaftlich in geselligen N\u00e4h-Zusammenk\u00fcnften gefertigt, symbolisiert die enge, konfliktarme Gemeinschaftskultur der Inseln. Die \u00fcberwiegend christlich gepr\u00e4gte, entspannte Lebensweise der Cookinseln wird von Einheimischen wie Besuchern gleicherma\u00dfen als besonders friedvoll und ausgeglichen beschrieben.", subtyp: "so9", subtypText: "Die Cookinseln zeigen eine sehr ausgepr\u00e4gt soziale Neun: Das politische Modell der freien Assoziierung mit Neuseeland bringt Eigenst\u00e4ndigkeit und enge, spannungsfreie Bindung an einen gr\u00f6\u00dferen Partner bewusst miteinander in Einklang, statt sich f\u00fcr das eine oder andere zu entscheiden. Die 15 verstreuten, kulturell sehr unterschiedlichen Inseln werden \u00fcber ein austariertes, konsensorientiertes politisches System zusammengehalten, das Rivalit\u00e4ten zwischen den Inseln bewusst vermeidet. Die gemeinschaftlich gefertigte \u201eTivaevae\u201c-Handwerkskunst symbolisiert die enge, konfliktarme Gemeinschaftskultur. Ein selbsterhaltender Anteil zeigt sich in der entspannten, ausgeglichenen Lebensweise. Die sexuelle Neun tritt hinter diesem breiten, konsensorientierten Harmoniemodell zur\u00fcck." },
    { name: "Neukaledonien", iso: "NC", typ: 6, unsicher: false, text: "Neukaledonien, ein franz\u00f6sisches \u00dcberseegebiet im S\u00fcdpazifik mit einem einzigartigen, seit Jahrzehnten verhandelten Sonderstatus, hat mit drei Unabh\u00e4ngigkeitsreferenden (2018, 2020, 2021) einen bewusst vorsichtigen, schrittweisen Weg zur politischen Selbstbestimmung gew\u00e4hlt statt eines abrupten Bruchs. Die tief gespaltene Gesellschaft zwischen indigenen Kanak und Nachfahren franz\u00f6sischer Siedler lebt seit den gewaltsamen Konflikten der 1980er-Jahre (\u201eLes \u00c9v\u00e9nements\u201c) in einem sorgsam austarierten, institutionell abgesicherten Machtteilungssystem (Noum\u00e9a-Abkommen 1998). Die gewaltsamen Unruhen von 2024, ausgel\u00f6st durch geplante Wahlrechtsreformen, zeigten erneut, wie fragil dieses Sicherheitsgleichgewicht bleibt und wie wachsam beide Seiten ihre errungenen Garantien verteidigen. Der bedeutende Nickelbergbau, wirtschaftliches R\u00fcckgrat der Insel, wird von der Bev\u00f6lkerung als abzusicherndes gemeinsames Verm\u00f6gen betrachtet, um das seit Jahren um verl\u00e4ssliche Beteiligungsmodelle gerungen wird. Frankreichs anhaltende Milit\u00e4r- und Verwaltungspr\u00e4senz wird von vielen Bewohnern als Garant von Stabilit\u00e4t gesch\u00e4tzt, von anderen als Fortsetzung kolonialer Bevormundung kritisiert.", subtyp: "so6", subtypText: "Neukaledonien zeigt eine ausgepr\u00e4gt soziale Sechs: Die tief gespaltene Gesellschaft zwischen indigenen Kanak und Nachfahren franz\u00f6sischer Siedler lebt seit den 1980er-Jahren in einem sorgsam austarierten, institutionell abgesicherten Machtteilungssystem (Noum\u00e9a-Abkommen 1998) \u2013 Sicherheit durch ein kollektiv verhandeltes Gruppensystem. Die drei Unabh\u00e4ngigkeitsreferenden zeigen einen bewusst vorsichtigen, schrittweisen Weg zur Selbstbestimmung statt eines abrupten Bruchs. Die gewaltsamen Unruhen von 2024 zeigten erneut, wie wachsam beide Seiten ihre errungenen Garantien verteidigen. Ein selbsterhaltender Anteil zeigt sich im Nickelbergbau als abzusicherndem gemeinsamem Verm\u00f6gen. Die sexuelle Sechs tritt hinter diesem breiten, institutionell verhandelten Sicherheitsgleichgewicht zur\u00fcck." },
  ]},
];

const LAENDER_TYPEN_TABELLE = [
  { typ: 1, angst: "\u201eIch bin falsch.\u201c", org: "Innere Norm, Selbstkontrolle", leidenschaft: "Zorn", motivation: "Verbesserung, Richtigkeit, Integrit\u00e4t", essenz: "Weisheit" },
  { typ: 2, angst: "\u201eIch bin nur wertvoll, wenn ich gebraucht werde.\u201c", org: "Beziehung als Selbstwertquelle", leidenschaft: "Stolz", motivation: "Helfen, Verbinden, Unterst\u00fctzen", essenz: "Liebe" },
  { typ: 3, angst: "\u201eOhne Leistung bin ich nichts.\u201c", org: "Identifikation mit Erfolg", leidenschaft: "Eitelkeit", motivation: "Erfolg, Sichtbarkeit, Produktivit\u00e4t", essenz: "Wahrhaftigkeit" },
  { typ: 4, angst: "\u201eIch habe keine eigene Substanz.\u201c", org: "Gef\u00fchlsintensivierung, Einzigartigkeit", leidenschaft: "Neid", motivation: "Tiefe, Ausdruck, Besonderheit", essenz: "Urspr\u00fcnglichkeit" },
  { typ: 5, angst: "\u201eDie Welt fordert mehr, als ich geben kann.\u201c", org: "R\u00fcckzug, Distanz, Wissensakkumulation", leidenschaft: "Geiz", motivation: "Verstehen, Autonomie, geistige Klarheit", essenz: "Verstehen" },
  { typ: 6, angst: "\u201eIch bin ohne Schutz.\u201c", org: "Pr\u00fcfung, Loyalit\u00e4t, Zweifel/Gegenwehr", leidenschaft: "Angst", motivation: "Sicherheit, Struktur, Verl\u00e4sslichkeit", essenz: "Vertrauen" },
  { typ: 7, angst: "\u201eWenn ich stehenbleibe, begegne ich Leid.\u201c", org: "Expansion, Planung, Optionenvielfalt", leidenschaft: "V\u00f6llerei", motivation: "Freiheit, Erlebnis, M\u00f6glichkeiten", essenz: "Freude" },
  { typ: 8, angst: "\u201eWenn ich schwach bin, werde ich beherrscht.\u201c", org: "St\u00e4rke, Direktheit, Kontrolle", leidenschaft: "Lust/Intensit\u00e4t", motivation: "Selbstbestimmung, Durchsetzung", essenz: "Unschuldige Kraft" },
  { typ: 9, angst: "\u201eWenn ich mich zeige, verliere ich Verbindung.\u201c", org: "Anpassung, Konfliktvermeidung", leidenschaft: "Tr\u00e4gheit", motivation: "Harmonie, Frieden, Stabilit\u00e4t", essenz: "Frieden" },
];

const LAENDER_DISKUSSIONSFAELLE = [
  { name: "Kroatien", altTyp: 4, typ: 8, altText: "\u00c4sthetischer Heimatbezug (emotionale Bindung an Landschaft und Kultur als Identit\u00e4tsanker)", text: "Der Unabh\u00e4ngigkeitskrieg der 1990er-Jahre (Vaterl\u00e4ndischer Krieg) als pr\u00e4gendes Widerstandsnarrativ", entscheidung: "8 \u2013 vorl\u00e4ufig, \u201ekenne ich zu wenig, aber probehalber Acht\u201c (Detlef). Kann bei mehr Kenntnis noch revidiert werden." },
  { name: "Rum\u00e4nien", altTyp: 4, typ: 6, altText: "Melancholie und Musiktradition wie bei Ungarn (Essenz Urspr\u00fcnglichkeit)", text: "Die Ceau\u0219escu-Diktatur mit ihrer allgegenw\u00e4rtigen Securitate-\u00dcberwachung hat tiefes kollektives Misstrauen hinterlassen", entscheidung: "6 \u2013 die Bedrohungsgeschichte \u00fcberwiegt gegen\u00fcber der Melancholie-Tradition." },
  { name: "Haiti", altTyp: 6, typ: 9, altText: "Grundangst \u201eIch bin ohne Schutz\u201c \u2013 eine der traumatischsten Kolonial- und Krisengeschichten der Welt", text: "Essenz \u201eFrieden\u201c \u2013 der spirituelle Alltag (Vodou als Vers\u00f6hnung von Gegens\u00e4tzen) tr\u00e4gt eine sp\u00fcrbar entspannende, nicht prim\u00e4r wachsame Grundstimmung", entscheidung: "9 \u2013 best\u00e4tigt. Anders als reine Vorsicht vermuten lie\u00dfe, \u00fcberwiegt im Alltag eine gelassene, vers\u00f6hnliche Note." },
  { name: "Kolumbien", altTyp: 6, typ: 2, altText: "Jahrzehntelanger B\u00fcrgerkrieg und Drogenkonflikt legen Vorsicht als \u00dcberlebensstrategie nahe", text: "Motivation \u201eHelfen, Verbinden\u201c \u2013 die international wahrgenommene Warmherzigkeit und Gastfreundschaft", entscheidung: "2 \u2013 best\u00e4tigt. Die Warmherzigkeit \u00fcberwiegt gegen\u00fcber dem Konfliktnarrativ." },
  { name: "Kuba", altTyp: 8, typ: 7, altText: "Revolution und jahrzehntelanger Widerstand gegen das US-Embargo als starkes Machtnarrativ", text: "Motivation \u201eFreiheit, Erlebnis\u201c \u2013 Musik, Tanz und Lebensfreude als aktiver Ausgleich zu materiellem Mangel", entscheidung: "7 \u2013 best\u00e4tigt. Die Revolution ist eher ein politisches Staatsnarrativ, w\u00e4hrend Musik und Lebensfreude Alltag und internationale Wahrnehmung pr\u00e4gen \u2013 n\u00e4her am gelebten Volk als an der Politik." },
  { name: "\u00c4thiopien", altTyp: 8, typ: 5, altText: "Der Sieg \u00fcber Italien bei Adwa 1896 (nie kolonisiert) als starkes Widerstandsnarrativ", text: "Ich-Organisation \u201eR\u00fcckzug, Distanz\u201c \u2013 eine stolze, in sich ruhende Eigenst\u00e4ndigkeit", entscheidung: "5 \u2013 best\u00e4tigt. Die introvertierte Eigenst\u00e4ndigkeit ist kulturell auff\u00e4lliger als das historische Widerstandsereignis." },
  { name: "Myanmar", altTyp: 6, typ: 9, altText: "Milit\u00e4rputsch 2021, jahrzehntelange B\u00fcrgerkriege, Rohingya-Krise \u2013 eine Geschichte andauernder Bedrohung", text: "Motivation \u201eHarmonie\u201c \u2013 buddhistisch gepr\u00e4gte Alltagsgelassenheit", entscheidung: "9 \u2013 best\u00e4tigt, mit besonderer Begr\u00fcndung: Der andauernde Konflikt ist selbst Ausdruck des Neuner-Grundthemas \u2013 das Ringen um Frieden und Zusammenhalt trotz innerer Zerrissenheit, nicht das Ausweichen davor." },
];

function laenderzuordnungenPage() {
  const typenFarben = TYPE_COLORS;

  const tabelleHtml = `
    <div style="overflow-x:auto;margin:1.2rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:0.82rem;min-width:640px;">
        <thead>
          <tr style="border-bottom:2px solid var(--line);">
            <th style="text-align:left;padding:0.5rem 0.6rem;">Typ</th>
            <th style="text-align:left;padding:0.5rem 0.6rem;">Grundangst</th>
            <th style="text-align:left;padding:0.5rem 0.6rem;">Ich-Organisation</th>
            <th style="text-align:left;padding:0.5rem 0.6rem;">Leidenschaft</th>
            <th style="text-align:left;padding:0.5rem 0.6rem;">Motivation</th>
            <th style="text-align:left;padding:0.5rem 0.6rem;">Essenz</th>
          </tr>
        </thead>
        <tbody>
          ${LAENDER_TYPEN_TABELLE.map(t => `
          <tr style="border-bottom:1px solid var(--line);">
            <td style="padding:0.45rem 0.6rem;font-weight:700;color:${typenFarben[t.typ]};">${t.typ}</td>
            <td style="padding:0.45rem 0.6rem;">${t.angst}</td>
            <td style="padding:0.45rem 0.6rem;">${t.org}</td>
            <td style="padding:0.45rem 0.6rem;">${t.leidenschaft}</td>
            <td style="padding:0.45rem 0.6rem;">${t.motivation}</td>
            <td style="padding:0.45rem 0.6rem;font-weight:600;">${t.essenz}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;

  const quelleHtml = `
    <div style="background:var(--ivory);border:1px solid var(--border);border-radius:12px;padding:1.1rem 1.2rem;margin:1.2rem 0;">
      <p style="font-weight:700;font-size:0.9rem;margin:0 0 0.5rem;color:var(--ink);">Referenzquelle</p>
      <p style="font-size:0.87rem;line-height:1.6;color:var(--ink);margin:0;">Ein Teil dieser Zuordnungen st\u00fctzt sich auf eine fr\u00fchere eigene Ver\u00f6ffentlichung von Detlef Rathmer zu L\u00e4nder-Prinzipien. Das daraus rekonstruierte Muster wird konsistent auf die \u00fcbrigen L\u00e4nder angewendet: Welche <strong>dominante historische Erfahrung</strong> &ndash; Bedrohung, Unterdr\u00fcckung, wirtschaftlicher Aufstieg, Isolation, Befreiung &ndash; hat eine Kultur \u00fcber Generationen am st\u00e4rksten geformt?</p>
    </div>
  `;

  const diskussionHtml = `
    <div class="bl-region">
      <h2 class="bl-region__title">Diskussionsf\u00e4lle: Wo zwei Prinzipien um die Deutungshoheit ringen</h2>
      <p style="font-size:0.88rem;color:var(--muted);margin:0 0 1rem;line-height:1.6;">Bei diesen L\u00e4ndern sprechen zwei Kriterien in unterschiedliche Richtungen. Beide Positionen werden gezeigt &ndash; das ist kein Makel, sondern der eigentliche Lernwert: ein Gesp\u00fcr daf\u00fcr zu entwickeln, wie unterschiedliche Enneagramm-Prinzipien in ein und derselben Kultur sichtbar werden k\u00f6nnen.</p>
      ${LAENDER_DISKUSSIONSFAELLE.map(d => `
        <div style="background:var(--ivory);border:1px solid var(--border);border-radius:12px;padding:1.1rem 1.3rem;margin-bottom:1rem;">
          <h3 style="font-size:1rem;font-weight:700;margin:0 0 0.7rem;color:var(--ink);">${d.name}</h3>
          <div style="display:grid;gap:0.6rem;">
            <div style="display:flex;gap:0.6rem;align-items:flex-start;">
              <span style="flex-shrink:0;font-weight:700;color:${typenFarben[d.altTyp]};min-width:1.6rem;">${d.altTyp}</span>
              <p style="margin:0;font-size:0.86rem;color:var(--ink);line-height:1.55;">${d.altText}</p>
            </div>
            <div style="display:flex;gap:0.6rem;align-items:flex-start;">
              <span style="flex-shrink:0;font-weight:700;color:${typenFarben[d.typ]};min-width:1.6rem;">${d.typ}</span>
              <p style="margin:0;font-size:0.86rem;color:var(--ink);line-height:1.55;">${d.text}</p>
            </div>
          </div>
          <p style="margin:0.7rem 0 0;font-size:0.82rem;color:var(--copper);font-weight:600;">\u2192 Entscheidung: Typ ${d.entscheidung}</p>
        </div>
      `).join("")}
    </div>
  `;

  function llRegionHtml(r) {
    return `
    <div class="bl-region">
      <h2 class="bl-region__title">${r.region}</h2>
      <div class="bl-grid">
        ${r.laender.map(l => `
          <div class="bl-card" id="ll-${l.iso}" data-ll-region="${r.region}" data-ll-typ="${l.typ}" data-ll-name="${l.name}" data-ll-subtyp="${l.subtyp || ''}">
            <button class="bl-card__back" onclick="llBackToFilter()" aria-label="Zur\u00fcck zur L\u00e4nderauswahl" title="Zur\u00fcck zur L\u00e4nderauswahl">&uarr;</button>
            <div class="bl-card__badge" style="background:${typenFarben[l.typ] ?? 'var(--copper)'}">${flagEmoji(l.iso)} Typ ${l.typ}</div>
            <div class="bl-card__body">
              <h3 class="bl-card__name">${flagEmoji(l.iso)} ${l.name}</h3>
              <p class="bl-card__beschreibung">${l.text}</p>
              ${l.subtypText ? `
              <div class="bl-card__subtyp">
                <p class="bl-card__subtyp-label">Instinkt-Tendenz &middot; ${l.subtyp.toUpperCase()}</p>
                <p class="bl-card__subtyp-text">${l.subtypText}</p>
              </div>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
  }
  window._llRegionHtml = window._llRegionHtml || {};
  window._llRegionHtml.fn = llRegionHtml;
  window._llRegionsData = LAENDER_REGIONEN;

  const LL_EAGER_REGIONS = 1;
  const regionenHtml = LAENDER_REGIONEN.slice(0, LL_EAGER_REGIONS).map(llRegionHtml).join("")
    + `<div id="ll-lazy-container" data-ll-next="${LL_EAGER_REGIONS}"></div>`;

  const llTotal = LAENDER_REGIONEN.reduce((s,r) => s+r.laender.length, 0);
  function llFilterBar() {
    const regionBtn = reg => '<button class="kf-btn" data-ll-region="'+reg+'" onclick="llSet(\'region\',\''+reg+'\')">'+(reg==="ALL"?"Alle":reg)+'</button>';
    const typBtn = n => {
      const col = n===0 ? null : (TYPE_COLORS[n]||"var(--copper)");
      const style = col ? ' style="--kf-typ-col:'+col+';"' : '';
      return '<button class="kf-btn kf-btn--typ'+(col?' kf-btn--typ-colored':'')+'"'
        +' data-ll-typ-btn="'+n+'" data-kf-col="'+(col||'')+'"'
        +style+' onclick="llSet(\'typ\','+n+')">'+(n===0?"Alle":n)+'</button>';
    };
    const instinctLabels = {ALL:"Alle", se:"SE &middot; Selbsterhaltung", so:"SO &middot; Sozial", sx:"SX &middot; Sexuell"};
    const instinctBtn = code => '<button class="kf-btn" data-ll-instinct-btn="'+code+'" onclick="llSet(\'instinct\',\''+code+'\')">'+instinctLabels[code]+'</button>';
    const allRegions = LAENDER_REGIONEN.map(r => r.region);
    return '<div class="kf-bar" id="ll-filter-bar">'
      +'<div class="kf-row"><span class="kf-label">Region</span>'
      +regionBtn("ALL")+allRegions.map(regionBtn).join("")+'</div>'
      +'<div class="kf-row"><span class="kf-label">Typ</span>'
      +typBtn(0)+[1,2,3,4,5,6,7,8,9].map(typBtn).join("")+'</div>'
      +'<div class="kf-row"><span class="kf-label">Instinkttendenz</span>'
      +["ALL","se","so","sx"].map(instinctBtn).join("")+'</div>'
      +'<div class="kf-count"><span id="ll-count-num">'+llTotal+'</span> von '+llTotal+' L\u00e4ndern</div>'
      +'<div class="kf-row" style="margin-top:0.4rem;"><button class="kf-btn" style="background:var(--gold);color:var(--anthracite,#2c2c2c);border-color:var(--gold-dark,#A8872D);font-weight:700;" onclick="llRandom()">&#127922; Zuf\u00e4lliges Land</button></div>'
      +'</div>';
  }

  return shell(`
    ${pageHeader("laenderzuordnungen")}
    <div class="schaubild-page">
      <p class="eyebrow">Wissen \u00b7 Kultur</p>
      <h1 class="schaubild-page__title">L\u00e4nderzuordnungen &ndash; Alle L\u00e4nder der Welt</h1>

      <div style="max-width:420px;margin:0 auto 1.4rem;border-radius:16px;overflow:hidden;box-shadow:0 8px 28px rgba(0,0,0,0.25);">
        <video id="ll-earth-video" autoplay loop muted playsinline preload="auto" style="display:block;width:100%;height:auto;" aria-label="Rotierende Erde (NASA Blue Marble, gemeinfrei)">
          <source src="./assets/video/earth-rotating-nasa.mp4" type="video/mp4" />
        </video>
      </div>
      <p style="text-align:center;font-size:0.72rem;color:var(--muted);margin:-0.8rem 0 1.2rem;">Erdrotation: NASA Blue Marble Next Generation &ndash; gemeinfrei (Public Domain)</p>

      <p class="schaubild-page__intro">Rund 202 L\u00e4nder und ihr vorherrschendes Enneagramm-Prinzip &ndash; eine begr\u00fcndete, aber bewusst perspektivische Ann\u00e4herung an nationale Mentalit\u00e4ten, Geschichte und Kultur.</p>

      <div style="background:var(--paper-deep,#ede8dc);border-left:3px solid var(--copper);border-radius:0 10px 10px 0;padding:1.1rem 1.3rem;margin:1.2rem 0;">
        <p style="font-size:0.88rem;line-height:1.65;color:var(--ink);margin:0 0 0.7rem;">Eine L\u00e4nder-Typologie ist immer <strong>eine Frage der Perspektive</strong>, nicht eine feststehende Wahrheit. Je nachdem, welches Merkmal einer Kultur man in den Vordergrund stellt, kommt man zu unterschiedlichen, jeweils plausiblen Ergebnissen. Italien l\u00e4sst sich &ndash; je nach Kriterium &ndash; sowohl als &bdquo;Zweierland&ldquo; (Herzlichkeit, Familie, F\u00fcrsorge) als auch als &bdquo;Siebenerland&ldquo; (Lebensfreude, Genuss, Improvisation) lesen; beides ist in der Enneagramm-Literatur schon vertreten worden. Auch Japan tr\u00e4gt sowohl die Pr\u00e4zision des Zen (Typ 1) als auch eine tiefe \u00c4sthetik der Sch\u00f6nheit und Verg\u00e4nglichkeit, das <em>Mono no Aware</em> (Typ 4), in sich.</p>
        <p style="font-size:0.88rem;line-height:1.65;color:var(--ink);margin:0 0 0.7rem;">Dieser Beitrag trifft daher bewusst eine Wahl &ndash; begr\u00fcndet durch feste Kriterien (siehe Tabelle unten) &ndash; und benennt an strittigen Stellen ausdr\u00fccklich die Gegenperspektive. Er erhebt keinen Anspruch, die einzig richtige Zuordnung zu sein, sondern eine in sich konsistente, nachvollziehbare Herleitung anzubieten.</p>
        <p style="font-size:0.88rem;line-height:1.65;color:var(--ink);margin:0;"><strong>Leitkriterium dieser konkreten Zuordnung ist insbesondere der historische Bezug:</strong> Welche pr\u00e4gende kollektive Erfahrung hat eine Kultur \u00fcber Generationen am st\u00e4rksten geformt? Andere Enneagramm-Autoren m\u00f6gen andere Schwerpunkte setzen (z. B. rein gegenw\u00e4rtige Alltagskultur, Kunst, K\u00fcche); dieser Beitrag entscheidet sich bewusst und transparent f\u00fcr die historische Perspektive als roten Faden.</p>
      </div>

      <h2 class="bl-region__title" style="margin-top:1.6rem;">Die verbindlichen Kriterien</h2>
      <p style="font-size:0.86rem;color:var(--muted);margin:0 0 0.5rem;">Aus dem Kompass-Schaubild &bdquo;Angst \u2192 Essenz&ldquo; &ndash; f\u00fcr jedes Land wird gepr\u00fcft, welche Motivation oder Essenz im Alltagsleben am deutlichsten sp\u00fcrbar ist, und die passende Grundangst gegengepr\u00fcft.</p>
      ${tabelleHtml}
      ${quelleHtml}

      ${llFilterBar()}
      ${regionenHtml}
      ${diskussionHtml}

      <div class="bl-fazit">
        <h2 class="bl-fazit__title">Fazit</h2>
        <p>Diese Zuordnung ist eine <strong>symbolische Tendenz</strong>, kein wissenschaftlicher Befund &ndash; nat\u00fcrlich sind in jedem Land alle neun Typen vertreten. Doch Geschichte, kollektive Erfahrung und gelebte Alltagskultur pr\u00e4gen Muster, die sich verbl\u00fcffend oft in einem der neun Enneagramm-Prinzipien wiedererkennen lassen.</p>
        <p>Genau wie beim Einzelnen gilt auch hier: Es geht nicht um Schubladendenken, sondern um eine spielerische, begr\u00fcndete Linse, durch die man Kulturen und ihre Geschichte neu betrachten kann.</p>
      </div>

      <div style="background:var(--paper-deep,#ede8dc);border-left:3px solid var(--copper);border-radius:0 10px 10px 0;padding:1.1rem 1.3rem;margin:1.4rem 0;">
        <p style="font-weight:700;font-size:0.92rem;margin:0 0 0.6rem;color:var(--ink);">Waren Sie selbst dort?</p>
        <p style="font-size:0.88rem;line-height:1.65;color:var(--ink);margin:0 0 0.8rem;">Einige L\u00e4nder &ndash; etwa \u00c4thiopien, Myanmar oder Kuba &ndash; sind bei dieser Zuordnung bewusst als strittig gekennzeichnet, weil sich zwei Enneagramm-Prinzipien plausibel gegen\u00fcberstehen. Ich war nicht in jedem Land dieser Welt selbst vor Ort. Wenn Sie aus eigener Erfahrung eine andere, gut begr\u00fcndete Einsch\u00e4tzung zu einem Land haben &ndash; ob strittig markiert oder nicht &ndash; freue ich mich \u00fcber Ihre Nachricht. Klingt Ihr Vorschlag plausibel und nachvollziehbar begr\u00fcndet, nehme ich ihn gerne in die App auf.</p>
        <p style="font-size:0.88rem;margin:0;">
          <a href="mailto:detlefrathmer@t-online.de?subject=L%C3%A4nderzuordnung%3A%20Mein%20Vorschlag" style="color:var(--copper);text-decoration:underline;">\u2709 E-Mail schreiben</a>
          &nbsp;\u00b7&nbsp;
          <a href="https://wa.me/4915758786201" target="_blank" rel="noopener" style="color:var(--copper);text-decoration:underline;">\ud83d\udcac WhatsApp</a>
        </p>
      </div>

      <div class="vb-buecher">
        <h3 class="vb-buecher__title">Globus &amp; Weltkarte f\u00fcr zu Hause</h3>
        ${affiliateBoxHtml("deko", "Leuchtglobus", "Vintage-Stil f\u00fcrs Regal: Retro-Leuchtglobus mit aktuellem Kartenbild und LED")}
        ${affiliateBoxHtml("deko", "Weltkarte", "F\u00fcrs Arbeitszimmer: riesige, laminierte Weltkarte (201 \u00d7 116,5 cm), Stand 2025")}
        <p style="font-size:0.72rem;color:var(--muted);margin:0.6rem 0 0;">*Affiliate-Links zu Amazon. Bei einem Kauf erhalten wir eine kleine Provision, f\u00fcr dich \u00e4ndert sich der Preis nicht.</p>
      </div>

      ${relatedLinks([
        {route:"bundeslaender", label:"Deutsche Bundesl\u00e4nder: Schaubild"},
        {route:"epochen-weltgeschichte", label:"Epochen der Weltgeschichte"},
        {route:"typenvergleiche", label:"Typenvergleiche"},
      ])}
    </div>
  `);
}

window.llState = { region:"ALL", typ:0, instinct:"ALL" };
window.llSet = function(dim, val) {
  if(window.llState[dim]===val){ window.llState[dim]= dim==="typ"?0:"ALL"; }
  else { window.llState[dim]=val; }
  llApply();
};
window._llFlushLazyRegions = function() {
  var box = document.getElementById("ll-lazy-container");
  if (!box) return;
  var regions = window._llRegionsData;
  var fn = window._llRegionHtml.fn;
  if (!regions || !fn) return;
  var next = parseInt(box.getAttribute("data-ll-next") || "0", 10);
  var html = "";
  for (; next < regions.length; next++) html += fn(regions[next]);
  if (html) box.insertAdjacentHTML("beforebegin", html);
  box.setAttribute("data-ll-next", String(next));
};
window._llLazyLoadStep = function() {
  var box = document.getElementById("ll-lazy-container");
  if (!box) return;
  var regions = window._llRegionsData;
  var fn = window._llRegionHtml.fn;
  if (!regions || !fn) return;
  var next = parseInt(box.getAttribute("data-ll-next") || "0", 10);
  if (next >= regions.length) return;
  box.insertAdjacentHTML("beforebegin", fn(regions[next]));
  box.setAttribute("data-ll-next", String(next + 1));
  requestAnimationFrame(window._llLazyLoadStep);
};
window.llRandom = function() {
  window._llFlushLazyRegions();
  var cards = Array.prototype.slice.call(document.querySelectorAll(".bl-card[data-ll-name]")).filter(function(c){ return c.style.display !== "none"; });
  if (!cards.length) return;
  var pick = cards[Math.floor(Math.random() * cards.length)];
  pick.scrollIntoView({behavior:"smooth", block:"center"});
  var prevBoxShadow = pick.style.boxShadow, prevOutline = pick.style.outline;
  pick.style.outline = "3px solid var(--gold)";
  pick.style.boxShadow = "0 0 0 6px rgba(197,160,89,0.3)";
  setTimeout(function(){
    pick.style.outline = prevOutline;
    pick.style.boxShadow = prevBoxShadow;
  }, 1500);
};
window.llBackToFilter = function() {
  var bar = document.getElementById("ll-filter-bar");
  if (bar) bar.scrollIntoView({behavior:"smooth", block:"start"});
};
window._llInitVideoObserver = function() {
  var vid = document.getElementById("ll-earth-video");
  if (!vid || !window.IntersectionObserver) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) vid.play().catch(function(){});
      else vid.pause();
    });
  }, { threshold: 0.1 });
  obs.observe(vid);
};
window.llApply = function() {
  window._llFlushLazyRegions();
  const s = window.llState;
  const cards = document.querySelectorAll(".bl-card[data-ll-region]");
  let vis = 0;
  cards.forEach(function(c){
    const ok = (s.region==="ALL" || c.dataset.llRegion===s.region)
      && (s.typ===0 || parseInt(c.dataset.llTyp)===s.typ)
      && (!s.instinct || s.instinct==="ALL" || (c.dataset.llSubtyp||"").indexOf(s.instinct)===0);
    c.style.display = ok ? "" : "none";
    if(ok) vis++;
  });
  const cnt = document.getElementById("ll-count-num");
  if(cnt) cnt.textContent = vis;
  document.querySelectorAll(".kf-btn[data-ll-region]").forEach(function(b){
    b.classList.toggle("kf-btn--active", b.dataset.llRegion===s.region||(s.region==="ALL"&&b.dataset.llRegion==="ALL"));
  });
  document.querySelectorAll(".kf-btn[data-ll-typ-btn]").forEach(function(b){
    b.classList.toggle("kf-btn--active", parseInt(b.dataset.llTypBtn)===(s.typ||0));
  });
  document.querySelectorAll(".kf-btn[data-ll-instinct-btn]").forEach(function(b){
    b.classList.toggle("kf-btn--active", b.dataset.llInstinctBtn===(s.instinct||"ALL"));
  });
};

const PLANETEN_DATEN = [
  { name: "Saturn", bild: "saturn.jpg", typ: 1,
    text: "Kaum ein Anblick im Sonnensystem ist so geordnet wie Saturns Ringsystem \u2013 Milliarden Eis- und Gesteinsbrocken, jeder exakt auf seiner Bahn, in strengen, konzentrischen Kreisen um den Planeten angeordnet. Saturn tr\u00e4gt den Namen des Titanen der Zeit und der Ernte, in der Astrologie der Planet der Disziplin, der Pflicht und der Grenzen, der Struktur erzwingt, wo sonst Chaos herrschen w\u00fcrde. Das ist die Signatur der Eins: das tiefe Bed\u00fcrfnis nach Ordnung, Regelhaftigkeit und Verl\u00e4sslichkeit \u2013 Freiheit nicht im Ungebundenen, sondern in der sauber eingehaltenen Form." },
  { name: "Venus", bild: "venus.jpg", typ: 2,
    text: "Benannt nach der G\u00f6ttin der Liebe und Sch\u00f6nheit, ist Venus von einer dichten, alles einh\u00fcllenden Wolkendecke umgeben \u2013 nichts Hartes, Kantiges wird nach au\u00dfen gezeigt, nur eine warme, verh\u00fcllende Oberfl\u00e4che. Sie ist nach Sonne und Mond das hellste Objekt am Nachthimmel und war seit der Antike als Morgen- und Abendstern der Inbegriff von Anziehung und Verlangen, gesehen und begehrt zu werden. Die Zwei sucht genau das: N\u00e4he herstellen, umsorgen, gefallen, im Blick des anderen aufgehen \u2013 Venus lebt diese Sehnsucht als kosmisches Prinzip vor." },
  { name: "Neptun", bild: "neptun.jpg", typ: 3,
    text: "Benannt nach dem Gott des Meeres, erscheint Neptun als makellos blaue, gl\u00e4nzende Kugel \u2013 tats\u00e4chlich aber ist dieses tiefe Blau gr\u00f6\u00dftenteils ein Effekt der Lichtbrechung an Methan in der Atmosph\u00e4re, nicht das, was ein Betrachter vor Ort tats\u00e4chlich s\u00e4he. Neptun ist so weit entfernt, dass er mit blo\u00dfem Auge unsichtbar bleibt und erst 1846 durch mathematische Berechnung, nicht durch direkte Beobachtung, entdeckt wurde \u2013 ein Planet, der zun\u00e4chst als reine Vorhersage, als Wirkung ohne sichtbare Ursache existierte. Das ist die Drei: die makellose, sorgf\u00e4ltig inszenierte Oberfl\u00e4che, das Bild, das \u00fcberzeugt, bevor irgendjemand fragt, was wirklich dahintersteckt." },
  { name: "Uranus", bild: "uranus.jpg", typ: 4,
    text: "Uranus f\u00e4llt aus jeder Reihe: Anders als alle anderen Planeten liegt seine Rotationsachse fast vollst\u00e4ndig auf der Seite, er \"rollt\" gewisserma\u00dfen um die Sonne, statt sich aufrecht zu drehen \u2013 eine radikale, buchst\u00e4bliche Abweichung von der Norm des restlichen Sonnensystems. Erst 1781 \u00fcberhaupt als Planet erkannt, durchbrach er als erster neuentdeckter Himmelsk\u00f6rper seit der Antike das seit Jahrtausenden feststehende Weltbild. Genau das ist die Vier: bewusstes Anderssein, der Bruch mit der Konvention, die Weigerung, sich der gewohnten Ordnung anzupassen, weil das eigene, einzigartige Wesen wichtiger ist als Anpassung." },
  { name: "Merkur", bild: "merkur.jpg", typ: 5,
    text: "Als schnellster und sonnenn\u00e4chster Planet tr\u00e4gt Merkur den Namen des r\u00f6mischen G\u00f6tterboten \u2013 k\u00fchl, wendig, st\u00e4ndig in Bewegung, aber nie wirklich emotional involviert. Seine extreme N\u00e4he zur Sonne zwingt ihn zu einem Leben am Rand der Verbrennung, weshalb er sich in eine gepanzerte, krater\u00fcbers\u00e4te Distanz zur\u00fcckgezogen hat, fast ganz ohne Atmosph\u00e4re \u2013 ein Planet, der beobachtet, aber sich nicht exponiert. Genau das ist die Signatur der F\u00fcnf: schnelles, pr\u00e4zises Erfassen von Information bei gleichzeitigem R\u00fcckzug ins sichere Innere, aus der Deckung heraus die Welt kartieren, statt sich ihr ungesch\u00fctzt auszusetzen." },
  { name: "Erde", bild: "erde.jpg", typ: 6,
    text: "Der einzige Planet, den wir aus eigener Erfahrung kennen, weil er der einzige feste Boden ist, den wir haben \u2013 ein schmaler, verletzlicher Streifen aus Atmosph\u00e4re, Wasser und Magnetfeld, der Leben gegen die t\u00f6dliche Leere des Alls abschirmt. Diese Schutzbed\u00fcrftigkeit pr\u00e4gt jede menschliche Zivilisation: Vorratshaltung, B\u00fcndnisse, Absicherung gegen Katastrophen, das Bed\u00fcrfnis, den Boden unter den F\u00fc\u00dfen zu sichern. Genau das ist die Sechs: das Bewusstsein, dass Sicherheit nichts Selbstverst\u00e4ndliches ist, sondern aktiv verteidigt werden muss." },
  { name: "Jupiter", bild: "jupiter.jpg", typ: 7,
    text: "Der mit Abstand gr\u00f6\u00dfte Planet des Sonnensystems, benannt nach dem K\u00f6nig der G\u00f6tter \u2013 seine gewaltigen, bunten Wolkenb\u00e4nder wirbeln in permanenter, farbenfroher Bewegung, angetrieben von einer schieren F\u00fclle an Energie, die keinen Stillstand kennt. Jupiter ist in der Astrologie seit jeher der Planet des Gl\u00fccks, der Expansion und des \u00dcberflusses \u2013 wer unter ihm geboren ist, dem wird Gro\u00dfz\u00fcgigkeit und Lebensfreude nachgesagt. Die Sieben lebt diese Weite: immer neue M\u00f6glichkeiten, nie an einem Ort verharren, das Leben als offenen, \u00fcppigen Raum begreifen." },
  { name: "Mars", bild: "mars.jpg", typ: 8,
    text: "Der rote Planet tr\u00e4gt den Namen des Kriegsgottes \u2013 seine rostrote Farbe stammt von oxidiertem Eisen, buchst\u00e4blich \"Blut\" im Gestein, und seine Oberfl\u00e4che ist von gewaltigen Vulkanen, Canyons und Einschlagskratern gezeichnet, die von roher, ungebremster geologischer Kraft erz\u00e4hlen. Kein Planet steht so unmittelbar f\u00fcr Konfrontation, Durchsetzung und den Kampf ums \u00dcberleben unter lebensfeindlichen Bedingungen. Das ist die Acht ungefiltert: direkte Kraft, keine Umwege, kein Zieren \u2013 St\u00e4rke, die sich nicht rechtfertigen muss." },
  { name: "Pluto", bild: "pluto.jpg", typ: 9,
    text: "1930 als neunter Planet entdeckt und \u00fcber 76 Jahre lang selbstverst\u00e4ndlicher Teil jeder Schulbuch-Aufz\u00e4hlung, wurde Pluto 2006 auf einer schwach besuchten IAU-Konferenz \u2013 viele Delegierte waren bereits abgereist \u2013 von einer Minderheit der verbliebenen Astronomen zum \"Zwergplaneten\" herabgestuft. Er verlor \u00fcber Nacht \u00f6ffentlich seinen Status als \"vollwertig\", obwohl sich an seiner physischen Realit\u00e4t nichts ge\u00e4ndert hatte: Er umkreist die Sonne weiterhin, unbeirrt, mit eigenem Mond, eigener d\u00fcnner Atmosph\u00e4re, eigener geologischer Aktivit\u00e4t \u2013 nur eben am Rand, im Halbdunkel, kaum noch beachtet. Genau das ist die Neun: f\u00fcr unwichtig erkl\u00e4rt werden, sich selbst zur\u00fccknehmen, an den Rand gedr\u00e4ngt sein \u2013 und trotzdem, leise, unbeirrbar weiter die eigene Bahn ziehen." },
];

function planetenzuordnungenPage() {
  const typenFarben = TYPE_COLORS;
  const cardsHtml = PLANETEN_DATEN.map(p => `
    <div class="bl-card" id="pl-${p.name}" data-pl-typ="${p.typ}" data-pl-name="${p.name}">
      <img src="./assets/planeten/${p.bild}" alt="${p.name} (NASA, gemeinfrei)" loading="lazy" style="display:block;width:100%;height:180px;object-fit:cover;" />
      <div class="bl-card__badge" style="background:${typenFarben[p.typ] ?? 'var(--copper)'}">Typ ${p.typ}</div>
      <div class="bl-card__body">
        <h3 class="bl-card__name">${p.name}</h3>
        <p class="bl-card__beschreibung">${p.text}</p>
      </div>
    </div>
  `).join("");

  return shell(`
    ${pageHeader("planetenzuordnungen")}
    <div class="schaubild-page">
      <p class="eyebrow">Wissen \u00b7 Astronomie</p>
      <h1 class="schaubild-page__title">Planeten &amp; Trabanten des Sonnensystems</h1>
      <p class="schaubild-page__intro">Die neun klassischen Himmelsk\u00f6rper unseres Sonnensystems &ndash; Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun und Pluto &ndash; und ihr jeweils vorherrschendes Enneagramm-Prinzip. Eine begr\u00fcndete, aber bewusst spielerische Analogie zwischen astronomischem Charakter, Mythologie und den neun Grundmustern.</p>

      <div style="max-width:640px;margin:0 auto 0.4rem;border-radius:12px;overflow:hidden;">
        <img src="./assets/planeten/groessenvergleich.jpg" alt="Gr\u00f6\u00dfenvergleich aller Planeten und Pluto im Sonnensystem (NASA, gemeinfrei)" style="display:block;width:100%;height:auto;" />
      </div>
      <p style="text-align:center;font-size:0.72rem;color:var(--muted);margin:-0.4rem 0 1.2rem;">Gr\u00f6\u00dfenvergleich: NASA &ndash; gemeinfrei (Public Domain). Die Abst\u00e4nde sind nicht ma\u00dfstabsgetreu, nur die Gr\u00f6\u00dfenverh\u00e4ltnisse.</p>

      <div style="background:var(--paper-deep,#ede8dc);border-left:3px solid var(--copper);border-radius:0 10px 10px 0;padding:1.1rem 1.3rem;margin:1.2rem 0;">
        <p style="font-size:0.88rem;line-height:1.65;color:var(--ink);margin:0 0 0.7rem;">Pluto wurde 2006 der offizielle Planetenstatus aberkannt &ndash; er gilt seither als Zwergplanet. Diese Zuordnung \u00fcbernimmt bewusst die urspr\u00fcngliche neunfache Z\u00e4hlung (inklusive Pluto), weil sich neun Himmelsk\u00f6rper organisch auf neun Enneagrammtypen abbilden lassen &ndash; und weil gerade Plutos Geschichte des Herabgestuft- und \u00dcbersehenwerdens selbst ein treffendes Sinnbild f\u00fcr ein Enneagramm-Prinzip liefert (siehe unten).</p>
        <p style="font-size:0.88rem;line-height:1.65;color:var(--ink);margin:0;">Alle Fotos: NASA/JPL-Caltech, gemeinfrei (Public Domain).</p>
      </div>

      <div class="bl-grid">
        ${cardsHtml}
      </div>

      <div class="vb-buecher">
        <h3 class="vb-buecher__title">Buchtipps zum Thema</h3>
        <a class="vb-buch" href="https://www.amazon.de/dp/3442460719?tag=enneagrammkom-21" target="_blank" rel="noopener sponsored">
          <span class="vb-buch__icon">\ud83d\udcd6</span>
          <span class="vb-buch__body">
            <span class="vb-buch__name">Bill Bryson &ndash; Eine kurze Geschichte von fast allem</span>
            <span class="vb-buch__hint">Leicht verst\u00e4ndlicher \u00dcberblick \u00fcber Astronomie, Physik und die Entstehung der Welt</span>
          </span>
        </a>
        <a class="vb-buch" href="https://www.amazon.de/dp/3860472445?tag=enneagrammkom-21" target="_blank" rel="noopener sponsored">
          <span class="vb-buch__icon">\ud83d\udcd6</span>
          <span class="vb-buch__body">
            <span class="vb-buch__name">Carl Sagan &ndash; Unser Kosmos</span>
            <span class="vb-buch__hint">Der zeitlose Klassiker \u00fcber Astronomie, Philosophie und die Prinzipien des Universums</span>
          </span>
        </a>
        <a class="vb-buch" href="https://www.amazon.de/dp/3440173593?tag=enneagrammkom-21" target="_blank" rel="noopener sponsored">
          <span class="vb-buch__icon">\ud83d\udcd6</span>
          <span class="vb-buch__body">
            <span class="vb-buch__name">Hermann-Michael Hahn &ndash; Basic Sternbilder</span>
            <span class="vb-buch__hint">103 Karten f\u00fcr die Jackentasche &ndash; alle Sternbilder f\u00fcr jede Jahreszeit</span>
          </span>
        </a>
        <p style="font-size:0.72rem;color:var(--muted);margin:0.6rem 0 0;">*Affiliate-Links zu Amazon. Bei einem Kauf erhalten wir eine kleine Provision, f\u00fcr dich \u00e4ndert sich der Preis nicht.</p>
      </div>

      <div class="vb-buecher">
        <h3 class="vb-buecher__title">Praktisches Zubeh\u00f6r f\u00fcr Sternenbeobachter</h3>
        ${affiliateBoxHtml("astro", "Rotlicht-Taschenlampe", "Nacht-Modus-Tipp: Rotlicht blendet die Augen nicht wie Smartphone-Licht")}
        ${affiliateBoxHtml("astro", "Einsteiger-Fernglas", "Planeten hautnah: Fernglas f\u00fcr die Himmelsbeobachtung mit eigenen Augen")}
        ${affiliateBoxHtml("astro", "Tisch-Teleskop", "Mondkrater &amp; Jupiter live sehen: kompaktes Einsteiger-Teleskop")}
        ${affiliateBoxHtml("astro", "Drehbare Sternkarte", "Analoges Werkzeug: klassische drehbare Sternkarte f\u00fcr drau\u00dfen")}
        ${affiliateBoxHtml("astro", "Sonnensystem-Modell", "Zum Anfassen: mechanisches Orrery-Modell, das die Planetenbahnen greifbar macht")}
        <p style="font-size:0.72rem;color:var(--muted);margin:0.6rem 0 0;">*Affiliate-Links zu Amazon. Bei einem Kauf erhalten wir eine kleine Provision, f\u00fcr dich \u00e4ndert sich der Preis nicht.</p>
      </div>

      ${relatedLinks([
        {route:"laenderzuordnungen", label:"L\u00e4nderzuordnungen: Alle L\u00e4nder der Welt"},
        {route:"enneagramm-astrologie", label:"Enneagramm meets Astrologie"},
        {route:"angst-essenz", label:"Schaubild: Angst \u2192 Essenz"},
      ])}
    </div>
  `);
}

function bundeslaenderPage() {
  const REGIONEN = [
    {
      region: "Norddeutschland",
      laender: [
        { name: "Schleswig-Holstein", typ: 9, label: "Friedliebender \u00b7 Vermittler", beschreibung: "Die Menschen gelten als entspannt, gelassen und naturverbunden. Schleswig-Holstein ist von Meer und Weite gepr\u00e4gt, was mit der inneren Ruhe des Neuners korrespondiert. Hier gibt es wenig Hektik, daf\u00fcr viel Bodenst\u00e4ndigkeit." },
        { name: "Mecklenburg-Vorpommern", typ: 5, label: "Beobachter \u00b7 Denker", beschreibung: "D\u00fcnn besiedelt, viel Ruhe, viele introvertierte Menschen. Die Mentalit\u00e4t ist eher zur\u00fcckhaltend, bedacht und manchmal distanziert &ndash; \u00e4hnlich wie die F\u00fcnf, die Wissen sammelt, aber nicht immer viel von sich preisgibt." },
        { name: "Hamburg", typ: 3, label: "Erfolgsorientierter \u00b7 Performer", beschreibung: "Eine der wirtschaftlich dynamischsten St\u00e4dte Deutschlands, internationales Flair, Handelsmetropole. HamburgerInnen sind oft zielstrebig, gesch\u00e4ftst\u00fcchtig und legen Wert auf Status &ndash; typisch f\u00fcr den Dreier." },
        { name: "Bremen", typ: 6, label: "Loyaler \u00b7 Skeptiker", beschreibung: "Traditionell eine Arbeiterstadt mit viel Genossenschaftsdenken, sozialer Verantwortung und einem gewissen Pragmatismus. Die Seefahrermentalit\u00e4t brachte ein tiefes Sicherheitsbewusstsein &ndash; beides passt zur Sechs." },
        { name: "Niedersachsen", typ: 9, label: "Friedliebender \u00b7 Vermittler", beschreibung: "Weite Landschaften, ruhige, ausgeglichene Menschen. Niedersachsen verbindet den norddeutschen Pragmatismus mit einer bodenst\u00e4ndigen, entspannten Art &ndash; sehr neunenhaft." },
      ]
    },
    {
      region: "Ostdeutschland",
      laender: [
        { name: "Brandenburg", typ: 5, label: "Beobachter \u00b7 Denker", beschreibung: "\u00c4hnlich wie Mecklenburg-Vorpommern: weite, ruhige Landstriche, eine Mentalit\u00e4t, die sich auf Substanz statt auf Show konzentriert. Oft zur\u00fcckhaltend und nicht sofort zug\u00e4nglich." },
        { name: "Berlin", typ: 7, label: "Abenteurer \u00b7 Enthusiast", beschreibung: "Multikulturell, kreativ, rastlos, st\u00e4ndig in Bewegung. Berlin steht f\u00fcr Experimente, Exzesse, Visionen &ndash; die pure Sieben. Hier wird sich ausprobiert und keine Langeweile geduldet." },
        { name: "Sachsen-Anhalt", typ: 6, label: "Loyaler \u00b7 Skeptiker", beschreibung: "Eine Region mit vielen wirtschaftlichen Herausforderungen, aber auch viel Zusammenhalt. Skepsis gegen\u00fcber Ver\u00e4nderungen, aber auch ein hohes Ma\u00df an Pflichtbewusstsein." },
        { name: "Sachsen", typ: 8, label: "Herausforderer \u00b7 Macher", beschreibung: "Stolz, durchsetzungsf\u00e4hig, widerstandsf\u00e4hig. Die Sachsen haben eine lange Tradition des eigenst\u00e4ndigen Denkens, ob in der Industrie oder in der Politik. Auch in Protestbewegungen oft sehr direkt und konfrontativ." },
        { name: "Th\u00fcringen", typ: 4, label: "Individualist \u00b7 Kreativer", beschreibung: "Heimat gro\u00dfer Denker wie Goethe und Schiller, viel Natur und eine gewisse Eigenwilligkeit. Th\u00fcringen hat eine kulturelle Tiefe, die gut zum Typ Vier passt." },
      ]
    },
    {
      region: "Westdeutschland",
      laender: [
        { name: "Nordrhein-Westfalen", typ: 3, label: "Erfolgsorientierter \u00b7 Performer", beschreibung: "Industrieregion, Arbeitermentalit\u00e4t trifft auf moderne Metropolen wie D\u00fcsseldorf und K\u00f6ln. Erfolg, Flei\u00df und Dynamik stehen hier hoch im Kurs &ndash; typisch f\u00fcr den Dreier." },
        { name: "Hessen", typ: 8, label: "Herausforderer \u00b7 Macher", beschreibung: "Frankfurt als Finanzzentrum, viele wirtschaftlich ambitionierte Menschen, aber auch eine gewisse Direktheit in der Mentalit\u00e4t. Hessen ist stark, eigenst\u00e4ndig und durchsetzungsf\u00e4hig." },
        { name: "Rheinland-Pfalz", typ: 6, label: "Loyaler \u00b7 Skeptiker", beschreibung: "Starke Traditionen, enge Gemeinschaften, viel l\u00e4ndliche Struktur. Sicherheit und Zusammenhalt stehen im Vordergrund, ebenso eine gewisse Skepsis gegen\u00fcber gro\u00dfen Ver\u00e4nderungen." },
        { name: "Saarland", typ: 2, label: "Helfer \u00b7 Unterst\u00fctzer", beschreibung: "Enge soziale Bindungen, eine herzliche, fast famili\u00e4re Kultur. Hilfsbereitschaft und Gastfreundschaft stehen an erster Stelle &ndash; ganz klar der Typ Zwei." },
      ]
    },
    {
      region: "S\u00fcddeutschland",
      laender: [
        { name: "Baden-W\u00fcrttemberg", typ: 5, label: "Beobachter \u00b7 Denker", beschreibung: "Hohe Ingenieurskunst, Bildungsbewusstsein, T\u00fcftler-Mentalit\u00e4t. Schwaben gelten als flei\u00dfig, sparsam und analytisch &ndash; das passt perfekt zum Typ F\u00fcnf." },
        { name: "Bayern", typ: 1, label: "Perfektionist \u00b7 Prinzipienfester", beschreibung: "Traditionell, strukturiert, stark wertorientiert. Bayern setzt auf Ordnung, Erfolg und Prinzipientreue &ndash; klassische Eigenschaften von Typ Eins." },
      ]
    },
  ];

  const typenFarben = TYPE_COLORS;

  const kartenHtml = `
    <div class="bl-karte-wrap">
      <div class="bl-karte-container">
        <img src="./assets/bundeslaender-karte.jpg" alt="Karte: 16 Bundesl\u00e4nder und ihre Enneagramm-Zuordnung" class="bl-karte" />
        <div class="bl-karte-emblem">${compassMark("small")}</div>
      </div>
      <p class="bl-karte-caption">\u00dcbersichtskarte: Zuordnung der 16 Bundesl\u00e4nder zu den 9 Enneagramm-Prinzipien</p>
    </div>
  `;

  const regionenHtml = REGIONEN.map(r => `
    <div class="bl-region">
      <h2 class="bl-region__title">${r.region}</h2>
      <div class="bl-grid">
        ${r.laender.map(l => `
          <div class="bl-card">
            <div class="bl-card__badge" style="background:${typenFarben[l.typ] ?? 'var(--copper)'}">Typ ${l.typ}</div>
            <div class="bl-card__body">
              <h3 class="bl-card__name">${l.name}</h3>
              <p class="bl-card__label">${l.label}</p>
              <p class="bl-card__beschreibung">${l.beschreibung}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  const fazitHtml = `
    <div class="bl-fazit">
      <h2 class="bl-fazit__title">Fazit</h2>
      <p>Diese Zuordnung ist nat\u00fcrlich nicht absolut, aber sie gibt eine <strong>Tendenz</strong> dar\u00fcber, welche Enneagramm-Muster sich in den deutschen Bundesl\u00e4ndern widerspiegeln. Manche Bundesl\u00e4nder haben Anteile mehrerer Typen, aber der jeweilige Hauptaspekt zeigt sich oft in Mentalit\u00e4t, Geschichte und Kultur.</p>
      <p>Letztlich bleibt das Enneagramm ein Modell f\u00fcr individuelles Wachstum &ndash; doch es ist spannend, es mitunter auch auf kollektive Strukturen anzuwenden!</p>
      <div class="bl-tipp">
        <strong>Kleiner Tipp:</strong> Bei der Wahl des Urlaubsziels im Rahmen eines Deutschland-Urlaubs w\u00fcrde ich pers\u00f6nlich nicht etwa das Land der eigenen Enneagrammfixierung w\u00e4hlen &ndash; das enth\u00e4lt zu viele Eigenschwingungen, die zu starker Konfrontation mit eigenen Schattenanteilen f\u00fchren k\u00f6nnen. Daher: lieber das jeweilige <em>Entspannungspunkt-Bundesland</em> ausw\u00e4hlen &ndash; da kann man wirklich besser entspannen!
      </div>
    </div>
  `;

  return shell(`
    ${pageHeader("bundeslaender")}
    <div class="schaubild-page">
      <p class="eyebrow">Schaubilder \u00b7 Kultur</p>
      <h1 class="schaubild-page__title">Deutsche Bundesl\u00e4nder</h1>
      <p class="schaubild-page__intro">Zuordnung der 16 deutschen Bundesl\u00e4nder zu den 9 Enneagramm-Prinzipien &ndash; eine symbolische Ann\u00e4herung an vorherrschende kulturelle Muster.</p>
      ${kartenHtml}
      ${regionenHtml}
      ${fazitHtml}
      ${relatedLinks([
        {route:"laenderzuordnungen", label:"L\u00e4nderzuordnungen: Alle L\u00e4nder der Welt"},
        {route:"schaubilder", label:"Schaubilder-\u00dcbersicht"},
        {route:"epochen-weltgeschichte", label:"Epochen der Weltgeschichte"},
        {route:"typenvergleiche", label:"Typenvergleiche"},
      ])}
    </div>
  `);
}

function stillePage() {
  const DAUER = 9 * 60;
  const IMPULSE = [
    "F\u00fcr die n\u00e4chsten 9 Minuten musst du nichts erreichen, nichts verbessern und nichts verstehen. Lass einfach los.",
    "Das Ego sucht st\u00e4ndig. F\u00fcr diese 9 Minuten darf das Suchen ruhen.",
    "Du bist nicht das Muster. Du bist der Raum, in dem das Muster erscheint.",
    "Keine Aufgabe. Kein Ziel. Nur dieses eine Jetzt.",
    "Was w\u00e4re, wenn du f\u00fcr diese 9 Minuten genau richtig w\u00e4rst \u2014 so wie du bist?",
    "Das Enneagramm zeigt dir das K\u00e4fig-Muster. Stille ist der Schl\u00fcssel.",
    "Lass die Gedanken kommen und gehen wie Wolken. Du bist der Himmel.",
  ];
  const impuls = IMPULSE[Math.floor(Math.random() * IMPULSE.length)];

  return shell(`
    ${pageHeader("stille")}
    <section class="narrow" style="text-align:center;padding-bottom:3rem;">
      <p class="eyebrow">Praxis \u00b7 Innehalten</p>
      <h1 class="h1--tip" style="margin-bottom:0.3rem;">9 Minuten Stille</h1>
      <p style="color:var(--ink-muted);font-size:0.93rem;margin-bottom:2rem;">Eine Minute f\u00fcr jeden Enneagrammtyp \u2014 ein Symbol f\u00fcr die Ganzheit.</p>

      <div id="stille-impuls" style="background:var(--paper);border-left:3px solid var(--copper);border-radius:0 10px 10px 0;padding:1.1rem 1.3rem;margin:0 auto 1.5rem;max-width:420px;text-align:left;">
        <p style="margin:0;font-style:italic;font-size:0.97rem;line-height:1.7;color:var(--ink);">${impuls}</p>
      </div>

      <div style="max-width:400px;margin:0 auto 2rem;text-align:left;font-size:0.88rem;line-height:1.75;color:var(--ink-muted);padding:0 0.5rem;">
        <p style="margin:0 0 0.7rem;">Stille hei\u00dft nicht: hinsetzen und meditieren. Du bist genau richtig \u2014 so wie du bist, dort wo du gerade bist.</p>
        <p style="margin:0 0 0.7rem;">Augen offen oder geschlossen, viele Gedanken oder wenige \u2014 das spielt keine Rolle. Was z\u00e4hlt: du h\u00e4ltst inne. Du greifst nicht mehr. Du lebst f\u00fcr diesen Moment nicht mehr dein Muster.</p>
        <p style="margin:0;font-style:italic;color:var(--copper);">Im Nichttun ist alles getan.</p>
      </div>

      <div style="position:relative;width:300px;height:300px;margin:0 auto 2rem;">
        <svg id="stille-ring" viewBox="0 0 300 300" style="position:absolute;inset:0;width:300px;height:300px;transform:rotate(-90deg);">
          <circle cx="150" cy="150" r="136" fill="none" stroke="var(--border)" stroke-width="5"/>
          <circle id="stille-arc" cx="150" cy="150" r="136" fill="none"
            stroke="var(--copper)" stroke-width="5"
            stroke-dasharray="855" stroke-dashoffset="0"
            stroke-linecap="round"
            style="transition:stroke-dashoffset 1s linear;"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.3rem;">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0.12;pointer-events:none;">
            ${compassMark("large")}
          </div>
          <span id="stille-zeit" style="font-size:6rem;font-family:'EB Garamond',serif;color:var(--copper);letter-spacing:0.04em;line-height:1;position:relative;text-shadow:0 2px 12px rgba(165,96,61,0.25);">9:00</span>
          <span id="stille-status" style="font-size:0.78rem;color:var(--ink-muted);letter-spacing:0.1em;text-transform:uppercase;position:relative;">bereit</span>
        </div>
      </div>

      <div style="margin:0 auto 1.5rem;max-width:420px;text-align:center;">
        <p style="font-size:0.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:0 0 .7rem;">Dauer w\u00e4hlen</p>
        <div style="display:flex;gap:.4rem;justify-content:center;flex-wrap:wrap;">
          <button class="stille-dauer-btn" data-min="2"  style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink);">2 min</button>
          <button class="stille-dauer-btn" data-min="3"  style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink);">3 min</button>
          <button class="stille-dauer-btn" data-min="5"  style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink);">5 min</button>
          <button class="stille-dauer-btn active" data-min="9" style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--copper);background:var(--paper);cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--copper);font-weight:700;">9 min</button>
          <button class="stille-dauer-btn" data-min="12" style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink);">12 min</button>
          <button class="stille-dauer-btn" data-min="15" style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink);">15 min</button>
          <button class="stille-dauer-btn" data-min="20" style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink);">20 min</button>
          <button class="stille-dauer-btn" data-min="30" style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink);">30 min</button>
          <button class="stille-dauer-btn" data-min="60" style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink);">1 Std</button>
          <button class="stille-dauer-btn" data-min="0"  style="padding:.35rem .7rem;border-radius:20px;border:1.5px solid var(--border);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink);">\u221e endlos</button>
        </div>
      </div>

      <div style="margin:0 auto 1.5rem;max-width:480px;">
        <p style="font-size:0.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:0 0 .7rem;text-align:center;">Klangbegleitung w\u00e4hlen</p>
        <div id="stille-klang-grid" style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.3rem;">
          ${(()=>{
  const G = (label) => ({type:"group", label});
  const S = (id,icon,lbl,isNew) => ({id,icon,label:lbl,isNew});
  const items = [
    G("Stille & Rauschen"),
    S("stille","\ud83e\udd2b","Stille"),
    S("white","~~","White"),
    S("pink","\ud83c\udf38","Pink"),
    S("brown","\ud83d\udfe4","Brown"),
    G("Wasser"),
    S("bach","\ud83c\udfde\ufe0f","Bach"),
    S("gewaesser","\ud83c\udfde\ufe0f","Gew\u00e4sser"),
    S("meer","\ud83c\udf0a","Meer"),
    S("nachtmeer","\ud83c\udf04","Meer nachts"),
    S("regen","\ud83c\udf27\ufe0f","Regen"),
    S("sommerregen","\ud83c\udf43","Sommerregen"),
    S("wasserfall","\ud83d\udca7","Wasserfall"),
    S("tropfen","\ud83e\udea8","Tropfsteinh."),
    S("unterwasser","\ud83d\udca7","Unterwasser"),
    S("dschungelregen","\ud83c\udf27\ufe0f","Dschungelregen"),
    S("regenwald","\ud83c\udf33","Regenwald"),
    S("mangroven","\ud83c\udf3f","Mangroven"),
    G("Wetter & Elemente"),
    S("blizzard","\u2744\ufe0f","Blizzard"),
    S("feuer","\ud83d\udd25","Feuer"),
    S("gewitter","\u26c8\ufe0f","Gewitter"),
    S("hoehle","\ud83e\udea8","H\u00f6hle"),
    S("nordlichter","\ud83c\udf20","Nordlichter"),
    S("polareis","\ud83e\uddca","Polareis"),
    S("wald","\ud83c\udf32","Wald"),
    S("wind","\ud83d\udca8","Wind"),
    S("brandung","\ud83c\udf0a","Brandung",true),
    S("hagel","\ud83e\uddca","Hagel",true),
    S("herbstlaub","\ud83c\udf42","Herbstlaub",true),
    S("wuestensturm","\ud83c\udfdc\ufe0f","W\u00fcstensturm"),
    G("Orte & Atmosph\u00e4re"),
    S("aquarium","\ud83d\udc20","Aquarium"),
    S("japanischer-garten","\ud83c\udf8b","Japan. Garten"),
    S("morgenkonzert","\ud83c\udf05","Morgenkonzert"),
    S("savanne","\ud83e\udd8b","Savanne"),
    S("kathedrale","\ud83d\udd4d","Kathedrale",true),
    S("kornfeld","\ud83c\udf3e","Kornfeld",true),
    S("tibet","\ud83c\udfd4\ufe0f","Tibet"),
    S("wiese","\ud83e\udd97","Sommerwiese"),
    G("Alltag & Innen"),
    S("bibliothek","\ud83d\udcda","Bibliothek",true),
    S("cafe","\u2615","Caf\u00e9",true),
    S("kinder","\ud83d\udc67","Kinderstimmen",true),
    S("schreibmaschine","\u2328\ufe0f","Schreibmaschin.",true),
    S("standuhr","\ud83d\udd70\ufe0f","Standuhr",true),
    S("regenamfenster","\ud83e\ude9f","Regen am Fenster",true),
    S("vinyl","\ud83c\udfb5","Vinyl",true),
    S("zug","\ud83d\ude82","Zug"),
    G("Tiere"),
    S("bienen","\ud83d\udc1d","Bienen"),
    S("delfin","\ud83d\udc2c","Delfine"),
    S("elefanten","\ud83d\udc18","Elefanten"),
    S("eule","\ud83e\udd89","Eule"),
    S("katze","\ud83d\udc31","Katze"),
    S("kuckuck","\ud83c\udf3f","Kuckuck"),
    S("seehund","\ud83e\uddad","Seehundbabys"),
    S("voegel","\ud83d\udc26","Vogelstimmen"),
    S("wal","\ud83d\udc0b","Walgesang"),
    S("wolf","\ud83d\udc3a","W\u00f6lfe"),
    S("froesche","\ud83d\udc38","Fr\u00f6sche",true),
    S("zikaden","\ud83e\udd87","Zikaden-Nacht"),
    G("Meditation & T\u00f6ne"),
    S("alpha","\ud83e\udde0","Alpha (8\u201312 Hz)",true),
    S("chimes","\ud83c\udf90","Windspiele"),
    S("delta","\ud83c\udf19","Delta (0,5\u20134 Hz)",true),
    S("gamma","\u2728","Gamma (>30 Hz)",true),
    S("herzschlag","\u2764\ufe0f","Herzschlag"),
    S("hz432","\ud83c\udfb5","432 Hz"),
    S("klangschale","\ud83d\udd14","Klangschale"),
    S("kosmos","\ud83c\udf0c","Kosmisch"),
    S("om","\ud83e\uddd8","Om-Mantra"),
    S("schumann","\ud83c\udf00","Schumann"),
    S("theta","\ud83c\udf0a","Theta (4\u20138 Hz)",true),
    S("trommel","\ud83e\udd41","Trommel"),
  ];
  return items.map(s => {
    if (s.type === "group") {
      return `<div style="grid-column:1/-1;padding:.5rem 0 .2rem;font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);font-weight:600;border-bottom:1px solid var(--border);margin-bottom:.2rem;">${s.label}</div>`;
    }
    return `<button class="stille-klang-btn${s.id==="stille"?" active":""}" data-klang="${s.id}"
            style="position:relative;display:flex;flex-direction:column;align-items:center;gap:.2rem;padding:.35rem .1rem;border-radius:10px;border:1.5px solid ${s.id==="stille"?"var(--copper)":"var(--border)"};background:${s.id==="stille"?"var(--paper)":"transparent"};cursor:pointer;font-size:.65rem;color:var(--ink);line-height:1.2;transition:border-color .2s,background .2s;">
            ${s.isNew?'<span style="position:absolute;top:-4px;right:-4px;font-size:.55rem;font-weight:700;color:#fff;background:var(--copper);border-radius:4px;padding:1px 4px;line-height:1.4;letter-spacing:.04em;">NEU</span>':''}
            <span style="font-size:1.1rem;">${s.icon}</span>${s.label}
          </button>`;
  }).join("");
})()}
        </div>
        <div id="stille-klang-tags" style="display:flex;flex-wrap:wrap;justify-content:center;gap:.4rem;min-height:1.6rem;margin:.5rem 0 0;"></div>
        <p id="stille-klang-info" style="margin:.7rem 0 0;font-size:0.8rem;color:var(--ink-muted);min-height:1.4em;text-align:center;font-style:italic;">Komplette Stille \u2014 nur Gong am Anfang und Ende.</p>
      </div>

      <div style="max-width:480px;margin:1.8rem auto 1.5rem;border-top:1px solid var(--border);padding-top:1.5rem;">
        <p style="font-size:0.85rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gold);font-weight:700;margin:0 0 .35rem;text-align:center;">Klang-Empfehlung f&uuml;r Ihren Subtyp</p>
        <p style="font-size:0.8rem;color:var(--ink-muted);text-align:center;margin:0 0 1.1rem;line-height:1.5;">W&auml;hlen Sie Typ und Instinktvariante &mdash; Sie erhalten drei pers&ouml;nlich abgestimmte Kl&auml;nge.</p>
        <div style="display:flex;gap:.4rem;justify-content:center;flex-wrap:wrap;margin-bottom:.8rem;"><button class="stille-typ-btn" data-typ="1" style="padding:.3rem .6rem;border-radius:20px;border:2px solid #5f5f5f;background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:#5f5f5f;font-weight:600;transition:all .15s;opacity:.7;">Typ 1</button><button class="stille-typ-btn" data-typ="2" style="padding:.3rem .6rem;border-radius:20px;border:2px solid #7a2fa8;background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:#7a2fa8;font-weight:600;transition:all .15s;opacity:.7;">Typ 2</button><button class="stille-typ-btn" data-typ="3" style="padding:.3rem .6rem;border-radius:20px;border:2px solid #1fa688;background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:#1fa688;font-weight:600;transition:all .15s;opacity:.7;">Typ 3</button><button class="stille-typ-btn" data-typ="4" style="padding:.3rem .6rem;border-radius:20px;border:2px solid #3cbf1f;background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:#3cbf1f;font-weight:600;transition:all .15s;opacity:.7;">Typ 4</button><button class="stille-typ-btn" data-typ="5" style="padding:.3rem .6rem;border-radius:20px;border:2px solid #124fcc;background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:#124fcc;font-weight:600;transition:all .15s;opacity:.7;">Typ 5</button><button class="stille-typ-btn" data-typ="6" style="padding:.3rem .6rem;border-radius:20px;border:2px solid #8a5222;background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:#8a5222;font-weight:600;transition:all .15s;opacity:.7;">Typ 6</button><button class="stille-typ-btn" data-typ="7" style="padding:.3rem .6rem;border-radius:20px;border:2px solid #d4a800;background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:#d4a800;font-weight:600;transition:all .15s;opacity:.7;">Typ 7</button><button class="stille-typ-btn" data-typ="8" style="padding:.3rem .6rem;border-radius:20px;border:2px solid #a00802;background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:#a00802;font-weight:600;transition:all .15s;opacity:.7;">Typ 8</button><button class="stille-typ-btn" data-typ="9" style="padding:.3rem .6rem;border-radius:20px;border:2px solid #cc6e00;background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:#cc6e00;font-weight:600;transition:all .15s;opacity:.7;">Typ 9</button></div>
        <div style="display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem;"><button class="stille-inst-btn" data-inst="SE" style="padding:.35rem .9rem;border-radius:20px;border:1.5px solid var(--copper);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--copper);transition:all .15s;">SE &ndash; Selbsterhaltung</button><button class="stille-inst-btn" data-inst="SO" style="padding:.35rem .9rem;border-radius:20px;border:1.5px solid var(--copper);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--copper);transition:all .15s;">SO &ndash; Sozial</button><button class="stille-inst-btn" data-inst="SX" style="padding:.35rem .9rem;border-radius:20px;border:1.5px solid var(--copper);background:transparent;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--copper);transition:all .15s;">SX &ndash; Beziehung</button></div>
        <div id="stille-matrix-result" style="display:none;display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;"></div>
      </div>

      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <button id="stille-start" class="primary" style="min-width:140px;">\u25b6 Starten</button>
        <button id="stille-reset" class="ghost-link" style="display:none;">\u21ba Zur\u00fccksetzen</button>
      </div>

      <p style="margin-top:2.5rem;font-size:0.82rem;color:var(--ink-muted);max-width:340px;margin-left:auto;margin-right:auto;">
        Lege das Handy zur Seite. Ein Gong ert\u00f6nt am Anfang und am Ende.
      </p>

      <div style="margin:2.2rem auto 0;max-width:480px;text-align:left;">
        <p style="font-size:0.85rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gold);font-weight:700;margin:0 0 .35rem;text-align:center;">Bequem sitzen f\u00fcr die Stille-Praxis</p>
        <p style="font-size:0.8rem;color:var(--ink-muted);text-align:center;margin:0 0 1.1rem;line-height:1.5;">Drei bew\u00e4hrte Sitzhilfen \u2013 welche am besten passt, h\u00e4ngt von deiner Sitzgewohnheit und Beweglichkeit ab.</p>
        <div style="display:flex;flex-direction:column;gap:.9rem;">
          ${MEDITATIONS_SITZHILFEN.map(s => `
            <div style="background:var(--paper);border:1px solid var(--border);border-radius:12px;padding:1rem 1.1rem;">
              <p style="margin:0 0 .3rem;font-size:0.95rem;font-weight:700;color:var(--ink);">${s.name} <em style="font-weight:400;color:var(--muted);font-size:0.8rem;">\u00b7 ${s.subtitle}</em></p>
              <p style="margin:0 0 .7rem;font-size:0.85rem;line-height:1.55;color:var(--ink-muted);">${s.eignung}</p>
              ${AFFILIATE_LINKS.sitzhilfe[s.name] ? affiliateBoxHtml("sitzhilfe", s.name) : ""}
            </div>
          `).join("")}
        </div>
      </div>

      <div style="margin:2.2rem auto 0;max-width:480px;background:var(--paper);border-radius:14px;border:1px solid var(--border);padding:1.3rem 1.4rem;display:flex;gap:1rem;align-items:flex-start;">
        <img src="https://www.verlagshausrathmer.com/images/2026/03/WhatsApp-Image-2026-03-22-at-9.26.55-PM.jpeg" alt="Meta-Intelligenz \u2013 Das H\u00f6rbuch \u2013 Cover" style="width:64px;height:64px;border-radius:8px;object-fit:cover;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.15);">
        <div style="flex:1;min-width:0;">
          <p style="margin:0 0 .3rem;font-size:0.78rem;font-weight:700;color:var(--copper);text-transform:uppercase;letter-spacing:.06em;">Geschenk f\u00fcr Sie &middot; von Detlef Rathmer selbst gesprochen</p>
          <p style="margin:0 0 .6rem;font-size:0.92rem;line-height:1.55;color:var(--ink);">Der Geist besitzt eine besondere F\u00e4higkeit: die eigenen Gedanken bewusst zu beobachten &ndash; ganz still und entspannt. Weil Sie den Kompass erworben haben, schenken wir Ihnen das komplette erste Kapitel aus <em>Meta-Intelligenz</em> &ndash; 13 weitere Kapitel erwartet Sie im H\u00f6rbuch:</p>
          <audio controls preload="none" style="width:100%;max-width:320px;height:36px;" src="assets/meta-intelligenz-einfuehrung-komplett.mp3"></audio>
        </div>
      </div>

      <div style="margin:2.2rem auto 0;max-width:480px;text-align:left;">
        <p style="font-size:0.85rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gold);font-weight:700;margin:0 0 .35rem;text-align:center;">Achtsamkeits\u00fcbung: Der Ausatem</p>
        <p style="font-size:0.85rem;color:var(--ink-muted);margin:0 0 1rem;line-height:1.6;">Die meisten Achtsamkeits\u00fcbungen betonen die Einatmung \u2013 im Enneagramm steht sie stellvertretend f\u00fcr den Habenmodus: das Verlangen, etwas zu bekommen, je nach eigener Fixierung. Der Ausatem ist die andere Seite: das Geben statt Nehmen, das Loslassen statt Verlangen, das Ruhen statt Streben. \u201eEs irrt der Mensch, solang er strebt", hei\u00dft es bei Johann Wolfgang von Goethe im Prolog im Himmel aus Faust I. Diese \u00dcbung setzt genau dort an \u2013 nicht mit Willenskraft forciert, sondern durch blo\u00dfes Beobachten des Ausatmens wird eine Stille erreichbar, die den chronischen Einatmungsrhythmus unserer Zeit ausgleicht.</p>
        <div style="position:relative;width:100%;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#000;box-shadow:0 8px 24px rgba(0,0,0,0.18);">
          <iframe src="https://www.youtube.com/embed/LcLK3dPagZQ" title="Achtsamkeits\u00fcbung: Den Ausatem beobachten" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
        </div>
        <p style="font-size:0.82rem;color:var(--muted);margin-top:0.6rem;text-align:center;">\u00dcber 25 Minuten \u2013 eine ausf\u00fchrliche Anleitung von Detlef Rathmer zur Ausatem-Achtsamkeit.</p>
      </div>

      ${bookTip("meta-intelligenz", "Wie der Geist lernt, die eigenen Gedanken zu beobachten &ndash; elf Kapitel \u00fcber Bewusstsein, Abstand und innere Klarheit.", "Meta-Intelligenz")}
      ${bookTip("meta-intelligenz-das-hoerbuch", "Vom Autor selbst gesprochen: ein direkter Zugang zu mehr Klarheit durch das Verstehen der eigenen inneren Struktur.", "Meta-Intelligenz \u2013 Das H\u00f6rbuch")}
      ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Sieben spirituelle Lebenskunst-Schritte f\u00fcr den Alltag &ndash; der ideale Begleiter zur t\u00e4glichen Stille-Praxis.", "7 Wege zu Dir selbst \u2013 Lebenskunst f\u00fcr den Alltag")}
      ${bookTip("nichts-und-alles", "Stilles Buch \u00fcber das Schauen nach innen &ndash; Bewusstsein, Raum und innere Freiheit.", "Nichts und Alles")}
      ${bookTip("der-raum-hinter-allem", "Jenseits aller Muster: der stille Raum, der bleibt, wenn Identifikation nachl\u00e4sst &ndash; ein meditatives Werk \u00fcber Bewusstsein und Freiheit.", "Der Raum hinter allem")}

      <div style="margin-top:2.5rem;padding:1.2rem 1.4rem;background:var(--paper);border-radius:14px;border-left:3px solid var(--copper);max-width:480px;margin-left:auto;margin-right:auto;">
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:var(--copper);text-transform:uppercase;letter-spacing:0.09em;">Lieber mit Musik?</p>
        <p style="margin:0 0 0.9rem;font-size:0.95rem;line-height:1.65;color:var(--ink);">Wer in die absolute Stille eintauchen m\u00f6chte, findet sich selbst \u2014 in neun Minuten vollst\u00e4ndiger Stille, begleitet von einem Gong.</p>
        <p style="margin:0 0 0.9rem;font-size:0.95rem;line-height:1.65;color:var(--ink);">Wer lieber Klang als Br\u00fccke nutzt, dem stehen neun Alben mit Entspannungs- und Heilungsmusik zur Verf\u00fcgung \u2014 jedes fein auf einen Enneagrammtyp abgestimmt.</p>
        <div style="display:flex;gap:0.8rem;flex-wrap:wrap;">
          <button class="secondary" data-route="musik" style="font-size:0.9rem;">\ud83c\udfb5 Zur Entspannungs- und Heilungsmusik \u2192</button>
          <button class="secondary" data-route="solfeggio-frequenzen" style="font-size:0.9rem;">\ud83c\udfa7 Die 9 Solfeggio-Frequenzen \u2192</button>
        </div>
      </div>
    </section>
    ${relatedLinks([{route:"detlef-rathmer-jazz|dr-jazz",label:"Jazz-Alben von Detlef Rathmer"},{route:"musik",label:"Entspannungs- und Heilungsmusik"},{route:"detlef-rathmer-jazz|dr-spirituell",label:"Spirituelle Songs"}])}
  `);
}

function syntheseTierLaut(animal) {
  // Codes mit echten Cloudinary-Audiodateien (schrittweise erg\u00e4nzt)
  const TIER_CODES = {
    "adler":"se1","gans":"so1","schwarze mamba":"sx1","flusspferd":"se2",
    "golden retriever":"so2","kamel":"sx2","waschb\u00e4r":"se3","gepard":"so3",
    "pfau":"sx3","taube":"se4","g\u00fcrteltier":"so4","chihuahua":"sx4",
    "eule":"se5","oktopus":"so5","igel":"sx5","kaninchen":"se6","erdm\u00e4nnchen":"so6",
    "wolf":"sx6","gorilla":"se7","biber":"so7","schimpanse":"sx7",
    "orang-utan":"se8","l\u00f6we":"so8","krokodil":"sx8",
    "elefant":"se9","b\u00fcffel":"so9","faultier":"sx9"
  };
  const key = animal.toLowerCase().trim();
  const code = TIER_CODES[key];
  const BASE = "https://res.cloudinary.com/ymooybdl/video/upload/kompass/tier-sounds/";
  const SOUND_ID = {"sx1":"sx1b","se2":"se2b","se5":"se5b","so7":"so7b","sx7":"sx7b","se8":"se8b","sx8":"sx8b"};

  if (code) {
    const pid = SOUND_ID[code] || code;
    const audio = new Audio(`${BASE}${pid}.mp3`);
    audio.volume = 0.85;
    audio.play().catch(() => _syntheseFallback(animal));
    return;
  }
  _syntheseFallback(animal);
}

function _syntheseFallback(animal) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.7, ctx.currentTime);
    master.connect(ctx.destination);
    const t = ctx.currentTime;
    const SR = ctx.sampleRate;

    function osc(type, freq, amp, start, dur, freqEnd) {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = type; o.frequency.setValueAtTime(freq, start);
      if (freqEnd !== undefined) o.frequency.exponentialRampToValueAtTime(freqEnd, start + dur);
      g.gain.setValueAtTime(0, start);
      g.gain.linearRampToValueAtTime(amp, start + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      o.connect(g); g.connect(master); o.start(start); o.stop(start + dur + 0.05);
    }
    function noiseBurst(amp, start, dur, loFreq, hiFreq) {
      const n = Math.ceil(SR * dur);
      const buf = ctx.createBuffer(1, n, SR);
      const d = buf.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 1.5);
      const src = ctx.createBufferSource(); src.buffer = buf;
      const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = loFreq;
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = hiFreq;
      const g = ctx.createGain(); g.gain.value = amp;
      src.connect(hp); hp.connect(lp); lp.connect(g); g.connect(master); src.start(start);
    }
    function thump(amp, start, freq) {
      const buf = ctx.createBuffer(1, Math.ceil(SR * 0.3), SR);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
      const src = ctx.createBufferSource(); src.buffer = buf;
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = freq;
      const g = ctx.createGain(); g.gain.value = amp;
      src.connect(lp); lp.connect(g); g.connect(master); src.start(start);
    }

    const a = animal.toLowerCase()
      .replace(/\u00fc/g,"u").replace(/\u00f6/g,"o").replace(/\u00e4/g,"a").replace(/\u00df/g,"ss");

    if (a.includes("schwarze mamba")||a.includes("mamba")||a.includes("schlange"))
      noiseBurst(0.8,t,1.8,2000,12000);
    else if (a.includes("kamel"))
      { osc("sawtooth",180,0.6,t,1.5,120); for(let i=0;i<12;i++) osc("sine",180+Math.random()*40,0.15,t+i*0.12,0.1); }
    else if (a.includes("gepard")||a.includes("cheetah"))
      [0,0.25,0.5].forEach(d => osc("sine",1200,0.5,t+d,0.18,900));
    else if (a.includes("gurteltier")||a.includes("armadillo"))
      { for(let i=0;i<6;i++) noiseBurst(0.4,t+i*0.1,0.05,500,3000); osc("sine",1800,0.3,t+0.7,0.25,2200); }
    else if (a.includes("chihuahua"))
      [0,0.35,0.7].forEach(d => { osc("sawtooth",1800,0.5,t+d,0.15,1200); noiseBurst(0.4,t+d,0.12,800,4000); });
    else if (a.includes("oktopus"))
      { for(let i=0;i<12;i++) osc("sine",300+Math.random()*400,0.15,t+Math.random()*2,0.12); noiseBurst(0.2,t,2.5,100,600); }
    else if (a.includes("kaninchen")||a.includes("rabbit"))
      [0,0.3,0.6].forEach(d => thump(0.8,t+d,180));
    else if (a.includes("erdmannchen")||a.includes("meerkat"))
      for(let i=0;i<6;i++) osc("square",1400+i*60,0.4,t+i*0.15,0.12);
    else if (a.includes("gorilla"))
      { [0,0.18,0.36,0.55,0.75].forEach(d => thump(1.0,t+d,250)); osc("sawtooth",100,0.4,t,2.0,80); }
    else if (a.includes("biber")||a.includes("beaver"))
      { thump(1.0,t,300); noiseBurst(0.6,t,0.6,200,2000); }
    else if (a.includes("orang"))
      { osc("square",2200,0.5,t,0.3,1800); osc("sawtooth",120,0.4,t+0.5,1.5,90); noiseBurst(0.3,t+0.5,1.2,80,400); }
    else if (a.includes("lowe")||a.includes("lion"))
      { noiseBurst(0.9,t,2.5,60,600); osc("sawtooth",90,0.7,t,2.0,60); }
    else if (a.includes("krokodil")||a.includes("croc"))
      { noiseBurst(0.6,t,2.0,80,600); osc("sawtooth",70,0.5,t,2.0,55); }
    else if (a.includes("elefant")||a.includes("elephant"))
      { osc("sawtooth",300,0.8,t,0.6,1800); noiseBurst(0.4,t+0.4,0.5,500,5000); }
    else if (a.includes("buffel")||a.includes("buffalo")||a.includes("bison"))
      { noiseBurst(0.7,t,0.6,150,1000); osc("sawtooth",140,0.5,t,0.8,100); }
    else if (a.includes("faultier")||a.includes("sloth"))
      osc("sine",700,0.5,t,2.5,400);
    else
      osc("sine",800,0.5,t,0.5,600);

    setTimeout(() => { try { ctx.close(); } catch(e) {} }, 5000);
  } catch(e) {}
}


function _stilleInit() {
  let DAUER = 9 * 60;
  let ENDLOS = false;
  const arc = document.getElementById("stille-arc");
  const zeitEl = document.getElementById("stille-zeit");
  const statusEl = document.getElementById("stille-status");
  const startBtn = document.getElementById("stille-start");
  const resetBtn = document.getElementById("stille-reset");
  if (!arc || !startBtn) return;

  // Dauer-Buttons
  document.querySelectorAll(".stille-dauer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (laedt) return; // kein Wechsel w\u00e4hrend Sitzung
      document.querySelectorAll(".stille-dauer-btn").forEach(b => {
        b.style.borderColor = "var(--border)";
        b.style.background = "transparent";
        b.style.color = "var(--ink)";
        b.style.fontWeight = "normal";
      });
      btn.style.borderColor = "var(--copper)";
      btn.style.background = "var(--paper)";
      btn.style.color = "var(--copper)";
      btn.style.fontWeight = "700";
      const min = parseInt(btn.dataset.min);
      ENDLOS = min === 0;
      DAUER = ENDLOS ? 0 : min * 60;
      verbleibend = DAUER;
      if (ENDLOS) {
        zeitEl.textContent = "\u221e";
        arc.style.strokeDashoffset = "0";
      } else {
        aktualisiere();
      }
    });
  });

  const UMFANG = 2 * Math.PI * 136;
  let verbleibend = DAUER;
  let interval = null;
  let laedt = false;
  let audioCtx = null;

  function gong(freq = 160) {
    try {
      if (!audioCtx || audioCtx.state === "closed") {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      const ctx = audioCtx;
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.75, ctx.currentTime);
      master.connect(ctx.destination);

      // Klangschale: sanft anschwellend, langer Ausklang
      [
        { ratio: 1.0,   amp: 0.65, decay: 22, attack: 0.012 },
        { ratio: 2.756, amp: 0.20, decay: 14, attack: 0.008 },
        { ratio: 5.404, amp: 0.08, decay:  8, attack: 0.005 },
        { ratio: 8.933, amp: 0.03, decay:  4, attack: 0.003 },
      ].forEach(({ ratio, amp, decay, attack }) => {
        const osc = ctx.createOscillator();
        const g   = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq * ratio;
        g.gain.setValueAtTime(0.0001, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(amp, ctx.currentTime + attack);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + decay);
        osc.connect(g);
        g.connect(master);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + decay + 0.1);
      });
    } catch(e) {}
  }

  function aktualisiere() {
    const mm = String(Math.floor(verbleibend / 60)).padStart(1, "0");
    const ss = String(verbleibend % 60).padStart(2, "0");
    zeitEl.textContent = mm + ":" + ss;
    arc.style.strokeDashoffset = UMFANG * (1 - (DAUER - verbleibend) / DAUER);
  }

  function tick() {
    if (!ENDLOS) {
      verbleibend--;
      aktualisiere();
      if (verbleibend <= 0) {
        clearInterval(interval); interval = null;
        stopKlang();
        gong(160);
        statusEl.textContent = "Willkommen zur\u00fcck.";
        startBtn.textContent = "\u2713 Fertig";
        startBtn.disabled = true;
      }
    }
  }

  startBtn.addEventListener("click", () => {
    if (startBtn.disabled) return;
    if (!laedt) {
      laedt = true;
      if (!audioCtx || audioCtx.state === "closed")
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();
      gong(160);
      resetBtn.style.display = "";
    }
    if (interval) {
      clearInterval(interval); interval = null;
      stopKlang();
      startBtn.textContent = "\u25b6 Weiter";
      statusEl.textContent = "pausiert";
    } else {
      interval = setInterval(tick, 1000);
      if (laedt) starteKlang(gewaehlterKlang);
      startBtn.textContent = "\u23f8 Pause";
      statusEl.textContent = "in der Stille \u2026";
    }
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(interval); interval = null; laedt = false;
    stopKlang();
    verbleibend = DAUER;
    if (ENDLOS) { zeitEl.textContent = "\u221e"; arc.style.strokeDashoffset = "0"; } else { aktualisiere(); }
    statusEl.textContent = "bereit";
    startBtn.id = "stille-start";
    startBtn.textContent = "\u25b6 Starten";
    startBtn.disabled = false;
    resetBtn.style.display = "none";
  });

  // Klang-Selektor
  let gewaehlterKlang = "stille";
  let klangStop = null;
  const REAL_SOUNDS_ALL = new Set(["regen","meer","wasserfall","wind","gewitter","sommerregen","wald","voegel","bach","wiese","kuckuck","blizzard","trommel","eule","white","pink","brown","feuer","hoehle","chimes","zug","katze","wal","delfin","bienen","wolf","seehund","aquarium","gewaesser","herzschlag","regenwald","nachtmeer","tropfen","zikaden","savanne","unterwasser","klangschale","om","morgenkonzert","polareis","wuestensturm","elefanten","mangroven","nordlichter","japanischer-garten","dschungelregen","tibet","cafe","standuhr","bibliothek","kinder","schreibmaschine","theta","delta","alpha","gamma","brandung","hagel","kornfeld","kathedrale","regenamfenster","froesche","herbstlaub","vinyl"]);
  const LOCAL_SOUNDS = new Set(["tibet","dschungelregen","elefanten","japanischer-garten","mangroven","nordlichter","wuestensturm"]);
  function klangCdnUrl(id) {
    if (LOCAL_SOUNDS.has(id)) return "sounds/" + id + ".mp3";
    const v2 = ["alpha","theta","delta","gamma","standuhr","bibliothek","kinder","brandung","froesche"];
    const ver = v2.includes(id) ? "?v=3" : "";
    return "https://res.cloudinary.com/ymooybdl/video/upload/kompass/stille-sounds-128k/" + id + ".mp3" + ver;
  }
  const klangFetchCache = {}; // id \u2192 Promise<ArrayBuffer>, starts on klang-button click

  function stopKlang() {
    if (klangStop) { try { klangStop(); } catch(e) {} klangStop = null; }
  }

  function starteKlang(id) {
    stopKlang();
    if (id === "stille") return;

    // Real recordings \u2014 played via HTML Audio (works with AirPlay/HomePod on iOS)
    const REAL_SOUNDS = new Set(["regen","meer","wasserfall","wind","gewitter","sommerregen","wald","voegel","bach","wiese","kuckuck","blizzard","trommel","eule","white","pink","brown","feuer","hoehle","chimes","zug","katze","wal","delfin","bienen","wolf","seehund","aquarium","gewaesser","herzschlag","regenwald","nachtmeer","tropfen","zikaden","savanne","unterwasser","klangschale","om","morgenkonzert","polareis","wuestensturm","elefanten","mangroven","nordlichter","japanischer-garten","dschungelregen","tibet","cafe","standuhr","bibliothek","kinder","schreibmaschine","theta","delta","alpha","gamma","brandung","hagel","kornfeld","kathedrale","regenamfenster","froesche","herbstlaub","vinyl"]);
    if (REAL_SOUNDS.has(id)) {
      const audio = new Audio(klangCdnUrl(id));
      audio.loop = true;
      audio.volume = 0.7;
      audio.play().catch(() => {});
      // Media Session API \u2192 Hintergrund-Audio + Sperrbildschirm-Steuerung auf iOS
      if (navigator.mediaSession) {
        const KLANG_LABEL = {
          regen:"Regen", meer:"Meeresrauschen", wasserfall:"Wasserfall", wind:"Wind",
          gewitter:"Gewitter", sommerregen:"Sommerregen", wald:"Wald", voegel:"V\u00f6gel",
          bach:"Bach", wiese:"Wiese", kuckuck:"Kuckuck", blizzard:"Blizzard",
          trommel:"Trommel", eule:"Eule", white:"Wei\u00dfes Rauschen", pink:"Pinkes Rauschen",
          brown:"Braunes Rauschen", feuer:"Feuer", hoehle:"H\u00f6hle", chimes:"Klangspiele",
          zug:"Zug", katze:"Katze", wal:"Wal", delfin:"Delfin", bienen:"Bienen",
          wolf:"Wolf", seehund:"Seehund", aquarium:"Aquarium", gewaesser:"Gew\u00e4sser",
          herzschlag:"Herzschlag", regenwald:"Regenwald", nachtmeer:"Nachtmeer",
          tropfen:"Tropfen", zikaden:"Zikaden", savanne:"Savanne", unterwasser:"Unterwasser",
          klangschale:"Klangschale", om:"Om", morgenkonzert:"Morgenkonzert",
          polareis:"Polareis", wuestensturm:"W\u00fcstensturm", elefanten:"Elefanten",
          mangroven:"Mangroven", nordlichter:"Nordlichter", "japanischer-garten":"Japan. Garten",
          dschungelregen:"Dschungelregen", tibet:"Tibet"
        };
        navigator.mediaSession.metadata = new MediaMetadata({
          title: KLANG_LABEL[id] || id,
          artist: "Enneagramm-Heilungskompass",
          album: "Stille & Klang",
          artwork: [{ src: "./assets/grundformel-rathmer-enneagramm.jpg", sizes: "512x512", type: "image/jpeg" }]
        });
        navigator.mediaSession.playbackState = "playing";
        navigator.mediaSession.setActionHandler("pause", () => { audio.pause(); navigator.mediaSession.playbackState = "paused"; });
        navigator.mediaSession.setActionHandler("play",  () => { audio.play().catch(() => {}); navigator.mediaSession.playbackState = "playing"; });
        navigator.mediaSession.setActionHandler("stop",  () => { audio.pause(); audio.src = ""; navigator.mediaSession.playbackState = "none"; });
      }
      klangStop = () => {
        audio.pause(); audio.src = "";
        if (navigator.mediaSession) { navigator.mediaSession.playbackState = "none"; try { navigator.mediaSession.setActionHandler("pause", null); navigator.mediaSession.setActionHandler("play", null); navigator.mediaSession.setActionHandler("stop", null); } catch(e) {} }
      };
      return;
    }

    if (!audioCtx) return;
    const ctx = audioCtx;
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.18, ctx.currentTime);
    master.connect(ctx.destination);
    const nodes = [];
    let stopped = false;

    function noiseBuffer(seconds, gen) {
      const n = Math.ceil(ctx.sampleRate * seconds);
      const buf = ctx.createBuffer(1, n, ctx.sampleRate);
      const d = buf.getChannelData(0);
      gen(d, n);
      return buf;
    }

    function loopNoise(buf, gainVal = 1) {
      const src = ctx.createBufferSource();
      src.buffer = buf; src.loop = true;
      const g = ctx.createGain(); g.gain.value = gainVal;
      src.connect(g); g.connect(master);
      src.start(); nodes.push(src, g);
      return src;
    }

    function bpf(freq, Q) {
      const f = ctx.createBiquadFilter();
      f.type = "bandpass"; f.frequency.value = freq; f.Q.value = Q;
      nodes.push(f); return f;
    }
    function lpf(freq) {
      const f = ctx.createBiquadFilter();
      f.type = "lowpass"; f.frequency.value = freq;
      nodes.push(f); return f;
    }
    function hpf(freq) {
      const f = ctx.createBiquadFilter();
      f.type = "highpass"; f.frequency.value = freq;
      nodes.push(f); return f;
    }

    const SR = ctx.sampleRate;
    const DUR = 3;

    // --- Rausch-Buffer-Generatoren ---
    const whiteBuf = noiseBuffer(DUR, (d,n) => { for(let i=0;i<n;i++) d[i]=Math.random()*2-1; });
    let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6w=0;
    const pinkBuf = noiseBuffer(DUR, (d,n) => {
      for(let i=0;i<n;i++){const w=Math.random()*2-1;b0=0.99886*b0+w*0.0555179;b1=0.99332*b1+w*0.0750759;b2=0.969*b2+w*0.153852;b3=0.8665*b3+w*0.3104856;b4=0.55*b4+w*0.5329522;b5=-0.7616*b5-w*0.016898;d[i]=(b0+b1+b2+b3+b4+b5+b6w+w*0.5362)*0.11;b6w=w*0.115926;}
    });
    let last=0;
    const brownBuf = noiseBuffer(DUR, (d,n) => {
      for(let i=0;i<n;i++){const w=Math.random()*2-1;d[i]=(last+0.02*w)/1.02;last=d[i];d[i]*=3.5;}
    });

    if (id === "white") {
      const src = ctx.createBufferSource(); src.buffer = whiteBuf; src.loop = true;
      src.connect(master); src.start(); nodes.push(src);

    } else if (id === "pink") {
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      src.connect(master); src.start(); nodes.push(src);

    } else if (id === "brown") {
      master.gain.setValueAtTime(0.28, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = brownBuf; src.loop = true;
      src.connect(master); src.start(); nodes.push(src);

    } else if (id === "regen") {
      // Regen = gefiltertes Wei\u00dfrauschen (2\u20138 kHz) + leichte LFO-Modulation
      master.gain.setValueAtTime(0.22, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = whiteBuf; src.loop = true;
      const hp = hpf(1800); const lp2 = lpf(9000);
      src.connect(hp); hp.connect(lp2); lp2.connect(master); src.start(); nodes.push(src);
      // Einzelne Tropfen
      function drop() {
        if (stopped) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = 1200 + Math.random()*800;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.04, ctx.currentTime+0.005);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+0.08);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime+0.09);
        setTimeout(drop, 80 + Math.random()*300);
      }
      drop();

    } else if (id === "meer") {
      // Meer = Brown + LFO (Wellenrhythmus)
      master.gain.setValueAtTime(0.3, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = brownBuf; src.loop = true;
      const lp3 = lpf(600);
      src.connect(lp3); lp3.connect(master); src.start(); nodes.push(src);
      const lfo = ctx.createOscillator(); const lfoG = ctx.createGain();
      lfo.frequency.value = 0.12; lfoG.gain.value = 0.18;
      lfo.connect(lfoG); lfoG.connect(master.gain); lfo.start(); nodes.push(lfo, lfoG);

    } else if (id === "wasserfall") {
      // Wasserfall = breitbandiges Rauschen 200\u20134000 Hz, konstant
      master.gain.setValueAtTime(0.25, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = whiteBuf; src.loop = true;
      const hp2 = hpf(200); const lp4 = lpf(3500);
      src.connect(hp2); hp2.connect(lp4); lp4.connect(master); src.start(); nodes.push(src);

    } else if (id === "wind") {
      // Wind = Pink Noise mit sehr langsamer LFO-Amplitude
      master.gain.setValueAtTime(0.9, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      const lp5 = lpf(1200);
      src.connect(lp5); lp5.connect(master); src.start(); nodes.push(src);
      const lfo2 = ctx.createOscillator(); const lfoG2 = ctx.createGain();
      lfo2.frequency.value = 0.05; lfoG2.gain.value = 0.4;
      lfo2.connect(lfoG2); lfoG2.connect(master.gain); lfo2.start(); nodes.push(lfo2, lfoG2);

    } else if (id === "feuer") {
      // Kaminfeuer = Brown Noise + hochfrequente Knister-Transienten
      master.gain.setValueAtTime(0.2, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = brownBuf; src.loop = true;
      const lp6 = lpf(400);
      src.connect(lp6); lp6.connect(master); src.start(); nodes.push(src);
      function knistern() {
        if (stopped) return;
        const nb = ctx.createBuffer(1, Math.ceil(SR*0.04), SR);
        const nd = nb.getChannelData(0);
        for(let i=0;i<nd.length;i++) nd[i]=(Math.random()*2-1)*Math.pow(1-i/nd.length,3)*0.6;
        const ns = ctx.createBufferSource(); ns.buffer = nb;
        const ng = ctx.createGain(); ng.gain.value = 0.35;
        ns.connect(ng); ng.connect(master); ns.start();
        setTimeout(knistern, 80 + Math.random()*500);
      }
      knistern();

    } else if (id === "gewitter") {
      // Gewitter = Regen + Donner mit h\u00f6rbarem Knall + langem Rumpeln
      master.gain.setValueAtTime(0.22, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = whiteBuf; src.loop = true;
      const hp3 = hpf(1200); const lp7 = lpf(7000);
      src.connect(hp3); hp3.connect(lp7); lp7.connect(master); src.start(); nodes.push(src);
      function donner() {
        if (stopped) return;
        const dur = 3.5 + Math.random() * 2;       // 3.5\u20135.5 s Donnerrolle
        const close = Math.random() < 0.35;          // 35% nah, 65% fern
        const dlen = Math.ceil(SR * dur);
        const db = ctx.createBuffer(1, dlen, SR);
        const dd = db.getChannelData(0);
        // Envelope: kurzer Anstieg, dann langsames Ausklingen
        for (let i = 0; i < dlen; i++) {
          const t = i / SR;
          const attack = Math.min(1, t / 0.06);              // 60 ms Anstieg
          const decay  = Math.pow(1 - t / dur, close ? 1.8 : 2.5);
          dd[i] = (Math.random() * 2 - 1) * attack * decay;
        }
        const ds = ctx.createBufferSource(); ds.buffer = db;
        // Rumpeln: Bandpass um 180-350 Hz \u2014 auf Handy-Lautsprechern h\u00f6rbar
        const bp1 = ctx.createBiquadFilter(); bp1.type = "bandpass";
        bp1.frequency.value = close ? 220 : 160; bp1.Q.value = 0.7;
        const lp9 = ctx.createBiquadFilter(); lp9.type = "lowpass"; lp9.frequency.value = 500;
        const dg  = ctx.createGain(); dg.gain.value = close ? 1.1 : 0.75;
        ds.connect(bp1); bp1.connect(lp9); lp9.connect(dg); dg.connect(master); ds.start();
        // Kurzer hochfrequenter Knall am Anfang (nur bei nahem Donner)
        if (close) {
          const cb = ctx.createBuffer(1, Math.ceil(SR * 0.25), SR);
          const cd = cb.getChannelData(0);
          for (let i = 0; i < cd.length; i++) {
            cd[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / cd.length, 4);
          }
          const cs = ctx.createBufferSource(); cs.buffer = cb;
          const chp = ctx.createBiquadFilter(); chp.type = "highpass"; chp.frequency.value = 600;
          const cg  = ctx.createGain(); cg.gain.value = 0.5;
          cs.connect(chp); chp.connect(cg); cg.connect(master); cs.start();
        }
        // N\u00e4chster Donner in 7\u201322 s
        setTimeout(donner, 7000 + Math.random() * 15000);
      }
      setTimeout(donner, 2000 + Math.random() * 5000);

    } else if (id === "wald") {
      // Wald = leises Pink-Rauschen + Vogelstimmen (einfache Sinuston-Chirps)
      master.gain.setValueAtTime(0.08, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      const lp8 = lpf(1200);
      src.connect(lp8); lp8.connect(master); src.start(); nodes.push(src);
      function vogel() {
        if (stopped) return;
        const freq = 2000 + Math.random()*2000;
        const chirps = 2 + Math.floor(Math.random()*4);
        for(let c=0;c<chirps;c++){
          const t = ctx.currentTime + c*0.12;
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sine"; o.frequency.setValueAtTime(freq, t);
          o.frequency.linearRampToValueAtTime(freq*1.15, t+0.06);
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.12, t+0.02);
          g.gain.exponentialRampToValueAtTime(0.0001, t+0.1);
          o.connect(g); g.connect(master); o.start(t); o.stop(t+0.11);
        }
        setTimeout(vogel, 2000 + Math.random()*6000);
      }
      vogel();

    } else if (id === "hoehle") {
      // H\u00f6hle = sehr tiefes Dr\u00f6hnen + seltene Wassertropfen
      master.gain.setValueAtTime(0.08, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = brownBuf; src.loop = true;
      const lp9 = lpf(120);
      src.connect(lp9); lp9.connect(master); src.start(); nodes.push(src);
      function tropfen() {
        if (stopped) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = 800 + Math.random()*400;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.18, ctx.currentTime+0.005);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+0.35);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime+0.36);
        setTimeout(tropfen, 1500 + Math.random()*4000);
      }
      tropfen();

    } else if (id === "sommerregen") {
      // Sanfter Sommerregen auf Bl\u00e4tterdach: dichtes Rauschen + vereinzelte Tropfen
      master.gain.setValueAtTime(0.18, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      const hp = hpf(800); const lp = lpf(5000);
      src.connect(hp); hp.connect(lp); lp.connect(master); src.start(); nodes.push(src);
      // Einzelne Tropfen auf Blatt: h\u00f6her und heller als Regen
      function blattTropfen() {
        if (stopped) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = 1200 + Math.random()*600;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.003);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 0.2);
        setTimeout(blattTropfen, 80 + Math.random()*300);
      }
      blattTropfen();

    } else if (id === "voegel") {
      // Vogelgezwitscher am Morgen: helle Chirps verschiedener Tonlagen
      master.gain.setValueAtTime(0.07, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      const lp = lpf(600); const g0 = ctx.createGain(); g0.gain.value = 0.3;
      src.connect(lp); lp.connect(g0); g0.connect(master); src.start(); nodes.push(src);
      const vogelTypen = [
        {freq: 2800, steps: 4, gap: 60},   // hohe Drossel
        {freq: 1800, steps: 3, gap: 90},   // Amsel
        {freq: 3400, steps: 6, gap: 45},   // Meise
      ];
      function vogelRuf() {
        if (stopped) return;
        const typ = vogelTypen[Math.floor(Math.random() * vogelTypen.length)];
        const steps = typ.steps + Math.floor(Math.random() * 3);
        let t = ctx.currentTime;
        for (let i = 0; i < steps; i++) {
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sine";
          const f = typ.freq * (0.9 + Math.random() * 0.3);
          o.frequency.setValueAtTime(f, t);
          o.frequency.linearRampToValueAtTime(f * (1 + 0.15 * (Math.random() - 0.5)), t + 0.04);
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.22, t + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
          o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.08);
          t += typ.gap / 1000;
        }
        setTimeout(vogelRuf, 1200 + Math.random() * 4000);
      }
      vogelRuf();
      setTimeout(vogelRuf, 600 + Math.random() * 1500);

    } else if (id === "bach") {
      // Flie\u00dfender Bach: unregelm\u00e4\u00dfiges Pl\u00e4tschern mit Turbulenzen
      master.gain.setValueAtTime(0.15, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = whiteBuf; src.loop = true;
      const bp = ctx.createBiquadFilter(); bp.type = "bandpass";
      bp.frequency.value = 800; bp.Q.value = 0.5;
      const lp = lpf(3000);
      src.connect(bp); bp.connect(lp); lp.connect(master); src.start(); nodes.push(src);
      // LFO f\u00fcr Str\u00f6mungsschwankungen
      const lfo = ctx.createOscillator(); const lfoG = ctx.createGain();
      lfo.frequency.value = 0.3 + Math.random() * 0.3;
      lfoG.gain.value = 200;
      lfo.connect(lfoG); lfoG.connect(bp.frequency); lfo.start(); nodes.push(lfo);
      // Einzelne Platscher
      function platsch() {
        if (stopped) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = 400 + Math.random() * 500;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.1 + Math.random() * 0.08, ctx.currentTime + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 0.14);
        setTimeout(platsch, 120 + Math.random() * 400);
      }
      platsch();

    } else if (id === "wiese") {
      // Sommerwiese: Grillen + Zikaden
      master.gain.setValueAtTime(0.12, ctx.currentTime);
      // Grille 1: ~4000 Hz rhythmisches Zirpen
      function grille(baseFreq, intervalMs, gain) {
        function zirp() {
          if (stopped) return;
          const chirps = 3 + Math.floor(Math.random() * 3);
          let t = ctx.currentTime;
          for (let i = 0; i < chirps; i++) {
            const o = ctx.createOscillator(); const g = ctx.createGain();
            o.type = "sine"; o.frequency.value = baseFreq * (0.98 + Math.random() * 0.04);
            g.gain.setValueAtTime(0, t);
            g.gain.linearRampToValueAtTime(gain, t + 0.005);
            g.gain.setValueAtTime(gain, t + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
            o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.05);
            t += 0.05;
          }
          setTimeout(zirp, intervalMs + Math.random() * intervalMs * 0.3);
        }
        setTimeout(zirp, Math.random() * intervalMs);
      }
      grille(4200, 400, 0.18);   // helle Grille
      grille(3100, 280, 0.12);   // tiefere Grille
      grille(5800, 180, 0.08);   // Zikade (h\u00f6her, schneller)
      // leises Hintergrundrauschen (Bl\u00e4tter, Wind)
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      const lp = lpf(800); const gBg = ctx.createGain(); gBg.gain.value = 0.04;
      src.connect(lp); lp.connect(gBg); gBg.connect(master); src.start(); nodes.push(src);

    } else if (id === "blizzard") {
      // Blizzard von drinnen: tiefes Heulen + Fensterwummern
      master.gain.setValueAtTime(0.2, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = brownBuf; src.loop = true;
      const lp = lpf(300); src.connect(lp); lp.connect(master); src.start(); nodes.push(src);
      // Heulton: langsamer LFO auf Bandpass
      const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 180; bp.Q.value = 3;
      const src2 = ctx.createBufferSource(); src2.buffer = whiteBuf; src2.loop = true;
      const gWind = ctx.createGain(); gWind.gain.value = 0.15;
      const lfo = ctx.createOscillator(); const lfoG = ctx.createGain();
      lfo.type = "sine"; lfo.frequency.value = 0.07; lfoG.gain.value = 90;
      lfo.connect(lfoG); lfoG.connect(bp.frequency);
      src2.connect(bp); bp.connect(gWind); gWind.connect(master);
      src2.start(); lfo.start(); nodes.push(src2, lfo);
      // Gelegentliches Fensterwummern
      function wummern() {
        if (stopped) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = 55 + Math.random() * 30;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.2);
        g.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 1.3);
        setTimeout(wummern, 4000 + Math.random() * 8000);
      }
      setTimeout(wummern, 2000 + Math.random() * 3000);

    } else if (id === "trommel") {
      // Schamanische Trommeln: langsamer Herzschlag-Rhythmus ~60 BPM
      master.gain.setValueAtTime(0.5, ctx.currentTime);
      const bpm = 58 + Math.random() * 4;
      const beat = 60 / bpm;
      function schlag(t, isAkzent) {
        // Tiefes Trommelfell: Sinus mit schnellem Pitch-Abfall
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(isAkzent ? 120 : 90, t);
        o.frequency.exponentialRampToValueAtTime(30, t + 0.18);
        g.gain.setValueAtTime(isAkzent ? 1.0 : 0.7, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
        o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.42);
        // Oberton (Fell-Klang)
        const o2 = ctx.createOscillator(); const g2 = ctx.createGain();
        o2.type = "triangle"; o2.frequency.value = isAkzent ? 220 : 160;
        g2.gain.setValueAtTime(isAkzent ? 0.3 : 0.2, t);
        g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
        o2.connect(g2); g2.connect(master); o2.start(t); o2.stop(t + 0.16);
      }
      let nextBeat = ctx.currentTime + 0.1;
      let beatCount = 0;
      function takt() {
        if (stopped) return;
        const now = ctx.currentTime;
        while (nextBeat < now + 0.3) {
          schlag(nextBeat, beatCount % 4 === 0);
          beatCount++;
          nextBeat += beat;
        }
        setTimeout(takt, 100);
      }
      takt();

    } else if (id === "chimes") {
      // Windspiele: helle zuf\u00e4llige T\u00f6ne in pentatonischer Skala
      master.gain.setValueAtTime(0.35, ctx.currentTime);
      const pentatonik = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51];
      // Leiser Windhauch
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      const lp = lpf(600); const gW = ctx.createGain(); gW.gain.value = 0.04;
      src.connect(lp); lp.connect(gW); gW.connect(master); src.start(); nodes.push(src);
      function chime() {
        if (stopped) return;
        const freq = pentatonik[Math.floor(Math.random() * pentatonik.length)];
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = freq;
        const dur = 1.2 + Math.random() * 1.5;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.35 + Math.random() * 0.2, ctx.currentTime + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + dur + 0.05);
        // Manchmal zwei T\u00f6ne gleichzeitig
        if (Math.random() < 0.3) {
          const freq2 = pentatonik[Math.floor(Math.random() * pentatonik.length)];
          const o2 = ctx.createOscillator(); const g2 = ctx.createGain();
          o2.type = "sine"; o2.frequency.value = freq2;
          g2.gain.setValueAtTime(0, ctx.currentTime + 0.05);
          g2.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.07);
          g2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
          o2.connect(g2); g2.connect(master); o2.start(ctx.currentTime + 0.05); o2.stop(ctx.currentTime + dur + 0.05);
        }
        setTimeout(chime, 600 + Math.random() * 2500);
      }
      chime();
      setTimeout(chime, 300 + Math.random() * 800);

    } else if (id === "kosmos") {
      // Kosmische Pads: langsam modulierte Sinus-Layers
      master.gain.setValueAtTime(0.3, ctx.currentTime);
      const freqs = [55, 82.4, 110, 146.8, 164.8];
      freqs.forEach((f, i) => {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = i % 2 === 0 ? "sine" : "triangle";
        o.frequency.value = f;
        // Sehr langsames Vibrato
        const lfo = ctx.createOscillator(); const lfoG = ctx.createGain();
        lfo.frequency.value = 0.04 + i * 0.01; lfoG.gain.value = f * 0.005;
        lfo.connect(lfoG); lfoG.connect(o.frequency);
        // Langsamer Gain-LFO (atmen)
        const gLfo = ctx.createOscillator(); const gLfoG = ctx.createGain();
        gLfo.frequency.value = 0.06 + i * 0.013; gLfoG.gain.value = 0.03;
        const baseGain = 0.06 - i * 0.007;
        g.gain.value = Math.max(0.01, baseGain);
        gLfo.connect(gLfoG); gLfoG.connect(g.gain);
        o.connect(g); g.connect(master);
        o.start(); lfo.start(); gLfo.start();
        nodes.push(o, lfo, gLfo);
      });

    } else if (id === "cafe") {
      // Caf\u00e9-Atmosph\u00e4re: mehrere Gespr\u00e4chskan\u00e4le + Kaffeemaschine + Tassen
      master.gain.setValueAtTime(0.22, ctx.currentTime);
      // 5 unabh\u00e4ngige Gespr\u00e4chskan\u00e4le mit Sprechpausen
      const voiceFreqs = [220, 340, 480, 620, 800];
      voiceFreqs.forEach((freq, i) => {
        function sprechBurst() {
          if (stopped) return;
          const dur = 0.4 + Math.random() * 1.8;
          const pause = 0.6 + Math.random() * 3.0;
          const vol = 0.03 + Math.random() * 0.04;
          const src2 = ctx.createBufferSource(); src2.buffer = pinkBuf; src2.loop = true;
          const bp2 = ctx.createBiquadFilter(); bp2.type = "bandpass";
          bp2.frequency.value = freq + (Math.random() - 0.5) * 80;
          bp2.Q.value = 3 + Math.random() * 3;
          const lp2 = ctx.createBiquadFilter(); lp2.type = "lowpass"; lp2.frequency.value = 3500;
          const gv = ctx.createGain(); gv.gain.setValueAtTime(0, ctx.currentTime);
          gv.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.06);
          gv.gain.setValueAtTime(vol, ctx.currentTime + dur - 0.08);
          gv.gain.linearRampToValueAtTime(0, ctx.currentTime + dur);
          src2.connect(bp2); bp2.connect(lp2); lp2.connect(gv); gv.connect(master);
          src2.start(); src2.stop(ctx.currentTime + dur + 0.05);
          setTimeout(sprechBurst, (dur + pause) * 1000);
        }
        setTimeout(sprechBurst, i * 400 + Math.random() * 800);
      });
      // Leise Raumakustik-Basis
      const room = ctx.createBufferSource(); room.buffer = pinkBuf; room.loop = true;
      const roomBp = ctx.createBiquadFilter(); roomBp.type = "bandpass";
      roomBp.frequency.value = 700; roomBp.Q.value = 0.3;
      const roomG = ctx.createGain(); roomG.gain.value = 0.015;
      room.connect(roomBp); roomBp.connect(roomG); roomG.connect(master); room.start();
      nodes.push(room);
      // Kaffeemaschine: Dampf-Zisch alle 20-45s
      function kaffeeMaschine() {
        if (stopped) return;
        const dur = 1.2 + Math.random() * 0.8;
        const src3 = ctx.createBufferSource(); src3.buffer = whiteBuf; src3.loop = true;
        const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 3000;
        const gkm = ctx.createGain(); gkm.gain.setValueAtTime(0, ctx.currentTime);
        gkm.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.1);
        gkm.gain.setValueAtTime(0.06, ctx.currentTime + dur - 0.15);
        gkm.gain.linearRampToValueAtTime(0, ctx.currentTime + dur);
        src3.connect(hp); hp.connect(gkm); gkm.connect(master);
        src3.start(); src3.stop(ctx.currentTime + dur + 0.1);
        setTimeout(kaffeeMaschine, 20000 + Math.random() * 25000);
      }
      setTimeout(kaffeeMaschine, 5000 + Math.random() * 10000);
      // Tassenklappern
      function tasse() {
        if (stopped) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = 900 + Math.random() * 600;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.003);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 0.22);
        if (Math.random() < 0.25) {
          setTimeout(() => {
            if (stopped) return;
            const o2 = ctx.createOscillator(); const g2 = ctx.createGain();
            o2.type = "sine"; o2.frequency.value = 700 + Math.random() * 400;
            g2.gain.setValueAtTime(0.05, ctx.currentTime);
            g2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
            o2.connect(g2); g2.connect(master); o2.start(); o2.stop(ctx.currentTime + 0.16);
          }, 80 + Math.random() * 60);
        }
        setTimeout(tasse, 2500 + Math.random() * 5000);
      }
      setTimeout(tasse, 800 + Math.random() * 2000);

    } else if (id === "zug") {
      // Fahrt im Zug: rhythmisches Rattern der Schienen
      master.gain.setValueAtTime(0.4, ctx.currentTime);
      // Hintergrund-Rumpeln
      const src = ctx.createBufferSource(); src.buffer = brownBuf; src.loop = true;
      const lp = lpf(400); const gBg = ctx.createGain(); gBg.gain.value = 0.3;
      src.connect(lp); lp.connect(gBg); gBg.connect(master); src.start(); nodes.push(src);
      // Schienen-Rhythmus: klopf-klopf ... klopf-klopf (2er-Gruppe)
      const zugTempo = 0.38; // ~160 BPM "R\u00e4der"
      let nextZug = ctx.currentTime + 0.1;
      let zugCount = 0;
      function zugTakt() {
        if (stopped) return;
        const now = ctx.currentTime;
        while (nextZug < now + 0.4) {
          const isHard = zugCount % 2 === 0; // erster Schlag der Gruppe lauter
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sawtooth"; o.frequency.value = isHard ? 68 : 55;
          o.frequency.exponentialRampToValueAtTime(30, nextZug + 0.06);
          g.gain.setValueAtTime(isHard ? 0.9 : 0.5, nextZug);
          g.gain.exponentialRampToValueAtTime(0.0001, nextZug + 0.12);
          o.connect(g); g.connect(master); o.start(nextZug); o.stop(nextZug + 0.13);
          // Nach 2 Schl\u00e4gen kurze Pause (Schienenabstand)
          nextZug += zugCount % 2 === 0 ? zugTempo * 0.55 : zugTempo * 1.45;
          zugCount++;
        }
        setTimeout(zugTakt, 80);
      }
      zugTakt();

    } else if (id === "katze") {
      // Katzenschnurren: ~25 Hz Grundton mit Obert\u00f6nen
      master.gain.setValueAtTime(0.55, ctx.currentTime);
      const schnurrFreq = 25 + Math.random() * 5; // 25-30 Hz
      // Einatmen/Ausatmen LFO
      const lfo = ctx.createOscillator(); const lfoG = ctx.createGain();
      lfo.type = "sine"; lfo.frequency.value = 0.4; lfoG.gain.value = 0.12;
      lfo.connect(lfoG); lfoG.connect(master.gain); lfo.start(); nodes.push(lfo);
      [1, 2, 3, 4, 6].forEach((mult, i) => {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = i === 0 ? "sawtooth" : "sine";
        o.frequency.value = schnurrFreq * mult;
        // Leichtes Vibrato
        const vib = ctx.createOscillator(); const vibG = ctx.createGain();
        vib.frequency.value = 0.5 + i * 0.08; vibG.gain.value = schnurrFreq * mult * 0.01;
        vib.connect(vibG); vibG.connect(o.frequency);
        g.gain.value = [0.5, 0.25, 0.15, 0.08, 0.04][i];
        const lpF = ctx.createBiquadFilter(); lpF.type = "lowpass"; lpF.frequency.value = 300;
        o.connect(lpF); lpF.connect(g); g.connect(master);
        o.start(); vib.start(); nodes.push(o, vib);
      });

    } else if (id === "geborgen") {
      // Geborgenheits-Effekt: ged\u00e4mpfter Unterwasser-Sound (Mutterleib-Artefakt)
      master.gain.setValueAtTime(0.25, ctx.currentTime);
      // Sehr tiefpassgefiltertes Rauschen (alle hohen Frequenzen entfernt)
      const src = ctx.createBufferSource(); src.buffer = brownBuf; src.loop = true;
      const lp1 = lpf(80); const lp2 = lpf(80); // zweifacher Tiefpass = steiler Abfall
      src.connect(lp1); lp1.connect(lp2); lp2.connect(master); src.start(); nodes.push(src);
      // Dumpfes Herzschlag-Wummern
      const hbFreq = 60 / (62 + Math.random() * 6); // 62-68 BPM
      let nextHb = ctx.currentTime + 0.5;
      function herzschlag() {
        if (stopped) return;
        const now = ctx.currentTime;
        while (nextHb < now + 0.4) {
          // Doppelschlag (lub-dub)
          [0, 0.22].forEach((offset, i) => {
            const o = ctx.createOscillator(); const g = ctx.createGain();
            o.type = "sine"; o.frequency.value = i === 0 ? 48 : 38;
            o.frequency.exponentialRampToValueAtTime(20, nextHb + offset + 0.25);
            g.gain.setValueAtTime(i === 0 ? 0.9 : 0.5, nextHb + offset);
            g.gain.exponentialRampToValueAtTime(0.0001, nextHb + offset + 0.28);
            o.connect(g); g.connect(master); o.start(nextHb + offset); o.stop(nextHb + offset + 0.3);
          });
          nextHb += hbFreq;
        }
        setTimeout(herzschlag, 100);
      }
      herzschlag();

    } else if (id === "wal") {
      // Walgesang: tiefe Seufzer, langgezogene sweepende Rufe
      master.gain.setValueAtTime(0.28, ctx.currentTime);
      // Unterwasser-Basis: sehr tief gefiltertes Rauschen
      const src = ctx.createBufferSource(); src.buffer = brownBuf; src.loop = true;
      const lp = lpf(200); const gSrc = ctx.createGain(); gSrc.gain.value = 0.2;
      src.connect(lp); lp.connect(gSrc); gSrc.connect(master); src.start(); nodes.push(src);
      function walRuf() {
        if (stopped) return;
        const type = Math.random();
        if (type < 0.4) {
          // Tiefer Seufzer: absteigende Frequenz
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sine";
          const startF = 90 + Math.random() * 40;
          o.frequency.setValueAtTime(startF, ctx.currentTime);
          o.frequency.linearRampToValueAtTime(startF * 0.4, ctx.currentTime + 4);
          g.gain.setValueAtTime(0, ctx.currentTime);
          g.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.8);
          g.gain.setValueAtTime(0.6, ctx.currentTime + 3);
          g.gain.linearRampToValueAtTime(0, ctx.currentTime + 4.5);
          o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 4.6);
        } else if (type < 0.7) {
          // Singender Auf-Ab-Ruf
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sine";
          const f0 = 120 + Math.random() * 60;
          o.frequency.setValueAtTime(f0 * 0.6, ctx.currentTime);
          o.frequency.linearRampToValueAtTime(f0 * 1.4, ctx.currentTime + 2);
          o.frequency.linearRampToValueAtTime(f0 * 0.8, ctx.currentTime + 4);
          g.gain.setValueAtTime(0, ctx.currentTime);
          g.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.5);
          g.gain.setValueAtTime(0.5, ctx.currentTime + 3.2);
          g.gain.linearRampToValueAtTime(0, ctx.currentTime + 4.2);
          o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 4.3);
        } else {
          // Klagendes hohes Pfeifen (Buckelwal-Signatur)
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sine"; const f = 300 + Math.random() * 200;
          o.frequency.setValueAtTime(f, ctx.currentTime);
          o.frequency.linearRampToValueAtTime(f * 0.55, ctx.currentTime + 3);
          g.gain.setValueAtTime(0, ctx.currentTime);
          g.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.4);
          g.gain.setValueAtTime(0.3, ctx.currentTime + 2.5);
          g.gain.linearRampToValueAtTime(0, ctx.currentTime + 3.2);
          o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 3.3);
        }
        setTimeout(walRuf, 4000 + Math.random() * 8000);
      }
      walRuf();
      setTimeout(walRuf, 1500 + Math.random() * 3000);

    } else if (id === "delfin") {
      // Delfinklicks + melodische Pfeift\u00f6ne
      master.gain.setValueAtTime(0.22, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      const lp = lpf(500); const gSrc = ctx.createGain(); gSrc.gain.value = 0.05;
      src.connect(lp); lp.connect(gSrc); gSrc.connect(master); src.start(); nodes.push(src);
      // Echoortungs-Klicks: schnelle hochfrequente Bursts
      function klicks() {
        if (stopped) return;
        const n = 3 + Math.floor(Math.random() * 6);
        let t = ctx.currentTime;
        for (let i = 0; i < n; i++) {
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sine"; o.frequency.value = 6000 + Math.random() * 4000;
          g.gain.setValueAtTime(0.15, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.015);
          o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.02);
          t += 0.02 + Math.random() * 0.04;
        }
        setTimeout(klicks, 800 + Math.random() * 2500);
      }
      // Melodische Pfeift\u00f6ne: aufsteigende Kurven
      function pfiff() {
        if (stopped) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine";
        const f0 = 1800 + Math.random() * 1200;
        const contour = Math.random();
        if (contour < 0.33) {
          o.frequency.setValueAtTime(f0, ctx.currentTime);
          o.frequency.linearRampToValueAtTime(f0 * 1.6, ctx.currentTime + 0.4);
        } else if (contour < 0.66) {
          o.frequency.setValueAtTime(f0 * 1.4, ctx.currentTime);
          o.frequency.linearRampToValueAtTime(f0 * 0.8, ctx.currentTime + 0.35);
        } else {
          o.frequency.setValueAtTime(f0, ctx.currentTime);
          o.frequency.linearRampToValueAtTime(f0 * 1.5, ctx.currentTime + 0.2);
          o.frequency.linearRampToValueAtTime(f0 * 0.9, ctx.currentTime + 0.5);
        }
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.05);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.55);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 0.6);
        setTimeout(pfiff, 600 + Math.random() * 2000);
      }
      klicks(); setTimeout(klicks, 400 + Math.random() * 600);
      pfiff();  setTimeout(pfiff,  800 + Math.random() * 1200);

    } else if (id === "grosskatze") {
      // Gro\u00dfkatzen-Schnurren: tiefer und kraftvoller als Hauskatze
      master.gain.setValueAtTime(0.5, ctx.currentTime);
      const schnurrFreq = 18 + Math.random() * 5; // 18-23 Hz (tiefer als Hauskatze)
      const lfo = ctx.createOscillator(); const lfoG = ctx.createGain();
      lfo.type = "sine"; lfo.frequency.value = 0.3; lfoG.gain.value = 0.15;
      lfo.connect(lfoG); lfoG.connect(master.gain); lfo.start(); nodes.push(lfo);
      [1, 1.5, 2, 3, 4, 6].forEach((mult, i) => {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = i === 0 ? "sawtooth" : "sine";
        o.frequency.value = schnurrFreq * mult;
        const vib = ctx.createOscillator(); const vibG = ctx.createGain();
        vib.frequency.value = 0.35 + i * 0.06; vibG.gain.value = schnurrFreq * mult * 0.012;
        vib.connect(vibG); vibG.connect(o.frequency);
        g.gain.value = [0.55, 0.3, 0.2, 0.1, 0.06, 0.03][i];
        const lpF = lpf(400);
        o.connect(lpF); lpF.connect(g); g.connect(master);
        o.start(); vib.start(); nodes.push(o, vib);
      });
      // Gelegentliches Winseln (Gepard-typisch)
      function winseln() {
        if (stopped) return;
        if (Math.random() < 0.4) {
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sine"; const f = 600 + Math.random() * 300;
          o.frequency.setValueAtTime(f, ctx.currentTime);
          o.frequency.linearRampToValueAtTime(f * 0.7, ctx.currentTime + 0.6);
          g.gain.setValueAtTime(0, ctx.currentTime);
          g.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.1);
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.65);
          o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 0.7);
        }
        setTimeout(winseln, 5000 + Math.random() * 10000);
      }
      setTimeout(winseln, 3000 + Math.random() * 5000);

    } else if (id === "bienen") {
      // Bienenstock-Summen: ~240 Hz Grundton + Fl\u00fcgelschlagen-Obert\u00f6ne
      master.gain.setValueAtTime(0.3, ctx.currentTime);
      const bienenFreqs = [240, 480, 720, 960, 1200];
      bienenFreqs.forEach((f, i) => {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sawtooth"; o.frequency.value = f * (0.99 + Math.random() * 0.02);
        // Leichtes Wobble
        const lfo = ctx.createOscillator(); const lfoG = ctx.createGain();
        lfo.frequency.value = 0.8 + i * 0.3 + Math.random() * 0.5;
        lfoG.gain.value = f * 0.004;
        lfo.connect(lfoG); lfoG.connect(o.frequency);
        g.gain.value = [0.4, 0.2, 0.1, 0.05, 0.025][i];
        const lpF = lpf(2000);
        o.connect(lpF); lpF.connect(g); g.connect(master);
        o.start(); lfo.start(); nodes.push(o, lfo);
      });
      // Einzelne Bienen die vorbeifliegen (kurzes Doppler-artiges Summen)
      function einzelbiene() {
        if (stopped) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sawtooth";
        const f = 280 + Math.random() * 160;
        o.frequency.setValueAtTime(f * 1.15, ctx.currentTime);
        o.frequency.linearRampToValueAtTime(f * 0.88, ctx.currentTime + 1.5);
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.3);
        g.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 1.6);
        setTimeout(einzelbiene, 3000 + Math.random() * 7000);
      }
      setTimeout(einzelbiene, 2000 + Math.random() * 4000);

    } else if (id === "kuckuck") {
      // Kuckucksruf + gelegentliche Waldv\u00f6gel + Fr\u00fchlingsatmosph\u00e4re
      master.gain.setValueAtTime(0.2, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      const lp = lpf(700); const gBg = ctx.createGain(); gBg.gain.value = 0.04;
      src.connect(lp); lp.connect(gBg); gBg.connect(master); src.start(); nodes.push(src);
      function kuckucksRuf() {
        if (stopped) return;
        const rufe = 2 + Math.floor(Math.random() * 4); // 2-5 Rufe
        let t = ctx.currentTime + 0.1;
        for (let r = 0; r < rufe; r++) {
          // "Kuck" - hoher Ton
          const o1 = ctx.createOscillator(); const g1 = ctx.createGain();
          o1.type = "sine"; o1.frequency.value = 520;
          g1.gain.setValueAtTime(0, t); g1.gain.linearRampToValueAtTime(0.4, t + 0.02);
          g1.gain.setValueAtTime(0.4, t + 0.12); g1.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
          o1.connect(g1); g1.connect(master); o1.start(t); o1.stop(t + 0.23);
          // "Kuck" Oberton
          const o1b = ctx.createOscillator(); const g1b = ctx.createGain();
          o1b.type = "sine"; o1b.frequency.value = 1040;
          g1b.gain.setValueAtTime(0, t); g1b.gain.linearRampToValueAtTime(0.12, t + 0.02);
          g1b.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
          o1b.connect(g1b); g1b.connect(master); o1b.start(t); o1b.stop(t + 0.22);
          t += 0.25;
          // "Uck" - tieferer Ton
          const o2 = ctx.createOscillator(); const g2 = ctx.createGain();
          o2.type = "sine"; o2.frequency.value = 380;
          g2.gain.setValueAtTime(0, t); g2.gain.linearRampToValueAtTime(0.38, t + 0.02);
          g2.gain.setValueAtTime(0.38, t + 0.15); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
          o2.connect(g2); g2.connect(master); o2.start(t); o2.stop(t + 0.3);
          t += 0.7; // Pause zwischen Rufen
        }
        setTimeout(kuckucksRuf, 6000 + Math.random() * 10000);
      }
      kuckucksRuf();
      // Gelegentlicher Waldvogel dazwischen
      function waldvogel() {
        if (stopped) return;
        const chirps = 2 + Math.floor(Math.random() * 4);
        let t = ctx.currentTime;
        for (let i = 0; i < chirps; i++) {
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sine"; o.frequency.value = 2400 + Math.random() * 1200;
          g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.15, t + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
          o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.12);
          t += 0.12 + Math.random() * 0.08;
        }
        setTimeout(waldvogel, 3000 + Math.random() * 8000);
      }
      setTimeout(waldvogel, 1500 + Math.random() * 3000);

    } else if (id === "eule") {
      // Eule bei Nacht: sanftes Rufen + Nachtger\u00e4usche
      master.gain.setValueAtTime(0.18, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = pinkBuf; src.loop = true;
      const lp = lpf(400); const gBg = ctx.createGain(); gBg.gain.value = 0.03;
      src.connect(lp); lp.connect(gBg); gBg.connect(master); src.start(); nodes.push(src);
      // Grillen im Hintergrund
      function nachtgrille() {
        if (stopped) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = 3800 + Math.random() * 400;
        g.gain.setValueAtTime(0, ctx.currentTime); g.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.005);
        g.gain.setValueAtTime(0.04, ctx.currentTime + 0.025); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + 0.045);
        setTimeout(nachtgrille, 60 + Math.random() * 120);
      }
      nachtgrille();
      function eulenRuf() {
        if (stopped) return;
        // "Hu-Huuuu" \u2014 zwei T\u00f6ne, zweiter l\u00e4nger und abfallend
        const t = ctx.currentTime + 0.1;
        // "Hu"
        const o1 = ctx.createOscillator(); const g1 = ctx.createGain();
        o1.type = "sine"; o1.frequency.value = 320;
        g1.gain.setValueAtTime(0, t); g1.gain.linearRampToValueAtTime(0.45, t + 0.06);
        g1.gain.setValueAtTime(0.45, t + 0.2); g1.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
        o1.connect(g1); g1.connect(master); o1.start(t); o1.stop(t + 0.38);
        // Oberton Hu
        const o1h = ctx.createOscillator(); const g1h = ctx.createGain();
        o1h.type = "sine"; o1h.frequency.value = 640;
        g1h.gain.setValueAtTime(0, t); g1h.gain.linearRampToValueAtTime(0.1, t + 0.06);
        g1h.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
        o1h.connect(g1h); g1h.connect(master); o1h.start(t); o1h.stop(t + 0.34);
        // "Huuuu" \u2014 l\u00e4nger, leicht abfallend
        const t2 = t + 0.45;
        const o2 = ctx.createOscillator(); const g2 = ctx.createGain();
        o2.type = "sine"; o2.frequency.setValueAtTime(310, t2);
        o2.frequency.linearRampToValueAtTime(290, t2 + 0.8);
        g2.gain.setValueAtTime(0, t2); g2.gain.linearRampToValueAtTime(0.5, t2 + 0.08);
        g2.gain.setValueAtTime(0.5, t2 + 0.6); g2.gain.exponentialRampToValueAtTime(0.0001, t2 + 0.85);
        o2.connect(g2); g2.connect(master); o2.start(t2); o2.stop(t2 + 0.88);
        const o2h = ctx.createOscillator(); const g2h = ctx.createGain();
        o2h.type = "sine"; o2h.frequency.setValueAtTime(620, t2);
        o2h.frequency.linearRampToValueAtTime(580, t2 + 0.8);
        g2h.gain.setValueAtTime(0, t2); g2h.gain.linearRampToValueAtTime(0.12, t2 + 0.08);
        g2h.gain.exponentialRampToValueAtTime(0.0001, t2 + 0.82);
        o2h.connect(g2h); g2h.connect(master); o2h.start(t2); o2h.stop(t2 + 0.85);
        setTimeout(eulenRuf, 5000 + Math.random() * 12000);
      }
      setTimeout(eulenRuf, 1000 + Math.random() * 3000);

    } else if (id === "wolf") {
      // W\u00f6lfe in der Ferne: langes Heulen + Nacht-Windatmosph\u00e4re
      master.gain.setValueAtTime(0.22, ctx.currentTime);
      const src = ctx.createBufferSource(); src.buffer = brownBuf; src.loop = true;
      const lp = lpf(500); const gBg = ctx.createGain(); gBg.gain.value = 0.08;
      src.connect(lp); lp.connect(gBg); gBg.connect(master); src.start(); nodes.push(src);
      // LFO f\u00fcr Windpuls
      const lfoW = ctx.createOscillator(); const lfoWG = ctx.createGain();
      lfoW.frequency.value = 0.08; lfoWG.gain.value = 0.04;
      lfoW.connect(lfoWG); lfoWG.connect(master.gain); lfoW.start(); nodes.push(lfoW);
      function wolfHeulen(delay) {
        if (stopped) return;
        setTimeout(() => {
          if (stopped) return;
          const dur = 2.5 + Math.random() * 2;
          const startF = 180 + Math.random() * 80;
          const peakF  = startF * (1.3 + Math.random() * 0.4);
          const endF   = startF * (0.7 + Math.random() * 0.2);
          const gain   = 0.15 + Math.random() * 0.15; // fern = leiser
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.type = "sine";
          o.frequency.setValueAtTime(startF, ctx.currentTime);
          o.frequency.linearRampToValueAtTime(peakF,  ctx.currentTime + dur * 0.3);
          o.frequency.linearRampToValueAtTime(endF,   ctx.currentTime + dur);
          g.gain.setValueAtTime(0, ctx.currentTime);
          g.gain.linearRampToValueAtTime(gain, ctx.currentTime + 0.3);
          g.gain.setValueAtTime(gain, ctx.currentTime + dur - 0.5);
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur + 0.2);
          // Oberton f\u00fcr Heul-Charakter
          const o2 = ctx.createOscillator(); const g2 = ctx.createGain();
          o2.type = "sine"; o2.frequency.value = peakF * 1.5;
          o2.frequency.setValueAtTime(startF * 1.5, ctx.currentTime);
          o2.frequency.linearRampToValueAtTime(peakF * 1.5, ctx.currentTime + dur * 0.3);
          o2.frequency.linearRampToValueAtTime(endF * 1.5, ctx.currentTime + dur);
          g2.gain.setValueAtTime(0, ctx.currentTime);
          g2.gain.linearRampToValueAtTime(gain * 0.35, ctx.currentTime + 0.3);
          g2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur + 0.2);
          o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + dur + 0.3);
          o2.connect(g2); g2.connect(master); o2.start(); o2.stop(ctx.currentTime + dur + 0.3);
          // Manchmal antwortet ein zweiter Wolf
          if (Math.random() < 0.45) {
            wolfHeulen(dur * 1000 + 800 + Math.random() * 1500);
          }
        }, delay);
      }
      wolfHeulen(2000 + Math.random() * 4000);
      setTimeout(() => wolfHeulen(0), 8000 + Math.random() * 15000); // n\u00e4chste Gruppe

    } else if (id === "seehund") {
      // Seehundbabys: Wellenrauschen + klagende Baby-Rufe
      master.gain.setValueAtTime(0.25, ctx.currentTime);
      // Ozean-Basis: sanfte Wellen
      const waveSrc = ctx.createBufferSource(); waveSrc.buffer = brownBuf; waveSrc.loop = true;
      const waveLp = lpf(600); const waveG = ctx.createGain(); waveG.gain.value = 0.18;
      const waveLfo = ctx.createOscillator(); const waveLfoG = ctx.createGain();
      waveLfo.frequency.value = 0.12; waveLfoG.gain.value = 0.06;
      waveLfo.connect(waveLfoG); waveLfoG.connect(waveG.gain);
      waveSrc.connect(waveLp); waveLp.connect(waveG); waveG.connect(master);
      waveSrc.start(); waveLfo.start(); nodes.push(waveSrc, waveLfo);
      // Seehundbaby-Ruf: hoher, tremolierender Klageruf
      function seehundRuf(delay) {
        if (stopped) return;
        setTimeout(() => {
          if (stopped) return;
          const dur = 1.2 + Math.random() * 0.8;
          const baseF = 700 + Math.random() * 300;       // hohe Frequenz: ~700-1000 Hz
          const gain  = 0.14 + Math.random() * 0.1;
          // Hauptton (nasal, klagend)
          const o = ctx.createOscillator(); const lp2 = lpf(2000); const g = ctx.createGain();
          o.type = "sawtooth";
          o.frequency.setValueAtTime(baseF * 0.85, ctx.currentTime);
          o.frequency.linearRampToValueAtTime(baseF,       ctx.currentTime + dur * 0.15);
          o.frequency.linearRampToValueAtTime(baseF * 1.1, ctx.currentTime + dur * 0.45);
          o.frequency.linearRampToValueAtTime(baseF * 0.8, ctx.currentTime + dur);
          g.gain.setValueAtTime(0, ctx.currentTime);
          g.gain.linearRampToValueAtTime(gain, ctx.currentTime + 0.08);
          g.gain.setValueAtTime(gain, ctx.currentTime + dur - 0.15);
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
          // Tremolo (charakteristisches Zittern)
          const trem = ctx.createOscillator(); const tremG = ctx.createGain();
          trem.frequency.value = 7 + Math.random() * 4; tremG.gain.value = gain * 0.4;
          trem.connect(tremG); tremG.connect(g.gain);
          o.connect(lp2); lp2.connect(g); g.connect(master);
          o.start(); o.stop(ctx.currentTime + dur + 0.1);
          trem.start(); trem.stop(ctx.currentTime + dur + 0.1);
          // Manchmal ein zweiter Ruf kurz danach (Echo / Antwort)
          const nextDelay = dur * 1000 + 3000 + Math.random() * 8000;
          seehundRuf(Math.random() < 0.35 ? 600 + Math.random() * 800 : nextDelay);
        }, delay);
      }
      seehundRuf(2500 + Math.random() * 3000);

    } else if (id === "herzschlag") {
      master.gain.setValueAtTime(0.22, ctx.currentTime);
      function hb() {
        if (stopped) return;
        // Lub
        const buf1 = ctx.createBuffer(1, Math.ceil(SR*0.07), SR);
        const d1 = buf1.getChannelData(0);
        for(let i=0;i<d1.length;i++) d1[i]=(Math.random()*2-1)*Math.pow(1-i/d1.length,2)*0.9;
        const s1 = ctx.createBufferSource(); s1.buffer=buf1;
        const lp1h=lpf(90); const g1=ctx.createGain(); g1.gain.value=1;
        s1.connect(lp1h); lp1h.connect(g1); g1.connect(master); s1.start();
        // Dub (0.15s later)
        setTimeout(() => {
          if (stopped) return;
          const buf2=ctx.createBuffer(1,Math.ceil(SR*0.06),SR); const d2=buf2.getChannelData(0);
          for(let i=0;i<d2.length;i++) d2[i]=(Math.random()*2-1)*Math.pow(1-i/d2.length,2)*0.6;
          const s2=ctx.createBufferSource(); s2.buffer=buf2;
          const lp2h=lpf(70); const g2=ctx.createGain(); g2.gain.value=1;
          s2.connect(lp2h); lp2h.connect(g2); g2.connect(master); s2.start();
        }, 150);
        setTimeout(hb, 920);
      }
      hb();

    } else if (id === "regenwald") {
      master.gain.setValueAtTime(0.2, ctx.currentTime);
      // Regen-Hintergrundrauschen (tropisch, dichter als normaler Regen)
      const src = ctx.createBufferSource(); src.buffer = whiteBuf; src.loop = true;
      const hp_rf = hpf(1200); const lp_rf = lpf(10000);
      src.connect(hp_rf); hp_rf.connect(lp_rf); lp_rf.connect(master); src.start(); nodes.push(src);
      // Tropfen von Bl\u00e4ttern
      function tropf() {
        if (stopped) return;
        const o=ctx.createOscillator(); const g=ctx.createGain();
        o.type="sine"; o.frequency.value=900+Math.random()*600;
        g.gain.setValueAtTime(0,ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.035,ctx.currentTime+0.004);
        g.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+0.06);
        o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime+0.07);
        setTimeout(tropf, 40+Math.random()*180);
      }
      tropf();
      // Zikaden-Schicht (tropisch)
      const zik = ctx.createOscillator(); const zikG = ctx.createGain(); const zikLFO = ctx.createOscillator(); const zikLFOG = ctx.createGain();
      zik.type="sawtooth"; zik.frequency.value=4200;
      const zikBpf=bpf(4200,8);
      zikLFO.frequency.value=22; zikLFOG.gain.value=600;
      zikLFO.connect(zikLFOG); zikLFOG.connect(zik.frequency);
      zikG.gain.value=0.04;
      zik.connect(zikBpf); zikBpf.connect(zikG); zikG.connect(master);
      zik.start(); zikLFO.start(); nodes.push(zik,zikG,zikBpf,zikLFO,zikLFOG);
      // V\u00f6gelrufe (selten)
      function vogelrf() {
        if (stopped) return;
        const o2=ctx.createOscillator(); const g2=ctx.createGain();
        o2.type="sine"; const f0=600+Math.random()*1000;
        o2.frequency.setValueAtTime(f0,ctx.currentTime);
        o2.frequency.exponentialRampToValueAtTime(f0*1.4,ctx.currentTime+0.12);
        o2.frequency.exponentialRampToValueAtTime(f0*0.9,ctx.currentTime+0.28);
        g2.gain.setValueAtTime(0,ctx.currentTime);
        g2.gain.linearRampToValueAtTime(0.045,ctx.currentTime+0.05);
        g2.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+0.3);
        o2.connect(g2); g2.connect(master); o2.start(); o2.stop(ctx.currentTime+0.35);
        setTimeout(vogelrf, 3000+Math.random()*8000);
      }
      vogelrf();

    } else if (id === "nachtmeer") {
      master.gain.setValueAtTime(0.28, ctx.currentTime);
      // Wellen (Brown + LFO, tiefer als "meer")
      const srcNM = ctx.createBufferSource(); srcNM.buffer = brownBuf; srcNM.loop = true;
      const lpNM = lpf(500); srcNM.connect(lpNM); lpNM.connect(master); srcNM.start(); nodes.push(srcNM);
      const lfoNM = ctx.createOscillator(); const lfoNMG = ctx.createGain();
      lfoNM.frequency.value = 0.09; lfoNMG.gain.value = 0.2;
      lfoNM.connect(lfoNMG); lfoNMG.connect(master.gain); lfoNM.start(); nodes.push(lfoNM,lfoNMG);
      // Nacht-Grillen (tiefer Chirp ~2 kHz)
      function grilleNM() {
        if (stopped) return;
        const o3=ctx.createOscillator(); const g3=ctx.createGain();
        o3.type="square"; o3.frequency.value=2100+Math.random()*300;
        const bpNM=bpf(2200,15);
        g3.gain.setValueAtTime(0,ctx.currentTime);
        g3.gain.linearRampToValueAtTime(0.025,ctx.currentTime+0.005);
        g3.gain.setValueAtTime(0.025,ctx.currentTime+0.04);
        g3.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+0.06);
        o3.connect(bpNM); bpNM.connect(g3); g3.connect(master); o3.start(); o3.stop(ctx.currentTime+0.07);
        setTimeout(grilleNM, 120+Math.random()*80);
      }
      setTimeout(grilleNM, 2000);

    } else if (id === "tropfen") {
      master.gain.setValueAtTime(0.22, ctx.currentTime);
      // Tiefes H\u00f6hlen-Hum (Druckluft / Stille)
      const srcT = ctx.createBufferSource(); srcT.buffer = brownBuf; srcT.loop = true;
      const lpT = lpf(60); const gT = ctx.createGain(); gT.gain.value = 0.15;
      srcT.connect(lpT); lpT.connect(gT); gT.connect(master); srcT.start(); nodes.push(srcT);
      // Wassertropfen mit Hall-Simulation
      function tropfTrop() {
        if (stopped) return;
        const freq = 800+Math.random()*400;
        const dur2 = 0.06+Math.random()*0.04;
        const o4=ctx.createOscillator(); const g4=ctx.createGain();
        o4.type="sine"; o4.frequency.value=freq;
        g4.gain.setValueAtTime(0,ctx.currentTime);
        g4.gain.linearRampToValueAtTime(0.18,ctx.currentTime+0.004);
        g4.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+dur2);
        // Echo 1
        const g4e1=ctx.createGain(); g4e1.gain.value=0.35;
        const del1=ctx.createDelay(); del1.delayTime.value=0.28;
        g4.connect(del1); del1.connect(g4e1); g4e1.connect(master);
        // Echo 2
        const g4e2=ctx.createGain(); g4e2.gain.value=0.12;
        const del2=ctx.createDelay(); del2.delayTime.value=0.65;
        g4.connect(del2); del2.connect(g4e2); g4e2.connect(master);
        o4.connect(g4); g4.connect(master); o4.start(); o4.stop(ctx.currentTime+dur2+0.1);
        nodes.push(o4,g4,del1,g4e1,del2,g4e2);
        setTimeout(tropfTrop, 1500+Math.random()*3500);
      }
      tropfTrop();

    } else if (id === "zikaden") {
      master.gain.setValueAtTime(0.18, ctx.currentTime);
      // Mehrschichtiges Zikaden-Chor
      [3800,4100,4400].forEach((freq,i) => {
        const oz=ctx.createOscillator(); const gzl=ctx.createGain(); const lfoZ=ctx.createOscillator(); const lfoZG=ctx.createGain();
        oz.type="sawtooth"; oz.frequency.value=freq;
        const bpZ=bpf(freq,12);
        lfoZ.frequency.value=18+i*3; lfoZG.gain.value=freq*0.15;
        lfoZ.connect(lfoZG); lfoZG.connect(oz.frequency);
        gzl.gain.value=0.045;
        oz.connect(bpZ); bpZ.connect(gzl); gzl.connect(master);
        oz.start(); lfoZ.start(); nodes.push(oz,gzl,bpZ,lfoZ,lfoZG);
      });
      // Gelegentliche Stille-Phasen
      function outrz() { if(stopped) return; setTimeout(() => { if(!stopped) { master.gain.linearRampToValueAtTime(0.004,ctx.currentTime+0.6); setTimeout(() => { if(!stopped) { master.gain.linearRampToValueAtTime(0.18,ctx.currentTime+1.2); outrz(); } }, 600+Math.random()*1200); } }, 5000+Math.random()*10000); }
      outrz();

    } else if (id === "hz432") {
      // 432 Hz \u2014 sehr sanfter Sinus-Ton, leicht schwebend
      master.gain.setValueAtTime(0.0001, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.12, ctx.currentTime+3);
      const o432a = ctx.createOscillator(); const g432a = ctx.createGain();
      const o432b = ctx.createOscillator(); const g432b = ctx.createGain();
      o432a.type="sine"; o432a.frequency.value=432;
      o432b.type="sine"; o432b.frequency.value=432.5; // leichte Schwebung
      g432a.gain.value=0.6; g432b.gain.value=0.4;
      o432a.connect(g432a); g432a.connect(master);
      o432b.connect(g432b); g432b.connect(master);
      o432a.start(); o432b.start(); nodes.push(o432a,o432b,g432a,g432b);

    } else if (id === "schumann") {
      // 7.83 Hz Schumann-Resonanz \u2014 pulsierendes Brown Noise
      master.gain.setValueAtTime(0.22, ctx.currentTime);
      const srcSR = ctx.createBufferSource(); srcSR.buffer = brownBuf; srcSR.loop = true;
      const lpSR = lpf(300);
      srcSR.connect(lpSR); lpSR.connect(master); srcSR.start(); nodes.push(srcSR);
      // 7.83 Hz Amplituden-Pulsation
      const lfoSR = ctx.createOscillator(); const lfoSRG = ctx.createGain();
      lfoSR.frequency.value = 7.83; lfoSRG.gain.value = 0.15;
      lfoSR.connect(lfoSRG); lfoSRG.connect(master.gain); lfoSR.start(); nodes.push(lfoSR,lfoSRG);
      // Sanfter 14.3 Hz Oberton
      const lfo2SR = ctx.createOscillator(); const lfo2SRG = ctx.createGain();
      lfo2SR.frequency.value = 14.3; lfo2SRG.gain.value = 0.05;
      lfo2SR.connect(lfo2SRG); lfo2SRG.connect(master.gain); lfo2SR.start(); nodes.push(lfo2SR,lfo2SRG);

    } else if (id === "klangschale") {
      master.gain.setValueAtTime(0.18, ctx.currentTime);
      // Tibetische Klangschale: Grundton ~220 Hz + Obert\u00f6ne
      function schlage() {
        if (stopped) return;
        const partials = [
          {freq:220, amp:0.55, decay:8},
          {freq:520, amp:0.30, decay:5},
          {freq:870, amp:0.18, decay:3.5},
          {freq:1360,amp:0.10, decay:2.5},
        ];
        partials.forEach(p => {
          const o5=ctx.createOscillator(); const g5=ctx.createGain();
          o5.type="sine"; o5.frequency.value=p.freq;
          g5.gain.setValueAtTime(0.0001,ctx.currentTime);
          g5.gain.exponentialRampToValueAtTime(p.amp,ctx.currentTime+0.015);
          g5.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+p.decay);
          o5.connect(g5); g5.connect(master);
          o5.start(); o5.stop(ctx.currentTime+p.decay+0.1);
        });
        setTimeout(schlage, 9000+Math.random()*4000);
      }
      schlage();
      // Leises Reibeton-Drone (als ob man den Rand reibt)
      const oDrn=ctx.createOscillator(); const gDrn=ctx.createGain();
      oDrn.type="sine"; oDrn.frequency.value=220;
      gDrn.gain.setValueAtTime(0.0001,ctx.currentTime);
      gDrn.gain.linearRampToValueAtTime(0.06,ctx.currentTime+4);
      oDrn.connect(gDrn); gDrn.connect(master); oDrn.start(); nodes.push(oDrn,gDrn);

    } // end klangschale

    klangStop = () => {
      stopped = true;
      nodes.forEach(n => { try { n.disconnect(); if(n.stop) n.stop(); } catch(e){} });
      try { master.disconnect(); } catch(e) {}
    };
  }

  // Klang-Buttons
  const KLANG_TAGS = {
    stille:      ["Tiefe Einkehr", "Vollpr\u00e4senz", "Klarheit"],
    white:       ["L\u00e4rm blockieren", "Konzentration", "Einschlafen"],
    pink:        ["Einschlafen", "Entspannung", "L\u00e4rm d\u00e4mpfen"],
    brown:       ["ADHS", "Gr\u00fcbeln stoppen", "Tiefenentspannung"],
    regen:       ["Stress abbauen", "Einschlafen", "Loslassen"],
    meer:        ["Loslassen", "Urlaubs-Gef\u00fchl", "Atemrhythmus"],
    wasserfall:  ["Fokus", "Gedanken beruhigen", "Kraft tanken"],
    wind:        ["Loslassen", "Freiheit", "Meditation"],
    feuer:       ["Geborgenheit", "W\u00e4rme", "Entspannung"],
    gewitter:    ["Katharsis", "Reinigung", "Tiefschlaf"],
    wald:        ["Waldbaden", "Regeneration", "Stressabbau"],
    hoehle:      ["Tiefe Meditation", "Abgeschlossenheit", "Trance"],
    sommerregen: ["Gr\u00fcbeln stoppen", "Einschlafen", "Innerer Frieden"],
    voegel:      ["Morgenfrische", "Neubeginn", "Lebensfreude"],
    bach:        ["Mentaler Fluss", "Loslassen", "Gedanken kl\u00e4ren"],
    wiese:       ["Urlaubs-Gef\u00fchl", "W\u00e4rme", "Erdung"],
    blizzard:    ["Geborgenheit", "Schutzgef\u00fchl", "Einschlafen"],
    trommel:     ["Erdung", "Zentrierung", "Trance"],
    chimes:      ["Achtsamkeit", "Hier & Jetzt", "Fokus"],
    kosmos:      ["Tiefe Meditation", "Trance", "Loslassen"],
    aquarium:    ["Innerer Frieden", "Fokus", "Entspannung"],
    zug:         ["Einschlafen", "Nostalgie", "Entspannung"],
    katze:       ["Blutdruck senken", "Geborgenheit", "Tiefenentspannung"],
    geborgen:    ["Urvertrauen", "Tiefe Sicherheit", "Tiefenentspannung"],
    wal:         ["Theta-Wellen", "Tiefe Meditation", "Loslassen"],
    delfin:      ["Blockaden l\u00f6sen", "Lebensfreude", "Mentale Freiheit"],
    gewaesser:   ["Loslassen", "Mentaler Fluss", "Naturverbundenheit"],
    bienen:      ["Erdung", "Gr\u00fcbeln stoppen", "Hypnotisch"],
    kuckuck:     ["Fr\u00fchlingsgef\u00fchl", "Waldfrieden", "Nostalgie"],
    eule:        ["Einschlafen", "Nachtmeditation", "Mystik"],
    wolf:        ["Wildnis", "Freiheit", "Verbundenheit"],
    seehund:     ["Tiefe Ber\u00fchrung", "Geborgenheit", "Loslassen"],
    herzschlag:  ["Urvertrauen", "Geborgenheit", "Beruhigung"],
    regenwald:   ["Exotik", "Tiefenentspannung", "Loslassen"],
    nachtmeer:   ["Einschlafen", "Stille", "Tiefenentspannung"],
    tropfen:     ["Tiefe Meditation", "H\u00f6hlen-Trance", "Loslassen"],
    zikaden:     ["Sommernacht", "Nostalgie", "Einschlafen"],
    hz432:       ["Frequenz-Heilung", "Zellharmonisierung", "Meditation"],
    schumann:    ["Erdfrequenz", "Neurobalance", "Tiefenentspannung"],
    om:          ["Mantren-Meditation", "Urklang", "Tiefe Meditation"],
    morgenkonzert: ["Neubeginn", "Lebensfreude", "Frische"],
    savanne:     ["Wildnis", "Weite", "Erdung"],
    polareis:    ["Arktische Weite", "Tiefe Stille", "Entr\u00fcckung"],
    wuestensturm:["Wildnis", "Erdung", "Weite"],
    elefanten:   ["Afrikanische Nacht", "Wildnis", "Tiefe Ber\u00fchrung"],
    mangroven:   ["Urwald", "Lebendigkeit", "Naturverbundenheit"],
    nordlichter: ["Winterzauber", "Mystik", "Kosmische Stille"],
    "japanischer-garten": ["Zen", "Innerer Frieden", "Klarheit"],
    dschungelregen: ["Exotik", "Tiefenentspannung", "Loslassen"],
    tibet:       ["Tiefe Meditation", "Chakra-Arbeit", "Innerer Frieden"],
    unterwasser: ["Tiefste Stille", "Schwerelosigkeit", "Loslassen"],
    klangschale: ["Chakra-Arbeit", "Meditation", "Energiereinigung"],
  };
  const KLANG_INFO = {
    alpha: "Alpha-Wellen (8\u201312 Hz) \u2014 entspannte Wachheit, das klassische Einstiegstor zur Meditation. \u26a0\ufe0f Wichtig: Am besten mit Kopfh\u00f6rern h\u00f6ren \u2014 das Gehirn verarbeitet die Differenz zwischen linkem und rechtem Kanal.",
    theta: "Theta-Wellen (4\u20138 Hz) \u2014 traumhafte Schwingungen, tiefe Kreativit\u00e4t und Innenschau. \u26a0\ufe0f Wichtig: Am besten mit Kopfh\u00f6rern h\u00f6ren \u2014 das Gehirn verarbeitet die Differenz zwischen linkem und rechtem Kanal.",
    delta: "Delta-Wellen (0,5\u20134 Hz) \u2014 die langsamsten Hirnwellen, tiefer traumloser Schlaf und Samadhi. \u26a0\ufe0f Wichtig: Am besten mit Kopfh\u00f6rern h\u00f6ren \u2014 das Gehirn verarbeitet die Differenz zwischen linkem und rechtem Kanal.",
    gamma: "Gamma-Wellen (>30 Hz) \u2014 kosmische Wachheit, Mitgef\u00fchl, Verbindung aller Gehirnareale. \u26a0\ufe0f Wichtig: Am besten mit Kopfh\u00f6rern h\u00f6ren \u2014 das Gehirn verarbeitet die Differenz zwischen linkem und rechtem Kanal.",
    brandung: "Wellen brechen an Felsenk\u00fcste \u2014 kraftvoll, urspr\u00fcnglich, reinigend.",
    hagel: "Hagelschauer auf einem Dach \u2014 intensiver Naturrhythmus, wachmachend.",
    herbstlaub: "Bl\u00e4tter rascheln im Herbstwind \u2014 melancholisch, sanft, verg\u00e4nglich.",
    kathedrale: "Kirchenraum mit langem Hall \u2014 sakrale Stille, die tr\u00e4gt.",
    kornfeld: "Sommerfeld im Wind \u2014 weite Natur, Freiheit, Stille.",
    regenamfenster: "Regen von innen geh\u00f6rt \u2014 geborgen, meditativ, sicher.",
    froesche: "Froschkonzert am Teich \u2014 lebendige Nacht, Urkraft des Lebens. Aufgenommen im Naturschutzgebiet Liesberg, Schweiz.",
    vinyl: "Knisterndes Vinyl \u2014 warme Nostalgie, sanftes Rauschen.",
    cafe: "Lebendiges Caf\u00e9-Gemurmel \u2014 belebt den Geist, f\u00f6rdert kreatives Denken.",
    standuhr: "Das gleichm\u00e4\u00dfige Ticken einer alten Standuhr \u2014 gibt Struktur und Best\u00e4ndigkeit.",
    bibliothek: "Stille Bibliothek mit leisen Ger\u00e4uschen \u2014 Raum f\u00fcr Konzentration und Wissen.",
    kinder: "Fr\u00f6hliche Kinderstimmen auf einem Spielplatz \u2014 Lebensfreude und Unbeschwertheit.",
    schreibmaschine: "Das Rattern einer Schreibmaschine \u2014 Fokus, Fluss und kreative Energie.",
    stille:      "Vollst\u00e4ndige Stille \u2014 nur Gong am Anfang und Ende.",
    white:       "\ud83c\udf0a Natural White Noise: ein schottischer Wasserfall, aufgenommen im Wald \u2014 breites, gleichm\u00e4\u00dfiges Rauschen \u00fcber alle Frequenzen. Perfekt, um L\u00e4rm zu blockieren und den Fokus zu halten.",
    pink:        "\ud83c\udf27\ufe0f Natural Pink Noise: starker Regen auf ein Dachfenster \u2014 w\u00e4rmer und bassiger als wei\u00dfes Rauschen. Sehr beliebt zum Einschlafen, angenehmer f\u00fcr die Ohren als synthetisches Rauschen.",
    brown:       "\ud83c\udf32 Natural Brown Noise: schwerer Herbststurm in schwedischen Kiefernw\u00e4ldern \u2014 tiefes, sattes Baumkronen-Rauschen. Extrem beruhigend f\u00fcr ein \u00fcberaktives Gehirn (ADHS-Geheimtipp).",
    regen:       "Regenger\u00e4usche: gleichm\u00e4\u00dfiges Prasseln, gelegentlich einzelne Tropfen.",
    meer:        "Meeresrauschen: Wellen, die kommen und gehen \u2014 rhythmisch und beruhigend.",
    wasserfall:  "Wasserfall: konstantes Rauschen flie\u00dfenden Wassers.",
    wind:        "Wind: mal st\u00e4rker, mal schw\u00e4cher \u2014 wie drau\u00dfen in der Natur.",
    feuer:       "Feuer: Knistern und Prasseln eines Lagerfeuers.",
    gewitter:    "Gewitter: Regen mit gelegentlichen Donnergrollen in der Ferne.",
    wald:        "Wald: Vogelgezwitscher und Bl\u00e4tterrascheln \u2014 stille Natur.",
    hoehle:      "H\u00f6hle: tiefes Hall-Echo \u2014 weite, leere Stille.",
    sommerregen: "Sanfter Sommerregen auf ein Bl\u00e4tterdach \u2014 das monotone Prasseln blendet st\u00f6rende Gedanken perfekt aus.",
    voegel:      "Vogelgezwitscher am Morgen: helle Chirps verschiedener Singv\u00f6gel \u2014 aktiviert ein Gef\u00fchl von Frische, Neubeginn und Sicherheit.",
    bach:        "Flie\u00dfender Bach: lebendiges Pl\u00e4tschern und Glucksen \u2014 f\u00f6rdert den mentalen Fluss und das Loslassen.",
    wiese:       "Sommerliche Wiese mit Grillen und Zikaden \u2014 erinnert unterbewusst an Urlaub, W\u00e4rme und Entspannung.",
    blizzard:    "Blizzard von drinnen: das Heulen des Windes und gelegentliches Fensterwummern \u2014 w\u00e4hrend man selbst im Warmen sitzt. Verst\u00e4rkt das Gef\u00fchl von Schutz und Geborgenheit.",
    trommel:     "Schamanische Trommeln: langsamer, monotoner Herzschlag-Rhythmus (~60 BPM) \u2014 schenkt Erdung und Zentrierung.",
    chimes:      "Windspiele: helle, zuf\u00e4llige T\u00f6ne in pentatonischer Stimmung \u2014 lenken den Fokus sanft ins Hier und Jetzt.",
    kosmos:      "Kosmische Pads: sph\u00e4rische, langgezogene Synthesizerkl\u00e4nge ohne Rhythmus \u2014 ideal f\u00fcr tiefe Meditation und Trance.",
    aquarium:    "Aquarium: sanftes Blubbern und Pl\u00e4tschern eines Aquariums \u2014 gleichm\u00e4\u00dfig, beruhigend, wie Wasser in Zeitlupe.",
    zug:         "Fahrt im Zug: das rhythmische, dumpfe Rattern der Schienen \u2014 wirkt nachweislich einschl\u00e4fernd und entspannend.",
    katze:       "Katzenschnurren: die Frequenz von ~25 Hz senkt nachweislich den Blutdruck und wirkt tief beruhigend.",
    geborgen:    "Geborgenheits-Effekt: sehr tief gefilterter Unterwasser-Sound mit dumpfem Herzschlag \u2014 erinnert unterbewusst an die Zeit im Mutterleib. Vermittelt tiefe Sicherheit und vollst\u00e4ndige Abkapselung von der Au\u00dfenwelt.",
    wal:         "Walgesang: tiefe Seufzer, sweepende Rufe und klagende Pfeifen des Buckelwals \u2014 Wissenschaftler zeigen, dass diese Kl\u00e4nge Theta-Gehirnwellen (tiefe Entspannung) ausl\u00f6sen k\u00f6nnen.",
    delfin:      "Delfine: rhythmische Echoortungs-Klicks und melodische Pfeift\u00f6ne \u2014 fr\u00f6hlich, lebendig und mental befreiend. Beliebt zum L\u00f6sen innerer Blockaden.",
    gewaesser:   "Pl\u00e4tscherndes Gew\u00e4sser: lebendiges Flie\u00dfen und Murmeln \u2014 Bachsteine, Wassertropfen, reines Naturidyll.",
    bienen:      "Bienenstock: gleichm\u00e4\u00dfiges, tiefes Summen eines Bienenstocks \u2014 wirkt wie nat\u00fcrliches Brown Noise. Erdend, fast hypnotisch, hilft gegen kreisende Gedanken.",
    kuckuck:     "Kuckuck im Fr\u00fchlingswald: das vertraute Rufen versetzt uns sofort in einen sonnigen, friedlichen Waldtag \u2014 mit Waldv\u00f6geln im Hintergrund.",
    eule:        "Eule in der Nacht: sanftes Hu-Huuuu in der Stille \u2014 mit Nachtgrillen im Hintergrund. Tiefenentspannt, mystisch, perfekt zum Einschlafen.",
    wolf:        "W\u00f6lfe in der Ferne: langes, freies Heulen mit Windhauch \u2014 erzeugt ein tiefes Gef\u00fchl von Wildnis, Freiheit und Verbundenheit mit der Natur.",
    seehund:     "Seehundbabys: klagende, zitternde Rufe junger Seehunde auf dem Ozean \u2014 tief ber\u00fchrend, wie ein Ruf nach Geborgenheit. Im Hintergrund: sanftes Meeresrauschen.",
    herzschlag:  "Echter Herzschlag: mit einem DIY-Stethoskop aufgenommen \u2014 ruhiger, tiefer Herzrhythmus. Vermittelt Urvertrauen und tiefe Sicherheit.",
    regenwald:   "Echter Regenwald: nat\u00fcrliche Aufnahme \u2014 dichtes Regenrauschen auf Bl\u00e4ttern, tropische Vogelrufe, Zikaden. Versetzt Sie sofort in \u00fcppige, gr\u00fcne Stille.",
    nachtmeer:   "Echtes Meeresrauschen: Zen-Ozeanwellen, sanft und gleichm\u00e4\u00dfig \u2014 tiefe, rhythmische Wellen. Perfekt zum Einschlafen.",
    tropfen:     "Echte Tropfsteinh\u00f6hle: Originalaufnahme von tropfendem Wasser in einer H\u00f6hle \u2014 jeder Tropfen mit langem, hallenden Nachhall. Einer der ruhigsten Kl\u00e4nge der Welt.",
    zikaden:     "Echte Zikaden-Nacht: Feldaufnahme von Grillen um Mitternacht \u2014 vielstimmiger Chor in warmer Sommernacht. Mediterrane Nostalgie.",
    hz432:       "432 Hz \u2014 der 'Herzton der Natur': ein sanfter, leicht schwebender Reinton. Manche Menschen empfinden diese Frequenz als harmonischer und beruhigender als der \u00fcbliche 440-Hz-Standard.",
    schumann:    "Schumann-Resonanz 7.83 Hz: die Eigenfrequenz der Erde zwischen Erdoberfl\u00e4che und Ionosph\u00e4re. Als Amplituden-Pulsation sp\u00fcrbar gemacht \u2014 soll Gehirnwellen synchronisieren und Erholung f\u00f6rdern.",
    om:          "Echtes Om: eine reine, gehaltene Om-Stimme \u2014 der Urklang aus echter Stimmaufnahme, loopbar. Ideal f\u00fcr Mantren-Meditation.",
    morgenkonzert: "Morgenkonzert der V\u00f6gel (Dawn Chorus): aufgenommen um 4 Uhr morgens \u2014 Rotkehlchen, Stieglitz und Singdrossel in vollem Gesang. Einer der sch\u00f6nsten Kl\u00e4nge der Natur.",
    savanne:     "Afrikanische Savanne bei Nacht: echte Feldaufnahme um Mitternacht im Masai Mara, Kenia \u2014 Grillen, Froschquaken, Wind. Eine der eindrucksvollsten Naturkulissen der Welt.",
    unterwasser: "Unterwasser-Ambience: echte Hydrofonaufnahmen, \u00fcberlagert mit gefiltertem Rauschen \u2014 tiefes Blubbern, ged\u00e4mpfte Stille. Vermittelt vollst\u00e4ndige Abgeschlossenheit und Schwerelosigkeit.",
    klangschale: "Echte Tibetische Klangschalen: Originalaufnahme mehrerer Klangschalen \u2014 tiefes Anschlagen mit langem, schimmerndem Nachklang. Klassische Klangmeditation.",
    polareis:    "Gletscherlagune J\u00f6kuls\u00e1rl\u00f3n, Island: Hydrofonaufnahme unter dem Eiswasser Islands gr\u00f6\u00dfter Gletscherlagune \u2014 Knacken und St\u00f6hnen brechender Eisberge. Eine der eindrucksvollsten Klangwelten der Erde.",
    wuestensturm:"W\u00fcstensturm in der Atacama, Chile: Wind, der durch Kaktusdornen pfeift \u2014 auf dem Gipfel der trockensten W\u00fcste der Welt. Roh, weit und absolut unber\u00fchrt.",
    elefanten:   "Afrikanische Savanne, Masai Mara, Kenia: Nacht unter dem Vollmond \u2014 Elefanten, B\u00fcffel, Hy\u00e4nen und L\u00f6wen aus der Ferne. Eine der eindrucksvollsten Naturaufnahmen der Erde.",
    mangroven:   "Feuchtgebiet in Berisso, Argentinien: echte Feldaufnahme aus einem Sumpfgebiet \u2014 V\u00f6gel, flie\u00dfendes Wasser, Insekten. Urspr\u00fcngliche, lebendige Natur pur.",
    nordlichter: "Wintersonnenwende-Nacht: Eis, Wind und knackende \u00c4ste unter sternenklarem Winterhimmel \u2014 das Knistern der Natur in einer stillen Nacht, in der man die Nordlichter erwartet.",
    "japanischer-garten": "Bambusgarten, Tottori, Japan: binaural aufgenommen \u2014 Vogelgesang, Wind durch Bambus und ein kleiner Wasserbach. Echter japanischer Zen-Garten-Klang.",
    dschungelregen: "Tropenwald-Nacht, St. Lucia, Karibik: Nachtambiente \u00fcber Soufri\u00e8re \u2014 tropische V\u00f6gel, Insekten und Fr\u00f6sche in feuchter Urwald-Luft. Exotik pur.",
    tibet:       "Tibetische Klangschale mit Vogelgesang: tiefe, anhaltende T\u00f6ne einer traditionellen Klangschale aus dem Himalaya \u2014 \u00fcberlagert mit sanftem Naturvogelgesang. Tiefe Klangmeditation.",
  };
  const infoEl = document.getElementById("stille-klang-info");
  document.querySelectorAll(".stille-klang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".stille-klang-btn").forEach(b => {
        b.style.borderColor = "var(--border)"; b.style.background = "transparent";
      });
      btn.style.borderColor = "var(--copper)"; btn.style.background = "var(--paper)";
      gewaehlterKlang = btn.dataset.klang;
      if (infoEl) infoEl.textContent = KLANG_INFO[gewaehlterKlang] || "";
      const tagsEl = document.getElementById("stille-klang-tags");
      if (tagsEl) {
        const tags = KLANG_TAGS[gewaehlterKlang] || [];
        tagsEl.innerHTML = tags.map(t =>
          `<span style="font-size:.65rem;padding:.2rem .6rem;border-radius:999px;background:var(--paper);border:1px solid var(--border);color:var(--ink-muted);white-space:nowrap;">${t}</span>`
        ).join("");
      }
      // Sofort vorladen sobald ein Klang gew\u00e4hlt wird (fetch startet im Hintergrund)
      if (REAL_SOUNDS_ALL.has(gewaehlterKlang) && !klangFetchCache[gewaehlterKlang]) {
        klangFetchCache[gewaehlterKlang] = fetch(klangCdnUrl(gewaehlterKlang))
          .then(r => r.arrayBuffer()).catch(() => null);
      }
      // Vorschau wenn Timer bereits l\u00e4uft
      if (laedt && interval) starteKlang(gewaehlterKlang);
    });
  });

  // Klang-Matrix: Typ \u00d7 Instinkt \u2192 3 Klang-Empfehlungen
  const KLANG_LABELS = {
    "stille":"Stille","white":"White Noise","pink":"Pink Noise","brown":"Brown Noise",
    "bach":"Bach","gewaesser":"Gew\u00e4sser","meer":"Meer","nachtmeer":"Meer nachts",
    "regen":"Regen","sommerregen":"Sommerregen","wasserfall":"Wasserfall",
    "tropfen":"Tropfsteinh\u00f6hle","unterwasser":"Unterwasser",
    "dschungelregen":"Dschungelregen","regenwald":"Regenwald","mangroven":"Mangroven",
    "blizzard":"Blizzard","feuer":"Feuer","gewitter":"Gewitter","hoehle":"H\u00f6hle",
    "nordlichter":"Nordlichter","polareis":"Polareis","wald":"Wald","wind":"Wind",
    "brandung":"Brandung","hagel":"Hagel","herbstlaub":"Herbstlaub",
    "wuestensturm":"W\u00fcstensturm",
    "aquarium":"Aquarium","japanischer-garten":"Japanischer Garten",
    "morgenkonzert":"Morgenkonzert","savanne":"Savanne","kathedrale":"Kathedrale",
    "kornfeld":"Kornfeld","tibet":"Tibet","wiese":"Sommerwiese",
    "bibliothek":"Bibliothek","cafe":"Caf\u00e9","kinder":"Kinderstimmen",
    "schreibmaschine":"Schreibmaschine","standuhr":"Standuhr",
    "regenamfenster":"Regen am Fenster","vinyl":"Vinyl","zug":"Zug",
    "bienen":"Bienen","delfin":"Delfine","elefanten":"Elefanten","eule":"Eule",
    "katze":"Katze","kuckuck":"Kuckuck","seehund":"Seehundbabys",
    "voegel":"Vogelstimmen","wal":"Walgesang","wolf":"W\u00f6lfe",
    "froesche":"Fr\u00f6sche","zikaden":"Zikaden-Nacht",
    "alpha":"Alpha (8\u201312\u00a0Hz)","chimes":"Windspiele",
    "delta":"Delta (0,5\u20134\u00a0Hz)","gamma":"Gamma (>30\u00a0Hz)",
    "herzschlag":"Herzschlag","hz432":"432\u00a0Hz","klangschale":"Klangschale",
    "kosmos":"Kosmisch","om":"Om-Mantra","schumann":"Schumann",
    "theta":"Theta (4\u20138\u00a0Hz)","trommel":"Trommel"
  };
  const KLANG_MATRIX = {
    "1-SE": [
      {id:"stille",      icon:"\ud83e\udd2b", desc:"Absolute Stille \u2014 Raum f\u00fcr innere Ordnung und Sammlung."},
      {id:"sommerregen", icon:"\ud83c\udf43", desc:"Warmer Sommerregen \u2014 rhythmisch, reinigend, strukturiert."},
      {id:"brown",       icon:"\ud83d\udfe4", desc:"Brown Noise \u2014 sanfter Klangteppich f\u00fcr konzentriertes Arbeiten."}
    ],
    "1-SO": [
      {id:"morgenkonzert",icon:"\ud83c\udf05", desc:"Vogelkonzert im Morgengrauen \u2014 Anfang und Erneuerung."},
      {id:"wald",        icon:"\ud83c\udf32", desc:"Stiller Wald \u2014 Aufrichtigkeit und tiefe Verwurzelung."},
      {id:"bach",        icon:"\ud83c\udfde\ufe0f", desc:"Pl\u00e4tschernder Bach \u2014 klarer, unverf\u00e4lschter Fluss."}
    ],
    "1-SX": [
      {id:"gewitter",    icon:"\u26c8\ufe0f", desc:"Fernes Gewitter \u2014 Entladung von aufgestauter Spannung."},
      {id:"feuer",       icon:"\ud83d\udd25", desc:"Knisterndes Feuer \u2014 W\u00e4rme und innere Leidenschaft."},
      {id:"klangschale", icon:"\ud83d\udd14", desc:"Klangschale \u2014 Reinigung und Zentrierung im Moment."}
    ],
    "2-SE": [
      {id:"katze",       icon:"\ud83d\udc31", desc:"Schnurren einer Katze \u2014 Geborgenheit und Urvertrauen."},
      {id:"herzschlag",  icon:"\u2764\ufe0f", desc:"Herzschlag \u2014 Verbindung mit dem eigenen K\u00f6rper."},
      {id:"gewaesser",   icon:"\ud83c\udfde\ufe0f", desc:"Stilles Gew\u00e4sser \u2014 sanfte F\u00fcrsorge f\u00fcr sich selbst."}
    ],
    "2-SO": [
      {id:"voegel",      icon:"\ud83d\udc26", desc:"Vogelstimmen \u2014 lebendige Gemeinschaft in der Natur."},
      {id:"wiese",       icon:"\ud83e\udd97", desc:"Sommerwiese \u2014 W\u00e4rme und F\u00fclle des Zusammenseins."},
      {id:"morgenkonzert",icon:"\ud83c\udf05", desc:"Morgenkonzert \u2014 freudvoller Beginn eines neuen Tages."}
    ],
    "2-SX": [
      {id:"meer",        icon:"\ud83c\udf0a", desc:"Meeresrauschen \u2014 tiefe Sehnsucht und Hingabe."},
      {id:"delfin",      icon:"\ud83d\udc2c", desc:"Delfingesang \u2014 spielerische Verbundenheit."},
      {id:"chimes",      icon:"\ud83c\udf90", desc:"Windspiele \u2014 zarte, einladende Schwingung."}
    ],
    "3-SE": [
      {id:"zug",         icon:"\ud83d\ude82", desc:"Zugfahrt \u2014 gleichm\u00e4\u00dfiger Rhythmus und klares Ziel."},
      {id:"wind",        icon:"\ud83d\udca8", desc:"Wind \u2014 Bewegung und Anpassungsf\u00e4higkeit."},
      {id:"pink",        icon:"\ud83c\udf38", desc:"Pink Noise \u2014 effizienter Fokus ohne Ablenkung."}
    ],
    "3-SO": [
      {id:"savanne",     icon:"\ud83e\udd8b", desc:"Savanne \u2014 weite B\u00fchne und nat\u00fcrliche Pr\u00e4senz."},
      {id:"elefanten",   icon:"\ud83d\udc18", desc:"Elefanten \u2014 Kraft, W\u00fcrde und F\u00fchrungsst\u00e4rke."},
      {id:"trommel",     icon:"\ud83e\udd41", desc:"Trommel \u2014 Rhythmus und Antrieb zum Handeln."}
    ],
    "3-SX": [
      {id:"feuer",       icon:"\ud83d\udd25", desc:"Feuer \u2014 Ausstrahlung und magnetische Anziehung."},
      {id:"klangschale", icon:"\ud83d\udd14", desc:"Klangschale \u2014 Authentizit\u00e4t hinter der Maske."},
      {id:"tibet",       icon:"\ud83c\udfd4\ufe0f", desc:"Tibet \u2014 Stille und Tiefe jenseits des Erfolgs."}
    ],
    "4-SE": [
      {id:"regen",       icon:"\ud83c\udf27\ufe0f", desc:"Regen \u2014 das Sch\u00f6ne im Melancholischen annehmen."},
      {id:"hoehle",      icon:"\ud83e\udea8", desc:"Tropfsteinh\u00f6hle \u2014 R\u00fcckzug und innere Sch\u00e4tze."},
      {id:"brown",       icon:"\ud83d\udfe4", desc:"Brown Noise \u2014 erdender Klangraum f\u00fcr die Tiefe."}
    ],
    "4-SO": [
      {id:"nachtmeer",   icon:"\ud83c\udf04", desc:"Meer nachts \u2014 Sehnsucht und stille Sch\u00f6nheit."},
      {id:"zikaden",     icon:"\ud83e\udd87", desc:"Zikaden-Nacht \u2014 das Besondere im Verborgenen."},
      {id:"chimes",      icon:"\ud83c\udf90", desc:"Windspiele \u2014 kunstvoller Ausdruck des Einzigartigen."}
    ],
    "4-SX": [
      {id:"gewitter",    icon:"\u26c8\ufe0f", desc:"Gewitter \u2014 Leidenschaft und emotionale Intensit\u00e4t."},
      {id:"eule",        icon:"\ud83e\udd89", desc:"Eule \u2014 Weisheit in der Dunkelheit der Nacht."},
      {id:"om",          icon:"\ud83e\uddd8", desc:"Om-Mantra \u2014 Verbindung mit dem Urklang."}
    ],
    "5-SE": [
      {id:"stille",      icon:"\ud83e\udd2b", desc:"Stille \u2014 der kostbarste R\u00fcckzugsort des Beobachters."},
      {id:"hoehle",      icon:"\ud83e\udea8", desc:"H\u00f6hle \u2014 gesch\u00fctzter Raum f\u00fcr Gedanken und Wissen."},
      {id:"white",       icon:"\u3030\ufe0f", desc:"White Noise \u2014 neutrale Abschirmung von au\u00dfen."}
    ],
    "5-SO": [
      {id:"wald",        icon:"\ud83c\udf32", desc:"Wald \u2014 stille Gemeinschaft mit der Natur."},
      {id:"eule",        icon:"\ud83e\udd89", desc:"Eule \u2014 W\u00e4chter des Wissens in der Nacht."},
      {id:"polareis",    icon:"\ud83e\uddca", desc:"Polareis \u2014 Reinheit und unber\u00fchrte Weite."}
    ],
    "5-SX": [
      {id:"bach",        icon:"\ud83c\udfde\ufe0f", desc:"Bach \u2014 klares, tiefes Vertrauen im Verborgenen."},
      {id:"wal",         icon:"\ud83d\udc0b", desc:"Walgesang \u2014 Kommunikation aus der Tiefe."},
      {id:"aquarium",    icon:"\ud83d\udc20", desc:"Aquarium \u2014 faszinierende Welt unter der Oberfl\u00e4che."}
    ],
    "6-SE": [
      {id:"feuer",       icon:"\ud83d\udd25", desc:"Feuer \u2014 W\u00e4rme und Sicherheit am vertrauten Ort."},
      {id:"herzschlag",  icon:"\u2764\ufe0f", desc:"Herzschlag \u2014 Urvertrauen in den eigenen K\u00f6rper."},
      {id:"katze",       icon:"\ud83d\udc31", desc:"Katze \u2014 Geborgenheit und entspannte Wachsamkeit."}
    ],
    "6-SO": [
      {id:"voegel",      icon:"\ud83d\udc26", desc:"Vogelstimmen \u2014 vertraute Gemeinschaft in der Natur."},
      {id:"wiese",       icon:"\ud83e\udd97", desc:"Sommerwiese \u2014 Sicherheit und Zugeh\u00f6rigkeit."},
      {id:"morgenkonzert",icon:"\ud83c\udf05", desc:"Morgenkonzert \u2014 verl\u00e4sslicher Neuanfang jeden Tag."}
    ],
    "6-SX": [
      {id:"gewitter",    icon:"\u26c8\ufe0f", desc:"Gewitter \u2014 Mut, sich der Angst zu stellen."},
      {id:"wolf",        icon:"\ud83d\udc3a", desc:"W\u00f6lfe \u2014 St\u00e4rke im Rudel, Loyalit\u00e4t und Schutz."},
      {id:"trommel",     icon:"\ud83e\udd41", desc:"Trommel \u2014 Kraft und Entschlossenheit."}
    ],
    "7-SE": [
      {id:"japanischer-garten",icon:"\ud83c\udf8b", desc:"Japanischer Garten \u2014 \u00c4sthetik und genussvolle Ruhe."},
      {id:"sommerregen", icon:"\ud83c\udf43", desc:"Sommerregen \u2014 lebendige Frische und Genuss."},
      {id:"chimes",      icon:"\ud83c\udf90", desc:"Windspiele \u2014 spielerische Leichtigkeit des Moments."}
    ],
    "7-SO": [
      {id:"mangroven",   icon:"\ud83c\udf3f", desc:"Mangroven \u2014 Tiefe hinter dem heiteren Schein."},
      {id:"regenwald",   icon:"\ud83c\udf33", desc:"Regenwald \u2014 F\u00fclle und Verbundenheit mit allem."},
      {id:"dschungelregen",icon:"\ud83c\udf27\ufe0f", desc:"Dschungelregen \u2014 Reinigung und Erdung."}
    ],
    "7-SX": [
      {id:"meer",        icon:"\ud83c\udf0a", desc:"Meer \u2014 grenzenlose Weite und Abenteuergeist."},
      {id:"delfin",      icon:"\ud83d\udc2c", desc:"Delfine \u2014 Freude, Spiel und Verbundenheit."},
      {id:"nordlichter", icon:"\ud83c\udf20", desc:"Nordlichter \u2014 das Staunen vor dem Wunderbaren."}
    ],
    "8-SE": [
      {id:"wuestensturm", icon:"\ud83c\udfdc\ufe0f", desc:"W\u00fcstensturm \u2014 rohe Kraft und \u00dcberlebensinstinkt."},
      {id:"elefanten",   icon:"\ud83d\udc18", desc:"Elefanten \u2014 St\u00e4rke, Schutz und Best\u00e4ndigkeit."},
      {id:"trommel",     icon:"\ud83e\udd41", desc:"Trommel \u2014 Urrhythmus und physische Pr\u00e4senz."}
    ],
    "8-SO": [
      {id:"savanne",     icon:"\ud83e\udd8b", desc:"Savanne \u2014 weites Territorium und Schutz der Gruppe."},
      {id:"wolf",        icon:"\ud83d\udc3a", desc:"W\u00f6lfe \u2014 Rudelf\u00fchrung und Loyalit\u00e4t."},
      {id:"feuer",       icon:"\ud83d\udd25", desc:"Feuer \u2014 Lagerfeuer, Gemeinschaft und W\u00e4rme."}
    ],
    "8-SX": [
      {id:"gewitter",    icon:"\u26c8\ufe0f", desc:"Gewitter \u2014 vollst\u00e4ndige Hingabe und Intensit\u00e4t."},
      {id:"meer",        icon:"\ud83c\udf0a", desc:"Meer \u2014 tiefe Leidenschaft und Naturgewalt."},
      {id:"klangschale", icon:"\ud83d\udd14", desc:"Klangschale \u2014 Zentrieren nach dem Sturm."}
    ],
    "9-SE": [
      {id:"bach",        icon:"\ud83c\udfde\ufe0f", desc:"Bach \u2014 sanfter, best\u00e4ndiger Fluss des Lebens."},
      {id:"wiese",       icon:"\ud83e\udd97", desc:"Sommerwiese \u2014 Frieden und entspannte F\u00fclle."},
      {id:"voegel",      icon:"\ud83d\udc26", desc:"Vogelstimmen \u2014 Harmonie und nat\u00fcrliche Stille."}
    ],
    "9-SO": [
      {id:"mangroven",   icon:"\ud83c\udf3f", desc:"Mangroven \u2014 Verwurzelung in der Gemeinschaft."},
      {id:"regenwald",   icon:"\ud83c\udf33", desc:"Regenwald \u2014 alles verbindet sich im gro\u00dfen Ganzen."},
      {id:"morgenkonzert",icon:"\ud83c\udf05", desc:"Morgenkonzert \u2014 friedliches Erwachen im Miteinander."}
    ],
    "9-SX": [
      {id:"meer",        icon:"\ud83c\udf0a", desc:"Meer \u2014 Verschmelzung und Grenzenlosigkeit."},
      {id:"om",          icon:"\ud83e\uddd8", desc:"Om \u2014 Verbindung mit dem Urgrund des Seins."},
      {id:"tibet",       icon:"\ud83c\udfd4\ufe0f", desc:"Tibet \u2014 stille Weite und innerer Frieden."}
    ]
  };

  let _stilleMatrixTyp = null;
  let _stilleMatrixInst = null;

  function _stilleMatrixHighlight() {
    document.querySelectorAll('.stille-typ-btn').forEach(b => {
      const sel = b.dataset.typ === String(_stilleMatrixTyp);
      b.style.opacity    = sel ? '1' : '0.55';
      b.style.background = sel ? 'rgba(255,255,255,0.12)' : 'transparent';
      b.style.transform  = sel ? 'scale(1.08)' : 'scale(1)';
    });
    document.querySelectorAll('.stille-inst-btn').forEach(b => {
      const sel = b.dataset.inst === _stilleMatrixInst;
      b.style.opacity    = sel ? '1' : '0.6';
      b.style.background = sel ? 'rgba(255,255,255,0.1)' : 'transparent';
      b.style.fontWeight = sel ? '700' : 'normal';
    });
  }

  function _stilleMatrixShow() {
    const resultEl = document.getElementById('stille-matrix-result');
    if (!resultEl) return;
    if (!_stilleMatrixTyp || !_stilleMatrixInst) { resultEl.style.display = 'none'; return; }
    const key = _stilleMatrixTyp + '-' + _stilleMatrixInst;
    const sounds = KLANG_MATRIX[key];
    if (!sounds) { resultEl.style.display = 'none'; return; }
    resultEl.style.display = 'block';
    resultEl.innerHTML = sounds.map(s => `
      <div style="display:flex;align-items:flex-start;gap:.75rem;padding:.7rem .9rem;background:var(--paper);border-radius:10px;border:1px solid var(--border);">
        <button data-matrix-klang="${s.id}" title="Diesen Klang ausw\u00e4hlen"
          style="flex-shrink:0;width:44px;height:44px;border-radius:50%;border:1.5px solid var(--copper);background:transparent;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;transition:background .15s;"
          onmouseenter="this.style.background='var(--paper)'"
          onmouseleave="this.style.background='transparent'"
        >${s.icon}</button>
        <div style="flex:1;min-width:0;">
          <p style="margin:0 0 .2rem;font-size:.8rem;font-weight:600;color:var(--copper);">${(KLANG_LABELS[s.id]||s.id.charAt(0).toUpperCase()+s.id.slice(1).replace(/-/g,' '))}</p>
          <p style="margin:0;font-size:.78rem;color:var(--ink-muted);line-height:1.45;">${s.desc}</p>
        </div>
      </div>
    `).join('');
    resultEl.querySelectorAll('[data-matrix-klang]').forEach(btn => {
      btn.addEventListener('click', () => {
        const kid = btn.dataset.matrixKlang;
        gewaehlterKlang = kid;
        document.querySelectorAll('.stille-klang-btn').forEach(b => {
          const isThis = b.dataset.klang === kid;
          b.style.borderColor = isThis ? 'var(--copper)' : 'var(--border)';
          b.style.background  = isThis ? 'var(--paper)' : 'transparent';
        });
        const infoEl = document.getElementById('stille-klang-info');
        if (infoEl) infoEl.textContent = KLANG_INFO[kid] || '';
        if (REAL_SOUNDS_ALL.has(kid) && !klangFetchCache[kid]) {
          klangFetchCache[kid] = fetch(klangCdnUrl(kid)).then(r => r.arrayBuffer()).catch(() => null);
        }
        if (laedt && interval) starteKlang(kid);
      });
    });
  }

  document.querySelectorAll('.stille-typ-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _stilleMatrixTyp = Number(btn.dataset.typ);
      _stilleMatrixHighlight();
      _stilleMatrixShow();
    });
  });
  document.querySelectorAll('.stille-inst-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _stilleMatrixInst = btn.dataset.inst;
      _stilleMatrixHighlight();
      _stilleMatrixShow();
    });
  });

}

function musikPage() {
  const TYPEN = [
    { nr: 1, name: "Der Reformer",    tier: "Lippizaner",  vid: "mumR1QESNzQ" },
    { nr: 2, name: "Der Helfer",      tier: "Arabisches Vollblut", vid: "6nCg7G-91Lc" },
    { nr: 3, name: "Der Macher",      tier: "Lachs",       vid: "8SmbE-4Za_k" },
    { nr: 4, name: "Der Individualist", tier: "Blaue Elster", vid: "R09IW7vjcxQ" },
    { nr: 5, name: "Der Beobachter",  tier: "Mustang",     vid: "rzkLF6KDCFw" },
    { nr: 6, name: "Der Loyale",      tier: "Sch\u00e4ferhund", vid: "rIfT6OQgOAU" },
    { nr: 7, name: "Der Enthusiast",  tier: "Lippenbär",  vid: "BVYOCZ6xMlA" },
    { nr: 8, name: "Der Herausforderer", tier: "L\u00f6we",     vid: "afuljgIKAOU" },
    { nr: 9, name: "Der Friedensstifter", tier: "Elefant", vid: "prWKIp0Voq8" },
  ];

  const kacheln = TYPEN.map(t => `
    <div class="musik-card" data-vid="${t.vid}" style="background:var(--paper);border-radius:14px;overflow:hidden;cursor:pointer;box-shadow:0 1px 6px rgba(0,0,0,0.08);transition:box-shadow 0.2s;">
      <div class="musik-thumb" style="position:relative;background:#111;aspect-ratio:16/9;">
        <img src="https://img.youtube.com/vi/${t.vid}/mqdefault.jpg"
             alt="Entspannungs- und Heilungsmusik Typ ${t.nr}"
             style="width:100%;height:100%;object-fit:cover;display:block;opacity:0.85;" loading="lazy"/>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
          <div style="width:52px;height:52px;border-radius:50%;background:rgba(165,96,61,0.88);display:flex;align-items:center;justify-content:center;">
            <span style="color:#fff;font-size:1.4rem;margin-left:4px;">\u25b6</span>
          </div>
        </div>
      </div>
      <div style="padding:0.85rem 1rem 1rem;">
        <p style="margin:0 0 0.2rem;font-size:0.75rem;color:var(--copper);text-transform:uppercase;letter-spacing:0.1em;">Typ ${t.nr}</p>
        <h3 style="margin:0;font-size:1.05rem;line-height:1.3;">${t.name}</h3>
        <p style="margin:0.35rem 0 0;font-size:0.82rem;color:var(--ink-muted);">ca. 1 Std. 20 Min. \u00b7 YouTube</p>
      </div>
      <div class="musik-player" style="display:none;">
        <div style="position:relative;aspect-ratio:16/9;background:#000;">
          <iframe width="100%" height="100%" style="border:none;display:block;"
            src="https://www.youtube.com/embed/${t.vid}?autoplay=1&rel=0"
            allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
      </div>
    </div>
  `).join("");

  return shell(`
    ${pageHeader("musik")}
    <section class="narrow" style="padding-bottom:3rem;">
      <p class="eyebrow">Praxis \u00b7 Klang \u00b7 Kontemplation</p>
      <h1 class="h1--tip" style="margin-bottom:0.3rem;">Entspannungs- und Heilungsmusik</h1>

      <div style="max-width:520px;margin-bottom:1.8rem;">
        <p style="font-size:0.97rem;line-height:1.75;color:var(--ink);margin:0 0 0.9rem;">
          Neun vollst\u00e4ndige Alben \u2014 eines f\u00fcr jeden Enneagrammtyp. Jedes Album umfasst 25 Titel und begleitet dich ca. 1 Stunde 20 Minuten. Die Musik ist nicht nur angenehm im Hintergrund: sie wurde bewusst so komponiert, dass Herzrhythmus, Atemfrequenz und das vegetative Nervensystem in einen Zustand tiefer Entspannung finden.
        </p>
        <p style="font-size:0.97rem;line-height:1.75;color:var(--ink);margin:0 0 0.9rem;">
          Eingearbeitet sind Techniken wie <strong>binaurale Beats</strong> und <strong>Neuro-Entrainment</strong> \u2014 sanfte Frequenzmuster, die das Gehirn einladen, von Alltagsaktivit\u00e4t in tiefere Entspannungszust\u00e4nde (Alpha- und Theta-Wellen) zu gleiten. Das geschieht unmerklich, ohne dass man es bewusst steuern muss.
        </p>
        <p style="font-size:0.97rem;line-height:1.75;color:var(--ink);margin:0 0 0.9rem;">
          Jedes Album ist auf die seelische Qualit\u00e4t seines Enneagrammtyps abgestimmt: Tempo, Tonart, Klangtextur und Dynamik folgen dem inneren Rhythmus des jeweiligen Typs. So wird Musik zur Br\u00fccke \u2014 zwischen dem Muster, das uns formt, und dem stillen Raum dahinter.
        </p>
        <p style="font-size:0.97rem;line-height:1.75;color:var(--ink);margin:0;">
          Wer keine klassische Stille-Praxis mag, findet hier eine echte Alternative: Handy zur Seite legen, Kopfh\u00f6rer auf, Augen schlie\u00dfen \u2014 und einfach ankommen.
        </p>
      </div>

      <p style="font-size:0.82rem;color:var(--ink-muted);margin-bottom:2rem;">
        Die Alben laufen auf YouTube. Ein Tipp auf das Thumbnail \u00f6ffnet den Player direkt hier.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.1rem;">
        ${kacheln}
      </div>

      <div style="margin-top:3.5rem;padding-top:2.5rem;border-top:1px solid var(--line);max-width:720px;">
        <p class="eyebrow">Vertiefung \u00b7 27 Subtypen</p>
        <h2 class="h1--tip" style="margin-bottom:0.3rem;font-size:1.5rem;">Die 27 Subtyp-Songs</h2>
        <p style="font-size:0.97rem;line-height:1.75;color:var(--ink);margin:0 0 1.1rem;">
          Musik als Zugang zu den Prinzipien des Enneagramms ist keine neue Idee, sondern eine alte Tradition. Schon G. I. Gurdjieff lehrte seine sogenannten \u201eHeiligen T\u00e4nze\u201c (Movements) \u2014 choreografierte Bewegungsabfolgen zu eigens komponierter Musik, die einen Zugang zu inneren Prinzipien er\u00f6ffnen sollten, den der reine Verstand allein nicht erreicht. Claudio Naranjo, mein eigener Lehrer, schlug in seinen Seminaren immer wieder die Br\u00fccke von klassischen Komponisten zu den neun Typen und ihren Subtypen \u2014 er setzte sich selbst ans Klavier und zeigte, wie sich etwa im Werk Beethovens (sexuelle Sechs) oder Chopins (sexuelle F\u00fcnf) der jeweilige Enneagramm-Charakter unmittelbar in der Musik selbst ausdr\u00fcckt, nicht nur in der Biografie des Komponisten.
        </p>
        <p style="font-size:0.97rem;line-height:1.75;color:var(--ink);margin:0 0 2rem;">
          Diese Tradition f\u00fchre ich mit den 27 Subtyp-Songs fort: Zu jedem der 27 Subtypen \u2014 nicht nur zu den neun Haupttypen \u2014 gibt es einen eigens komponierten Song, deutsch und englisch, bei dem sowohl Melodie als auch Text bewusst auf das jeweilige Thema abgestimmt sind. Wer sich Zeit nimmt, hinzuh\u00f6ren, findet darin oft einen Zugang, der sich mit reinem Verstehen allein nicht erschlie\u00dft \u2014 Musik als Wegbegleiterin der Vertiefung, nicht nur als Illustration.
        </p>
        ${SUBTYP_SONG_TYPEN.map(t => `
          <div style="margin-bottom:2.2rem;">
            <h3 style="margin:0 0 0.8rem;font-size:1.05rem;color:${typeColor(t.nr)};">Typ ${t.nr} \u00b7 ${t.name}</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:0.9rem;">
              ${["SE","SO","SX"].map(inst => {
                const code = `${inst}${t.nr}`;
                const song = SUBTYPE_SONGS[code];
                if (!song) return "";
                return ["de","en"].map(lang => `
                  <div class="musik-card" data-vid="${song[lang]}" style="background:var(--paper);border-radius:12px;overflow:hidden;cursor:pointer;box-shadow:0 1px 5px rgba(0,0,0,0.07);">
                    <div class="musik-thumb" style="position:relative;background:#111;aspect-ratio:16/9;">
                      <img src="https://img.youtube.com/vi/${song[lang]}/mqdefault.jpg"
                           alt="${code} Song ${lang === 'de' ? 'Deutsch' : 'Englisch'}"
                           style="width:100%;height:100%;object-fit:cover;display:block;opacity:0.85;" loading="lazy"/>
                      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
                        <div style="width:38px;height:38px;border-radius:50%;background:rgba(165,96,61,0.88);display:flex;align-items:center;justify-content:center;">
                          <span style="color:#fff;font-size:1.05rem;margin-left:3px;">\u25b6</span>
                        </div>
                      </div>
                    </div>
                    <div style="padding:0.55rem 0.7rem 0.65rem;">
                      <p style="margin:0;font-size:0.85rem;font-weight:600;">${code} \u00b7 ${lang === 'de' ? 'DE' : 'EN'}</p>
                    </div>
                    <div class="musik-player" style="display:none;">
                      <div style="position:relative;aspect-ratio:16/9;background:#000;">
                        <iframe width="100%" height="100%" style="border:none;display:block;"
                          src="https://www.youtube.com/embed/${song[lang]}?autoplay=1&rel=0"
                          allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                      </div>
                    </div>
                  </div>
                `).join("");
              }).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Sieben spirituelle Lebenskunst-Schritte f\u00fcr den Alltag \u2014 der ideale Begleiter zur Entspannungs- und Heilungsmusik.", "7 Wege zu Dir selbst \u2013 Lebenskunst f\u00fcr den Alltag")}
      ${bookTip("nichts-und-alles", "Stilles Buch \u00fcber das Schauen nach innen \u2014 Bewusstsein, Raum und innere Freiheit.", "Nichts und Alles")}
      ${bookTip("der-raum-hinter-allem", "Jenseits aller Muster: der stille Raum, der bleibt, wenn Identifikation nachl\u00e4sst \u2014 ein meditatives Werk \u00fcber Bewusstsein und Freiheit.", "Der Raum hinter allem")}
      ${relatedLinks([{route:"detlef-rathmer-jazz|dr-jazz",label:"Jazz-Alben von Detlef Rathmer"},{route:"stille",label:"9 Minuten Stille"},{route:"detlef-rathmer-jazz|dr-enn-alben",label:"Enneagramm-Alben"}])}

      <div style="margin-top:2.5rem;padding:1.2rem 1.4rem;background:var(--paper);border-radius:14px;border-left:3px solid var(--copper);max-width:480px;margin-left:auto;margin-right:auto;">
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:var(--copper);text-transform:uppercase;letter-spacing:0.09em;">Lieber in absoluter Stille?</p>
        <p style="margin:0 0 0.9rem;font-size:0.95rem;line-height:1.65;color:var(--ink);">Nach dieser tiefen Klangreise g\u00f6nnen Sie sich vielleicht die absolute Stille \u2014 neun Minuten f\u00fcr jeden Enneagrammtyp, er\u00f6ffnet und beschlossen von einem Gong.</p>
        <div style="display:flex;gap:0.8rem;flex-wrap:wrap;">
          <button class="secondary" data-route="stille" style="font-size:0.9rem;">\u23f1 Zur 9-Minuten-Stille \u2192</button>
          <button class="secondary" data-route="solfeggio-frequenzen" style="font-size:0.9rem;">\ud83c\udfa7 Die 9 Solfeggio-Frequenzen \u2192</button>
        </div>
      </div>
    </section>
  `);
}

function _musikInit() {
  document.querySelectorAll(".musik-card").forEach(card => {
    card.addEventListener("click", () => {
      const player = card.querySelector(".musik-player");
      const thumb  = card.querySelector(".musik-thumb");
      if (!player) return;
      const offen = player.style.display !== "none";
      // Alle anderen schlie\u00dfen
      document.querySelectorAll(".musik-player").forEach(p => { p.style.display = "none"; });
      document.querySelectorAll(".musik-thumb").forEach(t => { t.style.display = ""; });
      if (!offen) {
        player.style.display = "";
        if (thumb) thumb.style.display = "none";
      }
    });
  });
}

function typenvergleichePage() {
  const VERGLEICHE = [
    { a:1, b:2, titel:"Bilder aufh\u00e4ngen" },
    { a:1, b:3, titel:"Wand streichen" },
    { a:1, b:4, titel:"Vase malen" },
    { a:1, b:5, titel:"Auto reparieren" },
    { a:1, b:6, titel:"Football spielen" },
    { a:1, b:7, titel:"Festmahl genie\u00dfen" },
    { a:1, b:8, titel:"Fitnesstraining" },
    { a:1, b:9, titel:"Meinung \u00e4u\u00dfern" },
    { a:2, b:3, titel:"Marathonlauf" },
    { a:2, b:4, titel:"Umgang mit Kummer" },
    { a:2, b:5, titel:"Weg zur Geburtstagsparty" },
    { a:2, b:6, titel:"Sich warm halten am Lagerfeuer" },
    { a:2, b:7, titel:"Buchlekt\u00fcre" },
    { a:2, b:8, titel:"Tandemfahren" },
    { a:2, b:9, titel:"Beschenken vs. Geschenk erhalten" },
    { a:3, b:4, titel:"Umzug" },
    { a:3, b:5, titel:"Schach spielen" },
    { a:3, b:6, titel:"Navigation im Labyrinth" },
    { a:3, b:7, titel:"Jonglage" },
    { a:3, b:8, titel:"Etwas in Angriff nehmen" },
    { a:3, b:9, titel:"Entspannung am Strand" },
    { a:4, b:5, titel:"Konzert zu zweit" },
    { a:4, b:6, titel:"Gipfelerlebnis" },
    { a:4, b:7, titel:"Parkbesuch" },
    { a:4, b:8, titel:"Gassi gehen" },
    { a:4, b:9, titel:"Gartenpflege" },
    { a:5, b:6, titel:"Poker spielen" },
    { a:5, b:7, titel:"Organisiert bleiben" },
    { a:5, b:8, titel:"Platzanspr\u00fcche" },
    { a:5, b:9, titel:"Gespr\u00e4ch am Wasserspender" },
    { a:6, b:7, titel:"Tennis spielen" },
    { a:6, b:8, titel:"Bevorzugte Kampfkunst" },
    { a:6, b:9, titel:"Schwimmen gehen" },
    { a:7, b:8, titel:"Nachtisch essen" },
    { a:7, b:9, titel:"Ein ruhiger Tag am See" },
    { a:8, b:9, titel:"Streit haben" },
  ];

  // Nach erstem Typ gruppieren
  const gruppen = {};
  VERGLEICHE.forEach(v => {
    if (!gruppen[v.a]) gruppen[v.a] = [];
    gruppen[v.a].push(v);
  });

  const filterBar = Array.from({length:9}, (_,i) => i+1).map(n =>
    `<button class="tv-filter${n===1?" is-active":""}" data-typ="${n}">Typ ${n}</button>`
  ).join("");

  const cards = VERGLEICHE.map(v => `
    <div class="tv-card" data-gruppe="${v.a}">
      <div class="tv-card__badge">Typ ${v.a} \u00b7 Typ ${v.b}</div>
      <img class="tv-card__img" src="${R2_CDN}assets/vergleiche/vergleich-${v.a}-${v.b}.jpg"
        alt="Typenvergleich ${v.a} und ${v.b}: ${v.titel}" loading="lazy" />
      <p class="tv-card__titel">${v.titel}</p>
    </div>
  `).join("");

  return shell(`
    ${pageHeader("typenvergleiche")}
    <div class="page-hero">
      <p class="page-hero__label">Schaubild</p>
      <h1 class="page-hero__title">36 Typenvergleiche</h1>
      <p class="page-hero__sub">Wie gehen die 9 Typen mit denselben Alltagssituationen um? Jedes Bild zeigt zwei Typen im direkten Vergleich.</p>
    </div>
    <div class="tv-filterbar">${filterBar}</div>
    <div class="tv-grid">${cards}</div>
    ${relatedLinks([
      {route:"differenzierung", label:"Differenzierung"},
      {route:"lookalike-typen", label:"Lookalike-Typen"},
      {route:"interessante-erkenntnisse", label:"Interessante Erkenntnisse"},
    ])}
  `);
}

function registerPage() {
  // Alphabetisch sortieren und nach Anfangsbuchstabe gruppieren
  const sorted = [...registerEntries].sort((a, b) =>
    a.term.localeCompare(b.term, "de", { sensitivity: "base" })
  );
  const groups = {};
  sorted.forEach(entry => {
    const letter = entry.term[0].toUpperCase();
    const key = /[A-Z\u00c4\u00d6\u00dca-z\u00e4\u00f6\u00fc]/.test(letter) ? letter : "#";
    if (!groups[key]) groups[key] = [];
    groups[key].push(entry);
  });
  const letters = Object.keys(groups).sort((a, b) => a.localeCompare(b, "de"));
  const jumpBar = letters.map(l =>
    `<a class="register-jump" href="#register" onclick="document.getElementById('reg-${l}')?.scrollIntoView({behavior:'smooth'});return false;">${l}</a>`
  ).join("");
  const sections = letters.map(letter => {
    const items = groups[letter].map(e => `
      <div class="register-entry" data-route="${e.route}">
        <span class="register-entry__term">${e.term}</span>
        <span class="register-entry__desc">${e.description}</span>
        <span class="register-entry__arrow">\u2192</span>
      </div>
    `).join("");
    return `
      <div class="register-section" id="reg-${letter}">
        <h2 class="register-letter">${letter}</h2>
        ${items}
      </div>
    `;
  }).join("");
  return shell(`
    ${pageHeader("register")}
    <div class="page-hero">
      <p class="page-hero__label">Nachschlagewerk</p>
      <h1 class="page-hero__title">Register</h1>
      <p class="page-hero__sub">Alle Begriffe, Subtypen und Themen auf einen Blick &ndash; anklicken und direkt zum Inhalt springen.</p>
    </div>
    <div class="register-jumpbar">${jumpBar}</div>
    <div class="register-wrap">${sections}</div>
  `);
}

function verhaltensPage(key) {
  const d = VERHALTEN[key];
  if (!d) return shell(`<p>Seite nicht gefunden.</p>`);
  const typenHtml = d.typen.map(t => `
    <div class="vb-typ">
      <h3 class="vb-typ__head"><span class="vb-typ__nr">Typ ${t.nr}</span> &ndash; ${t.name}</h3>
      <p class="vb-typ__text">${t.verhalten}</p>
    </div>
  `).join("");
  const buecherHtml = (d.buecher && d.buecher.length) ? `
    <div class="vb-buecher">
      <h3 class="vb-buecher__title">Buchtipps zum Thema</h3>
      ${d.buecher.map(b => `
        <a class="vb-buch" href="${b.link}" target="_blank" rel="noopener">
          <span class="vb-buch__icon">\ud83d\udcd6</span>
          <span class="vb-buch__body">
            <span class="vb-buch__name">${b.title}</span>
            <span class="vb-buch__hint">${b.hint}</span>
          </span>
        </a>
      `).join("")}
    </div>
  ` : "";
  return shell(`
    ${pageHeader(key)}
    <div class="page-hero">
      <h1 class="page-hero__title">${d.title}</h1>
    </div>
    <div class="schaubild-wrap">
      <img src="${d.imgSrc}" alt="${d.imgAlt}" class="psycho-img" />
    </div>
    <div class="vb-section">
      <p class="vb-intro">${d.intro}</p>
      ${typenHtml}
      <p class="vb-anmerkung"><em>Anmerkung: ${d.anmerkung}</em></p>
      ${buecherHtml}      ${relatedLinks([
        {route:"beziehungen", label:"Beziehungen"},
        {route:"naehe", label:"N\xe4he & Distanz"},
        {route:"verbale-signale", label:"Verbale Signale"},
      ])}
    </div>
  `);
}


// \u2500\u2500 Favoriten \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function _getFavs() {
  try { return JSON.parse(localStorage.getItem('kompass-favs') || '[]'); } catch(e) { return []; }
}
function _setFavs(a) { localStorage.setItem('kompass-favs', JSON.stringify(a)); }
function _isFav(r) { return _getFavs().some(f => f.route === r); }
function _toggleFav(r, label) {
  const a = _getFavs();
  const i = a.findIndex(f => f.route === r);
  if (i >= 0) a.splice(i, 1); else a.unshift({ route: r, label });
  _setFavs(a);
}
function _favLabel(r) {
  if (!r) return null;
  const k = KRIMINAL_PORTRAITS.find(p => p.route === r);
  if (k) return k.name;
  const bp = BERUEHMT_PORTRAITS.find(p => p.route === r);
  if (bp) return bp.name;
  if (r.startsWith('subtype/')) {
    const c = r.split('/')[1];
    const s = subtypeProfiles[c];
    return s ? (s.title || c) : null;
  }
  if (typeof registerEntries !== 'undefined') {
    const reg = registerEntries.find(e => e.route === r);
    if (reg) return reg.term;
  }
  return null;
}

function favoritenPage() {
  const favs = _getFavs();
  const emptyMsg = '<p class="vb-intro" style="color:var(--muted);padding:1rem 0;">'
    + 'Noch keine Favoriten gespeichert.<br>'
    + 'Auf einer Portr\xe4t- oder Subtyp-Seite das Herz-Symbol antippen, um die Seite hier zu merken.'
    + '</p>';
  const items = favs.map(f =>
    '<div data-route="' + f.route + '" class="fav-item">'
    + '<span class="fav-item-label">' + f.label + '</span>'
    + '<span class="fav-item-heart" style="color:var(--gold);font-size:1.2rem;">\u2665</span>'
    + '</div>'
  ).join('');
  const clearBtn = favs.length > 0
    ? '<button id="fav-clear-btn" class="fav-clear-btn">Alle l\xf6schen</button>'
    : '';
  return shell(
    '<div class="page-container">'
    + pageHeader('favoriten')
    + '<h2 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">Meine Favoriten</h2>'
    + (favs.length === 0 ? emptyMsg : items)
    + clearBtn
    + '</div>'
  );
}


// \u2500\u2500 Foto-Crop-Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function openCropDialog(src, onConfirm) {
  const SIZE = 280; // Kreis-Durchmesser in px

  const overlay = document.createElement("div");
  overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.82);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;";

  overlay.innerHTML = `
    <p style="color:#fff;font-size:0.9rem;margin:0;">Bild verschieben &amp; zoomen, dann best\u00e4tigen</p>
    <div id="crop-wrap" style="position:relative;width:${SIZE}px;height:${SIZE}px;border-radius:50%;overflow:hidden;border:3px solid #c4a456;cursor:grab;touch-action:none;flex-shrink:0;">
      <img id="crop-img" src="${src}" style="position:absolute;transform-origin:0 0;user-select:none;pointer-events:none;" />
      <div style="position:absolute;inset:0;border-radius:50%;box-shadow:0 0 0 9999px rgba(0,0,0,0.55);pointer-events:none;"></div>
    </div>
    <div style="display:flex;align-items:center;gap:0.6rem;">
      <span style="color:#aaa;font-size:0.8rem;">\u2212</span>
      <input id="crop-zoom" type="range" min="50" max="300" value="100" style="width:160px;accent-color:#c4a456;" />
      <span style="color:#aaa;font-size:0.8rem;">\uff0b</span>
    </div>
    <div style="display:flex;gap:0.8rem;">
      <button id="crop-ok" style="background:#c4a456;color:#1a1208;border:none;border-radius:20px;padding:0.55rem 1.6rem;font-size:0.95rem;font-weight:700;cursor:pointer;">\u2713 \u00dcbernehmen</button>
      <button id="crop-cancel" style="background:rgba(255,255,255,0.12);color:#fff;border:none;border-radius:20px;padding:0.55rem 1.2rem;font-size:0.95rem;cursor:pointer;">Abbrechen</button>
    </div>`;

  document.body.appendChild(overlay);

  const wrap  = overlay.querySelector("#crop-wrap");
  const img   = overlay.querySelector("#crop-img");
  const zoom  = overlay.querySelector("#crop-zoom");
  let ox = 0, oy = 0, scale = 1;
  let dragging = false, startX = 0, startY = 0, baseOx = 0, baseOy = 0;

  function applyTransform() {
    img.style.transform = `translate(${ox}px,${oy}px) scale(${scale})`;
  }

  function centerImage() {
    img.onload = () => {
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const fit = Math.max(SIZE / iw, SIZE / ih);
      scale = fit;
      zoom.value = Math.round(fit * 100);
      ox = (SIZE - iw * scale) / 2;
      oy = (SIZE - ih * scale) / 2;
      applyTransform();
    };
  }
  centerImage();

  zoom.addEventListener("input", () => {
    const cx = SIZE / 2, cy = SIZE / 2;
    const newScale = zoom.value / 100;
    ox = cx - (cx - ox) * (newScale / scale);
    oy = cy - (cy - oy) * (newScale / scale);
    scale = newScale;
    applyTransform();
  });

  // Maus-Drag
  wrap.addEventListener("mousedown", e => { dragging=true; startX=e.clientX; startY=e.clientY; baseOx=ox; baseOy=oy; wrap.style.cursor="grabbing"; });
  document.addEventListener("mousemove", e => { if(!dragging) return; ox=baseOx+(e.clientX-startX); oy=baseOy+(e.clientY-startY); applyTransform(); });
  document.addEventListener("mouseup", () => { dragging=false; wrap.style.cursor="grab"; });

  // Touch-Drag
  wrap.addEventListener("touchstart", e => { e.preventDefault(); const t=e.touches[0]; dragging=true; startX=t.clientX; startY=t.clientY; baseOx=ox; baseOy=oy; }, {passive:false});
  wrap.addEventListener("touchmove", e => { e.preventDefault(); if(!dragging) return; const t=e.touches[0]; ox=baseOx+(t.clientX-startX); oy=baseOy+(t.clientY-startY); applyTransform(); }, {passive:false});
  wrap.addEventListener("touchend", () => { dragging=false; });

  overlay.querySelector("#crop-cancel").addEventListener("click", () => overlay.remove());

  overlay.querySelector("#crop-ok").addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 400;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(200, 200, 200, 0, Math.PI * 2);
    ctx.clip();
    const ratio = 400 / SIZE;
    ctx.drawImage(img, ox * ratio, oy * ratio, img.naturalWidth * scale * ratio, img.naturalHeight * scale * ratio);
    overlay.remove();
    onConfirm(canvas.toDataURL("image/jpeg", 0.88));
  });
}

function render() {
  const routes = {
    start: startPage,
    leseprobe: leseprobePage,
    inhaltsverzeichnis: inhalts\u00fcbersichtPage,
    dashboard: dashboardPage,
    typalbum: typalbumPage,
    reflection: reflectionPage,
    path: pathPage,
    tools: toolsPage,
    healing: healingPage,
    oils: oilsPage,
    tcm: tcmPage,
    kindheit: kindheitPage,
    music: musicPage,
    practice: practicePage,
    "praxistipps-heilpraktiker": praxistippsHeilpraktikerPage,
    library: libraryPage,
    knowledge: typesPage,
    types: typesPage,
    wissen: knowledgePage,
    profile: profilePage,
    impressum: impressumPage,
    datenschutz: datenschutzPage,
    typentest: typentestPage,
    "typentest-motivational": typentestMotivationalPage,
    "motivations-schnelltest": motivationsSchnelltestPage,
    psychogramme: psychogrammePage,
    "heilungsweg": heilungswegPage,
    "kindliche-temperamente": kindlicheTemperamentePage,
    "tee-enneagramm": teeEnneagrammPage,
    "aetherische-oele": aetherischeOelePage,
    "angst-essenz": angstEssenzPage,
    "edelsteine": edelsteinePage,
    "heiltees": heilteesPage,
    "homoeopathie": homoeopathiePage,
    "mineralstoffe": mineralstoffePage,
    "bachblueten": bachbluetenPage,
    "subtypen-checklisten": subtypChecklistePage,
    "subtypen-schaubilder": subtypeSchaubilderPage,
    "perspektiven": perspektivenPage,
    "portraits-wegbegleiter": portraitsWegbegleiterPage,
    "mangelgefuehle": mangelgefuehlePage,
    "mikroimpressionen": mikroimpresionenPage,
    "aufmerksamkeitsfokus": aufmerksamkeitsfokusPage,
    "empfindliche-punkte": empfindlichePunktePage,
    "befreiende-fragen": befreiendeFragenPage,
    "fuehrungsstile": fuehrungsstilePage,
    "gifte-des-geistes": gifteDesGeistesPage,
    "drei-zentren": dreiZentrenPage,
    "ego-persoenlichkeit": egoPersoenlichkeitPage,
    "zentren-weltwahrnehmung": zentrenWeltwahrnehmungPage,
    "energetische-bewegungen": energetischeBewegungPage,
    "lookalike-typen": lookalikeTypenPage,
    "bewaeltigungsstrategie": bewaeltigungsstrategiePage,
    "bedrohungsszenarien": bedrohungsszenarienPage,
    "beziehungen": beziehungenPage,
    "tierentsprechungen": tierentsprechungenPage,
    "tierlexikon": tierlexikonPage,
    "lebensmusterkompass": lebensmusterkompassPage,
    "musterradar": musterradarPage,
    "enneagramm-rad": enneagrammRadPage,
    "psychosomatik": psychosomatikPage,
    "symptomlexikon": symptomlexikonPage,
    "tierforscher-uebereinstimmung": tierforscherUebereinstimmungPage,
    "bewusstseinsgrad-normalverteilung": bewusstseinsgradNormalverteilungPage,
    "tritypen": tritypenPage,
    "triadendefizite": triadendefizitePage,
    "differenzierung": differenzierungPage,
    "situationskompass": situationskompasPage,
    "kommunikationsguide": kommunikationsguidePage,
    "krisenkompass": krisenkompassPage,
    "dialektische-struktur": dialektischeStrukturPage,
    "verbale-signale": verbaleSignalePage,
    "naehe": naehePage,
    "nonverbale-signale": nonverbaleSignalePage,
    "zentrale-fragen": zentraleFragenPage,
    "60-sekunden-scan": sechzigSekundenScanPage,
    "wahrnehmungsstile": wahrnehmungsstilePage,
    "das-event": dasEventPage,
    "weihnachtsgeschenke": weihnachtsgeschenkePage,
    "obstsorten": obstsortPage,
    "gemuesesorten": gemuesesortenPage,
    "weinsorten": weinsortenPage,
    "brotsorten": brotsortenPage,
    "kaesesorten": kaesesortenPage,
    "gewuerzarten": gewuerzartenPage,
    "getreidearten": getreideartenPage,
    "kaffeearten": kaffeeartenPage,
    "epochen-weltgeschichte": epochenWeltgeschichtePage,
    "affenarten": affenartenPage,
    "baumarten": baumartenPage,
    "berge-der-9-typen": bergeDer9TypenPage,
    "9-jahreszyklen": neunJahreszyklenPage,
    "temperamentenlehre-antike": temperamentenlehreAntikePage,
    "luxusautos-der-9-typen": luxusautosDer9TypenPage,
    "luxusuhren-der-9-typen": luxusuhrend9TypenPage,
    "brillenmodelle-der-9-typen": brillenmodelleDer9TypenPage,
    "flugzeugmodelle-der-9-typen": flugzeugmodelleDer9TypenPage,
    "hauptfokus-des-bewusstseins-der-9-typen": hauptfokusBewusstseinsDer9TypenPage,
    "dynamik-des-bewusstseinszustandes": dynamikBewusstseinszustandesPage,
      "beruehmte-persoenlichkeiten": beruehmtePersoenlichkeitenPage,
      "enneagramm-homoeopathie": enneagrammHomoeopathiePage,
      ...Object.fromEntries(HOMOEOPATHIE_FAELLE.map(f => [f.route, () => homoeopathieFallPage(f.route)])),
      "enneagramm-astrologie": enneagrammAstrologiePage,
      "enneagramm-odyssee": enneagrammOdysseePage,
      "enneagramm-wohnraumarchitektur": enneagrammWohnraumarchitekturPage,
      "enneagramm-zimmerpflanzen": enneagrammZimmerpflanzenPage,
      "enneagramm-reflexzonentherapie": enneagrammReflexzonentherapiePage,
      "enneagramm-handanalyse": enneagrammHandanalysePage,
      "enneagramm-akupunktur": enneagrammAkupunkturPage,
      "enneagramm-zahnpsychosomatik": enneagrammZahnpsychosomatikPage,
      "enneagramm-kunst": enneagrammKunstUebersichtPage,
      ...Object.fromEntries([1,2,3,4,5,6,7,8,9].map(n => ["enneagramm-kunst-typ-"+n, () => enneagrammKunstTypPage(n)])),
      "enneagramm-filme": enneagrammFilmeUebersichtPage,
      ...Object.fromEntries([1,2,3,4,5,6,7,8,9].map(n => ["enneagramm-filme-typ-"+n, () => enneagrammFilmeTypPage(n)])),
      "persoenlichkeitsmodelle-vergleich": persoenlichkeitsmodelleVergleichPage,
      "astrologie-reinhold-messner": astrologieReinholdMessnerPage,
      "astrologie-marilyn-monroe": astrologieMarilynMonroePage,
      "astrologie-romy-schneider": astrologieRomySchneiderPage,
      "astrologie-john-lennon": astrologieJohnLennonPage,
      "astrologie-albert-einstein": astrologieAlbertEinsteinPage,
      "astrologie-boris-becker": astrologieBorisBeckerPage,
      "astrologie-gerhard-schroeder": astrologieGerhardSchroederPage,
      "astrologie-angela-merkel": astrologieAngelaMerkelPage,
      "beruehmte-sting": stingPortraitPage,
      "beruehmte-ludwig-wittgenstein": ludwigWittgensteinPortraitPage,
      "beruehmte-robert-de-niro": robertDeNiroPortraitPage,
      "beruehmte-magnus-carlsen": magnusCarlsenPortraitPage,
      "beruehmte-peter-sharpe": peterSharpePortraitPage,
      "beruehmte-anthony-hopkins": anthonyHopkinsPortraitPage,
      "beruehmte-pierce-brosnan": pierceBrosnanPortraitPage,
      "beruehmte-christoph-waltz": christophWaltzPortraitPage,
      "beruehmte-marie-kondo": marieKondoPortraitPage,
      "beruehmte-dan-brown": danBrownPortraitPage,
      "beruehmte-gianna-nannini": giannaNanniniPortraitPage,
      "beruehmte-astrid-lindgren": astridLindgrenPortraitPage,
      "beruehmte-fritz-wepper": fritzWepperPortraitPage,
      "beruehmte-reinhold-wuerth": reinholdWuerthPortraitPage,
      "beruehmte-ken-follett": kenFollettPortraitPage,
      "beruehmte-lena-meyer-landrut": lenaMeyerLandrutPortraitPage,
      "beruehmte-brigitte-bardot": brigitteBardotPortraitPage,
      "beruehmte-brad-pitt": bradPittPortraitPage,
      "beruehmte-heidi-klum": heidiKlumPortraitPage,
      "beruehmte-dolly-parton": dollyPartonPortraitPage,
      "beruehmte-kai-pflaume": kaiPflaumePortraitPage,
      "beruehmte-meg-ryan": megRyanPortraitPage,
      "beruehmte-marilyn-monroe": marilynMonroePortraitPage,
      "beruehmte-dieter-bohlen": dieterBohlenPortraitPage,
      "beruehmte-marlene-zuk": marleneZukPortraitPage,
      "beruehmte-freddie-mercury": freddieMercuryPortraitPage,
      "beruehmte-voltaire": voltairePortraitPage,
      "beruehmte-arthur-rimbaud": arthurRimbaudPortraitPage,
      "beruehmte-honore-de-balzac": honoreDeBalzacPortraitPage,
      "beruehmte-june-carter-cash": juneCarterCashPortraitPage,
      "beruehmte-peter-gabriel": peterGabrielPortraitPage,
      "beruehmte-enya": enyaPortraitPage,
      "beruehmte-t-e-lawrence": tELawrencePortraitPage,
      "beruehmte-bill-kaulitz": billKaulitzPortraitPage,
      "beruehmte-rihanna": rihannaPortraitPage,
      "beruehmte-billie-eilish": billieEilishPortraitPage,
      "beruehmte-ana-de-armas": anaDeArmasPortraitPage,
      "beruehmte-linda-leinweber": lindaLeinweberPortraitPage,
      "beruehmte-claude-debussy": claudeDebussyPortraitPage,
      "beruehmte-dante-alighieri": danteAlighieriPortraitPage,
      "beruehmte-marquis-de-sade": marquisDeSadePortraitPage,
      "beruehmte-christian-raetsch": christianRaetschPortraitPage,
      "beruehmte-xu-bing": xuBingPortraitPage,
      "beruehmte-blaise-pascal": blaisePascalPortraitPage,
      "beruehmte-franz-kafka": franzKafkaPortraitPage,
      "beruehmte-kollegah": kollegahPortraitPage,
      "beruehmte-wladimir-putin": wladimirPutinPortraitPage,
      "beruehmte-otto-von-bismarck": ottoVonBismarckPortraitPage,
      "beruehmte-friedrich-schiller": friedrichSchillerPortraitPage,
      "beruehmte-ludwig-van-beethoven": ludwigVanBeethovenPortraitPage,
      "beruehmte-platon": platonPortraitPage,
      "beruehmte-alice-schwarzer": aliceSchwarzerPortraitPage,
      "beruehmte-michael-schumacher": michaelSchumacherPortraitPage,
      "beruehmte-anke-engelke": ankeEngelkePortraitPage,
      "beruehmte-jennifer-aniston": jenniferAnistonPortraitPage,
      "beruehmte-byron-katie": byronKatiePortraitPage,
      "beruehmte-katja-riemann": katjaRiemannPortraitPage,
      "beruehmte-uwe-ochsenknecht": uweOchsenknechtPortraitPage,
      "beruehmte-scarlett-johansson": scarlettJohanssonPortraitPage,
      "beruehmte-jasmin-paolini": jasminPaoliniPortraitPage,
      "beruehmte-hans-zimmer": hansZimmerPortraitPage,
      "beruehmte-moritz-bleibtreu": moritzBleibtreuPortraitPage,
      "beruehmte-francis-bacon": francisBaconPortraitPage,
      "beruehmte-miley-cyrus": mileyCyrusPortraitPage,
      "beruehmte-ina-mueller": inaMuellerPortraitPage,
      "beruehmte-boris-becker": borisBeckerPortraitPage,
      "beruehmte-robert-schumann": robertSchumannPortraitPage,
      "beruehmte-franz-liszt": franzLisztPortraitPage,
      "beruehmte-johannes-brahms": johannesBrahmsPortraitPage,
      "beruehmte-johann-sebastian-bach": johannSebastianBachPortraitPage,
      "beruehmte-wolfgang-amadeus-mozart": wolfgangAmadeusMozartPortraitPage,
      "beruehmte-nero": neroPortraitPage,
      "beruehmte-ai-weiwei": aiWeiweiPortraitPage,
      "beruehmte-carlos-santana": carlosSantanaPortraitPage,
      "beruehmte-harald-gloeockler": haraldGloeocklerPortraitPage,
      "beruehmte-harnaam-kaur": harnaamKaurPortraitPage,
      "beruehmte-ice-cube": iceCubePortraitPage,
      "beruehmte-tutty-tran": tuttyTranPortraitPage,
      "beruehmte-mr-t": mrTPortraitPage,
      "beruehmte-mickey-rourke": mickeyRourkePortraitPage,
      "beruehmte-monica-simpson": monicaSimpsonPortraitPage,
      "beruehmte-nate-dogg": nateDoggPortraitPage,
      "beruehmte-stromae": stromaePortraitPage,
      "beruehmte-thomas-chaanhing": thomasChaanhingPortraitPage,
      "beruehmte-tracie-d-hall": tracieDHallPortraitPage,
      "beruehmte-nusrat-fateh-ali-khan": nusratFatehAliKhanPortraitPage,
      "beruehmte-quentin-tarantino": quentinTarantinoPortraitPage,
      "beruehmte-storm-reid": stormReidPortraitPage,
      "beruehmte-tom-kaulitz": tomKaulitzPortraitPage,
      "beruehmte-jack-ma": jackMaPortraitPage,
      "beruehmte-jimi-blue-ochsenknecht": jimiBlueOchsenknechtPortraitPage,
      "beruehmte-yayoi-kusama": yayoiKusamaPortraitPage,
      "beruehmte-joseph-haydn": josephHaydnPortraitPage,
      "beruehmte-serdar-somuncu": serdarSomuncuPortraitPage,
      "beruehmte-gangaji": gangajiPortraitPage,
      "beruehmte-ryan-gosling": ryanGoslingPortraitPage,
      "beruehmte-mata-hari": mataHariPortraitPage,
      "beruehmte-eva-mendes": evaMendesPortraitPage,
      "beruehmte-heather-thomas": heatherThomasPortraitPage,
      "beruehmte-andre-agassi": andreAgassiPortraitPage,
      "beruehmte-klara-von-assisi": klaraVonAssisiPortraitPage,
      "beruehmte-tim-maelzer": timMaelzerPortraitPage,
      "beruehmte-michael-dell": michaelDellPortraitPage,
      "beruehmte-edita-gruberova": editaGruberovaPortraitPage,
      "beruehmte-horst-tappert": horstTappertPortraitPage,
      "beruehmte-bastian-pastewka": bastianPastewkaPortraitPage,
      "beruehmte-lang-lang": langLangPortraitPage,
      "beruehmte-grahame-webb": grahameWebbPortraitPage,
      "beruehmte-giacomo-puccini": giacomoPucciniPortraitPage,
      "beruehmte-hippokrates-von-kos": hippokratesVonKosPortraitPage,
      "beruehmte-heraklit": heraklitPortraitPage,
      "beruehmte-christiaan-barnard": christiaanBarnardPortraitPage,
      "beruehmte-klemens-von-metternich": klemensVonMetternichPortraitPage,
      "beruehmte-ludwig-xiv": ludwigXIVPortraitPage,
      "beruehmte-albert-schweitzer": albertSchweitzerPortraitPage,
      "beruehmte-tony-shalhoub": tonyShalhoubPortraitPage,
      "beruehmte-judit-polgar": juditPolgarPortraitPage,
      "beruehmte-annika-von-mutius": annikaVonMutiusPortraitPage,
      "beruehmte-changpeng-zhao": changpengZhaoPortraitPage,
      "beruehmte-bryn-kenney": brynKenneyPortraitPage,
      "beruehmte-anna-anderson": annaAndersonPortraitPage,
      "beruehmte-peter-falk": peterFalkPortraitPage,
      "beruehmte-dietmar-baer": dietmarBaerPortraitPage,
      "beruehmte-klaus-j-behrendt": klausJBehrendtPortraitPage,
      "beruehmte-shakira": shakiraPortraitPage,
      "beruehmte-thomas-gottschalk": thomasGottschalkPortraitPage,
      "beruehmte-hazel-brugger": hazelBruggerPortraitPage,
      "beruehmte-drew-barrymore": drewBarrymorePortraitPage,
      "beruehmte-elon-musk": elonMuskPortraitPage,
      "beruehmte-nikola-tesla": nikolaTeslaPortraitPage,
      "beruehmte-vincent-van-gogh": vincentVanGoghPortraitPage,
      "beruehmte-sally-rooney": sallyRooneyPortraitPage,
      "beruehmte-virginia-woolf": virginiaWoolfPortraitPage,
      "beruehmte-miguel-de-unamuno": miguelDeUnamunoPortraitPage,
      "beruehmte-ludwig-goeransson": ludwigGoeranssonPortraitPage,
      "beruehmte-charlotte-wells": charlotteWellsPortraitPage,
      "beruehmte-derek-goodwin": derekGoodwinPortraitPage,
      "beruehmte-mariella-superina": mariellaSuperinaPortraitPage,
      "beruehmte-lauren-gardner": laurenGardnerPortraitPage,
      "beruehmte-ajeet-kaur": ajeetKaurPortraitPage,
      "beruehmte-carl-friedrich-gauss": carlFriedrichGaussPortraitPage,
      "beruehmte-paris-hilton": parisHiltonPortraitPage,
      "beruehmte-ingo-zimmermann": ingoZimmermannPortraitPage,
      "beruehmte-hugh-warwick": hughWarwickPortraitPage,
      "beruehmte-anne-mcbride": anneMcBridePortraitPage,
      "beruehmte-john-wayne": johnWaynePortraitPage,
      "beruehmte-marta-manser": martaManserPortraitPage,
      "beruehmte-tim-clutton-brock": timCluttonBrockPortraitPage,
      "beruehmte-david-mech": davidMechPortraitPage,
      "beruehmte-douglas-smith": douglasSmithPortraitPage,
      "beruehmte-frank-rosell": frankRosellPortraitPage,
      "beruehmte-dietland-mueller-schwarze": dietlandMuellerSchwarzePortraitPage,
      "beruehmte-alexander-bommes": alexanderBommesPortraitPage,
      "beruehmte-frans-de-waal": fransDeWaalPortraitPage,
      "beruehmte-christophe-boesch": christopheBoeschPortraitPage,
      "beruehmte-jill-pruetz": jillPruetzPortraitPage,
      "beruehmte-johann-wolfgang-von-goethe": johannWolfgangVonGoethePortraitPage,
      "beruehmte-jules-verne": julesVernePortraitPage,
      "beruehmte-jeanne-marie-guyon": jeanneMarieGuyonPortraitPage,
          "beruehmte-jacqueline-mars": jacquelineMarsPortraitPage,
          "beruehmte-indra-nooyi": indraNooyiPortraitPage,
    "beruehmte-umberto-eco": umbertEcoPortraitPage,
          "beruehmte-golda-meir": goldaMeirPortraitPage,
          "beruehmte-dhapanbal-yunupingu": dhapanbalYunupinguPortraitPage,
          "beruehmte-birute-galdikas": biruteGaldikasPortraitPage,
          "beruehmte-winston-churchill": winstonChurchillPortraitPage,
    "beruehmte-toni-morrison": toniMorrisonPortraitPage,
          "beruehmte-carsten-stahl": carstenStahlPortraitPage,
          "beruehmte-cynthia-lummis": cynthiaLummisPortraitPage,
          "beruehmte-laurence-frank": laurenceFrankPortraitPage,
    "beruehmte-michelle-obama": michelleObamaPortraitPage,
    "beruehmte-natascha-ochsenknecht": nataschaOchsenknechtPortraitPage,
    "beruehmte-wilson-gonzalez-ochsenknecht": wilsonGonzalezOchsenknechtPortraitPage,
    "beruehmte-sokrates": sokratesPortraitPage,
    "beruehmte-fritz-perls": fritzPerlsPortraitPage,
          "beruehmte-jamaica-kincaid": jamaicaKincaidPortraitPage,
    "beruehmte-bud-spencer": budSpencerPortraitPage,
    "beruehmte-karl-marx": karlMarxPortraitPage,
    "beruehmte-adele-neuhauser": adeleNeuhauserPortraitPage,
    "beruehmte-pablo-picasso": pabloPicassoPortraitPage,
    "beruehmte-paul-gauguin": paulGauguinPortraitPage,
    "beruehmte-donald-trump": donaldTrumpPortraitPage,
          "beruehmte-diogenes": diogenesPortraitPage,
          "beruehmte-ruth-bader-ginsburg": ruthBaderGinsburgPortraitPage,
    "beruehmte-genesis-p-orridge": genesisPOrridgePortraitPage,
          "beruehmte-eli-jaxon-bear": eliJaxonBearPortraitPage,
          "beruehmte-angela-merkel": angelaMerkelPortraitPage,
          "beruehmte-carmen-goglin": carmenGoglinPortraitPage,
          "beruehmte-gina-rinehart": ginaRinehartPortraitPage,
          "beruehmte-amelia-earhart": ameliaEarhartPortraitPage,
          "beruehmte-sandra-hueller": sandraHuellerPortraitPage,
          "beruehmte-sophie-marceau": sophieMarceauPortraitPage,
    "beruehmte-david-hume": davidHumePortraitPage,
    "beruehmte-thomas-von-aquin": thomasVonAquinPortraitPage,
    "beruehmte-spinoza": spinozaPortraitPage,
    "beruehmte-marie-curie": marieCuriePortraitPage,
    "beruehmte-rene-descartes": reneDescartesPortraitPage,
    "beruehmte-carl-tanzler": carlTanzlerPortraitPage,
    "beruehmte-sterling-north": sterlingNorthPortraitPage,
    "beruehmte-hermann-hesse": hermannHessePortraitPage,
    "beruehmte-adam-smith": adamSmithPortraitPage,
    "beruehmte-xanthippe": xanthippePortraitPage,
    "beruehmte-hans-dietrich-genscher": hansDietrichGenscherPortraitPage,
          "beruehmte-abida-parveen": abidaParveenPortraitPage,
          "beruehmte-kevin-costner": kevinCostnerPortraitPage,
        "beruehmte-iga-swiatek": igaSwiatekPortraitPage,
    "beruehmte-steffi-graf": steffiGrafPortraitPage,
    "beruehmte-julian-assange": julianAssangePortraitPage,
    "beruehmte-alan-mcelligott": alanMcelligottPortraitPage,
          "beruehmte-ronald-reagan": ronaldReaganPortraitPage,
    "beruehmte-wilma-mankiller": wilmaMankillerPortraitPage,
    "beruehmte-willy-brandt": willyBrandtPortraitPage,
      "beruehmte-jane-goodall": janeGoodallPortraitPage,
      "beruehmte-laurie-marker": laurieMarkerPortraitPage,
      "beruehmte-craig-foster": craigFosterPortraitPage,
      "beruehmte-ana-salceda": anaSalcedaPortraitPage,
      "beruehmte-keanu-reeves": keanuReevesPortraitPage,
          "beruehmte-carl-rogers": carlRogersPortraitPage,
    "beruehmte-dakota-johnson": dakotaJohnsonPortraitPage,
    "beruehmte-heike-makatsch": heikeMakatschPortraitPage,
    "beruehmte-mario-barth": marioBarthPortraitPage,
    "beruehmte-kris-marshall": krisMarshallPortraitPage,
    "beruehmte-lucy-cooke": lucyCookePortraitPage,
    "beruehmte-elizabeth-barrett-browning": elizabethBarrettBrowningPortraitPage,
          "beruehmte-james-levine": jamesLevinePortraitPage,
    "beruehmte-baerbel-bas": baerbelBasPortraitPage,
    "beruehmte-ludwig-erhard": ludwigErhardPortraitPage,
      "beruehmte-donata-hopfen": donataHopfenPortraitPage,
      "beruehmte-herbert-groenemeyer": herbertGroenomeyerPortraitPage,
      "beruehmte-james-corden": jamesCordenPortraitPage,
      "beruehmte-melanie-kreis": melanieKreisPortraitPage,
      "beruehmte-sigmund-freud": sigmundFreudPortraitPage,
      "beruehmte-immanuel-kant": immanuelKantPortraitPage,
      "beruehmte-andy-reid": andyReidPortraitPage,
      "beruehmte-neil-armstrong": neilArmstrongPortraitPage,
      "beruehmte-beatrice-chebet": beatriceChebetPortraitPage,
      "beruehmte-woody-allen": woodyAllenPortraitPage,
      "beruehmte-fjodor-dostojewski": fjodorDostojewskiPortraitPage,
      "beruehmte-franz-schubert": franzSchubertPortraitPage,
      "beruehmte-sundar-pichai": sundarPichaiPortraitPage,
      "beruehmte-herbert-kickl": herbertKicklPortraitPage,
      "beruehmte-malaika-mihambo": malaikaMihamboPortraitPage,
      "beruehmte-albert-einstein": albertEinsteinPortraitPage,
    "beruehmte-samuel-hahnemann": samuelHahnemannPortraitPage,
    "beruehmte-mohammed": mohammedPortraitPage,
    "beruehmte-helmut-kohl": helmutKohlPortraitPage,
    "beruehmte-gerhard-schroeder": gerhardSchroederPortraitPage,
    "beruehmte-konrad-adenauer": konradAdenauerPortraitPage,
    "beruehmte-edgar-allan-poe": edgarAllanPoePortraitPage,
    "beruehmte-hugh-grant": hughGrantPortraitPage,
    "beruehmte-johnny-depp": johnnyDeppPortraitPage,
    "beruehmte-morgan-freeman": morganFreemanPortraitPage,
    "beruehmte-leonard-bernstein": leonardBernsteinPortraitPage,
    "beruehmte-nicolas-cage": nicolasCagePortraitPage,
    "beruehmte-leo-tolstoi": leoTolstoiPortraitPage,
    "beruehmte-gustav-mahler": gustavMahlerPortraitPage,
      "beruehmte-reinhard-mey": reinhardMeyPortraitPage,
    "beruehmte-marcel-proust": marcelProustPortraitPage,
    "beruehmte-leonardo-da-vinci": leonardoDaVinciPortraitPage,
    "beruehmte-udo-juergens": udoJuergensPortraitPage,
    "beruehmte-mahatma-gandhi": mahatmaGandhiPortraitPage,
      "beruehmte-moses": mosesPortraitPage,
      "beruehmte-konfuzius": konfuziusPortraitPage,
      "beruehmte-laozi": laoziPortraitPage,
      "beruehmte-cynthia-moss": cynthiaMossPortraitPage,
      "beruehmte-greta-garbo": gretaGarboPortraitPage,
      "beruehmte-buddha": buddhaPortraitPage,
      "beruehmte-mark-zuckerberg": markZuckerbergPortraitPage,
      "beruehmte-edward-snowden": edwardSnowdenPortraitPage,
      "beruehmte-jodie-foster": jodieFosterPortraitPage,
      "beruehmte-frederic-chopin": fredericChopinPortraitPage,
      "beruehmte-jean-jacques-rousseau": jeanJacquesRousseauPortraitPage,
      "beruehmte-taylor-swift": taylorSwiftPortraitPage,
      "beruehmte-friedrich-nietzsche": friedrichNietzschePortraitPage,
      "beruehmte-tilda-swinton": tildaSwintonPortraitPage,
      "beruehmte-bill-gates": billGatesPortraitPage,
      "beruehmte-jennifer-mather": jenniferMatherPortraitPage,
      "beruehmte-pythagoras": pythagorasPortraitPage,
      "beruehmte-stephen-hawking": stephenHawkingPortraitPage,
      "beruehmte-isaac-newton": isaacNewtonPortraitPage,
      "beruehmte-georg-wilhelm-friedrich-hegel": georgWilhelmFriedrichHegelPortraitPage,
      "beruehmte-claudio-naranjo": claudioNaranjoPortraitPage,
      "beruehmte-gertrude-elion": gertrudeElionPortraitPage,
      "beruehmte-peter-lustig": peterLustigPortraitPage,
      "beruehmte-mariah-carey": mariahCareyPortraitPage,
      "beruehmte-wallace-shawn": wallaceShawnPortraitPage,
      "beruehmte-larry-king": larryKingPortraitPage,
      "beruehmte-junko-tabei": junkoTabeiPortraitPage,
      "beruehmte-jeanne-calment": jeanneCalmentPortraitPage,
      "beruehmte-warren-buffett": warrenBuffettPortraitPage,
      "beruehmte-vera-birkenbihl": veraBirkenbihlPortraitPage,
      "beruehmte-charles-darwin": charlesDarwinPortraitPage,
      "beruehmte-guenther-jauch": guentherJauchPortraitPage,
      "beruehmte-dirk-rossmann": dirkRossmannPortraitPage,
      "beruehmte-eckhard-freise": eckhardFreisePortraitPage,
      "beruehmte-lady-diana": ladyDianaPortraitPage,
      "beruehmte-karoline-herfurth": karolineHerfurthPortraitPage,
      "beruehmte-tim-bendzko": timBendzkoPortraitPage,
      "beruehmte-adele": adelePortraitPage,
      "beruehmte-clemens-arvay": clemensArvayPortraitPage,
      "beruehmte-paul-mccartney": paulMccartneyPortraitPage,
      "beruehmte-john-lennon": johnLennonPortraitPage,
      "beruehmte-leonard-cohen": leonardCohenPortraitPage,
      "beruehmte-cheyenne-ochsenknecht": cheyenneOchsenknechtPortraitPage,
      "beruehmte-javier-parisi": javierParisiPortraitPage,
      "beruehmte-fiona-apple": fionaApplePortraitPage,
      "beruehmte-til-schweiger": tilSchweigerPortraitPage,
      "beruehmte-taddl": taddlPortraitPage,
      "beruehmte-michael-jackson": michaelJacksonPortraitPage,
      "beruehmte-hans-christian-andersen": hansChristianAndersenPortraitPage,
      "beruehmte-cat-stevens": catStevensPortraitPage,
      "beruehmte-caroline-peters": carolinePetersPortraitPage,
      "beruehmte-dieter-nuhr": dieterNuhrPortraitPage,
      "beruehmte-rowan-atkinson": rowanAtkinsonPortraitPage,
      "beruehmte-george-gershwin": georgeGershwinPortraitPage,
      "beruehmte-epikur": epikurPortraitPage,
      "beruehmte-franz-von-assisi": franzVonAssisiPortraitPage,
      "beruehmte-romy-schneider": romySchneiderPortraitPage,
      "beruehmte-angelina-jolie": angelinaJoliePortraitPage,
      "beruehmte-juergen-klopp": juergenKloppPortraitPage,
      "beruehmte-konrad-lorenz": konradLorenzPortraitPage,
      "beruehmte-jordan-peterson": jordanPetersonPortraitPage,
      "beruehmte-david-bowie": davidBowiePortraitPage,
      "beruehmte-ursula-von-der-leyen": ursulaVonDerLeyenPortraitPage,
      "beruehmte-friedrich-merz": friedrichMerzPortraitPage,
      "beruehmte-leonardo-dicaprio": leonardoDiCaprioPortraitPage,
      "beruehmte-jamie-lee-curtis": jamieleecurtisPortraitPage,
      "beruehmte-marie-agnes-strack-zimmermann": marieAgnesStrackZimmermannPortraitPage,
      "beruehmte-bill-haast": billHaastPortraitPage,
      "beruehmte-rasputin": rasputinPortraitPage,
      "beruehmte-hundertwasser": hundertwasserPortraitPage,
      "beruehmte-diego-velazquez": diegoVelazquezPortraitPage,
      "beruehmte-douglas-rushkoff": douglasRushkoffPortraitPage,
      "beruehmte-micky-beisenherz": mickyBeisenherzPortraitPage,
      "beruehmte-katharina-tempel": katharinaTempelPortraitPage,
      "beruehmte-muhammad-ali": muhammadAliPortraitPage,
      "beruehmte-ranga-yogeshwar": rangaYogeshwarPortraitPage,
      "beruehmte-anastasia-barner": anastasiaBarnerPortraitPage,
      "beruehmte-david-lurey": davidLureyPortraitPage,
      "beruehmte-joe-navarro": joeNavarroPortraitPage,
      "beruehmte-jonathan-groff": jonathanGroffPortraitPage,
      "beruehmte-bob-marley": bobMarleyPortraitPage,
      "beruehmte-abd-al-fattah-as-sisi": abdAlFattahAsSisiPortraitPage,
      "beruehmte-jesus-christus": jesusChristusPortraitPage,
      "beruehmte-elvis-presley": elvisPresleyPortraitPage,
      "beruehmte-romulus-whitaker": romulusWhitakerPortraitPage,
      "beruehmte-thea-litschka-koen": theaLitschkaKoenPortraitPage,
      "beruehmte-robbie-williams": robbieWilliamsPortraitPage,
      "beruehmte-eminem": eminemPortraitPage,
      "beruehmte-martin-luther": martinLutherPortraitPage,
      "beruehmte-frida-kahlo": fridaKahloPortraitPage,
      "beruehmte-marie-antoinette": marieAntoinettePortraitPage,
      "beruehmte-natascha-kampusch": nataschaKampuschPortraitPage,
      "beruehmte-isabella-briggs": isabellaBriggsPortraitPage,
      "beruehmte-armin-rohde": arminRohdePortraitPage,
      "beruehmte-mutter-meera": mutterMeeraPortraitPage,
      "beruehmte-sucharit-bhakdi": sucharitBhakdiPortraitPage,
      "beruehmte-klaus-kinski": klausKinskiPortraitPage,
      "beruehmte-udo-lindenberg": udoLindenbergPortraitPage,
      "beruehmte-sam-altman": samAltmanPortraitPage,
      "beruehmte-aristoteles": aristotelesPortraitPage,
      "beruehmte-greta-thunberg": gretaThunbergPortraitPage,
      "beruehmte-camille-fritsch": camilleFritschPortraitPage,
      "beruehmte-jj-liu": jjLiuPortraitPage,
      "beruehmte-franka-potente": frankaPotentePortraitPage,
      "beruehmte-lena-urzendowsky": lenaUrzendowskyPortraitPage,
      "beruehmte-margot-friedlaender": margotFriedlaenderPortraitPage,
      "beruehmte-soeren-kierkegaard": soerenKierkegaardPortraitPage,
      "beruehmte-queen-elizabeth-ii": queenElizabethIIPortraitPage,
      "beruehmte-gloria-von-thurn-und-taxis": gloriaVonThurnUndTaxisPortraitPage,
      "beruehmte-jack-black": jackBlackPortraitPage,
      "beruehmte-lebo-m": leboMPortraitPage,
      "beruehmte-lionel-boyce": lionelBoycePortraitPage,
      "beruehmte-lisa-antoni": lisaAntoniPortraitPage,
      "beruehmte-loi": loiPortraitPage,
      "beruehmte-loni-hui": loniHuiPortraitPage,
      "beruehmte-madeline-stuart": madelineStuartPortraitPage,
      "beruehmte-mariacarla-boscono": mariacarlaBosconoPortraitPage,
      "beruehmte-joseph-aoun": josephAounPortraitPage,
      "beruehmte-uli-hoeness": uliHoenessPortraitPage,
      "beruehmte-jan-ullrich": janUllrichPortraitPage,
      "beruehmte-oprah-winfrey": oprahWinfreyPortraitPage,
      "beruehmte-barack-obama": barackObamaPortraitPage,
      "beruehmte-winifred-charlesworth": winifredCharlesworthPortraitPage,
      "beruehmte-marisa-abela": marisaAbelaPortraitPage,
      "beruehmte-hannah-emde": hannahEmdePortraitPage,
      "beruehmte-truman-capote": trumanCapotePortraitPage,
      "beruehmte-eva-peron": evaPeronPortraitPage,
      "beruehmte-julius-caesar": juliusCaesarPortraitPage,
      "beruehmte-napoleon-bonaparte": napoleonBonapartePortraitPage,
      "beruehmte-alexander-der-grosse": alexanderDerGrossePortraitPage,
      "beruehmte-will-smith": willSmithPortraitPage,
      "beruehmte-nina-chuba": ninaChubaPortraitPage,
      "beruehmte-zoe-saldana": zoeSaldanaPortraitPage,
      "beruehmte-kamala-harris": kamalaHarrisPortraitPage,
      "beruehmte-dr-dre": drDrePortraitPage,
      "beruehmte-usher": usherPortraitPage,
      "beruehmte-indila": indilaPortraitPage,
      "beruehmte-alicia-keys": aliciaKeysPortraitPage,
      "beruehmte-ashton-kutcher": ashtonKutcherPortraitPage,
      "beruehmte-jenna-ortega": jennaOrtegaPortraitPage,
      "beruehmte-ayo-edebiri": ayoEdebiriPortraitPage,
      "beruehmte-bruno-mars": brunoMarsPortraitPage,
      "beruehmte-carl-weathers": carlWeathersPortraitPage,
      "beruehmte-omar-sy": omarSyPortraitPage,
      "beruehmte-monika-gruber": monikaGruberPortraitPage,
      "beruehmte-bernard-faye": bernardFayePortraitPage,
      "beruehmte-matthias-schweighoefer": matthiasSchweighoeferPortraitPage,
      "beruehmte-clueso": cluesoPortraitPage,
      "beruehmte-milow": milowPortraitPage,
      "beruehmte-pamela-reif": pamelaReifPortraitPage,
      "beruehmte-anastasiia-metelkina": anastasiiaMetelkinaPortraitPage,
      "beruehmte-braco": bracoPortraitPage,
      "beruehmte-wolodymyr-selenskyj": wolodymyrSelenskyjPortraitPage,
      "beruehmte-johnny-cash": johnnyCashPortraitPage,
      "beruehmte-david-l-rathmer": davidLRathmerPortraitPage,
      "beruehmte-sadhguru": sadhguruPortraitPage,
      "beruehmte-penelope-cruz": penelopeCruzPortraitPage,
      "beruehmte-norah-jones": norahJonesPortraitPage,
      "beruehmte-kathrin-bauerfeind": kathrinBauerfeindPortraitPage,
      "beruehmte-madame-tussaud": madameTussaudPortraitPage,
      "beruehmte-osho": oshoPortraitPage,
      "beruehmte-karl-lagerfeld": karlLagerfeldPortraitPage,
      "beruehmte-teresa-von-avila": teresaVonAvilaPortraitPage,
      "beruehmte-gottfried-wilhelm-leibniz": gottfriedWilhelmLeibnizPortraitPage,
      "beruehmte-sean-connery": seanConneryPortraitPage,
      "beruehmte-sahra-wagenknecht": sahraWagenknechtPortraitPage,
      "beruehmte-cristiano-ronaldo": cristianoRonaldoPortraitPage,
      "beruehmte-pharrell-williams": pharrellWilliamsPortraitPage,
      "beruehmte-bella-thorne": bellaThornePage,
      "kriminalpsychologie": kriminalpsychologiePage,
      "enneagramm-bibel": enneagrammBibelPage,
      "bibel-josef-von-arimathaea": josefVonArimathaeaPage,
      "bibel-ruben-schriftgelehrter": rubenSchriftgelehrterPage,
      "bibel-johannes-der-taeufer": johannesDerTaeuferPage,
      "bibel-marta": martaPage,
      "bibel-jesus": jesusPage,
      "bibel-maria-magdalena": mariaMagdalenaPage,
      "bibel-salome": salomePage,
      "bibel-pontius-pilatus": pontiusPilatusPage,
      "bibel-judas-iskariot": judasIskariotPage,
      "bibel-andreas": andreasPage,
      "bibel-thomas": thomasPage,
      "bibel-judas-thaddaeus": judasThaddaeusPage,
      "bibel-nikodemus": nikodemusPage,
      "bibel-gamaliel": gamalielPage,
      "bibel-der-mann-von-gerasa": derMannVonGerasaPage,
      "bibel-zachaeus": zachaeusPage,
      "bibel-philippus": philippusPage,
      "bibel-petrus": petrusPage,
      "bibel-lazarus": lazarusPage,
      "bibel-samariterin-am-jakobsbrunnen": samariterinAmJakobsbrunnenPage,
      "bibel-johannes-der-geliebte": johannesDerGeliebtePage,
      "bibel-der-hauptmann-unter-dem-kreuz": derHauptmannUnterDemKreuzPage,
      "bibel-kaiphas": kaiphasPage,
      "bibel-saulus-auf-dem-weg-nach-damaskus": saulusAufDemWegNachDamaskusPage,
      "bibel-jakobus": jakobusPage,
      "bibel-barabbas": barabbasPage,
      "bibel-mutter-maria": mutterMariaPage,
      "krankheitsportraets": krankheitsportraetsPage,
      "krankheitsportraets-moliere": molierePortraitPage,
      "krankheitsportraets-sigmund-freud": freudKrankheitsportraetPage,
      "krankheitsportraets-marie-curie": marieCurieKrankheitsportraetPage,
      "krankheitsportraets-charles-darwin": charlesDarwinKrankheitsportraetPage,
      "krankheitsportraets-winston-churchill": winstonChurchillKrankheitsportraetPage,
      "krankheitsportraets-golda-meir": goldaMeirKrankheitsportraetPage,
      "krankheitsportraets-gustav-mahler": gustavMahlerKrankheitsportraetPage,
      "krankheitsportraets-ruth-bader-ginsburg": ruthBaderGinsburgKrankheitsportraetPage,
      "krankheitsportraets-claudio-naranjo": claudioNaranjoKrankheitsportraetPage,
      "krankheitsportraets-wilma-mankiller": wilmaMankillerKrankheitsportraetPage,
      "krankheitsportraets-teresa-von-avila": teresaVonAvilaKrankheitsportraetPage,
      "krankheitsportraets-franz-schubert": franzSchubertKrankheitsportraetPage,
      "krankheitsportraets-giacomo-puccini": giacomoPucciniKrankheitsportraetPage,
      "krankheitsportraets-larry-king": larryKingKrankheitsportraetPage,
      "krankheitsportraets-mr-t": mrTKrankheitsportraetPage,
      "krankheitsportraets-oprah-winfrey": oprahWinfreyKrankheitsportraetPage,
      "krankheitsportraets-warren-buffett": warrenBuffettKrankheitsportraetPage,
      "krankheitsportraets-muhammad-ali": muhammadAliKrankheitsportraetPage,
      "krankheitsportraets-friedrich-nietzsche": friedrichNietzscheKrankheitsportraetPage,
      "krankheitsportraets-frederic-chopin": fredericChopinKrankheitsportraetPage,
      "krankheitsportraets-fjodor-dostojewski": fjodorDostojewskiKrankheitsportraetPage,
      "krankheitsportraets-franz-kafka": franzKafkaKrankheitsportraetPage,
      "krankheitsportraets-ronald-reagan": ronaldReaganKrankheitsportraetPage,
      "krankheitsportraets-david-bowie": davidBowieKrankheitsportraetPage,
      "krankheitsportraets-wolfgang-amadeus-mozart": wolfgangAmadeusMozartKrankheitsportraetPage,
      "krankheitsportraets-nusrat-fateh-ali-khan": nusratFatehAliKhanKrankheitsportraetPage,
      "krankheitsportraets-albert-einstein": albertEinsteinKrankheitsportraetPage,
      "krankheitsportraets-freddie-mercury": freddieMercuryKrankheitsportraetPage,
      "krankheitsportraets-lady-diana": ladyDianaKrankheitsportraetPage,
      "krankheitsportraets-marilyn-monroe": marilynMonroeKrankheitsportraetPage,
      "krankheitsportraets-dolly-parton": dollyPartonKrankheitsportraetPage,
      "krankheitsportraets-osho": oshoKrankheitsportraetPage,
      "krankheitsportraets-elvis-presley": elvisPresleyKrankheitsportraetPage,
      "krankheitsportraets-john-wayne": johnWayneKrankheitsportraetPage,
      "krankheitsportraets-claude-debussy": claudeDebussyKrankheitsportraetPage,
      "krankheitsportraets-napoleon-bonaparte": napoleonBonaparteKrankheitsportraetPage,
      "krankheitsportraets-julius-caesar": juliusCaesarKrankheitsportraetPage,
      "krankheitsportraets-johann-sebastian-bach": johannSebastianBachKrankheitsportraetPage,
      "krankheitsportraets-konrad-adenauer": konradAdenauerKrankheitsportraetPage,
      "krankheitsportraets-friedrich-schiller": friedrichSchillerKrankheitsportraetPage,
      "krankheitsportraets-otto-von-bismarck": ottoVonBismarckKrankheitsportraetPage,
      "krankheitsportraets-martin-luther": martinLutherKrankheitsportraetPage,
      "krankheitsportraets-ludwig-wittgenstein": ludwigWittgensteinKrankheitsportraetPage,
      "krankheitsportraets-ludwig-van-beethoven": ludwigVanBeethovenKrankheitsportraetPage,
      "krankheitsportraets-michael-jackson": michaelJacksonKrankheitsportraetPage,
      "krankheitsportraets-hans-christian-andersen": hansChristianAndersenKrankheitsportraetPage,
      "krankheitsportraets-romy-schneider": romySchneiderKrankheitsportraetPage,
      "krankheitsportraets-karl-lagerfeld": karlLagerfeldKrankheitsportraetPage,
      "krankheitsportraets-robert-schumann": robertSchumannKrankheitsportraetPage,
      "krankheitsportraets-francis-bacon": francisBaconKrankheitsportraetPage,
      "krankheitsportraets-karl-marx": karlMarxKrankheitsportraetPage,
      "krankheitsportraets-james-levine": jamesLevineKrankheitsportraetPage,
      "krankheitsportraets-david-hume": davidHumeKrankheitsportraetPage,
      "krankheitsportraets-elizabeth-barrett-browning": elizabethBarrettBrowningKrankheitsportraetPage,
      "krankheitsportraets-peter-falk": peterFalkKrankheitsportraetPage,
      "krankheitsportraets-leonard-bernstein": leonardBernsteinKrankheitsportraetPage,
      "krankheitsportraets-alexander-der-grosse": alexanderDerGrosseKrankheitsportraetPage,
      "krankheitsportraets-marcel-proust": marcelProustKrankheitsportraetPage,
      "krankheitsportraets-charles-manson": charlesMansonKrankheitsportraetPage,
      "krankheitsportraets-bernie-madoff": bernieMadoffKrankheitsportraetPage,
      "krankheitsportraets-frida-kahlo": fridaKahloKrankheitsportraetPage,
      "krankheitsportraets-yayoi-kusama": yayoiKusamaKrankheitsportraetPage,
      "krankheitsportraets-michael-schumacher": michaelSchumacherKrankheitsportraetPage,
      "krankheitsportraets-klaus-kinski": klausKinskiKrankheitsportraetPage,
      "krankheitsportraets-natascha-kampusch": nataschaKampuschKrankheitsportraetPage,
      "krankheitsportraets-john-gotti": johnGottiKrankheitsportraetPage,
      "krankheitsportraets-ludwig-xiv": ludwigXIVKrankheitsportraetPage,
      "krankheitsportraets-oj-simpson": ojSimpsonKrankheitsportraetPage,
      "krankheitsportraets-richard-ramirez": richardRamirezKrankheitsportraetPage,
      "krankheitsportraets-spinoza": spinozaKrankheitsportraetPage,
      "krankheitsportraets-hermann-hesse": hermannHesseKrankheitsportraetPage,
      "krankheitsportraets-voltaire": voltaireKrankheitsportraetPage,
      "krankheitsportraets-nikola-tesla": nikolaTeslaKrankheitsportraetPage,
      "krankheitsportraets-vincent-van-gogh": vincentVanGoghKrankheitsportraetPage,
      "krankheitsportraets-stephen-hawking": stephenHawkingKrankheitsportraetPage,
      "krankheitsportraets-isaac-newton": isaacNewtonKrankheitsportraetPage,
      "krankheitsportraets-immanuel-kant": immanuelKantKrankheitsportraetPage,
      "krankheitsportraets-leonardo-da-vinci": leonardoDaVinciKrankheitsportraetPage,
      "krankheitsportraets-jules-verne": julesVerneKrankheitsportraetPage,
      "krankheitsportraets-helmut-kohl": helmutKohlKrankheitsportraetPage,
      "krankheitsportraets-ai-weiwei": aiWeiweiKrankheitsportraetPage,
      "krankheitsportraets-woody-allen": woodyAllenKrankheitsportraetPage,
      "krankheitsportraets-fritz-perls": fritzPerlsKrankheitsportraetPage,
      "krankheitsportraets-julian-assange": julianAssangeKrankheitsportraetPage,
      "krankheitsportraets-hundertwasser": hundertwasserKrankheitsportraetPage,
      "krankheitsportraets-sadhguru": sadhguruKrankheitsportraetPage,
      "krankheitsportraets-umberto-eco": umbertoEcoKrankheitsportraetPage,
      "krankheitsportraets-greta-thunberg": gretaThunbergKrankheitsportraetPage,
      "krankheitsportraets-bob-marley": bobMarleyKrankheitsportraetPage,
      "krankheitsportraets-angelina-jolie": angelinaJolieKrankheitsportraetPage,
      "krankheitsportraets-adele": adeleKrankheitsportraetPage,
      "krankheitsportraets-honore-de-balzac": honoreDeBalzacKrankheitsportraetPage,
      "krankheitsportraets-t-e-lawrence": tELawrenceKrankheitsportraetPage,
      "krankheitsportraets-jamie-lee-curtis": jamieLeeCurtisKrankheitsportraetPage,
      "krankheitsportraets-genesis-p-orridge": genesisPOrridgeKrankheitsportraetPage,
      "krankheitsportraets-billie-eilish": billieEilishKrankheitsportraetPage,
      "krankheitsportraets-willy-brandt": willyBrandtKrankheitsportraetPage,
      "krankheitsportraets-hans-dietrich-genscher": hansDietrichGenscherKrankheitsportraetPage,
      "krankheitsportraets-astrid-lindgren": astridLindgrenKrankheitsportraetPage,
      "krankheitsportraets-sean-connery": seanConneryKrankheitsportraetPage,
      "krankheitsportraets-ashton-kutcher": ashtonKutcherKrankheitsportraetPage,
      "krankheitsportraets-robert-de-niro": robertDeNiroKrankheitsportraetPage,
      "krankheitsportraets-elon-musk": elonMuskKrankheitsportraetPage,
      "krankheitsportraets-morgan-freeman": morganFreemanKrankheitsportraetPage,
      "krankheitsportraets-junko-tabei": junkoTabeiKrankheitsportraetPage,
      "krankheitsportraets-mariah-carey": mariahCareyKrankheitsportraetPage,
      "krankheitsportraets-christiaan-barnard": christiaanBarnardKrankheitsportraetPage,
      "krankheitsportraets-anthony-hopkins": anthonyHopkinsKrankheitsportraetPage,
      "krankheitsportraets-byron-katie": byronKatieKrankheitsportraetPage,
      "krankheitsportraets-drew-barrymore": drewBarrymoreKrankheitsportraetPage,
      "krankheitsportraets-neil-armstrong": neilArmstrongKrankheitsportraetPage,
      "krankheitsportraets-robbie-williams": robbieWilliamsKrankheitsportraetPage,
      "krankheitsportraets-jordan-peterson": jordanPetersonKrankheitsportraetPage,
      "krankheitsportraets-frans-de-waal": fransDeWaalKrankheitsportraetPage,
      "krankheitsportraets-salvatore-riina": salvatoreRiinaKrankheitsportraetPage,
      "krankheitsportraets-johannes-brahms": johannesBrahmsKrankheitsportraetPage,
      "krankheitsportraets-franz-liszt": franzLisztKrankheitsportraetPage,
      "kriminalpsychologie-fritz-haarmann": fritzHaarmannPortraitPage,
      "kriminalpsychologie-josef-fritzl": josefFritzlPortraitPage,
      "kriminalpsychologie-otto-muehl": ottoMuehlPortraitPage,
      "kriminalpsychologie-alex-murdaugh": alexMurdaughPortraitPage,
      "kriminalpsychologie-gary-ridgway": garyRidgwayPortraitPage,
      "kriminalpsychologie-mary-ann-cotton": maryAnnCottonPortraitPage,
      "kriminalpsychologie-ted-bundy": tedBundyPortraitPage,
      "kriminalpsychologie-pablo-escobar": pabloEscobarPortraitPage,
      "kriminalpsychologie-tom-keating": tomKeatingPortraitPage,
      "kriminalpsychologie-harvey-weinstein": harveyWeinsteinPortraitPage,
      "kriminalpsychologie-luka-magnotta": lukaMagnottaPortraitPage,
      "kriminalpsychologie-andrew-cunanan": andrewCunananPortraitPage,
      "kriminalpsychologie-oj-simpson": ojSimpsonPortraitPage,
      "kriminalpsychologie-vincenzo-peruggia": vincenzoPeruggiaPortraitPage,
      "kriminalpsychologie-wade-wilson": wadeWilsonPortraitPage,
            "kriminalpsychologie-elliot-rodger": elliotRodgerPortraitPage,
      "kriminalpsychologie-adolf-hitler": adolfHitlerPortraitPage,
      "kriminalpsychologie-bonnie-parker": bonnieParkerPortraitPage,
      "kriminalpsychologie-paul-ogorzow": paulOgorzowPortraitPage,
      "kriminalpsychologie-frank-abagnale-jr": frankAbagnalePortraitPage,
    "favoriten": favoritenPage,
      "kriminalpsychologie-heinrich-pommerenke": heinrichPommerenkePortraitPage,
      "kriminalpsychologie-rudolf-pleil": rudolfPleilPortraitPage,
      "kriminalpsychologie-jack-unterweger": jackUnterweegerPortraitPage,
      "kriminalpsychologie-jim-jones": jimJonesPortraitPage,
      "kriminalpsychologie-cedric-maake": cedricMaakePortraitPage,
      "kriminalpsychologie-pamela-smart": pamelaSmartPortraitPage,
      "kriminalpsychologie-diane-downs": dianeDownsPortraitPage,
      "kriminalpsychologie-joachim-kroll": joachimKrollPortraitPage,
      "kriminalpsychologie-jeffrey-dahmer": jeffreyDahmerPortraitPage,
      "kriminalpsychologie-joel-rifkin": joelRifkinPortraitPage,
      "kriminalpsychologie-charles-manson": charlesMansonPortraitPage,
      "kriminalpsychologie-john-list": johnListPortraitPage,
      "kriminalpsychologie-adolf-eichmann": adolfEichmannPortraitPage,
      "kriminalpsychologie-anders-breivik": andersBreivikPortraitPage,
      "kriminalpsychologie-armin-meiwes": arminMeiwesPortraitPage,
      "kriminalpsychologie-niels-hoegel": nielsHoegelPortraitPage,
      "beruehmte-dian-fossey": dianFosseyPortraitPage,
      "kriminalpsychologie-andreas-baader": andreasBaaderPortraitPage,
      "kriminalpsychologie-ulrike-meinhof": ulrikeMeinhofPortraitPage,
      "kriminalpsychologie-clyde-barrow": clydeBarrowPortraitPage,
      "kriminalpsychologie-gudrun-ensslin": gudrunEnsslinPortraitPage,
      "kriminalpsychologie-chris-watts": chrisWattsPortraitPage,
      "kriminalpsychologie-john-gotti": johnGottiPortraitPage,
      "kriminalpsychologie-nick-leeson": nickLeesonPortraitPage,
      "kriminalpsychologie-leslie-van-houten": leslieVanHoutenPortraitPage,
      "kriminalpsychologie-wolfgang-beltracchi": wolfgangBeltracchiPortraitPage,
      "kriminalpsychologie-john-hinckley-jr": johnHinckleyJrPortraitPage,
      "kriminalpsychologie-ed-gein": edGeinPortraitPage,
      "kriminalpsychologie-michail-popkow": michailPopkowPortraitPage,
      "kriminalpsychologie-dennis-rader": dennisRaderPortraitPage,
      "kriminalpsychologie-andrei-tschikatilo": andreiTschikatiloPortraitPage,
      "kriminalpsychologie-bernie-madoff": bernieMadoffPortraitPage,
      "kriminalpsychologie-arno-funke": arnoFunkePortraitPage,
      "kriminalpsychologie-p-diddy": pDiddyPortraitPage,
      "kriminalpsychologie-griselda-blanco": grisdaBlancoPortraitPage,
      "kriminalpsychologie-salvatore-riina": salvatoreRiinaPortraitPage,
      "kriminalpsychologie-jeffrey-epstein": jeffreyEpsteinPortraitPage,
      "kriminalpsychologie-samuel-bankman-fried": samuelBankmanFriedPortraitPage,
      "kriminalpsychologie-ruja-ignatova": rujaIgnatovaPortraitPage,
      "kriminalpsychologie-jonathan-meijer": jonathanMeijerPortraitPage,
      "kriminalpsychologie-anna-delvey": annaDelveyPortraitPage,
      "kriminalpsychologie-buster-murdaugh": busterMurdaughPortraitPage,
      "kriminalpsychologie-john-wayne-gacy": johnWayneGacyPortraitPage,
      "kriminalpsychologie-sebastian-greenwood": sebastianGreenwoodPortraitPage,
      "kriminalpsychologie-michael-franzese": michaelFranzesePortraitPage,
      "kriminalpsychologie-david-berkowitz": davidBerkowitzPortraitPage,
      "kriminalpsychologie-john-mcafee": johnMcAfeePortraitPage,
      "kriminalpsychologie-pedro-alonso-lopez": pedroAlonsoLopezPortraitPage,
      "kriminalpsychologie-angel-resendez": angelResendezPortraitPage,
      "kriminalpsychologie-tommy-lynn-sells": tommyLynnSellsPortraitPage,
      "kriminalpsychologie-peter-sutcliffe": peterSutcliffePortraitPage,
      "kriminalpsychologie-jeanne-weber": jeanneWeberPortraitPage,
      "kriminalpsychologie-dorothea-puente": dorotheaPuentePortraitPage,
      "kriminalpsychologie-aileen-wuornos": aileenWuornosPortraitPage,
      "kriminalpsychologie-boris-becker": borisBeckerKriminalPage,
      "kriminalpsychologie-ronnie-biggs": ronnieBiggsPortraitPage,
      "kriminalpsychologie-victor-lustig": victorLustigPortraitPage,
      "kriminalpsychologie-richard-ramirez": richardRamirezPortraitPage,
      "kriminalpsychologie-dennis-nilsen": dennisNilsenPortraitPage,
      "kriminalpsychologie-gennadi-mikhasevich": gennadiMikhasevichPortraitPage,
      "kriminalpsychologie-ted-kaczynski": tedKaczynskiPortraitPage,
      "kriminalpsychologie-harold-shipman": haroldShipmanPortraitPage,
      "kriminalpsychologie-belle-gunness": belleGunnessPortraitPage,
      "kriminalpsychologie-henri-landru": henriLandruPortraitPage,
      "kriminalpsychologie-karla-homolka": karlaHomolkaPortraitPage,
      "kriminalpsychologie-paul-bernardo": paulBernardoPortraitPage,
      "kriminalpsychologie-osama-bin-laden": osamaBinLadenPortraitPage,
      "kriminalpsychologie-bernie-madoff": bernieMadoffPortraitPage,
      "kriminalpsychologie-alfons-schuhbeck": alfonsSchuhbeckPortraitPage,
    "psychologisches-abwehrverhalten-der-9-typen": abwehrverhalteDer9TypenPage,
    "heilfasten-der-9-typen": heilfastenDer9TypenPage,
    "psychologische-verhaltensmuster-der-9-typen": psychologischeVerhaltensmuster9TypenPage,
    "frisuren-der-9-typen": frisurenDer9TypenPage,
    "auffaellige-merkmale-der-9-typen": auffaelligeMerkmale9TypenPage,
    "haendedrucke-der-9-typen": haendedruckeDer9TypenPage,
    "suchtverhalten-der-9-typen": suchtverhalteDer9TypenPage,
    "niesverhalten-der-9-typen": niesverhalteDer9TypenPage,
    "essverhalten-der-9-typen": essverhalteDer9TypenPage,
    "arbeitsverhalten-der-9-typen": arbeitsverhalteDer9TypenPage,
    "verhaeltnis-zu-geld-der-9-typen": verhaeltnisZuGeldDer9TypenPage,
    "sexualverhalten-der-9-typen": sexualverhaltenDer9TypenPage,
    "kussverhalten-der-9-typen": kussverhaltenDer9TypenPage,
    "hochsensibilitaet-der-9-typen": hochsensibilitaetDer9TypenPage,
    "superpower-der-9-typen": superpowerDer9TypenPage,
    "wolkenformationen-der-9-typen": wolkenformationenDer9TypenPage,
    "wolfsarten-der-9-typen": wolfsartenDer9TypenPage,
    "eulenarten-der-9-typen": eulenartenDer9TypenPage,
    "papageienarten-der-9-typen": papageienartenDer9TypenPage,
    "blumenarten-der-9-typen": blumenartenDer9TypenPage,
    "kampfkunstarten-der-9-typen": kampfkunstartenDer9TypenPage,
    "bagua-zonen-der-9-typen": baguaZonenDer9TypenPage,
    "grimms-maerchen-der-9-typen": grimmsMaerchenDer9TypenPage,
    "enneagramm-emotionalitaet": enneagrammEmotionalitaetPage,
    "enneagramm-instinkt": enneagrammInstinktPage,
    "enneagramm-intellekt": enneagrammIntellektPage,
    "hunderassen-der-9-typen": hunderassenDer9TypenPage,
    "pferdearten-der-9-typen": pferdearteDer9TypenPage,
    "nagetierarten-der-9-typen": nagetierartenDer9TypenPage,
    "wetter-naturphaenomene-der-9-typen": wetterNaturphaenomeneDer9TypenPage,
    "architektur-raumgestaltung-der-9-typen": architekturRaumgestaltungDer9TypenPage,
    "baerenarten-der-9-typen": baerenarteDer9TypenPage,
    "milchkuharten-der-9-typen": milchkuhartenDer9TypenPage,
    "vogelarten-der-9-typen": vogelartenDer9TypenPage,
    "froscharten-der-9-typen": froschartenDer9TypenPage,
    "spinnenarten-der-9-typen": spinnenartenDer9TypenPage,
    "reptilienarten-der-9-typen": reptilienartenDer9TypenPage,
    "schildkroetenarten-der-9-typen": schildkroetenartenDer9TypenPage,
    "fischarten-der-9-typen": fischartenDer9TypenPage,
    "walarten-der-9-typen": walartenDer9TypenPage,
    "insektenarten-der-9-typen": insektenartenDer9TypenPage,
    "frieden-schliessen": friedenSchliessenPage,
    "wer-wir-sind": werWirSindPage,
    "verwechslungen": verwechslungenPage,
    "wunden": wundenPage,
    "leidenschaft-und-wunde": leidenschaftUndWundePage,
    "grundformel": grundformelPage,
    "ego-fixierungen": egoFixierungenPage,
    "enneagramm-profiling": enneagrammProfilingPage,
    "antriebskraefte": antriebskraeftePage,
    "bewusstseinsuebungen": bewusstseinsuebungenPage,
    "schopenhauer-zitat": schopenhauerZitatPage,
    "koerperregulation": koerperregulationPage,
    "symmetrie-des-enneagramms": symmetrieDesEnneagrammsPage,
    "schaubilder-als-spiegel": schaubilderAlsSpiegelPage,
    "neun-logismoi": neunLogismoiPage,
    "interessante-erkenntnisse": interessanteErkenntnissePage,
    "identifikation": identifikationPage,
    "schmerzschutz": schmerzschutzPage,
    "blickqualitaet": blickqualitaetPage,
    "prinzipien": prinzipienPage,
    "hunderassen": hunderassenPage,
    "verantwortung": verantwortungPage,
    "limericks": limericksPage,
    "haiku-der-9-typen": haikuDer9TypenPage,
    "humor-der-9-typen": humorDer9TypenPage,
    "david-rathmer-fuehrung": davidRathmerFuehrungPage,
    "david-rathmer-fuehrung-mit-fundament": davidRathmerFuehrungMitFundamentPage,
    "david-rathmer-persoenlichkeiten": davidRathmerPersoenlichkeitenPage,
    "david-rathmer-erfolgsinterviews": davidRathmerErfolgsinterviewsPage,
    "david-rathmer-impulse": davidRathmerImpulsePage,
    "david-rathmer-kriminalfaelle": davidRathmerKriminalfaellePage,
    "david-rathmer-grundlagen": davidRathmerGrundlagenPage,
    "solfeggio-frequenzen": solfeggioFrequenzenPage,
    "zehn-anwendungen-fuer-das-enneagramm": zehnAnwendungenPage,
    "beziehungen-schaubild": beziehungenSchaubildPage,
    "rumi-zitate": rumiZitatePage,
    "suche-nach-liebe": sucheNachLiebePage,
    "drei-lebenskraefte": dreiLebenskraeftePage,
    "beruhmte-philosophen": beruhmtePhilosophenPage,
    "hoellenkreise-dante": hoellenkreiseDantePage,
    "homoeopathie-songs": homoeopathieSongsPage,
    "detlef-rathmer-jazz": detlefRathmerJazzPage,
    "beruhmte-komponisten": ber\u00fchmteKomponistenPage,
    "portrait-typ-1": portraitTyp1Page,
    "portrait-typ-2": portraitTyp2Page,
    "portrait-typ-3": portraitTyp3Page,
    "portrait-typ-4": portraitTyp4Page,
    "portrait-typ-5": portraitTyp5Page,
    "portrait-typ-6": portraitTyp6Page,
    "portrait-typ-7": portraitTyp7Page,
    "portrait-typ-8": portraitTyp8Page,
    "portrait-typ-9": portraitTyp9Page,
    suche: suchePage,
    tierquiz: tierquizPage,
    "gesichts-scan": gesichtsScanPage,
    updates: updatesPage,
    bewusstseinstest: bewusstseinsgradTestPage,
    quiz: quizPage,
    zitate: zitatePage,
    "gaslighting-enneagramm": gaslightingPage,
    "bedeutung-27-subtypen": bedeutungSubtypenPage,
    "dynamik-der-typen": dynamikDerTypenPage,
    "wurzeln-des-enneagramms": wurzelnDesEnneagrammsPage,
    "spirituelle-uebungen": spirituelleUebungenPage,
    "laster-tugenden-affirmationen": lasterTugendenAffirmationenPage,
    "schutzdefizite": schutzdefizitePage,
    "horney-triaden": horneyTriadenPage,
    "illusionen": illusionenPage,
    "frustrationen": frustrationenPage,
    "intrinsisches-verlangen": intrinsischesVerlangenPage,
    "basisemotionen": basisemotionenPage,
    "kerneberzeugungen": kerneberzeugungPage,
    "kindheitsperspektiven": kindheitsperspektivenPage,
    "lebensgluck": lebensgluckPage,
    diagnosetest: diagnosetestPage,
    kaufen: kaufenPage,
    "wegweiser-premium": wegweiserPremiumPage,
    register: registerPage,
    "tischdialoge": tischdialogePage,
    "gesichtsausdruecke": gesichtsausdrueckePage,
    "maennliche-weibliche-seite": maennlicheWeiblicheSeitePage,
    "bundeslaender": bundeslaenderPage,
    "laenderzuordnungen": laenderzuordnungenPage,
    "planetenzuordnungen": planetenzuordnungenPage,
    "stille": stillePage,
    "musik":  musikPage,
    "typenvergleiche": typenvergleichePage,
    "zornverhalten": () => verhaltensPage("zornverhalten"),
    "liebesverhalten": () => verhaltensPage("liebesverhalten"),
    "erfolgsverhalten": () => verhaltensPage("erfolgsverhalten"),
    "individualitaetsverhalten": () => verhaltensPage("individualitaetsverhalten"),
    "wissensverhalten": () => verhaltensPage("wissensverhalten"),
    "sicherheitsverhalten": () => verhaltensPage("sicherheitsverhalten"),
    "spassverhalten": () => verhaltensPage("spassverhalten"),
    "machtverhalten": () => verhaltensPage("machtverhalten"),
    "harmonieverhalten": () => verhaltensPage("harmonieverhalten"),
  };
  const [base, param] = state.route.split("/");
  window._currentRoute = state.route;
  if (base === "typentest") _saveTestState();
  if (base === "diagnosetest") _saveDiagnoseState();
  const setContent = () => {
    window.scrollTo(0, 0);
    // Freischalt-Direktroute (von Nav-Schloss oder Link)
    if (base === "freischalt") {
      app.innerHTML = freischaltPage();
      bindEvents();
      requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; }));
      return;
    }
    // Zugangsschutz
    if (!hasHeilwissen() && base !== "start" && base !== "admin" && base !== "admin-wegweiser" && base !== "leseprobe" && base !== "inhaltsverzeichnis" && base !== "profile" && base !== "impressum" && base !== "datenschutz" && base !== "gesichts-scan" && base !== "updates" && base !== "kaufen" && base !== "register" && base !== "wegweiser-premium") {
      app.innerHTML = freischaltPage();
      bindEvents();
      requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; }));
      return;
    }
    if (base === "subtype" && param) {
      app.innerHTML = subtypePage(param);
    } else if (base === "type" && param) {
      app.innerHTML = typePage(param);
    } else if (base === "tool" && param) {
      app.innerHTML = toolDetailPage(param);
    } else if (base === "tierlexikon" && param) {
      app.innerHTML = tierlexikonDetailPage(param);
    } else if (base === "lebensmusterkompass" && param) {
      app.innerHTML = lebensmusterkompassDetailPage(param);
    } else if (base === "musterradar" && param) {
      app.innerHTML = musterradarDetailPage(param);
    } else if (base === "psychosomatik" && param) {
      app.innerHTML = psychosomatikDetailPage(param);
    } else if (base === "psychosomatik-subtyp" && param) {
      app.innerHTML = psychosomatikSubtypPage(param);
    } else {
      app.innerHTML = (routes[base] || routes.start)();
    const isBadgePage = (base.startsWith("kriminalpsychologie-") && base !== "kriminalpsychologie")
      || (base.startsWith("beruehmte-") && base !== "beruehmte-persoenlichkeiten")
      || (base.startsWith("astrologie-") && base !== "enneagramm-astrologie");
    if (isBadgePage) {
      const typEl = app.querySelector(".krim-portrait-typ");
      if (typEl) {
        const match = typEl.textContent.match(/^(S[EeOoXx][1-9])/);
        if (match) {
          const code = match[1].toLowerCase();
          const wrap = document.createElement("span");
          wrap.className = "krim-tier-badge-wrap";
          const img = document.createElement("img");
          img.src = "https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-160/" + code + ".jpg";
          img.alt = "";
          img.loading = "lazy";
          img.style.left = tierAvatarLeft(code);
          img.style.top = tierAvatarTop(code);
          wrap.appendChild(img);
          typEl.appendChild(wrap);
        }
      }
    }
    }
    if (base === "admin") { adminPage(); requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; })); return; }
    if (base === "admin-wegweiser") { adminWegweiserCodePage(); requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; })); return; }
    if (base === "start") requestAnimationFrame(_bewertungSterneInit);
    if (base === "laenderzuordnungen") {
      requestAnimationFrame(window._llInitVideoObserver);
      setTimeout(function(){ requestAnimationFrame(window._llLazyLoadStep); }, 400);
    }
    if (base === "stille") requestAnimationFrame(_stilleInit);
    if (base === "bewusstseinstest") requestAnimationFrame(_bewusstseinsgradTestInit);
    if (base === "gesichts-scan") requestAnimationFrame(_gesichtsScanInit);
    if (base === "dynamik-des-bewusstseinszustandes") requestAnimationFrame(_dynamikBewusstseinszustandesInit);
    if (base === "musik")  requestAnimationFrame(_musikInit);
    trackMilestoneVisit(base, param);
    bindEvents();
    // scroll to stored target (e.g. from heilmittel-impuls inline button)
    const _scrollTo = sessionStorage.getItem('kompass:scrollTo');
    if (_scrollTo) {
      sessionStorage.removeItem('kompass:scrollTo');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const _el = document.getElementById(_scrollTo);
        if (_el) _el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }));
    }
    requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; }));
  };
  if (app.innerHTML === "") {
    setContent();
  } else {
    app.style.opacity = "0";
    setTimeout(setContent, 180);
  }
}

// Lightbox f\u00fcr Kartenbilder
document.addEventListener("click", (e) => {
  const img = e.target.closest(".vollseite-karte__img");
  if (img) {
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = `<div class="lightbox__overlay"></div><img class="lightbox__img" src="${img.src}" alt="${img.alt}" /><button class="lightbox__close" aria-label="Schlie\u00dfen">\u2715</button>`;
    document.body.appendChild(lb);
    requestAnimationFrame(() => lb.classList.add("lightbox--open"));
    const close = () => { lb.classList.remove("lightbox--open"); setTimeout(() => lb.remove(), 250); };
    lb.querySelector(".lightbox__overlay").addEventListener("click", close);
    lb.querySelector(".lightbox__close").addEventListener("click", close);
    document.addEventListener("keydown", function esc(ev) { if (ev.key === "Escape") { close(); document.removeEventListener("keydown", esc); } });
    return;
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const style = getComputedStyle(btn);
  if (style.position === "static") return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple-effect";
  ripple.style.left = (e.clientX - rect.left - 30) + "px";
  ripple.style.top  = (e.clientY - rect.top  - 30) + "px";
  btn.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
});

// Solfeggio-Frequenz-Player (OfflineAudioContext \u2192 WAV-Blob \u2192 HTML Audio, AirPlay-kompatibel)
let _solfeggioAudio = null, _solfeggioActiveHz = null;

function _solfeggioReset() {
  document.querySelectorAll(".solf-play-btn").forEach(b => {
    b.innerHTML = "&#9654; Anh\u00f6ren"; b.style.background = "var(--gold,#c8a84b)"; b.style.color = "#1a1208";
  });
  if (_solfeggioAudio) { _solfeggioAudio.pause(); _solfeggioAudio.src = ""; _solfeggioAudio = null; }
  if (navigator.mediaSession) { navigator.mediaSession.playbackState = "none"; }
  _solfeggioActiveHz = null;
}

function _solfeggioPlay(hz, btn) {
  const SR = 8000, DUR = 60;
  try {
    const offline = new OfflineAudioContext(1, SR * DUR, SR);
    const osc = offline.createOscillator();
    const gain = offline.createGain();
    osc.type = "sine"; osc.frequency.value = hz;
    gain.gain.setValueAtTime(0.22, 0);
    gain.gain.setValueAtTime(0.22, 55);
    gain.gain.exponentialRampToValueAtTime(0.001, DUR);
    osc.connect(gain); gain.connect(offline.destination);
    osc.start(0); osc.stop(DUR);
    offline.startRendering().then(buf => {
      const pcm = buf.getChannelData(0);
      const ab  = new ArrayBuffer(44 + pcm.length * 2);
      const v   = new DataView(ab);
      const ws  = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
      ws(0,"RIFF"); v.setUint32(4, 36 + pcm.length*2, true);
      ws(8,"WAVE"); ws(12,"fmt "); v.setUint32(16,16,true); v.setUint16(20,1,true);
      v.setUint16(22,1,true); v.setUint32(24,SR,true); v.setUint32(28,SR*2,true);
      v.setUint16(32,2,true); v.setUint16(34,16,true); ws(36,"data");
      v.setUint32(40, pcm.length*2, true);
      for (let i = 0; i < pcm.length; i++) {
        const s = Math.max(-1, Math.min(1, pcm[i]));
        v.setInt16(44 + i*2, s < 0 ? s*32768 : s*32767, true);
      }
      const url = URL.createObjectURL(new Blob([ab], { type:"audio/wav" }));
      const audio = new Audio(url);
      _solfeggioAudio = audio;
      audio.play().catch(() => {});
      if (navigator.mediaSession) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: hz + " Hz Solfeggio-Frequenz",
          artist: "Enneagramm-Heilungskompass",
          artwork: [{ src: "./assets/grundformel-rathmer-enneagramm.jpg", sizes:"512x512", type:"image/jpeg" }]
        });
        navigator.mediaSession.playbackState = "playing";
        navigator.mediaSession.setActionHandler("pause", () => { audio.pause(); navigator.mediaSession.playbackState = "paused"; });
        navigator.mediaSession.setActionHandler("play",  () => { audio.play().catch(()=>{}); navigator.mediaSession.playbackState = "playing"; });
        navigator.mediaSession.setActionHandler("stop",  () => _solfeggioReset());
      }
      audio.onended = () => { URL.revokeObjectURL(url); if (_solfeggioAudio === audio) _solfeggioReset(); };
      btn.innerHTML = "&#9646;&#9646; Stopp"; btn.style.background = "var(--copper,#8b5e3c)"; btn.style.color = "#fff";
    }).catch(() => _solfeggioFallback(hz, btn));
  } catch(e) { _solfeggioFallback(hz, btn); }
}

function _solfeggioFallback(hz, btn) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume();
  const osc = ctx.createOscillator(), gain = ctx.createGain();
  osc.type = "sine"; osc.frequency.value = hz;
  gain.gain.setValueAtTime(0.22, ctx.currentTime);
  gain.gain.setValueAtTime(0.22, ctx.currentTime + 55);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 60);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 60);
  osc.onended = () => { ctx.close(); if (btn.isConnected) _solfeggioReset(); };
  btn.innerHTML = "&#9646;&#9646; Stopp"; btn.style.background = "var(--copper,#8b5e3c)"; btn.style.color = "#fff";
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".solf-play-btn");
  if (!btn) return;
  const hz = parseFloat(btn.dataset.hz);
  if (_solfeggioActiveHz !== null) {
    const wasHz = _solfeggioActiveHz;
    _solfeggioReset();
    if (wasHz === hz) return;
  }
  _solfeggioActiveHz = hz;
  _solfeggioPlay(hz, btn);
});

// Automatischer Versions-Check \u2013 nur einmal pro Session (kein Reload-Loop)
(function() {
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return;
  const MY_VERSION = (function() {
    try { return new URL(document.currentScript.src).searchParams.get('v'); } catch (e) { return null; }
  })();
  if (!MY_VERSION) return;
  const GUARD_KEY = 'kompass-reload-guard-' + MY_VERSION;
  if (sessionStorage.getItem(GUARD_KEY)) return; // schon einmal neu geladen
  setTimeout(function() {
    fetch('./index.html', { cache: 'no-store' })
      .then(function(r) { return r.text(); })
      .then(function(html) {
        var m = html.match(/bundle\.js\?v=([^"']+)/);
        if (m && m[1] !== MY_VERSION) {
          console.log('[Kompass] Neue Version gefunden:', m[1], '\u2013 Cache l\u00f6schen und neu laden');
          sessionStorage.setItem(GUARD_KEY, '1'); // vor dem Reload setzen!
          var chain = Promise.resolve();
          if (window.caches) {
            chain = chain.then(function() {
              return caches.keys().then(function(keys) {
                return Promise.all(keys.map(function(k) { return caches.delete(k); }));
              });
            });
          }
          if (navigator.serviceWorker) {
            chain = chain.then(function() {
              return navigator.serviceWorker.getRegistrations().then(function(regs) {
                return Promise.all(regs.map(function(r) { return r.unregister(); }));
              });
            });
          }
          chain.then(function() { location.reload(); }).catch(function() { location.reload(); });
        }
      })
      .catch(function() {});
  }, 3000);
})();

if (localStorage.getItem('kompass-admin-redirect')) {
  localStorage.removeItem('kompass-admin-redirect');
  location.hash = 'admin/rathmer9';
}
// Buchtipp-Stapel automatisch einklappen: fasst 3+ direkt aufeinanderfolgende
// .book-tip-Elemente (egal auf welcher Seite) in ein <details>-Aufklappmen\u00fc
// zusammen, statt dass lange Buchlisten die Seite vollschreiben. L\u00e4uft per
// MutationObserver auf #app, damit es unabh\u00e4ngig davon funktioniert, an
// welcher der vielen Render-Stellen im Code die Seite gesetzt wurde.
(function initBookTipGrouping() {
  const LABEL = "\ud83d\udcd6 Buchtipps";

  function groupBookTips(root) {
    const tips = Array.from(root.querySelectorAll(".book-tip")).filter(
      (el) => !el.closest(".book-tips-group")
    );
    let i = 0;
    while (i < tips.length) {
      const run = [tips[i]];
      while (i + run.length < tips.length) {
        let sib = run[run.length - 1].nextSibling;
        while (sib && sib.nodeType === 3 && !sib.textContent.trim()) sib = sib.nextSibling;
        if (sib === tips[i + run.length]) {
          run.push(tips[i + run.length]);
        } else {
          break;
        }
      }
      if (run.length >= 3) {
        const details = document.createElement("details");
        details.className = "book-tips-group";
        const summary = document.createElement("summary");
        summary.innerHTML = `${LABEL} <span class="book-tips-group__count">(${run.length})</span>`;
        details.appendChild(summary);
        run[0].parentNode.insertBefore(details, run[0]);
        run.forEach((el) => details.appendChild(el));
      }
      i += run.length;
    }
  }

  const appEl = document.getElementById("app");
  if (!appEl) return;

  const observer = new MutationObserver(() => {
    observer.disconnect();
    groupBookTips(appEl);
    observer.observe(appEl, { childList: true, subtree: true });
  });
  groupBookTips(appEl);
  observer.observe(appEl, { childList: true, subtree: true });
})();

render();
setTimeout(showTagesimpuls, 600);

// "Der Wegweiser" \u2013 KI-Wissens-Assistent (Prototyp), fragt die Wissensbasis
// \u00fcber einen Cloudflare-Worker + Gemini ab und zitiert die Quellen.
(function initWegweiser() {
  const WORKER_URL = "https://kompass-assistent.9rathmer.workers.dev";
  // Wird gesetzt, sobald der Stripe Payment Link f\u00fcr "Wegweiser Premium"
  // eingerichtet ist (siehe Projekt-Notizen). Solange leer, zeigt der
  // Premium-Bereich nur einen Hinweis statt eines Kauf-Links.
  const STRIPE_PAYMENT_LINK_URL = "https://buy.stripe.com/aFa28r34s7Sq51ganp4gg3L";
  const STRIPE_PAYMENT_LINK_YEARLY_URL = "https://buy.stripe.com/6oU00j9sQ3Ca9hw5354gg3M";
  const SESSION_TOKEN_KEY = "wegweiser-session-token";

  function getSessionToken() {
    try { return localStorage.getItem(SESSION_TOKEN_KEY) || ""; } catch (e) { return ""; }
  }
  function setSessionToken(token) {
    try { localStorage.setItem(SESSION_TOKEN_KEY, token); } catch (e) {}
  }
  function clearSessionToken() {
    try { localStorage.removeItem(SESSION_TOKEN_KEY); } catch (e) {}
  }

  const btn = document.createElement("button");
  btn.id = "wegweiser-btn";
  btn.setAttribute("aria-label", "Der Wegweiser \u2013 Fragen an den Kompass stellen");
  btn.title = "Der Wegweiser \u2013 frag mich etwas";
  btn.style.cssText =
    "position:fixed;right:1rem;bottom:1rem;z-index:9998;width:3.4rem;height:3.4rem;border-radius:50%;overflow:hidden;" +
    "background:transparent url('./favicon.svg') center/cover no-repeat;color:#fff;border:none;cursor:pointer;padding:0;" +
    "box-shadow:0 2px 10px rgba(0,0,0,0.3);";

  const panel = document.createElement("div");
  panel.id = "wegweiser-panel";
  panel.style.cssText =
    "position:fixed;right:1rem;left:1rem;bottom:4.9rem;z-index:9998;width:auto;max-width:400px;margin-left:auto;max-height:70vh;box-sizing:border-box;" +
    "background:var(--paper,#fff);color:var(--ink,#28241f);border:1px solid var(--line,#ddd);border-radius:10px;" +
    "box-shadow:0 4px 24px rgba(0,0,0,0.25);display:none;flex-direction:column;overflow:hidden;font-family:Georgia,serif;";
  panel.innerHTML =
    '<div style="padding:0.7rem 0.9rem;border-bottom:1px solid var(--line,#ddd);font-weight:bold;display:flex;justify-content:space-between;align-items:center;">' +
    "<span>\ud83e\udded Der Wegweiser</span>" +
    '<button id="wegweiser-close" aria-label="Schlie\u00dfen" style="background:none;border:none;font-size:1.4rem;cursor:pointer;color:inherit;padding:0.3rem;line-height:1;">\u00d7</button>' +
    "</div>" +
    '<div id="wegweiser-premium-bar" style="padding:0.4rem 0.9rem;border-bottom:1px solid var(--line,#ddd);font-size:0.76rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;"></div>' +
    '<div id="wegweiser-login-form" style="display:none;padding:0.7rem 0.9rem;border-bottom:1px solid var(--line,#ddd);"></div>' +
    '<div id="wegweiser-msgs" style="flex:1;overflow-y:auto;overflow-x:hidden;padding:0.7rem 0.9rem;font-size:0.88rem;line-height:1.5;min-height:120px;max-height:45vh;word-wrap:break-word;overflow-wrap:break-word;"></div>' +
    '<form id="wegweiser-form" style="display:flex;align-items:center;gap:0.2rem;border-top:1px solid var(--line,#ddd);padding:0.3rem;box-sizing:border-box;">' +
    '<input id="wegweiser-input" type="text" placeholder="Frag zu einem Subtyp..." style="flex:1;min-width:0;border:none;padding:0.6rem 0.4rem;font-size:0.95rem;background:transparent;color:inherit;" />' +
    '<button type="button" id="wegweiser-mic" aria-label="Frage per Sprache eingeben" title="Spracheingabe" style="flex:0 0 auto;border:none;background:none;width:2.6rem;height:2.6rem;cursor:pointer;font-size:1.3rem;color:var(--muted,#886);">\ud83c\udfa4</button>' +
    '<button type="submit" aria-label="Frage absenden" style="flex:0 0 auto;border:none;background:var(--copper,#a5652f);color:#fff;border-radius:50%;width:2.6rem;height:2.6rem;cursor:pointer;font-size:1.2rem;font-weight:bold;display:flex;align-items:center;justify-content:center;">\u2192</button>' +
    "</form>";

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  const msgsEl = panel.querySelector("#wegweiser-msgs");
  const formEl = panel.querySelector("#wegweiser-form");
  const inputEl = panel.querySelector("#wegweiser-input");
  const closeEl = panel.querySelector("#wegweiser-close");
  const micEl = panel.querySelector("#wegweiser-mic");
  const premiumBarEl = panel.querySelector("#wegweiser-premium-bar");
  const loginFormEl = panel.querySelector("#wegweiser-login-form");

  // Premium-Leiste: zeigt je nach Login-Status entweder einen Login-/Kauf-
  // Hinweis oder "Premium aktiv" mit Logout. Rein optisch/optimistisch -
  // die eigentliche Berechtigungspr\u00fcfung passiert serverseitig bei jeder
  // Anfrage; ein abgelaufener/ung\u00fcltiger Token f\u00fchrt serverseitig einfach
  // zum kostenlosen Antwortumfang, nie zu einem Fehler.
  function renderPremiumBar() {
    const token = getSessionToken();
    premiumBarEl.innerHTML = "";
    if (token) {
      const status = document.createElement("span");
      status.textContent = "\u2728 Premium-Zugang aktiv";
      status.style.color = "var(--copper,#a5652f)";
      const actions = document.createElement("span");
      actions.style.cssText = "display:flex;gap:0.6rem;flex-shrink:0;";
      const manage = document.createElement("button");
      manage.type = "button";
      manage.textContent = "Abo verwalten";
      manage.style.cssText = "background:none;border:none;color:var(--copper,#a5652f);text-decoration:underline;cursor:pointer;font-size:0.76rem;padding:0;";
      manage.addEventListener("click", openBillingPortal);
      const logout = document.createElement("button");
      logout.type = "button";
      logout.textContent = "Abmelden";
      logout.style.cssText = "background:none;border:none;color:var(--muted,#886);text-decoration:underline;cursor:pointer;font-size:0.76rem;padding:0;";
      logout.addEventListener("click", function () {
        clearSessionToken();
        renderPremiumBar();
        addMsg("Du bist abgemeldet.", "meta");
      });
      actions.appendChild(manage);
      actions.appendChild(logout);
      premiumBarEl.appendChild(status);
      premiumBarEl.appendChild(actions);
    } else {
      const info = document.createElement("span");
      info.textContent = "Wegweiser Premium: Zugriff auf mehr als 40 B\u00fccher";
      info.style.color = "var(--muted,#886)";
      const actions = document.createElement("span");
      actions.style.cssText = "display:flex;gap:0.6rem;flex-shrink:0;";
      if (STRIPE_PAYMENT_LINK_URL) {
        const subscribe = document.createElement("a");
        subscribe.href = STRIPE_PAYMENT_LINK_URL;
        subscribe.target = "_blank";
        subscribe.rel = "noopener";
        subscribe.textContent = "Monatlich";
        subscribe.title = "4,99 € / Monat (Abo, jederzeit kündbar)";
        subscribe.style.cssText = "color:var(--copper,#a5652f);text-decoration:underline;font-size:0.76rem;";
        actions.appendChild(subscribe);
      }
      if (STRIPE_PAYMENT_LINK_YEARLY_URL) {
        const subscribeYearly = document.createElement("a");
        subscribeYearly.href = STRIPE_PAYMENT_LINK_YEARLY_URL;
        subscribeYearly.target = "_blank";
        subscribeYearly.rel = "noopener";
        subscribeYearly.textContent = "Jährlich sparen";
        subscribeYearly.title = "49,99 € / Jahr (Abo, verlängert sich automatisch, jederzeit kündbar)";
        subscribeYearly.style.cssText = "color:var(--copper,#a5652f);text-decoration:underline;font-size:0.76rem;";
        actions.appendChild(subscribeYearly);
      }
      const login = document.createElement("button");
      login.type = "button";
      login.textContent = "Anmelden";
      login.style.cssText = "background:none;border:none;color:var(--copper,#a5652f);text-decoration:underline;cursor:pointer;font-size:0.76rem;padding:0;";
      login.addEventListener("click", showEmailStep);
      actions.appendChild(login);
      premiumBarEl.appendChild(info);
      premiumBarEl.appendChild(actions);
    }
  }

  // Eingebettetes Login-Formular statt window.prompt(): zwei aufeinander-
  // folgende native Dialoge mit einer Wartezeit dazwischen (Serveranfrage)
  // werden von mobilem Safari nicht zuverl\u00e4ssig angezeigt, besonders wenn
  // die App als Home-Bildschirm-Icon l\u00e4uft - der zweite prompt() kann
  // lautlos ausbleiben. Ein normales Formular im Chat-Fenster hat dieses
  // Problem nicht.
  function closeLoginForm() {
    loginFormEl.style.display = "none";
    loginFormEl.innerHTML = "";
  }

  function showEmailStep() {
    loginFormEl.style.display = "block";
    loginFormEl.innerHTML =
      '<p style="margin:0 0 0.5rem;font-size:0.8rem;color:var(--muted,#886);">Mit welcher E-Mail-Adresse hast du Wegweiser Premium abonniert?</p>' +
      '<form id="wegweiser-email-form" style="display:flex;gap:0.4rem;">' +
      '<input id="wegweiser-email-input" type="email" placeholder="deine@email.de" required style="flex:1;min-width:0;border:1px solid var(--line,#ddd);border-radius:6px;padding:0.5rem;font-size:0.9rem;" />' +
      '<button type="submit" style="flex:0 0 auto;border:none;background:var(--copper,#a5652f);color:#fff;border-radius:6px;padding:0.5rem 0.8rem;font-size:0.85rem;cursor:pointer;">Weiter</button>' +
      "</form>" +
      '<button id="wegweiser-login-cancel" type="button" style="background:none;border:none;color:var(--muted,#886);text-decoration:underline;cursor:pointer;font-size:0.76rem;padding:0.5rem 0 0;">Abbrechen</button>';

    const emailForm = loginFormEl.querySelector("#wegweiser-email-form");
    const emailInput = loginFormEl.querySelector("#wegweiser-email-input");
    loginFormEl.querySelector("#wegweiser-login-cancel").addEventListener("click", closeLoginForm);
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();
      requestCode(emailInput.value.trim());
    });
    emailInput.focus();
  }

  async function requestCode(email) {
    if (!email) return;
    loginFormEl.innerHTML = '<p style="margin:0;font-size:0.8rem;color:var(--muted,#886);">Sende Code \u2026</p>';
    try {
      const res = await fetch(WORKER_URL + "/auth/request-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });
      const data = await res.json();
      showCodeStep(email, data.message || data.error);
    } catch (e) {
      showEmailStep();
      addMsg("Verbindungsfehler. Bitte sp\u00e4ter erneut versuchen.", "meta");
    }
  }

  function showCodeStep(email, statusMessage) {
    loginFormEl.innerHTML =
      (statusMessage ? '<p style="margin:0 0 0.5rem;font-size:0.78rem;color:var(--muted,#886);">' + statusMessage + '</p>' : "") +
      '<p style="margin:0 0 0.5rem;font-size:0.8rem;color:var(--muted,#886);">6-stelligen Code aus der E-Mail eingeben:</p>' +
      '<form id="wegweiser-code-form" style="display:flex;gap:0.4rem;">' +
      '<input id="wegweiser-code-input" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="6" placeholder="000000" required style="flex:1;min-width:0;border:1px solid var(--line,#ddd);border-radius:6px;padding:0.5rem;font-size:1.1rem;letter-spacing:0.2em;text-align:center;" />' +
      '<button type="submit" style="flex:0 0 auto;border:none;background:var(--copper,#a5652f);color:#fff;border-radius:6px;padding:0.5rem 0.8rem;font-size:0.85rem;cursor:pointer;">Best\u00e4tigen</button>' +
      "</form>" +
      '<button id="wegweiser-login-cancel" type="button" style="background:none;border:none;color:var(--muted,#886);text-decoration:underline;cursor:pointer;font-size:0.76rem;padding:0.5rem 0 0;">Abbrechen</button>';

    const codeForm = loginFormEl.querySelector("#wegweiser-code-form");
    const codeInput = loginFormEl.querySelector("#wegweiser-code-input");
    loginFormEl.querySelector("#wegweiser-login-cancel").addEventListener("click", closeLoginForm);
    codeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      verifyCode(email, codeInput.value.trim());
    });
    codeInput.focus();
  }

  async function verifyCode(email, code) {
    if (!code) return;
    loginFormEl.innerHTML = '<p style="margin:0;font-size:0.8rem;color:var(--muted,#886);">Pr\u00fcfe Code \u2026</p>';
    try {
      const res = await fetch(WORKER_URL + "/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, code: code }),
      });
      const data = await res.json();
      if (data.sessionToken) {
        setSessionToken(data.sessionToken);
        closeLoginForm();
        renderPremiumBar();
        addMsg("Erfolgreich angemeldet.", "meta");
      } else {
        showCodeStep(email, data.error || "Code ung\u00fcltig oder abgelaufen. Bitte erneut versuchen.");
      }
    } catch (e) {
      showCodeStep(email, "Verbindungsfehler. Bitte erneut versuchen.");
    }
  }

  async function openBillingPortal() {
    const token = getSessionToken();
    if (!token) return;
    try {
      const res = await fetch(WORKER_URL + "/billing/portal", {
        headers: { "X-Session-Token": token },
      });
      const data = await res.json();
      if (data.url) {
        window.open(data.url, "_blank", "noopener");
      } else {
        addMsg(data.error || "Kundenportal konnte nicht ge\u00f6ffnet werden.", "meta");
      }
    } catch (e) {
      addMsg("Verbindungsfehler. Bitte sp\u00e4ter erneut versuchen.", "meta");
    }
  }

  // Nach Klick auf den Magic-Link landet der Nutzer mit ?wegweiser-token=...
  // wieder auf der App - Token gegen den Worker pr\u00fcfen und als Session
  // ablegen, danach den Parameter aus der URL entfernen.
  (async function consumeMagicLinkTokenFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("wegweiser-token");
    if (!token) return;
    try {
      const res = await fetch(WORKER_URL + "/auth/verify?token=" + encodeURIComponent(token));
      const data = await res.json();
      if (data.sessionToken) {
        setSessionToken(data.sessionToken);
        renderPremiumBar();
      }
    } catch (e) {
      // still fehlschlagen - Nutzer kann es \u00fcber "Anmelden" erneut versuchen
    } finally {
      params.delete("wegweiser-token");
      const newSearch = params.toString();
      const newUrl = window.location.pathname + (newSearch ? "?" + newSearch : "") + window.location.hash;
      window.history.replaceState({}, "", newUrl);
    }
  })();

  renderPremiumBar();

  // Spracheingabe via Web Speech API (Chrome/Android gut unterst\u00fctzt,
  // Safari/iOS eingeschr\u00e4nkt/nicht verf\u00fcgbar \u2013 dann Fallback-Hinweis).
  const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognitionCtor) {
    const recognition = new SpeechRecognitionCtor();
    recognition.lang = "de-DE";
    recognition.interimResults = true; // zeigt Text schon w\u00e4hrend des Sprechens live an
    recognition.continuous = true; // bricht nicht nach der ersten kurzen Sprechpause ab
    recognition.maxAlternatives = 1;
    let listening = false;

    recognition.addEventListener("result", function (e) {
      let transcript = "";
      for (let i = 0; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript;
      }
      inputEl.value = transcript;
    });
    recognition.addEventListener("end", function () {
      listening = false;
      micEl.textContent = "\ud83c\udfa4";
      micEl.style.color = "var(--muted,#886)";
      inputEl.focus();
    });
    recognition.addEventListener("error", function (e) {
      listening = false;
      micEl.textContent = "\ud83c\udfa4";
      micEl.style.color = "var(--muted,#886)";
      // "no-speech" / "aborted" sind normale Abbr\u00fcche (z.B. Stille) - kein Fehlerhinweis n\u00f6tig,
      // der bisher erkannte Text bleibt im Feld stehen und kann normal abgeschickt werden.
      if (e.error !== "no-speech" && e.error !== "aborted") {
        addMsgFallbackNotice();
      }
    });

    function addMsgFallbackNotice() {
      addMsg("Spracheingabe hat nicht funktioniert. Bitte Mikrofonzugriff erlauben oder Frage eintippen.", "meta");
    }

    micEl.addEventListener("click", function () {
      if (listening) {
        recognition.stop();
        return;
      }
      listening = true;
      micEl.textContent = "\ud83d\udd34";
      micEl.style.color = "#c0392b";
      try {
        recognition.start();
      } catch (e) {
        listening = false;
        micEl.textContent = "\ud83c\udfa4";
      }
    });
  } else {
    // Kein Web-Speech-Support (z.B. viele Safari/iOS-Versionen) \u2013 Mikrofon-Button
    // bleibt sichtbar, weist beim Klick nur auf die Texteingabe hin.
    micEl.addEventListener("click", function () {
      addMsg("Spracheingabe wird von diesem Browser leider nicht unterst\u00fctzt. Bitte die Frage eintippen.", "meta");
    });
  }

  function addMsg(text, kind) {
    const div = document.createElement("div");
    div.style.cssText =
      "margin-bottom:0.6rem;white-space:pre-wrap;" +
      (kind === "user" ? "font-weight:bold;" : "") +
      (kind === "meta" ? "font-size:0.78rem;color:var(--muted,#886);" : "");
    div.textContent = text;
    msgsEl.appendChild(div);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return div;
  }

  // Vorschlagschips: senken die Einstiegsh\u00fcrde beim ersten \u00d6ffnen, wenn das
  // Chat-Fenster noch leer ist und ein neuer Nutzer nicht wei\u00df, was er fragen kann.
  const SUGGESTION_CHIPS = [
    "Was ist meine Tierentsprechung?",
    "Welcher Subtyp passt zu impulsiv?",
    "Was ist der Unterschied zwischen Leidenschaft und Wunde?",
    "Wie finde ich meinen Subtyp?",
  ];
  function removeSuggestionChips() {
    const el = msgsEl.querySelector("#wegweiser-chips");
    if (el) el.remove();
  }
  function showSuggestionChips() {
    if (msgsEl.children.length) return; // nur beim allerersten \u00d6ffnen zeigen
    const wrap = document.createElement("div");
    wrap.id = "wegweiser-chips";
    wrap.style.cssText = "display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.6rem;";
    SUGGESTION_CHIPS.forEach(function (q) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.textContent = q;
      chip.style.cssText =
        "border:1px solid var(--copper,#a5652f);background:transparent;color:var(--copper,#a5652f);" +
        "border-radius:999px;padding:0.35rem 0.7rem;font-size:0.8rem;cursor:pointer;font-family:inherit;text-align:left;";
      chip.addEventListener("mouseover", function () { chip.style.background = "var(--copper,#a5652f)"; chip.style.color = "#fff"; });
      chip.addEventListener("mouseout", function () { chip.style.background = "transparent"; chip.style.color = "var(--copper,#a5652f)"; });
      chip.addEventListener("click", function () { askQuestion(q); });
      wrap.appendChild(chip);
    });
    msgsEl.appendChild(wrap);
  }

  async function askQuestion(question) {
    if (!question) return;
    removeSuggestionChips();
    addMsg(question, "user");
    inputEl.value = "";
    const loadingEl = addMsg("\u2026 denkt nach \u2026", "meta");

    try {
      const headers = { "Content-Type": "application/json" };
      const sessionToken = getSessionToken();
      if (sessionToken) headers["X-Session-Token"] = sessionToken;

      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ question: question, lang: "de" }),
      });
      const data = await res.json();
      loadingEl.remove();
      if (data.error) {
        addMsg("Fehler: " + data.error, "meta");
      } else {
        addMsg(data.answer, "answer");
        if (data.sources && data.sources.length) {
          addMsg("Quellen: " + data.sources.join(", "), "meta");
        }
      }
    } catch (err) {
      loadingEl.remove();
      addMsg("Verbindungsfehler. Bitte sp\u00e4ter erneut versuchen.", "meta");
    }
  }

  btn.addEventListener("click", function () {
    panel.style.display = panel.style.display === "none" ? "flex" : "none";
    if (panel.style.display === "flex") {
      inputEl.focus();
      playMilestone("wegweiser-intro");
      showSuggestionChips();
    }
  });
  closeEl.addEventListener("click", function () {
    panel.style.display = "none";
  });

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    askQuestion(inputEl.value.trim());
  });
})();

// Sequentielle Sprachwiedergabe: verhindert, dass Begr\u00fc\u00dfung und
// Meilenstein-Botschaften gleichzeitig/\u00fcberlappend abgespielt werden.
// onStart wird erst nach erfolgreichem Play-Start aufgerufen, damit ein von der
// Autoplay-Policy blockierter Versuch nicht f\u00e4lschlich als "abgespielt" gilt.
const _voiceQueue = [];
let _voicePlaying = false;
function queueVoice(url, onStart) {
  if (isVoiceMuted()) return;
  _voiceQueue.push({ url, onStart });
  _playNextVoice();
}
function _playNextVoice() {
  if (_voicePlaying || !_voiceQueue.length) return;
  if (isVoiceMuted()) { _voiceQueue.length = 0; return; }
  _voicePlaying = true;
  const item = _voiceQueue.shift();
  const audio = new Audio(item.url);
  const done = () => { _voicePlaying = false; _playNextVoice(); };
  audio.addEventListener("ended", done);
  audio.addEventListener("error", done);
  audio.play().then(() => { if (item.onStart) item.onStart(); }).catch(done);
}

// Meilenstein-Botschaften: pers\u00f6nliche, je einmalige Audio-Nachrichten zu
// besonderen Momenten der Nutzung (7 Tage, 1 Monat, 9 Grundtypen, 27 Subtypen,
// Wiederkehr nach Pause). Laufen immer \u00fcber queueVoice, damit sie nie mit der
// Begr\u00fc\u00dfung kollidieren.
const MILESTONE_FIRST_VISIT_KEY = "enneagramm-kompass:first-visit-date";
const MILESTONE_LAST_VISIT_KEY = "enneagramm-kompass:last-visit-date";
const MILESTONE_VIEWED_TYPES_KEY = "enneagramm-kompass:viewed-types";
const MILESTONE_VIEWED_SUBTYPES_KEY = "enneagramm-kompass:viewed-subtypes";
const MILESTONE_PLAYED_PREFIX = "enneagramm-kompass:milestone-played:";

function _milestonePlayed(id) {
  return !!localStorage.getItem(MILESTONE_PLAYED_PREFIX + id);
}
function _readJSONSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); } catch (e) { return new Set(); }
}
function _writeJSONSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}
function playMilestone(id) {
  if (_milestonePlayed(id)) return;
  queueVoice("sounds/milestones/" + id + ".mp3", () => {
    localStorage.setItem(MILESTONE_PLAYED_PREFIX + id, "1");
  });
}

// Zeitbasierte Meilensteine: wird nach der ersten Nutzerinteraktion einmal
// pro Seitenaufruf gepr\u00fcft (siehe initTimeMilestones weiter unten).
function _checkTimeMilestones() {
  const now = Date.now();
  const DAY = 864e5;
  let firstVisit = localStorage.getItem(MILESTONE_FIRST_VISIT_KEY);
  if (!firstVisit) {
    // Bestandsnutzer (erkennbar an VISITED_KEY, das es schon vor den
    // Meilensteinen gab) bekommen ein zur\u00fcckdatiertes Startdatum, damit
    // 7-Tage/1-Monat nicht erneut von vorn zu laufen beginnen.
    const isExistingUser = !!localStorage.getItem(VISITED_KEY);
    firstVisit = String(now - (isExistingUser ? 31 * DAY : 0));
    localStorage.setItem(MILESTONE_FIRST_VISIT_KEY, firstVisit);
  }
  const lastVisit = localStorage.getItem(MILESTONE_LAST_VISIT_KEY);
  if (lastVisit) {
    const gap = now - Number(lastVisit);
    // Ab 60 Tagen nur noch die st\u00e4rkere Botschaft, nicht zus\u00e4tzlich die 30-Tage-Variante.
    if (gap >= 60 * DAY) playMilestone("wiederkehr-lang");
    else if (gap >= 30 * DAY) playMilestone("wiederkehr");
  }
  localStorage.setItem(MILESTONE_LAST_VISIT_KEY, String(now));
  const daysSinceFirst = (now - Number(firstVisit)) / DAY;
  if (daysSinceFirst >= 7) playMilestone("sieben-tage");
  if (daysSinceFirst >= 30) playMilestone("ein-monat");
  if (daysSinceFirst >= 365) playMilestone("jahrestag");
}

// Routenbasierte Meilensteine (9 Grundtypen, 27 Subtypen, Wunde/Krisenkompass):
// z\u00e4hlt bzw. pr\u00fcft bei jedem Seitenaufruf.
function trackMilestoneVisit(base, param) {
  const typMatch = base.match(/^portrait-typ-([1-9])$/);
  if (typMatch) {
    const set = _readJSONSet(MILESTONE_VIEWED_TYPES_KEY);
    set.add(typMatch[1]);
    _writeJSONSet(MILESTONE_VIEWED_TYPES_KEY, set);
    if (set.size >= 9) playMilestone("neun-typen");
  }
  if (base === "subtype" && param && /^s[eox][1-9]$/i.test(param)) {
    const set = _readJSONSet(MILESTONE_VIEWED_SUBTYPES_KEY);
    set.add(param.toLowerCase());
    _writeJSONSet(MILESTONE_VIEWED_SUBTYPES_KEY, set);
    if (set.size >= 27) playMilestone("27-subtypen");
  }
  if (base === "wunden" || base === "krisenkompass") {
    playMilestone("wunde-troest");
  }
}

// Pers\u00f6nliche gesprochene Begr\u00fc\u00dfung \u2013 einmal pro Browser-Session, ausgel\u00f6st
// durch die erste Nutzerinteraktion (Autoplay mit Ton wird sonst geblockt).
(function initWelcomeGreeting() {
  const KEY = 'kompass-welcome-played';
  if (sessionStorage.getItem(KEY)) return;
  if (isVoiceMuted()) return; // Nutzer hat die Sprachausgabe stummgeschaltet
  const code = hasProfile() ? getProfile().toLowerCase() : 'unknown';
  const url = 'sounds/welcome/welcome_' + code + '.mp3';
  const events = ['click', 'touchstart', 'keydown'];
  let played = false;
  const play = () => {
    if (played) return; // verhindert Doppel-Trigger (touchstart + click auf Mobilger\u00e4ten = Hall-Effekt)
    if (isVoiceMuted()) { // erneut pr\u00fcfen: Nutzer k\u00f6nnte zwischen Seitenaufruf und erster Interaktion stummgeschaltet haben
      played = true;
      events.forEach(ev => document.removeEventListener(ev, play));
      return;
    }
    played = true;
    sessionStorage.setItem(KEY, '1');
    events.forEach(ev => document.removeEventListener(ev, play));
    queueVoice(url);
  };
  events.forEach(ev => document.addEventListener(ev, play, { once: true }));
})();

// Zeitbasierte Meilenstein-Pr\u00fcfung (7 Tage, 1 Monat, Wiederkehr) \u2013 wartet wie
// die Begr\u00fc\u00dfung auf die erste Nutzerinteraktion (Autoplay-Policy) und l\u00e4uft
// danach immer nach der Begr\u00fc\u00dfung (Reihenfolge \u00fcber die Voice-Queue).
(function initTimeMilestones() {
  const events = ['click', 'touchstart', 'keydown'];
  let done = false;
  const check = () => {
    if (done) return;
    done = true;
    events.forEach(ev => document.removeEventListener(ev, check));
    _checkTimeMilestones();
  };
  events.forEach(ev => document.addEventListener(ev, check, { once: true }));
})();

// Meilenstein "Buch-Dank": beim ersten Klick auf einen Buchtipp-Link, egal
// auf welcher Seite. playMilestone() ist selbst idempotent, daher gen\u00fcgt ein
// dauerhafter, delegierter Klick-Listener statt eines "once"-Patterns.
document.addEventListener("click", function (e) {
  if (e.target.closest && e.target.closest(".book-tip")) {
    playMilestone("buch-dank");
  }
}, true);

// Gesprochene Begr\u00fc\u00dfung nach erfolgreicher Freischaltung/Kauf \u2013 eine einzige,
// allgemeine Nachricht (Subtyp ist beim Kauf oft noch nicht bekannt). Klick auf
// den Freischalt-Button ist selbst die Nutzerinteraktion, Autoplay ist also erlaubt.
function playPurchaseWelcome() {
  if (isVoiceMuted()) return;
  try { new Audio('sounds/purchase/purchase_willkommen.mp3').play().catch(() => {}); } catch (e) {}
}

// Sprachwechsel-Link: kurze gesprochene Ansage in der Zielsprache, dann Navigation.
// Fallback-Timeout, falls die Audiodatei nicht l\u00e4dt oder 'ended' nicht feuert.
function _switchLangVoice(evt, url, audioFile) {
  evt.preventDefault();
  let navigated = false;
  const go = () => { if (navigated) return; navigated = true; window.location.href = url; };
  try {
    const audio = new Audio(audioFile);
    audio.addEventListener('ended', go);
    audio.play().catch(go);
  } catch (e) { go(); return; }
  setTimeout(go, 4000);
}
window._switchLangVoice = _switchLangVoice;
