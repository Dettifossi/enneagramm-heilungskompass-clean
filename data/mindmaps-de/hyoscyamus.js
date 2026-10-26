const { shell, pageHeader, relatedLinks, bookTip, psychogrammDaten } = window.__kh;

// Single-Rubriken von Hyoscyamus niger (Typ 2) aus »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
const RUBRIKEN = [
  "Albernes Benehmen - Affen, wie",
  "Angesprochen zu werden - Abneigung - Froststadium im Fieber, während",
  "Angst - Atmen amel. - Schweratmigkeit, bei - Krämpfen in der Brust, bei",
  "Anstacheln, anreizen, andere",
  "Beißen, Verlangen zu - Menschen, beißt - stört, beißt jeden, der ihn",
  "Bett - heraus, möchte aus dem Bett - Froststadium im Fieber, während",
  "Bett - Aufstehen aus dem Bett, möchte - Froststadium im Fieber, während",
  "Delirium - Gesicht - blass",
  "Delirium - greift Menschen mit einem Messer an",
  "Delirium - Hochzeit vor, bereitet sich zur",
  "Delirium - hüllt sich im Sommer in Pelz ein",
  "Delirium - umarmt den Ofen und möchte wie an einem Baum an ihm hochklettern",
  "Delirium - Unrecht, von eingebildetem (vermeintlichem)",
  "Delirium - Zucken der Muskeln, mit",
  "Delirium - Zuckungen, mit - eckigen Bewegungen, mit",
  "Delirium tremens, Alkoholdelir - zurückgehalten werden, muss",
  "Eifersucht - rächen, möchte sich",
  "Fliehen, versucht zu - umzingelt und gefangen, wie von Menschen",
  "Furcht - betrogen, verraten zu werden",
  "Furcht - Medikamente - Gift, Medikamente seien",
  "Furcht - plötzlich - Stimme, mit Beschwerden in Bezug auf die",
  "Furcht - Trinken, vor dem - angebotenen Getränken, vor den",
  "Gedanken - Heirat, an - Masturbation, während",
  "Gedanken - Zustrom von Gedanken - Halbschlaf, im",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - erotisch - Eifersucht, mit",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Gerede, Reden, mit wildem",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Hochzeit vor, bereitet sich auf seine",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Streitsucht, mit",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - tappt um sich her, ohne zu wissen wohin",
  "Gesten, Gebärden, macht - berauscht, wie",
  "Gesten, Gebärden, macht - betrunken, wie",
  "Gesten, Gebärden, macht - bürstet das Gesicht oder bürstet etwas weg",
  "Gesten, Gebärden, macht - greift nach etwas - Genitalien - Fieber, während",
  "Gesten, Gebärden, macht - greift, nach etwas - zupft an der Bettwäsche - Gehirnkrankheit, bei",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - Greifen - Luft, in die",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - Nüsse öffnen, als würde er",
  "Gesten, Gebärden, macht - Schauspieler, wie ein",
  "Gier, Habsucht - greift gierig mit beiden Händen nach allem Angebotenen",
  "Gleichgültigkeit, Teilnahmslosigkeit, Apathie - Nacktheit, gegenüber der eigenen",
  "Grimassen - ungezogene Gesichter, zieht, schneidet",
  "Handlungen, Verhalten - grotesk - Affe, wie ein",
  "Klagen, beklagt sich - Verletzung, über eine eingebildete (vermeintliche), ein eingebildetes Unrecht",
  "Koma - Alkohol, durch",
  "Kummer, Sorgen, Trauer - Eifersucht, mit",
  "Lachen - abwechselnd mit - Ruhigsein",
  "Lachen - dumm, albern, idiotisch",
  "Lachen - erzwungen",
  "Lachen - Liebe, durch enttäuschte",
  "Lasziv, lüstern - entblößt die Genitalien",
  "Liebe - Lachen, Neigung zum",
  "Liebe, Beschwerden durch enttäuschte - Lachen, Neigung zu",
  "Liebe, Beschwerden durch enttäuschte - Selbstmordneigung - ertränken, sich zu",
  "Manie - abwechselnd mit - Raserei, Tobsucht, Wut",
  "Manie - Fleckfieber, bei",
  "Manie - Sonnenstich, nach",
  "Medizin - lehnt Medizin ab, weicht allen Strategien aus, sie zu nehmen",
  "Murmeln - Abort, bei drohendem",
  "Murmeln - Schlaflosigkeit, mit",
  "Nackt sein, möchte - Betrunkenheit, bei",
  "Nackt sein, möchte - Exhibitionismus",
  "Nackt sein, möchte - Hyperästhesie der Haut, bei",
  "Nackt sein, möchte - Menses, während",
  "Neugierig, wissbegierig - Kinder",
  "Raserei, Tobsucht, Wut - abwechselnd mit - Gemütsruhe",
  "Raserei, Tobsucht, Wut - abwechselnd mit - still zu sein, Verlangen",
  "Raserei, Tobsucht, Wut - Liebe, durch enttäuschte",
  "Raserei, Tobsucht, Wut - Schlagen, mit - andere",
  "Raserei, Tobsucht, Wut - Tag und Nacht",
  "Reizbarkeit, Gereiztheit - Masturbation, nach",
  "Religiöse Gemütsstörungen - Störungen in Bezug auf die Religiosität - beschäftigt, zu sehr mit Religion - spricht über religiöse Themen",
  "Respekt für die Umstehenden",
  "Schaukeln - amel. - hin und her",
  "Schizophrenie - Kindern, bei",
  "Schmutzig - sitzt oder liegt im eigenen Kot - merken, ohne es zu - Kindern, bei",
  "Schmutzig - spielt - Dreck, mit",
  "Schmutzig - spielt - Kot, mit",
  "Schnappt nach jedem",
  "Schreien - Berührung, bei - wehleidig, jämmerlich im Stupor",
  "Schreien - Erwachen, beim - ohne",
  "Schreien - Freude, durch",
  "Schreien - Kindern, bei - Schlaf, im - Schluchzen, mit",
  "Schreien - Stupor, im",
  "Sexualität, sexuelle Aktivität und Verhalten - wollüstig, lüstern, lasziv - entblößt die Genitalien",
  "Sexualität, sexuelle Aktivität und Verhalten - wollüstig, lüstern, lasziv - Geisteskrankheit, bei",
  "Sitzen - Neigung zu sitzen - Bett, im - legt sich plötzlich hin, und",
  "Spielen - spielt mit - Kot, ihrem / seinem",
  "Sprache - fein",
  "Sprache - laut - wird bei jedem Wort lauter",
  "Sprache - Schwatzen - liegt nackt im Bett und schwatzt",
  "Sprechen - Haushaltsangelegenheiten, von",
  "Sprechen - Krieg, vom - Schlaf, im",
  "Sprechen - plaudernd - liegt nackt im Bett",
  "Sprechen - Schlaf, im - Krieg, von",
  "Sprechen - übermäßig, Geschwätzigkeit - Konvulsionen (Krämpfen), während",
  "Sprechen - Zukunft, über die",
  "Stilles Wesen - abwechselnd mit - Raserei",
  "Stilles Wesen - Masturbation, bei",
  "Stöhnen - grundlos",
  "Stöhnen - warum, weiß nicht",
  "Suizidneigung, Neigung zum Selbstmord - Ertränken, durch - Liebe, aus enttäuschter",
  "Töten, Impuls oder Verlangen zu - jeden, den er sieht",
  "Traurigkeit - Blumen, durch den Geruch von",
  "Umherstreifen, Streunen - eingehüllt, im Sommer in Pelz",
  "Umherstreifen, Streunen - nackt",
  "Unentschlossenheit, Schwierigkeit, Entscheidungen zu treffen - nachmittags",
  "Unentschlossenheit, Schwierigkeit, Entscheidungen zu treffen - Schläfrigkeit, mit",
  "Wahnideen - Ameisen - Buchstaben seien Ameisen",
  "Wahnideen - Debatte, er sei bei einer",
  "Wahnideen - Ehe - schließen, heiraten, würde bald die Ehe",
  "Wahnideen - Gänse - sieht Gänse",
  "Wahnideen - Gespenster, Geister, Gestalten - greift nach",
  "Wahnideen - grotesk - Menschen erscheinen",
  "Wahnideen - Hand - gebunden, gefesselt - Ketten, mit, Hände seien mit",
  "Wahnideen - Harlekin, Hanswurst, er sei ein",
  "Wahnideen - Hennen, die angekettet sind",
  "Wahnideen - Klänge - lauscht eingebildeten Klängen",
  "Wahnideen - klettern, klettert nach oben",
  "Wahnideen - Krebsen, von",
  "Wahnideen - Mund - übler Geruch aus dem Mund",
  "Wahnideen - Nüsse, knackt",
  "Wahnideen - Ofen - hält den Ofen für einen Baum",
  "Wahnideen - Ofen - hält den Ofen für einen Baum - hinaufklettern, und möchte ihn",
  "Wahnideen - Orten, zu sein, an verschiedenen - falschen Ort, er sei am",
  "Wahnideen - Pfauen - jagt",
  "Wahnideen - Pfauen - verscheucht",
  "Wahnideen - ruft - abwesenden Personen, nach",
  "Wahnideen - Schweine, Männer seien",
  "Wahnideen - Streitgespräch zu befinden, sich in einem",
  "Wahnideen - Tiere - gefressen, von Tieren - worden",
  "Wahnideen - Tiere - Gegenstände, Objekte, sind",
  "Wahnideen - Tiere - Tasse, bewegen sich in einer",
  "Wahnideen - Treiben, Antreiben von Tieren - Pfauen",
  "Wahnideen - veränderlich",
  "Wahnideen - verkauft - denkt er werde",
  "Wahnideen - verkauft - worden",
  "Wahnideen - Visionen, hat - verfolgt in Visionen",
  "Wahnideen - Vogel - rupfen, er würde einem Vogel die Federn",
  "Weinen - Schluchzen, Weinen mit - Schlaf, im - aufzuwachen, ohne",
  "Zudringlich, aufdringlich - Händen, mit den",
  "Zudringlich, aufdringlich - Kindern, bei - stören die Eltern im Gespräch"
];

