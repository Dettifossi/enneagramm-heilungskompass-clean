import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft, animalResearcherMatchBlock } from "../../bundle.js";

export function aliceSchwarzerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-alice-schwarzer-portrait.jpg" alt="Alice Schwarzer – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alice Schwarzer</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexueller Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Journalistin, Feministin &amp; Emma-Gr\u00fcnderin, geb. 1942 &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Tier, das in den M\u00e4rchen als Bedrohung erscheint, in der Realit\u00e4t aber vor allem eines ist: loyal, territorial und missverstanden. Der Wolf lebt im Rudel, k\u00e4mpft f\u00fcr das Rudel &ndash; und zeigt die Z\u00e4hne, wenn das Rudel bedroht wird. Er duckt sich nicht. Er weicht nicht aus. Und er erinnert sich, wer ihm feindlich gegen\u00fcberstand.</p>
          <p class="vb-intro">Die deutsche Journalistin Alice Schwarzer ist dieser Wolf. Seit mehr als f\u00fcnf Jahrzehnten k\u00e4mpft sie f\u00fcr Frauenrechte &ndash; mit einer Direktheit, die viele erschreckt, und einer Ausdauer, die wenige aufbringen. Sie hat Debatten angesto\u00dfen, die niemand f\u00fchren wollte. Sie hat Strukturen benannt, die niemand benennen wollte. Und sie hat daf\u00fcr einen Preis gezahlt: Anfeindungen, Verachtung, Missverst\u00e4ndnisse &ndash; und mehr Gegner als die meisten Menschen in einem Leben sammeln. Der Wolf, der nicht aufh\u00f6rt zu heulen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: St\u00e4rke gegen die Angst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Feigheit am st\u00e4rksten verborgen ist, weil sie ins Gegenteil verkehrt wird. Die SX6 begegnet ihrer Angst nicht mit R\u00fcckzug, sondern mit Angriff. <em>Wenn ich schneller bin als die Bedrohung, wenn ich lauter bin, wenn ich als erste angreife &ndash; dann bin ich sicher.</em> Naranjo nannte diesen Subtyp <em>St\u00e4rke</em>: Die SX6 sucht Kraft, weil sie Angst kennt &ndash; und weil sie sich geschworen hat, dieser Angst nie wieder nachzugeben.</p>
          <p class="vb-intro">Bei Alice Schwarzer zeigt sich das in ihrer Kampfbereitschaft, die seit Jahrzehnten nicht nachl\u00e4sst. 1971 organisierte sie in Deutschland die Aktion <em>Wir haben abgetrieben</em>, zu einer Zeit, als das strafrechtliche Konsequenzen haben konnte. Sie benannte Pornographie \u00f6ffentlich als Gewalt gegen Frauen, als das noch ein gesellschaftliches Tabu war, und lenkte sp\u00e4ter die Debatte um Prostitution in Deutschland in eine Richtung, die viele nicht h\u00f6ren wollten. Das ist die SX6: <em>Ich habe Angst. Also k\u00e4mpfe ich.</em></p>
          <p class="vb-intro">Ihr Rudel ist Emma &ndash; die Frauenzeitschrift, die sie 1977 gr\u00fcndete und nach wie vor herausgibt. Kein Konzern im R\u00fccken, keine Investoren, kein Kompromiss mit der Werbewirtschaft. Emma ist das Territorium des Wolfes: gesch\u00fctzt, verteidigt, kompromisslos.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Analyse als Waffe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sexuellen Sechs eine intellektuelle Sch\u00e4rfe, die ihren Kampf von blo\u00dfem Aktivismus unterscheidet. Die SX6w5 k\u00e4mpft nicht aus dem Bauch heraus &ndash; sie k\u00e4mpft mit Belegen, mit Analysen, mit einem Wissen, das sie sich \u00fcber Jahrzehnte erarbeitet hat. <em>Ich will nicht nur recht haben. Ich will beweisen k\u00f6nnen, dass ich recht habe.</em></p>
          <p class="vb-intro">Schwarzers Werk ist durchdrungen von diesem F\u00fcnferfl\u00fcgel: <em>Der kleine Unterschied und seine gro\u00dfen Folgen</em> (1975) war kein Pamphlet &ndash; es war eine Feldstudie, basierend auf Interviews mit Frauen \u00fcber ihre Sexualit\u00e4t und ihre Erfahrungen mit M\u00e4nnern. Ihre Interviews mit Simone de Beauvoir, ihre Analyse der Prostitutionsdebatte, ihre Auseinandersetzung mit dem politischen Islam &ndash; stets verbindet sich bei ihr die k\u00e4mpferische Haltung der SX6 mit der analytischen Tiefe des F\u00fcnferfl\u00fcgels. Der Wolf, der seine Beute kennt, bevor er angreift.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w5 ist ihre Unnachgiebigkeit im Dienst einer Sache, die sie f\u00fcr gerecht h\u00e4lt &ndash; und ihre Bereitschaft, daf\u00fcr jeden Preis zu zahlen. Schwarzer hat die Situation von Frauen in Deutschland ver\u00e4ndert. Nicht allein, aber ma\u00dfgeblich. Wer heute selbstverst\u00e4ndlich \u00fcber sexuelle Bel\u00e4stigung spricht, \u00fcber strukturelle Ungleichheit, \u00fcber K\u00f6rperautonomie &ndash; steht auf einem Fundament, das Schwarzer mit aufgebaut hat.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Feigheit</strong> &ndash; und die SX6 bek\u00e4mpft sie durch Gegenwehr. Aber dieser Mechanismus hat eine Schattenseite: Wenn die Gegenwehr zum Selbstzweck wird, wenn jeder, der anderer Meinung ist, zum Feind erkl\u00e4rt wird, wenn die eigene Position unantastbar werden muss &ndash; dann verliert der Wolf seinen Instinkt f\u00fcr das, was er eigentlich sch\u00fctzen wollte. Schwarzers Positionierungen haben nicht immer Freunde gefunden, auch nicht in feministischen Kreisen.</p>
          <p class="vb-intro">Ihr bekanntestes Eingest\u00e4ndnis einer eigenen Schw\u00e4che: 2014 r\u00e4umte sie \u00f6ffentlich ein, Geld auf einem Schweizer Konto versteckt zu haben &ndash; und damit Steuern hinterzogen zu haben. Sie entschuldigte sich. Der Wolf, der zugibt, sich selbst nicht immer treu gewesen zu sein. Das kostet Kraft. Und es ist ein Zeichen von St\u00e4rke.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: K\u00e4mpfen aus Liebe, nicht aus Angst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Wie sch\u00fctze ich mich vor der Bedrohung?</em> zur Erkenntnis <em>Ich bin stark genug &ndash; auch ohne den Kampf.</em> F\u00fcr die SX6w5 bedeutet das, die Waffe nicht niederzulegen, aber sie aus einem anderen Ort heraus zu f\u00fchren: nicht aus der Angst, die angreift, bevor sie angegriffen wird &ndash; sondern aus der Liebe zu dem, was man sch\u00fctzen will.</p>
          <p class="vb-intro">Alice Schwarzer hat f\u00fcnf Jahrzehnte lang f\u00fcr Frauen gek\u00e4mpft, und sie k\u00e4mpft, weil sie wei\u00df, dass das Rudel zuh\u00f6rt. Das ist die SX6w5 auf ihrem Heilungsweg: Wenn die St\u00e4rke nicht mehr aus der Angst kommt, sondern aus dem tiefen Wissen um den Wert dessen, wof\u00fcr man steht.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-anke-engelke", label:"Portr\u00e4t: Anke Engelke (SX6w7)"},
      ])}
    </div>
  `);
}

export function arthurRimbaudPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-arthur-rimbaud-portrait.jpg" alt="Arthur Rimbaud" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Arthur Rimbaud</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Französischer Dichter, 1854–1891 – Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua aus Charleville</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist die kleinste Hunderasse der Welt – und verhält sich wie die größte. Er kennt keine Distanz zwischen dem, was er fühlt, und dem, was er zeigt: Er bellt, wenn ihm etwas nicht passt, und zwar sofort, ungefiltert, ohne Rücksicht auf die Größe des Gegenübers. Jean-Nicolas-Arthur Rimbaud wurde 1854 in Charleville geboren, einer kleinen Provinzstadt in den Ardennen, die er sein Leben lang als geistiges Gefängnis empfand. Sein Vater Frédéric, ein Militäroffizier, war meist auf Truppenposten unterwegs und verließ die Familie schließlich ganz, als Arthur sechs Jahre alt war. Die Mutter, streng und autoritär, führte den Haushalt und die fünf Kinder mit eiserner Disziplin – in Rimbauds frühen Gedichten taucht sie immer wieder als bedrückende, kontrollierende Figur auf.</p>
          <p class="vb-intro">Der Chihuahua, der früh lernte, dass Zuneigung an Bedingungen geknüpft war, entwickelte stattdessen etwas anderes: eine außergewöhnliche schulische Begabung, die ihn schon mit 15 und 16 Jahren bedeutende Gedichte schreiben ließ, und einen ebenso außergewöhnlichen Fluchtinstinkt. Mehrfach lief er von zu Hause fort; als seine Schule während des Deutsch-Französischen Krieges schloss, nutzte er die Gelegenheit und geriet als 16-Jähriger auf sich allein gestellt nach Paris, wo er zeitweise mittellos auf der Straße lebte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Konkurrenz als radikaler Bruch mit der Konvention</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> trägt den Schmerz der Vier nicht als stille Sehnsucht, sondern als offene Konfrontation – Naranjo nannte diesen Subtyp <em>Konkurrenz</em>, <em>Rivalität</em>, manchmal auch <em>Hass</em>: die Intensität, die sich über das direkte Übertreffen, Provozieren und den radikalen Bruch mit dem Bestehenden definiert, oft mit einer selbstzerstörerischen Note. Kaum ein Dichter verkörperte dieses Muster so kompromisslos wie Rimbaud: Mit gerade einmal 15 bis 20 Jahren wollte er die gesamte französische Dichtung seiner Zeit übertreffen und hinter sich lassen. Sein Anspruch war nicht, mitzuschreiben – er wollte, dass nach ihm nichts mehr so geschrieben werden konnte wie zuvor.</p>
          <p class="vb-intro">Diese Haltung fasste er in der berühmten Formel <em>"il faut être absolument moderne"</em> – "man muss absolut modern sein" – zusammen, die in seinem Prosagedicht <em>Une Saison en Enfer</em> (Eine Zeit in der Hölle, 1873) erscheint. Es ist kein programmatischer Rat, sondern ein Kampfruf: ein Bruch mit allem, was vorher war, als Selbstzweck und Selbstbeweis zugleich. Rimbaud suchte den Skandal bewusst – provokante Auftritte im literarischen Paris, verletzende Bemerkungen gegen etablierte Dichter, ein Auftreten, das absichtlich vor den Kopf stoßen sollte. Die SX4 misst sich nicht an einem inneren Maßstab, sondern im direkten Duell – und Rimbaud führte dieses Duell gegen die gesamte französische Literaturtradition.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Der Wille zur sichtbaren Revolution</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der sexuellen Vier den Ehrgeiz, das eigene Feuer nicht nur zu fühlen, sondern es öffentlichkeitswirksam zu inszenieren. Rimbaud wollte nicht im Verborgenen dichten – er wollte gesehen, gelesen, anerkannt werden, und zwar nicht irgendwann, sondern sofort. Mit 16 Jahren schickte er dem etablierten Dichter Paul Verlaine einen Brief samt seinem Gedicht <em>Le Bateau ivre</em> (Das trunkene Schiff) – eine kalkulierte Geste, die genau ihr Ziel erreichte: Verlaine war so beeindruckt, dass er den jungen Rimbaud nach Paris einlud, in sein eigenes Haus.</p>
          <p class="vb-intro">Der Dreierflügel zeigt sich auch darin, wie gezielt Rimbaud sein eigenes Bild formte – als enfant terrible, als Genie, das die Regeln nicht kennt, weil es über ihnen steht. Werke wie <em>Illuminations</em>, eine Sammlung visionärer Prosagedichte, wurden zu Grundtexten der literarischen Moderne, weit über seine eigene Lebenszeit hinaus – Rimbaud rechnete mit Wirkung, auch wenn er die volle Anerkennung selbst nicht mehr erlebte, da vieles erst postum veröffentlicht wurde. Der Ehrgeiz des Dreierflügels braucht ein Publikum, und Rimbaud fand es, indem er es provozierte, statt es zu umwerben.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Beziehung zu Verlaine: Ein Feuer, das sich selbst verzehrte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zwischen 1871 und 1873 führten Rimbaud und Verlaine eine stürmische, öffentlich skandalöse Beziehung, die Verlaines Ehe zerstörte und beide durch Belgien und England trieb. Es war keine ruhige Verbindung: Streit, Eifersucht und Gewalt gehörten ebenso dazu wie intensive gemeinsame kreative Phasen. Im Juli 1873 eskalierte die Beziehung endgültig – ein betrunkener, verzweifelter Verlaine schoss in Brüssel auf Rimbaud und verletzte ihn am Handgelenk. Verlaine wurde daraufhin zu zwei Jahren Haft verurteilt.</p>
          <p class="vb-intro">Diese Beziehung trägt die Handschrift der SX4 in Reinform: Intensität, die keine Grenze kennt, Liebe, die sich nicht von Zerstörung trennen lässt. Die sexuelle Vier sucht nicht die verträgliche Bindung, sondern die Verschmelzung, die alles auf eine Karte setzt – und die genau dadurch zum Auslöser der eigenen größten literarischen Werke wurde. <em>Une Saison en Enfer</em> entstand direkt im Nachhall dieser Katastrophe, als Versuch, das eigene Scheitern in Sprache zu faseln.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX4w3 zeigt sich in Rimbauds Fähigkeit, mit einer Handvoll Gedichte, geschrieben zwischen dem 15. und 20. Lebensjahr, die gesamte Entwicklung der modernen Poesie vorwegzunehmen – Surrealisten, Symbolisten und Existenzialisten beriefen sich später gleichermaßen auf ihn. Kaum ein Dichter hat mit so wenig Lebenszeit als Schreibender eine so große Wirkung erzielt.</p>
          <p class="vb-intro">Der Schatten liegt in derselben Intensität, die keine Ruhe kennt: Rimbauds Beziehungen – zu Verlaine, zu seiner Mutter, zu den literarischen Zirkeln von Paris – waren fast durchweg von Konflikt geprägt. Die SX4 mit starkem Dreierflügel kann Anerkennung suchen und sie im selben Atemzug zerstören, weil die Konkurrenz, die sie antreibt, auch die Nähe vergiftet, die sie sich eigentlich wünscht.</p>
        </blockquote>

        <h2 class="vb-section">6. Der radikale Bruch: Vom Dichter zum Kaufmann</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1875, im Alter von nur 21 Jahren, hörte Rimbaud abrupt auf zu schreiben. Kein langsames Verstummen, kein allmählicher Rückzug – ein vollständiger, endgültiger Bruch mit der eigenen bisherigen Identität. Er reiste durch Europa, diente kurzzeitig in der niederländischen Kolonialarmee, und ließ sich schließlich als Kaufmann in Aden (Jemen) und in Harar (Äthiopien) nieder, wo er unter anderem mit Kaffee handelte und zeitweise auch Waffen. Die Poesie erwähnte er in seinen Briefen aus Afrika kaum noch – als sei sie ein abgeschlossenes Kapitel, das ihn nichts mehr anging.</p>
          <p class="vb-intro">Dieser Bruch ist selbst ein Ausdruck der SX4w3: Wenn die Konkurrenz mit der alten Rolle erschöpft ist, wird die Rolle vollständig verworfen – nicht modifiziert, nicht weiterentwickelt, sondern radikal hinter sich gelassen, um eine neue, ebenso kompromisslose Identität aufzubauen. 1891 kehrte Rimbaud schwer krank nach Frankreich zurück: Ein Knietumor, vermutlich ein Osteosarkom (ein bösartiger, aggressiv wachsender Knochenkrebs, der meist im Bereich des Knies auftritt), machte die Amputation seines rechten Beins nötig. Wenige Monate später, am 10. November 1891, starb er im Alter von 37 Jahren in Marseille – ein Leben, das binnen weniger Jahre gleich zweimal vollständig neu erfunden wurde.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx4", label:"SX4 – Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-voltaire", label:"Porträt: Voltaire (SX4w3)"},
        {route:"beruehmte-freddie-mercury", label:"Porträt: Freddie Mercury (SX4w3)"},
      ])}
    </div>
  `);
}

