const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const IMG = "https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/kino-erwachen/kino-erwachen.jpg";
const FARBEN = ["#c0392b", "#c9a84c", "#4f86a8", "#8a6aa8", "#607468"];
const TYP_FARBEN = ["#a2483a", "#c47f6b", "#d9a441", "#8a6aa8", "#4f86a8", "#7a8f9e", "#c9a84c", "#b5542f", "#8aa06a"];

// Vier Filmkacheln plus Platons Höhle als Urahn. Teile: h + p | l (Liste) | u (Übung)
const FILME = [
  { titel: "Matrix (1999): Das Betriebssystem", sub: "Die rote Pille und der Löffel, den es nicht gibt", intro: "Ein Büroangestellter mit Doppelleben, ein Kaninchen, dem man folgen soll, und zwei Pillen auf einem Tisch: Die Wachowskis haben mit ›Matrix‹ eine Szene geschaffen, die fast jeder kennt. Die blaue Pille bedeutet: weiterschlafen, weiterglauben, was zu glauben bequem ist. Die rote bedeutet: sehen, wie es tatsächlich aussieht. Neo, gespielt von Keanu Reeves, nimmt die rote.", teile: [
    { h: "Was der Film erzählt", p: "Die Welt, in der Neo lebt, ist eine Simulation, die Maschinen den schlafenden Menschen ins Gehirn einspielen, während deren Körper in Nährlösung liegen. Entscheidend ist nicht die Technik, sondern der Moment, in dem Neo begreift: Die Wände, die Schwerkraft, sogar die eigene Angst folgen Regeln, die jemand geschrieben hat. Wer die Regeln durchschaut, kann sie biegen." },
    { h: "Der Löffeljunge", p: "Im Wartezimmer des Orakels sitzt ein Kind und verbiegt Löffel allein mit dem Blick. Neo fragt, wie das geht. Die Antwort ist so schlicht, dass sie leicht überhört wird: Man darf nicht versuchen, den Löffel zu verbiegen. Man muss nur erkennen, dass es keinen Löffel gibt. Dann zeigt sich, dass nicht der Löffel sich biegt, sondern man selbst. Das Bild lässt sich auf jede innere Wand übertragen: Solange sie für unumstößlich gehalten wird, rührt sie sich nicht." },
    { h: "Das Enneagramm-Echo", p: "Die Fixierung funktioniert wie dieses Betriebssystem. Sie läuft im Hintergrund, filtert die Wahrnehmung und liefert Antworten, bevor eine Frage zu Ende gedacht ist. Dass es Keanu Reeves war, der Neo spielte, hat eine feine Ironie: In der App ist er als <a href=\"#beruehmte-keanu-reeves\">sexuelle Neun mit Einserflügel (SX9w1)</a> porträtiert, also als jener Typ, der besonders gut darin ist, sich zurückzunehmen und mitzufließen. Neo muss das Gegenteil lernen: aufwachen und präsent werden." },
    { h: "Zum Mitnehmen", u: ["Beim nächsten Ärger fragen: Welche Regel wurde hier verletzt, und wer hat sie geschrieben?", "Einen Satz suchen, der mit ›Man muss doch …‹ beginnt, und prüfen, ob es einen Löffel gibt."] }] },
  { titel: "Avatar (2009): Der Pilot in der Kapsel", sub: "Wer steuert, und wer vergisst, dass er steuert?", intro: "James Camerons Film spielt auf dem Mond Pandora, aber seine eigentliche Geschichte spielt in einem kleinen, unscheinbaren Raum: dem Link-Zimmer. Dort liegt Jake Sully, ein querschnittsgelähmter Ex-Marine, in einer Kapsel, während sein Bewusstsein einen drei Meter großen, blauen, beweglichen Körper der Na'vi steuert.", teile: [
    { h: "Was der Film erzählt", p: "Zuerst ist der Avatar ein Werkzeug für eine Mission. Dann gewöhnt sich Jake an die Kraft, die Beweglichkeit, die Zugehörigkeit zu einem Volk. Er beginnt, sich mit dem Körper zu verwechseln. Am Ende des Films wird sein Bewusstsein dauerhaft in den Avatar übertragen. Die Szene wird meist als Happy End gelesen, kann aber auch als Frage stehen bleiben: Was bleibt von dem, der in der Kapsel lag?" },
    { h: "Ein Wort mit Geschichte", p: "›Avatar‹ stammt aus dem Sanskrit (avatāra, ›Herabkunft‹) und bezeichnet im Hinduismus das Herabsteigen einer Gottheit in eine Gestalt. Das Bild vom Bewusstsein, das ein Fahrzeug steuert, ist also uralt. Es findet sich im Advaita Vedanta ebenso wie in den Schriften, die von Ramana Maharshi überliefert sind, den die App als <a href=\"#beruehmte-ramana-maharshi\">sozialen Typ 9 mit Einserflügel (SO9w1)</a> porträtiert." },
    { h: "Ich sehe dich", p: "Die Na'vi begrüßen einander mit ›Ich sehe dich‹. Gemeint ist: nicht nur Gestalt, Rolle und Verhalten, sondern das, was dahinter schaut. Im Enneagramm wäre das der Moment, in dem jemand das Muster oder die Maske eines anderen erkennt und trotzdem den Menschen dahinter sieht." },
    { h: "Das Enneagramm-Echo", p: "Die Fixierung ist der Avatar. Sie kann kräftig und beeindruckend sein, aber sie wird gesteuert. Gefährlich wird es erst, wenn der Pilot vergisst, dass er in einer Kapsel liegt. Dann heißt es nicht mehr ›Ich habe ein Einser-Muster‹, sondern ›Ich bin eben so‹." },
    { h: "Zum Mitnehmen", u: ["Bei einer Reaktion kurz innerlich zurücktreten: Wer hat gerade gesprochen, die Person oder das Programm?", "Einmal am Tag bewusst feststellen: Ich steuere diesen Körper, aber ich bin nicht nur dieser Körper."] }] },
  { titel: "Inception (2010): Die Schachtelung der Wirklichkeiten", sub: "Ein Kreisel, der wackelt oder nicht", intro: "In Christopher Nolans Film dringen Spezialisten in die Träume anderer ein und stapeln Traum auf Traum. Je tiefer sie sinken, desto langsamer läuft die Zeit und desto schwerer fällt die Frage, auf welcher Ebene man gerade ist. Wer zu tief sinkt, droht sich ganz zu verlieren.", teile: [
    { h: "Das Totem", p: "Damit sie wissen, ob sie träumen oder wachen, trägt jeder einen kleinen Gegenstand mit sich, dessen Eigenschaften nur er kennt: ein Kreisel, ein gezinkter Würfel, eine Schachfigur. Der Kreisel von Cobb, gespielt von <a href=\"#beruehmte-leonardo-dicaprio\">Leonardo DiCaprio (SX1w2)</a>, dreht sich im Traum endlos weiter, in der Wirklichkeit fällt er irgendwann um. Der berühmte Schlussmoment des Films lässt offen, was der Kreisel tut." },
    { h: "Die eingepflanzte Idee", p: "Im Film heißt das Verfahren Inception: das Einpflanzen einer Idee so tief im Unbewussten, dass die Person sie für ihren eigenen Einfall hält. Genau so funktionieren frühe Prägungen: Ein Satz aus der Kindheit (›Sei brav‹, ›Streng dich an‹, ›Du bist zu viel‹) wird nicht als fremde Idee erlebt, sondern als eigene Wahrheit." },
    { h: "Das Enneagramm-Echo", p: "Das Enneagramm taugt als Totem. Wer beobachtet, wie sein Typ reflexhaft zu den gewohnten Mitteln greift (der Sechser zur Sorge, der Dreier zur Bestätigung, der Neuner zum Rückzug), hat ein Signal in der Hand: Das hier ist ein Zustand, kein Schicksal. Es ist der Kreisel, der kurz wackelt." },
    { h: "Zum Mitnehmen", u: ["Ein kleines Totem festlegen, etwa einen Ring oder eine Münze, und bei jeder Berührung innerlich fragen: Träume ich gerade ein Muster?", "Einen Satz aus der Kindheit aufschreiben und prüfen, ob er wirklich der eigene ist."] }] },
  { titel: "The Game (1997): Die Schocktherapie", sub: "Wenn das Leben das Drehbuch übernimmt", intro: "Achtung, Spoiler. David Finchers Thriller erzählt von Nicholas Van Orton, einem reichen, kontrollierten, einsamen Geschäftsmann, dem sein Bruder zum Geburtstag ein ›Spiel‹ schenkt. Es beginnt harmlos und gerät außer Kontrolle: Konten werden leer, Verbündete entpuppen sich als Feinde, Nicholas verliert Status, Geld und zuletzt jede Sicherheit.", teile: [
    { h: "Was der Film erzählt", p: "Am Ende stellt sich heraus, dass alles inszeniert war, um seine Schutzhaltung aufzubrechen. Nicholas war, so die Logik des Films, so fest in seiner Rolle gefangen, dass nur ein Zusammenbruch der Kontrolle ihn erreichen konnte. Der Darsteller Michael Douglas ist in der App als <a href=\"#beruehmte-michael-douglas\">sozialer Typ 1 mit Neunerflügel (SO1w9)</a> porträtiert. Die Figur selbst ordnen wir bewusst keinem Typ zu: Ein Drehbuch ist kein Mensch. Der Darsteller war allerdings gut gewählt: Soziale Einser mit Neunerflügel kontrollieren sich und ihre Umwelt besonders stark, und genau dieser Effekt, die Kontrolle, die Schritt für Schritt aus den Händen gleitet, sollte im Film sichtbar werden. In diesem Sinn wurde die Rolle perfekt besetzt." },
    { h: "Die Frage dahinter", p: "Muss das Erwachen eine Katastrophe sein? Der Film legt es nahe: Erst als alle Kontrollstrukturen weg sind, bricht die Rüstung auf. Im wirklichen Leben kommt es manchmal so, durch Verlust, Krankheit, Trennung. Doch das ist kein Plan, den man jemandem empfehlen oder gar inszenieren dürfte. Der sanftere Weg führt über Beobachtung, Zeit und Begleitung." },
    { h: "Das Enneagramm-Echo", p: "Die Fixierung setzt auf Kontrolle: auf das richtige Verhalten, den richtigen Eindruck, die richtige Distanz. Wer in der Schutzhaltung lebt, erlebt Loslassen zunächst als Bedrohung. Der Film zeigt die Erleichterung, die danach kommt, wenn der Boden gar nicht weg ist, sondern ein Netz darunter hängt." },
    { h: "Zum Mitnehmen", u: ["Eine Kontrollgewohnheit auswählen (Nachrichten sofort beantworten, alles vorher planen) und einmal bewusst darauf verzichten.", "Danach in Ruhe beobachten, was tatsächlich geschieht und was nur befürchtet wurde."] }] },
  { titel: "Die Ahnen: Platons Höhle und ihre Erben", sub: "Ein Thema, das sich durch die Jahrhunderte zieht", intro: "Lange vor dem Kino erzählte <a href=\"#beruehmte-platon\">Platon (SX6w5)</a> im siebten Buch seiner ›Politeia‹ vom Höhlengleichnis (um 380 v. Chr.): Menschen sitzen von Geburt an gefesselt und sehen nur Schatten an einer Wand. Sie halten sie für die Wirklichkeit, benennen sie, messen sich an ihnen.", teile: [
    { h: "Der Rückweg", p: "Einer wird befreit, vom Feuer geblendet und schließlich ans Tageslicht geführt. Er sieht die Dinge selbst. Kehrt er zurück und erzählt davon, lachen die anderen ihn aus." },
    { h: "Immer wieder erzählt", p: "Die Grundfigur dieser Geschichte (Schein, Blendung, Aufstieg, Rückkehr) taucht durch die Jahrhunderte in immer neuen Gewändern auf. Eine kleine Auswahl:", l: [
      "<strong>Buddha</strong> (etwa 5. Jahrhundert v. Chr.): Der Name bedeutet ›der Erwachte‹. Wer erwacht, erkennt, dass er im Schlaf der Gewohnheit gelebt hat.",
      "<strong>Zhuangzi</strong> (4. Jahrhundert v. Chr.): Er träumt, ein Schmetterling zu sein, und weiß beim Erwachen nicht, ob er ein Mensch ist, der geträumt hat, ein Schmetterling zu sein, oder ein Schmetterling, der träumt, ein Mensch zu sein.",
      "<strong>Augustinus</strong> (um 400): In seinen ›Bekenntnissen‹ schreibt er, Gott sei innerer gewesen als sein eigenes Innerstes, während er selbst draußen gesucht habe.",
      "<strong>Meister Eckhart</strong> (um 1260–1328): Der Dominikaner und Mystiker sprach vom ›Seelengrund‹ und von der ›Abgeschiedenheit‹, dem Loslassen von Eigenwillen und inneren Bildern, um zu dem zu finden, was darunter liegt.",
      "<strong>Dante</strong> (um 1307–1321): In der ›Divina Commedia‹ (›Göttliche Komödie‹) erwacht der Dichter in einem finsteren Wald, steigt durch Hölle und Läuterungsberg bis ins Paradies und erzählt davon.",
      "<strong>Johannes vom Kreuz</strong> (16. Jahrhundert): Seine ›Dunkle Nacht der Seele‹ beschreibt, wie alle gewohnten Stützen wegfallen, bevor Neues möglich wird.",
      "<strong>Pedro Calderón de la Barca</strong> (1635): Sein Stück ›La vida es sueño‹ (›Das Leben ist ein Traum‹) handelt von einem Prinzen, der nicht weiß, ob er träumt oder wacht.",
      "<strong>René Descartes</strong> (1641): In den ›Meditationen‹ fragt er, ob er überhaupt wach ist und ob ihn ein täuschender Dämon über alles hinwegtäuscht, was er für wirklich hält. Dieser Gedanke wird oft mit ›Matrix‹ verglichen."] },
    { h: "Und heute im Kino", p: "Was früher Mystiker, Dichter und Philosophen in Gleichnissen, Gedichten und Predigten erzählten, erzählt heute das Kino mit Spezialeffekten. Die Bilder haben sich verändert, die Frage nicht: Bin ich das, was ich für mich halte? Matrix, Avatar, Inception und The Game sind in diesem Sinn neue Gewänder einer sehr alten Geschichte." }] },
];

