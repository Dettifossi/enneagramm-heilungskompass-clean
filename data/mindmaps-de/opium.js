const { shell, pageHeader, relatedLinks, bookTip, psychogrammDaten } = window.__kh;

// Single-Rubriken von Opium (Typ 6) aus »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
const RUBRIKEN = [
  "Aktivität - Verlangen nach - Schweiß, beim",
  "Angst - Schreck - zurückbleibt, Angst, wenn die Furcht nach einem Schreck",
  "Angst - Schwangerschaft, während der - Abort in der zweiten Hälfte, Furcht vor",
  "Beißen - Arm (Arme), beißt sich in den (die)",
  "Bewusstlosigkeit - Cheyne-Stokes-Atmung, mit",
  "Bewusstlosigkeit - Menses - Unterdrückung von - Schreck, durch",
  "Delirium - beschuldigt sich selbst für seine Torheit, Narrheit, Narretei",
  "Delirium - Erkältung, nach",
  "Delirium - Geister, sieht",
  "Delirium - kalt - Erkältung, nach",
  "Delirium - Schuld für seine Narrheit, Narretei, Torheit, gibt sich selbst die",
  "Delirium - Teufel, sieht",
  "Delirium tremens, Alkoholdelir - alten, abgemagerten Personen, bei",
  "Delirium tremens, Alkoholdelir - kleine Mengen alkoholischer Getränke, durch",
  "Delirium tremens, Alkoholdelir - Sinne abgestumpft, Sopor mit Schnarchen",
  "Delirium tremens, Alkoholdelir - Sopor mit Schnarchen",
  "Delirium tremens, Alkoholdelir - wiederholte Anfälle, eine kleine Menge Alkohol wirft sie ins Delirium",
  "Delirium - Erkältung, nach",
  "Eifersucht - Leuten in der Umgebung, gegenüber",
  "Entmutigt - mürrisch, und",
  "Entrüstung, Empörung - Unbehagen, durch allgemeines",
  "Erschreckt, leicht - Schließen der Augen, beim",
  "Exzentrizität, Überspanntheit - nachts (die ganze Nacht)",
  "Fluchen - nachmittags",
  "Froh - geistiger Störung, bei",
  "Furcht - abwechselnd mit - Mut",
  "Furcht - Amenorrhoe aus Furcht",
  "Furcht - Extravaganz, vor",
  "Furcht - nachts - Darm, durch Krämpfe im",
  "Furcht - plötzlich - gefolgt von - Diabetes mellitus",
  "Furcht - Schlaflosigkeit, vor",
  "Furcht - Urin - Harnverhaltung durch Furcht",
  "Furcht - Verschwendung, vor",
  "Gedächtnis - gut, aktiv - Fieber, während",
  "Gedächtnis - Vergesslichkeit - Verknüpfung von zusammenhängenden Gedanken, bei der",
  "Gedanken - überlegt, bedacht - Nacht, die ganze",
  "Gedanken - Klarheit der Gedanken - Fieber, während",
  "Gedankenvoll - Nacht, die ganze",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - abwechselnd mit - Stupor",
  "Gesicht - heißem Gesicht, mit",
  "Gesten, Gebärden, macht - greift nach etwas - zupft an der Bettwäsche - Traum, im",
  "Gesten, Gebärden, macht - wunderlich",
  "Gleichgültigkeit, Teilnahmslosigkeit, Apathie - feinere Empfindungen, gegen",
  "Heftig, vehement - Schlaf - vor",
  "Heiterkeit, Hochgefühl - abwechselnd mit - Besorgnis",
  "Heiterkeit, Hochgefühl - abwechselnd mit - Kummer, Trauer",
  "Heiterkeit, Hochgefühl - Schweiß, beim",
  "Heiterkeit, Hochgefühl - abwechselnd mit - Sorgen",
  "Koma - Augen - glasigen Augen, mit",
  "Koma - Azidose, mit respiratorischer",
  "Koma - Stupor, mit vorangehendem",
  "Kummer, Sorgen, Trauer - Kränkungen, über",
  "Kummer, Sorgen, Trauer - Meningitis, verursacht zerebrospinale",
  "Lustig, fröhlich - abwechselnd mit - Zorn",
  "Manie - unschicklichem, ungehörigem Verhalten, mit",
  "Meditieren, Nachdenken - nachts",
  "Murmeln - Konvulsionen (Krämpfen) im Wochenbett, bei",
  "Mürrisch - Träume, durch",
  "Mürrisch - Träumen, beim",
  "Pläne - macht, schmiedet viele Pläne - gigantische Pläne",
  "Possen, spielt - abwechselnd mit - Traurigkeit",
  "Possenreißen, Possenspiel - tobend, hochmütig und anschließend mit zorniger Wildheit oder weinerlichem Jammern",
  "Qualvolle Angst - Verletzungsschock, bei",
  "Raserei, Tobsucht, Wut - betrunken, wie - Typhus, bei",
  "Raserei, Tobsucht, Wut - Pneumonie, nach",
  "Reißt, zerreißt Dinge - alles, was ihr in die Finger kommt",
  "Ruhelosigkeit - Bett - Bettwärme, durch",
  "Schreck, Beschwerden durch - Angst, nach Schreck - Eindruck des Schreckens bleibt bestehen",
  "Schreck, Beschwerden durch - Eindruck, des Schreckens bleibt bestehen",
  "Schüchternheit, Zaghaftigkeit - Geschäften, beim Durchführen von",
  "Singen - monoton, eintönig",
  "Sorgen, voller - abwechselnd mit - Heiterkeit, Hochgefühl",
  "Sorgen, voller - Schläfrigkeit, mit",
  "Sprache - delirös - Augen, mit weit offenen",
  "Sprache - kurz und bündig",
  "Sprache - unzusammenhängend - Schlummer, nach",
  "Sprache - verwirrt - Geistesstörung, bei",
  "Streitsüchtig - Schlaf - vor",
  "Stupor - Gehör bei Stupor, überempfindliches",
  "Stupor - Menses - unterdrückten Menses, bei durch Schreck",
  "Tod - verachtet den Tod, Todesverachtung",
  "Traurigkeit - abwechselnd, mit - Possenreißen",
  "Unbesonnen, unachtsam - Geistesgestörtheit, bei",
  "Vergesslich - Zusammenhang aufeinanderfolgender Gedanken, vergisst den",
  "Vergesslich - Zusammenhang aufeinanderfolgender Gedanken, vergisst den - Apoplexie, nach",
  "Verstecken - sich - alten Menschen, bei",
  "Verzweiflung - Masturbation, bei",
  "Wahnideen - betrunken - sei betrunken, er - Rauch im Gehirn, durch",
  "Wahnideen - Bett - umringt von Teufeln, das Bett wäre",
  "Wahnideen - Bett - warmes Bett - heiß, Gefühl, als wäre das Bett",
  "Wahnideen - doppelt - sein, doppelt zu - besiegen wird, da sei ein anderes Selbst und er ist sich nicht sicher, welches von beiden das andere",
  "Wahnideen - Drachen, von",
  "Wahnideen - erstochen - jemand drohen, ihn zu erstechen, als würde",
  "Wahnideen - Gehirn - Rauch auf dem Gehirn",
  "Wahnideen - Hause, daheim, zu - weg von zu Hause, er sei - Abort, bei drohendem",
  "Wahnideen - Leben - drei Stunden von seinem Haus entfernt",
  "Wahnideen - Mörder, jeder um ihn herum sei ein - hingerichtet zu werden, Mittel, um gelassen",
  "Wahnideen - rutschen - genötigt durch eine unsichtbare Kraft am Boden entlang rutschen, er würde",
  "Wahnideen - Schlaf - kurzem Schlaf, nach",
  "Wahnideen - Skorpione, sieht",
  "Wahnideen - Sprechen - sie spricht - sich selbst, sie spricht mit",
  "Wahnideen - Teufel - sieht - Bett, sieht Teufel an seinem",
  "Wahnideen - Unrecht - begangen zu haben, Unrecht - bestraft werden, und würde gleich",
  "Wahnideen - Verbrecher, er sei ein - hingerichtet werden soll, der",
  "Wahnideen - Visionen, hat - Coma vigile, bei",
  "Wahnideen - Visionen, hat - Freude, Visionen von - Nacht, füllen sein Gehirn die ganze",
  "Weinen - Erkältung, nach",
  "Zorn - abwechselnd mit - Possenreißen, Possenspiel",
  "Zorn - ergreift die Hände der Umstehenden",
  "Zufrieden - nachts",
  "Zufrieden - ruhig, und"
];