export function bradPittPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-brad-pitt-portrait.jpg" alt="Brad Pitt – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Brad Pitt</p>
        <p class="krim-portrait-typ">SX3w2 &middot; Sexueller Typ 3 mit Zweierflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler &amp; Produzent, geb. 1963 in Shawnee, Oklahoma &ndash; Tierentsprechung: Pfau</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Pfau</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Pfau</strong> ist das Tier der sexuellen Drei &ndash; ein Tier, dessen Wirkung nicht aus Berechnung entsteht, sondern aus reiner, unmittelbarer Präsenz. Er muss nichts beweisen, er muss nur da sein. Wer ihm begegnet, spürt eine Anziehungskraft, die sich jeder Analyse entzieht &ndash; und genau darin liegt seine Macht.</p>
          <p class="vb-intro">Der US-amerikanische Schauspieler Brad Pitt wurde mit einer kleinen, aber unübersehbaren Nebenrolle in <em>Thelma &amp; Louise</em> (1991) quasi über Nacht zum Objekt kollektiver Faszination &ndash; wenige Filmminuten genügten, um ein ganzes Kinopublikum aufhorchen zu lassen. Kein aufwendig konstruierter Star-Auftritt, sondern schlichte, körperliche Präsenz, die sich nicht erklären lässt, nur erleben. Der Pfau, der einen Raum verändert, allein durch das, was er darstellt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Drei: Magnetismus als Lebensthema</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Drei (SX3)</strong> macht persönliche Anziehungskraft zur Lebensaufgabe &ndash; nicht Erfolg vor der breiten Öffentlichkeit wie die soziale Drei, sondern die unmittelbare, körperliche Resonanz mit dem Gegenüber. Claudio Naranjo nannte diesen Subtyp <em>Masculinity/Femininity</em>: die Verkörperung von Attraktivität in ihrer reinsten, intimsten Form.</p>
          <p class="vb-intro">Pitts Karriere lässt sich als drei Jahrzehnte andauernde Übersetzung dieser Anziehungskraft in schauspielerische Substanz lesen. Wo andere Sexsymbole an ihrem eigenen Image scheitern, hat Pitt es genutzt, um sich in immer neue Register vorzuwagen: den lyrisch-romantischen Fliegenfischer in <em>Legends of the Fall</em>, den selbstzerstörerischen Anarchisten in <em>Fight Club</em>, den lässigen Gauner in <em>Ocean's Eleven</em>. Die SX3 zieht an &ndash; und Pitt verstand früh, dass diese Anziehung ein Werkzeug ist, keine Endstation.</p>
          <p class="vb-intro">Auch sein Privatleben stand jahrzehntelang unter permanenter öffentlicher Beobachtung &ndash; von der Beziehung zu Gwyneth Paltrow über die Ehe mit Jennifer Aniston (SX6w7) bis zur langjährigen Partnerschaft mit Angelina Jolie (SO1w2), mit der er sechs Kinder hat. Die SX3 lebt Beziehung öffentlich und intensiv; ihr Charisma zieht Aufmerksamkeit auch dort an, wo sie sie nicht gesucht hat.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierflügel: Förderer statt nur Star</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierflügel (w2)</strong> gibt der sexuellen Drei eine Dimension, die über reinen Magnetismus hinausgeht: das echte Bedürfnis, sich für andere einzusetzen, ihnen eine Bühne zu geben, statt sie nur für sich selbst zu beanspruchen. Eine SX3 mit schwach ausgeprägtem Zweierflügel könnte in der eigenen Wirkung aufgehen. Ein stark ausgeprägter Zweierflügel öffnet den Blick nach außen.</p>
          <p class="vb-intro">Bei Pitt zeigt sich das am deutlichsten in seiner zweiten Karriere als Produzent. Mit seiner Firma Plan B Entertainment stand er hinter Filmen wie <em>12 Years a Slave</em> und <em>Moonlight</em> &ndash; beide mit dem Oscar für den besten Film ausgezeichnet &ndash;, Werken, die schwarzen Filmschaffenden und Geschichten eine Plattform gaben, für die sich große Studios sonst kaum eingesetzt hätten. Das ist kein Nebenprojekt eines gelangweilten Stars, sondern die charakteristische Zweier-Bewegung: die eigene Strahlkraft nutzen, um anderen Raum zu verschaffen.</p>
          <p class="vb-intro">Auch sein Engagement nach dem Hurrikan Katrina fällt in dieses Muster: 2007 gründete er die <em>Make It Right Foundation</em>, die in New Orleans bezahlbare, umweltfreundliche Häuser für Familien baute, die durch die Flut ihr Zuhause verloren hatten. Der Pfau, der seine Sichtbarkeit einsetzt, um für andere etwas aufzubauen.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Vom Sexsymbol zum Charakterdarsteller</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Pitts Filmografie zeigt eine seltene Konsequenz darin, das eigene Image immer wieder zu unterlaufen: der fast zum Popanz stilisierte Frauenschwarm in <em>Interview mit einem Vampir</em>, gefolgt vom entstellten, besessenen Ermittler in <em>Seven</em>, gefolgt vom charismatischen Anarchisten in <em>Fight Club</em>. Statt sich auf einer erfolgreichen Rolle auszuruhen, suchte er wiederholt das Risiko der Selbstdemontage.</p>
          <p class="vb-intro">2020 erhielt er den Oscar als bester Nebendarsteller für seine Rolle als abgeklärter Stuntman in <em>Once Upon a Time in Hollywood</em> &ndash; nach fast drei Jahrzehnten im Geschäft eine späte, aber wichtige Bestätigung, dass hinter der Anziehungskraft substanzielles schauspielerisches Handwerk steckt. Als Produzent gewann er zudem selbst einen Oscar für <em>12 Years a Slave</em> (2014) als bester Film.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Drei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX3w2 ist ihre Fähigkeit, durch reine Präsenz zu wirken &ndash; und diese Wirkung, gereift, für andere einzusetzen statt nur für sich selbst. Pitts Produktionsarbeit und sein soziales Engagement zeigen genau diese Reifung: vom bewunderten Objekt zum aktiven Förderer.</p>
          <p class="vb-intro">Das Schicksalsmuster der Drei ist die <strong>Täuschung</strong> &ndash; das Verwechseln der eigenen Identität mit der eigenen Wirkung. Die öffentlich ausgetragene, hoch konfliktreiche Scheidung von Angelina Jolie ab 2016, begleitet von Vorwürfen häuslicher Gewalt, die Pitt bestritt, und einem jahrelangen Sorgerechtsstreit um die gemeinsamen Kinder, stellte genau diese Fassade auf eine harte Probe. Pitt hat öffentlich eingeräumt, in dieser Zeit zeitweise stark alkoholabhängig gewesen zu sein und danach nüchtern zu leben &ndash; ein seltenes Eingeständnis von Kontrollverlust bei einem Mann, dessen ganze öffentliche Identität lange auf makelloser Souveränität beruhte.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Von der Wirkung zur Echtheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Drei führt von der Frage <em>Wirke ich?</em> zur Erkenntnis <em>Ich bin &ndash; auch ohne diese Wirkung.</em> Pitt selbst hat in Interviews nach der Trennung von Jolie offen über Therapie, seine Nüchternheit und den Versuch gesprochen, sich nicht länger über äußere Anerkennung zu definieren.</p>
          <p class="vb-intro">Seine zunehmende Konzentration auf das Produzieren &ndash; auf Geschichten, die nicht ihn selbst ins Zentrum stellen, sondern andere Stimmen sichtbar machen &ndash; liest sich als genau diese Bewegung: vom Pfau, der bewundert werden will, zum Pfau, der sein Licht bewusst auf andere richtet.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx3", label:"SX3 – Der Pfau: Subtyp-Profil"},
        {route:"beruehmte-kai-pflaume", label:"Porträt: Kai Pflaume (SX3w2)"},
        {route:"beruehmte-jennifer-aniston", label:"Porträt: Jennifer Aniston (SX6w7) – ehemalige Ehefrau"},
        {route:"beruehmte-angelina-jolie", label:"Porträt: Angelina Jolie (SO1w2) – langjährige Partnerin, sechs gemeinsame Kinder"},
        {route:"beruehmte-heidi-klum", label:"Porträt: Heidi Klum (SX3w4)"},
      ])}
    </div>
  `);
}

export function charlesDarwinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-charles-darwin-portrait.jpg" alt="Charles Darwin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Charles Darwin</p>
        <p class="krim-portrait-typ">SE5w6 &middot; Selbsterhaltender Typ 5 mit Sechserfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Naturforscher, Begr\xfcnder der Evolutionstheorie, 1809&ndash;1882 &ndash; Tierentsprechung: Eule</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Eule, die zwanzig Jahre wartete</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Eule</strong> ist das Tier des selbsterhaltenden Typs 5 &ndash; ein Tier der n\xe4chtlichen Stille, der pr\xe4zisen Beobachtung und des tiefen Wissens. Sie jagt nicht im offenen Feld, sondern aus der Deckung heraus: unbewegt, geduldig, bis der Moment reif ist. Sie sieht Dinge, an denen andere achtlos vorbeigehen &ndash; und sie schweigt lange, bevor sie ruft.</p>
          <p class="vb-intro">Der britische Naturforscher Charles Darwin war diese Eule: Ein Mann, der eine der folgenreichsten Ideen der Wissenschaftsgeschichte in sich trug &ndash; und der sie zwanzig Jahre lang zur\xfcckhielt, bevor er sie ver\xf6ffentlichte. Nicht aus Zweifel an ihrer Richtigkeit, sondern aus einem tiefen Bed\xfcrfnis, jeden Einwand vorwegzunehmen, jedes Detail zu sichern, bevor er sich der Welt aussetzte. Kein Abenteurer, der die Sensation suchte. Ein Beobachter, der wartete, bis das Beobachtete unangreifbar war.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende F\xfcnf: Das Wissen als Burg</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende F\xfcnf (SE5)</strong> ist nach Naranjo der Subtyp, dem er den Namen <strong>Burg</strong> gab: Das eigene Territorium &ndash; das Wissen, der R\xfcckzugsort, die kontrollierte Umgebung &ndash; wird zur Festung gegen \xdcberw\xe4ltigung und Energieverlust. Die Leidenschaft der F\xfcnf ist der <strong>Geiz</strong> &ndash; das Horten von Energie, Aufmerksamkeit und Ressourcen, um sich vor dem Gef\xfchl zu sch\xfctzen, von der Welt \xfcberrannt zu werden.</p>
          <p class="vb-intro">Nach seiner f\xfcnfj\xe4hrigen Weltreise auf der <em>HMS Beagle</em> (1831&ndash;1836) zog sich Darwin fast vollst\xe4ndig zur\xfcck &ndash; erst nach London, dann 1842 endg\xfcltig nach Down House in der Grafschaft Kent, wo er die letzten vierzig Jahre seines Lebens verbrachte. Sein Alltag war streng getaktet: feste Zeiten zum Arbeiten, ein fester Rundweg durch den Garten, der <em>Sandwalk</em>, den er t\xe4glich mehrfach abschritt, um nachzudenken. Kaum Reisen, kaum gesellschaftliche Verpflichtungen. Die Burg war nicht Flucht vor der Welt, sondern die Bedingung daf\xfcr, sie \xfcberhaupt begreifen zu k\xf6nnen.</p>
          <p class="vb-intro">Auch seine chronischen, nie eindeutig diagnostizierten Beschwerden &ndash; \xdcbelkeit, Ersch\xf6pfung, Herzklopfen, die ihn \xfcber Jahrzehnte begleiteten &ndash; lassen sich als Teil dieses Musters lesen: Der K\xf6rper erzwang, was die Burg ohnehin verlangte &ndash; R\xfcckzug, Ruhe, Schutz vor Reizen. Ob organisch oder psychosomatisch: Das Ergebnis war ein Leben, das radikal auf das Wesentliche reduziert war.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserfl\xfcgel: Die Angst vor dem Aufruhr</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserfl\xfcgel (w6)</strong> bringt der selbsterhaltenden F\xfcnf ein waches Gesp\xfcr f\xfcr Gefahr, Autorit\xe4t und m\xf6gliche Konsequenzen. Die SE5w6 denkt nicht nur \xfcber ihre Erkenntnis nach &ndash; sie denkt \xfcber deren Folgen nach: Wer wird widersprechen? Wer wird sich angegriffen f\xfchlen? Was steht auf dem Spiel?</p>
          <p class="vb-intro">Darwin entwickelte seine Kerngedanken zur nat\xfcrlichen Selektion bereits um 1838 &ndash; ver\xf6ffentlicht wurden sie erst 1859, in <em>On the Origin of Species</em>. Die zwanzig Jahre dazwischen f\xfcllte er mit Absicherung: Er sammelte Beweise, pr\xfcfte Gegenargumente, korrespondierte mit Botanikern, Z\xfcchtern und Geologen in aller Welt, um seine Theorie von allen Seiten zu testen, bevor er sie preisgab. Er wusste, dass die Idee &ndash; der Mensch als Ergebnis eines blinden, ungerichteten Prozesses statt g\xf6ttlicher Sch\xf6pfung &ndash; die religi\xf6sen und gesellschaftlichen Grundfesten seiner Zeit ersch\xfcttern w\xfcrde. Auch seine tief gl\xe4ubige Frau Emma war Teil dieser Vorsicht: Er f\xfcrchtete, sie mit seinen Gedanken zu verletzen.</p>
          <p class="vb-intro">Erst als Alfred Russel Wallace ihm 1858 ein Manuskript mit einer nahezu identischen Theorie schickte, sah sich Darwin gezwungen zu handeln &ndash; die Ver\xf6ffentlichung wurde gemeinsam mit Wallace vor der Linnean Society vorgenommen. Der Sechserfl\xfcgel hatte ihn bis an den Rand des Verlusts gebracht: Fast h\xe4tte die Vorsicht ihm die Urheberschaft an seiner eigenen Lebensleistung gekostet.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von der Beagle zum Stammbaum des Lebens</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Reise auf der <em>HMS Beagle</em> war die einzige gro\xdfe Exposition in Darwins Leben &ndash; und sie lieferte das Rohmaterial f\xfcr alles Folgende: die Finken der Galapagos-Inseln, die fossilen Riesenfaultiere Argentiniens, die Korallenriffe des Pazifiks. Doch die eigentliche Arbeit begann erst danach, in der Stille von Down House: Jahrzehnte des Sortierens, Vergleichens, Schreibens. Bevor er sich an die gro\xdfe Theorie wagte, verbrachte er acht Jahre mit einer monografischen Untersuchung von Rankenfu\xdfkrebsen (Cirripedia) &ndash; Sicherheit durch v\xf6llige Beherrschung des Details, bevor er sich exponierte.</p>
          <p class="vb-intro"><em>On the Origin of Species</em> (1859) ver\xe4nderte die Wissenschaft f\xfcr immer: die Idee, dass sich Arten durch nat\xfcrliche Selektion \xfcber unvorstellbar lange Zeitr\xe4ume entwickeln, ohne Plan, ohne Ziel, allein durch das \xdcberleben des Angepassten. Es folgten <em>The Descent of Man</em> (1871), in dem er den Menschen selbst in diesen Prozess einordnete, und zahlreiche weitere Werke &ndash; \xfcber Ausdruck von Emotionen, \xfcber Regenw\xfcrmer, \xfcber Orchideen. Immer derselbe Blick: geduldig, detailversessen, unbestechlich genau.</p>
          <p class="vb-intro">Die schiere Menge an Beweismaterial, die Darwin zusammentrug, war selbst sein wichtigstes Argument. Kein Gedankenblitz, sondern ein Berg von Beobachtungen, so hoch aufget\xfcrmt, dass er kaum zu widerlegen war. Das ist die SE5w6 in ihrer produktivsten Form: Man \xfcberzeugt nicht durch Lautst\xe4rke, sondern durch die schiere Unangreifbarkeit dessen, was man gesammelt hat.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Die Eule in der Burg</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE5w6 liegt in ihrer F\xe4higkeit, eine Erkenntnis so lange zu pr\xfcfen und abzusichern, bis sie tr\xe4gt. Darwins Vorsicht war kein Z\xf6gern aus Schw\xe4che, sondern Sorgfalt aus Verantwortung: Eine Idee dieser Tragweite durfte nicht angreifbar in die Welt gehen. Das Ergebnis war eine Theorie, die \xfcber 150 Jahre sp\xe4ter noch immer das Fundament der Biologie bildet.</p>
          <p class="vb-intro">Das Schicksalsmuster der F\xfcnf ist der <strong>Geiz</strong> &ndash; bei der SE5 zeigt er sich als Neigung zum R\xfcckzug, als Schwierigkeit, sich der Welt und ihrer Kritik auszusetzen. Darwins zwanzigj\xe4hriges Z\xf6gern, seine chronische Kr\xe4nklichkeit, seine fast vollst\xe4ndige Abschottung von der \xf6ffentlichen wissenschaftlichen Debatte &ndash; all das schonte seine begrenzte Energie, kostete ihn aber auch beinahe die Anerkennung als Erstentdecker.</p>
          <p class="vb-intro">Der Sechserfl\xfcgel kann die Vorsicht in l\xe4hmende Angst kippen lassen &ndash; eine Welt voller Gegner, denen man erst dann entgegentreten darf, wenn man vollkommen unangreifbar ist. Bei Darwin blieb diese Angst produktiv, weil sie sich in Sorgfalt statt in Schweigen verwandelte &ndash; auch wenn Wallace ihm beinahe zuvorkam.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Eule, die den Stammbaum des Lebens zeichnete</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der F\xfcnf f\xfchrt von der Frage <em>Habe ich genug verstanden, um mich zu zeigen?</em> zur Erkenntnis <em>Ich muss nicht alles wissen, bevor ich etwas geben darf.</em> F\xfcr die SE5w6 bedeutet das, die Burg nicht aufzugeben, aber der eigenen Vorbereitung zu vertrauen &ndash; und den Moment des Zeigens nicht endlos hinauszuz\xf6gern.</p>
          <p class="vb-intro">Darwin hat diesen Schritt letztlich getan &ndash; wenn auch unter dem Druck von Wallaces Manuskript. Und als er ihn tat, ver\xe4nderte er das menschliche Selbstverst\xe4ndnis f\xfcr immer. Die Burg blieb: Down House, der t\xe4gliche Sandwalk, das zur\xfcckgezogene Leben. Aber aus dieser Burg heraus entstand ein Werk, das die Welt \xf6ffnete, statt sie zu verschlie\xdfen.</p>
          <p class="vb-intro">Charles Darwin starb am 19. April 1882 in Down House. Er wurde in der Westminster Abbey beigesetzt &ndash; neben Isaac Newton. Sein Werk lebt fort in jeder biologischen Erkenntnis seit ihm. Das ist die selbsterhaltende F\xfcnf mit Sechserfl\xfcgel. Das ist die Eule, die zwanzig Jahre wartete &ndash; und dann den Stammbaum des Lebens zeichnete.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      <p class="vb-intro">Die fast vierzig Jahre ungekl\xe4rter chronischer Beschwerden nach der Beagle-Reise \u2013 von \xdcbelkeit bis Ersch\xf6pfung \u2013 werden ausf\xfchrlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-charles-darwin">Krankheitsportr\xe4t zu Darwin</a> gedeutet.</p>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/se5", label:"SE5 \u2013 Die Eule: Subtyp-Profil"},
        {route:"beruehmte-vera-birkenbihl", label:"Portr\xe4t: Vera Birkenbihl (SE5w6)"},
        {route:"beruehmte-warren-buffett", label:"Portr\xe4t: Warren Buffett (SE5w6)"},
        {route:"krankheitsportraets-charles-darwin", label:"Krankheitsportr\u00e4t: Charles Darwin (SE5w6) \u2013 chronische Beschwerden"},
        {route:"krankheitsportraets-marie-curie", label:"Krankheitsportr\u00e4t: Marie Curie (SE5w6) \u2013 Parallele zu Darwins chronischer Erkrankung"},
      ])}
    </div>
  `);
}

export function davidBowiePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-david-bowie-portrait.jpg" alt="David Bowie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">David Bowie</p>
        <p class="krim-portrait-typ">SO1w2 &middot; Sozialer Typ 1 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Musiker &amp; K\u00fcnstler, 1947&ndash;2016 &ndash; Tierentsprechung: Gans</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Gans</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Gans</strong> ist das Tier der sozialen Eins &ndash; ein Tier, das wacht, warnt, und R\u00e4ume f\u00fcr die Gruppe \u00f6ffnet, die sie sonst nicht h\u00e4tte. Bei David Bowie zeigt sich das nicht als musikalische Formation, sondern als kulturelle: Er ging voran, damit andere folgen konnten. Jede seiner Verwandlungen &ndash; Ziggy Stardust, der Thin White Duke, sp\u00e4ter der zur\u00fcckhaltende Berliner Elektronik-Experimentator &ndash; \u00f6ffnete einen Raum, den vorher niemand betreten hatte, und den danach viele betreten durften.</p>
          <p class="vb-intro">Der britische Musiker David Bowie, geboren 1947 in London als David Robert Jones, war zun\u00e4chst m\u00e4\u00dfig erfolgreich unter mehreren Namen, bevor er Anfang der Siebzigerjahre mit einer androgynen, au\u00dferirdischen B\u00fchnenfigur die Popkultur ver\u00e4nderte. Das war keine Laune und kein reiner Selbstausdruck &ndash; es war eine gezielte, fast strategische \u00d6ffnung des \u00f6ffentlichen Raums f\u00fcr alles, was bis dahin dort keinen Platz hatte.</p>
          <p class="vb-intro">Die Gans fliegt nicht f\u00fcr sich allein. Sie ruft, damit die anderen die Formation finden. Bowie tat genau das &ndash; \u00fcber f\u00fcnf Jahrzehnte hinweg, in immer neuer Gestalt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Eins: Kunst als Auftrag an die Gesellschaft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Eins (SO1)</strong> richtet ihren Vollkommenheitsanspruch nicht prim\u00e4r auf sich selbst, sondern auf das Kollektiv &ndash; auf das, was in der Gesellschaft falsch l\u00e4uft und korrigiert werden muss. Naranjo beschrieb diesen Subtyp als besonders wortgewaltig im Vertreten eines Ideals, das \u00fcber die eigene Person hinausgeht. Bei Bowie war dieses Ideal die Aufl\u00f6sung starrer Grenzen: zwischen m\u00e4nnlich und weiblich, zwischen Genre und Genre, zwischen dem, was Popkultur zeigen durfte, und dem, was sie bislang verschwiegen hatte.</p>
          <p class="vb-intro">Sein \u00f6ffentliches Bekenntnis zur Bisexualit\u00e4t 1972, in einer Zeit, in der das f\u00fcr einen Mainstream-Musiker gesch\u00e4ftlich riskant und gesellschaftlich hochbrisant war, war keine spontane Regung privater Offenheit. Es war eine bewusste, fast p\u00e4dagogische Geste &ndash; ein Statement, das eine ganze Generation queerer Jugendlicher erstmals eine \u00f6ffentliche Identifikationsfigur gab. Die soziale Eins handelt selten aus reinem Selbstinteresse. Sie handelt, weil sie glaubt, dass die Gesellschaft dieses Vorbild braucht.</p>
          <p class="vb-intro">Auch musikalisch trieb ihn dieser Reformwille: Er nahm Einfl\u00fcsse aus Soul, elektronischer Avantgarde und Krautrock in den Mainstream-Pop, lange bevor genre\u00fcbergreifendes Arbeiten als normal galt. Grenzen einrei\u00dfen war f\u00fcr ihn kein \u00e4sthetisches Spiel &ndash; es war ein Prinzip.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: Gro\u00dfz\u00fcgigkeit gegen\u00fcber anderen K\u00fcnstlern</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> verleiht der sozialen Eins echte menschliche W\u00e4rme &ndash; die F\u00e4higkeit, nicht nur f\u00fcr ein Ideal zu k\u00e4mpfen, sondern anderen Menschen konkret zu geben. Bei Bowie zeigte sich das in seiner ungew\u00f6hnlichen Gro\u00dfz\u00fcgigkeit gegen\u00fcber anderen K\u00fcnstlern, in einer Branche, die f\u00fcr Konkurrenzdenken bekannt ist.</p>
          <p class="vb-intro">Er co-produzierte und schrieb ma\u00dfgeblich an Iggy Pops erster erfolgreicher Solokarriere mit, half Lou Reed nach dessen Trennung von der Band Velvet Underground zu einem kommerziellen Durchbruch, und f\u00f6rderte gezielt j\u00fcngere oder unbekanntere Musiker, deren Talent er erkannte &ndash; oft ohne selbst im Vordergrund stehen zu m\u00fcssen. Diese Rolle als Mentor und T\u00fcr\u00f6ffner zieht sich durch sein gesamtes Berufsleben.</p>
          <p class="vb-intro">Wegbegleiter beschrieben ihn immer wieder als \u00fcberraschend zug\u00e4nglich, neugierig auf die Arbeit anderer und gro\u00dfz\u00fcgig mit Anerkennung &ndash; ein deutlicher Kontrast zu dem distanzierten, unnahbaren Bild, das seine B\u00fchnenfiguren oft vermittelten. Die W\u00e4rme des Zweierfl\u00fcgels lebte hinter der Maske, nicht auf ihr.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO1w2 ist die kulturelle Wirkung selbst: kaum ein anderer K\u00fcnstler des 20. Jahrhunderts hat so nachhaltig ver\u00e4ndert, was in der Popkultur \u00fcberhaupt denkbar war &ndash; f\u00fcr Musik, Mode, Genderdarstellung und queere Sichtbarkeit gleicherma\u00dfen.</p>
          <p class="vb-intro">Der Schatten ist ebenso real. Die Leidenschaft der Eins ist der Zorn &ndash; und Mitte der Siebzigerjahre, auf dem H\u00f6hepunkt eines schweren Kokainmissbrauchs w\u00e4hrend seiner Zeit als &bdquo;Thin White Duke&ldquo;, \u00e4u\u00dferte sich das bei Bowie in einer der dunkelsten Episoden seiner Karriere: mehrdeutige, faschismusnahe \u00f6ffentliche Aussagen und Gesten, die er sp\u00e4ter wiederholt und unmissverst\u00e4ndlich als Ausdruck seines damaligen Drogenkonsums und seines psychisch instabilen Zustands bezeichnete und \u00f6ffentlich bereute. Er selbst sprach sp\u00e4ter davon, sich an weite Teile dieser Zeit kaum noch erinnern zu k\u00f6nnen.</p>
          <p class="vb-intro">Diese Episode zeigt die Schattenseite der sozialen Eins in ihrer entgleisten Form: Der missionarische Impuls, eine Botschaft an das Kollektiv zu senden, kann sich, au\u00dfer Kontrolle geraten, gegen genau die Werte richten, f\u00fcr die man eigentlich steht. Bowies sp\u00e4tere, jahrzehntelange konsequente Distanzierung von dieser Phase ist selbst ein Beleg f\u00fcr die R\u00fcckkehr der SO1 zu ihrem eigentlichen Ideal.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Von der Rolle zur Ruhe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der sozialen Eins f\u00fchrt von der st\u00e4ndigen Suche nach der n\u00e4chsten korrigierenden Botschaft an die Welt zu einer stilleren, integrierteren Form von Wirkung &ndash; nicht weniger bedeutsam, aber weniger performativ. Bowies sogenannte Berliner Trilogie Ende der Siebzigerjahre, entstanden w\u00e4hrend seiner bewussten Abkehr von Kokain und \u00f6ffentlichem Rollenspiel, markiert genau diesen Wendepunkt: introspektiver, elektronischer, weniger auf Wirkung nach au\u00dfen ausgelegt.</p>
          <p class="vb-intro">In seinen letzten Lebensjahren, zur\u00fcckgezogen in New York, verheiratet, Vater, arbeitete er weiter &ndash; leiser, aber ungebrochen konsequent, bis zu seinem letzten Album, das zwei Tage vor seinem Tod 2016 erschien. Die Gans, die ihr Leben lang f\u00fcr die Formation anderer gerufen hat, fand am Ende einen eigenen, sehr pers\u00f6nlichen Frieden.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      <p class="vb-intro">Die 18 im Verborgenen durchlittenen Monate mit Leberkrebs und ihre Verwandlung in das Album <em>Blackstar</em> werden ausf\u00fchrlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-david-bowie">Krankheitsportr\u00e4t zu Bowie</a> gedeutet.</p>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so1", label:"SO1 \u2013 Subtyp-Profil"},
        {route:"beruehmte-freddie-mercury", label:"Freddie Mercury im Vergleich"},
        {route:"krankheitsportraets-david-bowie", label:"Krankheitsportr\u00e4t: David Bowie (SO1w2)"},
      ])}
    </div>
  `);
}

export function douglasRushkoffPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-douglas-rushkoff-portrait.jpg" alt="Douglas Rushkoff – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Douglas Rushkoff</p>
        <p class="krim-portrait-typ">SO2w1 &middot; Sozialer Typ 2 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">US-amerikanischer Medientheoretiker &amp; Autor, geb. 1961 &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei &ndash; ein Tier, das seine Wärme nicht auf Einzelne beschränkt, sondern der ganzen Meute gilt, und das warnend anschlägt, wenn dem Rudel Gefahr droht. Douglas Rushkoff hat genau diese Rolle in der digitalen Kultur seit den 1990er-Jahren übernommen: als einer der ersten und lautstärksten Mahner davor, dass Technologie dem Menschen dienen soll &ndash; und nicht umgekehrt.</p>
          <p class="vb-intro">Douglas Rushkoff wurde am 18. Februar 1961 in New York City geboren, als Sohn einer psychiatrischen Sozialarbeiterin und eines Krankenhausverwalters. Nach seinem Studium in Princeton, einem MFA am California Institute of the Arts und einer Promotion an der Universität Utrecht zur Medienkompetenz wurde er in den frühen 1990er-Jahren zu einer zentralen Figur der Cyberpunk- und Cyberdelic-Bewegung &ndash; ein früher Beobachter dessen, was das Internet mit der Gesellschaft machen würde.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Fürsorge für die Menschheit im digitalen Zeitalter</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Zwei (SO2)</strong> lenkt ihre Fürsorge nicht auf einzelne Beziehungen, sondern auf gesellschaftliche Wirksamkeit. Naranjo nannte diesen Subtyp <em>Ambition</em>: den Antrieb, durch Einfluss und öffentliche Wirksamkeit für ein ganzes Kollektiv zu sorgen. Rushkoffs gesamtes Werk – über 25 Bücher zu Medien, Technologie und Kultur – ist von genau diesem Antrieb getragen: Begriffe wie <em>Digital Native</em>, <em>viral gehen</em> oder <em>Screenager</em>, die er selbst prägte, sollten der Öffentlichkeit Werkzeuge geben, um die eigene digitale Umwelt zu verstehen, statt ihr hilflos ausgeliefert zu sein.</p>
          <p class="vb-intro">2019 gründete er mit <em>Team Human</em> – Buch und Podcast zugleich – ein regelrechtes Manifest kollektiver Zugehörigkeit: Der Mensch sei ein zutiefst soziales Wesen, das seine größten Ziele nur gemeinsam erreiche. Kein Zufall, dass ausgerechnet die soziale Zwei mit Einserflügel diesen Titel wählte – Zugehörigkeit zum <em>Team Mensch</em> als Gegenentwurf zu einer Welt, in der Algorithmen Menschen gegeneinander ausspielen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Warnung als moralische Pflicht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der sozialen Zwei eine innere Achse aus Prinzipientreue und dem Bedürfnis, das Richtige zu benennen, auch wenn es unbequem ist. Am deutlichsten zeigte sich das 2022, als fünf Milliardäre Rushkoff in ein abgelegenes Luxusresort einluden, um ihn – als bekannten Zukunftsdenker – nach Überlebensstrategien für den Zusammenbruch der Zivilisation zu befragen: befestigte Bunker, private Sicherheitskräfte, Fluchtinseln.</p>
          <p class="vb-intro">Statt den Auftraggebern zu liefern, was sie hören wollten, machte Rushkoff aus der Begegnung sein Buch <em>Survival of the Richest</em> – eine öffentliche Abrechnung mit der Fluchtlogik der Superreichen, verbunden mit der klaren These, dass echte Sicherheit nicht durch Abschottung, sondern nur durch eine Gesellschaft entsteht, in der man einander besser behandelt. Der Einserflügel ließ ihn das Vertrauen der Mächtigen aufs Spiel setzen, um stattdessen der Öffentlichkeit die Wahrheit zu sagen.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO2w1 liegt in der Fähigkeit, komplexe gesellschaftliche Entwicklungen früh zu erkennen und in klare, zugängliche Sprache zu übersetzen, bevor die breite Öffentlichkeit die Tragweite überhaupt erahnt. Rushkoffs frühe Warnungen vor der Kommerzialisierung des Internets – festgemacht an Meilensteinen wie dem Netscape-Börsengang 1995 und der Übernahme von AOL durch Time Warner 2000 – erwiesen sich rückblickend als bemerkenswert treffsicher.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, für das Wohl anderer unentbehrlich zu sein. Bei der SO2w1 kann sich das als beständige Position des moralisch klarsichtigen Mahners festigen, dessen wiederholter Rückzug aus großen Plattformen – 2013 verließ Rushkoff Facebook, 2023 die Plattform X, jeweils aus Datenschutzgründen – auch zur demonstrativen Geste werden kann: der öffentliche Beweis der eigenen Prinzipientreue, nicht nur ihre stille Ausübung.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Vom Cyberpunk-Chronisten zum Mahner für das Menschliche</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Von <em>Cyberia</em> (1994), seiner frühen Dokumentation der Cyberkultur, über <em>Media Virus</em> (1995) und <em>Coercion</em> (1999, ausgezeichnet mit dem Marshall-McLuhan-Award) bis zu <em>Present Shock</em>, <em>Team Human</em> und <em>Survival of the Richest</em> zieht sich ein roter Faden durch Rushkoffs Werk: die Frage, wie Menschen inmitten immer schnellerer technologischer Umbrüche ihre Menschlichkeit und ihre Verbundenheit zueinander bewahren können. Heute lehrt er als Professor für Medientheorie und digitale Ökonomie am Queens College der City University of New York.</p>
          <p class="vb-intro">Der Golden Retriever bellt nicht aus Angst, sondern aus Fürsorge – er warnt das Rudel, weil es ihm wichtig ist. Rushkoffs jahrzehntelange Warnrufe waren nie Technikfeindlichkeit um ihrer selbst willen, sondern der beständige Versuch, eine ganze Gesellschaft daran zu erinnern, dass Technologie dem Menschlichen dienen soll &ndash; und nicht umgekehrt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-barack-obama", label:"Portrait: Barack Obama (SO2w1)"},
        {route:"beruehmte-bob-marley", label:"Portrait: Bob Marley (SO2w1)"},
      ])}
    </div>
  `);
}

