const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const SP_TILES = [
  { id: "psychologie-oder-spiritualitaet", farbe: "#8a6aa8", titel: "Psychologie oder Spiritualität?",
    html: `
      <p class="sp-p">Die Fachrichtungen, wie wir sie heute kennen, sind historisch gesehen noch jung. Gemeint sind Philosophie, Theologie und Psychologie: Sie haben sich erst in den letzten Jahrhunderten immer weiter voneinander entfernt. Früher gab es diese Trennung nicht. Der Mensch und sein Handeln beschäftigen die Menschheit seit Jahrtausenden, und zwischen Psychologie und Spiritualität wurde dabei nicht unterschieden.</p>
      <p class="sp-p">Das Enneagramm in seiner heutigen schriftlichen Form ist jünger (Beginn in den 1960er-Jahren des 20. Jahrhunderts). Die tieferen Erkenntnisse über den Menschen, die darin stecken, sind dagegen jahrtausendealtes Erfahrungswissen und stammen größtenteils aus der Zeit vor der Aufteilung in Fachrichtungen.</p>
      <p class="sp-p">Manche sagen, das Enneagramm sei spirituell geprägt, andere betonen die psychologischen Aspekte, die ebenfalls klar erkennbar sind. Der Autor sieht bei genauerem Hinsehen keinen wirklichen Unterschied: Es sind zwei Seiten einer Medaille mit fließenden Übergängen. Bei der Selbstentfaltung gehen Psychologie und Spiritualität Hand in Hand, ob man es beabsichtigt oder nicht. Wer an einem Aspekt der Medaille arbeitet, merkt, dass sich das auch auf den anderen auswirkt. Der Unterschied hängt vor allem davon ab, was man unter Spiritualität oder Psychologie versteht.</p>` },
  { id: "psychologisch", farbe: "#c47f6b", titel: "Was ist psychologisch am Enneagramm?",
    html: `
      <p class="sp-p">Das Enneagramm beschreibt unser Inneres, sozusagen eine psychologische Landkarte. Die Beschreibung eines Typs beginnt meist mit seinen Stärken und Schwächen und zeigt, worauf er seine Aufmerksamkeit richtet und wie seine Denk-, Gefühls- und Handlungsmuster aussehen. Man nennt das auch das psychologische Enneagramm: eine Beschreibung der Persönlichkeits- oder Charakterstruktur. Die Psychologie spricht hier vom Ego, Freud sprach vom Ich, und spirituell ist vom Niederen Selbst die Rede. Im Enneagramm heißt diese Beschreibung Enneagrammfixierung, psychologischer Abwehrmechanismus, Enneagrammtyp oder Enneagrammstil, oder auch Enneagramm der Leidenschaften und Fixierungen.</p>
      <p class="sp-p">Unser Handeln erleben wir auf dieser Ebene als ein Feststecken in der jeweiligen Fixierung. Das betrifft die meisten von uns. ›Feststecken‹ heißt, dass es eigentlich keine Wahlfreiheit im Denken, Fühlen und Handeln gibt. Der Mangel entsteht einfach dadurch, dass wir uns selbst nicht gut kennen. Unsere automatischen Denk-, Gefühls- und Handlungsmuster bleiben uns dann kaum bewusst, und wir fahren auf ›Autopilot‹. Man will zum Beispiel nicht wütend werden und geht doch in die Luft. Es kommt einfach ›dämonenhaft‹ über uns, das ist die fehlende Wahlfreiheit. Wir handeln aus unserem Niederen Selbst, aus der unbewussten Fixierung heraus, und das Ego führt überwiegend Regie in unserem Leben.</p>` },
  { id: "spirituell", farbe: "#c9a84c", titel: "Was ist spirituell am Enneagramm?",
    html: `
      <p class="sp-p">Das Enneagramm bietet auch eine Entwicklungsmethode an und ist daher ein Transformationsmodell. Transformation ist ein Wort aus spirituellen Kreisen. Es geht um die Verwandlung des Niederen ins Höhere Selbst, um den Übergang vom Handeln auf Ego-Ebene zum Handeln als freier Mensch. Das Ego führt dann nicht mehr oder jedenfalls seltener und weniger einseitig Regie, wir müssen uns nicht mehr so einseitig destruktiv ausagieren.</p>
      <p class="sp-p">Was aber ist spirituell daran? Der Begriff ist dehnbar und sehr persönlich. Viele sehen Spiritualität als Religion und Glauben an einen Gott. Für andere gehören diese Dinge nicht zwingend zusammen: Im Buddhismus ist der Glaube an einen Gott kein Teil der spirituellen Lehre, und es gibt nicht-religiöse Menschen mit einem spirituellen Leben. Umgekehrt folgen nicht alle Mitglieder von Glaubensgemeinschaften einer spirituellen Lebensweise. Im weiteren Sinn kann man darunter verstehen, sich als Teil eines größeren Ganzen zu empfinden, Verbundenheit und Einssein mit allem zu erfahren oder die eigene Ganzheit zu verwirklichen. Der Autor erkennt Spiritualität auch darin, das Höhere in sich selbst willkommen zu heißen. Dieses Höhere kann Gott oder Allah sein, aber auch das höhere Potenzial als Heilige Idee jedes Enneagrammprinzips, das im Menschen vorhanden ist und oft viele Jahre oder Jahrzehnte auf Entfaltung wartet. Dazu gehört das Streben, aus dem Wahren Selbst, dem eigenen essenziellen Wesen, und aus höheren Werten und Tugenden zu leben.</p>
      <p class="sp-p">Ein Beispiel sind Menschen, die sich entschlossen haben, aus der Liebe zu leben. Sie betrachten Liebe als den höchsten Wert, nach dem sie vor allem streben. Wer an Gott glaubt, formuliert das Ziel vielleicht als ›Gott näher kommen‹, wer nicht glaubt, nennt es möglicherweise ›ein freier Mensch werden‹. Im Kern sind beide Wege vielleicht gar nicht so verschieden: Was steht zwischen dem Menschen und Gott? Was steht zwischen dem Menschen und dem freien Menschen? Die Antwort ist dieselbe: das Ego, das fiktive Selbst. Ohne Kenntnis der eigenen inneren Beweggründe, Motivationen und Leidenschaften steht man sich selbst im Weg.</p>` },
  { id: "zwei-seiten", farbe: "#4f86a8", titel: "Zwei Seiten einer Medaille",
    html: `
      <p class="sp-p"><em>Psychologie</em> und <em>Spiritualität</em> sind also zwei Seiten einer Medaille. In spirituellen Traditionen wird das Niedere Selbst oder Ego seit jeher untersucht, weil es der Ausgangspunkt für die Transformation in etwas Höheres ist. Vermutlich ist eine Ursache für die Entstehung spiritueller Orientierung die tägliche Erfahrung, dass wir vor allem unter unserem Ego leiden. Viele von uns wollen jedenfalls weniger darunter leiden, und deshalb sind Menschen schon seit Jahrtausenden auf der Suche nach dem Wie: Was können wir tun, um weniger zu leiden? Nur die Sprache, in der das ausgedrückt wird, hat sich im Lauf der Jahrhunderte immer wieder verändert.</p>
      <p class="sp-p">In den letzten Jahrzehnten ist das innere Wohlbefinden und Unwohlsein des Menschen durch die Entwicklung der Wissenschaft zum besonderen Forschungsgebiet der Psychologie geworden. Die Entwicklungsmethoden heißen hier psychologische Therapien. Wer spirituell geübt ist, erkennt in den verschiedenen Therapien leicht den Kern der eigenen spirituellen Praxis wieder. Der ›Guru‹ heißt jetzt Psychotherapeut. Auch er befasst sich mit Sinngebung und dem Streben nach höheren Werten bei seinen Klienten, einfach weil Menschen dadurch mehr zu sich selbst finden und glücklicher werden können.</p>` },
  { id: "psycho-spirituell", farbe: "#8aa06a", titel: "Das psycho-spirituelle Enneagramm",
    html: `
      <p class="sp-p">Bei genauem Hinsehen gibt es kein Entweder-oder: Das Enneagramm enthält sowohl <em>psychologische</em> als auch <em>spirituelle</em> Elemente.</p>
      <ul class="sp-list">
        <li>Die psychologische Landkarte bildet unser Inneres, unser Ego, ab.</li>
        <li>Die spirituelle Seite bildet unser Höheres Selbst ab.</li>
        <li>Die Methode zeigt den Weg, vom einen zum anderen zu gelangen: den Weg der Transformation vom Niederen zum Höheren Selbst.</li>
      </ul>
      <p class="sp-p">Vor allem ist das Enneagramm eine Einladung an jeden von uns, das Höhere in uns zu verwirklichen, indem wir lernen, dem Ego oder Niederen Selbst in die Augen zu sehen. Das eine lässt sich nicht vom anderen trennen.</p>` },
  { id: "menschwerdung", farbe: "#a2483a", titel: "Menschwerdung",
    html: `
      <p class="sp-p">Das griechische Wort für den Menschen oder die Menschheit lautet <em>anthrôpos</em>. In der altgriechischen Bedeutung steht es für ›der nach oben schaut‹ oder ›der für das Höhere bestimmt ist‹. Wirklich Mensch zu sein hieß, sich für das Höhere zu öffnen, aber auch für den anderen und dessen Wohlbefinden: ein guter, tugendhafter, wahrer Mensch zu sein.</p>
      <p class="sp-p">Der Weg, den das Enneagramm anbietet, führt über das Loslassen des unbewussten, unbedingten Anklammerns an die eigene Enneagrammfixierung dazu, das Wahre Selbst und die höheren Tugenden, die man in sich trägt, willkommen zu heißen. Dann führt nicht länger das Ego oder der Enneagrammtyp die Regie im Leben, und der Weg zu wahrer innerer Freiheit wird eröffnet.</p>
      <p class="sp-p">Das Enneagramm zeigt einen Weg zum bewussten Leben: mit Selbsterkenntnis und Wissen um die eigenen Stärken und Schwächen, aber auch in Kenntnis der anderen. Das bedeutet, empfänglicher zu werden für das, was in einem selbst und im Rahmen der eigenen Lebensumstände schon vorhanden und möglich ist, und es bedeutet ein glücklicheres, erfüllteres Leben mit (mehr) Balance, Ruhe, Freude, Weisheit, innerem Frieden und Liebe.</p>` },
  { id: "zusammenfassung", farbe: "#607468", titel: "Zusammenfassung und Gewinn",
    html: `
      <h3 class="sp-h3">Das Enneagramm ist …</h3>
      <ul class="sp-list">
        <li>ein Symbol, dem verschiedene Bedeutungen zugeschrieben werden,</li>
        <li>ein Symbol, in dem unsere psychologische und spirituelle Struktur zusammengefasst wird,</li>
        <li>eine Landkarte unseres Inneren,</li>
        <li>eine Übungsmethode zur persönlichen Weiterentwicklung,</li>
        <li>eine Methode, bei der der Entwicklungsweg für jeden der neun Typen beziehungsweise der 27 Subtypen anders verläuft.</li>
      </ul>
      <h3 class="sp-h3">Was bringt die persönliche Weiterentwicklung mit dem Enneagramm?</h3>
      <ul class="sp-list">
        <li>Sich selbst kennenlernen und entdecken, wer man ist.</li>
        <li>Andere kennenlernen und entdecken, wie und warum sie anders sind.</li>
        <li>Anerkennung, Akzeptanz und Wertschätzung von sich selbst und anderen.</li>
        <li>Mitgefühl mit sich selbst und anderen.</li>
        <li>Eine Brücke zwischen Menschen, um einander besser zu verstehen und Verständnis füreinander zu entwickeln.</li>
        <li>Anerkennung des eigenen Lebens und seiner Bedeutung, einschließlich der Vergangenheit, der Eltern, der Ex-Partner und so weiter.</li>
        <li>Eine Verbindung mit sich selbst, von der aus sich auch zu anderen Verbindung herstellen lässt.</li>
        <li>Ein inneres Gleichgewicht, das sich durch äußere Faktoren weniger leicht stören lässt.</li>
        <li>Innere Ruhe.</li>
        <li>Ein freierer Mensch werden, dessen Glück weniger oder gar nicht mehr von den Menschen in der Umgebung, von Umständen und Ähnlichem abhängt.</li>
        <li>Mehr Spaß und Freude am Leben.</li>
      </ul>` },
  { id: "laster-zur-tugend", farbe: "#d9a441", titel: "Vom Laster zur höheren Tugend: ein Geschenk",
    html: `
      <p class="sp-p">Ein Laster in eine Tugend zu verwandeln bedeutet, die Regie vom niederen emotionalen Zentrum (Ego, ›Kampfhund‹, emotionaler Schmerzkörper) an das höhere emotionale Zentrum zu übertragen. Wo die Autorität der Kirchen Tugenden als Dogma verkündet hat und verkündet, wirkt das oft befremdlich: Die Form des tugendhaften Lebens wird dann sozusagen von einer obersten äußeren Autorität vorgeschrieben und eventuell mit Hölle und Verdammnis sanktioniert.</p>
      <p class="sp-p">Die Tugenden, die hier gemeint sind, sind eher ein Geschenk. Nicht etwas, das man muss, sondern etwas, das einem manchmal geschenkt wird. Nicht etwas, das von außen vorgemacht wird und das man dann nachahmt, um den Schein zu wahren, sondern etwas, das tief im eigenen Wahren Selbst jenseits der Egofixierung liegt. Die Weisheit des Enneagramms zeigt, dass das, was uns im Leben Leid und Ärger bringt, aus unseren Lastern und Leidenschaften entsteht: Stolz, Täuschung, Unmäßigkeit, Groll und so weiter. Es sind meist tief unbewusste Leidenschaften, die inneres Ungleichgewicht schaffen. Wenn wir diese Laster loslassen (Via negativa), öffnet sich der Weg, stattdessen die höheren Tugenden einzuladen (Via positiva). Dann erreichen wir einen Ort in uns, der frei von Leid ist.</p>
      <ul class="sp-typen">
        <li style="--tc:#607468;"><b>Typ 1</b> wird ein zufriedenerer Mensch, wenn er Zorn und Groll in bestimmten Situationen gegenüber anderen loslassen kann.</li>
        <li style="--tc:#c47f6b;"><b>Typ 2</b> kann die höhere Tugend der Demut erleben, wenn er Stolz und Schmeichelei unter die Regie seines Wahren Selbst bringt.</li>
        <li style="--tc:#c9a84c;"><b>Typ 3</b> macht einen wichtigen Schritt zum freieren Menschen, wenn er Eitelkeit und Täuschung wahrnehmen und loslassen lernt.</li>
        <li style="--tc:#8a6aa8;"><b>Typ 4</b> wird automatisch zufriedener, wenn er Neid und Melancholie wahrnehmen und dadurch loslassen kann.</li>
        <li style="--tc:#4f86a8;"><b>Typ 5</b> kann die höhere Tugend der Nichtanhaftung erleben, wenn er Geiz und Habgier wahrnehmen und loslassen kann.</li>
        <li style="--tc:#7a8f9e;"><b>Typ 6</b> wird freier, wenn er Angst und Zweifel loslassen kann.</li>
        <li style="--tc:#d9a441;"><b>Typ 7</b> erlebt sich als freierer Mensch, wenn er seine Völlerei unter die Regie seines Wahren Selbst bringt.</li>
        <li style="--tc:#a2483a;"><b>Typ 8</b> kann die Tugend der Unschuld erleben, wenn er die Leidenschaft der Wollust erkennt und transformiert.</li>
        <li style="--tc:#8aa06a;"><b>Typ 9</b> kann die höhere Tugend des rechten Handelns in sich empfangen, wenn er Trägheit wahrnimmt und erkennt.</li>
      </ul>` },
];

