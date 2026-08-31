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

function astridLindgrenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-astrid-lindgren-portrait.jpg" alt="Astrid Lindgren" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Astrid Lindgren</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · 1907–2002</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Astrid Lindgren</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-astrid-lindgren">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: eine fortschreitende Makuladegeneration im
        hohen Alter, die sie zwang, ihre jahrzehntelange Arbeitsroutine des Schreibens
        vollständig aufzugeben.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Lindgren</strong> ist dem <strong>selbsterhaltenden Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SE1 richtet ihren Perfektionismus auf die eigene Arbeitsdisziplin;
        der Neunerflügel gibt ihr die Fähigkeit, sich anzupassen und selbst tiefgreifende
        Verluste ohne öffentliches Aufsehen zu verarbeiten. Genau diese Kombination – der
        Verlust des zentralen Arbeitswerkzeugs, verbunden mit der stillen Anpassung an neue
        Arbeitsweisen statt öffentlicher Klage – bestimmte den Umgang mit der eigenen
        Erblindung im Alter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Nachlassende Sehkraft im hohen Alter:</strong>
        Nach übereinstimmenden biografischen Quellen begann Lindgrens Sehkraft in ihren
        letzten Lebensjahrzehnten spürbar nachzulassen – ein schleichender Prozess, der ihre
        über Jahrzehnte etablierte Arbeitsroutine zunehmend erschwerte.</p>
        <p class="vb-intro"><strong>b) Diagnose einer altersbedingten Makuladegeneration:</strong>
        Bei Lindgren wurde eine fortschreitende Makuladegeneration diagnostiziert, eine
        Augenerkrankung, die das scharfe Sehen im Zentrum des Gesichtsfelds zunehmend
        beeinträchtigt.</p>
        <p class="vb-intro"><strong>c) Zunehmende Schwierigkeiten beim Schreiben und Lesen:</strong>
        Die Erkrankung machte es ihr im Lauf der Jahre immer schwerer, ihre gewohnte
        Arbeitsweise – handschriftliche Stenografie am Morgen, anschließendes Abtippen –
        fortzusetzen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Nahezu vollständige Erblindung in den letzten Lebensjahren:</strong>
        In ihren letzten Lebensjahren war Lindgren nach übereinstimmenden Berichten praktisch
        blind – eine Einschränkung, die sie öffentlich kaum thematisierte.</p>
        <p class="vb-intro"><strong>b) Umstellung auf Diktate statt Schreiben:</strong>
        Um weiterhin schreiben zu können, stellte Lindgren ihre Arbeitsweise auf Diktate um –
        sie sprach Texte, die von ihrer langjährigen Sekretärin niedergeschrieben wurden,
        statt sie selbst zu Papier zu bringen.</p>
        <p class="vb-intro"><strong>c) Kein öffentlicher Rückzug wegen der Erkrankung:</strong>
        Trotz der Sehbehinderung setzte Lindgren ihr öffentliches Engagement, insbesondere
        für den Tierschutz, bis in ihre letzten Lebensjahre fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortgesetztes Tierschutz-Engagement trotz Erblindung:</strong>
        Ihr entscheidendes öffentliches Engagement für die „Lex Lindgren" 1988 fand statt, als
        ihre Sehkraft bereits erheblich eingeschränkt war – ein Beweis dafür, dass die
        Erkrankung ihre Wirksamkeit nicht einschränkte.</p>
        <p class="vb-intro"><strong>b) Keine ausführliche öffentliche Thematisierung:</strong>
        Anders als bei manchen prominenten Persönlichkeiten mit vergleichbaren Erkrankungen
        machte Lindgren ihre Erblindung nie zu einem öffentlichen Anliegen oder einer
        Kampagne – sie blieb ein privater Umstand, der ihr Wirken praktisch, aber nicht
        öffentlich prägte.</p>
        <p class="vb-intro"><strong>c) Tod im Alter von 94 Jahren:</strong>
        Lindgren starb 2002 in Stockholm, nach Jahren, in denen sie trotz nahezu vollständiger
        Erblindung ihre öffentliche Wirksamkeit aufrechterhalten hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Nationale Trauer bei ihrem Tod:</strong>
        Ihr Begräbnis wurde live im schwedischen Fernsehen übertragen – ein Ausdruck der
        immensen nationalen Bedeutung, die weit über ihre gesundheitlichen Einschränkungen
        hinausreichte.</p>
        <p class="vb-intro"><strong>b) Kein öffentliches Bild einer kranken alten Frau:</strong>
        Das öffentliche Bild Lindgrens blieb bis zu ihrem Tod von Wirksamkeit und moralischer
        Autorität geprägt, nicht von der eigenen körperlichen Einschränkung.</p>
        <p class="vb-intro"><strong>c) Nachträgliche biografische Würdigung der Anpassungsleistung:</strong>
        Erst spätere Biografien würdigten ausführlicher, welche Anpassungsleistung es
        bedeutete, im hohen Alter eine völlig neue Arbeitsweise zu erlernen, ohne dabei an
        Wirksamkeit einzubüßen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Disziplin, die sich an neue Umstände anpasste:</strong>
        Die SE1-typische Arbeitsdisziplin zeigte sich auch im Umgang mit der Erblindung:
        Lindgren gab das Schreiben nicht auf, sondern fand eine neue, ebenso diszipliniert
        durchgehaltene Methode – das Diktat.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und die stille Anpassung statt öffentlicher Klage:</strong>
        Dieselbe Zurückhaltung, mit der Lindgren zeitlebens ihr Privatleben vor der
        Öffentlichkeit schützte, zeigte sich im Umgang mit der Erblindung als bewusste
        Entscheidung, die eigene Einschränkung nicht zum öffentlichen Thema zu machen.</p>
        <p class="vb-intro"><strong>c) Wirksamkeit trotz Einschränkung als Fortsetzung des eigenen Musters:</strong>
        Dass sie ihr wichtigstes politisches Engagement – den Tierschutz – gerade in den
        Jahren fortsetzte, als ihre Sehkraft am stärksten eingeschränkt war, passt zur
        SE1w9-Überzeugung, dass die eigene Aufgabe wichtiger ist als die eigene Bequemlichkeit
        oder Sichtbarkeit der eigenen Grenzen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Autorin genauer Beobachtung, die die Fähigkeit zu sehen verlor:</strong>
        Lindgrens gesamtes Werk beruhte auf genauer Beobachtung – der kindlichen Welt, der
        gesellschaftlichen Ungerechtigkeit, der eigenen Manuskripte als Lektorin. Ausgerechnet
        das Sehvermögen, das diese Genauigkeit ermöglichte, versagte ihr im Alter.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Konrad
        Adenauer (SE1w9)</a>: Auch Adenauer blieb trotz erheblicher körperlicher
        Beeinträchtigung bis ins hohe Alter bemerkenswert wirksam, ohne die eigene
        gesundheitliche Belastung zum öffentlichen Thema zu machen. Bei beiden SE1w9ern zeigt
        sich dasselbe Muster: eine körperliche Einschränkung wird durch Disziplin und stille
        Anpassung kompensiert, statt sie öffentlich zu verhandeln.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Augen, das Werkzeug der genauen Beobachtung?</strong>
        Für eine selbsterhaltende Eins mit Neunerflügel, deren gesamtes Werk auf präziser
        Beobachtung und disziplinierter Genauigkeit beruhte, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, das die Grundlage ihrer Arbeitsweise war, wurde zum Ort des
        körperlichen Verlusts. Diese Deutung ist eine plausible Interpretation, kein belegter
        klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu
        Makuladegeneration führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Lindgrens Fall zeigen lässt, ist ein
        Muster im Umgang mit einer altersbedingten körperlichen Einschränkung, das bei einer
        ausgeprägten selbsterhaltenden Eins mit Neunerflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Lindgren kannte ihr eigenes Muster nicht als Enneagramm-Struktur – die
        selbsterhaltende Eins mit Neunerflügel hält reflexhaft an der eigenen Disziplin und
        stillen Anpassung fest, statt körperliche Verluste offen zu benennen, und lebte genau
        dieses Muster bis zu ihrem Tod unverändert aus. Wer die eigene Neigung, körperliche
        Einschränkungen ohne öffentliche Aussprache zu kompensieren, nicht als Muster
        erkennt, riskiert, dass die eigene Belastung unsichtbar bleibt, auch wenn Unterstützung
        möglich wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 1 mit Neunerflügel erklärt bei <strong>Astrid
        Lindgren</strong> vieles am Umgang mit der eigenen Erblindung: eine Frau, deren
        gesamtes Werk auf genauer Beobachtung beruhte, fand eine neue, ebenso diszipliniert
        durchgehaltene Form, weiterzuwirken, als ihr das Sehvermögen selbst versagte – der
        Adler, der auch ohne den vollen Blick weiterhin wusste, wohin er fliegen musste.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-astrid-lindgren", label:"Porträt: Astrid Lindgren (SE1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Krankheitsporträt: Konrad Adenauer (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-robert-de-niro", label:"Krankheitsporträt: Robert De Niro (SE1w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

function seanConneryKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-sean-connery-portrait.jpg" alt="Sean Connery" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sean Connery</p>
        <p class="krim-portrait-typ">SO3w4 · Sozialer Typ 3 mit Viererflügel · 1930–2020</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sean Connery</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-sean-connery">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel,
        das dort nicht behandelt wird: eine Demenzerkrankung in seinen letzten Lebensjahren,
        die er und seine Familie weitgehend vor der Öffentlichkeit verborgen hielten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Connery</strong> ist dem <strong>sozialen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die SO3 lebt von einem makellosen öffentlichen Image; der Viererflügel
        verlangt zugleich strikte Kontrolle darüber, was von der eigenen Person überhaupt
        preisgegeben wird. Genau diese Kombination – die Notwendigkeit, das eigene Bild
        makellos zu halten, verbunden mit einer lebenslangen Zurückhaltung gegenüber jeder
        Form von Selbstenthüllung – bestimmte, wie mit der eigenen Demenzerkrankung
        umgegangen wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Rückzug aus der Öffentlichkeit ab Mitte der 2000er:</strong>
        Connerys freiwilliger Rückzug aus dem Schauspielberuf und der Öffentlichkeit fiel
        zeitlich mit dem Beginn gesundheitlicher Veränderungen zusammen, die zu diesem
        Zeitpunkt öffentlich nicht bekannt waren.</p>
        <p class="vb-intro"><strong>b) Ein zunehmend zurückgezogenes Leben auf den Bahamas:</strong>
        In seinen letzten Lebensjahren lebte Connery weitgehend abgeschieden auf den Bahamas,
        mit nur noch sehr seltenen öffentlichen Auftritten.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Krankheitsdiagnose zu Lebzeiten:</strong>
        Zu Lebzeiten machte Connery keine gesundheitliche Diagnose öffentlich – Spekulationen
        über seinen Gesundheitszustand blieben unbestätigt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Bestätigung der Demenzerkrankung erst nach dem Tod:</strong>
        Erst nach Connerys Tod im Oktober 2020 bestätigte sein Sohn Jason öffentlich, dass
        sein Vater in den letzten Lebensjahren an Demenz gelitten hatte.</p>
        <p class="vb-intro"><strong>b) Ein über Jahre verborgen gehaltener Verlauf:</strong>
        Nach Angaben seines Sohnes hatte die Erkrankung bereits mehrere Jahre vor Connerys Tod
        begonnen – ein Zeitraum, in dem in der Öffentlichkeit nichts davon bekannt war.</p>
        <p class="vb-intro"><strong>c) Betreuung im engsten Familienkreis:</strong>
        Connery wurde in seinen letzten Lebensjahren im privaten Rahmen von seiner Familie
        betreut, ohne dass Details davon nach außen drangen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 31. Oktober 2020 auf den Bahamas:</strong>
        Sean Connery starb im Alter von 90 Jahren in seinem Haus auf den Bahamas, im Schlaf,
        umgeben von seiner Familie.</p>
        <p class="vb-intro"><strong>b) Nachträgliche öffentliche Einordnung durch die Familie:</strong>
        Die Bestätigung der Demenzdiagnose durch seinen Sohn erfolgte bewusst erst nach dem
        Tod, als Teil der öffentlichen Würdigung seines Lebens, nicht während der eigentlichen
        Krankheitsphase.</p>
        <p class="vb-intro"><strong>c) Weltweite Trauer um eine Ikone:</strong>
        Sein Tod löste internationale Nachrufe aus, die vor allem sein filmisches Lebenswerk
        würdigten – die Demenzerkrankung wurde darin nur am Rande erwähnt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentliches Bild, das bis zuletzt intakt blieb:</strong>
        Da die Erkrankung erst posthum bekannt wurde, blieb das öffentliche Bild Connerys zu
        Lebzeiten von der eigentlichen gesundheitlichen Realität seiner letzten Jahre
        unberührt.</p>
        <p class="vb-intro"><strong>b) Überraschung in der öffentlichen Reaktion:</strong>
        Viele Fans und Medien reagierten überrascht auf die nachträgliche Bestätigung, da
        Connerys öffentlich zuletzt gezeigtes Bild keinerlei Hinweise auf die Erkrankung
        enthalten hatte.</p>
        <p class="vb-intro"><strong>c) Würdigung der familiären Diskretion:</strong>
        In Nachrufen wurde teils ausdrücklich die Zurückhaltung der Familie gewürdigt, die
        Connerys letzte Lebensjahre vor öffentlicher Neugier geschützt hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle über das eigene Bild bis zuletzt:</strong>
        Die SO3-typische Notwendigkeit, das eigene öffentliche Image makellos zu halten,
        setzte sich auch im Umgang mit der Demenzerkrankung fort: Ein Zustand, der die
        vollständige Kontrolle über sich selbst untergräbt, wurde konsequent von der
        Öffentlichkeit ferngehalten.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel und das Misstrauen gegenüber Nähe:</strong>
        Dieselbe Zurückhaltung, mit der Connery zeitlebens sein Privatleben schützte, zeigte
        sich im Umgang mit der eigenen Krankheit als konsequente Entscheidung, selbst engen
        Weggefährten und der Öffentlichkeit diesen Teil seines Lebens nicht zugänglich zu
        machen.</p>
        <p class="vb-intro"><strong>c) Der Sohn als Vermittler der posthumen Wahrheit:</strong>
        Dass die Bestätigung erst nach dem Tod durch den Sohn erfolgte, passt zum SO3w4-Muster:
        Erst wenn das eigene Bild nicht mehr durch die Offenlegung gefährdet werden kann,
        wird die volle Wahrheit zugänglich gemacht.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Meister der kontrollierten Selbstdarstellung, konfrontiert mit dem Verlust jeder Kontrolle:</strong>
        Connerys gesamtes Berufsleben beruhte auf der präzisen Kontrolle darüber, was von ihm
        gezeigt wurde – ausgerechnet eine Erkrankung, die genau diese Kontrolle über den
        eigenen Geist unmöglich macht, traf ihn in seinen letzten Lebensjahren.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-karl-lagerfeld">Karl
        Lagerfeld (SO3w4)</a>: Auch Lagerfeld verbarg eine schwere Diagnose fast bis zuletzt
        vor der Öffentlichkeit, um das eigene, sorgfältig kontrollierte Image nicht zu
        gefährden. Bei beiden SO3w4ern zeigt sich dasselbe Muster: Die eigene Erkrankung wird
        so lange wie möglich vollständig unter Kontrolle der eigenen Selbstdarstellung
        gehalten, statt sie öffentlich zu verhandeln.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Gedächtnis, der Speicher der eigenen Rollen?</strong>
        Für einen sozialen Typ 3 mit Viererflügel, dessen gesamtes Berufsleben aus dem
        präzisen Einstudieren und Verkörpern von Rollen bestand, liegt eine Deutung nahe:
        Ausgerechnet jene kognitive Fähigkeit, die sein gesamtes Lebenswerk trug – das
        Gedächtnis –, wurde zum Ort des Verfalls. Diese Deutung ist eine plausible
        Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu Demenz führt –
        <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig vom Subtyp.</strong>
        Was sich an Connerys Fall zeigen lässt, ist ein Muster im Umgang mit einer das
        Selbstbild bedrohenden Diagnose, das bei einem ausgeprägten sozialen Typ 3 mit
        Viererflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Connery kannte sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 3
        mit Viererflügel hält reflexhaft an der Kontrolle über das eigene öffentliche Bild
        fest, auch dann, wenn eine Erkrankung eine offene Aussprache dringend nahelegen
        würde, und lebte genau dieses Muster bis zum Tod unverändert aus. Wer die eigene
        Neigung, das eigene Bild um jeden Preis makellos zu halten, nicht als Muster
        erkennt, riskiert, dass die eigene Realität erst posthum ans Licht kommt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 3 mit Viererflügel erklärt bei <strong>Sean Connery</strong> vieles
        am Umgang mit der eigenen Demenzerkrankung: ein Mann, dessen gesamtes Lebenswerk auf
        makelloser Selbstkontrolle beruhte, hielt auch den Verlust dieser Kontrolle bis zum
        Tod vollständig privat – der Gepard, der sich am Ende in die Stille seiner eigenen,
        nie ganz preisgegebenen Welt zurückzog, bevor die Wahrheit überhaupt ans Licht
        kommen konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-sean-connery", label:"Porträt: Sean Connery (SO3w4)"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

function ashtonKutcherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-ashton-kutcher-portrait.jpg" alt="Ashton Kutcher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ashton Kutcher</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · geb. 1978</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ashton Kutcher</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ashton-kutcher">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: eine seltene Autoimmunerkrankung, an der
        Kutcher zeitweise Seh-, Hör- und Gehfähigkeit verlor, bevor er sie 2023 öffentlich
        machte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kutcher</strong> ist dem <strong>sozialen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SO2 setzt ihre Reichweite gezielt für eine größere Sache ein; der
        Dreierflügel bringt den Antrieb, aus jeder Erfahrung – auch der eigenen Krankheit –
        einen sichtbaren, wirksamen Beitrag zu machen. Genau diese Kombination – zunächst
        vollständige Geheimhaltung, dann eine gezielte, öffentlich wirksame Offenlegung –
        bestimmte den Umgang mit der eigenen Autoimmunerkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Plötzlich einsetzende Symptome:</strong>
        Nach eigener Schilderung begannen die Symptome abrupt, mit einem raschen Verlust an
        Gleichgewicht, Sehkraft und Hörvermögen, ohne erkennbare Vorwarnung.</p>
        <p class="vb-intro"><strong>b) Diagnose einer seltenen Form der Vaskulitis:</strong>
        Ärzte diagnostizierten bei Kutcher eine seltene autoimmune Gefäßentzündung, die
        mehrere Sinnesorgane und die Bewegungsfähigkeit gleichzeitig beeinträchtigte.</p>
        <p class="vb-intro"><strong>c) Monatelanger, intensiver Rehabilitationsprozess:</strong>
        Nach eigener Aussage musste er anschließend erneut gehen, sehen und hören lernen –
        ein Prozess, der sich über Monate erstreckte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zwei Jahre vollständige Geheimhaltung:</strong>
        Kutcher hielt die Diagnose und die Erkrankung rund zwei Jahre lang vollständig
        privat, bevor er sich öffentlich dazu äußerte.</p>
        <p class="vb-intro"><strong>b) Öffentliche Offenlegung 2023 in einem Podcast-Interview:</strong>
        Erst in einem ausführlichen Interview machte Kutcher die Erkrankung und ihren Verlauf
        detailliert öffentlich – ein bewusst gewählter Rahmen statt einer spontanen
        Enthüllung.</p>
        <p class="vb-intro"><strong>c) Sichtbare, aber nicht vollständig zurückgebildete Folgen:</strong>
        Kutcher beschrieb, dass einige Beeinträchtigungen, insbesondere im Gleichgewichtssinn,
        auch nach der akuten Krankheitsphase bestehen blieben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Betonung von Dankbarkeit statt Klage:</strong>
        In seiner öffentlichen Schilderung stellte Kutcher wiederholt die eigene Dankbarkeit
        für das Überleben und die Genesung in den Vordergrund, statt die Erkrankung als
        Opfergeschichte zu erzählen.</p>
        <p class="vb-intro"><strong>b) Positive mediale Resonanz:</strong>
        Die Offenlegung löste breite mediale Aufmerksamkeit und überwiegend positive
        Reaktionen aus, die Kutchers Offenheit und seinen Umgang mit der Krankheit
        würdigten.</p>
        <p class="vb-intro"><strong>c) Fortsetzung öffentlicher Aktivität nach der Offenlegung:</strong>
        Nach dem Interview setzte Kutcher seine schauspielerische und unternehmerische
        Tätigkeit unverändert fort, ohne dass die Krankheit zu einem dauerhaften öffentlichen
        Thema wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Aufmerksamkeit für eine seltene Erkrankung:</strong>
        Kutchers Offenheit trug international dazu bei, die Aufmerksamkeit für seltene
        Autoimmunerkrankungen zu erhöhen, über die zuvor kaum öffentlich gesprochen wurde.</p>
        <p class="vb-intro"><strong>b) Verzögerte statt sofortige Offenlegung:</strong>
        Der zweijährige Abstand zwischen Erkrankung und öffentlicher Offenlegung zeigt, wie
        lange die Krise zunächst ausschließlich privat verarbeitet wurde.</p>
        <p class="vb-intro"><strong>c) Keine Verklärung der eigenen Genesung:</strong>
        Kutcher betonte in seiner Schilderung explizit, dass nicht alle Beeinträchtigungen
        vollständig verschwunden seien – eine differenzierte Darstellung statt einer
        glatten Heilungsgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Privater Kampf, bevor er öffentlich wird:</strong>
        Die SO2-typische Ausrichtung auf öffentliche Wirksamkeit setzte erst ein, nachdem die
        eigentliche Krise privat durchlebt und überstanden war – die Krankheit selbst blieb
        zunächst außerhalb der öffentlichen Rolle.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die kontrollierte, wirksame Offenlegung:</strong>
        Dieselbe Fähigkeit, aus Sichtbarkeit konkrete Wirkung zu erzeugen, die Kutchers
        Engagement gegen Kinderhandel prägt, zeigte sich auch hier: Die Offenlegung erfolgte
        in einem sorgfältig gewählten Format, das maximale, aber kontrollierte öffentliche
        Wirkung erzielte.</p>
        <p class="vb-intro"><strong>c) Dankbarkeit als öffentliche Botschaft:</strong>
        Dass Kutcher die Erkrankung als Anlass für Dankbarkeit statt für Klage darstellte,
        passt zur SO2-Neigung, auch die eigene Verwundbarkeit in eine positive, für andere
        nützliche Botschaft zu verwandeln.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann öffentlicher Reichweite, der zwei Jahre lang unsichtbar kämpfte:</strong>
        Kutchers gesamtes öffentliches Wirken beruht auf der gezielten Nutzung von
        Sichtbarkeit für einen größeren Zweck – ausgerechnet die eigene existenzielle Krise
        verbrachte er zunächst vollständig außerhalb jeder Öffentlichkeit, bevor er sie zu
        einem bewusst gewählten Zeitpunkt in eine Botschaft verwandelte.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet Sehen, Hören und Gehen, die Grundlagen der Wahrnehmung selbst?</strong>
        Für einen sozialen Typ 2 mit Dreierflügel, dessen gesamtes Wirken auf der Fähigkeit
        beruht, gesellschaftliche Missstände wahrzunehmen und sichtbar zu machen, liegt eine
        Deutung nahe: Ausgerechnet jene Sinne, die überhaupt erst Wahrnehmung und öffentliches
        Handeln ermöglichen, versagten ihm zeitweise vollständig. Diese Deutung ist eine
        plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu Autoimmun­erkrankungen
        führt – <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig vom
        Subtyp.</strong> Was sich an Kutchers Fall zeigen lässt, ist ein Muster im Umgang mit
        einer überwundenen existenziellen Krise, das bei einem ausgeprägten sozialen Typ 2
        mit Dreierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kutcher kennt sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 2
        mit Dreierflügel hält reflexhaft an der Kontrolle über den Zeitpunkt und die Form der
        eigenen Sichtbarkeit fest, auch in existenziellen Krisen, und lebt genau dieses Muster
        bis heute weitgehend unverändert aus. Wer die eigene Neigung, private Krisen erst
        nach vollständiger Verarbeitung öffentlich zu machen, nicht als Muster erkennt,
        riskiert, dass Unterstützung von außen erst kommt, wenn die schwierigste Phase bereits
        vorüber ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 2 mit Dreierflügel erklärt bei <strong>Ashton Kutcher</strong> vieles
        am Umgang mit der eigenen Autoimmunerkrankung: ein Mann, dessen gesamtes öffentliches
        Wirken auf sichtbarer Wirksamkeit beruht, kämpfte die eigene existenzielle Krise erst
        vollständig privat aus, bevor er sie in eine Botschaft der Dankbarkeit verwandelte –
        der Golden Retriever, der seine tiefste Verwundbarkeit erst dann zeigte, als er sie
        selbst in etwas Nützliches für andere umwandeln konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ashton-kutcher", label:"Porträt: Ashton Kutcher (SO2w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

function robertDeNiroKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-robert-de-niro-portrait.jpg" alt="Robert De Niro" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robert De Niro</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · geb. 1943</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Robert De Niro</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-robert-de-niro">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: eine 2003 diagnostizierte Prostatakrebs-
        Erkrankung, die er weitgehend privat behandeln ließ und nur knapp öffentlich
        kommentierte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>De Niro</strong> ist dem <strong>selbsterhaltenden Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SE1 richtet ihren Anspruch an Genauigkeit nach innen, auf die eigene
        Vorbereitung und Integrität; der Neunerflügel bringt eine Zurückhaltung hinzu, die
        sich nicht öffentlich zeigen muss, um zu wirken. Genau diese Kombination – präzise,
        entschlossene medizinische Behandlung bei gleichzeitiger, fast vollständiger
        öffentlicher Zurückhaltung – bestimmte den Umgang mit der eigenen Krebsdiagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose im Jahr 2003:</strong>
        Bei De Niro wurde 2003 im Rahmen einer Routineuntersuchung Prostatakrebs
        diagnostiziert – ein früher Diagnosezeitpunkt, der eine erfolgreiche Behandlung
        deutlich begünstigte.</p>
        <p class="vb-intro"><strong>b) Keine ausführliche öffentliche Ankündigung:</strong>
        Anders als viele andere Prominente mit vergleichbaren Diagnosen gab De Niro keine
        ausführliche öffentliche Erklärung ab, sondern ließ die Nachricht knapp über
        Medienberichte bekannt werden.</p>
        <p class="vb-intro"><strong>c) Zügige Einleitung der Behandlung:</strong>
        Nach der Diagnose begann De Niro nach übereinstimmenden Berichten zügig mit der
        Behandlung, ohne den Prozess öffentlich zu begleiten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Erfolgreiche Behandlung ohne dauerhafte öffentliche Sichtbarkeit:</strong>
        Die Behandlung verlief nach allen vorliegenden Berichten erfolgreich, ohne dass De
        Niro den Krankheitsverlauf zu einem fortlaufenden öffentlichen Thema machte.</p>
        <p class="vb-intro"><strong>b) Wenige, sehr knappe spätere Erwähnungen:</strong>
        In seltenen späteren Interviews erwähnte De Niro die Erkrankung nur knapp, meist im
        Zusammenhang mit Appellen an andere Männer, sich regelmäßig untersuchen zu lassen.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug aus der Schauspielarbeit:</strong>
        Anders als bei manchen Kollegen führte die Diagnose zu keiner erkennbaren Unterbrechung
        seiner Filmarbeit – De Niro blieb während und nach der Behandlung kontinuierlich
        aktiv.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Gelegentliche öffentliche Nutzung zur Sensibilisierung:</strong>
        In den Jahren nach seiner Genesung nutzte De Niro vereinzelte öffentliche Anlässe, um
        auf die Bedeutung früher Prostatakrebs-Vorsorgeuntersuchungen hinzuweisen.</p>
        <p class="vb-intro"><strong>b) Keine Krankheitsgeschichte als Teil seines öffentlichen Bildes:</strong>
        Im Unterschied zu Schauspielern, die ihre Krankengeschichte zu einem wiederkehrenden
        Thema in Interviews machten, blieb De Niros Erkrankung ein Randaspekt seiner
        öffentlichen Biografie.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte hohe berufliche Produktivität:</strong>
        In den zwei Jahrzehnten nach der Diagnose drehte De Niro Dutzende weiterer Filme,
        darunter mehrere mit Martin Scorsese, ohne dass die frühere Erkrankung öffentlich
        thematisiert wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Diskrete Aufmerksamkeit statt öffentlicher Kampagne:</strong>
        De Niros knappe, seltene Erwähnungen der eigenen Erkrankung erzeugten dennoch
        punktuelle mediale Aufmerksamkeit für das Thema Prostatakrebs-Vorsorge, ohne dass er
        selbst zur zentralen öffentlichen Stimme des Themas wurde.</p>
        <p class="vb-intro"><strong>b) Keine dramatisierte Genesungserzählung:</strong>
        Anders als bei manch anderer Krebserkrankung Prominenter existiert keine ausführliche,
        emotional aufgeladene öffentliche Erzählung von De Niros Genesungsprozess.</p>
        <p class="vb-intro"><strong>c) Ein öffentliches Bild, das von der Erkrankung unberührt blieb:</strong>
        De Niros öffentliches Image blieb von der Krebserkrankung praktisch unberührt – es
        dominierten weiterhin seine Filmrollen und sein handwerklicher Ruf.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Präzise Behandlung ohne öffentliche Inszenierung:</strong>
        Die SE1-typische Genauigkeit im Umgang mit der eigenen Sache zeigte sich auch bei der
        Krebsbehandlung: konsequent, zügig eingeleitet, ohne dass der Prozess selbst zum
        Gegenstand öffentlicher Aufmerksamkeit wurde.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und der Rückzug, sobald die Aufgabe erledigt ist:</strong>
        Dieselbe Zurückhaltung, die De Niro nach jedem Filmdreh in die Stille zurückkehren
        lässt, zeigte sich im Umgang mit der eigenen Krankheit: Sobald die Behandlung
        abgeschlossen war, verschwand das Thema fast vollständig aus seiner öffentlichen
        Präsenz.</p>
        <p class="vb-intro"><strong>c) Vorsorge als sachliche Botschaft, nicht als persönliches Bekenntnis:</strong>
        Wenn De Niro die Erkrankung überhaupt erwähnte, geschah dies in Form einer sachlichen
        Empfehlung an andere Männer, nicht als ausführliche persönliche Erzählung – Wahrhaftigkeit
        im Handwerk der Botschaft, ohne unnötige Selbstdarstellung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Meister der Vorbereitung, der die eigene Krankheit ebenso methodisch behandelte:</strong>
        De Niros gesamtes Werk beruht auf akribischer, nahezu wissenschaftlicher Vorbereitung
        – dieselbe Methodik übertrug sich auf den Umgang mit der eigenen Krebsdiagnose: zügig
        erkannt, konsequent behandelt, ohne unnötige öffentliche Dramatisierung.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Parallelen zeigen sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Konrad
        Adenauer</a> und
        <a href="javascript:void(0)" data-route="krankheitsportraets-astrid-lindgren">Astrid
        Lindgren</a> (beide ebenfalls SE1w9): Alle drei begegneten gesundheitlichen
        Einschränkungen mit diszipliniertem, praktischem Handeln statt öffentlicher
        Aufmerksamkeit. Bei allen SE1w9ern zeigt sich dasselbe Muster: Die Krankheit wird
        gelöst wie eine Aufgabe – gründlich, aber ohne Bühne.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Prostata, ein stilles, selten thematisiertes Organ?</strong>
        Für einen selbsterhaltenden Typ 1 mit Neunerflügel, dessen gesamtes Werk auf
        methodischer Vorbereitung und zugleich auf öffentlicher Zurückhaltung beruht, liegt
        eine Deutung nahe: Ausgerechnet ein Organ, über das gesellschaftlich selten offen
        gesprochen wird, wurde zum Ort seiner eigenen, ebenso zurückhaltend behandelten
        Erkrankung. Diese Deutung ist eine plausible Interpretation, kein belegter klinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu
        Prostatakrebs führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an De Niros Fall zeigen lässt, ist ein
        Muster im Umgang mit einer erfolgreich behandelten Erkrankung, das bei einem
        ausgeprägten selbsterhaltenden Typ 1 mit Neunerflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        De Niro kennt sein eigenes Muster nicht als Enneagramm-Struktur – der selbsterhaltende
        Typ 1 mit Neunerflügel hält reflexhaft an der eigenen, stillen Selbstständigkeit fest,
        statt gesundheitliche Themen offen zu teilen, und lebt genau dieses Muster bis heute
        weitgehend unverändert aus. Wer die eigene Neigung, auch ernste Angelegenheiten
        methodisch und ohne öffentliche Aussprache zu erledigen, nicht als Muster erkennt,
        riskiert, dass wichtige gesundheitliche Botschaften an andere unausgesprochen
        bleiben.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 1 mit Neunerflügel erklärt bei <strong>Robert De
        Niro</strong> vieles am Umgang mit der eigenen Prostatakrebs-Erkrankung: ein Mann,
        dessen gesamtes Handwerk auf präziser, stiller Vorbereitung beruht, behandelte auch
        die eigene Krankheit als eine Aufgabe, die gelöst und dann verlassen werden musste –
        der Adler, der über seinem Revier kreiste, zuschlug, wenn es nötig war, und danach
        wieder in die Stille zurückkehrte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-robert-de-niro", label:"Porträt: Robert De Niro (SE1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Krankheitsporträt: Konrad Adenauer (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-astrid-lindgren", label:"Krankheitsporträt: Astrid Lindgren (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-ludwig-wittgenstein", label:"Krankheitsporträt: Ludwig Wittgenstein (SE1w9) – gleicher Subtyp, gleiche Krankheit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

function elonMuskKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-elon-musk-portrait.jpg" alt="Elon Musk" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elon Musk</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel · geb. 1971</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elon Musk</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-elon-musk">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel,
        das dort nicht behandelt wird: Musks öffentliches Bekenntnis zum Asperger-Syndrom,
        das er 2021 live im US-Fernsehen bekannt gab.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Musk</strong> ist dem <strong>sozialen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SO7 opfert die eigene Zurückhaltung für eine größere Vision und scheut
        keine Bühne, wenn es der Sache dient; der Sechserflügel bringt eine Wachsamkeit
        hinzu, die auch das eigene Anderssein offen benennt, statt es zu verbergen. Genau
        diese Kombination – eine private Diagnose, die auf der größtmöglichen öffentlichen
        Bühne verkündet wird – bestimmte den Umgang mit dem eigenen Asperger-Syndrom.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Auffälligkeiten bereits in der Kindheit:</strong>
        Nach eigener und familiärer Schilderung zeigte Musk bereits als Kind Verhaltensweisen,
        die rückblickend als typisch für das Asperger-Syndrom gelten, darunter intensive,
        eng fokussierte Interessen und soziale Schwierigkeiten.</p>
        <p class="vb-intro"><strong>b) Keine formale Diagnose in jungen Jahren:</strong>
        Eine formale Diagnose erfolgte nach eigener Aussage nicht in der Kindheit, sondern
        erst deutlich später im Erwachsenenleben.</p>
        <p class="vb-intro"><strong>c) Jahrzehntelange öffentliche Wahrnehmung als „exzentrisch":</strong>
        Vor der Offenlegung wurde Musks ungewöhnliches öffentliches Auftreten – ungefilterte
        Kommentare, ungewöhnlicher Humor, direkte Art – von Medien häufig lediglich als
        exzentrisch beschrieben, ohne Bezug zu einer neurologischen Grundlage.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Öffentliche Bekanntgabe am 8. Mai 2021:</strong>
        Musk gab die Diagnose live als Moderator der US-Sketch-Show „Saturday Night Live"
        bekannt – vor einem Millionenpublikum, in einem unterhaltsamen, selbstironischen
        Rahmen statt in einem ernsten Interview.</p>
        <p class="vb-intro"><strong>b) Erste bekannte Aspberger-Offenlegung eines Milliardärs dieser Größenordnung:</strong>
        Musk gilt als einer der ersten sehr prominenten Unternehmer, die eine
        Autismus-Spektrum-Diagnose öffentlich und in dieser Form bekannt machten.</p>
        <p class="vb-intro"><strong>c) Verbindung mit Selbstreflexion zu sozialem Verhalten:</strong>
        In derselben Sendung reflektierte Musk offen darüber, dass er manchmal Schwierigkeiten
        habe, soziale Signale zu lesen – eine für ihn ungewöhnlich direkte Selbstauskunft.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Positive und kritische mediale Reaktionen zugleich:</strong>
        Die Offenlegung löste sowohl Anerkennung für die Offenheit als auch kritische
        Stimmen aus, die den unterhaltsamen Rahmen als unpassend für ein ernstes Gesundheitsthema
        empfanden.</p>
        <p class="vb-intro"><strong>b) Keine Veränderung des öffentlichen Auftretens danach:</strong>
        Nach der Offenlegung änderte Musk sein öffentliches Auftreten – provokante Aussagen,
        ungefilterte Kommentare auf Social Media – nicht erkennbar; die Diagnose wurde nicht
        zum Anlass einer neuen öffentlichen Zurückhaltung.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte extreme Arbeitsintensität:</strong>
        Musks bekanntermaßen enorme Arbeitsbelastung über mehrere Unternehmen hinweg blieb
        nach der Offenlegung unverändert bestehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Aufmerksamkeit für Autismus im Erwachsenenalter:</strong>
        Die Offenlegung trug international zur Sichtbarkeit von spät diagnostiziertem Autismus
        bei Erwachsenen bei, insbesondere in beruflichen Spitzenpositionen.</p>
        <p class="vb-intro"><strong>b) Neubewertung früherer öffentlicher Auftritte:</strong>
        Nach der Offenlegung deuteten viele Kommentatoren frühere, als ungewöhnlich
        wahrgenommene öffentliche Auftritte Musks rückblickend im Licht der Diagnose neu.</p>
        <p class="vb-intro"><strong>c) Keine dauerhafte Verankerung als zentrales öffentliches Thema:</strong>
        Trotz der breiten anfänglichen Aufmerksamkeit blieb das Asperger-Syndrom in der
        Folgezeit kein durchgängig präsentes Thema in Musks öffentlicher Kommunikation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die größtmögliche Bühne statt stiller Offenlegung:</strong>
        Die SO7-typische Überzeugung, dass die eigene Botschaft möglichst viele Menschen
        erreichen soll, zeigte sich exemplarisch: Statt eines diskreten Interviews wählte
        Musk die größtmögliche mediale Plattform für die Offenlegung.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die offene Benennung des eigenen Andersseins:</strong>
        Dieselbe Wachsamkeit, mit der Musk gesellschaftliche Risiken öffentlich benennt,
        zeigte sich hier als Bereitschaft, auch die eigene neurologische Andersartigkeit
        offen zu thematisieren, statt sie hinter einem glatten öffentlichen Bild zu
        verbergen.</p>
        <p class="vb-intro"><strong>c) Unterhaltung als Vehikel für eine ernste Botschaft:</strong>
        Dass die Offenlegung in einem komödiantischen Format erfolgte, passt zur SO7-typischen
        Fähigkeit, auch schwierige Themen in eine zugängliche, positive Erzählung zu
        verwandeln, statt sie als reine Last darzustellen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann des Unaufhörlichen Bauens, dessen eigenes Denken anders funktioniert als das der meisten:</strong>
        Musks gesamtes öffentliches Wirken beruht auf einer außergewöhnlichen Fähigkeit zu
        intensiver, fokussierter Konzentration auf einzelne Probleme – genau jene kognitive
        Eigenart, die sein Lebenswerk trägt, ist zugleich Teil derselben neurologischen
        Struktur, die er als Asperger-Syndrom benannte.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet die soziale Wahrnehmung, bei einem Mann mit derart öffentlicher Rolle?</strong>
        Für einen sozialen Typ 7 mit Sechserflügel, dessen gesamtes Wirken auf öffentlicher
        Sichtbarkeit und der Fähigkeit beruht, große Menschenmengen zu begeistern, liegt eine
        Deutung nahe: Ausgerechnet jene kognitive Eigenart, die das Lesen sozialer Signale
        erschwert, betrifft einen Mann, dessen berufliches Leben untrennbar mit öffentlicher
        Kommunikation verbunden ist. Diese Deutung ist eine plausible Interpretation, kein
        belegter klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben zwangsläufig mit dem
        Asperger-Syndrom verbunden ist – <strong>jeder Mensch kann jede Form
        neurologischer Andersartigkeit entwickeln, unabhängig vom Subtyp.</strong> Was sich
        an Musks Fall zeigen lässt, ist ein Muster im Umgang mit einer spät benannten
        neurologischen Diagnose, das bei einem ausgeprägten sozialen Typ 7 mit Sechserflügel
        immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Musk kennt sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 7 mit
        Sechserflügel hält reflexhaft an der Überzeugung fest, dass die größtmögliche
        öffentliche Bühne der richtige Ort für jede Botschaft ist, auch für die eigene
        neurologische Diagnose, und lebt genau dieses Muster bis heute weitgehend unverändert
        aus. Wer die eigene Neigung, persönliche Themen unmittelbar in öffentliche
        Inszenierung zu verwandeln, nicht als Muster erkennt, riskiert, dass ernste
        Themen in der Unterhaltung untergehen, statt die ihnen angemessene Tiefe zu
        erreichen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 7 mit Sechserflügel erklärt bei <strong>Elon Musk</strong> vieles am
        Umgang mit dem eigenen Asperger-Syndrom: ein Mann, dessen gesamtes öffentliches
        Wirken auf größtmöglicher Sichtbarkeit beruht, wählte auch für die eigene
        neurologische Diagnose die größte verfügbare Bühne – der Biber, der selbst die
        eigene Andersartigkeit nicht verbirgt, sondern sie zu einem weiteren, öffentlich
        sichtbaren Teil seines Bauwerks macht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-elon-musk", label:"Porträt: Elon Musk (SO7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

function edGeinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ed Gein – Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/kriminalpsychologie-ed-gein-portrait.jpg" alt="Ed Gein – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ed Gein</p>
        <p class="krim-portrait-typ">SX9w1 · Sexueller Typ 9 mit Einserflügel</p>
        <p style="font-size:0.85rem;color:var(--muted);margin:0.2rem 0 0;">"Der Schlächter von Plainfield" · USA, 1954–1957 · Tierentsprechung: Faultier</p>
      </div>

      <p class="psycho-intro">
        <strong>Ed Gein</strong> (1906–1984) wurde auf seiner abgelegenen Farm in Plainfield,
        Wisconsin, 1957 verhaftet, nachdem die Ladenbesitzerin <strong>Bernice Worden</strong>
        spurlos verschwunden war. Was die Ermittler auf seinem Hof fanden, gehört bis heute zu
        den verstörendsten Funden der amerikanischen Kriminalgeschichte: Möbel, Masken und
        Kleidungsstücke aus menschlicher Haut, angefertigt aus den Überresten von mindestens
        15 verschiedenen Frauen – gestohlen aus frischen Gräbern lokaler Friedhöfe. Nachweislich
        getötet hat Gein zwei Frauen, Mary Hogan (1954) und Bernice Worden (1957); für den
        Mord an Hogan kam es nie zu einem eigenen Verfahren, weil Gein zu diesem Zeitpunkt
        bereits wegen Unzurechnungsfähigkeit in psychiatrischer Verwahrung war. Sein Fall
        inspirierte spätere Kinofiguren wie Norman Bates ("Psycho"), Leatherface ("The Texas
        Chain Saw Massacre") und Buffalo Bill ("Das Schweigen der Lämmer"). Das Enneagramm
        macht sichtbar, wie ausgerechnet der stillste, unauffälligste aller neun Typen zu
        einer derart extremen Verschmelzungs-Wahnvorstellung finden konnte.
      </p>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ed Gein</strong> wird dem <strong>Sexuellen Typ 9 mit Einserflügel (SX9w1)</strong>
        zugeordnet. Die sexuelle Neun sucht die tiefste Form der Verschmelzung (Merging) –
        nicht Nähe im gewöhnlichen Sinn, sondern das vollständige Aufgehen der eigenen Identität
        in einem anderen Menschen. Der Einserflügel bringt eine akribische, fast handwerkliche
        Präzision hinzu. Als Geins extrem dominante Mutter Augusta 1945 starb, verlor er seinen
        einzigen Orientierungspunkt – und begann Jahre später den wahnhaften Versuch, sie
        physisch neu zu verkörpern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Äußere Merkmale</h3>
        <p class="vb-intro"><strong>a) Der gläserne, periphere Blick:</strong>
        Gerichtsreporter, die den Prozess verfolgten, beschrieben Geins Blick als "gläsern",
        "weich" und "ständig ins Leere gerichtet". Er fixierte Menschen selten direkt – ein
        klassisches Zeichen der Neuner-Trance, des Rückzugs in die innere Peripherie.</p>
        <p class="vb-intro"><strong>b) Das sanfte, verlegene Lächeln:</strong>
        Während Verhören und Fotoaufnahmen trug Gein oft ein leichtes Schmunzeln – kein
        böswilliges Grinsen, sondern das naive, deeskalierende Lächeln eines Menschen, der
        gefallen möchte und die Schwere der Situation gar nicht greifen kann.</p>
        <p class="vb-intro"><strong>c) Kindliche Stimme, reflexhafte Unterwerfung:</strong>
        Die Ermittler berichteten von einer sehr hohen, leisen, monotonen Stimme. Gein versuchte
        durchgehend, den Polizisten zu gefallen und ihnen keine Unannehmlichkeiten zu bereiten –
        die submissive Anpassungsbereitschaft der Neun, selbst im Angesicht der eigenen Taten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unscheinbar bis zur Unsichtbarkeit:</strong>
        In Plainfield galt Gein jahrelang als der verlässliche, aber "seltsame" Handlanger und
        Babysitter – sanftmütig, leise, scheu. Nachbarn beschrieben ihn als geistig oft
        abwesend, ohne eigene Meinung oder Präsenz. Naranjos Bild der Neun als "Fliege an der
        Wand" trifft Geins Auftreten fast wörtlich.</p>
        <p class="vb-intro"><strong>b) Anpassung ohne Aufbegehren:</strong>
        Seine Mutter Augusta war eine fanatisch-religiöse, männerverachtende Frau, die
        Sexualität für die Quelle allen Übels hielt und aus Ed ein "reines Werkzeug" formen
        wollte. Ein Kind mit starker Neuner-Veranlagung begehrt bei einer derart dominanten
        Bezugsperson nicht offen auf – es passt sich vollständig an und lässt sich formen.</p>
        <p class="vb-intro"><strong>c) Der Zusammenbruch nach dem Verlust des Verschmelzungsobjekts:</strong>
        Solange Augusta lebte, war sie Geins externe Identität. Als sie 1945 starb, brach das
        Konstrukt zusammen – die verschmelzungsbedürftige Neun hatte kein Objekt mehr, mit dem
        sie verschmelzen konnte, was schließlich in den Versuch mündete, sich die Mutter im
        wörtlichen Sinn wieder überzustreifen.</p>
        <p class="vb-intro"><strong>d) Handwerkliche Präzision – der Einserflügel:</strong>
        Gein hortete die Leichenteile nicht schlicht, sondern verarbeitete, vernähte und
        ordnete sie strukturiert zu Haushaltsgegenständen. Diese akribische, fast
        handwerkliche Systematik – so grotesk ihr Ergebnis auch war – trägt die Handschrift
        des Einserflügels.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Tatgeschehen</h3>
        <p class="vb-intro"><strong>a) Grabschändungen über mehrere Jahre:</strong>
        Nach dem Tod der Mutter begann Gein, in Lokalzeitungen gezielt nach Todesanzeigen
        älterer, angesehener Frauen aus der Umgebung zu suchen. In neun nachgewiesenen Fällen
        öffnete er frische Gräber und entwendete die Leichen, um sie auf seiner Farm zu
        verarbeiten.</p>
        <p class="vb-intro"><strong>b) Mary Hogan, 1954:</strong>
        Die 51-jährige Barbesitzerin verschwand spurlos aus ihrer Bar. Gein gestand später,
        sie erschossen zu haben – zu einem eigenen Prozess kam es nie, da er zum Zeitpunkt des
        Geständnisses bereits als unzurechnungsfähig eingestuft war.</p>
        <p class="vb-intro"><strong>c) Bernice Worden, 1957:</strong>
        Der Mord an der 58-jährigen Ladenbesitzerin verlief typisch für die dissoziierte Neun:
        kein Kampf, kein Wutausbruch. Gein schlich sich in ihren Eisenwarenladen, schoss, als
        sie ihm den Rücken zudrehte, und transportierte die Leiche unmittelbar auf seinen Hof –
        pragmatisch, leise, wie im Trancezustand.</p>
        <p class="vb-intro"><strong>d) Verhaftung und Befund:</strong>
        Bei der Festnahme im November 1957 beschrieben Sheriff Art Schley und die
        Ermittlungsbeamten Gein als bemerkenswert ruhig, fast höflich, ohne jeden Widerstand.
        Der Gerichtspsychiater Dr. Edward Kelleher diagnostizierte eine schwere chronische
        Schizophrenie und hob hervor, dass Gein während der Befragungen zu den makabren Funden
        weder Scham noch Reue noch Ekel zeigte, sondern emotional völlig eingeebnet blieb
        (blunted affect).</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Die Neun in der Trance</h3>
        <p class="vb-intro">Die Leidenschaft der Neun heißt <strong>Trägheit</strong> – keine
        körperliche, sondern eine psychische Trägheit: die Betäubung des eigenen Bewusstseins
        gegenüber der Realität. Extrem ungesunde Neuner narkotisieren sich selbst so
        vollständig, dass die eigene Agenda und Identität kaum noch spürbar sind. Bei Gein
        führte das zu einer vollständigen Dissoziation: Die Taten lösten kein
        Unrechtsbewusstsein aus, weil er psychisch in einer eigenen, abgespaltenen Traumwelt
        lebte, in der das Töten lediglich ein Mittel zum Zweck war – ein handwerklicher
        Notwendigkeitsschritt auf dem Weg zur ersehnten Verschmelzung, nicht ein Akt aus Hass
        oder Machtgelüst.</p>
        <p class="vb-intro">Genau diese Trägheit erklärt auch, warum Neuner-Täter im
        Enneagramm eine absolute Ausnahmeerscheinung sind: Der Neun fehlt der typische
        Täter-Antrieb aus Wut, Paranoia oder Geltungssucht. Nur das Zusammentreffen einer
        extrem dominanten, formenden Bezugsperson, deren plötzlichem Verlust und einer bereits
        bestehenden schweren Psychose konnte diese seltene, tragische Dynamik hervorbringen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Die Opfer als Mutter-Stellvertreter</h3>
        <p class="vb-intro">Sowohl die beiden getöteten Frauen als auch die Frauen, deren
        Gräber Gein öffnete, wiesen auffällige Parallelen zu seiner Mutter auf: Sie waren
        durchweg im mittleren bis höheren Alter – genau in dem Alter, in dem Augusta stand,
        als die Bindung zu ihr am intensivsten war – und galten als resolute, eigenständige
        Persönlichkeiten. Mary Hogan führte als alleinstehende Frau eine Bar, Bernice Worden
        leitete selbstständig den örtlichen Eisenwarenladen. Dieser dominante, bestimmende
        Charakter entsprach exakt dem Wesen Augustas, die die Familie mit eiserner Hand
        regiert hatte.</p>
        <p class="vb-intro">Gein suchte nicht nach zufälligen Opfern zur Befriedigung von
        Sadismus. Er suchte nach Stellvertretern für seine Mutter – der Versuch, sich Frauen
        einzuverleiben, die energetisch und von der Persönlichkeit her wie Augusta waren, um
        die verlorene Symbiose wiederherzustellen. Nicht Hass trieb ihn an, sondern die
        wahnhafte Sehnsucht nach Aneignung ihres Wesens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Das Tier: Das Faultier</h3>
        <p class="vb-intro">Das Faultier ist das Tier der sexuellen Neun – ein Tier, das sich
        so selten und langsam bewegt, dass Algen auf seinem Fell wachsen, und das dennoch über
        eine bemerkenswerte innere Welt verfügt. Nach außen bewegungslos, unauffällig, harmlos.
        Im Inneren: ein Nervensystem, das ganz eigenen, kaum sichtbaren Rhythmen folgt.</p>
        <p class="vb-intro">Für Gein: Der Nachbar, der niemandem auffiel, der sich in kein
        Täterprofil einfügte, weil er schlicht keine bedrohliche Ausstrahlung besaß. Genau
        diese Unscheinbarkeit – die eigentliche Stärke des Faultiers, sich der Aufmerksamkeit
        von Raubtieren zu entziehen – wurde bei Gein zum Schutzschild, hinter dem sich
        jahrelang unentdeckt eine völlig andere Wirklichkeit verbarg.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">7. Abgrenzung: Ed Gein (SX9) vs. Jeffrey Dahmer (SX5)</h3>
        <p class="vb-intro">Beide Fälle werden in der Kriminalpsychologie oft nebeneinander
        genannt, folgen aber einer grundverschiedenen inneren Logik. <strong>Jeffrey
        Dahmer (SX5)</strong> handelte aus dem Motiv des Besitzens und Konservierens: Er wollte
        seine Opfer in einen Zustand absoluter Passivität versetzen, um Kontrolle zu behalten
        und Trennungsangst zu vermeiden – eine distanzierte, analytische Aneignung.</p>
        <p class="vb-intro"><strong>Ed Gein (SX9)</strong> wollte sein Gegenüber nicht
        kontrollieren, sondern in dessen Identität eingehen. Das Motiv war nicht Besitz,
        sondern die Auflösung des eigenen Ichs in der Person der Mutter – Verschmelzung statt
        Kontrolle, Auflösung statt Aneignung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">Parallele im selben Subtyp: Wolfgang Beltracchi (SX9w1)</h3>
        <p class="vb-intro">Auch <a href="javascript:void(0)" data-route="kriminalpsychologie-wolfgang-beltracchi">Wolfgang Beltracchi</a>,
        der als Kunstfälscher rund 300 Werke berühmter Meister täuschend echt reproduzierte,
        ist in diesem Kompass als SX9w1 typisiert – und sein Motiv trägt denselben Kern wie
        Geins: nicht Gier oder Machtstreben, sondern eine tiefe, fast liebevolle Verschmelzung.
        Wo Beltracchi mit dem Geist toter Maler verschmolz, versuchte Gein, mit dem Körper
        seiner toten Mutter zu verschmelzen. Derselbe Grundmechanismus der sexuellen Neun –
        die vollständige Auflösung der eigenen Identität in einer anderen – zeigt sich hier in
        zwei denkbar extremen Ausprägungen: bei Beltracchi kanalisiert in ein bewundertes
        Kunsthandwerk, bei Gein entgleist in eine tödliche Psychose.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:var(--ink);">8. Zusammenfassung</h3>
        <p style="margin:0 0 0.8rem;font-size:0.95rem;line-height:1.7;color:var(--ink);">
        Ed Gein zeigt das absolute Extrem der sexuellen Neun mit Einserflügel: Wenn die Suche
        nach Verschmelzung pathologisch wird und das Verschmelzungsobjekt zerbricht, kann die
        Psyche versuchen, diese Verschmelzung mit physischer Gewalt und wahnhaften Mitteln zu
        erzwingen. Nach außen der unscheinbarste, sanftmütigste Mann von Plainfield – nach
        innen eine vollständig abgespaltene Realität, in der das Töten kein Akt des Hasses war,
        sondern der verzweifelte, kranke Versuch, eine verlorene Symbiose wiederherzustellen.</p>
        <p style="margin:0;font-size:0.95rem;line-height:1.7;color:var(--ink);">
        Der Fall zeigt, dass auch der vermeintlich sanfteste Typ des Enneagramms unter
        maximaler Psychopathologie und absolutem Realitätsverlust in bizarr-destruktive
        Verhaltensmuster abgleiten kann – eine seltene, tragische Ausnahmeerscheinung, keine
        typische Ausprägung der sexuellen Neun.</p>
      </div>

      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Die
        rechtskräftig festgestellten Taten Geins sind zu verurteilen – das Enneagramm erklärt,
        es rechtfertigt nicht.
        </p>
      </div>

            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"kriminalpsychologie-wolfgang-beltracchi", label:"Kriminalpsychologie: Wolfgang Beltracchi (SX9w1) – Kunstfälscher"},
        {route:"kriminalpsychologie-alfons-schuhbeck", label:"Kriminalpsychologie: Alfons Schuhbeck (SE9w1)"},
        {route:"subtype/sx9", label:"SX9 – Das Faultier: Subtyp-Profil"},
      ])}
      <div style="margin-top:1.5rem;max-width:100%;">
        <button class="ghost-link" data-route="kriminalpsychologie">← Zurück zur Kriminalpsychologie-Übersicht</button>
      </div>
    </div>
  `);
}

function johnHinckleyJrPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("John Hinckley Jr. – Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/kriminalpsychologie-john-hinckley-jr-portrait.jpg" alt="John Hinckley Jr. – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Hinckley Jr.</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel</p>
        <p style="font-size:0.85rem;color:var(--muted);margin:0.2rem 0 0;">Attentat auf Präsident Ronald Reagan · USA, 30. März 1981 · Tierentsprechung: Elefant</p>
      </div>

      <p class="psycho-intro">
        <strong>John Hinckley Jr.</strong> (geb. 1955) feuerte am 30. März 1981 vor dem
        Hilton Hotel in Washington D.C. innerhalb von drei Sekunden sechs Schüsse auf
        US-Präsident Ronald Reagan ab. Ein Schuss prallte von der gepanzerten Limousine ab und
        traf Reagan in die Brust, nur knapp am Herzen vorbei; Pressesprecher James Brady wurde
        schwer im Kopf verletzt und blieb dauerhaft behindert. Hinckleys Motiv hatte nichts mit
        Politik zu tun: Er wollte die damals 18-jährige Schauspielerin <strong>Jodie
        Foster</strong> beeindrucken, die er seit dem Film "Taxi Driver" wahnhaft fixiert
        verfolgte. 1982 wurde er wegen Unzurechnungsfähigkeit freigesprochen und
        psychiatrisch untergebracht; erst im Juni 2022, über 40 Jahre später, wurde er
        vollständig und ohne Auflagen entlassen. Das Enneagramm macht sichtbar, wie ein
        jahrelang unauffälliger, passiver Rückzug in eine schützende Isolation binnen weniger
        Sekunden in einen der folgenreichsten politischen Gewaltausbrüche der jüngeren
        US-Geschichte kippen konnte.
      </p>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>John Hinckley Jr.</strong> wird dem <strong>Selbsterhaltenden Typ 9 mit
        Achterflügel (SE9w8)</strong> zugeordnet. Der selbsterhaltende Subtyp der Neun heißt
        "Appetit": Die innere Leere wird nicht über Beziehung oder Gruppe reguliert, sondern
        über körperlichen Komfort, Rückzug und Betäubung – bei Hinckley über Jahre in Form von
        Motelzimmern, Fernsehen und Fast Food. Der Achterflügel bringt eine zweite Ebene hinzu:
        angestaute Wut, die sich nicht in offenem Konflikt entlädt, sondern sich über lange
        Zeit im Bauchzentrum aufstaut, bis sie in einem einzigen, unkontrollierten Ausbruch
        eruptiert – dem klassischen "Vulkan-Effekt" der 9w8. Der Inhalt seines Wahns – die
        Verschmelzungsfantasie mit Jodie Foster – trägt zwar sexuelle Fixierungsmerkmale, sein
        tatsächlicher Lebensstil war jedoch durchgehend selbsterhaltungsdominiert: kein Streben
        nach echtem Kontakt, sondern vollständiger körperlicher Rückzug in eine Höhle.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Äußere Merkmale</h3>
        <p class="vb-intro"><strong>a) Emotional distanziert, fast apathisch:</strong>
        Bei seiner Festnahme wirkte Hinckley weder hasserfüllt noch politisch fanatisch,
        sondern eigenartig abwesend – ein Verhalten, das die Ermittler zunächst vor Rätsel
        stellte. Die klassische Neuner-Trance: präsent im Raum, aber innerlich woanders.</p>
        <p class="vb-intro"><strong>b) Kaum Widerstand, keine Dramatik:</strong>
        Er wurde vor Ort ohne nennenswerten körperlichen Widerstand überwältigt. Kein
        Fluchtversuch, kein Kampf – nach der Eruption fiel er sofort zurück in die gewohnte
        Passivität.</p>
        <p class="vb-intro"><strong>c) Unauffällig bis zur Unsichtbarkeit:</strong>
        Sein Umfeld beschrieb ihn über Jahre als zurückgezogenen, unselbstständigen
        Einzelgänger, finanziell von den Eltern abhängig, praktisch unsichtbar – kein
        Konfliktpotenzial, keine Präsenz.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Jahre in physischer Passivität:</strong>
        Hinckley verbrachte lange Phasen isoliert in Motelzimmern, ernährte sich von Fast
        Food und verlor sich stundenlang vor dem Fernseher – das klassische
        Appetit-Substitutionsmuster der selbsterhaltenden Neun: Betäubung des inneren
        Konflikts durch körperlichen Komfort statt durch Beziehung oder Gruppe.</p>
        <p class="vb-intro"><strong>b) Kein eigenes Lebensziel:</strong>
        Er hatte keine eigene berufliche oder soziale Ausrichtung entwickelt. Seine Identität
        organisierte sich zunehmend um die gedankliche Fixierung auf Jodie Foster – nicht als
        reale Beziehung, sondern als Ersatz für ein fehlendes eigenes Zentrum.</p>
        <p class="vb-intro"><strong>c) Der Umzug nach New Haven:</strong>
        Um in der Nähe der Yale University zu sein, wo Foster studierte, zog Hinckley nach
        New Haven. Er hinterließ ihr Briefe und Gedichte unter der Tür und rief sie mehrfach
        an, obwohl sie ihn stets abwies – reale Ablehnung, die im Wahnkonstrukt keine
        Wirkung zeigte.</p>
        <p class="vb-intro"><strong>d) Aufgestaute Wut im Bauchzentrum – der Achterflügel:</strong>
        Als der direkte Weg zu Foster endgültig verschlossen blieb, verlagerte sich die über
        Jahre unterdrückte Frustration nicht in offenen Protest, sondern staute sich weiter
        auf – bis sie sich in einer einzigen, plötzlichen Gewalttat entlud.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Tatgeschehen</h3>
        <p class="vb-intro"><strong>a) Sechs Schüsse in drei Sekunden:</strong>
        Am 30. März 1981 zog Hinckley vor dem Hilton Hotel einen Röhm-RG-14-Revolver (.22 lr)
        und feuerte in drei Sekunden sechs Schüsse ab. Er traf Pressesprecher James Brady
        schwer in den Kopf, verletzte einen Polizeibeamten und einen Secret-Service-Agenten; der
        letzte Schuss prallte von der gepanzerten Limousine ab und traf Reagan in die Brust,
        knapp am Herzen vorbei.</p>
        <p class="vb-intro"><strong>b) Der Abschiedsbrief an Jodie Foster:</strong>
        Kurz vor der Tat schrieb Hinckley an Foster: "Jodie, ich würde den Versuch, Reagan zu
        töten, sofort aufgeben, wenn ich nur dein Herz gewinnen und den Rest meines Lebens mit
        dir verbringen könnte […] Indem ich Reagan überfalle, bitte ich dich, mir diese eine
        Chance zu geben, deine Liebe und deinen Respekt zu gewinnen." Das Attentat war in
        seiner eigenen Logik kein politischer Akt, sondern ein romantischer Beweis.</p>
        <p class="vb-intro"><strong>c) Prozess und Freispruch:</strong>
        1982 wurde Hinckley wegen Unzurechnungsfähigkeit (not guilty by reason of insanity)
        freigesprochen und in das St. Elizabeths Hospital eingewiesen – eine Entscheidung, die
        in den USA bis heute kontrovers diskutiert wird und zu strengeren
        Unzurechnungsfähigkeits-Regelungen in mehreren Bundesstaaten führte.</p>
        <p class="vb-intro"><strong>d) Über 40 Jahre bis zur vollständigen Entlassung:</strong>
        2016 wurde er unter strengen Auflagen ins Haus seiner Mutter in Virginia entlassen. Im
        September 2021 stellte ein Bundesrichter fest, dass keine Gefahr mehr von ihm ausgehe;
        am 15. Juni 2022 traten alle verbliebenen gerichtlichen Auflagen endgültig außer
        Kraft.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Der Vulkan-Effekt der Neun</h3>
        <p class="vb-intro">Die Leidenschaft der Neun heißt <strong>Trägheit</strong> – die
        fortlaufende Unterdrückung von Wut und Konflikt, um den inneren Frieden
        aufrechtzuerhalten. Bei der selbsterhaltenden Neun geschieht das durch körperliche
        Betäubung und Rückzug: Solange der Komfort stimmt, bleibt die Oberfläche ruhig. Der
        Achterflügel verändert jedoch, was passiert, wenn der Druck einen kritischen Punkt
        überschreitet: Statt sich in Resignation aufzulösen, kann die aufgestaute Energie
        schlagartig und roh entladen werden – der "Vulkanausbruch" der 9w8.</p>
        <p class="vb-intro">Genau dieses Muster zeigt sich bei Hinckley: Jahrelange, fast
        unsichtbare Passivität, unterbrochen von einem einzigen, binnen Sekunden ablaufenden
        Gewaltakt – und danach sofortige Rückkehr in die gewohnte Ruhe. Wie bei Ed Gein zeigte
        sich weder Reue noch Stolz. Hinckley verstand nicht, warum die Welt seine Tat als
        abscheulich ansah, da er sie in seiner eigenen Logik rein als Mittel zur Verschmelzung
        begriff, nicht als Gewalt gegen andere.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Der Elefant: Schwer, geduldig, unaufhaltsam im Ausbruch</h3>
        <p class="vb-intro">Der Elefant ist das Tier der selbsterhaltenden Neun – groß,
        gemütlich, scheinbar bewegungsunwillig. Ein Tier, das man leicht als harmlos
        unterschätzt, weil es die meiste Zeit einfach nur da steht und frisst.</p>
        <p class="vb-intro">Für Hinckley: der schwere, träge, körperlich fast vernachlässigte
        Phänotyp, der jahrelang in Motelzimmern verharrte, ohne dass jemand in ihm eine Gefahr
        vermutete. Doch ein Elefant, der einmal in Bewegung gerät, ist kaum mehr zu stoppen –
        genau das zeigte sich am 30. März 1981 in wenigen Sekunden, bevor die massive Präsenz
        wieder in reglose Ruhe zurücksank.</p>
      </div>

      <div class="vb-section" style="max-width:100%;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">Bezug: Jodie Foster (SX5w6)</h3>
        <p class="vb-intro">Das Objekt von Hinckleys Wahn, <a href="javascript:void(0)" data-route="beruehmte-jodie-foster">Jodie Foster</a>,
        ist in diesem Kompass als sexuelle Fünf mit Sechserflügel (SX5w6) porträtiert – ein
        Subtyp, der Intimität durch intellektuelle und emotionale Tiefe in ausgewählten,
        wenigen Verbindungen sucht, verbunden mit ausgeprägter Wachsamkeit gegenüber
        Grenzüberschreitungen. Foster selbst reagierte auf Hinckleys jahrelange Verfolgung
        genau mit dieser Wachsamkeit: konsequente Zurückweisung, keine Reaktion, die den Wahn
        hätte nähren können. Die beiden Subtypen zeigen hier einen scharfen Kontrast: die
        SX5w6, die Nähe eng und bewusst begrenzt, gegen die SE9w8, die sich eine Nähe imaginierte,
        die real nie bestand.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:var(--ink);">6. Zusammenfassung</h3>
        <p style="margin:0 0 0.8rem;font-size:0.95rem;line-height:1.7;color:var(--ink);">
        John Hinckley Jr. zeigt eine seltene, aber lehrreiche Extremform der selbsterhaltenden
        Neun mit Achterflügel: jahrelange, fast unsichtbare Passivität und körperlicher
        Rückzug, unterbrochen von einer einzigen, binnen Sekunden ablaufenden Gewalteruption,
        deren eigentliches Motiv nicht Politik oder Hass war, sondern eine wahnhafte
        Verschmelzungsfantasie mit einer Frau, die ihn nie gekannt hatte.</p>
        <p style="margin:0;font-size:0.95rem;line-height:1.7;color:var(--ink);">
        Der Fall zeigt, wie der "Vulkan-Effekt" des Bauchzentrums – lange unterdrückte Wut,
        die sich unter dem Achterflügel schlagartig entlädt – aus dem unauffälligsten
        Menschen im Raum binnen Sekunden eine historische Gefahr machen kann. Eine seltene,
        folgenschwere Ausnahmeerscheinung, keine typische Ausprägung der selbsterhaltenden
        Neun.</p>
      </div>

      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Hinckleys
        Tat verletzte mehrere Menschen schwer und ist zu verurteilen – das Enneagramm erklärt,
        es rechtfertigt nicht.
        </p>
      </div>

            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-jodie-foster", label:"Porträt: Jodie Foster (SX5w6) – Objekt der Fixierung"},
        {route:"kriminalpsychologie-ed-gein", label:"Kriminalpsychologie: Ed Gein (SX9w1) – ebenfalls Neun, andere Instinktvariante"},
        {route:"kriminalpsychologie-alfons-schuhbeck", label:"Kriminalpsychologie: Alfons Schuhbeck (SE9w1)"},
        {route:"subtype/se9", label:"SE9 – Der Elefant: Subtyp-Profil"},
      ])}
      <div style="margin-top:1.5rem;max-width:100%;">
        <button class="ghost-link" data-route="kriminalpsychologie">← Zurück zur Kriminalpsychologie-Übersicht</button>
      </div>
    </div>
  `);
}

function enneagrammBibelPage() {
  const items = BIBEL_PORTRAITS;
  const cards = items.map(p => {
    const typ = parseInt((p.subtyp || "").replace(/[^0-9]/g, "")[0] || "0");
    const farbe = typeColor(typ);
    const subtypCode = (p.subtyp || "").substring(0, 3).toUpperCase();
    const tierKey = subtypCode.toLowerCase();
    const tierImg = tierKey ? `https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${tierKey}.jpg` : "";
    return `
      <button class="tool-card--link kh-card" data-route="${p.route}" style="display:block;width:100%;text-align:left;background:var(--ivory);border:1.5px solid var(--border);border-left:4px solid ${farbe};border-radius:12px;padding:1.1rem 1.3rem;margin-bottom:0.9rem;cursor:pointer;">
        <div style="display:flex;gap:0.9rem;align-items:flex-start;">
          ${tierImg ? `<span style="position:relative;width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px ${farbe};margin-top:0.15rem;"><img src="${tierImg}" alt="" loading="lazy" style="position:absolute;top:${tierAvatarTop(tierKey)};left:${tierAvatarLeft(tierKey)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" /></span>` : ""}
          <div style="flex:1;min-width:0;">
            <div style="display:flex;align-items:baseline;gap:0.6rem;flex-wrap:wrap;margin-bottom:0.4rem;">
              <h3 style="margin:0;font-size:1.1rem;color:var(--ink);">${p.name}</h3>
              <span style="font-size:0.78rem;font-weight:700;color:${farbe};">${p.subtyp}</span>
            </div>
            <p style="margin:0;font-size:0.9rem;color:var(--muted);">${p.teaser}</p>
          </div>
        </div>
      </button>
    `;
  }).join("");

  const allCodes = [1,2,3,4,5,6,7,8,9].flatMap(n => ["SE","SO","SX"].map(p => p + n));
  const registerBox = `
    <div style="background:var(--ivory);border:1.5px solid var(--border);border-radius:12px;padding:1rem 1.2rem;margin-bottom:1rem;">
      <p style="font-size:0.78rem;font-weight:700;letter-spacing:0.08em;color:var(--muted);margin:0 0 0.7rem;text-transform:uppercase;">Die 27 Subtypen – vollständig</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem 0.3rem;">
        ${allCodes.map(code => {
          const n = parseInt(code.slice(-1));
          const col = TYPE_COLORS[n] || "var(--copper)";
          const tierKey = code.toLowerCase();
          const match = items.find(p => (p.subtyp || "").toUpperCase().startsWith(code));
          const has = !!match;
          return has
            ? `<a href="javascript:void(0)" data-route="${match.route}"
                style="display:inline-flex;align-items:center;gap:.3rem;padding:.25rem .6rem .25rem .3rem;border-radius:6px;border:1.5px solid ${col};font-size:0.8rem;font-weight:700;color:${col};background:var(--bg);text-decoration:none;opacity:0.95;">
                <span style="position:relative;width:18px;height:18px;border-radius:50%;overflow:hidden;flex-shrink:0;display:inline-block;box-shadow:0 0 0 1.5px ${col};">
                  <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${tierKey}.jpg" alt="" loading="lazy" style="position:absolute;top:${tierAvatarTop(code)};left:${tierAvatarLeft(code)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
                </span>${code}</a>`
            : `<span style="display:inline-flex;align-items:center;padding:.25rem .6rem;border-radius:6px;border:1.5px dashed ${col};font-size:0.8rem;font-weight:700;color:${col};opacity:0.35;">${code}</span>`;
        }).join("")}
      </div>
    </div>
  `;

  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:var(--ink);margin:1.2rem 0 0.5rem;">Enneagramm im Spiegel des Neuen Testaments</h1>
      <p class="psycho-intro">27 Figuren aus dem Umfeld Jesu – eine für jeden der 27 Subtypen –, literarisch und psychologisch gedeutet nach ihrem Enneagramm-Muster. Die Texte stammen aus <em>»27 Gesichter der Seele«</em> von Detlef Rathmer und werden hier Kapitel für Kapitel in gekürzter Fassung für den Kompass aufbereitet, jeweils mit einem eigens komponierten Song zur Figur. Die vollständigen Kapitel – mit der ganzen erzählerischen Tiefe und allen Songtexten – finden sich im E-Book, unten bei den Buchtipps verlinkt.</p>
      <p class="psycho-intro" style="font-size:0.88rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:0.8rem 1rem;border-radius:8px;">
        <strong>Wichtiger Hinweis zur Einordnung:</strong> Anders als bei den Rubriken »Berühmte Persönlichkeiten« oder »Krankheitsporträts« handelt es sich hier nicht um historisch lückenlos dokumentierte Biografien. Die neutestamentlichen Figuren sind literarisch-typologisch gedeutet – auf Basis der überlieferten Erzählungen, mit den Mitteln der freien, aber am Text orientierten Nacherzählung. Manche der Figuren sind historisch umstritten oder unsicher belegt. Die Illustrationen sind KI-generierte, bewusst fiktive Darstellungen – niemand weiß, wie diese Menschen tatsächlich aussahen.
      </p>
      ${registerBox}
      <div style="max-width:640px;margin-top:1rem;">
        ${cards}
      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}

      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Berühmte Persönlichkeiten"},
        {route:"krankheitsportraets", label:"Krankheitsporträts"},
        {route:"lebensmusterkompass", label:"Lebensmusterkompass"},
      ])}
    </div>
  `);
}

function josefVonArimathaeaPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-josef-von-arimathaea-portrait.jpg" alt="Josef von Arimathäa – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Josef von Arimathäa</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Ratsherr aus Arimathäa – Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Dein Vater, der ins Verborgene sieht, wird es dir vergelten.« (Mt 6,6)</p>

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins – ein Einzelgänger, der nicht durch Auftritt auffällt, sondern durch Genauigkeit. Josef von Arimathäa liebte den Morgen – nicht den, an dem alles erblühte, sondern den unscheinbaren, in Grautönen, der noch keine Entscheidung forderte. Er war wach, bevor der Tag Licht zeigte. Immer. Die erste Handlung: Wasser schöpfen aus der Schale, nicht hastig, nicht zögerlich – ein kleines Ritual, das niemand sah, aber alles in Ordnung brachte.</p>
          <p class="vb-intro">Er war ein Mann der leisen Schritte, den man nicht durch Auftritt, sondern durch Genauigkeit erinnerte. Er lebte allein – nicht aus Einsamkeit, sondern aus Klugheit. Gesellschaft brachte Unruhe, Lärm, Versäumnisse: ein Gast, der den Krug nie wieder an den Ort zurückstellte, wo er vorher gestanden hatte. Für Josef war Ordnung kein Zwang, sondern Respekt – eine stille Verneigung vor dem Leben, der Unterschied zwischen Unachtsamkeit und Würde.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Würde als stiller Maßstab</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> trägt ihren Perfektionsanspruch nicht nach außen, sondern nach innen. Naranjo nannte diesen Subtyp <em>Worry</em> – Besorgnis: die ständige innere Frage, ob man dem eigenen Maßstab wirklich gerecht wird. Josef war kein Mann, der andere korrigierte. Er ordnete nicht die Welt, sondern sich selbst, Tag für Tag, Schritt für Schritt – jede Schriftrolle sorgfältig gebündelt, jede Markierung nicht für andere gesetzt, sondern für ihn selbst.</p>
          <p class="vb-intro">Diese innere Strenge zeigte sich, als die Nachricht von Jesu Tod ihn erreichte. Ein Gekreuzigter galt nach dem Gesetz als unrein, verflucht – und ausgerechnet zur neunten Stunde, kurz vor dem Rüsttag, an dem ein Jude nichts Unreines mehr anfassen durfte. Josef spürte, wie das Gesetz in dieser Stunde klein wurde – nicht falsch, aber zu eng für das, was jetzt Wahrheit war. Kein lauter Bruch mit der Tradition, sondern die stille, unerbittliche Gewissheit einer Eins, die weiß, wann der eigene innere Maßstab höher steht als die äußere Regel.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Zurückhaltung, die im entscheidenden Moment weicht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> gibt der selbsterhaltenden Eins eine Sehnsucht nach Frieden, Rückzug und Konfliktvermeidung. Josef war kein politischer Mensch. Er kannte die Mechanismen der Macht, ihre Sprache, ihre Maske – und hatte gelernt, mit Vorsicht zu sprechen, wenn es um Rom ging. Ein Mann, der sich nicht in die Debatten um Jesus verwickeln ließ, der kein Wunder öffentlich bezeugte, sondern einmal, nur einmal, zuhörte – nicht wegen eines Satzes, sondern wegen einer Pause, in der plötzlich alles still wurde, weil der Sprechende wusste, was er sagte.</p>
          <p class="vb-intro">Doch als es darauf ankam, trat genau dieser zurückhaltende Mann vor Pilatus – ohne Taktik, ohne Rückendeckung des Hohen Rats, der sich bereits zurückgezogen hatte. »Ich bitte nicht um seine Botschaft. Ich bitte um seinen Körper.« Das ist die stille Kraft der SE1w9: Sie sucht den Streit nicht, aber wenn eine Sache das eigene, unverhandelbare Gewissen berührt, verlässt sie ihre Zurückhaltung – einmalig, entschlossen, ohne Umwege.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Tat: Vor Pilatus und das eigene Grab</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Josef ging zu Pilatus, ohne zu essen, ohne einen Knecht, ohne ein Wort zu viel. Pilatus gab nach: »Nehmt ihn. Aber sorgt dafür, dass es schnell geschieht.« Josef trug das mitgebrachte Leinentuch – das bestbewahrte, das er sich einst für besondere Anlässe oder, in stillen Gedanken, für sich selbst aufgehoben hatte – zusammen mit einem Gefäß Myrrhe zum Hügel Golgatha. Er reinigte das Gesicht, salbte Stirn und Hände, wickelte den Körper sorgfältig ein: Du bist gesehen. Du wirst nicht im Vergessen enden.</p>
          <p class="vb-intro">Das Grab, in das er Jesus bettete, war ein Felsengrab, das Josef einst für sich selbst hatte ausheben lassen – ruhig, lichtgeschützt, von Kräutern umgeben. Ein Platz der Würde, der an diesem Tag seinem Namen gerecht wurde. Er trat zurück, die Hände gefaltet, nicht im Gebet, sondern in Dankbarkeit – nicht für das Geschehene, sondern dafür, dass er nicht gezögert hatte.</p>
        </blockquote>

        <h2 class="vb-section">5. Nachhall: Das innere Gesetz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In der Nacht danach konnte Josef nicht schlafen – nicht aus Zweifel, sondern weil sein Innerstes weiterdachte. Er hatte getan, was kein anderer getan hatte, und empfand doch keinen Stolz. Er war kein Mystiker, kein Prophet. Er glaubte an das, was sichtbar ist – aber er spürte, dass sich hier etwas Unsichtbares ereignet hatte, jenseits von Gesetz, Ritus und Rollen.</p>
          <p class="vb-intro">In dieser Nacht spürte er vielleicht zum ersten Mal: Nicht alles muss verstanden werden. Manches muss nur getan werden – im Stillen, im Verborgenen, im Vertrauen darauf, dass das Richtige seinen eigenen Klang hat. Das ist das Geschenk der SE1w9: eine Würde, die keine Bühne braucht, um wahr zu sein.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Lied: In stiller Hand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Josef von Arimathäa ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/dKofTwCmedc?rel=0" title="In stiller Hand – Josef von Arimathäa" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die Grundlage dieser Rubrik als vollständiger psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/se1", label:"SE1 – Der Adler: Subtyp-Profil"},
        {route:"beruehmte-queen-elizabeth-ii", label:"Portrait: Queen Elizabeth II. (SE1w9)"},
        {route:"beruehmte-ludwig-wittgenstein", label:"Portrait: Ludwig Wittgenstein (SE1w9)"},
        {route:"bibel-ruben-schriftgelehrter", label:"Bibel-Porträt: Ruben, der Schriftgelehrte (SO1w2)"},
      ])}
    </div>
  `);
}

function rubenSchriftgelehrterPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-ruben-schriftgelehrter-portrait.jpg" alt="Ruben, der Schriftgelehrte – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ruben, der Schriftgelehrte</p>
        <p class="krim-portrait-typ">SO1w2 · Sozialer Typ 1 mit Zweierflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Schriftgelehrter in dritter Generation – Tierentsprechung: Gans</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Tierentsprechung: Gans" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Sie binden schwere Lasten und legen sie den Menschen auf die Schultern, wollen sie aber selbst nicht mit einem Finger anrühren.« (Mt 23,4)</p>

        <h2 class="vb-section">1. Die Gans</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Gans</strong> ist das Tier der sozialen Eins – ein Tier, das im Verband fliegt, die Formation hält und mit lauter, unnachgiebiger Stimme darauf besteht, dass alle in derselben Ordnung bleiben. Ruben liebte den Klang der Morgengebete – nicht weil sie ihn berührten, sondern weil sie ihn erinnerten: an die Ordnung, an die jahrhundertealte Linie, in die er sich eingereiht hatte wie ein wohlgesetzter Buchstabe in einer Rolle heiliger Schrift. Er war Schriftgelehrter in dritter Generation. Sein Vater hatte die Psalmen auswendig gekannt, sein Großvater in Masada die Gesetze kopiert, als wären sie göttliche Musik.</p>
          <p class="vb-intro">Sein Haus war schlicht, aber diszipliniert: Die Bücher lagen gestapelt nach Alter und Bedeutung, jede Ecke gewischt, der Ölkrug hatte einen festen Platz. Ordnung war für Ruben kein Konzept, sondern Verpflichtung – ein heiliger Rhythmus, den man nicht hinterfragte, sondern weitergab und bewahrte, gegen die Willkür, gegen das Chaos der Welt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Eins: Ordnung als Rettung der Welt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Eins (SO1)</strong> richtet ihren Vollkommenheitsanspruch nicht wie die selbsterhaltende Eins nach innen, sondern nach außen, auf die Gesellschaft: Wenn jeder das Richtige täte, wäre die Welt heil. Am Markttor begegnete Ruben einem Kind, das Fisch und Brot fallen ließ. Statt nur zu trösten, urteilte er sofort mit fachkundiger Präzision, welches Stück nach dem Reinheitsgebot noch zu retten war und welches nicht. Er war ein Mann, der half – aber durch Vorschrift, nicht durch bloßes Mitgefühl.</p>
          <p class="vb-intro">Als Jesus im Tempelhof lehrte, trat Ruben nicht aus Neugier näher, sondern aus einem inneren Reflex: <em>Etwas stimmt nicht.</em> Wer öffentlich spricht, muss geprüft werden. Er stellte sich vor die Menge und forderte Rechenschaft: »Warum achtest du das Gesetz nicht wie unsere Väter?« Der Ton, den er anschlug, war nicht der eines Suchenden, sondern der einer Forderung – die soziale Eins, die glaubt, dass Regeln den Menschen tragen, und die sich verpflichtet fühlt, das öffentlich einzufordern.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierflügel: Der Lehrer, der über die Vorschrift hinaus berührt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierflügel (w2)</strong> gibt der sozialen Eins eine persönliche, zuwendende Note: Sie korrigiert nicht aus der Distanz, sondern im direkten Gespräch, im Unterrichten von Schülern, im Zuhören. Ruben war Lehrer in dritter Generation – jemand, der jungen Männern beibrachte, wie man Opfer richtig darbringt, wie man betet, wie viele Schritte man am Sabbat gehen darf. Seine Strenge war nie anonym; sie richtete sich immer an ein konkretes Gegenüber.</p>
          <p class="vb-intro">Genau diese Zuwendung wurde später zu seinem Wendepunkt: Als ein alter Schüler ihn fragte, ob eine weinende, betende Frau dadurch unrein werde, antwortete Ruben nicht mehr mit einem Verweis auf das Gesetz, sondern persönlich, warm: »Wenn sie weint, weil sie geliebt hat – dann ist sie reiner, als viele, die nie berührt wurden.« Der Zweierflügel, der die Regel durch die Beziehung hindurch neu lesen lernt.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Begegnung: »Du überliest das Herz«</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jesus antwortete auf Rubens öffentliche Zurechtweisung nicht mit Gegenangriff, sondern mit einem einzigen, leise gesprochenen Satz: »Du liest die Schrift. Aber du überliest das Herz.« Er traf Ruben wie ein Stein – nicht theologisch, sondern persönlich. Denn wenn Jesus recht hatte, war alles, wofür Ruben sich seit Jahren verzehrt hatte, nicht falsch, aber unvollständig.</p>
          <p class="vb-intro">In der Stille danach erinnerte sich Ruben an die Krankheit seines Bruders, an den frühen Tod seiner Mutter – Schmerz, der sich nie in Trauer entladen hatte, sondern in Disziplin verwandelt worden war: Wenn ich alles richtig mache, wird nichts mehr zerbrechen. Das Gesetz hatte ihn gehalten wie ein Gerüst den Stein. Jetzt stellte ein einziger Satz nicht das Gesetz infrage, sondern Rubens Verhältnis dazu: Was, wenn die Vorschrift ein Mittel war – und nicht das Ziel?</p>
        </blockquote>

        <h2 class="vb-section">5. Die Kreuzigung und die stille Wahrhaftigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als die Nachricht von der Kreuzigung kam, ging Ruben nicht zum Richtplatz. Er blieb in seinem Haus, saß auf dem Boden – nicht aus Trauer, sondern weil sein Körper keine andere Haltung fand. <em>Was, wenn wir ihn verkannt haben?</em> Der Gedanke war leise, aber da. Er dachte an Jesu Satz über die Lasten, die man anderen aufbürdet, ohne sie selbst zu tragen – ein Satz, der ihn damals wütend gemacht hatte und ihn jetzt nur noch still machte.</p>
          <p class="vb-intro">Zum ersten Mal in seinem Leben fragte er sich: Ist das Maß, das ich für andere anlege, wirklich dasselbe, das ich für mich selbst verwende? Kein Urteil – der Anfang einer Wahrhaftigkeit, die nicht sprach, sondern horchte.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Das Gesetz mit anderen Augen lesen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In den Tagen danach kehrte Ruben nicht in den Tempelhof zurück, um zu lehren. Er wurde leiser – nicht schwächer, sondern weicher im Blick. Er begann, das Gesetz neu zu lesen: nicht weniger genau, aber mit der Frage, was ein Gebot eigentlich bewahren, wovor es schützen soll. <em>Das Gesetz ohne Barmherzigkeit ist ein Messer ohne Griff.</em> Das ist das Geschenk der SO1w2: eine Strenge, die durch Zuwendung hindurch lernt, dass die Regel dem Menschen dienen muss – nicht umgekehrt.</p>
          <p class="vb-intro">Ruben sah Jesus nie wieder. Aber ein Blick blieb ihm im Sinn, nicht streng, nicht weich, sondern durchdringend und still: <em>Sieh nicht nur, was geschrieben steht. Sieh, was es dir zeigen will.</em> Der Schriftgelehrte, der Gesetzeswächter, der öffentliche Mahner begann, innerlich neu zu schreiben – nicht an den Tafeln des Gesetzes, sondern an der stillsten Stelle seines Herzens.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Zwischen Gesetz und Gnade</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Ruben, dem Schriftgelehrten, ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/XOKO4asfeI8?rel=0" title="Zwischen Gesetz und Gnade – Ruben, der Schriftgelehrte" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/so1", label:"SO1 – Die Gans: Subtyp-Profil"},
        {route:"beruehmte-konfuzius", label:"Portrait: Konfuzius (SO1w2)"},
        {route:"bibel-josef-von-arimathaea", label:"Bibel-Porträt: Josef von Arimathäa (SE1w9)"},
        {route:"bibel-johannes-der-taeufer", label:"Bibel-Porträt: Johannes der Täufer (SX1w9)"},
      ])}
    </div>
  `);
}

function johannesDerTaeuferPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-johannes-der-taeufer-portrait.jpg" alt="Johannes der Täufer – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johannes der Täufer</p>
        <p class="krim-portrait-typ">SX1w9 · Sexueller Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Rufer in der Wüste am Jordan – Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Bereitet den Weg des Herrn, macht seine Pfade gerade.« (Mt 3,3)</p>

        <h2 class="vb-section">1. Die Schwarze Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Schwarze Mamba</strong> ist das Tier der sexuellen Eins – sie beißt nicht aus Bosheit, sondern weil sie eine Bedrohung erkannt hat und keine zweite Warnung ausspricht. Johannes sprach mit einer Stimme, die nicht diskutierte. Sie kam nicht aus dem Kopf, nicht aus dem Bauch – sie kam aus der Tiefe, jenem Ort, an dem sich Urteil und Feuer küssen. Er war kein Mann, den man mochte. Man fürchtete ihn, oder man folgte ihm. Aber niemand war ihm gleichgültig.</p>
          <p class="vb-intro">Er trug Kamelhaar, nicht aus Armut, sondern aus Absicht. Er aß Heuschrecken, getränkt in wildem Honig – nicht, weil er nichts anderes bekam, sondern weil er sich dem Überfluss, der Lüge, dem bequemen Selbstbetrug verweigerte. Er lebte außerhalb, geografisch und geistig, jenseits der Mauern Jerusalems, am Jordan, wo das Land rauer war und das Herz weniger abgelenkt. Dort stand er, Tag für Tag, und rief: »Kehrt um! Die Axt ist schon an die Wurzel gelegt!«</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Eins: Eifer, der keine Heuchelei duldet</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Eins (SX1)</strong> richtet ihre Leidenschaft der Vollkommenheit mit missionarischer Wucht auf eine einzige Sache – bei Johannes auf die Reinheit vor Gott. Er war nicht gerecht, weil er alle Regeln einhielt, sondern weil er sie auf ihre Wurzel prüfte: Was aus Bequemlichkeit gelebt wurde, verachtete er; was aus echtem Hunger nach Gott kam, ehrte er, selbst wenn es in Staub und Schwäche gekleidet war. Er konnte in einem Zöllner mehr Wahrheit erkennen als in einem Priester mit goldenem Saum.</p>
          <p class="vb-intro">Als eine Gruppe Pharisäer und Sadduzäer sich näherte, um über ihn zu urteilen, rief er ihnen entgegen: »Ihr Schlangenbrut! Wer hat euch gelehrt, dem kommenden Zorn zu entfliehen? Bringt Frucht, die der Umkehr würdig ist!« Kein Gespräch, keine Verhandlung – der Ruf einer SX1, die spürt, dass unter Selbstbild und System eine gefangene Wahrheit liegt, und die keine zweite Warnung ausspricht.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Rückzug in die Wüste, Selbstverkleinerung am Ende</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> gibt der sexuellen Eins eine Sehnsucht nach Rückzug, Askese und Verschmelzung mit etwas Größerem als sich selbst. Johannes kannte das Unreine in sich selbst nicht als Schuld, sondern als Erinnerung – Zeiten, in denen sein Glaube Fassade war, in denen seine Wut ihm als Schild diente. Doch dann war er in die Wüste gegangen, und dort, im Sand, im Schweigen, im Verzicht, war sein Blick geschärft worden.</p>
          <p class="vb-intro">Am deutlichsten zeigt sich dieser Flügel am Ende: »Er muss wachsen. Ich aber muss abnehmen.« Kein Rückzug aus Enttäuschung, sondern Hingabe – nicht an einen Menschen, sondern an den Ruf, der ihn von Anfang an gelenkt hatte. Eine Eins mit Zweierflügel würde um Nähe und Anerkennung ringen; die SX1w9 tritt zurück, sobald ihre Aufgabe erfüllt ist, und löst sich in das auf, wofür sie gerufen hat.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Begegnung am Jordan</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Morgen war kühl, der Himmel grau wie ungebrannter Ton. Johannes stand im Fluss, bereit wie jeden Tag, das Reine vom Falschen zu trennen. Dann kam Jesus – nicht mit Getöse, nicht mit Gefolge, sondern mit einer Stille, die größer war als jede Ansprache. Johannes sah ihn und wusste es, nicht durch Zeichen, sondern durch dieselbe Stimme, die ihn einst in die Wüste gerufen hatte: Das ist der Eine.</p>
          <p class="vb-intro">Jesus trat ans Wasser und sagte nur: »Tauf mich.« Johannes wich zurück: »Ich sollte von dir getauft werden – und du kommst zu mir?« Sein eigenes Maß war plötzlich infrage gestellt. Jesus antwortete: »Lass es geschehen. Es gebührt sich so, damit alle Gerechtigkeit erfüllt werde.« Johannes nickte, langsam, als legte er sein Schwert nieder – führte ihn ins Wasser, senkte ihn unter die Oberfläche und hob ihn zurück ins Licht.</p>
        </blockquote>

        <h2 class="vb-section">5. Zweifel in der Zelle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als Herodes ihn festsetzen ließ – nicht aus Überzeugung, sondern weil Wahrheit immer stört, wenn sie auf Macht trifft –, kam mit der Dunkelheit der Zweifel. Er ließ Jesus fragen: <em>Bist du es wirklich? Oder sollen wir auf einen anderen warten?</em> Nicht aus theologischem Interesse, sondern weil sein Herz, das immer gebrannt hatte, nun nur noch Glut war, und er wissen musste: War alles nicht vergeblich?</p>
          <p class="vb-intro">Jesu Antwort kam ohne Selbstbehauptung: »Geht und sagt Johannes, was ihr seht: Blinde sehen, Lahme gehen, Aussätzige werden rein, Taube hören, Tote stehen auf, Armen wird das Evangelium gepredigt.« Johannes lehnte sich an die kalte Wand, schloss die Augen – und lächelte, zum ersten Mal seit Wochen. Er hatte gesehen, was er sehen sollte. Er hatte gerufen, bis es nicht mehr nötig war zu rufen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Feuer, das sich selbst zurücknimmt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Johannes hinterlässt, ist ein Feuer, das nicht um sich selbst kreist. Er hatte geliebt – mit brennendem Herzen, unvollkommen, aber wahrhaftig – und war doch bereit, in dem Moment zurückzutreten, in dem ein Größerer erschien. Das ist das Geschenk der SX1w9: eine Kompromisslosigkeit, die sich nicht in der eigenen Bedeutung verliert, sondern sich am Ende freiwillig auflöst, weil die Sache größer ist als der Rufer.</p>
          <p class="vb-intro">Er ging seinem Ende entgegen – ohne Bitterkeit, ohne Rückruf, ohne Klage. Die Schwarze Mamba, die zubiss, wo Heuchelei war, und die sich still zurückzog, sobald das Licht, dem sie den Weg bereitet hatte, selbst zu leuchten begann.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Feuer am Jordan</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Johannes dem Täufer ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/mSDVJQpCVF8?rel=0" title="Feuer am Jordan – Johannes der Täufer" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/sx1", label:"SX1 – Die Schwarze Mamba: Subtyp-Profil"},
        {route:"beruehmte-klaus-kinski", label:"Portrait: Klaus Kinski (SX1w9)"},
        {route:"bibel-ruben-schriftgelehrter", label:"Bibel-Porträt: Ruben, der Schriftgelehrte (SO1w2)"},
        {route:"bibel-marta", label:"Bibel-Porträt: Marta (SE2w1)"},
      ])}
    </div>
  `);
}

function martaPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-marta-portrait.jpg" alt="Marta – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marta</p>
        <p class="krim-portrait-typ">SE2w1 · Selbsterhaltender Typ 2 mit Einserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Gastgeberin aus Bethanien – Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Marta, Marta, du machst dir viele Sorgen und Mühen…« (Lk 10,41)</p>

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei – massiv, unauffällig, dem Anschein nach träge, und doch das Tier, das im gesamten Ökosystem am unentbehrlichsten ist: Es hält die Flusswege offen, formt den Lebensraum für alle anderen, meist ungesehen unter der Oberfläche. Marta konnte Stille nicht gut ertragen – nicht, weil sie laut dachte, sondern weil sie in der Stille die anderen nicht mehr hörte. Das Haus war ihr Reich, nicht wie ein Palast, sondern wie ein Gefäß: Sie kannte jede Kachel im Innenhof, jede Kerbe in der Backplatte des Herdes, wusste, wie viel Öl im Krug war, bevor sie ihn anhob.</p>
          <p class="vb-intro">Sie war früh aufgestanden. Der Brotteig musste ruhen, das Wasser erhitzt, der Platz für Gäste gereinigt werden – auch wenn noch niemand kam. Wenn jemand fragte, wie sie das alles schaffe, lächelte sie und sagte: »Es muss ja gemacht werden.« Aber was sie meinte, war: <em>Ich kann nicht anders. Wenn ich nicht gebe, verschwinde ich.</em></p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: Liebe als Lohn für Nützlichkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> gibt nicht, um zu strahlen, sondern um zu überleben – Fürsorge wird zur stillen Voraussetzung dafür, gebraucht und damit gehalten zu werden. In ihrer Kindheit war Marta oft übersehen worden: die stille Tochter, die Vernünftige, die hilft, ohne zu fragen. So hatte sie gelernt: Liebe kommt, wenn man gebraucht wird. Nähe entsteht durch Nützlichkeit. Zuwendung ist kein Geschenk – sie ist ein Lohn.</p>
          <p class="vb-intro">Als Jesus kam und Maria sich zu seinen Füßen setzte, blieb Marta stehen – das Tuch in der einen Hand, das Wort, das sie nicht sagen wollte, in der anderen. <em>Warum hilft sie nicht?</em> Schließlich trat sie näher und sagte, nicht bitter, aber mit einem Unterton: »Herr, kümmert es dich nicht, dass meine Schwester mich die ganze Arbeit allein tun lässt? Sag ihr, sie soll mir helfen.« Es war kein Zorn. Es war Sehnsucht in der Kleidung der Anklage.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Disziplin als Rechtfertigung des Gebens</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der selbsterhaltenden Zwei eine strenge, fast moralische Note: Dienst wird nicht als Wahl erlebt, sondern als Pflicht, die korrekt erfüllt werden muss. Marta portionierte das Salz streng, hielt jede Kachel sauber, führte den Haushalt mit kontrolliertem Griff. Versorgen war für sie keine Pflicht im engeren Sinn – es war Identität. Ein Raum, in dem sie spürte: Ich bin gebraucht.</p>
          <p class="vb-intro">Diese Kombination aus Fürsorge und Disziplin macht das Geben für die SE2w1 zugleich zur Bürde und zum einzigen legitimen Weg, Zuwendung zu verdienen – wer aufhört zu arbeiten, hat scheinbar keinen Anspruch mehr auf Liebe. Genau dieser innere Zwang war es, den Jesus später berührte, nicht Martas Fleiß selbst.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Spiegel in Jesu Antwort</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jesus erhob sich nicht, hob nicht einmal die Stimme. Aber als er sprach, legte sich eine stille Weite über den Hof: »Marta, Marta, du machst dir viele Sorgen und Mühen. Aber nur eines ist notwendig. Maria hat den guten Teil erwählt – und er wird ihr nicht genommen werden.« Es war keine Zurechtweisung. Es war ein Spiegel.</p>
          <p class="vb-intro">Marta sah sich darin – nicht als Fehler, sondern als Mensch, der zu viel trägt, weil er fürchtet, sonst nicht zu genügen. Es ging nicht um Maria. Es ging um die Art, wie Marta ihr Geben mit Bedingungen füllte, wie sie Nähe durch Leistung eintauschte, wie sie nur dann ruhig atmete, wenn sie sicher war: Ich werde gebraucht. Sie ging zurück in die Küche – aber langsamer. Zum ersten Mal saß sie, inmitten der Arbeit, und dachte nicht an das, was noch zu tun war, sondern an das, was in ihr gerufen worden war.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk der Zuwendung ohne Forderung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Am Abend war das Haus erfüllt vom Duft gerösteter Körner und warmer Oliven. Nach dem Essen setzte sich Marta – nicht zu Jesus, nicht zu Maria, sondern auf die Stufe gegenüber, so, dass sie beide sah, aber ohne bedienen zu müssen. Jesus lächelte ihr zu. Sie erwiderte es und spürte etwas Neues: <em>Ich darf da sein, auch wenn ich nichts tue.</em></p>
          <p class="vb-intro">In jener Nacht schlief sie ruhiger als sonst – nicht, weil alles getan war, sondern weil sie begriff: Nicht jede Liebe muss sichtbar sein. Nicht jedes Geben muss zu Dank führen. Und nicht jede Mühe ist ein Schlüssel zur Anerkennung. Manchmal genügt es, dazusein.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Dienen ohne sich zu verlieren</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Tage vergingen, Jesus kam und ging, und jedes Mal brachte er Bewegung – nicht in den Räumen, in den Menschen. Marta blieb Marta: Sie kochte, sie sorgte. Aber sie drängte weniger, atmete tiefer. Wenn Maria in der Laube saß, fragte sie nicht mehr <em>Warum hilft sie nicht?</em>, sondern dachte: <em>Vielleicht hilft sie gerade anders.</em></p>
          <p class="vb-intro">Und wenn sie betete, sprach sie nicht mehr nur: <em>Zeig mir, wem ich dienen soll.</em> Sondern manchmal einfach nur: <em>Herr, sei du bei mir. Auch wenn ich nichts tue.</em> Das ist das Geschenk der SE2w1: Fürsorge, die nicht mehr beweisen muss, dass sie einen Platz verdient – ein Flusspferd, das den Fluss weiter offenhält, aber nicht mehr fürchtet zu verschwinden, wenn es einmal stillsteht.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Hände voll, Herz offen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Marta ist ein eigener Song entstanden, der ihre seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/QrKeNWPeBiU?rel=0" title="Hände voll, Herz offen – Marta" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/se2", label:"SE2 – Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-margot-friedlaender", label:"Portrait: Margot Friedländer (SE2w1)"},
        {route:"bibel-johannes-der-taeufer", label:"Bibel-Porträt: Johannes der Täufer (SX1w9)"},
        {route:"bibel-jesus", label:"Bibel-Porträt: Jesus (SO2w1)"},
      ])}
    </div>
  `);
}

function jesusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-jesus-portrait.jpg" alt="Jesus – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jesus</p>
        <p class="krim-portrait-typ">SO2w1 · Sozialer Typ 2 mit Einserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Bei der Speisung der Fünftausend – Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Gebt ihr ihnen zu essen.« (Lk 9,13)</p>

        <h2 class="vb-section">1. Der Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei – ein Tier, das nicht wartet, bis man es ruft, sondern von sich aus auf die Menschen zugeht, das jedes Gesicht in einer Menge einzeln wahrnimmt und sich selbst dabei zurückstellt. Der Tag war heiß, Staub lag auf der Straße, und Jesus war müde – nicht körperlich, sondern auf jene Weise, wie man müde wird, wenn viele Augen auf einem ruhen und jedes davon fragt: <em>Siehst du mich?</em> Und er sah sie. Alle. Nicht als Masse, nicht als Schar, sondern als Einzelne: der Junge mit dem eingefallenen Blick, die Frau mit der leeren Hand, der Alte mit dem vorsichtigen Schritt.</p>
          <p class="vb-intro">Er kannte ihren Hunger – nicht nur nach Brot, sondern nach Bedeutung. Und das war seine Gabe: nicht zu predigen, sondern zu geben, bevor jemand die Hand hob. Als die Jünger nervös wurden – »Die Menge wird unruhig, es sind zu viele, sie haben nichts zu essen« –, antwortete er: »Gebt ihr ihnen zu essen.« Die Worte waren weich, aber sie schnitten: nicht als Forderung, sondern als Spiegel. Schaut nicht auf die Menge. Schaut auf eure Fähigkeit zu geben.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Prinzip statt Berechnung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Zwei (SO2)</strong> richtet ihre Fürsorge nicht auf eine einzelne Beziehung, sondern auf die ganze Gemeinschaft – Naranjo nannte diesen Subtyp ›Ambition‹: das Bedürfnis, für viele unentbehrlich zu sein, nicht nur für einen. »Wir haben nichts«, sagten die Jünger, »nur fünf Brote und zwei Fische – von einem Jungen.« Jesus nahm das Brot nicht als Gabe, sondern als Antwort. Denn dort, wo jemand teilt, beginnt das Wunder. Er sah nicht auf das Wenige. Er sah auf die Bereitschaft.</p>
          <p class="vb-intro">Er nahm die Brote, dankte, brach – und während er brach, entstand Überfluss. Nicht plötzlich, nicht wie ein Zauber, sondern wie ein inneres Gesetz, das sich entfaltet, wenn jemand gibt, ohne zu rechnen. Es gab kein Gedränge, keine Angst, zu kurz zu kommen. Denn jeder sah: Wenn ich empfange, empfängt auch der andere. Es war nicht nur eine Speisung. Es war eine Heilung – der Hunger war nicht nur körperlich, er war ein Hunger nach Wert, nach Gesehenwerden, nach <em>Wir gehören dazu</em>.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Geben nach einem inneren Gesetz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der sozialen Zwei eine klare, fast ethische Struktur: Geben geschieht nicht aus Impuls, sondern folgt einem inneren Prinzip. Nicht Besitz, sondern Hingabe. Nicht Vorrat, sondern Vertrauen. Die Jünger verteilten Körbe, reichten Hände, führten Kinder zu freien Plätzen – sie taten, was er gesagt hatte, aber verstanden es noch nicht ganz. Denn was sie sahen, war das Wunder. Was sie nicht sahen, war das Prinzip dahinter.</p>
          <p class="vb-intro">Jesus hatte sie nicht belehrt. Er hatte sie in Bewegung gebracht – nicht durch Theorie, sondern durch ein Mahl. Als sie am Ende die Reste sammelten, zwölf Körbe voll, standen sie still, nicht aus Staunen, sondern aus Demut: Sie hatten gelernt, dass das, was bleibt, nicht das ist, was man zurückhält, sondern das, was man verteilt. Genau diese Disziplin – Geben als Prinzip, nicht als Ausnahme – trägt die Handschrift des Einserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Nähe ohne Bedürftigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Nacht kam langsam, die Menschen waren satt, lachten, sangen leise. Jesus aber zog sich zurück – nicht weil er müde war, sondern weil er wusste: <em>Geben darf nicht zur Abhängigkeit werden.</em> Er stieg auf den Hügel hinter dem Feld, allein. Er betete nicht laut, er bat nicht. Er war. Denn wer gibt, weil er liebt, braucht keine Antwort.</p>
          <p class="vb-intro">Seine Nähe war radikal, aber nie fordernd. Er hielt niemanden fest, band niemanden an sich. Er schenkte – und ging. Und gerade darin lag seine Tiefe: Er war ganz da und ließ doch los. So lebte er die soziale Zwei in höchster Bewusstheit – nicht als Bedürftiger, sondern als Quelle, nicht als Retter, sondern als Dienender, der durch das Geben selbst frei bleibt.</p>
        </blockquote>

        <h2 class="vb-section">5. Die unsichtbare Saat der Verbundenheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Am nächsten Morgen war der Platz leer. Die Menschen waren gegangen, zurück in ihre Städte, Dörfer, Höfe. Aber etwas war anders. Sie trugen nichts Greifbares mit sich – kein Segenswort, kein Andenken, kein sichtbares Zeichen. Und doch: Sie trugen etwas, das sie nicht benennen konnten. Eine Weite im Brustkorb. Ein Wissen, das nicht vom Kopf kam.</p>
          <p class="vb-intro">Sie hatten erlebt, dass Nähe nicht etwas ist, das man sich verdienen muss, sondern etwas, das man teilen kann. Sie hatten erfahren, dass Würde nicht von Rang kommt, sondern von der Art, wie man einander ansieht. Jesus sprach nie viel darüber. Er sagte später nur: »Ich bin das Brot des Lebens.« Und wer ihn verstanden hatte, wusste, dass er nicht vom Magen sprach, sondern vom Herz.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Quelle sein, ohne sich zu erschöpfen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was diese Erzählung von der sozialen Zwei zeigt, ist ihre reifste, gesündeste Form: Geben, das nicht aus Mangel schöpft, sondern aus Fülle, und das sich nicht durch die Reaktion der anderen bestätigen lassen muss. Die meisten SO2 ringen mit der Frage, ob genug Anerkennung für all die Mühe zurückkommt. Jesus verschenkte sich – und zog sich dann zurück, bevor aus Fürsorge Bindung, aus Geben Erwartung wurde.</p>
          <p class="vb-intro">Das ist das Geschenk der SO2w1: eine Großzügigkeit, die einem inneren Gesetz folgt statt der Buchhaltung von Geben und Nehmen – ein Golden Retriever, der jedem Gesicht in der Menge begegnet, als sei es das einzige, und der genau deshalb niemanden binden muss, um geliebt zu werden.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Brot aus seinen Händen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu diesem Kapitel ist ein eigener Song entstanden, der diese seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/3NwdYJLeKN0?rel=0" title="Brot aus seinen Händen" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-muhammad-ali", label:"Portrait: Muhammad Ali (SO2w1)"},
        {route:"bibel-marta", label:"Bibel-Porträt: Marta (SE2w1)"},
        {route:"bibel-maria-magdalena", label:"Bibel-Porträt: Maria Magdalena (SX2w1)"},
      ])}
    </div>
  `);
}

function mariaMagdalenaPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-maria-magdalena-portrait.jpg" alt="Maria Magdalena – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Maria Magdalena</p>
        <p class="krim-portrait-typ">SX2w1 · Sexueller Typ 2 mit Einserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Erste Zeugin der Auferstehung – Tierentsprechung: Kamel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx2.jpg" alt="Tierentsprechung: Kamel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX2")};left:${tierAvatarLeft("SX2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Sie hat viel geliebt.« (vgl. Lk 7,47)</p>

        <h2 class="vb-section">1. Das Kamel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Kamel</strong> ist das Tier der sexuellen Zwei – ausdauernd bis zur Erschöpfung, fähig, tagelang ohne sichtbare Versorgung weiterzugehen, solange es einem einzigen Ziel folgt. Maria hatte viele Namen gehabt. Manche flüsterten sie, andere spuckten sie aus, einige schwiegen, wenn sie erschien. Aber keiner davon war wirklich ihrer. Ihre Nähe war intensiv, zu viel für manche, zu direkt. Sie sah nicht über Menschen hinweg – sie sah durch sie hindurch.</p>
          <p class="vb-intro">Sie wollte nicht Besitz, nicht Macht, sondern Verschmelzung. Sie konnte nicht am Rand stehen, nicht zuschauen, nicht halb lieben. Wenn sie sich jemandem zuwandte, dann ganz, mit Haut, Herz, Augen und Seele. Und wenn sie weggestoßen wurde – was oft geschah –, dann brannte ihr Inneres nicht vor Zorn, sondern vor Verlustangst. Die Menschen nannten sie labil, unstet, unklar. Aber sie war klar – in ihrem Hunger nach jemandem, der ihre Tiefe hielt, ohne sie zu benutzen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Zwei: Verschmelzung statt Halbheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Zwei (SX2)</strong> sucht nicht die breite Anerkennung einer Gemeinschaft, sondern die vollständige Verschmelzung mit einer einzigen Person. Es war kein lauter Moment, kein Ruf, kein Wunder – nur ein Blick. Jesus sah sie nicht wie die anderen Männer, nicht mit Hunger, nicht mit Urteil, sondern mit Erkenntnis. Er sah in sie hinein, an jenen Punkt, den sie selbst nie ganz benennen konnte: wo die Sehnsucht wohnte, geliebt zu werden ohne Zweck.</p>
          <p class="vb-intro">In seiner Gegenwart verstummte die ständige Anspannung, die Jagd nach Verbindung, das Fragen: <em>Bin ich genug?</em> Nicht, weil er sie beantwortete, sondern weil er sie überflüssig machte. Sie sah in Jesus nicht den Lehrer, nicht den Rabbi, nicht den Wundertäter. Sie sah den Einen, der ihre Tiefe nicht fürchtete und nicht benutzte. Und sie blieb – nicht weil sie musste, sondern weil sie endlich sein durfte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Treue als Prinzip statt Inszenierung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der sexuellen Zwei eine Note von Prinzipientreue, die ihre Intensität nicht zur Schau stellt, sondern in unverrückbarer Verbindlichkeit lebt. Maria blieb bei ihm, nicht als Schülerin unter vielen, sondern wie jemand, der nicht nur folgen wollte, sondern verschmelzen. Doch Jesus ließ sich nicht greifen – er war bei allen, und doch nie ganz bei einem allein.</p>
          <p class="vb-intro">»Ich will bei dir sein«, sagte sie. Und er erwiderte nur: »Dann bleib – ohne dich zu verlieren.« Das war für sie das Schwerste, denn ihr Herz wollte sich verschenken, ganz. Aber er zeigte ihr: Liebe ist nicht Auflösung, sondern Klarheit im Verbundensein. Genau diese Fähigkeit, trotz brennender Sehnsucht an einem Prinzip festzuhalten, statt sich zu verlieren oder ihre Nähe theatralisch einzufordern, trägt die Handschrift des Einserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Treue über den Tod hinaus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Den Tag der Verhaftung hatte sie gespürt, bevor er geschah – nicht durch Worte oder Zeichen, sondern in ihrem Körper, wie eine plötzliche Leere im Raum, wo sonst sein Licht war. Als sie ihn führten, mit Stricken, mit Spott, war sie da. Nicht laut, nicht weinend, sondern mit Blicken, die mehr sprachen als jede Verteidigung. Sie stand unter dem Kreuz – nicht weil es Hoffnung gab, sondern weil es Liebe war. Nicht romantisch, nicht heroisch, sondern roh, unverhandelbar, wach: <em>Ich bleibe. Auch wenn du gehst.</em></p>
          <p class="vb-intro">Als er starb, starb etwas in ihr mit – aber nicht ihre Liebe. Wo andere flohen, blieb sie. Wo andere sagten <em>Es ist vorbei</em>, dachte sie: <em>Er ist noch nicht fertig.</em> Sie half, den Leichnam zu salben. Sie weinte nicht wie eine Witwe, sondern wie eine Verbundene, die wusste: Dieser Tod beendet nichts. Er verändert.</p>
        </blockquote>

        <h2 class="vb-section">5. Das leere Grab und die Auferstehung der Liebe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Morgen war grau, der Stein war weg, das Grab war leer. Maria stand da – nicht mit Hoffnung, sondern mit Verzweiflung. Denn was macht eine SX2, wenn selbst der Körper nicht mehr da ist, wenn sie nicht mehr salben, nicht mehr dienen, nicht mehr in Nähe trauern darf? Da trat er zu ihr, nicht als Lichtgestalt, nicht als Sieger, sondern als Mensch. Sie erkannte ihn nicht, nicht sofort – denn Liebe, wenn sie tief verwundet ist, erwartet nur Verlust.</p>
          <p class="vb-intro">Dann sagte er nur: »Maria.« Ihren Namen, nicht als Information, sondern als Anrufung. Und sie wusste: Er lebt. Und ich – ich werde nicht zurückgelassen. Sie wollte ihn umarmen, festhalten, nie wieder loslassen. Doch er sagte: »Rühr mich nicht an – denn ich bin noch nicht zum Vater aufgefahren.« Nicht weil er sie abwies, sondern weil er sie lehrte: Liebe heißt nicht Besitz. Liebe heißt Zeugenschaft.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Verkünden statt binden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">So wurde Maria Magdalena die erste Zeugin – nicht, weil sie etwas verstanden hatte, sondern weil sie viel geliebt hatte. Und weil sie bereit war, ihn loszulassen, um ihn in der Welt weiterzutragen. Nicht in Umarmung, sondern in ihrer Stimme, in ihrem Blick, in ihrem unverrückbaren Glauben: Er lebt.</p>
          <p class="vb-intro">Das ist das Geschenk der SX2w1: eine Intensität, die sich nicht in Besitzergreifung erschöpft, sondern zur Botschaft wird – ein Kamel, das seine ganze Kraft einem einzigen Ziel widmet und, sobald das Ziel erreicht scheint, gerade darin frei wird, weiterzutragen, was es getragen hat.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Sie sah ihn brechen – nicht das Brot allein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Maria Magdalena ist ein eigener Song entstanden, der ihre seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/bw3-nPmE3OA?rel=0" title="Sie sah ihn brechen – nicht das Brot allein – Maria Magdalena" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/sx2", label:"SX2 – Das Kamel: Subtyp-Profil"},
        {route:"beruehmte-monika-gruber", label:"Portrait: Monika Gruber (SX2w1)"},
        {route:"bibel-jesus", label:"Bibel-Porträt: Jesus (SO2w1)"},
        {route:"bibel-salome", label:"Bibel-Porträt: Salome (SE3w4)"},
      ])}
    </div>
  `);
}

function salomePage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-salome-portrait.jpg" alt="Salome – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Salome</p>
        <p class="krim-portrait-typ">SE3w4 · Selbsterhaltender Typ 3 mit Viererflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Die Architektin des Eindrucks – Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Ihre Hände waren immer in Bewegung – aber ihr Herz war still geworden.«</p>

        <h2 class="vb-section">1. Der Waschbär</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Waschbär</strong> ist das Tier der selbsterhaltenden Drei – geschickt, wachsam, ein Meister der stillen Anpassung, der sich nie in den Vordergrund drängt und doch dafür sorgt, dass alles um ihn herum geordnet und versorgt ist. Salome hatte früh gelernt, was wirkt. Nicht was wahr ist, nicht was tief ist – sondern was ankommt. Sie war klug, ja. Aber vor allem: geschickt.</p>
          <p class="vb-intro">In ihrem Haus war alles geordnet, die Krüge glänzten, das Brot lag exakt geschnitten auf dem Tuch. Denn wenn alles gut aussieht, ist es auch ein wenig gut – das war der Gedanke, der ihr Sicherheit gab. Sie hatte ihr wahres Selbst mit einer Art Panzer überzogen, nicht aus Kälte, sondern aus Notwendigkeit. Tief in ihr wohnte eine Stimme, die flüsterte: Wenn du nichts leistest, bist du nichts.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Drei: Wirkung als Überlebensstrategie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Drei (SE3)</strong> sucht Sicherheit nicht durch öffentlichen Glanz, sondern durch stille, makellose Kompetenz im eigenen Umfeld. Salome war nicht eingeladen gewesen zur Hochzeit in Kana – zumindest nicht offiziell. Aber sie war da, wie so oft: still, dezent, an der Seite. Ihr Blick erfasste die Szenerie wie ein erfahrener Gastgeber: die Menge, die Temperatur des Raumes, den Vorrat an Wein. Sie war nicht neugierig – sie war wach. Denn wer wach ist, hat Kontrolle.</p>
          <p class="vb-intro">Als die Weinkrüge leer waren, war das in ihrer Welt ein Desaster – ein Makel, öffentlich. Doch Jesus sagte nur leise Worte zu den Dienenden, und Wasser wurde zu Wein. Ohne Auftritt, ohne Ankündigung, kein Lob, keine Geste der Selbstbestätigung. Salome konnte nicht wegblicken – nicht wegen des Wunders, sondern wegen seiner Stille, seines Mangels an Eitelkeit. Wer ist dieser Mann, der wirken kann, ohne zu wirken?</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererflügel: Die verborgene Unruhe hinter der Fassade</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererflügel (w4)</strong> gibt der selbsterhaltenden Drei eine leise, kaum sichtbare Tiefe – eine Empfindsamkeit für das eigene Ungenügen, die unter der makellosen Oberfläche wach bleibt und sich irgendwann nicht mehr verdrängen lässt. Nach dem Fest ging Salome langsam nach Hause, und doch schien jeder Schritt schwerer zu wiegen als sonst. Sie hatte Jesus kein Wort gesagt. Denn was hätte sie sagen sollen – »Gut gemacht«? Sie wusste: Solche Worte hätten ihn nicht erreicht, denn er hatte nichts getan, um zu gefallen. Und das war es, was sie tief traf.</p>
          <p class="vb-intro">Sie war es gewohnt, gewürdigt zu werden, hatte gelernt, dass Anerkennung das Maß aller Dinge ist. Doch dieser Mann war wirksam ohne Aufwand, präsent ohne Geltung. Wer bin ich, wenn ich nicht mehr funktioniere? Wenn keiner sieht, was ich tue? Genau dieses leise, unbestechliche Fragen nach dem eigenen Wert jenseits der Leistung – nicht als lauter Zusammenbruch, sondern als stiller innerer Sturm – trägt die Handschrift des Viererflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Angst, gesehen zu werden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Es war in Kapernaum, am Rand eines Marktes. Jesus saß auf einem flachen Stein, nicht erhöht, nicht hervorgehoben, aber in einem Kreis von Menschen, die in seiner Gegenwart atmeten, als sei endlich genug Luft da. Salome trat näher – nicht aus Mut, sondern aus etwas, das sie nicht kannte: Sehnsucht, nicht nach Anerkennung, sondern nach Erkanntwerden. Er sah sie. Nicht mit Überraschung, nicht mit Besitz, nicht mit Lob. Er sah – und das genügte.</p>
          <p class="vb-intro">In seinem Blick lag ein Satz, den sie spürte, ohne dass er gesprochen wurde: Du brauchst dich nicht mehr beweisen. Ein Satz wie eine Klinge, wie eine Befreiung – und zugleich ein Entsetzen. Denn wer war sie, wenn sie nicht mehr geben, leisten, glänzen konnte? Er sprach leise, aber es klang in ihr wie Donner: »Was nützt es dem Menschen, wenn er die ganze Welt gewinnt, aber dabei seine Seele verliert?« Sie fühlte sich gemeint – nicht beschämt, sondern gesehen, jenseits der Maske.</p>
        </blockquote>

        <h2 class="vb-section">5. Das neue Maß: Wirksamkeit ohne Maske</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Sie änderte sich nicht plötzlich, nicht in ihren Gewohnheiten, nicht in ihrer Kleidung. Aber das Motiv hinter allem begann sich zu lösen – nicht sofort, aber stetig. Sie hörte auf, etwas zu sein, um jemand zu sein. Sie begann, Dinge zu tun, nicht um Eindruck zu machen, sondern weil sie gebraucht wurden. Der Unterschied war kaum sichtbar, aber spürbar: Ihr Lächeln wurde weicher, nicht strategisch, echt.</p>
          <p class="vb-intro">Eines Tages, als sie Jesus wieder sah, trat sie zu ihm, setzte sich einfach hin und sagte leise: »Ich bin müde vom Machen.« Er schwieg, nickte kaum merklich und sagte: »Dann ruh dich aus – in dem, was du bist.« Für Salome war das der Wendepunkt. Nicht das Ende ihres Tuns, aber der Beginn ihres wirklichen Seins. Kein Glanz mehr ohne Grund, keine Masken mehr aus Angst, keine Wirkung ohne Wurzeln.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Führen ohne Applaus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als sie später andere führte – jüngere Frauen, unsichere Männer, Kinder –, tat sie es nicht mehr, um Applaus zu bekommen, sondern weil sie wusste, dass das wahre Wirken dort beginnt, wo man nichts mehr darstellt, sondern einfach da ist.</p>
          <p class="vb-intro">Das ist das Geschenk der SE3w4: eine Kompetenz, die sich nicht mehr aus der Angst speist, ohne Leistung wertlos zu sein, sondern aus der stillen Gewissheit, gesehen zu sein, auch wenn niemand zuschaut – ein Waschbär, der nicht mehr jeden Winkel kontrollieren muss, um sich sicher zu fühlen.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Mehr als nur die Beste</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Salome ist ein eigener Song entstanden, der ihre seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/2gklX1qArXw?rel=0" title="Mehr als nur die Beste – Salome bei Jesus" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/se3", label:"SE3 – Der Waschbär: Subtyp-Profil"},
        {route:"beruehmte-david-l-rathmer", label:"Portrait: David L. Rathmer (SE3w4)"},
        {route:"bibel-maria-magdalena", label:"Bibel-Porträt: Maria Magdalena (SX2w1)"},
        {route:"bibel-pontius-pilatus", label:"Bibel-Porträt: Pontius Pilatus (SO3w4)"},
      ])}
    </div>
  `);
}

function pontiusPilatusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-pontius-pilatus-portrait.jpg" alt="Pontius Pilatus – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Pontius Pilatus</p>
        <p class="krim-portrait-typ">SO3w4 · Sozialer Typ 3 mit Viererflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Image-Stratege im Verhör – Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Was ist Wahrheit?« (Joh 18,38)</p>

        <h2 class="vb-section">1. Der Gepard</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gepard</strong> ist das Tier der sozialen Drei – schnell, präzise, ganz auf Wirkung und Position im sozialen Gefüge ausgerichtet. Pilatus trat stets aufrecht auf. Seine Haltung war keine Frage des Rückens, sie war Botschaft. Er war römischer Präfekt, Vertreter der Ordnung, Symbol imperialer Präsenz in einem widerspenstigen Land – und er wusste: Wer diesen Posten nicht mit Imagebewusstsein versieht, wird zerrieben.</p>
          <p class="vb-intro">Für ihn war Führung nicht nur eine Aufgabe, sondern ein Auftritt – ein täglicher, ein kalkulierter, ein notwendiger. Er sprach Griechisch, Latein und etwas Aramäisch, nicht aus Liebe zur Sprache, sondern weil Verständlichkeit Wirkung schuf. Sein ganzes Wesen war gebaut auf: Was strahle ich aus? Wie werde ich wahrgenommen? Nicht aus Narzissmus – aus Notwendigkeit. Denn in seinem Innersten war eine Angst: Wenn ich die Fassade verliere, verliere ich mich selbst.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Drei: Ein Spiegel, der nichts zurückwirft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Drei (SO3)</strong> lebt vom Spielraum zwischen Masken – sie liest Reaktionen, spiegelt Erwartungen, navigiert durch soziale Codes. Pilatus hatte mit vielen gesprochen: Aufständischen, Hohepriestern, Kaufleuten, Philosophen. Er kannte die Töne der Unterwerfung, die Maske der Demut, das kalkulierte Schweigen. Doch dieser Jesus war anders – nicht durch Lautstärke, sondern durch das, was fehlte: kein Selbstschutz, keine Einschmeichelei, keine Furcht, keine Taktik.</p>
          <p class="vb-intro">Jesus spiegelte nichts zurück. Er war da – aber nicht zu fassen. »Bist du der König der Juden?«, fragte Pilatus. Jesus antwortete: »Sagst du das von dir aus, oder haben dir andere davon erzählt?« Und mit diesem Satz fiel die Fassade nicht, aber sie wackelte. Denn Pilatus war gewohnt, zu fragen, aber nicht, selbst befragt zu werden. Dann kam der berühmte Satz: »Was ist Wahrheit?« – nicht ironisch, nicht suchend, sondern wie ein Mann, der weiß, dass er Wahrheit nur verwalten darf, aber sie nicht besitzt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererflügel: Die Leere hinter dem Bild</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererflügel (w4)</strong> gibt der sozialen Drei eine Empfindsamkeit für die eigene innere Leere, die unter der glänzenden Fassade wach bleibt und sich in stillen Momenten unweigerlich meldet. Jesus antwortete nicht auf die Frage nach der Wahrheit. Und gerade das war die Antwort – ein Spiegel, der nichts zurückwarf und so den Fragenden zwang, in sich selbst zu schauen. Und dort fand Pilatus kein Bild. Nur Leere.</p>
          <p class="vb-intro">Kein lauter Zusammenbruch, kein sichtbares Wanken – nur ein Ausweichen des Blicks, nicht sichtbar, aber innerlich. Genau diese leise, unbestechliche Konfrontation mit der eigenen Leere hinter der perfekt kalkulierten Fassade, ohne dass sie nach außen sichtbar würde, trägt die Handschrift des Viererflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Das politische Kalkül: Delegation des Gewissens</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Pilatus trat hinaus auf den Steinboden, die Menge wartete, laut, unruhig, aufgeladen. Es war nicht Angst vor Gewalt – er hatte Gewalt gesehen, befehligt, verwaltet. Es war die Angst, sein Bild in Rom zu beschädigen. Er hatte mit Jesus gesprochen, genug, um zu spüren: Dieser Mann ist keine Gefahr für Rom, aber sehr wohl ein Problem für Jerusalem. Er sprach den Satz, der wie ein Rückzug klang: »Ich finde keine Schuld an ihm.«</p>
          <p class="vb-intro">Und dann der Mechanismus der sozialen Drei: Delegation des Gewissens. »Ihr habt einen Brauch: Ich gebe euch zum Fest einen Gefangenen frei.« Barabbas oder Jesus. Er ließ sie entscheiden – nicht weil er unschuldig war, sondern weil er unsichtbar bleiben wollte in der Schuldfrage. Als sie schrien: Barabbas!, war es wie eine Erleichterung – und wie ein Stich. Denn in ihm regte sich die Erkenntnis, dass seine Entscheidung nicht auf Wahrheit ruhte, sondern auf Wirkung. Und Wirkung war brüchig.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Geste der Hände: Inszenierung statt Reinigung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er ließ Wasser bringen, eine Schale, kühl, klar, wie zum Zeichen. Pilatus tauchte die Hände ins Wasser – die Geste war machtvoll, öffentlich, deutlich: »Ich bin unschuldig am Blut dieses Menschen.« Die Masse schrie weiter, doch in ihm war für einen Moment Stille. Und in dieser Stille spürte er: Das Wasser war kühl, aber es reinigte nicht. Denn die soziale Drei kennt sich selbst zu gut, um sich wirklich zu täuschen.</p>
          <p class="vb-intro">Er wusste: Diese Geste war kein Gewissensakt, sie war eine Inszenierung, ein Schutzschild vor dem Urteil der Nachwelt – und vielleicht auch vor sich selbst. Jesus schwieg, ließ es geschehen, ohne Blick der Anklage, ohne Appell, ohne Trotz. Und gerade das war für Pilatus das Unerträglichste: kein Widerstand, kein Kampf – nur Präsenz, nur Stille, nur diese Gegenwart, die nicht urteilt und gerade deshalb alles spiegelt.</p>
        </blockquote>

        <h2 class="vb-section">6. Das bleibende Echo: Ehrlichkeit ohne Publikum</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Akten waren geschlossen, der Name Jesus fiel nicht mehr auf dem Forum. Aber in Pilatus' Geist ging ein anderer Name nicht mehr fort. Nicht als Schuld, nicht als Held – sondern als Spiegel. Denn er war der Einzige gewesen, der ihm gegenüberstand, ohne etwas von ihm zu wollen. Und das hatte ihn entwaffnet, nicht durch Angriff, sondern durch Wahrheit ohne Strategie. Das Bild, das er von sich gezeichnet hatte, war nicht zerstört – aber rissig.</p>
          <p class="vb-intro">Er hatte sich gegen die Wahrheit entschieden und sich stattdessen die Hände gewaschen, in Unschuld. Doch die Erinnerung blieb, nicht als Fluch, sondern als leises, bleibendes Echo: Was ist Wahrheit? Er wusste: Diese Frage war nie an Jesus gerichtet gewesen, sondern an sich selbst. Das ist das eigentliche Geschenk, das dieser Begegnung innewohnt, auch wenn Pilatus es nicht ergriff: eine soziale Drei, die für einen Moment merkte, dass echte Wirksamkeit nicht aus dem Bild entsteht, das man verwaltet, sondern aus dem, was man ist, wenn niemand mehr zusieht – ein Gepard, der begreift, dass er nicht jeder Erwartung hinterherjagen muss, um seinen Wert zu haben.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Die Hände rein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Pontius Pilatus ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/0I-4rThOvQ0?rel=0" title="Die Hände rein – Pilatus" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/so3", label:"SO3 – Der Gepard: Subtyp-Profil"},
        {route:"beruehmte-karl-lagerfeld", label:"Portrait: Karl Lagerfeld (SO3w4)"},
        {route:"bibel-salome", label:"Bibel-Porträt: Salome (SE3w4)"},
        {route:"bibel-judas-iskariot", label:"Bibel-Porträt: Judas Iskariot (SX3w4)"},
      ])}
    </div>
  `);
}

function judasIskariotPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-judas-iskariot-portrait.jpg" alt="Judas Iskariot – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Judas Iskariot</p>
        <p class="krim-portrait-typ">SX3w4 · Sexueller Typ 3 mit Viererflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Wunsch, unersetzlich zu sein – Tierentsprechung: Pfau</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Tierentsprechung: Pfau" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Wem ich den Bissen geben werde, der ist's.« (Joh 13,26)</p>

        <div class="vb-hinweis-box" style="background:rgba(139,94,60,0.08);border:1px solid rgba(139,94,60,0.25);border-radius:10px;padding:1rem 1.2rem;margin:1rem 0 1.5rem;font-size:0.92rem;line-height:1.6;">
          <strong>Hinweis:</strong> Dieses Kapitel deutet eine der komplexesten und am schwersten beladenen Figuren der biblischen Überlieferung literarisch-typologisch nach Subtyp. Es endet mit Judas' Suizid – historisch überliefert, hier ohne jede Ausschmückung oder Dramatisierung dargestellt. Ziel ist psychologisches Verständnis für ein tragisches Muster, keine Rechtfertigung des Verrats und keine Verharmlosung von Suizid. Wer selbst in einer Krise steckt: Die Telefonseelsorge ist unter 0800 111 0 111 kostenlos und rund um die Uhr erreichbar.
        </div>

        <h2 class="vb-section">1. Der Pfau</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Pfau</strong> ist das Tier der sexuellen Drei – auf die eine, magnetische Verbindung ausgerichtet, die Bedeutung durch Nähe beweist. Judas war früh aufgefallen, nicht durch Lautstärke, nicht durch Wunder, sondern durch Zugkraft. Wenn er sprach, hörten Menschen zu, nicht weil er drängte, sondern weil er den Ton traf, den andere hören wollten. Er kannte die Wirkung von Worten, von Nähe, von Hingabe – und von Kontrolle.</p>
          <p class="vb-intro">Jesus hatte ihn berufen, wie die anderen. Doch Judas spürte: Bei mir ist es anders. Er wollte nicht nur Teil des Kreises sein – er wollte der Schlüssel sein, der, durch den alles geschieht, der, den Jesus vielleicht am meisten braucht. Nicht zärtlich, nicht romantisch, sondern in jener Art, die die tragende Rolle sucht, nicht bloß Beifall.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Drei: Bedeutung durch die eine Bindung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Drei (SX3)</strong> braucht Nähe, aber nicht beliebige – sie braucht die entscheidende Position im Herzen des Anderen. Judas verstand sich als Vermittler zwischen dem Spirituellen und dem Weltlichen, zwischen Vision und Macht. Er war intelligent, plante mit, verwaltete, überzeugte. Und doch war in ihm eine Unruhe, ein leises Brennen: Bin ich wirklich unersetzlich?</p>
          <p class="vb-intro">Er hatte gehofft, Jesus würde ihn brauchen – nicht nur im Außen, sondern im Innersten, als Verbündeten, als Spiegel, als rechten Arm einer kommenden Bewegung. Aber Jesus sprach von Umkehr, nicht von Umsturz, von Sanftmut, nicht von Strategie, von Opfer, nicht von Einfluss. Und Judas spürte, wie sich in ihm etwas verwandelte – nicht zu Hass, sondern zu Enttäuschung.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererflügel: Die verzweifelte Suche nach Unersetzlichkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererflügel (w4)</strong> gibt der sexuellen Drei eine tiefe emotionale Intensität, die Bedeutung nicht in vielen Beziehungen, sondern in der einen unverwechselbaren Bindung sucht – und die verzweifelt wird, wenn diese Bindung sich als nicht besitzbar erweist. Wenn ich ihm nicht näherkomme durch Treue, dann vielleicht durch Entscheidung, dachte Judas. Wenn ich ihn nicht bewegen kann durch Loyalität, dann vielleicht durch Druck.</p>
          <p class="vb-intro">Es war keine Rache, sondern eine letzte Hoffnung, ihn aus seiner Rolle zu lösen und zur Handlung zu zwingen. Judas war überzeugt, dass er das Richtige tat – nicht aus Bosheit, sondern aus einem verzerrten Sinn für Dringlichkeit: Ich bringe die Geschichte voran. Diese fast schmerzhafte Verwechslung von Bedeutung mit Kontrolle, von Liebe mit Notwendigkeit, trägt die Handschrift des Viererflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Kuss: Enthüllung statt Beweis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Garten war still, die Nacht nicht ruhig, Fackeln zuckten durch die Zweige. Judas ging voraus, nicht zögernd, sondern wie ein Mann, der einen Plan vollendet. »Der, den ich küssen werde, der ist es.« Ein Zeichen, so zärtlich wie tödlich. Er trat zu Jesus und küsste ihn, mit jener seltsam verzweifelten Intensität, die eine SX3 empfindet, wenn sie Nähe herstellt, um zu beweisen, dass sie bedeutet.</p>
          <p class="vb-intro">Jesus sagte nur: »Freund, dazu bist du gekommen?« Nicht bitter, nicht kalt, nur wie ein Spiegel. Und in diesem Moment brach etwas in Judas. Denn der Kuss war keine Geste mehr, sondern eine Enthüllung – nicht über Jesus, sondern über sich selbst. Er hatte nicht Jesus verraten, er hatte sein eigenes Bild verraten: die Illusion, dass Liebe durch Einfluss, Nähe durch Bedeutung, Wert durch Aktion zu erlangen sei.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Silber: Die Erkenntnis, dass Liebe nicht erzwungen werden kann</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er hielt den Beutel in der Hand, dreißig Silberstücke, kalt, klar, schwerer wiegend als Schuld. Er hatte geglaubt, dies sei der Preis für eine Wende, für eine Wahrheit, die endlich ans Licht muss. Doch Wahrheit lässt sich nicht beschleunigen, und Liebe nicht kaufen. Er ging zu den Hohepriestern, legte das Silber hin: »Ich habe unschuldiges Blut verraten.« Sie sahen ihn an, ohne Erschütterung: »Was geht das uns an? Sieh du zu.«</p>
          <p class="vb-intro">Und in diesem Moment wusste Judas: Er war kein Werkzeug der Gerechtigkeit gewesen, nur ein Mittel zum Zweck. Er hatte Liebe gesucht über Wirkung, über Einfluss, über Kontrolle. Und nun spürte er: Jesus hatte ihn nie benutzt – aber auch nie gebraucht in der Weise, die er sich erträumt hatte. Er hatte ihn geliebt, aber nicht zu dem Preis, den Judas sich vorgestellt hatte. Und die SX3, deren ganzes Selbstbild auf Bedeutung durch Bindung gebaut ist, brach dort zusammen, wo die Bindung nicht trug – nicht weil sie falsch war, sondern weil sie frei war.</p>
        </blockquote>

        <h2 class="vb-section">6. Einordnung ohne Determinismus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Judas ging allein den Weg hinauf, ohne Bühne, ohne Funktion, ohne Verbindung – nur die Nacktheit des Ichs, ohne Maske, ohne Bedeutung. Die SX3 lebt für die Beziehung, die sie einzigartig macht. Als diese Bindung sich als nicht besitzbar entpuppte, verstummte in ihm etwas, das ihn bis dahin getragen hatte: kein »Ich bin geliebt«, kein »Ich werde gebraucht«, kein »Ich bin unersetzlich«. Nur Leere – und darin Verzweiflung, die in Suizid endete.</p>
          <p class="vb-intro">Er starb nicht als Monster, sondern als Mensch, der Liebe mit Bedeutung verwechselte und Wahrheit nicht ertrug, weil sie nicht spiegelte, sondern entkleidete. Wichtig: Nicht jede sexuelle Drei mit Viererflügel verrät oder zerbricht auf diese Weise – dieses Kapitel deutet ein einzelnes, historisch überliefertes Muster, keine zwangsläufige Konsequenz des Subtyps. Jesus sprach nie gegen ihn, auch später nicht, nie mit Hass, nie mit Verdammung – denn er wusste: Judas hatte nicht aus Bosheit gehandelt, sondern aus einem Sehnsuchtsfehler.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Der Kuss</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Judas Iskariot ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/SK724DhEJns?rel=0" title="Der Kuss – Judas Iskariot" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/sx3", label:"SX3 – Der Pfau: Subtyp-Profil"},
        {route:"beruehmte-dieter-bohlen", label:"Portrait: Dieter Bohlen (SX3w4)"},
        {route:"bibel-pontius-pilatus", label:"Bibel-Porträt: Pontius Pilatus (SO3w4)"},
        {route:"bibel-andreas", label:"Bibel-Porträt: Andreas (SE4w5)"},
      ])}
    </div>
  `);
}

function andreasPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-andreas-portrait.jpg" alt="Andreas – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Andreas</p>
        <p class="krim-portrait-typ">SE4w5 · Selbsterhaltender Typ 4 mit Fünferflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Verborgene im innersten Kreis – Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Da führte Andreas Simon, seinen Bruder, zu Jesus.« (Joh 1,42)</p>

        <h2 class="vb-section">1. Die Taube</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Taube</strong> ist das Tier der selbsterhaltenden Vier – still, zurückhaltend, ohne das Bedürfnis, gesehen zu werden, aber mit einer tiefen inneren Wahrnehmung für das, was zwischen den Zeilen geschieht. Andreas war der Erste, der Jesus folgte – nicht der Lauteste, nicht der Fels, aber der Erste. Und doch erinnerte man sich selten daran. Wenn man von den Jüngern sprach, fiel sein Name später, hinter Petrus, Jakobus, Johannes: immer im Hintergrund, nie vergessen, aber auch nie genannt.</p>
          <p class="vb-intro">Das störte ihn nicht – nach außen. Aber in seinem Inneren regte sich etwas: eine stille Melancholie, ein leiser Wunsch, nicht berühmt, aber bedeutend zu sein. Wo sein Bruder Simon sprach, hörte Andreas zu. Wo Simon handelte, überlegte Andreas noch. Er war kein Führer, aber auch kein Mitläufer – er war ein innerer Zeuge, und er lebte von dem, was niemand sah.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Vier: Tiefe statt Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Vier (SE4)</strong> trägt ihre Besonderheit nicht auf der Zunge – sie bewahrt sie im Innern. Sie lebt von der Vorstellung, anders zu sein, nicht besser, nicht schlechter, aber tief, wahr, einzig. Und wenn niemand diese Tiefe erkennt, zieht sie sich zurück, nicht aus Groll, sondern aus Schutz. Andreas stand am Rand der Menge, nicht aus Unsicherheit, sondern aus Gewohnheit. Er war nicht der, der sich vordrängte. Er war der, der beobachtete.</p>
          <p class="vb-intro">Als Johannes der Täufer sprach: »Siehe, das Lamm Gottes«, folgte er nicht aus Impuls, sondern aus einer inneren Bewegung, die viel früher begonnen hatte. Jesus drehte sich um, sah ihn – nicht nur äußerlich, er sah ihn wirklich. »Was sucht ihr?« Andreas antwortete nicht sofort. Wie hätte er es sagen sollen, dass er suchte, was er selbst kaum benennen konnte: ein Zuhause in der Tiefe, ein Erkanntwerden ohne Preisgabe, eine Verbindung ohne Bühne.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Fünferflügel: Beobachten statt sich zeigen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Fünferflügel (w5)</strong> gibt der selbsterhaltenden Vier eine zurückgezogene, beobachtende Qualität – die innere Tiefe wird nicht ausgedrückt, sondern gehütet, und Nähe entsteht nicht durch Auftritt, sondern durch stilles, genaues Wahrnehmen. »Meister, wo wohnst du?« fragte Andreas. Es war mehr als eine Frage nach einem Ort – es war die Bitte: Darf ich wissen, wie du bist? Darf ich bei dir ankommen? Jesus antwortete nicht erklärend, sondern sagte: »Kommt und seht.« Keine Definition, keine Distanz, nur Einladung.</p>
          <p class="vb-intro">Und genau das traf Andreas ins Herz, nicht als Erschütterung, sondern wie eine Tür, die endlich aufging nach Jahren innerer Enge. Die Schrift sagt nicht, was gesprochen wurde – vielleicht war es auch nicht viel. Aber für Andreas war es genug, denn zum ersten Mal fühlte er sich nicht nur aufgenommen, sondern verstanden. Genau dieses stille, unaufdringliche Beobachten, das erst bei absoluter Sicherheit in Nähe übergeht, trägt die Handschrift des Fünferflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Rolle im Kreis: Die Sehnsucht nach Einmaligkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im Kreis der Zwölf war Andreas immer dabei, aber selten im Mittelpunkt. Petrus sprach, Johannes ruhte an Jesu Brust, Jakobus war energisch. Und Andreas hörte zu. Er war nicht übersehen, aber auch nicht benannt. Und in einer SE4 wächst daraus eine leise Spannung: Ich bin hier, aber nicht gemeint. Er hatte keine Eifersucht, aber manchmal diese Frage: Was ist mein Platz?</p>
          <p class="vb-intro">Einmal brachte Andreas einen Jungen mit fünf Broten und zwei Fischen – lächerlich wenig. Aber er brachte ihn trotzdem, nicht weil er an das Wunder glaubte, sondern weil er an das Verborgene glaubte. Das ist SE4: Sie erkennt Wert, wo andere achtlos vorbeigehen. Jesus nahm es, das Kleine, das Unscheinbare, und es reichte für Tausende. Aber niemand sagte: »Danke, Andreas.« Er sagte es sich selbst, leise, nicht aus Stolz, sondern aus einem inneren Wissen: Ich sehe, was zählt, auch wenn es für andere nicht zählt.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Unsichtbarkeit als Gabe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Andreas begann, seine Stellung zu verstehen, nicht als Nachteil, nicht als Strafe, sondern als Ort. Er war der, der Dinge sah, bevor sie ausgesprochen wurden, der Menschen verband, ohne sich dazwischenzustellen, der die Spannungen im Kreis spürte und durch seine bloße Anwesenheit etwas beruhigte, ohne dass es jemand merkte. Manchmal saß er allein am Rand, wenn die anderen schliefen, schaute in den Himmel und dachte nicht an seinen Namen, sondern an seinen Wert.</p>
          <p class="vb-intro">Er hatte gelernt: Man muss nicht im Zentrum stehen, um nah zu sein. Die SE4 ringt ihr Leben lang mit der Frage nach Bedeutung. Aber wenn sie reift, hört sie auf, sie im Außen zu suchen, und beginnt, den Wert in der Tiefe selbst zu tragen. Andreas wurde nicht gefeiert, aber Jesus nannte ihn nie falsch, nie zu viel, nie zu wenig. Er ließ ihn einfach sein.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Bedeutung ohne Applaus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als der Kreis kleiner wurde, die Wege einsamer, die Tage gefährlicher, spürte Andreas: Er war bereit – nicht, weil er laut geworden war, sondern weil er innerlich Wurzeln geschlagen hatte. Und wenn jemand ihn fragte: »Was war dein größter Beitrag?«, dann lächelte er nur, blickte zurück auf den Moment, als er seinen Bruder zu Jesus führte, und sagte leise: »Ich war der Erste, der ihn erkannt hat. Und das reicht.«</p>
          <p class="vb-intro">Das ist das Geschenk der SE4w5: eine Tiefe, die keine Bühne mehr braucht, um wahr zu sein – eine Taube, die nicht mehr beweisen muss, dass sie gesehen wird, weil sie gelernt hat, sich selbst zu sehen.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Im Schatten des Lichts</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Andreas ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/yI-zk3aHGBQ?rel=0" title="Im Schatten des Lichts – Andreas" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/se4", label:"SE4 – Die Taube: Subtyp-Profil"},
        {route:"beruehmte-paul-mccartney", label:"Portrait: Paul McCartney (SE4w5)"},
        {route:"bibel-judas-iskariot", label:"Bibel-Porträt: Judas Iskariot (SX3w4)"},
        {route:"bibel-thomas", label:"Bibel-Porträt: Thomas (SO4w5)"},
      ])}
    </div>
  `);
}

function thomasPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-thomas-portrait.jpg" alt="Thomas – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Thomas</p>
        <p class="krim-portrait-typ">SO4w5 · Sozialer Typ 4 mit Fünferflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Die Sehnsucht nach Wahrheit – Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Wenn ich nicht die Male der Nägel sehe, werde ich nicht glauben.« (Joh 20,25)</p>

        <h2 class="vb-section">1. Das Gürteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Gürteltier</strong> ist das Tier der sozialen Vier – es zieht sich in eine schützende Schale zurück, wenn die Welt zu roh wird, und öffnet sich nur dort, wo es sich wirklich sicher fühlt. Thomas war nicht da, als Jesus kam. Nicht weil er nicht glaubte, sondern weil er anders glaubte. Die anderen hatten ihn gefunden, den Auferstandenen, den Lichtvollen, den Lebenden nach dem Tod. Aber Thomas war draußen gewesen, allein, im Gehen, im Denken, im Ringen.</p>
          <p class="vb-intro">Die soziale Vier glaubt nicht leicht, aber wenn sie glaubt, dann mit allem, was sie ist. Er kam zurück, sah die Gesichter, die veränderte Atmosphäre, und fühlte sich ausgeschlossen. Nicht aus Bosheit, aber: Sie haben erlebt, was mir fehlt. Und das traf ihn tiefer, als er es zeigen konnte. Denn die soziale Vier leidet nicht am Alleinsein – sie leidet daran, nicht dabei gewesen zu sein, wo das Eigentliche geschah.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Nicht dabei gewesen zu sein, wo das Eigentliche geschah</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als sie sagten: »Wir haben den Herrn gesehen!«, antwortete Thomas: »Wenn ich nicht seine Wunden sehe und meine Finger hineinlege, werde ich nicht glauben.« Es klang trotzig. Aber in Wahrheit war es ein Hilfeschrei: Bitte, lasst mich es fühlen. Nicht hören, nicht wiederholen, sondern selbst durchleben. Denn soziale Vierer glauben nicht, was andere bezeugen – sie glauben, was sie in sich selbst spüren.</p>
          <p class="vb-intro">Acht Tage lang schwieg Thomas, hörte sich die anderen an, wie ihre Stimmen zitterten vor Freude, vor Staunen, vor etwas, das er nicht hatte: Erfahrung. Und in ihm loderte etwas auf, nicht Neid, sondern Entbehrung. Warum war ich nicht da? Soziale Vierer leben von Verbindung. Doch ihre tiefste Angst ist, dass diese Verbindung nicht für sie bestimmt ist – dass sie sehen, aber nicht gesehen werden.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Fünferflügel: Rückzug in die eigene Schale</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Fünferflügel (w5)</strong> gibt der sozialen Vier eine zurückgezogene, grüblerische Qualität – sie zieht sich zurück statt sich mitzuteilen, prüft innerlich, statt vorschnell zu glauben, und braucht direktes eigenes Erleben, bevor sie einer Erzählung vertraut. Er war geblieben, hatte sich nicht zurückgezogen, war nicht gegangen. Denn trotz allem war da etwas in ihm, das hoffte, dass Wahrheit ihn finden würde.</p>
          <p class="vb-intro">Und dann kam Jesus, nicht mit Posaunen, nicht mit Tadel, einfach so, mitten im Raum, mitten im Moment. Und bevor jemand sprechen konnte, wandte sich Jesus direkt an Thomas: »Streck deinen Finger aus, sieh meine Hände. Streck deine Hand aus, leg sie in meine Seite. Sei nicht ungläubig, sondern gläubig.« Jesus wusste, nicht vom Hörensagen, nicht durch Erzählung, was Thomas gesagt hatte, als er nicht da war. Genau dieses stille, prüfende Zurückhalten, das nur dann weicht, wenn wirkliche, direkte Erkenntnis möglich wird, trägt die Handschrift des Fünferflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Gesehenwerden in der Tiefe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Thomas stieg nicht gleich auf. Er prüfte nichts. Er tastete nicht. Denn in dem Moment, in dem Jesus ihn wirklich ansah, war alle Trennung überwunden. Und Thomas sagte nur: »Mein Herr und mein Gott!« Nicht aus Beweis, nicht aus Pflicht, sondern aus dem Innersten seines Seins, das endlich gespiegelt wurde. Soziale Vierer brauchen keine Bühne, aber sie sehnen sich danach, dass ihr Innerstes erkannt wird, auch wenn sie es verborgen halten.</p>
          <p class="vb-intro">Thomas hatte Jesus nicht festgehalten. Doch jetzt wurde er gehalten, von einem Blick, der mehr sagte als Worte. Und Jesus, dessen Liebe nie bloß bestätigt, sondern verwandelt, sagte: »Selig sind, die nicht sehen und doch glauben.« Nicht als Tadel, sondern als Einladung, dass Thomas nicht nur fühlen darf, sondern lernen kann, zu vertrauen, auch wenn die Tiefe einmal still bleibt.</p>
        </blockquote>

        <h2 class="vb-section">5. Die innere Wandlung: Meine Tiefe braucht Weite</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Thomas blieb, auch nach der Auferstehung, auch nach Pfingsten, auch nach dem Aufbruch der anderen. Doch in ihm hatte sich etwas verändert, nicht laut, nicht sichtbar, aber grundlegend. Die soziale Vier ringt mit dem Gefühl: Ich bin nicht gemeint. Doch wenn sie erkennt, dass sie zutiefst gesehen wird, entsteht eine stille, tiefe Kraft. Und Thomas hatte gespürt: Ich wurde erkannt, nicht in meinem Glanz, sondern in meinem Ringen.</p>
          <p class="vb-intro">Er war nicht der Prediger wie Petrus, nicht der Mystiker wie Johannes, nicht der Organisator wie Jakobus. Aber er war bereit, zu gehen, wohin ihn niemand sonst schickte. Denn das Herz der SO4 ruft nicht nach Ruhm, es ruft nach Sinn, nach Einmaligkeit und nach einer Geschichte, die nur sie selbst schreiben kann. Und so brach Thomas auf, nicht gen Westen, wo die Straßen bekannter waren, sondern gen Osten, nach Syrien, nach Parthien, bis nach Indien, sagt die Überlieferung. Nicht aus Trotz, sondern weil er spürte: Meine Tiefe braucht Weite.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Innere Stimmigkeit statt Applaus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dort heilte er Kranke, sprach zu Fremden, gründete Gemeinschaften, die ihn nicht kannten, aber seine Echtheit fühlten. Und manchmal, nachts, wenn er allein war, legte er seine Hand an sein Herz und erinnerte sich an jenen einen Blick Jesu. Nicht, weil er zweifelte, sondern weil er spürte: Das war der Anfang. Am Ende starb er als Märtyrer, in einem fremden Land, fern der Heimat, aber mitten in seinem Ruf. Nicht gefeiert, nicht umringt, aber vollendet.</p>
          <p class="vb-intro">Denn die soziale Vier endet nicht in Applaus, sondern in innerer Stimmigkeit. Und Thomas hatte sie gefunden. Das ist das Geschenk der SO4w5: eine Wahrhaftigkeit, die sich nicht mit gehörten Wahrheiten begnügt, sondern selbst durchlebt sein will – ein Gürteltier, das seine Schale erst öffnet, wenn wirkliche Begegnung möglich wird, und das dann ganz und ohne Vorbehalt glaubt.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Bis ich ihn sehe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Thomas ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/1WerclI4m18?rel=0" title="Bis ich ihn sehe – Thomas" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/so4", label:"SO4 – Das Gürteltier: Subtyp-Profil"},
        {route:"beruehmte-leonard-cohen", label:"Portrait: Leonard Cohen (SO4w5)"},
        {route:"bibel-andreas", label:"Bibel-Porträt: Andreas (SE4w5)"},
        {route:"bibel-judas-thaddaeus", label:"Bibel-Porträt: Judas Thaddäus (SX4w5)"},
      ])}
    </div>
  `);
}

function judasThaddaeusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-judas-thaddaeus-portrait.jpg" alt="Judas Thaddäus – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Judas Thaddäus</p>
        <p class="krim-portrait-typ">SX4w5 · Sexueller Typ 4 mit Fünferflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Wunsch, ganz erwählt zu sein – Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Herr, wie kommt es, dass du dich uns offenbaren willst – und nicht der Welt?« (Joh 14,22)</p>

        <h2 class="vb-section">1. Der Chihuahua</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist das Tier der sexuellen Vier – klein an äußerer Erscheinung, aber voller Intensität, mit einem Herzen, das nichts halb liebt und alles auf die eine, exklusive Bindung setzt. Judas Thaddäus war einer von Zwölf, doch man sprach selten von ihm. Wenn sein Name fiel, dann nur zur Abgrenzung: nicht Judas Iskariot, der andere Judas. Als sei er eine Randnotiz, ein Echo, ein Schatten eines Namens, der später Last und Scham tragen würde.</p>
          <p class="vb-intro">Doch Judas Thaddäus war nicht leer, nicht nebensächlich. Er war voll – voll Sehnsucht, voll Feuer, voll Fragen, voll Hunger nach tiefer, echter Verbindung. Er war kein Mann der Masse. Er suchte Nähe, aber gewählte Nähe – kein Mitlaufen, sondern Verbundenheit, die auf Gegenseitigkeit beruhte. In der Seele der SX4 lebt ein Satz: Ich will nicht einer von vielen sein, ich will der Eine sein.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Die Sehnsucht, gemeint zu sein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Judas Thaddäus war oft still, aber wachsam. Er beobachtete, lauschte auf Nuancen in Jesu Stimme, auf kleine Regungen in dessen Gesicht. Er hoffte, er sah mehr als die anderen. Und manchmal, wenn Jesus ihm zufällig zugewandt war, verweilte sein Blick einen Atemzug länger als nötig. Und in diesem Moment blühte etwas in ihm auf: Vielleicht bin ich doch der Eine. Vielleicht erkennt er, was in mir ist.</p>
          <p class="vb-intro">Doch dann wandte Jesus sich wieder ab, sprach mit Petrus, lächelte mit Johannes, hielt Zwiesprache mit Jakobus. Und Judas Thaddäus spürte: Das Licht traf ihn nicht lange, nicht oft, nicht sichtbar. Er war nicht eifersüchtig, aber hungrig. Nicht neidisch, aber sehnsüchtig. Und in ihm wuchs ein Gefühl, das SX4er gut kennen: Ich bin tief, aber niemand sieht es. Ich liebe, aber niemand erwidert es so. Ich bin treu, aber nicht gewählt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Fünferflügel: Stilles Beobachten statt lauten Verlangens</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Fünferflügel (w5)</strong> gibt der sexuellen Vier eine zurückgezogene, aufmerksame Qualität – die brennende Sehnsucht wird nicht laut hinausgetragen, sondern im Innern beobachtet, gedeutet, gehütet. Die Nacht war warm, das Mahl fast vorbei, die Luft schwer von Erwartung. Jesus hatte von Abschied gesprochen, von Aufbruch, von einem Weg, den keiner verstand. Nur Judas Thaddäus konnte es nicht mehr halten, denn die SX4 kann viel tragen, aber nicht die Dunkelheit des Ungeklärten.</p>
          <p class="vb-intro">Er beugte sich vor, nicht trotzig, nicht laut, aber voller innerer Dringlichkeit: »Herr, wie kommt es, dass du dich uns offenbaren willst und nicht der Welt?« Es war keine theologische Frage, es war eine seelische: Warum wir? Warum ich? Was macht mich gemeint, und nicht die anderen? Genau dieses lange innere Beobachten und Abwägen, bevor sich die Sehnsucht endlich in einem einzigen, präzisen Satz entlädt, trägt die Handschrift des Fünferflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Antwort: Gesehen jenseits der Rolle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jesus blickte ihn an, lang, ohne Urteil, ohne sofort zu antworten. Und in diesem Blick geschah etwas, was keine Antwort erklären konnte. Er sah ihn nicht als Rolle, nicht als Nummer unter Zwölf, sondern als einziges Herz, das fragte: Siehst du mich, oder nur uns? Jesus sprach dann von Liebe, von Offenbarung, von einem Kommen und Bleiben – aber nicht mehr an die Menge, sondern an ihn.</p>
          <p class="vb-intro">»Wenn jemand mich liebt, wird er mein Wort halten, und mein Vater wird ihn lieben, und wir werden zu ihm kommen und Wohnung bei ihm nehmen.« Eine Antwort, die nicht über den Kopf ging, sondern direkt ins Innerste traf. Judas Thaddäus sagte nichts mehr, denn er hatte gespürt: Er war gemeint gewesen, ganz, ohne Abstrich, ohne Verwechslung. Und das reicht einer SX4 für lange Zeit: ein Moment, in dem sie sich gesehen, gespiegelt, geliebt weiß, nicht wegen ihrer Stärke, sondern wegen ihrer Wunde.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Leerstelle im Namen: Der Wunsch, dennoch unvergessen zu sein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nach diesem Abend sprach Judas Thaddäus kaum noch. Sein Herz war still geworden, aber nicht stumm – eher wie ein Licht, das nicht mehr flackerte, sondern glimmte, konstant, ruhig, tief. Und doch blieb etwas offen: sein Name, oder besser, das, was mit ihm nicht geschah. Er heilte nicht öffentlich, predigte nicht vor Tausenden, schrieb kein Evangelium, gründete keine große Gemeinde. In den Überlieferungen tauchte er auf am Rand, manchmal sogar verwechselt: War er nun Lebbäus? Oder Judas, Sohn des Jakobus?</p>
          <p class="vb-intro">Die SX4 leidet nicht am Unsichtbarsein, sondern daran, verwechselt zu werden. Sie will nicht prominent sein, sondern einzig. In seinem Innersten brannte ein Gedanke: Was, wenn ich verschwinde? Was, wenn niemand erinnert, wer ich war, obwohl ich alles gefühlt habe? Aber genau darin lag seine Reifung: Er erkannte, dass Jesus nicht nach Wirkung maß, sondern nach Wahrhaftigkeit – und dass ein Blick, eine Frage, eine treue Nähe mehr sagen konnte als zehn Predigten.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Der Sprecher der leisen Sehnsucht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Man erzählte später, dass Judas Thaddäus bis weit in den Osten ging, nach Mesopotamien, Armenien, Persien – weit weg von Jerusalem, von den Wegen der anderen, wie ein Strom, der sich in die Tiefe vergräbt, nicht sichtbar, aber lebendig. Die SX4 sucht nicht das Zentrum der Bühne, sondern die authentische Spur. Er starb, sagt man, mit Simon dem Kananäer den Märtyrertod, ohne Spektakel, ohne aufgeschriebenes letztes Wort. Aber sein Name lebt weiter, nicht als Held, sondern als Zeuge der Sehnsucht.</p>
          <p class="vb-intro">Die katholische Tradition nennt ihn den Patron der Ausweglosen – vielleicht, weil er selbst wusste, wie sich ein Herz anfühlt, das sich nicht gesehen, nicht gemeint, nicht erinnert fühlt, und weil er einer war, der trotzdem liebte, ohne Sicherheit, ohne Beweis, ohne Garantien. Das ist das Geschenk der SX4w5: eine Intensität, die sich still beobachtend hütet, bis sie einmal, in einem einzigen genauen Satz, ihre ganze Tiefe zeigt – ein Chihuahua, dessen ganzes Herz in einem einzigen, geteilten Blick Erfüllung findet.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Warum nicht der Welt?</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Judas Thaddäus ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/12JIwPNwZN4?rel=0" title="Warum nicht der Welt? – Judas Thaddäus" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/sx4", label:"SX4 – Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-dante-alighieri", label:"Portrait: Dante Alighieri (SX4w5)"},
        {route:"bibel-thomas", label:"Bibel-Porträt: Thomas (SO4w5)"},
        {route:"bibel-nikodemus", label:"Bibel-Porträt: Nikodemus (SE5w6)"},
      ])}
    </div>
  `);
}

function nikodemusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-nikodemus-portrait.jpg" alt="Nikodemus – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nikodemus</p>
        <p class="krim-portrait-typ">SE5w6 · Selbsterhaltender Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Die Suche nach Erkenntnis im Schutz der Nacht – Tierentsprechung: Eule</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Tierentsprechung: Eule" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Er kam bei Nacht.« (Joh 3,2)</p>

        <h2 class="vb-section">1. Die Eule</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Eule</strong> ist das Tier der selbsterhaltenden Fünf – sie beobachtet aus der Deckung, sammelt Wissen im Verborgenen und wagt sich erst dann ins Offene, wenn sie ganz sicher ist. Nikodemus wusste viel. Er war Schriftgelehrter, ein Pharisäer, ein Mitglied des Hohen Rates – ein Mann, der Sicherheit fand in Struktur, Überlieferung, Ordnung. Ein Denker, ein Bewahrer, ein Abwäger.</p>
          <p class="vb-intro">Die SE5 vertraut dem, was sie verstehen kann. Sie fühlt sich sicher, wenn sie nicht überflutet wird, sondern Zugang behält, geistig wie emotional. Und Jesus war für Nikodemus ein Rätsel, ein Unruhepol im System – aber kein Feind, vielmehr eine Art offenes Fenster in einem streng gebauten Haus. Doch Nikodemus wagte es nicht, ihn offen zu besuchen. Zu viele Augen, zu viele Fragen, zu wenig Kontrolle. Er kam bei Nacht – nicht aus Feigheit, aus Selbstschutz.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Fünf: Sicherheit in geistiger Klarheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er trat ein, schritt leise, begrüßte Jesus nicht als Gegner, sondern sagte: »Meister, wir wissen: Du bist ein Lehrer, von Gott gekommen.« Ein Satz, vorsichtig formuliert, und doch ein erstes Öffnen. Nicht das System sprach hier, sondern der Mensch hinter dem System. Jesus antwortete nicht mit Bestätigung, sondern entgegnete: »Wenn jemand nicht von Neuem geboren wird, kann er das Reich Gottes nicht sehen.« Und damit traf er die SE5 genau an ihrem Nerv: an der Grenze zwischen Wissen und Nicht-Wissen, zwischen Kontrolle und Hingabe.</p>
          <p class="vb-intro">Nikodemus fragte weiter, nicht ironisch, sondern wirklich fragend: »Wie kann ein Mensch geboren werden, wenn er alt ist?« Diese Frage war mehr als biologisch, sie war existentiell. Die selbsterhaltende Fünf sucht nach Sicherheit, nicht im Materiellen, sondern in der geistigen Klarheit. Und was Jesus sagte, entsprach keiner seiner bisherigen Kategorien.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Sicherheit im System, bevor sie es infrage stellt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der selbsterhaltenden Fünf eine loyale, systemverankerte Qualität – Sicherheit entsteht zuerst durch Zugehörigkeit zu einer verlässlichen Ordnung, und erst nach sorgfältigem, oft jahrelangem Abwägen wird diese Ordnung vorsichtig infrage gestellt. »Wenn jemand nicht aus Wasser und Geist geboren wird, kann er nicht in das Reich Gottes kommen.« Wasser kannte Nikodemus, Gesetz kannte er, Reinheitsvorschriften, Opferordnungen, die Thora. Aber Geist? Geist war nicht greifbar, nicht speicherbar, nicht steuerbar.</p>
          <p class="vb-intro">Nikodemus spürte, dass Jesus ihm ein Angebot machte, kein System, sondern eine Wirklichkeit, die sich nur durch Hingabe erschloss. Aber das war gefährlich, denn für eine SE5 bedeutete das: Ich verliere Kontrolle, ich betrete Räume, in denen mein Denken nicht reicht. Er rang, im Stillen, wie in einer inneren Wüste. Er sagte schließlich: »Wie kann das geschehen?« Kein Rückzug, keine Abwehr, sondern ein Geständnis, ein erstes, tastendes Öffnen. Genau dieses vorsichtige, an bestehenden Kategorien geprüfte Ringen, bevor Vertrauen wachsen darf, trägt die Handschrift des Sechserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Rückzug ins Verborgene: Das stille Wachsen einer Entscheidung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nach jener Nacht verschwand Nikodemus aus dem Blickfeld der Öffentlichkeit. Keine weiteren Gespräche mit Jesus sind überliefert. Aber das war nur die Oberfläche, denn so handelt eine SE5: Sie zieht sich zurück, nicht aus Feigheit, sondern um in der Tiefe zu verarbeiten, was die Oberfläche nicht fassen kann. Nikodemus lebte weiter im Tempelkreis, beobachtete, lauschte, machte Notizen im Inneren seines Denkens. Was er hatte, war ein Nachklang, ein Satz, der nicht mehr aus seinem Innern wich: »Wenn jemand nicht von Neuem geboren wird…« Dieser Satz arbeitete in ihm, nicht wie ein Hammerschlag, sondern wie tropfendes Wasser, das langsam Gestein formt.</p>
          <p class="vb-intro">Als Jesus später im Hohen Rat zur Sprache kam, wagte er, vorsichtig, aber deutlich, zu widersprechen: »Richtet denn unser Gesetz einen Menschen, bevor man ihn verhört und erkannt hat, was er tut?« Ein kleiner Satz, aber in jenem Kreis ein Wagnis. Denn wo andere schrien, fragte Nikodemus. Und wer fragt, der stellt infrage. In ihm wuchs eine Entscheidung, still, aber unumkehrbar: Vielleicht bin ich nicht geboren, um alles zu wissen. Vielleicht bin ich geboren, um das Wahre zu empfangen.</p>
        </blockquote>

        <h2 class="vb-section">5. Am Kreuz: Das leise Erkennen, dass Leben stärker ist als Denken</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nikodemus hatte nie gesagt: »Ich folge ihm.« Er hatte nie die Netze zurückgelassen, nie öffentlich gepredigt. Aber als Jesus starb, war er da – nicht aus Impuls, nicht aus Strategie, sondern aus einer gewachsenen Gewissheit, die sich in der Stille gereift hatte. Mit Josef von Arimathäa, einem Mann ähnlich zurückhaltend, bat er um den Leichnam. Und das war nicht harmlos, denn in diesem Moment machte sich Nikodemus sichtbar: Jetzt bin ich nicht mehr nur Fragender. Jetzt handle ich, auch ohne vollständige Antwort.</p>
          <p class="vb-intro">Er brachte Myrrhe und Aloe, etwa hundert Pfund, viel zu viel, kostbar, zärtlich, üppig – eine Tat, wie sie eine SE5 nur selten tut, aber wenn, dann mit ganzem Herzen: sich verausgaben für das, was wahr geworden ist. Er salbte den toten Körper, wusch ihn, wickelte ihn in Leinentücher, nicht als Ritual, sondern als Zeichen: Ich habe erkannt, was ich nicht mehr erklären muss. Ich ehre das, was mich verwandelt hat. Und während andere Jünger flohen, sich versteckten, war Nikodemus anwesend, nicht als Prophet, sondern als Zeuge der Tiefe.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Unsichtbar werden, aber nicht unbedeutend</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nikodemus verschwand aus den Berichten. Keine weiteren Erwähnungen, kein Nachspiel, kein Martyrium, kein Grab, kein Evangelium mit seinem Namen. Nur Stille. Aber in dieser Stille lag kein Verschwinden, sondern eine Form von Vollendung, die typisch ist für die SE5: unsichtbar werden, aber nicht unbedeutend. Er musste niemanden mehr überzeugen, er musste sich nicht mehr erklären. Er hatte erkannt, was er einst nicht greifen konnte: dass Wahrheit nicht in Begriffe passt, dass Liebe keine Theorie braucht, und dass Leben mehr ist als das, was sich kontrollieren lässt.</p>
          <p class="vb-intro">Das ist das Geschenk der SE5w6: eine Klarheit, die nicht mehr auf äußere Bestätigung durch das System angewiesen ist, sondern aus innerer Gewissheit trägt – eine Eule, die endlich weiß, dass ihr Wissen nicht ausreicht, um alles zu erklären, und die genau darin frei wird.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Bei Nacht zu ihm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Nikodemus ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/T65cXVpkx9Y?rel=0" title="Bei Nacht zu ihm – Nikodemus" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/se5", label:"SE5 – Die Eule: Subtyp-Profil"},
        {route:"beruehmte-warren-buffett", label:"Portrait: Warren Buffett (SE5w6)"},
        {route:"bibel-judas-thaddaeus", label:"Bibel-Porträt: Judas Thaddäus (SX4w5)"},
        {route:"bibel-gamaliel", label:"Bibel-Porträt: Gamaliel (SO5w6)"},
      ])}
    </div>
  `);
}

function gamalielPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-gamaliel-portrait.jpg" alt="Gamaliel – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gamaliel</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Hüter des Gleichgewichts – Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Lasst ab von diesen Menschen und lasst sie gehen! Denn ist dieses Vorhaben aus Menschen, so wird's untergehen; ist's aber aus Gott, so könnt ihr's nicht aufhalten.« (Apg 5,38–39)</p>

        <h2 class="vb-section">1. Der Oktopus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier der sozialen Fünf – er überblickt sein Umfeld mit ruhiger, vielarmiger Aufmerksamkeit, verarbeitet unzählige Eindrücke gleichzeitig und greift erst ein, wenn er das Muster wirklich verstanden hat. Gamaliel saß nicht vorne. Er saß etwas erhöht, aber nicht, um sich zu erheben, sondern um zu überblicken. Der Saal des Hohen Rates war voll, Stimmen erhoben sich, Empörung, Argumente, Theologie, Angst.</p>
          <p class="vb-intro">Gamaliel hörte zu, mehr als er sprach, wie immer. Die soziale Fünf liebt Strukturen, aber nur, wenn sie nicht blind angewendet, sondern durchdacht, geprüft und angepasst werden. Er sah nicht nur die Worte, er sah Muster, Entwicklungen, Möglichkeiten – und Gefahren, vor allem die der Überreaktion.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Fünf: Wissen, das dem größeren Ganzen dient</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er hob die Hand, nicht dramatisch, nicht fordernd, aber mit jener ruhigen Autorität, die entsteht, wenn jemand innerlich klar ist: »Männer von Israel, gebt Acht auf euch…« Und dann erinnerte er an Theudas, an Judas den Galiläer, an Bewegungen, die kamen und vergingen. Seine Botschaft war keine Mystik, keine Bekehrung, sondern: Lasst die Dinge sich zeigen. Denn Gamaliel wusste: Was Bestand hat, braucht keine Hast, und was eilt, verliert oft die Wahrheit.</p>
          <p class="vb-intro">Die soziale Fünf denkt nicht fürs Jetzt, sie denkt für die Geschichte. Sie handelt nicht reaktiv, sondern verantwortlich. Und als er geendet hatte, war der Saal stiller – nicht überzeugt, aber gedämpft, nicht einig, aber zurückgeholt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Prinzip über Instinkt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der sozialen Fünf eine verlässliche, prinzipientreue Qualität – Autorität entsteht nicht aus Charisma, sondern aus konsequenter Bindung an ein durchdachtes Regelwerk, das über persönlicher Neigung und Parteizugehörigkeit steht. Gamaliel hatte sich längst daran gewöhnt, zwischen Fronten zu stehen, nicht weil er gefallen wollte, sondern weil er wusste: Wahrheit hat oft mehr Feinde als Lüge, weil sie sich nicht instrumentalisieren lässt.</p>
          <p class="vb-intro">In ihm war keine Eile, keine Erregung, keine Parteinahme aus Instinkt. Was ihn bewegte, war die Frage: Was bleibt, wenn alles Reaktive verstummt? Gamaliel war ein Mann der Prinzipien, nicht der Interessen. Für die SO5 steht das Prinzip über dem Gefühl, das Maß über der Angst, die Einsicht über die Loyalität. Darum konnte er sagen: »Ist es aus Gott, so könnt ihr es nicht aufhalten.« Das war keine Frömmigkeit, es war intellektuelle Demut. Genau diese unverrückbare Bindung an ein Prinzip, das größer ist als die eigene Meinung, trägt die Handschrift des Sechserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Paulus: Loslassen, was man nicht besitzen kann</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Gamaliel hatte viele Schüler, doch einer blieb in Erinnerung: Saulus von Tarsus. Klug, scharfsinnig, ehrgeizig, ein Geist, der in Systemen dachte, aber durch Leidenschaft getrieben war. Gamaliel sah das und ließ es zu, denn eine soziale Fünf formt nicht durch Zwang, sondern durch Rahmen, durch Klarheit, durch Vertrauen in das, was wachsen will. Er versuchte nie, Paulus zu behalten, drängte ihm nichts auf, ließ ihn lernen und sich entwickeln, auch dann, als er ihn später nicht mehr verstand.</p>
          <p class="vb-intro">Denn der Saulus, den er unterwiesen hatte, wurde zu Paulus, dem Völkerapostel. Für viele im Rat war Paulus ein Verräter. Für Gamaliel war er: ein Mensch auf seinem Weg. Die soziale Fünf kann loslassen, wenn sie erkennt, dass Wahrheit vielfältiger ist als das System, das sie ordnet. Sie sucht nicht Besitz, sondern Bedeutung. Er forderte nie Anerkennung, nie Rückkehr, nie Richtigstellung. Er schwieg. Und damit bewahrte er: Würde.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Gerechtigkeit derer, die nicht herrschen müssen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Gamaliel war nie der Lauteste, nie der Mächtigste. Und doch hörte man auf ihn, nicht aus Furcht, sondern aus Respekt, denn seine Autorität entsprang nicht dem Amt, sondern der Haltung. Er sprach nie für das, was gerade günstig war, verteidigte nicht das, was ihm nützte. Die soziale Fünf bleibt dem verpflichtet, was sie durchdacht hat, auch wenn es unpopulär ist, auch wenn sie dafür allein steht.</p>
          <p class="vb-intro">»Lasst uns abwarten, lasst uns prüfen, lasst uns Gott Raum lassen.« Das war keine Ausflucht, es war Mut, der Mut zur Zurückhaltung in einer Zeit der Reizbarkeit. Gamaliel war ein Gerechter, weil er nicht Recht behalten wollte. Er wollte, dass das Rechte geschehe, auch wenn es ohne ihn geschah. Das war seine Reinheit, seine Freiheit, sein Dienst ohne Ego.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Wirksam auch im Schweigen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Später sprachen andere, debattierten, verurteilten. Gamaliel war still geworden, nicht weil er nichts mehr zu sagen hatte, sondern weil er verstanden hatte, dass Worte nur dann Kraft haben, wenn sie nicht zu oft, zu laut, zu früh kommen. Die soziale Fünf lebt auch dann wirksam, wenn sie nicht mehr eingreift. Ihre Klarheit formt durch Erinnerung, durch Haltung, durch ein Maß, das bleibt, auch wenn sie selbst nicht mehr spricht.</p>
          <p class="vb-intro">Er ging vermutlich still aus dem Leben, kein Märtyrertod, kein Streit, kein letzter Satz, der überliefert wurde. Aber sein Wirken blieb, wie ein ruhiger Ton, der in einer aufgeregten Symphonie nachklingt. Das ist das Geschenk der SO5w6: eine Weisheit, die nicht nach Anerkennung verlangt, um wirksam zu sein – ein Oktopus, der weiß, dass echte Autorität nicht darin liegt, immer zu sprechen, sondern darin, das Richtige geschehen zu lassen, auch ohne sich selbst.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Wenn es von Gott ist</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Gamaliel ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/MaAgqDEujDI?rel=0" title="Wenn es von Gott ist – Gamaliel" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/so5", label:"SO5 – Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-isaac-newton", label:"Portrait: Isaac Newton (SO5w6)"},
        {route:"bibel-nikodemus", label:"Bibel-Porträt: Nikodemus (SE5w6)"},
        {route:"bibel-der-mann-von-gerasa", label:"Bibel-Porträt: Der Mann von Gerasa (SX5w4)"},
      ])}
    </div>
  `);
}

function derMannVonGerasaPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-der-mann-von-gerasa-portrait.jpg" alt="Der Mann von Gerasa – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Der Mann von Gerasa</p>
        <p class="krim-portrait-typ">SX5w4 · Sexueller Typ 5 mit Viererflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Das Ich in der Zersplitterung – Tierentsprechung: Igel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Tierentsprechung: Igel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Wie heißt du?« Er antwortete: »Legion – denn wir sind viele.« (Mk 5,9)</p>

        <div class="vb-hinweis-box" style="background:rgba(139,94,60,0.08);border:1px solid rgba(139,94,60,0.25);border-radius:10px;padding:1rem 1.2rem;margin:1rem 0 1.5rem;font-size:0.92rem;line-height:1.6;">
          <strong>Hinweis:</strong> Dieses Kapitel deutet die biblische Erzählung vom Besessenen von Gerasa literarisch-typologisch als Bild extremer innerer Zersplitterung nach Subtyp – nicht als klinische Diagnose. Die Erzählung erwähnt Selbstverletzung (»zerschnitt sich mit Steinen«); dies wird hier nicht ausgeschmückt, sondern nur im historischen Kontext benannt. Wer selbst betroffen ist: Die Telefonseelsorge ist unter 0800 111 0 111 kostenlos und rund um die Uhr erreichbar.
        </div>

        <h2 class="vb-section">1. Der Igel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Igel</strong> ist das Tier der sexuellen Fünf – er rollt sich bei Bedrohung vollständig ein, schützt sein empfindsames Inneres mit Stacheln nach außen, und öffnet sich nur, wenn absolute Sicherheit gewiss ist. Er lebte zwischen den Gräbern, dort, wo niemand wohnen will, dort, wo man vergisst, dort, wo nichts mehr heilt, aber auch nichts mehr stört. Er war nicht mehr »jemand«. Er war viele – ein Zersplittern von Stimme, Wille, Gesicht. Sein Name? Vergessen, verloren. »Legion«, sagte er, als Jesus ihn fragte, »denn wir sind viele.«</p>
          <p class="vb-intro">Die SX5 ringt mit Identität in der Intensität. Sie spürt so viel, dass sie sich schützt, indem sie sich zurückzieht, oft bis zur Unkenntlichkeit. Sie lässt niemanden nahe, weil sie spürt: Nähe könnte mich zerstören. Aber sie will gleichzeitig genau das: gesehen werden, ganz, durchdrungen, erkannt trotz aller Masken.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Fünf: Zurückgezogen, um sich zu halten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was ihn zerriss, kam nicht von außen. Es war in ihm. Und dann kam Jesus, trat nicht laut auf, rief nicht nach Aufmerksamkeit, kam einfach an das Ufer, und das genügte. Denn der Gerasener spürte ihn, noch bevor er ihn sah. Er rannte, nicht aus Zorn, nicht aus Wut, sondern aus etwas Tieferem: einer verzweifelten Hoffnung, dass jemand stark genug sein könnte, ihn ganz zu halten.</p>
          <p class="vb-intro">Jesus trat ihm entgegen, nicht mit Wucht, nicht mit Drohung, sondern mit einer stillen Präsenz, die stärker war als jedes Seil, jede Kette, jede Flucht. Der Mann warf sich vor ihn, zitternd, aber nicht aus Hass, sondern aus Überforderung. Denn die SX5 hat oft Angst vor Nähe, weil sie weiß, wie tief sie fallen könnte, wenn sie sich je wirklich zeigt. Er brüllte: »Was habe ich mit dir zu schaffen, Jesus, Sohn des höchsten Gottes? Quäle mich nicht!« Es war kein Widerstand, es war ein Hilferuf in der Sprache der Abwehr.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererflügel: Die Sehnsucht nach dem einen wahren Ich</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererflügel (w4)</strong> gibt der sexuellen Fünf eine existenzielle, identitätssuchende Tiefe – die Zersplitterung ist nicht nur Schutzmechanismus, sondern eine tiefe, fast dramatische Frage nach dem, wer man eigentlich ist, jenseits aller Masken. Die SX5 schreit oft nach Grenze, weil sie sich selbst nicht mehr halten kann. Sie wünscht sich Erlösung, aber in einem Tempo, das sie nicht vernichtet. Jesus antwortete nicht mit einer Formel, nicht mit Gewalt. Er fragte: »Wie heißt du?«</p>
          <p class="vb-intro">Es war eine Einladung, eine Brücke, ein Akt der Würdigung. Und das Fragment in diesem Mann, das sich noch erinnern konnte, antwortete: »Legion.« Doch dieser Name war nicht wahr, er war ein Schild, ein System der Abwehr. Jesus wusste: Dieser Mensch braucht nicht nur Reinigung, er braucht Wieder-Zusammenführung. Genau dieses existenzielle Ringen um das eine, wahre Selbst hinter der Zersplitterung, das sich nicht mit bloßer Distanz begnügt, trägt die Handschrift des Viererflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Das erste Ich: Der Blick, der endlich bleibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als der Staub sich legte, war Stille, zum ersten Mal seit Jahren. Keine Stimmen, keine innere Schlacht, nur Atem, nur Haut, nur Erde, nur Jetzt. Man brachte ihm Kleidung, nicht als Geste der Anständigkeit, sondern als Akt der Wiederaufnahme ins Leben. Die SX5 kennt das Gefühl, ein Geist ohne Hülle zu sein. Sie weiß, wie es ist, sich in Fragmenten zu verlieren, und wie tief das Verlangen ist, endlich gehalten zu werden, nicht durch Argumente, sondern durch Anwesenheit.</p>
          <p class="vb-intro">Er setzte sich zu Jesu Füßen, nicht unterwürfig, nicht verzweifelt, sondern still, und sah ihn an. Nicht mit Misstrauen, nicht mit Gier, nicht mit Flucht, sondern mit Blick. Zum ersten Mal blickte er, ohne zu prüfen, ohne zu fliehen, ohne sich zu verbergen. Es war kein intensiver Ausdruck, keine dramatische Geste, sondern einfach: Gegenwärtigkeit. Der Gerasener sprach nur wenig, aber jeder Atemzug sagte: Ich bin. Ich bin wieder da.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Wunsch, zu bleiben: Die Einladung, zu gehen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er wollte bei ihm bleiben, bei dem, der ihn wieder zusammengesetzt hatte, nicht aus Abhängigkeit, nicht aus Angst, sondern aus einer tiefen Wahrheit: Du hast mich gesehen, ganz, nicht wer ich sein sollte, nicht was mich zerstörte, sondern mich. Die SX5 bindet sich nicht leicht, doch wenn sie sich bindet, dann absolut. Und so bat er: »Lass mich mit dir gehen.« Doch Jesus sagte Nein, nicht aus Ablehnung, sondern aus Liebe zur Eigenständigkeit: »Geh heim zu deinen Leuten und berichte ihnen, was der Herr dir Gutes getan hat.«</p>
          <p class="vb-intro">Jesus wollte keine Nachahmung, keine Anhaftung, keine Flucht in eine neue Abhängigkeit. Er wollte, dass dieser Mann nicht nur heil, sondern frei wurde. Es war ein Schmerz, ein Riss, wieder einmal – aber diesmal war der Riss nicht zerstörend, sondern Reifung. Die SX5 lernt nur langsam, dass sie bestehen kann, auch außerhalb der Tiefe, dass sie geben darf, was sie selbst durchlebt hat.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Ein stiller Zeuge des Unaussprechlichen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er kehrte zurück, nicht triumphierend, nicht predigend, sondern einfach als Mensch, dessen Augen nicht mehr flackerten, dessen Stimme nicht mehr zersplittert war. Er betrat die Dörfer, in denen man ihn einst fürchtete. Und wenn man ihn fragte, antwortete er nicht mit Argumenten, sondern mit Blick: »Ich war zersplittert. Jetzt bin ich eins. Ich war viele. Jetzt bin ich ich.«</p>
          <p class="vb-intro">Er blieb kein Prediger, wurde kein Jünger im engeren Kreis, aber ein stiller Zeuge für alle, die selbst mit den Stimmen kämpfen, mit der Scham, mit dem Rückzug, mit der Angst, sich zu zeigen. Das ist das Geschenk der SX5w4: eine Tiefe, die gelernt hat, mitten unter den Menschen zu sein, ohne sich zu verlieren – ein Igel, der weiß, dass er sich nicht mehr einrollen muss, um ganz zu bleiben.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Legion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zum Mann von Gerasa ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/gAlYihN7QCE?rel=0" title="Legion – Der Mann von Gerasa" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/sx5", label:"SX5 – Der Igel: Subtyp-Profil"},
        {route:"beruehmte-friedrich-nietzsche", label:"Portrait: Friedrich Nietzsche (SX5w4)"},
        {route:"bibel-gamaliel", label:"Bibel-Porträt: Gamaliel (SO5w6)"},
        {route:"bibel-zachaeus", label:"Bibel-Porträt: Zachäus (SE6w5)"},
      ])}
    </div>
  `);
}

function zachaeusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-zachaeus-portrait.jpg" alt="Zachäus – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Zachäus</p>
        <p class="krim-portrait-typ">SE6w5 · Selbsterhaltender Typ 6 mit Fünferflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Die Suche nach Sicherheit und der Mut zur Offenheit – Tierentsprechung: Kaninchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Tierentsprechung: Kaninchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Zachäus, steig eilends herab; denn ich muss heute in deinem Haus einkehren.« (Lk 19,5)</p>

        <h2 class="vb-section">1. Das Kaninchen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Kaninchen</strong> ist das Tier der selbsterhaltenden Sechs – wachsam, schnell im Rückzug, immer bereit, sich in Sicherheit zu bringen, bevor eine Gefahr sich überhaupt bestätigt hat. Zachäus kletterte, nicht weil er kindlich war, nicht weil er sportlich war, sondern weil er nicht gesehen werden wollte und doch sehen musste. Er war klein, nicht nur am Körper. Auch innerlich war er oft gekrümmt von der Last der Kontrolle. Denn Kontrolle bedeutete für ihn: Überleben.</p>
          <p class="vb-intro">Die selbsterhaltende Sechs lebt in der Spannung zwischen Bedürfnis nach Ordnung und tief sitzendem Grundmisstrauen. Vertrauen muss erarbeitet, bewiesen, getestet werden. Zachäus war Zöllner, einer, der mit den Römern handelte, einer, dem keiner traute, und der keinem traute. Der Baum war sein sicherer Ort, hoch genug, um den Überblick zu behalten, nah genug, um den Mann zu sehen, von dem alle sprachen. Er wagte sich nach oben, weil er dort nicht angesprochen werden konnte. Dachte er.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sechs: Sicherheit durch Kontrolle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Doch dann blieb Jesus stehen, sah nicht auf die Straße, nicht auf die Menge, sondern direkt nach oben, direkt zu ihm. »Zachäus…« Und in diesem Wort lag kein Vorwurf, keine Verachtung, kein Spott, sondern ein Anruf, ein Vertrauen, bevor irgendetwas geklärt war. Zachäus stockte, sein sicherer Abstand kippte plötzlich in Verletzlichkeit. Aber Jesus forderte nicht viel, nur eines: »Steig herab. Ich will bei dir einkehren.«</p>
          <p class="vb-intro">Zachäus stieg nicht einfach vom Baum, er löste sich – von seiner Tarnung, von seinem Panzer, von der Gewohnheit, alles unter Kontrolle zu haben. Die Menschenmenge murmelte, einige lachten hämisch, andere blickten verwundert. »Er kehrt bei einem Sünder ein…« Zachäus hörte die Stimmen und merkte zugleich, dass sie nicht mehr das Letzte zu sagen hatten. Jesus sah ihn nicht an wie ein Aktenzeichen, nicht wie einen Verräter, nicht wie einen Risikofaktor, sondern wie einen Menschen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Fünferflügel: Rückzug ins Beobachten und Berechnen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Fünferflügel (w5)</strong> gibt der selbsterhaltenden Sechs eine analytische, distanzierte Qualität – Sicherheit entsteht durch Rückzug, Berechnung und Kontrolle über den eigenen Raum, nicht durch soziale Wärme oder lautes Handeln. Zuhause angekommen, öffnete Zachäus nervös die Tür. Noch nie hatte jemand wie er jemanden wie ihn besucht, nicht als Zeichen der Gnade. Er hatte nichts vorbereitet, keine Polster gerichtet, kein Brot gebacken, keine Antworten zurechtgelegt.</p>
          <p class="vb-intro">Aber Jesus trat ein, als wäre dieses Haus genau richtig. Er setzte sich und schwieg, ein Schweigen, das nicht bedrückte, sondern einlud. Zachäus ging unruhig durch den Raum, bot Früchte an, Wasser, ein Kissen. Jesus nahm nichts, nur seinen Blick ließ er ruhen, auf Zachäus. Genau diese ruhig kalkulierende, beobachtende Distanz, die erst weicht, wenn absolute Sicherheit erfahren wird, trägt die Handschrift des Fünferflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Zwischen Reue und Widerstand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zachäus begann zu reden, zuerst in Formeln: »Ich habe meine Pflicht getan.« »Ich habe nur genommen, was verlangt wurde.« Dann in Rechtfertigungen: »Es ist nicht leicht, für die Römer zu arbeiten.« »Man braucht Rücklagen in dieser Zeit.« Doch seine Stimme brach. Er hatte jahrelang Ordnung gesucht und stattdessen sich selbst verloren. Er hatte Loyalität gespielt, aber nie echte Zugehörigkeit gespürt. Er hatte sich zurückgezogen ins Funktionieren.</p>
          <p class="vb-intro">In diesem Moment flüsterte er, nicht an Jesus, sondern ins eigene Schweigen hinein: »Ich will etwas zurückgeben. Ich will anders handeln.« Nicht aus Zwang, nicht um gut dazustehen, sondern weil er zum ersten Mal das Gefühl hatte, dass er gesehen wurde, bevor er funktionierte.</p>
        </blockquote>

        <h2 class="vb-section">5. Der stille Durchbruch</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jesus antwortete nicht mit Worten. Er nickte, ein stilles, warmes Nicken, wie eine Zustimmung zu einem inneren Wandel, den kein Auge sehen konnte. Und Zachäus spürte plötzlich etwas: eine Leere, die nicht schmerzte, sondern Raum gab, für das Neue, für einen anderen Weg. Er würde auf Widerstände stoßen, sich selbst immer wieder prüfen, Zweifel empfinden, und absichern wollen. Aber er hatte gesehen, dass es eine andere Art zu leben gab, ohne ständiges inneres Misstrauen.</p>
          <p class="vb-intro">Am Abend ging Jesus weiter. Zachäus begleitete ihn bis zur Schwelle. Es war kein dramatischer Abschied, kein »Danke«, kein »Ich werde dir folgen«. Nur ein Blick, ein Blick, der sagte: »Ich habe dich gemeint. Und ich traue dir zu, dass du lebst.«</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Anders geben, anders schauen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zachäus schloss die Tür. Aber innerlich war nichts mehr geschlossen. Er sah sich um: die Möbel waren noch dieselben, die Münzen lagen noch auf dem Tisch. Doch sein Verhältnis dazu war neu. Er würde fortan anders geben, anders sprechen, anders schauen. Denn jemand hatte ihm nicht nur die Hand gereicht, sondern das Vertrauen geschenkt, nicht mehr fliehen zu müssen.</p>
          <p class="vb-intro">Das ist das Geschenk der SE6w5: eine Sicherheit, die nicht mehr aus Kontrolle über jedes Detail gespeist wird, sondern aus dem einmal erfahrenen Vertrauen, gesehen zu sein, bevor man funktioniert – ein Kaninchen, das gelernt hat, dass nicht jeder offene Raum eine Gefahr ist.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Ich kehr' bei dir ein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Zachäus ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/z7BZ4KXOAsg?rel=0" title="Ich kehr' bei dir ein – Zachäus" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/se6", label:"SE6 – Das Kaninchen: Subtyp-Profil"},
        {route:"beruehmte-fjodor-dostojewski", label:"Portrait: Fjodor Dostojewski (SE6w5)"},
        {route:"bibel-der-mann-von-gerasa", label:"Bibel-Porträt: Der Mann von Gerasa (SX5w4)"},
        {route:"bibel-philippus", label:"Bibel-Porträt: Philippus (SO6w5)"},
      ])}
    </div>
  `);
}

function philippusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-philippus-portrait.jpg" alt="Philippus – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Philippus</p>
        <p class="krim-portrait-typ">SO6w5 · Sozialer Typ 6 mit Fünferflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Die Sehnsucht nach Gewissheit und der Mut zur Nähe – Tierentsprechung: Erdmännchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so6.jpg" alt="Tierentsprechung: Erdmännchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO6")};left:${tierAvatarLeft("SO6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Herr, zeige uns den Vater – dann genügt es uns.« (Joh 14,8)</p>

        <h2 class="vb-section">1. Das Erdmännchen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Erdmännchen</strong> ist das Tier der sozialen Sechs – es lebt im Verband, hält Wache für die Gruppe und findet Sicherheit nicht in Einzelgängertum, sondern im verlässlichen Miteinander. Philippus war keiner, der drängte. Er sprach nicht laut, trat nicht nach vorn. Aber er war da, immer da. Wenn andere diskutierten, hörte er zu. Wenn andere eilten, prüfte er.</p>
          <p class="vb-intro">Die soziale Sechs will dazugehören, nicht aus Geltung, sondern aus einem tiefen Bedürfnis nach Halt in sozialen Verbindungen. Er war treu, aber sein Herz fragte leise, immer: Kann ich mich wirklich verlassen? Er war der Erste, den Jesus direkt ansprach: »Folge mir nach« – und Philippus folgte, nicht sofort mit glühendem Herzen, aber mit wachsamem Geist. Er war ein Brückenbauer, brachte Nathanael zu Jesus, übersetzte zwischen dem, was war, und dem, was wurde.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sechs: Vertrauen durch geprüfte Verhältnismäßigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Philippus war ein Mann der Verhältnismäßigkeit. Er war kein Visionär, aber auch kein Zyniker. Er vertraute, aber nicht blind. Das machte ihn stabil, und manchmal unentschlossen. Wenn die anderen jubelten, rechnete Philippus nach. Wenn sie glaubten, wollte er wissen: Warum? Und Jesus ließ ihn so sein, nahm ihn mit, gerade weil er so war.</p>
          <p class="vb-intro">Philippus stand am Rand der Menge, fünftausend Männer, dazu Frauen und Kinder, ein aufgewühlter Nachmittag. Jesus drehte sich zu ihm, nicht zu Petrus, nicht zu Johannes, sondern zu ihm: »Wo sollen wir Brot kaufen, damit diese essen können?« Eine einfache Frage, doch Philippus spürte sofort, dass sie mehr bedeutete. Er zögerte, rechnete, überschlug im Kopf. Zweihundert Denare, selbst das würde nicht genügen. Er sprach es aus, nicht trotzig, nicht panisch, nur nüchtern, sachlich, realistisch.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Fünferflügel: Sicherheit durch Berechnung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Fünferflügel (w5)</strong> gibt der sozialen Sechs eine nüchterne, analytische Qualität – Gewissheit entsteht durch Prüfung, Berechnung und intellektuelle Klarheit, nicht durch spontanes Vertrauen. Jesus antwortete nicht, er lächelte still, denn er wusste: Philippus sprach nicht aus Unglauben, sondern aus seiner Art, die Welt zu sichern. Für eine soziale Sechs ist Sicherheit nicht Luxus, sie ist Grundbedingung für Vertrauen.</p>
          <p class="vb-intro">Philippus beobachtete weiter, sah Andreas den Jungen mit den fünf Broten bringen, sah Jesus danken, und dann teilen. Das Brot wurde nicht mehr, aber es reichte, ein Wunder, aber auch eine Lektion: Es braucht nicht Berechnung, um Vertrauen zu rechtfertigen, es braucht Vertrauen, um über die Berechnung hinauszugehen. Genau dieses nüchterne, prüfende Rechnen, bevor Vertrauen zugelassen wird, trägt die Handschrift des Fünferflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Vater, den er nicht sieht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Stimmung war drückend, Jesus hatte begonnen, von seinem Abschied zu sprechen, von Wegen, die keiner verstand. »Ich bin der Weg und die Wahrheit und das Leben.« Die anderen schwiegen, aber Philippus konnte nicht schweigen. In seinem Innersten verlangte es nach Klarheit, nicht nach Poesie, nicht nach Symbolen: »Herr, zeige uns den Vater – dann genügt es uns.« Es war kein Misstrauen in dieser Bitte, kein Trotz, nur eine tiefe, beinahe kindliche Sehnsucht: Gib mir Halt. Zeig mir das Fundament.</p>
          <p class="vb-intro">Für Jesus aber war dieser Satz schmerzlich ehrlich. So lange war Philippus schon bei ihm gewesen. »So lange bin ich bei euch – und du hast mich nicht erkannt?« Der Satz traf Philippus, aber er war kein Tadel, er war ein Weckruf. Vertrauen ist nicht die Folge vollendeter Beweise, Vertrauen ist ein Entschluss im Angesicht der Ungewissheit. In diesem Moment begann Philippus, anders zu sehen, nicht in Sicherheiten, sondern in Beziehungen.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Stunde der Treue</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nach der Kreuzigung wurde alles fragil, die Gruppe, das Gefüge, das Vertrauen, alles stand auf der Kippe. Philippus blieb, nicht laut, nicht führend, aber anwesend, verlässlich. Er hielt sich an das, was die soziale Sechs am tiefsten versteht: Loyalität über Zweifel hinweg. Er suchte Petrus nicht zu ersetzen, wollte nicht die Bühne, er wollte nur Teil bleiben, Teil von etwas, das größer war als seine Fragen.</p>
          <p class="vb-intro">Als Jesus erschien, nicht zuerst ihm, wartete er nicht auf Sonderrechte. Er nahm das Zeugnis der anderen ernst, prüfte innerlich, aber lehnte sich nicht ab. Die soziale Sechs glaubt mit Herz und Verstand, aber nur, wenn beides in Beziehung treten darf. Philippus verstand nun: Man kann glauben, ohne alles zu verstehen. Man kann sich hingeben, ohne zu verschwinden. Man kann vertrauen, und trotzdem wach bleiben.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Stabilität statt Genialität</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Philippus reiste später in die Fremde, predigte nicht mit Feuer, sondern mit Glaubwürdigkeit. Die soziale Sechs hinterlässt keine gewaltigen Spuren, aber sie hinterlässt Stabilität. Er gründete nicht Kirchen, er hielt sie zusammen. Seine größte Stärke war nicht Kühnheit, sondern Loyalität trotz Ungewissheit, nicht Genialität, sondern ein Herz, das nicht wegläuft, wenn Fragen keine Antworten finden.</p>
          <p class="vb-intro">Am Ende seines Weges, als er nicht mehr rechnete, nicht mehr suchte, nicht mehr fragte, hatte er etwas gefunden, das er ein Leben lang ersehnt hatte: innere Erlaubnis, dem zu trauen, der ihn zuerst gesehen hatte. Das ist das Geschenk der SO6w5: eine Gewissheit, die nicht mehr aus vollendeter Berechnung stammt, sondern aus dem Entschluss, trotz Ungewissheit zu vertrauen – ein Erdmännchen, das gelernt hat, dass Wache halten und sich fallen lassen sich nicht ausschließen.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Zeig uns den Vater</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Philippus ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/bm3SEsot92E?rel=0" title="Zeig uns den Vater – Philippus" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/so6", label:"SO6 – Das Erdmännchen: Subtyp-Profil"},
        {route:"beruehmte-immanuel-kant", label:"Portrait: Immanuel Kant (SO6w5)"},
        {route:"bibel-zachaeus", label:"Bibel-Porträt: Zachäus (SE6w5)"},
        {route:"bibel-petrus", label:"Bibel-Porträt: Petrus (SX6w7)"},
      ])}
    </div>
  `);
}

function petrusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-petrus-portrait.jpg" alt="Petrus – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Petrus</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Das Feuer der Bindung und die Angst, sich zu verlieren – Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Herr, ich bin bereit, mit dir ins Gefängnis und in den Tod zu gehen!« Jesus sprach: »Ehe der Hahn heute kräht, wirst du dreimal leugnen, dass du mich kennst.« (Lk 22,33–34)</p>

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier der sexuellen Sechs – er liebt mit Wucht, verteidigt sein Rudel mit ganzem Körper, und seine Furchtlosigkeit ist keine Abwesenheit von Angst, sondern deren Umkehrung in Handlung. Petrus sprach zuerst, immer. Wenn die anderen schwiegen, warf er sich vor, mit Worten, mit Gesten, mit seinem ganzen Körper. Er verließ das Boot, um auf dem Wasser zu Jesus zu gehen. Er zog das Schwert im Garten, um ihn zu verteidigen.</p>
          <p class="vb-intro">Bindung ist das Zuhause der SX6, aber dieses Zuhause ist von inneren Stürmen umgeben. Petrus glaubte, aber sein Glaube war nicht ruhig. Er war zwingend, unentbehrlich, und voller Angst, dass er verlassen werden könnte, wenn er nicht genügte. Er sagte nicht: »Ich glaube an dich.« Er sagte: »Ich lasse dich nicht im Stich.« Er brauchte die Nähe Jesu wie Luft zum Atmen, nicht als Idee, sondern als verkörperte Bindung.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: Mutig aus Bindung, zerbrechlich in der Furcht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als Jesus begann, vom Leiden zu sprechen, rief Petrus: »Das soll dir nicht widerfahren!«, fast wie ein Kind, das einen geliebten Vater zu schützen versucht. Aber Jesus antwortete scharf: »Weiche von mir, Satan!« Es war kein Ablehnen von Petrus, sondern ein Erschrecken über die Macht der Angst, die sich in Liebe kleidete. Petrus schwankte zwischen Mut und Angst, zwischen Treue und Selbstschutz. Und Jesus ließ ihn, liebte ihn nicht trotz, sondern mit dieser Spannung.</p>
          <p class="vb-intro">Es war kalt in jener Nacht, Jesus war gefangen, die Gemeinschaft zerrissen. Petrus folgte, nicht offen, aber nah genug, um nichts zu verpassen, nah genug, um noch etwas retten zu können. Die SX6 ist mutig aus Bindung, aber voller Furcht, wenn Bindung zu zerbrechen droht. Er setzte sich ans Feuer, wärmte die Hände, beobachtete. »Warst nicht auch du einer von ihnen?« Er wich aus, schüttelte den Kopf, lachte gezwungen. Einmal, zweimal, dreimal. Und dann krähte der Hahn.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerflügel: Impulsive Wucht statt stiller Grübelei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel (w7)</strong> gibt der sexuellen Sechs eine energetische, impulsive Qualität – Mut zeigt sich nicht in stiller, abwägender Intensität, sondern in spontaner, körperlicher, fast überschäumender Handlung, bevor der Verstand nachkommt. Jesus wurde in diesem Moment vorbeigeführt, geschlagen, gebunden, verhüllt. Aber sein Blick ging durch alles hindurch, durch die Nacht, durch den Lärm, durch Petrus' Rüstung aus Angst. Er sah ihn an, nicht strafend, nicht enttäuscht, sondern erkennend.</p>
          <p class="vb-intro">Petrus zerbrach nicht, weil er schwach war, sondern weil er so tief gebunden war, dass der Verlust ihn erschütterte bis ins Mark. Er lief hinaus, weinte bitterlich, nicht über sich, sondern über das, was er verletzte, weil er es so sehr liebte. Genau dieses schnelle, ungebremste Handeln aus dem Bauch heraus, aus dem Boot springen, das Schwert ziehen, laut sprechen, bevor gedacht ist, trägt die Handschrift des Siebenerflügels – die Tragik der SX6: Sie will schützen, aber aus Angst zu versagen, kann sie genau das verlieren, was sie am meisten bewahren wollte.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Frage am Morgen: Drei Atemzüge</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Morgen roch nach Salz und Asche. Die Jünger waren zurück am See, zurück bei den Netzen, zurück bei dem, was sie kannten, weil sie nicht wussten, wie es weitergehen sollte. Petrus war innerlich still geworden, nicht aus Frieden, sondern aus Scham. Doch da stand Jesus am Ufer, mit Kohlen, mit Brot, mit Fisch. »Kommt und frühstückt.« Keine Vorwürfe, keine Predigt, nur Nähe.</p>
          <p class="vb-intro">Nach dem Mahl sprach Jesus ihn an: »Simon, Sohn des Johannes, liebst du mich?« Dreimal fragte er, nicht um ihn zu prüfen, sondern um ihn zurückzuführen, sanft, beharrlich, wie man ein verletztes Tier zurück ins Licht lockt. Am Ende sagte Jesus nicht: »Du bist wieder würdig.« Sondern: »Weide meine Schafe.« Er gab ihm Verantwortung, gerade weil er gefallen war. Denn nur wer zerbricht, kann die Zerbrochenen wirklich sehen.</p>
        </blockquote>

        <h2 class="vb-section">5. Vom Sturm des Pfingsttags zur Treue im Angesicht der Angst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jerusalem bebte, Feuerzungen auf ihren Häuptern, eine Stimme in vielen Sprachen, und mitten darin: Petrus. Er, der gezögert hatte, er, der gefallen war, trat hervor, nicht mit Berechnung, nicht mit Gelehrsamkeit, sondern mit Brennweite im Herzen: »Ihr Männer von Judäa, hört meine Worte!« Petrus war kein Rhetoriker, er war ein Zeuge. Die SX6 bleibt nicht mutig, weil sie frei von Angst wäre. Sie bleibt mutig, weil sie der Bindung mehr traut als der eigenen Furcht.</p>
          <p class="vb-intro">Der Preis stieg: Gefangennahmen, Drohungen, Folter. Und doch sagte Petrus, als man ihn zum Schweigen bringen wollte: »Man muss Gott mehr gehorchen als den Menschen.« Nicht trotzig, nicht heldenhaft, sondern aus gelebtem Vertrauen. Er, der aus Angst gelogen hatte, sprach nun mit Klarheit, weil er wusste, dass selbst der Tod nicht mehr trennen konnte, was durch Liebe verbunden war.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Der Fels, der aus Zweifeln gehauen war</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er wurde alt, doch der Sturm verließ ihn nie ganz. Immer wieder zogen die alten Fragen durch sein Inneres: Genüge ich? Wird man mich halten? Aber sie bekamen keine Macht mehr, denn er kannte jetzt den Blick, der durch Versagen hindurch liebte, und diese Liebe verankerte ihn. Man nannte ihn später »den Fels«, nicht weil er unerschütterlich war, sondern weil er lernen musste, standzuhalten, trotz Angst, trotz innerer Zerrissenheit.</p>
          <p class="vb-intro">Als er verhaftet wurde, bat er darum, nicht wie Jesus gekreuzigt zu werden: »Nicht würdig bin ich, so zu sterben wie mein Herr.« Und so starb er am Kreuz mit dem Kopf nach unten, aber mit dem Herzen aufrecht. Das ist das Geschenk der SX6w7: ein Mut, der aus Treue geboren wird, nicht aus Stärke, eine Bindung, die alle Brüche durchhält – ein Wolf, der begreift, dass wahre Furchtlosigkeit nicht heißt, nie zu versagen, sondern nach jedem Fall wieder aufzustehen und zu lieben.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Und doch liebte er ihn</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Petrus ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/QqRezX3O6VA?rel=0" title="Und doch liebte er ihn – Petrus" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/sx6", label:"SX6 – Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-michael-schumacher", label:"Portrait: Michael Schumacher (SX6w7)"},
        {route:"bibel-philippus", label:"Bibel-Porträt: Philippus (SO6w5)"},
        {route:"bibel-lazarus", label:"Bibel-Porträt: Lazarus (SE7w6)"},
      ])}
    </div>
  `);
}

function lazarusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-lazarus-portrait.jpg" alt="Lazarus – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Lazarus</p>
        <p class="krim-portrait-typ">SE7w6 · Selbsterhaltender Typ 7 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Freund des Lebens – Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Unser Freund Lazarus schläft; aber ich gehe hin, ihn aufzuwecken.« (Joh 11,11)</p>

        <h2 class="vb-section">1. Der Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gorilla</strong> ist das Tier der selbsterhaltenden Sieben – ruhig, gastfreundlich, präsent durch Wärme statt durch Lautstärke, ein Wesen, in dessen Nähe man sich sicher und wohl fühlt. Lazarus war kein Mann vieler Worte. Wenn seine Schwestern diskutierten, lächelte er still. Wenn Gäste kamen, deckte er den Tisch und ließ die anderen reden. Er war präsent, nicht durch Lautstärke, sondern durch Wärme, ein Mensch, bei dem man sich wohlfühlte.</p>
          <p class="vb-intro">Sein Haus in Bethanien war ein offenes Haus, nicht verschwenderisch, aber gastlich, ein Haus, in dem gegessen, gelacht und geschwiegen werden konnte, ein Ort, an dem auch Jesus sich zurückzog. Lazarus war kein Schüler, kein Lehrer, kein Prediger, aber er war ein Freund, und Freundschaft war für ihn Lebenskunst. Die selbsterhaltende Sieben sucht kein Abenteuer im Außen, sondern die intensive, stille Fülle im Innen. Sie liebt das Leben, aber mit Bedacht.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sieben: Maßvolle Freude statt Exzess</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Lazarus war kein Asket. Er kannte den Wein, das Brot, den Duft von Öl, aber nie in Exzess, nie in Hast. Er lebte in maßvoller Freude, nicht um zu fliehen, sondern um zu bleiben. Er konnte zuhören, ohne sich zu verlieren. Er konnte da sein, ohne sich aufzudrängen. Er war kein Aufbruch, sondern ein Ankommen. Und dann wurde er krank. Still, wie er lebte, so wurde er schwächer. Er klagte nicht, wollte die anderen nicht belasten. Doch Marta und Maria schickten nach Jesus, denn sie wussten: Du liebst ihn. Doch Jesus kam nicht sofort. Und Lazarus starb.</p>
          <p class="vb-intro">Vier Tage lag er im Fels, gebettet in Tücher, umgeben von Myrrhe, umhüllt von Schweigen. Nicht der Tod war das Schreckliche, sondern die Unterbrechung, dieser gewohnte Strom von milder Lebendigkeit, von Brot, Öl, Licht und Zärtlichkeit, war zum Stillstand gekommen. Und dann kam Jesus. Spät. Zu spät? Marta lief ihm entgegen: »Herr, wärst du hier gewesen, mein Bruder wäre nicht gestorben.«</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Loyale Wärme statt intensiven Antriebs</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der selbsterhaltenden Sieben eine treue, verbindliche Qualität – Fülle entsteht nicht durch treibende Intensität, sondern durch verlässliche, warme Nähe zu den Menschen, die man liebt, ein Zuhause, in dem andere sich sicher fühlen können. Jesus hörte zu, er weinte, nicht nur um Lazarus, sondern um alle, die sich im Schatten verloren glaubten. Dann ging er zum Grab: »Nehmt den Stein weg.« Marta zögerte: »Herr, er riecht schon…« Jesus blickte sie an: »Habe ich dir nicht gesagt: Wenn du glaubst, wirst du die Herrlichkeit Gottes sehen?«</p>
          <p class="vb-intro">Dann rief er mit lauter Stimme: »Lazarus, komm heraus!« Und Lazarus kam, langsam, gebunden, lebendig. Die SE7 glaubt lange, man könne Schmerz vermeiden. Aber in der Tiefe geschieht Verwandlung erst dann, wenn man durch den Schmerz hindurch wieder ans Licht tritt. Genau diese stille, treue Verlässlichkeit, die sich nicht durch das eigene Leiden von der Gemeinschaft entfernt, sondern gerade dadurch tiefer verwurzelt, trägt die Handschrift des Sechserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Die letzte Mahlzeit: Das Lächeln der Auferstandenen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Lazarus trat nicht zurück ins alte Leben. Er trat in ein neues Leben, mit dem Geschmack von Erde und Ewigkeit auf der Zunge. Er sprach nicht viel danach, aber seine Gegenwart sprach. Denn wer den Tod gesehen hat und trotzdem wieder bei Tisch sitzt, mit Brot in der Hand und dem Licht im Gesicht, der lebt anders, tiefer, sanfter, echter. Der Hof war erfüllt vom Duft gebratenen Lamms, ein Fest war bereitet, kein Triumph, sondern ein stilles Mahl der Dankbarkeit. Lazarus saß bei Tisch, zwischen Freunden.</p>
          <p class="vb-intro">Er sprach nicht viel, doch wenn seine Augen einen trafen, dann geschah etwas: eine Ruhe übertrug sich, als hätte man eben erst gelernt, was Leben eigentlich ist. Die, die ihn kannten, sagten: »Er hört anders zu.« Denn wer durch das Dunkel geht, hört die Töne feiner, schmeckt das Brot tiefer, liebt mit weniger Angst. Die SE7 wird reif nicht durch Rückzug, sondern durch Anwesenheit mit offenem Herzen.</p>
        </blockquote>

        <h2 class="vb-section">5. Ein Ort, an dem Leben tiefer ging</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Lazarus lächelte öfter, nicht aus Leichtigkeit, sondern aus Annahme. Er wusste jetzt, dass das Leben nicht perfekt sein musste, nur wahrhaftig, und dass der Geschmack von Datteln süßer ist, wenn man den Tod schon gekostet hat. Später, als alles vorbei war, als Jesus gekreuzigt war und der Aufbruch der ersten Gemeinschaft begann, da blieb Lazarus in Bethanien. Ein Haus, ein Garten, ein Tisch, ein Ort, an dem Menschen sich erinnerten: Hier hat Jesus gewohnt, hier hat Lazarus gegessen, hier war Leben, das tiefer ging.</p>
          <p class="vb-intro">Er wurde nicht Apostel, nicht Lehrer. Aber wenn jemand fragte: »Und du, was hast du erlebt?« Dann sagte Lazarus: »Ich war tot. Und nun bin ich hier. Lass uns essen.«</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Fülle ohne Flucht vor dem Schmerz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das ist das Geschenk der SE7w6: eine Freude, die nicht mehr vor dem Schmerz fliehen muss, um echt zu sein, sondern die gerade durch das Erlebte an Wärme gewinnt – ein Gorilla, dessen ruhige Gegenwart nach dem Durchleben der Dunkelheit noch tiefer trägt, weil er weiß, dass das Wesentliche nicht laut ist.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Komm heraus, Lazarus!</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Lazarus ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/kKxF8Dx-Sc8?rel=0" title="Komm heraus, Lazarus! – Lazarus" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/se7", label:"SE7 – Der Gorilla: Subtyp-Profil"},
        {route:"beruehmte-larry-king", label:"Portrait: Larry King (SE7w6)"},
        {route:"bibel-petrus", label:"Bibel-Porträt: Petrus (SX6w7)"},
        {route:"bibel-samariterin-am-jakobsbrunnen", label:"Bibel-Porträt: Die Samariterin am Jakobsbrunnen (SO7w6)"},
      ])}
    </div>
  `);
}

function samariterinAmJakobsbrunnenPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-samariterin-am-jakobsbrunnen-portrait.jpg" alt="Die Samariterin am Jakobsbrunnen – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Die Samariterin am Jakobsbrunnen</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Die Begeisterte, die ruft – Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Kommt, seht einen Menschen, der mir alles gesagt hat, was ich getan habe – ob er wohl der Christus ist?« (Joh 4,29)</p>

        <h2 class="vb-section">1. Der Biber</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Biber</strong> ist das Tier der sozialen Sieben – er baut, verbindet, teilt seine Entdeckungen mit der ganzen Gemeinschaft und ruht nie lange, bevor er das nächste Projekt beginnt. Die Sonne stand hoch, kein Mensch war unterwegs, nur eine Frau mit einem Krug, am Brunnen außerhalb der Stadt. Nicht morgens, nicht abends, zur heißesten Stunde kam sie. Vielleicht, weil sie niemanden treffen wollte. Vielleicht, weil sie mehr suchte als nur Wasser.</p>
          <p class="vb-intro">Jesus saß dort, müde, staubig, schweigend. Und dann sprach er: »Gib mir zu trinken.« Ein Satz, ein Blick, ein Riss durch das Gewohnte. Sie war überrascht, nicht nur, weil er ein Mann war, nicht nur, weil er ein Jude war, sondern weil er sie ansprach, und weil er Durst zeigte. Sie fragte, er antwortete, sie fragte weiter, und er antwortete tiefer, nicht mit Verurteilung, nicht mit Belehrung, sondern mit einem Angebot.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sieben: Wahrheit durch Begeisterung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">»Wer von diesem Wasser trinkt, wird wieder dürsten. Wer aber von dem Wasser trinkt, das ich ihm geben werde, in dem wird es eine Quelle des Lebens.« Etwas in ihr wurde wach, nicht erschrocken, nicht schuldbewusst, sondern neugierig. Die soziale Sieben erkennt Wahrheit durch Begeisterung, durch Begegnung, durch das Feuer, das Hoffnung macht. Und dann: ein Satz, der alles wendete: »Du hast recht, fünf Männer hast du gehabt, und der, den du jetzt hast, ist nicht dein Mann.« Keine Anklage, keine Bloßstellung, nur ein Spiegel.</p>
          <p class="vb-intro">Sie weicht aus, redet von Religion, vom richtigen Ort für den Gottesdienst, von Propheten, von Zukunft. Aber sie bleibt im Gespräch. Die SO7 mag keine Tiefe, die weh tut, aber sie liebt Tiefe, die verbindet. Und Jesus sagte: »Ich bin's, der mit dir spricht.«</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Begeisterung, die einlädt statt provoziert</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der sozialen Sieben eine verbindende, loyale Qualität – Begeisterung wird nicht zur Provokation oder zum Auftritt, sondern zur Einladung, die andere in eine gemeinsame Gemeinschaft hineinzieht. Etwas brach auf. Sie ließ den Krug stehen, lief, rief, nicht leise, nicht zaghaft, sondern mit Begeisterung: »Kommt und seht!« Sie lief, nicht mehr bedacht, nicht mehr zurückhaltend.</p>
          <p class="vb-intro">Die Frau, die sonst zur heißen Stunde kam, sprach nun in aller Öffentlichkeit: »Kommt mit! Seht ihn euch an! Er hat mir alles gesagt, alles, was ich je getan habe!« Es war kein Schuldbekenntnis, kein Flehen, es war ein Ruf, einer, der mehr meinte als Worte: Ich wurde gesehen, ohne beschämt zu werden. Genau dieses Rufen, das andere einlädt und zusammenbringt, statt sie zu spalten oder zu provozieren, trägt die Handschrift des Sechserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Stadt bewegt sich: Das Wasser wird lebendig</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Menschen blieben stehen, schauten sich an. Wirklich sie? Die Frau, die sich sonst zwischen den Blicken hindurchbewegte, sprach jetzt aus dem Zentrum heraus. Und sie spürten: Da war kein Wahnsinn, keine Hysterie, nur ein Licht, das aus ihr kam, ohne dass sie es selbst erklären konnte. In der Mitte ihres Leibes brannte etwas, eine Quelle, die nichts mit dem Brunnen zu tun hatte, und doch alles mit ihm. Sie war nicht klüger geworden, aber lebendiger.</p>
          <p class="vb-intro">Die Stadt hörte ihr zu, nicht weil sie wichtig war, sondern weil sie wahrhaftig war. Und weil sie von etwas sprach, das alle kannten und keiner je in Worte fassen konnte: den Wunsch, gesehen zu werden, und nicht davon zu rennen. Jesus blieb zwei Tage. Die Menschen kamen, Fragen, Blicke, Neugier, Zögern. Und während sie ihm zuhörten, begannen viele zu glauben, nicht wegen ihrer Worte, sondern wegen der Resonanz, die sie in ihnen erzeugt hatte.</p>
        </blockquote>

        <h2 class="vb-section">5. Angekommen bei sich selbst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Am Ende sagten sie zu ihr: »Jetzt glauben wir nicht mehr nur wegen deiner Rede, sondern weil wir ihn selbst gehört haben, und wissen: Er ist wirklich der Retter der Welt.« Die Frau aber saß still, an einem Brunnen, der kein Wasser mehr brauchte. Sie lächelte, nicht aus Stolz, sondern aus der Heilung. Sie war angekommen, nicht bei Jesus, nicht in der Stadt, sondern bei sich.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Von der Vermeidung zum Ruf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das ist das Geschenk der SO7w6: eine Begeisterung, die nicht mehr vor der eigenen Geschichte davonlaufen muss, sondern sie zur Brücke macht, über die andere zur eigenen Wahrheit finden können – ein Biber, der nicht mehr allein zur heißesten Stunde kommt, um niemandem zu begegnen, sondern der aus dem Zentrum der Gemeinschaft heraus ruft: Kommt und seht.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Am Jakobsbrunnen – Sie sah Ihn</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zur Samariterin am Jakobsbrunnen ist ein eigener Song entstanden, der ihre seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/k3ffDHKpbFE?rel=0" title="Am Jakobsbrunnen – Sie sah Ihn – Die Samariterin" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/so7", label:"SO7 – Der Biber: Subtyp-Profil"},
        {route:"beruehmte-jules-verne", label:"Portrait: Jules Verne (SO7w6)"},
        {route:"bibel-lazarus", label:"Bibel-Porträt: Lazarus (SE7w6)"},
        {route:"bibel-johannes-der-geliebte", label:"Bibel-Porträt: Johannes, der geliebte Jünger (SX7w6)"},
      ])}
    </div>
  `);
}

function johannesDerGeliebtePage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-johannes-der-geliebte-portrait.jpg" alt="Johannes, der geliebte Jünger – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johannes, der geliebte Jünger</p>
        <p class="krim-portrait-typ">SX7w6 · Sexueller Typ 7 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Blick ins Licht, das nicht vergeht – Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Der Jünger, den Jesus liebte, lag an seiner Brust.« (Joh 13,23)</p>

        <h2 class="vb-section">1. Der Schimpanse</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Schimpanse</strong> ist das Tier der sexuellen Sieben – hochsensibel für Beziehung, aufmerksam für feinste Regungen, ganz auf die eine intensive Verbindung ausgerichtet, die mehr verspricht als das Gewöhnliche. Er sprach nicht viel. Aber wenn er sprach, spürte man: Er hatte gesehen. Johannes war jünger als die anderen, nicht naiv, sondern hellhörig, nicht ungestüm, sondern empfindsam mit einem inneren Leuchten. Er war nicht laut wie Petrus, nicht tief verwundet wie Thomas. Er war da, mit offenen Augen und einem Herzen, das auf Lichtresonanz eingestellt war.</p>
          <p class="vb-intro">Die SX7 sucht das Höhere im Nahen, die Ewigkeit im Moment. Sie will sich verlieren, um mehr zu empfangen. Jesus spürte das. Vielleicht war das der Grund, warum Johannes immer wieder nah war, nicht als Liebling, sondern als Sehender. Am Abend, als Jesus vom Verrat sprach, lag Johannes an seiner Brust, nicht aus Bedürftigkeit, sondern weil seine Seele wissen wollte, was nicht gesagt werden konnte. Er fragte nicht direkt: »Wer ist es, der dich verraten wird?« Er fragte leise, durch die Nähe, durch das Atmen, durch Dasein im Vertrauen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sieben: Die Schwingung der Wahrheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jesus antwortete ihm nicht mit Worten. Er tauchte ein Brotstück und reichte es. Ein Zeichen. Und Johannes verstand, nicht alles, aber genug, um zu bleiben. Er suchte keinen Beweis, keine Versicherung, nur die Schwingung der Wahrheit. Die sexuelle Sieben liebt die Welt, aber sie ist nie ganz von hier. Sie trägt einen Ruf in sich, der nicht aufhört zu leuchten. Als die anderen später flohen, stand Johannes noch da, nicht weil er stärker war, sondern weil er verbundener war als seine Angst.</p>
          <p class="vb-intro">Er stand da, nicht wie ein Held, nicht wie ein Sprecher, einfach nur stehend. Die anderen waren geflohen, Angst, Entsetzen, Ohnmacht. Aber Johannes blieb. Eine sexuelle Sieben verlässt selten den Ort, wo ihr Herz sich gebunden hat, nicht weil sie stark ist, sondern weil sie tief gebunden ist, in einem Ideal, in einer Hoffnung, in einer Wahrheit, die größer ist als ihr persönliches Ich.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Treue als leiser innerer Kompass</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der sexuellen Sieben eine loyale, verbindliche Qualität – die Sehnsucht nach dem Höheren äußert sich nicht in ungestümem Drang, sondern in stiller, verlässlicher Treue, die auch in der dunkelsten Stunde nicht weicht. Die Sonne brannte, der Staub hing still, ein Körper hing am Kreuz, und das Licht schien ausgelöscht. Aber Johannes sah, und sein Blick war nicht leer, er war gefüllt, mit Fragen, mit Liebe, mit Schmerz, aber auch mit einer Art strahlender Gewissheit.</p>
          <p class="vb-intro">Unter dem Kreuz: Maria, die Mutter, einige Frauen, und Johannes, der Jüngste, der an der Brust Jesu gelegen hatte. Jesus sprach: »Frau, siehe, dein Sohn. Siehe, deine Mutter.« Kein Theologe hätte diesen Moment erklären können. Aber Johannes verstand: Er hatte einen Auftrag, nicht aus Pflicht, sondern aus Herzensverbindung. Er nahm Maria zu sich, nicht als Vormund, sondern als jemand, der den Wert von Nähe erkannte, weil er selbst in ihr geheilt worden war. Genau diese stille, verlässliche Treue, die bleibt, wo andere fliehen, trägt die Handschrift des Sechserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Paradoxon der Nähe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die SX7 kennt das Paradoxon: In der größten Nähe kann das eigene Licht manchmal erst wirklich leuchten. Und in der tiefsten Dunkelheit wird sichtbar, was Bestand hat. Johannes blickte zum Kreuz, die Sonne wurde schwächer, die Schatten länger. Aber in seinem Inneren brannte eine Flamme, nicht laut, nicht grell, aber bleibend. Er würde schreiben, erzählen, Zeuge sein, nicht für sich, sondern für das, was er gesehen hatte: Licht, das in die Dunkelheit kam, und nicht erloschen ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Evangelium des Lichts</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nach dem Kreuz kam das Schweigen. Die Auferstehung war geschehen, manche sprachen davon, andere schwiegen. Johannes aber blieb wach. Petrus war fort, Jakobus tot, die anderen zerstreut. Und er schrieb. Die sexuelle Sieben, wenn sie reift, verliert nicht ihre Sehnsucht, sie vertieft sie, sie wandelt das Feuer der Verbindung in ein brennendes Wort. Johannes sammelte, nicht die Geschichten, nicht die Daten, sondern das Wesen. Er wusste: Das Sichtbare war nicht das Ganze. »Im Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott.«</p>
          <p class="vb-intro">Er begann nicht mit Maria, nicht mit Bethlehem, nicht mit Sternen. Er begann mit Licht. Sein Evangelium war kein Protokoll, es war das Bekenntnis eines Geliebten, nicht aus Schwärmerei, sondern aus Erkenntnis. Er hatte geliebt, und er war geliebt worden, und das hatte ihn bewahrt, getragen, und jetzt ließ es ihn leuchten. Die sexuelle Sieben sucht das Ideal, nicht um ihm zu entkommen, sondern um sich in ihm selbst zu verlieren.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Ein Zeuge des Lichts, das nicht vergeht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Johannes schrieb: »Wir haben seine Herrlichkeit gesehen, eine Herrlichkeit voller Gnade und Wahrheit.« Und während andere sich an Geschichten hielten, war Johannes der, der das Unsichtbare mit Worten einhüllte, damit es spürbar wurde. Er war alt geworden, manche nannten ihn den Seher, andere den Mystiker. Er selbst aber fühlte sich nur als Zeuge: »Was wir gesehen haben, was wir gehört haben, das verkünden wir euch, damit auch ihr Gemeinschaft habt.« Das ist das Geschenk der SX7w6: eine Sehnsucht, die reift, statt zu verglühen, ein Schimpanse, der lernt, dass die tiefste Verbindung nicht im Besitz des anderen liegt, sondern im treuen Zeugnis dessen, was Liebe wirklich vermag.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Johannes, der Geliebte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Johannes ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/kv4pxB6-GAQ?rel=0" title="Johannes, der Geliebte" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/sx7", label:"SX7 – Der Schimpanse: Subtyp-Profil"},
        {route:"beruehmte-morgan-freeman", label:"Portrait: Morgan Freeman (SX7w6)"},
        {route:"bibel-samariterin-am-jakobsbrunnen", label:"Bibel-Porträt: Die Samariterin am Jakobsbrunnen (SO7w6)"},
        {route:"bibel-der-hauptmann-unter-dem-kreuz", label:"Bibel-Porträt: Der Hauptmann unter dem Kreuz (SE8w9)"},
      ])}
    </div>
  `);
}

function derHauptmannUnterDemKreuzPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-der-hauptmann-unter-dem-kreuz-portrait.jpg" alt="Der Hauptmann unter dem Kreuz – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Der Hauptmann unter dem Kreuz</p>
        <p class="krim-portrait-typ">SE8w9 · Selbsterhaltender Typ 8 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Beschützer, der sich öffnet – Tierentsprechung: Orang-Utan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Tierentsprechung: Orang-Utan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Als aber der Hauptmann sah, wie Jesus starb, sprach er: Wahrlich, dieser Mensch war Gottes Sohn.« (Mk 15,39)</p>

        <h2 class="vb-section">1. Der Orang-Utan</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Orang-Utan</strong> ist das Tier der selbsterhaltenden Acht – zurückgezogen, autark, von enormer stiller Kraft, die sich selten zeigt, aber nie infrage steht. Er kannte Schmerz, nicht nur als Zuschauer. Er hatte ihn befohlen, gesehen, ausgehalten. Er war ein Mann des Imperiums, aber auch einer, der die Dinge selbst prüfte. Der Hauptmann war kein Sadist, er war verantwortlich, für Männer, für Ordnung, für Abläufe.</p>
          <p class="vb-intro">Der Dienst in Judäa war rau, unübersichtlich, und heute eine Kreuzigung, wie viele zuvor. Doch etwas war anders. Jesus war nicht laut, nicht trotzig, nicht gebrochen im gewohnten Sinn. Er atmete anders, schaute anders, starb anders. Die selbsterhaltende Acht erkennt nicht durch Gefühl, sondern durch das, was nicht einbricht, wenn alles bricht. Der Hauptmann sagte nichts, nicht bei der Kreuzigung, nicht beim Spott, nicht beim letzten Aufschrei. Er stand da, beobachtete, jede Faser auf Empfang, aber äußerlich sehr ruhig.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Acht: Wahrnehmung, die zur Wahrheit wird</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dann, in diesem letzten Moment, als Jesus sein Haupt neigte und der Tag sich verdunkelte, kam etwas in Bewegung, das keine Träne, keine Geste brauchte. Er sagte leise: »Wahrlich, dieser Mensch war Gottes Sohn.« Kein Bekenntnis im theologischen Sinn, keine Rede, nur Wahrnehmung, die zur Wahrheit wurde. Eine SE8 weint nicht oft. Aber wenn sie sich öffnet, dann geschieht es ohne Umweg, ohne Show, ohne Schutz. Und es ist echt.</p>
          <p class="vb-intro">Der Hauptmann sagte nicht mehr. Er ging nicht in die Knie, er sprach kein Gebet. Aber etwas in ihm war zerbrochen, und zugleich heil geworden. Er wachte früh, noch vor Sonnenaufgang war er auf den Beinen, überprüfte persönlich die Waffen, kontrollierte die Wachen. Er war kein Mann für Anweisungen aus der Ferne. Verantwortung bedeutete Präsenz, bedeutete, dass man zuerst aufstand und zuletzt ging, dass man sich nicht versteckte hinter Titeln.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Stille Würde statt lautem Auftreten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> gibt der selbsterhaltenden Acht eine ruhige, in sich gesammelte Qualität – Kraft zeigt sich nicht in Expansion oder Ansprache, sondern in stillem, würdevollem Beharren, das kaum je nach außen redet. Der Hauptmann wuchs auf in einem Haus, in dem Schwäche gefährlich war, in dem Gefühle heimlich blieben, in dem er früh lernte: Sicherheit heißt Kontrolle. Er wurde stark, nicht laut, nicht brutal, aber unnachgiebig. Und in dieser Stärke war er irgendwann allein.</p>
          <p class="vb-intro">Jesus hatte das nicht geändert, aber etwas in ihm geöffnet, nicht mit Gewalt, nicht mit Argumenten, sondern durch das, was nicht kaputtging, durch eine Würde, die nicht aus der Welt war, aber auch nicht von ihr. Am Abend stand er lange im Offizierszelt, legte seine Rüstung ab, schloss die Finger um die Kette mit dem Emblem, die ihm als Kind gegeben worden war. Genau dieses stille, wortkarge Verarbeiten in Einsamkeit, ohne dass jemand etwas davon erfährt, trägt die Handschrift des Neunerflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Ein Erkennen, das forderte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er hatte erkannt, ohne dass es jemand aussprach. Und was er erkannte, forderte ihn heraus: Ein Mann, der Gott war, und sich nicht verteidigte. Ein Mann, der litt, ohne zu hassen. Ein Mann, der starb, ohne zu verlieren. Und in diesem Erkennen stieg eine neue Art von Verantwortung in ihm auf: nicht mehr nur für Männer, sondern für Menschlichkeit, nicht mehr nur für Ordnung, sondern für Würde. Er würde es niemandem erklären. Aber er wusste: Er war nicht mehr derselbe.</p>
          <p class="vb-intro">Die selbsterhaltende Acht schützt, oft still, manchmal hart. Aber wenn sie erkennt, dass sie nicht alles halten muss, dann beginnt sie zu heilen, was sie einst nur verteidigte.</p>
        </blockquote>

        <h2 class="vb-section">5. Heimkehr: Das Schweigen, das spricht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Tage nach der Kreuzigung waren ruhig. Der Hauptmann sagte nichts, auch nicht, als ihn ein Kamerad fragte, ob es stimme, was er gesagt hatte: »Du sollst gesagt haben, er sei Gottes Sohn gewesen.« Er antwortete nicht, er nickte auch nicht, er sah nur, fest, wach, aber ohne Härte. Und doch veränderte sich etwas um ihn: Die Männer begannen, sich anders zu verhalten. Weniger Spott, weniger Wut, mehr Aufmerksamkeit. Er hatte nichts befohlen. Aber seine Gegenwart hatte begonnen, etwas auszustrahlen: nicht mehr nur Autorität, sondern Glaubwürdigkeit.</p>
          <p class="vb-intro">Als seine Einheit abgelöst wurde, ritt er hinaus aus Jerusalem, nicht schwerer bepackt als sonst, aber innen aufgebrochen. Er sprach nicht mehr über das, was am Hügel Golgatha geschehen war. Doch manchmal sah man ihn bei Sonnenaufgang mit verschränkten Armen am Rand des Lagers stehen, still, wach, als würde er etwas erwarten, das schon längst geschehen war.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Gesehen werden statt sich bekehren müssen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die reife selbsterhaltende Acht trägt ihre Erkenntnis nicht auf der Zunge, sondern im Blick. Sie wird zum Schutz, nicht mehr nur für Ordnung, sondern für das, was lebt. Der Hauptmann war nicht bekehrt. Er war nicht bekehrt worden, er war gesehen worden. Und das reichte. Das ist das Geschenk der SE8w9: eine Stärke, die nicht mehr beweisen muss, dass sie stark ist – ein Orang-Utan, der begreift, dass wahre Kraft manchmal darin liegt, sich zum ersten Mal ohne Umweg zu öffnen.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Wahrlich, dieser war Gottes Sohn</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zum Hauptmann unter dem Kreuz ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/44TD-meNBt4?rel=0" title="Wahrlich, dieser war Gottes Sohn – Der Hauptmann" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/se8", label:"SE8 – Der Orang-Utan: Subtyp-Profil"},
        {route:"beruehmte-winston-churchill", label:"Portrait: Winston Churchill (SE8w9)"},
        {route:"bibel-johannes-der-geliebte", label:"Bibel-Porträt: Johannes, der geliebte Jünger (SX7w6)"},
        {route:"bibel-kaiphas", label:"Bibel-Porträt: Der Hohepriester Kaiphas (SO8w9)"},
      ])}
    </div>
  `);
}

function kaiphasPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-kaiphas-portrait.jpg" alt="Der Hohepriester Kaiphas – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Der Hohepriester Kaiphas</p>
        <p class="krim-portrait-typ">SO8w9 · Sozialer Typ 8 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Wächter der Ordnung – Tierentsprechung: Löwe</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Tierentsprechung: Löwe" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Ihr versteht nichts; ihr bedenkt nicht, dass es besser ist, wenn ein einziger Mensch für das Volk stirbt, als dass das ganze Volk zugrunde geht.« (Joh 11,50)</p>

        <h2 class="vb-section">1. Der Löwe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Löwe</strong> ist das Tier der sozialen Acht – er verteidigt nicht sich selbst, sondern das Rudel, das System, das Kollektiv, mit einer Autorität, die niemand infrage stellt, auch wenn sie dafür gehasst wird. Er hatte früh gelernt, dass Führung kein Privileg war, sondern Last. Kaiphas war kein Träumer, kein Theoretiker. Er kannte die politischen Spannungen, die Risse in der Tempelmauer, die Unruhe im Volk. Er war Priester, aber zuerst: Verwalter eines bedrohten Gleichgewichts.</p>
          <p class="vb-intro">Rom atmete ihm im Nacken, die Zeloten zündelten im Untergrund, das Volk war gläubig, aber unberechenbar. Kaiphas war nicht zum Hohepriester geboren, aber er hatte sich hineingebissen, gelernt, den Rat zu führen, ohne zu schreien, Respekt zu erzeugen, ohne geliebt zu werden. Die soziale Acht strebt nicht nach Beliebtheit. Sie verteidigt das Kollektiv, selbst wenn sie dafür gehasst wird.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Acht: Machtverantwortung statt Machtgier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er trug das Brustschild des Amtes wie eine zweite Haut. Er kannte das Gesetz und auch die Grauzonen. Er kannte die Macht, aber er war nicht machtgierig, er war machtverantwortlich. Wenn etwas einstürzte, würde er darunter liegen, nicht die Pharisäer, nicht das Volk, er. Dann kam dieser Mann, wortgewaltig, mit den Armen, mit den Frauen, mit den Krüppeln und den Kindern. Jesus von Nazareth. Kaiphas hatte ihn beobachtet, nicht aus Neugier, aus Pflicht.</p>
          <p class="vb-intro">Was er sah, machte ihm keine Angst, aber es beunruhigte ihn, nicht weil Jesus Gesetze brach, sondern weil er Menschen verband, ohne Machtmittel. Kaiphas spürte: Das war gefährlich, nicht für ihn, nicht für den Tempel, sondern für das, was das Volk zusammenhielt. Er berief den Hohen Rat, wog Worte ab, ließ Stimmen sprechen. Und dann sagte er: »Ihr versteht nichts.« Und in ihm sprach nicht der Zorn, sondern die Verantwortung.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Schwere, in sich ruhende Ordnung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> gibt der sozialen Acht eine gewichtige, tief in sich ruhende Autorität – sie herrscht nicht durch charismatische Dynamik, sondern durch bedächtiges, fast unerschütterliches Abwägen des Rechts. Die Nacht hatte sich über Jerusalem gesenkt wie ein Mantel aus Granit. Kaiphas saß allein im Inneren des Tempelkomplexes. Nun war Stille, doch es war keine friedliche Stille, sondern die aufgeladene Spannung vor einem Gewitter.</p>
          <p class="vb-intro">Er erinnerte sich an seine eigenen Worte, gesprochen mit der Autorität eines Mannes, der sich sicher wähnt: »Es ist besser, dass ein Mensch stirbt, als dass das ganze Volk zugrunde geht.« In diesem Satz lag das ganze Dilemma: Ordnung oder Gnade, Stabilität oder Wahrheit. Und plötzlich, in der Stille dieser Nacht, überkam ihn die Ahnung, dass das, was er als Ordnung verteidigte, in Wahrheit vielleicht schon lange keine war. Genau dieses schwere, wortkarge Ringen im Verborgenen, statt im lauten Auftritt, trägt die Handschrift des Neunerflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Brüche im eigenen Fundament</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Tage nach dem Prozess waren wie in Nebel gehüllt. Kaiphas war nicht müde, sondern innerlich ausgelaugt, wie eine Mauer, die über Jahrzehnte jedem Sturm getrotzt hatte, nun aber haarfeine Risse in sich spürte. Er hatte die Ordnung gewahrt, das System vor dem Chaos geschützt. Aber tief in ihm meldete sich eine andere Stimme, keine laute, eine leise. War es wirklich Gottes Wille gewesen, was dort vor sich ging? Hatte er aus Pflicht oder aus Angst gehandelt?</p>
          <p class="vb-intro">Er schloss die Augen und sah das Gesicht Jesu, still und aufrecht, nicht trotzig, sondern durchdringend. Kaiphas hatte diesen Blick zuerst als Herausforderung empfunden. Doch nun erschien er ihm wie eine Einladung, nicht zu Rebellion, nicht zu Auflösung, sondern zu Wahrheit. In der Stille, verborgen vor aller Welt, kam ihm das erste Mal ein schlichtes Gebet über die Lippen: »Herr, wenn ich gefehlt habe, lass mich nicht in der Lüge erstarren.«</p>
        </blockquote>

        <h2 class="vb-section">5. Die Macht verliert ihren Halt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Woche nach dem Tod Jesu brachte Unruhe, nicht wie ein Aufstand, sondern wie eine Verdichtung. Ein Gerücht durchlief die Stadt: Der Gekreuzigte sei nicht mehr im Grab. Er hörte davon, nicht wie ein neugieriger Beobachter, sondern wie ein Mann, dem man ein vertrautes Fundament entzogen hatte. Und in Kaiphas wuchs keine Wut, sondern etwas anderes: Erschöpfung. Die soziale Acht lebt aus Überzeugung. Aber wenn das, woran sie geglaubt hat, brüchig wird, dann beginnt nicht ein äußerer Sturm, sondern ein innerer Zerfall.</p>
          <p class="vb-intro">Er sah wieder diesen Blick, den einen, stillen, letzten Blick Jesu, und zum ersten Mal wagte er zu denken: Was, wenn er tatsächlich… Er sprach es nicht aus, aber es war da, ein Gedanke, der ihn nicht losließ. Er erinnerte sich an Mose, an Elia, an Jeremia, und dachte: Sie waren alle unbequem, alle wurden bekämpft, nicht weil sie Unrecht taten, sondern weil sie das Unsagbare wagten.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Nicht mehr blind</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Jahre vergingen. Kaiphas blieb Hohepriester, führte das Amt weiter, sorgte für Ordnung. Er war kein gebrochener Mann, nicht äußerlich. Aber etwas in ihm war still geworden, nicht aus Schwäche, sondern aus Einsicht. Eines Morgens blickte er in den polierten Bronze-Spiegel und flüsterte: »Wenn er es wirklich war, dann möge er mich finden.« Er war nicht bekehrt, er war nicht erlöst, aber: Er war nicht mehr blind.</p>
          <p class="vb-intro">Die reife soziale Acht erkennt, dass Stärke nicht im Schutz liegt, sondern im Mut, sich zu hinterfragen, und dass nicht jedes Urteil, das man im Namen der Ordnung fällt, vor dem Licht bestehen kann. Das ist das Geschenk der SO8w9: eine Macht, die lernt, dass wahrer Schutz manchmal bedeutet, die eigene Autorität selbst zu prüfen – ein Löwe, dessen Tür sich nur einen Spalt öffnet, aber genug, damit ein anderer Wind ihn erreichen kann.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Der Hüter des Volkes</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Kaiphas ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/mCXz3BLUgeo?rel=0" title="Der Hüter des Volkes – Kaiphas" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/so8", label:"SO8 – Der Löwe: Subtyp-Profil"},
        {route:"beruehmte-karl-marx", label:"Portrait: Karl Marx (SO8w9)"},
        {route:"bibel-der-hauptmann-unter-dem-kreuz", label:"Bibel-Porträt: Der Hauptmann unter dem Kreuz (SE8w9)"},
        {route:"bibel-saulus-auf-dem-weg-nach-damaskus", label:"Bibel-Porträt: Saulus auf dem Weg nach Damaskus (SX8w7)"},
      ])}
    </div>
  `);
}

function saulusAufDemWegNachDamaskusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-saulus-auf-dem-weg-nach-damaskus-portrait.jpg" alt="Saulus auf dem Weg nach Damaskus – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Saulus auf dem Weg nach Damaskus</p>
        <p class="krim-portrait-typ">SX8w7 · Sexueller Typ 8 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Vom Feuer getroffen – Tierentsprechung: Krokodil</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Tierentsprechung: Krokodil" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Noch schnaubte Saulus Drohung und Mord gegen die Jünger des Herrn.« (Apg 9,1)</p>

        <h2 class="vb-section">1. Das Krokodil</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Krokodil</strong> ist das Tier der sexuellen Acht – unaufhaltsam, verzehrend in seiner Intensität, gebunden an Kraft, an Klarheit, an das Wahre, auch wenn es brennt. Er war wie ein Brand in einer trockenen Landschaft: schnell, unaufhaltsam, nicht böswillig, aber alles verzehrend, was sich ihm in den Weg stellte. Saulus war jung, gebildet, gefördert von den Besten, ein Schüler des Gamaliel, ein Pharisäer mit scharfem Blick und einem Herzen, das nicht ruhte, solange etwas Unwahres atmete.</p>
          <p class="vb-intro">Er hasste nicht, er verfolgte, nicht aus Bosheit, sondern aus einem Gefühl von Richtigkeit. Die neue Bewegung der Nazarener bedrohte das Heilige, verwässerte das Gesetz. Saulus verstand sich als Wächter, als der, der den Riss im Fundament nicht nur sah, sondern mit Feuer schloss. Die sexuelle Acht liebt nicht milde. In seinem Blick lag keine Unsicherheit. Er war konsequent, niemals inkonsequent, tötete nicht mit den Händen, aber mit Worten, mit Mandaten, mit System.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Acht: Ein Eid, mit ganzer Leidenschaft gelebt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Loyalität zum Gesetz war für ihn kein Konstrukt, sie war ein Eid, den er als sexueller Subtyp der Acht mit ganzer Leidenschaft lebte. Als er sich auf den Weg nach Damaskus machte, tat er es mit einem Brief in der Hand und einem Feuer im Herzen. Er wollte reinigen, retten, zerstören, damit das Wahre blieb. Dass er selbst der war, der gereinigt werden musste, ahnte er nicht, noch nicht.</p>
          <p class="vb-intro">Die Hitze der Sonne brannte durch das staubige Gewand, als Saulus sich weiter seinen Weg bahnte. Befeuert vom Zorn über das, was er als Gotteslästerung empfand, fühlte er sich getragen von einer Mission, größer als er selbst. Und doch, verborgen unter diesem flammenden Sendungsbewusstsein, zuckte ein kaum erkennbares Vibrieren.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerflügel: Verzehrende, expansive Energie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel (w7)</strong> gibt der sexuellen Acht eine flammende, nach außen expandierende Intensität – die Energie sucht sich Bewegung, Ziele, Bahnen, statt sich still zu sammeln. Dann kam das Licht, nicht wie das Licht der Sonne, nicht wie Feuer oder Blitz, sondern eine Wucht, ein Strahl, der nicht nur traf, sondern eindrang. Es war kein Licht, das beleuchtete, sondern eines, das offenbarte. Saulus schrie, doch seine Stimme wurde nicht gehört.</p>
          <p class="vb-intro">»Saul, Saul, warum verfolgst du mich?« Die Stimme kam nicht von außen, sie kam von dort, wo bisher nur der Wille gewohnt hatte. Saulus war gefallen, nicht nur körperlich. Und zum ersten Mal in seinem Leben wusste er nicht, was als Nächstes zu tun sei. Genau diese ungebremste, nach außen drängende Wucht, die selbst im Zusammenbruch noch alles ergreift, trägt die Handschrift des Siebenerflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Drei Tage Blindheit: Der Sturz ins Innere</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er wusste nicht, wie lange er gelegen hatte. Das Licht war fort, aber es hatte ihn markiert. Er sah nichts, nur Dunkelheit. Doch diese Dunkelheit war nicht leer, sie war schwanger mit Wahrheit. In Damaskus blieb er drei Tage, aß nicht, trank nicht, sprach nicht, er rang, mit Gott, mit sich, mit dem, was war. Die sexuelle Acht fällt nicht in ein neues Leben, sie kämpft sich hindurch. Ihre Wandlung geschieht nicht leise, sondern durch inneres Beben.</p>
          <p class="vb-intro">In der Dunkelheit war kein Trost, aber Gegenwart. Er konnte sie nicht sehen, aber er wusste: Etwas war bei ihm. Und zum ersten Mal verstand er das Wort »Gnade« nicht als Theorie, sondern als etwas, das nicht verdient werden kann, nur angenommen.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Hand auf den Augen: Der erste Blick</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ananias, ein jüdischer Christ in Damaskus, hörte in der Nacht eine Stimme: »Steh auf, geh in die gerade Straße, frage nach Saulus von Tarsus.« Ananias erschrak, nicht vor der Stimme, sondern vor dem Namen. »Herr, von vielen habe ich gehört, wie viel Böses dieser Mann getan hat.« Doch die Antwort war einfach: »Er ist mein auserwähltes Werkzeug.« Ananias gehorchte, nicht aus Mut, sondern aus Vertrauen.</p>
          <p class="vb-intro">Er trat heran, legte ihm die Hände auf und sprach nur: »Bruder Saulus, der Herr hat mich gesandt…« Saulus hörte und weinte, nicht laut, aber so, dass sein ganzer Körper zuckte. Die Hand auf seinen Augen war wie ein Gewicht, das nicht drückte, sondern freisetzte. Und dann: Licht. Nicht das Licht von Damaskus, sondern das Licht im Inneren. Er sah, nicht nur die Welt, sondern seinen Platz in ihr. Und er stand auf, nicht stolz, nicht mächtig, aber verbunden.</p>
        </blockquote>

        <h2 class="vb-section">6. Vom Brennen zur Hingabe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Mann, der aus dem Haus in Damaskus trat, war nicht mehr der, der es betreten hatte. Saulus, der Eiferer, war nicht verschwunden, aber verwandelt. Er war nicht sanft geworden, doch seine Kraft hatte ein neues Ziel: nicht mehr zerschlagen, sondern aufrichten, nicht mehr ausmerzen, sondern verkündigen. Die sexuelle Acht verliert nicht ihre Stärke, sie übergibt sie. Und das ist ihr größter Sieg. Er begann zu lehren, nicht zaghaft, sondern mit derselben Leidenschaft, die einst die Jünger verfolgte. Doch nun brannte sie für sie.</p>
          <p class="vb-intro">Er wurde zum Paulus, nicht weil er sich neu erfand, sondern weil er endlich der wurde, der immer gemeint war. Er würde leiden, verfolgt werden, verlassen, eingekerkert, missverstanden. Aber er würde nicht aufhören. Denn das Licht, das ihn getroffen hatte, brannte nun in ihm, und durch ihn. »Ich lebe, doch nun nicht ich, sondern Christus lebt in mir.«</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Saulus auf dem Weg nach Damaskus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Saulus ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/mEc9zE0a-Ow?rel=0" title="Saulus auf dem Weg nach Damaskus" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/sx8", label:"SX8 – Das Krokodil: Subtyp-Profil"},
        {route:"beruehmte-giacomo-puccini", label:"Portrait: Giacomo Puccini (SX8w7)"},
        {route:"bibel-kaiphas", label:"Bibel-Porträt: Der Hohepriester Kaiphas (SO8w9)"},
        {route:"bibel-jakobus", label:"Bibel-Porträt: Jakobus, der Sohn des Alphäus (SE9w1)"},
      ])}
    </div>
  `);
}

function jakobusPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-jakobus-portrait.jpg" alt="Jakobus – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jakobus, der Sohn des Alphäus</p>
        <p class="krim-portrait-typ">SE9w1 · Selbsterhaltende Typ 9 mit Einserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Schlaf vor dem Sturm – Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Und als sie hineingekommen waren, stiegen sie hinauf in das Obergemach … Jakobus, der Sohn des Alphäus.« (Apostelgeschichte 1,13)</p>

        <h2 class="vb-section">1. Der Elefant</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Elefant</strong> ist das Tier der selbsterhaltenden Neun – er vergisst nicht und bewegt sich in seinem eigenen Rhythmus, ruhig, gründend, mit einer Präsenz, die den Raum verändert, ohne ihn zu beherrschen. Jakobus war ein stilles Kind. Nicht, weil er nichts zu sagen gehabt hätte, sondern weil er instinktiv wusste, dass Worte Gewicht haben – und dass jedes ausgesprochene Wort eine Bewegung im Raum erzeugt, eine Welle im Teich des Miteinanders. Seine Mutter erzählte später oft, wie friedlich er als Säugling geschlafen habe, selbst wenn draußen ein Gewitter tobte: »Wie ein Fels in der Brandung, als ob nichts ihn erreichen könnte.«</p>
          <p class="vb-intro">Doch es war weniger Fels als Nebel – ein Rückzug nach innen, weich und unbeirrbar. Wenn andere Kinder tobten, blieb er sitzen; wenn Konflikte drohten, zog er sich in die hinteren Reihen zurück, nicht aus Angst, sondern aus einem tiefen, kaum bewussten Bedürfnis nach Harmonie. Genau wie der Elefant nichts vergisst und dennoch nie hastet, empfand Jakobus sein Unsichtbarwerden als seine stille Aufgabe, das Gleichgewicht der Welt zu wahren.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Neun: Sicherheit durch Rituale und Rückzug</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Er liebte Rituale. Das morgendliche Teekochen, das sorgfältige Falten seiner Kleidung, das stille Sitzen im Garten Gethsemane – all das verlieh ihm ein Gefühl von Sicherheit, von innerer Ordnung in einer Welt, die ihm oft zu laut, zu fordernd erschien. Schon früh begann er, sich in Geschichten zu flüchten, in Bücher und innere Landschaften. Dort konnte er sein, ohne sich erklären zu müssen. Dort konnte er bestehen, ohne Stellung zu beziehen.</p>
          <p class="vb-intro">Und so wuchs Jakobus heran wie eine Pflanze im Schatten – unbehelligt, unauffällig, aber mit tiefen Wurzeln. Die Stille war sein Element, nicht aus Mangel, sondern aus Wahl. Doch wie jedes Gleichgewicht, das durch Vermeidung entsteht, war auch seines fragil. Denn unter der glatten Oberfläche ruhte etwas, das noch keine Stimme hatte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Innere Ordnung als stiller Kompass</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der selbsterhaltenden Neun ein feines Gespür für Richtigkeit, für die Ordnung der Dinge – nicht als lautstarke Prinzipientreue, sondern als eine leise, zurückgezogene Genauigkeit im eigenen Ritual. Gethsemane war für Jakobus kein Ort der Lehre, sondern ein Ort des Innehaltens. Manchmal lehnte er sich gegen einen Baum, schloss die Augen, lauschte dem Wind. In dieser Nähe fand er Frieden, nicht als Verdrängung, sondern als Zustand des Einverstandenseins.</p>
          <p class="vb-intro">Jesus vertraute ihm, nicht als Sprecher, nicht als Führer, sondern als stillen Begleiter. Und Jakobus folgte, wie er immer folgte, mit einem ruhigen Schritt und dem Wunsch, Teil zu sein, ohne zu stören. Diese Genauigkeit im Kleinen, dieses treue Einhalten des eigenen inneren Maßes, selbst wenn niemand hinsah, trägt die Handschrift des Einserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Sturm, vor dem er schlief</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Doch etwas veränderte sich. In den letzten Tagen vor dem Passahfest lag eine Spannung in der Luft, die selbst Jakobus nicht ignorieren konnte. Als sie in jener Nacht wieder nach Gethsemane gingen, war es nicht wie zuvor. Jakobus spürte es. Und dennoch, als Jesus ihn bat zu wachen, als der Sturm der Angst durch die Seele des Meisters fuhr, da schlief er. Nicht aus Gleichgültigkeit. Nicht aus Trotz. Sondern weil seine Seele den Schmerz noch nicht halten konnte. Wie ein Kind, das sich einrollt, wenn der Donner zu laut wird, suchte er im Schlaf Schutz vor dem Unaussprechlichen.</p>
          <p class="vb-intro">Er wachte auf, als der Wind aufrischte. Kein Gleichmaß, keine Ruhe mehr im Atem des Meisters. Etwas kämpfte. Und Jakobus war zu spät. Er hatte geschlafen, wo Wachen verlangt war. Er hatte Frieden gesucht, wo ein Mensch im Kampf stand. In seinem Schweigen lag kein Trotz, sondern ein schmerzliches Eingeständnis: Er hatte versagt, nicht in Taten, sondern im Sein.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Welt ohne Mitte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Seit jener Nacht im Garten war etwas zerbrochen, das er nicht benennen konnte. Er hatte nicht nur den Meister verloren, sondern auch die Ordnung in sich selbst. Was ihm Halt gegeben hatte – die Nähe, das Dienen, das stille Mitgehen – war aus den Fugen geraten. Jakobus zog sich zurück, wie ein Tier, das seine Wunden leckt, nicht sichtbar, aber auch nicht gänzlich fort. Er war noch da. Er blieb. Aber sein Dasein war wie Nebel, formbar, tastend, auf der Suche nach etwas, das noch keinen Namen hatte.</p>
          <p class="vb-intro">Denn tief in ihm regte sich ein Wissen, das älter war als alle Worte: Dass es Zeiten gibt, in denen man nicht kämpfen, nicht fliehen, nicht handeln kann. Zeiten, in denen man nur ausharren kann, nicht als Schwäche, sondern als Form des Überlebens. Und Jakobus harrte aus. Wie eine Wurzel, die nicht blüht, aber weiterträgt. Wie die Stille, die nicht bricht, aber alles in sich birgt.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Treue, die bleibt, auch ohne Worte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Auch Jakobus sah den Auferstandenen, nicht wie Thomas, nicht wie Petrus, nicht wie Maria. Sondern auf seine Weise. Wortlos. In Präsenz. Im Frieden. Und Jakobus verstand: Es war nicht sein Versagen, das zählte. Es war seine Treue. Dass er geblieben war. Dass er nicht davongelaufen war vor der eigenen Ohnmacht. Dass er sich selbst, trotz allem, nicht aufgegeben hatte.</p>
          <p class="vb-intro">Von da an wandelte sich etwas in ihm, nicht dramatisch, sondern wie ein Fluss, der wieder seinen Lauf findet. Jakobus wurde ein Träger der Beständigkeit, kein Anführer im klassischen Sinn, aber ein ruhender Pol. Einer, auf den man sich verlassen konnte. Einer, der nicht reden musste, um gehört zu werden. Er hatte gelernt, dass auch in der Passivität Kraft liegt, wenn sie nicht Flucht ist, sondern Warten auf das Richtige – und dass der Sturm, den er einst verschlafen hatte, nicht das Ende war, sondern der Anfang eines Weges, der seine eigene Tiefe brauchte.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Jakobus – der Leise im Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Jakobus ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/_l-CH4kXIiQ?rel=0" title="Jakobus – der Leise im Schatten" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/se9", label:"SE9 – Der Elefant: Subtyp-Profil"},
        {route:"beruehmte-laozi", label:"Portrait: Laotse (SE9w1)"},
        {route:"bibel-saulus-auf-dem-weg-nach-damaskus", label:"Bibel-Porträt: Saulus auf dem Weg nach Damaskus (SX8w7)"},
        {route:"bibel-barabbas", label:"Bibel-Porträt: Barabbas (SO9w1)"},
      ])}
    </div>
  `);
}

function barabbasPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-barabbas-portrait.jpg" alt="Barabbas – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Barabbas</p>
        <p class="krim-portrait-typ">SO9w1 · Soziale Typ 9 mit Einserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Der Freigelassene ohne Stimme – Tierentsprechung: Büffel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Tierentsprechung: Büffel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Da schrien sie alle: Nicht diesen, sondern Barabbas! – Barabbas aber war ein Aufrührer.« (Johannes 18,40)</p>

        <h2 class="vb-section">1. Der Büffel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Büffel</strong> ist das Tier der sozialen Neun – er lebt in der Herde, bewegt sich mit ihr, verschmilzt mit ihrer Richtung, ohne selbst vorauszuziehen. Barabbas war da, bevor sie seinen Namen riefen. Saß in einem Winkel, wo das Licht nur streifte, zwischen Stein und Schatten, unter der Erde. Der Kerker roch nach Eisen, nach alter Angst und feuchtem Brot. Barabbas kannte den Geruch. Er hatte ihn in sich aufgenommen wie ein Tier die Fährte, nicht aus Furcht, sondern aus Gewohnheit.</p>
          <p class="vb-intro">Niemand fragte Barabbas, wer er war. Sie sagten, er sei ein Mörder, ein Aufrührer, ein Störer der Ordnung. Und Barabbas widersprach nicht, nicht weil es stimmte, sondern weil er sich selbst nicht so genau kannte. Er war mitgerannt, damals, als die Steine flogen. Hatte geschrien, als andere schrien. Hatte geschlagen, als man ihn schlug. Nicht aus Hass, nicht einmal aus Wut, sondern weil er das Beben in der Menge spürte und nicht draußen stehen wollte. Wie der Büffel in der Herde, der sich der Bewegung der anderen anschließt, ohne selbst die Richtung zu bestimmen, war Barabbas ein Mann, der dazugehören wollte, nicht durch Macht, sondern durch Mitgehen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Neun: Verschmelzung mit der Menge statt eigener Stimme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Barabbas war keiner, der auffiel. Er schloss sich an, verschmolz mit dem Lärm, mit dem Zorn, mit dem Ruf nach Gerechtigkeit. Und irgendwann war er Teil davon, so sehr, dass niemand mehr fragte, was er selbst dachte. Er auch nicht. Denn denken, das bedeutete trennen. Und Trennung war das, was er fürchtete. Er wollte verbunden bleiben, mit dem Volk, mit der Sache, mit der Bewegung.</p>
          <p class="vb-intro">Als man ihn festnahm, wehrte er sich kaum. Nicht aus Mutlosigkeit, sondern weil er das Spiel durchschaute: heute Freund, morgen Feind, heute gefeiert, morgen vergessen. Barabbas war müde, nicht von der Welt, sondern von den Rollen, die man ihm überstülpte. Und doch: er blieb. Weil es immer noch besser war, irgendwo zu sein, als nirgends dazuzugehören.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Ein leises moralisches Unbehagen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der sozialen Neun ein feines, meist unausgesprochenes Gespür für Richtig und Falsch, das nicht laut urteilt, sondern als stille innere Unruhe wirkt, wenn etwas nicht stimmt. Barabbas war frei. Und doch hatte sich nichts gelöst. Kein Jubel, kein Triumph. Nur Stille in ihm, und die bohrende Frage: Warum ich? Nicht aus Reue, denn er hatte nichts zu beichten, was nicht die ganze Stadt mitgetragen hätte. Sondern aus einem Unbehagen, das tiefer ging: Er war zum Symbol geworden, freigelassen, aber nicht aus sich selbst heraus, sondern weil ein anderer geopfert wurde.</p>
          <p class="vb-intro">Er wusste nicht, wie der andere hieß, bis jemand es ihm sagte: Jesus von Nazareth. Einer, der nicht kämpfte wie er, der nicht rief, nicht schlug, nicht drängte. Einer, der schwieg, als man ihn anklagte. Barabbas spürte, dass diese Stille mehr sagte als jede Parole, mehr fragte als jedes Urteil. Und das machte ihn unsicher, denn er verstand es nicht. Genau dieses leise, hartnäckige moralische Wägen, das keine Ruhe gibt, bis es verstanden ist, trägt die Handschrift des Einserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Die verlorene Mitte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Barabbas verließ die Stadt. Nicht überstürzt, nicht im Zorn, sondern wie einer, der nicht mehr gebraucht wird. Jerusalem hatte ihn befreit, aber nicht aufgenommen. Er wanderte durch staubige Wege, kehrte hier und da ein, sagte wenig, hörte viel, und blieb überall fremd, auch sich selbst. Was früher Stärke war, das Mitlaufen, das Mitschwingen, das Aufgehen im Ruf der Menge, erschien ihm jetzt hohl. Und er merkte: Er war nicht der, für den sie ihn gehalten hatten. Aber auch nicht der, der er selbst hätte sein wollen.</p>
          <p class="vb-intro">In einem Dorf am Rand von Galiläa blieb er länger. Niemand erkannte ihn. Er arbeitete mit den Händen, reparierte Zäune, half bei der Olivenernte. Die Menschen dort fragten nicht viel. Und das war gut, denn Barabbas hatte nichts zu erklären. Er wollte nicht erinnern. Er wollte nur sein. Aber auch dort, in der scheinbaren Ruhe, war da ein inneres Grollen, kein Zorn, das kannte er. Nein, es war etwas Tieferes: ein Nichtverstandensein, das aus ihm selbst kam. Nicht die Welt hatte ihn verstoßen, er selbst war aus sich gefallen.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: Ein stilles Wachwerden über Jahre</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Jahre vergingen, und niemand sprach mehr seinen Namen. Barabbas war verschwunden, nicht tot, nicht geflohen, sondern verklungen im Gewebe der Welt. Doch etwas war anders geworden. Nicht sichtbar, nicht sofort, aber spürbar in seinem Blick, in der Art, wie er auf den Abendhimmel sah. Er lebte nicht mehr nur in der Welt, er begann, auch in sich selbst zu wohnen. Er hörte von den Dingen, die geschahen, vom Tod am Kreuz, vom leeren Grab. Und in all dem fragte er sich: Was wäre gewesen, wenn ich geblieben wäre? Wenn ich nicht losgelöst, sondern verwandelt worden wäre?</p>
          <p class="vb-intro">Doch dann kam ein Gedanke, leise wie der Wind in den Olivenbäumen: Vielleicht war auch mein Weg Teil des Ganzen. Er betrat keine Synagogen, hielt keine Reden, wurde kein Jünger, kein Lehrer, kein Apostel. Und doch trug er etwas mit sich, ein unausgesprochenes Wissen, dass sein Leben nicht ihm selbst gehörte, und doch von ihm verlangt war. Am Ende, als sein Haar grau war und seine Hände Schwielen trugen, konnte Barabbas sagen: Ich habe gelebt. Nicht laut. Nicht heldisch. Aber wach. Und wer genau hinsah, konnte in seinem Gesicht den Schatten einer Verwandlung erkennen, nicht als Blitz, sondern als Licht, das über Jahre durch die Risse der Seele sickerte.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Lied: Der Freigelassene – Barabbas</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Barabbas ist ein eigener Song entstanden, der seine seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/Hz6P8Sr1iBk?rel=0" title="Der Freigelassene – Barabbas" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/so9", label:"SO9 – Der Büffel: Subtyp-Profil"},
        {route:"beruehmte-peter-falk", label:"Portrait: Peter Falk (SO9w1)"},
        {route:"bibel-jakobus", label:"Bibel-Porträt: Jakobus, der Sohn des Alphäus (SE9w1)"},
        {route:"bibel-mutter-maria", label:"Bibel-Porträt: Mutter Maria (SX9w1)"},
      ])}
    </div>
  `);
}

function mutterMariaPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-bibel")}
      <div id="js-back-target" data-route="enneagramm-bibel" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bibel-mutter-maria-portrait.jpg" alt="Mutter Maria – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mutter Maria</p>
        <p class="krim-portrait-typ">SX9w1 · Sexuelle Typ 9 mit Einserflügel</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Die Tiefe trägt – Tierentsprechung: Faultier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Tierentsprechung: Faultier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic;text-align:center;margin-bottom:1.5rem;">»Bei dem Kreuz Jesu standen seine Mutter und die Schwester seiner Mutter, Maria, die Frau des Klopas, und Maria Magdalena.« (Johannes 19,25)</p>

        <h2 class="vb-section">1. Das Faultier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Faultier</strong> ist das Tier der sexuellen Neun – es umklammert, ohne zu greifen, es trägt sein Gewicht in aller Ruhe, ganz gegenwärtig, ganz verbunden, ohne Eile. Maria war nie laut gewesen. Nicht als Mädchen, nicht als Mutter, nicht als Jüngerin. Ihre Stimme war wie das Licht am frühen Morgen, kaum zu greifen, aber nicht zu übersehen. Sie war dort, wo Leben begann. Und sie blieb, wo Leben endete. Immer in der Nähe, nicht im Vordergrund, aber als innerer Mittelpunkt dessen, was geschah.</p>
          <p class="vb-intro">Menschen kamen zur Ruhe, wenn sie in ihrer Gegenwart waren, ohne zu wissen, warum. Vielleicht, weil sie nichts forderte. Vielleicht, weil sie alles empfing. Genau wie das Faultier, das sich an seinen Ast klammert, ohne ihn zu besitzen, war Marias Nähe nicht besitzergreifend, aber unverrückbar. Sie konnte sich in den Hintergrund stellen, ohne sich selbst zu verlieren. Und doch, ihr Dasein hatte Gewicht.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Neun: Lieben durch Bleiben, nicht durch Besitz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ihre Art zu lieben war keine Frage, keine Geste, kein Anspruch. Sie liebte, indem sie blieb. Maria war nicht naiv. Sie wusste, dass sein Weg nicht ins Haus zurückführen würde. Sie kannte die Schriften, die Zeichen, die Tiefe seines Blicks. Und doch war ihre Hoffnung keine Forderung. Sie wollte ihn nicht retten. Sie wollte nur nicht von ihm getrennt sein. Die Verbindung war ihr Halt, nicht um ihn zu besitzen, sondern um ihn nicht allein zu lassen.</p>
          <p class="vb-intro">Die anderen diskutierten, widersprachen, forderten, flohen. Sie blieb. Und in diesem Bleiben war sie nicht schwach. Sie war der Anker, an dem die Liebe sich erinnerte, wer sie war. Sondern: Ich bin da, weil du bist – diese vollständige, bedingungslose Verschmelzung ohne jeden Anspruch auf Gegenleistung ist der Kern der sexuellen Neun.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Reine, prinzipientreue Hingabe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der sexuellen Neun eine stille moralische Klarheit, eine Reinheit der Hingabe, die nicht aus Berechnung oder Bedürfnis entsteht, sondern aus einer inneren, fast unbeirrbaren Richtigkeit. Der Weg nach Golgatha war kein Weg, den man freiwillig ging. Nicht als Freund, nicht als Mutter. Und doch ging sie ihn, nicht aus Pflicht, sondern weil sie nicht anders konnte. In der Menge war sie nicht laut, nicht auffällig, nicht haltend. Sie ging. Wie eine Linie durch das Chaos.</p>
          <p class="vb-intro">Andere wichen zurück. Selbst die Jünger, stark in der Stunde der Wunder, wurden klein in der Stunde der Angst. Aber Maria stand. Sie weinte nicht laut. Sie klagte nicht. Sie schrie nicht gegen das Unrecht. Ihr Schmerz hatte keine Worte, aber er hatte Tiefe. Diese unbestechliche, fast asketische Stille inmitten des Zusammenbruchs aller anderen trägt die Handschrift des Einserflügels.</p>
        </blockquote>

        <h2 class="vb-section">4. Im Innersten verwundet</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Es war vorbei. Das Licht war gegangen, das Wort war verstummt, der Leib war kalt. Maria stand noch da, als die Menge sich verlor. Denn sie sah nicht mit den Augen, sondern mit dem Herzensgrund, in dem Liebe nicht stirbt, auch wenn der Körper fällt. Ihre Hände waren leer, aber nicht hilflos. Ihre Augen waren trocken, aber nicht kalt. Ihr Inneres war verwundet, nicht von einem Schlag, sondern von einem Riss, der nicht außen sichtbar war, sondern innen ewig blieb. Und doch: Es war kein Zorn in ihr. Kein Aufstand. Kein Schrei nach Gerechtigkeit.</p>
          <p class="vb-intro">Andere hätten sich verloren, in Bitterkeit, in Wut, in Schuld. Maria nicht. Nicht, weil sie stärker war, sondern weil sie tiefer war. Sie hatte sich nie aus der Mitte herausbewegt. Ihre Nähe zu Jesus war nicht äußerlich gewesen, nicht Besitz, nicht Mutterstolz, nicht Projektion. Sie nahm den Schmerz auf wie ein Gefäß, nicht um daran zu zerbrechen, sondern um ihn zu tragen. Für die, die flohen. Für die, die es nicht aushielten.</p>
        </blockquote>

        <h2 class="vb-section">5. Die unsichtbare Mitte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Und dann kam der Morgen. Maria Magdalena kehrte zurück, atemlos, fassungslos: »Ich habe den Herrn gesehen.« Die Jünger zweifelten, rannten, stritten, hofften. Doch Maria, die Mutter, tat keines dieser Dinge. Sie saß still, mit dem Wissen in sich, dass die Liebe nicht stirbt. Es war, als hätte sie auf ihn gewartet, nicht auf den Beweis. Als wüsste sie, dass die Liebe, wenn sie ganz ist, auch den Tod mitnimmt, und dennoch wiederkehrt.</p>
          <p class="vb-intro">Maria lebte weiter. Nicht als Figur des Glanzes, nicht als Stimme der Bewegung. Sie schrieb keine Briefe, predigte keine Worte, gründete keine Kirchen. Und doch, sie war die Mitte, um die sich vieles ordnete. Nicht sichtbar, nicht offiziell, aber spürbar. Wo sie war, da war Sammlung. Wo sie schwieg, da wuchs Vertrauen. Sie war kein Zentrum der Macht, sondern der Tiefe. Keine Anführerin, sondern eine Quelle. Sie wollte nichts für sich, und gerade deshalb fand jeder bei ihr Raum.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Nicht dass sie trug, sondern was sie trug</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Man sagt, sie sei gestorben in Frieden. Kein dramatischer Abschied, kein letztes Wort. Sondern ein Hineingehen, wie jemand, der heimkehrt. Sie hatte nicht das Weltliche überwunden. Sie hatte es durchliebt. Und das war ihre Größe: Nicht, dass sie stand, sondern wie sie stand. Nicht, dass sie trug, sondern was sie trug. Und dass sie nie losließ, was einmal in Liebe gebunden war.</p>
          <p class="vb-intro">Sie war wie Wasser, das umhüllt, ohne zu verschlingen. Wie Licht, das wärmt, ohne zu blenden. Ihre Präsenz brauchte keine Erklärung, keinen Trost, kein Warum. Sie war da. Und weil sie da war, war selbst der Tod nicht leer.</p>
        </blockquote>

        <h2 class="vb-section">7. Das Lied: Sie barg Ihn in sich – Mutter Maria</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Mutter Maria ist ein eigener Song entstanden, der ihre seelische Stimme hörbar macht.</p>
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:10px;overflow:hidden;margin:1rem 0;">
            <iframe src="https://www.youtube.com/embed/gJc3U025VpA?rel=0" title="Sie barg Ihn in sich – Mutter Maria" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
          </div>
        </blockquote>

      </div>
      ${bookTip("die-27-gesichter-der-seele-ein-psychologischer-subtypenroman", "Alle 27 Kapitel ausführlich, mit sämtlichen Songs – die vollständige Vorlage dieser Rubrik als psychologischer Subtypenroman.", "Die 27 Gesichter der Seele – Ein psychologischer Subtypenroman")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${relatedLinks([
        {route:"enneagramm-bibel", label:"Alle Bibel-Porträts"},
        {route:"subtype/sx9", label:"SX9 – Das Faultier: Subtyp-Profil"},
        {route:"beruehmte-carl-rogers", label:"Portrait: Dr. Carl Rogers (SX9w1)"},
        {route:"bibel-barabbas", label:"Bibel-Porträt: Barabbas (SO9w1)"},
      ])}
    </div>
  `);
}

function kriminalpsychologiePage() {
  const allInst = ["SE","SO","SX"];
  const allTyp  = [1,2,3,4,5,6,7,8,9];
  const allTags = ["Serienmord","Betrug","Mafia","Terror","Nahbereich","Missbrauch","Sonstiges"];

  const tagLabel = {"Serienmord":"Serienmord","Betrug":"Betrug / Hochstapelei","Mafia":"Mafia / Organisiert","Terror":"Terror / Massengewalt","Nahbereich":"Beziehungs\u00adtat","Missbrauch":"Missbrauch"};

  function filterBar() {
    const instBtn = inst => '<button class="kf-btn" data-kf-inst="'+inst+'" onclick="kfSet(\'inst\',\''+inst+'\')">'+(inst==="ALL"?"Alle":inst)+'</button>';
    const typBtn  = n => {
      const col = n===0 ? null : (TYPE_COLORS[n]||"var(--copper)");
      const style = col ? ' style="--kf-typ-col:'+col+';"' : '';
      return '<button class="kf-btn kf-btn--typ'+(col?' kf-btn--typ-colored':'')+'"'
        +' data-kf-typ="'+n+'" data-kf-col="'+(col||'')+'"'
        +style+' onclick="kfSet(\'typ\','+n+')">'+(n===0?"Alle":n)+'</button>';
    };
    const tagColors = {Serienmord:"#c0392b",Betrug:"#2563c7",Mafia:"#7c3aed",Terror:"#b45309",Nahbereich:"#15803d",Missbrauch:"#be185d",Sonstiges:"#6b7280"};
    const tagBtn = t => {
      const col = tagColors[t]||"var(--copper)";
      return '<button class="kf-btn kf-btn--tag" data-kf-tag="'+t+'"'
        +' style="--kf-tag-col:'+col+';" onclick="kfSet(\'tag\',\''+t+'\')">'+(tagLabel[t]||t)+'</button>';
    };
    const lands = Array.from(new Set(KRIMINAL_PORTRAITS.map(p => p.land).filter(Boolean))).sort((a,b) => a.localeCompare(b, "de"));
    const landSelect = '<select id="kf-land-select" class="kf-btn" style="cursor:pointer;" onchange="kfSetLand(this.value)">'
      +'<option value="ALL">Alle Herkunftsl\u00e4nder</option>'
      +lands.map(l => '<option value="'+l+'">'+l+'</option>').join("")
      +'</select>';
    return '<div class="kf-bar">'
      +'<div class="kf-row"><span class="kf-label">Instinkt</span>'
      +instBtn("ALL")+allInst.map(instBtn).join("")+'</div>'
      +'<div class="kf-row"><span class="kf-label">Typ</span>'
      +typBtn(0)+allTyp.map(typBtn).join("")+'</div>'
      +'<div class="kf-row"><span class="kf-label">Tatmuster</span>'
      +tagBtn("ALL")+allTags.map(tagBtn).join("")+'</div>'
      +'<div class="kf-row"><span class="kf-label">Geschlecht</span>'
      +'<button class="kf-btn" data-kf-gender="ALL" onclick="kfSet(\'gender\',\'ALL\')">Alle</button>'
      +'<button class="kf-btn" data-kf-gender="m" onclick="kfSet(\'gender\',\'m\')">M\u00e4nnlich</button>'
      +'<button class="kf-btn" data-kf-gender="f" onclick="kfSet(\'gender\',\'f\')">Weiblich</button></div>'
      +'<div class="kf-row"><span class="kf-label">Herkunft</span>'+landSelect+'</div>'
      +'<div class="kf-count"><span id="kf-count-num">'+KRIMINAL_PORTRAITS.length+'</span>\u00a0von\u00a0'+KRIMINAL_PORTRAITS.length+'\u00a0Portr\xe4ts</div>'
      +'<div class="kf-row" style="margin-top:0.4rem;"><button class="kf-btn" style="background:var(--gold);color:var(--anthracite,#2c2c2c);border-color:var(--gold-dark,#A8872D);font-weight:700;" onclick="kfRandom()">&#127922; Zuf\xe4lliges Portr\xe4t</button></div>'
      +'</div>';
  }

  const card = p => {
    const inst = (p.subtyp||"").substring(0,2).toUpperCase();
    const typ  = parseInt((p.subtyp||"").replace(/[^0-9]/g,"")[0]||"0");
    const tags = (p.tags||[]).join(",");
    const tierKey = (p.subtyp||'').substring(0,3).toLowerCase();
    const tierImg = tierKey ? 'https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/'+tierKey+'.jpg' : '';
    return '<div class="kf-card" data-kf-inst="'+inst+'" data-kf-typ="'+typ+'" data-kf-tags="'+tags+'" data-kf-gender="'+(p.gender||'')+'" data-kf-land="'+(p.land||'')+'" data-route="'+p.route+'"'
      +' style="cursor:pointer;max-width:100%;background:var(--ivory);border:1.5px solid var(--border);"'
      +' onmouseover="this.style.borderColor=\'var(--gold)\';this.style.boxShadow=\'0 2px 12px rgba(0,0,0,.1)\'"'
      +' onmouseout="this.style.borderColor=\'var(--border)\';this.style.boxShadow=\'none\'">'
      +'<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;">'
      +'<div style="flex:1;min-width:0;"><h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.4rem;color:var(--ink);">'+p.heading+(p.added&&new Date()-new Date(p.added)<30*864e5?' <span style="background:#c9a84c;color:#fff;font-size:0.6rem;font-weight:700;padding:0.1rem 0.4rem;border-radius:4px;vertical-align:middle;letter-spacing:0.05em;">NEU</span>':'')+'</h3>'
      +'<p class="vb-intro" style="margin:0 0 0.8rem;font-size:0.92rem;">'+p.teaser+'</p>'
      +'<div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.6rem;">'
      +(p.tags||[]).map(function(t){return'<span class="kf-tag kf-tag--'+t.toLowerCase()+'">'+t+'</span>';}).join("")
      +'</div>'
      +'<span style="font-size:0.82rem;color:var(--copper);font-weight:600;">Zum Portr\xe4t &rarr;</span></div>'
      +'<div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;flex-shrink:0;">'
      +(tierImg ? '<div style="position:relative;width:48px;height:48px;border-radius:50%;overflow:hidden;border:2px solid var(--gold);"><img src="'+tierImg+'" alt="'+tierKey.toUpperCase()+'" loading="lazy" style="position:absolute;top:'+tierAvatarTop(tierKey)+';left:'+tierAvatarLeft(tierKey)+';width:140%;height:140%;object-fit:cover;" /></div>' : '')
      +'<span style="font-size:1.4rem;color:var(--gold);">&#9655;</span>'
      +'</div>'
      +'</div></div>';
  };

  // Register box (hidden when filter is active)
  const allCodes = [1,2,3,4,5,6,7,8,9].flatMap(n => ["SE","SO","SX"].map(p => p+n));
  const registerBox = '<div id="kf-register" style="background:var(--ivory);border:1.5px solid var(--border);border-radius:12px;padding:1rem 1.2rem;margin-bottom:1rem;">'
    +'<p style="font-size:0.78rem;font-weight:700;letter-spacing:0.08em;color:var(--muted);margin:0 0 0.7rem;text-transform:uppercase;">Schnellnavigation nach Subtyp</p>'
    +'<div style="display:flex;flex-wrap:wrap;gap:0.5rem 0.3rem;">'
    +allCodes.map(function(code){
      const n = parseInt(code.slice(-1));
      const col = TYPE_COLORS[n]||"var(--copper)";
      return '<a href="#" onclick="event.preventDefault();var el=document.getElementById(\'krim-'+code.toLowerCase()+'\');if(el)el.scrollIntoView({behavior:\'smooth\',block:\'start\'});"'
        +' style="display:inline-block;padding:0.25rem 0.6rem;border-radius:6px;border:1.5px solid '+col+';'
        +'font-size:0.8rem;font-weight:700;color:'+col+';background:var(--bg);text-decoration:none;opacity:0.85;"'
        +' onmouseover="this.style.opacity=\'1\';this.style.background=\''+col+'20\'"'
        +' onmouseout="this.style.opacity=\'0.85\';this.style.background=\'var(--bg)\'">'
        +code+'</a>';
    }).join("")
    +'</div></div>';

  // Build list with section anchors and back-buttons
  function buildList() {
    let lastCode = null;
    let out = '';
    KRIMINAL_PORTRAITS.forEach(function(p) {
      const code = (p.subtyp||'').substring(0,3).toUpperCase();
      if (code && code !== lastCode) {
        if (lastCode !== null) {
          out += '<div class="kf-section-back"><a href="#" onclick="event.preventDefault();document.getElementById(\'kf-register\').scrollIntoView({behavior:\'smooth\'});" style="font-size:0.8rem;color:var(--copper);font-weight:600;text-decoration:none;padding:0.3rem 0.8rem;border:1px solid var(--border);border-radius:6px;background:var(--ivory);">\u2191 zum Register</a></div>';
        }
        const n = parseInt(code.slice(-1));
        const col = TYPE_COLORS[n]||"var(--copper)";
        out += '<div id="krim-'+code.toLowerCase()+'" class="kf-section-head" style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;color:'+col+';text-transform:uppercase;padding:0.5rem 0 0.2rem;margin-top:0.5rem;border-bottom:1.5px solid '+col+'20;">'+code+'</div>';
        lastCode = code;
      }
      out += card(p);
    });
    return out;
  }

  return shell(
    '<div class="page-container">'
    +pageHeader("kriminalpsychologie")
    +'<h1 style="font-family:\'EB Garamond\',serif;font-size:2rem;color:var(--ink);margin:1.2rem 0 0.5rem;line-height:1.2;">Spannende Kriminalf\u00e4lle</h1>'
    +'<p class="psycho-intro">Bekannte Kriminalf\xe4lle durch die Linse des Enneagramms: '
    +'Wie pr\xe4gt die innere Struktur eines Menschen seine dunkelsten Taten? '
    +'Diese Portr\xe4ts sind keine Verherrlichung, sondern Tiefenanalysen &ndash; '
    +'ein Versuch zu verstehen, was geschieht, wenn die Leidenschaft eines Typs in die Zerst\xf6rung kippt.</p>'
    +filterBar()
    +registerBox
    +'<div id="kf-list" style="display:flex;flex-direction:column;gap:1rem;max-width:100%;">'
    +buildList()
    +'</div>'
    +relatedLinks(['{"route":"blickqualitaet","label":"Blickqualit\xe4t der 9 Typen"}','{"route":"psychogramme","label":"Psychogramme"}','{"route":"mikroimpressionen","label":"Mikroimpressionen der 27 Subtypen"}'].map(JSON.parse))
    +'</div>'
  );
}

window.kfState = { inst:"ALL", typ:0, tag:"ALL", gender:"ALL", land:"ALL" };
window.kfSet = function(dim, val) {
  if(window.kfState[dim]===val){ window.kfState[dim]= dim==="typ"?0:"ALL"; }
  else { window.kfState[dim]=val; }
  kfApply();
};
window.kfSetLand = function(val) {
  window.kfState.land = val;
  kfApply();
};
window.kfRandom = function() {
  var cards = Array.prototype.slice.call(document.querySelectorAll("#kf-list .kf-card[data-route]")).filter(function(c){ return c.style.display !== "none"; });
  if (!cards.length) return;
  var pick = cards[Math.floor(Math.random() * cards.length)];
  var route = pick.getAttribute("data-route");
  if (route) go(route);
};
window.kfApply = function() {
  const s = window.kfState;
  const cards = document.querySelectorAll(".kf-card");
  let vis = 0;
  cards.forEach(function(c){
    const ok = (s.inst==="ALL" || c.dataset.kfInst===s.inst)
      && (s.typ===0 || parseInt(c.dataset.kfTyp)===s.typ)
      && (s.tag==="ALL" || (c.dataset.kfTags||"").split(",").indexOf(s.tag)>=0)
      && (s.gender==="ALL" || c.dataset.kfGender===s.gender)
      && (s.land==="ALL" || c.dataset.kfLand===s.land);
    c.style.display = ok ? "" : "none";
    if(ok) vis++;
  });
  const cnt = document.getElementById("kf-count-num");
  if(cnt) cnt.textContent = vis;
  // Register und Abschnittsk\u00f6pfe nur bei ungefilteter Ansicht zeigen
  const filtered = s.inst!=="ALL" || s.typ!==0 || s.tag!=="ALL" || s.gender!=="ALL" || s.land!=="ALL";
  const reg = document.getElementById("kf-register");
  if(reg) reg.style.display = filtered ? "none" : "";
  document.querySelectorAll(".kf-section-head,.kf-section-back").forEach(function(el){
    el.style.display = filtered ? "none" : "";
  });
  // highlight active buttons
  document.querySelectorAll(".kf-btn[data-kf-inst]").forEach(function(b){
    b.classList.toggle("kf-btn--active", b.dataset.kfInst===s.inst||(s.inst==="ALL"&&b.dataset.kfInst==="ALL"));
  });
  document.querySelectorAll(".kf-btn[data-kf-typ]").forEach(function(b){
    b.classList.toggle("kf-btn--active", parseInt(b.dataset.kfTyp)===(s.typ||0));
  });
  document.querySelectorAll(".kf-btn[data-kf-tag]").forEach(function(b){
    b.classList.toggle("kf-btn--active", b.dataset.kfTag===s.tag||(s.tag==="ALL"&&b.dataset.kfTag==="ALL"));
  });
  document.querySelectorAll(".kf-btn[data-kf-gender]").forEach(function(b){
    b.classList.toggle("kf-btn--active", b.dataset.kfGender===s.gender||(s.gender==="ALL"&&b.dataset.kfGender==="ALL"));
  });
};

function elliotRodgerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Elliot Rodger \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/elliot-rodger-portrait.jpg" alt="Elliot Rodger \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elliot Rodger</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Sozialer Typ 4 mit F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-sub">Das Isla-Vista-Massaker &ndash; Tierentsprechung: G\xfcrteltier</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Das G\xfcrteltier</h3>
        <p class="vb-intro">Das <strong>G\xfcrteltier</strong> ist die Tierentsprechung der sozialen Vier &ndash; und es trifft Elliot Rodgers innere Welt auf eine fast schmerzhafte Weise. Das G\xfcrteltier tr\xe4gt seine H\xfclle nach au\xdfen: einen knochenharten Panzer, der den weichen Kern dahinter sch\xfctzt. Es ist nachtaktiv, einzelg\xe4ngerisch, ausgesprochen empfindlich f\xfcr Gefahren. Wenn es bedroht wird, rollt es sich ein &ndash; oder es l\xe4uft panisch, oft in die falsche Richtung. Das G\xfcrteltier geh\xf6rt keinem Rudel. Es sucht keine Dominanz. Es will nur teilhaben &ndash; und wei\xdf nicht wie. Elliot Rodger war dieses Tier: ein Panzer aus Stolz, tief innen eine unertr\xe4gliche Sehnsucht nach Zugeh\xf6rigkeit, und kein Weg, diese beiden Pole zu vers\xf6hnen.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die soziale Vier: Ausgeschlossenheit als Identit\xe4t</h3>
        <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> ist unter den Vierer-Subtypen die am st\xe4rksten auf Zugeh\xf6rigkeit ausgerichtete &ndash; und gleichzeitig die, bei der Zugeh\xf6rigkeit am tiefsten scheitert. Naranjo nannte diesen Subtyp <em>Scham</em>: Die soziale Vier empfindet sich als mangelhaft, als strukturell anders als die anderen, als jemanden, der nie ganz dazugeh\xf6ren wird. Im Unterschied zur selbsterhaltenden oder sexuellen Vier klagt sie nicht laut &ndash; sie leidet still und beobachtet mit brennenden Augen, wie die anderen das bekommen, was ihr fehlt.</p>
        <p class="vb-intro"><strong>Elliot Rodger</strong>, geboren am 24. Juli 1991 in London, aufgewachsen in Los Angeles, Sohn eines britischen Filmregisseurs und einer malaiischen Mutter, war von fr\xfch an ein Kind, das nicht ankam. Scheidung der Eltern mit sieben Jahren, h\xe4ufige Schulwechsel, Asperger-\xe4hnliche soziale Schwierigkeiten, die nie diagnostiziert wurden. Er beobachtete andere Jugendliche beim Dazugeh\xf6ren &ndash; beim Flirten, beim Ausgehen, beim m\xfchelosen Kontaktaufnehmen &ndash; und verstand nicht, warum er keinen Zugang fand.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Der F\xfcnferfl\xfcgel: R\xfcckzug, Analyse, wachsende Bitterkeit</h3>
        <p class="vb-intro">Der <strong>F\xfcnferfl\xfcgel (w5)</strong> verleiht der sozialen Vier eine k\xfchle intellektuelle Distanz &ndash; und in Rodgers Fall eine f\xfcr sein Alter ungewohnte F\xe4higkeit zur Selbstbeobachtung und Analyse. Er schrieb, las, zog sich zur\xfcck. Er f\xfchrte ausf\xfchrlich Tagebuch, verfolgte philosophische Onlinediskussionen, analysierte seinen eigenen Schmerz mit einem fast akademischen Blick. Der w5 macht die Vier stiller, isolierter, selbstgen\xfcgsamer nach au\xdfen &ndash; aber er h\xe4lt den inneren Schmerz besser verborgen als er ihn l\xf6st.</p>
        <p class="vb-intro">Das Ergebnis: eine sich \xfcber Jahre verdichtende Weltdeutung. Nicht impulsiv, sondern systematisch. Er entwickelte ein geschlossenes Erkl\xe4rungssystem, in dem seine Einsamkeit nicht Zufall, nicht Pers\xf6nlichkeit, nicht l\xf6sbar war &ndash; sondern das Ergebnis einer ungerechten Welt, die ihm das verweigerte, was anderen zustand. Die Vier nennt das Enneagramm die Leidenschaft des Neids. Bei Rodger wurde Neid zur Weltanschauung.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Biografie: Isolation, Manosphere, Manifest</h3>
        <p class="vb-intro">Mit 17 Jahren zog Rodger nach Santa Barbara, um am Santa Barbara City College zu studieren. Die Erfahrung wurde f\xfcr ihn zum einschneidenden Misserfolg. Er sah Kommilitonen, die scheinbar m\xfchelos romantische Beziehungen hatten, die zu Partys gingen, die soziale Selbstverst\xe4ndlichkeiten lebten, die ihm verschlossen blieben. Er begann, einschl\xe4gige Internetforen zu frequentieren &ndash; die sogenannte <em>Manosphere</em>, insbesondere das Forum <em>PUAhate</em> (Anti-Pickup-Artist-Community) &ndash; und fand dort eine Gemeinschaft von M\xe4nnern, die ihre Einsamkeit ebenfalls als systemische Ungerechtigkeit deuteten.</p>
        <p class="vb-intro">Gleichzeitig schrieb er an seinem Manifest: <em>My Twisted World: The Story of Elliot Rodger</em>. 107 Seiten. Eine detaillierte Autobiografie, die mit kindlicher Unschuld beginnt und in einem pr\xe4zise formulierten Vernichtungsplan endet. Kein Schreien, kein offensichtlicher Wahnsinn &ndash; sondern eine k\xfchle, zunehmend verfestigte \xdcberzeugung: Wenn er keine Anerkennung bekommt, dann soll niemand sie bekommen.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Das Tatgeschehen: Isla Vista, 23. Mai 2014</h3>
        <p class="vb-intro">Am Abend des 23. Mai 2014 begann Elliot Rodger mit der Umsetzung seines Plans, den er als seinen &bdquo;Tag der Vergeltung&ldquo; bezeichnete. Er war 22 Jahre alt.</p>
        <p class="vb-intro"><strong>In der Wohnung:</strong> Rodger begann in seiner eigenen Wohnung, wo er seine drei Mitbewohner &ndash; Cheng Yuan Hong (20), George Chen (19) und Weihan Wang (20) &ndash; mit einem Jagdmesser t\xf6tete. Die drei befanden sich in ihren Zimmern. Dies geschah zwischen 21:30 und 21:45 Uhr.</p>
        <p class="vb-intro"><strong>Alpha Phi-Schwesternschaft:</strong> Um 21:57 Uhr erschien er mit zwei halbautomatischen Pistolen und einem Gewehr vor dem Sororit\xe4tshaus. Da ihm niemand \xf6ffnete, erschoss er auf dem Gehsteig davor drei junge Frauen: Katherine Cooper (22) und Veronika Weiss (19) wurden t\xf6dlich getroffen; ein weiteres Mitglied \xfcberlebte schwer verletzt. Kurz darauf erschoss er Christopher Michaels-Martinez (20) in einem nahe gelegenen Deli-Markt.</p>
        <p class="vb-intro"><strong>Die Fahrt durch Isla Vista:</strong> Anschlie\xdfend fuhr Rodger mit seinem schwarzen BMW durch die Stra\xdfen des Studentenviertels, schoss aus dem fahrenden Auto auf Fu\xdfg\xe4nger und rammte Radfahrer und Passanten vors\xe4tzlich. In mehreren Polizeibegegnungen wurde er angeschossen. Um 22:17 Uhr, etwa 40 Minuten nach Beginn, wurde sein Fahrzeug aufgefunden. Elliot Rodger war tot &ndash; erschossen durch eine Kopfwunde, vermutlich selbst beigebracht.</p>
        <p class="vb-intro"><strong>Bilanz:</strong> 6 Tote, 14 Verletzte (mehrere schwer). Unmittelbar vor dem Anschlag hatte er sein Manifest online ver\xf6ffentlicht und ein siebenmin\xfctiges Abschiedsvideo auf YouTube hochgeladen.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Das Manifest und das Video</h3>
        <p class="vb-intro">Rodgers <em>My Twisted World</em> ist eines der l\xe4ngsten und d\xfcstersten Dokumente dieser Art. Es zeigt keinen schizophrenen Bruch, keinen klinischen Wahn &ndash; sondern eine koh\xe4rente, \xfcber Jahre entwickelte Deutung der eigenen Erfahrung: als Unterlegenem in einer erbarmungslosen sozialen Hierarchie, der endlich zur\xfcckschl\xe4gt.</p>
        <p class="vb-intro">Das kurz vor der Tat hochgeladene Video zeigt ihn sitzend in seinem Auto, l\xe4chelnd, mit gepflegtem Aussehen &ndash; und sprechend \xfcber seine Einsamkeit, seinen Hass auf M\xe4nner mit Erfolg bei Frauen und sein Vorhaben, sie zu bestrafen. Es wurde millionenfach abgerufen und l\xf6ste eine weltweite Diskussion \xfcber Incel-Ideologie und m\xe4nnliche Einsamkeit aus.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">7. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro"><strong>a) Naranjos SO4 &ndash; &bdquo;Scham&ldquo;:</strong> Claudio Naranjo beschreibt die soziale Vier als den Subtyp, der Neid nicht nach au\xdfen tr\xe4gt, sondern nach innen richtet: als Scham, als Minderwertigkeitsgef\xfchl, als \xdcberzeugung, dass etwas im eigenen Wesen fehlt. Im gesunden Bereich f\xfchrt das zu tiefer Empathie, k\xfcnstlerischer Ausdruckskraft, sozialem Engagement. Im ungesunden Bereich h\xe4rtet die Scham zu einem Groll, der die Welt anklagt. Rodger hat diesen Weg vollst\xe4ndig beschritten.</p>
        <p class="vb-intro"><strong>b) Der F\xfcnferfl\xfcgel als Verst\xe4rker:</strong> Ohne w5 h\xe4tte die soziale Vier m\xf6glicherweise ihren Schmerz emotionaler, offener &ndash; etwa durch Kunst oder Therapie &ndash; verarbeitet. Der w5 gab Rodger die Kapazit\xe4t, seinen Schmerz zu rationalisieren, zu systematisieren, zu archivieren &ndash; ohne ihn je zu transformieren. Das Manifest ist das Produkt dieser Kombination: ein intellektuell strukturiertes, emotional totes Dokument.</p>
        <p class="vb-intro"><strong>c) Die Leidenschaft Neid und ihr Kollaps:</strong> Neid bedeutet beim Enneagramm nicht prim\xe4r Missgunst &ndash; sondern das tiefe Gef\xfchl, dass anderen etwas zukommt, das einem selbst grunds\xe4tzlich verwehrt ist. Bei Rodger hat dieser Neid eine letzte Eskalationsstufe erreicht: Wenn ich es nicht haben kann, d\xfcrfen es die anderen auch nicht haben. Das ist der Punkt, an dem Neid zur destruktiven Kraft wird &ndash; nicht mehr als Schmerz, sondern als Programm.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Fazit: Das G\xfcrteltier, das sich nicht mehr einrollte</h3>
        <p class="vb-intro">Elliot Rodger ist ein Fall, der \xfcber sich selbst hinausweist &ndash; auf eine Kultur, die jungen M\xe4nnern keine Sprache f\xfcr Einsamkeit gibt, auf digitale Gemeinschaften, die aus Schmerz Ideologie machen, und auf die besondere Gef\xe4hrlichkeit eines SO4w5, dessen Heilungsweg (Kontakt, Ausdruck, Verbindung) durch alle verst\xe4rkenden Faktoren blockiert wurde.</p>
        <p class="vb-intro">Das G\xfcrteltier tr\xe4gt seinen Panzer, weil es verletzlich ist. Rodger trug seinen Stolz und seine Unnahbarkeit wie eine R\xfcstung \xfcber einer Wunde, die nie verbunden wurde. Was er als Verachtung der anderen erlebte, war \xfcberwiegend die Folge seiner eigenen Unf\xe4higkeit zur Verbindung &ndash; eine Unf\xe4higkeit, die er nicht sah, weil er nie gelernt hatte, sie zu sehen.</p>
        <p class="vb-intro">Die Frage, die dieser Fall stellt, ist keine kriminologische. Es ist eine menschliche: Wie viele G\xfcrteltiere laufen schweigend durch die Welt, mit dem gleichen Schmerz, ohne die Eskalation &ndash; und w\xfcrden auf minimale Verbindung reagieren?</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">9. Einordnung</h3>
        <p class="vb-intro" style="margin-bottom:1.2rem;">
          <span style="display:block;margin-bottom:0.3rem;"><strong>Name:</strong> Elliot Oliver Robertson Rodger</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Subtyp:</strong> SO4w5 &ndash; Soziale Vier mit F\xfcnferfl\xfcgel</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Leidenschaft:</strong> Neid (als Weltgericht \xfcber das Verweigertsein)</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Tierentsprechung:</strong> G\xfcrteltier</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Lebensdaten:</strong> 24. Juli 1991 &ndash; 23. Mai 2014</span>
          <span style="display:block;"><strong>Tatfolgen:</strong> 6 Tote, 14 Verletzte; Isla Vista, Kalifornien</span>
        </p>
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die soziale Vier im Vergleich: Wie sich Neid bei SE4, SO4 und SX4 unterschiedlich ausdr\xfcckt \u2013 und warum die SO4 Scham nach innen tr\xe4gt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE4, SO4, SX4 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Neid als Grundmotiv der Vier: Wie der Schmerz des Andersseins entsteht und wie Verbindung w\xe4chst.", "Wer du wirklich bist (Band 1)")}
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Elliot Rodger t\u00f6tete 2014 beim Anschlag von Isla Vista sechs Menschen und sich selbst. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>


        ${relatedLinks([
          {route:"kriminalpsychologie-david-berkowitz", label:"Kriminalpsychologie: David Berkowitz (SE4w3)"},
          {route:"kriminalpsychologie-adolf-hitler", label:"Kriminalpsychologie: Adolf Hitler (SX4w3)"},
          {route:"kriminalpsychologie-ted-kaczynski", label:"Kriminalpsychologie: Ted Kaczynski (SO5w4)"},
        ])}
      </div>
    </div>
  `);
}
function bonnieParkerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Bonnie Parker – Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/bonnie-parker-portrait.jpg" alt="Bonnie Parker – Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bonnie Parker</p>
        <p class="krim-portrait-typ">SX4w3 &middot; Sexuelle Typ 4 mit Dreierfl\xfcgel</p>
        <p class="krim-portrait-sub">H\xe4lfte von &bdquo;Bonnie and Clyde&ldquo; &ndash; Tierentsprechung: Chihuahua</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Der Chihuahua</h3>
        <p class="vb-intro">Der <strong>Chihuahua</strong> ist das Tier der sexuellen Vier &ndash; klein, aber von einer Intensit\xe4t, die in keinem Verh\xe4ltnis zur eigenen Gr\xf6\xdfe steht. Er verlangt nicht nach Aufmerksamkeit im Allgemeinen, sondern nach der totalen, ausschlie\xdflichen N\xe4he zu einem einzigen Menschen &ndash; und ist bereit, daf\xfcr jedes Risiko einzugehen. Bonnie Parker, 1910 in Texas geboren, eine begabte Sch\xfclerin mit ausgepr\xe4gtem Interesse an Lyrik und Literatur, verk\xf6rperte genau diese Qualit\xe4t: klein, energiegeladen, unbeirrbar an der Seite eines einzigen Mannes, bis in den gemeinsamen Tod.</p>
        <p class="vb-intro">1930 lernte sie Clyde Barrow kennen, mit neunzehn Jahren. Was folgte, war eine 21 Monate dauernde Verbrecherjagd durch den mittleren Westen der USA, mutma\xdflich verantwortlich f\xfcr mindestens 13 T\xf6tungen, zahlreiche \xdcberf\xe4lle und Entf\xfchrungen &ndash; bis beide am 23. Mai 1934 in einem Polizeihinterhalt in Louisiana erschossen wurden. Bonnie war 23 Jahre alt.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die sexuelle Vier: Die tragische Liebe als Kunstwerk</h3>
        <p class="vb-intro">Naranjo nannte die <strong>sexuelle Vier (SX4)</strong> den Subtyp des <em>Konkurrenzneids</em> &ndash; eine Intensit\xe4t, die sich ganz auf die eine, au\xdfergew\xf6hnliche Beziehung richtet, oft getragen von einer d\xfcsteren Vorahnung des eigenen Untergangs, die die Liebe nicht schm\xe4lert, sondern erst vollst\xe4ndig macht. W\xe4hrend der gesamten Flucht schrieb Bonnie Gedichte, die ihre Beziehung zu Clyde chronisierten &ndash; darunter &bdquo;The Story of Suicide Sal&ldquo; und &bdquo;The Trail's End&ldquo;, das ihren eigenen gewaltsamen Tod fast prophetisch vorwegnahm.</p>
        <p class="vb-intro">Das ist die SX4 in Reinform: Die Beziehung wird nicht einfach gelebt, sondern zugleich als Erz\xe4hlung gestaltet &ndash; eine Liebe, die sich selbst als tragisch, einzigartig und unwiederholbar begreift, und die genau aus dieser Tragik ihre Intensit\xe4t bezieht. Bonnie wusste um das wahrscheinliche Ende und schrieb trotzdem &ndash; oder gerade deswegen &ndash; weiter daran, es literarisch zu gestalten.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Der Dreierfl\xfcgel: Die bewusste Inszenierung</h3>
        <p class="vb-intro">Eine SX4 mit schw\xe4cher ausgepr\xe4gtem Dreierfl\xfcgel h\xe4tte ihre Gef\xfchle vermutlich privat verarbeitet, ohne den Drang, sie einem Publikum zu zeigen. Bei Bonnie trat stattdessen ein ausgepr\xe4gtes Bewusstsein f\xfcr die eigene \xf6ffentliche Wirkung hervor: Sie schickte ihre Gedichte gezielt an Zeitungen. Die inzwischen ikonischen Fotos, auf denen sie mit Zigarre und Pistole posiert, waren bewusst inszeniert &ndash; kalkulierte Bilder, die zur Legende von &bdquo;Bonnie and Clyde&ldquo; wesentlich beitrugen.</p>
        <p class="vb-intro">Das ist der Dreierfl\xfcgel bei der Vier: Die eigene Tragik bleibt nicht privates Erleben, sondern wird bewusst nach au\xdfen getragen, gestaltet, ver\xf6ffentlicht. Bonnie wollte nicht nur f\xfchlen, was sie f\xfchlte &ndash; sie wollte, dass die Welt sah, was sie f\xfchlte, und dass die Geschichte, die daraus wurde, so blieb, wie sie sie selbst erz\xe4hlt hatte.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Die Legende als gemeinsames Projekt</h3>
        <p class="vb-intro">Bonnie und Clyde h\xe4tten sich mehrfach trennen und einzeln untertauchen k\xf6nnen &ndash; ihre \xdcberlebenschancen w\xe4ren einzeln h\xf6her gewesen. Stattdessen blieben sie zusammen, bis zuletzt, obwohl beide um das wachsende Risiko wussten. Aus der Perspektive der SX4 ergibt das Sinn: Die Beziehung selbst war das eigentliche Kunstwerk, und ein Kunstwerk zerst\xf6rt man nicht aus Sicherheitsgr\xfcnden.</p>
        <p class="vb-intro">Die Presse, die \xf6ffentliche Faszination, die eigene Legendenbildung &ndash; all das n\xe4hrte die Geschichte weiter, anstatt sie zu beenden. Bonnie schien zu verstehen, dass Ber\xfchmtheit und Untergang in ihrer Version der Geschichte untrennbar miteinander verbunden waren.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Das Ende in Louisiana</h3>
        <p class="vb-intro">Am 23. Mai 1934 wurden Bonnie und Clyde auf einer Landstra\xdfe in Bienville Parish, Louisiana, von einem sechsk\xf6pfigen Polizeikommando in einem Hinterhalt get\xf6tet. Das Fahrzeug wurde von \xfcber 130 Gewehrsch\xfcssen durchsiebt. Bonnies letztes Gedicht, &bdquo;The Trail's End&ldquo;, endete mit Zeilen, die genau diesen Tod vorwegnahmen: gemeinsam sterben, gemeinsam begraben werden wollen &ndash; ein Wunsch, dem die Familien am Ende jedoch nicht folgten.</p>
        <p class="vb-intro">Die SX4 sucht die Intensit\xe4t bis zum Letzten, selbst wenn diese Intensit\xe4t den eigenen Tod bedeutet. Bonnie hatte diesen Ausgang literarisch bereits vorweggenommen, lange bevor er eintrat.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro"><strong>a) Die Beziehung als Kunstwerk:</strong> Bonnies gesamtes Handeln l\xe4sst sich als der Versuch lesen, aus einer realen, gef\xe4hrlichen Beziehung eine bewusst gestaltete Erz\xe4hlung zu machen &ndash; die SX4 in ihrer reinsten Form.</p>
        <p class="vb-intro"><strong>b) Der Dreierfl\xfcgel als \xf6ffentliche B\xfchne:</strong> Eine SX4 mit schw\xe4cher ausgepr\xe4gtem Dreierfl\xfcgel h\xe4tte ihre Gedichte vermutlich f\xfcr sich behalten. Bonnies aktives Verschicken an Zeitungen und die inszenierten Fotos zeigen einen stark ausgepr\xe4gten Dreierfl\xfcgel, der die private Tragik zur \xf6ffentlichen Legende machte.</p>
        <p class="vb-intro"><strong>c) Vorwegnahme statt \xdcberraschung:</strong> Dass Bonnie ihren eigenen Tod literarisch vorwegnahm, zeigt die charakteristische SX4-F\xe4higkeit, das eigene Schicksal bereits als Geschichte zu erleben, bevor es geschieht.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">7. Einordnung</h3>
        <p class="vb-intro" style="margin-bottom:1.2rem;">
          <span style="display:block;margin-bottom:0.3rem;"><strong>Name:</strong> Bonnie Parker</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Subtyp:</strong> SX4w3 &ndash; Sexuelle Vier mit Dreierfl\xfcgel</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Leidenschaft:</strong> Neid (als d\xfcstere, dramatisierte Einzigartigkeit der einen gro\xdfen Beziehung)</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Tierentsprechung:</strong> Chihuahua</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Lebensdaten:</strong> 1. Oktober 1910 &ndash; 23. Mai 1934</span>
          <span style="display:block;"><strong>Bekannt f\xfcr:</strong> H\xe4lfte des Gangsterpaars &bdquo;Bonnie and Clyde&ldquo;, 21 Monate Verbrecherjagd durch den mittleren Westen der USA (1932&ndash;1934), Autorin selbstmythologisierender Gedichte, get\xf6tet in einem Polizeihinterhalt</span>
        </p>
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die sexuelle Vier im Vergleich: Wie Neid zur tragischen, dramatisierten Einzigartigkeit einer Beziehung wird – und warum der Dreierflügel aus stillem Leid eine öffentliche Legende macht.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE4, SO4, SX4 – 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Neid als Grundmotiv der Vier: Wie das Schutzsystem der Vier entsteht und wie es sich in Heilung aufl\xf6st.", "Wer du wirklich bist (Band 1)")}

      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Bonnie Parker wurde mitverantwortlich gemacht f\xfcr mindestens 13 T\xf6tungen und starb 1934 bei einem Polizeieinsatz. Das Enneagramm erkl\xe4rt, es rechtfertigt nicht.
        </p>
      </div>

        ${relatedLinks([
          {route:"kriminalpsychologie-clyde-barrow", label:"Kriminalpsychologie: Clyde Barrow (SX7w8) – ihr Partner"},
          {route:"kriminalpsychologie-adolf-hitler", label:"Kriminalpsychologie: Adolf Hitler (SX4w3)"},
        ])}
      </div>
    </div>
  `);
}

function adolfHitlerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Adolf Hitler \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/adolf-hitler-portrait.jpg" alt="Adolf Hitler \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Adolf Hitler</p>
        <p class="krim-portrait-typ">SX4w3 \u00b7 Sexueller Typ 4 mit Dreierfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">\u00d6sterreichisch-deutscher Diktator und Massenm\u00f6rder \u00b7 Tierentsprechung: Chihuahua</p>
      </div>

      <p class="psycho-intro">
        <strong>Adolf Hitler</strong> (1889\u20131945) war Diktator des nationalsozialistischen Deutschlands,
        Hauptverantwortlicher f\xfcr den Zweiten Weltkrieg und den Holocaust.
        Unter seiner F\xfchrung wurden rund sechs Millionen Juden systematisch ermordet,
        dazu Millionen weiterer Menschen \u2013 politische Gegner, Homosexuelle, Roma,
        Menschen mit Behinderungen. Seine Expansionspolitik l\xf6ste den gr\xf6\xdften bewaffneten
        Konflikt der Menschheitsgeschichte aus. Diese Analyse ist keine Erkl\xe4rung,
        die entschuldigt \u2013 sie ist eine psychologische Tiefenbohrung, um zu verstehen,
        wie ein Mensch zu einem solchen Monster werden konnte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Adolf Hitler</strong> wird dem <strong>Sexuellen Typ 4 mit Dreierfl\xfcgel</strong> im Enneagramm zugeordnet.
        Die Leidenschaft der Vier ist <em>Neid</em> \u2013 beim sexuellen Subtyp ausgedr\xfcckt als
        <strong>Rivalit\xe4t</strong>: das intensive, konkurrierende Begehren nach dem, was andere haben.
        Der Fl\xfcgel 5 erg\xe4nzt dies mit intellektueller Isolation, pseudo-theoretischem Weltbild-Konstruieren
        und der F\xe4higkeit, sich vollst\xe4ndig von der Realit\xe4t abzukoppeln. In seiner pathologischsten
        Auspr\xe4gung ist die sexuelle Vier mit F\u00fcnferfl\u00fcgel der gef\xe4hrlichste Typ des Enneagramms: Neid, Grandiosit\xe4t und
        k\xfchle intellektuelle Planung verbinden sich zu einer Ideologie des Vernichtungswillens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\xe4t</h3>
        <p class="vb-intro"><strong>a) Intensiv und besessen:</strong>
        Hitlers Blick war von extremer Intensit\xe4t, besonders bei \xf6ffentlichen Auftritten.
        Er schien von seinen eigenen Visionen und Ideologien beinahe besessen zu sein \u2013
        was in seinen Augen klar sichtbar wurde und Beobachter regelm\xe4\xdfig ersch\xfctterte.</p>
        <p class="vb-intro"><strong>b) Verschlossen und undurchsichtig:</strong>
        Obwohl er auf der politischen B\xfchne seine aggressive Energie zeigte, war Hitlers Blick
        in pers\xf6nlichen Begegnungen oft verschlossen, fast als ob er bewusst Distanz wahrte,
        um wahre Motive und Emotionen zu verbergen. Die klassische Spannung der sexuellen Vier:
        intensive Pr\xe4senz nach au\xdfen, innere Abgeschlossenheit nach innen.</p>
        <p class="vb-intro"><strong>c) Fordernd und hypnotisierend:</strong>
        In Reden und \xf6ffentlichen Auftritten war sein Blick hypnotisierend, verst\xe4rkt durch
        extreme emotionale Ausdruckskraft. Er nutzte diesen Blick, um Anh\xe4nger zu mobilisieren
        und politische Macht zu festigen \u2013 eine F\xe4higkeit, die Zeitzeugen oft als
        \xfcbernat\xfcrlich beschrieben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Extremer Individualismus:</strong>
        Als Sexuelle Vier wollte Hitler einzigartig und au\xdferordentlich sein \u2013 sichtbar in seiner
        obsessiven Vision eines \u201etausendj\xe4hrigen Reiches" und seiner Selbstinszenierung als
        \u201eRetter" der deutschen Nation. Er strebte nach einem radikal eigenen Bild der Welt.</p>
        <p class="vb-intro"><strong>b) Gef\xfchl der \xdcberlegenheit:</strong>
        <strong>Hitler</strong> sah sich und seine Ideen als \xfcberlegen an und war von tiefer \xdcberzeugung durchdrungen,
        dass seine rassistische Weltanschauung die einzig richtige sei. Er f\xfchlte sich nicht nur
        einzigartig, sondern dazu bestimmt, die Welt zu ver\xe4ndern.</p>
        <p class="vb-intro"><strong>c) Gef\xfchl der Isolation:</strong>
        Trotz massenhafter \xf6ffentlicher Unterst\xfctzung war Hitler tief in sich selbst isoliert.
        Er war unf\xe4hig zu echten menschlichen Verbindungen und agierte aus einer inneren Leere
        heraus \u2013 das tiefste Kennzeichen der ungeheilten Vier.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Radikale Andersartigkeit:</strong>
        <strong>Hitler</strong> verk\xf6rperte das Bed\xfcrfnis der Sexuellen Vier nach Abgrenzung und Andersartigkeit.
        Seine Ideologie war nicht nur extrem, sondern einzigartig in ihrer m\xf6rderischen Konsequenz.
        Er stellte sich bewusst als Gestalt dar, die die Konventionen der Zeit sprengen sollte.</p>
        <p class="vb-intro"><strong>b) Dramatisches Auftreten:</strong>
        Seine \xf6ffentlichen Auftritte waren voller Pathos, begleitet von Reden auf emotionalen Appellen.
        Er nutzte seine emotionale Intensit\xe4t, um Anh\xe4nger zu begeistern und zu mobilisieren \u2013
        die Energie der sexuellen Vier in ihrer gef\u00e4hrlichsten, \xf6ffentlichkeitswirksamen Form.</p>
        <p class="vb-intro"><strong>c) Verblendeter Perfektionismus:</strong>
        Wie viele Sexuelle Vieren hatte Hitler eine verzerrte Vorstellung von Perfektion:
        das \u201ereine arische Volk" und das \u201eReich", das alle anderen V\u00f6lker dominieren sollte.
        Diese Ideale trieben seine grausamen Ma\xdfnahmen an \u2013 Perfektion als Vernichtungslogik.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Magnetische, aber zerst\xf6rerische Ausstrahlung:</strong>
        <strong>Hitler</strong> \xfcbte eine beinahe magnetische Wirkung auf seine Anh\xe4nger aus, die ihm
        bedingungslos folgten. Diese Faszination war jedoch auf Zerst\xf6rung und Hass gegr\xfcndet
        und f\xfchrte zu beispiellosem Leid und Tod.</p>
        <p class="vb-intro"><strong>b) Gef\xe4hrliche Mischung aus Charisma und Hass:</strong>
        Er verk\xf6rperte eine bedrohliche Form von Charisma, das sich aus intensiver
        Selbst\xfcberzeugung und Fanatismus speiste. Diese Mischung machte ihn extrem gef\xe4hrlich,
        da er Macht an sich riss und andere dazu brachte, seine grausamen Ideologien zu akzeptieren.</p>
        <p class="vb-intro"><strong>c) Tiefe Zerrissenheit:</strong>
        Trotz \xf6ffentlicher Erfolge war Hitler innerlich zerrissen und von Zweifeln geplagt \u2013
        besonders gegen Ende des Krieges. Sein Leben spiegelte eine st\xe4ndige innere Disharmonie
        wider, typisch f\xfcr die ungeheilte Vier, die kein authentisches Selbst findet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Dynamische und unruhige Energie:</strong>
        Hitlers Energie war rastlos und extrem dynamisch. Er war st\xe4ndig auf der Suche nach
        neuen M\xf6glichkeiten, Macht zu vergr\xf6\xdfern und seine Vision durchzusetzen.
        Diese unruhige Energie lie\xdf ihn nie zur Ruhe kommen.</p>
        <p class="vb-intro"><strong>b) Destruktive Kraft:</strong>
        Seine Energie hatte etwas Zerst\xf6rerisches, das \xfcber politische Wirkung hinausging.
        Er war nicht nur auf den Aufbau eines Reiches fixiert, sondern darauf, alles zu vernichten,
        was nicht in sein Weltbild passte \u2013 was zu den verheerendsten Verbrechen des 20.\xa0Jahrhunderts f\xfchrte.</p>
        <p class="vb-intro"><strong>c) Innerlich getrieben:</strong>
        <strong>Hitler</strong> war von tiefer innerer Unruhe getrieben, sichtbar in Verhalten und Entscheidungen.
        Diese Energie war seine gr\xf6\xdfte St\xe4rke und sein gr\xf6\xdfter Fluch \u2013 sie f\xfchrte ihn
        und die Welt ins Verderben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Der Chihuahua</h3>
        <p class="vb-intro"><strong>a) Kleiner K\xf6rper, gro\xdfe Pr\xe4senz:</strong>
        Der Chihuahua wirkt unscheinbar, hat aber eine starke Pers\xf6nlichkeit und ist \xfcberraschend
        aggressiv. \xc4hnlich wirkte Hitler \u2013 \xe4u\xdferlich kein klassischer \u201eF\xfchrer", dennoch
        strahlte er durch fanatischen Glauben eine hasserf\u00fcllte Bedrohlichkeit aus.
        Subtypbedingt tendiert die Sexuelle Vier im dekompensierten Zustand dazu,
        die innerlich empfundene Verletzung auf andere Menschen und ganze Volksgruppen auszuweiten \u2013
        nach dem Mechanismus: <em>\u201eVerletzte Menschen verletzen Menschen."</em></p>
        <p class="vb-intro"><strong>b) \xdcberm\xe4\xdfige Verteidigungsbereitschaft:</strong>
        Wie der Chihuahua bei kleinster Bedrohung aggressiv reagiert, war Hitler stets auf der Hut
        und reagierte \xfcberm\xe4\xdfig auf wahrgenommene \u2013 oft imagin\xe4re \u2013 Bedrohungen.
        Dies zeigte sich in seiner brutalen Repression von politischen Gegnern und Minderheiten.</p>
        <p class="vb-intro"><strong>c) Gro\xdfe Egozentrik trotz geringer Gr\xf6\xdfe:</strong>
        Der Chihuahua h\xe4lt sich selbst f\xfcr viel gr\xf6\xdfer, als er ist. Dies spiegelt Hitlers
        \xfcbergro\xdfes Ego wider, das ihn glauben lie\xdf, er k\xf6nne die Weltordnung dominieren \u2013
        obwohl seine Ideologie letztlich nur Tod und Zerst\xf6rung brachte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Adolf Hitler</strong> verk\xf6rperte viele der negativsten Eigenschaften der Sexuellen Vier.
        Sein extremes Bed\xfcrfnis nach Individualit\xe4t und Andersartigkeit f\xfchrte zu einer
        m\xf6rderischen Ideologie, die auf Exklusivit\xe4t und \xdcberlegenheit basierte.
        Sein tiefer Neid \u2013 in der Form der sexuellen Vier als Rivalit\xe4t, als Hass auf jene, die besitzen,
        was man sich selbst verweigert glaubt \u2013 wurde zur treibenden Kraft eines Vernichtungsapparats.
        Die Chihuahua-Analogie verdeutlicht seine paradoxe Mischung aus \xdcberkompensation und
        tiefsitzender Unsicherheit: Ein unscheinbarer Mensch, der sich durch extreme Aggression
        \xfcber seine Umgebung behaupten wollte \u2013 und dabei die Welt ins Verderben riss.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Der Fl\xfcgel 5 \u2013 das Weltbild-Labor:</strong>
        Der F\xfcnfer-Fl\xfcgel erg\xe4nzt die Vier mit intellektueller Isolation und
        pseudo-theoretischem Weltbild-Konstruieren. <em>Mein Kampf</em> ist ein
        perfektes Dokument dieses 4w5-Musters: In monatelanger Gefangenschaft (Landsberg, 1924)
        baute Hitler ein in sich geschlossenes, wahnhaftes Gedankensystem auf \u2013 systematisch,
        nahezu \u201emethodisch", von der Realit\xe4t vollst\xe4ndig abgekoppelt. Der 5-Fl\xfcgel
        gibt der 4-Leidenschaft eine intellektuelle Architektur, die sie noch gef\xe4hrlicher macht.</p>
        <p class="vb-intro"><strong>b) Die Kernwunde: Wien 1907 und 1908:</strong>
        Die Wiener Akademie der Bildenden K\xfcnste lehnte Hitler zweimal ab \u2013 1907 und 1908.
        F\xfcr eine sexuelle Vier ist Ablehnung keine entt\xe4uschende Erfahrung, sondern die Best\xe4tigung
        der tiefsten Angst: <em>Ich bin fundamental wertlos und werde nie geliebt.</em>
        <strong>Hitler</strong> integrierte diese Wunde nicht \u2013 er projizierte sie. Was in ihm als Selbsthass
        brannte, wurde zu Volksvernichtung nach au\xdfen gerichtet.</p>
        <p class="vb-intro"><strong>c) sexuelle Vier = Rivalit\xe4t und Neid als Hass:</strong>
        Claudio Naranjo bezeichnete den Sexuellen Typ 4 als \u201eWettbewerber" (Competitive).
        Der Neid der sexuellen Vier richtet sich nicht auf das Seufzen nach Unerreichbarem, sondern auf
        intensive Rivalit\xe4t mit jenen, die besitzen, was man selbst verweigert glaubt.
        Hitlers Antisemitismus tr\xe4gt diesen Fingerabdruck: Juden repr\xe4sentierten in seiner
        Psyche Bildung, kulturellen Einfluss, Gemeinschaft \u2013 alles, was er begehrte und
        sich selbst nicht zugestanden glaubte. Der Mechanismus der sexuellen Vier: Wenn ich es nicht
        haben kann, vernichte ich es.</p>
        <p class="vb-intro"><strong>d) Geli Raubal \u2013 die einzige echte Bindung:</strong>
        Seine Nichte Angela \u201eGeli" Raubal lebte ab 1929 bei ihm und war wohl die einzige
        Person, zu der Hitler eine genuine emotionale Bindung hatte. Ihr Tod im September 1931
        (Selbstmord in seiner Wohnung, unter noch heute ungekl\xe4rten Umst\xe4nden) warf ihn
        in eine tiefe Depression und gilt als seelischer Wendepunkt: Ab diesem Zeitpunkt
        wurde seine emotionale Abschottung noch radikaler. Die sexuelle Vier-F\xe4higkeit zu
        intensiver, konsumierender Bindung \u2013 und die Vernichtung, die ihr folgt.</p>
        <p class="vb-intro"><strong>e) Germania \u2013 der K\xfcnstler, der nie aufh\xf6rte:</strong>
        Zusammen mit Architekt Albert Speer plante Hitler den vollst\xe4ndigen Umbau Berlins
        zur Welthauptstadt \u201eGermania" \u2013 mit einer Triumphachse, einer Kuppel gr\xf6\xdfer als
        der Petersdom, und einem Ma\xdfstab, der jeden anderen Machtausdruck der Geschichte
        \xfcberragen sollte. Auch als Diktator blieb er der K\xfcnstler der sexuellen Vier, der sein Meisterwerk
        brauchte \u2013 nur hatte er nun Millionen Menschen als Material.</p>
        <p class="vb-intro"><strong>f) Der Wolfsschanz-R\xfcckzug \u2013 4w5 im Endstadium:</strong>
        In den letzten Kriegsjahren zog sich Hitler immer tiefer in seinen F\xfchrerhauptquartieren
        zur\xfcck \u2013 vor allem im Wolfsschanz in Ostpreu\xdfen. Er lebte vollst\xe4ndig im Verborgenen:
        nachtaktiv, von Tageslicht abgeschottet, in einer Blase aus Ja-Sagern und Illusionen.
        Dies ist der 4w5-Withdrawal im Extremfall: Je mehr die Realit\xe4t sein Weltbild
        widerlegte, desto tiefer zog er sich in seine eigene innere Architektur zur\xfcck.
        Die Entscheidungen wurden realit\xe4tsferner, die Befehle irrational, die Menschen um
        ihn herum Statisten in seinem eigenen Untergang.</p>
        <p class="vb-intro"><strong>g) Der Integrationspunkt Eins \u2013 Perfektion als Zwang:</strong>
        In der Spannung zwischen Desintegration (Zwei: Manipulation, emotionale Kontrolle)
        und Integration (Eins: Ordnung, Klarheit) zeigte Hitler vor allem den dunklen
        Integrationspunkt: zwanghafter Ordnungsdrang, Reinheitsfanatismus, buchst\xe4bliche
        Vernichtung alles Unreinen. Nicht die heilsame Pr\xe4zision der Eins, sondern ihre
        destruktivste Auspr\xe4gung \u2013 ein Beweis, dass auch gesunde Richtungen in die
        Pathologie kippen k\xf6nnen, wenn kein Boden der Selbsterkenntnis vorhanden ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Der Sexuelle Typ 4 in seiner tiefsten Auspr\xe4gung \u2013 Rivalit\xe4t, Neid und der Weg von der Selbstz\xf6rst\xf6rung zur Heilung.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "Wie sich die sexuelle Vier von der Sozialen und Selbsterhaltenden Vier unterscheidet \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Der Typ 4 ausf\xfchrlich portr\xe4tiert \u2013 Sehnsucht, Neid und der Heilungsweg \xfcber die R\xfcckkehr zum gegenw\xe4rtigen Sein.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Die Verbrechen des NS-Regimes, f\u00fcr die Hitler die Hauptverantwortung tr\u00e4gt, sind historisch und rechtlich umfassend dokumentiert. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-ted-bundy", label:"Kriminalpsychologie: Ted Bundy"},
        {route:"kriminalpsychologie-pablo-escobar", label:"Kriminalpsychologie: Pablo Escobar"},
        {route:"blickqualitaet", label:"Blickqualit\xe4t der 9 Typen"},
      ])}
    </div>
  `);
}

function lukaMagnottaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Luka Magnotta \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/luka-magnotta-portrait.jpg" alt="Luka Magnotta \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Luka Magnotta</p>
        <p class="krim-portrait-typ">SX3w4 \u00b7 Sexueller Typ 3 mit Viererfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">Kanadischer M\u00f6rder und Selbstinszenierungst\u00e4ter \u00b7 Tierentsprechung: Pfau</p>
      </div>

      <p class="psycho-intro">
        <strong>Luka Magnotta</strong> (geb. 1982) erlangte 2012 weltweite traurige Ber\xfchmtheit, als er den
        chinesischen Studenten Jun Lin in Montreal t\xf6tete, zerst\xfcckelte, das Video online
        ver\xf6ffentlichte und K\xf6rperteile an politische Parteien und Schulen verschickte.
        Zuvor war er durch Tierqu\xe4lerei-Videos aufgefallen. Eine internationale Fahndung endete
        mit seiner Verhaftung in Berlin. Das Enneagramm macht erkl\xe4rbar, was hinter dieser
        extremen Selbstinszenierung des Schreckens steht.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Luka Magnotta</strong> wird dem <strong>Sexuellen Typ 3 mit Viererfl\u00fcgel</strong> im Enneagramm zugeordnet.
        Die Leidenschaft der Drei ist <em>T\xe4uschung</em> (Deceit) \u2013 beim sexuellen Subtyp
        ausgedr\xfcckt als <strong>Charisma und Verf\xfchrung</strong>: das Bed\xfcrfnis, durch Bild,
        K\xf6rper und Ausstrahlung die begehrenswerteste Person im Raum zu sein.
        Claudio Naranjo nannte die sexuelle Drei schlicht \u201eCharisma".
        Bei Magnotta mutierte dieses Muster ins Pathologische: Wenn gew\u00f6hnlicher Ruhm nicht
        reicht, wird <em>Ber\u00fcchtigtsein</em> zum Ziel \u2013 denn auch das ist Aufmerksamkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\xe4t</h3>
        <p class="vb-intro"><strong>a) Verf\xfchrend und manipulativ:</strong>
        Die Sexuelle Drei besitzt einen intensiven, oft hypnotisierenden Blick, der Menschen
        in seinen Bann zieht. Magnotta nutzte diese Qualit\xe4t, um Aufmerksamkeit zu erlangen
        und Opfer wie \xd6ffentlichkeit zu manipulieren.</p>
        <p class="vb-intro"><strong>b) Selbstbewusst und dominant:</strong>
        Trotz der verst\xf6renden Natur seiner Taten trat Magnotta \xf6ffentlich mit \xfcbertriebener
        Selbstsicherheit auf. Sein Blick zeigte wenig Reue \u2013 auf einem tief verwurzelten Bed\xfcrfnis
        nach Anerkennung beruhend, nicht auf innerer St\xe4rke.</p>
        <p class="vb-intro"><strong>c) Berechnend und kalt:</strong>
        Hinter scheinbarer Leidenschaft verbirgt sich bei der sexuellen Drei oft tiefe emotionale K\xe4lte.
        Dies war in Magnottas Augen besonders in den Momenten erkennbar, in denen er seine
        Verbrechen aufzeichnete \u2013 das w\u00e4chserne, ausdruckslose \u201ePorzellanpuppen-Gesicht"
        der vollst\xe4ndig von ihrer Herzenergie abgeschnittenen Drei.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Selbstinszenierung:</strong>
        Wie bei der sexuellen Drei typisch, strebte Magnotta danach, sich selbst in Szene zu setzen.
        Dies manifestierte sich in manipulativen Videos und dem Drang, als Mittelpunkt
        der Aufmerksamkeit wahrgenommen zu werden.</p>
        <p class="vb-intro"><strong>b) Perfektionismus im Image:</strong>
        <strong>Magnotta</strong> war besessen von seinem Aussehen. Er pflegte auf sozialen Medien ein makelloses
        Bild von sich. Selbst w\xe4hrend seiner Verbrechen unterbrach er die Tat, schaute in den
        Spiegel, richtete seine Fris\xfcr \u2013 als m\xfcsse er die \u201eMaske der Makellosigkeit" in
        jedem Augenblick aufrechterhalten.</p>
        <p class="vb-intro"><strong>c) Bed\xfcrfnis nach Bewunderung:</strong>
        Die sexuelle Drei hat einen starken Drang nach Anerkennung. Bei Magnotta zeigte er sich in
        verzweifelten Versuchen, durch drastische Taten und Online-Pr\xe4senz Aufmerksamkeit
        zu erlangen \u2013 bis zur \xe4u\xdferten Grenze des Ertr\xe4glichen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Uners\xe4ttliches Verlangen nach Anerkennung:</strong>
        <strong>Luka Magnotta</strong> verk\xf6rpert das Bed\xfcrfnis der Sexuellen Drei, im Rampenlicht zu stehen.
        Seine Verbrechen waren keine Taten des Hasses, sondern gezielte Aktionen, um
        Aufmerksamkeit zu erlangen \u2013 Ruhm durch jedes verf\xfcgbare Mittel.</p>
        <p class="vb-intro"><strong>b) Manipulativ und berechnend:</strong>
        Wie die sexuelle Drei benutzte Magnotta Manipulation als Mittel, um seine Umgebung zu
        kontrollieren und das Bild zu formen, das andere von ihm hatten.</p>
        <p class="vb-intro"><strong>c) Emotionale Leere hinter der Fassade:</strong>
        Hinter glamour\xf6ser Selbstinszenierung verbirgt sich bei der sexuellen Drei oft tiefes Gef\xfchl
        innerer Leere. Magnottas \xe4u\xdferlich perfekte Fassade maskierte eine verzweifelte
        Suche nach Identit\xe4t \u2013 denn ohne Blicke auf ihn war er buchst\xe4blich niemand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Faszinierend und absto\xdfend zugleich:</strong>
        <strong>Magnotta</strong> zog Aufmerksamkeit auf sich durch charmante Erscheinung und groteske Taten.
        Dies ist typisch f\xfcr die sexuelle Drei, der sowohl Anziehungskraft als auch eine tiefere
        St\xf6rung ausstrahlen kann.</p>
        <p class="vb-intro"><strong>b) Selbstbewusstes Auftreten:</strong>
        Trotz der Schwere seiner Verbrechen zeigte Magnotta kaum Unsicherheit oder Reue.
        Diese Fassade von Selbstbewusstsein ist typisch f\xfcr die sexuelle Drei, der auch im inneren
        Zusammenbruch nach au\xdfen funktioniert.</p>
        <p class="vb-intro"><strong>c) Die Notwendigkeit, im Mittelpunkt zu stehen:</strong>
        Jede seiner Handlungen \u2013 einschlie\xdflich der Ver\xf6ffentlichung von Videos \u2013 zeigte
        das starke Bed\xfcrfnis, im Zentrum der Aufmerksamkeit zu stehen.
        Ein Schl\xfcsselelement des Sexuellen Drei.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Intensiv und elektrisierend:</strong>
        Wie bei der sexuellen Drei \xfcblich, war Magnottas Energie un\u00fcbersehbar. Er strahlte eine magnetische
        Anziehungskraft aus, die Medien wie \xd6ffentlichkeit gleicherma\xdfen in seinen Bann zog.</p>
        <p class="vb-intro"><strong>b) Uners\u00e4ttliche Suche nach Aufmerksamkeit:</strong>
        Magnottas Energie spiegelte eine st\xe4ndige Suche nach mehr Aufmerksamkeit wider.
        Es reichte nicht, ein Verbrechen zu begehen; er musste es \xf6ffentlich zur Schau stellen.</p>
        <p class="vb-intro"><strong>c) Dramatische Inszenierung und blockierte Herzenergie:</strong>
        Die Energie der sexuellen Drei ist dramatisch. Durch die dahinter verborgene blockierte Herzenergie
        kann sich das Drama noch \u201eimposanter" an der Oberfl\xe4che manifestieren \u2013 die sexuelle Drei kontrolliert
        seine tief verborgene Herzenergie durch \u201eherzlose Taten".
        Der w\xe4chserne Gesichtsausdruck, das \u201ePorzellanpuppen-Gesicht" \u2013 diese Menschen scheinen
        dem Wachsfigurenkabinett von Madame Tussaud entsprungen zu sein.
        Kein Zufall: Madame Tussaud (1761\u20131850) schuf ihre ersten Totenmasken aus
        Wachskopien hingerichteter Pers\xf6nlichkeiten der Franz\xf6sischen Revolution \u2013
        Ludwig XVI., Marie-Antoinette, Robespierre. Die \u201eMakellosigkeit" als Einbalsamierung
        des Lebens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Der Pfau</h3>
        <p class="vb-intro"><strong>a) Selbstinszenierung und Eitelkeit:</strong>
        Der Pfau steht f\xfcr das Bed\xfcrfnis, durch \xe4u\xdferliche Sch\xf6nheit Aufmerksamkeit zu erlangen.
        Magnotta benutzte seine Erscheinung, um sich als etwas Besonderes darzustellen.</p>
        <p class="vb-intro"><strong>b) Anziehung durch Fassade:</strong>
        Der Pfau zeigt seine Federn, um andere anzulocken. Bei Magnotta erkennbar in der
        betonten Selbstinszenierung und der Pr\xe4sentation eines perfekt gepflegten \xc4u\xdferen.</p>
        <p class="vb-intro"><strong>c) Leere hinter der Sch\xf6nheit:</strong>
        Wie des Pfaus Fassade nur eine oberfl\xe4chliche Attraktion ist, war Magnottas
        \xe4u\xdferer Schein nur eine Maske \xfcber ernsthaften psychologischen Problemen.
        Seine Taten offenbarten eine emotionale Leere hinter der Dreier-Maske.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Luka Magnotta</strong> verk\xf6rpert in ersch\xfcckernder Weise die Schattenseiten des Sexuellen Drei.
        Seine Verbrechen und die Art, wie er sie \xf6ffentlich inszenierte, spiegeln das Bed\xfcrfnis
        wider, im Rampenlicht zu stehen \u2013 selbst wenn dies in dieser krankhaften Auspr\xe4gung
        extreme Mittel erforderte. Wie der Pfau, der durch \xe4u\xdfere Pracht Aufmerksamkeit sucht,
        nutzte Magnotta seine Fassade f\xfcr Ruhm; doch hinter dieser Maske lag eine
        zutiefst verst\xf6rte Pers\xf6nlichkeit voller Leere und Verzweiflung.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) 70\xa0+ Aliasnamen \u2013 das Selbst als reine Konstruktion:</strong>
        <strong>Magnotta</strong> wurde als Eric Clinton Kirk Newman geboren und verwendete im Laufe seines
        Lebens \xfcber siebzig verschiedene Alias-Identit\xe4ten. Das ist kein blo\xdfes Versteckspiel:
        Es ist die direkte Konsequenz des sexuellen Dreier-Musters. Die Drei hat keine stabile Identit\xe4t
        unter ihren Masken \u2013 sie <em>ist</em> die Maske. Bei Magnotta wurde daraus ein
        vollst\xe4ndiges System: immer neue Rollenbilder, Modelnamen, Fantasiepersonen.
        Jede neue Identit\xe4t war ein weiterer Versuch, endlich jemand zu sein.</p>
        <p class="vb-intro"><strong>b) \u201eDon't F**k with Cats" \u2013 die Generalprobe:</strong>
        Bereits vor dem Mord an Jun Lin hatten Internet-Detektive eine Facebook-Gruppe gegr\xfcndet,
        die gezielt nach dem Urheber der Katzen-T\u00f6tungsvideos fahndete. Magnotta wusste davon \u2013
        und filmte weiter. Die Jagd selbst war Aufmerksamkeit. Die Katzenvideos waren keine
        privaten Abweichungen, sondern eine Generalprobe: Kann ich die Welt mit meinem
        Content bewegen? Die Antwort war ja \u2013 und das verst\xe4rkte das Muster bis zum
        Unausweichlichen.</p>
        <p class="vb-intro"><strong>c) Die Verhaftung in Berlin \u2013 im eigenen Ruhm gefangen:</strong>
        <strong>Magnotta</strong> wurde in einem Berliner Internetcaf\xe9 verhaftet, w\xe4hrend er Zeitungsartikel
        \xfcber sich selbst las. Er konnte nicht aufh\xf6ren, sein eigenes Bild zu konsumieren.
        Die sexuelle Drei braucht den Spiegel der \xd6ffentlichkeit als Existenznachweis: Nur wenn andere
        \xfcber mich schreiben, bin ich real. Dass dieser Reflex ihn ins Gef\xe4ngnis f\xfchrte,
        ist die tragische Logik des Systems.</p>
        <p class="vb-intro"><strong>d) Die Karla-Homolka-L\xfcge:</strong>
        <strong>Magnotta</strong> streute gezielt Ger\xfcchte, er sei in einer Beziehung mit Karla Homolka \u2013
        Kanadas ber\xfchmtester verurteilter Serienm\u00f6rderin. Es gab keine solche Beziehung.
        Aber selbst die gef\xe4lschte Verbindung zu einer Ber\xfchmtheit war f\xfcr die sexuelle Drei
        Identit\xe4tsgewinn: Ich bin jemand, weil ich mit jemandem assoziiert werde.
        Selbst seine Beziehungen waren Performance-Material.</p>
        <p class="vb-intro"><strong>e) \u201e1 Lunatic 1 Ice Pick" \u2013 der Mord als Content:</strong>
        <strong>Magnotta</strong> uploadete das Video des Mordes auf ein Schockportal mit einem gezielt
        gew\xe4hlten Titel. Er t\xf6tete nicht und filmte dann: Die Filmlogik war von Anfang an
        Teil der Tatplanung. Der Mord war der Content \u2013 er wurde <em>produziert</em>.
        Das Opfer Jun Lin war Teil der Inszenierung. Dies ist der dunkelste Ausdruck
        des sexuellen Dreier-Musters: andere Menschen werden zum Material f\xfcr die eigene Darbietung.</p>
        <p class="vb-intro"><strong>f) Sharon Stone und das Ice Pick \u2013 das Verbrechen als Filmzitat:</strong>
        Nach \xdcberzeugung von Ermittlern war die Wahl des Ice Picks als Mordwaffe eine
        bewusste Referenz an den Film \u201eBasic Instinct" (1992) mit Sharon Stone.
        Magnotta identifizierte sich mit weiblichen Filmikonen und kopierte deren
        \xc4sthetik in seiner eigenen Online-Pr\xe4senz. Selbst die Mordwaffe war ein Zitat \u2013
        kein Werkzeug, sondern ein Requisit. Diese totale \xdcberblendung von Fiktion und
        Realit\xe4t ist das Endstadium des sexuellen Dreier-Musters: Das Leben wird zum Drehbuch,
        andere Menschen zu Figuranten.</p>
        <p class="vb-intro"><strong>g) Naranjos sexuelle Drei \u2013 \u201eCharisma" als Identit\xe4tsersatz:</strong>
        Claudio Naranjo benannte den Sexuellen Typ 3 mit dem Stichwort <em>Charisma</em>:
        Er verf\xfchrt durch reines Bild-Appeal, ohne innere Substanz dahinter.
        Magnotta arbeitete als Modell und Escort \u2013 beides professionelle Formen von
        \u201ejemandem gef\xe4llen und Aufmerksamkeit ernten". Als diese Kan\xe4le nicht
        die gew\xfcnschte Gr\xf6\xdfe brachten, eskalierte die Suche.
        Ber\xfcchtigung ist bei der sexuellen Drei die Ultima Ratio: lieber das schlimmste Monster sein
        als unsichtbar.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Der Sexuelle Typ 3 in seiner tiefsten Auspr\xe4gung \u2013 Charisma, Verf\xfchrung und der Weg von der Maske zum echten Selbst.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "Wie sich die sexuelle Drei von selbsterhaltender Drei und Sozialer Drei unterscheidet \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 3 ausf\xfchrlich portr\xe4tiert \u2013 T\xe4uschung, blockierte Herzenergie und der Heilungsweg \xfcber Authentizit\xe4t.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Magnotta wurde 2014 wegen erstgradigem Mord zu lebenslanger Haft ohne Bew\u00e4hrung verurteilt. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-pablo-escobar", label:"Kriminalpsychologie: Pablo Escobar"},
        {route:"kriminalpsychologie-adolf-hitler", label:"Kriminalpsychologie: Adolf Hitler"},
        {route:"blickqualitaet", label:"Blickqualit\xe4t der 9 Typen"},
      ])}
    </div>
  `);
}
function richardRamirezPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Richard Ram\u00edrez \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/richard-ramirez-portrait.jpg" alt="Richard Ram\u00edrez \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Richard Ram\u00edrez</p>
        <p class="krim-portrait-typ">SX3w4 \u00b7 Sexueller Typ 3 mit Viererfl\u00fcgel</p>
        <p style="font-size:0.85rem;color:var(--muted);margin:0.2rem 0 0;">\u201eDer Night Stalker" \u2013 S\u00fcdkalifornien 1984\u20131985</p>
      </div>
      <p class="psycho-intro">
        <strong>Ricardo Leyva Mu\u00f1oz Ram\u00edrez</strong>, bekannt als <strong>Richard Ram\u00edrez</strong>,
        geboren 1960 in El Paso, Texas, ermordete zwischen April 1984 und August 1985
        mindestens <strong>13 Menschen</strong> in der Gegend um Los Angeles und San Francisco.
        Er vergewaltigte zahlreiche weitere Opfer, beging Einbr\u00fcche, \u00dcberf\u00e4lle und Folterungen.
        Seine Taten waren charakterisiert durch scheinbare Willk\u00fcr \u2013 er schlug nachts
        in Vororth\u00e4usern ein, ohne festes Opferprofil \u2013, durch satanische Symbole,
        die er an Tatorten hinterlie\u00df, und durch sein Verhalten im Gerichtssaal:
        das Victory-Zeichen, das Pentagramm auf der Handfl\u00e4che, der Blick f\u00fcr die Kameras.
        Er wurde 2013 in der Untersuchungshaft in Greenbrae, Marin County, Kalifornien,
        an einem B-Zell-Lymphom verstorben \u2013 bevor sein Todesurteil vollstreckt wurde.
        Was Ram\u00edrez von anderen Serienm\u00f6rdern unterscheidet: Er war der erste,
        der sich selbst zum Mythos machte \u2013 bewusst, konsequent, \u00f6ffentlich.
        Das Enneagramm macht sichtbar, was dahinter arbeitete.
      </p>

      <div class="vb-section" style="background:rgba(100,0,120,0.06);border-left:3px solid #640078;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Richard Ram\u00edrez</strong> wird dem <strong>Sexuellen Typ 3 mit Viererfl\u00fcgel</strong> zugeordnet.
        Die sexuelle Drei ist auf intensive, exklusive Verbindung ausgerichtet \u2013
        sie will in den Augen des anderen einzigartig, unwiderstehlich, unvergesslich sein.
        Der Viererfl\u00fcgel verleiht ihr Tiefe, Dunkelheit, das Bed\u00fcrfnis nach einem
        unverwechselbaren Selbstbild jenseits des Gew\u00f6hnlichen.
        Der Stresspunkt liegt bei der <strong>Neun</strong>:
        Bet\u00e4ubung, Dissoziation, das Verschwinden in einer entr\u00fcckten inneren Welt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Tierentsprechung: Der Pfau</h3>
        <p class="vb-intro">
        Der <strong>Pfau</strong> ist die Tierentsprechung der sexuellen Drei.
        Er existiert, um gesehen zu werden. Sein Rad ist nicht F\u00fcrsorge, nicht St\u00e4rke \u2013
        es ist reines Signal: Ich bin hier. Ich bin mehr.
        Kein anderes Tier kommuniziert so vollst\u00e4ndig durch sein Erscheinungsbild.
        Ram\u00edrez war ein Pfau mit satanischem Rad.
        Er w\u00e4hlte einen Look, eine Ideologie, eine \u00c4sthetik, die garantiert,
        dass man ihn nicht vergisst: schwarze Kleidung, AC/DC-Cap,
        das Pentagramm auf der Handfl\u00e4che, das Victory-Zeichen vor den Kameras.
        Manche Pfauen wollen Bewunderung. Ram\u00edrez wollte Schrecken.
        Aber der Antrieb ist derselbe: das Rad ausgebreitet,
        die Augen der anderen darauf gerichtet.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die sexuelle Drei: Ich will unvergesslich sein</h3>
        <p class="vb-intro"><strong>a) Das Grundprinzip der sexuellen Drei:</strong>
        Die sexuelle Drei ist auf das Begehren ausgerichtet \u2013 sie will das Objekt des Begehrens sein,
        will im anderen ein Feuer entz\u00fcnden, will nicht nur bewundert, sondern verschluckt werden.
        Im Gesunden ist das magnetische Anziehungskraft, Leidenschaft, Charisma.
        In der Pathologie wird daraus der Wunsch, nicht nur begehrt zu werden \u2013
        sondern gef\u00fcrchtet. Nicht nur gesehen \u2013 sondern nicht mehr aus dem Kopf zu kriegen.
        Ram\u00edrez sprach in Verh\u00f6ren und Interviews davon, dass er unsterblich werden wolle.
        Nicht im spirituellen Sinne \u2013 im medialen Sinne: als Figur, als Legende.</p>
        <p class="vb-intro"><strong>b) Der Viererfl\u00fcgel: Dunkelheit als Identit\u00e4t:</strong>
        Der Viererfl\u00fcgel der sexuellen Drei erzeugt ein Bed\u00fcrfnis nach Tiefe, Einzigartigkeit,
        einem Selbstbild jenseits des Gew\u00f6hnlichen.
        Die Vier fragt: Wer bin ich wirklich? Was macht mich unverwechselbar?
        Bei Ram\u00edrez verband sich diese Suche fr\u00fch mit Dunkelheit und Gewalt:
        Er wuchs in einer von Armut und famili\u00e4rer Gewalt gepr\u00e4gten Umgebung auf,
        sein \u00e4lterer Bruder Miguel, ein Vietnam-Veteran, erz\u00e4hlte ihm in der Kindheit
        von Vergewaltigungen und T\u00f6tungen und zeigte ihm Troph\u00e4enfotos.
        Der Viererfl\u00fcgel machte das B\u00f6se zu seinem Identit\u00e4tsmerkmal \u2013
        zur einzigartigen Signatur, die ihn von allen anderen unterschied.</p>
        <p class="vb-intro"><strong>c) Die Leidenschaft: Eitelkeit als Selbstmythologisierung:</strong>
        Die Leidenschaft der Drei ist die <strong>Eitelkeit</strong> \u2013
        das Festhalten an einem Selbstbild, das gl\u00e4nzt, das z\u00e4hlt, das gesehen wird.
        F\u00fcr Ram\u00edrez bedeutete das keine klassische Selbstoptimierung \u2013
        sondern die Erschaffung einer Figur, die in die kulturelle Memoria eingeht:
        der Night Stalker, der Diener Satans, der Unsterbliche.
        Im Gerichtssaal posierte er. Er heiratete w\u00e4hrend des Prozesses.
        Er empfing Briefe von Verehrerinnen. Er genoss es.
        Das ist die Eitelkeit der SX3 in ihrer extremsten Auspr\u00e4gung:
        nicht Sch\u00f6nheit als W\u00e4hrung \u2013 sondern Schrecken als Marke.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Das Tatgeschehen: Der Night Stalker 1984\u20131985</h3>
        <p class="vb-intro"><strong>a) Fr\u00fche Pr\u00e4gung und Drogenjahre:</strong>
        Ram\u00edrez wuchs in El Paso auf, j\u00fcngstes von f\u00fcnf Kindern eines Eisenbahners.
        Als Teenager verbrachte er viel Zeit mit seinem Cousin Miguel,
        einem zur\u00fcckgekehrten Vietnam-Veteranen mit schwerer PTBS.
        Miguel zeigte ihm Fotos von Kriegsgr\u00e4ueln und erz\u00e4hlte ihm von Vergewaltigungen \u2013
        Ram\u00edrez war fasziniert. Miguel erschoss sp\u00e4ter seine eigene Frau vor Ram\u00edrez' Augen.
        Als Teenager zog Ram\u00edrez nach Los Angeles, lebte obdachlos,
        schlief in Abbruchh\u00e4usern und Motels, konsumierte exzessiv Kokain und Marihuana.
        Er h\u00f6rte Heavy Metal \u2013 besonders AC/DC. Das Lied \u201eNight Prowler"
        auf dem Album \u201eHighway to Hell" wurde sein innerer Soundtrack.
        Er begann mit Einbr\u00fcchen, dann mit ersten Angriffen.</p>
        <p class="vb-intro"><strong>b) Die Taten 1984\u20131985 \u2013 Methode und Willk\u00fcr:</strong>
        Ram\u00edrez operierte ausschlie\u00dflich nachts, in Vororth\u00e4usern der San Gabriel Valley,
        sp\u00e4ter auch im Gro\u00dfraum San Francisco.
        Er drang durch offene Fenster oder aufgebrochene T\u00fcren ein.
        Seine Opfer waren M\u00e4nner, Frauen und Kinder \u2013 ohne einheitliches Profil.
        Er erschoss, erw\u00fcrgte, schlug mit H\u00e4mmern, vergewaltigte Opfer jeden Alters.
        An einigen Tatorten zeichnete er Pentagramme mit Lippenstift an W\u00e4nde.
        Er nahm Schmuck und Bargeld mit \u2013 teils wie ein Gelegenheitsdieb,
        teils scheinbar ohne Interesse am Diebesgut.
        Einige Opfer \u00fcberlebten: Er lie\u00df sie am Leben, wenn sie ihm gefielen,
        wenn sie \u201eSatan" gelobten, wenn er einfach das Interesse verlor.
        Die Willk\u00fcr war keine Laune \u2013 sie war Teil des Signals:
        Niemand ist sicher. Ich kann \u00fcberall sein.</p>
        <p class="vb-intro"><strong>c) Die Fahndung und die Panik:</strong>
        Los Angeles verfiel in kollektive Panik. Schlossereien meldeten Rekordverk\u00e4ufe.
        Menschen schliefen mit Waffen neben dem Bett.
        Die Polizei konnte zun\u00e4chst kein einheitliches T\u00e4terprofil erstellen \u2013
        die Opfer waren zu verschieden, die Methoden zu uneinheitlich.
        Erst die forensische Auswertung eines Fu\u00dfabdrucks und eines Zahnabdrucks
        brachte die Ermittlungen voran. Im August 1985 wurde ein Fingerabdruck
        aus einem gestohlenen Auto mit einem Polizeiregister abgeglichen \u2013
        und kam auf Ram\u00edrez zur\u00fcck, der bereits wegen kleinerer Delikte aktenkundig war.</p>
        <p class="vb-intro"><strong>d) Die Verhaftung \u2013 der Mob (August 1985):</strong>
        Am 31. August 1985 erkannte ein Bewohner des East Los Angeles Ram\u00edrez,
        nachdem sein Foto in allen Zeitungen erschienen war.
        Ram\u00edrez versuchte, ein Auto zu stehlen \u2013 und wurde von einer aufgebrachten Menge
        auf der Stra\u00dfe gestellt und zusammengeschlagen, bis die Polizei eintraf.
        Er rief den Beamten zu: \u201eThank God you came. I am the Night Stalker."
        Im Gerichtssaal: das Victory-Zeichen, das Pentagramm auf der Handfl\u00e4che,
        gezielte Blicke f\u00fcr die Kameras. Er heiratete w\u00e4hrend des Prozesses Doreen Lioy.
        Er wurde 1989 in 13 F\u00e4llen f\u00fcr schuldig befunden und zum Tode verurteilt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Der Neuner-Stress: Entr\u00fcckung und innere Leere</h3>
        <p class="vb-intro">
        Die Drei bewegt sich im Stress in Richtung <strong>Neun</strong> \u2013
        Dissoziation, Bet\u00e4ubung, das Verschwinden in einer inneren Welt ohne Kontakt.
        Ram\u00edrez beschrieb seinen Zustand w\u00e4hrend der Taten als fast traumhaft \u2013
        wie in einem anderen Bewusstseinszustand, au\u00dferhalb der normalen Wahrnehmung.
        Seine exzessive Drogenbenutzung, die n\u00e4chtlichen Stunden, die Dunkelheit,
        die satanische Ikonografie: Das alles sind Werkzeuge der Neuner-Dissoziation \u2013
        ein Rahmen, der den normalen Bewusstseinszustand aufhebt
        und einen anderen erm\u00f6glicht, in dem die Regeln nicht gelten.
        Der Pfau schl\u00e4gt sein Rad \u2013 und verschwindet in die Nacht.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro">
        Richard Ram\u00edrez zeigt, was aus der sexuellen Drei wird,
        wenn fr\u00fche Traumatisierung, totale soziale Isolation und ein kulturelles Umfeld,
        das Gewalt verherrlicht, zusammenkommen:
        Das Grundmuster \u2013 einzigartig sein, begehrt werden, unvergesslich sein \u2013
        dreht sich ins Dunkelste.
        Keine Bewunderung? Dann Schrecken. Keine Liebe? Dann Angst.
        Der Pfau ohne Bewunderer wird gef\u00e4hrlich.
        Was Ram\u00edrez von Ted Bundy oder Luka Magnotta unterscheidet,
        ist das Element der bewussten Mythologisierung:
        Er wollte nicht nur t\u00f6ten \u2013 er wollte eine Legende sein.
        Er ist eine.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Einordnung</h3>
        <p class="vb-intro">
        <strong>Subtyp:</strong> SX3w4 \u2013 Sexuelle Drei mit Viererfl\u00fcgel.<br>
        <strong>Leidenschaft:</strong> Eitelkeit \u2013 Selbstmythologisierung, Schrecken als Marke, Unsterblichkeit als Ziel.<br>
        <strong>Stresspunkt:</strong> Neun \u2013 Dissoziation, Entr\u00fcckung, der traumhafte Zustand w\u00e4hrend der Taten.<br>
        <strong>Tierentsprechung:</strong> Pfau \u2013 existiert um gesehen zu werden; bei Ram\u00edrez: das Rad als satanische Ikonografie.<br>
        <strong>Gestorben:</strong> 7. Juni 2013 in Greenbrae, Marin County, Kalifornien \u2013 B-Zell-Lymphom, vor Vollstreckung des Todesurteils.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die sexuelle Drei im Vergleich: Wie sich Eitelkeit bei SE3, SO3 und SX3 unterschiedlich ausdr\u00fcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "Wie sich der sexuelle Typ 3 von selbsterhaltender und sozialer Drei unterscheidet \u2013 27 Charakterprofile.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 3 ausf\u00fchrlich portr\u00e4tiert \u2013 Eitelkeit, blockierte Herzenergie und der Heilungsweg \u00fcber echte Authentizit\u00e4t.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Richard Ram\u00edrez wurde 1989 in 13 Anklagepunkten des Mordes schuldig gesprochen und zum Tode verurteilt. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-ted-bundy", label:"Kriminalpsychologie: Ted Bundy (SO1w9)"},
        {route:"kriminalpsychologie-luka-magnotta", label:"Kriminalpsychologie: Luka Magnotta (SX3w4)"},
        {route:"kriminalpsychologie-pedro-alonso-lopez", label:"Kriminalpsychologie: Pedro Alonso L\u00f3pez (SO3w2)"},
        {route:"krankheitsportraets-richard-ramirez", label:"Krankheitsportr\u00e4t: Richard Ram\u00edrez (SX3w4) \u2013 B-Zell-Lymphom"},
      ])}
    </div>
  `);
}


function harveyWeinsteinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Harvey Weinstein \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/harvey-weinstein-portrait.jpg" alt="Harvey Weinstein \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Harvey Weinstein</p>
        <p class="krim-portrait-typ">SE2w1 \u00b7 Selbsterhaltender Typ 2 mit Einserfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">US-amerikanischer Filmproduzent und Serient\u00e4ter \u00b7 Tierentsprechung: Flusspferd</p>
      </div>

      <p class="psycho-intro">
        <strong>Harvey Weinstein</strong> (geb. 1952) war einer der m\xe4chtigsten Filmproduzenten Hollywoods,
        Mitgr\xfcnder von Miramax Films und The Weinstein Company.
        Er produzierte Klassiker wie <em>Pulp Fiction</em>, <em>Good Will Hunting</em> und
        <em>Shakespeare in Love</em>. 2020 wurde er in New York wegen Vergewaltigung und sexueller
        N\xf6tigung zu 23 Jahren Haft verurteilt; 2023 kamen in Kalifornien weitere 16 Jahre hinzu.
        \xdcber 80 Frauen erhoben Vorw\xfcrfe gegen ihn. Die Ber\xfcchtigung von Journalistinnen wie
        Jodi Kantor und Megan Twohey sowie des Reporters Ronan Farrow im Jahr 2017 z\xfcndete
        die globale #MeToo-Bewegung. Das Enneagramm macht erkl\xe4rbar, wie ein Mensch gleichzeitig
        echter M\xe4zen und systemischer Predator sein kann.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Harvey Weinstein</strong> wird dem <strong>Selbsterhaltenden Typ 2 mit Fl\xfcgel 1</strong> im Enneagramm
        zugeordnet. Die Leidenschaft der Zwei ist <em>Stolz</em> \u2013 beim selbsterhaltenden Subtyp
        ausgedr\xfcckt als <strong>Anspruch und Privileg</strong>: Claudio Naranjo nannte die selbsterhaltende Zwei
        schlicht \u201eMe First" oder \u201ePrivilege". Die selbsterhaltende Zwei gibt nicht aus reiner Gro\xdfz\xfcgigkeit \u2013
        er gibt, weil Geben Abh\xe4ngigkeit erzeugt \u2013 und Abh\xe4ngigkeit Anspruch. Wer so viel gegeben hat, nimmt sich das Recht, zu nehmen. Der Fl\xfcgel 1 erg\xe4nzt dieses Muster mit einer
        moralischen Selbstgerechtigkeit: <em>Ich k\xe4mpfe f\xfcr das Richtige</em> \u2013 eine perfekte
        Tarnung f\xfcr das Raub-Muster darunter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\xe4t</h3>
        <p class="vb-intro"><strong>a) Einsch\xfcchternd und fordernd:</strong>
        Weinsteinss Blick war ber\xfcchtigt: ein kalkuliertes Repertoire zwischen scheinbarer W\xe4rme
        und kaum verh\xfcllter Bedrohung. Zeitzeugen beschrieben ihn als physisch \xfcberw\xe4ltigend \u2013
        ein Blick, der signalisierte: <em>Du bist hier, weil ich es erlaube.</em></p>
        <p class="vb-intro"><strong>b) Pr\xfcfend und bewertend:</strong>
        Er musterte Menschen wie Gesch\xe4ftsobjekte \u2013 was kannst du mir geben, was schulde ich dir,
        und vor allem: was schuldest du mir? Der Blick der selbsterhaltenden Zwei rechnet st\xe4ndig die Bilanz der
        Verpflichtungen nach.</p>
        <p class="vb-intro"><strong>c) Pl\xf6tzliche W\xe4rme als Werkzeug:</strong>
        Die selbsterhaltende Zwei kann in Sekunden von Eisk\xe4lte zu \xfcberstr\xf6mender Herzlichkeit wechseln \u2013
        wenn es ihm n\xfctzt. Weinstein beherrschte diesen Wechsel meisterhaft:
        Das Angebot, die Umarmung, das Versprechen \u2013 und dann die Forderung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Erm\xf6glicher:</strong>
        <strong>Weinstein</strong> machte Karrieren. Er erkannte Talent, f\xf6rderte es, \xf6ffnete T\xfcren \u2013
        und schuf damit systematisch Abh\xe4ngigkeit. Die selbsterhaltende Zwei gibt, weil Geben Kontrolle erzeugt.
        Jede F\xf6rderung war eine unsichtbare Rechnung.</p>
        <p class="vb-intro"><strong>b) Netzwerk der Verpflichtung:</strong>
        Er baute \xfcber Jahrzehnte ein dichtes Netz aus Abh\xe4ngigkeiten, Gef\xe4lligkeiten und
        Loyalit\xe4ten. Agenten, Manager, Anw\xe4lte, Journalisten, Studios \u2013 alle waren in das
        System eingebunden. Die selbsterhaltende Zwei f\xfchlt sich in solchen Netzwerken sicher wie das Flusspferd
        in ihrem Teich.</p>
        <p class="vb-intro"><strong>c) Progressive Fassade des Fl\xfcgels Eins:</strong>
        Er finanzierte feministische Filme, unterst\xfctzte die Demokratische Partei massiv,
        positionierte sich als Verb\xfcndeter der Frauen in Hollywood \u2013 w\xe4hrend er gleichzeitig
        systematisch Frauen missbrauchte. Der Fl\xfcgel 1 liefert die moralische Rechtfertigung,
        mit der die selbsterhaltende Zwei sein Anspruchsdenken ummantelt: <em>Ich tue so viel Gutes,
        ich habe das Recht auf Ausnahmen.</em></p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Anspruch als Kernstruktur:</strong>
        Selbsterhaltende Zwei = \u201ePrivilege / Me First". Weinsteinss innerste \xdcberzeugung: <em>Ich habe gegeben,
        also bin ich berechtigt zu nehmen.</em> Dieses Anspruchsdenken ist keine bewusste
        Strategie \u2013 es ist eine tief verwurzelte psychische Struktur, die alle Beziehungen
        als transaktional liest.</p>
        <p class="vb-intro"><strong>b) Manipulation durch F\xfcrsorge:</strong>
        Erst geben, dann fordern. Erst die Karrierechance, dann die Einladung ins Hotelzimmer.
        Erst die herzliche Umarmung, dann der \xdcbergriff. Der Zwei-Zyklus in seiner
        pathologischsten Form: F\xfcrsorge als Trojanisches Pferd.</p>
        <p class="vb-intro"><strong>c) Das Schweige-System:</strong>
        <strong>Weinstein</strong> verwendete das gleiche Loyalit\xe4tsnetzwerk, das ihm Erfolg gebracht hatte,
        zur Unterdr\xfcckung von Opfern: Geheimhaltungsvertr\xe4ge, Drohungen, Anw\xe4lte.
        Die selbsterhaltende Zwei sichert ihr Revier mit denselben Mitteln, mit denen sie es aufgebaut hat.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der gro\xdfz\xfcgige M\xe4zen:</strong>
        In der Filmbranche galt Weinstein als jemand, der Chancen gab und Talente entdeckte.
        Diese Wirkung war echt \u2013 die selbsterhaltende Zwei gibt wirklich. Das macht sie so schwer zu durchschauen:
        das Gute und das Gef\xe4hrliche kommen aus derselben Quelle.</p>
        <p class="vb-intro"><strong>b) Unterdr\xfcckende Pr\xe4senz:</strong>
        Gleichzeitig wurde er von Mitarbeitern als tyrannisch, explosiv und unberechenbar
        beschrieben. Der selbsterhaltende Zwei mit Einserfl\u00fcgel kann bei Frustration seiner Anspruchsstruktur in extreme
        Wutausbr\xfcche verfallen \u2013 wenn das Geben nicht die erwartete R\xfcckkehr bringt.</p>
        <p class="vb-intro"><strong>c) Genie und Monster in einer Person:</strong>
        Diese Doppelnatur erm\xf6glichte es dem System, so lange wegzusehen. Denn wer Weinstein
        anklagte, riskierte, das Genie mit dem Monster zu verwerfen \u2013 und das war in Hollywood
        undenkbar. Die selbsterhaltende Zwei nutzt ihre echten St\xe4rken als Schutzschild.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Expansiv und raumf\xfcllend:</strong>
        <strong>Weinstein</strong> betrat R\xe4ume wie ein Gravitationsfeld \u2013 alle orientierten sich an ihm.
        Diese physische wie psychische Raumnahme ist typisch f\xfcr die selbsterhaltende Zwei:
        Das Revier wird besetzt, nicht verhandelt.</p>
        <p class="vb-intro"><strong>b) Unterdr\xfcckte Wut hinter der W\xe4rme:</strong>
        Hinter der Gro\xdfz\xfcgigkeit schlummerte eine explosive Aggressivit\xe4t, die sich
        entlud, sobald jemand die implizite Transaktion verweigerte. Mehrere Frauen
        beschrieben den Wechsel von Charme zu Bedrohung als erschreckend abrupt \u2013
        das Flusspferd, das pl\xf6tzlich aus dem Wasser schie\xdft.</p>
        <p class="vb-intro"><strong>c) Die Energie der Transaktionalit\xe4t:</strong>
        Jede Begegnung mit Weinstein war implizit eine Transaktion. Sein Energiefeld
        kommunizierte st\xe4ndig: <em>Was gibst du mir, was gebe ich dir?</em>
        Diese Energie war f\xfcr viele Beteiligte sp\xfcrbar \u2013 und wurde aus Karrieregr\xfcnden
        hingenommen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Das Flusspferd</h3>
        <p class="vb-intro"><strong>a) Tr\xfcgerische Harmlosigkeit:</strong>
        Das Flusspferd wirkt zunächst tr\xe4ge, massig, beinahe komisch.
        Dabei ist es eines der gef\xe4hrlichsten Tiere Afrikas. \xc4hnlich wirkte Weinstein
        auf viele: ein \xfcbergewichtiger, ungepflegter Mann, der kaum wie ein klassischer
        \u201eMachtmensch" aussah \u2013 und gerade deshalb so lange untersch\xe4tzt wurde.</p>
        <p class="vb-intro"><strong>b) Territoriales Dominanzverhalten:</strong>
        Das Flusspferd duldet keine Eindringlinge in seinem Gew\xe4sser. Weinstein behandelte
        Hollywood als sein pers\xf6nliches Revier. Wer seine Regeln nicht akzeptierte,
        wurde aus dem Teich gedr\xe4ngt \u2013 Karriere beendet, Rufmord betrieben, rechtlich verfolgt.</p>
        <p class="vb-intro"><strong>c) Explosive Aggression unter der Oberfl\xe4che:</strong>
        Flusspferde sind nicht dauerhaft aggressiv \u2013 aber ihre Ausbr\u00fcche sind pl\xf6tzlich
        und vernichtend. Weinsteins Wutanf\xe4lle, Drohungen und tats\xe4chliche Gewalttaten
        folgten demselben Muster: langes Gew\xe4hren, gelegentliches Gro\xdfz\xfcgig-Sein,
        dann explosiver Ausbruch wenn die Erwartung entt\xe4uscht wurde.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Harvey Weinstein</strong> verk\xf6rpert den Selbsterhaltenden Typ 2 mit Fl\xfcgel 1 in seiner
        dunkelsten Auspr\xe4gung. Echter M\xe4zen und systematischer Predator \u2013 diese Doppelnatur
        ist kein Widerspruch, sondern zwei Seiten derselben Struktur der selbsterhaltenden Zwei: Das Geben erzeugt
        Anspruch, der Anspruch erm\xe4chtigt zur Entnahme. Das Flusspferd-Bild verdeutlicht die
        zentrale Paradoxie: ein Tier, das im eigenen Teich f\xfcr Ordnung sorgt und F\xfcrsorge
        ausstrahlt \u2013 aber jeden vernichtet, der seine Grenzen nicht respektiert.
        Weinsteins Fall wurde zum Symbol: nicht nur f\xfcr individuelle Schuld, sondern f\xfcr
        ein Machtsystem, das genau diese Struktur jahrzehntelang sch\xfctzte.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Naranjos selbsterhaltende Zwei \u2013 \u201ePrivilege / Me First":</strong>
        Claudio Naranjo beschrieb den Selbsterhaltenden Typ 2 mit dem Begriff <em>Privileg</em>.
        Die selbsterhaltende Zwei f\xfchlt sich aufgrund ihrer Gaben und Leistungen zu Sonderbehandlung berechtigt \u2013
        und zwar nicht als bewusste Manipulation, sondern als echte innere \xdcberzeugung:
        <em>Ich habe so viel gegeben. Die Welt ist mir etwas schuldig.</em>
        Weinsteins Verhalten ist eine direkte Umsetzung dieser Struktur in extremster Form.</p>
        <p class="vb-intro"><strong>b) Black Cube \u2013 die selbsterhaltende Zwei sichert ihr Revier:</strong>
        Als die Vorw\xfcrfe 2017 ans Licht zu kommen drohten, heuerte Weinstein die israelische
        Geheimdienstfirma Black Cube an, um potenzielle Ankl\xe4gerinnen zu \xfcberwachen,
        zu destabilisieren und zum Schweigen zu bringen. Agenten gaben sich als Aktivistinnen
        und Journalistinnen aus. Das ist das Loyalit\xe4tsnetzwerk der selbsterhaltenden Zwei in ihrer dunkelsten
        Anwendung: die Werkzeuge des Aufbaus werden zum Werkzeug der Unterdr\xfcckung.</p>
        <p class="vb-intro"><strong>c) Das weinende Raubtier:</strong>
        Mehrere Opfer beschrieben dasselbe Muster: Weinstein wurde w\xe4hrend oder kurz nach dem
        \xdcbergriff weinend und flehend. Er bat um Verst\xe4ndnis, sprach von seiner Kindheit,
        seiner Einsamkeit \u2013 und bat die Frau, die er gerade angegriffen hatte, um Mitgef\xfchl.
        Dies ist klassische Manipulation der selbsterhaltenden Zwei: die Rolle des Hilfsbed\u00fcrftigen \xfcbernehmen,
        um den anderen in der Helfer-Position zu halten. Auf den Angriff folgt die
        emotionale Vereinnahmung.</p>
        <p class="vb-intro"><strong>d) Das Miramax-Genie \u2013 das Geben war echt:</strong>
        <strong>Weinstein</strong> produzierte einige der bedeutendsten Filme der 1990er und 2000er Jahre.
        Er hatte ein echtes Gespr\xfcr f\xfcr Qualit\xe4t und setzte sich f\xfcr Regisseure ein,
        die kein anderes Studio finanzieren wollte. Dieses Talent war nicht gespielt.
        Die selbsterhaltende Zwei gibt tats\xe4chlich \u2013 das macht sie so schwer zu verurteilen und so lange
        systemisch gesch\xfctzt: Die Rechnung kommt sp\xe4ter.</p>
        <p class="vb-intro"><strong>e) \u201eI'm a work in progress" \u2013 die selbsterhaltende Zwei als Opfer:</strong>
        Weinsteinss erste \xf6ffentliche Reaktion auf die Vorw\xfcrfe war kein Schuldbekenntnis,
        sondern eine Selbstdarstellung als lernender, sich entwickelnder Mensch:
        \u201eI came of age in the 60s and 70s [...] I need to get help."
        Dieser Rahmen \u2013 Ich bin nicht T\u00e4ter, ich bin ein Mensch, der Hilfe braucht \u2013
        ist die Umkehrung der selbsterhaltenden Zwei: Die Zwei ist darin ge\xfcbt, sich selbst als Bed\xfcrftigen
        darzustellen, um Mitgef\xfchl zu generieren statt Verantwortung zu \xfcbernehmen.</p>
        <p class="vb-intro"><strong>f) Die One-Wing-Doppelmoral:</strong>
        <strong>Weinstein</strong> spendete \xfcber Jahre Millionen an feministische Organisationen, an
        Frauenrechts-Kampagnen und an die Demokratische Partei. Er finanzierte Filme,
        die Frauen in starken Rollen zeigten. Der Fl\xfcgel 1 liefert der selbsterhaltenden Zwei eine
        moralische Identit\xe4t: <em>Ich bin auf der richtigen Seite der Geschichte.</em>
        Diese Selbstwahrnehmung als guter Mensch ist keine Heuchelei \u2013 die selbsterhaltende Zwei mit Einserfl\u00fcgel glaubt
        es wirklich. Das macht die Diskrepanz zwischen Selbstbild und Taten so extrem.</p>
        <p class="vb-intro"><strong>g) Das systemische Schweigen \u2013 Komplizenschaft als Produkt der selbsterhaltenden Zwei:</strong>
        Hunderte Menschen in Hollywood wussten es oder ahnten es \u2013 und schwiegen.
        Das ist keine Fügung. Die selbsterhaltende Zwei baut \xfcber Jahre ein Netz aus gegenseitigen
        Abh\xe4ngigkeiten auf, in dem Schweigen zur impliziten Vertragsbedingung wird.
        Jeder, der in Weinsteinss System profitiert hatte, war damit Teil des Schutzmantels.
        Sein Fall wurde deshalb zum Symbol nicht nur f\xfcr eine Einzelperson, sondern f\xfcr
        eine Machtstruktur, die die selbsterhaltende Zwei erschafft und von der sie abh\xe4ngt.
        #MeToo war der Moment, in dem dieses System zusammenbrach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Der Selbsterhaltende Typ 2 in seiner tiefsten Auspr\xe4gung \u2013 Anspruch, Geben als Kontrolle und der Weg zur echten Liebe ohne Rechnung.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "Wie sich die selbsterhaltende Zwei von Sozialer und Sexueller Zwei unterscheidet \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 2 ausf\xfchrlich portr\xe4tiert \u2013 Stolz, blockierte Herzenergie und der Heilungsweg \xfcber echte Bed\xfcrftigkeit.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Harvey Weinstein wurde in mehreren Verfahren wegen Vergewaltigung und sexueller N\u00f6tigung rechtskr\u00e4ftig verurteilt. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-ted-bundy", label:"Kriminalpsychologie: Ted Bundy"},
        {route:"kriminalpsychologie-pablo-escobar", label:"Kriminalpsychologie: Pablo Escobar"},
        {route:"blickqualitaet", label:"Blickqualit\xe4t der 9 Typen"},
      ])}
    </div>
  `);
}

function pabloEscobarPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Pablo Escobar \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/pablo-escobar-portrait.jpg" alt="Pablo Escobar \u2013 Bleistiftzeichnung" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Pablo Escobar</p>
        <p class="krim-portrait-typ">SE3w4 \u00b7 Selbsterhaltender Typ 3 mit Viererfl\u00fcgel</p>
      </div>
      <p class="psycho-intro">
        <strong>Pablo Escobar</strong> (1949\u20131993) war der Kopf des Medell\xedn-Kartells und kontrollierte
        zeitweise bis zu 80\xa0% des weltweiten Kokainmarkts. Er akkumulierte ein gesch\xe4tztes
        Verm\xf6gen von 30 Milliarden US-Dollar \u2013 und wurde dabei zum reichsten Verbrecher
        der Geschichte. Was ihn von anderen Drogenbossen unterscheidet: sein
        gleichzeitiges Wirken als Volksheld, Wohlt\xe4ter, Terrorist und skrupelloser M\xf6rder.
        Das Enneagramm macht diese Widerspr\xfcche lesbar.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Pablo Escobar</strong> wird dem <strong>Selbsterhaltenden Typ 3 mit Viererfl\u00fcgel</strong> im Enneagramm zugeordnet.
        Die Leidenschaft der Drei ist <em>T\xe4uschung</em> (Deceit) \u2013 aber beim selbsterhaltenden
        Subtyp richtet sie sich nicht auf Image und \xf6ffentliche Bewunderung wie bei der Sozialen Drei,
        sondern auf <strong>Akkumulation und Sicherheit</strong>: Reichtum, Kontrolle, Ressourcen.
        Die selbsterhaltende Drei arbeitet effizienter, pragmatischer und k\xe4lter als seine Geschwister-Subtypen \u2013
        und ist deshalb oft der gef\xe4hrlichste.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\xe4t</h3>
        <p class="vb-intro"><strong>a) Intensiv und durchdringend:</strong>
        Escobars Blick war scharf und wachsam, auf Macht und Kontrolle gerichtet.
        Er analysierte jede Situation sofort \u2013 nicht aus Neugier, sondern aus reinem Kalk\xfcl.</p>
        <p class="vb-intro"><strong>b) Berechnend und verschlagen:</strong>
        Er nutzte seinen Blick, um Schw\xe4chen zu erkennen und Menschen einzusch\xe4tzen.
        Sein verschlagener, eiskalter Ausdruck dr\xfcckte das Kernprinzip der selbsterhaltenden Drei aus:
        <em>Wie kann ich euch alle f\xfcr mich nutzen, damit ich noch reicher, gr\xf6\xdfer und
        m\u00e4chtiger werde?</em></p>
        <p class="vb-intro"><strong>c) Selbstbewusst und entschlossen:</strong>
        Seine Augen verrieten absolute Entschlossenheit und das Selbstbewusstsein eines Mannes,
        der sich mit zunehmendem Erfolg als unantastbar betrachtete \u2013 typisch f\xfcr die
        selbsterhaltende Eitelkeit der selbsterhaltenden Drei.</p>
        <p class="vb-intro"><strong>d) Kalt und emotional distanziert:</strong>
        Escobars Blick vermittelte eine scharfe Kalkulation ohne emotionale W\xe4rme.
        Die blockierte Herzenergie des Typs 3 zeigt sich nirgends deutlicher als in
        seinen Augen: Pr\xe4zision statt Mitgef\xfchl.</p>
        <p class="vb-intro"><strong>e) Unersch\u00fctterlich:</strong>
        Selbst in Momenten h\xf6chster Bedrohung bewahrte er die Fassung. Dieses
        Merkmal \u2013 die Ruhe im Sturm \u2013 ist ein Kernsignal der selbsterhaltenden Drei:
        keine Panik, nur n\xe4chster Zug.</p>
        <p class="vb-intro"><strong>f) Manipulativ-charmant wenn n\xf6tig:</strong>
        Er konnte auch Charme und Empathie projizieren \u2013 gezielt, instrumentell.
        Die Drei ist der charismatischste Waschb\u00e4r des Enneagramms, wenn es ihr n\xfctzt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unaufh\xf6rlicher Ehrgeiz:</strong>
        Als selbsterhaltende Drei war Escobars ganzes Leben auf Erfolg ausgerichtet. Er scheute vor nichts zur\xfcck \u2013
        Mord, Korruption, Terrorismus waren f\xfcr ihn Werkzeuge wie jede andere Gesch\xe4ftsstrategie.</p>
        <p class="vb-intro"><strong>b) Perfektionismus und Effizienz:</strong>
        Seine F\xe4higkeit, ein weltweites Drogennetzwerk zu steuern, war operational au\xdferordentlich.
        Die selbsterhaltende Drei versteht Systeme und optimiert sie r\u00fccksichtslos.</p>
        <p class="vb-intro"><strong>c) Anpassungsf\xe4higkeit:</strong>
        Ob mit Politikern, Gesch\xe4ftspartnern oder Feinden \u2013 Escobar wechselte die Tonlage pr\u00e4zise.
        Diese Flexibilit\u00e4t machte ihn unberechenbar und extrem gef\xe4hrlich.</p>
        <p class="vb-intro"><strong>d) R\u00fccksichtsloser Ehrgeiz:</strong>
        Kein Ziel war ihm zu gro\xdf, kein Hindernis zu gef\xe4hrlich. Die selbsterhaltende Drei kennt keine
        innere Bremse, wenn die Zielerreichung in Sicht ist.</p>
        <p class="vb-intro"><strong>e) Taktischer Charme:</strong>
        Trotz seiner Brutalit\xe4t baute er eine \xf6ffentliche Persona als Wohlt\xe4ter und Mann
        des Volkes auf. Er lie\xdf Schulen und Fu\xdfballpl\xe4tze bauen \u2013 nicht aus Mitgef\xfchl,
        sondern als Investition in Loyalit\xe4t.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Zielgerichtetheit:</strong>
        Reichtum, Luxus und Macht \u2013 Escobar verfolgte diese Ziele mit einer r\u00fccksichtslosen
        Konsequenz, die alle anderen Werte verdr\u00e4ngte.</p>
        <p class="vb-intro"><strong>b) Bed\u00fcrfnis nach Kontrolle:</strong>
        Er kontrollierte nicht nur den Drogenhandel, sondern ganze politische Systeme.
        Kontrolle der selbsterhaltenden Drei ist nicht narzisstisch wie bei der Acht \u2013 sie ist <em>pragmatisch</em>:
        Kontrolle als \u00dcberlebensstrategie.</p>
        <p class="vb-intro"><strong>c) Image als Werkzeug:</strong>
        Er legte gro\xdfen Wert darauf, als Volksheld zu gelten \u2013 trug die Maske der Tugend,
        obwohl er in Wahrheit ein eiskalter M\xf6rder war. Dieses Doppelspiel ist charakteristisch
        f\xfcr die Leidenschaft der selbsterhaltenden Drei: Die T\xe4uschung dient der Sicherung der eigenen Position.</p>
        <p class="vb-intro"><strong>d) Vollst\xe4ndige moralische Flexibilit\xe4t:</strong>
        Seine gr\xf6\xdfte St\xe4rke und gr\xf6\xdfte Schw\xe4che: Er kannte keine Skrupel.
        F\xfcr die selbsterhaltende Drei sind Moral und Ethik keine inneren Werte, sondern externe
        Variablen \u2013 n\xfctzlich oder hinderlich je nach Situation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Charismatisch und einsch\u00fcchternd:</strong>
        Menschen wurden von ihm angezogen und lebten gleichzeitig in st\xe4ndiger Angst.
        Diese Kombination ist das Markenzeichen der dunklen selbsterhaltenden Drei: er macht sich unentbehrlich
        und bedrohlich zugleich.</p>
        <p class="vb-intro"><strong>b) Macht, Reichtum, Ruhmsucht:</strong>
        Er kontrollierte nicht nur ein Drogenimperium, sondern beeinflusste das Schicksal
        ganzer Nationen. Auf dem H\xf6hepunkt bezahlte er kolumbianische Regierungsvertreter
        massenhaft \u2013 und terrorisierte jene, die nicht mitmachten.</p>
        <p class="vb-intro"><strong>c) Zerst\u00f6rerisch und gnadenlos:</strong>
        Er vernichtete jeden, der ihm im Weg stand, und verbreitete Schrecken \xfcber
        Kolumbien hinaus. Etwa 4.000 Menschen wurden auf seinen Befehl hin get\xf6tet.</p>
        <p class="vb-intro"><strong>d) Polarisierende Wirkung:</strong>
        In den Armenvierteln Medell\xedns wird er bis in die Gegenwart von manchen als Held verehrt.
        Das ist kein Missverst\xe4ndnis \u2013 es ist das Ergebnis seiner bewussten Investitionen
        in Loyalit\xe4t. Die selbsterhaltende Drei kauft Bewunderung, weil er wei\xdf, dass sie Schutz bedeutet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Dominante Energie:</strong>
        <strong>Escobar</strong> verstr\xf6mte eine dominante, einsch\u00fcchternde Energie. Seine Pr\xe4senz war eine
        st\xe4ndige Erinnerung an seine Macht \u2013 auch ohne ein Wort zu sagen.</p>
        <p class="vb-intro"><strong>b) Paradoxe Ruhe:</strong>
        Er wirkte oft ruhig und unersch\u00fctterlich mitten in extremer Gewalt.
        Diese Ruhe zeigt die blockierte Herzenergie des Typs 3: keine Emotionen
        flie\xdfen in Entscheidungen ein \u2013 nur Kalk\xfcl.</p>
        <p class="vb-intro"><strong>c) Unerm\xfcdliche Energie:</strong>
        Eine von krankhaftem Ehrgeiz angetriebene Energie erm\xf6glichte es ihm,
        in einer extrem gef\xe4hrlichen Welt \xfcber Jahrzehnte zu \xfcberleben und zu wachsen.</p>
        <p class="vb-intro"><strong>d) Nerv\u00f6se Wachsamkeit im Verborgenen:</strong>
        Trotz aller Macht lebte er in st\xe4ndig erh\xf6hter Alarmbereitschaft. Diese
        angespannte Energie spiegelte den selbsterhaltenden Drei-\u00dcberlebensinstinkt: die Bedrohung
        kommt immer, man muss ihr zuvorkommen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Der Waschb\xe4r</h3>
        <p class="vb-intro"><strong>a) Schlau und opportunistisch:</strong>
        Der Waschb\xe4r nutzt jede Gelegenheit, um seinen Vorteil zu sichern und
        Risiken zu minimieren. Escobar tat dasselbe \u2013 klein anfangen, systemisch expandieren,
        nie den langen Atem verlieren.</p>
        <p class="vb-intro"><strong>b) Anpassungsf\xe4higkeit:</strong>
        Der Waschb\xe4r findet sich in jedem Milieu zurecht \u2013 Stadt oder Dschungel, arm oder reich.
        Escobar konnte zwischen Armenvierteln, Polizeipr\xe4sidentien und Luxusvillen
        m\xfchelos wechseln.</p>
        <p class="vb-intro"><strong>c) Versteckt, aber gef\xe4hrlich:</strong>
        Er operierte aus dem Verborgenen heraus. Sein wahrer Einfluss wurde oft
        untersch\xe4tzt \u2013 bis er zuschlug. Das ist die Waschb\xe4r-Strategie: unsichtbar,
        bis es zu sp\xe4t ist.</p>
        <p class="vb-intro"><strong>d) Resilienz und Z\xe4higkeit:</strong>
        Waschb\xe4ren \xfcberleben unter widrigsten Bedingungen. Escobar \xfcberstand
        zahlreiche Anschl\xe4ge auf seine Organisation und erhob sich immer wieder.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Pablo Escobar</strong> verk\xf6rperte den Selbsterhaltenden Typ 3 in seiner extremsten
        dunklen Auspr\xe4gung. Strategische Intelligenz, unaufhaltsamer Ehrgeiz, Charme
        und brutale Gewalt \u2013 alles im Dienst eines einzigen Ziels: Akkumulation und Sicherung
        seiner Position. Wie die Waschb\xe4r-Analogie zeigt: Er war kein gro\xdfer Tiger,
        sondern ein au\xdferordentlich kluges, anpassungsf\xe4higes, z\xe4hes Tier \u2013 das dadurch
        gef\xe4hrlicher wurde als jedes Raubtier.
        Zum Zeitpunkt seines Todes 1993 hinterlie\xdf er ein Verm\xf6gen von 30 Milliarden US-Dollar.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) \u201ePlata o Plomo" \u2013 Silber oder Blei:</strong>
        Sein ber\xfchmtes Ultimatum an Beamte und Richter fasst die selbsterhaltende Drei in drei Worten:
        <em>Du nimmst die Bestechung, oder du stirbst.</em>
        Keine Emotion, keine Verhandlung, kein Mittelweg. Das ist Effizienz der selbsterhaltenden Drei
        auf ihre rohste Form reduziert \u2013 jede Situation wird in zwei Optionen komprimiert.</p>
        <p class="vb-intro"><strong>b) Das vergrabene Geld:</strong>
        <strong>Escobar</strong> hatte derart viele Bargeldreserven, dass er sie buchst\xe4blich nicht
        \xfcberblicken konnte. Ratten fra\xdfen gesch\xe4tzte 2,1 Milliarden Dollar seiner
        Barverm\xf6gen. Er gab 2.500 Dollar pro Monat nur f\xfcr Gummiringe aus, um
        Geldscheine zusammenzuhalten. Diese pathologische Akkumulation ist das
        Extrembild der selbsterhaltenden Drei: Sicherheit durch Besitz \u2013 bis zur Absurdit\xe4t.</p>
        <p class="vb-intro"><strong>c) La Catedral \u2013 sein eigenes Gef\xe4ngnis:</strong>
        Als er sich 1991 \u201eergab", verhandelte er sein eigenes Luxusgef\xe4ngnis: La Catedral.
        Er entwarf es, bestimmte die Regeln, empfing G\xe4ste und f\xfchrte von dort
        weiter seine Gesch\xe4fte. Selbst in Haft kontrollierte die selbsterhaltende Drei seine Umgebung vollst\xe4ndig \u2013
        eine der k\xfchnsten Demonstrationen der selbsterhaltenden Drei der Kriminalgeschichte.</p>
        <p class="vb-intro"><strong>d) Die Flusspferde als Verm\xe4chtnis:</strong>
        <strong>Escobar</strong> lie\xdf in seinem Privatzoo auf der Hacienda N\xe1poles vier Nilpferde halten.
        Nach seinem Tod entkamen sie und vermehrten sich. Heute leben 80\u2013130 Nilpferde
        in Kolumbien \u2013 ein ungeplantes \xf6kologisches Erbe, das Wissenschaftler vor
        gro\xdfe Probleme stellt. Selbst sein Zoo hat Kolumbien dauerhaft ver\xe4ndert.</p>
        <p class="vb-intro"><strong>e) Der Stresspunkt Neun:</strong>
        In seinen letzten Monaten auf der Flucht zeigte Escobar Zeichen des Neun-Stresspunkts
        der Drei: R\xfcckzug, Lethargie, Abkopplung. Er wurde weniger strategisch,
        irrationaler, isolierter. Die Energie der selbsterhaltenden Drei funktioniert nur, solange
        das System l\xe4uft \u2013 wenn das Imperium zusammenbricht, bricht auch der Typ zusammen.</p>
        <p class="vb-intro"><strong>f) Familie als letzter Anker:</strong>
        Die selbsterhaltende Drei priorisiert materielle Sicherheit \u2013 aber Escobars letzter echter Anker
        war seine Familie. Seine Bem\xfchungen, seine Frau und Kinder im Exil zu
        kontaktieren, wurden geortet und f\xfchrten zu seinem Tod. Der Mann, der 30 Milliarden
        akkumuliert hatte, starb wegen eines Telefonats mit seinem Sohn.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Der Selbsterhaltende Typ 3 in seiner ganzen Tiefe \u2013 Akkumulation, T\xe4uschung und der Weg vom Funktionieren zum echten Sein.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile \u2013 wie sich die selbsterhaltende Drei von der Sozialen und Sexuellen Drei unterscheidet, pointiert und pr\xe4zise.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Der Selbsterhaltende Typ 3 ausf\xfchrlich portr\xe4tiert \u2013 Leidenschaft, blockierte Herzenergie und Heilungsweg.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Pablo Escobar tr\u00e4gt die Verantwortung f\u00fcr Tausende Morde und den gr\u00f6\u00dften Kokainschmuggel der Geschichte. Er starb 1993, bevor ein endg\u00fcltiges Urteil gesprochen wurde. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-ted-bundy", label:"Kriminalpsychologie: Ted Bundy"},
        {route:"kriminalpsychologie-tom-keating", label:"Kriminalpsychologie: Tom Keating (SE3w4) – Vergleichsportrait"},
        {route:"blickqualitaet", label:"Blickqualit\xe4t der 9 Typen"},
        {route:"psychogramme", label:"Psychogramme"},
      ])}
    </div>
  `);
}

function tomKeatingPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Tom Keating – Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/tom-keating-portrait.jpg" alt="Tom Keating – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Tom Keating</p>
        <p class="krim-portrait-typ">SE3w4 · Selbsterhaltender Typ 3 mit Viererflügel</p>
      </div>
      <p class="psycho-intro">
        <strong>Tom Keating</strong> (1917–1984) war einer der produktivsten Kunstfälscher des 20. Jahrhunderts.
        Über zwei Jahrzehnte hinweg schuf er mehr als 2.000 Gemälde und Zeichnungen im Stil von rund 100
        verschiedenen Meistern – von Samuel Palmer über Rembrandt bis Degas. Was ihn von einem gewöhnlichen
        Betrüger unterscheidet: Er baute absichtlich Fehler ein, „Zeitbomben", die seine Fälschungen für
        kundige Augen enttarnen sollten, und verstand sein Tun als Protest gegen einen Kunstmarkt, der
        Künstler zu Lebzeiten verarmen ließ und erst nach ihrem Tod an ihnen verdiente. Das Enneagramm macht
        diesen Widerspruch aus Handwerksliebe und moralischem Sendungsbewusstsein lesbar.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Tom Keating</strong> wird dem <strong>Selbsterhaltenden Typ 3 mit Viererflügel</strong> im Enneagramm zugeordnet.
        Die Leidenschaft der Drei ist <em>Täuschung</em> (Deceit) – bei der selbsterhaltenden Drei nicht auf
        Image und öffentliche Bewunderung gerichtet wie bei der Sozialen Drei, sondern auf handwerkliche
        <strong>Meisterschaft und Sicherheit im Verborgenen</strong>. Der Viererflügel verleiht Keatings Fälschungen
        eine emotionale, fast schwermütige Tiefe, die reine Kopiertechnik übersteigt – er fühlte sich in die
        Maler, die er kopierte, tatsächlich hinein, statt sie nur zu imitieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualität</h3>
        <p class="vb-intro"><strong>a) Verschmitzt und beobachtend:</strong>
        Fotografien und Filmaufnahmen zeigen Keating mit einem wachen, oft amüsierten Blick – die Augen
        eines Mannes, der genau registriert, wem er gegenübersitzt, und der eigenen Rolle als Handwerker
        und Trickster gleichermaßen verpflichtet ist.</p>
        <p class="vb-intro"><strong>b) Prüfend auf Technik gerichtet:</strong>
        Sein Blick war der eines Restaurators – geschult darauf, Pinselführung, Alterung und Materialfehler
        in Sekunden zu erfassen. Diese analytische Schärfe richtete er ebenso auf die eigenen Fälschungen wie
        auf die Originale, die er studierte.</p>
        <p class="vb-intro"><strong>c) Selbstironisch und wenig eitel:</strong>
        Anders als viele selbsterhaltende Dreier zeigte Keating in Interviews kaum Geltungsdrang – sein Blick
        wirkte eher wie der eines Handwerkers, der über eine gelungene Arbeit spricht, nicht wie der eines
        Betrügers, der seinen Coup feiert.</p>
        <p class="vb-intro"><strong>d) Warm in der Fernsehpräsenz:</strong>
        In seiner späten TV-Karriere zeigte sich ein zugewandter, lehrender Blick – die selbsterhaltende Drei,
        die Sicherheit nun nicht mehr durch Täuschung, sondern durch geteiltes Wissen suchte.</p>
        <p class="vb-intro"><strong>e) Unerschütterlich unter Druck:</strong>
        Auch als sein Betrug 1976 öffentlich aufflog, wirkte er in Interviews gefasst, fast erleichtert –
        typisch für die selbsterhaltende Drei, die eine lange gehaltene Fassade lieber komplett fallen lässt,
        als sie halbherzig zu verteidigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Außergewöhnliche handwerkliche Meisterschaft:</strong>
        Als Sohn eines Malers und selbst Restaurator alter Gemälde beherrschte Keating Techniken, Pigmente
        und Alterungsprozesse vergangener Jahrhunderte wie kaum ein Zweiter seiner Zeit.</p>
        <p class="vb-intro"><strong>b) Getarnte Rebellion:</strong>
        Sein Betrug richtete sich nicht gegen einzelne Menschen, sondern gegen ein System – den Kunstmarkt,
        der aus seiner Sicht die Künstler ausbeutete. Die selbsterhaltende Drei kanalisiert ihren Zorn oft
        nicht offen, sondern über verdeckte, lang geplante Aktionen.</p>
        <p class="vb-intro"><strong>c) Extreme Produktivität:</strong>
        Über 2.000 Werke in rund 100 Stilen – ein Ausmaß an Output, das die selbsterhaltende Drei kennzeichnet:
        Sicherheit entsteht nicht durch ein einzelnes Meisterwerk, sondern durch schiere Menge und stetige Arbeit.</p>
        <p class="vb-intro"><strong>d) Eingebaute Selbstsabotage:</strong>
        Keating mischte seinen Fälschungen bewusst Glyzerin bei, das Craquelure vorzeitig entstehen ließ, und
        schrieb mit Bleiweiß unsichtbare Botschaften unter die Farbschicht, sichtbar erst im Röntgenbild – ein
        Doppelspiel aus Täuschung und Selbstenttarnung, das die innere Zerrissenheit der Drei zwischen Fassade
        und Wahrheit offenlegt.</p>
        <p class="vb-intro"><strong>e) Bescheidener Lebensstil trotz Talent:</strong>
        Anders als Escobar oder Madoff strebte Keating kaum nach persönlichem Reichtum – sein Motiv war nicht
        Akkumulation, sondern Genugtuung und das Gefühl, gebraucht und anerkannt zu werden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Identifikation mit dem Vorbild:</strong>
        Keating verehrte den romantischen Landschaftsmaler Samuel Palmer regelrecht, dessen Armut zu Lebzeiten
        ihn tief empörte. Seine Fälschungen von Palmers Werken waren zugleich Hommage und ein Akt der Wiedergutmachung – so, wie die selbsterhaltende Drei ein empfundenes Unrecht am liebsten durch eigenes, sichtbares Handeln korrigiert.</p>
        <p class="vb-intro"><strong>b) Bedürfnis nach Kontrolle über Deutung:</strong>
        Er wollte nicht nur täuschen, sondern irgendwann auch entlarvt werden – zu seinen eigenen Bedingungen.
        Die eingebauten „Zeitbomben" sichern der selbsterhaltenden Drei die Kontrolle über die eigene Geschichte.</p>
        <p class="vb-intro"><strong>c) Moralische Selbstrechtfertigung:</strong>
        Keating sah sich nicht als Krimineller, sondern als Gerechtigkeitskämpfer gegen ausbeuterische
        Kunsthändler. Diese Umdeutung von Täuschung in moralisches Handeln ist ein Kernmuster der Drei.</p>
        <p class="vb-intro"><strong>d) Anpassungsfähigkeit über Genres hinweg:</strong>
        Er fälschte nicht nur einen Stil, sondern wechselte mühelos zwischen Aquarell, Ölmalerei und Grafik,
        zwischen englischer Romantik und französischem Impressionismus – ein Waschbär, der sich in jedem
        Milieu zurechtfindet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Volksnah statt einschüchternd:</strong>
        Anders als viele Täter dieser Rubrik wirkte Keating nicht bedrohlich, sondern sympathisch – ein
        Umstand, der seine spätere Verwandlung in einen geliebten Fernsehstar erst möglich machte.</p>
        <p class="vb-intro"><strong>b) Erschütterung eines ganzen Marktes:</strong>
        Seine Enttarnung 1976 löste eine Vertrauenskrise im britischen Kunsthandel aus – auch heute noch gelten
        zahlreiche Werke in Museen und Privatsammlungen als „vielleicht ein Keating".</p>
        <p class="vb-intro"><strong>c) Gerichtsverfahren ohne Urteil:</strong>
        1979 wurde Anklage wegen Betrugs erhoben, doch das Verfahren wurde aus gesundheitlichen Gründen
        eingestellt, bevor ein Urteil fiel – die selbsterhaltende Drei, die selbst im Zusammenbruch noch
        die Kontrolle über den Ausgang behält.</p>
        <p class="vb-intro"><strong>d) Zweite Karriere als geachteter Lehrer:</strong>
        Mit der Fernsehserie „Tom Keating on Painters" (1982) wandelte er sich vom Betrüger zum gefeierten
        Vermittler alter Maltechniken – ein seltener Fall, in dem die Täuschung der Drei am Ende in
        öffentlich anerkannte Meisterschaft überging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Ruhelose Schaffensenergie:</strong>
        Keatings Produktivität wirkte fast besessen – Zeugen berichteten von Nächten, in denen er in
        wenigen Stunden ein vollständiges Gemälde im Stil eines alten Meisters fertigstellte.</p>
        <p class="vb-intro"><strong>b) Unterschwellige Wut, künstlerisch sublimiert:</strong>
        Statt offener Konfrontation kanalisierte er seinen Zorn über den Kunstmarkt in jahrzehntelange,
        stille Sabotage – die blockierte Herzenergie der Drei, die sich nicht in direkten Beziehungen, sondern
        in einem Werk gegen ein System entlädt.</p>
        <p class="vb-intro"><strong>c) Entspannung nach der Enttarnung:</strong>
        Wer ihn nach 1976 erlebte, beschreibt einen sichtbar erleichterten Mann – als sei mit dem Ende der
        Fassade auch eine jahrzehntelange innere Anspannung gewichen.</p>
        <p class="vb-intro"><strong>d) Warme Energie in der Vermittlerrolle:</strong>
        In seinen TV-Auftritten wirkte er zugänglich und großzügig mit seinem Wissen – eine Energie, die im
        Gegensatz zur kalten Berechnung anderer selbsterhaltender Dreier dieser Rubrik steht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Der Waschbär</h3>
        <p class="vb-intro"><strong>a) Geschickte Hände, präzises Werk:</strong>
        Der Waschbär ist für seine feinmotorische Geschicklichkeit bekannt – Keatings malerische Virtuosität
        über hundert verschiedene Techniken hinweg spiegelt genau diese Fingerfertigkeit.</p>
        <p class="vb-intro"><strong>b) Nachtaktiv und im Verborgenen:</strong>
        Wie der Waschbär operierte Keating über Jahrzehnte im Schatten des offiziellen Kunstbetriebs, unsichtbar,
        bis seine Fälschungen längst in Galerien und Sammlungen zirkulierten.</p>
        <p class="vb-intro"><strong>c) Anpassungsfähig an jedes Milieu:</strong>
        Ob viktorianische Aquarellmalerei oder französischer Impressionismus – der Waschbär in Keating fand
        sich in jedem stilistischen „Terrain" zurecht und passte sein Vorgehen der jeweiligen Umgebung an.</p>
        <p class="vb-intro"><strong>d) Maskierter Trickster:</strong>
        Die charakteristische „Maske" des Waschbären passt bildhaft zu einem Mann, dessen ganzes Wirken auf
        dem Prinzip beruhte, hinter fremden Gesichtern – den Stilen anderer Maler – zu verschwinden.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Tom Keating</strong> verkörperte den Selbsterhaltenden Typ 3 in einer seiner ungewöhnlichsten
        Spielarten: Täuschung nicht zur Bereicherung, sondern als moralischer Feldzug gegen ein System, das er
        für ausbeuterisch hielt. Handwerkliche Meisterschaft, eingebaute Selbstenttarnung und ein Viererflügel,
        der echte emotionale Verbindung zu den kopierten Meistern suchte – all das macht ihn zum Waschbären
        unter den Kunstfälschern: unauffällig, anpassungsfähig, und am Ende doch enttarnt, weil er es selbst
        so wollte. Er starb 1984, kurz nach seinem Erfolg als Fernsehlehrer, ohne je verurteilt worden zu sein.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Ergänzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Die „Sexton Blakes":</strong>
        Keating nannte seine Fälschungen in Cockney-Reimslang „Sexton Blakes" (reimt auf „fakes"). Dieser
        selbstironische Spitzname zeigt, wie wenig er sein Tun als schweres Verbrechen empfand – für ihn war
        es Handwerk mit einer Botschaft.</p>
        <p class="vb-intro"><strong>b) Die eingebauten „Zeitbomben":</strong>
        Bewusst platzierte er anachronistische Materialien und versteckte Hinweise in seinen Werken – etwa
        moderne Pigmente, die bei einer Röntgenanalyse sofort auffallen mussten. Er wollte nicht ewig
        unentdeckt bleiben, sondern der Nachwelt beweisen, wie leicht sich Experten täuschen lassen.</p>
        <p class="vb-intro"><strong>c) Der Fall „Sepham Barn":</strong>
        1976 identifizierte die Kunstkritikerin Geraldine Norman von der „Times" ein angebliches
        Samuel-Palmer-Aquarell namens „Sepham Barn" als Fälschung. Die folgende Recherche brachte Keatings
        gesamtes Lebenswerk ans Licht – ein Moment, den er später fast wie eine Befreiung beschrieb.</p>
        <p class="vb-intro"><strong>d) Motiv moralische Korrektur statt Gier:</strong>
        In Interviews betonte Keating immer wieder, sein Ziel sei nie persönliche Bereicherung gewesen,
        sondern die Richtigstellung eines aus seiner Sicht eklatanten Unrechts: Kunsthändler ließen Künstler
        wie Samuel Palmer zu Lebzeiten verarmen, um erst nach deren Tod an ihrem Werk zu verdienen. Typisch
        für die selbsterhaltende Drei: Sie sieht sich nicht als Rächer, sondern als derjenige, der eine schiefe
        Ordnung mit den eigenen Mitteln wieder geraderückt.</p>
        <p class="vb-intro"><strong>e) Die zweite Karriere:</strong>
        Statt im Gefängnis zu enden, wurde Keating durch die Fernsehserie „Tom Keating on Painters" zum
        Publikumsliebling, der Millionen Zuschauern die Techniken von Rembrandt, Constable und Degas
        näherbrachte – eine seltene Wendung vom Täuscher zum öffentlich geachteten Meister.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Der Selbsterhaltende Typ 3 in seiner ganzen Tiefe – Meisterschaft, Täuschung und der Weg vom Funktionieren zum echten Sein.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile – wie sich die selbsterhaltende Drei von der Sozialen und Sexuellen Drei unterscheidet, pointiert und präzise.", "Die 27 Persönlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Der Selbsterhaltende Typ 3 ausführlich porträtiert – Leidenschaft, blockierte Herzenergie und Heilungsweg.", "Wer du wirklich bist – Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Tom Keating hat über zwei Jahrzehnte den Kunstmarkt getäuscht und Sammler wie Museen geschädigt. Er starb 1984, ohne rechtskräftig verurteilt worden zu sein. Das Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-pablo-escobar", label:"Kriminalpsychologie: Pablo Escobar (SE3w4) – Vergleichsportrait"},
        {route:"blickqualitaet", label:"Blickqualität der 9 Typen"},
        {route:"psychogramme", label:"Psychogramme"},
      ])}
    </div>
  `);
}

function dennisNilsenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Dennis Nilsen \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/dennis-nilsen-portrait.jpg" alt="Dennis Nilsen \xe2\x80\x93 Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dennis Nilsen</p>
        <p class="krim-portrait-typ">SE1w2 \u00b7 Selbsterhaltender Typ 1 mit Zweierfl\u00fcgel</p>
        <p style="font-size:0.85rem;color:var(--muted);margin:0.2rem 0 0;">\u201eDer M\u00f6rder von Melrose Avenue" \u2013 London 1978\u20131983</p>
      </div>
      <p class="psycho-intro">
        <strong>Dennis Andrew Nilsen</strong>, geboren 1945 in Fraserburgh, Schottland,
        ermordete zwischen 1978 und 1983 mindestens <strong>15 junge M\u00e4nner</strong> in London.
        Er lernte seine Opfer fast ausnahmslos in Kneipen und Pubs im Londoner West End kennen \u2013
        viele von ihnen Obdachlose, Ausrei\u00dfer, M\u00e4nner ohne sozialen R\u00fcckhalt,
        einige homosexuell wie Nilsen selbst.
        Er lud sie zu sich nach Hause ein, t\u00f6tete sie im Schlaf oder durch Erw\u00fcrgen,
        und behielt ihre Leichen teils wochenlang in seiner Wohnung \u2013
        er wusch sie, kleidete sie an, hielt Zwiegespr\u00e4che mit ihnen.
        Er wurde 1983 durch Zufall entdeckt, als ein Klempner verstopfte Rohre untersuchte
        und auf menschliche \u00dcberreste stie\u00df. Nilsen gestand sofort.
        Er starb 2018 im Gef\u00e4ngnis.
        Was sein Fall so au\u00dfergew\u00f6hnlich macht: Er t\u00f6tete nicht aus Hass, nicht aus Lust,
        nicht aus Kontrollwillen im klassischen Sinne \u2013
        er t\u00f6tete, um nicht allein zu sein.
        Das Enneagramm macht sichtbar, was dahinter arbeitete.
      </p>

      <div class="vb-section" style="background:rgba(60,80,40,0.07);border-left:3px solid #3c5028;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Dennis Nilsen</strong> wird dem <strong>Selbsterhaltenden Typ 1 mit Zweierfl\u00fcgel</strong> zugeordnet.
        Die selbsterhaltende Eins organisiert ihr Leben um innere Ordnung, Korrektheit
        und die Aufrechterhaltung einer bestimmten Qualit\u00e4t des privaten Raums.
        Der Zweierfl\u00fcgel verleiht ihr W\u00e4rme, F\u00fcrsorge, das Bed\u00fcrfnis, gebraucht und geliebt zu werden.
        Der Stresspunkt liegt bei der <strong>Vier</strong>:
        tiefe Einsamkeit, Melancholie, das Gef\u00fchl, im Kern nicht liebenswert zu sein \u2013
        ein Schmerz, der bei Nilsen zum direkten Tatmotiv wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Tierentsprechung: Der Adler</h3>
        <p class="vb-intro">
        Der <strong>Adler</strong> ist die Tierentsprechung der selbsterhaltenden Eins.
        Er kreist hoch, weit \u00fcber dem Geschehen \u2013 mit einem Blick, der alles erfasst,
        bewertet, in Ordnung bringt. Er ist majest\u00e4tisch, pr\u00e4zise, vollst\u00e4ndig auf sich selbst bezogen.
        Er braucht keine Herde. Er braucht kein Rudel. Er braucht seinen Horst \u2013
        und er verteidigt ihn mit \u00e4u\u00dferster Entschlossenheit.
        Nilsen war ein Adler ohne Nest. Eine Wohnung in London, kein Netzwerk, keine Beziehung,
        die Bestand hatte. Der Adler kann nicht ohne seinen Raum existieren.
        Nilsen schuf sich einen Raum, in dem niemand gehen konnte \u2013
        weil er die Kontrolle dar\u00fcber hatte, wer blieb.
        Der Adler fliegt allein. Nilsen ertrug das Alleinsein nicht.
        Das ist der Widerspruch, der t\u00f6tet.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die selbsterhaltende Eins: Ordnung als \u00dcberlebensprinzip</h3>
        <p class="vb-intro"><strong>a) Das Grundprinzip:</strong>
        Die selbsterhaltende Eins koppelt ihr Sicherheitsgef\u00fchl an innere und \u00e4u\u00dfere Ordnung \u2013
        an die Qualit\u00e4t des privaten Raums, an Routinen, an das Gef\u00fchl, die Dinge
        unter Kontrolle zu haben. Nilsen f\u00fchrte ein geordnetes Leben:
        Er arbeitete als Beamter beim Arbeitsamt in London, war korrekt, verl\u00e4sslich, p\u00fcnktlich.
        Er engagierte sich gewerkschaftlich. Er galt als integer.
        Hinter dieser Fassade herrschte eine tiefe, chronische Einsamkeit \u2013
        die selbsterhaltende Eins, die ihren eigenen Raum so perfekt kontrolliert,
        dass niemand wirklich hineinkommt.</p>
        <p class="vb-intro"><strong>b) Der Zweierfl\u00fcgel: F\u00fcrsorge als Besitz:</strong>
        Der Zweierfl\u00fcgel der selbsterhaltenden Eins ist besonders komplex:
        Er erzeugt echtes F\u00fcrsorgebed\u00fcrfnis \u2013 den Wunsch, f\u00fcr jemanden da zu sein,
        gebraucht zu werden, W\u00e4rme zu geben und zu empfangen.
        Nilsen war bekannt f\u00fcr seine Gastfreundschaft. Er kochte f\u00fcr seine Opfer.
        Er stellte Alkohol bereit, h\u00f6rte zu, schuf eine Atmosph\u00e4re des Vertrauens.
        In der gesunden Auspr\u00e4gung ist das liebevoll. In der Pathologie wird daraus
        ein F\u00fcrsorge-Besitz: Wenn jemand gehen will, h\u00f6rt die F\u00fcrsorge auf \u2013
        und die Kontrolle beginnt. Der Zweierfl\u00fcgel schuf die Verbindung.
        Die Eins sorgte daf\u00fcr, dass sie nicht endete.</p>
        <p class="vb-intro"><strong>c) Die Leidenschaft: Zorn als Ordnungszwang:</strong>
        Die Leidenschaft der Eins ist der <strong>Zorn</strong> \u2013 der stille, akkumulierte Zorn
        auf eine Welt, die nicht dem inneren Bild entspricht.
        Bei Nilsen richtete sich dieser Zorn nicht auf die Opfer als Personen.
        Er richtete sich auf den Moment, in dem die Verbindung endete \u2013
        wenn jemand aufbrach, wenn die W\u00e4rme der Nacht vorbei war,
        wenn er wieder allein war. Der Zorn entlud sich nicht in Wut.
        Er entlud sich in der Entscheidung: Du gehst nicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Das Tatgeschehen: 15 Morde in f\u00fcnf Jahren</h3>
        <p class="vb-intro"><strong>a) Melrose Avenue, 1978\u20131981:</strong>
        Nilsens erste Taten geschahen in seiner Wohnung in der Melrose Avenue in Nordlondon.
        Er traf seine Opfer in Pubs \u2013 M\u00e4nner, die allein waren, die keinen Ort hatten,
        wo sie hingehen konnten, die ein Angebot von W\u00e4rme und Unterkunft nicht abwiesen.
        Er erw\u00fcrgte sie im Schlaf oder mit einer Schnur, manchmal ertr\u00e4nkte er sie
        in einer Sch\u00fcssel mit Wasser.
        Danach wusch er die Leiche, kleidete sie an, legte sie ins Bett.
        Er sprach mit ihr. Er sa\u00df neben ihr.
        Er bewahrte die Leichen auf, bis die Verwesung zwang, sie zu beseitigen:
        Er kochte das Fleisch von den Knochen, verbrannte die Reste im Garten,
        die Knochen zerkleinerte er und streute sie auf dem Grundst\u00fcck.
        Zwischen den Taten gab es Monate ohne Tat \u2013 dann wieder ein Opfer,
        dann wieder Monate der Stille.</p>
        <p class="vb-intro"><strong>b) Cranley Gardens, 1981\u20131983:</strong>
        Nach dem Umzug in eine Dachgeschosswohnung in der Cranley Gardens
        wurde die Beseitigung der Leichen schwieriger \u2013 kein Garten mehr.
        Nilsen kochte die K\u00f6rper in gro\u00dfen T\u00f6pfen, sp\u00fclte das Fleisch die Toilette hinunter,
        verbrannte \u00dcberreste in M\u00fclltonnen.
        In dieser Wohnung t\u00f6tete er noch sechs weitere M\u00e4nner.
        Einige \u00fcberlebten. Er lie\u00df sie gehen \u2013 und keine erstattete Anzeige.
        Teils weil sie sich nicht erinnerten, teils weil sie die Polizei f\u00fcrchteten
        (viele hatten unsicheren Aufenthaltsstatus oder waren obdachlos).</p>
        <p class="vb-intro"><strong>c) Die Verhaftung \u2013 der Klempner (Februar 1983):</strong>
        Am 9. Februar 1983 rief ein Nachbar in der Cranley Gardens einen Klempner,
        weil die Abflussrohre verstopft waren.
        Der Klempner fand in den Rohren Fleisch- und Knochenmaterial.
        Er informierte die Polizei. Als die Beamten Nilsen am selben Abend auf dem Heimweg
        von der Arbeit abfingen und nach den Rohren befragten, sagte er ruhig:
        \u201eIch denke, das Fleisch k\u00e4me von mehreren Menschen."
        Er gestand in dieser Nacht 15 Morde, f\u00fchrte die Polizei zu den Fundorten
        und beschrieb jeden Fall in ruhigem, b\u00fcrokratischem Ton \u2013
        wie ein Beamter, der einen Bericht verfasst.</p>
        <p class="vb-intro"><strong>d) Das Gest\u00e4ndnis und der Prozess:</strong>
        Nilsen kooperierte vollst\u00e4ndig mit den Ermittlern. Er schrieb ausf\u00fchrliche
        handschriftliche Berichte \u00fcber jeden Mord \u2013 hunderte Seiten, pr\u00e4zise, geordnet,
        in der Sprache eines Beamten.
        Er erkl\u00e4rte sein Motiv selbst: Er habe nicht t\u00f6ten wollen \u2013
        er habe verhindern wollen, dass die Menschen gehen.
        Ob er log, ob er selbst glaubte, was er sagte, lie\u00df sich nie abschlie\u00dfend kl\u00e4ren.
        Er wurde 1983 wegen sechsfachen Mordes und zweifachen Mordversuchs verurteilt
        (nur sechs Opfer konnten zweifelsfrei identifiziert werden).
        Er starb im Mai 2018 im Gef\u00e4ngnis an einer Lungenembolie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Der Viererstress: Einsamkeit als Mordmotiv</h3>
        <p class="vb-intro">
        Die Eins bewegt sich im Stress in Richtung <strong>Vier</strong> \u2013
        tiefe Einsamkeit, Melancholie, das Gef\u00fchl, nicht liebenswert zu sein,
        nicht verbunden zu sein, im Kern allein.
        Bei Nilsen war dieser Viererstress nicht eine Reaktion auf \u00e4u\u00dfere Ereignisse \u2013
        er war sein Grundzustand.
        Er beschrieb sein Leben als eine anhaltende, unertr\u00e4gliche Leere.
        Die Taten unterbrachen diese Leere: In den Stunden und Tagen nach dem Tod
        des Opfers war er nicht allein. Er hatte jemanden.
        Die Vier-Energie der desintegrierten selbsterhaltenden Eins
        sucht nicht Zerst\u00f6rung \u2013 sie sucht Verbindung.
        Sie findet sie auf dem einzigen Weg, der ihr noch offen stand.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro">
        Dennis Nilsen ist der seltenste Fall unter den Serienm\u00f6rdern im Enneagramm:
        einer, dessen Prim\u00e4rmotiv nicht Macht, nicht Lust, nicht Kontrolle war \u2013
        sondern das Aushalten von Einsamkeit.
        Die selbsterhaltende Eins braucht einen perfekten, geordneten privaten Raum.
        Der Zweierfl\u00fcgel braucht Verbindung, W\u00e4rme, das Gef\u00fchl, gebraucht zu werden.
        Beide zusammen erzeugten bei Nilsen eine unertr\u00e4gliche Spannung:
        Er konnte Menschen nicht wirklich binden \u2013 und konnte das Enden von Verbindungen nicht ertragen.
        Der Adler, der keinen Horst hat, kreist endlos.
        Nilsen baute sich einen \u2013 aus dem, was er nicht gehen lassen konnte.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Einordnung</h3>
        <p class="vb-intro">
        <strong>Subtyp:</strong> SE1w2 \u2013 Selbsterhaltende Eins mit Zweierfl\u00fcgel.<br>
        <strong>Leidenschaft:</strong> Zorn \u2013 der stille Ordnungszwang, der nicht erlaubte, dass Verbindungen endeten.<br>
        <strong>Stresspunkt:</strong> Vier \u2013 chronische Einsamkeit, Melancholie, das Gef\u00fchl fundamentaler Unverbundenheit.<br>
        <strong>Tierentsprechung:</strong> Adler \u2013 majest\u00e4tisch, pr\u00e4zise, vollst\u00e4ndig auf den eigenen Raum fixiert.<br>
        <strong>Besonderheit:</strong> Kooperierte vollst\u00e4ndig \u2013 schrieb hunderte Seiten Selbstanalyse; benannte Einsamkeit als Tatmotiv.<br>
        <strong>Gestorben:</strong> Mai 2018 im Gef\u00e4ngnis, Lungenembolie.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die selbsterhaltende Eins im Vergleich: Wie sich Zorn bei SE1, SO1 und SX1 unterschiedlich ausdr\u00fcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE1, SO1, SX1 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 1 ausf\u00fchrlich portr\u00e4tiert \u2013 Zorn, Perfektionismus und der Heilungsweg \u00fcber echte Gelassenheit.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Dennis Nilsen wurde 1983 wegen sechs Morden und zwei Totschlagsdelikten zu lebenslanger Haft verurteilt und starb 2018 in Haft. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-michail-popkow", label:"Kriminalpsychologie: Michail Popkow (SE1w9)"},
        {route:"kriminalpsychologie-jeffrey-dahmer", label:"Kriminalpsychologie: Jeffrey Dahmer (SX5w4) \u2013 \u00e4hnliches Tatmuster"},
        {route:"kriminalpsychologie-fritz-haarmann", label:"Kriminalpsychologie: Fritz Haarmann (SX1w9)"},
      ])}
    </div>
  `);
}

function dorotheaPuentePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Dorothea Puente \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/dorothea-puente-portrait.jpg" alt="Dorothea Puente \xe2\x80\x93 Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dorothea Puente</p>
        <p class="krim-portrait-typ">SE1w2 \u00b7 Selbsterhaltende Typ 1 mit Zweierfl\u00fcgel</p>
        <p style="font-size:0.85rem;color:var(--muted);margin:0.2rem 0 0;">\u201eDie Vermieterin des Todes" \u2013 Sacramento, Kalifornien 1982\u20131988</p>
      </div>
      <p class="psycho-intro">
        <strong>Dorothea Helen Puente</strong>, geboren am 9. Januar 1929 in Redlands, Kalifornien,
        betrieb in den 1980er-Jahren eine Pension f\u00fcr Senioren, Obdachlose und Menschen
        mit psychischen Erkrankungen in Sacramento.
        Mindestens <strong>neun ihrer Bewohner</strong> t\u00f6tete sie \u2013 haupts\u00e4chlich durch
        \u00dcberdosierungen von Schlaftabletten \u2013 und begrub sie im Garten ihres Hauses
        in der F Street, w\u00e4hrend sie deren staatliche Sozialschecks weiter kassierte.
        Sie pflegte ein tadelloses \u00f6ffentliches Bild: freundliche Vermieterin,
        Wohlt\u00e4terin der Gemeinde, Frau mit Herz f\u00fcr die Schwachen.
        Als die Polizei 1988 begann, den Garten umzugraben, floh sie nach Los Angeles.
        Sie wurde verhaftet, als sie in einer Bar einen Mann ansprach \u2013
        er erkannte sie, weil ihr Foto gerade im Fernsehen gezeigt worden war.
        Sie wurde 1993 in zwei F\u00e4llen wegen Mordes ersten Grades verurteilt
        und starb am 27. M\u00e4rz 2011 in der Haft.
        Das Enneagramm macht sichtbar, wie Ordnung, Moral und F\u00fcrsorge
        zur t\u00f6dlichsten Fassade werden k\u00f6nnen.
      </p>

      <div class="vb-section" style="background:rgba(60,80,40,0.07);border-left:3px solid #3c5028;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Dorothea Puente</strong> wird dem <strong>Selbsterhaltenden Typ 1 mit Zweierfl\u00fcgel</strong> zugeordnet.
        Die selbsterhaltende Eins organisiert ihr Leben um innere Ordnung, Kontrolle
        und die Aufrechterhaltung eines makellosen privaten Raums.
        Der Zweierfl\u00fcgel verleiht ihr W\u00e4rme, Hilfsbereitschaft und das Bed\u00fcrfnis,
        als f\u00fcrsorglich und unentbehrlich wahrgenommen zu werden.
        Der Stresspunkt liegt bei der <strong>Vier</strong>:
        innere Leere, das Gef\u00fchl fundamentaler Unvollst\u00e4ndigkeit,
        Melancholie hinter der perfekten Oberfl\u00e4che.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Tierentsprechung: Der Adler</h3>
        <p class="vb-intro">
        Der <strong>Adler</strong> ist die Tierentsprechung der selbsterhaltenden Eins.
        Er kreist hoch \u2013 mit einem Blick, der alles erfasst, bewertet, ordnet.
        Er ist majest\u00e4tisch, pr\u00e4zise, und er duldet in seinem Horst keine Unordnung.
        Er verteidigt sein Territorium nicht durch L\u00e4rm, sondern durch \u00dcberlegenheit.
        Puente war ein Adler in einer freundlichen K\u00fcchensch\u00fcrze.
        Sie kontrollierte jeden Raum ihres Hauses, jede Interaktion mit den Bewohnern,
        jeden Brief, jede Zahlung, jeden Arzttermin.
        Niemand sah die Krallen. Sie sah aus wie das Gegenteil davon:
        eine \u00e4ltere Frau mit gepflegten Haaren, die Kuchen backte
        und f\u00fcr die Armen sorgte.
        Der Adler fliegt nicht mit L\u00e4rm. Er beobachtet. Er wartet. Er handelt.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die selbsterhaltende Eins: Ordnung \u00fcber alles</h3>
        <p class="vb-intro"><strong>a) Kontrolle als \u00dcberlebensprinzip:</strong>
        Die selbsterhaltende Eins koppelt ihr inneres Gleichgewicht an die Qualit\u00e4t
        und Kontrolle ihres privaten Raums. Alles muss stimmen: die Finanzen,
        das Erscheinungsbild des Hauses, die Wahrnehmung durch die Au\u00dfenwelt.
        Puentes Pension war penibel gef\u00fchrt. Die Bewohner wurden gepflegt,
        die Beh\u00f6rden erhielten korrekte Berichte, die Nachbarn lobten sie.
        Diese Kontrolle war nicht F\u00fcrsorge \u2013 sie war das Fundament,
        auf dem ihre gesamte Identit\u00e4t ruhte: Ich bin die Frau, die Ordnung schafft.</p>
        <p class="vb-intro"><strong>b) Der Zweierfl\u00fcgel: F\u00fcrsorge als Machtmittel:</strong>
        Der Zweierfl\u00fcgel verleiht der selbsterhaltenden Eins echte W\u00e4rme \u2013
        und das Talent, genau das zu geben, was jemand braucht, um zu vertrauen.
        Puente wusste, was ihre Bewohner brauchten: eine Mahlzeit, ein sauberes Zimmer,
        ein freundliches Gesicht. Sie gab es \u2013 und schuf damit totale Abh\u00e4ngigkeit.
        Wer von ihr abh\u00e4ngig war, hatte keine eigene Stimme mehr.
        Wer keine eigene Stimme hatte, stellte keine Fragen.
        Der Zweierfl\u00fcgel der SE1 ist das Werkzeug, das Vertrauen schafft \u2013
        damit die Eins in ihrem Raum ungest\u00f6rt walten kann.</p>
        <p class="vb-intro"><strong>c) Die Leidenschaft: Zorn als stiller Ordnungszwang:</strong>
        Die Leidenschaft der Eins ist der <strong>Zorn</strong> \u2013
        akkumuliert, kontrolliert, niemals laut.
        Puente zeigte keinen sichtbaren Zorn. Sie l\u00e4chelte.
        Aber wer ihrem inneren Bild der Ordnung widersprach \u2013
        wer die Kontrolle \u00fcber seinen Scheck behalten wollte,
        wer unbequeme Fragen stellte, wer ihre Autorit\u00e4t infrage stellte \u2013
        der wurde nicht konfrontiert. Der verschwand.
        Der Zorn der Eins richtet nicht laut. Er richtet leise, gr\u00fcndlich und endg\u00fcltig.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Das Tatgeschehen: Neun Gr\u00e4ber im Garten</h3>
        <p class="vb-intro"><strong>a) Vorgeschichte und erste Straftaten:</strong>
        Puentes Biografie ist eine Chronik von L\u00fcge, Anpassung und Neuerfindung.
        Sie wuchs in Armut auf, heiratete mehrfach, f\u00e4lschte Dokumente,
        wurde wegen Betrugs und F\u00e4lschung verurteilt.
        Zwischen ihren Gef\u00e4ngnisaufenthalten pflegte sie stets das Bild
        der respektablen, hilfsbereiten Frau.
        1981 erhielt sie die Betriebserlaubnis f\u00fcr ihre Pension in der F Street 1426
        in Sacramento \u2013 ein viktorianisches Haus in gutem Zustand,
        geeignet f\u00fcr die Unterbringung von Personen mit staatlicher Unterst\u00fctzung.</p>
        <p class="vb-intro"><strong>b) Die Opfer \u2013 neun Namen, ein Garten:</strong>
        Puente t\u00f6tete ihre Bewohner durch \u00dcberdosierungen von Schlaf- und Beruhigungsmitteln,
        zumeist Dalmane (Flurazepam) oder \u00e4hnliche Benzodiazepine,
        die sie ihren Opfern heimlich in Getr\u00e4nke oder Speisen mischte.
        Nach dem Tod begrub sie die Leichen im Garten oder auf benachbarten Grundst\u00fccken.
        <strong>Ruth Munroe</strong> (61) \u2013 April 1982, starb kurz nachdem sie bei Puente eingezogen war.
        <strong>Everson Gillmouth</strong> (77) \u2013 November 1985, Puentes damaliger Freund; seine Leiche wurde 1986 in einer Holzkiste am Sacramento River gefunden.
        <strong>Leona Carpenter</strong> (78) \u2013 1987.
        <strong>James Gallop</strong> (62) \u2013 1987.
        <strong>Vera Faye Martin</strong> (64) \u2013 Oktober 1987.
        <strong>Dorothy Miller</strong> (64) \u2013 November 1987.
        <strong>Benjamin Fink</strong> (55) \u2013 Dezember 1987.
        <strong>Betty Palmer</strong> (78) \u2013 Januar 1988.
        <strong>Alvaro Montoya</strong> (51), geistig behindert \u2013 Februar 1988.
        Alle kassierten staatliche Renten oder Sozialhilfe. Puente unterschrieb die Schecks,
        als w\u00e4ren sie noch am Leben.</p>
        <p class="vb-intro"><strong>c) Die Entdeckung (November 1988):</strong>
        Im November 1988 meldete ein Sozialarbeiter Alvaro Montoya als vermisst.
        Die Polizei suchte Puente auf. Sie zeigte sich kooperativ, bat die Beamten herein,
        bot Kaffee an. Man begann, den Garten umzugraben.
        Als die erste Leiche gefunden wurde, bat Puente die Beamten,
        kurz zu ihrer Schwester gehen zu d\u00fcrfen \u2013 sie sei ersch\u00fcttert.
        Die Polizei lie\u00df sie gehen.
        Sie bestieg einen Bus nach Los Angeles.
        Am Ende des Tages wurden im Garten sieben Leichen gefunden.</p>
        <p class="vb-intro"><strong>d) Die Flucht und die Verhaftung:</strong>
        In Los Angeles sprach Puente in einer Bar einen Mann an.
        Er erkannte sie \u2013 ihr Foto war gerade in den Nachrichten.
        Er rief die Polizei. Sie wurde verhaftet, ohne Widerstand zu leisten.
        Im Verh\u00f6r gab sie zu, dass die Menschen gestorben seien \u2013
        aber sie bestritt, sie get\u00f6tet zu haben. \u201eSie sind nat\u00fcrlich gestorben",
        sagte sie. \u201eIch habe nur die Schecks kassiert."
        Der Adler blieb ruhig. Er leugnete. Er l\u00e4chelte.
        Er war makellos gekleidet.</p>
        <p class="vb-intro"><strong>e) Der Prozess und das Urteil:</strong>
        Der Prozess dauerte von 1992 bis 1993 und war einer der l\u00e4ngsten
        in der Geschichte Kaliforniens.
        Puente trat t\u00e4glich im Gericht in gepflegter Kleidung auf,
        mit Perlenkette und Handtasche.
        Sie wurde in zwei F\u00e4llen wegen Mords ersten Grades verurteilt \u2013
        in den \u00fcbrigen F\u00e4llen fehlten Beweise f\u00fcr eine Verurteilung.
        Die Todesstrafe wurde nicht verh\u00e4ngt; sie erhielt lebenslange Haft ohne Bew\u00e4hrung.
        Sie starb am 27. M\u00e4rz 2011 in der California Institution for Women.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Der Viererstress: Die leere Mitte hinter der Maske</h3>
        <p class="vb-intro">
        Die Eins bewegt sich im Stress in Richtung <strong>Vier</strong> \u2013
        innere Leere, das Gef\u00fchl fundamentaler Unvollst\u00e4ndigkeit,
        eine Melancholie, die hinter der perfekten Oberfl\u00e4che wartet.
        Puentes gesamtes Leben war ein Versuch, diese innere Leere
        durch \u00e4u\u00dfere Kontrolle zu kompensieren:
        das Haus immer ordentlich, die Finanzen immer unter Kontrolle,
        das Bild immer makellos.
        Die Vier-Energie der desintegrierten Eins zeigt sich bei Puente
        in der tiefen Unf\u00e4higkeit, echte Verbindung zuzulassen \u2013
        Bewohner waren Ressourcen, keine Menschen.
        F\u00fcrsorge war Werkzeug, keine Empfindung.
        Was nach innen fehlte, wurde nach au\u00dfen inszeniert.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro">
        Dorothea Puente zeigt, wie die selbsterhaltende Eins mit Zweierfl\u00fcgel
        zur perfekten T\u00e4terin werden kann \u2013 nicht durch Aggression, sondern durch
        die absolute Kontrolle \u00fcber einen geschlossenen Raum und die Menschen darin.
        Sie brauchte keine Waffe. Sie brauchte ein Haus, Medikamente und das Vertrauen
        von Menschen, die keine andere Wahl hatten.
        Der Adler braucht keinen L\u00e4rm. Er braucht nur Geduld und einen Horst,
        in dem er ungest\u00f6rt herrscht.
        Was Puente von Dennis Nilsen unterscheidet \u2013 ebenfalls SE1w2 \u2013
        ist das vollst\u00e4ndige Fehlen von emotionalem Motiv:
        Sie t\u00f6tete nicht aus Einsamkeit, nicht aus Zorn auf eine Person,
        sondern aus Ordnungslogik: Diese Menschen st\u00f6rten das System.
        Das System war ihr Leben.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Zusammenfassung</h3>
        <p class="vb-intro">
        <strong>Subtyp:</strong> SE1w2 \u2013 Selbsterhaltende Eins mit Zweierfl\u00fcgel.<br>
        <strong>Leidenschaft:</strong> Zorn \u2013 still, akkumuliert, endg\u00fcltig; richtet ohne Aufschrei.<br>
        <strong>Stresspunkt:</strong> Vier \u2013 innere Leere, Unf\u00e4higkeit zu echter Verbindung, F\u00fcrsorge als Inszenierung.<br>
        <strong>Tierentsprechung:</strong> Adler \u2013 makellos, pr\u00e4zise, herrscht im eigenen Horst ohne L\u00e4rm.<br>
        <strong>Opfer:</strong> Mindestens 9 \u2013 Senioren, Behinderte, Obdachlose; alle im Garten oder auf benachbartem Grund begraben.<br>
        <strong>Tatmotiv:</strong> Kassierung von Sozialschecks verstorbener Bewohner; gesch\u00e4tzter Gesamtbetrag mehrere Tausend Dollar pro Monat.<br>
        <strong>Verurteilt:</strong> 1993, zweifacher Mord ersten Grades, lebenslange Haft ohne Bew\u00e4hrung.<br>
        <strong>Gestorben:</strong> 27. M\u00e4rz 2011, California Institution for Women.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die selbsterhaltende Eins im Vergleich: Wie sich Zorn bei SE1, SO1 und SX1 unterschiedlich ausdr\u00fcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE1, SO1, SX1 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 1 ausf\u00fchrlich portr\u00e4tiert \u2013 Zorn, Perfektionismus und der Heilungsweg \u00fcber echte Gelassenheit.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Dorothea Puente wurde 1993 wegen dreier Morde schuldig gesprochen und verbrachte den Rest ihres Lebens bis 2011 in Haft. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-dennis-nilsen", label:"Kriminalpsychologie: Dennis Nilsen (SE1w2) \u2013 ebenfalls Adler"},
        {route:"kriminalpsychologie-harold-shipman", label:"Kriminalpsychologie: Harold Shipman (SO5w6) \u2013 Arzt als T\u00e4ter"},
        {route:"kriminalpsychologie-niels-hoegel", label:"Kriminalpsychologie: Niels H\u00f6gel (SE7w8) \u2013 Pfleger als T\u00e4ter"},
      ])}
    </div>
  `);
}

function michailPopkowPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Michail Popkow \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/michail-popkow-portrait.jpg" alt="Michail Popkow \u2013 Bleistiftzeichnung" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michail Popkow</p>
        <p class="krim-portrait-typ">SE1w9 \u00b7 Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
      </div>
      <p class="psycho-intro">
        <strong>Michail Wiktorowitsch Popkow</strong>, geboren am 7. M\u00e4rz 1964
        in Angarsk, einer Industriestadt in der sibirischen Region Irkutsk,
        gilt als einer der prolifiksten Serienm\u00f6rder der Nachkriegsgeschichte.
        Zwischen 1992 und 2010 t\u00f6tete er mindestens 86 Frauen \u2013 vorwiegend
        nachts, an abgelegenen Orten, nach zuvor angebotenen Mitfahrgelegenheiten.
        W\u00e4hrend dieser gesamten Zeit war er aktiver Polizeibeamter der Miliz
        in Angarsk, lebte mit seiner Frau und seiner Tochter zusammen und galt
        als unauff\u00e4lliger, pflichtbewusster B\u00fcrger. 2012 wurde er verhaftet,
        2015 zun\u00e4chst f\u00fcr 22 Morde verurteilt, 2017 nach weiteren Gest\u00e4ndnissen
        f\u00fcr 59 zus\u00e4tzliche Taten zu lebenslanger Haft verurteilt.
        Die russische \u00d6ffentlichkeit kannte ihn als den \u201eWerwolf von Angarsk".
        Sein Fall ersch\u00fctterte nicht zuletzt deshalb, weil er jahrelang
        an Ermittlungen gegen sich selbst beteiligt war.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Michail Popkow</strong> wird der <strong>Selbsterhaltenden Eins mit Neunerfl\u00fcgel</strong>
        im Enneagramm zugeordnet. Die Leidenschaft der Eins ist <em>Zorn</em> \u2013
        ein tiefer, aufgestauter Groll gegen moralische Unvollkommenheit,
        gegen das Unreine, gegen das, was als Abweichung von der Ordnung erlebt wird.
        Die selbsterhaltende Eins (SE1) richtet diese Energie auf materielle Kontrolle,
        praktische Pflichterf\u00fcllung und ein tadelloses \u00e4u\u00dferes Bild.
        Der Neunerfl\u00fcgel mildert die sichtbare Sch\u00e4rfe der Eins erheblich:
        Er verleiht Geduld, ruhige Unauff\u00e4lligkeit und eine soziale W\u00e4rme,
        die das innere Brodeln vollst\u00e4ndig verbirgt. Bei Popkow f\u00fchrte
        diese Kombination zu einem der umfangreichsten und am l\u00e4ngsten
        unentdeckten Serienverbrechen der russischen Geschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\u00e4t</h3>
        <p class="vb-intro"><strong>a) Autoritativ und beruhigend:</strong>
        Popkow trug Uniform. Der Blick eines Polizeibeamten in der
        postsowjetischen Gesellschaft vermittelte Autorit\u00e4t und Schutz \u2013
        nicht Bedrohung. Opfer stiegen freiwillig in sein Fahrzeug,
        weil ein Milizion\u00e4r in dieser Gesellschaft Sicherheit signalisierte.
        Die Eins in Uniform ist die Eins als institutionelle Ordnungsmacht:
        Der Blick des H\u00fcters, nicht des J\u00e4gers.</p>
        <p class="vb-intro"><strong>b) Ruhig und kontrolliert:</strong>
        Zeugen aus seinem Umfeld beschrieben Popkow als besonnen und
        ruhig \u2013 jemand, der nicht auffiel, nicht laut wurde, keine
        Extreme zeigte. Der Neunerfl\u00fcgel der Eins erzeugt genau diese
        Qualit\u00e4t: eine gleichm\u00e4\u00dfige, fast sedierte Ruhe nach au\u00dfen,
        hinter der sich die Einser-Spannung aufstaut.</p>
        <p class="vb-intro"><strong>c) Ohne erkennbares Warnsignal:</strong>
        Keines der Opfer, die mit ihm mitfuhren, ahnte etwas.
        Diese F\u00e4higkeit, keine Bedrohung auszustrahlen, ist bei Popkow
        durch die Uniform noch verst\u00e4rkt: Die institutionelle Rolle
        \u00fcbernahm die Arbeit der Tarnung. Der Neunerfl\u00fcgel lieferte
        die innere Ruhe; die Polizeimarke lieferte die \u00e4u\u00dfere Legitimation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der H\u00fcter als T\u00e4ter:</strong>
        <strong>Popkow</strong> war w\u00e4hrend der gesamten Tatzeit aktiver Polizeibeamter.
        Er ermittelte zeitweise selbst in F\u00e4llen, die er begangen hatte.
        Diese paradoxe Konstellation ist bei der selbsterhaltenden Eins
        in sich logisch: Die Eins identifiziert sich mit Ordnung, Gesetz
        und Institution \u2013 und nutzt diese Identifikation als psychologischen
        Schutzraum, der das eigene Handeln der moralischen Bewertung entzieht.</p>
        <p class="vb-intro"><strong>b) Moralische Selbstrechtfertigung:</strong>
        <strong>Popkow</strong> rechtfertigte seine Taten mit einem klaren moralischen
        Prinzip: Er t\u00f6te Frauen, die sich nachts auf der Stra\u00dfe aufhielten,
        tr\u00e4nken und sich \u201eunmoralisch" verhielten \u2013 ein Reinigungsauftrag,
        den er sich selbst erteilt hatte. Diese Rahmung ist das
        Einser-Muster in seiner reinsten und gef\u00e4hrlichsten Form:
        Der Zorn findet ein Prinzip, das ihn legitimiert.</p>
        <p class="vb-intro"><strong>c) B\u00fcrgerliches Doppelleben:</strong>
        <strong>Popkow</strong> lebte mit seiner Frau \u2013 ebenfalls Polizeibeamtin \u2013
        und seiner Tochter zusammen, pflegte nachbarschaftliche Kontakte
        und galt als unauff\u00e4llig und verl\u00e4sslich. Die vollst\u00e4ndige
        Trennung zwischen dem Familien- und Berufsalltag und den
        n\u00e4chtlichen Taten ist das klassische SE1-Muster: Die \u00e4u\u00dfere
        Ordnung wird mit absolutem Aufwand aufrechterhalten, weil
        sie das Fundament des Selbstbildes ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Systembewusstes Vorgehen:</strong>
        Als Polizeibeamter kannte <strong>Popkow</strong> die Ermittlungsmethoden,
        die Spurensicherung und die internen Abl\u00e4ufe. Er nutzte dieses
        Wissen, um Tatspuren zu verwischen und Verdacht von sich
        fernzuhalten \u2013 bis hin zur aktiven Teilnahme an Ermittlungen.
        Das ist Einser-Methodenkenntnis als Schutzinstrument:
        Die Eins will es richtig machen, auch wenn \u201erichtig"
        hier bedeutet, Fehler zu vermeiden, die zur Entdeckung f\u00fchren.</p>
        <p class="vb-intro"><strong>b) Moralische Selektion der Opfer:</strong>
        <strong>Popkow</strong> w\u00e4hlte Opfer nach einem inneren Kriterium aus:
        Frauen, die er als moralisch minderwertig einstufte.
        Diese Selektion unterscheidet ihn von willk\u00fcrlich handelnden
        T\u00e4tern \u2013 er folgte einem Prinzip. Das Einser-Muster
        der moralischen Bewertung, das im Alltag als Perfektionismus
        erscheint, verwandelte sich hier in ein t\u00f6dliches Selektionssystem.</p>
        <p class="vb-intro"><strong>c) Ausdauer \u00fcber zwei Jahrzehnte:</strong>
        Mindestens 18 Jahre aktive Tatzeit sind ein Zeichen f\u00fcr eine
        Disziplin, die weit \u00fcber Impulsivit\u00e4t hinausgeht.
        <strong>Popkow</strong> t\u00f6tete nicht in Sch\u00fcben unkontrollierbarer Rage,
        sondern \u00fcber einen langen Zeitraum hinweg \u2013 zwischen den Taten
        lebte er sein geregeltes Doppelleben. Diese Ausdauer ist
        die selbsterhaltende Eins in ihrer beharrlichsten Auspr\u00e4gung:
        Die Eins gibt nicht auf, solange sie ihr Ziel f\u00fcr legitim h\u00e4lt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Die Uniform als vollst\u00e4ndige Tarnung:</strong>
        <strong>Popkows</strong> Polizeiuniform war seine wirksamste Tarnung \u2013
        wirkungsvoller als jede soziale Maske. Sie signalisierte
        Zugeh\u00f6rigkeit zur Ordnung, zur Staatsmacht, zur Seite
        des Gesetzes. In der postsowjetischen Gesellschaft Sibiriens
        war der Milizion\u00e4r eine Respektsperson. Die Eins in Uniform
        ist die Eins in ihrer sozial akzeptiertesten Form.</p>
        <p class="vb-intro"><strong>b) Pflichtbewusster Kollege:</strong>
        In seiner Dienststelle galt <strong>Popkow</strong> als ordentlich und
        pflichtbewusst. Keine auff\u00e4lligen Ausbr\u00fcche, keine
        dienstlichen Verfehlungen, keine Auff\u00e4lligkeiten.
        Diese gleichm\u00e4\u00dfige Zuverl\u00e4ssigkeit ist der Neunerfl\u00fcgel
        der Eins im Berufsleben: Er erscheint ruhig, solide,
        berechenbar \u2013 und ist damit das Letzte, was jemand
        mit einem Serient\u00e4ter verbindet.</p>
        <p class="vb-intro"><strong>c) Famili\u00e4r und sozial integriert:</strong>
        Nachbarn und Bekannte erinnern sich an einen normalen,
        umg\u00e4nglichen Menschen. <strong>Popkow</strong> war kein Einzelg\u00e4nger,
        kein Sonderling, kein sozial Isolierter \u2013 er war Teil
        der Gemeinschaft. Die SE1w9 funktioniert in Gemeinschaften
        oft gut: Sie h\u00e4lt Regeln ein, st\u00f6rt den Frieden nicht
        und macht ihre innere Welt f\u00fcr andere unsichtbar.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Stille Kontrolle als Grundton:</strong>
        <strong>Popkow</strong> verstrahlte keine sichtbare Anspannung.
        Seine Energie wirkte kontrolliert und beherrscht \u2013
        der ruhige Beamte, der seinen Dienst tut.
        Hinter dieser stillen Kontrolle lag die aufgestaute
        Einser-Energie: ein moralischer Groll, der \u00fcber
        Jahrzehnte in geordneten Bahnen gehalten wurde.</p>
        <p class="vb-intro"><strong>b) Nacht als Ventil:</strong>
        Tags\u00fcber Polizist, nachts T\u00e4ter \u2013 diese zeitliche Trennung
        ist energetisch bedeutsam. Die Eins braucht Kan\u00e4le
        f\u00fcr ihren aufgestauten Druck. Bei <strong>Popkow</strong>
        schuf die Nacht den Raum au\u00dferhalb der geregelten Ordnung,
        in dem sich der Druck entlud. Das Tagesleben blieb davon
        scheinbar unber\u00fchrt \u2013 weil die Trennung absolut war.</p>
        <p class="vb-intro"><strong>c) Kein Reue-Impuls, keine Integration:</strong>
        <strong>Popkow</strong> zeigte in Verh\u00f6ren keine echte Reue.
        Er erkl\u00e4rte seine Taten als konsequente Umsetzung
        eines inneren Prinzips. Das ist die Eins in der
        tiefsten Stufe der Desintegration: Der Zorn hat
        sich vollst\u00e4ndig mit einer \u00dcberzeugung verb\u00fcndet
        und ist damit aus dem Bereich der moralischen
        Selbstreflexion herausgetreten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tierentsprechung: Der Adler</h3>
        <p class="vb-intro"><strong>a) Der H\u00fcter des Reviers:</strong>
        Der Adler beansprucht ein klar definiertes Revier
        und verteidigt es konsequent gegen alles, was er
        als Eindringling oder St\u00f6rung empfindet. <strong>Popkow</strong>
        verstand Angarsk als sein Revier \u2013 und die Frauen,
        die er als moralisch unrein einstufte, als St\u00f6rung
        der Ordnung, die er zu h\u00fcten glaubte. Die T\u00e4terlogik
        des Adlers: Nicht Aggression, sondern Revierbewahrung.</p>
        <p class="vb-intro"><strong>b) Unangreifbare Tarnung in der H\u00f6he:</strong>
        Der Adler ist aus der N\u00e4he selten zu erkennen \u2013
        er beobachtet aus einer Distanz, die anderen unsichtbar bleibt.
        <strong>Popkows</strong> Uniform und sein Beamtenstatus schufen
        dieselbe Distanz: Er war zu nah an der Ordnungsmacht,
        als dass man ihn als T\u00e4ter in Betracht gezogen h\u00e4tte.
        Die institutionelle H\u00f6he sch\u00fctzte ihn zwei Jahrzehnte lang.</p>
        <p class="vb-intro"><strong>c) Pr\u00e4zision und Selektivit\u00e4t:</strong>
        Der Adler greift nicht wahllos an \u2013 er selektiert,
        beobachtet und w\u00e4hlt den Moment. <strong>Popkow</strong> handelte
        nach demselben Prinzip: Er w\u00e4hlte Opfer nach eigenem
        Kriterium, nutzte seine Ortskenntnis und die Dunkelheit
        der sibirischen N\u00e4chte. Die Selektivit\u00e4t war sein
        Schutzschild und zugleich Ausdruck seiner \u00dcberzeugung:
        Der Adler greift an, wen er f\u00fcr w\u00fcrdig h\u00e4lt \u2013 getroffen zu werden.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Michail Wiktorowitsch Popkow</strong> verk\u00f6rpert die selbsterhaltende Eins
        in einer Auspr\u00e4gung, die durch die institutionelle Einbettung
        eine eigene Kategorie bildet: Der H\u00fcter der Ordnung als ihr
        systematischer Untergraber. Die Polizeiuniform war nicht nur Tarnung \u2013
        sie war Teil seines Selbstbildes als moralisch handelnder Mensch.
        Der Neunerfl\u00fcgel sorgte f\u00fcr die soziale Unauff\u00e4lligkeit,
        die ihn zwei Jahrzehnte lang sch\u00fctzte. Die Eins lieferte
        die \u00dcberzeugung, die Methode und die Ausdauer.
        Popkow ist kein Beweis f\u00fcr Polizeigewalt als System \u2013
        er ist ein Extremfall dessen, was entsteht, wenn der
        Einser-Zorn eine ideologische Rahmung findet, die ihn
        als Pflicht erscheinen l\u00e4sst: moralisch, notwendig,
        im Dienst einer h\u00f6heren Ordnung.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\u00e4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Naranjos SE1 \u2013 \u201eWorry / Angst":</strong>
        Claudio Naranjo beschrieb die selbsterhaltende Eins als den
        Subtyp, der am st\u00e4rksten auf materielle Sicherheit und
        praktische Funktionst\u00fcchtigkeit ausgerichtet ist.
        <strong>Popkows</strong> gesamte Lebensstruktur \u2013 Beamtenstatus,
        geregelter Haushalt, stabiles Einkommen \u2013 spiegelt
        diese Orientierung. Die n\u00e4chtlichen Taten bedrohten
        diese Sicherheit, was die extreme Sorgfalt erkl\u00e4rt,
        mit der er Spuren verwischte: Die SE1 kalkuliert
        Risiken, sie handelt nicht leichtsinnig.</p>
        <p class="vb-intro"><strong>b) Der Neunerfl\u00fcgel als institutionelle Anpassung:</strong>
        Der Neunerfl\u00fcgel macht die Eins sozialer, geduldiger
        und angepasster. Bei <strong>Popkow</strong> zeigte sich dies
        in seiner F\u00e4higkeit, sich \u00fcber Jahrzehnte in eine
        Berufsstruktur einzuf\u00fcgen, ohne aufzufallen.
        Die Neun l\u00f6st sich im Kollektiv auf \u2013 sie verschmilzt
        mit dem Hintergrund. In Kombination mit der Polizeiuniform
        war diese F\u00e4higkeit zur Selbstausl\u00f6schung
        eine nahezu vollst\u00e4ndige Tarnung.</p>
        <p class="vb-intro"><strong>c) Moralische Rahmung als Einser-Kern:</strong>
        Die Eins muss ihren Handlungen innerlich zustimmen k\u00f6nnen.
        <strong>Popkow</strong> l\u00f6ste dieses Problem durch eine
        explizite moralische Ideologie: Er tue, was getan
        werden m\u00fcsse. Diese Ideologie ist keine Nachrationalisierung \u2013
        sie war der Antrieb. Der aufgestaute Einser-Zorn
        auf das Unreine, das Ungeordnete, das Unkorrekte
        fand in ihr einen legitimierenden Rahmen.</p>
        <p class="vb-intro"><strong>d) Der Ermittler als T\u00e4ter:</strong>
        Die Tatsache, dass <strong>Popkow</strong> an Ermittlungen
        gegen sich selbst beteiligt war, ist psychologisch aufschlussreich.
        Die Eins identifiziert sich mit dem System \u2013 sie glaubt
        an Institutionen und agiert in ihnen ohne inneren Widerspruch.
        Popkow konnte ermitteln, weil er sich nicht als T\u00e4ter
        im institutionellen Sinne wahrnahm: \u201eFactor X" bei Rader
        hat bei Popkow eine ideologische Entsprechung \u2013
        der Reiniger ist kein Verbrecher.</p>
        <p class="vb-intro"><strong>e) Skala als Ausdruck der \u00dcberzeugung:</strong>
        86 best\u00e4tigte Opfer \u00fcber 18 Jahre \u2013 diese Zahl ist
        nicht das Ergebnis unkontrollierbarer Impulse, sondern
        einer stabilen \u00dcberzeugung. Je gefestigter die moralische
        Rahmung, desto l\u00e4nger h\u00e4lt das Verhalten an.
        Bei <strong>Popkow</strong> blieb die ideologische Grundlage
        konstant \u2013 und damit auch die Taten. Das ist die Eins
        in ihrer beharrlichsten Auspr\u00e4gung: Solange das
        Prinzip gilt, gilt auch die Konsequenz.</p>
        <p class="vb-intro"><strong>f) Kein Wachstumsweg \u2013 totale Desintegration:</strong>
        Der Wachstumspunkt der Eins ist die Sieben \u2013 Leichtigkeit,
        Freude, der Mut zum Unvollkommenen. F\u00fcr <strong>Popkow</strong>
        gab es diesen Weg nicht. Kein Humor, kein Spiel,
        keine Kreativit\u00e4t als Ventil \u2013 nur die stille
        Beamtenpflicht und die n\u00e4chtliche Entladung.
        Der Gegenpunkt der Eins ist die Vier: tiefes Leid,
        Gef\u00fchl der grundlegenden Andersartigkeit.
        Popkow lebte dauerhaft in der Vier-Desintegration \u2013
        ein Mensch, der sich zutiefst anders f\u00fchlte als andere,
        ohne dieses Anderssein je in Sprache oder Beziehung zu bringen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die selbsterhaltende Eins im Vergleich: Wie sich Zorn bei den drei Einser-Subtypen unterschiedlich ausdr\u00fcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE1, SO1, SX1 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 1 ausf\u00fchrlich portr\u00e4tiert \u2013 Zorn, Perfektionismus und der Heilungsweg \u00fcber echte Gelassenheit.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Michail Popkow wurde 2015 und erneut 2019 wegen insgesamt 86 Morden verurteilt. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-andrei-tschikatilo", label:"Kriminalpsychologie: Andrei Tschikatilo"},
        {route:"kriminalpsychologie-dennis-rader", label:"Kriminalpsychologie: Dennis Rader"},
        {route:"blickqualitaet", label:"Blickqualit\u00e4t der 9 Typen"},
      ])}
    </div>
  `);
}

function dennisRaderPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Dennis Rader \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/dennis-rader-portrait.jpg" alt="Dennis Rader \u2013 Bleistiftzeichnung" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dennis Rader</p>
        <p class="krim-portrait-typ">SE1w9 \u00b7 Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
      </div>
      <p class="psycho-intro">
        <strong>Dennis Lynn Rader</strong>, geboren am 9. M\u00e4rz 1945 in Pittsburg, Kansas,
        ist bekannt als der BTK-Killer \u2013 ein K\u00fcrzel, das er selbst pr\u00e4gte: \u201eBind, Torture, Kill"
        (Fesseln, Foltern, T\u00f6ten). Zwischen 1974 und 1991 ermordete er zehn Menschen
        in der Umgebung von Wichita, Kansas. Jahrzehntelang blieb er unentdeckt \u2013
        als Kirchenratsvorsitzender der Christ Lutheran Church in Park City,
        als kommunaler Ordnungsbeauftragter, als Ehemann und Vater zweier Kinder.
        Im Jahr 2005 wurde er verhaftet, nachdem er nach 25 Jahren Schweigen erneut
        begann, Botschaften an Polizei und Medien zu schicken \u2013 und auf einer Diskette
        digitale Spuren hinterlie\u00df, die zu seiner Kirche f\u00fchrten. Er wurde zu zehnmal
        lebenslanger Haft ohne Bew\u00e4hrung verurteilt. Sein Fall gilt als Lehrbuchbeispiel
        f\u00fcr die vollst\u00e4ndige Spaltung einer Pers\u00f6nlichkeit.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Dennis Rader</strong> wird der <strong>Selbsterhaltenden Eins mit Neunerfl\u00fcgel</strong>
        im Enneagramm zugeordnet. Die Leidenschaft der Eins ist <em>Zorn</em> \u2013
        ein tiefer, aufgestauter Groll gegen innere Unvollkommenheit und gegen eine Welt,
        die als ungerecht oder unkontrollierbar erlebt wird. Die selbsterhaltende Eins (SE1)
        richtet diese Energie auf materielle Sicherheit, praktische Kontrolle und
        die Aufrechterhaltung eines tadellosen \u00e4u\u00dferen Bildes. Der Neunerfl\u00fcgel verleiht
        ihr Geduld, Angepasstheit und eine scheinbare W\u00e4rme, die das innere Brodeln
        vollst\u00e4ndig verbirgt. Bei Rader f\u00fchrte diese Kombination zu einer der
        akribischsten und gleichzeitig r\u00e4tselhaftesten T\u00e4terbiografien der amerikanischen
        Kriminalgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\u00e4t</h3>
        <p class="vb-intro"><strong>a) Pr\u00fcfend und regelorientiert:</strong>
        Raders Blick war der eines Menschen, der Abweichungen registriert.
        Als kommunaler Ordnungsbeauftragter schaute er buchst\u00e4blich beruflich
        nach Verst\u00f6\u00dfen \u2013 ungepflegte Grundst\u00fccke, fehlerhafte Bauvorschriften,
        unangemeldete Hunde. Diese kontrollierende Qualit\u00e4t des Blicks ist
        ein Kernmerkmal der Eins: die Welt als Feld der Bewertung.</p>
        <p class="vb-intro"><strong>b) Freundlich und unauff\u00e4llig:</strong>
        In seiner sozialen Umgebung wirkte Rader warm und engagiert \u2013
        der Nachbar, der hilft, der Kirchenmann, der sich k\u00fcmmert.
        Der Neunerfl\u00fcgel gibt der Eins eine soziale Zug\u00e4nglichkeit,
        die die innere Sch\u00e4rfe vollst\u00e4ndig kaschiert.
        Niemand sah einen gef\u00e4hrlichen Menschen.</p>
        <p class="vb-intro"><strong>c) Ohne erkennbares Bedrohungspotenzial:</strong>
        Bekannte und Kollegen beschrieben Rader als gew\u00f6hnlich und manchmal
        sogar etwas langweilig. Diese absolute Unauff\u00e4lligkeit ist das
        Kennzeichen der SE1w9 in ihrer dunkelsten Auspr\u00e4gung: Die Gef\u00e4hrlichkeit
        liegt vollst\u00e4ndig unterhalb jeder wahrnehmbaren Oberfl\u00e4che.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Das Doppelleben als System:</strong>
        <strong>Rader</strong> f\u00fchrte sein Leben in zwei vollst\u00e4ndig getrennten Sph\u00e4ren \u2013
        dem b\u00fcrgerlichen Dennis und dem BTK. Diese Trennung war nicht zuf\u00e4llig,
        sondern systematisch gewollt: Er legte Akten an, bezeichnete seine
        Opfer als \u201eProjekte" und dokumentierte seine Taten mit b\u00fcrokratischer
        Sorgfalt. Das Doppelleben war nicht Begleiterscheinung \u2013 es war
        Methode, Selbstschutz und Kontrollmechanismus in einem.</p>
        <p class="vb-intro"><strong>b) Regelorientierung als Lebensthema:</strong>
        <strong>Rader</strong> machte Regeln zu seinem Beruf. Als Ordnungsbeauftragter
        war er bekannt daf\u00fcr, selbst geringf\u00fcgige Verst\u00f6\u00dfe unnachgiebig
        zu verfolgen \u2013 Nachbarn beklagten seine Hartn\u00e4ckigkeit.
        Diese Rigidit\u00e4t ist ein klassisches Einser-Muster: Die Eins
        glaubt an Regeln, an Korrektheit, an die Notwendigkeit der Ordnung \u2013
        und vertritt diese \u00dcberzeugung ohne Spielraum.</p>
        <p class="vb-intro"><strong>c) \u201eFactor X" \u2013 die Spaltung als Konzept:</strong>
        <strong>Rader</strong> entwickelte eine eigene Begrifflichkeit f\u00fcr sein
        inneres Erleben: Er nannte den Teil, der f\u00fcr die BTK-Taten verantwortlich
        war, \u201eFactor X" \u2013 eine Art innere Entit\u00e4t, die er von seinem
        bewussten Selbst trennte. Diese konzeptuelle Selbstentlastung ist
        ein Extremfall des Einser-Mechanismus: Die Eins duldet keine
        innere Unvollkommenheit und l\u00f6st den Widerspruch durch Spaltung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Akribische Planung als Einser-Perfektionismus:</strong>
        <strong>Rader</strong> bezeichnete seine Taten intern als \u201eProjekte" und legte
        dazu detaillierte Unterlagen an \u2013 Skizzen, Zeichnungen, Notizen.
        Er beobachtete Opfer \u00fcber Monate, erkundete Fluchtwege und
        plante Alternativszenarien. Diese methodische Sorgfalt ist
        Einser-Perfektionismus in seiner dunkelsten Auspr\u00e4gung:
        Die Eins will es richtig machen \u2013 auch dort, wo \u201erichtig"
        keine moralische Bedeutung mehr tr\u00e4gt.</p>
        <p class="vb-intro"><strong>b) Das Verlangen nach Anerkennung als Bruchstelle:</strong>
        <strong>Rader</strong> unterscheidet sich in einem zentralen Punkt von anderen
        SE1w9-Profilen: Er wollte als BTK bekannt sein. Er schrieb Briefe
        an Polizei und Medien, pr\u00e4gte den Begriff BTK selbst und kehrte
        nach 25-j\u00e4hrigem Schweigen zur\u00fcck \u2013 weil er das Gef\u00fchl hatte,
        vergessen zu werden. Dieses Geltungsbed\u00fcrfnis ist f\u00fcr die SE1
        untypisch, aber psychologisch erkl\u00e4rbar: Es ist der aufgestaute
        Zorn, der Ausdruck sucht \u2013 nicht im Ausbruch, sondern in
        der Forderung nach Sichtbarkeit.</p>
        <p class="vb-intro"><strong>c) Kirchenengagement als Selbstbild:</strong>
        <strong>Rader</strong> war nicht nur Mitglied, sondern Vorsitzender des
        Kirchenrats seiner Gemeinde. Dieses Engagement war kein blo\u00dfe
        Tarnung \u2013 es entsprach seinem Selbstbild als anst\u00e4ndiger,
        gottesf\u00fcrchtiger Mensch. Die Eins braucht das innere Ja
        zu sich selbst; das religi\u00f6se Amt lieferte es. BTK war
        \u201eFactor X" \u2013 der Kirchenmann war das wahre Ich.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der normale Nachbar:</strong>
        <strong>Rader</strong> war in seiner Gemeinde bekannt und gesch\u00e4tzt \u2013
        nicht auff\u00e4llig beliebt, aber solide pr\u00e4sent. Der Kirchenmann,
        der Ordnungsh\u00fcter, der Familienmensch. Diese Gesamtwirkung
        war so \u00fcberzeugend, dass selbst enge Bekannte nach seiner
        Verhaftung von echter Fassungslosigkeit berichteten.</p>
        <p class="vb-intro"><strong>b) Autorit\u00e4t durch Amt:</strong>
        Beide seiner \u00f6ffentlichen Rollen \u2013 kommunaler Ordnungsbeauftragter
        und Kirchenratsvorsitzender \u2013 verliehen ihm legitime Autorit\u00e4t.
        Die Eins bewegt sich gern in institutionellen Strukturen:
        Sie respektiert Hierarchien und sucht Positionen, in denen
        Korrektheit belohnt wird. Rader nutzte diese Positionen
        auch als psychologische Stabilisierung seiner b\u00fcrgerlichen Identit\u00e4t.</p>
        <p class="vb-intro"><strong>c) Kontrolliert und verl\u00e4sslich:</strong>
        In allen Kontexten wirkte Rader beherrscht und zuverl\u00e4ssig.
        Diese Gesamtwirkung ist das Ergebnis jahrzehntelanger
        Selbstkontrolle: Die Eins unterdr\u00fcckt, ordnet und kontrolliert \u2013
        nach au\u00dfen sichtbar als Verl\u00e4sslichkeit, nach innen als
        Druck, der nach Entladung sucht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Geduldige Stille zwischen den Taten:</strong>
        Zwischen 1977 und 1991 t\u00f6tete <strong>Rader</strong> nicht \u2013 vierzehn Jahre Pause.
        Die BTK-Aktivit\u00e4ten kehrten erst in Form von Briefen zur\u00fcck,
        bevor er 2004 die Diskette schickte. Diese F\u00e4higkeit zum
        langen Warten ist die SE1w9 in ihrer kontrolliertesten Form:
        Der aufgestaute Druck findet keinen sofortigen Auslass,
        er wird gehalten \u2013 manchmal jahrzehntelang.</p>
        <p class="vb-intro"><strong>b) Innere Spannung als Dauerzustand:</strong>
        Rader beschrieb in Verh\u00f6ren einen inneren Drang, einen Zug,
        der ihn zu den Taten trieb \u2013 etwas, das er nicht vollst\u00e4ndig
        kontrollieren konnte. Das ist die Energiedynamik der entgleisten Eins:
        Aufgestauter Zorn, der kein konstruktives Ventil findet,
        der w\u00e4chst und schlie\u00dflich nach Ausdruck dr\u00e4ngt.</p>
        <p class="vb-intro"><strong>c) Anerkennung als Druckventil:</strong>
        Raders Briefe an Polizei und Medien waren sein Ventil \u2013
        nicht die Taten selbst, sondern die Dokumentation und
        Kommunikation \u00fcber die Taten. Darin unterscheidet er sich
        grundlegend von Tschikatilo: Der Zorn suchte nicht nur
        Entladung in der Tat, sondern Best\u00e4tigung durch
        Aufmerksamkeit. Das ist der Einser-Hunger nach Richtigkeit:
        auch die eigene Dunkelheit soll anerkannt werden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tierentsprechung: Der Adler</h3>
        <p class="vb-intro"><strong>a) Geduldiges Kreisen \u00fcber dem Revier:</strong>
        Der Adler markiert ein Revier und kreist geduldig dar\u00fcber \u2013
        er eilt nicht. Rader beobachtete potenzielle Opfer \u00fcber
        Monate, erkundete Wohnumgebungen und Abl\u00e4ufe, bevor er handelte.
        Diese territoriale Geduld ist das Adler-Prinzip in seiner
        reinsten Form: vollst\u00e4ndige Kontrolle \u00fcber Zeit und Ort.</p>
        <p class="vb-intro"><strong>b) Pr\u00e4zision statt \u00dcberw\u00e4ltigung:</strong>
        Der Adler greift nicht mit roher Kraft an \u2013 er greift pr\u00e4zise an.
        Raders Modus operandi war klar strukturiert: Fesseln, Kontrolle,
        ein definiertes Ablaufmuster. Diese Pr\u00e4zision unterscheidet
        ihn von impulsiv handelnden T\u00e4tern: Die Eins will es richtig tun \u2013
        auch im Verbrechen ist Methode das Grundprinzip.</p>
        <p class="vb-intro"><strong>c) R\u00fcckkehr ins Revier:</strong>
        Adler kehren zur\u00fcck \u2013 in ihr Revier, zu ihren Nestern,
        zu vertrauten Jagdgr\u00fcnden. Raders R\u00fcckkehr nach 25-j\u00e4hrigem
        Schweigen durch die Diskette war genau das: eine R\u00fcckkehr
        ins eigene Revier, die Unf\u00e4higkeit, das Territorium
        wirklich aufzugeben. Es wurde zu seinem Verh\u00e4ngnis.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Dennis Rader</strong> verk\u00f6rpert die selbsterhaltende Eins in einer
        Auspr\u00e4gung, die in ihrer inneren Logik erschreckend koh\u00e4rent ist:
        Ein Mann, der Ordnung, Korrektheit und Regelkonformit\u00e4t zu seinem
        Beruf und seiner Identit\u00e4t machte \u2013 und zugleich ein geheimes
        Leben f\u00fchrte, das er durch Spaltung von seinem Selbstbild trennte.
        Der Neunerfl\u00fcgel sorgte f\u00fcr die soziale Angepasstheit, die ihn
        jahrzehntelang sch\u00fctzte. Die Eins lieferte die Methode, die Dokumentation,
        die akribische Planung und \u2013 paradoxerweise \u2013 auch das Geltungsbed\u00fcrfnis,
        das ihn schlie\u00dflich zu Fall brachte: Die Diskette, die zur Verhaftung
        f\u00fchrte, schickte er, weil er nicht vergessen werden wollte.
        Der aufgestaute Einser-Zorn, der nie einen konstruktiven Kanal fand,
        brauchte am Ende Anerkennung \u2013 und bezahlte daf\u00fcr den h\u00f6chsten Preis.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\u00e4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Naranjos SE1 \u2013 \u201eWorry / Angst":</strong>
        Claudio Naranjo bezeichnete die selbsterhaltende Eins als den Subtyp
        der Sorge um materielle Sicherheit und praktische Korrektheit.
        Raders gesamte Lebensstruktur \u2013 der sichere Beamtenjob,
        das Eigenheim, die Kirchenmitgliedschaft \u2013 war auf Sicherheit
        und Unanfechtbarkeit ausgerichtet. Das BTK-Leben bedrohte
        diese Sicherheit, was die Sorgfalt der Planung erkl\u00e4rt:
        Die SE1 kalkuliert Risiken aus, sie st\u00fcrzt sich nicht hinein.</p>
        <p class="vb-intro"><strong>b) Neunerfl\u00fcgel als soziale Maske:</strong>
        Der Neunerfl\u00fcgel der Eins verleiht ihr eine soziale Zug\u00e4nglichkeit
        und W\u00e4rme, die die Eins ohne ihn kaum h\u00e4tte. Bei Rader war dies
        keine bewusste Strategie \u2013 es war sein tats\u00e4chliches Auftreten.
        Er k\u00fcmmerte sich um die Gemeinde, engagierte sich im Kirchenrat,
        half Nachbarn. Der Neunerfl\u00fcgel als Teil seiner Pers\u00f6nlichkeit
        machte ihn zu jemandem, dem Menschen vertrauten.</p>
        <p class="vb-intro"><strong>c) \u201eFactor X" als Einser-Spaltungslogik:</strong>
        Raders Konzept des \u201eFactor X" ist psychologisch pr\u00e4zise:
        Die Eins kann keine innere Unvollkommenheit integrieren \u2013
        sie muss sie auslagern. \u201eFactor X" war die begriffliche
        L\u00f6sung dieses Problems. Das gute Ich blieb unber\u00fchrt;
        die dunklen Impulse wurden einer quasi-autonomen Entit\u00e4t
        zugewiesen. Dieser Mechanismus ist eine Extremform des
        Einser-Selbstbildes: Ich bin eigentlich gut \u2013
        das B\u00f6se kommt von woanders.</p>
        <p class="vb-intro"><strong>d) Das Geltungsbed\u00fcrfnis als Einser-Variante:</strong>
        Raders Hunger nach Anerkennung ist f\u00fcr einen SE1w9 ungew\u00f6hnlich \u2013
        der Subtyp neigt eher zur Unsichtbarkeit. Psychologisch l\u00e4sst
        sich das jedoch als Variante des Einser-Zorns lesen:
        Der Zorn will Recht behalten. Bei Tschikatilo blieb der Zorn
        nach innen gewendet; bei Rader suchte er nach au\u00dfen \u2013
        in der Botschaft: Seht her, was ich getan habe, und erkennt es an.
        Das ist die Eins, die auch im Verbrechen auf Vollst\u00e4ndigkeit besteht.</p>
        <p class="vb-intro"><strong>e) Der Ordnungsbeauftragte als Einser-Beruf:</strong>
        Kaum ein Beruf passt besser zur entgleisten Eins als der
        kommunale Ordnungsbeauftragte: Man hat die Befugnis,
        Verst\u00f6\u00dfe zu ahnden, man repr\u00e4sentiert Regeln, man kann
        andere zur Rechenschaft ziehen. Raders Hartn\u00e4ckigkeit
        bei kleinen Vergehen \u2013 Nachbarn beschwerten sich \u00fcber
        unn\u00f6tige Strafzettel \u2013 ist das klassische Muster der Eins:
        Die Regel gilt, Ausnahmen sind nicht vorgesehen.</p>
        <p class="vb-intro"><strong>f) Verhaftung durch eigene Konsequenz:</strong>
        Raders Untergang kam nicht von ungefähr \u2013 er war selbst
        herbeigef\u00fchrt. Er fragte die Polizei ausdr\u00fccklich,
        ob eine Diskette zur\u00fcckverfolgt werden k\u00f6nne, und vertraute
        der Antwort. Das ist die Eins, die Regeln f\u00fcr verbindlich h\u00e4lt:
        Er glaubte der offiziellen Aussage \u2013 weil er an Institutionen glaubte.
        Diese fatale Naivit\u00e4t gegen\u00fcber dem System, dem er selbst diente,
        ist das letzte Paradoxon des Einser-T\u00e4ters Dennis Rader.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die selbsterhaltende Eins im Vergleich: Wie sich Zorn bei den drei Einser-Subtypen unterschiedlich ausdr\u00fcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE1, SO1, SX1 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 1 ausf\u00fchrlich portr\u00e4tiert \u2013 Zorn, Perfektionismus und der Heilungsweg \u00fcber echte Gelassenheit.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Dennis Rader bekannte sich 2005 in zehn F\u00e4llen des Mordes schuldig und wurde zu zehnmal lebenslanger Haft verurteilt. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-andrei-tschikatilo", label:"Kriminalpsychologie: Andrei Tschikatilo"},
        {route:"kriminalpsychologie-arno-funke", label:"Kriminalpsychologie: Arno Funke"},
        {route:"blickqualitaet", label:"Blickqualit\u00e4t der 9 Typen"},
      ])}
    </div>
  `);
}

function andreiTschikatiloPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Andrei Tschikatilo \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/andrei-tschikatilo-portrait.jpg" alt="Andrei Tschikatilo \u2013 Bleistiftzeichnung" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Andrei Tschikatilo</p>
        <p class="krim-portrait-typ">SE1w9 \u00b7 Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
      </div>
      <p class="psycho-intro">
        <strong>Andrei Romanowitsch Tschikatilo</strong>, geboren am 16. Oktober 1936
        in der Ukraine, ist einer der meistgef\xfcrchteten Serienm\xf6rder des 20. Jahrhunderts.
        Zwischen 1978 und 1990 ermordete er mindestens 52 Menschen \u2013 \xfcberwiegend Frauen
        und Kinder \u2013 in der sowjetischen Region Rostow. In der Sowjetunion der Breschnew-
        und Gorbatschow-\xc4ra galt er als Lehrer, Parteimitglied und unauff\xe4lliger
        Staatsb\u00fcrger. Zw\xf6lf Jahre lang blieb er unentdeckt. Am 14. Februar 1994 wurde er
        in der Strafanstalt Nowotscherkassk durch Genickschuss hingerichtet. Sein Fall
        ersch\xfctterte die Sowjetunion auch deshalb, weil er das offizielle Dogma widerlegte,
        Serienm\xf6rder seien ein Produkt des kapitalistischen Westens.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Andrei Tschikatilo</strong> wird der <strong>Selbsterhaltenden Eins mit Neunerfl\xfcgel</strong>
        im Enneagramm zugeordnet. Die Leidenschaft der Eins ist <em>Zorn</em> \u2013
        ein tiefer, aufgestauter Groll gegen innere Unvollkommenheit und gegen eine Welt,
        die als ungerecht und dem\u00fctigend erlebt wird. Die selbsterhaltende Eins (SE1) richtet
        diese Energie auf materielle Sicherheit, praktische Kontrolle und die
        Aufrechterhaltung eines tadellosen \xe4u\xdferen Bildes. Der Neunerfl\xfcgel
        d\xe4mpft die sichtbare Sch\xe4rfe der Eins erheblich: Er verleiht Geduld,
        \xe4u\xdfere Ruhe und eine fast gespenstische Unauff\xe4lligkeit. Bei Tschikatilo
        f\xfchrte diese Kombination zu einem der t\u00f6dlichsten und am schwersten
        fassbaren T\xe4ter der Kriminalgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\xe4t</h3>
        <p class="vb-intro"><strong>a) Unauff\xe4llig und ausdruckslos:</strong>
        Tschikatilo fiel niemandem auf. Zeitgenossen beschrieben seinen Blick als leer,
        fast abwesend \u2013 nicht bedrohlich, nicht eindringlich, schlicht nichtssagend.
        Der Neunerfl\xfcgel der Eins l\xf6scht die f\xfcr die Eins sonst charakteristische
        Intensit\xe4t des Blicks; was bleibt, ist das Gesicht eines Menschen, an den
        man sich nicht erinnert.</p>
        <p class="vb-intro"><strong>b) Pr\xfcfend hinter der Fassade:</strong>
        Hinter der Ausdruckslosigkeit lag ein pr\xfcfender, taxierender Blick \u2013
        der Blick der Eins, die bewertet, sortiert und nach Schwachstellen sucht.
        Bei Tschikatilo richtete sich dieser Blick auf Verletzlichkeit:
        Er w\xe4hlte Opfer, die er als wehrlos und gesellschaftlich unsichtbar
        einstufte \u2013 Kinder, jugendliche Ausrei\xdfer, Frauen am Rand der Gesellschaft.</p>
        <p class="vb-intro"><strong>c) Ohne Bedrohungssignal:</strong>
        Das Gef\xe4hrliche an Tschikatilo war gerade das Fehlen jedes Warnzeichens.
        Opfer gingen freiwillig mit ihm \u2013 er wirkte wie ein normaler Mensch.
        Diese Qualit\xe4t, keine Bedrohung auszustrahlen, ist ein Kennzeichen
        der SE1w9 in ihrer dunkelsten Auspr\xe4gung: Die Gef\xe4hrlichkeit liegt
        vollst\xe4ndig unter der Oberfl\xe4che.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Tiefstes Trauma in der Kindheit:</strong>
        <strong>Tschikatilo</strong> wuchs w\xe4hrend des ukrainischen Holodomors auf \u2013
        der von Stalin verursachten Hungersnot, der Millionen zum Opfer fielen.
        Er berichtete, sein \xe4lterer Bruder sei von hungernden Nachbarn entf\xfchrt
        und gefressen worden. Ob historisch belegt oder nicht: Dieses Trauma
        pr\xe4gte sein innerstes Bild von einer Welt, die den Schwachen verschlingt.
        F\xfcr die SE1 ist existenzielle Bedrohung das Urthema \u2013 und kaum jemand
        hat sie so fr\xfch und so radikal erfahren.</p>
        <p class="vb-intro"><strong>b) Sexuelle Dysfunktion als Schamquelle:</strong>
        <strong>Tschikatilo</strong> war impotent. Diese Dysfunktion war eine Quelle
        tiefer, unheilbarer Scham \u2013 f\xfcr einen Mann in der sowjetischen
        Arbeitergesellschaft eine der vernichtendsten m\xf6glichen Unvollkommenheiten.
        Die Eins ertr\xe4gt keine innere Unvollkommenheit: Sie erzeugt Groll, Zorn
        und den zwanghaften Wunsch, die Scham zu l\xf6schen. Bei Tschikatilo
        fand dieser Zorn seinen Ausweg in Gewalt.</p>
        <p class="vb-intro"><strong>c) Perfektes Doppelleben:</strong>
        <strong>Tschikatilo</strong> war Lehrer, sp\xe4ter Versorgungsbeauftragter eines
        Industriebetriebs, KPdSU-Parteimitglied. Er f\xfchrte ein tadelloses
        b\xfcrgerliches Leben \u2013 unscheinbar, pflichtbewusst, niemals auff\xe4llig.
        Diese F\xe4higkeit zur vollst\xe4ndigen Spaltung zwischen \xe4u\xdferer
        Korrektheit und innerem Abgrund ist eine Extremform der SE1w9:
        Die \xe4u\xdfere Ordnung dient als Panzerung gegen die innere Aufl\xf6sung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Methodisches, langfristiges Vorgehen:</strong>
        <strong>Tschikatilo</strong> handelte nie impulsiv. Er plante Kontaktaufnahmen,
        lockte Opfer mit plausiblen Vorw\xe4nden und w\xe4hlte Tatorte sorgf\xe4ltig.
        Zw\xf6lf Jahre lang wurde er nicht gefasst \u2013 eine Leistung, die akribische
        Disziplin voraussetzt. Das ist Einser-Perfektionismus in seiner
        dunkelsten Auspr\xe4gung: Die Methode wird zur Selbst\xfcberzeugungsstrategie
        gegen innere Aufl\xf6sung eingesetzt.</p>
        <p class="vb-intro"><strong>b) Moralische Selbstrechtfertigung:</strong>
        <strong>Tschikatilo</strong> bezeichnete seine Opfer als \u201esozial wertlos" \u2013
        Prostituierte, Landstreicher, Ausrei\xdfer, gesellschaftliche Randgestalten.
        Er stilisierte seine Taten zur S\xe4uberung, zur Beseitigung von
        Unvollkommenheit. Diese moralische Rahmung ist typisch f\xfcr die
        kranke Eins: Sie ben\xf6tigt ein inneres Ja zu ihren Handlungen
        und konstruiert dieses Ja durch ein rigides Prinzip.</p>
        <p class="vb-intro"><strong>c) Aufgestauter Zorn als Antrieb:</strong>
        Der Zorn der Eins ist kein hei\xdfes Auffl\xe4rtern, sondern ein kaltes,
        jahrzehntelanges Brennen. Bei Tschikatilo hatte sich dieser Zorn
        \xfcber Jahrzehnte akkumuliert \u2013 aus Kindheitstrauma, sexueller Scham
        und beruflichen Dem\u00fctigungen \u2013 und entlud sich in zunehmend frequenteren
        und exzessiveren Taten. Die Dynamik der Entladung und des erneuten
        Aufstauens ist ein klassisches Muster der entgleisten Eins.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der Mann, den niemand bemerkte:</strong>
        <strong>Tschikatilo</strong> war in jeder Hinsicht unscheinbar \u2013 mittelgro\xdf,
        unscheinbares Gesicht, graue Kleidung, nichts Ged\xe4chtnisw\u00fcrdiges.
        Zeugen, die ihm kurz begegnet waren, konnten ihn nicht beschreiben.
        Diese radikale Unauff\xe4lligkeit ist der Neunerfl\xfcgel als vollst\xe4ndige
        Tarnung: Die Neun l\xf6scht sich selbst aus dem Aufmerksamkeitsfeld anderer aus.</p>
        <p class="vb-intro"><strong>b) Pflichtbewusster B\xfcrger:</strong>
        In seinem sozialen Umfeld wirkte er zuverl\xe4ssig und pflichtbewusst \u2013
        der Beamte, der seinen Dienst tut, der Kollege, der keine Probleme macht.
        Diese Gesamtwirkung sch\xfctzte ihn jahrelang: Niemand suchte den
        Serienm\xf6rder im braven Partei- und Familienmenschen.</p>
        <p class="vb-intro"><strong>c) Fehlende emotionale Resonanz:</strong>
        Menschen, die n\xe4her mit ihm zu tun hatten, beschrieben eine
        merkw\xfcrdige emotionale Leere \u2013 er war nicht warm, aber auch nicht
        kalt, nicht unfreundlich, aber ohne echte Pr\xe4senz.
        Das ist die Kombination aus Einser-Unterdr\xfcckung und
        Neuner-Selbstausl\xf6schung: Ein Mensch, der nach innen eingemauert ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Druckvolle Stille:</strong>
        <strong>Tschikatilo</strong> verstr\xf6mte keine sichtbare Energie \u2013 im Gegenteil.
        Er wirkte energetisch neutral, fast vakuumartig.
        Und doch lag dahinter ein enormer Druck: die aufgestaute Energie
        eines Menschen, der jahrzehntelang alles nach innen dr\xe4ngte,
        was er nicht zeigen durfte oder konnte.</p>
        <p class="vb-intro"><strong>b) Kein Ventil im Alltag:</strong>
        Die Eins braucht Kan\xe4le f\xfcr ihren Zorn \u2013 Arbeit, Kontrolle,
        Perfektionismus als sublimierte Form. Bei Tschikatilo
        versagten alle zivilen Ventile: berufliche Dem\u00fctigungen,
        sexuelles Versagen, gesellschaftliche Unsichtbarkeit.
        Der aufgestaute Druck fand seinen einzigen Auslass in den Taten.</p>
        <p class="vb-intro"><strong>c) Intensit\xe4t hinter Stille:</strong>
        Im Verh\xf6r nach seiner Verhaftung beschrieben Ermittler
        eine Intensit\xe4t, die pl\xf6tzlich sichtbar wurde \u2013 als habe
        sich eine Schleuse ge\xf6ffnet. Das ist das Muster der SE1w9:
        Lange Stille, dann unerwartete Eruption der aufgestauten Energie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Der Adler</h3>
        <p class="vb-intro"><strong>a) Unsichtbar bis zum Angriff:</strong>
        Der Adler kreist in gro\xdfer H\xf6he \u2013 kaum sichtbar, kaum wahrnehmbar.
        Erst im Augenblick des Angriffs wird er real. Tschikatilo handelte
        nach demselben Prinzip: jahrelang unsichtbar, im entscheidenden
        Moment mit voller, \xfcberw\xe4ltigender Pr\xe4senz. Die Opfer sahen
        den Angriff nicht kommen.</p>
        <p class="vb-intro"><strong>b) Gezielte Auswahl der Beute:</strong>
        Der Adler greift nicht wahllos an \u2013 er selektiert. Er sucht
        Schwache, Isolierte, Ungesch\xfctzte. Tschikatilo w\xe4hlte
        seine Opfer nach demselben Prinzip: gesellschaftlich randst\xe4ndig,
        von niemandem erwartet, ohne Schutzraum. Die Selektion
        war so sorgf\xe4ltig, dass viele Taten \xfcber Monate
        unentdeckt blieben.</p>
        <p class="vb-intro"><strong>c) Geduld als Methode:</strong>
        Adler warten. Sie greifen nicht im ersten besten Moment an,
        sondern warten auf den idealen. Tschikatilo bewies
        \xfcber zw\xf6lf Jahre eine eiserne Geduld: zwischen den Taten
        lebte er sein b\u00fcrgerliches Leben, wartete, kontrollierte
        den inneren Druck \u2013 bis er ihn nicht mehr kontrollieren konnte.
        Diese Geduld ist die SE1w9 in ihrer dunkelsten Form.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Andrei Romanowitsch Tschikatilo</strong> verk\xf6rpert die selbsterhaltende Eins
        in ihrer dunkelsten und zugleich psychologisch konsequentesten Auspr\xe4gung.
        Ein Kindheitstrauma von unvorstellbarer Schwere, eine lebenslange sexuelle
        Scham, berufliche Dem\u00fctigungen und der totale Zusammenbruch aller zivilen
        Entlastungskan\xe4le \u2013 das ist das Substrat. Der Neunerfl\xfcgel sorgte daf\xfcr,
        dass all das nach au\xdfen unsichtbar blieb: Er wirkte wie jeder andere.
        Die Eins lieferte die Methode, die Selbstrechtfertigung und die
        eiserne Disziplin. Tschikatilo ist kein Beweis f\xfcr das B\u00f6se schlechthin \u2013
        er ist ein Extremfall dessen, was entsteht, wenn die tiefste Verletzung
        nie Sprache findet und der innere Zorn keine einzige konstruktive
        Form der Entladung kennt.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Naranjos SE1 \u2013 \u201eAngst / Worry\u201c:</strong>
        Claudio Naranjo nannte die selbsterhaltende Eins \u201eAngst" oder \u201eWorry":
        Sie ist die am st\xe4rksten auf materielle Sicherheit und k\xf6rperliches
        \xdcberleben fixierte aller Einsen. Tschikatilo hatte in der Kindheit
        existenziellen Hunger, K\u00e4lte und Verlust erlebt. Die SE1 entwickelt
        daraus eine chronische Wachheit gegen\xfcber Bedrohung und eine
        zwanghafte Kontrolle \xfcber das eigene Leben \u2013 als Schutz gegen
        die Wiederkehr des Urtraumas.</p>
        <p class="vb-intro"><strong>b) Der Neunerfl\xfcgel als perfekte Tarnung:</strong>
        Bei Tschikatilo war der Neunerfl\xfcgel keine mildernde Kraft \u2013
        er war eine Waffe. Die Neun l\xf6scht sich aus dem Bewusstsein
        anderer aus: Sie strahlt keine Bedrohung aus, keinen Anspruch,
        keine Intensit\xe4t. Das erm\xf6glichte Tschikatilo zw\xf6lf Jahre
        unentdeckten Mordens mitten in einer totalit\xe4ren Gesellschaft,
        die jeden \xfcberwachte \u2013 denn er sah einfach nicht wie ein
        Verd\xe4chtiger aus.</p>
        <p class="vb-intro"><strong>c) Sexuelle Scham als Einser-Kern:</strong>
        Die Eins duldet keine innere Unvollkommenheit.
        Tschikatilos Impotenz war eine t\xe4glich erneute Konfrontation
        mit dem, was er f\xfcr einen fundamentalen Makel hielt.
        Der daraus resultierende Zorn richtete sich zun\xe4chst gegen
        sich selbst \u2013 wie bei der gesunden Eins, die sich kritisiert \u2013
        und verschob sich schlie\xdflich nach au\xdfen, auf Opfer,
        die er als schwach und wertlos definierte.</p>
        <p class="vb-intro"><strong>d) Moralische Umbuchung als Einser-Mechanismus:</strong>
        Die Eins muss ihren Handlungen innerlich zustimmen k\xf6nnen.
        Tschikatilo l\xf6ste dieses Problem durch ideologische
        Rahmung: Seine Opfer waren \u201esozial minderwertig",
        ihre Beseitigung ein Dienst an der Gesellschaft.
        Dieser Mechanismus \u2013 die moralische Umbuchung einer Tat
        in eine Pflichterf\u00fcllung \u2013 ist ein klassisches Einser-Muster
        im Extremfall.</p>
        <p class="vb-intro"><strong>e) Das Versagen aller Institutionen:</strong>
        Tschikatilo wurde w\xe4hrend seiner aktiven Zeit zweimal
        vorl\xe4ufig festgenommen \u2013 und beide Male freigelassen,
        weil das sowjetische System nicht glauben konnte,
        dass ein Parteimitglied und Familienmensch ein Serienm\xf6rder war.
        Seine b\u00fcrgerliche Fassade sch\u00fctzte ihn institutionell.
        Das ist die SE1w9 als systemische Fehlfunktion:
        Das Image der Korrektheit als Schutzpanzer.</p>
        <p class="vb-intro"><strong>f) Kein Wachstum, keine Integration:</strong>
        Der Wachstumspunkt der Eins ist die Sieben \u2013 Leichtigkeit,
        Kreativit\xe4t, die F\xe4higkeit, das Leben zu genie\xdfen.
        Bei Tschikatilo gab es diesen Weg nicht. Keine Kunst,
        kein Spiel, kein Humor, kein einziger kreativer Kanal
        f\xfcr die aufgestaute Energie. Der Gegenpunkt der Eins
        ist die Vier: tiefes Leid, Gef\xfchl der fundamentalen
        Andersartigkeit, Scham. Tschikatilo lebte dauerhaft
        in der Vier-Desintegration \u2013 ohne je den Weg zur Sieben
        zu finden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die selbsterhaltende Eins im Vergleich: Wie sich Zorn bei den drei Einser-Subtypen unterschiedlich ausdr\xfcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE1, SO1, SX1 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 1 ausf\xfchrlich portr\xe4tiert \u2013 Zorn, Perfektionismus und der Heilungsweg \xfcber echte Gelassenheit.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Andrei Tschikatilo wurde 1992 in 52 F\u00e4llen des Mordes schuldig gesprochen und 1994 hingerichtet. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-arno-funke", label:"Kriminalpsychologie: Arno Funke"},
        {route:"kriminalpsychologie-ted-bundy", label:"Kriminalpsychologie: Ted Bundy"},
        {route:"blickqualitaet", label:"Blickqualit\xe4t der 9 Typen"},
      ])}
    </div>
  `);
}

function bernieMadoffPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Bernie Madoff \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame"><img class="krim-portrait-img" loading="lazy" src="./assets/portraits/bernie-madoff-portrait.jpg" alt="Bernie Madoff" /></div>
        <p class="krim-portrait-name">Bernie Madoff</p>
        <p class="krim-portrait-typ">SE3w4 \xb7 Selbsterhaltender Typ 3 mit Viererfl\xfcgel</p>
        <p style="font-size:0.85rem;color:var(--muted);margin:0.2rem 0 0;">Gr\xf6\xdftes Ponzi-System der Geschichte \xb7 65 Mrd. Dollar \xb7 Tierentsprechung: Waschb\xe4r</p>
      </div>

      <p class="psycho-intro">
        <strong>Bernie Madoff</strong> (1938\u20132021) war Jahrzehnte lang eine der angesehensten Figuren der Wall Street. Mitgr\xfcnder und ehemaliger Vorsitzender der NASDAQ, Chef seiner eigenen Investmentfirma, Wohlt\xe4ter, Familienmensch. Und gleichzeitig der Architekt des <strong>gr\xf6\xdften Anlagebetrugs der Geschichte</strong>: ein Ponzi-System, das mindestens 20 Jahre lief, mit gef\xe4lschten Kontoausz\xfcgen im Gesamtwert von rund 65 Milliarden Dollar und realen Verlusten von ca. 17 Milliarden Dollar f\xfcr seine Anleger. Im Dezember 2008 gestand er seinen S\xf6hnen die Wahrheit \u2013 die ihn am n\xe4chsten Tag bei der FBI anzeigten. Er wurde zu <strong>150 Jahren Haft</strong> verurteilt und starb 2021 in Bundesgefangenschaft. Das Enneagramm erkl\xe4rt, wie ein Mensch jahrzehntelang zwei vollst\xe4ndig getrennte Realit\xe4ten bewohnen kann \u2013 und warum die Grenze zwischen Erfolg und Betrug f\xfcr den selbsterhaltenden Dreier manchmal keine ist.
      </p>

      <div class="vb-section" style="background:rgba(80,40,0,0.07);border-left:3px solid #7c5200;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        Bernie Madoff wird dem <strong>Selbsterhaltenden Typ 3 mit Viererfl\xfcgel (SE3w4)</strong> zugeordnet. Der SE3er ist der Kontratyp der Drei: Er inszeniert sich nicht laut und glamour\xf6s wie der SO3, sondern still, seri\xf6s, vertrauensw\xfcrdig. Der selbsterhaltende Instinkt richtet den Dreier auf materielle Sicherheit aus \u2013 Wohlstand, Besitz, Stabilit\xe4t als tiefstes Ziel. Der Viererfl\xfcgel f\xfcgt eine eigent\xfcmliche Tiefe hinzu: ein Gesp\xfcr f\xfcr das Besondere, den exklusiven Zirkel, die Einzigartigkeit des eigenen Angebots. Das Tier \u2013 der <em>Waschb\xe4r</em> \u2013 trifft den Kern: geschickt, anpassungsf\xe4hig, nachtaktiv, mit einer Maske, die zur Natur geh\xf6rt. Der Waschb\xe4r nimmt, was er braucht \u2013 leise, geschickt und ohne Drama.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Äußere Merkmale</h3>
        <p class="vb-intro"><strong>a) Ruhig und vertrauenerweckend:</strong>
        Madoff strahlte keine Energie aus, die \xfcberw\xe4ltigte oder blendete. Er war kein Marktschreier, kein Blender. Er war ruhig, sachlich, kompetent. Genau das war die Falle: Wer so wenig Aufhebens um sich macht, muss wirklich sicher sein. Der SE3-Kontratyp t\xe4uscht nicht durch \xdcbertreibung \u2013 er t\xe4uscht durch <em>Understatement</em>.</p>
        <p class="vb-intro"><strong>b) Exklusiv und ausw\xe4hlend:</strong>
        Madoff nahm nicht jeden als Kunden. Wer bei ihm investieren durfte, f\xfchlte sich auserw\xe4hlt. Der Viererfl\xfcgel verleiht der Drei eine \xc4sthetik der Einzigartigkeit: <em>Nicht jeder kommt herein. Du bist etwas Besonderes, weil ich dich aufnehme.</em> Das war kein Versehen \u2013 das war Methode. Exklusivit\xe4t als Vertrauensmechanismus.</p>
        <p class="vb-intro"><strong>c) Warm im privaten Kreis:</strong>
        Wer ihn pers\xf6nlich kannte, beschreibt ihn als charmant, f\xfcrsorglich, zugewandt. Er investierte in Beziehungen \u2013 spielte Golf mit Kunden, kannte ihre Kinder, erschien zuverl\xe4ssig zu Veranstaltungen. Der SE3er wei\xdf instinktiv: Vertrauen entsteht in der N\xe4he. Er gab N\xe4he, um Sicherheit zu kaufen.</p>
        <p class="vb-intro"><strong>d) Leer hinter der Oberfl\xe4che:</strong>
        In sp\xe4teren Interviews beschrieb Madoff selbst eine tiefe innere Leere. Der Viererfl\xfcgel macht die Drei ahnungsf\xe4hig f\xfcr das, was fehlt \u2013 und gleichzeitig unf\xe4hig, damit wirklich umzugehen. Der Betrug lief weiter, auch als kein wirtschaftlicher Druck mehr bestand: weil die Inszenierung selbst zur einzigen Identit\xe4t geworden war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Sicherheit durch Akkumulation:</strong>
        Der SE3er strebt nach materiellem Fundament. Nicht nach Ruhm \u2013 nach Sicherheit. Madoff baute keine Marke um sein Gesicht herum. Er baute ein System: eine Firma, einen Ruf, ein Netzwerk. Der SE-Instinkt ist der Instinkt des Nestes, der Vorr\xe4te, der gesch\xfctzten Position. Madoffs Ponzi-System war, auf einer verdrehten Ebene, genau das: ein Nest, das er verzweifelt sch\xfctzte.</p>
        <p class="vb-intro"><strong>b) Die Maske als Natur:</strong>
        Der Dreier tr\xe4gt keine Maske, die er irgendwann absetzt \u2013 er <em>ist</em> die Maske. Das macht ihn so schwer zu durchschauen. Madoff hatte keine zweite, private Pers\xf6nlichkeit, die das Gegenteil seiner \xf6ffentlichen war. Er glaubte, so weit man das rekonstruieren kann, zeitweise selbst an die Stabilit\xe4t seines Systems. Die Dissoziation war vollst\xe4ndig.</p>
        <p class="vb-intro"><strong>c) Der Kontratyp: unsichtbare Drei:</strong>
        Der SE3er ist der Typ, den man nicht als Dreier erkennt. Wo der SO3 gl\xe4nzen will, will der SE3 <em>zuverl\xe4ssig</em> sein. Keine Arroganz, keine B\xfchne. Madoffs B\xfcro war bekannt f\xfcr seine schlichte Professionalit\xe4t. Die Investmentstrategie wurde nie offengelegt \u2013 angeblich zu komplex. Genau das verf\xfchrte: Wer Diskretion ausstrahlt, scheint Integrit\xe4t zu haben.</p>
        <p class="vb-intro"><strong>d) Viererfl\xfcgel: der Sinn f\xfcr das Besondere:</strong>
        Der Viererfl\xfcgel f\xfcgt dem SE3 eine melancholische Tiefe hinzu und ein ausgepr\xe4gtes Gesp\xfcr f\xfcr \xc4sthetik und Exklusivit\xe4t. Madoffs Kunden waren keine Masse \u2013 es war ein ausgew\xe4hlter Kreis aus der j\xfcdischen Oberschicht, dem Showbusiness, Stiftungen. Der Vier-Fl\xfcgel erm\xf6glicht der Drei eine Art aristokratischen Stil: nicht jeder geh\xf6rt dazu. Das ist Selektion als Vertrauensstrategie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Tatgeschehen</h3>
        <p class="vb-intro"><strong>a) Die Entstehung des Systems:</strong>
        Madoff gr\xfcndete 1960 seine Investmentfirma Bernard L. Madoff Investment Securities. Der betr\xfcgerische Arm \u2013 ein separater, streng getrennter Gesch\xe4ftsbereich \u2013 entstand nach allem, was bekannt ist, sp\xe4testens in den fr\xfchen 1990er-Jahren, m\xf6glicherweise fr\xfcher. Statt echter Investitionen wurden nur Kontoausz\xfcge produziert, die konstante, risikolose Renditen von 10\u201312 % pro Jahr auswiesen \u2013 unabh\xe4ngig von Marktbewegungen.</p>
        <p class="vb-intro"><strong>b) Die Methode:</strong>
        Ein klassisches Ponzi-System: Neue Investorengelder wurden genutzt, um Renditen an bestehende Kunden auszuzahlen. Kein Geld wurde tats\xe4chlich investiert. Das Volumen wuchs \xfcber Jahrzehnte. Madoffs legitimes Handelsgesch\xe4ft und der Betrug liefen physisch und buchhalterisch strikt getrennt \u2013 in verschiedenen Stockwerken des gleichen Geb\xe4udes. Diese r\xe4umliche Trennung war symptomatisch: zwei Welten, die sich nie ber\xfchren durften.</p>
        <p class="vb-intro"><strong>c) Der Zusammenbruch:</strong>
        Die Finanzkrise 2008 war das Ende. Als Kunden in Panik massenhaft Auszahlungen verlangten, fehlten rund sieben Milliarden Dollar. Am 10. Dezember 2008 gestand Madoff seinen beiden S\xf6hnen, die ebenfalls in der Firma arbeiteten, die Wahrheit. Am n\xe4chsten Tag zeigten sie ihn beim FBI an. Er wurde noch am selben Tag verhaftet. Sein Sohn Mark beging zwei Jahre sp\xe4ter Suizid. Sein Sohn Andrew starb 2014 an einem Lymphom \u2013 einer b\xf6sartigen Krebserkrankung des lymphatischen Systems. Die Familie war vernichtet.</p>
        <p class="vb-intro"><strong>d) Urteil und Haft:</strong>
        Im M\xe4rz 2009 bekannte sich Madoff in elf Anklagepunkten schuldig. Am 29. Juni 2009 verurteilte ihn Richter Denny Chin zu <strong>150 Jahren Bundesgef\xe4ngnis</strong> \u2013 der H\xf6chststrafe. Madoff sa\xdf seine Strafe in der Bundesstrafanstalt Butner, North Carolina ab. Er beantragte mehrfach vorzeitige Entlassung, zuletzt wegen einer unheilbaren Nierenerkrankung \u2013 ohne Erfolg. Am 14. April 2021 starb er in Haft im Alter von 82 Jahren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Die Drei im Spiegel</h3>
        <p class="vb-intro">Der Typ 3 verliert sich in der Performanz. Das ist nicht Berechnung \u2013 es ist sein tiefster psychischer Mechanismus: <em>Ich bin, was ich leiste. Ich bin, was andere in mir sehen.</em> Irgendwann im Leben des SE3ers verschwimmt die Grenze zwischen dem echten Selbst und der Rolle. Madoff hatte so lange den unfehlbaren Investor gespielt, dass die Figur die Person ersetzt hatte.</p>
        <p class="vb-intro">Was in fr\xfchen Jahren vielleicht noch als Notl\xf6sung begann \u2013 <em>dieses eine Mal \xfcberbr\xfccke ich den Verlust</em> \u2013 wurde zur Struktur, zur Identit\xe4t, zur einzigen Welt, die er noch kannte. Der Dreier <em>glaubt</em> an seine Inszenierung. Und genau das macht ihn so gef\xe4hrlich: Er l\xfcgt nicht im \xfcblichen Sinne. Er <em>ist</em> die L\xfcge.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Der Viererfl\xfcgel: Tiefe im Dienst der T\xe4uschung</h3>
        <p class="vb-intro">Ohne Viererfl\xfcgel w\xe4re Madoff vielleicht ein gieriger Betr\xfcger unter vielen. Der Viererfl\xfcgel machte ihn zu etwas Eigenartigem: einem Betr\xfcger mit Stil, mit Geschmack, mit einer fast k\xfcnstlerischen Sorgfalt in der Konstruktion seiner Welt. Die Vier sucht nach Bedeutung und Tiefe \u2013 beim SE3w4er richtet sich diese Energie auf die Einzigartigkeit des eigenen Projekts.</p>
        <p class="vb-intro">In sp\xe4teren Gespr\xe4chen zeigte Madoff eine beinahe narzisstische Faszination mit der eigenen Tat: wie pr\xe4zise das System lief, wie lange es hielt, wie viele kluge Menschen er \xfcberzeugte. Das ist der Viererfl\xfcgel: selbst in der Katastrophe noch ein Gesp\xfcr daf\xfcr, dass das, was man getan hat, <em>besonders</em> war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Das Tier: Der Waschb\xe4r</h3>
        <p class="vb-intro">Der Waschb\xe4r tr\xe4gt von Natur aus eine Maske \u2013 und er w\xe4scht alles, was er in die H\xe4nde bekommt. Er ist nachtaktiv, geschickt mit den H\xe4nden, anpassungsf\xe4hig an jede Umgebung. Er lebt in der N\xe4he des Menschen, nutzt dessen Strukturen, ohne je wirklich dazuzugeh\xf6ren. Er wirkt harmlos, fast niedlich \u2013 und r\xe4umt dennoch systematisch aus, was er in die Pfoten bekommt.</p>
        <p class="vb-intro">F\xfcr Madoff: die Maske war sein Gesicht. Die H\xe4nde \u2013 die B\xfccher, die Zahlen, die Kontoausz\xfcge \u2013 arbeiteten im Verborgenen. Er lebte mitten unter den Menschen der Wall Street, nutzte ihr Ansehen, ihr Vertrauen, ihre Verbindungen \u2013 und entleerte sie still von innen. Jahrzehnte lang, ohne Aufhebens, ohne Spur. Der Waschb\xe4r verl\xe4sst das Revier erst, wenn nichts mehr zu holen ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">7. Psychologisches Profil</h3>
        <p class="vb-intro"><strong>a) Kein Monstrum \u2013 ein Mechanismus:</strong>
        Madoff war kein sadistischer T\xe4ter, der das Leiden seiner Opfer genoss. Er verdr\xe4ngte es. In Interviews klang er gelegentlich ehrlich \xfcberrascht von der Intensit\xe4t des Schmerzes, den er verursacht hatte. Das ist die Dreier-Psychologie: Der Schaden am anderen dringt nicht durch die Inszenierung. Was z\xe4hlt, ist die eigene B\xfchne \u2013 nicht die Konsequenzen dahinter.</p>
        <p class="vb-intro"><strong>b) Die S\xf6hne als tragischer Spiegel:</strong>
        Dass Madoffs eigene S\xf6hne ihn anzeigten, ist das tiefste Symbol des Falls. Die SE3 baut ihr Nest \u2013 Familie, Firma, Ansehen \u2013 und zerst\xf6rt es durch denselben Mechanismus, der es aufgebaut hat. Die S\xf6hne glaubten an den Vater. Als die Wahrheit herauskam, war der Vater pl\xf6tzlich weg \u2013 was blieb, war nicht mehr tragf\xe4hig. Mark Madoff nahm sich das Leben am zweiten Jahrestag der Verhaftung seines Vaters.</p>
        <p class="vb-intro"><strong>c) Kein Vergleich mit anderen Betr\xfcgern:</strong>
        Samuel Bankman-Fried (SE3w4) brauchte das Narrativ des altruistischen Genies \u2013 er inszenierte sich als Retter der Welt. Ruja Ignatova (SE3w4) brauchte die B\xfchne, den Glamour, die Menge. Madoff brauchte keines davon. Er brauchte <em>Stille</em>. Diskretion. Das leise Vertrauen des Zirkels. Das ist der reinste SE3w4: nicht der lauteste Betr\xfcger, sondern der, den man am wenigsten f\xfcr einen h\xe4lt \u2013 anders als etwa Frank Abagnale Jr. (SO7w6), dessen Betrug nicht auf Stille, sondern auf rastloser Vielfalt und ansteckendem Charme beruhte.</p>
      </div>

      <div class="vb-section" style="background:rgba(80,40,0,0.07);border-left:3px solid #7c5200;padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:var(--ink);">8. Zusammenfassung</h3>
        <p style="margin:0 0 0.8rem;font-size:0.95rem;line-height:1.7;color:var(--ink);">
        Bernie Madoff war kein Raubtier mit Z\xe4hnen. Er war ein Waschb\xe4r mit Maske: geduldig, geschickt, angepasst, und mit einer nat\xfcrlichen Tarnung, die so \xfcberzeugend war, dass selbst die kl\xfcgsten K\xf6pfe der Finanzwelt sie nicht durchschauten. Der selbsterhaltende Dreier mit Viererfl\xfcgel braucht keine B\xfchne \u2013 er braucht Vertrauen. Und er erzeugt es mit einer Pr\xe4zision, die an Kunst grenzt.
        </p>
        <p style="margin:0 0 0.8rem;font-size:0.95rem;line-height:1.7;color:var(--ink);">
        Das Tragische an Madoff ist nicht die Tat selbst \u2013 es ist die vollst\xe4ndige Ausl\xf6schung des echten Menschen hinter der Rolle. Er wusste am Ende nicht mehr, wer er ohne das System war. Die Inszenierung hatte ihn verschluckt. Der Waschb\xe4r hatte so lange das Nest ausger\xe4umt, dass am Ende auch er darin sa\xdf \u2013 ohne Ausweg.
        </p>
        <p style="margin:0;font-size:0.95rem;line-height:1.7;color:var(--ink);">
        150 Jahre. Keine Bew\xe4hrung. Das Gericht wollte ein Zeichen setzen \u2013 nicht f\xfcr Madoff, der das Ende seiner Tage in Haft sterben w\xfcrde, sondern f\xfcr alle, die nach ihm kommen w\xfcrden. Der Waschb\xe4r tr\xe4gt seine Maske bis zum letzten Atemzug. Madoff starb 2021 in Bundesgefangenschaft. Das System, das er gebaut hatte, \xfcberlebte ihn nicht einen Tag.
        </p>
      </div>

      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Die Taten Madoffs sind rechtskr\xe4ftig verurteilt \u2013 das Enneagramm erkl\xe4rt, es rechtfertigt nicht.
        </p>
      </div>

            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"kriminalpsychologie-samuel-bankman-fried", label:"Kriminalpsychologie: Samuel Bankman-Fried (SE3w4) \u2013 FTX-Betrug"},
        {route:"kriminalpsychologie-ruja-ignatova", label:"Kriminalpsychologie: Ruja Ignatova (SE3w4) \u2013 Die Cryptoqueen"},
        {route:"kriminalpsychologie-frank-abagnale-jr", label:"Kriminalpsychologie: Frank Abagnale Jr. (SO7w6) \u2013 Der Hochstapler"},
        {route:"krankheitsportraets-bernie-madoff", label:"Krankheitsportr\u00e4t: Bernie Madoff (SE3w4) \u2013 Nierenerkrankung im Gef\u00e4ngnis"}
      ])}
      <div style="margin-top:1.5rem;max-width:100%;">
        <button class="ghost-link" data-route="kriminalpsychologie">\u2190 Zur\xfcck zur Kriminalpsychologie-\xdcbersicht</button>
      </div>
    </div>
  `);
}

function arnoFunkePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Arno Funke (\u201eDagobert\u201c) \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/arno-funke-portrait.jpg" alt="Arno Funke \u2013 Bleistiftzeichnung" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Arno Funke</p>
        <p class="krim-portrait-typ">SE1w9 \u00b7 Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
      </div>
      <p class="psycho-intro">
        <strong>Arno Funke</strong>, besser bekannt als \u201eDagobert\u201c, ist einer der bekanntesten deutschen
        Erpresser des 20. Jahrhunderts. Zwischen 1988 und 1994 erpresste er den Kaufhof-Konzern
        mit immer raffinierteren technischen Konstruktionen \u2013 Fernsteuerungsautos, pr\xe4parierte
        Fahrr\xe4der, Inlineskates \u2013 und wurde dabei zum Volkshelden. Nie verletzte er jemanden,
        nie setzte er eine echte Bombe ein. 1994 wurde er gefasst und zu neun Jahren Haft
        verurteilt. Nach seiner Entlassung wurde er K\xfcnstler, Illustrator und Kinderbuchautor.
        Sein Fall ist in der Kriminalgeschichte einzigartig: Er war weniger Verbrecher als
        ein Mensch, der unter materiellem Druck zu akribischen, aber gewaltlosen Mitteln griff.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Arno Funke</strong> wird der <strong>Selbsterhaltenden Eins mit Neunerfl\xfcgel</strong>
        im Enneagramm zugeordnet. Die Leidenschaft der Eins ist <em>Zorn</em> \u2013
        ein tiefer innerer Groll gegen das, was falsch l\xe4uft, gegen Ungerechtigkeit
        und gegen ein System, das man als korrumpiert erlebt. Die selbsterhaltende
        Eins (SE1) richtet diese Energie auf materielle Sicherheit und praktische
        Pflicht: Sie sorgt sich chronisch darum, dass die Dinge des t\xe4glichen Lebens
        richtig funktionieren, und reagiert auf existenzielle Not mit akribischer,
        methodischer L\xf6sungssuche. Der Neunerfl\xfcgel mildert die Sch\xe4rfe der Eins
        erheblich: Er bringt Geduld, Sanftheit und einen tiefen Widerwillen gegen
        echte Konfrontation. In Funkes Fall f\xfchrt diese Kombination zu einem der
        faszinierendsten F\xe4lle der deutschen Kriminalgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\xe4t</h3>
        <p class="vb-intro"><strong>a) Prf\xfcend und aufmerksam:</strong>
        Funkes Blick war der eines Menschen, der Details wahrnimmt und bewertet.
        Die Eins schaut die Welt mit einem pr\xfcfenden Auge an \u2013 was stimmt, was
        stimmt nicht, wo liegt das Problem? Diese Qualit\xe4t sp\xfcrt man in seiner
        akribischen Vorbereitung jeder Aktion.</p>
        <p class="vb-intro"><strong>b) Ruhig und abwartend:</strong>
        Der Neunerfl\xfcgel verleiht dem Blick eine Geduld und Ruhe, die f\xfcr eine
        Eins ungew\u00f6hnlich wirkt. Funke st\xfcrmte nicht \u2013 er wartete, beobachtete,
        plante. Dieser abwartende, fast meditierte Blick ist das Kennzeichen des
        Neunerfl\xfcgels.</p>
        <p class="vb-intro"><strong>c) Ohne Aggression:</strong>
        Anders als viele Kriminelle wirkte Funke nie bedrohlich. Sein Blick
        signalisierte keine Dominanz, sondern Konzentration. Das ist die SE1w9
        in ihrer zivilen Auspr\xe4gung: Intensit\xe4t ohne Gef\xe4hrlichkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Materielle Not als Ausl\xf6ser:</strong>
        <strong>Funke</strong> hatte handfeste finanzielle Probleme \u2013 seine Autowerkstatt drohte zu
        scheitern. Die selbsterhaltende Eins ist von allen Einsen am st\xe4rksten auf
        materielle Sicherheit ausgerichtet. Existenzielle Not treibt sie zu
        systematischen Ma\xdfnahmen, nicht zu impulsiven Ausbr\u00fcchen.</p>
        <p class="vb-intro"><strong>b) Perfektionismus in der Ausf\xfchrung:</strong>
        <strong>Funke</strong> verbrachte Monate mit der Vorbereitung jeder Aktion. Historisch
        korrekte Materialien, technisch einwandfreie Konstruktionen, durchdachte
        Sicherungsma\xdfnahmen \u2013 das ist Einser-Perfektionismus in der Praxis.
        Ein Fehler w\xe4re nicht nur ein Risiko gewesen, sondern h\xe4tte sein inneres
        Bild von sich als kompetenten Menschen verletzt.</p>
        <p class="vb-intro"><strong>c) Moralische Selbstrechtfertigung:</strong>
        <strong>Funke</strong> sah sich nie als echten Verbrecher. In seinem Selbstbild erpresste
        er einen \xfcberm\xe4chtigen Konzern \u2013 ein opferloses Vergehen. Diese
        moralische Rahmung ist typisch f\xfcr die Eins: Sie ben\xf6tigt ein inneres
        Ja zu ihren Handlungen und formt dieses Ja durch Prinzipien und Gegen\xfcberstellungen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Methodisches Vorgehen:</strong>
        Nicht Spontaneit\xe4t, sondern Methode pr\xe4gte Funkes Handeln. Jede
        Geldabholung war ein Projekt \u2013 mit Vorlauf, Testl\xe4ufen, Alternativpl\xe4nen.
        Das ist die Eins, die Fehler antizipiert und ausschlie\xdft, bevor sie entstehen.</p>
        <p class="vb-intro"><strong>b) Innerer Groll gegen das System:</strong>
        Der Zorn der Eins ist selten laut \u2013 er ist ein stiller, anhaltender Groll.
        Funkes Erpressung eines Gro\xdfkonzerns l\xe4sst sich als Ausdruck dieses Grolls
        lesen: Das System hat ihn in die Not getrieben; er holt sich sein Recht
        auf seine eigene, kontrollierte Weise.</p>
        <p class="vb-intro"><strong>c) Gewalt als rote Linie:</strong>
        <strong>Funke</strong> \xfcberschritt die Grenze zur echten Gef\xe4hrdung anderer Menschen nie.
        F\xfcr die Eins existieren innere rote Linien, die unverhandelbar sind.
        Der Neunerfl\xfcgel verst\xe4rkt dies: Er macht die Eins sanfter und
        konfliktscheuer, als sie ohne den Fl\xfcgel w\xe4re.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Zuverl\xe4ssig und geordnet:</strong>
        <strong>Funke</strong> wirkte auf seine Umgebung geordnet und zuverl\xe4ssig \u2013 der
        Handwerker, der seine Arbeit ernst nimmt. Diese Gesamtwirkung
        erm\xf6glichte es ihm, jahrelang unentdeckt zu bleiben: Niemand sah einen
        Kriminellen, weil er wie jemand wirkte, der einfach seine Pflicht tut.</p>
        <p class="vb-intro"><strong>b) Unauff\xe4llig und zur\xfcckhaltend:</strong>
        Der Neunerfl\xfcgel macht die Eins leiser und unauff\xe4lliger, als sie
        ohne ihn w\xe4re. Funke suchte keine Aufmerksamkeit um ihrer selbst
        willen \u2013 die Medienpr\xe4senz war Mittel zum Zweck, nicht Selbstzweck.</p>
        <p class="vb-intro"><strong>c) Sympathisch trotz Kriminalit\xe4t:</strong>
        Die \xd6ffentlichkeit jubelte Funke zu \u2013 ein Zeichen daf\xfcr, dass seine
        Grundhaltung (gewaltlos, klar begr\xfcndet, niemanden verletzend) intuitiv
        als \"fair\" wahrgenommen wurde. Das ist die Eins in ihrer besten
        Auspr\xe4gung: ein tief verankerter Sinn f\xfcr das, was vertretbar ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Konzentriert und kontrolliert:</strong>
        <strong>Funke</strong> verstr\xf6mte keine wilde oder unberechenbare Energie. Seine
        Ausstrahlung war die eines Menschen, der seine Kr\xe4fte kontrolliert
        einsetzt \u2013 ruhig nach au\xdfen, konzentriert innen.</p>
        <p class="vb-intro"><strong>b) Unterschwelliger Groll:</strong>
        Darunter lag die Einser-Energie: ein stiller, beharrlicher Unmut gegen
        Ungerechtigkeiten. Dieser Groll war kein Hass \u2013 er war Antriebskraft,
        die sich in methodisches Handeln verwandelte statt in Explosion.</p>
        <p class="vb-intro"><strong>c) Ausdauer statt Eskalation:</strong>
        Sechs Jahre und immer neue Varianten \u2013 das ist keine Suchtdynamik,
        sondern Einser-Beharrlichkeit. Die Eins gibt nicht auf, solange das
        Problem nicht gel\xf6st ist. Funke h\xf6rte erst auf, als er gefasst wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Der Adler</h3>
        <p class="vb-intro"><strong>a) Scharfer Blick f\xfcr Details:</strong>
        Der Adler sieht Kleinigkeiten aus gro\xdfer Distanz \u2013 er \xfcbersieht nichts.
        Funkes Vorbereitung zeigte dieselbe Qualit\xe4t: Er erkannte Schwachstellen
        im System, die andere \xfcbersahen, und nutzte sie pr\xe4zise aus.</p>
        <p class="vb-intro"><strong>b) Geduldiges Abwarten:</strong>
        Adler kreisen geduldig, bevor sie handeln \u2013 sie eilen nicht. Funkes
        monatelange Vorbereitung jeder Aktion spiegelt diese Geduld: Er wartete,
        bis alles stimmte. Der Neunerfl\xfcgel gab ihm die Ruhe daf\xfcr.</p>
        <p class="vb-intro"><strong>c) Pr\xe4zision in der Ausf\xfchrung:</strong>
        Wenn der Adler angreift, ist es pr\xe4zise und kontrolliert \u2013 nie verschwenderisch,
        nie brutal. Funkes Aktionen hatten dieselbe Qualit\xe4t: zielgenau, technisch
        einwandfrei, ohne unn\xf6tigen Schaden. Das Handwerk des Adlers
        ist Pr\xe4zision, nicht Gewalt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Arno Funke</strong> alias \u201eDagobert\u201c verk\xf6rpert die selbsterhaltende Eins in einer
        ungew\xf6hnlichen, aber psychologisch koh\xe4renten Auspr\xe4gung: Ein Mensch unter
        materiellem Druck, der mit akribischer Methode, innerer moralischer Grenze
        und stiller Beharrlichkeit handelte. Der Neunerfl\xfcgel milderte die Sch\u00e4rfe
        der Eins \u2013 er machte Funke sanft, geduldig und gewaltlos. Nach der Haft
        fand er in der Kunst den legitimen Kanal f\xfcr dieselbe Pr\xe4zision und
        Sorgfalt, die ihn als Erpresser ausgezeichnet hatte.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Naranjos SE1 \u2013 \u201eAngst / Worry\u201c:</strong>
        Claudio Naranjo nannte die selbsterhaltende Eins \u201eAngst\u201c oder \u201eWorry\u201c:
        Sie ist von allen Einsen die am st\xe4rksten auf materielle Sicherheit
        fixierte. Chronische Sorge um das praktische \xdcberleben, um das
        Funktionieren der Dinge des Alltags \u2013 das ist der Kern der SE1.
        Funkes Erpressung war kein Abenteuer, sondern eine Antwort auf
        existenzielle Bedrohung: Seine Werkstatt stand vor dem Aus.
        Die SE1 l\xf6st Probleme \u2013 methodisch, kontrolliert, vollst\xe4ndig.</p>
        <p class="vb-intro"><strong>b) Der Neunerfl\xfcgel \u2013 Geduld und Gewaltlosigkeit:</strong>
        Der Neunerfl\xfcgel d\xe4mpft die Sch\xe4rfe und Kritik der Eins erheblich.
        Er gibt ihr Geduld, eine tiefere Harmonieneigung und einen
        ausgepr\xe4gten Widerwillen gegen echte Konfrontation. Funkes absoluter
        Gewalt-Verzicht ist der Neunerfl\xfcgel als ethische Grenze: Er h\xe4tte
        keine echte Bombe gez\xfcndet \u2013 nicht aus Feigheit, sondern weil
        das gegen sein inneres Bild von sich als einem im Grunde anst\xe4ndigen
        Menschen versto\xdfen h\xe4tte.</p>
        <p class="vb-intro"><strong>c) Einser-Perfektionismus in der Praxis:</strong>
        Die Eins muss Dinge richtig machen. Funkes monatelange Vorbereitung
        jeder Geldabholung \u2013 das Testen der Konstruktionen, das Durchdenken
        von Auswegen, die technische Pr\xe4zision \u2013 ist kein Spieler-Enthusiasmus,
        sondern Einser-Perfektionismus im praktischen Handwerk. Ein Fehler
        w\xe4re f\xfcr ihn nicht nur gef\xe4hrlich, sondern innerlich untragbar gewesen.</p>
        <p class="vb-intro"><strong>d) Stiller Groll als Antrieb:</strong>
        Der Zorn der Eins ist selten laut \u2013 er brennt still und lang. Funkes
        Erpressung eines Gro\xdfkonzerns tr\xe4gt diesen Unterton: Das System
        hat ihn in die Not gebracht; er holt sich sein Recht zur\xfcck.
        Keine Explosion, kein Ausbruch \u2013 sondern die k\xfchle, beharrliche
        Gegenbewegung eines Menschen, der sich im Recht f\xfchlt.</p>
        <p class="vb-intro"><strong>e) Integration zur Sieben \u2013 Kreativit\xe4t als Wachstum:</strong>
        Der Wachstumspunkt der Eins ist die Sieben: Wenn die Eins sich
        entspannt, gewinnt sie Leichtigkeit, Humor und Spielfreude.
        Funkes Verwandlung zum K\xfcnstler und Kinderbuchautor nach der Haft
        ist dieses Integrationsmuster: Dieselbe Pr\xe4zision, nun in einen
        kreativen, freieren Kanal gelenkt. Der Dagobert-Humor, den die
        \xd6ffentlichkeit liebte, war vielleicht ein erster Blitz dieser
        Siebener-Integration.</p>
        <p class="vb-intro"><strong>f) Sympathie als Signal f\xfcr Grundanst\xe4ndigkeit:</strong>
        Dass die \xd6ffentlichkeit Funke so zujauchzte, ist psychologisch bedeutsam.
        Die Menschen sp\xfcrten intuitiv seine rote Linie \u2013 seine Grenze vor echtem
        Schaden. Das ist der Kern der Eins in ihrer gesunden Form: ein tief
        verankertes Gef\xfchl f\xfcr das, was vertretbar ist und was nicht.
        Funke hielt diese Grenze \xfcber sechs Jahre \u2013 das ist
        Einser-Integrit\xe4t, auch im Verborgenen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die selbsterhaltende Eins im Vergleich: Wie sich Zorn bei den drei Einser-Subtypen unterschiedlich ausdr\xfcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE1, SO1, SX1 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 1 ausf\xfchrlich portr\xe4tiert \u2013 Zorn, Perfektionismus und der Heilungsweg \xfcber echte Gelassenheit.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Arno Funke wurde 1994 wegen Erpressung und Herbeif\u00fchrung von Explosionen zu neun Jahren Haft verurteilt. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-niels-hoegel", label:"Kriminalpsychologie: Niels H\xf6gel"},
        {route:"kriminalpsychologie-wolfgang-beltracchi", label:"Kriminalpsychologie: Wolfgang Beltracchi"},
        {route:"blickqualitaet", label:"Blickqualit\xe4t der 9 Typen"},
      ])}
    </div>
  `);
}


function chrisWattsPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Chris Watts \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/chris-watts-portrait.jpg" alt="Chris Watts \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Chris Watts</p>
        <p class="krim-portrait-typ">SO7w6 \u00b7 Sozialer Typ 7 mit Sechserfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">US-amerikanischer Familienm\u00f6rder \u00b7 Tierentsprechung: Biber</p>
      </div>

      <div class="psycho-intro">
        <p>Am 13. August 2018 t\u00f6tete Chris Watts seine schwangere Ehefrau Shanann und seine beiden T\u00f6chter Bella (4) und Celeste (3) in Frederick, Colorado. Er wollte mit seiner Geliebten ein neues Leben beginnen. Der Fall ersch\u00fctterte die USA nicht nur wegen der Brutalit\u00e4t, sondern wegen des Bruchs mit dem, was Watts nach au\u00dfen verk\u00f6rpert hatte: den perfekten Familienvater. Das Enneagramm macht sichtbar, wie ein sozialer Typ 7 \u2013 der Kontratyp der Sieben \u2013 unter dem Deckmantel von Pflicht und Aufopferung seine eigentliche Ma\u00dflosigkeit so lange versteckt, bis sie alles ausl\u00f6scht, was ihn zu halten droht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Kindheit und Herkunft</h3>
        <p class="vb-intro">Chris Watts wurde am 16. Mai 1985 in Spring Lake, North Carolina, geboren. Er wuchs in geordneten Verh\u00e4ltnissen auf; seine Eltern Ronnie und Cindy Watts lebten in \u00fcberschaubaren Kleinstadtverh\u00e4ltnissen. Chris galt als unauff\u00e4llig, h\u00f6flich, f\u00fcgsam \u2013 Eigenschaften, die beim sozialen Subtyp der Sieben fr\u00fch als \u00dcberlebensstrategie erscheinen: Anpassung als Weg, in der Gruppe sicher zu bleiben. Er lernte fr\u00fch, Spannungen zu vermeiden, Bed\u00fcrfnisse zur\u00fcckzustellen und ein freundliches Gesicht zu zeigen. Nichts in seiner Biographie deutete auf Gewalt hin.</p>
        <p class="vb-intro">Er lernte Shanann Atkins kennen, als beide 2010 f\u00fcr dasselbe Unternehmen arbeiteten. 2012 heirateten sie. Shanann war energiegeladen, charismatisch und \u00e4u\u00dferst pr\u00e4sent in sozialen Medien \u2013 das Gegenteil seines stillen, dienenden Auftretens. Er \u00fcbernahm in der Ehe die Rolle des verl\u00e4sslichen Hintergrunds: er kochte, pflegte die Kinder, l\u00e4chelte f\u00fcr die Kamera. Das Haus in Frederick, Colorado, stand unter erheblichem finanziellen Druck \u2013 Hypothekenr\u00fcckst\u00e4nde, drohende Zwangsvollstreckung. Shanann arbeitete f\u00fcr ein MLM-Unternehmen und inszenierte das Familienleben auf Instagram als leuchtende Werbefl\u00e4che. Chris spielte mit \u2013 \u00fcberzeugend, scheinbar aus tiefer \u00dcberzeugung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Der soziale Typ 7: Aufopferung als Maske</h3>
        <p class="vb-intro">Der soziale Subtyp der Sieben ist der Kontratyp innerhalb der Sieben-Triade. W\u00e4hrend die selbsterhaltende und die sexuelle Sieben ihre Ma\u00dflosigkeit offen zeigen \u2013 als Genusssuche, als Abenteuer, als Intensit\u00e4t der Verbindung \u2013 versteckt die soziale Sieben ihr eigenes Verlangen hinter einem Ideal des Dienens und Verzichtens. Sie stellt die Gruppe \u00fcber sich selbst, erscheint pflichtbewusst, zuverl\u00e4ssig, familienorientiert. Das ist keine blo\u00dfe L\u00fcge \u2013 es ist eine sehr reale Schicht des Charakters. Aber darunter pulsiert dieselbe Sehnsucht nach dem Neuen, der Freiheit, dem n\u00e4chsten Kapitel.</p>
        <p class="vb-intro"><strong>a) Das Familienideal als soziale Performance:</strong>
        Chris Watts verk\u00f6rperte das Bild des guten Vaters mit scheinbarer \u00dcberzeugung. Er brachte den T\u00f6chtern morgens das Fr\u00fchst\u00fcck, bastelte mit ihnen, l\u00e4chelte in Shananns Videos. Das war keine blo\u00dfe Verstellung \u2013 der soziale Subtyp der Sieben glaubt wirklich an das Bild, das er erschafft. Die Ma\u00dflosigkeit, das rastlose Verlangen nach mehr, nach Neuem, nach Freiheit liegt im Unbewussten. Die SO7-Pers\u00f6nlichkeit sch\u00fctzt sich davor, als selbsts\u00fcchtig zu gelten, indem sie sich aufopfert. Was sie nicht kann: dauerhaft darin bleiben. Der Punkt kommt, an dem das unterdr\u00fcckte Verlangen durchbricht.</p>
        <p class="vb-intro"><strong>b) Der Sechserfl\u00fcgel \u2013 Loyalit\u00e4t und Angst:</strong>
        Der Sechserfl\u00fcgel der Sieben verleiht ihr an der Oberfl\u00e4che Verl\u00e4sslichkeit und Bindungstreue. Er macht die Sieben loyaler, \u00e4ngstlicher vor Konsequenzen, st\u00e4rker auf Sicherheit ausgerichtet. Bei Watts zeigte sich das in seiner F\u00e4higkeit, \u00fcber Monate eine perfekte Fassade aufrechtzuerhalten \u2013 nach au\u00dfen der treue Ehemann, im Verborgenen der Liebhaber. Der Sechserfl\u00fcgel h\u00e4lt das System zusammen, solange die Angst vor Entdeckung die Kontrolle beh\u00e4lt. Wenn diese Kontrolle bricht, sprengt dieselbe Energie das gesamte System.</p>
        <p class="vb-intro"><strong>c) Die Leidenschaft der Sieben \u2013 Ma\u00dflosigkeit:</strong>
        Ma\u00dflosigkeit bedeutet bei der Sieben nicht nur \u00dcberkonsum von Freude oder Erlebnissen. Es ist das grundlegende Unverm\u00f6gen, in der Gegenwart zu bleiben, wenn diese Gegenwart beengt, schwer oder schmerzhaft ist. Watts' Gegenwart war: finanzielle Schulden, ein Haus unter Zwangsvollstreckungsdruck, zwei Kleinkinder \u2013 und eine f\u00fcnfzehnte Schwangerschaftswoche. Die Sieben flieht in die Zukunft. In seinem Fall war diese Zukunft eine Kollegin, eine neue Stadt, ein neues Ich ohne Hypothek und Windeln.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Die Aff\u00e4re und das Doppelleben</h3>
        <p class="vb-intro">Seit Ende Juni 2018 hatte Chris Watts eine Aff\u00e4re mit Nichol Kessinger, einer Kollegin bei Anadarko Petroleum. Er hatte ihr erz\u00e4hlt, er sei bereits getrennt und das Haus stehe zum Verkauf. Die L\u00fcge war nicht taktisch kalkuliert \u2013 sie war die Sieben pur: Im Kopf war das neue Leben bereits Wirklichkeit. In Watts' innerer Welt hatte die alte Realit\u00e4t bereits aufgeh\u00f6rt zu existieren. Nichol Kessinger ahnte nichts von einer lebendigen Familie.</p>
        <p class="vb-intro">Shanann war Ende Juli und Anfang August 2018 auf Gesch\u00e4ftsreisen. Watts nutzte diese Zeit intensiv f\u00fcr die Aff\u00e4re. Als Shanann am fr\u00fchen Morgen des 13. August gegen 1:48 Uhr von einer weiteren Reise zur\u00fcckkehrte, traf sie auf einen Mann, der innerlich bereits in eine andere Welt gezogen war. Was in den folgenden Stunden gesprochen wurde, ist nicht vollst\u00e4ndig \u00fcberliefert. Das Ergebnis war die Entscheidung, die die gesamte Psychodynamik offenlegt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Tatgeschehen</h3>
        <p class="vb-intro"><strong>a) Die Nacht des 13. August 2018:</strong>
        Zwischen 4 und 5 Uhr morgens erw\u00fcrgte Chris Watts seine Ehefrau Shanann im gemeinsamen Schlafzimmer. Shanann war im f\u00fcnften Monat schwanger mit ihrem gemeinsamen Sohn, den sie Nico Lee nennen wollten. Die T\u00f6chter schliefen nebenan im Kinderzimmer.</p>
        <p class="vb-intro"><strong>b) Die Fahrt zur \u00d6lfeld-Anlage:</strong>
        Watts lud Shananns Leiche in seinen Dienstwagen und fuhr mit seinen beiden T\u00f6chtern zur Bohrstelle Cervi 319, einer abgelegenen Anadarko-Petroleum-Anlage rund 45 Minuten von Frederick entfernt, auf der er arbeitete. Nach seinem sp\u00e4teren Gest\u00e4ndnis t\u00f6tete er Bella und Celeste erst dort. Bella (4) hatte sich gegen den Tod gewehrt \u2013 forensische Spuren zeigten, dass sie noch lebte, als er sie durch den engen Einstiegsschacht eines Roh\u00f6ltanks schob. Celeste (3) starb auf dieselbe Weise. Shanann begrub er in einem flachen Grab nahe der Tanks. Die Leichen der M\u00e4dchen wurden erst Tage sp\u00e4ter aus dem Roh\u00f6l geborgen.</p>
        <p class="vb-intro"><strong>c) Der \u201eSermon on the Porch":</strong>
        Am Morgen des 13. August erschien Shananns Freundin Nickole Atkins an der Haust\u00fcr, als Shanann auf keine Nachrichten reagierte. Die Polizei wurde gerufen. Chris Watts trat auf die Veranda \u2013 und gab dem Kamerateam eines lokalen Nachrichtensenders ein Interview, in dem er erkl\u00e4rte, er wisse nicht, wo seine Familie sei. Sein Auftreten war flach, kontrolliert, ohne erkennbare Verzweiflung. Die K\u00f6rpersprache eines Mannes, der bereits weggezogen war. Dieses Interview ging als \u201eSermon on the Porch" in die Kriminalgeschichte ein und wurde weltweit auf psychologische Anzeichen analysiert.</p>
        <p class="vb-intro"><strong>d) Verhaftung und Verurteilung:</strong>
        Das FBI sicherte Beweise der Aff\u00e4re auf seinem Telefon. \u00dcberwachungskameras der Bohrstelle zeigten ihn am Tatmorgen mit verd\u00e4chtigen Gegenst\u00e4nden. Am 15. August 2018 wurde Chris Watts verhaftet. In einem ersten Verh\u00f6r behauptete er, Shanann habe die Kinder get\u00f6tet; er habe sie daraufhin in einem Anfall von Wut erw\u00fcrgt. L\u00fcgendetektortests wiesen massive Auff\u00e4lligkeiten nach. Am 6. November 2018 bekannte er sich in neun Anklagepunkten schuldig \u2013 darunter drei Morde ersten Grades und die rechtswidrige T\u00f6tung seines ungeborenen Kindes. Am 19. November 2018 wurde er zu f\u00fcnf aufeinanderfolgenden lebenslangen Haftstrafen ohne Bew\u00e4hrungsm\u00f6glichkeit verurteilt. In Gespr\u00e4chen mit Ermittlern 2019 schilderte er die Vorg\u00e4nge an der Anlage detailliert und ohne erkennbare Ersch\u00fctterung \u2013 die Sieben, die bereits im n\u00e4chsten Kapitel lebt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro">Chris Watts ist das extremste Fallbeispiel f\u00fcr die Schattenseite des sozialen Subtyps der Sieben. Der SO7er erschafft seine Identit\u00e4t durch die Zugeh\u00f6rigkeit zur Gruppe \u2013 durch Familie, Gemeinschaft, soziale Verantwortung. Er definiert sich als verl\u00e4sslicher Teil dieses Systems. Doch wenn das System zur Enge wird, wenn die soziale Zugeh\u00f6rigkeit als K\u00e4fig erlebt wird, kann das Unbewusste der Sieben in einer Weise durchbrechen, die das genaue Gegenteil vollzieht: Die soziale Gruppe, die die Identit\u00e4t getragen hat, wird ausgel\u00f6scht. Nicht aus Hass, nicht aus Sadismus \u2013 sondern aus der magischen Denkweise der Sieben, dass das, was beengt, einfach aufh\u00f6ren kann zu existieren.</p>
        <p class="vb-intro">Der Stresspunkt der Sieben ist der Typ Eins. In extremem Stress \u2013 wenn die Sieben nicht mehr fliehen kann, wenn die Zukunft blockiert scheint \u2013 greift sie auf Eins-Energie zur\u00fcck: kalt, systematisch, rigide \u201ekorrekt". Die Tat tr\u00e4gt diesen Stempel. Es gibt keine Explosion, keine erkennbare Eskalation \u00fcber Wochen. Es gibt einen Plan, eine Ausf\u00fchrung, einen Morgen danach mit einem Fernsehinterview auf der Veranda. Die Eins-Energie im Schatten der Sieben bringt eine erschreckende Pr\u00e4zision. Was fertig ist, ist fertig. Was neu ist, beginnt jetzt.</p>
        <p class="vb-intro">Das Tier des sozialen Typs 7 ist der <strong>Biber</strong>: Er baut seine Umwelt nach Plan, mit beeindruckender Energie und Ausdauer. Er staut Wasser, ver\u00e4ndert Landschaften, konstruiert sein ideales Habitat. Wenn etwas seinen Bau bedroht, beseitigt er das Hindernis methodisch. Im Schatten liegt das Zerst\u00f6rerische dieser Energie: Der Biber macht keine halben Sachen. Er rei\u00dft ab und baut neu. Was vorher war, z\u00e4hlt nicht \u2013 es z\u00e4hlt nur das, was werden soll.</p>
      </div>

      <div class="vb-section" style="background:rgba(40,40,80,0.05);border-radius:8px;padding:1rem 1.2rem;margin-bottom:2rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:var(--ink);">6. Einordnung</h3>
        <div style="font-size:0.88rem;line-height:1.8;">
          <p style="margin:0 0 0.3rem;"><strong>Name:</strong> Chris Lee Watts</p>
          <p style="margin:0 0 0.3rem;"><strong>Geboren:</strong> 16. Mai 1985, Spring Lake, North Carolina</p>
          <p style="margin:0 0 0.3rem;"><strong>Status:</strong> Verb\u00fc\u00dft f\u00fcnf lebenslange Haftstrafen ohne Bew\u00e4hrungsm\u00f6glichkeit</p>
          <p style="margin:0 0 0.3rem;"><strong>Enneagrammtyp:</strong> SO7w6 \u2013 Sozialer Typ 7 mit Sechserfl\u00fcgel</p>
          <p style="margin:0 0 0.3rem;"><strong>Tierentsprechung:</strong> Biber</p>
          <p style="margin:0 0 0.3rem;"><strong>Opfer:</strong> Shanann Watts (34, schwanger), Bella Watts (4), Celeste Watts (3) \u2013 get\u00f6tet am 13. August 2018</p>
          <p style="margin:0 0 0.3rem;"><strong>Leidenschaft:</strong> Ma\u00dflosigkeit</p>
          <p style="margin:0;"><strong>Stresspunkt:</strong> Typ 1</p>
        </div>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Der soziale Typ 7 als Kontratyp \u2013 wie die Sieben hinter Pflicht und Aufopferung ihre eigene Ma\u00dflosigkeit verbirgt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE7, SO7, SX7 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 7 ausf\xfchrlich portr\xe4tiert \u2013 Ma\xdflosigkeit, Zukunftsflucht und der Heilungsweg \xfcber N\xfcchternheit.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Chris Watts bekannte sich 2018 in f\u00fcnf Anklagepunkten schuldig \u2013 darunter drei erstgradige Morde \u2013 und verb\u00fc\u00dft f\u00fcnf aufeinanderfolgende lebenslange Haftstrafen. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-aileen-wuornos", label:"Kriminalpsychologie: Aileen Wuornos (SX7w8)"},
        {route:"kriminalpsychologie-p-diddy", label:"Kriminalpsychologie: P. Diddy \u2013 Sean Combs (SX7w8)"},
        {route:"kriminalpsychologie-niels-hoegel", label:"Kriminalpsychologie: Niels H\xf6gel (SE7w8)"},
        {route:"kriminalpsychologie-alex-murdaugh", label:"Kriminalpsychologie: Alex Murdaugh (SX1w2)"},
      ])}
    </div>
  `);
}

function aileenWuornosPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Aileen Wuornos \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/aileen-wuornos-portrait.jpg" alt="Aileen Wuornos \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Aileen Wuornos</p>
        <p class="krim-portrait-typ">SX7w8 \u00b7 Sexueller Typ 7 mit Achterfl\u00fcgel</p>
        <p style="font-size:0.85rem;color:var(--muted);margin:0.2rem 0 0;">Florida 1989\u20131990 \u00b7 7 Morde</p>
      </div>
      <p class="psycho-intro">
        <strong>Aileen Carol Wuornos</strong>, als Aileen Carol Pittman am 29. Februar 1956
        in Rochester, Michigan geboren, war eine US-amerikanische Serienm\u00f6rderin,
        die zwischen November 1989 und November 1990
        mindestens <strong>sieben M\u00e4nner</strong> in Florida erschoss.
        Alle Opfer waren Autofahrer, die sie als Anhalterin mitnahmen.
        Sie war zum Zeitpunkt der Taten obdachlos, arbeitete als Prostituierte
        und lebte in einer intensiven Beziehung mit Tyria Moore,
        die f\u00fcr sie das einzige Fundament ihres Lebens darstellte.
        Sie wurde 1992 in sechs F\u00e4llen zum Tode verurteilt und am 9. Oktober 2002
        in Florida durch Giftinjektion hingerichtet.
        Nach ihrer Verurteilung wurde sie von der evangelikalen Christin Arlene Pralle adoptiert
        und trug seitdem rechtlich den Namen Aileen Wuornos Pralle \u2013
        in der Kriminologie ist sie jedoch ausschlie\u00dflich als Aileen Wuornos bekannt.
        Das Enneagramm macht sichtbar, wie eine Frau, die die Intensit\u00e4t
        einer einzigen Liebe h\u00f6her stellte als ihr eigenes Leben, zu dem wurde, was sie wurde.
      </p>

      <div class="vb-section" style="background:rgba(0,80,60,0.06);border-left:3px solid #00503c;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Aileen Wuornos</strong> wird dem <strong>Sexuellen Typ 7 mit Achterfl\u00fcgel</strong> zugeordnet.
        Die sexuelle Sieben idealisiert die eine, vollkommene Beziehung \u2013
        sie sucht einen einzigen Menschen, der alles sein soll: Heimat, Schutz, Anerkennung, Liebe.
        Diese Intensit\u00e4t auf eine einzige Person zu richten ist ihr Grundmuster und ihr Verh\u00e4ngnis.
        Der Achterfl\u00fcgel verleiht ihr Direktheit, Kampfbereitschaft und explosive Energie.
        Der Stresspunkt liegt bei der <strong>Eins</strong>:
        rigides Denken, innerer Richter, moralische Verh\u00e4rtung \u2013
        wenn die Sieben unter Dauerdruck ger\u00e4t, verliert sie die Leichtigkeit
        und h\u00e4lt nur noch an Urteilen fest.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Tierentsprechung: Der Schimpanse</h3>
        <p class="vb-intro">
        Der <strong>Schimpanse</strong> ist die Tierentsprechung der sexuellen Sieben.
        Er ist hochintelligent, lebhaft, leidenschaftlich auf Beziehung ausgerichtet \u2013
        er lebt in kleinen, intensiven Bindungsgruppen und k\u00e4mpft erbittert
        f\u00fcr seine engsten Gef\u00e4hrten.
        Der Schimpanse kann spielerisch und liebevoll sein \u2013
        und in Sekundenbruchteilen zur zerst\u00f6rerischen Kraft werden,
        wenn er seine Bindung bedroht sieht.
        Diese Polarit\u00e4t war Wuornos' ganzes Leben:
        die sehns\u00fcchtige, liebevolle Frau, die alles f\u00fcr Tyria Moore gab \u2013
        und die erschossene sieben M\u00e4nner auf sich, um ihr \u00dcberleben zu sichern.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die sexuelle Sieben: Alles f\u00fcr die eine Liebe</h3>
        <p class="vb-intro"><strong>a) Das Grundmuster der sexuellen Sieben:</strong>
        Die sexuelle Sieben ist die Sieben, die sich vollst\u00e4ndig in eine einzige Person
        oder Beziehung investiert. Sie idealisiert: dieser Mensch, diese Liebe,
        diese Verbindung soll alles sein, was ihr Leben tr\u00e4gt.
        Diese Intensit\u00e4t ist das Gegenteil des Klischee-Siebers,
        der von Erlebnis zu Erlebnis springt \u2013
        die sexuelle Sieben springt nicht. Sie bindet sich.
        Und wenn die Bindung gef\u00e4hrdet ist, k\u00e4mpft sie mit allem, was sie hat.
        Wuornos' gesamtes kriminelles Handeln ist durch diese Linse zu verstehen:
        Sie t\u00f6tete, um Geld zu beschaffen. Das Geld war f\u00fcr Tyria.
        Sie gestand, um Tyria zu sch\u00fctzen.
        Sie zog alle Berufungen zur\u00fcck, weil Tyria l\u00e4ngst weg war.</p>
        <p class="vb-intro"><strong>b) Der Achterfl\u00fcgel: Wut als letzte Grenze:</strong>
        Der Achterfl\u00fcgel der sexuellen Sieben verleiht ihr Energie und Direktheit \u2013
        aber auch eine explosive Kapazit\u00e4t f\u00fcr Konfrontation.
        Die Acht setzt Grenzen durch Kraft. Wuornos setzte Grenzen durch Gewalt.
        Sie beschrieb in Verh\u00f6ren eine tiefe innere \u00dcberzeugung,
        dass M\u00e4nner ihr gegen\u00fcber immer wieder Grenzen \u00fcberschreiten wollten.
        Ob das in allen F\u00e4llen zutraf, ist rechtlich ungekl\u00e4rt.
        Was klar ist: Der Achterfl\u00fcgel der sexuellen Sieben macht
        das Fass schnell zum \u00dcberlaufen \u2013 wenn die einzig wichtige Beziehung
        oder das Gef\u00fchl eigener W\u00fcrde bedroht ist.</p>
        <p class="vb-intro"><strong>c) Die Leidenschaft: Ma\u00dflosigkeit in der Liebe:</strong>
        Die Leidenschaft der Sieben ist die <strong>Ma\u00dflosigkeit</strong> (V\u00f6llerei) \u2013
        das unstillbare Verlangen, das keine nat\u00fcrliche S\u00e4ttigungsgrenze kennt.
        Bei der sexuellen Sieben richtet sich diese Ma\u00dflosigkeit typischerweise auf Erlebnisse und Abenteuer \u2013
        in ihrer extremen Auspr\u00e4gung jedoch kann sie sich ganz auf die vollkommene Zweierbindung richten
        und alles andere verdr\u00e4ngen.
        Wuornos' Ma\u00dflosigkeit richtete sich vollst\u00e4ndig auf Tyria Moore. Alles andere war Mittel zum Zweck.
        Diese Ma\u00dflosigkeit machte sie blind f\u00fcr das, was die Beziehung tats\u00e4chlich war \u2013
        und empf\u00e4nglich f\u00fcr Tyrias Kooperation mit der Polizei,
        die sie nicht kommen sah.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Das Tatgeschehen: Sieben M\u00e4nner in zw\u00f6lf Monaten</h3>
        <p class="vb-intro"><strong>a) Kindheit ohne Fundament:</strong>
        Wuornos wurde 1956 in Michigan geboren. Ihre Mutter verlie\u00df die Familie,
        als Aileen vier Jahre alt war. Sie wuchs bei den Gro\u00dfeltern auf,
        die sie misshandelten. Sie wurde als Jugendliche vergewaltigt und wurde schwanger,
        das Kind wurde zur Adoption freigegeben.
        Mit 15 Jahren wurde sie von zu Hause geworfen.
        Sie lebte von da an auf der Stra\u00dfe, finanzierte ihren Lebensunterhalt
        durch Prostitution \u2013 ein Leben ohne Schutz, ohne Netz, ohne Boden.
        Die sexuelle Sieben ohne eine einzige sichere Bindung
        ist ein Mensch auf der permanenten Suche nach dem, was sie nie bekam.
        1986 schien dieses Ufer gefunden: In einer Bar in Daytona Beach lernte Wuornos
        <strong>Tyria Moore</strong> kennen, ein Zimmerm\u00e4dchen aus Pennsylvania.
        Moore zog bei ihr ein; Wuornos finanzierte den gemeinsamen Lebensunterhalt
        vollst\u00e4ndig durch Prostitution. Es war die erste dauerhafte Bindung ihres Lebens.
        Moore war f\u00fcr Wuornos Zuhause, Schutz und Grund weiterzumachen \u2013 alles in einer Person.</p>
        <p class="vb-intro"><strong>b) Die Opfer \u2013 sieben M\u00e4nner, eine Methode:</strong>
        Alle sieben Opfer waren M\u00e4nner, die Wuornos als Anhalterin mitnahmen.
        Sie erschoss sie aus kurzer Distanz, meist mit einer .22-Pistole.
        Die Taten geschahen stets in oder an Fahrzeugen auf Landstra\u00dfen in Florida.
        <strong>Richard Mallory</strong> (51), verurteilt wegen Vergewaltigung \u2013 30. November 1989.
        <strong>David Spears</strong> (43), Bauarbeiter \u2013 19. Mai 1990.
        <strong>Charles Carskaddon</strong> (40), Gelegenheitsarbeiter \u2013 31. Mai 1990.
        <strong>Peter Siems</strong> (65), Missionar \u2013 Juni 1990 (Leiche nie gefunden).
        <strong>Troy Burress</strong> (50), Lkw-Fahrer \u2013 30. Juli 1990.
        <strong>Dick Humphreys</strong> (56), ehemaliger Polizist \u2013 11. September 1990.
        <strong>Walter Gino Antonio</strong> (62), Lkw-Fahrer \u2013 19. November 1990.
        Wuornos behauptete in allen F\u00e4llen Notwehr \u2013 die M\u00e4nner h\u00e4tten sie
        vergewaltigt oder versucht, sie zu t\u00f6ten. Das Gericht folgte dieser Darstellung
        nur im Fall Mallory. In den \u00fcbrigen sechs F\u00e4llen wurde sie wegen Mordes ersten Grades verurteilt.</p>
        <p class="vb-intro"><strong>c) Die Verhaftung (Januar 1991):</strong>
        Die Ermittler fanden das Auto von Peter Siems \u2013 von Wuornos und Tyria Moore
        nach einem Unfall zur\u00fcckgelassen, mit Fingerabdr\u00fccken beider.
        Anhand eines Phantombildes wurden die beiden identifiziert.
        Die Polizei kontaktierte Tyria Moore \u2013 und bat sie, Wuornos am Telefon
        zu gest\u00e4ndigen Aussagen zu bewegen.
        Moore stimmte zu. In mehreren abgeh\u00f6rten Telefonaten sprach Wuornos offen,
        um Tyria zu sch\u00fctzen. Sie gestand am 16. Januar 1991.
        Sie sagte sp\u00e4ter: \u201eIch habe gestanden, damit Tyria frei bleibt."
        Die sexuelle Sieben opferte sich f\u00fcr die einzige Bindung, die ihr etwas bedeutete \u2013
        und die Person dieser Bindung hatte sie bereits verraten.</p>
        <p class="vb-intro"><strong>d) Prozess und Hinrichtung:</strong>
        Wuornos wurde 1992 in sechs F\u00e4llen zum Tode verurteilt.
        Im Jahr 2001 zog sie alle Berufungen zur\u00fcck und bat aktiv um die Vollstreckung.
        Am 9. Oktober 2002 wurde sie in der Florida State Prison durch Giftinjektion hingerichtet.
        Ihre letzten Worte: \u201eYes, I would just like to say I'm sailing with the rock
        and I'll be back like Independence Day, with Jesus June 6th.
        Like the movie, big mothership and all, I'll be back."
        Sie war 45 Jahre alt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro">
        Aileen Wuornos ist kein Fall von Kontrollwillen oder K\u00e4lte.
        Sie ist ein Fall von totaler Fehlausrichtung der Liebe.
        Die sexuelle Sieben lebt f\u00fcr die eine vollkommene Verbindung.
        Wuornos richtete diese Intensit\u00e4t auf eine Frau,
        die nicht die Kapazit\u00e4t hatte, das zu sein, was Wuornos brauchte.
        Der Schimpanse, der alles f\u00fcr seine Bindungspartner tut,
        der k\u00e4mpft und t\u00f6tet und schlie\u00dflich sein Leben gibt \u2013
        nicht weil er b\u00f6se ist, sondern weil die Bindung f\u00fcr ihn alles ist \u2013
        das ist das ersch\u00fctternde Bild dieser Frau.
        Was Wuornos von fast allen anderen T\u00e4tern in dieser Sammlung unterscheidet:
        Sie wollte kein B\u00f6ses sein. Sie wollte geliebt werden.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Einordnung</h3>
        <p class="vb-intro">
        <strong>Subtyp:</strong> SX7w8 \u2013 Sexuelle Sieben mit Achterfl\u00fcgel.<br>
        <strong>Leidenschaft:</strong> Ma\u00dflosigkeit (V\u00f6llerei) \u2013 das unstillbare Verlangen nach vollkommener Zweierbindung, nicht nach Erlebnissen.<br>
        <strong>Stresspunkt:</strong> Eins \u2013 rigides Denken, innerer Richter, moralische Verh\u00e4rtung.<br>
        <strong>Tierentsprechung:</strong> Schimpanse \u2013 intensiv gebunden, leidenschaftlich, zur Gewalt f\u00e4hig wenn die Bindung bedroht ist.<br>
        <strong>Opfer:</strong> Sieben M\u00e4nner in Florida (November 1989 \u2013 November 1990), alle erschossen.<br>
        <strong>Hingerichtet:</strong> 9. Oktober 2002, Florida State Prison, Giftinjektion.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die sexuelle Sieben im Vergleich: Wie sich Gier bei SE7, SO7 und SX7 unterschiedlich ausdr\u00fcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "Wie sich der sexuelle Typ 7 von selbsterhaltender und sozialer Sieben unterscheidet \u2013 27 Profile.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 7 ausf\u00fchrlich portr\u00e4tiert \u2013 Gier, Angst vor dem Schmerz und der Heilungsweg \u00fcber echte Tiefe.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Aileen Wuornos wurde in sechs F\u00e4llen des erstgradigen Mordes zum Tode verurteilt und 2002 hingerichtet. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-niels-hoegel", label:"Kriminalpsychologie: Niels H\u00f6gel (SE7w8)"},
        {route:"kriminalpsychologie-diane-downs", label:"Kriminalpsychologie: Diane Downs (SX3w4) \u2013 Mutter als T\u00e4terin"},
        {route:"kriminalpsychologie-karla-homolka", label:"Kriminalpsychologie: Karla Homolka (SE3w4) \u2013 Frau als T\u00e4terin"},
      ])}
    </div>
  `);
}


function pDiddyPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Sean \u2019P. Diddy\u2018 Combs \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/p-diddy-portrait.jpg" alt="Sean P. Diddy Combs \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sean \u201eP. Diddy\u201c Combs</p>
        <p class="krim-portrait-typ">SX7w8 \u00b7 Sexueller Typ 7 mit Achterfl\u00fcgel</p>
        <p style="font-size:0.85rem;color:var(--muted);margin:0.2rem 0 0;">New York 1990\u20132024 \u00b7 Verurteilt 2025</p>
      </div>
      <p class="psycho-intro">
        <strong>Sean John Combs</strong>, bekannt als <em>Puff Daddy</em>, <em>P. Diddy</em> und sp\u00e4ter nur noch <em>Diddy</em>,
        wurde am 4. November 1969 in Harlem, New York, geboren.
        Er wuchs in bescheidenen Verh\u00e4ltnissen auf \u2013 sein Vater, ein kleinkrimineller Drogenkurier,
        wurde erschossen, als Sean drei Jahre alt war.
        Aus diesem Fundament der Abwesenheit und des Verlustes
        entwickelte er eine unstillbare Energie nach oben.
        Er studierte an der Howard University in Washington, D.C.,
        brach jedoch ab, um bei Uptown Records zu arbeiten.
        1993 gr\u00fcndete er sein eigenes Label: <strong>Bad Boy Records</strong>.
        Mit K\u00fcnstlern wie The Notorious B.I.G., Mary J. Blige und Faith Evans
        pr\u00e4gte er eine \u00c4ra des Hip-Hop und R&B.
        Forbes sch\u00e4tzte sein Verm\u00f6gen zeitweise auf \u00fcber eine Milliarde Dollar.
        Im September 2024 wurde er verhaftet. Im Oktober 2025 verurteilte ihn
        ein Bundesgericht in New York wegen Sex-Trafficking \u2013 Menschenhandel zum Zweck der sexuellen Ausbeutung, eine schwere Menschenrechtsverletzung und Form moderner Sklaverei \u2013, N\u00f6tigung und K\u00f6rperverletzung
        zu vier Jahren und zwei Monaten Haft.
        Das Enneagramm macht sichtbar, wie ein Mensch, der alles haben wollte \u2013
        Ruhm, Geld, Kontrolle, Liebe \u2013 ein System der Unterwerfung erschuf,
        das Jahrzehnte im Verborgenen blieb.
      </p>

      <div class="vb-section" style="background:rgba(0,80,60,0.06);border-left:3px solid #00503c;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Sean Combs</strong> wird dem <strong>Sexuellen Typ 7 mit Achterfl\u00fcgel</strong> zugeordnet.
        Die sexuelle Sieben ist nicht nur die Sieben, die von Party zu Party springt \u2013
        sie sucht die absolute Intensit\u00e4t: im Erleben, in der Kontrolle, in der Verbindung.
        Sie will alles, und sie will es vollst\u00e4ndig.
        Der Achterfl\u00fcgel verleiht ihr Durchsetzungskraft, Einsch\u00fcchterungsbereitschaft
        und die \u00dcberzeugung, dass Regeln f\u00fcr andere gelten.
        Die Sieben fl\u00fcchtet vor Schmerz \u2013 der Achterfl\u00fcgel gibt ihr die Mittel,
        diesen Schmerz auf andere zu \u00fcbertragen.
        Das Ergebnis ist ein Mensch, der Freude und Genuss als absolutes Recht empfindet \u2013
        und jeden, der sich dem entgegenstellt, als Bedrohung behandelt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Tierentsprechung: Der Schimpanse</h3>
        <p class="vb-intro">
        Der <strong>Schimpanse</strong> ist die Tierentsprechung der sexuellen Sieben.
        Er ist hochintelligent, sozial gewandt, auf Bindung und Statuserwerb ausgerichtet \u2013
        und er kann in Sekundenbruchteilen zur brutalen Durchsetzungskraft werden,
        wenn sein Rang oder sein Territorium bedroht ist.
        Schimpansen leben in komplexen Hierarchien: Sie pflegen Allianzen,
        nutzen Koalitionen und schalten Rivalen aus \u2013 mit kalkulierter Gewalt.
        Combs baute \u00e4hnliche Strukturen: ein Netz aus Loyalit\u00e4t, Abh\u00e4ngigkeit und Einsch\u00fcchterung,
        in dem er der unbestrittene Alfa war.
        Schimpansen sind zudem dokumentiert daf\u00fcr bekannt, Artgenossen, die aus der Gruppe fallen oder als Rivalen gelten, gemeinschaftlich zu verfolgen und zu t\u00f6ten \u2013 ein Verhalten, das Primatologen wie Jane Goodall erstmals in Tansania beschrieben. Diese F\u00e4higkeit zur kalkulierten, kollektiven Gewalt ist keine Ausnahme, sondern Teil des Schimpansen-Wesens.
        Die Liebensw\u00fcrdigkeit des Schimpansen und seine Aggressivit\u00e4t
        sind keine Gegens\u00e4tze \u2013 sie sind zwei Seiten derselben Kontrollstrategie.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die sexuelle Sieben: Genuss als absolutes Recht</h3>
        <p class="vb-intro"><strong>a) Das Grundmuster der sexuellen Sieben:</strong>
        Die sexuelle Sieben ist die intensivste aller Siebenauspr\u00e4gungen.
        Sie sucht nicht nur das n\u00e4chste Vergn\u00fcgen \u2013 sie sucht das <em>ultimative</em> Vergn\u00fcgen,
        die vollst\u00e4ndige Erf\u00fcllung, den Zustand, in dem nichts fehlt.
        Diese Energie brachte Combs an die Spitze der Musikbranche \u2013
        sie machte ihn zum unerm\u00fcdlichen Gestalter, Produzenten, Markenarchitekten.
        Doch dieselbe Energie, die Gr\u00f6\u00dfe schafft,
        kennt keine innere Begrenzung.
        Was Combs wollte, sollte er bekommen \u2013 sei es kommerzieller Erfolg,
        soziale Dominanz oder die k\u00f6rperliche Unterwerfung anderer Menschen.</p>

        <p class="vb-intro"><strong>b) Der Achterfl\u00fcgel: Kontrolle durch Einsch\u00fcchterung:</strong>
        Der Achterfl\u00fcgel der sexuellen Sieben ist kein gelegentliches Aufflackern von Direktheit \u2013
        er ist eine perm\u00e4nente Haltung: Ich bestimme, was hier passiert.
        Zeugenaussagen im Prozess beschrieben ein System physischer Einsch\u00fcchterung,
        systematischer Drohungen und psychologischer Kontrolle gegen\u00fcber Frauen in seinem Umfeld.
        Mitarbeiter, Partner und K\u00fcnstler berichteten von einem Klima der Angst,
        in dem Widerspruch gef\u00e4hrlich war.
        Der Achterfl\u00fcgel macht es m\u00f6glich, Gew\u00e4lt nicht als Kontrollverlust zu erleben,
        sondern als legitimes Mittel der Durchsetzung \u2013
        ein Denken, das Combs offenbar \u00fcber Jahrzehnte trug.</p>

        <p class="vb-intro"><strong>c) Die Leidenschaft: Ma\u00dflosigkeit:</strong>
        Die Leidenschaft der Sieben ist die <strong>Ma\u00dflosigkeit</strong> \u2013
        das Verlangen, das sich nicht satt essen kann.
        Bei Combs zeigte sie sich auf mehreren Ebenen:
        im Aufbau eines Imperiums, das nie gro\u00df genug war,
        in Feiern, die Legenden wurden (\u201eWhite Parties\u201c in den Hamptons, Partys auf Yachten),
        und \u2013 nach Aussage zahlreicher Kl\u00e4ger \u2013 in organisierten \u201eFreak-offs\u201c:
        stundenlangen, unter Narkose erzwungenen sexuellen Ereignissen,
        die er nach Zeugenaussagen selbst inszenierte und filmte.
        Die Ma\u00dflosigkeit der Sieben in sehr unbewussten, pathologischen Bereichen \u2013 also wenn ein Mensch auf niedrigen Bewusstseinsstufen agiert \u2013 kennt keine nat\u00fcrliche Grenze \u2013
        und wenn der Achterfl\u00fcgel hinzukommt, auch keine ethische.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Das Tatgeschehen: Ein System hinter der Fassade</h3>
        <p class="vb-intro"><strong>a) Der Aufstieg:</strong>
        Combs gr\u00fcndete 1993 Bad Boy Records und produzierte einige der meistverkauften Alben der 1990er Jahre.
        Sein Ruf als knallharter, aber brillanter Produzent wuchs mit jedem Erfolg.
        Er gr\u00fcndete eine Modemarke (Sean John), ein Spirituosenimperium (Cir\u00f3c Vodka)
        und galt als Vorbild f\u00fcr unternehmerischen Erfolg aus dem afroamerikanischen Milieu.
        Dieser Glanz war keine Fügung \u2013 er war Teil einer sorgf\u00e4ltig kontrollierten \u00f6ffentlichen Identit\u00e4t,
        hinter der sich ein anderes System verbarg.</p>

        <p class="vb-intro"><strong>b) Die Klagen und Ermittlungen:</strong>
        Ab 2023 h\u00e4uften sich Zivilklagen gegen Combs.
        Die erste \u00f6ffentlich bekannte Klage stammt von seiner fr\u00fcheren Partnerin
        <strong>Cassie Ventura</strong>, die ihm Vergewaltigung und jahrelangen Missbrauch vorwarf.
        Combs einigte sich innerhalb eines Tages auf einen au\u00dfergerichtlichen Vergleich \u2013
        doch das Video, das kurz darauf \u00f6ffentlich wurde, \u00e4nderte alles:
        Sicherheitskameras eines Hotels zeigten ihn dabei, wie er Cassie im Flur schlug,
        w\u00e4hrend sie versuchte zu fliehen.
        Das FBI durchsuchte im M\u00e4rz 2024 seine Anwesen in Miami und Los Angeles
        und beschlagnahmte u.a. gro\u00dfe Mengen Baby\u00f6l und Gleitmittel \u2013
        Materialien, die sp\u00e4ter im Zusammenhang mit den beschriebenen \u201eFreak-offs\u201c erw\u00e4hnt wurden.
        Im September 2024 wurde Combs in New York verhaftet.</p>

        <p class="vb-intro"><strong>c) Der Prozess und das Urteil:</strong>
        Im Oktober 2025 wurde Sean Combs vom Bundesgericht des Southern District of New York
        wegen Sex-Trafficking, N\u00f6tigung und k\u00f6rperlicher Misshandlung schuldig gesprochen.
        Richter Arun Subramanian verurteilte ihn zu <strong>vier Jahren und zwei Monaten Haft</strong>
        sowie einer Geldstrafe von 500.000 Dollar und f\u00fcnf Jahren Bew\u00e4hrung nach der Haftentlassung.
        Die Verteidigung legte Berufung ein.
        Durch ein Drogenrehabilitationsprogramm w\u00e4hrend der Untersuchungshaft
        wurde die Haftzeit verk\u00fcrzt; eine fr\u00fchzeitige Entlassung wurde f\u00fcr April 2026 erm\u00f6glicht.
        Ob er tats\u00e4chlich entlassen wurde, h\u00e4ngt vom Ausgang der Berufungsverfahren ab.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Die Kindheit: Wurzel des Typmusters</h3>
        <p class="vb-intro"><strong>a) Der fr\u00fche Verlust:</strong>
        Sean Combs wuchs ohne Vater auf. Melvin Earl Combs, ein Mitl\u00e4ufer im Umfeld des Harlem-Drogenmilieus,
        wurde 1972 erschossen \u2013 Sean war drei Jahre alt.
        Seine Mutter Janice zog ihn allein auf, arbeitete als Lehrerin und Modell
        und schirmte ihn nach Kr\u00e4ften ab.
        Der fr\u00fche Verlust des Vaters durch Gewalt ist bei der sexuellen Sieben typologisch bedeutsam:
        Er legt den Grundstein f\u00fcr ein Muster, das Schmerz nicht verarbeitet, sondern \u00fcberw\u00e4ltigt \u2013
        durch Leistung, durch Charme, durch \u00dcberfluss, durch Kontrolle.
        Was fehlt, soll durch F\u00fclle ersetzt werden. Was schmerzt, soll durch Erfolg zum Schweigen gebracht werden.</p>

        <p class="vb-intro"><strong>b) Der fr\u00fche Aufstieg als Kompensation:</strong>
        Bereits an der Howard University fiel Combs durch Organisationstalent und Durchsetzungswillen auf.
        Er veranstaltete Partys, baute Netzwerke, brachte sich bei Andr\u00e9 Harrell von Uptown Records ins Gespr\u00e4ch.
        Die sexuelle Sieben kompensiert fr\u00fchen Mangel durch maximale Selbsterschaffung:
        Ich werde so gro\u00df, so sichtbar, so unentbehrlich, dass Verlust mich nie wieder treffen kann.
        Combs wurde zu einem der m\u00e4chtigsten M\u00e4nner der Musikbranche \u2013
        und das Muster, das ihn dahin gebracht hatte, blieb unver\u00e4ndert.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Die Fassade: \u00d6ffentlichkeit und verborgenes System</h3>
        <p class="vb-intro"><strong>a) Das \u00f6ffentliche Bild:</strong>
        Combs war ein Meister der Inszenierung. Seine \u201eWhite Parties" in den Hamptons
        galten als kulturelle Institutionen \u2013 G\u00e4stelisten lasen sich wie Who's Who der Unterhaltungswelt.
        Er trat als Philanthrop auf, unterst\u00fctzte Bildungsinitiativen, sprach \u00fcber seine Mutter
        und seine schwierige Kindheit. Das Bild: ein Selfmade-Mensch, der zur\u00fcckgibt.
        Die sexuelle Sieben mit Achterfl\u00fcgel versteht instinktiv,
        dass \u00f6ffentliche Strahlkraft Schutz ist. Wer so sichtbar beliebt ist,
        wirkt per Definition unverd\u00e4chtig.</p>

        <p class="vb-intro"><strong>b) Das verborgene System:</strong>
        Hinter dieser Fassade existierte nach Darstellung zahlreicher Kl\u00e4ger
        ein jahrzehntelanges System der Kontrolle:
        Mitarbeiter wurden eingesch\u00fcchtert, K\u00fcnstler unter Druck gesetzt,
        Frauen in Situationen man\u00f6vriert, aus denen sie keinen Ausweg sahen.
        Das Hotelflur-Video mit Cassie Ventura \u2013 das ohne sein Wissen existierte \u2013
        machte erstmals sichtbar, was hinter der glamour\u00f6sen Oberfl\u00e4che lag.
        Die Diskrepanz zwischen Fassade und Realit\u00e4t ist kein Widerspruch zum Typus \u2013
        sie ist sein Ausdruck: Die Sieben pr\u00e4sentiert Licht und verbirgt die Dunkelheit,
        weil sie selbst nicht hinschauen will.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Wegbegleiter im Enneagramm-Spiegel</h3>
        <p class="vb-intro"><strong>The Notorious B.I.G. (Christopher Wallace):</strong>
        Combs' engste Zusammenarbeit war mit Biggie Smalls \u2013 einem der gr\u00f6\u00dften Rapper aller Zeiten.
        Wallace starb 1997 durch einen Schuss aus einem fahrenden Auto, ungekl\u00e4rt bis auf den heutigen Tag.
        Im Enneagramm-Kontext ist die Beziehung aufschlussreich:
        Combs als SX7w8 suchte Intensit\u00e4t, Exklusivit\u00e4t, Bindung durch gemeinsame Gr\u00f6\u00dfe.
        Nach Biggies Tod zeigte Combs \u00f6ffentlich gro\u00dfen Schmerz \u2013
        und produzierte gleichzeitig \u201eI'll Be Missing You", das ihm kommerziell
        neue H\u00f6hen bescherte. Die sexuelle Sieben verwandelt Verlust in Projekt.</p>

        <p class="vb-intro"><strong>Cassie Ventura:</strong>
        Cassie war \u00fcber ein Jahrzehnt Combs' Partnerin \u2013 und nach Aussage der Klageschrift
        zugleich sein Hauptopfer. Sie beschrieb eine Beziehung, in der Zuneigung
        und Kontrolle untrennbar verflochten waren: Reisen, Luxus, \u00f6ffentliche Auftritte \u2013
        und hinter geschlossenen T\u00fcren physische Gewalt und psychologische Unterwerfung.
        Das Muster ist typisch f\u00fcr die SX7w8 in der Entgleisung:
        Die intensive Bindung, die die sexuelle Sieben sucht, kann zur Inbesitznahme des Gegen\u00fcbers werden \u2013
        die andere Person als Objekt totaler Kontrolle statt als freies Gegen\u00fcber.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">7. Enneagramm-Analyse: Die Dynamik der Entgleisung</h3>
        <p class="vb-intro"><strong>a) Der Stresspunkt \u2013 die Eins:</strong>
        Unter Dauerstress bewegt sich die Sieben in Richtung Eins:
        Rigides Denken, moralisierendes Urteilen, kompromisslose Kontrolle.
        Anstatt die eigene Angst zu f\u00fchlen, h\u00e4lt die gestresste Sieben
        an einer inneren \u00dcberzeugung fest: <em>Ich habe Recht. Meine Bed\u00fcrfnisse sind legitim. Andere haben zu funktionieren.</em>
        Dieser Mechanismus erkl\u00e4rt, warum Combs \u2013 trotz wachsender Klagen \u2013
        offenbar nicht aufh\u00f6rte, sondern das System weiter ausdehnte.
        Die Sieben im Stress sieht sich nicht als T\u00e4ter, sondern als jemanden,
        der nur bekommt, was ihm zusteht.</p>

        <p class="vb-intro"><strong>b) Die Flucht vor dem Schmerz:</strong>
        Das Kernthema der Sieben ist die <strong>Angst vor Schmerz und Einschr\u00e4nkung</strong>.
        Combs\u2019 fr\u00fche Biographie \u2013 Vater erschossen, Armut, Aufstieg durch Selbstdisziplin \u2013
        legte ein Fundament, das Verlust und Schmerz als etwas verstand,
        das durch Erfolg, Kontrolle und F\u00fclle \u00fcberwunden werden muss.
        Diese innere Logik wird zur Falle, wenn sie pathologisch wird:
        Dann ist jede Einschr\u00e4nkung ein Angriff, jedes Nein eine Bedrohung,
        jede Grenze eine Zumutung, die mit Mitteln der Macht beseitigt werden muss.</p>

        <p class="vb-intro"><strong>c) Der Lichtpunkt \u2013 Heilungsrichtung der Sieben:</strong>
        Die Heilungsrichtung der Sieben f\u00fchrt zur <strong>F\u00fcnf</strong>: zur Stille, zur Tiefe, zur Bereitschaft,
        im Augenblick zu bleiben, auch wenn er schmerzhaft ist.
        F\u00fcr eine Sieben bedeutet Heilung: die eigene Leere aushalten,
        ohne sie sofort f\u00fcllen zu m\u00fcssen.
        Ob Combs jemals diesen Weg gehen wird \u2013 oder ob das Berufungsverfahren
        ihn zun\u00e4chst in neue Verteidigungsreflexe dr\u00e4ngt \u2013 bleibt offen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Einordnung</h3>
        <p class="vb-intro">
        <strong>Name:</strong> Sean John Combs (K\u00fcnstlername: P. Diddy, Puff Daddy, Diddy)<br>
        <strong>Subtyp:</strong> SX7w8 \u2013 Sexuelle Sieben mit Achterfl\u00fcgel<br>
        <strong>Leidenschaft:</strong> Ma\u00dflosigkeit \u2013 das unstillbare Verlangen nach Genuss, Kontrolle und Intensit\u00e4t ohne nat\u00fcrliche Grenze<br>
        <strong>Stresspunkt:</strong> Eins \u2013 rigides Denken, innerer Richter, \u00dcberzeugung eigener Legitimit\u00e4t<br>
        <strong>Tierentsprechung:</strong> Schimpanse \u2013 hochintelligent, sozial dominant, zur kalkulierten kollektiven Gewalt f\u00e4hig<br>
        <strong>Lebensdaten:</strong> Geb. 4. November 1969 in Harlem, New York<br>
        <strong>Verbrechen:</strong> Sex-Trafficking, N\u00f6tigung, K\u00f6rperverletzung \u2013 verurteilt im Oktober 2025 zu vier Jahren und zwei Monaten Haft
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die sexuelle Sieben im Vergleich: Wie sich Ma\u00dflosigkeit bei SE7, SO7 und SX7 unterschiedlich ausdr\u00fcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "Wie sich der sexuelle Typ 7 von selbsterhaltender und sozialer Sieben unterscheidet \u2013 27 Profile.", "Die 27 Pers\u00f6nlichkeiten in dir")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 7 ausf\u00fchrlich portr\u00e4tiert \u2013 Ma\u00dflosigkeit, Angst vor dem Schmerz und der Heilungsweg \u00fcber echte Tiefe.", "Wer du wirklich bist \u2013 Band 1")}
      </div>

      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portr\u00e4t dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein juristisches Urteil. Sean Combs wurde im Oktober 2025 wegen Sex-Trafficking und N\u00f6tigung verurteilt. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-aileen-wuornos", label:"Kriminalpsychologie: Aileen Wuornos (SX7w8)"},
        {route:"kriminalpsychologie-griselda-blanco", label:"Kriminalpsychologie: Griselda Blanco (SE8w9)"},
        {route:"portrait-typ-7", label:"Typportr\u00e4t: Der Typ 7 im \u00dcberblick"},
      ])}
    </div>
  `);
}


function borisBeckerKriminalPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Boris Becker \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/astrologie-boris-becker-foto.jpg" alt="Boris Becker \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Boris Becker</p>
        <p class="krim-portrait-typ">SX7w8 &middot; Sexueller Typ 7 mit Achterfl\u00fcgel</p>
        <p style="font-size:0.85rem;color:var(--muted);margin:0.2rem 0 0;">Gro\u00dfbritannien 2022 &middot; Insolvenzvergehen</p>
      </div>
      <p class="psycho-intro">
        <strong>Boris Franz Becker</strong>, geboren am 22. November 1967 in Leimen,
        wurde 1985 mit 17 Jahren zum j\u00fcngsten Wimbledon-Sieger aller Zeiten &ndash;
        ein Moment, der ihn f\u00fcr immer definierte.
        Er gewann sechs Grand-Slam-Titel, f\u00fchrte die Weltrangliste an,
        wurde Olympiasieger und war ein Jahrzehnt lang das Gesicht des deutschen Tennis.
        Doch nach dem Ende seiner aktiven Karriere 1997 begann eine lange Abw\u00e4rtsspirale:
        Scheidung, Insolvenzen, \u00f6ffentliche Aff\u00e4ren, Fehlinvestitionen.
        Im April 2022 wurde Becker in London in <strong>vier Anklagepunkten</strong>
        nach dem britischen Insolvency Act 1986 schuldig gesprochen:
        er hatte Verm\u00f6genswerte im Wert von rund 2,5 Millionen Pfund
        vor dem Insolvenzverwalter verborgen, darunter Wimbledon-Troph\u00e4en,
        eine Immobilie in Deutschland und Bankguthaben.
        Er wurde zu zweieinhalb Jahren Haft verurteilt,
        verb\u00fc\u00dfte rund acht Monate im Gef\u00e4ngnis Huntercombe in Oxfordshire
        und wurde im Dezember 2022 als Staatsangeh\u00f6riger der Europ\u00e4ischen Union
        nach Deutschland abgeschoben.
        Das Enneagramm macht sichtbar, wie ein Mensch, der sich selbst
        mit dem gr\u00f6\u00dften Moment seines Lebens gleichsetzte,
        die Realit\u00e4t des Endes dieser \u00c4ra schlicht nicht akzeptieren konnte.
      </p>

      <div class="vb-section" style="background:rgba(0,80,60,0.06);border-left:3px solid #00503c;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Boris Becker</strong> wird dem <strong>Sexuellen Typ 7 mit Achterfl\u00fcgel</strong> zugeordnet.
        Die sexuelle Sieben sucht Intensit\u00e4t, Fusion, den absoluten Rausch &ndash;
        und in Beckers Fall die vollst\u00e4ndige Identifikation mit dem Bild des gro\u00dfen Champions.
        Das strahlende Selbstbild der Sieben ist ihr Schutzschild gegen Schmerz und Verlust.
        Solange dieses Bild h\u00e4lt, ist alles gut. Wenn es zu br\u00f6ckeln beginnt,
        setzt die Sieben alle verf\u00fcgbaren Mittel ein, es aufrechtzuerhalten &ndash;
        auch wenn das bedeutet, die Realit\u00e4t vollst\u00e4ndig zu verleugnen.
        Der Achterfl\u00fcgel verst\u00e4rkt die \u00dcberzeugung, dass Regeln f\u00fcr andere gelten,
        nicht f\u00fcr einen selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Tierentsprechung: Der Schimpanse</h3>
        <p class="vb-intro">
        Der <strong>Schimpanse</strong> ist die Tierentsprechung der sexuellen Sieben.
        Er ist hochintelligent, charismatisch und auf Bindung ausgerichtet &ndash;
        er lebt f\u00fcr intensive Kontakte, Spiel, Status und Erlebnis.
        Der Schimpanse ist der lebendigste der Menschenaffen:
        er lacht, t\u00e4uscht, verhandelt, k\u00e4mpft &ndash; und zeigt dabei immer eine explosive
        Unmittelbarkeit, die keine langen Planungshorizonte kennt.
        Boris Becker war auf dem Platz genau das: ein Tier des Augenblicks.
        Sein Wimbledon-Finale 1985 war kein berechneter Sieg &ndash;
        es war ein 17-j\u00e4hriger, der mit dem K\u00f6rper eines Schimpansen spielte
        und die ganze Welt mitgerissen hat.
        Doch der Schimpanse lebt im Jetzt. Was gestern war, ist ihm gleichg\u00fcltig.
        Und was kommen wird, interessiert ihn nicht.
        Genau diese Qualit\u00e4t &ndash; das grenzenlose Vertrauen in die eigene Kraft des Moments &ndash;
        wurde Boris Becker zum Verh\u00e4ngnis, als keine Momente mehr kamen.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die sexuelle Sieben: Ruhm als Fundament</h3>
        <p class="vb-intro"><strong>a) Das Grundmuster:</strong>
        Die sexuelle Sieben konstruiert um eine zentrale Intensit\u00e4t herum ein Selbst.
        F\u00fcr Boris Becker war diese Intensit\u00e4t &ndash; Tennis, Wimbledon, Leimen, der Junge,
        der die Welt ersch\u00fctterte &ndash; sein gesamtes Fundament.
        Er war nicht jemand, der Tennis spielte. Er war Boris Becker, der Wimbledon gewann.
        Diese Identifikation ist typisch f\u00fcr die sexuelle Sieben:
        Was mich ausmacht, ist das Intensivste, das St\u00e4rkste, das Echteste.
        Als diese Intensit\u00e4t versiegte &ndash; Karriereende, Scheidungen, Schulden &ndash;
        stand Becker vor einer existenziellen Frage,
        die er offenbar nie wirklich beantworten konnte: Wer bin ich ohne den Ruhm?</p>
        <p class="vb-intro"><strong>b) Die Verleugnung der Realit\u00e4t:</strong>
        Die Sieben hat eine besondere F\u00e4higkeit: Sie sieht das Positive.
        In gesunden Auspr\u00e4gungen ist das ein Geschenk &ndash; Optimismus, Lebensfreude, Resilienz.
        In der Stressreaktion wird daraus eine gef\u00e4hrliche Blindheit.
        Die Sieben verweigert das Sehen von Grenzen, Verlusten, Katastrophen &ndash;
        weil das Sehen dieser Realit\u00e4t zu viel Schmerz bedeuten w\u00fcrde.
        Becker war nachweislich bankrott, bevor er seinen Gl\u00e4ubigern gegen\u00fcber
        auch nur ansatzweise die volle Wahrheit sagte.
        Das britische Gericht stellte fest, dass er Verm\u00f6genswerte aktiv versteckt hatte.
        Das ist kein k\u00fchler Krimineller, der einen Plan hat.
        Das ist jemand, der nicht wahrhaben konnte, was war.</p>
        <p class="vb-intro"><strong>c) Der Achterfl\u00fcgel: Regeln f\u00fcr andere:</strong>
        Der Achterfl\u00fcgel verleiht der sexuellen Sieben St\u00e4rke, Direktheit &ndash;
        und eine \u00dcberzeugung von der eigenen Sonderstellung.
        Die Acht glaubt, dass die Welt in Starke und Schwache eingeteilt ist,
        und die Starken machen die Regeln.
        Becker trat in seinem Prozess auf, als k\u00f6nnte er mit Charme und W\u00fcrde
        eine Situation \u00fcberw\u00e4ltigen, in der er faktisch keine Argumente hatte.
        Er zeigte keine sichtbare Reue. Er erkl\u00e4rte, verhandelte, strahlte.
        Der Schimpanse mit Achterfl\u00fcgel verstand bis zuletzt nicht ganz,
        warum diese Strategie diesmal nicht funktionierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Der Fall: Wimbledon-Troph\u00e4en im Tresor</h3>
        <p class="vb-intro"><strong>a) Der Aufstieg und das Ende:</strong>
        Boris Becker gewann 1985 als Ungesetzter und j\u00fcngster Spieler aller Zeiten Wimbledon &ndash;
        17 Jahre alt, aufgewachsen in Leimen, ohne gro\u00dfen Hintergrund.
        1986 und 1989 folgten weitere Wimbledon-Titel, dazu
        das US Open 1989, zweimal das Australian Open sowie Gold bei den Olympischen Spielen 1992.
        1997 beendete er seine aktive Karriere. Danach folgten:
        eine kostspielige Scheidung von Barbara Feltus, Aff\u00e4ren, Vaterschaftsstreitigkeiten,
        eine zweite Ehe mit Lilly Becker und deren Ende,
        sowie eine Reihe gescheiterter Investitionen und Gesch\u00e4ftsprojekte.
        Im Jahr 2002 erkl\u00e4rte er in Deutschland Privatinsolvenz.
        2017 wurde er erneut &ndash; diesmal in Gro\u00dfbritannien &ndash; f\u00fcr zahlungsunf\u00e4hig erkl\u00e4rt.</p>
        <p class="vb-intro"><strong>b) Die Verurteilung 2022:</strong>
        Am 29. April 2022 befand das Southwark Crown Court in London Boris Becker
        in vier Anklagepunkten nach dem britischen Insolvency Act 1986 f\u00fcr schuldig.
        Er hatte &ndash; nach seiner offiziellen Zahlungsunf\u00e4higkeit 2017 &ndash;
        Verm\u00f6genswerte im Wert von rund 2,5 Millionen Pfund verheimlicht:
        Wimbledon-Troph\u00e4en, die er behalten hatte statt sie dem Verwalter zu \u00fcbergeben;
        Guthaben auf Bankkonten, die nicht deklariert worden waren;
        einen Anteil an einer Immobilie in Leimen, die er seiner Ex-Frau Barbara \u00fcberschrieben hatte.
        Am 29. April wurde er zu zweieinhalb Jahren Haft verurteilt.
        Er wurde im Mai 2022 in HMP Huntercombe in Oxfordshire inhaftiert
        und im Dezember 2022 &ndash; nach rund acht Monaten &ndash; fr\u00fchzeitig entlassen
        und als EU-Staatsangeh\u00f6riger nach Deutschland abgeschoben.</p>
        <p class="vb-intro"><strong>c) Was er danach sagte:</strong>
        Becker beschrieb seine Zeit im Gef\u00e4ngnis in Interviews als pr\u00e4gende Erfahrung.
        Er habe gelernt, mit weniger zu leben. Er habe Menschen kennengelernt,
        die ihm die Augen ge\u00f6ffnet h\u00e4tten. Er habe sich ver\u00e4ndert.
        Das mag sein. Doch es bleibt die Frage, die das Enneagramm stellt:
        Ist die Sieben bereit, die Kluft zwischen dem Bild, das sie von sich tr\u00e4gt,
        und der Realit\u00e4t dauerhaft anzuschauen &ndash; oder \u00fcberlebt das Selbstbild
        auch diesmal den Aufprall?</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro">
        Boris Becker ist kein klassischer Fall von krimineller Energie.
        Er ist ein Fall von totaler Identifikation mit einem Selbstbild
        &ndash; und einer tiefen Unf\u00e4higkeit, das Ende dieses Bildes zu akzeptieren.
        Die sexuelle Sieben mit Achterfl\u00fcgel baut ihr Leben auf Intensit\u00e4t.
        Wenn diese Intensit\u00e4t dauerhaft fehlt, ger\u00e4t das ganze Konstrukt ins Wanken.
        Das Verbergen der Wimbledon-Troph\u00e4en ist &ndash; psychologisch gelesen &ndash;
        nicht das Handeln eines k\u00fchlen Betr\u00fcgers.
        Es ist das Festhalten an den letzten greifbaren \u00dcberresten von etwas,
        das einmal alles war.
        Der Schimpanse wollte nicht kriminell sein.
        Er wollte nicht loslassen.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Einordnung</h3>
        <p class="vb-intro">
        <strong>Subtyp:</strong> SX7w8 \u2013 Sexuelle Sieben mit Achterfl\u00fcgel.<br>
        <strong>Leidenschaft:</strong> Ma\u00dflosigkeit (V\u00f6llerei) \u2013 das unstillbare Verlangen nach dem n\u00e4chsten H\u00f6hepunkt, dem n\u00e4chsten Triumph, dem n\u00e4chsten Beweis der eigenen Gr\u00f6\u00dfe.<br>
        <strong>Stresspunkt:</strong> Eins \u2013 rigides Festhalten an einem einzigen Bild von sich selbst, innerer Richter \u00fcber alle anderen.<br>
        <strong>Tierentsprechung:</strong> Schimpanse \u2013 lebendig, statusbewusst, im Moment lebend, zur Eskalation f\u00e4hig wenn der Rang bedroht ist.<br>
        <strong>Vergehen:</strong> Vier Verst\u00f6\u00dfe gegen den britischen Insolvency Act 1986, April 2022.<br>
        <strong>Strafe:</strong> 2,5 Jahre Haft, davon ca. 8 Monate verb\u00fc\u00dft; Abschiebung nach Deutschland Dezember 2022.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die sexuelle Sieben im Vergleich: Wie sich Gier bei SE7, SO7 und SX7 unterschiedlich ausdr\u00fcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "Wie sich der sexuelle Typ 7 von selbsterhaltender und sozialer Sieben unterscheidet \u2013 27 Profile.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 7 ausf\u00fchrlich portr\u00e4tiert \u2013 Gier, Angst vor dem Schmerz und der Heilungsweg \u00fcber echte Tiefe.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Boris Becker wurde in vier Punkten nach dem britischen Insolvency Act 1986 rechtskr\u00e4ftig verurteilt. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"beruehmte-boris-becker", label:"Portr\u00e4t: Boris Becker \u2013 Ber\u00fchmte Pers\u00f6nlichkeiten"},
        {route:"astrologie-boris-becker", label:"Astrologie: Boris Becker (SX7w8)"},
        {route:"kriminalpsychologie-aileen-wuornos", label:"Kriminalpsychologie: Aileen Wuornos (SX7w8)"},
      ])}
    </div>
  `);
}

function victorLustigPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Victor Lustig – Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/victor-lustig-portrait.jpg" alt="Victor Lustig – Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Victor Lustig</p>
        <p class="krim-portrait-typ">SX7w8 &middot; Sexueller Typ 7 mit Achterfl\xfcgel</p>
        <p class="krim-portrait-sub">&bdquo;Der Mann, der den Eiffelturm zweimal verkaufte&ldquo; &ndash; Tierentsprechung: Schimpanse</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Der Schimpanse</h3>
        <p class="vb-intro">Der <strong>Schimpanse</strong> ist das Tier der sexuellen Sieben &ndash; hochintelligent, sozial wendig, mit einer F\xe4higkeit, sich in jede Gruppe, jede Situation, jede Beziehung sofort einzupassen und sie f\xfcr sich zu nutzen. Victor Lustig, geboren um 1890 in B\xf6hmen, war genau dieses Tier in Menschenform: Er sprach f\xfcnf Sprachen flie\xdfend, f\xfchrte \xfcber vierzig verschiedene Aliasnamen und Identit\xe4ten, und schaffte es, sich in jede Umgebung &ndash; vom Passagierschiff-Salon bis zum Chicagoer Gangstermilieu &ndash; als vollkommen glaubw\xfcrdig zu inszenieren.</p>
        <p class="vb-intro">1925 las er in einer Pariser Zeitung eine Randnotiz: Die Instandhaltung des Eiffelturms sei so teuer geworden, dass ein Abriss g\xfcnstiger sein k\xf6nnte. Aus diesem einzigen Satz konstruierte Lustig einen der k\xfchnsten Betrugsf\xe4lle der Geschichte &ndash; und verkaufte den Turm nicht nur einmal, sondern zweimal an ahnungslose Schrotth\xe4ndler.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die sexuelle Sieben: Suggestibilit\xe4t als Werkzeug</h3>
        <p class="vb-intro">Naranjo nannte die <strong>sexuelle Sieben (SX7)</strong> den Subtyp der <em>Suggestibilit\xe4t</em>: eine F\xe4higkeit, sich vollst\xe4ndig in eine Idee, eine Person, einen Moment hineinzuversetzen &ndash; und dabei so \xfcberzeugend zu wirken, dass die eigene Begeisterung ansteckend wird. Anders als die soziale Sieben, die sich \xfcber Systeme und Zugeh\xf6rigkeit definiert, wirkt die SX7 im intensiven Eins-zu-eins: ein Blick, ein Gespr\xe4ch, ein einziger \xfcberzeugender Moment gen\xfcgen.</p>
        <p class="vb-intro">Lustig lud jeweils nur f\xfcnf ausgew\xe4hlte Schrotth\xe4ndler zu einem geheimen Treffen im Hotel Crillon ein, gab sich als hoher Regierungsbeamter aus und pr\xe4sentierte den Turmverkauf als vertrauliche, dringende Staatsangelegenheit. Er w\xe4hlte gezielt den Bieter aus, der am ehesten korrupt und deshalb am wenigsten geneigt war, die Sache \xf6ffentlich zu machen &ndash; ein psychologisches Meisterst\xfcck der SX7: Die Suggestion wirkt am st\xe4rksten, wenn der Andere selbst etwas zu verbergen hat.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Der Achterfl\xfcgel: Kaltbl\xfctigkeit unter h\xf6chstem Risiko</h3>
        <p class="vb-intro">Eine SX7 mit schw\xe4cher ausgepr\xe4gtem Achterfl\xfcgel h\xe4tte den Coup vermutlich einmal durchgef\xfchrt und sich dann zur\xfcckgezogen. Bei Lustig trat stattdessen eine Kompromisslosigkeit hervor, die weit \xfcber gew\xf6hnlichen Wagemut hinausging: Nachdem der erste K\xe4ufer die Polizei alarmiert hatte &ndash; aus Scham \xfcber den eigenen Betrug jedoch nie \xf6ffentlich Anzeige erstattete &ndash;, kehrte Lustig wenige Monate sp\xe4ter nach Paris zur\xfcck und verkaufte den Eiffelturm ein zweites Mal.</p>
        <p class="vb-intro">Diese Bereitschaft, ein bereits einmal riskiertes Spiel unter noch h\xf6herem Entdeckungsrisiko zu wiederholen, ist der Achterfl\xfcgel in Reinform: keine Angst vor Konfrontation, keine R\xfccksicht auf die eigene Verwundbarkeit, sondern die \xdcberzeugung, dass Kontrolle \xfcber die Situation wichtiger ist als Vorsicht. Sp\xe4ter in den USA ging Lustig sogar so weit, den Gangsterboss Al Capone selbst in ein Gesch\xe4ft zu verwickeln &ndash; und ihm sein Geld unversehrt zur\xfcckzugeben, um dessen Vertrauen fest zu gewinnen, bevor der eigentliche gro\xdfe Betrug folgte.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Die &bdquo;Geldkiste&ldquo;: Gier als Angriffsfl\xe4che</h3>
        <p class="vb-intro">Eines von Lustigs bekanntesten Betrugsinstrumenten war die sogenannte &bdquo;Rumänische Geldkiste&ldquo; &ndash; ein Kasten, der angeblich Geldscheine kopieren konnte. Lustig f\xfchrte K\xe4ufern vor, wie die Maschine \xfcber mehrere Stunden echte Geldscheine &bdquo;druckte&ldquo; (tats\xe4chlich hatte er zuvor Scheine im Ger\xe4t versteckt) und verkaufte die Kiste anschlie\xdfend f\xfcr hohe Summen &ndash; wohl wissend, dass die K\xe4ufer, sobald die Kiste nur noch Blankopapier produzierte, aus Scham nie zur Polizei gehen w\xfcrden.</p>
        <p class="vb-intro">Das ist die SX7w8-Logik in ihrer kalkuliertesten Form: Lustig baute seine Betr\xfcgereien systematisch so, dass die Gier oder Korruptheit seiner Opfer selbst zum Schutzschild wurde. Die Suggestion \xfcberzeugte nicht durch Vertrauen allein, sondern durch das gezielte Ausnutzen der Schwachstellen des Gegen\xfcbers.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Verhaftung und Ende in Alcatraz</h3>
        <p class="vb-intro">1935 wurde Lustig schlie\xdflich wegen Falschgelddelikten verhaftet, nachdem eine seiner ehemaligen Geliebten ihn bei den Beh\xf6rden verriet. Selbst aus dem Gef\xe4ngnis in New York gelang ihm noch die Flucht &ndash; mithilfe eines aus Bettlaken geknoteten Seils, das er als Fensterputzer getarnt am helllichten Tag benutzte, bevor er nach vier Wochen erneut gefasst wurde. 1936 wurde er zu 20 Jahren Haft verurteilt und in das Bundesgef\xe4ngnis Alcatraz \xfcberstellt.</p>
        <p class="vb-intro">Dort starb Lustig 1947 an einer Lungenentz\xfcndung. Bis zuletzt hinterlie\xdf er kaum verl\xe4ssliche Spuren \xfcber sein tats\xe4chliches Leben &ndash; selbst sein Geburtsdatum und seine wahre Identit\xe4t bleiben bis heute nicht vollst\xe4ndig gekl\xe4rt. Die SX7 hinterl\xe4sst selten ein klares Bild von sich selbst; sie hinterl\xe4sst Geschichten.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro"><strong>a) Suggestibilit\xe4t als Berufswerkzeug:</strong> Lustigs gesamte Karriere beruhte auf der F\xe4higkeit, sich selbst und andere in einem einzigen \xfcberzeugenden Moment vollst\xe4ndig zu verwandeln. Das ist die SX7 in ihrer reinsten Form: keine langfristige Systemplanung, sondern die geniale Improvisation im entscheidenden Augenblick.</p>
        <p class="vb-intro"><strong>b) Der Achterfl\xfcgel als Wiederholungszwang unter Risiko:</strong> Eine SX7 mit schw\xe4cher ausgepr\xe4gtem Achterfl\xfcgel h\xe4tte sich nach dem ersten Eiffelturm-Verkauf zur\xfcckgezogen. Der stark ausgepr\xe4gte Achterfl\xfcgel bei Lustig verlangte danach, das Risiko zu wiederholen, zu steigern, zu beweisen, dass die Kontrolle vollst\xe4ndig bei ihm lag.</p>
        <p class="vb-intro"><strong>c) Identit\xe4t als flie\xdfendes Material:</strong> \xdcber vierzig Aliasnamen zeigen, wie sehr die SX7 die eigene Identit\xe4t nicht als feste Gr\xf6\xdfe, sondern als Werkzeug begreift &ndash; formbar, austauschbar, immer dem jeweiligen Moment angepasst.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">7. Einordnung</h3>
        <p class="vb-intro" style="margin-bottom:1.2rem;">
          <span style="display:block;margin-bottom:0.3rem;"><strong>Name:</strong> Victor Lustig</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Subtyp:</strong> SX7w8 &ndash; Sexuelle Sieben mit Achterfl\xfcgel</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Leidenschaft:</strong> V\xf6llerei (als Suggestibilit\xe4t im intensiven Eins-zu-eins-Kontakt)</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Tierentsprechung:</strong> Schimpanse</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Lebensdaten:</strong> um 1890 &ndash; 9. M\xe4rz 1947</span>
          <span style="display:block;"><strong>Bekannt f\xfcr:</strong> Verkaufte den Eiffelturm zweimal an Schrotth\xe4ndler, betrog Al Capone, verkaufte die &bdquo;Rum\xe4nische Geldkiste&ldquo;, 1936 wegen Falschgelddelikten zu 20 Jahren Haft verurteilt</span>
        </p>
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die sexuelle Sieben im Vergleich: Wie Suggestibilit\xe4t zum genialen Improvisationswerkzeug wird – und warum der Achterflügel aus Wagemut Wiederholungszwang macht.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE7, SO7, SX7 – 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "V\xf6llerei als Grundmotiv der Sieben: Wie das Schutzsystem der Sieben entsteht und wie es sich in Heilung aufl\xf6st.", "Wer du wirklich bist (Band 1)")}

      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Victor Lustig wurde 1936 wegen Falschgelddelikten verurteilt und starb 1947 in Haft. Das Enneagramm erkl\xe4rt, es rechtfertigt nicht.
        </p>
      </div>

        ${relatedLinks([
          {route:"kriminalpsychologie-ronnie-biggs", label:"Kriminalpsychologie: Ronnie Biggs (SX7w8)"},
          {route:"kriminalpsychologie-frank-abagnale-jr", label:"Kriminalpsychologie: Frank Abagnale Jr. (SO7w6) – Der Hochstapler"},
          {route:"beruehmte-anna-anderson", label:"Portr\xe4t: Anna Anderson (SE3w4)"},
        ])}
      </div>
    </div>
  `);
}

function ronnieBiggsPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ronnie Biggs \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/ronnie-biggs-portrait.jpg" alt="Ronnie Biggs \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ronnie Biggs</p>
        <p class="krim-portrait-typ">SX7w8 &middot; Sexueller Typ 7 mit Achterfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">Britischer Zugr\u00e4uber und Fl\u00fcchtling &middot; Tierentsprechung: Schimpanse</p>
      </div>

      <p class="psycho-intro">
        <strong>Ronald Arthur \u201eRonnie" Biggs</strong>, geboren am 8. August 1929
        in Lambeth, London, war ein kleinkrimineller Handwerker mit einigen
        Vorstrafen wegen Einbruchs, als er 1963 zur Legende wurde: Am 8. August \u2013
        seinem 34. Geburtstag \u2013 beteiligte er sich am sogenannten \u201eGro\u00dfen Postraub",
        dem \u00dcberfall auf einen Postzug zwischen Glasgow und London.
        Die Bande erbeutete umgerechnet rund 2,6 Millionen Pfund \u2013 eine der
        gr\u00f6\u00dften Beutesummen der britischen Kriminalgeschichte.
        Biggs\u2019 eigener Tatbeitrag war vergleichsweise klein: Er vermittelte
        der Bande einen pensionierten Lokf\u00fchrer, weil die eigentlichen T\u00e4ter
        den Zug nicht selbst sicher bewegen konnten.
        1964 zu 30 Jahren Haft verurteilt, gelang ihm 1965 der spektakul\u00e4re
        Ausbruch aus dem Gef\u00e4ngnis Wandsworth. \u00dcber Paris und Australien floh
        er 1970 nach Brasilien, wo er \u2013 vor Auslieferung gesch\u00fctzt, weil er
        Vater eines brasilianischen Sohnes war \u2013 jahrzehntelang \u00f6ffentlich
        und unbehelligt lebte, Interviews gab und zur Touristenattraktion in
        Rio de Janeiro wurde. Gesundheitlich schwer angeschlagen, kehrte er
        2001 freiwillig nach Gro\u00dfbritannien zur\u00fcck, wurde erneut inhaftiert
        und 2009 aus humanit\u00e4ren Gr\u00fcnden entlassen. Er starb 2013 im Alter
        von 84 Jahren.
      </p>

      <div class="vb-section" style="background:rgba(0,80,60,0.06);border-left:3px solid #00503c;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ronnie Biggs</strong> wird dem <strong>Sexuellen Typ 7
        mit Achterfl\u00fcgel (SX7w8)</strong> im Enneagramm zugeordnet.
        Die sexuelle Sieben sucht nicht die stille Zugeh\u00f6rigkeit (SO7)
        oder das gesicherte Nest (SE7), sondern die vollst\u00e4ndige Fusion
        mit dem intensivsten, aufregendsten Leben, das m\u00f6glich ist \u2013
        Naranjo beschrieb diesen Subtyp treffend als von <em>Suggestibility</em>
        (Beeinflussbarkeit) gepr\u00e4gt: Die sexuelle Sieben l\u00e4sst sich begeistern,
        mitrei\u00dfen, hinein in ein gr\u00f6\u00dferes Abenteuer ziehen, oft ohne die Risiken
        wirklich zu Ende zu denken. Bei Biggs zeigte sich das schon am Einstieg
        in den Postraub: Er wurde nicht als Kopf der Bande, sondern als
        mitgerissener Mitl\u00e4ufer Teil eines Plans, der ihn faszinierte.
        Der Achterfl\u00fcgel bringt Mut, Trotz und eine unbeugsame Direktheit
        gegen\u00fcber Autorit\u00e4t hinzu \u2013 genau die Mischung, die Biggs nach seiner
        Verurteilung nicht resignieren, sondern \u00fcber eine Gef\u00e4ngnismauer klettern lie\u00df.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Der Schimpanse</h3>
        <p class="vb-intro">Der <strong>Schimpanse</strong> ist das Tier der sexuellen Sieben \u2013
        in diesem Fall gepaart mit dem Achterfl\u00fcgel: lebendig, statusbewusst,
        ganz im Moment, und f\u00e4hig, bei Bedrohung des eigenen Rangs sofort zu
        eskalieren. Schimpansen leben in
        Gruppen, in denen Zugeh\u00f6rigkeit \u00fcber Auftritt, Mut und das Eingehen von
        Risiken verhandelt wird \u2013 wer sich traut, gewinnt Ansehen. Biggs war
        dieser Schimpanse: ein Mann ohne besondere kriminelle Statur, der sich
        durch einen einzigen k\u00fchnen Auftritt \u2013 die Vermittlung des Lokf\u00fchrers,
        die Teilnahme am gr\u00f6\u00dften Coup seiner Zeit \u2013 in die oberste Riege der
        britischen Verbrecherlegenden katapultierte. Und sp\u00e4ter, im Gef\u00e4ngnishof
        von Wandsworth, zeigte sich derselbe Instinkt noch einmal: Nicht abwarten,
        nicht verhandeln, sondern klettern, springen, handeln \u2013 der Sprung \u00fcber
        die Mauer als archetypische Schimpansenbewegung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Blickqualit\u00e4t</h3>
        <p class="vb-intro"><strong>a) Verschmitzt, einnehmend, nie ganz ernst:</strong>
        Zeitzeugen und Journalisten, die Biggs in Rio trafen, beschrieben
        ihn \u00fcbereinstimmend als charmant, witzig und seltsam sympathisch \u2013
        einen Mann, dem man seine Vergangenheit fast verzeihen wollte, weil
        er selbst so wenig Reue zur Schau trug. Dieser einnehmende Blick,
        der H\u00e4rte in Leichtigkeit aufl\u00f6st, ist Kernmerkmal der sexuellen Sieben:
        Intensit\u00e4t wird nicht bedrohlich inszeniert, sondern als Einladung
        zum Mitfeiern verpackt.</p>
        <p class="vb-intro"><strong>b) Die Suche nach dem n\u00e4chsten Rausch der Aufmerksamkeit:</strong>
        Biggs verkaufte T-Shirts mit seinem eigenen Konterfei, veranstaltete
        Grillabende f\u00fcr Touristen, sang 1978 mit den Sex Pistols einen Song
        \u00fcber sein eigenes Leben. Das ist kein reiner Zynismus \u2013 es ist die
        sexuelle Sieben, die sich selbst am liebsten als Legende, als Ereignis,
        als Erlebnis erlebt, das andere unbedingt teilen wollen.</p>
        <p class="vb-intro"><strong>c) Der Achterfl\u00fcgel: Trotz statt Reue:</strong>
        Anders als eine Sieben mit schwach ausgeprägtem Achterflügel, die bei Konfrontation eher ausweicht,
        begegnete Biggs Beh\u00f6rden, Richtern und Reportern mit einer fast
        vergn\u00fcgten Unbeugsamkeit. Er entschuldigte sich kaum, verhandelte
        stattdessen \u00f6ffentlich \u00fcber seine Bedingungen \u2013 eine Direktheit,
        die typisch f\u00fcr den Achterfl\u00fcgel ist: Macht wird nicht gef\u00fcrchtet,
        sondern als Gegen\u00fcber auf Augenh\u00f6he behandelt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Intensit\u00e4t statt Kalkulation als prim\u00e4res Motiv:</strong>
        Biggs war nie der Kopf eines Plans, sondern derjenige, der sich von
        der Intensit\u00e4t eines fremden Plans mitrei\u00dfen lie\u00df. Das entspricht der
        sexuellen Siebener-Logik: nicht das eigene System bauen (SO7), nicht
        das eigene Nest sichern (SE7), sondern sich einem Sog aus Erregung,
        Risiko und M\u00f6glichkeit hingeben, der gr\u00f6\u00dfer ist als man selbst.</p>
        <p class="vb-intro"><strong>b) Die Legende als \u00dcberlebensstrategie:</strong>
        In Rio verwandelte Biggs seine Straftat in eine Marke. Er verkaufte
        seine eigene Geschichte immer wieder neu, erg\u00e4nzte sie, dramatisierte
        sie \u2013 nicht aus reiner Berechnung, sondern weil die sexuelle Sieben
        ihr Leben als fortlaufendes, mitrei\u00dfendes Ereignis erz\u00e4hlen muss,
        um sich selbst lebendig zu f\u00fchlen.</p>
        <p class="vb-intro"><strong>c) Der Achterfl\u00fcgel: Kontrolle \u00fcber die eigene Erz\u00e4hlung:</strong>
        Was den SX7w8 von einer reinen sexuellen Sieben unterscheidet, ist der
        Wille, die eigene Geschichte nicht anderen zu \u00fcberlassen. Biggs gab
        Interviews zu seinen eigenen Bedingungen, verlangte Bezahlung f\u00fcr
        Fotos, inszenierte seine R\u00fcckkehr nach Gro\u00dfbritannien 2001 selbst als
        letzten gro\u00dfen \u00f6ffentlichen Auftritt \u2013 ein Achterfl\u00fcgel-Bed\u00fcrfnis
        nach Kontrolle, selbst \u00fcber das eigene Ende.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Konkrete Taten</h3>
        <p class="vb-intro"><strong>a) Der Postraub am eigenen Geburtstag:</strong>
        Am 8. August 1963 \u00fcberfiel eine f\u00fcnfzehnk\u00f6pfige Bande einen Postzug
        bei Ledburn in Buckinghamshire und erbeutete rund 2,6 Millionen Pfund
        in Banknoten. Biggs\u2019 Beitrag: Er hatte einen pensionierten Lokf\u00fchrer
        angeworben, der den Zug bis zur geplanten \u00dcbergabestelle fahren sollte \u2013
        ein kleiner, fast nebens\u00e4chlicher Baustein in einem riesigen Coup,
        der ihn dennoch f\u00fcr immer mit dem gr\u00f6\u00dften Raub seiner Zeit verband.</p>
        <p class="vb-intro"><strong>b) Verurteilung und Ausbruch:</strong>
        1964 zu 30 Jahren Haft verurteilt, verbrachte Biggs kaum mehr als ein
        Jahr im Gef\u00e4ngnis Wandsworth. Im Juli 1965 kletterte er mithilfe einer
        von Komplizen \u00fcber die Mauer geworfenen Strickleiter aus dem Gef\u00e4ngnishof
        und entkam in einem wartenden M\u00f6belwagen \u2013 ein Ausbruch, der binnen
        Sekunden entschieden werden musste und keine Zeit f\u00fcr Z\u00f6gern lie\u00df.</p>
        <p class="vb-intro"><strong>c) Flucht \u00fcber drei Kontinente:</strong>
        \u00dcber Paris, wo er sich einer plastischen Operation unterzog und eine
        neue Identit\u00e4t annahm, floh er nach Australien und schlie\u00dflich 1970
        nach Brasilien. Jede Station war ein neuer Anfang, ein neues Abenteuer \u2013
        nie ein R\u00fcckzug ins Verborgene, sondern eine fortgesetzte Bewegung
        von einem intensiven Kapitel ins n\u00e4chste.</p>
        <p class="vb-intro"><strong>d) Das \u00f6ffentliche Leben in Rio de Janeiro:</strong>
        In Brasilien vor Auslieferung gesch\u00fctzt \u2013 als Vater eines
        minderj\u00e4hrigen brasilianischen Staatsb\u00fcrgers \u2013, lebte Biggs
        Jahrzehnte lang v\u00f6llig \u00f6ffentlich. Er gab bezahlte Interviews,
        verkaufte Merchandise mit seinem eigenen Gesicht, veranstaltete
        Grillabende f\u00fcr Touristen und sang 1978 mit den Sex Pistols den
        Song \u201eNo One Is Innocent" \u00fcber sein eigenes Leben \u2013 eine
        beispiellose Selbstvermarktung als Verbrecherlegende.</p>
        <p class="vb-intro"><strong>e) Gesundheitlicher Verfall und freiwillige R\u00fcckkehr:</strong>
        Nach mehreren Schlaganf\u00e4llen ab 1998 zunehmend geschw\u00e4cht, kehrte
        Biggs 2001 freiwillig nach Gro\u00dfbritannien zur\u00fcck, um sich vom
        staatlichen Gesundheitssystem behandeln zu lassen \u2013 wohl wissend,
        dass ihn sofort erneute Haft erwartete. Auch das ein letzter,
        \u00f6ffentlichkeitswirksamer Auftritt: die Heimkehr des Ausbrechers,
        inszeniert als eigene Entscheidung, nicht als Kapitulation.</p>
        <p class="vb-intro"><strong>f) Entlassung und Tod:</strong>
        2009 wurde Biggs aus humanit\u00e4ren Gr\u00fcnden entlassen, nachdem er
        seine Sprache weitgehend verloren hatte. Er starb am 18. Dezember
        2013 im Alter von 84 Jahren \u2013 bis zuletzt eine \u00f6ffentliche Figur,
        deren Legende ihn \u00fcberlebte.</p>
        <p class="vb-intro"><strong>g) Das Geld und das Schicksal der Bande:</strong>
        Von der Beute in H\u00f6he von rund 2,6 Millionen Pfund wurde nur ein
        Bruchteil je sichergestellt \u2013 der gr\u00f6\u00dfte Teil blieb f\u00fcr immer
        verschwunden, aufgebraucht f\u00fcr Flucht, neue Identit\u00e4ten und ein
        Leben im Untergrund. Biggs' eigener Anteil, sch\u00e4tzungsweise rund
        147.000 Pfund, war binnen weniger Jahre f\u00fcr Fluchtkosten, die
        plastische Operation in Paris und den Aufbau seines neuen Lebens
        aufgezehrt; in Rio de Janeiro finanzierte er sich sp\u00e4ter vor allem
        durch den Verkauf seiner eigenen Geschichte, nicht durch die Beute
        selbst. Von den \u00fcbrigen Bandenmitgliedern wurden die meisten gefasst
        und verurteilt: Bruce Reynolds, der Kopf des Plans, wurde erst 1968
        verhaftet und verb\u00fc\u00dfte rund zehn Jahre; Charlie Wilson floh
        ebenfalls aus der Haft, wurde 1978 in Kanada wiedergefasst und 1990
        in Spanien erschossen; Ronald \u201eBuster" Edwards kehrte 1966 freiwillig
        zur\u00fcck und verb\u00fc\u00dfte seine Strafe. Ein Mitglied der Bande wurde nie
        identifiziert. Trotz der verh\u00e4ngten 30-Jahre-Strafen kamen die
        meisten Verurteilten nach etwa zehn bis dreizehn Jahren regul\u00e4r
        frei \u2013 nur Biggs selbst blieb durch seine Flucht so lange im
        \u00f6ffentlichen Bewusstsein wie kein anderer aus der Bande.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. T\u00e4terprofil &amp; Einordnung</h3>
        <p class="vb-intro"><strong>a) Kein Drahtzieher \u2013 ein mitgerissener Rollenspieler:</strong>
        Biggs war weder der Kopf noch der gewaltbereite Teil der Bande.
        Seine kriminelle Bedeutung entstand fast zuf\u00e4llig, wuchs dann aber
        durch seinen Ausbruch und seine jahrzehntelange \u00f6ffentliche
        Selbstinszenierung weit \u00fcber seinen tats\u00e4chlichen Tatbeitrag hinaus \u2013
        typisch f\u00fcr eine sexuelle Sieben, die aus einem kleinen Funken ein
        ganzes, lebenslanges Ereignis macht.</p>
        <p class="vb-intro"><strong>b) Die Legende als eigenst\u00e4ndiges Werk:</strong>
        Biggs\u2019 eigentliche \u201eTat" nach 1965 war weniger der Postraub selbst
        als die permanente Fortschreibung seiner eigenen Legende \u2013 Interviews,
        Merchandise, Musik, \u00f6ffentliche Auftritte. Das ist die sexuelle
        Sieben in ihrer unverfälschtesten Gestalt: Das Leben selbst wird zur B\u00fchne,
        auf der Intensit\u00e4t immer wieder neu erzeugt werden muss.</p>
        <p class="vb-intro"><strong>c) Abgrenzung zu anderen SX7w8-F\u00e4llen:</strong>
        Anders als Boris Becker, der an einem einzigen, unaufgebbaren
        Selbstbild (dem Wimbledon-Champion) festhielt, oder Aileen Wuornos,
        deren Fusion mit einer idealisierten Liebe in t\u00f6dliche Gewalt kippte,
        suchte Biggs die Fusion mit dem eigenen Abenteuer selbst \u2013 nicht mit
        einer Person, nicht mit einem vergangenen Triumph, sondern mit der
        fortlaufenden Geschichte seines eigenen, immer weiter dramatisierten
        Lebens.</p>
      </div>

      <div class="vb-section" style="background:rgba(0,80,60,0.07);border-left:3px solid #00503c;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">Zusammenfassung</h3>
        <p style="margin:0 0 0.6rem;font-size:0.95rem;color:var(--ink);">
        Ronnie Biggs ist der SX7w8 in einer seiner \u00f6ffentlichkeitswirksamsten
        Auspr\u00e4gungen: ein Mann, der sich weniger durch Berechnung als durch
        Beeinflussbarkeit und Sog in einen der gr\u00f6\u00dften Raub\u00fcberf\u00e4lle der
        britischen Geschichte hineinziehen lie\u00df \u2013 und der danach sein ganzes
        Leben der Aufgabe widmete, aus diesem einen Moment eine fortlaufende,
        immer wieder neu erz\u00e4hlte Legende zu machen.</p>
        <p style="margin:0 0 0.6rem;font-size:0.95rem;color:var(--ink);">
        Der Achterfl\u00fcgel zeigte sich in seinem Trotz gegen\u00fcber Autorit\u00e4t,
        seinem selbstbestimmten Umgang mit der eigenen Geschichte und dem
        beinahe vergn\u00fcgten Mut, mit dem er \u00fcber eine Gef\u00e4ngnismauer kletterte,
        statt seine Strafe schweigend abzusitzen.</p>
        <p style="margin:0;font-size:0.95rem;color:var(--ink);">
        Der Schimpanse springt, wo andere z\u00f6gern, und gewinnt Ansehen durch
        die schiere K\u00fchnheit des Sprungs. Doch was bleibt, wenn die Legende
        einmal zu Ende erz\u00e4hlt ist? Biggs\u2019 freiwillige R\u00fcckkehr 2001 und sein
        stiller Tod 2013 beantworten diese Frage nur teilweise \u2013 der letzte
        gro\u00dfe Auftritt eines Mannes, der sein Leben lang die B\u00fchne suchte.</p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-aileen-wuornos", label:"Kriminalpsychologie: Aileen Wuornos (SX7w8)"},
        {route:"kriminalpsychologie-boris-becker", label:"Kriminalpsychologie: Boris Becker (SX7w8)"},
        {route:"kriminalpsychologie-p-diddy", label:"Kriminalpsychologie: Sean 'P. Diddy' Combs (SX7w8)"},
      ])}
    </div>
  `);
}

function grisdaBlancoPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Griselda Blanco \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/griselda-blanco-portrait.jpg" alt="Griselda Blanco \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Griselda Blanco</p>
        <p class="krim-portrait-typ">SE8w9 &middot; Selbsterhaltender Typ 8 mit Neunerfl\xfcgel</p>
        <p class="krim-portrait-sub">Die Patin von Medell\xedn, Miami 1970er&ndash;1985 &ndash; Tierentsprechung: Orang-Utan</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Der Orang-Utan</h3>
        <p class="vb-intro">Der <strong>Orang-Utan</strong> ist das Tier der selbsterhaltenden Acht &ndash; und kein Bild trifft Griselda Blanco genauer. Der Orang-Utan ist das einsamste der gro\xdfen Menschenaffen. Er lebt nicht im Rudel, er braucht keine Herde. Er beansprucht ein Revier &ndash; still, methodisch, unnachgiebig &ndash; und verteidigt es mit einer Kraft, die man ihm von au\xdfen nicht ansieht. Er ist kein Angeber. Er zeigt sich nicht, wenn es nicht n\xf6tig ist. Aber wer in sein Territorium eindringt, lernt schnell, mit wem er es zu tun hat.</p>
        <p class="vb-intro">Griselda Blanco war ein Orang-Utan. Sie regierte das Kokaingesch\xe4ft in Miami nicht durch Charisma oder politischen Einfluss, sondern durch stille, kompromisslose Kontrolle. Sie gab keine Interviews. Sie trat nicht ins Rampenlicht. Sie lebte unter falschen Namen, wechselte Identit\xe4ten, operierte aus dem Verborgenen. Und wer ihr in die Quere kam, verschwand.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Die selbsterhaltende Acht: Macht als \xdcberlebensgarantie</h3>
        <p class="vb-intro">Der <strong>selbsterhaltende Typ 8 (SE8)</strong> unterscheidet sich grundlegend von der sozialen oder sexuellen Acht. Claudio Naranjo nannte diesen Subtyp &bdquo;Satisfactory Survival&ldquo; &ndash; \xdcberleben durch pers\xf6nliche Machtakkumulation. Die selbsterhaltende Acht baut kein soziales K\xf6nigreich wie die soziale Acht, sie verschmilzt nicht mit einer Person wie die sexuelle Acht. Sie sichert sich selbst ab. Ihr Territorium ist materiell, konkret, pers\xf6nlich.</p>
        <p class="vb-intro">Die Leidenschaft der Acht ist <em>Wollust</em> &ndash; nicht im engen sexuellen Sinne, sondern als \xfcberw\u00e4ltigende Lebensintensit\xe4t. Bei der selbsterhaltenden Acht richtet sich diese Intensit\xe4t auf Ressourcen, Kontrolle und pers\xf6nliche Unantastbarkeit. Griselda Blanco kam aus dem \xe4rmsten Milieu Kolumbiens. Armut hatte sie als Kind fast vernichtet. Die Acht in ihr zog daraus eine Konsequenz, die so einfach wie gnadenlos war: <em>Niemals wieder.</em></p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Der Neunerfl\xfcgel: Geduld, Kalk\xfcl, stille Kontrolle</h3>
        <p class="vb-intro">Der <strong>Neunerfl\xfcgel (w9)</strong> verleiht der selbsterhaltenden Acht eine entscheidende Qualit\xe4t: Geduld. Wo die SE8w7 explosiv und risikofreudig agiert, wirkt die SE8w9 ruhiger, berechnender, langfristiger. Der Neunerfl\xfcgel d\xe4mpft die Impulsivit\xe4t und verst\xe4rkt das Strategische. Die SE8w9 wartet. Beobachtet. Handelt im richtigen Moment &ndash; und dann vollst\xe4ndig.</p>
        <p class="vb-intro">Bei Griselda Blanco war dieser Fl\xfcgel unverkennbar. Sie operierte jahrzehntelang im Verborgenen, baute Strukturen auf, die auch ohne sie funktionierten, und lie\u00df Mittelm\xe4nner f\xfcr sie arbeiten. Sie war selten direkt sichtbar &ndash; und genau das machte sie so gef\xe4hrlich. Der Neunerfl\xfcgel gab ihr die Ruhe des Orang-Utans: keine unn\xf6tige Bewegung, keine unn\xf6tige Gefahr. Nur das Notwendige &ndash; aber das mit absoluter Konsequenz.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Biografie: von der Stra\xdfe zur Patin</h3>
        <p class="vb-intro">Griselda Blanco wurde am 15. Februar 1943 in Santa Marta, Kolumbien, geboren und wuchs im <em>Barrio Antioquia</em> in Medell\xedn auf &ndash; einem der gef\xe4hrlichsten Armenviertel des Landes. Ihre Kindheit war von Gewalt, Hunger und vollst\xe4ndiger Rechtlosigkeit gepr\xe4gt. Sie soll bereits mit elf Jahren in ihre erste T\xf6tung verwickelt gewesen sein. Ob diese Berichte stimmen oder Legende sind, l\xe4sst sich nicht verifizieren &ndash; aber sie spiegeln etwas Wahres: In dieser Umgebung lernte man entweder zu herrschen oder zu verschwinden.</p>
        <p class="vb-intro">Sie heiratete fr\xfch, wurde fr\xfch Mutter, trennte sich fr\xfch von ihrem ersten Mann. Ihr zweiter Mann, Alberto Bravo, f\xfchrte sie ins Drogengesch\xe4ft ein. Als er Geld unterschlug, erschoss sie ihn pers\xf6nlich bei einem Treffen in Kolumbien &ndash; nach einem Wortwechsel, direkt auf offener Stra\xdfe. Auch ihr dritter Mann, Dario Sepu\xfalveda, wurde auf ihren Befehl hin ermordet, nachdem er ihren gemeinsamen Sohn Michael entf\xfchrt hatte, um ihn als Druckmittel zu nutzen. Die Botschaft war klar: Griselda Blanco lie\xdf sich nicht erpressen. Von niemandem. Auch nicht von einem Ehemann.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Miami: die Herrschaft \xfcber den Markt</h3>
        <p class="vb-intro">In den 1970er-Jahren baute Griselda Blanco das erste gro\xdfe Kokainnetzwerk zwischen Kolumbien und Miami auf. Sie war fr\xfcher da als Pablo Escobar. Sie kannte die Routen, sie hatte die Kontakte, sie verstand die Logistik des Drogenhandels in einer Zeit, als die meisten noch Marihuana schmuggelten. Miami wurde unter ihrem Einfluss zur zentralen Drehscheibe des amerikanischen Kokainmarkts.</p>
        <p class="vb-intro">Die sogenannten <strong>Cocaine Cowboys</strong> der 1970er und fr\xfchen 1980er Jahre &ndash; eine \xc4ra beispielloser Gewalt in Miami &ndash; waren zu einem erheblichen Teil ihr Werk. Sie soll \xfcber 200 Morde in Auftrag gegeben haben. Dabei erfand sie die Methode der <em>Moto Sicarios</em>: Motorradfahrer mit Sch\u00fctzen auf dem R\xfcksitz, die blitzschnell zuschlugen und verschwanden. Diese Methode wurde sp\xe4ter von Pablo Escobar \u00fcbernommen und wurde zum Markenzeichen des Medell\xedn-Kartells.</p>
        <p class="vb-intro">Escobar selbst soll Griselda Blanco als <strong>&bdquo;La Madrina&ldquo;</strong> bezeichnet haben &ndash; die Patin. Sie war die \xe4ltere Generation, die Wegbereiterin. Escobar lernte von ihr: die Routen, die Methoden, die Skrupellosigkeit. Ohne Griselda Blanco w\xe4re das Medell\xedn-Kartell in seiner sp\xe4teren Form undenkbar gewesen. Sie war die Schule, die er besuchte &ndash; ohne je ihr Sch\xfcler zu sein.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Die Morde: Methode, keine Emotion</h3>
        <p class="vb-intro">Was Griselda Blancos Gewalt von der vieler anderer Kartellbosse unterschied, war ihre K\xe4lte. Sie t\xf6tete nicht im Affekt. Sie t\xf6tete methodisch &ndash; als Instrument der Kontrolle. Ein Mitarbeiter, der stahl, wurde beseitigt. Ein Rivale, der expandierte, wurde beseitigt. Ein Ehemann, der zur Bedrohung wurde, wurde beseitigt. Es gab keine Wut dahinter &ndash; nur Kalkulation.</p>
        <p class="vb-intro">Besonders bekannt ist der sogenannte <em>Dadeland Mall Massacre</em> vom 11. Juli 1979 in Miami: Ein Angriff auf offener Stra\xdfe, mitten am Tag, mit Maschinenpistolen &ndash; zwei Menschen get\xf6tet, mehrere verletzt, absolute Panik in der Stadt. Es war ein Signal. Griselda Blanco schickte Nachrichten &ndash; an Rivalen, an die Strafverfolgungsbeh\xf6rden, an jeden, der glaubte, ihr Territorium sei angreifbar.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">7. Verhaftung, Haft und Ende</h3>
        <p class="vb-intro">1985 wurde Griselda Blanco in Irvine, Kalifornien, verhaftet &ndash; unter einer ihrer falschen Identit\xe4ten. Die Ermittlungen hatten Jahre gedauert. Die Anklage umfasste drei Mordanklagen und Drogenhandel in gro\xdfem Stil. Trotz erdr\xfcckender Beweislage gelang es ihr, durch Verfahrenstricks und eingesch\xfcchterte Zeugen die Urteile hinauszuz\xf6gern. Erst 1994 wurde sie verurteilt.</p>
        <p class="vb-intro">Sie einigte sich schlie\xdflich auf einen Vergleich, gestand auf drei Morde und wurde zu einer Haftstrafe verurteilt und verlie\xdf das Gef\xe4ngnis nach etwa zehn Jahren. 2004 wurde sie in ihre Heimat Kolumbien abgeschoben. Ihr Sohn Uber hatte sie noch im Gef\xe4ngnis besucht. Er wurde kurz darauf erschossen. Die Gewalt, die sie selbst s\xe4te, hatte auch ihre Familie erreicht.</p>
        <p class="vb-intro">Am <strong>3. September 2012</strong> wurde Griselda Blanco vor einer Metzgerei in Medell\xedn erschossen &ndash; ein Kopfschuss, auf offener Stra\xdfe, von einem Moto Sicario. Die Methode, die sie selbst erfunden hatte, traf sie am Ende selbst. Sie wurde 69 Jahre alt.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Was das Enneagramm sichtbar macht</h3>
        <p class="vb-intro"><strong>a) \xdcberleben als tiefstes Motiv:</strong> Griselda Blanco begann nicht als Verbrecherin aus Gier oder Ideologie. Sie begann als jemand, der in einer Welt aufwuchs, in der Schw\xe4che den Tod bedeutete. Die selbsterhaltende Acht zieht aus einer solchen Kindheit eine strukturelle Konsequenz: Macht ist Sicherheit. Ressourcen sind Sicherheit. Wer nichts hat, ist schutzlos. Dieses Muster lie\u00df sich sp\xe4ter nicht mehr abschalten &ndash; auch dann nicht, als die materielle Not l\xe4ngst \xfcberwunden war.</p>
        <p class="vb-intro"><strong>b) Der Neunerfl\xfcgel als strategischer Vorteil:</strong> Was Griselda Blanco von vielen m\xe4nnlichen Kartellfiguren unterschied, war ihre F\xe4higkeit, unsichtbar zu bleiben. Die SE8w7 sucht die Konfrontation, genie\u00dft Macht sichtbar. Die SE8w9 verwaltet Macht still. Griselda Blanco blieb jahrzehntelang im Verborgenen, w\xe4hrend die M\xe4nner um sie herum starben. Der Neunerfl\xfcgel rettete ihr mehrfach das Leben.</p>
        <p class="vb-intro"><strong>c) Mutterschaft und Machtlogik:</strong> Sie k\xe4mpfte um ihre S\xf6hne mit derselben Kompromisslosigkeit, mit der sie ihr Gesch\xe4ft f\xfchrte. Als ihr dritter Mann ihren j\xfcngsten Sohn Michael entf\xfchrte, lie\xdf sie ihn t\xf6ten. Das ist keine Pathologie der Lieblosigkeit &ndash; das ist die selbsterhaltende Acht, die alles, was ihr geh\xf6rt, mit absoluter Konsequenz sch\xfctzt. Ihr Revier umfasste auch ihre Kinder.</p>
        <p class="vb-intro"><strong>d) Die eigene Methode als Ende:</strong> Dass sie durch einen Moto Sicario get\xf6tet wurde &ndash; exakt die Methode, die sie selbst entwickelt und verfeinert hatte &ndash; ist mehr als tragische Ironie. Es zeigt, was die selbsterhaltende Acht in der Pathologie \xfcbersieht: Die Welt, die man durch Gewalt kontrolliert, bleibt eine Welt voller Gewalt. Es gibt kein sicheres Ende in einem System, das man selbst auf Angst gebaut hat.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">9. Fazit: Die Patin</h3>
        <p class="vb-intro">Griselda Blanco war kein Monster im filmischen Sinne. Sie war eine Frau, die in einer Welt absoluter Rechtlosigkeit aufwuchs und die einzige Sprache lernte, die dort z\xe4hlte: Macht. Die selbsterhaltende Acht mit Neunerfl\xfcgel ist in ihrer gesunden Form eine der beeindruckendsten Energien des Enneagramms: geduldig, strategisch, unersch\u00fctterlich, f\xe4hig zur Stille. Bei Griselda Blanco wurde dieselbe Energie zum Fundament eines Imperiums, das auf Leichen stand.</p>
        <p class="vb-intro">Sie war Pablo Escobars Lehrmeisterin &ndash; nicht als Mentorin, sondern als Modell. Er schaute ihr zu und \xfcbernahm, was funktionierte: die Routen, die Methoden, die Skrupellosigkeit. Das Medell\xedn-Kartell, das die Welt in den 1980ern ersch\xfctterte, w\xe4re ohne sie anders gewesen. Der Orang-Utan hatte sein Revier so gr\xfcndlich markiert, dass noch Jahrzehnte sp\xe4ter andere darin lebten.</p>
      </div>

      <div class="vb-section">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">10. Einordnung</h3>
        <p class="vb-intro" style="margin-bottom:1.2rem;">
          <span style="display:block;margin-bottom:0.3rem;"><strong>Name:</strong> Griselda Blanco Restrepo</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Subtyp:</strong> SE8w9 &ndash; Selbsterhaltender Typ 8 mit Neunerfl\xfcgel</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Leidenschaft:</strong> Wollust (als Macht- und Ressourcenkontrolle aus absolutem \xdcberlebenswillen)</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Tierentsprechung:</strong> Orang-Utan</span>
          <span style="display:block;margin-bottom:0.3rem;"><strong>Lebensdaten:</strong> 15. Februar 1943 &ndash; 3. September 2012</span>
          <span style="display:block;"><strong>Verbrechen:</strong> Aufbau des ersten Kokain-Netzwerks Miami&ndash;Kolumbien; sch\xe4tzungsweise \xfcber 200 Morde in Auftrag gegeben; verurteilt 1994; erschossen 2012 in Medell\xedn durch einen Moto Sicario</span>
        </p>
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die selbsterhaltende Acht im Vergleich: Wie sich Wollust bei SE8, SO8 und SX8 unterschiedlich ausdr\xfcckt &ndash; und warum die SE8 so schwer zu erkennen ist.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE8, SO8, SX8 &ndash; 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Wollust als Grundmotiv der Acht: Wie Intensit\xe4t zur Herrschaft wird und was den Unterschied zwischen sch\xfctzender und zerst\xf6rerischer Kraft ausmacht.", "Wer du wirklich bist (Band 1)")}
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Griselda Blanco wurde 1994 wegen Drogenhandels und Beteiligung an Morden verurteilt. Sie starb 2012 durch einen Mordanschlag. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>


        ${relatedLinks([
          {route:"kriminalpsychologie-salvatore-riina", label:"Kriminalpsychologie: Salvatore Riina (SE8w9)"},
          {route:"kriminalpsychologie-john-gotti", label:"Kriminalpsychologie: John Gotti (SO8w7)"},
          {route:"kriminalpsychologie-jeffrey-epstein", label:"Kriminalpsychologie: Jeffrey Epstein (SX8w9)"},
        ])}
      </div>
    </div>
  `);
}

function salvatoreRiinaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Salvatore Riina \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/salvatore-riina-portrait.jpg" alt="Salvatore Riina \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Salvatore Riina</p>
        <p class="krim-portrait-typ">SE8w9 \u00b7 Selbsterhaltender Typ 8 mit Neunerfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">Sizilianischer Mafia-Boss und Massenm\u00f6rder \u00b7 Tierentsprechung: Orang-Utan</p>
      </div>

      <p class="psycho-intro">
        <strong>Salvatore Riina</strong>, genannt \u201eTot\xf2 u curtu" (der Kurze) oder \u201eLa Belva" (das Biest),
        war von den 1970er bis zu seiner Verhaftung 1993 der m\xe4chtigste und
        gef\xe4rlichste Mafioso Italiens. Als Boss der Corleonesi und sp\xe4ter
        der gesamten Cosa Nostra verantwortete er Hunderte von Morden,
        darunter die Ermordung der Richter Giovanni Falcone und Paolo Borsellino
        sowie den Massaker-Krieg gegen rivalisierende Mafia-Clans in den 1980er Jahren.
        23 Jahre lang lebte er untergetaucht \u2013 in Palermo, mitten unter Menschen,
        ohne je gefunden zu werden. Riinas Fall ist eines der eindringlichsten
        Beispiele f\xfcr absolute territoriale Macht, kombiniert mit einer Geduld
        und Unauff\xe4lligkeit, die seinen Feinden r\xe4tselhaft erschien.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Salvatore Riina</strong> wird der <strong>Selbsterhaltenden Acht mit Neunerfl\xfcgel</strong>
        im Enneagramm zugeordnet. Die Leidenschaft der Acht ist <em>Wollust</em> \u2013
        nicht im sexuellen Sinne, sondern als \xfcberm\xe4\xdfige Intensit\xe4t, als Hunger
        nach Kontrolle, Macht und der F\xe4higkeit, die eigene Welt zu dominieren.
        Die selbsterhaltende Acht (SE8) richtet diese Energie auf territoriale Sicherheit:
        Sie sichert ihren Bereich, ihre Familie, ihre Ressourcen \u2013 und eliminiert
        kompromisslos jede Bedrohung. Der Neunerfl\xfcgel mildert die \xe4u\xdfere Pr\xe4senz
        erheblich: Er gibt der Acht eine scheinbare Ruhe, eine F\xe4higkeit zum
        R\xfcckzug und zur Geduld, die gef\xe4hrlicher ist als offene Aggression \u2013
        denn niemand sieht den Angriff kommen, bis es zu sp\xe4t ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\xe4t</h3>
        <p class="vb-intro"><strong>a) Ruhig und durchdringend:</strong>
        Zeitzeugen beschrieben Riinas Blick als still und durchdringend \u2013
        kein Rasen, keine Hektik, aber eine Intensit\xe4t, die den Gegen\xfcber
        einsch\xfcchterte, ohne dass Riina die Stimme h\xe4tte heben m\xfcssen.
        Das ist der Achter-Blick mit Neunerfl\xfcgel: ruhig nach au\xdfen,
        aber mit einer Tiefe, die signalisiert: Hier ist jemand, der alles sieht.</p>
        <p class="vb-intro"><strong>b) Abwartend und kalkulierend:</strong>
        <strong>Riina</strong> beobachtete mehr als er sprach. Der Neunerfl\xfcgel verst\xe4rkt
        diese Eigenschaft der Acht: weniger Konfrontation, mehr Analyse.
        Er ma\xdf seine Umgebung aus, bevor er handelte \u2013 und wenn er handelte,
        dann vollst\xe4ndig.</p>
        <p class="vb-intro"><strong>c) Keine Schw\u00e4che zulassend:</strong>
        In seinem Blick war kein Raum f\xfcr Unsicherheit oder Empathie mit
        denen, die er als Bedrohung einstufte. Die Acht schaut die Welt
        durch die Linse von St\xe4rke und Schw\xe4che \u2013 und Schw\xe4che
        ist f\xfcr die SE8 eine Einladung zur Ausbeutung oder Elimination.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Territoriale Kontrolle als Lebensprinzip:</strong>
        Die selbsterhaltende Acht sichert ihren Bereich. F\xfcr Riina war
        Sizilien und schlie\xdflich die gesamte Cosa Nostra dieser Bereich.
        Er duldete keine Parallelstrukturen, keine ungel\xf6sten Machtkonflikte \u2013
        alles musste unter seiner Kontrolle stehen oder beseitigt werden.</p>
        <p class="vb-intro"><strong>b) Absolute Loyalit\xe4t zur Kerngruppe:</strong>
        <strong>Riina</strong> war seinen Corleoneser Clan-Angeh\xf6rigen gegen\xfcber tief loyal
        und sch\xfctzend \u2013 das typische SE8-Muster: nach innen stark f\xfcrsorgend,
        nach au\xdfen kompromisslos hart. Die Acht teilt die Welt in wenige
        echte Vertraute und den Rest.</p>
        <p class="vb-intro"><strong>c) Kompromisslose Eskalation bei Bedrohung:</strong>
        Als Riina die rivalisierende Mafia-F\xfchrung als Bedrohung einstufte,
        eskalierte er ohne Z\xf6gern in die totale Vernichtung. Das ist die SE8
        unter existenziellem Druck: kein Verhandeln, kein halbes Ma\xdf \u2013
        sondern die vollst\xe4ndige Ausl\xf6schung der Bedrohungsquelle.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Macht als Sicherheit:</strong>
        F\xfcr die selbsterhaltende Acht ist Macht kein Selbstzweck,
        sondern die einzige Form von Sicherheit, der sie wirklich vertraut.
        Riina akkumulierte Macht, weil er tief verstand: Wer keine Macht hat,
        ist verwundbar. Die Geschichte seiner Kindheit in Corleone \u2013 Armut,
        fr\xfcher Verlust, der erbarmungslose Darwinismus der Mafia \u2013 pr\xe4gte
        diese \xdcberzeugung unwiderruflich.</p>
        <p class="vb-intro"><strong>b) Geduld als Waffe:</strong>
        Der Neunerfl\xfcgel gab Riina eine Geduld, die bei einer Acht
        ungew\xf6hnlich ist. Er wartete Jahrzehnte auf den richtigen Moment,
        lebte 23 Jahre im Verborgenen ohne Ungeduld oder \xdcberheblichkeit.
        Das ist die SE8w9 in ihrer strategischen Auspr\xe4gung: die F\xe4higkeit,
        den eigenen Angriffstrieb so lange zu z\xfcgeln, bis der Zeitpunkt stimmt.</p>
        <p class="vb-intro"><strong>c) Einsch\xfccherung als Kommunikation:</strong>
        <strong>Riina</strong> musste selten laut werden. Seine Reputation war sein Werkzeug \u2013
        der Ruf allein gen\xfcgte, um Gehorsam zu erzeugen. Das ist eine
        SE8w9-Qualit\xe4t: Macht durch Pr\xe4senz statt durch Larm. Die Neun
        verst\xe4rkt die stille Dimension der Acht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Unscheinbar und \xfcberw\u00e4ltigend zugleich:</strong>
        <strong>Riina</strong> war k\xf6rperlich klein \u2013 der Spitzname \u201eder Kurze" war nicht
        zuf\xe4llig. Und doch war seine Wirkung auf den Raum \xfcberw\xe4ltigend.
        Das ist das Paradox der SE8w9: Au\xdfen ruhig und zur\xfcckgenommen,
        innen eine Kraft, die jeden im Raum sp\xfcrte.</p>
        <p class="vb-intro"><strong>b) Unlesbar f\xfcr Feinde:</strong>
        Riinas Feinde konnten seine Absichten selten rechtzeitig erkennen.
        Der Neunerfl\xfcgel tarnt die Acht \u2013 er nimmt ihr die offene Aggressivit\xe4t,
        die einen warnen w\xfcrde. Riina wirkte harmloser, als er war,
        und das war seine gr\xf6\xdfte Waffe.</p>
        <p class="vb-intro"><strong>c) F\xfcrsorgend gegen\xfcber den Seinen:</strong>
        Innerhalb seiner Kerngruppe war Riina loyal und f\xfcrsorgend \u2013 er sch\xfctzte
        seine Familie, sorgte f\xfcr seine Leute. Das ist die Schutzseite der Acht,
        die nach innen eine v\xf6llig andere Qualit\xe4t zeigt als nach au\xdfen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Geerdet und schwer:</strong>
        Riinas Energie war geerdet \u2013 keine Hektik, keine Nervosit\xe4t.
        Die selbsterhaltende Acht wirkt massiv und unverr\u00fcckbar,
        wie jemand, der wei\xdf, dass er nirgendwo hingehen muss,
        weil alles zu ihm kommt.</p>
        <p class="vb-intro"><strong>b) Latente Gef\xe4hrlichkeit:</strong>
        Unter der ruhigen Oberfl\xe4che war eine latente Gef\xe4hrlichkeit sp\xfcrbar,
        die jeden in seiner N\xe4he sp\xfcrte. Die Acht tr\xe4gt immer diese Ladung \u2013
        der Neunerfl\xfcgel h\xe4lt sie zur\u00fcck, bis sie gebraucht wird.</p>
        <p class="vb-intro"><strong>c) Keine verschwendete Energie:</strong>
        <strong>Riina</strong> agierte \xf6konomisch. Keine Auftritte, kein Protz, keine
        unn\xf6tigen Konflikte \u2013 nur Handlungen, die seiner Machtsicherung
        dienten. Das ist SE8-Effizienz: alle Kraft f\xfcr das Wesentliche,
        nichts f\xfcr das Nebens\xe4chliche.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Der Orang-Utan</h3>
        <p class="vb-intro"><strong>a) Zur\xfcckgezogen und territorial:</strong>
        Der Orang-Utan lebt \xfcberwiegend allein, zieht sich in sein Revier zur\xfcck
        und markiert es unsichtbar. Er ben\xf6tigt keine Gruppe, kein Rudel \u2013
        er ist sich selbst genug. Riinas 23 Jahre im Untergrund tragen
        exakt diese Qualit\xe4t: absolute Selbstgen\xfcgsamkeit bei gleichzeitiger
        Kontrolle des gesamten Territoriums.</p>
        <p class="vb-intro"><strong>b) K\xf6rperliche \xdcberlegenheit ohne Aggression zur Schau:</strong>
        Der Orang-Utan ist von \xfcberw\xe4ltigender K\xf6rperkraft \u2013 aber er zeigt
        sie selten. Er lebt ruhig, bis jemand sein Revier betritt oder
        seinen Nachwuchs bedroht. Dann ist die Reaktion absolut und ohne
        Z\u00f6gern. Riinas Eskalationsprinzip folgte derselben Logik:
        keine Aggression als Selbstzweck, aber totale Reaktion bei Bedrohung.</p>
        <p class="vb-intro"><strong>c) Intelligent und langfristig denkend:</strong>
        Orang-Utans gelten als die intelligentesten Menschenaffen nach dem
        Schimpansen \u2013 strategisch, geduldig, mit bemerkenlichem Langzeitged\xe4chtnis.
        Riinas strategische Intelligenz \u2013 der Aufbau von Macht \xfcber Jahrzehnte,
        die Planung und Steuerung komplexer Mafiastrukturen \u2013 spiegelt
        diese Qualit\xe4t: rohe Kraft, kombiniert mit strategischer Tiefe.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Salvatore Riina</strong> verk\xf6rpert die selbsterhaltende Acht in ihrer dunkelsten
        und konsequentesten Auspr\xe4gung: territoriale Macht als einzige Form
        von Sicherheit, kompromisslose Elimination von Bedrohungen, absolute
        Loyalit\xe4t gegen\xfcber dem Kern-Clan. Der Neunerfl\xfcgel macht diese Acht
        besonders gef\xe4hrlich: Er nimmt ihr die Offensichtlichkeit. Riina war
        kein polternder Machtmensch \u2013 er war still, geduldig, geerdet.
        Und genau deshalb kaum zu fassen, bis es zu sp\xe4t war.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Naranjos SE8 \u2013 territoriale Befriedigung:</strong>
        Claudio Naranjo nannte die selbsterhaltende Acht \u201eBefriedigung":
        Sie ist die Acht, die ihre Leidenschaft \u2013 die \xfcbersteigerte Intensit\xe4t
        und den Hunger nach Kontrolle \u2013 direkt auf die materielle und
        territoriale Sicherung richtet. F\xfcr Riina war Macht nicht Statussymbol,
        sondern gelebte Notwendigkeit: Wer in der Welt der Cosa Nostra aufwuchs,
        lernte fr\xfch, dass nur Macht \xfcberleben sichert.</p>
        <p class="vb-intro"><strong>b) Der Neunerfl\xfcgel \u2013 stille Gef\xe4hrlichkeit:</strong>
        Der Neunerfl\xfcgel nimmt der Acht ihre laute, konfrontative Seite und
        gibt ihr Geduld, eine F\xe4higkeit zum Untertauchen und eine scheinbare
        Harmlosigkeit. Riinas 23 Jahre im Verborgenen \u2013 lebend in Wohnungen,
        unter falschen Namen, umgeben von normalen Menschen \u2013 w\xe4ren f\xfcr
        eine \u201ereine" Acht ohne Neunerfl\xfcgel kaum m\xf6glich gewesen.
        Der Fl\xfcgel gab ihm die F\xe4higkeit zur Anpassung und zum Zur\xfcckhalten.</p>
        <p class="vb-intro"><strong>c) Der Corleoneser Mafia-Krieg als SE8-Eskalation:</strong>
        In den 1980er Jahren initiierte Riina den brutalen Vernichtungskrieg
        gegen die traditionelle Mafia-F\xfchrung (die Kommission) und lie\xdf
        rivalisierende Bosse, deren Familien und Verb\u00fcndete systematisch
        t\xf6ten. Das ist SE8-Logik in ihrer extremsten Form: Wenn das Territorium
        bedroht ist, gibt es keine halben Ma\xdfnahmen. Entweder totale Kontrolle
        oder totale Ausl\xf6schung der Bedrohung.</p>
        <p class="vb-intro"><strong>d) Entspannungspunkt Zwei \u2013 F\xfcrsorglichkeit im Inneren:</strong>
        Der Entspannungspunkt der Acht ist die Zwei. Im entspannten Zustand
        \xf6ffnet sich die Acht, wird f\xfcrsorglicher und zugewandter.
        Riinas tiefe Loyalit\xe4t und F\xfcrsorglichkeit gegen\xfcber seiner Familie
        und seinen engsten Vertrauten \u2013 seine Frau, seine Kinder lebten
        jahrelang mit ihm im Versteck \u2013 ist dieses Zweiermuster:
        Im innersten Kreis war Riina ein anderer Mensch als nach au\xdfen.</p>
        <p class="vb-intro"><strong>e) Stressmuster F\u00fcnf \u2013 totaler R\xfcckzug:</strong>
        Unter extremem Stress geht die Acht in den Stressmuster-Punkt der F\xfcnf:
        Sie zieht sich zur\xfcck, wird isoliert, abschottend, beobachtend.
        Riinas jahrzehntelanger Untergrund tr\xe4gt auch diese Qualit\xe4t:
        die F\xfcnfer-F\xe4higkeit zur v\xf6lligen Isolation und R\xfcckzug als
        Strategie des \xdcberlebens.</p>
        <p class="vb-intro"><strong>f) Macht ohne Repr\xe4sentation:</strong>
        <strong>Riina</strong> prunkte nicht. Keine Villen, keine \xf6ffentlichen Auftritte,
        kein Protz \u2013 er lebte schlicht. Das unterscheidet die SE8 von
        anderen Machttypen: Macht ist f\xfcr sie Sicherheitsinstrument,
        nicht B\u00fchne. Der Orang-Utan baut keinen Palast \u2013
        er beansprucht den Wald.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die selbsterhaltende Acht im Vergleich: Wie sich Wollust bei den drei Achter-Subtypen unterschiedlich ausdr\xfcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE8, SO8, SX8 \u2013 27 Charakterprofile im \xdcberblick.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 8 ausf\xfchrlich portr\xe4tiert \u2013 Wollust, Macht und der Heilungsweg \xfcber echte St\xe4rke ohne Kontrollzwang.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Salvatore Riina wurde in zahlreichen Prozessen wegen Mordes und Mafia-Zugeh\u00f6rigkeit zu mehrfacher lebenslanger Haft verurteilt und starb 2017 in Gefangenschaft. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-jeffrey-dahmer", label:"Kriminalpsychologie: Jeffrey Dahmer"},
        {route:"kriminalpsychologie-anders-breivik", label:"Kriminalpsychologie: Anders Breivik"},
        {route:"blickqualitaet", label:"Blickqualit\xe4t der 9 Typen"},
        {route:"krankheitsportraets-salvatore-riina", label:"Krankheitsporträt: Salvatore Riina (SE8w9) – gesundheitlicher Verfall in Haft"},
      ])}
    </div>
  `);
}

function jeffreyEpsteinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Jeffrey Epstein \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/jeffrey-epstein-portrait.jpg" alt="Jeffrey Epstein \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jeffrey Epstein</p>
        <p class="krim-portrait-typ">SX8w9 \u00b7 Sexueller Typ 8 mit Neunerfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">US-amerikanischer Finanzier und Sexualstraft\u00e4ter \u00b7 Tierentsprechung: Krokodil</p>
      </div>

      <p class="psycho-intro">
        <strong>Jeffrey Epstein</strong>, Finanzier und Netzwerker, wurde 2019 wegen Sexhandels
        mit Minderj\xe4hrigen verhaftet und starb noch vor seinem Prozess unter
        ungekl\xe4rten Umst\xe4nden in Untersuchungshaft. Jahrzehntelang hatte er
        ein Netzwerk aus Macht, Geld und Abh\xe4ngigkeit aufgebaut: Er verband
        Politiker, Akademiker, Royals und Unternehmer miteinander \u2013 und nutzte
        diese Verbindungen, um sich selbst unantastbar zu machen. Sein System
        basierte nicht auf offenem Zwang, sondern auf Verf\xfchrung, Einbindung
        und dem stillen Bewusstsein: Wer einmal Teil dieses Netzwerks ist,
        kommt nicht mehr heraus. Epsteins Fall ist einer der dunkelsten Belege
        daf\xfcr, wie die sexuelle Acht Macht nicht durch Konfrontation,
        sondern durch Besitz aus\xfcbt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Jeffrey Epstein</strong> wird der <strong>Sexuellen Acht mit Neunerfl\xfcgel</strong>
        im Enneagramm zugeordnet. Die Leidenschaft der Acht ist <em>Wollust</em> \u2013
        als \xfcberschie\xdfende Intensit\xe4t und Hunger nach Besitz und Kontrolle.
        Die sexuelle Acht (SX8) richtet diese Energie auf das Feld der Intimit\xe4t
        und Verschmelzung: Sie will Menschen besitzen, in ihre Welt einbinden,
        abh\xe4ngig machen. Anders als die soziale oder selbsterhaltende Acht
        dominiert sie nicht durch Territorium oder Hierarchie, sondern durch
        pers\xf6nliche Bindung und Einfluss. Der Neunerfl\xfcgel verleiht ihr eine
        \xe4u\xdfere Sanftheit, Zug\xe4nglichkeit und Unauff\xe4lligkeit \u2013 eine H\u00fclle,
        die die eigentliche Gef\xe4hrlichkeit verbirgt, bis es zu sp\xe4t ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\xe4t</h3>
        <p class="vb-intro"><strong>a) Einnehmend und kalkulierend:</strong>
        Epsteins Blick war, so beschreiben es Zeitzeugen, direkt und einnehmend \u2013
        er signalisierte Interesse, Aufmerksamkeit, Bedeutsamkeit.
        Die sexuelle Acht nutzt den Blick als Werkzeug der Verf\xfchrung:
        Sie l\xe4sst das Gegen\xfcber sp\xfcren, dass es gesehen und gew\xfcnscht wird.</p>
        <p class="vb-intro"><strong>b) Ruhig und selbstsicher:</strong>
        Kein Rasen, keine Nervosit\xe4t \u2013 der Neunerfl\xfcgel gibt dem Blick
        eine Ruhe, die Vertrauen erzeugt. Epstein wirkte nie gierig oder
        bedrohlich auf den ersten Blick. Genau das machte ihn zug\xe4nglich
        f\xfcr Menschen, die sonst vorsichtig gewesen w\xe4ren.</p>
        <p class="vb-intro"><strong>c) Grenzenloses Interesse:</strong>
        Er schien wirklich neugierig \u2013 auf Ideen, Menschen, Verbindungen.
        Die sexuelle Acht will alles und jeden kennen, weil Wissen
        Macht bedeutet. Dieses scheinbar echte Interesse war sein
        wirksamster Verf\u00fchrungskanal.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Netzwerk als Machtsystem:</strong>
        <strong>Epstein</strong> baute kein Unternehmen \u2013 er baute ein Netzwerk aus
        gegenseitiger Kompromittierung. Jede Verbindung, die er kn\xfcpfte,
        war potenziell ein Instrument der Kontrolle.
        Das ist SX8 in ihrer systemischen Auspr\xe4gung: Besitz
        nicht von Dingen, sondern von Menschen und Geheimnissen.</p>
        <p class="vb-intro"><strong>b) Gro\xdfz\xfcgigkeit als Einbindung:</strong>
        <strong>Epstein</strong> war bekannt f\xfcr seine Gro\xdfz\xfcgigkeit \u2013 Fl\xfcge, Inseln,
        Partys, Verbindungen. Diese Gro\xdfz\xfcgigkeit war kein Altruismus,
        sondern Einbindungsstrategie: Wer Geschenke annimmt, betritt
        das Netzwerk. Die sexuelle Acht kauft keine Loyalit\xe4t \u2013
        sie schafft Abh\xe4ngigkeit.</p>
        <p class="vb-intro"><strong>c) Unantastbarkeit als Ziel:</strong>
        <strong>Epstein</strong> arrangierte sein Leben so, dass er \xfcber dem Gesetz stand.
        Das ist das tiefste Motiv der SE8: nicht Reichtum um seiner selbst
        willen, sondern Sicherheit durch absolute Macht. Niemand kann
        mich ber\xfchren \u2013 das ist das Lebensprinzip der Acht
        in ihrer dunkelsten Auspr\xe4gung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Besitz durch Intimit\u00e4t:</strong>
        Die sexuelle Acht dominiert nicht durch Distanz, sondern durch
        N\xe4he. Epstein wollte Menschen in seinen innersten Kreis ziehen \u2013
        und dieser Kreis war ein K\xe4fig. Das Instrument war Intimit\u00e4t,
        das Ziel war Kontrolle.</p>
        <p class="vb-intro"><strong>b) Doppelleben als Strategie:</strong>
        Nach au\xdfen: Philanthrop, Intellektueller, Netzwerker. Nach innen:
        ein System der Ausbeutung. Der Neunerfl\xfcgel erm\xf6glicht dieses
        Doppelleben \u2013 er gibt der Acht eine soziale H\u00fclle, die
        die rohe Machtstruktur dahinter unsichtbar macht.</p>
        <p class="vb-intro"><strong>c) Gef\xe4hrlichkeit ohne Sichtbarkeit:</strong>
        <strong>Epstein</strong> war nicht laut, nicht offensichtlich bedrohlich.
        Er war charmant, gebildet, vernetzt. Das ist die
        SX8w9 in ihrer gef\xe4hrlichsten Form: Die Acht, die
        man nicht als Acht erkennt \u2013 bis man bereits Teil
        ihres Systems ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Anziehend und gesellschaftsf\xe4hig:</strong>
        <strong>Epstein</strong> war f\xfcr Jahrzehnte eine gesellschaftlich akzeptierte
        Figur in den h\xf6chsten Kreisen. Diese Zugangsberechtigung
        ist der Neunerfl\xfcgel: Er macht die Acht soft genug,
        um \xfcberall hineingelassen zu werden.</p>
        <p class="vb-intro"><strong>b) Undurchdringlich:</strong>
        Trotz fr\xfcherer Verurteilung (2008) blieb Epstein in seinem
        Netzwerk eingebettet. Die Acht sch\xfctzt sich durch
        Gegenseitigkeit \u2013 wer in sein System verstrickt ist,
        hat kein Interesse an seiner Entlarvung.
        Das ist die ultimative Machtstruktur der SX8.</p>
        <p class="vb-intro"><strong>c) Fassadenloser Kern:</strong>
        Wer hinter die Fassade sah, erkannte eine kalte,
        besitzorientierte Struktur ohne Empathie f\xfcr die Opfer.
        Das ist die Acht ohne Heilung: Kraft ohne Mitgef\xfchl,
        Intensit\xe4t ohne R\xfccksicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Saugend und einbindend:</strong>
        Die Energie der sexuellen Acht ist nicht sto\xdfend, sondern
        anziehend. Epstein zog Menschen in seine Welt \u2013 mit Reiz,
        Prestige, dem Versprechen von Zugeh\xf6rigkeit. Wer
        einmal in diesem Sog war, kam nur schwer heraus.</p>
        <p class="vb-intro"><strong>b) Scheinbare W\xe4rme:</strong>
        Der Neunerfl\xfcgel erzeugt eine f\xfchlbare W\xe4rme und Ruhe.
        Epstein konnte Menschen das Gef\xfchl geben, willkommen
        und bedeutsam zu sein. Diese scheinbare W\xe4rme war
        der Eingangskanal \u2013 nicht K\u00e4lte oder Bedrohung.</p>
        <p class="vb-intro"><strong>c) Latenter Druck:</strong>
        Darunter war stets ein Druck sp\xfcrbar: die Erwartung
        von Gegenleistung, die Unausweichlichkeit des Systems.
        Die Acht gibt nichts ohne Gegenrechnung. Diese
        latente Spannung war der eigentliche Kern
        jeder seiner Beziehungen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Das Krokodil</h3>
        <p class="vb-intro"><strong>a) Scheinbare Unbeweglichkeit:</strong>
        Das Krokodil liegt still \u2013 geduldig, fast unsichtbar,
        halb unter der Oberfl\xe4che. Es sendet kein Signal
        der Bedrohung. Epsteins gesellschaftliche Erscheinung
        hatte genau diese Qualit\xe4t: ruhig, geduldig, scheinbar
        harmlos \u2013 und dabei immer in Position.</p>
        <p class="vb-intro"><strong>b) Uralte Raubtierintelligenz:</strong>
        Das Krokodil ist eines der \xe4ltesten \xdcberlebewesen der Erde \u2013
        seine Jagdstrategie hat sich \xfcber Millionen Jahre bew\xe4hrt.
        Keine Hektik, keine Improvisation. Epsteins Netzwerk
        war \xe4hnlich: jahrzehntelang aufgebaut, pr\xe4zise in
        seiner Funktionsweise, ern\xfcchternd effektiv.</p>
        <p class="vb-intro"><strong>c) Zupacken ohne Vorwarnung:</strong>
        Wenn das Krokodil zuschnappt, gibt es keine Gnade
        und kein Entkommen. Epsteins System funktionierte
        nach derselben Logik: Der Moment des Zugreifens
        kam, wenn das Opfer bereits nah genug war.
        Bis dahin: Stille, Geduld, scheinbare Harmlosigkeit.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Jeffrey Epstein</strong> verk\xf6rpert die sexuelle Acht in ihrer systemischsten
        und verborgensten Auspr\xe4gung. Keine offene Gewalt, keine sichtbare
        Bedrohung \u2013 sondern ein Netzwerk aus Einbindung, Kompromittierung
        und gegenseitiger Abh\xe4ngigkeit, das er \xfcber Jahrzehnte pr\xe4zise
        aufbaute. Der Neunerfl\xfcgel gab ihm die H\u00fclle: Charme,
        Zug\xe4nglichkeit, scheinbare W\xe4rme. Der Achter-Kern war
        kompromissloser Besitz \u2013 von Menschen, Geheimnissen
        und Macht.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Naranjos SX8 \u2013 Besitz durch Verschmelzung:</strong>
        Claudio Naranjo beschrieb die sexuelle Acht als den Subtyp,
        der Macht \xfcber den Bereich des Pers\xf6nlichen und Intimen aus\xfcbt.
        Die SX8 will nicht nur dominieren \u2013 sie will besitzen,
        einschlie\xdfen, zur eigenen Welt machen. Epsteins System
        war die kriminelle Auspr\xe4gung dieses Musters: Menschen wurden
        nicht nur benutzt, sondern in sein Netz eingebunden \u2013
        als Ressourcen, Komplizen, Geiseln.</p>
        <p class="vb-intro"><strong>b) Der Neunerfl\xfcgel als soziale Tarnung:</strong>
        Ohne den Neunerfl\xfcgel w\xe4re Epstein vielleicht sichtbarer
        gef\xe4hrlich gewesen. Der Fl\xfcgel gab ihm Anpassungsf\xe4higkeit,
        gesellschaftliche Kompatibilit\xe4t und eine \xe4u\xdfere Harmlosigkeit,
        die ihn in die h\xf6chsten Kreise einf\xfchrte. Er war der
        Freund, dem man vertraute \u2013 und der dieses Vertrauen
        systematisch zur Kontrolle nutzte.</p>
        <p class="vb-intro"><strong>c) Macht als Schutz \u2013 das Grundmotiv der Acht:</strong>
        Jede Acht hat in ihrer Tiefe die gleiche Urwunde: die Erfahrung,
        dass Schw\xe4che gef\xe4hrlich ist. Die Antwort der Acht ist
        absolute Macht als Schutzschild. Epstein systematisierte
        dies: Er wurde so m\xe4chtig und so tief in Netzwerke
        eingebettet, dass eine Anklage jahrzehntelang unm\xf6glich
        schien. Das Machtgeb\xe4ude war sein pers\xf6nlicher Schutzwall.</p>
        <p class="vb-intro"><strong>d) Gegenseitige Kompromittierung als System:</strong>
        Das Geniale und Erschreckende an Epsteins Netzwerk war
        seine Selbststabilit\xe4t: Jeder, der eingebunden war,
        hatte ein Interesse daran, dass das System bestehen bleibt.
        Das ist SX8-Strategie auf h\xf6chstem Niveau: Macht durch
        geteilte Schuld, Stabilit\xe4t durch Mitverantwortung.</p>
        <p class="vb-intro"><strong>e) Entspannungspunkt Zwei \u2013 die verdrehte F\xfcrsorglichkeit:</strong>
        Der Entspannungspunkt der Acht ist die Zwei. In gesunder
        Form bedeutet das \xd6ffnung, F\xfcrsorglichkeit, echte N\xe4he.
        Bei Epstein zeigte sich dieses Muster verzerrt: Er agierte
        als Wohlt\xe4ter, als F\u00f6rderer \u2013 eine Zwei-Maske \xfcber dem
        Achter-Kern. Die scheinbare F\xfcrsorglichkeit war
        Einbindungsstrategie, keine echte Zuwendung.</p>
        <p class="vb-intro"><strong>f) Unvollendeter Prozess \u2013 die offene Wunde:</strong>
        Epsteins Tod in Haft 2019 \u2013 ob Suizid oder Mord bleibt
        ungekl\xe4rt \u2013 hinterlie\xdf eines der gr\xf6\xdften ungel\xf6sten
        R\xe4tsel der j\xfcngeren Geschichte: Wer wusste was, wer
        war wie eingebunden? Das Netzwerk \xfcberlebte seinen Architekten.
        Die SX8 schafft Strukturen, die \xfcber den Einzelnen hinaus
        weiterbestehen \u2013 das ist sowohl ihre gr\xf6\xdfte St\xe4rke
        als auch ihr dunkelster Ausdruck.</p>
      </div>

      <div style="max-width:100%;margin-top:2rem;margin-bottom:2rem;">
        <p style="font-size:0.78rem;color:var(--copper);text-transform:uppercase;letter-spacing:0.09em;margin:0 0 0.5rem;font-weight:700;">David L. Rathmer: Pers\u00f6nlichkeitsanalyse Jeffrey Epstein (SX8)</p>
        <div style="position:relative;aspect-ratio:16/9;border-radius:12px;overflow:hidden;background:#000;">
          <iframe width="100%" height="100%" style="border:none;display:block;"
            src="https://www.youtube.com/embed/XnS_8QaUL8Y?rel=0"
            allow="encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die sexuelle Acht im Vergleich: Wie sich Wollust bei den drei Achter-Subtypen unterschiedlich ausdr\xfcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE8, SO8, SX8 \u2013 27 Charakterprofile im \xdcberblick.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 8 ausf\xfchrlich portr\xe4tiert \u2013 Wollust, Macht und der Heilungsweg \xfcber echte St\xe4rke ohne Kontrollzwang.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Jeffrey Epstein bekannte sich 2008 in einem ersten Verfahren schuldig. Ein zweites Verfahren wurde durch seinen Tod in Untersuchungshaft 2019 beendet. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-salvatore-riina", label:"Kriminalpsychologie: Salvatore Riina"},
        {route:"kriminalpsychologie-harvey-weinstein", label:"Kriminalpsychologie: Harvey Weinstein"},
        {route:"blickqualitaet", label:"Blickqualit\xe4t der 9 Typen"},
      ])}
    </div>
  `);
}

function samuelBankmanFriedPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Samuel Bankman-Fried \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/samuel-bankman-fried-portrait.jpg" alt="Samuel Bankman-Fried \u2013 Bleistiftzeichnung" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Samuel Bankman-Fried</p>
        <p class="krim-portrait-typ">SE3w4 \u00b7 Selbsterhaltender Typ 3 mit Viererfl\u00fcgel</p>
      </div>
      <p class="psycho-intro">
        <strong>Samuel \u201eSam" Bankman-Fried</strong>, geboren am 5. M\u00e4rz 1992,
        war der Gr\u00fcnder und CEO der Kryptow\u00e4hrungsb\u00f6rse FTX sowie Gr\u00fcnder
        von Alameda Research, einer Handelsfirma f\u00fcr Kryptow\u00e4hrungen.
        FTX galt als eine der gr\u00f6\u00dften und erfolgreichsten Plattformen
        im Kryptobereich, bis sie im November 2022 aufgrund massiver
        finanzieller Unregelm\u00e4\u00dfigkeiten zusammenbrach und Insolvenz anmeldete.
        Bankman-Fried wurde beschuldigt, Kundengelder in Milliardenh\u00f6he
        von FTX zu Alameda Research umgeleitet zu haben,
        um riskante Handelsgesch\u00e4fte zu finanzieren und damit
        pers\u00f6nliche Gewinne zu erzielen.
        Dies f\u00fchrte zu einem massiven Verlust der Anlegergelder
        und stellt einen der gr\u00f6\u00dften Betrugsf\u00e4lle in der Kryptowelt dar.
        Anfang 2022 hatte FTX auf dem H\u00f6hepunkt eine Bewertung
        von 32 Milliarden Dollar erreicht.
        Im Jahr 2023 wurde Bankman-Fried wegen Betrugs
        und weiterer finanzieller Vergehen zu 25 Jahren Haft verurteilt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Samuel Bankman-Fried</strong> wird dem <strong>Selbsterhaltenden Typ 3 mit Viererfl\u00fcgel</strong>
        im Enneagramm zugeordnet. Die Leidenschaft der Drei ist <em>Eitelkeit</em> \u2013
        das tiefe Bed\u00fcrfnis, durch Leistung und Erfolg zu existieren,
        das eigene Bild konsequent auf Wirkung auszurichten
        und Gef\u00fchle dem Funktionieren unterzuordnen.
        Die selbsterhaltende Drei (SE3) richtet diese Energie
        auf materielle Sicherheit, Effizienz und praktischen Erfolg \u2013
        sie ist weniger auf \u00f6ffentliche Bewunderung als auf
        tats\u00e4chliche Leistungsf\u00e4higkeit ausgerichtet.
        Der Viererfl\u00fcgel verleiht ihr Tiefe, emotionale Intensit\u00e4t
        und eine Sehnsucht nach Bedeutung jenseits des blo\u00dfen Erfolgs:
        Der SE3w4er will nicht nur gewinnen, er will,
        dass sein Gewinn etwas bedeutet.
        Bei Bankman-Fried verschmolzen diese Elemente
        zu einer Figur, die sich als altruistischen Vorreiter inszenierte,
        w\u00e4hrend sie im Verborgenen die Grundlagen
        des eigenen Erfolgs zerst\u00f6rte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\u00e4t</h3>
        <p class="vb-intro"><strong>a) Schlau und wachsam:</strong>
        <strong>Sam Bankman-Fried</strong> zeichnete sich durch einen
        analytischen und scharfen Blick aus.
        Er war stets darauf bedacht, die M\u00e4rkte zu durchleuchten
        und Chancen zu erkennen.
        Dieser durchdringende Blick spiegelte seine hohe Intelligenz
        und seine F\u00e4higkeit wider, komplexe Sachverhalte
        schnell zu erfassen.</p>
        <p class="vb-intro"><strong>b) Tarnung hinter Gelassenheit:</strong>
        Trotz der enormen Verantwortung und des Drucks
        wirkte sein Blick oft ruhig und entspannt \u2013
        Teil seiner Strategie, Vertrauen zu schaffen
        und Risiken zu verschleiern.
        Diese Gelassenheit half ihm, seine wahre Agenda
        und seine problematischen Handlungen zu verbergen,
        w\u00e4hrend er nach au\u00dfen als moralisch vorbildlicher
        Unternehmer erschien.</p>
        <p class="vb-intro"><strong>c) Unberechenbare Momente:</strong>
        In kritischen Situationen zeigte sein Blick eine Unsicherheit,
        die darauf hindeutete, dass er sich in einem st\u00e4ndigen
        inneren Konflikt befand \u2013 zwischen dem Streben nach Erfolg
        und dem Bewusstsein f\u00fcr die moralische Dimension
        seines Handelns.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Erfolgsorientierung:</strong>
        <strong>Bankman-Fried</strong> war getrieben von einem enormen Ehrgeiz
        und einem unabl\u00e4ssigen Streben nach Erfolg.
        Als Vertreter der selbsterhaltenden Drei
        strebte er nach \u00e4u\u00dferem Erfolg, Anerkennung und Status,
        wobei ihm die Mittel, diese Ziele zu erreichen,
        zunehmend sekund\u00e4r erschienen.</p>
        <p class="vb-intro"><strong>b) Fassade der Bescheidenheit:</strong>
        Er pflegte ein Image von Bescheidenheit und Uneigenn\u00fctzigkeit \u2013
        er spendete f\u00fcr wohlt\u00e4tige Zwecke,
        trat in abgetragenen Kleidern und mit ungek\u00e4mmtem Wuschelkopf auf
        und wurde von der \u00d6ffentlichkeit weithin nur als \u201eSBF" bezeichnet.
        Dieses Image half ihm, sich als moralisch \u00fcberlegenen Unternehmer
        darzustellen, was jedoch letztlich eine Fassade war,
        hinter der sich skrupellose finanzielle Manipulationen verbargen.</p>
        <p class="vb-intro"><strong>c) Revolution\u00e4rer Anspruch:</strong>
        <strong>Bankman-Fried</strong> hatte den Anspruch,
        die Kryptom\u00e4rkte und das Finanzsystem zu revolutionieren \u2013
        typisch f\u00fcr den Ehrgeiz der selbsterhaltenden Drei.
        Seine hochgesteckten Ziele waren jedoch oft
        von der Realit\u00e4t entkoppelt und f\u00fchrten
        zu riskanten Handlungen, die das gesamte System destabilisierten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Manipulation zur Zielerreichung:</strong>
        Ein Hauptmerkmal von <strong>Bankman-Fried</strong>
        war seine F\u00e4higkeit, Menschen zu manipulieren,
        um seine Ziele zu erreichen.
        Er schuf Vertrauen bei Investoren und Partnern,
        w\u00e4hrend er hinter den Kulissen Gelder umverteilte
        und Risiken einging, die er nach au\u00dfen verschwieg.</p>
        <p class="vb-intro"><strong>b) Pragmatische Kreativit\u00e4t:</strong>
        Er bewies eine au\u00dfergew\u00f6hnliche F\u00e4higkeit,
        kreative L\u00f6sungen f\u00fcr komplexe Probleme im Kryptohandel zu finden.
        Diese pragmatische Kreativit\u00e4t war jedoch oft
        auf kurzfristigen Erfolg ausgerichtet
        und ignorierte systematisch die langfristigen Konsequenzen
        f\u00fcr die Anleger und das System als Ganzes.</p>
        <p class="vb-intro"><strong>c) Anpassungsf\u00e4higkeit:</strong>
        <strong>Sam Bankman-Fried</strong> war \u00e4u\u00dferst anpassungsf\u00e4hig \u2013
        sowohl in seinem Auftreten als auch in seinen Gesch\u00e4ftsstrategien.
        Diese F\u00e4higkeit, sich flexibel an wechselnde Marktbedingungen anzupassen,
        war ein wesentlicher Grund f\u00fcr seinen rasanten Aufstieg
        und verschleierte lange die strukturellen Risse im System.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Vertrauenserweckend:</strong>
        Seine gelassene und scheinbar bescheidene Au\u00dfenwirkung
        schuf ein Bild von Zuverl\u00e4ssigkeit und Kompetenz.
        Mit seinem ungek\u00e4mmten Wuschelkopf und betont nachl\u00e4ssiger Kleidung
        wurde <strong>SBF</strong> als schrulliges Unternehmergenie wahrgenommen.
        Viele Investoren und Partner vertrauten auf seine Expertise
        und seine scheinbar altruistischen Absichten.</p>
        <p class="vb-intro"><strong>b) Unauff\u00e4llige Autorit\u00e4t:</strong>
        Er f\u00fchrte FTX und Alameda Research
        mit einer Mischung aus sanfter Autorit\u00e4t
        und intellektuellem F\u00fchrungsstil,
        wodurch er eine starke, aber zur\u00fcckhaltende Pr\u00e4senz erzeugte \u2013
        eine F\u00fchrungswirkung, die niemanden zu bedrohen schien
        und eben deshalb kaum hinterfragt wurde.</p>
        <p class="vb-intro"><strong>c) Doppelgesichtigkeit:</strong>
        W\u00e4hrend er \u00f6ffentlich als Vorreiter f\u00fcr eine bessere finanzielle Zukunft
        seiner Anleger und Kunden auftrat,
        spiegelte sich hinter den Kulissen ein h\u00f6chst berechnender
        und eigenn\u00fctziger Umgang mit Risiken wider \u2013
        ein Muster, das erst beim Zusammenbruch
        in seiner vollen Dimension sichtbar wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Hohes Energieniveau:</strong>
        Trotz seiner ruhigen Ausstrahlung zeigte <strong>Bankman-Fried</strong>
        eine immense Energie und Begeisterung f\u00fcr die Kryptowelt.
        Seine Energie speiste sich aus dem st\u00e4ndigen Streben nach Erfolg
        und dem Wettlauf, den n\u00e4chsten gro\u00dfen Durchbruch zu erzielen.</p>
        <p class="vb-intro"><strong>b) Zersetzende Kraft:</strong>
        Diese Energie besa\u00df jedoch eine destruktive Seite,
        die sich in den gef\u00e4hrlichen Finanzgesch\u00e4ften
        und der Umleitung von Kundengeldern widerspiegelte.
        Die gleiche Energie, die ihm half, seine Unternehmen aufzubauen,
        f\u00fchrte letztlich zu deren Untergang.</p>
        <p class="vb-intro"><strong>c) Getrieben von inneren Unsicherheiten:</strong>
        Seine \u00e4u\u00dfere Ruhe und Energie kaschierten
        eine tiefe innere Unsicherheit und das Bed\u00fcrfnis
        nach Anerkennung und Best\u00e4tigung f\u00fcr seine Leistungen.
        Der Viererfl\u00fcgel der Drei erzeugt genau diese Spannung:
        Er will nicht nur erfolgreich sein,
        er will, dass der Erfolg ihn als bedeutsam ausweist \u2013
        und f\u00fcrchtet zutiefst, dass er es nicht ist.
        Diese verborgene Angst f\u00fchrte zu riskanten Entscheidungen,
        die am Ende alles zerst\u00f6rten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tierentsprechung: Der Waschb\u00e4r</h3>
        <p class="vb-intro"><strong>a) Geschicklichkeit und Anpassungsf\u00e4higkeit:</strong>
        Wie ein Waschb\u00e4r war <strong>SBF</strong> \u00e4u\u00dferst geschickt darin,
        sich den Gegebenheiten anzupassen und kreative Wege zu finden,
        um seine Ziele zu erreichen.
        Er war ein Meister darin, vorhandene Ressourcen zu nutzen,
        um kurzfristige Gewinne zu erzielen \u2013
        flexibel, findig und stets auf der Suche
        nach der n\u00e4chsten Gelegenheit.</p>
        <p class="vb-intro"><strong>b) Verborgenes Handeln:</strong>
        Der Waschb\u00e4r ist bekannt daf\u00fcr,
        unauff\u00e4llig und im Verborgenen zu agieren.
        In \u00e4hnlicher Weise handelte <strong>Bankman-Fried</strong>
        hinter den Kulissen und verschleierte seine wahre Agenda,
        w\u00e4hrend er sich nach au\u00dfen als moralisch vorbildlich darstellte.</p>
        <p class="vb-intro"><strong>c) Fassade des Vertrauens:</strong>
        \u00c4hnlich wie der Waschb\u00e4r, der harmlos und neugierig wirkt,
        baute <strong>Samuel Bankman-Fried</strong> ein Image auf,
        das Vertrauen erweckte.
        Doch hinter dieser Fassade verbarg sich
        ein zutiefst manipulativer und eigenn\u00fctziger Antrieb,
        der erst im Moment des Zusammenbruchs vollst\u00e4ndig sichtbar wurde.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Samuel Bankman-Fried</strong> verk\u00f6rpert viele der negativen Aspekte
        der selbsterhaltenden Drei im Enneagramm.
        Sein \u00fcberm\u00e4chtiger Drang nach Erfolg und Anerkennung
        trieb ihn dazu, moralische Grenzen zu \u00fcberschreiten
        und immense Risiken einzugehen.
        Er baute ein \u00f6ffentliches Image als bescheidener, altruistischer Unternehmer auf,
        w\u00e4hrend er im Hintergrund finanzielle Manipulationen durchf\u00fchrte,
        die letztlich zum Untergang seiner Unternehmen f\u00fchrten.
        Wie der Waschb\u00e4r war er geschickt, anpassungsf\u00e4hig
        und in der Lage, sich im Verborgenen zu bewegen.
        Doch seine inneren Unsicherheiten und der unstillbare Hunger
        nach Anerkennung und Best\u00e4tigung
        f\u00fchrten zu einem Betrugsfall von gigantischem Ausma\u00df.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\u00e4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) SE3 \u2013 der Kontratyp:</strong>
        Die selbsterhaltende Drei ist der Kontratyp \u2013
        der Einser-Subtyp der Drei, der am wenigsten
        nach einer Drei aussieht.
        Der SE3er will nicht bewundert werden;
        er will liefern, funktionieren, gewinnen.
        <strong>Bankman-Frieds</strong> gesamter Auftritt \u2013
        die zerknitterten Shorts, das ungek\u00e4mmte Haar,
        das absichtlich Unfertige \u2013 war die Inszenierung
        von Effizienz als Wert: Ich tue nicht so,
        als w\u00fcrde ich gut aussehen, ich tue Dinge, die z\u00e4hlen.
        Das ist die SE3 als Selbstbild.</p>
        <p class="vb-intro"><strong>b) Der Viererfl\u00fcgel und das altruistische Narrativ:</strong>
        Der Viererfl\u00fcgel der Drei bringt das Bed\u00fcrfnis nach Tiefe,
        nach Bedeutung, nach einer Geschichte,
        die \u00fcber blo\u00dfen Erfolg hinausgeht.
        <strong>Bankman-Fried</strong> fand dieses Narrativ
        im Effektiven Altruismus:
        Er verdiene so viel wie m\u00f6glich,
        um so viel wie m\u00f6glich zu spenden.
        Dieses Narrativ war nicht vollst\u00e4ndig verlogen \u2013
        aber es war auch das perfekte Schutzschild
        gegen jede kritische Nachfrage nach seinen Methoden.</p>
        <p class="vb-intro"><strong>c) Desintegration in die Neun:</strong>
        Der Stresspunkt der Drei ist die Neun:
        R\u00fcckzug, Bet\u00e4ubung, Handlungslosigkeit.
        <strong>Bankman-Fried</strong> zeigte im Prozess und in Interviews
        eine eigenartige Gelassenheit,
        die Beobachter irritierte \u2013
        keine dramatische Reue, kein Zusammenbruch,
        eine fast passive Akzeptanz.
        Das ist die Drei in der Desintegration:
        Wenn Erfolg nicht mehr m\u00f6glich ist,
        schaltet sie ab.</p>
        <p class="vb-intro"><strong>d) Vergleich mit Ruja Ignatova (SE3w4):</strong>
        Beide sind selbsterhaltende Dreien mit Viererfl\u00fcgel,
        beide im Kryptobereich t\u00e4tig,
        beide mit einer narrativen H\u00fclle um ihr Vergehen:
        Ignatova als \u201eCryptoqueen", <strong>Bankman-Fried</strong> als Altruist.
        Der entscheidende Unterschied liegt in der Reaktion
        auf den Zusammenbruch:
        Ignatova verschwand \u2013 konsequente Flucht, radikaler R\u00fcckzug.
        Bankman-Fried blieb, gab Interviews, erkl\u00e4rte sich \u2013
        bis zuletzt im Dreier-Muster des Selbstmanagements
        durch Selbstdarstellung.</p>
        <p class="vb-intro"><strong>e) Effektiver Altruismus als Dreier-Strategie:</strong>
        Die EA-Bewegung (Effective Altruism) bietet
        eine rationale, messbare Ethik \u2013
        genau das, was der Drei entspricht:
        keine unstrukturierte Moral, sondern Effektivit\u00e4t als Ma\u00dfstab.
        <strong>Bankman-Fried</strong> nutzte diese Rahmung
        nicht nur als Legitimation nach au\u00dfen,
        sondern m\u00f6glicherweise auch als
        inneres Beruhigungssystem:
        Der Zweck heiligt die Mittel \u2013
        wenn der Zweck nur gro\u00df genug
        und pr\u00e4zise genug berechnet ist.</p>
        <p class="vb-intro"><strong>f) Das Urteil und die Drei:</strong>
        25 Jahre Haft bedeuten das Ende der B\u00fchne \u2013
        des Marktes, des Startups, der Konferenzen,
        der Interviews. F\u00fcr eine Drei ist
        das Verstummen der Au\u00dfenresonanz
        eine tiefere Strafe als der Freiheitsentzug selbst.
        Was <strong>Bankman-Fried</strong> danach ist,
        wer er ohne Publikum und ohne Leistungsnachweis ist,
        ist die eigentliche Frage \u2013
        die Frage, vor der die Drei ihr ganzes Leben lang flieht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "SE3 im Vergleich mit SO3 und SX3 \u2013 Kontratyp-Dynamik und das Dreier-Muster der Selbsterhaltung.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE3, SO3, SX3 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 3 ausf\u00fchrlich portr\u00e4tiert \u2013 Eitelkeit, Maske und der Heilungsweg \u00fcber echte Authentizit\u00e4t.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Samuel Bankman-Fried wurde 2023 in sieben Anklagepunkten wegen Betrugs schuldig gesprochen und zu 25 Jahren Haft verurteilt. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-ruja-ignatova", label:"Kriminalpsychologie: Ruja Ignatova (SE3w4)"},
        {route:"kriminalpsychologie-pablo-escobar", label:"Kriminalpsychologie: Pablo Escobar (SE3)"},
        {route:"kriminalpsychologie-wade-wilson", label:"Kriminalpsychologie: Wade Wilson (SO3w4)"},
      ])}
    </div>
  `);
}

function rujaIgnatovaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ruja Ignatova \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/ruja-ignatova-portrait.jpg" alt="Ruja Ignatova \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ruja Ignatova</p>
        <p class="krim-portrait-typ">SE3w4 \u00b7 Selbsterhaltender Typ 3 mit Viererfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">Bulgarisch-deutsche Betr\u00fcgerin, \u201eCryptoqueen" \u00b7 Tierentsprechung: Waschb\u00e4r</p>
      </div>

      <p class="psycho-intro">
        <strong>Ruja Ignatova</strong>, die selbsternannte \u201eCryptoqueen", gr\xfcndete 2014 OneCoin \u2013
        eine Kryptow\xe4hrung, die sich als gr\xf6\xdfter Finanzskandal der Geschichte
        entpuppte: \xfcber 4 Milliarden Euro Schaden, Millionen gesch\xe4digter Anleger weltweit.
        Ignatova inszenierte sich als vision\u00e4re Unternehmerin und Wissenschaftlerin,
        trat in Opernh\u00e4usern und Arenen auf, trug funkelnde Abendkleider \u2013
        und baute dabei ein System auf, das auf nichts als Schein und Versprechen basierte.
        2017 verschwand sie spurlos. Sie ist bis heute eine der meistgesuchten
        Personen der Welt \u2013 und nie gefasst worden. Ihr Fall ist eines der
        faszinierendsten Beispiele daf\xfcr, wie die Leidenschaft der Drei,
        verbunden mit der dramatischen Tiefe des Viererfl\xfcgels, ein
        globales Gef\xf6lge aus Gier, Bewunderung und Illusion erzeugen kann.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ruja Ignatova</strong> wird der <strong>Selbsterhaltenden Drei mit Viererfl\xfcgel</strong>
        im Enneagramm zugeordnet. Die Leidenschaft der Drei ist <em>T\xe4uschung</em> \u2013
        das Erschaffen eines Bildes von Erfolg, das den eigentlichen Kern verbirgt.
        Die selbsterhaltende Drei (SE3) richtet diese Energie auf materielle Sicherheit
        und die Absicherung durch Leistung und Ansehen: Sie akkumuliert Ressourcen,
        Status und Einfluss als Schutzwall. Der Viererfl\xfcgel verleiht ihr eine
        dramatische Tiefe, eine Sehnsucht nach Einzigartigkeit und einen Sinn f\xfcr
        Inszenierung, der weit \xfcber den gew\xf6hnlichen Drei-Typus hinausgeht.
        In Ignatovas Fall entstand daraus eine Pers\xf6nlichkeit, die sich nicht nur
        als erfolgreiche Unternehmerin inszenierte, sondern als Vision\xe4rin
        einer neuen Weltfinanzordnung \u2013 k\xfchn, einzigartig, unwiderstehlich.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Blickqualit\xe4t</h3>
        <p class="vb-intro"><strong>a) Selbstsicher und strahlend:</strong>
        Ignatovas Blick auf der B\xfchne war der einer Frau, die keine Zweifel kennt.
        Die Drei projiziert Erfolg \u2013 und Ignatova hatte dieses Handwerk
        perfektioniert: direkter Blickkontakt, ausgestreckte Arme, die Geste
        der Gro\xdfz\xfcgigkeit. Sie sah aus wie jemand, dem man folgen will.</p>
        <p class="vb-intro"><strong>b) Intensiv und magnetisch:</strong>
        Der Viererfl\xfcgel gibt dem Blick eine Intensit\xe4t, die \xfcber das
        reine Leistungssignal hinausgeht. Ignatova strahlte nicht nur Kompetenz
        aus \u2013 sie strahlte Bedeutsamkeit. Dieses \u201eIch bin besonders" ist das
        Erkennungszeichen des Viererfl\xfcgels an der Drei.</p>
        <p class="vb-intro"><strong>c) Abweisend gegen\xfcber Kritik:</strong>
        Wer kritische Fragen stellte, erntete einen Blick, der signalisierte:
        Du verstehst es nicht. Die Drei schirmt ihr Image durch selektive
        Aufmerksamkeit ab \u2013 Skepsis wird ignoriert oder als Unwissenheit gerahmt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Meisterhafte Selbstinszenierung:</strong>
        <strong>Ignatova</strong> verstand Auftritte als Kunstform. Arenas, Opernb\u00fchnen, funkelnde
        Kleider, pathetische Reden \u2013 das war keine Eitelkeit, sondern Kalk\u00fcl.
        Die SE3 wei\xdf: Image ist Kapital. Wer gro\xdf genug wirkt, wird nicht
        in Frage gestellt.</p>
        <p class="vb-intro"><strong>b) Akademische Legitimation als Werkzeug:</strong>
        Sie betonte ihren Doktortitel, ihre Oxford-Ausbildung, ihre intellektuelle
        \u00dcberlegenheit \u2013 und das nicht aus Eitelkeit, sondern als Strategie.
        Die SE3w4 ben\xf6tigt Kompetenzbelege als Schutzwall: Wer die Professorin
        anzweifelt, zweifelt nicht nur am Produkt, sondern an sich selbst.
        Der Viererfl\xfcgel f\xfcgt dabei die Dimension intellektueller Einzigartigkeit
        hinzu: nicht nur erfolgreich, sondern tiefgr\xfcndig anders.</p>
        <p class="vb-intro"><strong>c) Globaler Ma\xdfstab als Schutz:</strong>
        Indem Ignatova ihr System auf alle Kontinente ausdehnte, schuf sie
        eine Komplexit\xe4t, die Aufdeckung erschwerte. Die SE3 sichert sich ab \u2013
        je gr\xf6\xdfer das System, desto schwerer greifbar.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) T\xe4uschung als Identit\xe4t:</strong>
        Die Leidenschaft der Drei ist T\xe4uschung \u2013 nicht notwendigerweise
        als bewusste L\xfcge, sondern als strukturelle Verschmelzung
        mit dem eigenen Bild. Ignatova war ihre Rolle: Die Cryptoqueen
        war keine Maske \u2013 sie war, wer sie sein wollte.</p>
        <p class="vb-intro"><strong>b) Anpassungsf\xe4higkeit als \xdcberlebensstrategie:</strong>
        Als der Druck gr\xf6\xdfer wurde, verschwand Ignatova \u2013 ein radikaler
        Identit\xe4tswechsel. Diese F\xe4higkeit, das eigene Bild vollst\xe4ndig
        zu wechseln, ist die Drei in ihrer extremsten Auspr\xe4gung:
        kein fester Kern, sondern reine Anpassung.</p>
        <p class="vb-intro"><strong>c) Materielle Sicherung als tiefstes Motiv:</strong>
        Hinter der Vision\xe4rin stand eine SE3-Grundmotivation: Akkumulation
        von Ressourcen als Schutz. Milliarden auf Konten, Immobilien,
        Fluchtnetzwerke \u2013 die selbsterhaltende Drei baut ein Sicherheitsnetz
        aus Kapital, das niemand ihr nehmen kann.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) \xdcberw\xe4ltigend und inspirierend:</strong>
        Auf der B\xfchne war Ignatova eine Erscheinung \u2013 charismatisch,
        strahlend, \xfcberzeugend. Die Drei hat die F\xe4higkeit, Energien
        auf sich zu richten und Bewegungen auszul\xf6sen. Millionen folgten ihr.</p>
        <p class="vb-intro"><strong>b) Intellektuell einsch\xfcchernd:</strong>
        Der Viererfl\xfcgel f\xfcgte eine intellektuelle Dimension hinzu,
        die kritische Nachfragen entmutigte. Wer Ignatova in Frage stellte,
        f\xfchlte sich schnell als derjenige, der es schlicht nicht verstand.</p>
        <p class="vb-intro"><strong>c) Fassade ohne Substanz:</strong>
        Wer hinter die Inszenierung schaute, fand: nichts. Keine Blockchain,
        keine Technologie, kein reales Produkt. Nur das Bild \u2013 perfekt
        poliert, vollst\xe4ndig hohl. Das ist die dunkle Seite der Drei:
        Form ohne Inhalt, Erscheinung ohne Wirklichkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Strahlend und mitrei\xdfend:</strong>
        Ignatovas Energie auf der B\xfchne war elektrisch \u2013 sie riss Massen mit.
        Die Drei sendet eine Energie aus, die sagt: Hier passiert etwas Gro\xdfes,
        und du kannst Teil davon sein. Das ist ihr st\xe4rkstes Werkzeug.</p>
        <p class="vb-intro"><strong>b) Dramatisch und emotional aufgeladen:</strong>
        Der Viererfl\xfcgel gibt der Energie eine emotionale Tiefe.
        Ignatova sprach von Mission, von Ver\xe4nderung der Welt, von
        historischer Bedeutung. Diese Dramatik ist SE3w4 pur:
        nicht nur erfolgreich sein, sondern bedeutsam sein.</p>
        <p class="vb-intro"><strong>c) K\xfchl dahinter:</strong>
        Wer n\xe4her heranr\xfcckte, sp\xfcrte die K\xe4lte hinter der Ausstrahlung.
        Ignatova pflegte keine echten Beziehungen \u2013 sie pflegte Anh\xe4ngerschaften.
        Das ist die Drei ohne Heilung: Kontakt als Funktion, nicht als Verbindung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Der Waschb\xe4r</h3>
        <p class="vb-intro"><strong>a) Das Maskengesicht:</strong>
        Der Waschb\xe4r tr\xe4gt von Natur aus eine Maske \u2013 das dunkle
        Fellmuster um die Augen ist sein Erkennungszeichen.
        Ignatova trug ihre Maske mit ebensolcher Selbstverst\xe4ndlichkeit:
        Die Cryptoqueen war nicht ihr Name, sondern ihr Kost\u00fcm \u2013
        und sie lebte ihn vollst\xe4ndig.</p>
        <p class="vb-intro"><strong>b) Geschickte H\xe4nde, die alles nehmen:</strong>
        Waschb\xe4ren sind bekannt f\xfcr ihre erstaunlich geschickten Pfoten \u2013
        sie greifen, pr\xfcfen, nehmen. Ignatovas System war \xe4hnlich:
        pr\xe4zises Greifen nach Kapital, Vertrauen, Netzwerken \u2013
        mit einem Instinkt, der nie zu z\xf6gern schien.</p>
        <p class="vb-intro"><strong>c) Anpassungsf\xe4hig und nachtaktiv:</strong>
        Der Waschb\xe4r lebt in jedem Milieu, pa\xdft sich jedem Umfeld an
        und agiert bevorzugt im Verborgenen. Ignatova operierte
        in Bulgarien, Deutschland, Dubai und verschwand schlie\xdflich
        in der Dunkelheit \u2013 anpassungsf\xe4hig, unauffindbar,
        auf allen Kontinenten zuhause.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Ruja Ignatova</strong> verk\xf6rpert die selbsterhaltende Drei mit Viererfl\xfcgel
        in ihrer dunkelsten und faszinierendsten Auspr\xe4gung: ein System
        aus perfektem Schein, dramatischer Inszenierung und k\xfchler
        Ressourcenakkumulation. Sie war ihre Rolle \u2013 vollst\xe4ndig, \xfcberzeugend,
        global. Und als das System zu kippen drohte, wechselte sie das Bild
        ein letztes Mal: Sie verschwand. Bis heute.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Naranjos SE3 \u2013 Sicherheit durch Leistungsbild:</strong>
        Claudio Naranjo beschrieb die selbsterhaltende Drei als den Subtyp,
        der Sicherheit durch das Bild von Leistung und Erfolg anstrebt.
        Anders als die soziale Drei, die Prestige in der Gruppe sucht,
        akkumuliert die SE3 Ressourcen als Sch\xfctzwall: Geld, Immobilien,
        Netzwerke, die unantastbar machen. Ignatovas Milliarden waren
        nicht Selbstzweck \u2013 sie waren materielle Sicherheit in ihrer
        klarsten Ausprägung.</p>
        <p class="vb-intro"><strong>b) Der Viererfl\xfcgel \u2013 Einzigartigkeit als Marke:</strong>
        Der Viererfl\xfcgel gibt der Drei eine Sehnsucht nach Einzigartigkeit
        und Tiefe, die \xfcber den reinen Leistungsausweis hinausgeht.
        Ignatova wollte nicht nur reich sein \u2013 sie wollte historisch bedeutsam sein.
        Die Cryptoqueen-Inszenierung war Viererfl\xfcgel pur: dramatisch,
        einzigartig, mit dem Anspruch, die Welt zu ver\xe4ndern.</p>
        <p class="vb-intro"><strong>c) T\xe4uschung als Leidenschaft \u2013 nicht als Zynismus:</strong>
        Die Leidenschaft der Drei ist T\xe4uschung \u2013 aber das bedeutet nicht,
        dass Ignatova zynisch l\xfcgte. Wahrscheinlicher ist das klassische
        Dreier-Muster: Sie glaubte selbst an ihre Rolle, zumindest zeitweise.
        Die Drei verschmilzt mit ihrem Image \u2013 die Grenze zwischen
        Rolle und Selbst verschwimmt. Das macht sie noch \xfcberzeugender
        und noch gef\xe4hrlicher.</p>
        <p class="vb-intro"><strong>d) Das Verschwinden als Drei-Strategie:</strong>
        Wenn das Image kollabiert, hat die Drei keine Alternative:
        Sie muss verschwinden oder sich vollst\xe4ndig neu erfinden.
        Ignatova w\xe4hlte das Verschwinden \u2013 den radikalsten
        Identit\xe4tswechsel. Wo die Acht k\xe4mpft und die Sechs fl\xfcchtet,
        wechselt die Drei das Kost\u00fcm und tritt von der B\xfchne.</p>
        <p class="vb-intro"><strong>e) Entspannungspunkt Sechs \u2013 Loyalit\xe4t und Zweifel:</strong>
        Der Entspannungspunkt der Drei ist die Sechs. In gesunder Form
        bedeutet das: Verbindlichkeit, Loyalit\xe4t, echtes Vertrauen in andere.
        Bei Ignatova zeigte sich dieser Punkt verzerrt: Sie hielt
        ein enges Netzwerk aus Vertrauten (ihr Bruder, Anw\xe4lte, Helfer),
        die ihr selbst unter Druck die Stange hielten \u2013
        eine Sechserstruktur im Dienst der Dreier-Mission.</p>
        <p class="vb-intro"><strong>f) Die offene Geschichte:</strong>
        Anders als alle anderen Portr\xe4ts in dieser Reihe ist Ignatovas
        Geschichte nicht abgeschlossen. Sie ist auf der Flucht.
        Das FBI, Interpol und zahlreiche Beh\xf6rden suchen sie.
        Die Cryptoqueen existiert noch \u2013 irgendwo, in irgendeiner
        neuen Rolle. Das ist das letzte, dunkelste Kapitel der SE3w4:
        die Drei, die nie aufh\xf6rt, sich neu zu erschaffen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die selbsterhaltende Drei im Vergleich: Wie sich T\xe4uschung bei den drei Dreier-Subtypen unterschiedlich ausdr\xfcckt.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE3, SO3, SX3 \u2013 27 Charakterprofile im \xdcberblick.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 3 ausf\xfchrlich portr\xe4tiert \u2013 T\xe4uschung, Image und der Heilungsweg \xfcber echte Authentizit\xe4t.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Ruja Ignatova ist seit 2017 international gesucht. Gegen sie liegt ein Haftbefehl wegen Betrugs, Geldw\u00e4sche und Konspirationsverg\u00e4ngen vor. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-pablo-escobar", label:"Kriminalpsychologie: Pablo Escobar"},
        {route:"kriminalpsychologie-luka-magnotta", label:"Kriminalpsychologie: Luka Magnotta"},
        {route:"blickqualitaet", label:"Blickqualit\xe4t der 9 Typen"},
      ])}
    </div>
  `);
}

function johnWayneGacyPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("John Wayne Gacy \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/john-wayne-gacy-portrait.jpg" alt="John Wayne Gacy \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Wayne Gacy</p>
        <p class="krim-portrait-typ">SE2w3 \u00b7 Selbsterhaltender Typ 2 mit Dreierfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">US-amerikanischer Serienm\u00f6rder, \u201eKiller Clown" \u00b7 Tierentsprechung: Flusspferd</p>
      </div>

      <p class="psycho-intro">
        <strong>John Wayne Gacy</strong> ist einer der bekanntesten Serienm\u00f6rder der amerikanischen
        Geschichte. Zwischen 1972 und 1978 ermordete er mindestens 33 junge M\u00e4nner
        und Jugendliche im Raum Chicago \u2013 die meisten wurden unter dem Kriechkeller
        seines Hauses begraben. Was den Fall Gacy von anderen Serienm\u00f6rdern unterscheidet,
        ist die radikale Diskrepanz zwischen seiner \xf6ffentlichen Erscheinung
        und seiner verborgenen Wirklichkeit: Er war Unternehmer,
        demokratischer Bezirkshauptmann, Mitglied lokaler B\xfcrgerkomitees,
        Organisator von Nachbarschaftsfesten \u2013 und er trat als Clown auf,
        um Kindern auf Wohlt\xe4tigkeitsveranstaltungen zu unterhalten.
        Der \u201eKiller Clown" steht wie kein anderer Fall f\xfcr die dunkle Seite
        des Zweier-Privilegs: das Gef\xfchl, durch gesellschaftlichen Einsatz
        und \xf6ffentliche W\xe4rme unangreifbar zu werden.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>John Wayne Gacy</strong> wird der <strong>Selbsterhaltenden Zwei mit Dreierfl\xfcgel</strong>
        im Enneagramm zugeordnet. Die Leidenschaft der Zwei ist <em>Stolz</em> \u2013
        das \xdcberzeugtsein, durch F\xfcrsorge, Einsatz und gesellschaftliche Pr\xe4senz
        besonderen Schutz und besondere Rechte zu verdienen.
        Die selbsterhaltende Zwei (SE2) \u2013 von Naranjo als \u201ePrivileg" beschrieben \u2013
        sichert ihre Stellung durch Geben: durch Arbeit, Anwesenheit, Gro\xdfz\xfcgigkeit.
        Der Dreierfl\xfcgel verleiht ihr ein ausgepr\xe4gtes Gef\xfchl f\xfcr Images
        und Rollen: Gacy wusste genau, welche Erscheinung in welchem Kontext
        Vertrauen erzeugt. Er schuf um sich eine Aura der Unantastbarkeit \u2013
        und nutzte sie als Deckmantel f\xfcr das Unvorstellbare.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Äußere Merkmale</h3>
        <p class="vb-intro"><strong>a) Warm und einnehmend:</strong>
        Zeitgenossen beschrieben Gacy als gesellig, charmant und zuvorkommend.
        Er nahm sich Zeit f\xfcr Menschen, kannte Namen, fragte nach Familien.
        Das ist die Zwei auf ihrer gesellschaftlichen B\xfchne:
        aufrichtige W\xe4rme als erlernte, perfektionierte Praxis.</p>
        <p class="vb-intro"><strong>b) Ordnungsliebend und selbstzufrieden:</strong>
        <strong>Gacy</strong> pr\xe4sentierte sich als erfolgreichen, geordneten Mann \u2013
        Unternehmer, B\xfcrger, Gastgeber. Der Dreierfl\xfcgel gibt der Zwei
        eine Fa\xe7ade aus Kompetenz und Kontrolle:
        Wer so viel organisiert und gibt, steht \xfcber Verdacht.</p>
        <p class="vb-intro"><strong>c) Clown als bewusste Rollenverst\xe4rkung:</strong>
        Die Clownsfigur \u201ePogo" war keine Nebenbesch\u00e4ftigung \u2013
        sie war ein Instrument. Als Clown war Gacy grotesk gut getarnt:
        Niemand sieht hinter die Maske des Entertainers.
        Der Dreierfl\xfcgel versteht Rollen nicht als Verstellung,
        sondern als Strategie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Helfen als Zugang und Schutz:</strong>
        <strong>Gacy</strong> stellte junge M\u00e4nner in seinem Bauunternehmen ein,
        lud sie ein, gab Arbeit und Struktur.
        Das ist SE2-Helfen in seiner dunkelsten Form:
        F\xfcrsorge als Mittel der Ann\xe4herung, nicht als Selbstzweck.</p>
        <p class="vb-intro"><strong>b) Gemeinschaft als Schutzschild:</strong>
        Sein gesellschaftliches Engagement war kein Schmuck \u2013
        es war Kalkulation. Wer Nachbarschaftsfeste organisiert
        und Fotos mit der First Lady macht,
        wird nicht zuerst verd\u00e4chtigt.
        Das Zweier-Privileg in seiner effizientesten Form:
        Gutsein als Immunisierung.</p>
        <p class="vb-intro"><strong>c) Unf\xe4higkeit zur Schuld\xfcbernahme:</strong>
        Im Gef\xe4ngnis, nach der Verurteilung, im Todestrakt
        zeigte Gacy keine echte Reue \u2013 er malte Clownsbilder,
        gab Interviews und bestand darauf, missverstanden worden zu sein.
        Die SE2 im schweren Stolz kann Schuld nicht integrieren:
        Sie existiert nicht in ihrem Selbstbild.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Doppelleben als Systemleistung:</strong>
        <strong>Gacy</strong> f\xfchrte ein Doppelleben \xfcber mehr als sechs Jahre \u2013
        in einem Umfeld, das ihn kannte, sch\xe4tzte und w\xe4hlte.
        Das gelingt nur, wenn die \xf6ffentliche Persona
        vollst\xe4ndig integriert und \xfcberzeugend ist.
        Der Dreierfl\xfcgel erschafft Personas mit einer Pr\xe4zision,
        die von innen nicht als Fa\xe7ade erlebt wird.</p>
        <p class="vb-intro"><strong>b) Kontrolle \xfcber Abh\xe4ngige:</strong>
        <strong>Gacy</strong> suchte bewusst junge, wirtschaftlich verletzliche M\xe4nner \u2013
        Angestellte, die ihm etwas schuldeten oder von ihm abh\xe4ngig waren.
        Das ist SE2-Kontrolle durch F\xfcrsorge:
        Verbindlichkeit erzeugen, dann ausnutzen.</p>
        <p class="vb-intro"><strong>c) Grandioses Selbstbild bis zuletzt:</strong>
        <strong>Gacy</strong> sah sich als bedeutenden Menschen, dem Unrecht geschah.
        Sein letzter Satz vor der Hinrichtung (1994)
        war eine Klage, kein Gest\xe4ndnis.
        Das ist das Zweier-Privileg in seiner extremsten Form:
        das Gef\xfchl, durch das eigene Geben unantastbar zu sein \u2013
        selbst angesichts von 33 Morden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Das freundliche Gesicht des B\u00f6sen:</strong>
        <strong>Gacy</strong> wurde im Nachhinein zur Ikone einer kulturellen Angst:
        dass das B\u00f6se nicht bedrohlich aussieht, sondern einladend.
        Er demonstriert, was Enneagramm-Forscher die
        \u201esoziale Camouflage" der dunklen Zwei nennen:
        W\xe4rme und Grausamkeit im selben K\xf6rper.</p>
        <p class="vb-intro"><strong>b) Der Fall als Warnsignal:</strong>
        Mehrfach gab es Hinweise, Beschwerden, Ermittlungsans\xe4tze \u2013
        die alle im gesellschaftlichen Ansehen Gacys versanken.
        Das ist jenes systemische Versagen, das das Zweier-Privileg
        erm\xf6glicht: Die Umgebung sieht das Bild,
        nicht die Wirklichkeit dahinter.</p>
        <p class="vb-intro"><strong>c) Pop-kulturelle Nachwirkung:</strong>
        Gacys Clownsbilder werden heute als Kunst gehandelt.
        Dokumentationen, Serien, B\xfccher.
        Die Faszination gilt dem R\xe4tsel:
        Wie konnte jemand so viel geben und gleichzeitig so viel nehmen?
        Die Antwort ist das Enneagramm: Stolz und Gier
        k\xf6nnen in einem Menschen koexistieren,
        wenn das Ich gro\xdf genug ist, beides nicht zu sehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Einladend und kontrolliert:</strong>
        Gacys Energie war einladend \u2013 er zog Menschen an,
        schuf Atmosph\xe4re, erzeugte das Gef\xfchl von Zugeh\xf6rigkeit.
        Das ist die Zwei im Dreierfl\xfcgel als soziale Maschine:
        pr\xe4zise kalibriert auf die W\xfcnsche der Umgebung.</p>
        <p class="vb-intro"><strong>b) Ohne echte Gegenleistung:</strong>
        Hinter der W\xe4rme stand kein echtes Interesse am Anderen \u2013
        nur das Interesse am Bild, das der Andere zur\xfcckwirft.
        Das ist das Wesen des Zwei-Stolzes:
        Beziehung als Spiegel, nicht als Begegnung.</p>
        <p class="vb-intro"><strong>c) Die Maske ohne Gesicht:</strong>
        Ehemalige Bekannte berichteten nach seiner Verhaftung,
        dass sie das Gef\xfchl hatten, ihn nie wirklich gekannt zu haben.
        Der Dreierfl\xfcgel kann eine Persona so perfekt erschaffen,
        dass darunter nichts Erkennbares mehr \xfcbrig bleibt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">6. Tieranalogie: Das Flusspferd</h3>
        <p class="vb-intro"><strong>a) Das gem\xfctvollste aller gef\xe4hrlichen Tiere:</strong>
        Das Flusspferd wirkt rund, gem\xfctlich, beinahe komisch \u2013
        und ist dabei eines der t\xf6dlichsten Tiere Afrikas.
        Es t\xf6tet mehr Menschen pro Jahr als L\xf6wen oder Leoparden.
        Gacy war das menschliche \xc4quivalent:
        einladend, gesellig, scheinbar harmlos \u2013
        und dahinter abgrundtief gef\xe4hrlich.</p>
        <p class="vb-intro"><strong>b) Unsichtbarkeit unter der Oberfl\xe4che:</strong>
        Das Flusspferd verbringt den gr\xf6\xdften Teil seines Lebens
        unter Wasser \u2013 sichtbar nur als Augen und Nasenl\xf6cher
        \xfcber der Oberfl\xe4che. Gacys eigentliches Leben
        war unter dem Haus vergraben \u2013 im w\xf6rtlichen Sinne.
        Was alle sahen, war nur das, was er zeigen wollte.</p>
        <p class="vb-intro"><strong>c) Territorial und absolut:</strong>
        Das Flusspferd duldet keine Eindringlinge in seinem Revier \u2013
        es reagiert mit \xfcberw\xe4ltigender, blitzschneller Gewalt.
        Gacy duldete keine Entdeckung, keine Grenzziehung,
        keine Gegenwehr. Das Zweier-Privileg kippt ins Zerst\xf6rerische,
        wenn es auf Widerstand trifft.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>John Wayne Gacy</strong> ist der extremste Fall in dieser Reihe \u2013
        und deshalb der lehrreichste f\xfcr das Verst\xe4ndnis,
        wohin ein ungeheilter Typ 2 im Stolz gelangen kann.
        Er zeigt nicht, wohin jede Zwei f\xfchrt \u2013
        das w\xe4re eine grobe Vereinfachung.
        Er zeigt, wohin eine Zwei gelangen kann,
        wenn das Zweier-Privileg zur vollst\xe4ndigen Weltanschauung wird,
        wenn F\xfcrsorge zum Instrument der Kontrolle degeneriert
        und wenn der Dreierfl\xfcgel die Persona so dicht macht,
        dass darunter kein Gewissen mehr atmen kann.
        </p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">8. Erg\xe4nzende Tiefenblicke</h3>
        <p class="vb-intro"><strong>a) Naranjos SE2 und das Privileg:</strong>
        Naranjo beschreibt die SE2 als den Subtyp,
        der sein Geben als Anspruch versteht.
        Bei Gacy war dieser Anspruch absolut:
        Er glaubte, durch seinen gesellschaftlichen Einsatz
        ein Recht auf Straflosigkeit erworben zu haben.
        Das ist der Zwei-Stolz in seiner m\xf6rderischen Konsequenz.</p>
        <p class="vb-intro"><strong>b) Der Dreierfl\xfcgel als Tarnung:</strong>
        Kein anderer Fl\xfcgel h\xe4tte diese Tarnung so perfekt erm\xf6glicht.
        Der Dreierfl\xfcgel gibt der Zwei die F\xe4higkeit,
        jede Rolle so vollst\xe4ndig auszuf\xfcllen,
        dass keine Inkonsistenz sichtbar wird.
        Gacy war nicht Schauspieler \u2013 er war Verwandlungsk\xfcnstler.</p>
        <p class="vb-intro"><strong>c) Vergleich mit Harvey Weinstein:</strong>
        Weinstein (SE2w1) nutzte Macht und moralische Selbstrechtfertigung.
        Gacy (SE2w3) nutzte Charme und gesellschaftliche Integration.
        Beide zeigen das Zweier-Privileg \u2013 aber in verschiedenen Auspr\xe4gungen:
        der Einserfl\xfcgel moralisiert, der Dreierfl\xfcgel inszeniert.</p>
        <p class="vb-intro"><strong>d) Entspannungspunkt Vier \u2013 vollst\xe4ndig blockiert:</strong>
        Der Entspannungspunkt der Zwei ist die Vier:
        Selbstreflexion, Zugang zur eigenen Schuld, zur eigenen Trauer.
        Bei Gacy war dieser Kanal vollst\xe4ndig verschlossen.
        Kein Gest\xe4ndnis, keine Reue, keine Begegnung mit sich selbst \u2013
        bis zur Hinrichtung.</p>
        <p class="vb-intro"><strong>e) Das Foto mit Rosalynn Carter:</strong>
        1978 wurde Gacy bei einem Empfang der Democratic Party
        mit First Lady Rosalynn Carter fotografiert.
        Das Bild wurde zum Symbol des Falls:
        der Serienm\u00f6rder neben der First Lady,
        ausgezeichnet von ihr pers\xf6nlich f\xfcr seinen Gemeinsinn.
        Kein Bild illustriert das Zweier-Privileg pr\xe4ziser.</p>
        <p class="vb-intro"><strong>f) Clownsbilder als letzte Inszenierung:</strong>
        Im Todestrakt malte Gacy Clownsbilder \u2013 Pogo, Disney-Figuren,
        Selbstportr\xe4ts als Clown. Er verkaufte sie, gab Interviews,
        pflegte eine Korrespondenz. Der Dreierfl\xfcgel
        h\xf6rt nie auf zu inszenieren: Auch das Sterben
        kann noch eine Rolle sein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "SE2 \u2013 das Zweier-Privileg: die tiefste Analyse des selbsterhaltenden Subtyps und sein Zusammenspiel mit dem Dreierfl\xfcgel.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "SE2, SO2, SX2 \u2013 27 Charakterprofile im Vergleich.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
        ${bookTip("wer-du-wirklich-bist-band-1", "Typ 2: Stolz, F\xfcrsorge und der Heilungsweg \xfcber echte Demut.", "Wer du wirklich bist \u2013 Band 1")}
      </div>
      <div style="margin-top:2rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Portrait dient der tiefenpsychologischen Analyse. Die Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. John Wayne Gacy wurde 1980 in 33 F\u00e4llen des Mordes verurteilt und 1994 hingerichtet. Das Enneagramm erkl\u00e4rt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"kriminalpsychologie-harvey-weinstein", label:"Kriminalpsychologie: Harvey Weinstein"},
        {route:"kriminalpsychologie-anna-delvey", label:"Kriminalpsychologie: Anna Delvey"},
        {route:"kriminalpsychologie-buster-murdaugh", label:"Kriminalpsychologie: Buster Murdaugh"},
      ])}
    </div>
  `);
}

