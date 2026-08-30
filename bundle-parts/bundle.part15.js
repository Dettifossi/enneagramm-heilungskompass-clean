function subtypChecklistePage() {
  const parts = state.route.split("/");
  const typNr = parts[1] ? parseInt(parts[1]) : null;
  const inst  = parts[2] || null; // "se" | "so" | "sx"

  // Ebene 3: einzelne Checkliste gro\u00df
  if (typNr && inst && INSTINKT_LABEL[inst]) {
    const code = `${inst}${typNr}`;
    return shell(`
      ${pageHeader("subtypen-checklisten")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="subtypen-checklisten/${typNr}">\u2190 Typ ${typNr} Subtypen</button>
        <h1 class="psycho-detail__title">Typ ${typNr} \u00b7 ${INSTINKT_LABEL[inst]} (${INSTINKT_KURZ[inst]}${typNr})</h1>
        <div class="psycho-img-wrap">
          <img src="${R2_CDN}assets/schaubilder/subtypen-checklisten/${code}.jpg"
               alt="Checkliste ${INSTINKT_KURZ[inst]}${typNr}"
               class="psycho-img" />
        </div>
      </div>
    `);
  }

  // Ebene 2: 3 Subtypen eines Typs
  if (typNr && typNr >= 1 && typNr <= 9) {
    return shell(`
      ${pageHeader("subtypen-checklisten")}
      <div class="psycho-wrap">
        <button class="ghost-link psycho-back" data-route="subtypen-checklisten">\u2190 Alle Typen</button>
        <p class="eyebrow">Subtypen-Checklisten \u00b7 Typ ${typNr}</p>
        <h1 class="section-title">Typ ${typNr} &ndash; Welcher Subtyp bin ich?</h1>
        <p class="psycho-intro">W\u00e4hle einen Instinktschwerpunkt und pr\u00fcfe anhand der Checkliste, wie gut die Aussagen auf dich zutreffen.</p>
        <div class="psycho-grid psycho-grid--3">
          ${["se","so","sx"].map(ins => `
            <button class="psycho-card psycho-card--inst" data-route="subtypen-checklisten/${typNr}/${ins}">
              <span class="psycho-card__nr">${INSTINKT_KURZ[ins]}${typNr}</span>
              <span class="psycho-card__name">${INSTINKT_LABEL[ins]}</span>
              <span class="psycho-card__arrow">\u2192</span>
            </button>
          `).join("")}
        </div>
      </div>
    `);
  }

  // Ebene 1: Typauswahl 1&ndash;9
  return shell(`
    ${pageHeader("subtypen-checklisten")}
    <div class="psycho-wrap">
      <p class="eyebrow">Schaubilder \u00b7 Subtypen-Checklisten</p>
      <h1 class="section-title">Subtypen-Checklisten</h1>
      <p class="psycho-intro">Welcher der 27 Subtypen beschreibt dich am treffendsten? W\u00e4hle deinen Haupttyp &ndash; dann kannst du die drei Subtypen vergleichen und anhand der Checklisten pr\u00fcfen, was auf dich zutrifft.</p>
      <div class="psycho-grid">
        ${[1,2,3,4,5,6,7,8,9].map(n => `
          <button class="psycho-card" data-route="subtypen-checklisten/${n}" style="border-color:${typeColor(n)};background:linear-gradient(160deg, ${typeColor(n)}18, ${typeColor(n)}08);">
            <span class="psycho-card__nr" style="color:${typeColor(n)};">${n}</span>
            <span class="psycho-card__name">${TYPNAMEN_MOTIV[n]}</span>
            <span class="psycho-card__arrow" style="color:${typeColor(n)};">\u2192</span>
          </button>
        `).join("")}
      </div>
      ${relatedLinks([
        {route:"subtypen-schaubilder", label:"Subtypen-Schaubilder"},
        {route:"bedeutung-27-subtypen", label:"Bedeutung der 27 Subtypen"},
        {route:"triadendefizite", label:"Triadendefizite"},
      ])}
    </div>
  `);
}