export function fjodorDostojewskiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-fjodor-dostojewski-portrait.jpg" alt="Fjodor Dostojewski – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Fjodor Dostojewski</p>
        <p class="krim-portrait-typ">SE6w5 &middot; Selbsterhaltender Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Russischer Schriftsteller, 1821&ndash;1881 &ndash; Tierentsprechung: Kaninchen</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Kaninchen, das dem Tod ins Gesicht sah</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Kaninchen</strong> ist das Tier des selbsterhaltenden Typs 6 &ndash; wachsam, liebenswert, anpassungsf\u00e4hig. Es l\u00e4uft nicht auf Konfrontation zu. Es h\u00f6rt, bevor es sich bewegt. Es sucht Sicherheit in N\u00e4he, in Bindung, in dem, was vertraut ist &ndash; und bleibt selbst in Ausnahmesituationen erstaunlich funktionsf\u00e4hig, weil es die Gefahr l\u00e4ngst kalkuliert hat, bevor sie eintraf.</p>
          <p class="vb-intro">Der russische Schriftsteller Fjodor Michailowitsch Dostojewski wurde 1821 in Moskau als Sohn eines Milit\u00e4rarztes geboren, der von seinen eigenen Leibeigenen ermordet worden sein soll, als Fjodor 17 war &ndash; ein Ereignis, das während seines ganzen Lebens wie ein Schatten \u00fcber ihm lag. Schon in jungen Jahren litt er an Epilepsie, einer Krankheit, die ihn ein Leben lang begleitete und die er sp\u00e4ter in mehreren seiner Figuren verarbeitete.</p>
        </blockquote>

        <h2 class="vb-section">2. Die Scheinhinrichtung: W\u00e4rme als \u00dcberlebensstrategie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte den selbsterhaltenden Typ 6 die <strong>W\u00e4rme</strong> &ndash; weil dieser Subtyp Sicherheit nicht durch Konfrontation, sondern durch menschliche N\u00e4he und Zugeh\u00f6rigkeit sucht. Die SE6 bindet sich an Menschen und Gemeinschaften, denen sie vertrauen kann, und reagiert auf existenzielle Bedrohung nicht mit Angriff, sondern mit dem verzweifelten Versuch, Halt zu finden.</p>
          <p class="vb-intro">1849 wurde Dostojewski wegen der Mitgliedschaft im linksliberalen Petraschewski-Zirkel verhaftet und zum Tode verurteilt. Am 22. Dezember 1849 stand er mit anderen Verurteilten auf dem Semjonow-Exerzierplatz in St. Petersburg vor dem Erschie\u00dfungskommando &ndash; erst im allerletzten Moment traf ein Bote des Zaren mit der Nachricht ein, das Urteil sei in eine Verbannung nach Sibirien umgewandelt worden. Ein Mitverurteilter verlor in diesem Moment den Verstand. Dostojewski selbst beschrieb sp\u00e4ter, wie sich in diesen letzten Sekunden alles auf die Frage zuspitzte, was ein Menschenleben wert ist &ndash; ein Erlebnis, das sein gesamtes sp\u00e4teres Werk durchzieht.</p>
          <p class="vb-intro">Es folgten vier Jahre Zwangsarbeit im sibirischen Straflager Omsk, in Ketten, unter Kriminellen, ohne B\u00fccher au\u00dfer der Bibel &ndash; und anschlie\u00dfend Jahre als einfacher Soldat im Exil. Die SE6 sucht in der Krise nicht die Flucht nach vorn, sondern eine Bindung, die tr\u00e4gt: Dostojewski fand sie in genau dieser Bibel, die zur einzigen Konstante seiner Straflagerjahre wurde.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Die Tiefe unter der Angst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt dem selbsterhaltenden Sechser analytische Tiefe und die F\u00e4higkeit, sich in eine Frage zu vergraben, bis der Boden unter ihr sichtbar wird. Die SE6w5 sucht Sicherheit nicht nur in Menschen, sondern auch im Verstehen &ndash; im Durchdenken jeder m\u00f6glichen Konsequenz, jeder moralischen Verzweigung, jeder Ausrede des menschlichen Gewissens.</p>
          <p class="vb-intro">Genau das ist die Struktur von Dostojewskis gro\u00dfen Romanen: <em>Schuld und S\u00fchne</em> (1866) seziert \u00fcber Hunderte Seiten die inneren Rechtfertigungen eines M\u00f6rders, bevor auch nur ein Gericht ihn zur Verantwortung zieht. <em>Die Br\u00fcder Karamasow</em> (1880) verhandelt Gottesglaube, Zweifel und Vatermord als philosophisches System, nicht als blo\u00dfe Handlung. Der F\u00fcnferfl\u00fcgel verwandelt die Angst der Sechs in ein Instrument der Erkenntnis: Wer jede M\u00f6glichkeit durchdacht hat, ist vor keiner M\u00f6glichkeit mehr \u00fcberrascht.</p>
          <p class="vb-intro">Diese Tiefe entstand auch aus finanzieller Not: Um Spielschulden zu begleichen, diktierte Dostojewski 1866 den Roman <em>Der Spieler</em> in nur 26 Tagen einer jungen Stenografin, Anna Grigorjewna Snitkina, die er kurz darauf heiratete. Die SE6w5 arbeitet unter Druck am pr\u00e4zisesten &ndash; die Deadline wird zur Klammer, die das Chaos der Angst in Form zwingt.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Spielsucht: Kontrolle \u00fcber das Unkontrollierbare</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">\u00dcber ein Jahrzehnt lang war Dostojewski der Roulette-Sucht verfallen &ndash; in Wiesbaden, Baden-Baden, Homburg verspielte er wiederholt nicht nur eigenes, sondern auch geliehenes Geld, verpf\u00e4ndete den Schmuck seiner Frau, schrieb verzweifelte Bettelbriefe an Verleger und Freunde. Erst Anfang der 1870er Jahre, nach Jahren des R\u00fcckfalls, gelang ihm der endg\u00fcltige Ausstieg &ndash; ma\u00dfgeblich getragen durch die Stabilit\u00e4t, die Anna ihm gab.</p>
          <p class="vb-intro">Das ist die Schattenseite der SE6w5 unverfälscht: die Suche nach einem System, das Sicherheit garantiert &ndash; und die Anziehungskraft des Roulette-Tisches, an dem genau diese Illusion von Kontrolle \u00fcber den puren Zufall auf die Probe gestellt wird. Erst die reale Bindung, nicht die imaginierte Systematik, brachte am Ende die Sicherheit, die er suchte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Glaube gegen Verzweiflung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE6w5 ist ihre F\u00e4higkeit, aus existenzieller Angst <strong>tiefe Wahrhaftigkeit</strong> zu gewinnen. Dostojewskis Werk ist deshalb auch heute noch so kraftvoll, weil er die Angst, den Zweifel und die Sehnsucht nach Halt nicht theoretisch beschreibt, sondern selbst durchlitten hat &ndash; vor dem Erschie\u00dfungskommando, im Straflager, am Spieltisch. Seine Figuren zweifeln, weil er selbst gezweifelt hat, und finden Glauben, weil er ihn sich m\u00fchsam erk\u00e4mpfte.</p>
          <p class="vb-intro">Der Schatten: Die Leidenschaft der Sechs ist die <strong>Angst</strong>, und bei der SE6w5 kann sie sich in Misstrauen, politischem Konservatismus und einer fast paranoiden Weltsicht entladen. Dostojewskis sp\u00e4tere Schriften enthalten auch antisemitische und nationalistische T\u00f6ne &ndash; die dunkle Kehrseite eines Menschen, der Sicherheit zunehmend in enger definierter Zugeh\u00f6rigkeit suchte, in Nation und orthodoxem Glauben, statt im offenen Zweifel seiner gro\u00dfen Romane.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Kaninchen, das die Angst zur Literatur machte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der l\u00e4hmenden Angst zur <strong>Tapferkeit</strong> &ndash; nicht zur Abwesenheit der Angst, sondern zur F\u00e4higkeit, trotz ihrer zu handeln. Dostojewski fand diesen Mut nie durch das Verschwinden seiner \u00c4ngste, sondern dadurch, dass er sie zu Ende dachte, bis sie zu Literatur wurden, die Generationen von Lesern half, die eigene Angst zu verstehen.</p>
          <p class="vb-intro">Er starb 1881 in St. Petersburg, gefeiert als einer der gr\u00f6\u00dften Schriftsteller Russlands, vers\u00f6hnt mit dem Glauben, den er sich in Sibirien zur\u00fcckerobert hatte. Das Kaninchen, das einst vor dem Erschie\u00dfungskommando stand, hatte gelernt: Sicherheit entsteht nicht dadurch, dass man der Angst entkommt &ndash; sondern dadurch, dass man ihr so tief ins Gesicht sieht, dass sie zur Wahrheit wird, die man mit anderen teilen kann.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      <p class="vb-intro">Die lebenslange Epilepsie und ihre direkte Verarbeitung in Figuren wie F\u00fcrst Myschkin werden ausf\u00fchrlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-fjodor-dostojewski">Krankheitsportr\u00e4t zu Dostojewski</a> gedeutet.</p>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se6", label:"SE6 \u2013 Das Kaninchen: Subtyp-Profil"},
        {route:"beruehmte-sundar-pichai", label:"Portr\xe4t: Sundar Pichai (SE6w5)"},
        {route:"beruehmte-herbert-kickl", label:"Portr\xe4t: Herbert Kickl (SE6w5)"},
        {route:"krankheitsportraets-fjodor-dostojewski", label:"Krankheitsportr\u00e4t: Fjodor Dostojewski (SE6w5)"},
        {route:"bibel-zachaeus", label:"Bibel-Porträt: Zachäus (SE6w5)"},
      ])}
    </div>
  `);
}

export function genesisPOrridgePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-genesis-p-orridge-portrait.jpg" alt="Genesis P-Orridge" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Genesis P-Orridge</p>
        <p class="krim-portrait-typ">SX8w9 &middot; Sexueller Typ 8 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Musiker, Performance-K\u00fcnstler &amp; Okkultist, 1950&ndash;2020 &ndash; Tierentsprechung: Krokodil</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Krokodil</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Krokodil</strong> ist das Tier des sexuellen Typs 8 &ndash; das \u00e4lteste Raubtier der Erde, urt\u00fcmlich, geduldig und von einer Beharrlichkeit, die Jahrmillionen \u00fcberdauert hat. Es ver\u00e4ndert sich nicht, weil es keinen Grund dazu sieht. Es liegt im Wasser, fast reglos, und wartet. Wenn es zuschnappt, gibt es kein Zur\u00fcck mehr.</p>
          <p class="vb-intro">Der britische K\u00fcnstler Genesis P-Orridge war dieses Krokodil &ndash; ein Wesen, das in den Tiefen der Gegenkultur lauerte und mit einem Werk zuschnappte, das die Welt der Kunst, der Musik und des Bewusstseins f\u00fcr immer ver\u00e4ndert hat. Als Gr\u00fcnder von Throbbing Gristle schuf Genesis 1975 mit Industrial Music ein Genre, das Jahrzehnte vor seiner Zeit war. Als Gr\u00fcnder der COUM Transmissions provozierte Genesis das Establishment so grundlegend, dass ein britischer Abgeordneter die Gruppe im Parlament als "Feinde der Gesellschaft" bezeichnete. Das Krokodil muss nicht laut sein. Es muss nur da sein &ndash; und zuschlagen, wenn der Moment kommt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Acht: Besitzergreifung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Acht (SX8)</strong> nannte Naranjo <em>Besitzergreifung</em> &ndash; einen Hunger, der sich auf Menschen, Ideen und Erfahrungen richtet und keine halben Sachen kennt. Die SX8 will das Ganze: die vollst\u00e4ndige Verschmelzung, die totale Transformation, die bedingungslose Intensit\u00e4t. Sie ist das Feuer, das nicht kontrolliert werden kann &ndash; nur gelebt.</p>
          <p class="vb-intro">Bei Genesis P-Orridge zeigte sich das im Projekt Pandrogeny: die freiwillige k\u00f6rperliche Verschmelzung mit der Partnerin Lady Jaye Breyer durch aufeinander abgestimmte chirurgische Ver\u00e4nderungen, bis beide Teile eines einzigen Wesens wurden. Das war kein Kunstprojekt im gew\u00f6hnlichen Sinn. Das war SX8-Besitzergreifung in ihrer radikalsten Form: Ich will nicht neben dir sein &ndash; ich will mit dir eins werden. Die Grenze zwischen Selbst und dem anderen sollte vollst\u00e4ndig aufgel\u00f6st werden.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Die ruhende Urgewalt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel</strong> gibt der sexuellen Acht eine besondere Qualit\u00e4t: Geduld, Tiefe und eine fast meditative Beharrlichkeit, die die pure Explosivit\u00e4t der SX8w7 erdet. Die <strong>SX8w9</strong> ist nicht weniger intensiv &ndash; aber die Intensit\u00e4t sitzt tiefer. Sie kommt nicht als Explosion, sondern als konstante, unaufh\u00f6rliche Str\u00f6mung, die alles mitrei\u00dft, was nicht fest verankert ist.</p>
          <p class="vb-intro">Genesis P-Orridge hat nie laut um Aufmerksamkeit gek\u00e4mpft. Das Werk sprach f\u00fcr sich. \u00dcber Jahrzehnte, durch immer neue Formen &ndash; Noise, Industrial, Acid House, Okkultuismus, k\u00f6rperliche Transformation &ndash; blieb Genesis sich selbst treu: der Suche nach dem, was jenseits der gesellschaftlich gesetzten Grenzen liegt. Der Neunerfl\u00fcgel gab dieser Suche Ausdauer. Nicht der Sprint des Revoluzzers, sondern der lange Atem des Entdeckers.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Wollust als Grenzaufl\u00f6sung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Acht hei\u00dft <strong>Wollust</strong> &ndash; nicht im engeren Sinn, sondern als Hunger nach dem Ungefilterten, nach dem direkten Kontakt mit dem, was ist. F\u00fcr die sexuelle Acht richtet sich dieser Hunger auf die Person, den K\u00f6rper, die Begegnung &ndash; und auf das, was zwischen Menschen entsteht, wenn alle Konventionen fallen.</p>
          <p class="vb-intro">Genesis P-Orridge hat diese Wollust auf die Grenzen des Bewusstseins selbst gerichtet: durch Rituale, durch Okkultismus, durch die k\u00f6rperliche Kunst, durch Psychedelik, durch die Aufl\u00f6sung der Grenze zwischen m\u00e4nnlich und weiblich. Der in Manchester geborene Neil Megson wurde zu Genesis, dann zu einer Pandrogyne, die keine Kategorien mehr brauchte. Wollust als Methode der Selbst\u00fcberschreitung &ndash; und als konsequenteste Form von Freiheit.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: Die Weigerung, normal zu sein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Genesis P-Orridge hinterlassen hat, ist eine Einladung: die radikale Frage, warum das, was als normal gilt, unhinterfragt bleiben soll. Throbbing Gristle hat bewiesen, dass Musik nicht sch\u00f6n sein muss, um tief zu ber\u00fchren. Die Pandrogeny hat gezeigt, dass Identit\u00e4t kein Schicksal ist. Das COUM-Werk hat dem Kunstbetrieb einen Spiegel vorgehalten, den dieser nicht m\u00f6gen wollte.</p>
          <p class="vb-intro">Das Geschenk der SX8w9 ist diese unnachgiebige Authentizit\u00e4t: die Weigerung, sich anzupassen, und die Bereitschaft, daf\u00fcr jeden Preis zu zahlen. Das Krokodil passt sich nicht an. Es ist, was es ist &ndash; seit Jahrmillionen. Genesis P-Orridge war genauso: kompromisslos, unverwechselbar, von einer Tiefe, die erst im R\u00fcckblick ganz sichtbar wird.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx8", label:"SX8 \u2013 Das Krokodil: Subtyp-Profil"},
        {route:"beruehmte-donald-trump", label:"Portr\u00e4t: Donald J. Trump (SX8w7)"},
        {route:"krankheitsportraets-genesis-p-orridge", label:"Krankheitsportr\u00e4t: Genesis P-Orridge (SX8w9) \u2013 Leuk\u00e4mie"},
      ])}
    </div>
  `);
}

export function hansDietrichGenscherPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-hans-dietrich-genscher-portrait.jpg" alt="Hans-Dietrich Genscher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hans-Dietrich Genscher</p>
        <p class="krim-portrait-typ">SE9w8 &middot; Selbsterhaltender Typ 9 mit Achterfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Au\u00dfenminister &amp; Vizekanzler 1974&ndash;1992, 1927&ndash;2016 &ndash; Tierentsprechung: Elefant</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Elefant</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Elefant</strong> ist das Tier des Typs 9 &ndash; und Hans-Dietrich Genscher war dieser Elefant. Das Tier mit dem l\u00e4ngsten Ged\u00e4chtnis der Natur, das Tier, das nie aufh\u00f6rt zu lernen, das Tier, das sich an jeden Weg, jede Wasserstelle, jeden Verb\u00fcndeten und jeden Verrat erinnert. Und das dabei ruhig bleibt. Immer ruhig. Auch wenn es l\u00e4ngst wei\u00df, was gespielt wird.</p>
          <p class="vb-intro">18 Jahre au\u00dfenpolitisches Gewicht, 23 Jahre als bestimmende Kraft der deutschen Diplomatie: Genscher war der l\u00e4ngstdienende Au\u00dfenminister der Bundesrepublik. Wer in diesen Jahrzehnten mit Deutschland verhandeln wollte, verhandelte mit ihm &ndash; in Bonn, Genf, New York, Moskau. Der Elefant beh\u00e4lt seine Ruhe. Er beh\u00e4lt den \u00dcberblick. Und er bewegt sich langsam &ndash; aber er h\u00f6rt nie auf, sich vorw\u00e4rts zu bewegen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Neun: Appetit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Neun (SE9)</strong> nannte Naranjo <em>Appetit</em>: Frieden durch Beharrlichkeit, durch das Einleben in das, was ist, durch die F\u00e4higkeit, im Bestehenden Sicherheit zu finden &ndash; ohne gro\u00dfe Gerichtsrede, ohne Showdown. Die SE9 arbeitet durch Kontinuit\u00e4t. Ihr Instrument ist die Ausdauer &ndash; nicht der Coup.</p>
          <p class="vb-intro">Genschers politische Karriere ist das Musterbeispiel dieser Kontinuit\u00e4t: 1969 Innenminister, 1974 Au\u00dfenminister und Vizekanzler, 1992 R\u00fccktritt &ndash; nach 23 Jahren im Amt. Dazwischen: die Begleitung der Ostvertr\u00e4ge, die KSZE-Schlussakte von Helsinki, der Doppelbeschluss, die Abr\u00fcstungsverhandlungen, die Vereinigung. Keine Karriere der gro\u00dfen Br\u00fcche, sondern eine Karriere der geduldigen Akkumulation &ndash; Jahr f\u00fcr Jahr, Verhandlung f\u00fcr Verhandlung, Schritt f\u00fcr Schritt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterfl\u00fcgel: Die Kraft hinter der Stille</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Achterfl\u00fcgel</strong> verleiht der selbsterhaltenden Neun eine besondere Qualit\u00e4t: Durchsetzungskraft, Willenst\u00e4rke und eine ruhige, aber unverkennbare Entschlossenheit, die sich nicht wegdr\u00e4ngen l\u00e4sst. Die <strong>SE9w8</strong> ist keine passive Neun. Sie ist geduldig &ndash; aber sie ist nicht schwach. Wenn der Moment kommt, handelt sie. Und dann handelt sie entschlossen.</p>
          <p class="vb-intro">Genscher hat diesen Fl\u00fcgel in Prag gezeigt. Am 30. September 1989 trat er auf den Balkon der deutschen Botschaft in Prag und erkl\u00e4rte den dort gestrandeten DDR-B\u00fcrgern, dass ihre Ausreise genehmigt sei. Er konnte den Satz nicht zu Ende sprechen &ndash; der Jubel \u00fcbert\u00f6nte ihn. Es war ein Moment, der Geschichte gemacht hat &ndash; und er war m\u00f6glich, weil Genscher monatelang hinter den Kulissen verhandelt hatte, unaufgeregt, beharrlich, mit der Kraft der Neun und der Entschlossenheit der Acht.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Tr\u00e4gheit als Beharren</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Neun hei\u00dft <strong>Tr\u00e4gheit</strong> &ndash; das Beharren im Vertrauten, das Meiden des offenen Konflikts, die Tendenz, Positionen zu umrunden statt zu konfrontieren. F\u00fcr Genscher war das zugleich seine gr\u00f6\u00dfte St\u00e4rke: Er konnte beide Seiten des Eisernen Vorhangs gespr\u00e4chsbereit halten, weil er keine Seite zum Feind erkl\u00e4rte. Er konnte mit Moskau reden und mit Washington. Er konnte Br\u00fccken bauen, weil er nie Br\u00fccken abbrach.</p>
          <p class="vb-intro">Die Kehrseite war der Vorwurf, zu lange zu bleiben, zu lange das Spiel mitzuspielen, zu lange Kompromisse zu suchen, wo Klarheit n\u00f6tig gewesen w\u00e4re. Genscherismus wurde zum Begriff &ndash; mal Lob, mal Kritik. Aber er hat \u00fcberlebt. Die meisten seiner Kritiker nicht.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: Der Br\u00fcckenmensch</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Hans-Dietrich Genscher der deutschen Politik gegeben hat, ist die Erkenntnis, dass Diplomatie keine Schw\u00e4che ist, sondern die h\u00f6chste Form der St\u00e4rke. Er hat bewiesen, dass man ohne Krieg Grenzen verschieben kann &ndash; wenn man geduldig genug ist, klug genug und bereit ist, jeden Schritt mehrfach zu gehen. Die deutsche Einheit ist nicht durch Konfrontation entstanden. Sie ist durch jahrzehntelange Vertrauensarbeit entstanden &ndash; an der Genscher entscheidenden Anteil hatte.</p>
          <p class="vb-intro">Das Geschenk der SE9w8 ist dieser Br\u00fckenmensch: jemand, der die Seiten kennt, der zwischen ihnen steht, der nicht die lauteste Stimme ist &ndash; aber die, auf die man h\u00f6rt, wenn es darauf ankommt. Der Elefant vergisst nichts. Und er l\u00e4uft nie davon.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se9", label:"SE9 \u2013 Der Elefant: Subtyp-Profil"},
        {route:"beruehmte-baerbel-bas", label:"Portr\u00e4t: B\u00e4rbel Bas (SE9w1)"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Krankheitsportr\u00e4t: Hans-Dietrich Genscher (SE9w8) \u2013 Herzleiden"},
      ])}
    </div>
  `);
}

export function hundertwasserPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-hundertwasser-portrait.jpg" alt="Friedensreich Hundertwasser" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedensreich Hundertwasser</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexueller Typ 9 mit Einserfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Maler &amp; Architekt, 1928&ndash;2000 &ndash; Tierentsprechung: Faultier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Faultier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Faultier</strong> ist das Tier der sexuellen Neun &ndash; kein Symbol f\u00fcr Tr\u00e4gheit, sondern f\u00fcr eine Existenzweise, die sich der Umgebung so vollst\u00e4ndig anverwandelt, dass die Grenze zwischen Wesen und Lebensraum verschwimmt. Faultiere bewegen sich langsam, weil Eile der Verschmelzung im Weg steht &ndash; und ihr Fell tr\u00e4gt eigene Algen und \u00d6kosysteme: Das Tier wird buchst\u00e4blich zum Lebensraum f\u00fcr anderes Leben. Kein Zufallstier f\u00fcr einen Mann, der sein Haus mit Erde bedecken und B\u00e4ume auf jedem Balkon wachsen lassen wollte.</p>
          <p class="vb-intro">Hundertwassers gesamtes Werk ist der Versuch, diese Verschmelzung sichtbar zu machen: H\u00e4user ohne gerade Linie, D\u00e4cher, die Wiesen tragen, Fassaden, die wie Baumrinde wachsen. Wo andere Architektur gegen die Natur behaupten, lie\u00df er sie mit der Natur verschmelzen &ndash; das Faultier, das keine Grenze zwischen sich und seinem Baum kennt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Neun: Der Verst\u00e4rkungstyp der Verschmelzung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Neun (SX9)</strong> gilt in der Subtypenlehre als <em>Verst\u00e4rkungstyp</em> der Neun: W\u00e4hrend die selbsterhaltende Neun sich in Gewohnheiten und Komfort verliert und die soziale Neun sich in Gruppen und Aufgaben aufl\u00f6st, sucht die SX9 die Verschmelzung in ihrer intensivsten, unmittelbarsten Form &ndash; mit einem einzigen Menschen, einem Ideal oder, wie bei Hundertwasser, mit der Natur selbst. Naranjo beschreibt diesen Subtyp als denjenigen, der die neunertypische Tr\u00e4gheit am deutlichsten zeigt &ndash; wie ein Faultier. Und doch ist die Sehnsucht nach Verschmelzung so stark, dass sie ihn trotz dieser Passivit\u00e4t immer wieder ins konkrete Handeln treibt, angetrieben von seinem Ideal &ndash; bei Hundertwasser: der Natur als Gegenpol.</p>
          <p class="vb-intro">Diese Sehnsucht steht bei Hundertwasser sogar im Namen. Geboren als <strong>Friedrich Stowasser</strong>, gab er sich selbst einen neuen Namen: <strong>Friedensreich Hundertwasser</strong>. Aus Friedrich wurde Friedensreich &ndash; das Friedensprinzip, die neuentypische Sehnsucht nach Harmonie, ausgesprochen als Programm. Aus Stowasser wurde Hundertwasser &ndash; das Naturprinzip Wasser, Sinnbild des lebendigen, unaufhaltsamen Flie\u00dfens, das keine gerade Linie kennt und keinen Widerstand leistet, sondern sich jeder Form anschmiegt. Eine Selbstumbenennung als Verschmelzungsakt: Der Name wird zum Bekenntnis, mit welchem Prinzip man eins sein will.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterflügel: Provokation als Kampfmittel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Achterflügel (w8)</strong> gibt der sexuellen Neun etwas, das bei schwach ausgeprägtem Achterflügel selten sichtbar wird: die Bereitschaft, für das eigene Anliegen offen zu konfrontieren, zu provozieren, Tabus bewusst zu brechen. Hundertwasser war kein stiller Künstler – er schrieb wütende Manifeste und trug sie mit körperlicher, oft schockierender Direktheit vor. Das berühmteste, das <em>Verschimmelungsmanifest gegen den Rationalismus in der Architektur</em> (1958), bezeichnet die gerade Linie als „gottlos und unmoralisch" – kompromisslos, konfrontativ, ohne Rücksicht auf Widerstand. Das ist ungewöhnlich für eine Neun – aber genau die Handschrift des Achterflügels: Das Harmonieideal wird nicht nur formuliert, sondern offensiv erkämpft.</p>
          <p class="vb-intro">1967 und 1968 hielt Hundertwasser in München und Wien seine berühmten „Nacktreden" gegen die „Boxarchitektur" – er zog sich während des Vortrags vollständig aus, um seine Botschaft von der „dritten Haut" buchstäblich am eigenen Körper zu demonstrieren. Kein zurückhaltendes Prinzip, sondern eine bewusst schockierende, körperliche Konfrontation des Publikums – die typische Waffe des Achterflügels: Provokation als direktester Weg, Aufmerksamkeit und Veränderung zu erzwingen. Später folgten weitere Architektur-Boykott-Manifeste und öffentliche Kampagnen gegen einzelne Bauprojekte – Hundertwasser griff nie zur leisen Kritik, wenn der offene Angriff möglich war.</p>
        </blockquote>

        <h2 class="vb-section">4. Verschmelzung jenseits der B\u00fchne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dass ausgerechnet die Nacktheit zu seinem Ausdrucksmittel wurde, passt zugleich zur sexuellen Neun selbst: konfrontativ in der Form &ndash; das ist der Achterfl\u00fcgel &ndash;, aber verschmelzend im tieferen Antrieb. Keine Grenze zwischen Redner und Publikum, keine H\u00fclle, kein Abstand &ndash; das Faultier, das sich seiner Umgebung so vollst\u00e4ndig zeigt, dass nichts mehr zwischen ihm und den Zuschauern steht. Wo eine soziale Neun einen Vortrag h\u00e4lt, um eine Gruppe zusammenzuhalten, sucht die sexuelle Neun den unmittelbaren, k\u00f6rperlichen Verschmelzungsmoment &ndash; der Achterfl\u00fcgel liefert die Durchsetzungskraft, ihn auch gegen gesellschaftlichen Widerstand zu erzwingen.</p>
          <p class="vb-intro">Sp\u00e4ter w\u00e4hlte er Neuseeland zur Wahlheimat &ndash; ein Land am Rand der Welt, von urspr\u00fcnglicher Natur gepr\u00e4gt, fernab europ\u00e4ischer Zivilisation. Auch das folgt der SX9-Logik: nicht die soziale B\u00fchne, sondern der R\u00fcckzug in ein intensives, unmittelbares Naturverh\u00e4ltnis. Auf seiner Farm bei Kawakawa lebte er zeitweise ohne flie\u00dfendes Wasser und Elektrizit\u00e4t &ndash; die konsequenteste Form der Verschmelzung, die sich denken l\u00e4sst.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Neun</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX9 ist ihre F\u00e4higkeit, sich restlos mit etwas Gr\u00f6\u00dferem zu verbinden &ndash; und daraus sch\u00f6pferische Kraft zu ziehen, statt darin zu verschwinden. Hundertwassers Bauten (die Gr\u00fcne Zitadelle in Magdeburg, das Hundertwasserhaus in Wien, das Kunst Haus Wien) sind keine R\u00fcckzugsorte, sondern lebendige Manifeste dieser Verschmelzung &ndash; Architektur, die Menschen tats\u00e4chlich bewohnen.</p>
          <p class="vb-intro">Das Schicksalsmuster der Neun ist die <strong>Selbstvergessenheit (Tr\u00e4gheit)</strong> &ndash; und bei der SX9 zeigt sie sich als Aufl\u00f6sung der eigenen Position im Verschmelzungsobjekt. Hundertwasser blieb es nicht bei einer einzigen Umbenennung: Aus Friedrich Stowasser wurde 1949 Friedensreich Hundertwasser, sp\u00e4ter erweiterte er seinen Namen noch um &bdquo;Regentag&ldquo; und &bdquo;Dunkelbunt&ldquo; &ndash; sein voller K\u00fcnstlername lautete zuletzt Friedensreich Regentag Dunkelbunt Hundertwasser. Diese wiederholte Selbstumbenennung, seine R\u00fcckz\u00fcge, seine radikale Ablehnung jeder Konvention lassen sich auch so lesen: die Sehnsucht, ganz in der Natur, im Werk, im Prinzip aufzugehen &ndash; bis kaum noch erkennbar ist, wo der Mensch Friedrich Stowasser endet und das Programm Hundertwasser beginnt.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Verschmelzen zum bewussten Verbundensein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Neun f\u00fchrt von der Selbstvergessenheit zur handelnden Pr\u00e4senz &ndash; von der Aufl\u00f6sung im Anderen zur bewussten, klaren Anwesenheit, die Verbindung sucht, ohne sich selbst darin zu verlieren. Die wachsende Neun entdeckt: Verschmelzung mit der Natur muss die eigene Gestalt nicht ausl\u00f6schen &ndash; sie kann sie erst hervortreten lassen.</p>
          <p class="vb-intro">Hundertwassers Werk zeigt genau diese Reifung: aus der stillen Sehnsucht eines jungen Malers wurde ein \u00f6ffentliches, un\u00fcbersehbares architektonisches Programm, das bis auf den heutigen Tag Millionen Menschen erreicht. Das Faultier, das langsam, beharrlich, ohne Eile seinen Platz in der Welt einnahm &ndash; und darin nicht verschwand, sondern sichtbar wurde.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx9", label:"SX9 \u2013 Das Faultier: Subtyp-Profil"},
        {route:"beruehmte-keanu-reeves", label:"Portr\u00e4t: Keanu Reeves (SX9w1)"},
        {route:"beruehmte-iga-swiatek", label:"Portr\u00e4t: Iga \u015awi\u0105tek (SX9w1)"},
        {route:"beruehmte-diego-velazquez", label:"Portr\u00e4t: Diego Vel\u00e1zquez (SX9w1)"},
        {route:"krankheitsportraets-hundertwasser", label:"Krankheitsportr\u00e4t: Friedensreich Hundertwasser (SX9w8) \u2013 chronisches Herzleiden"},
        {route:"architektur-raumgestaltung-der-9-typen", label:"Schaubild: Architektur & Raumgestaltung der 9 Typen"},
      ])}
    </div>
  `);
}

