const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single-Rubriken von Platinum metallicum (Typ 1) aus »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
const RUBRIKEN = [
  "Abneigung - Kinder, gegen - bekommen, Kinder zu - stören, das Leben beeinträchtigen, hat das Gefühl, die Kinder werden",
  "Abwechselnde Gemütssymptome und körperliche Symptome - Uterusschmerzen, mit",
  "Angst - erfreulichsten Dinge, vor den",
  "Angst - Fieber - während - Kindbettfieber, bei",
  "Angst - Seelenheil, um das - Hölle, vor der",
  "Angst - Sprechen, beim - Gesellschaft, in",
  "Angst - vergnüglichen Dingen, wegen höchst",
  "Benommenheit, Betäubung - Kopfschmerz - vor",
  "Beten - laut bei Traurigkeit",
  "Beten - möchte, dass andere Leute mit ihm beten, bei leichtem Erysipel im Gesicht",
  "Egoismus - religiös",
  "Ernst, Ernsthaftigkeit - abwechselnd mit - Spaßen, Scherzen",
  "Farben - grau - Abneigung gegen",
  "Froh - abwechselnd mit - körperlichen Symptomen, mit",
  "Froh - abwechselnd mit - Schmerz",
  "Froh - morgens - Freien, im",
  "Fröhlich, ausgelassen, vergnügt, lebhaft - abwechselnd mit - Ernsthaftigkeit",
  "Froh - abwechselnd mit - körperlichen Leiden",
  "Froh - abwechselnd mit - Schmerz",
  "Froh - morgens - Freien, im",
  "Froh - Weinen, nach",
  "Furcht - Ehemann nicht zurückkehrt, dass ihm etwas zustößt",
  "Furcht - gehängt zu werden",
  "Furcht - geschehen, etwas werde - Uterus, bei Blutung des",
  "Furcht - Krebs, vor - Rektumkarzinom, obwohl die körperliche Untersuchung keinen Befund ergibt",
  "Furcht - Tod, vor dem - Lachen und Weinen, mit abwechselndem",
  "Furcht - Tod, vor dem - Schreck, nach",
  "Furcht - Tod, vor dem - Verstand zu verlieren, und den",
  "Furcht - Tod, vor dem - Zorn, durch",
  "Gedanken - hartnäckig - nachts - Mitternacht - um",
  "Gedanken - wandernd - Schläfrigkeit, durch",
  "Geistesabwesend - Freien, im",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - erotisch - Mädchen, bei hysterischen",
  "Gemütssymptome - Gemütssymptome treten auf und körperliche Symptome verschwinden und umgekehrt",
  "Gemütssymptome - Glieder, mit Zittern der",
  "Gemütssymptome - Menses, durch unterdrückte",
  "Getötet zu werden, Verlangen - Menses, während",
  "Gleichgültigkeit, Teilnahmslosigkeit, Apathie - Schreck, nach",
  "Heftig, vehement - Aktivität, mit körperlicher",
  "Hochmütig, arrogant, überheblich - religiöser Hochmut",
  "Hochmütig, arrogant, überheblich - Schreck, nach",
  "Lachen - abwechselnd mit - Furcht vor dem Tod, Todesangst",
  "Lachen - abwechselnd mit - Schweigsamkeit",
  "Lachen - abwechselnd mit - Weinen - Zorn, nach",
  "Lachen - Ernstes, ernste Angelegenheiten, über - Freien, im",
  "Lachen - falschen Stellen, an",
  "Lachen - krampfartig - falschen Stellen, an",
  "Lachen - Menses - während - konvulsivisch",
  "Lachen - Traurigkeit, gefolgt von",
  "Launisch, wankelmütig - Prosopalgie (Gesichtsschmerz, Gesichtsneuralgie), bei",
  "Launisch, wankelmütig - Selbstüberschätzung, mit",
  "Liebevoll, voller Zuneigung, herzlich - abwechselnd mit - Traurigkeit",
  "Manie - Singen, mit - Wochenbettmanie, bei",
  "Milde, Neigung zu - abwechselnd, mit - Traurigkeit",
  "Multiple Persönlichkeitsstörungen - Identität, Fehler bezüglich der eigenen - gehört nicht zu ihrer Familie",
  "Mürrisch - abwechselnd mit - liebevollem Wesen, mit",
  "Qualvolle Angst - Freude, durch übermäßige",
  "Qualvolle Angst - Zorn, durch",
  "Reizbarkeit, Gereiztheit - abwechselnd mit - Zärtlichkeit",
  "Religiöse Gemütsstörungen, Heiland, fühlt sich glücklich über die Vereinigung mit dem",
  "Religiöse Gemütsstörungen, Kirche beizutreten, ermahnt den Ehemann, der",
  "Religiöse Gemütsstörungen, Störungen in Bezug auf die Religiosität - beschäftigt, zu sehr mit Religion - Buße zu tun, Verlangen, um ihre Bestrafung in der Ewigkeit abzumildern",
  "Religiöse Gemütsstörungen, Störungen in Bezug auf die Religiosität - beschäftigt, zu sehr mit Religion - Schweigsamkeit, Hochmut, Wollust und Grausamkeit, religiöse Gemütsstörungen mit",
  "Ruhelosigkeit - Traurigkeit, mit",
  "Schreckliches und traurige Geschichten greifen sie stark an - Gedanken während der Entbindung, ihre",
  "Spaßen - abwechselnd mit - Schweigsamkeit",
  "Spaßen - Ernst, Spaßen nach",
  "Sprechen - Abneigung gegen Sprechen, wünscht still zu sein, wortkarg - abwechselnd mit - Lachen",
  "Sprechen - Abneigung gegen Sprechen, wünscht still zu sein, wortkarg - abwechselnd mit - Scherzen",
  "Suizidneigung, Neigung zum Selbstmord - Verlangen, sich zu töten - Furcht vor dem Tod und Abneigung gegen Gespräche darüber, mit",
  "Traurigkeit - abwechselnd mit - Zärtlichkeit",
  "Spaßen, Scherzen - abwechselnd mit - Ernsthaftigkeit",
  "Spaßen, Scherzen - Schwangerschaft, nach",
  "Stöhnen - nachts - Melancholie, bei",
  "Stumpfheit - Gesellschaft, in",
  "Torpor (Erstarrung) - Schmerz, bei - Ischiasnerv, im",
  "Traurigkeit - Ekel, Abscheu vor Speisen, mit",
  "Traurigkeit - Lachen - nach",
  "Traurigkeit - nachts - Mitternacht",
  "Umarmen - alles am Morgen, agg. im Freien",
  "Ungeduld - Kopfes, mit Beschwerden des",
  "Ungeduld - Zimmer, in einem warmen, mit Menschen überfüllten",
  "Verächtlich - Anfällen gegen ihren Willen, in",
  "Verächtlich - blickt verächtlich auf Leute herab, entgegen ihrem eigenen Willen",
  "Verächtlich - Freien oder wenn die Sonne ins Zimmer scheint, im",
  "Verächtlich - Heißhunger und gieriges, hastiges Essen, verächtlich mit plötzlichem",
  "Verächtlich - rassistisch",
  "Verächtlich - religiös",
  "Verächtlich - sieht auf alle anderen herab",
  "Verändert nach kurzer Abwesenheit, alles erscheint",
  "Verstößt Menschen gegen ihren Willen",
  "Wahnideen - groß - er selbst scheint zu groß - Eintreten ins Haus nach Gehen, beim",
  "Wahnideen - Hilfe - ruft um Hilfe",
  "Wahnideen - länger, er werde immer",
  "Wahnideen - minderwertig, Menschen erscheinen geistig und körperlich - Eintreten in das Haus nach einem Spaziergang, beim",
  "Wahnideen - Phantasiegebilde, Illusionen - Freien, im - amel.",
  "Wahnideen - sonderbar, merkwürdig - Vertrautes scheint fremd - schrecklich, fürchterlich, ist",
  "Wahnideen - vergehen, als würde alles - Sinne",
  "Wahnideen - Überlegenheit",
  "Wahnideen - verkleinert - alles im Zimmer sei verkleinert, während sie groß und erhaben ist",
  "Wahnideen - Verletzung - worden, er sei verletzt - Schlaf, im",
  "Weinen - Gesicht - Beschwerden des Gesichtes, mit",
  "Weinen - Zimmer, im",
  "Zorn - Aktivität, mit großer körperlicher",
  "Zorn - Farben - grau - agg.",
  "Zorn - Lachen, mit Anfällen von - Zorn, Lachen und Weinen wechseln sich ab"
];