// Gruppen: Rubrik-Kapitel (erstes Wort) -> Themenast
const GRUPPEN = [
  { id: "wahn", titel: "Wahnideen: Verfolgung, Schuld und Teufel", offen: true, text: "Die Hauptwahnidee der Verfolgung und Bestrafung, dazu Teufel, Drachen und Skorpione.", kapitel: [], test: /^Wahnideen - .*(Mörder|Verbrecher|Unrecht|erstochen|Teufel|Drachen|Skorpione|Visionen)/ },
  { id: "wahn2", titel: "Wahnideen: Körper, Zuhause und Selbst", text: "Doppeltes Selbst, Gehirn voller Rauch, weit weg von zu Hause, Rutschen und Hitze.", kapitel: ["Wahnideen"] },
  { id: "angst", titel: "Angst, Furcht und Schreck", text: "Schreck, der bestehen bleibt, Furcht vor Schlaflosigkeit und Verschwendung.", kapitel: ["Angst", "Furcht", "Schreck", "Qualvolle", "Erschreckt", "Verzweiflung", "Schüchternheit", "Verstecken"] },
  { id: "delirium", titel: "Delirium, Koma und Stupor", text: "Delirium, Delirium tremens, Bewusstlosigkeit, Koma und Stupor.", kapitel: ["Delirium", "Bewusstlosigkeit", "Koma", "Stupor", "Geisteskrankheit", "Unbesonnen"] },
  { id: "stimmung", titel: "Stimmung: Heiterkeit, Possenreißen und Zorn", text: "Der Wechsel von Heiterkeit, Possenreißen, Traurigkeit und Zorn.", kapitel: ["Heiterkeit", "Lustig", "Possen", "Possenreißen", "Froh", "Traurigkeit", "Zorn", "Zufrieden", "Kummer", "Entmutigt", "Entrüstung", "Eifersucht", "Mürrisch", "Manie", "Raserei", "Streitsüchtig", "Fluchen", "Beißen", "Reißt", "Weinen"] },
  { id: "geist", titel: "Denken, Gedächtnis und Pläne", text: "Klares Gedächtnis im Fieber, Grübeln bei Nacht, gigantische Pläne, Vergessen.", kapitel: ["Gedächtnis", "Gedanken", "Gedankenvoll", "Meditieren", "Pläne", "Vergesslich", "Exzentrizität", "Sorgen", "Tod", "Aktivität"] },
  { id: "sprechen", titel: "Sprechen, Gesten und Verhalten", text: "Kurze, verwirrte Sprache, Singen, Zupfen an der Bettwäsche, Ruhelosigkeit.", kapitel: ["Sprache", "Singen", "Murmeln", "Gesten", "Gesicht", "Ruhelosigkeit", "Heftig", "Gleichgültigkeit"] },
  { id: "weiteres", titel: "Weiteres", text: "Rubriken, die in keinen der Äste passen.", kapitel: [] },
];

