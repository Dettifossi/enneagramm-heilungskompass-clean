const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const IMG = "https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/enneagramm-ayurveda.jpg";

const SP_TILES = [
  { id: "zwei-landkarten", farbe: "#8a6aa8", titel: "Zwei Landkarten für die Selbsterkenntnis",
    html: `
      <p class="sp-p">Der Weg zur Selbsterkenntnis führt oft durch mehrere Systeme der Weisheit. Zwei davon wirken auf den ersten Blick wie aus verschiedenen Welten: das Enneagramm und der Ayurveda. Das <em>Enneagramm</em> beschreibt neun Grundmuster der Aufmerksamkeit und Motivation. Der <em>Ayurveda</em> betrachtet den Menschen als Teil der Natur und beschreibt seine Konstitution mit den fünf Elementen und den drei Doshas (Vata, Pitta, Kapha).</p>
      <p class="sp-p">Das Enneagramm ist in seiner heutigen schriftlichen Form jünger (Beginn in den 1960er-Jahren, Oscar Ichazo und Claudio Naranjo). Seine Wurzeln und das Erfahrungswissen über den Menschen, das darin steckt, lassen sich dagegen über Jahrhunderte bis Jahrtausende zurückverfolgen (siehe <a href="#wurzeln-des-enneagramms">Die Wurzeln des Enneagramms</a> und <a href="#spirituelles-enneagramm">Das spirituelle Enneagramm</a>).</p>
      <p class="sp-p">Dieser Artikel stellt beide Systeme nebeneinander und fragt, wo sich ihre Muster ähneln. Wichtig ist eine ehrliche Einordnung: Das ist ein Deutungsangebot aus der Praxis und kein wissenschaftlich belegtes Zuordnungssystem. Es lädt zum Beobachten ein und ersetzt weder eine ärztliche noch eine ayurvedische Beratung.</p>` },
  { id: "fundamente", farbe: "#c47f6b", titel: "Die Fundamente im Überblick",
    html: `
      <p class="sp-p"><strong>Das Enneagramm</strong> unterscheidet neun Typen. Jeder Typ hat eine Grundangst, einen Kernwunsch und ein weitgehend automatisches Verhaltensmuster. Die Typen verteilen sich auf drei Zentren:</p>
      <ul class="sp-list">
        <li><strong>Bauch-Zentrum (Typ 8, 9, 1):</strong> Instinkt, Autonomie, Grenzen, der Umgang mit Wut.</li>
        <li><strong>Herz-Zentrum (Typ 2, 3, 4):</strong> Gefühl, Beziehung, Image, der Umgang mit Scham.</li>
        <li><strong>Kopf-Zentrum (Typ 5, 6, 7):</strong> Verstand, Planung, Sicherheit, der Umgang mit Angst.</li>
      </ul>
      <p class="sp-p"><strong>Der Ayurveda</strong> geht von den fünf Elementen aus (Äther, Luft, Feuer, Wasser, Erde). Sie zeigen sich in drei Prinzipien, den Doshas:</p>
      <ul class="sp-typen">
        <li style="--tc:#7a8f9e;"><b>Vata (Luft und Äther):</b> Bewegung, Kreativität, Veränderlichkeit. Qualitäten: leicht, beweglich, trocken, kühl.</li>
        <li style="--tc:#c0652b;"><b>Pitta (Feuer und Wasser):</b> Umwandlung, Verdauung, Intellekt, Leidenschaft. Qualitäten: heiß, scharf, durchdringend.</li>
        <li style="--tc:#8aa06a;"><b>Kapha (Erde und Wasser):</b> Struktur, Stabilität, Erdung. Qualitäten: schwer, langsam, weich, beständig.</li>
      </ul>
      <p class="sp-p">Jeder Mensch trägt alle drei Doshas in sich. Die angeborene Mischung heißt <em>Prakriti</em>, das augenblickliche Ungleichgewicht <em>Vikriti</em>. Davon zu unterscheiden sind die drei <em>Gunas</em> (Sattva, Rajas, Tamas), die in der indischen Philosophie die Qualitäten des Geistes beschreiben, nicht die des Körpers.</p>` },
  { id: "vergleichbar", farbe: "#c9a84c", titel: "Was sich vergleichen lässt, und was nicht",
    html: `
      <p class="sp-p">Beide Modelle beschreiben Muster, aber auf verschiedenen Ebenen. Das Enneagramm fragt nach dem <em>Warum</em>: Welche Motivation steuert die Aufmerksamkeit? Der Ayurveda fragt nach dem <em>Wie</em> in Körper und Energie: Welche Qualitäten (Hitze, Kälte, Schwere, Beweglichkeit) überwiegen, und was bringt sie aus dem Gleichgewicht?</p>
      <p class="sp-p">Daraus folgen drei Klarstellungen:</p>
      <ul class="sp-list">
        <li><strong>Doshas sind keine Persönlichkeitstypen.</strong> Jeder hat alle drei, und es gibt keine feste Zuordnung von einem Typ zu einem Dosha.</li>
        <li><strong>Der Typ bleibt, das Gleichgewicht wechselt.</strong> Das Enneagramm geht davon aus, dass der Typ im Leben gleich bleibt (siehe <a href="#typ-aendert-sich-nicht">Ändert sich der Typ im Laufe des Lebens?</a>). Das Dosha-Gleichgewicht dagegen verschiebt sich nach ayurvedischer Lehre mit Lebensalter, Jahreszeit, Ernährung und Stress.</li>
        <li><strong>Gemeint sind Muster, die wir haben, und nicht das, was wir sind.</strong> Beide Systeme beschreiben Tendenzen, nie den ganzen Menschen.</li>
      </ul>
      <p class="sp-p">Im Folgenden werden Parallelen vorgeschlagen, entlang der drei Zentren. Sie sind Beobachtungen, die sich in der Praxis oft zeigen, und keine Regeln.</p>` },
  { id: "kerntypen", farbe: "#8a6aa8", titel: "Kerntyp und Nachbartypen: das Prinzip der Triaden",
    html: `
      <p class="sp-p">Die drei Zentren folgen einem klaren Muster, das auch die Verbindung zum Ayurveda ordnet. In jeder Triade gibt es einen <strong>Kerntyp</strong> in der Mitte: die 3 im Herz-Zentrum, die 6 im Kopf-Zentrum und die 9 im Bauch-Zentrum. Bei ihm ist die Energie des eigenen Zentrums <em>blockiert</em>, im Schaubild als ›Verleugnung der Herz-, Kopf- oder Bauchenergie‹ beschrieben. Der Kerntyp kommt an seine eigene Zentrumsenergie nicht direkt heran und holt sich ihr Thema über die beiden anderen Zentren. Gerade deshalb stellt er das Thema seines Zentrums am reinsten dar.</p>
      <p class="sp-p">Die beiden Nachbartypen links und rechts sind Abwandlungen dieses Kernthemas:</p>
      <ul class="sp-typen">
        <li style="--tc:#c47f6b;"><b>Herz-Triade:</b> Typ 2 setzt die Herzenergie <em>überschießend</em> ein, Typ 3 setzt sie <em>blockiert</em> ein, Typ 4 setzt sie <em>umgewandelt</em> ein.</li>
        <li style="--tc:#4f86a8;"><b>Kopf-Triade:</b> Typ 5 setzt die Kopfenergie <em>überschießend</em> ein, Typ 6 setzt sie <em>blockiert</em> ein, Typ 7 setzt sie <em>umgewandelt</em> ein.</li>
        <li style="--tc:#8aa06a;"><b>Bauch-Triade:</b> Typ 8 setzt die Bauchenergie <em>überschießend</em> ein, Typ 9 setzt sie <em>blockiert</em> ein, Typ 1 setzt sie <em>umgewandelt</em> ein.</li>
      </ul>
      <p class="sp-p">Für den Ayurveda heißt das: Die drei Kerntypen sind die ›reinsten‹ Vertreter ihres Zentrums und stehen jeweils einem Dosha am nächsten (Typ 3 Pitta, Typ 6 Vata, Typ 9 Kapha). Die Nachbartypen zeigen Abwandlungen dieses Themas, und dort treten deshalb häufiger Mischformen auf, zum Beispiel Pitta mit Kapha oder Pitta mit Vata. Das ist ein Deutungsangebot, keine Regel. Die ausführliche Darstellung der Zentren steht im Schaubild <a href="#energiestatus-triadenenergien">Energiestatus der 9 Enneagrammtypen nach ihren Triadenenergien</a>.</p>` },
  { id: "kopf-vata", farbe: "#7a8f9e", titel: "Das Kopf-Zentrum (Typ 5, 6, 7) und das Vata-Prinzip",
    html: `
      <p class="sp-p"><em>Die Denker, Planer und Rastlosen.</em> Die Typen des Kopf-Zentrums leben vor allem im Geist: Sie analysieren, antizipieren und suchen im Denken nach Sicherheit. Das erinnert an die Qualitäten von Vata: beweglich, leicht, kühl und leicht aus dem Gleichgewicht zu bringen.</p>
      <p class="sp-p"><strong>Kerntyp und Nachbarn:</strong> In dieser Triade ist die 6 der Kerntyp: Ihre Kopfenergie ist blockiert (im Schaubild ›Verleugnung der Kopfenergie‹). Die 5 setzt die Kopfenergie überschießend ein, die 7 setzt sie umgewandelt ein. Die 6 steht dem Vata-Prinzip deshalb am nächsten, 5 und 7 sind Abwandlungen davon.</p>
      <ul class="sp-typen">
        <li style="--tc:#124fcc;"><b>Typ 5 (Der Beobachter):</b> Er zieht sich zurück, um Energie zu sparen und die Welt zu verstehen. Das teilt viele Züge mit einem unausgeglichenen Vata: geistige Erschöpfung, das Gefühl, ›nicht genug Energie‹ zu haben, und die Neigung, sich zu isolieren.</li>
        <li style="--tc:#8a5222;"><b>Typ 6 (Der Loyale, Kerntyp der Kopf-Triade):</b> Mentale Wachsamkeit, Zukunftsszenarien und innere Unsicherheit. Hier zeigt sich die Vata-typische Nervosität und das Bedürfnis nach Verlässlichkeit, um das ›Vata-Flugzeug‹ am Boden zu halten.</li>
        <li style="--tc:#d4a800;"><b>Typ 7 (Der Enthusiast):</b> Er springt von Idee zu Idee, liebt Vielfalt und meidet Langeweile und Schmerz. Das ist die klassische Vata-Dynamik: schnell, sprunghaft, kreativ, mit der Gefahr der Überreizung und inneren Unruhe.</li>
      </ul>
      <p class="sp-p"><strong>Der ayurvedische Ansatz zur Balance:</strong> Wenn Vata überwiegt, empfiehlt die Tradition vor allem Erdung und Regelmäßigkeit: warme, nährende Speisen, feste Tagesroutinen, ausreichend Ruhe, Ölmassagen (<em>Abhyanga</em>) und Meditation, um den ruhelosen Geist zu beruhigen. Das sind allgemeine Anregungen zur Lebensführung, keine Heilversprechen.</p>` },
  { id: "herz-pitta", farbe: "#c0652b", titel: "Das Herz-Zentrum (Typ 2, 3, 4) und das Pitta-Prinzip",
    html: `
      <p class="sp-p"><em>Die Macher, Fühler und Leistungsbezogenen.</em> Das Herz-Zentrum dreht sich um Wertschätzung, Image, Leistung und emotionale Tiefe. Besonders stark klingen hier die feurigen, zielgerichteten Qualitäten von Pitta an.</p>
      <p class="sp-p"><strong>Kerntyp und Nachbarn:</strong> In dieser Triade ist die 3 der Kerntyp: Ihre Herzenergie ist blockiert (›Verleugnung der Herzenergie‹). Die 2 setzt die Herzenergie überschießend ein, die 4 setzt sie umgewandelt ein. Die 3 steht dem Pitta-Prinzip deshalb am nächsten, 2 und 4 sind Abwandlungen davon, mit Anteilen der Nachbar-Doshas.</p>
      <ul class="sp-typen">
        <li style="--tc:#7a2fa8;"><b>Typ 2 (Der Helfer):</b> Er richtet seine Energie nach außen, um geliebt zu werden. Oft zeigt sich eine Mischung aus Pitta-Wärme und Kapha-Fürsorge.</li>
        <li style="--tc:#1fa688;"><b>Typ 3 (Der Erfolgreiche, Kerntyp der Herz-Triade):</b> Effizienz, Erfolg, Zielstrebigkeit und das Vermeiden von Misserfolg stehen im Vordergrund. Das passt gut zum Pitta-Bild: wettbewerbsorientiert, leistungsbezogen, mit der Neigung, sich über die Arbeit zu definieren.</li>
        <li style="--tc:#3cbf1f;"><b>Typ 4 (Der Individualist):</b> Er taucht tief in Gefühle und Authentizität ein und sucht nach Bedeutung. Das erinnert an eine feurige, empfindsame Pitta-Vata-Mischung.</li>
      </ul>
      <p class="sp-p"><strong>Der ayurvedische Ansatz zur Balance:</strong> Pitta-betonte Muster neigen nach ayurvedischer Lehre zu Perfektionismus, Überhitzung und Reizbarkeit. Die Tradition empfiehlt Kühlung, Maßhalten, Pausen und Tätigkeiten ohne Leistungsanspruch, etwa einen Spaziergang in der Natur ohne Ziel.</p>` },
  { id: "bauch-kapha", farbe: "#8aa06a", titel: "Das Bauch-Zentrum (Typ 8, 9, 1) und das Kapha-Prinzip",
    html: `
      <p class="sp-p"><em>Die Erdigen, Kontrollierenden und Bewahrenden.</em> Das Bauch-Zentrum wurzelt in Instinkt, Autonomie, Grenzen und dem Umgang mit Wut. Hier finden sich Verbindungen zum stabilen Kapha (Erdung, Beständigkeit, Trägheit), bei Wut und Strenge aber auch zur Schärfe von Pitta.</p>
      <p class="sp-p"><strong>Kerntyp und Nachbarn:</strong> In dieser Triade ist die 9 der Kerntyp: Ihre Bauchenergie ist blockiert (›Verleugnung der Bauchenergie‹). Die 8 setzt die Bauchenergie überschießend ein, die 1 setzt sie umgewandelt ein. Die 9 steht dem Kapha-Prinzip deshalb am nächsten, 8 und 1 sind Abwandlungen davon, mit der Schärfe von Pitta.</p>
      <ul class="sp-typen">
        <li style="--tc:#a00802;"><b>Typ 8 (Der Herausforderer):</b> Kraftvoll, direkt, schützend, konfrontierend. Das verbindet die Standfestigkeit von Kapha (Erde) mit der Durchsetzungskraft von Pitta (Feuer).</li>
        <li style="--tc:#cc6e00;"><b>Typ 9 (Der Friedensstifter, Kerntyp der Bauch-Triade):</b> Er sucht Harmonie, vermeidet Konflikte und neigt zur Trägheit und zum Aufschieben. Das spiegelt ein unausgeglichenes Kapha: Widerstand gegen Veränderung, Gemütlichkeit, aber auch eine tiefe, wohltuende Sanftmut.</li>
        <li style="--tc:#5f5f5f;"><b>Typ 1 (Der Perfektionist):</b> Streng, prinzipientreu und reformorientiert. Die innere Anspannung und der hohe moralische Anspruch erinnern an die transformierende Schärfe von Pitta, verbunden mit der Struktur von Kapha.</li>
      </ul>
      <p class="sp-p"><strong>Der ayurvedische Ansatz zur Balance:</strong> Wenn Kapha überwiegt, empfiehlt die Tradition sanfte Anregung, Bewegung, leichte Kost und Abwechslung, um die natürliche Trägheit zu überwinden und ins Handeln zu kommen. Wo Pitta-Schärfe (Wut, Strenge) im Spiel ist, gelten wieder Kühlung und Maßhalten.</p>` },
  { id: "wechselwirkung", farbe: "#4f86a8", titel: "Wenn Körper und Muster einander verstärken",
    html: `
      <p class="sp-p">Der Reiz der Verbindung liegt in den Wechselwirkungen. Ein Beispiel: Ein Mensch mit dem Muster von Typ 3 treibt sich unter Stress oft immer weiter an. Im ayurvedischen Bild brennt das Feuer von Pitta heiß, bis irgendwann die beweglichen, trockenen Qualitäten von Vata aus dem Gleichgewicht geraten: Erschöpfung, Nervosität, Schlafprobleme. Das ist ein Gedankenmodell und keine Diagnose.</p>
      <ul class="sp-list">
        <li>Ein <strong>Typ 7</strong> unter Dauerreiz kann sich überdrehen, wie ein Vata, das nie zur Ruhe kommt.</li>
        <li>Ein <strong>Typ 9</strong> in Passivität kann in zähe Schwere geraten, wie ein Kapha, das nicht in Bewegung kommt.</li>
        <li>Ein <strong>Typ 1</strong> in Dauerspannung kann innerlich überhitzen, wie ein Pitta, das keine Kühlung findet.</li>
      </ul>
      <p class="sp-p">Das Wissen darum erlaubt, nicht nur mental an den Glaubenssätzen zu arbeiten, sondern den Körper durch Alltagsgewohnheiten zu unterstützen: Schlaf, Mahlzeiten, Bewegung, Pausen.</p>` },
  { id: "synthese", farbe: "#d9a441", titel: "Synthese: Erkenntnis und Regulation",
    html: `
      <p class="sp-p">Die Stärke der Kombination liegt darin, dass sie Geist und Körper verbindet:</p>
      <ul class="sp-list">
        <li><strong>Erkenntnis (Enneagramm):</strong> Das eigene mentale Betriebssystem verstehen: warum man so reagiert, welche Glaubenssätze und Ängste das Verhalten steuern, was die Passion antreibt.</li>
        <li><strong>Regulation (Ayurveda):</strong> Die körperlich-energetische Basis verstehen: wie man den Körper nährt, welche Speisen, Tagesroutinen und Sinneseindrücke stabilisieren oder aus dem Gleichgewicht bringen.</li>
      </ul>
      <p class="sp-p">Das Enneagramm zeigt die Richtung der inneren Entwicklung, der Ayurveda liefert Werkzeuge für den Alltag. Beide laden dazu ein, sich nicht zu bekämpfen, sondern zu beobachten.</p>` },
  { id: "fazit", farbe: "#607468", titel: "Fazit",
    html: `
      <p class="sp-p">Enneagramm und Ayurveda ergänzen sich zu einem Kompass für persönliches Wachstum. Sie zeigen, dass psychologische Prägungen keine zufälligen Macken sind, sondern Teil eines größeren Musters, das sich in Motivation, Körper und Alltag zugleich zeigt. Wer beide Blickwinkel verbindet, lernt sich nicht nur tiefer kennen, sondern findet auch Wege, Körper und Geist in Einklang zu bringen.</p>
      <p class="sp-p"><strong>Fragen zum Nachdenken:</strong></p>
      <ul class="sp-list">
        <li>Welches Enneagramm-Muster und welche Dosha-Qualität (beweglich, heiß, schwer) zeigen sich in meinem Alltag am deutlichsten?</li>
        <li>Was verschiebt sich bei mir unter Stress zuerst: der Geist, der Körper oder beides?</li>
        <li>Welche kleine Gewohnheit würde mein Muster heute entlasten?</li>
      </ul>
      <p class="sp-p" style="font-size:.85rem;color:var(--muted);">Hinweis: Dieser Artikel ist kein medizinischer Rat. Die ayurvedischen Anregungen sind allgemeine Hinweise zur Lebensführung und ersetzen keine ärztliche oder heilpraktische Beratung oder Behandlung.</p>` },
];

