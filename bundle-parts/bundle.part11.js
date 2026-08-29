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
        <p class="vb-intro"><strong>a) Der Pfau, der das Rad schlägt, solange es irgend geht:</strong>
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

