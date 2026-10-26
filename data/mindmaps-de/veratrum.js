const { shell, pageHeader, relatedLinks, bookTip, psychogrammDaten } = window.__kh;

// Single-Rubriken von Veratrum album (Typ 8) aus »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
const RUBRIKEN = [
  "Angst - Aufstehen, nach - Liegen, vom",
  "Angst - Aufstoßen - endet mit",
  "Angst - Aufstoßen amel. - endet mit Aufstoßen",
  "Angst - Furcht, mit - beim Stehen wird die Stirn mit kaltem Schweiß bedeckt, mit Übelkeit bis hin zu Erbrechen",
  "Angst, qualvolle - Beklemmung, mit - Verlangen, im Bett aufzusitzen oder aus dem Bett zu springen, und",
  "Aufstehen - Liegen, vom",
  "Beißen, Verlangen zu - Schuh und schluckt die Teile, beißt in seinen",
  "Bett - bleiben, Verlangen, lange im Bett zu - sexuelle Erregung, durch",
  "Bett - heraus, möchte aus dem Bett - Meningitis cerebrospinalis, bei",
  "Blindheit vor, täuscht, vorgetäuschte",
  "Brütet, grübelt - abends",
  "Brütet, grübelt - abwechselnd mit - Schreien",
  "Delirium - Kälte, mit",
  "Delirium - Lochien, bei den",
  "Delirium - Schweiß - kaltem Schweiß, mit",
  "Delirium - Schweiß amel. - kaltem Schweiß, mit",
  "Destruktivität, Zerstörungswut - Kleidern, von - zerschneidet sie",
  "Erschreckt, leicht - Frost (Froststadium im Fieber), während",
  "Fliehen, versucht zu - Haus, möchte aus dem",
  "Fluchen - nachts, die ganze Nacht",
  "Fluchen - nachts - benommenes, dummes Gefühl, und klagt über ein",
  "Furcht - Apoplexie, vor - Stuhlgang, beim",
  "Furcht - Stuhlgang - unwillkürlichem Stuhl, vor - grün, in einem Schwall, erschöpfend",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Appetitverlust, mit",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Gesicht - Hitze des Gesichtes, mit",
  "Gesten, Gebärden, macht - wiederholt dieselben Handlungen - Schneiden von Papier",
  "Gesten, Gebärden, macht - wiederholt dieselben Handlungen - stapelt Gegenstände",
  "Gesten, Gebärden, macht - wiederholt dieselben Handlungen - zerreißt Gegenstände",
  "Gleichgültigkeit, Teilnahmslosigkeit, Apathie - nimmt nichts wahr",
  "Heftig, vehement - jagt die Familie aus dem Haus",
  "Heulen - Nacht, die ganze",
  "Hochmütig, arrogant, überheblich - Menses, vor den",
  "Hochmütig, arrogant, überheblich - Schwangerschaft, während der",
  "Jammern, Lamentieren - abends",
  "Koma - Augen - geschlossenen Augen, mit - ein Auge geschlossen",
  "Küssen - Wochenbettmanie, bei",
  "Lächeln - niemals - Kindern, bei - Mädchen, bei kleinen",
  "Läuft schnell umher - anfallsweise, agg. abends, läuft",
  "Läuft schnell umher - nachts",
  "Manie - abwechselnd mit - Stille und Schweigen",
  "Manie - Lärm, Geräusch, macht viel",
  "Manie - Obstipation, bei",
  "Manie - Schmerz - durch - Delirium, mit",
  "Manie - stampft mit den Füßen",
  "Manie - Traurigkeit, mit",
  "Murmeln - Absurdes, murmelt",
  "Nymphomanie - Redseligkeit, Geschwätzigkeit, mit",
  "Predigen - religiöses, psychotisches, obsessives Predigen",
  "Qualvolle Angst - Beklemmung, mit - Verlangen sich aufzusetzen oder aus dem Bett zu springen",
  "Qualvolle Angst - Schweiß - kaltem Schweiß, mit - Stirn, auf der",
  "Raserei, Tobsucht, Wut - Hitze des Körpers, mit",
  "Redseligkeit, Geschwätzigkeit - religiöse Themen, Dinge, über",
  "Religiöse Gemütsstörungen - Erregung verursacht Konvulsionen",
  "Religiöse Gemütsstörungen - Verzweiflung mit Selbstmordneigung",
  "Ruhelosigkeit - Schwindel, mit",
  "Sprechen - Abneigung gegen Sprechen, wünscht still zu sein, wortkarg - Schwangerschaft, während der",
  "Schamlos - Entbindung, während der",
  "Schreien - abends agg.",
  "Schreien - Kindern, bei - grundlos, ohne Anlass",
  "Schuldgefühl - abends - Mittagessen, und nach dem",
  "Schweigsam - Husten, beim",
  "Schweigsam - Schwangerschaft, während der",
  "Sexualität, sexuelle Aktivität und Verhalten - Nymphomanie, bei Frauen mit Geschwätzigkeit",
  "Simuliert - Schwangerschaft",
  "Singen - ausgelassen, fröhlich, freudig, vergnügt - nachts",
  "Sprechen - Fehler anderer, über die",
  "Streitsüchtig - nachts",
  "Suizidneigung, Neigung zum Selbstmord - Versuch, sich umzubringen - Manie, bei",
  "Suizidneigung, Neigung zum Selbstmord - Verzweiflung, aus - religiöser, aus",
  "Tanzen - wild - tanzt wild umher beim Hören irgendeines Geräusches, muss gehalten werden",
  "Taubheit, vorgetäuschte",
  "Trost - untröstlich - Unglück, über eingebildetes",
  "Trost - untröstlich - Unglück, über eingebildetes - läuft schreiend und brüllend umher oder sitzt brütend, jammernd und weinend da, abends agg.",
  "Umarmen - leblose Gegenstände, selbst",
  "Untröstlich - Unglück, über eingebildetes",
  "Untröstlich - eingebildetes Unglück, über ein, läuft schreiend und brüllend umher, oder sitzt brütend, jammernd und weinend da, abends agg.",
  "Verwirrung, geistige - Bücken, beim - amel.",
  "Verzweiflung - Menses - vor",
  "Verzweiflung - religiöse Verzweiflung am Seelenheil - Menses, während unterdrückten",
  "Vortäuschen der Krankheit - Schwangerschaft",
  "Vortäuschen der Krankheit - Taubheit",
  "Wahnideen - Ausland zu sein, im",
  "Wahnideen - Dieben, Räubern, von - träumt von Räubern, ist erschreckt beim Erwachen und hält den Traum für wahr",
  "Wahnideen - gegangen - sei gegangen, sie - zu weit",
  "Wahnideen - Gelübde - bricht, dass sie ihr - bewahren, muss es",
  "Wahnideen - Gelübde - halten, muss es",
  "Wahnideen - Geräusche - macht Geräusche bei den Wahnideen",
  "Wahnideen - Gott - Bote Gottes, er sei ein",
  "Wahnideen - herumwirbeln - Dinge - Kreis, im",
  "Wahnideen - Himmel, er sei im - sprechen, würde mit Gott",
  "Wahnideen - Kopf - Bewegung - innerlich sei der ganze Kopf in Bewegung",
  "Wahnideen - Krankheit, er habe eine unheilbare - taubstumm und habe Krebs, er sei",
  "Wahnideen - Prinz, sei ein",
  "Wahnideen - Schmutz, isst",
  "Wahnideen - taub, er sei",
  "Wahnideen - taubstumm, er sei",
  "Wahnideen - Wehen zu haben oder glaubt, sie habe Schmerzen, sie gibt vor",
  "Wahnideen - Worte - erinnern, kann sich nicht an Worte",
  "Wandern, Herumwandern - Verlangen zu wandern - Manie, bei",
  "Wandern, Herumwandern - Verlangen zu wandern - Schwangerschaft, während der",
  "Wildheit - Geräusch, durch jedes"
];