export function janUllrichPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-jan-ullrich-portrait.jpg" alt="Jan Ullrich – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jan Ullrich</p>
        <p class="krim-portrait-typ">SE2w3 &middot; Selbsterhaltender Typ 2 mit Dreierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Radrennfahrer, geb. 1973 &ndash; Tierentsprechung: Flusspferd</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei &ndash; ein Tier, das trotz seines gewaltigen Gewichts auf dem Grund eines Flusses mit einer Leichtigkeit l\u00e4uft, die man ihm von au\u00dfen nicht zutraut, fast schwerelos abst\u00f6\u00dft und gleitet, obwohl es kaum schwimmen kann im eigentlichen Sinn. Es bewegt sich am kraftvollsten dort, wo sein Gewicht ihm eigentlich im Weg sein m\u00fcsste.</p>
          <p class="vb-intro">Der deutsche Radrennfahrer Jan Ullrich hat dieses Tier in sich gelebt &ndash; mit allem, was dazugeh\u00f6rt. Auf dem Rad war er das reinste Naturtalent der Radsportgeschichte: Kraftentfaltung, Rhythmus, Leidensf\u00e4higkeit auf einem Niveau, das selbst seine sch\u00e4rfsten Rivalen zur Ehrerbietung zwang. Abseits des Rads suchte er das Gleichgewicht immer wieder &ndash; und fand es nicht immer. Das Flusspferd braucht sein Wasser. F\u00fcr Ullrich war das Fahrrad dieses Wasser.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: Der Genuss als Grundgef\u00fchl</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> ist in der Enneagramm-Tradition der Subtyp, der die eigenen k\u00f6rperlichen und emotionalen Bed\u00fcrfnisse am direktesten erlebt und auslebt. Naranjo nannte ihn <em>Me First</em>: nicht im egoistischen Sinn, sondern im sinnlichen. Die SE2 lebt im K\u00f6rper, im Moment, im unmittelbaren Erleben. Genuss ist kein Luxus f\u00fcr sie &ndash; er ist ein Grundbed\u00fcrfnis, das sich nicht dauerhaft unterdr\u00fccken l\u00e4sst.</p>
          <p class="vb-intro">Bei Jan Ullrich zeigte sich das in einem Ph\u00e4nomen, das die gesamte Radsportwelt in Atem hielt: dem winterlichen Gewichtszuwachs. W\u00e4hrend andere Profis streng diszipliniert in die Nebensaison gingen, g\u00f6nnte sich Ullrich Entspannung, Genuss, das Leben au\u00dferhalb des Wettkampfs. Jedes Fr\u00fchjahr begann er mit \u00dcbergewicht &ndash; und jedes Fr\u00fchjahr brachte er sich mit einer Konditionsst\u00e4rke zur\u00fcck, die physiologisch kaum erkl\u00e4rbar schien. Das war nicht Disziplinlosigkeit. Das war die SE2: der K\u00f6rper, der sich nimmt, was er braucht &ndash; und dann zeigt, was in ihm steckt.</p>
          <p class="vb-intro">Die SE2 ist auch die Zwei, die am deutlichsten nach F\u00fcrsorge sucht &ndash; und am schwersten ohne sie auskommt. Ullrichs Karriere und sein Leben nach dem Sport zeigen beide Seiten: die Kraft, die entsteht, wenn er getragen wird &ndash; und die Verletzlichkeit, wenn dieser Halt fehlt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Triumph als zweite Natur</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> bringt der selbsterhaltenden Zwei etwas Entscheidendes: den Hunger nach Sieg, nach Anerkennung, nach dem Moment des Triumphes. Eine SE2 mit schwach ausgeprägtem Dreierflügel kann bequem werden – ein stark ausgeprägter Dreierflügel treibt sie an. Er fl\u00fcstert: <em>Gut ist nicht genug. Du musst gewinnen.</em></p>
          <p class="vb-intro">Bei Jan Ullrich ist dieser Fl\u00fcgel in jedem gro\u00dfen Moment seiner Karriere sichtbar. Der Tour-de-France-Sieg 1997 mit 23 Jahren &ndash; der j\u00fcngste Sieger bis dahin. Olympiagold 2000 im Einzelzeitfahren in Sydney. F\u00fcnf zweite Pl\u00e4tze bei der Tour de France, fast alle hinter Lance Armstrong. Die SE2w3 gibt nicht leicht auf &ndash; auch dann nicht, wenn der Gegner \u00fcberm\u00e4chtig wirkt. Das Flusspferd weicht nicht zur\u00fcck. Und der Dreierfl\u00fcgel sorgt daf\u00fcr, dass es wieder und wieder antritt.</p>
          <p class="vb-intro">Der Dreierfl\u00fcgel bringt aber auch die Schattenseite der Drei mit: die Gefahr, das Image \u00fcber die Wahrheit zu stellen. Der Druck, immer der strahlende Sieger zu sein. F\u00fcr Ullrich war dieser Druck Teil des Systems, in dem er sich bewegte &ndash; und Teil des Weges, der ihn schlie\u00dflich in die Doping-Aff\u00e4re Operaci\u00f3n Puerto f\u00fchrte.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE2 ist ihre Lebendigkeit. Jan Ullrich war auf dem Rad ein Erlebnis &ndash; nicht nur ein Ergebnis. Wer ihn je am Col du Galibier oder in einem Zeitfahren gesehen hat, wei\u00df: Da war etwas Unwiederholbares. Keine berechnende Maschine, sondern ein Mensch, der sein ganzes k\u00f6rperliches Wesen in Bewegung verwandelte. Das ist das Geschenk der SE2: Vollst\u00e4ndigkeit im Erleben.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; und bei der SE2 zeigt er sich als tiefes, oft unbewusstes Bed\u00fcrfnis, gebraucht, geliebt, bewundert zu werden. Dieses Bed\u00fcrfnis war bei Ullrich mit dem Rad erf\u00fcllbar. Nach dem Karriereende 2006 &ndash; inmitten der Dopingermittlungen und des \u00f6ffentlichen Absturzes &ndash; fehlte das Fundament. Die Jahre danach, mit Suchtproblemen, juristischen Auseinandersetzungen und pers\u00f6nlichen Krisen, erz\u00e4hlen die Geschichte eines SE2ers ohne sein Wasser: das Flusspferd an Land, ohne Orientierung.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Hunger zur F\u00fclle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Zwei f\u00fchrt vom Geben und Gebraucht-Werden zur inneren F\u00fclle &ndash; zur Erkenntnis, dass der eigene Wert nicht vom Triumph abh\u00e4ngt. Die wachsende Zwei lernt: Ich bin auch dann genug, wenn ich nicht gewinne. Auch dann liebenswert, wenn ich schwach bin. Auch dann real, wenn mich niemand ansieht.</p>
          <p class="vb-intro">F\u00fcr Jan Ullrich bedeutet das einen Weg, der schwerer ist als jeder Alpenpass: den Weg zu sich selbst, ohne das Fahrrad als Tr\u00e4ger. Es gibt Berichte, dass er in den letzten Jahren ruhiger geworden ist, Unterst\u00fctzung angenommen hat, langsam wieder Boden findet. Das Flusspferd geh\u00f6rt ins Wasser &ndash; aber es kann auch lernen, an Land zu stehen. Nicht als Sieger. Als es selbst.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se2", label:"SE2 \u2013 Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-greta-thunberg", label:"Portr\u00e4t: Greta Thunberg (SE2w1)"},
      ])}
    </div>
  `);
}

export function johnLennonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-john-lennon-portrait.jpg" alt="John Lennon – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Lennon</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Sozialer Typ 4 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Musiker, Komponist &amp; Friedensaktivist, 1940&ndash;1980 &ndash; Tierentsprechung: G\u00fcrteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das G\u00fcrteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\u00fcrteltier</strong> ist das Tier des sozialen Typs 4 &ndash; und es ist ein Tier, das Widerspr\u00fcche in sich vereint. Nach au\u00dfen tr\u00e4gt es einen harten Panzer, der es unverwundbar wirken l\u00e4sst. Innen sch\u00fctzt dieser Panzer ein Wesen, das au\u00dfergew\u00f6hnlich empfindlich ist. Das G\u00fcrteltier ist kein Einzelg\u00e4nger &ndash; es lebt in der Gemeinschaft, braucht die Gemeinschaft, auch wenn es sich in ihr manchmal fremd f\u00fchlt. Und in seiner Einzigartigkeit unter den S\u00e4ugetieren tr\u00e4gt es etwas Unverwechselbares: Niemand sonst sieht so aus. Niemand sonst ist so gebaut.</p>
          <p class="vb-intro">John Lennon war einer der einflussreichsten Musiker des 20. Jahrhunderts &ndash; und ein Mann, der sein ganzes Leben zwischen Panzer und Verletzlichkeit pendelte. Auf der B\u00fchne: Sch\u00e4rfe, Witz, Provokation. Im Inneren: ein Mensch, der tief nach Frieden suchte &ndash; in der Welt und in sich selbst. Das G\u00fcrteltier, das sich manchmal einrollt, um sich zu sch\u00fctzen, und manchmal aus dem Panzer heraustritt, um die Welt zu ver\u00e4ndern.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Scham als Antrieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> ist in der Enneagramm-Tradition derjenige Subtyp, der den Schmerz der Vier in die soziale Dimension tr\u00e4gt. Naranjo nannte diesen Subtyp <em>Scham</em>: das tiefe Gef\u00fchl, nicht gut genug zu sein f\u00fcr die Welt, in der man lebt &ndash; und gleichzeitig der brennende Wunsch, dazuzugeh\u00f6ren, bedeutsam zu sein, etwas zu hinterlassen, das bleibt. Die SO4 vergleicht sich unabl\u00e4ssig mit anderen und sucht in der Resonanz der Gemeinschaft eine Best\u00e4tigung, die nur von innen kommen kann.</p>
          <p class="vb-intro">Bei John Lennon zeigt sich das in dem Widerspruch, der sein Leben pr\u00e4gte: Er war einer der ber\u00fchmtesten Menschen der Welt &ndash; und f\u00fchlte sich trotzdem oft ungesehen, unverstanden, allein. Die fr\u00fche Verlassenheit durch seinen Vater, der Tod seiner Mutter Julia als Teenager &ndash; das sind Wunden, die die SO4 tief in sich tr\u00e4gt und in Kunst verwandelt. <em>Mother</em>, <em>Isolation</em>, <em>Working Class Hero</em> &ndash; das sind keine Songs \u00fcber den Ruhm. Das sind Dokumente eines Menschen, der seinen eigenen Schmerz in Sprache verwandelt hat, damit andere wissen: Du bist nicht allein damit.</p>
          <p class="vb-intro">Charakteristisch f\u00fcr die SO4 ist die F\u00e4higkeit, das Pers\u00f6nlichste in das Universale zu verwandeln. Lennon schrieb nicht f\u00fcr sich &ndash; er schrieb f\u00fcr eine Generation. Und eine Generation h\u00f6rte sich selbst in seinen Worten. Das ist das Geschenk der sozialen Vier: Sie macht das Innerste \u00f6ffentlich und entdeckt dabei, dass das Innerste allen geh\u00f6rt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Wissen, R\u00fcckzug und die Kraft der Stille</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sozialen Vier eine charakteristische Pr\u00e4gung: das Bed\u00fcrfnis nach R\u00fcckzug, nach Tiefe, nach der intellektuellen Durchdringung der Welt. Eine SO4 mit schwächer ausgeprägtem Fünferflügel sucht eher die Verbindung – sie will gesehen werden, will berühren. Bei stark ausgeprägtem Fünferflügel zieht dieser sie stattdessen in die Stille zurück: <em>Er denkt zuerst. Er versteht zuerst. Dann erst redet er.</em></p>
          <p class="vb-intro">Bei John Lennon zeigt sich der F\u00fcnferfl\u00fcgel in seiner philosophischen Neugier, die weit \u00fcber die Musik hinausging. Er las, er dachte, er hinterfragte &ndash; Institutionen, Religionen, den Krieg, die eigene Rolle. <em>Imagine</em> ist nicht das Lied eines Entertainers. Es ist das Lied eines Menschen, der sich gefragt hat: <em>Was w\u00e4re, wenn wir wirklich nachdenken w\u00fcrden?</em> Der F\u00fcnferfl\u00fcgel gibt der SO4 Distanz &ndash; die F\u00e4higkeit, das Pers\u00f6nliche in das Allgemeine zu heben und dabei klar zu bleiben.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel erkl\u00e4rt auch Lennons Bereitschaft, sich zur\u00fcckzuziehen &ndash; die Jahre nach den Beatles, in denen er in der Dakota in New York lebte, Vater war, Brot backte, still war. Die SO4w5 wei\u00df: Manchmal ist das Schweigen lauter als jeder Song. Die f\u00fcnf Jahre, in denen er aus dem Rampenlicht trat und zur\u00fcckkehrte kurz vor seinem Tod &ndash; das ist der F\u00fcnferfl\u00fcgel in seiner klarsten Ausprägung.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4 ist ihre F\u00e4higkeit, Schmerz in Sch\u00f6nheit zu verwandeln &ndash; und diese Sch\u00f6nheit mit der Welt zu teilen. John Lennon hat Lieder geschrieben, die Generationen \u00fcberdauern: nicht weil sie technisch perfekt sind, sondern weil sie wahr sind. <em>In My Life</em>, <em>Come Together</em>, <em>Imagine</em> &ndash; das sind Zeugnisse eines Menschen, der tief gef\u00fchlt hat und nicht aufgeh\u00f6rt hat, das Gef\u00fchlte in Sprache zu bringen.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; das Gef\u00fchl, dass anderen etwas mitgegeben wurde, das einem selbst fehlt. Bei der SO4 \u00e4u\u00dfert sich das als sozialer Vergleich: <em>Die anderen wissen, wie man dazugeh\u00f6rt. Ich tue nur so.</em> Lennon hat dieses Gef\u00fchl immer wieder in Interviews beschrieben &ndash; die \u00dcberzeugung, ein Au\u00dfenseiter zu sein, auch inmitten des gr\u00f6\u00dften Erfolgs. Die Beatles haben die Welt ver\u00e4ndert. Und Lennon fragte sich, ob er wirklich dazugeh\u00f6rte.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel bringt die Gefahr des R\u00fcckzugs in die Bitterkeit: Wenn die Welt nicht versteht, was die SO4w5 sieht und f\u00fchlt, kann sie sich verschlie\u00dfen &ndash; zynisch werden, hart. Lennons \u00f6ffentliche Reibungen, seine Sch\u00e4rfe in Interviews, seine Bereitschaft zur Verletzung sind der Schatten dieser Energie: Die Verletzlichkeit, die keinen Ort findet, wird zur Waffe.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Vergleichen zum Ankommen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum bin ich weniger als die anderen?</em> zur Erkenntnis <em>Was ich bin, ist vollst\u00e4ndig &ndash; und es ist einmalig.</em> F\u00fcr die SO4w5 bedeutet das, das innere Wissen nicht l\u00e4nger als Abstand zur Welt zu nutzen, sondern als Br\u00fccke zu ihr. Die Tiefe, die manchmal isoliert, ist auch das, was verbindet.</p>
          <p class="vb-intro">Lennon hat in den letzten Jahren seines Lebens Schritte in diese Richtung gemacht. Die Zeit mit Sean, die Stille der Hausmanns-Jahre, die R\u00fcckkehr mit <em>Double Fantasy</em> &ndash; ein Album, das nicht mehr bewies, sondern einfach war. Das G\u00fcrteltier, das den Panzer nicht mehr braucht, weil es gelernt hat, dass sein Inneres stark genug ist. Dieser Weg wurde am 8. Dezember 1980 abrupt beendet. Was bleibt, sind Lieder, die fragen: <em>Stell Dir vor, es w\u00e4re Frieden. Was h\u00e4lt uns davon ab?</em> Diese Frage ist noch nicht beantwortet.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"beruehmte-paul-mccartney", label:"Portr\u00e4t: Paul McCartney (SE4w5)"},
        {route:"beruehmte-javier-parisi", label:"Portr\u00e4t: Javier Parisi (SO4w5)"},
        {route:"beruehmte-fiona-apple", label:"Portr\u00e4t: Fiona Apple (SO4w5)"},
        {route:"beruehmte-leonard-cohen", label:"Portr\u00e4t: Leonard Cohen (SO4w5)"},
        {route:"enneagramm-astrologie", label:"Enneagramm meets Astrologie"},
        {route:"astrologie-john-lennon", label:"Horoskop-Analyse: John Lennon"},
        {route:"subtype/so4", label:"SO4 \u2013 Das G\u00fcrteltier: Subtyp-Profil"},
      ])}
    </div>
  `);
}

