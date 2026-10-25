const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single-Rubriken von Tarentula hispanica (Typ 3) aus »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
const RUBRIKEN = [
  "Abends - amel.",
  "Abneigung - Lichter, gegen",
  "Abneigung - rot, gegen - rot, gelb, grün und schwarz",
  "Angst - Obstipation, mit",
  "Bedauert sich - krank ist, Verlangen zu zeigen, dass er",
  "Bemitleidet sich selbst - Verlangen, krank zu spielen",
  "Biliöse Disposition - Kummer, nach",
  "Biliöse Disposition - Schwierigkeiten, mit anderen, nach",
  "Blicken - Richtungen, in alle - Hysterie, um die Wirkung ihrer Handlungen auf andere zu beobachten, bei",
  "Blicken - sieht andere an, bei Unwohlsein",
  "Demenz - Traurigkeit, mit",
  "Destruktivität, Zerstörungswut - allein, wenn",
  "Destruktivität, Zerstörungswut - Gerissenheit, mit",
  "Droht - zerstören, droht etwas zu",
  "Entmutigt - abends - Essen amel.",
  "Erregung, erregbar - Tanzen, Singen und Weinen, mit",
  "Essen - amel. - abends",
  "Essen - nach - abends - amel.",
  "Farben - Abneigung gegen - kräftige Farben, gegen",
  "Farben - blau, amel. - blau, grün, rot, entzückt von",
  "Farben - dunkle Farben - Verlangen nach",
  "Farben - rot, gelb, grün und schwarz, Abneigung",
  "Faulheit - Gonorrhoe, bei",
  "Froh - abwechselnd mit - Gleichgültigkeit",
  "Froh - Zimmer, im - amel.",
  "Furcht - Anstrengung - amel.",
  "Furcht - Fieber - vor dem Fieber - Fleckfieber, vor epidemischem",
  "Furcht - Tod, vor dem - Rekonvaleszenz, während der",
  "Gedächtnis - Vergesslichkeit - Beruf, vergisst den eigenen",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - droht mit Tod und Zerstörung",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Liebe, durch enttäuschte",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Ruhelosigkeit, mit - Beine, der",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - stricken, als würde sie",
  "Gleichgültigkeit, Teilnahmslosigkeit, Apathie - morgens - 15 h, bis",
  "Hast, Eile - Jucken, mit - Genitalien, der",
  "Hypochondrie - Masturbation, nach",
  "Hysterie - Berührung und Druck sind unerträglich",
  "Hysterie - Chlorose, mit",
  "Hysterie - lächerlich",
  "Hysterie - morgens agg., durch Seufzen amel.",
  "Hysterie - Musik amel.",
  "Hysterie - Stöhnen agg. und Seufzen amel.",
  "Klagen, beklagt sich - droht, klagt und",
  "Knieende Position agg. - schwierig",
  "Koitus - amel.",
  "Kummer, Sorgen, Trauer - nachmittags",
  "Lachen - Gesellschaft, in",
  "Lachen - schreit danach",
  "Lachen - spöttisch",
  "Lebhaft, munter - abwechselnd mit - Kummer, Sorgen",
  "Manie - Zerstörungsdrang, Zerstörungswut, gefolgt von Lachen und Entschuldigungen",
  "Musik - amel. - rhythmische Musik",
  "Musik - amel. - Ruhelosigkeit der Glieder",
  "Nymphomanie - Chorea mit",
  "Nymphomanie - Koitus agg.",
  "Qualvolle Angst - Jammern und Stöhnen, mit",
  "Raserei, Tobsucht, Wut - Schlagen, mit - sich selbst",
  "Reißt an sich selbst - Haaren - drückt den Kopf mit den Händen, und",
  "Reißt, zerreißt Dinge - Bücher, seine",
  "Reizbarkeit, Gereiztheit - Koitus - amel.",
  "Rollt, wälzt sich - Seite auf die andere, von einer - amel.",
  "Ruhelosigkeit - bewegen - muss sich ständig - Gehen agg., aber",
  "Ruhelosigkeit - Chorea, bei",
  "Ruhelosigkeit - nachts - Mitternacht - nach - 5 h",
  "Ruhelosigkeit - Schmerzen, durch - Magen, nachts",
  "Schlagen - sich, schlägt - Kopf - Händen an den Kopf, gegen den Körper und andere Personen, schlägt sich mit den",
  "Schlagen - unbeobachtet, wenn",
  "Schreien - Atmung, mit erschwerter",
  "Schreien - Lachen - nach",
  "Schüchternheit, Zaghaftigkeit - Gonorrhoe, bei",
  "Seelenruhe, Gelassenheit - Musik beruhigt ihn",
  "Sexualität, sexuelle Aktivität und Verhalten - Nymphomanie, bei Frauen - Chorea, mit",
  "Sexualität, sexuelle Aktivität und Verhalten - Nymphomanie, bei Frauen - Koitus agg.",
  "Simuliert - Ohnmacht",
  "Simuliert - Ohnmacht - Anfällen, in",
  "Singen - Erschöpfung, bis zur",
  "Singen - heiser ist, bis er ganz - erschöpft, und",
  "Singen - Tanzen und Weinen, mit",
  "Spaßen, Scherzen - Erwachen, beim",
  "Spotten - Alter, über alte Menschen und deren",
  "Sprache - drohend",
  "Stimmung, Laune - wechselnd, wechselhaft - plötzlich",
  "Stöhnen - Widerspruch, bei",
  "Streitsüchtig - hysterischer Manie, zu Beginn von",
  "Traurigkeit - abends - Essen amel., beim",
  "Traurigkeit - schuld, im Unrecht, als wäre er",
  "Traurigkeit - sexuelle Erregung - nach",
  "Vergesslich - Beruf, vergisst ihren",
  "Verstecken - sich - Furcht, aufgrund von - angegriffen zu werden",
  "Verstehen - schwierig - versteht an sie gestellte Fragen nicht",
  "Vortäuschen der Krankheit - Ohnmacht",
  "Wahnideen - Luft - kalte Luft, er käme in",
  "Wahnideen - unsichtbaren Dingen, von",
  "Weinen - Trost - durch Trost",
  "Widerwillen - bewusst, ist sich seines unnatürlichen Geistes - und Gemütszustands",
  "Ziehen - Haaren, an den - presst den Kopf, und zieht sich an den Haaren"
];