const HAUPT = ["Wahnideen - Mörder, jeder um ihn herum sei ein - hingerichtet zu werden, Mittel, um gelassen", "Wahnideen - Verbrecher, er sei ein - hingerichtet werden soll, der", "Wahnideen - Unrecht - begangen zu haben, Unrecht - bestraft werden, und würde gleich"];

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

export function opiumMindmapPage() {
  const col = "#8a5222";
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
      ${pageHeader("mindmap-opium")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← Alle Mindmaps der Single-Rubriken</button>
        <p class="eyebrow">Wissen · Single-Rubriken · Typ 6</p>
        <h1 class="section-title">Opium: Mindmap der Single-Rubriken</h1>
        <p class="lead-small">Single-Rubriken sind Rubriken, in denen nur ein einziges Mittel steht. Hier sind alle Single-Rubriken von Opium, dem Schlafmohn, den die Enneagramm-Homöopathie dieses Kompasses dem Typ 6 zuordnet, nach Themen geordnet.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Typ 6 · Opium · Hauptwahnidee</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Die Verfolgung: jeder um ihn herum sei ein Mörder, er sei ein Verbrecher oder werde für ein Unrecht bestraft</div>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.3rem;">Darunter steht alles, was sich zu diesem Mittel als Single-Rubrik findet. Die Äste lassen sich auf- und zuklappen.</div>
        </div>

        <div class="mm-tree" style="display:grid;gap:0.7rem;">${zweige}</div>

        ${(() => {
          const pd = psychogrammDaten(6, "de");
          if (!pd) return "";
          const li = a => a.map(x => `<li>${x}</li>`).join("");
          return `<div style="margin:1.6rem 0 0;padding:1.1rem 1.3rem;border:1px solid var(--line);border-radius:14px;">
            <h2 style="font-size:1.1rem;margin:0 0 0.5rem;">Aus dem Psychogramm: was unter der Oberfläche liegt</h2>
            <p style="font-size:0.9rem;line-height:1.6;margin:0 0 0.8rem;color:var(--muted);">Neben den Wahnideen der Rubriken gibt es Vorstellungen, die selten an die Oberfläche kommen. Das Psychogramm des Typs 6 zeigt das Selbstbild und darunter die Schattenanteile.</p>
            <p style="font-size:0.95rem;margin:0 0 0.8rem;"><strong>Kernsatz:</strong> ${pd.kern}</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(14rem,1fr));gap:1rem;">
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;">So möchte der Typ sich sehen</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.selbst)}</ul></div>
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;color:${col};">Was darunter liegt (Schatten)</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.schatten)}</ul></div>
            </div>
            <p style="margin:0.9rem 0 0;font-size:0.9rem;"><a href="#psychogramme/6">Zum vollständigen Psychogramm von Typ 6 →</a></p>
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
