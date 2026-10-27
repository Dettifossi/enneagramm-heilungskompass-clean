const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const AB_TYPEN = [
  {
    n: 1, mittel: "Platinum metallicum", farbe: "#8f8f8f", leidenschaft: "Zorn", mindmap: "mindmap-platin",
    titel: "Fokus auf Zorn und Groll",
    psyche: [
      `Die Psyche des Typ-1-Patienten ist stark von einem Gefühl innerer <strong>Überlegenheit</strong> geprägt, das sich aus einer tief verwurzelten Unsicherheit speist. Das Überlegenheitsgefühl dient als Schutzmechanismus gegen Verletzbarkeit und die Angst, herabgesetzt oder abgelehnt zu werden. <strong>Zorn</strong> und <strong>Groll</strong> sind zentrale emotionale Dynamiken dieses Typs. Sie entstehen, wenn die Wahrnehmung, die gebührende Anerkennung, Achtung oder Wertschätzung zu erfahren, nicht aufgeht.`,
      `Typ 1 empfindet eine starke Distanz zu anderen und sieht sich oft als ›über dem Durchschnitt‹; zugleich ist diese Haltung fragil. Kritik oder mangelnde Anerkennung werden als tiefe Kränkung erlebt und rufen einen anhaltenden inneren Groll hervor. Der Patient kann arrogant, herablassend und übermäßig selbstbezogen wirken, als hätte er sich in eine ›Schutzrüstung‹ gehüllt. Der Zorn ist oft subtiler, zeigt sich vermehrt als Groll, in passiv-aggressivem Verhalten, sarkastischen Bemerkungen oder demonstrativer Verachtung.`,
      `Diese Patienten streben nach Macht und Kontrolle, weil sie darin einen Schutz vor Verletzungen sehen. Innerlich leiden sie dennoch unter Einsamkeit und einem Gefühl der Isolation. Selbstüberhöhung und Groll stehen in einem paradoxen Verhältnis zur tiefen Sehnsucht nach Nähe und Bestätigung. Sie können schnell zwischen extremer Freundlichkeit und scharfer Zurückweisung schwanken, was ihre Beziehungen oft erschwert.`
    ],
    psych: [
      ["Überlegenheitsgefühle", "Übermäßige Selbstbezogenheit, oft als Schutz gegen Minderwertigkeitsgefühle."],
      ["Empfindlichkeit gegenüber Kritik", "Übersteigerte Wahrnehmung von Kränkung, die zu langanhaltendem Groll führt."],
      ["Passiv-aggressives Verhalten", "Sarkasmus oder subtile Abwertung anderer."],
      ["Emotionaler Rückzug", "Innere Distanz zu anderen Menschen aus Angst vor Verletzungen."],
      ["Isolation und Einsamkeit", "Paradoxe Kombination aus Überlegenheitsgefühlen und Sehnsucht nach Nähe."],
      ["Starke Stimmungsschwankungen", "Wechsel zwischen Arroganz und dem Bedürfnis nach Bestätigung."],
      ["Misstrauen", "Tendenz, anderen Manipulation oder Boshaftigkeit zu unterstellen."],
      ["Perfektionismus", "Hohes Bedürfnis nach Kontrolle und Makellosigkeit im eigenen Leben."],
      ["Zynismus und Verachtung", "Tendenz, andere und deren Leistungen abzuwerten."],
      ["Innere Anspannung und Unruhe", "Ständige Beschäftigung mit dem eigenen Status und Selbstbild."]
    ],
    koerper: [
      ["Hyperästhesie (Überempfindlichkeit)", "Gesteigerte Sensibilität der Haut, oft in den Genitalien oder im Gesicht.", "Patienten berichten von intensiven Empfindungen wie Kribbeln oder Brennen, die schon bei leichtem Kontakt auftreten."],
      ["Spasmen (Muskelkrämpfe)", "Häufig in der Muskulatur des Gesichts, der Hände oder im Urogenitalbereich.", "Plötzliche, schmerzhafte Kontraktionen, die durch Stress oder emotionale Erregung verstärkt werden."],
      ["Tremor (Zittern)", "Feines Zittern der Hände oder anderer Körperbereiche.", "Nervöses Zittern bei Anspannung oder emotionaler Belastung."],
      ["Parästhesien (Missempfindungen)", "Gefühl von Taubheit oder Kribbeln, besonders in den Gliedmaßen.", "Oft ohne organische Ursache, verstärkt durch psychischen Stress."],
      ["Dysmenorrhoe (schmerzhafte Menstruation)", "Heftige, krampfartige Schmerzen während der Menstruation.", "Häufig begleitet von Reizbarkeit und innerer Unruhe."],
      ["Dyspareunie (Schmerzen beim Geschlechtsverkehr)", "Beschwerden im Genitalbereich, oft psychisch mitbedingt.", "Schmerzen werden als brennend oder stechend beschrieben, begleitet von emotionaler Anspannung."],
      ["Migräne (starke Kopfschmerzen)", "Besonders durch Stress oder emotionalen Druck ausgelöst.", "Einseitige, pochende Schmerzen, oft begleitet von Übelkeit und Lichtempfindlichkeit."],
      ["Koliken (krampfartige Bauchschmerzen)", "Besonders nach stressreichen Ereignissen.", "Plötzliche, schmerzhafte Kontraktionen im Bauchraum, oft ohne organische Ursache."],
      ["Palpitationen (Herzklopfen)", "Spürbarer Herzschlag in Ruhe, oft in Verbindung mit innerer Aufregung.", "Patienten berichten von einem ›rasenden‹ oder ›hämmernden‹ Herzen."],
      ["Dysphagie (Schluckbeschwerden)", "Gefühl, Nahrung bleibe im Hals stecken, besonders bei emotionalem Stress.", "Patienten empfinden ein Druck- oder Kloßgefühl, ohne erkennbare körperliche Ursache."]
    ],
    fazit: `Typ 1 zeigt eine enge Verbindung zwischen psychischem Erleben und körperlichen Symptomen: Emotionale Spannungen verstärken die körperlichen Beschwerden häufig oder gehen mit ihnen einher.`
  },
  {
    n: 2, mittel: "Hyoscyamus niger", farbe: "#9455c4", leidenschaft: "Stolz", mindmap: "mindmap-hyoscyamus",
    titel: "Fokus auf Stolz und Enthemmung",
    psyche: [
      `Der Typ-2-Patient zeigt ein breites Spektrum psychischer Auffälligkeiten, die sich vor allem durch eine verzerrte Selbstwahrnehmung, <strong>Stolz</strong> und exzentrisches Verhalten auszeichnen. Die Leidenschaft des Stolzes äußert sich bei Zweiern in einer unkontrollierten Demonstration von Selbstüberhöhung und im Bedürfnis nach Aufmerksamkeit. Es geht dabei weniger um authentische Größe als um eine übersteigerte Präsentation des Selbst, oft mit provokanten, grenzüberschreitenden oder unangemessenen Verhaltensweisen.`,
      `Diese Patienten wirken oft theatralisch und exzentrisch, als stünden sie auf einer Bühne. Der Wunsch nach Aufmerksamkeit kann sich in übertriebener <strong>Eifersucht</strong>, einer starken Neigung zu sexueller Enthemmung und unangemessenem Verhalten äußern. Das <strong>Gefühl der Verletzbarkeit</strong> und die <strong>Angst vor Verlassenwerden</strong> sind stark ausgeprägt; deshalb ist das Verhalten häufig ein Versuch, Bindungen aufrechtzuerhalten oder Bestätigung zu erzwingen. Gleichzeitig kann es zu aggressivem und manipulativem Verhalten kommen, wenn Erwartungen nicht erfüllt werden.`,
      `Ein weiteres zentrales Thema ist die <strong>Grenzenlosigkeit</strong>: Es fällt schwer, soziale oder moralische Normen zu respektieren, was sich in sexuellen Anspielungen, exhibitionistischen Neigungen oder respektlosem Verhalten zeigt. Der Stolz zeigt sich hier in einer Art rebellischer Überheblichkeit, die versucht, die Aufmerksamkeit anderer durch Skandale oder Provokationen auf sich zu ziehen. Im Hintergrund steht jedoch oft eine tiefe innere Unsicherheit und das Gefühl der Unzulänglichkeit.`
    ],
    psych: [
      ["Eifersucht", "Unkontrollierte, oft paranoide Angst, nicht genug Aufmerksamkeit oder Liebe zu erhalten."],
      ["Sexuelle Enthemmung", "Unangemessenes Verhalten mit provokanten, sexuellen Anspielungen oder Taten."],
      ["Theatralik", "Übertriebene Selbstdarstellung und Drang, im Mittelpunkt zu stehen."],
      ["Angst vor Verlassenwerden", "Zwanghaftes Festhalten an Beziehungen, oft begleitet von kontrollierendem Verhalten."],
      ["Delirante Zustände", "Verwirrtheit, Halluzinationen und Verlust der Realitätswahrnehmung."],
      ["Manie", "Gesteigerte Aktivität, verbunden mit unangemessenem Verhalten und Euphorie."],
      ["Aggression und Misstrauen", "Plötzliche Wutausbrüche oder misstrauisches Verhalten, oft ohne erkennbaren Anlass."],
      ["Exhibitionismus", "Neigung, durch provokantes oder entblößendes Verhalten Aufmerksamkeit zu erregen."],
      ["Klaustrophobie", "Angst vor engen Räumen oder Kontrollverlust, oft mit Panikreaktionen."],
      ["Paranoia", "Gefühl der Verfolgung oder die Überzeugung, dass andere sie schädigen wollen."]
    ],
    koerper: [
      ["Delirium (Verwirrtheitszustände)", "Episoden geistiger Verwirrung, oft mit Halluzinationen.", "Patienten sind desorientiert, sprechen unzusammenhängend oder haben Wahnvorstellungen."],
      ["Myoklonien (Muskelzuckungen)", "Plötzliche, unwillkürliche Muskelkontraktionen.", "Zuckungen können spontan oder durch emotionale Erregung ausgelöst werden."],
      ["Tremor (Zittern)", "Zittern der Hände oder anderer Körperteile.", "Besonders ausgeprägt bei Unruhe oder Angst."],
      ["Konvulsionen (Krampfanfälle)", "Heftige, unkontrollierbare Muskelkrämpfe, oft epileptischer Natur.", "Anfälle können durch Überstimulation oder Stress getriggert werden."],
      ["Dysphagie (Schluckstörungen)", "Schwierigkeiten beim Schlucken, oft mit Erstickungsgefühl.", "Kann durch psychische Spannungen oder körperliche Reizungen ausgelöst werden."],
      ["Tachykardie (Herzrasen)", "Gesteigerte Herzfrequenz in Ruhe.", "Patienten berichten von einem ›rasenden Herzen‹ ohne körperliche Anstrengung."],
      ["Hyperhidrose (übermäßiges Schwitzen)", "Verstärkte Schweißbildung, besonders in Stresssituationen.", "Betroffene bemerken plötzliche, übermäßige Schweißausbrüche."],
      ["Mydriasis (Pupillenerweiterung)", "Vergrößerte Pupillen, oft verbunden mit einem starren Blick.", "Kann mit Halluzinationen oder Erregungszuständen einhergehen."],
      ["Blasenatonie (Schwäche der Blase)", "Unfähigkeit, die Blase vollständig zu entleeren.", "Patienten verspüren unvollständiges Wasserlassen oder Harnverhalt."],
      ["Spasmen im Kehlkopfbereich", "Plötzlich auftretende Verengung der Atemwege.", "Gefühl des Erstickens oder des ›Kloßes im Hals‹."]
    ],
    fazit: `Der Typ-2-Patient zeigt eine tiefe Verbindung zwischen enthemmtem Verhalten und psychischer Instabilität, wobei emotionale Konflikte die körperlichen Beschwerden stark beeinflussen können. Die Symptome zeigen sich oft in extremer Nervosität, reizbarem Verhalten und einer Schwäche der Grenzen zwischen Realität und Fantasie.`
  },
  {
    n: 3, mittel: "Tarentula hispanica", farbe: "#4fb6c8", leidenschaft: "Eitelkeit", mindmap: "mindmap-tarentula",
    titel: "Fokus auf Eitelkeit und Impulsivität",
    psyche: [
      `Der Typ-3-Patient ist von einer tief verwurzelten Leidenschaft der <strong>Eitelkeit</strong> geprägt, die sich durch eine exzentrische, manipulative und übermäßig theatralische Persönlichkeit äußert. Die Eitelkeit ist eng verbunden mit einem starken Bedürfnis, bewundert und beachtet zu werden. Dieses Bedürfnis treibt zu unermüdlicher Energie im Streben nach Aufmerksamkeit, sei es durch provokantes Verhalten, dramatische Selbstdarstellung oder das Streben nach Perfektion im äußeren Erscheinungsbild. Sie sind Meister darin, Menschen durch Charme oder Täuschung für sich einzunehmen, und gehen dabei oft über eigene Grenzen hinaus.`,
      `Typ-3-Patienten besitzen eine hohe <strong>emotionale Labilität</strong>, kombiniert mit ausgeprägter <strong>Impulsivität</strong>. Sie sind selten in der Lage, Ruhe oder Stille zu ertragen, ihre Bewegungen und ihr Geist sind ständig in Aktion. Das spiegelt eine innere Unruhe wider, die oft zu impulsiven Entscheidungen, unstetem Lebensstil und einer Neigung zu Übertreibungen führt. Die Emotionen schwanken schnell zwischen überbordender Freude, plötzlichem Zorn und tiefer Verzweiflung.`,
      `Auf der dunklen Seite zeigt sich bei Typ-3-Patienten eine <strong>gekränkte und rachsüchtige Haltung</strong>, besonders wenn sie das Gefühl haben, übergangen oder nicht gewürdigt zu werden. Manipulation und Drama eskalieren, wenn sie sich bedroht fühlen oder ihre Ziele nicht erreichen. Gleichzeitig verleihen Energie und Leidenschaft eine gewisse magnetische Ausstrahlung, die sie trotz ihrer schwierigen Persönlichkeit oft in den Mittelpunkt rückt.`
    ],
    psych: [
      ["Impulsivität", "Unkontrollierte, spontane Handlungen ohne Rücksicht auf Konsequenzen."],
      ["Emotionale Labilität", "Rascher Wechsel von Freude, Wut und Traurigkeit."],
      ["Manische Zustände", "Übermäßige Energie, übersteigerter Optimismus und schnelle Gedanken."],
      ["Theatralik", "Dramatisierung von Situationen, um Aufmerksamkeit zu erhalten."],
      ["Manipulative Tendenzen", "Einsatz von Charme, Täuschung oder Schuldgefühlen, um Ziele zu erreichen."],
      ["Konkurrenzdenken", "Starkes Bedürfnis, im Vergleich zu anderen überlegen zu erscheinen und Rivalen auszustechen."],
      ["Rachsucht", "Ausgeprägter Drang, wahrgenommenes Unrecht zu vergelten."],
      ["Ruhelosigkeit", "Unfähigkeit, Stille oder Untätigkeit zu ertragen."],
      ["Hysterische Anfälle", "Emotionale Ausbrüche, oft mit theatralischen Zügen."],
      ["Angststörungen", "Starke innere Unruhe, begleitet von irrationalen Ängsten."]
    ],
    koerper: [
      ["Chorea (Tanzkrankheit)", "Unkontrollierte, ruckartige Bewegungen der Gliedmaßen.", "Patienten zeigen plötzliche, tänzelnde Bewegungen, die sie nicht steuern können."],
      ["Tremor (Zittern)", "Feine, schnelle Bewegungen der Hände oder anderer Körperteile.", "Zittern wird durch innere Unruhe oder Anspannung verstärkt."],
      ["Hyperkinesie (übermäßige Bewegungsaktivität)", "Zwanghafter Drang, sich ständig zu bewegen.", "Betroffene können nicht still sitzen, sind ständig in Bewegung."],
      ["Tachykardie (Herzrasen)", "Übermäßige Herzfrequenz, oft stressbedingt.", "Patienten spüren Herzklopfen, besonders in aufregenden Momenten."],
      ["Hyperhidrose (übermäßiges Schwitzen)", "Vermehrte Schweißbildung, besonders bei Anspannung.", "Schweiß tritt plötzlich und stark auf, vor allem bei emotionalem Stress."],
      ["Konvulsionen (Krampfanfälle)", "Muskelzuckungen oder unwillkürliche Bewegungen.", "Symptome reichen von milden Zuckungen bis zu intensiven Krämpfen."],
      ["Neuralgie (Nervenschmerzen)", "Plötzliche, scharfe Schmerzen entlang eines Nervenwegs.", "Patienten klagen über Schmerzen, oft ausgelöst durch emotionale Anspannung."],
      ["Hyperästhesie (überempfindliche Nervenreaktionen)", "Gesteigerte Sensibilität für Berührung, Licht oder Geräusche.", "Patienten empfinden normale Reize als schmerzhaft oder unangenehm."],
      ["Spasmen (Muskelkrämpfe)", "Plötzliche Kontraktionen der Muskeln.", "Krämpfe treten meist bei starker emotionaler Erregung auf."],
      ["Insomnie (Schlaflosigkeit)", "Schwierigkeiten, zur Ruhe zu kommen oder einzuschlafen.", "Patienten können aufgrund innerer Unruhe oft nicht schlafen."]
    ],
    fazit: `Der Tarentula-hispanica-Typ steht für eine faszinierende Mischung aus unerschöpflicher Energie, theatralischem Drang und manipulativer Geschicklichkeit. Seine psychische Dynamik spiegelt die Leidenschaft der Eitelkeit wider, verbunden mit einer tiefen Angst vor Bedeutungslosigkeit. Die körperlichen Symptome korrelieren dabei häufig mit der emotionalen Überaktivität, was die Einheit von Geist und Körper bei diesem Konstitutionstyp verdeutlicht.`
  },
  {
    n: 4, mittel: "Ignatia amara", farbe: "#5fb43a", leidenschaft: "Neid", mindmap: "mindmap-ignatia",
    titel: "Fokus auf den Neid",
    psyche: [
      `Die Psyche des Typ-4-Patienten ist von einer intensiven Emotionalität geprägt, die sich in starken inneren Konflikten und widersprüchlichem Verhalten zeigt. Ein zentrales Thema ist die Leidenschaft des <strong>Neids</strong>, die sich jedoch oft subtil und verdeckt äußert. Der Neid entspringt dem tief empfundenen Gefühl des Mangels: eine Sehnsucht nach Idealzuständen, die vermeintlich andere erreicht haben. Typ-4-Patienten neigen dazu, sich mit anderen zu vergleichen und dabei im Nachteil zu sehen. Das führt zu einem inneren Schmerz, der nicht offen ausgedrückt, sondern in Form von emotionaler Anspannung, Selbstvorwürfen oder scheinbarer Gleichgültigkeit kompensiert wird.`,
      `Der Neid zeigt sich häufig in einer idealisierten Sicht auf das Leben anderer, gepaart mit strenger Selbstkritik. Dabei bleibt er nicht destruktiv nach außen gerichtet, sondern kehrt sich nach innen, was zu einem Gefühl von Unzulänglichkeit und tiefem emotionalem Schmerz führt. Typ-4-Patienten streben nach Perfektion, Harmonie und einem Ideal, das in der Realität unerreichbar bleibt.`,
      `Das Spannungsfeld zwischen tief empfundener Sehnsucht und der Unmöglichkeit, sie zu erfüllen, erzeugt eine emotionale Achterbahn aus Hoffnung, Enttäuschung und innerem Widerstand. Der Neid bleibt ein unterschwelliger Motor, der antreibt, mehr zu leisten, und zugleich die Fähigkeit einschränkt, Zufriedenheit zu erleben.`
    ],
    psych: [
      ["Emotionale Labilität", "Plötzliche Stimmungsschwankungen, oft ausgelöst durch kleinere Enttäuschungen oder Kritik."],
      ["Selbstkritik und Unzulänglichkeitsgefühle", "Übermäßige Hinterfragung eigener Handlungen und Fähigkeiten."],
      ["Perfektionismus", "Hohe Ansprüche an sich selbst, gepaart mit ständiger Unzufriedenheit."],
      ["Trauer und Melancholie", "Häufiges Grübeln über Verluste und unerfüllte Erwartungen, oft mit einem Gefühl von Einsamkeit."],
      ["Paradoxe Reaktionen", "Trost oder Unterstützung wird zunächst angenommen, aber später abgelehnt."],
      ["Neigung zu psychosomatischen Beschwerden", "Emotionale Belastungen manifestieren sich körperlich (z. B. Globusgefühl)."],
      ["Innere Anspannung", "Gefühl der Unruhe und Rastlosigkeit trotz äußerlicher Beherrschung."],
      ["Vergleichsdenken", "Ständiger innerer Vergleich mit anderen, häufig mit dem Resultat des eigenen Minderwertigkeitsgefühls."]
    ],
    koerper: [
      ["Globusgefühl (Gefühl eines Kloßes im Hals)", "Engegefühl im Hals ohne organische Ursache, oft ausgelöst durch emotionale Belastung.", "Patient spürt einen ständigen Druck oder ›Kloß‹, besonders in Phasen emotionaler Anspannung."],
      ["Nervöser Schluckauf (Singultus)", "Plötzliches Auftreten, meist kurzzeitig, als Ausdruck emotionaler Reaktion.", "Schluckauf setzt unvermittelt ein, verstärkt sich in Stresssituationen und verschwindet oft spontan wieder."],
      ["Muskelspasmen und Krämpfe", "Plötzliche, schmerzhafte Kontraktionen, besonders bei Anspannung oder Stress.", "Krämpfe treten häufig in Nacken- oder Bauchmuskulatur auf, oft nach innerer Aufregung oder Ärger."],
      ["Intermittierende Kopfschmerzen", "Wiederkehrende Spannungskopfschmerzen, meist bei mentaler Überforderung.", "Dumpfe, drückende Schmerzen, typischerweise beidseitig, die sich im Verlauf des Tages verstärken."],
      ["Nervöse Atembeschwerden (Dyspnoe)", "Gefühl von Atemnot ohne physische Ursache, oft in stressigen Situationen.", "Patient muss tief durchatmen, als ob ›zu wenig Luft‹ vorhanden wäre, besonders in Konfliktsituationen."],
      ["Vermehrtes Seufzen oder tiefes Atmen", "Ausdruck von innerem Druck oder Frustration.", "Häufiges, bewusstes oder unbewusstes Seufzen, oft begleitet von Schulterfallenlassen und Müdigkeit."],
      ["Herzklopfen (Palpitationen)", "Unregelmäßiger oder beschleunigter Herzschlag bei emotionaler Erregung.", "Herzschlag wird als ›stolpernd‹ oder ›rasend‹ empfunden, vor allem bei innerer Aufregung oder Ärger."],
      ["Verdauungsstörungen (Dyspepsie)", "Völlegefühl, Blähungen oder Bauchschmerzen, meist nach emotionalen Ereignissen.", "Bauchschmerzen treten oft nach Stresssituationen auf, häufig zusammen mit Appetitlosigkeit."],
      ["Schlafstörungen (Insomnie)", "Schwierigkeiten beim Ein- oder Durchschlafen, oft aufgrund von Grübeln.", "Patient liegt lange wach, Gedanken kreisen, Schlaf ist oberflächlich und wenig erholsam."],
      ["Neuralgische Schmerzen", "Ziehende oder stechende Schmerzen ohne organische Grundlage, oft im Kopf- oder Nackenbereich.", "Schmerzen kommen plötzlich, wandern manchmal, verstärken sich bei seelischer Belastung."],
      ["Schwindel (Vertigo)", "Gefühl von Benommenheit, besonders in stressigen oder emotional belastenden Situationen.", "Schwindel äußert sich als Unsicherheit beim Gehen oder ›Schwanken‹ ohne körperliche Ursache."],
      ["Reizblase (Pollakisurie)", "Häufiger Harndrang bei nervöser Anspannung.", "Drang tritt oft plötzlich auf, auch wenn die Blase nur wenig gefüllt ist, meist in Stressphasen."]
    ],
    fazit: `Der Typ-4-Patient zeigt eine tiefe Verbindung zwischen intensiver Emotionalität und psychischer Instabilität, wobei ungelöste innere Konflikte die körperlichen Beschwerden stark beeinflussen können. Die Symptome zeigen sich oft in melancholischer Stimmungslabilität, Rückzugstendenzen und einer Durchlässigkeit der Grenzen zwischen innerer Erlebniswelt und äußerer Realität.`
  },
  {
    n: 5, mittel: "Stramonium", farbe: "#336aeb", leidenschaft: "Geiz", mindmap: "mindmap-stramonium",
    titel: "Geiz und Furcht im Zentrum",
    psyche: [
      `Der Stramonium-Patient ist von einer tiefen inneren Angst geprägt, die seine gesamte psychische Struktur durchzieht. Seine Leidenschaft des <strong>Geizes und der Habsucht</strong> spiegelt eine grundlegende Unsicherheit wider, die sich in einem zwanghaften Festhalten an Menschen, Dingen und Macht ausdrückt. Für diesen Typ steht die Sicherheit an erster Stelle, und er versucht, jeden Verlust zu vermeiden. Der Geiz kann dabei über materielle Besitztümer hinausgehen und auch emotionale Zurückhaltung oder die Verweigerung des Teilens von Aufmerksamkeit, Wissen oder Liebe umfassen.`,
      `Die Psyche ist zudem von einer dualen Dynamik geprägt: auf der einen Seite eine intensive Sehnsucht nach Geborgenheit und Schutz, auf der anderen eine immense Furcht vor Bedrohung und Verlassenwerden. Das führt zu ambivalentem Verhalten: Sie klammern sich an andere, können aber zugleich aggressiv oder kontrollierend auftreten, um ihre Angst zu überspielen. Häufig entwickeln sie eine ausgeprägte Fixierung auf Ordnung und Kontrolle, um das Chaos in ihrem Inneren zu kompensieren.`,
      `Die Angst äußert sich oft in extremen Formen wie <strong>Dunkelheitsfurcht</strong>, <strong>Angst vor dem Alleinsein</strong>, <strong>vor Tieren</strong> oder <strong>vor dem Tod</strong>. Die Fantasie ist lebhaft und neigt zu Albträumen oder Halluzinationen, die oft von gewalttätigen oder grausamen Bildern geprägt sind. Diese Patienten können auch plötzliche Aggressionsausbrüche oder wahnartige Zustände erleben, die in direktem Zusammenhang mit ihrer tiefen inneren Unsicherheit stehen.`
    ],
    psych: [
      ["Angstzustände", "Panikattacken, Furcht vor Dunkelheit, Alleinsein oder übernatürlichen Wesen. Plötzliche, überwältigende Angstgefühle, oft begleitet von Zittern und Herzklopfen."],
      ["Halluzinationen", "Visuelle oder akustische Wahrnehmungen von nicht existierenden Dingen. Betroffene berichten von angsteinflößenden Bildern oder Stimmen."],
      ["Albträume", "Häufige, beängstigende Träume mit gewaltsamen oder grotesken Inhalten. Patienten wachen schweißgebadet und in Panik auf, oft unfähig, zwischen Traum und Realität zu unterscheiden."],
      ["Aggressivität", "Plötzliche, unkontrollierbare Wutausbrüche. Wut ist oft eine Abwehrreaktion gegen wahrgenommene Bedrohungen."],
      ["Klammerndes Verhalten", "Übermäßige Abhängigkeit von Bezugspersonen. Patienten haben eine starke Angst vor Verlassenwerden."],
      ["Paranoide Gedanken", "Misstrauen gegenüber anderen, Gefühl der Verfolgung. Betroffene glauben, dass andere ihnen Schaden zufügen wollen."],
      ["Zwanghaftes Kontrollverhalten", "Bedürfnis, alles im Griff zu haben. Patienten versuchen, durch strikte Ordnung und Kontrolle Sicherheit zu gewinnen."],
      ["Dissoziative Zustände", "Gefühl der Entfremdung von sich selbst oder der Umwelt. Patienten fühlen sich wie in einem Traum oder ›neben sich‹."],
      ["Emotionale Labilität", "Schneller Wechsel zwischen Angst, Aggression und Traurigkeit. Stimmungsschwankungen sind oft abrupt und unvorhersehbar."],
      ["Hypersensibilität", "Überempfindlichkeit gegenüber Reizen wie Lärm, Licht oder Berührung. Normale Umweltreize werden als unerträglich empfunden."]
    ],
    koerper: [
      ["Myoklonien (Muskelzuckungen)", "Unkontrollierte, plötzliche Bewegungen einzelner Muskeln.", "Patienten berichten über spontane Zuckungen, die oft in Ruhe auftreten."],
      ["Tremor (Zittern)", "Unkontrolliertes Zittern der Gliedmaßen oder des gesamten Körpers.", "Besonders ausgeprägt bei Angst oder Aufregung."],
      ["Tics (wiederholte Muskelkontraktionen)", "Plötzliche, wiederholte Bewegungen oder Laute.", "Patienten zeigen unwillkürliche Bewegungen, meist in Stresssituationen."],
      ["Spasmen (Krämpfe)", "Plötzliche, schmerzhafte Muskelverkrampfungen.", "Krämpfe treten oft im Zusammenhang mit innerer Unruhe auf."],
      ["Dysphagie (Schluckbeschwerden)", "Schwierigkeiten beim Schlucken.", "Patienten klagen über ein Kloßgefühl im Hals, oft stressbedingt."],
      ["Hyperhidrose (übermäßiges Schwitzen)", "Vermehrte Schweißbildung, besonders in Angstzuständen.", "Schweiß tritt plötzlich und massiv auf, oft in Verbindung mit Panikattacken."],
      ["Tachykardie (Herzrasen)", "Beschleunigter Herzschlag, oft ohne erkennbare Ursache.", "Patienten spüren ein unangenehmes Herzklopfen, besonders bei Angst."],
      ["Dyspnoe (Atemnot)", "Gefühl von Atemnot, ohne dass eine organische Ursache vorliegt.", "Patienten berichten von plötzlichem Lufthunger, meist in Panik."],
      ["Dysmenorrhoe (schmerzhafte Menstruation)", "Intensiver Schmerz während der Regelblutung.", "Beschwerden gehen oft mit innerer Unruhe und Anspannung einher."],
      ["Migräne", "Wiederkehrende, starke Kopfschmerzen, oft mit Lichtempfindlichkeit.", "Schmerzen sind pochend und beeinträchtigen den Alltag erheblich."]
    ],
    fazit: `Der Stramonium-Typ ist ein Beispiel für die enge Verknüpfung von psychischen und physischen Symptomen. Die Leidenschaft des Geizes spiegelt seine tiefsitzende Angst vor Verlust und Unsicherheit wider, die sowohl in seinem Verhalten als auch in seinen körperlichen Beschwerden zum Ausdruck kommt. Die Neigung zu Extremen, ob in Form von Angstzuständen oder aggressiven Ausbrüchen, unterstreicht die Herausforderung, die dieser Konstitutionstyp darstellt.`
  },
  {
    n: 6, mittel: "Opium", farbe: "#ac7440", leidenschaft: "Angst", mindmap: "mindmap-opium",
    titel: "Angst, Zweifel und Verdrängung",
    psyche: [
      `Die Psyche des Opium-Patienten ist von einem paradoxen Spannungsfeld geprägt: einerseits intensive Angst und Unsicherheit, andererseits ein scheinbar gelassener, fast tranceartiger Zustand, in dem die Ängste verdrängt oder ignoriert werden. Diese Menschen neigen stark zur <strong>Verdrängung</strong> unangenehmer Gefühle oder Erlebnisse. Sie können sehr ruhig und unbeteiligt wirken, obwohl in ihrem Inneren oft ein Sturm von Zweifeln, Angst und Unsicherheit tobt. Ihr Umgang mit der Realität ist häufig von <strong>Illusionen</strong>, <strong>Fluchtverhalten</strong> und dem Hang geprägt, die Welt durch eine ›rosarote Brille‹ zu betrachten, um sich vor unangenehmen Wahrheiten zu schützen.`,
      `Die <strong>Leidenschaft der Angst</strong> zeigt sich insbesondere in einer tiefen Furcht vor Schmerz, Veränderung oder Konfrontation mit dem eigenen Inneren. Oft wirkt der Opium-Patient emotionslos oder distanziert, doch dahinter verbirgt sich eine intensive Angst, die ihn in eine starre, abwartende Haltung zwingt. Verstärkt wird dieser Zustand durch die <strong>Leidenschaft des Zweifels</strong>: Zweifel an der eigenen Fähigkeit, schwierige Situationen zu bewältigen, führen häufig zu einer Haltung des Stillstands oder der Passivität.`,
      `In extremen Fällen neigt der Opium-Patient dazu, sich in Traumwelten oder einen Zustand der <strong>emotionalen Taubheit</strong> zurückzuziehen, um inneren Konflikten zu entfliehen. Es kann zu einer deutlichen Diskrepanz zwischen äußeren Erscheinungen (Ruhe, Gleichmut) und inneren Realitäten (Angst, Chaos) kommen. Diese Verdrängung kann sich auch in einer Neigung zu <strong>Schönfärberei</strong> oder <strong>Geschichtenfantasien</strong> äußern, bei denen die Realität bewusst ignoriert oder verzerrt wird.`
    ],
    psych: [
      ["Angststörungen", "Tiefe, unterschwellige Angst vor Konfrontation oder Verlust. Die Angst wird häufig verdrängt, zeigt sich aber in psychosomatischen Beschwerden."],
      ["Zweifel und Unentschlossenheit", "Schwierigkeit, Entscheidungen zu treffen. Patienten grübeln lange, was oft zu Lethargie führt."],
      ["Dissoziation (Gefühl der Abwesenheit)", "Abspaltung von unangenehmen Gefühlen. Patienten wirken emotional taub oder wie ›nicht ganz da‹."],
      ["Depersonalisation", "Gefühl der Entfremdung von sich selbst. Patienten beschreiben, sich wie in einem Traum zu fühlen."],
      ["Illusionäre Verklärung", "Tendenz, die Realität zu beschönigen. Sie erzählen unwahre Geschichten oder weichen Konfrontationen aus."],
      ["Emotionale Abstumpfung", "Reduzierte Reaktion auf emotionale Reize. Patienten zeigen wenig emotionale Betroffenheit, auch bei schwierigen Themen."],
      ["Flucht in Fantasiewelten", "Neigung zu Tagträumen und unrealistischen Vorstellungen. Die Fantasie wird genutzt, um unangenehme Realitäten zu vermeiden."],
      ["Panikattacken", "Plötzliche, intensive Angstzustände. Begleitet von Herzrasen, Zittern und Atemnot, oft ohne ersichtlichen Auslöser."],
      ["Hypersensibilität gegenüber Kritik", "Übersteigerte Empfindlichkeit für negative Rückmeldungen. Patienten reagieren mit Rückzug oder Selbstvorwürfen."],
      ["Chronische Müdigkeit (Fatigue)", "Gefühl der Erschöpfung ohne körperliche Ursache. Patienten fühlen sich kraftlos und träge, was auf psychischen Stress hinweist."]
    ],
    koerper: [
      ["Obstipation (Verstopfung)", "Chronische Schwierigkeiten beim Stuhlgang.", "Häufig verbunden mit träge arbeitenden Organen und Unterdrückung emotionaler Konflikte."],
      ["Anhidrose (verminderte Schweißbildung)", "Reduktion oder Ausbleiben des Schwitzens.", "Patienten wirken äußerlich trocken, was oft mit innerer Starre korreliert."],
      ["Hypotonie (niedriger Blutdruck)", "Verminderter Blutdruck, häufig bei Lethargie.", "Müdigkeit, Schwäche und Schwindel sind typische Begleiterscheinungen."],
      ["Bradykardie (langsamer Herzschlag)", "Auffällig langsamer Puls.", "Kann mit dem ruhigen, stoischen Verhalten korrespondieren."],
      ["Schlafstörungen", "Schwierigkeiten beim Ein- oder Durchschlafen, häufig Albträume.", "Schlaf ist oft nicht erholsam, begleitet von unruhigem Hin- und Herwälzen."],
      ["Mydriasis (erweiterte Pupillen)", "Sichtbar große Pupillen, insbesondere in Paniksituationen.", "Kann mit Stress oder emotionalem Ausnahmezustand einhergehen."],
      ["Respiratorische Depression (verminderte Atmung)", "Langsame, oberflächliche Atmung.", "Betroffene atmen kaum spürbar, was ihre innere Starre widerspiegelt."],
      ["Zyanose (bläuliche Verfärbung der Haut)", "Vorübergehender Sauerstoffmangel.", "Beobachtet bei extremem Stress oder Panik."],
      ["Spastische Koliken", "Bauchkrämpfe durch Muskelverspannungen.", "Verstärkte Beschwerden bei innerer Unruhe oder Angstzuständen."],
      ["Kälteempfindlichkeit", "Übermäßige Sensibilität gegenüber Kälte.", "Patienten klagen über ständiges Frösteln, auch bei normaler Umgebungstemperatur."]
    ],
    fazit: `Der Opium-Patient ist ein Sinnbild für die Spannung zwischen <strong>intensiver innerer Angst</strong> und <strong>äußerlicher Passivität oder Gelassenheit</strong>. Seine psychischen und körperlichen Symptome spiegeln diese Konflikte wider, wobei die Verdrängung von Ängsten oft in psychosomatischen Beschwerden gipfelt. Ein zentrales Merkmal ist die Fähigkeit, selbst schwere seelische Konflikte durch emotionale Taubheit zu überspielen, ein Verhalten, das sowohl Stärke als auch Herausforderung darstellt.`
  },
  {
    n: 7, mittel: "Belladonna", farbe: "#e6b800", leidenschaft: "Völlerei", mindmap: "mindmap-belladonna",
    titel: "Maßlosigkeit, Impulsivität und Exzess",
    psyche: [
      `Die Psyche des Belladonna-Patienten ist von intensiver Emotionalität, Impulsivität und einer Neigung zur <strong>Völlerei</strong> im übertragenen Sinne geprägt, nicht nur auf Nahrung bezogen, sondern auch auf Reize, Emotionen und Erlebnisse. Diese Maßlosigkeit zeigt sich in extremer Leidenschaftlichkeit und Überschwänglichkeit, aber auch in Wutanfällen, die unvermittelt und unkontrollierbar auftreten können. Der Belladonna-Typ strebt nach intensivem, unmittelbarem Erleben und neigt dazu, Grenzen von sich selbst und anderen zu überschreiten, was ihm oft das Etikett der <strong>Maßlosigkeit</strong> verleiht.`,
      `Eine zentrale Leidenschaft ist die <strong>Völlerei</strong>, verstanden als Gier nach Leben, nach Genuss, nach Macht oder nach Aufmerksamkeit. Belladonna-Patienten können diese Gier jedoch nicht regulieren, was in einer <strong>Unfähigkeit zur Mäßigung</strong> resultiert. Wenn ihre Bedürfnisse nicht sofort befriedigt werden, reagieren sie mit <strong>heftigen Gefühlsausbrüchen</strong>, die von Zorn, Ungeduld und Hysterie geprägt sind.`,
      `Ihr inneres Erleben ist von extremen Schwankungen gekennzeichnet: Von Momenten intensiver Begeisterung oder Euphorie stürzen sie in tiefe Verzweiflung oder Zorn. Oft besteht eine <strong>übersteigerte Reizempfindlichkeit</strong> gegenüber Licht, Geräuschen und Berührungen, die sie schnell in einen Zustand des <strong>Überwältigtseins</strong> bringt. Diese Sensibilität führt auch dazu, dass sie sich von der Außenwelt bedrängt fühlen, was Zorn und Maßlosigkeit noch verstärken kann.`,
      `In sozialen Beziehungen zeigt sich der Belladonna-Typ oft dominant, fordernd und reizbar. Impulsivität und fehlende Geduld machen ihn zu einer Herausforderung für das Umfeld. Gleichzeitig kann er charismatisch und anziehend sein, solange er im Einklang mit seinen Bedürfnissen ist. Seine emotionalen Ausbrüche wirken jedoch oft abschreckend und erzeugen Distanz.`
    ],
    psych: [
      ["Reizbarkeit (Irritabilität)", "Starke emotionale Reaktionen auf geringe Auslöser. Patienten reagieren impulsiv und oft unverhältnismäßig."],
      ["Hysterie (emotionales Überreagieren)", "Übertriebene Reaktionen auf Stress. Episoden von dramatischen oder theatralischen Ausbrüchen."],
      ["Unkontrollierbare Wutanfälle (Impulskontrollstörung)", "Plötzliche Ausbrüche von Zorn. Wut ohne erkennbare Kontrolle, oft unvermittelt."],
      ["Hyperaktivität (psychomotorische Unruhe)", "Übermäßiger Bewegungsdrang und Getriebenheit. Patienten können nicht still sitzen, sind ständig in Bewegung."],
      ["Angst vor Bedrohung", "Paranoide Züge und übersteigerte Wahrnehmung von Gefahren. Gefühl, verfolgt oder angegriffen zu werden."],
      ["Hypersensibilität (Überempfindlichkeit)", "Übersteigerte Reaktionen auf Licht, Geräusche und Berührungen. Patienten meiden helle, laute oder lebhafte Umgebungen."],
      ["Euphorie und Hochgefühle", "Kurzfristige emotionale Hochs. Überschwängliche Begeisterung ohne nachhaltige Stabilität."],
      ["Aggressionen", "Tendenz zu physischer oder verbaler Gewalt. Aggressives Verhalten gegenüber sich selbst oder anderen."],
      ["Schnelle Stimmungswechsel (emotionale Labilität)", "Wechsel zwischen Freude, Wut und Trauer. Stimmungsschwankungen ohne erkennbaren Grund."],
      ["Misstrauen (paranoide Gedanken)", "Gefühl, von anderen hintergangen oder ausgenutzt zu werden. Kann sich in sozialem Rückzug oder Angriffslust äußern."]
    ],
    koerper: [
      ["Fieber mit Delirium", "Hohe Körpertemperaturen, begleitet von Verwirrtheit.", "Patienten erleben Halluzinationen und intensive Hitzegefühle."],
      ["Photophobie (Lichtempfindlichkeit)", "Überempfindlichkeit gegenüber Licht.", "Patienten meiden helles Licht, da es Schmerzen oder Unwohlsein verursacht."],
      ["Hyperästhesie (Überempfindlichkeit der Sinne)", "Gesteigerte Reizwahrnehmung.", "Geräusche, Berührungen und Gerüche werden als unangenehm intensiv wahrgenommen."],
      ["Tachykardie (schneller Herzschlag)", "Erhöhte Herzfrequenz.", "Oft begleitet von Unruhe oder Panikgefühlen."],
      ["Flush (Gesichts- und Hautrötung)", "Intensive Rötung des Gesichts und des Körpers.", "Tritt bei Fieber, Erregung oder Reizüberflutung auf."],
      ["Spastische Schmerzen (Koliken)", "Krampfartige Bauchschmerzen.", "Häufig bei Stress oder emotionalen Belastungen."],
      ["Trockener Mund (Xerostomie)", "Verminderte Speichelproduktion.", "Patienten klagen über Schwierigkeiten beim Schlucken oder Sprechen."],
      ["Krampfanfälle (Konvulsionen)", "Plötzliche, unkontrollierte Muskelbewegungen.", "Gelegentlich begleitet von Bewusstseinsverlust."],
      ["Schwitzen (Hyperhidrose)", "Übermäßige Schweißproduktion.", "Besonders bei emotionalem Stress oder Hitze."],
      ["Tremor (Zittern)", "Unwillkürliche Bewegungen der Hände oder anderer Körperteile.", "Häufig in Verbindung mit Nervosität oder Reizbarkeit."]
    ],
    fazit: `Der Belladonna-Patient ist ein Prototyp des maßlosen, überschäumenden Charakters, der zwischen <strong>Intensität</strong> und <strong>Reizüberflutung</strong> schwankt. Seine psychische Landschaft ist durch Impulsivität, emotionale Labilität und eine extreme Empfindlichkeit gegenüber Reizen geprägt. Körperliche Beschwerden sind oft Ausdruck seiner überschießenden emotionalen Reaktionen und seiner Unfähigkeit, innere Spannungen zu regulieren. Seine Leidenschaft der Maßlosigkeit zeigt sich sowohl im emotionalen Verhalten als auch in den körperlichen Symptomen.`
  },
  {
    n: 8, mittel: "Veratrum album", farbe: "#c1281e", leidenschaft: "Wollust (Lust)", mindmap: "mindmap-veratrum",
    titel: "Wollust, Gier und übersteigerter Ehrgeiz",
    psyche: [
      `Die Psyche des Veratrum-album-Patienten ist von einer übermäßigen <strong>Gier nach Macht, Status und Kontrolle</strong> geprägt. Diese Gier entspringt einer inneren Leere und Unsicherheit, die durch Überkompensation ausgeglichen wird. Der Veratrum-Typ strebt unermüdlich nach <strong>Einfluss und Bedeutung</strong>, oft auf eine manipulative und opportunistische Weise. Die Leidenschaft der Wollust ist hier nicht auf Sexualität beschränkt, sondern meint die Lust am Mehr: übertriebene Lust an materiellem Besitz, sozialem Prestige oder auch an sexueller Dominanz. Es geht um das unermüdliche Streben, eine als unzureichend empfundene Identität durch äußere Erfolge und Anerkennung aufzuwerten.`,
      `Dieser Patiententyp hat ein tiefes Bedürfnis, sich überlegen zu fühlen. <strong>Arroganz</strong>, <strong>Selbstüberschätzung</strong> und <strong>Hybris</strong> kennzeichnen oft sein Auftreten. Er kann sehr ehrgeizig, kalkulierend und skrupellos sein, wenn es darum geht, seine Ziele zu erreichen. Gleichzeitig zeigt er eine innere <strong>Zerbrechlichkeit</strong>: Die ständige Angst vor Demütigung oder dem Scheitern treibt ihn in einen Zustand des <strong>permanenten Kampfes</strong> um Bestätigung.`,
      `In sozialer Hinsicht können Veratrum-Patienten charmant und überzeugend wirken, besonders wenn sie dadurch Vorteile gewinnen können. Ihre Beziehungen sind jedoch oft von Manipulation geprägt, da sie andere als Mittel zum Zweck sehen. Ihr Verhalten wird von einem <strong>tiefen Narzissmus</strong> bestimmt, wobei ihr Selbstwertgefühl stark von äußerer Anerkennung abhängt.`
    ],
    psych: [
      ["Manische Zustände (Manie)", "Übersteigerte Aktivität, Ideenflut und Ruhelosigkeit. Patienten sind rastlos, übermäßig gesprächig und zeigen eine unnatürlich gesteigerte Stimmung."],
      ["Ehrgeizige Größenideen (Größenwahn)", "Überzeugung, etwas Großartiges zu leisten oder außergewöhnlich zu sein. Patienten glauben an ihre herausragende Bedeutung und setzen alles daran, dies zu beweisen."],
      ["Arroganz (Überlegenheitsgefühl)", "Übertriebene Selbstwahrnehmung. Patienten verhalten sich herablassend und erwarten Bewunderung."],
      ["Täuschung (manipulative Züge)", "Tendenz, andere zu beeinflussen, um eigene Ziele zu erreichen. Menschen werden ausgenutzt oder kontrolliert."],
      ["Verzweiflung bei Scheitern (Depression nach Misserfolg)", "Tiefe Traurigkeit nach Versagen. Scheitern wird als völliger persönlicher Untergang empfunden."],
      ["Unstillbare Begierde (Gier nach Macht, Besitz, Anerkennung)", "Übersteigerte Sehnsucht nach Kontrolle und Erfolg. Patienten zeigen Maßlosigkeit und Geiz zugleich."],
      ["Hypokrisie (Scheinheiligkeit)", "Vorspiegelung falscher Tugendhaftigkeit. Patienten verbergen ihre wahren Motive hinter einem moralischen Deckmantel."],
      ["Angst vor Demütigung", "Ständige Furcht, bloßgestellt zu werden. Vermeidungsverhalten oder aggressiver Gegenangriff bei Kritik."],
      ["Zwanghaftigkeit (Perfektionismus)", "Übertriebener Drang, alles unter Kontrolle zu haben. Patienten planen und strukturieren exzessiv."],
      ["Gefühllosigkeit (emotionale Kälte)", "Distanz zu den eigenen und fremden Emotionen. Patienten zeigen wenig Empathie, wirken kalt oder berechnend."]
    ],
    koerper: [
      ["Hypotonie (niedriger Blutdruck)", "Ungewöhnlich niedriger Blutdruck.", "Patienten fühlen sich müde, schwach und neigen zu Schwindel."],
      ["Kälteempfindung (Hypothermie)", "Starkes Kälteempfinden, insbesondere an Händen und Füßen.", "Patienten klagen über ständige Kälte, auch in warmen Räumen."],
      ["Krampfartige Bauchschmerzen (Koliken)", "Intensiv und schubweise auftretende Schmerzen.", "Oft verbunden mit Durchfall oder Verstopfung."],
      ["Erbrechen (Vomitus)", "Häufig und heftig, nicht selten begleitet von Dehydrierung.", "Patienten erbrechen bei Nahrungsaufnahme oder spontan."],
      ["Durchfall (Diarrhö)", "Schwere, wässrige Durchfälle.", "Häufig begleitet von Schwäche und Elektrolytverlust."],
      ["Blässe (Pallor)", "Unnatürlich blasse Haut.", "Patienten wirken krankhaft farblos, was auf Schwäche hindeuten kann."],
      ["Krämpfe (Spasmen)", "Muskelkrämpfe in verschiedenen Körperteilen.", "Typisch sind Krämpfe im Bereich des Bauchs und der Beine."],
      ["Tremor (Zittern)", "Feine, unkontrollierbare Bewegungen der Muskeln.", "Besonders bei Erschöpfung oder Aufregung ausgeprägt."],
      ["Trockener Mund (Xerostomie)", "Gefühl von Trockenheit im Mund.", "Patienten klagen über Schwierigkeiten beim Schlucken."],
      ["Schwäche (Asthenie)", "Generelle körperliche Schwäche und Antriebslosigkeit.", "Besonders nach physischen oder psychischen Anstrengungen."]
    ],
    fazit: `Der Veratrum-album-Patient steht sinnbildlich für die Überkompensation einer tiefen inneren Unsicherheit. Seine Psyche wird von <strong>Gier, Maßlosigkeit</strong> und einem <strong>intensiven Bedürfnis nach Kontrolle</strong> dominiert. Das spiegelt sich auch in den körperlichen Beschwerden wider, die von extremer Schwäche bis hin zu heftigen vegetativen Symptomen reichen. Psychologisch wie körperlich setzt sich dieses Mittelbild mit Extremen und übersteigerter Reaktion auf Mangelzustände auseinander.`
  },
  {
    n: 9, mittel: "Cannabis indica", farbe: "#e8812c", leidenschaft: "Trägheit", mindmap: "mindmap-cannabis",
    titel: "Trägheit, Selbstvergessenheit und mentale Ausflucht",
    psyche: [
      `Die Psyche des Typ-9-Patienten ist von einer Neigung zur <strong>Trägheit und einer Flucht in innere Welten</strong> geprägt, um der Realität zu entkommen. Diese Menschen verlieren sich oft in Gedankenspiralen, Tagträumen oder intensiven Fantasien, die sie von der Außenwelt abschirmen. Die Leidenschaft der <strong>Selbstvergessenheit</strong> zeigt sich in einem Mangel an Verbindung zum physischen Selbst oder zur Realität. Sie wirken zerstreut, distanziert oder lethargisch und vermeiden es, sich mit den Anforderungen und Verantwortlichkeiten des Lebens auseinanderzusetzen.`,
      `Typ-9-Patienten neigen zu <strong>sensorischen Überwältigungen</strong>, bei denen sie Umweltreize als übermäßig intensiv oder sogar bedrohlich empfinden. Dadurch ziehen sie sich oft zurück und schaffen eine innere Barriere. Ihre Wahrnehmung ist oft verzerrt, mit einer Tendenz zu paranoiden Gedanken, übermäßiger Angst oder dem Gefühl, die Kontrolle zu verlieren. Auf emotionaler Ebene können sie zwischen <strong>Euphorie und tiefer Melancholie</strong> schwanken, häufig begleitet von einem Gefühl der Hilflosigkeit.`,
      `Sie kämpfen mit einem tiefen Gefühl der <strong>Existenzangst</strong>, das sie in eine passive Haltung drängt. Ihre innere Welt ist oft reicher und intensiver als ihre äußere Realität, doch diese Flucht verstärkt die Tendenz zu Isolation und Trägheit. Die Schwäche, sich der Realität zu stellen, führt zu einer chronischen Unzufriedenheit und einem Gefühl der inneren Leere.`
    ],
    psych: [
      ["Derealisation (Entfremdungsgefühl)", "Gefühl, dass die Umwelt unwirklich oder entfernt erscheint. Patienten beschreiben ihre Umgebung als ›traumartig‹ oder fremd."],
      ["Depersonalisation (Ich-Entfremdung)", "Verlust des Gefühls, im eigenen Körper zu sein. Patienten fühlen sich von ihren Gedanken und Gefühlen abgetrennt."],
      ["Angstzustände (Panikattacken)", "Episoden plötzlicher Angst mit intensiver Unruhe. Oft begleitet von einem Gefühl des drohenden Unheils."],
      ["Paranoide Ideen (Verfolgungswahn)", "Misstrauen gegenüber anderen Menschen oder Situationen. Patienten haben das Gefühl, beobachtet oder verfolgt zu werden."],
      ["Gedankensprünge (Ideenflucht)", "Unkontrollierbare, assoziative Gedankengänge. Konzentration auf eine Aufgabe wird unmöglich."],
      ["Gefühl des Kontrollverlusts", "Angst, den Verstand zu verlieren oder sich irrational zu verhalten."],
      ["Lethargie (Apathie)", "Mangel an Energie und Motivation. Patienten ziehen sich zurück und vermeiden soziale Interaktionen."],
      ["Euphorie (übertriebene Hochstimmung)", "Vorübergehender Zustand extremer Freude und Kreativität. Patienten können hyperaktiv und ablenkbar erscheinen."],
      ["Vergesslichkeit (Amnesie)", "Häufige Erinnerungslücken oder Unaufmerksamkeit. Patienten vergessen alltägliche Dinge oder Handlungen."],
      ["Hypersensibilität", "Überempfindlichkeit gegenüber Licht, Lärm und Berührung. Patienten empfinden normale Reize als unangenehm oder schmerzhaft."]
    ],
    koerper: [
      ["Kopfschmerzen (Cephalgie)", "Spannungskopfschmerzen oder dumpfer Druck im Kopf.", "Patienten klagen über diffuse Schmerzen, besonders bei Stress."],
      ["Schwindel (Vertigo)", "Gefühl des Schwankens oder der Instabilität.", "Oft begleitet von Angst und einem Gefühl der Orientierungslosigkeit."],
      ["Mundtrockenheit (Xerostomie)", "Gefühl von Trockenheit im Mund.", "Patienten haben Schwierigkeiten beim Schlucken und Sprechen."],
      ["Herzklopfen (Palpitationen)", "Wahrnehmung eines schnellen oder unregelmäßigen Herzschlags.", "Besonders ausgeprägt bei Angstzuständen oder nach körperlicher Anstrengung."],
      ["Muskelschwäche (Myasthenie)", "Gefühl von Kraftlosigkeit in Armen und Beinen.", "Patienten berichten von Schwierigkeiten bei körperlicher Aktivität."],
      ["Verlangsamte Verdauung (Dyspepsie)", "Völlegefühl und Trägheit des Magens.", "Patienten klagen über Blähungen und Magenbeschwerden."],
      ["Schlafstörungen (Insomnie)", "Probleme beim Ein- oder Durchschlafen.", "Häufig begleitet von nächtlichem Grübeln oder Angstzuständen."],
      ["Überempfindlichkeit der Sinne (Hyperästhesie)", "Verstärkte Wahrnehmung von Reizen.", "Normale Umgebungsgeräusche oder Berührungen werden als unangenehm empfunden."],
      ["Kältegefühl (Hypothermie)", "Gefühl von Kälte, selbst bei normaler Umgebungstemperatur.", "Patienten suchen Wärme und klagen über kalte Extremitäten."],
      ["Anfälle (epileptische Symptome)", "Plötzliche Muskelzuckungen oder Bewusstseinsverlust.", "Selten, aber möglich bei starker sensorischer Überlastung."]
    ],
    fazit: `Der Typ-9-Patient lebt in einem inneren Spannungsfeld zwischen einer intensiven Fantasiewelt und der Unfähigkeit, sich mit der Realität auseinanderzusetzen. Seine Psyche ist von <strong>Trägheit, Selbstvergessenheit</strong> und Flucht vor Verantwortung geprägt. Diese mentalen Muster spiegeln sich in psychosomatischen Beschwerden wider, die sowohl sensorische Überempfindlichkeit als auch vegetative Dysbalancen umfassen.`
  }
];

