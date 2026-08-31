function konradAdenauerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-konrad-adenauer-portrait.jpg" alt="Konrad Adenauer" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Konrad Adenauer</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · 1876–1967</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Konrad Adenauer</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-konrad-adenauer">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort weitgehend außen vor bleibt:
        ein schwerer Autounfall 1917, der sein Gesicht lebenslang veränderte, gefolgt von
        Verfolgung und Haft unter den Nationalsozialisten sowie den gesundheitlichen
        Einbrüchen seines letzten Lebensjahres.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Adenauer</strong> ist der <strong>selbsterhaltenden Eins mit Neunerflügel</strong>
        zugeordnet. Die SE1 richtet den Vollkommenheitsanspruch der Eins auf das eigene,
        unmittelbare Überleben und Funktionieren – Ordnung, Kontrolle und moralische
        Korrektheit als Schutz vor Chaos und Verletzlichkeit. Der Neunerflügel bringt eine
        ruhige, unerschütterlich wirkende Präsenz hinzu, hinter der sich Anspannung oft lange
        verbirgt – ein Muster, das sich bis in Adenauers äußerlich stets kontrollierte Haltung
        nach einem im wörtlichen Sinne zertrümmerten Gesicht nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Kontrolle über das eigene Erscheinungsbild als Lebensprinzip:</strong>
        Nach dem Unfall, der sein Gesicht dauerhaft veränderte, arbeitete Adenauer sein
        gesamtes weiteres Leben an einer öffentlichen Erscheinung von unerschütterlicher
        Ruhe und Autorität – das genaue Gegenteil der erlittenen Verwundbarkeit.</p>
        <p class="vb-intro"><strong>b) Wachsamkeit als Grundhaltung:</strong>
        Ob nach dem Unfall, während der Verfolgung durch die Nationalsozialisten oder im hohen
        Amt – Adenauers Blick galt stets der Frage, welche Gefahr als Nächstes drohen könnte,
        und wie ihr durch Vorsicht und Struktur zu begegnen sei.</p>
        <p class="vb-intro"><strong>c) Öffentliche Fassung trotz privater Erschütterung:</strong>
        Selbst in den Monaten der Gestapo-Verfolgung 1944 hielt Adenauer nach eigener
        Aussage seine Haltung gegenüber den Verhörenden als "scharf, aber korrekt" –
        eine kontrollierte Contenance, die auch unter existenziellem Druck nicht zusammenbrach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein schwerer Autounfall 1917:</strong>
        Der Dienstwagen des damals 41-jährigen Kölner Beigeordneten Adenauer kollidierte mit
        einer Straßenbahn. Jochbein und Nasenbein brachen, der Unterkiefer wurde zertrümmert
        und ausgerenkt, mehrere Zähne gingen verloren, die Sehkraft war beeinträchtigt, dazu
        kamen tiefe Kopfwunden.</p>
        <p class="vb-intro"><strong>b) Monatelange Rekonstruktion:</strong>
        Es folgten ein monatelanger Krankenhausaufenthalt und mehrere rekonstruktive
        Operationen am Gesicht. Die markanten, eingefallenen Gesichtszüge, für die Adenauer
        später bekannt wurde, sind zu einem erheblichen Teil direkte Unfallfolge – keine
        gewöhnliche Alterserscheinung.</p>
        <p class="vb-intro"><strong>c) Verfolgung ab 1933:</strong>
        Nach der Machtübernahme der Nationalsozialisten wurde Adenauer als Kölner
        Oberbürgermeister abgesetzt und aus Köln verwiesen; er fand zeitweise Zuflucht in der
        Abtei Maria Laach. Im Juni 1934, im Umfeld des sogenannten Röhm-Putsches, folgte eine
        zweitägige Gestapo-Haft.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Flucht und erneute Verhaftung 1944:</strong>
        Wegen einer perniziösen Anämie zunächst als haftuntauglich eingestuft und ins
        Krankenhaus verlegt, gelang Adenauer im September 1944 mit einem gefälschten
        Transportschein die Flucht. Er tauchte in einer Pension bei Hachenburg unter, wurde
        jedoch wieder aufgegriffen.</p>
        <p class="vb-intro"><strong>b) Zwei Monate Gestapo-Gefängnis Brauweiler:</strong>
        Von Ende September bis Ende November 1944 saß Adenauer im Gestapo-Gefängnis
        Brauweiler ein. Seine Zelle lag direkt über dem Verhörraum – nachts hörte er die
        Misshandlung anderer Gefangener und verbrachte, wie er selbst beschrieb,
        schweißgebadete Nächte unter psychischer Belastung.</p>
        <p class="vb-intro"><strong>c) Das Trauma der eigenen Familie:</strong>
        Seine Frau Auguste, unter Verhör zur Preisgabe seines Fluchtortes gezwungen, versuchte
        aus Schuldgefühlen sich das Leben zu nehmen. Sie wurde rechtzeitig gerettet, starb
        jedoch 1948 an den Spätfolgen – ein Leid, das die gesamte Familie Adenauer
        lebenslang begleitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Bemerkenswerte Vitalität trotz allem:</strong>
        Trotz Unfall, Verfolgung und Haft amtierte Adenauer von 1949 bis 1963 als
        Bundeskanzler – bis ins Alter von 87 Jahren galt er als außergewöhnlich
        arbeitsfähig und vital.</p>
        <p class="vb-intro"><strong>b) Zwei Herzinfarkte im Frühjahr 1967:</strong>
        Am 29. März 1967 erlitt der 91-Jährige einen ersten Herzinfarkt, über Ostern folgte
        ein zweiter. Sein Körper, der jahrzehntelang bemerkenswert stabil funktioniert hatte,
        begann in den letzten Lebenswochen rasch nachzulassen.</p>
        <p class="vb-intro"><strong>c) Tod nach kurzer letzter Erkrankung:</strong>
        Auf die Herzinfarkte folgte eine grippale Bronchitis, die sich zu einer Lungenentzündung
        entwickelte. Konrad Adenauer starb am 19. April 1967 im Alter von 91 Jahren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Wiederaufbau als Lebensmuster:</strong>
        So wie sein Gesicht nach 1917 chirurgisch wiederhergestellt wurde, baute Adenauer nach
        1945 buchstäblich einen zerstörten Staat wieder auf – ein Muster von Rekonstruktion
        nach Zerstörung, das sich durch sein gesamtes Leben zieht.</p>
        <p class="vb-intro"><strong>b) Kontrolle als Energiequelle unter Druck:</strong>
        Die Fähigkeit, unter existenzieller Bedrohung – Unfall, Verfolgung, Haft – äußerlich
        gefasst zu bleiben, war keine Abwesenheit von Angst, sondern eine trainierte,
        disziplinierte Kanalisierung der eigenen Anspannung in kontrolliertes Handeln.</p>
        <p class="vb-intro"><strong>c) Der Adler, der bis zuletzt im Amt blieb:</strong>
        Die Energie der SE1w9 richtete sich bis ins hohe Alter auf dieselbe Grundhaltung:
        Ordnung schaffen, Verantwortung tragen, nicht aufgeben, solange die Aufgabe nicht
        erfüllt ist.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Verletzung, kein fortschreitendes Leiden:</strong>
        Anders als bei den meisten anderen Krankheitsporträts dieses Kompasses steht bei
        Adenauer am Anfang keine schleichende Erkrankung, sondern ein einmaliges, plötzliches
        Trauma – der Autounfall von 1917 –, dessen körperliche und wohl auch psychische
        Folgen ihn jedoch lebenslang begleiteten.</p>
        <p class="vb-intro"><strong>b) Eine zweite Erschütterung, zwei Jahrzehnte später:</strong>
        Wo der Unfall 1917 den Körper traf, trafen Verfolgung und Haft 1933/34 und 1944 die
        Existenz und die Familie – zwei sehr unterschiedliche, aber strukturell verwandte
        Erfahrungen von plötzlichem Kontrollverlust, denen Adenauer beide Male mit äußerer
        Fassung begegnete.</p>
        <p class="vb-intro"><strong>c) Ein Körper, der bis zum Schluss funktionierte:</strong>
        Erst mit 91 Jahren, im Frühjahr 1967, versagte der Körper endgültig – nach
        Jahrzehnten, in denen er trotz früher Verletzung bemerkenswert stabil geblieben war.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Gesicht?</strong>
        Bei einer selbsterhaltenden Eins, deren gesamtes Lebensprinzip auf Kontrolle,
        Korrektheit und makelloser äußerer Haltung beruht, liegt eine Deutung nahe: Der
        Unfall traf ausgerechnet jenen Körperteil, über den Autorität, moralische Integrität
        und öffentliches Auftreten am unmittelbarsten vermittelt werden – das Gesicht. Statt
        sich zurückzuziehen, verwandelte Adenauer die sichtbaren Narben in das Gegenteil von
        Schwäche: ein Gesicht, das zu einem der bekanntesten und autoritätsstiftendsten
        Erscheinungsbilder der deutschen Nachkriegsgeschichte wurde. Diese Deutung ist eine
        plausible Interpretation, kein historisch belegter Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu Unfällen
        oder Verletzungen führt – <strong>jeder Mensch kann jede Krankheit oder Verletzung
        erleiden, unabhängig vom Subtyp.</strong> Was sich an Adenauers Fall zeigen lässt, ist
        ein Muster, das bei dem Bedürfnis, gerade nach erlittener Verwundbarkeit äußere
        Kontrolle und Ordnung wiederherzustellen, in der Praxis immer wieder auffällt – eine
        von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Adenauer kannte sein eigenes Muster nicht – die selbsterhaltende Eins mit Neunerflügel verwandelt Verletzung reflexhaft in kontrollierte äußere Ordnung, und genau das tat er, als er die Narben seines Unfalls zum Ausdruck disziplinierter Autorität formte, statt sich die dahinterliegende Erschütterung einzugestehen. Wer das eigene Kontrollmuster nicht kennt, hält die Fassade so lange aufrecht, dass selbst nahestehende Menschen die tatsächliche Belastung kaum erahnen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Eins mit Neunerflügel prägt <strong>Adenauers</strong> Leben bis in
        die eigene Verletzungs- und Verfolgungsgeschichte hinein: ein 1917 zertrümmertes
        Gesicht, das er zum Ausdruck kontrollierter Autorität umformte, zwei Jahrzehnte
        später Verfolgung und Haft, denen er mit derselben äußeren Fassung begegnete, und ein
        Körper, der bis zum 91. Lebensjahr bemerkenswert stabil blieb. Der Adler, der nach
        jedem Sturz wieder aufstieg – nicht unversehrt, aber ungebrochen in seiner
        Entschlossenheit, Ordnung wiederherzustellen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-konrad-adenauer", label:"Porträt: Konrad Adenauer (SE1w9) – Lebenswerk"},
        {route:"krankheitsportraets-astrid-lindgren", label:"Krankheitsporträt: Astrid Lindgren (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-robert-de-niro", label:"Krankheitsporträt: Robert De Niro (SE1w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

function johannSebastianBachKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-johann-sebastian-bach-portrait.jpg" alt="Johann Sebastian Bach" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johann Sebastian Bach</p>
        <p class="krim-portrait-typ">SX1w9 · Sexueller Typ 1 mit Neunerflügel · 1685–1750</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Johann Sebastian Bach</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-johann-sebastian-bach">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier wird ausführlich ein Kapitel beleuchtet, das dort nur eine Randnotiz bleibt:
        eine über Jahre fortschreitende Erblindung, zwei missglückte Augenoperationen und Bachs
        Tod wenige Monate danach im Jahr 1750.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Bach</strong> ist dem <strong>sexuellen Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SX1 richtet den Vollkommenheitsanspruch der Eins nicht auf die ganze
        Welt, sondern mit kompromissloser Intensität auf den engsten Kreis – auf eine einzige
        Sache, eine einzige Berufung, für die keine Mühe zu groß ist. Der Neunerflügel bringt
        eine ruhige, undramatische Beharrlichkeit hinzu: Bach klagte selten, er arbeitete
        weiter – ein Muster, das sich bis in seine letzten, fast erblindeten Lebensmonate
        nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Die Augen als Werkzeug der Hingabe, nicht der Schonung:</strong>
        Schon als Junge kopierte Bach der Überlieferung nach heimlich verbotene Notenblätter
        bei Mondlicht – eine frühe Bereitschaft, die eigene Sehkraft für die Musik aufs Spiel
        zu setzen, lange bevor sie tatsächlich in Gefahr geriet.</p>
        <p class="vb-intro"><strong>b) Nachlassende Sicht als hingenommene Realität, nicht als Alarmsignal:</strong>
        Die zunehmend zittrige, schwer lesbare Handschrift seiner letzten Notenmanuskripte
        dokumentiert eine über Jahre fortschreitende Sehschwäche, die Bach offenbar arbeitend
        durchstand, statt sich frühzeitig zurückzuziehen.</p>
        <p class="vb-intro"><strong>c) Konzentration auf das eine Werk trotz schwindender Sicht:</strong>
        Noch in den späten 1740er-Jahren arbeitete Bach an großen, hochkomplexen Kompositionen
        wie der h-Moll-Messe – eine Konzentration auf das Wesentliche, die für die sexuelle
        Eins mit Neunerflügel typisch ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine schleichende Verschlechterung ohne klare Diagnose:</strong>
        Zeitgenössische Quellen dokumentieren keinen genauen Beginn der Augenerkrankung –
        rückblickend wird sie als grauer Star gedeutet, zeitgenössisch aber nie eindeutig
        diagnostiziert.</p>
        <p class="vb-intro"><strong>b) Zwei Operationen im März 1750:</strong>
        Bach unterzog sich zwei Eingriffen durch den reisenden, selbsternannten "Chevalier"
        John Taylor, einen britischen Augenoperateur von zweifelhaftem Ruf. Die angewandte
        Methode, das sogenannte "Couching", verlagerte die getrübte Linse, statt sie zu
        entfernen – ein bereits damals veraltetes, riskantes Verfahren.</p>
        <p class="vb-intro"><strong>c) Vollständige Erblindung nach der zweiten Operation:</strong>
        Nach etwa einer Woche musste erneut operiert werden, da sich der Star zurückbildete.
        Diese zweite Operation führte zur vollständigen Erblindung Bachs.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Derselbe Operateur, dasselbe Schicksal bei Händel:</strong>
        Kurz nach Bach operierte John Taylor auch Georg Friedrich Händel – mit ebenfalls
        verheerendem Ausgang. Zwei der bedeutendsten Komponisten des Barock wurden durch
        denselben zweifelhaften "Wunderheiler" erblindet zurückgelassen.</p>
        <p class="vb-intro"><strong>b) Vier Monate zwischen Erblindung und Tod:</strong>
        Am 28. Juli 1750, rund vier Monate nach den Operationen, starb Bach nach einem
        Schlaganfall, dem laut dem 1754 veröffentlichten Nekrolog ein "hitziges Fieber"
        vorausging – vermutlich eine fieberhafte Infektion.</p>
        <p class="vb-intro"><strong>c) Die Kausalität bleibt Deutung, nicht gesicherter Fakt:</strong>
        Ob die Operationen selbst den tödlichen Verlauf auslösten, ist eine in der Forschung
        verbreitete, plausible, aber nicht abschließend bewiesene Verbindung – eine
        moderne Autopsie im heutigen Sinne existiert nicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine populäre Legende, die der Forschung nicht standhält:</strong>
        Die romantische Erzählung, Bach sei mitten in der Komposition der letzten Fuge der
        "Kunst der Fuge" gestorben, ist heute widerlegt – das Autograph der letzten,
        unvollendeten Fuge stammt bereits aus den Jahren 1748/49, also von vor der
        Erblindung.</p>
        <p class="vb-intro"><strong>b) Die h-Moll-Messe als plausibleres letztes großes Werk:</strong>
        Der Bach-Forscher Christoph Wolff argumentiert, dass eher die h-Moll-Messe als
        Bachs eigentliches letztes vollendetes Hauptwerk gelten sollte – ein Werk, das er
        offenbar noch mit erheblicher Sehkraft-Einschränkung zu Ende brachte.</p>
        <p class="vb-intro"><strong>c) Eine bis heute diskutierte Rückdiagnose:</strong>
        Manche Forscher vermuten einen fortgeschrittenen Diabetes als Ursache sowohl der
        Sehverschlechterung als auch der schlechten Wundheilung nach der Operation – eine
        moderne Vermutung, keine gesicherte historische Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Arbeit als Konstante trotz nachlassender Sicht:</strong>
        Bach ließ sich von der fortschreitenden Sehschwäche offenbar nicht von seiner
        kompositorischen Arbeit abbringen – ein Ausdruck der Intensität, mit der die
        sexuelle Eins sich der einen, alles überragenden Sache widmet.</p>
        <p class="vb-intro"><strong>b) Neunerflügel-Gelassenheit im Angesicht des Risikos:</strong>
        Die Entscheidung, sich einem riskanten, damals bereits umstrittenen Eingriff zu
        unterziehen, statt mit der Erblindung zu leben, zeigt eine ruhige, fast fatalistische
        Risikobereitschaft – kein dramatischer Kampf, sondern ein stiller Versuch,
        das Problem zu lösen und weiterzuarbeiten.</p>
        <p class="vb-intro"><strong>c) Die Schwarze Mamba, die bis zum letzten Biss präzise blieb:</strong>
        Selbst in den letzten Lebensmonaten, fast vollständig erblindet, blieb Bachs
        kompositorisches Denken offenbar ungebrochen scharf – eine Präzision, die keine
        Behinderung zu trüben vermochte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Risiko, das schon in der Kindheit begann:</strong>
        Der Überlieferung nach kopierte der junge Bach verbotene Notenblätter heimlich bei
        Mondlicht – ein früher, selbst gewählter Raubbau an den eigenen Augen im Dienst der
        Musik, Jahrzehnte bevor die tatsächliche Erblindung eintrat.</p>
        <p class="vb-intro"><strong>b) Jahre schleichenden Verlusts, ohne öffentliches Klagen:</strong>
        Die zunehmend unleserliche Handschrift seiner letzten Manuskripte ist der einzige
        erhaltene Hinweis auf eine Verschlechterung, die Bach offenbar nie in den Mittelpunkt
        seiner eigenen Aufzeichnungen stellte.</p>
        <p class="vb-intro"><strong>c) Zwei Operationen, ein Verlust, vier Monate bis zum Tod:</strong>
        Die zeitliche Nähe zwischen der vollständigen Erblindung im März 1750 und Bachs Tod
        am 28. Juli 1750 ist historisch gut belegt, auch wenn die genaue kausale Kette
        Gegenstand fortlaufender Deutung bleibt.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Augen?</strong>
        Für eine sexuelle Eins, deren gesamte Hingabe sich mit kompromissloser Intensität auf
        die eine Sache richtet, der sie sich verschrieben hat, liegt eine Deutung nahe: Die
        Augen waren für Bach zeitlebens das Organ, mit dem er sich seiner Berufung
        unterwarf – im Kerzenlicht kopierend als Kind, über Notenblätter gebeugt als
        Komponist. Dass ausgerechnet dieses Organ am Ende versagte, nachdem er es ein Leben
        lang ohne Rücksicht auf sich selbst beansprucht hatte, liest sich als konsequenter
        Abschluss eines Musters, das schon in der Kindheit angelegt war. Diese Deutung ist
        eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins zwangsläufig zu
        Augenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Bachs Fall zeigen lässt, ist ein Muster,
        das bei der kompromisslosen Hingabe an eine einzige Berufung, ohne Rücksicht auf die
        eigenen körperlichen Grenzen, in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Bach kannte sein eigenes Muster nicht – die sexuelle Eins mit Neunerflügel sucht die eine, vollkommene Lösung, und genau dieser Drang nach Perfektion ließ ihn sich zweimal einer riskanten Operation durch denselben zweifelhaften Okulisten unterziehen, statt beim ersten Fehlschlag innezuhalten. Wer das eigene Streben nach der perfekten Lösung nicht als Muster erkennt, wiederholt denselben Fehler, in der Hoffnung, dieses Mal werde es anders.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Bachs</strong> sexueller Typ 1 mit Neunerflügel wird an seiner eigenen
        Erkrankung noch einmal sichtbar: ein Organ, das er als Kind schon riskierte und
        als Erwachsener bis zur vollständigen Erblindung beanspruchte, zwei riskante
        Operationen, denen er sich ruhig und ohne öffentliches Aufsehen unterzog, und ein Tod
        vier Monate später, dessen genaue Ursache bis heute Gegenstand der Forschung ist.
        Die Schwarze Mamba, die selbst im Dunkeln noch komponierte – präzise bis zuletzt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-johann-sebastian-bach", label:"Porträt: Johann Sebastian Bach (SX1w9) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}

function napoleonBonaparteKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-napoleon-bonaparte-portrait.jpg" alt="Napoleon Bonaparte" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Napoleon Bonaparte</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · 1769–1821</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Napoleon Bonaparte</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-napoleon-bonaparte">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier steht ein Kapitel im Zentrum, das dort nur eine Fußnote ist:
        über Jahrzehnte wiederkehrende Magenbeschwerden, ihre dramatische Zuspitzung im Exil
        auf St. Helena und Napoleons Tod 1821 an einem Magenkarzinom – derselben Krankheit,
        an der wahrscheinlich auch sein Vater starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Napoleon</strong> ist dem <strong>sozialen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SO2 richtet die Fürsorge der Zwei nicht auf eine einzelne Beziehung,
        sondern auf ein ganzes Kollektiv – Napoleon investierte, wie Naranjo es beschreibt,
        nicht in Rücklagen, sondern in Beziehung und Loyalität im großen Maßstab. Der
        Dreierflügel bringt unbedingten Ehrgeiz und die Weigerung hinzu, sich von Schwäche –
        auch der eigenen körperlichen – aufhalten zu lassen. Genau dieses Muster lässt sich
        bis in seine letzten, von Schmerzen gezeichneten Lebensjahre nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der eigene Körper als Nebensache neben der Mission:</strong>
        Napoleons Blick galt zeitlebens dem großen Ganzen – dem Feldzug, dem Reich, der
        eigenen historischen Rolle. Körperliche Beschwerden wurden konsequent nachrangig
        behandelt, solange sie die Handlungsfähigkeit nicht vollständig lähmten.</p>
        <p class="vb-intro"><strong>b) Funktionieren trotz Schmerz als Führungsanspruch:</strong>
        Berichten zufolge saß Napoleon am Morgen der Schlacht von Waterloo, am 18. Juni 1815,
        trotz akuter Beschwerden bereits um acht Uhr angezogen und beritten im Sattel – ein
        Führungsanspruch, der keine sichtbare Schwäche duldete.</p>
        <p class="vb-intro"><strong>c) Körperlicher Verfall im Exil als letzte, unausweichliche Realität:</strong>
        Erst auf St. Helena, fern jeder Bühne, wich diese Haltung zunehmend einem Körper, der
        sich der reinen Willenskraft nicht länger fügte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Wiederkehrende Magenbeschwerden über Jahre:</strong>
        Schon vor seinem Exil sind bei Napoleon gelegentliche Magen- und
        Verdauungsbeschwerden dokumentiert – der genaue Beginn lässt sich in den erhaltenen
        Quellen nicht präzise datieren, doch das Muster zog sich durch weite Teile seines
        Erwachsenenlebens.</p>
        <p class="vb-intro"><strong>b) Eine historisch umstrittene Episode bei Waterloo:</strong>
        Sein Bruder Jérôme berichtete später, Napoleon habe an diesem Tag unter akut
        entzündeten Hämorrhoiden und Blasenbeschwerden gelitten. Die These, dies habe seine
        taktischen Entscheidungen und damit die Niederlage beeinflusst, ist in der
        Geschichtsschreibung populär, aber umstritten und nicht abschließend belegt.</p>
        <p class="vb-intro"><strong>c) Zunehmendes Gewicht in den späteren Jahren:</strong>
        Rekonstruktionen anhand erhaltener Kleidungsstücke zeigen eine deutliche
        Gewichtszunahme von rund 67 auf etwa 90 Kilogramm zwischen 1808 und 1820 – ein
        Kontrollverlust über den eigenen Körper, der seiner sonstigen Disziplin
        entgegenstand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Verschlechterung ab 1818:</strong>
        Im Exil auf St. Helena verstärkten sich ab 1818 Übelkeit, Magenschmerzen und
        Harnprobleme. Ab September 1820 folgten häufigere Attacken mit Erbrechen, Fieber und
        Appetitlosigkeit; im Dezember 1820 konnte Napoleon kaum noch gehen.</p>
        <p class="vb-intro"><strong>b) Rapider Verfall in den letzten Lebensmonaten:</strong>
        Zwischen Oktober 1820 und Februar 1821 verschlechterte sich sein Zustand dramatisch:
        anhaltende Bauchschmerzen, Erbrechen, eine ausgeprägte Abneigung gegen Fleisch,
        Schluckbeschwerden, Nachtschweiß und fortschreitende Schwäche. Im letzten Lebensjahr
        verlor er etwa elf Kilogramm.</p>
        <p class="vb-intro"><strong>c) Tod am 5. Mai 1821:</strong>
        Napoleon starb im Alter von 51 Jahren auf St. Helena. Die Autopsie ergab ein
        infiltrativ-ulzeratives Magenkarzinom mit einer arrosiven Blutung als wahrscheinlicher
        unmittelbarer Todesursache – ein heute in der medizinhistorischen Forschung breit
        akzeptierter Befund.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine widerlegte Verschwörungstheorie:</strong>
        Die lange populäre Theorie, Napoleon sei mit Arsen vergiftet worden, gilt heute durch
        mehrere unabhängige moderne Gewebeanalysen als weitgehend widerlegt – erhöhte
        Arsenwerte werden eher auf zeittypische Umweltbelastungen zurückgeführt, nicht auf
        gezielte Vergiftung.</p>
        <p class="vb-intro"><strong>b) Ein wissenschaftlicher Konsens, der die Legende überdauert hat:</strong>
        Anders als die Vergiftungstheorie ist die Diagnose Magenkrebs autopsiebasiert und
        gilt in der Fachwelt als solide belegt – eine nüchterne, aber weniger dramatische
        Erklärung als die jahrzehntelang kursierende Mordthese.</p>
        <p class="vb-intro"><strong>c) Die Waterloo-These als Sinnbild seines gesamten Krankheitsverlaufs:</strong>
        Ob körperliche Beschwerden tatsächlich die Schlacht beeinflussten oder nicht – die
        Erzählung selbst zeigt exemplarisch, wie sehr Napoleons Körper und sein historisches
        Handeln in der öffentlichen Wahrnehmung untrennbar miteinander verwoben wurden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Funktionieren bis zur Grenze des Erträglichen:</strong>
        Die Bereitschaft, trotz akuter Schmerzen im Sattel zu sitzen und eine Schlacht zu
        führen, zeigt die Dreierflügel-Energie der SO2 in Reinform: Leistung wird erbracht,
        bis der Körper buchstäblich nicht mehr kann.</p>
        <p class="vb-intro"><strong>b) Der Verlust der Bühne als eigentlicher Wendepunkt:</strong>
        Erst als mit dem Exil auch das Publikum, für das Napoleon lebte, verschwand, begann
        der körperliche Verfall sich ungebremst zu zeigen – als hätte die Energie der
        sozialen Zwei zuvor den Körper mitgetragen.</p>
        <p class="vb-intro"><strong>c) Der Golden Retriever, der bis zuletzt für ein Ganzes kämpfte:</strong>
        Selbst im Angesicht des eigenen körperlichen Verfalls diktierte Napoleon auf St.
        Helena seine Memoiren – ein letzter Versuch, weiter für ein Publikum, eine
        Nachwelt, zu wirken.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein über Jahrzehnte wiederkehrendes Muster:</strong>
        Von gelegentlichen Magenbeschwerden in den Feldzugsjahren bis zum tödlichen Karzinom
        auf St. Helena zieht sich eine erkennbare, wenn auch lange nicht ernst genommene
        Linie durch Napoleons Erwachsenenleben.</p>
        <p class="vb-intro"><strong>b) Eine auffällige familiäre Parallele:</strong>
        Napoleons Vater Carlo Buonaparte starb 1785 nach Jahren zunehmender Schwäche
        ebenfalls an Magenkrebs. Napoleon selbst äußerte auf St. Helena die Furcht, das
        gleiche Schicksal wie sein Vater zu teilen – eine Furcht, die sich bewahrheitete.</p>
        <p class="vb-intro"><strong>c) Der Körper als letzter Ort, der sich nicht kommandieren ließ:</strong>
        Ein Mann, der ganze Armeen und halb Europa befehligte, konnte den eigenen Magen
        nicht befehligen – ein Kontrast, der Napoleons letzte Lebensjahre auf St. Helena
        prägte.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der Magen?</strong>
        Für eine soziale Zwei mit Dreierflügel, deren gesamte Identität an sichtbarer
        Leistung und der Fürsorge für ein großes Kollektiv hing, liegt eine Deutung nahe: Der
        Magen ist das Organ, das buchstäblich verdauen muss, was von außen kommt – bei
        Napoleon jahrzehntelang ein Übermaß an Verantwortung, Druck und ungebremstem Ehrgeiz,
        ohne dass je Raum für Verdauung im übertragenen Sinn blieb. Dass ausgerechnet dieses
        Organ am Ende versagte, in einem Exil, das ihm zum ersten Mal in seinem Leben nichts
        mehr zu verdauen ließ als die eigene Vergangenheit, liest sich als konsequenter
        Abschluss dieses Musters. Diese Deutung ist eine plausible Interpretation, kein
        belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu
        Magenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Napoleons Fall zeigen lässt, ist ein
        Muster, das bei der kompromisslosen Priorisierung von Leistung und Fürsorge für ein
        großes Ganzes über die eigenen körperlichen Signale hinweg in der Praxis immer wieder
        auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Napoleon kannte sein eigenes Muster nicht – die soziale Zwei mit Dreierflügel verdrängt die eigene Verwundbarkeit zugunsten der nächsten großen Aufgabe, und genau das ließ ihn jahrzehntelange Magenbeschwerden ignorieren, selbst als sie sein strategisches Urteilsvermögen bei Waterloo beeinträchtigt haben könnten. Wer das eigene Verdrängungsmuster nicht kennt, riskiert am Ende genau das, wofür er alles andere geopfert hat.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 2 mit Dreierflügel bestätigt sich bei <strong>Napoleon</strong> noch
        einmal in der eigenen Erkrankung: über Jahrzehnte hingenommene Magenbeschwerden,
        eine umstrittene, aber sinnbildliche Episode bei Waterloo, und ein Tod 1821, der
        exakt das familiäre Muster seines Vaters wiederholte. Der Golden Retriever, der
        ganze Armeen mobilisierte, bis der eigene Körper die letzte, unüberwindbare
        Front wurde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-napoleon-bonaparte", label:"Porträt: Napoleon Bonaparte (SO2w3) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

function juliusCaesarKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-julius-caesar-portrait.jpg" alt="Julius Caesar" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Julius Caesar</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · 100–44 v. Chr.</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Julius Caesar</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-julius-caesar">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Diese Seite beleuchtet ein Kapitel, das dort nicht zur Sprache kommt: eine
        wiederkehrende, von antiken Quellen mehrfach bezeugte Krankheit – vermutlich Epilepsie –,
        die Caesar zeitlebens verbarg und die möglicherweise sogar seine Ermordung mit
        begünstigte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Caesar</strong> ist dem <strong>sozialen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SO2 investiert, wie Naranjo beschreibt, nicht in Rücklagen, sondern in
        Beziehung, Bewunderung und Unentbehrlichkeit im großen Maßstab. Der Dreierflügel bringt
        die Weigerung hinzu, sich von Schwäche – auch der eigenen körperlichen – aufhalten zu
        lassen, und die Fähigkeit, jedes Bild von sich selbst aktiv zu gestalten. Genau dieses
        Muster lässt sich bis in Caesars Umgang mit der eigenen, verborgenen Krankheit
        nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Antike Quellen, die übereinstimmend berichten:</strong>
        Sowohl Plutarch als auch Sueton berichten unabhängig voneinander, Caesar habe an der
        „Fallsucht" (morbus comitialis) gelitten – dem antiken Begriff für das, was heute als
        Epilepsie gedeutet wird.</p>
        <p class="vb-intro"><strong>b) Ein Anfall mitten im Feldzug:</strong>
        Plutarch beschreibt einen Anfall während der Schlacht von Thapsus 46 v. Chr., bei dem
        Caesar von seinen Männern vom Schlachtfeld getragen werden musste, während die
        Auseinandersetzung weiterging.</p>
        <p class="vb-intro"><strong>c) Ein zweiter belegter Vorfall in Corduba:</strong>
        Ein weiterer Anfall soll sich 45 v. Chr. in Corduba (heute Córdoba, Spanien) während
        einer öffentlichen Ansprache ereignet haben – ein Zeitpunkt, an dem Zurückhaltung für
        einen Feldherrn vor seinen eigenen Truppen kaum denkbar erschien.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unklarer Beginn der Erkrankung:</strong>
        Ob die Anfälle Caesar bereits in jungen Jahren begleiteten oder sich erst in seinen
        letzten Lebensjahren entwickelten, lässt sich aus den erhaltenen Quellen nicht sicher
        rekonstruieren – die moderne Forschung diskutiert beide Möglichkeiten.</p>
        <p class="vb-intro"><strong>b) Eine bis heute offene medizinhistorische Debatte:</strong>
        Moderne Mediziner und Historiker diskutieren neben Epilepsie auch alternative
        Erklärungen, darunter wiederholte kleine Schlaganfälle (transitorische ischämische
        Attacken) infolge jahrzehntelanger Feldzugsstrapazen. Eine eindeutige retrospektive
        Diagnose ist über zweitausend Jahre später nicht mehr möglich.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Bestätigung durch Caesar selbst:</strong>
        In keiner erhaltenen eigenen Schrift, auch nicht in den ausführlichen
        <em>Commentarii</em>, erwähnt Caesar die eigene Krankheit auch nur andeutungsweise –
        ein auffälliges Schweigen bei einem Mann, der sonst jedes Detail seines Wirkens
        sorgfältig dokumentieren ließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortgesetzte Feldzüge trotz der Anfälle:</strong>
        Weder der Vorfall bei Thapsus noch jener in Corduba hielten Caesar davon ab, seine
        Feldzüge unmittelbar fortzusetzen – beide Male kehrte er binnen kurzer Zeit ins
        Kommando zurück, als sei nichts geschehen.</p>
        <p class="vb-intro"><strong>b) Reduzierte Leibwache in den letzten Monaten:</strong>
        Zeitgenössische Überlieferungen berichten, Caesar habe seine persönliche Wachmannschaft
        in den Wochen vor seiner Ermordung bewusst verringert – ein Verhalten, das manche
        Historiker mit einem abnehmenden Vertrauen in die eigene körperliche Unverwundbarkeit
        in Verbindung bringen, andere schlicht mit politischem Kalkül.</p>
        <p class="vb-intro"><strong>c) Die Ermordung am 15. März 44 v. Chr.:</strong>
        Caesar wurde im Senat von einer Gruppe von Verschwörern mit 23 Dolchstichen getötet –
        ein gewaltsames Ende, das mit der Krankheit selbst nicht direkt in Verbindung steht,
        dessen Vorgeschichte aber von den Fragen nach Caesars Verwundbarkeit und
        Unverwundbarkeit durchzogen ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die zur literarischen Ikone wurde:</strong>
        Shakespeares Drama <em>Julius Caesar</em> (um 1599) dramatisiert einen öffentlichen
        Anfall auf dem Forum – eine Szene, die Caesars „Fallsucht" bis heute im kollektiven
        Bewusstsein verankert, unabhängig von der genauen historischen Faktenlage.</p>
        <p class="vb-intro"><strong>b) Eine mögliche Rolle im Kalkül der Verschwörer:</strong>
        Manche Historiker spekulieren, dass wahrgenommene Anzeichen körperlicher Schwäche –
        neben Caesars zunehmender Machtfülle – das Zeitfenster für das Attentat mit
        beeinflusst haben könnten. Belastbar beweisen lässt sich das nicht.</p>
        <p class="vb-intro"><strong>c) Der Kontrast zwischen öffentlichem Bild und privater Realität:</strong>
        Kaum ein anderer antiker Herrscher hat sein öffentliches Bild so bewusst gestaltet wie
        Caesar – und kaum einer hat eine eigene körperliche Schwäche so konsequent aus diesem
        Bild herausgehalten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Golden Retriever, der keine Schwäche zeigen durfte:</strong>
        Für einen Mann, dessen gesamte Wirkung auf Unentbehrlichkeit und Bewunderung beruhte,
        wäre ein öffentlich anerkanntes Krankheitsbild eine Bedrohung des eigenen Kerns gewesen
        – nicht nur der körperlichen, sondern der emotionalen Sicherheit.</p>
        <p class="vb-intro"><strong>b) Rückkehr ins Kommando als Selbstbeweis:</strong>
        Die beiden belegten Vorfälle bei Thapsus und Corduba folgten demselben Muster: Anfall,
        kurze Unterbrechung, sofortige Rückkehr zur vollen Handlungsfähigkeit – eine
        demonstrative Bestätigung der eigenen Unverwundbarkeit, gerade weil das Gegenteil
        gezeigt worden war.</p>
        <p class="vb-intro"><strong>c) Vertrauen in die eigene Unentbehrlichkeit bis zuletzt:</strong>
        Dieselbe Haltung, die Caesar dazu brachte, seine Leibwache zu reduzieren, weil „man ihm
        doch nichts tun werde, er habe doch für alle gesorgt", zeigt sich bereits im Umgang mit
        der eigenen Krankheit: Verwundbarkeit wurde nicht zugelassen, sondern überspielt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Schweigen, das über zweitausend Jahre trägt:</strong>
        Dass ausgerechnet ein Mann, der seine eigene Geschichte in der dritten Person
        niederschrieb, um jedes Detail seines Wirkens zu kontrollieren, seine eigene Krankheit
        nie erwähnte, zeigt, wie tief die Verbergung reichte.</p>
        <p class="vb-intro"><strong>b) Zwei belegte Vorfälle, ein wiederkehrendes Verhalten:</strong>
        Sowohl bei Thapsus als auch in Corduba reagierte Caesar auf denselben Weise: keine
        Unterbrechung der Mission, keine öffentliche Anerkennung der eigenen Grenzen, sofortige
        Rückkehr zur vollen Kontrolle.</p>
        <p class="vb-intro"><strong>c) Konfrontation durch Verbergung statt durch Rückzug:</strong>
        Anders als Ludwig van Beethoven (SX6w5), der seine Krankheit offen bekämpfte, oder
        Franz Schubert (SE6w5), der sich zurückzog, wählte Caesar – ganz wie später sein
        SO2w3-Pendant Napoleon Bonaparte – den dritten Weg: die eigene Krankheit so vollständig
        zu verbergen, dass sie im öffentlichen Bild schlicht nicht existierte.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet ein Zusammenbruch der Kontrolle?</strong>
        Für eine soziale Zwei mit Dreierflügel, deren gesamte Identität an der bewussten
        Gestaltung des eigenen Bildes hing, liegt eine Deutung nahe: Ausgerechnet eine
        Krankheit, die den Körper für Momente der eigenen Kontrolle entzieht und ihn
        öffentlich verwundbar macht, wurde zur größten denkbaren Bedrohung – und musste deshalb
        um jeden Preis aus dem eigenen Narrativ herausgehalten werden. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu Epilepsie oder
        ähnlichen Erkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Caesars Fall zeigen lässt, ist ein Muster
        im Umgang mit der eigenen Krankheit, das bei einer ausgeprägten sozialen Zwei mit
        Dreierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Caesar kannte sein eigenes Muster nicht – die soziale Zwei mit Dreierflügel kann keine
        Schwäche zulassen, die das selbst geschaffene Bild der Unentbehrlichkeit gefährdet, und
        genau das ließ ihn eine wiederkehrende Krankheit über Jahre verschweigen, statt sie
        auch nur einmal öffentlich einzuräumen. Wer das eigene Bedürfnis nach einem
        makellosen, unverwundbaren Bild nicht als Muster erkennt, verbirgt am Ende genau die
        Verwundbarkeit, die die eigene Sicherheit am nötigsten gebraucht hätte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 2 mit Dreierflügel bestätigt sich bei <strong>Caesar</strong> noch
        einmal im Umgang mit der eigenen Krankheit: eine wiederkehrende, von mehreren antiken
        Quellen bezeugte Erkrankung, die er nie öffentlich anerkannte, zwei belegte Anfälle
        mitten im Kommando, aus dem er sich jeweils sofort zurückmeldete, und eine reduzierte
        Leibwache in den letzten Wochen, die zeigt, wie sehr das Vertrauen in die eigene
        Unverwundbarkeit bis zuletzt trug. Der Golden Retriever, der lieber schutzlos blieb,
        als auch nur einen Moment lang verwundbar zu wirken.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-julius-caesar", label:"Porträt: Julius Caesar (SO2w3) – Lebenswerk"},
        {route:"krankheitsportraets-muhammad-ali", label:"Krankheitsporträt: Muhammad Ali – Parkinson"},
        {route:"krankheitsportraets-napoleon-bonaparte", label:"Krankheitsporträt: Napoleon Bonaparte (SO2w3) – dieselbe Verbergungsstrategie"},
        {route:"krankheitsportraets-alexander-der-grosse", label:"Krankheitsporträt: Alexander der Große (SO2w3) – derselbe Dreierflügel-Reflex"},
        {route:"krankheitsportraets-ludwig-van-beethoven", label:"Krankheitsporträt: Ludwig van Beethoven (SX6w5) – Gegenmodell: offene Konfrontation"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

function claudeDebussyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-claude-debussy-portrait.jpg" alt="Claude Debussy" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Claude Debussy</p>
        <p class="krim-portrait-typ">SX4w5 · Sexueller Typ 4 mit Fünferflügel · 1862–1918</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Claude Debussy</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-claude-debussy">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein kompositorisches Lebenswerk und seine
        Typstruktur. Diese Seite vertieft ein Kapitel, das dort nicht zur Sprache kommt: eine
        Darmkrebs-Diagnose 1909, ein fast neunjähriger, zunehmend schmerzhafter
        Krankheitsverlauf während des Ersten Weltkriegs und ein Tod inmitten der deutschen
        Beschießung von Paris.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Debussy</strong> ist der <strong>sexuellen Vier mit Fünferflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Rivalität</em>: die brennende Überzeugung,
        dass die bestehende Ordnung einem etwas Wesentliches vorenthält, verbunden mit dem
        Antrieb, dagegen anzutreten. Der Fünferflügel bringt die Fähigkeit hinzu, sich in Arbeit
        und Struktur zu vertiefen, bis keine Kraft mehr bleibt – ein Muster, das sich bis in
        Debussys Umgang mit der eigenen tödlichen Krankheit nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Symptome bereits 1908:</strong>
        Ab 1908 klagte Debussy zunehmend über Verdauungsbeschwerden und Blutungen – Symptome,
        die er zunächst als vorübergehend abtat, während er weiter komponierte und dirigierte.</p>
        <p class="vb-intro"><strong>b) Diagnose 1909:</strong>
        1909 wurde bei Debussy Darmkrebs diagnostiziert. Er hielt die Diagnose weitgehend
        privat und setzte seine kompositorische Arbeit sowie öffentliche Auftritte als
        Dirigent und Pianist fort.</p>
        <p class="vb-intro"><strong>c) Weiterarbeiten trotz erster Behandlungen:</strong>
        Schon in den ersten Jahren nach der Diagnose unterzog sich Debussy wiederholt
        schmerzhaften Behandlungen, ohne seine Konzerttätigkeit und Kompositionsarbeit
        grundlegend einzuschränken.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Radium-Behandlungen ab 1915:</strong>
        Ab 1915 unterzog sich Debussy mehreren Radium-Behandlungen gegen den fortschreitenden
        Krebs – eine damals neuartige, äußerst schmerzhafte Therapieform mit ungewissem
        Erfolg.</p>
        <p class="vb-intro"><strong>b) Eine Operation im Dezember 1915:</strong>
        Im Dezember 1915 unterzog sich Debussy einer der ersten Kolostomie-Operationen in
        Frankreich – ein Eingriff, der ihn körperlich stark schwächte, seinen kompositorischen
        Ehrgeiz jedoch nicht brach.</p>
        <p class="vb-intro"><strong>c) Komposition trotz sich verschlechternder Gesundheit:</strong>
        In den Jahren nach der Operation komponierte Debussy weiter, darunter seine letzten
        großen Kammermusikwerke – entstanden in Phasen zunehmender Schmerzen und
        Erschöpfung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein letzter öffentlicher Auftritt unter Kriegsbedingungen:</strong>
        Im September 1917, bereits schwer von der Krankheit gezeichnet, gab Debussy eines
        seiner letzten Konzerte in Paris – während die Stadt unter dem Bombardement der
        deutschen Armee stand.</p>
        <p class="vb-intro"><strong>b) Rascher Verfall im Frühjahr 1918:</strong>
        In den ersten Monaten des Jahres 1918 verschlechterte sich Debussys Zustand dramatisch.
        Er war zunehmend ans Bett gefesselt, während die sogenannte Pariser Kanone die Stadt
        aus fast 130 Kilometern Entfernung beschoss.</p>
        <p class="vb-intro"><strong>c) Tod am 25. März 1918:</strong>
        Debussy starb in seiner Wohnung in Paris im Alter von 55 Jahren, während die Stadt
        unter deutschem Artilleriebeschuss lag. Wegen der Kriegslage fand seine Beerdigung
        unter kleinem Rahmen statt – ein stiller Abschied inmitten des Kriegslärms.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Fast neun Jahre zwischen Diagnose und Tod:</strong>
        Von der Diagnose 1909 bis zu seinem Tod 1918 lebte Debussy fast neun Jahre mit einer
        fortschreitenden, zunehmend schmerzhaften Krankheit, ohne sein kompositorisches
        Schaffen vollständig aufzugeben.</p>
        <p class="vb-intro"><strong>b) Ein Spätwerk, geprägt von Verlust und Schmerz:</strong>
        Debussys letzte Kompositionen – entstanden während der schlimmsten Kriegsjahre und der
        fortschreitenden Krankheit – tragen eine Klarheit und Zurückhaltung, die viele
        Musikhistoriker als bewussten Rückzug auf das Wesentliche lesen.</p>
        <p class="vb-intro"><strong>c) Krankheit und Krieg als paralleler roter Faden:</strong>
        Debussys letzte Lebensjahre verliefen parallel zum Ersten Weltkrieg – seine persönliche
        Krankheitsgeschichte und der Zusammenbruch der europäischen Ordnung, die er zeitlebens
        in Frage gestellt hatte, endeten fast im selben Moment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Rivalität, gerichtet gegen die eigene Sterblichkeit:</strong>
        So wie Debussy sein Leben lang gegen die etablierte Musikwelt ankämpfte, kämpfte er
        auch gegen die fortschreitende Krankheit – nicht durch Verdrängung, sondern durch
        fortgesetztes, kompromissloses Schaffen.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel als Rückzugsort in der Krankheit:</strong>
        Je kränker Debussy wurde, desto mehr zog er sich in die eigene kompositorische Arbeit
        zurück – dieselbe Vertiefung in Struktur und Klang, die ihn schon als jungen Komponisten
        auszeichnete, wurde nun zum Ort, an dem der Schmerz für Stunden verschwand.</p>
        <p class="vb-intro"><strong>c) Ein letztes Konzert als Trotzreaktion:</strong>
        Sein Auftritt 1917 unter Kriegsbedingungen, schwer krank, zeigt dieselbe Haltung, die
        sein gesamtes Werk durchzog: sich nicht von äußeren Umständen – ob Kritikern oder
        Kanonen – die eigene Musik diktieren zu lassen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Neun Jahre zwischen Diagnose und Tod:</strong>
        Von 1909 bis 1918 lebte Debussy mit einer Krankheit, die er nie öffentlich in den
        Mittelpunkt seines Lebens stellte, sondern die er durch fortgesetzte kompositorische
        Arbeit gewissermaßen überschrieb.</p>
        <p class="vb-intro"><strong>b) Konfrontation statt Rückzug aus der Öffentlichkeit:</strong>
        Anders als Karl Lagerfeld (SO3w4) oder Michael Jackson (SO4w3), die ihre Krankheit
        hinter einer makellosen Fassade verbargen, zog sich Debussy zwar körperlich zurück,
        gab aber bis zuletzt öffentliche Konzerte – eine eigene, zwischen Konfrontation und
        Rückzug liegende Form des Umgangs mit der eigenen Sterblichkeit.</p>
        <p class="vb-intro"><strong>c) Ein Tod, der mit dem Zusammenbruch einer Epoche zusammenfiel:</strong>
        Dass Debussy ausgerechnet während der Beschießung von Paris starb, verstärkt den
        Eindruck eines Lebens, dessen private und historische Krisen bis zuletzt
        ineinandergriffen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der Darm?</strong>
        Für eine sexuelle Vier, deren gesamtes Werk aus der Verdauung und Verwandlung von
        Schmerz in Kunst bestand, liegt eine Deutung nahe: Ausgerechnet das Organ, das im
        wörtlichsten Sinn verdaut, wurde zum Schauplatz eines Kampfes, den Debussy nie
        öffentlich austrug, sondern in seine Musik hinein verdichtete. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier zwangsläufig zu Darmkrebs führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Debussys Fall zeigen lässt, ist ein Muster im Umgang mit der eigenen Krankheit,
        das bei einer ausgeprägten sexuellen Vier mit Fünferflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Debussy kannte sein eigenes Muster nicht – die sexuelle Vier verwandelt Schmerz
        reflexhaft in Werk statt in Schonung, und genau das ließ ihn auch angesichts einer
        tödlichen Diagnose weiterarbeiten, weiterdirigieren, weiterauftreten, statt sich Zeit
        für die eigene Genesung zu nehmen. Wer das eigene Muster, Schmerz sofort in Ausdruck zu
        verwandeln, nicht kennt, verpasst möglicherweise den Moment, in dem Innehalten die
        klügere Antwort gewesen wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Debussys</strong> sexuelle Vier mit
        Fünferflügel noch einmal ablesen: eine fast neunjährige Krankheit, die er nie
        öffentlich zum Zentrum seines Lebens machte, ein letztes Konzert unter Kanonendonner
        und ein Tod, der mit dem Zusammenbruch einer ganzen Epoche zusammenfiel. Der Chihuahua,
        der der Musik beibrachte zu schweben, auch als der eigene Körper längst nicht mehr
        tragen konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-claude-debussy", label:"Porträt: Claude Debussy (SX4w5) – Lebenswerk"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – Gegenmodell: Verbergen statt Auftreten"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

function johnWayneKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-john-wayne-portrait.jpg" alt="John Wayne" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Wayne</p>
        <p class="krim-portrait-typ">SX8w7 · Sexueller Typ 8 mit Siebenerflügel · 1907–1979</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Krokodil</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Tierentsprechung: Krokodil" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>John Wayne</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-john-wayne">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Diese Seite vertieft ein Kapitel, das dort nicht zur Sprache kommt: eine
        Lungenkrebs-Erkrankung 1964, die Wayne öffentlich zum Kampf erklärte, und eine zweite,
        tödliche Krebsdiagnose 1979.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Wayne</strong> ist der <strong>sexuellen Acht mit Siebenerflügel</strong>
        zugeordnet. Die SX8 lebt ihre Intensität ungefiltert und körperlich aus – sie sucht
        nicht die diplomatische Mitte, sondern den vollen, unmittelbaren Ausdruck von Kraft und
        Willen. Der Siebenerflügel bringt zusätzlichen Schwung und die Weigerung hinzu,
        innezuhalten – ein Muster, das sich bis in Waynes öffentlich inszenierten Kampf gegen
        die eigene Krankheit nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehntelanges starkes Rauchen:</strong>
        Wayne rauchte über Jahrzehnte hinweg bis zu sechs Packungen Zigaretten pro Tag – ein
        Konsum, der sein Krebsrisiko drastisch erhöhte, den er aber lange nicht als Bedrohung
        behandelte.</p>
        <p class="vb-intro"><strong>b) Diagnose im September 1964:</strong>
        1964 wurde bei Wayne Lungenkrebs diagnostiziert. Sein linker Lungenflügel sowie zwei
        Rippen mussten in einer aufwendigen Operation entfernt werden.</p>
        <p class="vb-intro"><strong>c) Öffentliche Erklärung des Kampfes:</strong>
        Statt die Diagnose zu verbergen, ging Wayne 1965 mit ihr an die Öffentlichkeit und
        bezeichnete seinen Kampf gegen die Krankheit als „The Big C" – Krebs sollte, wie jeder
        andere Gegner in seinen Filmen, direkt benannt und bekämpft werden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Rückkehr vor die Kamera trotz eines Lungenflügels:</strong>
        Bereits wenige Monate nach der schweren Operation kehrte Wayne zu Dreharbeiten zurück –
        mit deutlich eingeschränkter Lungenkapazität, aber ohne öffentlich sichtbare
        Einschränkung seiner Rollenwahl.</p>
        <p class="vb-intro"><strong>b) Eine Symbolfigur für Krebsaufklärung:</strong>
        Waynes offener Umgang mit seiner Diagnose machte ihn zu einem der bekanntesten
        öffentlichen Gesichter im Kampf gegen Krebs in den USA der 1960er- und 1970er-Jahre –
        er engagierte sich aktiv für Aufklärungsarbeit.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte körperliche Schwerstarbeit im Film:</strong>
        Auch nach der Operation drehte Wayne weiter körperlich fordernde Western- und
        Actionrollen, oft mit sichtbarer Anstrengung, aber ohne die Rollenauswahl grundlegend
        zu ändern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fünfzehn Jahre nach der ersten Diagnose:</strong>
        Nach der Lungenkrebs-Operation 1964 lebte Wayne fünfzehn weitere Jahre, in denen er
        seine Filmkarriere fortsetzte, darunter seinen einzigen Oscar-gewinnenden Auftritt in
        „True Grit" (1969).</p>
        <p class="vb-intro"><strong>b) Eine zweite Krebsdiagnose im Januar 1979:</strong>
        Im Januar 1979 wurde bei Wayne Magenkrebs diagnostiziert. Bei der folgenden Operation
        wurde sein gesamter Magen entfernt.</p>
        <p class="vb-intro"><strong>c) Tod am 11. Juni 1979:</strong>
        Wayne starb im Alter von 72 Jahren im UCLA Medical Center an den Folgen der
        Magenkrebs-Erkrankung – knapp fünf Monate nach der zweiten Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentlicher Kampf, der zum Vorbild wurde:</strong>
        Waynes Offenheit über seine erste Krebserkrankung ermutigte viele andere Betroffene,
        ihre eigene Diagnose nicht länger zu verschweigen – ein seltener Fall, in dem
        Offenheit statt Verbergung das prägende Muster war.</p>
        <p class="vb-intro"><strong>b) Zwei Krebsarten, ein Lebensstil:</strong>
        Sowohl der Lungen- als auch der spätere Magenkrebs stehen im Zusammenhang mit
        Waynes jahrzehntelangem, intensivem Tabakkonsum – ein Risiko, das er trotz der ersten
        Diagnose nie grundlegend änderte.</p>
        <p class="vb-intro"><strong>c) Eine Karriere, die bis zuletzt weiterging:</strong>
        Wayne drehte seinen letzten Film, „The Shootist" – bezeichnenderweise über einen
        todkranken Revolverhelden –, erst 1976, drei Jahre vor seinem Tod.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Krebs als benannter Gegner:</strong>
        Wo andere Prominente ihre Erkrankung verbargen, benannte Wayne seinen Krebs explizit
        als Feind, den es zu besiegen galt – die sexuelle Acht, die Bedrohung nicht meidet,
        sondern direkt konfrontiert, auch wenn der Gegner der eigene Körper ist.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel als Antrieb zur schnellen Rückkehr:</strong>
        Die rasche Rückkehr vor die Kamera nach der Lungenoperation zeigt den Siebenerflügel in
        Reinform: Stillstand war für Wayne keine Option, selbst mit nur noch einem
        Lungenflügel.</p>
        <p class="vb-intro"><strong>c) Öffentliche Stärke als Fortsetzung der Leinwandfigur:</strong>
        Der Kampf gegen „The Big C" wurde von der Öffentlichkeit fast wie eine Fortsetzung
        seiner Filmrollen wahrgenommen – der Duke, der auch der eigenen Sterblichkeit die
        Stirn bot.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Fünfzehn Jahre zwischen erster Diagnose und Tod:</strong>
        Von der Lungenkrebs-Diagnose 1964 bis zu seinem Tod 1979 lebte Wayne fünfzehn Jahre mit
        dem Wissen um die eigene Sterblichkeit – ohne sein öffentliches Leben oder seine
        Rollenwahl grundlegend zu verändern.</p>
        <p class="vb-intro"><strong>b) Konfrontation statt Verbergung als durchgehendes Muster:</strong>
        Anders als Karl Lagerfeld (SO3w4) oder Michael Jackson (SO4w3), die ihre Krankheit
        hinter einer makellosen Fassade verbargen, machte Wayne seine Diagnose öffentlich und
        stilisierte sie zu einem weiteren Kampf, den es zu gewinnen galt – die sexuelle Acht,
        die Bedrohung nicht versteckt, sondern benennt.</p>
        <p class="vb-intro"><strong>c) Zwei verschiedene Organe, derselbe Lebensstil:</strong>
        Dass sowohl Lunge als auch Magen betroffen waren, verweist auf denselben
        zugrundeliegenden Risikofaktor – ein Lebensstil, der auf Intensität statt auf
        Mäßigung ausgerichtet war, auch nach der ersten Warnung.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet zwei aufeinanderfolgende Krebserkrankungen?</strong>
        Für eine sexuelle Acht mit Siebenerflügel, deren gesamtes Selbstverständnis auf
        ungebremster Intensität und Tempo beruht, liegt eine Deutung nahe: Der Körper, der
        jahrzehntelang ohne Mäßigung beansprucht wurde, meldete sich gleich zweimal – und
        Wayne begegnete beiden Malen mit derselben direkten Konfrontation, nie mit Rückzug
        oder Mäßigung. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Acht zwangsläufig zu Krebserkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Waynes Erkrankungen sind zudem eng mit einem klassischen Risikofaktor verbunden
        (jahrzehntelanges starkes Rauchen), nicht rein psychosomatisch zu erklären. Was sich an
        seinem Fall zeigen lässt, ist ein Muster im öffentlichen Umgang mit eigener Krankheit,
        das bei einer ausgeprägten sexuellen Acht mit Siebenerflügel immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Wayne kannte sein eigenes Muster nicht – die sexuelle Acht mit Siebenerflügel begegnet
        Bedrohung mit direkter Konfrontation und ungebremstem Tempo, und genau das ließ ihn
        trotz der ersten Krebsdiagnose seinen intensiven Lebensstil im Kern unverändert
        fortsetzen, statt grundlegend gegenzusteuern. Wer das eigene Muster, jede Bedrohung
        körperlich niederzuringen statt sie zum Anlass für Mäßigung zu nehmen, nicht kennt,
        riskiert, dass derselbe Gegner ein zweites Mal zurückkehrt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Waynes</strong> sexuelle Acht mit
        Siebenerflügel noch einmal ablesen: eine öffentlich ausgetragene erste Krebsschlacht
        1964, fünfzehn weitere Lebensjahre in unverändertem Tempo, und eine zweite,
        tödliche Diagnose 1979, die er mit derselben direkten Haltung annahm wie die erste.
        Das Krokodil, das „The Big C" wie jeden anderen Gegner beim Namen nannte – und das am
        Ende zweimal antreten musste, um denselben Kampf zu führen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-john-wayne", label:"Porträt: John Wayne (SX8w7) – Lebenswerk"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – Gegenmodell: Verbergen statt Konfrontation"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx8", label:"Subtyp-Profil SX8"},
      ])}
    </div>
  `);
}

function elvisPresleyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-elvis-presley-portrait.jpg" alt="Elvis Presley" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elvis Presley</p>
        <p class="krim-portrait-typ">SX2w3 · Sexueller Typ 2 mit Dreierflügel · 1935–1977</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kamel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx2.jpg" alt="Tierentsprechung: Kamel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX2")};left:${tierAvatarLeft("SX2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elvis Presley</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-elvis-presley">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier rückt ein Kapitel in den Vordergrund, das dort kaum berührt wird: ein
        über ein Jahrzehnt eskalierender körperlicher Verfall durch Medikamentenabhängigkeit,
        der 1977 mit nur 42 Jahren zu seinem Tod führte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Elvis</strong> ist dem <strong>sexuellen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SX2 richtet die Fürsorge und Verführungskraft der Zwei ganz auf die
        eine, exklusive Verbindung – auf das Publikum als kollektiven Liebespartner, dem
        vollständige Hingabe gilt. Der Dreierflügel bringt den unbedingten Willen zum
        sichtbaren Erfolg hinzu, verbunden mit der Weigerung, dem Publikum je ein Nachlassen
        der eigenen Strahlkraft zuzumuten. Genau dieses Muster trieb Elvis noch auf die Bühne,
        als sein Körper längst zusammenbrach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Das Publikum vor dem eigenen Körper:</strong>
        Elvis' Blick galt bis zuletzt der Frage, was sein Publikum von ihm erwartete – nicht
        der Frage, was sein Körper noch leisten konnte.</p>
        <p class="vb-intro"><strong>b) Verfall, der auf der Bühne unübersehbar wurde:</strong>
        Seine frühere Begleiterin Linda Thompson beschrieb seinen Anblick im CBS-Special
        "Elvis in Concert" später als erschreckend – ein Mann, der binnen weniger Monate
        kaum wiederzuerkennen war.</p>
        <p class="vb-intro"><strong>c) Auftreten trotz sichtbarer Erschöpfung:</strong>
        Von der ersten Konzertnacht dieser letzten Tournee in Omaha im Juni 1977 konnte kaum
        Bildmaterial verwendet werden – die Aufführung galt als zu schwach, um sie zu zeigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Wendepunkt im Jahr 1967:</strong>
        Sein Leibarzt George Nichopoulos, genannt "Dr. Nick", begann Elvis 1967 wegen
        Schmerzen zu behandeln – aus heutiger Sicht der Beginn einer sich über ein Jahrzehnt
        steigernden Medikamentenabhängigkeit.</p>
        <p class="vb-intro"><strong>b) Fast 19.000 verschriebene Dosen:</strong>
        In den letzten 31 Monaten vor seinem Tod erhielt Elvis Berichten zufolge rund 19.000
        Dosen verschreibungspflichtiger Medikamente – Sedativa, Amphetamine, Tranquilizer und
        Opioide.</p>
        <p class="vb-intro"><strong>c) Beschleunigung nach der Scheidung 1973:</strong>
        Nach der Trennung von Priscilla Presley im Oktober 1973 verschärften sich Gewichtszunahme
        und Medikamentenkonsum deutlich – ein Einschnitt, den mehrere Quellen als
        Beschleuniger seines Verfalls benennen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein stark vergrößerter Dickdarm:</strong>
        Die Autopsie ergab ein sogenanntes Megakolon – mit fünf bis sechs Zoll Durchmesser
        und acht bis neun Fuß Länge weit über dem Normalmaß, gefüllt mit teils Monate altem
        Stuhl.</p>
        <p class="vb-intro"><strong>b) Ein deutlich vergrößertes Herz:</strong>
        Die Autopsie stellte zudem ein Herz fest, das etwa doppelt so groß war wie normal –
        ein Befund, der auf jahrelange kardiologische Überlastung hindeutet.</p>
        <p class="vb-intro"><strong>c) Vier Krankenhausaufenthalte in fünf Jahren:</strong>
        In seinen letzten fünf Lebensjahren wurde Elvis mehrfach wegen Bluthochdruck und
        Darmkomplikationen stationär behandelt – ohne dass dies seinen Tourplan dauerhaft
        veränderte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Toxikologie mit vierzehn Substanzen:</strong>
        Im Blut wurden nach seinem Tod vierzehn verschiedene Medikamente nachgewiesen, die
        Codein-Konzentration lag rund zehnmal über dem therapeutischen Bereich.</p>
        <p class="vb-intro"><strong>b) Eine bis heute umstrittene offizielle Todesursache:</strong>
        Die Autopsie nannte eine Herzrhythmusstörung auf Basis einer bluthochdruckbedingten
        Herzerkrankung als Todesursache – viele Fachleute sehen dagegen das Zusammenwirken
        mehrerer Medikamente als zentralen Faktor, eine bis heute nicht einheitlich geklärte
        Kontroverse.</p>
        <p class="vb-intro"><strong>c) Ein Arzt, der später seine Approbation verlor:</strong>
        "Dr. Nick" wurde 1980 wegen Überverschreibung angeklagt, aber freigesprochen; 1993
        wurde ihm die ärztliche Zulassung schließlich entzogen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Bühnenpräsenz als letzte Konstante:</strong>
        Selbst als Gesundheit und Körper offensichtlich zusammenbrachen, blieb der Auftritt
        vor Publikum die eine Sache, die Elvis nicht aufgab – die Dreierflügel-Energie der
        SX2 in ihrer kompromisslosesten Form.</p>
        <p class="vb-intro"><strong>b) Medikamente als Mittel, die Bühne zu erreichen:</strong>
        Die verschriebenen Substanzen dienten offenbar zunehmend nicht der Genesung, sondern
        der bloßen Funktionsfähigkeit für den nächsten Auftritt – ein Kreislauf, der sich
        selbst verstärkte.</p>
        <p class="vb-intro"><strong>c) Das Kamel, das seine letzte Reserve für das Publikum aufbrauchte:</strong>
        Die Hingabe an die eine große Beziehung – an das Publikum als Ganzes – wurde bis zum
        Schluss aufrechterhalten, selbst als der Körper längst keine Reserven mehr besaß.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Jahrzehnt schleichender Eskalation:</strong>
        Von den ersten Verschreibungen 1967 bis zu seinem Tod 1977 zieht sich eine
        durchgehende, sich stetig verschärfende Linie durch Elvis' letztes Lebensjahrzehnt.</p>
        <p class="vb-intro"><strong>b) Auftreten statt Rückzug, bis zum Ende:</strong>
        Anders als bei Krankheitsporträts, in denen sich Betroffene zumindest zeitweise aus
        der Öffentlichkeit zurückzogen, tourte Elvis nahezu ununterbrochen weiter – ein
        Verhalten, das eher in Richtung des Stresspunkts der SX2, der Acht, verweist:
        trotziges Weitermachen trotz eindeutiger Warnsignale, statt Kontrolle abzugeben.</p>
        <p class="vb-intro"><strong>c) Sichtbarer Verfall, öffentlich kaum benannt:</strong>
        Der körperliche Zustand war für sein Umfeld unübersehbar, wurde aber lange nicht
        offen thematisiert – eine kollektive Verleugnung, die zum Fortbestehen des Musters
        beitrug.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Herz und Darm?</strong>
        Für eine sexuelle Zwei mit Dreierflügel, deren gesamte Identität an der einen
        großen, hingebungsvollen Verbindung zum Publikum hing, liegt eine Deutung nahe: Das
        Herz, Organ der Zuwendung und Hingabe, und der Darm, Organ der Verarbeitung dessen,
        was von außen aufgenommen wird, versagten gemeinsam – als hätte ein Leben, das
        ausschließlich auf das Geben an andere ausgerichtet war, irgendwann nichts mehr für
        sich selbst übrig gehabt, um zu verarbeiten oder zu verkraften. Diese Deutung ist
        eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Zwei zwangsläufig zu
        Medikamentenabhängigkeit oder Herz-Kreislauf-Erkrankungen führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Elvis' Fall zeigen lässt, ist ein Muster, das bei der kompromisslosen
        Priorisierung der Bühnenpräsenz über die eigenen körperlichen Warnsignale hinweg in
        der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Presley kannte sein eigenes Muster nicht – die sexuelle Zwei mit Dreierflügel lebt für die unmittelbare Verbindung mit dem Publikum, und genau dieser Antrieb hielt ihn auf Tournee, während sein Körper sichtbar zusammenbrach. Wer das eigene Bedürfnis nach Verbindung nicht als Muster erkennt, tauscht die eigene Gesundheit gegen den nächsten Applaus.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Elvis'</strong> sexueller Typ 2 mit Dreierflügel fand seine letzte,
        konsequenteste Ausprägung in der eigenen Erkrankung: eine über ein Jahrzehnt eskalierende
        Medikamentenabhängigkeit, ein Körper, der auf der Bühne bis zuletzt für ein
        Publikum funktionieren musste, und ein Tod 1977, dessen genaue Ursache bis heute
        diskutiert wird. Das Kamel, das seine letzte Kraft für die eine große Verbindung
        aufbrauchte, die es nie aufzugeben bereit war.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-elvis-presley", label:"Porträt: Elvis Presley (SX2w3) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx2", label:"Subtyp-Profil SX2"},
      ])}
    </div>
  `);
}

function oshoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-osho-portrait.jpg" alt="Osho" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Osho</p>
        <p class="krim-portrait-typ">SE3w4 · Selbsterhaltender Typ 3 mit Viererflügel · 1931–1990</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Osho</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-osho">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine
        Kette chronischer Beschwerden, eine zwölftägige Haft in den USA 1985 und eine bis
        heute ungeklärte Kontroverse um seinen Tod 1990.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Osho</strong> ist der <strong>selbsterhaltenden Drei mit Viererflügel</strong>
        zugeordnet. Die SE3 richtet den Erfolgsanspruch der Drei auf das eigene, konkrete
        Funktionieren und die materielle Absicherung des eigenen Umfelds. Der Viererflügel
        bringt eine ausgeprägte Neigung zur Dramatisierung und Bedeutungsaufladung des
        eigenen Erlebens hinzu – ein Muster, das sich deutlich in der Art zeigt, wie Osho sein
        eigenes Leiden öffentlich einordnete und deutete, statt es zu verschweigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Das eigene Leiden als öffentliche Erzählung:</strong>
        Anders als Betroffene, die ihre Erkrankung verschweigen, machte Osho seinen
        körperlichen Verfall selbst zum Thema seiner Diskurse – eine für die SE3w4 typische
        Verbindung aus Funktionsanspruch und dramatischer Sinnzuschreibung.</p>
        <p class="vb-intro"><strong>b) Funktionieren trotz chronischer Beschwerden:</strong>
        Über Jahre hinweg hielt Osho trotz Diabetes, Asthma und starker Rückenschmerzen ein
        intensives Vortrags- und Reisepensum aufrecht. Als er 1981 seinen indischen Ashram
        verließ und in die USA übersiedelte, wo bald darauf die Kommune Rajneeshpuram in
        Oregon entstand, wurde die Hoffnung auf bessere medizinische Versorgung explizit als
        einer der Gründe für diesen Schritt genannt.</p>
        <p class="vb-intro"><strong>c) Rückzug erst, als kein Funktionieren mehr möglich war:</strong>
        Erst ab 1988 verengten sich seine Diskurse zunehmend, im April 1989 hielt er seinen
        letzten öffentlichen Vortrag – ein später, fast widerstrebender Rückzug aus der
        aktiven Rolle.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Chronische Beschwerden seit den frühen 1970er-Jahren:</strong>
        Während seiner Zeit in Bombay entwickelten sich bei Osho Diabetes, Asthma und diverse
        Allergien, verstärkt durch das feuchte Klima – dazu kamen chronische
        Rückenschmerzen, Erschöpfung und Schlaflosigkeit.</p>
        <p class="vb-intro"><strong>b) Verhaftung im Oktober 1985:</strong>
        Im Zuge der Auflösung seiner Kommune Rajneeshpuram in Oregon wurde Osho am 28.
        Oktober 1985 in North Carolina festgenommen und über rund zwölf Tage durch mehrere
        Gefängnisse transportiert, bevor er gegen eine Kaution von 500.000 Dollar
        freikam und aus den USA ausgewiesen wurde.</p>
        <p class="vb-intro"><strong>c) Neue Symptome nach der Rückkehr nach Indien:</strong>
        Nach seiner Rückkehr Ende 1985 berichtete Osho über Appetitlosigkeit, Übelkeit und
        ein Gefühl der Erschöpfung, das er selbst und sein engstes Umfeld nicht mehr auf die
        früheren chronischen Beschwerden zurückführten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Vergiftungsthese:</strong>
        Oshos persönliche Ärzte und sein Umfeld vermuteten öffentlich eine
        Thallium-Vergiftung während der Haft, möglicherweise über eine bestrahlte Matratze.
        Unabhängige toxikologische Beweise dafür wurden nie vorgelegt; ein US-Anwalt
        bezeichnete die Behauptung als reine Fiktion.</p>
        <p class="vb-intro"><strong>b) Ein kontinuierlicher Verfall ohne unabhängig dokumentierte Diagnose:</strong>
        Zwischen 1987 und 1990 verschlechterte sich Oshos Gesundheitszustand nach
        übereinstimmenden Berichten seines Umfelds kontinuierlich – belastbare, unabhängige
        Arztberichte aus dieser Zeit sind öffentlich nicht zugänglich.</p>
        <p class="vb-intro"><strong>c) Rückzug auf das reine Zusammensein:</strong>
        Nach seinem letzten Diskurs im April 1989 saß Osho nur noch schweigend mit seinen
        Anhängern zusammen, ohne weitere Vorträge zu halten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 19. Januar 1990:</strong>
        Osho starb im Ashram in Pune, Indien, im Alter von 58 Jahren. Die Ärzte nannten
        Herzversagen als Todesursache.</p>
        <p class="vb-intro"><strong>b) Eine Todeserklärung, die die Vergiftungsthese aufgriff:</strong>
        Der Ashram selbst rahmte den Tod in seiner offiziellen Erklärung als Spätfolge der
        vermuteten Vergiftung – eine Deutung, die bis heute nicht unabhängig bestätigt ist.</p>
        <p class="vb-intro"><strong>c) Spätere, ebenfalls ungeklärte Gegenvorwürfe:</strong>
        Jahre später äußerten unter anderem der Journalist Abhay Vaidya und ein beteiligter
        Arzt den Verdacht, Osho sei in seinen letzten Stunden vom Kontakt zu unabhängigen
        Ärzten abgeschirmt worden – auch diese Vorwürfe blieben ohne forensische Klärung, es
        ist zudem nicht dokumentiert, ob überhaupt eine Autopsie stattfand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die eigene Krankheitsgeschichte als letztes großes Narrativ:</strong>
        Statt sein Leiden zu verbergen, verwandelte Osho es in eine öffentliche Erzählung von
        Verfolgung und Widerstand – eine für die SE3w4 charakteristische Verschmelzung von
        Selbstdarstellung und persönlichem Drama.</p>
        <p class="vb-intro"><strong>b) Funktionsfähigkeit bis zur letzten möglichen Grenze:</strong>
        Auch mit fortschreitendem Verfall hielt Osho so lange wie irgend möglich an seiner
        Rolle als Sprecher fest, bevor er sie erst 1989 endgültig aufgab.</p>
        <p class="vb-intro"><strong>c) Der Waschbär, der sein Revier bis zuletzt selbst gestaltete:</strong>
        Selbst die Deutung des eigenen körperlichen Verfalls blieb bis zum Tod Teil seines
        eigenen Narrativs – kein passives Erleiden, sondern eine aktiv mitgeprägte Erzählung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine chronische Vorgeschichte seit den frühen 1970ern:</strong>
        Diabetes, Asthma und Rückenschmerzen begleiteten Osho fast zwei Jahrzehnte, bevor sie
        1985 durch die Haft eine dramatische neue Wendung erhielten.</p>
        <p class="vb-intro"><strong>b) Ein Wendepunkt, dessen Ursache bis heute umstritten ist:</strong>
        Ob die Verschlechterung nach 1985 tatsächlich auf eine Vergiftung während der Haft
        zurückgeht oder eine Fortsetzung der bereits jahrzehntelangen chronischen Beschwerden
        war, lässt sich anhand der öffentlich zugänglichen Quellen nicht abschließend klären.</p>
        <p class="vb-intro"><strong>c) Ein Tod mit drei konkurrierenden Deutungen:</strong>
        Die offizielle Diagnose Herzversagen, die Vergiftungsdeutung des Ashrams und die
        späteren Vorwürfe der Isolation in den letzten Stunden stehen bis heute unversöhnt
        nebeneinander – keine davon ist forensisch bestätigt.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet eine Krankheitsgeschichte voller Deutungen?</strong>
        Für eine selbsterhaltende Drei mit Viererflügel, deren gesamtes Wirken auf der
        eigenen, bedeutungsvoll erzählten Geschichte beruhte, liegt eine Deutung nahe: Selbst
        der eigene körperliche Verfall wurde zu einem Text, der interpretiert, gedeutet und
        weitererzählt werden musste – eine Krankheit, die sich nie auf einen einzigen,
        nüchternen medizinischen Befund reduzieren ließ, sondern bis zuletzt Teil der großen
        Erzählung von Verfolgung und Bedeutung blieb. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei zwangsläufig zu
        chronischen Erkrankungen oder umstrittenen Todesumständen führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Oshos Fall zeigen lässt, ist ein Muster, das bei der Verschmelzung von
        persönlichem Leiden und öffentlicher Selbstdeutung in der Praxis immer wieder
        auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
Osho kannte das Enneagramm als Lehrsystem sehr genau und griff es in eigenen Vorträgen wiederholt auf – seine bekannte Kernaussage dazu lautete sinngemäß, das Enneagramm zeige die neun Krankheiten des Ego, doch die einzige Heilung dafür sei Meditation. Genau diese Haltung – die eigene Kategorie theoretisch zu kennen, die Landkarte für sich selbst aber für überwunden zu halten, weil man ›am Ziel‹ sei – kann die eigentliche Selbsterkenntnis eher erschweren als erleichtern, gerade bei jemandem mit ausgeprägtem Kultstatus. Ob Osho sein eigenes Muster in der Tiefe tatsächlich erkannte oder es eher nur ahnte, lässt sich nicht abschließend sagen; seine wiederkehrenden, nie ganz aufgeklärten körperlichen Beschwerden legen eher nahe, dass Wissen über ein System nicht automatisch mit echter Selbsterkenntnis gleichzusetzen ist – vor allem dann nicht, wenn das eigene spirituelle Ego mitspielt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Was <strong>Osho</strong> als selbsterhaltende Drei mit Viererflügel prägte, kehrt in
        seiner eigenen Krankengeschichte noch einmal wieder: chronische Beschwerden über Jahrzehnte, eine
        dramatische Zäsur durch Haft und behauptete Vergiftung, und ein Tod 1990, dessen
        Ursache bis heute zwischen drei konkurrierenden Erzählungen schwankt. Der Waschbär,
        der selbst im eigenen Verfall die Deutungshoheit über die eigene Geschichte nicht
        aus der Hand gab.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-osho", label:"Porträt: Osho (SE3w4) – Lebenswerk"},
        {route:"krankheitsportraets-bernie-madoff", label:"Krankheitsporträt: Bernie Madoff (SE3w4) – dieselbe Diskretion über den eigenen Körper"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se3", label:"Subtyp-Profil SE3"},
      ])}
    </div>
  `);
}

function marilynMonroeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-marilyn-monroe-portrait.jpg" alt="Marilyn Monroe" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marilyn Monroe</p>
        <p class="krim-portrait-typ">SX3w4 · Sexueller Typ 3 mit Viererflügel · 1926–1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Pfau</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Tierentsprechung: Pfau" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Marilyn Monroe</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-marilyn-monroe">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine
        jahrelang hinter dem makellosen Image verborgene Endometriose (eine chronische, oft
        sehr schmerzhafte Erkrankung, bei der sich gebärmutterschleimhautähnliches Gewebe
        außerhalb der Gebärmutter ansiedelt), eine eskalierende Schlafmittelabhängigkeit und
        ein Tod 1962, dessen genaue Umstände bis heute umstritten sind.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Monroe</strong> ist dem <strong>sexuellen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die SX3 richtet den Erfolgsanspruch der Drei auf unwiderstehliche
        Anziehungskraft und Faszination im engsten, intimsten Kreis – und lebt zugleich mit
        der tiefen Angst, hinter der Maske leer zu sein. Der Viererflügel bringt eine
        melancholische Tiefe hinzu, die Sehnsucht nach einem authentischen Selbst jenseits der
        Rolle – eine Spannung, die sich bis in Monroes verborgene Krankheitsgeschichte
        nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Schmerz, der hinter dem Image verschwinden musste:</strong>
        Monroes chronische Endometriose-Beschwerden durften das makellose öffentliche Bild
        nie stören – Verträge sollen sie sogar gezielt vor Arbeit während besonders
        schmerzhafter Phasen geschützt haben, ohne dass die Öffentlichkeit je davon erfuhr.</p>
        <p class="vb-intro"><strong>b) Die eigene Erschöpfung als etwas, das nicht sein durfte:</strong>
        Auch als Schlaflosigkeit und Medikamentenkonsum zunahmen, blieb der äußere Auftritt
        bis zuletzt makellos inszeniert – die Kluft zwischen innerem Zustand und öffentlichem
        Bild wuchs Jahr für Jahr.</p>
        <p class="vb-intro"><strong>c) Ein Rückzug, der erst spät sichtbar wurde:</strong>
        Erst 1962, bei den Dreharbeiten zu "Something's Got to Give", wurde der innere
        Zusammenbruch für Außenstehende unübersehbar – vorher war er hinter Professionalität
        und Selbstkontrolle verborgen geblieben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine chronische, nie öffentlich gemachte Erkrankung:</strong>
        Monroe litt ihr gesamtes Erwachsenenleben an Endometriose, wurde mehrfach operiert
        und erlitt mindestens drei dokumentierte Fehlgeburten, darunter eine
        Eileiterschwangerschaft 1957 – keine ihrer Schwangerschaften wurde ausgetragen.</p>
        <p class="vb-intro"><strong>b) Eskalierende Schlafmittelabhängigkeit:</strong>
        Bereits ab den frühen 1950er-Jahren dokumentiert, verschärfte sich der Konsum von
        Barbituraten und Chloralhydrat über die Jahre; ab 1960 verschrieb ihr Psychiater
        Ralph Greenson ihr regelmäßig Nembutal.</p>
        <p class="vb-intro"><strong>c) Eine belastete familiäre Vorgeschichte:</strong>
        Monroes Mutter litt an paranoider Schizophrenie, ihr Großvater mütterlicherseits
        starb an einer Spätfolge einer unbehandelten Syphilis-Infektion in einer Anstalt –
        Monroe selbst fürchtete zeitlebens, wie ein Fluch liege psychische Erkrankung über
        ihrer Familie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vier Tage in der geschlossenen Psychiatrie:</strong>
        Im Februar 1961 wurde Monroe von ihrer Analytikerin in die Payne Whitney Psychiatric
        Clinic eingewiesen, in der Annahme, dort eine "Ruhekur" zu erhalten. Stattdessen
        landete sie auf einer geschlossenen Station, die sie später mit einem Gefängnis
        verglich – nach vier Tagen wurde sie auf Betreiben von Joe DiMaggio entlassen.</p>
        <p class="vb-intro"><strong>b) Siebzehn versäumte Drehtage:</strong>
        Bei den Dreharbeiten zu "Something's Got to Give" 1962 fehlte Monroe an siebzehn von
        dreißig Drehtagen wegen Krankheit; die Produktion geriet über eine Million Dollar
        über Budget.</p>
        <p class="vb-intro"><strong>c) Entlassung durch das Studio:</strong>
        Am 8. Juni 1962 entließ 20th Century Fox sie wegen "spektakulärer Abwesenheit" und
        verklagte sie auf 750.000 Dollar – eine Wiedereinstellung für den Herbst wurde zwar
        noch ausgehandelt, kam durch ihren Tod aber nicht mehr zustande.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 4./5. August 1962:</strong>
        Monroe wurde tot in ihrem Haus in Brentwood aufgefunden. Die Autopsie stellte eine
        tödliche Kombination aus Nembutal und Chloralhydrat fest – eine Menge, die laut dem
        zuständigen Coroner ausgereicht hätte, um mehrere Menschen zu töten.</p>
        <p class="vb-intro"><strong>b) Eine offiziell bewusst vorsichtige Formulierung:</strong>
        Der Coroner stufte den Tod als "wahrscheinlichen Suizid" ein – nicht als
        zweifelsfreien Suizid. Diese eingebaute Unsicherheit ist Teil des offiziellen
        Befundes selbst, nicht nachträgliche Spekulation.</p>
        <p class="vb-intro"><strong>c) Bis heute unbewiesene Gegentheorien:</strong>
        Neben einer versehentlichen Überdosis und Suizid kursieren bis heute
        Mordtheorien, meist im Kontext angeblicher Affären mit John und Robert Kennedy –
        historiografisch gelten diese als unbewiesen und spekulativ, wurden aber nie
        vollständig widerlegt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Glanz als Überlebensstrategie bis zur Erschöpfung:</strong>
        Die strahlende, faszinierende Öffentlichkeitspersona verlangte Monroe ein Höchstmaß
        an Energie ab, während im Verborgenen Schmerz, Schlaflosigkeit und Medikamentenkonsum
        zunahmen.</p>
        <p class="vb-intro"><strong>b) Ein Rückzug, der wie Kontrollverlust aussah:</strong>
        Die zunehmenden Fehlzeiten am Set 1962 lassen sich auch als Bewegung Richtung des
        Neuner-Stresspunkts der Drei lesen: Rückzug, Verzögerung, ein passives Entgleiten
        statt eines offen ausgetragenen Zusammenbruchs.</p>
        <p class="vb-intro"><strong>c) Der Pfau, dessen Federn zuletzt kaum noch zu tragen waren:</strong>
        Bis zuletzt versuchte Monroe, die öffentliche Erwartung an Glanz und Perfektion zu
        erfüllen, selbst als die eigene Kraft dafür längst nicht mehr ausreichte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kindheit voller Brüche:</strong>
        Elf Pflegefamilien, zeitweise ein Waisenhausaufenthalt und sexueller Missbrauch in
        mindestens drei Pflegefamilien prägten Monroes frühe Jahre – eine Vorgeschichte, die
        sie selbst später mit ihrer psychischen Verletzlichkeit in Verbindung brachte.</p>
        <p class="vb-intro"><strong>b) Eine Krankheit, die zwei Jahrzehnte lang verborgen blieb:</strong>
        Von den ersten dokumentierten Beschwerden bis zu ihrem Tod 1962 zieht sich eine
        durchgehende, aber öffentlich fast vollständig unsichtbare Linie aus chronischem
        Schmerz und zunehmender Medikamentenabhängigkeit.</p>
        <p class="vb-intro"><strong>c) Ein letztes Jahr des offenen Zusammenbruchs:</strong>
        Erst 1962 – Klinikaufenthalt, versäumte Drehtage, Entlassung – wurde sichtbar, was
        zuvor jahrelang hinter der Fassade gehalten worden war.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die reproduktiven Organe?</strong>
        Für eine sexuelle Drei mit Viererflügel, deren öffentliches Image untrennbar mit
        Weiblichkeit, Begehrenswürdigkeit und makelloser Ausstrahlung verbunden war, liegt
        eine Deutung nahe: Ausgerechnet jener Körperbereich, der am unmittelbarsten mit dem
        vermarkteten Bild der Fruchtbarkeit und Verführung verknüpft war, wurde zum Ort
        chronischen, geheim gehaltenen Leidens. Der Schmerz, der am wenigsten zum Image
        passte, war genau der, den sie am längsten verbarg. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Drei zwangsläufig zu Endometriose
        oder Medikamentenabhängigkeit führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Monroes Fall zeigen lässt, ist
        ein Muster, das bei dem Bedürfnis, Schmerz und Verletzlichkeit hinter einem
        makellosen öffentlichen Bild zu verbergen, in der Praxis immer wieder auffällt –
        eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Monroe kannte ihr eigenes Muster nicht – die sexuelle Drei mit Viererflügel hält das makellose Bild um jeden Preis aufrecht, auch gegenüber sich selbst, und genau das ließ sie eine schmerzhafte Erkrankung jahrelang hinter genau diesem Bild verbergen, statt sich Hilfe zu holen, die die Fassade hätte gefährden können. Wer das eigene Bedürfnis nach einem makellosen Bild nicht als Muster erkennt, opfert diesem Bild am Ende die eigene Gesundheit.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Am Beispiel <strong>Monroes</strong> zeigt sich die sexuelle Drei mit Viererflügel
        noch einmal auf besonders schmerzhafte Weise: eine chronische Krankheit, jahrelang
        hinter makellosem Glanz verborgen, eine eskalierende Medikamentenabhängigkeit und ein
        Tod, dessen genaue Umstände bis heute nicht abschließend geklärt sind. Der Pfau,
        dessen Federn der Welt Schönheit zeigten, während dahinter ein erschöpfter,
        schmerzgeplagter Körper um Beachtung rang, die er sich selbst nie erlaubte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-marilyn-monroe", label:"Porträt: Marilyn Monroe (SX3w4) – Lebenswerk"},
        {route:"krankheitsportraets-dolly-parton", label:"Krankheitsporträt: Dolly Parton (SX3w4)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx3", label:"Subtyp-Profil SX3"},
      ])}
    </div>
  `);
}

function ladyDianaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-lady-diana-portrait.jpg" alt="Lady Diana" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Lady Diana</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel · 1961–1997</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Lady Diana</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-lady-diana">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine über
        Jahre verschwiegene Bulimie, die sie erst 1995 selbst öffentlich machte, verbunden mit
        Selbstverletzung und postnataler Depression.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Diana</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SE4 trägt ihr Leiden – anders als andere Vierer-Subtypen – nicht nach
        außen, sondern hält es still aus, während sie nach außen Stärke zeigt. Der Dreierflügel
        gibt ihr die Fähigkeit, das eigene Erleben in öffentliche Wirksamkeit zu verwandeln –
        genau diese Spannung zwischen verborgenem Leiden und makelloser öffentlicher Fassade
        prägt auch Dianas Krankheitsgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Beginn in der Verlobungswoche:</strong>
        Diana beschrieb später selbst, ihre Bulimie habe "in der Woche nach der Verlobung"
        mit Prinz Charles im Februar 1981 begonnen – ausgelöst unter anderem durch eine
        abwertende Bemerkung Charles' zu ihrer Taille sowie den Stress durch seine
        fortbestehende Beziehung zu Camilla Parker Bowles.</p>
        <p class="vb-intro"><strong>b) Ein Muster, das sie selbst als zerstörerisch erkannte:</strong>
        Im Panorama-Interview 1995 nannte Diana die Bulimie selbst "a repetitive pattern which
        is very destructive to yourself" (›ein sich wiederholendes Muster, das sehr
        zerstörerisch für einen selbst ist‹) – ein Kreislauf aus kurzzeitigem Trost und
        anschließendem Ekel, den sie über Jahre allein austrug.</p>
        <p class="vb-intro"><strong>c) Eine Fassade, die lange hielt:</strong>
        Nach außen blieb Diana über Jahre die makellos gestylte Prinzessin – während im
        Verborgenen ein Leiden verlief, von dem selbst ihr nächstes Umfeld lange nichts
        Genaues wusste.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Jahrelange Bulimie:</strong>
        Laut Dianas eigenen Schilderungen sowie Andrew Mortons Buch "Diana: Her True Story"
        (1992, für das sie heimlich Interviews gab) zog sich die akute Phase der Erkrankung
        über mehrere Jahre, mit ersten Therapieversuchen ab Ende der 1980er-Jahre.</p>
        <p class="vb-intro"><strong>b) Selbstverletzung als Hilferuf zur falschen Adresse:</strong>
        Diana beschrieb im Panorama-Interview auch Episoden von Selbstverletzung: "you have so
        much pain inside yourself that you try and hurt yourself on the outside because you
        want help, but it's the wrong help you're asking for." (›Man hat so viel Schmerz in
        sich, dass man versucht, sich selbst von außen zu verletzen, weil man Hilfe will – aber
        es ist die falsche Hilfe, um die man bittet.‹)</p>
        <p class="vb-intro"><strong>c) Postnatale Depression nach der Geburt Prinz Williams:</strong>
        Diana litt nach der Geburt ihres ersten Sohnes an postnataler Depression – ein
        Zustand, den ihr Umfeld laut ihrer eigenen Aussage als Instabilität deutete, statt ihn
        als das zu behandeln, was er war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Verharmlosung statt Fürsorge:</strong>
        Diana schilderte, aus dem Umfeld von Charles sei durchgeklungen, sie sei "again
        unstable and sick and should be put in a home of some sort ... I was almost an
        embarrassment" (›wieder instabil und krank und sollte irgendwo untergebracht werden
        ... ich war fast schon eine Peinlichkeit‹) – Pathologisierung statt Unterstützung.</p>
        <p class="vb-intro"><strong>b) 1992: die indirekte erste Öffnung:</strong>
        Mit Andrew Mortons Buch gelangten Bulimie, frühere Verzweiflungsmomente im Palast und
        Charles' Beziehung zu Camilla erstmals an die Öffentlichkeit – ohne dass Diana zu
        diesem Zeitpunkt offiziell als Quelle genannt wurde.</p>
        <p class="vb-intro"><strong>c) 1995: die eigene Stimme:</strong>
        Im BBC-Panorama-Interview mit Martin Bashir am 3. November 1995 sprach Diana erstmals
        selbst und direkt öffentlich über Bulimie, Selbstverletzung und die Ehe: "There were
        three of us in this marriage, so it was a bit crowded." (›Wir waren zu dritt in dieser
        Ehe, das war etwas eng.‹)</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein langer, nicht-linearer Weg aus der Krankheit:</strong>
        Ab Ende der 1980er-Jahre erhielt Diana Therapie; Rückfälle gehörten laut Berichten zu
        diesem Prozess dazu, bevor sich eine gewisse Stabilisierung einstellte.</p>
        <p class="vb-intro"><strong>b) Öffentliche Wirkung des Geständnisses:</strong>
        Das Panorama-Interview gilt bis heute als einer der Momente, die das öffentliche
        Sprechen über Essstörungen und psychische Erkrankungen in Großbritannien
        enttabuisierten – weit über den royalen Kontext hinaus.</p>
        <p class="vb-intro"><strong>c) Ein Kontext, der später selbst zum Thema wurde:</strong>
        2021 stellte der Dyson-Report fest, dass Martin Bashir das Interview durch gefälschte
        Dokumente erschlichen hatte – ein Umstand, der die Zustandekommen betrifft, nicht die
        inhaltliche Wahrhaftigkeit von Dianas eigenen Aussagen zu ihrer Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Zäh unter der Oberfläche:</strong>
        Genau die SE4-typische Zähigkeit, mit der Diana das Leiden jahrelang allein austrug,
        machte es zugleich so schwer erkennbar für ein Umfeld, das lieber wegsah.</p>
        <p class="vb-intro"><strong>b) Verschärfung durch Camilla:</strong>
        Diana beschrieb selbst, dass sich sowohl Bulimie als auch Selbstverletzung
        verstärkten, wenn Charles die Beziehung zu Camilla wieder aufnahm – das Leiden als
        direkte Reaktion auf wiederholte emotionale Zurückweisung.</p>
        <p class="vb-intro"><strong>c) Die Taube, die schließlich selbst sprach:</strong>
        Der Dreierflügel, der sonst Botschaften für andere trug, wandte sich 1995 der eigenen
        Geschichte zu – ein seltener Moment, in dem die öffentliche Bühne nicht der Imagepflege,
        sondern der eigenen Wahrheit diente.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Beginn im Moment größter Verunsicherung:</strong>
        Die Bulimie setzte laut Dianas eigener Schilderung genau in der Woche ein, in der sie
        in eine Welt aus Protokoll, Erwartung und einer Ehe mit einer dritten Person im
        Hintergrund eintrat.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre verborgene Erkrankung:</strong>
        Von 1981 bis zur ersten öffentlichen Andeutung 1992 und der direkten Aussage 1995
        zieht sich eine lange Linie aus stillem Leiden hinter der öffentlichen Fassade der
        Prinzessin.</p>
        <p class="vb-intro"><strong>c) Zwei Symptome, eine gemeinsame Wurzel:</strong>
        Bulimie und Selbstverletzung beschrieb Diana selbst als verwandte Ausdrucksformen
        desselben inneren Schmerzes – beide verstärkt durch dieselben Auslöser.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Essen und Körper?</strong>
        Für eine selbsterhaltende Vier, deren Instinkt auf das eigene Überleben und die
        eigene Stabilität gerichtet ist, liegt eine Deutung nahe: Ausgerechnet der Bereich, der
        am unmittelbarsten mit Selbstfürsorge und Selbsterhaltung verbunden ist, wurde zum Ort
        des Kontrollverlusts – während gleichzeitig, dank des Dreierflügels, öffentlich makellose
        Kontrolle demonstriert werden musste. Diese Deutung ist eine plausible Interpretation,
        kein belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu Bulimie
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Dianas Fall zeigen lässt, ist ein Muster, das bei dem Bedürfnis, inneres
        Leiden hinter äußerer Stabilität zu verbergen, in der Praxis immer wieder auffällt –
        eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Diana kannte ihr eigenes Muster nicht – die selbsterhaltende Vier mit Dreierflügel verbirgt inneren Schmerz hinter makelloser öffentlicher Erscheinung, und genau das ließ sie eine schwere Essstörung jahrelang verheimlichen, bevor sie sich 1995 selbst dazu bekannte. Wer das eigene Verbergungsmuster nicht kennt, trägt die Last allein, bis die Offenheit selbst zur befreienden Ausnahme wird.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Dianas</strong> Geschichte lässt sich die selbsterhaltende Vier mit
        Dreierflügel noch einmal in ihrer ganzen Zerrissenheit ablesen: ein über Jahre still
        ertragenes Leiden hinter makelloser öffentlicher Fassade, das erst spät und dann mit
        umso größerer Wirkung ausgesprochen wurde. Die Taube, die lange nur für andere
        Botschaften trug, bis sie 1995 begann, auch die eigene zu tragen. Diana starb 1997 bei
        einem Autounfall in Paris – ein Ereignis, das in keinem belegten Zusammenhang mit
        ihrer früheren Bulimie-Erkrankung steht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-lady-diana", label:"Porträt: Lady Diana (SE4w3) – Lebenswerk"},
        {route:"krankheitsportraets-adele", label:"Krankheitsporträt: Adele (SE4w3) – gleicher Subtyp"},
        {route:"krankheitsportraets-honore-de-balzac", label:"Krankheitsporträt: Honoré de Balzac (SE4w3) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

function freddieMercuryKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-freddie-mercury-portrait.jpg" alt="Freddie Mercury" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Freddie Mercury</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel · 1946–1991</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Freddie Mercury</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-freddie-mercury">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine fast
        fünf Jahre lang streng geheim gehaltene AIDS-Erkrankung, die er erst einen Tag vor
        seinem Tod 1991 selbst öffentlich bestätigte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Mercury</strong> ist dem <strong>sexuellen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SX4 verwandelt persönlichen Schmerz und Sehnsucht in Intensität, die
        andere unmittelbar berührt – auf der Bühne kompromisslos sichtbar. Der Dreierflügel
        bringt die Fähigkeit, dieses Innenleben in beeindruckende öffentliche Wirkung zu
        gießen. Genau diese Spannung zwischen radikaler Selbstoffenbarung auf der Bühne und
        einer ebenso radikal kontrollierten Privatsphäre prägt auch Mercurys
        Krankheitsgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Gerüchte, die er nie bestätigte:</strong>
        Ab Mitte der 1980er-Jahre kursierten in der Presse zunehmend Gerüchte über Mercurys
        Gesundheitszustand – er selbst äußerte sich dazu öffentlich nicht, weder bestätigend
        noch dementierend.</p>
        <p class="vb-intro"><strong>b) Eine Diagnose, die Privatsache blieb:</strong>
        Laut den Erinnerungen seines Partners Jim Hutton wurde Mercury im Frühjahr 1987 mit
        HIV diagnostiziert – eine Information, die er über Jahre auch engsten Vertrauten nur
        stückweise mitteilte.</p>
        <p class="vb-intro"><strong>c) Eine Bühnenpräsenz, die keinen Verfall zeigte:</strong>
        Bis zu seinem letzten öffentlichen Auftritt blieb die Diskrepanz zwischen der
        strahlenden Kunstfigur und dem zunehmend geschwächten Körper dahinter für die
        Öffentlichkeit kaum sichtbar.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine klare Ansage an die Band:</strong>
        Laut Roger Taylor rief Mercury die Band zu einem Treffen zusammen und sagte
        sinngemäß, sie würden wohl ahnen, was mit ihm los sei – aber es solle "nicht bekannt
        werden" und "keinen Unterschied machen"; er wolle einfach weiterarbeiten, "bis ich
        verdammt noch mal umfalle" (›until I fucking well drop‹), und bat um ihre
        Unterstützung dabei.</p>
        <p class="vb-intro"><strong>b) Weiterarbeiten trotz sichtbarer Schwäche:</strong>
        Bei den Aufnahmen zu "The Show Must Go On" konnte Mercury laut Brian May kaum noch
        stehen, bestand aber darauf zu singen: "He could hardly stand, but he said 'I'll
        fucking do it, darling!'" (›Er konnte kaum stehen, sagte aber: Ich mach das
        verdammt noch mal, Liebling!‹)</p>
        <p class="vb-intro"><strong>c) Ein Album, dessen Veröffentlichung sich verzögerte:</strong>
        "Innuendo", aufgenommen zwischen März 1989 und November 1990, verschob sich wegen
        seines Gesundheitszustands vom ursprünglich geplanten Termin Ende 1990 auf Februar
        1991.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein letztes Video in bewusstem Schwarz-Weiß:</strong>
        Für das am 30. Mai 1991 gedrehte Video zu "These Are the Days of Our Lives" wurde
        bewusst Schwarz-Weiß gewählt, um seinen sichtbaren körperlichen Verfall zu kaschieren
        – später aufgetauchtes Farbmaterial zeigte, wie geschwächt er tatsächlich war.</p>
        <p class="vb-intro"><strong>b) "I still love you" – letzte Worte auf Kamera:</strong>
        Mercury bewegte sich im Video kaum noch und trug die emotionale Wirkung fast
        ausschließlich über Mimik; sein geflüstertes "I still love you" am Ende gilt als
        seine letzten Worte vor laufender Kamera.</p>
        <p class="vb-intro"><strong>c) Eine Presseerklärung einen Tag vor dem Tod:</strong>
        Am 23. November 1991 bestätigte Mercury in einer kurzen Erklärung selbst: "I wish to
        confirm that I have been tested HIV-positive and have AIDS" (›Ich möchte bestätigen,
        dass bei mir HIV positiv getestet wurde und dass ich AIDS habe‹) – nach Jahren
        strikter Geheimhaltung erklärte er, die Zeit sei nun gekommen, dass Freunde und Fans
        weltweit die Wahrheit erfahren sollten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 24. November 1991:</strong>
        Mercury starb einen Tag nach seiner Presseerklärung an einer Bronchopneumonie als
        Folge von AIDS, in seinem Haus in London.</p>
        <p class="vb-intro"><strong>b) Sein Partner Jim Hutton an seiner Seite:</strong>
        Jim Hutton, seit sechs Jahren Mercurys Lebenspartner, war in seinen letzten Stunden
        bei ihm. Wenige Tage zuvor soll Mercury zu ihm gesagt haben: "I never realized you
        were as strong as you are" (›Ich habe nie gemerkt, wie stark du eigentlich bist‹).</p>
        <p class="vb-intro"><strong>c) Ein Konzert, das zum globalen Ereignis wurde:</strong>
        Das Freddie Mercury Tribute Concert am 20. April 1992 in Wembley war innerhalb von
        vier Stunden ausverkauft und erreichte laut Schätzungen bis zu einer Milliarde
        Zuschauer weltweit – die Erlöse begründeten den bis heute aktiven Mercury Phoenix
        Trust.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Vollständige Kontrolle über die eigene Erzählung:</strong>
        Genau die SX4w3-Fähigkeit, das eigene Bild bewusst zu gestalten, ermöglichte es
        Mercury, die Deutungshoheit über seine Krankheit bis zuletzt selbst zu behalten –
        statt sie der Presse zu überlassen.</p>
        <p class="vb-intro"><strong>b) Intensität statt Rückzug:</strong>
        Anders als ein offener Zusammenbruch zeigte sich Mercurys Reaktion auf die Krankheit
        als gesteigerte kreative Intensität – er nutzte die verbleibende Zeit, um so viel
        Musik wie möglich fertigzustellen, statt sich zurückzuziehen.</p>
        <p class="vb-intro"><strong>c) Der Chihuahua, der bis zuletzt nicht aufhörte zu bellen:</strong>
        Bis zum letzten möglichen Moment blieb die schöpferische Energie ungebrochen –
        selbst als der Körper längst nicht mehr mithalten konnte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Identität, die schon immer neu erschaffen wurde:</strong>
        Mercury, geboren als Farrokh Bulsara in Sansibar, hatte sich zeitlebens neu erfunden
        – auch gegenüber seinen Eltern verschwieg er sowohl seine Homosexualität als auch
        später seine Erkrankung vollständig.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre verborgene Krankheit:</strong>
        Von den ersten Gerüchten Mitte der 1980er über die Diagnose 1987 bis zur
        Presseerklärung 1991 zieht sich eine durchgehende, aber öffentlich fast vollständig
        kontrollierte Linie – nichts wurde ihm entrissen, alles wurde von ihm selbst
        freigegeben.</p>
        <p class="vb-intro"><strong>c) Ein letztes Jahr zwischen Verfall und Schaffenskraft:</strong>
        Gerade 1990/91 – körperlich sichtbar geschwächt – entstanden einige der
        eindringlichsten Aufnahmen seiner Karriere, darunter "The Show Must Go On" und "These
        Are the Days of Our Lives".</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Immunsystem?</strong>
        Für eine sexuelle Vier mit Dreierflügel, deren Identität sich über schonungslose
        Selbstoffenbarung auf der Bühne bei gleichzeitiger strikter Kontrolle der eigenen
        Privatsphäre definierte, liegt eine Deutung nahe: Ausgerechnet jenes System, das
        zwischen dem eigenen Selbst und der Außenwelt unterscheidet und schützt, wurde zum
        Ort des Zusammenbruchs – während die öffentliche Kontrolle über das eigene Bild bis
        zuletzt aufrechterhalten wurde. Diese Deutung ist eine plausible Interpretation,
        kein belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier zwangsläufig zu AIDS oder anderen
        Immunerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Mercurys Fall zeigen lässt, ist ein
        Muster, das bei dem Bedürfnis, radikale Selbstoffenbarung und strikte
        Privatsphäre-Kontrolle gleichzeitig zu leben, in der Praxis immer wieder auffällt –
        eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Mercury kannte sein eigenes Muster nicht – die sexuelle Vier mit Dreierflügel verbirgt die eigene Verletzlichkeit hinter makelloser Bühnenleistung, und genau das ließ ihn seine Diagnose fast fünf Jahre lang geheim halten, während er bis zur völligen Erschöpfung weiterarbeitete. Wer das eigene Verbergungsmuster nicht kennt, hält die Fassade aufrecht, bis buchstäblich keine Kraft mehr bleibt, sie zu halten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Mercurys</strong> Geschichte offenbart sich die sexuelle Vier mit
        Dreierflügel noch einmal mit voller Wucht: eine Krankheit, über Jahre mit
        eiserner Selbstkontrolle verborgen, ein Körper, der zusehends versagte, während die
        Schaffenskraft bis zuletzt ungebrochen blieb, und ein letztes öffentliches Wort, das
        er sich selbst aussuchte, statt es sich nehmen zu lassen. Der Chihuahua, der bis zum
        letzten Atemzug seine eigene Erzählung bestimmte – und dessen Vermächtnis, der
        Mercury Phoenix Trust, bis heute weiterwirkt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-freddie-mercury", label:"Porträt: Freddie Mercury (SX4w3) – Lebenswerk"},
        {route:"krankheitsportraets-billie-eilish", label:"Krankheitsporträt: Billie Eilish (SX4w3) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

function albertEinsteinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-albert-einstein-portrait.jpg" alt="Albert Einstein" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Albert Einstein</p>
        <p class="krim-portrait-typ">SO5w4 · Sozialer Typ 5 mit Viererflügel · 1879–1955</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Albert Einstein</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-albert-einstein">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: ein
        über sechseinhalb Jahre bekanntes, nur notdürftig stabilisiertes
        Bauchaortenaneurysma und die bewusste Entscheidung, es 1955 nicht mehr operieren zu
        lassen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Einstein</strong> ist dem <strong>sozialen Typ 5 mit Viererflügel</strong>
        zugeordnet. Die SO5 sucht Sicherheit über Wissen und intellektuelle Autorität
        innerhalb einer Gemeinschaft von Gleichgesinnten, nicht über emotionale Nähe. Der
        Viererflügel bringt eine melancholische, existenzielle Tiefe hinzu – eine Nähe zu den
        großen Fragen von Sinn, Endlichkeit und Bedeutung. Genau diese Kombination aus
        distanzierter Rationalität und existenzieller Tiefe prägt auch Einsteins Umgang mit
        seiner eigenen Sterblichkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Zufallsfund bei einer Untersuchung:</strong>
        Im Dezember 1948 suchte Einstein wegen wiederkehrender Bauchschmerzen den
        Thoraxchirurgen Dr. Rudolph Nissen auf, der bei einer explorativen Operation (ein
        chirurgischer Eingriff zur Ursachenklärung, ohne dass vorab feststand, was er finden
        würde) ein großes Bauchaortenaneurysma entdeckte (eine krankhafte Aussackung der
        Hauptschlagader, die jederzeit reißen kann).</p>
        <p class="vb-intro"><strong>b) Eine Notlösung statt Heilung:</strong>
        Da Aortentransplantate damals noch nicht existierten, umwickelte Nissen das
        Aneurysma mit Cellophan – eine Fremdkörperreaktion sollte die Aortenwand fibrotisch
        verdicken und so vorübergehend stabilisieren. Eine echte Heilung war das nicht.</p>
        <p class="vb-intro"><strong>c) Ein Wissen, das den Alltag kaum veränderte:</strong>
        In den folgenden Jahren arbeitete Einstein nach außen sichtbar unvermindert weiter –
        über einen bewussten Umgang mit dem Risiko im Alltag ist wenig überliefert, was zur
        SO5-typischen Trennung von Wissen und emotionaler Verarbeitung passt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Sechseinhalb Jahre mit einer bekannten Zeitbombe:</strong>
        Von der Diagnose im Dezember 1948 bis zu seinem Tod im April 1955 lebte Einstein mit
        einem Aneurysma, das jederzeit reißen konnte – palliativ stabilisiert, aber nie
        kurativ behandelt.</p>
        <p class="vb-intro"><strong>b) Ein akuter Zusammenbruch im April 1955:</strong>
        Am 12. April 1955 erlitt Einstein erneut Bauchschmerzen; Dr. Frank Glenn, Chefchirurg
        am New York Hospital, diagnostizierte ein undichtes Aneurysma und empfahl eine
        Resektion – eine damals neue, riskante Operationstechnik.</p>
        <p class="vb-intro"><strong>c) Eine bewusste Ablehnung der Operation:</strong>
        Einstein lehnte den Eingriff ab. So ist überliefert: "I want to go when I want. It is
        tasteless to prolong life artificially. I have done my share, it is time to go. I
        will do it elegantly." (›Ich will gehen, wenn ich will. Es ist geschmacklos, das
        Leben künstlich zu verlängern. Ich habe meinen Teil getan, es ist Zeit zu gehen. Ich
        werde es mit Würde tun.‹)</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Eine unvollendete Rede neben dem Krankenbett:</strong>
        Im Princeton Hospital hatte Einstein einen unfertigen Entwurf einer Fernsehansprache
        zum siebten Jahrestag des Staates Israel bei sich – Arbeit, die er bis zuletzt nicht
        aufgab.</p>
        <p class="vb-intro"><strong>b) Gleichungen bis zur letzten Nacht:</strong>
        Nach seinem Tod fand das Pflegepersonal neun Seiten handschriftlicher Notizen mit
        Gleichungen zur einheitlichen Feldtheorie, mit Bleistift auf gelbem Papier
        geschrieben – seine letzte, nie abgeschlossene wissenschaftliche Suche.</p>
        <p class="vb-intro"><strong>c) Kein Abschied, keine große Geste:</strong>
        Einstein bereitete sich auf seinen Tod nicht mit Reden an Angehörige vor, sondern
        arbeitete weiter, als sei nichts anders als sonst – für die SO5 typisch: Rückzug in
        die Sache statt in die Emotion.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 18. April 1955:</strong>
        Einstein starb im Princeton Hospital an einer inneren Blutung durch die Ruptur des
        Aneurysmas, im Alter von 76 Jahren.</p>
        <p class="vb-intro"><strong>b) Eine Entscheidung, die bis heute diskutiert wird:</strong>
        Die Ablehnung der Operation gilt bis heute als eines der bekanntesten Beispiele für
        eine bewusste, selbstbestimmte Haltung zum eigenen Lebensende in der
        Wissenschaftsgeschichte.</p>
        <p class="vb-intro"><strong>c) Ein Nachleben, das er nicht kontrollieren konnte:</strong>
        Der Pathologe Thomas Harvey entnahm bei der Autopsie ohne Erlaubnis der Familie
        Einsteins Gehirn, in der Hoffnung, spätere Forschung könne daraus seine Intelligenz
        erklären – eine Kontroverse, die bis heute nachwirkt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle durch Wissen statt durch Handeln:</strong>
        Die SO5-typische Strategie, Sicherheit über Verstehen statt über Eingreifen zu
        gewinnen, zeigte sich bis zuletzt: Einstein analysierte seine Lage nüchtern und traf
        eine informierte Entscheidung, statt sich dem medizinischen System auszuliefern.</p>
        <p class="vb-intro"><strong>b) Rückzug in die Arbeit statt in die Angst:</strong>
        Statt sich mit der Endlichkeit emotional auseinanderzusetzen, vertiefte er sich bis
        zum letzten bewussten Moment in Gleichungen und Texte – die vertraute Zuflucht in
        die Sache.</p>
        <p class="vb-intro"><strong>c) Der Oktopus, der die Tinte selbst wählte:</strong>
        Wo andere sich dem Zufall oder dem medizinischen Eingriff überlassen hätten, behielt
        Einstein bis zuletzt die Deutungshoheit über den eigenen Tod – eine letzte Form von
        Autonomie.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leben der distanzierten Beobachtung:</strong>
        Schon lange vor der Diagnose war Einstein für seine Fähigkeit bekannt, selbst die
        größten menschlichen Umbrüche – zwei Weltkriege, Emigration, öffentlicher Ruhm – mit
        bemerkenswerter innerer Distanz zu betrachten.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre bekannte, aber nie verdrängte Bedrohung:</strong>
        Von der Diagnose 1948 bis zum Tod 1955 zieht sich eine durchgehende Linie aus Wissen
        um die eigene Sterblichkeit, die weder verheimlicht noch dramatisiert wurde – sie
        wurde schlicht zur Kenntnis genommen.</p>
        <p class="vb-intro"><strong>c) Ein letztes Jahr wie jedes andere:</strong>
        Bis zum akuten Zusammenbruch im April 1955 unterschied sich sein Alltag nach außen
        kaum von den Jahren zuvor – Arbeit, Korrespondenz, Forschung, ohne sichtbare
        Dramatisierung der eigenen Lage.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Aorta?</strong>
        Für eine soziale Fünf mit Viererflügel, deren Sicherheit über rationale Distanz und
        intellektuelle Kontrolle entsteht, liegt eine Deutung nahe: Ausgerechnet jenes Gefäß,
        das den gesamten Organismus mit Leben versorgt und dessen Versagen keine Warnung
        gibt, wurde zum Ort einer Bedrohung, die sich der Kontrolle entzog – während Einstein
        genau darauf mit der einzigen ihm verbliebenen Form von Kontrolle reagierte: der
        bewussten Entscheidung, sie nicht zu bekämpfen. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu Gefäßerkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Einsteins Fall zeigen lässt, ist ein Muster, das bei dem
        Bedürfnis, existenzielle Bedrohung über rationale Distanz statt über emotionale
        Bewältigung zu verarbeiten, in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Einstein kannte sein eigenes Muster nicht – die soziale Fünf mit Viererflügel bestimmt lieber selbst über die eigenen Bedingungen, als sich fremder Kontrolle zu unterwerfen, und genau das zeigte sich in seiner bewussten Ablehnung einer erneuten Operation. Wer die eigene Autonomiebedürftigkeit nicht als Muster erkennt, verwechselt sie leicht mit reiner Vernunft, obwohl auch die eigene Fixierung mitentscheidet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Einsteins</strong> letzten Jahren lässt sich die soziale Fünf mit
        Viererflügel noch einmal in aller Klarheit ablesen: eine über Jahre bekannte, nie
        verdrängte Bedrohung, eine nüchterne, informierte Entscheidung gegen den Eingriff, und
        eine Arbeit an den großen Fragen des Universums, die bis zur letzten Nacht nicht
        endete. Der Oktopus, der die Tinte selbst wählte – und der noch im Sterben nach der
        einen Formel suchte, die alles erklären würde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-albert-einstein", label:"Porträt: Albert Einstein (SO5w4) – Lebenswerk"},
        {route:"krankheitsportraets-leonardo-da-vinci", label:"Krankheitsporträt: Leonardo da Vinci (SO5w4) – dasselbe Muster ungebremsten Schaffens"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

function robertSchumannKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-robert-schumann-portrait.jpg" alt="Robert Schumann" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robert Schumann</p>
        <p class="krim-portrait-typ">SX7w8 · Sexueller Typ 7 mit Achterflügel · 1810–1856</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Robert Schumann</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-robert-schumann">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein kompositorisches Lebenswerk und seine
        Typstruktur im Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort nur
        gestreift wird: eine psychische Erkrankung, die sich über sein gesamtes Erwachsenenleben
        zog und ihn 1854 in den Rhein und in eine Heilanstalt führte, in der er 1856 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schumann</strong> ist der <strong>sexuellen Sieben mit Achterflügel</strong>
        zugeordnet. Die SX7 sucht die volle, ungebremste Hingabe an das, was sie begeistert –
        an eine Komposition, eine Idee, einen Menschen. Der Achterflügel gibt dieser Hingabe
        Kampfkraft und Durchsetzungswillen: Wo eine reine Sieben ausweicht, bleibt die SX7w8 und
        kämpft. Genau diese Intensität, die sein Leben lang schöpferisch trug, wandte sich in
        seinen letzten Jahren gegen ihn selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein ständiger Ton im Ohr:</strong>
        Schumann berichtete bereits in jungen Jahren von einem beständigen, hohen Ton, den er
        innerlich hörte – eine Art chronischer Tinnitus, der ihn zeitlebens begleitete und den
        er selbst als frühes Anzeichen seiner nervlichen Anfälligkeit deutete.</p>
        <p class="vb-intro"><strong>b) Die erste schwere Krise 1833:</strong>
        Nach dem Tod seines Bruders Julius und seiner Schwägerin erlitt der 23-jährige Schumann
        einen schweren Nervenzusammenbruch mit Todesangst und der wiederkehrenden Furcht, den
        Verstand zu verlieren – Jahrzehnte bevor die Krankheit ihn endgültig einholte.</p>
        <p class="vb-intro"><strong>c) Die Hand, die nicht mehr gehorchte:</strong>
        Um 1832 verlor Schumann durch eine bis heute nicht zweifelsfrei geklärte Verletzung der
        rechten Hand die Fähigkeit, als Konzertpianist aufzutreten. Ob eine mechanische
        Übungsapparatur, eine Nervenschädigung oder eine Nebenwirkung damaliger
        Quecksilberbehandlungen die Ursache war, bleibt bis heute Gegenstand medizinhistorischer
        Debatten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Extreme Wechsel zwischen Hochform und Erschöpfung:</strong>
        Schumanns produktivste Phasen – etwa das "Liederjahr" 1840 mit über 140 Kompositionen –
        wechselten sich mit Phasen tiefer Erschöpfung und Schwermut ab, ein Muster, das
        Musikhistoriker retrospektiv häufig als Hinweis auf eine bipolare Störung deuten.</p>
        <p class="vb-intro"><strong>b) Die Doppelfigur als frühe Selbstdiagnose:</strong>
        Schon in seinen Zwanzigern spaltete Schumann seine Persönlichkeit literarisch in den
        stürmischen Florestan und den träumerischen Eusebius auf – eine Selbstbeobachtung, die
        rückblickend wie eine intuitive Beschreibung der eigenen Stimmungsextreme wirkt, lange
        bevor die Psychiatrie über entsprechende Diagnosekategorien verfügte.</p>
        <p class="vb-intro"><strong>c) Eine bis heute umstrittene Ursachenfrage:</strong>
        Neben der bipolaren Störung diskutiert die medizinhistorische Forschung auch eine
        mögliche Spätfolge einer Syphilis-Infektion als Mitursache seines geistigen Verfalls –
        eine These, die durch Schumanns eigene Tagebucheinträge über frühere Behandlungen
        gestützt, aber nie abschließend bewiesen wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Stimmen, die Musik diktierten:</strong>
        Im Februar 1854 berichtete Schumann, eine engelsgleiche Stimme habe ihm ein musikalisches
        Thema vorgesungen, das er sofort niederschrieb – wenige Tage später verwandelte sich
        dieselbe Stimme in seiner Wahrnehmung in eine dämonische, quälende Erscheinung.</p>
        <p class="vb-intro"><strong>b) Der Sprung in den Rhein:</strong>
        Am 27. Februar 1854 verließ Schumann in einem Anfall völliger Verzweiflung sein Haus in
        Düsseldorf, im Nachthemd, und sprang von der Rheinbrücke in den eisigen Fluss. Fischer
        zogen ihn heraus, kaum am Leben.</p>
        <p class="vb-intro"><strong>c) Die eigene Bitte um Einweisung:</strong>
        Kurz nach dem Selbstmordversuch bat Schumann selbst darum, in eine Heilanstalt gebracht
        zu werden – ein Akt, der noch einen letzten Rest bewusster Selbstkontrolle über eine
        Situation zeigt, die für ihn längst außer Kontrolle geraten war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Zwei Jahre in der Anstalt bei Bonn:</strong>
        Schumann verbrachte die letzten gut zwei Jahre seines Lebens in der privaten
        Heilanstalt des Dr. Franz Richarz in Endenich bei Bonn – weitgehend isoliert von seiner
        Frau Clara, der die Ärzte lange Zeit jeden Besuch untersagten, aus Sorge, ein
        Wiedersehen könnte seinen Zustand weiter verschlechtern.</p>
        <p class="vb-intro"><strong>b) Der junge Brahms als einzige Konstante:</strong>
        Während Clara ferngehalten wurde, besuchte der 20-jährige Johannes Brahms (SE9w8), den Schumann
        wenige Monate zuvor als kommenden Meister gefeiert hatte, ihn regelmäßig in Endenich und
        wurde in dieser Zeit zur engsten Stütze der gesamten Familie.</p>
        <p class="vb-intro"><strong>c) Ein Wiedersehen erst kurz vor dem Tod:</strong>
        Erst als sein Zustand unumkehrbar erschien, erlaubten die Ärzte Clara im Juli 1856
        endlich den Zugang zu ihrem Mann – zwei Tage vor seinem Tod, nach mehr als zwei Jahren
        erzwungener Trennung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Intensität, die sich gegen sich selbst wandte:</strong>
        Dieselbe schrankenlose Hingabefähigkeit, die Schumanns kreative Schübe trug – ganze
        Jahre, die ausschließlich einem einzigen Genre gewidmet waren –, richtete sich in der
        Krise mit derselben Wucht gegen ihn selbst: keine gebremste Traurigkeit, sondern ein
        Sog ohne erkennbaren Boden.</p>
        <p class="vb-intro"><strong>b) Kampf bis zur Erschöpfung:</strong>
        Der Achterflügel, der Schumann Jahre zuvor half, gegen den erklärten Willen seines
        Lehrers Friedrich Wieck um die Heirat mit Clara zu kämpfen, zeigte sich auch in der
        Krankheit als Widerstandskraft, die sich nicht kampflos ergab – bis zum offenen
        Selbstmordversuch reichte diese Gegenwehr, dann kippte sie in die Erschöpfung.</p>
        <p class="vb-intro"><strong>c) Musik bis zuletzt als Ausdrucksform:</strong>
        Auch in Endenich componierte und notierte Schumann zeitweise noch, wenn auch in
        deutlich reduziertem Umfang – die Fähigkeit, innere Zustände unmittelbar in Musik zu
        übersetzen, verließ ihn selbst in der schwersten Phase nicht vollständig.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit ohne gesicherte Diagnose:</strong>
        Bis heute ist unklar, ob Schumann an einer bipolaren Störung, einer schizoaffektiven
        Erkrankung oder den neurologischen Spätfolgen einer Syphilis-Infektion litt – die
        Symptome, die in den Krankenakten von Endenich dokumentiert sind, lassen mehrere
        Deutungen zu, keine gilt als abschließend bewiesen.</p>
        <p class="vb-intro"><strong>b) Die Stresslinie zur Eins:</strong>
        Unter dem chronischen Druck seiner Krankheit rückte Schumann zunehmend entlang seiner
        Stresslinie in Richtung des Einser-Punkts der Sieben: Statt der spielerischen Leichtigkeit
        früherer Jahre zeigte er in den letzten Lebensjahren eine fast zwanghafte
        Selbstverurteilung, die eigene Unzulänglichkeit als moralisches Versagen zu deuten –
        typische Einser-Muster, ohne dass sich sein Kerntyp dadurch änderte.</p>
        <p class="vb-intro"><strong>c) Ein Sog, dem der Achterflügel nicht mehr standhielt:</strong>
        Die Intensität, die Schumann Zeit seines Lebens trug – im Komponieren, im Kampf um
        Clara, in der Begeisterung für Brahms –, kannte keine eingebaute Bremse. Wenn sich diese
        Intensität nach innen richtete, fehlte offenbar der Mechanismus, der sie hätte
        auffangen können.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu psychischer
        Erkrankung führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Schumanns Fall zeigen lässt, ist ein Muster, das bei
        ungebremster, grenzenloser Hingabefähigkeit in der Praxis immer wieder auffällt – eine
        von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Schumann kannte sein eigenes Muster nicht – die sexuelle Sieben mit Achterflügel sucht Intensität ohne Grenzen, bis keine Reserve mehr bleibt, und genau das trieb ihn in einen Zustand völliger Verzweiflung, aus dem er selbst um Einweisung in eine Heilanstalt bat. Wer das eigene Bedürfnis nach grenzenloser Intensität nicht als Muster erkennt, merkt erst am Punkt des völligen Zusammenbruchs, dass eine Grenze nötig gewesen wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Schumanns</strong> letzten Jahren lässt sich die sexuelle Sieben mit
        Achterflügel in ihrer verletzlichsten Form ablesen: eine Hingabefähigkeit ohne Bremse,
        die sein Leben lang schöpferisch trug und sich am Ende gegen ihn selbst wandte, ein
        letzter, verzweifelter Kampf im eisigen Rhein, und zwei Jahre erzwungener Trennung von
        der Frau, für die er einst gegen die ganze Welt gekämpft hatte. Der Schimpanse, der bis
        zuletzt um Verbindung rang – und sie erst zwei Tage vor seinem Tod noch einmal fand.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-robert-schumann", label:"Porträt: Robert Schumann (SX7w8) – Lebenswerk"},
        {route:"beruehmte-johannes-brahms", label:"Porträt: Johannes Brahms (SE9w8) – von Schumann entdeckt, besuchte ihn regelmäßig in Endenich"},
        {route:"beruehmte-franz-liszt", label:"Porträt: Franz Liszt (SX7w8)"},
        {route:"krankheitsportraets-franz-liszt", label:"Krankheitsporträt: Franz Liszt (SX7w8) – dieselbe Unfähigkeit, kürzerzutreten"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

function franzLisztKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-franz-liszt-portrait.jpg" alt="Franz Liszt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Franz Liszt</p>
        <p class="krim-portrait-typ">SX7w8 · Sexueller Typ 7 mit Achterflügel · 1811–1886</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Franz Liszt</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-franz-liszt">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Klaviervirtuose und
        Komponist und seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das
        dort kurz thematisiert wird: Herzschwäche, Wassersucht und fortschreitende Erblindung in
        seinen letzten Lebensjahren, die ihn nicht zum Innehalten brachten, sondern bis nach
        Bayreuth trieben, wo er 1886 an einer Lungenentzündung starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Liszt</strong> ist dem <strong>sexuellen Typ 7 mit Achterflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Suggestibilität</em>: die vollständige
        Hingabe an das, was begeistert, ohne Vorbehalt oder Bremse. Der Achterflügel bringt die
        Bereitschaft zum offenen Kampf statt zum Ausweichen hinzu. Genau diese Maßlosigkeit –
        die Leidenschaft der Sieben – bestimmte auch, wie Liszt mit seiner eigenen,
        fortschreitenden Krankheit umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Fortschreitende Herzschwäche und Wassersucht ab den 1870er-Jahren:</strong>
        Schon Jahre vor seinem Tod litt Liszt zunehmend an Herzbeschwerden und Ödemen
        („Wassersucht"), die seine körperliche Belastbarkeit spürbar einschränkten.</p>
        <p class="vb-intro"><strong>b) Fortschreitende Erblindung eines Auges:</strong>
        Grauer Star ließ Liszts Sehkraft auf einem Auge in seinen letzten Lebensjahren
        zunehmend nachlassen – für einen Pianisten und Dirigenten eine erhebliche
        Beeinträchtigung, die er kaum thematisierte.</p>
        <p class="vb-intro"><strong>c) Unverändertes Reisepensum trotz der Beschwerden:</strong>
        Trotz seiner gesundheitlichen Probleme hielt Liszt an seiner „vie trifurquée" fest –
        einem Leben, das er beharrlich zwischen Weimar, Rom und Budapest aufteilte, mit
        ständigem Unterrichten, Reisen und öffentlichen Auftritten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Kein Rückzug vom Unterrichten und Reisen:</strong>
        Liszt unterrichtete bis in seine letzten Lebensjahre Hunderte Schüler und reiste
        weiterhin unermüdlich zwischen seinen drei Wohnorten – eine Lebensweise, die er trotz
        nachlassender Kräfte nicht einschränkte.</p>
        <p class="vb-intro"><strong>b) Zunehmender Alkoholkonsum in den letzten Lebensjahren:</strong>
        Zeitgenossen berichteten besorgt von einem wachsenden Cognac-Konsum, der mit
        depressiven Verstimmungen und den zahlreichen persönlichen Verlusten seiner späten
        Jahre in Verbindung gebracht wurde.</p>
        <p class="vb-intro"><strong>c) Depressive Phasen nach schweren persönlichen Verlusten:</strong>
        Der frühe Tod seines Sohnes Daniel 1859 und seiner Tochter Blandine 1862 hinterließ
        tiefe Spuren, die sich in den letzten Lebensjahren zunehmend mit den körperlichen
        Beschwerden vermischten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Reise nach Bayreuth im Juli 1886:</strong>
        Trotz sich rapide verschlechternder Gesundheit reiste der bereits schwer kranke Liszt
        zu den von seinem Schwiegersohn Richard Wagner begründeten Festspielen, um seine
        Tochter Cosima zu unterstützen.</p>
        <p class="vb-intro"><strong>b) Teilnahme an einer Aufführung trotz Fieber:</strong>
        Bereits mit einer schweren Erkältung und Fieber geschwächt, bestand Liszt darauf, eine
        Aufführung von „Tristan und Isolde" zu besuchen – gegen den ausdrücklichen Rat der
        behandelnden Ärzte, die ihm strikte Bettruhe verordnet hatten.</p>
        <p class="vb-intro"><strong>c) Tod am 31. Juli 1886 in Bayreuth:</strong>
        Franz Liszt starb im Alter von 74 Jahren an einer Lungenentzündung, mitten im Zentrum
        jener Festspiele, die untrennbar mit seinem eigenen musikalischen Erbe verbunden waren.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: Robert Schumann</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch <a href="javascript:void(0)" data-route="beruehmte-robert-schumann">Robert
        Schumann</a> (SX7w8) kannte diese Unfähigkeit, eine Intensität rechtzeitig zu bremsen –
        bei ihm eskalierte sie in den Sprung in den Rhein 1854. Sein
        <a href="javascript:void(0)" data-route="krankheitsportraets-robert-schumann">eigenes
        Krankheitsporträt</a> zeigt dasselbe SX7w8-Muster wie bei Liszt: eine Hingabefähigkeit
        ohne eingebaute Bremse, die sich, wenn sie an eine Grenze stößt, nicht in Rückzug,
        sondern in eine weitere Zuspitzung entlädt – bei Liszt die Reise nach Bayreuth trotz
        schwerer Krankheit, bei Schumann der verzweifelte Sprung ins eiskalte Wasser.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod mitten im eigenen Vermächtnis:</strong>
        Dass Liszt ausgerechnet bei den Bayreuther Festspielen starb, die ohne seine
        Unterstützung Wagners und seine familiäre Verbindung zu Cosima kaum in dieser Form
        existiert hätten, wirkt wie eine bittere Pointe seines Lebens.</p>
        <p class="vb-intro"><strong>b) Ein Ende, das lange unterschätzt wurde:</strong>
        Weil Liszt seine Beschwerden über Jahre kaum öffentlich thematisierte und weiterhin
        unterrichtete und reiste, wurde der Ernst seines Zustands von seinem Umfeld erst in den
        letzten Wochen wirklich erkannt.</p>
        <p class="vb-intro"><strong>c) Eine letzte, kompromisslose Geste:</strong>
        Die Teilnahme an der Aufführung trotz Fieber und ärztlichem Verbot wurde im Nachhinein
        oft als letzte, typische Geste eines Mannes gedeutet, der sich nie von äußeren Grenzen
        hatte einschränken lassen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Schimpanse, der bis zuletzt nicht kürzertrat:</strong>
        Dieselbe unerschöpfliche Begeisterungsfähigkeit, die Liszt jahrzehntelang durch ganz
        Europa trieb, ließ ihn auch angesichts massiver gesundheitlicher Warnsignale nicht
        innehalten.</p>
        <p class="vb-intro"><strong>b) Ärztlicher Rat gegen den eigenen Antrieb:</strong>
        Die Weigerung, dem Rat seiner Ärzte zu folgen und die Aufführung auszulassen, zeigt
        denselben Achterflügel-Trotz, der Liszt einst dazu brachte, sich öffentlich gegen die
        etablierte Leipziger Musikwelt zu stellen – Widerstand macht ihn nur entschlossener.</p>
        <p class="vb-intro"><strong>c) Kein geordneter Rückzug, sondern ein Zusammenbruch mitten im Geschehen:</strong>
        Statt eines ruhigen Lebensabends endete Liszts Leben mitten im Zentrum eines
        öffentlichen Ereignisses – der Schimpanse, der bis zuletzt im Geschehen blieb, statt
        sich zurückzuziehen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Jahre wachsender Beschwerden, die das Lebenstempo nicht bremsten:</strong>
        Herzschwäche, Wassersucht und Erblindung entwickelten sich über Jahre – doch Liszts
        Reise- und Arbeitspensum blieb bis fast zum Schluss praktisch unverändert. Die
        Leidenschaft der Sieben, die <strong>Völlerei</strong>, kannte auch angesichts des
        eigenen körperlichen Verfalls keine Bremse.</p>
        <p class="vb-intro"><strong>b) Alkohol als stille Begleiterscheinung der Maßlosigkeit:</strong>
        Der zunehmende Cognac-Konsum seiner letzten Jahre passt in dasselbe Muster wie sein
        gesamtes Leben: Intensität als Antwort auf jede Erfahrung, auch auf Trauer und
        körperlichen Verfall, statt Rückzug oder Schonung.</p>
        <p class="vb-intro"><strong>c) Wenn die Sieben unter chronischem Stress zur Eins wird:</strong>
        Dass Liszt trotz Fieber und ausdrücklichem ärztlichem Verbot auf den Besuch der
        Aufführung bestand, wirkt weniger wie die spielerische Wahlfreiheit der gesunden Sieben
        als wie eine fast pflichtbewusste, rigide Weigerung nachzugeben. Wer über Jahre in
        chronischem körperlichem Verfall lebt, bewegt sich zunehmend entlang seiner
        Stresslinie in Richtung seines Stresspunkts – bei der Sieben ist das die Eins. Dieses
        unnachgiebige „Ich lasse mich davon nicht abhalten" in seinen letzten Lebenswochen
        erinnert an die starre Pflichterfüllung des Stresspunkts, nicht an die Leichtigkeit
        des Kerntyps – bei unverändertem Kerntyp SX7w8.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Herz und Lunge?</strong>
        Für eine sexuelle Sieben, deren gesamte Lebenskraft sich in unermüdlicher, körperlicher
        Präsenz auf der Bühne und in ständigem Reisen ausdrückte, liegt eine Deutung nahe:
        Ausgerechnet jene Organe, die Ausdauer und Durchhaltevermögen ermöglichten, wurden zum
        Schauplatz des Verfalls – als hätte der Körper irgendwann die Rechnung für ein Leben
        ohne eingebaute Pause präsentiert. Diese Deutung ist eine plausible Interpretation,
        kein belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu Herz- oder
        Lungenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Liszts Fall zeigen lässt, ist ein Muster im
        Umgang mit fortschreitender Krankheit, das bei einer ausgeprägten sexuellen Sieben mit
        Achterflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Liszt kannte sein eigenes Muster nicht – die sexuelle Sieben mit Achterflügel lässt
        sich von Widerstand nicht bremsen, sondern erst recht anspornen, und genau dieses
        Muster trieb ihn trotz Herzschwäche, Erblindung und Fieber unbeirrt weiter, statt
        rechtzeitig kürzerzutreten. Wer die eigene Unfähigkeit, eine Grenze zu akzeptieren,
        nicht als wiederkehrendes Muster erkennt, kann sie auch nicht durchbrechen, wenn der
        eigene Körper längst unübersehbare Warnsignale sendet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Liszts</strong> sexuelle Sieben mit
        Achterflügel noch einmal ablesen: Jahre wachsender körperlicher Beschwerden, die das
        Lebenstempo nicht bremsten, und ein letzter, kompromissloser Auftritt gegen ärztlichen
        Rat, der zum Todesstoß wurde. Der Schimpanse, der ganze Säle in Ekstase versetzte – und
        dessen eigener Körper am Ende der einzige war, der ihn endgültig zum Stillstand
        brachte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-franz-liszt", label:"Porträt: Franz Liszt (SX7w8) – Lebenswerk"},
        {route:"krankheitsportraets-robert-schumann", label:"Krankheitsporträt: Robert Schumann (SX7w8) – dieselbe Unfähigkeit, kürzerzutreten"},
        {route:"krankheitsportraets-leonard-bernstein", label:"Krankheitsporträt: Leonard Bernstein (SX7w6) – letztes Konzert gegen ärztlichen Rat"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

function francisBaconKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-francis-bacon-portrait.jpg" alt="Francis Bacon" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Francis Bacon</p>
        <p class="krim-portrait-typ">SE7w8 · Selbsterhaltender Typ 7 mit Achterflügel · 1561–1626</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Francis Bacon</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-francis-bacon">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein philosophisches Lebenswerk, seinen
        politischen Aufstieg und Fall. Hier geht es ausschließlich um ein Kapitel, das dort nur
        gestreift wird: eine über Jahrzehnte chronische Gesundheit voller Gicht, Nierensteinen
        und Verdauungsbeschwerden – und einen Tod, der sich wie die letzte, tödliche Konsequenz
        seines eigenen Forscherdrangs liest.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Bacon</strong> ist der <strong>selbsterhaltenden Sieben mit Achterflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp die "versteckte Acht": eine Sieben, die ihre
        Neugier und Genussfähigkeit mit der Durchsetzungskraft und Direktheit der Acht
        verbindet, ohne diese offen zur Schau zu stellen. Genau diese Kombination aus
        unstillbarem Forscherdrang und der Weigerung, vor körperlichen Grenzen
        zurückzuschrecken, prägte auch seinen Umgang mit der eigenen Gesundheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine fragile Konstitution von Jugend an:</strong>
        Zeitgenössische Berichte beschreiben Bacon bereits als jungen Mann als kränklich und
        anfällig – eine körperliche Zerbrechlichkeit, die in auffälligem Kontrast zu seinem
        unermüdlichen intellektuellen und politischen Tatendrang stand.</p>
        <p class="vb-intro"><strong>b) Wiederkehrende Gichtanfälle seit dem mittleren Lebensalter:</strong>
        Ab seinen Vierzigern litt Bacon zunehmend an schmerzhaften Gichtschüben, die ihn
        zeitweise ans Bett fesselten – eine Erkrankung, die damals eng mit übermäßigem Genuss
        von Fleisch und Wein in Verbindung gebracht wurde, dem Lebensstil eines Mannes, der am
        Hof und in der Politik nie zurückhaltend auftrat.</p>
        <p class="vb-intro"><strong>c) Nierensteine als ständiger Begleiter:</strong>
        Parallel zur Gicht dokumentieren Bacons eigene Aufzeichnungen wiederkehrende, quälende
        Nierenstein-Koliken, die ihn über Jahre begleiteten und seine juristische wie
        wissenschaftliche Arbeit immer wieder unterbrachen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Krankheit als Randnotiz im überfüllten Terminkalender:</strong>
        Trotz der wiederkehrenden Beschwerden finden sich in Bacons Briefen kaum Klagen über
        die eigene Gesundheit – Krankheit wurde knapp erwähnt und dann zur nächsten Aufgabe
        übergegangen, nie zum zentralen Thema gemacht.</p>
        <p class="vb-intro"><strong>b) Ein Mann, der seine eigene Medizin praktizierte:</strong>
        Bacon experimentierte selbst mit Ernährung, Heilkräutern und Lebensweisen, um seine
        Beschwerden zu lindern – seine "Sylva Sylvarum", eine posthum veröffentlichte Sammlung
        naturkundlicher Beobachtungen, enthält zahlreiche Notizen zu Gesundheit, Langlebigkeit
        und Körperpflege, die vermutlich auch aus eigener Betroffenheit entstanden.</p>
        <p class="vb-intro"><strong>c) Finanzielle Sorgen als zusätzliche Last:</strong>
        Zeit seines Lebens verschuldet trotz hoher Ämter und beträchtlicher Einkünfte, lebte
        Bacon in einem chronischen Spannungsfeld zwischen Repräsentationszwang und
        finanzieller Unsicherheit – ein Dauerstress, der seine körperliche Verfassung
        vermutlich zusätzlich belastete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Sturz von 1621 als zusätzliche Belastung:</strong>
        Die Anklage wegen Bestechlichkeit, die Amtsenthebung und die kurze Haft im Tower
        trafen einen bereits gesundheitlich angeschlagenen Mann in seinen Sechzigern –
        Zeitgenossen berichteten von einem sichtbaren körperlichen Verfall in den Monaten nach
        dem politischen Fall.</p>
        <p class="vb-intro"><strong>b) Rückzug aufs Land, nicht Rückzug von der Arbeit:</strong>
        Nach dem Verlust seiner Ämter zog sich Bacon auf sein Landgut Gorhambury zurück – doch
        statt sich zu schonen, arbeitete er in den folgenden fünf Jahren so intensiv wie kaum
        zuvor an seinen wissenschaftlichen Werken, oft bis in die frühen Morgenstunden.</p>
        <p class="vb-intro"><strong>c) Die letzte Kutschfahrt im Winter 1626:</strong>
        Auf dem Weg nach Highgate bei London kam Bacon im eisigen Winterwetter die Idee, ob
        Kälte den Verwesungsprozess verzögern könnte – ein Gedanke, dem er sofort, ohne
        Rücksicht auf die Witterung, experimentell nachging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Das Hühnchen-Experiment:</strong>
        Bacon hielt die Kutsche an, kaufte ein Hühnchen von einer Bäuerin und stopfte es
        eigenhändig mit Schnee aus, um zu testen, ob Kälte Fäulnis verhindern könne – ein
        früher, ernsthafter Versuch zur Lebensmittelkonservierung, Jahrhunderte vor der
        modernen Kühltechnik.</p>
        <p class="vb-intro"><strong>b) Zu krank für die Heimreise:</strong>
        Bei dem Experiment zog sich Bacon eine schwere Erkältung zu, die sich rasch
        verschlimmerte. Er war zu geschwächt, um zu seinem eigenen Haus zurückzukehren, und
        wurde stattdessen ins nahegelegene Haus von Lord Arundel gebracht.</p>
        <p class="vb-intro"><strong>c) Tod innerhalb weniger Tage:</strong>
        Am 9. April 1626 starb Francis Bacon in Arundels Haus an einer Bronchitis oder
        Lungenentzündung, die aus der Erkältung entstanden war – nur wenige Tage nach dem
        Experiment, das seinen Tod auslöste.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Achterflügel, der auch die eigene Schwäche ignorierte:</strong>
        Dieselbe Durchsetzungskraft, die Bacon durch politische Ämter und wissenschaftliche
        Großprojekte trug, ließ ihn auch über die eigenen körperlichen Warnsignale
        hinweggehen – Gicht, Nierensteine und ein bereits geschwächter Zustand hielten ihn
        nicht davon ab, sich im Winter einem spontanen Experiment auszusetzen.</p>
        <p class="vb-intro"><strong>b) Neugier ohne eingebaute Notbremse:</strong>
        Die selbsterhaltende Sieben sucht Sicherheit normalerweise durch Vorsicht und
        praktische Vorsorge – bei Bacon wich diese Vorsicht in seinem letzten Lebensjahrzehnt
        zunehmend der reinen Entdeckerlust, die keine Rücksicht mehr auf die eigene
        Verfassung nahm.</p>
        <p class="vb-intro"><strong>c) Arbeit als einziges verbliebenes Terrain:</strong>
        Nach dem Verlust seiner politischen Macht verlagerte sich die ganze Energie der SE7w8
        auf das letzte Feld, das ihm blieb – die eigene Forschung –, mit einer Intensität, die
        keine Grenze mehr zu kennen schien.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leben in chronischem Schmerz, kaum thematisiert:</strong>
        Jahrzehntelange Gicht und Nierensteine begleiteten Bacon durch seine gesamte
        politische und wissenschaftliche Karriere, ohne dass er ihnen in seinen Schriften
        nennenswerten Raum gab – Krankheit war für ihn ein Hindernis, das man umging, nicht
        ein Thema, das man auslebte.</p>
        <p class="vb-intro"><strong>b) Ein Tod, der zum Sinnbild des ganzen Lebens wurde:</strong>
        Kaum ein anderes Krankheitsporträt dieses Kompasses zeigt eine derart wörtliche
        Übereinstimmung zwischen Lebensmuster und Todesursache: Bacon starb nicht trotz,
        sondern wegen seines unstillbaren Forscherdrangs – die gleiche Eigenschaft, die sein
        gesamtes Werk trug, wurde ihm im entscheidenden Moment zum Verhängnis.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Erkältung?</strong>
        Für eine selbsterhaltende Sieben mit Achterflügel, deren Sicherheit traditionell aus
        praktischer Vorsorge und körperlicher Robustheit gespeist wird, liegt eine Deutung
        nahe: Ausgerechnet eine banale, vermeidbare Erkältung – kein dramatisches Leiden,
        sondern eine Nachlässigkeit im Angesicht der eigenen Neugier – wurde zur tödlichen
        Konsequenz einer Lebenshaltung, die praktische Vorsicht der Entdeckerfreude
        systematisch unterordnete. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sieben zwangsläufig zu
        derartigen Unfällen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Bacons Fall zeigen lässt, ist ein Muster,
        das bei ungebremster Neugier in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Bacon kannte sein eigenes Muster nicht – die selbsterhaltende Sieben mit Achterflügel verfolgt jede neue Idee bis zur letzten Konsequenz, ohne die eigene körperliche Verletzlichkeit mitzudenken, und genau das führte dazu, dass ausgerechnet ein spontanes Experiment in Winterkälte ihm den Tod brachte. Wer den eigenen Wissensdrang nicht als Muster erkennt, unterschätzt, wie leicht Neugier zur eigenen Gefährdung werden kann.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Bacons</strong> letzten Lebensjahren lässt sich die selbsterhaltende Sieben
        mit Achterflügel in ihrer konsequentesten Form ablesen: eine über Jahrzehnte
        chronische, kaum beklagte körperliche Bürde, die der unstillbaren Entdeckerfreude nie
        wirklich Einhalt gebot – bis ein einziges spontanes Experiment im eisigen Winter zum
        letzten wurde. Der Gorilla, der bis zum letzten Atemzug nach der nächsten Entdeckung
        griff – und im Sterben noch ein Experiment machte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-francis-bacon", label:"Porträt: Francis Bacon (SE7w8) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se7", label:"Subtyp-Profil SE7"},
      ])}
    </div>
  `);
}

function karlMarxKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-karl-marx-portrait.jpg" alt="Karl Marx" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Karl Marx</p>
        <p class="krim-portrait-typ">SO8w9 · Sozialer Typ 8 mit Neunerflügel · 1818–1883</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Löwe</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Tierentsprechung: Löwe" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Karl Marx</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-karl-marx">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seinen jahrzehntelangen
        Kampf gegen den Kapitalismus. Hier geht es ausschließlich um ein Kapitel, das dort nur
        gestreift wird: eine über Jahrzehnte chronische, extrem schmerzhafte Hauterkrankung, die
        ihn buchstäblich am Sitzen hinderte, während er am "Kapital" schrieb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Marx</strong> ist der <strong>sozialen Acht mit Neunerflügel</strong>
        zugeordnet. Naranjo nannte die soziale Acht <em>Solidarität</em>: Kraft im Dienst der
        Unterdrückten. Der Neunerflügel bringt Geduld und die Fähigkeit, ein gewaltiges System
        über Jahrzehnte gedanklich zu durchdringen, statt impulsiv zu handeln. Genau diese
        stille, unerbittliche Beharrlichkeit trug Marx auch durch einen Körper, der sich ihm
        über Jahrzehnte hinweg schmerzhaft widersetzte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Hautbeschwerden schon in den 1840er-Jahren:</strong>
        Bereits in seinen Zwanzigern klagte Marx in Briefen über wiederkehrende Furunkel und
        Hautentzündungen – ein Leiden, das ihn von diesem Zeitpunkt an nie wieder ganz verließ.</p>
        <p class="vb-intro"><strong>b) Verschärfung im Londoner Exil:</strong>
        Mit dem Umzug nach London 1849, unter beengten Wohnverhältnissen, chronischem
        Geldmangel und schlechter Ernährung, nahmen die Hautbeschwerden deutlich an Häufigkeit
        und Schwere zu – ein Muster, das viele Ärzte seiner Zeit mit den Lebensbedingungen des
        Exils in Verbindung brachten.</p>
        <p class="vb-intro"><strong>c) Ein Leiden, das er selbst schonungslos benannte:</strong>
        In Briefen an Friedrich Engels beschrieb Marx seine Beschwerden mit erstaunlicher
        Offenheit und schwarzem Humor – ein früher Hinweis darauf, dass er die Krankheit nicht
        verdrängte, sondern sie, wie so vieles andere, in sein politisches Selbstverständnis
        einordnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Karbunkel an den schmerzhaftesten Stellen:</strong>
        Marx litt über Jahrzehnte an schweren, eitrigen Furunkeln und Karbunkeln – vor allem an
        Gesäß, Rücken und im Genitalbereich –, die medizinhistorisch heute häufig als Hidradenitis
        suppurativa gedeutet werden, eine chronisch-entzündliche Erkrankung der Schweißdrüsen.</p>
        <p class="vb-intro"><strong>b) Monatelange Schreibunterbrechungen:</strong>
        In besonders schweren Phasen konnte Marx wochenlang nicht sitzen und musste im Stehen
        oder auf der Seite liegend arbeiten – die Fertigstellung des ersten Bandes von "Das
        Kapital" verzögerte sich dadurch wiederholt um Monate.</p>
        <p class="vb-intro"><strong>c) Ein Netz weiterer chronischer Beschwerden:</strong>
        Neben den Karbunkeln dokumentieren seine Briefe und die Berichte seines Arztes
        chronische Bronchitis, Leberbeschwerden, Rheuma, Kopfschmerzen und wiederkehrende
        Augenentzündungen, vermutlich verstärkt durch nächtliches Arbeiten bei schlechtem
        Kerzenlicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der berühmte Galgenhumor gegenüber der Bourgeoisie:</strong>
        Überliefert ist ein Ausspruch Marx' gegenüber Engels, er hoffe, die Bourgeoisie werde
        sich seiner Karbunkel bis an ihr Lebensende erinnern – eine Formulierung, die den
        eigenen körperlichen Schmerz direkt mit seinem politischen Kampf verknüpfte.</p>
        <p class="vb-intro"><strong>b) Familientragödien als zusätzliche Last:</strong>
        Drei seiner sieben Kinder starben in jungen Jahren, teils an den Folgen der Armut, in
        der die Familie lebte – ein Kummer, der sich nach Berichten von Zeitgenossen auch
        körperlich auf Marx' Gesundheitszustand auswirkte.</p>
        <p class="vb-intro"><strong>c) Arbeit trotz Diagnose, nicht wegen ihrer Abwesenheit:</strong>
        Anders als bei manch anderem Krankheitsporträt dieses Kompasses war sich Marx seiner
        chronischen Beschwerden voll bewusst – er verbarg sie nicht, sondern integrierte sie in
        seinen Alltag als ständigen, nie ganz überwundenen Gegner.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der erste Band von "Das Kapital" 1867:</strong>
        Trotz jahrelanger, durch Krankheit bedingter Unterbrechungen vollendete Marx den ersten
        Band seines Hauptwerks – ein Kraftakt, der auch als Sieg über den eigenen, oft
        widerspenstigen Körper gelesen werden kann.</p>
        <p class="vb-intro"><strong>b) Die Bände zwei und drei blieben unvollendet:</strong>
        Die Fortsetzung des "Kapitals" wurde von Marx nie abgeschlossen; erst Friedrich Engels
        stellte die weiteren Bände nach Marx' Tod aus dessen Notizen zusammen – ein Hinweis
        darauf, wie sehr die chronische Krankheit sein Lebenswerk am Ende doch begrenzte.</p>
        <p class="vb-intro"><strong>c) Zunehmende Isolation in den letzten Lebensjahren:</strong>
        In seinen letzten Jahren, geschwächt durch Bronchitis und wiederkehrende
        Lungenentzündungen, zog sich Marx zunehmend aus dem öffentlichen politischen Leben
        zurück und war auf die Pflege durch seine Tochter Eleanor und Engels angewiesen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Neunerflügel, der auch den Körper stillhielt:</strong>
        Dieselbe stille, unerbittliche Beharrlichkeit, mit der Marx über Jahrzehnte an seinem
        Systemwerk arbeitete, zeigte sich auch im Umgang mit der eigenen Krankheit – kein
        dramatisches Aufbegehren, sondern zähes Weiterarbeiten trotz wiederkehrender,
        monatelanger Rückschläge.</p>
        <p class="vb-intro"><strong>b) Wut, die den Körper nach innen richtete:</strong>
        Die soziale Acht kämpft normalerweise nach außen, gegen sichtbare Feinde und
        Ungerechtigkeit – bei Marx richtete sich ein Teil dieser Intensität, medizinhistorisch
        diskutiert, möglicherweise auch nach innen, in Form chronischer, entzündlicher
        Körperreaktionen.</p>
        <p class="vb-intro"><strong>c) Die Löwen-Energie im Krankenzimmer:</strong>
        Selbst ans Bett gefesselt, ließ Marx laut Berichten von Besuchern kaum von seiner Arbeit
        ab – Bücher, Zeitungen und Notizen blieben griffbereit, auch wenn er zeitweise kaum
        sitzen konnte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leiden, das über vier Jahrzehnte begleitete:</strong>
        Von den ersten dokumentierten Furunkeln in den 1840er-Jahren bis zu seinem Tod 1883
        zieht sich die chronische Hauterkrankung wie ein roter Faden durch Marx' gesamtes
        erwachsenes Leben – parallel zu seinem gesamten literarischen und politischen
        Lebenswerk.</p>
        <p class="vb-intro"><strong>b) Ein Körper, der sich weigerte, sich niederzuwerfen:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses ist hier keine
        Geheimhaltung dokumentiert – Marx sprach offen über seine Beschwerden, verarbeitete sie
        sogar humoristisch, und ließ sich von ihnen dennoch nie vollständig aufhalten.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Haut?</strong>
        Für eine soziale Acht mit Neunerflügel, deren Kampfgeist sich normalerweise nach außen,
        gegen konkrete Ungerechtigkeit richtet, liegt eine Deutung nahe: Ausgerechnet die Haut –
        die Grenze zwischen Innen und Außen, zwischen dem Körper und der feindlichen Welt, gegen
        die Marx sein ganzes Leben kämpfte – wurde selbst zum Schauplatz eines chronischen,
        schmerzhaften Konflikts. Diese Deutung wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Acht zwangsläufig zu Hauterkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Marx' Fall zeigen lässt, ist ein Muster, das bei chronisch nach außen
        gerichtetem Kampfgeist in der Praxis immer wieder auffällt – eine von vielen möglichen
        Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Marx kannte sein eigenes Muster nicht – die soziale Acht duldet keine Unterbrechung der eigenen Mission, und genau das ließ ihn über vier Jahrzehnte trotz schmerzhafter Karbunkel unbeirrt an seinem Lebenswerk weiterarbeiten, statt sich die nötige Schonung zuzugestehen. Wer das eigene Durchhaltemuster nicht kennt, verwechselt Nachgeben mit Niederlage, selbst wenn der eigene Körper längst innehalten müsste.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Marx'</strong> chronischer Krankheitsgeschichte lässt sich die soziale Acht
        mit Neunerflügel in ihrer zähesten Form ablesen: ein Körper, der über Jahrzehnte
        rebellierte, ein Kampfgeist, der sich davon nie ganz aufhalten ließ, und eine Arbeit,
        die trotz monatelanger Schmerzphasen zu einem der einflussreichsten Werke der
        Geistesgeschichte wurde. Der Löwe, der aus dem Krankenbett heraus weiterschrieb – weil
        Stillstand für ihn keine Option war, selbst wenn der eigene Körper ihn dazu zwingen
        wollte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-karl-marx", label:"Porträt: Karl Marx (SO8w9) – Lebenswerk"},
        {route:"krankheitsportraets-winston-churchill", label:"Krankheitsporträt: Winston Churchill (SE8w9)"},
        {route:"krankheitsportraets-helmut-kohl", label:"Krankheitsporträt: Helmut Kohl (SO8w9) – dasselbe Muster ungebrochener Kontrolle"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so8", label:"Subtyp-Profil SO8"},
      ])}
    </div>
  `);
}

function jamesLevineKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-james-levine-portrait.jpg" alt="James Levine" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">James Levine</p>
        <p class="krim-portrait-typ">SE9w1 · Selbsterhaltender Typ 9 mit Einserflügel · 1943–2021</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>James Levine</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-james-levine">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein musikalisches Lebenswerk an der
        Metropolitan Opera und, im letzten Abschnitt, um die 2017 öffentlich gewordenen
        Missbrauchsvorwürfe. Hier geht es ausschließlich um ein davon getrenntes Kapitel: eine
        über Jahrzehnte fortschreitende Parkinson-Erkrankung und schwere Rückenleiden, die ihn
        zunehmend körperlich einschränkten, während er weiter dirigierte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Levine</strong> ist der <strong>selbsterhaltenden Neun mit Einserflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Neun <em>Appetit</em>: die Sehnsucht,
        vollständig in etwas zu wohnen, das nährt und trägt. Der Einserflügel gibt dieser
        Sehnsucht einen inneren Maßstab, der keine Abkürzungen duldet. Genau diese Kombination
        aus tiefer Verwurzelung und unnachgiebigem Anspruch an sich selbst prägte auch, wie
        Levine mit einem Körper umging, der ihm zunehmend die Kontrolle entzog.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Tremorsymptome bereits in den 1990er-Jahren:</strong>
        Kollegen und Orchestermitglieder bemerkten schon früh ein leichtes Zittern in Levines
        Händen, das er über Jahre hinweg weitgehend verbarg und nicht öffentlich thematisierte.</p>
        <p class="vb-intro"><strong>b) Rückenprobleme als frühes Warnsignal:</strong>
        Parallel zu den ersten neurologischen Anzeichen häuften sich bei Levine schwere
        Rückenbeschwerden, die mehrere operative Eingriffe notwendig machten und ihn wiederholt
        für längere Zeit von der Bühne fernhielten.</p>
        <p class="vb-intro"><strong>c) Ein Sturz 2006 als erster gravierender Einschnitt:</strong>
        Bei einem Sturz während eines Konzertes in Boston zog sich Levine einen Rotatorenmanschettenriss
        zu – ein Vorfall, der die zunehmende körperliche Verwundbarkeit erstmals öffentlich
        sichtbar machte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Parkinson-Diagnose, jahrelang privat gehalten:</strong>
        Levine erhielt die Diagnose Parkinson vermutlich bereits in den 1990er-Jahren, machte sie
        aber erst 2013 öffentlich – ein Muster der Geheimhaltung, das sich durch weite Teile
        seiner Karriere zog.</p>
        <p class="vb-intro"><strong>b) Ein schwerer Sturz 2011 als Wendepunkt:</strong>
        Ein Sturz während der Sommerpause 2011 führte zu einer schweren Rückenmarksverletzung,
        die eine Notoperation erforderlich machte und Levine für fast zwei Jahre komplett von
        der Bühne fernhielt.</p>
        <p class="vb-intro"><strong>c) Zunehmende Abhängigkeit von technischen Hilfsmitteln:</strong>
        Die Metropolitan Opera baute eigens einen motorisierten Rollstuhl-Lift, um Levine auf
        das Podium zu bringen – ein sichtbares Zeichen dafür, wie sehr sich sein Körper von
        seinem Willen, weiter zu dirigieren, entkoppelt hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Dirigieren im Sitzen, mit minimaler Handbewegung:</strong>
        In seinen letzten aktiven Jahren dirigierte Levine sitzend, mit stark eingeschränkter
        Armbeweglichkeit – er kommunizierte mit dem Orchester zunehmend über Blickkontakt und
        Mimik statt über die klassische Dirigierbewegung.</p>
        <p class="vb-intro"><strong>b) Kein Rückzug, sondern Anpassung:</strong>
        Statt sich aus der aktiven Leitung zurückzuziehen, passte Levine seine Arbeitsweise
        immer wieder neu an die fortschreitende Erkrankung an – ein Muster, das über Jahrzehnte
        anhielt, bis die körperlichen Grenzen keine weitere Anpassung mehr zuließen.</p>
        <p class="vb-intro"><strong>c) Öffentliche Zurückhaltung trotz sichtbarer Symptome:</strong>
        Auch nachdem der Tremor und die eingeschränkte Mobilität für das Publikum unübersehbar
        geworden waren, sprach Levine selbst kaum öffentlich über seine Erkrankung – ein
        Schweigen, das zur selbsterhaltenden Neun passt, die Schwäche lieber in sich trägt, als
        sie auszusprechen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Rückkehr nach zwei Jahren Pause:</strong>
        2013 kehrte Levine, nun dauerhaft im Rollstuhl, an die Metropolitan Opera zurück – ein
        Comeback, das in der Klassikwelt als bemerkenswerter Ausdruck von Beharrlichkeit
        gewürdigt wurde.</p>
        <p class="vb-intro"><strong>b) Das Ende der aktiven Karriere 2017/2018:</strong>
        Levines Vertrag mit der Met endete 2018 – offiziell im Zusammenhang mit den
        Missbrauchsermittlungen, doch bereits zuvor hatte seine fortschreitende Erkrankung seine
        Möglichkeiten, das Orchester zu leiten, spürbar eingeschränkt.</p>
        <p class="vb-intro"><strong>c) Tod 2021 an den Folgen der Parkinson-Erkrankung:</strong>
        James Levine starb am 9. März 2021 in Palm Springs, Kalifornien, offiziell an den
        Komplikationen seiner langjährigen Parkinson-Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Einserflügel, der keine Kompromisse mit der Krankheit einging:</strong>
        Levines innerer Anspruch an musikalische Präzision blieb auch dann bestehen, als sein
        Körper diese Präzision zunehmend erschwerte – der Wille zur Richtigkeit ließ sich von
        der Erkrankung nicht aufweichen.</p>
        <p class="vb-intro"><strong>b) Appetit, der sich an die veränderten Bedingungen anpasste:</strong>
        Die selbsterhaltende Neun sucht Vollständigkeit im Vertrauten – Levine fand diese
        Vollständigkeit weiterhin in der Musik, auch als der Zugang zu ihr immer eingeschränkter
        wurde, und bewahrte sich dadurch eine Form von innerer Stabilität.</p>
        <p class="vb-intro"><strong>c) Ein Territorium, das er bis zuletzt verteidigte:</strong>
        Wie beim Elefanten, der sein Revier nicht kampflos aufgibt, blieb die Met für Levine bis
        zum erzwungenen Ende sein Zuhause – der Rückzug kam nicht aus eigenem Entschluss, sondern
        wurde ihm von außen und von seinem eigenen Körper zugleich auferlegt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Vierteljahrhundert stiller Anpassung:</strong>
        Von den ersten Tremorsymptomen in den 1990er-Jahren bis zu seinem Tod 2021 zieht sich
        die fortschreitende Parkinson-Erkrankung wie ein roter Faden durch Levines gesamte
        späte Karriere – begleitet von schweren, wiederholten Rückenverletzungen.</p>
        <p class="vb-intro"><strong>b) Geheimhaltung als durchgängiges Muster:</strong>
        Ähnlich wie bei anderen Krankheitsporträts dieses Kompasses hielt Levine seine
        Diagnose über Jahre privat – ein Verhalten, das sich bei der selbsterhaltenden Neun
        besonders deutlich zeigt: Stabilität nach außen zu wahren, auch wenn im Inneren längst
        etwas ins Wanken geraten war.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Kontrolle über den eigenen Körper?</strong>
        Für eine selbsterhaltende Neun mit Einserflügel, deren tiefstes Bedürfnis die
        vollständige, ungestörte Verschmelzung mit ihrem Territorium ist, liegt eine Deutung
        nahe: Ausgerechnet eine Krankheit, die schrittweise die Kontrolle über die eigenen
        Bewegungen raubt, traf einen Mann, dessen gesamte Identität an der präzisen,
        körperlichen Beherrschung eines Orchesters hing. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu
        Parkinson führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Levines Fall zeigen lässt, ist ein Muster, das bei stiller,
        anpassungsbereiter Beharrlichkeit trotz fortschreitendem Kontrollverlust in der Praxis
        immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Levine kannte sein eigenes Muster nicht – die selbsterhaltende Neun mit Einerflügel vermeidet lieber jede Aufmerksamkeit auf die eigene Schwäche, und genau das ließ ihn erste Tremorsymptome jahrelang privat verbergen, statt frühzeitig kürzerzutreten. Wer das eigene Vermeidungsmuster nicht kennt, verschiebt die notwendige Entscheidung, bis sie ihm von außen abgenommen wird.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Levines</strong> jahrzehntelanger Parkinson-Erkrankung lässt sich die
        selbsterhaltende Neun mit Einserflügel in ihrer beharrlichsten Form ablesen: eine
        stille, über Jahre verborgene Anpassung an fortschreitenden Kontrollverlust, ein
        unnachgiebiger innerer Anspruch, der sich von der Krankheit nicht erweichen ließ, und
        ein Territorium, das erst aufgegeben wurde, als kein Verbleiben mehr möglich war. Der
        Elefant, der sein Haus bewohnte, bis der eigene Körper und die äußeren Umstände ihm
        keine andere Wahl mehr ließen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-james-levine", label:"Porträt: James Levine (SE9w1) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se9", label:"Subtyp-Profil SE9"},
      ])}
    </div>
  `);
}

function davidHumeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-david-hume-portrait.jpg" alt="David Hume" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">David Hume</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel · 1711–1776</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>David Hume</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-david-hume">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein philosophisches Lebenswerk und seine
        Gelassenheit im Zweifel. Hier geht es ausschließlich um ein Kapitel, das dort nur
        gestreift wird: eine chronische Darmerkrankung, die ihn in seinen letzten Lebensjahren
        zunehmend schwächte – und die er mit derselben bemerkenswerten Ruhe verarbeitete, mit
        der er zeitlebens philosophiert hatte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hume</strong> ist der <strong>selbsterhaltenden Neun mit Achterflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Neun <em>Appetit</em>: die Sehnsucht
        nach innerem Frieden und Komfort. Der Achterflügel gibt dieser Gelassenheit eine
        unerschütterliche Standfestigkeit, die auch dem eigenen Tod ohne Ausweichen
        gegenübertreten kann. Genau diese Verbindung aus Ruhe und innerer Festigkeit prägte,
        wie Hume seine letzte, tödliche Krankheit verarbeitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Verdauungsbeschwerden ab 1772:</strong>
        Etwa vier Jahre vor seinem Tod bemerkte Hume erste anhaltende Verdauungsstörungen und
        Durchfälle, die er zunächst als vorübergehend abtat und mit gewohnter Gelassenheit
        hinnahm.</p>
        <p class="vb-intro"><strong>b) Stetiger Gewichtsverlust:</strong>
        In den folgenden Jahren magerte Hume, der zeitlebens für seine Vorliebe an gutem Essen
        und geselligen Diners bekannt war, zunehmend ab – ein auffälliger Kontrast zu seinem
        früheren, oft als rundlich beschriebenen Erscheinungsbild.</p>
        <p class="vb-intro"><strong>c) Eine Reise nach Bath zur Kur:</strong>
        1775 reiste Hume ins englische Bath, um die dortigen Heilquellen zur Linderung seiner
        Beschwerden zu nutzen – ein damals übliches, aber letztlich wirkungsloses Mittel gegen
        seine fortschreitende Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine bis heute nicht abschließend geklärte Diagnose:</strong>
        Medizinhistoriker vermuten heute überwiegend ein Darmkarzinom oder eine schwere
        chronisch-entzündliche Darmerkrankung als Ursache von Humes Symptomen – eine
        eindeutige, moderne Diagnose ist aus den historischen Quellen nicht mehr zu
        rekonstruieren.</p>
        <p class="vb-intro"><strong>b) Kontinuierliches Fortschreiten über gut vier Jahre:</strong>
        Anders als bei manch anderem Krankheitsporträt dieses Kompasses gab es bei Hume keine
        dramatischen Wendepunkte oder Krisen – seine Erkrankung entwickelte sich stetig und
        gleichmäßig fortschreitend, ohne größere Rückschläge oder Erholungsphasen.</p>
        <p class="vb-intro"><strong>c) Ungebrochene geistige Klarheit bis zuletzt:</strong>
        Trotz des körperlichen Verfalls blieb Humes intellektuelle Schärfe nach übereinstimmenden
        Zeugenberichten bis in seine letzten Lebenswochen vollständig erhalten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) "Mein eigenes Leben" – die letzte, nüchterne Bilanz:</strong>
        Im April 1776, wenige Monate vor seinem Tod, verfasste Hume die kurze Autobiografie "My
        Own Life" – eine erstaunlich sachliche, fast heitere Rückschau auf sein Leben, in der er
        seine nahende Sterblichkeit nüchtern und ohne jede Dramatik erwähnte.</p>
        <p class="vb-intro"><strong>b) Der Besuch James Boswells im Juli 1776:</strong>
        Der Schriftsteller James Boswell suchte den sterbenden Hume auf, um herauszufinden, ob
        der berühmte Skeptiker angesichts des Todes nicht doch Angst zeige oder zu religiösem
        Glauben zurückfinde.</p>
        <p class="vb-intro"><strong>c) Eine Gelassenheit, die Boswell zutiefst erschütterte:</strong>
        Hume erklärte ruhig, er sehe keinen Grund zur Sorge und rechne mit einer vollständigen
        Auflösung nach dem Tod – eine Haltung, die Boswell, selbst tief religiös, in seinen
        eigenen Tagebüchern als beunruhigend und zugleich bewundernswert beschrieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Gesellige Abende bis kurz vor dem Ende:</strong>
        Selbst in den letzten Wochen empfing Hume weiterhin Freunde zu Gesprächen und kleinen
        Diners in seinem Haus in Edinburgh – der gesellige Lebensstil, der ihn sein ganzes Leben
        ausgezeichnet hatte, wich der Krankheit nicht kampflos.</p>
        <p class="vb-intro"><strong>b) Regelung der eigenen Nachlassangelegenheiten:</strong>
        Hume ordnete seine Papiere und literarischen Angelegenheiten, darunter die postume
        Veröffentlichung der "Dialoge über natürliche Religion", mit derselben nüchternen
        Sorgfalt, mit der er sein gesamtes Werk organisiert hatte.</p>
        <p class="vb-intro"><strong>c) Tod am 25. August 1776 in Edinburgh:</strong>
        David Hume starb in seinem Haus in Edinburgh, im Kreis vertrauter Menschen, im Alter von
        65 Jahren – ohne die theatralische Inszenierung, die manche Zeitgenossen von einem so
        berühmten "gottlosen" Philosophen vielleicht erwartet hätten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Achterflügel, der auch im Sterben nicht auswich:</strong>
        Dieselbe Bereitschaft, eine Position bis zum radikalen Ende zu denken, die Humes
        gesamtes philosophisches Werk prägte, zeigte sich auch im Angesicht des Todes – er
        verweigerte sich jeder tröstenden Illusion, ohne dabei bitter oder verzweifelt zu wirken.</p>
        <p class="vb-intro"><strong>b) Appetit, der sich nicht vom nahenden Ende trüben ließ:</strong>
        Die selbsterhaltende Neun sucht Frieden im Vertrauten – Hume fand diesen Frieden bis
        zuletzt in Gesprächen, Büchern und der Gesellschaft von Freunden, auch als sein Körper
        ihn zunehmend im Stich ließ.</p>
        <p class="vb-intro"><strong>c) Keine Flucht, kein Kampf – nur Gleichmut:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses findet sich bei Hume
        weder ein verzweifelter Kampf gegen die Krankheit noch ein resignierter Rückzug –
        stattdessen eine fast meditative Gelassenheit, die seine gesamte Philosophie bereits
        vorweggenommen hatte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die zur letzten philosophischen Prüfung wurde:</strong>
        Hume hatte sein ganzes Leben lang für einen skeptischen, illusionslosen Blick auf
        Kausalität, Selbst und Gottesbeweise argumentiert – seine eigene, tödliche Erkrankung
        wurde zur unausweichlichen Gelegenheit, diese Haltung nicht nur zu vertreten, sondern
        tatsächlich zu leben.</p>
        <p class="vb-intro"><strong>b) Kein Wendepunkt, keine Umkehr:</strong>
        Anders als so manche Sterbebett-Bekehrung, die die Nachwelt sich von einem berühmten
        Skeptiker erhofft hätte, blieb Hume bis zum letzten Atemzug seiner philosophischen
        Grundhaltung treu – die Krankheit veränderte seine Überzeugungen nicht, sie bestätigte
        sie.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Darm?</strong>
        Für eine selbsterhaltende Neun mit Achterflügel, deren tiefstes Bedürfnis darin besteht,
        inneren Frieden und Verdauung im wörtlichsten Sinn zu bewahren – die Fähigkeit, alles
        Aufgenommene ruhig zu verarbeiten, ohne sich aus der Fassung bringen zu lassen –, liegt
        eine Deutung nahe: Ausgerechnet das Organ, das für Aufnahme, Verarbeitung und
        Gleichgewicht steht, wurde bei Hume selbst zum Schauplatz eines langsamen, aber
        unaufhaltsamen Verfalls. Diese Deutung wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu
        Darmerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Humes Fall zeigen lässt, ist ein Muster, das bei
        tiefem, philosophisch begründetem Gleichmut in der Praxis immer wieder auffällt – eine
        von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hume kannte sein eigenes Muster nicht – und doch zeigte sich die selbsterhaltende Neun mit Achterflügel gerade in der eigenen Krankheit von ihrer reifsten Seite: statt Bedrohung auszuweichen oder sie zu dramatisieren, verarbeitete er den eigenen Verfall mit derselben gelassenen Klarheit, mit der er sein ganzes Leben Philosophie betrieben hatte. Nicht jedes unbewusst gelebte Muster verschärft das Leiden – manchmal trägt es auch durch, ohne dass der Betroffene je wusste, warum.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Humes</strong> Sterben lässt sich die selbsterhaltende Neun mit
        Achterflügel in ihrer reifsten Form ablesen: eine über vier Jahre fortschreitende,
        tödliche Erkrankung, die weder Kampf noch Verzweiflung, sondern eine seltene,
        philosophisch fundierte Gelassenheit hervorbrachte. Der Elefant, der die Welt so
        verließ, wie er sie durchquert hatte – ungerührt, neugierig, ohne die Bequemlichkeit
        einer Illusion zu brauchen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-david-hume", label:"Porträt: David Hume (SE9w8) – Lebenswerk"},
        {route:"krankheitsportraets-johannes-brahms", label:"Krankheitsporträt: Johannes Brahms (SE9w8) – dieselbe elefantenhafte Gelassenheit"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Krankheitsporträt: Hans-Dietrich Genscher (SE9w8) – gleicher Subtyp"},
        {route:"beruehmte-james-levine", label:"Porträt: James Levine (SE9w1)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se9", label:"Subtyp-Profil SE9"},
      ])}
    </div>
  `);
}

function johannesBrahmsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-johannes-brahms-portrait.jpg" alt="Johannes Brahms" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johannes Brahms</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel · 1833–1897</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Johannes Brahms</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-johannes-brahms">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine jahrzehntelange
        Treue zur Familie Schumann. Diese Seite vertieft ein Kapitel, das dort nur angedeutet
        wird: eine Leberkrankung, an der bereits sein Vater gestorben war, und die Brahms selbst
        nur elf Monate nach dem Tod seiner engsten Freundin Clara Schumann dahinraffte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Brahms</strong> ist der <strong>selbsterhaltenden Neun mit Achterflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Appetit</em>: Frieden im Vertrauten, in der
        immer gleichen Gewohnheit. Der Achterflügel gibt dieser Gelassenheit eine unerschütterliche
        Standfestigkeit. Genau dieses Muster – Beharren im Gewohnten, bis eine äußere
        Erschütterung es aufbricht – lässt sich bis in seinen Krankheitsverlauf
        nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Die erschöpfende Reise zu Clara Schumanns Beerdigung:</strong>
        Als Clara Schumann im Mai 1896 starb, verpasste der bereits selbst gesundheitlich
        angeschlagene Brahms auf der überstürzten Reise nach Bonn mehrere Zuganschlüsse und
        musste Teile der Strecke im falschen Zug zurücklegen – er traf erschöpft und zu spät
        zur Beisetzung ein.</p>
        <p class="vb-intro"><strong>b) Sichtbare Gelbfärbung kurz danach:</strong>
        Noch im selben Sommer bemerkten Freunde eine ungewohnte Gelbfärbung seiner Haut und eine
        zunehmende Erschöpfung, die Brahms zunächst herunterspielte.</p>
        <p class="vb-intro"><strong>c) Eine Diagnose, die an den eigenen Vater erinnerte:</strong>
        Ende 1896 oder Anfang 1897 wurde bei Brahms eine schwere Lebererkrankung
        festgestellt – dieselbe Krankheit, an der bereits sein Vater Johann Jakob Brahms
        gestorben war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Kein Rückzug von öffentlichen Verpflichtungen:</strong>
        Trotz der Diagnose zog sich Brahms nicht aus dem öffentlichen Leben zurück, sondern
        nahm weiterhin an Konzerten teil, solange es seine Kräfte zuließen.</p>
        <p class="vb-intro"><strong>b) Zunehmender, kaum thematisierter Verfall:</strong>
        Sein engster Kreis bemerkte den fortschreitenden Gewichtsverlust und die wachsende
        Erschöpfung – Brahms selbst sprach kaum darüber, ganz in der Art der selbsterhaltenden
        Neun, die Beschwerlichkeiten eher aussitzt als bespricht.</p>
        <p class="vb-intro"><strong>c) Festhalten an den vertrauten Ritualen, solange es ging:</strong>
        Auch in den letzten Monaten hielt Brahms an seinem gewohnten Rhythmus – Stammlokale,
        Zigarre, feste Tagesabläufe – fest, so lange es seine schwindende Kraft eben zuließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der letzte öffentliche Auftritt am 7. März 1897:</strong>
        Brahms besuchte in Wien eine Aufführung seiner 4. Sinfonie, sichtbar geschwächt und
        kaum noch in der Lage, die Treppen zu seiner Loge zu steigen. Das Publikum bereitete
        ihm eine lang anhaltende, tief bewegte Ovation nach jedem Satz – viele im Saal weinten,
        weil allen klar war, dass sie ihn zum letzten Mal sahen.</p>
        <p class="vb-intro"><strong>b) Bemerkenswerte Fassung angesichts des nahen Todes:</strong>
        Freunde und Weggefährten berichteten übereinstimmend von einer stillen Gelassenheit,
        mit der Brahms sein eigenes Sterben in den letzten Wochen hinnahm.</p>
        <p class="vb-intro"><strong>c) Tod am 3. April 1897 in Wien:</strong>
        Johannes Brahms starb im Alter von 63 Jahren – nur elf Monate nach Clara Schumann, deren
        Verlust seinen eigenen körperlichen Verfall mit beschleunigt haben dürfte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: David Hume</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch <a href="javascript:void(0)" data-route="beruehmte-david-hume">David Hume</a>
        (SE9w8) begegnete seiner tödlichen Krankheit – in seinem Fall einer chronischen
        Darmerkrankung – mit bemerkenswerter Gelassenheit statt Kampf oder Verzweiflung. Sein
        <a href="javascript:void(0)" data-route="krankheitsportraets-david-hume">eigenes
        Krankheitsporträt</a> zeigt dieselbe elefantenhafte Ruhe wie bei Brahms: Der
        Achterflügel gibt der selbsterhaltenden Neun eine Standfestigkeit, die auch dem eigenen
        Tod ohne Ausweichen begegnen kann – kein dramatischer Kampf, sondern ein stilles
        Weitertragen des Gewohnten bis zuletzt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der einem anderen Tod unmittelbar folgte:</strong>
        Dass Brahms nur elf Monate nach Clara Schumann starb, wurde von Zeitgenossen und
        Nachwelt gleichermaßen als kaum zufällige Fügung gedeutet – vierzig Jahre Treue endeten
        beinahe gleichzeitig auf beiden Seiten.</p>
        <p class="vb-intro"><strong>b) Eine Ovation, die zum Abschied wurde:</strong>
        Die Ovation nach seiner 4. Sinfonie im März 1897 gilt bis heute als einer der
        bewegendsten Momente der Konzertgeschichte – ein Publikum, das seinem sterbenden
        Komponisten noch einmal seine Anerkennung entgegenbrachte.</p>
        <p class="vb-intro"><strong>c) Ein stilles Ende ohne Dramatik:</strong>
        Anders als mancher Künstlertod, der sich zur Legende auflädt, blieb Brahms' Sterben
        bemerkenswert unspektakulär – passend zu einem Mann, der zeitlebens das Vertraute dem
        Auffälligen vorzog.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Ein Fixpunkt, der plötzlich fehlte:</strong>
        Die selbsterhaltende Neun findet ihre Stabilität im Vertrauten – Clara Schumanns Tod
        entzog Brahms genau diesen letzten, über vierzig Jahre gewachsenen Fixpunkt, und der
        Körper folgte kurz darauf.</p>
        <p class="vb-intro"><strong>b) Beharren im Gewohnten bis zur Erschöpfung:</strong>
        Statt sich nach der Diagnose zu schonen, hielt Brahms an seinen gewohnten
        Verpflichtungen fest – dieselbe Trägheit, die ihn 21 Jahre an einer Sinfonie feilen
        ließ, ließ ihn auch angesichts des eigenen Todes nicht von seinen Ritualen abweichen.</p>
        <p class="vb-intro"><strong>c) Der Achterflügel, der auch im Sterben nicht auswich:</strong>
        Dieselbe unerschütterliche Standfestigkeit, mit der Brahms einst im „Streit der
        Romantiker" seine Position hielt, zeigte sich noch einmal in der stillen, unbeirrten
        Art, mit der er dem eigenen Tod entgegensah.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die im Vertrauten der Familie wurzelte:</strong>
        Dass Brahms an derselben Leberkrankheit starb wie sein Vater, passt auf eine bittere
        Weise zum Kernthema der selbsterhaltenden Neun: Selbst im Krankheitsverlauf zeigte sich
        etwas zutiefst Familiäres, Wiederkehrendes, statt eines völlig neuen, fremden
        Schicksals.</p>
        <p class="vb-intro"><strong>b) Der Bruch im Vertrauten als Auslöser:</strong>
        Die selbsterhaltende Neun lebt vom verlässlichen Ritual – Clara Schumanns Tod und die
        chaotische, erschöpfende Reise zu ihrer Beerdigung waren genau jene Störung des
        Gewohnten, die Brahms' bis dahin verborgene Krankheit sichtbar werden ließ.</p>
        <p class="vb-intro"><strong>c) Keine Flucht, kein Kampf – nur stilles Weitertragen:</strong>
        Wie bei David Hume findet sich auch bei Brahms kein verzweifelter Kampf gegen die
        Krankheit und kein dramatischer Rückzug, sondern ein Weitertragen der gewohnten Rituale
        bis an die Grenze der eigenen Kraft.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Leber?</strong>
        Für eine selbsterhaltende Neun mit Achterflügel, deren tiefstes Bedürfnis in der ruhigen
        Verarbeitung und Bewahrung des Vertrauten liegt, liegt eine Deutung nahe: Ausgerechnet
        jenes Organ, das im Körper für Verarbeitung, Entgiftung und das ruhige Funktionieren im
        Hintergrund zuständig ist, wurde bei Brahms – wie schon bei seinem Vater – zum
        Schauplatz des Verfalls. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu
        Lebererkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Brahms' Fall zeigen lässt, ist ein Muster
        im Umgang mit einer tödlichen Diagnose, das bei einer ausgeprägten selbsterhaltenden
        Neun mit Achterflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Brahms kannte sein eigenes Muster nicht – die selbsterhaltende Neun mit Achterflügel
        findet Sicherheit im Vertrauten und trägt Belastungen lange schweigend mit, statt sie
        anzusprechen oder sich zu schonen. Genau das tat er, als er trotz sichtbarer
        Erschöpfung an seinen Verpflichtungen festhielt, statt die eigene Erkrankung ernst zu
        nehmen. Wer die eigene Neigung, Beschwerden auszusitzen statt sie zu benennen, nicht
        als Muster kennt, verpasst den Moment, in dem rechtzeitige Schonung noch etwas hätte
        bewirken können.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Brahms'</strong> selbsterhaltende Neun mit
        Achterflügel noch einmal ablesen: eine Krankheit, die im Vertrauten der eigenen Familie
        wurzelte, ein Zusammenbruch des Gewohnten, der erst durch den Verlust der engsten
        Freundin sichtbar wurde, und ein stilles, unspektakuläres Ende, das dem gelebten Leben
        aufs Wort entsprach. Der Elefant, der vierzig Jahre lang nichts vergaß – und der die
        Welt nur elf Monate nach der Frau verließ, der seine Treue am längsten gegolten hatte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-johannes-brahms", label:"Porträt: Johannes Brahms (SE9w8) – Lebenswerk"},
        {route:"krankheitsportraets-robert-schumann", label:"Krankheitsporträt: Robert Schumann (SX7w8) – Brahms besuchte ihn regelmäßig in Endenich"},
        {route:"krankheitsportraets-david-hume", label:"Krankheitsporträt: David Hume (SE9w8) – dieselbe elefantenhafte Gelassenheit"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Krankheitsporträt: Hans-Dietrich Genscher (SE9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se9", label:"Subtyp-Profil SE9"},
      ])}
    </div>
  `);
}

function elizabethBarrettBrowningKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-elizabeth-barrett-browning-portrait.jpg" alt="Elizabeth Barrett Browning" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elizabeth Barrett Browning</p>
        <p class="krim-portrait-typ">SX9w8 &middot; Sexueller Typ 9 mit Achterflügel &middot; 1806&ndash;1861</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Faultier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Tierentsprechung: Faultier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elizabeth Barrett Browning</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-elizabeth-barrett-browning">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr dichterisches Lebenswerk und die
        Flucht nach Italien. Hier geht es ausschließlich um ein Kapitel, das dort nur gestreift
        wird: eine jahrzehntelange, nie eindeutig diagnostizierte chronische Krankheit, verbunden
        mit einer über Jahrzehnte fortgeführten Opiumbehandlung – und die Frage, was es bedeutet,
        wenn eine sexuelle Neun buchstäblich gegen die eigene Bewusstlosigkeit ankämpfen muss.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Barrett Browning</strong> ist der <strong>sexuellen Neun mit Achterflügel</strong>
        zugeordnet. Naranjo nannte die sexuelle Neun <em>Verschmelzung</em>: die Sehnsucht, in
        einem einzigen Gegenüber vollständig aufzugehen. Der Achterflügel gibt dieser
        Verschmelzung eine Kraft, die sich notfalls kämpferisch behauptet, statt sich einfach nur
        anzupassen. Genau dieses Wechselspiel – jahrzehntelange, medikamentös vertiefte
        Bewusstlosigkeit gegenüber dem eigenen Leben, unterbrochen von einem einzigen, radikal
        wachen Akt der Selbstbehauptung – prägte Barrett Brownings gesamten Krankheitsverlauf.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste chronische Beschwerden in der Jugend:</strong>
        Ab etwa ihrem fünfzehnten Lebensjahr litt Elizabeth Barrett an anhaltenden Schmerzen,
        vermutlich im Zusammenhang mit einer Rückenverletzung – möglicherweise Folge eines
        Reitunfalls –, die bis heute medizinhistorisch nicht abschließend geklärt ist.</p>
        <p class="vb-intro"><strong>b) Frühe Verordnung von Opium:</strong>
        Schon als junge Frau verschrieben ihr die Ärzte Laudanum (Opiumtinktur) gegen die
        Schmerzen – ein damals gängiges, aber stark abhängig machendes Mittel, das sie bis an ihr
        Lebensende begleiten sollte.</p>
        <p class="vb-intro"><strong>c) Verschlechterung durch eine Lungenerkrankung:</strong>
        Parallel zu den Rückenbeschwerden entwickelte sich eine chronische Lungenschwäche, die
        die Familie 1838 dazu bewog, sie zur Kur in das mildere Klima von Torquay an der
        englischen Südküste zu schicken.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine bis heute nicht eindeutig rekonstruierbare Diagnose:</strong>
        Medizinhistoriker diskutieren als mögliche Ursachen unter anderem eine Wirbelsäulenerkrankung,
        eine frühe Form der Tuberkulose oder eine funktionelle, durch chronischen Schmerz und
        familiäre Enge verstärkte Erkrankung – eine moderne, eindeutige Diagnose lässt sich aus
        den historischen Quellen nicht mehr gewinnen.</p>
        <p class="vb-intro"><strong>b) Jahrzehntelange Opiumabhängigkeit als eigenständiges Krankheitsbild:</strong>
        Anders als bei den meisten Krankheitsporträts dieses Kompasses trat neben die ursprüngliche
        körperliche Erkrankung ein zweites, selbst erzeugtes Leiden: die medikamentöse
        Dauerbehandlung mit Opium führte zu einer physischen Abhängigkeit, die ihr Leben über
        Jahrzehnte mitbestimmte.</p>
        <p class="vb-intro"><strong>c) Ein Trauma, das die Krankheit vertiefte:</strong>
        1840 ertrank ihr geliebter Bruder Edward bei einem Segelunglück vor Torquay – wenige
        Wochen, nachdem er gegen den Willen ihres Vaters bei ihr geblieben war, um sie zu
        pflegen. Elizabeth machte sich für seinen Tod mitverantwortlich und zog sich danach für
        Jahre noch weiter aus dem Leben zurück.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Über zwanzig Jahre kaum aus dem eigenen Zimmer heraus:</strong>
        Nach dem Tod ihres Bruders verschärfte sich ihre Isolation im Elternhaus in der Londoner
        Wimpole Street erheblich – Zeitgenossen beschrieben sie als eine Frau, die ihr Zimmer
        kaum noch verließ, das Bett fast nie und Besuch fast nur noch liegend empfing.</p>
        <p class="vb-intro"><strong>b) Ein Leben, das sich zunehmend im Halbschlaf abspielte:</strong>
        Die tägliche Opiumdosis dämpfte nicht nur den Schmerz, sondern auch die Wachheit – Barrett
        selbst beschrieb in Briefen Phasen benommener Müdigkeit, die sie von ihrer Umwelt
        abschnitten, lange bevor irgendjemand das Wort Abhängigkeit dafür benutzt hätte.</p>
        <p class="vb-intro"><strong>c) Und mitten darin: eine ungebrochene literarische Produktivität:</strong>
        Ausgerechnet aus diesem Zustand heraus entstanden einige ihrer bekanntesten Werke – ein
        Befund, der Ärzte und Biografen bis heute beschäftigt, wie viel geistige Klarheit neben
        der körperlichen und medikamentösen Schwäche erhalten blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Die Flucht 1846 als körperlicher Wendepunkt:</strong>
        Nach der heimlichen Heirat und der Übersiedlung nach Italien besserte sich Barrett
        Brownings Gesundheit spürbar – wärmeres Klima, ein selbstbestimmtes Leben und die
        Distanz zum Vaterhaus wirkten sich messbar positiv aus, auch wenn die Opiumeinnahme
        bestehen blieb.</p>
        <p class="vb-intro"><strong>b) Vier Fehlgeburten und ein überlebendes Kind:</strong>
        In Italien erlitt sie mehrere Fehlgeburten, bevor 1849 ihr Sohn Robert Wiedeman Barrett
        Browning (genannt „Pen“) gesund zur Welt kam – für eine Frau ihres damaligen
        Gesundheitszustands ein medizinisch bemerkenswertes Ereignis.</p>
        <p class="vb-intro"><strong>c) Ein letztes Jahrzehnt zwischen Schaffenskraft und Verfall:</strong>
        Die 1850er-Jahre brachten sowohl ihr politisch engagiertestes Werk als auch einen
        erneuten, schleichenden gesundheitlichen Verfall, der sich in den letzten Lebensjahren
        deutlich beschleunigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Achterflügel, der aus dem Nebel heraus handelte:</strong>
        Die Entscheidung zur Flucht 1846 traf eine Frau, die seit Jahren in einem Zustand
        medikamentöser Gedämpftheit lebte – und die trotzdem in der Lage war, einen
        hochriskanten, monatelang geheim gehaltenen Plan bis ins Detail durchzuziehen. Das ist
        die Signatur des Achterflügels: Kraft, die auch durch Nebel hindurch handlungsfähig
        bleibt.</p>
        <p class="vb-intro"><strong>b) Verschmelzung, die sich gegen die eigene Bewusstlosigkeit richtete:</strong>
        Die sexuelle Neun sucht Verschmelzung – bei Barrett Browning geschah das über zwanzig
        Jahre lang vor allem als Verschmelzung mit der eigenen Passivität, dem Krankenzimmer, der
        Dämpfung. Die Bindung an Robert Browning war die erste Verschmelzung, die sie aus dieser
        Bewusstlosigkeit heraus- statt weiter hineinzog.</p>
        <p class="vb-intro"><strong>c) Eine Wachheit, die nur im äußersten Ernstfall auftauchte:</strong>
        Auffällig ist, wie punktuell sich ihre Kraft zeigte – nicht als dauerhafte Rebellion gegen
        die eigene Situation, sondern als ein einziger, hochkonzentrierter Ausbruch, wenn wirklich
        alles auf dem Spiel stand. Dazwischen blieb die vertraute Dämpfung bestehen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die zur wörtlichen Bewusstlosigkeit wurde:</strong>
        Die sexuelle Neun trägt als Schattenseite die Gefahr, sich so vollständig anzupassen und
        zu verschmelzen, dass die eigene Wachheit dem Leben gegenüber verloren geht – bei kaum
        einem anderen Porträt dieses Kompasses wird dieses Muster so konkret körperlich, wie bei
        einer Frau, deren tägliche Opiumdosis genau diese Unbewusstheit über Jahrzehnte hinweg
        buchstäblich chemisch verstärkte.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel als der Teil, der aufwachte:</strong>
        Wäre Elizabeth Barrett eine sexuelle Neun ohne ausgeprägten Achterflügel gewesen, hätte
        diese jahrzehntelange Dämpfung vermutlich bis zum Ende angehalten. Stattdessen brach
        genau in dem Moment, in dem die eine Bindung – die einzige, die für sie zählte – bedroht
        war, eine Entschlossenheit durch, die stark genug war, den eigenen Nebel zu durchbrechen
        und einen Fluchtplan bis zum letzten Detail umzusetzen. Die Krankheit forderte den
        Achterflügel geradezu heraus, sich zu zeigen.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Opium?</strong>
        Für eine sexuelle Neun, deren tiefstes Muster die Verschmelzung mit dem Anderen bis zur
        Auflösung der eigenen Grenzen ist, liegt eine Deutung nahe: Opium erzeugt chemisch genau
        jenen Zustand der Entgrenzung und gedämpften Wachheit, den die sexuelle Neun psychisch
        ohnehin anstrebt – eine Substanz, die dem eigenen Muster nicht entgegenwirkt, sondern es
        potenziert. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Das Stresspunkt-Mittel, verordnet an eine Neun:</strong>
        Aus Sicht der Enneagramm-Homöopathie, wie sie in diesem Kompass verwendet wird, ist Opium
        (Schlafmohn) das homöopathische Heilmittel des Typs 6 – der Stresspunkt der Neun. Ein
        homöopathisches Stresspunkt-Mittel ist bei einem anderen Typ nie neutral: Es verstärkt
        genau jenes Muster, in das der Mensch unter Belastung ohnehin abgleitet – bei der Neun ist
        das die Passivität, die Schläfrigkeit, die Unbewusstheit gegenüber dem eigenen Leben.
        Barrett Browning erhielt über Jahrzehnte, medizinisch begründet als Schmerzmittel,
        ausgerechnet jenes Mittel, das ihr eigenes Notfallmuster nicht auflöste, sondern
        chemisch vertiefte – aus enneagrammhomöopathischer Sicht denkbar ungünstig, auch wenn die
        damalige Medizin von dieser Zuordnung naturgemäß nichts wissen konnte.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Neun zwangsläufig zu Abhängigkeitserkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Barrett Brownings Fall zeigen lässt, ist ein Muster, das bei tiefer
        Verschmelzungsneigung in der Praxis immer wieder auffällt – eine von vielen möglichen
        Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Barrett Browning kannte ihr eigenes Muster nicht – die sexuelle Neun mit Achterflügel verschmilzt leicht mit dem Willen anderer, statt den eigenen Weg zu gehen, und genau das hielt sie über zwanzig Jahre in der Isolation des Vaterhauses und in der Opiumabhängigkeit gefangen. Erst die eine intensive Verbindung, die sie schließlich aus diesem Haus herausriss, durchbrach ein Muster, das ihr selbst nie bewusst war.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Barrett Brownings</strong> Krankengeschichte lässt sich die sexuelle Neun mit
        Achterflügel in einer besonders klaren Zuspitzung ablesen: eine über Jahrzehnte
        vertiefte, auch chemisch erzeugte Bewusstlosigkeit gegenüber dem eigenen Leben – und ein
        einziger, radikal wacher Akt, der genau diese Dämpfung durchbrach, als die eine Bindung
        auf dem Spiel stand, die zählte. Das Faultier, das die meiste Zeit im Halbschlaf hängt –
        und in dem einen Moment, in dem es darauf ankommt, mit aller Kraft zugreift.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-elizabeth-barrett-browning", label:"Porträt: Elizabeth Barrett Browning (SX9w8) – Lebenswerk"},
        {route:"beruehmte-lucy-cooke", label:"Porträt: Lucy Cooke (SX9w8)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx9", label:"Subtyp-Profil SX9"},
      ])}
    </div>
  `);
}

function peterFalkKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-peter-falk-portrait.jpg" alt="Peter Falk" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Peter Falk</p>
        <p class="krim-portrait-typ">SO9w1 · Sozialer Typ 9 mit Einserflügel · 1927–2011</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Büffel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Tierentsprechung: Büffel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Peter Falk</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-peter-falk">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Columbo-Darsteller und
        seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das dort nicht zur
        Sprache kommt: eine Alzheimer-Diagnose 2007, die seine letzten Lebensjahre prägte, und
        ein öffentlich ausgetragener Sorgerechtsstreit um seine Pflege, der dem Grundmuster
        seines gesamten Lebens diametral entgegenstand.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Falk</strong> ist dem <strong>sozialen Typ 9 mit Einserflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Teilnahme</em>: die Fähigkeit, sich in
        jede Gruppe einzufügen und dort Frieden zu finden, ohne die eigene Identität zu
        verlieren. Der Einserflügel bringt einen stillen, unerschütterlichen inneren Kompass
        hinzu. Genau dieses Bedürfnis nach Harmonie und Zugehörigkeit geriet in seinen letzten
        Lebensjahren in einen bitteren Konflikt, den er selbst nicht mehr moderieren konnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Anzeichen kognitiven Abbaus ab Mitte der 2000er-Jahre:</strong>
        Nach Angaben aus seinem Umfeld zeigte Falk bereits einige Jahre vor der offiziellen
        Diagnose erste Anzeichen von Gedächtnisproblemen, die zunächst als altersbedingte
        Vergesslichkeit gedeutet wurden.</p>
        <p class="vb-intro"><strong>b) Diagnose im Jahr 2007:</strong>
        2007 wurde bei Falk offiziell eine fortschreitende Demenz diagnostiziert, die
        später in gerichtlichen Dokumenten als Alzheimer-Erkrankung bestätigt wurde.</p>
        <p class="vb-intro"><strong>c) Rückzug aus der Öffentlichkeit:</strong>
        Mit fortschreitender Erkrankung zog sich Falk zunehmend aus öffentlichen Auftritten
        zurück – ein stiller Abschied ohne große Ankündigung, passend zu einem Mann, der nie
        das Rampenlicht gesucht hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein gerichtlich bestellter Vormund:</strong>
        2008 beantragte seine Ehefrau Shera Falk gerichtlich die Vormundschaft über seine
        Angelegenheiten – ein Schritt, der angesichts der fortschreitenden Erkrankung als
        notwendig erachtet wurde.</p>
        <p class="vb-intro"><strong>b) Ein öffentlicher Streit um Besuchsrechte:</strong>
        In der Folge entbrannte ein gerichtlicher Streit zwischen Shera Falk und Catherine
        Falk, seiner Tochter aus erster Ehe, um deren Zugang zu ihrem erkrankten Vater – ein
        Konflikt, der in der Presse ausführlich verfolgt wurde.</p>
        <p class="vb-intro"><strong>c) Ein Leben, das zunehmend fremdbestimmt wurde:</strong>
        Wo Falk zeitlebens selbst entschieden hatte, mit wem er Zeit verbrachte, lag diese
        Entscheidung in seinen letzten Jahren zunehmend bei anderen – eine Umkehrung, die dem
        Kern seiner Persönlichkeit widersprach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortschreitender Verlust der Erinnerung an die eigene Karriere:</strong>
        Berichten aus seinem nahen Umfeld zufolge erkannte Falk in den letzten Jahren seine
        eigene berühmteste Rolle streckenweise nicht mehr wieder – ein besonders
        schmerzhaftes Detail bei einem Mann, dessen halbes Leben mit dieser einen Figur
        verbunden war.</p>
        <p class="vb-intro"><strong>b) Rückzug in die häusliche Pflege:</strong>
        Die letzten Lebensjahre verbrachte Falk weitgehend zurückgezogen in seinem Haus in
        Beverly Hills, umsorgt von seiner Frau und einem kleinen, festen Kreis an
        Pflegepersonal.</p>
        <p class="vb-intro"><strong>c) Tod am 23. Juni 2011:</strong>
        Peter Falk starb im Alter von 83 Jahren in seinem Haus in Beverly Hills an den Folgen
        seiner Alzheimer-Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentlicher Streit über einen Mann, der nie stritt:</strong>
        Der Sorgerechtskonflikt um Falks letzte Lebensjahre wurde in den Medien breit
        diskutiert – ein auffälliger Kontrast zu dem Bild des zugewandten, nie
        konfliktsuchenden Mannes, das er zeitlebens verkörpert hatte.</p>
        <p class="vb-intro"><strong>b) Ein Nachruf, der die Krankheit kaum erwähnte:</strong>
        In den öffentlichen Würdigungen nach seinem Tod stand fast ausschließlich sein
        Lebenswerk als Columbo im Vordergrund – die Alzheimer-Jahre blieben ein eher
        stilles, nachträglich bekannt gewordenes Kapitel.</p>
        <p class="vb-intro"><strong>c) Ein Bild, das trotz allem bestehen blieb:</strong>
        Trotz der Krankheit und des Familienstreits blieb das öffentliche Bild Peter Falks
        weitgehend unverändert: der bodenständige, neugierige, nie überhebliche Mann, der er
        zeitlebens gewesen war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Büffel, der die Kontrolle über sein eigenes Umfeld verlor:</strong>
        Wo Falk sein ganzes Leben lang die Fähigkeit besaß, sich selbst in jede Umgebung
        einzufügen und dort Frieden zu stiften, konnte er in seinen letzten Jahren nicht mehr
        vermitteln, als genau dieser Frieden um ihn herum zerbrach.</p>
        <p class="vb-intro"><strong>b) Ein Konflikt, den die Krankheit selbst erst ermöglichte:</strong>
        Der Sorgerechtsstreit entstand nicht trotz, sondern wegen der Erkrankung – erst der
        Verlust seiner eigenen Entscheidungsfähigkeit öffnete den Raum für einen Konflikt,
        den er zu Lebzeiten nie zugelassen hätte.</p>
        <p class="vb-intro"><strong>c) Stille bis zuletzt:</strong>
        Trotz des öffentlichen Streits um ihn drang aus dem Zentrum des Geschehens selbst
        kaum etwas nach außen – Falk blieb, wie er es zeitlebens gewesen war, die ruhige
        Mitte, um die sich anderes bewegte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Vier Jahre zwischen Diagnose und Tod:</strong>
        Von der Diagnose 2007 bis zu seinem Tod 2011 lebte Falk vier Jahre mit einer
        Krankheit, die genau jene Fähigkeit angriff, die sein ganzes Leben und seine
        berühmteste Rolle geprägt hatte: aufmerksame, wache Präsenz.</p>
        <p class="vb-intro"><strong>b) Ein Sorgerechtsstreit als Gegenbild zum eigenen Lebensmuster:</strong>
        Falks gesamtes Leben war von der Fähigkeit geprägt, Konflikte zu entschärfen, statt
        sie zu befeuern. Der öffentliche Streit um seine Pflege in den letzten Lebensjahren
        war das genaue Gegenteil – ein Konflikt, der ohne seine aktive Vermittlung
        eskalierte.</p>
        <p class="vb-intro"><strong>c) Ein Gedächtnis, das die eigene Lebensleistung mit sich nahm:</strong>
        Für einen Mann, dessen Columbo-Figur von geduldiger, präziser Beobachtungsgabe lebte,
        liegt in einer Krankheit, die genau diese Fähigkeiten zuerst angreift, eine besonders
        bittere Zuspitzung.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Gedächtnis?</strong>
        Für eine soziale Neun mit Einserflügel, deren gesamte Identität auf der Fähigkeit
        beruhte, jede Situation aufmerksam zu erfassen und einzuordnen, liegt eine Deutung
        nahe: Ausgerechnet jenes Organ, das ihm ermöglichte, sich in jede Umgebung
        einzufühlen und dabei doch klar zu urteilen, wurde zum Schauplatz des Verfalls – und
        hinterließ ein Umfeld, das ohne seine vermittelnde Präsenz in offenen Streit verfiel.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Neun zwangsläufig zu Alzheimer führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Falks Fall zeigen lässt, ist ein Muster im Umfeld einer Krankheit, das bei
        einer ausgeprägten sozialen Neun immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Falk kannte sein eigenes Muster nicht – die soziale Neun findet ihren Frieden darin,
        sich in jede Umgebung einzufügen und dort still zu vermitteln, ohne je selbst im
        Zentrum eines Konflikts zu stehen. Gerade weil er diese vermittelnde Rolle nie
        bewusst als eigenes Muster erkannte, sondern einfach lebte, konnte er sie in dem
        Moment nicht mehr schützen, in dem die Krankheit ihm genau diese Fähigkeit nahm. Wer
        das eigene Bedürfnis nach Harmonie nicht als Muster kennt, kann es auch nicht aktiv
        absichern, wenn die Umstände es am dringendsten brauchen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Falks</strong> soziale Neun mit
        Einserflügel noch einmal ablesen: eine Krankheit, die genau jene aufmerksame,
        vermittelnde Präsenz zerstörte, die sein ganzes Leben und seine berühmteste Rolle
        trug, und ein Familienstreit, der ausbrach, sobald diese Präsenz nicht mehr da war,
        um ihn zu verhindern. Der Büffel, der sich sein Leben lang in jede Herde einfügte –
        und dessen eigene Herde erst zerstritten war, als er selbst nicht mehr vermitteln
        konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-peter-falk", label:"Porträt: Peter Falk (SO9w1) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so9", label:"Subtyp-Profil SO9"},
      ])}
    </div>
  `);
}

function leonardBernsteinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-leonard-bernstein-portrait.jpg" alt="Leonard Bernstein" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonard Bernstein</p>
        <p class="krim-portrait-typ">SX7w6 · Sexueller Typ 7 mit Sechserflügel · 1918–1990</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Leonard Bernstein</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-leonard-bernstein">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Dirigent, Komponist
        und Pädagoge und seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das
        dort nur angedeutet wird: ein jahrzehntelanger, nahezu grenzenloser Raubbau am eigenen
        Körper, der 1990 in einer fortgeschrittenen Lungenerkrankung und einem abrupten Tod
        gipfelte – wenige Tage, nachdem er sich öffentlich vom Dirigieren zurückgezogen hatte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Bernstein</strong> ist dem <strong>sexuellen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Suggestibilität</em>: die vollständige
        Verschmelzung mit einer Idee, einem Moment oder einer Begeisterung, mit einer Intensität,
        die keine halben Bindungen kennt. Der Sechserflügel bringt eine bindungsorientierte,
        fast missionarische Fürsorge hinzu. Genau diese Maßlosigkeit – die Leidenschaft der
        Sieben – wurde ihm am Ende körperlich zum Verhängnis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Kettenrauchen von Jugend an:</strong>
        Bernstein rauchte über Jahrzehnte hinweg bis zu vier Packungen Zigaretten täglich –
        eine Gewohnheit, die er trotz seines öffentlichen Status als Gesundheitswarnung nie
        ernsthaft infrage stellte.</p>
        <p class="vb-intro"><strong>b) Exzessiver Alkoholkonsum als ständiger Begleiter:</strong>
        Zeitgenossen berichteten übereinstimmend von einem hohen, über Jahrzehnte
        durchgehaltenen Alkoholkonsum, der neben dem Rauchen zum festen Bestandteil seines
        Alltags gehörte.</p>
        <p class="vb-intro"><strong>c) Zunehmende Atemprobleme ab den 1970er-Jahren:</strong>
        Schon Jahre vor der eigentlichen Diagnose bemerkten Weggefährten eine spürbar
        nachlassende körperliche Belastbarkeit bei Konzerten und Proben – ein Warnzeichen, das
        im Trubel seines Arbeitspensums unterging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unvermindertes Arbeitspensum trotz Diagnose:</strong>
        Als bei ihm ein fortschreitendes Lungenemphysem diagnostiziert wurde, änderte Bernstein
        seinen Lebensstil kaum – er dirigierte weiterhin international, komponierte und
        unterrichtete am Tanglewood Music Center.</p>
        <p class="vb-intro"><strong>b) Fortgesetztes Rauchen trotz ärztlicher Warnungen:</strong>
        Auch nach der Diagnose gab Bernstein das Rauchen nicht auf – ein Verhalten, das sein
        Umfeld wiederholt, aber vergeblich zu ändern versuchte.</p>
        <p class="vb-intro"><strong>c) Zunehmende Erschöpfung bei öffentlichen Auftritten:</strong>
        In den letzten Lebensjahren fiel Kollegen und Publikum eine wachsende körperliche
        Erschöpfung auf, die Bernstein konsequent überspielte, statt sie ernst zu nehmen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Hustenanfall beim letzten Konzert:</strong>
        Am 19. August 1990 dirigierte Bernstein in Tanglewood das Boston Symphony Orchestra in
        Beethovens 7. Sinfonie – gegen den ausdrücklichen Rat seiner Ärzte. Mitten im letzten
        Satz musste er wegen eines schweren Hustenanfalls abbrechen; sein Assistent Carl
        St.Clair übernahm, um das Konzert zu Ende zu bringen.</p>
        <p class="vb-intro"><strong>b) Rücktritt vom Dirigieren am 9. Oktober 1990:</strong>
        Sieben Wochen nach diesem Zusammenbruch gab Bernstein öffentlich seinen endgültigen
        Rückzug vom Dirigieren bekannt.</p>
        <p class="vb-intro"><strong>c) Tod am 14. Oktober 1990:</strong>
        Nur fünf Tage nach der Rücktrittsankündigung starb Leonard Bernstein in seiner New
        Yorker Wohnung an Herzversagen infolge seiner fortgeschrittenen Lungenerkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Abschied, der kaum Zeit zum Abschied ließ:</strong>
        Die knappe Zeitspanne von nur fünf Tagen zwischen Rücktritt und Tod bedeutete, dass die
        Öffentlichkeit den Ernst seines Zustands erst rückblickend wirklich begriff.</p>
        <p class="vb-intro"><strong>b) Nachrufe voller Bewunderung, wenig Thematisierung der Krankheit:</strong>
        Die Würdigungen nach seinem Tod konzentrierten sich fast ausschließlich auf sein
        musikalisches Erbe – die schweren letzten Monate blieben ein Randthema.</p>
        <p class="vb-intro"><strong>c) Ein letztes Konzert, das zum Symbol wurde:</strong>
        Dass er trotz ärztlichen Rats auftrat und mitten im Konzert aufgeben musste, wurde in
        der Rückschau immer wieder als Sinnbild seiner lebenslangen Kompromisslosigkeit
        erzählt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Schimpanse, der bis zuletzt nicht innehalten konnte:</strong>
        Seine gesamte Karriere war von der Unfähigkeit geprägt, ein Projekt, eine Rolle oder
        eine Bühne aufzugeben – genau dieses Muster setzte sich bis in seine letzten Wochen
        fort, als es längst um die eigene Gesundheit ging.</p>
        <p class="vb-intro"><strong>b) Ärztlicher Rat gegen den eigenen Antrieb:</strong>
        Die dringende Warnung seiner Ärzte vor dem Konzert am 19. August 1990 ignorierte er –
        absagen hätte für ihn einer Kapitulation vor der eigenen Sterblichkeit gleichgekommen,
        die er nicht bereit war zu akzeptieren.</p>
        <p class="vb-intro"><strong>c) Kein geordneter Rückzug, sondern ein abruptes Ende:</strong>
        Statt eines ruhigen, geplanten Ausklangs endete sein Leben in einem plötzlichen
        Zusammenbruch mitten in der Aktivität – der Schimpanse, der bis zur letzten Sekunde am
        Pult stand.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Drei Jahrzehnte Raubbau am eigenen Körper:</strong>
        Von der Jugend bis zum Tod – vier Packungen Zigaretten täglich, exzessiver
        Alkoholkonsum, kaum Schlaf und ein Arbeitspensum, das mehrere parallele Karrieren
        umfasste. Die Leidenschaft der Sieben, die <strong>Völlerei</strong>, kannte bei
        Bernstein keine Bremse.</p>
        <p class="vb-intro"><strong>b) Ein Herz, das buchstäblich keine Pause kannte:</strong>
        Sein Tod durch Herzversagen, ausgelöst durch die fortgeschrittene Lungenerkrankung, war
        die körperliche Konsequenz eines Lebens, das die eigenen Belastungsgrenzen nie ernst
        genommen hatte.</p>
        <p class="vb-intro"><strong>c) Wenn die Sieben unter chronischem Stress zur Eins wird:</strong>
        Als die Ärzte ihm eindringlich vom Konzert am 19. August 1990 abrieten, verweigerte er
        nicht aus spielerischer Siebener-Leichtigkeit, sondern aus einer fast starren,
        pflichtbewussten Weigerung, das Programm zu ändern. Wer über Jahrzehnte in
        chronischem Raubbau am eigenen Körper lebt, bewegt sich zunehmend entlang seiner
        Stresslinie in Richtung seines Stresspunkts – bei der Sieben ist das die Eins. Genau
        dieses rigide „Ich ziehe es durch, komme was wolle" in seinen letzten Lebenswochen
        wirkt weniger nach der freien Wahlfreiheit der gesunden Sieben als nach der starren
        Pflichterfüllung ihres Stresspunkts – bei unverändertem Kerntyp SX7w6.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Lunge?</strong>
        Für eine sexuelle Sieben, deren gesamte Lebendigkeit sich im Atem und in der
        körperlichen Ekstase am Dirigentenpult ausdrückte – er sprang, warf sich buchstäblich
        in die Musik hinein –, liegt eine Deutung nahe: Ausgerechnet jenes Organ, das ihm die
        körperliche Intensität ermöglichte, mit der er ganze Orchester mitriss, wurde zum
        Schauplatz des Verfalls. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu
        Lungenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Bernsteins Fall zeigen lässt, ist ein
        Muster im Umfeld einer Krankheit, das bei einer ausgeprägten sexuellen Sieben immer
        wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Bernstein lebte zu einer Zeit, als das Enneagramm als modernes Persönlichkeitsmodell in
        Kalifornien gerade erst entstand – nichts deutet darauf hin, dass er sein eigenes
        Muster je bewusst kannte. Er lebte die Maßlosigkeit der Sieben völlig ungebremst aus:
        Rauchen, Trinken, ein Arbeitspensum ohne Grenzen wurden nicht als wiederkehrendes
        Muster erkannt, sondern einfach als Hindernisse behandelt, die es zu überspielen galt.
        Wer die eigene Rastlosigkeit nicht als Muster kennt, kann rechtzeitig auch nicht
        gegensteuern, wenn der eigene Körper längst deutliche Warnsignale sendet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Bernsteins</strong> sexuelle Sieben mit
        Sechserflügel noch einmal ablesen: eine Maßlosigkeit, die keine Grenze kannte, bis der
        eigene Körper die Grenze setzte, und ein letztes Konzert, bei dem er buchstäblich bis
        zum letzten Atemzug am Pult stand. Der Schimpanse, der eine ganze Karriere lang jeden
        Saal mit seiner Intensität mitriss – und dessen eigener Körper am Ende der Einzige war,
        der sich diesem Sog widersetzte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-leonard-bernstein", label:"Porträt: Leonard Bernstein (SX7w6) – Lebenswerk"},
        {route:"krankheitsportraets-morgan-freeman", label:"Krankheitsporträt: Morgan Freeman (SX7w6)"},
        {route:"krankheitsportraets-frans-de-waal", label:"Krankheitsporträt: Frans de Waal (SX7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

function dollyPartonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-dolly-parton-portrait.jpg" alt="Dolly Parton" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dolly Parton</p>
        <p class="krim-portrait-typ">SX3w4 · Sexueller Typ 3 mit Viererflügel · 1946–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Pfau</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Tierentsprechung: Pfau" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Dolly Parton</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-dolly-parton">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine
        bereits in den frühen 1980er-Jahren diagnostizierte Endometriose mit anschließender
        Teilhysterektomie, jahrzehntelang wiederkehrende gesundheitliche Krisen bis hin zu
        Nierensteinen, und ein letzter, rasch verlaufender Kampf gegen Krebs, an dem sie am
        25. August 2026 im Alter von 80 Jahren starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Parton</strong> ist dem <strong>sexuellen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die SX3 macht persönliche Anziehungskraft und unmittelbare Präsenz zur
        Lebensaufgabe; der Viererflügel bringt eine emotionale Tiefe hinzu, die die reine
        Bühnenfigur mit einer sehr persönlichen, oft schmerzhaften Innenwelt rückbindet. Genau
        dieses Muster – nach außen unaufhörlich strahlen, während im Inneren über Jahrzehnte
        eine ernste körperliche Belastung verschwiegen wird – bestimmte auch ihren Umgang mit
        der eigenen Gesundheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Abdominale Schmerzen und Blutungen ab den frühen 1980er-Jahren:</strong>
        Parton litt zunehmend unter starken Unterleibsschmerzen und Blutungen, die sie
        wiederholt ins Krankenhaus brachten – Beschwerden, die sie lange Zeit hinter ihrem
        öffentlichen Terminkalender zu verbergen versuchte.</p>
        <p class="vb-intro"><strong>b) Eine abgesagte Tour 1982 als erstes sichtbares Zeichen:</strong>
        Erst als sich ihr Zustand so weit verschlechterte, dass ein Weitermachen unmöglich
        wurde, sagte sie eine geplante Tournee ab – ein seltener, öffentlich sichtbarer Bruch in
        einer ansonsten makellos durchgehaltenen Arbeitsdisziplin.</p>
        <p class="vb-intro"><strong>c) Diagnose Endometriose:</strong>
        Die Ursache der Beschwerden wurde schließlich als Endometriose identifiziert – eine
        chronische, oft sehr schmerzhafte Erkrankung, bei der sich gebärmutterschleimhautähnliches
        Gewebe außerhalb der Gebärmutter ansiedelt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Teilhysterektomie 1985 im Alter von 36 Jahren:</strong>
        Um die gynäkologischen Probleme zu behandeln, unterzog sich Parton mit 36 Jahren einer
        Teilhysterektomie – ein eingreifender Schritt, den sie zu diesem Zeitpunkt noch weitgehend
        aus der Öffentlichkeit heraushielt.</p>
        <p class="vb-intro"><strong>b) Ungewollte Kinderlosigkeit als Folge:</strong>
        Sie und ihr Mann Carl Dean hatten sich früh in der Ehe Kinder gewünscht und trafen keine
        Verhütungsmaßnahmen, hatten sogar schon Namen ausgesucht – doch es kam nie zu einer
        ausgetragenen Schwangerschaft. Die Hysterektomie beendete diese Möglichkeit endgültig.
        Parton äußerte sich später wiederholt bewegt zu diesem Thema, ordnete es aber meist rasch
        in eine positive Erzählung ein – etwa als Grund, warum sie sich seither wie eine „Patin
        aller Kinder" ihrer erweiterten Familie und der Öffentlichkeit fühle.</p>
        <p class="vb-intro"><strong>c) Eine schwere depressive Phase danach:</strong>
        Parton sprach Jahre später offen darüber, dass die Operation eine „wirklich schlimme
        Zeit" für sie war und sie in eine Depression stürzte – eine seltene Einlassung hinter die
        sonst so makellos gepflegte Fassade.</p>
        <p class="vb-intro"><strong>d) Weiterarbeit trotz gesundheitlicher Einschränkungen:</strong>
        Schon kurz nach der schwersten Krise kehrte sie ins Rampenlicht zurück – Musik, Film,
        Fernsehen liefen nahezu ohne sichtbare Unterbrechung weiter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Wiederkehrende Nierensteine und weitere Krankenhausaufenthalte:</strong>
        Über die folgenden Jahrzehnte kam es wiederholt zu gesundheitlichen Krisen, darunter
        schmerzhafte Nierensteine, die Parton offen thematisierte, sobald sie einmal öffentlich
        geworden waren.</p>
        <p class="vb-intro"><strong>b) Verschobene, dann endgültig abgesagte Las-Vegas-Residency:</strong>
        Eine für 2025 geplante Konzertreihe in Las Vegas wurde zunächst wegen „gesundheitlicher
        Herausforderungen" auf September 2026 verschoben und schließlich im Mai 2026 ganz
        abgesagt.</p>
        <p class="vb-intro"><strong>c) Dehydrierung und Schwindel als letzte öffentliche Erklärung:</strong>
        Per Videoschalte aus Nashville erklärte Parton, ihr Arzt habe ihr wegen Dehydrierung und
        Schwindel von Reisen abgeraten – deshalb verpasste sie im August 2026 sogar die
        Eröffnung der neuen Achterbahn „NightFlight Expedition" in ihrem eigenen Freizeitpark
        Dollywood.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Jahrzehntelanges Strahlen über einer verborgenen Krankengeschichte:</strong>
        Zwischen der Diagnose Anfang der 1980er-Jahre und den letzten Lebensmonaten liegen über
        vierzig Jahre, in denen Partons öffentliches Bild fast ausschließlich von Glanz, Humor
        und Energie geprägt blieb – die gesundheitliche Vorgeschichte blieb weitgehend im
        Hintergrund.</p>
        <p class="vb-intro"><strong>b) Ein später Tod ihres Mannes als Wendepunkt:</strong>
        Nach dem Tod ihres Mannes Carl Dean im März 2025 räumte Parton öffentlich ein, während
        der Pflegezeit die eigene Gesundheit vernachlässigt zu haben – einer der wenigen Momente,
        in denen sie die eigene Verletzlichkeit direkt benannte, statt sie zu überspielen.</p>
        <p class="vb-intro"><strong>c) Krebsdiagnose und rascher Verlauf:</strong>
        Nach Angaben ihres Umfelds erlag Parton am 25. August 2026 einer kurz zuvor
        diagnostizierten Krebserkrankung – ein Verlauf, der öffentlich kaum Zeit ließ, sich auf
        das Ausmaß der Erkrankung einzustellen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Präsenz aufrechterhalten, koste es, was es wolle:</strong>
        Die SX3-typische Überzeugung, dass Präsenz und Wirkung nach außen aufrechterhalten
        werden müssen, zeigte sich bis in die letzten Lebensmonate: Selbst gesundheitliche
        Absagen wurden mit Humor, Herzlichkeit und einer gepflegten Bühnenfigur verkündet, nie
        mit sichtbarer Verzweiflung.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel und die seltenen Momente echter Offenheit:</strong>
        Dieselbe emotionale Tiefe, die ihr Songwriting seit Jahrzehnten prägte, zeigte sich auch
        im Umgang mit der eigenen Krankheit: selten, aber wenn, dann mit ungewöhnlicher
        Direktheit – etwa beim Eingeständnis der Depression nach der Hysterektomie oder der
        vernachlässigten eigenen Gesundheit während der Pflege ihres Mannes.</p>
        <p class="vb-intro"><strong>c) Kontrolle über das eigene Bild bis zuletzt:</strong>
        Auch die letzten öffentlichen Gesundheitsupdates erfolgten in ihren eigenen Worten, in
        ihrem eigenen Ton – keine unautorisierten Enthüllungen, sondern eine bis zuletzt selbst
        gesteuerte Kommunikation, ganz im Sinne einer SX3, die die eigene Wirkung nie aus der
        Hand gibt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die exakt am Ort der bühnentauglichen Weiblichkeit ansetzte:</strong>
        Partons gesamte öffentliche Figur baute auf einer betont weiblichen, körperbetonten
        Inszenierung auf. Ausgerechnet eine gynäkologische Erkrankung, die diesen körperlichen
        Kern unmittelbar betraf, wurde zur jahrzehntelangen, meist verschwiegenen Begleiterin
        ihrer Karriere.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>Eine auffällige Parallele im selben Subtyp – Marilyn Monroe:</strong>
        Bemerkenswert ist, dass mit <a href="javascript:void(0)" data-route="krankheitsportraets-marilyn-monroe">Marilyn Monroe (ebenfalls SX3w4)</a>
        eine weitere Persönlichkeit in diesem Kompass vertreten ist, deren jahrelang hinter dem
        makellosen Image verborgene Krankheit exakt dieselbe Diagnose trägt: Endometriose. Zwei
        sexuelle Dreier mit Viererflügel, zwei durch Ausstrahlung und Weiblichkeit geprägte
        öffentliche Figuren, zwei Frauen, die dieselbe schmerzhafte gynäkologische Erkrankung
        über Jahre lang hinter einer makellos gepflegten Bühnenpräsenz verbargen. Auch die Folge
        ist bei beiden dieselbe: ungewollte Kinderlosigkeit – bei Monroe durch mindestens drei
        dokumentierte Fehlgeburten, bei Parton durch die 1985 vorgenommene Teilhysterektomie. Der
        Unterschied liegt im Ausgang: Während Monroes Geschichte 1962 abrupt und jung endete,
        lebte und arbeitete Parton noch weitere vier Jahrzehnte mit den Folgen ihrer Diagnose
        weiter, bevor eine andere Erkrankung am Ende ihres Lebens stand.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet der Unterleib, bei einer Frau, deren gesamtes Image auf Weiblichkeit baut?</strong>
        Für eine sexuelle Drei mit Viererflügel, deren beruflicher Kern die bewusst
        inszenierte, betont weibliche Präsenz ist, liegt eine Deutung nahe: Ausgerechnet jener
        Körperbereich, der ihre öffentliche Identität am unmittelbarsten trägt, wurde zum
        Schauplatz einer jahrzehntelangen, meist verschwiegenen Belastung. Diese Deutung ist eine
        plausible Interpretation, kein belegter medizinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Drei zwangsläufig zu gynäkologischen
        Erkrankungen oder Krebs führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Partons Fall zeigen lässt, ist ein Muster im
        Umgang mit einer über Jahrzehnte verschwiegenen körperlichen Belastung, das bei einer
        ausgeprägten sexuellen Drei mit Viererflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass
        nach und nach im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Parton ihr eigenes Enneagramm-Muster je bewusst kannte –
        wie die meisten Menschen kannte sie das System vermutlich gar nicht. Sie lebte die
        Leidenschaft der Drei, die Täuschung durch permanente Selbstinszenierung, über
        Jahrzehnte ungebremst aus: Schmerzen, Operationen und spätere Erschöpfung wurden hinter
        Humor und einer makellos gepflegten Bühnenfigur verborgen, statt als wiederkehrendes
        Muster erkannt und rechtzeitig ernst genommen zu werden. Erst der Tod ihres Mannes 2025
        brachte sie dazu, öffentlich einzuräumen, die eigene Gesundheit über Jahre
        vernachlässigt zu haben – zu einem Zeitpunkt, an dem der eigene Körper bereits erschöpft
        war.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Partons</strong> sexuelle Drei mit
        Viererflügel noch einmal ablesen: eine Karriere, die über vierzig Jahre hinweg
        körperliche Krisen, Operationen und Erschöpfung hinter einer makellos strahlenden
        Bühnenfigur verbarg, und ein Lebensende, das erst kurz vor dem Tod öffentlich sichtbar
        wurde. Der Pfau, der sein Federkleid bis fast zuletzt entfaltete – und dessen stillste,
        verletzlichste Momente erst dann sichtbar wurden, als das Rad sich nicht mehr schlagen
        ließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-dolly-parton", label:"Porträt: Dolly Parton (SX3w4) – Lebenswerk"},
        {route:"krankheitsportraets-marilyn-monroe", label:"Krankheitsporträt: Marilyn Monroe (SX3w4)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx3", label:"Subtyp-Profil SX3"},
      ])}
    </div>
  `);
}

function romySchneiderKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-romy-schneider-portrait.jpg" alt="Romy Schneider" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Romy Schneider</p>
        <p class="krim-portrait-typ">SO4w3 · Sozialer Typ 4 mit Dreierflügel · 1938–1982</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Romy Schneider</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-romy-schneider">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine
        schwere Nierenoperation, jahrelanger, zuletzt außer Kontrolle geratener Alkohol- und
        Tablettenkonsum, der Suizid ihres ersten Mannes 1979, der tragische Tod ihres Sohnes
        David 1981 – und ihr eigener, bis heute nicht restlos geklärter Tod 1982 im Alter von
        nur 43 Jahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schneider</strong> ist dem <strong>sozialen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SO4 trägt den Schmerz der Vier in die soziale Dimension – Scham, das
        tiefe Gefühl, nicht gut genug für die Welt zu sein, in der man lebt. Der Dreierflügel
        treibt zugleich unaufhörlich zu Leistung und öffentlicher Präsenz. Genau dieser
        Widerspruch – die Bühne brauchen und an ihr zugrunde gehen – bestimmte auch ihren
        letzten Lebensabschnitt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine schwere Nierenoperation:</strong>
        Schneider musste sich einer ernsten Nierenoperation unterziehen, von der sie sich nach
        Einschätzung von Weggefährten nie vollständig erholte – ein körperlicher Einschnitt, der
        ihre ohnehin fragile Konstitution weiter schwächte.</p>
        <p class="vb-intro"><strong>b) Der Suizid ihres ersten Mannes 1979:</strong>
        Ihr erster Ehemann, der Regisseur Harry Meyen und Vater ihres Sohnes David, nahm sich am
        15. April 1979 in Hamburg das Leben – ein Verlust, der Schneider tief erschütterte, noch
        bevor die eigentliche Tragödie ihres Lebens folgen sollte.</p>
        <p class="vb-intro"><strong>c) Jahrelange, zunehmend unkontrollierte Diäten, Alkohol- und Tablettenkonsum:</strong>
        Bereits vor den großen Verlusten der letzten Lebensjahre begleiteten strenge Diäten,
        Alkohol und Beruhigungsmittel Schneiders Alltag über zwei Jahrzehnte hinweg – ein
        Muster, das sich in den letzten Jahren zunehmend verschärfte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Tod ihres Sohnes David am 5. Juli 1981:</strong>
        Der vierzehnjährige David verletzte sich beim Klettern über einen spitzen Zaun am Haus
        von Schneiders Lebensgefährten tödlich und starb an den Folgen einer Operation zur
        Behebung der inneren Verletzungen – ein Schlag, von dem sich Schneider öffentlich sichtbar
        nie wieder erholte.</p>
        <p class="vb-intro"><strong>b) Eskalierender Alkoholkonsum als Betäubung:</strong>
        Nach Davids Tod trank Schneider nach übereinstimmenden Berichten aus ihrem Umfeld stark,
        offenkundig in dem Versuch, den Schmerz über den Verlust zu betäuben – bei mehreren
        Dreharbeiten in dieser Zeit erschien sie alkoholisiert oder blieb den Sets ganz fern.</p>
        <p class="vb-intro"><strong>c) Weiterarbeit trotz sichtbaren Zusammenbruchs:</strong>
        Statt sich zurückzuziehen, arbeitete Schneider auch in dieser Zeit weiter vor der Kamera
        – ihr letzter Film, <em>La Passante du Sans-Souci</em>, entstand kurz vor ihrem Tod, mit
        einer Rolle, die ihre eigene Erschöpfung kaum noch verbergen konnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Gefunden am Schreibtisch, in der Nacht zum 29. Mai 1982:</strong>
        Ihr damaliger Lebensgefährte, der Filmproduzent Laurent Pétin, fand Schneider frühmorgens
        zusammengebrochen an ihrem Schreibtisch in ihrer Pariser Wohnung – neben ihr ein
        unvollendeter, handschriftlicher Brief.</p>
        <p class="vb-intro"><strong>b) Offizielle Todesursache Herzversagen, keine Obduktion:</strong>
        Als offizielle Todesursache wurde Herzversagen festgestellt; eine Obduktion fand nicht
        statt – ein Umstand, der bis heute Spekulationen über die genauen Umstände ihres Todes
        nährt, darunter auch die nie belegte Vermutung eines Suizids durch Tabletten.</p>
        <p class="vb-intro"><strong>c) Ein Geflecht mehrerer erschöpfender Faktoren:</strong>
        Biografen beschreiben ihren Tod übereinstimmend als Ergebnis mehrerer zusammenwirkender
        Belastungen: der Schmerz über David, die Folgen der Nierenoperation, zwei Jahrzehnte
        strenger Diäten sowie Alkohol- und Tablettenkonsum – keine einzelne Ursache, sondern ein
        Körper, der sich nach Jahren der Überforderung erschöpft zurückzog.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentliches Bild, das den privaten Zerfall lange überstrahlte:</strong>
        Für das Publikum blieb Schneider bis zuletzt der glanzvolle europäische Filmstar – die
        wachsende private Krise wurde erst nach ihrem Tod in ihrer vollen Tragweite sichtbar.</p>
        <p class="vb-intro"><strong>b) Nur zehneinhalb Monate zwischen den beiden Todesfällen:</strong>
        Zwischen Davids Tod im Juli 1981 und Romy Schneiders eigenem Tod im Mai 1982 lagen keine
        elf Monate – eine so kurze Zeitspanne, dass die Öffentlichkeit den Zusammenhang zwischen
        beiden Ereignissen kaum übersehen konnte.</p>
        <p class="vb-intro"><strong>c) Ein bis heute nachwirkender Mythos:</strong>
        Die ungeklärten Umstände ihres Todes – keine Obduktion, ein unvollendeter Brief, Jahre
        der öffentlich sichtbaren Erschöpfung – haben Romy Schneiders letzte Lebensjahre zu einem
        der meistdiskutierten Kapitel der europäischen Filmgeschichte gemacht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Gürteltier, das sich nach außen weiter zeigte, während es innen zusammenbrach:</strong>
        Die SO4-typische Scham – das Gefühl, der eigenen Rolle und den Erwartungen anderer nicht
        zu genügen – ließ Schneider auch im tiefsten privaten Schmerz weiter vor der Kamera
        erscheinen, statt sich offen zurückzuziehen.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die Unfähigkeit, die Bühne loszulassen:</strong>
        Derselbe Antrieb, der ihre Karriere über Jahrzehnte trug – Leistung, Professionalität,
        das Bedürfnis, gebraucht zu werden –, ließ sie auch dann noch drehen, als ihr Körper und
        ihre Psyche längst erschöpft waren.</p>
        <p class="vb-intro"><strong>c) Betäubung statt sichtbarer Verzweiflung:</strong>
        Statt öffentlich zusammenzubrechen, betäubte sie den Schmerz mit Alkohol und
        Tabletten – eine stille, nach innen gerichtete Bewältigungsstrategie, die dem
        Rückzugsmuster des Gürteltiers entspricht: sich einrollen, statt sich zu zeigen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Panzer, der zuletzt nur noch nach außen hielt:</strong>
        Schneiders gesamtes öffentliches Bild beruhte auf einer makellosen, glanzvollen Fassade
        – genau diese Fassade hielt bis fast zuletzt, während sich dahinter über Jahre eine
        körperliche und seelische Erschöpfung aufbaute, die niemand von außen ganz ermessen
        konnte.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>Eine auffällige Parallele im selben Subtyp – Michael Jackson:</strong>
        Bemerkenswert ist, dass mit <a href="javascript:void(0)" data-route="krankheitsportraets-michael-jackson">Michael Jackson (ebenfalls SO4w3)</a>
        eine weitere Persönlichkeit in diesem Kompass vertreten ist, deren Krankengeschichte
        auffällig ähnlich verläuft: beide sozialen Vierer mit Dreierflügel, beide mit einer
        über Jahre gepflegten öffentlichen Fassade aus Leistung und Perfektion, beide mit einer
        wachsenden Abhängigkeit von Substanzen – bei Jackson Schmerz- und Schlafmittel, bei
        Schneider Alkohol und Tabletten –, die den unerträglichen inneren Schmerz betäuben
        sollten, statt ihn sichtbar zu machen. Und beide starben in einem medizinisch nie ganz
        eindeutig geklärten Zusammenhang aus genau dieser Selbstmedikation heraus.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet das Herz, bei einer Frau, deren ganzes Leben dem Fühlen gewidmet war?</strong>
        Für eine soziale Vier, deren gesamtes künstlerisches Werk auf der Fähigkeit beruhte,
        Gefühl ungefiltert zuzulassen und zu zeigen, liegt eine Deutung nahe: Ausgerechnet jenes
        Organ, das im Enneagramm für das Herzzentrum und die emotionale Tiefe steht, wurde zum
        Schauplatz des endgültigen Zusammenbruchs, nachdem es über Jahrzehnte mehr Gefühl
        getragen hatte, als ein Mensch verarbeiten kann. Diese Deutung ist eine plausible
        Interpretation, kein belegter medizinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier zwangsläufig zu Herzversagen oder
        Suchterkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Schneiders Fall zeigen lässt, ist ein Muster im Umgang
        mit unbewältigtem Verlust, das bei einer ausgeprägten sozialen Vier mit Dreierflügel
        immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Schneider ihr eigenes Enneagramm-Muster je bewusst kannte
        – das System war zu ihren Lebzeiten noch kaum verbreitet. Sie lebte die Scham und den
        Neid der Vier über Jahrzehnte ungebremst aus: Statt den eigenen Schmerz früh
        anzuerkennen und sich Hilfe zu holen, hielt sie an der öffentlichen Fassade fest und
        betäubte das, was dahinter lag. Wer die eigene Wunde nicht als wiederkehrendes Muster
        erkennt, kann ihr auch nicht rechtzeitig begegnen, wenn gleich zwei existenzielle
        Verluste – der Vater ihres Sohnes 1979, ihr Sohn selbst 1981 – kurz hintereinander
        eintreffen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Ende ihres Lebens lässt sich <strong>Romy Schneiders</strong> soziale Vier mit
        Dreierflügel noch einmal ablesen: eine Frau, die bis zuletzt vor der Kamera stand,
        während sie innerlich unter dem Gewicht zweier existenzieller Verluste zusammenbrach,
        und deren Tod – ungeklärt, ohne Obduktion, mit einem unvollendeten Brief neben sich –
        selbst zu einem letzten, offen gebliebenen Kapitel ihrer Geschichte wurde. Das
        Gürteltier, das sich der Welt bis zum letzten Dreh zeigte – und sich dann, ganz allein,
        endgültig einrollte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-romy-schneider", label:"Porträt: Romy Schneider (SO4w3) – Lebenswerk"},
        {route:"krankheitsportraets-michael-jackson", label:"Krankheitsporträt: Michael Jackson (SO4w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

function yayoiKusamaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-yayoi-kusama-portrait.jpg" alt="Yayoi Kusama" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Yayoi Kusama</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · 1929–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Yayoi Kusama</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-yayoi-kusama">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen, mit einem kurzen Verweis auf ihr Leben in der psychiatrischen Klinik. Diese
        Seite vertieft dieses Kapitel: eine seit früher Kindheit bestehende psychische
        Erkrankung mit Halluzinationen und Depersonalisation, eine belastete Kindheit, mehrere
        Suizidversuche und ein bis zu ihrem Tod im August 2026 andauerndes Leben in einer
        psychiatrischen Klinik seit 1977.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kusama</strong> ist dem <strong>selbsterhaltenden Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SE2 richtet die Fürsorge-Energie der Zwei zuerst auf das eigene
        Überleben; der Dreierflügel bringt den unbedingten Willen hinzu, aus der eigenen Not
        heraus sichtbar zu werden und etwas zu leisten. Genau diese Kombination – die eigene
        psychische Erkrankung nicht zu verstecken, sondern sie zur Grundlage eines
        welterfolgreichen Lebenswerks zu machen – bestimmte bis zuletzt ihren Umgang mit der
        eigenen Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Halluzinationen bereits im Vorschulalter:</strong>
        Kusama berichtete, bereits als kleines Kind visuelle und akustische Halluzinationen
        erlebt zu haben – Blumenmuster, die zu ihr sprachen, endlose Netze aus Punkten, die sich
        über ihr gesamtes Blickfeld legten.</p>
        <p class="vb-intro"><strong>b) Eine belastete, lieblose Kindheit:</strong>
        Ihre Mutter, aus einer wohlhabenden Familie in Matsumoto, riss Kusamas frühe Zeichnungen
        wiederholt in Stücke und schickte das Kind wiederholt los, um den untreuen Vater bei
        seinen Affären auszuspionieren – ein familiäres Umfeld, das der jungen Kusama kaum Halt
        bot.</p>
        <p class="vb-intro"><strong>c) Zeichnen als erste, spontane Reaktion:</strong>
        Statt an den Visionen zu zerbrechen, begann Kusama bereits als Kind, diese
        Halluzinationen zeichnerisch festzuhalten – ein Verhalten, das sie selbst später als
        <em>Selbstauslöschung</em> bezeichnete: sich selbst so lange wiederholend in das eigene
        Muster einzuzeichnen, bis die Angst vor der Auflösung nachließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Diagnose einer Zwangsneurose:</strong>
        Kusama wurde mit einer obsessiv-zwanghaften Störung diagnostiziert; nach eigener
        Aussage lehnte sie die häufig kolportierte Fremdzuschreibung einer manisch-depressiven
        Psychose ab und führte ihre Symptome unter anderem auf eine Schilddrüsenerkrankung
        zurück.</p>
        <p class="vb-intro"><strong>b) Depersonalisation als zusätzliches Symptom:</strong>
        Neben den Halluzinationen litt Kusama an einer Depersonalisationsstörung (japanisch
        <em>rijinshō</em>, wörtlich „Getrennt-Person-Symptom") – dem Gefühl, sich selbst und die
        eigene Umgebung als fremd, unwirklich oder aufgelöst wahrzunehmen.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes künstlerisches Arbeiten trotz akuter Symptome:</strong>
        Auch in New York, wo sie ab 1958 mittellos und ohne Englischkenntnisse lebte, produzierte
        sie trotz wiederkehrender psychischer Krisen ein enormes Werk – Malerei, Skulptur,
        Happenings, Mode – als arbeite sie gegen die eigene Auflösung an.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Mehrere Suizidversuche in den frühen 1970er-Jahren:</strong>
        Nach Jahren extremer künstlerischer wie finanzieller Belastung in New York und dem
        wachsenden Gefühl kommerziellen Scheiterns unternahm Kusama mehrere Suizidversuche, bevor
        sie sich zur Rückkehr nach Japan entschloss.</p>
        <p class="vb-intro"><strong>b) Rückkehr nach Japan 1973, körperlich und psychisch erschöpft:</strong>
        Kusama kehrte 1973 erschöpft und gesundheitlich angeschlagen nach Japan zurück – eine
        Rückkehr, die zunächst weniger einem Neuanfang als einem Rückzug aus einem Leben glich,
        das sie fast zerstört hätte.</p>
        <p class="vb-intro"><strong>c) Freiwillige Einweisung in die Psychiatrie 1977:</strong>
        1977 ließ sich Kusama freiwillig in das Seiwa-Krankenhaus für psychisch Kranke in Tokio
        einweisen – eine bewusste Entscheidung für einen schützenden Rahmen statt für ein Leben
        in unkontrollierter Krise.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Fast fünfzig Jahre in freiwilliger stationärer Behandlung:</strong>
        Kusama lebte bis zu ihrem Tod im August 2026, im Alter von 97 Jahren, in derselben
        psychiatrischen Klinik – eine der längsten bekannten freiwilligen psychiatrischen
        Aufenthaltszeiten einer international bekannten Künstlerpersönlichkeit.</p>
        <p class="vb-intro"><strong>b) Tägliche Arbeit trotz und mit der Erkrankung:</strong>
        Von der Klinik aus ging Kusama bis zuletzt fast täglich zu Fuß in ihr nahegelegenes
        Atelier, um zu arbeiten – die Krankheit hat ihr Schaffen nie beendet, sondern wurde zu
        dessen strukturierendem Rahmen.</p>
        <p class="vb-intro"><strong>c) Offener Umgang statt Verschweigen:</strong>
        Anders als viele andere Porträts in diesem Kompass zeigt Kusamas Fall eine Person, die
        ihre psychische Erkrankung nicht über Jahrzehnte verbirgt, sondern öffentlich benennt und
        explizit zum Ausgangspunkt ihres künstlerischen Werks erklärt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Flusspferd, das sein Element nie verlassen hat:</strong>
        So wie das Flusspferd ohne ständigen Wasserkontakt nicht bestehen kann, beschreibt
        Kusama das Malen selbst als überlebensnotwendig – kein künstlerisches Konzept, sondern
        die einzige Bedingung, unter der sie psychisch bestehen kann.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und der Wille, die eigene Krankheit sichtbar zu machen:</strong>
        Statt die Erkrankung zu verstecken, verwandelte der Dreierflügel sie in ein öffentlich
        kommuniziertes, welterfolgreiches künstlerisches Programm – die begehbaren <em>Infinity
        Mirror Rooms</em> lassen Millionen Besucher für wenige Minuten genau jene Erfahrung der
        Auflösung nachempfinden, die Kusama selbst ihr ganzes Leben begleitet.</p>
        <p class="vb-intro"><strong>c) Selbstfürsorge durch bewusst gewählte Struktur:</strong>
        Die freiwillige Einweisung 1977 ist reine SE2-Logik: Statt weiter unkontrolliert der
        eigenen Fragilität ausgeliefert zu sein, wählte Kusama aktiv einen schützenden Rahmen, in
        dem Fürsorge für sich selbst überhaupt erst möglich wurde.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die zur Sprache des Werks selbst wurde:</strong>
        Bei kaum einer anderen Person in diesem Kompass verschmelzen Krankheit und Werk so
        vollständig: Die endlosen Punktmuster, für die Kusama weltberühmt ist, sind keine
        nachträgliche künstlerische Interpretation ihrer Halluzinationen, sondern deren direkte,
        unveränderte Wiedergabe.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>Eine auffällige Parallele im selben Subtyp – Frida Kahlo:</strong>
        Bemerkenswert ist, dass mit <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Frida Kahlo (ebenfalls SE2w3)</a>
        eine weitere Persönlichkeit in diesem Kompass vertreten ist, deren Lebensgeschichte ein
        fast identisches Grundmuster zeigt: eine selbsterhaltende Zwei mit Dreierflügel, deren
        Kunst nicht trotz, sondern direkt aus einer schweren, lebenslangen körperlichen bzw.
        psychischen Belastung entsteht – bei Kahlo aus chronischen Unfallfolgen und Schmerz, bei
        Kusama aus Halluzinationen und Depersonalisation. Beide machten das eigene Leiden nicht
        zum Geheimnis, sondern explizit zum Bildmotiv, und beide erreichten damit Weltruhm, der
        gerade auf dieser schonungslosen Offenheit beruht.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet die Wahrnehmung selbst, bei einer Künstlerin, deren Beruf das Sehen ist?</strong>
        Für eine selbsterhaltende Zwei mit Dreierflügel, deren gesamtes künstlerisches
        Überleben davon abhängt, das eigene Innenleben in sichtbare Form zu übersetzen, liegt
        eine Deutung nahe: Ausgerechnet die Wahrnehmung selbst – das Sehen, das Erkennen der
        Grenze zwischen dem eigenen Körper und der Welt – wurde bei Kusama zum Ort der
        Erkrankung. Diese Deutung ist eine plausible Interpretation, kein belegter medizinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        Halluzinationen oder Depersonalisation führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Kusamas Fall zeigen lässt, ist ein
        Muster im Umgang mit einer lebenslangen psychischen Erkrankung, das bei einer
        ausgeprägten selbsterhaltenden Zwei mit Dreierflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Kusama ihr eigenes Enneagramm-Muster je bewusst kannte.
        Dennoch zeigt gerade ihr Fall eine seltene Ausnahme innerhalb dieses Musters: Statt die
        eigene Notlage über Jahrzehnte zu verdrängen oder zu verstecken, wie es viele andere
        SE2w3-Porträts in diesem Kompass zeigen, machte sie die Erkrankung selbst sehr früh zum
        offenen Zentrum ihres Handelns. Das ersetzt kein bewusstes Wissen um das eigene
        Enneagramm-Muster – aber es zeigt, dass der selbsterhaltende Instinkt der Zwei, richtig
        genutzt, auch zu einer außergewöhnlich klarsichtigen Form der Selbstfürsorge führen
        kann.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Kusamas</strong> selbsterhaltende Zwei mit
        Dreierflügel noch einmal ablesen: eine seit der Kindheit bestehende psychische
        Erkrankung, die sie weder verschwiegen noch sich von ihr zerstören ließ, sondern in ein
        bis zuletzt weitergeführtes, welterfolgreiches Werk verwandelte. Kusama starb am 14.
        August 2026 im Alter von 97 Jahren – fast fünfzig Jahre nach ihrer freiwilligen
        Einweisung, in derselben Klinik, aus der heraus sie bis zuletzt in ihr Atelier ging. Das
        Flusspferd, das sein Wasser nie verlassen hat – und gerade darin zu einer der
        einflussreichsten Stimmen der zeitgenössischen Kunst wurde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-yayoi-kusama", label:"Porträt: Yayoi Kusama (SE2w3) – Lebenswerk"},
        {route:"krankheitsportraets-frida-kahlo", label:"Krankheitsporträt: Frida Kahlo (SE2w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

function michaelSchumacherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-michael-schumacher-portrait.jpg" alt="Michael Schumacher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Schumacher</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel · geb. 1969</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Michael Schumacher</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-michael-schumacher">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als siebenmaliger
        Formel-1-Weltmeister und seine Typstruktur im Allgemeinen, mit einem kurzen Verweis auf
        den Skiunfall 2013. Diese Seite vertieft dieses Kapitel: ein schweres
        Schädel-Hirn-Trauma, mehrere Notoperationen, monatelanges künstliches Koma – und eine
        seither beispiellos konsequente, von der Familie durchgesetzte vollständige
        Abschottung der Öffentlichkeit von seinem Gesundheitszustand.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schumacher</strong> ist dem <strong>sexuellen Typ 6 mit Siebenerflügel</strong>
        zugeordnet. Als Kontratyp der Sechs begegnet die SX6 der eigenen Angst nicht mit
        Rückzug, sondern mit Angriff – Sicherheit entsteht durch das Dominieren der Gefahr,
        nicht durch ihre Vermeidung. Genau dieses Muster – Kontrolle über die Bedrohung
        gewinnen, notfalls durch vollständige Abschottung – bestimmt bis heute den Umgang
        seines engsten Umfelds mit seiner Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Sturz am 29. Dezember 2013:</strong>
        Schumacher fuhr beim Skifahren im französischen Méribel mit seinem damals
        vierzehnjährigen Sohn Mick abseits der markierten Piste, verlor die Kontrolle und
        stürzte über Felsen – ein Unfall, der zunächst harmlos wirkte, sich aber innerhalb von
        Minuten als lebensbedrohlich herausstellte.</p>
        <p class="vb-intro"><strong>b) Ein Helm, der den Aufprall nicht vollständig abfangen konnte:</strong>
        Trotz Helms erlitt Schumacher beim Aufprall auf einen Felsen ein schweres
        Schädel-Hirn-Trauma – Berichten zufolge könnte eine am Helm befestigte Kamerahalterung
        zur Schwere der Verletzung beigetragen haben.</p>
        <p class="vb-intro"><strong>c) Sofortiger Transport in eine spezialisierte Klinik:</strong>
        Schumacher wurde umgehend in das auf Schädel-Hirn-Traumata spezialisierte
        Universitätsklinikum Grenoble gebracht, wo eine neurochirurgische Notbehandlung
        eingeleitet wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Mehrere Notoperationen zur Druckentlastung:</strong>
        Die behandelnden Ärzte Jean-François Payen und Stephan Chabardes entfernten in
        mehreren Eingriffen ein Hämatom und arbeiteten primär daran, den lebensgefährlichen
        Hirndruck durch die entstandenen Einblutungen und Ödeme zu senken.</p>
        <p class="vb-intro"><strong>b) Monatelanges künstliches Koma:</strong>
        Um dem Gehirn die bestmögliche Erholung zu ermöglichen, wurde Schumacher über Wochen
        und Monate in einem künstlichen Koma gehalten – ein Zustand, der weit über die für
        Schädel-Hirn-Traumata übliche Dauer hinausging und den Ernst der Verletzung
        widerspiegelte.</p>
        <p class="vb-intro"><strong>c) Verlegung und Entlassung im Juni 2014:</strong>
        Erst im Juni 2014, rund ein halbes Jahr nach dem Unfall, wurde Schumacher aus der
        stationären Behandlung entlassen – zunächst in eine Spezialklinik in Lausanne, später
        in die häusliche Pflege im Kreis seiner Familie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Eine beispiellose mediale Abschottung:</strong>
        Seit seiner Entlassung 2014 hat die Familie – allen voran seine Frau Corinna – keine
        einzige medizinische Detailauskunft über seinen Gesundheitszustand öffentlich gemacht,
        eine Konsequenz, die in der Geschichte prominenter Krankheitsfälle ihresgleichen
        sucht.</p>
        <p class="vb-intro"><strong>b) Wenige, sorgfältig dosierte Lebenszeichen:</strong>
        Vereinzelte Aussagen aus dem engsten Umfeld – etwa Corinna Schumachers Satz „Er ist
        hier, er ist anders, aber er ist da" – sind über Jahre praktisch die einzigen
        öffentlichen Informationen geblieben, ergänzt durch knappe Bemerkungen von Bruder Ralf
        Schumacher oder Tochter Gina Maria.</p>
        <p class="vb-intro"><strong>c) Rechtliche Schritte gegen Spekulationen:</strong>
        Die Familie ging wiederholt juristisch gegen Medien vor, die unautorisierte Berichte,
        Fotos oder – in einem Fall 2023 – ein KI-generiertes Interview über seinen Zustand
        veröffentlichten, und setzte damit die Abschottung auch aktiv durch.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der öffentlichste Mensch des Motorsports wird zum unsichtbarsten:</strong>
        Kaum ein Kontrast könnte größer sein als der zwischen dem Schumacher, der jahrzehntelang
        im grellen Scheinwerferlicht der Formel 1 stand, und dem Mann, über den seit über zehn
        Jahren praktisch nichts mehr an die Öffentlichkeit dringt.</p>
        <p class="vb-intro"><strong>b) Spekulationen als Dauerzustand:</strong>
        Die vollständige Informationssperre hat über die Jahre ein anhaltendes mediales Vakuum
        geschaffen, das immer wieder durch unbestätigte Gerüchte – etwa über
        Stammzelltherapien in Paris – gefüllt wurde, ohne dass die Familie diese je bestätigte
        oder dementierte.</p>
        <p class="vb-intro"><strong>c) Ein Dokumentarfilm als einziger autorisierter Einblick:</strong>
        Die 2021 erschienene Netflix-Dokumentation „Schumacher" bot erstmals einen von der
        Familie autorisierten, aber weiterhin sehr zurückhaltenden Rückblick auf sein Leben –
        ohne aktuelle Bilder oder Informationen zu seinem gegenwärtigen Zustand zu zeigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Wolf, dessen Rudel jetzt für ihn kämpft:</strong>
        Die SX6-typische Strategie, Bedrohung durch Dominanz statt durch Rückzug zu begegnen,
        zeigt sich hier verschoben auf die Familie: Wo Schumacher selbst nicht mehr kämpfen
        kann, übernimmt sein engstes Umfeld exakt dieselbe kompromisslose Haltung – Kontrolle
        über die Bedrohung (in diesem Fall: die Öffentlichkeit) durch Härte statt durch
        Nachgeben.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und der Rückgriff auf das schönste Bild:</strong>
        Statt eines aktuellen, möglicherweise belastenden Bildes wählt sein Umfeld konsequent
        die Erinnerung an den siegreichen, lebendigen Schumacher – eine Haltung, die zur
        Fähigkeit des Siebenerflügels passt, selbst im Angesicht von Verlust an der Freude und
        am Licht festzuhalten, statt sich in der Schwere zu verlieren.</p>
        <p class="vb-intro"><strong>c) Absolute Konsequenz statt halber Maßnahmen:</strong>
        Wie schon in seiner aktiven Karriere kennt auch der Umgang mit seiner Krankheit keine
        halben Lösungen: keine teilweise Offenheit, kein gelegentliches Update, sondern eine
        vollständige, über ein Jahrzehnt konsequent durchgehaltene Abschottung – die SX6w7 in
        ihrer radikalsten, jetzt stellvertretend von der Familie gelebten Form.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Vom Kopf, der jede Kurve auswendig kannte, zum Kopf, der geschützt werden muss:</strong>
        Schumachers gesamte Karriere beruhte auf einem außergewöhnlich präzisen, hochtrainierten
        Kopf – Streckenkenntnis, Reaktionsgeschwindigkeit, taktisches Denken. Ausgerechnet
        dieses Organ wurde beim Sturz 2013 zum Ort der schwersten Verletzung.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet außerhalb der Piste, bei einem Mann, dessen ganzes Leben Risikokontrolle war?</strong>
        Für eine sexuelle Sechs, deren gesamtes Berufsleben aus der präzisen, hochtrainierten
        Kontrolle extremer Geschwindigkeit auf abgesperrten Rennstrecken bestand, liegt eine
        Deutung nahe: Der folgenschwere Unfall ereignete sich ausgerechnet in einem
        unkontrollierten, nicht abgesicherten Umfeld – abseits der Piste, ohne die Sicherheitsnetze
        eines Formel-1-Cockpits. Diese Deutung ist eine plausible Interpretation, kein belegter
        medizinischer oder biografischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu schweren Unfällen
        führt – <strong>jeder Mensch kann jeden Unfall erleiden und jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Schumachers Fall zeigen lässt, ist ein
        Muster im Umgang mit einer plötzlichen, existenziellen Krise, das bei einer
        ausgeprägten sexuellen Sechs mit Siebenerflügel und ihrem engsten Umfeld immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Schumacher oder seine Familie sein Enneagramm-Muster je
        bewusst kannten. Dennoch lässt sich an seinem Fall ablesen, wie tief das
        SX6-typische Prinzip „Sicherheit durch Kontrolle der Bedrohung" auch nach der
        Katastrophe fortwirkt – nicht mehr im Cockpit, sondern in der radikalen, bis heute
        durchgehaltenen Kontrolle darüber, was die Welt über ihn erfahren darf. Wer sein Leben
        lang gelernt hat, Gefahr durch Dominanz zu begegnen, überträgt dieses Muster auch dann,
        wenn die Gefahr nicht mehr die Rennstrecke, sondern die Öffentlichkeit selbst ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Schumachers</strong> sexuelle Sechs mit
        Siebenerflügel noch einmal ablesen: eine plötzliche, existenzielle Bedrohung, der mit
        derselben Kompromisslosigkeit begegnet wird, die einst seine Karriere prägte – nur dass
        die Kontrolle jetzt nicht mehr ihm selbst gehört, sondern von seinem Rudel
        stellvertretend ausgeübt wird. Der Wolf, der einst das Tempo der ganzen Formel 1
        vorgab, wird seit über zehn Jahren von genau jenem Rudel geschützt, das er sich selbst
        aufgebaut hatte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-michael-schumacher", label:"Porträt: Michael Schumacher (SX6w7) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

function klausKinskiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-klaus-kinski-portrait.jpg" alt="Klaus Kinski" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Klaus Kinski</p>
        <p class="krim-portrait-typ">SX1w9 · Sexueller Typ 1 mit Neunerflügel · 1926–1991</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Klaus Kinski</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-klaus-kinski">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein schauspielerisches Lebenswerk und
        seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das dort nicht
        behandelt wird: eine 1950 dokumentierte psychiatrische Zwangseinweisung mit der
        vorläufigen Diagnose Schizophrenie, eine von Kriegsgefangenschaft und Armut geprägte
        Jugend, und die erst nach seinem Tod öffentlich gewordenen Missbrauchsvorwürfe seiner
        Tochter Pola.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kinski</strong> ist dem <strong>sexuellen Typ 1 mit Neunerflügel</strong>
        zugeordnet, dem Kontratyp der Eins. Naranjo nannte diesen Subtyp <em>Inbrunst</em>:
        eine ungefilterte, kompromisslose moralische Energie, die alle sozialen Filter
        durchbricht. Genau diese schrankenlose Intensität, verbunden mit der Beharrlichkeit
        des Neunerflügels, zieht sich als Muster durch seine gesamte, teils tragische
        Krankengeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine von extremer Armut geprägte Kindheit:</strong>
        Kinski wuchs, geboren 1926 als Nikolaus Günther Nakszyński in Danzig, in bitterer Armut
        auf – eine familiäre Notlage, die er später selbst als prägend für sein gesamtes Leben
        beschrieb.</p>
        <p class="vb-intro"><strong>b) Über ein Jahr Kriegsgefangenschaft:</strong>
        Nach seinem Kriegseinsatz geriet Kinski in britische Gefangenschaft und verbrachte
        rund sechzehn Monate in einem Gefangenenlager, bevor er 1946 nach Deutschland
        zurückkehren konnte.</p>
        <p class="vb-intro"><strong>c) Fristlose Kündigung wegen unberechenbaren Verhaltens:</strong>
        Am renommierten Schlosspark-Theater in Berlin engagiert, wurde Kinski bereits 1947
        wegen seines unvorhersehbaren, schwer kontrollierbaren Auftretens wieder entlassen –
        eines der ersten dokumentierten Anzeichen eines Musters, das sein gesamtes Berufsleben
        begleiten sollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zwangseinweisung am 5. September 1950:</strong>
        Der 26-jährige Kinski wurde nach einem Suizidversuch und einem Ausbruch, bei dem er die
        Küche eines Arztes verwüstete und versuchte, eine Ärztin zu würgen, von der Polizei in
        die Wittenauer Heilstätten in Berlin (im Volksmund „Bonnies Ranch") eingeliefert.</p>
        <p class="vb-intro"><strong>b) Vorläufige Diagnose Schizophrenie, später revidiert:</strong>
        Die Akte verzeichnet als vorläufige Diagnose Schizophrenie; die endgültige Einordnung
        lautete später auf Psychopathie – in heutiger Terminologie am ehesten vergleichbar mit
        einer dissozialen bzw. antisozialen Persönlichkeitsstörung.</p>
        <p class="vb-intro"><strong>c) Insulin-Behandlung und Entlassung nach drei Tagen:</strong>
        Kinski erhielt in der Klinik eine Insulinschock-Behandlung, damals ein gängiges,
        drastisches Mittel der Psychiatrie, und wurde auf eigenen Wunsch bereits nach drei
        Tagen wieder entlassen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Legendäre, oft gewalttätige Wutausbrüche am Set:</strong>
        Über Jahrzehnte hinweg war Kinski für seine Ausbrüche bei Dreharbeiten berüchtigt –
        Regisseure und Kollegen berichteten übereinstimmend von Momenten, in denen sein Zorn
        jede professionelle Kontrolle sprengte.</p>
        <p class="vb-intro"><strong>b) Ein öffentlich ausgetragener Konflikt mit Werner Herzog:</strong>
        Die Spannungen während der Dreharbeiten zu <em>Aguirre, der Zorn Gottes</em> und
        <em>Fitzcarraldo</em> eskalierten mehrfach so weit, dass Herzog später öffentlich von
        Morddrohungen berichtete – eine Beziehung, die von beiden Seiten als gleichermaßen
        zerstörerisch wie unverzichtbar beschrieben wurde.</p>
        <p class="vb-intro"><strong>c) Eine 1988 zurückgezogene, 1996 erneut veröffentlichte Autobiografie:</strong>
        Kinskis Autobiografie „Kinski Uncut" musste nach ihrem ersten Erscheinen wegen
        Verleumdungsklagen zurückgezogen werden und erschien erst nach seinem Tod erneut –
        ein Text von schonungsloser, oft verstörender Offenheit über sich selbst und andere.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Rechtsstreit um seine eigene Krankenakte:</strong>
        Erst 2008, siebzehn Jahre nach seinem Tod, wurde die psychiatrische Akte von 1950
        öffentlich bekannt, nachdem das zuständige Klinikarchiv historische Unterlagen
        freigegeben hatte – seine Witwe ging daraufhin juristisch gegen die Veröffentlichung
        vor.</p>
        <p class="vb-intro"><strong>b) Anklagen seiner Tochter nach seinem Tod:</strong>
        2013 veröffentlichte Kinskis Tochter Pola ein Buch, in dem sie ihm wiederholten
        sexuellen Missbrauch in ihrer Kindheit vorwarf – Vorwürfe, die posthum ein neues,
        erschütterndes Licht auf sein Privatleben warfen und bis heute Teil seiner
        öffentlichen Rezeption sind.</p>
        <p class="vb-intro"><strong>c) Ein Lebenswerk, das trotz allem Bestand hat:</strong>
        Trotz der Kontroversen um seine Person gelten seine Filme mit Werner Herzog bis heute
        als Meilensteine der Filmgeschichte – ein Werk, das sich nicht von der Person trennen
        lässt, die es hervorgebracht hat.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Mamba, die sich bedroht fühlt und zubeißt:</strong>
        Der Zusammenbruch 1950 – Suizidversuch, Zerstörungswut, der Versuch, eine Ärztin zu
        würgen – zeigt das Muster der sexuellen Eins in seiner ungefiltertsten, gefährlichsten
        Form: ein moralisch-emotionaler Druck, der keine soziale Bremse mehr findet und sich
        körperlich entlädt.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und das jahrzehntelange Festhalten am Muster:</strong>
        Dieselbe Beharrlichkeit, die ihn Jahrzehnte an Werner Herzog band, hielt ihn auch an
        seinem eigenen, sich immer wiederholenden Verhaltensmuster fest – Ausbrüche, die sich
        über ein ganzes Berufsleben in nahezu identischer Form wiederholten, statt sich mit
        der Zeit zu verändern.</p>
        <p class="vb-intro"><strong>c) Radikale Offenheit statt Verbergung – mit hohem Preis:</strong>
        Anders als viele andere Personen in diesem Kompass versteckte Kinski seine dunkelsten
        Seiten nicht – seine Autobiografie legt Grausames über sich selbst offen. Doch diese
        schonungslose Offenheit schützte weder ihn noch die Menschen in seinem Umfeld vor den
        Folgen seines Verhaltens.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Vom Zorn als moralischem Urteil zum Zorn als Zusammenbruch:</strong>
        Was in seinen Rollen und öffentlichen Auftritten oft als kontrollierte künstlerische
        Intensität erschien, zeigte sich 1950 in seiner reinsten, unkontrollierten Form – als
        akute psychische Krise, die in Gewalt gegen sich selbst und andere mündete.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet ein Zusammenbruch der Kontrolle, bei einem Mann, dessen ganzes Leben um Kontrolle über die eigene Wahrheit kreiste?</strong>
        Für eine sexuelle Eins, deren gesamtes Selbstverständnis auf der kompromisslosen
        Durchsetzung der eigenen moralischen und künstlerischen Standards beruhte, liegt eine
        Deutung nahe: Ausgerechnet der völlige Kontrollverlust – Suizidversuch, Zerstörung,
        körperliche Gewalt – bricht dort durch, wo die innere Anspannung keinen sozial
        akzeptierten Ausweg mehr findet. Diese Deutung ist eine plausible Interpretation, kein
        belegter medizinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins zwangsläufig zu psychiatrischen
        Krisen oder Gewaltverhalten führt – <strong>jeder Mensch kann jede psychische
        Erkrankung entwickeln, unabhängig vom Subtyp.</strong> Was sich an Kinskis Fall zeigen
        lässt, ist ein Muster im Umgang mit ungefilterter moralischer Intensität, das bei einer
        ausgeprägten sexuellen Eins immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil und keine Entschuldigung für sein Verhalten gegenüber anderen.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Kinski sein eigenes Enneagramm-Muster je bewusst kannte
        – das System war zu seinen Lebzeiten kaum verbreitet. Er lebte die Inbrunst und den
        Zorn der sexuellen Eins völlig ungebremst aus, von der psychiatrischen Krise 1950 bis
        zu den Ausbrüchen am Set Jahrzehnte später, ohne dass sich das Muster je grundlegend
        veränderte. Wer die eigene moralische Intensität nicht als wiederkehrendes Muster
        erkennt, kann ihr auch nicht rechtzeitig begegnen – mit Folgen, die weit über ihn
        selbst hinausreichten und, wie die späteren Vorwürfe seiner Tochter zeigen, auch
        andere Menschen schwer belasteten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch an seiner psychiatrischen Vorgeschichte lässt sich <strong>Kinskis</strong>
        sexuelle Eins mit Neunerflügel noch einmal ablesen: eine ungefilterte, kompromisslose
        Intensität, die 1950 in einem akuten Zusammenbruch gipfelte und sich über Jahrzehnte
        hinweg, kaum verändert, in seinem beruflichen wie privaten Leben fortsetzte. Die
        Schwarze Mamba, die nie gelernt hat, ihren Biss zurückzuhalten – mit einem
        Lebenswerk, das bis heute fasziniert, und einer Spur an Verletzungen, die bis heute
        nachwirkt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-klaus-kinski", label:"Porträt: Klaus Kinski (SX1w9) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}

function nataschaKampuschKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-natascha-kampusch-portrait.jpg" alt="Natascha Kampusch" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Natascha Kampusch</p>
        <p class="krim-portrait-typ">SE2w1 · Selbsterhaltender Typ 2 mit Einserflügel · geb. 1988</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Natascha Kampusch</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-natascha-kampusch">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihren Überlebensweg während der
        achtjährigen Gefangenschaft und ihre Typstruktur im Allgemeinen. Diese Seite vertieft ein
        Kapitel, das dort noch nicht behandelt wird: die posttraumatische Belastungsstörung als
        langfristige Folge, und ein schwerer psychischer Zusammenbruch, über den ihre Familie
        erst zwanzig Jahre nach ihrer Befreiung öffentlich sprach.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kampusch</strong> ist dem <strong>selbsterhaltenden Typ 2 mit Einserflügel</strong>
        zugeordnet. Die SE2 sichert unter Bedrohung ihr Überleben durch Anpassung an die
        emotionale Verfassung der mächtigeren Person; der Einserflügel bringt Disziplin und
        selbst auferlegte Struktur als inneren Halt hinzu. Genau dieses Muster – nach außen
        funktionieren, während im Inneren ein enormer Druck weiterwirkt – prägt auch den
        Verlauf ihrer psychischen Gesundheit weit über das Ende der Gefangenschaft hinaus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Acht Jahre extremer Isolation im Kindes- und Jugendalter:</strong>
        Kampusch wurde 1998 im Alter von zehn Jahren entführt und bis 2006 in einem etwa fünf
        Quadratmeter kleinen, fast luftdichten Kellerverlies gefangen gehalten – eine
        Extremsituation genau in den Jahren, die für die psychische Entwicklung eines Kindes
        entscheidend sind.</p>
        <p class="vb-intro"><strong>b) Der Suizid des Täters unmittelbar nach der Flucht:</strong>
        Am Tag ihrer Flucht, dem 23. August 2006, nahm sich ihr Entführer Wolfgang Priklopil das
        Leben – Kampusch verlor damit von einem Tag auf den anderen die einzige Bezugsperson,
        an deren emotionale Verfassung ihr eigenes Überleben acht Jahre lang gekoppelt gewesen
        war.</p>
        <p class="vb-intro"><strong>c) Ein sofortiger Medienrummel ohne Übergangszeit:</strong>
        Direkt nach der Befreiung sah sich Kampusch einem intensiven internationalen
        Medieninteresse ausgesetzt – ohne die Zeit und den geschützten Rahmen, den eine
        Verarbeitung eines derartigen Traumas eigentlich erfordert hätte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Posttraumatische Belastungsstörung als dokumentierte Diagnose:</strong>
        Zu den bekannten psychischen Folgen ihrer Gefangenschaft zählen eine posttraumatische
        Belastungsstörung, soziale Isolation sowie wiederkehrende Angstzustände und
        Depressionen.</p>
        <p class="vb-intro"><strong>b) Psychotherapie als kontinuierlicher Bestandteil ihres Lebens:</strong>
        Kampusch nahm nach ihrer Befreiung psychotherapeutische Begleitung in Anspruch – ein
        fortlaufender Prozess, der öffentlich kaum thematisiert wurde, während gleichzeitig ihr
        äußeres Funktionieren als Autorin und öffentliche Stimme im Vordergrund stand.</p>
        <p class="vb-intro"><strong>c) Öffentliches Funktionieren bei gleichzeitig fortbestehender innerer Belastung:</strong>
        Über viele Jahre gelang es Kampusch, als Autorin, Moderatorin und Aktivistin öffentlich
        aufzutreten, während die psychischen Folgen der Gefangenschaft im Hintergrund
        weiterwirkten – ein Auseinanderklaffen von äußerer Funktionsfähigkeit und innerer
        Belastung, das erst Jahrzehnte später sichtbar wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein schwerer psychischer Zusammenbruch, öffentlich bekannt gemacht durch die Familie:</strong>
        Rund zwei Jahrzehnte nach ihrer Befreiung machte Kampuschs Familie öffentlich, dass sie
        einen schweren Zusammenbruch erlitten habe – ein seltener Schritt, der die bis dahin
        weitgehend private psychische Gesundheitsgeschichte erstmals in vollem Ausmaß ans Licht
        brachte.</p>
        <p class="vb-intro"><strong>b) „Meist in einer eigenen Welt" – die Beschreibung ihrer Schwester:</strong>
        Kampuschs Schwester Claudia Nestelberger beschrieb den Zustand mit den Worten, Natascha
        befinde sich „meist in einer eigenen Welt" und habe sich vollständig zurückgezogen – eine
        Beschreibung, die die Familie selbst als eine Art neuerliche Gefangenschaft einordnete.</p>
        <p class="vb-intro"><strong>c) Eine Dokumentation als bewusster Schritt zur Aufklärung:</strong>
        Die Familie entschied sich, im Rahmen einer ORF-Dokumentation des Journalisten Christoph
        Feurstein („Natascha Kampusch – Gefangen in Freiheit") offen über die Ursachen des
        Zusammenbruchs zu sprechen – in der Hoffnung, damit Verständnis für ihre Situation zu
        schaffen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Trauma, das nicht mit der Befreiung endete:</strong>
        Kampuschs Fall zeigt exemplarisch, dass die eigentliche psychische Verarbeitung eines
        Extremtraumas oft erst lange nach dem äußeren Ende der Bedrohung beginnt – und
        Jahrzehnte andauern kann, weit über den Moment der physischen Rettung hinaus.</p>
        <p class="vb-intro"><strong>b) Die Familie als späte, aber wichtige Stimme:</strong>
        Anders als in den ersten Jahren nach ihrer Befreiung, in denen Kampusch selbst die
        Deutungshoheit über ihre Geschichte behielt, übernahm nun ihre Familie die
        Öffentlichkeitsarbeit – ein Zeichen dafür, wie sehr sich ihr Zustand verändert hatte.</p>
        <p class="vb-intro"><strong>c) Ein Bild, das dem öffentlichen Narrativ der „starken Überlebenden" widerspricht:</strong>
        Jahrelang wurde Kampusch vor allem als Symbol für Widerstandskraft und Selbstbestimmung
        wahrgenommen; der 2026 öffentlich gewordene Zusammenbruch erweitert dieses Bild um eine
        Realität, die viele Betroffene von Extremtraumata teilen: Stärke und anhaltendes Leiden
        schließen einander nicht aus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Flusspferd, das lange unter der Oberfläche funktionierte:</strong>
        Wie das Flusspferd, das den Großteil seines Lebens unsichtbar unter Wasser verbringt,
        hielt Kampusch über Jahre eine äußerlich funktionierende, öffentlich sichtbare Existenz
        aufrecht – während das eigentliche Ausmaß ihrer inneren Belastung verborgen blieb.</p>
        <p class="vb-intro"><strong>b) Der Einserflügel und der lange Kampf um Struktur:</strong>
        Dieselbe Selbstdisziplin, die ihr während der Gefangenschaft half, Verstand und
        Identität zu bewahren, ermöglichte ihr über Jahre auch nach der Befreiung ein
        funktionierendes öffentliches Leben – bis diese selbst auferlegte Struktur unter der
        Last des unverarbeiteten Traumas schließlich zusammenbrach.</p>
        <p class="vb-intro"><strong>c) Rückzug als letzte verbliebene Schutzstrategie:</strong>
        Der von ihrer Schwester beschriebene Rückzug „in eine eigene Welt" liest sich als
        Wiederkehr desselben Überlebensmechanismus, der sie einst durch die Gefangenschaft
        trug: sich in einen inneren, geschützten Raum zurückzuziehen, wenn die äußere Welt
        nicht mehr zu bewältigen ist.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Von der äußeren Gefangenschaft zur inneren:</strong>
        Der Ausdruck ihrer Familie, Kampusch befinde sich erneut „in einer Art Gefangenschaft",
        schließt den Kreis auf erschütternde Weise: Die äußere Gefangenschaft endete 2006, doch
        das seelische Muster, unter extremem Druck den Rückzug in einen abgeschotteten
        Innenraum zu suchen, kehrte zwei Jahrzehnte später in veränderter Form zurück.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>Eine auffällige Parallele im selben Subtyp – Greta Thunberg:</strong>
        Bemerkenswert ist, dass mit <a href="javascript:void(0)" data-route="krankheitsportraets-greta-thunberg">Greta Thunberg (ebenfalls SE2w1)</a>
        eine weitere Persönlichkeit in diesem Kompass vertreten ist, deren psychische
        Krisengeschichte ein verwandtes Muster zeigt: eine selbsterhaltende Zwei mit
        Einserflügel, die unter extremem inneren Druck – bei Thunberg im Kindesalter durch eine
        schwere depressive Episode mit selektivem Mutismus, bei Kampusch durch die Spätfolgen
        jahrelanger Gefangenschaft – den Rückzug in eine eigene, von außen kaum zugängliche
        Welt sucht. Bei beiden wird dieser Rückzug erst durch nahestehende Menschen (bei
        Thunberg die Eltern, bei Kampusch ihre Schwester) öffentlich sichtbar gemacht.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet ein Rückzug in eine eigene Welt, bei einer Frau, die jahrelang für Offenheit über ihr Trauma stand?</strong>
        Für eine selbsterhaltende Zwei mit Einserflügel, deren öffentliche Rolle jahrelang auf
        Kontrolle über die eigene Erzählung und Struktur beruhte, liegt eine Deutung nahe:
        Ausgerechnet dort, wo diese Kontrolle und Struktur nicht mehr aufrechtzuerhalten sind,
        bricht dieselbe innere Zuflucht durch, die einst unter Zwang – im Kellerverlies –
        entstanden war. Diese Deutung ist eine plausible Interpretation, kein belegter
        medizinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu einem
        späten psychischen Zusammenbruch nach einem Trauma führt – <strong>jeder Mensch kann
        nach einem Extremtrauma jede Form psychischer Erkrankung entwickeln, unabhängig vom
        Subtyp.</strong> Was sich an Kampuschs Fall zeigen lässt, ist ein Muster im Umgang mit
        unverarbeitetem Trauma, das bei einer ausgeprägten selbsterhaltenden Zwei mit
        Einserflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Kampusch ihr eigenes Enneagramm-Muster je bewusst kannte.
        Über Jahre hielt sie an der Rolle der kontrollierten, funktionierenden Überlebenden
        fest – eine Rolle, die ihrem SE2w1-Muster zutiefst entsprach, aber auch verhinderte,
        dass die eigentliche innere Erschöpfung rechtzeitig erkannt und behandelt wurde. Wer
        das eigene Bedürfnis, unter allen Umständen zu funktionieren, nicht als eigenes Muster
        erkennt, riskiert, dass der Zusammenbruch, den man vermeiden wollte, sich am Ende umso
        gewaltiger Bahn bricht.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am langfristigen Verlauf ihrer psychischen Gesundheit lässt sich <strong>Kampuschs</strong>
        selbsterhaltende Zwei mit Einserflügel noch einmal ablesen: Jahrelanges, diszipliniertes
        Funktionieren nach außen, während im Inneren ein Trauma weiterwirkte, das erst zwei
        Jahrzehnte später in voller Wucht sichtbar wurde. Das Flusspferd, das so lange wie
        möglich unter der Wasseroberfläche blieb – bis selbst diese letzte Form von Kontrolle
        nicht mehr ausreichte, um das zu tragen, was darunter lag.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-natascha-kampusch", label:"Porträt: Natascha Kampusch (SE2w1) – Überlebensweg"},
        {route:"krankheitsportraets-greta-thunberg", label:"Krankheitsporträt: Greta Thunberg (SE2w1)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

function alexanderDerGrosseKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-alexander-der-grosse-portrait.jpg" alt="Alexander der Große" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alexander der Große</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · 356–323 v. Chr.</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Alexander der Große</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-alexander-der-grosse">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Feldherr und
        Reichsgründer und seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das
        dort knapp skizziert wird: einen plötzlichen, bis heute nicht sicher geklärten
        Krankheitsverlauf, der ihn im Juni 323 v. Chr. in Babylon innerhalb weniger Tage tötete –
        nach einem Jahrzehnt, in dem sein Körper nie wirklich zur Ruhe gekommen war.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Alexander</strong> ist dem <strong>sozialen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Ehrgeiz</em>: grenzenlose Hingabe an eine
        große Sache, verbunden mit dem Bedürfnis, unentbehrlich zu sein. Der Dreierflügel bringt
        die Weigerung hinzu, sich von Schwäche – auch der eigenen körperlichen – je aufhalten zu
        lassen. Genau diese Weigerung lässt sich bis in seinen letzten, überstürzten
        Krankheitsverlauf nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der elf Jahre nie wirklich Rast fand:</strong>
        Von 334 bis 323 v. Chr. befand sich Alexander in ununterbrochenem Feldzug – durch
        Wüsten, über Gebirge, mehrfach schwer verwundet, unter anderem durch einen Pfeil, der
        bei der Belagerung von Multan seine Lunge durchbohrte.</p>
        <p class="vb-intro"><strong>b) Exzessiver Alkoholkonsum, besonders nach 324 v. Chr.:</strong>
        Antike Quellen berichten übereinstimmend von ausgedehnten Trinkgelagen, die sich nach
        dem Tod seines engsten Gefährten Hephaistion noch steigerten.</p>
        <p class="vb-intro"><strong>c) Zunehmende Erschöpfung im Frühjahr 323 v. Chr.:</strong>
        Nach der Rückkehr nach Babylon häuften sich laut Überlieferung Berichte über
        Fieberschübe und nachlassende Kraft – im Trubel der Planung eines neuen Feldzugs gegen
        Arabien kaum beachtet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Trinkgelage kurz vor dem Zusammenbruch:</strong>
        In der Nacht zum 2. Juni 323 v. Chr. nahm Alexander an einem ausgedehnten Trinkgelage zu
        Ehren seines Freundes Nearchos teil – danach klagte er über stechende Schmerzen.</p>
        <p class="vb-intro"><strong>b) Fieber, das nicht mehr abklang:</strong>
        In den folgenden Tagen stieg sein Fieber kontinuierlich, während er weiterhin versuchte,
        tägliche militärische und administrative Pflichten zu erfüllen.</p>
        <p class="vb-intro"><strong>c) Fortschreitender Kräfteverfall bis zur Sprachlosigkeit:</strong>
        Laut den überlieferten königlichen Tagebüchern (Ephemerides) konnte er sich in den
        letzten Tagen nicht mehr artikulieren, empfing seine Offiziere aber noch stumm, jeden
        Einzelnen, an seinem Sterbebett.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Zehn bis zwölf Tage Krankheitsverlauf:</strong>
        Von den ersten Symptomen bis zum Tod vergingen nur rund zehn bis zwölf Tage – ein
        rasanter Verfall bei einem Mann, der ein Jahrzehnt lang als nahezu unbesiegbar gegolten
        hatte.</p>
        <p class="vb-intro"><strong>b) Die Soldaten wollten ihn noch einmal sehen:</strong>
        Der Überlieferung nach ließ Alexander, obwohl er kaum noch sprechen konnte, seine
        Soldaten einzeln an seinem Bett vorbeiziehen, um jedem noch ein letztes Zeichen zu
        geben.</p>
        <p class="vb-intro"><strong>c) Tod am 10. oder 11. Juni 323 v. Chr. in Babylon:</strong>
        Alexander starb im Alter von nur 32 Jahren, ohne einen volljährigen, unbestrittenen
        Nachfolger zu benennen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine SO2w3-Parallele: Julius Caesar</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Unter den <a href="javascript:void(0)" data-route="krankheitsportraets-julius-caesar">Krankheitsporträts</a>
        dieses Kompasses findet sich mit
        <a href="javascript:void(0)" data-route="beruehmte-julius-caesar">Julius Caesar (SO2w3)</a>
        ein auffällig ähnlicher Fall: Auch Caesar litt – nach übereinstimmenden antiken Quellen
        vermutlich an Epilepsie – und verbarg diese Schwäche zeitlebens, statt sie öffentlich
        zuzugeben. Bei beiden Männern zeigt sich derselbe Dreierflügel-Reflex: Schwäche, auch die
        eigene körperliche, darf das sorgfältig aufgebaute Bild von Unbesiegbarkeit nicht
        beschädigen. Alexander ging noch einen Schritt weiter als Caesar – er ignorierte
        Warnsignale nicht nur, sondern trieb seinen Körper aktiv über jede vernünftige Grenze
        hinaus, bis kein Verbergen mehr nötig war, weil der Zusammenbruch selbst öffentlich
        wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Reich ohne Erben:</strong>
        Sein Tod ohne klare Nachfolgeregelung stürzte das gesamte von ihm eroberte Weltreich in
        jahrzehntelange Nachfolgekriege unter seinen Feldherren, die sogenannten
        Diadochenkämpfe.</p>
        <p class="vb-intro"><strong>b) Jahrhunderte an Spekulation über die Todesursache:</strong>
        Von Malaria über Typhus bis zu einer Vergiftung durch enge Vertraute – bis heute gibt es
        keine gesicherte Diagnose, nur konkurrierende Theorien.</p>
        <p class="vb-intro"><strong>c) Ein Mythos, der den kranken Körper überstrahlte:</strong>
        In der Nachwelt trat die Krankheit selbst fast vollständig hinter dem Mythos des
        unbesiegbaren Eroberers zurück.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Golden Retriever, der bis zuletzt Nähe suchte:</strong>
        Selbst sprachlos und dem Tod nahe, empfing er noch jeden einzelnen Soldaten – dieselbe
        Verbindungssuche, die sein ganzes Leben trug, blieb bis zum letzten Atemzug erhalten.</p>
        <p class="vb-intro"><strong>b) Ein Körper, der die Grenzenlosigkeit nicht mehr mittragen konnte:</strong>
        Elf Jahre ohne wirkliche Rast, mehrere schwere Kriegsverletzungen und exzessiver
        Alkoholkonsum trafen an einem einzigen Punkt zusammen.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug, sondern Weiterplanen bis zum Umkippen:</strong>
        Noch während erste Fieberschübe ihn schwächten, arbeitete er an den Vorbereitungen für
        den nächsten Feldzug – Stillstand kam für ihn nicht infrage.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Der Glaube, unbesiegbar sein zu müssen:</strong>
        Die Leidenschaft der Zwei, <strong>Stolz</strong>, zeigte sich bei Alexander als
        Weigerung, jemals innezuhalten – elf Jahre Feldzug ohne echte Erholungsphase, mehrfach
        schwer verwundet, immer wieder an vorderster Front.</p>
        <p class="vb-intro"><strong>b) Der Verlust Hephaistions als Wendepunkt:</strong>
        Nach dem Tod seines engsten Gefährten 324 v. Chr. rutschte Alexander in seinen
        Achter-Stresspunkt – unnachgiebiger, härter, mit exzessivem Trinken als Ausdruck seines
        Schmerzes. Genau in dieser Phase begann sich das Muster zu verdichten, das wenige Monate
        später in seinen körperlichen Zusammenbruch mündete.</p>
        <p class="vb-intro"><strong>c) Ein letztes Trinkgelage als möglicher Auslöser:</strong>
        Antike Quellen sehen im Trinkgelage zu Ehren des Nearchos kurz vor seinem Tod einen
        möglichen Auslöser oder zumindest Verstärker seiner Erkrankung – ob Alkoholvergiftung,
        eine begünstigte Infektion oder reiner Zufall, ist bis heute ungeklärt.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet ein plötzlicher, rätselhafter Zusammenbruch?</strong>
        Für eine soziale Zwei mit Dreierflügel, deren gesamtes Selbstbild auf Unbesiegbarkeit und
        grenzenloser Hingabe an die eigene Mission beruhte, liegt eine Deutung nahe: Ausgerechnet
        ein Körper, der niemals „genug" kannte, brach zusammen, ohne dass sein Träger selbst je
        „genug" gesagt hätte. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu einem plötzlichen
        Kollaps führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Alexanders Fall zeigen lässt, ist ein Muster im Umfeld einer
        Krankheit, das bei einer ausgeprägten sozialen Zwei mit Dreierflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Alexander lebte über zwei Jahrtausende vor der Entstehung des Enneagramms als modernem
        Persönlichkeitsmodell – er kannte sein eigenes Muster nicht bewusst. Seine Weigerung,
        jemals eine Grenze zu akzeptieren – weder die des eigenen Körpers noch, zuvor, die
        geografische am Fluss Hyphasis, die ihm erst seine eigenen Soldaten aufzwangen – wurde
        nie als wiederkehrendes Verhaltensmuster erkannt, sondern einfach als Wesensmerkmal eines
        „geborenen Eroberers" gelebt. Wer die eigene Grenzenlosigkeit nicht als Muster kennt,
        kann sie auch nicht rechtzeitig zügeln, wenn der eigene Körper längst an seine Grenzen
        stößt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Alexanders</strong> soziale Zwei mit
        Dreierflügel noch einmal ablesen: ein Körper, der elf Jahre lang keine Grenze
        akzeptierte, und ein Zusammenbruch, der so plötzlich und rätselhaft blieb wie das Leben
        selbst grenzenlos gewesen war. Der Golden Retriever, der bis zur letzten Sekunde
        Verbindung suchte – und dessen eigener Körper am Ende die einzige Grenze setzte, die er
        sich selbst nie gesetzt hätte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-alexander-der-grosse", label:"Porträt: Alexander der Große (SO2w3) – Lebenswerk"},
        {route:"krankheitsportraets-julius-caesar", label:"Krankheitsporträt: Julius Caesar (SO2w3) – verborgene Epilepsie"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

function marcelProustKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-marcel-proust-portrait.jpg" alt="Marcel Proust" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marcel Proust</p>
        <p class="krim-portrait-typ">SO4w5 · Sozialer Typ 4 mit Fünferflügel · 1871–1922</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Marcel Proust</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-marcel-proust">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Diese Seite vertieft ein Kapitel, das dort angedeutet wird: ein
        lebenslanges, schweres Asthma, das ihn zunehmend in sein legendäres, korkverkleidetes
        Zimmer zwang und ihn schließlich mit nur 51 Jahren tötete – während er buchstäblich bis
        zum letzten Atemzug an seinem Lebenswerk arbeitete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Proust</strong> ist dem <strong>sozialen Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die soziale Vier braucht die Gruppe, um an ihr die eigene, tragische
        Einzigartigkeit sichtbar auszuleben, statt im Verborgenen zu leiden. Der Fünferflügel
        bringt den Drang hinzu, das eigene Erleben nicht nur zu durchleben, sondern analytisch
        bis in die feinsten Verästelungen zu sezieren. Genau dieses Muster lässt sich bis in
        seinen Umgang mit der eigenen Krankheit nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der erste schwere Asthmaanfall mit neun Jahren:</strong>
        1880 erlitt Proust bei einem Spaziergang im Bois de Boulogne einen schweren
        Asthmaanfall, der ihn fast erstickte – von diesem Moment an begleitete ihn die
        Krankheit bis zu seinem Tod.</p>
        <p class="vb-intro"><strong>b) Eine außergewöhnliche körperliche Empfindlichkeit:</strong>
        Schon als Kind reagierte Proust extrem auf Staub, Blütenpollen und Parfüm – Auslöser,
        die für die meisten Menschen harmlos waren, aber bei ihm lebensbedrohliche
        Atemnot auslösen konnten.</p>
        <p class="vb-intro"><strong>c) Ein Leben, das sich zunehmend nach der Krankheit richtete:</strong>
        Schon in jungen Jahren musste Proust seinen Alltag – Reisen, Verabredungen,
        gesellschaftliche Verpflichtungen – nach den Launen seines Asthmas ausrichten, lange
        bevor er sich vollständig zurückzog.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Rückzug ins korkverkleidete Zimmer:</strong>
        Um sich gegen Straßenlärm, Staub und Pollen abzuschirmen, ließ Proust sein
        Schlafzimmer am Boulevard Haussmann mit Kork auskleiden und verbrachte dort die letzten
        Jahre seines Lebens fast ausschließlich.</p>
        <p class="vb-intro"><strong>b) Umgekehrter Tagesrhythmus:</strong>
        Proust schlief tagsüber und arbeitete nachts, wenn die Stadt ruhiger und die Luft
        weniger reizend war – ein Rhythmus, der seine soziale Isolation weiter vertiefte.</p>
        <p class="vb-intro"><strong>c) Selbstmedikation mit fragwürdigen Mitteln:</strong>
        Proust behandelte seine Anfälle mit Räucherpulvern, Koffein- und
        Adrenalin-Injektionen sowie einer Vielzahl damals gängiger, teils zweifelhafter Mittel
        – eine verzweifelte, lebenslange Selbstbehandlung ohne wirksame medizinische Therapie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein Wettlauf gegen die Zeit:</strong>
        Proust wusste, dass seine Lungenkrankheit ihn früh töten würde, und arbeitete an
        „Auf der Suche nach der verlorenen Zeit" mit einer Intensität, die kaum Pausen zuließ –
        das Werk musste vollendet werden, bevor der Körper endgültig versagte.</p>
        <p class="vb-intro"><strong>b) Korrekturen auf dem Sterbebett:</strong>
        Noch in seinen letzten Lebenstagen korrigierte Proust Druckfahnen und diktierte
        Ergänzungen – die Arbeit am Werk endete buchstäblich erst mit seinem letzten Atemzug.</p>
        <p class="vb-intro"><strong>c) Tod am 18. November 1922 in Paris:</strong>
        Proust starb im Alter von 51 Jahren an einer Lungenentzündung, die sich aus einer
        Bronchitis auf seiner durch Jahrzehnte des Asthmas geschwächten Lunge entwickelt hatte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: Gustav Mahler</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch <a href="javascript:void(0)" data-route="beruehmte-gustav-mahler">Gustav Mahler</a>
        (SO4w5) wusste – in seinem Fall durch eine Herzklappenerkrankung –, dass er bald sterben
        würde, und verwandelte dieses Wissen in sein eindringlichstes Spätwerk, statt sich zu
        schonen. Sein
        <a href="javascript:void(0)" data-route="krankheitsportraets-gustav-mahler">eigenes Krankheitsporträt</a>
        zeigt dasselbe SO4w5-Muster wie bei Proust: Das Bewusstsein der eigenen Sterblichkeit
        wird nicht verdrängt, sondern in einen Wettlauf gegen die Zeit verwandelt, der das
        Spätwerk zur eindringlichsten Aussage des gesamten Schaffens macht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das um seinen eigenen Tod wusste:</strong>
        Kaum ein anderes literarisches Großwerk entstand so bewusst im Wissen um die eigene
        begrenzte Zeit – die Sterblichkeit des Autors ist in „Auf der Suche nach der verlorenen
        Zeit" spürbar mitgeschrieben.</p>
        <p class="vb-intro"><strong>b) Posthume Vollendung:</strong>
        Die letzten Bände des Werks wurden erst nach Prousts Tod veröffentlicht – er hatte das
        Manuskript im Wesentlichen fertiggestellt, aber die letzte redaktionelle Politur blieb
        anderen überlassen.</p>
        <p class="vb-intro"><strong>c) Ein Rückzug, der zur literarischen Methode wurde:</strong>
        Was als körperliche Notwendigkeit begann – die Isolation im korkverkleideten Zimmer –,
        wurde zur Bedingung seines Schreibens: erst aus der Distanz zur Gesellschaft heraus
        konnte er sie so genau beschreiben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Gürteltier, das sich einpanzerte, um zu überleben:</strong>
        Der Kork an den Wänden war buchstäblich ein Panzer gegen die Außenwelt – eine
        Schutzhülle, die Proust brauchte, um überhaupt schreiben zu können.</p>
        <p class="vb-intro"><strong>b) Dringliche Bedürftigkeit statt distanzierter Beobachtung:</strong>
        In seinen letzten kranken Jahren verlangte Proust von seiner Haushälterin Céleste
        Albaret ständige Erreichbarkeit, auch mitten in der Nacht – ein fast klammerndes
        Bedürfnis nach Nähe und Fürsorge, das der sonst distanziert-analytischen Beobachterrolle
        der Vier mit Fünferflügel entgegenlief.</p>
        <p class="vb-intro"><strong>c) Analytische Distanz bis zum Schluss:</strong>
        Selbst im eigenen Sterben blieb Proust der genaue Beobachter – er soll auf dem
        Totenbett Notizen zum eigenen körperlichen Verfall diktiert haben, in der Absicht, sie
        für eine Sterbeszene seines Romans zu verwenden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Über vier Jahrzehnte mit derselben Krankheit:</strong>
        Von seinem neunten Lebensjahr bis zu seinem Tod mit 51 begleitete das Asthma jede Phase
        seines Lebens – kein plötzlicher Einbruch, sondern eine lebenslange, sich stetig
        verschärfende Beziehung zur eigenen Verletzlichkeit.</p>
        <p class="vb-intro"><strong>b) Wenn die Vier unter chronischem Stress zur Zwei wird:</strong>
        Die zunehmend dringliche, fast klammernde Bedürftigkeit nach der ständigen
        Erreichbarkeit seiner Haushälterin in den letzten Lebensjahren zeigt ein Muster, das
        über die übliche Zurückgezogenheit der Vier mit Fünferflügel hinausgeht. Wer über
        Jahrzehnte in chronischer Krankheit lebt, bewegt sich zunehmend entlang seiner
        Stresslinie in Richtung seines Stresspunkts – bei der Vier ist das die Zwei. Genau
        dieses bedürftige, um Fürsorge werbende Verhalten in seinen letzten kranken Jahren
        erinnert eher an die Zwei als an die sonst distanziert-analytische Grundhaltung der
        Fünferflügel-Vier – bei unverändertem Kerntyp SO4w5.</p>
        <p class="vb-intro"><strong>c) Rückzug als Schutz und als Kunstform zugleich:</strong>
        Das korkverkleidete Zimmer war zugleich medizinische Notwendigkeit und literarisches
        Laboratorium – die Isolation, die der Körper erzwang, wurde zur Bedingung für das
        Werk, das ohne sie nie in dieser Tiefe hätte entstehen können.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Atmung?</strong>
        Für eine soziale Vier, deren gesamte künstlerische Existenz auf der Fähigkeit beruht,
        sich der Welt auszusetzen und sie zugleich mit analytischer Distanz zu erfassen, liegt
        eine Deutung nahe: Ausgerechnet jenes Organ, das die unmittelbarste Verbindung zur
        Außenwelt herstellt, der Atem, wurde zur Quelle permanenter Bedrohung – und zwang
        Proust in einen Rückzug, der seine Beobachterrolle noch verschärfte, statt sie
        aufzulösen. Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier zwangsläufig zu Asthma führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Prousts Fall zeigen lässt, ist ein Muster im Umgang mit einer chronischen
        Krankheit, das bei einer ausgeprägten sozialen Vier mit Fünferflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Proust kannte sein eigenes Muster nicht – die soziale Vier mit Fünferflügel verwandelt
        Leiden reflexhaft in analytisch durchdrungene Kunst, statt sich zu schonen, und genau
        das tat er bis zur letzten Zeile seines Lebenswerks. Wer die eigene Neigung, sich
        selbst und die eigene Krankheit vor allem als Beobachtungsmaterial zu behandeln, nicht
        als Muster erkennt, kann sie auch nicht rechtzeitig durch echte Selbstfürsorge
        ausgleichen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Prousts</strong> soziale Vier mit
        Fünferflügel noch einmal ablesen: eine lebenslange Krankheit, die zur Bedingung eines
        der bedeutendsten Werke der Weltliteratur wurde, und ein Autor, der noch auf dem
        Sterbebett das eigene Sterben zu literarischem Material machte. Das Gürteltier, das
        sich einpanzerte, um in der Abgeschiedenheit umso genauer hinsehen zu können – und
        dessen letzter Blick dem eigenen Tod galt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-marcel-proust", label:"Porträt: Marcel Proust (SO4w5) – Lebenswerk"},
        {route:"krankheitsportraets-gustav-mahler", label:"Krankheitsporträt: Gustav Mahler (SO4w5) – derselbe Wettlauf gegen die Zeit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

function charlesMansonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/charles-manson-portrait.jpg" alt="Charles Manson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Charles Manson</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel · 1934–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Charles Manson</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-charles-manson">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um die Tate-LaBianca-Morde 1969 und seine
        Typstruktur als Sektenführer. Diese Seite vertieft ein Kapitel, das dort nur am Rande
        erwähnt wird: eine Darmkrebserkrankung, die in seinem letzten Haftjahr diagnostiziert
        wurde und an deren Folgen er 2017 im Alter von 83 Jahren im Gefängniskrankenhaus starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Manson</strong> ist dem <strong>sexuellen Typ 6 mit Siebenerflügel</strong>
        zugeordnet – dem Kontratyp der Sechs, der Angst nicht durch Anpassung, sondern durch
        offensive Stärke überspielt. Der Siebenerflügel verleiht Charisma und
        Begeisterungsfähigkeit, die im Krankheitsfall in dieselbe kompromisslose
        Kontrollhaltung mündete, die sein ganzes Leben prägte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Krankenhausaufenthalt im Januar 2017 wegen Magen-Darm-Blutungen:</strong>
        Anfang 2017 musste Manson aus dem Corcoran State Prison in ein Krankenhaus verlegt
        werden – ein erster deutlicher Hinweis auf eine ernsthafte Erkrankung.</p>
        <p class="vb-intro"><strong>b) Diagnose einer Darmkrebserkrankung:</strong>
        Im Zusammenhang mit diesem Krankenhausaufenthalt wurde bei Manson Darmkrebs
        diagnostiziert – nach Medienberichten lehnte er zeitweise eine Operation ab.</p>
        <p class="vb-intro"><strong>c) Kaum öffentliche Reaktion aus dem Gefängnis:</strong>
        Über den Verlauf seiner Erkrankung drang aus dem Gefängnis wenig nach außen – Manson
        blieb, wie zeitlebens, ein Mann, der Kontrolle über die eigene Darstellung behielt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Keine öffentliche Schwäche zugelassen:</strong>
        Manson gab auch nach der Diagnose weiterhin Interviews und ließ sich fotografieren –
        ein Verhalten, das seiner gesamten Selbstinszenierung als unangreifbarer Anführer
        entsprach.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte Verweigerung von Reue oder Rückzug:</strong>
        Bis in seine letzten Lebensmonate zeigte Manson keinerlei öffentliche Reue für die
        Morde von 1969 – die Krankheit veränderte diese Grundhaltung nicht.</p>
        <p class="vb-intro"><strong>c) Erneute Krankenhauseinweisung im November 2017:</strong>
        Wenige Tage vor seinem Tod wurde Manson wegen einer akuten Verschlechterung seines
        Zustands erneut aus der Haftanstalt in ein Krankenhaus in Kern County verlegt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 19. November 2017:</strong>
        Charles Manson starb im Alter von 83 Jahren in einem Krankenhaus in Kern County,
        Kalifornien – die unmittelbare Todesursache wurde als Herzversagen angegeben, als
        zugrunde liegende Erkrankung galt der Darmkrebs.</p>
        <p class="vb-intro"><strong>b) 48 Jahre nach den Morden, 46 Jahre in Haft:</strong>
        Zwischen den Tate-LaBianca-Morden 1969 und seinem Tod lagen fast fünf Jahrzehnte, davon
        verbrachte Manson den überwiegenden Teil in verschiedenen kalifornischen
        Haftanstalten.</p>
        <p class="vb-intro"><strong>c) Kein Begnadigungsgesuch, keine späte Reue:</strong>
        Anders als manche verurteilte Straftäter, die im Angesicht des Todes um Vergebung
        baten, hielt Manson bis zuletzt an seiner Selbstdarstellung als unbeugsamer Außenseiter
        fest.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der kaum Anteilnahme auslöste:</strong>
        Im Gegensatz zu den meisten anderen Krankheitsporträts dieses Kompasses löste Mansons
        Tod in der Öffentlichkeit überwiegend Erleichterung und Genugtuung aus, keine Trauer –
        eine Reaktion, die seine Taten erklärt, ohne sie zu rechtfertigen.</p>
        <p class="vb-intro"><strong>b) Ein Nachruf voller Distanz:</strong>
        Medienberichte über seinen Tod konzentrierten sich fast ausschließlich auf die Morde
        von 1969 – die Krankheit selbst blieb eine Randnotiz eines Lebens, das ohnehin schon
        vollständig durch die Taten definiert war.</p>
        <p class="vb-intro"><strong>c) Ein Ende ohne Publikum, anders als sein Leben:</strong>
        Der Mann, der einst ganze Gruppen um sich scharte und den Gerichtssaal zur Bühne
        machte, starb weitgehend unbeachtet in einem Krankenhausbett – ein auffälliger
        Kontrast zu seiner lebenslangen Inszenierung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Wolf, der auch im Sterben keine Schwäche zeigte:</strong>
        Dieselbe Kontrollhaltung, mit der Manson jahrzehntelang seine Anhänger und später sein
        öffentliches Bild steuerte, bestimmte auch, wie wenig über seinen Krankheitsverlauf
        nach außen drang.</p>
        <p class="vb-intro"><strong>b) Verweigerung als letzte Machtdemonstration:</strong>
        Die berichtete anfängliche Ablehnung einer Operation passt zum Muster des Kontratyps:
        selbst der eigene Körper sollte sich seiner Entscheidung unterordnen, nicht umgekehrt.</p>
        <p class="vb-intro"><strong>c) Kein Zusammenbruch der Fassade:</strong>
        Anders als bei manchen anderen Krankheitsverläufen dieses Kompasses gibt es keine
        Berichte über einen sichtbaren, öffentlichen Zusammenbruch von Mansons kontrolliertem
        Selbstbild – die Fassade hielt, soweit bekannt, bis zum Ende.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kontrolle, die bis zum Körper reichte:</strong>
        Mansons gesamtes Leben war von dem Versuch geprägt, Kontrolle über andere Menschen zu
        gewinnen, um die eigene tiefe Angst vor Ohnmacht zu überspielen – im Angesicht seiner
        tödlichen Krankheit richtete sich dieselbe Kontrollhaltung notgedrungen nach innen, auf
        einen Körper, der sich nicht mehr steuern ließ.</p>
        <p class="vb-intro"><strong>b) Keine Öffnung, keine Wandlung durch die Krankheit:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses findet sich bei
        Manson kein Hinweis auf eine innere Wandlung, Reue oder Öffnung angesichts des nahenden
        Todes – das Muster des Kontratyps blieb bis zuletzt intakt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Darm?</strong>
        Für eine sexuelle Sechs, deren gesamtes Leben von der Frage bestimmt war, wem man
        vertrauen und wen man kontrollieren kann, liegt eine Deutung nahe: Ausgerechnet jenes
        Organsystem, das im Körper für Verdauung im Sinne von Verarbeitung und Loslassen
        steht, wurde zum Schauplatz einer Krankheit, die sich – anders als Manson selbst –
        keiner Kontrolle unterordnen ließ. Diese Deutung ist eine plausible Interpretation,
        kein belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu
        Darmerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Mansons Fall zeigen lässt, ist ein Muster im Umgang
        mit der eigenen Sterblichkeit, das bei einer destruktiv ausgeprägten sexuellen Sechs
        mit Siebenerflügel auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Manson kannte sein eigenes Muster nicht – die sexuelle Sechs als Kontratyp überspielt
        Angst reflexhaft durch Kontrolle und Angriff, statt sie je bei sich selbst zu erkennen,
        und genau dieses Muster lebte er bis zur letzten Lebenswoche unverändert aus, ohne je
        eine andere Möglichkeit des Umgangs mit der eigenen Verletzlichkeit zu entwickeln. Wer
        das eigene Bedürfnis nach Kontrolle nicht als Muster erkennt, kann es auch im Angesicht
        des eigenen Todes nicht loslassen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Mansons</strong> sexuelle Sechs mit
        Siebenerflügel noch einmal ablesen: keine Öffnung, keine Reue, keine sichtbare
        Verwundbarkeit – nur eine Kontrollhaltung, die sich bis zum letzten Atemzug gegen den
        eigenen, unaufhaltsam versagenden Körper richtete. Der Wolf, der sein Rudel durch Angst
        zusammenhielt – und der am Ende allein und weitgehend unbeachtet starb.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Charles
        Manson wurde 1971 wegen Mordes und Verschwörung verurteilt und starb 2017 in Haft. Das
        Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-charles-manson", label:"Kriminalpsychologie: Charles Manson (SX6w7) – Tate-LaBianca-Morde"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

function bernieMadoffKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bernie-madoff-portrait.jpg" alt="Bernie Madoff" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bernie Madoff</p>
        <p class="krim-portrait-typ">SE3w4 · Selbsterhaltender Typ 3 mit Viererflügel · 1938–2021</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Bernie Madoff</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-bernie-madoff">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um das größte Ponzi-System der Geschichte
        und seine Typstruktur als stiller, unauffälliger Betrüger. Diese Seite vertieft ein
        Kapitel, das dort nur am Rande erwähnt wird: eine unheilbare Nierenerkrankung im
        Gefängnis, mehrfach abgelehnte Gesuche um vorzeitige Entlassung, und einen Tod 2021
        in Bundeshaft.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Madoff</strong> ist dem <strong>selbsterhaltenden Typ 3 mit Viererflügel</strong>
        zugeordnet – dem Kontratyp der Drei, der sich nicht laut und glamourös inszeniert,
        sondern still, seriös und vertrauenswürdig. Der Viererflügel verleiht ein Gespür für
        das Besondere und den exklusiven Zirkel. Genau diese stille, kontrollierte Inszenierung
        setzte sich bis in seinen Umgang mit der eigenen tödlichen Erkrankung fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Chronische gesundheitliche Probleme während der Haft:</strong>
        In den Jahren nach seiner Verurteilung 2009 entwickelte Madoff im Gefängnis eine
        fortschreitende Nierenerkrankung sowie Bluthochdruck und Herz-Kreislauf-Probleme.</p>
        <p class="vb-intro"><strong>b) Diagnose als unheilbare Nierenerkrankung:</strong>
        Ärzte diagnostizierten schließlich eine Niereninsuffizienz im Endstadium – eine
        Erkrankung, die ohne regelmäßige Dialyse und letztlich eine Transplantation tödlich
        verlaufen musste.</p>
        <p class="vb-intro"><strong>c) Fortschreitende Verschlechterung ohne öffentliche Dramatik:</strong>
        Wie schon während seines Betrugs drang über Jahre hinweg kaum etwas über seinen
        körperlichen Zustand nach außen – Madoff blieb, auch krank, ein Mann ohne Bühne.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Mehrfache Gesuche um vorzeitige Entlassung:</strong>
        Madoffs Anwälte beantragten wiederholt eine sogenannte „compassionate release" –
        eine vorzeitige Haftentlassung aus gesundheitlichen Gründen – und begründeten dies mit
        seiner unheilbaren Nierenerkrankung.</p>
        <p class="vb-intro"><strong>b) Ärztliche Prognose von unter 18 Monaten Lebenszeit:</strong>
        Im Zusammenhang mit einem dieser Gesuche 2020 attestierten Ärzte ihm eine
        Lebenserwartung von weniger als 18 Monaten.</p>
        <p class="vb-intro"><strong>c) Ablehnung aller Entlassungsgesuche:</strong>
        Ein zuständiges Gericht lehnte die Anträge auf vorzeitige Entlassung ab – Madoff sollte
        seine Strafe, wie ursprünglich verhängt, bis zum Tod in Haft verbüßen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Dialysebehandlungen im Gefängniskrankenhaus:</strong>
        In seinen letzten Lebensjahren war Madoff auf regelmäßige Dialysebehandlungen
        angewiesen, die in der medizinischen Einrichtung der Bundesstrafanstalt Butner
        durchgeführt wurden.</p>
        <p class="vb-intro"><strong>b) Vereinzelte späte Interviews mit gemischten Tönen:</strong>
        In seinen letzten Lebensjahren gab Madoff einige wenige Interviews, in denen er
        teils Bedauern äußerte, teils aber auch weiterhin die eigene Rolle relativierte.</p>
        <p class="vb-intro"><strong>c) Tod am 14. April 2021 in Butner, North Carolina:</strong>
        Bernie Madoff starb im Alter von 82 Jahren in der Bundesstrafanstalt Butner – etwas
        mehr als zwölf Jahre nach seiner Verhaftung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: Osho</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch <a href="javascript:void(0)" data-route="beruehmte-osho">Osho</a> (SE3w4) litt über
        Jahrzehnte an chronischen, nie ganz eindeutig geklärten Beschwerden, ohne diese je
        wirklich offenzulegen. Sein
        <a href="javascript:void(0)" data-route="krankheitsportraets-osho">eigenes
        Krankheitsporträt</a> zeigt dasselbe SE3w4-Muster wie bei Madoff: Die eigene
        körperliche Realität wird so kontrolliert und diskret behandelt wie das eigene
        öffentliche Bild – bis zuletzt bleibt die Deutungshoheit über die eigene Geschichte
        beim Betroffenen selbst, nicht bei einer Öffentlichkeit, der man Einblick gewährt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der kaum öffentliche Anteilnahme fand:</strong>
        Wie schon bei anderen Fällen dieser Rubrik reagierte die Öffentlichkeit auf Madoffs Tod
        überwiegend nüchtern bis distanziert – die Erinnerung an die Opfer seines Betrugs
        überwog jedes Mitgefühl für sein Leiden.</p>
        <p class="vb-intro"><strong>b) Ein letztes Gesuch, das zum Symbol wurde:</strong>
        Die Ablehnung seines Antrags auf vorzeitige Entlassung wurde in der öffentlichen
        Wahrnehmung auch als Zeichen dafür gelesen, dass für die größten Finanzverbrechen der
        Geschichte keine Kulanz gelten sollte.</p>
        <p class="vb-intro"><strong>c) Ein Ende ohne das Nest, das er einst gebaut hatte:</strong>
        Der Mann, der jahrzehntelang Sicherheit und Vertrauen inszenierte, starb ohne Familie
        an seiner Seite – beide Söhne waren zu diesem Zeitpunkt bereits tot.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Waschbär, der auch im Krankenbett keine Spur hinterließ:</strong>
        Dieselbe Fähigkeit, jahrzehntelang unauffällig zu bleiben, bestimmte auch, wie wenig
        über seinen Gesundheitszustand öffentlich bekannt wurde.</p>
        <p class="vb-intro"><strong>b) Kontrolle über die eigene Erzählung bis zuletzt:</strong>
        Auch die wenigen Interviews aus seinen letzten Jahren wirkten weniger wie spontane
        Geständnisse als wie eine weitere, sorgfältig gewählte Inszenierung.</p>
        <p class="vb-intro"><strong>c) Kein öffentlicher Zusammenbruch der Fassade:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine Berichte
        über ein sichtbares Zerbrechen von Madoffs kontrolliertem Auftreten – die Maske blieb,
        soweit bekannt, bis zum Ende an ihrem Platz.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der zuletzt das kontrollierte Nest selbst wurde:</strong>
        Madoffs ganzes Leben war von dem Versuch geprägt, Sicherheit und Stabilität zu
        inszenieren und abzuschirmen – im Gefängnis richtete sich dieselbe Kontrollhaltung
        notgedrungen auf einen Körper, der sich medizinisch nicht mehr stabilisieren ließ.</p>
        <p class="vb-intro"><strong>b) Diskretion auch in der eigenen Verletzlichkeit:</strong>
        Genau wie Madoff seinen Betrug jahrzehntelang ohne Aufsehen betrieb, drang auch über
        seine Krankheit kaum mehr an die Öffentlichkeit als das medizinisch Notwendige für die
        Gerichtsverfahren um seine Haftentlassung.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Nieren?</strong>
        Für eine selbsterhaltende Drei mit Viererflügel, deren gesamtes Leben um die Frage
        kreiste, was hereingelassen und was ferngehalten wird, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, das im Körper für die Filterung und das saubere Trennen von
        Wertvollem und Abfall zuständig ist, wurde zum Schauplatz des Verfalls – bei einem
        Mann, dessen gesamtes System auf der buchhalterischen Trennung von echten und
        gefälschten Konten beruhte. Diese Deutung ist eine plausible Interpretation, kein
        belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei zwangsläufig zu
        Nierenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Madoffs Fall zeigen lässt, ist ein Muster
        im Umgang mit der eigenen Sterblichkeit, das bei einer ausgeprägten selbsterhaltenden
        Drei mit Viererflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Madoff kannte sein eigenes Muster nicht – die selbsterhaltende Drei mit Viererflügel
        schützt ihr Nest reflexhaft durch Kontrolle und Diskretion, auch wenn das Nest längst
        nur noch aus Fassade besteht, und genau dieses Muster lebte er bis in seine letzten
        Lebensjahre unverändert aus, ohne öffentlich eine andere Form des Umgangs mit der
        eigenen Verletzlichkeit zu entwickeln. Wer das eigene Bedürfnis nach kontrollierter
        Sicherheit nicht als Muster erkennt, kann es auch im eigenen Sterben nicht loslassen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Madoffs</strong> selbsterhaltende Drei mit
        Viererflügel noch einmal ablesen: eine Krankheit, die so diskret verlief wie sein
        jahrzehntelanger Betrug, ein letztes Gesuch um Gnade, das abgelehnt wurde, und ein Tod
        ohne die Familie, die sein Nest einst gewesen war. Der Waschbär, der bis zuletzt keine
        Spur hinterließ – und dessen eigener Körper am Ende der einzige Ort war, den er nicht
        mehr kontrollieren konnte.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Die Taten
        Madoffs sind rechtskräftig verurteilt – das Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-bernie-madoff", label:"Kriminalpsychologie: Bernie Madoff (SE3w4) – größter Anlagebetrug der Geschichte"},
        {route:"krankheitsportraets-osho", label:"Krankheitsporträt: Osho (SE3w4) – dieselbe Diskretion über den eigenen Körper"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se3", label:"Subtyp-Profil SE3"},
      ])}
    </div>
  `);
}

function fridaKahloKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-frida-kahlo-portrait.jpg" alt="Frida Kahlo" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Frida Kahlo</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · 1907–1954</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Frida Kahlo</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-frida-kahlo">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr künstlerisches Lebenswerk und ihre
        Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das dort nur gestreift
        wird: rund 30 Operationen über fast drei Jahrzehnte, eine Beinamputation kurz vor ihrem
        Tod, und ein Leben, das sich buchstäblich weigerte, sich vom eigenen Körper besiegen zu
        lassen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kahlo</strong> ist dem <strong>selbsterhaltenden Typ 2 mit Dreierflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Me First</em>: Die SE2 muss sich selbst
        zuerst versorgen, um überhaupt für andere da sein zu können. Der Dreierflügel bringt
        den Willen hinzu, gesehen zu werden – das eigene Leiden nicht zu verstecken, sondern zu
        gestalten und zu zeigen. Genau dieses Muster durchzieht ihren gesamten
        Krankheitsverlauf.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Kinderlähmung mit sechs Jahren:</strong>
        1913 erkrankte Kahlo an Polio, die ihr rechtes Bein dauerhaft schwächte und dünner
        wachsen ließ – Mitschüler verspotteten sie deswegen als „Frida pata de palo" (Frida
        Stelzbein).</p>
        <p class="vb-intro"><strong>b) Der Busunfall von 1925:</strong>
        Mit achtzehn Jahren erlitt Kahlo einen katastrophalen Unfall, als eine Straßenbahn den
        Bus rammte, in dem sie saß – eine Eisenstange durchbohrte ihr Becken, ihre Wirbelsäule
        brach an drei Stellen, ihr rechtes Bein an elf Stellen.</p>
        <p class="vb-intro"><strong>c) Eine Prognose, die ihr das Gehen und Kinder absprach:</strong>
        Ärzte gaben ihr zunächst kaum Überlebenschancen und rechneten später damit, dass sie
        nie wieder würde gehen oder Kinder bekommen können.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Rund 30 Operationen über fast drei Jahrzehnte:</strong>
        Von 1925 bis kurz vor ihrem Tod 1954 unterzog sich Kahlo Dutzenden Eingriffen an
        Wirbelsäule, Becken und Bein – ein medizinischer Dauerzustand, der nie wirklich endete.</p>
        <p class="vb-intro"><strong>b) Lebenslange Korsetts und Stützkonstruktionen:</strong>
        Über weite Strecken ihres Lebens trug Kahlo Gips- und später Stahlkorsette, die ihren
        Rumpf stabilisierten – sie bemalte einige davon später selbst und machte sie so zu
        einem Teil ihrer Kunst.</p>
        <p class="vb-intro"><strong>c) Mehrere Fehlgeburten durch die Unfallschäden:</strong>
        Die Beckenverletzungen des Unfalls führten zu mehreren Fehlgeburten, die Kahlo in
        schonungslos direkten Werken wie „Henry Ford Hospital" verarbeitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Ausstellungseröffnung im eigenen Bett:</strong>
        1953, bei ihrer einzigen Einzelausstellung in Mexiko, ließ sich die bereits schwer
        kranke Kahlo mit dem Krankenwagen zur Galerie bringen und empfing die Gäste liegend in
        ihrem eigenen, dort aufgestellten Himmelbett.</p>
        <p class="vb-intro"><strong>b) Amputation des rechten Unterschenkels 1953:</strong>
        Nach Jahren fortschreitender Durchblutungsstörungen musste Kahlos rechtes Bein wegen
        Wundbrands unterhalb des Knies amputiert werden – ein Einschnitt, der sie tief in eine
        Depression stürzte.</p>
        <p class="vb-intro"><strong>c) Tod am 13. Juli 1954 in Mexiko-Stadt:</strong>
        Frida Kahlo starb offiziell an einer Lungenembolie im Alter von 47 Jahren – manche
        Historiker vermuten bis heute einen möglichen Suizid durch Überdosis, ohne dass dies je
        zweifelsfrei geklärt wurde.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: Nusrat Fateh Ali Khan und Mozart</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Sowohl <a href="javascript:void(0)" data-route="beruehmte-nusrat-fateh-ali-khan">Nusrat
        Fateh Ali Khan</a> als auch
        <a href="javascript:void(0)" data-route="beruehmte-wolfgang-amadeus-mozart">Wolfgang
        Amadeus Mozart</a> (beide SE2w3) arbeiteten und traten bis kurz vor ihrem Tod öffentlich
        auf, obwohl ihr Körper längst schwer erkrankt war. Ihre
        <a href="javascript:void(0)" data-route="krankheitsportraets-nusrat-fateh-ali-khan">Krankheitsporträts</a>
        zeigen dasselbe SE2w3-Muster wie bei Kahlo: Rückzug ist keine Option, solange die
        eigene Kraft noch für einen letzten Auftritt reicht – auch wenn dieser Auftritt, wie
        bei Kahlos Ausstellungseröffnung im eigenen Bett, den Körper selbst zum Kunstwerk
        macht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das ohne den Unfall nie entstanden wäre:</strong>
        Kahlo selbst sagte sinngemäß, sie male sich selbst, weil sie so oft allein sei und weil
        sie das Objekt sei, das sie am besten kenne – ihr Lebenswerk ist untrennbar mit ihrem
        Krankheitsverlauf verwoben.</p>
        <p class="vb-intro"><strong>b) Eine Ausstellung, die zur Legende wurde:</strong>
        Die Bild einer schwerkranken Künstlerin, die die eigene Ausstellungseröffnung vom
        eigenen Krankenbett aus zelebrierte, wurde zu einem der bekanntesten Bilder der
        Kunstgeschichte des 20. Jahrhunderts.</p>
        <p class="vb-intro"><strong>c) Ein Tod, dessen genaue Umstände offenbleiben:</strong>
        Die bis heute ungeklärte Frage, ob ihr Tod ein natürliches Ende oder ein bewusster
        letzter Akt war, spiegelt die Unmöglichkeit, Kahlos Verhältnis zu Schmerz und Kontrolle
        auf eine einfache Formel zu bringen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Flusspferd, das sein Revier bis zuletzt verteidigte:</strong>
        Selbst mit amputiertem Bein und tiefer Depression gab Kahlo das Malen nicht auf –
        dieselbe Fürsorge, die sie zuerst sich selbst schuldete, hielt sie bis zum Ende am
        Werk.</p>
        <p class="vb-intro"><strong>b) Schmerz, der zum Bild und damit sichtbar wurde:</strong>
        Statt ihr Leiden zu verbergen, malte Kahlo offen gezeigte Operationsnarben, Korsette
        und medizinische Instrumente – der Dreierflügel, der aus privatem Schmerz ein
        öffentliches Bild formte, bis in die eigene Krankheitsgeschichte hinein.</p>
        <p class="vb-intro"><strong>c) Ein letzter Tagebucheintrag zwischen Schmerz und Lebenswillen:</strong>
        „Ich hoffe, der Abgang ist fröhlich – und ich hoffe, nie wiederzukommen", schrieb Kahlo
        kurz vor ihrem Tod – kein Satz der Resignation, sondern einer, der beides zugleich
        hielt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Fast drei Jahrzehnte im Ausnahmezustand des eigenen Körpers:</strong>
        Von ihrem 18. Lebensjahr bis zu ihrem Tod mit 47 kannte Kahlo kaum eine Phase ohne
        Schmerzen, Operationen oder Korsette – kein plötzlicher Einbruch, sondern ein
        lebenslanger, sich stetig zuspitzender Ausnahmezustand.</p>
        <p class="vb-intro"><strong>b) Die Weigerung, sich zurückzuziehen:</strong>
        Das Schicksalsmuster der Zwei ist der Stolz – die Überzeugung, sich selbst und anderen
        unentbehrlich zu sein, auch unter größter Belastung. Kahlo hielt öffentliche Auftritte
        aufrecht, selbst als ihr Körper längst an seine Grenzen gestoßen war.</p>
        <p class="vb-intro"><strong>c) Der eigene Körper als erstes und letztes Kunstwerk:</strong>
        Von den ersten Selbstporträts im Krankenbett bis zur Ausstellungseröffnung im eigenen
        Bett schloss sich ein Kreis: Kahlos Kunst begann mit dem eigenen, verletzten Körper und
        endete mit ihm.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der eigene Körper als Leinwand?</strong>
        Für eine selbsterhaltende Zwei mit Dreierflügel, deren tiefstes Bedürfnis darin
        besteht, sich zuerst selbst zu versorgen und dieses Leiden dann sichtbar zu gestalten,
        liegt eine Deutung nahe: Ausgerechnet ein Körper, der beinahe fünfzig Jahre lang
        Schmerz produzierte, wurde zur ergiebigsten Quelle ihres gesamten künstlerischen
        Schaffens – Leiden, das nicht verdrängt, sondern zum zentralen Thema gemacht wurde.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        chronischen Körperschäden führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Kahlos Fall zeigen lässt, ist ein Muster im
        Umgang mit chronischem Leiden, das bei einer ausgeprägten selbsterhaltenden Zwei mit
        Dreierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kahlo kannte das Enneagramm als modernes Persönlichkeitsmodell nicht – es entstand erst
        Jahrzehnte nach ihrem Tod in seiner heutigen Form. Sie lebte den Zwang, sich zuerst
        selbst zu versorgen und dann dieses Leiden sichtbar zu machen, völlig unbewusst aus –
        nicht als Strategie, sondern als einzige ihr bekannte Weise, mit einem Leben voller
        Schmerz umzugehen. Wer das eigene Muster, Leiden erst durchleben und dann gestalten zu
        müssen, nicht kennt, kann sich selbst auch nicht die Pause gönnen, die echte Heilung
        manchmal erfordert hätte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Kahlos</strong> selbsterhaltende Zwei mit
        Dreierflügel noch einmal ablesen: ein Körper, der fast drei Jahrzehnte lang Schmerz
        produzierte, und eine Frau, die diesen Schmerz nie verdrängte, sondern zur zentralen
        Sprache ihrer Kunst machte. Das Flusspferd, das sein Wasser nie verlassen konnte – und
        das gerade darin lernte, bis zum letzten Atemzug zu gestalten, statt nur zu
        überleben.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-frida-kahlo", label:"Porträt: Frida Kahlo (SE2w3) – Lebenswerk"},
        {route:"krankheitsportraets-yayoi-kusama", label:"Krankheitsporträt: Yayoi Kusama (SE2w3) – Kunst aus psychischem statt körperlichem Leiden"},
        {route:"krankheitsportraets-nusrat-fateh-ali-khan", label:"Krankheitsporträt: Nusrat Fateh Ali Khan (SE2w3) – dieselbe Weigerung zurückzuweichen"},
        {route:"krankheitsportraets-wolfgang-amadeus-mozart", label:"Krankheitsporträt: Wolfgang Amadeus Mozart (SE2w3)"},
        {route:"krankheitsportraets-ai-weiwei", label:"Krankheitsporträt: Ai Weiwei (SE2w3) – Gewalt, die zum Kunstwerk wurde"},
        {route:"krankheitsportraets-mr-t", label:"Krankheitsporträt: Mr. T (SE2w3) – Körper als sichtbares Zeugnis"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

function johnGottiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/john-gotti-portrait.jpg" alt="John Gotti" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Gotti</p>
        <p class="krim-portrait-typ">SO8w7 · Sozialer Typ 8 mit Siebenerflügel · 1940–2002</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Löwe</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Tierentsprechung: Löwe" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>John Gotti</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-john-gotti">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um seinen Aufstieg zum Boss der Gambino-Familie
        und seine Typstruktur als „Teflon-Don". Diese Seite vertieft ein Kapitel, das dort nur am
        Rande erwähnt wird: eine Kehlkopfkrebs-Diagnose 1998 in Isolationshaft, ein Kampf gegen
        die Krankheit ohne jedes öffentliche Eingeständnis von Schwäche, und einen Tod 2002 in
        Bundeshaft.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Gotti</strong> ist dem <strong>sozialen Typ 8 mit Siebenerflügel</strong>
        zugeordnet. Naranjo beschrieb diesen Subtyp als den der Freundschaft und Bruderschaft:
        Herrschaft, die sich als Schutz des eigenen Rudels versteht. Der Siebenerflügel bringt
        Genuss, Glanz und die Freude am Rampenlicht hinzu. Genau diese Weigerung, Schwäche
        zuzugeben, bestimmte auch, wie Gotti seiner tödlichen Krankheit begegnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose im Hochsicherheitsgefängnis 1998:</strong>
        Sechs Jahre nach seiner Verurteilung zu lebenslanger Haft wurde bei Gotti Kehlkopfkrebs
        diagnostiziert – zu diesem Zeitpunkt saß er bereits in strenger Isolationshaft.</p>
        <p class="vb-intro"><strong>b) Operation und zunächst scheinbarer Erfolg:</strong>
        Nach einer ersten Behandlung schien die Krankheit zunächst zurückgedrängt – Berichte aus
        dieser Zeit sprachen von einer vorübergehenden Besserung seines Zustands.</p>
        <p class="vb-intro"><strong>c) Rückkehr der Krankheit kurze Zeit später:</strong>
        Der Krebs kehrte zurück und breitete sich aus – ein Verlauf, der sich über die
        folgenden Jahre bis zu seinem Tod fortsetzte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Verlegung in ein Gefängniskrankenhaus:</strong>
        Mit fortschreitender Erkrankung wurde Gotti in die medizinische Einrichtung der
        Bundesstrafanstalt Springfield, Missouri, verlegt, die auf die Behandlung schwer
        kranker Häftlinge spezialisiert ist.</p>
        <p class="vb-intro"><strong>b) Kaum öffentliche Bilder der Krankheit:</strong>
        Anders als bei seinen früheren, bewusst inszenierten öffentlichen Auftritten drangen
        aus dieser Zeit nur wenige Bilder oder Berichte nach außen – der Mann, der einst das
        Rampenlicht suchte, verschwand zunehmend aus der Öffentlichkeit.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Eingeständnis von Schwäche:</strong>
        In den seltenen Berichten aus dieser Zeit finden sich keine Hinweise darauf, dass
        Gotti seine Krankheit als Schwäche anerkannte oder öffentlich thematisierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Extreme Isolation während der Behandlung:</strong>
        Gotti verbrachte seine letzten Haftjahre in Einzelhaft mit stark eingeschränktem
        Besuchsrecht – ausgerechnet ein Mann, dessen gesamtes Leben auf Sichtbarkeit und
        Gefolgschaft ausgerichtet war, verbrachte seine letzten Jahre fast vollständig
        abgeschnitten.</p>
        <p class="vb-intro"><strong>b) Der Niedergang des eigenen Reichs im Hintergrund:</strong>
        Während Gotti erkrankte, verlor die Gambino-Familie unter seinem Sohn zunehmend an
        Einfluss – der König konnte sein Reich von der Isolationszelle aus nicht mehr
        schützen.</p>
        <p class="vb-intro"><strong>c) Tod am 10. Juni 2002 in Springfield, Missouri:</strong>
        John Gotti starb im Alter von 61 Jahren im Bundesgefängnis – fast genau zehn Jahre
        nach seiner Verurteilung zu lebenslanger Haft.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Begräbnis, das noch einmal an den früheren Glanz erinnerte:</strong>
        Trotz behördlicher Bedenken versammelten sich Tausende auf den Straßen von Queens, um
        dem Trauerzug zu folgen – ein letztes Aufflackern der Loyalität, die Gotti zu Lebzeiten
        für sich beanspruchte.</p>
        <p class="vb-intro"><strong>b) Ein Tod fernab der Bühne, die er einst suchte:</strong>
        Der Mann, der Kameras zuwinkte und Journalisten empfing, starb isoliert in einem
        Gefängniskrankenhaus – ein scharfer Kontrast zu seinem öffentlichen Selbstbild.</p>
        <p class="vb-intro"><strong>c) Ein Erbe, das ihn nicht überlebte:</strong>
        Sein Sohn versuchte, das Familienimperium fortzuführen, scheiterte jedoch – das Reich
        des Löwen überlebte seinen König nicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Löwe, der keine Schwäche zeigen durfte:</strong>
        Dieselbe Weigerung, jemals Verletzlichkeit einzugestehen, die Gottis gesamtes
        öffentliches Auftreten prägte, bestimmte auch, wie wenig über seine Krankheit nach
        außen drang.</p>
        <p class="vb-intro"><strong>b) Wenn die Acht unter chronischem Stress zur Fünf wird:</strong>
        Die extreme Isolation seiner letzten Jahre – erzwungen durch die Haftbedingungen, aber
        durch sein Schweigen über die eigene Krankheit noch verstärkt – zeigt ein Muster, das
        über die übliche Dominanz der Acht mit Siebenerflügel hinausgeht. Wer unter
        chronischem Druck lebt, bewegt sich zunehmend entlang seiner Stresslinie in Richtung
        seines Stresspunkts – bei der Acht ist das die Fünf. Der Rückzug aus der
        Öffentlichkeit, das Verschwinden aus dem Rampenlicht, das er einst so bewusst gesucht
        hatte, erinnert eher an die abgeschottete Zurückgezogenheit ihres Stresspunkts als an
        die offene, raumgreifende Präsenz des Kerntyps – bei unverändertem Kerntyp SO8w7.</p>
        <p class="vb-intro"><strong>c) Kein öffentlicher Zusammenbruch der Fassade:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine Berichte
        über ein sichtbares Zerbrechen von Gottis kontrolliertem Auftreten – die Löwenhaltung
        blieb, soweit bekannt, bis zum Ende bestehen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der sich nicht mehr beherrschen ließ:</strong>
        Gottis gesamtes Leben war von der Überzeugung geprägt, dass Stärke und Kontrolle jede
        Bedrohung abwehren können – der Krebs war die erste Bedrohung, gegen die weder
        Loyalität noch Einschüchterung halfen.</p>
        <p class="vb-intro"><strong>b) Isolation als Umkehrung des eigenen Lebensmusters:</strong>
        Ein Mann, der sein ganzes Leben lang die Nähe seines Rudels suchte und brauchte, verbrachte
        seine letzten Jahre in erzwungener Einzelhaft – eine Umkehrung, die seinem Kernthema
        diametral entgegenstand.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Kehlkopf?</strong>
        Für eine soziale Acht mit Siebenerflügel, deren gesamte Macht auf der eigenen Stimme,
        der eigenen Präsenz und dem eigenen Auftritt beruhte, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, das ihm Befehle erteilen, Loyalität einfordern und sich in
        der Öffentlichkeit Gehör verschaffen ließ, wurde zum Schauplatz des Verfalls – und
        nahm ihm buchstäblich die Stimme, mit der er sein Reich einst regiert hatte. Diese
        Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Acht zwangsläufig zu Kehlkopfkrebs führt
        – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Gottis Fall zeigen lässt, ist ein Muster im Umgang mit einer tödlichen
        Diagnose, das bei einer ausgeprägten sozialen Acht mit Siebenerflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Gotti kannte sein eigenes Muster nicht – die soziale Acht mit Siebenerflügel begegnet
        jeder Bedrohung reflexhaft mit Kontrolle und ungebrochener Stärke nach außen, statt sie
        je als eigene Verletzlichkeit anzuerkennen, und genau dieses Muster lebte er bis in
        seine letzten Haftjahre unverändert aus. Wer die eigene Unfähigkeit, Schwäche
        zuzugeben, nicht als Muster erkennt, kann sie auch im eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Acht mit Siebenerflügel erklärt bei <strong>Gotti</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Macht auf Sichtbarkeit und
        Stimme beruhte, verlor beides gleichzeitig – die Stimme an den Krebs, die Sichtbarkeit
        an die Isolationshaft. Der Löwe, der niemals im Verborgenen operieren wollte – und der
        seine letzten Jahre ausgerechnet dort verbrachte, unsichtbar für die Welt, die ihn
        einst bewunderte.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. John Gotti
        wurde 1992 wegen Mordes, Erpressung und Racketeering zu lebenslanger Haft ohne
        Bewährung verurteilt und starb 2002 in Haft. Das Enneagramm erklärt, es rechtfertigt
        nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-john-gotti", label:"Kriminalpsychologie: John Gotti (SO8w7) – Boss der Gambino-Familie"},
        {route:"krankheitsportraets-fritz-perls", label:"Krankheitsporträt: Fritz Perls (SO8w7) – dieselbe Weigerung, Schwäche zuzugeben"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so8", label:"Subtyp-Profil SO8"},
      ])}
    </div>
  `);
}

function ludwigXIVKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-ludwig-xiv-portrait.jpg" alt="Ludwig XIV." class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ludwig XIV. – der Sonnenkönig</p>
        <p class="krim-portrait-typ">SO3w2 · Sozialer Typ 3 mit Zweierflügel · 1638–1715</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ludwig XIV.</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ludwig-xiv">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Selbstinszenierung als Sonnenkönig
        und den Bau von Versailles. Diese Seite vertieft ein Kapitel, das dort nur am Rande
        erwähnt wird: Jahrzehnte chronischer Gicht, eine 1686 unter strengster Geheimhaltung
        durchgeführte Operation an einer Analfistel, und einen letzten Kampf gegen Wundbrand,
        an dem er 1715 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ludwig XIV.</strong> ist dem <strong>sozialen Typ 3 mit Zweierflügel</strong>
        zugeordnet. Die soziale Drei lebt für das makellose, öffentlich sichtbare Bild; der
        Zweierflügel bindet Gunst und Nähe als Machtinstrument ein. Genau diese Notwendigkeit
        eines makellosen Bildes bestimmte auch, wie er mit seiner eigenen, jahrzehntelangen
        Krankengeschichte umging – nicht offen, sondern hinter den Kulissen des
        Hofzeremoniells verborgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Gichtanfälle bereits in mittleren Jahren:</strong>
        Ludwig litt schon seit seinen Vierzigern wiederkehrend an schmerzhaften Gichtanfällen,
        die zeitweise sein Gehen erheblich einschränkten – ein Zustand, der ihn über
        Jahrzehnte begleitete.</p>
        <p class="vb-intro"><strong>b) Zahnprobleme mit fatalen Folgen:</strong>
        1685 ließ er sich sämtliche Oberkieferzähne entfernen; eine misslungene Behandlung
        riss dabei ein Loch in seinen Gaumen, das erst nach mehreren schmerzhaften
        Nachoperationen mit einem glühenden Eisen geschlossen werden konnte.</p>
        <p class="vb-intro"><strong>c) Eine Analfistel, die zum Staatsgeheimnis wurde:</strong>
        1686 diagnostizierten seine Ärzte eine schmerzhafte Analfistel – ein Leiden, das
        strikt vor der Öffentlichkeit verborgen blieb, obwohl es sein Sitzen und Reiten
        zunehmend beeinträchtigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die „Grande Opération" im November 1686:</strong>
        Der königliche Chirurg Charles-François Félix führte die bis dahin riskante Operation
        ohne Betäubung durch – Ludwig soll währenddessen kaum einen Laut von sich gegeben
        haben, um seine Fassung vor den anwesenden Höflingen zu wahren.</p>
        <p class="vb-intro"><strong>b) Genesung unter strengster Geheimhaltung:</strong>
        Die wochenlange, schmerzhafte Genesungsphase fand weitgehend unter Ausschluss der
        Öffentlichkeit statt; offizielle Verlautbarungen sprachen bewusst vage von
        „gesundheitlichen Beschwerden".</p>
        <p class="vb-intro"><strong>c) Rückkehr zum vollen Hofzeremoniell trotz Schmerzen:</strong>
        Kaum genesen, nahm Ludwig seine öffentlichen Auftritte, das tägliche Lever und Coucher,
        umgehend wieder in vollem Umfang auf – als sei nichts geschehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Jahrzehntelange Fortführung trotz fortschreitender Gicht:</strong>
        Bis ins hohe Alter ließ sich Ludwig, wenn nötig, in einem Rollstuhl oder auf einer
        Sänfte zu öffentlichen Anlässen tragen, statt Auftritte ganz abzusagen.</p>
        <p class="vb-intro"><strong>b) Straffe Weiterführung der Regierungsgeschäfte:</strong>
        Auch in Phasen starker körperlicher Beeinträchtigung leitete er weiterhin täglich
        Ministerräte und Audienzen – ein Rückzug aus der aktiven Regierungsführung kam für ihn
        nicht infrage.</p>
        <p class="vb-intro"><strong>c) Wundbrand im rechten Bein ab August 1715:</strong>
        Wenige Tage vor seinem Tod diagnostizierten die Ärzte einen fortschreitenden Wundbrand
        im Bein – eine Amputation, wie sie später Standard wurde, lehnten die behandelnden
        Ärzte der Zeit als zu riskant ab.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Hof, der von der Krankheit kaum etwas erfuhr:</strong>
        Selbst enge Höflinge erfuhren oft erst im Nachhinein, wie ernst Ludwigs Leiden
        tatsächlich gewesen war – das öffentliche Bild des makellosen Sonnenkönigs blieb bis
        zuletzt weitgehend intakt.</p>
        <p class="vb-intro"><strong>b) Eine letzte Rede an den Urenkel als Nachfolger:</strong>
        Auf dem Sterbebett richtete er eine seltene, fast selbstkritische Mahnung an den
        fünfjährigen Ludwig XV., nicht seinem Beispiel im übertriebenen Bauen und
        Kriegführen zu folgen.</p>
        <p class="vb-intro"><strong>c) Tod am 1. September 1715 in Versailles:</strong>
        Ludwig starb im Alter von 76 Jahren nach 72 Regierungsjahren – länger als jeder andere
        Monarch der europäischen Geschichte, in genau jenem Schloss, das er zum Symbol seiner
        eigenen Unangreifbarkeit gemacht hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Fassade, die keinen Riss zeigen durfte:</strong>
        Dieselbe Notwendigkeit, stets das makellose Bild des Sonnenkönigs zu wahren, die
        Ludwigs gesamte Selbstinszenierung prägte, bestimmte auch, wie konsequent er seine
        eigenen Leiden vor der Öffentlichkeit verbarg.</p>
        <p class="vb-intro"><strong>b) Kontrolle über die eigene Krankengeschichte als letzte Bühne:</strong>
        Selbst die Operation von 1686 – eine der intimsten und schmerzhaftesten Erfahrungen
        seines Lebens – wurde zu einem Vorgang, den er mit derselben disziplinierten
        Beherrschung durchstand, mit der er auch öffentliche Auftritte kontrollierte: kein
        Laut, kein sichtbarer Zusammenbruch vor den anwesenden Höflingen.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug aus der Rolle bis zum letzten Atemzug:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es bei Ludwig
        keine Phase des offenen Rückzugs aus der Öffentlichkeit – die Rolle des Sonnenkönigs
        wurde bis zum Sterbebett aufrechterhalten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der sich der Inszenierung widersetzte:</strong>
        Ludwigs gesamtes Leben war von der Überzeugung geprägt, dass ein makelloses,
        kontrolliertes Bild jede Situation beherrschbar macht – Gicht, Analfistel und
        schließlich Wundbrand waren Bedrohungen, die sich dieser Kontrolle zunehmend
        entzogen.</p>
        <p class="vb-intro"><strong>b) Geheimhaltung als Fortsetzung der Selbstinszenierung:</strong>
        Ein Mann, der sein ganzes Leben als öffentliches Schauspiel gestaltete, behandelte
        ausgerechnet seine intimsten körperlichen Leiden als das Einzige, das der
        Öffentlichkeit vorenthalten blieb – eine bewusste Lücke in einem sonst lückenlos
        inszenierten Leben.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Bein?</strong>
        Für eine soziale Drei mit Zweierflügel, deren gesamte Macht auf Bewegung, Auftritt und
        physischer Präsenz vor Publikum beruhte, liegt eine Deutung nahe: Ausgerechnet jenes
        Körperteil, das ihn zu Fuß durch Versailles, auf die Jagd und zu öffentlichen
        Zeremonien trug, wurde zum Schauplatz des Verfalls – und beraubte ihn in seinen
        letzten Tagen genau jener Mobilität, die sein gesamtes öffentliches Selbstbild trug.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu Gicht oder
        Wundbrand führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Ludwigs Fall zeigen lässt, ist ein Muster im Umgang mit
        chronischer Krankheit, das bei einer ausgeprägten sozialen Drei mit Zweierflügel immer
        wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Ludwig kannte sein eigenes Muster nicht – die soziale Drei mit Zweierflügel begegnet
        jeder Bedrohung des eigenen Bildes reflexhaft mit Geheimhaltung und makelloser Fassade,
        statt Schwäche je offen zuzulassen, und genau dieses Muster lebte er bis in seine
        letzten Lebenstage unverändert aus. Wer die eigene Notwendigkeit, stets makellos zu
        erscheinen, nicht als Muster erkennt, kann sie auch im eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Drei mit Zweierflügel erklärt bei <strong>Ludwig XIV.</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Macht auf einem
        makellosen, öffentlich sichtbaren Bild beruhte, verwandelte selbst seine intimsten
        Leiden in eine streng kontrollierte Kulisse – bis das Bein, das ihn sein Leben lang
        durch Versailles getragen hatte, ihm am Ende die letzte Bühne selbst verwehrte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ludwig-xiv", label:"Porträt: Ludwig XIV. (SO3w2) – der Sonnenkönig"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

function ojSimpsonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/oj-simpson-portrait.jpg" alt="O.J. Simpson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">O.J. Simpson</p>
        <p class="krim-portrait-typ">SO3w4 · Sozialer Typ 3 mit Viererflügel · 1947–2024</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>O.J. Simpson</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-oj-simpson">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um den Mordprozess des Jahrhunderts und seine
        Typstruktur als öffentlich inszenierter „Gepard". Diese Seite vertieft ein Kapitel, das
        dort nur am Rande erwähnt wird: eine Prostatakrebs-Diagnose 2023, einen zunächst weitgehend
        vor der Öffentlichkeit verborgenen Krankheitsverlauf, und einen Tod am 10. April 2024.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Simpson</strong> ist dem <strong>sozialen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die soziale Drei baut ihre Identität um das öffentliche Bild; der
        Viererflügel bringt eine Neigung zur Dramatisierung und zur eigenen Erzählung des
        eigenen Leidens hinzu. Genau diese Notwendigkeit, Herr der eigenen Geschichte zu
        bleiben, bestimmte auch, wie er seiner letzten, tödlichen Erkrankung begegnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose 2023, zunächst nicht öffentlich gemacht:</strong>
        Bei Simpson wurde 2023 Prostatakrebs diagnostiziert – anders als bei seinen früheren
        öffentlichen Auftritten wählte er zunächst, die Diagnose nicht selbst an die
        Öffentlichkeit zu tragen.</p>
        <p class="vb-intro"><strong>b) Weiterhin aktive Präsenz in sozialen Medien:</strong>
        Auch nach der Diagnose postete Simpson weiterhin regelmäßig Videos auf seinen
        Social-Media-Kanälen, in denen er gesund, humorvoll und optimistisch wirkte – ein
        Bild, das seinem tatsächlichen Zustand zu diesem Zeitpunkt bereits widersprach.</p>
        <p class="vb-intro"><strong>c) Verschlechterung im Verlauf des Jahres 2024:</strong>
        Der Krebs verschlechterte sich im Frühjahr 2024 deutlich, was schließlich zu seiner
        Einweisung ins Krankenhaus führte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Familie bestätigte die Diagnose erst nach seinem Tod:</strong>
        Erst mit der offiziellen Todesmitteilung seiner Familie am 11. April 2024 wurde
        öffentlich bekannt, dass Simpson an Prostatakrebs gestorben war – zuvor war die
        Diagnose der breiten Öffentlichkeit nicht bekannt.</p>
        <p class="vb-intro"><strong>b) Letzte Lebensmonate in Las Vegas:</strong>
        Simpson verbrachte seine letzten Monate in seinem Zuhause in Las Vegas, wo er seit
        seiner Haftentlassung 2017 lebte, weitgehend zurückgezogen von den öffentlichen
        Auftritten früherer Jahre.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Eingeständnis der Schwere der Krankheit:</strong>
        Bis zuletzt vermied Simpson öffentliche Aussagen, die den tatsächlichen Ernst seines
        Zustands offenbart hätten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Familie als Verkünderin der eigenen Geschichte:</strong>
        Simpsons Familie wählte die Formulierung, er sei „von seinen Kindern umgeben"
        gestorben – eine letzte, kontrollierte Erzählung, die dem Bild eines versöhnlichen
        Lebensendes entsprach, das er selbst kaum noch mitgestalten konnte.</p>
        <p class="vb-intro"><strong>b) Fortsetzung der öffentlichen Selbstdarstellung bis kurz vor dem Ende:</strong>
        Noch wenige Wochen vor seinem Tod veröffentlichte Simpson Videobotschaften, in denen er
        Gerüchte über seinen Gesundheitszustand zurückwies und sich als „noch hier" und aktiv
        präsentierte.</p>
        <p class="vb-intro"><strong>c) Tod am 10. April 2024 in Las Vegas:</strong>
        O.J. Simpson starb im Alter von 76 Jahren an den Folgen seines Prostatakrebses – fast
        genau 30 Jahre nach den Morden, die sein Leben für immer geprägt hatten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine letzte Überraschung für die Öffentlichkeit:</strong>
        Weil die Diagnose so lange verborgen geblieben war, kam die Todesnachricht für die
        meisten Beobachter überraschend – ein letzter Erfolg der jahrelang gepflegten
        Kontrolle über das eigene öffentliche Bild.</p>
        <p class="vb-intro"><strong>b) Gemischte, kontroverse Reaktionen:</strong>
        Die Reaktionen auf seinen Tod fielen gespalten aus – zwischen Nachrufen auf den
        einstigen Football-Star und Erinnerungen an die Morde an Nicole Brown Simpson und Ron
        Goldman, die seinen Namen für immer prägten.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug von der eigenen Erzählung:</strong>
        Selbst die letzten Monate blieben, soweit bekannt, geprägt von demselben Bedürfnis,
        die eigene Geschichte selbst zu erzählen, das sein gesamtes öffentliches Leben
        bestimmt hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Bild, das bis zuletzt gepflegt wurde:</strong>
        Dieselbe Notwendigkeit, das öffentliche Bild ungebrochen zu halten, die Simpsons
        gesamtes Leben – vom NFL-Ruhm bis zum Prozess des Jahrhunderts – geprägt hatte,
        bestimmte auch, wie lange er seine Krankheit vor der Öffentlichkeit verbarg.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel und die eigene Erzählung des Leidens:</strong>
        Anders als eine gesunde, ungeflügelte Drei, die eine Krankheit einfach als Tatsache
        behandeln und weitermachen würde, zeigte sich bei Simpson bis zuletzt das Bedürfnis,
        Autor der eigenen Geschichte zu bleiben – dieselbe Dynamik, die bereits sein
        Abschiedsbrief von 1994 und sein Buch „If I Did It" zeigten, nun angewandt auf die
        eigene Sterblichkeit.</p>
        <p class="vb-intro"><strong>c) Kein sichtbarer öffentlicher Zusammenbruch:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine Berichte
        über ein öffentliches Eingestehen von Schwäche oder Angst vor dem Tod – die
        kontrollierte Fassade blieb, soweit bekannt, bis zum Ende bestehen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der sich der Inszenierung entzog:</strong>
        Simpsons gesamtes Leben war von der Überzeugung geprägt, dass ein makelloses,
        kontrolliertes öffentliches Bild jede Krise überstehen kann – der Krebs war eine
        Bedrohung, die sich dieser Kontrolle zunehmend entzog, bis der Tod selbst zur letzten
        unkontrollierbaren Tatsache wurde.</p>
        <p class="vb-intro"><strong>b) Geheimhaltung als letzte Form der Bildkontrolle:</strong>
        Ein Mann, dessen gesamtes Leben von öffentlicher Sichtbarkeit geprägt war – vom
        Football-Feld bis zur live übertragenen Verfolgungsjagd –, behandelte ausgerechnet
        seine eigene tödliche Krankheit als das Einzige, das der Öffentlichkeit vorenthalten
        blieb.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Prostata?</strong>
        Für eine soziale Drei mit Viererflügel, deren gesamte Identität auf körperlicher
        Leistungsfähigkeit, Männlichkeit und öffentlicher Präsenz beruhte – vom
        Ausnahmesportler zum gefeierten Filmstar –, liegt eine Deutung nahe: Ausgerechnet ein
        Organ, das eng mit männlicher Vitalität und Kontrolle über den eigenen Körper
        verbunden ist, wurde zum Schauplatz des Verfalls, verborgen an einer Stelle, die sich
        öffentlicher Zurschaustellung besonders entzieht. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu Prostatakrebs führt
        – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Simpsons Fall zeigen lässt, ist ein Muster im Umgang mit einer tödlichen
        Diagnose, das bei einer ausgeprägten sozialen Drei mit Viererflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Simpson kannte sein eigenes Muster nicht – die soziale Drei mit Viererflügel begegnet
        jeder Bedrohung des eigenen Bildes reflexhaft mit Geheimhaltung und kontrollierter
        Selbstdarstellung, statt Schwäche je offen zuzulassen, und genau dieses Muster lebte er
        bis in seine letzten Lebensmonate unverändert aus. Wer die eigene Notwendigkeit,
        Autor der eigenen Geschichte zu bleiben, nicht als Muster erkennt, kann sie auch im
        eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Drei mit Viererflügel erklärt bei <strong>Simpson</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamtes Leben ein öffentliches
        Schauspiel war, verwandelte ausgerechnet seine letzte, tödliche Rolle in das einzige
        Kapitel, das er nicht mehr selbst inszenieren konnte – und behandelte es deshalb als
        das eine Kapitel, das der Welt verborgen blieb.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. O.J. Simpson
        wurde 1995 im Strafprozess wegen Doppelmordes freigesprochen, 1997 jedoch im
        Zivilverfahren für den Tod seiner Ex-Frau Nicole Brown Simpson und Ron Goldman
        haftbar gemacht. Das Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-oj-simpson", label:"Kriminalpsychologie: O.J. Simpson (SO3w4) – der Prozess des Jahrhunderts"},
        {route:"krankheitsportraets-ludwig-xiv", label:"Krankheitsporträt: Ludwig XIV. (SO3w2) – dieselbe Fassade bis zuletzt"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

function richardRamirezKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/richard-ramirez-portrait.jpg" alt="Richard Ramírez" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Richard Ramírez</p>
        <p class="krim-portrait-typ">SX3w4 · Sexueller Typ 3 mit Viererflügel · 1960–2013</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Pfau</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Tierentsprechung: Pfau" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Richard Ramírez</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-richard-ramirez">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um seine Mordserie als „Night Stalker" und
        seine bewusste Selbstmythologisierung. Diese Seite vertieft ein Kapitel, das dort nur am
        Rande erwähnt wird: eine Diagnose des B-Zell-Lymphoms, einen jahrelangen Krankheitsverlauf
        in der Todeszelle, und einen Tod 2013 vor der Vollstreckung seines Todesurteils.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ramírez</strong> ist dem <strong>sexuellen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die sexuelle Drei will unvergesslich sein; der Viererflügel macht Dunkelheit
        und Einzigartigkeit zum Kern des Selbstbilds. Genau dieses Bedürfnis, eine unauslöschliche
        Figur zu bleiben, bestimmte auch, wie er seiner tödlichen Krankheit in der Todeszelle
        begegnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose des B-Zell-Lymphoms in Haft:</strong>
        Nach Jahren in der Todeszelle des San-Quentin-Gefängnisses wurde bei Ramírez ein
        B-Zell-Lymphom diagnostiziert, eine bösartige Erkrankung des lymphatischen Systems.</p>
        <p class="vb-intro"><strong>b) Verlegung in ein Gefängniskrankenhaus:</strong>
        Mit fortschreitender Erkrankung wurde er in die medizinische Einrichtung des Marin
        County Jail in Greenbrae verlegt, wo unheilbar kranke Häftlinge behandelt wurden.</p>
        <p class="vb-intro"><strong>c) Fortschreitende Verschlechterung über Monate:</strong>
        Der Krankheitsverlauf zog sich über einen längeren Zeitraum hin, mit sichtbarer
        körperlicher Verschlechterung, die sich seinem letzten öffentlichen Erscheinungsbild
        im Gerichtssaal deutlich entgegensetzte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Kaum öffentliche Berichterstattung über den Zustand:</strong>
        Anders als bei seinem inszenierten Auftreten während des Prozesses drangen aus der Zeit
        seiner Erkrankung nur wenige Details nach außen.</p>
        <p class="vb-intro"><strong>b) Fortgesetzter Kontakt zu seiner Ehefrau:</strong>
        Ramírez war seit 1996 mit Doreen Lioy verheiratet, die ihn während des Prozesses
        kennengelernt hatte; der Kontakt zu ihr bestand nach verfügbaren Berichten bis zuletzt
        fort, auch wenn Details zur Beziehung in seinen letzten Lebensjahren spärlich dokumentiert
        sind.</p>
        <p class="vb-intro"><strong>c) Kein bekannter öffentlicher Auftritt mehr nach der Diagnose:</strong>
        Nach Jahrzehnten in der Todeszelle, in denen er zeitweise noch Interviews gab, gibt es
        aus der eigentlichen Krankheitsphase keine bekannten weiteren öffentlichen Äußerungen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fast drei Jahrzehnte Wartezeit auf die Vollstreckung:</strong>
        Ramírez war seit seinem Todesurteil 1989 in der Todeszelle, ohne dass es zur
        Vollstreckung kam – Kaliforniens langwieriges Berufungsverfahren ließ ihm faktisch
        Jahrzehnte Zeit, in denen die Krankheit ihn schließlich einholte.</p>
        <p class="vb-intro"><strong>b) Der Tod kam der Vollstreckung zuvor:</strong>
        Er starb, bevor sein Todesurteil je vollstreckt wurde – eine Tatsache, die von
        Beobachtern damals ausdrücklich als Kontrast zu seinem jahrzehntelang aufrechterhaltenen
        Bild als „unsterblicher" Night Stalker vermerkt wurde.</p>
        <p class="vb-intro"><strong>c) Tod am 7. Juni 2013 in Greenbrae, Kalifornien:</strong>
        Richard Ramírez starb im Alter von 53 Jahren an den Folgen seines Lymphoms – fast 28
        Jahre nach dem Ende seiner Mordserie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein stiller Tod nach einer lauten Karriere:</strong>
        Der Mann, der im Gerichtssaal das Victory-Zeichen zeigte und das Pentagramm auf der
        Handfläche vorführte, starb ohne vergleichbare Inszenierung – ein scharfer Kontrast zu
        seinem öffentlichen Selbstbild.</p>
        <p class="vb-intro"><strong>b) Kaum mediale Aufmerksamkeit für die letzte Phase:</strong>
        Anders als der breite mediale Rummel um Prozess und Verurteilung erregte sein
        tatsächlicher Tod vergleichsweise wenig unmittelbare Berichterstattung über die letzten
        Monate seines Lebens.</p>
        <p class="vb-intro"><strong>c) Ein Mythos, der überlebte, ohne dass die Person es tat:</strong>
        Sein Name blieb in der Kriminalgeschichte präsent – als Symbol, als kulturelle
        Referenz –, während die Person selbst in vergleichsweiser Stille an einer Krankheit
        starb, die nichts mit der von ihm gepflegten Ikonografie zu tun hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Pfau, dessen Rad sich nicht mehr entfalten ließ:</strong>
        Dieselbe Suche nach einem unverwechselbaren, unvergesslichen Bild, die Ramírez'
        gesamtes öffentliches Auftreten prägte, fand in der Krankheit keinen Raum mehr – ein
        Lymphom bietet keine Bühne.</p>
        <p class="vb-intro"><strong>b) Wenn die sexuelle Drei unter chronischem Stress zur Neun wird:</strong>
        Die jahrzehntelange Isolation der Todeszelle, verschärft durch die fortschreitende
        Krankheit, zeigt ein Muster, das mit dem in seinem eigenen Porträt beschriebenen
        Stresspunkt der SX3 übereinstimmt: die Neun, mit ihrer Betäubung und Dissoziation. Wer
        unter chronischem Druck lebt, bewegt sich zunehmend entlang seiner Stresslinie in
        Richtung seines Stresspunkts. Das weitgehende öffentliche Verstummen seiner letzten
        Lebensjahre – nach Jahrzehnten bewusster Selbstinszenierung – erinnert eher an die
        entrückte innere Abwesenheit ihres Stresspunkts als an die auf Wirkung ausgerichtete
        Präsenz des Kerntyps – bei unverändertem Kerntyp SX3w4.</p>
        <p class="vb-intro"><strong>c) Kein neuer Mythos aus der Krankheit selbst:</strong>
        Anders als frühere Phasen seines Lebens, in denen er jedes Detail seines Auftretens
        kontrollierte, gibt es keine Hinweise darauf, dass er versuchte, auch seine Krankheit
        zu einem Teil seiner Selbstinszenierung zu machen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der der Inszenierung entglitt:</strong>
        Ramírez' gesamtes öffentliches Leben war von der bewussten Erschaffung eines Bildes
        geprägt, das Furcht und Aufmerksamkeit gleichermaßen band – das Lymphom war eine
        Bedrohung, die sich jeder Kontrolle und jeder Inszenierung entzog.</p>
        <p class="vb-intro"><strong>b) Eine Krankheit ohne Symbolkraft für den eigenen Mythos:</strong>
        Ein Mann, der jedes Detail seines Auftretens – Kleidung, Gesten, Symbole – bewusst
        wählte, starb an einer Erkrankung, die sich keiner der von ihm gepflegten
        Bedeutungsebenen zuordnen ließ – ein stilles Ende ohne Drehbuch.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Lymphsystem?</strong>
        Für eine sexuelle Drei mit Viererflügel, deren gesamte Kraft auf der intensiven,
        exklusiven Bindung an einen einzelnen fixierten Blick beruhte, liegt eine Deutung
        nahe: Ausgerechnet jenes System, das den Körper unsichtbar durchzieht und ihn von
        innen heraus schützen soll, wurde zum Schauplatz des Verfalls – ein Gegenbild zu
        seiner nach außen gerichteten, hochsichtbaren Selbstinszenierung. Diese Deutung ist
        eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Drei zwangsläufig zu Lymphdrüsenkrebs
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Ramírez' Fall zeigen lässt, ist ein Muster im Umgang mit einer tödlichen
        Diagnose, das bei einer ausgeprägten sexuellen Drei mit Viererflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Ramírez kannte sein eigenes Muster nicht – die sexuelle Drei mit Viererflügel sucht
        reflexhaft nach einem Bild, das unauslöschlich bleibt, statt sich je mit der eigenen
        Vergänglichkeit auseinanderzusetzen, und genau dieses Streben lebte er über Jahrzehnte
        unverändert aus, bis die Krankheit ihm die Kontrolle über die eigene Erzählung
        endgültig entzog. Wer die eigene Suche nach Unsterblichkeit im Bild nicht als Muster
        erkennt, kann sie auch angesichts der eigenen Sterblichkeit nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Drei mit Viererflügel erklärt bei <strong>Ramírez</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, der Jahrzehnte damit verbrachte, sich
        selbst zum unauslöschlichen Bild zu machen, starb schließlich an einer Krankheit, die
        sich seiner Inszenierung vollständig entzog – der Pfau, dessen Rad sich am Ende nicht
        mehr entfalten ließ.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Richard
        Ramírez wurde 1989 in 13 Anklagepunkten des Mordes schuldig gesprochen und zum Tode
        verurteilt. Das Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-richard-ramirez", label:"Kriminalpsychologie: Richard Ramírez (SX3w4) – der Night Stalker"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx3", label:"Subtyp-Profil SX3"},
      ])}
    </div>
  `);
}

function salvatoreRiinaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/salvatore-riina-portrait.jpg" alt="Salvatore Riina" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Salvatore Riina</p>
        <p class="krim-portrait-typ">SE8w9 · Selbsterhaltender Typ 8 mit Neunerflügel · 1930–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Orang-Utan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Tierentsprechung: Orang-Utan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Salvatore Riina</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-salvatore-riina">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um seinen Aufstieg zum mächtigsten
        Mafia-Boss Italiens und 23 Jahre im Untergrund. Diese Seite vertieft ein Kapitel, das
        dort nur am Rande erwähnt wird: einen mehrjährigen gesundheitlichen Verfall in
        Hochsicherheitshaft, wiederholt abgelehnte Anträge auf Haftverschonung aus
        gesundheitlichen Gründen, und einen Tod 2017 im Krankenhausflügel des Gefängnisses
        von Parma.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Riina</strong> ist der <strong>selbsterhaltenden Acht mit Neunerflügel</strong>
        zugeordnet. Macht ist für die SE8 Sicherheitsinstrument, nicht Bühne – Kontrolle über
        den eigenen Bereich um jeden Preis. Genau diese Weigerung, die eigene Kontrolle
        jemals aufzugeben, bestimmte auch, wie sein Verteidigungsteam bis zuletzt für seine
        Freilassung kämpfte, selbst als sein Körper längst keine Kontrolle mehr zuließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Fortschreitende Nierenerkrankung ab den 2010er-Jahren:</strong>
        In den Jahren vor seinem Tod litt Riina zunehmend an einer chronischen
        Niereninsuffizienz, die regelmäßige medizinische Behandlung in der Haftanstalt
        erforderlich machte.</p>
        <p class="vb-intro"><strong>b) Erste Anträge auf Haftverschonung:</strong>
        Sein Verteidigungsteam beantragte mehrfach eine Aussetzung der Haft aus
        gesundheitlichen Gründen – die Gerichte lehnten dies wiederholt ab und verwiesen auf
        seine fortbestehende Gefährlichkeit als Mafia-Boss.</p>
        <p class="vb-intro"><strong>c) Schlaganfall im Juli 2017:</strong>
        Ein schwerer Schlaganfall versetzte Riina in einen komaähnlichen Zustand, aus dem er
        sich nicht mehr vollständig erholte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Verlegung in den Krankenhausflügel von Parma:</strong>
        Nach dem Schlaganfall wurde Riina in die medizinische Einrichtung des Gefängnisses
        von Parma verlegt, wo schwer kranke Häftlinge unter fortgesetzter
        Hochsicherheitsbewachung behandelt wurden.</p>
        <p class="vb-intro"><strong>b) Erneute, dringlichere Anträge auf Freilassung:</strong>
        Angesichts seines nun offenkundig lebensbedrohlichen Zustands stellte sein
        Verteidigungsteam einen letzten, dringlichen Antrag auf Haftverschonung – auch dieser
        wurde von den zuständigen Gerichten abgelehnt.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Eingeständnis der eigenen Sterblichkeit:</strong>
        Selbst in dieser letzten Phase gibt es keine Berichte über eine öffentliche
        Stellungnahme Riinas selbst, die eine Anerkennung seines nahenden Todes erkennen
        ließ – nur die juristischen Anträge seiner Verteidigung sprachen für ihn.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vollständige Isolation trotz nahenden Todes:</strong>
        Auch im komaähnlichen, sterbenden Zustand blieb Riina formal dem strengen 41-bis-
        Haftregime unterstellt, das für die gefährlichsten Mafia-Häftlinge Italiens
        vorgesehen ist – keine Lockerung, selbst als er längst nicht mehr ansprechbar war.</p>
        <p class="vb-intro"><strong>b) Gerichte bestätigten die fortbestehende Gefährlichkeit:</strong>
        Die wiederholten Ablehnungen der Haftverschonungsanträge stützten sich ausdrücklich
        auf die Einschätzung, dass Riinas symbolische Autorität innerhalb der Cosa Nostra
        auch im Sterben fortbestehe.</p>
        <p class="vb-intro"><strong>c) Tod am 17. November 2017 in Parma:</strong>
        Salvatore Riina starb im Alter von 87 Jahren im Krankenhausflügel des Gefängnisses
        von Parma – 24 Jahre nach seiner Verhaftung, ohne je wieder in Freiheit gewesen zu
        sein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der öffentliche Debatten über Strafvollzug auslöste:</strong>
        Die wiederholte Ablehnung der Haftverschonungsanträge trotz seines offenkundig
        sterbenden Zustands entfachte in Italien eine öffentliche Debatte über die Grenzen
        des Hochsicherheitsregimes bei todkranken Häftlingen.</p>
        <p class="vb-intro"><strong>b) Kein Symbol, keine letzte Geste:</strong>
        Anders als bei manch anderer historischer Figur dieses Kompasses gibt es keine
        überlieferte letzte Botschaft, keine symbolische Geste – nur den stillen, formal
        weiter bewachten Tod eines Mannes, der sein Leben lang jede Kontrolle über sein
        Umfeld behauptet hatte.</p>
        <p class="vb-intro"><strong>c) Ein Begräbnis ohne öffentliche Zeremonie:</strong>
        Anders als bei anderen Mafia-Bossen früherer Generationen fand keine öffentlich
        sichtbare Trauerfeier statt – ein stiller Abgang für einen Mann, dessen Macht sich
        nie durch Repräsentation, sondern durch stille Kontrolle ausdrückte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle bis zum letzten Atemzug – durch die Verteidigung:</strong>
        Dieselbe Weigerung, jemals Kontrolle abzugeben, die Riinas gesamtes Leben prägte,
        zeigte sich noch in den juristischen Anträgen seiner Verteidiger, die bis zuletzt
        für seine Freilassung kämpften – ein letzter, stellvertretender Versuch, dem
        eigenen Schicksal doch noch eine Wendung zu geben.</p>
        <p class="vb-intro"><strong>b) Wenn die selbsterhaltende Acht unter chronischem Stress zur Fünf wird:</strong>
        Sein eigenes Porträt beschreibt bereits, wie seine jahrzehntelange Isolation im
        Untergrund Züge des Stresspunkts Fünf trug – totaler Rückzug, Abschottung,
        Beobachtung statt offener Konfrontation. In seiner letzten Lebensphase, im
        komaähnlichen Zustand des Krankenhausflügels, vollendete sich dieses Muster auf
        buchstäbliche Weise: eine vollständige, physische Isolation von der Welt, die er
        einst kontrollierte – bei unverändertem Kerntyp SE8w9.</p>
        <p class="vb-intro"><strong>c) Keine sichtbare Kapitulation:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine
        Berichte über ein öffentliches Eingeständnis von Schwäche oder Reue – die Härte, mit
        der er sein Leben führte, wurde von den Gerichten bis zuletzt als fortbestehend
        eingeschätzt, unabhängig von seinem tatsächlichen körperlichen Zustand.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der sich der Kontrolle entzog:</strong>
        Riinas gesamtes Leben war von der Überzeugung geprägt, dass sein eigener Bereich –
        Sizilien, die Cosa Nostra, sein Clan – durch Wachsamkeit und Härte vollständig
        beherrschbar sei. Niereninsuffizienz und Schlaganfall waren die ersten Bedrohungen,
        gegen die weder Loyalität noch Einschüchterung halfen.</p>
        <p class="vb-intro"><strong>b) Von der stillen Macht zur stillen Ohnmacht:</strong>
        Ein Mann, dessen gesamte Macht auf unauffälliger, ruhiger Kontrolle beruhte – „keine
        Villen, keine öffentlichen Auftritte, kein Protz", wie es sein eigenes Porträt
        beschreibt –, verbrachte seine letzten Monate in einer Stille, die nicht mehr
        gewählt, sondern erzwungen war.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet ein Schlaganfall?</strong>
        Für eine selbsterhaltende Acht mit Neunerflügel, deren gesamte Kraft auf
        wachsamer Beobachtung und der Fähigkeit beruhte, im entscheidenden Moment
        vollständig zu handeln, liegt eine Deutung nahe: Ausgerechnet jenes Organ, das
        Wachsamkeit, Beobachtung und Entscheidungsfähigkeit ermöglichte, wurde zum
        Schauplatz des Verfalls – und versetzte ihn in genau jenen Zustand
        vollständiger Reaktionsunfähigkeit, den er sein Leben lang bei anderen als
        tödliche Schwäche gewertet hätte. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Acht zwangsläufig zu
        Nierenversagen oder Schlaganfall führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Riinas Fall zeigen lässt, ist
        ein Muster im Umgang mit gesundheitlichem Verfall, das bei einer ausgeprägten
        selbsterhaltenden Acht mit Neunerflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Riina kannte sein eigenes Muster nicht – die selbsterhaltende Acht mit Neunerflügel
        begegnet jeder Bedrohung des eigenen Territoriums reflexhaft mit Kontrolle und
        stiller Härte, statt sich je mit der eigenen Verletzlichkeit auseinanderzusetzen,
        und genau dieses Muster bestimmte noch die juristischen Kämpfe um seine Freilassung
        bis in seine letzten Lebenstage. Wer die eigene Notwendigkeit, jede Kontrolle zu
        behalten, nicht als Muster erkennt, kann sie auch im eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Acht mit Neunerflügel erklärt bei <strong>Riina</strong> vieles
        am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamtes Leben auf stiller,
        unangefochtener Kontrolle über sein Territorium beruhte, verbrachte seine letzten
        Monate in einem Zustand vollständiger, erzwungener Machtlosigkeit – der Orang-Utan,
        der seinen Wald nie durch Prunk, sondern durch bloße Präsenz beherrschte, verlor am
        Ende selbst diese Präsenz.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Salvatore
        Riina wurde in zahlreichen Prozessen wegen Mordes und Mafia-Zugehörigkeit zu
        mehrfacher lebenslanger Haft verurteilt und starb 2017 in Gefangenschaft. Das
        Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-salvatore-riina", label:"Kriminalpsychologie: Salvatore Riina (SE8w9) – Boss der Cosa Nostra"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se8", label:"Subtyp-Profil SE8"},
      ])}
    </div>
  `);
}

function spinozaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-spinoza-portrait.jpg" alt="Baruch de Spinoza" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Baruch de Spinoza</p>
        <p class="krim-portrait-typ">SE5w6 · Selbsterhaltender Typ 5 mit Sechserflügel · 1632–1677</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Eule</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Tierentsprechung: Eule" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Baruch de Spinoza</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-spinoza">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen radikalen Rückzug aus jeder
        Gemeinschaft und sein streng systematisches philosophisches Werk. Diese Seite vertieft
        ein Kapitel, das dort nur am Rande erwähnt wird: eine chronische Lungenerkrankung,
        vermutlich durch jahrzehntelanges Einatmen von Glasstaub beim Linsenschleifen
        verursacht – ausgerechnet durch das Handwerk, das ihm seine geistige Unabhängigkeit
        sicherte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Spinoza</strong> ist dem <strong>selbsterhaltenden Typ 5 mit Sechserflügel</strong>
        zugeordnet. Die SE5 hortet Energie, Raum und Zeit für das eigene Denken – „Burg", wie
        Naranjo diesen Subtyp nannte. Genau dieses Prinzip radikaler Selbstgenügsamkeit
        bestimmte auch, wie er mit seiner fortschreitenden Krankheit umging: kein Rückzug aus
        dem Handwerk, das ihn krank machte, sondern konsequente Fortsetzung, solange die
        Unabhängigkeit dadurch gesichert blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehnte an der Werkbank:</strong>
        Nach seinem Ausschluss aus der jüdischen Gemeinde Amsterdams 1656 verdiente Spinoza
        seinen Lebensunterhalt fast ausschließlich als Schleifer optischer Linsen – eine
        präzise Handarbeit, die er über mehr als zwei Jahrzehnte täglich ausübte.</p>
        <p class="vb-intro"><strong>b) Feiner Glasstaub als ständiger Begleiter:</strong>
        Das Schleifen von Linsen erzeugte feinen, eingeatmeten Glasstaub – eine Belastung, die
        sich erst nach Jahren gesundheitlich bemerkbar machte, in einer Zeit, in der die
        Gefahren solcher Feinstäube für die Lunge noch unbekannt waren.</p>
        <p class="vb-intro"><strong>c) Zunehmende Atembeschwerden in den letzten Lebensjahren:</strong>
        In den Jahren vor seinem Tod verschlechterte sich sein Gesundheitszustand spürbar –
        ein schleichender Verfall, der sich mit seiner unveränderten Arbeitsweise überschnitt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Keine Änderung der Lebensweise:</strong>
        Trotz fortschreitender Erkrankung gibt es keine Hinweise darauf, dass Spinoza sein
        Handwerk aufgab oder wesentlich einschränkte – die tägliche Arbeit an der Werkbank
        blieb bis zuletzt Teil seines zurückgezogenen, selbstgenügsamen Lebens.</p>
        <p class="vb-intro"><strong>b) Kaum Klagen in den erhaltenen Briefen:</strong>
        In seiner Korrespondenz mit einem kleinen Kreis vertrauter Gelehrter finden sich
        auffallend wenige Hinweise auf seinen körperlichen Zustand – die Burg der SE5 hielt
        auch die eigene Krankheit weitgehend im Inneren verborgen.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte philosophische Arbeit bis zum Ende:</strong>
        Sein Hauptwerk, die Ethica, war zum Zeitpunkt seines Todes im Wesentlichen fertig –
        die Krankheit unterbrach die philosophische Arbeit nicht, sie beendete sie erst mit
        dem Tod selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Kein Arztbesuch dokumentiert, kein Behandlungsversuch überliefert:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine
        Berichte über ärztliche Konsultationen oder Behandlungsversuche – ein zurückgezogenes
        Leben ohne festen sozialen Anschluss bedeutete offenbar auch ein Leben ohne
        medizinische Begleitung im heutigen Sinne.</p>
        <p class="vb-intro"><strong>b) Der Tod traf ihn mitten in der Arbeit:</strong>
        Spinoza starb am 21. Februar 1677 in Den Haag, offenbar plötzlich innerhalb eines
        kurzen Zeitraums verschärfter Symptome – nicht nach einer langen, öffentlich
        sichtbaren Leidensphase, sondern nach Jahren stiller, kaum dokumentierter
        Verschlechterung.</p>
        <p class="vb-intro"><strong>c) Nur 44 Jahre alt:</strong>
        Er starb ungewöhnlich jung für sein intellektuelles Vermächtnis – ein Leben, das nach
        heutigem Verständnis noch Jahrzehnte philosophischer Arbeit hätte umfassen können.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das erst nach dem Tod erschien:</strong>
        Freunde veröffentlichten noch im Todesjahr seine „Opera Posthuma", darunter die
        Ethica – ein Werk, das er selbst zu Lebzeiten nie unter eigenem Namen hatte drucken
        lassen, aus Furcht vor genau jener Verfolgung, die ihn schon den Bann seiner Gemeinde
        gekostet hatte.</p>
        <p class="vb-intro"><strong>b) Kein öffentliches Zeugnis des Leidens:</strong>
        Anders als bei später berühmten Philosophen, die ihre eigene Krankheit reflektierten
        oder literarisch verarbeiteten, findet sich in Spinozas erhaltenem Werk kaum
        Auseinandersetzung mit dem eigenen körperlichen Verfall.</p>
        <p class="vb-intro"><strong>c) Ein stiller Tod, ein lautes Nachleben:</strong>
        Der unmittelbare Tod blieb nahezu unbemerkt außerhalb seines kleinen Freundeskreises
        – die Wirkung seines Denkens entfaltete sich erst Generationen später, von Leibniz
        bis Einstein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Burg, die auch die eigene Krankheit einschloss:</strong>
        Dieselbe radikale Selbstgenügsamkeit, die Spinozas gesamtes Leben prägte, bestimmte
        auch, wie wenig von seinem körperlichen Verfall nach außen drang – Krankheit wurde,
        wie alles andere, in die eigene, geschützte Innenwelt aufgenommen, statt geteilt.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die Treue zum eigenen Prinzip:</strong>
        Die Weigerung, das Handwerk aufzugeben, das ihn krank machte, zeigt dieselbe
        Systemtreue, die ihn 1673 einen sicheren Lehrstuhl in Heidelberg ablehnen ließ – die
        Unabhängigkeit, die das Linsenschleifen sicherte, wog schwerer als die gesundheitliche
        Gefahr, die es mit sich brachte.</p>
        <p class="vb-intro"><strong>c) Keine sichtbare Verzweiflung, kein sichtbarer Kampf:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine
        Berichte über einen öffentlichen oder auch nur brieflich dokumentierten Kampf gegen
        die eigene Sterblichkeit – die Eule zog sich zurück, wie sie es ihr ganzes Leben lang
        getan hatte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der für die Unabhängigkeit bezahlte:</strong>
        Spinozas gesamtes Leben war von der Überzeugung geprägt, dass ungestörtes Denken nur
        durch radikale Selbstgenügsamkeit gesichert werden kann – das Linsenschleifen war der
        Preis dieser Unabhängigkeit, und am Ende zugleich ihre tödliche Kehrseite.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Fast 260 Jahre später starb <a href="javascript:void(0)" data-route="krankheitsportraets-marie-curie">Marie Curie</a>
        (ebenfalls SE5w6) an aplastischer Anämie – eine direkte Folge jahrzehntelanger,
        ungeschützter Arbeit mit radioaktiven Stoffen, deren Gefahr sie selbst mit erforscht
        hatte. Beide starben an einer Krankheit, die unmittelbar aus dem eigenen Handwerk
        erwuchs, das ihnen zugleich ihre tiefste intellektuelle Erfüllung und Unabhängigkeit
        sicherte – eine auffällige Parallele zwischen zwei selbsterhaltenden Fünfern, die ihr
        Lebenswerk buchstäblich mit der eigenen Gesundheit bezahlten. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-marie-curie">Krankheitsporträt zu Marie Curie</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Lunge?</strong>
        Für eine selbsterhaltende Fünf mit Sechserflügel, deren gesamte Kraft auf der
        Fähigkeit beruhte, sich in eine geschützte, ungestörte Innenwelt zurückzuziehen, liegt
        eine Deutung nahe: Ausgerechnet jenes Organ, das den Atem – die unmittelbarste,
        elementarste Verbindung zur Außenwelt – ermöglichte, wurde zum Schauplatz des
        Verfalls, verursacht durch die eigene, freiwillig gewählte Isolation an der
        Werkbank. Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Fünf zwangsläufig zu
        Lungenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Spinozas Fall zeigen lässt, ist ein Muster
        im Umgang mit gesundheitlicher Gefährdung durch die eigene Arbeit, das bei einer
        ausgeprägten selbsterhaltenden Fünf mit Sechserflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Spinoza kannte sein eigenes Muster nicht – die selbsterhaltende Fünf mit
        Sechserflügel sichert reflexhaft die eigene Unabhängigkeit und ungestörte Innenwelt,
        statt die eigene körperliche Verletzlichkeit je offen anzuerkennen, und genau dieses
        Muster lebte er bis in seine letzten Lebensjahre unverändert aus. Wer die eigene
        Notwendigkeit, die schützende Burg um jeden Preis aufrechtzuerhalten, nicht als
        Muster erkennt, kann sie auch angesichts der eigenen Sterblichkeit nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Fünf mit Sechserflügel erklärt bei <strong>Spinoza</strong>
        vieles am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte
        Unabhängigkeit auf der stillen, präzisen Arbeit an der Werkbank beruhte, bezahlte
        genau dafür mit seiner Gesundheit – die Eule, die sich so weit zurückzog, dass selbst
        die eigene Krankheit kaum sichtbar wurde, bevor sie ihr endgültig die Luft nahm.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-spinoza", label:"Porträt: Baruch de Spinoza (SE5w6) – Philosoph"},
        {route:"krankheitsportraets-marie-curie", label:"Krankheitsporträt: Marie Curie (SE5w6) – tödliche Folge der eigenen Forschung"},
        {route:"krankheitsportraets-hermann-hesse", label:"Krankheitsporträt: Hermann Hesse (SE5w6) – dieselbe Rückzugslogik, andere Krankheit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se5", label:"Subtyp-Profil SE5"},
      ])}
    </div>
  `);
}

function hermannHesseKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-hermann-hesse-portrait.jpg" alt="Hermann Hesse" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hermann Hesse</p>
        <p class="krim-portrait-typ">SE5w6 · Selbsterhaltender Typ 5 mit Sechserflügel · 1877–1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Eule</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Tierentsprechung: Eule" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hermann Hesse</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-hermann-hesse">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen radikalen Rückzug ins Tessin und
        sein literarisches Werk über den Einzelnen zwischen zwei Welten. Diese Seite vertieft
        ein Kapitel, das dort nur am Rande erwähnt wird: lebenslange, schwere Migräne,
        chronische Augenleiden und wiederkehrende depressive Krisen, die ihn von der Jugend
        bis ins hohe Alter begleiteten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hesse</strong> ist dem <strong>selbsterhaltenden Typ 5 mit Sechserflügel</strong>
        zugeordnet. Die SE5 baut sich eine „Burg" – ein streng kontrolliertes Territorium, das
        Nähe filtert und Belastung fernhält. Genau dieses Prinzip bestimmte auch, wie er mit
        seinen chronischen Leiden umging: nicht durch Behandlung im gewöhnlichen sozialen
        Rahmen, sondern durch selbst gewählte, streng kontrollierte therapeutische und
        literarische Verarbeitung innerhalb der eigenen Burg.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste schwere Krise mit fünfzehn Jahren:</strong>
        Nach seinem Ausbruch aus dem Klosterseminar Maulbronn 1892 erlitt Hesse einen
        schweren psychischen Zusammenbruch und wurde zeitweise in eine Nervenheilanstalt
        eingewiesen – der erste einer lebenslangen Reihe depressiver Krisen.</p>
        <p class="vb-intro"><strong>b) Migräne seit den frühen Erwachsenenjahren:</strong>
        Bereits in seinen Zwanzigern begannen die schweren Migräneanfälle, die ihn fortan
        regelmäßig für Tage arbeitsunfähig machten – ein Leiden, das ihn durch sein gesamtes
        Leben begleitete.</p>
        <p class="vb-intro"><strong>c) Zunehmende Augenprobleme parallel zur Migräne:</strong>
        Chronische Augenleiden traten hinzu und verschärften sich phasenweise so stark, dass
        Lesen und Schreiben – die Grundlage seines gesamten Schaffens – zeitweise kaum
        möglich waren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Nervenzusammenbruch 1916:</strong>
        Der Tod seines Vaters, die schwere Erkrankung seines jüngsten Sohnes und die
        zunehmende psychische Krise seiner ersten Frau Maria Bernoulli führten 1916 zu einem
        weiteren, schweren Zusammenbruch.</p>
        <p class="vb-intro"><strong>b) Psychoanalyse als kontrollierter Rahmen:</strong>
        Statt sich sozialen Bindungen zuzuwenden, unterzog sich Hesse einer Psychoanalyse bei
        Josef Bernhard Lang, einem Schüler C. G. Jungs – über 60 Sitzungen innerhalb eines
        streng abgegrenzten, therapeutischen Settings.</p>
        <p class="vb-intro"><strong>c) Rückzug ins Tessin als dauerhafte Lösung:</strong>
        1919 verließ er Deutschland und seine Familie endgültig und zog allein nach
        Montagnola – ein Umzug, der zeitlich unmittelbar auf die schwerste seiner bisherigen
        Krisen folgte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Wiederkehrende Krisen bis ins hohe Alter:</strong>
        Auch nach dem Umzug ins Tessin blieben depressive Phasen, Migräne und Augenleiden
        Teil seines Alltags – die neue Umgebung linderte die Symptome, beseitigte sie aber
        nicht.</p>
        <p class="vb-intro"><strong>b) Streng kontrollierter Tagesablauf als Bewältigungsstrategie:</strong>
        Hesse organisierte sein Leben um einen exakt geregelten Rhythmus aus Schreiben,
        Gärtnern und Malen – eine Struktur, die ihm half, mit den wiederkehrenden Episoden
        umzugehen, ohne sie öffentlich zu machen.</p>
        <p class="vb-intro"><strong>c) Literarische statt persönliche Verarbeitung:</strong>
        Seine Krisen flossen unmittelbar in sein Werk ein – „Der Steppenwolf" (1927) gilt als
        direkte literarische Verarbeitung einer besonders schweren depressiven Phase in den
        1920er-Jahren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das aus dem eigenen Leiden schöpfte:</strong>
        Gerade weil Hesse seine inneren Krisen so genau und ohne Beschönigung beschrieb,
        fanden sich Generationen von Lesern, die sich selbst als Außenseiter erlebten, in
        seinen Büchern wieder.</p>
        <p class="vb-intro"><strong>b) Ein Nobelpreis, den er nicht persönlich entgegennahm:</strong>
        Als er 1946 den Nobelpreis für Literatur erhielt, reiste er – seiner Rückzugslogik
        treu und möglicherweise auch aus gesundheitlichen Gründen – nicht persönlich nach
        Stockholm.</p>
        <p class="vb-intro"><strong>c) Ein Leben, das trotz allem 85 Jahre währte:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses führten Hesses
        chronische Leiden nicht zu einem frühen Tod – er starb 1962 im Schlaf, im hohen
        Alter, in derselben selbst gewählten Umgebung, die ihn Jahrzehnte zuvor aufgenommen
        hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Burg, die auch die eigene Krankheit filterte:</strong>
        Dieselbe radikale Kontrolle über die eigene Nähe, die Hesses gesamtes Leben prägte,
        bestimmte auch, wie er seine Krisen behandelte – nie in ungefilterten sozialen
        Beziehungen, sondern immer in streng abgegrenzten Rahmen: Therapie, Briefwechsel,
        literarische Verarbeitung.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die wache Sorge um sich selbst:</strong>
        Dieselbe wache, fast ängstliche Aufmerksamkeit, die ihn 1914 scharf gegen den
        Kriegsjubel positionierte, richtete sich auch nach innen – eine ständige Beobachtung
        der eigenen psychischen Verfassung, die ihn frühzeitig professionelle Hilfe suchen
        ließ, statt die Krise zu verdrängen.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Zeugnis, aber ein literarisches:</strong>
        Anders als manch anderer Fall dieses Kompasses sprach Hesse kaum öffentlich über
        seine Leiden – doch sein Werk selbst wurde zum indirekten, ausführlichen Zeugnis
        dieses inneren Kampfes.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Geist, der sich selbst zur Last wurde:</strong>
        Hesses gesamtes Leben war von der Überzeugung geprägt, dass ungestörte Innenschau nur
        durch radikalen Rückzug gesichert werden kann – Migräne, Augenleiden und Depression
        waren Bedrohungen, die sich ausgerechnet in dem Organ manifestierten, das dieser
        Rückzug am meisten brauchte: dem eigenen Kopf.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-spinoza">Baruch de Spinoza</a>
        (ebenfalls SE5w6) starb an einer Lungenerkrankung, die aus seinem eigenen Handwerk
        erwuchs; Hesse litt sein Leben lang an Migräne und Depression, ohne daran zu sterben.
        Beide Fälle zeigen dieselbe Grundstruktur der SE5 aus verschiedenen Blickwinkeln: Wo
        Spinoza sein Leiden fast vollständig verschwieg, verarbeitete Hesse seines
        systematisch in Therapie und Literatur – zwei Varianten desselben Rückzugsmusters,
        eine tödlich, eine lebenslang tragbar. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-spinoza">Krankheitsporträt zu Spinoza</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Kopf und Augen?</strong>
        Für eine selbsterhaltende Fünf mit Sechserflügel, deren gesamte Kraft auf
        Beobachtung, Lesen und intensiver geistiger Verarbeitung beruhte, liegt eine Deutung
        nahe: Ausgerechnet jene Organe, die ihm die stille Beobachtung der Welt und die
        eigene innere Welt ermöglichten, wurden zum Schauplatz wiederkehrenden Leidens – als
        würde die intensive, nach innen gerichtete Beobachtung sich irgendwann gegen das
        eigene Sehen und Denken selbst richten. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Fünf zwangsläufig zu Migräne
        oder Depression führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Hesses Fall zeigen lässt, ist ein Muster
        im Umgang mit chronischem psychischem und körperlichem Leiden, das bei einer
        ausgeprägten selbsterhaltenden Fünf mit Sechserflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hesse kannte sein eigenes Muster nicht – die selbsterhaltende Fünf mit Sechserflügel
        sichert reflexhaft die eigene, kontrollierte Innenwelt, statt sich je vollständig auf
        soziale Unterstützung im Umgang mit der eigenen Krankheit einzulassen, und genau
        dieses Muster lebte er bis ins hohe Alter unverändert aus. Wer die eigene
        Notwendigkeit, jede Krise innerhalb der eigenen Burg zu bewältigen, nicht als Muster
        erkennt, trägt sie ein Leben lang allein.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Fünf mit Sechserflügel erklärt bei <strong>Hesse</strong> vieles
        am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf stiller
        Beobachtung und Verarbeitung beruhte, trug seine schwersten Krisen jahrzehntelang
        allein – die Eule, die selbst im eigenen, sicheren Garten nie ganz zur Ruhe kam.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-hermann-hesse", label:"Porträt: Hermann Hesse (SE5w6) – Schriftsteller"},
        {route:"krankheitsportraets-spinoza", label:"Krankheitsporträt: Baruch de Spinoza (SE5w6) – dieselbe Rückzugslogik, andere Krankheit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se5", label:"Subtyp-Profil SE5"},
      ])}
    </div>
  `);
}

function voltaireKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-voltaire-portrait.jpg" alt="Voltaire" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Voltaire</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel · 1694–1778</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Voltaire</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-voltaire">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen lebenslangen Kampf gegen
        religiöse und politische Willkür und seine Rolle als geistiger Vater der
        Aufklärung. Diese Seite vertieft ein Kapitel, das dort nur am Rande erwähnt wird:
        jahrzehntelange chronische Verdauungs- und Blasenleiden, die er in seiner
        umfangreichen Korrespondenz obsessiv dokumentierte, ohne dass sie seine
        außergewöhnliche Produktivität je bremsten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Voltaire</strong> ist dem <strong>sexuellen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SX4 erlebt Schmerz mit unmittelbarer, persönlicher Intensität; der
        Dreierflügel wendet dieses Innere nach außen, in sichtbare Wirkung. Genau diese
        Kombination bestimmte auch, wie er mit seinen chronischen Leiden umging: nicht durch
        Rückzug, sondern durch endlose, fast literarische Beschreibung – und ungebremste
        Weiterarbeit trotz allem.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Klagen bereits in jungen Jahren:</strong>
        Schon in seinen Zwanzigern begann Voltaire in Briefen an Freunde regelmäßig über
        Verdauungsbeschwerden zu klagen – ein Muster, das sich durch sein gesamtes
        erwachsenes Leben zog.</p>
        <p class="vb-intro"><strong>b) Chronische Blasen- und Nierenprobleme:</strong>
        Über Jahrzehnte hinweg litt er wiederkehrend an schmerzhaften Blasen- und
        vermutlichen Nierensteinbeschwerden, die ihn zeitweise stark einschränkten.</p>
        <p class="vb-intro"><strong>c) Eine schier endlose Liste weiterer Beschwerden:</strong>
        Kopfschmerzen, Fieberschübe, Hautausschläge und allgemeine Erschöpfungszustände
        ergänzten über die Jahre ein Bild chronischer, nie ganz verschwindender
        gesundheitlicher Beeinträchtigung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Exzessive Dokumentation in der eigenen Korrespondenz:</strong>
        Von den über 20.000 erhaltenen Briefen Voltaires handelt ein auffällig großer Teil
        von seinem eigenen körperlichen Zustand – detailliert, oft dramatisch, an Ärzte,
        Freunde und Bewunderer gleichermaßen gerichtet.</p>
        <p class="vb-intro"><strong>b) Wiederholte Todesankündigungen, die sich nicht bewahrheiteten:</strong>
        Mehrfach kündigte Voltaire in Briefen sein nahes Ende an, das dann über Jahrzehnte
        nicht eintrat – ein Muster, das ihm schon zu Lebzeiten den Ruf eines notorischen
        Hypochonders einbrachte.</p>
        <p class="vb-intro"><strong>c) Keine erkennbare Unterbrechung seines Schaffens:</strong>
        Trotz der ständigen Klagen erschienen in denselben Jahrzehnten Hunderte von Werken –
        Theaterstücke, philosophische Schriften, Streitschriften, Korrespondenz – in einem
        Tempo, das kaum auf einen tatsächlich arbeitsunfähigen Mann schließen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ungewöhnlich hohes Alter für seine Zeit:</strong>
        Trotz jahrzehntelanger Klagen über seinen körperlichen Verfall erreichte Voltaire ein
        Alter von 83 Jahren – weit über der durchschnittlichen Lebenserwartung des 18.
        Jahrhunderts.</p>
        <p class="vb-intro"><strong>b) Rückkehr nach Paris trotz Warnungen:</strong>
        1778 reiste der bereits schwer gezeichnete Voltaire, entgegen ärztlichem Rat, nach 28
        Jahren Exil zurück nach Paris, um dort die triumphale Aufführung seines letzten
        Theaterstücks zu erleben.</p>
        <p class="vb-intro"><strong>c) Rascher körperlicher Verfall nach der Rückkehr:</strong>
        Die Aufregung und Anstrengung der triumphalen Rückkehr, verbunden mit seinem
        bereits geschwächten Zustand, beschleunigte in den folgenden Wochen seinen
        endgültigen körperlichen Zusammenbruch.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod mitten im Triumph:</strong>
        Voltaire starb am 30. Mai 1778 in Paris, nur Wochen nach seiner gefeierten Rückkehr –
        ein Ende, das seinem gesamten Leben entsprach: dramatisch, öffentlich, und bis
        zuletzt im Zentrum der Aufmerksamkeit.</p>
        <p class="vb-intro"><strong>b) Verweigertes kirchliches Begräbnis:</strong>
        Die katholische Kirche verweigerte ihm zunächst ein christliches Begräbnis – ein
        letzter, öffentlicher Konflikt, der sein lebenslanges Ringen mit religiöser Autorität
        über den Tod hinaus fortsetzte.</p>
        <p class="vb-intro"><strong>c) Posthume Rehabilitierung als Symbolfigur:</strong>
        Erst 1791, während der Französischen Revolution, wurden seine sterblichen Überreste
        unter großem öffentlichem Jubel ins Panthéon überführt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Schmerz, der zur literarischen Bühne wurde:</strong>
        Dieselbe Fähigkeit, das eigene innere Erleben unmittelbar nach außen zu wenden, die
        Voltaires gesamtes öffentliches Wirken prägte, bestimmte auch, wie er über seine
        Krankheiten sprach – nicht verschwiegen, sondern ausführlich, dramatisch,
        literarisch inszeniert.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die Weigerung, sich bremsen zu lassen:</strong>
        Anders als eine introvertiertere Vier hätte reagieren können, ließ sich Voltaire von
        seinen chronischen Leiden nie von der Arbeit abhalten – der Dreierflügel wusste, dass
        Wirkung nur durch fortgesetzte Sichtbarkeit entsteht, Krankheit hin oder her.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug, sondern eine letzte öffentliche Bühne:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses endete Voltaires
        Leben nicht in stillem Rückzug, sondern in einem letzten, bewusst gesuchten
        öffentlichen Triumph, der seinen körperlichen Verfall beschleunigte, statt ihn zu
        verzögern.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der zur Bühne des eigenen Erlebens wurde:</strong>
        Voltaires gesamtes Leben war von der Überzeugung geprägt, dass jedes Erleben –
        Kränkung, Ungerechtigkeit, auch körperliches Leiden – unmittelbar und mit voller
        Intensität ausgedrückt werden musste. Seine chronischen Beschwerden waren keine
        Ausnahme von diesem Prinzip, sondern seine konsequenteste Anwendung.</p>
        <p class="vb-intro"><strong>b) Hypochondrie als Ausdrucksform, nicht als Schwäche:</strong>
        Was Zeitgenossen als übertriebene Wehleidigkeit belächelten, lässt sich aus
        heutiger Sicht auch als Ausdruck der SX4-Intensität lesen: das eigene Leiden wurde
        nicht kleingeredet, sondern in seiner vollen, oft dramatisierten Wirklichkeit
        wahrgenommen und mitgeteilt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Magen, Darm und Blase?</strong>
        Für eine sexuelle Vier mit Dreierflügel, deren gesamte Kraft auf der unmittelbaren
        Verwandlung von innerem Erleben in öffentliche Wirkung beruhte, liegt eine Deutung
        nahe: Ausgerechnet jene Organe, die am unmittelbarsten körperliches Unbehagen
        signalisieren, wurden zum bevorzugten Schauplatz seiner endlosen
        Selbstbeobachtung – ein Körper, der beständig meldete, was die Seele längst
        empfand. Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier zwangsläufig zu chronischen
        Verdauungs- oder Blasenleiden führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Voltaires Fall zeigen lässt,
        ist ein Muster im Umgang mit chronischem körperlichem Unbehagen, das bei einer
        ausgeprägten sexuellen Vier mit Dreierflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Voltaire kannte sein eigenes Muster nicht – die sexuelle Vier mit Dreierflügel
        wandelt reflexhaft jedes innere Erleben in unmittelbaren, öffentlichen Ausdruck um,
        statt Beschwerden je still für sich zu behalten, und genau dieses Muster lebte er
        bis in seine letzten Lebenswochen unverändert aus. Wer die eigene Notwendigkeit,
        jedes Erleben mit voller Intensität auszudrücken, nicht als Muster erkennt, kann sie
        auch im eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Vier mit Dreierflügel erklärt bei <strong>Voltaire</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf der
        unmittelbaren, öffentlichen Verwandlung von innerem Erleben beruhte, machte selbst
        sein eigenes Leiden zu einem lebenslang fortgeschriebenen Text – der Chihuahua, der
        noch im Krankenbett bellte, statt zu schweigen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-voltaire", label:"Porträt: Voltaire (SX4w3) – Philosoph der Aufklärung"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

function nikolaTeslaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-nikola-tesla-portrait.jpg" alt="Nikola Tesla" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nikola Tesla</p>
        <p class="krim-portrait-typ">SE4w5 · Selbsterhaltender Typ 4 mit Fünferflügel · 1856–1943</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Nikola Tesla</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-nikola-tesla">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein bahnbrechendes technisches
        Lebenswerk und seine radikale Einzigartigkeit. Diese Seite vertieft ein Kapitel, das
        dort nur am Rande erwähnt wird: eine fortschreitende Zwangsstörung mit ausgeprägter
        Keimphobie, die ihn über Jahrzehnte zunehmend in völlige Isolation trieb, bis er
        verarmt und fast vergessen allein in einem New Yorker Hotelzimmer starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Tesla</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die SE4 lebt ihr Anderssein still und konsequent, ohne öffentliche
        Bühne; der Fünferflügel übersetzt Gefühl in analytisches Systemdenken, das
        zugleich als Schutzwall dient. Genau diese Kombination bestimmte auch, wie sich seine
        fortschreitende Zwangsstörung entwickelte: nicht als plötzlicher Einbruch, sondern
        als immer strengeres, selbst auferlegtes System zur Kontrolle einer als überfordernd
        erlebten Außenwelt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Zwangshandlungen bereits in mittleren Lebensjahren dokumentiert:</strong>
        Zeitgenossen berichteten von Teslas Gewohnheit, seine Schritte beim Gehen zu zählen
        und das Volumen seiner Suppe zu berechnen, bevor er sie aß – Verhaltensweisen, die
        sich über Jahre zu einem festen Ritual verdichteten.</p>
        <p class="vb-intro"><strong>b) Zwang zur Teilbarkeit durch drei:</strong>
        Tesla arbeitete fast ausschließlich mit Zahlen, die durch drei teilbar waren;
        Abweichungen davon lösten bei ihm nachweislich massives Unbehagen aus – ein frühes
        Anzeichen einer sich verfestigenden Zwangsstruktur.</p>
        <p class="vb-intro"><strong>c) Zunehmende Angst vor Keimen:</strong>
        Bereits in seinen mittleren Jahren begann Tesla, Türklinken und Handschläge zu
        meiden und sich stundenlang die Hände zu waschen – eine Keimphobie, die sich mit den
        Jahrzehnten weiter verschärfte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Verlust des Wardenclyffe Tower als Wendepunkt:</strong>
        Als J.P. Morgan seine finanzielle Unterstützung zurückzog, weil Tesla plante,
        drahtlose Energie kostenlos zu verteilen, verlor er sein Lebenswerk – ein Einschnitt,
        nach dem sich sein Rückzug aus der Gesellschaft spürbar beschleunigte.</p>
        <p class="vb-intro"><strong>b) Umzüge von Hotel zu Hotel:</strong>
        In seinen letzten Lebensjahrzehnten lebte Tesla isoliert in einer Reihe von New
        Yorker Hotelzimmern, oft, weil er die Rechnungen nicht mehr bezahlen konnte und
        umziehen musste.</p>
        <p class="vb-intro"><strong>c) Astronomische Ausgaben für verletzte Tauben:</strong>
        Trotz zunehmender Armut gab Tesla erhebliche Summen aus, um verletzte oder kranke
        Tauben in seinem Zimmer gesund zu pflegen – eine der letzten verbliebenen Formen von
        Fürsorge, die er sich noch erlaubte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vollständiger Rückzug aus menschlicher Nähe:</strong>
        Tesla blieb zeitlebens unverheiratet und beschrieb intime Nähe ausdrücklich als
        Störung seiner Konzentration – in seinen letzten Jahren bestand sein soziales Leben
        praktisch ausschließlich aus der Fütterung von Tauben im Park.</p>
        <p class="vb-intro"><strong>b) Die weiße Taube als einzige verbliebene Bindung:</strong>
        Unter den vielen Tauben, die er pflegte, entwickelte Tesla eine besonders intensive
        Bindung zu einer einzelnen weißen Taube, die er als „die Liebe seines Lebens"
        bezeichnete – eine Formulierung, die er auch gegenüber Journalisten wörtlich
        wiederholte.</p>
        <p class="vb-intro"><strong>c) Tod im Alter von 86 Jahren, allein im Hotelzimmer:</strong>
        Tesla starb am 7. Januar 1943 in seinem Zimmer im New Yorker Hotel New Yorker – erst
        Tage später wurde sein Tod von einer Zimmermädchen entdeckt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Verarmt und fast vergessen gestorben:</strong>
        Der Mann, dessen Wechselstromsystem bis heute Milliarden Haushalte weltweit versorgt,
        starb hoch verschuldet und weitgehend aus der öffentlichen Wahrnehmung
        verschwunden.</p>
        <p class="vb-intro"><strong>b) Posthume Beschlagnahmung seiner Unterlagen:</strong>
        Unmittelbar nach seinem Tod beschlagnahmte das FBI seine wissenschaftlichen
        Aufzeichnungen aus Sorge, sie könnten militärisch relevante Technologien enthalten –
        ein letzter, unfreiwilliger öffentlicher Auftritt eines Mannes, der die Öffentlichkeit
        zeitlebens gemieden hatte.</p>
        <p class="vb-intro"><strong>c) Posthume Anerkennung erst Jahrzehnte später:</strong>
        Erst in den folgenden Jahrzehnten wurde Teslas Beitrag zur modernen Technik
        umfassend gewürdigt – zu spät, um ihm selbst noch die Anerkennung zu geben, die sein
        Werk verdient hätte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die eigene Einzigartigkeit bis zur völligen Isolation getragen:</strong>
        Dieselbe radikale Konsequenz, mit der Tesla sein eigenes, unverwechselbares Denken
        gegen jede Anpassung verteidigte, bestimmte auch, wie vollständig er sich am Ende von
        jeder menschlichen Nähe abschnitt – die SE4 hält an der eigenen Wahrheit fest, auch
        wenn der Preis dafür die eigene Verbindung zur Welt ist.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel und das System als letzter Schutzraum:</strong>
        Seine Zwangshandlungen – das Zählen, die Teilbarkeit durch drei, die Keimvermeidung
        – waren keine zufälligen Marotten, sondern ein immer engmaschigeres System zur
        Kontrolle einer Welt, die für ihn zunehmend bedrohlich wurde. Wo der gesunde
        Fünferflügel Wissen als Werkzeug nutzt, wurde bei Tesla das System selbst zum
        einzigen verlässlichen Halt.</p>
        <p class="vb-intro"><strong>c) Eine einzelne Bindung statt vieler lockerer:</strong>
        Anders als ein sozialer Vierer-Subtyp (SO4) reagiert hätte, ersetzte Tesla das gesamte
        menschliche Beziehungsnetz nicht durch mehrere lose Kontakte, sondern durch eine
        einzige, außergewöhnlich intensive Bindung – die weiße Taube trug das gesamte
        Gewicht dessen, was für andere Menschen ein ganzes soziales Leben ausmacht.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Geist, der sich vor der eigenen Offenheit schützte:</strong>
        Teslas gesamtes Leben war von der Überzeugung geprägt, dass seine innere Bilderwelt
        und sein einzigartiges Denken schutzbedürftig waren – seine Zwangsstörung lässt sich
        als das immer strengere System lesen, mit dem er diesen Schutz aufrechtzuerhalten
        versuchte, bis das System selbst zur Isolation wurde.</p>
        <p class="vb-intro"><strong>b) Kontrolle über die eigene Umgebung als Ersatz für Kontrolle über Nähe:</strong>
        Ein Mann, der intime menschliche Nähe explizit als Bedrohung seiner Konzentration
        beschrieb, entwickelte stattdessen eine immer detailliertere Kontrolle über seine
        physische Umgebung – Zahlen, Keime, Rituale –, die genau jene Sicherheit versprach,
        die menschliche Beziehungen ihm nicht bieten konnten.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Kontakt zur Außenwelt?</strong>
        Für eine selbsterhaltende Vier mit Fünferflügel, deren gesamte Kraft auf radikaler,
        selbst gewählter Einzigartigkeit beruhte, liegt eine Deutung nahe: Ausgerechnet der
        unmittelbare körperliche Kontakt zur Außenwelt – Türklinken, Handschläge, andere
        Menschen – wurde zum Schauplatz der Angst, während die innere, selbst konstruierte
        Gedankenwelt der einzige Ort blieb, an dem er sich vollständig sicher fühlte. Diese
        Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu
        Zwangsstörungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Teslas Fall zeigen lässt, ist ein Muster
        im Umgang mit fortschreitender psychischer Isolation, das bei einer ausgeprägten
        selbsterhaltenden Vier mit Fünferflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Tesla kannte sein eigenes Muster nicht – die selbsterhaltende Vier mit Fünferflügel
        verteidigt reflexhaft die eigene, unverwechselbare Innenwelt gegen jede als bedrohlich
        erlebte Nähe, statt die eigene Isolation je als Muster zu erkennen, und genau dieses
        Muster lebte er bis zu seinem einsamen Tod unverändert aus. Wer die eigene
        Notwendigkeit, die eigene Einzigartigkeit um jeden Preis zu schützen, nicht als Muster
        erkennt, kann sie auch angesichts der eigenen Vereinsamung nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Vier mit Fünferflügel erklärt bei <strong>Tesla</strong> vieles
        am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf radikaler
        Einzigartigkeit beruhte, verteidigte diese Einzigartigkeit so konsequent, dass am
        Ende kein Mensch mehr nah genug herankam – die Taube, die der ganzen Menschheit
        unbegrenzte Energie schenken wollte, und deren eigenes Herz zuletzt nur noch an
        einem einzigen Vogel hing.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-nikola-tesla", label:"Porträt: Nikola Tesla (SE4w5) – Erfinder"},
        {route:"krankheitsportraets-vincent-van-gogh", label:"Krankheitsporträt: Vincent van Gogh (SE4w5) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

function isaacNewtonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-isaac-newton-portrait.jpg" alt="Isaac Newton" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Isaac Newton</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel · 1642/43–1727</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Isaac Newton</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-isaac-newton">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein jahrzehntelang geheim gehaltenes
        Wissen und sein bahnbrechendes physikalisches Werk. Diese Seite vertieft ein Kapitel,
        das dort nur am Rande erwähnt wird: einen schweren Nervenzusammenbruch 1693,
        vermutlich durch jahrzehntelange, ungeschützte alchemistische Experimente mit
        Quecksilber ausgelöst.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Newton</strong> ist dem <strong>sozialen Typ 5 mit Sechserflügel</strong>
        zugeordnet. Die SO5 sammelt Wissen und hortet es, kontrolliert dosiert für die
        Gemeinschaft freigegeben; der Sechserflügel bringt Sicherheitsbedürfnis und
        institutionelle Kontrolle hinzu. Genau diese Kombination – jahrzehntelange, im
        Verborgenen betriebene Experimente ohne jede Vorsichtsmaßnahme – bestimmte auch,
        wie sich seine gesundheitliche Krise entwickelte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehnte an alchemistischen Experimenten:</strong>
        Über mehr als drei Jahrzehnte arbeitete Newton in seinem privaten Labor an
        alchemistischen Versuchen, verfasste mehr als eine Million Wörter zu Rezepturen und
        Deutungen alter Texte, und hantierte dabei regelmäßig mit Quecksilber und anderen
        giftigen Substanzen ohne jeglichen Schutz.</p>
        <p class="vb-intro"><strong>b) Zunehmende Schlaflosigkeit im Frühjahr 1693:</strong>
        In den Monaten vor seinem eigentlichen Zusammenbruch berichteten Zeitgenossen von
        Newtons zunehmend unregelmäßigem Schlaf und einer wachsenden Gereiztheit in seiner
        Korrespondenz.</p>
        <p class="vb-intro"><strong>c) Erste paranoide Anzeichen in Briefen:</strong>
        Newton begann, in Briefen an enge Freunde und Wissenschaftskollegen Andeutungen zu
        machen, die auf ein wachsendes Misstrauen gegenüber seinem Umfeld schließen ließen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Anschuldigungen gegen enge Freunde:</strong>
        Im September 1693 schrieb Newton an John Locke und Samuel Pepys, zwei seiner engsten
        Vertrauten, Briefe voller wirrer Vorwürfe – er beschuldigte Locke, ihn „mit Frauen
        verstricken" zu wollen, und bat Pepys um Verzeihung für Dinge, die er ihm angeblich
        angetan habe, ohne diese zu benennen.</p>
        <p class="vb-intro"><strong>b) Monatelanger Rückzug aus der wissenschaftlichen Korrespondenz:</strong>
        Nach diesen Vorfällen unterbrach Newton für mehrere Monate nahezu jede
        wissenschaftliche Kommunikation – ein auffälliger Bruch in seinem sonst
        umfangreichen Briefwechsel.</p>
        <p class="vb-intro"><strong>c) Spätere, teilweise Entschuldigungen:</strong>
        Als sich sein Zustand besserte, entschuldigte sich Newton bei Locke und erklärte
        seinen Zustand mit Schlafmangel – ohne die alchemistischen Experimente selbst je
        als mögliche Ursache zu benennen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vollständige Erholung innerhalb eines Jahres:</strong>
        Anders als bei chronisch verlaufenden Fällen erholte sich Newton innerhalb von etwa
        einem Jahr weitgehend von der akuten Krise und nahm seine wissenschaftliche Arbeit
        und Korrespondenz wieder auf.</p>
        <p class="vb-intro"><strong>b) Keine Aufgabe der alchemistischen Praxis:</strong>
        Trotz der durchlebten Krise gibt es keine Hinweise darauf, dass Newton seine
        alchemistischen Experimente danach grundlegend änderte oder aus Vorsicht einschränkte
        – die Praxis, die vermutlich zur Vergiftung beigetragen hatte, wurde nicht in Frage
        gestellt.</p>
        <p class="vb-intro"><strong>c) Spätere moderne Analysen bestätigten hohe Schwermetallwerte:</strong>
        Untersuchungen von Haarproben, die Newton zugeschrieben werden, zeigten Jahrhunderte
        später ungewöhnlich hohe Konzentrationen von Quecksilber, Blei und Arsen – ein
        indirekter, aber deutlicher Hinweis auf die Belastung durch seine jahrzehntelange
        Laborarbeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Keine öffentliche Erklärung der Krise:</strong>
        Newton äußerte sich zeitlebens nicht öffentlich über die Vorfälle von 1693 – der
        Zusammenbruch blieb, wie so vieles in seinem Leben, im privaten Briefwechsel
        verborgen, statt öffentlich verarbeitet zu werden.</p>
        <p class="vb-intro"><strong>b) Fortsetzung seiner öffentlichen Karriere trotz der Krise:</strong>
        Nur wenige Jahre später, 1696, übernahm Newton die Leitung der Royal Mint und 1703
        die Präsidentschaft der Royal Society – Ämter, die höchste geistige Klarheit und
        institutionelle Kontrolle voraussetzten.</p>
        <p class="vb-intro"><strong>c) Ein langes Leben trotz der Belastung:</strong>
        Newton starb erst 1727, im Alter von 84 Jahren – die Vergiftungskrise von 1693
        blieb, soweit bekannt, eine einmalige akute Episode, keine chronisch fortschreitende
        Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das verborgene Experimentieren, das sich selbst gefährdete:</strong>
        Dieselbe Neigung, Wissen und Forschung im Verborgenen zu betreiben, die Newtons
        gesamtes Leben prägte, bestimmte auch, dass niemand seine gefährliche
        alchemistische Praxis je begrenzte oder hinterfragte – die Kontrolle über das eigene
        Wissen bedeutete auch, dass niemand vor den Risiken warnen konnte.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und das Misstrauen als Symptom:</strong>
        Die paranoiden Anschuldigungen gegen Locke und Pepys lassen sich auch als extreme
        Zuspitzung des ohnehin wachen, sicherheitsorientierten Sechserflügels lesen – unter
        toxischer Belastung wandte sich dasselbe Muster, das sonst institutionelle Kontrolle
        suchte, gegen die engsten Vertrauten selbst.</p>
        <p class="vb-intro"><strong>c) Rückkehr zur gewohnten Verschlossenheit statt Offenlegung:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses folgte auf die Krise
        kein öffentliches Bekenntnis oder eine Verhaltensänderung – Newton kehrte zu genau
        jener Verschlossenheit zurück, die schon vor der Krise sein gesamtes Leben geprägt
        hatte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Geist, der sich in der eigenen Verborgenheit vergiftete:</strong>
        Newtons gesamtes Leben war von der Überzeugung geprägt, dass Wissen im Verborgenen
        am sichersten entwickelt wird – seine alchemistischen Experimente waren die
        konsequenteste Anwendung dieses Prinzips, und zugleich die gefährlichste, weil
        niemand von außen auf die toxischen Risiken hinweisen konnte.</p>
        <p class="vb-intro"><strong>b) Kontrolle über Wissen, aber nicht über die eigene Gesundheit:</strong>
        Ein Mann, der jeden Aspekt seiner Forschung akribisch kontrollierte – wann, wie und
        ob überhaupt etwas veröffentlicht wurde –, hatte über die physischen Folgen seiner
        eigenen Experimente keinerlei Kontrolle, weil er sie gar nicht als Risiko
        einordnete.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Geist?</strong>
        Für eine soziale Fünf mit Sechserflügel, deren gesamte Kraft auf klarem, geordnetem
        Denken beruhte, liegt eine Deutung nahe: Ausgerechnet jenes Organ, das ihm die
        Kontrolle über sein gesamtes geheimes Wissen ermöglichte, wurde durch die toxische
        Fracht seiner eigenen Forschung zeitweise selbst außer Kontrolle gebracht – ein
        Angriff der Sache, die er am meisten schützen wollte, auf das Werkzeug, mit dem er
        sie schützte. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu
        Schwermetallvergiftung oder psychischer Krise führt – <strong>jeder Mensch kann jede
        Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an Newtons Fall zeigen
        lässt, ist ein Muster im Umgang mit selbst auferlegter Gefährdung durch geheime
        Forschung, das bei einer ausgeprägten sozialen Fünf mit Sechserflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Newton kannte sein eigenes Muster nicht – die soziale Fünf mit Sechserflügel
        sichert reflexhaft die vollständige Kontrolle über das eigene Wissen und dessen
        Weitergabe, statt die eigene körperliche Gefährdung je in Frage zu stellen, und
        genau dieses Muster lebte er auch nach seiner Krise unverändert weiter aus. Wer die
        eigene Notwendigkeit, jedes Wissen im Verborgenen zu entwickeln, nicht als Muster
        erkennt, kann sie auch angesichts der eigenen Gefährdung nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Fünf mit Sechserflügel erklärt bei <strong>Newton</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf der
        kontrollierten, geheimen Entwicklung von Wissen beruhte, geriet ausgerechnet durch
        diese Geheimhaltung selbst außer Kontrolle – der Oktopus, der sein eigenes
        Verborgenes so lange nicht offenlegte, bis es beinahe seinen eigenen Verstand
        forderte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-isaac-newton", label:"Porträt: Isaac Newton (SO5w6) – Physiker und Mathematiker"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

function immanuelKantKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-immanuel-kant-portrait.jpg" alt="Immanuel Kant" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Immanuel Kant</p>
        <p class="krim-portrait-typ">SO6w5 · Sozialer Typ 6 mit Fünferflügel · 1724–1804</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Erdmännchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so6.jpg" alt="Tierentsprechung: Erdmännchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO6")};left:${tierAvatarLeft("SO6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Immanuel Kant</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-immanuel-kant">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen streng getakteten Tagesablauf und
        sein architektonisches philosophisches System. Diese Seite vertieft ein Kapitel, das
        dort nur am Rande erwähnt wird: eine lebenslange, extrem dokumentierte Hypochondrie
        mit chronischer Atembeklemmung, die er durch ein eisernes, selbst entwickeltes
        Gesundheitsregime zu beherrschen versuchte, sowie einen geistigen Verfall in seinen
        letzten Lebensjahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kant</strong> ist dem <strong>sozialen Typ 6 mit Fünferflügel</strong>
        zugeordnet. Die SO6 sucht Sicherheit durch Pflicht, Ordnung und feste Struktur; der
        Fünferflügel verwandelt Wachsamkeit in ein durchdachtes System. Genau diese
        Kombination bestimmte auch, wie er mit seiner eigenen körperlichen Verletzlichkeit
        umging: nicht durch ärztliche Behandlung im gewöhnlichen Sinne, sondern durch ein
        selbst erdachtes, streng befolgtes Regelwerk zur Beherrschung des eigenen Körpers
        durch den Willen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Chronische Atembeklemmung seit jungen Jahren:</strong>
        Kant litt bereits als junger Mann an einer als „Enge der Brust" beschriebenen
        Atembeschwerde, die ihn sein gesamtes Erwachsenenleben begleitete und die er selbst
        in philosophischen Schriften thematisierte.</p>
        <p class="vb-intro"><strong>b) Ausgeprägte Sorge um die eigene Verdauung:</strong>
        Zeitgenossen berichteten von Kants akribischer Beschäftigung mit seiner Ernährung und
        Verdauung – ein Thema, das in seinem Alltag und seiner Korrespondenz auffällig oft
        auftauchte.</p>
        <p class="vb-intro"><strong>c) Frühe Entwicklung strenger gesundheitlicher Routinen:</strong>
        Schon in mittleren Lebensjahren begann Kant, seinen Tagesablauf – Aufstehen,
        Spaziergänge, Mahlzeiten – so exakt zu regulieren, dass er zur Grundlage seines
        gesamten weiteren Lebens wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Philosophische Verarbeitung der eigenen Hypochondrie:</strong>
        In seiner späten Schrift „Der Streit der Fakultäten" (1798) widmete Kant einen
        eigenen Abschnitt der Frage, wie der Wille körperliche Krankheitsgefühle durch reine
        Willensanstrengung beherrschen könne – eine direkte, theoretische Verarbeitung seiner
        eigenen lebenslangen Beschwerden.</p>
        <p class="vb-intro"><strong>b) Strikte Verweigerung von Abweichungen von der Routine:</strong>
        Besucher und Freunde berichteten, dass Kant selbst kleine Störungen seines
        Tagesablaufs als potenziell gesundheitsgefährdend empfand und mit Nachdruck
        vermied.</p>
        <p class="vb-intro"><strong>c) Tägliche Tischgesellschaft als gesundheitliche Notwendigkeit:</strong>
        Kant bestand auf ausgedehnter, mehrstündiger Gesellschaft beim Mittagessen – eine
        Routine, die er selbst als notwendig für sein seelisches und körperliches
        Gleichgewicht beschrieb, nicht nur als gesellige Gewohnheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Beginnender geistiger Verfall ab Mitte der 1790er-Jahre:</strong>
        In seinen letzten Lebensjahren begann sich bei Kant eine zunehmende geistige
        Verlangsamung bemerkbar zu machen, die sein enges Umfeld und Biografen wie Thomas
        De Quincey später dokumentierten.</p>
        <p class="vb-intro"><strong>b) Fortsetzung der Routine trotz sichtbaren Verfalls:</strong>
        Auch als sein Gedächtnis und seine Auffassungsgabe nachließen, versuchte Kant,
        seinen gewohnten Tagesablauf so lange wie möglich unverändert fortzusetzen.</p>
        <p class="vb-intro"><strong>c) Tod am 12. Februar 1804 in Königsberg:</strong>
        Kant starb im Alter von 79 Jahren, nach Jahren zunehmender körperlicher und
        geistiger Schwäche, in der Stadt, die er praktisch nie verlassen hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Philosoph, dessen Krankengeschichte zur Quelle wurde:</strong>
        Kants eigene Auseinandersetzung mit seiner Hypochondrie floss unmittelbar in sein
        Spätwerk ein – ein seltener Fall, in dem chronisches Leiden nicht verschwiegen,
        sondern zum Gegenstand philosophischer Reflexion selbst wurde.</p>
        <p class="vb-intro"><strong>b) Ein Begräbnis mit ungewöhnlicher öffentlicher Anteilnahme:</strong>
        Trotz seines zurückgezogenen Lebens versammelte sich bei seinem Tod eine
        außergewöhnlich große Menschenmenge in Königsberg – ein später öffentlicher Ausdruck
        von Anerkennung für einen Mann, der nie um Sichtbarkeit gerungen hatte.</p>
        <p class="vb-intro"><strong>c) Ein Lebenswerk, das trotz der Beschwerden vollendet wurde:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses hinderte Kants
        chronisches Leiden ihn nicht daran, sein gesamtes philosophisches System noch zu
        Lebzeiten vollständig auszuarbeiten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Routine als Schutzsystem gegen den eigenen Körper:</strong>
        Dieselbe Suche nach Sicherheit durch feste, verlässliche Struktur, die Kants
        gesamtes Leben prägte, bestimmte auch, wie er seiner eigenen körperlichen
        Verletzlichkeit begegnete – nicht durch Hingabe an ärztliche Autorität, sondern
        durch ein selbst entwickeltes System, dem er mit derselben Konsequenz vertraute wie
        seiner Philosophie.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel und die Theoretisierung des eigenen Leidens:</strong>
        Kants philosophische Abhandlung über die Beherrschung von Krankheitsgefühlen durch
        den Willen zeigt genau jene Fünfer-Bewegung, mit der auch seine Erkenntnistheorie
        entstand: das Unbeherrschbare wird nicht einfach erlitten, sondern in ein
        begriffliches System übersetzt, das Kontrolle verspricht.</p>
        <p class="vb-intro"><strong>c) Verlässlichkeit bis zuletzt, auch im Verfall:</strong>
        Anders als bei einem plötzlichen gesundheitlichen Einbruch zeigte sich bei Kant ein
        allmähliches, über Jahre erkennbares Nachlassen – ein Muster, das seiner
        lebenslangen Vorliebe für Vorhersehbarkeit selbst im eigenen körperlichen Niedergang
        entsprach.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der durch Willenskraft beherrscht werden sollte:</strong>
        Kants gesamtes Leben war von der Überzeugung geprägt, dass Sicherheit durch
        konsequente Selbstdisziplin und feste Regeln erreichbar ist – seine Hypochondrie war
        keine Ausnahme von diesem Prinzip, sondern dessen konsequenteste Anwendung auf den
        eigenen Körper.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">Sigmund Freud</a>
        (ebenfalls SO6w5) rauchte trotz diagnostiziertem Kieferkrebs unbeirrt weiter und
        unterzog sich über 30 Operationen, um geistig klar zu bleiben; Kant entwickelte
        Jahrzehnte zuvor ein ebenso rigides System, um seine chronische Atembeklemmung durch
        reine Willensanstrengung zu beherrschen. Beide Fälle zeigen dasselbe SO6w5-Muster:
        Sicherheit gegenüber dem eigenen, als bedrohlich erlebten Körper wird nicht durch
        Hingabe an äußere medizinische Autorität gesucht, sondern durch ein selbst
        entwickeltes, streng befolgtes System der Kontrolle. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">Krankheitsporträt zu Sigmund Freud</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Atmung?</strong>
        Für eine soziale Sechs mit Fünferflügel, deren gesamte Sicherheit auf
        vorhersehbarer, kontrollierter Routine beruhte, liegt eine Deutung nahe: Ausgerechnet
        jene körperliche Funktion, die am wenigsten bewusster Kontrolle unterliegt – der
        Atem –, wurde zum Schauplatz seiner lebenslangen Sorge, während sein Denksystem
        gleichzeitig versuchte, genau diese Unkontrollierbarkeit begrifflich einzuhegen.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sechs zwangsläufig zu Hypochondrie
        oder Atembeschwerden führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Kants Fall zeigen lässt, ist ein Muster
        im Umgang mit körperlicher Verletzlichkeit, das bei einer ausgeprägten sozialen
        Sechs mit Fünferflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach
        im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kant kannte sein eigenes Muster nicht – die soziale Sechs mit Fünferflügel sichert
        reflexhaft die eigene Sicherheit durch selbst entwickelte, streng befolgte Systeme,
        statt sich der eigenen körperlichen Verletzlichkeit je ohne diese Kontrolle zu
        stellen, und genau dieses Muster lebte er bis in seine letzten, vom geistigen
        Verfall geprägten Lebensjahre unverändert aus. Wer die eigene Notwendigkeit, jede
        Unsicherheit durch ein System zu bändigen, nicht als Muster erkennt, kann sie auch
        im eigenen körperlichen und geistigen Niedergang nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Sechs mit Fünferflügel erklärt bei <strong>Kant</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Sicherheit auf
        vorhersehbarer Struktur beruhte, versuchte, selbst seinen eigenen, unkontrollierbaren
        Körper in ein System aus Regeln und Willenskraft zu fassen – das Erdmännchen, das
        noch die eigene Atemnot mit derselben Disziplin zu bewachen versuchte, mit der es
        sein ganzes Leben lang Wache gehalten hatte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-immanuel-kant", label:"Porträt: Immanuel Kant (SO6w5) – Philosoph"},
        {route:"krankheitsportraets-sigmund-freud", label:"Krankheitsporträt: Sigmund Freud (SO6w5) – dasselbe Muster der Selbstkontrolle"},
        {route:"krankheitsportraets-woody-allen", label:"Krankheitsporträt: Woody Allen (SE6w7) – verwandte Hypochondrie, andere Instinktantwort"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so6", label:"Subtyp-Profil SO6"},
      ])}
    </div>
  `);
}

function leonardoDaVinciKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-leonardo-da-vinci-portrait.jpg" alt="Leonardo da Vinci" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonardo da Vinci</p>
        <p class="krim-portrait-typ">SO5w4 · Sozialer Typ 5 mit Viererflügel · 1452–1519</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Leonardo da Vinci</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-leonardo-da-vinci">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine grenzenlose Neugier und sein
        universelles Werk zwischen Kunst und Wissenschaft. Diese Seite vertieft ein Kapitel,
        das dort nur am Rande erwähnt wird: einen Schlaganfall in seinen letzten Lebensjahren,
        der ihm die rechte Hand lähmte, ohne dass er deshalb aufhörte zu arbeiten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Leonardo</strong> ist dem <strong>sozialen Typ 5 mit Viererflügel</strong>
        zugeordnet. Die SO5 stellt ihr Wissen der Gemeinschaft zur Verfügung, statt es zu
        horten; der Viererflügel verleiht diesem Wissen eine tiefe ästhetische und emotionale
        Dimension. Genau diese Kombination – der unbedingte Wille, weiter zu wirken und zu
        gestalten – bestimmte auch, wie er auf seine körperliche Einschränkung in den letzten
        Lebensjahren reagierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Schlaganfall um 1517:</strong>
        In seinen letzten Lebensjahren, während seiner Zeit am Hof des französischen Königs
        Franz I. in Amboise, erlitt Leonardo vermutlich einen Schlaganfall, der eine
        Lähmung seiner rechten Körperseite zur Folge hatte.</p>
        <p class="vb-intro"><strong>b) Gelähmte rechte Hand:</strong>
        Zeitgenössische Berichte, darunter der venezianische Gesandte Antonio de Beatis, der
        Leonardo 1517 besuchte, beschrieben ausdrücklich, dass seine rechte Hand gelähmt
        war und er nicht mehr mit der gewohnten Präzision malen konnte.</p>
        <p class="vb-intro"><strong>c) Fortbestehende geistige Klarheit trotz körperlicher Einschränkung:</strong>
        Dieselben Berichte betonten zugleich, dass Leonardos Geist und seine Fähigkeit,
        Skizzen anzufertigen und andere anzuleiten, von der Lähmung unberührt blieben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Umstellung auf die linke Hand:</strong>
        Leonardo war ohnehin von Natur aus linkshändig veranlagt und hatte zeitlebens viele
        seiner Notizen und Skizzen mit der linken Hand angefertigt – ein Umstand, der ihm
        half, trotz der gelähmten rechten Hand weiter zeichnend tätig zu sein.</p>
        <p class="vb-intro"><strong>b) Fortsetzung der Arbeit an der Mona Lisa:</strong>
        Selbst nach dem Schlaganfall arbeitete Leonardo Berichten zufolge weiter an
        Gemälden wie der Mona Lisa – ein Werk, das er ohnehin nie an einen Auftraggeber
        auslieferte, sondern bis zu seinem Tod als eigenes, nie ganz abgeschlossenes Projekt
        behielt.</p>
        <p class="vb-intro"><strong>c) Weiterhin aktiv als Berater und Lehrer:</strong>
        Am französischen Hof wirkte Leonardo trotz seiner körperlichen Einschränkung weiter
        als Planer, Ingenieur und geschätzter Gesprächspartner des Königs.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Rückzug ins Schloss Clos Lucé:</strong>
        König Franz I. stellte Leonardo für seine letzten Lebensjahre das Schloss Clos Lucé
        nahe Amboise zur Verfügung – ein geschützter Rahmen, der ihm trotz seiner
        gesundheitlichen Einschränkung weiteres Arbeiten und Nachdenken ermöglichte.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte Notizbucharbeit bis zuletzt:</strong>
        Leonardos über 13.000 Seiten Notizbücher wuchsen auch in dieser letzten Lebensphase
        weiter – Beobachtungen, Skizzen und Überlegungen, die er trotz der körperlichen
        Einschränkung nicht aufgab.</p>
        <p class="vb-intro"><strong>c) Tod am 2. Mai 1519 in Amboise:</strong>
        Leonardo starb im Alter von 67 Jahren in Frankreich, fern seiner italienischen
        Heimat, im Dienst des französischen Königs.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Nachlass, der die Lähmung überdauerte:</strong>
        Die späten Notizbücher und unvollendeten Projekte aus seinen letzten Lebensjahren
        zeigen keinen erkennbaren Bruch in Leonardos intellektueller Schaffenskraft, trotz
        der körperlichen Einschränkung.</p>
        <p class="vb-intro"><strong>b) Eine posthume Legende um seinen Tod:</strong>
        Der französische Maler Ingres schuf Jahrhunderte später ein berühmtes, historisch
        nicht belegtes Gemälde, das zeigt, wie Leonardo in den Armen von König Franz I.
        stirbt – ein Bild, das seinen Status als verehrter Hofgelehrter bis in die
        Nachwelt hinein festigte.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das trotz Unvollständigkeit wirkte:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses hinderte die
        Lähmung Leonardo nicht daran, sein wohl berühmtestes Werk, die Mona Lisa, bis zu
        seinem Tod fortlaufend weiterzuentwickeln.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Wissen und Schaffen als unaufhörlicher Auftrag:</strong>
        Dieselbe Überzeugung, dass Wissen und Können der Welt zur Verfügung gestellt werden
        müssen, die Leonardos gesamtes Leben prägte, bestimmte auch, wie er auf seine
        körperliche Einschränkung reagierte – nicht mit Rückzug, sondern mit der
        Umstellung auf die ohnehin vorhandene linke Hand, um weiter beitragen zu können.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel und die Weigerung, das unvollendete Werk aufzugeben:</strong>
        Leonardos lebenslange Neigung, Werke nie ganz abzuschließen, traf in seinen letzten
        Jahren auf eine neue, körperliche Grenze – doch statt die Mona Lisa endgültig
        beiseitezulegen, blieb sie bis zuletzt sein Begleitprojekt, dieselbe tiefe,
        emotionale Bindung an das eigene Werk, die den Viererflügel auszeichnet.</p>
        <p class="vb-intro"><strong>c) Kontinuität statt abruptem Bruch:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine
        Berichte über eine plötzliche, dramatische Verhaltensänderung nach dem
        Schlaganfall – Leonardo passte seine Methode an, ohne sein grundlegendes
        Arbeitsprinzip aufzugeben.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der dem Anspruch des Geistes nicht mehr ganz folgen konnte:</strong>
        Leonardos gesamtes Leben war von der Überzeugung geprägt, dass Verstehen und
        Gestalten untrennbar zusammengehören – der Schlaganfall bedrohte ausgerechnet jenes
        körperliche Werkzeug, mit dem er dieses Verstehen sichtbar machte, ohne jedoch das
        Verstehen selbst zu berühren.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-albert-einstein">Albert Einstein</a>
        (ebenfalls SO5w4) lebte über sechseinhalb Jahre mit einem bekannten,
        lebensbedrohlichen Bauchaortenaneurysma und arbeitete bis kurz vor seinem Tod
        weiter, ohne sich von der Diagnose bremsen zu lassen; Leonardo reagierte auf seine
        eigene körperliche Einschränkung mit derselben Haltung – nicht Rückzug, sondern
        Anpassung der Methode bei unverändertem geistigem Schaffensdrang. Beide Fälle zeigen
        dasselbe SO5w4-Muster: Das eigene Wissen und Werk der Welt zur Verfügung zu stellen,
        wiegt schwerer als die eigene körperliche Bedrohung. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-albert-einstein">Krankheitsporträt zu Albert Einstein</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die schaffende Hand?</strong>
        Für eine soziale Fünf mit Viererflügel, deren gesamte Kraft auf der Übersetzung von
        Erkenntnis in sichtbares, geteiltes Werk beruhte, liegt eine Deutung nahe:
        Ausgerechnet jenes körperliche Werkzeug, mit dem er sein Wissen der Welt sichtbar
        machte, wurde zum Schauplatz der Einschränkung – und zwang ihn, auf die andere,
        ebenfalls geübte Hand auszuweichen, statt aufzugeben. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu einem
        Schlaganfall führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Leonardos Fall zeigen lässt, ist ein Muster im
        Umgang mit körperlicher Einschränkung im Alter, das bei einer ausgeprägten sozialen
        Fünf mit Viererflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach
        im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Leonardo kannte sein eigenes Muster nicht – die soziale Fünf mit Viererflügel
        stellt reflexhaft ihr Wissen und Werk der Welt zur Verfügung, statt die eigene
        körperliche Verletzlichkeit je als Grund zum Aufhören anzuerkennen, und genau dieses
        Muster lebte er bis in seine letzten Lebensmonate unverändert aus. Wer die eigene
        Notwendigkeit, weiter zu wirken und beizutragen, nicht als Muster erkennt, kann sie
        auch angesichts der eigenen körperlichen Grenzen nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Fünf mit Viererflügel erklärt bei <strong>Leonardo</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf der Übersetzung
        von Erkenntnis in sichtbares Werk beruhte, ließ sich selbst von einer gelähmten Hand
        nicht aufhalten – der Oktopus, der einen seiner acht Arme verlor und trotzdem
        weiterzeichnete, bis der letzte Atemzug kam.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-leonardo-da-vinci", label:"Porträt: Leonardo da Vinci (SO5w4) – Universalgelehrter"},
        {route:"krankheitsportraets-albert-einstein", label:"Krankheitsporträt: Albert Einstein (SO5w4) – dasselbe Muster ungebremsten Schaffens"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

function julesVerneKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-jules-verne-portrait.jpg" alt="Jules Verne" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jules Verne</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel · 1828–1905</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jules Verne</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-jules-verne">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein rastloses literarisches
        Weltenbauen. Diese Seite vertieft ein Kapitel, das dort flüchtig behandelt wird: Am
        9. März 1886 schoss sein geistig verwirrter Neffe Gaston zweimal auf ihn, eine
        Kugel blieb dauerhaft im Bein stecken – Verne hinkte fortan bis an sein Lebensende
        und litt später zusätzlich an Diabetes.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Jules Verne</strong> ist dem <strong>sozialen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SO7 opfert den eigenen unmittelbaren Genuss zugunsten einer größeren
        Idee; der Sechserflügel bringt Vorsicht und Loyalität gegenüber Autoritäten hinzu.
        Genau diese Kombination – der Wille, trotz Rückschlag weiterzubauen, gepaart mit der
        Sechser-typischen Neigung, Schwäche eher zu verbergen als offen zuzugeben –
        bestimmte auch, wie Verne mit der dauerhaften Verletzung und ihren Folgen umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Schuss des Neffen am 9. März 1886:</strong>
        Vernes Neffe Gaston, der unter einer nie eindeutig diagnostizierten psychischen
        Erkrankung litt, schoss vor dem Haus in Amiens zweimal auf seinen Onkel. Ein
        Schuss verfehlte ihn, der zweite traf ihn ins linke Schienbein.</p>
        <p class="vb-intro"><strong>b) Eine Kugel, die nie entfernt wurde:</strong>
        Die Kugel steckte zu nah an wichtigen Blutgefäßen, um sie ohne erhebliches Risiko
        zu entfernen – die Ärzte entschieden sich, sie im Bein zu belassen. Verne trug sie
        bis zu seinem Tod mit sich.</p>
        <p class="vb-intro"><strong>c) Sofortige Rückkehr zur Arbeit trotz des Vorfalls:</strong>
        Bereits kurz nach dem Attentat setzte Verne seine schriftstellerische Arbeit
        fort – ein erster Hinweis auf das Muster, das seinen weiteren Umgang mit der
        Verletzung prägen sollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein dauerhaftes Hinken:</strong>
        Die Verletzung heilte nie vollständig aus; Verne hinkte für den Rest seines
        Lebens und war in seiner Mobilität zunehmend eingeschränkt.</p>
        <p class="vb-intro"><strong>b) Rückzug von den weiten Reisen:</strong>
        Der Mann, der drei eigene Segelyachten besessen und Europa bereist hatte, gab
        seine ausgedehnten Seereisen nach der Verletzung weitgehend auf und zog sich
        zunehmend nach Amiens zurück.</p>
        <p class="vb-intro"><strong>c) Diabetes in den folgenden Jahren:</strong>
        In den Jahren nach dem Attentat entwickelte Verne zusätzlich Diabetes, der
        seine körperliche Verfassung weiter schwächte, ohne dass er seine schriftstellerische
        Produktivität nennenswert reduzierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Kommunalpolitisches Engagement trotz Einschränkung:</strong>
        Statt sich zurückzuziehen, wirkte Verne nach der Verletzung als Stadtrat von
        Amiens und blieb bis ins hohe Alter öffentlich engagiert – ein sicherer, lokal
        begrenzter Rahmen, der zur Sechser-Vorsicht des Flügels passte.</p>
        <p class="vb-intro"><strong>b) Unverminderte literarische Produktion:</strong>
        Auch nach 1886 erschienen weiterhin neue Bände der "Voyages extraordinaires" –
        die Verletzung bremste die Menge seines Schaffens kaum.</p>
        <p class="vb-intro"><strong>c) Zunehmend düsterer Tonfall im Spätwerk:</strong>
        Romane wie "Propeller-Insel" oder spätere, postum veröffentlichte Werke zeigen
        einen spürbar skeptischeren Blick auf den technischen Fortschritt, den Verne in
        jüngeren Jahren noch blauäugig gefeiert hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Familiendrama, das öffentlich kaum thematisiert wurde:</strong>
        Verne sprach in Interviews und Briefen nur zurückhaltend über den Vorfall und
        seinen Neffen, der nach der Tat in eine psychiatrische Anstalt eingewiesen wurde –
        typisch für den Sechserflügel, der lieber Fassung wahrt, als das eigene Leid
        öffentlich auszubreiten.</p>
        <p class="vb-intro"><strong>b) Ein Nationalheld trotz sichtbarer Gebrechlichkeit:</strong>
        Verne wurde zu seinen Lebzeiten trotz seines Hinkens und seiner zunehmenden
        gesundheitlichen Probleme als literarischer Nationalheld gefeiert – die
        körperliche Einschränkung tat seinem öffentlichen Ansehen keinen Abbruch.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das die Verletzung überdauerte:</strong>
        Die "Voyages extraordinaires" wuchsen bis zu Vernes Tod 1905 weiter, teils sogar
        über seinen Tod hinaus durch postum veröffentlichte Manuskripte, die sein Sohn
        Michel überarbeitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Weiterbauen statt Rückzug:</strong>
        Dieselbe Überzeugung, dass das eigene Werk der Welt geschuldet sei, die Vernes
        gesamtes Schaffen trug, bestimmte auch seine Reaktion auf die Verletzung – nicht
        Rückzug ins Private, sondern Fortsetzung der Arbeit, nur eben ortsgebunden statt
        auf hoher See.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und das verschwiegene Familientrauma:</strong>
        Statt öffentlich über den Schuss seines eigenen Neffen zu klagen, hielt Verne
        die Angelegenheit weitgehend privat – dieselbe Loyalität und Zurückhaltung
        gegenüber der eigenen Familie, die sich schon in seiner jahrzehntelangen
        Unterordnung unter seinen Verleger Hetzel gezeigt hatte.</p>
        <p class="vb-intro"><strong>c) Die wachsende Skepsis als Sechser-typische Schattenseite:</strong>
        Der zunehmend düstere Ton seines Spätwerks lässt sich als Sechser-Reaktion lesen:
        Die anfängliche, fast naive Technikbegeisterung der SO7 wich einem wachsenden
        Bewusstsein für die Gefahren des eigenen Bauwerks, ausgelöst durch die eigene
        erlebte Verletzlichkeit.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Verletzung, die zum stillen Begleiter wurde:</strong>
        Die im Bein verbliebene Kugel war für Verne buchstäblich ein Teil seines Körpers,
        den er nicht öffentlich thematisierte, aber der sein Gehen und seine Reisefreude
        für den Rest seines Lebens einschränkte – ein Leiden, das er trug, statt es zur
        Schau zu stellen.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-moliere">Molière</a>
        (ebenfalls SO7w6) verschwieg jahrelang sein eigenes Lungenleiden, bevor er auf
        offener Bühne zusammenbrach; Verne verschwieg auf ähnliche Weise das familiäre
        Drama hinter seiner Verletzung und ihre langfristigen Folgen. Beide Fälle zeigen
        dasselbe SO7w6-Muster: Die Sechser-typische Vorsicht sorgt dafür, dass persönliches
        Leid eher hinter der Fassade der Weiterarbeit verschwindet, als offen ausgesprochen
        zu werden. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-moliere">Krankheitsporträt zu Molière</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Bein?</strong>
        Für einen sozialen Siebener mit Sechserflügel, dessen ganzes Leben auf Bewegung,
        Reise und dem Erschließen neuer Welten beruhte, liegt eine Deutung nahe: Ausgerechnet
        jenes Körperteil, das ihn einst über Kontinente und auf hohe See getragen hatte,
        wurde zum Ort der dauerhaften Einschränkung – ein Symbol für die erzwungene
        Bodenhaftung eines Mannes, der zeitlebens in die Ferne gebaut hatte. Diese Deutung
        ist eine plausible Interpretation, kein belegter historischer Kausalzusammenhang,
        und wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben zwangsläufig zu einer
        Schussverletzung durch ein Familienmitglied führt – <strong>jeder Mensch kann
        jede Krankheit oder Verletzung erleiden, unabhängig vom Subtyp.</strong> Was sich
        an Vernes Fall zeigen lässt, ist ein Muster im Umgang mit einer dauerhaften
        körperlichen Einschränkung, das bei einer ausgeprägten sozialen Sieben mit
        Sechserflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Verne kannte sein eigenes Muster nicht – die soziale Sieben mit Sechserflügel
        verbirgt reflexhaft eigenes Leid hinter Loyalität, Pflichterfüllung und
        fortgesetzter Arbeit, statt die eigene Verletzlichkeit je offen anzuerkennen, und
        genau dieses Muster lebte er bis in seine letzten Lebensjahre unverändert aus. Wer
        die eigene Neigung, Schwäche zu verbergen, statt sie zu benennen, nicht als Muster
        erkennt, kann sie auch angesichts eines lebensverändernden familiären Traumas
        nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Sieben mit Sechserflügel erklärt bei <strong>Jules Verne</strong> vieles
        am Verlauf seiner eigenen Verletzung: ein Mann, der sein ganzes Leben lang neue
        Welten erbaute, ließ sich selbst von der Kugel im eigenen Bein nicht aufhalten –
        der Biber, der weiterbaute, auch als der Damm längst Risse zeigte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-jules-verne", label:"Porträt: Jules Verne (SO7w6) – der Biber, der die Zukunft vorausschrieb"},
        {route:"krankheitsportraets-moliere", label:"Krankheitsporträt: Molière (SO7w6) – dasselbe Muster verschwiegenen Leidens"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

function helmutKohlKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-helmut-kohl-portrait.jpg" alt="Helmut Kohl" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Helmut Kohl</p>
        <p class="krim-portrait-typ">SO8w9 · Sozialer Typ 8 mit Neunerflügel · 1930–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Löwe</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Tierentsprechung: Löwe" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Helmut Kohl</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-helmut-kohl">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine 16 Jahre als Bundeskanzler und
        die deutsche Wiedervereinigung. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: Ein schwerer Sturz im Februar 2008 beendete abrupt Kohls
        öffentliches Leben und machte ihn für die letzten neun Jahre bis zu seinem Tod 2017
        weitgehend pflegebedürftig.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kohl</strong> ist dem <strong>sozialen Typ 8 mit Neunerflügel</strong>
        zugeordnet. Die SO8 investiert ihre Kraft in den Schutz und Aufbau einer größeren
        Gemeinschaft; der Neunerflügel bringt Geduld und die Fähigkeit hinzu, Kontrolle über
        lange Zeiträume ohne sichtbare Anstrengung zu halten. Genau diese Kombination –
        Führungswille, gepaart mit der Neuner-typischen Neigung, die eigene Verwundbarkeit
        möglichst aus dem öffentlichen Blick zu halten – bestimmte auch, wie das Umfeld
        seine letzten Lebensjahre gestaltete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Sturz im Februar 2008:</strong>
        Kohl stürzte in seinem Haus in Ludwigshafen-Oggersheim schwer und zog sich eine
        Kopfverletzung zu, die eine Notoperation erforderlich machte.</p>
        <p class="vb-intro"><strong>b) Dauerhafte körperliche Folgen:</strong>
        Nach dem Sturz war Kohl auf einen Rollstuhl angewiesen und konnte sich nicht mehr
        selbstständig fortbewegen – ein radikaler Bruch für einen Mann, dessen physische
        Präsenz jahrzehntelang Teil seiner politischen Wirkung gewesen war.</p>
        <p class="vb-intro"><strong>c) Weitgehender Verlust der Sprache:</strong>
        Die Verletzung schränkte auch Kohls Sprechfähigkeit erheblich ein – der einst für
        seine bedächtige, aber wortgewaltige Pfälzer Rhetorik bekannte Kanzler konnte sich
        fortan nur noch eingeschränkt verständlich machen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fast völliger Rückzug aus der Öffentlichkeit:</strong>
        Nach dem Sturz zeigte sich Kohl kaum noch öffentlich – ein starker Kontrast zu
        seinem jahrzehntelangen Bedürfnis, als zentrale Figur sichtbar zu bleiben.</p>
        <p class="vb-intro"><strong>b) Rund-um-die-Uhr-Pflege im eigenen Haus:</strong>
        Kohl verbrachte seine letzten Lebensjahre in häuslicher Pflege in Oggersheim, betreut
        von seiner zweiten Ehefrau Maike Kohl-Richter, die den Zugang zu ihm streng
        kontrollierte.</p>
        <p class="vb-intro"><strong>c) Öffentlich gewordener Streit um seine Betreuung:</strong>
        Kohls Söhne aus erster Ehe berichteten später öffentlich, ihnen sei der Kontakt zu
        ihrem Vater in dieser Zeit erschwert oder verwehrt worden – ein familiärer Konflikt,
        der weit über Kohls Tod hinaus die öffentliche Debatte um sein Erbe prägte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Wenige, sorgfältig kontrollierte öffentliche Auftritte:</strong>
        Die seltenen Male, die Kohl nach 2008 noch öffentlich in Erscheinung trat – etwa
        2014 beim Besuch des französischen Präsidenten François Hollande – waren streng
        kontrollierte, kurze Momente, keine spontanen Auftritte mehr.</p>
        <p class="vb-intro"><strong>b) Kontroverse um sein politisches Erbe zu Lebzeiten:</strong>
        Noch während seiner Pflegebedürftigkeit erschien 2014 ein Buch mit angeblich
        vertraulichen Kohl-Zitaten seines früheren Ghostwriters, gegen dessen Veröffentlichung
        Kohl juristisch vorging – ein letzter, geschwächter Kampf um die Kontrolle über die
        eigene Geschichte.</p>
        <p class="vb-intro"><strong>c) Ein Staatsakt außerhalb der üblichen Form:</strong>
        Nach seinem Tod 2017 fand erstmals in der Geschichte der Bundesrepublik ein
        „Europäischer Trauerakt" im Europaparlament in Straßburg statt – eine besondere
        Würdigung, die Kohls Lebenswerk für die europäische Einigung unterstrich.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein politisches Erbe, das den Verfall überdauerte:</strong>
        Trotz neun Jahren weitgehender Unsichtbarkeit blieb Kohls historische Bedeutung als
        „Kanzler der Einheit" in der öffentlichen Wahrnehmung ungebrochen.</p>
        <p class="vb-intro"><strong>b) Ein Familienstreit, der öffentlich ausgetragen wurde:</strong>
        Der Konflikt zwischen Kohls zweiter Ehefrau und seinen Söhnen aus erster Ehe um
        Zugang, Pflege und später auch das Erbe wurde in deutschen Medien ausführlich
        diskutiert und überschattete die letzten Lebensjahre erheblich.</p>
        <p class="vb-intro"><strong>c) Eine kontrollierte letzte Ruhestätte:</strong>
        Kohl wurde nicht neben seiner ersten Frau Hannelore, sondern auf eigenen Wunsch auf
        dem Gelände der Speyerer Domvorhalle beigesetzt – eine Entscheidung, die von seinen
        Söhnen als weiterer Ausdruck der Kontrolle seiner zweiten Frau über sein Lebensende
        kritisiert wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle behalten, auch als der Körper sie verweigerte:</strong>
        Dieselbe Überzeugung, dass die Fäden in der eigenen Hand bleiben müssen, die Kohls
        gesamte politische Laufbahn trug, bestimmte auch die Organisation seiner letzten
        Lebensjahre – nicht offene Verletzlichkeit, sondern ein streng kontrollierter,
        weitgehend abgeschirmter Rückzug.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und das Aussitzen des eigenen Verfalls:</strong>
        Kohls legendäre Fähigkeit, Konflikte auszusitzen, statt sie öffentlich auszutragen,
        zeigte sich noch einmal in seinen letzten Jahren – kein öffentliches Ringen um
        Fassung, sondern ein stiller, fast unsichtbarer Rückzug hinter verschlossenen Türen.</p>
        <p class="vb-intro"><strong>c) Die Loyalitätsfalle als Wiederholung eines bekannten Musters:</strong>
        Wie schon in der CDU-Spendenaffäre, in der Kohl treue Netzwerke über Transparenz
        stellte, geriet auch seine letzte Lebensphase in eine Situation, in der enge
        persönliche Bindung – zu seiner zweiten Frau – wichtiger wurde als der offene Zugang
        für andere, die ihm nahestanden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Löwe, dessen Rudel ihn nicht mehr sehen durfte:</strong>
        Kohls gesamte politische Existenz beruhte auf Sichtbarkeit, Präsenz und persönlicher
        Kontrolle über sein Netzwerk – der Sturz 2008 bedrohte ausgerechnet diese Sichtbarkeit,
        während die Kontrolle über sein unmittelbares Umfeld paradoxerweise erhalten blieb,
        nur eben in anderer Hand.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-karl-marx">Karl Marx</a>
        (ebenfalls SO8w9) arbeitete über vier Jahrzehnte trotz schwerster, schmerzhafter
        Karbunkel unbeirrt an seinem Lebenswerk weiter, ohne sich von seinem Leiden aus der
        Bahn werfen zu lassen; Kohl reagierte auf seine eigene, weit dramatischere
        körperliche Einschränkung mit einer strukturell ähnlichen Haltung – nicht durch
        öffentliches Klagen, sondern durch stille Fortsetzung der Kontrolle über das eigene
        Umfeld, so weit es die Umstände noch zuließen. Beide Fälle zeigen dasselbe
        SO8w9-Muster: Die Acht mit Neunerflügel gibt die Kontrolle über das eigene
        Lebenswerk und Umfeld selbst angesichts massiver körperlicher Einschränkung nicht
        leichtfertig auf. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-karl-marx">Krankheitsporträt zu Karl Marx</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Bewegung und Sprache?</strong>
        Für einen sozialen Achter mit Neunerflügel, dessen gesamte Macht auf physischer
        Präsenz und der Fähigkeit beruhte, mit bedächtiger, aber wirkungsvoller Rhetorik
        Räume zu füllen, liegt eine Deutung nahe: Ausgerechnet jene beiden Fähigkeiten –
        sich zu bewegen und zu sprechen –, die seine jahrzehntelange politische Wirkung
        trugen, wurden zum Ort der Einschränkung. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Acht zwangsläufig zu einem Sturz mit
        dauerhafter Lähmung führt – <strong>jeder Mensch kann jede Krankheit oder
        Verletzung erleiden, unabhängig vom Subtyp.</strong> Was sich an Kohls Fall zeigen
        lässt, ist ein Muster im Umgang mit plötzlichem, massivem Kontrollverlust, das bei
        einer ausgeprägten sozialen Acht mit Neunerflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kohl kannte sein eigenes Muster nicht – die soziale Acht mit Neunerflügel hält
        reflexhaft an der Kontrolle über das eigene Umfeld fest, statt die eigene
        Verletzlichkeit je offen zuzulassen, und genau dieses Muster bestimmte, wie sein
        letztes Lebensjahrzehnt organisiert wurde. Wer die eigene Notwendigkeit, die Fäden
        in der Hand zu behalten, nicht als Muster erkennt, kann sie auch angesichts
        vollständiger körperlicher Abhängigkeit nicht ablegen – sie verlagert sich dann nur
        von der eigenen Person auf die engste Vertrauensperson.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Acht mit Neunerflügel erklärt bei <strong>Helmut Kohl</strong> vieles am
        Verlauf seiner letzten Lebensjahre: ein Mann, dessen gesamte Macht auf Präsenz und
        Kontrolle beruhte, verlor beides fast vollständig – und doch blieb, geduldig und
        unsichtbar im Hintergrund organisiert, genau jene Kontrolle über sein unmittelbares
        Umfeld erhalten, die sein ganzes Leben geprägt hatte. Der Löwe, der nicht mehr
        brüllen konnte, aber sein Revier bis zuletzt nicht wirklich verließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-helmut-kohl", label:"Porträt: Helmut Kohl (SO8w9) – Kanzler der Einheit"},
        {route:"krankheitsportraets-karl-marx", label:"Krankheitsporträt: Karl Marx (SO8w9) – dasselbe Muster ungebrochener Kontrolle"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so8", label:"Subtyp-Profil SO8"},
      ])}
    </div>
  `);
}

function aiWeiweiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-ai-weiwei-portrait.jpg" alt="Ai Weiwei" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ai Weiwei</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · geb. 1957</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ai Weiwei</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ai-weiwei">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein künstlerisches und
        aktivistisches Lebenswerk. Diese Seite vertieft ein Kapitel, das dort nur gestreift
        wird: Im August 2009 wurde Ai Weiwei von der chinesischen Polizei in Chengdu
        krankenhausreif geschlagen, erlitt dadurch eine Hirnblutung und musste sich wenige
        Wochen später in München einer Notoperation unterziehen – seither leidet er unter
        chronischen Kopfschmerzen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ai Weiwei</strong> ist dem <strong>selbsterhaltenden Typ 2 mit
        Dreierflügel</strong> zugeordnet. Die SE2 sorgt sich direkt und körperlich um
        andere, zuerst um die eigene Handlungsfähigkeit; der Dreierflügel bringt den Hunger
        nach Sichtbarkeit und größtmöglicher Reichweite hinzu. Genau diese Kombination –
        Fürsorge, die sich nicht zurückzieht, sondern öffentlich sichtbar wird – bestimmte
        auch, wie Ai Weiwei mit der erlittenen Polizeigewalt und ihren Folgen umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Angriff in Chengdu im August 2009:</strong>
        Ai Weiwei war nach Chengdu gereist, um als Zeuge im Prozess gegen den Aktivisten
        Tan Zuoren auszusagen, der wie er die Erdbebenopfer von Sichuan untersucht hatte.
        Polizisten drangen nachts in sein Hotelzimmer ein und schlugen ihn.</p>
        <p class="vb-intro"><strong>b) Zunächst unbemerkte innere Verletzung:</strong>
        Äußerlich zeigten sich zunächst keine dramatischen Spuren – die eigentliche
        Verletzung, eine innere Hirnblutung, blieb tagelang unentdeckt.</p>
        <p class="vb-intro"><strong>c) Diagnose erst Wochen später in Deutschland:</strong>
        Erst im September 2009, während der Vorbereitung einer Ausstellung in München,
        wurde bei starken Kopfschmerzen eine Hirnblutung festgestellt, die eine sofortige
        Notoperation erforderlich machte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Erfolgreiche Notoperation in München:</strong>
        Die Ärzte in München operierten Ai Weiwei umgehend und konnten die akute
        Lebensgefahr abwenden.</p>
        <p class="vb-intro"><strong>b) Chronische Kopfschmerzen als bleibende Folge:</strong>
        Seit dem Vorfall leidet Ai Weiwei nach eigenen Angaben wiederkehrend unter starken
        Kopfschmerzen – eine dauerhafte körperliche Erinnerung an die Gewalt, der er
        ausgesetzt war.</p>
        <p class="vb-intro"><strong>c) Keine Distanzierung von seiner Arbeit:</strong>
        Statt sich aus Sorge um die eigene Gesundheit aus der aktivistischen Arbeit
        zurückzuziehen, setzte Ai Weiwei seine öffentliche Kritik an der chinesischen
        Regierung nach der Genesung unvermindert fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Verletzung wurde zum Kunstwerk:</strong>
        Ai Weiwei dokumentierte die eigene Verletzung öffentlich, unter anderem mit dem
        provokanten Selbstporträt-Titel "Fuck Off" und Röntgenbild-artigen Darstellungen
        seines eigenen Kopfes – die eigene Verwundbarkeit wurde nicht verborgen, sondern zum
        Beweisstück gegen die staatliche Gewalt gemacht.</p>
        <p class="vb-intro"><strong>b) Rechtliche Gegenwehr trotz Risiko:</strong>
        Ai Weiwei versuchte, die verantwortlichen Polizisten juristisch zur Rechenschaft zu
        ziehen – ein Vorgehen, das in China erhebliche persönliche Risiken barg und
        letztlich erfolglos blieb, ihn aber nicht von weiteren Klagen abhielt.</p>
        <p class="vb-intro"><strong>c) Zunehmende staatliche Überwachung und Repression:</strong>
        In den Jahren nach dem Vorfall verschärfte sich der Druck des chinesischen Staates
        weiter, bis hin zur 81-tägigen Inhaftierung 2011 – ein eskalierendes Muster, in dem
        die Hirnblutung von 2009 im Rückblick als früher Wendepunkt erscheint.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Internationale Aufmerksamkeit für den Fall:</strong>
        Die Münchner Notoperation und ihre Umstände wurden international ausführlich
        berichtet und machten den Fall Ai Weiwei einem breiten westlichen Publikum bekannt,
        das seine Kunst zuvor kaum kannte.</p>
        <p class="vb-intro"><strong>b) Ein Ereignis, das sein Werk mitprägte:</strong>
        Die eigene Verletzung wurde zu einem wiederkehrenden Motiv in Ai Weiweis späterem
        Werk – ein Beleg dafür, dass persönlich erlittene Gewalt bei ihm nie privat blieb,
        sondern konsequent in öffentliche künstlerische Aussage überführt wurde.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug trotz eskalierender Bedrohung:</strong>
        Weder die Kopfverletzung noch die spätere Inhaftierung 2011 brachten Ai Weiwei dazu,
        seine kritische öffentliche Haltung aufzugeben – erst der eingezogene Reisepass
        zwang ihn 2015 faktisch zum Exil.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Fürsorge, die aus der eigenen Verletzung Handlung macht:</strong>
        Dieselbe SE2-Überzeugung, dass Anteilnahme sich in konkreter, sichtbarer Handlung
        äußern muss, bestimmte auch, wie Ai Weiwei mit der eigenen Verletzung umging – nicht
        durch stilles Verarbeiten, sondern durch öffentliche Dokumentation und künstlerische
        Verarbeitung.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die maximale Reichweite des eigenen Leidens:</strong>
        Wo eine andere Person die eigene Verletzung privat gehalten hätte, suchte Ai Weiwei
        aktiv die größtmögliche Öffentlichkeit dafür – dieselbe Logik, mit der er auch seine
        Kunstwerke stets auf maximale mediale Reichweite hin anlegte.</p>
        <p class="vb-intro"><strong>c) Stolz, der sich der Gewalt nicht beugt:</strong>
        Die Leidenschaft der Zwei, gerichtet auf die eigene Unentbehrlichkeit und
        Wirkmächtigkeit, zeigte sich in der Weigerung, die erlittene Gewalt als Niederlage
        zu behandeln – sie wurde stattdessen zum Beweisstück der eigenen moralischen
        Position gegenüber dem Staat.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der zum Beweismittel wurde:</strong>
        Für Ai Weiwei, dessen gesamtes Schaffen darauf beruht, verschwiegene Wahrheiten
        sichtbar zu machen, traf die Gewalt gegen seinen eigenen Körper genau jenen Nerv –
        die Hirnblutung wurde nicht verdrängt, sondern in dieselbe Logik der Sichtbarmachung
        überführt, die schon die 5.196 Namen der Erdbebenopfer geprägt hatte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Frida
        Kahlo</a> (ebenfalls SE2w3) verwandelte die Schmerzen ihres eigenen, durch einen
        Busunfall dauerhaft verletzten Körpers systematisch in ihr künstlerisches
        Hauptthema, statt das Leiden zu verbergen; Ai Weiwei reagierte auf die ihm
        zugefügte Gewalt mit derselben Grundhaltung – der eigene verletzte Körper wird nicht
        versteckt, sondern zum zentralen, öffentlich sichtbaren Werkstoff. Beide Fälle
        zeigen dasselbe SE2w3-Muster: Der eigene Schmerz wird nicht privatisiert, sondern
        mit dem Dreierflügel-Hunger nach Reichweite in ein möglichst großes Publikum
        getragen. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Krankheitsporträt zu Frida Kahlo</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Kopf?</strong>
        Für eine selbsterhaltende Zwei mit Dreierflügel, deren gesamte Wirkung auf
        Wahrnehmung, Kommunikation und der eigenen Stimme beruht, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, mit dem er dachte, sprach und die Welt beobachtete, wurde
        zum Ort der Gewalt – eine direkte Bedrohung seines wichtigsten Werkzeugs als
        Aktivist und Künstler. Diese Deutung ist eine plausible Interpretation, kein
        belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        Polizeigewalt und Hirnblutung führt – <strong>jeder Mensch kann jede Krankheit oder
        Verletzung erleiden, unabhängig vom Subtyp.</strong> Was sich an Ai Weiweis Fall
        zeigen lässt, ist ein Muster im Umgang mit erlittener Gewalt, das bei einer
        ausgeprägten selbsterhaltenden Zwei mit Dreierflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Ai Weiwei kennt sein eigenes Muster nicht – die selbsterhaltende Zwei mit
        Dreierflügel verwandelt reflexhaft eigenes Leid in sichtbare, öffentliche Handlung,
        statt es je privat zu verarbeiten, und genau dieses Muster lebt er seit der
        Hirnblutung unverändert aus. Wer die eigene Notwendigkeit, Leid in Reichweite zu
        verwandeln, nicht als Muster erkennt, kann auch angesichts einer lebensbedrohlichen
        Verletzung nicht innehalten, um sich zu schonen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Zwei mit Dreierflügel erklärt bei <strong>Ai Weiwei</strong>
        vieles am Umgang mit der eigenen Verletzung: ein Mann, dessen gesamtes Schaffen
        darauf beruht, Verschwiegenes sichtbar zu machen, lässt sich selbst von einer
        Hirnblutung nicht zum Schweigen bringen – das Flusspferd, das seine Wunde nicht
        versteckt, sondern mitten im Revier zeigt, damit niemand sie übersehen kann.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ai-weiwei", label:"Porträt: Ai Weiwei (SE2w3) – das Flusspferd"},
        {route:"krankheitsportraets-frida-kahlo", label:"Krankheitsporträt: Frida Kahlo (SE2w3) – dasselbe Muster sichtbaren Leidens"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

function woodyAllenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-woody-allen-portrait.jpg" alt="Woody Allen" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Woody Allen</p>
        <p class="krim-portrait-typ">SE6w7 · Selbsterhaltender Typ 6 mit Siebenerflügel · geb. 1935</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kaninchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Tierentsprechung: Kaninchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Woody Allen</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-woody-allen">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein umfangreiches filmisches
        Lebenswerk. Diese Seite vertieft ein Kapitel, das dort oberflächlich behandelt wird: eine
        jahrzehntelange, öffentlich zelebrierte Hypochondrie, die er selbst lieber als
        „Alarmismus" bezeichnet – und die sein Leben und Werk seit den 1950er-Jahren
        ununterbrochen begleitet.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Woody Allen</strong> ist dem <strong>selbsterhaltenden Typ 6 mit
        Siebenerflügel</strong> zugeordnet. Die SE6 sucht Sicherheit durch Routine und ein
        eng vertrautes Umfeld; der Siebenerflügel übersetzt die Angst sofort in Sprache,
        Tempo und Witz, statt in ihr zu erstarren. Genau diese Kombination – Angst, die
        nie ganz verschwindet, aber ständig in Worte, Pointen und Arbeit verwandelt wird –
        bestimmte auch, wie Allen mit seiner eigenen Gesundheitsangst umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginn der Psychoanalyse um 1957–1959:</strong>
        Nach eigenen Angaben begann Allen seine analytische Behandlung bereits Ende der
        1950er-Jahre, in jungen Jahren als aufstrebender Comedy-Autor – ein Startpunkt, der
        sich über Jahrzehnte fortsetzen sollte.</p>
        <p class="vb-intro"><strong>b) Über 35 Jahre ununterbrochene Psychoanalyse:</strong>
        Nach eigener Aussage befand sich Allen mehr als 35 Jahre lang in analytischer
        Behandlung – nicht mit dem Ziel, geheilt zu werden, sondern um die eigene Angst
        systematisch zu verstehen und in Worte zu fassen.</p>
        <p class="vb-intro"><strong>c) Frühe Verarbeitung im eigenen Werk:</strong>
        Bereits in seinen frühen Filmen und Stand-up-Programmen der 1960er- und
        1970er-Jahre wird die eigene Gesundheitsangst zum wiederkehrenden komödiantischen
        Material, lange bevor er öffentlich explizit darüber schrieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Kleinste Symptome werden zu Katastrophen:</strong>
        Allen beschreibt, dass selbst spröde Lippen bei ihm sofort den Verdacht auf einen
        Hirntumor, Lungenkrebs oder – in einem selbst geschilderten Fall – Rinderwahnsinn
        auslösen können.</p>
        <p class="vb-intro"><strong>b) Selbstbezeichnung als „Alarmist", nicht als Hypochonder:</strong>
        Allen bestand darauf, dass er keine eingebildeten Leiden erfinde, sondern reale,
        harmlose Symptome sofort maximal katastrophisch deute – eine feine, aber von ihm
        selbst betonte Unterscheidung.</p>
        <p class="vb-intro"><strong>c) Ausgeprägte Flugangst und Angst vor engen Räumen:</strong>
        Neben der Gesundheitsangst im engeren Sinn prägten auch Flugangst, die Angst vor
        Aufzügen und geschlossenen Räumen sein Alltagsleben über Jahrzehnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der New-York-Times-Essay vom 12. Januar 2013:</strong>
        In einem viel beachteten Meinungsbeitrag beschrieb Allen seine Gesundheitsangst
        selbst ausführlich – darunter die Sorge um die eigenen Sexualpheromone, das
        Für-tot-Erklären schlafender Männer und die Vermutung, seine eigentliche Angst gelte
        gar nicht bestimmten Krankheiten, sondern schlicht dem Tod selbst.</p>
        <p class="vb-intro"><strong>b) Konsequente Weigerung, sich beruhigen zu lassen:</strong>
        Nach eigener Schilderung genügt bei ihm meist ein Aspirin oder etwas Kalamin-Lotion
        als tatsächliche Behandlung – doch die Panik davor bleibt jedes Mal unverändert
        stark, unabhängig von der harmlosen Realität des Symptoms.</p>
        <p class="vb-intro"><strong>c) Hypochondrie als durchgehendes Filmthema:</strong>
        Figuren mit ausgeprägter Gesundheitsangst, oft von Allen selbst gespielt, ziehen
        sich durch sein gesamtes Werk – von frühen Komödien bis in seine späten Filme
        hinein bleibt das Thema präsent.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Markenzeichen statt eines verborgenen Leidens:</strong>
        Anders als viele andere Krankheitsverläufe dieses Kompasses wurde Allens
        Gesundheitsangst nie verschwiegen, sondern von Anfang an zum öffentlich bekannten,
        sogar vermarkteten Teil seiner künstlerischen Identität.</p>
        <p class="vb-intro"><strong>b) Ungebremste Schaffenskraft trotz jahrzehntelanger Angst:</strong>
        Über fünf Jahrzehnte drehte Allen fast im Jahresrhythmus einen neuen Film – die
        Gesundheitsangst bremste die schiere Menge seines Schaffens zu keinem Zeitpunkt
        erkennbar.</p>
        <p class="vb-intro"><strong>c) Ein Publikum, das sich in der eigenen Angst wiedererkannte:</strong>
        Generationen von Zuschauern fanden in Allens offen ausgestellter Neurose eine Form
        von Trost – die eigene Angst wurde durch seine Kunst nicht pathologisiert, sondern
        normalisiert.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Angst, die sofort in Sprache verwandelt wird:</strong>
        Dieselbe SE6w7-Mechanik, die seine gesamte komödiantische Stimme trägt, bestimmte
        auch seinen Umgang mit der eigenen Gesundheitsangst – nicht Verdrängung, sondern
        sofortige Übersetzung in Wortschwall, Pointe und Selbstanalyse.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und die Flucht nach vorn ins nächste Projekt:</strong>
        Statt bei einem einzelnen Gesundheitsschrecken innezuhalten, trieb der
        Siebenerflügel Allen immer weiter zum nächsten Film, zum nächsten Klarinettenabend
        – Arbeit als Bewegung gegen den Stillstand, den die Sechs am meisten fürchtet.</p>
        <p class="vb-intro"><strong>c) Verstehen als Beruhigungsstrategie:</strong>
        Die über 35 Jahre fortgesetzte Psychoanalyse zeigt die typische SE6-Haltung: Die
        eigene Angst wird nicht bekämpft, sondern systematisch kartiert und in Worte
        gefasst – Verstehen als Weg, mit ihr weiterzuleben, statt sie loszuwerden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Angst, die zum Lebenswerk wurde:</strong>
        Für Allen war die eigene Gesundheitsangst nie ein Randphänomen, sondern von Beginn
        an das eigentliche Material seiner Kunst – ein Leben lang blieb sie sichtbar,
        nie verborgen, immer wieder neu in Sprache übersetzt.</p>
        <p class="vb-intro"><strong>b) Eine verwandte, aber andere Ausprägung als bei Kant und Freud:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-immanuel-kant">Immanuel
        Kant</a> und <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">Sigmund
        Freud</a> (beide SO6w5) litten ebenfalls unter ausgeprägter, jahrzehntelanger
        Gesundheitsangst – doch als soziale Sechser suchten beide Sicherheit durch strenge,
        selbst entworfene Systeme und Routinen, die sie kaum öffentlich zur Schau stellten.
        Allens selbsterhaltende Sechs mit Siebenerflügel zeigt dieselbe Grundangst in einer
        anderen Übersetzung: nicht verborgene Selbstkontrolle, sondern öffentlich
        ausgestellte, komödiantisch verarbeitete Offenheit. Dieselbe Wurzel – die
        Sechser-Angst vor dem eigenen Körper –, zwei sehr unterschiedliche Instinkt-Antworten
        darauf.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der eigene Körper?</strong>
        Für eine selbsterhaltende Sechs, deren gesamte Sicherheit auf der sorgfältigen
        Kontrolle des eigenen, nächsten Umfelds beruht, liegt eine Deutung nahe: Der eigene
        Körper ist das unmittelbarste, am wenigsten kontrollierbare Territorium überhaupt –
        jedes noch so kleine Anzeichen einer Störung bedroht genau jene Sicherheit, auf die
        sich der Selbsterhaltungsinstinkt am stärksten konzentriert. Diese Deutung ist eine
        plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sechs zwangsläufig zu
        ausgeprägter Hypochondrie führt – <strong>jeder Mensch kann jedes psychische oder
        körperliche Muster entwickeln, unabhängig vom Subtyp.</strong> Was sich an Allens
        Fall zeigen lässt, ist ein Muster im Umgang mit Gesundheitsangst, das bei einer
        ausgeprägten selbsterhaltenden Sechs mit Siebenerflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Allen kennt sein eigenes Muster nicht als Enneagramm-Struktur – die
        selbsterhaltende Sechs mit Siebenerflügel übersetzt reflexhaft jede Bedrohung des
        eigenen Körpers in Sprache und Bewegung, statt sie je zur Ruhe kommen zu lassen, und
        genau dieses Muster lebt er seit über sechs Jahrzehnten praktisch unverändert aus. Wer
        die eigene Neigung, Angst sofort in Wortschwall und Arbeit zu verwandeln, nicht als
        Muster erkennt, kann auch mit über neunzig Jahren nicht innehalten, um sie einfach
        auszuhalten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sechs mit Siebenerflügel erklärt bei <strong>Woody Allen</strong>
        vieles am Umgang mit der eigenen Gesundheitsangst: ein Mann, dessen gesamtes Werk
        auf der Übersetzung von Angst in Sprache beruht, macht aus jedem noch so kleinen
        Symptom Material statt Stillstand – das Kaninchen, das nie aufhört, wachsam zu sein,
        aber gelernt hat, aus der eigenen Wachsamkeit seit sechs Jahrzehnten Kunst zu machen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-woody-allen", label:"Porträt: Woody Allen (SE6w7) – das Kaninchen"},
        {route:"krankheitsportraets-immanuel-kant", label:"Krankheitsporträt: Immanuel Kant (SO6w5) – verwandte Hypochondrie, andere Instinktantwort"},
        {route:"krankheitsportraets-sigmund-freud", label:"Krankheitsporträt: Sigmund Freud (SO6w5)"},
        {route:"krankheitsportraets-neil-armstrong", label:"Krankheitsporträt: Neil Armstrong (SE6w5) – gleicher Kerntyp, entgegengesetzter Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se6", label:"Subtyp-Profil SE6"},
      ])}
    </div>
  `);
}

function fritzPerlsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-fritz-perls-portrait.jpg" alt="Fritz Perls" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Fritz Perls</p>
        <p class="krim-portrait-typ">SO8w7 · Sozialer Typ 8 mit Siebenerflügel · 1893–1970</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Löwe</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Tierentsprechung: Löwe" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Fritz Perls</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-fritz-perls">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Rolle als Mitbegründer der
        Gestalttherapie. Diese Seite vertieft ein Kapitel, das dort kurz berührt wird: ein
        über Jahre bestehendes Herzleiden, jahrzehntelanges Kettenrauchen und schließlich
        eine Bauchspeicheldrüsenkrebs-Operation, an deren Folgen er 1970 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Perls</strong> ist dem <strong>sozialen Typ 8 mit Siebenerflügel</strong>
        zugeordnet. Die SO8 setzt ihre Kraft offen für den Aufbau und Schutz einer
        Gemeinschaft ein; der Siebenerflügel bringt einen rastlosen Hunger nach voller,
        ungebremster Lebenserfahrung hinzu. Genau diese Kombination – Kraft, die keine
        Schwäche zulässt, gepaart mit dem Siebener-Drang, ständig in Bewegung zu bleiben –
        bestimmte auch, wie Perls mit seinem eigenen, jahrelangen Herzleiden umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Kettenraucher seit dem Krieg:</strong>
        Perls hatte bereits als Achtjähriger seine erste Zigarette geraucht und wurde nach
        eigenen und fremden Schilderungen infolge seiner Erfahrungen im Ersten Weltkrieg
        zum lebenslangen Kettenraucher.</p>
        <p class="vb-intro"><strong>b) Eine Herzschädigung durch eine frühere Operation:</strong>
        Eine Verletzung im Halsbereich im Zusammenhang mit einer Narkose führte über die
        Jahre zu einer bleibenden Herzschwäche, die Perls fortan begleitete.</p>
        <p class="vb-intro"><strong>c) Zunächst kompensierte körperliche Leistungsfähigkeit:</strong>
        Trotz der Herzschädigung blieb Perls über weite Strecken körperlich aktiv – er
        konnte weiterhin gehen, reisen und an anspruchsvollen Workshops teilnehmen, ohne
        dass die Erkrankung sein Leben sichtbar einschränkte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unvermindertes Reisen zwischen Kontinenten:</strong>
        Auch mit dem bekannten Herzleiden im Hintergrund setzte Perls sein rastloses Leben
        zwischen Europa, Südafrika und den USA sowie später zwischen New York, Esalen und
        Kanada praktisch unverändert fort.</p>
        <p class="vb-intro"><strong>b) Keine öffentliche Thematisierung der eigenen Krankheit:</strong>
        In seinen Workshops und öffentlichen Auftritten spielte die eigene gesundheitliche
        Verletzlichkeit keine erkennbare Rolle – Perls blieb bis zuletzt die konfrontative,
        körperlich präsente Figur, die er immer gewesen war.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes Rauchen trotz Herzleiden:</strong>
        Berichten zufolge gab Perls das Rauchen trotz seiner bekannten Herzproblematik nie
        vollständig auf – ein Muster, das seine körperliche Verfassung zusätzlich belastete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Gründung eines neuen Projekts kurz vor dem Tod:</strong>
        Noch 1969/1970 gründete Perls ein Gestalt-Kibbutz-Projekt in Kanada – ein neues
        Gemeinschaftsprojekt, begonnen, während seine körperliche Verfassung bereits
        angeschlagen war.</p>
        <p class="vb-intro"><strong>b) Diagnose einer Bauchspeicheldrüsenkrebserkrankung:</strong>
        In seinen letzten Lebensmonaten kam zur bestehenden Herzschwäche eine
        Bauchspeicheldrüsenkrebsdiagnose hinzu, die eine Operation erforderlich machte.</p>
        <p class="vb-intro"><strong>c) Operation im Louis A. Weiss Memorial Hospital in Chicago:</strong>
        Perls unterzog sich der Krebsoperation in Chicago; sein Herz hielt der Belastung
        durch den Eingriff nicht stand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 14. März 1970 in Chicago:</strong>
        Perls starb kurz nach der Operation an akutem Herzversagen – die jahrelang
        kompensierte Herzschwäche gab dem zusätzlichen operativen Stress schließlich nach.</p>
        <p class="vb-intro"><strong>b) Eine der Legende nach typisch schroffe letzte Reaktion:</strong>
        Berichten zufolge blieb Perls auch im Sterben seiner konfrontativen, unmittelbaren
        Art treu und reagierte selbst in den letzten Momenten nicht ausweichend, sondern
        direkt.</p>
        <p class="vb-intro"><strong>c) Keine erkennbare Zäsur im öffentlichen Wirken zuvor:</strong>
        Bis in die letzten Monate vor der Operation setzte Perls seine Reise- und
        Vortragstätigkeit unvermindert fort – es gibt keine Hinweise auf einen bewussten
        Rückzug aus gesundheitlichen Gründen vor der akuten Krebsdiagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kraft, die keine Schwäche zeigen darf:</strong>
        Dieselbe SO8-Überzeugung, dass Stärke offen gezeigt werden muss, statt sich zu
        verbergen, bestimmte auch Perls' Umgang mit seinem eigenen Herzleiden – keine
        öffentliche Verwundbarkeit, sondern unveränderte körperliche Präsenz bis kurz vor
        dem Tod.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und die Weigerung, das Tempo zu drosseln:</strong>
        Der rastlose Hunger nach neuer Erfahrung, der Perls' gesamtes Leben trug, ließ ihn
        selbst mit bekannter Herzschwäche keine ruhigere Gangart einschlagen – noch kurz
        vor seinem Tod gründete er ein neues Gemeinschaftsprojekt, statt kürzerzutreten.</p>
        <p class="vb-intro"><strong>c) Kettenrauchen als körperlicher Ausdruck der Siebener-Unruhe:</strong>
        Das fortgesetzte Rauchen trotz bekannter Herzproblematik lässt sich als Ausdruck
        derselben ungebremsten Siebener-Energie lesen, die auch seinen therapeutischen Stil
        prägte – Genuss und Intensität, ohne Rücksicht auf spätere Konsequenzen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Herz, das nie öffentlich als schwach galt:</strong>
        Perls' gesamtes therapeutisches Auftreten beruhte auf unmittelbarer, körperlicher
        Präsenz und der Weigerung, Ausflüchte oder Schwäche zu akzeptieren – ausgerechnet
        sein eigenes Herz, das genau diese Präsenz trug, wurde über Jahre stillschweigend
        zur Belastung, ohne dass er dies je zum Thema machte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-john-gotti">John Gotti</a>
        (ebenfalls SO8w7) ließ sich 1998 in Isolationshaft mit Kehlkopfkrebs diagnostizieren,
        ohne je ein öffentliches Eingeständnis von Schwäche zuzulassen; Perls reagierte auf
        sein eigenes, weit länger bestehendes Herzleiden mit derselben Grundhaltung – keine
        sichtbare Verletzlichkeit, keine Reduzierung des eigenen Tempos. Beide Fälle zeigen
        dasselbe SO8w7-Muster: Die Acht mit Siebenerflügel lässt sich die eigene Stärke
        durch eine fortschreitende Erkrankung nicht nehmen, bis der Körper selbst die
        Grenze setzt. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-john-gotti">Krankheitsporträt zu John Gotti</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Herz?</strong>
        Für einen sozialen Achter mit Siebenerflügel, dessen gesamte Wirkung auf offener,
        ungefilterter Kraft und Präsenz beruhte, liegt eine Deutung nahe: Ausgerechnet jenes
        Organ, das im übertragenen Sinn für Kraft, Mut und Lebendigkeit steht, wurde zum
        Ort der stillen, über Jahre verschwiegenen Schwäche. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird
        im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Acht zwangsläufig zu einem Herzleiden
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Perls' Fall zeigen lässt, ist ein Muster im Umgang mit
        chronischer körperlicher Belastung, das bei einer ausgeprägten sozialen Acht mit
        Siebenerflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Perls kannte sein eigenes Muster nicht – die soziale Acht mit Siebenerflügel
        verwechselt reflexhaft das Verbergen der eigenen Verwundbarkeit mit Stärke, statt
        die eigene körperliche Grenze je anzuerkennen, und genau dieses Muster lebte er bis
        zu seinem Tod unverändert aus. Wer die eigene Unverwundbarkeits-Fixierung nicht als
        Muster erkennt, verwechselt Verbergen mit Stärke, bis der Körper die Rechnung
        präsentiert.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Acht mit Siebenerflügel erklärt bei <strong>Fritz Perls</strong> vieles
        am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Wirkung auf offener,
        ungefilterter Kraft beruhte, verbarg sein eigenes, jahrelanges Herzleiden bis
        zuletzt – der Löwe, der bis zur letzten Konfrontation nicht rastete, auch als sein
        eigenes Herz längst um Ruhe bat.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-fritz-perls", label:"Porträt: Fritz Perls (SO8w7) – Mitbegründer der Gestalttherapie"},
        {route:"krankheitsportraets-john-gotti", label:"Krankheitsporträt: John Gotti (SO8w7) – dieselbe Weigerung, Schwäche zuzugeben"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so8", label:"Subtyp-Profil SO8"},
      ])}
    </div>
  `);
}

function julianAssangeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-julian-assange-portrait.jpg" alt="Julian Assange" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Julian Assange</p>
        <p class="krim-portrait-typ">SO9w1 · Sozialer Typ 9 mit Einserflügel · geb. 1971</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Büffel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Tierentsprechung: Büffel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Julian Assange</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-julian-assange">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Gründung von WikiLeaks und den
        Kampf um radikale Transparenz. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: über sieben Jahre nahezu vollständiger Isolation in der
        ecuadorianischen Botschaft in London, gefolgt von weiteren fünf Jahren in
        britischer Hochsicherheitshaft – mit ausführlich dokumentierten körperlichen und
        psychischen Folgen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Assange</strong> ist dem <strong>sozialen Typ 9 mit Einserflügel</strong>
        zugeordnet. Die SO9 verschmilzt vollständig mit einer Idee, die größer ist als die
        eigene Person; der Einserflügel bringt einen unbeirrbaren moralischen Kompass hinzu,
        der keine Kompromisse duldet. Genau diese Kombination – das Festhalten an einem
        Prinzip, komme was wolle – bestimmte auch, wie lange Assange die eigene Isolation
        ertrug, bevor die gesundheitlichen Folgen unübersehbar wurden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Zuflucht in der Botschaft ab Juni 2012:</strong>
        Assange suchte im Juni 2012 Zuflucht in der ecuadorianischen Botschaft in London,
        um einer Auslieferung nach Schweden zu entgehen – ohne zu wissen, dass daraus fast
        sieben Jahre nahezu vollständiger Isolation werden sollten.</p>
        <p class="vb-intro"><strong>b) Kein Zugang zu Tageslicht oder Außenbereich über Jahre:</strong>
        Nach Angaben behandelnder Ärzte hatte Assange über fünfeinhalb Jahre hinweg keinen
        Zugang zu direktem Sonnenlicht, angemessener Belüftung oder Außenraum – auf rund 30
        Quadratmetern nutzbarer Wohnfläche.</p>
        <p class="vb-intro"><strong>c) Erste dokumentierte psychische Belastungssymptome:</strong>
        Bereits während der Botschaftsjahre dokumentierten behandelnde Ärzte schwere Angst,
        pathologisches Stresslevel, Dissoziation und depressive Symptome.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Neuropsychologische Beeinträchtigungen:</strong>
        Medizinische Untersuchungen dokumentierten neuropsychologische Beeinträchtigungen,
        geschwächte Knochen, verminderte Immunfunktion sowie ein erhöhtes Risiko für
        Herz-Kreislauf-Erkrankungen und Krebs.</p>
        <p class="vb-intro"><strong>b) Chronische Schmerzen und posttraumatische Belastung:</strong>
        Zu den dokumentierten Symptomen zählten außerdem chronische Schmerzen sowie eine
        posttraumatische Belastungsstörung, verbunden mit suizidalen Gedanken in
        besonders schweren Phasen.</p>
        <p class="vb-intro"><strong>c) Verweigerter oder erschwerter Zugang zu medizinischer Versorgung:</strong>
        Über 60 Ärztinnen und Ärzte wandten sich in einem offenen Brief an das britische
        Innenministerium und dokumentierten eine über Jahre wiederholte Verweigerung
        angemessener medizinischer Versorgung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Verhaftung und Verlegung nach Belmarsh 2019:</strong>
        Nach dem Entzug des Botschaftsasyls im April 2019 wurde Assange verhaftet und in
        das britische Hochsicherheitsgefängnis Belmarsh verlegt, wo er bis zu seiner
        Freilassung 2024 blieb.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte ärztliche Warnungen während der Haft:</strong>
        Auch während der Haft in Belmarsh warnten untersuchende Ärztinnen und Ärzte
        wiederholt vor einem „gefährlichen" Gesundheitszustand und einer sich weiter
        verschlechternden Verfassung.</p>
        <p class="vb-intro"><strong>c) Freilassung nach Schuldeingeständnis im Juni 2024:</strong>
        Nach über zwölf Jahren zwischen Botschaftsasyl und Haft bekannte sich Assange im
        Juni 2024 in einem Deal mit US-Behörden in einem Anklagepunkt schuldig und kam
        frei – er kehrte anschließend nach Australien zurück.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Internationale medizinische und juristische Aufmerksamkeit:</strong>
        Fachzeitschriften wie The Lancet und zahlreiche Ärzteverbände thematisierten
        öffentlich die gesundheitlichen Folgen der Isolationshaft – ein seltener Fall, in
        dem ein Einzelschicksal zum Gegenstand medizinischer Fachdebatten wurde.</p>
        <p class="vb-intro"><strong>b) Symbolfigur über die eigene Person hinaus:</strong>
        Assanges gesundheitlicher Verfall wurde zum zentralen Argument in der öffentlichen
        Debatte um Pressefreiheit und die Grenzen staatlicher Verfolgung investigativer
        Journalisten.</p>
        <p class="vb-intro"><strong>c) Kein vollständiger Rückzug von der eigenen Sache:</strong>
        Trotz der dokumentierten gesundheitlichen Folgen distanzierte sich Assange zu
        keinem Zeitpunkt öffentlich von den Grundüberzeugungen, die zu seiner Isolation
        geführt hatten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verschmelzung mit der Idee bis zur Selbstaufgabe:</strong>
        Dieselbe SO9-Neigung, sich vollständig mit einer größeren Sache zu verschmelzen,
        die Assanges gesamtes Engagement für WikiLeaks trug, bestimmte auch, wie lange er
        die eigene Isolation ertrug, bevor die körperlichen Warnsignale unübersehbar
        wurden.</p>
        <p class="vb-intro"><strong>b) Der Einserflügel und das Festhalten am Prinzip trotz Kosten:</strong>
        Die unbeirrbare Prinzipientreue des Einserflügels erklärt, warum Assange über
        Jahre keinen Kompromiss einging, der seine Freiheit früher hätte sichern können –
        das Prinzip wog schwerer als die eigene körperliche Verfassung.</p>
        <p class="vb-intro"><strong>c) Trägheit als Schutzmuster, das zur Falle wurde:</strong>
        Die für die Neun typische Tendenz, unangenehme Realitäten auszublenden statt aktiv
        gegenzusteuern, könnte mit erklären, warum die gesundheitlichen Warnzeichen über
        Jahre nicht zu einem früheren, geordneten Rückzug aus der Situation führten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Selbst, das sich vollständig einer Sache unterordnete:</strong>
        Assanges gesamte Identität war seit der Gründung von WikiLeaks untrennbar mit der
        Idee radikaler Transparenz verwoben – die jahrelange Isolation traf ausgerechnet
        jenes Selbst, das sich nie als eigenständig von dieser Mission verstanden hatte,
        und ließ es fast bis zum Zerbrechen kommen.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet Isolation und Bewegungsentzug?</strong>
        Für einen sozialen Neuner mit Einserflügel, dessen gesamte Identität auf
        Zugehörigkeit zu einer größeren Sache beruht, liegt eine Deutung nahe: Ausgerechnet
        der vollständige Entzug von Außenkontakt und Bewegungsfreiheit bedrohte genau jene
        Fähigkeit zur Verschmelzung mit einer Gemeinschaft, aus der die SO9 ihre Identität
        bezieht – ein erzwungener Rückwurf auf ein Selbst, das kaum je unabhängig von einer
        größeren Sache existiert hatte. Diese Deutung ist eine plausible Interpretation,
        kein belegter klinischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Neun zwangsläufig zu Isolationsfolgen
        führt – <strong>jeder Mensch kann jede Krankheit oder gesundheitliche Folge
        erleiden, unabhängig vom Subtyp.</strong> Was sich an Assanges Fall zeigen lässt,
        ist ein Muster im Umgang mit erzwungener Isolation, das bei einer ausgeprägten
        sozialen Neun mit Einserflügel immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass
        nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Assange kennt sein eigenes Muster nicht als Enneagramm-Struktur – die soziale Neun
        mit Einserflügel verschmilzt reflexhaft mit der eigenen Sache, statt die eigene
        körperliche Warnung je als Grund zum Rückzug anzuerkennen, und genau dieses Muster
        lebte er über mehr als ein Jahrzehnt praktisch unverändert aus. Wer die eigene
        Neigung, sich vollständig in einer Mission aufzulösen, nicht als Muster erkennt,
        kann auch angesichts eindeutiger körperlicher Warnzeichen nicht rechtzeitig
        gegensteuern.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Neun mit Einserflügel erklärt bei <strong>Julian Assange</strong> vieles
        am Verlauf seiner eigenen gesundheitlichen Krise: ein Mann, dessen gesamte
        Identität mit einer Idee verschmolz, die größer war als er selbst, ließ sich von
        Jahren dokumentierter körperlicher und psychischer Belastung nicht von seinem
        Prinzip abbringen – der Büffel, der den Kopf senkt und weitergeht, auch wenn der
        eigene Körper längst zu wanken begonnen hat.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-julian-assange", label:"Porträt: Julian Assange (SO9w1) – Gründer von WikiLeaks"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so9", label:"Subtyp-Profil SO9"},
      ])}
    </div>
  `);
}

function morganFreemanKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-morgan-freeman-portrait.jpg" alt="Morgan Freeman" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Morgan Freeman</p>
        <p class="krim-portrait-typ">SX7w6 · Sexueller Typ 7 mit Sechserflügel · geb. 1937</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Morgan Freeman</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-morgan-freeman">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: Ein schwerer Autounfall 2008 hinterließ eine Fibromyalgie mit
        chronischen Nervenschmerzen im linken Arm – ein Zustand, mit dem Freeman seither
        öffentlich sichtbar lebt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Freeman</strong> ist dem <strong>sexuellen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SX7 sucht Intensität in unmittelbarer, persönlicher Bindung; der
        Sechserflügel bringt Loyalität und die Fähigkeit, mit Rückschlägen ruhig
        umzugehen. Genau diese Kombination – ungebremstes Weiterarbeiten, verbunden mit
        stiller Loyalität gegenüber dem eigenen Handwerk – bestimmte, wie Freeman auf die
        chronischen Schmerzen reagierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Autounfall 2008:</strong>
        Freemans Wagen überschlug sich auf einer Landstraße nahe seinem Wohnsitz im
        Mississippi-Delta; er und seine Beifahrerin wurden schwer verletzt.</p>
        <p class="vb-intro"><strong>b) Operation an der linken Hand:</strong>
        Die Verletzungen machten eine Operation an der linken Hand notwendig, verbunden
        mit bleibenden Nervenschäden.</p>
        <p class="vb-intro"><strong>c) Diagnose Fibromyalgie in der Folgezeit:</strong>
        In den Monaten nach dem Unfall wurde bei Freeman Fibromyalgie diagnostiziert –
        eine chronische Schmerzerkrankung, die sich vor allem im linken Arm zeigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Kompressionshandschuh als ständiger Begleiter:</strong>
        Seither trägt Freeman bei öffentlichen Auftritten regelmäßig einen
        Kompressionshandschuh an der linken Hand – medizinisch notwendig, nicht modisch.</p>
        <p class="vb-intro"><strong>b) Offene Beschreibung der Schmerzen:</strong>
        In einem viel zitierten Interview beschrieb Freeman den Schmerz als
        "unerträglich", der "den Arm hoch und runter" schieße.</p>
        <p class="vb-intro"><strong>c) Unveränderte Schauspielkarriere:</strong>
        Trotz der Diagnose drehte Freeman in den folgenden Jahren weiterhin zahlreiche
        Filme, ohne die eigene Arbeitslast erkennbar zu reduzieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentliche Normalisierung statt Verheimlichung:</strong>
        Freeman sprach wiederholt offen über die Fibromyalgie, statt sie zu verbergen –
        ein für Prominente seiner Generation eher untypischer Umgang mit chronischem
        Schmerz.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte körperlich anspruchsvolle Rollen:</strong>
        Auch nach der Diagnose übernahm Freeman weiterhin Rollen, die körperliche
        Präsenz und lange Drehzeiten erforderten.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug aus der Öffentlichkeit:</strong>
        Freeman blieb medial sichtbar, gab weiterhin Interviews und nahm öffentliche
        Auszeichnungen entgegen, den sichtbaren Handschuh stets Teil des Bildes.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Symbol, das zur Marke wurde:</strong>
        Der Handschuh wurde in Medienberichten wiederholt zum sichtbaren Erkennungszeichen
        – ein stilles, aber unübersehbares Zeugnis der eigenen Verletzlichkeit.</p>
        <p class="vb-intro"><strong>b) Aufmerksamkeit für eine oft unsichtbare Krankheit:</strong>
        Freemans Offenheit trug dazu bei, Fibromyalgie – eine Erkrankung, die von außen
        oft nicht erkennbar ist – einem breiten Publikum bekannter zu machen.</p>
        <p class="vb-intro"><strong>c) Keine erkennbare Zäsur in der Karriere:</strong>
        Freemans Filmografie zeigt auch nach 2008 keinen erkennbaren Bruch in Umfang oder
        Anspruch der übernommenen Rollen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Intensität, die sich nicht bremsen lässt:</strong>
        Dieselbe SX7-Energie, die nach unmittelbarer, ungefilterter Erfahrung sucht,
        bestimmte auch Freemans Reaktion auf den chronischen Schmerz – Weiterarbeiten
        statt Rückzug.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die stille Loyalität zum eigenen Handwerk:</strong>
        Die Loyalität des Sechserflügels zeigte sich darin, dass Freeman seinem Beruf und
        seinem Publikum treu blieb, statt sich aus gesundheitlichen Gründen zurückzuziehen.</p>
        <p class="vb-intro"><strong>c) Offenheit als eigene Form der Intensität:</strong>
        Statt den Schmerz zu verstecken, machte Freeman ihn zum Teil seiner öffentlichen
        Präsenz – auch das eine Form ungefilterter, direkter Erfahrung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Hand, die zum Werkzeug und zur Wunde wurde:</strong>
        Für einen Schauspieler, dessen Präsenz auch auf Gestik und Körpersprache beruht,
        traf die Verletzung ausgerechnet jenes Werkzeug, mit dem er seine Rollen körperlich
        auslebt.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Leonard
        Bernstein</a> (ebenfalls SX7w6) rauchte trotz eines fortschreitenden
        Lungenemphysems bis kurz vor seinem Tod weiter und dirigierte fast bis zuletzt;
        Freeman reagierte auf seine eigene chronische Erkrankung mit derselben
        Grundhaltung – keine Reduzierung des eigenen Tempos, sondern Weiterarbeiten trotz
        spürbarer körperlicher Grenze. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Krankheitsporträt zu Leonard Bernstein</a>.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu chronischen
        Schmerzerkrankungen führt – <strong>jeder Mensch kann jede Krankheit oder
        Verletzung erleiden, unabhängig vom Subtyp.</strong> Was sich an Freemans Fall
        zeigen lässt, ist ein Muster im Umgang mit chronischem Schmerz, das bei einer
        ausgeprägten sexuellen Sieben mit Sechserflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Freeman kennt sein eigenes Muster nicht als Enneagramm-Struktur – die sexuelle
        Sieben mit Sechserflügel sucht reflexhaft die volle, ungefilterte Erfahrung, statt
        chronischen Schmerz je zum Anlass für ein langsameres Tempo zu nehmen, und lebt
        genau dieses Muster seit über anderthalb Jahrzehnten unverändert aus. Wer die
        eigene Intensitätssuche nicht als Muster erkennt, kann auch angesichts
        chronischer Schmerzen nicht innehalten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Sieben mit Sechserflügel erklärt bei <strong>Morgan Freeman</strong>
        vieles am Umgang mit der eigenen Fibromyalgie: ein Mann, dessen gesamte Präsenz auf
        unmittelbarer Intensität beruht, macht aus dem sichtbaren Kompressionshandschuh
        kein Geheimnis – der Schimpanse, der weiter durchs Geäst klettert, auch mit einem
        schmerzenden Arm.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-morgan-freeman", label:"Porträt: Morgan Freeman (SX7w6)"},
        {route:"krankheitsportraets-leonard-bernstein", label:"Krankheitsporträt: Leonard Bernstein (SX7w6) – dasselbe Muster ungebremsten Weiterarbeitens"},
        {route:"krankheitsportraets-frans-de-waal", label:"Krankheitsporträt: Frans de Waal (SX7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

function junkoTabeiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-junko-tabei-portrait.jpg" alt="Junko Tabei" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Junko Tabei</p>
        <p class="krim-portrait-typ">SE7w6 · Selbsterhaltende Typ 7 mit Sechserflügel · 1939–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Junko Tabei</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-junko-tabei">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihre Besteigung des Mount Everest
        1975 als erste Frau überhaupt. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: eine 2012 diagnostizierte Bauchfellkrebserkrankung, mit der sie
        bis zu ihrem Tod 2016 weiter Berge bestieg.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Tabei</strong> ist dem <strong>selbsterhaltenden Typ 7 mit
        Sechserflügel</strong> zugeordnet. Die SE7 sichert sich Vorräte an Erfahrung und
        Möglichkeiten für den Ernstfall; der Sechserflügel bringt Loyalität und
        Pflichtgefühl gegenüber einer größeren Aufgabe hinzu. Genau diese Kombination –
        praktische, unerschütterliche Weiterarbeit trotz Bedrohung – bestimmte, wie Tabei
        mit ihrer eigenen Krebserkrankung umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose Bauchfellkrebs 2012:</strong>
        Im Alter von 73 Jahren erhielt Tabei die Diagnose eines fortgeschrittenen
        Bauchfellkrebses – einer seltenen und oft schwer behandelbaren Krebsform.</p>
        <p class="vb-intro"><strong>b) Keine öffentliche Ankündigung eines Rückzugs:</strong>
        Trotz der ernsten Diagnose gab es keine Ankündigung, die eigene Bergsteigertätigkeit
        einzustellen.</p>
        <p class="vb-intro"><strong>c) Fortsetzung der Jugendprojekte nach Fukushima:</strong>
        Tabei setzte ihr Engagement für junge Menschen aus den vom Erdbeben und der
        Atomkatastrophe 2011 betroffenen Regionen fort, denen sie gemeinsame
        Bergbesteigungen ermöglichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Weitere Gipfelbesteigungen bis 2015:</strong>
        Nach der Diagnose bestieg Tabei noch Berge in Niger, Luxemburg, Belgien und Oman –
        Länder, deren jeweils höchste Erhebung sie noch erreichen wollte.</p>
        <p class="vb-intro"><strong>b) Über 150 bestiegene Berge in 76 Ländern insgesamt:</strong>
        Über ihr gesamtes Leben hinweg bestieg Tabei mehr als 150 Berge in 76 Ländern –
        eine Zahl, die sich auch nach der Diagnose weiter erhöhte.</p>
        <p class="vb-intro"><strong>c) Vierjähriger Krankheitsverlauf:</strong>
        Zwischen Diagnose 2012 und Tod 2016 lagen vier Jahre, in denen Tabei sowohl
        behandelt wurde als auch aktiv blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentliches Auftreten trotz Erkrankung:</strong>
        Tabei nahm weiterhin an Vorträgen und öffentlichen Terminen teil, ohne die eigene
        Diagnose in den Mittelpunkt zu stellen.</p>
        <p class="vb-intro"><strong>b) Praktische statt dramatisierende Kommunikation:</strong>
        Berichte über ihre letzten Lebensjahre beschreiben einen sachlichen, unaufgeregten
        Umgang mit der eigenen Erkrankung, passend zu ihrem insgesamt pragmatischen Naturell.</p>
        <p class="vb-intro"><strong>c) Tod im Oktober 2016:</strong>
        Tabei starb im Alter von 77 Jahren, vier Jahre nach der Diagnose, nachdem sie bis
        kurz zuvor aktiv geblieben war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Vermächtnis, das die Krankheit nicht dominierte:</strong>
        Tabeis öffentliches Bild blieb bis zum Tod von ihrer Pionierleistung als
        Bergsteigerin geprägt, nicht von der Krebserkrankung.</p>
        <p class="vb-intro"><strong>b) Vorbildwirkung über den eigenen Tod hinaus:</strong>
        Ihr Umgang mit der Diagnose wurde in Nachrufen wiederholt als Beispiel für
        ungebrochene Tatkraft im Angesicht schwerer Krankheit gewürdigt.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes Engagement bis zuletzt:</strong>
        Ihre Arbeit mit jungen Menschen aus den Katastrophenregionen setzte sie bis kurz
        vor ihrem Tod fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Vorräte an Erfahrung, die bis zuletzt gesammelt wurden:</strong>
        Dieselbe SE7-Logik, sich Erfahrungen und Möglichkeiten als Absicherung
        anzueignen, bestimmte auch Tabeis Reaktion auf die Krebsdiagnose – weiterhin
        Gipfel sammeln, statt sich zurückzuziehen.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die Pflicht gegenüber der jungen Generation:</strong>
        Die Loyalität des Sechserflügels zeigte sich in der fortgesetzten Arbeit mit
        jungen Menschen aus Fukushima – eine Verpflichtung, die auch die eigene Krankheit
        nicht aufhielt.</p>
        <p class="vb-intro"><strong>c) Praktische Nüchternheit statt dramatischer Inszenierung:</strong>
        Tabeis sachlicher Umgang mit der eigenen Diagnose passt zur SE7-typischen
        Neigung, Bedrohungen praktisch zu handhaben, statt sie zum großen öffentlichen
        Thema zu machen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der weiter erklomm, was er sich vorgenommen hatte:</strong>
        Tabeis gesamtes Leben war von der praktischen Überzeugung geprägt, dass Ziele
        erreicht werden, solange der Körper es zulässt – die Krebsdiagnose änderte diese
        Grundhaltung nicht, sie verkürzte nur den verbleibenden Zeitraum.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-larry-king">Larry
        King</a> (ebenfalls SE7w6) moderierte trotz zahlreicher eigener
        Gesundheitskrisen jahrzehntelang weiter, ohne sein Arbeitspensum grundlegend zu
        reduzieren; Tabei reagierte auf ihre eigene Krebsdiagnose mit derselben
        Grundhaltung – praktisches Weitermachen statt Rückzug. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-larry-king">Krankheitsporträt zu Larry King</a>.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sieben zwangsläufig zu
        Krebserkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Tabeis Fall zeigen lässt, ist ein
        Muster im Umgang mit einer schweren Diagnose, das bei einer ausgeprägten
        selbsterhaltenden Sieben mit Sechserflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Tabei kannte ihr eigenes Muster nicht – die selbsterhaltende Sieben mit
        Sechserflügel sammelt reflexhaft weiter Erfahrungen und erfüllt übernommene
        Verpflichtungen, statt eine schwere Diagnose je zum Anlass für einen geordneten
        Rückzug zu nehmen, und genau dieses Muster lebte sie bis zu ihrem Tod unverändert
        aus. Wer die eigene Neigung, weiterzumachen, nicht als Muster erkennt, kann auch
        angesichts einer Krebsdiagnose nicht innehalten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sieben mit Sechserflügel erklärt bei <strong>Junko
        Tabei</strong> vieles am Verlauf ihrer eigenen Erkrankung: eine Frau, deren
        gesamtes Leben auf praktischer Zielverfolgung beruhte, ließ sich selbst von einer
        Krebsdiagnose nicht vom nächsten Gipfel abhalten – der Gorilla, der weiterklettert,
        solange die Kraft reicht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-junko-tabei", label:"Porträt: Junko Tabei (SE7w6)"},
        {route:"krankheitsportraets-larry-king", label:"Krankheitsporträt: Larry King (SE7w6) – dasselbe praktische Weitermachen"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se7", label:"Subtyp-Profil SE7"},
      ])}
    </div>
  `);
}

function mariahCareyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-mariah-carey-portrait.jpg" alt="Mariah Carey" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mariah Carey</p>
        <p class="krim-portrait-typ">SE7w8 · Selbsterhaltende Typ 7 mit Achterflügel · geb. 1969</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Mariah Carey</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-mariah-carey">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: eine 2001 diagnostizierte bipolare Störung Typ II, die Carey über
        17 Jahre hinweg geheim hielt, bevor sie 2018 öffentlich darüber sprach.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Carey</strong> ist dem <strong>selbsterhaltenden Typ 7 mit
        Achterflügel</strong> zugeordnet. Die SE7 sichert sich praktische Vorräte an
        Möglichkeiten für den Ernstfall; der Achterflügel bringt Durchsetzungskraft und
        die Fähigkeit hinzu, die eigene Verwundbarkeit lange zu kontrollieren. Genau diese
        Kombination – jahrelange, disziplinierte Kontrolle über das eigene öffentliche
        Bild – bestimmte, wie lange Carey ihre Diagnose privat hielt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Zusammenbruch im Juli 2001:</strong>
        Carey erschien am 25. Juli 2001 in manischem Zustand im Haus ihrer Mutter und wurde
        daraufhin in eine Klinik in Westchester County, New York, eingewiesen.</p>
        <p class="vb-intro"><strong>b) Behandlung in mehreren Kliniken:</strong>
        Es folgte ein zwölftägiger Aufenthalt im Silver Hill Hospital in Connecticut,
        Anfang September 2001 eine weitere Einweisung am UCLA Medical Center.</p>
        <p class="vb-intro"><strong>c) Diagnose bipolare Störung Typ II:</strong>
        Im Rahmen dieser Behandlungen wurde bei Carey eine bipolare Störung Typ II
        diagnostiziert – eine Diagnose, die sie zunächst nicht akzeptieren wollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) 17 Jahre öffentliches Schweigen:</strong>
        Carey behielt die Diagnose fast zwei Jahrzehnte für sich, aus Angst, "jemand könnte
        es aufdecken", wie sie später selbst beschrieb.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte künstlerische Produktivität:</strong>
        Trotz der unbehandelten oder nur teilweise behandelten Erkrankung veröffentlichte
        Carey in den folgenden Jahren weiterhin Alben und tourte international.</p>
        <p class="vb-intro"><strong>c) Isolation als beschriebene Begleiterscheinung:</strong>
        Carey beschrieb die Zeit vor ihrer Offenlegung selbst als geprägt von "Verleugnung
        und Isolation".</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentliche Offenlegung im April 2018:</strong>
        In einem Interview mit dem People-Magazin sprach Carey erstmals öffentlich über
        ihre Diagnose und den langen Weg dorthin.</p>
        <p class="vb-intro"><strong>b) Betonung von Behandlung statt Dramatisierung:</strong>
        Carey beschrieb, sie habe sich "positive Menschen" um sich versammelt und sei zur
        Musik zurückgekehrt – ein pragmatischer, lösungsorientierter Ton statt einer
        dramatischen Krankengeschichte.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte Karriere nach der Offenlegung:</strong>
        Auch nach 2018 blieb Carey musikalisch und öffentlich aktiv, ohne sich aus dem
        Rampenlicht zurückzuziehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Breite mediale Resonanz auf die Offenlegung:</strong>
        Careys Interview wurde international aufgegriffen und trug zur öffentlichen
        Enttabuisierung bipolarer Störungen bei.</p>
        <p class="vb-intro"><strong>b) Ein zweigeteiltes öffentliches Bild:</strong>
        Für die Öffentlichkeit blieb Carey über fast zwei Jahrzehnte primär als
        Popikone sichtbar – die psychische Erkrankung dahinter war unsichtbar, bis sie es
        selbst entschied.</p>
        <p class="vb-intro"><strong>c) Kontrolle über den Zeitpunkt der eigenen Geschichte:</strong>
        Carey bestimmte selbst, wann und wie ihre Diagnose öffentlich wurde – kein
        erzwungenes Bekanntwerden durch Dritte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Vorräte an Kontrolle statt sichtbarer Verwundbarkeit:</strong>
        Dieselbe SE7-Logik, sich für den Ernstfall abzusichern, zeigte sich bei Carey als
        jahrelange, sorgfältige Kontrolle darüber, was über die eigene Gesundheit nach
        außen drang.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die lange Verweigerung von Schwäche:</strong>
        Die Durchsetzungskraft des Achterflügels erklärt, warum Carey die Diagnose fast
        zwei Jahrzehnte lang nicht öffentlich zuließ – Kontrolle über das eigene Bild wog
        schwerer als frühe Offenheit.</p>
        <p class="vb-intro"><strong>c) Ein selbstbestimmter Moment der Offenheit:</strong>
        Als Carey sich schließlich öffnete, geschah dies zu einem selbst gewählten
        Zeitpunkt und in einem selbst gewählten Rahmen – Kontrolle blieb auch im Akt der
        Offenlegung erhalten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme, die auch das eigene Innenleben lange verbarg:</strong>
        Careys gesamte öffentliche Karriere beruhte auf makelloser Kontrolle über Stimme
        und Bild – ausgerechnet das eigene, unkontrollierbare Innenleben musste über
        Jahre verborgen bleiben, damit dieses Bild intakt blieb.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-francis-bacon">Francis
        Bacon</a> (ebenfalls SE7w8) verarbeitete sein exzessives, selbstzerstörerisches
        Leben lange, ohne öffentlich über die dahinterliegende Verzweiflung zu sprechen;
        Carey hielt ihre eigene psychische Erkrankung mit derselben Grundhaltung geheim –
        Kontrolle über das öffentliche Bild, bis die eigenen Bedingungen für Offenheit
        erfüllt waren. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-francis-bacon">Krankheitsporträt zu Francis Bacon</a>.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sieben zwangsläufig zu
        bipolaren Störungen führt – <strong>jeder Mensch kann jede psychische Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Careys Fall zeigen lässt,
        ist ein Muster im Umgang mit einer belastenden Diagnose, das bei einer
        ausgeprägten selbsterhaltenden Sieben mit Achterflügel immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Carey kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die
        selbsterhaltende Sieben mit Achterflügel kontrolliert reflexhaft, was von der
        eigenen Verwundbarkeit nach außen dringt, statt sie je früher offenzulegen, und
        lebt genau dieses Muster bis heute in modifizierter Form weiter aus. Wer die
        eigene Neigung, Kontrolle über das eigene Bild zu behalten, nicht als Muster
        erkennt, trägt eine schwere Diagnose entsprechend länger allein.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sieben mit Achterflügel erklärt bei <strong>Mariah
        Carey</strong> vieles am Umgang mit der eigenen Diagnose: eine Frau, deren
        gesamte öffentliche Existenz auf Kontrolle über das eigene Bild beruhte, hielt die
        eigene Verwundbarkeit fast zwei Jahrzehnte unter Kontrolle – der Gorilla, der erst
        dann zeigt, was ihn wirklich bewegt, wenn er selbst dazu bereit ist.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-mariah-carey", label:"Porträt: Mariah Carey (SE7w8)"},
        {route:"krankheitsportraets-francis-bacon", label:"Krankheitsporträt: Francis Bacon (SE7w8) – dasselbe lange Verbergen"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se7", label:"Subtyp-Profil SE7"},
      ])}
    </div>
  `);
}

function christiaanBarnardKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-christiaan-barnard-portrait.jpg" alt="Christiaan Barnard" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Christiaan Barnard</p>
        <p class="krim-portrait-typ">SO3w2 · Sozialer Typ 3 mit Zweierflügel · 1922–2001</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Christiaan Barnard</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-christiaan-barnard">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um die
        erste erfolgreiche Herztransplantation der Geschichte 1967. Diese Seite vertieft
        ein Kapitel, das dort knapp erwähnt wird: eine seit 1956 bestehende rheumatoide
        Arthritis, die 1983 ausgerechnet seine chirurgischen Hände zwang, die Karriere zu
        beenden.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Barnard</strong> ist dem <strong>sozialen Typ 3 mit Zweierflügel</strong>
        zugeordnet. Die SO3 sucht Anerkennung durch herausragende, öffentlich sichtbare
        Leistung; der Zweierflügel bringt Wärme und den Wunsch hinzu, im Dienst anderer zu
        glänzen. Genau diese Kombination – Leistung als Existenzgrundlage – bestimmte, wie
        Barnard mit dem schrittweisen Verlust der eigenen chirurgischen Fähigkeiten umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose während der Facharztausbildung in den USA 1956:</strong>
        Bereits während seiner postgradualen Ausbildung in den USA wurde bei Barnard
        rheumatoide Arthritis diagnostiziert – Jahre bevor er zum weltbekannten
        Herzchirurgen wurde.</p>
        <p class="vb-intro"><strong>b) Zunehmender Befall der Hände:</strong>
        Über die Jahrzehnte griff die Erkrankung zunehmend auf die Hände über – jenes
        Werkzeug, mit dem Barnard 1967 Geschichte schrieb.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte chirurgische Tätigkeit trotz Diagnose:</strong>
        Trotz der bekannten Erkrankung operierte Barnard über Jahrzehnte weiter, auch nach
        seiner weltberühmten ersten Transplantation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Frühzeitiges Ende der chirurgischen Laufbahn 1983:</strong>
        Die rheumatoide Arthritis in den Händen zwang Barnard 1983 zum Ausscheiden als
        Leiter der Abteilung für Herz-Thorax-Chirurgie in Kapstadt.</p>
        <p class="vb-intro"><strong>b) Wechsel in andere Rollen:</strong>
        Nach dem Ende der Operationstätigkeit half Barnard beim Aufbau eines neuen
        Transplantationsinstituts am Baptist Medical Center in Oklahoma City mit.</p>
        <p class="vb-intro"><strong>c) Literarische Verarbeitung der eigenen Krankheit:</strong>
        Barnard verfasste unter anderem das Buch "Christiaan Barnard's Program for Living
        with Arthritis" – die eigene Krankheit wurde zum Gegenstand seines Schreibens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortgesetzte öffentliche Präsenz nach dem Karriereende:</strong>
        Auch nach 1983 blieb Barnard eine international bekannte, gefragte Figur – Vorträge,
        Bücher, mediale Präsenz ersetzten die Operationstätigkeit.</p>
        <p class="vb-intro"><strong>b) Umfangreiches schriftstellerisches Spätwerk:</strong>
        Barnard verfasste in seinen letzten beiden Lebensjahrzehnten eine weitere
        Autobiografie ("The Second Life") sowie zahlreiche Romane und Gesundheitsbücher.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Klage über den Verlust:</strong>
        Berichten zufolge sprach Barnard selten öffentlich über den emotionalen Verlust,
        den das Ende seiner chirurgischen Laufbahn für ihn bedeutete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein zweites öffentliches Leben nach der Chirurgie:</strong>
        Barnard gelang der Übergang von der aktiven Chirurgenkarriere zu einer ebenso
        sichtbaren zweiten Karriere als Autor und Redner.</p>
        <p class="vb-intro"><strong>b) Symbolische Ironie, die international beachtet wurde:</strong>
        Dass ausgerechnet die Hände des ersten Herztransplantations-Chirurgen der Welt
        versagten, wurde in zahlreichen Nachrufen und Biografien als bittere Pointe seines
        Lebens hervorgehoben.</p>
        <p class="vb-intro"><strong>c) Vermächtnis, das über die Chirurgie hinausreicht:</strong>
        Barnards öffentliches Bild blieb auch nach 1983 von Kompetenz und Autorität
        geprägt – nun im Bereich des Schreibens statt des Operierens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Leistung als fortgesetzte Existenzgrundlage:</strong>
        Dieselbe SO3-Überzeugung, dass Wert durch sichtbare Leistung entsteht, bestimmte
        auch Barnards Reaktion auf das erzwungene Karriereende – kein Rückzug, sondern der
        rasche Aufbau einer neuen, ebenso sichtbaren Rolle.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und der Dienst am Patienten in neuer Form:</strong>
        Die Zuwendung des Zweierflügels zeigte sich darin, dass Barnard sein Wissen nun in
        Büchern für Patienten mit derselben Krankheit weitergab, statt sich ganz
        zurückzuziehen.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Verarbeitung des eigenen Verlusts:</strong>
        Die SO3-typische Fokussierung auf das nächste sichtbare Ziel könnte erklären,
        warum Barnard selten öffentlich über die persönliche Trauer um seine
        Chirurgenkarriere sprach.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Hände, die zum Werkzeug des Ruhms und dann der Krankheit wurden:</strong>
        Barnards gesamter Weltruhm beruhte auf der Präzision seiner Hände – ausgerechnet
        diese Hände wurden über Jahrzehnte hinweg zum Ort der fortschreitenden
        Erkrankung, bis sie ihm die Fortsetzung seines Lebenswerks verwehrten.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-ludwig-xiv">Ludwig
        XIV.</a> (ebenfalls SO3w2) litt jahrzehntelang an Gicht, ohne seine öffentliche
        Rolle als Sonnenkönig aufzugeben; Barnard reagierte auf seine eigene chronische
        Erkrankung mit derselben Grundhaltung – die sichtbare, öffentliche Rolle wurde
        nicht aufgegeben, sondern in neuer Form fortgeführt. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-ludwig-xiv">Krankheitsporträt zu Ludwig XIV.</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Hände?</strong>
        Für einen sozialen Dreier mit Zweierflügel, dessen gesamter Ruhm auf der
        Präzision seiner Hände beruhte, liegt eine Deutung nahe: Ausgerechnet jenes
        Werkzeug, das ihm weltweite Anerkennung verschaffte, wurde zum Ort der
        Einschränkung. Diese Deutung ist eine plausible Interpretation, kein belegter
        klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu rheumatoider
        Arthritis führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Barnards Fall zeigen lässt, ist ein Muster im
        Umgang mit dem Verlust der eigenen Leistungsfähigkeit, das bei einer ausgeprägten
        sozialen Drei mit Zweierflügel immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass
        nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Barnard kannte sein eigenes Muster nicht – die soziale Drei mit Zweierflügel
        ersetzt reflexhaft eine verlorene sichtbare Rolle durch eine neue, statt den
        eigenen Verlust je öffentlich zu verarbeiten, und genau dieses Muster lebte er bis
        zu seinem Tod unverändert aus. Wer die eigene Notwendigkeit, sichtbar zu leisten,
        nicht als Muster erkennt, kann den Verlust der eigenen Fähigkeiten nicht wirklich
        betrauern, sondern nur ersetzen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Drei mit Zweierflügel erklärt bei <strong>Christiaan Barnard</strong>
        vieles am Umgang mit der eigenen Erkrankung: ein Mann, dessen Weltruhm auf der
        Präzision seiner Hände beruhte, ersetzte den Verlust dieser Hände durch eine neue
        sichtbare Rolle als Autor – der Gepard, der nicht mehr rennen kann, aber lernt,
        auf andere Weise vorne zu bleiben.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-christiaan-barnard", label:"Porträt: Christiaan Barnard (SO3w2)"},
        {route:"krankheitsportraets-ludwig-xiv", label:"Krankheitsporträt: Ludwig XIV. (SO3w2) – dieselbe fortgeführte öffentliche Rolle"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

function anthonyHopkinsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-anthony-hopkins-portrait.jpg" alt="Anthony Hopkins" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Anthony Hopkins</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · geb. 1937</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Anthony Hopkins</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-anthony-hopkins">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort kurz umrissen wird: eine schwere Alkoholerkrankung, die
        Hopkins 1975 an einen Wendepunkt brachte – seither lebt er, nach eigener Aussage,
        ununterbrochen nüchtern.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hopkins</strong> ist dem <strong>selbsterhaltenden Typ 1 mit
        Neunerflügel</strong> zugeordnet. Die SE1 sucht Sicherheit durch Kontrolle und
        Disziplin; der Neunerflügel bringt Gelassenheit und die Fähigkeit hinzu, einmal
        gefasste Prinzipien geduldig und ohne großes Aufheben durchzuhalten. Genau diese
        Kombination – stille, unbeirrbare Disziplin – bestimmte, wie Hopkins über
        Jahrzehnte mit seiner eigenen Suchterkrankung umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrelanger Alkoholkonsum in den 1960er- und 1970er-Jahren:</strong>
        Hopkins beschrieb später selbst, dass Alkohol über Jahre ein zunehmend
        beherrschendes Element seines Lebens und seiner beginnenden Schauspielkarriere
        war.</p>
        <p class="vb-intro"><strong>b) Ein selbst beschriebener Tiefpunkt:</strong>
        Nach eigener Schilderung erreichte die Erkrankung 1975 einen Punkt, an dem Hopkins
        sich an einen einschneidenden Wendepunkt erinnert, der ihn zur Abstinenz bewog.</p>
        <p class="vb-intro"><strong>c) Entscheidung für vollständige Abstinenz:</strong>
        Hopkins traf die Entscheidung, vollständig auf Alkohol zu verzichten – keine
        schrittweise Reduzierung, sondern ein klarer Schnitt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Über 50 Jahre durchgehende Nüchternheit:</strong>
        Nach eigenen Angaben blieb Hopkins seit 1975 ununterbrochen nüchtern – ein
        Zeitraum von inzwischen fünf Jahrzehnten.</p>
        <p class="vb-intro"><strong>b) Wiederholte öffentliche Erwähnung der eigenen Geschichte:</strong>
        Hopkins sprach in Interviews über die Jahrzehnte hinweg wiederholt offen über
        seine frühere Alkoholerkrankung und die eigene Abstinenz.</p>
        <p class="vb-intro"><strong>c) Ungebrochene, sogar wachsende künstlerische Produktivität:</strong>
        Die international bedeutendsten Rollen seiner Karriere entstanden nach 1975 –
        die Abstinenz fiel zeitlich mit dem Aufstieg zu Weltruhm zusammen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Kein dramatisiertes Bekenntnis, sondern nüchterne Feststellung:</strong>
        Hopkins sprach über seine Suchtgeschichte in der Regel sachlich, ohne die eigene
        Geschichte zum zentralen Element seiner öffentlichen Person zu machen.</p>
        <p class="vb-intro"><strong>b) Disziplinierte tägliche Routinen:</strong>
        Berichten zufolge pflegt Hopkins bis heute feste, disziplinierte Tagesabläufe –
        ein Muster, das mit seiner langjährigen Abstinenz in Einklang steht.</p>
        <p class="vb-intro"><strong>c) Weiterhin aktiv im hohen Alter:</strong>
        Auch mit über 85 Jahren blieb Hopkins schauspielerisch aktiv, ohne die eigene
        Arbeitsdisziplin sichtbar zu reduzieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Vorbild für langfristige Abstinenz:</strong>
        Hopkins' über fünfzigjährige Nüchternheit wird in Medienberichten regelmäßig als
        außergewöhnlich langer, stabiler Genesungsweg hervorgehoben.</p>
        <p class="vb-intro"><strong>b) Keine erkennbare Zäsur im künstlerischen Werk:</strong>
        Anders als bei manchen anderen Suchtgeschichten zeigt Hopkins' Filmografie keinen
        Bruch, sondern einen kontinuierlichen Aufstieg nach dem Wendepunkt 1975.</p>
        <p class="vb-intro"><strong>c) Öffentliche Ermutigung anderer Betroffener:</strong>
        Hopkins' offene, aber unaufgeregte Art, über seine Geschichte zu sprechen, wurde
        wiederholt als ermutigendes Beispiel für andere Menschen mit Suchterkrankungen
        aufgegriffen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle als Antwort auf die eigene Sucht:</strong>
        Dieselbe SE1-Überzeugung, dass Sicherheit durch Disziplin entsteht, bestimmte
        Hopkins' Reaktion auf die eigene Alkoholerkrankung – ein klarer, kontrollierter
        Schnitt statt eines schrittweisen, unsicheren Prozesses.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und die geduldige, unaufgeregte Durchhaltung:</strong>
        Die Gelassenheit des Neunerflügels zeigte sich darin, dass Hopkins seine
        Abstinenz über Jahrzehnte ohne öffentliches Drama durchhielt – stille Beharrlichkeit
        statt dramatischer Rückfälle und Wiederaufstiege.</p>
        <p class="vb-intro"><strong>c) Prinzipientreue, die keine Ausnahmen kennt:</strong>
        Die für die Eins typische Prinzipientreue erklärt, warum Hopkins seit dem
        einmal gefassten Entschluss offenbar keine Rückfälle öffentlich bekannt gemacht
        hat.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kontrolle, die zum lebenslangen Prinzip wurde:</strong>
        Hopkins' gesamtes späteres Leben und Werk ist von einer Disziplin geprägt, die
        sich in derselben Konsequenz zeigt wie sein einmal gefasster Entschluss zur
        Abstinenz – die Kontrolle über den eigenen Körper wurde zum Fundament seiner
        gesamten weiteren Karriere.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Konrad
        Adenauer</a> (ebenfalls SE1w9) reagierte auf den schweren Autounfall 1917 und die
        spätere NS-Verfolgung mit derselben stillen, unbeirrbaren Disziplin, ohne die
        eigene Verletzlichkeit öffentlich zum Thema zu machen; Hopkins reagierte auf seine
        eigene Suchterkrankung mit einer strukturell verwandten Haltung – ein einmal
        gefasster Entschluss, konsequent und ohne öffentliches Aufheben durchgehalten.
        Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Krankheitsporträt zu Konrad Adenauer</a>.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu
        Suchterkrankungen führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Hopkins' Fall zeigen lässt, ist ein
        Muster im Umgang mit einer überwundenen Sucht, das bei einer ausgeprägten
        selbsterhaltenden Eins mit Neunerflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hopkins kennt sein eigenes Muster nicht als Enneagramm-Struktur – die
        selbsterhaltende Eins mit Neunerflügel hält reflexhaft an einmal gefassten
        Prinzipien fest, statt sie je infrage zu stellen, und lebt genau dieses Muster
        seit fünf Jahrzehnten unverändert aus. Wer die eigene Neigung zu unbedingter
        Prinzipientreue nicht als Muster erkennt, profitiert dennoch oft gerade davon,
        wenn das Prinzip die richtige Richtung hat.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Eins mit Neunerflügel erklärt bei <strong>Anthony
        Hopkins</strong> vieles am Umgang mit der eigenen Suchterkrankung: ein Mann, dessen
        Sicherheit auf Disziplin beruht, verwandelte einen einzigen Wendepunkt in fünf
        Jahrzehnte ununterbrochene Konsequenz – der Adler, der einmal Kurs genommen hat und
        seither nicht mehr abweicht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-anthony-hopkins", label:"Porträt: Anthony Hopkins (SE1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Krankheitsporträt: Konrad Adenauer (SE1w9) – dieselbe stille Prinzipientreue"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

function byronKatieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-byron-katie-portrait.jpg" alt="Byron Katie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Byron Katie</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel · geb. 1942</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Byron Katie</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-byron-katie">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um ihre Methode
        "The Work". Diese Seite vertieft ein Kapitel, das dort knapp angedeutet wird: eine
        Jahrzehnte andauernde, schwere Depression mit Agoraphobie in den 1960er- bis
        1980er-Jahren, aus der heraus sie 1986 den entscheidenden Wendepunkt ihres Lebens
        beschreibt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Byron Katie</strong> ist dem <strong>sexuellen Typ 6 mit Siebenerflügel</strong>
        zugeordnet. Die SX6 sucht Sicherheit, indem sie der eigenen Angst frontal
        begegnet, statt ihr auszuweichen; der Siebenerflügel bringt eine rastlose,
        appetitive Suche nach dem nächsten Verständnis hinzu. Genau diese Kombination –
        die eigene Angst nicht zu vermeiden, sondern sich ihr direkt zu stellen –
        bestimmte, wie sie schließlich aus ihrer eigenen, jahrzehntelangen Depression
        herausfand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginnende schwere Depression in den 1960er-Jahren:</strong>
        Byron Katie beschreibt in eigenen Schilderungen eine sich über Jahre verschärfende
        Depression, die schließlich in Verzweiflung und Suizidgedanken mündete.</p>
        <p class="vb-intro"><strong>b) Zunehmende Agoraphobie:</strong>
        Zur Depression gesellte sich eine ausgeprägte Angst vor dem Verlassen des eigenen
        Zuhauses, die ihren Alltag über Jahre stark einschränkte.</p>
        <p class="vb-intro"><strong>c) Zehn Jahre nahezu durchgehende Verzweiflung:</strong>
        Nach eigener Schilderung erstreckte sich diese Phase über etwa ein Jahrzehnt,
        bevor es 1986 zu einer entscheidenden Wende kam.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Aufenthalt in einer Einrichtung für Essstörungen:</strong>
        Byron Katie beschreibt einen einschneidenden Moment 1986 in einer solchen
        Einrichtung, in dem sich ihre innere Verfassung grundlegend veränderte.</p>
        <p class="vb-intro"><strong>b) Ein selbst beschriebenes "Aufwachen":</strong>
        Sie beschreibt diesen Moment als abruptes Ende der jahrelangen Verzweiflung und
        Beginn einer radikal veränderten Sichtweise auf die eigenen Gedanken.</p>
        <p class="vb-intro"><strong>c) Entwicklung einer eigenen Methode aus der Erfahrung:</strong>
        Aus dieser persönlichen Krise heraus entwickelte sie die später weltweit
        verbreitete Fragemethode "The Work".</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ausführliche schriftliche Verarbeitung:</strong>
        Byron Katie beschreibt ihre depressive Phase und den Wendepunkt in mehreren
        eigenen Büchern sehr detailliert – kein verschwiegenes, sondern ein zentrales
        Kapitel ihrer öffentlichen Biografie.</p>
        <p class="vb-intro"><strong>b) Die Krise als Ausgangspunkt der späteren Lehre:</strong>
        Anders als bei vielen anderen Krankheitsverläufen wird die frühere Depression bei
        ihr nicht verdrängt, sondern als notwendiger Ursprung der eigenen Methode erzählt.</p>
        <p class="vb-intro"><strong>c) Weltweite Verbreitung der aus der Krise entstandenen Methode:</strong>
        "The Work" wird seither international in Workshops und Büchern gelehrt – direkt
        zurückgeführt auf die eigene, überwundene Verzweiflung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine Krise, die zur Grundlage einer Lehre wurde:</strong>
        Byron Katies eigene Depression und ihr Ende bilden bis heute den zentralen
        Referenzpunkt, mit dem sie ihre Methode einführt und erklärt.</p>
        <p class="vb-intro"><strong>b) Große öffentliche Reichweite:</strong>
        Millionen Menschen weltweit kamen über Bücher, Workshops und Seminare mit "The
        Work" in Berührung – einer Methode, die unmittelbar aus einer persönlichen
        psychischen Krise hervorging.</p>
        <p class="vb-intro"><strong>c) Keine Rückkehr zur früheren depressiven Verfassung:</strong>
        In eigenen späteren Darstellungen beschreibt sie den Wendepunkt 1986 als
        dauerhaft, nicht als vorübergehende Besserung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Angst, die frontal statt ausweichend angegangen wurde:</strong>
        Dieselbe SX6-Energie, die Angst nicht vermeidet, sondern direkt konfrontiert,
        zeigte sich in Byron Katies radikaler Infragestellung der eigenen Gedanken, statt
        sie länger zu verdrängen.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und der Hunger nach neuem Verständnis:</strong>
        Die appetitive Energie des Siebenerflügels zeigte sich darin, dass aus der
        persönlichen Krise sofort eine neue, weit ausgreifende Methode entstand, statt bei
        der bloßen persönlichen Genesung stehenzubleiben.</p>
        <p class="vb-intro"><strong>c) Direkte Konfrontation statt schrittweiser Bewältigung:</strong>
        Der von ihr beschriebene abrupte, radikale Wendepunkt passt zur SX6-typischen
        Neigung, sich der eigenen Angst nicht allmählich, sondern in einem entschiedenen
        Moment zu stellen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Geist, der die eigene Angst schließlich befragte, statt ihr zu glauben:</strong>
        Byron Katies gesamte spätere Lehre beruht auf dem Infragestellen belastender
        Gedanken – eine Methode, die direkt aus dem Umgang mit den eigenen, über zehn Jahre
        quälenden Gedanken während ihrer Depression entstand.</p>
        <p class="vb-intro"><strong>b) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu Depression
        oder Agoraphobie führt – <strong>jeder Mensch kann jede psychische Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Byron Katies Fall zeigen
        lässt, ist ein Muster im Umgang mit einer überwundenen psychischen Krise, das bei
        einer ausgeprägten sexuellen Sechs mit Siebenerflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>c) Die unbewusste Fixierung als eigener Faktor:</strong>
        Byron Katie kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die sexuelle
        Sechs mit Siebenerflügel begegnet reflexhaft der eigenen Angst frontal, statt ihr
        auszuweichen, und genau dieses Muster prägt ihre Lehre bis heute, Jahrzehnte nach
        dem eigenen Wendepunkt. Wer die eigene Neigung zur direkten Konfrontation mit der
        Angst nicht als Muster erkennt, wiederholt dennoch oft genau diesen Mechanismus,
        wenn eine neue Krise auftritt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Sechs mit Siebenerflügel erklärt bei <strong>Byron Katie</strong>
        vieles am Verlauf ihrer eigenen psychischen Krise: eine Frau, deren gesamte
        spätere Lehre auf der direkten Konfrontation mit belastenden Gedanken beruht,
        fand genau diesen Weg zuerst in der eigenen, zehnjährigen Verzweiflung – der
        Wolf, der sich der Bedrohung nicht entzieht, sondern ihr entgegentritt, bis sie
        sich als bloßer Gedanke entpuppt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-byron-katie", label:"Porträt: Byron Katie (SX6w7)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

function drewBarrymoreKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-drew-barrymore-portrait.jpg" alt="Drew Barrymore" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Drew Barrymore</p>
        <p class="krim-portrait-typ">SO7w8 · Sozialer Typ 7 mit Achterflügel · geb. 1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Drew Barrymore</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-drew-barrymore">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort beiläufig behandelt wird: eine bereits im Kindesalter beginnende
        Suchterkrankung, die 1988 zu einer Einweisung in eine Entzugsklinik führte – im
        Alter von erst 13 Jahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Barrymore</strong> ist dem <strong>sozialen Typ 7 mit Achterflügel</strong>
        zugeordnet. Die SO7 opfert eigenen unmittelbaren Genuss zugunsten einer größeren
        Idee; der Achterflügel bringt Durchsetzungskraft und die Fähigkeit hinzu, auch
        aus tiefen Krisen heraus die Kontrolle über das eigene Leben zurückzugewinnen.
        Genau diese Kombination – aus einer frühen Krise heraus eine neue, öffentlich
        sichtbare Rolle zu erschaffen – bestimmte, wie Barrymore mit ihrer Kindheitssucht
        umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Früher Kontakt mit Alkohol und Drogen im Kindesalter:</strong>
        Barrymore, bereits als Kleinkind ein gefragter Kinderstar, kam nach eigenen
        Schilderungen schon im Grundschulalter in ein Umfeld mit Alkohol und späterem
        Drogenkonsum.</p>
        <p class="vb-intro"><strong>b) Zunehmend außer Kontrolle geratener Konsum:</strong>
        Ihre Autobiografie "Little Girl Lost" beschreibt eine rasch eskalierende
        Suchtentwicklung bereits vor dem Teenageralter.</p>
        <p class="vb-intro"><strong>c) Einweisung in eine Entzugsklinik 1988:</strong>
        Im Alter von 13 Jahren wurde Barrymore in eine Einrichtung zur Suchtbehandlung
        eingewiesen – ein für Kinderstars dieser Zeit öffentlich seltenes Ereignis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Öffentliche Verarbeitung im eigenen Buch:</strong>
        Statt die Kindheitssucht zu verbergen, verarbeitete Barrymore sie bereits mit 14
        Jahren in einer eigenen Autobiografie.</p>
        <p class="vb-intro"><strong>b) Emanzipation von den eigenen Eltern:</strong>
        Im Zusammenhang mit dieser Krise wurde Barrymore mit 14 Jahren rechtlich von
        ihrer Mutter emanzipiert – ein weiterer öffentlich dokumentierter Einschnitt
        dieser Zeit.</p>
        <p class="vb-intro"><strong>c) Schrittweiser Wiederaufbau der Karriere:</strong>
        In den folgenden Jahren baute Barrymore ihre Schauspielkarriere systematisch
        wieder auf, bis hin zu eigenen Produktionsfirmen und späteren Erfolgen als
        Filmemacherin.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Wiederholte öffentliche Reflexion über die eigene Geschichte:</strong>
        Barrymore sprach auch als erwachsene Schauspielerin und spätere Talkshow-Moderatorin
        wiederholt offen über ihre Kindheitssucht.</p>
        <p class="vb-intro"><strong>b) Aufbau einer neuen öffentlichen Rolle als Talkshow-Host:</strong>
        Mit ihrer eigenen Tagesshow schuf sich Barrymore eine neue Plattform, in der
        persönliche Offenheit – auch über die eigene Vergangenheit – zum zentralen Element
        wurde.</p>
        <p class="vb-intro"><strong>c) Keine Rückkehr in die frühere Suchtdynamik:</strong>
        In öffentlichen Aussagen beschreibt Barrymore die überstandene Kindheitssucht als
        abgeschlossenes, aber prägendes Kapitel ihres Lebens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine der bekanntesten Kindheitssuchtgeschichten Hollywoods:</strong>
        Barrymores frühe Krise gehört zu den am ausführlichsten öffentlich dokumentierten
        Suchtgeschichten eines ehemaligen Kinderstars.</p>
        <p class="vb-intro"><strong>b) Ein Karriereverlauf ohne dauerhaften Bruch:</strong>
        Trotz der frühen Krise entwickelte sich Barrymore zu einer der kommerziell
        erfolgreichsten Schauspielerinnen und Produzentinnen ihrer Generation.</p>
        <p class="vb-intro"><strong>c) Öffentliche Rolle als Stimme für Offenheit:</strong>
        Barrymores Bereitschaft, offen über die eigene Vergangenheit zu sprechen, wurde
        wiederholt als ermutigendes Beispiel für andere Betroffene aufgegriffen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Flucht nach vorn statt Stillstand:</strong>
        Dieselbe SO7-Energie, die immer neue Möglichkeiten sucht, statt in einer Krise zu
        verharren, bestimmte Barrymores raschen Übergang von der Entzugsklinik zurück in
        eine aktive, sichtbare Karriere.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die Rückeroberung der eigenen Kontrolle:</strong>
        Die Durchsetzungskraft des Achterflügels zeigte sich in der rechtlichen
        Emanzipation von den eigenen Eltern mit 14 Jahren – ein früher, entschlossener
        Akt der Selbstbestimmung.</p>
        <p class="vb-intro"><strong>c) Offenheit als Form der Kontrolle über die eigene Geschichte:</strong>
        Statt die Kindheitssucht verbergen zu lassen, erzählte Barrymore sie selbst zuerst
        – ein Muster, das sich durch ihre gesamte spätere öffentliche Karriere zieht.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kindheit, die zu früh mit Erwachsenenrisiken konfrontiert wurde:</strong>
        Barrymores gesamte spätere Karriere ist von der Erfahrung geprägt, bereits als
        Kind ohne ausreichenden Schutz in ein Erwachsenenumfeld geraten zu sein – die
        eigene Krise wurde zum Ausgangspunkt eines bewussteren, selbstbestimmteren
        weiteren Lebens.</p>
        <p class="vb-intro"><strong>b) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben zwangsläufig zu
        Suchterkrankungen führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Barrymores Fall zeigen lässt, ist ein
        Muster im Umgang mit einer überwundenen Kindheitssucht, das bei einer
        ausgeprägten sozialen Sieben mit Achterflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>c) Die unbewusste Fixierung als eigener Faktor:</strong>
        Barrymore kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die soziale
        Sieben mit Achterflügel verwandelt reflexhaft eine überstandene Krise in neue,
        sichtbare Bewegung nach vorn, statt bei ihr stehenzubleiben, und lebt genau
        dieses Muster bis heute aus. Wer die eigene Neigung, aus Krisen sofort neue
        Projekte zu machen, nicht als Muster erkennt, überspringt manchmal einen
        notwendigen Moment der Ruhe.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Sieben mit Achterflügel erklärt bei <strong>Drew Barrymore</strong>
        vieles am Umgang mit ihrer eigenen Kindheitssucht: eine Frau, die schon mit 14
        Jahren die eigene Geschichte selbst erzählte, statt sie verschweigen zu lassen –
        der Biber, der den eingerissenen Damm nicht beklagt, sondern von Grund auf neu
        baut.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-drew-barrymore", label:"Porträt: Drew Barrymore (SO7w8)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

function neilArmstrongKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-neil-armstrong-portrait.jpg" alt="Neil Armstrong" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Neil Armstrong</p>
        <p class="krim-portrait-typ">SE6w5 · Selbsterhaltender Typ 6 mit Fünferflügel · 1930–2012</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kaninchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Tierentsprechung: Kaninchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Neil Armstrong</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-neil-armstrong">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um seine
        Landung auf dem Mond 1969 und seinen anschließenden Rückzug ins Private. Diese
        Seite vertieft ein Kapitel, das dort kurz gestreift wird: eine über zwei
        Jahrzehnte bestehende koronare Herzkrankheit, die 2012 zu einer Bypass-Operation
        und kurz darauf zu seinem Tod führte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Armstrong</strong> ist dem <strong>selbsterhaltenden Typ 6 mit
        Fünferflügel</strong> zugeordnet. Die SE6 sucht Sicherheit durch Routine und
        ein vertrautes, kontrolliertes Umfeld; der Fünferflügel bringt den Rückzug ins
        Fachliche und die Überzeugung hinzu, dass Sicherheit vor allem durch Wissen und
        Beherrschung entsteht, nicht durch soziale Offenlegung. Genau diese Kombination –
        ein ruhiges, zurückgezogenes Leben, in dem selbst die eigene Erkrankung als
        rein technisches, privat zu lösendes Problem behandelt wird – bestimmte, wie
        Armstrong mit seiner jahrelangen Herzkrankheit umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Herzinfarkt 1991 beim Skifahren:</strong>
        Im Alter von 61 Jahren erlitt Armstrong beim Skifahren in Aspen, Colorado, einen
        Herzinfarkt – das früheste dokumentierte kardiale Ereignis, gut zwei Jahrzehnte
        vor seinem Tod.</p>
        <p class="vb-intro"><strong>b) Weitgehend zurückgezogenes Leben ohne öffentliche Berichte über die Erkrankung:</strong>
        Passend zu seinem ohnehin öffentlichkeitsscheuen Lebensstil drang über die
        folgenden zwei Jahrzehnte wenig über seinen tatsächlichen Gesundheitszustand nach
        außen.</p>
        <p class="vb-intro"><strong>c) Fortschreitende koronare Herzkrankheit über zwei Jahrzehnte:</strong>
        Der Herzinfarkt 1991 markierte den Beginn einer chronischen, sich über Jahre
        weiter entwickelnden koronaren Herzerkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Nicht bestandener Belastungstest im August 2012:</strong>
        Am 6. August 2012 fiel Armstrong bei einem kardiologischen Belastungstest auf –
        ein akuter Hinweis auf mehrere Verengungen der Herzkranzgefäße.</p>
        <p class="vb-intro"><strong>b) Notfall-Vierfach-Bypass-Operation:</strong>
        Wenige Tage später unterzog sich Armstrong einer dringlichen Vierfach-Bypass-
        Operation an den Herzkranzgefäßen.</p>
        <p class="vb-intro"><strong>c) Komplikationen nach der Operation:</strong>
        Nach der zunächst erfolgreich verlaufenen Operation traten Komplikationen auf, an
        denen Armstrong am 25. August 2012 starb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Keine öffentliche Ankündigung der Operation im Vorfeld:</strong>
        Passend zu Armstrongs lebenslanger Zurückhaltung gegenüber der Öffentlichkeit gab
        es vor der Operation keine breite mediale Vorabberichterstattung.</p>
        <p class="vb-intro"><strong>b) Familiäre statt öffentliche Kommunikation:</strong>
        Informationen über seinen Gesundheitszustand kamen überwiegend über die eigene
        Familie, nicht über selbst initiierte öffentliche Stellungnahmen.</p>
        <p class="vb-intro"><strong>c) Spätere juristische Aufarbeitung der Behandlung:</strong>
        Nach seinem Tod führte die Behandlung zu einem millionenschweren juristischen
        Vergleich, der Fragen zur medizinischen Versorgung nach der Operation aufwarf.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein weltweit beachteter Todesfall:</strong>
        Armstrongs Tod nach der Operation löste internationale Anteilnahme aus – als
        erster Mensch auf dem Mond blieb er bis zuletzt eine globale Symbolfigur.</p>
        <p class="vb-intro"><strong>b) Nachträgliche mediale Aufarbeitung der Behandlung:</strong>
        Fachmedien und Gesundheitsjournalisten diskutierten nach seinem Tod ausführlich
        die Umstände der Operation und der anschließenden Komplikationen.</p>
        <p class="vb-intro"><strong>c) Ein öffentliches Bild, das von Zurückhaltung geprägt blieb:</strong>
        Auch die Berichterstattung über seine letzte Krankheit blieb im Vergleich zu
        anderen Prominenten ungewöhnlich zurückhaltend – passend zu seinem gesamten
        öffentlichen Auftreten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Rückzug als Sicherheitsstrategie, auch bei der eigenen Krankheit:</strong>
        Dieselbe SE6-Neigung, Sicherheit im Vertrauten und Zurückgezogenen zu suchen, die
        Armstrongs gesamtes Leben nach 1969 prägte, bestimmte auch, wie wenig über seine
        eigentliche Herzerkrankung nach außen drang.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel und die Behandlung der eigenen Krankheit als Fachfrage:</strong>
        Der Rückzug ins Fachliche, den der Fünferflügel mitbringt, zeigte sich darin,
        dass Armstrong sich der riskanten Operation offenbar wie einem technischen
        Problem näherte – sachlich, ohne öffentlich sichtbares Drama, ohne emotionale
        Inszenierung.</p>
        <p class="vb-intro"><strong>c) Kontrolle durch Zurückhaltung statt durch Offenlegung:</strong>
        Anders als andere SE6-Porträts dieses Kompasses, die ihre Angst in Sprache
        übersetzen, kontrollierte Armstrong seine eigene Verletzlichkeit vor allem durch
        Schweigen – eine Kontrolle, die der Fünferflügel durch Wissen und Distanz sucht,
        nicht durch Nähe.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Herz, das so still blieb wie sein späteres Leben:</strong>
        Armstrongs gesamtes Leben nach der Mondlandung war von dem Wunsch geprägt,
        unauffällig zu bleiben – seine über zwei Jahrzehnte bestehende Herzkrankheit
        blieb, passend zu diesem Muster, bis zuletzt weitgehend unsichtbar für die
        Öffentlichkeit.</p>
        <p class="vb-intro"><strong>b) Ein Kontrast im gleichen Kerntyp, anderer Flügel:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-woody-allen">Woody
        Allen</a> (SE6w7, mit Siebenerflügel) übersetzte seine eigene, meist imaginierte
        Gesundheitsangst jahrzehntelang öffentlich in Sprache und Komik – er trat mit
        seiner Neurose bewusst in die Öffentlichkeit. Armstrong, mit demselben Kerntyp,
        aber Fünferflügel statt Siebenerflügel, ging mit seiner tatsächlichen, realen
        Herzerkrankung den entgegengesetzten Weg – er machte sie mit sich selbst aus,
        ohne sie je zum Thema zu machen. Derselbe SE6-Kern, dieselbe Grundangst vor dem
        eigenen Körper, aber zwei völlig verschiedene Flügel-Antworten: der Siebenerflügel
        sucht die Bühne, der Fünferflügel den Rückzug. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-woody-allen">Krankheitsporträt zu Woody Allen</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Herz?</strong>
        Für einen selbsterhaltenden Sechser mit Fünferflügel, dessen gesamtes Leben auf
        der Übersetzung von Können in stille, verlässliche Kompetenz beruhte, liegt eine
        Deutung nahe: Ausgerechnet jenes Organ, das im übertragenen Sinn für Mut und
        Hingabe steht, wurde zum Ort einer Erkrankung, die er – ganz Fünferflügel – wie
        ein rein technisches Problem behandelte, das mit niemandem geteilt werden musste.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sechs zwangsläufig zu
        Herzkrankheiten führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Armstrongs Fall zeigen lässt, ist ein
        Muster im Umgang mit einer verschwiegenen chronischen Erkrankung, das bei einer
        ausgeprägten selbsterhaltenden Sechs mit Fünferflügel immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Armstrong kannte sein eigenes Muster nicht – die selbsterhaltende Sechs mit
        Fünferflügel sucht reflexhaft Sicherheit im Rückzug und im Verschweigen der
        eigenen Verwundbarkeit, statt sie öffentlich zu machen, und genau dieses Muster
        lebte er bis zu seinem Tod unverändert aus. Wer die eigene Neigung zum stillen
        Rückzug nicht als Muster erkennt, verpasst mitunter den Moment, in dem eine
        offenere Kommunikation über die eigene Gesundheit hilfreich gewesen wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sechs mit Fünferflügel erklärt bei <strong>Neil
        Armstrong</strong> vieles am Umgang mit seiner eigenen Herzkrankheit: ein Mann,
        dessen gesamtes Leben nach dem Mond von Rückzug und Zurückhaltung geprägt war,
        trug auch seine reale körperliche Bedrohung überwiegend im Stillen – das
        Kaninchen, das seinen Bau bis zum letzten Atemzug nicht verlassen wollte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-neil-armstrong", label:"Porträt: Neil Armstrong (SE6w5)"},
        {route:"krankheitsportraets-woody-allen", label:"Krankheitsporträt: Woody Allen (SE6w7) – gleicher Kerntyp, entgegengesetzter Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se6", label:"Subtyp-Profil SE6"},
      ])}
    </div>
  `);
}

function robbieWilliamsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-robbie-williams-portrait.jpg" alt="Robbie Williams" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robbie Williams</p>
        <p class="krim-portrait-typ">SX1w2 · Sexueller Typ 1 mit Zweierflügel · geb. 1974</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Robbie Williams</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-robbie-williams">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort am Rande gestreift wird: eine seit den frühen 1990er-Jahren
        bestehende schwere Depression, verbunden mit einer Sucht nach Alkohol, Kokain und
        Ecstasy, die er 2023 in einer vierteiligen Netflix-Dokumentation ausführlich
        aufarbeitete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Williams</strong> ist dem <strong>sexuellen Typ 1 mit Zweierflügel</strong>
        zugeordnet. Die SX1 richtet den strengen inneren Maßstab der Eins auf eine
        einzelne, intensive Beziehung oder Bühnenpräsenz; der Zweierflügel bringt den
        Wunsch hinzu, für andere unentbehrlich zu sein. Genau diese Kombination – die
        eigene Unzulänglichkeit unerbittlich im Rampenlicht zu spüren, während man
        anderen gefallen will – bestimmte, wie sich Williams' Depression und Sucht über
        Jahrzehnte entwickelten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Depression bereits in jungen Jahren bei Take That:</strong>
        Williams beschreibt in eigenen Interviews, dass Depressionen ihn bereits Anfang
        der 1990er-Jahre, während seiner Zeit bei der Boygroup Take That, erfassten.</p>
        <p class="vb-intro"><strong>b) Alkoholexzesse zur Selbstberuhigung:</strong>
        Nach eigener Schilderung betäubte er sich nach Auftritten regelmäßig mit
        Wodkaflaschen, um die eigene innere Verfassung zu ertragen.</p>
        <p class="vb-intro"><strong>c) Zunehmender Konsum von Kokain und Ecstasy:</strong>
        Zur Alkoholsucht gesellte sich in den folgenden Jahren ein zunehmender Konsum
        harter Drogen, den Williams selbst öffentlich dokumentierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein öffentlicher "nervlicher Zusammenbruch":</strong>
        Williams beschreibt einen Moment vor Tausenden Zuschauern, in dem er nach eigener
        Aussage "einen nervlichen Zusammenbruch vor Publikum" erlebte.</p>
        <p class="vb-intro"><strong>b) Mehrere Entzugsbehandlungen über die Jahre:</strong>
        Williams durchlief im Lauf seiner Karriere wiederholt Behandlungen wegen seiner
        Sucht- und Angsterkrankungen.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte Musikkarriere trotz der Erkrankung:</strong>
        Trotz der beschriebenen Krisen blieb Williams über Jahrzehnte einer der
        kommerziell erfolgreichsten Solokünstler Großbritanniens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Netflix-Dokumentation 2023:</strong>
        In einer vierteiligen Dokuserie ließ Williams Jahrzehnte an privatem Videomaterial
        auswerten und kommentierte seine eigene Geschichte fünf bis sechs Stunden täglich
        über 25 Drehtage.</p>
        <p class="vb-intro"><strong>b) Selbst beschriebener Prozess als schmerzhaft:</strong>
        Williams bezeichnete den Dreh selbst als "zutiefst, zutiefst schmerzhaft" – ein
        bewusstes, aktives Wiedererleben statt einer distanzierten Rückschau.</p>
        <p class="vb-intro"><strong>c) Offenlegung ohne beschönigende Distanz:</strong>
        Die Dokumentation zeigt Depression, Angststörungen und Suchtverhalten ohne
        erkennbare Verharmlosung – ein ungewöhnlich direktes Selbstporträt für einen
        Weltstar.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Breite internationale Aufmerksamkeit:</strong>
        Die Netflix-Serie löste weltweit Berichterstattung aus und trug zur öffentlichen
        Enttabuisierung von Suchterkrankungen bei Popstars bei.</p>
        <p class="vb-intro"><strong>b) Eine Karriere ohne dauerhaften Bruch:</strong>
        Trotz der jahrzehntelangen psychischen Belastung blieb Williams' musikalisches
        Werk und seine öffentliche Präsenz über die gesamte Zeit hinweg umfangreich.</p>
        <p class="vb-intro"><strong>c) Eine zweite Erzählung neben dem Popstar-Image:</strong>
        Neben dem Bild des erfolgreichen Entertainers etablierte sich durch die
        Dokumentation ein zweites, ebenso öffentliches Bild der verletzlichen,
        kämpfenden Person dahinter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der strenge innere Maßstab, der nie erfüllt wird:</strong>
        Dieselbe SX1-Energie, die einen unerbittlichen inneren Maßstab an eine einzige,
        intensive Bühnenbeziehung mit dem Publikum anlegt, bestimmte auch Williams'
        Gefühl, diesem Maßstab nie wirklich zu genügen – eine Quelle der beschriebenen
        Depression.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und die Erschöpfung durch das Gefallenwollen:</strong>
        Die Zuwendung des Zweierflügels zeigte sich im Wunsch, das Publikum immer wieder
        neu zu erreichen und zu erfreuen – eine Anstrengung, die zur emotionalen
        Erschöpfung beitrug, die er selbst beschreibt.</p>
        <p class="vb-intro"><strong>c) Radikale Offenheit als spätere Form der Selbstkritik:</strong>
        Die schonungslose Offenlegung der eigenen Geschichte in der Dokumentation passt
        zur SX1-typischen Neigung, auch das eigene Innenleben nach strengen, ehrlichen
        Maßstäben zu prüfen und öffentlich zu machen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Bühne, die nie genug innere Ruhe brachte:</strong>
        Williams' gesamte Karriere war von dem Versuch geprägt, über die Bühne
        Anerkennung und Beruhigung zu finden – ausgerechnet dieser Ort, an dem er am
        sichtbarsten war, wurde zum Schauplatz seiner tiefsten Erschöpfung und
        Selbstzweifel.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet die Stimme betäuben?</strong>
        Für einen sexuellen Einser mit Zweierflügel, dessen gesamte öffentliche
        Existenz auf der eigenen Stimme und dem unmittelbaren Kontakt zum Publikum
        beruht, liegt eine Deutung nahe: Ausgerechnet jenes Werkzeug, mit dem er
        Nähe zum Publikum herstellte und zugleich seinen eigenen, unerbittlichen
        Maßstab performte, wurde durch Alkohol und Drogen betäubt – ein Versuch, den
        inneren Kritiker zum Schweigen zu bringen, der am lautesten gerade dann sprach,
        wenn die Bühne am hellsten leuchtete. Diese Deutung ist eine plausible
        Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins zwangsläufig zu Depression
        oder Sucht führt – <strong>jeder Mensch kann jede psychische Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Williams' Fall zeigen
        lässt, ist ein Muster im Umgang mit dem eigenen, nie erfüllten inneren Maßstab,
        das bei einem ausgeprägten sexuellen Einser mit Zweierflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Williams kennt sein eigenes Muster nicht als Enneagramm-Struktur – die sexuelle
        Eins mit Zweierflügel legt reflexhaft einen unerbittlichen Maßstab an die eigene
        Wirkung auf andere an, statt diesen Maßstab je infrage zu stellen, und lebt genau
        dieses Muster bis heute in modifizierter Form weiter aus. Wer die eigene Neigung
        zum unerbittlichen Selbstanspruch nicht als Muster erkennt, erschöpft sich immer
        wieder an demselben unerreichbaren Ziel.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Eins mit Zweierflügel erklärt bei <strong>Robbie Williams</strong>
        vieles am Verlauf seiner eigenen Depression und Sucht: ein Mann, dessen gesamte
        Bühnenpräsenz auf dem Wunsch beruhte, für ein Publikum unentbehrlich zu sein,
        fand in genau diesem Anspruch die Wurzel seiner tiefsten Erschöpfung – die
        Schwarze Mamba, die auch nach dem lautesten Applaus keine Ruhe findet, weil der
        nächste, noch höhere Maßstab bereits wartet.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-robbie-williams", label:"Porträt: Robbie Williams (SX1w2)"},
        {route:"krankheitsportraets-jamie-lee-curtis", label:"Krankheitsporträt: Jamie Lee Curtis (SX1w2) – gleicher Subtyp"},
        {route:"krankheitsportraets-martin-luther", label:"Krankheitsporträt: Martin Luther (SX1w2) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}

function fransDeWaalKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-frans-de-waal-portrait.jpg" alt="Frans de Waal" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Frans de Waal</p>
        <p class="krim-portrait-typ">SX7w6 · Sexueller Typ 7 mit Sechserflügel · 1948–2024</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Frans de Waal</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-frans-de-waal">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um sein
        Lebenswerk als Primatenforscher. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: eine im August 2023 diagnostizierte Magenkrebserkrankung, an der
        er im März 2024 starb, nachdem er bis wenige Monate zuvor weitergearbeitet hatte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>de Waal</strong> ist dem <strong>sexuellen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SX7 sucht Intensität durch das ständige Erschließen neuer
        Erfahrungsräume; der Sechserflügel bringt Loyalität gegenüber der eigenen Arbeit
        und ihrem Umfeld hinzu. Genau diese Kombination – ungebremstes Weiterarbeiten bis
        an eine harte, kurze Frist – bestimmte, wie de Waal auf seine Krebsdiagnose
        reagierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose im August 2023:</strong>
        De Waal erhielt im August 2023 die Diagnose Magenkrebs – etwa sieben Monate vor
        seinem Tod.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte öffentliche Termine trotz Diagnose:</strong>
        Im Herbst 2023 nahm de Waal weiterhin an öffentlichen Veranstaltungen teil, unter
        anderem an einem Gespräch mit Isabella Rossellini in New York.</p>
        <p class="vb-intro"><strong>c) Auftritt bei einem internationalen Philosophiefestival:</strong>
        Im Juni 2023 sprach de Waal beim Philosophiefestival phil.COLOGNE in Deutschland –
        kurz vor oder unmittelbar nach der Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zuversicht trotz ungünstiger Prognose:</strong>
        Noch im November 2023 äußerte sich de Waal nach Berichten hoffnungsvoll über den
        eigenen Krankheitsverlauf, trotz einer insgesamt schwierigen Prognose.</p>
        <p class="vb-intro"><strong>b) Kein öffentlicher Rückzug von der eigenen Arbeit:</strong>
        Es gibt keine Hinweise darauf, dass de Waal seine Forschungs- oder
        Veröffentlichungstätigkeit nach der Diagnose bewusst beendete.</p>
        <p class="vb-intro"><strong>c) Tod am 14. März 2024:</strong>
        De Waal starb im Alter von 75 Jahren an seinem Wohnsitz in Stone Mountain,
        Georgia, an den Folgen des Magenkrebses.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein vergleichsweise kurzer, aber intensiver Krankheitsverlauf:</strong>
        Zwischen Diagnose und Tod lagen nur rund sieben Monate – ein deutlich kürzerer
        Zeitraum als bei den meisten anderen Krankheitsporträts dieses Kompasses.</p>
        <p class="vb-intro"><strong>b) Ein umfangreiches, bis zuletzt aktuelles Lebenswerk:</strong>
        De Waals letztes Buch, "Different: Gender Through the Eyes of a Primatologist",
        war erst 2022 erschienen – kurz vor seiner Diagnose.</p>
        <p class="vb-intro"><strong>c) Weltweite Würdigung nach seinem Tod:</strong>
        Nachrufe in Fachzeitschriften, großen Zeitungen und wissenschaftlichen
        Institutionen würdigten de Waal unmittelbar nach seinem Tod als einen der
        einflussreichsten Verhaltensforscher seiner Generation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der die öffentliche Wahrnehmung kaum überschattete:</strong>
        Trotz der kurzen, ernsten Erkrankung blieb de Waals öffentliches Bild bis zuletzt
        von seinem wissenschaftlichen Werk geprägt, nicht von der Krankheit.</p>
        <p class="vb-intro"><strong>b) Internationale Trauer in der Wissenschaftswelt:</strong>
        Kolleginnen und Kollegen weltweit würdigten de Waal als prägende Figur der
        Primatenforschung und der Verhaltensbiologie insgesamt.</p>
        <p class="vb-intro"><strong>c) Fortwirkendes Werk über den Tod hinaus:</strong>
        De Waals Bücher und Forschungsergebnisse blieben nach seinem Tod ein zentraler
        Bezugspunkt der Debatte über Tierverhalten, Emotion und Moral.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Intensität, die sich auch der Diagnose nicht beugte:</strong>
        Dieselbe SX7-Energie, die de Waals gesamtes Forscherleben trug, bestimmte auch
        seine letzten Monate – öffentliche Auftritte und Zuversicht statt Rückzug.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die Treue zum eigenen Lebenswerk:</strong>
        Die Loyalität des Sechserflügels zeigte sich darin, dass de Waal seinem
        Forschungsfeld und seinem wissenschaftlichen Umfeld bis kurz vor seinem Tod treu
        blieb.</p>
        <p class="vb-intro"><strong>c) Zuversicht als eigene Form der Intensität:</strong>
        Die berichtete Hoffnung trotz schwieriger Prognose passt zur SX7-typischen
        Neigung, sich auch in Krisen auf die positive Möglichkeit zu konzentrieren, statt
        auf das Worst-Case-Szenario.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Forscherleben, das bis zuletzt nach vorn gerichtet blieb:</strong>
        De Waals gesamtes wissenschaftliches Werk war von der Überzeugung geprägt, dass
        es immer noch mehr zu verstehen gibt – die Krebsdiagnose änderte diese
        Grundhaltung in den verbleibenden Monaten nicht erkennbar.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Leonard
        Bernstein</a> und
        <a href="javascript:void(0)" data-route="krankheitsportraets-morgan-freeman">Morgan
        Freeman</a> (beide ebenfalls SX7w6) reagierten auf ihre eigenen chronischen
        Erkrankungen mit derselben Grundhaltung wie de Waal – kein Rückzug, sondern
        Weiterarbeit trotz spürbarer körperlicher Grenze. Mehr dazu in den
        Krankheitsporträts zu
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Leonard Bernstein</a>
        und
        <a href="javascript:void(0)" data-route="krankheitsportraets-morgan-freeman">Morgan Freeman</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Magen?</strong>
        Für einen sexuellen Siebener mit Sechserflügel, dessen gesamtes Wirken auf der
        unermüdlichen Aufnahme und Verarbeitung neuer Erfahrungen und Erkenntnisse
        beruhte, liegt eine Deutung nahe: Ausgerechnet jenes Organ, das im übertragenen
        Sinn für Aufnahme und Verdauung von allem Neuen steht, wurde zum Ort einer
        Erkrankung, die den lebenslang unstillbaren Appetit des Forschers auf verstörende
        Weise spiegelte. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu
        Krebserkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an de Waals Fall zeigen lässt, ist ein
        Muster im Umgang mit einer schweren, kurzfristigen Diagnose, das bei einem
        ausgeprägten sexuellen Siebener mit Sechserflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        De Waal kannte sein eigenes Muster nicht – die sexuelle Sieben mit Sechserflügel
        sucht reflexhaft die volle, ungefilterte Erfahrung und Weiterarbeit, statt eine
        schwere Diagnose je zum Anlass für einen frühen Rückzug zu nehmen, und lebte
        genau dieses Muster bis zu seinem Tod unverändert aus. Wer die eigene
        Intensitätssuche nicht als Muster erkennt, kann auch angesichts einer kurzen,
        schweren Prognose nicht innehalten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Sieben mit Sechserflügel erklärt bei <strong>Frans de Waal</strong>
        vieles am Verlauf seiner letzten Lebensmonate: ein Mann, dessen gesamtes Werk auf
        der unstillbaren Suche nach neuem Verständnis beruhte, blieb dieser Suche bis
        kurz vor seinem Tod treu – der Schimpanse, der bis zum letzten Ast weiterklettert,
        weil dort immer noch etwas Neues zu entdecken sein könnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-frans-de-waal", label:"Porträt: Frans de Waal (SX7w6)"},
        {route:"krankheitsportraets-leonard-bernstein", label:"Krankheitsporträt: Leonard Bernstein (SX7w6) – dasselbe Muster ungebremsten Weiterarbeitens"},
        {route:"krankheitsportraets-morgan-freeman", label:"Krankheitsporträt: Morgan Freeman (SX7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

function jordanPetersonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-jordan-peterson-portrait.jpg" alt="Dr. Jordan Peterson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Jordan Peterson</p>
        <p class="krim-portrait-typ">SO1w9 · Sozialer Typ 1 mit Neunerflügel · geb. 1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gans</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Tierentsprechung: Gans" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jordan Peterson</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-jordan-peterson">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur knapp angerissen wird: eine schwere
        Benzodiazepin-Abhängigkeit, die 2019/2020 in einen künstlich herbeigeführten
        Entzugskoma in Russland gipfelte, nachdem westliche Kliniken ihm nicht mehr
        helfen konnten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Peterson</strong> ist dem <strong>sozialen Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SO1 trägt ihren Zorn als gesellschaftliches Anliegen, nicht als
        privaten Groll; der Neunerflügel bringt eine ruhige, geduldige Überzeugungskraft
        hinzu, die auch schwierige Botschaften ausdauernd wiederholt. Genau diese
        Kombination – Ordnung predigen, während im eigenen Leben das Chaos tobte –
        bestimmte den Verlauf seiner eigenen Suchterkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Verordnung von Benzodiazepinen nach familiärer Krise:</strong>
        Nach eigener Schilderung erhielt Peterson Benzodiazepine ärztlich verordnet, unter
        anderem im Zusammenhang mit der schweren, seltenen Autoimmunerkrankung seiner
        Tochter Mikhaila und der damit verbundenen Belastung.</p>
        <p class="vb-intro"><strong>b) Schleichend zunehmende körperliche Abhängigkeit:</strong>
        Über die Zeit entwickelte sich eine physische Abhängigkeit, die nach eigener
        Aussage weit über die ursprünglich beabsichtigte Anwendung hinausging.</p>
        <p class="vb-intro"><strong>c) Verschärfung durch eine unerwartete Reaktion 2019:</strong>
        Eine paradoxe, extreme Reaktion auf eine Dosisanpassung im Frühjahr 2019 löste
        eine akute gesundheitliche Krise mit schweren Entzugssymptomen aus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Erfolglose Behandlungsversuche in mehreren Ländern:</strong>
        Nach Angaben seiner Tochter Mikhaila, die den Fall öffentlich dokumentierte,
        suchten sie Behandlung in mehreren Kliniken in Nordamerika, ohne dass eine
        wirksame Linderung des Entzugs erreicht werden konnte.</p>
        <p class="vb-intro"><strong>b) Extreme Entzugssymptome, darunter Akathisie:</strong>
        Peterson berichtete später öffentlich über quälende Zustände, unter anderem eine
        als Akathisie beschriebene, kaum erträgliche innere Unruhe.</p>
        <p class="vb-intro"><strong>c) Reise nach Russland zur letzten Behandlungsoption:</strong>
        Ende 2019 reiste die Familie nach Russland, wo eine Klinik eine Behandlung
        anbot, die in westlichen Ländern zu diesem Zeitpunkt nicht verfügbar war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Künstlich herbeigeführtes Koma zur Entzugsbehandlung:</strong>
        In Moskau wurde Peterson nach Angaben seiner Tochter in ein induziertes Koma
        versetzt, um den schwersten Teil des körperlichen Entzugs zu überstehen.</p>
        <p class="vb-intro"><strong>b) Monatelanger, öffentlich weitgehend unsichtbarer Rückzug:</strong>
        Über weite Strecken dieser Krise verschwand Peterson fast vollständig aus der
        Öffentlichkeit – ein starker Kontrast zu seiner sonst omnipräsenten medialen
        Rolle.</p>
        <p class="vb-intro"><strong>c) Öffentliche Dokumentation durch die eigene Tochter:</strong>
        Mikhaila Peterson berichtete während und nach der Krise ausführlich in eigenen
        Videos über den Verlauf – eine ungewöhnlich offene Begleitung einer
        Suchterkrankung durch ein Familienmitglied.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite mediale Aufmerksamkeit:</strong>
        Petersons Krise wurde international ausführlich berichtet – für viele eine
        überraschende Wendung im Leben einer Figur, die öffentlich für Selbstdisziplin
        und Ordnung stand.</p>
        <p class="vb-intro"><strong>b) Verzögerte, aber vollständige Rückkehr in die Öffentlichkeit:</strong>
        Nach monatelanger Genesung kehrte Peterson 2020/2021 schrittweise zu Vorträgen,
        Interviews und Veröffentlichungen zurück.</p>
        <p class="vb-intro"><strong>c) Offene spätere Verarbeitung in Interviews:</strong>
        Peterson sprach in den folgenden Jahren wiederholt öffentlich über die Krise,
        ohne sie zu verharmlosen oder auszublenden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Ordnung predigen, während das eigene Leben aus den Fugen geriet:</strong>
        Dieselbe SO1-Überzeugung, dass Chaos gefährlich und Ordnung eine moralische
        Pflicht ist, stand in scharfem Kontrast zu der Zeit, in der Peterson selbst die
        Kontrolle über den eigenen Körper verlor.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und das lange Aushalten, bevor Hilfe gesucht wurde:</strong>
        Die geduldige, auf Dauer angelegte Überzeugungskraft des Neunerflügels zeigte
        sich auch darin, dass die Familie über Monate verschiedene Behandlungswege
        ausprobierte, bevor der radikale Schritt nach Russland unternommen wurde.</p>
        <p class="vb-intro"><strong>c) Offenheit als späte Form der Prinzipientreue:</strong>
        Dass Peterson die eigene Krise später öffentlich und ungeschönt beschrieb, passt
        zur SO1-typischen Überzeugung, dass Wahrheit – auch die unbequeme, eigene –
        ausgesprochen werden muss.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Verstand, der Ordnung predigte, während der Körper sie verlor:</strong>
        Petersons gesamtes öffentliches Werk beruht auf der Überzeugung, dass Struktur
        und Selbstdisziplin über das Chaos siegen können – ausgerechnet er geriet in eine
        körperliche Krise, in der genau diese Kontrolle vollständig verloren ging.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet der Verstand, der klarste zu denken behauptete?</strong>
        Für einen sozialen Einser mit Neunerflügel, dessen gesamte öffentliche Autorität
        auf rationaler Klarheit und geordnetem Denken beruhte, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, mit dem er Millionen Menschen Ordnung predigte, wurde
        durch die Medikamentenabhängigkeit selbst zum Ort des Kontrollverlusts. Diese
        Deutung ist eine plausible Interpretation, kein belegter klinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Eins zwangsläufig zu
        Medikamentenabhängigkeit führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Petersons Fall zeigen
        lässt, ist ein Muster im Umgang mit einer überwundenen Abhängigkeitskrise, das
        bei einem ausgeprägten sozialen Einser mit Neunerflügel immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Peterson kennt sein eigenes Muster nicht als Enneagramm-Struktur – die soziale
        Eins mit Neunerflügel hält reflexhaft an der eigenen Ordnungsforderung fest,
        statt die eigene Verwundbarkeit rechtzeitig einzugestehen, und lebte genau dieses
        Muster bis zur akuten Krise unverändert aus. Wer die eigene Neigung, Kontrolle
        um jeden Preis aufrechtzuerhalten, nicht als Muster erkennt, riskiert, dass die
        Kontrolle erst im vollständigen Zusammenbruch endet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 1 mit Neunerflügel erklärt bei <strong>Jordan Peterson</strong>
        vieles am Verlauf seiner eigenen Abhängigkeitskrise: ein Mann, dessen gesamte
        öffentliche Autorität auf Ordnung und Selbstdisziplin beruhte, musste selbst die
        Erfahrung des vollständigen Kontrollverlusts durchleben, bevor er wieder Boden
        unter den Füßen fand – die Gans, die aus der Formation fiel und erst nach einem
        induzierten Koma zurück in den Schwarm fand.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-jordan-peterson", label:"Porträt: Dr. Jordan Peterson (SO1w9)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so1", label:"Subtyp-Profil SO1"},
      ])}
    </div>
  `);
}

function hundertwasserKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-hundertwasser-portrait.jpg" alt="Friedensreich Hundertwasser" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedensreich Hundertwasser</p>
        <p class="krim-portrait-typ">SX9w8 · Sexueller Typ 9 mit Achterflügel · 1928–2000</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Faultier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Tierentsprechung: Faultier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Friedensreich Hundertwasser</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-hundertwasser">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur beiläufig erwähnt wird: sein jahrelanges Herzleiden, das
        er weitgehend verschwieg, das er nicht schulmedizinisch behandeln ließ, und an dem
        er im Februar 2000 an Bord eines Schiffes starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hundertwasser</strong> ist dem <strong>sexuellen Typ 9 mit Achterflügel</strong>
        zugeordnet. Die SX9 sucht die restlose Verschmelzung mit einem Ideal – bei
        Hundertwasser: der Natur; der Achterflügel bringt die konfrontative Kraft hinzu, die
        das eigene Prinzip notfalls gegen jeden Widerstand durchsetzt. Genau diese
        Kombination – Verschmelzung mit einem naturnahen Ideal, kombiniert mit der
        Weigerung, sich fremder Autorität wie der Schulmedizin zu unterwerfen – bestimmte
        den Umgang mit der eigenen Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Herzleiden, das über Jahre bestand:</strong>
        Nach übereinstimmenden biografischen Quellen litt Hundertwasser in seinen letzten
        Lebensjahren an einer chronischen Herzschwäche, die sein Umfeld kannte, die er selbst
        aber kaum öffentlich thematisierte.</p>
        <p class="vb-intro"><strong>b) Ein Leben zwischen Wien, Neuseeland und dem Ozean:</strong>
        Hundertwasser verbrachte einen großen Teil seiner letzten Jahre auf Reisen zwischen
        seinen Wohnorten, häufig auf langen Schiffsüberfahrten statt per Flugzeug – eine
        bewusste Entscheidung für Langsamkeit statt Eile.</p>
        <p class="vb-intro"><strong>c) Zurückhaltung gegenüber schulmedizinischer Behandlung:</strong>
        Wie bei vielen Naturheilkunde-nahen Zeitgenossen seiner Generation dokumentiert,
        stand Hundertwasser einer aggressiven schulmedizinischen Intervention skeptisch
        gegenüber und bevorzugte einen Lebensstil in möglichst enger Naturverbundenheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unvermindertes Arbeitspensum trotz Erkrankung:</strong>
        Bis zuletzt reiste Hundertwasser für Ausstellungen, Bauprojekte und öffentliche
        Auftritte um die Welt, ohne das Tempo seines Lebens spürbar zu drosseln.</p>
        <p class="vb-intro"><strong>b) Die Schiffsreise als bevorzugte Fortbewegungsart:</strong>
        Er reiste regelmäßig mit dem Ozeandampfer <em>Queen Elizabeth 2</em> zwischen Europa
        und dem Pazifikraum – eine wochenlange, langsame Reiseform, die zu seinem
        Naturideal passte, aber im Ernstfall weit von schneller medizinischer Versorgung
        entfernt war.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Krankheitsdebatte:</strong>
        Anders als manche Zeitgenossen machte Hundertwasser sein Herzleiden nie zu einem
        öffentlichen Thema – es blieb, im Gegensatz zu seinen lautstarken Manifesten zu
        Architektur und Ökologie, eine private Angelegenheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod an Bord der Queen Elizabeth 2:</strong>
        Am 19. Februar 2000 starb Hundertwasser im Alter von 71 Jahren an Herzversagen an
        Bord des Schiffs, auf dem Weg zurück nach Neuseeland – mitten auf dem Pazifik, fernab
        jeder Klinik.</p>
        <p class="vb-intro"><strong>b) Bestattung nach eigenem, ungewöhnlichem Wunsch:</strong>
        Seinem testamentarisch festgelegten Wunsch folgend wurde er auf seinem Grundstück in
        Neuseeland ohne Sarg, in Leinen gehüllt, unter einem Tulpenbaum im „Garten der
        glücklichen Toten" bestattet – die letzte Konsequenz seines Verschmelzungsideals mit
        der Natur.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Ankündigung eines Rückzugs:</strong>
        Bis zu seinem Tod hatte Hundertwasser keine Anzeichen einer bevorstehenden
        Verlangsamung gezeigt – kein angekündigter Ruhestand, kein öffentliches Eingeständnis
        von Schwäche.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der zum Werk passte:</strong>
        Für viele Nachrufe wurde gerade die Umstände seines Todes – auf hoher See, fernab
        der Zivilisation, nach eigenem Wunsch bestattet – als konsequenter Abschluss eines
        Lebens gedeutet, das durchgängig gegen Konvention und für Naturverbundenheit
        gerichtet war.</p>
        <p class="vb-intro"><strong>b) Postumes Vermächtnis unverändert lebendig:</strong>
        Seine Bauten – das Hundertwasserhaus in Wien, die Grüne Zitadelle in Magdeburg, das
        KunstHausWien – blieben nach seinem Tod international besuchte Wahrzeichen und
        prägen bis heute das öffentliche Bild ökologischer Architektur.</p>
        <p class="vb-intro"><strong>c) Keine nachträgliche Verklärung der Krankheit:</strong>
        Anders als bei manchen Künstlern wurde sein Herzleiden nicht Teil der öffentlichen
        Legende – es blieb ein stiller, fast beiläufiger Teil seiner Biografie, während seine
        Manifeste und Bauten die öffentliche Erinnerung dominieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verschmelzung mit dem Reisetempo statt Anpassung an die Krankheit:</strong>
        Die SX9-typische Sehnsucht nach Verschmelzung mit einem größeren Ganzen zeigte sich
        auch darin, dass Hundertwasser sein Reisetempo – die langsame Schiffsüberfahrt statt
        des schnellen Fluges – nicht dem gesundheitlichen Risiko unterordnete, sondern seinem
        Naturideal treu blieb.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die Weigerung, Schwäche einzugestehen:</strong>
        Dieselbe konfrontative Kraft, mit der Hundertwasser sich bei seinen Nacktreden gegen
        gesellschaftliche Konventionen stellte, zeigte sich im Umgang mit der eigenen
        Krankheit als Weigerung, sich der Autorität der Schulmedizin oder der Erwartung
        eines ruhigeren Lebensstils zu beugen.</p>
        <p class="vb-intro"><strong>c) Die letzte Verschmelzung: Tod auf See, Bestattung in der Erde:</strong>
        Dass sein Leben auf dem Ozean endete und seine letzte Ruhestätte ohne Sarg, direkt in
        der Erde unter einem Baum liegt, lässt sich als äußerste Konsequenz seines
        lebenslangen Verschmelzungsideals lesen – kein Zufall, sondern die letzte
        Konsequenz eines durchgehaltenen Prinzips.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann, der Naturverbundenheit predigte und sich seiner eigenen Natur nicht entzog:</strong>
        Hundertwassers gesamtes Werk beruhte auf der Überzeugung, dass der Mensch sich der
        Natur nicht entgegenstellen, sondern mit ihr verschmelzen soll – auch seinem eigenen
        Körper und dessen Grenzen begegnete er am Ende genau mit dieser Haltung: kein Kampf,
        kein Widerstand, sondern ein Leben bis zum letzten Moment im gewohnten Tempo.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet das Herz?</strong>
        Für eine sexuelle Neun mit Achterflügel, deren gesamtes Werk um das Bild der
        Verschmelzung – Mensch mit Natur, Redner mit Publikum, Name mit Prinzip – kreiste,
        liegt eine Deutung nahe: Ausgerechnet jenes Organ, das im Volksmund für Verbindung
        und Hingabe steht, wurde bei ihm zum Ort des körperlichen Versagens. Diese Deutung
        ist eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Neun zwangsläufig zu Herzleiden führt
        – <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig vom
        Subtyp.</strong> Was sich an Hundertwassers Fall zeigen lässt, ist ein Muster im
        Umgang mit einer fortschreitenden Erkrankung, das bei einer ausgeprägten sexuellen
        Neun mit Achterflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach
        im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hundertwasser kannte sein eigenes Muster nicht als Enneagramm-Struktur – die
        sexuelle Neun mit Achterflügel hält reflexhaft an der Verschmelzung mit dem eigenen
        Ideal fest, statt rechtzeitig innezuhalten, und lebte genau dieses Muster bis zum
        letzten Tag unverändert aus, ohne das eigene Herzleiden je zum zentralen Thema zu
        machen. Wer die eigene Neigung, sich einem größeren Prinzip restlos zu unterwerfen,
        nicht als Muster erkennt, riskiert, dass diese Verschmelzung erst mit dem
        vollständigen körperlichen Zusammenbruch endet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Neun mit Achterflügel erklärt bei <strong>Friedensreich Hundertwasser</strong>
        viel über den Umgang mit der eigenen Krankheit: ein Mann, dessen gesamtes Lebenswerk
        der Verschmelzung mit der Natur galt, akzeptierte am Ende auch das eigene
        Herzversagen als Teil dieses natürlichen Kreislaufs – kein Kampf gegen den Tod,
        sondern das letzte, konsequenteste Verschmelzen des Faultiers mit dem Element, dem
        es sein ganzes Leben gewidmet hatte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-hundertwasser", label:"Porträt: Friedensreich Hundertwasser (SX9w8)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx9", label:"Subtyp-Profil SX9"},
      ])}
    </div>
  `);
}

function sadhguruKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-sadhguru-portrait.jpg" alt="Sadhguru" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sadhguru</p>
        <p class="krim-portrait-typ">SE3w2 · Selbsterhaltender Typ 3 mit Zweierflügel · geb. 1957</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sadhguru</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-sadhguru">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur kurz erwähnt wird: eine im März 2024 diagnostizierte
        chronische Hirnblutung, die trotz wochenlanger Kopfschmerzen bis zur Notoperation
        unbehandelt blieb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Sadhguru</strong> ist dem <strong>selbsterhaltenden Typ 3 mit Zweierflügel</strong>
        zugeordnet. Die SE3 investiert ihre Energie in Wirksamkeit statt in Image – auch dann,
        wenn der eigene Körper längst Signale sendet; der Zweierflügel bringt den Antrieb hinzu,
        für andere da zu sein, oft auf Kosten der eigenen Fürsorge für sich selbst. Genau diese
        Kombination – unbeirrtes Funktionieren trotz körperlicher Warnsignale, verbunden mit
        einem Terminkalender, der für niemand anderen unterbrochen wird als für die eigene
        Erkrankung – bestimmte den Verlauf bis zur Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Wochenlange Kopfschmerzen vor der Diagnose:</strong>
        Nach eigener und ärztlicher Schilderung litt Sadhguru über mehrere Wochen unter
        anhaltenden, sich verschlimmernden Kopfschmerzen, ohne dass er seinen öffentlichen
        Terminkalender unterbrach.</p>
        <p class="vb-intro"><strong>b) Kein sofortiger Rückzug aus der Öffentlichkeit:</strong>
        Trotz zunehmender Beschwerden hielt er weiterhin Vorträge, Reisen und öffentliche
        Auftritte aufrecht, bis die Symptomatik nicht mehr zu ignorieren war.</p>
        <p class="vb-intro"><strong>c) Akute Verschlechterung im März 2024:</strong>
        Erst eine deutliche Zuspitzung der Beschwerden führte schließlich zur ärztlichen
        Untersuchung und zur bildgebenden Diagnostik.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Diagnose: chronisches subdurales Hämatom:</strong>
        Eine MRT-Untersuchung ergab eine chronische Blutung unter der harten Hirnhaut von
        etwa drei bis vier Wochen Dauer, überlagert von einer frischen Nachblutung der
        vorangegangenen ein bis zwei Tage.</p>
        <p class="vb-intro"><strong>b) Notfalloperation am 17. März 2024:</strong>
        Aufgrund der akuten Verschlechterung wurde Sadhguru umgehend operiert, um den
        Druck auf das Gehirn zu entlasten.</p>
        <p class="vb-intro"><strong>c) Keine erkennbare äußere Ursache:</strong>
        Anders als bei vielen subduralen Hämatomen ließ sich kein eindeutiger auslösender
        Sturz oder Unfall feststellen – die Isha Foundation kommunizierte öffentlich, dass die
        genaue Ursache unklar blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Rasche postoperative Genesung:</strong>
        Nach der Operation erholte sich Sadhguru nach öffentlichen Angaben schnell und kehrte
        binnen weniger Wochen zu einem Teil seiner Aktivitäten zurück.</p>
        <p class="vb-intro"><strong>b) Öffentliche Kommunikation durch die eigene Organisation:</strong>
        Die Isha Foundation informierte in mehreren offiziellen Mitteilungen über Diagnose,
        Operation und Genesungsverlauf – eine für einen spirituellen Lehrer ungewöhnlich
        transparente medizinische Kommunikation.</p>
        <p class="vb-intro"><strong>c) Fortsetzung des öffentlichen Wirkens kurz danach:</strong>
        Bereits kurze Zeit nach dem Eingriff nahm Sadhguru wieder öffentliche Termine wahr,
        wenn auch zunächst in reduziertem Umfang.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite mediale Aufmerksamkeit:</strong>
        Die Nachricht von der Notoperation eines der bekanntesten spirituellen Lehrer der
        Gegenwart löste international Berichterstattung und eine Welle öffentlicher
        Anteilnahme aus.</p>
        <p class="vb-intro"><strong>b) Fragen nach der Selbstwahrnehmung eines Gesundheitslehrers:</strong>
        Da Sadhguru selbst regelmäßig über Körperbewusstsein und Selbstfürsorge lehrt, warf
        der Vorfall bei manchen Beobachtern die Frage auf, warum die eigenen Warnsignale so
        lange ignoriert wurden.</p>
        <p class="vb-intro"><strong>c) Keine grundsätzliche Neuausrichtung des Lebensstils:</strong>
        Trotz der Warnung durch die eigene Erkrankung setzte Sadhguru sein intensives
        Reise- und Vortragsprogramm nach der Genesung im Wesentlichen fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Funktionieren als Standardreaktion auf Schmerz:</strong>
        Die SE3-typische Ausrichtung auf Wirksamkeit statt Selbstinszenierung zeigte sich
        auch darin, dass Sadhguru wochenlange Kopfschmerzen nicht zum Anlass für einen
        Rückzug nahm, sondern seinen Terminkalender unverändert fortführte.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und die offene Kommunikation nach außen:</strong>
        Dass die Isha Foundation die Diagnose und Behandlung transparent öffentlich machte,
        passt zur Zweierflügel-typischen Zuwendung: Selbst im eigenen medizinischen
        Ausnahmezustand blieb der Impuls erhalten, die Millionen Anhänger nicht im
        Ungewissen zu lassen, sondern einzubeziehen.</p>
        <p class="vb-intro"><strong>c) Schnelle Rückkehr in die Wirksamkeit:</strong>
        Die rasche Wiederaufnahme öffentlicher Termine nach der Operation folgt demselben
        SE3-Muster wie das Ignorieren der Symptome zuvor: Selbstwert über Funktionieren, kaum
        Raum für eine längere Pause.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Lehrer der Körperwahrnehmung, der die eigenen Warnsignale überging:</strong>
        Sadhgurus gesamtes Werk kreist um die Idee, den eigenen Körper und Geist bewusst
        wahrzunehmen und zu kultivieren – ausgerechnet er ignorierte wochenlange
        Kopfschmerzen, bis eine Notoperation unausweichlich wurde.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet der Kopf, das Zentrum seiner Lehre?</strong>
        Für einen selbsterhaltenden Typ 3 mit Zweierflügel, dessen gesamte öffentliche
        Autorität auf innerer Klarheit und bewusster Körperbeherrschung beruhte, liegt eine
        Deutung nahe: Ausgerechnet jenes Organ, mit dem er Millionen Menschen "inneres
        Engineering" lehrte, wurde zum Ort einer über Wochen unbemerkt fortschreitenden
        Blutung. Diese Deutung ist eine plausible Interpretation, kein belegter klinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei zwangsläufig zu
        Hirnblutungen führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Sadhgurus Fall zeigen lässt, ist ein
        Muster im Umgang mit körperlichen Warnsignalen, das bei einem ausgeprägten
        selbsterhaltenden Typ 3 immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Sadhguru kennt sein eigenes Muster nicht als Enneagramm-Struktur – der
        selbsterhaltende Typ 3 hält reflexhaft am eigenen Funktionieren fest, statt
        körperliche Warnsignale rechtzeitig ernst zu nehmen, und lebt genau dieses Muster bis
        heute weitgehend unverändert aus. Wer die eigene Neigung, Beschwerden dem
        Terminkalender unterzuordnen, nicht als Muster erkennt, riskiert, dass der Körper die
        Pause selbst erzwingt – notfalls durch einen Zusammenbruch.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 3 mit Zweierflügel erklärt bei <strong>Sadhguru</strong> vieles
        am Verlauf seiner Erkrankung: ein Mann, dessen gesamte öffentliche Autorität auf
        innerer Klarheit und ungebrochener Wirksamkeit beruhte, musste selbst die Erfahrung
        machen, dass wochenlanges Funktionieren körperliche Warnsignale nicht zum
        Verschwinden bringt – der Waschbär, der so lange weitermachte, bis der Körper die
        Notbremse zog.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-sadhguru", label:"Porträt: Sadhguru (SE3w2)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se3", label:"Subtyp-Profil SE3"},
      ])}
    </div>
  `);
}

function umbertoEcoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-umberto-eco-portrait.jpg" alt="Dr. Umberto Eco" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Umberto Eco</p>
        <p class="krim-portrait-typ">SE8w7 · Selbsterhaltender Typ 8 mit Siebenerflügel · 1932–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Orang-Utan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Tierentsprechung: Orang-Utan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Umberto Eco</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-umberto-eco">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur beiläufig erwähnt wird: eine rund zwei Jahre lang nahezu
        vollständig privat gehaltene Bauchspeicheldrüsenkrebs-Erkrankung, während der Eco
        bis wenige Monate vor seinem Tod im Februar 2016 unvermindert publizierte, lehrte
        und öffentlich auftrat.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Eco</strong> ist dem <strong>selbsterhaltenden Typ 8 mit Siebenerflügel</strong>
        zugeordnet. Die SE8 sichert sich Fülle und Unabhängigkeit, statt sich einer fremden
        Autorität – auch der eigenen Diagnose – zu unterwerfen; der Siebenerflügel bringt
        die Leichtigkeit, mit der Eco selbst eine tödliche Diagnose nicht zum
        beherrschenden Thema seines Lebens werden ließ. Genau diese Kombination – Fülle und
        Genuss bis zuletzt, verbunden mit der Weigerung, sich als kranker Mann zu inszenieren
        – bestimmte den Umgang mit der eigenen Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose rund zwei Jahre vor seinem Tod:</strong>
        Nach übereinstimmenden biografischen Quellen wurde bei Eco etwa zwei Jahre vor
        seinem Tod ein Bauchspeicheldrüsenkarzinom diagnostiziert.</p>
        <p class="vb-intro"><strong>b) Fast vollständige Geheimhaltung im öffentlichen Leben:</strong>
        Anders als bei vielen Prominenten blieb die Diagnose außerhalb seines engsten
        Umfelds weitgehend unbekannt – Eco sprach in Interviews und öffentlichen Auftritten
        praktisch nicht über seine Erkrankung.</p>
        <p class="vb-intro"><strong>c) Unvermindertes literarisches Schaffen:</strong>
        Trotz der Diagnose veröffentlichte Eco 2015 mit „Nullnummer" seinen letzten Roman –
        ein Werk, das keinerlei Anzeichen einer nachlassenden Schaffenskraft erkennen ließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fortgesetzte öffentliche Auftritte bis kurz vor dem Tod:</strong>
        Eco hielt Vorträge, gab Interviews und nahm an öffentlichen Diskussionen teil, bis
        wenige Monate vor seinem Tod – ohne dass Beobachter von seiner schweren Erkrankung
        wussten.</p>
        <p class="vb-intro"><strong>b) Keine öffentliche Krankheitsnarrative:</strong>
        Im Unterschied zu anderen Intellektuellen seiner Generation machte Eco seine
        Krankheit nie zum Gegenstand eines Essays, einer Kolumne oder eines Interviews –
        eine bewusste Entscheidung zur Trennung von Werk und privatem Leiden.</p>
        <p class="vb-intro"><strong>c) Familiäre statt öffentliche Begleitung:</strong>
        Die letzten Monate verbrachte Eco im Kreis seiner Familie in Mailand, weitgehend
        abgeschirmt von öffentlicher Aufmerksamkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 19. Februar 2016 in Mailand:</strong>
        Umberto Eco starb im Alter von 84 Jahren in seiner Wohnung in Mailand, umgeben von
        seiner Familie.</p>
        <p class="vb-intro"><strong>b) Weltweite Anteilnahme nach der offiziellen Bekanntgabe:</strong>
        Erst mit der Todesnachricht wurde die Öffentlichkeit über die Krebserkrankung
        informiert – für viele Leser und Kollegen eine Überraschung, da Eco bis zuletzt
        keinerlei Rückzug angedeutet hatte.</p>
        <p class="vb-intro"><strong>c) Kein Abschiedswerk im engeren Sinne:</strong>
        Anders als manche Autoren, die im Angesicht des Todes ein explizites Vermächtniswerk
        verfassen, hinterließ Eco kein Buch, das offen als Abschied von der eigenen
        Sterblichkeit gelesen werden konnte – „Nullnummer" bleibt ein Roman über
        Medienmanipulation, kein Krankheitsbuch.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Trauer und Würdigung:</strong>
        Ecos Tod löste international Nachrufe und Würdigungen aus, die vor allem sein
        enzyklopädisches Werk und seine intellektuelle Neugier bis ins hohe Alter
        hervorhoben.</p>
        <p class="vb-intro"><strong>b) Überraschung über das Ausmaß der Geheimhaltung:</strong>
        Zahlreiche Weggefährten äußerten sich überrascht, wie vollständig Eco seine Krankheit
        vor der Öffentlichkeit und sogar vor Teilen seines beruflichen Umfelds verborgen
        hatte.</p>
        <p class="vb-intro"><strong>c) Ein Bild ungebrochener Vitalität bis zuletzt:</strong>
        Das öffentliche Bild, das von Eco bis zu seinem Tod bestand, war das eines
        unermüdlich neugierigen, produktiven Intellektuellen – nicht das eines schwer
        kranken Mannes.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Fülle statt Rückzug als Antwort auf die Diagnose:</strong>
        Die SE8-typische Überzeugung, dass Sicherheit aus Fülle entsteht, zeigte sich darin,
        dass Eco seine Produktivität, seine Lektüren, seine Sammlungen und seine öffentlichen
        Auftritte trotz der Diagnose nicht reduzierte, sondern bis zuletzt fortführte.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und die Weigerung, sich als Kranker zu inszenieren:</strong>
        Dieselbe Leichtigkeit, mit der Eco selbst über Semiotik und Trivialkultur mit
        derselben Neugier schrieb, zeigte sich im Umgang mit der eigenen Krankheit als
        bewusste Entscheidung, die eigene Sterblichkeit nicht zum öffentlichen Thema zu
        machen.</p>
        <p class="vb-intro"><strong>c) Kontrolle durch Diskretion statt durch Konfrontation:</strong>
        Anders als eine konfrontativere Acht wählte Eco nicht den offenen Kampf gegen die
        Krankheit als öffentliche Geste, sondern die vollständige Kontrolle über die
        Information selbst – Macht durch Schweigen statt durch Auftritt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Sammler der Fülle, der die eigene Endlichkeit nicht sammeln ließ:</strong>
        Ecos gesamtes Werk beruhte auf der Überzeugung, dass Wissen, Bücher und Erfahrung
        sich unbegrenzt anhäufen lassen – ausgerechnet die eine Grenze, die sich nicht
        aufschieben ließ, blieb aus seinem öffentlichen Werk vollständig ausgespart.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet die Bauchspeicheldrüse, das stille Organ?</strong>
        Für einen selbsterhaltenden Typ 8 mit Siebenerflügel, dessen gesamtes Lebensprinzip
        Fülle, Genuss und die enzyklopädische Aneignung der Welt war, liegt eine Deutung
        nahe: Ausgerechnet ein Organ, das lange symptomlos bleibt und sich jeder frühen
        Kontrolle entzieht, wurde zum Ort einer Krankheit, die Eco bis zuletzt nicht öffentlich
        zu kontrollieren versuchte, sondern schlicht verschwieg. Diese Deutung ist eine
        plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Acht zwangsläufig zu
        Bauchspeicheldrüsenkrebs führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Ecos Fall zeigen lässt, ist
        ein Muster im Umgang mit einer tödlichen Diagnose, das bei einem ausgeprägten
        selbsterhaltenden Typ 8 immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Eco kannte sein eigenes Muster nicht als Enneagramm-Struktur – der selbsterhaltende
        Typ 8 hält reflexhaft an der eigenen Souveränität über die persönliche Information
        fest, statt die eigene Verwundbarkeit rechtzeitig mit anderen zu teilen, und lebte
        genau dieses Muster bis zum letzten Werk unverändert aus. Wer die eigene Neigung, die
        Kontrolle über das eigene Bild um jeden Preis zu wahren, nicht als Muster erkennt,
        riskiert, dass die Wahrheit erst mit dem Tod selbst ans Licht kommt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 8 mit Siebenerflügel erklärt bei <strong>Umberto Eco</strong>
        vieles am Umgang mit der eigenen Krankheit: ein Mann, dessen gesamtes Werk auf der
        lustvollen Fülle des Wissens beruhte, behandelte auch die eigene tödliche Diagnose als
        privates Territorium, das niemand betreten durfte – der Orang-Utan, der bis zuletzt in
        seinem Baum thronte und niemanden sehen ließ, dass der Ast bereits brach.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-umberto-eco", label:"Porträt: Umberto Eco (SE8w7)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se8", label:"Subtyp-Profil SE8"},
      ])}
    </div>
  `);
}

function gretaThunbergKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-greta-thunberg-portrait.jpg" alt="Greta Thunberg" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Greta Thunberg</p>
        <p class="krim-portrait-typ">SE2w1 · Selbsterhaltender Typ 2 mit Einserflügel · geb. 2003</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Greta Thunberg</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-greta-thunberg">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur kurz erwähnt wird: eine schwere depressive Episode mit
        Essstörung und selektivem Mutismus im Alter von etwa elf Jahren, mehrere Monate vor
        der Diagnose von Asperger-Syndrom und Zwangsstörung.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Thunberg</strong> ist dem <strong>selbsterhaltenden Typ 2 mit Einserflügel</strong>
        zugeordnet. Die SE2 nimmt Bedrohungen der eigenen Existenzgrundlage unmittelbar
        körperlich wahr, statt sie zu abstrahieren; der Einserflügel bringt eine moralische
        Klarheit hinzu, die keine Kompromisse zulässt. Genau diese Kombination – eine als
        existenziell erlebte Bedrohung, gekoppelt mit der Unfähigkeit, sich mit einer aus
        eigener Sicht unerträglichen Realität zu arrangieren – bestimmte den Verlauf ihrer
        eigenen psychischen Krise.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginn im Alter von etwa acht Jahren:</strong>
        Nach eigener und familiärer Schilderung begann Thunberg bereits im Grundschulalter
        zu verstehen, welche Ausmaße der Klimawandel hat – ein Wissen, das sie zunehmend
        belastete, während ihre Umgebung kaum reagierte.</p>
        <p class="vb-intro"><strong>b) Zunehmender Rückzug im Alter von elf Jahren:</strong>
        Um das Jahr 2014 verschlechterte sich ihr Zustand deutlich: Sie aß kaum noch, verlor
        erheblich an Gewicht und sprach zeitweise fast gar nicht mehr.</p>
        <p class="vb-intro"><strong>c) Diagnose einer schweren Depression:</strong>
        Ärzte diagnostizierten eine schwere depressive Episode, begleitet von einer
        Essstörung und selektivem Mutismus – einem Zustand, in dem Sprechen in bestimmten
        Situationen nicht mehr möglich ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Monatelanger Schulausfall:</strong>
        Über mehrere Monate hinweg konnte Thunberg nach Angaben ihrer Familie nicht regelmäßig
        die Schule besuchen.</p>
        <p class="vb-intro"><strong>b) Spätere Diagnose von Asperger-Syndrom und Zwangsstörung:</strong>
        Im weiteren Verlauf wurden zusätzlich Asperger-Syndrom und eine Zwangsstörung
        diagnostiziert – Diagnosen, die Thunberg später selbst öffentlich als Teil ihrer
        Identität beschrieb, nicht als Makel.</p>
        <p class="vb-intro"><strong>c) Familiäre Begleitung als zentraler Faktor:</strong>
        Ihre Eltern, insbesondere ihre Mutter, beschrieben in einem gemeinsam verfassten
        Buch ausführlich, wie die gesamte Familie ihren Alltag über Monate an Gretas Zustand
        ausrichtete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Handeln als Ausweg aus der Krise:</strong>
        Nach eigener Aussage begann sich ihr Zustand erst zu bessern, als sie begann, sich
        aktiv für den Klimaschutz einzusetzen – zunächst innerhalb der Familie, dann
        öffentlich.</p>
        <p class="vb-intro"><strong>b) Der Schulstreik als konkretisierter Handlungsimpuls:</strong>
        Der Schulstreik vor dem schwedischen Reichstag im August 2018 markierte den Punkt, an
        dem aus innerer Belastung eine nach außen gerichtete, strukturierte Handlung wurde.</p>
        <p class="vb-intro"><strong>c) Offener Umgang mit der eigenen Geschichte seither:</strong>
        Anders als viele öffentliche Personen sprach Thunberg von Beginn an offen über diese
        Krise, statt sie zu verschweigen oder zu verharmlosen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Aufmerksamkeit für ein selten offen thematisiertes Muster:</strong>
        Thunbergs Offenheit über Depression, Essstörung und Neurodivergenz bei einer so
        jungen, öffentlich extrem sichtbaren Person löste international Diskussionen über
        psychische Gesundheit bei Jugendlichen aus.</p>
        <p class="vb-intro"><strong>b) Verknüpfung von persönlicher Krise und politischem Engagement:</strong>
        Für viele wurde ihre Geschichte zum Beispiel dafür, wie aus einer individuellen
        psychischen Krise eine globale Bewegung entstehen kann, ohne dass die Krise selbst
        verklärt wird.</p>
        <p class="vb-intro"><strong>c) Anhaltende öffentliche Neugier auf ihre Diagnosen:</strong>
        Bis heute wird Thunbergs Neurodivergenz in Medien immer wieder aufgegriffen – von ihr
        selbst konsequent als Stärke, nicht als Einschränkung dargestellt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Existenzielle statt abstrakte Wahrnehmung der Bedrohung:</strong>
        Die SE2-typische Unmittelbarkeit zeigte sich schon in der Kindheit: Der Klimawandel
        war für die junge Greta keine ferne Nachricht, sondern eine körperlich spürbare
        Bedrohung der eigenen Zukunft – genau jene Direktheit, die Jahre später ihre gesamte
        öffentliche Sprache prägen sollte.</p>
        <p class="vb-intro"><strong>b) Der Einserflügel und die Unmöglichkeit der Verdrängung:</strong>
        Während andere Kinder das Wissen um den Klimawandel verdrängen oder relativieren
        konnten, ließ der Einserflügel bei Thunberg keinen Kompromiss mit der als falsch
        erkannten Realität zu – ein Muster, das die Krise verschärfte, bevor es später zur
        Quelle ihrer Entschlossenheit wurde.</p>
        <p class="vb-intro"><strong>c) Vom stummen Rückzug zur lauten Stimme:</strong>
        Der selektive Mutismus – das Verstummen angesichts einer unerträglichen Realität –
        und die spätere, weltweit gehörte Stimme sind zwei Seiten desselben Musters: Solange
        keine Handlung möglich schien, verstummte sie; sobald Handlung möglich wurde, sprach
        sie so klar wie kaum jemand sonst.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme, die erst verstummte, bevor sie zur lautesten wurde:</strong>
        Thunbergs gesamtes öffentliches Wirken beruht auf der Fähigkeit, unbequeme Wahrheiten
        unmissverständlich auszusprechen – bevor sie diese Stimme fand, verlor sie sie
        vollständig, als dieselbe Wahrheit noch keinen Ausweg zuließ.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet das Schweigen und der Hunger?</strong>
        Für eine selbsterhaltende Zwei mit Einserflügel, deren gesamtes späteres Wirken auf
        unmittelbarer, körperlich gespürter Dringlichkeit beruhte, liegt eine Deutung nahe:
        Ausgerechnet die beiden Grundfunktionen, mit denen der Körper sich Gehör verschafft
        – Sprechen und Essen – wurden vorübergehend zum Ort, an dem sich die als unerträglich
        erlebte Bedrohung ausdrückte. Diese Deutung ist eine plausible Interpretation, kein
        belegter klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        Depression und Essstörung führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Thunbergs Fall zeigen lässt,
        ist ein Muster im Umgang mit einer als existenziell erlebten Bedrohung, das bei einer
        ausgeprägten selbsterhaltenden Zwei mit Einserflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Thunberg kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die selbsterhaltende
        Zwei mit Einserflügel erlebt Bedrohungen der eigenen Existenzgrundlage reflexhaft als
        unmittelbar körperlich, statt frühzeitig einen Ausgleich zwischen Dringlichkeit und
        Selbstfürsorge zu finden, und lebt genau dieses Muster bis heute weitgehend
        unverändert aus. Wer die eigene Neigung, existenzielle Bedrohungen ungefiltert am
        eigenen Körper auszutragen, nicht als Muster erkennt, riskiert, dass sich die Krise
        wiederholt, sobald keine Handlungsmöglichkeit mehr sichtbar ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 2 mit Einserflügel erklärt bei <strong>Greta Thunberg</strong>
        vieles am Verlauf ihrer psychischen Krise: ein Mädchen, das eine globale Bedrohung so
        unmittelbar körperlich erlebte wie kaum jemand sonst, verstummte zunächst vollständig
        – und fand seine Stimme erst wieder, als aus stiller Verzweiflung konkretes Handeln
        wurde. Das Flusspferd, das erst regungslos im Wasser verharrte, bevor es den ganzen
        Strom umlenkte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-greta-thunberg", label:"Porträt: Greta Thunberg (SE2w1)"},
        {route:"krankheitsportraets-natascha-kampusch", label:"Krankheitsporträt: Natascha Kampusch (SE2w1)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

function bobMarleyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-bob-marley-portrait.jpg" alt="Bob Marley" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bob Marley</p>
        <p class="krim-portrait-typ">SO2w1 · Sozialer Typ 2 mit Einserflügel · 1945–1981</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Bob Marley</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-bob-marley">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur kurz erwähnt wird: ein 1977 entdecktes malignes Melanom an
        der Zehe, dessen dringend empfohlene Amputation Marley aus religiösen Gründen
        ablehnte – eine Entscheidung, die seinen frühen Tod im Alter von 36 Jahren
        mitbestimmte.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Marley</strong> ist dem <strong>sozialen Typ 2 mit Einserflügel</strong>
        zugeordnet. Die SO2 stellt ihre Fürsorge in den Dienst eines größeren Anliegens,
        nicht der eigenen Person; der Einserflügel gibt dieser Fürsorge eine moralische
        Gewissheit, die keinen Kompromiss kennt. Genau diese Kombination – die eigene
        Gesundheit dem übergeordneten Auftrag und der religiösen Überzeugung
        unterzuordnen – bestimmte den Verlauf seiner Krankheit bis zum Tod.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Verletzung beim Fußballspielen 1977:</strong>
        Eine Verletzung an der großen Zehe des rechten Fußes, die zunächst als
        Sportverletzung galt, heilte nicht wie erwartet ab.</p>
        <p class="vb-intro"><strong>b) Diagnose eines malignen Melanoms:</strong>
        Ärzte diagnostizierten ein akrolentiginöses malignes Melanom – eine besonders
        aggressive Hautkrebsform, die häufig an Händen und Füßen auftritt und dort oft spät
        erkannt wird.</p>
        <p class="vb-intro"><strong>c) Dringende Empfehlung zur Amputation:</strong>
        Die behandelnden Ärzte rieten zur Amputation der Zehe, um eine Ausbreitung des
        Tumors zu verhindern – eine aus medizinischer Sicht dringliche Maßnahme.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ablehnung der Amputation aus religiösen Gründen:</strong>
        Marley lehnte den Eingriff ab, da der Rastafari-Glaube die Unversehrtheit des
        Körpers als heilig ansieht – eine Entscheidung, die er trotz der ärztlichen
        Dringlichkeit nicht revidierte.</p>
        <p class="vb-intro"><strong>b) Fortsetzung des Tourprogramms:</strong>
        Statt sich behandeln zu lassen, setzte Marley seine intensive Tour- und
        Aufnahmetätigkeit über Jahre nahezu unverändert fort.</p>
        <p class="vb-intro"><strong>c) Ausbreitung des Krebses über mehrere Jahre:</strong>
        In den folgenden Jahren metastasierte der Krebs unbemerkt in Lunge, Leber und
        Gehirn, bis die Erkrankung 1980 nicht mehr zu übersehen war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Zusammenbruch beim Joggen im September 1980:</strong>
        Während einer Tour durch die USA brach Marley beim Joggen im Central Park
        zusammen – ein Ereignis, das den fortgeschrittenen Zustand seiner Erkrankung
        öffentlich sichtbar machte.</p>
        <p class="vb-intro"><strong>b) Letzter öffentlicher Auftritt kurz danach:</strong>
        Nur wenige Tage später gab Marley in Pittsburgh sein letztes Konzert, ohne dass das
        Publikum vom Ausmaß seiner Erkrankung wusste.</p>
        <p class="vb-intro"><strong>c) Erfolglose Behandlungsversuche in Deutschland:</strong>
        Anschließend suchte Marley eine alternative Krebsbehandlung bei einem Arzt in
        Bayern auf, die den fortgeschrittenen Krebs jedoch nicht mehr aufhalten konnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 11. Mai 1981 in Miami:</strong>
        Bob Marley starb im Alter von nur 36 Jahren auf dem Rückweg von der Behandlung in
        Deutschland nach Jamaika, in einem Krankenhaus in Miami.</p>
        <p class="vb-intro"><strong>b) Weltweite Trauer und posthumer Ruhm:</strong>
        Marleys Tod löste weltweite Trauer aus und markierte zugleich den Beginn eines bis
        heute ungebrochenen posthumen Ruhms als globale Reggae-Ikone.</p>
        <p class="vb-intro"><strong>c) Bis heute diskutierte Entscheidung:</strong>
        Marleys Ablehnung der Amputation wird bis heute als eines der bekanntesten Beispiele
        dafür diskutiert, wie religiöse Überzeugung eine medizinisch dringend gebotene
        Behandlung verhindern kann.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Fürsorge für ein ganzes Volk, nicht für sich selbst:</strong>
        Die SO2-typische Ausrichtung auf ein größeres Anliegen zeigte sich auch im Umgang
        mit der eigenen Krankheit: Marley setzte seine Tourneen fort, weil die Botschaft für
        die Vielen wichtiger schien als die eigene Gesundheit.</p>
        <p class="vb-intro"><strong>b) Der Einserflügel und die unbedingte religiöse Überzeugung:</strong>
        Dieselbe Kompromisslosigkeit, mit der Marley zwei Tage nach dem Attentat 1976 mit
        der Kugel im Arm auftrat, zeigte sich im Umgang mit der Krebsdiagnose als Weigerung,
        eine als religiös falsch erkannte Behandlung überhaupt in Erwägung zu ziehen.</p>
        <p class="vb-intro"><strong>c) Der eigene Körper als Teil einer größeren Ordnung:</strong>
        Für Marley war der eigene Körper nicht getrennt von seinem Glauben zu betrachten –
        die Weigerung, sich amputieren zu lassen, war keine Verdrängung der Krankheit,
        sondern die konsequente Anwendung derselben moralischen Gewissheit, die auch seine
        Musik trug.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann, der für die Unversehrtheit eines Volkes kämpfte und die eigene Unversehrtheit über sein Leben stellte:</strong>
        Marleys gesamtes Werk kreiste um die Versöhnung, Heilung und Würde eines
        unterdrückten Volkes – ausgerechnet er stellte die religiöse Vorstellung der eigenen
        körperlichen Unversehrtheit über die medizinisch dringend gebotene Behandlung, bis
        die Krankheit sich seiner Kontrolle entzog.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine auffällige Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-muhammad-ali">Muhammad
        Ali (SO2w1)</a>: Auch Ali ignorierte über Jahre gesundheitliche Warnzeichen im
        Boxsport, weil eine als moralisch richtig erkannte Sache – bei Ali der Kampf im
        Ring, bei Marley die religiöse Überzeugung – wichtiger erschien als die eigene
        körperliche Unversehrtheit. Bei beiden SO2w1ern zeigt sich dasselbe Muster: eine
        Gewissheit, im Recht zu sein, die auch das eigene Leben der übergeordneten Sache
        unterordnet.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Zehe, der Kontaktpunkt zur Erde?</strong>
        Für eine soziale Zwei mit Einserflügel, deren gesamtes Werk um Verwurzelung,
        Herkunft und die Rückkehr zu den eigenen Wurzeln kreiste, liegt eine Deutung nahe:
        Ausgerechnet jener Körperteil, der den Kontakt zum Boden herstellt, wurde zum
        Ausgangspunkt einer Krankheit, die er nicht rechtzeitig behandeln ließ. Diese Deutung
        ist eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu einer verweigerten
        Krebsbehandlung führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Marleys Fall zeigen lässt, ist ein Muster
        im Umgang mit einer lebensbedrohlichen Diagnose, das bei einem ausgeprägten sozialen
        Typ 2 mit Einserflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Marley kannte sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 2
        mit Einserflügel hält reflexhaft an der eigenen moralischen Gewissheit fest, statt
        die eigene Verwundbarkeit rechtzeitig ernst zu nehmen, und lebte genau dieses Muster
        bis zum Tod unverändert aus. Wer die eigene Neigung, eine als richtig erkannte
        Überzeugung über die eigene körperliche Sicherheit zu stellen, nicht als Muster
        erkennt, riskiert, dass genau diese Überzeugung das eigene Leben verkürzt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 2 mit Einserflügel erklärt bei <strong>Bob Marley</strong> vieles am
        Verlauf seiner Krankheit: ein Mann, dessen gesamtes Werk der Heilung eines Volkes
        galt, unterwarf die eigene Heilung derselben unbedingten religiösen Überzeugung, die
        ihn weltberühmt gemacht hatte – der Golden Retriever, der bis zuletzt für andere da
        war und die eigene Wunde nicht rechtzeitig versorgen ließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-bob-marley", label:"Porträt: Bob Marley (SO2w1)"},
        {route:"krankheitsportraets-muhammad-ali", label:"Krankheitsporträt: Muhammad Ali (SO2w1) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

function angelinaJolieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-angelina-jolie-portrait.jpg" alt="Angelina Jolie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Angelina Jolie</p>
        <p class="krim-portrait-typ">SO1w2 · Sozialer Typ 1 mit Zweierflügel · geb. 1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gans</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Tierentsprechung: Gans" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Angelina Jolie</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-angelina-jolie">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur kurz erwähnt wird: eine 2013 öffentlich gemachte
        vorbeugende doppelte Mastektomie aufgrund einer BRCA1-Genmutation, gefolgt 2015 von
        der Entfernung von Eierstöcken und Eileitern – beides bewusst öffentlich
        kommuniziert.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Jolie</strong> ist dem <strong>sozialen Typ 1 mit Zweierflügel</strong>
        zugeordnet. Die SO1 kann nicht nicht-handeln, wenn Handlung möglich ist – auch bei
        der eigenen Gesundheit; der Zweierflügel bringt das direkte, persönliche Mitgefühl
        hinzu, das aus einer privaten medizinischen Entscheidung eine öffentliche Botschaft
        macht. Genau diese Kombination – Pflicht zum Richtigen, verbunden mit dem Wunsch,
        anderen durch die eigene Offenheit zu nützen – bestimmte den Umgang mit der eigenen
        genetischen Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Belastete Familiengeschichte:</strong>
        Jolies Mutter Marcheline Bertrand starb 2007 an Eierstockkrebs im Alter von 56
        Jahren, ihre Großmutter mütterlicherseits an Eierstockkrebs, ihre Tante an
        Brustkrebs – eine familiäre Häufung, die einen genetischen Test nahelegte.</p>
        <p class="vb-intro"><strong>b) Nachweis der BRCA1-Genmutation:</strong>
        Ein Gentest bestätigte bei Jolie eine Mutation im BRCA1-Gen, die das Risiko für
        Brust- und Eierstockkrebs statistisch erheblich erhöht.</p>
        <p class="vb-intro"><strong>c) Ärztlich geschätztes Risiko von rund 87 Prozent:</strong>
        Nach ärztlicher Einschätzung lag ihr persönliches Risiko, im Laufe ihres Lebens an
        Brustkrebs zu erkranken, bei etwa 87 Prozent, das Risiko für Eierstockkrebs bei etwa
        50 Prozent.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Präventive doppelte Mastektomie 2013:</strong>
        Zwischen Februar und April 2013 unterzog sich Jolie einer vorbeugenden doppelten
        Mastektomie mit anschließender Rekonstruktion, um das Brustkrebsrisiko drastisch zu
        senken.</p>
        <p class="vb-intro"><strong>b) Öffentliche Ankündigung per Zeitungsessay:</strong>
        Statt die Operation privat zu halten, veröffentlichte Jolie im Mai 2013 einen
        ausführlichen Essay in der New York Times unter dem Titel „My Medical Choice", in
        dem sie ihre Entscheidung und deren medizinische Grundlage detailliert erklärte.</p>
        <p class="vb-intro"><strong>c) Entfernung von Eierstöcken und Eileitern 2015:</strong>
        Zwei Jahre später, im März 2015, ließ Jolie zusätzlich präventiv ihre Eierstöcke und
        Eileiter entfernen, nachdem ein Bluttest erhöhte Werte gezeigt hatte, die auf eine
        beginnende Krebserkrankung hindeuten konnten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Kein tatsächlicher Krebsbefund:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses handelte es sich
        bei Jolie nicht um eine bereits bestehende Krebserkrankung, sondern um eine rein
        präventive Entscheidung aufgrund eines statistisch erhöhten Risikos.</p>
        <p class="vb-intro"><strong>b) Zweiter Essay zur Eierstockoperation:</strong>
        Auch die Entfernung von Eierstöcken und Eileitern begleitete Jolie 2015 mit einem
        weiteren öffentlichen Essay in der New York Times, in dem sie den Entscheidungsweg
        erneut offenlegte.</p>
        <p class="vb-intro"><strong>c) Nachweisbarer Effekt auf öffentliche Wahrnehmung:</strong>
        Nach Jolies Essay von 2013 registrierten Ärzte weltweit einen deutlichen Anstieg von
        Anfragen zu BRCA-Gentests – ein Phänomen, das später als „Angelina-Jolie-Effekt"
        bekannt wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite mediale und medizinische Aufmerksamkeit:</strong>
        Jolies Entscheidungen lösten internationale Berichterstattung aus und wurden in
        zahlreichen Studien als Fallbeispiel für den Einfluss prominenter Gesundheitsoffenheit
        auf das Präventionsverhalten der Allgemeinbevölkerung untersucht.</p>
        <p class="vb-intro"><strong>b) Kontroverse um Zugänglichkeit und Kosten:</strong>
        Der „Angelina-Jolie-Effekt" führte auch zu einer öffentlichen Debatte darüber, dass
        präventive Gentests und Operationen nicht allen Frauen gleichermaßen zugänglich
        sind – eine Diskussion, die Jolie selbst in ihren Essays mit aufgriff.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes öffentliches Engagement:</strong>
        Jolie setzt ihr humanitäres und filmisches Engagement seither unverändert fort, ohne
        dass die präventiven Eingriffe ihr öffentliches Leben sichtbar einschränkten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Handeln, weil Handlung möglich ist:</strong>
        Die SO1-typische Überzeugung, dass Unrecht – auch ein erhöhtes gesundheitliches
        Risiko – nicht einfach hingenommen werden darf, wenn eine Handlungsmöglichkeit
        besteht, prägte Jolies Entscheidung für die präventiven Operationen von Beginn an.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und die bewusste Öffentlichkeit:</strong>
        Dieselbe Verbindung aus Haltung und Herz, die Jolies humanitäres Engagement prägt,
        zeigte sich auch hier: Statt die Operationen privat zu halten, machte sie sie
        öffentlich, weil andere Frauen davon profitieren könnten – Fürsorge als Handlung,
        nicht als Gefühl.</p>
        <p class="vb-intro"><strong>c) Pflicht zur Sichtbarkeit statt Rückzug:</strong>
        Wo andere eine derart intime medizinische Entscheidung privat gehalten hätten,
        veröffentlichte Jolie zwei ausführliche Essays – ein Muster, das ihrem gesamten
        öffentlichen Wirken entspricht: Das Richtige tun und es sichtbar machen, nicht um
        Bewunderung zu ernten, sondern weil Sichtbarkeit selbst als Verpflichtung erlebt
        wird.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kämpferin gegen Unrecht, die auch das genetische Risiko als Unrecht behandelte:</strong>
        Jolies gesamtes öffentliches Wirken beruht auf der Überzeugung, dass sichtbares
        Unrecht ein Handeln erfordert – bei der eigenen genetischen Diagnose übertrug sie
        genau diese Haltung auf den eigenen Körper: ein statistisches Risiko wurde zu einer
        Sache, gegen die aktiv vorgegangen werden musste.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet Brust und Eierstöcke, die Organe der weiblichen Fürsorge?</strong>
        Für eine soziale Eins mit Zweierflügel, deren gesamtes Lebenswerk um Mutterschaft,
        Fürsorge für fremde Kinder und den Schutz von Verwundbaren kreist, liegt eine Deutung
        nahe: Ausgerechnet jene Organe, die im Volksmund für Mutterschaft und weibliche
        Fürsorge stehen, wurden zum Gegenstand einer präventiven, öffentlich gemachten
        Entscheidung. Diese Deutung ist eine plausible Interpretation, kein belegter
        klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Eins zwangsläufig zu genetisch
        bedingten Krebsrisiken führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Jolies Fall zeigen lässt, ist ein Muster
        im Umgang mit einem gesundheitlichen Risiko, das bei einer ausgeprägten sozialen Eins
        mit Zweierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Jolie kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die soziale Eins mit
        Zweierflügel kann reflexhaft nicht nicht-handeln, wenn eine Gefahr erkannt ist, und
        macht aus privaten Entscheidungen fast zwangsläufig öffentliche Botschaften. Wer die
        eigene Neigung, jede erkannte Gefahr sofort in sichtbares Handeln zu übersetzen,
        nicht als Muster erkennt, riskiert, dass kaum Raum bleibt, eine schwierige
        Entscheidung erst einmal privat zu verarbeiten, bevor sie zur öffentlichen Aufgabe
        wird.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 1 mit Zweierflügel erklärt bei <strong>Angelina Jolie</strong> vieles
        am Umgang mit ihrem genetischen Risiko: eine Frau, deren gesamtes öffentliches
        Wirken der Sichtbarmachung von Unrecht gilt, machte auch ihre eigene präventive
        Entscheidung zu einer öffentlichen Botschaft – die Gans, die selbst im eigenen
        Körper kein Risiko unbeachtet ließ und die Formation dadurch stärker machte, dass sie
        offen über die eigene Verwundbarkeit sprach.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-angelina-jolie", label:"Porträt: Angelina Jolie (SO1w2)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so1", label:"Subtyp-Profil SO1"},
      ])}
    </div>
  `);
}

function adeleKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-adele-portrait.jpg" alt="Adele" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Adele</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel · geb. 1988</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Adele</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-adele">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel,
        das dort nur beiläufig erwähnt wird: eine schwere postnatale Depression nach der
        Geburt ihres Sohnes 2012, begleitet von Panikattacken, die sie über Jahre nur
        gegenüber engsten Vertrauten offenlegte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Adele</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SE4 trägt ihren Schmerz still, kämpft ihn allein aus, bevor sie ihn
        zeigt; der Dreierflügel bringt die Disziplin, nach außen dennoch makellos zu
        funktionieren. Genau diese Kombination – innerer Zusammenbruch bei gleichzeitig
        makellos funktionierender öffentlicher Fassade – bestimmte den jahrelang verborgenen
        Verlauf ihrer postnatalen Depression.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginn nach der Geburt ihres Sohnes 2012:</strong>
        Nach eigener Aussage begannen die Symptome kurz nach der Geburt ihres Sohnes Angelo
        im Oktober 2012 – ein Zeitpunkt, der öffentlich als Höhepunkt privaten Glücks
        wahrgenommen wurde.</p>
        <p class="vb-intro"><strong>b) Gefühl völliger Überforderung:</strong>
        Adele beschrieb später in Interviews, sich in den ersten Monaten der Mutterschaft
        als völlig überfordert und von Schuldgefühlen überwältigt erlebt zu haben, weil sie
        die erwartete sofortige mütterliche Verbundenheit nicht spürte.</p>
        <p class="vb-intro"><strong>c) Vollständige Geheimhaltung nach außen:</strong>
        Über Jahre sprach sie öffentlich nicht über diese Zeit – die Diagnose einer
        postnatalen Depression wurde erst 2021, fast ein Jahrzehnt später, in einem
        Vogue-Interview bekannt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Begleitende Panikattacken vor Auftritten:</strong>
        Adele sprach wiederholt über schwere Panikattacken vor Live-Auftritten, die sie
        zeitweise dazu brachten, Konzerte kurz vor Beginn fast abzusagen.</p>
        <p class="vb-intro"><strong>b) Kurzfristige Absage der Las-Vegas-Residency 2022:</strong>
        Einen Tag vor der geplanten Eröffnung ihrer Las-Vegas-Show sagte Adele unter Tränen
        ab, weil das Ergebnis – nach eigener Aussage wegen Lieferproblemen der
        Bühnentechnik – ihrem eigenen Anspruch nicht genügte.</p>
        <p class="vb-intro"><strong>c) Therapiebeginn als Wendepunkt:</strong>
        Nach eigener Schilderung begann sie erst durch eine Psychotherapie, die
        postnatale Depression rückblickend als eigenständige Erkrankung zu erkennen und zu
        benennen, statt sie als persönliches Versagen zu deuten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Verarbeitung durch das Album „30":</strong>
        Ihr 2021 erschienenes Album „30" verarbeitet nach eigener Aussage explizit diese
        Zeit – Scheidung, Mutterschaft, Selbstfindung – und markiert den Punkt, an dem sie
        erstmals öffentlich über die Krise sprach.</p>
        <p class="vb-intro"><strong>b) Offenheit ohne Dramatisierung:</strong>
        Anders als eine öffentlich inszenierte Krankheitsgeschichte blieb Adeles Offenlegung
        sachlich und zurückhaltend – im Vogue-Interview beschrieb sie die Erfahrung präzise,
        ohne sie zum zentralen Vermarktungsthema des Albums zu machen.</p>
        <p class="vb-intro"><strong>c) Positive Rückmeldung von Betroffenen:</strong>
        Nach der Veröffentlichung erhielt Adele zahlreiche Rückmeldungen von Müttern, die
        sich durch ihre Offenheit erstmals ermutigt fühlten, über eigene postnatale
        Depressionen zu sprechen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite mediale Aufmerksamkeit für ein Tabuthema:</strong>
        Adeles Offenheit trug international zur Enttabuisierung postnataler Depression bei –
        ein Thema, das gerade bei öffentlich wahrgenommenen „perfekten" Müttern selten offen
        verhandelt wird.</p>
        <p class="vb-intro"><strong>b) Verzögerte statt sofortige Offenlegung:</strong>
        Der fast zehnjährige Abstand zwischen Erkrankung und öffentlicher Offenlegung
        illustriert, wie lange die Krise ausschließlich privat verarbeitet wurde, bevor sie
        überhaupt zur öffentlichen Sprache kam.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte künstlerische Produktivität:</strong>
        Trotz der Krise blieb Adele künstlerisch aktiv und produktiv – die Krise wurde nicht
        zum Karriereeinschnitt, sondern letztlich zum Stoff eines ihrer erfolgreichsten
        Alben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Stiller Kampf statt öffentlicher Klage:</strong>
        Die SE4-typische Zähigkeit zeigte sich exemplarisch: Adele kämpfte die postnatale
        Depression über Jahre allein aus, statt sie öffentlich zu machen – die SE4-Logik,
        nicht zu klagen, sondern erst dann zu sprechen, wenn der Schmerz verarbeitet und in
        eine Form gebracht ist.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die makellose Fassade:</strong>
        Dieselbe Disziplin, die ihre Konzerte und Alben zu kommerziellen Welterfolgen macht,
        sorgte dafür, dass die Krise nach außen über Jahre unsichtbar blieb – erst als das
        Album „30" fertig war, wurde aus dem privaten Kampf eine öffentliche Botschaft.</p>
        <p class="vb-intro"><strong>c) Verarbeitung durch Form, nicht durch Bekenntnis:</strong>
        Adeles Weg aus der Krise führte nicht über ein spontanes öffentliches Geständnis,
        sondern über die Verwandlung des Erlebten in ein fertiges künstlerisches Werk – die
        typische SE4w3-Bewegung vom stillen Innenleben zur wirkungsvollen äußeren Form.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme des Herzschmerzes, die den eigenen Herzschmerz am längsten verschwieg:</strong>
        Adeles gesamtes Werk beruht auf der Fähigkeit, privaten Schmerz in universelle Songs
        zu verwandeln – ausgerechnet die eigene postnatale Depression blieb fast ein
        Jahrzehnt lang von diesem Prinzip ausgenommen, bis sie reif genug war, in Form
        gebracht zu werden.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-lady-diana">Lady Diana
        (SE4w3)</a>: Auch Diana verbarg ihre Erkrankung – bei ihr eine Bulimie – jahrelang
        hinter einer makellos funktionierenden öffentlichen Fassade, bevor sie sich Jahre
        später selbst dazu äußerte. Bei beiden SE4w3ern zeigt sich dasselbe Muster: der innere
        Kampf bleibt so lange verborgen, bis er in eine kontrollierte, selbstgewählte Form
        gebracht werden kann.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet nach der Geburt, dem Moment größter erwarteter Nähe?</strong>
        Für eine selbsterhaltende Vier mit Dreierflügel, deren gesamtes Werk um echte,
        unverstellte Gefühlstiefe kreist, liegt eine Deutung nahe: Ausgerechnet der Moment,
        in dem gesellschaftlich die spontanste, unmittelbarste Verbundenheit erwartet wird,
        wurde zum Ort, an dem sich diese Verbundenheit nicht einstellte – eine besonders
        schmerzhafte Konfrontation mit dem eigenen Schicksalsmuster der Vier. Diese Deutung
        ist eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu
        postnataler Depression führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Adeles Fall zeigen lässt,
        ist ein Muster im Umgang mit einer psychischen Krise, das bei einer ausgeprägten
        selbsterhaltenden Vier mit Dreierflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Adele kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die selbsterhaltende
        Vier mit Dreierflügel hält reflexhaft daran fest, den eigenen Schmerz erst dann zu
        zeigen, wenn er in eine makellose Form gebracht ist, statt sich frühzeitig Hilfe zu
        holen, und lebt genau dieses Muster bis heute weitgehend unverändert aus. Wer die
        eigene Neigung, seelische Krisen erst nach Jahren stiller Verarbeitung überhaupt zu
        benennen, nicht als Muster erkennt, riskiert, dass Hilfe erst kommt, wenn die Krise
        bereits sehr weit fortgeschritten ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 4 mit Dreierflügel erklärt bei <strong>Adele</strong> vieles
        am Verlauf ihrer postnatalen Depression: eine Frau, deren gesamtes Werk private
        Wunden in universelle Songs verwandelt, brauchte fast zehn Jahre, um dieselbe
        Verwandlung auch auf die eigene tiefste Krise anzuwenden – die Taube, die ihre
        Botschaft erst dann nach außen trug, als sie bereit war, sie auch für sich selbst
        anzunehmen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-adele", label:"Porträt: Adele (SE4w3)"},
        {route:"krankheitsportraets-lady-diana", label:"Krankheitsporträt: Lady Diana (SE4w3) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

function jamieLeeCurtisKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-jamie-lee-curtis-portrait.jpg" alt="Jamie Lee Curtis" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jamie Lee Curtis</p>
        <p class="krim-portrait-typ">SX1w2 · Sexueller Typ 1 mit Zweierflügel · geb. 1958</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jamie Lee Curtis</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-jamie-lee-curtis">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nur kurz erwähnt wird: eine 22 Jahre andauernde Opiatabhängigkeit,
        die 1989 nach einer kosmetischen Operation begann und die sie erst 1999 überwand.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Curtis</strong> ist dem <strong>sexuellen Typ 1 mit Zweierflügel</strong>
        zugeordnet. Die SX1 duldet keine Heuchelei, auch nicht gegenüber sich selbst; der
        Zweierflügel bringt die Fürsorge hinzu, die schließlich den Anstoß zum Ausstieg gab.
        Genau diese Kombination – jahrelanges heimliches Scheitern an einem selbst
        gesetzten Anspruch, gefolgt von einer radikal ehrlichen, öffentlichen Aufarbeitung –
        bestimmte den Verlauf ihrer Suchterkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Verordnung von Opiaten nach kosmetischer Operation 1989:</strong>
        Nach eigener Schilderung erhielt Curtis nach einem kleinen kosmetischen Eingriff an
        den Augenlidern 1989 Opiate verschrieben, die zunächst regulär eingesetzt wurden.</p>
        <p class="vb-intro"><strong>b) Schleichender Übergang zur Abhängigkeit:</strong>
        Aus der ärztlich verordneten Schmerzbehandlung entwickelte sich über Jahre eine
        körperliche Abhängigkeit, die weit über die ursprünglich beabsichtigte Anwendung
        hinausging.</p>
        <p class="vb-intro"><strong>c) Jahrelange, sorgfältig verborgene Fortsetzung:</strong>
        Curtis beschrieb später, wie sie über zehn Jahre lang eine funktionierende
        Fassade aufrechterhielt, während sie heimlich Vicodin nahm – auch gegenüber engsten
        Familienmitgliedern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Entdeckung durch die eigene Schwester:</strong>
        Nach eigener Aussage wurde die Abhängigkeit publik, als sie feststellte, dass sie
        Alkoholika und Medikamente ihrer Schwester genommen hatte – ein Moment, der sie
        zwang, sich der Realität ihrer Sucht zu stellen.</p>
        <p class="vb-intro"><strong>b) Sofortiger Entschluss zur Abstinenz 1999:</strong>
        Curtis beschreibt den 19. Februar 1999 als den Tag, an dem sie zuletzt Opiate oder
        Alkohol konsumierte – ein Datum, das sie seither konsequent als ihren Nüchternheits-Jahrestag begeht.</p>
        <p class="vb-intro"><strong>c) Unterstützung durch familiäre und therapeutische Strukturen:</strong>
        Der Ausstieg gelang nach eigener Schilderung durch eine Kombination aus Therapie,
        Selbsthilfegruppen und dem offenen Rückhalt ihrer Familie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Frühe öffentliche Offenlegung:</strong>
        Curtis sprach bereits Anfang der 2000er-Jahre öffentlich über ihre Suchterkrankung –
        zu einem Zeitpunkt, an dem Prominente ihre Abhängigkeiten in der Regel noch
        verschwiegen.</p>
        <p class="vb-intro"><strong>b) Engagement für Suchthilfe-Organisationen:</strong>
        Seither unterstützt sie öffentlich Organisationen, die sich für Suchtprävention und
        -behandlung einsetzen, und spricht regelmäßig über den Zusammenhang zwischen
        verschriebenen Schmerzmitteln und Opioidabhängigkeit.</p>
        <p class="vb-intro"><strong>c) Kritik an der Rolle der Pharmaindustrie:</strong>
        Curtis äußerte sich wiederholt kritisch zur Verantwortung von Pharmaunternehmen bei
        der US-amerikanischen Opioidkrise, auch mit Blick auf ihre eigene Erfahrung als
        Patientin.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Anerkennung als eine der ersten offenen Stimmen Hollywoods:</strong>
        Curtis gilt bis heute als eine der ersten großen Hollywood-Schauspielerinnen, die
        offen und ohne Umschweife über eine eigene Suchterkrankung sprach.</p>
        <p class="vb-intro"><strong>b) Über zwei Jahrzehnte anhaltende Nüchternheit:</strong>
        Seit 1999 bezeichnet sich Curtis öffentlich als nüchtern – eine Kontinuität, die sie
        regelmäßig in Interviews und Reden thematisiert, ohne den Kampf zu verklären.</p>
        <p class="vb-intro"><strong>c) Kein Karriereeinschnitt durch die Offenlegung:</strong>
        Anders als befürchtet schadete die öffentliche Offenheit ihrer Karriere nicht –
        Curtis blieb durchgängig aktiv und erreichte mit dem Oscar 2023 sogar den bislang
        größten Erfolg ihrer Laufbahn.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der innere Widerspruch zwischen Anspruch und heimlicher Sucht:</strong>
        Die SX1-typische Unduldsamkeit gegenüber Heuchelei traf bei Curtis auf eine
        Erkrankung, die sie über Jahre selbst zur Heuchlerin machte – ein Widerspruch, der
        die spätere, besonders schonungslose Offenheit miterklärt.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und der Impuls zur Fürsorge nach dem Ausstieg:</strong>
        Sobald Curtis die eigene Abhängigkeit überwunden hatte, richtete sich dieselbe
        Energie, die zuvor nach innen gerichtet war, nach außen: Sie begann, andere
        Betroffene zu unterstützen und öffentlich für Suchtprävention einzutreten.</p>
        <p class="vb-intro"><strong>c) Radikale Offenheit als Ausdruck der Leidenschaft:</strong>
        Dass Curtis ihre Sucht nicht nur beendete, sondern aktiv öffentlich machte, passt zur
        SX1-typischen Überzeugung, dass Echtheit mehr zählt als Schein – auch wenn diese
        Echtheit die eigene Schwäche einschließt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Frau, die Echtheit predigt und über zehn Jahre eine Sucht verbarg:</strong>
        Curtis' gesamtes späteres öffentliches Wirken beruht auf der Überzeugung, dass das
        Echte mehr wert ist als der Schein – ausgerechnet sie lebte über zehn Jahre lang
        genau den Schein, den sie später am schärfsten kritisieren sollte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-robbie-williams">Robbie
        Williams (SX1w2)</a>: Auch Williams verbarg eine jahrzehntelange Sucht- und
        Depressionserkrankung hinter einer öffentlich erfolgreichen Fassade, bevor er sich
        radikal offen dazu bekannte. Bei beiden SX1w2ern zeigt sich dasselbe Muster: der
        Anspruch an absolute Echtheit, der die eigene heimliche Sucht umso unerträglicher
        macht, sobald sie erkannt wird – und der dieselbe Intensität später in eine
        schonungslos offene Aufarbeitung verwandelt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Opiate, die chemische Abschwächung der eigenen Intensität?</strong>
        Für eine sexuelle Eins mit Zweierflügel, deren gesamtes Wesen auf vollständiger
        Präsenz und Intensität beruht, liegt eine Deutung nahe: Opiate erzeugen genau jene
        Dämpfung und Distanz zur eigenen Wachheit, die dem SX1-Muster diametral
        entgegensteht – eine Substanz, die das eigene Feuer betäubt, statt es zu nähren.
        Diese Deutung ist eine plausible Interpretation, kein belegter klinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins zwangsläufig zu
        Opioidabhängigkeit führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Curtis' Fall zeigen lässt, ist ein
        Muster im Umgang mit einer überwundenen Suchterkrankung, das bei einer ausgeprägten
        sexuellen Eins mit Zweierflügel immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Curtis kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die sexuelle Eins mit
        Zweierflügel hält reflexhaft an einem Anspruch absoluter Echtheit fest, was das
        Eingeständnis eigener Schwäche über Jahre besonders schwer macht, und lebte genau
        dieses Muster bis zur erzwungenen Konfrontation mit der eigenen Sucht aus. Wer die
        eigene Neigung, Scheitern länger zu verbergen, je höher der eigene moralische
        Anspruch ist, nicht als Muster erkennt, riskiert, dass die Sucht sich über Jahre
        unbemerkt festsetzt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der sexuelle Typ 1 mit Zweierflügel erklärt bei <strong>Jamie Lee Curtis</strong>
        vieles am Verlauf ihrer Suchterkrankung: eine Frau, deren gesamtes späteres Wirken
        der Echtheit gilt, musste erst selbst über ein Jahrzehnt lang die Erfahrung des
        eigenen Scheins durchleben, bevor sie ihre Wahrheit aussprechen konnte – die Schwarze
        Mamba, die sich selbst am längsten getäuscht hat, bevor sie zur schärfsten Stimme
        gegen genau diese Täuschung wurde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-jamie-lee-curtis", label:"Porträt: Jamie Lee Curtis (SX1w2)"},
        {route:"krankheitsportraets-robbie-williams", label:"Krankheitsporträt: Robbie Williams (SX1w2) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}

function genesisPOrridgeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-genesis-p-orridge-portrait.jpg" alt="Genesis P-Orridge" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Genesis P-Orridge</p>
        <p class="krim-portrait-typ">SX8w9 · Sexueller Typ 8 mit Neunerflügel · 1950–2020</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Krokodil</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Tierentsprechung: Krokodil" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Genesis P-Orridge</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-genesis-p-orridge">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: eine über Jahre verlaufende Leukämie-Erkrankung, während der Genesis bis kurz vor dem Tod im März 2020 weiter künstlerisch
        aktiv blieb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Genesis</strong> ist dem <strong>sexuellen Typ 8 mit Neunerflügel</strong>
        zugeordnet. Die SX8 will das Ganze, ohne Kompromiss, auch im Umgang mit dem eigenen
        Körper; der Neunerflügel bringt eine ruhende, ausdauernde Kraft hinzu, die nicht
        explosiv, sondern beharrlich wirkt. Genau diese Kombination – kompromisslose
        Weigerung, sich der Krankheit unterzuordnen, verbunden mit stiller, langer Ausdauer
        – bestimmte den Verlauf der eigenen Leukämie-Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose einer chronischen Leukämie:</strong>
        Nach Angaben von Weggefährten wurde bei Genesis eine chronische Form der Leukämie
        diagnostiziert, die zunächst über Jahre relativ stabil verlief.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte künstlerische und rituelle Praxis:</strong>
        Trotz der Diagnose setzte Genesis Auftritte, Ausstellungen und die eigene
        okkult-künstlerische Praxis über Jahre nahezu unvermindert fort.</p>
        <p class="vb-intro"><strong>c) Weitgehende Zurückhaltung gegenüber breiter Öffentlichkeit:</strong>
        Die Erkrankung wurde nicht zu einem zentralen öffentlichen Thema, sondern blieb
        gegenüber der breiten Öffentlichkeit lange im Hintergrund, während enge Freunde und
        Mitstreiter informiert waren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fortschreiten zu einer akuten Krankheitsphase:</strong>
        In den letzten Lebensjahren verschärfte sich die Erkrankung, was wiederholte
        Klinikaufenthalte und intensivere Behandlungen erforderlich machte.</p>
        <p class="vb-intro"><strong>b) Fortsetzung von Projekten trotz Krankenhausaufenthalten:</strong>
        Auch während Behandlungsphasen arbeitete Genesis nach Berichten von Mitarbeitenden
        weiter an Musik- und Kunstprojekten, teils direkt aus dem Krankenbett heraus.</p>
        <p class="vb-intro"><strong>c) Öffentliche Anteilnahme aus der Musik- und Kunstszene:</strong>
        In den letzten Monaten vor dem Tod äußerten zahlreiche Weggefährten und Fans aus der
        Industrial- und Experimentalmusik-Szene öffentlich ihre Anteilnahme und Unterstützung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 14. März 2020 in New York:</strong>
        Genesis P-Orridge starb im Alter von 70 Jahren an den Folgen der Leukämie-Erkrankung, in der Wohnung, die eng mit der verstorbenen Partnerin Lady Jaye
        verbunden war.</p>
        <p class="vb-intro"><strong>b) Weltweite Trauer in der Musik- und Kunstwelt:</strong>
        Der Tod löste international Nachrufe aus, die Genesis' Einfluss auf Industrial
        Music, Performancekunst und Gegenkultur würdigten.</p>
        <p class="vb-intro"><strong>c) Postume Fortführung des künstlerischen Vermächtnisses:</strong>
        Nach dem Tod wurden weitere, teils bereits vorbereitete Werke veröffentlicht,
        darunter Musik und Kunstprojekte, an denen Genesis bis zuletzt gearbeitet hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Würdigung eines kompromisslosen Lebenswerks:</strong>
        In Nachrufen wurde wiederholt betont, dass Genesis bis zuletzt der eigenen
        künstlerischen Radikalität treu blieb, ohne die Krankheit zum bestimmenden Narrativ
        des eigenen Werks zu machen.</p>
        <p class="vb-intro"><strong>b) Keine öffentliche Inszenierung des Krankheitsverlaufs:</strong>
        Anders als bei manchen Künstlern wurde die Leukämie nicht zu einem zentralen
        Bestandteil der öffentlichen Selbstdarstellung – die Kunst blieb im Vordergrund, nicht
        das Leiden.</p>
        <p class="vb-intro"><strong>c) Fortwirken des Pandrogeny-Projekts über den Tod hinaus:</strong>
        Das gemeinsam mit Lady Jaye begonnene Pandrogeny-Projekt – die körperliche
        Verschmelzung zweier Menschen zu einem Wesen – wird bis heute als eigenständiges
        Kunstwerk diskutiert, unabhängig vom Tod beider Beteiligter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Besitzergreifung, angewandt auf die eigene Krankheit:</strong>
        Die SX8-typische Weigerung, sich irgendetwas kampflos zu unterwerfen, zeigte sich
        auch im Umgang mit der Leukämie: Genesis ließ die Krankheit nicht zum Diktator des
        eigenen Lebens werden, sondern arbeitete bis zuletzt mit derselben Intensität weiter.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und die stille Ausdauer im Krankheitsverlauf:</strong>
        Dieselbe ruhende, nicht-explosive Kraft, die Genesis' jahrzehntelanges Werk trug,
        zeigte sich auch im Umgang mit der Erkrankung: kein lautes öffentliches Ringen,
        sondern eine stille, beharrliche Fortsetzung der eigenen Arbeit trotz fortschreitender
        Krankheit.</p>
        <p class="vb-intro"><strong>c) Keine Trennung zwischen Kunst und Krankheit:</strong>
        Für Genesis war die eigene körperliche Verwundbarkeit nie vollständig vom
        künstlerischen Werk zu trennen – schon das Pandrogeny-Projekt hatte den eigenen
        Körper als Material der Kunst verwendet; die Leukämie wurde so zu einer weiteren,
        letzten Form dieser Verschmelzung von Leben und Werk.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Künstler der Grenzauflösung, konfrontiert mit der letzten unauflösbaren Grenze:</strong>
        Genesis' gesamtes Werk kreiste um die Auflösung von Grenzen – zwischen Körpern,
        Geschlechtern, Kunst und Leben. Ausgerechnet die Krankheit stellte eine Grenze dar,
        die sich nicht durch Kunst, Ritual oder Willenskraft auflösen ließ.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-ruth-bader-ginsburg">Ruth
        Bader Ginsburg (SX8w9)</a>: Auch Ginsburg weigerte sich über Jahre, mehrfachen
        Krebsdiagnosen nachzugeben, und blieb bis kurz vor dem Tod im Amt aktiv. Bei beiden
        SX8w9ern zeigt sich dasselbe Muster: eine kompromisslose Weigerung, die eigene
        Lebensaufgabe der Krankheit unterzuordnen, getragen von einer stillen, langen
        Ausdauer statt lauten öffentlichen Kampfes.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Blut, der Stoff der Verschmelzung selbst?</strong>
        Für eine sexuelle Acht mit Neunerflügel, deren gesamtes Werk um körperliche
        Verschmelzung und Grenzauflösung kreiste, liegt eine Deutung nahe: Ausgerechnet eine
        Erkrankung des Blutes – jenes Stoffes, der im Körper alle Grenzen überwindet und
        alles verbindet – wurde zum Ort des eigenen körperlichen Zusammenbruchs. Diese
        Deutung ist eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang,
        und wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Acht zwangsläufig zu Leukämie führt –
        <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig vom Subtyp.</strong>
        Was sich an Genesis' Fall zeigen lässt, ist ein Muster im Umgang mit einer
        fortschreitenden Erkrankung, das bei einer ausgeprägten sexuellen Acht mit
        Neunerflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Genesis kannte das eigene Muster nicht als Enneagramm-Struktur – die sexuelle Acht
        mit Neunerflügel hält reflexhaft an der eigenen Kompromisslosigkeit fest, auch
        gegenüber der eigenen Sterblichkeit, statt rechtzeitig innezuhalten, und lebte genau
        dieses Muster bis zum letzten Tag unverändert aus. Wer die eigene Neigung, keine
        Grenze – auch nicht die des eigenen Körpers – anzuerkennen, nicht als Muster
        erkennt, riskiert, dass der Körper am Ende die einzige Grenze setzt, die sich nicht
        mehr auflösen lässt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Acht mit Neunerflügel erklärt bei <strong>Genesis P-Orridge</strong>
        vieles am Umgang mit der eigenen Leukämie: ein Künstler, dessen gesamtes Werk der
        Auflösung von Grenzen galt, begegnete auch der letzten, unüberwindbaren Grenze mit
        derselben kompromisslosen Intensität – das Krokodil, das bis zum letzten Tag nicht
        stillhielt, sondern weiterarbeitete, während die Krankheit selbst zur letzten
        Verschmelzung von Leben und Werk wurde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-genesis-p-orridge", label:"Porträt: Genesis P-Orridge (SX8w9)"},
        {route:"krankheitsportraets-ruth-bader-ginsburg", label:"Krankheitsporträt: Ruth Bader Ginsburg (SX8w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx8", label:"Subtyp-Profil SX8"},
      ])}
    </div>
  `);
}

function billieEilishKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-billie-eilish-portrait.jpg" alt="Billie Eilish" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Billie Eilish</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel · geb. 2001</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Billie Eilish</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-billie-eilish">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nur beiläufig erwähnt wird: das Tourette-Syndrom, das sie über
        Jahre vor der Öffentlichkeit verbarg, bevor sie es 2018 selbst bestätigte, sowie eine
        schwere depressive Phase mit Selbstverletzung im Teenageralter.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Eilish</strong> ist dem <strong>sexuellen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SX4 trägt Schmerz roh und ungefiltert nach außen; der Dreierflügel
        gibt ihr zugleich das Gespür dafür, wie viel davon öffentlich gezeigt werden kann,
        ohne die eigene Wirkung zu gefährden. Genau diese Kombination – kompromisslose
        Ehrlichkeit in der Musik, verbunden mit strategischer Zurückhaltung bei bestimmten
        gesundheitlichen Themen – bestimmte den Umgang mit dem eigenen Tourette-Syndrom und
        der eigenen Depression.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Tics bereits im Kindesalter:</strong>
        Nach eigener Aussage bemerkte Eilish erste Tics bereits als Kind, lange bevor eine
        Diagnose gestellt wurde oder das Thema öffentlich bekannt war.</p>
        <p class="vb-intro"><strong>b) Diagnose des Tourette-Syndroms:</strong>
        Eilish wurde mit dem Tourette-Syndrom diagnostiziert, einer neurologischen Störung,
        die sich durch unwillkürliche Bewegungen und Lautäußerungen zeigt.</p>
        <p class="vb-intro"><strong>c) Beginn einer depressiven Phase in der frühen Jugend:</strong>
        Parallel dazu beschrieb sie später in der Dokumentation „The World's a Little
        Blurry" (2021) eine schwere depressive Episode, die etwa im Alter von zwölf Jahren
        begann.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Jahrelange bewusste Geheimhaltung des Tourette-Syndroms:</strong>
        Eilish hielt die Diagnose über Jahre vor der Öffentlichkeit geheim, aus Sorge, auf
        die Erkrankung reduziert oder in Interviews ständig danach gefragt zu werden.</p>
        <p class="vb-intro"><strong>b) Selbstverletzendes Verhalten als Teil der depressiven Phase:</strong>
        In derselben Dokumentation sprach sie offen über selbstverletzendes Verhalten
        während dieser Zeit sowie über anhaltende Suizidgedanken.</p>
        <p class="vb-intro"><strong>c) Körperbildbezogene Belastung durch öffentliche Aufmerksamkeit:</strong>
        Die mit vierzehn Jahren einsetzende öffentliche Aufmerksamkeit verstärkte nach
        eigener Schilderung ein bereits angespanntes Verhältnis zum eigenen Körper.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentliche Bestätigung des Tourette-Syndroms 2018:</strong>
        Eilish bestätigte die Diagnose erstmals öffentlich in einem Interview 2018, nachdem
        Fans Videoaufnahmen ihrer Tics online diskutiert hatten.</p>
        <p class="vb-intro"><strong>b) Offener Umgang mit Missverständnissen:</strong>
        Seither erklärt sie wiederholt in Interviews, wie sich Tourette bei ihr äußert, und
        korrigiert öffentlich gängige Fehlvorstellungen über die Erkrankung.</p>
        <p class="vb-intro"><strong>c) Ausführliche Dokumentation der depressiven Phase:</strong>
        Die 2021 veröffentlichte Dokumentation begleitet Eilish über mehrere Jahre und zeigt
        auch unbearbeitete Aufnahmen aus der Zeit der schwersten depressiven Episode.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Aufmerksamkeit für ein wenig bekanntes Krankheitsbild:</strong>
        Eilishs Offenheit über Tourette trug international dazu bei, Missverständnisse über
        die Erkrankung abzubauen, da sie eine der bekanntesten öffentlichen Personen mit
        dieser Diagnose ist.</p>
        <p class="vb-intro"><strong>b) Positive Resonanz auf die Dokumentation:</strong>
        Die schonungslose Offenheit der Dokumentation über Depression und
        Selbstverletzung wurde von Kritikern und jungen Fans gleichermaßen als
        außergewöhnlich ehrlich gewürdigt.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte künstlerische Verarbeitung:</strong>
        Themen wie Körperbild, psychische Gesundheit und der Druck öffentlicher
        Aufmerksamkeit blieben zentrale Motive ihrer späteren Alben, ohne dass die
        Erkrankungen selbst zum Vermarktungsthema wurden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Ungefilterte Offenheit in der Musik, Zurückhaltung beim Tourette-Syndrom:</strong>
        Die SX4-typische Kompromisslosigkeit zeigte sich in Eilishs Texten uneingeschränkt –
        beim Tourette-Syndrom hingegen entschied sie sich über Jahre bewusst für
        Zurückhaltung, aus Sorge vor Reduktion auf die Diagnose.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die kontrollierte öffentliche Offenlegung:</strong>
        Als Eilish sich schließlich zur Tourette-Diagnose äußerte, geschah das nicht
        spontan, sondern in einem kontrollierten Interviewrahmen – dieselbe strategische
        Präzision, mit der der Dreierflügel auch ihre musikalische Karriere prägte.</p>
        <p class="vb-intro"><strong>c) Die Dokumentation als Form kontrollierter Verletzlichkeit:</strong>
        Dass die tiefste Offenlegung der eigenen depressiven Phase in einem sorgfältig
        produzierten Dokumentarfilm erfolgte statt in einem spontanen Interview, passt zur
        SX4w3-Dynamik: rohe Ehrlichkeit, aber in eine wirkungsvolle Form gebracht.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme kompromissloser Ehrlichkeit, die eine Diagnose jahrelang verschwieg:</strong>
        Eilishs gesamtes Werk beruht auf der Weigerung, irgendetwas zu beschönigen –
        ausgerechnet das Tourette-Syndrom blieb über Jahre die eine Ausnahme von diesem
        Prinzip, bis sie selbst entschied, wann und wie es öffentlich würde.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-freddie-mercury">Freddie
        Mercury (SX4w3)</a>: Auch Mercury verbarg eine gesundheitliche Diagnose über Jahre
        vor der Öffentlichkeit, bevor er sie schließlich zu einem selbst gewählten Zeitpunkt
        bestätigte. Bei beiden SX4w3ern zeigt sich dasselbe Muster: die Kontrolle über den
        eigenen Offenlegungszeitpunkt wird zur letzten verbleibenden Form der
        Selbstbestimmung angesichts einer Diagnose, die man sich nicht ausgesucht hat.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet unwillkürliche Bewegungen, bei einer Künstlerin präziser Kontrolle?</strong>
        Für eine sexuelle Vier mit Dreierflügel, deren gesamtes Werk auf der präzisen
        Kontrolle über Bild, Ton und Auftritt beruht, liegt eine Deutung nahe: Ausgerechnet
        eine neurologische Störung, die sich durch unkontrollierbare Bewegungen und Laute
        äußert, traf eine Künstlerin, deren öffentliches Bild von perfekt orchestrierter
        Selbstinszenierung lebt. Diese Deutung ist eine plausible Interpretation, kein
        belegter klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier zwangsläufig zu Tourette-Syndrom
        oder Depression führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Eilishs Fall zeigen lässt, ist ein
        Muster im Umgang mit einer nicht selbst gewählten gesundheitlichen Diagnose, das bei
        einer ausgeprägten sexuellen Vier mit Dreierflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Eilish kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die sexuelle Vier mit
        Dreierflügel hält reflexhaft an der Kontrolle darüber fest, wann und wie das eigene
        Innenleben gezeigt wird, auch wenn das bedeutet, eine belastende Diagnose über Jahre
        allein zu tragen, und lebt genau dieses Muster bis heute weitgehend unverändert aus.
        Wer die eigene Neigung, Offenheit strikt zu terminieren und zu inszenieren, nicht als
        Muster erkennt, riskiert, dass gerade die Themen, die am dringendsten Unterstützung
        bräuchten, am längsten verborgen bleiben.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der sexuelle Typ 4 mit Dreierflügel erklärt bei <strong>Billie Eilish</strong> vieles
        am Umgang mit Tourette-Syndrom und Depression: eine Künstlerin, deren gesamtes Werk
        auf kompromissloser Ehrlichkeit beruht, entschied bei den eigenen gesundheitlichen
        Diagnosen bewusst selbst, wann diese Ehrlichkeit einsetzte – der Chihuahua, der
        nicht lauter werden muss, um gehört zu werden, sondern nur so ehrlich, wie er selbst
        es zulassen kann.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-billie-eilish", label:"Porträt: Billie Eilish (SX4w3)"},
        {route:"krankheitsportraets-freddie-mercury", label:"Krankheitsporträt: Freddie Mercury (SX4w3) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

function willyBrandtKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-willy-brandt-portrait.jpg" alt="Willy Brandt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Willy Brandt</p>
        <p class="krim-portrait-typ">SO9w8 · Sozialer Typ 9 mit Achterflügel · 1913–1992</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Büffel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Tierentsprechung: Büffel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Willy Brandt</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-willy-brandt">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel,
        das dort nicht behandelt wird: wiederkehrende schwere depressive Episoden während
        seiner gesamten politischen Laufbahn, die er weitgehend privat hielt, sowie die
        Darmkrebs-Erkrankung, an der er 1992 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Brandt</strong> ist dem <strong>sozialen Typ 9 mit Achterflügel</strong>
        zugeordnet. Die SO9 hält als Kontratyp der Neun äußerlich Kurs und Aktivität
        aufrecht, auch wenn innerlich Erschöpfung droht; der Achterflügel gibt die Kraft,
        nach außen entschlossen zu wirken, selbst wenn im Verborgenen ein Zusammenbruch
        drohte. Genau diese Kombination – nach außen unerschütterliche Präsenz, nach innen
        wiederkehrende schwere Erschöpfungskrisen – bestimmte den Verlauf seiner
        gesundheitlichen Geschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste dokumentierte depressive Episode um 1958:</strong>
        Biografen beschreiben eine erste schwere depressive Krise während seiner Zeit als
        Regierender Bürgermeister von Berlin, ausgelöst durch die politische und persönliche
        Belastung der Berlin-Krise.</p>
        <p class="vb-intro"><strong>b) Wiederkehrendes Muster über Jahrzehnte:</strong>
        Weitere Episoden folgten in Phasen extremer politischer Belastung, dokumentiert unter
        anderem von seinem Biografen Peter Merseburger, der Brandts Tendenz zu Phasen
        tiefer Erschöpfung und Rückzugs ausführlich beschrieb.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Thematisierung zu Lebzeiten in dieser Form:</strong>
        Zu seinen Amtszeiten wurden diese Krisen in der Öffentlichkeit nicht als
        eigenständiges Krankheitsbild benannt, sondern meist als vorübergehende
        Erschöpfung oder Krankheit umschrieben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Schwerste Krise im Zusammenhang mit der Guillaume-Affäre 1974:</strong>
        Als sein enger Mitarbeiter Günter Guillaume 1974 als DDR-Spion enttarnt wurde, geriet
        Brandt nach übereinstimmenden biografischen Quellen in eine tiefe persönliche Krise,
        die seinen Rücktritt als Bundeskanzler begleitete.</p>
        <p class="vb-intro"><strong>b) Rückzug statt öffentlicher Erklärung:</strong>
        Anstatt die eigene psychische Belastung öffentlich zu benennen, trat Brandt formal
        wegen der Guillaume-Affäre zurück – ein Rücktrittsgrund, der öffentlich klarer
        kommuniziert werden konnte als die eigene Erschöpfung.</p>
        <p class="vb-intro"><strong>c) Diagnose von Darmkrebs in den 1990er-Jahren:</strong>
        Anfang der 1990er-Jahre wurde bei Brandt Darmkrebs diagnostiziert, an dem er nach
        kurzer Krankheit starb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortgesetzte politische Aktivität trotz privater Krisen:</strong>
        Trotz der depressiven Episoden blieb Brandt über Jahrzehnte hinweg politisch aktiv –
        als SPD-Vorsitzender bis 1987, als Vorsitzender der Sozialistischen Internationale
        bis zu seinem Tod.</p>
        <p class="vb-intro"><strong>b) Tod am 8. Oktober 1992 in Unkel:</strong>
        Willy Brandt starb im Alter von 78 Jahren an den Folgen des Darmkrebses in seinem
        Wohnort Unkel am Rhein.</p>
        <p class="vb-intro"><strong>c) Staatsbegräbnis mit weltweiter Anteilnahme:</strong>
        Sein Tod löste international Trauer aus – zahlreiche Staats- und Regierungschefs
        nahmen am Staatsbegräbnis teil, das seine Bedeutung für die deutsche und europäische
        Nachkriegsgeschichte würdigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Nachträgliche biografische Aufarbeitung der depressiven Episoden:</strong>
        Erst nach seinem Tod wurde in umfassenden Biografien das Ausmaß seiner
        wiederkehrenden depressiven Krisen systematisch dokumentiert und in den Kontext
        seiner politischen Erfolge gestellt.</p>
        <p class="vb-intro"><strong>b) Ein Bild ungebrochener Stärke in der öffentlichen Erinnerung:</strong>
        Das öffentliche Gedächtnis an Brandt bleibt bis heute vor allem von Bildern
        entschlossener Stärke geprägt – dem Kniefall von Warschau, der Ostpolitik –, während
        die privaten Krisen erst durch spätere historische Forschung sichtbar wurden.</p>
        <p class="vb-intro"><strong>c) Keine Verklärung der eigenen Krankheit:</strong>
        Weder die depressiven Episoden noch die Krebserkrankung wurden nachträglich zu
        einem zentralen Bestandteil seines öffentlichen Vermächtnisses – dieses bleibt bis
        heute von seinem politischen Werk dominiert.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Kontratyp, der auch im Zusammenbruch weiterlief:</strong>
        Die SO9-typische Umkehrung der eigenen Trägheit in äußere Aktivität zeigte sich
        gerade in den Krisenjahren: Selbst in Phasen tiefster Erschöpfung reiste, verhandelte
        und sprach Brandt weiter, statt sich offen zurückzuziehen.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die Fassade der Unerschütterlichkeit:</strong>
        Dieselbe Kraft, die Brandt gegen den öffentlichen Widerstand zur Ostpolitik standhalten
        ließ, sorgte auch dafür, dass die eigene psychische Erschöpfung nach außen kaum
        sichtbar wurde – Stärke als Rüstung, auch gegenüber sich selbst.</p>
        <p class="vb-intro"><strong>c) Ein formaler Rücktrittsgrund statt einer persönlichen Erklärung:</strong>
        Dass Brandt 1974 wegen der Guillaume-Affäre zurücktrat, statt die eigene
        Erschöpfung öffentlich zu benennen, passt zum SO9w8-Muster: Handeln bleibt sichtbar,
        das eigene Innenleben bleibt verborgen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann des Friedens, der den eigenen inneren Frieden am seltensten fand:</strong>
        Brandts gesamtes politisches Werk galt der Versöhnung und dem äußeren Frieden –
        ausgerechnet der eigene innere Frieden blieb ihm über Jahrzehnte durch wiederkehrende
        Erschöpfungskrisen verwehrt, die er nie öffentlich beim Namen nannte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Parallelen zeigen sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-wilma-mankiller">Wilma
        Mankiller</a> und
        <a href="javascript:void(0)" data-route="krankheitsportraets-ronald-reagan">Ronald
        Reagan</a> (beide ebenfalls SO9w8): Alle drei hielten ihr öffentliches Amt trotz
        erheblicher gesundheitlicher Belastung so lange wie möglich aufrecht, statt sich
        vorzeitig zurückzuziehen. Bei allen SO9w8ern zeigt sich dasselbe Muster: die äußere
        Aktivität als Gegenkraft zur eigenen Erschöpfung, bis der Körper selbst die Grenze
        setzt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Darm, das Organ der stillen Verarbeitung?</strong>
        Für einen sozialen Typ 9 mit Achterflügel, dessen gesamtes Leben von der Umkehrung
        innerer Erschöpfung in äußere Aktivität geprägt war, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, das im Körper unbemerkt und ohne bewusste Kontrolle
        verarbeitet, wurde zum Ort der letzten Erkrankung – eine Krankheit, die, ähnlich wie
        die depressiven Episoden zuvor, lange im Verborgenen fortschritt. Diese Deutung ist
        eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird
        im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Neun zwangsläufig zu Depression oder
        Darmkrebs führt – <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig
        vom Subtyp.</strong> Was sich an Brandts Fall zeigen lässt, ist ein Muster im Umgang
        mit innerer Erschöpfung, das bei einem ausgeprägten sozialen Typ 9 mit Achterflügel
        immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Brandt kannte sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 9
        mit Achterflügel verwandelt innere Erschöpfung reflexhaft in äußere Aktivität, statt
        rechtzeitig innezuhalten und die eigene Grenze anzuerkennen, und lebte genau dieses
        Muster über Jahrzehnte unverändert aus. Wer die eigene Neigung, Erschöpfung durch
        Handeln zu überdecken, statt sie zu benennen, nicht als Muster erkennt, riskiert,
        dass der Körper irgendwann die Pause erzwingt, die der Wille nie zugelassen hat.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 9 mit Achterflügel erklärt bei <strong>Willy Brandt</strong> vieles
        am Verlauf seiner gesundheitlichen Geschichte: ein Mann, dessen gesamtes Wirken dem
        äußeren Frieden galt, fand den eigenen inneren Frieden über Jahrzehnte nicht – der
        Büffel, der durch jede Krise weiterlief, bis der Körper selbst am Ende die letzte,
        unausweichliche Ruhe erzwang.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-willy-brandt", label:"Porträt: Willy Brandt (SO9w8)"},
        {route:"krankheitsportraets-wilma-mankiller", label:"Krankheitsporträt: Wilma Mankiller (SO9w8) – gleicher Subtyp"},
        {route:"krankheitsportraets-ronald-reagan", label:"Krankheitsporträt: Ronald Reagan (SO9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so9", label:"Subtyp-Profil SO9"},
      ])}
    </div>
  `);
}

function hansDietrichGenscherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-hans-dietrich-genscher-portrait.jpg" alt="Hans-Dietrich Genscher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hans-Dietrich Genscher</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel · 1927–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hans-Dietrich Genscher</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-hans-dietrich-genscher">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: ein über Jahre bestehendes Herzleiden, an
        dessen Folgen Genscher im März 2016 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Genscher</strong> ist dem <strong>selbsterhaltenden Typ 9 mit Achterflügel</strong>
        zugeordnet. Die SE9 sucht Sicherheit durch Beharrlichkeit und Kontinuität, auch im
        Umgang mit der eigenen Gesundheit; der Achterflügel bringt eine ruhige, aber
        unverkennbare Entschlossenheit hinzu, die sich nicht wegdrängen lässt. Genau diese
        Kombination – geduldige Kontinuität im Amt, verbunden mit der Weigerung, sich von
        gesundheitlichen Rückschlägen aus dem öffentlichen Leben drängen zu lassen –
        bestimmte den Umgang mit dem eigenen Herzleiden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein über Jahre bekanntes Herzleiden:</strong>
        Genscher war nach übereinstimmenden biografischen Quellen über Jahre herzkrank – ein
        Umstand, der seinem politischen Umfeld bekannt war, aber öffentlich nie zu einem
        zentralen Thema wurde.</p>
        <p class="vb-intro"><strong>b) Kein öffentlicher Rückzug wegen der Erkrankung:</strong>
        Trotz des bekannten Herzleidens setzte Genscher seine politische und öffentliche
        Tätigkeit über Jahrzehnte fort, ohne die eigene Gesundheit zum Gegenstand öffentlicher
        Debatten zu machen.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes öffentliches Engagement bis ins hohe Alter:</strong>
        Auch nach seinem Rücktritt als Außenminister 1992 blieb Genscher als Elder Statesman
        der deutschen Außenpolitik präsent, mit Vorträgen, Interviews und diplomatischen
        Beratungen bis weit in sein neuntes Lebensjahrzehnt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zurückhaltung bei gesundheitlichen Details:</strong>
        Anders als manche Zeitgenossen machte Genscher Details zu seinem Herzleiden nie zum
        Gegenstand ausführlicher öffentlicher Schilderungen – die genaue Art und der Verlauf
        der Erkrankung blieben weitgehend privat.</p>
        <p class="vb-intro"><strong>b) Ein Leben, das bis zuletzt von Kontinuität geprägt war:</strong>
        Genschers letzte Lebensjahre waren, soweit öffentlich bekannt, von derselben ruhigen
        Beständigkeit geprägt, die seine gesamte politische Laufbahn kennzeichnete – kein
        dramatischer öffentlicher Bruch, kein plötzlicher Rückzug.</p>
        <p class="vb-intro"><strong>c) Zunehmende gesundheitliche Fragilität im hohen Alter:</strong>
        In den letzten Lebensjahren wurde Genschers gesundheitliche Verfassung nach Angaben
        seines Umfelds zunehmend fragiler, ohne dass dies öffentlich stark thematisiert
        wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 31. März 2016 in Wachtberg:</strong>
        Hans-Dietrich Genscher starb im Alter von 89 Jahren an den Folgen seines Herzleidens
        in seinem Wohnort Wachtberg bei Bonn.</p>
        <p class="vb-intro"><strong>b) Staatsakt mit weltweiter Anteilnahme:</strong>
        Sein Tod löste international Nachrufe und Trauerbekundungen aus – ein Staatsakt
        würdigte seine Rolle bei der deutschen Wiedervereinigung und der europäischen
        Entspannungspolitik.</p>
        <p class="vb-intro"><strong>c) Würdigung eines diplomatischen Lebenswerks bis zum Ende:</strong>
        Nachrufe betonten durchgängig sein diplomatisches Lebenswerk, während seine private
        gesundheitliche Geschichte nur am Rande erwähnt wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentliches Bild ungebrochener Präsenz:</strong>
        Bis kurz vor seinem Tod blieb das öffentliche Bild Genschers das eines aktiven,
        präsenten Elder Statesman – nicht das eines von langjähriger Krankheit gezeichneten
        Mannes.</p>
        <p class="vb-intro"><strong>b) Keine nachträgliche Dramatisierung der Erkrankung:</strong>
        Auch in Nachrufen und Würdigungen wurde das Herzleiden nicht zu einem zentralen
        Erzählelement seines Lebens gemacht – es blieb ein stiller, fast beiläufiger
        Bestandteil seiner Biografie.</p>
        <p class="vb-intro"><strong>c) Fortwirken seines diplomatischen Vermächtnisses:</strong>
        Genschers Rolle bei der deutschen Einheit und der europäischen Entspannungspolitik
        blieb nach seinem Tod das prägende öffentliche Bild, unabhängig von seiner privaten
        gesundheitlichen Geschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontinuität als Antwort auf die eigene Erkrankung:</strong>
        Die SE9-typische Suche nach Sicherheit durch Beharrlichkeit zeigte sich auch im
        Umgang mit dem eigenen Herzleiden: Genscher ließ die Krankheit nicht zum Anlass für
        einen dramatischen Rückzug werden, sondern setzte sein öffentliches Wirken in
        gewohnter Kontinuität fort.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die stille Entschlossenheit:</strong>
        Dieselbe ruhige, aber unverkennbare Entschlossenheit, mit der Genscher jahrzehntelang
        zwischen den Fronten des Kalten Krieges vermittelte, zeigte sich im Umgang mit der
        eigenen Gesundheit als Weigerung, sich von der Erkrankung aus dem öffentlichen Leben
        drängen zu lassen.</p>
        <p class="vb-intro"><strong>c) Diskretion statt öffentlicher Inszenierung:</strong>
        Dass Genscher Details zu seinem Herzleiden nie öffentlich ausbreitete, passt zur
        SE9w8-Neigung, private Angelegenheiten diskret zu behandeln, während die öffentliche
        Rolle unverändert weitergeführt wird.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Brückenbauer zwischen Machtblöcken, der auch die eigene Krankheit ruhig überbrückte:</strong>
        Genschers gesamtes Lebenswerk beruhte auf der Fähigkeit, Spannungen auszuhalten,
        ohne sie eskalieren zu lassen – genau diese Haltung übertrug sich auch auf den Umgang
        mit dem eigenen Herzleiden: kein Kampf, keine Dramatisierung, sondern beharrliche
        Fortsetzung des gewohnten Weges.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Parallelen zeigen sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-david-hume">David Hume</a>
        und
        <a href="javascript:void(0)" data-route="krankheitsportraets-johannes-brahms">Johannes
        Brahms</a> (beide ebenfalls SE9w8): Alle drei begegneten einer fortschreitenden
        Erkrankung mit derselben ruhigen, fast gelassenen Beharrlichkeit, ohne die
        Erkrankung zum zentralen öffentlichen Thema zu machen. Bei allen SE9w8ern zeigt sich
        dasselbe Muster: Sicherheit durch Kontinuität, auch angesichts des eigenen
        körperlichen Verfalls.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Herz, das Organ der stillen Vermittlung?</strong>
        Für einen selbsterhaltenden Typ 9 mit Achterflügel, dessen gesamtes Lebenswerk auf
        der stillen Vermittlung zwischen verfeindeten Lagern beruhte, liegt eine Deutung
        nahe: Ausgerechnet jenes Organ, das im Volksmund für Verbindung und Ausgleich steht,
        wurde zum Ort der eigenen körperlichen Belastung. Diese Deutung ist eine plausible
        Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu
        Herzleiden führt – <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig
        vom Subtyp.</strong> Was sich an Genschers Fall zeigen lässt, ist ein Muster im
        Umgang mit einer langjährigen Erkrankung, das bei einem ausgeprägten
        selbsterhaltenden Typ 9 mit Achterflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Genscher kannte sein eigenes Muster nicht als Enneagramm-Struktur – der
        selbsterhaltende Typ 9 mit Achterflügel hält reflexhaft an der eigenen Kontinuität
        fest, auch gegenüber der eigenen Krankheit, statt rechtzeitig kürzerzutreten, und
        lebte genau dieses Muster bis zu seinem Tod unverändert aus. Wer die eigene Neigung,
        gesundheitliche Warnsignale mit stiller Beharrlichkeit zu überdecken, nicht als Muster
        erkennt, riskiert, dass die Krankheit unbemerkt über Jahre fortschreitet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 9 mit Achterflügel erklärt bei <strong>Hans-Dietrich
        Genscher</strong> vieles am Umgang mit dem eigenen Herzleiden: ein Mann, dessen
        gesamtes Lebenswerk der stillen Vermittlung zwischen verfeindeten Lagern galt,
        begegnete auch der eigenen Krankheit mit derselben ruhigen Kontinuität – der Elefant,
        der bis zuletzt in seinem eigenen Rhythmus weiterging, ohne das Tempo für die
        Krankheit zu ändern.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-hans-dietrich-genscher", label:"Porträt: Hans-Dietrich Genscher (SE9w8)"},
        {route:"krankheitsportraets-david-hume", label:"Krankheitsporträt: David Hume (SE9w8) – gleicher Subtyp"},
        {route:"krankheitsportraets-johannes-brahms", label:"Krankheitsporträt: Johannes Brahms (SE9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se9", label:"Subtyp-Profil SE9"},
      ])}
    </div>
  `);
}

