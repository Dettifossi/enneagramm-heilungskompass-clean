const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

export function guteStimmungVierSchalterPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Vier kleine Schalter für die Stimmung: Abschließen, Würdigen, Lachen, Verbinden</h1>
      <p class="lead-small">Gute Stimmung hängt nicht nur von den Umständen ab. Sie lässt sich im Alltag mit kleinen, einfachen Übungen anregen, jede dauert wenige Minuten. Dieser Tipp zeigt vier davon und wie sie sich im Tagesablauf unterbringen lassen.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/gute-stimmung-vier-schalter/gute-stimmung-vier-schalter-1.jpg" alt="Vierteilige Illustration: Abschließen (eine junge Frau ordnet Papiere und Schachteln am Tisch), Würdigen (zwei Menschen betrachten ein altes Familienfoto), Lachen (drei Menschen lachen auf dem Sofa), Verbinden (Menschen verschiedener Generationen sitzen an einem Tisch im Gemeinschaftsgarten)." class="psycho-img" loading="lazy" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Wichtiger Hinweis</h2>
        <p class="vb-intro" style="margin-bottom:0;">Dieser Tipp beschreibt Selbsthilfe-Übungen für den Alltag. Er ersetzt weder ärztliche noch psychotherapeutische oder heilpraktische Behandlung. Anhaltende Niedergeschlagenheit, Freudlosigkeit oder Antriebslosigkeit über mehr als zwei Wochen gehören in fachliche Hände, bei Gedanken an Selbstverletzung sofort ärztliche Hilfe oder den Notruf 112 in Anspruch nehmen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">1. Der Gedanke dahinter</h2>
        <p class="vb-intro">Wer sich leer oder gedämpft fühlt, versucht oft, die Lage von außen zu ändern: ein neues Ziel, etwas Neues kaufen, noch einmal durch Beiträge scrollen. Das hilft meist für kurze Zeit. Die Übungen hier setzen anders an, bei dem, was jeder Mensch selbst tun kann.</p>
        <p class="vb-intro" style="margin-top:.8rem;">Vereinfacht gesagt sind an Wohlbefinden vier Botenstoffe des Gehirns beteiligt: Dopamin (Antrieb, Fortschritt), Serotonin (innere Ruhe, Selbstwert), Endorphine (Schmerzlinderung, Hochgefühl) und Oxytocin (Nähe, Vertrauen). Jede der vier Übungen spricht eine dieser Richtungen an.</p>
        <p class="vb-intro" style="margin-bottom:0;font-size:.9rem;color:var(--muted);">Das ist eine stark vereinfachte Darstellung. Die Zusammenhänge im Gehirn sind weitaus verwickelter, und die Wirkung der Übungen ist von Mensch zu Mensch verschieden. Sie sind eine Einladung zum Ausprobieren, kein Behandlungsplan.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">2. Die vier Schalter auf einen Blick</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.8rem;">
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Abschließen</strong><br><span style="font-size:.82rem;color:var(--copper);">Antrieb und Fortschritt</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Etwas Kleines erledigen, unter zwei Minuten.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Würdigen</strong><br><span style="font-size:.82rem;color:var(--copper);">Selbstwert und Ruhe</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Sechzig Sekunden an etwas denken, worauf man still stolz ist.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Lachen</strong><br><span style="font-size:.82rem;color:var(--copper);">Leichtigkeit</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Dem Spiel und echtem Lachen wieder Raum geben.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Verbinden</strong><br><span style="font-size:.82rem;color:var(--copper);">Nähe und Vertrauen</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Einem Menschen eine persönliche Nachricht schicken.</p></div>
        </div>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">3. Schalter eins: Abschließen</h2>
        <p class="vb-intro">Das Gehirn reagiert auf Fortschritt, weniger auf Größe. Eine kleine Sache zu beenden, die schon länger offen ist, fühlt sich oft besser an als gar nichts zu tun. Deshalb eignen sich auch Kleinigkeiten.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Eine Sache wählen, die seit Tagen liegt und weniger als zwei Minuten dauert: eine Nachricht beantworten, einen Tab schließen, einen Gegenstand wegräumen.</li>
          <li>Sie sofort erledigen und danach kurz spüren, was sich verändert.</li>
          <li>Bei Bedarf zwei weitere Kleinigkeiten anschließen. Drei kleine Abschlüsse hintereinander tragen oft spürbar.</li>
        </ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">4. Schalter zwei: Würdigen</h2>
        <p class="vb-intro">Anerkennung muss nicht von außen kommen. Wer sich an einen Moment erinnert, in dem er so gehandelt hat, wie er sein möchte, kann damit innere Ruhe und Selbstachtung stärken. Studien zur Selbstbestätigung deuten in diese Richtung.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Sechzig Sekunden still sitzen.</li>
          <li>An einen Moment der letzten Woche denken, in dem Geduld, Wort halten oder Hilfsbereitschaft gezeigt wurden, ohne dass es jemand sah.</li>
          <li>Die Erinnerung eine volle Minute halten und wirken lassen.</li>
        </ul>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">Ein guter Zeitpunkt ist der Morgen, anstelle der ersten Minuten am Bildschirm.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">5. Schalter drei: Lachen</h2>
        <p class="vb-intro">Echtes Lachen, aus dem Bauch heraus, löst bei vielen Menschen ein Hochgefühl aus und kann Schmerzen leichter ertragen lassen. Erwachsene haben es oft aus dem Alltag verdrängt, weil alles ernst und zweckmäßig geworden ist.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Sich fragen: Wann war das letzte echte Lachen? Wenn es Tage her ist, bewusst Gelegenheiten schaffen.</li>
          <li>Mit einem Menschen zusammen lachen, der gut tut: ein Anruf, ein gemeinsamer Film, eine alte Geschichte.</li>
          <li>Dem Spiel einen festen Platz geben, nicht erst nach allen Pflichten.</li>
        </ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">6. Schalter vier: Verbinden</h2>
        <p class="vb-intro">Nähe entsteht durch Berührung, Blickkontakt, Verletzlichkeit und Geben. Stundenlanges Scrollen fühlt sich nach Verbindung an, ersetzt sie aber nicht. Wer viel Zeit mit Beiträgen von Menschen verbringt, mit denen er nie in Kontakt tritt, kann sich dabei einsamer fühlen.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Einem Menschen eine persönliche Nachricht schicken, keinen Meme und keine Reaktion: etwas, das zeigt, dass an ihn gedacht wurde.</li>
          <li>Kurz und echt halten, lang muss sie nicht sein.</li>
          <li>Das Geben selbst zählt, nicht die Antwort. Kommt eine Antwort, entsteht daraus oft ein Gespräch.</li>
        </ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">7. Ein kleiner Tagesplan</h2>
        <ol class="sp-list" style="margin-top:.4rem;">
          <li><strong>Morgens:</strong> eine Minute würdigen, danach eine kleine Sache abschließen.</li>
          <li><strong>Mittags:</strong> eine persönliche Nachricht schicken.</li>
          <li><strong>Abends:</strong> etwas tun, das zum Lachen bringt.</li>
        </ol>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">Das sind zusammen etwa zehn Minuten. Ein bis zwei Wochen ausprobieren und beobachten, wie sich Stimmung, Schlaf und Antrieb verändern. Wirkt etwas gar nicht, das Muster nicht erzwingen, sondern einen anderen Schalter wählen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">8. Das Enneagramm im Hintergrund</h2>
        <p class="vb-intro" style="margin-bottom:0;">Welcher Schalter leicht fällt und welcher schwer, hängt oft mit dem eigenen Muster zusammen: Wer immer weiter optimiert, tut sich mit dem Abschließen und Würdigen schwer. Wer vor allem für andere da ist, vergisst das Lachen. Wer sich zurückzieht, scheut die persönliche Nachricht. Gerade der Schalter, der am meisten Überwindung kostet, zeigt oft, wo das Muster am stärksten wirkt.</p>
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
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/ausatmen-beruhigung", label:"Der Beruhigungsschalter (Atemübung)"},
      ])}
    </section>
  `);
}
