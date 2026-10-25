const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single-Rubriken von Stramonium (Typ 5) aus »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
const RUBRIKEN = [
  "Aktivität, geistige - gestört",
  "Angesehen, angeblickt zu werden - weicht den Blicken anderer aus",
  "Angst - Bewegung, durch - beenden kann, wenn er Bewegungen nicht sofort",
  "Angst - Tunnels, beim Passieren eines",
  "Aphasie - strengt sich lange an, bevor ein Wort hervorgebracht wird",
  "Beschimpfen, beleidigen, schmähen - Anlass, ohne",
  "Beschimpfen, beleidigen, schmähen - Kinder - Weinen, mit",
  "Beschimpfen, beleidigen, schmähen - weinerlicher Stimmung, mit",
  "Beten - Frömmigkeit, nächtliche",
  "Beten - Menses, während",
  "Bewusstlosigkeit - fährt wie wild auf, kann aber die Augen nicht offenhalten",
  "Blicken - Seite, zur",
  "Delirium - abwechselnd mit - Konvulsionen (Krämpfen), tetanischen",
  "Delirium - abwechselnd mit - tetanischen Konvulsionen (Krämpfen), liegt auf dem Rücken, Knie und Oberschenkel gebeugt, Hände gefaltet",
  "Delirium - Bett, kriecht umher im",
  "Delirium - Bewegungen - merkwürdig, eigenartig, bewegt sich andauernd von einer Stelle zur anderen",
  "Delirium - Bewegungen - rhythmisch",
  "Delirium - Blick auf einen Punkt fixiert (Starren) - gerunzeltem Gesicht, mit",
  "Delirium - Gesicht - Muskelspiel, mit ständigem",
  "Delirium - heiter, fröhlich - abwechselnd mit - Lachen",
  "Delirium - heiter, fröhlich - abwechselnd mit - Pfeifen",
  "Delirium - heiter, fröhlich - abwechselnd mit - Singen",
  "Delirium - irrationale Handlungen und Gedanken",
  "Delirium - Menses, vor den - unterdrückten Menses, bei",
  "Delirium - nachmittags - 16 - 0 h",
  "Delirium - Pferden, spricht von",
  "Delirium - scheu, versteckt sich",
  "Delirium - spricht Gegenstände an, spricht mit Gegenständen",
  "Delirium - stumpfsinnig",
  "Delirium tremens (Alkoholdelir) - Wahnideen, mit - nachts",
  "Delirium tremens (Alkoholdelir) - Zunge - Zittern der Zunge, mit",
  "Eifersucht - beschuldigt - Ehefrau der Untreue",
  "Entfernungen - vergrößert, scheinen - läuft gegen Gegenstände, die ihm entfernt erscheinen",
  "Erkennt - nicht, erkennt - spricht, erkennt denjenigen nicht, zu dem er",
  "Erregung, erregbar - abwechselnd mit - Konvulsionen (Krämpfen)",
  "Erschreckt, leicht - erwacht - entsetzt, ist außer sich, erkennt niemanden, schreit, klammert sich an die Umstehenden",
  "Erschreckt, leicht - Wahnideen, durch",
  "Fehler, macht - Worte, benutzt die falschen - Delirium tremens (Alkoholdelir), bei",
  "Fliegen zu fangen, versucht",
  "Fliehen, versucht zu - Wochenbettmanie, bei",
  "Fliehen, versucht zu - Schreien, mit",
  "Froh - abwechselnd mit - Ächzen und Lachen",
  "Froh - Chorea, vor, mit Weinen",
  "Froh - Gehirnerkrankungen, bei",
  "Froh - Reizbarkeit, nach",
  "Frömmigkeit, nächtliche",
  "Füllt sich die Taschen mit allem möglichen",
  "Furcht - allem, ständige Furcht vor - Masern kommen nicht heraus, und die",
  "Furcht - Blicken - Anblick des Ersten, was er sieht, beim",
  "Furcht - Ersticken, vor dem - Kunststoffbrücke eingesetzt wurde, nachdem vom Zahnarzt eine",
  "Furcht - gebraten zu werden",
  "Furcht - gefressen zu werden",
  "Furcht - Hunden, vor - großen Hunden, vor",
  "Furcht - Imbezillität, vor",
  "Furcht - Konvulsionen (Krämpfen) - mit",
  "Furcht - Prozessionen, Umzügen, bei",
  "Furcht - Unheil, Übel, vor - Kleinigkeiten, durch",
  "Furcht - Fallen, zu - alles auf sie fällt, dass",
  "Furcht - Tunnel, vor einem - ohne Licht im Wagen",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Gesellschaft, mit Verlangen nach - Licht, und",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Qualen, mit",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Schweiß - kaltem Schweiß, mit",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - wühlt wie ein Schwein mit dem Mund in der Erde",
  "Gesellschaft - Verlangen nach - Menses, während",
  "Gesten, Gebärden, macht - Erwachen, beim",
  "Gesten, Gebärden, macht - extravagante",
  "Gesten, Gebärden, macht - greift, nach etwas - schnell",
  "Gesten, Gebärden, macht - greift, nach etwas - Tobsuchtsanfall, bei",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - Greifen - Flammen eines Feuers, nach",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - Greifen - Fliegen, nach",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - Greifen - schnell",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - öffnet und schließt die Hände",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - Raserei, Tobsucht, bei",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - Verschränken, Zusammenlegen der Hände - Konvulsionen (Krämpfe), während tetanischer",
  "Gesten, Gebärden, macht - zeigt seine Wünsche durch Gesten an",
  "Gleichgültigkeit, Teilnahmslosigkeit, Apathie - abwechselnd mit - Schüchternheit, Zaghaftigkeit",
  "Heftiges, hitziges Verhalten - abwechselnd mit - Lachen",
  "Jagen, etwas oder jemandem hinterherjagen - Gegenstände, eingebildete",
  "Krallt das Gesicht des Vaters",
  "Kriecht, krabbelt - Bett herum, im",
  "Küssen - möchte geküsst werden",
  "Lachen - abwechselnd mit - Angst",
  "Lachen - abwechselnd mit - Fröhlichkeit, Heiterkeit",
  "Lachen - abwechselnd mit - Singen",
  "Lachen - Handlungen, über seine eigenen",
  "Lachen - Raserei, mit",
  "Lachen - schlechter Laune, bei",
  "Lachen - sexueller Erregung, mit",
  "Lachen - Sprachlosigkeit, mit",
  "Lachen - Übellaunigkeit, mit",
  "Lachen - Wutanfall, mit",
  "Lesen - Verlangen - ausgefallene Geschichten zu lesen",
  "Manie - Angst, mit",
  "Manie - Aphonie bei Erregung, mit",
  "Manie - Augen - Visionen, mit",
  "Manie - Händen, klatscht mit den",
  "Manie - Konvulsionen (Krämpfe) - anfallsweise, jede halbe Stunde",
  "Manie - Stöhnen und Lachen, mit",
  "Milde - maskiert Gewalttätigkeit",
  "Mürrisch - Lachen, gefolgt von lautem",
  "Nackt sein, möchte - anhaltend",
  "Raserei, Tobsucht, Wut - abwechselnd mit - Konvulsionen (Krämpfen)",
  "Raserei, Tobsucht, Wut - abwechselnd mit - Redseligkeit, Geschwätzigkeit",
  "Raserei, Tobsucht, Wut - abwechselnd mit - Tod - Vorahnung des Todes",
  "Raserei, Tobsucht, Wut - empfindungslos, wird",
  "Raserei, Tobsucht, Wut - Hochnehmen, des Kindes beim",
  "Raserei, Tobsucht, Wut - Hydrophobie, bei",
  "Raserei, Tobsucht, Wut - Lachen, mit",
  "Raserei, Tobsucht, Wut - stehen, kann nicht",
  "Raserei, Tobsucht, Wut - wirft sich im Bett umher, macht unverständliche Zeichen",
  "Religiöse Gemütsstörungen - frommer Blick, bei religiöser Manie",
  "Rollt, wälzt sich - Bett, im",
  "Ruhelosigkeit - nachts - Schluckauf, mit",
  "Schlagen - Knabe zerkratzt, krallt das Gesicht des Vaters",
  "Schreiben - Schwierigkeiten, beim Schreiben seine Gedanken auszudrücken - Fieber, bei, kann keine Buchstaben schreiben",
  "Schreien - kann nicht schreien, obwohl er es möchte",
  "Schreien - Schlaf, im - Schluckauf, bei",
  "Schreien - Tag und Nacht",
  "Schüchternheit, Zaghaftigkeit - abwechselnd mit - Gleichgültigkeit",
  "Seufzen - Hals, mit Fassen an den",
  "Seufzen - Menses, nach",
  "Sexualität, sexuelle Aktivität und Verhalten - wollüstig, lüstern, lasziv - Menses, vor",
  "Singen - abwechselnd mit - Weinen - Lachen, und",
  "Singen - Menses - während",
  "Singen - Vaterunser in Latein, das",
  "Sitzen - Neigung zu sitzen - Blick auf den Boden, mit",
  "Sprache - ernst, ernsthaft",
  "Sprechen - abwesenden Personen, mit",
  "Sprechen - übermäßig, Geschwätzigkeit - abwechselnd mit - Raserei",
  "Sprechen - wild - Chorea, bei",
  "Springen - Bett, aus dem - Erwachen, beim",
  "Stöhnen - greift sich an den Hals und stöhnt",
  "Stöhnen - Menses - nach",
  "Stöhnen - Schreien, Kreischen, mit gelegentlichem",
  "Streitsüchtig - gefühllos",
  "Streitsüchtig - grundlos",
  "Stupor - fährt wie wild auf, kann aber die Augen nicht offenhalten",
  "Suizidneigung, Neigung zum Selbstmord - Gedanken an Selbstmord - Hitze, während",
  "Tadel - Beschwerden, nach Tadel - erweiterte Pupillen",
  "Taschen, steckt sich alles in die",
  "Tod - Todesahnung - abwechselnd mit - Raserei",
  "Tollwut, Hydrophobie - Delirium, mit",
  "Tollwut, Hydrophobie - Furcht vor Wasser - schreit oder heult mit hoher Stimme",
  "Trance - abwechselnd mit - Konvulsionen (Krämpfen)",
  "Trance - abwechselnd mit - Spasmen, in jedem Sommer",
  "Trance - Konvulsionen (Krämpfen) - nach",
  "Trance - periodisch - Sommer, jeden",
  "Traurigkeit - Wetter - klarem Wetter, bei",
  "Trost - untröstlich - Alleinsein und Dunkelheit agg.",
  "Untröstlich - allein, agg. wenn",
  "Untröstlich - Alleinsein und Dunkelheit agg.",
  "Untröstlich - Dunkelheit, agg. bei",
  "Verblüfft - Furcht, mit",
  "Verhaltensstörungen - Kindern, bei - Alpträumen, mit",
  "Verhaltensstörungen - Kindern, bei - Ängsten, mit",
  "Verlangen, sehnsüchtiges - Sonnenschein, Licht und Gesellschaft, nach",
  "Verrücktes Gefühl - Unwohlsein, mit",
  "Verwirrung, geistige - Gehen - nachts - Mitternacht, gegen oder nach, beim",
  "Verwirrung, geistige - nachts - Mitternacht - nach - Herumgehen, beim",
  "Verzaubert und neben sich, wie",
  "Wahnideen - allein zu sein - Wildnis, allein in der",
  "Wahnideen - Bett - fallen - auf sie, das Bett würde",
  "Wahnideen - Bett - Falten, das Bett sei voller, völlig zerknittert",
  "Wahnideen - Bett - weggezogen, wird unter ihr",
  "Wahnideen - Bilder, Phantome, sieht - aufsteigen, aus der Erde",
  "Wahnideen - Bilder, Phantome, sieht - neben sich, an seiner Seite",
  "Wahnideen - durchgeschnitten, als wäre er",
  "Wahnideen - Ecken - Menschen und Tiere aus den Ecken kommen, sieht",
  "Wahnideen - Ecken - sieht Tiere und Gestalten aus den Ecken kommen - und auf ihn zu",
  "Wahnideen - Ehemann, vernachlässigt ihren",
  "Wahnideen - ehrlich - nicht ehrlich, er sei",
  "Wahnideen - Eifersucht - Liebhaber hinter dem Ofen versteckt, die Ehefrau habe",
  "Wahnideen - Eisenbahn - Ohr, es sei ein Zug oder ein Auto in seinem",
  "Wahnideen - ermorden, er würde - schlägt Freunde, die ihm zu Hilfe kommen",
  "Wahnideen - ermordet - werde ermordet, er - gebraten und gefressen, er würde",
  "Wahnideen - Fallen - er fällt",
  "Wahnideen - Fallen - klammert sich an und möchte gehalten werden",
  "Wahnideen - Feuer - Bett - weggezogen, wird unter ihr Feuer - Feuerkugeln würden über die Bettdecken rollen",
  "Wahnideen - Feuer, Visionen von - Zimmer brennt",
  "Wahnideen - Flucht vor eingebildeten Dingen, ist auf der",
  "Wahnideen - Freude - nichts könne ihr irgendwelche Freude bereiten",
  "Wahnideen - Freund - nie gesehen, er habe seine Freunde - Gehen, nach dem",
  "Wahnideen - Friedhof, besucht einen - tanzt auf einem Friedhof",
  "Wahnideen - Füße berühren kaum den Boden - getrennt vom Körper, seien",
  "Wahnideen - Geflügel, sieht",
  "Wahnideen - gefressen, von Tieren - wird gefressen",
  "Wahnideen - Gegenstände, in Bezug auf - Flucht vor Gegenständen",
  "Wahnideen - Gesichter, sieht - verlängerte",
  "Wahnideen - Gestalten - sieht Gestalten - Ecken kommen, aus den",
  "Wahnideen - Glieder - keine Gliedmaßen, sie habe",
  "Wahnideen - Gott - er sei Gott, dann wieder der Teufel",
  "Wahnideen - greift - Personen, eingebildeten Erscheinungen, nach",
  "Wahnideen - Hand, etwas nimmt ihre - getrennt, sei vom Körper",
  "Wahnideen - Haus sei voller Leute - umzingelt, sei",
  "Wahnideen - Henker (Scharfrichter), Visionen von einem",
  "Wahnideen - Hören - Manie, bei",
  "Wahnideen - Hunde - beißen, würden ihm in die Brust",
  "Wahnideen - Hunde - bellt sie an, um sich verständlich zu machen, andere Menschen seien Hunde, er",
  "Wahnideen - Hunde - sieht - greifen ihn an",
  "Wahnideen - Hut sei eine Hose, die er anzuziehen versucht",
  "Wahnideen - Kaninchen, sieht",
  "Wahnideen - klein - Dinge erscheinen klein, Dinge - er sei sehr groß, und",
  "Wahnideen - Kopf - Krankheit werde am Kopf ausbrechen, die",
  "Wahnideen - kriechender Dinge, voller",
  "Wahnideen - Liegen - kreuzweise",
  "Wahnideen - Macht - Krankheiten, er habe Macht über alle",
  "Wahnideen - Menschen, Personen - sieht Menschen - packen, eine Anzahl Fremder versucht sie zu, und",
  "Wahnideen - neu, alles sei",
  "Wahnideen - schön, wunderschön - sie sei schön und wünscht es sich",
  "Wahnideen - Seite - lebendig auf der einen und begraben auf der anderen Seite, er sei",
  "Wahnideen - Sprechen - leblose Gegenstände mit Namen an, bemerkt jedoch die Umstehenden nicht, er spricht",
  "Wahnideen - Statue - bewundert zu werden, nimmt die Haltung einer Statue ein, um",
  "Wahnideen - Stellmacher zu sein, ein",
  "Wahnideen - Stellung nicht geeignet, sie sei für ihre",
  "Wahnideen - sucht - etwas, er sucht",
  "Wahnideen - Tiere - Ecken, kommen plötzlich aus den",
  "Wahnideen - Tiere - springen - plötzlich aus dem Boden heraus",
  "Wahnideen - Tiere - springen auf",
  "Wahnideen - Ungeziefer und Wanzen, von",
  "Wahnideen - untröstlich zu sein, nicht getröstet werden zu können",
  "Wahnideen - vernachlässigt - sie würde vernachlässigt - Ehemann, von ihrem",
  "Wahnideen - Visionen, hat - Schlaf, im - ruhelos",
  "Wahnideen - Visionen, hat - schreckliche - neben ihm",
  "Wahnideen - Wildnis zu befinden, sich in der",
  "Wahnideen - wunderbar - sein oder sein zu wollen, wunderbar zu",
  "Weinen - Dunkelheit, in der",
  "Weinen - nachts - weint die ganze Nacht, lacht den ganzen Tag",
  "Weinen - unwillkürlich - Essig amel.",
  "Weinen - Wimmern, Winseln - Menses, nach",
  "Wirft Gegenstände weg - Fenster, aus dem",
  "Zeigt auf Dinge, um seine Wünsche anzuzeigen (non-verbal)",
  "Zorn - gekitzelt oder gezwickt wird, wenn er",
  "Zorn - getreten oder gestoßen wird, wenn er",
  "Zorn - Kinder, bei - hochgehoben, wenn"
];