// Die neun Programme: [Typ, Grundüberzeugung, Programmzeile, Programm, Erwachen]
const TYPEN = [
  ["Typ 1 · Der Perfektionist", "Ich muss richtig sein, um gut zu sein.", "wenn etwas falsch → korrigieren", "Die Welt läuft durch die Schablone ›richtig oder falsch‹. Der innere Richter steht unter Dauerstrom, weil er glaubt, das Universum allein in Ordnung halten zu müssen.", "Ich habe den Impuls zu korrigieren. Ich bin nicht der innere Richter."],
  ["Typ 2 · Der Helfer", "Ich muss gebraucht werden, um geliebt zu sein.", "wenn jemand etwas braucht → helfen", "Die Aufmerksamkeit liegt bei den Bedürfnissen anderer, die eigenen verschwinden aus dem Blick. Beziehungen werden durch Gefälligkeit abgesichert.", "Ich bin schon geliebt. Das Helfen ist eine Eigenschaft meines Avatars, nicht mein Kern."],
  ["Typ 3 · Der Erfolgreiche", "Ich muss etwas leisten, um wertvoll zu sein.", "wenn Ziel offen → erledigen und präsentieren", "Das Leben wird zur Kette aus Projekten, Zielen und Auftritten. Das Bild, das man abgibt, wird mit dem Menschen verwechselt.", "Erfolg und Image sind die Werte meiner Spielfigur. Mein Wert hängt nicht an ihnen."],
  ["Typ 4 · Der Individualist", "Ich muss besonders sein, weil mir etwas fehlt.", "wenn Gefühl auftaucht → vertiefen", "Die Aufmerksamkeit kreist um Tiefe, Sehnsucht und das, was fehlt. Das Anderssein schützt vor dem Schmerz, nicht dazuzugehören.", "Gefühlswellen kommen und gehen. Mir fehlt nichts, was ich nicht schon bin."],
  ["Typ 5 · Der Beobachter", "Ich muss alles verstehen, um sicher zu sein.", "wenn Anforderung → zurückziehen und prüfen", "Das Leben wird aus sicherer Distanz betrachtet, wie hinter Glas. Energie und Gefühle werden gespart, um nicht überrollt zu werden.", "Wissen und Rückzug geben nur Schein-Sicherheit. Ich werde vom Leben nicht aufgebraucht."],
  ["Typ 6 · Der Loyale", "Ich muss wachsam sein, um sicher zu sein.", "wenn Unklarheit → Gefahr prüfen", "Das System scannt ununterbrochen nach Risiken, Widersprüchen und verdeckten Absichten. Szenarien des Scheiterns laufen vorab durch.", "Die Angst ist die Simulation eines Verstandes, der Schutz sucht. Darunter liegt Gewissheit."],
  ["Typ 7 · Der Enthusiast", "Ich muss Optionen offen halten, um nicht zu leiden.", "wenn Schmerz droht → umdeuten, planen, weiter", "Der Geist springt von Idee zu Idee und vermeidet schmerzhafte oder enge Empfindungen im Jetzt durch gedankliches Umrahmen.", "Ich muss nicht fliehen. Dieser Moment mit allen Schattierungen ist der einzige Ort, an dem Leben stattfindet."],
  ["Typ 8 · Der Herausforderer", "Ich muss stark sein, um nicht beherrscht zu werden.", "wenn Druck → dagegenhalten", "Das Leben wird als Kampfplatz erfahren. Härte und Intensität schützen die Verletzlichkeit, die niemand sehen soll.", "Macht und Abwehr gehören zur Hülle. Wahre Stärke braucht keine Panzerung."],
  ["Typ 9 · Der Friedensstifter", "Ich muss mich anpassen, um den Frieden zu halten.", "wenn Konflikt droht → verschmelzen oder betäuben", "Eigene Impulse, Prioritäten und Wut werden gedämpft, damit die Verbindung zur Umwelt hält. Man macht sich unsichtbar.", "Harmonie durch Selbstaufgabe ist eine Illusion des Programms. Meine Anwesenheit ist gefragt."],
];