// Gruppen: Rubrik-Kapitel (erstes Wort) -> Themenast
const GRUPPEN = [
  { id: "wahn", titel: "Wahnideen", offen: true, text: "Prinz, Bote Gottes, Himmel, Gelübde, Taubstummheit, Dieb und Räuber.", kapitel: ["Wahnideen"] },
  { id: "religion", titel: "Religion, Predigen und Verzweiflung", text: "Religiöse Verzweiflung, Predigen, Selbstmordneigung aus religiöser Verzweiflung.", kapitel: ["Religiöse", "Predigen", "Verzweiflung", "Suizidneigung", "Schuldgefühl"] },
  { id: "vortaeuschen", titel: "Vortäuschen und Simulieren", text: "Vorgetäuschte Blindheit, Taubheit und Schwangerschaft.", kapitel: ["Blindheit", "Taubheit", "Vortäuschen", "Simuliert", "Schamlos"] },
  { id: "manie", titel: "Manie, Zerstörung und Hochmut", text: "Manie, Zerstörungswut, Hochmut, Heftigkeit, Raserei.", kapitel: ["Manie", "Destruktivität", "Hochmütig", "Heftig", "Raserei", "Wildheit", "Fluchen", "Beißen", "Streitsüchtig", "Delirium", "Geisteskrankheit", "Koma", "Nymphomanie", "Sexualität", "Gesten"] },
  { id: "angst", titel: "Angst, Furcht und Untröstlichkeit", text: "Angst beim Aufstehen, Furcht vor Schlaganfall, Untröstlichkeit über eingebildetes Unglück.", kapitel: ["Angst", "Qualvolle", "Furcht", "Erschreckt", "Trost", "Untröstlich", "Brütet", "Heulen", "Jammern"] },
  { id: "verhalten", titel: "Verhalten, Sprechen und Bewegung", text: "Schweigen, Murmeln, Wandern, Tanzen, Umarmen, Küssen.", kapitel: ["Sprechen", "Schweigsam", "Murmeln", "Wandern", "Tanzen", "Umarmen", "Küssen", "Läuft", "Singen", "Lächeln", "Schreien", "Bett", "Aufstehen", "Fliehen", "Ruhelosigkeit", "Verwirrung", "Gleichgültigkeit"] },
  { id: "weiteres", titel: "Weiteres", text: "Rubriken, die in keinen der Äste passen.", kapitel: [] },
];