const AB_ESSENZ = [
  ["Heilige Vollkommenheit", "Perfektion und Richtigkeit statt Liebe", "Zorn"],
  ["Heiliger Wille, heilige Freiheit", "Helfen und Geben statt Liebe", "Stolz"],
  ["Heiliges Gesetz, heilige Hoffnung", "Erfolg und Leistung statt Liebe", "Eitelkeit"],
  ["Heiliger Ursprung", "Individualität und Kreativität statt Liebe", "Neid"],
  ["Heilige Allgegenwart, heilige Transparenz", "Wissen und Beobachtung statt Liebe", "Geiz"],
  ["Heilige Kraft, heiliger Glaube", "Sicherheit und Loyalität statt Liebe", "Angst"],
  ["Heilige Arbeit, heiliger Plan", "Spaß und Freude statt Liebe", "Völlerei"],
  ["Heilige Wahrheit", "Macht und Kontrolle statt Liebe", "Wollust"],
  ["Heilige Liebe", "Harmonie und Selbstvergessenheit statt Liebe", "Trägheit"]
];

export function arzneimittelbilderPage() {
  const nav = AB_TYPEN.map(t => `<a class="ab-chip" href="javascript:void(0)" onclick="document.getElementById('ab-typ-${t.n}').scrollIntoView({behavior:'smooth'})" style="--tc:${t.farbe};"><span class="ab-chip__n">${t.n}</span><span class="ab-chip__m">${t.mittel}</span></a>`).join("");
  const essenz = AB_ESSENZ.map((e, i) => `<tr><th scope="row" style="border-left:5px solid ${AB_TYPEN[i].farbe};">Typ ${i + 1}</th><td>${e[0]}</td><td>${e[1]}</td><td>${e[2]}</td></tr>`).join("");
  const sektionen = AB_TYPEN.map(t => `
    <section class="ab-typ" id="ab-typ-${t.n}" style="--tc:${t.farbe};">
      <div class="ab-typ__head"><span class="ab-typ__num">${t.n}</span><div><p class="ab-typ__mittel">Homöopathikum: ${t.mittel}</p><h2 class="ab-typ__title">Der Typ-${t.n}-Patient in der homöopathischen Naturheilpraxis</h2><p class="ab-typ__sub">Die Psyche des Typ-${t.n}-Patienten: ${t.titel}</p></div></div>
      ${t.psyche.map(p => `<p class="ab-p">${p}</p>`).join("")}
      <details class="ab-det"><summary>Typische psychische Beschwerden <span>(${t.psych.length})</span></summary>
        <ol class="ab-list">${t.psych.map(x => `<li><strong>${x[0]}:</strong> ${x[1]}</li>`).join("")}</ol>
      </details>
      <details class="ab-det"><summary>Typische körperliche Beschwerden <span>(${t.koerper.length})</span></summary>
        <ol class="ab-list">${t.koerper.map(x => `<li><strong>${x[0]}:</strong> ${x[1]}<em>Darstellung: ${x[2]}</em></li>`).join("")}</ol>
      </details>
      <p class="ab-fazit">${t.fazit}</p>
      <p class="ab-links"><a href="javascript:void(0)" data-route="${t.mindmap}">Mindmap der Single-Rubriken: ${t.mittel} →</a><a class="ab-top" href="javascript:void(0)" onclick="document.getElementById('ab-top').scrollIntoView({behavior:'smooth'})">↑ Nach oben zur Typ-Auswahl</a></p>
    </section>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("arzneimittelbilder-9-typen")}
      <div class="page-content tug-page ab-page">
        <p class="eyebrow">Wissen · Enneagramm meets Homöopathie</p>
        <h1 class="section-title">Arzneimittelbilder und Beschreibung der neun Typen</h1>
        <p class="lead-small">Zu jedem der neun Enneagrammtypen steht hier das zugehörige Arzneimittelbild: die Psyche des Typs in der Naturheilpraxis, die typischen psychischen und körperlichen Beschwerden aus der Beschreibung des Mittelbilds und ein Fazit.</p>
        <h2 class="vb-section tug-h2">Was ist Enneagramm-Homöopathie?</h2>
        <p class="ab-p">Enneagramm-Homöopathie verbindet zwei Ebenen: das <strong>Persönlichkeitsmodell des Enneagramms</strong> mit der <strong>individuellen Arzneimittelwahl in der Homöopathie</strong>.</p>
        <p class="ab-p">Die Idee dahinter: Jeder Enneagrammtyp hat bestimmte emotionale Muster, Stressreaktionen und tiefere Grundängste. Diese inneren Dynamiken prägen nicht nur die Psyche, sondern oft auch körperliche Beschwerden.</p>
        <p class="ab-p">In der Enneagramm-Homöopathie wird deshalb nicht nur nach Symptomen geschaut, sondern auch nach dem ›inneren Stil‹ des Patienten. Ziel ist, ein homöopathisches Mittel zu finden, das sowohl die körperlichen als auch die seelischen Themen dieses Typs widerspiegelt.</p>
        <h2 class="vb-section tug-h2">Der Heilungsweg: Essenz, Leidenschaft und Instinkt</h2>
        <p class="ab-p">Jeder Typ trägt eine Essenz in sich, die in der Tradition als ›Heilige Idee‹ beschrieben wird. Schon im frühen Kindesalter geht der Kontakt zu dieser Essenz scheinbar verloren, und das wachsende Ego sucht das Glück außen. Aus der Suche nach Liebe entsteht für jeden Typ eine eigene Ego-Motivation, und die neun Leidenschaften halten diese Suche am Laufen. Die drei Instinktvarianten (Selbsterhaltung, sozial, Beziehung) geben den Leidenschaften die nötige Energie. Das Enneagramm-Heilmittel wird in diesem Bild als Mittel verstanden, das auf Instinkte und Leidenschaften ausgleichend ausgerichtet ist.</p>
        <div class="ab-table-wrap"><table class="ab-table"><thead><tr><th></th><th>Heilige Idee (Essenz)</th><th>Ego-Motivation</th><th>Leidenschaft</th></tr></thead><tbody>${essenz}</tbody></table></div>
        <div class="ab-nav" id="ab-top" role="navigation" aria-label="Typ wählen">${nav}</div>
        ${sektionen}
        <div class="ab-note"><strong>Hinweis:</strong> Die Beschreibungen sind Mittelbilder der homöopathischen Literatur, gedeutet im Rahmen des Enneagramms. Sie sind keine Diagnosen und ersetzen weder ärztliche Abklärung noch Behandlung. Körperliche Beschwerden gehören in jedem Fall zu einer Ärztin oder einem Arzt beziehungsweise zu einer Heilpraktikerin oder einem Heilpraktiker.</div>
        ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
        ${bookTip("leidenschaft-und-heilung", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Leidenschaft und Heilung")}
        ${bookTip("hinter-der-leidenschaft", "Die neun Wunden des Enneagramms – tiefgreifende Analyse der Urwunde hinter jeder Leidenschaft, mit konkreten Heilungswegen für alle 9 Typen.", "Hinter der Leidenschaft")}
        ${bookTip("heilung-als-erinnerung", "Heilung als Erinnerung an das, was wir im Grunde sind – jenseits von Symptom und Diagnose.", "Heilung als Erinnerung")}
        ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Sieben praxisnahe Wege, die helfen, sich selbst näherzukommen – ohne Umwege, ohne Schönrederei, direkt und klar.", "7 Wege zu Dir selbst")}
        ${bookTip("nichts-und-alles", "Stilles Buch über das Schauen nach innen &ndash; Bewusstsein, Raum und innere Freiheit.", "Nichts und Alles")}
        ${bookTip("der-raum-hinter-allem", "Der Raum, der bleibt, wenn Identifikation nachlässt – ein meditatives Werk über Bewusstsein und Freiheit.", "Der Raum hinter allem")}
        ${bookTip("sei-still-und-wisse-ich-bin-gott", "Ein spirituelles Buch über die tiefste Stille in uns und die Erfahrung von Transzendenz jenseits aller Konzepte.", "Sei still und wisse – ich bin Gott!")}
        ${bookTip("meta-intelligenz", "Meta-Intelligenz – die Intelligenz, die alle anderen Intelligenzen verbündet und das volle Potenzial des Bewusstseins erschließt.", "Meta-Intelligenz")}
        ${bookTip("meta-intelligenz-das-hoerbuch", "Meta-Intelligenz als Hörbuch – ideal für unterwegs oder zum meditativen Zuhören.", "Meta-Intelligenz (Hörbuch)")}
        ${relatedLinks([
          {route:"enneagramm-homoeopathie", label:"Enneagramm meets Homöopathie"},
          {route:"mindmaps-single-rubriken", label:"Mindmaps der Single-Rubriken (Homöopathie)"},
          {route:"wahnideen-nicht-reale-vorstellungen", label:"Nicht reale Vorstellungen: Wahnideen im Enneagramm und in der Homöopathie"},
          {route:"signaturenlehre-enneagramm-heilmittel", label:"Die 9 Enneagramm-Heilmittel & die Signaturenlehre"},
          {route:"warum-nur-9-heilmittel", label:"Warum nur 9 Enneagramm-Heilmittel und nicht 27?"}
        ])}
      </div>
    </div>`);
}
