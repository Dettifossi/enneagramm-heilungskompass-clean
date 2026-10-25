const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single-Rubriken von Cannabis indica (Typ 9) aus »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
const RUBRIKEN = [
  "Angst - Menorrhagie, bei",
  "Bewusstlosigkeit - Kerzenlicht, durch",
  "Bewusstlosigkeit - Musik, durch - Klaviermusik, durch Hören von",
  "Delirium - fremd - Ländern, spricht von fremden",
  "Delirium tremens, Alkoholdelir - Wahnideen, mit - Elefanten, von",
  "Erregung, erregbar - Kopfschmerz - vor",
  "Exzentrizität, Überspanntheit - epileptischem Anfall, vor",
  "Furcht - ertränkt zu werden",
  "Furcht - Kohleneimer, vor dem",
  "Furcht - schweben, während des Gefühls, einzelne Glieder würden",
  "Furcht - Stimme zu gebrauchen, die",
  "Furcht - Wirklichem und Unwirklichem, vor",
  "Gesten, Gebärden, macht - unwillkürliche, Handbewegungen - reibt die Hände aneinander",
  "Gedächtnis - Gedächtnisverlust - Aphasie, bei",
  "Gedächtnisschwäche - Kindheit, für die",
  "Gedanken versunken, in - Augen, mit geschlossenen",
  "Hellsehen, Hellsichtigkeit - Mitternacht",
  "Ideen, Einfälle - Reichtum an, Klarheit des Geistes - Urinieren, nach dem",
  "Irrational - abwechselnd mit - rationalem Verhalten",
  "Lachen - Wort, bei jedem",
  "Läuft schnell umher - Menschen, beim Gehen, läuft gegen",
  "Multiple Persönlichkeitsstörungen - Identität, Fehler bezüglich der eigenen - Kaiser, hält sich für einen",
  "Redseligkeit, Geschwätzigkeit - Kopfschmerz - während",
  "Schreiben - Brief anfängt, weiß nicht, wie man mit einem",
  "Sprechen - übermäßig, Geschwätzigkeit - Kopfschmerz, bei - vor",
  "Stumpfheit - denken oder sich konzentrieren, kann nicht - Thema, über ein",
  "Tod - Gefühl des Todes - Froststadium im Fieber, während",
  "Traum, wie in einem - lesen, kann nicht",
  "Traum, wie in einem - Ohren, mit Singen in den",
  "Unbesonnen, unachtsam - Umgebung und alle Menschen, in Bezug auf die ganze",
  "Verwirrung, geistige - ekstatisch",
  "Wahnideen - anschwellen, er würde allmählich",
  "Wahnideen - Armee würde an ihm vorbeiziehen, eine schweigende - Gehen, beim",
  "Wahnideen - ausdehnen - Vorübergehende würden sich ausdehnen",
  "Wahnideen - Beine - Blechbüchse, gefüllt mit Treppenschienen, das Bein sei eine",
  "Wahnideen - Beine seien abgeschnitten - lang, sind zu",
  "Wahnideen - Berggrat, er sei auf einem",
  "Wahnideen - Beweis, führt einen beredten",
  "Wahnideen - Bierkrug, der mit Drachenbildern verziert ist, er sieht einen riesigen",
  "Wahnideen - Blumen, von - riesigen Blumen, von",
  "Wahnideen - Chormusik hört, er sei in der Kathedrale, wenn er",
  "Wahnideen - delirös zu werden, nachts, meint - glaubt er sei delirös",
  "Wahnideen - doppelt - Empfindungen präsentieren sich in doppelter Gestalt",
  "Wahnideen - doppelt - sein, doppelt zu - kontrolliert den anderen, der eine Teil",
  "Wahnideen - ermordet - werden, er würde ermordet - bestochen worden, ihn umzubringen, Menschen seien",
  "Wahnideen - Ewigkeit - er sei in der",
  "Wahnideen - Existenz - eigene Existenz, bezweifelt seine",
  "Wahnideen - Existenz - gestaltlose Existenz im unermesslichen Raum",
  "Wahnideen - Existenz - zwei Existenzen, er habe",
  "Wahnideen - Feigling - Menschen, die ihn verlassen, seien Feiglinge",
  "Wahnideen - Fingernägel scheinen so groß wie Teller - Schläfrigkeit, bei",
  "Wahnideen - Flaschen - Sodawasser, er sei eine Flasche - läuft hin und her, und",
  "Wahnideen - Fliegen - Abgrund, er fliege von einem Felsen in einen dunklen - Zubettgehen, beim",
  "Wahnideen - Fluidum, umgeben von undurchdringlichem, ätherischem",
  "Wahnideen - Gefährten seiner Jugendzeit - sind halb Menschen, halb Pflanzen",
  "Wahnideen - Geist, sei ein",
  "Wahnideen - Gemüse - Existenz als Gemüse zu führen, glaubt, eine",
  "Wahnideen - Geräusche - Wagen, hört den Lärm von",
  "Wahnideen - Gesichter, sieht - hässliche - angenehm, scheinen",
  "Wahnideen - Gesichter, sieht - lächerliche",
  "Wahnideen - Gesichter, sieht - vornehmen Menschen, von",
  "Wahnideen - Giraffe, hält sich für eine",
  "Wahnideen - Glocken läuten, hört - sanft tönende Glocken, hört zahllose",
  "Wahnideen - Glühwürmchen, von",
  "Wahnideen - Gnom, Wicht, sei ein",
  "Wahnideen - Halle, Illusion einer riesigen",
  "Wahnideen - Haus - beweglich, das Haus scheint",
  "Wahnideen - Himmelskörper, hält sich für einen",
  "Wahnideen - Hitze, die vom Epigastrium ausstrahlt, er habe eine gewaltige",
  "Wahnideen - hochgehoben, sie würde - fliegen, und könne",
  "Wahnideen - Hölle - Schatten, von dämonischen - Mitternacht, um - Erwachen, beim",
  "Wahnideen - Hören - Farben, das Geräusch von",
  "Wahnideen - Ichthyosaurier, sieht einen",
  "Wahnideen - Kaiser - sei ein",
  "Wahnideen - Kathedrale, er sei in einer - Chören, beim Hören von",
  "Wahnideen - Kleidung - Lumpen gehüllt, er sei in",
  "Wahnideen - Kleidung - wegfliegen und Wandelsterne (Planeten) werden, die Kleider würden - Entkleiden, beim",
  "Wahnideen - Kopf - Ecke des Zimmers passen, ein Teil des Kopfes würde in jede",
  "Wahnideen - Kopf - Pendel, der Kopf scheint ein umgedrehtes, schwingendes",
  "Wahnideen - Körper - bedeckt - Erde bedecken, würde die ganze",
  "Wahnideen - Kugel verwandelt, transformiert zu sein, in einen Zylinder oder eine",
  "Wahnideen - Kummer, jeder den er trifft habe einen heimlichen",
  "Wahnideen - länger, Dinge erscheinen - ein Bein ist lang",
  "Wahnideen - launisch",
  "Wahnideen - Leben, in Bezug auf das - rasen, er würde von einem Leben zum anderen",
  "Wahnideen - Leben, in Bezug auf das - Symbole des Lebens, alle vergangenen Ereignisse drehen sich auf Rädern als",
  "Wahnideen - Lokomotive - er sei eine Lokomotive",
  "Wahnideen - Mandarin, hielt seinen Freund für einen chinesischen",
  "Wahnideen - Mann - verhüllter Mann kommt aus der Mauer - Gehen auf der Straße, beim",
  "Wahnideen - Marmorstatue, Gefühl, er sei eine",
  "Wahnideen - Mauern, stürzen ein - hohen Mauern, ist umgeben von",
  "Wahnideen - Nilpferd, er sei ein",
  "Wahnideen - Not - sie seien in Not geraten",
  "Wahnideen - Pferde, sieht - reitet",
  "Wahnideen - Pflanzendasein, führt ein",
  "Wahnideen - Platz, der von Häusern umgeben ist, die hundert Stockwerke hoch sind, sieht einen ungeheuer großen",
  "Wahnideen - Pumpenschwengel, er sei ein",
  "Wahnideen - Raum - getragen, er würde in den Weltraum - Umlaufbahn zu beschreiben, und genötigt, eine enorme - Liegen, beim",
  "Wahnideen - rufen, laut zu",
  "Wahnideen - Ruß aus ihn fallen, als würde ein Regen aus",
  "Wahnideen - Säge, die auf und niederschnellt, er sei eine riesige",
  "Wahnideen - Satyren, Visionen von tanzenden",
  "Wahnideen - schreien, bildet sich ein zu",
  "Wahnideen - seziert werden, er werde",
  "Wahnideen - singen, er würde",
  "Wahnideen - Soldaten - marschieren - schweigend vorbei",
  "Wahnideen - Sonne - schwanken, die Sonne würde",
  "Wahnideen - Spaltklotz, er sei ein",
  "Wahnideen - Statue - Marmorstatue, er sei eine",
  "Wahnideen - sterben - gleich sterben, man würde gleich - seziert werden, und werde bald",
  "Wahnideen - Sterne in seinem Teller, sieht",
  "Wahnideen - Stimmen - eigene Stimme klingt fremd und scheint wie Donner zu hallen, die",
  "Wahnideen - Strudel, Wirbel hinunter getragen, er würde einen seelischen (psychischen)",
  "Wahnideen - Tanzen - Satyren und nickende Mandarine, tanzende",
  "Wahnideen - Tartaren, von einer Horde von",
  "Wahnideen - Tintenfass - sei ein Tintenfass, er",
  "Wahnideen - tot - Personen, sieht tote - Mitternacht - Erwachen, beim",
  "Wahnideen - Überirdischem, von etwas",
  "Wahnideen - übertrieben, alles ist",
  "Wahnideen - umgewandelt, transformiert, er würde - mehreren, eigenartigen Verwandlungen unterzogen, er würde",
  "Wahnideen - vergrößert - ein Bein sei länger",
  "Wahnideen - vergrößert - Körper sei - rechte Seite",
  "Wahnideen - vergrößert - Wimpern seien",
  "Wahnideen - versetzt - Welt, in eine andere",
  "Wahnideen - Visionen, hat - Kraft, von eingebildeter",
  "Wahnideen - Wasser - blauem Wasser, von",
  "Wahnideen - Wasser, von - Flutkatastrophen",
  "Wahnideen - Wasser - Nektar, Wasser sei wunderbarer - trinkt, wenn er",
  "Wahnideen - Wasser - Überschwemmungen u.ä.",
  "Wahnideen - wechselhaft - ändern sich plötzlich",
  "Wahnideen - Wimpern verlängert",
  "Wahnideen - Wind, der im Kamin heult, klingt wie das Sausen eines gewaltigen Rades - Widerhall eines Donnerschlages auf einer großen Orgel, und wie der",
  "Wahnideen - Wirbelsäule sei ein Barometer",
  "Wahnideen - Wissen, er besäße unermessliches",
  "Wahnideen - Wolken - fremdartige Wolken lassen sich auf den Patienten nieder oder tanzen um die Sonne herum",
  "Wahnideen - wunderlich, grillig",
  "Wahnideen - Würmer - Erbrochene sieht aus wie ein Haufen Würmer, das",
  "Wahnideen - Zimmer - Wände scheinen zusammenzurücken",
  "Wahnideen - Zimmer - zerfallen, das Zimmer würde",
  "Wahnideen - Zylinder, hält sich für einen",
  "Zeit - vergeht zu langsam, erscheint länger - Sekunden erscheinen wie eine Ewigkeit, wenige"
];