function teilHtml(t) {
  let s = `<h3 class="sp-h3">${t.h}</h3>`;
  if (t.p) s += `<p class="sp-p">${t.p}</p>`;
  if (t.l) s += `<ul class="sp-list">${t.l.map(x => `<li>${x}</li>`).join("")}</ul>`;
  if (t.u) s += `<div class="sp-ex"><ul class="sp-list">${t.u.map(x => `<li>${x}</li>`).join("")}</ul></div>`;
  return s;
}

export function kinoErwachenPage() {
  const nav = FILME.map((f, i) => `<a class="ab-chip" href="javascript:void(0)" onclick="document.getElementById('ke-${i + 1}').scrollIntoView({behavior:'smooth'})" style="--tc:${FARBEN[i]};"><span class="ab-chip__n">${i + 1}</span><span class="ab-chip__m">${f.titel.split(":")[0]}</span></a>`).join("");
  const kacheln = FILME.map((f, i) => `
    <section class="sp-tile" id="ke-${i + 1}" style="--tc:${FARBEN[i]};">
      <div class="sp-tile__head"><span class="sp-tile__num">${i + 1}</span><h2 class="sp-tile__title">${f.titel}</h2></div>
      <p class="sp-p" style="font-style:italic;color:var(--muted);margin-top:-.3rem;">${f.sub}</p>
      <p class="sp-p">${f.intro}</p>
      ${f.teile.map(teilHtml).join("")}
      <p class="sp-top"><a href="javascript:void(0)" onclick="document.getElementById('ke-top').scrollIntoView({behavior:'smooth'})">↑ Nach oben zur Filmauswahl</a></p>
    </section>`).join("");
  const typen = TYPEN.map((t, i) => `
    <li style="--tc:${TYP_FARBEN[i]};"><strong>${t[0]}</strong><br>
      <em>Grundüberzeugung:</em> ›${t[1]}‹<br>
      <em>Programmzeile:</em> <code>${t[2]}</code><br>
      ${t[3]}<br>
      <em>Der Riss im Programm:</em> ›${t[4]}‹</li>`).join("");
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Rote Pille, blauer Avatar: Was Matrix, Avatar, Inception und The Game über die Enneagramm-Fixierung verraten</h1>
      <p class="lead-small">Warum sehen Millionen Menschen Filme, in denen im Grunde ein Mann feststellt, dass er nicht der ist, für den er sich hielt? Weil sie von etwas erzählen, das jeder kennt: dem Moment, in dem das eigene Programm kurz sichtbar wird.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="${IMG}" alt="Collage: Neo aus Matrix zwischen Kapseln, ein blauer Na'vi und ein Pilot in der Kapsel, ein Kreisel auf dem Boden, ein Mann am Rand eines Hochhauses, in der Mitte ein Mensch mit geschlossenen Augen und leuchtendem Herzen, dazu Masken, neun farbige Kreise und Meditierende bei Sonnenuntergang." class="psycho-img" loading="lazy" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Einleitung: Der Moment, in dem man kurz aufwacht</h2>
        <p class="vb-intro">Fast jeder kennt das. Man hört sich im Streit einen Satz sagen, den man schon als Kind von den Eltern gehört hat und nie sagen wollte. Oder man bemerkt mitten im Gespräch, dass man seit Minuten nur noch nickt. Für einen Wimpernschlag steht man neben sich und sieht zu.</p>
        <p class="vb-intro" style="margin-top:1rem;">Genau diesen Wimpernschlag dehnen Kinofilme auf zwei Stunden. Neo in ›Matrix‹, Jake in ›Avatar‹, Cobb in ›Inception‹ und Nicholas in ›The Game‹ erleben, jeder auf seine Weise, dass die Welt, in der sie sich sicher fühlten, ein Konstrukt ist. Dass es dabei explodiert, schwebt und stürzt, hilft dem Unterhaltungswert. Die Faszination kommt aus einer anderen Schicht: Hier wird erzählt, was Weisheitslehren seit Jahrtausenden beschreiben, die Identifikation mit etwas, das man hat, aber nicht ist.</p>
        <p class="vb-intro" style="margin-top:1rem;">In der Sprache von Dr. <a href="#claudio-naranjo-lehrer">Claudio Naranjo</a> und Oscar Ichazo ist die <strong>Fixierung</strong> die gedankliche Seite des Enneagramm-Musters, die Leidenschaft ihre gefühlte Seite. Beide laufen meist ungeprüft. Dieser Tipp folgt den vier Filmen und fragt jeweils: Was sagt das Bild über mein eigenes Betriebssystem, und was lässt sich im Alltag damit anfangen?</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Die Grundidee: Ich habe, aber ich bin nicht</h2>
        <p class="vb-intro">Im Alltag verschmilzt das Bewusstsein mit dem, was es wahrnimmt: ›Ich habe Angst‹ wird zu ›Ich bin ängstlich‹, ›Ich habe einen Gedanken‹ wird zu ›So bin ich eben‹. Der Advaita Vedanta, Ramana Maharshi und die christliche Mystik stellen diese Verwechslung seit Langem in Frage. Das bekannte Wort, man solle in der Welt sein, aber nicht von der Welt, geht auf Johannes 17 zurück, wo es sinngemäß um genau diese Haltung geht.</p>
        <p class="vb-intro" style="margin-top:1rem;">Für das Enneagramm heißt das: Das Muster ist ein Betriebssystem, kein Wesen. Es ist erstaunlich leistungsfähig und hat vielen Menschen durch die Kindheit geholfen. Sein Schaden entsteht erst, wenn es mit dem Menschen gleichgesetzt wird. Wichtig ist die Reihenfolge: Erst wer ein Muster erkennt, kann es nutzen, statt von ihm genutzt zu werden.</p>
      </div>

      <div id="ke-top" class="ab-nav" role="navigation" aria-label="Die Filme" style="margin-top:1.6rem;">${nav}</div>
      ${kacheln}

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Die neun Matrix-Programme</h2>
        <p class="vb-intro">Jede Fixierung baut ihre eigene Mini-Matrix. Die folgenden Karten zeigen, wie ein Programm denkt, wie es sich als ›Programmzeile‹ lesen ließe und welcher Satz den Riss im Programm markiert. Die Programmzeile ist ein bewusst zugespitzter Scherz. Kein Mensch besteht aus einer einzigen Zeile, und jede Person kann Anteile mehrerer Muster zeigen. Gemeint sind Muster, die man hat, und nicht der Mensch, der man ist.</p>
        <ul class="sp-typen">${typen}</ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Drei Schritte vom Autopiloten zum Beobachter</h2>
        <ul class="sp-typen">
          <li style="--tc:#a2483a;"><strong>1. Identifikation (der Schlaf)</strong><br>Das Bewusstsein steckt im Überlebensmodus fest. Man reagiert, ohne Abstand zwischen Reiz und Antwort.</li>
          <li style="--tc:#c9a84c;"><strong>2. Der Riss</strong><br>Eine Krise, ein Gespräch, ein Film oder die ehrliche Beschäftigung mit der eigenen Psychologie zeigt: Die Sicht der Dinge ist ein Konstrukt. Der Löffel biegt sich.</li>
          <li style="--tc:#607468;"><strong>3. Der Beobachter (das Erwachen)</strong><br>Eine stabile Metaperspektive entsteht. Man sieht die Programme, ohne sie zu bekämpfen, und kann aus der Tiefe entscheiden, ob man ihnen folgt.</li>
        </ul>
      </div>

      <div class="sp-tile" style="--tc:#c9a84c;margin-top:1.8rem;">
        <div class="sp-tile__head"><span class="sp-tile__num">✦</span><h2 class="sp-tile__title">Die Übung: Der Totem-Moment</h2></div>
        <p class="sp-p">Wie Cobb seinen Kreisel braucht, hilft ein kleines Signal, das Muster im Alltag zu bemerken. Es dauert pro Anwendung wenige Sekunden.</p>
        <div class="sp-ex"><ul class="sp-list">
          <li>Ein Totem wählen: ein Ring, eine Münze, ein Stein in der Tasche, ersatzweise eine bestimmte Handbewegung.</li>
          <li>Das typische Auslösersignal des eigenen Musters benennen, etwa den Drang zu korrigieren, zu helfen, zu glänzen, sich zurückzuziehen oder abzusichern.</li>
          <li>Taucht das Signal auf, das Totem berühren und innerlich sagen: ›Ich habe dieses Muster. Ich bin nicht das Programm.‹</li>
          <li>Drei ruhige Atemzüge nehmen und spüren, wo im Körper das Muster sitzt.</li>
          <li>Erst dann entscheiden, ob dem Impuls gefolgt wird. Das Muster muss nicht bekämpft werden, es darf nur nicht mehr unbemerkt die Führung übernehmen.</li>
        </ul></div>
        <h3 class="sp-h3">Der Kino-Test</h3>
        <p class="sp-p">Beim nächsten Film lässt sich dieselbe Übung mit anderen Augen machen. Es lohnt sich, auf drei Fragen zu achten.</p>
        <div class="sp-ex"><ul class="sp-list">
          <li>Wo hält die Hauptfigur ihre Rolle für ihr Wesen?</li>
          <li>Welcher Moment ist der Riss, an dem das Programm kurz sichtbar wird?</li>
          <li>Was ist das Totem der Figur, das ihr hilft, zwischen Muster und Wirklichkeit zu unterscheiden?</li>
        </ul></div>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Zusammenfassung: Vom Autopiloten zum Beobachter</h2>
        <p class="vb-intro" style="margin-bottom:0;">Matrix zeigt das Betriebssystem, Avatar den Piloten in der Kapsel, Inception das Totem als Prüfstein und The Game die Schocktherapie, die man niemandem wünschen sollte. Dasselbe erzählten lange vor dem Kino Platons Höhle, die Mystiker und Dante. Für das Enneagramm folgt daraus ein ruhiger Gedanke: Das Muster ist ein Werkzeug, mit dem man lange gut leben kann. Wer es erkennt, muss es nicht loswerden, sondern gewinnt etwas, das größer ist als jede Fixierung, nämlich die Möglichkeit, zwischen Reiz und Antwort kurz innezuhalten.</p>
      </div>

      <div style="margin:2rem 0 0;text-align:center;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .3rem;color:var(--ink);">Der Artikel als Kurzfilm</h2>
        <p style="font-size:.9rem;color:var(--muted);margin:0 0 .9rem;">Rund 45 Sekunden, mit Ton. Über den Knopf unten geht eine Fassung mit Link zum Kompass an Freunde und Bekannte, auch wenn diese die App noch nicht haben.</p>
        <video controls playsinline preload="none" poster="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/videos/kino-erwachen-de-poster.jpg" aria-label="Kurzfilm zum Praxistipp Rote Pille, blauer Avatar" style="display:block;width:100%;max-width:340px;margin:0 auto;border-radius:14px;background:#111;box-shadow:0 4px 18px rgba(0,0,0,.18);">
          <source src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/videos/kino-erwachen-de.mp4" type="video/mp4">
        </video>
        <div style="margin:.9rem 0 0;"><button type="button" data-share-video="rp" style="font:inherit;font-weight:700;font-size:.95rem;padding:.65rem 1.3rem;border:2px solid var(--copper);border-radius:999px;background:var(--paper);color:var(--copper);cursor:pointer;">&#8599; Video teilen</button></div>
        <p style="font-size:.8rem;color:var(--muted);margin:.7rem 0 0;">Musik: ›Nine Gazes, Nine Words‹ von Detlef Rathmer</p>
      </div>

      <p style="font-size:.85rem;color:var(--muted);margin:1.4rem 0 0;">Dieser Tipp ersetzt keine ärztliche oder therapeutische Behandlung. Die Filmbilder sind Denkanstöße, keine Aussagen über die Wirklichkeit. Wer das Gefühl hat, dass die Welt unwirklich oder wie hinter Glas erscheint, oder wer unter anhaltender Angst oder Niedergeschlagenheit leidet, sollte ärztliche oder therapeutische Hilfe suchen, statt solche Bilder im Alleingang zu vertiefen. Krisen sollten nie absichtlich herbeigeführt werden, wie es im Film geschieht.</p>

      <div style="margin-top:2rem;">
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                          background:var(--paper);list-style:none;user-select:none;font-weight:700;
                          font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;color:var(--copper);">&#9672;</span>
            <span style="flex:1;">Vertiefende Literatur von Detlef Rathmer</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
            <div style="margin-top:.8rem;">${bookTip("du-bist-nicht-dein-zweifel", "Kernüberzeugungen erkennen und loslassen – ein Wegweiser zu innerer Freiheit für alle 9 Typen.", "Du bist nicht dein Zweifel")}</div>
            <div style="margin-top:.8rem;">${bookTip("der-raum-hinter-allem", "Eine Erkundung des Bewusstseins jenseits der Gedanken – über den stillen Raum, der hinter allem Erleben liegt.", "Der Raum hinter allem")}</div>
            <div style="margin-top:.8rem;">${bookTip("meta-intelligenz", "Meta-Intelligenz – die Intelligenz, die alle anderen Intelligenzen verbündet und das volle Potenzial des Bewusstseins erschließt.", "Meta-Intelligenz")}</div>
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/ich-illusion", label:"Wer lenkt hier eigentlich wen? – Der sanfte Ausweg aus der Ich-Illusion"},
        {route:"praxistipps-heilpraktiker/turiya-enneagramm", label:"Der Beobachter hinter dem Muster – Enneagramm und der Turiya-Zustand"},
        {route:"praxistipps-heilpraktiker/ende-der-suche", label:"Wenn die Suche still wird: Das Ende der Suche"},
        {route:"spirituelles-enneagramm", label:"Das spirituelle Enneagramm: Psychologie, Spiritualität oder beides?"},
        {route:"beruehmte-keanu-reeves", label:"Porträt: Keanu Reeves (SX9w1)"},
        {route:"beruehmte-michael-douglas", label:"Porträt: Michael Douglas (SO1w9)"},
      ])}
    </section>
  `);
}