// Gruppen: Rubrik-Kapitel (erstes Wort) -> Themenast
const GRUPPEN = [
  { id: "wahn", titel: "Wahnideen", offen: true, text: "Die Hauptwahnidee des Verkauftwerdens und ihre Nachbarn: Ehe, Ketten, Tiere, Visionen.", kapitel: ["Wahnideen"] },
  { id: "liebe", titel: "Liebe, Eifersucht und Hochzeit", text: "Enttäuschte Liebe, Eifersucht, Gedanken an Heirat, die Hochzeit im Delirium.", kapitel: ["Liebe", "Eifersucht", "Gedanken", "Kummer", "Traurigkeit", "Suizidneigung", "Weinen", "Lasziv", "Sexualität", "Klagen"] },
  { id: "delirium", titel: "Delirium, Manie und Wahnsinn", text: "Delirien, Manien und Zustände, in denen der Bezug zur Umgebung verschwimmt.", kapitel: ["Delirium", "Geisteskrankheit", "Manie", "Koma", "Schizophrenie"] },
  { id: "nackt", titel: "Nacktheit, Schmutz und Schamlosigkeit", text: "Entblößen, Umherstreifen, Spielen mit Schmutz, Grimassen, Zudringlichkeit.", kapitel: ["Nackt", "Gleichgültigkeit", "Schmutzig", "Umherstreifen", "Grimassen", "Respekt", "Zudringlich", "Gier", "Neugierig", "Albernes", "Handlungen"] },
  { id: "zorn", titel: "Zorn, Beißen und Anstacheln", text: "Raserei, Reizbarkeit, Beißen, Schnappen, andere anstacheln.", kapitel: ["Raserei", "Reizbarkeit", "Beißen", "Schnappt", "Töten", "Anstacheln", "Streitsüchtig"] },
  { id: "angst", titel: "Angst, Misstrauen und Medizin", text: "Furcht vor Vergiftung und Verrat, Ablehnung von Arznei, Fliehen.", kapitel: ["Angst", "Furcht", "Fliehen", "Medizin", "Angesprochen"] },
  { id: "sprechen", titel: "Sprechen, Lachen und Schreien", text: "Geschwätzigkeit, Murmeln, albernes Lachen, Schreien und Stöhnen.", kapitel: ["Sprache", "Sprechen", "Lachen", "Murmeln", "Stilles", "Schreien", "Stöhnen", "Spaßen", "Spotten", "Schreiben"] },
  { id: "verhalten", titel: "Gesten, Unruhe und Schaukeln", text: "Zupfen, Greifen, Schaukeln, Sitzen, Unentschlossenheit.", kapitel: ["Gesten", "Bett", "Schaukeln", "Sitzen", "Unentschlossenheit", "Religiöse", "Schlagen", "Reißt"] },
  { id: "weiteres", titel: "Weiteres", text: "Rubriken, die in keinen der Äste passen.", kapitel: [] },
];