export function karlMarxPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-karl-marx-portrait.jpg" alt="Karl Marx – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Karl Marx</p>
        <p class="krim-portrait-typ">SO8w9 &middot; Sozialer Typ 8 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Philosoph, \u00d6konom, Begr\u00fcnder des Marxismus, 1818&ndash;1883 &ndash; Tierentsprechung: L\u00f6we</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der L\u00f6we</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>L\u00f6we</strong> ist das Tier des sozialen Typs 8 &ndash; ein Wesen, das seine Kraft nicht f\u00fcr sich selbst, sondern f\u00fcr sein Rudel einsetzt. Er muss nicht st\u00e4ndig br\u00fcllen; seine blo\u00dfe Pr\u00e4senz gen\u00fcgt, um Respekt zu erzwingen. Doch wenn das Rudel bedroht ist &ndash; oder wenn er selbst zum Kampf um dessen \u00dcberleben aufruft &ndash; entfaltet er eine Wucht, die niemand ignorieren kann.</p>
          <p class="vb-intro">Der deutsche Philosoph Karl Marx, 1818 in Trier geboren, war dieser L\u00f6we: kein lauter Selbstdarsteller, sondern ein Mann, der \u00fcber Jahrzehnte im Verborgenen &ndash; in Bibliotheken, in Armut, im Londoner Exil &ndash; an einem Werk arbeitete, das er als Waffe f\u00fcr die Unterdr\u00fcckten verstand. Er k\u00e4mpfte nicht f\u00fcr sich. Er k\u00e4mpfte f\u00fcr ein Rudel, das er nie pers\u00f6nlich kannte: die Arbeiterklasse der ganzen Welt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Acht: Solidarit\u00e4t mit den Ausgebeuteten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Acht (SO8)</strong> setzt ihre Kraft in den Dienst einer Gemeinschaft. Naranjo nannte diesen Subtyp <em>Solidarit\u00e4t</em>: Die SO8 identifiziert sich mit den Machtlosen und stellt sich unerschrocken vor sie &ndash; nicht aus Mitleid, sondern aus einer tiefen Emp\u00f6rung \u00fcber das Unrecht selbst. Sie k\u00e4mpft nicht f\u00fcr abstrakte Prinzipien, sondern f\u00fcr konkrete Menschen, deren Leid sie als eigenes empfindet.</p>
          <p class="vb-intro">Marx' gesamtes Lebenswerk ist das SO8-Prinzip unverfälscht: Er analysierte nicht neutral, er klagte an. <em>Das Kapital</em> ist kein trockenes Wirtschaftslehrbuch, sondern eine minuti\u00f6se Anklageschrift gegen die Ausbeutung der Arbeiterklasse durch das Kapital. Er wollte nicht nur verstehen, wie der Kapitalismus funktioniert &ndash; er wollte ihn st\u00fcrzen. Die ber\u00fchmte elfte Feuerbach-These bringt es auf den Punkt: \u201eDie Philosophen haben die Welt nur verschieden interpretiert; es kommt aber darauf an, sie zu ver\u00e4ndern."</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Die Geduld des Systematikers</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel</strong> verleiht der sozialen Acht eine Qualit\u00e4t, die einer Acht mit kaum entwickeltem Neunerfl\u00fcgel oft fehlt: Geduld, Ausdauer und die F\u00e4higkeit, ein gewaltiges, komplexes System \u00fcber Jahrzehnte hinweg gedanklich zu durchdringen, statt impulsiv zu handeln. Die SO8w7 k\u00e4mpft mit Feuer und Tempo. Die <strong>SO8w9</strong> k\u00e4mpft mit stiller, unerbittlicher Beharrlichkeit.</p>
          <p class="vb-intro">Marx arbeitete \u00fcber 30 Jahre am <em>Kapital</em> &ndash; der erste Band erschien 1867, die weiteren B\u00e4nde blieben bei seinem Tod 1883 unvollendet und wurden von Friedrich Engels aus seinem Nachlass fertiggestellt. Diese jahrzehntelange, oft von Krankheit, Armut und famili\u00e4ren Trag\u00f6dien \u00fcberschattete Systemarbeit ist die Handschrift des Neunerfl\u00fcgels: nicht der schnelle Schlag, sondern das langsame, unaufhaltsame Fundamentgraben unter einem ganzen Weltsystem.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von Trier nach London</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nach dem Studium der Rechtswissenschaft und Philosophie in Bonn und Berlin wandte sich Marx dem Journalismus zu, wurde wegen seiner radikalen Schriften mehrfach aus Preu\u00dfen, Frankreich und Belgien ausgewiesen und lie\u00df sich schlie\u00dflich 1849 in London nieder, wo er bis zu seinem Tod im Exil lebte. Zusammen mit Friedrich Engels verfasste er 1848 das <em>Kommunistische Manifest</em>, das mit dem ber\u00fchmten Satz beginnt: \u201eEin Gespenst geht um in Europa &ndash; das Gespenst des Kommunismus."</p>
          <p class="vb-intro">Marx lebte w\u00e4hrend seiner Londoner Jahre in bitterer Armut, oft finanziell abh\u00e4ngig von Engels, w\u00e4hrend drei seiner sieben Kinder in jungen Jahren starben &ndash; teils an den Folgen der Entbehrungen. Trotzdem arbeitete er t\u00e4glich im Lesesaal des Britischen Museums an seinem \u00f6konomischen Hauptwerk. Der L\u00f6we zog sich nicht zur\u00fcck, als das Leben ihn niederwarf. Er arbeitete weiter, f\u00fcr ein Ziel, das gr\u00f6\u00dfer war als sein eigenes Wohlergehen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO8w9 ist ihre <strong>unersch\u00fctterliche Beharrlichkeit im Dienst einer Sache</strong>, die gr\u00f6\u00dfer ist als sie selbst. Marx entwickelte mit dem historischen Materialismus und der Mehrwerttheorie ein analytisches Instrumentarium, das die Geistes- und Sozialwissenschaften bis heute pr\u00e4gt &ndash; unabh\u00e4ngig davon, wie man zu seinen politischen Schlussfolgerungen steht.</p>
          <p class="vb-intro">Der Schatten zeigt sich in einer Kompromisslosigkeit, die im 20. Jahrhundert von totalit\u00e4ren Regimen &ndash; der Sowjetunion, Maos China, weiteren kommunistischen Diktaturen &ndash; f\u00fcr Massenverbrechen instrumentalisiert wurde, weit \u00fcber das hinaus, was Marx selbst vorausgesehen oder gewollt h\u00e4tte. Die soziale Acht, die f\u00fcr die Unterdr\u00fcckten k\u00e4mpft, kann in ihrer Radikalit\u00e4t auch zum Rechtfertigungssystem f\u00fcr neue Formen der Unterdr\u00fcckung werden &ndash; ein Erbe, mit dem sich die Nachwelt nach wie vor auseinandersetzen muss.</p>
        </blockquote>

        <h2 class="vb-section">6. Der L\u00f6we, der die Welt noch heute nicht zur Ruhe kommen l\u00e4sst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Acht f\u00fchrt von der Wollust zur Unschuld &ndash; von der zwanghaften Behauptung der eigenen Position zu einer Kraft, die auch Nuancen und Gegenargumente zulassen kann. Marx selbst starb 1883 verarmt, in London, an seinem Schreibtisch sitzend, ohne den Umsturz zu erleben, den er theoretisch begr\u00fcndet hatte &ndash; die eigentliche Weltwirkung seines Werks entfaltete sich erst nach seinem Tod.</p>
          <p class="vb-intro">Kein Denker des 19. Jahrhunderts hat die politische, wirtschaftliche und intellektuelle Landkarte der Welt so nachhaltig ver\u00e4ndert wie Karl Marx &ndash; im Guten wie im Schlechten. Der L\u00f6we, der aus dem Schatten der Bibliothek heraus k\u00e4mpfte, nicht auf der offenen Savanne, dessen Br\u00fcllen aber bis in die Gegenwart in jeder Debatte \u00fcber Kapitalismus, Ausbeutung und soziale Gerechtigkeit nachhallt.</p>
        </blockquote>

        <p class="vb-intro">Seine jahrzehntelangen, extrem schmerzhaften Karbunkel und ihr Einfluss auf die Arbeit am "Kapital" werden ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-karl-marx">Krankheitsporträt zu Marx</a> gedeutet.

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so8", label:"SO8 \u2013 Der L\u00f6we: Subtyp-Profil"},
        {route:"beruehmte-bud-spencer", label:"Portr\u00e4t: Bud Spencer (SO8w9)"},
        {route:"beruehmte-jamaica-kincaid", label:"Portr\u00e4t: Jamaica Kincaid (SO8w9)"},
        {route:"beruehmte-georg-wilhelm-friedrich-hegel", label:"Portr\u00e4t: Georg Wilhelm Friedrich Hegel (SO5w6) \u2013 dessen Dialektik er \u203avom Kopf auf die F\u00fc\u00dfe\u2039 stellte"},
        {route:"krankheitsportraets-karl-marx", label:"Krankheitsporträt: Karl Marx (SO8w9)"},
        {route:"bibel-kaiphas", label:"Bibel-Porträt: Der Hohepriester Kaiphas (SO8w9)"},
      ])}
    </div>
  `);
}

export function langLangPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-lang-lang-portrait.jpg" alt="Lang Lang" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Lang Lang</p>
        <p class="krim-portrait-typ">SE3w2 · Selbsterhaltender Typ 3 mit Zweierflügel</p>
        <p class="krim-portrait-subtitle">Pianist, geb. 1982 – Tierentsprechung: Waschbär</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Waschbär</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Waschbär</strong> ist das Tier der selbsterhaltenden Drei – ein Tier, das mit unermüdlichem Fleiß im Verborgenen arbeitet, bevor es sich zeigt, und das erst durch jahrelanges, geduldiges Üben zu jener Geschicklichkeit findet, die andere für angeboren halten. Lang Lang, geboren 1982 in Shenyang im Nordosten Chinas, begann bereits mit zwei Jahren Klavier zu spielen, nachdem ihn eine Szene aus dem Zeichentrickfilm "Tom und Jerry" zutiefst berührt hatte: In der Folge "The Cat Concerto" (1946) spielt Kater Tom am Flügel Franz Liszts virtuose Ungarische Rhapsodie Nr. 2 – ein rasantes, dicht aneinandergereihtes Notengewitter, dessen mitreißender Rhythmus den kleinen Lang Lang so faszinierte, dass er selbst Klavier lernen wollte. Genau dieser Reiz an Präzision, Tempo und dichter, effizienter Notenfolge ist bezeichnend für die selbsterhaltende Drei: Rhythmus als Ausdruck von Können, das sich messen und beweisen lässt.</p>
          <p class="vb-intro">Sein Vater Lang Guoren gab seine eigene Stelle bei der Polizei auf, um sich vollständig der musikalischen Ausbildung seines Sohnes zu widmen, und zog mit dem neunjährigen Lang Lang nach Peking, während die Mutter in Shenyang zurückblieb, um Geld zu verdienen. Die Trainingsjahre waren von extremer Disziplin und Härte geprägt – Stunden täglichen Übens, hohe Erwartungen, wenig Raum für eine gewöhnliche Kindheit. Der Waschbär lernte früh: Können entsteht nicht durch Talent allein, sondern durch endlose, oft schmerzhafte Wiederholung.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Drei: Sicherheit durch nachweisbare Meisterschaft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Drei (SE3)</strong> ist der Kontratyp der Drei – der Subtyp, der Sicherheit nicht durch Image, sondern durch nachweisbare, überprüfbare Kompetenz sucht. Naranjo nannte diesen Subtyp <em>Sicherheit</em>: Man wird nicht bewundert, weil man sich gut verkauft, sondern weil man tatsächlich liefert, was man verspricht.</p>
          <p class="vb-intro">1999, im Alter von siebzehn Jahren, erhielt Lang Lang seinen Durchbruch als kurzfristiger Einspringer beim Ravinia Festival in Chicago, wo er mit dem Chicago Symphony Orchestra Tschaikowskys erstes Klavierkonzert spielte – ein Auftritt, der ihn über Nacht bekannt machte. Doch dieser scheinbare Zufallserfolg war das Ergebnis von vierzehn Jahren täglicher, disziplinierter Vorbereitung. Die SE3 investiert unsichtbar, jahrelang, bevor der sichtbare Moment kommt – und ist dann bereit, wenn die Gelegenheit sich bietet.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierflügel: Musik als Verbindung zur Welt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierflügel (w2)</strong> verleiht der selbsterhaltenden Drei einen echten Impuls zur Verbindung und Fürsorge. Lang Langs Bühnenpräsenz ist geprägt von überschwänglicher, körperlicher Ausdruckskraft – er lächelt während des Spielens, blickt ins Publikum, lässt seine Emotionen sichtbar werden, statt sich hinter kühler Virtuosität zu verschanzen. Kritiker nannten diesen Stil mitunter zu theatralisch, doch für Millionen neuer Klassikhörer wurde genau diese Zugänglichkeit zur Eintrittstür in eine Musikwelt, die ihnen zuvor fremd geblieben war.</p>
          <p class="vb-intro">2008 gründete er die Lang Lang International Music Foundation, die Musikunterricht für Kinder aus einkommensschwachen Verhältnissen weltweit fördert, und wirkte maßgeblich am sogenannten "Lang-Lang-Effekt" mit: In China begannen nach seinem Erfolg schätzungsweise Millionen zusätzlicher Kinder, Klavier zu lernen. Der Waschbär mit dem Zweierflügel baut nicht nur die eigene Meisterschaft auf – er öffnet Türen für andere, damit sie denselben Weg finden können.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Eitelkeit im Dienst der Zugänglichkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Drei heißt <strong>Eitelkeit</strong> – bei der SE3 nicht als lautes Geltungsbedürfnis, sondern als das feine Bedürfnis, durch nachweisbare Leistung als unentbehrlich zu gelten. Bei Lang Lang zeigt sich das in seiner Bereitschaft, klassische Musik bewusst zu populärer Kultur zu öffnen: Kollaborationen mit Popstars wie Pharrell Williams und Metallica, ein Auftritt bei der Eröffnungsfeier der Olympischen Spiele 2008 in Peking vor einem Milliardenpublikum, Werbekampagnen für internationale Marken.</p>
          <p class="vb-intro">Diese Grenzüberschreitungen brachten ihm Kritik aus konservativeren Kreisen der klassischen Musikwelt ein, die seinen Stil als zu kommerziell empfanden. Doch für die SE3w2 ist Reichweite kein Widerspruch zu Substanz, sondern deren logische Konsequenz: Wer wirklich etwas zu geben hat, will es möglichst vielen Menschen zugänglich machen, nicht nur einem exklusiven Kreis von Kennern.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Verletzung und die Rückkehr</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2017 zwang eine schwere Sehnenentzündung im linken Arm, verursacht durch Jahrzehnte intensiven Übens und öffentlicher Auftritte, Lang Lang zu einer über einjährigen Spielpause – eine existenzielle Bedrohung für einen Musiker, dessen gesamte Identität auf nachweisbarer, körperlicher Meisterschaft beruhte. Statt zu verzweifeln, nutzte er die Zeit, um sich verstärkt der Musikvermittlung und dem Unterrichten zu widmen, und kehrte 2018 mit neuer Reife an die Bühne zurück.</p>
          <p class="vb-intro">2019 heiratete er die deutsche Pianistin Gina Alice Redlinger (SE2w3), mit der er seither auch gemeinsam auftritt und unterrichtet. Der Waschbär, dessen Sicherheit einst allein auf der eigenen Spielfähigkeit ruhte, fand in der Krise eine neue, tragfähigere Grundlage: nicht nur zu können, sondern das eigene Können weiterzugeben.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Der Waschbär, der eine Generation für das Klavier begeisterte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Lang Lang gilt heute als einer der einflussreichsten klassischen Musiker seiner Generation – nicht nur wegen seiner technischen Virtuosität, sondern weil er es wie kaum ein anderer schaffte, klassische Musik aus dem Konzertsaal-Elfenbeinturm zu holen und einem globalen, jungen Publikum zugänglich zu machen.</p>
          <p class="vb-intro">Vom disziplinierten Übungskind in Shenyang zum Weltstar, der vor Milliardenpublikum spielt und gleichzeitig Kindern in einkommensschwachen Regionen den Zugang zur Musik ermöglicht: Das ist die selbsterhaltende Drei mit Zweierflügel in ihrer reifsten Form – Meisterschaft, die sich nicht selbst genügt, sondern zur Brücke für andere wird.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se3", label:"SE3 – Der Waschbär: Subtyp-Profil"},
        {route:"beruehmte-joseph-haydn", label:"Porträt: Joseph Haydn (SE3w2)"},
        {route:"beruehmte-sadhguru", label:"Porträt: Sadhguru (SE3w2)"},
        {route:"beruehmte-cheyenne-ochsenknecht", label:"Porträt: Cheyenne Ochsenknecht (SE3w4)"},
      ])}
    </div>
  `);
}

export function loniHuiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-loni-hui-portrait.jpg" alt="Loni Hui – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Loni Hui (geb. Harwood)</p>
        <p class="krim-portrait-typ">SE2w3 &middot; Selbsterhaltender Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">US-amerikanische Profi-Pokerspielerin, geb. um 1989 &ndash; Tierentsprechung: Flusspferd</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei &ndash; ein Tier, das erst ein solides eigenes Fundament braucht, bevor es sich in gefährlichere Gewässer wagt. Loni Hui, geboren als Loni Harwood, schloss 2012 zunächst ein Finanzstudium an der University at Albany ab – ein handfestes, wirtschaftliches Fundament, bevor sie sich überhaupt dem professionellen Pokerspiel zuwandte.</p>
          <p class="vb-intro">Nach dem Abschluss zog sie nach Florida und begann dort, Poker zu spielen – schnell entdeckte sie die World Series of Poker Circuit als ihr eigentliches berufliches Umfeld. Der Weg vom Wirtschaftsstudium zum Pokertisch verlief nicht sprunghaft, sondern über eine solide, planvoll aufgebaute Basis.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: Fürsorge als finanzielle Sicherheit im Spiel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> nennt Naranjo <em>Me First</em>: Die eigene, konkrete materielle und persönliche Sicherheit wird zuerst gesichert, bevor sich der Blick nach außen richtet. Loni Huis Finanzstudium und ihr methodischer Einstieg über die WSOP Circuit-Turniere statt sofort in die höchsten Einsatzklassen zeigen genau diese Haltung: erst die Basis sichern, dann Risiko eingehen.</p>
          <p class="vb-intro">Über 3,4 Millionen US-Dollar Gesamtgewinne aus Live-Turnieren und fünf WSOP-Circuit-Ringe entstanden nicht aus einem einzigen großen Wurf, sondern aus jahrelanger, konsequenter Präsenz auf der Turnierserie – eine SE2-typische Fürsorge für die eigene finanzielle Zukunft, aufgebaut Schritt für Schritt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Der historische Bracelet-Gewinn 2013</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der selbsterhaltenden Zwei den Antrieb, aus einer soliden Basis heraus einen sichtbaren, öffentlich messbaren Erfolg zu suchen. 2013 gelang Loni Hui bei der World Series of Poker etwas historisch Seltenes: Sie erreichte in einem einzigen Turnierjahr drei Finaltische – nur die zweite Frau nach Cyndy Violette (2005), der das gelang – und wurde zugleich die erste Frau, die im selben Jahr auch ein Bracelet gewann.</p>
          <p class="vb-intro">Dieser Erfolg brachte sie auf Platz drei der World Series of Poker Player of the Year-Wertung 2013 – ein klar sichtbares, öffentlich anerkanntes Ergebnis, das ihre jahrelange methodische Vorarbeit auf einen Schlag bestätigte. 2015 folgte ein zweites Bracelet.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE2w3 liegt in der Fähigkeit, aus einer sorgfältig aufgebauten finanziellen und methodischen Basis heraus historische, öffentlich messbare Erfolge zu erzielen – Loni Huis Weg vom Finanzstudium zu zwei WSOP-Bracelets und über 3,4 Millionen Dollar Turniergewinnen zeigt genau diese Kombination aus Vorsicht und sichtbarem Ehrgeiz.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, den eigenen Erfolg durch die eigene, konkrete Leistung verdient zu haben. Bei der SE2w3 kann sich das mit dem Bedürfnis verbinden, den erreichten Status kontinuierlich neu zu bestätigen – im Wettkampfsport Poker eine Haltung, die ebenso zum langfristigen Erfolg beitragen wie auch erschöpfend wirken kann.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Vom Finanzstudium zur Poker-Geschichte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Vom Finanzabschluss 2012 über den methodischen Einstieg auf der WSOP Circuit bis zum historischen Dreifach-Finaltisch-Jahr 2013 und einem zweiten Bracelet 2015 zieht sich ein roter Faden durch Loni Huis Werk: eine solide gesicherte Basis, aus der heraus konsequent gewachsen wurde, nie ein plötzlicher, unvorbereiteter Sprung.</p>
          <p class="vb-intro">Das Flusspferd verlässt sein angestammtes Gewässer nicht, um zu gefallen – es baut es sorgfältig aus, bevor es sich weiter hinauswagt. Loni Huis Weg von der Finanzstudentin zur zweifachen WSOP-Bracelet-Gewinnerin bündelt diesen Antrieb beispielhaft: Erfolg, der aus geduldig gesicherter Basis wächst, nicht aus riskantem Vabanquespiel.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se2", label:"SE2 – Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-jj-liu", label:"Portrait: J. J. Liu (SE2w1)"},
        {route:"beruehmte-bryn-kenney", label:"Portrait: Bryn Kenney (SE3w4)"},
      ])}
    </div>
  `);
}

export function marieCuriePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-marie-curie-portrait.jpg" alt="Marie Curie – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marie Curie</p>
        <p class="krim-portrait-typ">SE5w6 &middot; Selbsterhaltende Typ 5 mit Sechserfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Physikerin und Chemikerin, 1867&ndash;1934 &ndash; einzige Person mit Nobelpreisen in zwei verschiedenen Naturwissenschaften &ndash; Tierentsprechung: Eule</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Eule</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Eule</strong> ist das Tier des selbsterhaltenden Typs 5 &ndash; ein Tier der Stille und der Tiefe, das sieht, was andere nicht sehen, und sich sein Revier nicht aus L\xe4rm, sondern aus Genauigkeit baut. Marie Curie, geboren 1867 als Maria Salomea Skłodowska in Warschau, verk\xf6rperte genau diese Qualit\xe4t: Sie verlie\xdf ihre Heimat, weil Frauen dort nicht studieren durften, lebte in Paris zeitweise von Brot und Tee, um sich das Studium leisten zu k\xf6nnen &ndash; und wurde die einzige Person der Geschichte, die Nobelpreise in zwei unterschiedlichen Naturwissenschaften erhielt (Physik 1903, Chemie 1911).</p>
          <p class="vb-intro">Sie entdeckte gemeinsam mit ihrem Mann Pierre die Elemente Polonium und Radium, arbeitete jahrelang unter gesundheitsgef\xe4hrdenden Bedingungen in einem notd\xfcrftig eingerichteten Schuppen &ndash; und starb schlie\xdflich an den Folgen der jahrzehntelangen Strahlenbelastung, deren Gefahr sie selbst mit erforscht hatte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende F\xfcnf: Sicherheit durch Wissen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende F\xfcnf (SE5)</strong> ist nach Naranjo der Subtyp, den er &bdquo;Refugium&ldquo; nannte &ndash; ein R\xfcckzug in einen abgeschotteten, selbst kontrollierten Raum, in dem Wissen zur eigentlichen Existenzgrundlage wird. Curie lebte diese Haltung radikal: Ihr Pariser Studentenzimmer war so sp\xe4rlich beheizt, dass Wasser im Waschbecken gefror, ihre Ern\xe4hrung reduzierte sie auf das Notwendigste &ndash; nicht aus Armut allein, sondern aus einer fast asketischen Priorisierung des Studiums \xfcber alles andere.</p>
          <p class="vb-intro">Dieselbe Haltung pr\xe4gte ihre gesamte Forscherlaufbahn: jahrelange, m\xfchsame Handarbeit an tonnenweise Pechblende, um wenige Milligramm Radium zu isolieren &ndash; keine spektakul\xe4re Eingebung, sondern eine methodische, fast st\xf6rrische Ausdauer, die Sicherheit einzig aus der eigenen fachlichen Kompetenz bezog.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserfl\xfcgel: Die Bindung als Fundament</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Eine SE5 mit schw\xe4cher ausgepr\xe4gtem Sechserfl\xfcgel h\xe4tte ihre Forschung m\xf6glicherweise vollst\xe4ndig allein und isoliert betrieben. Bei Curie trat stattdessen eine tiefe, loyale Bindungsf\xe4higkeit hervor: Ihre Ehe mit Pierre Curie war zugleich eine wissenschaftliche Partnerschaft auf Augenh\xf6he &ndash; gemeinsame Laborarbeit, gemeinsame Ver\xf6ffentlichungen, ein gemeinsamer Nobelpreis 1903.</p>
          <p class="vb-intro">Als Pierre 1906 bei einem Verkehrsunfall starb, \xfcbernahm Marie nicht nur seine Professur an der Sorbonne &ndash; als erste Frau \xfcberhaupt &ndash;, sondern setzte die gemeinsame Forschung mit derselben Beharrlichkeit fort, die sie schon zuvor ausgezeichnet hatte. Der Sechserfl\xfcgel zeigt sich hier als F\xe4higkeit, Verlust nicht zum R\xfcckzug, sondern zur Fortsetzung der gemeinsamen Sache zu machen &ndash; Loyalit\xe4t \xfcber den Tod hinaus.</p>
        </blockquote>

        <h2 class="vb-section">4. Wissenschaft im Dienst der Menschheit: Die mobilen R\xf6ntgeneinheiten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">W\xe4hrend des Ersten Weltkriegs entwickelte Curie mobile R\xf6ntgeneinheiten &ndash; sp\xe4ter &bdquo;Petites Curies&ldquo; genannt &ndash; und fuhr selbst an die Front, um verwundeten Soldaten bei der Diagnose zu helfen. Sie bildete au\xdferdem rund 150 Frauen als R\xf6ntgenassistentinnen aus. Das ist die SE5w6 in ihrer praktischsten Form: Wissen wird nicht nur angeh\xe4uft, sondern gezielt in konkreten, verl\xe4sslichen Nutzen f\xfcr andere \xfcbersetzt.</p>
          <p class="vb-intro">Trotz zweier Nobelpreise und weltweiter Anerkennung blieb Curie \xf6ffentlich zur\xfcckhaltend, fast scheu &ndash; sie mied gro\xdfe Auftritte, wo immer m\xf6glich, und kehrte nach jeder Ehrung so schnell wie m\xf6glich ins Labor zur\xfcck. Ruhm war f\xfcr sie kein Ziel, sondern eine l\xe4stige Begleiterscheinung der eigentlichen Arbeit.</p>
        </blockquote>

        <h2 class="vb-section">5. Das unsichtbare Risiko</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Curie und ihre Zeitgenossen verstanden die Gefahren radioaktiver Strahlung zu ihren Lebzeiten nur unvollst\xe4ndig. Ihre Notizb\xfccher sind bis heute so radioaktiv kontaminiert, dass sie in bleiausgekleideten K\xe4sten aufbewahrt werden und nur mit Schutzkleidung eingesehen werden d\xfcrfen. Sie starb 1934 an aplastischer An\xe4mie, einer direkten Folge der jahrzehntelangen Strahlenexposition.</p>
          <p class="vb-intro">Dass sie trotz fortschreitender gesundheitlicher Warnsignale nicht aufh\xf6rte weiterzuforschen, zeigt die Kehrseite der SE5: Die Hingabe an das eigene Wissensgebiet kann so vollst\xe4ndig werden, dass selbst die eigene k\xf6rperliche Sicherheit dahinter zur\xfccktritt &ndash; ein Widerspruch zum Sicherheitsbed\xfcrfnis der SE5, der sich aufl\xf6st, sobald &bdquo;Sicherheit&ldquo; nicht mehr k\xf6rperlich, sondern intellektuell verstanden wird.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Eule, die im Dunkeln das Leuchten fand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Marie Curies Leben zeigt die selbsterhaltende F\xfcnf mit Sechserfl\xfcgel in ihrer h\xf6chsten, wirkungsvollsten Form: radikale Hingabe an Wissen, getragen von loyaler Bindung &ndash; erst an Pierre, dann an die Sache selbst, dann an die Ausbildung einer ganzen Generation von Forscherinnen (ihre Tochter Ir\xe8ne Joliot-Curie erhielt 1935 ebenfalls den Chemie-Nobelpreis). Kein Bed\xfcrfnis nach \xf6ffentlicher B\xfchne, sondern eine stille, unerm\xfcdliche Ausdauer im Labor.</p>
          <p class="vb-intro">Die Eule sieht im Dunkeln, was andere \xfcbersehen &ndash; und genau das tat Curie mit unsichtbarer Strahlung, die sie als Erste sichtbar und nutzbar machte. Ihr Verm\xe4chtnis leuchtet bis heute: in der Krebstherapie, in der Kernphysik, und in jeder Frau, die seither in einem Labor stand, weil eine Polin aus Warschau bewies, dass es m\xf6glich war.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        <p class="vb-intro">Die letzten Lebensjahre – geprägt von jahrzehntelanger, ungeschützter Arbeit mit radioaktiven Stoffen und dem Tod an aplastischer Anämie 1934 – werden ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-marie-curie">Krankheitsporträt zu Curie</a> gedeutet.</p>

        ${relatedLinks([
          {route:"beruehmte-rene-descartes", label:"Portr\xe4t: Ren\xe9 Descartes (SE5w6)"},
          {route:"beruehmte-amelia-earhart", label:"Portr\xe4t: Amelia Earhart (SO9w1)"},
          {route:"krankheitsportraets-marie-curie", label:"Krankheitsporträt: Marie Curie (SE5w6)"},
        ])}
      </div>
    </div>
  `);
}