export function spirituellesEnneagrammPage() {
  const nav = SP_TILES.map((t, i) => `<a class="ab-chip" href="javascript:void(0)" onclick="document.getElementById('sp-${t.id}').scrollIntoView({behavior:'smooth'})" style="--tc:${t.farbe};"><span class="ab-chip__n">${i + 1}</span><span class="ab-chip__m">${t.titel}</span></a>`).join("");
  const sektionen = SP_TILES.map((t, i) => `
    <section class="sp-tile" id="sp-${t.id}" style="--tc:${t.farbe};">
      <div class="sp-tile__head"><span class="sp-tile__num">${i + 1}</span><h2 class="sp-tile__title">${t.titel}</h2></div>
      ${t.html}
      <p class="sp-top"><a href="javascript:void(0)" onclick="document.getElementById('sp-top').scrollIntoView({behavior:'smooth'})">↑ Nach oben zur Themenauswahl</a></p>
    </section>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("spirituelles-enneagramm")}
      <div class="page-content sp-page">
        <p class="eyebrow">Wissen · Psychologie und Spiritualität</p>
        <h1 class="section-title">Das spirituelle Enneagramm: Psychologie, Spiritualität oder beides?</h1>
        <p class="lead-small">Das Enneagramm wird mal als Psychologie, mal als Spiritualität gelesen. Hier steht, warum beides zusammengehört: als Landkarte des Ego und als Weg zum Höheren Selbst.</p>
        <figure class="sp-hero"><img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/spirituelles-enneagramm.jpg" alt="Das spirituelle Enneagramm: ein leuchtendes Enneagramm-Symbol mit einer Spirale in der Mitte, umgeben von feurig fließenden Wellen" loading="lazy" /></figure>
        <div id="sp-top" class="ab-nav" role="navigation" aria-label="Themen dieses Artikels">${nav}</div>
        ${sektionen}
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("heilung-als-erinnerung", "Heilung nicht als Reparatur, sondern als Erinnerung an das, was wir eigentlich sind.", "Heilung als Erinnerung")}
      ${relatedLinks([
        {route:"tugenden-enneagramm", label:"Die Tugenden im Enneagramm"},
        {route:"laster-tugenden-affirmationen", label:"Schaubild: Laster · Tugenden · Affirmationen"},
        {route:"ego-fixierungen", label:"Schaubild: Ego-Fixierungen nach Oscar Ichazo"},
        {route:"ego-persoenlichkeit", label:"Schaubild: Ego-Persönlichkeit"},
        {route:"leidenschaft-und-wunde", label:"Schaubild: Leidenschaft und Wunde"},
        {route:"angst-essenz", label:"Schaubild: Angst → Essenz"},
        {route:"heilungsweg", label:"Schaubild: Heilungsweg des Menschen"},
        {route:"bewusstseinsuebungen", label:"Schaubild: Bewusstseinsübungen"},
        {route:"spirituelle-uebungen", label:"Spirituelle Übungen"},
      ])}
    </div>
  `);
}