// Gruppen: Rubrik-Kapitel (erstes Wort) -> Themenast
const GRUPPEN = [
  { id: "wahn", titel: "Wahnideen", offen: true, text: "Die Hauptwahnidee des Unsichtbaren und die Vorstellung kalter Luft.", kapitel: ["Wahnideen"] },
  { id: "taeuschen", titel: "Vortäuschen, Krankspielen und Hysterie", text: "Krankheit vortäuschen, Ohnmacht simulieren, Wirkung auf andere beobachten.", kapitel: ["Vortäuschen", "Simuliert", "Bedauert", "Bemitleidet", "Hysterie", "Blicken", "Verstecken", "Stimmung", "Verstehen", "Widerwillen"] },
  { id: "musik", titel: "Musik, Tanzen und Singen", text: "Musik, die beruhigt oder erregt, Tanzen, Singen bis zur Erschöpfung.", kapitel: ["Musik", "Singen", "Erregung", "Seelenruhe", "Froh", "Lebhaft"] },
  { id: "farben", titel: "Farben und Licht", text: "Entzücken über kräftige Farben, Abneigung gegen Rot, Gelb, Grün und Schwarz.", kapitel: ["Farben", "Abneigung"] },
  { id: "unruhe", titel: "Ruhelosigkeit, Zerstörung und Zorn", text: "Ständige Bewegung, Zerstörungswut, Schlagen, Reißen, Drohen.", kapitel: ["Ruhelosigkeit", "Rollt", "Schlagen", "Reißt", "Destruktivität", "Droht", "Manie", "Raserei", "Reizbarkeit", "Hast", "Ziehen", "Schreien", "Spotten", "Sprache", "Stöhnen", "Streitsüchtig", "Knieende", "Gesten", "Klagen"] },
  { id: "gefuehl", titel: "Stimmung, Kummer und Gedächtnis", text: "Traurigkeit, Entmutigung, Vergessen des eigenen Berufs, Wechsel der Stimmung.", kapitel: ["Traurigkeit", "Kummer", "Entmutigt", "Biliöse", "Demenz", "Geisteskrankheit", "Faulheit", "Gleichgültigkeit", "Lachen", "Weinen", "Schüchternheit", "Vergesslich", "Gedächtnis", "Hypochondrie", "Furcht", "Angst"] },
  { id: "koerper", titel: "Essen, Abend und Sexualität", text: "Besserung abends und beim Essen, Erregung, Koitus.", kapitel: ["Abends", "Essen", "Nymphomanie", "Sexualität", "Koitus", "Spaßen"] },
  { id: "weiteres", titel: "Weiteres", text: "Rubriken, die in keinen der Äste passen.", kapitel: [] },
];