export function michelleObamaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-michelle-obama-portrait.jpg" alt="Michelle Obama" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michelle Obama</p>
        <p class="krim-portrait-typ">SO8w7 &middot; Sozialer Typ 8 mit Siebenerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Anw\u00e4ltin, Autorin &amp; ehemalige First Lady der USA, geb. 1964 &ndash; Tierentsprechung: L\u00f6we</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der L\u00f6we</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>L\u00f6we</strong> ist das Tier des sozialen Typs 8 &ndash; und kaum ein Bild trifft Michelle Obama besser. Der L\u00f6we lebt nicht als Einzelk\u00e4mpfer. Er ist das Raubtier des Rudels, der Savanne, der Gemeinschaft. Die L\u00f6win jagt f\u00fcr das Rudel, besch\u00fctzt die Jungen, h\u00e4lt die Gruppe zusammen. St\u00e4rke ist hier kein Selbstzweck &ndash; sie ist im Dienst des Wir.</p>
          <p class="vb-intro">Die US-amerikanische Politikerin Michelle Obama tr\u00e4gt diese Energie. Ihre Kraft richtet sich nicht nach innen wie bei der selbsterhaltenden Acht, nicht nach der intensiven Zweierbeziehung wie bei der sexuellen Acht &ndash; sondern nach au\u00dfen, in die Gemeinschaft. Sie k\u00e4mpft f\u00fcr ihre Kinder, f\u00fcr die Kinder anderer, f\u00fcr Menschen, die keine Stimme haben. Der L\u00f6we sch\u00fctzt sein Rudel. Michelle Obama sch\u00fctzt ihr Volk.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Acht: Solidarit\u00e4t</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Acht (SO8)</strong> ist der Subtyp, den Naranjo <em>Solidarit\u00e4t</em> nannte. Die SO8 setzt ihre Kraft in den Dienst der Gruppe &ndash; der Familie, der Gemeinschaft, des Volkes. Sie kann \u00e4u\u00dferlich sanfter wirken als die anderen Acht-Subtypen, aber untersch\u00e4tzen sollte man sie nicht: Wer ihr Rudel angreift, bekommt die volle Kraft der Acht zu sp\u00fcren.</p>
          <p class="vb-intro">Michelle Obama wuchs auf der South Side von Chicago auf, in einer Arbeiterfamilie. Ihr Vater Fraser Robinson arbeitete trotz multipler Sklerose jahrzehntelang im Schichtdienst und verpasste keinen einzigen Arbeitstag. Diese Loyalit\u00e4t pr\u00e4gte sie: Man k\u00e4mpft f\u00fcr die, die man liebt. Man l\u00e4sst niemanden zur\u00fcck. Sie studierte in Princeton und Harvard, aber sie verleugnete nie, woher sie kam &ndash; und diese Verwurzelung ist typisch f\u00fcr die SO8. Die St\u00e4rke kommt aus dem Wir, nicht trotz ihm.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerfl\u00fcgel: Licht in der St\u00e4rke</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerfl\u00fcgel</strong> verleiht der sozialen Acht etwas Besonderes: W\u00e4rme, Optimismus, Beweglichkeit. Die SO8w9 ist erdiger, ruhiger, geduldiger. Die <strong>SO8w7</strong> ist lebendiger, mitrei\u00dfender, enthusiastischer. Sie kann Menschen bewegen &ndash; im w\u00f6rtlichen und im \u00fcbertragenen Sinne.</p>
          <p class="vb-intro">Michelle Obamas ber\u00fchmte DNC-Rede 2016 &ndash; <em>\u201eWhen they go low, we go high\u201c</em> &ndash; ist ein Satz des Siebenerfl\u00fcgels. Die Acht sagt: Ich bin st\u00e4rker. Die Sieben sagt: Wir steigen auf. Zusammen entsteht eine Energie, die weder naiv noch zynisch ist: Sie wei\u00df, wie hart die Welt ist &ndash; und w\u00e4hlt trotzdem das Licht. Ihre Kampagnen als First Lady &ndash; <em>Let\u2019s Move!</em>, <em>Reach Higher</em>, <em>Let Girls Learn</em> &ndash; haben alle diesen Ton: fordernd und einladend zugleich.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Wollust als Einsatz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Acht hei\u00dft <strong>Wollust</strong> &ndash; kein sexueller Begriff, sondern ein Hunger nach dem vollen, ungefilterten Leben. Die soziale Acht richtet diesen Hunger auf die Gemeinschaft: Sie will mit voller Kraft dabei sein, k\u00e4mpfen, ver\u00e4ndern, besch\u00fctzen.</p>
          <p class="vb-intro">Michelle Obama setzt sich vollst\u00e4ndig ein. <em>Becoming</em>, ihre Autobiografie aus dem Jahr 2018, ist eines der meistverkauften Memoirenb\u00fccher aller Zeiten &ndash; nicht wegen Sensationen, sondern wegen Ehrlichkeit. Sie schreibt \u00fcber Fehlgeburten, \u00fcber Ehekrisen, \u00fcber den Druck, als schwarze Frau im Wei\u00dfen Haus unsichtbar und gleichzeitig \u00fcberbewertet zu sein. Diese Offenheit ist SO8-Wollust: Wenn ich schon rede, dann vollst\u00e4ndig. Wenn ich schon da bin, dann ganz.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: W\u00fcrde als Gemeinschaftsstiftung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Michelle Obama der Welt gegeben hat, ist mehr als Kampagnen oder B\u00fccher. Es ist ein Bild von W\u00fcrde. Sie hat gezeigt, wie man mit St\u00e4rke und W\u00e4rme zugleich f\u00fchrt &ndash; wie man in einer Position extremer Sichtbarkeit geerdet bleibt, ohne sich anzupassen. Als First Lady hat sie Kinder im Garten des Wei\u00dfen Hauses Gem\u00fcse anbauen lassen und gleichzeitig \u00fcber Bildung, Ern\u00e4hrung und Gleichberechtigung weltweit mitgestaltet.</p>
          <p class="vb-intro">Das ist das Geschenk der SO8w7: die F\u00e4higkeit, Menschen zu versammeln, ohne sie zu vereinnahmen; zu f\u00fchren, ohne zu dominieren; zu fordern, ohne zu entmutigen. <em>\u201eWhen they go low, we go high\u201c</em> &ndash; das ist kein Slogan. Das ist eine Lebenshaltung. Und sie lebt sie.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so8", label:"SO8 \u2013 Der L\u00f6we: Subtyp-Profil"},
        {route:"beruehmte-toni-morrison", label:"Portr\u00e4t: Toni Morrison (SE8w9)"},
        {route:"beruehmte-natascha-ochsenknecht", label:"Porträt: Natascha Ochsenknecht (SO8w7)"},
      ])}
    </div>
  `);
}

export function nataschaOchsenknechtPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-natascha-ochsenknecht-portrait.jpg" alt="Natascha Ochsenknecht – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Natascha Ochsenknecht</p>
        <p class="krim-portrait-typ">SO8w7 &middot; Sozialer Typ 8 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle">Deutsches Model, TV-Persönlichkeit &amp; Unternehmerin, geb. 1964 &ndash; Tierentsprechung: Löwe</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Löwe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Löwe</strong> ist das Tier des sozialen Typs 8 &ndash; ein Tier, das nicht als Einzelkämpfer lebt, sondern seine Kraft in den Dienst des Rudels stellt. Kaum ein Bild passt so gut zu Natascha Ochsenknecht: Über Jahrzehnte stand sie im Zentrum einer weitverzweigten, öffentlich sichtbaren Familie &ndash; nicht als stille Randfigur, sondern als deren erkennbares Oberhaupt.</p>
          <p class="vb-intro">Das deutsche Model Natascha Ochsenknecht, geboren am 17. August 1964 in Düsseldorf, wuchs im niedersächsischen Liedingen auf, wo ihr Vater in der Baubranche erfolgreich war. Bereits mit vierzehn Jahren begann sie, von ihrer Mutter darin bestärkt, als Model zu arbeiten; mit einundzwanzig zog sie nach München, um die Karriere hauptberuflich zu verfolgen &ndash; ein früher, selbstbestimmter Aufbruch aus dem behüteten Elternhaus.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Acht: Solidarität als Familienoberhaupt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Acht (SO8)</strong> ist der Subtyp, den Naranjo <em>Solidarität</em> nannte. Die SO8 setzt ihre Kraft in den Dienst der Gruppe &ndash; der Familie, der Gemeinschaft. Sie kann äußerlich zugänglicher wirken als die anderen Achter-Subtypen, doch wer ihr Rudel angreift, bekommt die volle Kraft der Acht zu spüren. Durch ihre Ehe mit dem Schauspieler Uwe Ochsenknecht (1993&ndash;2012) und die gemeinsamen drei Kinder Wilson Gonzalez, Jimi Blue und Cheyenne Savannah wurde Natascha zur öffentlich wahrgenommenen Mittelpunktfigur einer der bekanntesten deutschen Familien.</p>
          <p class="vb-intro">Auch nach der Scheidung blieb sie diese verbindende Kraft: Mit der Reality-Doku <em>Diese Ochsenknechts</em>, die seit 2022 in mittlerweile vier Staffeln den Alltag von ihr und ihren erwachsenen Kindern begleitet, hält sie die Familie als sichtbare Einheit zusammen &ndash; auch dann, wenn innerhalb der Familie, etwa zwischen Uwe und Tochter Cheyenne, offene Konflikte bestehen. Die SO8 gibt die Zugehörigkeit zum Rudel nicht auf, selbst wenn es innerhalb des Rudels kriselt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerflügel: Lebendigkeit statt Rückzug</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel</strong> verleiht der sozialen Acht Wärme, Optimismus und Beweglichkeit. Statt sich nach einer belastenden Lebensphase zurückzuziehen, übersetzte Natascha Ochsenknecht ihre Erfahrungen konsequent in neue, sichtbare Projekte: 2012 veröffentlichte sie ihre erste Autobiografie <em>Augen zu und durch</em>, die es auf die Spiegel-Bestsellerliste schaffte &ndash; ein öffentliches, unverblümtes Verarbeiten der eigenen Geschichte statt eines stillen Rückzugs.</p>
          <p class="vb-intro">Auch unternehmerisch blieb sie aktiv: eigene Mode- und Kosmetiklinien, verschiedene mediale Auftritte als TV-Persönlichkeit und Autorin. Die SO8w7 bleibt selten lange in der Defensive &ndash; sie sucht aktiv das nächste Feld, in dem sie sichtbar und wirksam sein kann, statt sich von Rückschlägen dauerhaft bremsen zu lassen.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Acht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO8w7 ist die Fähigkeit, auch nach persönlichen Brüchen &ndash; einer gescheiterten Ehe, einer öffentlich ausgetragenen Familiengeschichte &ndash; die eigene Familie als sichtbare, funktionierende Einheit zusammenzuhalten und dabei selbst lebendig und gestaltend zu bleiben, statt zu resignieren. Dass sie schon als Jugendliche von der Existenz einer Halbschwester erfuhr, zeigt zudem früh, wie sehr Familie für sie ein komplexes, nie ganz einfaches, aber zentrales Thema war.</p>
          <p class="vb-intro">Das Schicksalsmuster der Acht ist die <strong>Lust</strong> &ndash; im Sinne von Übermaß und dem Drang, die eigene Kraft und Kontrolle auszuleben. Bei der SO8w7 kann das zur Tendenz werden, das Familienleben auch dann öffentlich und dominant zu gestalten, wenn Zurückhaltung angebrachter wäre. Die anhaltenden öffentlichen Auseinandersetzungen innerhalb der Familie Ochsenknecht zeigen, wie schwer es für eine so stark bindende, sichtbare Kraft sein kann, private Konflikte auch einmal privat zu belassen.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Eine Familie als sichtbares Rudel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Natascha Ochsenknechts Weg vom jungen Model aus Niedersachsen zur zentralen Figur einer der bekanntesten deutschen Familien zeigt eine durchgehende Konstante: die Familie nicht nur zu leben, sondern sie aktiv sichtbar und zusammengehalten zu halten &ndash; ob in der Ehe, nach der Scheidung, in Büchern oder vor der Kamera einer Reality-Serie.</p>
          <p class="vb-intro">Der Löwe verlässt sein Rudel nicht, wenn es schwierig wird &ndash; er bleibt und verteidigt es, notfalls mit aller Kraft. Natascha Ochsenknechts Rolle als verbindendes Zentrum ihrer Familie, über alle Trennungen und öffentlichen Konflikte hinweg, zeigt genau dieses Muster: Solidarität, die nicht endet, wenn es unbequem wird.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so8", label:"SO8 – Der Löwe: Subtyp-Profil"},
        {route:"beruehmte-uwe-ochsenknecht", label:"Portrait: Uwe Ochsenknecht (SX6w7) – ehemaliger Ehemann"},
        {route:"beruehmte-jimi-blue-ochsenknecht", label:"Portrait: Jimi Blue Ochsenknecht (SE2w3) – Sohn"},
        {route:"beruehmte-wilson-gonzalez-ochsenknecht", label:"Portrait: Wilson Gonzalez Ochsenknecht (SE2w3) – Sohn"},
        {route:"beruehmte-cheyenne-ochsenknecht", label:"Portrait: Cheyenne Ochsenknecht (SE3w4) – Tochter"},
        {route:"beruehmte-michelle-obama", label:"Portrait: Michelle Obama (SO8w7)"},
      ])}
    </div>
  `);
}

export function penelopeCruzPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-penelope-cruz-portrait.jpg" alt="Pen\u00e9lope Cruz" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Pen\u00e9lope Cruz</p>
        <p class="krim-portrait-typ">SE3w2 &middot; Selbsterhaltender Typ 3 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspielerin, geb. 1974 &ndash; Tierentsprechung: Waschb\u00e4r</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Waschb\u00e4r</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Waschb\u00e4r</strong> ist das Tier der selbsterhaltenden Drei &ndash; ein Tier, das nicht durch Auftritt beeindruckt, sondern durch Geschicklichkeit. Er tr\u00e4gt eine nat\u00fcrliche Maske, ver\u00e4ndert sich mit seiner Umgebung, findet in jeder Nische einen Weg &ndash; leise, funktional, ohne Aufhebens um sich selbst zu machen.</p>
          <p class="vb-intro">Die spanische Schauspielerin Pen\u00e9lope Cruz deb\u00fctierte mit f\u00fcnfzehn Jahren im spanischen Fernsehen, drehte mit siebzehn ihren ersten Kinofilm und ist seither, \u00fcber mehr als drei Jahrzehnte hinweg, pr\u00e4sent geblieben &ndash; als einzige spanische Schauspielerin mit einem Oscar, in Hollywood-Gro\u00dfproduktionen ebenso wie im spanischen Autorenkino. Und doch ist ihr \u00f6ffentliches Bild bemerkenswert unspektakul\u00e4r: kein Dauerskandal, keine inszenierte Selbstdarstellung, sondern ein Werk, das f\u00fcr sich spricht. Der Waschb\u00e4r, der sich in jede Rolle, jede Sprache, jedes Filmset einf\u00fcgt &ndash; und dabei doch niemals verschwindet.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Drei: Handwerk statt Rampenlicht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Drei (SE3)</strong> gilt als Kontratyp der Drei: Sie zeigt am wenigsten von dem, was man landl\u00e4ufig mit dem Bild der Drei verbindet. Statt Selbstinszenierung sucht sie Sicherheit \u00fcber nachweisbare Kompetenz &ndash; \u00fcber das, was tats\u00e4chlich geleistet wird, nicht \u00fcber das, was behauptet wird. Naranjo beschreibt diesen Subtyp als denjenigen, der Arbeit selbst zum Statussymbol macht: Nicht Glanz z\u00e4hlt, sondern das solide Fundament, das man sich erarbeitet hat.</p>
          <p class="vb-intro">Cruz' Karriere tr\u00e4gt diese Handschrift deutlich. Sie lie\u00df sich in klassischem Ballett und dramatischer Kunst ausbilden, bevor sie \u00fcberhaupt vor die Kamera trat &ndash; jahrelanges Training als Fundament, nicht als Fu\u00dfnote. Sie drehte in vier Sprachen, arbeitete mit Regisseuren wie Almod\u00f3var, Bigas Luna, Fernando Trueba, Woody Allen und Michael Mann, wechselte zwischen unabh\u00e4ngigem Kino und Milliarden-Franchises &ndash; und blieb dabei bemerkenswert konsequent bei der Sache: dem Handwerk. Kein \u00f6ffentliches Ringen um Deutungshoheit \u00fcber die eigene Person, sondern eine stille Verl\u00e4sslichkeit, Film f\u00fcr Film.</p>
          <p class="vb-intro">Der selbsterhaltende Instinkt richtet die Drei auf das Konkrete: auf die eigene Familie, auf finanzielle und berufliche Stabilit\u00e4t, auf ein Leben, das tr\u00e4gt. Cruz ist bekannt daf\u00fcr, das Privatleben mit Javier Bardem und ihren beiden Kindern konsequent aus der \u00d6ffentlichkeit herauszuhalten &ndash; keine Homestory, keine inszenierte Familienidylle. Der Waschb\u00e4r bezieht seinen Bau dort, wo niemand ihn findet.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: Loyalit\u00e4t und W\u00e4rme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> gibt der selbsterhaltenden Drei eine W\u00e4rme, die eine SE3 mit schw\u00e4cherem Zweierfl\u00fcgel selten in dieser Deutlichkeit zeigt. Wo eine Drei mit schwach ausgepr\u00e4gtem Zweierfl\u00fcgel sich in Funktionalit\u00e4t ersch\u00f6pfen k\u00f6nnte, bringt der Zweierfl\u00fcgel den Wunsch nach echter Verbindung, nach Zugeh\u00f6rigkeit zu Menschen, denen man vertraut &ndash; und die Bereitschaft, sich f\u00fcr sie einzusetzen.</p>
          <p class="vb-intro">Diese Loyalit\u00e4t zeigt sich am deutlichsten in Cruz' Zusammenarbeit mit Pedro Almod\u00f3var: \u00dcber sechs Spielfilme hinweg, beginnend mit <em>Fessle mich!</em> 1990 (in einer Nebenrolle) bis zu <em>Parallele M\u00fctter</em>, f\u00fcr den sie ihre zweite Oscar-Nominierung erhielt, hat sie sich immer wieder demselben Regisseur anvertraut &ndash; nicht aus Kalk\u00fcl, sondern aus einer \u00fcber Jahrzehnte gewachsenen, fast famili\u00e4ren Bindung. Almod\u00f3var selbst beschreibt sie als eine, die sich vollst\u00e4ndig gibt, sobald Vertrauen besteht.</p>
          <p class="vb-intro">Auch ihr humanit\u00e4res Engagement tr\u00e4gt diese Handschrift: langj\u00e4hrige Unterst\u00fctzung f\u00fcr UNHCR, f\u00fcr Bildungsprojekte in Indien und Uganda, f\u00fcr Hilfsprogramme in Krisenregionen &ndash; meist ohne gro\u00dfe mediale Inszenierung. Die SE3w2 will nicht nur funktionieren. Sie will, dass die Menschen, f\u00fcr die sie sich einsetzt, tats\u00e4chlich etwas davon haben.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Verwandlungsk\u00fcnstlerin: Masken als Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Waschb\u00e4r tr\u00e4gt eine Maske &ndash; und genau das ist Cruz' auff\u00e4lligstes schauspielerisches Merkmal: die F\u00e4higkeit, in jeder Rolle vollst\u00e4ndig zu verschwinden. Die versoffene Nachbarin in <em>Volver</em>, die eifers\u00fcchtige K\u00fcnstlerin in <em>Vicky Cristina Barcelona</em>, die verzweifelte Mutter in <em>Madres Paralelas</em>, die glamour\u00f6se S\u00e4ngerin in <em>Nine</em> &ndash; kaum eine Rolle gleicht der anderen, und doch bleibt jede glaubw\u00fcrdig bis in die kleinste Geste.</p>
          <p class="vb-intro">Das ist keine Zurschaustellung von Vielseitigkeit als Selbstzweck, sondern die SE3-Logik in ihrer klarsten Ausprägung: Kompetenz beweist sich durch das Ergebnis, nicht durch die Ank\u00fcndigung. Cruz spricht selten \u00f6ffentlich \u00fcber ihre Vorbereitungsmethoden oder ihr &bdquo;Verfahren&ldquo; &ndash; sie liefert stattdessen das fertige Werk und l\u00e4sst es f\u00fcr sich sprechen. Der Waschb\u00e4r, der die Maske nicht tr\u00e4gt, um zu t\u00e4uschen, sondern weil sie das Werkzeug ist, mit dem er arbeitet.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Drei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE3 ist ihre F\u00e4higkeit, Talent in dauerhafte, \u00fcberpr\u00fcfbare Substanz zu verwandeln. \u00dcber drei Jahrzehnte, mehr als sechzig Filme, ein Oscar, zwei weitere Nominierungen, ein Stern auf dem Walk of Fame &ndash; eine Karriere, die nicht auf einem einzigen H\u00f6hepunkt beruht, sondern auf best\u00e4ndiger, wiederholter Leistung. Das ist die Drei als Aufbaukraft: nicht der eine gro\u00dfe Wurf, sondern die verl\u00e4ssliche Konstante.</p>
          <p class="vb-intro">Das Schicksalsmuster der Drei ist die <strong>Eitelkeit / T\u00e4uschung</strong> &ndash; bei der SE3 subtiler als bei den anderen Dreier-Subtypen, aber nicht abwesend: das Bed\u00fcrfnis, durch reine Funktionalit\u00e4t unangreifbar zu erscheinen. Der beharrliche R\u00fcckzug aus dem Privaten kann selbst zur Maske werden &ndash; eine Form der Kontrolle \u00fcber das eigene Bild, die genauso viel Inszenierung erfordert wie das Gegenteil. &bdquo;Ich rede nicht \u00fcber mich&ldquo; ist am Ende auch eine Aussage \u00fcber sich selbst.</p>
          <p class="vb-intro">Der Zweierfl\u00fcgel bringt sein eigenes Schattenmuster mit: die Sorge, ohne den Dienst an anderen &ndash; an Regisseuren, an Kollegen, an den eigenen Kindern &ndash; nicht genug zu sein. Funktionieren und Geben verschmelzen dann zu einer Identit\u00e4t, die kaum noch Raum f\u00fcr ein Ich l\u00e4sst, das einfach nur da ist, ohne zu leisten.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Funktionieren zum Sein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Drei f\u00fchrt von der Frage <em>Was habe ich geleistet?</em> zur Erkenntnis <em>Ich bin &ndash; unabh\u00e4ngig davon, was ich vorweisen kann.</em> F\u00fcr die SE3 bedeutet das, den eigenen Wert nicht l\u00e4nger an das n\u00e4chste Projekt, die n\u00e4chste bewiesene Kompetenz zu kn\u00fcpfen.</p>
          <p class="vb-intro">Cruz hat in Interviews wiederholt betont, dass sie mit den Jahren gelernt habe, Rollen auszuw\u00e4hlen, die ihr wirklich etwas bedeuten, statt jeder Gelegenheit nachzujagen &ndash; ein leiser, aber deutlicher Schritt vom Zwang zum Funktionieren hin zu bewusster Auswahl. Der Waschb\u00e4r, der irgendwann nicht mehr jede Nische f\u00fcllen muss, um sich seines Wertes sicher zu sein &ndash; sondern w\u00e4hlt, wo er wirklich hingeh\u00f6rt, und darin ruht.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se3", label:"SE3 \u2013 Der Waschb\u00e4r: Subtyp-Profil"},
        {route:"beruehmte-sadhguru", label:"Portr\u00e4t: Sadhguru (SE3w2)"},
        {route:"beruehmte-wolodymyr-selenskyj", label:"Portr\u00e4t: Wolodymyr Selenskyj (SE3w2)"},
        {route:"beruehmte-norah-jones", label:"Porträt: Norah Jones (SE3w4)"},
      ])}
    </div>
  `);
}

export function robertDeNiroPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-robert-de-niro-portrait.jpg" alt="Robert De Niro – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robert De Niro</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler &amp; Produzent, geb. 1943 in New York City &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; ein Tier, das nicht durch Lautstärke beeindruckt, sondern durch Präzision. Er beobachtet lange, bevor er handelt. Er verschwendet keine Bewegung. Und wenn er schließlich zuschlägt, dann mit einer Genauigkeit, die keine Wiederholung braucht.</p>
          <p class="vb-intro">Der US-amerikanische Schauspieler Robert De Niro gilt seit Jahrzehnten als einer der genauesten Beobachter seines Fachs. Kein Interview, in dem er sich selbst erklärt. Keine Talkshow-Präsenz, die von seiner Arbeit ablenkt. Der Adler zeigt sich nicht, um gesehen zu werden. Er zeigt sich, wenn die Rolle es verlangt &ndash; und verschwindet danach wieder in die Stille.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Wahrheit als Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> wendet ihr Perfektionsstreben nicht nach außen, auf die Korrektur der Welt, sondern nach innen: auf das eigene Handwerk, die eigene Vorbereitung, die eigene Integrität. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Die SE1 fragt sich unablässig: Ist das wirklich richtig? Genüge ich meinem eigenen Anspruch an Wahrhaftigkeit?</p>
          <p class="vb-intro">Bei De Niro ist diese Frage zum Markenzeichen geworden. Für <em>Wie ein wilder Stier</em> (1980) nahm er über 25 Kilogramm zu, um Jake LaMottas physischen Verfall nach dessen Karriereende glaubwürdig zu verkörpern &ndash; nachdem er zuvor monatelang als Amateurboxer trainiert hatte, um die Kämpfe selbst zu bestreiten. Für <em>Taxi Driver</em> (1976) fuhr er wochenlang tatsächlich Taxi durch New York, um Travis Bickles Isolation am eigenen Leib zu erfahren. Das ist keine Marketingstrategie. Das ist die SE1, die sich weigert, etwas darzustellen, das sie nicht wirklich verstanden hat.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Die Stille hinter der Intensität</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> fügt der SE1er-Energie eine Qualität hinzu, die zunächst paradox wirkt: Zurückhaltung. Während die Einser-Energie bei schwach ausgeprägtem Neunerflügel angespannt und korrekturbewusst bleibt, bringt der Neunerflügel eine Fähigkeit zum Verschmelzen mit, zum vollständigen Aufgehen in etwas Größerem als das eigene Ich.</p>
          <p class="vb-intro">Das erklärt De Niros berühmte Zurückhaltung außerhalb der Kamera &ndash; ein Mann, der auf der Leinwand explosive, oft gewalttätige Figuren spielt, und im echten Leben als notorisch wortkarg, fast schüchtern gilt. Journalisten beschreiben Interviews mit ihm regelmäßig als zähes Ringen um mehr als einsilbige Antworten. Der Neunerflügel zieht sich zurück, sobald die Aufgabe erledigt ist &ndash; er sucht keine Bühne für sich selbst, nur für die Rolle. Die jahrzehntelange, tiefe künstlerische Partnerschaft mit Regisseur Martin Scorsese, von <em>Hexenkessel</em> (1973) bis <em>The Irishman</em> (2019), zeigt dieselbe Qualität: loyale, geduldige Verschmelzung mit einer gemeinsamen Vision, ohne das Bedürfnis, sich in den Vordergrund zu drängen.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Zwei Oscars, ein halbes Jahrhundert Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">De Niro gewann den Oscar als bester Nebendarsteller für seine Rolle als junger Vito Corleone in <em>Der Pate II</em> (1975) &ndash; eine Rolle fast ohne englischen Dialog, gespielt in sizilianischem Italienisch, das er eigens dafür lernte &ndash; und den Oscar als bester Hauptdarsteller für <em>Wie ein wilder Stier</em> (1981). Dazwischen und danach: <em>Es war einmal in Amerika</em>, <em>GoodFellas</em>, <em>Heat</em>, <em>Casino</em> &ndash; ein Werk, das über Jahrzehnte lieber tiefe Genauigkeit suchte als schnellen Ruhm.</p>
          <p class="vb-intro">Nach den Anschlägen vom 11. September 2001 gründete De Niro gemeinsam mit anderen das Tribeca Film Festival, um dem verwüsteten Lower Manhattan wirtschaftliche und kulturelle Impulse zu geben &ndash; kein Akt der Selbstdarstellung, sondern der stille, praktische Wiederaufbau einer verletzten Nachbarschaft. Der Adler kreist über seinem eigenen Revier, auch wenn niemand hinsieht.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist eine seltene Kombination: äußerste Genauigkeit im Handwerk, gepaart mit der Fähigkeit, das eigene Ego dabei vollständig zurückzustellen. De Niros Method-Acting-Exzesse waren nie Selbstzweck &ndash; sie dienten einzig der Wahrhaftigkeit der Figur.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Rigidität, mit der die SE1 an ihren eigenen Maßstäben festhält, und in der Isolation, die der Neunerflügel begünstigt. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong>, der sich bei der SE1 typischerweise nach innen wendet &ndash; als chronische Unzufriedenheit mit dem eigenen Werk. De Niro selbst hat wiederholt erklärt, seine fertigen Filme kaum je erneut anzusehen; die vollendete Arbeit interessiert ihn weniger als der nächste ungelöste Anspruch. Kritiker bemängelten zudem in späteren Jahren eine gewisse Beliebigkeit in der Rollenauswahl &ndash; ein möglicher Hinweis darauf, dass selbst die strengste Eins nicht vor Ermüdung gefeit ist.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Richter zur Hingabe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt vom Zorn zur Gelassenheit &ndash; von der Frage <em>Ist es perfekt?</em> zur Erkenntnis <em>Ich habe mein Bestes gegeben, und das genügt.</em> Für die SE1w9 bedeutet das, die eigene Hingabe an das Handwerk nicht länger als Beweis der eigenen Rechtschaffenheit zu brauchen, sondern als das zu erleben, was sie im Kern ist: ein Dienst an etwas Größerem.</p>
          <p class="vb-intro">De Niros jahrzehntelange Treue zu seinem Handwerk, unabhängig von Ruhm oder Kritik, liest sich als genau dieser Weg: nicht die Suche nach Anerkennung, sondern die stille, beharrliche Hingabe an die Wahrhaftigkeit der Arbeit selbst. Der Adler muss niemandem beweisen, dass er fliegen kann. Er fliegt einfach.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-sting", label:"Porträt: Sting (SE1w9)"},
        {route:"beruehmte-christoph-waltz", label:"Porträt: Christoph Waltz (SE1w2)"},
        {route:"beruehmte-pierce-brosnan", label:"Porträt: Pierce Brosnan (SE1w2)"},
        {route:"beruehmte-anthony-hopkins", label:"Porträt: Anthony Hopkins (SE1w9)"},
        {route:"beruehmte-magnus-carlsen", label:"Porträt: Magnus Carlsen (SE1w9)"},
        {route:"krankheitsportraets-robert-de-niro", label:"Krankheitsporträt: Robert De Niro (SE1w9) – Prostatakrebs"},
      ])}
    </div>
  `);
}