// Gruppen: Rubrik-Kapitel (erstes Wort) -> Themenast
const GRUPPEN = [
  { id: "wahn", titel: "Wahnideen", offen: true, text: "Die Hauptwahnidee der Überlegenheit und ihre Nachbarn: groß, verkleinert, minderwertig, verletzt.", kapitel: ["Wahnideen"] },
  { id: "hochmut", titel: "Verachtung, Hochmut und Abstoßen", text: "Verächtlich auf andere herabsehen, religiöser Hochmut, Menschen gegen den eigenen Willen abstoßen.", kapitel: ["Verächtlich", "Hochmütig", "Egoismus", "Verstößt", "Verändert", "Launisch"] },
  { id: "religion", titel: "Religion, Gebet und Seelenheil", text: "Gebet bei Traurigkeit, Buße, religiöse Gemütsstörungen, Angst um das Seelenheil.", kapitel: ["Religiöse", "Beten"] },
  { id: "stimmung", titel: "Stimmungswechsel: Froh, Ernst, Lachen und Weinen", text: "Der schnelle Wechsel von Fröhlichkeit, Ernst, Lachen, Weinen und Zorn.", kapitel: ["Froh", "Fröhlich", "Ernst", "Spaßen", "Lachen", "Weinen", "Traurigkeit", "Liebevoll", "Milde", "Mürrisch", "Zorn", "Reizbarkeit", "Heftig", "Ungeduld", "Ruhelosigkeit", "Stöhnen", "Manie", "Umarmen"] },
  { id: "angst", titel: "Angst, Furcht und Tod", text: "Furcht vor dem Tod, vor Krebs, davor, gehängt zu werden, Sorge um den Ehemann.", kapitel: ["Angst", "Furcht", "Qualvolle", "Getötet", "Suizidneigung", "Schreckliches"] },
  { id: "geist", titel: "Gemüt, Körper und Denken", text: "Wechsel von Gemüts- und körperlichen Symptomen, Gedanken, Gleichgültigkeit, Sprechen, Farben.", kapitel: ["Gedanken", "Geistesabwesend", "Geisteskrankheit", "Gemütssymptome", "Abwechselnde", "Gleichgültigkeit", "Stumpfheit", "Torpor", "Multiple", "Benommenheit", "Sprechen", "Farben", "Abneigung"] },
  { id: "weiteres", titel: "Weiteres", text: "Rubriken, die in keinen der Äste passen.", kapitel: [] },
];

const HAUPT = ["Wahnideen - Überlegenheit"];

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

export function platinMindmapPage() {
  const col = "#5f5f5f";
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
      ${pageHeader("mindmap-platin")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← Alle Mindmaps der Single-Rubriken</button>
        <p class="eyebrow">Wissen · Single-Rubriken · Typ 1</p>
        <h1 class="section-title">Platinum metallicum: Mindmap der Single-Rubriken</h1>
        <p class="lead-small">Single-Rubriken sind Rubriken, in denen nur ein einziges Mittel steht. Hier sind alle Single-Rubriken von Platinum metallicum, dem Mittel, das die Enneagramm-Homöopathie dieses Kompasses dem Typ 1 zuordnet, nach Themen geordnet.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Typ 1 · Platinum metallicum · Hauptwahnidee</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Die Überlegenheit: die Vorstellung, überlegen zu sein</div>
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