const HAUPT = ["Wahnideen - Prinz, sei ein"];

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

export function veratrumMindmapPage() {
  const col = "#a00802";
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
      ${pageHeader("mindmap-veratrum")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← Alle Mindmaps der Single-Rubriken</button>
        <p class="eyebrow">Wissen · Single-Rubriken · Typ 8</p>
        <h1 class="section-title">Veratrum album: Mindmap der Single-Rubriken</h1>
        <p class="lead-small">Single-Rubriken sind Rubriken, in denen nur ein einziges Mittel steht. Hier sind alle Single-Rubriken von Veratrum album, dem weißen Germer, den die Enneagramm-Homöopathie dieses Kompasses dem Typ 8 zuordnet, nach Themen geordnet.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Typ 8 · Veratrum album · Hauptwahnidee</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Der Prinz: die Vorstellung, ein Prinz zu sein, Vormachtstellung und Macht</div>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.3rem;">Darunter steht alles, was sich zu diesem Mittel als Single-Rubrik findet. Die Äste lassen sich auf- und zuklappen.</div>
        </div>

        <div class="mm-tree" style="display:grid;gap:0.7rem;">${zweige}</div>

        ${(() => {
          const pd = psychogrammDaten(8, "de");
          if (!pd) return "";
          const li = a => a.map(x => `<li>${x}</li>`).join("");
          return `<div style="margin:1.6rem 0 0;padding:1.1rem 1.3rem;border:1px solid var(--line);border-radius:14px;">
            <h2 style="font-size:1.1rem;margin:0 0 0.5rem;">Aus dem Psychogramm: was unter der Oberfläche liegt</h2>
            <p style="font-size:0.9rem;line-height:1.6;margin:0 0 0.8rem;color:var(--muted);">Neben den Wahnideen der Rubriken gibt es Vorstellungen, die selten an die Oberfläche kommen. Das Psychogramm des Typs 8 zeigt das Selbstbild und darunter die Schattenanteile.</p>
            <p style="font-size:0.95rem;margin:0 0 0.8rem;"><strong>Kernsatz:</strong> ${pd.kern}</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(14rem,1fr));gap:1rem;">
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;">So möchte der Typ sich sehen</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.selbst)}</ul></div>
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;color:${col};">Was darunter liegt (Schatten)</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.schatten)}</ul></div>
            </div>
            <p style="margin:0.9rem 0 0;font-size:0.9rem;"><a href="#psychogramme/8">Zum vollständigen Psychogramm von Typ 8 →</a></p>
          </div>`;
        })()}

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
