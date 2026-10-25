const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single-Rubriken von Ignatia amara (Typ 4) aus »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
const RUBRIKEN = [
  "Änderungen - Eindrücken agg., Wechsel von",
  "Angst - Fieber, während - 2-5 h, mit Schlaflosigkeit",
  "Angst - Furcht, mit - 5 h agg., bis, mit Schlaflosigkeit",
  "Angst - Haus, im - amel.",
  "Angst - Schreck, nach - Schwangerschaft, im 7. Monat",
  "Angst - Sprechen, beim - kann nicht sprechen",
  "Arbeit, Beruf - unmöglich - abends",
  "Auffahren, Zusammenfahren - häufig",
  "Beschwerden durch - Enttäuschung - neue, vor kurzem erlebte",
  "Beschwerden durch - Kummer - kurz zurückliegenden, durch",
  "Bewusstsein - epileptischen Konvulsionen (Krämpfen), bei",
  "Bewusstsein - halbbewusster Zustand - Hysterie",
  "Blicken - Bett herum, wie um etwas zu finden, schaut ums",
  "Brütet, grübelt - eingebildete Probleme, über",
  "Eile, Hast - Menses, während",
  "Empfindlich, überempfindlich - Schmerzen, gegen - Froststadium im Fieber, während",
  "Erregung, erregbar - hysterisch",
  "Erregung - hysterisch - Schnupfen, bei",
  "Farben - blau - amel. - marineblau",
  "Farben - gelb - Verlangen nach - zitronengelb - Frauen, bei",
  "Farben - grün - amel. - olivgrün",
  "Farben - rot - amel.",
  "Farben - rot - amel. - tiefrot",
  "Farben - schwarz - amel.",
  "Fäuste, macht",
  "Fehler, macht - Sprechen, beim - Eile, Hast, durch",
  "Furcht - anhaltend",
  "Furcht - Invalidität, vor",
  "Furcht - Krankheit, vor drohender - zittert bei dem Gedanken daran",
  "Furcht - plötzlich - gefolgt von - Kummer, Sorgen, Trauer",
  "Furcht - Schlaf - nie wieder schlafen, er werde",
  "Furcht - Tod, vor dem - Erwachen, beim - Nachmittagsschlaf, aus dem",
  "Gedächtnis - Vergesslichkeit - alles, wenn beschäftigt - Träume, ausgenommen",
  "Gedanken - hartnäckig - Musik, an - abends",
  "Geistige Anstrengung - agg. - unmöglich - abends",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - Fäuste - macht eine Faust - Schreck, nach",
  "Gesten, Gebärden, macht - stampft mit den Füßen - Kinder, im Schlaf",
  "Gewissenhaft, peinlich genau in Bezug auf Kleinigkeiten - Essen - nach",
  "Gleichgültigkeit, Teilnahmslosigkeit, Apathie - Musik, gegenüber",
  "Hast, Eile - Menses - während",
  "Jammern, Lamentieren - Schweiß, während",
  "Kummer, Sorgen, Trauer - Bestrafung, nach",
  "Kummer, Sorgen, Trauer - Chorea, verursacht",
  "Kummer, Sorgen, Trauer - Entbindung, während",
  "Kummer, Sorgen, Trauer - Epilepsie, verursacht - unterdrückter Kummer",
  "Kummer, Sorgen, Trauer - Pneumonie, verursacht",
  "Kummer, Sorgen, Trauer - Ruhe, folgt nach Zorn",
  "Kummer, Sorgen, Trauer - Schreck, nach",
  "Kummer, Sorgen, Trauer - still - Menses, vor",
  "Kummer, Sorgen, Trauer - still - Zorn, nach",
  "Lachen - Kummer, Trauer, durch",
  "Lachen - Traurigkeit, gefolgt von - endet mit Traurigkeit",
  "Milde - Klage, erträgt Leiden, sogar Gewalttaten ohne",
  "Phantasien, Einbildungen - Erregung, nach",
  "Raserei, Tobsucht, Wut - Blutstillung, bei",
  "Reizbarkeit, Gereiztheit - Farben - grün - agg. - dunkelgrün",
  "Reizbarkeit, Gereiztheit - Farben - purpurn, blaurot - agg. - dunkelpurpurn",
  "Reizbarkeit, Gereiztheit - hysterisch",
  "Reizbarkeit, Gereiztheit - Widerspruch, bei - geringsten Widerspruch, beim",
  "Reue, Bedauern - Menses, nach",
  "Ruhelosigkeit - Gicht, bei",
  "Schlafwandeln - Ehrgefühl, durch verletztes",
  "Schreck, Beschwerden durch - Angst, nach Schreck - Schwangerschaftsmonat, im siebten",
  "Schreck, Beschwerden durch - Kummer, mit",
  "Schreiben - Unfähigkeit zu - schnell zu schreiben wie sie möchte, mit ängstlichem Verhalten, sie macht Fehler, Unfähigkeit, so",
  "Schreien - näher kommt, wenn man ihm - Bett liegt, während er im",
  "Schweigsam - Schreck, nach",
  "Selbstbetrachtung - Schreck, nach",
  "Sprechen - Abneigung, gegen Sprechen, wünscht still zu sein, wortkarg - Leiden, von seinen",
  "Sprechen - Abneigung, gegen Sprechen, wünscht still zu sein, wortkarg - Schreck, nach",
  "Suizidneigung, Neigung zum Selbstmord - Ertrinken, durch - versucht zu entfliehen, nach den Menses",
  "Traurigkeit - Essen, beim - Verlangen nach Essen, mit",
  "Seufzen - Abdomens, mit Beschwerden des",
  "Seufzen - alten Menschen, bei",
  "Seufzen - epileptische Konvulsionen (Krämpfen) - nach",
  "Seufzen - laut",
  "Seufzen - leerem Magen, bei",
  "Seufzen - morgens, 9 h",
  "Seufzen - nachts - Mitternacht - nach - 2 h",
  "Seufzen - vormittags - 9.30 h",
  "Seufzen - Weinen an, hält lange nach",
  "Spaßen, Scherzen - abwechselnd mit - Weinen",
  "Stöhnen - Konvulsionen (Krämpfen), während - Anfang und Ende von Wochenbettkonvulsionen, am",
  "Stoßen, treten, austreten - Beinen, mit den - Konvulsionen (Krämpfen), während den",
  "Torpor (Erstarrung) - Erregung, nach",
  "Treten um sich - Kindern, bei - Beinen, mit den",
  "Vergesslich - alles - Träume, bis auf die",
  "Wahnideen - Ehe - sei verheiratet, er",
  "Wahnideen - Gelübde - brechen, sie würde ihr Gelübde",
  "Wahnideen - schaukeln, er würde - Wiege, in einer",
  "Wahnideen - Schlangen - von weißen",
  "Wahnideen - schwanger, sie wäre - Auftreibung des Abdomens durch Blähungen, bei",
  "Wahnideen - schwanger, sie wäre - Menses, nach",
  "Wahnideen - verdammt, er sei - Seele könnte nicht gerettet, erlöst werden - Weinen und Rasen, mit",
  "Wahnideen - verheiratet, sei, dass sie",
  "Wahnideen - verloren, sie sei - alles ist verloren",
  "Wahnideen - Visionen, hat - Ungeheuern, Monstern, von - Einschlafen und Erwachen, beim",
  "Weinen - vermeiden, Verlangen Weinen zu",
  "Widerwillen - Farben - grau - Abneigung gegen",
  "Widerwillen - Farben - grau - agg.",
  "Wildheit - Kleinigkeiten, bei",
  "Wille - übereilt",
  "Zorn - Blutung, durch Stocken der",
];