const HAUPT = ["Wahnideen - verkauft - denkt er werde", "Wahnideen - verkauft - worden"];

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

export function hyoscyamusMindmapPage() {
  const col = "#7a2fa8";
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
      ${pageHeader("mindmap-hyoscyamus")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← Alle Mindmaps der Single-Rubriken</button>
        <p class="eyebrow">Wissen · Single-Rubriken · Typ 2</p>
        <h1 class="section-title">Hyoscyamus niger: Mindmap der Single-Rubriken</h1>
        <p class="lead-small">Single-Rubriken sind Rubriken, in denen nur ein einziges Mittel steht. Hier sind alle Single-Rubriken von Hyoscyamus niger, dem schwarzen Bilsenkraut, das die Enneagramm-Homöopathie dieses Kompasses dem Typ 2 zuordnet, nach Themen geordnet.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Typ 2 · Hyoscyamus niger · Hauptwahnidee</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Das Verkauftwerden: sie denkt, sie werde verkauft, oder sie sei schon verkauft worden</div>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.3rem;">Darunter steht alles, was sich zu diesem Mittel als Single-Rubrik findet. Die Äste lassen sich auf- und zuklappen.</div>
        </div>

        <div class="mm-tree" style="display:grid;gap:0.7rem;">${zweige}</div>

        ${(() => {
          const pd = psychogrammDaten(2, "de");
          if (!pd) return "";
          const li = a => a.map(x => `<li>${x}</li>`).join("");
          return `<div style="margin:1.6rem 0 0;padding:1.1rem 1.3rem;border:1px solid var(--line);border-radius:14px;">
            <h2 style="font-size:1.1rem;margin:0 0 0.5rem;">Aus dem Psychogramm: was unter der Oberfläche liegt</h2>
            <p style="font-size:0.9rem;line-height:1.6;margin:0 0 0.8rem;color:var(--muted);">Neben den Wahnideen der Rubriken gibt es Vorstellungen, die selten an die Oberfläche kommen. Das Psychogramm des Typs 2 zeigt das Selbstbild und darunter die Schattenanteile.</p>
            <p style="font-size:0.95rem;margin:0 0 0.8rem;"><strong>Kernsatz:</strong> ${pd.kern}</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(14rem,1fr));gap:1rem;">
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;">So möchte der Typ sich sehen</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.selbst)}</ul></div>
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;color:${col};">Was darunter liegt (Schatten)</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.schatten)}</ul></div>
            </div>
            <p style="margin:0.9rem 0 0;font-size:0.9rem;"><a href="#psychogramme/2">Zum vollständigen Psychogramm von Typ 2 →</a></p>
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