export function enneagrammAyurvedaPage() {
  const nav = SP_TILES.map((t, i) => `<a class="ab-chip" href="javascript:void(0)" onclick="document.getElementById('ay-${t.id}').scrollIntoView({behavior:'smooth'})" style="--tc:${t.farbe};"><span class="ab-chip__n">${i + 1}</span><span class="ab-chip__m">${t.titel.split(":")[0].split(" (")[0].replace("Das ", "").replace("Die ", "")}</span></a>`).join("");
  const sektionen = SP_TILES.map((t, i) => `
    <section class="sp-tile" id="ay-${t.id}" style="--tc:${t.farbe};">
      <div class="sp-tile__head"><span class="sp-tile__num">${i + 1}</span><h2 class="sp-tile__title">${t.titel}</h2></div>
      ${t.html}
      <p class="sp-top"><a href="javascript:void(0)" onclick="document.getElementById('ay-top').scrollIntoView({behavior:'smooth'})">↑ Nach oben zur Themenauswahl</a></p>
    </section>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-ayurveda")}
      <div class="page-content sp-page">
        <p class="eyebrow">Wissen · Persönlichkeit und Konstitution</p>
        <h1 class="section-title">Enneagramm meets Ayurveda</h1>
        <p class="lead-small">Das Enneagramm beschreibt, warum wir so handeln, der Ayurveda, wie sich unsere Konstitution anfühlt. Im Folgenden wird dargestellt, wo sich beide Muster ähneln und was sich daraus für den Alltag ableiten lässt.</p>
        <div class="vb-section" style="max-width:100%;margin:0 0 1.2rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
          <h2 style="font-size:1.05rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Kurz erklärt: Woher kommt der Ayurveda?</h2>
          <p class="vb-intro" style="margin:0 0 .6rem;">Der Ayurveda stammt aus Indien und gehört zu den ältesten Gesundheits- und Lebenslehren der Welt. Sein Name setzt sich aus den Sanskritwörtern <em>ayus</em> (Leben) und <em>veda</em> (Wissen) zusammen, also ›das Wissen vom Leben‹.</p>
          <p class="vb-intro" style="margin:0 0 .6rem;">Seine Wurzeln reichen in die vedische Zeit zurück. Als klassische Lehrtexte gelten die <em>Charaka Samhita</em> (Innere Medizin) und die <em>Sushruta Samhita</em> (Chirurgie), die meist in die Jahrhunderte um die Zeitenwende datiert werden. Im Mittelpunkt steht die Idee, dass der Mensch Teil der Natur ist und Gesundheit aus dem Gleichgewicht von Körper, Geist und Umwelt entsteht.</p>
          <p class="vb-intro" style="margin:0;">Im deutschsprachigen Raum wird der Ayurveda meist als ergänzende Lebens- und Gesundheitslehre genutzt, etwa für Ernährung, Tagesrhythmus und Selbstfürsorge.</p>
        </div>
        <figure class="sp-hero"><img src="${IMG}" alt="Neun Menschen meditieren im Kreis um einen steinernen Enneagramm-Stern auf einem Berggipfel bei Sonnenaufgang, jeweils umgeben von einem Element: Nebel, Wasser, Feuer, Pflanzen und Licht." loading="lazy" /></figure>
        <div id="ay-top" class="ab-nav" role="navigation" aria-label="Themen dieses Artikels">${nav}</div>
        ${sektionen}
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("leidenschaft-und-heilung", "Die 9 Leidenschaften hinter den vermiedenen Gefühlen – mit Heilungswegen aus der homöopathischen Praxis.", "Leidenschaft und Heilung")}
      ${relatedLinks([
        {route:"persoenlichkeitsmodelle-vergleich", label:"Enneagramm vs. andere Persönlichkeitsmodelle"},
        {route:"typ-aendert-sich-nicht", label:"Ändert sich der Typ im Laufe des Lebens?"},
        {route:"energiestatus-triadenenergien", label:"Schaubild: Energiestatus der 9 Enneagrammtypen nach ihren Triadenenergien"},
        {route:"wurzeln-des-enneagramms", label:"Die Wurzeln des Enneagramms"},
        {route:"spirituelles-enneagramm", label:"Das spirituelle Enneagramm: Psychologie, Spiritualität oder beides?"},
        {route:"tcm", label:"TCM & Meridiane"},
        {route:"enneagramm-autopoese", label:"Das Enneagramm als autopoietisches System (Selbsterhaltung)"},
        {route:"praxistipps-heilpraktiker", label:"Praxistipps vom Heilpraktiker"},
      ])}
    </div>
  `);
}