// Gruppen: Rubrik-Kapitel (erstes Wort) -> Themenast
const GRUPPEN = [
  { id: "wahn", titel: "Wahnideen", offen: true, text: "Die Hauptwahnidee und ihre Nachbarn: Gelübde, Ehe, Verlust, Verdammnis.", kapitel: ["Wahnideen"] },
  { id: "gefuehl", titel: "Kummer, Trauer und Weinen", text: "Der stille Kummer, das Seufzen, der Wechsel von Lachen und Weinen.", kapitel: ["Kummer", "Traurigkeit", "Weinen", "Seufzen", "Lachen", "Jammern", "Stöhnen", "Reue", "Spaßen", "Milde", "Beschwerden", "Suizidneigung"] },
  { id: "angst", titel: "Angst, Furcht und Schreck", text: "Furcht vor Krankheit, Tod und Schlaf, Beschwerden nach Schreck.", kapitel: ["Angst", "Furcht", "Schreck", "Auffahren"] },
  { id: "zorn", titel: "Zorn, Reizbarkeit und Wille", text: "Gereiztheit bei Widerspruch, Raserei, übereilter Wille.", kapitel: ["Zorn", "Reizbarkeit", "Raserei", "Wildheit", "Wille"] },
  { id: "geist", titel: "Denken, Gedächtnis und Gewissenhaftigkeit", text: "Grübeln, Vergesslichkeit, Genauigkeit, Fehler beim Sprechen und Schreiben.", kapitel: ["Brütet", "Gedächtnis", "Gedanken", "Geistige", "Vergesslich", "Selbstbetrachtung", "Phantasien", "Gewissenhaft", "Fehler", "Schreiben", "Bewusstsein", "Torpor", "Gleichgültigkeit", "Arbeit"] },
  { id: "verhalten", titel: "Verhalten, Gesten und Sprechen", text: "Fäuste, Stampfen, Schweigen, Schlafwandeln, Ruhelosigkeit.", kapitel: ["Gesten", "Fäuste", "Treten", "Stoßen", "Sprechen", "Schweigsam", "Schreien", "Blicken", "Hast", "Eile", "Ruhelosigkeit", "Schlafwandeln"] },
  { id: "farben", titel: "Farben", text: "Verlangen und Widerwillen gegen Farben, Reizbarkeit durch Farben.", kapitel: ["Farben", "Widerwillen"] },
  { id: "weiteres", titel: "Weiteres", text: "Änderungen, Überempfindlichkeit, Erregung.", kapitel: ["Änderungen", "Empfindlich", "Erregung"] },
];