// Gruppen: Rubrik-Kapitel (erstes Wort) -> Themenast
const GRUPPEN = [
  { id: "wildnis", titel: "Wahnideen: Wildnis, Alleinsein, Verlassenheit", offen: true, text: "Die Hauptwahnidee der Wildnis und die Vorstellung, allein, vernachlässigt oder untröstlich zu sein.", kapitel: [], test: /^Wahnideen - .*(Wildnis|allein|vernachlässigt|untröstlich|Freund|Freude)/ },
  { id: "tiere", titel: "Wahnideen: Tiere, Verfolgung und Bedrohung", text: "Tiere aus den Ecken, Hunde, Gefressenwerden, Mord, Henker, Feuer.", kapitel: [], test: /^Wahnideen - .*(Tiere|Hunde|Geflügel|Kaninchen|gefressen|ermord|Ungeziefer|Henker|packen|Haus sei voller|Feuer|Fallen|Ecken|durchgeschnitten)/ },
  { id: "wahn", titel: "Wahnideen: Visionen, Körper und Selbstbild", text: "Visionen, Gestalten, getrennte Glieder, Größe, Macht, Gott und Teufel.", kapitel: ["Wahnideen"] },
  { id: "delirium", titel: "Delirium, Trance und Wahnsinn", text: "Delirien, Krämpfe, Trance, Verwirrung, Manie und Raserei.", kapitel: ["Delirium", "Geisteskrankheit", "Manie", "Raserei", "Trance", "Verwirrung", "Verzaubert", "Bewusstlosigkeit", "Stupor", "Verrücktes", "Tollwut", "Entfernungen"] },
  { id: "furcht", titel: "Furcht, Schreck und Dunkelheit", text: "Furcht vor Hunden, Tunneln, Gefressenwerden, Alleinsein und Dunkelheit.", kapitel: ["Furcht", "Angst", "Erschreckt", "Fliehen", "Verblüfft", "Verhaltensstörungen", "Angesehen", "Untröstlich", "Trost", "Verlangen", "Gesellschaft", "Traurigkeit"] },
  { id: "gesten", titel: "Gesten, Greifen und Bewegung", text: "Greifen nach Flammen und Fliegen, Kriechen, Taschenfüllen, Springen.", kapitel: ["Gesten", "Fliegen", "Jagen", "Füllt", "Taschen", "Kriecht", "Krallt", "Küssen", "Blicken", "Rollt", "Springen", "Nackt", "Wirft", "Zeigt", "Lesen", "Ruhelosigkeit"] },
  { id: "lachen", titel: "Lachen, Weinen und Singen", text: "Der schnelle Wechsel von Lachen, Weinen, Fröhlichkeit und Gleichgültigkeit.", kapitel: ["Lachen", "Froh", "Weinen", "Singen", "Seufzen", "Stöhnen", "Heftiges", "Mürrisch", "Milde", "Gleichgültigkeit", "Schüchternheit"] },
  { id: "sprechen", titel: "Sprechen, Beten und Schreien", text: "Aphasie, Beschimpfen, nächtliche Frömmigkeit, Schreien, Sprechen mit Gegenständen.", kapitel: ["Sprechen", "Sprache", "Aphasie", "Beschimpfen", "Beten", "Frömmigkeit", "Religiöse", "Schreien", "Schreiben", "Erkennt", "Fehler", "Aktivität", "Sexualität"] },
  { id: "zorn", titel: "Zorn, Eifersucht und Streit", text: "Zorn bei Berührung, Eifersucht, Tadel, Streitsüchtigkeit.", kapitel: ["Zorn", "Streitsüchtig", "Eifersucht", "Tadel", "Schlagen", "Suizidneigung", "Tod", "Erregung"] },
  { id: "weiteres", titel: "Weiteres", text: "Rubriken, die in keinen der Äste passen.", kapitel: [] },
];

const HAUPT = ["Wahnideen - allein zu sein - Wildnis, allein in der", "Wahnideen - Wildnis zu befinden, sich in der"];

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

export function stramoniumMindmapPage() {
  const col = "#124fcc";
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
      ${pageHeader("mindmap-stramonium")}
      <div class="page-content">
        <button class="ghost-link" data-route="wahnideen-nicht-reale-vorstellungen" style="margin-bottom:1.2rem;">← Zum Wissensartikel »Nicht reale Vorstellungen«</button>
        <p class="eyebrow">Wissen · Single-Rubriken · Typ 5</p>
        <h1 class="section-title">Stramonium: Mindmap der Single-Rubriken</h1>
        <p class="lead-small">Single-Rubriken sind Rubriken, in denen nur ein einziges Mittel steht. Hier sind alle Single-Rubriken von Stramonium, dem Stechapfel, den die Enneagramm-Homöopathie dieses Kompasses dem Typ 5 zuordnet, nach Themen geordnet.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Typ 5 · Stramonium · Hauptwahnidee</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Die Wildnis: allein in der Wildnis zu sein</div>
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
