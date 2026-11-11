const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

export function gehirnUmbauenDreiGewohnheitenPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Das Gehirn formt sich mit: Wiederholen, Fühlen, Aufmerksamkeit lenken</h1>
      <p class="lead-small">Das Gehirn ist kein festes Gebilde. Es verändert sich mit dem, was wir täglich wiederholen, beachten und fühlen. Dieser Tipp zeigt drei einfache Gewohnheiten, mit denen sich der Alltag bewusst in Richtung Zufriedenheit prägen lässt.</p>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Wichtiger Hinweis</h2>
        <p class="vb-intro" style="margin-bottom:0;">Dieser Tipp beschreibt Selbsthilfe-Übungen für den Alltag. Er ersetzt weder ärztliche noch psychotherapeutische oder heilpraktische Behandlung. Positives Denken ersetzt keine Hilfe bei Depression oder Angst: Anhaltende Niedergeschlagenheit über mehr als zwei Wochen gehört in fachliche Hände, bei Gedanken an Selbstverletzung sofort ärztliche Hilfe oder den Notruf 112 in Anspruch nehmen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">1. Der Gedanke dahinter</h2>
        <p class="vb-intro">Die Neurowissenschaft nennt es Neuroplastizität: Das Gehirn bildet Verbindungen zwischen Nervenzellen neu und verstärkt, was oft benutzt wird. Eine bekannte Kurzformel lautet: Nervenzellen, die gemeinsam feuern, verbinden sich miteinander. Wer immer wieder Sorgen wälzt, sich selbst kritisiert oder auf das achtet, was fehlt, bahnt diese Wege aus. Wer Zuversicht, Dankbarkeit oder Freude übt, bahnt andere.</p>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;font-size:.9rem;color:var(--muted);">Das ist eine vereinfachte Darstellung. Wie weit sich Stimmung durch Übung verändern lässt, ist von Mensch zu Mensch verschieden. Die drei Gewohnheiten sind Anregungen zum Ausprobieren, kein Behandlungsplan.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">2. Die drei Gewohnheiten auf einen Blick</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.8rem;">
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>1. Wiederholen</strong><br><span style="font-size:.82rem;color:var(--copper);">Das Fundament</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Einen guten Gedanken bewusst mehrmals am Tag üben.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>2. Fühlen</strong><br><span style="font-size:.82rem;color:var(--copper);">Der Verstärker</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Ein gutes Erlebnis zehn Sekunden lang ganz spüren.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>3. Aufmerksamkeit lenken</strong><br><span style="font-size:.82rem;color:var(--copper);">Die Steuerung</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Bemerken, wohin die Aufmerksamkeit gezogen wird, und sie zum Guten zurücklenken.</p></div>
        </div>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">3. Gewohnheit eins: Wiederholen</h2>
        <p class="vb-intro">Gewohnheiten des Denkens entstehen durch Wiederholung. Das gilt für unbewusste Muster genauso wie für bewusst gewählte. Der Inhalt zählt dabei weniger als die Regelmäßigkeit.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Einen einzigen positiven Schwerpunkt wählen: etwas, wofür Dankbarkeit besteht, ein Moment, der sich gut angefühlt hat, oder etwas Angenehmes, das gerade da ist.</li>
          <li>Ihn dreimal am Tag bewusst wiederholen, morgens, mittags, abends.</li>
          <li>Nach einigen Tagen die Zahl der Wiederholungen langsam steigern.</li>
        </ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">4. Gewohnheit zwei: Fühlen</h2>
        <p class="vb-intro">Ein Gedanke ohne Gefühl bleibt flach. Das Gehirn merkt sich vor allem, was mit Gefühl verbunden war. Deshalb wirkt der Satz ›Ich sollte dankbar sein‹ wenig, eine echte Welle von Wärme und Wertschätzung dagegen mehr.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Wenn etwas Gutes geschieht, auch etwas Kleines, kurz innehalten.</li>
          <li>Das Gefühl zehn Sekunden lang ganz zulassen: Wärme, Zufriedenheit, Freude im Körper spüren.</li>
          <li>Es bewusst verstärken, statt es nur zu bemerken und weiterzugehen.</li>
        </ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">5. Gewohnheit drei: Aufmerksamkeit lenken</h2>
        <p class="vb-intro">Die Aufmerksamkeit bestimmt, was wiederholt und was gefühlt wird. Das Gehirn achtet von Natur aus eher auf Gefahren und Probleme als auf Gutes (die sogenannte Negativitätsneigung). Sie hat einst das Überleben gesichert, zieht heute aber den Blick oft ungefragt zum Negativen. Gelenkte Aufmerksamkeit bedeutet, das zu bemerken und bewusst zu entscheiden, wohin der Blick geht.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Mehrmals am Tag kurz nachsehen: Wohin ist die Aufmerksamkeit gerade gewandert? Zu einem Problem, einer Sorge, etwas, das fehlt?</li>
          <li>Sie in diesem Moment bewusst zu etwas Gutem, Gegenwärtigem oder Funktionierendem lenken.</li>
          <li>Probleme dabei nicht leugnen, sie nur nicht allein bestimmen lassen. Jede Rückkehr zählt.</li>
        </ul>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">Aus Erfahrung zeigt sich, dass manche Menschen im Alter milder und zufriedener werden, andere verbitterter. Es liegt nahe, dass dabei auch eine Rolle spielt, wohin über Jahre die Aufmerksamkeit gelenkt wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">6. Ein kleiner Tagesablauf</h2>
        <ol class="sp-list" style="margin-top:.4rem;">
          <li><strong>Morgens:</strong> einen positiven Schwerpunkt wählen und zum ersten Mal wiederholen.</li>
          <li><strong>Tagsüber:</strong> bei einem guten Moment zehn Sekunden fühlen, und einige Male die Aufmerksamkeit zum Guten zurücklenken.</li>
          <li><strong>Abends:</strong> den Schwerpunkt ein drittes Mal wiederholen, mit Gefühl.</li>
        </ol>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">Ein bis zwei Wochen ausprobieren und beobachten, was sich bei Stimmung, Schlaf und Gelassenheit verändert. Veränderung geschieht durch tägliche Übung, nicht durch ein einzelnes Ereignis. Dazu passen die Tipps <a href="#praxistipps-heilpraktiker/morgenroutine-fuenf-gewohnheiten">Fünf Gewohnheiten vor neun Uhr</a> und <a href="#praxistipps-heilpraktiker/gute-stimmung-vier-schalter">Vier kleine Schalter für die Stimmung</a>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">7. Das Enneagramm im Hintergrund</h2>
        <p class="vb-intro" style="margin-bottom:0;">Im Enneagramm hat jeder Typ einen gewohnten Aufmerksamkeitsfokus: Die Aufmerksamkeit richtet sich fast von allein auf Fehler, auf Bedürfnisse anderer, auf Leistung, auf Mangel, auf Gefahren, auf Möglichkeiten, auf Stärke oder auf Harmonie. Diese Lenkung läuft meist unbemerkt und wird durch Wiederholung immer fester. Wer sein Muster kennt, kann die dritte Gewohnheit gezielt üben: bemerken, wohin der Blick von allein geht, und ihn bewusst erweitern. Mehr dazu unter <a href="#aufmerksamkeitsfokus">Aufmerksamkeitsfokus</a>.</p>
      </div>

      <div style="margin-top:2rem;">
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;background:var(--paper);list-style:none;user-select:none;font-weight:700;font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;color:var(--copper);">&#9672;</span>
            <span style="flex:1;">Vertiefende Literatur von Detlef Rathmer</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Sieben praxisnahe Wege zu mehr Ruhe und Klarheit im Alltag.", "7 Wege zu dir selbst")}
            <div style="margin-top:.8rem;">${bookTip("sei-still-und-wisse-ich-bin-gott", "Ein spirituelles Buch über die tiefste Stille in uns und die Erfahrung von Transzendenz jenseits aller Konzepte.", "Sei still und wisse – ich bin Gott!")}</div>
            <div style="margin-top:.8rem;">${bookTip("nichts-und-alles", "Ein Buch über das Wesen des Bewusstseins – zwischen Leere und Fülle, zwischen dem Nichts und dem Alles des Lebens.", "Nichts und Alles")}</div>
            <div style="margin-top:.8rem;">${bookTip("der-raum-hinter-allem", "Eine Erkundung des Bewusstseins jenseits der Gedanken – über den stillen Raum, der hinter allem Erleben liegt.", "Der Raum hinter allem")}</div>
            <div style="margin-top:.8rem;">${bookTip("heilung-als-erinnerung", "Heilung nicht als Reparatur, sondern als Erinnerung an das, was wir eigentlich sind – ein tiefgründiger Blick auf Gesundheit und Ganzheit.", "Heilung als Erinnerung")}</div>
            <div style="margin-top:.8rem;">${bookTip("in-der-tiefe-der-zeit", "Ein Buch über Bewusstsein, Zeit und die stille Dimension hinter allem Erleben.", "In der Tiefe der Zeit")}</div>
            <div style="margin-top:.8rem;">${bookTip("meta-intelligenz", "Meta-Intelligenz – die Intelligenz, die alle anderen Intelligenzen verbündet und das volle Potenzial des Bewusstseins erschließt.", "Meta-Intelligenz")}</div>
            <div style="margin-top:.8rem;">${bookTip("meta-intelligenz-das-hoerbuch", "Meta-Intelligenz als Hörbuch – ideal für unterwegs oder zum meditativen Zuhören.", "Meta-Intelligenz (Hörbuch)")}</div>
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"aufmerksamkeitsfokus", label:"Aufmerksamkeitsfokus der Typen"},
        {route:"praxistipps-heilpraktiker/morgenroutine-fuenf-gewohnheiten", label:"Fünf Gewohnheiten vor neun Uhr"},
      ])}
    </section>
  `);
}
