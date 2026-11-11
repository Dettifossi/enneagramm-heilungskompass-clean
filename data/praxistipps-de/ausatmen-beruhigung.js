const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

export function ausatmenBeruhigungPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Der Beruhigungsschalter: länger ausatmen, summen, Sicherheit melden</h1>
      <p class="lead-small">Eine kurze Atemübung, die in unter einer Minute helfen kann, aus der Anspannung in die Ruhe zu finden. Sie beruht auf einem einfachen Zusammenhang: Die Ausatmung beruhigt, die Einatmung aktiviert.</p>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Wichtiger Hinweis</h2>
        <p class="vb-intro" style="margin-bottom:0;">Dieser Tipp beschreibt eine Selbsthilfe-Übung zur Entspannung. Er ersetzt weder ärztliche noch heilpraktische Beratung oder Behandlung. Bei Schwindel, Atemnot oder Beschwerden während der Übung sofort zur normalen Atmung zurückkehren. Bei anhaltender Angst, Panikattacken oder Herz- und Lungenerkrankungen vorab fachlichen Rat einholen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">1. Der Gedanke dahinter</h2>
        <p class="vb-intro">Das vegetative Nervensystem arbeitet in zwei Hauptrichtungen: Der Sympathikus bereitet auf Kampf oder Flucht vor, der Parasympathikus steht für Ruhe, Verdauung und Erholung. Bei Anspannung überwiegt der Sympathikus. Die Atmung ist eine der wenigen Funktionen dieses Systems, die sich bewusst beeinflussen lässt.</p>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">Beim Einatmen steigt die Herzfrequenz leicht an, beim Ausatmen sinkt sie wieder (die sogenannte respiratorische Sinusarrhythmie). Wer länger aus- als einatmet, verbringt mehr Zeit in der beruhigenden Phase. Studien zur Herzratenvariabilität und zu langsamer Atmung deuten darauf hin, dass sich dadurch Herzschlag und Anspannung innerhalb weniger Minuten spürbar beruhigen können. Die Wirkung ist von Mensch zu Mensch verschieden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">2. Das Bild zur Übung</h2>
        <figure style="margin:0;">
          <svg viewBox="0 0 640 200" role="img" aria-label="Atemkurve: vier Sekunden einatmen, acht Sekunden ausatmen mit Summen" style="width:100%;max-width:640px;height:auto;display:block;margin:0 auto;">
            <path d="M20 150 L180 40 L500 150" fill="none" stroke="var(--copper)" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M300 112 q8 -10 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0" fill="none" stroke="var(--gold)" stroke-width="3" stroke-linecap="round"/>
            <circle cx="180" cy="40" r="6" fill="var(--copper)"/>
            <text x="95" y="30" text-anchor="middle" font-size="15" fill="var(--ink)">Einatmen: 4</text>
            <text x="340" y="82" text-anchor="middle" font-size="15" fill="var(--ink)">Ausatmen + summen: 8</text>
            <text x="95" y="185" text-anchor="middle" font-size="13" fill="var(--muted)">4 Sekunden</text>
            <text x="340" y="185" text-anchor="middle" font-size="13" fill="var(--muted)">8 Sekunden</text>
          </svg>
          <figcaption style="font-size:.85rem;color:var(--muted);text-align:center;margin-top:.4rem;">Die Ausatmung dauert etwa doppelt so lang wie die Einatmung, die Wellenlinie steht für das leise Summen.</figcaption>
        </figure>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">3. Die Übung in drei Schritten</h2>
        <ol class="sp-list" style="margin-top:.4rem;">
          <li><strong>Sicherheit signalisieren.</strong> Gesicht und Kiefer entspannen, Schultern sinken lassen, die Füße spüren. Der Körper liest solche Signale schneller als jeden Gedanken.</li>
          <li><strong>Länger ausatmen.</strong> Durch die Nase vier Sekunden ruhig einatmen, durch den Mund acht Sekunden langsam ausatmen. Wer acht Sekunden nicht erreicht, wählt ein kürzeres Verhältnis, etwa drei zu sechs. Wichtig ist, dass die Ausatmung deutlich länger ist als die Einatmung.</li>
          <li><strong>Mit Summen verbinden.</strong> Beim Ausatmen leise und tief summen, nicht laut und nicht gepresst. Die Vibration in Hals und Brust spüren. Der Vagusnerv verläuft durch den Hals- und Kehlkopfbereich; die Vibration soll die Entspannung zusätzlich unterstützen.</li>
        </ol>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">Fünf Atemzüge wiederholen, danach kurz nachspüren: Was hat sich verändert, im Herzschlag, in den Schultern, im Gedankenfluss? Bei Bedarf eine weitere Runde anschließen. Eine Übung für zwischendurch: im Auto vor einem schwierigen Gespräch, bei aufsteigender Unruhe, vor dem Einschlafen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">4. Warum Gedanken allein selten helfen</h2>
        <p class="vb-intro">Sich selbst zu sagen, alles sei in Ordnung, erreicht das Nervensystem oft nicht. Es reagiert eher auf körperliche Signale als auf Zusicherungen. Der Neurowissenschaftler Stephen Porges beschreibt in seiner Polyvagal-Theorie, dass der Körper Sicherheit und Gefahr unterhalb des bewussten Denkens erfasst. Die Theorie ist in der Fachwelt umstritten, als Bild für die Übung ist sie hilfreich: Langsames Ausatmen, ein sanfter Ton, eine weiche Mimik und entspannte Schultern sind Signale, die ein Körper nicht in Gefahr zeigen.</p>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">Aus Sicht der Praxis passt das zu einer alten Erfahrung: Ruhe lässt sich nicht erzwingen, aber einladen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">5. Verbindung zum Buch ›7 Wege zu dir selbst‹</h2>
        <p class="vb-intro">Das Ausatmen steht im Buch ›7 Wege zu dir selbst‹ am Anfang: Übung 1 ist das Beobachten des Ausatems. Dort werden Verlauf und Sinn der Übung ausführlich dargestellt. Die Übung in diesem Tipp ist ein Einstieg dazu: erst das Ausatmen verlängern, dann nur noch beobachten, ohne es zu lenken.</p>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">Eine geführte Fassung ist im Bereich <a href="#stille">9 Minuten Stille sitzen</a> zu finden, mit einem Video zum Beobachten des Ausatems.</p>
        <div style="position:relative;width:100%;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#000;margin-top:1rem;">
          <iframe src="https://www.youtube.com/embed/LcLK3dPagZQ?playsinline=1" title="Achtsamkeitsübung: Den Ausatem beobachten" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
        </div>
        <p style="font-size:.82rem;color:var(--muted);margin:.5rem 0 0;text-align:center;">Über 25 Minuten, eine ausführliche Anleitung von Detlef Rathmer.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">6. Das Enneagramm im Hintergrund</h2>
        <p class="vb-intro" style="margin-bottom:0;">Anspannung zeigt sich je nach Typ verschieden: als Kontrolle, als Sorge, als Antrieb oder als Rückzug. Die Atemübung selbst ist für alle Typen gleich, sie setzt unter dem Muster an. Wer bemerkt, in welcher Form die eigene Anspannung auftaucht, kann die Übung gezielt dann einsetzen, wenn das Muster beginnt, nicht erst, wenn es überwältigt.</p>
      </div>

      <div style="margin-top:2rem;">
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;background:var(--paper);list-style:none;user-select:none;font-weight:700;font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;color:var(--copper);">&#9672;</span>
            <span style="flex:1;">Vertiefende Literatur von Detlef Rathmer</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Sieben praxisnahe Wege zu mehr Ruhe und Klarheit im Alltag, mit dem Beobachten des Ausatems als erster Übung.", "7 Wege zu dir selbst")}
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"stille", label:"9 Minuten Stille sitzen"},
      ])}
    </section>
  `);
}
