const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single-Rubriken von Belladonna (Typ 7) aus »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
const RUBRIKEN = [
  "Angst - abwechselnd mit - Manie",
  "Angst - abwechselnd mit - Raserei",
  "Angst - Druck, auf der Brust, mit - Brust, in der",
  "Angst - wegfliegen, als müsse sie, findet nirgendwo Frieden",
  "Angst, qualvolle - mittags",
  "Angst, qualvolle - Weinen, mit",
  "Anständig, manierlich, sittlich (S)",
  "Aufmerksamkeit - verlangt exzessiv (= übertrieben, maßlos) nach (S)",
  "Aufmerksamkeit - verlangt nach besonderer (S)",
  "Beißen, Verlangen zu - nachts",
  "Beißen, Verlangen zu - alles",
  "Beißen, Verlangen zu - Kindern, bei",
  "Benommenheit, Betäubung - Kopf, durch Blutandrang zum",
  "Beschwerden durch - Liebe, enttäuschte - Erregung, mit allgemeiner",
  "Besitzergreifend (S)",
  "Beten - getötet zu werden",
  "Bewusstlosigkeit - Magens, mit Beschwerden des",
  "Delirium - abwechselnd mit - Jammern, Lamentieren",
  "Delirium - Arme - fuchtelt mit den Armen herum",
  "Delirium - Arme gestreckt - wirft die Arme umher",
  "Delirium - Gesicht - livid",
  "Delirium - Gesicht, mit verzerrtem - livid",
  "Delirium - Grimassen, mit",
  "Delirium - Hunden, spricht von",
  "Delirium - Karotiden, mit pulsierenden",
  "Delirium - klettert auf Mauern im Delirium",
  "Delirium - Lippen, als würde er sprechen, bewegt die",
  "Delirium - Mund, steckt Steine in den - bewegt die Lippen wie beim Sprechen",
  "Delirium - Schrecken, mit einem Ausdruck von",
  "Delirium - übertriebener, überzogener Sprache, mit",
  "Delirium - Urinieren - Topf vorbei, uriniert am",
  "Delirium - urinieren, versucht auf den Boden zu - neben das Becken",
  "Delirium - Zähneknirschen, mit",
  "Empfindlich, überempfindlich - abwechselnd mit - Gleichgültigkeit",
  "Empfindlich, überempfindlich - Geräusche, gegen - Stimmen, gegen - Stimme, die eigene",
  "Erregung, erregbar - Essen - amel.",
  "Essen - Löffel essen, kann nicht mit dem",
  "Fliehen, versucht zu - Straße, auf die - gestikulieren und tanzen in Hemden, sie",
  "Frieden - bekommt, nach Schlaf bekommt er (S)",
  "Froh - abwechselnd mit - Tanzen",
  "Furcht - eingebildeten - Tieren, vor",
  "Furcht - Ersticken, vor dem - schlucken, mit Verlangen zu",
  "Furcht - Erwachen, beim - unter dem Bett, vor etwas",
  "Furcht - Galgen, vor",
  "Furcht - Näherkommen, Annäherung von, vor - anderen, von - Auffahren, Aufschrecken, mit",
  "Furcht - nebenstehenden Personen, vor",
  "Furcht - springt - Berührung, bei",
  "Furcht - Tieren, vor - schwarz",
  "Furcht - Umstehenden, vor den",
  "Furcht - verwesen, sein Körper werde",
  "Furcht - Wölfen, vor",
  "Gedanken - Schwinden der Gedanken - Kopfschmerz, bei",
  "Gedanken - wandernd - nachts",
  "Gefühl - mal geht es gut, mal ist man krank (S)",
  "Gefühl - gut - es geht ihm gut (S)",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Erkältung, nach",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Gestikulieren, mit",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Tanzen, mit - Ausziehen, und sich",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - wirft mit Steinen",
  "Geisteskrankheit, Verrücktheit, Wahnsinn - Zunge - Herausstrecken der Zunge und Schnalzen, unter Verzerrung des Gesichtes, mit",
  "Gemütssymptome - Mondphasen agg.",
  "Gesten, Gebärden, macht - greift, nach etwas - zupft an der Bettwäsche - suchen, als würde er etwas Verlorenes",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - gießen, als würde er etwas von einer Hand in die andere",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - hastig",
  "Gesten, Gebärden, macht - Hände, unwillkürliche Bewegungen der - trinken, als würde er",
  "Gesten, Gebärden, macht - konvulsivisch - Getränken, beim Anblick von",
  "Gesten, Gebärden, macht - zieht die Umstehenden an den Haaren",
  "Gleichgültigkeit, Teilnahmslosigkeit, Apathie - abwechselnd mit - Empfindlichkeit",
  "Grimassen, schneidet - Sprechen, beim",
  "Heftig, vehement - krank, wenn",
  "Impulse, Triebe, krankhafte - laufen, zu - Schreck, nach",
  "Jammern, Lamentieren - abwechselnd mit - Delirium",
  "Koma - Hals, mit Rasseln im",
  "Koma - Haut - Hitze der Haut, mit",
  "Kostet alles",
  "Krächzt - Schlaf, im",
  "Lächeln - Konvulsionen (Krämpfen), vor",
  "Lächeln - sardonisch",
  "Lachen - ärgerlich",
  "Lachen - grinsend",
  "Lachen - lästig",
  "Lachen - Traum, im",
  "Läuft schnell umher - Gegenstände, läuft gegen",
  "Läuft schnell umher - Hemd, im",
  "Lebensüberdruss - Gehen im Freien, beim",
  "Manie - abwechselnd mit - Abscheu",
  "Manie - kratzt sich selbst",
  "Manie - springt über Stühle und Tische",
  "Manie - spuckt auf die Umstehenden und beißt sie",
  "Manie - Augen - offenen, starren Augen, mit",
  "Manie - Augen - unbeweglichen Augen, mit",
  "Manierlich, sittlich, anständig (S)",
  "Moralischem Empfinden, Mangel an - Weinen, mit",
  "Murmeln - verwirrt",
  "Mürrisch - abwechselnd mit - Weinen",
  "Musik - Abneigung gegen - Kindern, bei - Säuglingen, bei - gestillt wird, wenn das Kind",
  "Phantasien, Einbildungen - übertrieben, hochfliegend, Luftschlösser - Geschäft, vom",
  "Quaken - Schlaf, im",
  "Qualvolle Angst - mittags",
  "Qualvolle Angst - Weinen, mit",
  "Raserei, Tobsucht, Wut - abwechselnd mit - Angst",
  "Raserei, Tobsucht, Wut - abwechselnd mit - Furcht",
  "Raserei, Tobsucht, Wut - abwechselnd mit - Tod - Verlangen zu sterben",
  "Raserei, Tobsucht, Wut - Entbindung, während der",
  "Raserei, Tobsucht, Wut - erkennt seine Verwandten nicht",
  "Raserei, Tobsucht, Wut - Medikamentes, durch gewaltsame Verabreichung des",
  "Raserei, Tobsucht, Wut - starrem Blick, mit",
  "Raserei, Tobsucht, Wut - Umdrehen, im Bett, mit",
  "Raserei, Tobsucht, Wut - zieht die Umstehenden an den Haaren",
  "Ruhe haben, will seine - Ruhe, aber keine Stille/Frieden, verlangt nach (S)",
  "Ruhelosigkeit - Getränken, beim Anblick von",
  "Ruhelosigkeit - Kindern, bei - Gehirn größtenteils entwickelt",
  "Schlagen - sich, schlägt - Abdomen, sein",
  "Schlagen - sich, schlägt - Gesicht, sein",
  "Schreien - Kindern, bei - plötzlich - beugt sich zurück und schreit (Erscheinungsbild des Opisthotonus)",
  "Schreien - Zittern, mit",
  "Schüchternheit, Zaghaftigkeit - Zunge, mit Hervorstrecken und Schnalzen der",
  "Selbstrespekt (S)",
  "Seufzen - abwechselnd mit Tanzen und Springen",
  "Singen - abwechselnd mit - Stöhnen",
  "Sittlich, manierlich, anständig (S)",
  "Spielen - Verlangen zu spielen - Verstecken zu spielen, Versteckspiel",
  "Sprache - delirös - Schlaf - im",
  "Sprache - unzusammenhängend - abends",
  "Sprechen - Abneigung gegen Reden, wünscht still zu sein, wortkarg - Geschwätzigkeit, nach",
  "Sprechen - irrational - Schreck, durch",
  "Sprechen - verwirrt - Schreck, durch",
  "Springen - abwechselnd mit - Seufzen",
  "Springen - Bett, aus dem - kehrt ständig ins Bett zurück, und",
  "Springen - Kindern, bei - Stühle, Tische und Ofen, auf",
  "Stöhnen - abwechselnd mit - Singen, Herumhüpfen",
  "Stöhnen - abwechselnd mit - Tanzen",
  "Stumpfheit - abwechselnd mit - Trübsichtigkeit",
  "Stöhnen - Atemzug, bei jedem",
  "Stöhnen - Erysipel, bei",
  "Stöhnen - Gehirnerkrankungen, bei",
  "Stumpfheit - Lachen, mit stillem",
  "Suizidneigung, Neigung zum Selbstmord - Gehen im Freien, beim",
  "Suizidneigung, Neigung zum Selbstmord - Manie, mit - Bein aus dem Fenster, um sich umzubringen, ist schon mit einem",
  "Tanzen - abwechselnd mit - Fröhlichkeit",
  "Tanzen - abwechselnd mit - Seufzen",
  "Tanzen - abwechselnd mit - Stöhnen",
  "Tanzen - abwechselnd mit - Weinen",
  "Tod - wünscht sich den Tod, möchte sterben - abwechselnd mit - Raserei",
  "Tod - wünscht sich den Tod, möchte sterben - Gehen im Freien, beim",
  "Tod - wünscht sich den Tod, möchte sterben - qualvoller Angst, aus",
  "Tod - wünscht sich den Tod, möchte sterben - Raserei, zwischen den Anfällen von",
  "Tollwut, Hydrophobie - Berührung erneuert den Anfall",
  "Töten, Impuls oder Verlangen zu - Auto, durch Überfahren von Menschen mit dem",
  "Übertreiben - Probleme, übertreibt seine - Aufmerksamkeit zu bekommen, um maximale (S)",
  "Vergnügen, vergnügtes Gefühl - lasziven, wollüstigen (sexuellen) Gedanken, nur an",
  "Verlangen - Schlaf - Frieden, um Frieden zu finden (S)",
  "Verrücktes Gefühl - Kopfschmerz, durch",
  "Verstecken - versteckt das Simulieren (= das Vortäuschen der Krankheit) (S)",
  "Versteckt Dinge (= Gegenstände)",
  "Versteckt Dinge (= Gegenstände) - Aufmerksamkeit, versteckt Dinge, um den hohen Grad an Aufmerksamkeit zu erhalten (S)",
  "Versteckt Dinge (= Gegenstände) - Milde umschaltet, versteckt Dinge, indem er auf Milde umschaltet (S)",
  "Vulgär - nicht (S)",
  "Wahnideen - angenehme Wahnideen - morgens - Schlaf, nach dem",
  "Wahnideen - arm, aber reich (S)",
  "Wahnideen - Bäume - Menschen in fantastischen Kostümen zu sein, Bäume scheinen - nachmittags - Fahren, beim",
  "Wahnideen - berühren - alles berühren, er würde",
  "Wahnideen - Bett - jemand - wegzunehmen, jemand würde versuchen, ihm die Bettdecken",
  "Wahnideen - Bett - schwimmt",
  "Wahnideen - Bullen, von",
  "Wahnideen - durchsichtig - Kopf und Nase seien",
  "Wahnideen - Empfindungen falsch dar, stellt seine",
  "Wahnideen - erstochen - Vorübergehenden erstochen, er habe auf der Straße einen",
  "Wahnideen - fahren, als würde er - Ochsen zu reiten, auf einem",
  "Wahnideen - Fallen - er würde - tief",
  "Wahnideen - Feuer - Zuhause brennt, sein weit entferntes",
  "Wahnideen - feuerrot",
  "Wahnideen - feurige",
  "Wahnideen - Fledermäusen, von",
  "Wahnideen - Fremde - haschen nach ihr",
  "Wahnideen - Fremde - Zimmer zu sein, scheinen im - greifen, die nach ihr",
  "Wahnideen - Galgen mit Furcht, Visionen von",
  "Wahnideen - gefangengenommen werden, er würde",
  "Wahnideen - Gegenstände, leuchtend gefärbte - glitzernde",
  "Wahnideen - Geräusche, hört - Bett, unter dem",
  "Wahnideen - Gespenster, Geister, Gestalten - brennende, in Flammen stehende",
  "Wahnideen - gesund, er sei - abwechselnd mit dem Gefühl von extremer Krankheit (S)",
  "Wahnideen - Gewehr, benutzt einen Stock als",
  "Wahnideen - Gurken auf dem Bett, sieht",
  "Wahnideen - Insekten, sieht - glänzende",
  "Wahnideen - Jongleur, er sei ein",
  "Wahnideen - Kakerlaken, das Zimmer wimmelt von",
  "Wahnideen - Kopf - durchsichtig und braun gefleckt",
  "Wahnideen - Kopf - Freundes aus einer Flasche ragen, sieht den Kopf seines",
  "Wahnideen - Körper - braungefleckt, sei",
  "Wahnideen - Körper - zusammensinken, der Körper werde zwischen den Oberschenkeln",
  "Wahnideen - Krankheit, frei von Krankheit, er ist (S)",
  "Wahnideen - Magier, Zauberer, er sei ein",
  "Wahnideen - mal geht es gut, mal ist man krank (S)",
  "Wahnideen - Masken - sieht - lachende Masken",
  "Wahnideen - Masken - sieht - lachende Masken - nachts - Bett, im",
  "Wahnideen - Nase - durchsichtige Nase, er habe eine",
  "Wahnideen - Pendel - Schwindel sei wie das Schwingen eines Pendels",
  "Wahnideen - Polizist - Arzt sei ein Polizist, der",
  "Wahnideen - reiten, auf einem Ochsen zu",
  "Wahnideen - Riesen, Giganten, sieht",
  "Wahnideen - sammeln, versucht Gegenstände von Bildern und Wänden zu",
  "Wahnideen - Schildkröten im Zimmer, sieht (große)",
  "Wahnideen - Schlangen - karmesinrote Schlange klammert sich an seinen Hals",
  "Wahnideen - schweben - Boot zu schwimmen, in einem",
  "Wahnideen - schweben - Luft, in der - abends",
  "Wahnideen - Sprechen mit - toten Menschen, mit - Friedhof, auf dem",
  "Wahnideen - Sprechen - Toten, mit - Schwester, mit seiner - Kirchhof, auf dem",
  "Wahnideen - Stieren, von",
  "Wahnideen - Tiere - dunkel gefärbt",
  "Wahnideen - Tiere - Feuer, im",
  "Wahnideen - Tiere - kriechen - Hemd herum, im",
  "Wahnideen - Tiere - Personen seien Tiere - unreine Tiere",
  "Wahnideen - Tiere - wilde Tiere mit Hörnern und buschigen Köpfen",
  "Wahnideen - Tieren, von - Personen sind Tiere - unsaubere",
  "Wahnideen - Tieren, von - schwarze Tiere an Wänden und auf Möbeln, sieht",
  "Wahnideen - tot - Leiche - große gelbe Leiche würde versuchen, das Bett mit ihm zu teilen - hinausgeworfen, und er würde sogleich",
  "Wahnideen - träumen, glaubt im wachen Zustand zu",
  "Wahnideen - Trinken - würde trinken, er",
  "Wahnideen - Verlangen - das Verlangen sei beschränkt auf eine kleine Aufmerksamkeit (S)",
  "Wahnideen - Visionen, hat - verstecken, möchte sich",
  "Wahnideen - Zimmer - Menschen, sieht - eintreten und herausgehen und sie mitnehmen wollen, das Zimmer sei voller fremder Männer, die",
  "Wahnideen - Zunge - ausreißen, jemand würde ihm die Zunge",
  "Wahnideen - Zunge, ist aus Holz - reißt die Zunge aus",
  "Weinen - abwechselnd mit - Ärger",
  "Weinen - Konvulsionen (Krämpfen) - durch",
  "Weinen - Schluckauf, durch",
  "Weinen - Wimmern, Winseln - Kopfes, mit Beschwerden des",
  "Zähne - gezogen bekommen, möchte einen Zahn",
  "Ziehen - Zähnen, an den - sich",
  "Zorn - geringer Zorn oder nur für einen kurzen Augenblick (S)"
];

