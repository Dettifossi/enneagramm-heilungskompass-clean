const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const KARTEN = [{"key": "platin", "typ": 1, "name": "Platinum metallicum", "col": "#5f5f5f", "kern": "Die Überlegenheit: die Vorstellung, überlegen zu sein", "n": 106}, {"key": "hyoscyamus", "typ": 2, "name": "Hyoscyamus niger", "col": "#7a2fa8", "kern": "Das Verkauftwerden: sie denkt, sie werde verkauft, oder sie sei schon verkauft worden", "n": 140}, {"key": "tarentula", "typ": 3, "name": "Tarentula hispanica", "col": "#1fa688", "kern": "Das Unsichtbare: die Vorstellung, von unsichtbaren Dingen umgeben zu sein", "n": 96}, {"key": "ignatia", "typ": 4, "name": "Ignatia amara", "col": "#3cbf1f", "kern": "Das Gelübde: sie würde ihr Gelübde brechen", "n": 104}, {"key": "stramonium", "typ": 5, "name": "Stramonium", "col": "#124fcc", "kern": "Die Wildnis: allein in der Wildnis zu sein", "n": 234}, {"key": "opium", "typ": 6, "name": "Opium", "col": "#8a5222", "kern": "Die Verfolgung: jeder um ihn herum sei ein Mörder, er sei ein Verbrecher oder werde für ein Unrecht bestraft", "n": 111}, {"key": "belladonna", "typ": 7, "name": "Belladonna", "col": "#d4a800", "kern": "Das Gefangenwerden: er würde gefangengenommen werden", "n": 231}, {"key": "veratrum", "typ": 8, "name": "Veratrum album", "col": "#a00802", "kern": "Der Prinz: die Vorstellung, ein Prinz zu sein, Vormachtstellung und Macht", "n": 101}, {"key": "cannabis", "typ": 9, "name": "Cannabis indica", "col": "#cc6e00", "kern": "Der Gnom: die Vorstellung, ein Gnom oder Wicht zu sein", "n": 141}];