const EDELSTEINE = [
  { typ: 1, name: "Amethyst",    crystal: "The Perfection Detox",   file: "typ-1-amethyst.png" },
  { typ: 2, name: "Rosenquarz",  crystal: "The Self-Love Shield",   file: "typ-2-rosenquarz.png" },
  { typ: 3, name: "Tigerauge",   crystal: "The High-Achiever Fuel", file: "typ-3-tigerauge.png" },
  { typ: 4, name: "Rhodonit",    crystal: "The Emotion Alchemist",  file: "typ-4-rhodonit.png" },
  { typ: 5, name: "Amazonit",    crystal: "The Brain-Battery Saver",file: "typ-5-amazonit.png" },
  { typ: 6, name: "H\u00e4matit",     crystal: "The Bulletproof Vest",   file: "typ-6-haematit.png" },
  { typ: 7, name: "Rauchquarz",  crystal: "The Idea Grounder",      file: "typ-7-rauchquarz.png" },
  { typ: 8, name: "Fluorit",     crystal: "The Strategy Matrix",    file: "typ-8-fluorit.png" },
  { typ: 9, name: "Karneol",     crystal: "The Action Catalyst",    file: "typ-9-karneol.png" },
];

function subtypeSchaubilderPage() {
  const code = state.route.split("/")[1] || null;

  // Detailansicht: alle Seiten eines Subtyps
  if (code) {
    const entry = subtypeEntry(code);
    if (!entry || !entry.visualPages || !entry.visualPages.length) {
      return shell(`
        <section class="narrow" style="padding:1.5rem 1rem 0;">
          <button class="ghost-link" data-route="subtypen-schaubilder">\u2190 Zur\u00fcck zur \u00dcbersicht</button>
        </section>
        <section class="narrow centered" style="padding:1rem;">
          <p>F\u00fcr diesen Subtyp sind noch keine Schaubilder hinterlegt.</p>
        </section>
      `);
    }
    const tc = typeColorFromCode(code);
    const pagesHtml = entry.visualPages.map(pg => `
      <figure class="vollseite-karte" style="margin:0 0 1.5rem;">
        <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
        <div class="card-pg-wrap">
          <img src="${cdnImg(pg.src)}" alt="${pg.alt}" class="vollseite-karte__img" loading="lazy"
            onerror="this.closest('.vollseite-karte').style.display='none'" />
          <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
        </div>
        <figcaption class="vollseite-karte__titel">${pg.title}${pg.caption ? ` \u00b7 <span style="font-weight:400;opacity:.7;">${pg.caption}</span>` : ""}</figcaption>
      </figure>
    `).join("");

    return shell(`
      ${pageHeader("subtypen-schaubilder")}
      <section class="narrow" style="padding:1rem 1rem 0;">
        <button class="ghost-link" data-route="subtypen-schaubilder">\u2190 Alle Subtypen</button>
      </section>
      <section class="narrow centered" style="padding:.75rem 1rem 1rem;">
        <p class="eyebrow" style="color:${tc}">${entry.code}</p>
        <h1 style="color:${tc};font-size:1.8rem;">${entry.title}</h1>
        <p class="lead-small">${entry.coreSentence || ""}</p>
      </section>
      <section class="narrow" style="padding:0 1rem 2rem;">
        ${pagesHtml}
        <button class="secondary" style="width:100%;margin-top:.5rem;" data-route="subtypen-schaubilder">\u2190 Zur\u00fcck zur \u00dcbersicht</button>
      </section>
    `);
  }

  // \u00dcbersicht: alle 27 Subtypen als klickbare Kacheln, gruppiert nach Typ
  const typeNames = {
    1:"Typ 1 \u00b7 Der Verbesserer", 2:"Typ 2 \u00b7 Der Helfer", 3:"Typ 3 \u00b7 Der Macher",
    4:"Typ 4 \u00b7 Der Individualist", 5:"Typ 5 \u00b7 Der Forscher", 6:"Typ 6 \u00b7 Der Loyale",
    7:"Typ 7 \u00b7 Der Enthusiast", 8:"Typ 8 \u00b7 Der Herausforderer", 9:"Typ 9 \u00b7 Der Vermittler"
  };
  const instLabels = { se: "Selbst\xaderhaltung", so: "Sozial", sx: "Sexuell" };

  const groupsHtml = [1,2,3,4,5,6,7,8,9].map(n => {
    const tc = typeColor(n);
    const codes = ["se","so","sx"].map(inst => `${inst}${n}`);
    const tilesHtml = codes.map(c => {
      const e = subtypeEntry(c);
      const inst = c.slice(0,2);
      const thumb = cdnImg(e?.visualPages?.[0]?.src || "");
      return `
        <button class="subtyp-schaubilder-tile" data-route="subtypen-schaubilder/${c}" style="border-color:${tc};">
          ${thumb ? `<img src="${thumb}" alt="${c} Vorschau" loading="lazy" style="width:100%;border-radius:6px 6px 0 0;display:block;" onerror="this.style.display='none'" />` : ""}
          <div style="padding:.6rem .75rem .75rem;">
            <span style="font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${tc};">${instLabels[inst]}</span>
            <p style="margin:.15rem 0 0;font-size:.88rem;font-weight:600;hyphens:auto;overflow-wrap:break-word;">${e?.title || c.toUpperCase()}</p>
            <p style="margin:.15rem 0 0;font-size:.75rem;color:#888;">${e?.visualPages?.length || 0} Schaubilder</p>
          </div>
        </button>
      `;
    }).join("");
    return `
      <div style="margin-bottom:1.5rem;">
        <h2 style="font-size:1rem;font-weight:700;color:${tc};border-left:3px solid ${tc};padding-left:.6rem;margin:0 0 .75rem;">${typeNames[n]}</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;">
          ${tilesHtml}
        </div>
      </div>
    `;
  }).join("");

  return shell(`
    ${pageHeader("subtypen-schaubilder")}
    <section class="narrow centered" style="padding:1rem 1rem .5rem;">
      <p class="eyebrow">Schaubilder \u00b7 Alle 27 Subtypen</p>
      <h1>Subtypen-Schaubilder</h1>
      <p class="lead-small">Alle Originaltafeln der 27 Enneagramm-Subtypen \u2014 tippen Sie auf einen Subtyp, um alle Schaubilder zu sehen.</p>
    </section>
    <section class="narrow" style="padding:.5rem 1rem 2rem;">
      ${groupsHtml}
      ${relatedLinks([
        {route:"subtypen-checklisten", label:"Subtypen-Checklisten"},
        {route:"bedeutung-27-subtypen", label:"Bedeutung der 27 Subtypen"},
        {route:"horney-triaden", label:"Horney-Triaden"},
      ])}
    </section>
  `);
}

