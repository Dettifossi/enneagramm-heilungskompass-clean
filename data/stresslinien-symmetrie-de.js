const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

export function stresslinienSymmetriePage() {
  return shell(`
    ${pageHeader("wissen")}
    <section class="narrow">
      <button class="ghost-link" data-route="wissen" style="margin-bottom:1rem;">← Zurück zu Wissen</button>
      <p class="eyebrow">Wissen · Theorie und Dynamik</p>
      <h1 class="h1--tip">Wenn die Masken fallen: Symmetrie und Asymmetrie der Stresslinien im Enneagramm</h1>
      <p class="lead-small">Wohin wir uns unter Druck bewegen, folgt keinem Zufall. Ein Blick auf die neun Stresslinien zeigt ein Muster mit Regel und Ausnahmen, und es lädt dazu ein, das eigene Stressverhalten zu verstehen, statt es zu verurteilen.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/stresslinien-symmetrie/stresslinien-symmetrie-1.jpg" alt="Gemaltes Bild: drei verflochtene Kugeln mit Enneagramm-Sternen in Blau, Gold und Rot, dazwischen Zahnräder, Funken, Herzen und ein Gedankennetz vor Bergen und einer Sonne" class="psycho-img" loading="lazy">
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Wichtiger Hinweis</h2>
        <p class="vb-intro" style="margin-bottom:0;">Das Enneagramm ist ein Modell zur Selbstbeobachtung und kein Diagnoseverfahren. Die Stresslinien beschreiben Tendenzen, keine Gesetze, und sie ersetzen weder ärztliche noch psychotherapeutische Beratung. Bei anhaltender Überlastung, Niedergeschlagenheit oder Ängsten gehört das Gespräch in fachliche Hände.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">1. Der Blick auf den Ausnahmezustand</h2>
        <p class="vb-intro">Das Enneagramm stellt den Menschen nicht in starre Schubladen, es zeigt, wie beweglich wir sind. Besonders aufschlussreich ist der Blick auf die <strong>Stresslinien</strong>: Sie beschreiben, in welche Verhaltensmuster wir fallen, wenn der Druck zu groß wird, wir uns überfordern oder die emotionale Sicherheit schwindet. Jeder Typ hat dafür einen <strong>Stresspunkt</strong>, an den er sich unter Druck annähert. Dass jemand dort Züge des anderen Typs zeigt, ändert seinen Kerntyp nicht.</p>
        <p class="vb-intro" style="margin-top:.8rem;">Betrachtet man alle neun Stresslinien zusammen, zeigt sich ein Geflecht aus Symmetrie und überraschender Asymmetrie. Dieser Artikel geht der Frage nach, was sich daraus über unser Verhalten in Krisen ablesen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">2. Die neun Stresslinien auf einen Blick</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.8rem;">
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Typ 1 → Typ 4</strong><br><span style="font-size:.82rem;color:var(--copper);">Bauch → Herz</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Die starre Kontrolle weicht emotionaler Überflutung.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Typ 2 → Typ 8</strong><br><span style="font-size:.82rem;color:var(--copper);">Herz → Bauch</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Fürsorge kippt in fordernde, kontrollierende Härte.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Typ 3 → Typ 9</strong><br><span style="font-size:.82rem;color:var(--copper);">Herz → Bauch</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Leistung kippt in Erschöpfung und Rückzug.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Typ 4 → Typ 2</strong><br><span style="font-size:.82rem;color:var(--copper);">Herz → Herz</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Gefühlstiefe kippt in klammernde Bedürftigkeit.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Typ 5 → Typ 7</strong><br><span style="font-size:.82rem;color:var(--copper);">Kopf → Kopf</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Der Rückzug kippt in rastlose Zerstreuung.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Typ 6 → Typ 3</strong><br><span style="font-size:.82rem;color:var(--copper);">Kopf → Herz</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Vorsicht sucht Halt in Leistung und Effizienz.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Typ 7 → Typ 1</strong><br><span style="font-size:.82rem;color:var(--copper);">Kopf → Bauch</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Lebensfreude kippt in starren Perfektionismus.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Typ 8 → Typ 5</strong><br><span style="font-size:.82rem;color:var(--copper);">Bauch → Kopf</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Kraft zieht sich in kühle Analyse zurück.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Typ 9 → Typ 6</strong><br><span style="font-size:.82rem;color:var(--copper);">Bauch → Kopf</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Ruhe kippt in Sorge und Alarmbereitschaft.</p></div>
        </div>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">3. Die drei Zentren im Ausnahmezustand</h2>
        <p class="vb-intro">Die neun Typen gehören traditionell zu drei Zentren: Bauchtypen (8, 9, 1), Herztypen (2, 3, 4) und Kopftypen (5, 6, 7). Wohin sie unter Stress wandern, ergibt ein aufschlussreiches Mosaik.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Die Bauchtypen verlassen ihr Zentrum alle drei.</strong> Die 8 zieht sich in die scharfe Analyse des Kopftyps 5 zurück, die 9 gerät in die mentale Alarmbereitschaft und Sorge des Kopftyps 6, und die 1 verliert ihre Kontrolle und stürzt in die emotionale Flut des Herztyps 4.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Die Kopftypen sind unterschiedlich.</strong> Die 5 bleibt im Kopf und springt in die rastlose Zerstreuung der 7. Die 6 sucht Halt in der Leistung des Herztyps 3. Die 7 kippt schließlich in den Perfektionismus des Bauchtyps 1.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Die Herztypen wandern überwiegend in ein anderes Zentrum, mit einer Ausnahme.</strong> Die 2 übernimmt unter Druck die fordernde Härte der 8, die 3 greift auf Erschöpfung und Rückzug der 9 zurück. Die 4 aber bleibt im Herzzentrum und verstrickt sich in die Bedürftigkeit der 2.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">4. Drei Einsichten</h2>
        <p class="vb-intro"><strong>Erstens: Stress ist oft eine Flucht aus der eigenen Basis, mit zwei Ausnahmen.</strong> Sieben von neun Typen verlassen unter starkem Druck ihr Zentrum. Nur Typ 4 (Herz zu Herz) und Typ 5 (Kopf zu Kopf) bleiben im eigenen Zentrum. Sie überhitzen gewissermaßen im eigenen Element: Die 4 bleibt im Fühlen gefangen, die 5 im Denken. Die zwei Ausnahmen stehen am unteren Rand des Kreises nebeneinander.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Zweitens: Die Asymmetrie ist ein Hinweis auf die Eigenart der Muster.</strong> Es handelt sich nicht um ein mechanisches Tauschspiel. Manche Linien führen in ein anderes Zentrum, andere kreisen im eigenen. Das lässt sich so deuten, dass Gefühle und Gedanken flexibler und schwerer zu fassen sind als die Überlebensstrategien des Bauchs. Das ist eine Deutung, kein Beweis, aber sie passt zum Bild eines lebendigen Systems statt eines starren Schemas.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Drittens: Die Krise bietet eine Chance.</strong> Die Stresslinien sind keine Sackgassen, sondern Frühwarnsysteme. Wer merkt, dass er gerade typische Züge des Stresspunkts annimmt, etwa die 3, die in die Erschöpfung der 9 driftet, oder die 8, die sich in den Intellekt der 5 verkriecht, hat einen Anker: ›Ich stehe unter Strom, und mein System greift nach einem Notfallwerkzeug.‹</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">5. Das feine Netz der Seele</h2>
        <p class="vb-intro">Die Symmetrien und Asymmetrien der Stresslinien lassen vermuten, dass Persönlichkeit ein fein ausgetüfteltes Schutznetz ist. Wenn der Druck steigt, greifen wir nach dem Vertrauten oder nach dem Gegenpol, den unsere Seele in diesem Moment zu brauchen glaubt.</p>
        <p class="vb-intro" style="margin-top:.8rem;">Wer diese Muster bei sich und anderen erkennt, verliert die Verurteilung des eigenen Stressverhaltens. Er gewinnt Selbsterkenntnis und die Möglichkeit, sich rechtzeitig aus der Sackgasse zu steuern. Die Gegenrichtung, den Entspannungspunkt, behandelt dieser Artikel nicht; sie ergänzt das Bild.</p>
      </div>

      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}

      ${relatedLinks([
        {route:"wissen", label:"Zurück zu Wissen"},
        {route:"linien-dynamik-beziehungen", label:"Linien-Dynamik in Beziehungen (Stress- & Entspannungspunkte)"},
        {route:"typ-aendert-sich-nicht", label:"Ändert sich der Typ im Laufe des Lebens?"},
        {route:"drei-zentren", label:"Drei Zentren"},
      ])}
    </section>
  `);
}