export function sigmundFreudPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-sigmund-freud-portrait.jpg" alt="Dr. Sigmund Freud – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Sigmund Freud</p>
        <p class="krim-portrait-typ">SO6w5 &middot; Sozialer Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Arzt, Neurophysiologe &amp; Begr\u00fcnder der Psychoanalyse, 1856&ndash;1939 &ndash; Tierentsprechung: Erdm\u00e4nnchen</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Erdm\u00e4nnchen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Erdm\u00e4nnchen</strong> ist das Tier des sozialen Typs 6 &ndash; ein hochsoziales Wesen, das in streng organisierten Gemeinschaften lebt und seinen Zusammenhalt durch Wachheit sichert. Erdm\u00e4nnchen stellen Posten auf: W\u00e4chter, die aufrecht auf den Hinterbeinen stehen und den Horizont beobachten &ndash; bereit, beim ersten Anzeichen von Gefahr Alarm zu schlagen. Sie sind mutig, loyal und zutiefst auf die Gruppe ausgerichtet. Ohne Gemeinschaft sind sie verloren. In ihr sind sie unersch\u00f6pflich.</p>
          <p class="vb-intro">Der \u00f6sterreichische Psychoanalytiker Sigmund Freud war dieses Erdm\u00e4nnchen &ndash; aufrecht, wachsam, den Blick auf das gerichtet, was andere nicht sehen wollten oder konnten: das Unbewusste. Er stand auf den Hinterbeinen seiner Zeit und rief Alarm &ndash; nicht vor \u00e4u\u00dferen Feinden, sondern vor den inneren. Die Psychoanalyse war sein Wachposten: ein System, das die verborgenen Kr\u00e4fte der Seele sichtbar machen sollte, bevor sie den Menschen von innen heraus zerst\u00f6rten.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sechs: Pflicht und Bewegung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Sechs (SO6)</strong> ist nach Naranjo der Subtyp, den er <em>Pflicht</em> nannte: Sicherheit entsteht durch Zugeh\u00f6rigkeit zu einer Gruppe mit klaren Regeln, durch Treue zur Gemeinschaft, durch das Erf\u00fcllen einer Aufgabe, die gr\u00f6\u00dfer ist als man selbst. Die SO6 baut Institutionen, Bewegungen, Systeme &ndash; weil das Kollektiv Schutz bietet, den der Einzelne allein nicht findet.</p>
          <p class="vb-intro">Freud gr\u00fcndete nicht nur eine Therapiemethode &ndash; er begr\u00fcndete eine Bewegung. Die Wiener Psychoanalytische Vereinigung, sp\u00e4ter die Internationale Psychoanalytische Vereinigung: Freud wollte eine Gemeinschaft von Gleichgesinnten, die seine Erkenntnisse tr\u00fcgen, verbreiteten, verteidigten. Er war ihnen gegen\u00fcber tief loyal &ndash; und erwartete dieselbe Loyalit\u00e4t zur\u00fcck. Als Carl Gustav Jung und Alfred Adler eigene Wege gingen, erlebte Freud das nicht als intellektuelle Meinungsverschiedenheit, sondern als pers\u00f6nlichen Verrat. Das ist die SO6: <em>Wir sind eine Gemeinschaft. Wer geht, bricht den Bund.</em></p>
          <p class="vb-intro">Seine Pflicht sah Freud in der Wahrheit &ndash; auch dort, wo sie unbequem war. Sexualit\u00e4t als treibende Kraft der Psyche, das Unbewusste als eigentliches Zentrum des Seelenlebens, Religion als kollektive Neurose: Das waren keine harmlosen Thesen in einer Zeit, die das alles lieber verdr\u00e4ngte. Freud sagte es trotzdem. Das Erdm\u00e4nnchen schl\u00e4gt Alarm, auch wenn der Schwarm es nicht h\u00f6ren will.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Das System der Seele</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sozialen Sechs eine charakteristische intellektuelle Tiefe: die F\u00e4higkeit, nicht nur zu beobachten, sondern das Beobachtete in ein koh\u00e4rentes System zu \u00fcberf\u00fchren. Die SO6w5 gen\u00fcgt sich nicht mit Warnrufen &ndash; sie will verstehen, warum die Gefahr existiert, wie sie funktioniert, wie man ihr systematisch begegnen kann.</p>
          <p class="vb-intro">Freuds Werk ist das reinste Beispiel daf\u00fcr: Triebtheorie, Topisches Modell, Strukturmodell (Es, Ich, \u00dcber-Ich), Traumdeutung, Abwehrmechanismen, \u00dcbertragung, Gegen\u00fcbertragung &ndash; ein theoretisches Geb\u00e4ude von au\u00dferordentlicher Geschlossenheit. Der F\u00fcnferfl\u00fcgel erm\u00f6glichte ihm, jahrzehntelang an einem System zu bauen, ohne den Faden zu verlieren. <em>Die Traumdeutung</em>, <em>Drei Abhandlungen zur Sexualtheorie</em>, <em>Das Unbehagen in der Kultur</em>: Diese Werke kommen nicht aus Intuition allein. Sie kommen aus jahrelangem Beobachten, Sammeln, Denken, Ordnen.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel erkl\u00e4rt auch Freuds ber\u00fchmte Unnahbarkeit im analytischen Setting: Schweigen, Abstinenz, die Couch statt des Augenkontakts. Das ist nicht K\u00e4lte. Das ist der F\u00fcnferfl\u00fcgel, der Beobachtungsraum schafft &ndash; damit die SO6 sehen kann, was wirklich geschieht.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO6w5 ist ihre F\u00e4higkeit, das Unsichtbare sichtbar zu machen und daraus ein Werkzeug zu bauen, das anderen hilft. Freuds Entdeckung des Unbewussten hat die Art, wie Menschen \u00fcber sich selbst denken, f\u00fcr immer ver\u00e4ndert. Ob man seine Theorien f\u00fcr richtig h\u00e4lt oder nicht: Die Frage nach dem, was unter der Oberfl\u00e4che des Bewusstseins wirkt, ist seitdem nicht mehr wegzudenken.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Feigheit</strong> &ndash; nicht als mangelnder Mut, sondern als die innere Bewegung, die Autorit\u00e4ten aufbaut und dann f\u00fcrchtet, was passiert, wenn diese Autorit\u00e4ten fallen. Freud, der Religionskritiker, war in seiner eigenen Bewegung nicht frei davon: Er erwartete Gefolgschaft, reagierte auf Abweichung mit Ausschluss, baute eine Orthodoxie auf, die er selbst zu hinterfragen nicht immer bereit war. Das Erdm\u00e4nnchen, das den Wachposten verteidigt &ndash; manchmal auch gegen die eigene Herde.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel bringt die Gefahr der Systemgeschlossenheit: Wenn das Geb\u00e4ude zu fest gebaut ist, l\u00e4sst es keine neuen Fenster mehr zu. Freuds sp\u00e4te Unbeugsamkeit gegen\u00fcber Kritik ist auch das: der Preis eines Lebenswerks, das sich selbst nicht mehr in Frage stellen kann.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vertrauen ohne Kontrolle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Kann ich der Gruppe vertrauen?</em> zur Erkenntnis <em>Ich kann mir selbst vertrauen &ndash; auch ohne Wachposten.</em> F\u00fcr die SO6w5 bedeutet das, die Bewegung, die man aufgebaut hat, loszulassen &ndash; nicht zu verlassen, aber nicht mehr zu kontrollieren. Wissen zu teilen, ohne zu bestimmen, was daraus wird.</p>
          <p class="vb-intro">Freud floh 1938, mit 82 Jahren und schwer krank, aus Wien nach London &ndash; nachdem die Nationalsozialisten seine B\u00fccher verbrannt und seine Welt zerst\u00f6rt hatten. Er arbeitete bis kurz vor seinem Tod weiter. Das Erdm\u00e4nnchen auf seinem Posten, bis zum letzten Moment. Das ist die SO6w5 auf ihrem Heilungsweg: nicht aus Pflicht, sondern weil das Wachen selbst Sinn ergibt &ndash; und weil man dem vertraut, was man gesehen hat.</p>
          <p class="vb-intro">Diese letzten 16 Lebensjahre – geprägt von über 30 Operationen wegen eines Kieferkrebses, den Freud trotz Diagnose nicht zum Anlass nahm, seine Zigarren aufzugeben – werden ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">Krankheitsporträt zu Freud</a> gedeutet.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      <div class="vb-section" style="max-width:100%;margin-top:1rem;">
        <h3 style="font-size:0.95rem;font-weight:700;margin:0 0 .6rem;color:var(--muted);">Fanartikel</h3>
        <a class="book-tip" href="https://www.redbubble.com/de/i/tasse/Ber%C3%BChmte-%C3%84rzte-Therapeuten-Psychologen-Enneagramm-von-DetlefRathmer/41318557/7yqg" target="_blank" rel="noopener sponsored">
          <span class="book-tip__icon">\u2615</span>
          <div class="book-tip__text">
            <strong>Tasse \u00bbBer\u00fchmte \u00c4rzte, Therapeuten, Psychologen\u00ab</strong>
            <span>Neun bedeutende Heiler des Enneagramms auf einer Tasse vereint \u2013 darunter Freud selbst \u2013 bei Redbubble bestellen.</span>
          </div>
          <span class="book-tip__arrow">\u2192</span>
        </a>
      </div>
      ${relatedLinks([
        {route:"krankheitsportraets-sigmund-freud", label:"Krankheitsporträt: Sigmund Freud (SO6w5)"},
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so6", label:"SO6 \u2013 Das Erdm\u00e4nnchen: Subtyp-Profil"},
        {route:"beruehmte-andy-reid", label:"Portr\u00e4t: Andy Reid (SO6w5)"},
        {route:"beruehmte-immanuel-kant", label:"Portr\u00e4t: Immanuel Kant (SO6w5)"},
      ])}
    </div>
  `);
}

export function thomasChaanhingPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-thomas-chaanhing-portrait.jpg" alt="Thomas Chaanhing – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Thomas Chaanhing</p>
        <p class="krim-portrait-typ">SE2w3 &middot; Selbsterhaltender Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Dänisch-chinesischer Schauspieler, geb. 1976 in Dänemark &ndash; Tierentsprechung: Flusspferd</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei &ndash; ein Wesen, das seine Basis nicht in einer einzigen Kultur oder Sprache sucht, sondern sich in mehreren Welten zugleich verwurzelt, um in jeder von ihnen zuverlässig präsent sein zu können. Thomas Chaanhing wurde am 2. Januar 1976 in Dänemark als Sohn dänisch-chinesischer Herkunft geboren – zwei kulturelle Wurzeln, die er im Lauf seiner Karriere nie gegeneinander ausspielte, sondern beide gleichermaßen pflegte.</p>
          <p class="vb-intro">Seine Sprachkompetenz spiegelt diese doppelte Verwurzelung wider: Neben seiner dänischen Muttersprache spricht er fließend Kantonesisch, Englisch, Schwedisch, Deutsch und Mandarin – eine sprachliche Basis, die weit über das für eine Schauspielkarriere übliche Maß hinausgeht und von einem tiefen, persönlichen Bedürfnis nach Verbindung mit unterschiedlichen kulturellen Wurzeln zeugt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: Verlässlichkeit im engsten Kreis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> nennt Naranjo <em>Me First</em>: Fürsorge richtet sich zuerst auf die eigene, konkrete Basis und den engsten Kreis. Seit dem 25. September 2004 ist Chaanhing mit Sara Chaanhing Kennedy verheiratet – eine langjährige, stabile Bindung, die parallel zu einer internationalen, oft von Produktion zu Produktion wechselnden Schauspielkarriere Bestand hat.</p>
          <p class="vb-intro">Diese Verlässlichkeit im privaten Kern zeigt sich auch in seiner beruflichen Vielseitigkeit: Action- und Kampfkunstschauspiel, Synchronisation, Motion Capture, musikalisches Schauspiel, Gesang und Theaterarbeit – Chaanhing baut sein berufliches Fundament nicht auf eine einzelne, schmale Nische, sondern auf ein breites, tragfähiges Können, mit dem er in vielen unterschiedlichen Produktionen gebraucht werden kann.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Sichtbare Rollen in internationalen Großproduktionen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der selbsterhaltenden Zwei den Antrieb, aus einer breiten, verlässlichen Basis heraus sichtbaren, öffentlichkeitswirksamen Erfolg zu formen. Chaanhing übernahm tragende Nebenrollen in international ausgestrahlten Produktionen: als Gerel in <em>Marco Polo</em> (2014), als Lord Agelmar Jagad in <em>The Wheel of Time</em> (seit 2021), als Jiang Liei in <em>In 80 Tagen um die Welt</em> (2021) und als Lucas Ozera in <em>Vampire Academy</em> (2022).</p>
          <p class="vb-intro">Diese Rollenauswahl zeigt ein wiederkehrendes Muster: keine einzelne, ihn definierende Hauptrolle, sondern eine kontinuierliche, über Jahre gewachsene Präsenz in unterschiedlichen großen, internationalen Formaten. Der Dreierflügel übersetzt vielseitiges Können konsequent in sichtbare, wiederkehrende Beteiligung an bekannten Produktionen.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE2w3 liegt in der Fähigkeit, zwei kulturelle Herkünfte und ein außergewöhnlich breites schauspielerisches Fähigkeitenspektrum zu einer verlässlichen, vielseitig einsetzbaren beruflichen Basis zu verbinden, statt sich auf eine einzelne Identität oder Nische zu beschränken.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, durch die eigene Verlässlichkeit und Vielseitigkeit unentbehrlich zu sein. Bei der SE2w3 kann sich das darin zeigen, dass der eigene Wert vor allem über die Breite des Einsatzes bewiesen wird – viele Sprachen, viele Disziplinen, viele Produktionen –, statt sich auf eine einzige, klar erkennbare Signaturrolle zu konzentrieren.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Eine Karriere aus vielen tragenden Rollen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Von der dänisch-chinesischen Herkunft über eine außergewöhnliche Sprachvielfalt bis zu tragenden Rollen in mehreren internationalen Serienformaten zieht sich ein roter Faden durch Chaanhings Werk: Verlässlichkeit als Grundprinzip, sowohl im privaten Kern als auch in der beruflichen Präsenz.</p>
          <p class="vb-intro">Das Flusspferd verlässt sein angestammtes Gewässer nicht, um zu gefallen – es macht sein Revier größer, ohne die eigene Basis aufzugeben. Thomas Chaanhings Weg von einer doppelten kulturellen Herkunft zu einer international sichtbaren Schauspielkarriere zeigt diesen Antrieb in seiner beständigsten Form: Vielseitigkeit, die immer auf einer festen, privaten Basis ruht.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se2", label:"SE2 – Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-stromae", label:"Portrait: Stromae (SE2w3)"},
        {route:"beruehmte-nate-dogg", label:"Portrait: Nate Dogg (SE2w3)"},
      ])}
    </div>
  `);
}