function gruppeVon(rubrik) {
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

export function ignatiaMindmapPage() {
  const col = "#3cbf1f";
  const nach = {};
  RUBRIKEN.forEach(r => { (nach[gruppeVon(r)] = nach[gruppeVon(r)] || []).push(r); });
  const haupt = "Wahnideen - Gelübde - brechen, sie würde ihr Gelübde";
  const zweige = GRUPPEN.filter(g => (nach[g.id] || []).length).map(g => `
    <details class="mm-branch" style="border-left:3px solid ${col};" ${g.offen ? "open" : ""}>
      <summary style="cursor:pointer;padding:0.7rem 1rem;list-style:none;">
        <span style="font-weight:700;color:var(--ink);">${g.titel}</span>
        <span style="margin-left:0.5rem;background:color-mix(in srgb, ${col} 15%, var(--paper));color:${col};padding:0.1rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;">${nach[g.id].length}</span>
        <div style="font-size:0.82rem;color:var(--muted);margin-top:0.15rem;">${g.text}</div>
      </summary>
      <ul style="margin:0.2rem 0 0.9rem 1.2rem;padding:0 1rem 0 0;font-size:0.88rem;line-height:1.55;">
        ${nach[g.id].map(r => `<li style="margin:0.25rem 0;${r === haupt ? "background:color-mix(in srgb, " + col + " 14%, transparent);border-radius:6px;padding:0.15rem 0.4rem;" : ""}">${pfadHtml(r)}</li>`).join("")}
      </ul>
    </details>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("mindmap-ignatia")}
      <div class="page-content">
        <button class="ghost-link" data-route="wahnideen-nicht-reale-vorstellungen" style="margin-bottom:1.2rem;">← Zum Wissensartikel »Nicht reale Vorstellungen«</button>
        <p class="eyebrow">Wissen · Single-Rubriken · Typ 4</p>
        <h1 class="section-title">Ignatia amara: Mindmap der Single-Rubriken</h1>
        <p class="lead-small">Single-Rubriken sind Rubriken, in denen nur ein einziges Mittel steht. Hier sind alle Single-Rubriken von Ignatia amara, dem Mittel, das die Enneagramm-Homöopathie dieses Kompasses dem Typ 4 zuordnet, nach Themen geordnet.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Typ 4 · Ignatia amara · Hauptwahnidee</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Das Gelübde: sie würde ihr Gelübde brechen</div>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.3rem;">Darunter steht alles, was sich zu diesem Mittel als Single-Rubrik findet. Die Äste lassen sich auf- und zuklappen.</div>
        </div>

        <div class="mm-tree" style="display:grid;gap:0.7rem;">${zweige}</div>

        <p class="vb-anmerkung" style="margin-top:1.4rem;font-style:italic;">Wichtig für das Verständnis: Die Seite gibt Rubriken wieder, die in der ›Homöopathischen Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich‹ des Autors stehen. Sie stellt keine Diagnose, gibt keine Therapieempfehlung und trifft keine Aussage zu Wirkung oder Heilung. Bei seelischen Krisen ersetzt sie keine ärztliche oder psychotherapeutische Hilfe.</p>
      </div>
      ${bookTip("homoeopathische-arzneimittellehre-der-single-rubriken-aus-de", "Das geistige Wesen der wichtigsten 500 homöopathischen Arzneimittel – aus den Single-Rubriken des Geist-/Gemütsbereichs.", "Homöopathische Arzneimittellehre der Single-Rubriken")}
      ${bookTip("rathmer-s-repertorium-gebundene-ausgabe", "Das weltweit umfangreichste homöopathische Gemütsrepertorium – 1568 Seiten, 20.000 Rubriken.", "Rathmer’s Repertorium")}
      ${relatedLinks([
        {route:"wahnideen-nicht-reale-vorstellungen", label:"Wissensartikel: Wahnideen im Enneagramm und in der Homöopathie"},
        {route:"nicht-reale-vorstellungen", label:"Schaubild: Nicht reale Vorstellungen"},
        {route:"enneagramm-homoeopathie", label:"Enneagramm & Homöopathie"},
      ])}
    </div>
  `);
}