// Eigene, gedämpfte Kategorie-Farbpalette (bewusst abgesetzt von TYPE_COLORS, damit
// keine Verwechslung mit den Enneagrammtypfarben entsteht) – angelehnt an medizinische
// Fachbuch-Konventionen (Herz/Kreislauf rötlich, Bewegungsapparat erdig, Atemwege luftig-
// bläulich, Haut hautfarben, Nerven/Psyche blau, Immunsystem weinrot, Onkologie gedämpft-
// dunkel), aber entsättigt genug, um zum ruhigen Gesamtbild des Kompasses zu passen.
const PSYCHOSOMATIK_KATEGORIEN = [
  { key: "herz-kreislauf", label: "Herz-Kreislauf-System", farbe: "#b6483f" },
  { key: "bewegungsapparat", label: "Bewegungsapparat", farbe: "#8a7860" },
  { key: "atemwege", label: "Atemwege & Lunge", farbe: "#4a7f91" },
  { key: "verdauung", label: "Verdauungssystem", farbe: "#ab7d42" },
  { key: "niere", label: "Niere & Blase", farbe: "#3d6b5c" },
  { key: "haut", label: "Haut", farbe: "#c99b7a" },
  { key: "augen", label: "Augen", farbe: "#4d7a8c" },
  { key: "hormone-stoffwechsel", label: "Hormone & Stoffwechsel", farbe: "#7d6a8c" },
  { key: "nerven-psyche", label: "Nervensystem & Psyche", farbe: "#46688f" },
  { key: "immunsystem", label: "Immunsystem & Autoimmun", farbe: "#7a3d4a" },
  { key: "onkologie", label: "Onkologie", farbe: "#5c4a5e" },
  { key: "psychiatrie", label: "Psychiatrische Erkrankungen", farbe: "#6a4d6e" },
  { key: "sonstige", label: "Sonstige Krankheitsbilder", farbe: "#6b6558" },
];