// Gruppen: Rubrik-Kapitel (erstes Wort) -> Themenast
const GRUPPEN = [
  { id: "klein", titel: "Wahnideen: Gnom, Wicht und Unscheinbarkeit", offen: true, text: "Der Gnom und der Wicht, Gemüse, Pflanzendasein, Geist, Tintenfass, kleine und leblose Dinge.", kapitel: [], test: /^Wahnideen - .*(Gnom|Gemüse|Pflanzen|Geist, sei|Tintenfass|Spaltklotz|Zylinder|Flaschen|Pumpenschwengel|Säge|Lokomotive|Statue|Marmorstatue|Giraffe|Nilpferd|Himmelskörper|Kaiser|Gefährten|Blechbüchse|Kugel)/ },
  { id: "koerper", titel: "Wahnideen: Körper, Größe und Verwandlung", text: "Anschwellen, Ausdehnen, lange Beine, Verwandlung, doppelte Existenz.", kapitel: [], test: /^Wahnideen - .*(anschwellen|ausdehnen|Beine|Fingernägel|Kopf|vergrößert|länger|umgewandelt|transformiert|Körper|Existenz|doppelt|Hitze|Wimpern|Wirbelsäule|Kleidung|Ruß|hochgehoben|fliegen|Fliegen|schweben)/ },
  { id: "raum", titel: "Wahnideen: Raum, Zeit, Welten und Wasser", text: "Weltraum, Ewigkeit, Strudel, Wasser, Fluten, Räume und Mauern.", kapitel: [], test: /^Wahnideen - .*(Raum|Ewigkeit|Strudel|Wasser|Zimmer|Halle|Haus|Mauern|Platz|Welt|Leben|Sonne|Wolken|Fluidum|Berggrat|Abgrund|Überirdisch|übertrieben|Wissen|Hölle|Sterne|übertrieben)/ },
  { id: "wahn", titel: "Wahnideen: Gestalten, Töne und Gesichter", text: "Gesichter, Satyren, Soldaten, Geräusche, Chormusik, Verfolgung und Mord.", kapitel: ["Wahnideen"] },
  { id: "geist", titel: "Denken, Gedächtnis und Verwirrung", text: "Klarheit des Geistes, Gedächtnisverlust, Stumpfheit, Verwirrung, Traumzustand.", kapitel: ["Gedächtnis", "Gedächtnisschwäche", "Gedanken", "Hellsehen", "Ideen", "Irrational", "Multiple", "Stumpfheit", "Traum", "Unbesonnen", "Verwirrung", "Zeit", "Schreiben", "Exzentrizität"] },
  { id: "sprechen", titel: "Sprechen, Lachen und Gesten", text: "Redseligkeit, Lachen bei jedem Wort, unwillkürliche Handbewegungen.", kapitel: ["Redseligkeit", "Sprechen", "Lachen", "Gesten", "Läuft", "Erregung"] },
  { id: "angst", titel: "Angst, Furcht und Delirium", text: "Angst, Furcht vor Ertrinken, Delirium, Bewusstlosigkeit, Gefühl des Todes.", kapitel: ["Angst", "Furcht", "Delirium", "Bewusstlosigkeit", "Tod"] },
  { id: "weiteres", titel: "Weiteres", text: "Rubriken, die in keinen der Äste passen.", kapitel: [] },
];

const HAUPT = ["Wahnideen - Gnom, Wicht, sei ein"];

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

export function cannabisMindmapPage() {
  const col = "#cc6e00";
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
      ${pageHeader("mindmap-cannabis")}
      <div class="page-content">
        <button class="ghost-link" data-route="wahnideen-nicht-reale-vorstellungen" style="margin-bottom:1.2rem;">← Zum Wissensartikel »Nicht reale Vorstellungen«</button>
        <p class="eyebrow">Wissen · Single-Rubriken · Typ 9</p>
        <h1 class="section-title">Cannabis indica: Mindmap der Single-Rubriken</h1>
        <p class="lead-small">Single-Rubriken sind Rubriken, in denen nur ein einziges Mittel steht. Hier sind alle Single-Rubriken von Cannabis indica, dem indischen Hanf, den die Enneagramm-Homöopathie dieses Kompasses dem Typ 9 zuordnet, nach Themen geordnet.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Typ 9 · Cannabis indica · Hauptwahnidee</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Der Gnom: die Vorstellung, ein Gnom oder Wicht zu sein</div>
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