const HAUPT = ["Wahnideen - unsichtbaren Dingen, von"];

function gruppeVon(rubrik) {
  const t = GRUPPEN.find(x => x.test && x.test.test(rubrik));
  if (t) return t.id;
  const kap = rubrik.split(" - ")[0];
  const wort = kap.split(/[ ,]/)[0];
  const g = GRUPPEN.find(x => x.kapitel.includes(wort));
  return g ? g.id : "weiteres";
}

function pfadHtml(r) {
  const teile = r.split(" - ");
  const kopf = teile.shift();
  const rest = teile.map(t => `<span class="mm-chev">›</span> ${t}`).join(" ");
  return `<strong>${kopf}</strong> ${rest}`;
}

export function tarentulaMindmapPage() {
  const col = "#1fa688";
  const nach = {};
  RUBRIKEN.forEach(r => { (nach[gruppeVon(r)] = nach[gruppeVon(r)] || []).push(r); });
  const zweige = GRUPPEN.filter(g => (nach[g.id] || []).length).map(g => `
    <details class="mm-branch" style="border-left:3px solid ${col};" ${g.offen ? "open" : ""}>
      <summary style="cursor:pointer;padding:0.7rem 1rem;list-style:none;">
        <span style="font-weight:700;color:var(--ink);">${g.titel}</span>
        <span style="margin-left:0.5rem;background:color-mix(in srgb, ${col} 15%, var(--paper));color:${col};padding:0.1rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;">${nach[g.id].length}</span>
        <div style="font-size:0.82rem;color:var(--muted);margin-top:0.15rem;">${g.text}</div>
      </summary>
      <ul style="margin:0.2rem 0 0.9rem 1.2rem;padding:0 1rem 0 0;font-size:0.88rem;line-height:1.55;">
        ${nach[g.id].map(r => `<li style="margin:0.25rem 0;${HAUPT.includes(r) ? "background:color-mix(in srgb, " + col + " 14%, transparent);border-radius:6px;padding:0.15rem 0.4rem;" : ""}">${pfadHtml(r)}</li>`).join("")}
      </ul>
    </details>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("mindmap-tarentula")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← Alle Mindmaps der Single-Rubriken</button>
        <p class="eyebrow">Wissen · Single-Rubriken · Typ 3</p>
        <h1 class="section-title">Tarentula hispanica: Mindmap der Single-Rubriken</h1>
        <p class="lead-small">Single-Rubriken sind Rubriken, in denen nur ein einziges Mittel steht. Hier sind alle Single-Rubriken von Tarentula hispanica, der spanischen Tarantel, die die Enneagramm-Homöopathie dieses Kompasses dem Typ 3 zuordnet, nach Themen geordnet.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Typ 3 · Tarentula hispanica · Hauptwahnidee</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Das Unsichtbare: die Vorstellung, von unsichtbaren Dingen umgeben zu sein</div>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.3rem;">Darunter steht alles, was sich zu diesem Mittel als Single-Rubrik findet. Die Äste lassen sich auf- und zuklappen.</div>
        </div>

        <div class="mm-tree" style="display:grid;gap:0.7rem;">${zweige}</div>

        <p class="vb-anmerkung" style="margin-top:1.4rem;font-style:italic;">Wichtig für das Verständnis: Die Seite gibt Rubriken wieder, die in der ›Homöopathischen Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich‹ des Autors stehen. Sie stellt keine Diagnose, gibt keine Therapieempfehlung und trifft keine Aussage zu Wirkung oder Heilung. Bei seelischen Krisen ersetzt sie keine ärztliche oder psychotherapeutische Hilfe.</p>
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
        {route:"mindmaps-single-rubriken", label:"Alle Mindmaps der Single-Rubriken"},
        {route:"wahnideen-nicht-reale-vorstellungen", label:"Wissensartikel: Wahnideen im Enneagramm und in der Homöopathie"},
        {route:"nicht-reale-vorstellungen", label:"Schaubild: Nicht reale Vorstellungen"},
        {route:"enneagramm-homoeopathie", label:"Enneagramm & Homöopathie"},
      ])}
    </div>
  `);
}