export function ursulaVonDerLeyenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-ursula-von-der-leyen-portrait.jpg" alt="Ursula von der Leyen" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ursula von der Leyen</p>
        <p class="krim-portrait-typ">SO1w9 &middot; Sozialer Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Pr\u00e4sidentin der Europ\u00e4ischen Kommission, geb. 1958 &ndash; Tierentsprechung: Gans</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Gans</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Gans</strong> ist kein stilles Tier. Sie steht Wache, meldet jede St\u00f6rung laut, verteidigt ihr Territorium notfalls mit Bissen &ndash; und sie tut das nicht aus Bosheit, sondern aus einem tiefen inneren Auftrag heraus: Ordnung muss verteidigt werden, sonst zerf\u00e4llt sie. Kein anderes Tier passt besser zu Ursula von der Leyen, deren gesamte politische Laufbahn von einem unersch\u00fctterlichen Sendungsbewusstsein getragen wird.</p>
          <p class="vb-intro">Die deutsche Politikerin Ursula von der Leyen durchlief vom Bundesfamilienministerium \u00fcber das Verteidigungsministerium bis an die Spitze der EU-Kommission einen Aufstieg in einer Geradlinigkeit, die selten ist. Immer dort, wo Strukturen neu geordnet werden mussten, immer mit dem Anspruch, es besser, disziplinierter, europ\u00e4ischer zu machen als die Vorg\u00e4nger. Die Gans wacht nicht zuf\u00e4llig &ndash; sie hat sich den Wachposten gesucht.</p>
          <p class="vb-intro">Doch wer wacht, ger\u00e4t auch in Konflikt mit allem, was er zu besch\u00fctzen glaubt. Genau an diesem Punkt wird die Gans zu einer der umstrittensten Figuren der europ\u00e4ischen Politik der letzten Jahre &ndash; dazu gleich mehr.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Eins: Die Welt soll richtig funktionieren</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Eins (SO1)</strong> richtet ihr Vollkommenheitsstreben, anders als die selbsterhaltende Eins, nicht prim\u00e4r nach innen, sondern nach au\u00dfen: auf Systeme, Institutionen, das Kollektiv. Sie will nicht nur selbst richtig handeln &ndash; sie will, dass die Welt richtig funktioniert, und empfindet eine fast missionarische Verantwortung, daf\u00fcr zu sorgen. Naranjo beschreibt diesen Subtyp als moralisch besonders wortgewaltig, oft mit einem ausgepr\u00e4gten Sinn f\u00fcr das, was "man tun muss".</p>
          <p class="vb-intro">Bei von der Leyen zeigt sich das in ihrem Politikstil: Sie handelt in Krisen schnell, zentralisiert Entscheidungen, wenn sie Uneinigkeit als Gefahr f\u00fcr das gro\u00dfe Ganze wahrnimmt, und begr\u00fcndet ihr Vorgehen fast immer mit \u00fcbergeordneter Notwendigkeit &ndash; gemeinsame Impfstoffbeschaffung f\u00fcr ganz Europa, gemeinsame Antwort auf den Ukraine-Krieg, gemeinsamer Kurs in der Klimapolitik. Die soziale Eins denkt in Systemen, nicht in Einzelf\u00e4llen.</p>
          <p class="vb-intro">Diese Haltung bringt echte Handlungsf\u00e4higkeit in Krisenzeiten &ndash; sie bringt aber auch die Versuchung mit sich, Kontrolle mit Verantwortung zu verwechseln, und abweichende Meinungen als St\u00f6rung der richtigen Ordnung zu behandeln statt als legitimen Teil einer Demokratie.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Diplomatie als Machtinstrument</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> mildert die konfrontative Sch\u00e4rfe der reinen sozialen Eins ab. Er bringt eine ruhige, ausgleichende, konsensorientierte Note hinein &ndash; nach au\u00dfen wirkt die SO1w9 vers\u00f6hnlich, geduldig, bereit zum Kompromiss. Doch diese Ruhe ist kein Verzicht auf das eigene Ziel. Sie ist ein Werkzeug, das eigene Ziel leiser, aber nicht weniger konsequent durchzusetzen.</p>
          <p class="vb-intro">Von der Leyens diplomatischer Stil in Br\u00fcssel &ndash; das geduldige Zusammenhalten von 27 h\u00f6chst unterschiedlichen Mitgliedstaaten, das best\u00e4ndige Suchen nach dem kleinsten gemeinsamen Nenner, das Vermeiden offener Konfrontation, wo immer m\u00f6glich &ndash; ist genau dieser Neunerfl\u00fcgel in Aktion. Sie wirkt selten laut. Sie wirkt fast immer beharrlich.</p>
          <p class="vb-intro">Gerade diese Kombination aus sanftem Auftreten und hartem Durchsetzungswillen macht sie f\u00fcr Kritiker so schwer greifbar: Konfrontation wird nicht offen gesucht, sondern durch stille Fakten geschaffen &ndash; durch Entscheidungen, die l\u00e4ngst getroffen sind, bevor die \u00f6ffentliche Debatte \u00fcberhaupt beginnt.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten: Die Kontroversen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO1w9 ist un\u00fcbersehbar: Krisenfestigkeit, die F\u00e4higkeit, in k\u00fcrzester Zeit europ\u00e4ische Einigkeit herzustellen, wo eigentlich 27 widerspr\u00fcchliche nationale Interessen aufeinandertreffen. Die gemeinsame europ\u00e4ische Impfstoffbeschaffung zu Beginn der Corona-Pandemie und die schnelle, geschlossene EU-Antwort auf den russischen Angriffskrieg gegen die Ukraine gelten vielen als Beleg daf\u00fcr, dass sie in Krisen liefert.</p>
          <p class="vb-intro">Der Schatten ist ebenso real und gut dokumentiert. Im Zentrum steht die sogenannte "Pfizergate"-Aff\u00e4re: W\u00e4hrend der milliardenschweren Verhandlungen \u00fcber Impfstoff-Liefervertr\u00e4ge tauschte von der Leyen pers\u00f6nliche SMS-Nachrichten mit Pfizer-Chef Albert Bourla aus &ndash; deren Herausgabe die Kommission trotz Presseanfragen und einer Klage der New York Times \u00fcber Jahre verweigerte. Die Europ\u00e4ische B\u00fcrgerbeauftragte r\u00fcgte die Kommission offiziell wegen Missmanagements, und ein EU-Gericht erkl\u00e4rte die Verweigerung der Herausgabe f\u00fcr rechtswidrig. Bis heute sind die vollst\u00e4ndigen Nachrichten nicht \u00f6ffentlich einsehbar.</p>
          <p class="vb-intro">Hinzu kommt scharfe Kritik an einer wachsenden Machtkonzentration in der Kommissionsspitze selbst: Entscheidungen zur Impfstoffbeschaffung, zu gemeinsamen R\u00fcstungsk\u00e4ufen f\u00fcr die Ukraine und zu Sanktionspaketen wurden wiederholt als zu wenig transparent, zu wenig durch das Europ\u00e4ische Parlament kontrolliert und zu stark auf von der Leyens pers\u00f6nliches Umfeld zugeschnitten beschrieben &ndash; ein Vorwurf, den auch Stimmen innerhalb der EU-Institutionen selbst erheben. Das schlie\u00dft Fragen nach der N\u00e4he zu einzelnen Wirtschaftsakteuren und Digitalkonzernen ein, deren Interessen in zentralen Weichenstellungen der EU-Digital- und Finanzpolitik auff\u00e4llig oft ber\u00fccksichtigt wurden &ndash; ein Muster, das Kritiker als Interessenkonflikt werten, ohne dass bislang eine gerichtsfeste Beweislage f\u00fcr pers\u00f6nliche Bereicherung vorl\u00e4ge.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Von der moralischen Gewissheit zur echten Rechenschaft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der sozialen Eins f\u00fchrt von der moralischen Gewissheit, im Recht zu sein, zu echter Demut &ndash; zur Bereitschaft, sich selbst genauso kritisch zu pr\u00fcfen, wie man das System um sich herum pr\u00fcft. Die wachsende SO1 lernt: Verantwortung f\u00fcr das gro\u00dfe Ganze rechtfertigt nicht, sich der Rechenschaftspflicht gegen\u00fcber genau diesem Ganzen zu entziehen.</p>
          <p class="vb-intro">F\u00fcr eine Figur wie Ursula von der Leyen liegt die eigentliche Reifepr\u00fcfung nicht in weiteren Krisenmanagement-Erfolgen, sondern in echter Transparenz dort, wo sie am unbequemsten ist &ndash; bei den eigenen SMS, den eigenen Absprachen, dem eigenen Umfeld. Die Gans, die andere bewacht, muss irgendwann auch zulassen, dass man sie selbst beobachtet.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so1", label:"SO1 \u2013 Subtyp-Profil"},
        {route:"beruehmte-friedrich-merz", label:"Friedrich Merz \u2013 SO1w9 im Vergleich"},
      ])}
    </div>
  `);
}

export function woodyAllenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-woody-allen-portrait.jpg" alt="Woody Allen" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Woody Allen</p>
        <p class="krim-portrait-typ">SE6w7 &middot; Selbsterhaltender Typ 6 mit Siebenerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Regisseur, Drehbuchautor &amp; Komiker, geb. 1935 in New York &ndash; Tierentsprechung: Kaninchen</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Kaninchen, das lieber daheim bleibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Kaninchen</strong> ist das Tier des selbsterhaltenden Typs 6 &ndash; wachsam bis zur Ersch\u00f6pfung, st\u00e4ndig auf der Hut vor der n\u00e4chsten Gefahr, und am gl\u00fccklichsten im eigenen, vertrauten Bau. Es verl\u00e4sst sein Territorium nicht leichtfertig. Wenn es doch hinaus muss, dann am liebsten auf bekannten Wegen, zu bekannten Zeiten, mit einem Fluchtweg immer im Blick.</p>
          <p class="vb-intro">Der US-amerikanische Regisseur Woody Allen ist dieses Kaninchen ungefiltert &ndash; ein Mann, der praktisch sein ganzes Leben in Manhattan verbracht hat, der Flugzeuge, Aufz\u00fcge, Insekten, geschlossene R\u00e4ume und den Tod selbst f\u00fcrchtet, und der aus genau dieser Angst heraus eines der umfangreichsten Lebenswerke der Filmgeschichte geschaffen hat. Kaum ein anderer K\u00fcnstler hat die eigene Nervosit\u00e4t so offen zum Material seiner Kunst gemacht &ndash; und kaum einer hat trotz dieser Nervosit\u00e4t so viel geschaffen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sechs: Sicherheit durch Routine</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Sechs (SE6)</strong> ist nach Naranjo der Subtyp, den er <em>W\u00e4rme</em> nannte &ndash; aber diese W\u00e4rme richtet sich zuerst nach innen, auf das eigene, engste Umfeld: die vertrauten Menschen, die vertrauten R\u00e4ume, die vertrauten Abl\u00e4ufe. Sicherheit entsteht f\u00fcr die SE6 nicht durch Kontrolle \u00fcber die Welt, sondern durch die sorgf\u00e4ltige Pflege eines kleinen, verl\u00e4sslichen Kreises.</p>
          <p class="vb-intro">Bei Allen zeigt sich das in einer fast schon legend\u00e4ren Bindung an New York: Fast alle seine Filme spielen in derselben Stadt, oft im selben Viertel, mit denselben vertrauten Orten &ndash; Central Park, die Upper East Side, das Kino um die Ecke. Er drehte \u00fcber Jahrzehnte fast ausschlie\u00dflich dort, wo er sich sicher f\u00fchlte. Selbst als seine europ\u00e4ischen Filme (<em>Match Point</em>, <em>Midnight in Paris</em>, <em>Vicky Cristina Barcelona</em>) ihn zeitweise nach London, Paris und Barcelona f\u00fchrten, blieb seine eigentliche Heimat unver\u00e4ndert: die eigene Wohnung, das eigene Klarinettenspiel am Montagabend, dieselbe Runde vertrauter Mitarbeiter \u00fcber Jahrzehnte hinweg.</p>
          <p class="vb-intro">Diese Best\u00e4ndigkeit ist keine Bequemlichkeit, sondern Strategie: Wo alles vertraut ist, ist auch die Angst kontrollierbar. Der selbsterhaltende Instinkt der Sechs fragt: <em>Habe ich genug Sicherheit, um weiterzumachen?</em> Allens Antwort war ein ganzes Leben lang: Ja &ndash; solange die Umgebung dieselbe bleibt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerfl\u00fcgel: Humor als Fluchtweg</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerfl\u00fcgel (w7)</strong> bringt der selbsterhaltenden Sechs eine charakteristische Leichtigkeit: den Impuls, aus der Angst heraus zu denken, statt in ihr zu erstarren &ndash; und aus dem Nachdenken \u00fcber die Angst wiederum Pointen zu machen. Die SE6w7 kennt die Sorge der Sechs genau, aber der Siebenerfl\u00fcgel \u00fcbersetzt sie sofort in Sprache, in Tempo, in Witz.</p>
          <p class="vb-intro">Allens gesamte kom\u00f6diantische Stimme beruht auf diesem Mechanismus: Seine Figuren &ndash; allen voran Alvy Singer in <em>Der Stadtneurotiker</em> (1977, vier Oscars, darunter Bester Film) &ndash; reden sich die eigene Panik von der Seele, analysieren die eigene Neurose in Echtzeit, machen aus der Angst vor dem Tod, vor Beziehungen, vor dem eigenen Versagen einen Wortschwall, der zum Lachen bringt, bevor er erdr\u00fcckt. <em>Ich habe keine Angst vor dem Tod, ich will nur nicht dabei sein, wenn es passiert</em> &ndash; das ist die SE6w7 in einem Satz: die Angst wird nicht verschwiegen, sondern sofort in eine Formulierung verwandelt, die sie ertr\u00e4glich macht.</p>
          <p class="vb-intro">Diese Kombination erkl\u00e4rte auch seine au\u00dfergew\u00f6hnliche Produktivit\u00e4t: \u00dcber f\u00fcnf Jahrzehnte drehte Allen fast im Jahresrhythmus einen neuen Film &ndash; fast f\u00fcnfzig Werke insgesamt. Der Siebenerfl\u00fcgel treibt an, immer weiterzumachen, das n\u00e4chste Projekt zu beginnen, bevor die Gr\u00fcbelei \u00fcber das letzte sich festsetzen kann. Arbeit als Bewegung gegen den Stillstand, den die Sechs am meisten f\u00fcrchtet.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Klarinette, die Analyse, das Ritual</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Kaum ein Detail zeigt die SE6w7 klarer als Allens jahrzehntelanges Ritual: Jeden Montagabend spielte er \u00fcber f\u00fcnfzig Jahre lang Klarinette in New Orleans Jazz-Bands, urspr\u00fcnglich im Michael's Pub, sp\u00e4ter im Caf\u00e9 Carlyle &ndash; unabh\u00e4ngig davon, ob gerade ein Film in Produktion war, ob er Preise gewann oder Kritik einstecken musste. Selbst als er 1978 einen Oscar f\u00fcr <em>Der Stadtneurotiker</em> gewann, blieb er der Verleihung fern, weil an diesem Abend sein Klarinettengig stattfand. Das ist keine Bescheidenheit &ndash; das ist die selbsterhaltende Sechs, die dem festen Ritual mehr vertraut als dem gro\u00dfen, unberechenbaren Ereignis.</p>
          <p class="vb-intro">Ebenso charakteristisch: seine \u00fcber Jahrzehnte fortgesetzte Psychoanalyse. Allen befand sich nach eigener Aussage mehr als 35 Jahre lang in analytischer Behandlung &ndash; nicht um geheilt zu werden, sondern um die eigene Angst systematisch zu verstehen, sie in Worte zu fassen, sie zu kartieren. Das ist ein f\u00fcr die Sechs typischer Zug, verst\u00e4rkt durch den Siebenerfl\u00fcgel: Verstehen als Beruhigung, Sprache als Werkzeug gegen das Chaos im Kopf.</p>
          <p class="vb-intro">1992 wurde seine Trennung von Mia Farrow und die anschlie\u00dfende Beziehung zu Soon-Yi Previn, die er 1997 heiratete, zu einem der gr\u00f6\u00dften \u00f6ffentlichen Skandale seiner Karriere; 2014 erneuerte Dylan Farrow \u00f6ffentlich Missbrauchsvorw\u00fcrfe gegen ihn, die er stets bestritt und zu denen es nie eine strafrechtliche Verurteilung gab. Diese Ereignisse ver\u00e4nderten seine \u00f6ffentliche Wahrnehmung tiefgreifend und lassen sich von seinem k\u00fcnstlerischen Werk nicht trennen &ndash; sie werden hier benannt, ohne dass dieser Kompass eine eigene Bewertung der Vorw\u00fcrfe vornimmt.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Sechs</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE6w7 ist die F\u00e4higkeit, aus der eigenen Angst etwas zu machen, das anderen hilft, ihre eigene Angst zu ertragen. Allens Filme haben Generationen von Zuschauern gezeigt, dass Neurose kein Makel sein muss, sondern eine Quelle von Witz, Selbstreflexion und sogar Z\u00e4rtlichkeit sein kann. Das ist ein seltenes Geschenk: die eigene Schw\u00e4che \u00f6ffentlich zu machen und daraus Trost f\u00fcr andere zu gewinnen.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Feigheit</strong> &ndash; bei der SE6 zeigt sie sich als endloses Gr\u00fcbeln, als die st\u00e4ndige Suche nach der n\u00e4chsten m\u00f6glichen Katastrophe. Allen hat diese Tendenz nie versteckt, sondern zu seinem Markenzeichen gemacht: Hypochondrie, Flugangst, die Weigerung, sich medizinischen Eingriffen anzuvertrauen, die er nicht versteht &ndash; all das erscheint in seinen Filmen genauso wie in Interviews \u00fcber sein eigenes Leben.</p>
          <p class="vb-intro">Der Schatten des Siebenerfl\u00fcgels ist die Gefahr, dass Humor zur Flucht wird &ndash; dass das st\u00e4ndige Ausweichen in die n\u00e4chste Pointe, das n\u00e4chste Projekt, verhindert, wirklich stillzustehen und Verantwortung zu \u00fcbernehmen. Wie viel von diesem Muster in Allens pers\u00f6nlichem Leben wirksam wurde, bleibt Gegenstand anhaltender \u00f6ffentlicher Auseinandersetzung.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Die Angst als Material, nicht als Gef\u00e4ngnis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Was, wenn alles schiefgeht?</em> zur Erkenntnis <em>Ich kann mit der Angst leben &ndash; und sogar etwas aus ihr machen.</em> F\u00fcr die SE6w7 bedeutet das, die eigene Wachsamkeit nicht zu bek\u00e4mpfen, sondern sie in Bewegung, in Sprache, in Arbeit zu verwandeln, ohne sich in der n\u00e4chsten Ablenkung zu verlieren.</p>
          <p class="vb-intro">Woody Allen hat diesen Weg \u00fcber sechs Jahrzehnte hinweg auf seine eigene, widerspr\u00fcchliche Weise beschritten: Er hat aus seiner Angst ein Werk gemacht, das gr\u00f6\u00dfer ist als die Angst selbst &ndash; und ist dabei doch nie an einen Ort gekommen, an dem die Angst endg\u00fcltig verstummt w\u00e4re. Das Kaninchen, das nie aufh\u00f6rt, wachsam zu sein &ndash; aber das gelernt hat, aus der Wachsamkeit Kunst zu machen.</p>
          <p class="vb-intro">\u00dcber neunzig Jahre alt, dreht Woody Allen noch immer Filme &ndash; im selben Rhythmus, mit derselben Klarinette am Montagabend, in derselben Stadt. Das ist die selbsterhaltende Sechs mit Siebenerfl\u00fcgel: Angst, die niemals ganz verschwindet &ndash; aber die, solange man weiterarbeitet, nie das letzte Wort beh\u00e4lt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se6", label:"SE6 \u2013 Das Kaninchen: Subtyp-Profil"},
        {route:"beruehmte-beatrice-chebet", label:"Portr\u00e4t: Beatrice Chebet (SE6w7)"},
        {route:"beruehmte-neil-armstrong", label:"Portr\u00e4t: Neil Armstrong (SE6w5)"},
        {route:"krankheitsportraets-woody-allen", label:"Krankheitsportr\u00e4t: Woody Allen (SE6w7) \u2013 lebenslange Hypochondrie"},
      ])}
    </div>
  `);
}

export function simoneDeBeauvoirPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-simone-de-beauvoir-portrait.jpg" alt="Simone de Beauvoir \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Simone de Beauvoir</p>
        <p class="krim-portrait-typ">SO5w6 &middot; Sozialer Typ 5 mit Sechserfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Philosophin und Schriftstellerin, 1908&ndash;1986, geboren in Paris &ndash; Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus, der die j\u00fcngste Agr\u00e9gation der Geschichte bestand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier des sozialen Typs 5 &ndash; hochintelligent, mit acht Armen gleichzeitig greifend, dabei kaum vollst\u00e4ndig zu fassen. Er tarnt sich, ohne sich zu verstecken, und h\u00e4lt sein Revier mit einer Pr\u00e4zision, die man von au\u00dfen kaum erkennt. Simone de Beauvoir wurde 1908 in Paris geboren und war eine der ersten Frauen, die das Studium an der \u00c9cole Normale Sup\u00e9rieure \u00fcberhaupt abschlie\u00dfen durften.</p>
          <p class="vb-intro">1929, mit 21 Jahren, bestand sie als j\u00fcngste Person \u00fcberhaupt die hochkompetitive Agr\u00e9gation-Pr\u00fcfung in Philosophie &ndash; vor Paul Nizan und Jean Hyppolite, nur knapp hinter Jean-Paul Sartre (SX4w5), der den ersten Platz belegte. Der Oktopus griff schon hier mit mehreren Armen zugleich: nicht nur mit au\u00dfergew\u00f6hnlicher Intelligenz, sondern mit der stillen Beharrlichkeit, in einem von M\u00e4nnern dominierten Feld zur anerkannten Instanz zu werden, ohne sich lautstark in den Vordergrund zu dr\u00e4ngen.</p>
        </blockquote>

        <h2 class="vb-section">2. Das Totem: Eine eigene Struktur f\u00fcr geteiltes Wissen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo (ebenfalls ein sozialer F\u00fcnfer, aber mit dominantem Viererfl\u00fcgel) nannte den sozialen Typ 5 das <strong>Totem</strong> &ndash; die Verkn\u00fcpfung von Wissen mit Zugeh\u00f6rigkeit und Ansehen. Die SO5 teilt Wissen mit der Gemeinschaft und wird dadurch selbst zur Instanz, oft \u00fcber eine eigens daf\u00fcr geschaffene Struktur, statt \u00fcber spontane, unstrukturierte Mitteilung.</p>
          <p class="vb-intro">1945 geh\u00f6rte Beauvoir, gemeinsam mit Sartre, Raymond Aron und Maurice Merleau-Ponty, zu den Gr\u00fcndern der Zeitschrift "Les Temps modernes" &ndash; \u00fcber Jahrzehnte hinweg blieb sie eine ihrer zentralen Redakteurinnen. Das ist die SO5 in Reinform: Statt einzelne Gedanken unkontrolliert zu streuen, baute sie sich eine eigene institutionelle Struktur, innerhalb derer Wissen gesammelt, gepr\u00fcft und der intellektuellen \u00d6ffentlichkeit kontrolliert zur Verf\u00fcgung gestellt wurde. 1949 ver\u00f6ffentlichte sie mit "Das andere Geschlecht" ein \u00fcber 1000-seitiges systematisches Analysewerk, das gesellschaftliche Geschlechterrollen von Grund auf seziert &ndash; sofort der \u00f6ffentlichen Debatte \u00fcbergeben, nicht in einem gesch\u00fctzten Zirkel zur\u00fcckgehalten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserfl\u00fcgel: Kontrollierte Selbstoffenlegung \u00fcber Jahrzehnte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserfl\u00fcgel (w6)</strong> bringt der sozialen F\u00fcnf ein tiefes Bed\u00fcrfnis nach Verl\u00e4sslichkeit und Struktur &ndash; nicht impulsive Offenbarung, sondern sorgf\u00e4ltig geplante, in sich stimmige Systematik. Zwischen 1958 und 1972 ver\u00f6ffentlichte Beauvoir eine vierb\u00e4ndige Autobiografie ("Erinnerungen einer Tochter aus gutem Hause", "Die Kraft des Alters", "Der Lauf der Dinge", "Der Lauf der Dinge, hinter dem Strich"), die ihr gesamtes intellektuelles Leben von den 1930er bis in die 1970er Jahre methodisch dokumentiert.</p>
          <p class="vb-intro">Das ist der Sechserfl\u00fcgel in seiner reinsten Form: kein impulsives Bekenntnis, sondern ein \u00fcber Jahrzehnte fortgef\u00fchrtes, Band f\u00fcr Band kontrolliertes Projekt der Selbstoffenlegung &ndash; sie entschied selbst, wann und wie viel von ihrem Leben \u00f6ffentlich wurde, nie mehr, als der jeweilige Band vorsah. Auch ihre Beziehung zu Sartre lebte sie nach demselben Prinzip: eine \u00fcber f\u00fcnf Jahrzehnte stabile, klar strukturierte Verbindung, innerhalb derer beide Seiten offen andere Beziehungen f\u00fchren durften &ndash; nicht chaotisch, sondern nach eigens vereinbarten Regeln.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von Marseille bis zur Entlassung durch die Besatzer</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zwischen 1931 und 1941 unterrichtete Beauvoir Philosophie und Literatur in Marseille und Rouen &ndash; bis die deutsche Besatzungsmacht sie 1941 aus dem Schuldienst entlie\u00df. Statt sich zur\u00fcckzuziehen, verlagerte sie ihre Energie in das Schreiben: 1943 erschien ihr erster Roman, "Sie kam und blieb", 1954 erhielt sie f\u00fcr "Die Mandarins von Paris" den renommierten Prix Goncourt.</p>
          <p class="vb-intro">Der Oktopus griff mit mehreren Armen zugleich: Philosophin, Romanautorin, Essayistin, politische Aktivistin und Redakteurin in einer Person. Sie identifizierte sich fr\u00fch mit dem Kommunismus und Sozialismus, bevor sie sich 1972 offiziell davon l\u00f6ste und sich explizit als Feministin bezeichnete &ndash; eine kontrollierte, wohl\u00fcberlegte Neupositionierung, kein pl\u00f6tzlicher Bruch.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen F\u00fcnf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO5w6 zeigt sich in Beauvoirs F\u00e4higkeit, aus systematisch gesammeltem Wissen eine ganze gesellschaftliche Debatte neu zu begr\u00fcnden: "Das andere Geschlecht" mit seinem ber\u00fchmten Satz "Man wird nicht als Frau geboren, man wird es" ver\u00e4nderte das Selbstverst\u00e4ndnis von Millionen Frauen weltweit und blieb \u00fcber Jahrzehnte hinweg ein Grundlagentext des Feminismus.</p>
          <p class="vb-intro">Der Schatten der F\u00fcnf ist der <strong>Geiz</strong> &ndash; nicht mit Geld, sondern mit sich selbst, mit dem, was man von sich preisgibt. Auch bei Beauvoir zeigte sich das: Trotz der scheinbaren Offenheit ihrer vierb\u00e4ndigen Autobiografie blieb vieles genau kontrolliert, was gezeigt und was zur\u00fcckgehalten wurde &ndash; Tageb\u00fccher und Briefe, die erst postum ver\u00f6ffentlicht wurden, offenbarten sp\u00e4ter ein deutlich komplexeres, verletzlicheres Bild, als sie selbst zu Lebzeiten preisgab.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Oktopus, der sein eigenes Denksystem hinterlie\u00df</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der F\u00fcnf f\u00fchrt von der Frage <em>Habe ich genug, um mich zu zeigen?</em> zur Erkenntnis <em>Das Wissen wird nicht weniger, wenn ich es teile.</em> F\u00fcr die SO5w6 bedeutet das, die selbst gebaute institutionelle Struktur nicht als Schutzwall zu nutzen, sondern als tragf\u00e4hige Br\u00fccke zur Gemeinschaft, der man sich zugeh\u00f6rig f\u00fchlt.</p>
          <p class="vb-intro">Simone de Beauvoir starb am 14. April 1986 in Paris, sechs Jahre nach Sartre, und wurde neben ihm auf dem Friedhof Montparnasse beigesetzt. Der Oktopus, der als junge Frau die h\u00f6chste philosophische Pr\u00fcfung Frankreichs bestand, hinterlie\u00df mehr als einzelne Werke: eine eigene institutionelle Struktur, ein methodisch dokumentiertes Leben und ein Denksystem, das Generationen von Frauen nach ihr das Vokabular gab, ihre eigene gesellschaftliche Rolle zu hinterfragen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so5", label:"SO5 \u2013 Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-jean-paul-sartre", label:"Portr\u00e4t: Jean-Paul Sartre (SX4w5) \u2013 lebenslanger Gef\u00e4hrte"},
        {route:"beruehmte-guenther-jauch", label:"Portr\u00e4t: G\u00fcnther Jauch (SO5w6)"},
        {route:"beruehmte-eckhard-freise", label:"Portr\u00e4t: Eckhard Freise (SO5w6)"},
        {route:"beruehmte-georg-wilhelm-friedrich-hegel", label:"Portr\u00e4t: Georg Wilhelm Friedrich Hegel (SO5w6)"},
      ])}
    </div>
  `);
}
