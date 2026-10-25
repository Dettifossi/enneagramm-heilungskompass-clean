const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const KARTEN = [{"key": null, "typ": 1, "name": "Platinum metallicum", "col": "#5f5f5f", "kern": "Superiority (mind map to follow)", "n": 0}, {"key": "hyoscyamus", "typ": 2, "name": "Hyoscyamus niger", "col": "#7a2fa8", "kern": "Being sold: she thinks she will be sold, or has already been sold", "n": 140}, {"key": "tarentula", "typ": 3, "name": "Tarentula hispanica", "col": "#1fa688", "kern": "The unseen: the idea of being surrounded by unseen things", "n": 96}, {"key": "ignatia", "typ": 4, "name": "Ignatia amara", "col": "#3cbf1f", "kern": "The vow: she would break her vow", "n": 104}, {"key": "stramonium", "typ": 5, "name": "Stramonium", "col": "#124fcc", "kern": "The wilderness: being alone in the wilderness", "n": 234}, {"key": "opium", "typ": 6, "name": "Opium", "col": "#8a5222", "kern": "Persecution: everyone around him is a murderer, he is a criminal or will be punished for a wrong", "n": 111}, {"key": "belladonna", "typ": 7, "name": "Belladonna", "col": "#d4a800", "kern": "Being caught: he would be captured", "n": 231}, {"key": "veratrum", "typ": 8, "name": "Veratrum album", "col": "#a00802", "kern": "The prince: the idea of being a prince, supremacy and power", "n": 101}, {"key": "cannabis", "typ": 9, "name": "Cannabis indica", "col": "#cc6e00", "kern": "The gnome: the idea of being a gnome or wight", "n": 141}];

export function mindmapsUebersichtPage() {
  const karten = KARTEN.map(k => {
    const inner = `
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.35rem;">
        <span style="display:inline-flex;align-items:center;justify-content:center;width:1.8rem;height:1.8rem;border-radius:50%;background:${k.col};color:#fff;font-weight:700;font-size:0.9rem;flex-shrink:0;">${k.typ}</span>
        <strong style="color:${k.col};">${k.name}</strong>
        ${k.n ? `<span style="margin-left:auto;font-size:0.78rem;color:var(--muted);">${k.n} rubrics</span>` : ""}
      </div>
      <div style="font-size:0.88rem;line-height:1.5;color:var(--ink);">${k.kern}</div>`;
    const stil = `display:block;border-left:3px solid ${k.col};padding:0.8rem 1rem;background:color-mix(in srgb, ${k.col} 6%, transparent);border-radius:0 0.6rem 0.6rem 0;text-decoration:none;color:inherit;`;
    return k.key ? `<a href="#mindmap-${k.key}" style="${stil}">${inner}</a>` : `<div style="${stil}opacity:0.65;">${inner}</div>`;
  }).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("mindmaps-single-rubriken")}
      <div class="page-content">
        <button class="ghost-link" data-route="wahnideen-nicht-reale-vorstellungen" style="margin-bottom:1.2rem;">← To the article “Unreal Ideas”</button>
        <p class="eyebrow">Knowledge · Homeopathy</p>
        <h1 class="section-title">Mind maps of the single rubrics</h1>
        <p class="lead-small">A single rubric is a rubric in which only one homeopathic remedy is listed. For each of the nine Enneagram remedies of this Compass, a mind map shows all single rubrics of the mind section, ordered by theme and expandable. At the top stands the main delusion of the type.</p>
        <div style="display:grid;gap:0.8rem;margin:1.4rem 0;">${karten}</div>
        <p class="vb-anmerkung" style="font-style:italic;">Important for understanding: The pages reproduce rubrics from the author’s German book ‘Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich’. They make no diagnosis, give no treatment recommendation and make no statement about effect or healing.</p>
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("homoeopathische-arzneimittellehre-der-single-rubriken-aus-de", "8,594 single-rubrics of the 500 most important homeopathic remedies – the standard reference work for the Sehgal method.", "Homöopathische Arzneimittellehre der Single-Rubriken")}
      ${bookTip("der-kern-der-heilmittel-the-core-of-the-remedies-gebunden", "The spiritual essence of the 500 most important homeopathic remedies – over 8,500 single-rubrics.", "Der Kern der Remedies")}
      ${bookTip("rathmer-s-repertorium-gebundene-ausgabe", "The world's most comprehensive homeopathic mind repertory – 1568 pages, 20,000 rubrics.", "Rathmer’s Repertorium")}
      ${bookTip("repertorium-der-hervorstechenden-gemuetsrubriken-gebundene-a", "The most prominent mind rubrics compact and annotated – the practical repertory for daily homeopathic practice.", "Repertorium der hervorstechenden Gemütsrubriken")}
      ${bookTip("enneagramm-homoeopathie-band-1", "The foundation of Enneagram-Homeopathy – how personality type and remedy selection are connected, accessible for lay readers as well.", "Enneagramm-Homöopathie – Band 1")}
      ${bookTip("enneagramm-homoeopathie-band-2", "Deepening and expansion: The 27 Subtypes and their individual homeopathic remedies.", "Enneagramm-Homöopathie – Band 2")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-1-taschenbuch", "The textbook on Enneagram-Homeopathy – Volume 1: Foundations, types, and remedies.", "Lehrbuch der Enneagramm-Homöopathie – Band 1")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-2-taschenbuch", "Volume 2 of the textbook: In-depth remedy assignments for all 27 Subtypes.", "Lehrbuch der Enneagramm-Homöopathie – Band 2")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-3-taschenbuch", "Volume 3 of the textbook: The complete system of Enneagram-Homeopathy in practice.", "Lehrbuch der Enneagramm-Homöopathie – Band 3")}
      ${bookTip("die-enneagramm-homoeopathie-unterrichtsmaterial", "The teaching script on Enneagram-Homeopathy – 376 pages of compact learning material for self-study.", "Enneagramm-Homöopathie – Unterrichtsmaterial (376 Seiten)")}
      ${bookTip("das-unterrichtsskript-zur-sehgal-ausbildung-ebook", "The complete teaching script of the Sehgal School – 500 pages for anyone wishing to learn the Sehgal method in depth.", "Unterrichtsskript zur Sehgal-Ausbildung (500 Seiten)")}
      ${relatedLinks([
        {route:"wahnideen-nicht-reale-vorstellungen", label:"Article: Delusions in the Enneagram and in Homeopathy"},
        {route:"nicht-reale-vorstellungen", label:"Chart: Unreal ideas"},
        {route:"enneagramm-homoeopathie", label:"Enneagram & Homeopathy"},
      ])}
    </div>
  `);
}