export function mindmapsUebersichtPage() {
  const karten = KARTEN.map(k => {
    const inner = `
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.35rem;">
        <span style="display:inline-flex;align-items:center;justify-content:center;width:1.8rem;height:1.8rem;border-radius:50%;background:${k.col};color:#fff;font-weight:700;font-size:0.9rem;flex-shrink:0;">${k.typ}</span>
        <strong style="color:${k.col};">${k.name}</strong>
        ${k.n ? `<span style="margin-left:auto;font-size:0.78rem;color:var(--muted);">${k.n} Rubriken</span>` : ""}
      </div>
      <div style="font-size:0.88rem;line-height:1.5;color:var(--ink);">${k.kern}</div>`;
    const stil = `display:block;border-left:3px solid ${k.col};padding:0.8rem 1rem;background:color-mix(in srgb, ${k.col} 6%, transparent);border-radius:0 0.6rem 0.6rem 0;text-decoration:none;color:inherit;`;
    return k.key ? `<a href="#mindmap-${k.key}" style="${stil}">${inner}</a>` : `<div style="${stil}opacity:0.65;">${inner}</div>`;
  }).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("mindmaps-single-rubriken")}
      <div class="page-content">
        <button class="ghost-link" data-route="wahnideen-nicht-reale-vorstellungen" style="margin-bottom:1.2rem;">← Zum Wissensartikel »Nicht reale Vorstellungen«</button>
        <p class="eyebrow">Wissen · Homöopathie</p>
        <h1 class="section-title">Mindmaps der Single-Rubriken</h1>
        <p class="lead-small">Eine Single-Rubrik ist eine Rubrik, in der nur ein einziges homöopathisches Mittel steht. Zu jedem der neun Enneagramm-Heilmittel dieses Kompasses zeigt eine Mindmap alle Single-Rubriken des Geist-/Gemütsbereichs, nach Themen geordnet und aufklappbar. Oben steht jeweils die Hauptwahnidee des Typs.</p>
        <div style="display:grid;gap:0.8rem;margin:1.4rem 0;">${karten}</div>
        <p class="vb-anmerkung" style="font-style:italic;">Wichtig für das Verständnis: Die Seiten geben Rubriken wieder, die in der ›Homöopathischen Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich‹ des Autors stehen. Sie stellen keine Diagnose, geben keine Therapieempfehlung und treffen keine Aussage zu Wirkung oder Heilung.</p>
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("homoeopathische-arzneimittellehre-der-single-rubriken-aus-de", "8.594 Single-Rubriken der 500 wichtigsten hom\u00f6opathischen Arzneimittel \u2013 das Standardwerk zur Sehgal-Methode.", "Hom\u00f6opathische Arzneimittellehre der Single-Rubriken")}
      ${bookTip("der-kern-der-heilmittel-the-core-of-the-remedies-gebunden", "Das geistige Wesen der 500 wichtigsten hom\u00f6opathischen Arzneimittel \u2013 \u00fcber 8.500 Single-Rubriken.", "Der Kern der Heilmittel")}
      ${bookTip("rathmer-s-repertorium-gebundene-ausgabe", "Das weltweit umfangreichste hom\u00f6opathische Gem\u00fctsrepertorium \u2013 1568 Seiten, 20.000 Rubriken.", "Rathmer\u2019s Repertorium")}
      ${bookTip("repertorium-der-hervorstechenden-gemuetsrubriken-gebundene-a", "Die hervorstechendsten Gem\u00fctsrubriken kompakt und kommentiert \u2013 das Praxisrepertorium f\u00fcr den hom\u00f6opathischen Alltag.", "Repertorium der hervorstechenden Gem\u00fctsrubriken")}
      ${bookTip("enneagramm-homoeopathie-band-1", "Die Grundlage der Enneagramm-Homöopathie – wie Persönlichkeitstyp und Heilmittelwahl zusammenhängen, auch für Laien gut verständlich.", "Enneagramm-Homöopathie – Band 1")}
      ${bookTip("enneagramm-homoeopathie-band-2", "Vertiefung und Erweiterung: Die 27 Subtypen und ihre individuellen homöopathischen Heilmittel.", "Enneagramm-Homöopathie – Band 2")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-1-taschenbuch", "Das Lehrbuch zur Enneagramm-Hom\u00f6opathie \u2013 Band\u00a01: Grundlagen, Typen und Heilmittel.", "Lehrbuch der Enneagramm-Hom\u00f6opathie \u2013 Band\u00a01")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-2-taschenbuch", "Band\u00a02 des Lehrbuchs: Vertiefte Heilmittelzuordnungen f\u00fcr alle 27 Subtypen.", "Lehrbuch der Enneagramm-Hom\u00f6opathie \u2013 Band\u00a02")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-3-taschenbuch", "Band\u00a03 des Lehrbuchs: Das vollst\u00e4ndige System der Enneagramm-Hom\u00f6opathie in der Praxis.", "Lehrbuch der Enneagramm-Hom\u00f6opathie \u2013 Band\u00a03")}
      ${bookTip("die-enneagramm-homoeopathie-unterrichtsmaterial", "Das Unterrichtsskript zur Enneagramm-Hom\u00f6opathie \u2013 376 Seiten kompaktes Lernmaterial f\u00fcr das Selbststudium.", "Enneagramm-Hom\u00f6opathie \u2013 Unterrichtsmaterial (376 Seiten)")}
      ${bookTip("das-unterrichtsskript-zur-sehgal-ausbildung-ebook", "Das vollst\u00e4ndige Unterrichtsskript der Sehgal-Schule \u2013 500 Seiten f\u00fcr alle, die die Sehgal-Methode tiefgreifend erlernen m\u00f6chten.", "Unterrichtsskript zur Sehgal-Ausbildung (500 Seiten)")}
      ${relatedLinks([
        {route:"wahnideen-nicht-reale-vorstellungen", label:"Wissensartikel: Wahnideen im Enneagramm und in der Homöopathie"},
        {route:"nicht-reale-vorstellungen", label:"Schaubild: Nicht reale Vorstellungen"},
        {route:"enneagramm-homoeopathie", label:"Enneagramm & Homöopathie"},
      ])}
    </div>
  `);
}