// Gruppen: Rubrik-Kapitel (erstes Wort) -> Themenast
const GRUPPEN = [
  { id: "fang", titel: "Wahnideen: Gefangen, Verfolgt, Bedroht", offen: true, text: "Die Hauptwahnidee des Gefangenwerdens, Fremde, Galgen, Erstochenes, Polizist.", kapitel: [], test: /^Wahnideen - .*(gefangengenommen|Fremde|Galgen|erstochen|Polizist|Zunge|Zimmer - Menschen|Gespenster|Bett - jemand|sammeln)/ },
  { id: "tiere", titel: "Wahnideen: Tiere, Visionen und Gestalten", text: "Tiere, Riesen, Masken, Tote, Feuer und leuchtende Dinge.", kapitel: [], test: /^Wahnideen - .*(Tier|Bullen|Fledermäuse|Kakerlaken|Insekten|Schildkröten|Schlangen|Stieren|Riesen|Masken|tot|Sprechen|Feuer|feuer|glitzernde|Gurken|Ochsen|Gegenstände)/ },
  { id: "wahn", titel: "Wahnideen: Körper, Gesundheit und Selbstbild", text: "Durchsichtiger Kopf, Magier, Jongleur, abwechselnd gesund und krank, Schweben.", kapitel: ["Wahnideen"] },
  { id: "aufmerksam", titel: "Aufmerksamkeit, Verstecken und Anstand", text: "Verlangen nach Aufmerksamkeit, Verstecken, Übertreiben, Anstand und Selbstrespekt.", kapitel: ["Aufmerksamkeit", "Anständig", "Besitzergreifend", "Versteckt", "Verstecken", "Übertreiben", "Manierlich", "Sittlich", "Selbstrespekt", "Vulgär", "Gefühl", "Frieden", "Verlangen", "Ruhe", "Moralischem", "Kostet"] },
  { id: "delirium", titel: "Delirium, Manie und Wahnsinn", text: "Delirien, Manie mit Beißen und Spucken, Wahnsinn mit Tanzen und Zunge.", kapitel: ["Delirium", "Manie", "Geisteskrankheit", "Bewusstlosigkeit", "Koma", "Benommenheit", "Gemütssymptome", "Impulse", "Töten", "Tollwut"] },
  { id: "zorn", titel: "Raserei, Zorn und Furcht", text: "Raserei im Wechsel mit Angst, Furcht vor Tieren, Galgen und Verwesung.", kapitel: ["Raserei", "Zorn", "Angst", "Furcht", "Qualvolle", "Beißen", "Schlagen", "Beten", "Fliehen"] },
  { id: "tanz", titel: "Tanzen, Springen und Lachen", text: "Tanzen, Springen, Singen, Stöhnen und Lachen im schnellen Wechsel.", kapitel: ["Tanzen", "Springen", "Singen", "Seufzen", "Stöhnen", "Lachen", "Lächeln", "Läuft", "Froh", "Spielen", "Jammern", "Krächzt", "Quaken", "Schreien", "Weinen", "Mürrisch", "Stumpfheit"] },
  { id: "sprechen", titel: "Sprache, Gesten und Empfindlichkeit", text: "Verwirrte Sprache, Grimassen, hastige Gesten, Überempfindlichkeit gegen Geräusche.", kapitel: ["Sprache", "Sprechen", "Murmeln", "Grimassen", "Gesten", "Empfindlich", "Gleichgültigkeit", "Gedanken", "Erregung", "Essen", "Musik", "Ruhelosigkeit", "Phantasien", "Suizidneigung", "Tod", "Lebensüberdruss", "Verrücktes", "Vergnügen", "Zähne", "Ziehen", "Schüchternheit"] },
  { id: "weiteres", titel: "Weiteres", text: "Rubriken, die in keinen der Äste passen.", kapitel: [] },
];

const HAUPT = ["Wahnideen - gefangengenommen werden, er würde"];

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

export function belladonnaMindmapPage() {
  const col = "#d4a800";
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
      ${pageHeader("mindmap-belladonna")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← Alle Mindmaps der Single-Rubriken</button>
        <p class="eyebrow">Wissen · Single-Rubriken · Typ 7</p>
        <h1 class="section-title">Belladonna: Mindmap der Single-Rubriken</h1>
        <p class="lead-small">Single-Rubriken sind Rubriken, in denen nur ein einziges Mittel steht. Hier sind alle Single-Rubriken von Belladonna, der Tollkirsche, die die Enneagramm-Homöopathie dieses Kompasses dem Typ 7 zuordnet, nach Themen geordnet. Mit (S) gekennzeichnete Rubriken stammen von Dr. M. L. Sehgal.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Typ 7 · Belladonna · Hauptwahnidee</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Das Gefangenwerden: er würde gefangengenommen werden</div>
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
