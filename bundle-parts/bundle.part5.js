// Zentrales Portraits-Register \u2013 neue Zeile hier \u2192 \u00dcbersicht, Inhaltsverzeichnis und Leseprobe aktualisieren sich automatisch.
const KRIMINAL_PORTRAITS = [
  { route:"kriminalpsychologie-dennis-nilsen",        name:"Dennis Nilsen",                       subtyp:"SE1w2",  heading:"Dennis Nilsen \u2013 Selbsterhaltender Typ 1",                               teaser:"SE1w2 \u2013 'Der M\u00f6rder von Melrose Avenue', geb. 1945. 15 Morde an jungen M\u00e4nnern in London 1978\u20131983. Beamter, Gewerkschaftsaktivist, korrekter Nachbar \u2013 und ein T\u00e4ter, der seine Opfer nach dem Tod wochenlang in seiner Wohnung behielt. Adler-Energie: Kontrolle durch F\u00fcrsorge, Einsamkeit als Mordmotiv. Tierentsprechung: Adler." , land:"Großbritannien", tags:["Serienmord","Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-dorothea-puente",     name:"Dorothea Puente",                     subtyp:"SE1w2",  heading:"Dorothea Puente \u2013 Selbsterhaltender Typ 1",                              teaser:"SE1w2 \u2013 'Die Vermieterin des Todes', 1929\u20132011. Mindestens 9 Morde an Senioren und Behinderten in Sacramento, 1982\u20131988. Betreiberin einer Pension, Wohlt\u00e4terin der Gemeinde \u2013 und eine T\u00e4terin, die ihre Opfer im Garten begrub und deren Sozialschecks kassierte. Adler-Energie: moralische Ordnung als Fassade, F\u00fcrsorge als Kontrolle. Tierentsprechung: Adler." , land:"USA", tags:["Serienmord"], gender:"f"},
  { route:"kriminalpsychologie-michail-popkow",        name:"Michail Popkow",                   subtyp:"SE1w9",  heading:"Michail Popkow \u2013 Selbsterhaltender Typ 1",                          teaser:"SE1w9 \u2013 Serienm\xf6rder, geb. 1964. Mindestens 86 Opfer in der sibirischen Stadt Angarsk zwischen 1992 und 2010. Polizist, Familienvater, Nachbarschaftsmensch \u2013 und der Mann, der seine Morde als moralische S\xe4uberung verstand." , land:"Russland", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-dennis-rader",         name:"Dennis Rader",                     subtyp:"SE1w9",  heading:"Dennis Rader \u2013 Selbsterhaltender Typ 1",                               teaser:"SE1w9 \u2013 BTK-Killer, geb. 1945. Zehn Morde zwischen 1974 und 1991. Kirchenratsvorsitzender, Ordnungsbeauftragter, Familienvater \u2013 und der Mann, der seine Taten unter einem Selbstk\xfcnzel verbarg und sich jahrzehntelang nach Anerkennung sehnte." , land:"USA", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-andrei-tschikatilo",  name:"Andrei Tschikatilo",               subtyp:"SE1w9",  heading:"Andrei Tschikatilo \u2013 Selbsterhaltender Typ 1",                          teaser:"SE1w9 \u2013 Serienm\xf6rder, 1936\u20131994. 52 best\xe4tigte Opfer in der Sowjetunion. Der Schlachter von Rostow: Einser-Perfektionismus als Vernichtungslogik, Neunerfl\xfcgel als perfekte Tarnung." , land:"Ukraine", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-arno-funke",         name:"Arno Funke (\u201eDagobert\u201c)", subtyp:"SE1w9",  heading:"Arno Funke (\u201eDagobert\u201c) \u2013 Selbsterhaltender Typ 1",        teaser:"Erpresser, geb. 1951. Sechs Jahre, nie jemanden verletzt \u2013 die selbsterhaltende Eins mit Neunerfl\xfcgel: stiller Groll, akribische Methode, absolute Gewaltlosigkeit." , land:"Deutschland", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-paul-ogorzow",         name:"Paul Ogorzow",                        subtyp:"SE1w9",  heading:"Paul Ogorzow \u2013 Selbsterhaltender Typ 1",                              teaser:"SE1w9 \u2013 Der \u201eS-Bahn-M\xf6rder\u201c, 1912\u20131946. Acht Morde in Berlin 1939\u201341. Fl\xe4chentarnung durch spie\xdfb\xfcrgerliche Korrektheit, eiskaltes Doppelleben, moralische Schuld stets nach au\xdfen verlagert." , land:"Deutschland", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-ted-bundy",           name:"Ted Bundy",                           subtyp:"SO1w9",  heading:"Ted Bundy \u2013 Sozialer Typ 1",                                           teaser:"SO1w9 \u2013 Serienm\u00f6rder, 1946\u20131989. B\u00fcrgerliche Fassade, unterdr\u00fcckte Wut, Resentiment. Die soziale Eins mit Neunerfl\u00fcgel: Selbstgerechtigkeit als Verblendung, Zorn als kalte Triebkraft. Tierentsprechung: Gans." , land:"USA", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-heinrich-pommerenke",  name:"Heinrich Pommerenke",                 subtyp:"SO1w9",  heading:"Heinrich Pommerenke \u2013 Sozialer Typ 1",                                teaser:"SO1w9 \u2013 Serienm\xf6rder, 1937\u20132008. Mindestens 10 Opfer in S\xfcddeutschland 1959\u201360. Das \u201eUngeheuer vom Schwarzwald\u201c: wahnhafter g\xf6ttlicher Strafauftrag, emotionale Dissoziation und ein Leben im Zeichen krampfhafter S\xfchne." , land:"Deutschland", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-mary-ann-cotton",      name:"Mary Ann Cotton",                     subtyp:"SX1w2",  heading:"Mary Ann Cotton \u2013 Sexuelle Typ 1",                                     teaser:"SX1w2 \u2013 Britanniens erste bekannte Serienm\u00f6rderin, 1832\u20131873. Krankenschwester, vierfache Witwe, vermutlich bis zu 21 Vergiftungsopfer mit Arsen \u2013 Ehem\u00e4nner, Kinder, Angeh\u00f6rige. Zweierfl\u00fcgel als F\u00fcrsorge-Fassade, Eins als unerbittlicher Richter \u00fcber die eigene Beziehung. Tierentsprechung: Schwarze Mamba." , land:"Großbritannien", tags:["Serienmord","Nahbereich"], gender:"f"},
  { route:"kriminalpsychologie-otto-muehl",           name:"Otto M\u00fchl",                          subtyp:"SX1w2",  heading:"Otto M\u00fchl \u2013 Sexueller Typ 1",                                          teaser:"SX1w2 \u2013 Wiener Aktionist und Kommunengr\u00fcnder, 1925\u20132013. Gr\u00fcnder der Friedrichshof-Kommune (AAO), 1991 wegen sexuellen Missbrauchs Minderj\u00e4hriger zu 7 Jahren Haft verurteilt. Moralischer Reformer mit Doppelstandard: Regeln f\u00fcr alle, Selbstausnahme f\u00fcr sich. Tierentsprechung: Schwarze Mamba." , land:"Österreich", tags:["Missbrauch","Nahbereich"], gender:"m"},
  { route:"kriminalpsychologie-alex-murdaugh",        name:"Alex Murdaugh",                    subtyp:"SX1w2",  heading:"Alex Murdaugh \u2013 Sexueller Typ 1",                                      teaser:"SX1w2 \u2013 Anwalt und Doppelm\u00f6rder, geb. 1968. 87 Jahre Rechtsdynastie, Millionenbetrug, Doppelmord an Frau und Sohn 2021. Der Zweierfl\u00fcgel als Charme-Fassade, die Eins als gnadenloser Richter \u00fcber das eigene Bild. Tierentsprechung: Schwarze Mamba." , land:"USA", tags:["Nahbereich"], gender:"m"},
  { route:"kriminalpsychologie-gary-ridgway",         name:"Gary Ridgway",                        subtyp:"SX1w2",  heading:"Gary Ridgway \u2013 Sexueller Typ 1",                                       teaser:"SX1w2 \u2013 Der \u201eGreen-River-Killer\u201c, geb. 1949. Mindestens 49 best\xe4tigte Morde in Washington State (1982\u20132001), wahrscheinlich \xfcber 70. Kirchg\xe4nger, Familienvater, unscheinbarer Lkw-Lackierer \u2013 und der Mann, der Frauen in seiner intimsten Sph\xe4re vernichtete, weil Kontrolle f\xfcr ihn Liebe bedeutete." , land:"USA", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-paul-bernardo",         name:"Paul Bernardo",                       subtyp:"SX1w2",  heading:"Paul Bernardo \u2013 Sexueller Typ 1",                                      teaser:"SX1w2 \u2013 \u201eKen\u201c der Ken-und-Barbie-Killer, geb. 1964. Scarborough Rapist, Serienm\u00f6rder, 1994 zu lebenslanger Haft verurteilt. Schwarze Mamba: totale Kontrolle \xfcber die intimste Sph\xe4re, Zweierfl\xfcgel als Charme-Fassade, Reinheitsfixierung als Vernichtungslogik." , land:"Kanada", tags:["Serienmord","Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-gennadi-mikhasevich",  name:"Gennadi Mikhasevich",                 subtyp:"SX1w2",  heading:"Gennadi Mikhasevich \u2013 Sexueller Typ 1",                                 teaser:"SX1w2 \u2013 'Der W\u00fcrger von Witebsk', geb. 1947. 36 Frauen ermordet in der Wei\u00dfrussischen SSR (heute Belarus) (1971\u20131985). Familienvater, Drushinnik (freiwilliger Volksordnungsh\u00fcter), Parteiaktivist \u2013 und Serienm\u00f6rder, der 14 Jahre unentdeckt blieb, w\u00e4hrend ein Unschuldiger f\u00fcr seine Taten hingerichtet wurde. Tierentsprechung: Schwarze Mamba." , land:"Belarus", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-fritz-haarmann",        name:"Fritz Haarmann",                   subtyp:"SX1w9",  heading:"Fritz Haarmann \u2013 Sexueller Typ 1",                                     teaser:"SX1w9 \u2013 Hannover 1918\u20131924. Mindestens 24 Morde, Polizeispitzel, Volksgestalt im Kiez. Der Werwolf von Hannover: SX1-Kontrollwille als letzte Besitznahme, Neunerfl\u00fcgel als warme Alltagsfassade. Tierentsprechung: Schwarze Mamba." , land:"Deutschland", tags:["Serienmord","Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-josef-fritzl",         name:"Josef Fritzl",                     subtyp:"SX1w9",  heading:"Josef Fritzl \u2013 Sexueller Typ 1",                                       teaser:"SX1w9 \u2013 Amstetten, \u00d6sterreich, 1984\u20132008. 24 Jahre Kerkerhaft, 7 Kinder, Doppelleben als geachteter B\u00fcrger. Die sexuelle Eins mit Neunerfl\u00fcgel: absolute Kontrolle \u00fcber die intimste Beziehung, nach au\u00dfen vollst\u00e4ndige Unauff\u00e4lligkeit. Tierentsprechung: Schwarze Mamba." , land:"Österreich", tags:["Missbrauch","Nahbereich"], gender:"m"},
  { route:"kriminalpsychologie-harvey-weinstein",    name:"Harvey Weinstein",                    subtyp:"SE2w1",  heading:"Harvey Weinstein \u2013 Selbsterhaltender Typ 2",                           teaser:"Filmproduzent, geb. 1952. M\xe4zen und Predator in einer Person \u2013 die selbsterhaltende Zwei mit Einserfl\xfcgel als Blaupause systemischer Macht\xfcberschreitung. Ausl\xf6ser der globalen #MeToo-Bewegung." , land:"USA", tags:["Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-jonathan-meijer",     name:"Jonathan Meijer",                     subtyp:"SE2w1",  heading:"Jonathan Meijer \u2013 Selbsterhaltender Typ 2",                              teaser:"SE2w1 \u2013 Samenspender, der \xfcber 550 Kinder zeugte. Helfen als Identit\xe4t, Stolz als blinder Fleck: der Typ 2 im Fall Jonathan Meijer." , land:"Niederlande", tags:["Betrug","Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-angel-resendez",      name:"\u00c1ngel Res\u00e9ndez",                     subtyp:"SE2w1",  heading:"\u00c1ngel Res\u00e9ndez \u2013 Selbsterhaltender Typ 2",                          teaser:"SE2w1 \u2013 \u2018Der Eisenbahn-Killer\u2019, 1960\u20132006. 9 best\u00e4tigte Morde in den USA (1997\u20131999), 6 weitere zugeschrieben. Als illegaler Einwanderer entlang von G\u00fcterz\u00fcgen durch die USA reisend \u2013 Einbruch und Gewalt als \u00dcberlebensstrategie. Tierentsprechung: Flusspferd." , land:"Mexiko/USA", tags:["Sonstiges"], gender:"m"},
  { route:"kriminalpsychologie-tommy-lynn-sells",    name:"Tommy Lynn Sells",                    subtyp:"SE2w1",  heading:"Tommy Lynn Sells \u2013 Selbsterhaltender Typ 2",                           teaser:"SE2w1 \u2013 \u2018Der Coast-to-Coast-Killer\u2019, 1964\u20132014. Zwischen 13 und 70 Morde in zahlreichen US-Bundesstaaten \u00fcber zwei Jahrzehnte. Wanderarbeiter, Drifter, scheinbar harmloser Fremder \u2013 F\u00fcrsorge als K\u00f6der, moralische Selbstgerechtigkeit als Rechtfertigung. Tierentsprechung: Kojote." , land:"USA", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-jeanne-weber",         name:"Jeanne Weber",                        subtyp:"SE2w1",  heading:"Jeanne Weber – Selbsterhaltende Typ 2",                                teaser:"SE2w1 – „Die Menschenfresserin von der Goutte d'Or\", 1874–1918. Erwürgte mehrere Kinder aus dem eigenen und dem verwandtschaftlichen Umfeld (1905–1908). Fürsorge als Tarnung, Einserflügel als zwanghafte Wiederholung trotz wachsendem Entdeckungsrisiko. Tierentsprechung: Flusspferd." , land:"Frankreich", tags:["Serienmord","Nahbereich"], gender:"f"},
  { route:"kriminalpsychologie-peter-sutcliffe",     name:"Peter Sutcliffe",                     subtyp:"SE2w1",  heading:"Peter Sutcliffe \u2013 Selbsterhaltender Typ 2",                             teaser:"SE2w1 \u2013 'Der Yorkshire Ripper', 1946\u20132020. 13 Morde an Frauen in Nordengland 1975\u20131980, 7 weitere \u00dcberlebende. LKW-Fahrer, Familienvater, hilfsbereiter Nachbar \u2013 F\u00fcrsorge als Tarnung, moralisches Urteil als M\u00f6rdermotiv. Tierentsprechung: Flusspferd." , land:"Großbritannien", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-anna-delvey",         name:"Anna Delvey",                         subtyp:"SE2w3",  heading:"Anna Delvey \u2013 Selbsterhaltender Typ 2",                                  teaser:"SE2w3 \u2013 Fake-Erbin der New Yorker Hochgesellschaft. Stolz als Inszenierung: wie der Dreierfl\xfcgel der Zwei eine vollst\xe4ndige Lebensfiktion erm\xf6glicht." , land:"Russland/Deutschland", tags:["Betrug"], gender:"f"},
  { route:"kriminalpsychologie-buster-murdaugh",     name:"Buster Murdaugh",                     subtyp:"SE2w3",  heading:"Buster Murdaugh \u2013 Selbsterhaltender Typ 2",                              teaser:"SE2w3 \u2013 Sohn der Murdaugh-Dynastie. Erbliches Zweier-Privileg: wie ein \xfcbernommenes Machtsystem das Enneagramm Typ 2 pr\xe4gt." , land:"USA", tags:["Nahbereich"], gender:"m"},
  { route:"kriminalpsychologie-john-wayne-gacy",     name:"John Wayne Gacy",                     subtyp:"SE2w3",  heading:"John Wayne Gacy \u2013 Selbsterhaltender Typ 2",                              teaser:"SE2w3 \u2013 der \u201eKiller Clown\u201c. 33 Morde hinter der Fassade des B\xfcrgerengagements: das Zweier-Privileg in seiner extremsten Auspr\xe4gung." , land:"USA", tags:["Serienmord","Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-sebastian-greenwood", name:"Sebastian Greenwood",             subtyp:"SE2w3",  heading:"Sebastian Greenwood \u2013 Selbsterhaltender Typ 2",                          teaser:"SE2w3 \u2013 Mitgr\xfcnder des OneCoin-Betrugs. Der Netzwerker hinter der \"Cryptoqueen\": Beziehungsarchitektur als Waffe, Geben als Herrschaftsinstrument." , land:"Schweden", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-rudolf-pleil",         name:"Rudolf Pleil",                        subtyp:"SE2w3",  heading:"Rudolf Pleil \u2013 Selbsterhaltender Typ 2",                              teaser:"SE2w3 \u2013 Serienm\xf6rder, 1924\u20131958. Mindestens 9 Opfer in der Nachkriegs-Grenzzone. \u201eDer beste Totmacher\u201c: die selbsterhaltende Zwei mit Dreierfl\xfcgel in ihrer dunkelsten Auspr\xe4gung \u2013 Stolz als Anspruch auf Leben und Tod." , land:"Deutschland", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-jack-unterweger",     name:"Jack Unterweger",                     subtyp:"SO2w1",  heading:"Jack Unterweger \u2013 Sozialer Typ 2",                                      teaser:"SO2w1 \u2013 'Der Dichter und der Tod', 1950\u20131994. Serienm\u00f6rder, Gef\u00e4ngnisautor, TV-Journalist \u2013 ein von Intellektuellen gefeierter 'Resozialisierter', der nach seiner Entlassung sofort weitermordete. Mindestens 10 Morde, m\u00f6glicherweise 13. Tierentsprechung: Golden Retriever." , land:"Österreich", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-jim-jones",             name:"Jim Jones",                           subtyp:"SO2w3",  heading:"Jim Jones \u2013 Sozialer Typ 2",                                          teaser:"SO2w3 \u2013 Sektenf\xfchrer und Massenmord-Regisseur, 1931\u20131978. \xdcber 900 Tote in Jonestown, Guyana. Der Helfer als Heilsbringer: wie die soziale Zwei mit Dreierfl\xfcgel aus Krankenhausbauer zum Herrscher \xfcber Leben und Tod wurde \u2013 und im Achter-Stresspunkt alles vernichtete, was sie liebte." , land:"USA", tags:["Terror","Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-cedric-maake",        name:"Cedric Maake",                        subtyp:"SO2w3",  heading:"Cedric Maake \u2013 Sozialer Typ 2",                                         teaser:"SO2w3 \u2013 'Der Wemmer-Pan-Killer', geb. 1965. 27 Morde in Johannesburg 1996\u20131997 \u2013 einer der schwersten Serienmord-F\u00e4lle der s\u00fcdafrikanischen Geschichte. 1.395 Jahre Haft. Die soziale Zwei mit Dreierfl\u00fcgel: gesellige Unsichtbarkeit als Deckmantel. Tierentsprechung: Golden Retriever." , land:"Südafrika", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-osama-bin-laden",      name:"Osama bin Laden",                    subtyp:"SO2w1",  heading:"Osama bin Laden \u2013 Sozialer Typ 2",                                    teaser:"SO2w1 \u2013 Gr\xfcnder von al-Qaida, 1957\u20132011. Hauptverantwortlicher f\xfcr die Anschl\xe4ge vom 11. September 2001. Die soziale Zwei mit Einserfl\xfcgel: Selbstopferung f\xfcr die Gemeinschaft als h\xf6chster Stolz, moralische Empfindsam\u00adkeit als Vernichtungslogik. Tierentsprechung: Golden Retriever." , land:"Saudi-Arabien", tags:["Terror"], gender:"m"},
  { route:"kriminalpsychologie-pamela-smart",        name:"Pamela Smart",                        subtyp:"SX2w3",  heading:"Pamela Smart \u2013 Sexueller Typ 2",                                        teaser:"SX2w3 \u2013 Die Verf\u00fchrerin von Derry, geb. 1967. Manipulierte einen 15-j\u00e4hrigen Sch\u00fcler zur Ermordung ihres Mannes (1990). Als einzige der Beteiligten sitzt sie noch immer in Haft. Die sexuelle Zwei mit Dreierfl\u00fcgel: Liebe als Hebel, Stolz als blinder Fleck. Tierentsprechung: Kamel." , land:"USA", tags:["Nahbereich"], gender:"f"},
  { route:"kriminalpsychologie-michael-franzese",     name:"Michael Franzese",                    subtyp:"SE3w2",  heading:"Michael Franzese \u2013 Selbsterhaltender Typ 3",                          teaser:"SE3w2 \u2013 j\xfcngster Mafia-Capo seit Al Capone. Benzinsteuerbetrug, Milliarden-Einnahmen \u2013 und der einzige Mob-Boss, der die Mafia lebend und ohne Kronzeugenregelung verlie\xdf." , land:"USA", tags:["Mafia"], gender:"m"},
  { route:"kriminalpsychologie-pablo-escobar",       name:"Pablo Escobar",                       subtyp:"SE3w4",  heading:"Pablo Escobar \u2013 Selbsterhaltender Typ 3",                              teaser:"SE3w4 \u2013 Drogenbaron, 1949\u20131993. 80\xa0% des Weltmarkts, 30\xa0Mrd. Dollar Verm\xf6gen, Volksheld und Terrorist zugleich \u2013 die selbsterhaltende Drei in ihrer dunkelsten Auspr\xe4gung." , land:"Kolumbien", tags:["Mafia","Terror"], gender:"m"},
  { route:"kriminalpsychologie-tom-keating",         name:"Tom Keating",                         subtyp:"SE3w4",  heading:"Tom Keating \u2013 Selbsterhaltender Typ 3",                                teaser:"SE3w4 \u2013 Einer der gr\u00f6\u00dften Kunstf\u00e4lscher des 20. Jahrhunderts, 1917\u20131984. \u00dcber 2.000 F\u00e4lschungen in den Stilen von rund 100 Meistern, gespickt mit absichtlichen \u201eZeitbomben\u201c f\u00fcr sp\u00e4tere Entlarvung \u2013 Rache am Kunstmarkt statt Bereicherung. Tierentsprechung: Waschb\u00e4r." , land:"Großbritannien", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-samuel-bankman-fried", name:"Samuel Bankman-Fried",              subtyp:"SE3w4",  heading:"Samuel Bankman-Fried \u2013 Selbsterhaltender Typ 3",                       teaser:"SE3w4 \u2013 Gr\u00fcnder von FTX und Alameda Research, geb. 1992. Einer der gr\u00f6\u00dften Betrugsf\u00e4lle der Kryptowelt: Kundengelder in Milliardenh\u00f6he umgeleitet, 25 Jahre Haft 2023. Die selbsterhaltende Drei mit Viererfl\u00fcgel: Bescheidenheitsfassade, Effektivit\u00e4tswahn und innere Unsicherheit als Motor des Zusammenbruchs. Tierentsprechung: Waschb\u00e4r." , land:"USA", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-ruja-ignatova",       name:"Ruja Ignatova",                       subtyp:"SE3w4",  heading:"Ruja Ignatova \u2013 Selbsterhaltender Typ 3",                              teaser:"\u201eCryptoqueen\u201c, geb. 1980. \xdcber 4\xa0Mrd. Euro Schaden, seit 2017 spurlos verschwunden \u2013 die selbsterhaltende Drei mit Viererfl\xfcgel: perfekte Inszenierung, globaler Betrug, radikales Verschwinden." , land:"Bulgarien", tags:["Betrug"], gender:"f"},
  { route:"kriminalpsychologie-henri-landru",         name:"Henri Désiré Landru",                 subtyp:"SE3w4",  heading:"Henri Désiré Landru – Selbsterhaltender Typ 3",                        teaser:"SE3w4 – Der „Blaubart von Paris“, 1869–1922. Ermordete mindestens zehn Frauen über Kontaktanzeigen (1914–1919), verbrannte die Leichen im eigenen Küchenofen. Akribische Buchführung, zynischer Humor vor Gericht – die selbsterhaltende Drei mit Viererflügel. Tierentsprechung: Waschbär." , land:"Frankreich", tags:["Serienmord","Betrug"], gender:"m"},
  { route:"kriminalpsychologie-belle-gunness",         name:"Belle Gunness",                       subtyp:"SE3w4",  heading:"Belle Gunness \u2013 Selbsterhaltender Typ 3",                               teaser:"SE3w4 \u2013 Die Schwarze Witwe von La Porte, 1859\u20131908(?). Mindestens 25\u201340 Opfer, darunter zwei Ehem\xe4nner und zahlreiche M\xe4nner, die sie per Heiratsanzeige anlockte. Der Waschb\xe4r: stille T\xe4uschung, Ressourcenkontrolle, kein Geltungsdrang \u2013 nur die n\xe4chste Mahlzeit. Tierentsprechung: Waschb\xe4r." , land:"Norwegen/USA", tags:["Serienmord","Betrug"], gender:"f"},
  { route:"kriminalpsychologie-karla-homolka",        name:"Karla Homolka",                       subtyp:"SE3w4",  heading:"Karla Homolka \u2013 Selbsterhaltender Typ 3",                           teaser:"SE3w4 \u2013 \u201eBarbie\u201c der Ken-und-Barbie-Killer, geb. 1970. Drei Morde gemeinsam mit Paul Bernardo 1990\u201393, darunter ihre eigene Schwester. Waschb\xe4r-Energie: perfekte Anpassung, doppeltes Gesicht, der Deal mit der Justiz als letzter Inszenierungsakt." , land:"Kanada", tags:["Serienmord","Missbrauch"], gender:"f"},
  { route:"kriminalpsychologie-bernie-madoff",         name:"Bernie Madoff",                    subtyp:"SE3w4",  heading:"Bernie Madoff \u2013 Selbsterhaltender Typ 3",                              teaser:"SE3w4 \u2013 Gr\u00f6\u00dfter Anlagebetrug der Geschichte, 1938\u20132021. 65 Milliarden Dollar gef\u00e4lschte Kontoausz\u00fcge, mindestens 20 Jahre Ponzi-System \u2013 der selbsterhaltende Dreier mit Viererfl\u00fcgel: stille Inszenierung, Vertrauen als Waffe, Waschb\u00e4r-Energie bis zum letzten Tag. Tierentsprechung: Waschb\u00e4r." , land:"USA", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-pedro-alonso-lopez",  name:"Pedro Alonso L\u00f3pez",                  subtyp:"SO3w2",  heading:"Pedro Alonso L\u00f3pez \u2013 Sozialer Typ 3",                                   teaser:"SO3w2 \u2013 'Monster der Anden', geb. 1948. Mindestens 350 Morde an jungen M\u00e4dchen in Kolumbien, Peru und Ecuador, 1969\u20131980. Der Gepard: zielgenaue Verf\u00fchrung, charismatische Maske, Erfolg als Opferzahl \u2013 die soziale Drei mit Zweierfl\u00fcgel in ihrer dunkelsten Auspr\u00e4gung." , land:"Kolumbien", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-andrew-cunanan",      name:"Andrew Cunanan",                      subtyp:"SO3w4",  heading:"Andrew Cunanan \u2013 Sozialer Typ 3",                                       teaser:"SO3w4 \u2013 F\xfcnffachm\u00f6rder und M\u00f6rder von Gianni Versace, 1969\u20131997. Vier Morde in zw\u00f6lf Tagen quer durch die USA, dann Versace vor seiner Villa in Miami Beach. Der Gepard: Prestige als Lebensinhalt, Fassade als einzige Realit\u00e4t, Viererfl\u00fcgel als dunkle Unterstr\u00f6mung." , land:"USA", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-oj-simpson",          name:"O.J. Simpson",                        subtyp:"SO3w4",  heading:"O.J. Simpson \u2013 Sozialer Typ 3",                                         teaser:"SO3w4 \u2013 NFL-Legende und Protagonist des \u201eProcesses des Jahrhunderts\u201c, 1947\u20132024. Freigesprochen im Strafprozess 1995, zivilrechtlich schuldig 1997. Der Gepard: das \xf6ffentliche Selbstbild als einzige Realit\xe4t, Inszenierung bis zur letzten Sekunde. Tierentsprechung: Gepard." , land:"USA", tags:["Nahbereich"], gender:"m"},
  { route:"kriminalpsychologie-vincenzo-peruggia",     name:"Vincenzo Peruggia",                    subtyp:"SO3w4",  heading:"Vincenzo Peruggia \u2013 Sozialer Typ 3",                      teaser:"SO3w4 \u2013 Der Dieb der Mona Lisa, 1881\u20131925. Stahl am 21. August 1911 die Mona Lisa aus dem Louvre und verbarg sie zwei Jahre in seiner Pariser Mansardenwohnung. Verhaftet 1913. Der Gepard: einmaliger pr\xe4ziser Schlag, patriotische Inszenierung, \xe4sthetische Bindung ans Objekt. Tierentsprechung: Gepard.", land:"Italien", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-wade-wilson",         name:"Wade Wilson",                         subtyp:"SO3w4",  heading:"Wade Wilson \u2013 Sozialer Typ 3",                                         teaser:"SO3w4 \u2013 Doppelm\u00f6rder, geb. 1996. Zwei Morde in einer Nacht (Oktober 2019, Florida). Todesurteil 2024. Der Gerichtssaal als B\u00fchne: wie die soziale Drei mit Vierfl\u00fcgel Aufmerksamkeit zur einzigen W\u00e4hrung macht. Tierentsprechung: Gepard." , land:"USA", tags:["Nahbereich","Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-diane-downs",          name:"Diane Downs",                         subtyp:"SX3w4",  heading:"Diane Downs \u2013 Sexueller Typ 3",                                       teaser:"SX3w4 \u2013 Kindsm\u00f6rderin, geb. 1955. 1983 erschoss sie ihre drei Kinder in Oregon, um einem Mann das perfekte, ungebundene Ideal zu sein. Die sexuelle Drei mit Viererfl\u00fcgel: Kinder als st\u00f6rende Requisiten, blockierte Herzenergie als Tatmotiv, Kalk\u00fcl statt Gef\u00fchl. Tierentsprechung: Pfau." , land:"USA", tags:["Nahbereich"], gender:"f"},
  { route:"kriminalpsychologie-luka-magnotta",       name:"Luka Magnotta",                       subtyp:"SX3w4",  heading:"Luka Magnotta \u2013 Sexueller Typ 3",                                     teaser:"SX3w4 \u2013 M\xf6rder und digitaler Selbstinszenierer, 2012. 70+ Aliasnamen, Mord als Content, Verhaftung beim Lesen eigener Schlagzeilen \u2013 die sexuelle Drei in ihrer dunkelsten Auspr\xe4gung." , land:"Kanada", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-richard-ramirez",     name:"Richard Ram\u00edrez",                     subtyp:"SX3w4",  heading:"Richard Ram\u00edrez \u2013 Sexueller Typ 3",                                     teaser:"SX3w4 \u2013 'Der Night Stalker', geb. 1960, gest. 2013. 13 Morde, Vergewaltigungen, Einbr\u00fcche in S\u00fcdkalifornien 1984\u20131985. Satanische Ikonografie, Inszenierung des B\u00f6sen, Groupies im Gerichtssaal \u2013 die sexuelle Drei mit Viererfl\u00fcgel: Selbstmythologisierung als Todeswaffe. Tierentsprechung: Pfau." , land:"USA", tags:["Sonstiges"], gender:"m"},
  { route:"kriminalpsychologie-david-berkowitz",      name:"David Berkowitz",                     subtyp:"SE4w3",  heading:"David Berkowitz \u2013 Selbsterhaltender Typ 4",                          teaser:"SE4w3 \u2013 \u201eSon of Sam\u201c, New York 1976\u201377. Sechs Morde, Bekennerbriefe, tiefer Einsamkeitsschmerz \u2013 die selbsterhaltende Vier mit Dreierfl\u00fcgel: Neid als Vernichtung des Begehrten." , land:"USA", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-elliot-rodger",       name:"Elliot Rodger",                       subtyp:"SO4w5",  heading:"Elliot Rodger \u2013 Sozialer Typ 4",                                        teaser:"SO4w5 \u2013 Isla-Vista-Massaker 2014. 6 Tote, 14 Verletzte \u2013 die soziale Vier mit F\xfcnferfl\xfcgel: Neid als Weltgericht, Ausgeschlossenheit als Vernichtungsauftrag. Tierentsprechung: G\xfcrteltier." , land:"USA/Großbritannien", tags:["Terror"], gender:"m"},
  { route:"kriminalpsychologie-bonnie-parker",        name:"Bonnie Parker",                       subtyp:"SX4w3",  heading:"Bonnie Parker – Sexuelle Typ 4",                                       teaser:"SX4w3 – Hälfte von „Bonnie and Clyde\", 1910–1934. 21 Monate Verbrecherjagd durch den mittleren Westen der USA, selbstmythologisierende Gedichte, getötet in einem Polizeihinterhalt. Die Beziehung als tragisches Kunstwerk, der Dreierflügel als öffentliche Bühne. Tierentsprechung: Chihuahua." , land:"USA", tags:["Serienmord","Raub"], gender:"f"},
  { route:"kriminalpsychologie-adolf-hitler",        name:"Adolf Hitler",                        subtyp:"SX4w3",  heading:"Adolf Hitler \u2013 Sexueller Typ 4",                                      teaser:"SX4w3 \u2013 Diktator, 1889\u20131945. Hauptverantwortlicher f\xfcr Holocaust und Weltkrieg. Die sexuelle Vier mit Dreierfl\xfcgel in ihrer dunkelsten Auspr\xe4gung: Neid als Vernichtungswille." , land:"Österreich/Deutschland", tags:["Terror"], gender:"m"},
  { route:"kriminalpsychologie-joachim-kroll",        name:"Joachim Kroll",                       subtyp:"SE5w6",  heading:"Joachim Kroll \u2013 Selbsterhaltender Typ 5",                             teaser:"SE5w6 \u2013 Kanalarbeiter und Serienm\xf6rder, 1933\u20131991. Mindestens 8 Opfer im Ruhrgebiet zwischen 1955 und 1976. Der \u201eRuhrkannibale\u201c: radikaler R\xfcckzug, extreme Ressourcenknappheit und die dunkelste Auspr\xe4gung der selbsterhaltenden F\xfcnf." , land:"Deutschland", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-ted-kaczynski",      name:"Dr. Ted Kaczynski",                        subtyp:"SO5w4",  heading:"Ted Kaczynski \u2013 Sozialer Typ 5",                                       teaser:"SO5w4 \u2013 'Unabomber', 1942\u20132023. Bombenanschl\xe4ge 1978\u20131995, 3 Tote, 23 Verletzte \u2013 die soziale F\xfcnf mit Viererfl\xfcgel: Wissen als Weltgericht, intellektuelle \xdcberlegenheit als Sendungsauftrag. Tierentsprechung: Oktopus." , land:"USA", tags:["Terror"], gender:"m"},
  { route:"kriminalpsychologie-harold-shipman",    name:"Dr. Harold Shipman",                      subtyp:"SO5w6",  heading:"Harold Shipman \u2013 Sozialer Typ 5",                                      teaser:"SO5w6 \u2013 Hausarzt und Serienm\u00f6rder, 1946\u20132004. Mindestens 218 Opfer \u2013 der t\u00f6dlichste Einzelt\u00e4ter der britischen Kriminalgeschichte. Der Oktopus: Wissen als Kontrolle, stille Herrschaft \u00fcber Leben und Tod hinter der Fassade des vertrauensw\u00fcrdigen Doktors." , land:"Großbritannien", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-jeffrey-dahmer",      name:"Jeffrey Dahmer",                      subtyp:"SX5w4",  heading:"Jeffrey Dahmer \u2013 Sexueller Typ 5",                                    teaser:"SX5w4 \u2013 Serienm\xf6rder, 1960\u20131994. 17 Opfer, radikale Verschmelzungsfantasien \u2013 die sexuelle F\xfcnf mit Viererfl\xfcgel in ihrer dunkelsten Auspr\xe4gung: Gier als Vereinnahmung." , land:"USA", tags:["Serienmord","Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-joel-rifkin",          name:"Joel Rifkin",                         subtyp:"SX5w6",  heading:"Joel Rifkin \u2013 Sexueller Typ 5",                                         teaser:"SX5w6 \u2013 US-amerikanischer Serienm\u00f6rder, geb. 1959. 17 Morde an Prostituierten in New York City 1989\u20131993. Vorort-Bewohner, sozial unsichtbar, nachtaktiv auf der Suche nach kontrollierter N\u00e4he. Tierentsprechung: Igel." , land:"USA", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-john-list",            name:"John List",                           subtyp:"SE6w5",  heading:"John List \u2013 Selbsterhaltender Typ 6",                                   teaser:"SE6w5 \u2013 F\xfcnffachm\u00f6rder, 1925\u20132008. Erschoss am 9. November 1971 seine gesamte Familie in Westfield, New Jersey \u2013 und lebte danach 17 Jahre unentdeckt als Buchhalter \"Robert Clark\". Das Kaninchen: Angst als Tatmotiv, Schweigen als F\xfcnferfl\xfcgel, Religion als zerst\xf6rerische Rechtfertigung. Tierentsprechung: Kaninchen." , land:"USA", tags:["Nahbereich"], gender:"m"},
  { route:"kriminalpsychologie-adolf-eichmann",      name:"Adolf Eichmann",                       subtyp:"SO6w5",  heading:"Adolf Eichmann \u2013 Sozialer Typ 6",                                     teaser:"SO6w5 \u2013 SS-Obersturmbannf\xfchrer und Hauptorganisator der Holocaust-Logistik, 1906\u20131962. Das Paradebeispiel der Banalit\xe4t des B\xf6sen: die soziale Sechs mit F\xfcnferfl\xfcgel als gehorsamer B\xfcrokratievollstrecker. Tierentsprechung: Erdm\xe4nnchen." , land:"Deutschland", tags:["Terror"], gender:"m"},
  { route:"kriminalpsychologie-anders-breivik",      name:"Anders Breivik",                      subtyp:"SX6w5",  heading:"Anders Breivik \u2013 Sexueller Typ 6",                                    teaser:"SX6w5 \u2013 Attent\xe4ter, geb. 1979. 77 Tote, jahrelange geheime Planung \u2013 die sexuelle Sechs mit F\xfcnferfl\xfcgel in ihrer dunkelsten Auspr\xe4gung: kontraphobische Angst als Vernichtungslogik." , land:"Norwegen", tags:["Terror"], gender:"m"},
  { route:"kriminalpsychologie-armin-meiwes",       name:"Armin Meiwes",                         subtyp:"SX6w5",  heading:"Armin Meiwes \u2013 Sexueller Typ 6",                                      teaser:"SX6w5 \u2013 'Der Kannibale von Rotenburg', geb. 1961. Freiwilliger Kannibalismusfall 2001 \u2013 die sexuelle Sechs mit F\xfcnferfl\xfcgel: Angst vor dem Alleinsein als absolute, t\xf6dliche Verschmelzungssehnsucht. Tierentsprechung: Wolf." , land:"Deutschland", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-charles-manson",      name:"Charles Manson",                       subtyp:"SX6w7",  heading:"Charles Manson \u2013 Sexueller Typ 6",                                     teaser:"SX6w7 \u2013 Sektengr\xfcnder und Drahtzieher, 1934\u20132017. Tate-LaBianca-Morde 1969 \u2013 die sexuelle Sechs mit Siebenerfl\xfcgel: Angst als Charisma, Kontrolle durch Hingabe. Tierentsprechung: Wolf." , land:"USA", tags:["Terror","Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-niels-hoegel",        name:"Niels H\xf6gel",                     subtyp:"SE7w8",  heading:"Niels H\xf6gel \u2013 Selbsterhaltender Typ 7",                            teaser:"SE7w8 \u2013 Krankenpfleger und Serienm\xf6rder, geb. 1976. Mindestens 85 Tote \u2013 die selbsterhaltende Sieben mit Achterfl\xfcgel in ihrer dunkelsten Auspr\xe4gung: Gier als Kontrollsucht." , land:"Deutschland", tags:["Serienmord"], gender:"m"},
  { route:"kriminalpsychologie-andreas-baader",      name:"Andreas Baader",                    subtyp:"SE7w8",  heading:"Andreas Baader \u2013 Selbsterhaltender Typ 7",                          teaser:"SE7w8 \u2013 Mitbegr\xfcnder der Rote Armee Fraktion (RAF), 1943\u20131977. Freiheitsdrang statt Theorie, schnelle Autos statt Marx-Lekt\xfcre \u2013 die selbsterhaltende Sieben mit Achterfl\xfcgel als Naranjos \u201everdeckte Acht\u201c. Tierentsprechung: Gorilla." , land:"Deutschland", tags:["Terror"], gender:"m"},
  { route:"kriminalpsychologie-ulrike-meinhof",      name:"Ulrike Meinhof",                    subtyp:"SE2w1",  heading:"Ulrike Meinhof \u2013 Selbsterhaltender Typ 2",                          teaser:"SE2w1 \u2013 Journalistin und Mitbegr\xfcnderin der Rote Armee Fraktion (RAF), 1934\u20131976. F\xfcrsorge f\xfcr die Unterdr\xfcckten, radikalisiert durch moralische Unbeirrbarkeit \u2013 die selbsterhaltende Zwei mit Einserfl\xfcgel, die Baader 1970 aus der Haft befreite. Tierentsprechung: Flusspferd." , land:"Deutschland", tags:["Terror"], gender:"f"},
  { route:"kriminalpsychologie-gudrun-ensslin",      name:"Gudrun Ensslin",                    subtyp:"SX7w8",  heading:"Gudrun Ensslin \u2013 Sexueller Typ 7",                          teaser:"SX7w8 \u2013 Mitbegr\u00fcnderin der Rote Armee Fraktion (RAF), 1940\u20131977. Pfarrerstochter und Musterstudentin, radikalisiert nach dem Tod Benno Ohnesorgs \u2013 die sexuelle Sieben mit Achterfl\u00fcgel als totale, kompromisslose Verschmelzung mit einer Idee. Tierentsprechung: Schimpanse." , land:"Deutschland", tags:["Terror"], gender:"f"},
      { route:"kriminalpsychologie-chris-watts",         name:"Chris Watts",                      subtyp:"SO7w6",  heading:"Chris Watts \u2013 Sozialer Typ 7",                                  teaser:"SO7w6 \u2013 US-amerikanischer Familienm\u00f6rder, geb. 1985. Ermordete seine schwangere Frau und zwei T\u00f6chter, um mit seiner Geliebten ein neues Leben zu beginnen. Verhaftet 2018, f\u00fcnfmal lebensl\u00e4nglich. Tierentsprechung: Biber." , land:"USA", tags:["Nahbereich"], gender:"m"},
      { route:"kriminalpsychologie-frank-abagnale-jr", name:"Frank Abagnale Jr.", subtyp:"SO7w6", heading:"Frank Abagnale Jr. \u2013 Sozialer Typ 7", teaser:"SO7w6 \u2013 Ber\u00fchmtester Hochstapler der Geschichte, geb. 1948. Pilot, Arzt, Anwalt \u2013 ohne je einer gewesen zu sein. Die soziale Sieben mit Sechserfl\u00fcgel: rastlose Suche nach neuen Systemen, Zugeh\u00f6rigkeit als Antrieb, Vertrauen als letztes Ziel. Tierentsprechung: Biber.", land:"USA", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-p-diddy",          name:"Sean 'P. Diddy' Combs",              added:"2026-07-15",              subtyp:"SX7w8",  heading:"Sean 'P. Diddy' Combs \u2013 Sexueller Typ 7",                              teaser:"SX7w8 \u2013 Musikproduzent, Unternehmer, Verurteilter. Geb. 1969 in New York. Jahrzehntelang einer der m\u00e4chtigsten M\u00e4nner der Musikindustrie \u2013 und ein System sexueller Gewalt, das hinter Glamour und Kontrolle verborgen blieb. Verurteilt 2025 wegen Sex-Trafficking und N\u00f6tigung. Die sexuelle Sieben mit Achterfl\u00fcgel: Vergn\u00fcgen als Recht, Kontrolle als Liebe, Macht als Schutzschild. Tierentsprechung: Schimpanse." , land:"USA", tags:["Missbrauch","Musikindustrie"], gender:"m"},
  { route:"kriminalpsychologie-aileen-wuornos",      name:"Aileen Wuornos",                      subtyp:"SX7w8",  heading:"Aileen Wuornos \u2013 Sexueller Typ 7",                                       teaser:"SX7w8 \u2013 US-amerikanische Serienm\u00f6rderin, 1956\u20132002. Sieben Morde an M\u00e4nnern in Florida, November 1989 bis November 1990. Die sexuelle Sieben mit Achterfl\u00fcgel: idealisierte Liebe als \u00dcberlebensprojekt, Beziehung als einziges Fundament, Wut als letzte Grenze. Tierentsprechung: Schimpanse." , land:"USA", tags:["Serienmord"], gender:"f"},
  { route:"kriminalpsychologie-boris-becker",         name:"Boris Becker",                         added:"2026-07-19",  subtyp:"SX7w8",  heading:"Boris Becker \u2013 Sexueller Typ 7",                              teaser:"SX7w8 \u2013 Tennisprofi, geb. 1967 in Leimen. Dreifacher Wimbledon-Sieger, j\u00fcngster Champion der Geschichte \u2013 und 2022 in Gro\u00dfbritannien verurteilt wegen Insolvenzvergehen. Die sexuelle Sieben mit Achterfl\u00fcgel: Ruhm als \u00dcberlebensfundament, Verleugnung der Grenzen, Vergangenheit als unaufgebbares Selbstbild. Tierentsprechung: Schimpanse." , land:"Deutschland", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-clyde-barrow",         name:"Clyde Barrow",                        subtyp:"SX7w8",  heading:"Clyde Barrow – Sexuelle Typ 7",                                        teaser:"SX7w8 – Hälfte von „Bonnie and Clyde\", 1909–1934. 21 Monate Verbrecherjagd durch den mittleren Westen der USA, mindestens 13 Tötungen, getötet in einem Polizeihinterhalt. Rastlose Flucht vor dem Eingesperrtsein, der Achterflügel als letzte Verteidigungslinie. Tierentsprechung: Schimpanse." , land:"USA", tags:["Serienmord","Raub"], gender:"m"},
  { route:"kriminalpsychologie-victor-lustig",        name:"Victor Lustig",                       subtyp:"SX7w8",  heading:"Victor Lustig – Sexueller Typ 7",                                      teaser:"SX7w8 – Berühmtester Hochstapler des 20. Jahrhunderts, um 1890–1947. Verkaufte den Eiffelturm zweimal, betrog Al Capone, verkaufte die „Rumänische Geldkiste“. Suggestibilität als Werkzeug, Achterflügel als Wiederholungszwang unter höchstem Risiko. Tierentsprechung: Schimpanse." , land:"Tschechien", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-ronnie-biggs",          name:"Ronnie Biggs",                          added:"2026-08-05",  subtyp:"SX7w8",  heading:"Ronnie Biggs \u2013 Sexueller Typ 7",                              teaser:"SX7w8 \u2013 Britischer Zugr\u00e4uber, 1929\u20132013. Beteiligt am Gro\u00dfen Postraub 1963, spektakul\u00e4rer Gef\u00e4ngnisausbruch 1965, jahrzehntelang \u00f6ffentlich unbehelligt in Rio de Janeiro. Die sexuelle Sieben mit Achterfl\u00fcgel: Beeinflussbarkeit als Einstieg, Legendenbildung als Lebensinhalt, Trotz statt Reue. Tierentsprechung: Schimpanse." , land:"Großbritannien", tags:["Raub"], gender:"m"},
  { route:"kriminalpsychologie-griselda-blanco",    name:"Griselda Blanco",                     subtyp:"SE8w9",  heading:"Griselda Blanco \u2013 Selbsterhaltender Typ 8",                        teaser:"SE8w9 \u2013 Die Patin von Medell\u00edn, 1943\u20132012. Wegbereiterin des Kokainhandels und Lehrmeisterin Escobars \u2013 die selbsterhaltende Acht mit Neunerfl\u00fcgel: Macht als \u00dcberlebensgarantie, stille Kontrolle, absolute Konsequenz. Tierentsprechung: Orang-Utan." , land:"Kolumbien", tags:["Mafia"], gender:"f"},
  { route:"kriminalpsychologie-salvatore-riina",     name:"Salvatore Riina",                     subtyp:"SE8w9",  heading:"Salvatore Riina \u2013 Selbsterhaltender Typ 8",                           teaser:"Mafia-Boss, 1930\u20132017. 23 Jahre untergetaucht, Hunderte Morde verantwortet \u2013 die selbsterhaltende Acht mit Neunerfl\xfcgel: territoriale Macht, stille Gef\xe4hrlichkeit, absolute Loyalit\xe4t." , land:"Italien", tags:["Mafia"], gender:"m"},
  { route:"kriminalpsychologie-john-gotti",          name:"John Gotti",                          subtyp:"SO8w7",  heading:"John Gotti \u2013 Sozialer Typ 8",                                     teaser:"SO8w7 \u2013 Der Teflon-Don, 1940\u20132002. Boss der Gambino-Familie, dreimal freigesprochen, schlie\xdflich durch seinen engsten Vertrauten verraten \u2013 die soziale Acht mit Siebenerfl\xfcgel: Herrschaft durch Schutz, Macht durch Sichtbarkeit. Tierentsprechung: L\xf6we." , land:"USA", tags:["Mafia"], gender:"m"},
  { route:"kriminalpsychologie-john-mcafee",          name:"John McAfee",                         subtyp:"SX8w9",  heading:"John McAfee \u2013 Sexueller Typ 8",                                    teaser:"SX8w9 \u2013 Gr\u00fcnder des ersten Antivirenprogramms, Fl\u00fcchtiger, Anarchist. Von Belize bis zur spanischen Gef\u00e4ngniszelle: die sexuelle Acht ohne Grenzen \u2013 nach innen wie nach au\u00dfen." , land:"Großbritannien/USA", tags:["Betrug","Nahbereich"], gender:"m"},
  { route:"kriminalpsychologie-jeffrey-epstein",     name:"Jeffrey Epstein",                     subtyp:"SX8w9",  heading:"Jeffrey Epstein \u2013 Sexueller Typ 8",                                   teaser:"Finanzier und Sexualst\xe4ter, 1953\u20132019. Jahrzehntelanges Netzwerk aus Macht und Kompromittierung \u2013 die sexuelle Acht mit Neunerfl\xfcgel: Besitz durch N\xe4he, Herrschaft durch Einbindung." , land:"USA", tags:["Missbrauch"], gender:"m"},
  { route:"kriminalpsychologie-alfons-schuhbeck",    name:"Alfons Schuhbeck",                      subtyp:"SE9w1",  heading:"Alfons Schuhbeck \u2013 Selbsterhaltender Typ 9",                              teaser:"SE9w1 \u2013 Der Fernsehkoch, geb. 1949. Steuerhinterziehung von 2,3 Millionen Euro \u2013 jahrelang, still und beharrlich. Die selbsterhaltende Neun mit Einserfl\xfcgel: Appetit als Lebensform, Tr\xe4gheit als Schlaf des Gewissens. Tierentsprechung: Elefant." , land:"Deutschland", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-nick-leeson",         name:"Nick Leeson",                           subtyp:"SO9w8",  heading:"Nick Leeson \u2013 Sozialer Typ 9",                                  teaser:"SO9w8 \u2013 Rogue Trader, geb. 1967. Brachte 1995 die Barings Bank zum Zusammenbruch \u2013 die soziale Neun mit Achterfl\u00fcgel: Zugeh\u00f6rigkeit als Identit\u00e4t, Tr\u00e4gheit als Selbstvergessenheit. Tierentsprechung: B\u00fcffel." , land:"Großbritannien", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-leslie-van-houten",    name:"Leslie Van Houten",                    subtyp:"SO9w1",  heading:"Leslie Van Houten \u2013 Sozialer Typ 9",                                   teaser:"SO9w1 \u2013 Mitglied der Manson Family, geb. 1949. Beteiligt an den LaBianca-Morden 1969 \u2013 die soziale Neun mit Einserfl\u00fcgel: Aufl\u00f6sung in die Gruppe als Heimat, Dienst an der Gemeinschaft als Lebensweg. Tierentsprechung: B\u00fcffel." , land:"USA", tags:["Terror"], gender:"f"},
  { route:"kriminalpsychologie-wolfgang-beltracchi",  name:"Wolfgang Beltracchi",                subtyp:"SX9w1",  heading:"Wolfgang Beltracchi \u2013 Sexueller Typ 9",                               teaser:"SX9w1 \u2013 Kunstf\xe4lscher, geb. 1951. \xdcber 50 gef\xe4lschte Meisterwerke, Jahrzehnte unentdeckt \u2013 die sexuelle Neun mit Einserfl\xfcgel: Verschmelzung mit dem Geist toter Meister." , land:"Deutschland", tags:["Betrug"], gender:"m"},
  { route:"kriminalpsychologie-john-hinckley-jr",  name:"John Hinckley Jr.",                subtyp:"SE9w8",  heading:"John Hinckley Jr. – Selbsterhaltender Typ 9",                               teaser:"SE9w8 – Attent\xe4ter, geb. 1955. Sechs Sch\xfcsse auf Pr\xe4sident Reagan 1981, um Jodie Foster zu beeindrucken – jahrelange passive Isolation, entladen in einem einzigen Gewaltausbruch (Vulkan-Effekt der 9w8)." , land:"USA", tags:["Terror"], gender:"m"},
  { route:"kriminalpsychologie-ed-gein",  name:"Ed Gein",                subtyp:"SX9w1",  heading:"Ed Gein \u2013 Sexueller Typ 9",                               teaser:"SX9w1 \u2013 \u201eDer Schl\xe4chter von Plainfield\u201c, 1906\u20131984. Grabsch\xe4ndungen und zwei nachgewiesene Morde \u2013 die sexuelle Neun mit Einserfl\xfcgel in ihrer extremsten Entgleisung: die wahnhafte Verschmelzung mit der toten Mutter." , land:"USA", tags:["Serienmord"], gender:"m"},
];

// Krankheitsportr\xe4ts: Biografien historischer (meist verstorbener) Pers\xf6nlichkeiten,
// bei denen eine dokumentierte Krankheit als "roter Faden" \xfcber das Leben gedeutet wird \u2013
// im selben Geist wie das Psychosomatik-Register, nur auf Ebene der Einzelbiografie statt
// des Krankheitsbilds. Bewusst zun\xe4chst nur verstorbene, historisch gut dokumentierte F\xe4lle
// (siehe CLAUDE.md-Diskussion: bei lebenden Personen mit aktueller, ungewisser Erkrankung
// w\xe4re eine solche Deutung taktlos und widerspr\xe4che dem eigenen Disclaimer "kein Determinismus").
const KRANKHEITS_PORTRAITS = [
  { route:"krankheitsportraets-moliere", name:"Molière", subtyp:"SO7w6", heading:"Molière – Sozialer Typ 7", krankheit:"Chronische Lungenerkrankung (vermutlich Tuberkulose)", teaser:"SO7w6 – französischer Dramatiker und Schauspieler, 1622–1673. Schöpfer von Tartuffe, Der Menschenfeind und Der eingebildete Kranke. Brach 1673 während der vierten Aufführung von Der eingebildete Kranke – in der Rolle eines Hypochonders – auf der Bühne zusammen und starb Stunden später an einem Lungenleiden, das er jahrelang verschwiegen hatte." , land:"Frankreich", gender:"m", jahre:"1622–1673"},
  { route:"krankheitsportraets-sigmund-freud", name:"Sigmund Freud", subtyp:"SO6w5", heading:"Sigmund Freud – Sozialer Typ 6", krankheit:"Mundhöhlen- und Kieferkrebs", teaser:"SO6w5 – Begründer der Psychoanalyse, 1856–1939. 1923 mit Kieferkrebs diagnostiziert, über 30 Operationen in 16 Jahren, rauchte trotz der Diagnose weiter Zigarren und lehnte lange wirksame Schmerzmittel ab, um geistig klar zu bleiben. Starb 1939 im Londoner Exil durch ärztlich assistierten Tod." , land:"Österreich", gender:"m", jahre:"1856–1939"},
  { route:"krankheitsportraets-marie-curie", name:"Marie Curie", subtyp:"SE5w6", heading:"Marie Curie – Selbsterhaltender Typ 5", krankheit:"Aplastische Anämie durch chronische Strahlenbelastung", teaser:"SE5w6 – Physikerin und Chemikerin, 1867–1934. Jahrzehntelange, ungeschützte Arbeit mit radioaktiven Stoffen, Radiumproben in der Kitteltasche, kontaminierte Notizbücher bis heute radioaktiv. Starb 1934 an aplastischer Anämie als direkte Folge der Strahlenbelastung, deren Gefahr sie selbst mit erforscht hatte." , land:"Polen/Frankreich", gender:"f", jahre:"1867–1934"},
  { route:"krankheitsportraets-charles-darwin", name:"Charles Darwin", subtyp:"SE5w6", heading:"Charles Darwin – Selbsterhaltender Typ 5", krankheit:"Chronische, nie eindeutig diagnostizierte Verdauungs- und Erschöpfungsbeschwerden", teaser:"SE5w6 – Naturforscher und Begründer der Evolutionstheorie, 1809–1882. Fast vierzig Jahre lang Übelkeit, Erbrechen, Herzklopfen und Erschöpfung, nie eindeutig diagnostiziert. Diskutierte Ursachen reichen von der Chagas-Krankheit bis zu psychosomatischer Genese durch radikalen Rückzug von der Außenwelt." , land:"Vereinigtes Königreich", gender:"m", jahre:"1809–1882"},
  { route:"krankheitsportraets-winston-churchill", name:"Winston Churchill", subtyp:"SE8w9", heading:"Winston Churchill – Selbsterhaltender Typ 8", krankheit:"Lebenslange Depression („the black dog“) und verheimlichter Schlaganfall im Amt", teaser:"SE8w9 – Britischer Staatsmann, Premierminister 1940–1945 & 1951–1955, 1874–1965. Erlitt 1953 im Amt einen schweren Schlaganfall, den er wochenlang vor Öffentlichkeit und weiten Teilen des Kabinetts verbarg, und litt lebenslang an wiederkehrender Depression." , land:"Vereinigtes Königreich", gender:"m", jahre:"1874–1965"},
  { route:"krankheitsportraets-golda-meir", name:"Golda Meir", subtyp:"SE8w9", heading:"Golda Meir – Selbsterhaltender Typ 8", krankheit:"Lymphdrüsenkrebs, siebzehn Jahre lang geheim gehalten", teaser:"SE8w9 – israelische Premierministerin 1969–1974, 1898–1978. Vermutliche Erstdiagnose bereits in den späten 1960er-Jahren, während der gesamten Amtszeit weitgehend geheim gehalten – auch während des Jom-Kippur-Kriegs 1973. Starb 1978 an den Folgen der Erkrankung, vier Jahre nach ihrem Rücktritt." , land:"Israel", gender:"f", jahre:"1898–1978"},
  { route:"krankheitsportraets-gustav-mahler", name:"Gustav Mahler", subtyp:"SO4w5", heading:"Gustav Mahler – Sozialer Typ 4", krankheit:"Subakute bakterielle Endokarditis (Herzklappenentzündung)", teaser:"SO4w5 – österreichischer Komponist und Dirigent, 1860–1911. 1907 mit einer schweren Herzerkrankung diagnostiziert, im selben Jahr der Tod seiner Tochter und der Verlust seiner Position an der Wiener Hofoper. Verarbeitete die Diagnose unmittelbar in seinem Spätwerk, darunter Das Lied von der Erde und die Neunte Sinfonie." , land:"Österreich", gender:"m", jahre:"1860–1911"},
  { route:"krankheitsportraets-ruth-bader-ginsburg", name:"Ruth Bader Ginsburg", subtyp:"SX8w9", heading:"Ruth Bader Ginsburg – Sexueller Typ 8", krankheit:"Vier Krebserkrankungen an drei sehr unterschiedlichen Organen über zwei Jahrzehnte", teaser:"SX8w9 – US-Bundesrichterin am Supreme Court, 1933–2020. Überstand von 1999 bis 2019/2020 vier Krebsdiagnosen an insgesamt drei verschiedenen, sehr unterschiedlichen Organen (Darm, Bauchspeicheldrüse zweimal, Lunge), ohne ihr Amt freiwillig zu räumen. Starb 2020 im Amt, wenige Wochen vor der Präsidentschaftswahl." , land:"USA", gender:"f", jahre:"1933–2020"},
  { route:"krankheitsportraets-claudio-naranjo", name:"Dr. Claudio Naranjo", subtyp:"SO5w4", heading:"Dr. Claudio Naranjo – Sozialer Typ 5", krankheit:"Parkinson in den letzten Lebensjahren (Quellenlage dünner als bei anderen Porträts)", teaser:"SO5w4 – Chilenischer Psychiater, Begründer der 27 Enneagramm-Subtypen, 1932–2019. Zunehmende Gang- und Sprechschwierigkeiten sowie Armzittern, sichtbar bei seinem letzten öffentlichen Vortrag 2019 in Girona. Starb wenige Wochen später in Berkeley." , land:"Chile/USA", gender:"m", jahre:"1932–2019"},
  { route:"krankheitsportraets-wilma-mankiller", name:"Wilma Mankiller", subtyp:"SO9w8", heading:"Wilma Mankiller – Sozialer Typ 9", krankheit:"Polyzystische Nierenerkrankung, Lymphom, Brustkrebs, Bauchspeicheldrüsenkrebs", teaser:"SO9w8 – Erste weibliche Principal Chief der Cherokee Nation, 1945–2010. Zwei Nierentransplantationen, ein Lymphom und Brustkrebs, ohne ihr Amt aufzugeben. Starb 2010 an Bauchspeicheldrüsenkrebs im Stadium IV, wenige Wochen nach der Diagnose." , land:"USA", gender:"f", jahre:"1945–2010"},
  { route:"krankheitsportraets-teresa-von-avila", name:"Teresa von Ávila", subtyp:"SO3w4", heading:"Teresa von Ávila – Sozialer Typ 3", krankheit:"Schwere Erkrankung mit viertägigem Scheintod und fast dreijähriger Lähmung", teaser:"SO3w4 – Spanische Mystikerin und Ordensreformerin, 1515–1582. 1539 vier Tage für tot gehalten, danach fast drei Jahre weitgehend gelähmt. Aus dieser Krise heraus entwickelte sich ihr mentales Gebet, Grundlage ihres späteren Werks und der Gründung von 17 Klöstern." , land:"Spanien", gender:"f", jahre:"1515–1582"},
  { route:"krankheitsportraets-franz-schubert", name:"Franz Schubert", subtyp:"SE6w5", heading:"Franz Schubert – Selbsterhaltender Typ 6", krankheit:"Syphilis mit sechsjährigem Krankheitsverlauf, offizielle Todesursache Typhus", teaser:"SE6w5 – Österreichischer Komponist, 1797–1828. Infizierte sich 1822 vermutlich mit Syphilis, komponierte in den folgenden sechs Jahren u. a. die Winterreise. Starb 1828 mit 31 Jahren; ob Typhus oder Syphilis-Spätfolgen die eigentliche Todesursache waren, ist bis heute umstritten." , land:"Österreich", gender:"m", jahre:"1797–1828"},
  { route:"krankheitsportraets-giacomo-puccini", name:"Giacomo Puccini", subtyp:"SX8w7", heading:"Giacomo Puccini – Sexueller Typ 8", krankheit:"Kehlkopfkrebs, tödliche Komplikation nach radikaler Radiumbehandlung", teaser:"SX8w7 – Italienischer Opernkomponist, 1858–1924. 1924 mit Kehlkopfkrebs diagnostiziert, während der Arbeit an Turandot. Eine radikale Radiumbehandlung in Brüssel nahm ihm die Stimme; starb wenige Tage später an einem Herzinfarkt als Komplikation. Turandot blieb unvollendet." , land:"Italien", gender:"m", jahre:"1858–1924"},
  { route:"krankheitsportraets-john-wayne", name:"John Wayne", subtyp:"SX8w7", heading:"John Wayne – Sexueller Typ 8", krankheit:"Lungenkrebs 1964, Magenkrebs 1979 (Todesursache)", teaser:"SX8w7 – Schauspieler, 1907–1979. 1964 Lungenkrebs-Diagnose, linker Lungenflügel entfernt, öffentlich als Kampf gegen ›The Big C‹ inszeniert. Januar 1979 zweite Diagnose: Magenkrebs, gesamter Magen entfernt. Starb im Juni 1979 im Alter von 72 Jahren an den Folgen." , land:"USA", gender:"m", jahre:"1907–1979"},
  { route:"krankheitsportraets-larry-king", name:"Larry King", subtyp:"SE7w6", heading:"Larry King – Selbsterhaltender Typ 7", krankheit:"Jahrzehntelange Kette von Herzerkrankungen, Krebs und Schlaganfall, Tod durch COVID-19-Sepsis", teaser:"SE7w6 – US-amerikanischer Talkshow-Moderator, 1933–2021. Herzinfarkt und Fünffach-Bypass 1987, Prostata- und Lungenkrebs 2017, erneuter Herzinfarkt und Schlaganfall 2019. Starb 2021 an Sepsis nach COVID-19, nach über sechzig Jahren journalistischer Tätigkeit." , land:"USA", gender:"m", jahre:"1933–2021"},
  { route:"krankheitsportraets-muhammad-ali", name:"Muhammad Ali", subtyp:"SO2w1", heading:"Muhammad Ali – Sozialer Typ 2", krankheit:"Parkinson-Syndrom, vermutlich durch wiederholte Kopftreffer im Boxsport mitverursacht", teaser:"SO2w1 – US-amerikanischer Boxweltmeister und Bürgerrechtler, 1942–2016. 1984 mit Parkinson diagnostiziert, drei Jahre nach Karriereende. Entzündete 1996 mit zitternder Hand die olympische Flamme in Atlanta. Starb 2016 an septischem Schock nach über drei Jahrzehnten fortschreitender Erkrankung." , land:"USA", gender:"m", jahre:"1942–2016"},
  { route:"krankheitsportraets-friedrich-nietzsche", name:"Friedrich Nietzsche", subtyp:"SX5w4", heading:"Friedrich Nietzsche – Sexueller Typ 5", krankheit:"Chronische Migräne, Sehschwäche und geistiger Zusammenbruch", teaser:"SX5w4 – deutscher Philosoph, 1844–1900. Über Jahrzehnte chronische Migräne, Magenbeschwerden und fortschreitende Sehschwäche. Brach 1889 in Turin geistig zusammen und verbrachte die letzten elf Lebensjahre in geistiger Umnachtung – Ursache bis heute nicht abschließend geklärt." , land:"Deutschland", gender:"m", jahre:"1844–1900"},
  { route:"krankheitsportraets-frederic-chopin", name:"Frédéric Chopin", subtyp:"SX5w4", heading:"Frédéric Chopin – Sexueller Typ 5", krankheit:"Tuberkulose", teaser:"SX5w4 – Komponist und Pianist, 1810–1849. Vermutlich schon in der Jugend erste Anzeichen, dramatische Verschlechterung im Winter 1838/39 auf Mallorca. Nach der Trennung von George Sand 1847 rascher körperlicher Verfall. Starb 1849 mit 39 Jahren in Paris an den Folgen der fortgeschrittenen Erkrankung." , land:"Polen/Frankreich", gender:"m", jahre:"1810–1849"},
  { route:"krankheitsportraets-fjodor-dostojewski", name:"Fjodor Dostojewski", subtyp:"SE6w5", heading:"Fjodor Dostojewski – Selbsterhaltender Typ 6", krankheit:"Lebenslange Epilepsie", teaser:"SE6w5 – russischer Schriftsteller, 1821–1881. Litt sein gesamtes erwachsenes Leben an Epilepsie, deren berühmte Aura er als Moment vollkommener Harmonie beschrieb. Verarbeitete die Krankheit direkt in seinen Romanfiguren, allen voran Fürst Myschkin in Der Idiot." , land:"Russland", gender:"m", jahre:"1821–1881"},
  { route:"krankheitsportraets-franz-kafka", name:"Franz Kafka", subtyp:"SE5w4", heading:"Franz Kafka – Selbsterhaltender Typ 5", krankheit:"Kehlkopf-Tuberkulose", teaser:"SE5w4 – Schriftsteller, 1883–1924. Ab 1917 an Tuberkulose erkrankt, die zuletzt auf den Kehlkopf übergriff und ihm das Sprechen unmöglich machte. Starb 1924 im Alter von 40 Jahren, kommunizierte in den letzten Wochen nur noch über handschriftliche Zettel." , land:"Tschechien/Österreich-Ungarn", gender:"m", jahre:"1883–1924"},
  { route:"krankheitsportraets-ronald-reagan", name:"Ronald Reagan", subtyp:"SO9w8", heading:"Ronald Reagan – Sozialer Typ 9", krankheit:"Alzheimer-Krankheit", teaser:"SO9w8 – 40. US-Präsident 1981–1989, 1911–2004. Gab 1994 in einem handschriftlichen Brief an die amerikanische Öffentlichkeit seine Alzheimer-Diagnose bekannt und zog sich danach zehn Jahre lang fast vollständig aus der Öffentlichkeit zurück." , land:"USA", gender:"m", jahre:"1911–2004"},
  { route:"krankheitsportraets-david-bowie", name:"David Bowie", subtyp:"SO1w2", heading:"David Bowie – Sozialer Typ 1", krankheit:"Leberkrebs", teaser:"SO1w2 – Musiker und Künstler, 1947–2016. Kämpfte 18 Monate lang im Verborgenen gegen Leberkrebs und verwandelte die Diagnose in sein letztes Werk, das Album Blackstar, das zwei Tage vor seinem Tod erschien." , land:"Vereinigtes Königreich", gender:"m", jahre:"1947–2016"},
  { route:"krankheitsportraets-wolfgang-amadeus-mozart", name:"Wolfgang Amadeus Mozart", subtyp:"SE2w3", heading:"Wolfgang Amadeus Mozart – Selbsterhaltender Typ 2", krankheit:"Fieberhafte Erkrankung mit Nierenversagen (vermutlich Folge einer Streptokokken-Infektion)", teaser:"SE2w3 – österreichischer Komponist, 1756–1791. Von Kindheit an eine Kette fieberhafter Erkrankungen (Pocken, Typhus, wiederkehrendes Scharlach), starb 1791 mit 35 Jahren nach zweiwöchiger Krankheit mit Fieber und generalisierten Ödemen – während er gleichzeitig an drei Großwerken arbeitete, darunter das unvollendete Requiem." , land:"Österreich", gender:"m", jahre:"1756–1791"},
  { route:"krankheitsportraets-nusrat-fateh-ali-khan", name:"Nusrat Fateh Ali Khan", subtyp:"SE2w3", heading:"Nusrat Fateh Ali Khan – Selbsterhaltender Typ 2", krankheit:"Diabetes mit fortschreitendem Nierenversagen und Leberschaden durch kontaminierte Dialyse", teaser:"SE2w3 – pakistanischer Qawwali-Sänger, 1948–1997. Jahrelange, unbehandelt fortschreitende Diabetes und starkes Übergewicht führten zu Nierenversagen und zweiwöchentlicher Dialyse. Starb 1997 mit 48 Jahren an akutem Herzversagen infolge einer Hepatitis-Infektion durch kontaminiertes Dialyse-Equipment, auf dem Weg zu einer geplanten Nierentransplantation." , land:"Pakistan", gender:"m", jahre:"1948–1997"},
  { route:"krankheitsportraets-marilyn-monroe", name:"Marilyn Monroe", subtyp:"SX3w4", heading:"Marilyn Monroe – Sexueller Typ 3", krankheit:"Tödliche Kombination aus Barbituraten (Nembutal) und Chloralhydrat, offiziell als wahrscheinlicher Suizid eingestuft", teaser:"SX3w4 – Schauspielerin, 1926–1962. Jahrelang hinter dem makellosen Image verborgene Endometriose, eskalierende Schlafmittelabhängigkeit, ein erzwungener Psychiatrieaufenthalt 1961. Starb 1962 mit 36 Jahren – die genauen Todesumstände sind bis heute umstritten." , land:"USA", gender:"f", jahre:"1926–1962"},
  { route:"krankheitsportraets-albert-einstein", name:"Albert Einstein", subtyp:"SO5w4", heading:"Albert Einstein – Sozialer Typ 5", krankheit:"Bauchaortenaneurysma, über sechseinhalb Jahre bekannt und nur notdürftig stabilisiert, tödliche Ruptur 1955", teaser:"SO5w4 – Physiker, Nobelpreisträger, 1879–1955. Diagnose 1948, seither mit einer bekannten, nie kurativ behandelten Bedrohung gelebt. Lehnte 1955 eine erneute Operation bewusst ab und starb wenige Tage später an der Ruptur des Aneurysmas – bis zuletzt arbeitend." , land:"Deutschland/USA", gender:"m", jahre:"1879–1955"},
  { route:"krankheitsportraets-freddie-mercury", name:"Freddie Mercury", subtyp:"SX4w3", heading:"Freddie Mercury – Sexueller Typ 4", krankheit:"AIDS-bedingte Bronchopneumonie, nach fast fünf Jahren strikter Geheimhaltung erst einen Tag vor dem Tod öffentlich bestätigt", teaser:"SX4w3 – Musiker, Queen-Frontsänger, 1946–1991. Diagnose laut Jim Hutton im Frühjahr 1987, seither strikte Geheimhaltung bei gleichzeitigem Weiterarbeiten bis zur körperlichen Erschöpfung. Bestätigte die Erkrankung selbst erst am 23. November 1991, starb am nächsten Tag." , land:"Großbritannien", gender:"m", jahre:"1946–1991"},
  { route:"krankheitsportraets-claude-debussy", name:"Claude Debussy", subtyp:"SX4w5", heading:"Claude Debussy – Sexueller Typ 4", krankheit:"Darmkrebs", teaser:"SX4w5 – Komponist, 1862–1918. Diagnose 1909, ab 1915 mehrere schmerzhafte Radium-Behandlungen und eine Kolostomie-Operation. Gab im September 1917 unter Kriegsbedingungen eines seiner letzten Konzerte. Starb am 25. März 1918 in Paris während der deutschen Beschießung der Stadt." , land:"Frankreich", gender:"m", jahre:"1862–1918"},
  { route:"krankheitsportraets-lady-diana", name:"Lady Diana", subtyp:"SE4w3", heading:"Lady Diana – Selbsterhaltender Typ 4", krankheit:"Über Jahre verschwiegene Bulimie, verbunden mit Selbstverletzung und postnataler Depression", teaser:"SE4w3 – Princess of Wales, 1961–1997. Begann laut eigener Aussage in der Woche nach der Verlobung mit Prinz Charles 1981, machte sie erst 1995 im BBC-Panorama-Interview selbst öffentlich. Starb 1997 bei einem Autounfall in Paris – ohne belegten Zusammenhang mit der früheren Erkrankung." , land:"Vereinigtes Königreich", gender:"f", jahre:"1961–1997"},
  { route:"krankheitsportraets-osho", name:"Osho", subtyp:"SE3w4", heading:"Osho – Selbsterhaltender Typ 3", krankheit:"Herzversagen nach chronischen Beschwerden (Diabetes, Asthma, Rückenschmerzen) und einer bis heute umstrittenen Vergiftungsbehauptung", teaser:"SE3w4 – spiritueller Lehrer, 1931–1990. Chronische Beschwerden seit den frühen 1970ern, zwölftägige Haft in den USA 1985, danach neue Symptome, die er und sein Umfeld auf eine nie unabhängig bestätigte Vergiftung zurückführten. Starb 1990 mit 58 Jahren – die genaue Todesursache bleibt bis heute umstritten." , land:"Indien", gender:"m", jahre:"1931–1990"},
  { route:"krankheitsportraets-elvis-presley", name:"Elvis Presley", subtyp:"SX2w3", heading:"Elvis Presley – Sexueller Typ 2", krankheit:"Herzrhythmusstörung bei Herz-Kreislauf-Erkrankung und Megakolon, begünstigt durch jahrelange Medikamentenabhängigkeit", teaser:"SX2w3 – Musiker, 1935–1977. Über ein Jahrzehnt eskalierende Medikamentenabhängigkeit, ein stark vergrößertes Herz und ein Megakolon laut Autopsie. Tourte fast ununterbrochen weiter, während sein Körper sichtbar zusammenbrach. Starb 1977 mit nur 42 Jahren – die genaue Todesursache wird bis heute diskutiert." , land:"USA", gender:"m", jahre:"1935–1977"},
  { route:"krankheitsportraets-napoleon-bonaparte", name:"Napoleon Bonaparte", subtyp:"SO2w3", heading:"Napoleon Bonaparte – Sozialer Typ 2", krankheit:"Magenkarzinom (nach Autopsie), zuvor jahrzehntelange wiederkehrende Magenbeschwerden", teaser:"SO2w3 – französischer Kaiser und Feldherr, 1769–1821. Über Jahrzehnte wiederkehrende Magenbeschwerden, eine umstrittene Episode bei Waterloo, dramatischer Verfall im Exil auf St. Helena. Starb 1821 an einem Magenkarzinom – derselben Krankheit, an der wahrscheinlich auch sein Vater starb." , land:"Frankreich", gender:"m", jahre:"1769–1821"},
  { route:"krankheitsportraets-julius-caesar", name:"Julius Caesar", subtyp:"SO2w3", heading:"Julius Caesar – Sozialer Typ 2", krankheit:"Wiederkehrende Anfälle, vermutlich Epilepsie (antike Quellen: Plutarch, Sueton)", teaser:"SO2w3 – römischer Feldherr und Staatsmann, 100–44 v. Chr. Von Plutarch und Sueton unabhängig bezeugte Anfälle der 'Fallsucht', u. a. während der Schlacht von Thapsus 46 v. Chr. und 45 v. Chr. in Corduba. Nie öffentlich anerkannt oder in eigenen Schriften erwähnt. Ermordet am 15. März 44 v. Chr. im Senat – ohne belegten direkten Zusammenhang mit der Krankheit." , land:"Römisches Reich", gender:"m", jahre:"100–44 v. Chr."},
  { route:"krankheitsportraets-johann-sebastian-bach", name:"Johann Sebastian Bach", subtyp:"SX1w9", heading:"Johann Sebastian Bach – Sexueller Typ 1", krankheit:"Erblindung durch missglückte Staroperationen, Tod nach Schlaganfall und Fieber", teaser:"SX1w9 – Komponist, 1685–1750. Über Jahre fortschreitende Sehschwäche, zwei missglückte Augenoperationen im März 1750 durch den zweifelhaften Okulisten John Taylor führten zur vollständigen Erblindung. Starb vier Monate später nach einem Schlaganfall – derselbe Operateur ließ kurz darauf auch Händel erblinden." , land:"Deutschland", gender:"m", jahre:"1685–1750"},
  { route:"krankheitsportraets-konrad-adenauer", name:"Konrad Adenauer", subtyp:"SE1w9", heading:"Konrad Adenauer – Selbsterhaltender Typ 1", krankheit:"Schwere Gesichtsverletzungen durch Autounfall (1917), später Verfolgung und Haft, Tod nach zwei Herzinfarkten und Lungenentzündung (1967)", teaser:"SE1w9 – deutscher Bundeskanzler 1949–1963, 1876–1967. Sein Gesicht wurde 1917 bei einem schweren Autounfall zertrümmert; er formte die Narben zum Ausdruck kontrollierter Autorität um. Zwei Jahrzehnte später Verfolgung und Haft unter den Nationalsozialisten, bis ins hohe Alter bemerkenswert vital." , land:"Deutschland", gender:"m", jahre:"1876–1967"},
  { route:"krankheitsportraets-friedrich-schiller", name:"Friedrich Schiller", subtyp:"SX6w5", heading:"Friedrich Schiller – Sexueller Typ 6", krankheit:"Lungentuberkulose", teaser:"SX6w5 – Dichter, Dramatiker und Historiker, 1759–1805. Seit der Kindheit fragile Konstitution, ab 1791 wiederkehrende lebensbedrohliche Fieber- und Hustenanfälle, vierzehn Jahre kompromissloser Arbeit gegen den eigenen Verfall. Starb 1805 mit 45 Jahren an akuter Lungenentzündung – die Obduktion zeigte einen vollständig zerstörten Lungenflügel." , land:"Deutschland", gender:"m", jahre:"1759–1805"},
  { route:"krankheitsportraets-otto-von-bismarck", name:"Otto von Bismarck", subtyp:"SX6w5", heading:"Otto von Bismarck – Sexueller Typ 6", krankheit:"Übergewicht, Erschöpfung und verschleppte Gangrän", teaser:"SX6w5 – Erster Reichskanzler, 1815–1898. Anfang der 1880er-Jahre Erschöpfungskrise und massives Übergewicht, ab 1883 radikale Behandlung durch Dr. Ernst Schweninger mit rund 20 kg Gewichtsverlust, zeitgenössisch belegter Morphinkonsum. Verweigerte im hohen Alter die Behandlung einer Gangrän am Fuß, starb am 30. Juli 1898 mit 83 Jahren an den Folgen von Gangrän und Lungenentzündung." , land:"Deutschland", gender:"m", jahre:"1815–1898"},
  { route:"krankheitsportraets-martin-luther", name:"Martin Luther", subtyp:"SX1w2", heading:"Martin Luther – Sexueller Typ 1", krankheit:"Herz-Kreislauf-Leiden und wiederkehrende schwere Depressionen (Anfechtungen)", teaser:"SX1w2 – Reformator, 1483–1546. Dekade 1535–1545 geprägt von zunehmenden Herz-Kreislauf-Problemen, Nierensteinen und Schwindelanfällen, verschränkt mit schweren depressiven Episoden. Starb am 18. Februar 1546 in Eisleben, vermutlich an Herzversagen oder Schlaganfall." , land:"Deutschland", gender:"m", jahre:"1483–1546"},
  { route:"krankheitsportraets-ludwig-van-beethoven", name:"Ludwig van Beethoven", subtyp:"SX6w5", heading:"Ludwig van Beethoven – Sexueller Typ 6", krankheit:"Fortschreitende Taubheit und Leberzirrhose", teaser:"SX6w5 – Komponist, 1770–1827. Ab ca. 1798 fortschreitender Hörverlust, parallel dazu chronische Bauchleiden und ein Verdacht auf Bleivergiftung. Ab 1821 Gelbsucht, ab Dezember 1826 vier schmerzhafte Bauchpunktionen gegen Wassereinlagerungen. Starb 1827 an den Folgen einer Leberzirrhose – die Obduktion zeigte eine massiv vernarbte Leber und geschädigte Nieren." , land:"Deutschland", gender:"m", jahre:"1770–1827"},
  { route:"krankheitsportraets-michael-jackson", name:"Michael Jackson", subtyp:"SO4w3", heading:"Michael Jackson – Sozialer Typ 4", krankheit:"Jahrzehntelange Schmerz- und Schlafmittelabhängigkeit, verschwiegene Vitiligo", teaser:"SO4w3 – Sänger, Tänzer und Komponist, 1958–2009. Opioid-Behandlung nach schwerer Kopfhautverbrennung 1984, ab den 1990er-Jahren zunehmend schwere, therapieresistente Schlaflosigkeit. Erhielt zuletzt Propofol als häusliches Schlafmittel – ein Einsatz weit außerhalb jeder medizinischen Norm. Starb 2009 an akutem Herzstillstand durch eine Propofol-Überdosis, wenige Wochen vor der geplanten Comeback-Tour." , land:"USA", gender:"m", jahre:"1958–2009"},
  { route:"krankheitsportraets-hans-christian-andersen", name:"Hans Christian Andersen", subtyp:"SO4w3", heading:"Hans Christian Andersen – Sozialer Typ 4", krankheit:"Lebenslange Hypochondrie, vernachlässigte Zahnprobleme, vermutete Leberkrebserkrankung", teaser:"SO4w3 – Schriftsteller, Märchendichter, 1805–1875. Minutiös dokumentierte Sorge um kleinste Beschwerden bei gleichzeitig jahrzehntelang stumm ertragenen Zahnschmerzen. Nach einem Sturz 1872 zunehmender Verfall, Pflege bei der befreundeten Familie Melchior. Starb 1875 an einer vermuteten Krebserkrankung der Leber, mit Staatsbegräbnis in Anwesenheit der dänischen Königsfamilie." , land:"Dänemark", gender:"m", jahre:"1805–1875"},
  { route:"krankheitsportraets-karl-lagerfeld", name:"Karl Lagerfeld", subtyp:"SO3w4", heading:"Karl Lagerfeld – Sozialer Typ 3", krankheit:"Krebserkrankung (Todesursache offiziell nie bestätigt; laut Assistent Prostatakrebs, diagnostiziert 2015)", teaser:"SO3w4 – Modedesigner und Chanel-Kreativdirektor, 1933–2019. Hielt eine Krebsdiagnose nach übereinstimmenden Berichten fast vier Jahre lang selbst vor engsten Vertrauten geheim und fehlte erst vier Wochen vor seinem Tod erstmals seit 35 Jahren bei einer Chanel-Show." , land:"Deutschland/Frankreich", gender:"m", jahre:"1933–2019"},
  { route:"krankheitsportraets-robert-schumann", name:"Robert Schumann", subtyp:"SX7w8", heading:"Robert Schumann – Sexueller Typ 7", krankheit:"Psychische Erkrankung (retrospektiv diskutiert: bipolare Störung, schizoaffektive Erkrankung oder neurologische Spätfolge einer Syphilis-Infektion)", teaser:"SX7w8 – Komponist und Musikkritiker, 1810–1856. Sprang 1854 in einem Anfall völliger Verzweiflung in den Rhein, bat danach selbst um Einweisung in eine Heilanstalt bei Bonn und starb dort 1856, weitgehend isoliert von seiner Frau Clara bis kurz vor seinem Tod." , land:"Deutschland", gender:"m", jahre:"1810–1856"},
  { route:"krankheitsportraets-francis-bacon", name:"Francis Bacon", subtyp:"SE7w8", heading:"Francis Bacon – Selbsterhaltender Typ 7", krankheit:"Chronische Gicht und Nierensteine, tödliche Bronchitis/Lungenentzündung nach einem selbst durchgeführten Kälte-Experiment", teaser:"SE7w8 – Philosoph, Staatsmann und Begründer des modernen Empirismus, 1561–1626. Litt jahrzehntelang an Gicht und Nierensteinen, starb 1626 an einer Erkältung, die er sich zuzog, als er im Winter ein Hühnchen mit Schnee ausstopfte, um Kälte als Konservierungsmethode zu testen." , land:"Großbritannien", gender:"m", jahre:"1561–1626"},
  { route:"krankheitsportraets-karl-marx", name:"Karl Marx", subtyp:"SO8w9", heading:"Karl Marx – Sozialer Typ 8", krankheit:"Chronische, schwere Furunkel und Karbunkel (vermutlich Hidradenitis suppurativa), begleitet von Bronchitis, Leberbeschwerden und Rheuma", teaser:"SO8w9 – Philosoph, Ökonom, Begründer des Marxismus, 1818–1883. Litt über vier Jahrzehnte an schmerzhaften Karbunkeln, die ihn zeitweise am Sitzen hinderten und die Arbeit am 'Kapital' immer wieder verzögerten. Starb 1883 an den Folgen chronischer Bronchitis." , land:"Deutschland/Vereinigtes Königreich", gender:"m", jahre:"1818–1883"},
  { route:"krankheitsportraets-james-levine", name:"James Levine", subtyp:"SE9w1", heading:"James Levine – Selbsterhaltender Typ 9", krankheit:"Über Jahrzehnte fortschreitende Parkinson-Erkrankung mit schweren begleitenden Rückenverletzungen", teaser:"SE9w1 – Dirigent und Pianist, 1943–2021. Erste Tremorsymptome bereits in den 1990er-Jahren, jahrelang privat gehalten, ein schwerer Sturz 2011 mit Rückenmarksverletzung, zunehmende Rollstuhlpflicht. Starb 2021 an den Komplikationen der langjährigen Erkrankung." , land:"USA", gender:"m", jahre:"1943–2021"},
  { route:"krankheitsportraets-david-hume", name:"David Hume", subtyp:"SE9w8", heading:"David Hume – Selbsterhaltender Typ 9", krankheit:"Chronische Darmerkrankung (vermutlich Darmkarzinom oder schwere chronisch-entzündliche Erkrankung), stetig fortschreitend über gut vier Jahre", teaser:"SE9w8 – schottischer Philosoph, 1711–1776. Erste Verdauungsbeschwerden ab 1772, stetiger Gewichtsverlust, verfasste kurz vor dem Tod die gelassene Autobiografie 'My Own Life'. Starb 1776 in Edinburgh mit bemerkenswerter philosophischer Ruhe." , land:"Schottland", gender:"m", jahre:"1711–1776"},
  { route:"krankheitsportraets-elizabeth-barrett-browning", name:"Elizabeth Barrett Browning", subtyp:"SX9w8", heading:"Elizabeth Barrett Browning – Sexueller Typ 9", krankheit:"Jahrzehntelange, nie eindeutig diagnostizierte chronische Krankheit (vermutlich Wirbelsäulenleiden und/oder frühe Lungenerkrankung) mit begleitender lebenslanger Opiumabhängigkeit", teaser:"SX9w8 – englische Dichterin, 1806–1861. Chronische Beschwerden ab der Jugend, früh verordnetes Laudanum mit jahrzehntelanger Abhängigkeit, über zwanzig Jahre fast völlige Isolation im Vaterhaus. Gesundheitliche Besserung erst nach der heimlichen Flucht nach Italien 1846." , land:"Großbritannien", gender:"f", jahre:"1806–1861"},
  { route:"krankheitsportraets-peter-falk", name:"Peter Falk", subtyp:"SO9w1", heading:"Peter Falk – Sozialer Typ 9", krankheit:"Alzheimer-Erkrankung, begleitet von öffentlichem Sorgerechtsstreit um seine Pflege", teaser:"SO9w1 – Schauspieler, weltberühmt als TV-Ermittler Columbo, 1927–2011. Alzheimer-Diagnose 2007, 2008 gerichtliche Vormundschaft durch seine Ehefrau, anschließend öffentlicher Streit mit seiner Tochter Catherine um Besuchsrechte. Starb 2011 im Alter von 83 Jahren an den Folgen der Erkrankung." , land:"USA", gender:"m", jahre:"1927–2011"},
  { route:"krankheitsportraets-leonard-bernstein", name:"Leonard Bernstein", subtyp:"SX7w6", heading:"Leonard Bernstein – Sexueller Typ 7", krankheit:"Fortgeschrittenes Lungenemphysem durch jahrzehntelanges Kettenrauchen, tödliches Herzversagen", teaser:"SX7w6 – Dirigent, Komponist, Pianist, 1918–1990. Bis zu vier Packungen Zigaretten täglich über Jahrzehnte, dirigierte am 19. August 1990 gegen ärztlichen Rat sein letztes Konzert und musste wegen eines Hustenanfalls abbrechen. Rücktritt vom Dirigieren am 9. Oktober 1990, gestorben nur fünf Tage später." , land:"USA", gender:"m", jahre:"1918–1990"},
  { route:"krankheitsportraets-alexander-der-grosse", name:"Alexander der Große", subtyp:"SO2w3", heading:"Alexander der Große – Sozialer Typ 2", krankheit:"Plötzlicher, bis heute ungeklärter Fieber- und Krankheitsverlauf nach Jahren körperlicher Grenzenlosigkeit", teaser:"SO2w3 – König von Makedonien, Eroberer eines Weltreichs, 356–323 v. Chr. Elf Jahre ununterbrochener Feldzug, mehrfach schwer verwundet, exzessiver Alkoholkonsum. Starb nach nur zehn bis zwölf Tagen Fieber am 10. oder 11. Juni 323 v. Chr. in Babylon im Alter von 32 Jahren, ohne Nachfolger." , land:"Makedonien", gender:"m", jahre:"356–323 v. Chr."},
  { route:"krankheitsportraets-marcel-proust", name:"Marcel Proust", subtyp:"SO4w5", heading:"Marcel Proust – Sozialer Typ 4", krankheit:"Lebenslanges, schweres Asthma seit der Kindheit, tödliche Lungenentzündung", teaser:"SO4w5 – französischer Schriftsteller, 1871–1922. Erster schwerer Asthmaanfall mit neun Jahren, zunehmender Rückzug in sein korkverkleidetes Zimmer, arbeitete bis zum Sterbebett an ›Auf der Suche nach der verlorenen Zeit‹. Starb 1922 mit 51 Jahren an einer Lungenentzündung." , land:"Frankreich", gender:"m", jahre:"1871–1922"},
  { route:"krankheitsportraets-johannes-brahms", name:"Johannes Brahms", subtyp:"SE9w8", heading:"Johannes Brahms – Selbsterhaltender Typ 9", krankheit:"Leberkrebs, dieselbe Krankheit, an der bereits sein Vater gestorben war", teaser:"SE9w8 – deutscher Komponist, 1833–1897. Erschöpfende Reise zu Clara Schumanns Beerdigung im Mai 1896, kurz danach sichtbare Gelbfärbung, letzter öffentlicher Auftritt bei einer Aufführung seiner 4. Sinfonie im März 1897. Starb am 3. April 1897 in Wien, nur elf Monate nach Clara Schumann." , land:"Deutschland/Österreich", gender:"m", jahre:"1833–1897"},
  { route:"krankheitsportraets-franz-liszt", name:"Franz Liszt", subtyp:"SX7w8", heading:"Franz Liszt – Sexueller Typ 7", krankheit:"Herzschwäche, Wassersucht und fortschreitende Erblindung, tödliche Lungenentzündung", teaser:"SX7w8 – Komponist und Pianist, 1811–1886. Jahrelange Herzbeschwerden und Ödeme bei unverändertem Reisepensum zwischen Weimar, Rom und Budapest, Teilnahme an einer Aufführung in Bayreuth 1886 trotz Fieber und ärztlichem Verbot. Starb am 31. Juli 1886 in Bayreuth." , land:"Ungarn/Deutschland", gender:"m", jahre:"1811–1886"},
  { route:"krankheitsportraets-charles-manson", name:"Charles Manson", subtyp:"SX6w7", heading:"Charles Manson – Sexueller Typ 6", krankheit:"Darmkrebs, tödliches Herzversagen", teaser:"SX6w7 – Sektenführer und Drahtzieher der Tate-LaBianca-Morde 1969, 1934–2017. Krankenhausaufenthalt und Darmkrebsdiagnose Anfang 2017, keine öffentliche Reue oder Wandlung bis zuletzt. Starb am 19. November 2017 im Gefängniskrankenhaus im Alter von 83 Jahren." , land:"USA", gender:"m", jahre:"1934–2017"},
  { route:"krankheitsportraets-bernie-madoff", name:"Bernie Madoff", subtyp:"SE3w4", heading:"Bernie Madoff – Selbsterhaltender Typ 3", krankheit:"Niereninsuffizienz im Endstadium", teaser:"SE3w4 – Architekt des größten Ponzi-Systems der Geschichte, 1938–2021. Fortschreitende Nierenerkrankung im Gefängnis, mehrfach abgelehnte Gesuche um vorzeitige Entlassung trotz einer Prognose von unter 18 Monaten Lebenszeit. Starb am 14. April 2021 in der Bundesstrafanstalt Butner im Alter von 82 Jahren." , land:"USA", gender:"m", jahre:"1938–2021"},
  { route:"krankheitsportraets-frida-kahlo", name:"Frida Kahlo", subtyp:"SE2w3", heading:"Frida Kahlo – Selbsterhaltender Typ 2", krankheit:"Chronische Unfallfolgen mit rund 30 Operationen, Beinamputation", teaser:"SE2w3 – mexikanische Malerin, 1907–1954. Kinderlähmung mit sechs Jahren, mit 18 ein katastrophaler Busunfall mit Wirbelsäulen- und Beckenbrüchen, rund 30 Operationen über fast drei Jahrzehnte, 1953 Amputation des rechten Unterschenkels. Starb 1954 mit 47 Jahren." , land:"Mexiko", gender:"f", jahre:"1907–1954"},
  { route:"krankheitsportraets-john-gotti", name:"John Gotti", subtyp:"SO8w7", heading:"John Gotti – Sozialer Typ 8", krankheit:"Kehlkopfkrebs", teaser:"SO8w7 – Boss der Gambino-Familie, 1940–2002. 1998 in Isolationshaft mit Kehlkopfkrebs diagnostiziert, kein öffentliches Eingeständnis von Schwäche, extreme Isolation in seinen letzten Haftjahren. Starb am 10. Juni 2002 im Bundesgefängnis Springfield, Missouri, im Alter von 61 Jahren." , land:"USA", gender:"m", jahre:"1940–2002"},
  { route:"krankheitsportraets-ludwig-xiv", name:"Ludwig XIV.", subtyp:"SO3w2", heading:"Ludwig XIV. – Sozialer Typ 3", krankheit:"Chronische Gicht, Analfistel, tödlicher Wundbrand", teaser:"SO3w2 – der Sonnenkönig, 1638–1715. Jahrzehntelange Gicht, 1686 unter strengster Geheimhaltung operierte Analfistel, tödlicher Wundbrand im Bein. Starb am 1. September 1715 in Versailles nach 72 Regierungsjahren im Alter von 76 Jahren." , land:"Frankreich", gender:"m", jahre:"1638–1715"},
  { route:"krankheitsportraets-oj-simpson", name:"O.J. Simpson", subtyp:"SO3w4", heading:"O.J. Simpson – Sozialer Typ 3", krankheit:"Prostatakrebs", teaser:"SO3w4 – NFL-Legende und Protagonist des Prozesses des Jahrhunderts, 1947–2024. 2023 Prostatakrebs diagnostiziert, weitgehend vor der Öffentlichkeit verborgen, gestorben am 10. April 2024 in Las Vegas." , land:"USA", gender:"m", jahre:"1947–2024"},
  { route:"krankheitsportraets-richard-ramirez", name:"Richard Ramírez", subtyp:"SX3w4", heading:"Richard Ramírez – Sexueller Typ 3", krankheit:"B-Zell-Lymphom", teaser:"SX3w4 – ›Der Night Stalker‹, 1960–2013. Diagnose eines B-Zell-Lymphoms in der Todeszelle, gestorben am 7. Juni 2013 in Greenbrae, Kalifornien, vor Vollstreckung des Todesurteils." , land:"USA", gender:"m", jahre:"1960–2013"},
  { route:"krankheitsportraets-spinoza", name:"Baruch de Spinoza", subtyp:"SE5w6", heading:"Baruch de Spinoza – Selbsterhaltender Typ 5", krankheit:"Chronische Lungenerkrankung durch Glasstaub", teaser:"SE5w6 – rationalistischer Philosoph, 1632–1677. Jahrzehntelanges Einatmen von Glasstaub beim Linsenschleifen, vermutliche Ursache seiner tödlichen Lungenerkrankung. Starb am 21. Februar 1677 in Den Haag im Alter von 44 Jahren." , land:"Niederlande", gender:"m", jahre:"1632–1677"},
  { route:"krankheitsportraets-hermann-hesse", name:"Hermann Hesse", subtyp:"SE5w6", heading:"Hermann Hesse – Selbsterhaltender Typ 5", krankheit:"Migräne, Augenleiden, wiederkehrende depressive Krisen", teaser:"SE5w6 – Schriftsteller, Nobelpreisträger, 1877–1962. Lebenslange schwere Migräne, chronische Augenleiden, Nervenzusammenbruch 1916, Psychoanalyse bei einem Schüler C. G. Jungs. Starb 1962 im Schlaf in Montagnola im Alter von 85 Jahren." , land:"Deutschland/Schweiz", gender:"m", jahre:"1877–1962"},
  { route:"krankheitsportraets-warren-buffett", name:"Warren Buffett", subtyp:"SE5w6", heading:"Warren Buffett – Selbsterhaltender Typ 5", krankheit:"Prostatakrebs im Frühstadium, 2012 diagnostiziert", teaser:"SE5w6 – Investor und Unternehmer, geb. 1930. 2012 im Alter von 81 Jahren mit Prostatakrebs im Stadium I diagnostiziert, per offenem Aktionärsbrief bekanntgegeben. Zweimonatige Strahlentherapie, im September 2012 erfolgreich abgeschlossen, ohne Unterbrechung seiner Führungsrolle bei Berkshire Hathaway." , land:"USA", gender:"m", jahre:"geb. 1930"},
  { route:"krankheitsportraets-voltaire", name:"Voltaire", subtyp:"SX4w3", heading:"Voltaire – Sexueller Typ 4", krankheit:"Chronische Verdauungs- und Blasenleiden", teaser:"SX4w3 – Schriftsteller und Philosoph der Aufklärung, 1694–1778. Jahrzehntelange, in Briefen exzessiv dokumentierte Verdauungs- und Blasenbeschwerden, ungebremste Produktivität trotz ständiger Klagen. Starb am 30. Mai 1778 in Paris, wenige Wochen nach seiner triumphalen Rückkehr aus dem Exil." , land:"Frankreich", gender:"m", jahre:"1694–1778"},
  { route:"krankheitsportraets-nikola-tesla", name:"Nikola Tesla", subtyp:"SO7w6", heading:"Nikola Tesla – Sozialer Typ 7", krankheit:"Fortschreitende Zwangsstörung, Keimphobie, völlige Isolation", teaser:"SO7w6 – Erfinder und Ingenieur, 1856–1943. Ausgeprägte Zwangsstörung mit Zählzwang und Keimphobie, jahrzehntelange zunehmende soziale Isolation, letzte Bindung zu einer einzelnen weißen Taube. Starb verarmt am 7. Januar 1943 allein in einem New Yorker Hotelzimmer." , land:"USA", gender:"m", jahre:"1856–1943"},
  { route:"krankheitsportraets-vincent-van-gogh", name:"Vincent van Gogh", subtyp:"SE4w5", heading:"Vincent van Gogh – Selbsterhaltender Typ 4", krankheit:"Wiederkehrende psychotische und mutmaßlich epileptische Krisen, Ohrschnitt 1888, Tod durch vermutlich selbst beigebrachte Schussverletzung", teaser:"SE4w5 – niederländischer Maler, 1853–1890. Wiederholte schwere psychische Krisen ab 1888, freiwillige Einweisung nach Saint-Rémy, Ohrschnitt nach dem Bruch mit Gauguin, ›Sternennacht‹ mitten in der Krise gemalt, Tod zwei Tage nach einer Schussverletzung am 29. Juli 1890." , land:"Niederlande", gender:"m", jahre:"1853–1890"},
  { route:"krankheitsportraets-stephen-hawking", name:"Stephen Hawking", subtyp:"SO5w6", heading:"Stephen Hawking – Sozialer Typ 5", krankheit:"Amyotrophe Lateralsklerose (ALS), Diagnose mit 21 Jahren, progressive Lähmung über 55 Jahre", teaser:"SO5w6 – britischer Physiker, 1942–2018. Diagnose mit 21 Jahren und einer Prognose von zwei Lebensjahren, überlebte 55 weitere Jahre bei fortschreitender vollständiger Lähmung. Kommunizierte zuletzt über einen computergestützten Sprachsynthesizer, arbeitete bis zuletzt an offenen Fragen der Physik." , land:"Großbritannien", gender:"m", jahre:"1942–2018"},
  { route:"krankheitsportraets-isaac-newton", name:"Isaac Newton", subtyp:"SO5w6", heading:"Isaac Newton – Sozialer Typ 5", krankheit:"Nervenzusammenbruch, vermutlich durch Quecksilbervergiftung", teaser:"SO5w6 – Physiker und Mathematiker, 1642/43–1727. Schwerer Nervenzusammenbruch 1693 mit paranoiden Anschuldigungen gegen enge Freunde, vermutlich durch jahrzehntelange, ungeschützte alchemistische Experimente mit Quecksilber verursacht. Erholte sich innerhalb eines Jahres, starb 1727 im Alter von 84 Jahren." , land:"England", gender:"m", jahre:"1642–1727"},
  { route:"krankheitsportraets-immanuel-kant", name:"Immanuel Kant", subtyp:"SO6w5", heading:"Immanuel Kant – Sozialer Typ 6", krankheit:"Chronische Hypochondrie, Atembeklemmung, später geistiger Verfall", teaser:"SO6w5 – Philosoph, 1724–1804. Lebenslange, extrem dokumentierte Hypochondrie mit chronischer Atembeklemmung, philosophische Verarbeitung der eigenen Krankheit im Spätwerk, geistiger Verfall in den letzten Lebensjahren. Starb am 12. Februar 1804 in Königsberg im Alter von 79 Jahren." , land:"Deutschland", gender:"m", jahre:"1724–1804"},
  { route:"krankheitsportraets-leonardo-da-vinci", name:"Leonardo da Vinci", subtyp:"SO5w4", heading:"Leonardo da Vinci – Sozialer Typ 5", krankheit:"Schlaganfall mit Lähmung der rechten Hand", teaser:"SO5w4 – Universalgelehrter und Künstler, 1452–1519. Schlaganfall um 1517 mit Lähmung der rechten Hand, Umstellung auf die linke Hand, fortgesetzte Arbeit an der Mona Lisa bis zuletzt. Starb am 2. Mai 1519 in Amboise, Frankreich, im Alter von 67 Jahren." , land:"Italien/Frankreich", gender:"m", jahre:"1452–1519"},
  { route:"krankheitsportraets-jules-verne", name:"Jules Verne", subtyp:"SO7w6", heading:"Jules Verne – Sozialer Typ 7", krankheit:"Schussverletzung mit lebenslanger Lähmung, später Diabetes", teaser:"SO7w6 – französischer Schriftsteller, 1828–1905. 1886 durch seinen geistig verwirrten Neffen niedergeschossen, Kugel dauerhaft im Bein, fortan hinkend, später zusätzlich Diabetes. Starb am 24. März 1905 in Amiens im Alter von 77 Jahren." , land:"Frankreich", gender:"m", jahre:"1828–1905"},
  { route:"krankheitsportraets-helmut-kohl", name:"Helmut Kohl", subtyp:"SO8w9", heading:"Helmut Kohl – Sozialer Typ 8", krankheit:"Schwerer Sturz mit Kopfverletzung, dauerhafte Rollstuhlpflichtigkeit und Sprachverlust", teaser:"SO8w9 – deutscher Bundeskanzler, 1930–2017. Schwerer Sturz im Februar 2008 mit Kopfverletzung, danach neun Jahre weitgehend pflegebedürftig, rollstuhlgebunden und in der Sprache stark eingeschränkt. Starb am 16. Juni 2017 in Ludwigshafen-Oggersheim im Alter von 87 Jahren." , land:"Deutschland", gender:"m", jahre:"1930–2017"},
  { route:"krankheitsportraets-ai-weiwei", name:"Ai Weiwei", subtyp:"SE2w3", heading:"Ai Weiwei – Selbsterhaltender Typ 2", krankheit:"Polizeigewalt mit Hirnblutung 2009, seither chronische Kopfschmerzen", teaser:"SE2w3 – chinesischer Künstler und Aktivist, geb. 1957. Im August 2009 von der Polizei in Chengdu geschlagen, dadurch Hirnblutung erlitten, im September 2009 Notoperation in München. Seither chronische Kopfschmerzen." , land:"China/Deutschland", gender:"m", jahre:"geb. 1957"},
  { route:"krankheitsportraets-mr-t", name:"Mr. T", subtyp:"SE2w3", heading:"Mr. T – Selbsterhaltender Typ 2", krankheit:"T-Zell-Lymphom (Krebs) mit Bestrahlung und Chemotherapie 1995", teaser:"SE2w3 – US-amerikanischer Schauspieler und Wrestler, geb. 1952. Im September 1995 Diagnose eines seltenen T-Zell-Lymphoms, Behandlung mit Bestrahlung und Chemotherapie, mehrjähriger Rückzug aus der Öffentlichkeit. Seither Krebsüberlebender und Fürsprecher für kranke Kinder." , land:"USA", gender:"m", jahre:"geb. 1952"},
  { route:"krankheitsportraets-oprah-winfrey", name:"Oprah Winfrey", subtyp:"SE2w3", heading:"Oprah Winfrey – Selbsterhaltender Typ 2", krankheit:"Sexueller Missbrauch in der Kindheit, Teenagerschwangerschaft mit 14 Jahren", teaser:"SE2w3 – US-amerikanische Moderatorin, Unternehmerin, Philanthropin, geb. 1954. Ab etwa ihrem neunten Lebensjahr über mehrere Jahre von Familienmitgliedern und Bekannten sexuell missbraucht, mit 14 schwanger, Verlust des Sohnes wenige Wochen nach der Geburt. Machte die Geschichte 1986 erstmals öffentlich und setzte sich 1991 vor dem US-Senat für den nach ihr benannten National Child Protection Act ein." , land:"USA", gender:"f", jahre:"geb. 1954"},
  { route:"krankheitsportraets-woody-allen", name:"Woody Allen", subtyp:"SE6w7", heading:"Woody Allen – Selbsterhaltender Typ 6", krankheit:"Lebenslange, öffentlich dokumentierte Hypochondrie ('Alarmismus')", teaser:"SE6w7 – US-amerikanischer Regisseur, Drehbuchautor und Komiker, geb. 1935. Seit den 1950er-Jahren dokumentierte Gesundheitsangst, über 35 Jahre Psychoanalyse, ausführlich im eigenen New-York-Times-Essay vom 12. Januar 2013 beschrieben." , land:"USA", gender:"m", jahre:"geb. 1935"},
  { route:"krankheitsportraets-fritz-perls", name:"Fritz Perls", subtyp:"SO8w7", heading:"Fritz Perls – Sozialer Typ 8", krankheit:"Jahrelanges Herzleiden, Kettenrauchen, Bauchspeicheldrüsenkrebs", teaser:"SO8w7 – Psychiater, Mitbegründer der Gestalttherapie, 1893–1970. Jahrelanges Herzleiden nach einer Narkose-Verletzung, lebenslanges Kettenrauchen, Bauchspeicheldrüsenkrebs-Operation. Starb am 14. März 1970 in Chicago an akutem Herzversagen." , land:"Deutschland/USA", gender:"m", jahre:"1893–1970"},
  { route:"krankheitsportraets-julian-assange", name:"Julian Assange", subtyp:"SO9w1", heading:"Julian Assange – Sozialer Typ 9", krankheit:"Über sieben Jahre Isolation mit dokumentierten körperlichen und psychischen Folgen", teaser:"SO9w1 – Gründer von WikiLeaks, geb. 1971. 2012–2019 nahezu vollständige Isolation in der ecuadorianischen Botschaft London, danach bis 2024 britische Hochsicherheitshaft. Ärztlich dokumentierte neuropsychologische Schäden, chronische Schmerzen und PTBS." , land:"Australien/Vereinigtes Königreich", gender:"m", jahre:"geb. 1971"},
  { route:"krankheitsportraets-morgan-freeman", name:"Morgan Freeman", subtyp:"SX7w6", heading:"Morgan Freeman – Sexueller Typ 7", krankheit:"Fibromyalgie mit chronischen Nervenschmerzen im linken Arm seit 2008", teaser:"SX7w6 – Schauspieler, geb. 1937. Schwerer Autounfall 2008 mit Nervenschäden an der linken Hand, seither Fibromyalgie-Diagnose mit chronischen Schmerzen, seither öffentlich sichtbarer Kompressionshandschuh." , land:"USA", gender:"m", jahre:"geb. 1937"},
  { route:"krankheitsportraets-junko-tabei", name:"Junko Tabei", subtyp:"SE7w6", heading:"Junko Tabei – Selbsterhaltende Typ 7", krankheit:"Bauchfellkrebs, weiterhin Bergbesteigungen bis zum Tod", teaser:"SE7w6 – Bergsteigerin, erste Frau auf dem Mount Everest, 1939–2016. Bauchfellkrebs-Diagnose 2012, bestieg trotzdem bis 2015 weiter Berge weltweit und setzte ihr Engagement für junge Menschen aus Fukushima fort. Starb 2016 im Alter von 77 Jahren." , land:"Japan", gender:"f", jahre:"1939–2016"},
  { route:"krankheitsportraets-mariah-carey", name:"Mariah Carey", subtyp:"SE7w8", heading:"Mariah Carey – Selbsterhaltende Typ 7", krankheit:"Bipolare Störung Typ II, 2001 diagnostiziert, 2018 öffentlich gemacht", teaser:"SE7w8 – Sängerin, geb. 1969. 2001 nach psychischem Zusammenbruch und Klinikaufenthalten mit bipolarer Störung Typ II diagnostiziert, hielt die Diagnose 17 Jahre geheim, machte sie 2018 öffentlich." , land:"USA", gender:"f", jahre:"geb. 1969"},
  { route:"krankheitsportraets-christiaan-barnard", name:"Christiaan Barnard", subtyp:"SO3w2", heading:"Christiaan Barnard – Sozialer Typ 3", krankheit:"Rheumatoide Arthritis in den Händen seit 1956, beendete 1983 die Chirurgenkarriere", teaser:"SO3w2 – Herzchirurg, erste erfolgreiche Herztransplantation 1967, 1922–2001. Rheumatoide Arthritis seit 1956, zunehmender Befall der Hände zwang ihn 1983 zum Ausscheiden aus der Chirurgie. Starb 2001 im Alter von 78 Jahren." , land:"Südafrika", gender:"m", jahre:"1922–2001"},
  { route:"krankheitsportraets-anthony-hopkins", name:"Anthony Hopkins", subtyp:"SE1w9", heading:"Anthony Hopkins – Selbsterhaltender Typ 1", krankheit:"Alkoholerkrankung, nüchtern seit 1975", teaser:"SE1w9 – Schauspieler, geb. 1937. Schwere Alkoholerkrankung bis zu einem Wendepunkt 1975, seither nach eigenen Angaben ununterbrochen nüchtern – über fünf Jahrzehnte." , land:"Vereinigtes Königreich/USA", gender:"m", jahre:"geb. 1937"},
  { route:"krankheitsportraets-byron-katie", name:"Byron Katie", subtyp:"SX6w7", heading:"Byron Katie – Sexueller Typ 6", krankheit:"Zehn Jahre schwere Depression und Agoraphobie, Wendepunkt 1986", teaser:"SX6w7 – Autorin, Begründerin von 'The Work', geb. 1942. Rund zehn Jahre schwere Depression und Agoraphobie, 1986 entscheidender Wendepunkt in einer Klinik, aus dem ihre spätere Methode entstand." , land:"USA", gender:"f", jahre:"geb. 1942"},
  { route:"krankheitsportraets-drew-barrymore", name:"Drew Barrymore", subtyp:"SO7w8", heading:"Drew Barrymore – Sozialer Typ 7", krankheit:"Kindheitssucht, Klinikeinweisung 1988 im Alter von 13 Jahren", teaser:"SO7w8 – Schauspielerin, geb. 1975. Bereits im Kindesalter beginnende Alkohol- und Drogensucht, 1988 im Alter von 13 Jahren in eine Entzugsklinik eingewiesen, mit 14 Jahren rechtlich von den Eltern emanzipiert." , land:"USA", gender:"f", jahre:"geb. 1975"},
  { route:"krankheitsportraets-neil-armstrong", name:"Neil Armstrong", subtyp:"SE6w5", heading:"Neil Armstrong – Selbsterhaltender Typ 6", krankheit:"Über zwei Jahrzehnte koronare Herzkrankheit, Tod nach Bypass-Operation", teaser:"SE6w5 – Astronaut, erster Mensch auf dem Mond, 1930–2012. Herzinfarkt 1991, über zwei Jahrzehnte fortschreitende koronare Herzkrankheit, Notfall-Vierfach-Bypass-Operation im August 2012, starb wenige Tage später an Komplikationen." , land:"USA", gender:"m", jahre:"1930–2012"},
  { route:"krankheitsportraets-robbie-williams", name:"Robbie Williams", subtyp:"SX1w2", heading:"Robbie Williams – Sexueller Typ 1", krankheit:"Jahrzehntelange Depression und Suchterkrankung (Alkohol, Kokain, Ecstasy)", teaser:"SX1w2 – Musiker, geb. 1974. Seit den frühen 1990er-Jahren schwere Depression und Suchterkrankung, mehrere Entzugsbehandlungen, 2023 in vierteiliger Netflix-Dokumentation ausführlich aufgearbeitet." , land:"Vereinigtes Königreich", gender:"m", jahre:"geb. 1974"},
  { route:"krankheitsportraets-jordan-peterson", name:"Dr. Jordan Peterson", subtyp:"SO1w9", heading:"Dr. Jordan Peterson – Sozialer Typ 1", krankheit:"Schwere Benzodiazepin-Abhängigkeit, künstliches Koma 2019/2020", teaser:"SO1w9 – Psychologe und Autor, geb. 1962. Schwere Benzodiazepin-Abhängigkeit, erfolglose Behandlungsversuche in Nordamerika, Ende 2019 künstlich herbeigeführtes Koma in Russland zur Entzugsbehandlung." , land:"Kanada", gender:"m", jahre:"geb. 1962"},
  { route:"krankheitsportraets-hundertwasser", name:"Friedensreich Hundertwasser", subtyp:"SX9w8", heading:"Friedensreich Hundertwasser – Sexueller Typ 9", krankheit:"Chronisches Herzleiden, Tod durch Herzversagen an Bord der Queen Elizabeth 2", teaser:"SX9w8 – Maler und Architekt, 1928–2000. Jahrelanges, weitgehend verschwiegenes Herzleiden, keine schulmedizinische Behandlung, Tod am 19. Februar 2000 an Bord des Ozeandampfers Queen Elizabeth 2 auf dem Pazifik." , land:"Österreich", gender:"m", jahre:"1928–2000"},
  { route:"krankheitsportraets-sadhguru", name:"Sadhguru", subtyp:"SE3w2", heading:"Sadhguru – Selbsterhaltender Typ 3", krankheit:"Chronisches subdurales Hämatom, Notoperation im März 2024", teaser:"SE3w2 – Yogi, Guru und Bestsellerautor, geb. 1957. Wochenlange Kopfschmerzen, chronische Hirnblutung, Notoperation am 17. März 2024." , land:"Indien", gender:"m", jahre:"geb. 1957"},
  { route:"krankheitsportraets-umberto-eco", name:"Dr. Umberto Eco", subtyp:"SE8w7", heading:"Dr. Umberto Eco – Selbsterhaltender Typ 8", krankheit:"Bauchspeicheldrüsenkrebs, rund zwei Jahre nahezu vollständig privat gehalten", teaser:"SE8w7 – Schriftsteller, Semiotiker und Philosoph, 1932–2016. Bauchspeicheldrüsenkrebs-Diagnose etwa zwei Jahre vor seinem Tod, unvermindertes literarisches Schaffen bis kurz vor dem Ende, Tod am 19. Februar 2016 in Mailand." , land:"Italien", gender:"m", jahre:"1932–2016"},
  { route:"krankheitsportraets-greta-thunberg", name:"Greta Thunberg", subtyp:"SE2w1", heading:"Greta Thunberg – Selbsterhaltender Typ 2", krankheit:"Schwere Depression, Essstörung und selektiver Mutismus im Kindesalter", teaser:"SE2w1 – Klimaaktivistin, geb. 2003. Schwere depressive Episode mit Essstörung und selektivem Mutismus im Alter von etwa elf Jahren, gefolgt von den Diagnosen Asperger-Syndrom und Zwangsstörung." , land:"Schweden", gender:"f", jahre:"geb. 2003"},
  { route:"krankheitsportraets-bob-marley", name:"Bob Marley", subtyp:"SO2w1", heading:"Bob Marley – Sozialer Typ 2", krankheit:"Malignes Melanom an der Zehe, aus religiösen Gründen abgelehnte Amputation", teaser:"SO2w1 – jamaikanischer Musiker, 1945–1981. 1977 diagnostiziertes malignes Melanom, aus religiösen Gründen abgelehnte Amputation, Ausbreitung des Krebses über Jahre, Tod am 11. Mai 1981 im Alter von 36 Jahren." , land:"Jamaika", gender:"m", jahre:"1945–1981"},
  { route:"krankheitsportraets-angelina-jolie", name:"Angelina Jolie", subtyp:"SO1w2", heading:"Angelina Jolie – Sozialer Typ 1", krankheit:"BRCA1-Genmutation, präventive doppelte Mastektomie 2013, Entfernung von Eierstöcken und Eileitern 2015", teaser:"SO1w2 – Schauspielerin und Regisseurin, geb. 1975. Nachweis der BRCA1-Genmutation nach familiärer Krebshäufung, öffentlich gemachte präventive doppelte Mastektomie 2013, Entfernung von Eierstöcken und Eileitern 2015." , land:"USA", gender:"f", jahre:"geb. 1975"},
  { route:"krankheitsportraets-adele", name:"Adele", subtyp:"SE4w3", heading:"Adele – Selbsterhaltender Typ 4", krankheit:"Schwere postnatale Depression mit Panikattacken, fast ein Jahrzehnt lang verschwiegen", teaser:"SE4w3 – Sängerin und Songwriterin, geb. 1988. Postnatale Depression nach der Geburt ihres Sohnes 2012, begleitende Panikattacken vor Auftritten, öffentliche Offenlegung erst 2021." , land:"Vereinigtes Königreich", gender:"f", jahre:"geb. 1988"},
  { route:"krankheitsportraets-jamie-lee-curtis", name:"Jamie Lee Curtis", subtyp:"SX1w2", heading:"Jamie Lee Curtis – Sexueller Typ 1", krankheit:"22 Jahre andauernde Opiatabhängigkeit nach kosmetischer Operation", teaser:"SX1w2 – Schauspielerin und Aktivistin, geb. 1958. Opiatabhängigkeit ab 1989 nach kosmetischem Eingriff, über zehn Jahre heimlich fortgeführt, nüchtern seit dem 19. Februar 1999." , land:"USA", gender:"f", jahre:"geb. 1958"},
  { route:"krankheitsportraets-genesis-p-orridge", name:"Genesis P-Orridge", subtyp:"SX8w9", heading:"Genesis P-Orridge – Sexueller Typ 8", krankheit:"Leukämie, über Jahre fortschreitend, Tod 2020", teaser:"SX8w9 – Musiker, Performance-Künstler und Okkultist, 1950–2020. Über Jahre verlaufende Leukämie-Erkrankung, künstlerisch aktiv bis kurz vor dem Tod, gestorben am 14. März 2020 in New York." , land:"Vereinigtes Königreich", gender:"nonbinary", jahre:"1950–2020"},
  { route:"krankheitsportraets-billie-eilish", name:"Billie Eilish", subtyp:"SX4w3", heading:"Billie Eilish – Sexueller Typ 4", krankheit:"Tourette-Syndrom, über Jahre verschwiegen; schwere depressive Phase mit Selbstverletzung im Teenageralter", teaser:"SX4w3 – Sängerin und Songwriterin, geb. 2001. Tourette-Syndrom seit der Kindheit, öffentlich bestätigt erst 2018; zusätzlich schwere Depression mit Selbstverletzung ab etwa dem zwölften Lebensjahr, dokumentiert 2021." , land:"USA", gender:"f", jahre:"geb. 2001"},
  { route:"krankheitsportraets-willy-brandt", name:"Willy Brandt", subtyp:"SO9w8", heading:"Willy Brandt – Sozialer Typ 9", krankheit:"Wiederkehrende schwere depressive Episoden, Darmkrebs", teaser:"SO9w8 – Bundeskanzler, Friedensnobelpreis 1971, 1913–1992. Wiederkehrende depressive Krisen während der politischen Laufbahn, unter anderem 1958 und 1974, gestorben 1992 an Darmkrebs." , land:"Deutschland", gender:"m", jahre:"1913–1992"},
  { route:"krankheitsportraets-hans-dietrich-genscher", name:"Hans-Dietrich Genscher", subtyp:"SE9w8", heading:"Hans-Dietrich Genscher – Selbsterhaltender Typ 9", krankheit:"Über Jahre bestehendes Herzleiden", teaser:"SE9w8 – Außenminister und Vizekanzler 1974–1992, 1927–2016. Über Jahre bekanntes Herzleiden bei ungebrochener öffentlicher Präsenz, gestorben am 31. März 2016 an dessen Folgen." , land:"Deutschland", gender:"m", jahre:"1927–2016"},
  { route:"krankheitsportraets-astrid-lindgren", name:"Astrid Lindgren", subtyp:"SE1w9", heading:"Astrid Lindgren – Selbsterhaltender Typ 1", krankheit:"Fortschreitende Makuladegeneration, nahezu vollständige Erblindung im hohen Alter", teaser:"SE1w9 – schwedische Schriftstellerin, 1907–2002. Fortschreitende Makuladegeneration in den letzten Lebensjahrzehnten, Umstellung auf Diktate statt Schreiben, fortgesetztes Tierschutz-Engagement trotz nahezu vollständiger Erblindung." , land:"Schweden", gender:"f", jahre:"1907–2002"},
  { route:"krankheitsportraets-sean-connery", name:"Sean Connery", subtyp:"SO3w4", heading:"Sean Connery – Sozialer Typ 3", krankheit:"Demenzerkrankung, erst nach dem Tod öffentlich bestätigt", teaser:"SO3w4 – Schauspieler, 1930–2020. Demenzerkrankung in den letzten Lebensjahren, über Jahre vor der Öffentlichkeit verborgen, erst nach seinem Tod 2020 von seinem Sohn bestätigt." , land:"Vereinigtes Königreich", gender:"m", jahre:"1930–2020"},
  { route:"krankheitsportraets-ashton-kutcher", name:"Ashton Kutcher", subtyp:"SO2w3", heading:"Ashton Kutcher – Sozialer Typ 2", krankheit:"Seltene Autoimmunerkrankung (Vaskulitis) mit zeitweiligem Verlust von Seh-, Hör- und Gehfähigkeit", teaser:"SO2w3 – Schauspieler und Unternehmer, geb. 1978. Seltene autoimmune Gefäßentzündung mit zeitweiligem Verlust von Seh-, Hör- und Gehfähigkeit, zwei Jahre lang privat gehalten, öffentlich gemacht 2023." , land:"USA", gender:"m", jahre:"geb. 1978"},
  { route:"krankheitsportraets-robert-de-niro", name:"Robert De Niro", subtyp:"SE1w9", heading:"Robert De Niro – Selbsterhaltender Typ 1", krankheit:"Prostatakrebs, 2003 diagnostiziert, erfolgreich und weitgehend privat behandelt", teaser:"SE1w9 – Schauspieler und Produzent, geb. 1943. 2003 diagnostizierter Prostatakrebs, zügig und diskret behandelt, seither nur vereinzelte öffentliche Erwähnungen im Kontext von Vorsorgeappellen." , land:"USA", gender:"m", jahre:"geb. 1943"},
  { route:"krankheitsportraets-ludwig-wittgenstein", name:"Ludwig Wittgenstein", subtyp:"SE1w9", heading:"Ludwig Wittgenstein – Selbsterhaltender Typ 1", krankheit:"Prostatakrebs mit Wirbelsäulen-Metastasen, Dezember 1949 diagnostiziert, unheilbar", teaser:"SE1w9 – Philosoph, 1889–1951. Monatelange Erschöpfung, fehlgedeutet als Blutarmut, im Dezember 1949 als Prostatakrebs mit Metastasen in der Wirbelsäule erkannt. Hormonbehandlung raubte ihm über ein Jahr lang die Denkfähigkeit. Starb am 29. April 1951 in Cambridge." , land:"Österreich/Vereinigtes Königreich", gender:"m", jahre:"1889–1951"},
  { route:"krankheitsportraets-elon-musk", name:"Elon Musk", subtyp:"SO7w6", heading:"Elon Musk – Sozialer Typ 7", krankheit:"Asperger-Syndrom, öffentlich bekannt gegeben 2021", teaser:"SO7w6 – Unternehmer, geb. 1971. Am 8. Mai 2021 live bei 'Saturday Night Live' öffentlich bekannt gegebenes Asperger-Syndrom, davor jahrzehntelang keine formale Diagnose." , land:"USA", gender:"m", jahre:"geb. 1971"},
  { route:"krankheitsportraets-frans-de-waal", name:"Frans de Waal", subtyp:"SX7w6", heading:"Frans de Waal – Sexueller Typ 7", krankheit:"Magenkrebs, arbeitete bis wenige Monate vor dem Tod weiter", teaser:"SX7w6 – Primatenforscher, 1948–2024. Magenkrebs-Diagnose im August 2023, blieb öffentlich und wissenschaftlich aktiv, starb am 14. März 2024 im Alter von 75 Jahren." , land:"Niederlande/USA", gender:"m", jahre:"1948–2024"},
  { route:"krankheitsportraets-salvatore-riina", name:"Salvatore Riina", subtyp:"SE8w9", heading:"Salvatore Riina – Selbsterhaltender Typ 8", krankheit:"Niereninsuffizienz, Schlaganfall", teaser:"SE8w9 – Boss der Cosa Nostra, 1930–2017. Fortschreitende Niereninsuffizienz, Schlaganfall 2017, wiederholt abgelehnte Anträge auf Haftverschonung. Gestorben am 17. November 2017 im Krankenhausflügel des Gefängnisses von Parma." , land:"Italien", gender:"m", jahre:"1930–2017"},
  { route:"krankheitsportraets-dolly-parton", name:"Dolly Parton", subtyp:"SX3w4", heading:"Dolly Parton – Sexueller Typ 3", krankheit:"Endometriose seit den frühen 1980ern, zuletzt Krebserkrankung", teaser:"SX3w4 – Sängerin, Songwriterin, 1946–2026. Anfang der 1980er-Jahre diagnostizierte Endometriose mit Teilhysterektomie 1985, jahrzehntelang wiederkehrende Gesundheitskrisen. Starb am 25. August 2026 nach kurzer Krebserkrankung. Verknüpft mit Marilyn Monroe (ebenfalls SX3w4, ebenfalls Endometriose)." , land:"USA", gender:"f", jahre:"1946–2026"},
  { route:"krankheitsportraets-romy-schneider", name:"Romy Schneider", subtyp:"SO4w3", heading:"Romy Schneider – Sozialer Typ 4", krankheit:"Nierenoperation, eskalierender Alkohol- und Tablettenkonsum, ungeklärter Tod", teaser:"SO4w3 – Schauspielerin, 1938–1982. Schwere Nierenoperation, Suizid ihres ersten Mannes Harry Meyen 1979, tödlicher Unfall ihres Sohnes David 1981. Starb am 29. Mai 1982 offiziell an Herzversagen, ohne Obduktion. Verknüpft mit Michael Jackson (ebenfalls SO4w3, ebenfalls Substanzabhängigkeit hinter makelloser Fassade)." , land:"Österreich/Deutschland", gender:"f", jahre:"1938–1982"},
  { route:"krankheitsportraets-yayoi-kusama", name:"Yayoi Kusama", subtyp:"SE2w3", heading:"Yayoi Kusama – Selbsterhaltender Typ 2", krankheit:"Seit Kindheit bestehende Halluzinationen und Depersonalisation, freiwillig in psychiatrischer Klinik seit 1977", teaser:"SE2w3 – japanische Künstlerin, 1929–2026. Halluzinationen seit früher Kindheit, mehrere Suizidversuche in den 1970ern, seit 1977 freiwillig im Seiwa-Krankenhaus für psychisch Kranke in Tokio. Arbeitete bis zuletzt fast täglich in ihrem Atelier. Verknüpft mit Frida Kahlo (ebenfalls SE2w3, ebenfalls Kunst aus lebenslangem Leiden)." , land:"Japan", gender:"f", jahre:"1929–2026"},
  { route:"krankheitsportraets-michael-schumacher", name:"Michael Schumacher", subtyp:"SX6w7", heading:"Michael Schumacher – Sexueller Typ 6", krankheit:"Schweres Schädel-Hirn-Trauma nach Skiunfall 2013, seither vollständige mediale Abschottung", teaser:"SX6w7 – Formel-1-Rennfahrer, siebenmaliger Weltmeister, geb. 1969. Skiunfall am 29. Dezember 2013 in Méribel mit schwerem Schädel-Hirn-Trauma, mehrere Notoperationen, monatelanges künstliches Koma. Seit der Entlassung 2014 hält die Familie seinen Gesundheitszustand vollständig geheim." , land:"Deutschland", gender:"m", jahre:"geb. 1969"},
  { route:"krankheitsportraets-klaus-kinski", name:"Klaus Kinski", subtyp:"SX1w9", heading:"Klaus Kinski – Sexueller Typ 1", krankheit:"Psychiatrische Zwangseinweisung 1950 mit vorläufiger Schizophrenie-Diagnose, lebenslange Wutausbrüche", teaser:"SX1w9 – Schauspieler, 1926–1991. Zwangseinweisung am 5. September 1950 nach Suizidversuch und Gewaltausbruch, vorläufige Diagnose Schizophrenie, später auf Psychopathie revidiert. Legendäre Wutausbrüche am Set über Jahrzehnte, 2013 posthume Missbrauchsvorwürfe seiner Tochter Pola." , land:"Deutschland", gender:"m", jahre:"1926–1991"},
  { route:"krankheitsportraets-natascha-kampusch", name:"Natascha Kampusch", subtyp:"SE2w1", heading:"Natascha Kampusch – Selbsterhaltender Typ 2", krankheit:"Posttraumatische Belastungsstörung, schwerer psychischer Zusammenbruch zwanzig Jahre nach der Befreiung", teaser:"SE2w1 – Autorin und Aktivistin, geb. 1988. Posttraumatische Belastungsstörung nach achtjähriger Gefangenschaft (1998–2006), 2026 durch die Familie öffentlich gemachter schwerer psychischer Zusammenbruch. Verknüpft mit Greta Thunberg (ebenfalls SE2w1, ebenfalls Rückzug in eine eigene Welt unter extremem Druck)." , land:"Österreich", gender:"f", jahre:"geb. 1988"},
  { route:"krankheitsportraets-honore-de-balzac", name:"Honoré de Balzac", subtyp:"SE4w3", heading:"Honoré de Balzac – Selbsterhaltender Typ 4", krankheit:"Jahrzehntelanger Raubbau durch Arbeitswahn und Koffeinexzess, Herzinsuffizienz mit tödlicher Gangrän", teaser:"SE4w3 – französischer Schriftsteller, 1799–1850. Jahrzehntelange nächtliche Schreibmarathons und exzessiver Kaffeekonsum, fortschreitende Herzinsuffizienz, Gangrän nach wiederholten Trokar-Eingriffen gegen Beinödeme, Tod am 18. August 1850, fünf Monate nach der Hochzeit mit Ewelina Hańska." , land:"Frankreich", gender:"m", jahre:"1799–1850"},
  { route:"krankheitsportraets-t-e-lawrence", name:"T. E. Lawrence", subtyp:"SE4w3", heading:"T. E. Lawrence – Selbsterhaltender Typ 4", krankheit:"Dreizehn Jahre anhaltende Depression und vermutete posttraumatische Belastungsstörung nach Deraa 1917, selbst organisiertes Bestrafungsritual", teaser:"SE4w3 – britischer Offizier, Archäologe, 1888–1935. Chronische Depression und Selbsthass von 1922 bis zu seinem Tod, freiwilliger Rückzug unter zwei falschen Namen in niedrigste Militärränge, ab 1923 selbst arrangiertes Auspeitschen-Ritual, Tod am 19. Mai 1935 nach einem Motorradunfall." , land:"Vereinigtes Königreich", gender:"m", jahre:"1888–1935"},
];

const BERUEHMT_PORTRAITS = [
  { route:"beruehmte-queen-elizabeth-ii", name:"Queen Elizabeth II.", added:"2026-07-20", subtyp:"SE1w9",
    heading:"Queen Elizabeth II. \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w9 \u00b7 1926\u20132022. K\u00f6nigin des Vereinigten K\u00f6nigreichs, 70 Jahre auf dem Thron. Pflicht als Lebensinhalt, Stille als St\u00e4rke, niemals klagen, niemals erkl\u00e4ren. Der Adler, der seinen Posten nie verlie\u00df. Tierentsprechung: Adler.",
    land:"Schottland", tags:["Politik","Adel"] , gender:"f"},
  { route:"beruehmte-robert-de-niro", name:"Robert De Niro", added:"2026-08-14", subtyp:"SE1w9",
    heading:"Robert De Niro – Selbsterhaltender Typ 1",
    teaser:"SE1w9 · geb. 1943 in New York City. Schauspieler und Produzent, zwei Oscars („Der Pate II“, „Wie ein wilder Stier“), langjähriger Weggefährte Martin Scorseses. Wahrheit als Handwerk, Stille als zweite Natur. Tierentsprechung: Adler.",
    land:"USA", tags:["Schauspiel"] , gender:"m"},
  { route:"beruehmte-sting", name:"Sting", subtyp:"SE1w9",
    heading:"Sting \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w9 \u00b7 \u201eDer Adler\u201d, geb. 1951. S\u00e4nger, Bassist, Komponist. The Police und eine beispiellose Solokarriere \u2013 von Jazz bis Laute, von Shakespeare bis Rainforest Foundation. Handwerk als Gewissen, Stille als zweite Natur. Tierentsprechung: Adler.",
    land:"Großbritannien", tags:["Musik"] , gender:"m"},
  { route:"beruehmte-ludwig-wittgenstein", name:"Ludwig Wittgenstein", added:"2026-08-28", subtyp:"SE1w9",
    heading:"Ludwig Wittgenstein – Selbsterhaltender Typ 1",
    teaser:"SE1w9 · 1889–1951. Philosoph, Verfasser des Tractatus logico-philosophicus und der Philosophischen Untersuchungen. Verschenkte sein gesamtes Vermögen, lebte asketisch, arbeitete zeitweise als Dorfschullehrer und Klostergärtner. Tierentsprechung: Adler.",
    land:"Österreich/Vereinigtes Königreich", tags:["Philosophie","Wissenschaft"], gender:"m"},
  { route:"beruehmte-gianna-nannini", name:"Gianna Nannini", added:"2026-08-29", subtyp:"SE1w9",
    heading:"Gianna Nannini – Selbsterhaltender Typ 1",
    teaser:"SE1w9 · geb. 1954. Italienische Rocksängerin, ›America‹, ›Bello e impossibile‹, klassisch am Konservatorium ausgebildet. Mit 56 Jahren allein Mutter geworden, 2017 nach London gezogen, um ihre Partnerin heiraten zu können. Über fünfzig Jahre kontinuierliche Karriere. Tierentsprechung: Adler.",
    land:"Italien", tags:["Musik"], gender:"f"},
  { route:"beruehmte-astrid-lindgren", name:"Astrid Lindgren", added:"2026-08-14", subtyp:"SE1w9",
    heading:"Astrid Lindgren – Selbsterhaltender Typ 1",
    teaser:"SE1w9 · 1907–2002. Schwedische Schriftstellerin, Pippi Langstrumpf, Karlsson vom Dach, Die Brüder Löwenherz. Disziplin als tägliches Ritual, stiller Tierschutz-Kampf im hohen Alter (›Lex Lindgren‹). Tierentsprechung: Adler.",
    land:"Schweden", tags:["Literatur"] , gender:"f"},
  { route:"beruehmte-ken-follett", name:"Ken Follett", added:"2026-07-28", subtyp:"SE1w9",
    heading:"Ken Follett \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w9 \u00b7 geb. 1949. Bestseller-Autor historischer Romane, u. a. \u00fcber eine mittelalterliche Kathedrale und die Weltkriege des 20. Jahrhunderts. \u00dcber sechzig Jahre schriftstellerische Konstanz, akribische Recherche und ein ruhiger, unersch\u00fctterlicher Arbeitsrhythmus. Tierentsprechung: Adler.",
    land:"Wales", tags:["Literatur"] , gender:"m"},
  { route:"beruehmte-konrad-adenauer", name:"Konrad Adenauer", added:"2026-08-09", subtyp:"SE1w9",
    heading:"Konrad Adenauer \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w9 \u00b7 1876\u20131967. Erster Bundeskanzler der Bundesrepublik Deutschland (1949\u20131963). Wiederaufbau, Westbindung, deutsch-franz\u00f6sische Auss\u00f6hnung. Der Adler, der mit 73 Jahren noch einmal aufstieg, um ein zerbrochenes Land wieder flugf\u00e4hig zu machen.",
    land:"Deutschland", tags:["Politik","Geschichte"], gender:"m"},
  { route:"beruehmte-aristoteles", name:"Aristoteles", added:"2026-08-10", subtyp:"SE1w9",
    heading:"Aristoteles \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w9 \u00b7 384\u2013322 v. Chr. Philosoph, Begr\u00fcnder der Logik, Lehrer Alexanders des Gro\u00dfen. Die goldene Mitte als Lebensprinzip \u2013 kein Kampf gegen die Welt, sondern das ruhige, jahrzehntelange Ordnen allen Wissens in ein einziges System. Tierentsprechung: Adler.",
    land:"Griechenland", tags:["Philosophie","Geschichte"] , gender:"m"},
  { route:"beruehmte-magnus-carlsen", name:"Magnus Carlsen", added:"2026-08-14", subtyp:"SE1w9",
    heading:"Magnus Carlsen – Selbsterhaltender Typ 1",
    teaser:"SE1w9 · geb. 1990 in Tønsberg, Norwegen. Schachgroßmeister, Weltmeister 2013–2023, höchste Elo-Zahl der Schachgeschichte. Fehlerlosigkeit als Handwerk, Loslassen als Stärke – freiwilliger Verzicht auf die Titelverteidigung. Tierentsprechung: Adler.",
    tags:["Sport"] , gender:"m"},
  { route:"beruehmte-peter-sharpe", name:"Dr. Peter Sharpe", added:"2026-08-17", subtyp:"SE1w9",
    heading:"Dr. Peter Sharpe – Selbsterhaltender Typ 1",
    teaser:"SE1w9 · Wildbiologe. Leitet seit 1997 die Wiederansiedlung und Überwachung der Weißkopfseeadler auf den kalifornischen Kanalinseln. Fast dreißig Jahre akribischer Feldarbeit, die eine Art vom lokalen Aussterben zurückholte. Tierentsprechung: Adler.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-anthony-hopkins", name:"Anthony Hopkins", added:"2026-08-14", subtyp:"SE1w9",
    heading:"Anthony Hopkins – Selbsterhaltender Typ 1",
    teaser:"SE1w9 · geb. 1937 in Port Talbot, Wales. Schauspieler, zwei Oscars („Das Schweigen der Lämmer“, „The Father“). Genauigkeit als Selbstverpflichtung, Stille als Zuhause – Drehbücher werden hundertfach gelesen, bis sie vollständig sitzen. Tierentsprechung: Adler.",
    land:"Wales", tags:["Schauspiel"] , gender:"m"},
  { route:"beruehmte-joseph-aoun", name:"Joseph Aoun", added:"2026-08-24", subtyp:"SE1w9",
    heading:"Joseph Aoun \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w9 \u00b7 geb. 1964 in Sin el Fil. Libanesischer Armeekommandeur (2017\u20132025), seit Januar 2025 Staatspr\u00e4sident des Libanon. \u00dcberparteilicher Konsenskandidat nach zwei Jahren politischem Stillstand, \u00bbMann weniger Worte\u00ab. Tierentsprechung: Adler.",
    land:"Libanon", tags:["Politik"], gender:"m"},
  { route:"beruehmte-pierce-brosnan", name:"Pierce Brosnan", added:"2026-08-14", subtyp:"SE1w2",
    heading:"Pierce Brosnan – Selbsterhaltender Typ 1",
    teaser:"SE1w2 · geb. 1953 in Navan, Irland. Schauspieler und Produzent, James Bond 1995–2002. Disziplin als Handwerk, persönlicher Verlust als Antrieb für Engagement gegen Eierstockkrebs und für Umweltschutz. Tierentsprechung: Adler.",
    land:"Irland", tags:["Schauspiel"] , gender:"m"},
  { route:"beruehmte-christoph-waltz", name:"Christoph Waltz", subtyp:"SE1w2",
    heading:"Christoph Waltz \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w2 \u00b7 \u201eDer Adler\u201c, geb. 1956. Zweifacher Oscar-Preistr\u00e4ger f\u00fcr Inglourious Basterds und Django Unchained. F\u00fcnfzig Jahre Handwerk, ein ganzes Leben lang innere Pr\u00e4zision \u2013 dann der Moment, auf den der Adler gewartet hatte. Tierentsprechung: Adler.",
    land:"Österreich", tags:["Schauspiel"] , gender:"m"},
  { route:"beruehmte-marie-kondo", name:"Marie Kondo", added:"2026-07-20", subtyp:"SE1w2",
    heading:"Marie Kondo \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w2 \u00b7 geb. 1984. Ordnungsberaterin, Autorin der KonMari-Methode. \"L\u00f6st es Freude aus?\" \u2013 ein inneres System, so klar wie ein Adlerblick, und ein Zweierfl\u00fcgel, der es zur Berufung macht. Der Adler, der Ordnung als Heimat versteht. Tierentsprechung: Adler.",
    land:"Japan", tags:["Kultur","Gesellschaft"] , gender:"f"},
  { route:"beruehmte-dan-brown", name:"Dan Brown", added:"2026-07-28", subtyp:"SE1w2",
    heading:"Dan Brown \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w2 \u00b7 geb. 1964. Bestseller-Autor, bekannt f\u00fcr seine Symbolik- und Verschw\u00f6rungsromane um Robert Langdon. Jahrelange akribische Recherche, ein streng durchgetakteter Arbeitstag \u2013 und die Gabe, hochkomplexe Themen f\u00fcr Millionen Leser zug\u00e4nglich zu machen. Tierentsprechung: Adler.",
    land:"USA", tags:["Literatur"] , gender:"m"},
  { route:"beruehmte-udo-juergens", name:"Udo J\u00fcrgens", added:"2026-08-09", subtyp:"SE1w2",
    heading:"Udo J\u00fcrgens \u2013 Selbsterhaltender Typ 1",
    teaser:"SE1w2 \u00b7 1934\u20132014. \u00d6sterreichischer S\u00e4nger und Komponist. Griechischer Wein, Merci Ch\u00e9rie, \u00fcber 1.000 Kompositionen in sechs Jahrzehnten. Der Adler, der Perfektion mit echter W\u00e4rme f\u00fcrs Publikum verband.",
    land:"Österreich", tags:["Musik"], gender:"m"},
  { route:"beruehmte-ursula-von-der-leyen", name:"Ursula von der Leyen", added:"2026-07-29", subtyp:"SO1w9",
    heading:"Ursula von der Leyen \u2013 Sozialer Typ 1",
    teaser:"SO1w9 \u00b7 geb. 1958. Pr\u00e4sidentin der Europ\u00e4ischen Kommission. Krisenmanagerin mit hartem Durchsetzungswillen hinter diplomatischer Fassade \u2013 und im Zentrum der umstrittenen \"Pfizergate\"-Aff\u00e4re um verweigerte Transparenz bei den Impfstoff-Vertr\u00e4gen. Tierentsprechung: Gans.",
    land:"Russland", tags:["Politik"] , gender:"f"},
  { route:"beruehmte-friedrich-merz", name:"Friedrich Merz", subtyp:"SO1w9",
    heading:"Friedrich Merz \u2013 Sozialer Typ 1",
    teaser:"SO1w9 \u00b7 \u201eDie Gans\u201c, geb. 1955. Bundeskanzler, CDU-Vorsitzender, Jurist. Prinzip vor Pragmatismus, Ordnung als moralische Frage \u2013 und die Geduld, jahrelang zu warten, bis die Stunde kommt. Tierentsprechung: Gans.",
    land:"Deutschland", tags:["Politik"] , gender:"m"},
  { route:"beruehmte-samuel-hahnemann", name:"Dr. Samuel Hahnemann", added:"2026-08-09", subtyp:"SO1w9",
    heading:"Dr. Samuel Hahnemann \u2013 Sozialer Typ 1",
    teaser:"SO1w9 \u00b7 1755\u20131843. Deutscher Arzt, Begr\u00fcnder der Hom\u00f6opathie. Vom Chinarinden-Selbstversuch zum weltweit praktizierten Heilsystem. Die Gans, die gegen die \u201eheroische Medizin\u201c ihrer Zeit aufbegehrte \u2013 und Millionen noch heute begleitet.",
    land:"Schottland", tags:["Medizin","Hom\u00f6opathie"], gender:"m"},
  { route:"beruehmte-xanthippe", name:"Xanthippe", added:"2026-08-14", subtyp:"SO1w9",
    heading:"Xanthippe – Sozialer Typ 1",
    teaser:"SO1w9 · ca. 5. Jh. v. Chr. Frau des Sokrates, Mutter dreier Söhne. Vom antiken Zerrbild der ›Zanksüchtigen‹ zur Neubewertung: geduldige Sorge um die Familie unter schwierigen Bedingungen, berechtigter Zorn, tiefe Trauer. Tierentsprechung: Gans.",
    tags:["Geschichte"], gender:"f"},
  { route:"beruehmte-adam-smith", name:"Adam Smith", added:"2026-08-09", subtyp:"SO1w9",
    heading:"Adam Smith \u2013 Sozialer Typ 1",
    teaser:"SO1w9 \u00b7 1723\u20131790. Schottischer Moralphilosoph und \u00d6konom, Theorie der ethischen Gef\u00fchle, Der Wohlstand der Nationen. Die Gans, die eine gerechtere Ordnung suchte \u2013 und deren Treue zu ihrem Freund David Hume sie den eigenen guten Ruf kostete.",
    land:"Schottland", tags:["Philosophie","Wirtschaft"], gender:"m"},
  { route:"beruehmte-konrad-lorenz", name:"Konrad Lorenz", added:"2026-08-17", subtyp:"SO1w9",
    heading:"Konrad Lorenz \u2013 Sozialer Typ 1",
    teaser:"SO1w9 \u00b7 1903\u20131989. \u00d6sterreichischer Zoologe, Begr\u00fcnder der Ethologie, Nobelpreis f\u00fcr Physiologie oder Medizin 1973. Ber\u00fchmt f\u00fcr die Pr\u00e4gungsforschung an Graug\u00e4nsen. Vom Spiegel \u201eEinstein der Tierseele\u201c genannt \u2013 belastet durch NSDAP-Mitgliedschaft und Beteiligung an NS-Bev\u00f6lkerungspolitik. Tierentsprechung: Gans.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-jordan-peterson", name:"Dr. Jordan Peterson", subtyp:"SO1w9",
    heading:"Jordan Peterson \u2013 Sozialer Typ 1",
    teaser:"SO1w9 \u00b7 geb. 1962. Psychologe, Autor, Vortragsredner. Die Gans, die Ordnung predigt \u2013 weil sie das Chaos aus eigener Erfahrung kennt und wei\u00df, was es kostet, wenn Struktur fehlt.",
    added:"2026-07-15", land:"Kanada", tags:["Wissenschaft","Gesellschaft"] , gender:"m"},
  { route:"beruehmte-juergen-klopp", name:"J\u00fcrgen Klopp", added:"2026-07-20", subtyp:"SO1w2",
    heading:"J\u00fcrgen Klopp \u2013 Sozialer Typ 1",
    teaser:"SO1w2 \u00b7 geb. 1967. Trainer, Meister, Motivator. BVB, Liverpool, Red Bull \u2013 seit August 2026 Bundestrainer. Die Gans, die ihrer Formation glaubt, bevor die Formation sich selbst glaubt. Tierentsprechung: Gans.",
    land:"Deutschland", tags:["Sport"] , gender:"m"},
  { route:"beruehmte-angelina-jolie", name:"Angelina Jolie", subtyp:"SO1w2",
    heading:"Angelina Jolie \u2013 Sozialer Typ 1",
    teaser:"SO1w2 \u00b7 \u201eDie Gans\u201c, geb. 1975. Schauspielerin, Regisseurin, UN-Sonderbotschafterin. \u00dcber 20 Jahre humanit\u00e4re Arbeit in Krisengebieten, sechs Kinder, ein Schaffen, das immer auch Haltung ist. Tierentsprechung: Gans.",
    land:"USA", tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-david-bowie", name:"David Bowie", added:"2026-07-29", subtyp:"SO1w2",
    heading:"David Bowie \u2013 Sozialer Typ 1",
    teaser:"SO1w2 \u00b7 1947\u20132016. Musiker, K\u00fcnstler, kulturelle Grenzg\u00e4ngerfigur. Ziggy Stardust, Thin White Duke, Berliner Trilogie \u2013 f\u00fcnf Jahrzehnte Verwandlung mit dem Anspruch, gesellschaftliche Grenzen aufzul\u00f6sen. Die Gans, die anderen den Weg \u00f6ffnete. Tierentsprechung: Gans.",
    land:"Großbritannien", tags:["Musik"] , gender:"m"},
  { route:"beruehmte-konfuzius", name:"Konfuzius (Kong Fuzi)", added:"2026-08-07", subtyp:"SO1w2",
    heading:"Konfuzius (Kong Fuzi) \u2013 Sozialer Typ 1",
    teaser:"SO1w2 \u00b7 551\u2013479 v. Chr. Philosoph, Begr\u00fcnder des Konfuzianismus, Lehrer und Wanderer durch die F\u00fcrstent\u00fcmer Chinas. \u201eEinen Fehler zu machen und ihn nicht zu korrigieren \u2013 das ist der wahre Fehler.\u201c Die Gans, die zur Vorbildfigur einer ganzen Zivilisation wurde. Tierentsprechung: Gans.",
    land:"China", tags:["Philosophie","Geschichte"], gender:"m"},
  { route:"beruehmte-klaus-kinski", name:"Klaus Kinski", added:"2026-07-20", subtyp:"SX1w9",
    heading:"Klaus Kinski \u2013 Sexueller Typ 1",
    teaser:"SX1w9 \u00b7 1926\u20131991. Schauspieler, Kontratyp der Eins. Aguirre, Nosferatu, Fitzcarraldo. Die Schwarze Mamba des deutschen Kinos: unberechenbar, intensiv, unvermeidlich. Man konnte ihn lieben oder hassen \u2013 Gleichg\u00fcltigkeit war keine Option.",
    land:"Deutschland", tags:["Schauspiel","Kino"] , gender:"m"},
  { route:"beruehmte-marie-agnes-strack-zimmermann", name:"Marie-Agnes Strack-Zimmermann", added:"2026-07-20", subtyp:"SX1w9",
    heading:"Marie-Agnes Strack-Zimmermann \u2013 Sexueller Typ 1",
    teaser:"SX1w9 \u00b7 geb. 1958. FDP-Politikerin, Vorsitzende des Verteidigungsausschusses, EU-Parlamentarierin. Die Schwarze Mamba der deutschen Politik: scharf, beharrlich, prinzipientreu. Feuer und Ausdauer in einem. Tierentsprechung: Schwarze Mamba.",
    land:"Deutschland", tags:["Politik"] , gender:"f"},
  { route:"beruehmte-bill-haast", name:"Bill Haast", added:"2026-08-17", subtyp:"SX1w9",
    heading:"Bill Haast \u2013 Sexueller Typ 1",
    teaser:"SX1w9 \u00b7 1910\u20132011. Herpetologe, Gr\u00fcnder des Miami Serpentarium. \u00dcberlebte 172 Giftschlangenbisse, jahrzehntelange w\u00f6chentliche Selbstinjektionen mit Schlangengift, half bei der Entwicklung des ersten Korallenschlangen-Gegengifts. Tierentsprechung: Schwarze Mamba.",
    land:"USA", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-rasputin", name:"Grigori Rasputin", added:"2026-07-29", subtyp:"SX1w9",
    heading:"Grigori Rasputin \u2013 Sexueller Typ 1",
    teaser:"SX1w9 \u00b7 1869\u20131916. Wanderm\u00f6nch, Heiler, Vertrauter der Zarenfamilie. Ein Mann, der Petersburgs Salons mit brennenden Augen verst\u00f6rte und einen kranken Zarewitsch heilte, wo \u00c4rzte scheiterten \u2013 Reinheit und Rausch in derselben Gestalt. Tierentsprechung: Schwarze Mamba.",
    land:"Russland", tags:["Geschichte"] , gender:"m"},
  { route:"beruehmte-romulus-whitaker", name:"Romulus Whitaker", added:"2026-08-17", subtyp:"SX1w2",
    heading:"Romulus Whitaker \u2013 Sexueller Typ 1",
    teaser:"SX1w2 \u00b7 geb. 1943. Herpetologe, \u201eThe Snakeman of India\u201c, Padma-Shri-Preistr\u00e4ger. Gr\u00fcnder des Madras Snake Park, der Madras Crocodile Bank und der Agumbe Rainforest Research Station. Verwandelte die Irula von Schlangenj\u00e4gern zu Schlangensch\u00fctzern. Tierentsprechung: Schwarze Mamba.",
    land:"Indien", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-thea-litschka-koen", name:"Thea Litschka-Koen", added:"2026-08-17", subtyp:"SX1w2",
    heading:"Thea Litschka-Koen \u2013 Sexueller Typ 1",
    teaser:"SX1w2 \u00b7 Gr\u00fcnderin der Eswatini Antivenom Foundation, f\u00fchrende Expertin f\u00fcr Schwarze Mambas. Fast keine Todesf\u00e4lle mehr durch Schlangenbisse im Land dank ihres Antivenom-Bank-Systems. Tierentsprechung: Schwarze Mamba.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-robbie-williams", name:"Robbie Williams", added:"2026-07-30", subtyp:"SX1w2",
    heading:"Robbie Williams \u2013 Sexueller Typ 1",
    teaser:"SX1w2 \u00b7 geb. 1974. S\u00e4nger, Entertainer, ehemals Take That. Radikale Offenheit \u00fcber Sucht, Depression und Selbstzweifel \u2013 die Schwarze Mamba, die keine L\u00fcge ertr\u00e4gt, auch nicht die eigene. Tierentsprechung: Schwarze Mamba.",
    land:"Großbritannien", tags:["Musik"] , gender:"m"},
  { route:"beruehmte-eminem", name:"Eminem", added:"2026-08-27", subtyp:"SX1w2",
    heading:"Eminem \u2013 Sexueller Typ 1",
    teaser:"SX1w2 \u00b7 geb. 1972. Rapper und Songwriter, b\u00fcrgerlich Marshall Bruce Mathers III. Schonungslose, hochpr\u00e4zise Reimtechnik, radikale Wahrhaftigkeit \u00fcber Sucht und gescheiterte Ehe, alleinerziehender Vater seiner Tochter Hailie. Tierentsprechung: Schwarze Mamba.",
    land:"USA", tags:["Musik"], gender:"m"},
  { route:"beruehmte-martin-luther", name:"Martin Luther", added:"2026-08-27", subtyp:"SX1w2",
    heading:"Martin Luther \u2013 Sexueller Typ 1",
    teaser:"SX1w2 \u00b7 1483\u20131546. Reformator, Bibel\u00fcbersetzer. 95 Thesen 1517, \u203aHier stehe ich, ich kann nicht anders\u2039 vor dem Reichstag zu Worms 1521, kompromissloser Eifer f\u00fcr die reine Lehre \u2013 mit dunklem Schatten in der Hetzschrift von 1543. Tierentsprechung: Schwarze Mamba.",
    land:"Deutschland", tags:["Geschichte","Religion"], gender:"m"},
  { route:"beruehmte-jamie-lee-curtis", name:"Jamie Lee Curtis", added:"2026-07-20", subtyp:"SX1w2",
    heading:"Jamie Lee Curtis \u2013 Sexueller Typ 1",
    teaser:"SX1w2 \u00b7 geb. 1958. Schauspielerin, Oscar-Gewinnerin 2023, Aktivistin. 22 Jahre Sucht, 25 Jahre N\u00fcchternheit \u2013 die Schwarze Mamba, die keine Heuchelei ertr\u00e4gt und f\u00fcr andere ebenso brennt wie f\u00fcr sich selbst. Tierentsprechung: Schwarze Mamba.",
    land:"USA", tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-udo-lindenberg", name:"Udo Lindenberg", added:"2026-08-10", subtyp:"SX1w9",
    heading:"Udo Lindenberg \u2013 Sexueller Typ 1",
    teaser:"SX1w9 \u00b7 geb. 1946. Panik-Rocker, Maler, Dichter. \u201eSonderzug nach Pankow\u201d als offene Kampfansage an Honecker, Hut und Sonnenbrille als R\u00fcstung, Jahrzehnte im Hotel Atlantic \u2013 kompromisslose Haltung, die niemals verhandelbar war. Tierentsprechung: Schwarze Mamba.",
    land:"Deutschland", tags:["Musik"] , gender:"m"},
  { route:"beruehmte-johann-sebastian-bach", name:"Johann Sebastian Bach", added:"2026-08-13", subtyp:"SX1w9",
    heading:"Johann Sebastian Bach – Sexueller Typ 1",
    teaser:"SX1w9 · 1685–1750. Deutscher Komponist und Organist. Fußmarsch nach Lübeck zu Buxtehude, einmonatige Haft in Weimar wegen seiner Beharrlichkeit, ›Soli Deo Gloria‹ als Lebensmotto. Die Schwarze Mamba mit Neunerflügel: unerschütterliche Inbrunst im Dienst der Vollkommenheit. Tierentsprechung: Schwarze Mamba.",
    land:"Deutschland", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-leonardo-dicaprio", name:"Leonardo DiCaprio", subtyp:"SX1w2",
    heading:"Leonardo DiCaprio \u2013 Sexueller Typ 1",
    teaser:"SX1w2 \u00b7 geb. 1974. Schauspieler, Klimaaktivist. F\u00fcnfmal Oscar-nominiert, sechsmal angetreten \u2013 und im Moment des Triumphes sprach er \u00fcber den Klimawandel, nicht \u00fcber sich. Die Schwarze Mamba brennt nicht f\u00fcr Applaus. Tierentsprechung: Schwarze Mamba.",
    land:"USA", tags:["Schauspiel"] , gender:"m"},
  { route:"beruehmte-camille-fritsch", name:"Dr. Camille Fritsch", added:"2026-08-17", subtyp:"SE2w1",
    heading:"Dr. Camille Fritsch – Selbsterhaltender Typ 2",
    teaser:"SE2w1 · Wildbiologe, führender Flusspferdforscher, Mitglied der IUCN Hippo Specialist Group. Gründer von Imvubu Safaris – persönliche Feldführungen statt einsamer Fachautorität, vernetzte Forschung statt Alleingang. Tierentsprechung: Flusspferd.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-jj-liu", name:"J. J. Liu", added:"2026-08-15", subtyp:"SE2w1",
    heading:"J. J. Liu – Selbsterhaltender Typ 2",
    teaser:"SE2w1 · geb. 1965 in Taipeh, Taiwan. Profi-Pokerspielerin, über 4 Mio. US-Dollar Turniergewinne, Women in Poker Hall of Fame. Strategie als innere Ordnung, Ausdauer trotz körperlicher Schmerzen bis zum längsten TV-Finaltisch der WPT-Geschichte. Tierentsprechung: Flusspferd.",
    tags:["Sport"], gender:"f"},
  { route:"beruehmte-franka-potente", name:"Franka Potente", added:"2026-08-15", subtyp:"SE2w1",
    heading:"Franka Potente – Selbsterhaltender Typ 2",
    teaser:"SE2w1 · geb. 1974 in Dülmen. Schauspielerin, Regisseurin und Musikerin, ›Lola rennt‹, Bourne-Reihe. Fürsorge im vertrauten Kreis, kompromisslose künstlerische Integrität statt Hollywood-Logik. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Schauspiel","Musik"], gender:"f"},
  { route:"beruehmte-lena-urzendowsky", name:"Lena Urzendowsky", added:"2026-08-24", subtyp:"SE2w1",
    heading:"Lena Urzendowsky – Selbsterhaltender Typ 2",
    teaser:"SE2w1 · geb. 2000 in Berlin. Deutsche Schauspielerin, Das weiße Kaninchen, Kokon, How to Sell Drugs Online (Fast). Fürsorge im vertrauten Familienkreis, disziplinierte Ausbildung neben frühem Erfolg. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-margot-friedlaender", name:"Margot Friedländer", added:"2026-08-14", subtyp:"SE2w1",
    heading:"Margot Friedländer – Selbsterhaltender Typ 2",
    teaser:"SE2w1 · 1921–2025. Holocaust-Überlebende und Zeitzeugin, ›Seid Menschen‹. Fünfzehn Monate im Berliner Untergrund, sechzig Jahre Schweigen, dann bis zuletzt unermüdlich im Gespräch mit Schulklassen. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Geschichte"], gender:"f"},
  { route:"beruehmte-soeren-kierkegaard", name:"Søren Kierkegaard", added:"2026-08-14", subtyp:"SE2w1",
    heading:"Søren Kierkegaard – Selbsterhaltender Typ 2",
    teaser:"SE2w1 · 1813–1855. Dänischer Philosoph und Theologe, Begründer des Existenzialismus. Bruch mit Regine Olsen, Angriff auf die Staatskirche, Pseudonyme als indirekte Mitteilung. Das Flusspferd mit Einserflügel: kompromisslose Ehrlichkeit gegenüber sich selbst bis zum letzten Atemzug. Tierentsprechung: Flusspferd.",
    tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-greta-thunberg", name:"Greta Thunberg", subtyp:"SE2w1",
    heading:"Greta Thunberg \u2013 Selbsterhaltender Typ 2",
    teaser:"SE2w1 \u00b7 geb. 2003. Klimaaktivistin, Gr\u00fcnderin von Fridays for Future. Mit 15 Jahren allein vor dem schwedischen Reichstag \u2013 und einem selbstgebastelten Schild. Das Flusspferd weicht nicht. Tierentsprechung: Flusspferd.",
    land:"Schweden", tags:["Politik"] , gender:"f"},
  { route:"beruehmte-gloria-von-thurn-und-taxis", name:"Gloria von Thurn und Taxis", added:"2026-07-20", subtyp:"SE2w1",
    heading:"Gloria von Thurn und Taxis \u2013 Selbsterhaltender Typ 2",
    teaser:"SE2w1 \u00b7 geb. 1960. F\u00fcrstin, Unternehmerin, M\u00e4zenin. Vom Punkprinzess-Exzess der 1980er zur eisernen Matriarchin eines der gr\u00f6\u00dften Privatverm\u00f6gen Europas. Das Flusspferd kennt sein Territorium \u2013 und gibt es nicht auf. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Adel","Wirtschaft"] , gender:"f"},
  { route:"beruehmte-jack-black", name:"Jack Black", added:"2026-07-30", subtyp:"SE2w1",
    heading:"Jack Black \u2013 Selbsterhaltender Typ 2",
    teaser:"SE2w1 \u00b7 geb. 1969. Schauspieler & Musiker, School of Rock, Tenacious D. Vollk\u00f6rperliche, ungebremste Hingabe an die Freude, verpackt in Handwerk und Haltung. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Schauspiel","Musik"] , gender:"m"},
  { route:"beruehmte-uli-hoeness", name:"Uli Hoene\u00df", added:"2026-07-20", subtyp:"SE2w3",
    heading:"Uli Hoene\u00df \u2013 Selbsterhaltender Typ 2",
    teaser:"SE2w3 \u00b7 geb. 1952. Fu\u00dfballweltmeister 1974, Manager und Pr\u00e4sident des FC Bayern M\u00fcnchen. Vier Jahrzehnte Aufbauarbeit, Steueraff\u00e4re und R\u00fcckkehr. Das Flusspferd verteidigt sein Revier \u2013 und kommt nach dem Sturz st\u00e4rker zur\u00fcck als zuvor. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Sport","Wirtschaft"] , gender:"m"},
  { route:"beruehmte-ai-weiwei", name:"Ai Weiwei", added:"2026-08-14", subtyp:"SE2w3",
    heading:"Ai Weiwei – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1957. Chinesischer Künstler und Aktivist, Sunflower Seeds, Human Flow, 81 Tage Haft 2011. Das Flusspferd verteidigt sein Revier – öffentlich, unerschrocken, mit dem Blick auf möglichst viele Menschen. Tierentsprechung: Flusspferd.",
    land:"China", tags:["Kunst","Aktivismus"], gender:"m"},
  { route:"beruehmte-carlos-santana", name:"Carlos Santana", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Carlos Santana – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1947. Mexikanisch-US-amerikanischer Gitarrist, Woodstock 1969, Supernatural-Comeback 1999 (9 Grammys). Vom Vater direkt weitergegebenes Handwerk, verbunden mit dem stetigen Bedürfnis, neu entdeckt zu werden. Tierentsprechung: Flusspferd.",
    land:"Mexiko/USA", tags:["Musik"], gender:"m"},
  { route:"beruehmte-harald-gloeockler", name:"Harald Glööckler", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Harald Glööckler – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1965. Deutscher Modedesigner, Gründer von POMPÖÖS. Aus einer von Gewalt geprägten Kindheit eine eigene, glanzvolle Welt aus Gold und Kronen geschaffen – Sicherheit durch selbst erschaffene Fülle, sichtbar gemacht für alle. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Mode","TV"], gender:"m"},
  { route:"beruehmte-harnaam-kaur", name:"Harnaam Kaur", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Harnaam Kaur – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1990. Britische Sikh-Aktivistin und Model, PCOS-Botschafterin, erste bärtige Frau auf dem Laufsteg der London Fashion Week. Der eigene Körper als erste Fürsorge, verwandelt in eine international sichtbare Botschaft. Tierentsprechung: Flusspferd.",
    land:"Großbritannien", tags:["Aktivismus","Mode"], gender:"f"},
{ route:"beruehmte-tom-kaulitz", name:"Tom Kaulitz", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Tom Kaulitz – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1989. Deutscher Musiker und Produzent, Gitarrist von Tokio Hotel. Karriere von Kindheit an eng mit dem Zwillingsbruder Bill verwoben, bis heute gemeinsamer Erfolgspodcast. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Musik"], gender:"m"},
{ route:"beruehmte-storm-reid", name:"Storm Reid", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Storm Reid – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 2003. US-amerikanische Schauspielerin, A Wrinkle in Time, Euphoria, The Last of Us. Karriere als Familienprojekt – gründete mit ihrer Mutter eine eigene Produktionsfirma, studiert parallel zu Emmy-prämierten Rollen als Vollzeitstudentin. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Schauspiel"], gender:"f"},
{ route:"beruehmte-quentin-tarantino", name:"Quentin Tarantino", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Quentin Tarantino – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1963. US-amerikanischer Regisseur, Pulp Fiction, Reservoir Dogs. Vom Videothekar zum Weltkino-Ereignis, mit festem Kreis wiederkehrender Schauspieler und einem selbst betriebenen 35-mm-Kino in Los Angeles. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Film"], gender:"m"},
{ route:"beruehmte-nusrat-fateh-ali-khan", name:"Nusrat Fateh Ali Khan", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Nusrat Fateh Ali Khan – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · 1948–1997. Pakistanischer Qawwali-Sänger, brachte eine sechshundert Jahre alte Familientradition auf die Weltbühne. Erster Auftritt bei der Totenfeier des eigenen Vaters, später Kollaborationen mit Peter Gabriel, Michael Brook und Eddie Vedder. Tierentsprechung: Flusspferd.",
    land:"Pakistan", tags:["Musik"], gender:"m"},
{ route:"beruehmte-tutty-tran", name:"Tutty Tran", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Tutty Tran – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1988 in West-Berlin. Deutscher Stand-up-Comedian, Sohn vietnamesischer Boatpeople. Culture-Clash-Comedy, die die eigene Familie zum Zentrum macht statt sie zu verstecken – Programm ›Wok-Life-Balance‹. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Sonstiges"], gender:"m"},
{ route:"beruehmte-mr-t", name:"Mr. T", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Mr. T – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1952 in Chicago. Schauspieler, Wrestler, Das A-Team, Rocky III. Vom Leibwächter für Muhammad Ali und Michael Jackson zur Filmikone – Stärke im Dienst des Schutzes, bis hin zum Besuch krebskranker Kinder nach der eigenen Krebsdiagnose. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Schauspiel","Wrestling"], gender:"m"},
{ route:"beruehmte-mickey-rourke", name:"Mickey Rourke", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Mickey Rourke – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1952 in Schenectady. US-amerikanischer Schauspieler. Gab die Schauspielerei für eine Profiboxkarriere auf, kehrte mit ›The Wrestler‹ zurück. Dankte in seiner Golden-Globe-Rede allen seinen Hunden. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-monica-simpson", name:"Monica Simpson", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Monica Simpson – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. in Wingate, North Carolina. US-amerikanische Aktivistin, Geschäftsführerin von SisterSong. Über zwei Jahrzehnte Organisationsarbeit für reproduktive Gerechtigkeit, verwurzelt im amerikanischen Süden. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Sonstiges"], gender:"f"},
  { route:"beruehmte-nate-dogg", name:"Nate Dogg", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Nate Dogg – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · 1969–2011. US-amerikanischer Sänger, ›King of Hooks‹. Prägte mit seiner Stimme sechzehn Billboard-Hot-100-Hits als Gastsänger, während die eigenen Soloalben im Schatten blieben. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Musik"], gender:"m"},
  { route:"beruehmte-stromae", name:"Stromae (Paul Van Haver)", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Stromae – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1985 in Brüssel. Belgisch-ruandischer Musiker, ›Alors on danse‹, ›Papaoutai‹. Verlor seinen Vater 1994 im Völkermord in Ruanda und verarbeitete den Verlust in einem Welthit. Tierentsprechung: Flusspferd.",
    land:"Belgien/Ruanda", tags:["Musik"], gender:"m"},
  { route:"beruehmte-thomas-chaanhing", name:"Thomas Chaanhing", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Thomas Chaanhing – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1976 in Dänemark. Dänisch-chinesischer Schauspieler, Marco Polo, The Wheel of Time, Vampire Academy. Fließend in sechs Sprachen, tragende Rollen in mehreren internationalen Großproduktionen. Tierentsprechung: Flusspferd.",
    land:"Dänemark", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-tracie-d-hall", name:"Tracie D. Hall", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Tracie D. Hall – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · US-amerikanische Bibliothekarin. Erste afroamerikanische Geschäftsführerin der American Library Association (2020–2023), TIME100. Jahrzehntelange Basisarbeit in öffentlichen Bibliotheken quer durch die USA. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Sonstiges"], gender:"f"},
  { route:"beruehmte-ice-cube", name:"Ice Cube", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Ice Cube – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1969. US-amerikanischer Rapper, Schauspieler und Unternehmer, N.W.A., BIG3-Basketballliga. Fürsorge, die in der Familie bleibt – besetzte seinen eigenen Sohn mit der Rolle seines jüngeren Ichs in ›Straight Outta Compton‹. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Musik","Film","Unternehmen"], gender:"m"},
  { route:"beruehmte-jack-ma", name:"Jack Ma", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Jack Ma – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1964. Chinesischer Unternehmer, Gründer von Alibaba. Vom kostenlosen Fremdenführer über den Englischlehrer zum Milliardär – und nach dem Konflikt mit Peking zurück zur persönlichen Lehrerförderung. Tierentsprechung: Flusspferd.",
    land:"China", tags:["Wirtschaft","Unternehmen"], gender:"m"},
  { route:"beruehmte-jimi-blue-ochsenknecht", name:"Jimi Blue Ochsenknecht", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Jimi Blue Ochsenknecht – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1991. Deutscher Schauspieler und Musiker, Die Wilden Kerle, Sohn von Uwe Ochsenknecht. Identität, die von Anfang an im engsten Familienkreis verwurzelt ist – Ringen um Sichtbarkeit innerhalb der eigenen, ohnehin schon öffentlichen Familie. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Schauspiel","Musik"], gender:"m"},
  { route:"beruehmte-wilson-gonzalez-ochsenknecht", name:"Wilson Gonzalez Ochsenknecht", added:"2026-08-24", subtyp:"SE2w3",
    heading:"Wilson Gonzalez Ochsenknecht – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1990. Deutscher Schauspieler und Musiker, Die Wilden Kerle, Späti. Erster Filmauftritt mit zehn Jahren gemeinsam mit Vater und Bruder, seither Karriere zwischen Schauspiel, Musik und eigener Familie. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Schauspiel","Musik"], gender:"m"},
  { route:"beruehmte-yayoi-kusama", name:"Yayoi Kusama", added:"2026-08-14", subtyp:"SE2w3",
    heading:"Yayoi Kusama – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · 1929–2026, geboren in Matsumoto, Japan. Künstlerin, Infinity Mirror Rooms, Punktmuster als lebensrettende Selbstauslöschung. Ab 1977 freiwillig in einer psychiatrischen Klinik in Tokio lebend, bis zuletzt fast täglich im Atelier arbeitend. Tierentsprechung: Flusspferd.",
    land:"Japan", tags:["Kunst"], gender:"f"},
  { route:"beruehmte-frida-kahlo", name:"Frida Kahlo", added:"2026-08-15", subtyp:"SE2w3",
    heading:"Frida Kahlo – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · 1907–1954. Mexikanische Malerin, rund 200 Gemälde, 55 Selbstporträts. Der eigene Körper als erstes Terrain der Fürsorge, Schmerz, der zum unverwechselbaren Bild wird. Tierentsprechung: Flusspferd.",
    tags:["Kunst"], gender:"f"},
  { route:"beruehmte-natascha-kampusch", name:"Natascha Kampusch", added:"2026-08-16", subtyp:"SE2w1",
    heading:"Natascha Kampusch – Selbsterhaltende Typ 2",
    teaser:"SE2w1 · geb. 1988. Autorin und Aktivistin, 3096 Tage in Gefangenschaft, Buch '3096 Tage'. Überlebte durch Beziehungsregulation, hielt sich durch Selbstdisziplin. Das Flusspferd, das kontrolliert an die Oberfläche kommt. Tierentsprechung: Flusspferd.",
    tags:["Gesellschaft"], gender:"f"},
  { route:"beruehmte-marie-antoinette", name:"Marie Antoinette", added:"2026-08-15", subtyp:"SE2w3",
    heading:"Marie Antoinette – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · 1755–1793. Königin von Frankreich. Pouf-Frisuren, Hameau de la Reine, Halsbandaffäre. Das Flusspferd, dessen glänzende Oberfläche schützte und am Ende zur Bürde wurde. Tierentsprechung: Flusspferd.",
    land:"Frankreich", tags:["Geschichte"], gender:"f"},
  { route:"beruehmte-isabella-briggs", name:"Isabella Briggs", added:"2026-08-15", subtyp:"SE2w3",
    heading:"Isabella Briggs – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 2000 in Los Angeles. Schauspielerin und Produzentin, bekannt aus ›Der Sommer, als ich schön wurde‹. Das Handwerk als Existenzgrundlage, vom Ensemble zum eigenen Unternehmen (Dartboard Productions). Tierentsprechung: Flusspferd.",
    tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-wolfgang-amadeus-mozart", name:"Wolfgang Amadeus Mozart", added:"2026-08-13", subtyp:"SE2w3",
    heading:"Wolfgang Amadeus Mozart – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · 1756–1791. Österreichischer Komponist. Wunderkind auf Europatournee, Bruch mit dem Salzburger Fürsterzbischof, über 600 Werke in 35 Lebensjahren. Das Flusspferd mit Dreierflügel: Fürsorge, derber Humor und unermüdlicher Ehrgeiz auf der Bühne. Tierentsprechung: Flusspferd.",
    land:"Österreich", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-nero", name:"Nero", added:"2026-08-25", subtyp:"SE2w3",
    heading:"Nero – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · 37–68 n. Chr. Römischer Kaiser. Mit 16 Jahren inthronisiert, Muttermord 59 n. Chr., öffentliche Auftritte als Sänger und Wagenlenker, Griechenland-Tournee 66–67 n. Chr. Das Flusspferd mit Dreierflügel: Bedeutung durch Nähe zur Macht, Applaus als Existenzbeweis. Tierentsprechung: Flusspferd.",
    land:"Römisches Reich", tags:["Geschichte","Politik"], gender:"m"},
  { route:"beruehmte-jan-ullrich", name:"Jan Ullrich", subtyp:"SE2w3",
    heading:"Jan Ullrich \u2013 Selbsterhaltender Typ 2",
    teaser:"SE2w3 \u00b7 geb. 1973. Radrennfahrer, Tour-de-France-Sieger 1997, Olympiasieger 2000. F\u00fcnfmal Zweiter hinter Armstrong \u2013 nie aufgegeben. Das Flusspferd braucht sein Wasser. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Sport"] , gender:"m"},
  { route:"beruehmte-oprah-winfrey", name:"Oprah Winfrey", added:"2026-07-30", subtyp:"SE2w3",
    heading:"Oprah Winfrey \u2013 Selbsterhaltender Typ 2",
    teaser:"SE2w3 \u00b7 geb. 1954. Moderatorin, Unternehmerin, Philanthropin. Vom Trauma zum Medienimperium \u2013 F\u00fcrsorge im gro\u00dfen Ma\u00dfstab, unternehmerischer Wille ohne Kompromiss. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Medien","Wirtschaft"] , gender:"f"},
  { route:"beruehmte-armin-rohde", name:"Armin Rohde", added:"2026-08-15", subtyp:"SE2w3",
    heading:"Armin Rohde – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1955 in Herne. Schauspieler, ›Manta, Manta‹, ›Der Bulle von Tölz‹. Bodenständigkeit als Fürsorgeprinzip, vom Ruhrpott auf die große Leinwand, ohne die eigenen Wurzeln zu verraten. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-lebo-m", name:"Lebo M", added:"2026-08-25", subtyp:"SE2w3",
    heading:"Lebo M – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1964 in Soweto. Südafrikanischer Sänger und Komponist, prägte 1994 mit seinem Zulu-Ruf den Anfang von ›Der König der Löwen‹. Über drei Jahrzehnte treu bei einem Franchise, vom Exil ins Zentrum eines Welterfolgs. Tierentsprechung: Flusspferd.",
    land:"Südafrika", tags:["Musik"], gender:"m"},
  { route:"beruehmte-lionel-boyce", name:"Lionel Boyce", added:"2026-08-25", subtyp:"SE2w3",
    heading:"Lionel Boyce – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1991 in Inglewood, Kalifornien. Schauspieler, Marcus in ›The Bear‹ (Emmy-nominiert), ehemals ›L-Boy‹ bei Odd Future. Jahrzehntelange kreative Partnerschaft mit Tyler, the Creator statt schnellem Solo-Sprung. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-lisa-antoni", name:"Lisa Antoni", added:"2026-08-25", subtyp:"SE2w3",
    heading:"Lisa Antoni – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · Wien. Österreichische Musical-Darstellerin, Christine Daaé in ›Das Phantom der Oper‹ am Ronacher. Breites Repertoire in Österreich, Deutschland und der Schweiz, Schritt für Schritt zu den großen Rollen. Tierentsprechung: Flusspferd.",
    land:"Österreich", tags:["Schauspiel","Musik"], gender:"f"},
  { route:"beruehmte-loi", name:"Loi (Leonie Greiner)", added:"2026-08-25", subtyp:"SE2w3",
    heading:"Loi – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 2002 in Mannheim. Deutsche Sängerin und Songwriterin, Finale bei ›The Voice Kids‹ 2017, internationaler Charterfolg mit ›Gold‹ 2022. Geduldiger Aufbau vor dem sichtbaren Erfolg. Tierentsprechung: Flusspferd.",
    land:"Deutschland", tags:["Musik"], gender:"f"},
  { route:"beruehmte-loni-hui", name:"Loni Hui", added:"2026-08-25", subtyp:"SE2w3",
    heading:"Loni Hui – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. um 1989. US-amerikanische Profi-Pokerspielerin, zweifache WSOP-Bracelet-Gewinnerin (2013, 2015), über 3,4 Mio. Dollar Turniergewinne. Finanzstudium vor dem Pokertisch, Basis vor Risiko. Tierentsprechung: Flusspferd.",
    land:"USA", tags:["Sport"], gender:"f"},
  { route:"beruehmte-madeline-stuart", name:"Madeline Stuart", added:"2026-08-25", subtyp:"SE2w3",
    heading:"Madeline Stuart – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1996 in Brisbane. Australisches Model, 2015 erstes professionelles Model mit Down-Syndrom bei der New York Fashion Week. Internationale Laufstege im Dienst von Inklusion, eigenes Modelabel seit 2017. Tierentsprechung: Flusspferd.",
    land:"Australien", tags:["Sonstiges"], gender:"f"},
  { route:"beruehmte-mariacarla-boscono", name:"Mariacarla Boscono", added:"2026-08-25", subtyp:"SE2w3",
    heading:"Mariacarla Boscono – Selbsterhaltender Typ 2",
    teaser:"SE2w3 · geb. 1980 in Rom. Italienisches Model, Weltrekord mit über 70 Laufstegen in zwei Wochen (2005), über zehn Jahre feste Muse von Riccardo Tisci bei Givenchy und Burberry. Tierentsprechung: Flusspferd.",
    land:"Italien", tags:["Sonstiges"], gender:"f"},
  { route:"beruehmte-douglas-rushkoff", name:"Douglas Rushkoff", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Douglas Rushkoff – Sozialer Typ 2",
    teaser:"SO2w1 · geb. 1961. US-amerikanischer Medientheoretiker, prägte Begriffe wie ›Digital Native‹ und ›viral gehen‹. Lehnte den Auftrag von fünf Milliardären ab, ihnen Überlebensstrategien zu liefern – schrieb stattdessen ›Survival of the Richest‹. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Medien","Wissenschaft"], gender:"m"},
  { route:"beruehmte-micky-beisenherz", name:"Micky Beisenherz", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Micky Beisenherz – Sozialer Typ 2",
    teaser:"SO2w1 · geb. 1977. Deutscher Moderator und Podcaster, ›Apokalypse & Filterkaffee‹. Tägliche Einordnung des Weltgeschehens mit erkennbarer eigener Haltung, statt distanzierter Nachrichtenlektüre. Tierentsprechung: Golden Retriever.",
    land:"Deutschland", tags:["Medien"], gender:"m"},
  { route:"beruehmte-katharina-tempel", name:"Dr. Katharina Tempel", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Dr. Katharina Tempel – Sozialer Typ 2",
    teaser:"SO2w1 · geb. 1984. Diplom-Psychologin, Gründerin von ›Glücksdetektiv‹. Wissenschaftlich fundierte Wege zu mehr Wohlbefinden für ein Millionenpublikum, verankert in einer Dissertation mit über 1.500 Studienteilnehmenden. Tierentsprechung: Golden Retriever.",
    land:"Deutschland", tags:["Wissenschaft","Medien"], gender:"f"},
  { route:"beruehmte-muhammad-ali", name:"Muhammad Ali", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Muhammad Ali – Sozialer Typ 2",
    teaser:"SO2w1 · 1942–2016. US-amerikanischer Boxweltmeister und Bürgerrechtler. Verweigerte 1967 als amtierender Weltmeister den Militärdienst und verlor dadurch Titel, Pass und Boxlizenz – Prinzip vor Vorteil, mitten in seinen stärksten Jahren. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Sport","Politik"], gender:"m"},
  { route:"beruehmte-ranga-yogeshwar", name:"Ranga Yogeshwar", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Ranga Yogeshwar – Sozialer Typ 2",
    teaser:"SO2w1 · geb. 1959. Deutscher Wissenschaftsjournalist und Physiker, ›Quarks & Co‹. Über Jahrzehnte Wissenschaft für ein Millionenpublikum vermittelt, heute Honorarprofessor für Ethik und Wissenschaftskommunikation. Tierentsprechung: Golden Retriever.",
    land:"Deutschland", tags:["Wissenschaft","Medien"], gender:"m"},
  { route:"beruehmte-anastasia-barner", name:"Anastasia Barner", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Anastasia Barner – Sozialer Typ 2",
    teaser:"SO2w1 · Deutsche Unternehmerin und Journalistin, Gründerin von FeMentor. Europas erste Reverse-Mentoring-Plattform, gegründet mit 20 Jahren. Begann bereits mit vierzehn als Journalistin. Tierentsprechung: Golden Retriever.",
    land:"Deutschland", tags:["Medien","Unternehmen"], gender:"f"},
  { route:"beruehmte-david-lurey", name:"David Lurey", added:"2026-08-24", subtyp:"SO2w1",
    heading:"David Lurey – Sozialer Typ 2",
    teaser:"SO2w1 · US-amerikanischer Yogalehrer, Musiker und Eventproduzent. Über 30 Jahre Yoga-Praxis, kuratiert internationale Festivals und fast 300 Online-Kurse. Arbeitet mit dem König-Archetyp nach C. G. Jung. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Sonstiges","Musik"], gender:"m"},
  { route:"beruehmte-joe-navarro", name:"Joe Navarro", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Joe Navarro – Sozialer Typ 2",
    teaser:"SO2w1 · geb. 1953 in Cienfuegos, Kuba. Kubanisch-US-amerikanischer Autor und ehem. FBI-Agent. Entwickelte Körpersprache-Expertise als sprachloser Flüchtlingsjunge, Bestseller ›What Every Body Is Saying‹ in 27 Sprachen. Tierentsprechung: Golden Retriever.",
    land:"Kuba/USA", tags:["Wissenschaft","Sonstiges"], gender:"m"},
  { route:"beruehmte-jonathan-groff", name:"Jonathan Groff", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Jonathan Groff – Sozialer Typ 2",
    teaser:"SO2w1 · geb. 1985 in Lancaster, Pennsylvania. US-amerikanischer Schauspieler und Sänger, Hamilton, Frozen, Mindhunter. Öffentliches Coming-out 2009, Tony Award 2024. Persönliche Wahrheit als Fürsorge für eine ganze Gemeinschaft. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Schauspiel","Musik"], gender:"m"},
  { route:"beruehmte-bob-marley", name:"Bob Marley", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Bob Marley – Sozialer Typ 2",
    teaser:"SO2w1 · 1945–1981. Jamaikanischer Reggae-Musiker. Vereinte 1978 beim One Love Peace Concert zwei verfeindete politische Rivalen auf offener Bühne – Fürsorge für ein ganzes, von Bandenkrieg zerrissenes Volk. Tierentsprechung: Golden Retriever.",
    land:"Jamaika", tags:["Musik"], gender:"m"},
  { route:"beruehmte-abd-al-fattah-as-sisi", name:"Abd al-Fattah as-Sisi", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Abd al-Fattah as-Sisi – Sozialer Typ 2",
    teaser:"SO2w1 · geb. 1954 in Kairo. Ägyptischer Feldmarschall und Staatspräsident. Fürsorge als Führungsanspruch für eine ganze Nation – vom Militärputsch 2013 bis zur religiösen Einheitsrhetorik. Tierentsprechung: Golden Retriever.",
    land:"Ägypten", tags:["Politik"], gender:"m"},
  { route:"beruehmte-jesus-christus", name:"Jesus Christus", added:"2026-07-31", subtyp:"SO2w1",
    heading:"Jesus Christus \u2013 Sozialer Typ 2",
    teaser:"SO2w1 \u00b7 ca. 4 v. Chr.\u201330/33 n. Chr. Wanderprediger, Religionsstifter. Bedingungslose Liebe als Gebot f\u00fcr alle, unerbittlicher Anspruch an das eigene Selbstopfer \u2013 der Golden Retriever, dessen Hingabe zum Fundament einer Weltreligion wurde. Tierentsprechung: Golden Retriever.",
    tags:["Religion","Geschichte"] , gender:"m"},
  { route:"beruehmte-mutter-meera", name:"Mutter Meera", added:"2026-08-15", subtyp:"SO2w1",
    heading:"Mutter Meera – Sozialer Typ 2",
    teaser:"SO2w1 · 1960–2023. Spirituelle Lehrerin aus Indien, jahrzehntelang wortlose Darshan-Audienzen in Thalheim, Deutschland. Fürsorge als universaler Auftrag, stille Disziplin statt lautes Predigen. Tierentsprechung: Golden Retriever.",
    land:"Indien", tags:["Religion"], gender:"f"},
  { route:"beruehmte-sucharit-bhakdi", name:"Prof. Dr. Sucharit Bhakdi", added:"2026-07-20", subtyp:"SO2w1",
    heading:"Prof. Dr. Sucharit Bhakdi \u2013 Sozialer Typ 2",
    teaser:"SO2w1 \u00b7 geb. 1946. Mikrobiologe, Hochschullehrer, Wissenschaftler und unerm\u00fcdlicher Mahner. Der Golden Retriever, der Alarm schl\u00e4gt \u2013 weil er die Gesellschaft liebt. Tierentsprechung: Golden Retriever.",
    land:"Irland", tags:["Wissenschaft","Medizin"] , gender:"m"},
  { route:"beruehmte-barack-obama", name:"Barack Obama", subtyp:"SO2w1",
    heading:"Barack Obama \u2013 Sozialer Typ 2",
    teaser:"SO2w1 \u00b7 geb. 1961. 44. US-Pr\u00e4sident, Community Organizer, Friedensnobelpreistr\u00e4ger. Yes We Can \u2013 keine Botschaft \u00fcber Obama, sondern \u00fcber das, was wir gemeinsam m\u00f6glich machen. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Politik"] , gender:"m"},
  { route:"beruehmte-albert-schweitzer", name:"Dr. Albert Schweitzer", added:"2026-08-13", subtyp:"SO2w1",
    heading:"Dr. Albert Schweitzer – Sozialer Typ 2",
    teaser:"SO2w1 · 1875–1965. Theologe, Philosoph, Organist und Urwaldarzt. Gründete 1913 das Krankenhaus von Lambaréné, Friedensnobelpreis 1952, Prinzip der ›Ehrfurcht vor dem Leben‹. Der Golden Retriever mit Einserflügel: außergewöhnliches Talent vollständig in den Dienst der Menschheit gestellt. Tierentsprechung: Golden Retriever.",
    tags:["Geschichte","Medizin"], gender:"m"},
  { route:"beruehmte-winifred-charlesworth", name:"Mrs. Winifred Charlesworth", added:"2026-08-17", subtyp:"SO2w1",
    heading:"Mrs. Winifred Charlesworth \u2013 Sozialer Typ 2",
    teaser:"SO2w1 \u00b7 Britische Z\u00fcchterin, Gr\u00fcndungsfigur der Rasse Golden Retriever. Erwarb 1906 ihre erste Golden-H\u00fcndin, gr\u00fcndete 1911 den Golden Retriever Club mit, verfasste den ersten offiziellen Rassestandard. Tierentsprechung: Golden Retriever.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-marisa-abela", name:"Marisa Abela", added:"2026-07-30", subtyp:"SO2w1",
    heading:"Marisa Abela \u2013 Sozialer Typ 2",
    teaser:"SO2w1 \u00b7 geb. 1996. Schauspielerin, Industry, Back to Black. Ensemblegef\u00fchl und Vorbereitungsdisziplin \u2013 der Golden Retriever, der Verbindung durch Sorgfalt verdient. Tierentsprechung: Golden Retriever.",
    land:"Großbritannien", tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-hannah-emde", name:"Hannah Emde", added:"2026-08-24", subtyp:"SO2w1",
    heading:"Hannah Emde – Sozialer Typ 2",
    teaser:"SO2w1 · geb. 1992. Tierärztin, Artenschützerin, Moderatorin von Terra X: Faszination Erde. Gründete mit 25 den Verein Nepada Wildlife e.V. – Fürsorge, die über den Behandlungstisch hinaus ein Millionenpublikum erreichen will. Tierentsprechung: Golden Retriever.",
    land:"Deutschland", tags:["Wissenschaft","TV"], gender:"f"},
  { route:"beruehmte-eva-peron", name:"Eva Per\u00f3n", added:"2026-08-31", subtyp:"SO2w3",
    heading:"Eva Per\u00f3n \u2013 Sozialer Typ 2",
    teaser:"SO2w3 \u00b7 1919\u20131952. Argentinische First Lady, Schauspielerin, Wohlt\u00e4terin der \u201edescamisados\u201c. Aufstieg aus Armut zur \u201eEvita\u201c \u2013 der Golden Retriever mit Dreierfl\u00fcgel, der Hingabe und Inszenierung zu einem Mythos verschmolz, der ihren fr\u00fchen Tod \u00fcberdauerte. Tierentsprechung: Golden Retriever.",
    land:"Argentinien", tags:["Geschichte","Politik"] , gender:"w"},
  { route:"beruehmte-truman-capote", name:"Truman Capote", added:"2026-08-31", subtyp:"SO2w3",
    heading:"Truman Capote – Sozialer Typ 2",
    teaser:"SO2w3 · 1924–1984. US-amerikanischer Schriftsteller, „In Cold Blood“ (dt. „Kaltblütig“), gefeierter Society-Liebling New Yorks. Der Golden Retriever, der sich in die intimsten Kreise einschmeichelte – bis der Verrat ihrer Geheimnisse für ein Buchprojekt seine gesamte Welt zum Einsturz brachte. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Kultur","Literatur"] , gender:"m"},
  { route:"beruehmte-julius-caesar", name:"Julius Caesar", added:"2026-08-08", subtyp:"SO2w3",
    heading:"Julius Caesar \u2013 Sozialer Typ 2",
    teaser:"SO2w3 \u00b7 100\u201344 v. Chr. R\u00f6mischer Feldherr, Staatsmann, Diktator auf Lebenszeit. Freigebigkeit als Machtinstrument, Gnade gegen\u00fcber Feinden, Selbstinszenierung im Feldzugsbericht \u2013 der Golden Retriever, der ein Weltreich einte und von einem Begnadigten ermordet wurde. Tierentsprechung: Golden Retriever.",
    tags:["Geschichte","Politik"] , gender:"m"},
  { route:"beruehmte-napoleon-bonaparte", name:"Napoleon Bonaparte", added:"2026-08-12", subtyp:"SO2w3",
    heading:"Napoleon Bonaparte \u2013 Sozialer Typ 2",
    teaser:"SO2w3 \u00b7 1769\u20131821. Franz\u00f6sischer Feldherr und Kaiser, Code Napol\u00e9on. Von Naranjo als soziale Zwei typisiert \u2013 Ehrgeiz und Stolz statt reiner Macht, der Golden Retriever, der einen Kontinent umarmen wollte und an St. Helena die Verbannung aus der Beziehung erlebte. Tierentsprechung: Golden Retriever.",
    land:"Frankreich", tags:["Geschichte","Politik"] , gender:"m"},
  { route:"beruehmte-alexander-der-grosse", name:"Alexander der Gro\u00dfe", added:"2026-08-12", subtyp:"SO2w3",
    heading:"Alexander der Gro\u00dfe \u2013 Sozialer Typ 2",
    teaser:"SO2w3 \u00b7 356\u2013323 v. Chr. Makedonischer K\u00f6nig, Eroberer eines Weltreichs von Griechenland bis Indien. Der Golden Retriever, der seine Soldaten wie Br\u00fcder liebte, mit ihnen jede Entbehrung teilte und an der eigenen Unbesiegbarkeit zerbrach. Tierentsprechung: Golden Retriever.",
    land:"Griechenland", tags:["Geschichte","Politik"] , gender:"m"},
  { route:"beruehmte-will-smith", name:"Will Smith", added:"2026-07-20", subtyp:"SO2w3",
    heading:"Will Smith \u2013 Sozialer Typ 2",
    teaser:"SO2w3 \u00b7 geb. 1968. Schauspieler, Rapper, Oscar-Preistr\u00e4ger. Fresh Prince, Ali, Men in Black. Der Golden Retriever, der die Welt umarmen will \u2013 und manchmal bei\u00dft, weil er sch\u00fctzt. Ehrgeiz als Form der Liebe. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Schauspiel","Musik"] , gender:"m"},
  { route:"beruehmte-nina-chuba", name:"Nina Chuba", subtyp:"SO2w3",
    heading:"Nina Chuba \u2013 Soziale Typ 2",
    teaser:"SO2w3 \u00b7 geb. 2000. S\u00e4ngerin, Songwriterin. Mit Wildberry Lillet ein Gef\u00fchl getroffen, das Millionen kennen. N\u00e4he statt Inszenierung \u2013 Musik als Raum, in dem niemand allein ist. Tierentsprechung: Golden Retriever.",
    land:"Deutschland", tags:["Musik"] , gender:"f"},
  { route:"beruehmte-zoe-saldana", name:"Zoe Saldaña", added:"2026-08-15", subtyp:"SO2w3",
    heading:"Zoe Saldaña – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 1978 in Passaic, New Jersey. Schauspielerin und Produzentin, Avatar, Marvel, Star Trek. Zugehörigkeit als Lebensprinzip, Präsenz, die tragen muss – zentrale Figur in drei Milliarden-Franchises zugleich. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-kamala-harris", name:"Kamala Harris", added:"2026-07-30", subtyp:"SO2w3",
    heading:"Kamala Harris \u2013 Sozialer Typ 2",
    teaser:"SO2w3 \u00b7 geb. 1964. Politikerin, ehem. Vizepr\u00e4sidentin der USA. Staatsanw\u00e4ltin, Senatorin, Vizepr\u00e4sidentin \u2013 Dienst als politische Berufung, mehrere historische Premieren. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Politik"] , gender:"f"},
  { route:"beruehmte-dr-dre", name:"Dr. Dre", added:"2026-08-27", subtyp:"SO2w3",
    heading:"Dr. Dre – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 1965 in Compton. US-amerikanischer Musikproduzent, Rapper & Unternehmer. Mitgründer von N.W.A. und Death Row Records, Architekt der Karrieren von Snoop Dogg, Eminem, 50 Cent und Kendrick Lamar, Mitgründer von Beats Electronics. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Musik"], gender:"m"},
  { route:"beruehmte-usher", name:"Usher", added:"2026-08-24", subtyp:"SO2w3",
    heading:"Usher – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 1978 in Dallas. US-amerikanischer R&B-Sänger. Album ›Confessions‹ (2004), meistverkauftes Album des Jahrzehnts, Mentor für Justin Bieber. Verletzlichkeit als Brücke zu einem Massenpublikum. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Musik"], gender:"m"},
  { route:"beruehmte-indila", name:"Indila", added:"2026-08-29", subtyp:"SO2w3",
    heading:"Indila – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 1984. Französische Sängerin, ›Dernière Danse‹ – das erste französischsprachige Lied mit über einer Milliarde YouTube-Aufrufen. Sang jahrelang für andere Künstler, bevor sie selbst durchstartete, zog sich nach dem Welterfolg konsequent aus der Öffentlichkeit zurück. Tierentsprechung: Golden Retriever.",
    land:"Frankreich", tags:["Musik"], gender:"f"},
  { route:"beruehmte-alicia-keys", name:"Alicia Keys", added:"2026-08-24", subtyp:"SO2w3",
    heading:"Alicia Keys – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 1981 in New York. US-amerikanische Sängerin und Pianistin. Drei Nummer-eins-Alben, Mitgründerin von Keep a Child Alive für von HIV betroffene Familien. Musikalischer Erfolg als Plattform für gesellschaftliches Engagement. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Musik"], gender:"f"},
  { route:"beruehmte-ashton-kutcher", name:"Ashton Kutcher", added:"2026-08-24", subtyp:"SO2w3",
    heading:"Ashton Kutcher – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 1978 in Cedar Rapids, Iowa. US-amerikanischer Schauspieler und Unternehmer. Mitgründer von Thorn gegen Kinderhandel, ›digitaler Verteidiger von Kindern‹. Reichweite gezielt im Dienst einer Sache eingesetzt. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Schauspiel","Unternehmen"], gender:"m"},
  { route:"beruehmte-jenna-ortega", name:"Jenna Ortega", added:"2026-08-29", subtyp:"SO2w3",
    heading:"Jenna Ortega – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 2002. US-amerikanische Schauspielerin, ›Wednesday‹, engagiert für Latina-Repräsentation, mentale Gesundheit und LGBTQ+-Rechte. Machte 2025 ihre eigene OCD-Erkrankung öffentlich. Golden-Globe-, Emmy- und SAG-nominiert. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-ayo-edebiri", name:"Ayo Edebiri", added:"2026-08-24", subtyp:"SO2w3",
    heading:"Ayo Edebiri – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 1995 in Boston. US-amerikanische Schauspielerin, Autorin und Komikerin, ›The Bear‹. Jahrelange Autorenarbeit im Hintergrund, dann Emmy, Golden Globe und SAG Award. Erfolg als gemeinsames Projekt, nicht als Alleingang. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-bruno-mars", name:"Bruno Mars", added:"2026-08-24", subtyp:"SO2w3",
    heading:"Bruno Mars – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 1985 in Honolulu. US-amerikanischer Sänger und Produzent. Schrieb zunächst Hits für andere (Nothin' on You, Billionaire), bevor der eigene Ruhm kam. Silk Sonic als geteilte Bühne mit Anderson .Paak. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Musik"], gender:"m"},
  { route:"beruehmte-carl-weathers", name:"Carl Weathers", added:"2026-08-24", subtyp:"SO2w3",
    heading:"Carl Weathers – Sozialer Typ 2",
    teaser:"SO2w3 · 1948–2024. US-amerikanischer Schauspieler und Regisseur. Apollo Creed in Rocky, Dillon in Predator, Greef Karga in The Mandalorian. Nie die Hauptfigur, aber unverzichtbar für jede Geschichte, die er trug. Tierentsprechung: Golden Retriever.",
    land:"USA", tags:["Schauspiel","Sport"], gender:"m"},
  { route:"beruehmte-omar-sy", name:"Omar Sy", added:"2026-08-24", subtyp:"SO2w3",
    heading:"Omar Sy – Sozialer Typ 2",
    teaser:"SO2w3 · geb. 1978 in Trappes. Französischer Schauspieler, ›Ziemlich beste Freunde‹, ›Lupin‹. Ältestes von zehn Geschwistern, Karrierestart als Duo mit Fred Testot. Erfolg, der immer wieder im Miteinander entsteht. Tierentsprechung: Golden Retriever.",
    land:"Frankreich", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-monika-gruber", name:"Monika Gruber", added:"2026-07-20", subtyp:"SX2w1",
    heading:"Monika Gruber \u2013 Sexueller Typ 2",
    teaser:"SX2w1 \u00b7 geb. 1970. Kabarettistin, Schauspielerin. Bayerns sch\u00e4rfste Verf\u00fchrerin zur Wahrheit \u2013 Humor als Heimat, Haltung als zweite Natur. Das Kamel, das tausend Menschen gleichzeitig anschaut. Tierentsprechung: Kamel.",
    tags:["Kabarett","Schauspiel"] , gender:"f"},
  { route:"beruehmte-bernard-faye", name:"Dr. Bernard Faye", added:"2026-08-17", subtyp:"SX2w1",
    heading:"Dr. Bernard Faye \u2013 Sexueller Typ 2",
    teaser:"SX2w1 \u00b7 Franz\u00f6sischer Veterin\u00e4rmediziner, weltweit f\u00fchrender Kamelexperte, Mitbegr\u00fcnder der ISOCARD. \u00dcber 400 wissenschaftliche Publikationen, jahrzehntelange Forschung in \u00c4thiopien, Niger und Saudi-Arabien. Tierentsprechung: Kamel.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-matthias-schweighoefer", name:"Matthias Schweigh\u00f6fer", subtyp:"SX2w1",
    heading:"Matthias Schweigh\u00f6fer \u2013 Sexueller Typ 2",
    teaser:"SX2w1 \u00b7 geb. 1981. Schauspieler, Regisseur, Produzent. N\u00e4he statt Distanz \u2013 ob als Darsteller oder als Regisseur tr\u00e4gt er sein Ensemble wie das Kamel seinen Weg. Tierentsprechung: Kamel.",
    land:"Deutschland", tags:["Schauspiel"] , gender:"m"},
  { route:"beruehmte-clueso", name:"Clueso", added:"2026-08-29", subtyp:"SX2w1",
    heading:"Clueso – Sexueller Typ 2",
    teaser:"SX2w1 · geb. 1980. Deutscher Sänger, Songwriter und Maler aus Erfurt, bekannt für ehrliche, tief persönliche Liebeslieder. Baute sein erstes Studio in der eigenen Speisekammer, brach 2016 radikal mit Band und Kollektiv, um seine künstlerische Freiheit zurückzugewinnen. Tierentsprechung: Kamel.",
    land:"Deutschland", tags:["Musik"], gender:"m"},
  { route:"beruehmte-milow", name:"Milow", added:"2026-07-30", subtyp:"SX2w1",
    heading:"Milow \u2013 Sexueller Typ 2",
    teaser:"SX2w1 \u00b7 geb. 1982. S\u00e4nger, Songwriter. Ayo Technology, Little in the Middle. Leise, ehrliche N\u00e4he statt lauter Inszenierung \u2013 das Kamel, das seine Last mit Sorgfalt tr\u00e4gt. Tierentsprechung: Kamel.",
    tags:["Musik"] , gender:"m"},
  { route:"beruehmte-pamela-reif", name:"Pamela Reif", added:"2026-07-20", subtyp:"SX2w3",
    heading:"Pamela Reif \u2013 Sexueller Typ 2",
    teaser:"SX2w3 \u00b7 geb. 1996. Fitness-Influencerin, Unternehmerin. Millionen Verbindungen durch einen Bildschirm \u2013 Verf\u00fchrung als Verbindungskunst, Perfektion als Liebesbeweis. Tierentsprechung: Kamel.",
    land:"Deutschland", tags:["Sport","Lifestyle"] , gender:"f"},
  { route:"beruehmte-anastasiia-metelkina", name:"Anastasiia Metelkina", added:"2026-08-15", subtyp:"SX2w3",
    heading:"Anastasiia Metelkina – Sexueller Typ 2",
    teaser:"SX2w3 · geb. 2005. Eiskunstläuferin (Paarlauf). Olympia-Silber 2026 für Georgien – erste georgische Medaille der Geschichte. Trägt ihren Partner durch jede Hebung. Tierentsprechung: Kamel.",
    tags:["Sport"] , gender:"f"},
  { route:"beruehmte-braco", name:"Braco", subtyp:"SX2w3",
    heading:"Braco \u2013 Sexueller Typ 2",
    teaser:"SX2w3 \u00b7 geb. 1967. Heiler, The Gazer. Er spricht nicht, er ber\u00fchrt nicht \u2013 er schaut. In schweigsamen Gruppenveranstaltungen weltweit erzeugt sein Blick, was viele Worte nicht k\u00f6nnen: das Gef\u00fchl, gesehen zu werden. Tierentsprechung: Kamel.",
    tags:["Sonstiges"] , gender:"m"},
  { route:"beruehmte-elvis-presley", name:"Elvis Presley", added:"2026-07-30", subtyp:"SX2w3",
    heading:"Elvis Presley \u2013 Sexueller Typ 2",
    teaser:"SX2w3 \u00b7 1935\u20131977. King of Rock'n'Roll, S\u00e4nger, Schauspieler. H\u00fcftschwung als Skandal, Balladen als Liebesbeweis, grenzenlose Gro\u00dfz\u00fcgigkeit gegen\u00fcber Fans und Fremden. Tierentsprechung: Kamel.",
    land:"USA", tags:["Musik"] , gender:"m"},
  { route:"beruehmte-wolodymyr-selenskyj", name:"Wolodymyr Selenskyj", added:"2026-07-20", subtyp:"SE3w2",
    heading:"Wolodymyr Selenskyj \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w2 \u00b7 geb. 1978. Komiker, Schauspieler, Staatspr\u00e4sident. Kontratyp der Drei: meisterhaft im Verbergen der eigenen Inszenierung. Der Waschb\u00e4r, der den Helden spielt \u2013 und den Unterschied vergessen hat. Tierentsprechung: Waschb\u00e4r.",
    land:"Ukraine", tags:["Politik"] , gender:"m"},
  { route:"beruehmte-sadhguru", name:"Sadhguru", subtyp:"SE3w2",
    heading:"Sadhguru \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w2 \u00b7 geb. 1957. Yogi, Guru, Bestsellerautor. Gr\u00fcnder der Isha Foundation. Neun Millionen Freiwillige, 'Inner Engineering', Save Soil \u2013 der Waschb\u00e4r, der die W\u00fcste bepflanzt.",
    tags:["Sonstiges"] , gender:"m"},
  { route:"beruehmte-joseph-haydn", name:"Joseph Haydn", added:"2026-08-13", subtyp:"SE3w2",
    heading:"Joseph Haydn \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w2 \u00b7 1732\u20131809. \u00d6sterreichischer Komponist. Drei Jahrzehnte im Dienst der Esterh\u00e1zys, \u203aPapa Haydn\u2039, 104 Symphonien, Mentor von Mozart und Beethoven. Der Waschb\u00e4r mit Zweierfl\u00fcgel: stille Leistung, F\u00fcrsorge und sp\u00e4te Anerkennung durch die Londoner Reisen. Tierentsprechung: Waschb\u00e4r.",
    land:"Deutschland", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-serdar-somuncu", name:"Serdar Somuncu", added:"2026-08-29", subtyp:"SE3w2",
    heading:"Serdar Somuncu – Selbsterhaltender Typ 3",
    teaser:"SE3w2 · geb. 1968. Deutsch-türkischer Kabarettist, Regisseur und Autor. Klassisch ausgebildeter Schlagzeuger und Schauspielregisseur, bekannt für über 1.500 szenische Lesungen aus Hitlers ›Mein Kampf‹, teils unter Polizeischutz mit kugelsicherer Weste. Über eine halbe Million Zuschauer europaweit erreicht. Tierentsprechung: Waschbär.",
    land:"Deutschland/Türkei", tags:["Comedy"], gender:"m"},
  { route:"beruehmte-gangaji", name:"Gangaji", added:"2026-08-30", subtyp:"SX4w3",
    heading:"Gangaji – Sexuelle Vier mit Dreierflügel",
    teaser:"SX4w3 · geb. 1942. US-amerikanische spirituelle Lehrerin. Lehrerin, Aktivistin und Akupunkteurin, bevor sie 1990 in Indien H. W. L. Poonja (Papaji) begegnete, der ihr den Namen Gangaji gab. Gründerin der Gangaji Foundation, Autorin von ›You Are That!‹ und ›The Diamond in Your Pocket‹, bekannt für ihre Sprache der Sehnsucht und Intensität. Tierentsprechung: Chihuahua.",
    land:"USA", tags:["Sonstiges"], gender:"w"},
  { route:"beruehmte-ryan-gosling", name:"Ryan Gosling", added:"2026-08-30", subtyp:"SX2w3",
    heading:"Ryan Gosling – Sexuelle Zwei mit Dreierflügel",
    teaser:"SX2w3 · geb. 1980. Kanadischer Schauspieler. Vom gemobbten Einzelgänger und Mickey-Mouse-Club-Kinderstar zum dreifach oscarnominierten Charakterdarsteller (›Half Nelson‹, ›La La Land‹, ›Barbie‹). Bekannt für seine bewusst private, familienzentrierte Beziehung mit Eva Mendes und eine vierjährige Karrierepause zugunsten seiner Töchter. Tierentsprechung: Kamel.",
    land:"Kanada", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-mata-hari", name:"Mata Hari", added:"2026-08-31", subtyp:"SX2w3",
    heading:"Mata Hari – Sexuelle Zwei mit Dreierflügel",
    teaser:"SX2w3 · 1876–1917. Niederländische Tänzerin, erfand sich nach gescheiterter Ehe als exotische Kunstfigur ›Mata Hari‹ neu, unterhielt exklusive Beziehungen zu einflussreichen Männern beider Seiten des Ersten Weltkriegs, 1917 wegen Spionage hingerichtet – Beweislage bis heute umstritten. Tierentsprechung: Kamel.",
    land:"Niederlande", tags:["Geschichte"], gender:"f"},
  { route:"beruehmte-eva-mendes", name:"Eva Mendes", added:"2026-08-30", subtyp:"SX6w7",
    heading:"Eva Mendes – Sexuelle Sechs mit Siebenerflügel",
    teaser:"SX6w7 · geb. 1974. Schauspielerin und Unternehmerin. Vom ängstlichen Kind einer kubanischen Einwandererfamilie zum international gefeierten Sexsymbol (Calvin-Klein-Kampagnen) und zur vielseitigen Unternehmerin mit eigenen Mode-, Skincare- und Wohnaccessoire-Linien. Zog sich bewusst aus dem Rampenlicht zurück, um Familie und Privatsphäre mit Ehemann Ryan Gosling zu schützen. Tierentsprechung: Wolf.",
    land:"USA", tags:["Schauspiel","Business"], gender:"f"},
  { route:"beruehmte-heather-thomas", name:"Heather Thomas", added:"2026-08-30", subtyp:"SX6w7",
    heading:"Heather Thomas – Sexuelle Sechs mit Siebenerflügel",
    teaser:"SX6w7 · geb. 1957. Schauspielerin, Drehbuchautorin. Wurde als Jody Banks in ›Ein Colt für alle Fälle‹ zum Pin-up-Idol der frühen 1980er, sprach später offen über eine jahrelange Essstörung und die Folgen kosmetischer Eingriffe, und wurde eine der ersten prominenten politischen Blogger der Huffington Post. Tierentsprechung: Wolf.",
    land:"USA", tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-andre-agassi", name:"Andre Agassi", added:"2026-08-30", subtyp:"SE3w2",
    heading:"Andre Agassi – Selbsterhaltender Typ 3",
    teaser:"SE3w2 · geb. 1970. US-amerikanischer Tennisspieler, 8-facher Grand-Slam-Sieger. Vom Vater zum Tennisprofi gedrillt, wurde er mit der ›Image is Everything‹-Kampagne zum Rebellen-Image, das er später in seiner Autobiografie ›Open‹ als Lüge entlarvte. Nach einem Absturz außerhalb der Top 100 und einer verheimlichten Crystal-Meth-Episode kämpfte er sich zurück zur Nummer 1. Gründer der Andre Agassi Foundation for Education. Seit 2001 mit Steffi Graf (SO9w1) verheiratet. Tierentsprechung: Waschbär.",
    land:"USA", tags:["Sport"], gender:"m"},
  { route:"beruehmte-klara-von-assisi", name:"Klara von Assisi", added:"2026-08-31", subtyp:"SE3w2",
    heading:"Klara von Assisi – Selbsterhaltende Typ 3",
    teaser:"SE3w2 · ca. 1194–1253. Gründerin des Klarissenordens, Weggefährtin des Franz von Assisi, vierzig Jahre unnachgiebige Verteidigerin radikaler Armut gegen mehrere Päpste. Der Waschbär, der aus reiner Disziplin ein Kloster führte, das seine eigene Ordensregel überlebte. Tierentsprechung: Waschbär.",
    land:"Italien", tags:["Geschichte","Religion"] , gender:"w"},
  { route:"beruehmte-tim-maelzer", name:"Tim Mälzer", added:"2026-08-31", subtyp:"SE3w2",
    heading:"Tim Mälzer – Selbsterhaltender Typ 3",
    teaser:"SE3w2 · geb. 1972. Deutscher Koch, Unternehmer und TV-Moderator (›Kitchen Impossible‹, ›Schmeckt nicht, gibt's nicht‹). Klassisch ausgebildeter Koch, betreibt seit 2009 das Hamburger Restaurant Bullerei, bringt Familien im Format ›Zurück zum Herd‹ das Kochen bei. Tierentsprechung: Waschbär.",
    land:"Deutschland", tags:["Kochen"], gender:"m"},
  { route:"beruehmte-michael-dell", name:"Michael Dell", added:"2026-08-29", subtyp:"SE3w2",
    heading:"Michael Dell – Selbsterhaltender Typ 3",
    teaser:"SE3w2 · geb. 1965. US-amerikanischer Unternehmer, gründete Dell Computer 1984 im Studentenwohnheim mit 1.000 Dollar Startkapital. Bekannt für operative Disziplin und direkten Kundenkontakt statt Selbstinszenierung, gemeinsam mit seiner Frau Susan über 10 Milliarden Dollar für wohltätige Zwecke zugesagt. Tierentsprechung: Waschbär.",
    land:"USA", tags:["Wirtschaft"], gender:"m"},
  { route:"beruehmte-edita-gruberova", name:"Edita Gruberová", added:"2026-08-29", subtyp:"SE3w2",
    heading:"Edita Gruberová – Selbsterhaltender Typ 3",
    teaser:"SE3w2 · 1946–2021. Slowakische Koloratursopranistin, ›Königin der Koloratur‹, über 45 Jahre an der Wiener Staatsoper. Floh 1971 aus der Tschechoslowakei nach Wien, sang noch mit 72 Jahren anspruchsvollste Partien – für ihr Fach eine außergewöhnliche Karrierelänge. Tierentsprechung: Waschbär.",
    land:"Slowakei/Österreich", tags:["Musik"], gender:"f"},
  { route:"beruehmte-fritz-wepper", name:"Fritz Wepper", added:"2026-08-29", subtyp:"SE1w9",
    heading:"Fritz Wepper – Selbsterhaltender Typ 1",
    teaser:"SE1w9 · 1941–2024. Deutscher Schauspieler, 24 Jahre als Harry Klein an der Seite von Horst Tappert in ›Derrick‹, danach fast 20 Jahre als Bürgermeister Wöller in ›Um Himmels Willen‹. Über 45 Jahre verlässliche, unaufgeregte Präsenz im deutschen Fernsehen, ohne je die Hauptrolle zu beanspruchen. Tierentsprechung: Adler.",
    land:"Deutschland", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-reinhold-wuerth", name:"Reinhold Würth", added:"2026-08-30", subtyp:"SE1w9",
    heading:"Reinhold Würth – Selbsterhaltender Typ 1",
    teaser:"SE1w9 · geb. 1935. Unternehmer, übernahm 1954 mit 19 Jahren den kleinen Schraubenhandel seines verstorbenen Vaters und baute daraus die Würth-Gruppe, einen der größten Handelskonzerne Europas. Mäzen einer der größten privaten Kunstsammlungen Europas. Tierentsprechung: Weißkopfseeadler.",
    land:"Deutschland", tags:["Business"], gender:"m"},
  { route:"beruehmte-horst-tappert", name:"Horst Tappert", added:"2026-08-29", subtyp:"SE3w2",
    heading:"Horst Tappert – Selbsterhaltender Typ 3",
    teaser:"SE3w2 · 1923–2008. Deutscher Schauspieler, 24 Jahre und 281 Folgen lang Oberinspektor Derrick, der meistverkauften deutschen Fernsehserie aller Zeiten. Über zwei Jahrzehnte enge Zusammenarbeit mit Fritz Wepper. Verschwieg zeitlebens seine Mitgliedschaft in der Waffen-SS, die erst 2013 posthum bekannt wurde. Tierentsprechung: Waschbär.",
    land:"Deutschland", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-bastian-pastewka", name:"Bastian Pastewka", added:"2026-08-29", subtyp:"SE3w2",
    heading:"Bastian Pastewka – Selbsterhaltender Typ 3",
    teaser:"SE3w2 · geb. 1972. Deutscher Schauspieler, Komiker und Synchronsprecher, bekannt aus ›Die Wochenshow‹ und seiner eigenen Sitcom ›Pastewka‹. Seit 1996 enge, jahrzehntelange Zusammenarbeit mit Anke Engelke in zahlreichen Formaten. Gilt als akribischer Perfektionist mit hohem handwerklichem Anspruch. Tierentsprechung: Waschbär.",
    land:"Deutschland", tags:["Comedy","Schauspiel"], gender:"m"},
  { route:"beruehmte-lang-lang", name:"Lang Lang", added:"2026-08-15", subtyp:"SE3w2",
    heading:"Lang Lang \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w2 \u00b7 geb. 1982. Pianist. Durchbruch 1999 beim Ravinia Festival, Olympia-Er\u00f6ffnungsfeier Peking 2008, Lang Lang International Music Foundation. Der Waschb\u00e4r mit Zweierfl\u00fcgel: jahrelange stille Meisterschaft, die zur Br\u00fccke f\u00fcr andere wird. Tierentsprechung: Waschb\u00e4r.",
    land:"Deutschland", tags:["Musik"], gender:"m"},
  { route:"beruehmte-penelope-cruz", name:"Pen\u00e9lope Cruz", added:"2026-07-31", subtyp:"SE3w2",
    heading:"Pen\u00e9lope Cruz \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w2 \u00b7 geb. 1974. Oscar-pr\u00e4mierte Schauspielerin, jahrzehntelange Zusammenarbeit mit Almod\u00f3var. Handwerk statt Rampenlicht, Verwandlungskunst als Beruf \u2013 der Waschb\u00e4r, der in jeder Rolle verschwindet und doch niemals verloren geht. Tierentsprechung: Waschb\u00e4r.",
    land:"Spanien", tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-norah-jones", name:"Norah Jones", added:"2026-08-30", subtyp:"SE3w4",
    heading:"Norah Jones – Selbsterhaltender Typ 3",
    teaser:"SE3w4 · geb. 1979. Sängerin und Songwriterin, Tochter von Ravi Shankar. ›Come Away with Me‹ (2002), über 27 Millionen verkaufte Alben, acht Grammys – und bewusster Rückzug aus dem Rampenlicht statt Ausbau des Ruhms. Trat 2008 unter dem Pseudonym ›Maddie‹ im Nebenprojekt El Madmo inkognito auf. Tierentsprechung: Waschbär.",
    land:"USA", tags:["Musik"], gender:"f"},
  { route:"beruehmte-johnny-cash", name:"Johnny Cash", added:"2026-08-29", subtyp:"SE3w4",
    heading:"Johnny Cash – Selbsterhaltender Typ 3",
    teaser:"SE3w4 · 1932–2003. US-amerikanischer Sänger und Songwriter, ›Man in Black‹, Folsom-Prison-Konzert 1968, jahrzehntelange Sucht und Comeback mit ›American Recordings‹. Vom Tod des Bruders Jack gezeichnet, baute er über fünf Jahrzehnte eine der stabilsten Karrieren der Country-Musik auf. Tierentsprechung: Waschbär.",
    land:"USA", tags:["Musik"], gender:"m"},
  { route:"beruehmte-david-l-rathmer", name:"David L. Rathmer", added:"2026-07-20", subtyp:"SE3w4",
    heading:"David L. Rathmer \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w4 \u00b7 geb. 2003 in M\u00fcnster. Enneagramm-Profiler, Gr\u00fcnder der Ennea Scholars Academy, j\u00fcngster Wirtschaftssenator des Europ\u00e4ischen Wirtschaftssenats. Mitentwickler des Heilungskompass. Der Waschb\u00e4r, der das Enneagramm ins digitale Zeitalter \u00fcberf\u00fchrt. Tierentsprechung: Waschb\u00e4r.",
    land:"Irland", tags:["Enneagramm","Wissenschaft"] , gender:"m"},
  { route:"beruehmte-kathrin-bauerfeind", name:"Kathrin Bauerfeind", subtyp:"SE3w4",
    heading:"Kathrin Bauerfeind \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w4 \u00b7 geb. 1981. Journalistin, Moderatorin, Autorin, Entertainerin. Vielseitig, pr\u00e4zise, unverwechselbar \u2013 der Waschb\u00e4r, der aus K\u00f6nnen Sicherheit macht.",
    land:"Deutschland", tags:["Medien"] , gender:"f"},
  { route:"beruehmte-tony-shalhoub", name:"Tony Shalhoub", added:"2026-08-13", subtyp:"SE3w4",
    heading:"Tony Shalhoub – Selbsterhaltender Typ 3",
    teaser:"SE3w4 · geb. 1953. Schauspieler, bekannt aus »Monk« und »The Marvelous Mrs. Maisel«. Drei Emmys, ein Golden Globe – der Waschbär mit Viererflügel: jahrzehntelanges Handwerk statt Rampenlicht, Präzision als Ausdruck echter emotionaler Tiefe. Tierentsprechung: Waschbär.",
    land:"USA", tags:["Film"], gender:"m"},
  { route:"beruehmte-anna-anderson", name:"Anna Anderson", added:"2026-08-16", subtyp:"SE3w4",
    heading:"Anna Anderson – Selbsterhaltende Typ 3",
    teaser:"SE3w4 · 1896–1984. Berühmteste Hochstaplerin der Geschichte, behauptete jahrzehntelang, die überlebende Zarentochter Anastasia zu sein. Absicherung durch eine tragische Identität, nie strafrechtlich verurteilt. Der Waschbär, der sich eine Krone baute. Tierentsprechung: Waschbär.",
    land:"Russland", tags:["Geschichte"], gender:"f"},
  { route:"beruehmte-judit-polgar", name:"Judit Polgár", added:"2026-08-15", subtyp:"SE3w4",
    heading:"Judit Polgár – Selbsterhaltender Typ 3",
    teaser:"SE3w4 · geb. 1976. Schach-Großmeisterin, spielstärkste Frau der Schachgeschichte. Jüngste Großmeisterin der Geschichte 1991, Platz 8 der Weltrangliste 2005. Der Waschbär, der sich die härteste statt die bequemste Bühne suchte. Tierentsprechung: Waschbär.",
    land:"Ungarn", tags:["Sport"], gender:"f"},
  { route:"beruehmte-annika-von-mutius", name:"Dr. Annika von Mutius", added:"2026-08-19", subtyp:"SE3w4",
    heading:"Dr. Annika von Mutius – Selbsterhaltender Typ 3",
    teaser:"SE3w4 · Deutsche Unternehmerin, Gründerin des KI-Recruiting-Start-ups Empion. Promovierte Mathematikerin, Forbes „30 Under 30 Europe“. Substanz statt Inszenierung als Antrieb. Tierentsprechung: Waschbär.",
    land:"Deutschland", tags:["Wirtschaft"], gender:"f"},
  { route:"beruehmte-cheyenne-ochsenknecht", name:"Cheyenne Ochsenknecht", added:"2026-08-24", subtyp:"SE3w4",
    heading:"Cheyenne Ochsenknecht – Selbsterhaltender Typ 3",
    teaser:"SE3w4 · geb. 2000. Deutsches Model und Landwirtin, betreibt mit ihrem Mann einen Chianina-Rinderhof in der Steiermark. Verließ eine erreichte mediale Sichtbarkeit bewusst für ein Leben aus konkreter, handfester Arbeit. Tierentsprechung: Waschbär.",
    land:"Deutschland", tags:["Mode","Sonstiges"], gender:"f"},
  { route:"beruehmte-changpeng-zhao", name:"Changpeng Zhao", added:"2026-08-19", subtyp:"SE3w4",
    heading:"Changpeng Zhao – Selbsterhaltender Typ 3",
    teaser:"SE3w4 · Kanadisch-chinesischer Unternehmer, Gründer von Binance, der größten Kryptobörse der Welt. Technische Infrastruktur statt Auftritt, radikal eigener Weg außerhalb bestehender Regelwerke. Tierentsprechung: Waschbär.",
    land:"Kanada/China", tags:["Wirtschaft"], gender:"m"},
  { route:"beruehmte-bryn-kenney", name:"Bryn Kenney", added:"2026-08-19", subtyp:"SE3w4",
    heading:"Bryn Kenney – Selbsterhaltender Typ 3",
    teaser:"SE3w4 · US-amerikanischer Profi-Pokerspieler, Nr. 1 der All-Time-Money-List mit rund 90 Mio. Dollar. Größter Einzelgewinn der Pokergeschichte (2019). Selbstbeschreibung als »einsamer Wolf« der Szene. Tierentsprechung: Waschbär.",
    land:"USA", tags:["Sport"], gender:"m"},
  { route:"beruehmte-madame-tussaud", name:"Madame Tussaud", added:"2026-08-08", subtyp:"SE3w4",
    heading:"Madame Tussaud \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w4 \u00b7 1761\u20131850. Wachsbildnerin, Museumsgr\u00fcnderin. Totenmasken der Guillotine-Opfer w\u00e4hrend der Franz\u00f6sischen Revolution, 33 Jahre Wandertournee durch Gro\u00dfbritannien, das \u201eKabinett des Schreckens\u201c \u2013 der Waschb\u00e4r, der aus reiner \u00dcberlebensfertigkeit ein Weltunternehmen baute. Tierentsprechung: Waschb\u00e4r.",
    tags:["Kunst","Geschichte"] , gender:"f"},
  { route:"beruehmte-osho", name:"Osho", added:"2026-07-31", subtyp:"SE3w4",
    heading:"Osho \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w4 \u00b7 1931\u20131990. Mystiker, Kommune-Gr\u00fcnder, Autor von \u00fcber 600 B\u00fcchern. Vom Ashram in Poona zur Utopie-Stadt Rajneeshpuram \u2013 der Waschb\u00e4r, der Systeme baut, w\u00e4hrend die Vier alle Konventionen infrage stellt. Tierentsprechung: Waschb\u00e4r.",
    land:"Indien", tags:["Sonstiges"] , gender:"m"},
  { route:"beruehmte-sterling-north", name:"Sterling North", added:"2026-08-18", subtyp:"SE3w4",
    heading:"Sterling North \u2013 Selbsterhaltender Typ 3",
    teaser:"SE3w4 \u00b7 1906\u20131974. Schriftsteller und Literaturredakteur. Machte mit seinem Buch \u00bbRascal\u00ab (1963, Newbery Honor, verfilmt von Disney) den Waschb\u00e4ren weltber\u00fchmt \u2013 und blieb dem echten Tier sein ganzes Leben lang verbunden.",
    tags:["Literatur"], gender:"m"},
  { route:"beruehmte-sahra-wagenknecht", name:"Sahra Wagenknecht", added:"2026-07-20", subtyp:"SO3w2",
    heading:"Sahra Wagenknecht \u2013 Sozialer Typ 3",
    teaser:"SO3w2 \u00b7 geb. 1969. Politikerin, Buchautorin, Gr\u00fcnderin des BSW. Die Analytikerin des Popul\u00e4ren \u2013 der Gepard, der nicht nur sprintet, sondern auch wei\u00df, wohin. Tierentsprechung: Gepard.",
    land:"Deutschland", tags:["Politik","Medien"] , gender:"f"},
  { route:"beruehmte-cristiano-ronaldo", name:"Cristiano Ronaldo", subtyp:"SO3w2",
    heading:"Cristiano Ronaldo \u2013 Sozialer Typ 3",
    teaser:"SO3w2 \u00b7 geb. 1985. F\u00fcnf Weltfu\u00dfballer-Titel, f\u00fcnf Champions-League-Siege, \u00fcber 900 Karrieretore. Der Gepard, der nie aufh\u00f6rt zu rennen \u2013 und der trotzdem wei\u00df, wo er herkommt.",
    tags:["Sport"] , gender:"m"},
  { route:"beruehmte-christiaan-barnard", name:"Dr. Christiaan Barnard", added:"2026-08-13", subtyp:"SO3w2",
    heading:"Dr. Christiaan Barnard – Sozialer Typ 3",
    teaser:"SO3w2 · 1922–2001. Südafrikanischer Herzchirurg. Erste erfolgreiche Herztransplantation der Welt (1967), Weltruhm über Nacht, Jetset-Leben mit Filmstars. Der Gepard mit Zweierflügel: der Mut zum ersten Sprung, verbunden mit dem Bedürfnis, dabei gesehen zu werden. Tierentsprechung: Gepard.",
    land:"Südafrika", tags:["Geschichte","Medizin"], gender:"m"},
  { route:"beruehmte-klemens-von-metternich", name:"Klemens von Metternich", added:"2026-08-31", subtyp:"SO3w2",
    heading:"Klemens von Metternich – Sozialer Typ 3",
    teaser:"SO3w2 · 1773–1859. Österreichischer Staatskanzler, Architekt des Wiener Kongresses und der europäischen Nachkriegsordnung. Der Gepard mit Zweierflügel: Diplomatie über persönlichen Charme, Salons und einflussreiche Liebschaften statt reiner Verhandlungsmacht. Tierentsprechung: Gepard.",
    land:"Österreich", tags:["Geschichte","Politik"] , gender:"m"},
  { route:"beruehmte-ludwig-xiv", name:"Ludwig XIV.", added:"2026-08-15", subtyp:"SO3w2",
    heading:"Ludwig XIV. – Sozialer Typ 3",
    teaser:"SO3w2 · 1638–1715. König von Frankreich, der Sonnenkönig. Versailles, Ballet de la Nuit als Apoll, 72 Regierungsjahre. Der Gepard mit Zweierflügel: ein Bild, das zum Programm eines ganzen Königreichs wurde. Tierentsprechung: Gepard.",
    land:"Frankreich", tags:["Geschichte"], gender:"m"},
  { route:"beruehmte-pharrell-williams", name:"Pharrell Williams", added:"2026-07-31", subtyp:"SO3w2",
    heading:"Pharrell Williams \u2013 Sozialer Typ 3",
    teaser:"SO3w2 \u00b7 geb. 1973. Musikproduzent (The Neptunes), Musiker, Kreativdirektor bei Louis Vuitton. \u00dcber 400 Hit-Produktionen, Weltsingle \u201eHappy\u201c \u2013 der Gepard, der st\u00e4ndig die Richtung wechselt und in jeder gewinnt. Tierentsprechung: Gepard.",
    tags:["Musik"] , gender:"m"},
  { route:"beruehmte-karl-lagerfeld", name:"Karl Lagerfeld", added:"2026-07-20", subtyp:"SO3w4",
    heading:"Karl Lagerfeld \u2013 Sozialer Typ 3",
    teaser:"SO3w4 \u00b7 1933\u20132019. Mode-Ikone, Creative Director von Chanel und Fendi. Der Gepard, der sich selbst in ein Symbol verwandelt hat \u2013 und dahinter ein Leben aus B\u00fcchern, \u00c4sthetik und verborgener Tiefe f\u00fchrte.",
    tags:["Mode","Kunst"] , gender:"m"},
  { route:"beruehmte-gottfried-wilhelm-leibniz", name:"Gottfried Wilhelm Leibniz", added:"2026-08-14", subtyp:"SO3w4",
    heading:"Gottfried Wilhelm Leibniz \u2013 Sozialer Typ 3",
    teaser:"SO3w4 \u00b7 1646\u20131716. Deutscher Universalgelehrter: Philosoph, Mathematiker, Diplomat, Gr\u00fcnder der Preu\u00dfischen Akademie der Wissenschaften. Monadologie, Priorit\u00e4tsstreit mit Newton, bin\u00e4res Zahlensystem. Der Gepard mit Viererfl\u00fcgel: sichtbarer Erfolg an den H\u00f6fen Europas, verbunden mit der Faszination f\u00fcr das absolut Einzigartige. Tierentsprechung: Gepard.",
    land:"Deutschland", tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-teresa-von-avila", name:"Teresa von \u00c1vila", added:"2026-08-08", subtyp:"SO3w4",
    heading:"Teresa von \u00c1vila \u2013 Sozialer Typ 3",
    teaser:"SO3w4 \u00b7 1515\u20131582. Mystikerin, Ordensreformerin, Kirchenlehrerin. Gr\u00fcnderin von 17 reformierten Kl\u00f6stern trotz chronischer Krankheit, Autorin der \u201eInneren Burg\u201c, unter Beobachtung der Inquisition \u2013 der Gepard, dessen tiefste Vision zum ber\u00fchmtesten Kunstwerk ihrer Zeit wurde. Tierentsprechung: Gepard.",
    land:"Spanien", tags:["Religion","Geschichte"] , gender:"f"},
  { route:"beruehmte-sean-connery", name:"Sean Connery", added:"2026-07-31", subtyp:"SO3w4",
    heading:"Sean Connery \u2013 Sozialer Typ 3",
    teaser:"SO3w4 \u00b7 1930\u20132020. Schauspieler, erster und ikonischster James Bond, Oscar f\u00fcr \u201eDie Unbestechlichen\u201c. Vom Milchmann zum Weltstar \u2013 der Gepard, der sein Image perfektionierte und doch den Mut hatte, es hinter sich zu lassen. Tierentsprechung: Gepard.",
    land:"Schottland", tags:["Schauspiel"] , gender:"m"},
  { route:"beruehmte-bella-thorne", name:"Bella Thorne", subtyp:"SO3w4",
    heading:"Bella Thorne \u2013 Sozialer Typ 3",
    teaser:"SO3w4 \u00b7 geb. 1997. Schauspielerin, Regisseurin, Social-Media-Star. Vom Disney-Kind zur Regisseurin \u2013 der Gepard, der nicht nur sprintet, sondern auch die Dunkelheit kennt.",
    land:"USA", tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-laurie-marker", name:"Dr. Laurie Marker", added:"2026-08-17", subtyp:"SO3w4",
    heading:"Dr. Laurie Marker \u2013 Soziale Typ 3",
    teaser:"SO3w4 \u00b7 geb. 1954. Verhaltensforscherin, Gr\u00fcnderin des Cheetah Conservation Fund. Wurde selbst Farmerin in Namibia, um Farmer vom Gepardenschutz zu \u00fcberzeugen \u2013 TIME \u201eHero for the Planet\u201c. Tierentsprechung: Gepard.",
    tags:["Wissenschaft"], gender:"f"},
{ route:"beruehmte-heidi-klum", name:"Heidi Klum", added:"2026-08-24", subtyp:"SX3w4",
    heading:"Heidi Klum – Sexueller Typ 3",
    teaser:"SX3w4 · geb. 1973 in Bergisch Gladbach. Model, Moderatorin und Unternehmerin, Germany's Next Topmodel, America's Got Talent. Verkleidete sich 2023 auf ihrer legendären Halloween-Party selbst als überlebensgroßer Pfau. Tierentsprechung: Pfau.",
    land:"Deutschland", tags:["Mode","Fernsehen"], gender:"f"},
  { route:"beruehmte-dolly-parton", name:"Dolly Parton", added:"2026-08-26", subtyp:"SX3w4",
    heading:"Dolly Parton – Sexueller Typ 3",
    teaser:"SX3w4 · geb. 1946 in Locust Ridge, Tennessee. Sängerin, Songwriterin und Unternehmerin, Jolene, 9 to 5, I Will Always Love You, Dollywood. »Es kostet eine Menge Geld, so billig auszusehen.« Tierentsprechung: Pfau.",
    land:"USA", tags:["Musik"], gender:"f"},
  { route:"beruehmte-brad-pitt", name:"Brad Pitt", added:"2026-08-14", subtyp:"SX3w2",
    heading:"Brad Pitt – Sexueller Typ 3",
    teaser:"SX3w2 · geb. 1963 in Shawnee, Oklahoma. Schauspieler und Produzent (Plan B Entertainment), Oscar-Prämierter für „Once Upon a Time in Hollywood“ und „12 Years a Slave“. Magnetismus als Lebensthema, Förderer statt nur Star. Tierentsprechung: Pfau.",
    land:"USA", tags:["Schauspiel","Medien"] , gender:"m"},
  { route:"beruehmte-kai-pflaume", name:"Kai Pflaume", subtyp:"SX3w2",
    heading:"Kai Pflaume \u2013 Sexueller Typ 3",
    teaser:"SX3w2 \u00b7 \u201eDer Strahlende\u201c, geb. 1967. Deutschlands bekanntester Moderator. Seit \u00fcber 30 Jahren fasziniert er Millionen \u2013 nicht durch gro\u00dfe Gesten, sondern durch echte W\u00e4rme und magnetische pers\u00f6nliche Pr\u00e4senz. Tierentsprechung: Pfau.",
    land:"Deutschland", tags:["Medien"] , gender:"m"},
  { route:"beruehmte-lena-meyer-landrut", name:"Lena Meyer-Landrut", added:"2026-07-20", subtyp:"SX3w2",
    heading:"Lena Meyer-Landrut \u2013 Sexueller Typ 3",
    teaser:"SX3w2 \u00b7 geb. 1991. S\u00e4ngerin, ESC-Gewinnerin 2010. Der Pfau, der nicht wei\u00df, wie sch\u00f6n er ist \u2013 und gerade deshalb alle in den Bann zieht. Tierentsprechung: Pfau.",
    tags:["Musik"] , gender:"f"},
  { route:"beruehmte-brigitte-bardot", name:"Brigitte Bardot", added:"2026-07-31", subtyp:"SX3w2",
    heading:"Brigitte Bardot \u2013 Sexueller Typ 3",
    teaser:"SX3w2 \u00b7 1934\u20132025. Filmikone der 1950er/60er, seit 1973 Tierrechtsaktivistin. Vom Sinnbild sinnlicher Ausstrahlung zur Gr\u00fcnderin einer eigenen Stiftung \u2013 der Pfau, der sein Gefieder irgendwann f\u00fcr eine andere Sache einsetzt. Tierentsprechung: Pfau.",
    land:"Frankreich", tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-meg-ryan", name:"Meg Ryan", added:"2026-07-20", subtyp:"SX3w4",
    heading:"Meg Ryan \u2013 Sexueller Typ 3",
    teaser:"SX3w4 \u00b7 geb. 1961. Schauspielerin, Regisseurin. Hollywoods Lieblingsperson der 1990er \u2013 der Pfau, der mehr wollte als seine Rolle. Tierentsprechung: Pfau.",
    tags:["Schauspiel","Film"] , gender:"f"},
  { route:"beruehmte-marilyn-monroe", name:"Marilyn Monroe", added:"2026-07-31", subtyp:"SX3w4",
    heading:"Marilyn Monroe \u2013 Sexueller Typ 3",
    teaser:"SX3w4 \u00b7 1926\u20131962. Schauspielerin, Ikone des 20. Jahrhunderts. Vom Waisenhaus zur eigenen Produktionsfirma, vom B\u00fchnenbild zur Method-Acting-Sch\u00fclerin \u2013 der Pfau, dessen Leuchten die Person dahinter fast verschlang. Tierentsprechung: Pfau.",
    tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-dieter-bohlen", name:"Dieter Bohlen", subtyp:"SX3w4",
    heading:"Dieter Bohlen \u2013 Sexueller Typ 3",
    teaser:"SX3w4 \u00b7 geb. 1954. Musikproduzent, Komponist, DSDS-Juror. \u00dcber 500 Millionen verkaufte Tontr\u00e4ger. Der Pfau, der das Rad schl\u00e4gt \u2013 und der wissen will, was dahinter liegt.",
    tags:["Musik"] , gender:"m"},
  { route:"beruehmte-marlene-zuk", name:"Prof. Dr. Marlene Zuk", added:"2026-08-18", subtyp:"SX3w4",
    heading:"Marlene Zuk \u2013 Sexueller Typ 3",
    teaser:"SX3w4 \u00b7 geb. 1956. Evolutionsbiologin, Professorin. Hamilton-Zuk-Hypothese: Prachtsignale wie das Pfauenrad als ehrliche Beweise f\u00fcr Gesundheit und Parasitenresistenz. Der Pfau, der erforscht, statt nur zu gl\u00e4nzen. Tierentsprechung: Pfau.",
    land:"Irland", tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-sam-altman", name:"Sam Altman", added:"2026-08-10", subtyp:"SE4w5",
    heading:"Sam Altman \u2013 Selbsterhaltender Typ 4",
    teaser:"SE4w5 \u00b7 geb. 1985. CEO von OpenAI, Ex-Pr\u00e4sident von Y Combinator. Stilles, methodisches Ringen um eine Zukunft, die noch niemand gebaut hat \u2013 f\u00fcnf Tage Rauswurf und R\u00fcckkehr im November 2023, ohne \u00f6ffentliches Drama. Tierentsprechung: Taube.",
    land:"USA", tags:["Wirtschaft","Technologie"] , gender:"m"},
  { route:"beruehmte-lady-diana", name:"Lady Diana", subtyp:"SE4w3",
    heading:"Lady Diana \u2013 Selbsterhaltender Typ 4",
    teaser:"SE4w3 \u00b7 1961\u20131997. Princess of Wales. Die Taube, die Botschaften tr\u00e4gt \u2013 Empathie als Kraft, innerer Schmerz als stille Last, und eine Zugewandtheit, die Millionen ber\u00fchrte.",
    land:"Großbritannien", tags:["Politik"] , gender:"f"},
  { route:"beruehmte-tim-bendzko", name:"Tim Bendzko", added:"2026-07-21", subtyp:"SE4w3",
    heading:"Tim Bendzko \u2013 Selbsterhaltender Typ 4",
    teaser:"SE4w3 \u00b7 geb. 1985, Berlin. S\u00e4nger, Songwriter. \"Nur noch kurz die Welt retten\". Die Taube, die das Gewicht des Lebens tr\u00e4gt \u2013 und daraus Musik macht, die Menschen finden l\u00e4sst, was sie selbst nicht aussprechen konnten.",
    tags:["Musik"], gender:"m"},
  { route:"beruehmte-adele", name:"Adele", added:"2026-07-31", subtyp:"SE4w3",
    heading:"Adele \u2013 Selbsterhaltender Typ 4",
    teaser:"SE4w3 \u00b7 geb. 1988. S\u00e4ngerin, Songwriterin. 16 Grammys, ein Oscar, \u00fcber 120 Millionen verkaufte Tontr\u00e4ger. Die Taube, die stillen Herzschmerz in Welthits verwandelt, ohne ihn \u00f6ffentlich auszubreiten. Tierentsprechung: Taube.",
    land:"Großbritannien", tags:["Musik"] , gender:"f"},
  { route:"beruehmte-nicolas-cage", name:"Nicolas Cage", added:"2026-08-09", subtyp:"SE4w3",
    heading:"Nicolas Cage \u2013 Selbsterhaltender Typ 4",
    teaser:"SE4w3 \u00b7 geb. 1964. Schauspieler. Leaving Las Vegas, Con Air, Pig. Die Taube, die trotz Sturm und wiederholtem Absturz immer wieder auffliegt und ihren eigenen, unverwechselbaren Weg weiterfliegt.",
    land:"USA", tags:["Film"], gender:"m"},
  { route:"beruehmte-karoline-herfurth", name:"Karoline Herfurth", added:"2026-07-21", subtyp:"SE4w5",
    heading:"Karoline Herfurth \u2013 Selbsterhaltende Typ 4",
    teaser:"SE4w5 \xb7 geb. 1984, Berlin. Schauspielerin, Regisseurin. Die Taube, die beobachtet, bevor sie landet \u2013 innere Tiefe, k\xfcnstlerische Pr\xe4zision, und eine Menschlichkeit hinter der Kamera, die das Sch\xf6ne am Verletzlichen sucht.",
    land:"Deutschland", tags:["Film"], gender:"f"},
  { route:"beruehmte-clemens-arvay", name:"Clemens G. Arvay", subtyp:"SE4w5",
    heading:"Clemens G. Arvay \u2013 Selbsterhaltender Typ 4",
    teaser:"SE4w5 \u00b7 1980\u20132022. Biologe, Autor, Naturheiler. Der Biophilia-Effekt \u2013 Wissen und Sehnsucht als Br\u00fccke. Die Taube, die anderen den Weg in den Wald gezeigt hat.",
    tags:["Wissenschaft"] , gender:"m"},
  { route:"beruehmte-paul-mccartney", name:"Paul McCartney", added:"2026-07-31", subtyp:"SE4w5",
    heading:"Paul McCartney \u2013 Selbsterhaltender Typ 4",
    teaser:"SE4w5 \u00b7 geb. 1942. Musiker, Songwriter, Ex-Beatle. \u00dcber 20.000 Auff\u00fchrungen seiner Songs weltweit. Die Taube, die ihre schwerste Botschaft am l\u00e4ngsten mit sich tr\u00e4gt, bevor sie sie in eine Melodie verwandelt. Tierentsprechung: Taube.",
    tags:["Musik"] , gender:"m"},
  { route:"beruehmte-leo-tolstoi", name:"Leo Tolstoi", added:"2026-08-09", subtyp:"SE4w5",
    heading:"Leo Tolstoi \u2013 Selbsterhaltender Typ 4",
    teaser:"SE4w5 \u00b7 1828\u20131910. Russischer Schriftsteller. Krieg und Frieden, Anna Karenina. Die Taube, die zeitlebens zwischen Reichtum und Askese schwankte und ihre eigene Zerrissenheit in zeitlose Literatur verwandelte.",
    land:"Russland", tags:["Literatur"], gender:"m"},
  { route:"beruehmte-nikola-tesla", name:"Nikola Tesla", added:"2026-08-18", subtyp:"SO7w6",
    heading:"Nikola Tesla \u2013 Sozialer Typ 7",
    teaser:"SO7w6 \u00b7 1856\u20131943. Erfinder, Ingenieur. Wechselstrom, Wardenclyffe Tower, Stromkrieg mit Edison. Der Biber, der der ganzen Menschheit kostenlose Energie schenken wollte und am Ende nur noch eine einzelne wei\u00dfe Taube liebte. Tierentsprechung: Biber.",
    land:"Serbien/USA", tags:["Wissenschaft","Geschichte"], gender:"m"},
  { route:"beruehmte-charlotte-wells", name:"Charlotte Wells", added:"2026-08-29", subtyp:"SE4w5",
    heading:"Charlotte Wells – Selbsterhaltender Typ 4",
    teaser:"SE4w5 · geb. 1987. Schottische Regisseurin, Spielfilmdebüt ›Aftersun‹ (2022), lose basierend auf dem Verlust ihres Vaters in der Jugend. Studium der Klassischen Philologie, MFA und MBA an der NYU Tisch School, auffallend zurückhaltend gegenüber der Presse zu den autobiografischen Bezügen des Films. Tierentsprechung: Taube.",
    land:"Schottland", tags:["Film"], gender:"f"},
  { route:"beruehmte-ludwig-goeransson", name:"Ludwig Göransson", added:"2026-08-29", subtyp:"SE4w5",
    heading:"Ludwig Göransson – Selbsterhaltender Typ 4",
    teaser:"SE4w5 · geb. 1984. Schwedischer Filmkomponist und Produzent, zwei Oscars (›Black Panther‹, ›Oppenheimer‹). Monatelange Recherchereisen und wissenschaftliche Vertiefung für jede Partitur, langjähriger Weggefährte Donald Glovers und Ryan Cooglers, stets im Hintergrund statt im Rampenlicht. Tierentsprechung: Taube.",
    land:"Schweden", tags:["Musik","Film"], gender:"m"},
  { route:"beruehmte-sally-rooney", name:"Sally Rooney", added:"2026-08-29", subtyp:"SE4w5",
    heading:"Sally Rooney – Selbsterhaltender Typ 4",
    teaser:"SE4w5 · geb. 1991. Irische Schriftstellerin, ›Normal People‹, ›Conversations with Friends‹, selbst erklärte Marxistin. Ehemalige Debattier-Europameisterin, meidet konsequent öffentliche Aufmerksamkeit, lehnte 2021 aus politischer Überzeugung die hebräische Übersetzung eines Verlags ab. Tierentsprechung: Taube.",
    land:"Irland", tags:["Literatur"], gender:"f"},
  { route:"beruehmte-virginia-woolf", name:"Virginia Woolf", added:"2026-08-29", subtyp:"SE4w5",
    heading:"Virginia Woolf – Selbsterhaltender Typ 4",
    teaser:"SE4w5 · 1882–1941. Britische Schriftstellerin, Mitbegründerin der Bloomsbury Group, erfand mit dem Bewusstseinsstrom eine eigene literarische Form. Autodidaktisch gebildet, lebenslang von schweren depressiven Episoden gezeichnet, gründete mit ihrem Mann Leonard den Hogarth Press. Tierentsprechung: Taube.",
    land:"Großbritannien", tags:["Literatur"], gender:"f"},
  { route:"beruehmte-miguel-de-unamuno", name:"Miguel de Unamuno", added:"2026-08-28", subtyp:"SE4w5",
    heading:"Miguel de Unamuno – Selbsterhaltender Typ 4",
    teaser:"SE4w5 · 1864–1936. Spanischer Philosoph und Schriftsteller, Rektor der Universität Salamanca. Lebenslanges Ringen mit der eigenen Sterblichkeit in ›Del sentimiento trágico de la vida‹, Erfinder der ›nivola‹. Berühmte Konfrontation mit General Millán-Astray 1936, Amtsenthebung und Hausarrest bis zu seinem Tod. Tierentsprechung: Taube.",
    land:"Spanien", tags:["Philosophie","Literatur"], gender:"m"},
  { route:"beruehmte-vincent-van-gogh", name:"Vincent van Gogh", added:"2026-08-28", subtyp:"SE4w5",
    heading:"Vincent van Gogh – Selbsterhaltender Typ 4",
    teaser:"SE4w5 · 1853–1890. Niederländischer Maler. Rund 2100 Werke in gut zehn Jahren, nur ein Bild zu Lebzeiten verkauft, finanziell fast vollständig von Bruder Theo abhängig. Systematisches Selbststudium von Farbtheorie und japanischen Holzschnitten, der Ohrschnitt 1888, ›Sternennacht‹ aus der Heilanstalt. Tierentsprechung: Taube.",
    land:"Niederlande", tags:["Kunst"], gender:"m"},
  { route:"beruehmte-derek-goodwin", name:"Derek Goodwin", added:"2026-08-18", subtyp:"SE4w5",
    heading:"Derek Goodwin \u2013 Selbsterhaltender Typ 4",
    teaser:"SE4w5 \u00b7 1920\u20132008. Britischer Ornithologe am Natural History Museum London, Standardwerke \u00fcber Tauben, Kr\u00e4hen und Prachtfinken. Ein Leben im Hintergrund, gewidmet ausgerechnet dem eigenen archetypischen Tier. Tierentsprechung: Taube.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-romy-schneider", name:"Romy Schneider", subtyp:"SO4w3",
    heading:"Romy Schneider \u2013 Sozialer Typ 4",
    teaser:"SO4w3 \u00b7 1938\u20131982. Schauspielerin. Sissi, C\u00e9sar und Rosalie, La Piscine. Das G\u00fcrteltier, das im Licht stand \u2013 und sich innerlich immer einrollte.",
    land:"Deutschland", tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-michael-jackson", name:"Michael Jackson", added:"2026-08-16", subtyp:"SO4w3",
    heading:"Michael Jackson – Sozialer Typ 4",
    teaser:"SO4w3 · 1958–2009. Sänger, Tänzer & Komponist, ›Thriller‹, King of Pop. Das Gürteltier, das eine gestohlene Kindheit nie ganz nachholen konnte – gepanzert von Perfektion, verletzlich im Innersten. Tierentsprechung: Gürteltier.",
    tags:["Musik"], gender:"m"},
  { route:"beruehmte-hans-christian-andersen", name:"Hans Christian Andersen", added:"2026-08-30", subtyp:"SO4w3",
    heading:"Hans Christian Andersen – Sozialer Typ 4",
    teaser:"SO4w3 · 1805–1875. Schriftsteller, Märchendichter. Vom belächelten Schuhmachersohn zum meistgereisten, meistübersetzten Dichter seiner Zeit – und doch das hässliche Entlein, das sich nie ganz zugehörig fühlte. Tierentsprechung: Gürteltier.",
    land:"Dänemark", tags:["Literatur"], gender:"m"},
  { route:"beruehmte-cat-stevens", name:"Cat Stevens / Yusuf Islam", added:"2026-08-25", subtyp:"SO4w3",
    heading:"Cat Stevens / Yusuf Islam – Sozialer Typ 4",
    teaser:"SO4w3 · geb. 1948. Britischer Musiker. Nach einem Beinahe-Ertrinken 1976 Konversion zum Islam, Rückzug aus der Musikindustrie für fast drei Jahrzehnte, Gründung einer Schule und einer Hilfsorganisation. Das Gürteltier, das seine radikale Identitätssuche öffentlich vollzog, statt sie zu verbergen.",
    land:"Großbritannien", tags:["Musik"], gender:"m"},
  { route:"beruehmte-taddl", name:"Taddl (Daniel Tjarks)", subtyp:"SO4w3",
    heading:"Taddl \u2013 Sozialer Typ 4",
    teaser:"SO4w3 \u00b7 geb. 1996. YouTuber, K\u00fcnstler & Musiker. Das G\u00fcrteltier, das sich jahrelang hinter einer Maske aus Humor verbarg \u2013 und irgendwann begann, das Echte zu zeigen.",
    added:"2026-07-15", land:"Deutschland", tags:["Medien","Kunst"] , gender:"m"},
  { route:"beruehmte-til-schweiger", name:"Til Schweiger", subtyp:"SO4w3",
    heading:"Til Schweiger \u2013 Sozialer Typ 4",
    teaser:"SO4w3 \u00b7 geb. 1963. Schauspieler, Regisseur & Produzent. Das G\u00fcrteltier, das sich hinter einer Maske aus Coolness verbirgt \u2013 und darunter eine tiefe Sehnsucht nach echter Anerkennung tr\u00e4gt.",
    added:"2026-07-15", land:"Deutschland", tags:["Film","Kunst"] , gender:"m"},
  { route:"beruehmte-johnny-depp", name:"Johnny Depp", added:"2026-08-09", subtyp:"SO4w3",
    heading:"Johnny Depp \u2013 Sozialer Typ 4",
    teaser:"SO4w3 \u00b7 geb. 1963. Schauspieler und Musiker. Captain Jack Sparrow, Edward mit den Scherenh\u00e4nden, Hollywood Vampires. Das G\u00fcrteltier, das sein Anderssein nie versteckte, sondern zur schillerndsten B\u00fchnenfigur seiner Zeit machte.",
    land:"USA", tags:["Film","Musik"], gender:"m"},
  { route:"beruehmte-hugh-grant", name:"Hugh Grant", added:"2026-08-19", subtyp:"SO4w3",
    heading:"Hugh Grant \u2013 Sozialer Typ 4",
    teaser:"SO4w3 \u00b7 geb. 1960. Schauspieler. Vom stotternden romantischen Helden zum abgr\u00fcndigen Charakterdarsteller. Das G\u00fcrteltier, das seine Unsicherheit zum Markenzeichen machte.",
    land:"Gro\u00dfbritannien", tags:["Film"], gender:"m"},
{ route:"beruehmte-leonard-cohen", name:"Leonard Cohen", added:"2026-08-24", subtyp:"SO4w5",
    heading:"Leonard Cohen – Sozialer Typ 4",
    teaser:"SO4w5 · 1934–2016. Kanadischer Musiker und Dichter, Hallelujah. Sechs Jahre als Zen-Mönch im Kloster, nach Veruntreuung durch seine Managerin mit 73 zur erfolgreichsten Welttournee seiner Karriere zurückgekehrt. Tierentsprechung: Gürteltier.",
    land:"Kanada", tags:["Musik","Literatur"], gender:"m"},
  { route:"beruehmte-john-lennon", name:"John Lennon", subtyp:"SO4w5",
    heading:"John Lennon \u2013 Sozialer Typ 4",
    teaser:"SO4w5 \u00b7 1940\u20131980. Musiker, Komponist, Friedensaktivist, Mitbegr\u00fcnder der Beatles. Das G\u00fcrteltier, das die Welt fragte: Stell Dir vor, es w\u00e4re Frieden.",
    tags:["Musik"] , gender:"m"},
  { route:"beruehmte-javier-parisi", name:"Javier Parisi", added:"2026-08-01", subtyp:"SO4w5",
    heading:"Javier Parisi \u2013 Sozialer Typ 4",
    teaser:"SO4w5 \u00b7 geb. 1980. Musiker, weltweit bekanntestes John-Lennon-Double. Von der Kindheit in Lan\u00fas bis zum Auftritt in den Abbey Road Studios \u2013 das G\u00fcrteltier, das sich so lange mit einem Vorbild vergleicht, bis es darin die eigene B\u00fchne findet. Tierentsprechung: G\u00fcrteltier.",
    tags:["Musik"] , gender:"m"},
  { route:"beruehmte-fiona-apple", name:"Fiona Apple", added:"2026-08-01", subtyp:"SO4w5",
    heading:"Fiona Apple \u2013 Sozialer Typ 4",
    teaser:"SO4w5 \u00b7 geb. 1977. Musikerin & Songwriterin. Von der MTV-Award-Rede 1997 bis zu \u203aFetch the Bolt Cutters\u2039 \u2013 das G\u00fcrteltier, das Scham in eine schonungslos ehrliche Sprache verwandelt.",
    land:"Großbritannien", tags:["Musik"] , gender:"f"},
  { route:"beruehmte-edgar-allan-poe", name:"Edgar Allan Poe", added:"2026-08-09", subtyp:"SO4w5",
    heading:"Edgar Allan Poe \u2013 Sozialer Typ 4",
    teaser:"SO4w5 \u00b7 1809\u20131849. Amerikanischer Schriftsteller, Erfinder der Detektivgeschichte, Meister des literarischen Schauerlichen. Der Rabe (The Raven), Das verr\u00e4terische Herz (The Tell-Tale Heart). Das G\u00fcrteltier, dessen Panzer aus Schmerz und Isolation zur Kunstform wurde.",
    land:"USA", tags:["Literatur"], gender:"m"},
  { route:"beruehmte-heraklit", name:"Heraklit", added:"2026-08-14", subtyp:"SO4w5",
    heading:"Heraklit – Sozialer Typ 4",
    teaser:"SO4w5 · ca. 535–475 v. Chr. Griechischer Philosoph aus Ephesos, ›der Dunkle‹. Panta rhei, Logos, Einheit der Gegensätze. Das Gürteltier mit Fünferflügel: Abgrenzung von der Menge, Bedeutung durch kryptische, tiefe Einsicht. Tierentsprechung: Gürteltier.",
    tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-hippokrates-von-kos", name:"Hippokrates von Kos", added:"2026-08-13", subtyp:"SO4w5",
    heading:"Hippokrates von Kos – Sozialer Typ 4",
    teaser:"SO4w5 · ca. 460–370 v. Chr. Griechischer Arzt, ›Vater der Medizin‹. Hippokratischer Eid, Vier-Säfte-Lehre, systematische Fallgeschichten. Das Gürteltier mit Fünferflügel: Abgrenzung von der Tempelmedizin, Bedeutung durch genaue Beobachtung. Tierentsprechung: Gürteltier.",
    tags:["Geschichte","Medizin"], gender:"m"},
  { route:"beruehmte-gustav-mahler", name:"Gustav Mahler", added:"2026-08-09", subtyp:"SO4w5",
    heading:"Gustav Mahler \u2013 Sozialer Typ 4",
    teaser:"SO4w5 \u00b7 1860\u20131911. \u00d6sterreichischer Komponist und Dirigent, Direktor der Wiener Hofoper. Sinfonien, Kindertotenlieder, Das Lied von der Erde. Das G\u00fcrteltier, das existenzielles Leid in monumentale, alles umfassende Klangwelten \u00fcbersetzte.",
    land:"Österreich", tags:["Musik"], gender:"m"},
  { route:"beruehmte-reinhard-mey", name:"Reinhard Mey", added:"2026-08-25", subtyp:"SE6w5",
    heading:"Reinhard Mey – Selbsterhaltender Typ 6",
    teaser:"SE6w5 · geb. 1942. Deutscher Liedermacher, seit über fünf Jahrzehnten auf der Bühne. Versteht sich selbst als Chronist und Beobachter, genaue und warmherzige Texte, seit den 1990ern zunehmend gesellschaftskritisch. Das Kaninchen mit Fünferflügel: wachsame Beobachtung, konsequent geschütztes Privatleben, Privatpilot mit Faible für Sicherheitsprozeduren.",
    land:"Deutschland", tags:["Musik"], gender:"m"},
  { route:"beruehmte-marcel-proust", name:"Marcel Proust", added:"2026-08-09", subtyp:"SO4w5",
    heading:"Marcel Proust \u2013 Sozialer Typ 4",
    teaser:"SO4w5 \u00b7 1871\u20131922. Franz\u00f6sischer Schriftsteller. Auf der Suche nach der verlorenen Zeit. Das G\u00fcrteltier, das sich aus der Gesellschaft zur\u00fcckzog, um ihre fl\u00fcchtige Erinnerung in ein unverg\u00e4ngliches literarisches Bauwerk zu verwandeln.",
    land:"Frankreich", tags:["Literatur"], gender:"m"},
  { route:"beruehmte-mariella-superina", name:"Dr. Mariella Superina", added:"2026-08-18", subtyp:"SO4w5",
    heading:"Dr. Mariella Superina \u2013 Sozialer Typ 4",
    teaser:"SO4w5 \u00b7 Schweizer Tier\u00e4rztin und Wissenschaftlerin, seit \u00fcber 20 Jahren die weltweit f\u00fchrende G\u00fcrteltierforscherin, Vorsitzende der IUCN-Spezialistengruppe f\u00fcr G\u00fcrteltiere. Weltweit anerkannte Autorit\u00e4t f\u00fcr ausgerechnet das eigene archetypische Tier. Tierentsprechung: G\u00fcrteltier.",
    land:"Schweiz", tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-lauren-gardner", name:"Prof. Lauren Gardner", added:"2026-08-19", subtyp:"SO4w5",
    heading:"Prof. Lauren Gardner – Sozialer Typ 4",
    teaser:"SO4w5 · US-amerikanische Ingenieurin und Epidemiologin, Johns Hopkins University. Schöpferin des weltweit meistgenutzten COVID-19-Dashboards, TIME-100-Mitglied 2020. Verantwortung statt Sichtbarkeit als Antrieb. Tierentsprechung: Gürteltier.",
    land:"USA", tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-ajeet-kaur", name:"Ajeet Kaur", added:"2026-08-19", subtyp:"SO4w5",
    heading:"Ajeet Kaur – Sozialer Typ 4",
    teaser:"SO4w5 · US-amerikanische Sängerin und Mantra-Künstlerin. Chronische Krankheit seit Kindheit, Musik als Zufluchtsort und Heilungsweg für sich und andere. Tierentsprechung: Gürteltier.",
    land:"USA", tags:["Musik"], gender:"f"},
{ route:"beruehmte-bill-kaulitz", name:"Bill Kaulitz", added:"2026-08-24", subtyp:"SX4w3",
    heading:"Bill Kaulitz – Sexueller Typ 4",
    teaser:"SX4w3 · geb. 1989. Deutscher Musiker, Model und Designer, Frontmann von Tokio Hotel. Verwandelte eine auffällige Stimme und ein auffälliges Aussehen in eine internationale Karriere zwischen Musik, Mode und queerer Sichtbarkeit. Tierentsprechung: Chihuahua.",
    land:"Deutschland", tags:["Musik","Mode"], gender:"m"},
  { route:"beruehmte-voltaire", name:"Voltaire", added:"2026-08-14", subtyp:"SX4w3",
    heading:"Voltaire – Sexueller Typ 4",
    teaser:"SX4w3 · 1694–1778. Französischer Schriftsteller und Philosoph der Aufklärung. Bastille-Haft, Fall Calas, ›Candide‹, Fehde mit Rousseau. Der Chihuahua mit Dreierflügel: gekränkter Stolz als Antrieb für lebenslangen Kampf gegen Ungerechtigkeit. Tierentsprechung: Chihuahua.",
    land:"Irland", tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-freddie-mercury", name:"Freddie Mercury", subtyp:"SX4w3",
    heading:"Freddie Mercury \u2013 Sexueller Typ 4",
    teaser:"SX4w3 \u00b7 1946\u20131991. Rocks\u00e4nger, Songwriter, Mitbegr\u00fcnder von Queen. Bohemian Rhapsody, Live Aid 1985. Der Chihuahua, der keine Angst kannte \u2013 und der B\u00fchne eine Heimat gab.",
    land:"Großbritannien", tags:["Musik"] , gender:"m"},
  { route:"beruehmte-rihanna", name:"Rihanna", added:"2026-07-21", subtyp:"SX4w3",
    heading:"Rihanna \u2013 Sexueller Typ 4",
    teaser:"SX4w3 \xb7 geb. 1988, Barbados. S\xe4ngerin, Unternehmerin, Stil-Ikone. Umbrella, Diamonds, Fenty Beauty. Der Chihuahua aus Bridgetown, der die Sch\u00f6nheitsindustrie auf den Kopf stellte \u2013 roh, unerschrocken, unvergleichlich.",
    land:"Barbados", tags:["Musik","Business"], gender:"f"},
  { route:"beruehmte-billie-eilish", name:"Billie Eilish", added:"2026-08-01", subtyp:"SX4w3",
    heading:"Billie Eilish \u2013 Sexueller Typ 4",
    teaser:"SX4w3 \u00b7 geb. 2001. S\u00e4ngerin, Songwriterin. Vom SoundCloud-Upload mit vierzehn bis zum vierfachen Grammy-Sweep und zwei Oscars \u2013 der Chihuahua, der fl\u00fcstert statt zu schreien und gerade darin unausweichlich wird.",
    land:"USA", tags:["Musik"], gender:"f"},
  { route:"beruehmte-paris-hilton", name:"Paris Hilton", added:"2026-08-18", subtyp:"SX4w3",
    heading:"Paris Hilton \u2013 Sexueller Typ 4",
    teaser:"SX4w3 \u00b7 geb. 1981. Erbin, Unternehmerin, Reality-TV-Pionierin. \u00dcber ein Jahrzehnt an der Seite ihres ber\u00fchmtesten Begleiters, des Chihuahuas Tinkerbell. Eine Kunstfigur als Schutzschild, hinter dem sich jahrzehntelang eine ganz andere, verletzlichere Person verbarg. Tierentsprechung: Chihuahua.",
    tags:["Medien","Wirtschaft"], gender:"f"},
  { route:"beruehmte-ana-de-armas", name:"Ana de Armas", subtyp:"SX4w5",
    heading:"Ana de Armas \u2013 Sexueller Typ 4",
    teaser:"SX4w5 \u00b7 geb. 1988. Schauspielerin. Knives Out, Blonde. Der Chihuahua, der sich vor keiner B\u00fchne f\u00fcrchtet \u2013 und der dabei nie vergisst, woher er kommt.",
    land:"Kuba", tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-linda-leinweber", name:"Linda Leinweber", added:"2026-07-21", subtyp:"SX4w5",
    heading:"Linda Leinweber \u2013 Sexueller Typ 4",
    teaser:"SX4w5 \xb7 Psychologin, Autorin, Coach, Gr\xfcnderin von Poise. \u201eFrei und trotzdem verbunden\u201c. Der Chihuahua, der den eigenen Schmerz zur Pr\xe4zision gemacht hat \u2013 und Menschen lehrt, hinzuschauen, bevor es zu sp\xe4t ist.",
    land:"Deutschland", tags:["Psychologie","Coaching"], gender:"f"},
  { route:"beruehmte-dante-alighieri", name:"Dante Alighieri", added:"2026-08-14", subtyp:"SX4w5",
    heading:"Dante Alighieri – Sexueller Typ 4",
    teaser:"SX4w5 · 1265–1321. Italienischer Dichter, Göttliche Komödie. Verbannung aus Florenz, unerfüllte Liebe zu Beatrice, politische Feinde namentlich in der Hölle verewigt. Der Chihuahua mit Fünferflügel: persönlicher Schmerz, verwandelt in ein enzyklopädisches Weltgericht. Tierentsprechung: Chihuahua.",
    land:"Italien", tags:["Geschichte","Literatur"], gender:"m"},
  { route:"beruehmte-claude-debussy", name:"Claude Debussy", added:"2026-08-01", subtyp:"SX4w5",
    heading:"Claude Debussy \u2013 Sexueller Typ 4",
    teaser:"SX4w5 \u00b7 1862\u20131918. Komponist, Begr\u00fcnder der musikalischen Moderne. Clair de Lune, La Mer, Pell\u00e9as et M\u00e9lisande. Der Chihuahua, der die europ\u00e4ische Musik von den Fundamenten her neu dachte \u2013 und dabei nie aufh\u00f6rte, gegen die Konvention zu rivalisieren.",
    land:"Frankreich", tags:["Musik"], gender:"m"},
  { route:"beruehmte-marquis-de-sade", name:"Marquis de Sade", subtyp:"SX4w5",
    heading:"Marquis de Sade \u2013 Sexueller Typ 4",
    teaser:"SX4w5 \u00b7 1740\u20131814. Franz\u00f6sischer Adliger, Schriftsteller, Philosoph. Justine, Die 120 Tage von Sodom. Der Chihuahua, der 32 Jahre seines Lebens hinter Gittern verbrachte \u2013 und dessen Name zum Synonym f\u00fcr den radikalsten aller Tabubr\u00fcche wurde.",
    tags:["Literatur","Philosophie"], gender:"m"},
  { route:"beruehmte-christian-raetsch", name:"Dr. Christian R\u00e4tsch", subtyp:"SE5w4",
    heading:"Christian R\u00e4tsch \u2013 Selbsterhaltender Typ 5",
    teaser:"SE5w4 \u00b7 1957\u20132022. Ethnologe, Ethnopharmakologe. Enzyklop\u00e4die der psychoaktiven Pflanzen. Die Eule, die in der Dunkelheit sieht \u2013 und das Wissen bewahrt, das andere nicht sehen wollen.",
    land:"Deutschland", tags:["Wissenschaft"] , gender:"m"},
  { route:"beruehmte-xu-bing", name:"Xu Bing", added:"2026-08-01", subtyp:"SE5w4",
    heading:"Xu Bing \u2013 Selbsterhaltender Typ 5",
    teaser:"SE5w4 \u00b7 geb. 1955. Konzeptk\u00fcnstler, Kalligraf. Vier Jahre f\u00fcr viertausend erfundene Schriftzeichen: \u2039Book from the Sky\u203a. Die Eule, die die Sprache selbst zur Burg macht.",
    land:"China", tags:["Kunst"], gender:"m"},
  { route:"beruehmte-blaise-pascal", name:"Blaise Pascal", added:"2026-08-30", subtyp:"SX5w6",
    heading:"Blaise Pascal \u2013 Sexueller Typ 5",
    teaser:"SX5w6 \u00b7 1623\u20131662. Mathematiker, Physiker, Philosoph. Rechenmaschine mit 19, mystische \u203aNacht des Feuers\u2039 1654, die Pascalsche Wette. Der Igel, der sich einmal ganz \u00f6ffnete \u2013 und danach nie mehr derselbe war.",
    land:"Frankreich", tags:["Wissenschaft","Philosophie"], gender:"m"},
  { route:"beruehmte-franz-kafka", name:"Franz Kafka", added:"2026-08-15", subtyp:"SE5w4",
    heading:"Franz Kafka – Selbsterhaltender Typ 5",
    teaser:"SE5w4 · 1883–1924. Schriftsteller. Der Prozess, Das Schloss, Die Verwandlung. Die Eule, die nachts an ihren Albträumen schrieb und ihr Werk am liebsten verbrannt hätte. Tierentsprechung: Eule.",
    tags:["Literatur"], gender:"m"},
  { route:"beruehmte-ingo-zimmermann", name:"Prof. Dr. Ingo Zimmermann", added:"2026-08-18", subtyp:"SE5w4",
    heading:"Prof. Dr. Ingo Zimmermann – Selbsterhaltender Typ 5",
    teaser:"SE5w4 · Professor für Soziale Arbeit, Psychotherapeut, Waldachtsamkeits-Trainer. Zieht mit seinem von Hand aufgezogenen Waldkauz Hugo in die Vorlesung – ein Mann, der seine eigene Tierentsprechung offenbar unbewusst erkannt hat und sie seit Jahren an seiner Seite trägt. Tierentsprechung: Eule.",
    land:"Deutschland", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-peter-lustig", name:"Peter Lustig", subtyp:"SE5w6",
    heading:"Peter Lustig \u2013 Selbsterhaltender Typ 5",
    teaser:"SE5w6 \u00b7 1937\u20132016. Fernsehmoderator, Kinderbuchautor. L\u00f6wenzahn. Der Wohnwagen als Burg \u2013 die Eule, die Kindern zeigt, wie man mit wachem Blick und wenig Aufwand die Welt versteht.",
    land:"Deutschland", tags:["Medien","Wissenschaft"] , gender:"m"},
  { route:"beruehmte-warren-buffett", name:"Warren Buffett", added:"2026-07-21", subtyp:"SE5w6",
    heading:"Warren Buffett \u2013 Selbsterhaltender Typ 5",
    teaser:"SE5w6 \xb7 geb. 1930, Omaha. Investor, Unternehmer, Orakel von Omaha. F\xfcnfhundert Seiten am Tag, dasselbe Haus seit 1958, 99 Prozent des Verm\xf6gens verschenkt. Die Eule, die wartet, bis sie wirklich verstanden hat.",
    land:"USA", tags:["Business","Finanzen"], gender:"m"},
  { route:"beruehmte-vera-birkenbihl", name:"Vera Birkenbihl", added:"2026-07-21", subtyp:"SE5w6",
    heading:"Vera Birkenbihl \u2013 Selbsterhaltender Typ 5",
    teaser:"SE5w6 \xb7 1946\u20132011. Trainerin, Buchautorin, Vordenkerin. \xdcber f\xfcnfzig B\xfccher, Millionen Leser, ein System: gehirngerechtes Lernen. Die Eule, die wusste, wie das Denken denkt \u2013 und daraus Schule machte.",
    land:"Deutschland", tags:["Bildung","B\xfccher"], gender:"f"},
  { route:"beruehmte-charles-darwin", name:"Charles Darwin", added:"2026-08-01", subtyp:"SE5w6",
    heading:"Charles Darwin \u2013 Selbsterhaltender Typ 5",
    teaser:"SE5w6 \xb7 1809\u20131882. Naturforscher, Begr\u00fcnder der Evolutionstheorie. On the Origin of Species. Die Eule, die zwanzig Jahre wartete, bevor sie ihre Erkenntnis in die Welt trug.",
    land:"Großbritannien", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-carl-tanzler", name:"Carl Tanzler", added:"2026-08-16", subtyp:"SE5w6",
    heading:"Carl Tanzler – Selbsterhaltender Typ 5",
    teaser:"SE5w6 · 1877–1952. Radiologe, bewahrte den Leichnam der Patientin Elena de Hoyos sieben Jahre lang in seinem Haus auf. Nie verurteilt, da die Verjährungsfrist ablief. Die Eule, die im Dunkeln blieb.",
    tags:["Geschichte"], gender:"m"},
  { route:"beruehmte-marie-curie", name:"Marie Curie", added:"2026-08-17", subtyp:"SE5w6",
    heading:"Marie Curie – Selbsterhaltende Typ 5",
    teaser:"SE5w6 · 1867–1934. Einzige Person mit Nobelpreisen in zwei Naturwissenschaften (Physik 1903, Chemie 1911). Entdeckerin von Polonium und Radium, starb an den Folgen jahrzehntelanger Strahlenexposition. Sicherheit durch Wissen, Loyalität über den Tod hinaus. Tierentsprechung: Eule.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-rene-descartes", name:"René Descartes", added:"2026-08-14", subtyp:"SE5w6",
    heading:"René Descartes – Selbsterhaltender Typ 5",
    teaser:"SE5w6 · 1596–1650. Französischer Philosoph und Mathematiker, Begründer des Rationalismus. Cogito ergo sum, methodischer Zweifel, über zwanzig Umzüge in den Niederlanden. Die Eule mit Sechserflügel: radikale Vorsicht auf der Suche nach absoluter Gewissheit. Tierentsprechung: Eule.",
    land:"Frankreich", tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-hermann-hesse", name:"Hermann Hesse", added:"2026-08-15", subtyp:"SE5w6",
    heading:"Hermann Hesse – Selbsterhaltender Typ 5",
    teaser:"SE5w6 · 1877–1962. Schriftsteller, Nobelpreisträger. Vierzig Jahre zurückgezogen in Montagnola – Siddhartha, Der Steppenwolf, Das Glasperlenspiel. Die Eule, die den Rückzug zur Kunstform machte. Tierentsprechung: Eule.",
    land:"Deutschland/Schweiz", tags:["Literatur"], gender:"m"},
  { route:"beruehmte-spinoza", name:"Baruch de Spinoza", added:"2026-08-10", subtyp:"SE5w6",
    heading:"Baruch de Spinoza \u2013 Selbsterhaltender Typ 5",
    teaser:"SE5w6 \xb7 1632\u20131677. Rationalistischer Philosoph, Verfasser der Ethica. Zur\u00fcckgezogen in Amsterdam und Den Haag lebend, schliff er Linsen zum Lebensunterhalt und dachte die radikalste Gottesvorstellung seiner Zeit zu Ende. Die Eule, die sich aus jeder Gemeinschaft zur\u00fcckzog, um klarer zu sehen.",
    tags:["Philosophie"], gender:"m"},
  { route:"beruehmte-carl-friedrich-gauss", name:"Carl Friedrich Gau\u00df", added:"2026-08-18", subtyp:"SE5w6",
    heading:"Carl Friedrich Gau\u00df \u2013 Selbsterhaltender Typ 5",
    teaser:"SE5w6 \u00b7 1777\u20131855. Mathematiker, Astronom, Physiker. Normalverteilung, Gau\u00df'sches Eliminationsverfahren, Grundlagenarbeit f\u00fcr fast jede moderne Naturwissenschaft. Ver\u00f6ffentlichte nur, was vollkommen ausgereift war \u2013 \u203apauca sed matura\u2039, wenig, aber reif. Tierentsprechung: Eule.",
    land:"Deutschland", tags:["Wissenschaft","Geschichte"], gender:"m"},
  { route:"beruehmte-albert-einstein", name:"Dr. Albert Einstein", added:"2026-08-09", subtyp:"SO5w4",
    heading:"Albert Einstein \u2013 Sozialer Typ 5",
    teaser:"SO5w4 \u00b7 1879\u20131955. Physiker, Nobelpreistr\u00e4ger, Begr\u00fcnder der Relativit\u00e4tstheorie. Der Oktopus, der im Patentamt allein die Formeln des Universums entschl\u00fcsselte \u2013 und sein Wissen der Menschheit schenkte.",
    land:"Deutschland/USA", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-gertrude-elion", name:"Gertrude Belle Elion", subtyp:"SO5w4",
    heading:"Gertrude Belle Elion \u2013 Sozialer Typ 5",
    teaser:"SO5w4 \u00b7 1918\u20131999. Biochemikerin, Pharmakologin. Nobelpreis 1988. Der Oktopus, der mit acht Armen gleichzeitig denkt \u2013 und Millionen von Menschen das Leben gerettet hat, ohne dass die meisten je ihren Namen kannten.",
    land:"USA", tags:["Wissenschaft"] , gender:"f"},
  { route:"beruehmte-claudio-naranjo", name:"Dr. Claudio Naranjo", subtyp:"SO5w4",
    heading:"Claudio Naranjo \u2013 Sozialer Typ 5",
    teaser:"SO5w4 \u00b7 1932\u20132019. Psychiater, Autor, Enneagramm- und Meditationslehrer. Begr\u00fcnder des Systems der 27 Subtypen \u2013 das Fundament, auf dem das gesamte moderne Subtypen-Verst\u00e4ndnis ruht. Der Oktopus, der mit acht Armen die Seele der Menschheit kartografiert hat. Tierentsprechung: Oktopus.",
    tags:["Wissenschaft"] , gender:"m"},
  { route:"beruehmte-leonardo-da-vinci", name:"Leonardo da Vinci", added:"2026-08-09", subtyp:"SO5w4",
    heading:"Leonardo da Vinci \u2013 Sozialer Typ 5",
    teaser:"SO5w4 \u00b7 1452\u20131519. Italienischer Universalgelehrter, Maler, Erfinder. Mona Lisa, Vitruvianischer Mensch, \u00fcber 13.000 Seiten Notizb\u00fccher. Der Oktopus, der mit acht Denkarmen Kunst, Wissenschaft und Technik zugleich erforschte.",
    land:"Italien", tags:["Kunst","Wissenschaft"], gender:"m"},
  { route:"beruehmte-georg-wilhelm-friedrich-hegel", name:"Georg Wilhelm Friedrich Hegel", added:"2026-08-14", subtyp:"SO5w6",
    heading:"Georg Wilhelm Friedrich Hegel – Sozialer Typ 5",
    teaser:"SO5w6 · 1770–1831. Deutscher Philosoph, Begründer des Deutschen Idealismus in seiner Vollendung. Phänomenologie des Geistes, Dialektik, Rechtsphilosophie. Der Oktopus mit Sechserflügel: ein alles umfassendes System, Sicherheit durch Staat und Lehrautorität. Tierentsprechung: Oktopus.",
    land:"Deutschland", tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-stephen-hawking", name:"Stephen Hawking", added:"2026-08-31", subtyp:"SO5w6",
    heading:"Stephen Hawking – Sozialer Typ 5",
    teaser:"SO5w6 · 1942–2018. Britischer theoretischer Physiker, Arbeiten zu Schwarzen Löchern und der Hawking-Strahlung, Weltbestseller ›Eine kurze Geschichte der Zeit‹. Der Oktopus mit Sechserflügel: komplexestes physikalisches Wissen für ein Millionenpublikum übersetzt, bei fortschreitender ALS-Lähmung ab dem 21. Lebensjahr. Tierentsprechung: Oktopus.",
    land:"Großbritannien", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-isaac-newton", name:"Isaac Newton", added:"2026-08-14", subtyp:"SO5w6",
    heading:"Isaac Newton – Sozialer Typ 5",
    teaser:"SO5w6 · 1642/43–1727. Englischer Physiker und Mathematiker, Principia Mathematica, Gravitationsgesetz. Jahrzehntelang verborgene Alchemie- und Theologiestudien, Prioritätsstreit mit Leibniz, Präsident der Royal Society. Der Oktopus mit Sechserflügel: Wissen als Machtinstrument, Sicherheit durch institutionelle Kontrolle. Tierentsprechung: Oktopus.",
    land:"Frankreich", tags:["Geschichte","Wissenschaft"], gender:"m"},
  { route:"beruehmte-pythagoras", name:"Pythagoras", added:"2026-08-14", subtyp:"SO5w6",
    heading:"Pythagoras – Sozialer Typ 5",
    teaser:"SO5w6 · ca. 570–495 v. Chr. Griechischer Philosoph und Mathematiker, Gründer des Bundes von Kroton. Satz des Pythagoras, Sphärenharmonie, gestuftes Geheimwissen. Der Oktopus mit Sechserflügel: Wissen als Orden, Sicherheit durch Regel und Loyalität. Tierentsprechung: Oktopus.",
    tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-jennifer-mather", name:"Jennifer Mather", added:"2026-08-17", subtyp:"SO5w6",
    heading:"Jennifer Mather – Sozialer Typ 5",
    teaser:"SO5w6 · geb. 1943. Verhaltensforscherin, weltweit führende Oktopus-Kognitionsforscherin, wissenschaftliche Beraterin von „My Octopus Teacher“. Der Oktopus, der ein Leben lang den Oktopus erforschte – Tierentsprechung und Lebenswerk in seltener Übereinstimmung.",
    land:"Kanada", tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-bill-gates", name:"Bill Gates", subtyp:"SO5w6",
    heading:"Bill Gates \u2013 Sozialer Typ 5",
    teaser:"SO5w6 \u00b7 geb. 1955. Microsoft-Gr\u00fcnder, Milliard\u00e4r. Investor in Industrie, Landwirtschaft und globale Gesundheitspolitik. Der Oktopus, der mit acht Armen die Welt umfasst \u2013 und nicht mehr losl\u00e4sst.",
    land:"USA", tags:["Wirtschaft"] , gender:"m"},
  { route:"beruehmte-guenther-jauch", name:"G\xfcnther Jauch", added:"2026-07-21", subtyp:"SO5w6",
    heading:"G\xfcnther Jauch \u2013 Sozialer Typ 5",
    teaser:"SO5w6 \xb7 geb. 1956, M\xfcnster. Moderator, Journalist, Produzent. Wer wird Million\xe4r?, stern TV, ARD-Sonntagstalk. Der Oktopus, der Jahrzehnte lang das Wissen der Nation moderiert hat \u2013 und dabei selbst nie wirklich sichtbar wurde.",
    land:"Deutschland", tags:["Medien","Fernsehen"], gender:"m"},
  { route:"beruehmte-dirk-rossmann", name:"Dirk Rossmann", added:"2026-08-27", subtyp:"SO5w6",
    heading:"Dirk Rossmann \u2013 Sozialer Typ 5",
    teaser:"SO5w6 \xb7 geb. 1946, Hannover. Unternehmer, Gr\xfcnder der Drogeriemarktkette ROSSMANN. Schrieb eine Oktopus-Buchreihe \u2013 unwissentlich exakt sein eigenes Tiertotem.",
    land:"Deutschland", tags:["Wirtschaft"], gender:"m"},
  { route:"beruehmte-eckhard-freise", name:"Eckhard Freise", added:"2026-08-27", subtyp:"SO5w6",
    heading:"Eckhard Freise \u2013 Sozialer Typ 5",
    teaser:"SO5w6 \xb7 geb. 1944. Historiker, Professor f\xfcr mittelalterliche Geschichte, Experte der Hersfelder Memorial\xfcberlieferung. Erster Million\xe4r bei Wer wird Million\xe4r?, 2. Dezember 2000.",
    land:"Deutschland", tags:["Wissenschaft","Medien"], gender:"m"},
  { route:"beruehmte-frederic-chopin", name:"Fr\xe9d\xe9ric Chopin", added:"2026-07-21", subtyp:"SX5w4",
    heading:"Fr\xe9d\xe9ric Chopin \u2013 Sexueller Typ 5",
    teaser:"SX5w4 \xb7 1810\u20131849. Komponist, Pianist. Nocturnes, \xc9tuden, Mazurken, Balladen. Der Igel, der fast nie auftrat \u2013 und dessen Musik zweihundert Jahre sp\xe4ter noch in jedem Konzertsaal klingt.",
    land:"Russland", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-jean-jacques-rousseau", name:"Jean-Jacques Rousseau", added:"2026-08-30", subtyp:"SX5w4",
    heading:"Jean-Jacques Rousseau \u2013 Sexueller Typ 5",
    teaser:"SX5w4 \u00b7 1712\u20131778. Philosoph, Schriftsteller. \u203aDer Gesellschaftsvertrag\u2039, \u203aBekenntnisse\u2039 \u2013 die radikalste literarische Selbstoffenlegung ihrer Zeit. Der Igel, der sich einmal ganz \u00f6ffnete, w\u00e4hrend er die eigenen f\u00fcnf Kinder ins Findelhaus gab.",
    land:"Schweiz/Frankreich", tags:["Philosophie","Literatur"], gender:"m"},
  { route:"beruehmte-taylor-swift", name:"Taylor Swift", subtyp:"SX5w4",
    heading:"Taylor Swift \u2013 Sexueller Typ 5",
    teaser:"SX5w4 \u00b7 geb. 1989. S\u00e4ngerin, Songwriterin, Gitarristin. Der Igel, der sich zusammenrollt \u2013 und dessen Stacheln aus Worten bestehen.",
    land:"USA", tags:["Musik"] , gender:"f"},
  { route:"beruehmte-tilda-swinton", name:"Tilda Swinton", added:"2026-08-01", subtyp:"SX5w4",
    heading:"Tilda Swinton \u2013 Sexueller Typ 5",
    teaser:"SX5w4 \u00b7 geb. 1960. Schauspielerin. Orlando, Michael Clayton, We Need to Talk About Kevin. Der Igel, der sich in jede Rolle so vollst\u00e4ndig verwandelt, dass niemand mehr wei\u00df, wo Tilda aufh\u00f6rt.",
    land:"Schottland", tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-buddha", name:"Siddhartha Gautama (Buddha)", added:"2026-08-07", subtyp:"SX5w4",
    heading:"Siddhartha Gautama (Buddha) \u2013 Sexueller Typ 5",
    teaser:"SX5w4 \u00b7 ca. 563\u2013483 v. Chr. Religionsstifter, Begr\u00fcnder des Buddhismus. Vom Palast in die radikale Suche nach der Ursache des Leidens \u2013 der Igel, der die Welt seziert, bis nur noch die Wahrheit \u00fcbrig bleibt. Tierentsprechung: Igel.",
    tags:["Religion","Philosophie"], gender:"m"},
  { route:"beruehmte-friedrich-nietzsche", name:"Friedrich Nietzsche", subtyp:"SX5w4",
    heading:"Friedrich Nietzsche \u2013 Sexueller Typ 5",
    teaser:"SX5w4 \u00b7 1844\u20131900. Philosoph. Also sprach Zarathustra, Jenseits von Gut und B\u00f6se, Ecce Homo. Der Igel, der sich in zehn Jahren v\u00f6lliger Zur\u00fcckgezogenheit ein Werk erschrieb, das die Philosophie bis in die Gegenwart ersch\u00fcttert.",
    land:"Russland", tags:["Philosophie"], gender:"m"},
  { route:"beruehmte-greta-garbo", name:"Greta Garbo", added:"2026-08-07", subtyp:"SX5w4",
    heading:"Greta Garbo \u2013 Sexueller Typ 5",
    teaser:"SX5w4 \u00b7 1905\u20131990. Schauspielerin, Hollywood-Ikone. Mit 36 Jahren kompletter R\u00fcckzug aus dem Filmgesch\u00e4ft. \u201eI want to be let alone.\u201c Der Igel, dessen Blick die Kinos\u00e4le verstummen lie\u00df \u2013 und der sich dann f\u00fcnfzig Jahre lang niemandem mehr zeigte.",
    land:"Schweden", tags:["Film"], gender:"f"},
  { route:"beruehmte-hugh-warwick", name:"Hugh Warwick", added:"2026-08-18", subtyp:"SX5w4",
    heading:"Hugh Warwick \u2013 Sexueller Typ 5",
    teaser:"SX5w4 \u00b7 Britischer \u00d6kologe, Autor und Sprecher der British Hedgehog Preservation Society. \u00dcber 30 Jahre fast ausschlie\u00dflich dem Igel gewidmet, genannt der \u201eIgelfl\u00fcsterer\u201c. Keine distanzierte Laborbeobachtung, sondern eine fast intime, lebenslange Beziehung zu einem einzigen Tier. Tierentsprechung: Igel.",
    land:"Großbritannien", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-mark-zuckerberg", name:"Mark Zuckerberg", added:"2026-07-15", subtyp:"SX5w6",
    heading:"Mark Zuckerberg \u2013 Sexueller Typ 5",
    teaser:"SX5w6 \u00b7 geb. 1984. CEO von Meta (Facebook, Instagram, WhatsApp). Der Igel, der das gr\u00f6\u00dfte soziale Netzwerk der Welt baute \u2013 und selbst darin kaum sichtbar ist.",
    land:"USA", tags:["Wirtschaft", "Technik"] , gender:"m"},
  { route:"beruehmte-edward-snowden", name:"Edward Snowden", subtyp:"SX5w6",
    heading:"Edward Snowden \u2013 Sexueller Typ 5",
    teaser:"SX5w6 \u00b7 geb. 1983. Whistleblower, ehem. NSA-Mitarbeiter. Permanent Record. Der Igel, der sich zusammenrollte \u2013 und dann alles preisgab, weil er es nicht mit sich tragen konnte.",
    land:"USA", tags:["Politik"] , gender:"m"},
  { route:"beruehmte-jodie-foster", name:"Jodie Foster", added:"2026-08-01", subtyp:"SX5w6",
    heading:"Jodie Foster \u2013 Sexueller Typ 5",
    teaser:"SX5w6 \u00b7 geb. 1962. Schauspielerin, Regisseurin. Das Schweigen der L\u00e4mmer, Contact, Nell. Der Igel, der sich niemandem zeigt, der es nicht verdient \u2013 und der sich dem, der es verdient, ganz zeigt.",
    land:"USA", tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-sundar-pichai", name:"Sundar Pichai", added:"2026-07-21", subtyp:"SE6w5",
    heading:"Sundar Pichai \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w5 \xb7 geb. 1972, Madurai. CEO von Google und Alphabet. Chrome, Android, Gemini. Das Kaninchen, das in einer Branche voller Egomanen durch Stille gewann \u2013 und l\xe4nger \xfcberlebt als der L\xf6we neben ihm.",
    land:"Indien/USA", tags:["Wirtschaft","Technik"], gender:"m"},
  { route:"beruehmte-fjodor-dostojewski", name:"Fjodor Dostojewski", subtyp:"SE6w5",
    heading:"Fjodor Dostojewski \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w5 \u00b7 1821\u20131881. Russischer Schriftsteller. Schuld und S\u00fchne, Die Br\u00fcder Karamasow, Der Idiot. Das Kaninchen, das eine Scheinhinrichtung, Sibirien und die Spielsucht \u00fcberlebte \u2013 und daraus die tiefsten Romane \u00fcber Angst, Schuld und Glauben schrieb, die die Weltliteratur kennt.",
    land:"Russland", tags:["Literatur","Philosophie"], gender:"m"},
  { route:"beruehmte-franz-schubert", name:"Franz Schubert", added:"2026-08-12", subtyp:"SE6w5",
    heading:"Franz Schubert \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w5 \u00b7 1797\u20131828. \u00d6sterreichischer Komponist. \u00dcber 600 Lieder, Winterreise, Die Unvollendete. Das Kaninchen, das seine Angst und Sehnsucht nach Geborgenheit in Musik verwandelte \u2013 im engen Kreis der Schubertiaden zu Hause, \u00f6ffentlich fast unsichtbar, mit 31 Jahren gestorben.",
    land:"Österreich", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-herbert-kickl", name:"Herbert Kickl", subtyp:"SE6w5",
    heading:"Herbert Kickl \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w5 \u00b7 geb. 1968. \u00d6sterreichischer Politiker, FP\u00d6-Parteiobmann. Das Kaninchen, das die Gefahr fr\u00fcher sp\u00fcrt als andere \u2013 und das gelernt hat, trotzdem aufrecht zu stehen.",
    land:"Österreich", tags:["Politik"] , gender:"m"},
  { route:"beruehmte-malaika-mihambo", name:"Malaika Mihambo", added:"2026-08-01", subtyp:"SE6w5",
    heading:"Malaika Mihambo \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w5 \u00b7 geb. 1994. Leichtathletin, Weitsprung. Olympiasiegerin Tokio 2021, zweifache Weltmeisterin. Das Kaninchen, das genug gepr\u00fcft hat, um im entscheidenden Moment zu springen.",
    land:"Deutschland", tags:["Sport"], gender:"f"},
  { route:"beruehmte-mahatma-gandhi", name:"Mahatma Gandhi", added:"2026-08-10", subtyp:"SE6w5",
    heading:"Mahatma Gandhi \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w5 \u00b7 1869\u20131948. Indischer Anwalt und Freiheitsk\u00e4mpfer. Ahimsa, Satyagraha, gewaltloser Widerstand gegen die britische Kolonialherrschaft. Das Kaninchen, das seine scheinbare Wehrlosigkeit in unangreifbare Kraft verwandelte und ein Weltreich ins Wanken brachte.",
    land:"Großbritannien", tags:["Politik","Geschichte"], gender:"m"},
  { route:"beruehmte-anne-mcbride", name:"Dr. Anne McBride", added:"2026-08-19", subtyp:"SE6w5",
    heading:"Dr. Anne McBride \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w5 \u00b7 Britische Verhaltensforscherin, Senior Lecturer in Southampton, Vorsitzende der International Society for Anthrozoology. Promovierte \u00fcber das Sozial- und Elternverhalten des Europ\u00e4ischen Wildkaninchens und \u00fcbersetzt seither Angst- und Sicherheitsbed\u00fcrfnisse von Tieren in klare Verhaltensregeln. Tierentsprechung: Kaninchen.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-klaus-j-behrendt", name:"Klaus J. Behrendt", added:"2026-08-25", subtyp:"SE6w5",
    heading:"Klaus J. Behrendt \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w5 \u00b7 geb. 1953. Schauspieler, seit 1997 \u00bbKommissar Schenk\u00ab im K\u00f6lner Tatort. Das Kaninchen mit F\u00fcnferfl\u00fcgel: wachsam, nachdenklich, offen \u00fcber eigene Selbstzweifel \u2013 der ruhende, w\u00e4gende Gegenpol zu seinem Tatort-Partner Ballauf.",
    land:"Deutschland", tags:["Film","Fernsehen"], gender:"m"},
  { route:"beruehmte-neil-armstrong", name:"Neil Armstrong", added:"2026-07-21", subtyp:"SE6w5",
    heading:"Neil Armstrong \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w5 \xb7 1930\u20132012. Pilot, Astronaut. Erster Mensch auf dem Mond, 20. Juli 1969. Das Kaninchen, das den au\xdferordentlichsten Schritt der Menschheitsgeschichte tat \u2013 und danach nur noch nach Hause wollte.",
    land:"USA", tags:["Geschichte","Wissenschaft","Astronaut"], gender:"m"},
  { route:"beruehmte-beatrice-chebet", name:"Beatrice Chebet", subtyp:"SE6w7",
    heading:"Beatrice Chebet \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w7 \u00b7 geb. 2000. Kenianische Langstreckenl\u00e4uferin. Doppel-Olympiasiegerin Paris 2024. Das Kaninchen, das nicht vor der Strecke flieht \u2013 sondern auf ihr nach Hause kommt.",
    tags:["Sport"] , gender:"f"},
  { route:"beruehmte-woody-allen", name:"Woody Allen", added:"2026-08-01", subtyp:"SE6w7",
    heading:"Woody Allen \u2013 Selbsterhaltender Typ 6",
    teaser:"SE6w7 \u00b7 geb. 1935. Regisseur, Drehbuchautor, Komiker. Der Stadtneurotiker, Manhattan, fast f\u00fcnfzig Filme. Das Kaninchen, das aus der eigenen Angst ein ganzes Lebenswerk gemacht hat.",
    land:"USA", tags:["Film"], gender:"m"},
  { route:"beruehmte-melanie-kreis", name:"Melanie Kreis", added:"2026-07-21", subtyp:"SO6w5",
    heading:"Melanie Kreis \u2013 Sozialer Typ 6",
    teaser:"SO6w5 \xb7 geb. 1971 in Bonn. Finanzvorst\xe4ndin (CFO) der DHL Group. Physikerin, McKinsey-Beraterin, DAX-Managerin. Das Erdm\xe4nnchen, das Wache h\xe4lt \u2013 f\xfcr einen der gr\xf6\xdften Logistikkonzerne der Welt.",
    land:"Deutschland", tags:["Wirtschaft","F\xfchrung"], gender:"f"},
  { route:"beruehmte-immanuel-kant", name:"Immanuel Kant", added:"2026-08-14", subtyp:"SO6w5",
    heading:"Immanuel Kant – Sozialer Typ 6",
    teaser:"SO6w5 · 1724–1804. Deutscher Philosoph, kategorischer Imperativ, Kritik der reinen Vernunft. Das Erdmännchen mit Fünferflügel: Pflicht als äußeres Gesetz, ein wasserdichtes System als Antwort auf Humes Skeptizismus. Tierentsprechung: Erdmännchen.",
    land:"China", tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-sigmund-freud", name:"Dr. Sigmund Freud", subtyp:"SO6w5",
    heading:"Sigmund Freud \u2013 Sozialer Typ 6",
    teaser:"SO6w5 \u00b7 1856\u20131939. Arzt, Neurophysiologe, Begr\u00fcnder der Psychoanalyse. Das Erdm\u00e4nnchen, das Wache h\u00e4lt \u2013 \u00fcber das, was im Dunkeln lauert.",
    tags:["Wissenschaft"] , gender:"m"},
  { route:"beruehmte-andy-reid", name:"Andy Reid", added:"2026-08-01", subtyp:"SO6w5",
    heading:"Andy Reid \u2013 Sozialer Typ 6",
    teaser:"SO6w5 \u00b7 geb. 1958. NFL-Head-Coach, Kansas City Chiefs. \u00dcber zwei Jahrzehnte dieselbe Grundstruktur, Hunderte Spielz\u00fcge im Kopf, drei Super-Bowl-Titel. Das Erdm\u00e4nnchen, das die Playbook-Wache nie verl\u00e4sst.",
    land:"USA", tags:["Sport","F\u00fchrung"], gender:"m"},
  { route:"beruehmte-marta-manser", name:"Prof. Dr. Marta Manser", added:"2026-08-19", subtyp:"SO6w5",
    heading:"Prof. Dr. Marta Manser \u2013 Sozialer Typ 6",
    teaser:"SO6w5 \u00b7 geb. 1962. Schweizer Verhaltensbiologin, Professorin an der Universit\u00e4t Z\u00fcrich, Leiterin des Kalahari Research Centre. Entschl\u00fcsselte das komplexe Warnrufsystem der Erdm\u00e4nnchen \u2013 ein Fr\u00fchwarnsystem f\u00fcr die ganze Gruppe. Tierentsprechung: Erdm\u00e4nnchen.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-tim-clutton-brock", name:"Prof. Tim Clutton-Brock", added:"2026-08-19", subtyp:"SO6w5",
    heading:"Prof. Tim Clutton-Brock \u2013 Sozialer Typ 6",
    teaser:"SO6w5 \u00b7 geb. 1946. Britischer Evolutionsbiologe, Professor in Cambridge, Gr\u00fcnder des Kalahari Meerkat Project. Jahrzehntelange Erforschung, warum Individuen der Gruppe dienen, statt sich selbst fortzupflanzen \u2013 kooperatives \u00dcberleben als Lebensthema. Tierentsprechung: Erdm\u00e4nnchen.",
    land:"Schottland", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-donata-hopfen", name:"Donata Hopfen", added:"2026-07-21", subtyp:"SO6w7",
    heading:"Donata Hopfen \u2013 Sozialer Typ 6",
    teaser:"SO6w7 \xb7 geb. 1976 in Hamburg. Unternehmensberaterin, Digitalstrategin, Ex-CEO der Bild und der DFL. Das Erdm\xe4nnchen, das vorausl\xe4uft &ndash; und der Gruppe den Weg freimacht.",
    land:"Deutschland", tags:["Wirtschaft","Medien","F\xfchrung"], gender:"f"},
  { route:"beruehmte-herbert-groenemeyer", name:"Herbert Gr\u00f6nemeyer", subtyp:"SO6w7",
    heading:"Herbert Gr\u00f6nemeyer \u2013 Sozialer Typ 6",
    teaser:"SO6w7 \u00b7 geb. 1956. Musiker, Komponist, Texter, Schauspieler. Bochum. Mensch. Das Erdm\u00e4nnchen, das nach jedem Verlust wieder aufsteht \u2013 und singt.",
    land:"Deutschland", tags:["Musik"] , gender:"m"},
  { route:"beruehmte-james-corden", name:"James Corden", added:"2026-08-01", subtyp:"SO6w7",
    heading:"James Corden \u2013 Sozialer Typ 6",
    teaser:"SO6w7 \u00b7 geb. 1978. Schauspieler, Moderator, \u2039The Late Late Show\u203a, \u2039Carpool Karaoke\u203a. Das Erdm\u00e4nnchen, das jeden ins Auto holt \u2013 und daf\u00fcr sorgt, dass niemand allein singt.",
    land:"Großbritannien", tags:["Film","TV"], gender:"m"},
  { route:"beruehmte-wladimir-putin", name:"Wladimir Putin", added:"2026-08-03", subtyp:"SX6w5",
    heading:"Wladimir Putin \u2013 Sexueller Typ 6",
    teaser:"SX6w5 \u00b7 geb. 1952 in Leningrad. Politiker, Pr\u00e4sident der Russischen F\u00f6deration, ehem. KGB-Offizier. Der Wolf, der Angst durch Kontrolle \u00fcber andere zu bezwingen versucht.",
    land:"Russland", tags:["Politik"], gender:"m"},
  { route:"beruehmte-otto-von-bismarck", name:"Otto von Bismarck", added:"2026-08-27", subtyp:"SX6w5",
    heading:"Otto von Bismarck \u2013 Sexueller Typ 6",
    teaser:"SX6w5 \u00b7 1815\u20131898. Erster Reichskanzler des Deutschen Kaiserreichs, \u203aEiserner Kanzler\u2039. Der Wolf, der Angst durch Einsch\u00fcchterung und R\u00fccktrittsdrohungen bezwang.",
    land:"Deutschland", tags:["Politik","Geschichte"], gender:"m"},
  { route:"beruehmte-platon", name:"Platon", added:"2026-08-14", subtyp:"SX6w5",
    heading:"Platon – Sexueller Typ 6",
    teaser:"SX6w5 · ca. 428–348 v. Chr. Griechischer Philosoph, Schüler des Sokrates, Gründer der Akademie. Ideenlehre, Höhlengleichnis, ›Politeia‹. Der Wolf mit Fünferflügel: aus dem Verrat an Sokrates eine unerschütterliche Ordnung geschaffen. Tierentsprechung: Wolf.",
    land:"Großbritannien", tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-friedrich-schiller", name:"Friedrich Schiller", added:"2026-08-20", subtyp:"SX6w5",
    heading:"Friedrich Schiller – Sexueller Typ 6",
    teaser:"SX6w5 · 1759–1805. Dichter, Dramatiker, Historiker. Die Räuber, Kabale und Liebe, Don Karlos, Wilhelm Tell. Floh aus Württemberg, um der Zensur des Herzogs zu entgehen, und schrieb sein bedeutendstes Alterswerk unter fortschreitender, tödlicher Krankheit. Enger Freund Goethes. Tierentsprechung: Wolf.",
    tags:["Literatur","Philosophie"], gender:"m"},
  { route:"beruehmte-ludwig-van-beethoven", name:"Ludwig van Beethoven", added:"2026-08-13", subtyp:"SX6w5",
    heading:"Ludwig van Beethoven \u2013 Sexueller Typ 6",
    teaser:"SX6w5 \u00b7 1770\u20131827. Deutscher Komponist. Neunte Symphonie, Mondscheinsonate, Eroica. Der Wolf, der seine fortschreitende Taubheit nicht besiegte, sondern der Angst mit trotziger Sch\u00f6pferkraft ins Gesicht sprang \u2013 \u201aIch will dem Schicksal in den Rachen greifen'.",
    land:"Frankreich", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-alice-schwarzer", name:"Alice Schwarzer", subtyp:"SX6w5",
    heading:"Alice Schwarzer \u2013 Sexueller Typ 6",
    teaser:"SX6w5 \u00b7 geb. 1942. Journalistin, Feministin, Emma-Gr\u00fcnderin. Der Wolf, der sich nicht duckt \u2013 und der f\u00fcr sein Rudel k\u00e4mpft, auch wenn er dabei allein steht.",
    land:"Schweiz", tags:["Medien","Politik"] , gender:"f"},
  { route:"beruehmte-kollegah", name:"Kollegah", subtyp:"SX6w5",
    heading:"Kollegah \u2013 Sexueller Typ 6",
    teaser:"SX6w5 \u00b7 geb. 1984. Rapper, K\u00fcnstler & Unternehmer, 2016 zum Islam \u00fcbergetreten. Der Wolf, der sein Rudel aus Worten baut \u2013 und der Angst in Dominanz verwandelt, bis er nicht mehr wei\u00df, wohin damit.",
    added:"2026-07-15", land:"Deutschland", tags:["Musik","Gesellschaft"], gender:"m" },
  { route:"beruehmte-moses", name:"Moses", added:"2026-08-07", subtyp:"SX6w5",
    heading:"Moses \u2013 Sexueller Typ 6",
    teaser:"SX6w5 \u00b7 ca. 13. Jh. v. Chr. (biblische \u00dcberlieferung). Prophet, Gesetzgeber, Anf\u00fchrer des Exodus. Vom z\u00f6gernden Hirten am brennenden Dornbusch zum furchtlosen Gegenspieler des Pharaos. Der Wolf, der die eigene Angst erst \u00fcberwindet, um dann f\u00fcr sein Rudel durch die W\u00fcste zu gehen.",
    tags:["Religion","Geschichte"], gender:"m"},
  { route:"beruehmte-david-mech", name:"Dr. L. David Mech", added:"2026-08-19", subtyp:"SX6w5",
    heading:"Dr. L. David Mech \u2013 Sexueller Typ 6",
    teaser:"SX6w5 \u00b7 geb. 1937. US-amerikanischer Biologe, \u201eVater der modernen Wolfsforschung\u201c, Gr\u00fcnder des International Wolf Center. Seit \u00fcber 60 Jahren Wolfsforschung, Standardwerk \u201eThe Wolf\u201c. Der Wolf, der sein Leben lang das Rudel erforschte \u2013 und dabei die eigene Tierentsprechung studierte. Tierentsprechung: Wolf.",
    land:"USA", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-douglas-smith", name:"Dr. Douglas W. Smith", added:"2026-08-19", subtyp:"SX6w5",
    heading:"Dr. Douglas W. Smith \u2013 Sexueller Typ 6",
    teaser:"SX6w5 \u00b7 geb. 1960. US-amerikanischer Wildtierbiologe, Leiter des Yellowstone-Wolfsprojekts seit 1997. Managte ab 1995 die spektakul\u00e4re Wiederansiedlung der W\u00f6lfe im Yellowstone-Nationalpark und dokumentierte, wie ein einziges Rudel ein ganzes \u00d6kosystem ver\u00e4ndern kann. Tierentsprechung: Wolf.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-michael-schumacher", name:"Michael Schumacher", added:"2026-07-21", subtyp:"SX6w7",
    heading:"Michael Schumacher \u2013 Sexueller Typ 6",
    teaser:"SX6w7 \xb7 geb. 1969 in H\xfcrth. Formel-1-Rennfahrer, siebenmaliger Weltmeister, 91 Siege. Der Wolf, der Angst in Geschwindigkeit verwandelt hat &ndash; und dessen Stille seit 2013 lauter ist als alles, was er je gesagt hat.",
    land:"Deutschland", tags:["Sport","Motorsport"], gender:"m"},
  { route:"beruehmte-anke-engelke", name:"Anke Engelke", subtyp:"SX6w7",
    heading:"Anke Engelke \u2013 Sexueller Typ 6",
    teaser:"SX6w7 \u00b7 geb. 1965. Komikerin, Schauspielerin, Entertainerin, S\u00e4ngerin, Synchronsprecherin, Moderatorin. Mut durch Erscheinen: die SX6, die Angst in Energie und Humor verwandelt. Tierentsprechung: Wolf.",
    land:"Deutschland", tags:["Medien","Kunst"] , gender:"f"},
  { route:"beruehmte-katja-riemann", name:"Katja Riemann", added:"2026-08-16", subtyp:"SX6w7",
    heading:"Katja Riemann – Sexueller Typ 6",
    teaser:"SX6w7 · geb. 1963 in Bad Kreuznach. Schauspielerin und Musikerin, ›Der bewegte Mann‹, ›Nirgendwo in Afrika‹, ›Rosenstraße‹. Der Wolf, der jedem Konflikt mit Klartext begegnet und sich in immer neue künstlerische Terrains wagt. Tierentsprechung: Wolf.",
    land:"Deutschland", tags:["Schauspiel","Musik"], gender:"f"},
  { route:"beruehmte-uwe-ochsenknecht", name:"Uwe Ochsenknecht", added:"2026-08-24", subtyp:"SX6w7",
    heading:"Uwe Ochsenknecht – Sexueller Typ 6",
    teaser:"SX6w7 · geb. 1956 in Biblis. Schauspieler und Musiker, Das Boot, Männer. Riss mit elf Jahren von zu Hause aus, über 175 Produktionen quer durch alle Genres, dazu Musical und eigene Band. Der Wolf, der sich weder vor Konflikt noch vor Neuland scheut. Tierentsprechung: Wolf.",
    land:"Deutschland", tags:["Schauspiel","Musik"], gender:"m"},
  { route:"beruehmte-byron-katie", name:"Byron Katie", added:"2026-08-16", subtyp:"SX6w7",
    heading:"Byron Katie – Sexueller Typ 6",
    teaser:"SX6w7 · geb. 1942 in Barstow, Kalifornien. Autorin, Begründerin von ›The Work‹. Ein Jahrzehnt Depression und Agoraphobie, dann 1986 die radikale Umkehr: der eigenen Angst mit vier Fragen direkt ins Gesicht sehen. Tierentsprechung: Wolf.",
    land:"USA", tags:["Psychologie"], gender:"f"},
  { route:"beruehmte-jennifer-aniston", name:"Jennifer Aniston", added:"2026-08-14", subtyp:"SX6w7",
    heading:"Jennifer Aniston – Sexueller Typ 6",
    teaser:"SX6w7 · geb. 1969 in Sherman Oaks. Schauspielerin und Produzentin, Rachel Green in ›Friends‹. Stärke als Antwort auf die Angst, Solidarität mit dem Rudel statt Konkurrenz. Tierentsprechung: Wolf.",
    land:"USA", tags:["Medien","Kunst"], gender:"f"},
  { route:"beruehmte-scarlett-johansson", name:"Scarlett Johansson", added:"2026-08-03", subtyp:"SX6w7",
    heading:"Scarlett Johansson \u2013 Sexueller Typ 6",
    teaser:"SX6w7 \u00b7 geb. 1984. Schauspielerin, Produzentin, meistkassierende Schauspielerin der Filmgeschichte. Der Wolf, der Verletzlichkeit hinter Intensit\u00e4t und Pr\u00e4senz verbirgt.",
    land:"USA", tags:["Film"], gender:"f"},
  { route:"beruehmte-jasmin-paolini", name:"Jasmine Paolini", subtyp:"SE7w6",
    heading:"Jasmine Paolini \u2013 Selbsterhaltender Typ 7",
    teaser:"SE7w6 \u00b7 geb. 1996. Italienische Tennisspielerin, Weltranglistenvierte 2024. Finalistin Roland Garros & Wimbledon, Siegerin WTA Finals. Der Gorilla: Freude als Fundament, W\u00e4rme als Waffe, Kampfgeist als Geschenk. Tierentsprechung: Gorilla.",
    land:"Italien", tags:["Sport"] , gender:"f"},
  { route:"beruehmte-wallace-shawn", name:"Wallace Shawn", added:"2026-07-21", subtyp:"SE7w6",
    heading:"Wallace Shawn \u2013 Selbsterhaltender Typ 7",
    teaser:"SE7w6 \u00b7 geb. 1943 in New York. Schauspieler, B\u00fchnenautor, Essayist. Vizzini in \u201eDie Prinzessin Braut\u201c, Rex in \u201eToy Story\u201c, Andr\u00e9 in \u201eMein Abendessen mit Andr\u00e9\u201c. Der Gorilla, der beim Mittagessen \u00fcber Kapitalismus und Tod nachdenkt \u2013 und dabei jeden zum Lachen bringt.",
    land:"USA", tags:["Schauspiel","Literatur"], gender:"m"},
  { route:"beruehmte-junko-tabei", name:"Junko Tabei", added:"2026-08-17", subtyp:"SE7w6",
    heading:"Junko Tabei – Selbsterhaltende Typ 7",
    teaser:"SE7w6 · 1939–2016. Erste Frau auf dem Mount Everest (1975), erste Frau mit den Seven Summits (1992), Gründerin von Japans erstem Frauen-Bergsteigerverein. Pragmatische Ausdauer statt Nervenkitzel, Gemeinschaft als Fundament. Tierentsprechung: Gorilla.",
    land:"Japan", tags:["Sport"], gender:"f"},
  { route:"beruehmte-jeanne-calment", name:"Jeanne Calment", added:"2026-08-17", subtyp:"SE7w6",
    heading:"Jeanne Calment – Selbsterhaltende Typ 7",
    teaser:"SE7w6 · 1875–1997. Älteste verifizierte Frau der Menschheitsgeschichte, 122 Jahre. Ihr Leben lang in Arles, Schokolade, Portwein, ein legendärer Viager-Deal mit 90. Genussfähigkeit ohne Exzess, Beständigkeit ohne Enge. Tierentsprechung: Gorilla.",
    land:"Frankreich", tags:["Gesellschaft"], gender:"f"},
  { route:"beruehmte-larry-king", name:"Larry King", added:"2026-08-03", subtyp:"SE7w6",
    heading:"Larry King \u2013 Selbsterhaltender Typ 7",
    teaser:"SE7w6 \u00b7 geb. 1933 in Brooklyn, gest. 2021. Talkshow-Moderator, \u201eLarry King Live\u201c auf CNN \u00fcber 25 Jahre, mehr als 50.000 Interviews. Der Gorilla, der jedes Gespr\u00e4ch zu einem sicheren Ort machte \u2013 und selbst am wenigsten preisgab.",
    land:"USA", tags:["Medien"], gender:"m"},
  { route:"beruehmte-dian-fossey", name:"Dian Fossey", added:"2026-08-17", subtyp:"SE7w8",
    heading:"Dian Fossey – Selbsterhaltende Typ 7",
    teaser:"SE7w8 · 1932–1985 (ermordet). Primatologin, fast 18 Jahre Feldforschung an Berggorillas in Ruanda, gründete die Forschungsstation Karisoke. Sicherheit im selbst gewählten Revier, kompromisslose Verteidigung gegen Wilderer. Tierentsprechung: Gorilla.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-mariah-carey", name:"Mariah Carey", added:"2026-07-21", subtyp:"SE7w8",
    heading:"Mariah Carey \u2013 Selbsterhaltender Typ 7",
    teaser:"SE7w8 \u00b7 geb. 1969 in Huntington, New York. S\u00e4ngerin, Songwriterin, Produzentin. 18 Nummer-1-Singles, f\u00fcnf Oktaven, ein Weihnachtslied f\u00fcr die Ewigkeit. Der Gorilla mit Achterfl\u00fcgel: Freude als Recht, \u00dcberfluss als Heimat, Macht als Schutzschild.",
    land:"USA", tags:["Musik"], gender:"f"},
  { route:"beruehmte-moritz-bleibtreu", name:"Moritz Bleibtreu", added:"2026-08-16", subtyp:"SE7w8",
    heading:"Moritz Bleibtreu \u2013 Selbsterhaltender Typ 7",
    teaser:"SE7w8 \u00b7 geb. 1971 in M\u00fcnchen. Schauspieler und Regisseur, \u203aLola rennt\u2039, \u203aDas Experiment\u2039, \u203aDer Baader Meinhof Komplex\u2039. Der Gorilla, der zwischen Kom\u00f6die und schwerster Konfrontation wechselt, ohne an Glaubw\u00fcrdigkeit zu verlieren. Tierentsprechung: Gorilla.",
    land:"Deutschland", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-hans-zimmer", name:"Hans Zimmer", subtyp:"SE7w8",
    heading:"Hans Zimmer \u2013 Selbsterhaltender Typ 7",
    teaser:"SE7w8 \u00b7 geb. 1957. Filmkomponist, Arrangeur, Musikproduzent. The Lion King, Gladiator, Inception, Interstellar. Der Gorilla, der Klang zu Emotion macht \u2013 und eine ganze Familie von Komponisten um sich versammelt hat. Tierentsprechung: Gorilla.",
    land:"Deutschland", tags:["Musik"] , gender:"m"},
  { route:"beruehmte-francis-bacon", name:"Francis Bacon", added:"2026-08-03", subtyp:"SE7w8",
    heading:"Francis Bacon \u2013 Selbsterhaltender Typ 7",
    teaser:"SE7w8 \u00b7 geb. 1561, gest. 1626. Philosoph, Staatsmann, Begr\u00fcnder des modernen Empirismus, ehem. Lordkanzler von England. Der Gorilla, der alles Wissen der Menschheit neu ordnen wollte \u2013 und an der eigenen Macht scheiterte.",
    land:"Großbritannien", tags:["Philosophie","Politik"], gender:"m"},
  { route:"beruehmte-rowan-atkinson", name:"Rowan Atkinson", added:"2026-07-22", subtyp:"SO7w6",
    heading:"Rowan Atkinson \u2013 Sozialer Typ 7",
    teaser:"SO7w6 \xb7 geb. 1955 in Consett, County Durham. Schauspieler, Komiker, Autor. Mr. Bean, Blackadder, Johnny English. Der Biber mit Sechserfl\xfcgel: Zugeh\xf6rigkeit statt Ausbruch, Perfektion als innere Versicherung.",
    land:"Großbritannien", tags:["Film","Kom\xf6die"], gender:"m"},
  { route:"beruehmte-epikur", name:"Epikur", added:"2026-08-31", subtyp:"SO7w6",
    heading:"Epikur – Sozialer Typ 7",
    teaser:"SO7w6 · 341–270 v. Chr. Griechischer Philosoph, Begründer des Epikureismus. Gründete ›Der Garten‹ in Athen, eine philosophische Wohngemeinschaft mit Freunden, Schülern, Frauen und Sklaven als Gleichberechtigten. Lehrte Freude durch Bescheidenheit und Freundschaft statt Zügellosigkeit. Tierentsprechung: Biber.",
    land:"Griechenland", tags:["Philosophie"], gender:"m"},
  { route:"beruehmte-franz-von-assisi", name:"Franz von Assisi", added:"2026-08-31", subtyp:"SO7w6",
    heading:"Franz von Assisi – Sozialer Typ 7",
    teaser:"SO7w6 · 1181/82–1226. Ordensgründer, brach radikal mit dem Vermögen seiner Kaufmannsfamilie und gründete den Franziskanerorden. Predigte der Legende nach den Vögeln, verfasste den ›Sonnengesang‹, empfing die Stigmata. Tierentsprechung: Biber.",
    land:"Italien", tags:["Religion","Geschichte"], gender:"m"},
  { route:"beruehmte-elon-musk", name:"Elon Musk", subtyp:"SO7w6",
    heading:"Elon Musk \u2013 Sozialer Typ 7",
    teaser:"SO7w6 \u00b7 geb. 1971. Unternehmer, Gr\u00fcnder von PayPal, SpaceX, X (ehem. Twitter), Mitinhaber von Tesla. Reichster Mensch der Welt (Stand 2026). Der Biber, der Welten baut \u2013 und dabei nie fertig wird. Tierentsprechung: Biber.",
    tags:["Wirtschaft","Wissenschaft"] , gender:"m"},
  { route:"beruehmte-johann-wolfgang-von-goethe", name:"Johann Wolfgang von Goethe", added:"2026-08-20", subtyp:"SO7w6",
    heading:"Johann Wolfgang von Goethe – Sozialer Typ 7",
    teaser:"SO7w6 · 1749–1832. Dichter, Naturforscher, Staatsmann. Faust, Werther, Wilhelm Meister, Farbenlehre – fast fünfzig Jahre loyaler Verwaltungsdienst in Weimar neben einem rastlosen literarischen und wissenschaftlichen Werk. Der Biber, der sechzig Jahre an einem einzigen Bauwerk (Faust) arbeitete. Tierentsprechung: Biber.",
    tags:["Literatur","Wissenschaft"], gender:"m"},
  { route:"beruehmte-jules-verne", name:"Jules Verne", added:"2026-08-15", subtyp:"SO7w6",
    heading:"Jules Verne – Sozialer Typ 7",
    teaser:"SO7w6 · 1828–1905. Schriftsteller, Visionär. Voyages extraordinaires, 20.000 Meilen unter dem Meer, Von der Erde zum Mond. Der Biber, der die Zukunft vorausschrieb, gebunden an einen kontrollierenden Verleger. Tierentsprechung: Biber.",
    tags:["Literatur","Wissenschaft"], gender:"m"},
  { route:"beruehmte-jeanne-marie-guyon", name:"Jeanne-Marie Bouvier de la Motte Guyon", added:"2026-08-03", subtyp:"SO7w6",
    heading:"Madame Guyon \u2013 Sozialer Typ 7",
    teaser:"SO7w6 \u00b7 geb. 1648, gest. 1717. Mystikerin, bedeutendste Vertreterin des Quietismus. Verfolgt als H\u00e4retikerin, jahrelang inhaftiert, u. a. in der Bastille. Der Biber, der sich ganz der Hingabe an Gott verschrieb \u2013 und Verfolgung mit stiller Standhaftigkeit ertrug.",
    tags:["Spiritualit\u00e4t","Geschichte"], gender:"f"},
  { route:"beruehmte-frank-rosell", name:"Prof. Dr. Frank Rosell", added:"2026-08-19", subtyp:"SO7w6",
    heading:"Prof. Dr. Frank Rosell \u2013 Sozialer Typ 7",
    teaser:"SO7w6 \u00b7 geb. 1969. Norwegischer Biologe, Professor an der University of South-Eastern Norway, weltweit f\u00fchrende Autorit\u00e4t f\u00fcr Biber, genannt \u201eder Biber-Papst\u201c. Leitet seit 1997 das Norwegian Beaver Project, \u00fcber 130 Fachpublikationen, Standardwerk \u201eBeavers\u201c. Tierentsprechung: Biber.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-dietland-mueller-schwarze", name:"Prof. Dr. Dietland M\u00fcller-Schwarze", added:"2026-08-19", subtyp:"SO7w6",
    heading:"Prof. Dr. Dietland M\u00fcller-Schwarze \u2013 Sozialer Typ 7",
    teaser:"SO7w6 \u00b7 Deutsch-amerikanischer Biologe, emeritierter Professor, Pionier der Biber-Verhaltensforschung. 26 Jahre Feldforschung zur chemischen Kommunikation der Biber, Standardwerk \u201eThe Beaver: Its Life and Impact\u201c. Tierentsprechung: Biber.",
    land:"Deutschland/USA", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-alexander-bommes", name:"Alexander Bommes", added:"2026-08-24", subtyp:"SO7w6",
    heading:"Alexander Bommes – Sozialer Typ 7",
    teaser:"SO7w6 · geb. 1976 in Kiel. Deutscher Fernsehmoderator, ARD-Sportschau, Gefragt – Gejagt. Ehemaliger Handball-Bundesliga-Spieler, wechselte nach dem ersten Staatsexamen zum Journalismus. Vielseitigkeit auf festem, vertrautem Grund. Tierentsprechung: Biber.",
    land:"Deutschland", tags:["Medien","Sport"], gender:"m"},
  { route:"beruehmte-dieter-nuhr", name:"Dieter Nuhr", added:"2026-07-22", subtyp:"SO7w8",
    heading:"Dieter Nuhr \u2013 Sozialer Typ 7",
    teaser:"SO7w8 \u00b7 geb. 1960 in Wesel am Rhein. Kabarettist, Comedian, Moderator, Maler. Nuhr im Ersten (ARD seit 2005). Der Biber mit Achterfl\u00fcgel: Komik als Dienst an der \u00d6ffentlichkeit, Haltung als Schutzschild.",
    land:"Deutschland", tags:["Medien","Kunst"], gender:"m"},
  { route:"beruehmte-hazel-brugger", name:"Hazel Brugger", subtyp:"SO7w8",
    heading:"Hazel Brugger \u2013 Sozialer Typ 7",
    teaser:"SO7w8 \u00b7 geb. 1993. Comedian, Kabarettistin, Moderatorin, Bloggerin, Autorin, Slam-Poetin. Schweizer-US-amerikanisch. Der Biber, der baut, am\u00fcsiert und attackiert \u2013 mit Tempo, Tiefe und einem Lachen, das nichts ausl\u00e4sst. Tierentsprechung: Biber.",
    tags:["Schauspiel","Musik"] , gender:"f"},
  { route:"beruehmte-drew-barrymore", name:"Drew Barrymore", added:"2026-08-03", subtyp:"SO7w8",
    heading:"Drew Barrymore \u2013 Sozialer Typ 7",
    teaser:"SO7w8 \u00b7 geb. 1975 in Los Angeles. Schauspielerin, Produzentin, Talkshow-Moderatorin. Kinderstar in \u201eE.T.\u201c, Absturz und Neuanfang, heute \u201eThe Drew Barrymore Show\u201c. Der Biber, der sein eigenes Chaos zum Fundament einer zweiten Karriere machte.",
    land:"USA", tags:["Film","Medien"], gender:"f"},
  { route:"beruehmte-caroline-peters", name:"Caroline Peters", added:"2026-07-22", subtyp:"SX7w6",
    heading:"Caroline Peters \u2013 Sexueller Typ 7",
    teaser:"SX7w6 \u00b7 geb. 1971 in K\u00f6ln. Schauspielerin. Mord mit Aussicht (ARD), Burgtheater Wien, Grimme-Preis. Der Schimpanse mit Sechserfl\u00fcgel: Rausch der Verwandlung, Loyalit\u00e4t als Anker.",
    land:"Deutschland", tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-thomas-gottschalk", name:"Thomas Gottschalk", subtyp:"SX7w6",
    heading:"Thomas Gottschalk \u2013 Sexueller Typ 7",
    teaser:"SX7w6 \u00b7 geb. 1950. Deutscher Radio- und Fernsehmoderator, Entertainer, Schauspieler. Wetten, dass..? \u2013 23 Jahre, 212 Sendungen. Der Schimpanse: lebendig, magnetisch, unberechenbar \u2013 und immer auf der Suche nach dem n\u00e4chsten Funken. Tierentsprechung: Schimpanse.",
    land:"Deutschland", tags:["Schauspiel","Medien"], gender:"m" },
  { route:"beruehmte-miley-cyrus", name:"Miley Cyrus", added:"2026-08-04", subtyp:"SX7w6",
    heading:"Miley Cyrus \u2013 Sexueller Typ 7",
    teaser:"SX7w6 \u00b7 geb. 1992 in Franklin, Tennessee. S\u00e4ngerin, Songwriterin, Schauspielerin. Kinderstar als \u201eHannah Montana\u201c, sp\u00e4tere Neuerfindungen von \u201eWrecking Ball\u201c bis \u201eFlowers\u201c. Der Schimpanse mit Sechserfl\u00fcgel: Verwandlung als Lebensform, Loyalit\u00e4t zu sich selbst als roter Faden durch jede H\u00e4utung.",
    land:"USA", tags:["Musik","Film"], gender:"f"},
  { route:"beruehmte-morgan-freeman", name:"Morgan Freeman", added:"2026-08-09", subtyp:"SX7w6",
    heading:"Morgan Freeman \u2013 Sexueller Typ 7",
    teaser:"SX7w6 \u00b7 geb. 1937. Schauspieler, Regisseur, Erz\u00e4hler. Die Verurteilten, Sieben, Invictus. Der Schimpanse mit Sechserfl\u00fcgel: Neugier und Vielseitigkeit, getragen von jahrzehntelanger Verl\u00e4sslichkeit und der vertrautesten Stimme Hollywoods.",
    land:"USA", tags:["Film"], gender:"m"},
  { route:"beruehmte-leonard-bernstein", name:"Leonard Bernstein", added:"2026-08-15", subtyp:"SX7w6",
    heading:"Leonard Bernstein \u2013 Sexueller Typ 7",
    teaser:"SX7w6 \u00b7 1918\u20131990. Dirigent, Komponist, Pianist. West Side Story, Young People's Concerts, New York Philharmonic. Der Schimpanse mit Sechserfl\u00fcgel: grenzenlose Begeisterung, gepaart mit p\u00e4dagogischer Mission und nie ganz beruhigtem Zweifel. Tierentsprechung: Schimpanse.",
    tags:["Musik"], gender:"m"},
  { route:"beruehmte-frans-de-waal", name:"Prof. Dr. Frans de Waal", added:"2026-08-19", subtyp:"SX7w6",
    heading:"Prof. Dr. Frans de Waal \u2013 Sexueller Typ 7",
    teaser:"SX7w6 \u00b7 1948\u20132024. Niederl\u00e4ndisch-amerikanischer Primatologe, \u201eBr\u00fcckenbauer zwischen Mensch und Schimpanse\u201c. Bahnbrechende Studien \u00fcber Machtallianzen, Vers\u00f6hnung und Empathie bei Schimpansen und Bonobos, Bestseller \u201eChimpanzee Politics\u201c. Tierentsprechung: Schimpanse.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-jill-pruetz", name:"Dr. Jill Pruetz", added:"2026-08-19", subtyp:"SX7w6",
    heading:"Dr. Jill Pruetz \u2013 Sexueller Typ 7",
    teaser:"SX7w6 \u00b7 geb. 1965. US-amerikanische Anthropologin und Primatologin, entdeckte die \u201eSavannen-Schimpansen\u201c von Fongoli im Senegal \u2013 die einzigen Menschenaffen, die systematisch mit selbst gefertigten Speeren jagen. Tierentsprechung: Schimpanse.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-ina-mueller", name:"Ina M\u00fcller", subtyp:"SX7w8",
    heading:"Ina M\u00fcller \u2013 Sexueller Typ 7",
    teaser:"SX7w8 \u00b7 geb. 1965. S\u00e4ngerin, Musikkabarettistin, Fernsehmoderatorin (Inas Nacht). Der Schimpanse mit Achterfl\u00fcgel: lebenslustig, direkt, unerschrocken \u2013 und immer nah am Menschen. Tierentsprechung: Schimpanse.",
    land:"Deutschland", tags:["Musik","Medien"] , gender:"f"},
  { route:"beruehmte-boris-becker", name:"Boris Becker", added:"2026-07-19", subtyp:"SX7w8",
    heading:"Boris Becker \u2013 Sexueller Typ 7",
    teaser:"SX7w8 \u00b7 geb. 1967. Tennisprofi, dreifacher Wimbledon-Sieger, j\u00fcngster Wimbledon-Champion aller Zeiten (1985, mit 17 Jahren). Der Schimpanse mit Achterfl\u00fcgel: grenzenlose Intensit\u00e4t, Ruhm als Heimat, und das lebenslange Ringen um das Bild des gro\u00dfen Boris. Tierentsprechung: Schimpanse.",
    land:"Deutschland", tags:["Sport"] , gender:"m"},
  { route:"beruehmte-robert-schumann", name:"Robert Schumann", added:"2026-08-13", subtyp:"SX7w8",
    heading:"Robert Schumann – Sexueller Typ 7",
    teaser:"SX7w8 · 1810–1856. Deutscher Komponist und Musikkritiker. Liederjahr 1840, Entdecker von Johannes Brahms, jahrelanger Kampf um Clara Wieck. Der Schimpanse mit Achterflügel: schrankenlose Begeisterung, kämpferische Hingabe – und eine Intensität, die sich am Ende gegen ihn selbst wandte. Tierentsprechung: Schimpanse.",
    land:"Deutschland", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-franz-liszt", name:"Franz Liszt", added:"2026-08-15", subtyp:"SX7w8",
    heading:"Franz Liszt – Sexueller Typ 7",
    teaser:"SX7w8 · 1811–1886. Komponist und Pianist. Lisztomania, Erfinder der symphonischen Dichtung, Neudeutsche Schule, später Abbé Liszt. Der Schimpanse mit Achterflügel: ganze Säle in Ekstase, offener Kampf um die neue Musik. Tierentsprechung: Schimpanse.",
    land:"Ungarn", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-shakira", name:"Shakira", added:"2026-08-04", subtyp:"SX7w8",
    heading:"Shakira \u2013 Sexueller Typ 7",
    teaser:"SX7w8 \u00b7 geb. 1977 in Barranquilla, Kolumbien. S\u00e4ngerin, Songwriterin, T\u00e4nzerin, Produzentin. \u201eHips Don't Lie\u201c, \u201eWaka Waka\u201c, \u00fcber 80 Millionen verkaufte Tontr\u00e4ger. Der Schimpanse mit Achterfl\u00fcgel: Rhythmus als Sprache des K\u00f6rpers, Intensit\u00e4t ohne Bremse, Kraft, die aus pers\u00f6nlichem Schmerz B\u00fchnenpr\u00e4senz macht.",
    land:"Kolumbien", tags:["Musik"], gender:"f"},
  { route:"beruehmte-christophe-boesch", name:"Prof. Dr. Christophe Boesch", added:"2026-08-19", subtyp:"SX7w8",
    heading:"Prof. Dr. Christophe Boesch \u2013 Sexueller Typ 7",
    teaser:"SX7w8 \u00b7 1951\u20132024. Schweizer Primatologe, langj\u00e4hriger Direktor am Max-Planck-Institut f\u00fcr evolution\u00e4re Anthropologie, Pionier der Schimpansen-Kulturforschung im Ta\u00ef-Nationalpark. Wies nach, dass Schimpansen unterschiedliche, von Generation zu Generation weitergegebene Kulturen besitzen. Tierentsprechung: Schimpanse.",
    land:"Schweiz", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-umberto-eco", name:"Dr. Umberto Eco", subtyp:"SE8w7",
    heading:"Umberto Eco \u2013 Selbsterhaltender Typ 8",
    teaser:"SE8w7 \u00b7 1932\u20132016. Schriftsteller, Semiotiker, Philosoph, Medienwissenschaftler. Der Name der Rose, Das Foucaultsche Pendel. 30.000 B\u00fccher. Der Orang-Utan, der im Labyrinth zu Hause ist \u2013 und der wei\u00df, dass alle Zeichen l\u00fcgen. Tierentsprechung: Orang-Utan.",
    land:"Italien", tags:["Literatur","Wissenschaft"] , gender:"m"},
  { route:"beruehmte-jacqueline-mars", name:"Jacqueline Mars", added:"2026-07-22", subtyp:"SE8w7",
    heading:"Jacqueline Mars \u2013 Selbsterhaltender Typ 8",
    teaser:"SE8w7 \u00b7 geb. 1939 in Newark. Enkelin des Mars-Gr\u00fcnders, Mitinhaberin von Mars, Incorporated (M&M's, Snickers, Pedigree). \u00dcber 30 Milliarden Dollar Verm\u00f6gen, kein einziges Interview. Der Orang-Utan, der nie gesehen werden muss \u2013 und genau das seit Jahrzehnten perfektioniert.",
    land:"USA", tags:["Wirtschaft"], gender:"f"},
  { route:"beruehmte-indra-nooyi", name:"Indra Nooyi", added:"2026-08-04", subtyp:"SE8w7",
    heading:"Indra Nooyi \u2013 Selbsterhaltender Typ 8",
    teaser:"SE8w7 \u00b7 geb. 1955 in Chennai, Indien. Wirtschaftsf\u00fchrerin, CEO von PepsiCo 2006\u20132018. Eine der m\u00e4chtigsten Frauen der globalen Wirtschaft. Der Orang-Utan, der ein Weltkonzern-Territorium neu verma\u00df \u2013 mit Weitsicht, H\u00e4rte und unersch\u00fctterlicher Zielstrebigkeit.",
    land:"Indien/USA", tags:["Wirtschaft"], gender:"f"},
  { route:"beruehmte-toni-morrison", name:"Toni Morrison", subtyp:"SE8w9",
    heading:"Toni Morrison \u2013 Selbsterhaltende Typ 8",
    teaser:"SE8w9 \u00b7 1931\u20132019. Schriftstellerin, Literaturnobelpreistr\u00e4gerin 1993. Beloved, Sula, The Bluest Eye. Die Orang-Utan-Frau, die das Schweigen der Geschichte gebrochen hat \u2013 geerdet, unersch\u00fctterlich, von bleibender Wucht. Tierentsprechung: Orang-Utan.",
    land:"USA", tags:["Literatur"] , gender:"f"},
  { route:"beruehmte-dhapanbal-yunupingu", name:"Dhapanbal Yunupingu", added:"2026-08-16", subtyp:"SE8w9",
    heading:"Dhapanbal Yunupingu – Selbsterhaltender Typ 8",
    teaser:"SE8w9 · Sängerin, Songwriterin und Künstlerin aus Arnhem Land, Australien. Tochter von Dr. M. Yunupingu (Yothu Yindi). Der Orang-Utan, der ein kulturelles Erbe still und geerdet weiterträgt, statt es zu vermarkten. Tierentsprechung: Orang-Utan.",
    land:"Australien", tags:["Musik","Kunst"], gender:"f"},
  { route:"beruehmte-golda-meir", name:"Golda Meir", added:"2026-07-22", subtyp:"SE8w9",
    heading:"Golda Meir \u2013 Selbsterhaltender Typ 8",
    teaser:"SE8w9 \u00b7 1898\u20131978. Politikerin, Staatsfrau, vierte Premierministerin Israels (1969\u20131974). Eine der Unterzeichnerinnen der israelischen Unabh\u00e4ngigkeitserkl\u00e4rung. Der Orang-Utan, der langsam klettert und am Ende h\u00f6her sitzt als alle, die lauter waren.",
    land:"Israel", tags:["Politik"], gender:"f"},
  { route:"beruehmte-birute-galdikas", name:"Dr. Birut\u00e9 Galdikas", added:"2026-08-17", subtyp:"SE8w9",
    heading:"Dr. Birut\u00e9 Galdikas \u2013 Selbsterhaltender Typ 8",
    teaser:"SE8w9 \u00b7 1946\u20132026. Weltweit f\u00fchrende Orang-Utan-Forscherin, l\u00e4ngste durchgehende Feldstudie eines einzelnen Wildtiers, gr\u00fcndete Camp Leakey auf Borneo. \u201eIch wurde geboren, um Orang-Utans zu erforschen.\u201c Tierentsprechung: Orang-Utan.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-winston-churchill", name:"Winston Churchill", added:"2026-08-04", subtyp:"SE8w9",
    heading:"Winston Churchill \u2013 Selbsterhaltender Typ 8",
    teaser:"SE8w9 \u00b7 1874\u20131965. Britischer Staatsmann, Premierminister 1940\u20131945 und 1951\u20131955, Literaturnobelpreistr\u00e4ger 1953. Der Orang-Utan, der in der dunkelsten Stunde Gro\u00dfbritanniens nicht wich \u2013 geerdet, stur, unersch\u00fctterlich.",
    land:"Großbritannien", tags:["Politik"], gender:"m"},
  { route:"beruehmte-sokrates", name:"Sokrates", added:"2026-08-14", subtyp:"SO8w7",
    heading:"Sokrates – Sozialer Typ 8",
    teaser:"SO8w7 · ca. 470–399 v. Chr. Griechischer Philosoph, Lehrer Platons. Mäeutik, Prozess wegen Gottlosigkeit, gelassener Tod durch den Schierlingsbecher. Der Löwe mit Siebenerflügel: unermüdliches Fragen, Loyalität zur Polis bis in den Tod. Tierentsprechung: Löwe.",
    tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-fritz-perls", name:"Fritz Perls", added:"2026-08-15", subtyp:"SO8w7",
    heading:"Fritz Perls – Sozialer Typ 8",
    teaser:"SO8w7 · 1893–1970. Psychiater, Mitbegründer der Gestalttherapie. Hot Seat, LSD-Experimente, Esalen-Institut. Der Löwe mit Siebenerflügel: kompromisslose Konfrontation, ungefiltertes Erleben im Hier und Jetzt. Tierentsprechung: Löwe.",
    land:"Deutschland", tags:["Psychologie"], gender:"m"},
  { route:"beruehmte-natascha-ochsenknecht", name:"Natascha Ochsenknecht", added:"2026-08-24", subtyp:"SO8w7",
    heading:"Natascha Ochsenknecht – Sozialer Typ 8",
    teaser:"SO8w7 · geb. 1964 in Düsseldorf. Deutsches Model, TV-Persönlichkeit und Unternehmerin, Diese Ochsenknechts. Verbindendes Zentrum einer der bekanntesten deutschen Familien – auch nach der Scheidung von Uwe Ochsenknecht. Tierentsprechung: Löwe.",
    land:"Deutschland", tags:["Mode","Fernsehen"], gender:"f"},
  { route:"beruehmte-michelle-obama", name:"Michelle Obama", subtyp:"SO8w7",
    heading:"Michelle Obama \u2013 Sozialer Typ 8",
    teaser:"SO8w7 \u00b7 geb. 1964. Anw\u00e4ltin, Autorin, ehemalige First Lady der USA (2009\u20132017). Bestseller-Autorin (Becoming). Der L\u00f6we, der f\u00fcr sein Rudel k\u00e4mpft \u2013 und der wei\u00df, dass man hochgeht, wenn andere runtergehen. Tierentsprechung: L\u00f6we.",
    land:"USA", tags:["Politik"], gender:"f" },
  { route:"beruehmte-carsten-stahl", name:"Carsten Stahl", added:"2026-07-22", subtyp:"SO8w7",
    heading:"Carsten Stahl \u2013 Sozialer Typ 8",
    teaser:"SO8w7 \u00b7 geb. 1974 in Heidelberg. Kampfsportler, Antimobbingaktivist, Buchautor. Hunderte Schulbesuche, \u203aHalt die Fresse!\u2039. Der L\u00f6we, der in die Schulen geht &ndash; St\u00e4rke, die sich verschenkt.",
    land:"Deutschland", tags:["Aktivismus"], gender:"m"},
  { route:"beruehmte-cynthia-lummis", name:"Cynthia Lummis", added:"2026-08-04", subtyp:"SO8w7",
    heading:"Cynthia Lummis \u2013 Sozialer Typ 8",
    teaser:"SO8w7 \u00b7 geb. 1954 in Cheyenne, Wyoming. US-Senatorin, erste weibliche Bitcoin-Verfechterin im US-Senat, ehem. Wyoming State Treasurer. Die L\u00f6win, die f\u00fcr ihre Herde k\u00e4mpft \u2013 kompromisslos, direkt, und immer an vorderster Front.",
    land:"USA", tags:["Politik"], gender:"f"},
  { route:"beruehmte-laurence-frank", name:"Dr. Laurence Frank", added:"2026-08-19", subtyp:"SO8w7",
    heading:"Dr. Laurence Frank \u2013 Sozialer Typ 8",
    teaser:"SO8w7 \u00b7 Wildtierbiologe, Gr\u00fcnder von Living with Lions und Vordenker der Lion Guardians. \u00dcber 35 Jahre furchtlose Feldforschung an L\u00f6wen und Hy\u00e4nen in Kenia, vers\u00f6hnte Massai-Krieger mit den L\u00f6wen, die sie einst t\u00f6teten. Der L\u00f6we, der f\u00fcr den L\u00f6wen k\u00e4mpft. Tierentsprechung: L\u00f6we.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-bud-spencer", name:"Bud Spencer", subtyp:"SO8w9",
    heading:"Bud Spencer \u2013 Sozialer Typ 8",
    teaser:"SO8w9 \u00b7 Carlo Pedersoli, 1929\u20132016. Schauspieler, Schwimmer, Unternehmer, Familienvater. Vier F\u00e4uste f\u00fcr ein Halleluja. Der L\u00f6we, der nicht braucht zu br\u00fcllen \u2013 er ist einfach da. Tierentsprechung: L\u00f6we.",
    land:"Italien", tags:["Schauspiel"], gender:"m" },
  { route:"beruehmte-karl-marx", name:"Karl Marx", added:"2026-08-04", subtyp:"SO8w9",
    heading:"Karl Marx \u2013 Sozialer Typ 8",
    teaser:"SO8w9 \u00b7 geb. 1818 in Trier, gest. 1883 in London. Philosoph, \u00d6konom, Begr\u00fcnder des Marxismus. Das Kapital, das Kommunistische Manifest. Der L\u00f6we, der sein Leben lang f\u00fcr die Ausgebeuteten k\u00e4mpfte \u2013 aus dem Schatten heraus, mit einer Wucht, die die Welt auch heute noch nicht zur Ruhe kommen l\u00e4sst.",
    land:"Deutschland", tags:["Philosophie","Politik"], gender:"m"},
  { route:"beruehmte-jamaica-kincaid", name:"Jamaica Kincaid", added:"2026-07-22", subtyp:"SO8w9",
    heading:"Jamaica Kincaid \u2013 Soziale Typ 8",
    teaser:"SO8w9 \u00b7 geb. 1949 in Antigua. Schriftstellerin, Essayistin, Harvard-Professorin. Annie John, A Small Place, Lucy. Der L\u00f6we, der schreibt \u2013 sch\u00e4rfer als jede Klage, pr\u00e4ziser als jede Anklage.",
    tags:["Literatur"], gender:"f"},
  { route:"beruehmte-mohammed", name:"Mohammed ibn Abdullah", added:"2026-08-07", subtyp:"SO8w9",
    heading:"Mohammed ibn Abdullah \u2013 Sozialer Typ 8",
    teaser:"SO8w9 \u00b7 ca. 570\u2013632 n. Chr. Religionsstifter, Begr\u00fcnder des Islam. Vom Waisenkind zum Propheten, Feldherrn und Staatsmann, der die St\u00e4mme Arabiens zu einer Gemeinschaft einte. Der L\u00f6we, der Recht und Schutz f\u00fcr die Schwachen erk\u00e4mpfte. Aus Respekt vor dem religi\u00f6sen Bilderverbot ohne Gesichtsdarstellung \u2013 Symbolentsprechung: Kalligrafie seines Namens.",
    tags:["Religion","Geschichte"], gender:"m"},
  { route:"beruehmte-helmut-kohl", name:"Helmut Kohl", added:"2026-08-09", subtyp:"SO8w9",
    heading:"Helmut Kohl \u2013 Sozialer Typ 8",
    teaser:"SO8w9 \u00b7 1930\u20132017. Deutscher Bundeskanzler (1982\u20131998), \u00bbKanzler der Einheit\u00ab. Wiedervereinigung, Vertrag von Maastricht, Euro-Einf\u00fchrung. Der L\u00f6we, der jahrzehntelang geduldig wartete \u2013 und im entscheidenden Moment Geschichte schrieb.",
    land:"Deutschland", tags:["Politik","Geschichte"], gender:"m"},
  { route:"beruehmte-adele-neuhauser", name:"Adele Neuhauser", added:"2026-07-22", subtyp:"SX8w7",
    heading:"Adele Neuhauser \u2013 Sexueller Typ 8",
    teaser:"SX8w7 \u00b7 geb. 1959 in Athen. \u00d6sterreichische Schauspielerin, Bibi Fellner im Tatort, mehrfache \u00d6sterreichischer Filmpreis-Tr\u00e4gerin. Begann als T\u00e4nzerin. Das Krokodil, das tanzt \u2013 pr\u00e4sent bis auf den Grund.",
    land:"Griechenland", tags:["Schauspiel"], gender:"f"},
  { route:"beruehmte-paul-gauguin", name:"Paul Gauguin", added:"2026-08-29", subtyp:"SX8w7",
    heading:"Paul Gauguin – Sexueller Typ 8",
    teaser:"SX8w7 · 1848–1903. Französischer Maler. Verließ mit 36 Beruf, Frau und fünf Kinder für die Kunst, Konflikt mit Van Gogh in Arles 1888, rastlose Aufbrüche über Panama, Martinique bis Tahiti und die Marquesas, offener Widerstand gegen Kolonialverwaltung bis zum Tod. Tierentsprechung: Krokodil.",
    land:"Frankreich", tags:["Kunst"], gender:"m"},
  { route:"beruehmte-pablo-picasso", name:"Pablo Picasso", added:"2026-08-16", subtyp:"SX8w7",
    heading:"Pablo Picasso \u2013 Sexueller Typ 8",
    teaser:"SX8w7 \u00b7 1881\u20131973. Spanischer Maler und Bildhauer, Mitbegr\u00fcnder des Kubismus, \u203aGuernica\u2039. Das Krokodil, das mit 13 Jahren den eigenen Vater in der Malerei \u00fcbertraf \u2013 und danach nie wieder aufh\u00f6rte zu erobern. Tierentsprechung: Krokodil.",
    land:"Deutschland", tags:["Kunst","Geschichte"], gender:"m"},
  { route:"beruehmte-grahame-webb", name:"Prof. Grahame Webb", added:"2026-08-17", subtyp:"SX8w7",
    heading:"Prof. Grahame Webb \u2013 Sexueller Typ 8",
    teaser:"SX8w7 \u00b7 geb. 1947. Zoologe, weltweit f\u00fchrende Autorit\u00e4t f\u00fcr Krokodilforschung, Gr\u00fcnder von Crocodylus Park. Verlie\u00df die Universit\u00e4t, um sein eigenes Forschungsimperium aufzubauen \u2013 Wissenschaft, Farming, Tourismus und Bildung zugleich. Tierentsprechung: Krokodil.",
    land:"Australien", tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-donald-trump", name:"Donald J. Trump", subtyp:"SX8w7",
    heading:"Donald J. Trump \u2013 Sexueller Typ 8",
    teaser:"SX8w7 \u00b7 geb. 1946. Unternehmer, Medienpers\u00f6nlichkeit, 45. & 47. Pr\u00e4sident der USA. Das Krokodil, das die B\u00fchne beherrscht \u2013 laut, unberechenbar, leidenschaftlich und stets im Angriff. Tierentsprechung: Krokodil.",
    tags:["Politik"] , gender:"m"},
  { route:"beruehmte-diogenes", name:"Diogenes von Sinope", added:"2026-08-04", subtyp:"SX8w7",
    heading:"Diogenes \u2013 Sexueller Typ 8",
    teaser:"SX8w7 \u00b7 geb. um 412 v. Chr. in Sinope, gest. 323 v. Chr. in Korinth. Philosoph, Begr\u00fcnder des Kynismus, lebte in einer Tonne. Das Krokodil, das jede gesellschaftliche Konvention \u00f6ffentlich zerbiss \u2013 schamlos, kompromisslos, frei.",
    land:"Griechenland", tags:["Philosophie"], gender:"m"},
  { route:"beruehmte-giacomo-puccini", name:"Giacomo Puccini", added:"2026-08-13", subtyp:"SX8w7",
    heading:"Giacomo Puccini \u2013 Sexueller Typ 8",
    teaser:"SX8w7 \u00b7 1858\u20131924. Italienischer Opernkomponist. \u203aLa Boh\u00e8me\u2039, \u203aTosca\u2039, \u203aMadama Butterfly\u2039, unvollendete \u203aTurandot\u2039. Das Krokodil mit Siebenerfl\u00fcgel: kompromisslose Leidenschaft auf der B\u00fchne wie im Leben, Rennwagen, Jagd und ein Skandal um Eifersucht. Tierentsprechung: Krokodil.",
    land:"Italien", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-gerhard-schroeder", name:"Gerhard Schr\u00f6der", added:"2026-08-09", subtyp:"SX8w7",
    heading:"Gerhard Schr\u00f6der \u2013 Sexueller Typ 8",
    teaser:"SX8w7 \u00b7 geb. 1944. Deutscher Bundeskanzler (1998\u20132005). Agenda 2010, Basta-Prinzip, Medienkanzler. Das Krokodil, das den Kraftakt der Reform gegen jeden Widerstand durchsetzte \u2013 und danach seinen eigenen Weg unbeirrt weiterging.",
    land:"Russland", tags:["Politik"], gender:"m"},
  { route:"beruehmte-john-wayne", name:"John Wayne", added:"2026-08-19", subtyp:"SX8w7",
    heading:"John Wayne \u2013 Sexueller Typ 8",
    teaser:"SX8w7 \u00b7 1907\u20131979. Schauspieler, Westernikone, \u201eThe Duke\u201c. \u00dcber 170 Filme, Verk\u00f6rperung des unbeugsamen amerikanischen Helden. Das Krokodil, dessen blo\u00dfe Leinwandpr\u00e4senz Kinos\u00e4le f\u00fcllte \u2013 und das im Privaten deutlich nachdenklicher war, als seine Rollen vermuten lie\u00dfen.",
    land:"USA", tags:["Schauspiel"], gender:"m"},
  { route:"beruehmte-ruth-bader-ginsburg", name:"Ruth Bader Ginsburg", added:"2026-07-22", subtyp:"SX8w9",
    heading:"Ruth Bader Ginsburg \u2013 Sexueller Typ 8",
    teaser:"SX8w9 \u00b7 1933\u20132020. US-Bundesrichterin am Supreme Court, RBG. Pionierin der Geschlechtergleichstellung, legendary dissenter. Das Krokodil, das bleibt \u2013 der Abdruck ist geblieben.",
    land:"USA", tags:["Politik","Recht"], gender:"f"},
  { route:"beruehmte-genesis-p-orridge", name:"Genesis P-Orridge", subtyp:"SX8w9",
    heading:"Genesis P-Orridge \u2013 Sexueller Typ 8",
    teaser:"SX8w9 \u00b7 1950\u20132020. Musiker, Performance-K\u00fcnstler, Okkultist, Gr\u00fcnder von Throbbing Gristle. Das Krokodil, das die Grenzen des K\u00f6rpers, der Kunst und der Identit\u00e4t \u00fcberschritt \u2013 und nie zur\u00fcckkam. Tierentsprechung: Krokodil.",
    land:"Großbritannien", tags:["Musik","Kunst"] , gender:"m"},
  { route:"beruehmte-eli-jaxon-bear", name:"Eli Jaxon-Bear", added:"2026-08-04", subtyp:"SX8w9",
    heading:"Eli Jaxon-Bear \u2013 Sexueller Typ 8",
    teaser:"SX8w9 \u00b7 geb. 1947. Spiritueller Lehrer, Sch\u00fcler von Papaji, Autor von \u201eFrom Fixation to Freedom\u201c. Das Krokodil, das die eigene Fixierung durchschaute \u2013 und zum Wegweiser f\u00fcr die Befreiung anderer wurde.",
    land:"USA", tags:["Spiritualit\u00e4t"], gender:"m"},
  { route:"beruehmte-james-levine", name:"James Levine", added:"2026-07-22", subtyp:"SE9w1",
    heading:"James Levine \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w1 \u00b7 1943\u20132021. Dirigent, 40 Jahre Musikdirektor der Metropolitan Opera New York. Der Elefant, der das Haus bewohnte \u2013 vollst\u00e4ndige Versenkung, langer Atem, und ein Schatten, der das Bild f\u00fcr immer teilt.",
    land:"USA", tags:["Musik"], gender:"m"},
  { route:"beruehmte-baerbel-bas", name:"B\u00e4rbel Bas", subtyp:"SE9w1",
    heading:"B\u00e4rbel Bas \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w1 \u00b7 geb. 1968. Politikerin (SPD), Bundestagspr\u00e4sidentin seit 2021. Der Elefant, der das Haus h\u00fctet \u2013 beharrlich, ger\u00e4uschlos, mit einer Stabilit\u00e4t, die st\u00e4rker ist als alle Lautst\u00e4rke. Tierentsprechung: Elefant.",
    land:"Deutschland", tags:["Politik"] , gender:"f"},
  { route:"beruehmte-ludwig-erhard", name:"Ludwig Erhard", added:"2026-08-04", subtyp:"SE9w1",
    heading:"Ludwig Erhard \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w1 \u00b7 1897\u20131977. Wirtschaftswissenschaftler, Bundeswirtschaftsminister 1949\u20131963, Bundeskanzler 1963\u20131966, Vater der Sozialen Marktwirtschaft. Der Elefant, der ohne lautes Auftreten das deutsche Wirtschaftswunder trug \u2013 beharrlich, prinzipientreu, mit der Zigarre als einzigem Ausdruck von Gelassenheit.",
    land:"Deutschland", tags:["Politik","Wirtschaft"], gender:"m"},
  { route:"beruehmte-laozi", name:"Laotse (Laozi)", added:"2026-08-07", subtyp:"SE9w1",
    heading:"Laotse (Laozi) \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w1 \u00b7 ca. 6. Jh. v. Chr. (Legende). Philosoph, Begr\u00fcnder des Daoismus, zugeschriebener Verfasser des Daodejing. Der Legende nach ritt er zuletzt auf einem schwarzen B\u00fcffel in die W\u00fcste davon. Der Elefant, der losl\u00e4sst, was er nicht halten muss \u2013 Wu Wei als h\u00f6chste Form der Neun.",
    land:"China", tags:["Philosophie","Religion"], gender:"m"},
  { route:"beruehmte-cynthia-moss", name:"Dr. Cynthia Moss", added:"2026-08-19", subtyp:"SE9w1",
    heading:"Dr. Cynthia Moss \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w1 \u00b7 geb. 1940. Verhaltensbiologin, Gr\u00fcnderin des Amboseli Elephant Research Project 1972, seit \u00fcber 50 Jahren l\u00fcckenlose Begleitung derselben Elefantenfamilien. Die \u201eGrande Dame der Elefantenforschung\u201c. Der Elefant, der sein ganzes Leben mit Elefanten verbrachte.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-angela-merkel", name:"Angela Merkel", added:"2026-07-22", subtyp:"SE9w8",
    heading:"Angela Merkel \u2013 Selbsterhaltende Typ 9",
    teaser:"SE9w8 \u00b7 geb. 1954. Bundeskanzlerin 2005\u20132021. Sechzehn Jahre Aussitzen, Entscheiden, Beharren \u2013 und ein Erbe voller Widerspr\u00fcche. Der Elefant, der sich in seinem eigenen Rhythmus bewegt. Manchmal Weisheit. Manchmal Stillstand.",
    land:"Deutschland", tags:["Politik"], gender:"f"},
  { route:"beruehmte-carmen-goglin", name:"Carmen Goglin", added:"2026-08-16", subtyp:"SE9w8",
    heading:"Carmen Goglin – Selbsterhaltende Typ 9",
    teaser:"SE9w8 · Lachtrainerin, Coachin und Autorin, Gründerin der Reutlinger Lachschule. Vom Personalwesen zum viralen Lachyoga-Phänomen nach der Finch-Parodie 2020/21. Der Elefant, der trompeten kann. Tierentsprechung: Elefant.",
    tags:["Gesellschaft"], gender:"f"},
  { route:"beruehmte-gina-rinehart", name:"Gina Rinehart", added:"2026-08-16", subtyp:"SE9w8",
    heading:"Gina Rinehart – Selbsterhaltende Typ 9",
    teaser:"SE9w8 · geb. 1954. Bergbau-Unternehmerin, reichste Frau Australiens, Chefin von Hancock Prospecting. Jahrelanger Rechtsstreit mit den eigenen Kindern um den Familientrust. Der Elefant, der sein Territorium nie aufgibt. Tierentsprechung: Elefant.",
    land:"Australien", tags:["Wirtschaft"], gender:"f"},
  { route:"beruehmte-thomas-von-aquin", name:"Thomas von Aquin", added:"2026-08-14", subtyp:"SE9w8",
    heading:"Thomas von Aquin – Selbsterhaltender Typ 9",
    teaser:"SE9w8 · ca. 1225–1274. Italienischer Theologe und Philosoph, Summa Theologica, Begründer des Thomismus. Der ›stumme Ochse‹, der ein Jahr Gefangenschaft unbewegt überstand. Der Elefant mit Achterflügel: Gelassenheit als tägliche Praxis, Unbeugsamkeit im entscheidenden Moment. Tierentsprechung: Elefant.",
    tags:["Geschichte","Philosophie"], gender:"m"},
  { route:"beruehmte-david-hume", name:"David Hume", subtyp:"SE9w8",
    heading:"David Hume \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w8 \u00b7 1711\u20131776. Schottischer Philosoph. Ein Traktat \u00fcber die menschliche Natur, radikaler Skeptizismus. Der Elefant, der an allem zweifelte \u2013 an der Kausalit\u00e4t, am Selbst, an Gott \u2013 und dabei gelassener blieb als jeder seiner erbitterten Kritiker.",
    land:"Schottland", tags:["Philosophie"], gender:"m"},
  { route:"beruehmte-hans-dietrich-genscher", name:"Hans-Dietrich Genscher", subtyp:"SE9w8",
    heading:"Hans-Dietrich Genscher \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w8 \u00b7 1927\u20132016. Au\u00dfenminister und Vizekanzler der Bundesrepublik Deutschland (1974\u20131992). 23 Jahre pr\u00e4gende au\u00dfenpolitische Kraft, Architekt der deutschen Einheit, Br\u00fcckenbauer zwischen Ost und West. Der Elefant, der nicht vergisst \u2013 und nie aufh\u00f6rt zu verhandeln. Tierentsprechung: Elefant.",
    land:"Deutschland", tags:["Politik"] , gender:"m"},
  { route:"beruehmte-abida-parveen", name:"Abida Parveen", added:"2026-08-04", subtyp:"SE9w8",
    heading:"Abida Parveen \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w8 \u00b7 geb. 1954 in Larkana, Pakistan. S\u00e4ngerin, \u201eK\u00f6nigin des Sufi-Gesangs\u201c, bekannteste Interpretin des Kalam und Qawwali. Der Elefant, der in Trance versinkt und dabei ganze Konzerts\u00e4le mit sich rei\u00dft \u2013 Ruhe, die zur Ekstase wird.",
    land:"Pakistan", tags:["Musik","Spiritualit\u00e4t"], gender:"f"},
  { route:"beruehmte-johannes-brahms", name:"Johannes Brahms", added:"2026-08-13", subtyp:"SE9w8",
    heading:"Johannes Brahms \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w8 \u00b7 1833\u20131897. Deutscher Komponist. 1853 von Robert Schumann entdeckt, vier Jahrzehnte treuer Begleiter der Familie Schumann, 21 Jahre Arbeit an der 1. Symphonie. Der Elefant mit Achterfl\u00fcgel: schroffer Witz, unersch\u00fctterliche Geduld und eine Treue, die nie aufgab. Tierentsprechung: Elefant.",
    land:"Deutschland", tags:["Musik","Geschichte"], gender:"m"},
  { route:"beruehmte-dietmar-baer", name:"Dietmar B\u00e4r", added:"2026-08-25", subtyp:"SE9w8",
    heading:"Dietmar B\u00e4r \u2013 Selbsterhaltender Typ 9",
    teaser:"SE9w8 \u00b7 geb. 1961. Schauspieler, seit 1997 \u00bbKommissar Ballauf\u00ab im K\u00f6lner Tatort. Der Elefant mit Achterfl\u00fcgel: bodenst\u00e4ndig, genussorientiert, direkt \u2013 seit fast drei Jahrzehnten in derselben Rolle, an der Seite desselben Kollegen.",
    land:"Deutschland", tags:["Film","Fernsehen"], gender:"m"},
  { route:"beruehmte-amelia-earhart", name:"Amelia Earhart", added:"2026-08-17", subtyp:"SO9w1",
    heading:"Amelia Earhart – Soziale Typ 9",
    teaser:"SO9w1 · 1897–1937. Erste Frau mit Alleinflug über den Atlantik, Gründerin der Ninety-Nines, verschollen bei Weltumrundungsversuch. Verschmelzung mit der Sache statt persönlichem Nervenkitzel, Prinzipientreue ohne Selbstinszenierung. Tierentsprechung: Büffel.",
    tags:["Geschichte","Astronaut"], gender:"f"},
  { route:"beruehmte-sandra-hueller", name:"Sandra Hüller", added:"2026-08-16", subtyp:"SO9w1",
    heading:"Sandra Hüller – Soziale Typ 9",
    teaser:"SO9w1 · geb. 1978. Schauspielerin, Toni Erdmann, Anatomie eines Falls, The Zone of Interest. Zwei Oscar-Nominierungen 2024, treu geblieben dem Theater in Leipzig. Der Büffel, der trägt, statt zu glänzen. Tierentsprechung: Büffel.",
    land:"Deutschland", tags:["Film","Schauspiel"], gender:"f"},
  { route:"beruehmte-kevin-costner", name:"Kevin Costner", added:"2026-07-22", subtyp:"SO9w1",
    heading:"Kevin Costner \u2013 Sozialer Typ 9",
    teaser:"SO9w1 \u00b7 geb. 1955. Schauspieler und Regisseur. Dances with Wolves, Field of Dreams, Yellowstone. Der B\u00fcffel, der nicht f\u00fcr sich k\u00e4mpft \u2013 sondern f\u00fcr etwas, das gr\u00f6\u00dfer ist als er selbst.",
    land:"USA", tags:["Film","Schauspiel"], gender:"m"},
  { route:"beruehmte-peter-falk", name:"Peter Falk", added:"2026-08-13", subtyp:"SO9w1",
    heading:"Peter Falk – Sozialer Typ 9",
    teaser:"SO9w1 · 1927–2011. Schauspieler, weltberühmt als TV-Ermittler ›Columbo‹ (1968–2003). Zerknitterter Trenchcoat, nie eine Waffe, vier Emmys. Der Büffel mit Einserflügel: gleiche Aufmerksamkeit für jeden Menschen im Raum, unerbittliche stille Gerechtigkeit. Tierentsprechung: Büffel.",
    land:"USA", tags:["Film","Fernsehen"], gender:"m"},
  { route:"beruehmte-steffi-graf", name:"Steffi Graf", subtyp:"SO9w1",
    heading:"Steffi Graf \u2013 Sozialer Typ 9",
    teaser:"SO9w1 \u00b7 geb. 1969. Tennisspielerin, 22 Grand-Slam-Titel, Golden Slam 1988. Der B\u00fcffel, der einfach l\u00e4uft \u2013 beharrlich, bodennah, mit einer Stille im Inneren, die st\u00e4rker ist als jeder Siegesjubel. Tierentsprechung: B\u00fcffel.",
    land:"Deutschland", tags:["Sport"], gender:"f" },
  { route:"beruehmte-julian-assange", name:"Julian Assange", added:"2026-08-04", subtyp:"SO9w1",
    heading:"Julian Assange \u2013 Sozialer Typ 9",
    teaser:"SO9w1 \u00b7 geb. 1971 in Townsville, Australien. Gr\u00fcnder von WikiLeaks, Enth\u00fcller geheimer Regierungsdokumente. Der B\u00fcffel, der sich f\u00fcr Transparenz und die Gemeinschaft der Informierten aufopferte \u2013 und Jahre in Isolation und Haft daf\u00fcr zahlte.",
    land:"Australien", tags:["Medien","Aktivismus"], gender:"m"},
  { route:"beruehmte-alan-mcelligott", name:"Dr. Alan McElligott", added:"2026-08-19", subtyp:"SO9w1",
    heading:"Dr. Alan McElligott \u2013 Sozialer Typ 9",
    teaser:"SO9w1 \u00b7 Verhaltensforscher an der City University of Hong Kong, erforscht das Sozialleben von Wasserb\u00fcffelherden. Entdeckte, dass selbst verwilderte Wasserb\u00fcffel komplexe Freundschaften und Pers\u00f6nlichkeitsprofile pflegen. Der B\u00fcffel, der die Herde des B\u00fcffels erforschte.",
    tags:["Wissenschaft"], gender:"m"},
  { route:"beruehmte-ronald-reagan", name:"Ronald Reagan", added:"2026-07-22", subtyp:"SO9w8",
    heading:"Ronald Reagan \u2013 Sozialer Typ 9",
    teaser:"SO9w8 \u00b7 1911\u20132004. 40. Pr\u00e4sident der USA 1981\u20131989. Der Gro\u00dfe Kommunikator: Morning in America, Evil Empire, Gorbatschow. Der B\u00fcffel, der l\u00e4chelt \u2013 und dem die Herde folgt.",
    land:"USA", tags:["Politik"], gender:"m"},
  { route:"beruehmte-wilma-mankiller", name:"Wilma Mankiller", added:"2026-08-04", subtyp:"SO9w8",
    heading:"Wilma Mankiller \u2013 Sozialer Typ 9",
    teaser:"SO9w8 \u00b7 1945\u20132010. Erste Frau als Principal Chief der Cherokee Nation (1985\u20131995). Der B\u00fcffel, der eine ganze Nation trug \u2013 gegen Krankheit, Widerstand und Zweifel, mit unbeirrbarer Kampfkraft f\u00fcr die Gemeinschaft.",
    land:"USA", tags:["Politik","Aktivismus"], gender:"f"},
  { route:"beruehmte-willy-brandt", name:"Willy Brandt", subtyp:"SO9w8",
    heading:"Willy Brandt \u2013 Sozialer Typ 9",
    teaser:"SO9w8 \u00b7 1913\u20131992. Bundeskanzler, Friedensnobelpreis 1971, Architekt der Ostpolitik. Der Kniefall von Warschau \u2013 ein Schweigen, das Geschichte schrieb. Tierentsprechung: B\u00fcffel.",
    land:"Schweden", tags:["Politik"], gender:"m" },
  { route:"beruehmte-sophie-marceau", name:"Sophie Marceau", added:"2026-08-16", subtyp:"SX9w1",
    heading:"Sophie Marceau \u2013 Sexuelle Typ 9",
    teaser:"SX9w1 \u00b7 geb. 1966. Schauspielerin und Regisseurin, La Boum, Braveheart, James Bond. Siebzehn Jahre Verschmelzung mit Andrzej Zulawski, dann ein klares Ultimatum. Das Faultier, das seinen eigenen Ast h\u00e4lt. Tierentsprechung: Faultier.",
    land:"Polen", tags:["Film","Schauspiel"], gender:"f"},
  { route:"beruehmte-iga-swiatek", name:"Iga \u015awi\u0105tek", added:"2026-07-22", subtyp:"SX9w1",
    heading:"Iga \u015awi\u0105tek \u2013 Sexueller Typ 9",
    teaser:"SX9w1 \u00b7 geb. 2001. Tennisprofi. Roland Garros 2020, 2022, 2023, 2024, US Open 2022. Die dominanteste Spielerin ihrer \u00c4ra \u2013 und das Faultier, das im Flow fliegt.",
    land:"Polen", tags:["Sport","Tennis"], gender:"f"},
  { route:"beruehmte-jane-goodall", name:"Dr. Jane Goodall", added:"2026-08-17", subtyp:"SX9w1",
    heading:"Dr. Jane Goodall – Sexuelle Typ 9",
    teaser:"SX9w1 · 1934–2025. Primatologin, Begründerin der modernen Schimpansenforschung, entdeckte Werkzeuggebrauch bei Tieren. Verschmelzung als Forschungsmethode, später Gründerin von Roots & Shoots. Tierentsprechung: Faultier.",
    tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-craig-foster", name:"Craig Foster", added:"2026-08-17", subtyp:"SX9w1",
    heading:"Craig Foster – Sexuelle Typ 9",
    teaser:"SX9w1 · geb. 1962. Südafrikanischer Naturfilmer, Regisseur von „My Octopus Teacher“ (Oscar 2021), Mitgründer des Sea Change Project. Verschmelzung mit einem wilden Oktopus als Weg aus Burnout und Depression. Tierentsprechung: Faultier.",
    land:"Südafrika", tags:["Wissenschaft","Film"], gender:"m"},
  { route:"beruehmte-ana-salceda", name:"Ana Salceda", added:"2026-08-17", subtyp:"SX9w1",
    heading:"Ana Salceda – Sexuelle Typ 9",
    teaser:"SX9w1 · Spanische Journalistin und Filmemacherin, Regisseurin von „A Sloth Named Velcro“ (PBS Nature, 2014). Wurde durch eine zufällige, tief persönliche Verschmelzung mit einem verwaisten Faultier-Jungtier zur Faultier-Erzählerin. Tierentsprechung: Faultier.",
    land:"Spanien", tags:["Film"], gender:"f"},
  { route:"beruehmte-keanu-reeves", name:"Keanu Reeves", subtyp:"SX9w1",
    heading:"Keanu Reeves \u2013 Sexueller Typ 9",
    teaser:"SX9w1 \u00b7 geb. 1964. Schauspieler (The Matrix, John Wick). Der stille Mann, der sich in jede Rolle aufl\u00f6st \u2013 und im wirklichen Leben noch bescheidener ist als auf der Leinwand. Tierentsprechung: Faultier.",
    land:"Kanada", tags:["Schauspiel"], gender:"m" },
  { route:"beruehmte-diego-velazquez", name:"Diego Velázquez", added:"2026-08-15", subtyp:"SX9w1",
    heading:"Diego Velázquez – Sexueller Typ 9",
    teaser:"SX9w1 · 1599–1660. Maler. Las Meninas, Hofmaler Philipps IV., Kampf um den Santiago-Orden. Das Faultier mit Einserflügel: Verschmelzung von Maler, Motiv und Betrachter, gepaart mit unnachgiebigem Standesanspruch. Tierentsprechung: Faultier.",
    land:"Frankreich", tags:["Kunst"], gender:"m"},
  { route:"beruehmte-carl-rogers", name:"Dr. Carl Rogers", added:"2026-08-05", subtyp:"SX9w1",
    heading:"Carl Rogers \u2013 Sexueller Typ 9",
    teaser:"SX9w1 \u00b7 1902\u20131987. Psychologe, Begr\u00fcnder der klientenzentrierten Gespr\u00e4chstherapie. Das Faultier, das den wertfreien Raum schuf, in dem Menschen sich selbst wieder finden konnten \u2013 bedingungslose Wertsch\u00e4tzung als therapeutisches Prinzip.",
    land:"USA", tags:["Psychologie","Wissenschaft"], gender:"m"},
  { route:"beruehmte-hundertwasser", name:"Friedensreich Hundertwasser", added:"2026-07-31", subtyp:"SX9w8",
    heading:"Friedensreich Hundertwasser \u2013 Sexueller Typ 9",
    teaser:"SX9w8 \u00b7 1928\u20132000. Maler, Architekt, \u00d6kologe. Vom Friedrich Stowasser zum Friedensreich Hundertwasser \u2013 ein Leben als Verschmelzung mit der Natur, gegen die gerade Linie, f\u00fcr das organische Flie\u00dfen. Tierentsprechung: Faultier.",
    tags:["Kunst","Architektur"] , gender:"m"},
  { route:"beruehmte-dakota-johnson", name:"Dakota Johnson", added:"2026-07-22", subtyp:"SX9w8",
    heading:"Dakota Johnson \u2013 Sexueller Typ 9",
    teaser:"SX9w8 \u00b7 geb. 1989. Schauspielerin. Fifty Shades, Suspiria, Die verlorene Tochter. Enkelin von Tippi Hedren, Tochter von Melanie Griffith. Das Faultier, das bei\u00dft \u2013 wenn man es herausfordert.",
    land:"USA", tags:["Film","Schauspiel"], gender:"f"},
  { route:"beruehmte-heike-makatsch", name:"Heike Makatsch", added:"2026-07-15", subtyp:"SX9w8",
    heading:"Heike Makatsch \u2013 Sexueller Typ 9",
    teaser:"SX9w8 \u00b7 geb. 1971. Schauspielerin, bekannt aus \u201eAim\u00e9e & Jaguar\u201c, \u201eLove Actually\u201c u. v. m. Die sexuelle Neun als Verst\u00e4rkungstyp: vollst\u00e4ndige Hingabe an die Rolle, mit der Kraft des Achterfl\u00fcgels im R\u00fccken. Tierentsprechung: Faultier.",
    land:"Deutschland", tags:["Schauspiel"] , gender:"f"},
  { route:"beruehmte-mario-barth", name:"Mario Barth", added:"2026-08-05", subtyp:"SX9w8",
    heading:"Mario Barth \u2013 Sexueller Typ 9",
    teaser:"SX9w8 \u00b7 geb. 1972. Comedian, Rekordhalter f\u00fcr die gr\u00f6\u00dfte Comedy-Show der Welt (Olympiastadion Berlin). Das Faultier, das sich mit dem Lachen der Masse verschmilzt \u2013 und mit Wucht zubei\u00dft, wenn Kritik kommt.",
    land:"Deutschland", tags:["Comedy"], gender:"m"},
  { route:"beruehmte-lucy-cooke", name:"Lucy Cooke", added:"2026-08-19", subtyp:"SX9w8",
    heading:"Lucy Cooke \u2013 Sexueller Typ 9",
    teaser:"SX9w8 \u00b7 britische Zoologin, Bestseller-Autorin (\u201eThe Truth About Animals\u201c), Gr\u00fcnderin der Sloth Appreciation Society. Verschmolz ihr Leben mit dem Faultier \u2013 und macht dessen tr\u00e4gen Ruf mit spr\u00fchender, humorvoller Verve zunichte.",
    land:"Großbritannien", tags:["Wissenschaft"], gender:"f"},
  { route:"beruehmte-kris-marshall", name:"Kris Marshall", added:"2026-08-23", subtyp:"SX9w1",
    heading:"Kris Marshall – Sexueller Typ 9",
    teaser:"SX9w1 · geb. 1973. Britischer Schauspieler, bekannt als DI Humphrey Goodman in „Death in Paradise“. Sohn eines RAF-Navigators, aufgewachsen mit häufigen Umzügen und Internat – wenige, dafür sehr lange gehaltene Bindungen statt vieler kurzer.",
    land:"Großbritannien", tags:["Film","Schauspiel"], gender:"m"},
  { route:"beruehmte-elizabeth-barrett-browning", name:"Elizabeth Barrett Browning", added:"2026-08-21", subtyp:"SX9w8",
    heading:"Elizabeth Barrett Browning – Sexueller Typ 9",
    teaser:"SX9w8 · 1806–1861. Englische Dichterin, jahrzehntelang chronisch krank und im Vaterhaus isoliert. Verschmolz ihr Leben radikal mit einem einzigen Menschen – der geheimen Liebe zu Robert Browning – und trotzte dafür der völligen Verstoßung durch den eigenen Vater.",
    land:"Großbritannien", tags:["Literatur"], gender:"f"},
  { route:"beruehmte-arthur-rimbaud", name:"Arthur Rimbaud", added:"2026-08-27", subtyp:"SX4w3",
    heading:"Arthur Rimbaud – Sexueller Typ 4",
    teaser:"SX4w3 · 1854–1891. Französischer Dichter. Wollte mit 15–20 Jahren die gesamte französische Dichtung übertreffen, stürmische Beziehung mit Paul Verlaine, radikaler Bruch mit dem Schreiben mit 21 Jahren, danach Kaufmann und Waffenhändler in Afrika. Tierentsprechung: Chihuahua.",
    land:"Frankreich", tags:["Literatur"], gender:"m"},
  { route:"beruehmte-june-carter-cash", name:"June Carter Cash", added:"2026-08-29", subtyp:"SE4w3",
    heading:"June Carter Cash – Selbsterhaltender Typ 4",
    teaser:"SE4w3 · 1929–2003. US-amerikanische Sängerin, Songwriterin und Schauspielerin aus der legendären Carter Family, fünffache Grammy-Gewinnerin. Schrieb ›Ring of Fire‹, organisierte 1967/68 die Intervention, die Johnny Cash das Leben rettete, öffentlicher Heiratsantrag 1968 mitten im Konzert. Tierentsprechung: Taube.",
    land:"USA", tags:["Musik"], gender:"f"},
  { route:"beruehmte-peter-gabriel", name:"Peter Gabriel", added:"2026-08-29", subtyp:"SE4w3",
    heading:"Peter Gabriel – Selbsterhaltender Typ 4",
    teaser:"SE4w3 · geb. 1950. Britischer Musiker, Genesis-Frontmann bis 1975, danach gefeierte Solokarriere („So“, „Sledgehammer“). Trat in selbst entworfenen Masken und Kostümen auf, gründete WOMAD, Real World Records und die Menschenrechtsorganisation Witness. Tierentsprechung: Taube.",
    land:"Großbritannien", tags:["Musik"], gender:"m"},
  { route:"beruehmte-enya", name:"Enya", added:"2026-08-31", subtyp:"SE4w3",
    heading:"Enya – Selbsterhaltender Typ 4",
    teaser:"SE4w3 · geb. 1961. Irische Sängerin und Komponistin, verließ 1982 die Familienband Clannad, arbeitet seither fast ausschließlich mit Produzent Nicky Ryan und Texterin Roma Ryan. Weltberühmt durch „Orinoco Flow“, tourte praktisch nie, lebt zurückgezogen auf Ayesha Castle bei Dublin. Tierentsprechung: Taube.",
    land:"Irland", tags:["Musik"], gender:"f"},
  { route:"beruehmte-honore-de-balzac", name:"Honoré de Balzac", added:"2026-08-27", subtyp:"SE4w3",
    heading:"Honoré de Balzac – Selbsterhaltender Typ 4",
    teaser:"SE4w3 · 1799–1850. Französischer Schriftsteller, „La Comédie humaine“ (fast 100 Romane/Erzählungen). Eignete sich selbst das Adelsprädikat „de“ an, schrieb nächtelang bis zu 18 Stunden koffeingetrieben gegen drückende Schulden an, 17 Jahre Briefwechsel mit Gräfin Hańska vor der Heirat kurz vor seinem Tod. Tierentsprechung: Taube.",
    land:"Frankreich", tags:["Literatur"], gender:"m"},
  { route:"beruehmte-t-e-lawrence", name:"T. E. Lawrence", added:"2026-08-28", subtyp:"SE4w3",
    heading:"T. E. Lawrence (Lawrence von Arabien) – Selbsterhaltender Typ 4",
    teaser:"SE4w3 · 1888–1935. Britischer Offizier, Archäologe und Schriftsteller, Schlüsselfigur der arabischen Revolte im Ersten Weltkrieg. Half selbst am Mythos „Lawrence von Arabien“ mit, floh danach unter falschem Namen in niedrigste Militärränge, ließ sich zur Selbstbestrafung auspeitschen. „Die sieben Säulen der Weisheit“ mehrfach neu geschrieben. Tierentsprechung: Taube.",
    land:"Vereinigtes Königreich", tags:["Militär","Literatur"], gender:"m"},
];
// Einmalig sortieren: erst nach Typ-Nummer (1-9), dann Instinkt (SE/SO/SX),
// dann Flügel - exakt dieselbe Reihenfolge wie die Schnellnavigation-Chips
// (SE1, SO1, SX1, SE2, SO2, SX2, ...). Eine reine String-Sortierung des
// Subtyp-Codes (SE1...SE9, dann erst SO1...) würde von der Chip-Reihenfolge
// abweichen und beim Weiterscrollen nach z.B. SE4 unerwartet zu SE5 statt
// SO4 springen.
function bpSortKey(subtyp) {
  const s = subtyp || "";
  const typ = parseInt(s.replace(/[^0-9]/g, "")[0] || "0");
  const instOrder = { SE: 0, SO: 1, SX: 2 }[s.slice(0, 2).toUpperCase()] ?? 9;
  const wing = s.slice(-1);
  return [typ, instOrder, wing];
}
BERUEHMT_PORTRAITS.sort(function(a, b) {
  const ka = bpSortKey(a.subtyp), kb = bpSortKey(b.subtyp);
  if (ka[0] !== kb[0]) return ka[0] - kb[0];
  if (ka[1] !== kb[1]) return ka[1] - kb[1];
  return String(ka[2]).localeCompare(String(kb[2]));
});

const ASTROLOGIE_PORTRAITS = [
  { route:"astrologie-reinhold-messner",  name:"Reinhold Messner",  subtyp:"SE1w9",  heading:"Reinhold Messner \u2013 Selbsterhaltender Typ 1",  teaser:"SE1w9 \u00b7 geb. 1944. Bergsteiger, Abenteurer, Autor. Erster Mensch, der alle 14 Achttausender ohne Sauerstoffmaske bestieg. Sonne Jungfrau im 9. Haus, Mond Jungfrau, AC Krebs, MC Widder \u2013 Perfektionismus als \u00dcberlebensstrategie." },
  { route:"astrologie-marilyn-monroe",    name:"Marilyn Monroe",    subtyp:"SX3w4",  heading:"Marilyn Monroe \u2013 Sexueller Typ 3",             teaser:"SX3w4 \u00b7 1926\u20131962. Schauspielerin, Ikone. Sonne Zwillinge, Mond Wassermann im 7. Haus, AC L\u00f6we, MC Stier \u2013 Glamour und Tragik als zwei Seiten einer Seele." },
  { route:"astrologie-romy-schneider",    name:"Romy Schneider",    subtyp:"SO4w3",  heading:"Romy Schneider \u2013 Soziale Typ 4",               teaser:"SO4w3 \u00b7 1938\u20131982. Schauspielerin. Sonne und Mond Waage im 4. Haus, AC Zwillinge, MC Wassermann, Venus Skorpion im 5. Haus \u2013 die zerrissene Kaiserin der Leinwand.", beruehmteRoute:"beruehmte-romy-schneider" , gender:"f"},
  { route:"astrologie-john-lennon",       name:"John Lennon",       subtyp:"SO4w5",  heading:"John Lennon \u2013 Sozialer Typ 4",                 teaser:"SO4w5 \u00b7 1940\u20131980. Musiker, Friedensaktivist. Sonne Waage im 7. Haus, Mond Wassermann im 11. Haus, AC Fische, MC Sch\u00fctze \u2013 der suchende Poet einer besseren Welt.", beruehmteRoute:"beruehmte-john-lennon" , gender:"m"},
  { route:"astrologie-albert-einstein",   name:"Albert Einstein",   subtyp:"SO5w6",  heading:"Albert Einstein \u2013 Sozialer Typ 5",             teaser:"SO5w6 \u00b7 1879\u20131955. Physiker, Nobelpreistr\u00e4ger. Sonne Fische im 10. Haus, Mond Sch\u00fctze im 6. Haus, AC Krebs, MC Fische \u2013 die kosmische Formel des Genies." },
  { route:"astrologie-boris-becker",      name:"Boris Becker",      subtyp:"SX7w8",  heading:"Boris Becker \u2013 Sexueller Typ 7",               teaser:"SX7w8 \u00b7 geb. 1967. Tennisprofi, dreifacher Wimbledon-Sieger. Sonne Skorpion im 8. Haus, AC Sch\u00fctze, Venus und MC Waage im 10. Haus, Mars Steinbock \u2013 Leichtigkeit und Tiefe im ewigen Tanz.", beruehmteRoute:"beruehmte-boris-becker", kriminalRoute:"kriminalpsychologie-boris-becker" , gender:"m"},
  { route:"astrologie-gerhard-schroeder", name:"Gerhard Schr\u00f6der",  subtyp:"SX8w7",  heading:"Gerhard Schr\u00f6der \u2013 Sexueller Typ 8",           teaser:"SX8w7 \u00b7 geb. 1944. Bundeskanzler 1998\u20132005. Sonne Widder im 10. Haus, AC Krebs, Merkur Stier im 10. Haus, Venus Fische im 10. Haus, MC Fische \u2013 der Instinktpolitiker der Macht." },
  { route:"astrologie-angela-merkel",     name:"Angela Merkel",     subtyp:"SE9w8",  heading:"Angela Merkel \u2013 Selbsterhaltende Typ 9",       teaser:"SE9w8 \u00b7 geb. 1954. Bundeskanzlerin 2005\u20132021. Sonne Krebs im 10. Haus, AC Waage, Mond Wassermann im 4. Haus, Mars Sch\u00fctze im 3. Haus \u2013 die unbewegliche Vermittlerin der Macht." },
];

const ENNEAGRAMM_KUNST = {
  1: {
    principle: "Zorn & Vollkommenheit",
    title: "Typ 1 \u2013 Die Kunst des Zorns und der Vollkommenheit",
    intro: "Sechs Kunstwerke, die von Ordnung, moralischer Gewissheit und dem inneren Richter erz\u00e4hlen \u2013 der Signatur der Eins.",
    works: [
      { img:"typ1-01-munch-eifersucht", artist:"Edvard Munch", title:"Eifersucht", year:"1895", text:"Munch malt eifers\u00fcchtige Spannung als beklemmende Farbfl\u00e4che \u2013 im Vordergrund eine gr\u00fcblerische m\u00e4nnliche Figur, im Hintergrund das Paar. Die Eins erkennt sich hier nicht in der Eifersucht selbst, sondern in der H\u00e4rte des inneren Richters: der st\u00e4ndige Vergleich zwischen dem, was ist, und dem, was sein sollte, das Gef\u00fchl, im Recht zu sein und doch zu kurz zu kommen." },
      { img:"typ1-02-rembrandt-apostel-paulus", artist:"Rembrandt", title:"Der Apostel Paulus", year:"1657", text:"Rembrandt zeigt Paulus als gr\u00fcblerischen Gelehrten, das Schwert im Scho\u00df, den Blick nach innen gerichtet. Genau diese Mischung aus moralischer Gewissheit und stiller Selbstpr\u00fcfung ist die Signatur der Eins: ein Leben im Dienst einer Wahrheit, die st\u00e4ndig gegen das eigene Ungen\u00fcgen abgewogen wird." },
      { img:"typ1-03-duerer-rosenkranzfest", artist:"Albrecht D\u00fcrer", title:"Rosenkranzfest", year:"1506", text:"Ein streng komponiertes, symmetrisches Andachtsbild mit Papst und Kaiser zu F\u00fc\u00dfen Marias, jede Figur exakt platziert. D\u00fcrers Pr\u00e4zision selbst ist typisch einserhaft: Ordnung als Weg zur Gnade, Handwerk als moralische Disziplin." },
      { img:"typ1-04-cranach-suendenfall", artist:"Lucas Cranach d. \u00c4.", title:"S\u00fcndenfall und Erl\u00f6sung", year:"1529", text:"Cranach stellt in einem Bild zwei Zust\u00e4nde der Menschheit gegen\u00fcber: S\u00fcndenfall und Erl\u00f6sung, Gesetz und Gnade. Diese scharfe moralische Zweiteilung \u2013 richtig und falsch, gefallen und erl\u00f6st \u2013 ist die Denkform, in der die Eins von Kindheit an zu Hause ist." },
      { img:"typ1-05-grant-wood-american-gothic", artist:"Grant Wood", title:"American Gothic", year:"1930", text:"Zwei Menschen vor einem strengen Bauernhaus, aufrecht, unbewegt, die Mienen von Pflichtbewusstsein gezeichnet. Wenige Bilder fangen die einserhafte Haltung so genau ein: Zucht statt Nachgiebigkeit, Ordnung als sichtbare Tugend." },
      { img:"typ1-06-duerer-vater", artist:"Albrecht D\u00fcrer", title:"Portr\u00e4t von D\u00fcrers Vater", year:"1497", text:"Jede Falte, jede Ader mit fast unbarmherziger Genauigkeit wiedergegeben \u2013 keine Schmeichelei, nur Wahrheit. Diese schonungslose Ehrlichkeit im Blick auf das, was ist, ohne Besch\u00f6nigung, ist die k\u00fcnstlerische Entsprechung des einserhaften Wahrheitsanspruchs." },
    ],
  },
  2: {
    principle: "Stolz & Hingabe",
    title: "Typ 2 \u2013 Die Kunst der Liebe und Hingabe",
    intro: "Sechs Kunstwerke \u00fcber Zuneigung, Anziehungskraft und das Bed\u00fcrfnis, durch Liebe gebraucht zu werden \u2013 die Signatur der Zwei.",
    works: [
      { img:"typ2-01-davinci-abendmahl", artist:"Leonardo da Vinci (Kopie nach)", title:"Das letzte Abendmahl", year:"1494\u20131497", text:"Christus im Zentrum, umgeben von den J\u00fcngern, die Geste der Hingabe im Moment des Abschieds \u2013 Beziehung als das, was bleibt, wenn alles andere vergeht. Die Zwei erkennt sich in dieser Szene: sich ganz f\u00fcr andere hingeben, damit die Verbindung nicht abrei\u00dft." },
      { img:"typ2-02-raffael-sixtinische-madonna", artist:"Raffael", title:"Sixtinische Madonna", year:"1513\u20131514", text:"Maria tr\u00e4gt das Kind mit einer Geste, die Z\u00e4rtlichkeit und Opferbereitschaft zugleich ist, w\u00e4hrend sie es der Welt entgegenh\u00e4lt. Genau das ist die Bewegung der Zwei: die eigene Liebe sichtbar machen, indem sie sich einem anderen ganz zuwendet." },
      { img:"typ2-03-botticelli-geburt-der-venus", artist:"Sandro Botticelli", title:"Die Geburt der Venus", year:"1484\u20131485", text:"Venus, die G\u00f6ttin der Liebe, tritt makellos, anmutig, empfangsbereit ins Leben \u2013 ein Bild reiner Anziehungskraft. Die Zwei kennt diese Sehnsucht, unwiderstehlich liebenswert zu sein, um sicher sein zu k\u00f6nnen, geliebt zu werden." },
      { img:"typ2-04-venus-von-milo", artist:"Unbekannter Bildhauer", title:"Venus von Milo", year:"Ende 2. Jh. v. Chr.", text:"Auch ohne Arme strahlt diese Figur zeitlose Anmut aus \u2013 Sch\u00f6nheit, die nichts tun muss, um zu wirken. Und doch ist es genau diese Wirkung, um die sich die Zwei im Verborgenen bem\u00fcht: gesehen und gebraucht zu werden." },
      { img:"typ2-05-veronese-mars-venus", artist:"Paolo Veronese", title:"Mars und Venus", year:"1580", text:"Der Kriegsgott legt seine Waffen ab, ber\u00fchrt von der Liebe \u2013 ein Bild davon, wie Zuneigung selbst die H\u00e4rtesten weich macht. Die Zwei glaubt zutiefst an diese Kraft: dass Liebe verwandeln kann, wenn man sie nur bedingungslos genug gibt." },
      { img:"typ2-06-allori-venus-amor", artist:"Alessandro Allori", title:"Venus und Amor", year:"nach 1570", text:"Mutter und Sohn, Z\u00e4rtlichkeit in inniger Umarmung \u2013 ein Bild der f\u00fcrsorglichen, besch\u00fctzenden Liebe. Genau diese Rolle sucht die Zwei in jeder Beziehung: die N\u00e4hrende, Unentbehrliche, ohne die zu sein sich niemand vorstellen kann." },
    ],
  },
  3: {
    principle: "Eitelkeit & Selbstbetrug",
    title: "Typ 3 \u2013 Die Kunst der Eitelkeit",
    intro: "Sechs Kunstwerke \u00fcber den Spiegel, das Image und die Frage, was bleibt, wenn die Inszenierung endet \u2013 die Signatur der Drei.",
    works: [
      { img:"typ3-01-tizian-eitelkeit-der-welt", artist:"Tizian", title:"Die Eitelkeit der Welt", year:"um 1520", text:"Eine junge Frau blickt in den Spiegel, w\u00e4hrend Sch\u00e4del und Krone auf die Verg\u00e4nglichkeit allen Glanzes verweisen. Die Drei erkennt sich in diesem Bild unmittelbar: das Bem\u00fchen um ein makelloses Bild, w\u00e4hrend die Frage nach dem, was darunter liegt, ungestellt bleibt." },
      { img:"typ3-02-gilbert-all-is-vanity", artist:"Charles Allan Gilbert", title:"All is Vanity", year:"1892", text:"Eine Doppelbelichtung: Frau vor dem Spiegel \u2013 oder Totensch\u00e4del, je nach Blickwinkel. Kein Bild fasst die Warnung der Drei pr\u00e4ziser: Wenn das Image zur ganzen Identit\u00e4t wird, bleibt am Ende nur die Leere dahinter sichtbar." },
      { img:"typ3-03-bosch-hochmut-eitelkeit", artist:"Hieronymus Bosch", title:"Hochmut in der Ausformung der Eitelkeit", year:"um 1500", text:"Eine Frau bewundert sich im Spiegel, den ein D\u00e4mon ihr hinh\u00e4lt \u2013 Eitelkeit als Falle, in die man sich selbst lockt. Bosch zeigt, was die Drei sp\u00fcrt, aber selten zugibt: dass die Selbstinszenierung von etwas anderem gesteuert wird als vom eigenen Willen." },
      { img:"typ3-04-segantini-eitelkeit", artist:"Giovanni Segantini", title:"Eitelkeit", year:"1897", text:"Eine junge Frau in lichtdurchfluteter Landschaft, ganz mit ihrem Spiegelbild besch\u00e4ftigt, w\u00e4hrend die Welt um sie herum weiterlebt. Genau diese Versunkenheit ins eigene Bild, bei gleichzeitiger Distanz zur eigenen Innenwelt, ist die Signatur der Drei." },
      { img:"typ3-05-otto-friedrich-eitelkeit", artist:"Otto Friedrich", title:"Eitelkeit", year:"1904", text:"Eine symbolistische Darstellung der Selbstbetrachtung, changierend zwischen Anziehung und Warnung. Das Werk f\u00fcgt sich in eine Tradition ein, die die Drei sofort versteht: der Spiegel als gef\u00e4hrlichster und liebster Ort zugleich." },
      { img:"typ3-06-cruikshank-crowded-room", artist:"George Cruikshank", title:"Die Unbequemlichkeiten eines \u00fcberf\u00fcllten Empfangszimmers", year:"19. Jh.", text:"Eine satirische Szene gesellschaftlicher Selbstdarstellung, in der jeder auf jeden schaut und gesehen werden will. Cruikshank karikiert, was die Drei ernst nimmt: den Auftritt vor Publikum als eigentlichen Daseinszweck." },
    ],
  },
  4: {
    principle: "Neid & Sehnsucht",
    title: "Typ 4 \u2013 Die Kunst der Sehnsucht",
    intro: "Sechs Kunstwerke \u00fcber Melancholie, Sch\u00f6nheit und das Gef\u00fchl, unerreichbar besonders zu sein \u2013 die Signatur der Vier.",
    works: [
      { img:"typ4-01-vermeer-perlenohrgehaenge", artist:"Jan Vermeer", title:"Das M\u00e4dchen mit dem Perlenohrgeh\u00e4nge", year:"1665", text:"Ein Blick \u00fcber die Schulter, halb Frage, halb Geheimnis \u2013 niemand wei\u00df, wer sie ist oder was sie f\u00fchlt. Diese Unergr\u00fcndlichkeit, die zugleich anzieht und entzieht, ist die Sprache der Vier: gesehen werden wollen und doch unerreichbar bleiben." },
      { img:"typ4-02-friedrich-wanderer-nebelmeer", artist:"Caspar David Friedrich", title:"Der Wanderer \u00fcber dem Nebelmeer", year:"1818", text:"Ein Mann steht allein auf einem Felsen \u00fcber einem Meer aus Nebel, den R\u00fccken dem Betrachter zugewandt. Kein Bild trifft die romantische Sehnsucht der Vier pr\u00e4ziser: das Gef\u00fchl, allein an einem Ort zu stehen, den sonst niemand erreicht." },
      { img:"typ4-03-michelangelo-david", artist:"Michelangelo Buonarroti", title:"David", year:"1501\u20131504", text:"Der Moment vor dem Kampf, Anspannung und Sch\u00f6nheit in einem K\u00f6rper vereint. Die Vier erkennt in diesem Ideal nicht nur Perfektion, sondern die Tragik, die darin liegt: dass makellose Sch\u00f6nheit f\u00fcr einen einzigen entscheidenden Augenblick geschaffen scheint." },
      { img:"typ4-04-monet-impression-sonnenaufgang", artist:"Claude Monet", title:"Impression, Sonnenaufgang", year:"1872", text:"Die Konturen l\u00f6sen sich auf, das Licht wird zur eigentlichen Aussage \u2013 ein Bild, das mehr Stimmung als Abbild ist. Genau das ist die Vier: mehr am Gef\u00fchl hinter den Dingen interessiert als an den Dingen selbst." },
      { img:"typ4-05-courbet-der-verzweifelte", artist:"Gustave Courbet", title:"Selbstportr\u00e4t \u201eDer Verzweifelte\u201c", year:"um 1843\u20131845", text:"Courbet blickt mit aufgerissenen Augen direkt in den Spiegel, die H\u00e4nde in die Haare gekrallt. Diese ungeschminkte Darstellung der eigenen Verzweiflung, ohne jede Besch\u00f6nigung, ist die Vier in Reinform: das Gef\u00fchl als das Wahrste, was es zu zeigen gibt." },
      { img:"typ4-06-fra-angelico-fresken", artist:"Fra Angelico", title:"Aus dem Freskenzyklus", year:"1437\u20131446", text:"Stille, lichtdurchflutete religi\u00f6se Szenen von tiefer innerer Versenkung. Fra Angelicos Kunst zeigt, wohin die Sehnsucht der Vier f\u00fchren kann, wenn sie sich nicht in Melancholie verliert, sondern in stiller, hingebungsvoller Sch\u00f6nheit ausdr\u00fcckt." },
    ],
  },
  5: {
    principle: "Geiz & R\u00fcckzug",
    title: "Typ 5 \u2013 Die Kunst des R\u00fcckzugs und der Erkenntnis",
    intro: "Sechs Kunstwerke \u00fcber Beobachtung, Distanz und die Sicherheit, die im Denken selbst liegt \u2013 die Signatur der F\u00fcnf.",
    works: [
      { img:"typ5-01-vangogh-sternennacht", artist:"Vincent van Gogh", title:"Die Sternennacht", year:"1889", text:"Ein Himmel voller Bewegung und Energie, gemalt aus der Klosterzelle einer psychiatrischen Anstalt heraus, in die van Gogh sich zur\u00fcckgezogen hatte. Die F\u00fcnf erkennt sich in dieser Spannung: aus der sicheren Distanz des R\u00fcckzugs heraus eine ganze, \u00fcberw\u00e4ltigende innere Welt zu erschaffen." },
      { img:"typ5-02-vangogh-selbstbildnis-pfeife", artist:"Vincent van Gogh", title:"Selbstbildnis mit Pfeife", year:"1886", text:"Ein ruhiger, fast distanzierter Blick, die Pfeife wie eine Barriere zwischen sich und dem Betrachter. Genau diese sanfte, aber deutliche Grenzsetzung ist typisch f\u00fcnferhaft: N\u00e4he auf Abstand, Kontakt nur nach eigenen Bedingungen." },
      { img:"typ5-03-rodin-der-denker", artist:"Auguste Rodin", title:"Der Denker", year:"1881\u20131883", text:"Eine Figur, ganz in sich zur\u00fcckgezogen, den Kopf auf die Hand gest\u00fctzt, versunken im eigenen Gedankengang. Kaum ein Kunstwerk verk\u00f6rpert die f\u00fcnferhafte Grundhaltung so unmittelbar: die Welt zuerst verstehen, bevor man sich ihr zeigt." },
      { img:"typ5-04-morghen-portrait-leonardo", artist:"Raffaello Morghen", title:"Portr\u00e4t Leonardo da Vincis", year:"19. Jahrhundert", text:"Dieser Kupferstich zeigt Leonardo als alten, weisen Gelehrten \u2013 der Blick nach innen gerichtet, das Gesicht fast hinter einem langen Bart verborgen, als wollte es sich der Welt entziehen. Genau dieses Bild trifft die F\u00fcnf im Kern: der Mensch, der sich hinter Wissen und Beobachtung zur\u00fcckzieht, um von dort aus die Welt zu verstehen, ohne sich ihr ganz auszusetzen." },
      { img:"typ5-05-davinci-anna-selbdritt", artist:"Leonardo da Vinci", title:"Die heilige Anna selbdritt", year:"1500\u20131513", text:"Drei Generationen in einer komplexen, \u00fcber Jahre entwickelten Komposition \u2013 ein Werk, an dem Leonardo bis zu seinem Tod arbeitete, nie ganz fertig. Diese unstillbare Wissbegierde, die nie zum Abschluss kommen will, ist zutiefst f\u00fcnferhaft." },
      { img:"typ5-06-hals-descartes", artist:"Frans Hals", title:"Portr\u00e4t von Ren\u00e9 Descartes", year:"um 1649", text:"Der Philosoph, der den methodischen Zweifel zum Ausgangspunkt allen Wissens machte, mit wachem, pr\u00fcfendem Blick festgehalten. Descartes' \u201ecogito ergo sum\u201c ist im Kern ein f\u00fcnferhafter Satz: R\u00fcckzug ins Denken als letzte sichere Position." },
    ],
  },
  6: {
    principle: "Angst & Loyalit\u00e4t",
    title: "Typ 6 \u2013 Die Kunst der Angst und des Mutes",
    intro: "Sechs Kunstwerke \u00fcber Zweifel, Wachsamkeit und die Suche nach Sicherheit in Gemeinschaft \u2013 die Signatur der Sechs.",
    works: [
      { img:"typ6-01-munch-der-schrei", artist:"Edvard Munch", title:"Der Schrei", year:"1910", text:"Eine Figur, die H\u00e4nde an den Kopf gepresst, w\u00e4hrend sich Himmel und Landschaft in einem Wirbel der Angst aufl\u00f6sen. Kein Bild der Kunstgeschichte trifft das Grundgef\u00fchl der Sechs so unmittelbar: die Welt als Ort, an dem Bedrohung jederzeit sp\u00fcrbar wird." },
      { img:"typ6-02-caravaggio-unglaube-thomas", artist:"Caravaggio", title:"Der Unglaube des heiligen Thomas", year:"1601\u20131602", text:"Zweifel als k\u00f6rperliche Notwendigkeit \u2013 erst die eigene Hand in der Wunde bringt Gewissheit. Die Sechs kennt dieses Muster: dem Frieden nicht trauen, bis er sich als sicher erwiesen hat." },
      { img:"typ6-03-sant-mut-angst-verzweiflung", artist:"James Sant", title:"Mut, Angst und Verzweiflung", year:"1850", text:"Drei Gesichter, drei Reaktionen auf dieselbe Bedrohung \u2013 ein Bild dar\u00fcber, wie unterschiedlich Menschen auf Gefahr reagieren. Genau dieses Spektrum lebt in der Sechs selbst: zwischen Tapferkeit und R\u00fcckzug, oft im selben Moment." },
      { img:"typ6-04-raffael-schule-von-athen", artist:"Raffael", title:"Die Schule von Athen (Ausschnitt)", year:"1509\u20131511", text:"Platon und Aristoteles im Zentrum eines Geb\u00e4udes voller Denker, die gemeinsam nach Wahrheit suchen. Die Sechs sehnt sich nach genau dieser Gemeinschaft: einem verl\u00e4sslichen System, einer Gruppe von Verb\u00fcndeten, der sie sich anschlie\u00dfen kann." },
      { img:"typ6-05-gauguin-arlesiennes", artist:"Paul Gauguin", title:"Arl\u00e9siennes (Mistral)", year:"1888", text:"Frauen, fest in ihre T\u00fccher geh\u00fcllt, dem Wind trotzend, zusammenstehend gegen das raue Wetter. Dieses Bild der Solidarit\u00e4t gegen widrige Umst\u00e4nde trifft den Kern der Sechs: Sicherheit entsteht in der Gruppe, nicht im Alleingang." },
      { img:"typ6-06-fugel-david-goliath", artist:"Gebhard Fugel", title:"David und Goliath", year:"um 1900", text:"Der kleine David tritt dem \u00fcberm\u00e4chtigen Goliath entgegen \u2013 nicht aus Furchtlosigkeit, sondern aus einem Mut, der die Angst einschlie\u00dft statt sie zu verleugnen. Das ist die reifste Form der Sechs: Mut nicht als Abwesenheit von Angst, sondern als ihre \u00dcberwindung." },
    ],
  },
  7: {
    principle: "Unm\u00e4\u00dfigkeit & V\u00f6llerei",
    title: "Typ 7 \u2013 Die Kunst der V\u00f6llerei",
    intro: "Sechs Kunstwerke \u00fcber Genuss, \u00dcberma\u00df und die Flucht vor Schmerz durch F\u00fclle \u2013 die Signatur der Sieben.",
    works: [
      { img:"typ7-01-fressender-narr", artist:"Unbekannt", title:"Der fressende Narr", year:"15./16. Jh.", text:"Ein Narr, umgeben von Kr\u00fcgen und Speisen, in hemmungslosem Genuss versunken \u2013 eine mittelalterliche Warnung vor der Ma\u00dflosigkeit. Die Sieben erkennt sich hier ungeschminkt: der Griff nach immer mehr, um blo\u00df keine Leere zu sp\u00fcren." },
      { img:"typ7-02-rubens-sodom", artist:"Peter Paul Rubens", title:"Sodom", year:"1625", text:"Rubens malt die biblische Stadt des \u00dcberma\u00dfes im Moment ihres Untergangs \u2013 \u00fcppig, dramatisch, warnend. Die Sieben kennt diese Spannung zwischen Lust an der F\u00fclle und der Ahnung, dass grenzenloser Genuss seinen Preis hat." },
      { img:"typ7-03-bronzino-allegorie-des-gluecks", artist:"Bronzino", title:"Allegorie des Gl\u00fccks", year:"1564", text:"Eine \u00fcberladene, symbolreiche Komposition rund um Fortuna und ihre Gaben \u2013 Reichtum, Vergn\u00fcgen, \u00dcberfluss in einem Bild vereint. Genau diese Sammlung von M\u00f6glichkeiten, keine ausgelassen, ist die visuelle Entsprechung des sieberhaften Bed\u00fcrfnisses, nichts zu verpassen." },
      { img:"typ7-04-bryullov-traum-der-nonne", artist:"Karl Bryullov", title:"Der Traum der Nonne", year:"1831", text:"Eine Nonne tr\u00e4umt inmitten ihrer Askese von weltlichem Vergn\u00fcgen \u2013 der Wunsch nach F\u00fclle bricht selbst durch die strengste Disziplin. Ein treffendes Bild daf\u00fcr, wie unwiderstehlich der sieberhafte Ruf nach mehr sein kann, selbst wenn man ihm eigentlich entsagt hat." },
      { img:"typ7-05-brispot-gourmand", artist:"Henri Brispot", title:"Ein Gourmand", year:"1928", text:"Ein Mann, versunken in absoluten Genuss an der Tafel, jede Speise eine kleine Feier. Brispots Bild feiert genau das, was die Sieben sucht: den Moment, in dem Genuss alles andere verdr\u00e4ngt." },
      { img:"typ7-06-opiz-der-voeller", artist:"Georg Emanuel Opiz", title:"Der V\u00f6ller", year:"1804", text:"Eine satirische, fast karikaturhafte Darstellung grenzenlosen Essens und Trinkens. Opiz zeigt, wohin die sieberhafte Flucht nach vorn f\u00fchren kann, wenn sie nicht gebremst wird: F\u00fclle, die sich selbst erdr\u00fcckt." },
    ],
  },
  8: {
    principle: "Wollust & Intensit\u00e4t",
    title: "Typ 8 \u2013 Die Kunst der Wollust und Begierde",
    intro: "Sechs Kunstwerke \u00fcber Intensit\u00e4t, Kontrolle und die N\u00e4he zum Abgrund \u2013 die Signatur der Acht.",
    works: [
      { img:"typ8-01-baldung-tod-und-wollust", artist:"Hans Baldung", title:"Der Tod und die Wollust", year:"1517", text:"Der Tod umarmt eine junge Frau von hinten, Lust und Verg\u00e4nglichkeit in einem Bild vereint. Baldung zeigt, was die Achter tief im Inneren wei\u00df: dass volle Intensit\u00e4t und die N\u00e4he zum Abgrund untrennbar zusammengeh\u00f6ren." },
      { img:"typ8-02-brouwer-luxuria", artist:"Adriaen Brouwer", title:"Luxuria, \u201eder dicke Mann\u201c", year:"1634\u20131637", text:"Ein Mann, ganz seinen Begierden hingegeben, ohne jede Zur\u00fcckhaltung dargestellt. Brouwers schonungsloser Blick auf ungez\u00fcgeltes Verlangen trifft die Achter-Wahrheit: lieber ganz und ungeschminkt als kontrolliert und halb." },
      { img:"typ8-03-gauguin-gold-ihrer-koerper", artist:"Paul Gauguin", title:"Und das Gold ihrer K\u00f6rper", year:"1901", text:"Zwei Frauen in ungezwungener, selbstbewusster K\u00f6rperlichkeit, ohne jede Scham vor dem eigenen Begehren. Gauguin feiert hier eine Direktheit, die die Achter zutiefst versteht: den K\u00f6rper und das Verlangen nicht zu verstecken, sondern offen zu zeigen." },
      { img:"typ8-04-bosch-tisch-der-suenden", artist:"Hieronymus Bosch", title:"Der Tisch der sterblichen S\u00fcnden, Luxuria", year:"um 1500", text:"Ein Liebespaar unter einem Zelt, umgeben von Musikinstrumenten und Genussmitteln \u2013 eines von sieben S\u00fcndenfeldern in Boschs ber\u00fchmter Tafel. Die Beschriftung \u201eluxuria\u201c markiert genau jene Kraft, die die Achter am st\u00e4rksten in sich tr\u00e4gt und am wenigsten z\u00fcgeln will." },
      { img:"typ8-05-rops-die-begierde", artist:"F\u00e9licien Rops", title:"Die Begierde", year:"1878\u20131881", text:"Eine Frau, von ihrem eigenen Verlangen f\u00f6rmlich fortgetragen, die Kontrolle bewusst aufgegeben. Rops' Bild zeigt die Kehrseite achterhafter St\u00e4rke: die Angst vor Kontrollverlust, die genau deshalb so viel Kraft in die Kontrolle \u00fcber andere investiert." },
      { img:"typ8-06-courbet-schlaeferinnen", artist:"Gustave Courbet", title:"Die Schl\u00e4ferinnen", year:"1866", text:"Zwei Frauen, ersch\u00f6pft und vollkommen hingegeben in ihrer Ruhe nach der Leidenschaft. Courbets ungesch\u00f6ntes Bild zeigt, was nach der Intensit\u00e4t bleibt: eine Ruhe, die sich die Achter oft schwer erlaubt, weil Verletzlichkeit als Schw\u00e4che empfunden wird." },
    ],
  },
  9: {
    principle: "Tr\u00e4gheit & Harmonie",
    title: "Typ 9 \u2013 Die Kunst der Tr\u00e4gheit und Harmonie",
    intro: "Sechs Kunstwerke \u00fcber Ruhe, Selbstvergessenheit und die Sehnsucht, im gro\u00dfen Ganzen aufzugehen \u2013 die Signatur der Neun.",
    works: [
      { img:"typ9-01-davinci-mona-lisa", artist:"Leonardo da Vinci", title:"Mona Lisa", year:"1503\u20131506", text:"Ein L\u00e4cheln, das sich jeder eindeutigen Deutung entzieht \u2013 pr\u00e4sent und zugleich unergr\u00fcndlich zur\u00fcckgenommen. Kein Gesicht der Kunstgeschichte verk\u00f6rpert die neunerhafte Qualit\u00e4t so genau: ganz da zu sein, ohne sich vollst\u00e4ndig zu zeigen." },
      { img:"typ9-02-matisse-harmony-in-red", artist:"Henri Matisse", title:"Harmony in Red", year:"1908", text:"Eine Innenraumszene, in der Muster und Farbe fast alle Grenzen zwischen Figur und Umgebung aufl\u00f6sen. Genau das ist die neunerhafte Sehnsucht: aufzugehen im gro\u00dfen Ganzen, ohne sich als Einzelne oder Einzelner scharf abgrenzen zu m\u00fcssen." },
      { img:"typ9-03-courbet-die-haengematte", artist:"Gustave Courbet", title:"Die H\u00e4ngematte", year:"1844", text:"Eine Frau, vollkommen entspannt in einer H\u00e4ngematte, dem Nichtstun hingegeben, umgeben von \u00fcppiger Natur. Wenige Bilder zeigen die neunerhafte Sehnsucht nach ungest\u00f6rter Ruhe so unmittelbar \u2013 ein Moment, in dem nichts getan werden muss." },
      { img:"typ9-04-delacroix-see-von-galilaea", artist:"Eug\u00e8ne Delacroix", title:"Jesus auf dem See von Galil\u00e4a", year:"1854", text:"Jesus schl\u00e4ft im tosenden Sturm, w\u00e4hrend die J\u00fcnger in Panik geraten \u2013 Ruhe inmitten des Chaos als eigentliche Kraftquelle. Dieses Bild trifft die tiefste Gabe der Neun: eine innere Stille, die selbst im Sturm nicht zerbricht." },
      { img:"typ9-05-brueghel-jona-und-der-wal", artist:"Jan Brueghel d. \u00c4.", title:"Jona entsteigt dem Rachen des Walfisches", year:"1568", text:"Jona wird nach drei Tagen im Bauch des Wals wieder ausgespien \u2013 ein Bild von R\u00fcckzug, Verdr\u00e4ngung und schlie\u00dflich unausweichlicher R\u00fcckkehr ins Leben. Genau dieses Muster kennt die Neun: sich zur\u00fcckziehen, bis der Ruf des Lebens zu laut wird, um ihn noch zu \u00fcberh\u00f6ren." },
      { img:"typ9-06-bloemaert-unkraut-weizen", artist:"Abraham Bloemaert", title:"Gleichnis vom Unkraut unter dem Weizen", year:"17. Jh.", text:"Eine biblische Szene \u00fcber Geduld \u2013 Unkraut und Weizen d\u00fcrfen nebeneinander wachsen, bis sich am Ende alles von selbst kl\u00e4rt. Diese Haltung des Nicht-Eingreifens, des Vertrauens, dass sich die Dinge von selbst ordnen, ist die neunerhafte Weisheit pur." },
    ],
  },
};
// \u2500\u2500\u2500 Enneagramm Kunst \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function enneagrammKunstUebersichtPage() {
  const tile = n => {
    const col = TYPE_COLORS[n] || "var(--copper)";
    const d = ENNEAGRAMM_KUNST[n];
    const cover = d.works[0].img;
    return `<div class="kf-card" data-route="enneagramm-kunst-typ-${n}" onclick="go('enneagramm-kunst-typ-${n}')"
      style="cursor:pointer;padding:0;overflow:hidden;border-radius:12px;border:1.5px solid var(--border);background:var(--ivory);"
      onmouseover="this.style.borderColor='${col}';this.style.boxShadow='0 2px 12px rgba(0,0,0,.12)'"
      onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='none'">
      <div style="aspect-ratio:4/3;overflow:hidden;background:#eee;">
        <img src="./assets/kunst/${cover}.jpg" alt="${d.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" />
      </div>
      <div style="padding:0.8rem 1rem;">
        <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${col};margin-bottom:0.2rem;">Typ ${n}</div>
        <div style="font-weight:700;font-size:0.95rem;color:var(--ink);">${d.principle}</div>
      </div>
    </div>`;
  };
  return shell(`
    <div class="page-container">
      ${pageHeader('Enneagramm-Kunstgalerie')}
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:var(--ink);margin:1.2rem 0 0.5rem;line-height:1.2;">Enneagramm-Kunstgalerie</h1>
      <p class="psycho-intro">Neun Typen, neun Leidenschaften \u2013 gespiegelt in vier Jahrhunderten Kunstgeschichte. Von D\u00fcrer bis Matisse, von der Renaissance bis zur Moderne: Jedes Kunstwerk erz\u00e4hlt auf seine eigene Weise von der Fixierung, der Sehnsucht oder dem Schatten eines Enneagrammtyps. W\u00e4hlen Sie einen Typ, um seine Galerie zu entdecken.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.9rem;max-width:100%;margin-bottom:2rem;">
        ${[1,2,3,4,5,6,7,8,9].map(tile).join('')}
      </div>
      ${relatedLinks([
        {route:"enneagramm-astrologie", label:"Enneagramm meets Astrologie"},
        {route:"beruehmte-persoenlichkeiten", label:"Ber\u00fchmte Pers\u00f6nlichkeiten"},
        {route:"schaubilder", label:"Alle Schaubilder"},
      ])}
    </div>
  `);
}

function enneagrammKunstTypPage(n) {
  const d = ENNEAGRAMM_KUNST[n];
  const col = TYPE_COLORS[n] || "var(--copper)";
  const workCard = w => `<div class="kf-card" style="padding:0;overflow:hidden;border-radius:12px;border:1.5px solid var(--border);background:var(--ivory);">
      <img src="./assets/kunst/${w.img}.jpg" alt="${w.artist} \u2013 ${w.title}" loading="lazy" style="width:100%;display:block;" />
      <div style="padding:1rem 1.1rem;">
        <div style="font-weight:700;font-size:1rem;color:var(--ink);margin-bottom:0.1rem;">${w.artist}</div>
        <div style="font-size:0.85rem;color:${col};font-weight:600;margin-bottom:0.6rem;">${w.title} &middot; ${w.year}</div>
        <p class="vb-intro" style="margin:0;font-size:0.92rem;">${w.text}</p>
      </div>
    </div>`;
  return shell(`
    <div class="page-container">
      ${pageHeader('Enneagramm-Kunstgalerie')}
      <div id="js-back-target" data-route="enneagramm-kunst" style="display:none;"></div>
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:var(--ink);margin:1.2rem 0 0.3rem;line-height:1.2;">${d.title}</h1>
      <p class="psycho-intro">${d.intro}</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.1rem;max-width:100%;margin-bottom:2rem;">
        ${d.works.map(workCard).join('')}
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${relatedLinks([
        {route:"enneagramm-kunst", label:"Alle 9 Kunst-Galerien"},
        {route:"type/" + n, label:"Zum Typ " + n + " im Kompass"},
        {route:"enneagramm-astrologie", label:"Enneagramm meets Astrologie"},
      ])}
    </div>
  `);
}

const ENNEAGRAMM_FILME = {
  "SE1": {
    typ: 1, instinkt: "SE", animal: "Adler",
    title: "SE1 \u2013 Selbsterhaltungstyp 1: Der Adler in den eigenen vier W\u00e4nden",
    intro: "Zehn Filme \u00fcber die Sorge um das eigene richtige Leben \u2013 Ordnung, Selbstdisziplin und W\u00e4rme, die sich hinter Strenge verbirgt.",
    filme: [
      { title:"The Intern \u2013 Umst\u00e4ndehalber Praktikant (The Intern)", year:"2015", text:"Ben, gespielt als Mann der alten Schule, verk\u00f6rpert Anstand, Verl\u00e4sslichkeit und Zur\u00fcckhaltung, ohne belehrend zu wirken. Genau diese stille moralische Klarheit ist die SE1-Signatur." },
      { title:"Julie & Julia", year:"2009", text:"Julia Childs jahrelange, akribische Hingabe an die korrekte Technik \u2013 nicht f\u00fcr Applaus, sondern weil es richtig gemacht werden muss. Ein Musterbild selbsterhaltender Einser-Disziplin." },
      { title:"Sully", year:"2016", text:"Captain Sullenberger unterzieht sich nach seiner Heldentat einer gnadenlosen Selbstpr\u00fcfung, ob er wirklich alles richtig gemacht hat. Die SE1 misst sich an einem inneren Standard, den niemand sonst sieht." },
      { title:"Ein Mann namens Otto (A Man Called Otto)", year:"2022", text:"Otto lebt nach strengen, selbst auferlegten Regeln \u2013 M\u00fclltrennung, P\u00fcnktlichkeit, Ordnung \u2013, unter denen sich zunehmend W\u00e4rme zeigt. Die typische SE1-Bewegung: von der Strenge zur stillen Zuneigung." },
      { title:"Miss Potter", year:"2006", text:"Beatrix Potters diszipliniertes, zur\u00fcckgezogenes Arbeitsleben, das sich in kleinen, sorgf\u00e4ltig ausgef\u00fchrten Werken ausdr\u00fcckt. Die SE1 sucht Vollkommenheit im \u00fcberschaubaren, eigenen Bereich." },
      { title:"The Best Exotic Marigold Hotel", year:"2011", text:"Muriels scharfe, unnachgiebige Urteilskraft, die sich im Lauf des Films als tief verwurzelter Ordnungssinn statt blo\u00dfer H\u00e4rte entpuppt \u2013 ein SE1-Bogen ungefiltert." },
      { title:"Little Women", year:"2019", text:"Marmees zur\u00fcckhaltende moralische Standhaftigkeit, die ihre T\u00f6chter durch Vorbild statt durch Predigt erzieht. Die SE1 lehrt durch die eigene Lebensf\u00fchrung." },
      { title:"Was vom Tage \u00fcbrig blieb (The Remains of the Day)", year:"1993", text:"Der Butler Stevens, dessen gesamtes Leben in Pflichterf\u00fcllung und korrektem Verhalten aufgeht, bis er die eigene emotionale K\u00e4lte erkennt. Ein Klassiker \u2013 zeigt die SE1-Falle so klar wie kein Film danach." },
      { title:"The Wife", year:"2017", text:"Eine Frau, die jahrzehntelang die eigene Kompetenz zugunsten der Karriere ihres Mannes zur\u00fcckstellt und ihre Rolle mit stiller, disziplinierter Perfektion ausf\u00fcllt. Die SE1 erkennt sich in dieser leisen, nie eingeforderten Gr\u00f6\u00dfe." },
      { title:"45 Years", year:"2015", text:"Eine jahrzehntelange, sorgf\u00e4ltig geordnete Ehe ger\u00e4t ins Wanken, als eine alte Wahrheit auftaucht \u2013 die SE1-Fassade aus Kontrolle und Anstand wird bis auf die Grundmauern gepr\u00fcft." },
    
    ],
  },
  "SO1": {
    typ: 1, instinkt: "SO", animal: "Gans",
    title: "SO1 \u2013 Sozialer Typ 1: Die Gans als Reformerin der Gesellschaft",
    intro: "Zehn Filme \u00fcber den Kampf f\u00fcr das Richtige im gro\u00dfen Ma\u00dfstab \u2013 Gerechtigkeit, Reform und moralische F\u00fchrung.",
    filme: [
      { title:"Erin Brockovich", year:"2000", text:"Eine Frau, die einen ganzen Konzern f\u00fcr sein Unrecht zur Rechenschaft zieht \u2013 Gerechtigkeitssinn, der sich nicht mit Teill\u00f6sungen zufriedengibt. Die SO1-Energie in ihrer k\u00e4mpferischsten Form." },
      { title:"Spotlight", year:"2015", text:"Ein Journalistenteam, das systematisches Unrecht in einer Institution aufdeckt, unbeirrt von Widerstand aus dem eigenen sozialen Umfeld. Reform als journalistische Pflicht." },
      { title:"Dark Waters", year:"2019", text:"Ein Anwalt, der \u00fcber Jahre gegen einen \u00fcberm\u00e4chtigen Konzern k\u00e4mpft, weil das Richtige getan werden muss, komme was wolle. Die SO1 gibt nicht auf, wenn das System versagt." },
      { title:"The Report", year:"2019", text:"Ein Ermittler, der einen 6.000-seitigen Bericht \u00fcber staatliches Fehlverhalten durchsetzt, gegen jeden politischen Widerstand. Prinzipientreue als Beruf." },
      { title:"Milk", year:"2008", text:"Harvey Milks Kampf f\u00fcr gesellschaftliche Gleichberechtigung, \u00f6ffentlich, unerm\u00fcdlich, mit dem Anspruch, die Gesellschaft insgesamt zu ver\u00e4ndern." },
      { title:"Suffragette", year:"2015", text:"Frauen, die f\u00fcr ihr Wahlrecht k\u00e4mpfen, obwohl der Preis pers\u00f6nlich hoch ist \u2013 Reform, der man sich mit dem ganzen Leben verschreibt." },
      { title:"The Post", year:"2017", text:"Eine Zeitung, die gegen den Druck der Regierung auf ihrem Recht besteht, die Wahrheit zu ver\u00f6ffentlichen. \u00d6ffentliche Verantwortung \u00fcber pers\u00f6nliche Sicherheit gestellt." },
      { title:"Selma", year:"2014", text:"Martin Luther Kings organisierter, disziplinierter Kampf f\u00fcr B\u00fcrgerrechte \u2013 Reform als strukturierte, durchgehaltene Bewegung, nicht als spontaner Ausbruch." },
      { title:"Trumbo", year:"2015", text:"Ein Drehbuchautor, der auf seinen Prinzipien beharrt, w\u00e4hrend eine ganze Industrie ihn daf\u00fcr bestraft. Standhaftigkeit als Widerstand." },
      { title:"On the Basis of Sex", year:"2018", text:"Der jahrzehntelange juristische Kampf f\u00fcr Gleichberechtigung vor dem Gesetz \u2013 Reform, Schritt f\u00fcr Schritt, Fall f\u00fcr Fall erstritten." },
    
    ],
  },
  "SX1": {
    typ: 1, instinkt: "SX", animal: "Schwarze Mamba",
    title: "SX1 \u2013 Sexueller Typ 1: Die Schwarze Mamba und die eine Sache",
    intro: "Zehn Filme \u00fcber brennende, kompromisslose Intensit\u00e4t in der einen Beziehung, der einen Sache \u2013 inklusive zweier Rollen von Schauspielern, die im Kompass selbst als SX1 gef\u00fchrt werden.",
    filme: [
      { title:"Aguirre, der Zorn Gottes", year:"1972", text:"Klaus Kinski \u2013 im Kompass selbst als SX1w9 gef\u00fchrt \u2013 spielt einen besessenen Eroberer, der sich mit messianischer Gewissheit gegen den ganzen Dschungel stellt. Kaum eine Rolle verk\u00f6rpert die SX1-Intensit\u00e4t so unmittelbar wie diese." },
      { title:"The Revenant", year:"2016", text:"Leonardo DiCaprio \u2013 im Kompass als SX1w2 gef\u00fchrt \u2013 als Mann, dessen gesamtes \u00dcberleben sich auf einen einzigen, unerbittlichen Fokus reduziert: Vergeltung. Die SX1 kennt keine halben Ziele." },
      { title:"Whiplash", year:"2014", text:"Ein Lehrer, dessen kompromisslose, fast zerst\u00f6rerische Hingabe an einen einzigen Sch\u00fctzling keine Nachsicht kennt. Die Schwarze Mamba akzeptiert kein Mittelma\u00df, auch nicht im Namen der Liebe." },
      { title:"Carol", year:"2015", text:"Eine besitzergreifende, alles verzehrende Liebe, die sich \u00fcber gesellschaftliche Konventionen hinwegsetzt. SX1-Intensit\u00e4t als Widerstand gegen die Regeln der Welt." },
      { title:"Marriage Story", year:"2019", text:"Zwei Menschen, die noch im Zerfall ihrer Ehe von der eigenen moralischen Gewissheit nicht lassen k\u00f6nnen. Die SX1 k\u00e4mpft um Wahrheit, selbst wenn sie verletzt." },
      { title:"Phantom Thread", year:"2017", text:"Kontrolle, Eifersucht und Hingabe in einer einzigen, obsessiven Zweierbeziehung \u2013 niemand sonst z\u00e4hlt, solange diese eine Verbindung ungekl\u00e4rt bleibt." },
      { title:"Little Children", year:"2006", text:"Eine Aff\u00e4re, getragen von der \u00dcberzeugung, im Recht zu sein \u2013 moralische Selbstgerechtigkeit als Deckmantel der eigenen Leidenschaft." },
      { title:"Blue Valentine", year:"2010", text:"Die Intensit\u00e4t einer Liebe, die an den eigenen unerreichbaren Anspr\u00fcchen zerbricht. Entt\u00e4uschung als Kehrseite der SX1-Hingabe." },
      { title:"Nosferatu", year:"1979", text:"Klaus Kinski erneut, diesmal als tragische, besessene Figur, deren ganzes Wesen sich um eine einzige, unstillbare Sehnsucht dreht." },
      { title:"Fatal Attraction", year:"1987", text:"Eine Aff\u00e4re, die sich in besitzergreifende, kompromisslose Intensit\u00e4t verwandelt, sobald sie infrage gestellt wird. Die Schwarze Mamba kennt kein Zur\u00fcck, sobald sie sich einmal gebunden hat." },
    
    ],
  },
  "SE2": {
    typ: 2, instinkt: "SE", animal: "Flusspferd",
    title: "SE2 \u2013 Selbsterhaltungstyp 2: Das Flusspferd, das verw\u00f6hnt",
    intro: "Zehn Filme \u00fcber F\u00fcrsorge im eigenen, nahen Umfeld \u2013 N\u00e4hren, Verw\u00f6hnen und sich durch Hingabe unentbehrlich machen.",
    filme: [
      { title:"School of Rock", year:"2003", text:"Jack Black \u2013 im Kompass als SE2w1 gef\u00fchrt \u2013 als Lehrer, dessen warmherzige, verw\u00f6hnende F\u00fcrsorge sich selbst unentbehrlich macht. Eine der stimmigsten Verk\u00f6rperungen der SE2 \u00fcberhaupt." },
      { title:"The Intouchables", year:"2011", text:"Eine k\u00f6rperliche, warme, humorvolle F\u00fcrsorge, die aus einem Arbeitsverh\u00e4ltnis eine echte Familie macht." },
      { title:"Nanny McPhee", year:"2005", text:"Strenge, die sich Schritt f\u00fcr Schritt in echte Zuneigung verwandelt \u2013 die SE2-Bewegung von der Kontrolle zur W\u00e4rme." },
      { title:"About a Boy oder: Der Tag der toten Ente (About a Boy)", year:"2002", text:"Eine zun\u00e4chst widerwillige F\u00fcrsorge, die sich unter der Oberfl\u00e4che in echte, verwundbare Bindung verwandelt." },
      { title:"Marley & Ich (Marley & Me)", year:"2008", text:"Hingabe und F\u00fcrsorge im engsten famili\u00e4ren Kreis, ganz ohne gro\u00dfen gesellschaftlichen Auftritt." },
      { title:"Paddington", year:"2014", text:"Bedingungslose h\u00e4usliche Aufnahme eines Fremden \u2013 F\u00fcrsorge als spontaner, warmer Reflex." },
      { title:"Instant Family \u2013 F\u00fcr ein paar Kids mehr (Instant Family)", year:"2018", text:"Eine Familie, die sich durch das aktive F\u00fcrsorgen f\u00fcr fremde Kinder im eigenen Zuhause neu erschafft." },
      { title:"Blind Side \u2013 Die gro\u00dfe Chance (The Blind Side)", year:"2009", text:"Aufopfernde h\u00e4usliche F\u00fcrsorge, die einen fremden jungen Menschen vorbehaltlos in die eigene Familie aufnimmt." },
      { title:"Wonder", year:"2017", text:"Eine Familie, deren gesamter Alltag um die liebevolle, unerm\u00fcdliche F\u00fcrsorge f\u00fcr ein Kind organisiert ist \u2013 Zuwendung als t\u00e4gliche, stille Praxis statt gro\u00dfe Geste." },
      { title:"Life as We Know It", year:"2010", text:"Zwei Menschen, die unvorbereitet in die F\u00fcrsorge f\u00fcr ein Kind hineinwachsen und dabei entdecken, wie sehr N\u00e4hren zur eigenen Identit\u00e4t werden kann." },
    
    ],
  },
  "SO2": {
    typ: 2, instinkt: "SO", animal: "Golden Retriever",
    title: "SO2 \u2013 Sozialer Typ 2: Der Golden Retriever im Dienst der Gemeinschaft",
    intro: "Zehn Filme \u00fcber sichtbare, \u00f6ffentliche F\u00fcrsorge \u2013 Ehrgeiz und Hilfsbereitschaft, die sich vor der Gruppe beweisen.",
    filme: [
      { title:"Das Streben nach Gl\u00fcck (The Pursuit of Happyness)", year:"2006", text:"Will Smith \u2013 im Kompass als SO2w3 gef\u00fchrt \u2013 als Vater, dessen Ehrgeiz ganz im Dienst der F\u00fcrsorgepflicht f\u00fcr den eigenen Sohn steht." },
      { title:"Concussion", year:"2015", text:"Will Smith erneut, diesmal im \u00f6ffentlichen, sichtbaren Kampf f\u00fcr das Wohl vieler Menschen gegen m\u00e4chtigen Widerstand." },
      { title:"Freedom Writers", year:"2007", text:"Engagierte, \u00f6ffentlich sichtbare F\u00fcrsorge im Klassenzimmer, die eine ganze Gruppe zusammenh\u00e4lt." },
      { title:"Der Club der toten Dichter (Dead Poets Society)", year:"1989", text:"Ein Mentor, der sich \u00f6ffentlich und mit Nachdruck f\u00fcr seine Sch\u00fcler einsetzt \u2013 F\u00fcrsorge als p\u00e4dagogische Mission." },
      { title:"Won't You Be My Neighbor?", year:"2018", text:"Eine \u00f6ffentliche, lebenslange F\u00fcrsorge-Mission, dokumentiert \u00fcber Jahrzehnte \u2013 Hilfsbereitschaft als Lebenswerk." },
      { title:"Radio", year:"2003", text:"Eine Gemeinschaft, angef\u00fchrt von einem Trainer, die sich sichtbar und beharrlich um einen Au\u00dfenseiter k\u00fcmmert." },
      { title:"Hidden Figures \u2013 Unerkannte Heldinnen (Hidden Figures)", year:"2016", text:"Gegenseitige F\u00fcrsorge im gemeinsamen Kampf um gesellschaftliche Anerkennung." },
      { title:"Green Book", year:"2018", text:"F\u00fcrsorge und Loyalit\u00e4t, die sich in der \u00d6ffentlichkeit und unter Beobachtung beweisen m\u00fcssen." },
      { title:"Spare Parts", year:"2015", text:"Gemeinschaftlicher, \u00f6ffentlich sichtbarer Einsatz f\u00fcr benachteiligte Jugendliche." },
      { title:"Music of the Heart", year:"1999", text:"P\u00e4dagogisches Engagement, das \u00f6ffentliche Anerkennung sucht, um seinen Wert zu beweisen." },
    
    ],
  },
  "SX2": {
    typ: 2, instinkt: "SX", animal: "Kamel",
    title: "SX2 \u2013 Sexueller Typ 2: Das Kamel und die eine Verf\u00fchrung",
    intro: "Zehn Filme \u00fcber Verf\u00fchrung als Verbindungskunst \u2013 die volle Aufmerksamkeit auf die eine, exklusive Beziehung gerichtet.",
    filme: [
      { title:"What a Man", year:"2011", text:"Matthias Schweigh\u00f6fer \u2013 im Kompass als SX2w1 gef\u00fchrt \u2013 als charmanter Verf\u00fchrer, dessen Beziehungsstrategie ganz auf pers\u00f6nliche N\u00e4he setzt." },
      { title:"Crazy, Stupid, Love", year:"2011", text:"Verf\u00fchrungskunst als zentrale Lebensidentit\u00e4t \u2013 und die Frage, was darunter an echtem Gef\u00fchl liegt." },
      { title:"Silver Linings Playbook", year:"2012", text:"Eine intensive, alles \u00fcberstrahlende pers\u00f6nliche Verbindung, die alle Vernunft beiseiteschiebt." },
      { title:"About Time", year:"2013", text:"Bedingungslose, hingebungsvolle Verf\u00fchrung und Zuwendung einer einzigen Person \u2013 Zeit als Ausdruck von Liebe." },
      { title:"La La Land", year:"2016", text:"Verf\u00fchrung durch vollst\u00e4ndige Hingabe an die eine Beziehung, auch wenn sie am Ende nicht bleibt." },
      { title:"Titanic", year:"1997", text:"Grenzenlose, alles \u00fcberstrahlende Verf\u00fchrung und Hingabe innerhalb weniger, intensiver Tage." },
      { title:"Notting Hill", year:"1999", text:"Die Verf\u00fchrungskraft ungeteilter Aufmerksamkeit, die sich ganz auf eine einzige Person richtet." },
      { title:"500 Days of Summer", year:"2009", text:"Die Sehnsucht, f\u00fcr eine bestimmte Person unwiderstehlich und unvergesslich zu sein." },
      { title:"Elvis", year:"2022", text:"Charisma als Lebenskraft, die eine ganze B\u00fchne und ein ganzes Publikum an sich bindet." },
      { title:"Say Anything...", year:"1989", text:"Ein junger Mann, dessen gesamte Energie sich auf die eine, bedingungslose Werbung um eine einzige Person richtet \u2013 Hingabe ohne R\u00fcckzugsoption, das Herzst\u00fcck der SX2." },
    
    ],
  },
  "SE3": {
    typ: 3, instinkt: "SE", animal: "Waschb\u00e4r",
    title: "SE3 \u2013 Selbsterhaltungstyp 3: Der Waschb\u00e4r, der funktioniert",
    intro: "Zehn Filme \u00fcber Wert, der sich durch handfeste Leistung und Absicherung beweist \u2013 Identit\u00e4t, die sich am eigenen Funktionieren misst.",
    filme: [
      { title:"Joy", year:"2015", text:"Eine Frau, die ihren Wert ausschlie\u00dflich \u00fcber wirtschaftlichen Erfolg und funktionierende Selbstst\u00e4ndigkeit beweisen muss \u2013 keine Zeit f\u00fcr Zweifel, nur f\u00fcr Ergebnisse." },
      { title:"The Founder", year:"2016", text:"Eine Identit\u00e4t, die sich vollst\u00e4ndig \u00fcber die eigene unternehmerische Leistungsf\u00e4higkeit definiert \u2013 Beziehungen werden dem Erfolg untergeordnet." },
      { title:"Moneyball", year:"2011", text:"Pragmatischer, n\u00fcchterner Erfolg als Existenzsicherung, ganz ohne Glanz \u2013 Funktionieren wichtiger als Wirkung." },
      { title:"Molly's Game", year:"2017", text:"Kontrolle \u00fcber die eigene Leistungsf\u00e4higkeit als einzige verl\u00e4ssliche Grundlage, wenn alles andere wegbricht." },
      { title:"Wall Street: Money Never Sleeps", year:"2010", text:"Wiederaufbau der eigenen Reputation und finanziellen Sicherheit nach dem Fall \u2013 Wert durch Wiederherstellung." },
      { title:"Der Teufel tr\u00e4gt Prada (The Devil Wears Prada)", year:"2006", text:"Funktionieren unter extremem Leistungsdruck als Eintrittspreis f\u00fcr beruflichen Wert und Sicherheit." },
      { title:"Margin Call", year:"2011", text:"Eine Nacht, in der Kompetenz und k\u00fchles Funktionieren \u00fcber das \u00dcberleben einer ganzen Firma entscheiden \u2013 Effizienz als einzige verl\u00e4ssliche W\u00e4hrung, wenn alles andere zusammenbricht." },
      { title:"Boiler Room", year:"2000", text:"Ein junger Mann, der sich \u00fcber nachgewiesene Verkaufskompetenz Zugang zu Status und Sicherheit erkauft \u2013 Funktionieren als Eintrittskarte in ein System, das keine Fragen stellt." },
      { title:"American Made", year:"2017", text:"Ein Pilot, der seine fliegerische Kompetenz nacheinander an konkurrierende Systeme verkauft \u2013 Sicherheit durch N\u00fctzlichkeit, ganz ohne moralische Umwege." },
      { title:"War Dogs", year:"2016", text:"Zwei junge M\u00e4nner, die sich \u00fcber pragmatisches Gesch\u00e4ftstalent Zugang zu einem lukrativen, gef\u00e4hrlichen System verschaffen \u2013 Kompetenz als einziger Ausweis, den es braucht." },
    
    ],
  },
  "SO3": {
    typ: 3, instinkt: "SO", animal: "Gepard",
    title: "SO3 \u2013 Sozialer Typ 3: Der Gepard im Rampenlicht der Gruppe",
    intro: "Zehn Filme \u00fcber Prestige, \u00f6ffentliche Anerkennung und die Frage, wer man ist, wenn niemand zusieht.",
    filme: [
      { title:"The Social Network", year:"2010", text:"Prestige, \u00f6ffentliche Anerkennung und Status als zentraler Lebensmotor \u2013 Erfolg, gemessen an gesellschaftlicher Sichtbarkeit." },
      { title:"I, Tonya", year:"2017", text:"Der erbitterte Kampf um gesellschaftliche Anerkennung trotz Herkunft \u2013 Leistung, die immer auch Beweis sein muss." },
      { title:"T\u00e1r", year:"2022", text:"\u00d6ffentliches Prestige und Reputation als Identit\u00e4t \u2013 und der Absturz, wenn das Bild zu br\u00f6ckeln beginnt." },
      { title:"Miss Americana", year:"2020", text:"Ein \u00f6ffentliches Image als Existenzgrundlage und die schrittweise Suche nach dem, was darunter liegt." },
      { title:"Bohemian Rhapsody", year:"2018", text:"\u00d6ffentliches Image und B\u00fchnenpr\u00e4senz als Mittel, gesellschaftliche Anerkennung zu erringen \u2013 und die Suche nach Echtheit dahinter." },
      { title:"Rocketman", year:"2019", text:"Der Aufstieg zum \u00f6ffentlichen Erfolgsbild und der hohe pers\u00f6nliche Preis, der daf\u00fcr gezahlt wird." },
      { title:"The Greatest Showman", year:"2017", text:"Erfolg als \u00f6ffentliches Spektakel, das gesellschaftliche Anerkennung um jeden Preis sucht." },
      { title:"Le Mans 66 \u2013 Gegen jede Chance (Ford v Ferrari)", year:"2019", text:"Prestige und \u00f6ffentlicher Ruf eines Unternehmens, f\u00fcr den pers\u00f6nliche Integrit\u00e4t immer wieder verhandelt werden muss." },
      { title:"The Iron Lady", year:"2011", text:"Eine Politikerin, deren gesamtes \u00f6ffentliches Bild auf Unersch\u00fctterlichkeit und Prestige aufgebaut ist \u2013 Status als R\u00fcstung, hinter der die private Person fast verschwindet." },
      { title:"Miss Sloane", year:"2016", text:"Eine Lobbyistin, deren Identit\u00e4t vollst\u00e4ndig mit beruflichem Erfolg und \u00f6ffentlicher Reputation verschmilzt \u2013 Prestige als einziges Fundament, auf dem sie steht." },
    
    ],
  },
  "SX3": {
    typ: 3, instinkt: "SX", animal: "Pfau",
    title: "SX3 \u2013 Sexueller Typ 3: Der Pfau und die eine B\u00fchne",
    intro: "Zehn Filme \u00fcber pers\u00f6nliches Charisma, das eine Beziehung oder ein Publikum ganz f\u00fcr sich einnehmen will.",
    filme: [
      { title:"Kate & Leopold", year:"2001", text:"Meg Ryan \u2013 im Kompass als SX3w4 gef\u00fchrt \u2013 von der charismatischen Ausstrahlung einer Figur eingenommen, die den Raum f\u00fcllt, sobald sie ihn betritt." },
      { title:"e-m@il f\u00fcr dich (You've Got Mail)", year:"1998", text:"Meg Ryan erneut, deren pers\u00f6nlicher Charme selbst durch anonyme Kommunikation hindurch wirkt." },
      { title:"In the Cut", year:"2003", text:"Meg Ryan in einer dunkleren Rolle \u2013 Identit\u00e4t, die eng an die eigene Anziehungskraft gekoppelt ist." },
      { title:"Walk the Line", year:"2005", text:"Pers\u00f6nliche Anziehungskraft, die sich in einer einzigen, alles \u00fcberstrahlenden Beziehung b\u00fcndelt." },
      { title:"Ray", year:"2004", text:"B\u00fchnenpr\u00e4senz als Ausdruck einer Identit\u00e4t, die sich vor allem im direkten, intensiven Kontakt mit dem Publikum vollst\u00e4ndig zeigt." },
      { title:"Coyote Ugly", year:"2000", text:"Pers\u00f6nlicher Glanz und Ausstrahlung als Weg, gesehen und begehrt zu werden." },
      { title:"Burlesque", year:"2010", text:"Die B\u00fchne als Ort, an dem charismatische Pr\u00e4senz zur einzig wahren Form der Selbstbest\u00e4tigung wird." },
      { title:"Crazy Heart", year:"2009", text:"Charisma, das trotz pers\u00f6nlichem Verfall noch immer eine einzige, intensive Verbindung zum Publikum herstellen kann." },
      { title:"Yesterday", year:"2019", text:"Ein Musiker, der \u00fcber Nacht zum charismatischen Superstar wird und lernen muss, ob der Ruhm ihn wirklich tr\u00e4gt oder nur blendet \u2013 Charisma als pl\u00f6tzliche, \u00fcberw\u00e4ltigende B\u00fchne." },
      { title:"Judy", year:"2019", text:"Eine alternde B\u00fchnenlegende, deren pers\u00f6nliche Ausstrahlung noch immer ein Publikum in ihren Bann zieht, w\u00e4hrend das Leben dahinter zerbricht \u2013 Glanz und Tragik der SX3-B\u00fchnenpr\u00e4senz in einem Bild." },
    
    ],
  },
  "SE4": {
    typ: 4, instinkt: "SE", animal: "Taube",
    title: "SE4 \u2013 Selbsterhaltungstyp 4: Die Taube und das stille Leiden",
    intro: "Zehn Filme \u00fcber Melancholie im ganz privaten, allt\u00e4glichen Rahmen \u2013 Stoizismus statt Drama, Sehnsucht, die niemand sehen soll.",
    filme: [
      { title:"Manchester by the Sea", year:"2016", text:"Ein Mann, der seinen Schmerz in stiller Routine ertr\u00e4gt, weil offene Trauer f\u00fcr ihn unm\u00f6glich geworden ist." },
      { title:"Paterson", year:"2016", text:"Ein zur\u00fcckgezogenes, poetisches Innenleben, das sich nie lautstark zeigt, sondern in kleinen, privaten Momenten Ausdruck findet." },
      { title:"Wundersch\u00f6n", year:"2020", text:"Karoline Herfurth \u2013 im Kompass als SE4w5 gef\u00fchrt \u2013 erz\u00e4hlt als Regisseurin und Darstellerin von stiller innerer Verletzlichkeit im ganz privaten Ringen um das eigene Selbstbild." },
      { title:"A Ghost Story", year:"2017", text:"Trauer und Sehnsucht, die sich \u00fcber Jahre in einem einzigen, stillen, h\u00e4uslichen Raum festsetzen." },
      { title:"Still Alice \u2013 Mein Leben ohne Gestern (Still Alice)", year:"2014", text:"Ein innerer Verlust, der ganz im Privaten, ohne \u00f6ffentliche B\u00fchne, durchlebt werden muss." },
      { title:"Schmetterling und Taucherglocke (The Diving Bell and the Butterfly)", year:"2007", text:"Ein reiches, sehnsuchtsvolles Innenleben, das nach au\u00dfen fast unsichtbar bleibt." },
      { title:"Liebe (Amour)", year:"2012", text:"Verlust und Sehnsucht, die im engsten h\u00e4uslichen Rahmen durchlitten werden, ohne dass die Welt drau\u00dfen etwas davon erf\u00e4hrt." },
      { title:"The Hours", year:"2002", text:"Drei Frauen, drei Zeiten, dieselbe stille, private Melancholie \u2013 Sehnsucht, die sich nicht in gro\u00dfen Gesten zeigt, sondern im t\u00e4glichen, kaum sichtbaren Ringen mit sich selbst." },
      { title:"Rabbit Hole", year:"2010", text:"Ein Paar, das seinen Verlust in der Stille der eigenen vier W\u00e4nde verarbeitet, jeder auf seine eigene, private Weise \u2013 Trauer ohne Publikum." },
      { title:"A Single Man", year:"2009", text:"Ein Mann, der einen einzigen Tag lang mit stilisierter Pr\u00e4zision durch seine eigene, private Trauer geht \u2013 Melancholie als \u00e4sthetische, stille Disziplin." },
    
    ],
  },
  "SO4": {
    typ: 4, instinkt: "SO", animal: "G\u00fcrteltier",
    title: "SO4 \u2013 Sozialer Typ 4: Das G\u00fcrteltier, das sich einrollt",
    intro: "Zehn Filme \u00fcber das Gef\u00fchl, in der Gruppe nicht dazuzugeh\u00f6ren \u2013 Scham, sozialer R\u00fcckzug und die Sehnsucht nach Zugeh\u00f6rigkeit trotz Andersartigkeit.",
    filme: [
      { title:"Sissi", year:"1955\u20131957", text:"Romy Schneider \u2013 im Kompass als SO4w3 gef\u00fchrt \u2013 als Figur, die im gesellschaftlichen Rampenlicht steht und sich zugleich innerlich fremd und unverstanden f\u00fchlt." },
      { title:"Der Swimmingpool (La Piscine)", year:"1969", text:"Romy Schneider erneut, in einer Rolle voller sozialer Spannung zwischen Zugeh\u00f6rigkeit und innerer Isolation." },
      { title:"Lady Bird", year:"2017", text:"Das qu\u00e4lende Gef\u00fchl, sozial nicht dazuzupassen, w\u00e4hrend man sich verzweifelt eine eigene Identit\u00e4t in der Gruppe erk\u00e4mpft." },
      { title:"Vielleicht lieber morgen (The Perks of Being a Wallflower)", year:"2012", text:"Sozialer R\u00fcckzug aus Scham, bis eine kleine Gruppe die eigene Andersartigkeit annimmt statt bestraft." },
      { title:"Eighth Grade", year:"2018", text:"Die schmerzhafte soziale Selbstbeobachtung eines Teenagers, der st\u00e4ndig mit anderen verglichen wird und sich selbst dabei verliert." },
      { title:"Frances Ha", year:"2012", text:"Das Gef\u00fchl, sozial hinter allen anderen zur\u00fcckzubleiben, w\u00e4hrend man verzweifelt versucht, dazuzugeh\u00f6ren." },
      { title:"Moonlight", year:"2016", text:"Identit\u00e4t, die sich unter dem Druck sozialer Erwartung erst verstecken und dann langsam zeigen muss." },
      { title:"Booksmart", year:"2019", text:"Die Angst, sozial nie wirklich dazugeh\u00f6rt zu haben, trotz aller eigenen Anstrengung." },
      { title:"Elephant", year:"2003", text:"Extreme soziale Isolation und das Gef\u00fchl, in der Gruppe unsichtbar oder falsch zu sein." },
      { title:"Mean Girls", year:"2004", text:"Eine Sch\u00fclerin, die verzweifelt versucht, in eine soziale Hierarchie hineinzupassen, die sie zugleich als fremd empfindet \u2013 das Gef\u00fchl, nie ganz dazuzugeh\u00f6ren, mitten im Zentrum der Gruppe." },
    
    ],
  },
  "SX4": {
    typ: 4, instinkt: "SX", animal: "Chihuahua",
    title: "SX4 \u2013 Sexueller Typ 4: Der Chihuahua und die kompromisslose Intensit\u00e4t",
    intro: "Zehn Filme \u00fcber Neid als vergleichende Konkurrenz, kompromisslose Gef\u00fchlsintensit\u00e4t und den Mut, unangepasst zu sein.",
    filme: [
      { title:"Blonde", year:"2022", text:"Ana de Armas \u2013 im Kompass als SX4w5 gef\u00fchrt \u2013 in einer Rolle von schonungsloser emotionaler Intensit\u00e4t und dem Gef\u00fchl, innerlich nie ganz gesehen zu werden." },
      { title:"Knives Out", year:"2019", text:"Ana de Armas erneut, als Figur, deren emotionale Echtheit sie von einer ganzen Familie voller Fassaden unterscheidet." },
      { title:"Black Swan", year:"2010", text:"Kompromisslose, selbstzerst\u00f6rerische emotionale Intensit\u00e4t im Wettstreit um das eine, unerreichbare Ideal." },
      { title:"Requiem for a Dream", year:"2000", text:"Sehnsucht und Verzweiflung in ihrer intensivsten, unangepassten Form, ohne jede Besch\u00f6nigung." },
      { title:"The Virgin Suicides", year:"1999", text:"Unerreichbare, romantisierte Sehnsucht und Melancholie, die sich der Umwelt vollst\u00e4ndig entzieht." },
      { title:"Call Me by Your Name", year:"2017", text:"Erste, kompromisslose Liebe in ihrer ganzen ungefilterten emotionalen Intensit\u00e4t." },
      { title:"Blau ist eine warme Farbe (Blue Is the Warmest Colour)", year:"2013", text:"Gef\u00fchlsintensit\u00e4t, die keine halben Sachen kennt und keine gesellschaftliche Norm respektiert." },
      { title:"Vergiss mein nicht! (Eternal Sunshine of the Spotless Mind)", year:"2004", text:"Die Weigerung, Schmerz und Sehnsucht durch Vergessen zu bet\u00e4uben \u2013 lieber ganz f\u00fchlen als gar nicht." },
      { title:"A Star Is Born", year:"2018", text:"Kompromisslose k\u00fcnstlerische und emotionale Wahrhaftigkeit, koste es, was es wolle." },
      { title:"Shame", year:"2011", text:"Ein Mann, dessen unkontrollierbare emotionale und k\u00f6rperliche Intensit\u00e4t ihn von echter N\u00e4he eher entfernt als ihm n\u00e4herbringt \u2013 Gef\u00fchl in seiner rohsten, ungefilterten Form." },
    
    ],
  },
  "SE5": {
    typ: 5, instinkt: "SE", animal: "Eule",
    title: "SE5 \u2013 Selbsterhaltungstyp 5: Die Eule und die eigene Burg",
    intro: "Zehn Filme \u00fcber den R\u00fcckzug ins Notwendigste \u2013 Ressourcenschutz, minimale Bed\u00fcrfnisse und ein enges, kontrolliertes Refugium.",
    filme: [
      { title:"Into the Wild", year:"2007", text:"Ein R\u00fcckzug aus der Welt in ein absichtlich minimales, ressourcenarmes Leben \u2013 Sicherheit durch radikale Reduktion statt durch F\u00fclle." },
      { title:"A Beautiful Mind \u2013 Genie und Wahnsinn (A Beautiful Mind)", year:"2001", text:"Ein Innenleben von enormer Komplexit\u00e4t, das sich in einem zur\u00fcckgezogenen, streng geordneten Alltag zu sch\u00fctzen versucht." },
      { title:"Wild", year:"2014", text:"R\u00fcckzug in die Reduktion \u2013 ein Leben, das bewusst auf das Notwendigste zur\u00fcckgeschraubt wird, um wieder Boden zu finden." },
      { title:"127 Hours", year:"2010", text:"Extreme Ressourcenknappheit, in der jede kleinste Reserve \u00fcber Leben und Tod entscheidet." },
      { title:"Leave No Trace", year:"2018", text:"Ein Vater und seine Tochter, die bewusst mit minimalsten Mitteln au\u00dferhalb der Gesellschaft leben \u2013 Sicherheit durch radikalen R\u00fcckzug statt durch Teilhabe." },
      { title:"Nell", year:"1994", text:"Eine Frau, die in fast vollst\u00e4ndiger Isolation aufgewachsen ist und sich der Au\u00dfenwelt nur in kleinsten, kontrollierten Dosen \u00f6ffnet \u2013 R\u00fcckzug als einziger bekannter Schutzraum." },
      { title:"Cast Away", year:"2000", text:"Ein Mann, auf das absolute Minimum an Ressourcen reduziert, der lernt, mit nichts als der eigenen Beobachtungsgabe zu \u00fcberleben." },
      { title:"Tracks", year:"2013", text:"Eine Frau, die allein mit wenigen Kamelen eine australische W\u00fcste durchquert \u2013 radikale Reduktion und R\u00fcckzug als Weg zu sich selbst." },
      { title:"The Machinist", year:"2004", text:"Ein Mann, der sich selbst bis an die Grenze der physischen Aufl\u00f6sung reduziert \u2013 ein d\u00fcsteres Bild dessen, wohin f\u00fcnferhafte Gen\u00fcgsamkeit kippen kann." },
      { title:"Wendy and Lucy", year:"2008", text:"Eine junge Frau, die mit denkbar knappsten Mitteln durchs Leben navigiert \u2013 jede Ressource genau kalkuliert, jede Bindung auf das N\u00f6tigste reduziert." },
    
    ],
  },
  "SO5": {
    typ: 5, instinkt: "SO", animal: "Oktopus",
    title: "SO5 \u2013 Sozialer Typ 5: Der Oktopus, der Systeme durchdringt",
    intro: "Zehn Filme \u00fcber Expertentum, das sich der Gruppe \u00fcber Wissen statt \u00fcber N\u00e4he zeigt \u2013 der Beitrag als Denker, nicht als Teilnehmer.",
    filme: [
      { title:"The Imitation Game", year:"2014", text:"Ein brillanter Kopf, der der Gemeinschaft ausschlie\u00dflich \u00fcber seine intellektuelle Leistung dient, nicht \u00fcber soziale N\u00e4he." },
      { title:"Contact", year:"1997", text:"Eine Wissenschaftlerin, die ihr gesamtes Fachwissen in den Dienst eines Ereignisses stellt, das die ganze Menschheit betrifft \u2013 Erkenntnis nicht als privates Projekt, sondern als Beitrag f\u00fcr alle." },
      { title:"The Big Short", year:"2015", text:"Au\u00dfenseiter, die als Einzige das komplexe System durchschauen, das alle anderen \u00fcbersehen." },
      { title:"Arrival", year:"2016", text:"Verstehen als Rettung der ganzen Menschheit \u2013 Wissen, das der Gemeinschaft dient, gewonnen aus einer Position der Distanz." },
      { title:"Die Poesie des Unendlichen (The Man Who Knew Infinity)", year:"2015", text:"Ein mathematisches Genie, dessen Beitrag zur Gemeinschaft ganz im abstrakten Denken liegt, nicht im sozialen Auftritt." },
      { title:"Ex Machina", year:"2014", text:"Ein System, das die Grenzen des Verstehens selbst zum Thema macht \u2013 Wissen als Machtquelle und Risiko zugleich." },
      { title:"Interstellar", year:"2014", text:"Wissenschaftliches Verstehen im Dienst der ganzen Menschheit \u2013 Expertise, die nicht der eigenen N\u00e4he, sondern dem \u00dcberleben aller gewidmet ist." },
      { title:"Gifted", year:"2017", text:"Ein au\u00dfergew\u00f6hnlich begabtes Kind und die Frage, wie viel von seinem Wissen der Gesellschaft geh\u00f6ren soll \u2013 Intellekt als etwas, das die Gemeinschaft beansprucht." },
      { title:"Radioactive", year:"2019", text:"Marie Curies wissenschaftliche Arbeit, die weit \u00fcber die eigene Person hinaus die ganze Welt ver\u00e4ndert \u2013 Wissen als Beitrag zur Menschheit, nicht als privates Projekt." },
      { title:"The Aeronauts", year:"2019", text:"Eine riskante wissenschaftliche Expedition, deren Erkenntnisse der gesamten Gesellschaft zugutekommen sollen \u2013 Entdeckung im Dienst des kollektiven Wissens." },
    
    ],
  },
  "SX5": {
    typ: 5, instinkt: "SX", animal: "Igel",
    title: "SX5 \u2013 Sexueller Typ 5: Der Igel und die eine vertraute Verbindung",
    intro: "Zehn Filme \u00fcber seltene, aber intensive Verbindung zu einer einzigen Person \u2013 Vertrauen, das sich nur ausnahmsweise \u00f6ffnet.",
    filme: [
      { title:"Good Will Hunting", year:"1997", text:"Ein Mensch, der sich vor der Welt verschlie\u00dft, sich aber genau einer einzigen Person gegen\u00fcber ausnahmsweise \u00f6ffnet." },
      { title:"Lost in Translation", year:"2003", text:"Zwei zur\u00fcckgezogene Menschen, die sich gerade f\u00fcreinander \u00f6ffnen, weil die Verbindung selten und deshalb kostbar ist." },
      { title:"Die Entdeckung der Unendlichkeit (The Theory of Everything)", year:"2014", text:"Eine intensive Zweierbeziehung als einziger verl\u00e4sslicher Kontakt zu einer Welt, die sonst auf Distanz gehalten wird." },
      { title:"Frank", year:"2014", text:"Ein zur\u00fcckgezogenes, exzentrisches Genie, das nur zu wenigen Menschen wirklich vordringen l\u00e4sst." },
      { title:"Moon", year:"2009", text:"Radikale Isolation, in der eine einzige Verbindung zur Au\u00dfenwelt existenziell wichtig wird." },
      { title:"Before Sunset", year:"2004", text:"Zwei Menschen, die sich nach Jahren der Distanz f\u00fcr wenige intensive Stunden wiederfinden \u2013 seltene N\u00e4he, die dadurch nur noch kostbarer wird." },
      { title:"Adaptation", year:"2002", text:"Ein zur\u00fcckgezogener, gr\u00fcblerischer Autor, der sich der Welt fast ausschlie\u00dflich \u00fcber den einen Menschen \u00f6ffnet, dem er wirklich vertraut." },
      { title:"Lars and the Real Girl", year:"2007", text:"Ein Mann, der sich fast vollst\u00e4ndig aus dem sozialen Leben zur\u00fcckzieht und seine ganze emotionale Welt in eine einzige, ungew\u00f6hnliche Beziehung legt." },
      { title:"Robot & Frank", year:"2012", text:"Ein zur\u00fcckgezogener \u00e4lterer Mann, der \u00fcberraschend eine einzige, unerwartete Verbindung eingeht \u2013 N\u00e4he, die den R\u00fcckzug nicht aufhebt, sondern erg\u00e4nzt." },
      { title:"The Skeleton Twins", year:"2014", text:"Zwei einander entfremdete Geschwister, die nach Jahren der Distanz wieder zueinanderfinden \u2013 seltene, aber tief bedeutsame N\u00e4he zwischen zwei Menschen, die sich selbst schwer zug\u00e4nglich sind." },
    
    ],
  },
  "SE6": {
    typ: 6, instinkt: "SE", animal: "Kaninchen",
    title: "SE6 \u2013 Selbsterhaltungstyp 6: Das Kaninchen, das W\u00e4rme sucht",
    intro: "Zehn Filme \u00fcber Sicherheit im vertrauten Nahbereich \u2013 W\u00e4rme, B\u00fcndnisse und die Suche nach einem verl\u00e4sslichen Zuhause gegen die Angst.",
    filme: [
      { title:"Little Miss Sunshine", year:"2006", text:"Eine chaotische, aber warme Familie, die trotz aller \u00c4ngste zusammenh\u00e4lt und sich gegenseitig Sicherheit gibt." },
      { title:"Room", year:"2015", text:"Sicherheit, die trotz extremer Bedrohung im engsten, vertrautesten B\u00fcndnis \u2013 hier zwischen Mutter und Kind \u2013 entsteht." },
      { title:"A Quiet Place \u2013 Leise Zeichen (A Quiet Place)", year:"2018", text:"Eine Familie, die ihre \u00c4ngste durch enge B\u00fcndnisse und eingespielte, verl\u00e4ssliche Routinen bew\u00e4ltigt." },
      { title:"Captain Fantastic", year:"2016", text:"Sicherheit durch ein enges, selbst geschaffenes famili\u00e4res System, das Schutz vor einer als bedrohlich empfundenen Au\u00dfenwelt bietet." },
      { title:"Wir m\u00fcssen \u00fcber Kevin reden (We Need to Talk About Kevin)", year:"2011", text:"Die Angst, im engsten famili\u00e4ren Nahbereich nicht wirklich sicher zu sein \u2013 eine dunkle Kehrseite des SE6-Themas." },
      { title:"The Impossible", year:"2012", text:"Eine Familie, die unter existenzieller Bedrohung alles daransetzt, wieder zusammenzufinden und sich gegenseitig Sicherheit zu geben." },
      { title:"Beasts of No Nation", year:"2015", text:"Der verzweifelte Wunsch nach einer sicheren, verl\u00e4sslichen Zugeh\u00f6rigkeit inmitten einer zutiefst bedrohlichen Welt." },
      { title:"Panic Room", year:"2002", text:"Eine Mutter und ihre Tochter, die sich bei einem Einbruch in einen eigens gesicherten Raum zur\u00fcckziehen \u2013 Sicherheit, buchst\u00e4blich in vier W\u00e4nde gebaut." },
      { title:"The Road", year:"2009", text:"Ein Vater, dessen gesamtes Handeln dem Schutz seines Sohnes in einer lebensfeindlichen Welt gilt \u2013 Wachsamkeit als letzte Form der Liebe." },
      { title:"Take Shelter", year:"2011", text:"Ein Mann, der von wachsender Angst getrieben alles daransetzt, seine Familie gegen eine kommende Bedrohung abzusichern \u2013 Vorsorge als einzige Antwort auf die eigene Unruhe." },
    
    ],
  },
  "SO6": {
    typ: 6, instinkt: "SO", animal: "Erdm\u00e4nnchen",
    title: "SO6 \u2013 Sozialer Typ 6: Das Erdm\u00e4nnchen auf Wache",
    intro: "Zehn Filme \u00fcber Sicherheit durch Regeln, Autorit\u00e4t und Zugeh\u00f6rigkeit zu einer Gruppe \u2013 Loyalit\u00e4t als Schutz vor der eigenen Angst.",
    filme: [
      { title:"Zero Dark Thirty", year:"2012", text:"Systematische, institutionelle Wachsamkeit im Dienst eines gr\u00f6\u00dferen Systems \u2013 Sicherheit durch Verfahren und Struktur." },
      { title:"Argo", year:"2012", text:"Loyalit\u00e4t zu einem Team und einem Plan, der unter extremem Risiko eingehalten wird, weil das System Sicherheit verspricht." },
      { title:"Contagion", year:"2011", text:"Institutionelle Systeme und Autorit\u00e4ten, denen in einer Krise vertraut oder misstraut werden muss \u2013 Sicherheit durch funktionierende Strukturen." },
      { title:"World War Z", year:"2013", text:"Zusammenarbeit mit globalen Institutionen als einziger Weg, eine \u00fcberw\u00e4ltigende Bedrohung einzud\u00e4mmen." },
      { title:"Bridge of Spies", year:"2015", text:"Vertrauen in ausgehandelte Regeln und Institutionen selbst mitten im Kalten Krieg \u2013 Sicherheit durch funktionierende Systeme, nicht durch Alleing\u00e4nge." },
      { title:"The Insider", year:"1999", text:"Ein Mann, dessen Loyalit\u00e4t zwischen einer m\u00e4chtigen Institution und der eigenen Integrit\u00e4t zerrissen wird \u2013 die Sechs-Frage, wem am Ende wirklich zu trauen ist." },
      { title:"13 Hours", year:"2016", text:"Eine Gruppe, die sich in einer Krise ganz auf das gegenseitige Vertrauen und eingespielte Abl\u00e4ufe verlassen muss, w\u00e4hrend das offizielle System versagt." },
      { title:"United 93", year:"2006", text:"Eine Gruppe von Fremden, die sich in einer extremen Krise zu kollektivem, koordiniertem Handeln zusammenschlie\u00dft \u2013 Sicherheit durch gemeinsames, diszipliniertes Vorgehen." },
      { title:"Deepwater Horizon", year:"2016", text:"Institutionelle Sicherheitssysteme, die unter Druck versagen \u2013 und die Menschen, die sich trotzdem aufeinander verlassen m\u00fcssen, um zu \u00fcberleben." },
      { title:"Captain Phillips", year:"2013", text:"Vertrauen in trainierte Abl\u00e4ufe und eine \u00fcbergeordnete Rettungsstruktur, wenn die eigene Kontrolle \u00fcber die Situation l\u00e4ngst verloren ist." },
    
    ],
  },
  "SX6": {
    typ: 6, instinkt: "SX", animal: "Wolf",
    title: "SX6 \u2013 Sexueller Typ 6: Der Wolf und die Kraft gegen die Angst",
    intro: "Zehn Filme \u00fcber Angst, die in St\u00e4rke, Provokation oder kompromisslose Loyalit\u00e4t zu einer einzigen Person verwandelt wird.",
    filme: [
      { title:"Kein Land f\u00fcr alte M\u00e4nner (No Country for Old Men)", year:"2007", text:"Angst, die in unersch\u00fctterliche, fast furchtlos wirkende H\u00e4rte verwandelt wird \u2013 die Kehrseite der Bedrohung als St\u00e4rke." },
      { title:"Departed \u2013 Unter Feinden (The Departed)", year:"2006", text:"Kompromisslose, riskante Loyalit\u00e4t innerhalb eines gef\u00e4hrlichen Systems, in dem Vertrauen \u00fcber Leben und Tod entscheidet." },
      { title:"Sicario", year:"2015", text:"Angst, die sich in provokante, grenz\u00fcberschreitende Konfrontation mit der Gefahr selbst verwandelt." },
      { title:"Warrior", year:"2011", text:"K\u00f6rperliche Kraft und Kampf als direkte Antwort auf tief sitzende Angst und famili\u00e4re Verletzung." },
      { title:"T\u00f6dliches Kommando \u2013 The Hurt Locker (The Hurt Locker)", year:"2008", text:"Eine Anziehungskraft der Gefahr selbst \u2013 Angst, die sich in provokantes Aufsuchen des Risikos verwandelt." },
      { title:"Fight Club", year:"1999", text:"Angst und Ohnmacht, die sich in kompromisslose k\u00f6rperliche Konfrontation und riskante Loyalit\u00e4t zu einer einzigen Verb\u00fcndeten umwandeln." },
      { title:"Killing Them Softly", year:"2012", text:"Misstrauen und Wachsamkeit, die sich in kalkulierte, kompromisslose H\u00e4rte verwandeln, um die eigene Position zu sichern." },
      { title:"A History of Violence", year:"2005", text:"Die d\u00fcnne Grenze zwischen Angst, Schutz und der eigenen verborgenen Gewaltbereitschaft." },
      { title:"Nightcrawler", year:"2014", text:"Eine Figur, die Unsicherheit in kalte, riskante Kompromisslosigkeit \u00fcbersetzt, um Kontrolle \u00fcber eine bedrohliche Welt zu gewinnen." },
      { title:"Prisoners", year:"2013", text:"Ein Vater, dessen Angst um seine Tochter sich in kompromisslose, riskante Konfrontation mit der Gefahr selbst verwandelt \u2013 Furcht, die zu H\u00e4rte wird, statt zu erstarren." },
    
    ],
  },
  "SE7": {
    typ: 7, instinkt: "SE", animal: "Gorilla",
    title: "SE7 \u2013 Selbsterhaltungstyp 7: Der Gorilla und der gedeckte Tisch",
    intro: "Zehn Filme \u00fcber praktischen Genuss und ein verl\u00e4ssliches Netz an Optionen \u2013 F\u00fclle als Absicherung gegen den Mangel.",
    filme: [
      { title:"Mein Essen mit Andr\u00e9 (My Dinner with Andr\u00e9)", year:"1981", text:"Wallace Shawn \u2013 im Kompass als SE7w6 gef\u00fchrt \u2013 in einem ausgedehnten Gespr\u00e4ch \u00fcber Genuss, Ideen und die F\u00fclle des Lebens im vertrauten Kreis." },
      { title:"Die Braut des Prinzen (The Princess Bride)", year:"1987", text:"Wallace Shawn erneut, als gewitzter Stratege, der sich immer mehrere Optionen und Auswege offenh\u00e4lt." },
      { title:"Eat Pray Love", year:"2010", text:"Genuss und neue M\u00f6glichkeiten als bewusste Strategie gegen Schmerz und Enge." },
      { title:"Unter der Sonne der Toskana (Under the Tuscan Sun)", year:"2003", text:"Der Aufbau eines neuen, versorgenden Umfelds als Antwort auf Verlust \u2013 F\u00fclle statt Mangel." },
      { title:"Chef", year:"2014", text:"Freude am Genuss und an der eigenen Praxis als Quelle von Sicherheit und Lebendigkeit." },
      { title:"Madame Mallory und der Duft von Curry (The Hundred-Foot Journey)", year:"2014", text:"Genuss und kulinarische F\u00fclle als Weg, sich in einer neuen Umgebung ein sicheres, angenehmes Leben aufzubauen." },
      { title:"Chocolat", year:"2000", text:"Sinnlicher Genuss als bewusste Gegenkraft zu Enge und Verzicht." },
      { title:"Ein gutes Jahr (A Good Year)", year:"2006", text:"Der Umbau eines Lebens hin zu mehr Genuss, Leichtigkeit und offenen M\u00f6glichkeiten." },
      { title:"Das erstaunliche Leben des Walter Mitty (The Secret Life of Walter Mitty)", year:"2013", text:"Praktischer Aufbruch zu neuen Erfahrungen, sobald der Alltag zu eng wird." },
      { title:"Big Night", year:"1996", text:"Zwei Br\u00fcder, die ihre Existenz und ihre Beziehung zueinander \u00fcber ein einziges, aufwendig zelebriertes Festmahl retten wollen \u2013 Genuss als praktische \u00dcberlebensstrategie und Lebensfreude in einem." },
    
    ],
  },
  "SO7": {
    typ: 7, instinkt: "SO", animal: "Biber",
    title: "SO7 \u2013 Sozialer Typ 7: Der Biber im Dienst der Gruppe",
    intro: "Zehn Filme \u00fcber Idealismus, der sich f\u00fcr das Wohl der Gruppe einsetzt \u2013 Begeisterung, die auch eigene Unzul\u00e4nglichkeiten in Kauf nimmt.",
    filme: [
      { title:"Johnny English", year:"2003", text:"Rowan Atkinson \u2013 im Kompass als SO7w6 gef\u00fchrt \u2013 als tollpatschiger, aber unbeirrbar einsatzbereiter Held im Dienst des gro\u00dfen Ganzen." },
      { title:"Mr. Bean macht Ferien (Mr. Bean's Holiday)", year:"2007", text:"Rowan Atkinson erneut, unfreiwillig, aber folgenreich in das Wohlergehen anderer verstrickt." },
      { title:"Pitch Perfect", year:"2012", text:"Begeisterung und Einsatz f\u00fcr eine Gruppe, deren gemeinsamer Erfolg wichtiger wird als die eigene B\u00fchne." },
      { title:"Sister Act", year:"1992", text:"Ansteckende Begeisterung, die eine ganze Gemeinschaft neu belebt." },
      { title:"Almost Famous", year:"2000", text:"Idealistische Begeisterung f\u00fcr eine Gruppe und ihre gemeinsame Sache, trotz aller Reibung." },
      { title:"Kinky Boots", year:"2005", text:"Einsatz f\u00fcr das Wohl eines ganzen Teams, der die eigene Komfortzone \u00fcberschreitet." },
      { title:"Zombieland", year:"2009", text:"Der Aufbau einer improvisierten Gemeinschaft, die trotz Chaos zusammenh\u00e4lt und sich gegenseitig Freude schenkt." },
      { title:"Wir sind die Millers (We're the Millers)", year:"2013", text:"Eine notgedrungene Gruppe, die durch gemeinsame Abenteuer zu einem echten Zusammenhalt findet." },
      { title:"Catch Me If You Can", year:"2002", text:"Ein junger Hochstapler, der sich mit ansteckendem Charme in immer neue Systeme einschleicht, bis er endlich in einem \u2013 dem FBI \u2013 wirklich gebraucht wird. Die soziale Sieben unverfälscht: rastlose Vielfalt, die sich am Ende in echte Zugeh\u00f6rigkeit verwandelt." },
      { title:"Dolemite Is My Name", year:"2019", text:"Ein Entertainer, der eine ganze Gemeinschaft von Au\u00dfenseitern um sein Projekt versammelt und seinen eigenen Erfolg untrennbar mit deren Aufstieg verkn\u00fcpft \u2013 Begeisterung im Dienst der Gruppe." },
    
    ],
  },
  "SX7": {
    typ: 7, instinkt: "SX", animal: "Schimpanse",
    title: "SX7 \u2013 Sexueller Typ 7: Der Schimpanse und die ansteckende Begeisterung",
    intro: "Zehn Filme \u00fcber Charme, Geschichten und Enthusiasmus, der eine einzelne Person sofort f\u00fcr sich einnimmt.",
    filme: [
      { title:"Big Fish", year:"2003", text:"Eine Figur, deren Lebensgeschichten so charismatisch und \u00fcbersteigert sind, dass sie jeden im Raum sofort f\u00fcr sich einnehmen." },
      { title:"Forrest Gump", year:"1994", text:"Ein Leben voller Begeisterung und Direktheit, das im pers\u00f6nlichen Kontakt sofort f\u00fcr sich einnimmt." },
      { title:"Life of Pi: Schiffbruch mit Tiger (Life of Pi)", year:"2012", text:"Die Kraft einer intensiv erz\u00e4hlten Geschichte, die ihr Gegen\u00fcber sofort in ihren Bann zieht." },
      { title:"Die fabelhafte Welt der Am\u00e9lie (Am\u00e9lie)", year:"2001", text:"Verspielter, ansteckender Charme, der gezielt einzelne Menschen im direkten Kontakt verzaubert." },
      { title:"Yes Man", year:"2008", text:"Ansteckende Begeisterung, die sich ganz auf einzelne, intensive Begegnungen konzentriert." },
      { title:"The Truman Show", year:"1998", text:"Ein Mann, dessen ansteckende, unbeschwerte Art ein ganzes Publikum in seinen Bann zieht, ohne dass er selbst davon wei\u00df \u2013 Charme, der andere fesselt, obwohl er nie kalkuliert war." },
      { title:"Ferris Bueller's Day Off", year:"1986", text:"Ein Jugendlicher, dessen mitrei\u00dfende Energie einen einzigen Tag mit seinen engsten Freunden zu einem unvergesslichen Abenteuer macht \u2013 Begeisterung, die andere sofort ansteckt." },
      { title:"Good Morning, Vietnam", year:"1987", text:"Ein Radiomoderator, dessen sprudelnder Wortwitz und ansteckende Energie selbst im Kriegsgebiet Verbindung und Leichtigkeit schafft." },
      { title:"Roman Holiday", year:"1953", text:"Eine spontane, charmante Begegnung, die f\u00fcr einen Tag alle Verpflichtungen vergessen l\u00e4sst \u2013 Leichtigkeit und Anziehungskraft im unmittelbaren, pers\u00f6nlichen Kontakt." },
      { title:"The Fisher King", year:"1991", text:"Ein exzentrischer, geschichtenerz\u00e4hlender Mann, dessen ansteckende Fantasie eine einzige, tief verletzte Person zur\u00fcck ins Leben holt." },
    
    ],
  },
  "SE8": {
    typ: 8, instinkt: "SE", animal: "Orang-Utan",
    title: "SE8 \u2013 Selbsterhaltungstyp 8: Der Orang-Utan und das gesicherte Territorium",
    intro: "Zehn Filme \u00fcber handfeste Kontrolle \u00fcber Ressourcen und den engsten Kreis \u2013 St\u00e4rke, die vor allem das eigene \u00dcberleben und das der N\u00e4chsten sichert.",
    filme: [
      { title:"King Richard", year:"2021", text:"Ein Vater, dessen ganze Kraft der handfesten, kompromisslosen Absicherung der Zukunft seiner T\u00f6chter gilt." },
      { title:"There Will Be Blood", year:"2007", text:"Kontrolle \u00fcber Land und Ressourcen als Lebensinhalt \u2013 St\u00e4rke, die keine R\u00fccksicht auf andere kennt." },
      { title:"American Gangster", year:"2007", text:"Aufbau und Verteidigung eines eigenen wirtschaftlichen Territoriums mit unerbittlicher H\u00e4rte." },
      { title:"Killers of the Flower Moon", year:"2023", text:"Kontrolle \u00fcber Land und Verm\u00f6gen, durchgesetzt mit r\u00fccksichtsloser H\u00e4rte im engsten famili\u00e4ren Umfeld." },
      { title:"The Irishman", year:"2019", text:"Loyalit\u00e4t und H\u00e4rte im Dienst der eigenen wirtschaftlichen und famili\u00e4ren Absicherung." },
      { title:"Hell or High Water", year:"2016", text:"Der Kampf, das eigene Land und die eigene Familie gegen den drohenden Verlust zu verteidigen." },
      { title:"Wind River", year:"2017", text:"Besch\u00fctzerische H\u00e4rte, die vor allem dem eigenen, nahen Umfeld gilt." },
      { title:"Mudbound", year:"2017", text:"Der erbitterte Kampf um Land und \u00dcberleben in einer feindlichen Umgebung." },
      { title:"The Town \u2013 Stadt ohne Gnade (The Town)", year:"2010", text:"Kontrolle \u00fcber das eigene Terrain, erk\u00e4mpft und verteidigt mit roher Entschlossenheit." },
      { title:"Ein einfacher Plan (A Simple Plan)", year:"1998", text:"Der Wunsch nach materieller Absicherung, der eine Figur zu immer h\u00e4rteren Mitteln greifen l\u00e4sst." },
    
    ],
  },
  "SO8": {
    typ: 8, instinkt: "SO", animal: "L\u00f6we",
    title: "SO8 \u2013 Sozialer Typ 8: Der L\u00f6we im Schutz der Gemeinschaft",
    intro: "Zehn Filme \u00fcber F\u00fchrung, die sich sch\u00fctzend vor eine unterdr\u00fcckte Gruppe stellt \u2013 St\u00e4rke im Dienst der Solidarit\u00e4t, nicht der eigenen Macht.",
    filme: [
      { title:"Sie nannten ihn Trinity (They Call Me Trinity)", year:"1970", text:"Bud Spencer \u2013 im Kompass als SO8w9 gef\u00fchrt \u2013 als kraftvoller Besch\u00fctzer einer bedr\u00e4ngten Gemeinschaft gegen einen \u00fcberm\u00e4chtigen Gegner." },
      { title:"Die Tribute von Panem (The Hunger Games)", year:"2012", text:"Eine Figur, die sich zur Anf\u00fchrerin einer unterdr\u00fcckten Bev\u00f6lkerung entwickelt, weil sie sich nicht mit Ungerechtigkeit abfinden kann." },
      { title:"V for Vendetta", year:"2005", text:"Widerstand gegen eine unterdr\u00fcckerische Autorit\u00e4t im Namen aller, die selbst keine Stimme haben." },
      { title:"Black Panther", year:"2018", text:"F\u00fchrung, die ihre St\u00e4rke ganz in den Dienst des Schutzes der eigenen Gemeinschaft stellt." },
      { title:"Braveheart", year:"1995", text:"Ein Anf\u00fchrer, der sich mit voller H\u00e4rte gegen eine \u00fcberm\u00e4chtige, unterdr\u00fcckende Autorit\u00e4t stellt." },
      { title:"Gladiator", year:"2000", text:"Der Kampf gegen korrupte Macht im Namen derer, die sich selbst nicht wehren k\u00f6nnen." },
      { title:"Les Mis\u00e9rables", year:"2012", text:"Solidarit\u00e4t mit den Unterdr\u00fcckten als treibende Kraft gegen ein ungerechtes System." },
      { title:"Judas and the Black Messiah", year:"2021", text:"Revolution\u00e4re F\u00fchrung im unmittelbaren Dienst und Schutz der eigenen Gemeinschaft." },
      { title:"Harriet", year:"2019", text:"Unerschrockene, besch\u00fctzende F\u00fchrung, die andere aus Unterdr\u00fcckung befreit." },
      { title:"Malcolm X", year:"1992", text:"Ein Mann, dessen F\u00fchrungskraft ganz in den Dienst des Schutzes und der W\u00fcrde seiner Gemeinschaft gestellt wird \u2013 St\u00e4rke, die sich f\u00fcr andere in die Bresche wirft." },
    
    ],
  },
  "SX8": {
    typ: 8, instinkt: "SX", animal: "Krokodil",
    title: "SX8 \u2013 Sexueller Typ 8: Das Krokodil und die alles verzehrende Bindung",
    intro: "Zehn Filme \u00fcber besitzergreifende, kompromisslose Intensit\u00e4t in der einen Beziehung \u2013 alles oder nichts.",
    filme: [
      { title:"Wuthering Heights", year:"2011", text:"Eine alles verzehrende, besitzergreifende Leidenschaft, die keine Grenzen und keine Vernunft kennt." },
      { title:"Basic Instinct", year:"1992", text:"Intensit\u00e4t und Kontrolle in einer gef\u00e4hrlichen, kompromisslosen Anziehung." },
      { title:"Fieber \u2013 Symptome einer Leidenschaft (Body Heat)", year:"1981", text:"Eine Leidenschaft, die jede R\u00fccksicht und jede Grenze verschwinden l\u00e4sst." },
      { title:"Untreu (Unfaithful)", year:"2002", text:"Eine Intensit\u00e4t, die sich \u00fcber alle Konsequenzen hinwegsetzt, sobald sie einmal entfacht ist." },
      { title:"Match Point", year:"2005", text:"Besitzanspruch und Leidenschaft, die bereit sind, f\u00fcr die eine Verbindung alles zu riskieren." },
      { title:"Gone Girl \u2013 Das perfekte Opfer (Gone Girl)", year:"2014", text:"Eine Beziehung, in der Kontrolle und Besitzanspruch bis zum \u00c4u\u00dfersten getrieben werden." },
      { title:"Original Sin", year:"2001", text:"Bedingungslose, gef\u00e4hrliche Hingabe an eine einzige, alles beherrschende Leidenschaft." },
      { title:"Wie ein einziger Tag (The Notebook)", year:"2004", text:"Eine Liebe, die kompromisslos alles oder nichts fordert \u2013 bis zum Ende." },
      { title:"9\u00bd Weeks", year:"1986", text:"Besitzergreifende Intensit\u00e4t, die eine Beziehung vollst\u00e4ndig \u00fcbernimmt." },
      { title:"Damage", year:"1992", text:"Eine Leidenschaft, die alle Vernunft, alle R\u00fccksicht und am Ende das ganze Leben der Beteiligten verschlingt \u2013 Besitzanspruch und Intensit\u00e4t ohne Bremse." },
    
    ],
  },
  "SE9": {
    typ: 9, instinkt: "SE", animal: "Elefant",
    title: "SE9 \u2013 Selbsterhaltungstyp 9: Der Elefant und die bequeme Routine",
    intro: "Zehn Filme \u00fcber Trost durch Gewohnheit und Komfort \u2013 ein Leben, das sich in vertrauten Routinen einrichtet, bis der Ruf zur Ver\u00e4nderung zu laut wird.",
    filme: [
      { title:"The Big Lebowski", year:"1998", text:"Ein Leben, das sich ganz bewusst in Gem\u00fctlichkeit und Routine einrichtet und jeder Anstrengung aus dem Weg geht." },
      { title:"Sideways", year:"2004", text:"Komfortable Vermeidung gro\u00dfer Entscheidungen, verpackt in angenehme, wiederkehrende Rituale." },
      { title:"The Descendants \u2013 Familie und andere Angelegenheiten (The Descendants)", year:"2011", text:"Ein passives, treibendes Leben, das erst durch eine Krise aus seiner bequemen Routine gerissen wird." },
      { title:"Up in the Air", year:"2009", text:"Komfort durch eingespielte Routinen und Distanz, die tiefere Bindung lange auf Abstand h\u00e4lt." },
      { title:"Und t\u00e4glich gr\u00fc\u00dft das Murmeltier (Groundhog Day)", year:"1993", text:"Gefangensein in bequemer Wiederholung, bis echtes Wachstum nicht mehr zu vermeiden ist." },
      { title:"Hector and the Search for Happiness", year:"2014", text:"Der Ausbruch aus einer allzu bequemen Routine, um wieder wirklich lebendig zu werden." },
      { title:"Nebraska", year:"2013", text:"Tr\u00e4gheit und stille Gewohnheit innerhalb einer Familie, die sich nur schwer in Bewegung setzt." },
      { title:"American Beauty", year:"1999", text:"Das Erwachen aus einer bet\u00e4ubenden, allzu bequemen Alltagsroutine." },
      { title:"Local Hero", year:"1983", text:"Ein Gesch\u00e4ftsmann, der in einem beschaulichen schottischen Dorf ankommt, um es zu ver\u00e4ndern \u2013 und stattdessen selbst von seiner behaglichen Langsamkeit eingenommen wird." },
      { title:"The Way, Way Back", year:"2013", text:"Ein zur\u00fcckhaltender Teenager, der \u00fcber einen tr\u00e4gen Sommer hinweg in eine entspannte, komfortable Wasserpark-Gemeinschaft hineinw\u00e4chst \u2013 Trost durch Routine und beil\u00e4ufige Zugeh\u00f6rigkeit, statt durch gro\u00dfe Ver\u00e4nderung." },
    
    ],
  },
  "SO9": {
    typ: 9, instinkt: "SO", animal: "B\u00fcffel",
    title: "SO9 \u2013 Sozialer Typ 9: Der B\u00fcffel in der Herde",
    intro: "Zehn Filme \u00fcber das Verschmelzen mit einer Gemeinschaft \u2013 Identit\u00e4t, die sich ganz \u00fcber Zugeh\u00f6rigkeit zu einer Gruppe definiert.",
    filme: [
      { title:"Der mit dem Wolf tanzt (Dances with Wolves)", year:"1990", text:"Kevin Costner \u2013 im Kompass als SO9w1 gef\u00fchrt \u2013 als Mann, der seine fr\u00fchere Identit\u00e4t vollst\u00e4ndig in einer neuen Gemeinschaft aufgehen l\u00e4sst." },
      { title:"Field of Dreams", year:"1989", text:"Kevin Costner erneut, in einer Geschichte \u00fcber Verbindung, gemeinsame Erinnerung und das Zusammenkommen einer Gemeinschaft." },
      { title:"Die Verurteilten (The Shawshank Redemption)", year:"1994", text:"Identit\u00e4t und Halt, die sich \u00fcber die stille Zugeh\u00f6rigkeit zu einer Gemeinschaft hinter Mauern definieren." },
      { title:"Remember the Titans", year:"2000", text:"Eine Gruppe, die ihre einzelnen Identit\u00e4ten hinter sich l\u00e4sst, um zu einer einzigen, geeinten Mannschaft zu verschmelzen." },
      { title:"Coach Carter", year:"2005", text:"Identit\u00e4t und Selbstwert, die sich \u00fcber die Zugeh\u00f6rigkeit zu einem Team und dessen gemeinsamen Werten aufbauen." },
      { title:"Hoosiers", year:"1986", text:"Eine kleine Gemeinschaft, die sich vollst\u00e4ndig mit dem Erfolg und Zusammenhalt ihres Teams identifiziert." },
      { title:"A League of Their Own", year:"1992", text:"Identit\u00e4t, die im gemeinsamen Erleben und Zusammenhalt einer Gruppe entsteht." },
      { title:"Friday Night Lights", year:"2004", text:"Eine ganze Gemeinschaft, deren Identit\u00e4t untrennbar mit der ihres Teams verbunden ist." },
      { title:"Sing Street", year:"2016", text:"Der Aufbau einer eigenen Identit\u00e4t, die erst durch Zugeh\u00f6rigkeit zu einer selbstgew\u00e4hlten Gruppe m\u00f6glich wird." },
      { title:"Invictus", year:"2009", text:"Eine ganze Nation, die \u00fcber die Identifikation mit einer gemeinsamen Sache zusammenfindet." },
    
    ],
  },
  "SX9": {
    typ: 9, instinkt: "SX", animal: "Faultier",
    title: "SX9 \u2013 Sexueller Typ 9: Das Faultier und die vollst\u00e4ndige Verschmelzung",
    intro: "Zehn Filme \u00fcber das Verschmelzen mit einer einzigen Person, bis die eigenen Grenzen kaum noch sp\u00fcrbar sind.",
    filme: [
      { title:"Fifty Shades of Grey", year:"2015", text:"Dakota Johnson \u2013 im Kompass als SX9w8 gef\u00fchrt \u2013 als Figur, die sich in einer intensiven Zweierbeziehung fast vollst\u00e4ndig selbst aufgibt." },
      { title:"John Wick", year:"2014", text:"Keanu Reeves \u2013 im Kompass als SX9w1 gef\u00fchrt \u2013 als Mann, dessen ganze Identit\u00e4t untrennbar mit der Liebe zu einem einzigen Menschen verschmolzen ist." },
      { title:"The Lake House", year:"2006", text:"Keanu Reeves erneut, in einer Geschichte \u00fcber eine Verbindung, die \u00fcber alle Grenzen hinweg exklusiv bestehen bleibt." },
      { title:"Tats\u00e4chlich... Liebe (Love Actually)", year:"2003", text:"Heike Makatsch \u2013 im Kompass als SX9w8 gef\u00fchrt \u2013 in einem Ensemble, das die vollst\u00e4ndige Hingabe an die eine besondere Verbindung feiert." },
      { title:"Vicky Cristina Barcelona", year:"2008", text:"Identit\u00e4ten, die sich in intensiven, verschmelzenden Beziehungen fast aufl\u00f6sen." },
      { title:"Brokeback Mountain", year:"2005", text:"Eine Bindung, die trotz Unterdr\u00fcckung so tief verschmilzt, dass sie das ganze Leben bestimmt." },
      { title:"Twilight", year:"2008", text:"Eine Identit\u00e4t, die sich vollst\u00e4ndig mit der des geliebten Menschen verwebt." },
      { title:"Before Sunrise", year:"1995", text:"Zwei Menschen, die in einer einzigen, intensiven Begegnung fast vollst\u00e4ndig ineinander aufgehen." },
      { title:"The Age of Adaline", year:"2015", text:"Eine Verbindung, die stark genug ist, jahrzehntelange Distanz und Selbstschutz aufzul\u00f6sen." },
      { title:"Her", year:"2013", text:"Vollst\u00e4ndiges Verschmelzen mit einer einzigen Stimme und Pr\u00e4senz, bis die eigenen Grenzen kaum noch sp\u00fcrbar sind." },
    
    ],
  },
};
// \u2500\u2500\u2500 Enneagramm Filme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function enneagrammFilmeUebersichtPage() {
  const tile = n => {
    const col = TYPE_COLORS[n] || "var(--copper)";
    const hasData = ["SE"+n,"SO"+n,"SX"+n].some(c => ENNEAGRAMM_FILME[c]);
    if (!hasData) {
      return `<div class="kf-card" style="padding:1rem;border-radius:12px;border:1.5px dashed var(--border);background:var(--bg);opacity:0.6;">
        <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${col};margin-bottom:0.2rem;">Typ ${n}</div>
        <div style="font-weight:700;font-size:0.95rem;color:var(--muted);">In K\u00fcrze verf\u00fcgbar</div>
      </div>`;
    }
    return `<div class="kf-card" data-route="enneagramm-filme-typ-${n}" onclick="go('enneagramm-filme-typ-${n}')"
      style="cursor:pointer;padding:1rem;border-radius:12px;border:1.5px solid var(--border);background:var(--ivory);"
      onmouseover="this.style.borderColor='${col}';this.style.boxShadow='0 2px 12px rgba(0,0,0,.12)'"
      onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='none'">
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${col};margin-bottom:0.2rem;">Typ ${n}</div>
      <div style="font-weight:700;font-size:0.95rem;color:var(--ink);">30 Filme \u00b7 SE, SO, SX</div>
    </div>`;
  };
  return shell(`
    <div class="page-container">
      ${pageHeader('Enneagramm-Filmempfehlungen')}
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:var(--ink);margin:1.2rem 0 0.5rem;line-height:1.2;">Enneagramm-Filmempfehlungen</h1>
      <p class="psycho-intro">Neun Typen, 27 Subtypen \u2013 und die Filme, die ihre Themen greifbar machen. Pro Subtyp zehn Filme, die Leidenschaft, Fixierung oder Heilungsweg spiegeln. Wo m\u00f6glich, mit Rollen von Schauspieler:innen, die im Kompass selbst diesem Subtyp zugeordnet sind \u2013 die vermutlich stimmigste Darstellung.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.9rem;max-width:100%;margin-bottom:2rem;">
        ${[1,2,3,4,5,6,7,8,9].map(tile).join('')}
      </div>
      ${relatedLinks([
        {route:"enneagramm-kunst", label:"Enneagramm-Kunstgalerie"},
        {route:"enneagramm-astrologie", label:"Enneagramm meets Astrologie"},
        {route:"beruehmte-persoenlichkeiten", label:"Ber\u00fchmte Pers\u00f6nlichkeiten"},
      ])}
    </div>
  `);
}

function enneagrammFilmeTypPage(n) {
  const col = TYPE_COLORS[n] || "var(--copper)";
  const codes = ["SE"+n, "SO"+n, "SX"+n];
  const subtypBlock = code => {
    const d = ENNEAGRAMM_FILME[code];
    if (!d) return `<div class="kf-card" style="padding:1rem;border-radius:12px;border:1.5px dashed var(--border);opacity:0.6;margin-bottom:1.2rem;">
        <div style="font-weight:700;color:var(--muted);">${code} \u2013 in K\u00fcrze verf\u00fcgbar</div>
      </div>`;
    const filmCard = f => `<div class="kf-card" style="padding:0.9rem 1.1rem;border-radius:10px;border:1px solid var(--border);background:var(--ivory);">
        <div style="font-weight:700;font-size:0.95rem;color:var(--ink);margin-bottom:0.15rem;">${f.title} <span style="font-weight:400;color:${col};">&middot; ${f.year}</span></div>
        <p class="vb-intro" style="margin:0;font-size:0.88rem;">${f.text}</p>
      </div>`;
    return `<div style="margin-bottom:1.8rem;">
        <h2 class="vb-section" style="color:${col};">${d.title}</h2>
        <p class="vb-intro" style="margin:0 0 0.8rem;font-style:italic;">${d.intro}</p>
        <div style="display:flex;flex-direction:column;gap:0.6rem;">
          ${d.filme.map(filmCard).join('')}
        </div>
      </div>`;
  };
  return shell(`
    <div class="page-container">
      ${pageHeader('Enneagramm-Filmempfehlungen')}
      <div id="js-back-target" data-route="enneagramm-filme" style="display:none;"></div>
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:var(--ink);margin:1.2rem 0 0.5rem;line-height:1.2;">Filme zu Typ ${n}</h1>
      ${codes.map(subtypBlock).join('')}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${relatedLinks([
        {route:"enneagramm-filme", label:"Alle 9 Typen"},
        {route:"type/" + n, label:"Zum Typ " + n + " im Kompass"},
        {route:"enneagramm-kunst", label:"Enneagramm-Kunstgalerie"},
      ])}
    </div>
  `);
}

// NEU-Markierungen f\u00fcr Schaubilder: route \u2192 Datum des Eintrags (Badge l\u00e4uft nach 30 Tagen ab)
// Beispiel: { "neues-schaubild": "2026-07-15" }
const SCHAUBILDER_NEU = {
  "architektur-raumgestaltung-der-9-typen": "2026-07-31",
  "enneagramm-emotionalitaet": "2026-08-08",
  "enneagramm-instinkt": "2026-08-08",
  "enneagramm-intellekt": "2026-08-08",
  "hoellenkreise-dante": "2026-08-14",
};

const HEILWISSEN_ROUTES = new Set(["tischdialoge", "healing", "oils", "tcm", "kindheit", "music", "homoeopathie", "mineralstoffe", "bachblueten", "heiltees", "psychogramme", "schaubilder", "aufmerksamkeitsfokus", "bedrohungsszenarien", "befreiende-fragen", "bewaeltigungsstrategie", "dialektische-struktur", "drei-zentren", "ego-persoenlichkeit", "empfindliche-punkte", "zentren-weltwahrnehmung", "energetische-bewegungen", "fuehrungsstile", "gifte-des-geistes", "gaslighting-enneagramm", "kindliche-temperamente", "lookalike-typen", "mikroimpressionen", "naehe", "nonverbale-signale", "verbale-signale", "zentrale-fragen", "heilungsweg", "horney-triaden", "tee-enneagramm", "aetherische-oele", "angst-essenz", "edelsteine", "subtypen-checklisten", "subtypen-schaubilder", "perspektiven", "mangelgefuehle", "60-sekunden-scan", "wahrnehmungsstile", "das-event", "portraits-wegbegleiter", "weihnachtsgeschenke", "obstsorten", "gemuesesorten", "weinsorten", "brotsorten", "kaesesorten", "gewuerzarten", "getreidearten", "kaffeearten", "epochen-weltgeschichte", "affenarten", "baumarten", "berge-der-9-typen", "9-jahreszyklen", "temperamentenlehre-antike", "luxusautos-der-9-typen", "luxusuhren-der-9-typen", "brillenmodelle-der-9-typen", "flugzeugmodelle-der-9-typen", "hauptfokus-des-bewusstseins-der-9-typen", "beruehmte-persoenlichkeiten", ...BERUEHMT_PORTRAITS.map(p => p.route), "enneagramm-astrologie", ...ASTROLOGIE_PORTRAITS.map(p => p.route), "enneagramm-kunst", ...([1,2,3,4,5,6,7,8,9].map(n => "enneagramm-kunst-typ-"+n)), "enneagramm-filme", ...([1,2,3,4,5,6,7,8,9].map(n => "enneagramm-filme-typ-"+n)), "persoenlichkeitsmodelle-vergleich", "kriminalpsychologie", ...KRIMINAL_PORTRAITS.map(p => p.route), "enneagramm-bibel", ...BIBEL_PORTRAITS.map(p => p.route),
    "psychologisches-abwehrverhalten-der-9-typen",
    "heilfasten-der-9-typen",
    "psychologische-verhaltensmuster-der-9-typen",
    "frisuren-der-9-typen",
    "auffaellige-merkmale-der-9-typen",
    "haendedrucke-der-9-typen",
    "suchtverhalten-der-9-typen",
    "niesverhalten-der-9-typen",
    "essverhalten-der-9-typen",
    "arbeitsverhalten-der-9-typen",
    "verhaeltnis-zu-geld-der-9-typen",
    "sexualverhalten-der-9-typen",
    "kussverhalten-der-9-typen",
    "hochsensibilitaet-der-9-typen",
    "superpower-der-9-typen",
    "wolkenformationen-der-9-typen",
    "wetter-naturphaenomene-der-9-typen",
    "architektur-raumgestaltung-der-9-typen",
    "wolfsarten-der-9-typen",
    "eulenarten-der-9-typen",
    "papageienarten-der-9-typen",
    "blumenarten-der-9-typen",
    "kampfkunstarten-der-9-typen",
    "bagua-zonen-der-9-typen",
    "grimms-maerchen-der-9-typen",
    "enneagramm-emotionalitaet",
    "enneagramm-instinkt",
    "enneagramm-intellekt",
    "hunderassen-der-9-typen",
    "pferdearten-der-9-typen",
    "nagetierarten-der-9-typen",
    "baerenarten-der-9-typen",
    "milchkuharten-der-9-typen",
    "vogelarten-der-9-typen",
    "froscharten-der-9-typen",
    "spinnenarten-der-9-typen",
    "reptilienarten-der-9-typen",
    "schildkroetenarten-der-9-typen",
    "fischarten-der-9-typen",
    "walarten-der-9-typen",
    "insektenarten-der-9-typen", "frieden-schliessen", "wer-wir-sind", "verwechslungen", "wunden", "leidenschaft-und-wunde", "grundformel", "ego-fixierungen", "enneagramm-profiling", "antriebskraefte", "bewusstseinsuebungen", "dynamik-des-bewusstseinszustandes", "schopenhauer-zitat", "koerperregulation", "symmetrie-des-enneagramms", "schaubilder-als-spiegel", "neun-logismoi", "bedeutung-27-subtypen", "dynamik-der-typen", "wurzeln-des-enneagramms", "spirituelle-uebungen", "laster-tugenden-affirmationen", "schutzdefizite", "illusionen", "interessante-erkenntnisse", "identifikation", "schmerzschutz", "blickqualitaet", "prinzipien", "hunderassen", "verantwortung", "limericks", "haiku-der-9-typen", "humor-der-9-typen", "david-rathmer-fuehrung", "david-rathmer-fuehrung-mit-fundament", "david-rathmer-persoenlichkeiten", "david-rathmer-erfolgsinterviews", "david-rathmer-impulse", "david-rathmer-kriminalfaelle", "david-rathmer-grundlagen", "solfeggio-frequenzen", "zehn-anwendungen-fuer-das-enneagramm", "beziehungen-schaubild", "rumi-zitate", "suche-nach-liebe", "drei-lebenskraefte", "beruhmte-philosophen", "hoellenkreise-dante", "beruhmte-komponisten", "homoeopathie-songs", "detlef-rathmer-jazz", "portrait-typ-1", "portrait-typ-2", "portrait-typ-3", "portrait-typ-4", "portrait-typ-5", "portrait-typ-6", "portrait-typ-7", "portrait-typ-8", "portrait-typ-9", "frustrationen", "intrinsisches-verlangen", "basisemotionen", "kerneberzeugungen", "kindheitsperspektiven", "lebensgluck", "beziehungen", "differenzierung", "tierentsprechungen", "triadendefizite", "zornverhalten", "liebesverhalten", "erfolgsverhalten", "individualitaetsverhalten", "wissensverhalten", "sicherheitsverhalten", "spassverhalten", "machtverhalten", "harmonieverhalten", "situationskompass", "tierlexikon", "tritypen", "enneagramm-homoeopathie", "homoeopathie-fall-1", "homoeopathie-fall-2", "homoeopathie-fall-3", "homoeopathie-fall-4", "homoeopathie-fall-5", "homoeopathie-fall-6", "homoeopathie-fall-7", "homoeopathie-fall-8", "homoeopathie-fall-9"]);

function hasProfile() {
  return !!localStorage.getItem(PROFILE_KEY);
}
function loadProfile() {
  const code = localStorage.getItem(PROFILE_KEY) || "sx6";
  return subtypeProfiles[code.toLowerCase()] || subtypeProfiles.sx6;
}
function getProfile() {
  return localStorage.getItem(PROFILE_KEY) || "sx6";
}
const state = {
  route: location.hash.replace("#", "") || "start",
  profile: loadProfile(),
  isFirstVisit: !localStorage.getItem(VISITED_KEY),
};

// Typentest-Zustand (wird zwischengespeichert, damit Fortschritt/Ergebnis einen Reload übersteht)
let testState = (() => {
  try {
    const saved = localStorage.getItem("kompass:testState");
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return { phase: 0, triad: null, scores: {}, instinkt: null, qIndex: 0 };
})();
function _saveTestState() {
  try { localStorage.setItem("kompass:testState", JSON.stringify(testState)); } catch(e) {}
}

// Motivationaler Typentest-Zustand (wird zwischengespeichert)
let motivState = (() => {
  try {
    const saved = localStorage.getItem("kompass:motivState");
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return { phase: "intro", qIndex: 0, answers: {} };
})();

// Diagnosetest-Zustand (wird zwischengespeichert)
let diagnoseState = (() => {
  try {
    const saved = localStorage.getItem("kompass:diagnoseState");
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return { phase: "intro", step: 0, order: [], checks: {} };
})();
function _saveDiagnoseState() {
  try { localStorage.setItem("kompass:diagnoseState", JSON.stringify(diagnoseState)); } catch(e) {}
}
let beziehungSelected = null;
let _quizState = null;
let _sucheQuery = "";

const LETTER_TO_TYPE = { E: 1, Z: 2, D: 3, V: 4, F: 5, X: 6, S: 7, A: 8, N: 9 };
const TYPNAMEN_MOTIV = {
  1: "Der Perfektionist", 2: "Der Helfer", 3: "Der Macher",
  4: "Der Individualist", 5: "Der Forscher", 6: "Der Loyale",
  7: "Der Enthusiast", 8: "Der Herausforderer", 9: "Der Vermittler"
};
const text = uiText;

// Nur auf der Startseite \u00fcberschreiben - Unterseiten (inkl. vorgerenderter
// SEO-Snapshot-Seiten in /<route>/index.html) tragen ihren eigenen <title>
// bereits im HTML, der sonst hier sofort wieder \u00fcberschrieben w\u00fcrde.
if (!location.hash || location.hash === "#start") {
  document.title = text.meta.appTitle;
}

// Echter Navigations-Stack: merkt sich die tatsächlich besuchte Route, damit
// der "Zurück"-Button (js-back-btn) dorthin zurückführt, woher man wirklich
// kam – statt zu einem für die Seite fest hinterlegten Standardziel.
window.__routeStack = window.__routeStack || [];
window.addEventListener("hashchange", () => {
  const raw = location.hash.replace("#", "") || "start";
  const [newRoute, scrollAnchor] = raw.split("|");
  if (newRoute !== "beziehungen") beziehungSelected = null;
  if (newRoute !== "suche") _sucheQuery = "";
  if (newRoute !== "differenzierung") diffState = { a: null, b: null };
  if (newRoute !== "situationskompass") situKompState = { situId: null, subtypeCode: null };
  if (newRoute !== "kommunikationsguide") kommGuideState = { subtypeCode: null };
  if (newRoute !== "krisenkompass") krisenState = { typNr: null, krisenId: null };
  if (state.route && state.route !== newRoute) {
    window.__routeStack.push(state.route);
    if (window.__routeStack.length > 40) window.__routeStack.shift();
  }
  state.route = newRoute;
  if (window.__gtag) window.__gtag('event', 'page_view', { page_path: '/#' + newRoute, page_title: newRoute });
  render();
  if (scrollAnchor) setTimeout(() => {
    if (newRoute === "laenderzuordnungen" && window._llFlushLazyRegions) window._llFlushLazyRegions();
    const el = document.getElementById(scrollAnchor);
    if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
  }, 300);
});

// Browser-Zur\u00fcck innerhalb von Tests abfangen
window.addEventListener("popstate", (e) => {
  const base = location.hash.replace("#", "").split("/")[0];

  // Tierquiz
  if (base === "tierquiz" && window._tqState) {
    const s = window._tqState;
    if (s.step > 1) { s.step--; render(); return; }
    window._tqState = null; render(); return;
  }

  // Struktureller Typentest
  if (base === "typentest") {
    const ts = testState;
    if (ts.phase === 2 && ts.qIndex > 0) { ts.qIndex--; history.pushState({test:true}, ""); render(); return; }
    if (ts.phase === 2) { ts.phase = 1; history.pushState({test:true}, ""); render(); return; }
    if (ts.phase === 3) { ts.phase = 2; ts.qIndex = TYPFRAGEN[ts.triad].length - 1; history.pushState({test:true}, ""); render(); return; }
    if (ts.phase >= 4) { ts.phase = 0; render(); return; }
  }

  // Motivationaler Typentest
  if (base === "typentest-motivational") {
    const ms = motivState;
    if (ms.phase === "test" && ms.qIndex > 0) { ms.qIndex--; history.pushState({test:true}, ""); render(); return; }
    if (ms.phase === "test") { ms.phase = "intro"; render(); return; }
    if (ms.phase === "result") { ms.phase = "test"; ms.qIndex = MOTIVTEST.length - 1; history.pushState({test:true}, ""); render(); return; }
  }

  // Diagnosetest
  if (base === "diagnosetest") {
    const ds = diagnoseState;
    if (ds.phase === "step" && ds.step > 0) { ds.step--; history.pushState({test:true}, ""); render(); return; }
    if (ds.phase === "step") { diagnoseState = { phase: "intro", step: 0, order: [], checks: {} }; render(); return; }
    if (ds.phase === "result") { ds.phase = "step"; ds.step = 8; history.pushState({test:true}, ""); render(); return; }
  }
});

function go(route) {
  location.hash = route;
}
window.go = go;

function shell(content) {
  return `
    <main class="app-shell">
      ${content}
    </main>
  `;
}

function compassMark(size = "large") {
  return `
    <div class="compass compass--${size}" aria-hidden="true">
      <svg class="compass__svg" viewBox="0 0 200 200" focusable="false">
        <defs>
          <!-- Zifferblatt: warmes Elfenbein mit goldenem Schimmer -->
          <radialGradient id="compass-face-${size}" cx="42%" cy="36%" r="68%">
            <stop offset="0%"   stop-color="#fff8e8" />
            <stop offset="40%"  stop-color="#f5e8cc" />
            <stop offset="75%"  stop-color="#ddc898" />
            <stop offset="100%" stop-color="#c4a870" />
          </radialGradient>
          <!-- Metallring: Messing-Diagonal-Glanz (kr\u00e4ftiger) -->
          <linearGradient id="ring-metal-${size}" x1="18%" y1="8%" x2="82%" y2="92%">
            <stop offset="0%"   stop-color="#f0d88a" />
            <stop offset="18%"  stop-color="#d4a050" />
            <stop offset="46%"  stop-color="#6a4020" />
            <stop offset="74%"  stop-color="#c89848" />
            <stop offset="100%" stop-color="#e8c860" />
          </linearGradient>
          <!-- Kompassnadel Nord: leuchtendes Kupfer-Rot -->
          <linearGradient id="needle-n-${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stop-color="#f08040" />
            <stop offset="40%"  stop-color="#cc3818" />
            <stop offset="100%" stop-color="#8a1e08" />
          </linearGradient>
          <!-- Kompassnadel S\u00fcd: Tiefblau-Anthrazit -->
          <linearGradient id="needle-s-${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stop-color="#2e4255" />
            <stop offset="100%" stop-color="#0e1e2c" />
          </linearGradient>
          <!-- Schatten f\u00fcr Zifferblatt -->
          <filter id="face-shadow-${size}">
            <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="rgba(40,28,10,0.38)" />
          </filter>
        </defs>

        <!-- \u00c4u\u00dferer Metallring (Messing-Bezel) -->
        <circle cx="100" cy="100" r="95" fill="url(#ring-metal-${size})" />
        <circle cx="100" cy="100" r="90" fill="#1e1510" />
        <circle cx="100" cy="100" r="87" fill="url(#ring-metal-${size})" opacity="0.7" />

        <!-- Zifferblatt -->
        <circle class="compass__face" cx="100" cy="100" r="82"
                fill="url(#compass-face-${size})"
                filter="url(#face-shadow-${size})" />

        <!-- Glasschimmer: heller Reflex oben links -->
        <ellipse cx="78" cy="68" rx="26" ry="16"
                 fill="white" opacity="0.22"
                 transform="rotate(-30 78 68)" />

        <!-- Strichteilung -->
        <g class="compass__ticks">
          <line x1="100" y1="16" x2="100" y2="28" />
          <line x1="100" y1="172" x2="100" y2="184" />
          <line x1="16"  y1="100" x2="28"  y2="100" />
          <line x1="172" y1="100" x2="184" y2="100" />
          <line x1="39"  y1="39"  x2="47"  y2="47" />
          <line x1="161" y1="39"  x2="153" y2="47" />
          <line x1="39"  y1="161" x2="47"  y2="153" />
          <line x1="161" y1="161" x2="153" y2="153" />
        </g>

        <!-- Enneagramm -->
        <g class="compass__enneagram">
          <polygon class="compass__triad"  points="100,34 157,132 43,132" />
          <polyline class="compass__hexad" points="143,50 122,162 166,88 57,50 78,162 34,88 143,50" />
          <circle cx="100" cy="34"  r="4" />
          <circle cx="143" cy="50"  r="4" />
          <circle cx="166" cy="88"  r="4" />
          <circle cx="157" cy="132" r="4" />
          <circle cx="122" cy="162" r="4" />
          <circle cx="78"  cy="162" r="4" />
          <circle cx="43"  cy="132" r="4" />
          <circle cx="34"  cy="88"  r="4" />
          <circle cx="57"  cy="50"  r="4" />
        </g>

        <!-- Kompassnadel (animiert beim Laden) -->
        <g class="compass__needle">
          <!-- Nord: schlankes Kupfer-Rhombus -->
          <polygon points="100,21  104.5,100 100,94  95.5,100"
                   fill="url(#needle-n-${size})"
                   stroke="rgba(80,30,10,0.25)" stroke-width="0.5" />
          <!-- S\u00fcd: schlankes Dunkel-Rhombus -->
          <polygon points="100,179 104.5,100 100,106 95.5,100"
                   fill="url(#needle-s-${size})"
                   stroke="rgba(10,20,30,0.2)" stroke-width="0.5" />
        </g>

        <!-- Nabenring -->
        <circle cx="100" cy="100" r="10.5" fill="#150e08" />
        <circle cx="100" cy="100" r="8"    fill="url(#ring-metal-${size})" />
        <circle cx="100" cy="100" r="5"    fill="#f8e8c0" />
        <circle cx="100" cy="100" r="2.2"  fill="rgba(185,80,30,0.95)" />
      </svg>
    </div>
  `;
}

function nav(active) {
  const items = text.nav.map(({ route, label, dropdown }) => {
    if (dropdown) {
      const isActive = dropdown.some(d => d.route === active) || active === route;
      const lockedHeil = HEILWISSEN_ROUTES.has(route) && !hasHeilwissen();
      const lockedBasis = !hasBasis();
      const locked = lockedHeil || lockedBasis;
      const lockTarget = lockedHeil ? "heilwissen" : "basis";
      const sortedDropdown = label === "Schaubilder"
        ? [...dropdown].sort((a, b) => a.label.localeCompare(b.label, "de"))
        : dropdown;
      const subItems = sortedDropdown.map(({ route: sr, label: sl }) => {
        const neuBadge = SCHAUBILDER_NEU[sr] && new Date()-new Date(SCHAUBILDER_NEU[sr])<30*864e5
          ? ' <span style="background:#c9a84c;color:#fff;font-size:0.6rem;font-weight:700;padding:0.1rem 0.4rem;border-radius:4px;vertical-align:middle;letter-spacing:0.05em;">NEU</span>' : '';
        return `<button class="nav-dropdown__item" data-route="${locked ? ("freischalt/" + lockTarget) : sr}">${sl}${neuBadge}</button>`;
      }).join("");
      const isSchaubilder = label === "Schaubilder";
      const searchBox = isSchaubilder
        ? `<div class="nav-dropdown__search-wrap"><input class="nav-dropdown__search" type="text" placeholder="Schaubild suchen \u2026" autocomplete="off" /></div>`
        : "";
      const isMultiline = label.includes("<br>");
      return `<div class="nav-dropdown-wrap${isActive ? " is-active" : ""}${isSchaubilder ? " nav-dropdown-wrap--searchable" : ""}">
        <button class="nav-dropdown__trigger${isActive ? " is-active" : ""}${locked ? " nav-locked" : ""}${isMultiline ? " nav-dropdown__trigger--multiline" : ""}"
          data-dropdown-toggle aria-haspopup="true"
        >${label} <span class="nav-dropdown__arrow">\u25be</span>${locked ? `<span class="nav-lock-icon" aria-hidden="true">\ud83d\udd12</span>` : ""}</button>
        <div class="nav-dropdown__menu">${searchBox}${subItems}</div>
      </div>`;
    }
    const lockedHeil = HEILWISSEN_ROUTES.has(route) && !hasHeilwissen();
    const lockedBasis = !hasBasis() && route !== "start" && route !== "profile";
    const locked = lockedHeil || lockedBasis;
    const lockTarget = lockedHeil ? "heilwissen" : "basis";
    return `<button
      class="${active === route ? "is-active" : ""} ${locked ? "nav-locked" : ""}"
      data-route="${route}"
      ${locked ? `data-locked="${lockTarget}"` : ""}
      aria-disabled="${locked}"
    >${label}${locked ? `<span class="nav-lock-icon" aria-hidden="true">\ud83d\udd12</span>` : ""}</button>`;
  }).join("");
  return `<nav class="tabbar" aria-label="${text.meta.mainNavigation}">${items}</nav>`;
}

// Ton-Einstellung: steuert die gesprochene Begr\u00fc\u00dfung (Start, Kauf-Freischaltung).
// Wird lokal im Browser gespeichert (localStorage), gilt ger\u00e4teweit und dauerhaft.
const VOICE_MUTE_KEY = "kompass-voice-muted";
function isVoiceMuted() { return localStorage.getItem(VOICE_MUTE_KEY) === "1"; }
window.toggleVoiceMute = function() {
  const muted = !isVoiceMuted();
  localStorage.setItem(VOICE_MUTE_KEY, muted ? "1" : "0");
  document.querySelectorAll(".voice-mute-btn").forEach(function(b) {
    b.textContent = muted ? "\ud83d\udd07" : "\ud83d\udd0a";
    const label = muted ? "Sprachausgabe einschalten" : "Sprachausgabe ausschalten";
    b.setAttribute("aria-label", label);
    b.title = label;
  });
  document.querySelectorAll(".voice-mute-btn-inline").forEach(function(b) {
    b.textContent = muted ? "\ud83d\udd07 Begr\u00fc\u00dfungston aus \u2013 tippen zum Aktivieren" : "\ud83d\udd0a Begr\u00fc\u00dfungston an \u2013 tippen zum Deaktivieren";
    b.style.color = muted ? "var(--muted)" : "var(--gold)";
  });
};

function pageHeader(active) {
  const showBack = active && active !== "start";
  const voiceMuted = isVoiceMuted();
  return `
    <header class="topline">
      <button class="brand" data-route="start" aria-label="${text.routes.start.brandAria}">
        ${compassMark("mini")}
        <span>${text.meta.appTitle}</span>
      </button>
      ${nav(active)}
      <a href="/en/" class="lang-switcher" title="Switch to English" aria-label="Switch to English" onclick="_switchLangVoice(event, this.href, 'sounds/lang/switch_to_en.mp3')">\ud83c\uddec\ud83c\udde7 EN</a>
    </header>
    <div class="suche-bar-outer">
      <div style="display:flex;gap:0.5rem;align-items:center;">
      <button class="suche-bar-btn" data-route="suche" aria-label="Suche" style="flex:1;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span>Suchen\u2026</span></button>
      <button class="voice-mute-btn" onclick="toggleVoiceMute()" aria-label="${voiceMuted ? "Sprachausgabe einschalten" : "Sprachausgabe ausschalten"}" title="${voiceMuted ? "Sprachausgabe einschalten" : "Sprachausgabe ausschalten"}" style="flex-shrink:0;background:none;border:1px solid var(--line);border-radius:50%;width:2.1rem;height:2.1rem;font-size:0.95rem;cursor:pointer;">${voiceMuted ? "\ud83d\udd07" : "\ud83d\udd0a"}</button>
      <button class="suche-fav-nav-btn" data-route="favoriten" aria-label="Favoriten" title="Meine Favoriten">\u2665</button>
      </div>
    </div>
    ${(()=>{
      if(!showBack)return"";
      const _fr=window._currentRoute||"";
      const _fl=_favLabel(_fr);
      const _on=_isFav(_fr);
      const _hb=_fl?('<button class="fav-heart-btn'+((_on)?' fav-heart-btn--active':'')+'" id="fav-heart-btn" data-route-fav="'+_fr+'" aria-label="Favorit" title="'+(_on?'Aus Favoriten entfernen':'Zu Favoriten hinzuf\xfcgen')+'">'+(_on?'\u2665':'\u2661')+'</button>'):"";
      return'<div class="page-back-bar"><button class="page-back-btn" id="js-back-btn">\u2190 Zur\xfcck</button>'+_hb+'</div>';
    })()}
  `;
}

function inhalts\u00fcbersichtPage() {
  const cat = (title, icon, items, note) => `
    <details style="border:1px solid var(--border);border-radius:12px;margin-bottom:0.7rem;overflow:hidden;">
      <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                      background:var(--ivory);list-style:none;user-select:none;font-weight:700;
                      font-size:0.98rem;color:var(--ink);" class="inhalt-summary">
        <span style="font-size:1.1rem;flex-shrink:0;">${icon}</span>
        <span style="flex:1;">${title}</span>
        <span class="inhalt-chevron" style="font-size:0.75rem;color:var(--muted);transition:transform .2s;">&#9660;</span>
      </summary>
      <div style="padding:0.9rem 1.2rem 1rem;background:#fff;border-top:1px solid var(--border);">
        ${note ? `<p style="font-size:0.82rem;color:var(--muted);margin:0 0 0.75rem;font-style:italic;">${note}</p>` : ''}
        <ul style="margin:0;padding:0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:0.3rem 1rem;">
          ${items.map(i => `<li style="font-size:0.85rem;color:var(--ink);padding:0.2rem 0;display:flex;gap:0.4rem;align-items:baseline;">
            <span style="color:var(--gold);font-size:0.65rem;flex-shrink:0;">&#10022;</span>${i}</li>`).join('')}
        </ul>
      </div>
    </details>`;

  return shell(`
    <div class="page-container">
      ${pageHeader("Alle Inhalte im \xdcberblick")}
      <div style="max-width:680px;margin:0 auto;padding:0 0 3rem;">

        <p style="font-size:0.95rem;color:var(--muted);margin:0 0 1.8rem;line-height:1.65;">
          Ein vollst\xe4ndiges Enneagramm-Universum &ndash; hier finden Sie alles,
          was der Heilungskompass enth\xe4lt. Klicken Sie auf eine Kategorie,
          um die Inhalte aufzuklappen.
        </p>

        ${cat("Typensystem & Grundlagen", "&#9672;", [
          "9 Typen mit eigenen Portraits",
          "27 Subtypen-Profile",
          "3 integrierte Typentests",
          "Subtypen-Checklisten",
          "Subtypen-Schaubilder",
          "Lookalike-Typen",
          "Verwechslungspaare",
          "Differenzierungen",
          "Bedeutung der 27 Subtypen",
          "Dialektische Struktur",
          "Horney-Triaden",
          "Drei Zentren",
          "Symmetrie des Enneagramms",
          "Wurzeln des Enneagramms",
        ], "Das vollst\xe4ndige System \u2013 von den 9 Typen bis zu allen 27 Subtyp-Profilen.")}

        ${cat("Psychologie & Charakterstruktur", "&#128065;", [
          "Leidenschaft & Wunde",
          "Ego-Pers\xf6nlichkeit",
          "Wunden & Schutzstrategien",
          "Schutzdefizite",
          "Laster, Tugenden & Affirmationen",
          "Gifte des Geistes",
          "Illusionen",
          "Grundformel",
          "Ego-Fixierungen",
          "Antriebskr\xe4fte",
          "Kernberzeugungen",
          "Basisemotionen",
          "Mangelgef\xfchle",
          "Frustrationen",
          "Intrinsisches Verlangen",
          "Schmerzschutz",
          "Identifikation",
          "Triadendefizite",
        ], "Die Tiefenpsychologie des Enneagramms \u2013 von den Leidenschaften bis zu den verborgenen Schutzstrategien.")}

        ${cat("Wahrnehmung & Kommunikation", "&#128172;", [
          "Blickqualit\xe4t der 9 Typen",
          "Mikroimpressionen",
          "Verbale Signale",
          "Nonverbale Signale",
          "Wahrnehmungsstile",
          "60-Sekunden-Scan",
          "Aufmerksamkeitsfokus",
          "Bedrohungsszenarien",
          "Empfindliche Punkte",
          "Zentren-Weltwahrnehmung",
          "Energetische Bewegungen",
          "N\xe4he & Distanz",
          "Gaslighting im Enneagramm",
          "Befreiende Fragen",
        ], "Wie jeder Typ wahrnimmt, kommuniziert und auf andere wirkt.")}

        ${cat("Heilmittel & Naturheilkunde", "&#127807;", [
          "Hom\xf6opathie (subtypgenau)",
          "\xc4therische \xd6le (subtypgenau)",
          "Bachbl\xfcten (subtypgenau)",
          "Teeempfehlungen (subtypgenau)",
          "Edelsteine (subtypgenau)",
          "TCM (subtypgenau)",
          "Angst-Essenz",
          "Musik & Klang (subtypgenau)",
          "K\xf6rperregulation",
          "Sch\xfc\xdfler-Salze",
        ], "Alle Heilmittel f\xfcr alle 27 Subtypen \u2013 subtypgenau, nicht allgemein.")}

        ${cat("Entwicklung & Heilung", "&#127807;", [
          "Heilungsweg der 9 Typen",
          "Bewusstseins\xfcbungen",
          "Spirituelle \xdcbungen",
          "Befreiende Fragen",
          "Frieden schlie\xdfen",
          "Laster \u2192 Tugenden",
          "Suche nach Liebe",
          "Drei Lebenskr\xe4fte",
          "Selbstreflexion & Identifikation",
          "Perspektiven",
          "Zentrale Fragen",
          "Tischdialoge",
        ], "Konkrete Wege zur Heilung \u2013 f\xfcr jeden Typ und jeden Subtyp.")}

        ${cat("Schaubilder-Galerie (100+)", "&#128444;", [
          "Symmetrie des Enneagramms",
          "K\xf6rperregulation",
          "Enneagramm-Profiling",
          "Wunden & Schutzstrategien",
          "9 Logismoi",
          "Horney-Triaden",
          "Kindheitsperspektiven",
          "Kindliche Temperamente",
          "Kernberzeugungen",
          "Lebensgl\xfcck",
          "Basisemotionen",
          "Intrinsisches Verlangen",
          "Frustrationen",
          "Illusionen",
          "Schutzdefizite",
          "Laster-Tugenden-Affirmationen",
          "Spirituelle \xdcbungen",
          "Schopenhauer & Enneagramm",
          "Rumi-Zitate",
          "Beziehungen",
          "Blickqualit\xe4t",
          "Prinzipien der Typen",
          "F\u00fchrungsstile",
          "Drei Lebenskr\xe4fte",
          "Verhaltensweisen (9 Felder)",
          "& viele weitere...",
        ], "Farbige, illustrierte \xdcbersichten \u2013 so in keinem gedruckten Buch m\xf6glich.")}

        ${cat("Pers\xf6nlichkeit & Beziehungen", "&#128101;", [
          "Beziehungen (Schaubilder)",
          "Kindheitspr\xe4gung",
          "Kindliche Temperamente",
          "F\xfchrungsstile",
          "Enneagramm-Profiling",
          "Verhaltensweisen (Zorn, Liebe, Erfolg\u2026)",
          "Gaslighting & Manipulation",
          "Beziehungsverhalten",
          "Suche nach Liebe",
          "N\xe4he & Distanz",
          "Bedrohungsszenarien",
          "Differenzierung",
        ], "Wie die Typen Beziehungen gestalten, F\xfchrung aus\xfcben und in der Kindheit gepr\xe4gt werden.")}

        ${cat("Kultur, Natur & Lifestyle", "&#127759;", [
          "Tierentsprechungen (9 Typen)",
          "Affenarten der 9 Typen",
          "Baumarten der 9 Typen",
          "B\xe4renarten der 9 Typen",
          "Vogelarten der 9 Typen",
          "Froscharten der 9 Typen",
          "Spinnenarten der 9 Typen",
          "Reptilienarten",
          "Schildkr\xf6tenarten",
          "Fischarten",
          "Walarten",
          "Insektenarten",
          "Nagetierearten",
          "Milchkuharten",
          "Berge der 9 Typen",
          "Epochen der Weltgeschichte",
          "Obstsorten",
          "Gem\xfcsesorten",
          "Weinsorten",
          "Brotsorten",
          "K\xe4sesorten",
          "Gew\u00fcrzarten",
          "Getreidearten",
          "Kaffeearten",
          "Luxusautos",
          "Luxusuhren",
          "Brillenmodelle",
          "Flugzeugmodelle",
          "Weihnachtsgeschenke",
          "Hunderassen",
        ], "Das Enneagramm im Alltag \u2013 von der Natur bis zur Kultur.")}

        ${cat("Ber\u00fchmte Pers\u00f6nlichkeiten", "&#127775;", BERUEHMT_PORTRAITS.map(p => p.name), (BERUEHMT_PORTRAITS.length + " Portr\u00e4ts aus Kultur, Musik, Sport & Gesellschaft \u2013 durch die Linse des Enneagramms."))}

        ${cat("Spannende Kriminalf\u00e4lle (Kriminalpsychologie)", "&#128269;", KRIMINAL_PORTRAITS.map(p => p.name), (KRIMINAL_PORTRAITS.length + " tiefenpsychologische T\u00e4terportr\u00e4ts \u2013 bekannte F\u00e4lle durch die Linse des Enneagramms. Lehrreich, pr\u00e4zise, nie rei\u00dferisch."))}

        ${cat("Philosophie & Spiritualit\xe4t", "&#129812;", [
          "Schopenhauer & Enneagramm",
          "Rumi-Zitate der 9 Typen",
          "9 Logismoi (Evagrius Ponticus)",
          "Wurzeln des Enneagramms",
          "Ber\xfchmte Philosophen",
          "Drei Lebenskr\xe4fte",
          "Spirituelle \xdcbungen",
          "Wer wir sind",
          "Symmetrie des Enneagramms",
        ], "Die geistigen und historischen Wurzeln des Enneagramms.")}

        <div style="margin-top:2rem;background:linear-gradient(135deg,#f5e8cc,#eedda0);
                    border:2px solid var(--gold);border-radius:14px;padding:1.6rem 1.4rem;text-align:center;">
          <p style="font-size:0.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);margin:0 0 .4rem;">
            Ein vollst\xe4ndiges Enneagramm-Universum
          </p>
          <p style="font-family:'EB Garamond',serif;font-size:1.4rem;color:var(--ink);margin:0 0 .6rem;line-height:1.2;">
            Alles in einer einzigen App
          </p>
          <p style="font-size:0.86rem;color:var(--muted);margin:0 0 1.1rem;line-height:1.55;">
            Einmalig kaufen &middot; Lebenslanger Zugang &middot; W\xe4chst st\xe4ndig weiter
          </p>
          <button data-route="freischalt"
            style="background:var(--gold-dark);color:var(--copper);border:3px solid #8a5a1a;
                   border-radius:10px;padding:.8rem 2rem;font-size:1rem;font-weight:700;
                   cursor:pointer;font-family:'EB Garamond',serif;box-shadow:0 4px 18px rgba(0,0,0,.22);">
            Jetzt freischalten &#8594;
          </button>

        </div>
      </div>

      <style>
        .inhalt-summary::-webkit-details-marker { display:none; }
        details[open] .inhalt-chevron { transform:rotate(180deg); }
        details[open] .inhalt-summary { background:rgba(196,164,86,0.08); }
      </style>
    </div>
  `);
}

function leseprobePage() {
  return shell(`
    ${pageHeader("leseprobe")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 4rem;">

      <!-- Hero -->
      <div style="text-align:center;padding:2rem 0 1.5rem;">
        <p style="font-size:0.8rem;letter-spacing:.12em;text-transform:uppercase;color:var(--copper);margin:0 0 1.2rem;">App-Leseprobe</p>
        <div style="display:flex;justify-content:center;margin-bottom:1.2rem;">${compassMark("small")}</div>
        <h1 style="font-family:'EB Garamond',serif;font-size:1.9rem;line-height:1.2;color:var(--ink);margin:0 0 1rem;">Der Enneagramm-Heilungskompass</h1>
        <p style="font-size:1rem;color:var(--muted);max-width:520px;margin:0 auto 1.5rem;line-height:1.65;">Eine Kostprobe aus Hunderten von Schaubildern, 27\xa0Subtyp-Portraits und subtypspezifischen Heilmitteln &ndash; damit Sie sehen k\xf6nnen, was Sie erwartet.</p>
        <div style="display:flex;justify-content:center;gap:1.5rem;flex-wrap:wrap;font-size:0.85rem;color:var(--copper);font-weight:600;">
          <span>&#10022;&nbsp;Hunderte Schaubilder</span>
          <span>&#10022;&nbsp;27 Subtyp-Portraits</span>
          <span>&#10022;&nbsp;Subtypspezifische Heilmittel</span>
        </div>
        <div style="margin-top:1rem;">
          <button data-route="inhaltsverzeichnis"
            style="background:none;border:1px solid var(--gold);color:var(--copper);
                   border-radius:8px;padding:.45rem 1.1rem;font-size:0.83rem;cursor:pointer;">
            Alle Inhalte im \u00dcberblick ansehen &#8594;
          </button>
        </div>
      </div>

      <!-- Ber\u00fchmte Pers\u00f6nlichkeiten -->
      <div style="background:rgba(180,120,0,0.06);border:1px solid var(--border);border-radius:12px;padding:1.4rem 1.4rem 1rem;margin-bottom:1.5rem;">
        <h2 style="font-family:'EB Garamond',serif;font-size:1.1rem;color:var(--ink);margin:0 0 0.4rem;">
          ${BERUEHMT_PORTRAITS.length} Ber\u00fchmte Pers\u00f6nlichkeiten &ndash; Portr\u00e4ts
        </h2>
        <p style="font-size:0.88rem;color:var(--muted);margin:0 0 0.9rem;line-height:1.55;">
          F\u00fcr alle 27 Subtypen mehrere Portr\u00e4ts ber\u00fchmter Pers\u00f6nlichkeiten &ndash; mit verschiedenen Fl\u00fcgelauspr\u00e4gungen. So wird der Subtyp lebendig und konkret erkennbar.
        </p>
        <p style="font-size:0.83rem;color:var(--muted);margin:0 0 1rem;line-height:1.55;">
          Von Angela Merkel und Willy Brandt \u00fcber Sting und Toni Morrison bis Iga \u015awi\u0105tek, Steffi Graf und Dakota Johnson &ndash; aus Politik, Kultur, Sport und Wissenschaft.
        </p>
        <div style="margin-top:0.5rem;">
          <button data-route="beruehmte-persoenlichkeiten"
            style="background:none;border:1px solid var(--gold);color:var(--copper);
                   border-radius:8px;padding:.4rem 1rem;font-size:0.83rem;cursor:pointer;">
            Alle Portr\u00e4ts ansehen &rarr;
          </button>
        </div>
      </div>

      <!-- Enneagramm meets Astrologie -->
      <div style="background:rgba(180,120,0,0.06);border:1px solid var(--border);border-radius:12px;padding:1.4rem 1.4rem 1rem;margin-bottom:1.5rem;">
        <h2 style="font-family:'EB Garamond',serif;font-size:1.1rem;color:var(--ink);margin:0 0 0.4rem;">
          Enneagramm meets Astrologie
        </h2>
        <p style="font-size:0.88rem;color:var(--muted);margin:0 0 0.9rem;line-height:1.55;">
          ${ASTROLOGIE_PORTRAITS.length} Horoskop-Analysen ber\u00fchmter Pers\u00f6nlichkeiten &ndash; Enneagramm und Radix-Horoskop im Dialog. Beide Systeme blicken auf dieselbe tiefere Wahrheit.
        </p>
        <p style="font-size:0.83rem;color:var(--muted);margin:0 0 1rem;line-height:1.55;">
          Von Reinhold Messner bis Angela Merkel, von Marilyn Monroe bis Albert Einstein &ndash; Kosmischer Bauplan trifft psychologische Landkarte.
        </p>
        <div style="margin-top:0.5rem;">
          <button data-route="enneagramm-astrologie"
            style="background:none;border:1px solid var(--gold);color:var(--copper);
                   border-radius:8px;padding:.4rem 1rem;font-size:0.83rem;cursor:pointer;">
            Alle Analysen ansehen &rarr;
          </button>
        </div>
      </div>

      <!-- Pers\u00f6nlichkeitsmodelle Vergleich -->
      <div style="background:rgba(180,120,0,0.06);border:1px solid var(--border);border-radius:12px;padding:1.4rem 1.4rem 1rem;margin-bottom:1.5rem;">
        <h2 style="font-family:'EB Garamond',serif;font-size:1.1rem;color:var(--ink);margin:0 0 0.4rem;">
          Enneagramm vs. andere Pers\u00f6nlichkeitsmodelle
        </h2>
        <p style="font-size:0.88rem;color:var(--muted);margin:0 0 0.9rem;line-height:1.55;">
          Big Five, MBTI, DISG, Human Design &ndash; was unterscheidet das Enneagramm grundlegend von anderen Systemen, und warum geht seine Wirkung weit \u00fcber klassische Pers\u00f6nlichkeitstests hinaus?
        </p>
        <p style="font-size:0.83rem;color:var(--muted);margin:0 0 1rem;line-height:1.55;">
          W\u00e4hrend andere Modelle beschreiben, <em>wie</em> ein Mensch sich verh\u00e4lt, fragt das Enneagramm nach dem <em>Warum</em>.
        </p>
        <div style="margin-top:0.5rem;">
          <button data-route="persoenlichkeitsmodelle-vergleich"
            style="background:none;border:1px solid var(--gold);color:var(--copper);
                   border-radius:8px;padding:.4rem 1rem;font-size:0.83rem;cursor:pointer;">
            Zum Vergleich &rarr;
          </button>
        </div>
      </div>

      <!-- Kriminalpsychologie -->
      <div style="background:rgba(180,120,0,0.06);border:1px solid var(--border);border-radius:12px;padding:1.4rem 1.4rem 1rem;margin-bottom:1.5rem;">
        <h2 style="font-family:'EB Garamond',serif;font-size:1.1rem;color:var(--ink);margin:0 0 0.4rem;">
          Spannende Kriminalf\u00e4lle (Kriminalpsychologie)
        </h2>
        <p style="font-size:0.88rem;color:var(--muted);margin:0 0 0.9rem;line-height:1.55;">
          ${KRIMINAL_PORTRAITS.length} tiefenpsychologische T\xe4terportr\xe4ts &ndash; ber\xfchmte F\xe4lle durch die Linse des Enneagramms. Lehrreich, pr\xe4zise, nie rei\xdferisch.
        </p>
        <p style="font-size:0.83rem;color:var(--muted);margin:0 0 1rem;line-height:1.55;">
          Von Dennis Nilsen bis Andrew Cunanan, von Adolf Hitler bis Jeffrey Dahmer &ndash; alle 9 Typen und alle 3 Subtypen vertreten.
        </p>
        <div style="margin-top:0.5rem;">
          <button data-route="kriminalpsychologie"
            style="background:none;border:1px solid var(--gold);color:var(--copper);
                   border-radius:8px;padding:.4rem 1rem;font-size:0.83rem;cursor:pointer;">
            Alle Portraits ansehen &rarr;
          </button>
        </div>
      </div>

      <!-- Trennlinie -->
      <div style="border-top:1px solid var(--border);margin:1.5rem 0;"></div>

      <!-- 1: Schaubilder-Galerie -->
      <h2 style="font-family:'EB Garamond',serif;font-size:1.35rem;color:var(--ink);margin:0 0 .4rem;">Schaubilder &ndash; Wissen auf einen Blick</h2>
      <p style="font-size:0.92rem;color:var(--muted);margin:0 0 1.2rem;line-height:1.6;">Hunderte illustrierter \xdcbersichten machen das Unsichtbare sichtbar &ndash; von den Grundstrukturen der Pers\xf6nlichkeit bis zu K\xf6rper, Energie und Lebensthemen.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:.5rem;">
        <div data-route="symmetrie-des-enneagramms" style="cursor:pointer;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.12);">
          <img src="./assets/symmetrie-des-enneagramms.jpg" alt="Symmetrie des Enneagramms" style="width:100%;display:block;aspect-ratio:4/3;object-fit:cover;" />
          <div style="padding:.5rem .7rem;background:var(--ivory);font-size:0.78rem;font-weight:600;color:var(--ink);">Symmetrie des Enneagramms &#8594;</div>
        </div>
        <div data-route="koerperregulation" style="cursor:pointer;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.12);">
          <img src="./assets/koerperregulation.jpg" alt="K\xf6rperregulation" style="width:100%;display:block;aspect-ratio:4/3;object-fit:cover;" />
          <div style="padding:.5rem .7rem;background:var(--ivory);font-size:0.78rem;font-weight:600;color:var(--ink);">Enneagramm & K\xf6rperregulation &#8594;</div>
        </div>
        <div data-route="enneagramm-profiling" style="cursor:pointer;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.12);">
          <img src="./assets/enneagramm-profiling.jpg" alt="Enneagramm-Profiling" style="width:100%;display:block;aspect-ratio:4/3;object-fit:cover;" />
          <div style="padding:.5rem .7rem;background:var(--ivory);font-size:0.78rem;font-weight:600;color:var(--ink);">Enneagramm-Profiling &#8594;</div>
        </div>
        <div data-route="wunden" style="cursor:pointer;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.12);">
          <img src="./assets/wunden.jpg" alt="Wunden & Schutzstrategien" style="width:100%;display:block;aspect-ratio:4/3;object-fit:cover;" />
          <div style="padding:.5rem .7rem;background:var(--ivory);font-size:0.78rem;font-weight:600;color:var(--ink);">Wunden & Schutzstrategien &#8594;</div>
        </div>
        <div data-route="bedeutung-27-subtypen" style="cursor:pointer;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.12);">
          <img src="./assets/bedeutung-27-subtypen.jpg" alt="Bedeutung der 27 Subtypen" style="width:100%;display:block;aspect-ratio:4/3;object-fit:cover;" />
          <div style="padding:.5rem .7rem;background:var(--ivory);font-size:0.78rem;font-weight:600;color:var(--ink);">Bedeutung der 27 Subtypen &#8594;</div>
        </div>
        <div data-route="neun-logismoi" style="cursor:pointer;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.12);">
          <img src="./assets/neun-logismoi.jpg" alt="9 Logismoi nach Evagrius Ponticus" style="width:100%;display:block;aspect-ratio:4/3;object-fit:cover;" />
          <div style="padding:.5rem .7rem;background:var(--ivory);font-size:0.78rem;font-weight:600;color:var(--ink);">9 Logismoi nach Evagrius &#8594;</div>
        </div>
      </div>
      <p style="font-size:0.8rem;color:var(--muted);text-align:center;margin:0 0 1.8rem;">Klick auf ein Bild \xf6ffnet das vollst\xe4ndige Schaubild</p>

      <div style="border-top:1px solid var(--border);margin:1.5rem 0;"></div>

      <!-- 2: Subtyp-Portrait Vorschau -->
      <h2 style="font-family:'EB Garamond',serif;font-size:1.35rem;color:var(--ink);margin:0 0 .4rem;">27 Subtyp-Portraits &ndash; tiefste Typenstruktur</h2>
      <p style="font-size:0.92rem;color:var(--muted);margin:0 0 1.2rem;line-height:1.6;">Jeder der 27 Subtypen erh\xe4lt ein eigenes Portrait mit Kerndynamik, Tierarchetyp, Heilmitteln und Entwicklungswegen. Hier ein Auszug aus dem Portrait des <strong>SE1 &ndash; Der Adler</strong>:</p>

      <div style="background:var(--ivory);border:1px solid var(--border);border-radius:12px;padding:1.25rem 1.4rem;margin-bottom:.5rem;">
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
          <img src="./assets/se1-adler.jpg" alt="SE1 Adler" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:2px solid var(--gold);" />
          <div>
            <p style="margin:0;font-size:0.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);">Selbsterhaltungs-Eins</p>
            <p style="margin:.2rem 0 0;font-size:1.15rem;font-family:'EB Garamond',serif;font-weight:700;color:var(--ink);">Der Adler</p>
            <p style="margin:.15rem 0 0;font-size:0.8rem;color:var(--muted);">Typ 1 &middot; Selbsterhaltungs-Instinkt &middot; Bauchzentrum</p>
          </div>
        </div>
        <p style="font-size:0.9rem;line-height:1.7;color:var(--ink);margin:0 0 .8rem;">Der SE1er ist von allen Einser-Varianten am st\xe4rksten auf Perfektion im pers\xf6nlichen Alltag ausgerichtet. Er kontrolliert, ordnet und verfeinert &ndash; nicht um anderen zu imponieren, sondern weil Unvollkommenheit innerlich unertr\xe4glich wirkt. Sein Zorn ist still, sein Anspr\xfcch an sich selbst enorm.</p>
        <p style="font-size:0.82rem;color:var(--muted);font-style:italic;margin:0;">&#8230; das vollst\xe4ndige Portrait enth\xe4lt: Ur-Wunde &middot; Leidenschaft &middot; Heilungsweg &middot; \xc4therisches \xd6l &middot; Hom\xf6opathisches Mittel &middot; Affirmation &middot; Entwicklungsimpuls</p>
      </div>
      <button class="related-link-btn" data-route="subtype/se1" style="background:none;border:1px solid var(--gold);color:var(--copper);border-radius:8px;padding:.45rem 1rem;font-size:0.83rem;cursor:pointer;margin-bottom:1.8rem;">Vollst\xe4ndiges SE1-Portrait ansehen &#8594;</button>

      <div style="border-top:1px solid var(--border);margin:1.5rem 0;"></div>

      <!-- 3: Heilmittel-Werkzeuge -->
      <h2 style="font-family:'EB Garamond',serif;font-size:1.35rem;color:var(--ink);margin:0 0 .4rem;">Subtypspezifische Heilmittel &ndash; Naturheilkunde trifft Enneagramm</h2>
      <p style="font-size:0.92rem;color:var(--muted);margin:0 0 1.2rem;line-height:1.6;">Das Herzst\xfcck des Kompasses: F\xfcr jeden der 27 Subtypen sind naturheilkundliche Empfehlungen hinterlegt &ndash; genau abgestimmt auf die pers\xf6nliche Typstruktur. Nicht allgemein, sondern subtypgenau.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:.75rem;">
        <div style="background:linear-gradient(135deg,#f5e8cc,#f0d9a8);border-radius:10px;padding:.85rem .8rem;">
          <div style="font-size:1.4rem;margin-bottom:.25rem;">&#127807;</div>
          <div style="font-size:0.78rem;font-weight:700;color:var(--ink);">\xc4therische \xd6le</div>
          <div style="font-size:0.71rem;color:var(--muted);margin-top:.15rem;">Subtypspezifische Duftempfehlungen zur Regulation</div>
        </div>
        <div style="background:linear-gradient(135deg,#e8f0f5,#c8dcea);border-radius:10px;padding:.85rem .8rem;">
          <div style="font-size:1.4rem;margin-bottom:.25rem;">&#127810;</div>
          <div style="font-size:0.78rem;font-weight:700;color:var(--ink);">Bachbl\xfcten</div>
          <div style="font-size:0.71rem;color:var(--muted);margin-top:.15rem;">Bach-Essenz f\xfcr das Kernthema des Subtyps</div>
        </div>
        <div style="background:linear-gradient(135deg,#f0ece4,#e0d5c0);border-radius:10px;padding:.85rem .8rem;">
          <div style="font-size:1.4rem;margin-bottom:.25rem;">&#9679;</div>
          <div style="font-size:0.78rem;font-weight:700;color:var(--ink);">Hom\xf6opathie</div>
          <div style="font-size:0.71rem;color:var(--muted);margin-top:.15rem;">Konstitutionsmittel nach Detlef Rathmer</div>
        </div>
        <div style="background:linear-gradient(135deg,#eef5ee,#c8e0c8);border-radius:10px;padding:.85rem .8rem;">
          <div style="font-size:1.4rem;margin-bottom:.25rem;">&#127808;</div>
          <div style="font-size:0.78rem;font-weight:700;color:var(--ink);">Teeempfehlungen</div>
          <div style="font-size:0.71rem;color:var(--muted);margin-top:.15rem;">Pflanzliche Unterst\xfctzung je Subtyp</div>
        </div>
        <div style="background:linear-gradient(135deg,#f5eef5,#e0c8e0);border-radius:10px;padding:.85rem .8rem;">
          <div style="font-size:1.4rem;margin-bottom:.25rem;">&#128142;</div>
          <div style="font-size:0.78rem;font-weight:700;color:var(--ink);">Edelsteine</div>
          <div style="font-size:0.71rem;color:var(--muted);margin-top:.15rem;">Energetische Begleitung der Subtypen</div>
        </div>
        <div style="background:linear-gradient(135deg,#fdf0e0,#f0d0a0);border-radius:10px;padding:.85rem .8rem;">
          <div style="font-size:1.4rem;margin-bottom:.25rem;">&#127807;</div>
          <div style="font-size:0.78rem;font-weight:700;color:var(--ink);">TCM & weitere</div>
          <div style="font-size:0.71rem;color:var(--muted);margin-top:.15rem;">Traditionelle Chinesische Medizin & Sch\xfcssler-Salze</div>
        </div>
      </div>
      <p style="font-size:0.8rem;color:var(--copper);text-align:center;margin:0 0 1.8rem;font-style:italic;">Alles subtypgenau &ndash; nicht f\xfcr den Typ, sondern f\xfcr Ihren pers\xf6nlichen Subtyp.</p>

      <!-- Philosophische Tiefe -->
      <div style="border-top:1px solid var(--border);margin:1.5rem 0;"></div>
      <h2 style="font-family:'EB Garamond',serif;font-size:1.35rem;color:var(--ink);margin:0 0 .4rem;">Philosophische Tiefe</h2>
      <div data-route="schopenhauer-zitat" style="cursor:pointer;display:flex;gap:1rem;align-items:center;background:var(--ivory);border-radius:12px;padding:1rem 1.2rem;border:1px solid var(--border);margin-bottom:1.8rem;">
        <img src="./assets/schopenhauer-zitat.png" alt="Schopenhauer" style="width:68px;height:68px;border-radius:8px;object-fit:cover;flex-shrink:0;" />
        <div>
          <p style="margin:0 0 .3rem;font-size:0.78rem;font-weight:600;color:var(--copper);">Schaubild &ndash; Philosophie & Enneagramm</p>
          <p style="margin:0 0 .3rem;font-size:0.95rem;font-family:'EB Garamond',serif;color:var(--ink);">Wir k\xf6nnen nicht wollen, was wir wollen</p>
          <p style="margin:0;font-size:0.8rem;color:var(--muted);">Schopenhauer trifft Enneagramm &ndash; \xfcber typologisch gef\xe4rbtes Wollen und die M\xf6glichkeit echter Freiheit &#8594;</p>
        </div>
      </div>

      <!-- CTA -->
      <div style="background:linear-gradient(135deg,#f5e8cc,#eedda0);border:2px solid var(--gold);border-radius:14px;padding:1.8rem 1.5rem;text-align:center;">
        <p style="font-size:0.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);margin:0 0 .4rem;">Vollzugang freischalten</p>
        <h3 style="font-family:'EB Garamond',serif;font-size:1.5rem;color:var(--ink);margin:0 0 .6rem;line-height:1.2;">Der gesamte Kompass wartet auf Sie</h3>
        <p style="font-size:0.88rem;color:var(--muted);margin:0 0 1.2rem;line-height:1.55;">Hunderte Schaubilder &middot; Alle 27 Subtyp-Portraits &middot; Subtypspezifische Heilmittel & Naturheilkunde</p>
        <button class="cta-gold-btn" data-route="freischalt" style="background:var(--gold-dark);color:var(--copper);border:3px solid #8a5a1a;border-radius:10px;padding:.85rem 2.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;font-family:'EB Garamond',serif;box-shadow:0 4px 18px rgba(0,0,0,.22);">Jetzt freischalten &#8594;</button>
      </div>

    </div>
  `);
}

function onboardingOverlay() {
  const shown = localStorage.getItem("kompass:onboarding-done");
  if (shown) return "";
  return `
    <div id="onboarding-overlay" style="
      position:fixed;inset:0;z-index:9999;
      background:rgba(20,14,6,0.82);
      display:flex;align-items:center;justify-content:center;
      padding:1.5rem;box-sizing:border-box;">
      <div style="
        background:var(--surface,#faf7f2);border-radius:18px;
        max-width:420px;width:100%;padding:2rem 1.8rem;
        box-shadow:0 8px 40px rgba(0,0,0,0.35);text-align:center;">
        <div style="font-size:2.8rem;margin-bottom:0.6rem;">\ud83e\udded</div>
        <h2 style="font-family:'EB Garamond',serif;font-size:1.6rem;color:var(--ink);margin:0 0 0.4rem;">Willkommen im Heilungskompass</h2>
        <p style="font-size:0.9rem;color:var(--muted);margin:0 0 1.6rem;line-height:1.6;">Ein kurzer \u00dcberblick \u2013 dann k\u00f6nnen Sie sofort loslegen.</p>
        <div style="display:flex;flex-direction:column;gap:1rem;text-align:left;margin-bottom:1.8rem;">
          <div style="display:flex;gap:1rem;align-items:flex-start;">
            <div style="min-width:2rem;height:2rem;border-radius:50%;background:var(--gold,#c4a456);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;color:#1a1208;flex-shrink:0;">1</div>
            <div>
              <strong style="color:var(--ink);font-size:0.95rem;">Ihren Subtyp w\u00e4hlen</strong>
              <p style="margin:0.2rem 0 0;font-size:0.84rem;color:var(--muted);line-height:1.5;">Kennen Sie Ihren Enneagramm-Subtyp? W\u00e4hlen Sie ihn \u2013 der Kompass richtet sich vollst\u00e4ndig auf Sie aus.</p>
            </div>
          </div>
          <div style="display:flex;gap:1rem;align-items:flex-start;">
            <div style="min-width:2rem;height:2rem;border-radius:50%;background:var(--gold,#c4a456);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;color:#1a1208;flex-shrink:0;">2</div>
            <div>
              <strong style="color:var(--ink);font-size:0.95rem;">Kostenlos erkunden</strong>
              <p style="margin:0.2rem 0 0;font-size:0.84rem;color:var(--muted);line-height:1.5;">Die Leseprobe steht sofort kostenlos zur Verf\u00fcgung.</p>
            </div>
          </div>
          <div style="display:flex;gap:1rem;align-items:flex-start;">
            <div style="min-width:2rem;height:2rem;border-radius:50%;background:var(--gold,#c4a456);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;color:#1a1208;flex-shrink:0;">3</div>
            <div>
              <strong style="color:var(--ink);font-size:0.95rem;">Vollzugang freischalten</strong>
              <p style="margin:0.2rem 0 0;font-size:0.84rem;color:var(--muted);line-height:1.5;">F\u00fcr alle 27 Subtyp-Profile \u00b7 Heilmittel &amp; Naturheilkunde \u00b7 Hunderte Schaubilder \u00b7 Portr\u00e4ts ber\u00fchmter Pers\u00f6nlichkeiten \u00b7 Enneagramm-Profiling \u00b7 Musik &amp; Klang \u00b7 Praxisanwendungen \u00b7 regelm\u00e4\u00dfige Erweiterung \u00b7 lebenslanger Zugang.</p>
            </div>
          </div>
        </div>
        <button id="onboarding-close" style="
          background:var(--gold-dark,#a8872d);color:#fff;
          border:3px solid #8a5a1a;border-radius:10px;
          padding:0.85rem 2.2rem;font-size:1rem;font-weight:700;
          cursor:pointer;font-family:'EB Garamond',serif;
          box-shadow:0 4px 16px rgba(0,0,0,.2);width:100%;">
          Los geht's \u2192
        </button>
        <a href="./vorstellung.html#video" target="_blank" rel="noopener" style="
          display:block;margin-top:0.9rem;font-size:0.84rem;
          color:var(--muted);text-decoration:none;">
          \ud83c\udfac 2\u00bd-Minuten-Video ansehen
        </a>
      </div>
    </div>
  `;
}

function bindOnboarding() {
  const btn = document.getElementById("onboarding-close");
  if (!btn) return;
  btn.addEventListener("click", () => {
    localStorage.setItem("kompass:onboarding-done", "1");
    const overlay = document.getElementById("onboarding-overlay");
    if (overlay) overlay.remove();
  });
}


// \u2500\u2500 Wertsch\u00e4tzungs-Beitrag (freiwillige Unterst\u00fctzung) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Stripe Payment Links: 3 fixe Betr\u00e4ge + 1 Link mit "Kunde gibt Betrag ein" (Wunschbetrag).
// TODO Detlef: In Stripe unter "Payment Links" vier Links anlegen und die Platzhalter unten ersetzen.
// Bei "custom" beim Anlegen des Payment Links die Option "Kunde gibt eigenen Betrag ein" aktivieren.
const SUPPORT_LINKS = {
  amount3:  "https://buy.stripe.com/9B600j9sQ7Sq8dsdzB4gg3H",
  amount5:  "https://buy.stripe.com/eVq9AT34s8WudxMeDF4gg3I",
  amount10: "https://buy.stripe.com/eVq00j0WkfkS79obrt4gg3J",
  custom:   "https://buy.stripe.com/eVqfZh6gE1u29hwgLN4gg3K",
};

function openSupportModal() {
  if (document.getElementById("support-overlay")) return;
  const overlay = document.createElement("div");
  overlay.id = "support-overlay";
  overlay.style.cssText = "position:fixed;inset:0;z-index:9999;background:rgba(20,14,6,0.82);display:flex;align-items:center;justify-content:center;padding:1.5rem;box-sizing:border-box;";
  overlay.innerHTML = `
    <div style="background:var(--surface,#faf7f2);border-radius:18px;max-width:440px;width:100%;padding:2rem 1.8rem;box-shadow:0 8px 40px rgba(0,0,0,0.35);text-align:center;">
      <div style="font-size:2.4rem;margin-bottom:0.6rem;">\ud83c\udf31</div>
      <h2 style="font-family:'EB Garamond',serif;font-size:1.4rem;color:var(--ink);margin:0 0 0.6rem;">Gemeinsam dieses Universum wachsen lassen</h2>
      <p style="font-size:0.9rem;color:var(--muted);margin:0 0 1.6rem;line-height:1.65;">Dieses Wissen soll frei zug\u00e4nglich bleiben &ndash; ohne Abo-Zwang und ohne Barrieren. Da unsere Bibliothek t\u00e4glich w\u00e4chst, steigen auch die Kosten f\u00fcr Hosting, Pflege und Weiterentwicklung. Wenn dir der Kompass Erkenntnisse geschenkt hat und du diese Reise unterst\u00fctzen m\u00f6chtest, kannst du mit einem freiwilligen Wertsch\u00e4tzungs-Beitrag direkt dazu beitragen, dass dieses Projekt weiter aufbl\u00fchen kann.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;margin-bottom:0.8rem;">
        <a href="${SUPPORT_LINKS.amount3}" target="_blank" rel="noopener" style="display:block;padding:0.7rem 0;border-radius:10px;border:1.5px solid var(--gold,#c4a456);color:var(--gold-dark,#8a6a1a);font-weight:700;font-size:0.95rem;text-decoration:none;">3 \u20ac</a>
        <a href="${SUPPORT_LINKS.amount5}" target="_blank" rel="noopener" style="display:block;padding:0.7rem 0;border-radius:10px;border:1.5px solid var(--gold,#c4a456);color:var(--gold-dark,#8a6a1a);font-weight:700;font-size:0.95rem;text-decoration:none;">5 \u20ac</a>
        <a href="${SUPPORT_LINKS.amount10}" target="_blank" rel="noopener" style="display:block;padding:0.7rem 0;border-radius:10px;border:1.5px solid var(--gold,#c4a456);color:var(--gold-dark,#8a6a1a);font-weight:700;font-size:0.95rem;text-decoration:none;">10 \u20ac</a>
      </div>
      <a href="${SUPPORT_LINKS.custom}" target="_blank" rel="noopener" style="display:block;background:var(--gold-dark,#a8872d);color:#fff;border-radius:10px;padding:0.85rem 1.5rem;font-size:1rem;font-weight:700;text-decoration:none;margin-bottom:0.9rem;">Wertsch\u00e4tzung da lassen \u2192</a>
      <button id="support-close" style="background:none;border:none;color:var(--muted);font-size:0.85rem;cursor:pointer;text-decoration:underline;">Sp\u00e4ter vielleicht</button>
      <p style="font-size:0.72rem;color:var(--muted);opacity:0.7;margin:1.1rem 0 0;">Sicher \u00fcber Stripe &middot; 100&nbsp;% flie\u00dfen in Erhalt &amp; Ausbau der Inhalte</p>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
  document.getElementById("support-close").addEventListener("click", () => overlay.remove());
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".support-trigger-btn")) openSupportModal();
  if (e.target.closest(".wegweiser-premium-open")) {
    const wegweiserBtn = document.getElementById("wegweiser-btn");
    if (wegweiserBtn) wegweiserBtn.click();
  }
});


const JSONBIN_KEY = '$2a$10$LNlgIJOGbl6mnMlsX.luWuOkm/0og9HUbwLyoqdb9hHh9Uk9hbt6O';
const JSONBIN_WARTEND = '6a573182f5f4af5e299123ac';
const JSONBIN_FREIGEGEBEN = '6a573185da38895dfe5f9c4b';
const ADMIN_CODE = 'rathmer9';


function adminPage() {
  const app = document.getElementById('app');
  const code = window.location.hash.split('/')[1] || '';
  if (code !== ADMIN_CODE) {
    app.innerHTML = '<div style="max-width:400px;margin:4rem auto;padding:2rem;text-align:center;">' +
      '<p style="color:var(--ink);font-size:1rem;margin-bottom:1rem;">Admin-Code eingeben:</p>' +
      '<input id="admin-code-input" type="password" placeholder="Code..." ' +
      'style="width:100%;padding:0.6rem;font-size:1rem;border:1px solid var(--border);border-radius:8px;text-align:center;margin-bottom:0.8rem;">' +
      '<button onclick="_adminLogin()" ' +
      'style="background:var(--gold);border:none;border-radius:8px;padding:0.6rem 1.5rem;font-weight:700;cursor:pointer;">Einloggen</button>' +
      '</div>';
    return;
  }
  app.innerHTML = '<div style="max-width:680px;margin:2rem auto;padding:1rem;">' +
    '<h1 style="font-size:1.2rem;font-weight:700;color:var(--ink);margin-bottom:1.5rem;">Bewertungen verwalten</h1>' +
    '<div id="admin-liste"><p style="color:var(--muted);">Lade Bewertungen...</p></div>' +
    '</div>';
  _adminLaden();
}

function _adminLaden() {
  fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_WARTEND + '/latest', { cache: 'no-store',
    headers: { 'X-Master-Key': JSONBIN_KEY } })
    .then(function(r){ return r.json(); })
    .then(function(data) {
      const liste = (data.record && data.record.reviews) ? data.record.reviews : [];
      const el = document.getElementById('admin-liste');
      if (!el) return;
      if (!liste.length) { el.innerHTML = '<p style="color:var(--muted);">Keine wartenden Bewertungen.</p>'; return; }
      el.innerHTML = liste.map(function(b, i) {
        const sternText = '\u2605'.repeat(b.sterne) + '\u2606'.repeat(5-b.sterne);
        const datum = b.datum ? new Date(b.datum).toLocaleDateString('de-DE') : '';
        return '<div style="background:var(--ivory);border:1px solid var(--border);border-radius:10px;padding:1rem 1.2rem;margin-bottom:0.8rem;">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;">' +
          '<div>' +
          '<span style="color:#f4a900;font-size:1.1rem;">' + sternText + '</span>' +
          '<span style="font-size:0.78rem;color:var(--muted);margin-left:0.5rem;">' + datum + '</span>' +
          '<p style="font-size:0.9rem;color:var(--ink);margin:0.5rem 0 0;line-height:1.6;">' + (b.text || '(kein Kommentar)') + '</p>' +
          '</div></div>' +
          '<div style="display:flex;gap:0.5rem;margin-top:0.8rem;">' +
          '<button onclick="window._adminFreigeben(' + i + ')" ' +
          'style="background:#27ae60;color:#fff;border:none;border-radius:8px;padding:0.5rem 1rem;font-size:0.88rem;font-weight:700;cursor:pointer;">\u2713 Freigeben</button>' +
          '<button onclick="window._adminLoeschen(' + i + ')" ' +
          'style="background:#e74c3c;color:#fff;border:none;border-radius:8px;padding:0.5rem 1rem;font-size:0.88rem;font-weight:700;cursor:pointer;">\u2717 L\u00f6schen</button>' +
          '</div></div>';
      }).join('');
    }).catch(function() {
      const el = document.getElementById('admin-liste');
      if (el) el.innerHTML = '<p style="color:red;">Fehler beim Laden.</p>';
    });
}

window._adminLogin = function() {
  var v = document.getElementById('admin-code-input').value;
  if (v === ADMIN_CODE) { location.hash = 'admin/' + v; }
  else { alert('Falscher Code'); }
};

function adminWegweiserCodePage() {
  const app = document.getElementById('app');
  const code = window.location.hash.split('/')[1] || '';
  if (code !== ADMIN_CODE) {
    app.innerHTML = '<div style="max-width:400px;margin:4rem auto;padding:2rem;text-align:center;">' +
      '<p style="color:var(--ink);font-size:1rem;margin-bottom:1rem;">Admin-Code eingeben:</p>' +
      '<input id="admin-code-input" type="password" placeholder="Code..." ' +
      'style="width:100%;padding:0.6rem;font-size:1rem;border:1px solid var(--border);border-radius:8px;text-align:center;margin-bottom:0.8rem;">' +
      '<button onclick="_adminWegweiserLogin()" ' +
      'style="background:var(--gold);border:none;border-radius:8px;padding:0.6rem 1.5rem;font-weight:700;cursor:pointer;">Einloggen</button>' +
      '</div>';
    return;
  }
  app.innerHTML = '<div style="max-width:480px;margin:2rem auto;padding:1rem;">' +
    '<h1 style="font-size:1.2rem;font-weight:700;color:var(--ink);margin-bottom:0.6rem;">Wegweiser-Zugangscode senden</h1>' +
    '<p style="color:var(--muted);font-size:0.88rem;margin-bottom:1.2rem;line-height:1.5;">E-Mail-Adresse des Abonnenten eingeben und senden — er bekommt sofort eine neue E-Mail mit frischem 6-stelligem Code (30 Minuten gültig).</p>' +
    '<input id="admin-wegweiser-email" type="email" placeholder="kunde@beispiel.de" ' +
    'style="width:100%;padding:0.6rem;font-size:1rem;border:1px solid var(--border);border-radius:8px;margin-bottom:0.8rem;">' +
    '<button onclick="window._adminWegweiserSend()" ' +
    'style="background:var(--gold);border:none;border-radius:8px;padding:0.6rem 1.5rem;font-weight:700;cursor:pointer;">Code senden</button>' +
    '<p id="admin-wegweiser-status" style="margin-top:1rem;font-size:0.88rem;color:var(--ink);"></p>' +
    '</div>';
}

window._adminWegweiserLogin = function() {
  var v = document.getElementById('admin-code-input').value;
  if (v === ADMIN_CODE) { location.hash = 'admin-wegweiser/' + v; }
  else { alert('Falscher Code'); }
};

window._adminWegweiserSend = function() {
  var input = document.getElementById('admin-wegweiser-email');
  var status = document.getElementById('admin-wegweiser-status');
  var email = (input.value || '').trim();
  if (!email) { return; }
  status.textContent = 'Sende …';
  fetch('https://kompass-assistent.9rathmer.workers.dev/auth/request-link', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email }),
  }).then(function(r) { return r.json(); })
    .then(function(data) {
      status.textContent = data.message || data.error || 'Fertig.';
      status.style.color = data.error ? '#e74c3c' : '#27ae60';
    }).catch(function() {
      status.textContent = 'Verbindungsfehler. Bitte erneut versuchen.';
      status.style.color = '#e74c3c';
    });
};

window._adminFreigeben = function(index) {
  fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_WARTEND + '/latest', { cache: 'no-store',
    headers: { 'X-Master-Key': JSONBIN_KEY } })
    .then(function(r){ return r.json(); })
    .then(function(data) {
      const wartend = (data.record && data.record.reviews) ? data.record.reviews : [];
      const review = wartend[index];
      if (!review) return;
      wartend.splice(index, 1);
      const textToTranslate = review.text || '';
      // Detect language direction: if text_en already exists, source is EN; otherwise translate DE\u2192EN
      const isEnglishSource = !!(review.text_en);
      const langpair = isEnglishSource ? 'en|de' : 'de|en';
      const translatePromise = textToTranslate
        ? fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(textToTranslate.slice(0,500)) + '&langpair=' + langpair)
            .then(function(r){ return r.json(); })
            .then(function(t){ return (t.responseData && t.responseData.translatedText) || null; })
            .catch(function(){ return null; })
        : Promise.resolve(null);
      return translatePromise.then(function(translated) {
        if (translated && isEnglishSource) review.text_de = translated;
        if (translated && !isEnglishSource) review.text_en = translated;
        return fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_FREIGEGEBEN + '/latest', { cache: 'no-store',
          headers: { 'X-Master-Key': JSONBIN_KEY } })
          .then(function(r){ return r.json(); })
          .then(function(fd) {
            const freigegeben = (fd.record && fd.record.reviews) ? fd.record.reviews : [];
            freigegeben.push(review);
            return Promise.all([
              fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_WARTEND, {
                method: 'PUT', headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_KEY },
                body: JSON.stringify({ reviews: wartend }) }),
              fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_FREIGEGEBEN, {
                method: 'PUT', headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_KEY },
                body: JSON.stringify({ reviews: freigegeben }) })
            ]);
          });
      });
    })
    .then(function() { _adminLoading(); })
    .catch(function() { alert('Error beim Freigeben.'); });
};

window._adminLoeschen = function(index) {
  fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_WARTEND + '/latest', { cache: 'no-store',
    headers: { 'X-Master-Key': JSONBIN_KEY } })
    .then(function(r){ return r.json(); })
    .then(function(data) {
      const liste = (data.record && data.record.reviews) ? data.record.reviews : [];
      liste.splice(index, 1);
      return fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_WARTEND, {
        method: 'PUT', headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_KEY },
        body: JSON.stringify({ reviews: liste }) });
    })
    .then(function() { _adminLaden(); })
    .catch(function() { alert('Fehler beim L\u00f6schen.'); });
};


const COUNTRY_NAME_DE = {
  'DE':'Deutschland','AT':'\u00d6sterreich','CH':'Schweiz','US':'USA','GB':'Gro\u00dfbritannien',
  'FR':'Frankreich','NL':'Niederlande','IT':'Italien','ES':'Spanien','SE':'Schweden',
  'NO':'Norwegen','DK':'D\u00e4nemark','PL':'Polen','CZ':'Tschechien','HU':'Ungarn',
  'BE':'Belgien','LU':'Luxemburg','LI':'Liechtenstein','AU':'Australien','CA':'Kanada',
  'JP':'Japan','CN':'China','IN':'Indien','BR':'Brasilien','MX':'Mexiko',
};

window.translateReview = function(btn) {
  try {
    var card = btn.parentElement;
    var textEl = card.querySelector('p');
    if (!textEl) return;
    if (btn.dataset.translated === '1') {
      textEl.textContent = textEl.dataset.orig;
      btn.textContent = '\ud83c\udf10 \u00dcbersetzen';
      btn.dataset.translated = '0';
      return;
    }
    var orig = textEl.textContent;
    textEl.dataset.orig = orig;
    btn.textContent = '\u2026';
    fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + encodeURIComponent(orig))
      .then(function(r) { return r.json(); })
      .then(function(d) {
        var result = d[0].map(function(s) { return s[0]; }).join('');
        textEl.textContent = result;
        btn.textContent = '\u21a9 Original';
        btn.dataset.translated = '1';
      })
      .catch(function() { btn.textContent = '\ud83c\udf10 \u00dcbersetzen'; });
  } catch(e) { btn.textContent = '\ud83c\udf10 \u00dcbersetzen'; }
}

function _bewertungSterneInit() {

// Freigegebene Bewertungen laden
  fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_FREIGEGEBEN + '/latest', { cache: 'no-store',
    headers: { 'X-Master-Key': JSONBIN_KEY } })
    .then(function(r){ return r.json(); })
    .then(function(data) {
      const liste = (data.record && data.record.reviews) ? data.record.reviews : [];
      if (!liste.length) return;
      const section = document.getElementById('community-bewertungen');
      const container = document.getElementById('community-liste');
      if (!section || !container) return;
      container.innerHTML = liste.map(function(b) {
        const displayText = b.text_de || b.text || '';
        const landDisplay = b.countryCode ? (COUNTRY_NAME_DE[b.countryCode] || b.land || '') : (b.land || '');
        const meta = [b.name, landDisplay || null].filter(Boolean).join(' \u00b7 ');
        return '<div style="background:var(--ivory);border:1px solid var(--border);border-radius:10px;padding:1rem 1.2rem;" data-review-card>' +
          '<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;">' +
          '<span style="color:#f4a900;font-size:1rem;">' + '\u2605'.repeat(b.sterne) + '\u2606'.repeat(5-b.sterne) + '</span>' +
          (meta ? '<span style="font-size:0.78rem;color:var(--muted);">' + meta + '</span>' : '') +
          '</div>' +
          '<p style="font-size:0.88rem;color:var(--ink);margin:0;line-height:1.6;" data-review-text>' + displayText + '</p>' +
          '<button onclick="translateReview(this)" data-translated="0" style="margin-top:0.5rem;background:none;border:none;color:var(--gold-dark,#a07830);font-size:0.75rem;cursor:pointer;padding:0;">\ud83c\udf10 \u00dcbersetzen</button>' +
          '</div>';
      }).join('');
      section.style.display = 'block';
    }).catch(function() {});
  const sterne = document.querySelectorAll('#bwrt-sterne span');
  if (!sterne.length) return;
  let gewaehlt = 0;
  sterne.forEach(function(s) {
    s.addEventListener('mouseover', function() {
      const n = parseInt(this.dataset.s);
      sterne.forEach(function(x, i) { x.style.opacity = i < n ? '1' : '0.3'; });
    });
    s.addEventListener('mouseout', function() {
      sterne.forEach(function(x, i) { x.style.opacity = i < gewaehlt ? '1' : '0.3'; });
    });
    s.addEventListener('click', function() {
      gewaehlt = parseInt(this.dataset.s);
      sterne.forEach(function(x, i) { x.style.opacity = i < gewaehlt ? '1' : '0.3'; });
      document.getElementById('bwrt-senden').dataset.sterne = gewaehlt;
    });
  });
}

function _bewertungSenden() {
  const btn = document.getElementById('bwrt-senden');
  const sterne = parseInt(btn.dataset.sterne || '0');
  const reviewText = document.getElementById('bwrt-text').value.trim();
  const nameVal = (document.getElementById('bwrt-name') || {value:''}).value.trim();
  if (!sterne) { alert('Bitte erst Sterne anklicken.'); return; }
  try { new Audio('sounds/purchase/bewertung_dank.mp3').play().catch(() => {}); } catch (e) {}
  const sternText = '\u2605'.repeat(sterne) + '\u2606'.repeat(5 - sterne);
  const form = document.getElementById('bwrt-form');
  form.innerHTML = '<div style="text-align:center;padding:1.5rem 1rem;">' +
    '<div style="font-size:2.5rem;margin-bottom:0.6rem;">' + sternText + '</div>' +
    '<p style="font-size:1.05rem;font-weight:700;color:var(--ink);margin:0 0 0.4rem;">Herzlichen Dank f\xfcr Ihre Bewertung!</p>' +
    '<p style="font-size:0.88rem;color:var(--muted);margin:0;">Sie wird gepr\xfcft und bald hier ver\xf6ffentlicht.</p>' +
    '</div>';
  fetch('https://ipapi.co/json/')
    .then(function(r){ return r.json(); })
    .catch(function(){ return {}; })
    .then(function(geo) {
      const review = {
        sterne: sterne,
        text: reviewText,
        name: nameVal || null,
        land: geo.country_name || null,
        countryCode: geo.country_code || null,
        datum: new Date().toISOString()
      };
      return fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_WARTEND, { cache: 'no-store',
        headers: { 'X-Master-Key': JSONBIN_KEY } })
        .then(function(r){ return r.json(); })
        .then(function(data) {
          const liste = (data.record && data.record.reviews) ? data.record.reviews : [];
          liste.push(review);
          return fetch('https://api.jsonbin.io/v3/b/' + JSONBIN_WARTEND, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_KEY },
            body: JSON.stringify({ reviews: liste })
          });
        });
    })
    .catch(function() {});
}

window._bewertungSenden = _bewertungSenden;

function _formatGermanDate(iso) {
  const MONATE = ["Januar","Februar","M\u00e4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
  const [y, m, d] = iso.split("-").map(Number);
  return parseInt(d, 10) + ". " + MONATE[m - 1] + " " + y;
}

function _gsLatestUpdateBadgeHTML() {
  if (typeof CHANGELOG === "undefined" || !CHANGELOG.length) return "";
  const latest = CHANGELOG.reduce((a, b) => a.date > b.date ? a : b);
  return `<button class="related-link-btn" data-route="updates" style="display:inline-flex;align-items:center;gap:0.4rem;background:var(--ivory);border:1.5px solid var(--gold,#c4a456);border-radius:20px;padding:0.4rem 1rem;font-family:-apple-system,sans-serif;font-size:0.78rem;font-weight:700;color:var(--copper,#a5603d);letter-spacing:0.02em;cursor:pointer;">
    <span style="width:7px;height:7px;border-radius:50%;background:var(--gold,#c4a456);display:inline-block;"></span>
    Letztes Update: ${_formatGermanDate(latest.date)}
  </button>`;
}

function updatesPage() {
  const unlocked = hasHeilwissen();
  const entries = (typeof CHANGELOG !== "undefined" ? CHANGELOG : []);
  const rows = entries.map(e => {
    const dateStr = _formatGermanDate(e.date);
    if (unlocked) {
      return `<li style="display:flex;gap:1rem;align-items:baseline;padding:0.9rem 0;border-bottom:1px solid var(--border);">
        <span style="flex-shrink:0;width:6.5rem;font-size:0.78rem;color:var(--muted);font-family:-apple-system,sans-serif;">${dateStr}</span>
        ${e.route
          ? `<a href="#" onclick="event.preventDefault();go('${e.route}')" style="color:var(--ink);text-decoration:underline;text-decoration-color:var(--copper);text-underline-offset:2px;font-size:0.92rem;">${e.text}</a>`
          : `<span style="font-size:0.92rem;color:var(--ink);">${e.text}</span>`}
      </li>`;
    }
    const teaser = e.route && e.route.startsWith("beruehmte-") ? "Neues Promi-Portr\u00e4t verf\u00fcgbar"
      : e.route && e.route.startsWith("kriminalpsychologie-") ? "Neuer Kriminalfall analysiert"
      : "Neue Inhalte verf\u00fcgbar";
    return `<li style="display:flex;gap:1rem;align-items:baseline;padding:0.9rem 0;border-bottom:1px solid var(--border);">
      <span style="flex-shrink:0;width:6.5rem;font-size:0.78rem;color:var(--muted);font-family:-apple-system,sans-serif;">${dateStr}</span>
      <span style="font-size:0.92rem;color:var(--ink);">${teaser}</span>
    </li>`;
  }).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("updates")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Der Kompass w\u00e4chst st\u00e4ndig weiter</p>
          <h1 class="typentest-titel" style="margin-bottom:0.6rem;">Alle Updates</h1>
          <p class="typentest-intro">Hier sehen Sie, wie regelm\u00e4\u00dfig neue Inhalte, Portr\u00e4ts und Funktionen erg\u00e4nzt werden.</p>
          <ul style="list-style:none;margin:1.2rem 0 0;padding:0;">${rows}</ul>
        </div>
      </div>
    </div>
  `);
}

function neuigkeitenSection() {
  if (typeof CHANGELOG === 'undefined' || !CHANGELOG.length) return '';
  const SEEN_KEY = 'kompass:changelog-seen';
  const lastSeen = localStorage.getItem(SEEN_KEY) || '';
  const neu = CHANGELOG.filter(e => e.date > lastSeen);
  if (!neu.length) return '';
  const latest = CHANGELOG.reduce((a, b) => a.date > b.date ? a : b).date;
  const unlocked = hasHeilwissen();
  const items = neu.map(e => {
    if (unlocked) {
      return `<li style="display:flex;align-items:baseline;gap:0.5rem;margin-bottom:0.35rem;">
      <span style="color:var(--copper,#b87830);flex-shrink:0;">\u2726</span>
      ${e.route
        ? `<a href="#" onclick="event.preventDefault();go('${e.route}')" style="color:var(--ink,#2c2824);text-decoration:underline;text-decoration-color:var(--copper,#b87830);text-underline-offset:2px;">${e.text}</a>`
        : `<span>${e.text}</span>`}
    </li>`;
    }
    // Nicht freigeschaltet: keine Namen/Typzuordnungen zeigen, nur die Kategorie
    const teaser = e.route && e.route.startsWith('beruehmte-') ? 'Neues Promi-Portr\u00e4t verf\u00fcgbar'
      : e.route && e.route.startsWith('kriminalpsychologie-') ? 'Neuer Kriminalfall analysiert'
      : 'Neue Inhalte verf\u00fcgbar';
    return `<li style="display:flex;align-items:baseline;gap:0.5rem;margin-bottom:0.35rem;">
      <span style="color:var(--copper,#b87830);flex-shrink:0;">\u2726</span>
      <span>${teaser}</span>
    </li>`;
  }).join('');
  // Auto-update lastSeen after 10 s so banner disappears on next visit without requiring \u00d7 click
  setTimeout(function(){ localStorage.setItem('kompass:changelog-seen', '${latest}'); }, 10000);
  return `
    <section id="neuigkeiten-banner" style="max-width:520px;margin:0 auto 1.4rem;padding:0 1rem;">
      <div style="position:relative;border-left:3px solid var(--copper,#b87830);border-radius:0 8px 8px 0;background:var(--paper-deep,#ede8dc);padding:0.9rem 1.1rem 0.9rem 1.1rem;">
        <button onclick="(function(){localStorage.setItem('kompass:changelog-seen','${latest}');document.getElementById('neuigkeiten-banner').remove();})()" style="position:absolute;top:0.5rem;right:0.6rem;background:none;border:none;font-size:1rem;color:var(--muted,#888);cursor:pointer;line-height:1;padding:0.1rem 0.3rem;" aria-label="Schlie\u00dfen">\u00d7</button>
        <details>
          <summary style="cursor:pointer;font-size:0.7rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--copper,#b87830);margin:0;padding-right:1.4rem;list-style:none;">Neu seit Ihrem letzten Besuch (${neu.length})</summary>
          <ul style="list-style:none;margin:0.6rem 0 0;padding:0;font-size:0.88rem;color:var(--ink,#2c2824);line-height:1.5;">${items}</ul>
        </details>
      </div>
    </section>`;
}

function startPage() {
  const p = state.profile;
  const copy = text.routes.start;
  const firstVisit = state.isFirstVisit;
  let _wegweiserPremiumActive = false;
  try { _wegweiserPremiumActive = !!localStorage.getItem("wegweiser-session-token"); } catch (e) {}

  const profileGlimpse = !firstVisit ? `
    <div class="first-glimpse">
      ${p.image ? `<div style="position:relative;width:72px;height:72px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 3px ${typeColorFromCode(p.code)};"><img src="${p.image}" alt="${text.meta.resonanceImageAltPrefix} ${p.code}" style="position:absolute;top:${tierAvatarTop(p.code)};left:${tierAvatarLeft(p.code)};width:140%;height:140%;object-fit:cover;border-radius:0;" /></div>` : `<div class="profile-badge">${p.emoji || p.code}</div>`}
      <div>
        <span>${p.code} \u00b7 ${p.title}</span>
        <strong>${p.focus}</strong>
        <em>${copy.animalPrefix} ${p.archetype}</em>
      </div>
    </div>
  ` : '';

  const freischaltLink = !hasHeilwissen() ? `<button class="ghost-link" data-route="freischalt" style="margin-top:.5rem;font-size:.85rem;">Bereits gekauft? Zugang hier aktivieren \u2192</button>` : "";
  const returnActions = !firstVisit ? `
    <div style="width:100%;display:flex;justify-content:center;">
      <button class="primary" data-route="dashboard">${copy.primaryAction}</button>
    </div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <button class="secondary" data-route="knowledge">Wissensbasis</button>
      <button class="secondary${hasHeilwissen() ? "" : " is-locked"}" data-route="healing">Heilmittel${hasHeilwissen() ? "" : " <span class=\"btn-lock\" aria-hidden=\"true\">\ud83d\udd12</span>"}</button>
    </div>
    ${freischaltLink}
  ` : `
    <button class="primary" data-route="profile">Meinen Subtyp w\u00e4hlen \u2192</button>
    <button class="secondary" data-route="leseprobe">App-Leseprobe ansehen</button>
    <button class="secondary" data-route="kaufen" style="margin-top:.25rem;">Zugang kaufen \u00b7 \u20ac\u202f79 \u2192</button>
    <button class="ghost-link" data-route="freischalt" style="margin-top:.5rem;font-size:.85rem;">Bereits gekauft? Zugang hier aktivieren \u2192</button>
  `;

  return shell(`
    ${onboardingOverlay()}
    <div style="position:fixed;top:0.6rem;right:0.75rem;z-index:999;"><a href="/en/" class="lang-switcher" title="Switch to English" aria-label="Switch to English" onclick="_switchLangVoice(event, this.href, 'sounds/lang/switch_to_en.mp3')">\ud83c\uddec\ud83c\udde7 EN</a></div>
    <section class="hero">
      <div class="hero__symbol">${compassMark()}</div>
      <p class="eyebrow">${text.meta.modelLine}</p>
      <h1>${copy.headline}</h1>
      <p class="lead">${copy.lead}</p>
      <div class="hero__actions">${returnActions}</div>
      ${profileGlimpse}
    </section>

    <div style="text-align:center;margin:0 0 0.8rem;">${_gsLatestUpdateBadgeHTML()}</div>
    ${neuigkeitenSection()}

    <section style="max-width:680px;margin:0 auto 0;padding:0 1rem 0.8rem;">
      <div style="text-align:center;margin-bottom:0.8rem;">
        ${_wegweiserPremiumActive ? `
        <button class="wegweiser-premium-open" style="display:inline-flex;align-items:center;gap:0.4rem;padding:0.5rem 1.1rem;border-radius:20px;
                  border:1px solid var(--copper,#a5652f);background:var(--copper,#a5652f);color:#fff;
                  font-size:0.85rem;font-weight:700;cursor:pointer;letter-spacing:0.02em;">
          ✨ Premium aktiv – Zum Wegweiser
        </button>` : `
        <button data-route="wegweiser-premium" style="display:inline-flex;align-items:center;gap:0.4rem;padding:0.5rem 1.1rem;border-radius:20px;
                  border:1px solid var(--copper,#a5652f);background:transparent;color:var(--copper,#a5652f);
                  font-size:0.85rem;font-weight:700;cursor:pointer;letter-spacing:0.02em;">
          ✨ Wegweiser Premium – Zugriff auf 40+ Bücher entdecken
        </button>`}
      </div>
      <div style="display:flex;gap:0.6rem;justify-content:center;flex-wrap:wrap;">
        <a href="https://www.verlagshausrathmer.com" target="_blank" rel="noopener"
           style="display:inline-flex;align-items:center;gap:0.4rem;padding:0.45rem 1rem;border-radius:20px;
                  border:1px solid var(--gold,#c4a456);background:transparent;color:var(--gold-dark,#8a6a1a);
                  font-size:0.82rem;font-weight:600;text-decoration:none;letter-spacing:0.02em;">
          \ud83d\udcda Verlagshaus Rathmer
        </a>
        <a href="https://psychologische-homoeopathie.de" target="_blank" rel="noopener"
           style="display:inline-flex;align-items:center;gap:0.4rem;padding:0.45rem 1rem;border-radius:20px;
                  border:1px solid var(--gold,#c4a456);background:transparent;color:var(--gold-dark,#8a6a1a);
                  font-size:0.82rem;font-weight:600;text-decoration:none;letter-spacing:0.02em;">
          \ud83c\udf3f Naturheilpraxis Rathmer
        </a>
        <a href="https://enneascholars.de" target="_blank" rel="noopener"
           style="display:inline-flex;align-items:center;gap:0.4rem;padding:0.45rem 1rem;border-radius:20px;
                  border:1px solid var(--gold,#c4a456);background:transparent;color:var(--gold-dark,#8a6a1a);
                  font-size:0.82rem;font-weight:600;text-decoration:none;letter-spacing:0.02em;">
          \ud83c\udf93 Ennea Scholars
        </a>
      </div>
      <div style="text-align:center;margin-top:0.7rem;">
        <button class="support-trigger-btn" style="background:none;border:none;color:var(--gold-dark,#8a6a1a);font-size:0.82rem;font-weight:600;cursor:pointer;text-decoration:underline;text-underline-offset:3px;padding:0.3rem;">\ud83d\udc9b Projekt-F\u00f6rderer werden</button>
      </div>
    </section>

    <section class="start-paths">
      <div class="start-path start-path--known">
        <div class="start-path__icon">\u25ce</div>
        <h2 class="start-path__title">Ich kenne meinen Subtyp</h2>
        <p class="start-path__body">W\u00e4hlen Sie Ihren Subtyp und erkunden Sie Heilmittel, TCM-Zuordnung, Kindheitspr\u00e4gung, Musik und pers\u00f6nliche Entwicklungswege.</p>
        <button class="start-path__btn" data-route="profile">Subtyp w\u00e4hlen \u2192</button>
      </div>
      <div class="start-path start-path--unknown">
        <div class="start-path__icon">\u25c7</div>
        <h2 class="start-path__title">Ich kenne meinen Typ noch nicht</h2>
        <p class="start-path__body">F\u00fcr eine genaue Typbestimmung empfehlen wir einen der nachfolgenden Tests oder eine pers\u00f6nliche Typberatung.</p>
        <div class="start-path__actions">
          <div class="start-path__test-row">
            <button class="start-path__btn start-path__btn--test" style="background:var(--gold);border-color:var(--gold-dark,#A8872D);" data-route="tierquiz"><span class="start-path__test-label" style="color:var(--anthracite,#2c2c2c);">&#129471; Welches Tier bin ich?</span><span class="start-path__test-sub" style="color:var(--anthracite,#2c2c2c);">Kurztest &middot; 3 Fragen &middot; 1 Minute</span></button>
            <button class="start-path__btn start-path__btn--test" data-route="motivations-schnelltest">
              <span class="start-path__test-label">Motivations-Schnelltest</span>
              <span class="start-path__test-sub">10 Fragen &middot; 3&ndash;5 Minuten &middot; Fokus: das innere Warum</span>
            </button>
            <button class="start-path__btn start-path__btn--test start-path__btn--diag${hasHeilwissen() ? "" : " is-locked"}" data-route="${hasHeilwissen() ? "diagnosetest" : "freischalt/heilwissen"}">
              <span class="start-path__test-label">Diagnose-Test${hasHeilwissen() ? "" : " \ud83d\udd12"}</span>
              <span class="start-path__test-sub">Schnelleinstieg \u00b7 9 Profile</span>
            </button>
            <button class="start-path__btn start-path__btn--test${hasBasis() ? "" : " is-locked"}" data-route="${hasBasis() ? "typentest" : "freischalt/basis"}">
              <span class="start-path__test-label">Struktureller Typentest${hasBasis() ? "" : " \ud83d\udd12"}</span>
              <span class="start-path__test-sub">Ausf\u00fchrlich \u00b7 mit Subtypen \u00b7 f\u00fcr Fortgeschrittene</span>
            </button>
            <button class="start-path__btn start-path__btn--test start-path__btn--motivational${hasHeilwissen() ? "" : " is-locked"}" data-route="${hasHeilwissen() ? "typentest-motivational" : "freischalt/heilwissen"}">
              <span class="start-path__test-label">Motivationaler Typentest${hasHeilwissen() ? "" : " \ud83d\udd12"}</span>
              <span class="start-path__test-sub">100 Fragen \u00b7 Schwerpunkt Motivation</span>
            </button>
            <button class="start-path__btn start-path__btn--test${hasHeilwissen() ? "" : " is-locked"}" data-route="${hasHeilwissen() ? "bewusstseinstest" : "freischalt/heilwissen"}">
              <span class="start-path__test-label">Bewusstseinsgrad-Selbsttest${hasHeilwissen() ? "" : " \ud83d\udd12"}</span>
              <span class="start-path__test-sub">Wo stehe ich gerade? \u00b7 Spiegel f\u00fcr Fortgeschrittene</span>
            </button>
          </div>
        </div>
        <div class="start-path__berater">
          <div class="start-path__berater-card">
            <strong class="start-path__berater-name">Detlef Rathmer</strong>
            <ul class="start-path__berater-list">
              <li>Therapeut</li>
              <li>Enneagrammtypisierung</li>
              <li>Bewusstseins-<br>entwicklung</li>
            </ul>
            <a class="start-path__web" href="https://www.psychologische-homoeopathie.de" target="_blank" rel="noopener">Naturheilpraxis Detlef Rathmer \u2192 psychologische-homoeopathie.de</a>
            <div class="start-path__berater-actions">
              <a class="start-path__btn" href="mailto:detlefrathmer@t-online.de?subject=Typisierungsberatung%20anfragen">\u2709 E-Mail</a>
              <a class="start-path__btn start-path__btn--wa" href="https://wa.me/4915758786201?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
          <div class="start-path__berater-card">
            <strong class="start-path__berater-name">David L. Rathmer</strong>
            <ul class="start-path__berater-list">
              <li>Enneagramm-Profiling</li>
              <li>Enneagrammtypisierung</li>
              <li>Ennea Scholars</li>
            </ul>
            <a class="start-path__web" href="https://www.enneascholars.de" target="_blank" rel="noopener">Enneagramm-Profiling f\u00fcr F\u00fchrungskr\u00e4fte &amp; Unternehmen \u2192 enneascholars.de</a>
            <div class="start-path__berater-actions">
              <a class="start-path__btn" href="mailto:rathmer.david.business@gmail.com?subject=Typisierungsberatung%20anfragen">\u2709 E-Mail</a>
              <a class="start-path__btn start-path__btn--wa" href="https://wa.me/4915901902479?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
        </div>
        <div style="text-align:center;margin-top:1.2rem;">
          <button class="start-path__btn" data-route="gesichts-scan" style="background:var(--gold,#c4a456);border-color:var(--gold-dark,#8a6a1a);">\ud83d\udcf7 Optional: Gesichts-Scan oder Video f\u00fcr Ihre Beratung vorbereiten</button>
          <p style="font-size:0.78rem;color:var(--muted);margin:0.5rem 0 0;">Freiwillig \u2013 keine Voraussetzung, um einen Beratungstermin zu vereinbaren.</p>
        </div>
      </div>
    </section>

    <section style="max-width:680px;margin:0 auto;padding:2rem 1rem 0.5rem;">
      <details style="border:1px solid var(--border);border-radius:12px;overflow:hidden;">
        <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                        background:var(--ivory);list-style:none;user-select:none;font-weight:700;
                        font-size:0.95rem;color:var(--ink);">
          <span style="font-size:1.2rem;">&#9672;</span>
          <span style="flex:1;">Der Kompass im \u00dcberblick</span>
          <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
        </summary>
        <div style="padding:1rem 1.2rem 1.2rem;background:#fff;border-top:1px solid var(--border);">
          <p style="font-size:0.82rem;color:var(--muted);margin:0 0 1rem;font-style:italic;">
            Ein vollst\xe4ndiges Enneagramm-Universum &ndash; hier ein \xdcberblick:
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.5rem 1rem;">
            ${[
              ["&#9672;","Typensystem","9 Typen \u00b7 27 Subtypen \u00b7 3 Tests"],
              ["&#128101;","Beziehungen","Kindheit, F\u00fchrung, Partnerschaft"],
              ["&#127807;","Heilmittel","H\u00f6m., \u00d6le, Bachbl., Tee, Edelsteine"],
              ["&#127775;","Ber\u00fchmte Pers\u00f6nlichkeiten",(BERUEHMT_PORTRAITS.length + " Portr\u00e4ts aus Kultur, Musik & Gesellschaft")],
              ["&#128444;","Schaubilder","100+ farbige \u00dcbersichten"],
              ["&#128269;","Kriminalf\u00e4lle (Kriminalpsychologie)",(KRIMINAL_PORTRAITS.length + " psychologische T\u00e4terportr\u00e4ts")],
              ["&#127807;","Entwicklung","Heilungsweg, \u00dcbungen, Fragen"],
              ["&#127759;","Kultur & Lifestyle","Tiere, Natur, Lifestyle der 9 Typen"],
              ["&#128065;","Psychologie","Leidenschaft, Wunde, Ego-Struktur"],
              ["&#129812;","Philosophie","Schopenhauer, Rumi, Logismoi"],
              ["&#128172;","Wahrnehmung","Blick, Mikro, Verbal, Nonverbal"],
            ].map(([icon, title, sub]) => `
              <div style="display:flex;gap:0.5rem;align-items:flex-start;padding:0.35rem 0;">
                <span style="font-size:1rem;flex-shrink:0;margin-top:0.05rem;">${icon}</span>
                <div>
                  <div style="font-size:0.83rem;font-weight:700;color:var(--ink);">${title}</div>
                  <div style="font-size:0.76rem;color:var(--muted);line-height:1.4;">${sub}</div>
                </div>
              </div>`).join('')}
          </div>
          <div style="margin-top:1rem;text-align:center;">
            <button data-route="inhaltsverzeichnis"
              style="background:none;border:1px solid var(--gold);color:var(--copper);
                     border-radius:8px;padding:.4rem 1rem;font-size:0.82rem;cursor:pointer;">
              Vollst\xe4ndige Inhalts\xfcbersicht &#8594;
            </button>
          </div>
        </div>
      </details>
    </section>

    <section class="start-steps">
      <p class="start-steps__label">So funktioniert der Kompass</p>
      <div class="start-steps__grid">
        <div class="start-step">
          <span class="start-step__num">1</span>
          <h3 class="start-step__title">Typ & Subtyp bestimmen</h3>
          <p class="start-step__body">Ermitteln Sie Ihren Enneagrammtyp und Subtyp \u2014 \u00fcber den Typentest, die Wissensbasis oder eine Beratung.</p>
        </div>
        <div class="start-step">
          <span class="start-step__num">2</span>
          <h3 class="start-step__title">Subtyp-Profil erkunden</h3>
          <p class="start-step__body">Jede der 27 Subtyp-Seiten zeigt Heilmittel, TCM-Zuordnung, Kindheitspr\u00e4gung, Musik und Entwicklungswege.</p>
        </div>
        <div class="start-step">
          <span class="start-step__num">3</span>
          <h3 class="start-step__title">Heilung vertiefen</h3>
          <p class="start-step__body">Nutzen Sie den Heilmittel-Kompass, \u00e4therische \u00d6le und bei Bedarf eine pers\u00f6nliche Begleitung durch Detlef Rathmer.</p>
        </div>
      </div>
    </section>

    <section class="model-credit">
      <p class="model-credit__label">Hinter dem Modell</p>
      <p class="model-credit__text">Der Enneagramm-Kompass beruht auf der \u00fcber Jahre gemeinsam entwickelten Arbeit von <strong>Detlef Rathmer</strong> (Therapie &amp; Heilung) und <strong>David L. Rathmer</strong> (Enneagramm-Profiling f\u00fcr F\u00fchrungskr\u00e4fte &amp; Unternehmen).</p>
      <a class="model-credit__link" href="https://www.enneascholars.de" target="_blank" rel="noopener">Mehr zu Davids Arbeit \u2192 enneascholars.de</a>
    </section>

    <section style="max-width:680px;margin:1.4rem auto 0;padding:0 1rem;">
      <div style="background:rgba(180,120,0,0.07);border:1px solid var(--gold,#c4a456);border-radius:12px;padding:0.9rem 1.1rem;font-size:0.83rem;color:var(--ink);line-height:1.5;">
        <strong>\ud83d\udca1 Tipp:</strong> Der Kompass l\u00e4sst sich auf einem Tablet besonders \u00fcbersichtlich bedienen. Falls Sie noch eines suchen:
        <a href="https://www.amazon.de/Apple-iPad-mit-A16-Chip/dp/B0DZ768LXJ?linkCode=ll2&tag=enneagrammkom-21&linkId=a890798e4a26c6b4733dd802af4166a1&ref_=as_li_ss_tl" target="_blank" rel="noopener sponsored" style="color:var(--copper);font-weight:600;">Apple iPad</a>
        \u00b7
        <a href="https://www.amazon.de/Samsung-AI-Tablet-Speicher-Akkulaufzeit-Herstellergarantie/dp/B0DZJ7QQBJ?linkCode=ll2&tag=enneagrammkom-21&linkId=d9bc23c013f1ebef49df58cd82fa9613&ref_=as_li_ss_tl" target="_blank" rel="noopener sponsored" style="color:var(--copper);font-weight:600;">Samsung Galaxy Tab</a> (g\u00fcnstigere Alternative)
        <span style="color:var(--muted);"> \u2013 Werbung, Affiliate-Links.</span>
      </div>
    </section>

    ${hasHeilwissen() ? `
    <section id="bewertungen" style="max-width:680px;margin:2rem auto 0;padding:0 1rem;">
      <h2 style="font-size:1rem;font-weight:700;color:var(--ink);margin-bottom:0.3rem;">&#11088; Den Kompass bewerten</h2>
      <p style="font-size:0.85rem;color:var(--muted);margin-bottom:1rem;">Wie gef\u00e4llt Ihnen der Heilungskompass? Ihre Bewertung hilft anderen, sich zu orientieren.</p>
      <div id="bwrt-form" style="background:var(--ivory);border:1px solid var(--border);border-radius:12px;padding:1.2rem;">
        <div id="bwrt-sterne" style="display:flex;gap:0.5rem;font-size:2rem;cursor:pointer;margin-bottom:0.8rem;">
          ${[1,2,3,4,5].map(function(n){ return '<span data-s="' + n + '" style="opacity:0.3;transition:opacity .15s;">&#11088;</span>'; }).join('')}
        </div>
        <input id="bwrt-name" type="text" placeholder="Ihr Name (optional, z.\u202fB. Thomas S.)"
          style="width:100%;border:1px solid var(--border);border-radius:8px;
                 padding:0.6rem;font-size:0.9rem;font-family:inherit;background:#fff;
                 color:var(--ink);box-sizing:border-box;margin-bottom:0.5rem;" />
        <textarea id="bwrt-text" placeholder="Dein Kommentar (optional)..."
          style="width:100%;min-height:80px;border:1px solid var(--border);border-radius:8px;
                 padding:0.6rem;font-size:0.9rem;font-family:inherit;background:#fff;
                 color:var(--ink);resize:vertical;box-sizing:border-box;"></textarea>
        <button id="bwrt-senden" data-sterne="0" onclick="_bewertungSenden()"
          style="margin-top:0.8rem;background:var(--gold);color:var(--anthracite,#2c2c2c);
                 border:none;border-radius:8px;padding:0.6rem 1.4rem;
                 font-size:0.9rem;font-weight:700;cursor:pointer;">
          Bewertung absenden
        </button>
        <p id="bwrt-danke" style="display:none;color:var(--copper);font-size:0.88rem;margin-top:0.8rem;font-weight:600;">
          &#10003; Danke f\u00fcr Deine Bewertung! Sie wird nach Pr\u00fcfung freigeschaltet.
        </p>
      </div>
    </section>` : ''}

    <section id="community-bewertungen" style="max-width:680px;margin:1.5rem auto 0;padding:0 1rem;display:none;">
      <h2 style="font-size:1rem;font-weight:700;color:var(--ink);margin-bottom:1rem;">Stimmen aus der Community</h2>
      <div id="community-liste" style="display:flex;flex-direction:column;gap:0.8rem;"></div>
    </section>

    <section style="max-width:680px;margin:2rem auto 0;padding:0 1rem;">
      <h2 style="font-size:1rem;font-weight:700;color:var(--ink);margin-bottom:0.8rem;">\ud83c\udfac Der Kompass ausf\u00fchrlich erkl\u00e4rt</h2>
      <div style="position:relative;width:100%;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#000;box-shadow:0 8px 24px rgba(0,0,0,0.18);">
        <iframe src="https://www.youtube.com/embed/z-x9k4jdJfY" title="Enneagramm-Heilungskompass \u2013 Ausf\u00fchrliche Erkl\u00e4rung" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
      </div>
      <p style="font-size:0.82rem;color:var(--muted);margin-top:0.6rem;">10 Minuten \u2013 ein ausf\u00fchrlicher Rundgang durch alle Bereiche des Kompass.</p>
    </section>

    ${legalFooter()}
  `);
}

function dashboardPage() {
  const p = state.profile;
  const copy = text.routes.dashboard;
  return shell(`
    ${pageHeader("dashboard")}
    <section class="dashboard">
      <div class="profile-visual" style="box-shadow:0 0 0 3px ${typeColorFromCode(p.code)};position:relative;">
        ${getUserPhoto()
          ? `<img id="user-photo-img" src="${getUserPhoto()}" alt="Mein Foto" style="position:absolute;inset:0;width:100%;height:100%;margin:0;object-fit:cover;border-radius:inherit;" />`
          : (p.image ? `<img src="${p.image}" alt="${text.meta.resonanceImageAltPrefix} ${p.code}" style="position:absolute;top:${tierAvatarTop(p.code)};left:${tierAvatarLeft(p.code)};width:140%;height:140%;margin:0;object-fit:cover;" />` : `<div class="profile-badge profile-badge--large">${p.emoji || p.code}</div>`)
        }
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;margin-top:0.5rem;gap:0.4rem;">
        <button id="user-photo-menu-btn" style="background:var(--surface);border:1px solid var(--border);color:var(--muted);border-radius:20px;padding:0.3rem 0.9rem;font-size:0.78rem;cursor:pointer;display:inline-flex;align-items:center;gap:0.3rem;">
          \ud83d\udcf7 ${getUserPhoto() ? 'Foto \u25be' : 'Eigenes Foto'}
        </button>
        <input type="file" accept="image/*" id="user-photo-input" style="display:none;" />
        <div id="user-photo-menu" style="display:none;flex-direction:column;background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;width:180px;">
          <label id="user-photo-btn" style="display:block;padding:0.55rem 1rem;font-size:0.82rem;cursor:pointer;color:var(--text);text-align:center;">\ud83d\udcf7 Foto \u00e4ndern
            <input type="file" accept="image/*" id="user-photo-input2" style="display:none;" />
          </label>
          ${getUserPhoto() ? `<button id="user-photo-del" style="display:block;width:100%;text-align:center;padding:0.55rem 1rem;font-size:0.82rem;cursor:pointer;background:none;border:none;border-top:1px solid var(--border);color:#c0392b;">\u2715 Foto entfernen</button>` : ''}
        </div>
      </div>
      <div class="dashboard__copy">
        <p class="eyebrow">${copy.greeting} \u00b7 ${p.center} \u00b7 ${p.typeLabel || ''}</p>
        <h1>${p.code} \u00b7 ${p.title}</h1>
        <p class="subtle-archetype">${p.titleAlt ? `auch: ${p.titleAlt} \u00b7 ` : ''}${copy.animalBackground} ${p.archetype}</p>
        ${p.variant ? `<span class="variant-tag variant-tag--${p.variant.toLowerCase().replace('\u00e4','ae').replace('\u00fc','ue')}">${p.variant}</span>` : ''}
        <p class="focus">Dein Fokus als ${p.code}: ${p.focus}</p>
        <div class="question-box">
          <span>${copy.organismQuestion}</span>
          <p>${p.organismQuestion}</p>
        </div>
        <button class="ghost-link" data-route="profile">Profil wechseln \u2192</button>
        <button class="ghost-link" data-route="typalbum" style="margin-top:0.3rem;font-size:0.82rem;">\ud83d\uddc2 Mein Typalbum \u2192</button>
        <a href="./vorstellung.html#video" target="_blank" rel="noopener" class="ghost-link" style="margin-top:0.3rem;font-size:0.82rem;text-decoration:none;display:inline-block;">\ud83c\udfac Vorstellungsvideo ansehen \u2192</a>
        <button id="push-enable-btn" class="ghost-link" style="margin-top:0.3rem;font-size:0.78rem;color:var(--muted);">\ud83d\udd14 Push-Benachrichtigungen aktivieren</button>
        <button class="ghost-link voice-mute-btn-inline" onclick="toggleVoiceMute()" style="margin-top:0.3rem;font-size:0.78rem;color:${isVoiceMuted() ? "var(--muted)" : "var(--gold)"};">${isVoiceMuted() ? "\ud83d\udd07 Begr\u00fc\u00dfungston aus \u2013 tippen zum Aktivieren" : "\ud83d\udd0a Begr\u00fc\u00dfungston an \u2013 tippen zum Deaktivieren"}</button>
      </div>
    </section>
    <section class="daily-grid">
      ${infoCard(copy.dailyImpulse, dailyPick(p.daily.impulse))}
      ${infoCard(copy.reflectionQuestion, dailyPick(p.daily.question))}
      ${infoCard(copy.nextStep, dailyPick(p.daily.step))}
    </section>
    <section class="quick-actions">
      <button class="primary" data-route="reflection">${copy.reflectToday}</button>
      <button class="secondary" data-route="path">${copy.viewPath}</button>
      <button class="secondary" data-route="tools">${copy.chooseTool}</button>
      <button class="secondary" data-route="knowledge">${copy.checkKnowledge}</button>
    </section>
    <section class="narrow" style="margin-top:2.5rem;">
      <blockquote class="kompass-zitat">
        <p>\u201eWir sehen die Welt nicht so, wie sie (objektiv) ist, sondern wie wir sie (subjektiv) wahrnehmen &ndash; entsprechend unseres Enneagrammtyps."</p>
        <p style="margin-top:0.75rem;">Daraus ergeben sich alle Probleme zwischen Menschen, aber potenziell auch alle L\u00f6sungen dieser zwischenmenschlichen Probleme und somit letztlich alle Probleme und L\u00f6sungen dieser Welt.</p>
        <footer>\u2014 Detlef Rathmer, 2026</footer>
      </blockquote>
    </section>
  `);
}

function reflectionPage() {
  const p = state.profile;
  const copy = text.routes.reflection;
  const saved = getJournal();
  return shell(`
    ${pageHeader("reflection")}
    <section class="narrow">
      <p class="eyebrow">${p.code} \u00b7 ${copy.suffix}</p>
      <h1>${copy.headline}</h1>
      <label class="journal">
        <span>${p.daily.question}</span>
        <textarea id="journalText" rows="9" placeholder="${copy.placeholder}">${saved}</textarea>
      </label>
      <div class="form-row">
        <button class="primary" id="saveJournal">${copy.save}</button>
        <span id="saveStatus" role="status"></span>
      </div>
      <div class="soft-note">
        <strong>${copy.smallStep}</strong>
        <p>${p.daily.step}</p>
      </div>
    </section>
  `);
}

function pathPage() {
  const p = state.profile;
  const copy = text.routes.path;
  return shell(`
    ${pageHeader("path")}
    <section class="narrow centered">
      <p class="eyebrow">${p.code} \u00b7 ${copy.suffix}</p>
      <h1>${copy.headline}</h1>
      <p class="lead-small">${p.coreSentence}</p>
    </section>
    <section class="path-grid">
      ${listPanel(copy.pattern, p.pattern, "pattern")}
      <div class="bridge">${compassMark("small")}<span>${copy.bridge}</span></div>
      ${listPanel(copy.growth, p.growth, "growth")}
    </section>
  `);
}

function toolSlug(name) {
  return name.toLowerCase().replace(/[\u00e4\u00f6\u00fc]/g, c => ({\u00e4:"ae",\u00f6:"oe",\u00fc:"ue"}[c])).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function toolsPage() {
  const p = state.profile;
  const copy = text.routes.tools;
  return shell(`
    ${pageHeader("tools")}
    <section class="narrow centered">
      <p class="eyebrow">${p.code} \u00b7 ${copy.suffix}</p>
      <h1>${copy.headline}</h1>
      <p class="lead-small">${p.daily.body}</p>
    </section>
    <section class="tool-grid">
      ${p.tools
        .map(
          (tool) => `
            <button class="tool-card tool-card--link" data-route="tool/${toolSlug(tool.name)}">
              <span>${tool.label}</span>
              <h2>${tool.name}</h2>
              <p>${tool.text}</p>
              <span class="tool-card__arrow">Details \u2192</span>
            </button>
          `
        )
        .join("")}
      <button class="tool-card tool-card--link" data-route="tcm">
        <span>TCM \u00b7 Meridiane \u00b7 Akupunktur</span>
        <h2>TCM-Profil ansehen</h2>
        <p>Ihren pers\u00f6nlichen TCM-Meridian, Organzeiten und Akupunktur-Empfehlungen ansehen.</p>
        <span class="tool-card__arrow">\u00d6ffnen \u2192</span>
      </button>
      <button class="tool-card tool-card--link" data-route="praxistipps-heilpraktiker">
        <span>K\u00f6rper \u00b7 Alltag \u00b7 Heilpraxis</span>
        <h2>Praxistipps vom Heilpraktiker</h2>
        <p>Konkrete, k\u00f6rperorientierte Impulse aus der heilpraktischen Praxis von Detlef Rathmer \u2013 erg\u00e4nzend zum Enneagramm-Heilungsweg.</p>
        <span class="tool-card__arrow">Ansehen \u2192</span>
      </button>
    </section>
  `);
}

function toolDetailPage(slug) {
  const p = state.profile;
  const tool = p.tools.find(t => toolSlug(t.name) === slug);
  if (!tool) { go("tools"); return ""; }

  // Subtyp-spezifische Daten aus Wissensbasis
  const knEntry = subtypeEntry(getProfile());
  const twoPoints = knEntry?.bodySignature?.twoPoints || null;

  const DETAIL_INSTRUCTIONS = {
    "atemimpuls": {
      intro: "Der Atemimpuls ist eine einfache Atemtechnik, die das Nervensystem in Sekunden beruhigt. L\u00e4ngeres Ausatmen aktiviert den Parasympathikus \u2014 das Gegenteil von Stress.",
      steps: [
        "Setzen oder stellen Sie sich aufrecht hin.",
        "Atmen Sie durch die Nase ein \u2014 z\u00e4hlen Sie dabei langsam bis 4.",
        "Atmen Sie durch den Mund aus \u2014 z\u00e4hlen Sie langsam bis 6.",
        "Wiederholen Sie das dreimal.",
        "Bemerken Sie, wie Schultern und Kiefer weicher werden."
      ],
      hinweis: "Ideal in Stresssituationen, vor wichtigen Gespr\u00e4chen oder als Abendritual."
    },
    "2-punkte-integration": {
      intro: "Die Zwei-Punkte-Integration verbindet K\u00f6rperbewusstsein mit Gegenw\u00e4rtigkeit. Sie hilft dabei, Anspannung zu halten ohne zu k\u00e4mpfen \u2014 bis der K\u00f6rper von selbst mehr Raum findet.",
      steps: [
        "Legen Sie eine Hand auf Punkt 1, die andere auf Punkt 2 (siehe oben).",
        "Halten Sie beide Punkte gleichzeitig im Bewusstsein \u2014 wechseln Sie nicht zwischen ihnen.",
        "Atmen Sie ruhig weiter und warten Sie, ohne etwas erzwingen zu wollen.",
        "Nichts ver\u00e4ndern. Nichts korrigieren. Nur halten und atmen.",
        "Beobachten Sie, wie sich das Verh\u00e4ltnis der beiden Punkte ver\u00e4ndert."
      ],
      hinweis: "Kein K\u00e4mpfen \u2014 nur Beobachten. Der K\u00f6rper l\u00f6st sich, wenn er beides gleichzeitig sp\u00fcren darf."
    },
    "merksatz": {
      intro: "Der Merksatz ist ein pers\u00f6nlicher Leitsatz, der den Wesenskern Ihres Subtyps in einem Satz zusammenfasst. Regelm\u00e4\u00dfig wiederholt, wirkt er wie ein innerer Kompass.",
      steps: [
        "Lesen Sie den Merksatz laut vor.",
        "Atmen Sie tief ein und sprechen Sie ihn dann langsam nochmals \u2014 als w\u00fcrden Sie ihn f\u00fchlen statt nur denken.",
        "Lassen Sie einen Moment stillen Nachklingens entstehen.",
        "Notieren Sie ihn an einem sichtbaren Ort (Spiegel, Notizbuch, Handy-Wallpaper)."
      ],
      hinweis: "Der Merksatz wirkt nicht durch einmaliges Lesen, sondern durch regelm\u00e4\u00dfige Wiederholung \u2014 besonders morgens und abends."
    },
    "koerperuebung": {
      intro: "K\u00f6rper\u00fcbungen verankern das Bewusstsein im K\u00f6rper \u2014 weg vom Kopf, weg vom Stress. Was der K\u00f6rper sp\u00fcrt, kann der Geist loslassen.",
      steps: [
        "Stellen Sie sich aufrecht hin, F\u00fc\u00dfe h\u00fcftbreit auseinander.",
        "Sp\u00fcren Sie das Gewicht Ihrer F\u00fc\u00dfe auf dem Boden \u2014 dr\u00fccken Sie leicht auf.",
        "Bemerken Sie Ihren R\u00fccken: aufrecht aber nicht starr.",
        "Legen Sie eine Hand auf den Bauch, die andere auf die Brust.",
        "Atmen Sie dreimal tief in den Bauch \u2014 die Bauchhand hebt sich, die Brusthand bleibt ruhiger.",
        "Beantworten Sie erst danach, was Sie besch\u00e4ftigt."
      ],
      hinweis: "Diese \u00dcbung kann jederzeit und \u00fcberall gemacht werden \u2014 auch im Sitzen."
    },
    "heilmittel-impuls": {
      intro: "Der Heilmittel-Kompass \u00fcbersetzt Ihr Subtyp-Muster in ein heilkundliches Symbolfeld. Jedes Mittel spricht eine bestimmte Ebene an \u2014 k\u00f6rperlich, seelisch und energetisch.",
      steps: [
        '\u00d6ffnen Sie den <button class="inline-link" data-route="healing" data-scroll-to="heilmittel-kompass" style="background:none;border:none;padding:0;color:var(--copper);text-decoration:underline;cursor:pointer;font-family:inherit;font-size:inherit;">Heilmittel-Kompass \u2192</button> und betrachten Sie, welches Mittel Ihre Aufmerksamkeit anzieht.',
        "Lesen Sie die zugeh\u00f6rige Bedeutung \u2014 lassen Sie sie wirken, ohne sofort zu analysieren.",
        "W\u00e4hlen Sie heute ein Mittel aus: Hom\u00f6opathie, Bachbl\u00fcte, Sch\u00fc\u00dfler-Salz, Edelstein oder Tee.",
        "Verwenden Sie es bewusst \u2014 mit dem Gedanken an Ihr Heilungsthema.",
        "Notieren Sie abends, was Sie bemerkt haben."
      ],
      hinweis: "Heilmittel wirken unterst\u00fctzend, ersetzen aber keine therapeutische Begleitung. F\u00fcr eine individuelle Beratung steht Detlef Rathmer zur Verf\u00fcgung."
    },
    "in-stille-sitzen": {
      intro: "Vollkommen still sitzen ist eine der wirkungsvollsten \u00dcbungen aus dem Enneagramm-Heilungsmodell. Der K\u00f6rper zeigt seine eigene Intelligenz \u2014 wenn man aufh\u00f6rt, ihn zu steuern.",
      steps: [
        "Setzen Sie sich aufrecht und bequem hin \u2014 R\u00fccken gerade, H\u00e4nde auf den Oberschenkeln.",
        "Schlie\u00dfen Sie die Augen. Lassen Sie alle Kontrolle los.",
        "Tun Sie zwei Minuten lang nichts \u2014 keine Korrektur, keine Bewegung.",
        "Beobachten Sie, was der K\u00f6rper von alleine tut: Atem, Spannung, Impulse.",
        "\u00d6ffnen Sie danach die Augen. Bemerken Sie den Unterschied."
      ],
      hinweis: "Wirkung und Ziel: Der K\u00f6rper zeigt seine eigene Intelligenz. In dieser Zeit (nicht mehr!) kann sich Wesentliches offenbaren."
    },
    "aromatherapie": {
      intro: "\u00c4therische \u00d6le sprechen das limbische System direkt an \u2014 sie wirken schneller als Worte. Das passende \u00d6l f\u00fcr Ihren Subtyp unterst\u00fctzt die Themen, an denen Sie gerade arbeiten.",
      steps: [
        `\u00d6ffnen Sie das Fl\u00e4schchen Ihres Subtyp-\u00d6ls \u2014 schauen Sie vorher kurz auf Ihre <button class="inline-link" data-route="oils" data-scroll-to="oil-type-${p.code.replace(/\D/g,'')}" style="background:none;border:none;padding:0;color:var(--copper);text-decoration:underline;cursor:pointer;font-family:inherit;font-size:inherit;">\u00d6l-Karte \u2192</button>.`,
        "Geben Sie einen Tropfen auf Ihre Handfl\u00e4chen und reiben Sie sie sanft aneinander.",
        "Halten Sie die H\u00e4nde vor Nase und Mund \u2014 atmen Sie dreimal tief ein.",
        "Lassen Sie den Duft wirken, ohne ihn zu bewerten.",
        "Sprechen Sie dabei innerlich das Heilungsthema Ihres Subtyps aus."
      ],
      hinweis: "\u00c4therische \u00d6le immer verd\u00fcnnt verwenden. Zur vollst\u00e4ndigen \u00d6l-Zuordnung aller 27 Subtypen \u2192 \u00d6le-Seite in der App."
    },
    "blickqualitaet": {
      intro: "Die Blickqualit\u00e4t ist das sichtbarste Merkmal Ihres Enneagramm-Subtyps. Wer seinen eigenen Blick kennt, erkennt sein Muster \u2014 und kann bewusst eine andere Qualit\u00e4t w\u00e4hlen.",
      steps: [
        "Betrachten Sie das Profil-Schaubild oben: Wie ist Ihr typischer Blick beschrieben?",
        "Stellen Sie sich vor einen Spiegel oder schlie\u00dfen Sie die Augen und stellen Sie sich vor, wie Sie gerade schauen.",
        "Bemerken Sie: Ist der Blick eher eng, weit, pr\u00fcfend, suchend, weich, distanziert?",
        "W\u00e4hlen Sie bewusst eine andere Blickqualit\u00e4t \u2014 einen Moment lang weich, offen, ruhig.",
        "Beobachten Sie, wie sich das auf Ihre innere Haltung auswirkt."
      ],
      hinweis: "Blickqualit\u00e4t ist keine Technik \u2014 sie ist ein Spiegel. Wer seinen Blick ver\u00e4ndert, ver\u00e4ndert seinen inneren Zustand."
    }
  };

  const detail = DETAIL_INSTRUCTIONS[slug] || null;

  // Schaubild-Zuordnung je Werkzeug-Slug
  const TOOL_PAGE_MAP = {
    "2-punkte-integration": "page-2",
    "atemimpuls":           "page-3",
    "koerperuebung":        "page-3",
    "in-stille-sitzen":     "page-3",
    "merksatz":             "page-5",
    "heilmittel-impuls":    "page-4",
    "blickqualitaet":       "page-1",
  };
  const toolPageKey = TOOL_PAGE_MAP[slug] || null;
  const toolPageImg = (toolPageKey && knEntry && knEntry.visualPages)
    ? (knEntry.visualPages.find(pg => pg.src.includes(toolPageKey)) || null)
    : null;
  const seite2Block = toolPageImg ? `
    <figure class="vollseite-karte" style="margin-bottom:1.2rem;">
      <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
      <div class="card-pg-wrap">
        <img src="${cdnImg(toolPageImg.src)}" alt="${toolPageImg.alt}" class="vollseite-karte__img" loading="lazy"
          onerror="this.closest('.vollseite-karte').style.display='none'" />
        <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
      </div>
      <figcaption class="vollseite-karte__titel">${toolPageImg.title || ""}</figcaption>
    </figure>
  ` : "";
  const twoPointsBlock = (slug === "2-punkte-integration" && twoPoints) ? (() => {
    const pts = [twoPoints.point1, twoPoints.point2].filter(Boolean);
    const ptsHtml = pts.map((pt, i) => `
      <div style="display:flex;gap:1rem;align-items:flex-start;padding:.75rem 0;${i > 0 ? "border-top:1px solid rgba(45,74,62,.12);" : ""}">
        <div style="min-width:2rem;height:2rem;border-radius:50%;background:#2d4a3e;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;flex-shrink:0;">${i + 1}</div>
        <div>
          <strong style="font-size:1rem;color:#1a2e28;">${pt.name}</strong>
          <span style="font-size:.85rem;color:#4a6e5e;display:block;margin-bottom:.3rem;">${pt.location}</span>
          ${pt.need && pt.need.length ? `<ul style="margin:.2rem 0 0;padding-left:1.1rem;font-size:.88rem;color:#2d4a3e;line-height:1.6;">${pt.need.map(n => `<li>${n}</li>`).join("")}</ul>` : ""}
        </div>
      </div>
    `).join("");
    const microHtml = twoPoints.microInstructions && twoPoints.microInstructions.length
      ? `<div style="margin-top:.75rem;padding-top:.75rem;border-top:1px solid rgba(45,74,62,.15);">
           <p style="font-size:.82rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#2d4a3e;margin:0 0 .4rem;">Mikro-Anleitung</p>
           <ul style="margin:0;padding-left:1.1rem;font-size:.9rem;line-height:1.8;color:#2a3e36;">
             ${twoPoints.microInstructions.map(m => `<li>${m}</li>`).join("")}
           </ul>
         </div>`
      : "";
    return `
      <div style="background:#e8f2ec;border:1.5px solid #2d4a3e;border-radius:14px;padding:1.5rem;margin-bottom:1.2rem;">
        <p style="font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#2d4a3e;margin:0 0 1rem;">Ihre zwei Punkte \u00b7 ${p.code}</p>
        ${ptsHtml}
        ${microHtml}
      </div>
    `;
  })() : "";

  const aromatherapieBlock = (slug === "aromatherapie") ? (() => {
    const oel = oelForType(p.code);
    if (!oel) return "";
    return `
      ${oilCard(oel)}
      <p style="text-align:center;margin:.5rem 0 1.2rem;">
        <button class="ghost-link" data-route="oils" style="font-size:.88rem;">Alle 9 \u00d6l-Karten ansehen \u2192</button>
      </p>
    `;
  })() : "";

  return shell(`
    <section class="narrow" style="padding:1.5rem 1rem 0;">
      <button class="ghost-link" data-route="tools">\u2190 Zur\u00fcck zu Werkzeuge</button>
    </section>
    <section class="narrow centered" style="padding:1rem 1rem 0;">
      <p class="eyebrow">${tool.label}</p>
      <h1 style="font-size:1.8rem;">${tool.name}</h1>
      <p style="font-style:italic;color:var(--text-muted,#888);font-size:.95rem;">${p.code} \u00b7 Ihr Werkzeug f\u00fcr heute</p>
    </section>

    <section class="narrow" style="padding:1rem 1rem 2rem;">
      ${aromatherapieBlock}
      ${seite2Block}
      ${twoPointsBlock}

      <div style="background:var(--cream,#f9f6f0);border-radius:14px;padding:1.5rem;margin-bottom:1.2rem;">
        <p style="font-size:1.05rem;line-height:1.7;margin:0;">${tool.text}</p>
      </div>

      ${detail ? `
        <div style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:14px;padding:1.5rem;margin-bottom:1.2rem;">
          <p style="font-size:.95rem;line-height:1.7;margin:0 0 1.2rem;color:#444;">${detail.intro}</p>
          <h3 style="font-size:1rem;margin:0 0 .75rem;">So geht es:</h3>
          <ol style="padding-left:1.2rem;margin:0 0 1.2rem;line-height:1.8;font-size:.95rem;">
            ${detail.steps.map(s => `<li style="margin-bottom:.4rem;">${s}</li>`).join("")}
          </ol>
          <p style="font-size:.88rem;color:#888;font-style:italic;margin:0;border-top:1px solid #eee;padding-top:.8rem;">\ud83d\udca1 ${detail.hinweis}</p>
        </div>
      ` : ""}

      ${["atemimpuls","koerperuebung","in-stille-sitzen"].includes(slug) ? bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Atem\u00fcbungen, Stille, K\u00f6rperbewusstsein \u2013 sieben einfache und wirkungsvolle Wege zu sich selbst.", "7 Wege zu Dir selbst") : ""}

      <div style="display:flex;flex-direction:column;gap:.75rem;">
        <button class="secondary" data-route="tools">Zur\u00fcck zu allen Werkzeugen</button>
        <button class="secondary" data-route="tcm">TCM-Profil &amp; Akupunktur ansehen</button>
        <button class="secondary" data-route="subtype/${getProfile()}">Mein Subtyp-Kompass</button>
      </div>
    </section>
  `);
}

// Buchtipp-Banner: bookTip(buchId, teaser)
// buchId = Schl\u00fcssel aus buecher-daten.js, teaser = kurze Einladung
const VERLAG_BASE = "https://www.verlagshausrathmer.com/buch.html?slug=";
function bookTip(buchId, teaser, title) {
  return `
    <a class="book-tip" href="${VERLAG_BASE}${buchId}" target="_blank" rel="noopener">
      <span class="book-tip__icon">\ud83d\udcd6</span>
      <div class="book-tip__text">
        <strong>Buchtipp: \u00bb${title}\u00ab</strong>
        <span>${teaser}</span>
      </div>
      <span class="book-tip__arrow">\u2192</span>
    </a>
  `;
}

const ANIMAL_RESEARCHER_MATCHES = [
  {route:"beruehmte-dian-fossey", name:"Dian Fossey", subtyp:"SE7w8", tier:"Gorilla"},
  {route:"beruehmte-jennifer-mather", name:"Jennifer Mather", subtyp:"SO5w6", tier:"Oktopus"},
  {route:"beruehmte-laurie-marker", name:"Dr. Laurie Marker", subtyp:"SO3w4", tier:"Gepard"},
  {route:"beruehmte-grahame-webb", name:"Prof. Grahame Webb", subtyp:"SX8w7", tier:"Krokodil"},
  {route:"beruehmte-birute-galdikas", name:"Dr. Birut\xe9 Galdikas", subtyp:"SE8w9", tier:"Orang-Utan"},
  {route:"beruehmte-peter-sharpe", name:"Dr. Peter Sharpe", subtyp:"SE1w9", tier:"Adler"},
  {route:"beruehmte-konrad-lorenz", name:"Konrad Lorenz", subtyp:"SO1w9", tier:"Gans"},
  {route:"beruehmte-camille-fritsch", name:"Dr. Camille Fritsch", subtyp:"SE2w1", tier:"Flusspferd"},
  {route:"beruehmte-thea-litschka-koen", name:"Thea Litschka-Koen", subtyp:"SX1w2", tier:"Schwarze Mamba"},
  {route:"beruehmte-bill-haast", name:"Bill Haast", subtyp:"SX1w9", tier:"Schwarze Mamba"},
  {route:"beruehmte-romulus-whitaker", name:"Romulus Whitaker", subtyp:"SX1w2", tier:"Schwarze Mamba"},
  {route:"beruehmte-winifred-charlesworth", name:"Mrs. Winifred Charlesworth", subtyp:"SO2w1", tier:"Golden Retriever"},
  {route:"beruehmte-bernard-faye", name:"Dr. Bernard Faye", subtyp:"SX2w1", tier:"Kamel"},
  {route:"beruehmte-marlene-zuk", name:"Prof. Dr. Marlene Zuk", subtyp:"SX3w4", tier:"Pfau"},
  {route:"beruehmte-derek-goodwin", name:"Derek Goodwin", subtyp:"SE4w5", tier:"Taube"},
  {route:"beruehmte-mariella-superina", name:"Dr. Mariella Superina", subtyp:"SO4w5", tier:"Gürteltier"},
  {route:"beruehmte-ingo-zimmermann", name:"Prof. Dr. Ingo Zimmermann", subtyp:"SE5w4", tier:"Eule"},
  {route:"beruehmte-hugh-warwick", name:"Hugh Warwick", subtyp:"SX5w4", tier:"Igel"},
  {route:"beruehmte-anne-mcbride", name:"Dr. Anne McBride", subtyp:"SE6w5", tier:"Kaninchen"},
  {route:"beruehmte-marta-manser", name:"Prof. Dr. Marta Manser", subtyp:"SO6w5", tier:"Erdmännchen"},
  {route:"beruehmte-tim-clutton-brock", name:"Prof. Tim Clutton-Brock", subtyp:"SO6w5", tier:"Erdmännchen"},
  {route:"beruehmte-david-mech", name:"Dr. L. David Mech", subtyp:"SX6w5", tier:"Wolf"},
  {route:"beruehmte-douglas-smith", name:"Dr. Douglas W. Smith", subtyp:"SX6w5", tier:"Wolf"},
  {route:"beruehmte-frank-rosell", name:"Prof. Dr. Frank Rosell", subtyp:"SO7w6", tier:"Biber"},
  {route:"beruehmte-dietland-mueller-schwarze", name:"Prof. Dr. Dietland Müller-Schwarze", subtyp:"SO7w6", tier:"Biber"},
  {route:"beruehmte-frans-de-waal", name:"Prof. Dr. Frans de Waal", subtyp:"SX7w6", tier:"Schimpanse"},
  {route:"beruehmte-christophe-boesch", name:"Prof. Dr. Christophe Boesch", subtyp:"SX7w8", tier:"Schimpanse"},
  {route:"beruehmte-jill-pruetz", name:"Dr. Jill Pruetz", subtyp:"SX7w6", tier:"Schimpanse"},
  {route:"beruehmte-paris-hilton", name:"Paris Hilton", subtyp:"SX4w3", tier:"Chihuahua"},
  {route:"beruehmte-nikola-tesla", name:"Nikola Tesla", subtyp:"SO7w6", tier:"Biber"},
  {route:"beruehmte-laurence-frank", name:"Dr. Laurence Frank", subtyp:"SO8w7", tier:"Löwe"},
  {route:"beruehmte-cynthia-moss", name:"Dr. Cynthia Moss", subtyp:"SE9w1", tier:"Elefant"},
  {route:"beruehmte-alan-mcelligott", name:"Dr. Alan McElligott", subtyp:"SO9w1", tier:"Büffel"},
  {route:"beruehmte-ana-salceda", name:"Ana Salceda", subtyp:"SX9w1", tier:"Faultier"},
  {route:"beruehmte-lucy-cooke", name:"Lucy Cooke", subtyp:"SX9w8", tier:"Faultier"},
];

function animalResearcherMatchBlock(currentRoute) {
  const others = ANIMAL_RESEARCHER_MATCHES.filter(m => m.route !== currentRoute);
  if (!others.length) return "";
  const items = others.map(m =>
    `<button class="related-link-btn" data-route="${m.route}" style="background:none;border:1px solid var(--gold);color:var(--copper);border-radius:20px;padding:.35rem .95rem;font-size:0.82rem;font-family:'EB Garamond',serif;cursor:pointer;white-space:nowrap;">${m.name} (${m.subtyp}) – ${m.tier} &#8594;</button>`
  ).join("");
  return `
    <details style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid var(--border);">
      <summary style="cursor:pointer;font-size:0.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);">&#10022;&nbsp;Tierforscher-\xdcbereinstimmung: weitere Beispiele</summary>
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.75rem;">${items}</div>
    </details>
  `;
}

function relatedLinks(links) {
  if (!links || !links.length) return "";
  const ALBUM_KEYS = ["jazz", "musik", "stille", "songs", "lieder", "alben", "homoeopathie-songs"];
  const PORTRAIT_PREFIXES = ["beruehmte-", "kriminalpsychologie-", "astrologie-"];
  const isAlbum    = r => ALBUM_KEYS.some(k => r.includes(k));
  const isPortrait = r => PORTRAIT_PREFIXES.some(p => r.startsWith(p) && r.length > p.length);
  const hasAlbum    = links.some(l => isAlbum(l.route));
  const hasPortrait = links.some(l => isPortrait(l.route));
  const hasOverview = links.some(l => !isAlbum(l.route) && !isPortrait(l.route));
  const heading = hasAlbum && hasOverview       ? "\xc4hnliche \xdcbersichten und Alben"
                : hasAlbum                      ? "\xc4hnliche Alben"
                : hasPortrait && hasOverview    ? "\xc4hnliche Portr\xe4ts und \xdcbersichten"
                : hasPortrait                   ? "\xc4hnliche Portr\xe4ts"
                :                                "\xc4hnliche \xdcbersichten";
  const buttons = links.map(({route, label}) =>
    `<button class="related-link-btn" data-route="${route}" style="background:none;border:1px solid var(--gold);color:var(--copper);border-radius:20px;padding:.35rem .95rem;font-size:0.82rem;font-family:'EB Garamond',serif;cursor:pointer;white-space:nowrap;">${label} &#8594;</button>`
  ).join("");
  return `
    <div style="margin-top:2rem;padding-top:1.25rem;border-top:1px solid var(--border);">
      <p style="font-size:0.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:0 0 .6rem;">&#10022;&nbsp;${heading}</p>
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;">${buttons}</div>
    </div>
  `;
}

function healingPage() {
  const code = getProfile();
  // Replace #healing in browser history with #subtype/code so back-button works correctly
  history.replaceState(null, "", "#subtype/" + code);
  state.route = "subtype/" + code;
  window._currentRoute = state.route;
  return subtypePage(code);
}

function oelForType(code) {
  const num = parseInt(String(code).replace(/\D/g, ""), 10);
  return aetherischeOele.find((o) => o.typ === num) || null;
}

function oilCard(oel) {
  const c = text.routes.oils;
  return `
    <article class="oil-card" id="oil-type-${oel.typ}">
      <div class="oil-card__image">
        <img src="${oel.image}" alt="${c.woundLabel} ${oel.typ} \u00b7 ${oel.name}" loading="lazy" />
      </div>
      <div class="oil-card__body">
        <span class="oil-card__type">${oel.typLabel}</span>
        <h3>${oel.name}</h3>
        <p class="oil-card__wound"><strong>${c.woundLabel}:</strong> \u201e${oel.urWunde}\u201c</p>
        <p class="oil-card__effect">${oel.wirkung}</p>
        ${oel.vertiefung ? `<p class="oil-card__text">${oel.vertiefung}</p>` : ""}
        ${AFFILIATE_LINKS.oel[oel.name] ? affiliateBoxHtml("oel", oel.name) : ""}
      </div>
    </article>
  `;
}

function oilsPage() {
  const copy = text.routes.oils;
  return shell(`
    ${pageHeader("oils")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">${copy.eyebrow}</p>
        <h1>${copy.headline}</h1>
        <p class="lead-small">${copy.lead}</p>
      </div>
      <aside>
        <span>${copy.linked}</span>
        <strong>${copy.linkedRef}</strong>
        <p>${copy.linkedText}</p>
      </aside>
    </section>
    <section class="knowledge-grid">
      <article class="knowledge-card knowledge-card--expanded">
        <h2>${copy.cardsTitle}</h2>
        <div class="oil-grid">
          ${aetherischeOele.map(oilCard).join("")}
        </div>
        <p class="remedy-note">${copy.note}</p>
        ${bookTip("die-enneagramm-aromatherapie", "9 Typen, 9 Urwunden, 9 Seelend\u00fcfte \u2013 \u00e4therische \u00d6le als Zugang zur Tiefenebene des Charakters.", "Die Enneagramm-Aromatherapie")}
      </article>
    </section>
  `);
}

function tcmForType(code) {
  const num = parseInt(String(code).replace(/\D/g, ""), 10);
  return tcmData.find((t) => t.typ === num) || null;
}

function tcmCard(tcm) {
  const c = text.routes.tcm;
  return `
    <article class="tcm-card" style="--tcm-element-color:${tcm.elementFarbe}">
      <div class="tcm-card__header">
        <span class="tcm-card__type">${tcm.typLabel}</span>
        <button class="tcm-card__element-badge" data-tcm-element="${tcm.element}" title="Mehr \u00fcber das ${tcm.element}-Element">${tcm.element} \u2197</button>
      </div>
      <h3 class="tcm-card__meridian">${tcm.meridian}</h3>
      <div class="tcm-card__meta">
        <span class="tcm-card__organzeit">\u23f1 ${tcm.organzeit}</span>
        <span class="tcm-card__polaritaet">${tcm.polaritaet} \u00b7 ${tcm.leitorgan}</span>
      </div>
      <p class="tcm-card__symptom">${tcm.symptom}</p>
      <p class="tcm-card__ausgleich"><strong>${c.ausgleichLabel}:</strong> ${tcm.ausgleich}</p>
      <div class="tcm-card__details">
        <h4>${c.empfehlungLabel}</h4>
        <ul>${tcm.empfehlung.map((e) => `<li>${e}</li>`).join("")}</ul>
        <h4>${c.tagesplanLabel}</h4>
        <ol class="tcm-tagesplan">
          ${tcm.tagesplan.map((s) => `<li><span class="tcm-tagesplan__time">${s.uhrzeit}</span><span class="tcm-tagesplan__label">${s.label}</span><span class="tcm-tagesplan__text">${s.text}</span></li>`).join("")}
        </ol>
      </div>
    </article>
  `;
}

function tcmInlineBlock(tcm) {
  if (!tcm) return "";
  const c = text.routes.tcm;
  return `
    <div class="inline-section inline-section--tcm" data-collapsed="true">
      <button class="inline-section__toggle" aria-expanded="false">
        <span class="inline-section__label">
          <span class="inline-section__tag">TCM</span>
          ${tcm.element}-Element \u00b7 ${tcm.meridian}
        </span>
        <span class="inline-section__arrow">\u25bc</span>
      </button>
      <div class="inline-section__body">
        <div class="tcm-inline">
          <div class="tcm-inline__meta">
            <button class="tcm-inline__element" style="background:${tcm.elementFarbe}" data-tcm-element="${tcm.element}" title="Mehr \u00fcber das ${tcm.element}-Element">${tcm.element} \u2197</button>
            <span>${tcm.polaritaet} \u00b7 ${tcm.leitorgan}</span>
            <span>\u23f1 ${tcm.organzeit}</span>
          </div>
          <p class="tcm-inline__symptom">${tcm.symptom}</p>
          <p class="tcm-inline__ausgleich">${tcm.ausgleich}</p>
          <ul class="tcm-inline__empfehlung">${tcm.empfehlung.map((e) => `<li>${e}</li>`).join("")}</ul>
          <h4>${c.ernaehrungLabel}: ${tcm.ernaehrungsthema}</h4>
          <ol class="tcm-tagesplan tcm-tagesplan--compact">
            ${tcm.tagesplan.map((s) => `<li><span class="tcm-tagesplan__time">${s.uhrzeit}</span><span class="tcm-tagesplan__label">${s.label}:</span> ${s.text}</li>`).join("")}
          </ol>
        </div>
      </div>
    </div>
  `;
}

function tcmPage() {
  const copy = text.routes.tcm;
  return shell(`
    ${pageHeader("tcm")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">${copy.eyebrow}</p>
        <h1>${copy.headline}</h1>
        <p class="lead-small">${copy.lead}</p>
      </div>
      <aside>
        <span>${copy.linked}</span>
        <strong>${copy.linkedRef}</strong>
        <p>${copy.linkedText}</p>
      </aside>
    </section>
    <section class="knowledge-grid">
      <article class="knowledge-card knowledge-card--expanded">
        <h2>${copy.cardsTitle}</h2>
        <div class="tcm-grid">
          ${tcmData.map(tcmCard).join("")}
        </div>
        <p class="remedy-note">${copy.note}</p>
        ${(() => {
          const kn = subtypeEntry(getProfile());
          const pg = kn && kn.visualPages ? kn.visualPages.find(p => p.src.includes("page-3")) : null;
          return pg ? `
            <figure class="vollseite-karte" style="margin-top:1.5rem;">
              <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
              <div class="card-pg-wrap">
                <img src="${cdnImg(pg.src)}" alt="${pg.alt}" class="vollseite-karte__img" loading="lazy"
                  onerror="this.closest('.vollseite-karte').style.display='none'" />
                <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
              </div>
              <figcaption class="vollseite-karte__titel">${pg.title || ""}</figcaption>
            </figure>` : "";
        })()}
        ${bookTip("chrono-ennea-typ-ernaehrung-im-rhythmus-der-organe", "Ern\u00e4hrung nach dem Enneagrammtyp im Rhythmus der TCM-Organuhr &ndash; Chrono-Ennea-Typ.", "Chrono-Ennea-Typ: Ern\u00e4hrung im Rhythmus der Organe")}
      </article>
    </section>
  `);
}

function kindheitForType(code) {
  const num = parseInt(String(code).replace(/\D/g, ""), 10);
  return kindheitstraumata.find((k) => k.typ === num) || null;
}

function kindheitInlineBlock(k) {
  if (!k) return "";
  const paragraphs = k.text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  return `
    <div class="inline-section inline-section--kindheit" data-collapsed="true">
      <button class="inline-section__toggle" aria-expanded="false">
        <span class="inline-section__label">
          <span class="inline-section__tag">Kindheit</span>
          ${k.wunde}
        </span>
        <span class="inline-section__arrow">\u25bc</span>
      </button>
      <div class="inline-section__body">
        <div class="kindheit-inline">
          <div class="kindheit-inline__body">${paragraphs}</div>
          <p class="kindheit-inline__zombie">${k.zombie}</p>
        </div>
      </div>
    </div>
  `;
}

function kindheitCard(k) {
  const paragraphs = k.text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  return `
    <article class="kindheit-card">
      <header class="kindheit-card__header">
        <span class="kindheit-card__typ">${k.typLabel}</span>
        <h3 class="kindheit-card__titel">${k.titel}</h3>
        <p class="kindheit-card__wunde">${k.wunde}</p>
      </header>
      <div class="kindheit-card__body">
        ${paragraphs}
      </div>
      <p class="kindheit-card__zombie">${k.zombie}</p>
    </article>
  `;
}

function kindheitPage() {
  return shell(`
    ${pageHeader("kindheit")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">Psychologie \u00b7 Enneagramm</p>
        <h1>Die Kindheitstraumata der 9 Typen</h1>
        <p class="lead-small">Jeder Enneagrammtyp entstand aus einem kindlichen Trauma &ndash; einer Verletzung, die den Weg der Seele in Richtung \u00dcberlebensstrategie einschlug. Diese Geschichten beschreiben das Muster, nicht das individuelle Schicksal.</p>
      </div>
      <aside>
        <span>Grundlagenwerk</span>
        <strong>Detlef Rathmer</strong>
        <p>Aus dem Manuskript \u00bbDie Kindheitstraumata der 9 Enneagrammtypen\u00ab</p>
      </aside>
    </section>
    <section class="knowledge-grid">
      <article class="knowledge-card knowledge-card--expanded">
        <h2>Die neun Ursprungsgeschichten</h2>
        <div class="kindheit-grid">
          ${kindheitstraumata.map(kindheitCard).join("")}
        </div>
        <p class="remedy-note">Diese Geschichten beschreiben archetypische Muster. Das individuelle Erleben eines Menschen ist immer vielschichtiger als das Typusmuster &ndash; die Arbeit mit den eigenen Kindheitstraumata erfordert professionelle therapeutische Begleitung.</p>
      </article>
    </section>
  `);
}

function musicPage() {
  go("musik");
  return "";
}

function practicePage() {
  const p = state.profile;
  const copy = text.routes.practice;
  return shell(`
    ${pageHeader("practice")}
    <section class="narrow centered">
      <p class="eyebrow">${copy.eyebrow}</p>
      <h1>${copy.headline}</h1>
      <p class="lead-small">${copy.lead}</p>
    </section>
    <section class="tool-grid">
      ${p.tools
        .map(
          (tool) => `
            <button class="tool-card tool-card--link" data-route="tool/${toolSlug(tool.name)}">
              <span>${tool.label}</span>
              <h2>${tool.name}</h2>
              <p>${tool.text}</p>
              <span class="tool-card__arrow">Details \u2192</span>
            </button>
          `
        )
        .join("")}
      <button class="tool-card tool-card--link" data-route="tcm">
        <span>TCM \u00b7 Meridiane \u00b7 Akupunktur</span>
        <h2>TCM-Profil ansehen</h2>
        <p>Pers\u00f6nlichen Meridian, Organzeiten und Akupunktur-Empfehlungen f\u00fcr Ihren Typ.</p>
        <span class="tool-card__arrow">\u00d6ffnen \u2192</span>
      </button>
      <button class="tool-card tool-card--link" data-route="stille">
        <span>Pr\u00e4senz \u00b7 Innehalten \u00b7 Stille</span>
        <h2>9 Minuten Stille sitzen</h2>
        <p>Das Ego greift st\u00e4ndig \u2014 nach Erkenntnis, nach Verbesserung, nach dem n\u00e4chsten Gedanken. Diese \u00dcbung l\u00e4dt dich ein, f\u00fcr 9 Minuten vollst\u00e4ndig im Hier und Jetzt zu bleiben. Eine Minute f\u00fcr jeden Enneagrammtyp \u2014 ein Symbol f\u00fcr die Ganzheit. Ein Gong er\u00f6ffnet die Stille, ein Gong holt dich zur\u00fcck.</p>
        <span class="tool-card__arrow">Starten \u2192</span>
      </button>
      <button class="tool-card tool-card--link" data-route="musik">
        <span>Klang \u00b7 Kontemplation \u00b7 Typ</span>
        <h2>Entspannungs- und Heilungsmusik</h2>
        <p>Neun vollst\u00e4ndige Alben \u2014 eines f\u00fcr jeden Enneagrammtyp. Jedes Album begleitet dich ca. 1 Std. 20 Min. in die Stille und Tiefe deines Typs.</p>
        <span class="tool-card__arrow">Anh\u00f6ren \u2192</span>
      </button>
      <button class="tool-card tool-card--link" data-route="praxistipps-heilpraktiker">
        <span>K\u00f6rper \u00b7 Alltag \u00b7 Heilpraxis</span>
        <h2>Praxistipps vom Heilpraktiker</h2>
        <p>Konkrete, k\u00f6rperorientierte Impulse aus der heilpraktischen Praxis von Detlef Rathmer \u2013 erg\u00e4nzend zum Enneagramm-Heilungsweg.</p>
        <span class="tool-card__arrow">Ansehen \u2192</span>
      </button>
    </section>
  `);
}

function ichIllusionPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Wer lenkt hier eigentlich wen? – Der sanfte Ausweg aus der Ich-Illusion</h1>
      <p class="lead-small">Ein vertiefender Praxistipp für einen neuen Blick auf das Selbst, die Konditionierung und den inneren Frieden.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/portraits/Ich-Illusion.jpeg"
             alt="Symbolbild für die Ich-Illusion: eine Person, deren Umriss sich in Leere und Weite auflöst"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">In einer Gesellschaft, die auf Leistung, Selbstoptimierung und ständige Zielerreichung geeicht ist, stößt man mit radikalen Wahrheiten schnell an Grenzen. Das Konzept des eigenständigen, kämpfenden „Ichs" ist bei den allermeisten Menschen so tief verankert wie eine unerschütterliche Glaubensfrage. Wer hier zu direkt sagt: „Es gibt dich in dieser Form gar nicht, du bist nur eine Illusion", erntet meist Abwehr, Unverständnis oder das Gefühl von Bedrohung. Das Ego verteidigt seine Existenz mit Zähnen und Klauen.</p>
        <p class="vb-intro" style="margin-top:1rem;">Deshalb lohnt es sich, dieses sensible Thema nicht mit dem Holzhammer anzugehen, sondern über eine beschreibende, einladende und tiefgründige Annäherung. Vorweg sei ausdrücklich betont: Nichts an diesem Gedankengang soll zu Passivität, Fatalismus oder dem Gefühl verleiten, im Leben ohnehin nichts mehr bewirken zu können. Es geht nicht darum, die Hände in den Schoß zu legen, sondern darum, das eigene Tun aus einem anderen, freieren Grund heraus geschehen zu lassen. Wie kann man den Zustand der eigenen Konditionierung beleuchten, ohne zu verschrecken, sondern stattdessen eine Tür zu öffnen?</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">1. Die Entstehung des „Ichs": Ein biologisch-soziales Konstrukt</h2>
        <p class="vb-intro">Ein neugeborenes Kind unterscheidet nicht zwischen sich und der Welt. Es ist reines Sein, fließend, verbunden und ohne gedankliche Barrieren. Erst im Laufe des ersten bis dritten Lebensjahres – im Zuge der sogenannten Basisidentifikation – bildet sich im Gehirn das Konzept des „Ichs" heraus. Dieses Ich ist überlebenswichtig, um im Alltag zu navigieren, Grenzen zu erkennen und sich in der sozialen Gemeinschaft zurechtzufinden. Es ist das Interface, über das man interagiert.</p>
        <p class="vb-intro" style="margin-top:1rem;">Doch das Problem ist: Man verwechselt das Werkzeug – das Ich-Konstrukt – im Laufe des Lebens mit dem Wesenskern. Man beginnt, sich mit den eigenen Gedanken, Gefühlen und der eigenen Lebensgeschichte gleichzusetzen, glaubt, man sei diese Ansammlung. Und genau so, wie dieses Ich im Kleinkindalter mühsam konstruiert wurde, wird es am Ende des Lebens auch wieder verschwinden. Es ist kein unsterblicher, fester Kern, sondern ein flüchtiges Konstrukt des Verstandes, das an Zeit und Raum gebunden ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">2. Das Enneagramm als Spiegel der eigenen blinden Flecken</h2>
        <p class="vb-intro">Um diesen Mechanismus im Alltag greifbar zu machen, hilft ein Blick auf psychologische Persönlichkeitsmodelle wie das Enneagramm. Es beschreibt neun grundlegende Fixierungen oder Überlebensstrategien, die in der Kindheit als Schutzschilder oder Anpassungsleistungen eingebaut wurden, um Liebe und Sicherheit zu gewährleisten. Jede dieser Fixierungen bringt ein spezifisches, tief sitzendes Verlangen mit sich – einen motivationalen Antrieb, der unablässig antreibt: <em>„Wenn ich nur perfekt bin, wenn ich es allen recht mache, wenn ich mich abgrenze, wenn ich Leistung bringe oder die Kontrolle behalte, dann bin ich sicher und glücklich."</em></p>
        <p class="vb-intro" style="margin-top:1rem;">Dies ist die „positive Motivation" im Sinne des psychologischen Antriebs – der feste Glaube, sich durch dieses Verhalten erlösen oder das erstrebte Glück endlich erreichen zu können. Doch die Weisheit aller Zeiten – von östlichen Traditionen bis hin zu modernen Erkenntnissen der Bewusstseinsforschung – lehrt das genaue Gegenteil: Kein Verlangen, kein Leid. Je mehr man glaubt, dieses zielstrebige, konditionierte Ich zu sein, und je mehr man meint, die eigenen Ziele, Vorstellungen und Wünsche mit Willenskraft erzwingen zu müssen, desto mehr verstrickt man sich in die Illusion – und desto mehr leidet man, wenn die Realität nicht mit dem Wunschbild übereinstimmt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">3. Wer lenkt hier wen? Die absolute und die relative Ebene</h2>
        <p class="vb-intro">Verfolgt man diesen Gedanken weiter, berührt man eine fast ketzerische, aber befreiende Frage: Ist man wirklich der Urheber des eigenen Tuns, oder geschieht einem das Leben? Auf der relativen Alltagsebene scheint alles logisch zu sein: Man plant den Tag, trifft Entscheidungen, ärgert sich über Fehler und freut sich über Erfolge. Man hat das Gefühl, der „Täter" zu sein. Doch wer tiefer blickt, erkennt einen größeren Zusammenhang: Die Gedanken tauchen einfach auf – man hat sie sich nicht ausgesucht. Sie entspringen dem Unterbewusstsein, der eigenen Konditionierung und dem aktuellen sozialen Umfeld. Hinzu kommt ein dritter, oft übersehener Faktor: ein angeborener Anteil. Im Enneagramm spricht man von der angeborenen Grundanlage der eigenen Fixierung – vieles an der psychologischen Prägung, die einem Menschen mitgegeben wird, ist ebenso angeboren wie die Haarfarbe, die Augenfarbe oder die eigene Konstitution (siehe dazu das Schaubild <a href="javascript:void(0)" data-route="kindliche-temperamente">Kindliche Temperamente</a>). Die Gefühle steigen im Körper auf wie Wetterphänomene. Die Reaktionen sind das Ergebnis von jahrelanger Prägung, Genetik und Erfahrung.</p>
        <p class="vb-intro" style="margin-top:1rem;">Auf einer absoluten Ebene erreicht man durch krampfhaftes, ich-bezogenes Wollen rein gar nichts, was nicht ohnehin geschehen würde. Alles, was sich im Leben manifestiert, entfaltet sich aus der Gesamtheit des Seins. Selbst der starke Wunsch, sich verändern zu wollen, aus einer Enneagramm-Fixierung auszusteigen oder spirituell zu erwachen, ist letztlich nur ein weiterer Impuls, der durch einen hindurchspielt. Man versucht krampfhaft, das Leben zu steuern, während man in Wahrheit vom Leben gelebt wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">4. Der Weg des sanften Erwachens: Vom Fluch zum Segen</h2>
        <p class="vb-intro">Was bedeutet dieser Perspektivwechsel nun für die eigene Praxis und den inneren Frieden? Er bedeutet keineswegs, in eine passive Lethargie zu verfallen oder aufzuhören zu handeln. Er bedeutet vielmehr eine fundamentale Entlastung.</p>
        <p class="vb-intro" style="margin-top:1rem;"><strong>Die Identifikation lockern statt bekämpfen:</strong> Bemerkt man, wieder voll im Film der eigenen Gedanken und Enneagramm-Fixierungen zu hängen, muss man sich nicht verurteilen. Es reicht, innezuhalten und wahrzunehmen: Ah, da ist wieder der alte Mechanismus am Werk. Schon dieses Bemerken – dieses Zeugenbewusstsein – schafft einen winzigen Raum der Freiheit zwischen dem Reiz (dem Gedanken) und der Reaktion (dem automatischen Handeln).</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Die Ent-Täuschung annehmen:</strong> Das Wort „Ent-Täuschung" verliert seinen Schrecken. Es bedeutet schlicht, dass das Ende einer Täuschung stattfindet. Erkennt man, dass man sich jahrelang von der Stimme des konditionierten Ichs hat treiben lassen, fällt eine Zentnerlast von den Schultern. Das Leben muss nicht mehr nach den eigenen Vorstellungen verbogen werden.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Aus dem Sein heraus handeln:</strong> Wer aufhört, krampfhaft der alleinige Regisseur sein zu wollen, bei dem wandelt sich die Qualität des Tuns. Der innere Druck weicht. Die ständige Angst, zu versagen, nicht genug zu sein oder die Kontrolle zu verlieren, verliert ihre Nahrung.</p>
        <p class="vb-intro" style="margin-top:.8rem;">Aus diesem inneren Frieden heraus geschieht eine wunderbare Wandlung: Statt durch unbewusste Reaktionen, Stress und alte Muster zum Fluch für sich selbst (durch inneren Zwang) und für andere (durch Projektionen und Erwartungen) zu werden, wandelt sich das Dasein. Die Handlungen werden stimmig, fließend und natürlich. Man wird zu einem Segen – für sich selbst und für das eigene Umfeld, weil man endlich aufhört, gegen den Strom des Lebens zu schwimmen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">5. Eine Beobachtung aus über dreißig Jahren therapeutischer Praxis</h2>
        <p class="vb-intro">Als Heilpraktiker mit über dreißig Jahren Erfahrung habe ich immer wieder gesehen: Wenn jemand sehr tief und sehr unbewusst in seiner Fixierung hängt – das heißt nicht, dass diese Person dem Leben gegenüber unbewusst wäre, sondern dass sie die eigene Fixierung sehr stark und unwissend auslebt und ausagiert –, dann sind das häufig genau die Fälle, die über Jahrzehnte zu chronischen Krankheitsbildern werden und langwieriger zu behandeln sind. Nicht zwangsläufig schwieriger, denn mit der Homöopathie ist grundsätzlich vieles möglich, aber langwieriger.</p>
        <p class="vb-intro" style="margin-top:1rem;">Wichtig ist mir dabei eine klare Einschränkung: Es gibt auch sehr bewusste Menschen, die trotzdem an schweren Krankheiten leiden – es gibt namhafte, öffentlich bekannte Persönlichkeiten, die spirituell und psychologisch sehr reif waren und dennoch an Krebs gestorben sind. Bewusstheit ist also kein Indikator dafür, wer krank wird und wer nicht, und es wäre unredlich, das so zu behaupten, so verlockend diese einfache Formel für den Verstand auch klingen mag. Krankheit macht schlicht ehrlich und dient letztlich als Korrektiv – unabhängig vom Bewusstseinsgrad einer Person.</p>
        <p class="vb-intro" style="margin-top:1rem;">Was sich in meiner Praxis dagegen sehr wohl immer wieder als beinahe gesetzmäßig gezeigt hat, ist ein anderer Zusammenhang: Reift ein Mensch, wächst in aller Regel auch sein Interesse an sich selbst, an der eigenen inneren Psychologie. Bleibt ein Mensch dagegen dauerhaft ganz nach außen gerichtet, ohne Interesse an den eigenen inneren Mechanismen, dann ist erfahrungsgemäß auch die Heilungschance geringer. Genau deshalb ist es so entscheidend, sowohl die Leidenschaftsebene als auch die dahinterliegende Wundenebene zu behandeln – und das gelingt nur, wenn ein Mensch korrekt typisiert wird und bei der homöopathischen Therapie die dafür notwendige Kooperation zeigen kann. Durch das oft langjährige Leiden, weshalb die meisten Menschen überhaupt erst zu mir in die Praxis kommen, ist diese Kooperationsbereitschaft interessanterweise meistens bereits gegeben: So merkwürdig es klingen mag, aber ich bekomme eigentlich fast nur Fälle, bei denen sich vorher schon zahlreiche andere Therapeuten erfolglos versucht haben. Genau dafür ist die jahrzehntelange Erfahrung eines Heilpraktikers auch da.</p>
        <p class="vb-intro" style="margin-top:1rem;">Dabei sind, wie ich immer wieder beobachte, zwei sehr unterschiedliche Wege gleichermaßen legitim. Der eine Weg ist der vorsorgliche: Sich frühzeitig, zum Beispiel über das Enneagramm, mit der eigenen Fixierung auseinanderzusetzen, bevor sie sich über Jahrzehnte in chronischer Krankheit festsetzt, ist wahrscheinlich die beste Vorsorge überhaupt. Der andere Weg führt über das Leiden selbst: Manche Menschen finden erst durch eine schwere Krankheit oder eine erschütternde Lebenskrise nach innen – und entdecken das Enneagramm oder andere tiefergehende Ansätze gerade deshalb, weil das Leiden sie dorthin geführt hat. Im Nachhinein sind gerade diese Menschen oft dankbar und sagen sinngemäß: „Ich brauchte diese Krankheit, so seltsam das klingt – ich hatte mich so weit von mir selbst entfernt, mich nur noch in den äußeren Dingen der Welt gesehen und mich darin völlig verloren, wie der verlorene Sohn im biblischen Gleichnis. Erst durch diese schweren Lebensumstände habe ich zu mir zurückgefunden – und damit begann gewissermaßen mein eigentliches Leben." Beide Wege – der vorbeugende wie der durch Leid erzwungene – führen zum selben inneren Erwachen, nur über unterschiedlich schmerzhafte Umwege.</p>
        <p class="vb-intro" style="margin-top:1rem;">Auf dieser tiefen Ebene, jenseits von Bewusstsein und jenseits der reinen Fixierung, im Bereich der Wunde selbst regulierend tätig zu sein, ist mit klassischer Psychotherapie allein oder mit einer rein schulmedizinischen Therapie, die nur die Symptome als Ausdruck des zugrunde liegenden Ungleichgewichts behandelt, kaum zu erreichen. Ausnahmen bestätigen dabei ausdrücklich die Regel: Es gibt auch in der Schulmedizin gute, tiefergehende Ansätze. Diese sind jedoch eher selten, und wenn man ehrlich ist, setzen auch sie meist eher an den Symptomen als an den tieferen Ursachen des Krankseins an – und des Menschseins, was letztlich dasselbe ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Buchtipps</h2>
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                          background:var(--paper);list-style:none;user-select:none;font-weight:700;
                          font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;color:var(--copper);">&#9672;</span>
            <span style="flex:1;">Vertiefende Literatur von Detlef Rathmer (14)</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("hinter-der-leidenschaft", "Die neun Wunden des Enneagramms – tiefgreifende Analyse der Urwunde hinter jeder Leidenschaft, mit konkreten Heilungswegen für alle 9 Typen.", "Hinter der Leidenschaft")}
            <div style="margin-top:.8rem;">${bookTip("du-bist-nicht-dein-zweifel", "Kernüberzeugungen erkennen und loslassen – ein Wegweiser zu innerer Freiheit für alle 9 Typen.", "Du bist nicht dein Zweifel")}</div>
            <div style="margin-top:.8rem;">${bookTip("nichts-und-alles", "Ein Buch über das Wesen des Bewusstseins – zwischen Leere und Fülle, zwischen dem Nichts und dem Alles des Lebens.", "Nichts und Alles")}</div>
            <div style="margin-top:.8rem;">${bookTip("der-raum-hinter-allem", "Der Raum, der bleibt, wenn Identifikation nachlässt – ein meditatives Werk über Bewusstsein und Freiheit.", "Der Raum hinter allem")}</div>
            <div style="margin-top:.8rem;">${bookTip("sei-still-und-wisse-ich-bin-gott", "Ein spirituelles Buch über die tiefste Stille in uns und die Erfahrung von Transzendenz jenseits aller Konzepte.", "Sei still und wisse – ich bin Gott!")}</div>
            <div style="margin-top:.8rem;">${bookTip("heilung-als-erinnerung", "Heilung nicht als Reparatur, sondern als Erinnerung an das, was wir eigentlich sind – ein tiefgründiger Blick auf Gesundheit und Ganzheit.", "Heilung als Erinnerung")}</div>
            <div style="margin-top:.8rem;">${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Sieben praxisnahe Wege, die helfen, sich selbst näherzukommen – ohne Umwege, ohne Schönrederei, direkt und klar.", "7 Wege zu Dir selbst")}</div>
            <div style="margin-top:.8rem;">${bookTip("wenn-die-stille-brennt", "Wenn innere Erschöpfung auf das Enneagramm trifft – Burnout, Grenzverlust und der Weg zurück zu sich selbst.", "Wenn die Stille brennt – Burnout")}</div>
            <div style="margin-top:.8rem;">${bookTip("meta-intelligenz", "Metaintelligenz – die Intelligenz, die alle anderen Intelligenzen verbündet und das volle Potenzial des Bewusstseins erschließt.", "Metaintelligenz")}</div>
            <div style="margin-top:.8rem;">${bookTip("meta-intelligenz-das-hoerbuch", "Metaintelligenz als Hörbuch – ideal für unterwegs oder zum meditativen Zuhören.", "Metaintelligenz (Hörbuch)")}</div>
            <div style="margin-top:.8rem;">${bookTip("die-enneagramm-aromatherapie", "9 Typen, 9 Urwunden, 9 Seelendüfte – ätherische Öle als Zugang zur Tiefenebene des Charakters.", "Die Enneagramm-Aromatherapie")}</div>
            <div style="margin-top:.8rem;">${bookTip("enneagramm-biochemie", "Die neun Regulationsmuster des Enneagramms, verbunden mit den biochemischen Mineralsalzen nach Dr. Schüßler – auch für Laien gut verständlich.", "Enneagramm-Biochemie")}</div>
            <div style="margin-top:.8rem;">${bookTip("enneagramm-bachblueten-therapie", "Die neun Enneagrammtypen verbunden mit den Bachblüten nach Dr. Edward Bach – Leidenschafts- und Wunden-Blüten aus der therapeutischen Praxis.", "Enneagramm-Bachblüten-Therapie")}</div>
            <div style="margin-top:.8rem;">${bookTip("enneagramm-homoeopathie-band-1", "Die Grundlage der Enneagramm-Homöopathie – wie Persönlichkeitstyp und Heilmittelwahl zusammenhängen, auch für Laien gut verständlich.", "Enneagramm-Homöopathie – Band 1")}</div>
            <div style="margin-top:.8rem;">${bookTip("enneagramm-homoeopathie-band-2", "Vertiefung und Erweiterung: Die 27 Subtypen und ihre individuellen homöopathischen Heilmittel.", "Enneagramm-Homöopathie – Band 2")}</div>
          </div>
        </details>
        <p style="font-size:.8rem;color:var(--muted);margin:.8rem 0 0;">Alle Titel und weitere spirituelle Literatur von Detlef Rathmer finden sich auch auf der Homepage des Verlagshauses Rathmer unter „Persönliche Entwicklung".</p>
      </div>

    </section>
  `);
}

function praxistippsHeilpraktikerPage() {
  const TIPPS = [
    { slug:"faszienuebungen-rumpfgesundheit", titel:"Faszien\u00fcbungen f\u00fcr die Rumpfgesundheit", teaser:"Vier einfache \u00dcbungen gegen die Folgen des vielen Sitzens \u2013 Dead Bug, Bird-Dog, Katze-Kuh und Kobra.", img:"./assets/schaubilder/faszienuebungen-rumpfgesundheit/faszienuebungen-rumpfgesundheit.jpg" },
    { slug:"fussreflexzonen-aktivierung", titel:"Fu\u00dfreflexzonen-Aktivierung: Der Energie-Kick f\u00fcr zwischendurch", teaser:"Mit Igelball, Kork- oder Holzroller in 1\u20132 Minuten pro Fu\u00df Durchblutung und vegetatives Nervensystem anregen.", img:"./assets/schaubilder/fussreflexzonen-aktivierung/igelball.jpg" },
    { slug:"schwung-routine", titel:"3-teilige Schwung-Routine: Ganzheitliches Faszien- & K\u00f6rpertraining im Stehen", teaser:"Drei einfache Schwung\u00fcbungen im Stehen \u2013 f\u00fcr Beweglichkeit, Faszien und den ganzen K\u00f6rper, \u00fcberall und ohne Ger\u00e4te machbar.", img:"./assets/schaubilder/schwung-routine/schwung-routine.jpg" },
    { slug:"energiefeld-haende", titel:"Das Energiefeld zwischen den H\u00e4nden", teaser:"Eine einfache Grund\u00fcbung f\u00fcr mehr K\u00f6rperwahrnehmung und Tiefe \u2013 der energetische Kraftball zwischen den Handfl\u00e4chen.", img:"./assets/schaubilder/energiefeld-haende/energiefeld-haende.jpg" },
    { slug:"bewegung-wasser", titel:"Bewegung im Element Wasser: Achtsame Langsamkeit f\u00fcr den Alltag", teaser:"Der imagin\u00e4re Widerstand des Wassers als Bild f\u00fcr flie\u00dfende, achtsame Bewegung \u2013 inspiriert von Tai Chi.", img:"./assets/schaubilder/bewegung-wasser/bewegung-wasser.jpg" },
    { slug:"unsichtbarer-magnet", titel:"Der unsichtbare Magnet: Die Erdungs-\u00dcbung", teaser:"Magnete an den Fu\u00dfsohlen als Bild, um in Sekunden Erdung und mentale Ruhe herzustellen.", img:"./assets/schaubilder/unsichtbarer-magnet/unsichtbarer-magnet.jpg" },
    { slug:"herz-tor-oeffnen", titel:"Das Herz-Tor \u00f6ffnen: Weite und Verbindung sp\u00fcren", teaser:"Eine Atem-Bewegungs-\u00dcbung, die den Brustraum \u00f6ffnet und f\u00fcr innere Weite sorgt.", img:"./assets/schaubilder/herz-tor-oeffnen/herz-tor-oeffnen.jpg" },
    { slug:"atem-wasserfall", titel:"Der Atem-Wasserfall: Energetische Reinigung und Klarheit", teaser:"Eine sanfte, energetische Dusche aus Atem und Bewegung f\u00fcr den Feierabend.", img:"./assets/schaubilder/atem-wasserfall/atem-wasserfall.jpg" },
    { slug:"vitruv-enneagramm", titel:"Die Vitruv-Enneagramm-Bewusstseins\u00fcbung: Der Kreis der Neun", teaser:"Geometrische Harmonie des Vitruvianischen Menschen und die 9 Punkte des Enneagramms im eigenen K\u00f6rper aktivieren.", img:"./assets/schaubilder/vitruv-enneagramm/kreis-der-neun.jpg" },
    { slug:"bewusstes-innehalten", titel:"Die Praxis des bewussten Innehaltens: \u203aLet it be\u2039 im Alltag", teaser:"Kein K\u00f6rperritual, sondern reine Wahrnehmung \u2013 kurze, bewusste Stopps mitten im Alltag als Weg zur\u00fcck zur eigenen Essenz.", img:"./assets/schaubilder/bewusstes-innehalten/bewusstes-innehalten.jpg" },
    { slug:"zungenstreck-uebung", titel:"Die Zungenstreck-\u00dcbung zur Stressregulation: Von Einstein, Vagusnerv und tierischen Instinkten", teaser:"Das ber\u00fchmte Einstein-Foto als Vorbild \u2013 wie das bewusste Strecken der Zunge \u00fcber den Vagusnerv akute Anspannung l\u00f6st.", img:"./assets/schaubilder/zungenstreck-uebung/zungenstreck-uebung.jpg" },
    { slug:"ich-illusion", titel:"Wer lenkt hier eigentlich wen? \u2013 Der sanfte Ausweg aus der Ich-Illusion", teaser:"Ein sanfter, tiefgr\u00fcndiger Blick auf das konditionierte Ich, die Enneagramm-Fixierungen und die befreiende Frage, wer hier eigentlich wen lenkt.", img:"./assets/portraits/Ich-Illusion.jpeg" },
  ];

  const param = state.route.split("/")[1] || null;
  if (param === "faszienuebungen-rumpfgesundheit") {
    return faszienuebungenRumpfgesundheitPage();
  }
  if (param === "fussreflexzonen-aktivierung") {
    return fussreflexzonenAktivierungPage();
  }
  if (param === "schwung-routine") {
    return schwungRoutinePage();
  }
  if (param === "energiefeld-haende") {
    return energiefeldHaendePage();
  }
  if (param === "bewegung-wasser") {
    return bewegungWasserPage();
  }
  if (param === "unsichtbarer-magnet") {
    return unsichtbarerMagnetPage();
  }
  if (param === "herz-tor-oeffnen") {
    return herzTorOeffnenPage();
  }
  if (param === "atem-wasserfall") {
    return atemWasserfallPage();
  }
  if (param === "vitruv-enneagramm") {
    return vitruvEnneagrammPage();
  }
  if (param === "bewusstes-innehalten") {
    return bewusstesInnehaltenPage();
  }
  if (param === "zungenstreck-uebung") {
    return zungenstreckUebungPage();
  }
  if (param === "ich-illusion") {
    return ichIllusionPage();
  }

  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <p class="eyebrow">Werkzeuge \u00b7 Praxistipps vom Heilpraktiker</p>
      <h1>Praxistipps vom Heilpraktiker</h1>
      <p class="lead-small">Konkrete Impulse aus der heilpraktischen Praxis von Detlef Rathmer \u2013 k\u00f6rperorientierte \u00dcbungen ebenso wie Tee-Empfehlungen, kleine Rituale und Alltagshilfen. Diese Rubrik wird laufend um neue Themen erweitert.</p>

      <div style="margin:1.5rem 0 0;padding:1.1rem 1.3rem;background:color-mix(in srgb, var(--copper) 6%, var(--paper));border:1px solid var(--line);border-radius:10px;">
        <p style="font-size:.82rem;font-weight:700;color:var(--copper);text-transform:uppercase;letter-spacing:.04em;margin:0 0 .3rem;">Wichtiger Hinweis &amp; pers\u00f6nliche Anmerkung</p>
        <p style="font-size:.82rem;color:var(--muted);margin:0 0 .7rem;">von Ihrem Heilpraktiker (\u00fcber 30 Jahre Praxiserfahrung)</p>
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0 0 .8rem;">Liebe Nutzerinnen und Nutzer, die Tipps in dieser Rubrik sind aus meiner jahrzehntelangen Praxis entstanden. Sie eignen sich hervorragend zur schnellen Selbsthilfe im Alltag, um kleinere Akutbeschwerden sanft zu lindern und den K\u00f6rper ganzheitlich zu unterst\u00fctzen \u2013 besonders dann, wenn gerade kein Therapeut greifbar ist. Bitte beachten Sie jedoch:</p>
        <ol style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0 0 .8rem;padding-left:1.2rem;">
          <li><strong>Rechtzeitige Abkl\u00e4rung:</strong> Halten Beschwerden l\u00e4nger an, kehren sie wieder oder sind sie schwerwiegender, gilt: lieber einmal zu fr\u00fch als zu sp\u00e4t. Suchen Sie bei anhaltenden oder unklaren Symptomen bitte zeitnah einen Arzt, Psychotherapeuten oder Heilpraktiker auf.</li>
          <li><strong>Linderung vs. Heilung:</strong> Alltags- und Selbsthilfetipps k\u00f6nnen wunderbar unterst\u00fctzen, ersetzen bei tiefer sitzenden oder chronischen Leiden aber keine Ursachenbehandlung.</li>
          <li><strong>Die K\u00f6nigsdisziplin:</strong> Aus meiner langj\u00e4hrigen Erfahrung bleibt die klassische hom\u00f6opathische Konstitutionstherapie die K\u00f6nigsdisziplin der ganzheitlichen Heilkunde. Als Informationstherapie setzt sie an den tiefsten Ebenen des Organismus an und regt die Selbstheilungskr\u00e4fte grundlegend an.</li>
        </ol>
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;">Nutzen Sie diese Praxistipps gerne als wertvolle Begleiter im Alltag \u2013 und wenden Sie sich bei chronischen oder komplexen Themen vertrauensvoll an einen versierten Therapeuten/Hom\u00f6opathen zwecks fundierter hom\u00f6opathischer Konstitutionsbehandlung.</p>
      </div>

      <div class="tool-grid" style="margin-top:1.5rem;">
        ${TIPPS.map(t => `
          <button class="tool-card tool-card--link" data-route="praxistipps-heilpraktiker/${t.slug}">
            <span>Praxistipp</span>
            <h2>${t.titel}</h2>
            <p>${t.teaser}</p>
            <span class="tool-card__arrow">Ansehen \u2192</span>
          </button>
        `).join("")}
      </div>
    </section>
  `);
}

function faszienuebungenRumpfgesundheitPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">\u2190 Zur\u00fcck zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge \u00b7 Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Faszien\u00fcbungen f\u00fcr die Rumpfgesundheit</h1>
      <p class="lead-small">Vier einfache, wirkungsvolle \u00dcbungen, um dem vielen Sitzen im Alltag aktiv entgegenzuwirken.</p>

      <div class="vb-section" style="max-width:100%;">
        <p class="vb-intro">Die meisten Menschen verbringen heute einen gro\u00dfen Teil ihres Tages sitzend \u2013 am Schreibtisch, vor dem Computer, im Auto oder auf dem Sofa. Diese dauerhafte, meist gebeugte Haltung fordert ihren Preis: Die Rumpfmuskulatur verk\u00fcrzt und schw\u00e4cht sich, die Faszien \u2013 das bindegewebige Netz, das Muskeln, Organe und Knochen umh\u00fcllt und miteinander verbindet \u2013 verkleben und verlieren an Elastizit\u00e4t. Die Folge sind h\u00e4ufig R\u00fcckenschmerzen, Verspannungen im unteren R\u00fccken und in der H\u00fcfte sowie ein sp\u00fcrbarer Verlust an Beweglichkeit.</p>
        <p class="vb-intro">Faszien reagieren besonders gut auf gezielte, langsame Dehn- und Spannungsreize. Anders als reines Muskeltraining zielen Faszien\u00fcbungen darauf ab, das gesamte myofasziale Netzwerk \u2013 also die funktionalen Verbindungslinien zwischen Muskeln und Bindegewebe \u2013 geschmeidig und belastbar zu halten. Regelm\u00e4\u00dfig ausgef\u00fchrt, k\u00f6nnen solche \u00dcbungen helfen, die Rumpfstabilit\u00e4t zu verbessern, die Wirbels\u00e4ule zu entlasten, Verspannungen vorzubeugen und die allgemeine Beweglichkeit im Alltag sp\u00fcrbar zu erh\u00f6hen. Schon wenige Minuten am Tag \u2013 etwa als kurze Unterbrechung zwischen zwei Sitzphasen \u2013 reichen aus, um einen echten Ausgleich zu schaffen.</p>
        <p class="vb-intro">Die folgenden vier \u00dcbungen erg\u00e4nzen sich ideal: Sie sprechen sowohl die tiefe Rumpfstabilit\u00e4t als auch die Beweglichkeit der Wirbels\u00e4ule in verschiedenen Richtungen an und lassen sich ohne Ger\u00e4te, auf einer Matte, zu Hause durchf\u00fchren.</p>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/faszienuebungen-rumpfgesundheit/faszienuebungen-rumpfgesundheit.jpg"
             alt="Vier Faszien\u00fcbungen im \u00dcberblick: Dead Bug, Bird-Dog, Katze-Kuh-Position, Kobra"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">1. Dead Bug (K\u00e4fer)</h2>
        <p class="vb-intro">R\u00fcckenlage, Arme senkrecht nach oben gestreckt, Knie in der Luft im rechten Winkel angehoben. Nun wird ein Arm \u00fcber den Kopf und gleichzeitig das gegen\u00fcberliegende Bein gestreckt Richtung Boden gef\u00fchrt, ohne dass der untere R\u00fccken den Boden verl\u00e4sst \u2013 die Spannung entsteht diagonal \u00fcber den ganzen Rumpf. Anschlie\u00dfend die Ausgangsposition wieder einnehmen und die Seite wechseln.</p>
        <p class="vb-intro"><strong>Wirkung:</strong> Aktiviert die tiefe Bauch- und Rumpfmuskulatur, schult die Stabilit\u00e4t der Lendenwirbels\u00e4ule und verbessert die Koordination zwischen Armen und Beinen \u2013 eine der sichersten \u00dcbungen zum Aufbau von Core-Stabilit\u00e4t, da der R\u00fccken durchgehend gesch\u00fctzt am Boden bleibt.</p>

        <h2 style="font-size:1.15rem;font-weight:700;margin:1.6rem 0 .6rem;color:var(--ink);">2. Bird-Dog (Vogel-Hund)</h2>
        <p class="vb-intro">Vierf\u00fc\u00dflerstand, H\u00e4nde unter den Schultern, Knie unter der H\u00fcfte. Ein Arm wird nach vorne, das gegen\u00fcberliegende Bein gleichzeitig nach hinten gestreckt \u2013 R\u00fccken und Becken bleiben dabei ruhig und gerade, ohne ins Hohlkreuz oder zur Seite auszuweichen. Kurz halten, dann kontrolliert zur\u00fcckf\u00fchren und die Seite wechseln.</p>
        <p class="vb-intro"><strong>Wirkung:</strong> St\u00e4rkt die autochthone R\u00fcckenmuskulatur (die tiefen, wirbels\u00e4ulennahen Muskeln) sowie die Ges\u00e4\u00df- und Schultermuskulatur, f\u00f6rdert das Gleichgewicht und schult die diagonale Stabilisation des Rumpfes \u2013 besonders wertvoll f\u00fcr alle, die im Alltag viel sitzen und deren R\u00fcckenmuskulatur dadurch an Ansteuerung verliert.</p>

        <h2 style="font-size:1.15rem;font-weight:700;margin:1.6rem 0 .6rem;color:var(--ink);">3. Katze-Kuh-Position</h2>
        <p class="vb-intro">Ebenfalls aus dem Vierf\u00fc\u00dflerstand: Beim Einatmen den R\u00fccken sanft ins Hohlkreuz senken lassen, den Blick nach oben und das Brustbein nach vorne \u00f6ffnen (&bdquo;Kuh&ldquo;). Beim Ausatmen den R\u00fccken rund nach oben w\u00f6lben, das Kinn zur Brust nehmen (&bdquo;Katze&ldquo;). Beide Positionen flie\u00dfend, im Atemrhythmus, mehrfach wiederholen.</p>
        <p class="vb-intro"><strong>Wirkung:</strong> Mobilisiert die gesamte Wirbels\u00e4ule in ihrer nat\u00fcrlichen Beweglichkeit \u2013 Segment f\u00fcr Segment \u2013, l\u00f6st Verspannungen im Bereich des unteren und mittleren R\u00fcckens und ist ideal, um nach l\u00e4ngerem Sitzen die Wirbels\u00e4ule sanft wieder in Bewegung zu bringen, bevor intensivere \u00dcbungen folgen.</p>

        <h2 style="font-size:1.15rem;font-weight:700;margin:1.6rem 0 .6rem;color:var(--ink);">4. Kobra / Kobra-Stretch</h2>
        <p class="vb-intro">Bauchlage, H\u00e4nde unter den Schultern aufgestellt. Beim Einatmen Oberk\u00f6rper und Kopf langsam anheben, Ellbogen bleiben leicht gebeugt oder werden je nach Beweglichkeit vollst\u00e4ndig gestreckt, das Becken bleibt am Boden. Der Blick geht sanft nach oben, ohne den Nacken zu \u00fcberstrecken. Einige Atemz\u00fcge halten, dann langsam zur\u00fcck in die Ausgangsposition.</p>
        <p class="vb-intro"><strong>Wirkung:</strong> Dehnt die vordere Rumpffaszie und die Bauchmuskulatur, die durch h\u00e4ufiges Sitzen in gebeugter Haltung dauerhaft verk\u00fcrzt ist, \u00f6ffnet den Brustkorb und wirkt damit direkt der typischen &bdquo;B\u00fcrohaltung&ldquo; entgegen \u2013 ein nat\u00fcrlicher Ausgleich zur st\u00e4ndigen Flexion des Oberk\u00f6rpers im Alltag.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Praxistipp:</strong> F\u00fchren Sie die vier \u00dcbungen als kurze Sequenz durch \u2013 jeweils 8&ndash;10 Wiederholungen pro Seite bzw. 3&ndash;5 Atemz\u00fcge Halten bei Katze-Kuh und Kobra. Schon eine t\u00e4gliche Wiederholung von 5&ndash;10 Minuten, idealerweise als bewusste Pause zwischen l\u00e4ngeren Sitzphasen, kann sp\u00fcrbar zur Rumpfgesundheit beitragen. Bei bestehenden R\u00fcckenbeschwerden oder Unsicherheiten empfiehlt sich vorab eine individuelle Abkl\u00e4rung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Empfehlung zum Nachr\u00fcsten</h2>
        <p class="vb-intro" style="margin-bottom:.8rem;">F\u00fcr alle vier \u00dcbungen ist eine rutschfeste, gelenkschonende Unterlage Gold wert \u2013 besonders auf Fliesen- oder Laminatboden.</p>
        ${affiliateBoxHtml("fitnessmatte", "Fitnessmatte", "Fitnessmatte bei Amazon ansehen")}
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"situationskompass", label:"Situationskompass"},
        {route:"practice", label:"Werkzeuge"},
        {route:"stille", label:"9 Minuten Stille sitzen"},
      ])}
    </section>
  `);
}

function fussreflexzonenAktivierungPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Fußreflexzonen-Aktivierung: Der Energie-Kick für zwischendurch</h1>
      <p class="lead-small">Man muss keine stundenlangen Wanderungen machen, um den Körper in Schwung zu bringen. Manchmal reichen schon zwei Minuten am Tag und ein kleiner Helfer – ein Massageball.</p>

      <div class="vb-section" style="max-width:100%;">
        <p class="vb-intro">Über die Fußsohlen ist der Mensch mit dem gesamten Organismus verbunden – über 70.000 Nervenenden enden hier. Gezieltes Rollen der Füße regt nicht nur die lokale Durchblutung an, sondern sendet wohltuende Impulse an den gesamten Körper und das vegetative Nervensystem. Perfekt gegen Energietiefs am Nachmittag oder als morgendliches Wachmacher-Ritual!</p>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/fussreflexzonen-aktivierung/igelball.jpg"
             alt="Igelball zur Fußreflexzonen-Massage"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Welches Hilfsmittel passt zu dir?</h2>
        <p class="vb-intro"><strong>Der klassische Igelball:</strong> Flexibel, leicht und mit intensiv spürbaren Noppen für einen starken Reizeffekt.</p>
        <p class="vb-intro" style="margin-top:1.2rem;"><strong>Der Kork-Massageball (nachhaltiger Premium-Tipp):</strong> Kork ist ein wunderbares Naturmaterial. Es fühlt sich auf der Haut besonders warm und angenehm an, ist von Natur aus antibakteriell und bietet eine feste, aber leicht nachgiebige Struktur.</p>
        <p class="vb-intro" style="margin-top:1.2rem;"><strong>Der Holz-Massageroller (edle Alternative):</strong> Ergonomische Roller oder Kugeln aus Massivholz mit abgerundeten Noppen erlauben es, viel Druck aufzubauen, ohne dass etwas wegrutscht. Sie sehen zudem sehr edel aus und halten ein Leben lang.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Fuß- und Handreflexzonen im Überblick</h2>
        <p class="vb-intro">Die Fußsohle spiegelt in der Reflexzonenlehre den gesamten Organismus – von Kopf und Nebenhöhlen über die inneren Organe bis hin zur Wirbelsäule und zum Becken. Gezielter Druck auf eine bestimmte Zone setzt einen Reiz, der sich auf den zugeordneten Körperbereich auswirken soll.</p>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/fussreflexzonen-aktivierung/fussreflexzonen-chart.jpg"
             alt="Übersichtsgrafik der Fußreflexzonen mit allen zugeordneten Organen und Körperbereichen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Der Massageroller lässt sich genauso gut auf den Handinnenflächen einsetzen: einfach auf eine feste Unterlage wie einen Tisch stellen und mit der Hand darüberrollen – dieselbe Bewegung wie mit dem Fuß, nur eben für die Handreflexzonen. Diese liegen etwas tiefer im Gewebe und sind kleinteiliger als am Fuß, besonders ausgeprägt sind dort die Zonen für Kopf und Nebenhöhlen.</p>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/fussreflexzonen-aktivierung/handreflexzonen-chart.jpg"
             alt="Übersichtsgrafik der Handreflexzonen mit allen zugeordneten Organen und Körperbereichen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Der Massageroller in der Praxis</h2>
        <p class="vb-intro">Für die Füße bleibt der Roller einfach auf dem Boden liegen – ideal etwa unter dem Schreibtisch, wo er sich beiläufig während der Arbeit nutzen lässt.</p>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/fussreflexzonen-aktivierung/massageroller-fuss-praxis.jpg"
             alt="Holz-Massageroller auf dem Boden unter dem Schreibtisch für die Fußreflexzonen-Massage"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Für die Handreflexzonen wandert derselbe Roller auf den Tisch – die Hand rollt locker in derselben Bewegung darüber, wie sonst der Fuß.</p>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/fussreflexzonen-aktivierung/massageroller-hand-praxis.jpg"
             alt="Holz-Massageroller auf dem Schreibtisch, Hand rollt für die Handreflexzonen-Massage darüber"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">So geht's</h2>
        <p class="vb-intro"><strong>Vorbereitung:</strong> Bequem auf einen Stuhl setzen (oder hinstellen, sofern sicherer Halt gegeben ist). Das gewählte Massage-Tool auf dem Boden vor sich ablegen.</p>
        <p class="vb-intro"><strong>Die Ausführung:</strong> Den rechten Fuß mit leichtem Druck auf den Ball oder den Roller setzen. Ihn nun langsam und gleichmäßig von der Ferse bis zu den Zehenballen vor und zurück bewegen.</p>
        <p class="vb-intro"><strong>Intensität anpassen:</strong> Der Druck bestimmt die Intensität selbst: Je fester der Fuß aufgedrückt wird, desto stärker der Reizeffekt.</p>
        <p class="vb-intro"><strong>Besonderer Fokus:</strong> Ein Moment Verweilen direkt unter dem Ballen lohnt sich – dieser Bereich korrespondiert in der Reflexzonenlehre mit der Brust- und Atemregion. Dabei tief in den Bauch atmen.</p>
        <p class="vb-intro"><strong>Dauer:</strong> Jeden Fuß etwa 1 bis 2 Minuten bearbeiten, bevor die Seite gewechselt wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Heilpraktiker-Tipp für den Alltag:</strong> Das Massage-Tool direkt morgens neben das Bett stellen oder griffbereit unter den Schreibtisch legen. Schon das kurze Rollen während der ersten E-Mails oder beim Kaffeetrinken löst unbewusste Fußverspannungen und lässt den Tag spürbar geerdeter beginnen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Empfehlungen zum Nachrüsten</h2>
        ${affiliateBoxHtml("fussmassage", "Igelball", "Igelball bei Amazon ansehen")}
        <div style="margin-top:.8rem;">${affiliateBoxHtml("fussmassage", "Kork-Massageball", "Kork-Massageball bei Amazon ansehen")}</div>
        <div style="margin-top:.8rem;">${affiliateBoxHtml("fussmassage", "Holz-Massageroller", "Holz-Massageroller bei Amazon ansehen")}</div>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/faszienuebungen-rumpfgesundheit", label:"Faszienübungen für die Rumpfgesundheit"},
        {route:"enneagramm-reflexzonentherapie", label:"Enneagramm meets Reflexzonentherapie"},
        {route:"situationskompass", label:"Situationskompass"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}

function schwungRoutinePage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">3-teilige Schwung-Routine: Ganzheitliches Faszien- & Körpertraining im Stehen</h1>
      <p class="lead-small">Drei einfache Schwungübungen im Stehen, die Beweglichkeit, Faszien und den gesamten Körper gleichmäßig ansprechen – ganz ohne Geräte und überall durchführbar.</p>

      <div class="vb-section" style="max-width:100%;">
        <p class="vb-intro">Anders als isolierte Kräftigungsübungen zielt diese Routine nicht auf einzelne Muskelgruppen, sondern auf den ganzen Körper gleichzeitig: Beim dynamischen Schwingen der Arme werden Schultern, Rumpf, Rücken, Hüfte und Beine im Zusammenspiel beansprucht, während die Faszienketten – die myofaszialen Verbindungslinien vom Arm bis zum Fuß – durch den fließenden Bewegungsimpuls elastisch gehalten werden. Das macht die drei Übungen zu einem kompakten Ganzkörpertraining, das gleichzeitig Beweglichkeit, Koordination und allgemeine Stabilisierung fördert.</p>
        <p class="vb-intro">Der große Vorteil im Alltag: Die Routine braucht kein Equipment, keinen Ortswechsel und keine Vorbereitung. Sie lässt sich jederzeit zwischendurch einbauen – im Büro, auf Reisen, zu Hause zwischen zwei Terminen – und ist bereits nach fünf bis zehn Minuten spürbar wirksam.</p>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/schwung-routine/schwung-routine.jpg"
             alt="Drei Übungen der Schwung-Routine: Wechselarm-Schwung, Doppelarm-Schwung, Ganzkörper-Drehung"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">1. Wechselarm-Schwung (vor/zurück)</h2>
        <p class="vb-intro">Hüftbreiter Stand, ein Bein einen kleinen Schritt nach vorne gestellt, das hintere Knie leicht gebeugt („Stoßdämpfer"-Prinzip zum Abfedern). Die Arme schwingen abwechselnd vor und zurück wie beim lockeren Gehen – ein Arm nach vorne oben, der andere gleichzeitig nach hinten, dann Wechsel. Die Bewegung kommt aus der Schulter, der Oberkörper bleibt dabei aufrecht und stabil.</p>
        <p class="vb-intro"><strong>Wirkung:</strong> Löst Verspannungen in Schulter und oberem Rücken, aktiviert die diagonalen Faszienzüge zwischen Arm und gegenüberliegender Hüfte und bringt durch den natürlichen Gegenschwung Koordination und Gleichgewicht in Schwung.</p>

        <h2 style="font-size:1.15rem;font-weight:700;margin:1.6rem 0 .6rem;color:var(--ink);">2. Doppelarm-Schwung (vor/zurück)</h2>
        <p class="vb-intro">Gleiche Ausgangsposition wie bei Übung 1 – ein Bein leicht vorgestellt, hinteres Knie als Stoßdämpfer gebeugt. Diesmal schwingen beide Arme gleichzeitig und gleichsinnig nach vorne oben und wieder zurück nach hinten unten, in einem fließenden, runden Bogen.</p>
        <p class="vb-intro"><strong>Wirkung:</strong> Öffnet den Brustkorb und die vordere Schulterfaszie, kräftigt durch den beidseitigen Schwung die Rumpfstabilität und wirkt dem typischen Rundrücken der Büroalltags entgegen.</p>

        <h2 style="font-size:1.15rem;font-weight:700;margin:1.6rem 0 .6rem;color:var(--ink);">3. Die Ganzkörper-Drehung (Windmühle/Helikopter)</h2>
        <p class="vb-intro">Stand mit schulterbreit bis leicht mehr als schulterbreit auseinandergestellten Beinen, Füße parallel nebeneinander. Beide Arme werden waagerecht ausgestreckt und der Oberkörper dreht locker und rhythmisch von einer Seite zur anderen – die Arme schwingen dabei mit, wie bei einer Windmühle oder einem Helikopterrotor. Die Bewegung kommt aus der Rumpfrotation, die Beine bleiben stabil und geerdet.</p>
        <p class="vb-intro"><strong>Wirkung:</strong> Mobilisiert die gesamte Wirbelsäule in der Rotation, dehnt die schrägen Bauchmuskeln und die seitlichen Faszienketten und trainiert durch die stabile Beinposition gleichzeitig die Rumpf- und Standfestigkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0 0 .7rem;"><strong style="color:var(--copper);">Zur Beinstellung bei Übung 1 und 2:</strong> Auf der Abbildung steht bei den ersten beiden Übungen jeweils ein Fuß leicht vor dem anderen (Schrittstellung) – das ist die klassische Ausführung mit etwas mehr Stand-Stabilität. Genauso gut lassen sich beide Übungen aber auch mit parallel nebeneinanderstehenden Beinen ausführen, wie bei Übung 3. Beide Varianten sind richtig – am besten ausprobieren, welche Beinstellung sich stabiler und angenehmer anfühlt.</p>
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Heilpraktiker-Tipp für den Alltag:</strong> Fünf bis zehn Minuten reichen bereits aus, um spürbar Wirkung zu erzielen – zum Beispiel als bewusste Pause zwischen zwei Meetings oder direkt nach dem Aufstehen. Da kein Equipment nötig ist, lässt sich die Routine überall durchführen, ganz ohne Vorbereitung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Empfehlung zum Nachrüsten</h2>
        <p class="vb-intro" style="margin-bottom:.8rem;">Auch bei dieser Routine schafft eine rutschfeste, gelenkschonende Unterlage zusätzliche Sicherheit – vor allem bei der Ganzkörper-Drehung auf glattem Boden.</p>
        ${affiliateBoxHtml("fitnessmatte", "Fitnessmatte", "Fitnessmatte bei Amazon ansehen")}
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/faszienuebungen-rumpfgesundheit", label:"Faszienübungen für die Rumpfgesundheit"},
        {route:"praxistipps-heilpraktiker/fussreflexzonen-aktivierung", label:"Fußreflexzonen-Aktivierung"},
        {route:"situationskompass", label:"Situationskompass"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}

function energiefeldHaendePage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Das Energiefeld zwischen den Händen</h1>
      <p class="lead-small">Eine einfache Grundübung für mehr Körperwahrnehmung und Tiefe.</p>

      <div class="vb-section" style="max-width:100%;">
        <p class="vb-intro">Ein faszinierendes Phänomen: Die Hände werden locker parallel zueinander gehalten – und im Zwischenraum lässt sich plötzlich eine fast greifbare Präsenz spüren, ein feines Kribbeln oder eine sanfte Wärme. Oft wird in diesem Zusammenhang von „Bioenergie" gesprochen. Auch wenn ein solches Energiefeld im streng physikalischen Sinne nicht messbar ist, ist das bewusste Spüren von Wärme, Kribbeln oder einem leichten Magnetismus zwischen den Händen eine hervorragende mentale und sensorische Übung zur Tiefenentspannung.</p>
        <p class="vb-intro">Gleichzeitig dient diese Wahrnehmung als Tor zu bewährten und tiefgreifenden Methoden der Energiearbeit und Bewusstseinslenkung – sei es Qi Gong, Prana-Heilung, Quantenheilung oder das klassische Handauflegen.</p>
        <p class="vb-intro">Wer diesen Zustand erforschen und vertiefen möchte, kann mit einer einfachen, aber wirkungsvollen Basisübung starten.</p>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/energiefeld-haende/energiefeld-haende.jpg"
             alt="Frau spürt mit locker gehaltenen Händen das Energiefeld zwischen den Handflächen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Die Grundübung: Den energetischen Kraftball spüren</h2>
        <p class="vb-intro"><strong>1. Die Erdung &amp; Vorbereitung:</strong> Bequem hinsetzen oder hinstellen. Die Augen schließen, einige Atemzüge tief in den Bauch führen und die Anspannung in den Schultern loslassen.</p>
        <p class="vb-intro"><strong>2. Hände aktivieren:</strong> Die Handflächen für einige Sekunden kräftig aneinanderreiben, bis eine spürbare Wärme entsteht. Danach kurz und locker ausschütteln, um die Mikrozirkulation anzuregen.</p>
        <p class="vb-intro"><strong>3. Die richtige Haltung:</strong> Die Hände parallel vor dem Brustkorb halten – so, als würde ein unsichtbarer, elastischer Ball gehalten. Die Handflächen zeigen sich zugewandt, die Fingerspitzen berühren sich fast (etwa 5 bis 10 Zentimeter Abstand). Die Haltung kann dabei vertikal (Handflächen seitlich zueinander, wie beim Applaus) oder horizontal (Handflächen übereinander, wie auf dem Foto) ausprobiert werden – beides ist richtig. Ein sanftes Kippen und Drehen der Hände zwischen beiden Varianten fühlt sich an, als würde der imaginäre Ball von verschiedenen Seiten betastet.</p>
        <p class="vb-intro"><strong>4. Den Fokus lenken:</strong> Die Aufmerksamkeit ganz auf den Raum zwischen den Händen richten. Die Empfindungen wertfrei wahrnehmen: Wärme? Ein Pochen oder ein leichtes elektrisches Knistern? Ein Gefühl wie ein unsichtbares Kissen?</p>
        <p class="vb-intro"><strong>5. Das Spiel mit dem Abstand:</strong> Die Hände achtsam ein Stück auseinanderbewegen (auf etwa 15 bis 20 Zentimeter) und dann langsam wieder zusammenführen (auf etwa 3 bis 5 Zentimeter). Dieses sanfte „Pumpen" wiederholen und beobachten, wie sich der unsichtbare Widerstand verändert.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Der Blick über den Tellerrand: Wie es weitergehen kann</h2>
        <p class="vb-intro">Diese Grundübung ist erst der Anfang. Wer Freude daran hat, die innere Wahrnehmung zu schulen, kann das Prinzip der Energiearbeit Schritt für Schritt ausbauen und in faszinierende Richtungen vertiefen:</p>
        <p class="vb-intro" style="margin-top:1rem;"><strong>Das traditionelle Handauflegen:</strong> Eine jahrtausendealte Praxis, bei der durch gezieltes Auflegen der Hände auf bestimmte Körperregionen Entspannung, Ruhe und ein Gefühl von Geborgenheit vermittelt werden.</p>
        <p class="vb-intro" style="margin-top:1.2rem;"><strong>Qi Gong &amp; Prana-Heilung:</strong> Hier wird gelernt, den feinstofflichen Energiefluss (das Qi oder Prana) im eigenen Körper zu lenken, zu harmonisieren und gezielt Blockaden zu lösen.</p>
        <p class="vb-intro" style="margin-top:1.2rem;"><strong>Quantenheilung &amp; die Zwei-Punkt-Methode:</strong> Bei diesen modernen, bewusstseinsbasierten Ansätzen wird die bewusste Wahrnehmung mit einer sanften Intention verbunden, um alte Muster im physischen oder emotionalen System aufzulösen und Transformation in Gang zu setzen.</p>
        <p class="vb-intro" style="margin-top:1.2rem;">Die Zwei-Punkt-Methode wird in der <button class="inline-link" data-route="knowledge" style="background:none;border:none;padding:0;color:var(--copper);text-decoration:underline;cursor:pointer;font-family:inherit;font-size:inherit;">Wissensbasis</button> für jeden der 27 Subtypen einzeln auf „Seite 2" mit passenden Handpositionen und Kernpraxis erklärt – individuell zugeschnitten auf die jeweilige Subtyp-Thematik.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Fazit:</strong> Der Einstieg ist kinderleicht und erfordert nichts weiter als ein wenig Aufmerksamkeit und Neugier. Ein Ausprobieren lohnt sich – und zeigt, wie viel Ruhe und Faszination in den eigenen Händen liegt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Empfehlung zum Nachrüsten</h2>
        <p class="vb-intro" style="margin-bottom:.8rem;">Für die Erdung vor der Übung eignet sich der Boden – wer lieber im Sitzen übt, dem hilft eine passende Sitzunterlage für Erdung und einen aufrechten, entspannten Rücken.</p>
        ${affiliateBoxHtml("sitzhilfe", "Meditationsmatte", "Meditationsmatte bei Amazon ansehen")}
        <div style="margin-top:.8rem;">${affiliateBoxHtml("sitzhilfe", "Meditationskissen", "Meditationskissen bei Amazon ansehen")}</div>
        <div style="margin-top:.8rem;">${affiliateBoxHtml("sitzhilfe", "Meditationsbank", "Meditationsbank bei Amazon ansehen")}</div>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"knowledge", label:"Wissensbasis: Zwei-Punkt-Methode je Subtyp"},
        {route:"praxistipps-heilpraktiker/schwung-routine", label:"3-teilige Schwung-Routine"},
        {route:"praxistipps-heilpraktiker/faszienuebungen-rumpfgesundheit", label:"Faszienübungen für die Rumpfgesundheit"},
        {route:"situationskompass", label:"Situationskompass"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}

function bewegungWasserPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Bewegung im Element Wasser: Achtsame Langsamkeit für den Alltag</h1>
      <p class="lead-small">Der imaginäre Widerstand des Wassers als Bild für fließende, achtsame Bewegung – inspiriert von Tai Chi.</p>

      <div class="vb-section" style="max-width:100%;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Anmerkung zur Vertiefung: Der Ursprung der Bewegung</h2>
        <p class="vb-intro">Ein kleiner Blick hinter die Kulissen hilft vielleicht bei der Anwendung: Ursprünglich war Tai Chi (vollständig Tai Chi Chuan) tatsächlich einmal als Kampfkunst gedacht, bei der die langsamen, fließenden Bewegungen dazu dienten, Angriffe kontrolliert abzuwehren und die Kraft des Gegenübers umzuleiten.</p>
        <p class="vb-intro">Für die heutige Gesundheitspraxis darf dieser historische Ursprung jedoch wunderbar „entstaubt" werden: Die Menschen, die morgens in chinesischen Parks gemeinsam auf den Plätzen stehen, nutzen diese Techniken schon lange nicht mehr zum Kämpfen. Sie machen sich zunutze, dass die extreme Langsamkeit und die fließenden Abläufe den Geist zentrieren, die Gelenke mobilisieren und den Körper in eine tiefe innere Ruhe bringen.</p>
        <p class="vb-intro">Eine Kampfkunst muss also nicht erlernt werden – genutzt wird lediglich die Weisheit einer jahrhundertealten Bewegungsform, um im modernen Alltag ganz bei sich anzukommen.</p>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/bewegung-wasser/bewegung-wasser.jpg"
             alt="Frau schwebt achtsam und fließend unter Wasser über einem Korallenriff"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Die Übung: „Bewegung im Element Wasser"</h2>
        <p class="vb-intro">Um diese Bewusstheit zu finden, müssen keine komplizierten Choreografien auswendig gelernt werden. Stattdessen hilft ein Bild, die Langsamkeit in den Alltag zu bringen:</p>
        <p class="vb-intro" style="margin-top:1rem;"><strong>1. Das Bild:</strong> Die Vorstellung, bis zur Brust im Wasser zu stehen – etwa in einem ruhigen Meer. Bei jeder Bewegung lässt sich der Widerstand des Wassers an Armen, Beinen und Rumpf spüren.</p>
        <p class="vb-intro"><strong>2. Die Ausführung:</strong> Die Bewegung durch den Raum erfolgt im eigenen Tempo – ganz gleich, ob im Stehen, Gehen oder beim Heben der Arme.</p>
        <p class="vb-intro"><strong>3. Die Qualität:</strong> Durch den imaginären Widerstand des Wassers wird die Bewegung automatisch langsamer, fließend, weich und intensiv. Es braucht kein Nachdenken über einzelne Schritte – der Körper darf intuitiv entscheiden, wohin er sich bewegen möchte.</p>
        <p class="vb-intro"><strong>4. Der Fokus:</strong> Bei jeder Bewegung wird genau gespürt, wie sich der Körper anfühlt. Wo nimmt der Widerstand zu? Wo entsteht Fluss? Die Langsamkeit ist hier der Schlüssel: Sie hält den Geist im Hier und Jetzt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0 0 .7rem;"><strong style="color:var(--copper);">Warum das wirkt:</strong> Genau wie beim freien Tanzen geht es nicht um „richtige" oder „falsche" Schritte. Sobald der Kopf aufhört zu analysieren und der Körper beginnt, die Bewegung zu fühlen, entsteht eine tiefe Verbindung zu sich selbst. Die Mitte wird spürbar, der Geist kommt zur Ruhe, und die Energie kann wieder frei fließen.</p>
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Tipp für heute:</strong> Bei der nächsten Bewegung – sei es beim Gehen durch die Wohnung oder beim einfachen Strecken – lohnt sich kurz dieser „Unter-Wasser-Moment": die Dichte der Luft rundherum spüren, sich bewegen, als würde man durch ein sanftes Element gleiten, und die Ruhe genießen, die aus dieser bewussten Langsamkeit entsteht.</p>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/energiefeld-haende", label:"Das Energiefeld zwischen den Händen"},
        {route:"praxistipps-heilpraktiker/schwung-routine", label:"3-teilige Schwung-Routine"},
        {route:"tcm", label:"TCM · Meridiane · Akupunktur"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}

function unsichtbarerMagnetPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Der unsichtbare Magnet: Die Erdungs-Übung</h1>
      <p class="lead-small">Magnete an den Fußsohlen als Bild, um in Sekunden Erdung und mentale Ruhe herzustellen.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/unsichtbarer-magnet/unsichtbarer-magnet.jpg"
             alt="Frau steht geerdet im Wald, energetische Wurzeln wachsen aus ihren Fußsohlen in den Boden"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Viele Menschen sind im Alltag „kopflastig" und fühlen sich unkonzentriert oder gestresst. Diese Übung nutzt die Vorstellung von Magneten an den Fußsohlen, um sofort eine tiefe Verbindung zum Boden (Erdung) herzustellen und den Geist zu zentrieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Die Ausführung</h2>
        <p class="vb-intro">Aufrecht hinstellen und die Augen schließen. Die Knie bleiben dabei weich und entspannt, nicht durchgedrückt – das erlaubt dem Gewicht, wirklich nach unten zu sinken. Ruhig durch die Nase einatmen und durch den leicht geöffneten Mund ausatmen. Die Vorstellung: wie zwei Magnete an den Fußsohlen, die sanft, aber unwiderstehlich vom Erdmittelpunkt angezogen werden. Mit jedem Ausatmen sinkt das Gewicht ein Stück tiefer in den Boden, während die Wirbelsäule nach oben wächst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Warum es wirkt:</strong> Es beruhigt das Nervensystem in Sekundenschnelle und leitet überschüssige mentale Anspannung nach unten ab.</p>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/herz-tor-oeffnen", label:"Das Herz-Tor öffnen"},
        {route:"praxistipps-heilpraktiker/atem-wasserfall", label:"Der Atem-Wasserfall"},
        {route:"praxistipps-heilpraktiker/energiefeld-haende", label:"Das Energiefeld zwischen den Händen"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}

function herzTorOeffnenPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Das Herz-Tor öffnen: Weite und Verbindung spüren</h1>
      <p class="lead-small">Eine Atem-Bewegungs-Übung, die den Brustraum öffnet und für innere Weite sorgt.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/herz-tor-oeffnen/herz-tor-oeffnen.jpg"
             alt="Frau steht mit weit geöffneten Armen an einer Klippe über dem Meer, ein leuchtendes Herz-Zentrum strahlt auf ihrer Brust"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Viele Menschen neigen bei Stress dazu, sich körperlich und energetisch „kleinzumachen" – die Schultern ziehen nach vorne, der Brustkorb wird eng. Diese Übung wirkt dem gezielt entgegen, indem sie den Brustraum aktiviert, frische Energie einlädt und für innere Weite sorgt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Die Ausführung</h2>
        <p class="vb-intro"><strong>1. Die Ausgangsposition:</strong> Aufrecht und entspannt hinstellen. Die Hände flach übereinander auf das Brustbein (Herz-Zentrum) legen.</p>
        <p class="vb-intro"><strong>2. Das Öffnen (Einatmen):</strong> Tief durch die Nase einatmen. Dabei die Arme und Hände langsam in einem weiten, einladenden Bogen nach außen und leicht nach oben führen. Der Brustkorb öffnet sich maximal, der Blick geht sanft nach oben.</p>
        <p class="vb-intro"><strong>3. Die Zentrierung (Ausatmen):</strong> Ruhig durch den leicht geöffneten Mund ausatmen. Die Hände langsam wieder vor dem Körper zusammenführen und flach zurück auf das Brustbein legen. Nachspüren, wie sich die gesammelte Energie in der Mitte sammelt.</p>
        <p class="vb-intro"><strong>4. Wiederholung:</strong> Diesen fließenden Zyklus drei- bis fünfmal im eigenen Atemrhythmus wiederholen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0 0 .7rem;"><strong style="color:var(--copper);">Warum das wirkt:</strong> Die bewusste Kombination aus tiefer Öffnung und kontrollierter Atmung korrigiert sofort die Haltung, löst tief sitzende Verspannungen im Schulter- und Nackenbereich und erzeugt ein starkes Gefühl von innerer Größe, emotionaler Balance und Freiheit.</p>
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Tipp für heute:</strong> Diese Übung eignet sich immer dann, wenn ein Gefühl von Enge entsteht oder zu viel Last auf den Schultern liegt. Das „Herz-Tor" öffnet sich, und die Weite des Augenblicks kann eingeatmet werden.</p>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/unsichtbarer-magnet", label:"Der unsichtbare Magnet"},
        {route:"praxistipps-heilpraktiker/atem-wasserfall", label:"Der Atem-Wasserfall"},
        {route:"praxistipps-heilpraktiker/energiefeld-haende", label:"Das Energiefeld zwischen den Händen"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}

function atemWasserfallPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Der Atem-Wasserfall: Energetische Reinigung und Klarheit</h1>
      <p class="lead-small">Eine sanfte, energetische Dusche aus Atem und Bewegung für den Feierabend.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/atem-wasserfall/atem-wasserfall.jpg"
             alt="Frau im Wald hebt die Arme über den Kopf, ein Lichtschleier fließt wie ein Wasserfall an ihr herab"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Nach einem anstrengenden Tag oder vielen Kontakten fühlt man sich oft „voll" mit fremden Einflüssen oder mentalem Stress. Diese Übung funktioniert wie eine sanfte, energetische Dusche durch die bewusste Kombination von Atem und Bewegung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Die Ausführung</h2>
        <p class="vb-intro"><strong>1. Die Ausgangsposition:</strong> Aufrecht und entspannt hinstellen. Die Arme hängen locker an den Seiten herab.</p>
        <p class="vb-intro"><strong>2. Das Aufsteigen (Einatmen):</strong> Tief und gleichmäßig durch die Nase einatmen. Dabei die Arme und Hände langsam an den Seiten des Körpers nach oben führen, bis über den Kopf.</p>
        <p class="vb-intro"><strong>3. Das Reinigen (Ausatmen):</strong> Durch den leicht geöffneten Mund ausatmen. Die Hände mit den Handflächen nach unten langsam vor dem Körper in einem geraden Weg nach unten führen – wie einen sanften Wasserfall aus klarem Licht oder frischer Energie, der alles abstreift, was nicht mehr gebraucht wird, bis hinunter zum Boden.</p>
        <p class="vb-intro"><strong>4. Wiederholung:</strong> Diesen reinigenden Zyklus viermal im eigenen Rhythmus wiederholen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0 0 .7rem;"><strong style="color:var(--copper);">Warum das wirkt:</strong> Die bewusste Synchronisation von tiefer Atmung und einer abwärts gerichteten Handbewegung signalisiert dem Nervensystem sofort: Altes fließt ab, das System wird entlastet, Platz für Neues entsteht.</p>
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Tipp für heute:</strong> Der „Atem-Wasserfall" eignet sich besonders am Abend, um den Ballast des Tages symbolisch abzuwaschen und gereinigt und entspannt in den Feierabend zu starten.</p>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/unsichtbarer-magnet", label:"Der unsichtbare Magnet"},
        {route:"praxistipps-heilpraktiker/herz-tor-oeffnen", label:"Das Herz-Tor öffnen"},
        {route:"praxistipps-heilpraktiker/energiefeld-haende", label:"Das Energiefeld zwischen den Händen"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}

function vitruvEnneagrammPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Die Vitruv-Enneagramm-Bewusstseinsübung: Der Kreis der Neun</h1>
      <p class="lead-small">Geometrische Harmonie des Vitruvianischen Menschen und die 9 Punkte des Enneagramms im eigenen Körper aktivieren.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/vitruv-enneagramm/kreis-der-neun.jpg"
             alt="Drei Positionen der Übung: horizontale Ausdehnung im Quadrat, vertikale Himmelsstreckung, Enneagramm-Kreis-Entfaltung"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Diese Übung verbindet die geometrische Harmonie des Vitruvianischen Menschen von Leonardo da Vinci mit der Struktur des Enneagramms. Sie führt von der irdischen Verwurzelung über die horizontale Weite bis hin zur vertikalen Ausrichtung zum Himmel, während die 9 Punkte des Enneagramms im Körper aktiviert werden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">1. Die Ausgangsposition (Das Zentrum / Punkt 9)</h2>
        <p class="vb-intro"><strong>Haltung:</strong> Aufrecht hinstellen, die Füße geschlossen, die Arme hängen locker an den Seiten.</p>
        <p class="vb-intro"><strong>Fokus:</strong> Kurz die Augen schließen und die Aufmerksamkeit in der Mitte sammeln, im Raum zwischen Herz und Solarplexus.</p>
      </div>
      <div class="vb-section" style="max-width:100%;margin-top:.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Praxis-Tipp:</strong> Dies ist der Nullpunkt und der Ursprung im Enneagramm. Tief einatmen und die feste Verbindung der Fußsohlen mit dem Boden spüren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">2. Phase Eins: Die horizontale Weite (Das Quadrat – Die 4 Hauptpunkte)</h2>
        <p class="vb-intro"><strong>Bewegung:</strong> Die Arme waagerecht zur Seite auf Schulterhöhe öffnen. Die Handflächen zeigen nach unten, während die Füße fest und schulterbreit am Boden stehen (analog zu Da Vincis erster Figur im Quadrat).</p>
        <p class="vb-intro"><strong>Geometrie im Körper:</strong> Punkt 1 & 2 – linker und rechter Fuß (irdisches Fundament). Punkt 3 & 4 – linke und rechte Hand (Ausdehnung in die materielle Welt).</p>
      </div>
      <div class="vb-section" style="max-width:100%;margin-top:.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Praxis-Tipp:</strong> Den physischen Raum bewusst einnehmen. Die Stabilität zwischen Links und Rechts, Oben und Unten spüren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">3. Phase Zwei: Die vertikale Himmelsstreckung (Die Verbindung Oben und Unten)</h2>
        <p class="vb-intro"><strong>Bewegung:</strong> Einatmen, die waagerechte Haltung lösen und beide Arme ganz nach oben in den Himmel strecken, dabei auf die Zehenspitzen steigen, sodass sich die Fersen vom Boden lösen und anheben.</p>
        <p class="vb-intro"><strong>Geometrie:</strong> Der Körper bildet eine senkrechte Achse, die den Himmel (oberster Punkt der Hände) mit der Erde (Fußsohlen) verbindet.</p>
      </div>
      <div class="vb-section" style="max-width:100%;margin-top:.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Praxis-Tipp:</strong> Diese vertikale Ausrichtung repräsentiert die heilige 3-6-9-Achse des Enneagramms. So lang wie möglich werden, um die Begrenzung des Alltagsbewusstseins zu transzendieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">4. Phase Drei: Die Entfaltung des Enneagramm-Kreises (Die Übergangspunkte)</h2>
        <p class="vb-intro"><strong>Bewegung:</strong> Aus der gestreckten Himmels-Position die Arme langsam in einer weiten, kreisenden Bewegung nach außen und unten senken und öffnen (analog zu Da Vincis zweiter Figur im Kreis).</p>
        <p class="vb-intro"><strong>Struktur der 9 Punkte im Körper:</strong> Die Vorstellung, wie die Energie nun bahnenartig durch die 9 Zonen des Enneagramms fließt – aus der eigenen Innenperspektive heraus gedacht, nicht wie von außen auf das Enneagramm-Symbol geblickt: Kopf (Punkt 9): der klare Beobachter und die Übersicht. Linke Schulter & Arm (Punkte 1 & 2): Struktur und zugewandte Herzensverbindung. Linke Hand (Punkt 3): Tatkraft und bewusste Manifestation. Linkes & rechtes Bein (Punkte 4 & 5): emotionale Tiefe und innerer Rückzug. Rechte Hand (Punkt 6): innere Sicherheit und gesunde Grenzsetzung. Rechte Schulter & Herz (Punkte 7 & 8): Lebensfreude, Vision und fundamentale Stärke.</p>

        <h2 style="font-size:1.15rem;font-weight:700;margin:1.6rem 0 .6rem;color:var(--ink);">5. Integration und Abschluss</h2>
        <p class="vb-intro"><strong>Bewegung:</strong> Nach einer vollständigen Kreisbewegung die Arme langsam wieder an den Körper zurückführen.</p>
      </div>
      <div class="vb-section" style="max-width:100%;margin-top:.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Praxis-Tipp:</strong> Nachspüren. Wahrnehmen, wie die Kombination aus irdischem Fundament, himmlischer Streckung und der Kreisbewegung den Körper zentriert und das Nervensystem harmonisiert hat.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2.5rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Vitruvianischer Mensch & Enneagramm</h2>
      </div>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/vitruv-enneagramm/vitruvianischer-mensch.jpg"
             alt="Der Vitruvianische Mensch von Leonardo da Vinci, überlagert mit dem geometrischen Gitter des Enneagramms"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Das Bild zeigt die klassische Zeichnung von Leonardo da Vinci, eingebettet in die überlagerte Struktur des Quadrats und des Kreises. Darübergelegt ist das geometrische Gitter des Enneagramms (Hexagramm und Kreis), wobei bewusst auf Zahlen verzichtet wurde, um die reine geometrische Harmonie darzustellen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.6rem 0 .6rem;color:var(--ink);">Historische Anmerkung: Leonardo da Vincis „Vitruvianischer Mensch" – eine Brücke zwischen Makrokosmos und Mikrokosmos</h2>
        <p class="vb-intro">Die berühmte Zeichnung von Leonardo da Vinci, entstanden um 1490, ist weit mehr als eine anatomische Studie. Sie ist eine visuelle Philosophie, die den Menschen als den Mittelpunkt der Welt darstellt. Basierend auf den Schriften des römischen Architekten Vitruv, illustriert das Bild die idealen Proportionen des menschlichen Körpers, wie sie in der Geometrie der Antike verstanden wurden.</p>
        <p class="vb-intro">Das Bild zeigt den Menschen in zwei überlagerten Positionen: im Quadrat als Symbol für die irdische, materielle Welt, die vier Elemente und die physischen Grenzen des Körpers; im Kreis als Symbol für den vollkommenen, göttlichen Kosmos, die Ewigkeit und die spirituelle Dimension. Leonardo da Vinci gelang es, den Menschen als Schnittpunkt dieser beiden Welten darzustellen. Indem die eigenen Proportionen in diese geometrische Ordnung eingebettet werden, wird die Resonanz zwischen dem inneren Mikrokosmos und dem universellen Makrokosmos erkennbar.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.6rem 0 .6rem;color:var(--ink);">Verwandtschaft im Geiste: G. I. Gurdjieffs Sacred Movements</h2>
        <p class="vb-intro">Wer sich mit bewusster, choreografierter Körperarbeit beschäftigt, stößt früher oder später auf George I. Gurdjieff (ca. 1866–1949), den Mystiker und Begründer des „Vierten Wegs". Gurdjieff entwickelte rund 250 präzise einstudierte Bewegungsabläufe zu eigens komponierter Musik – bekannt als „Sacred Movements" oder Tempeltänze. Sie vereinten Elemente aus Sufi-, buddhistischen, taoistischen und gnostischen Traditionen mit eigenen Schöpfungen und verfolgten ein doppeltes Ziel: bestimmte Wissensinhalte im Körper selbst erfahrbar zu machen und zugleich einen harmonischen, wachen Bewusstseinszustand zu kultivieren – jenseits automatisierter Gesten, Gedankenmuster und emotionaler Reaktionen. Zentral war dabei die „geteilte Aufmerksamkeit": Körper, Gefühl und Verstand sollten gleichzeitig und bewusst im Gleichgewicht gehalten werden.</p>
        <p class="vb-intro">Die Vitruv-Enneagramm-Bewusstseinsübung berührt dieses Thema – bewusste, langsame Bewegung als Weg zu wacher Präsenz – nur in diesem übergeordneten Sinne. Sie ist keine Ableitung aus Gurdjieffs System, sondern eine eigenständige Übung von Detlef Rathmer, die wie alle Praxistipps dieser Rubrik aus über drei Jahrzehnten eigener heilpraktischer Erfahrung mit Patienten entstanden ist.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.6rem 0 .6rem;color:var(--ink);">Die Verbindung zum Enneagramm</h2>
        <p class="vb-intro">Die Überlagerung mit dem Enneagramm-Symbol (hier in seiner reinen geometrischen Form ohne Zahlen) unterstreicht diese universelle Ordnung. Wie das Enneagramm die Dynamik menschlicher Psyche und Entwicklung abbildet, so zeigt der Vitruvianische Mensch die statische und dynamische Harmonie der physischen Existenz. Beide Systeme dienen als Landkarte, um die tiefere Verbindung des Menschen zu sich selbst und zum Kosmos zu verstehen und zu verkörpern.</p>
        <p class="vb-intro">Mehr zu Leonardo da Vinci und seiner Enneagrammtypisierung (SO5w4) gibt es im <button class="inline-link" data-route="beruehmte-leonardo-da-vinci" style="background:none;border:none;padding:0;color:var(--copper);text-decoration:underline;cursor:pointer;font-family:inherit;font-size:inherit;">Porträt bei Berühmte Persönlichkeiten</button>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Empfehlungen zum Vertiefen</h2>
        <p class="vb-intro" style="margin-bottom:.8rem;"><strong>Poster (Kunstdruck):</strong> Vitruvianischer Mensch</p>
        ${affiliateBoxHtml("vitruv", "Poster", "Poster bei Amazon ansehen")}
        <p class="vb-intro" style="margin:1.2rem 0 .8rem;"><strong>Leinwandbild:</strong> Vitruvianischer Mensch</p>
        ${affiliateBoxHtml("vitruv", "Leinwandbild", "Leinwandbild bei Amazon ansehen")}

        <details style="margin-top:1.5rem;border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                          background:var(--paper);list-style:none;user-select:none;font-weight:700;
                          font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;">&#9672;</span>
            <span style="flex:1;">Buchtipps (5)</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            <p class="vb-intro" style="margin-bottom:.8rem;"><strong>Buchtipp:</strong> Leonardo – Sämtliche Gemälde und Zeichnungen</p>
            ${affiliateBoxHtml("vitruv", "Buch Gemälde und Zeichnungen", "Buch bei Amazon ansehen")}
            <p class="vb-intro" style="margin:1.2rem 0 .8rem;"><strong>Buchtipp:</strong> Leonardo da Vinci: Die Biographie (Walter Isaacson)</p>
            ${affiliateBoxHtml("vitruv", "Buch Biographie", "Buch bei Amazon ansehen")}
            <p class="vb-intro" style="margin:1.2rem 0 .8rem;"><strong>Buchtipp:</strong> Leonardo da Vinci: Erfindungen eines Genies (Pop-up)</p>
            ${affiliateBoxHtml("vitruv", "Buch Erfindungen Pop-up", "Buch bei Amazon ansehen")}
            <p class="vb-intro" style="margin:1.2rem 0 .8rem;"><strong>Buchtipp:</strong> 100 der größten Erfindungen aller Zeiten</p>
            ${affiliateBoxHtml("vitruv", "Buch 100 Erfindungen", "Buch bei Amazon ansehen")}
            <p class="vb-intro" style="margin:1.2rem 0 .8rem;"><strong>Buchtipp:</strong> Vitruv – Zehn Bücher über Architektur</p>
            ${affiliateBoxHtml("vitruv", "Buch Zehn Bücher über Architektur", "Buch bei Amazon ansehen")}
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"beruehmte-leonardo-da-vinci", label:"Porträt: Leonardo da Vinci (SO5w4)"},
        {route:"praxistipps-heilpraktiker/unsichtbarer-magnet", label:"Der unsichtbare Magnet"},
        {route:"praxistipps-heilpraktiker/energiefeld-haende", label:"Das Energiefeld zwischen den Händen"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}

function bewusstesInnehaltenPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Die Praxis des bewussten Innehaltens: ›Let it be‹ im Alltag</h1>
      <p class="lead-small">Kein Körperritual, sondern reine Wahrnehmung – kurze, bewusste Stopps mitten im Alltag als Weg zurück zur eigenen Essenz.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/bewusstes-innehalten/bewusstes-innehalten.jpg"
             alt="Frau hält mitten in der belebten Fußgängerzone inne, Hand auf dem Herzen, während der Alltag um sie herum weiterzieht"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Diese Übung führt zurück zur wahren Essenz: der reinen Wahrnehmung. Sie ergänzt die körperlichen und energetischen Sequenzen aus dieser Rubrik perfekt, indem sie den Fokus ganz auf den Geist, die Achtsamkeit, die energetischen Mechanismen und Prinzipien sowie das Erkennen der eigenen inneren Automatismen richtet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">1. Die Grundhaltung: Das bewusste Stoppen</h2>
        <p class="vb-intro"><strong>Die Ausführung:</strong> Im Laufe des Alltags immer wieder kleine, abrupte Phasen des Stopps einbauen. Innehalten – mitten in einer Tätigkeit, beim Gehen oder vor einer Entscheidung.</p>
        <p class="vb-intro"><strong>Das Prinzip ›Let it be‹:</strong> In diesem Moment absolut nichts tun. Weder etwas dagegen noch etwas dafür tun. Nicht eingreifen, sondern einfach nur wahrnehmen, was gerade ist – ohne Wertung, ohne Urteil, vorbehaltslos und gegenwärtig.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">2. Der Umgang mit dem inneren Widerstand</h2>
        <p class="vb-intro"><strong>Die Realität der Übung:</strong> Erkennen, wie schwer dieses reine Nicht-Tun ist. Der Verstand und vor allem die intrinsische Enneagramm-Motivation (der typspezifische, unbewusste Antrieb) drängen permanent ins Handeln – und sei es nur in ein reines geistiges und gedankliches Reflektieren oder ein emotionales Grundrauschen ohne konkrete Handlung.</p>
        <p class="vb-intro"><strong>Die Falle:</strong> Wenn der innere Kritiker flüstert: „Das ist zu schwer, das kann ich nicht", dann auch diese Stimme nur wahrnehmen.</p>
        <p class="vb-intro"><strong>Die sanfte Rückkehr:</strong> Sich nicht dafür verurteilen, wenn Ablenkung entsteht oder alte Muster wieder greifen. Stattdessen immer wieder ganz sanft und geduldig zum reinen Innehalten zurückkehren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">3. Die Entdeckung der Essenz (Wer wir wirklich sind)</h2>
        <p class="vb-intro"><strong>Wahrnehmung vs. Identifikation:</strong> Gedanken, Gefühle und körperliche Empfindungen während des Innehaltens unvoreingenommen wahrnehmen.</p>
        <p class="vb-intro"><strong>Der Perspektivwechsel:</strong> Das, was diese Dinge wahrnimmt – die reine Wahrnehmung selbst –, das ist der Mensch in seiner tiefsten Tiefe (Raum). Im Alltag identifiziert man sich fälschlicherweise ständig mit dem, was man nicht ist (den wechselnden Gedanken und Emotionen in der polaren Dimension der Zeit), anstatt mit dem, der wahrnimmt.</p>
        <p class="vb-intro"><strong>Das Ziel:</strong> Alle Praxistipps und energetischen Übungen dienen einzig dazu, zu mehr Wachsamkeit, Gegenwärtigkeit und Raumgefühl zu erwachen und ins vielbesagte, aber selten erreichte Hier und Jetzt zu führen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">4. Die Analogie des Gitarrenspielens</h2>
        <p class="vb-intro"><strong>Die Hürde:</strong> Diese Übung ist anfangs ungewohnt und fordert heraus. Man kann die Theorie bewusster Achtsamkeit jahrelang bewundern und toll finden – so wie man eine Gitarre anschauen kann.</p>
        <p class="vb-intro"><strong>Der erste Ton:</strong> Doch wenn man das Instrument nicht in die Hand nimmt und trotz mangelnder Vorkenntnisse den ersten, vielleicht noch holprigen Ton spielt, wird sich nichts verändern. Bewusstheit will täglich praktisch geübt werden.</p>
      </div>
      <div class="vb-section" style="max-width:100%;margin-top:.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Praxis-Tipp:</strong> Bei sehr unbewusstem Agieren neigt man dazu zu denken: „Das tut mir nicht gut, ich lasse es lieber und probiere etwas Neues." Doch genau hier gilt es dranzubleiben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">5. Wirkung und Longevity</h2>
        <p class="vb-intro">Dieses Innehalten im Alltag ist von fundamentaler Wichtigkeit. Im Sinne von Longevity und ganzheitlicher Gesundheit wirkt diese Entschleunigung lebensverlängernd und führt in allen Bereichen des Lebens spürbar zu mehr Ruhe, Tiefe und Verbesserung. Das Leben bekommt dadurch Tiefe, Souveränität, stille Kraft und Resilienz gegenüber den äußeren Widrigkeiten der individuellen Lebensumstände, die zunächst bleiben, aber vollkommen anders wahrgenommen werden – ohne den ständigen Filter aus unbewussten Gedanken, Gefühlen und sonstigen Empfindungen und Sinneswahrnehmungen.</p>
        <p class="vb-intro" style="margin-top:1rem;">Mit der Zeit verändert sich das Raum-Zeit-Empfinden zugunsten des Raums. Während so das innere Raumbewusstsein wächst, lebt der Mensch weniger im dichten, leidvollen Zeitgefühl an der Oberfläche seiner Lebensumstände. Qualität und Tiefe des Lebensgefühls nehmen nach und nach zu, was viele Menschen als Stille oder inneren Frieden bezeichnen – die Verankerung im Seinsgefühl.</p>
        <p class="vb-intro" style="margin-top:1rem;">Dieser Zustand ist schwer in Worte zu fassen, weil Worte auch nur den Weg dahin weisen können. Jeder Mensch darf und muss diesen elementaren Schritt von den wegweisenden Worten zum wahren inneren Erkennen und Verstehen letztlich selbst gehen. Bekanntlich gibt es diesbezüglich keinen Weg zum Glück, denn der Weg ist das Ziel.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Buchtipp</h2>
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                          background:var(--paper);list-style:none;user-select:none;font-weight:700;
                          font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;">&#9672;</span>
            <span style="flex:1;">Spirituelle Literatur von Detlef Rathmer (6)</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Sieben praxisnahe Wege, die helfen, sich selbst näherzukommen – ohne Umwege, ohne Schönrederei, direkt und klar.", "7 Wege zu Dir selbst")}
            <div style="margin-top:.8rem;">${bookTip("nichts-und-alles", "Ein Buch über das Wesen des Bewusstseins – zwischen Leere und Fülle, zwischen dem Nichts und dem Alles des Lebens.", "Nichts und Alles")}</div>
            <div style="margin-top:.8rem;">${bookTip("der-raum-hinter-allem", "Eine Erkundung des Bewusstseins jenseits der Gedanken – über den stillen Raum, der hinter allem Erleben liegt.", "Der Raum hinter allem")}</div>
            <div style="margin-top:.8rem;">${bookTip("sei-still-und-wisse-ich-bin-gott", "Ein spirituelles Buch über die tiefste Stille in uns und die Erfahrung von Transzendenz jenseits aller Konzepte.", "Sei still und wisse – ich bin Gott!")}</div>
            <div style="margin-top:.8rem;">${bookTip("heilung-als-erinnerung", "Heilung nicht als Reparatur, sondern als Erinnerung an das, was wir eigentlich sind – ein tiefgründiger Blick auf Gesundheit und Ganzheit.", "Heilung als Erinnerung")}</div>
            <div style="margin-top:.8rem;">${bookTip("meta-intelligenz", "Wie wir lernen, unsere eigenen Gedanken zu beobachten – und damit einen neuen Grad an innerer Freiheit und Klarheit gewinnen.", "Meta-Intelligenz")}</div>
          </div>
        </details>
        <p style="font-size:.8rem;color:var(--muted);margin:.8rem 0 0;">Alle Titel und weitere spirituelle Literatur von Detlef Rathmer finden sich auch auf der Homepage des Verlagshauses Rathmer unter „Persönliche Entwicklung".</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Spirituelle Tassen</h2>
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                          background:var(--paper);list-style:none;user-select:none;font-weight:700;
                          font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;">☕</span>
            <span style="flex:1;">Spirituelle Tassen von Detlef Rathmer (3)</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            <a class="book-tip" href="https://www.redbubble.com/de/i/tasse/ACCEPT-WHAT-IS-von-DetlefRathmer/41453519/7yqg" target="_blank" rel="noopener sponsored">
              <span class="book-tip__icon">☕</span>
              <div class="book-tip__text">
                <strong>Tasse »Accept What Is«</strong>
                <span>Der Kern des bewussten Innehaltens auf einer Tasse – Kaffee oder Tee, ganz wie man mag – bei Redbubble bestellen.</span>
              </div>
              <span class="book-tip__arrow">→</span>
            </a>
            <div style="margin-top:.8rem;">
              <a class="book-tip" href="https://www.redbubble.com/de/i/tasse/It-is-difficult-to-find-happiness-von-DetlefRathmer/41301737/7yqg" target="_blank" rel="noopener sponsored">
                <span class="book-tip__icon">☕</span>
                <div class="book-tip__text">
                  <strong>Tasse »It is difficult to find happiness«</strong>
                  <span>Ein stiller Denkanstoß für den Alltag – bei Redbubble bestellen.</span>
                </div>
                <span class="book-tip__arrow">→</span>
              </a>
            </div>
            <div style="margin-top:.8rem;">
              <a class="book-tip" href="https://www.redbubble.com/de/i/tasse/LOOK-INSIDE-YOURSELF-von-DetlefRathmer/41458576/7yqg" target="_blank" rel="noopener sponsored">
                <span class="book-tip__icon">☕</span>
                <div class="book-tip__text">
                  <strong>Tasse »Look Inside Yourself«</strong>
                  <span>Die Einladung zur inneren Einkehr auf einer Tasse – bei Redbubble bestellen.</span>
                </div>
                <span class="book-tip__arrow">→</span>
              </a>
            </div>
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/energiefeld-haende", label:"Das Energiefeld zwischen den Händen"},
        {route:"praxistipps-heilpraktiker/vitruv-enneagramm", label:"Die Vitruv-Enneagramm-Bewusstseinsübung"},
        {route:"stille", label:"9 Minuten Stille sitzen"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}

function zungenstreckUebungPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Die Zungenstreck-Übung zur Stressregulation: Von Einstein, Vagusnerv und tierischen Instinkten</h1>
      <p class="lead-small">Das berühmte Einstein-Foto als Vorbild – wie das bewusste Strecken der Zunge über den Vagusnerv akute Anspannung löst.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="./assets/schaubilder/zungenstreck-uebung/zungenstreck-uebung.jpg"
             alt="Albert Einstein streckt dem Fotografen Arthur Sasse am 14. März 1951 die Zunge heraus"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Das weltberühmte Foto von Albert Einstein, auf dem er am 14. März 1951 dem Fotografen Arthur Sasse die Zunge herausstreckt, ist längst absolute Popkultur und ein Sinnbild für unkonventionelles Denken. Doch hinter dieser scheinbar humorvollen Geste verbirgt sich weit mehr als ein genialer Schnappschuss. Ähnlich wie fernöstliche Praktiken, die traditionell von Mönchen und Yogi-Meistern zur Fokussierung und emotionalen Beruhigung genutzt werden, macht sich das bewusste, intensive Dehnen der Zunge eine direkte anatomische Verbindung zum zentralen Nervensystem zunutze. Das Ausstrecken bricht akute muskuläre und nervliche Spannungen auf, die sich unbemerkt im Kiefer-, Hals- und Nackenbereich festsetzen, wenn wir unter Druck stehen oder von Sorgen geplagt werden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Anleitung: So wird die Übung durchgeführt</h2>
        <p class="vb-intro"><strong>1. Die Position:</strong> Setzen oder stellen Sie sich aufrecht, geerdet und bequem hin, um eine freie Atmung zu ermöglichen.</p>
        <p class="vb-intro"><strong>2. Die Ausführung:</strong> Strecken Sie Ihre Zunge so weit wie möglich nach vorne und unten heraus – ganz genau so, wie es Albert Einstein auf dem historischen Bild vorgemacht hat.</p>
        <p class="vb-intro"><strong>3. Die Haltung halten:</strong> Halten Sie diese intensive Position für ca. 30 Sekunden. Atmen Sie dabei ruhig und gleichmäßig weiter, und vermeiden Sie es, währenddessen die Luft anzuhalten.</p>
        <p class="vb-intro"><strong>4. Die Wiederholung:</strong> Machen Sie davon drei Durchgänge direkt hintereinander, jeweils unterbrochen von kurzen, tiefen Atemzügen.</p>
        <p class="vb-intro"><strong>5. Der ideale Rhythmus:</strong> Integrieren Sie dies als feste, kleine Gewohnheit zweimal täglich in Ihren Alltag – morgens direkt nach dem Aufstehen, um wach, aber ausgeglichen in den Tag zu starten, und abends vor dem Schlafen, um den erlebten Tag mental und körperlich abzuschließen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Warum das funktioniert: Der Nervus Vagus als Notfall-Bremse</h2>
        <p class="vb-intro">Der absolute Schlüssel zu dieser Methode ist der Nervus Vagus (der zehnte Hirnnerv). Als längster Nerv des parasympathischen Nervensystems („Rest-and-Digest") fungiert er als der wichtigste Gegenspieler unseres Stresssystems und ist maßgeblich für Entschleunigung, Regeneration und die Reduktion von Stresshormonen zuständig.</p>
        <p class="vb-intro" style="margin-top:1rem;">Der Mund-, Rachen- und Zungenbereich ist extrem dicht mit feinen Nervenenden versorgt, die direkt an den Hirnstamm und damit unmittelbar an den Vagusnerv gekoppelt sind. Wenn wir unter Stress stehen, neigen wir evolutionär bedingt dazu, die Zunge unbemerkt an den Gaumen zu pressen, die Zähne fest zusammenzubeißen oder den Unterkiefer zu verkrampfen. Das bewusste, maximale Strecken der Zunge bricht diesen Faszien- und Muskelkrampf im Unterkiefer- und Halsbereich auf. Es sendet dadurch ein unmissverständliches biologisches Signal an das Gehirn, den Flucht- und Kampfmodus (Sympathikus) sofort herunterzuregeln.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Die faszinierende Parallele zum Hund: Mehr als nur Temperaturregulation</h2>
        <p class="vb-intro">Der Blick in die Tierwelt zeigt uns erstaunliche Parallelen, die verdeutlichen, wie tief verankert dieser Mechanismus in der Evolution ist. Hunde strecken bekanntermaßen beim Hecheln die Zunge extrem weit heraus. Dass dies primär der Thermoregulation und der Kühlung des Blutes dient, weil Hunde kaum funktionierende Schweißdrüsen am Körper besitzen, ist allgemein bekannt. Die moderne Verhaltensbiologie zeigt jedoch, dass das sogenannte Stresshecheln eine ebenso starke psychische und hormonelle Komponente hat.</p>
        <p class="vb-intro" style="margin-top:1rem;">Wenn ein Hund unter Angst, Schmerz oder akutem psychischen Druck steht, schüttet sein Körper rasant Cortisol und Adrenalin aus. Das führt zu einer abrupten Erhöhung des Stoffwechsels und damit zu einer inneren Hitzeentwicklung. Hunde hecheln daher oft völlig unabhängig von der Außentemperatur oder körperlicher Anstrengung – rein als vegetative Stressreaktion. Ähnlich wie der Mensch nutzen Tiere den Mund- und Zungenraum für eine orale Selbstregulation: Das intensive Bewegen und Dehnen der Zunge aktiviert den Vagusnerv und signalisiert dem Organismus unmittelbar: Die Gefahr ist vorüber, schalte um in den erlösenden Entspannungsmodus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Die frühkindliche Parallele: Warum schon Babys die Zunge herausstrecken</h2>
        <p class="vb-intro">Der Blick auf die ersten Lebensjahre des Menschen fügt dem Gesamtbild ein weiteres, faszinierendes Puzzleteil hinzu: Kleinkinder und Säuglinge strecken extrem häufig und ganz instinktiv die Zunge heraus – lange bevor sie es bewusst steuern könnten. Das hat tiefgreifende entwicklungsbiologische und neurologische Gründe.</p>
        <p class="vb-intro" style="margin-top:1rem;"><strong>Die orale Erkundungsphase:</strong> In den ersten Lebensjahren ist der Mundraum das wichtigste Sinnesorgan des Kindes. Über Zunge und Lippen ertasten, schmecken und begreifen Babys ihre Umwelt, da der Tastsinn im Mund deutlich früher und feiner ausgebildet ist als an den Händen. Schon der angeborene Rooting- und Zungenstoßreflex des Neugeborenen sorgt dafür, dass die Zunge von Geburt an aktiv am Erkunden, Saugen und Sich-Orientieren beteiligt ist.</p>
        <p class="vb-intro" style="margin-top:1rem;"><strong>Das Spiegeln und die soziale Bindung:</strong> Schon Neugeborene sind fähig, Gesichtsausdrücke wie das Herausstrecken der Zunge zu imitieren – ein Phänomen, das die Säuglingsforscher Andrew Meltzoff und M. Keith Moore erstmals 1977 in einer inzwischen klassischen Studie dokumentierten. Das ist ein uralter, evolutionärer Mechanismus für den Beziehungsaufbau, die Kommunikation und das Lernen durch Nachahmung.</p>
        <p class="vb-intro" style="margin-top:1rem;"><strong>Neurologische Reifung:</strong> Da das Nervensystem eines Kleinkindes noch rasant wächst, ist das bewusste oder unbewusste Bewegen der Zunge auch ein Ausdruck davon, wie sich Motorik und die Ansteuerung über Hirnnerven (wie eben den Vagusnerv) zunehmend vernetzen. Kinder regulieren sich über solche Mund- und Kieferbewegungen oft auch selbst, wenn sie müde oder reizüberflutet sind – ein früher Vorläufer genau der Selbstberuhigung, die die Zungenstreck-Übung im Erwachsenenalter bewusst wieder aufgreift.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Die kulturelle Dimension: Wenn die Zunge Frieden stiftet</h2>
        <p class="vb-intro">Während wir im Westen beim Zungenrausstrecken sofort an Albert Einsteins legendäres Foto von 1951 oder an eine freche Geste unter Kindern denken, blickt dieser Ausdruck in anderen Teilen der Welt auf eine ganz andere Geschichte zurück. Besonders im Himalaya-Raum ist das Zeigen der Zunge seit Jahrhunderten tief in der Kultur verwurzelt – ganz ohne Berührung, aber mit umso mehr Bedeutung.</p>
        <p class="vb-intro" style="margin-top:1rem;">Die Legende führt ins 9. Jahrhundert zum tibetischen König Lang Darma zurück, der als grausamer Tyrann gefürchtet war und angeblich eine schwarze Zunge hatte. Da die Tibeter fest an die Wiedergeburt glauben, wuchs die Angst, der Herrscher könnte als böser Geist zurückkehren. Um bei einer Begegnung sofort zu beweisen, dass man absolut friedlich gesinnt ist und kein finsteres Erbe in sich trägt, streckten sich die Menschen im Vorbeigehen die Zunge entgegen. Die gesunde, rosa Farbe war der beste Beweis für gute Absichten.</p>
        <p class="vb-intro" style="margin-top:1rem;">Was einst als Schutzschild gegen einen Tyrannen begann, wandelte sich im Laufe der Zeit zu einem Zeichen tiefen Respekts und der Höflichkeit. Wenn sich Menschen in traditionellen Regionen Tibets begegnen, ziehen sie oft respektvoll den Hut und zeigen kurz die Zunge – ein freundlicher Gruß, der im Grunde sagt: „Ich komme in Frieden."</p>
        <p class="vb-intro" style="margin-top:1rem;">So schließt sich der Kreis: Ob als kleine Gesundheitsübung für den Vagusnerv, als genialer Schnappschuss eines Weltphysikers oder als jahrhundertealtes Friedenssymbol im tibetischen Kulturraum – die Zunge ist weit mehr als nur ein Organ zum Schmecken und Sprechen. Sie ist ein echtes Ausdrucksmittel für das, was in uns vorgeht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Gesundheitliche Vorteile und der Einfluss auf den „Cortisolbauch"</h2>
        <p class="vb-intro">Wer diese kleine, aber hochwirksame Übung regelmäßig in seinen Tag einbaut – besonders dann, wenn der Terminkalender drückt oder der Stresspegel um 11 Uhr vormittags seinen Höhepunkt erreicht –, profitiert von einer Reihe langfristiger gesundheitlicher Effekte:</p>
        <p class="vb-intro" style="margin-top:1rem;"><strong>Sofortige Notfall-Entlastung:</strong> In akuten Stressmomenten wirkt die Zungen-Übung wie ein kurzer, effektiver „Reset-Knopf", um den Puls zu beruhigen, den mentalen Tunnelblick zu durchbrechen und sofort wieder handlungsfähig zu werden.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Langfristige Cortisol-Regulation:</strong> Wer diesen Mini-Break zur festen Routine macht, senkt auf Dauer das chronische Grundniveau des Stresshormons Cortisol im Blut. Der Körper trainiert sozusagen, schneller wieder in die Balance zu finden.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Besserer Schlaf:</strong> Das abendliche Dehnen hilft nachweislich dabei, das überreizte Nervensystem abends rechtzeitig herunterzufahren, was die Einschlafphase und die nächtliche Regeneration tiefgreifend unterstützt.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Der Effekt auf den „Cortisolbauch":</strong> Ein sogenannter Cortisolbauch entsteht durch chronischen, dauerhaften Stress, der dazu führt, dass der Körper vermehrt Fett im Bauchraum (viszerales Fett) einlagert und den Blutzuckerspiegel durcheinanderbringt. Natürlich verbrennt die 30-sekündige Zungenübung keine Kalorien direkt, aber sie setzt direkt an der Wurzel des Problems an. Langfristig führt ein niedrigeres, ausgeglicheneres Stressniveau dazu, dass der Körper deutlich weniger stressbedingtes Fett einlagert und auch hartnäckige Heißhungerattacken nachlassen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;">
        <p style="font-size:.9rem;line-height:1.7;color:var(--ink);margin:0;"><strong style="color:var(--copper);">Heilpraktiker-Tipp für den Alltag:</strong> Diese Übung braucht kein Hilfsmittel und lässt sich unauffällig fast überall einbauen – am Schreibtisch vor einem schwierigen Gespräch, im Auto vor der roten Ampel oder direkt nach dem Aufwachen. Genau diese Niedrigschwelligkeit macht sie zu einem der einfachsten Notfall-Werkzeuge gegen akute Anspannung, das diese Rubrik zu bieten hat.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Die Zungenstreck-Übung und das Enneagramm: Wirkung auf alle drei Zentren</h2>
        <p class="vb-intro">Das Enneagramm unterteilt Persönlichkeiten in drei große Zentren der Intelligenz und der Bewältigungsstrategien: das Kopf-Zentrum (Typ 5, 6, 7), das Herz-Zentrum (Typ 2, 3, 4) und das Körper- bzw. Bauch-Zentrum (Typ 8, 9, 1). Jedes Zentrum reagiert auf Stress auf eine ganz eigene Art – und genau darin liegt der Grund, warum die Zungenstreck-Übung für alle drei gleichermaßen wirkt: Sie setzt nicht bei einer bestimmten Denk- oder Gefühlsstrategie an, sondern direkt beim Nervensystem, das allen drei Zentren gemeinsam zugrunde liegt, und dient so als wirksamer Hebel, um aus festgefahrenen Mustern auszusteigen.</p>

        <h3 style="font-size:1rem;font-weight:700;margin:1.4rem 0 .5rem;color:var(--ink);">1. Das Kopf-Zentrum (Typ 5, 6, 7): Vom mentalen Karussell in den Körper</h3>
        <p class="vb-intro"><strong>Das Muster unter Stress:</strong> Mentale Typen neigen dazu, sich bei Unsicherheit oder Druck in ihren Gedanken zu verlieren. Analysieren, sich sorgen (Typ 6), Alternativen durchplanen (Typ 7) oder sich in den Elfenbeinturm zurückziehen (Typ 5) tritt an die Stelle des Handelns. Das Nervensystem bleibt im Dauer-Modus, während der Körper dabei völlig vergessen wird.</p>
        <p class="vb-intro" style="margin-top:.6rem;"><strong>Die Wirkung der Übung:</strong> Eine 30-sekündige Zungenübung wirkt hier wie ein plötzlicher „Sicherungsschalter". Sie unterbricht das unaufhörliche Kopfkino abrupt, zwingt den Verstand durch einen intensiven physischen Reiz in den gegenwärtigen Moment zurück und erdet die im Kopf überhitzte Energie sofort im physischen Körper.</p>

        <h3 style="font-size:1rem;font-weight:700;margin:1.4rem 0 .5rem;color:var(--ink);">2. Das Herz-Zentrum (Typ 2, 3, 4): Das Abstreifen von Image und emotionalem Druck</h3>
        <p class="vb-intro"><strong>Das Muster unter Stress:</strong> Gefühlsorientierte Typen kreisen stark um ihr emotionales Selbstbild und die Reaktionen anderer. Typ 2 will unverzichtbar sein, Typ 3 über Leistung glänzen, Typ 4 leidet oft an innerer Melancholie und dem Gefühl, nicht zu genügen. Unter Stress staut sich enorme emotionale Anspannung an, die sich häufig physisch im Brust- und Halsbereich bemerkbar macht – Schluckbeschwerden, eine wie zugeschnürte Kehle.</p>
        <p class="vb-intro" style="margin-top:.6rem;"><strong>Die Wirkung der Übung:</strong> Das weite Herausstrecken der Zunge ist im Grunde ein hochemotionaler Akt der Entgrenzung: Es bricht mit jedem perfekten Image, nimmt den Druck, „gut dastehen zu müssen", und erinnert an eine spielerische Leichtigkeit, wie sie auch Einsteins Geste vermittelt. Es öffnet symbolisch wie körperlich den Halsraum, löst den emotionalen Kloß und hilft, sich von der Last äußerer Erwartungen frei zu machen.</p>

        <h3 style="font-size:1rem;font-weight:700;margin:1.4rem 0 .5rem;color:var(--ink);">3. Das Körper- bzw. Bauch-Zentrum (Typ 8, 9, 1): Das Lösen von tiefem Widerstand und Kontrolle</h3>
        <p class="vb-intro"><strong>Das Muster unter Stress:</strong> Bauch-Typen reagieren auf Stress instinktiv mit Wut, Kontrolle oder Rückzug. Typ 8 geht in den direkten Kampf, Typ 1 verfällt in starren Perfektionismus und innere Verurteilung, Typ 9 betäubt Konflikte und rutscht in eine passive Trägheit. All das speichert sich tief als muskuläre Panzerung im Kiefer, Nacken und Unterleib ab – Zähneknirschen, ein fester, unnachgiebiger Biss.</p>
        <p class="vb-intro" style="margin-top:.6rem;"><strong>Die Wirkung der Übung:</strong> Da Bauch-Typen Stress stark über körperliche Spannung regulieren, setzt die Zungenübung direkt an ihrem Hauptthema an: der körperlichen Kontrolle. Das maximale Dehnen der Kiefer- und Zungenmuskulatur bricht den physischen „Beißreflex" auf. Es signalisiert dem oft unnachgiebigen System ein bewusstes Loslassen von Härte, senkt den adrenalingetriebenen Kampftonus und öffnet den Weg für echte Entspannung.</p>

        <p class="vb-intro" style="margin-top:1.2rem;">Bemerkenswert dabei: Die Übung braucht kein Wissen über den eigenen Subtyp oder Grundtyp, um zu wirken – sie umgeht die kopfgesteuerte Selbstanalyse, die gerade bei Kopf-Typen selbst schon wieder zur Vermeidungsstrategie werden kann, und setzt stattdessen unmittelbar am Nervensystem an, das allen neun Typen gemeinsam ist.</p>

        <h3 style="font-size:1rem;font-weight:700;margin:1.4rem 0 .5rem;color:var(--ink);">Fazit für die Enneagramm-Arbeit</h3>
        <p class="vb-intro">Egal welchem Typ man angehört: Die Enneagramm-Arbeit kann mitunter schmerzhaft konfrontierend sein, wenn man auf die eigenen blinden Flecken blickt. Die Geste verbindet tiefe Körperarbeit über den Vagusnerv mit einer gesunden Prise Selbstironie – perfekt, um die eigene Persönlichkeit nicht zu bierernst zu nehmen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Buchtipps</h2>
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                          background:var(--paper);list-style:none;user-select:none;font-weight:700;
                          font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;">&#9672;</span>
            <span style="flex:1;">Vertiefende Literatur von Detlef Rathmer (3)</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("wenn-die-stille-brennt", "Wenn innere Erschöpfung auf das Enneagramm trifft – Burnout, Grenzverlust und der Weg zurück zu sich selbst.", "Wenn die Stille brennt – Burnout")}
            <div style="margin-top:.8rem;">${bookTip("leidenschaft-und-heilung", "27 Subtypen – Leidenschaften, Tugenden und Heilungswege direkt aus der therapeutischen Praxis.", "Leidenschaft und Heilung")}</div>
            <div style="margin-top:.8rem;">${bookTip("heilung-als-erinnerung", "Heilung nicht als Reparatur, sondern als Erinnerung an das, was wir eigentlich sind.", "Heilung als Erinnerung")}</div>
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"praxistipps-heilpraktiker/unsichtbarer-magnet", label:"Der unsichtbare Magnet: Die Erdungs-Übung"},
        {route:"praxistipps-heilpraktiker/herz-tor-oeffnen", label:"Das Herz-Tor öffnen"},
        {route:"beruehmte-albert-einstein", label:"Portrait: Albert Einstein (SO5w4)"},
        {route:"practice", label:"Werkzeuge"},
      ])}
    </section>
  `);
}


function kaufenPage() {
  return shell(`
    <section class="narrow centered" style="padding:2rem 1rem 1rem;">
      <p class="eyebrow">Zugang kaufen</p>
      <h1 style="font-size:2rem;margin-bottom:.5rem;">Enneagramm-Heilungskompass</h1>
      <p class="lead-small" style="margin-bottom:2rem;">Das interaktive Navigationssystem f\u00fcr alle 27 Subtypen \u2014 Heilmittel, Musik, TCM, \u00e4therische \u00d6le, Tagesimpulse und das gesamte Lebenswerk von Detlef Rathmer.</p>
    </section>
    <section class="narrow" style="padding:0 1rem 1.5rem;">
      <div style="background:var(--cream,#f9f6f0);border-radius:16px;padding:1.5rem;margin-bottom:1.5rem;font-size:.97rem;line-height:1.7;">
        <h3 style="margin-top:0;">Was ist der Enneagramm-Heilungskompass?</h3>
        <p>Eine Synthese aus jahrzehntelanger therapeutischer Arbeit von Detlef Rathmer \u2014 interaktiv, pers\u00f6nlich, sofort nutzbar.</p>
        <p>Detlef Rathmer ist direkter Sch\u00fcler von Dr. Claudio Naranjo, einem der einflussreichsten Enneagramm-Lehrer weltweit \u2014 dieses pers\u00f6nlich weitergegebene Wissen flie\u00dft direkt in den Heilungskompass ein.</p>
        <p>Kein Buch kann das leisten, was diese App kann: Du gibst deinen Enneagrammtyp ein \u2014 und bekommst sofort alles, was du brauchst. Kein Bl\u00e4ttern, kein Suchen, kein Zusammensetzen aus dutzenden Quellen.</p>
        <h3>Was nur diese App kann:</h3>
        <ul style="list-style:none;padding:0;margin:0 0 1rem;display:flex;flex-direction:column;gap:.75rem;">
          <li>\ud83d\udd0d <strong>Alles auf einen Blick</strong> \u2014 Hom\u00f6opathie, Bachbl\u00fcten, Sch\u00fc\u00dfler-Salze, Edelsteine, Tees, \u00e4therische \u00d6le, TCM, Musik, Kindheitspr\u00e4gung \u2014 f\u00fcr deinen Subtyp, sofort verf\u00fcgbar</li>
          <li>\ud83d\udcda <strong>Synthese des gesamten Werkes</strong> \u2014 was in 60+ B\u00fcchern verteilt ist, findest du hier geb\u00fcndelt an einem Ort</li>
          <li>\ud83c\udfaf <strong>Subtypgenau</strong> \u2014 nicht \u201eTyp 4 allgemein", sondern genau dein Subtyp mit seiner eigenen Dynamik</li>
          <li>\ud83d\udd04 <strong>Lebt und w\u00e4chst</strong> \u2014 die App wird laufend aktualisiert und erweitert, du bekommst alle Updates automatisch</li>
          <li>\u26a1 <strong>Interaktiv</strong> \u2014 du erlebst dein Profil, statt es nur zu lesen</li>
          <li>&#127775; <strong>Ber\u00fchmte Pers\u00f6nlichkeiten</strong> \u2014 ${BERUEHMT_PORTRAITS.length} Portr\u00e4ts aus Kultur, Musik &amp; Gesellschaft durch die Linse des Enneagramms</li>
          <li>&#128269; <strong>Spannende Kriminalf\u00e4lle (Kriminalpsychologie)</strong> \u2014 ${KRIMINAL_PORTRAITS.length} bekannte T\u00e4ter durch die Linse des Enneagramms: lehrreich, tiefenpsychologisch, nie rei\u00dferisch</li>
        </ul>
        <h3>F\u00fcr wen ist das gedacht?</h3>
        <p>F\u00fcr alle, die ihren Enneagrammtyp bereits kennen und tiefer gehen wollen. F\u00fcr Therapeuten, Berater und Coaches. F\u00fcr Menschen, die sich selbst verstehen wollen \u2014 nicht oberfl\u00e4chlich, sondern wirklich.</p>
        <h3>Einmaliger Kauf \u2014 lebenslanger Zugang:</h3>
        <p>\u20ac 79 \u2014 einmalig, kein Abo. Alle zuk\u00fcnftigen Updates sind inklusive.</p>
      </div>
    </section>
    <section class="narrow" style="padding:0 1rem 2rem;">
      <div style="background:var(--cream,#f9f6f0);border-radius:16px;padding:2rem;margin-bottom:1.5rem;">
        <div style="display:flex;align-items:baseline;gap:.75rem;margin-bottom:1rem;">
          <span style="font-size:2.2rem;font-weight:700;font-family:'EB Garamond',serif;">\u20ac 79</span>
          <span style="font-size:.85rem;color:var(--muted);">einmalig \u00b7 kein Abo</span>
        </div>
        <ul style="list-style:none;padding:0;margin:0 0 1.5rem;display:flex;flex-direction:column;gap:.6rem;">
          <li>\u2713 Alle 27 Subtyp-Profile vollst\u00e4ndig</li>
          <li>\u2713 Heilmittel-Kompass (Hom\u00f6opathie, Bach, Sch\u00fc\u00dfler, Edelsteine, Tees)</li>
          <li>\u2713 \u00c4therische \u00d6le, TCM, Kindheitspr\u00e4gung</li>
          <li>\u2713 Musik & Tagesimpulse</li>
          <li>\u2713 70 Kriminalportr\u00e4ts \u2013 Enneagramm-Tiefenanalyse ber\u00fchmter F\u00e4lle</li>
          <li>\u2713 100+ Schaubilder & Galerie</li>
          <li>\u2713 Komplette Bibliothek mit 60+ B\u00fcchern</li>
          <li>\u2713 Alle zuk\u00fcnftigen Updates inklusive</li>
        </ul>
        
        <a href="https://buy.stripe.com/fZuaEXdJ64GegJY9jl4gg3E" target="_blank" rel="noopener"
           style="display:block;width:100%;text-align:center;background:#2d4a3e;color:#fff;padding:1rem;border-radius:10px;font-size:1.1rem;font-weight:600;text-decoration:none;box-sizing:border-box;">
          Jetzt Zugang kaufen \u2192 \u20ac 79
        </a>
        <p style="font-size:.8rem;opacity:.6;text-align:center;margin-top:.75rem;">Sicherer Kauf \u00fcber Stripe &middot; auch per PayPal &middot; Sofortiger Zugang nach Zahlung</p>
      </div>
      <div style="background:var(--cream,#f9f6f0);border-radius:16px;padding:1.5rem;">
        <h3 style="margin-top:0;">Fragen?</h3>
        <p style="margin:0;font-size:.95rem;">Bei Fragen zum Zugang schreib an <a href="mailto:detlefrathmer@t-online.de">detlefrathmer@t-online.de</a></p>
      </div>
    </section>
  `);
}

function wegweiserPremiumPage() {
  return shell(`
    ${pageHeader("wegweiser-premium")}
    <section class="narrow centered" style="padding:2rem 1rem 1rem;">
      <p class="eyebrow">Wegweiser Premium</p>
      <h1 style="font-size:2rem;margin-bottom:.5rem;">Mehr als 40 Bücher, direkt im Gespräch</h1>
      <p class="lead-small" style="margin-bottom:2rem;">Der Wegweiser ist der KI-Assistent im Enneagramm-Heilungskompass. Normalerweise durchsucht er nur die App-Inhalte – mit Premium bezieht er zusätzlich das gesamte veröffentlichte Werk von Detlef Rathmer mit ein.</p>
    </section>
    <section class="narrow" style="padding:0 1rem 1.5rem;">
      <div style="background:var(--cream,#f9f6f0);border-radius:16px;padding:1.5rem;margin-bottom:1.5rem;font-size:.97rem;line-height:1.7;">
        <h3 style="margin-top:0;">Was ändert sich mit Premium?</h3>
        <p>Ohne Premium antwortet der Wegweiser aus der App selbst – schon das ist viel. Mit Premium bezieht er zusätzlich mehr als 40 Bücher mit ein: über 30 Jahre schriftstellerisches Schaffen zu Enneagramm, Homöopathie, Bachblüten, Schüsslersalzen, Archetypen, Beziehungen und mehr. Fragen werden dadurch spürbar tiefer und präziser beantwortet, mit echten Quellenangaben aus dem gesamten Werk statt nur aus der App.</p>
        <h3>Was du bekommst:</h3>
        <ul style="list-style:none;padding:0;margin:0 0 1rem;display:flex;flex-direction:column;gap:.75rem;">
          <li>📚 <strong>Zugriff auf über 40 Bücher</strong> – von den Enneagramm-Standardwerken bis zu den homöopathischen Fachbüchern, alle gleichzeitig durchsuchbar</li>
          <li>🎯 <strong>Präzisere Antworten</strong> – der Wegweiser zitiert konkret, aus welchem Buch eine Aussage stammt, statt zu verallgemeinern</li>
          <li>💬 <strong>Direkt im Chat</strong> – keine Suche in einzelnen Büchern nötig, einfach fragen</li>
          <li>🔄 <strong>Wächst mit</strong> – neue Bücher werden laufend ergänzt, ohne Aufpreis</li>
        </ul>
        <h3>Für wen ist das gedacht?</h3>
        <p>Für alle, die mit dem Wegweiser schon gerne arbeiten und noch tiefer gehen wollen – Therapeuten, Berater, Coaches, und alle, die sich selbst wirklich verstehen wollen, nicht nur oberflächlich.</p>
      </div>
    </section>
    <section class="narrow" style="padding:0 1rem 2rem;">
      <div style="background:var(--cream,#f9f6f0);border-radius:16px;padding:2rem;">
        <h3 style="margin-top:0;text-align:center;">Wähle dein Modell</h3>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;margin-top:1rem;">
          <a href="https://buy.stripe.com/aFa28r34s7Sq51ganp4gg3L" target="_blank" rel="noopener"
             style="flex:1;min-width:220px;max-width:280px;background:#2d4a3e;color:#fff;padding:1.3rem 1rem;border-radius:12px;text-decoration:none;text-align:center;">
            <div style="font-size:1.4rem;font-weight:700;font-family:'EB Garamond',serif;">4,99 €<span style="font-size:.85rem;font-weight:400;"> / Monat</span></div>
            <div style="font-size:.82rem;opacity:.85;margin-top:.3rem;">Abo, jederzeit kündbar</div>
          </a>
          <a href="https://buy.stripe.com/6oU00j9sQ3Ca9hw5354gg3M" target="_blank" rel="noopener"
             style="flex:1;min-width:220px;max-width:280px;background:#2d4a3e;color:#fff;padding:1.3rem 1rem;border-radius:12px;text-decoration:none;text-align:center;">
            <div style="font-size:1.4rem;font-weight:700;font-family:'EB Garamond',serif;">49,99 €<span style="font-size:.85rem;font-weight:400;"> / Jahr</span></div>
            <div style="font-size:.82rem;opacity:.85;margin-top:.3rem;">Abo, verlängert sich automatisch, jederzeit kündbar</div>
          </a>
        </div>
        <p style="font-size:.8rem;opacity:.6;text-align:center;margin-top:1.2rem;">Sicherer Kauf über Stripe · Zugang per Login-Link im Wegweiser-Chat</p>
      </div>
    </section>
  `);
}

function libraryPage() {
  const copy = text.routes.library;
  return shell(`
    ${pageHeader("library")}
    <section class="narrow centered">
      <p class="eyebrow">${copy.eyebrow}</p>
      <h1>${copy.headline}</h1>
      <p class="lead-small">${copy.lead}</p>
    </section>
    <section class="library-grid">
      ${architectureAreas
        .map((area) => `<article><h2>${area.title}</h2><p>${area.text}</p></article>`)
        .join("")}
    </section>
    <section class="formula-overview">
      <div class="formula-overview__copy">
        <p class="eyebrow">${copy.systemOverview}</p>
        <h2>${copy.formulaHeadline}</h2>
        <p>${copy.formulaText}</p>
      </div>
      <figure>
        <img src="./assets/grundformel-rathmer-enneagramm.jpg" alt="${copy.formulaAlt}" />
      </figure>
    </section>
    <section class="library-grid">
      ${libraryItems
        .map(([title, text]) => `<article><h2>${title}</h2><p>${text}</p></article>`)
        .join("")}
    </section>
    ${werkSection()}
    <section style="background:#2c2c2c;padding:3.5rem 1.5rem;text-align:center;">
      <div style="max-width:700px;margin:0 auto;">
        <div style="color:#c4a456;font-size:0.78rem;letter-spacing:0.25em;text-transform:uppercase;margin-bottom:0.8rem;">Interview \u00b7 22 Minuten</div>
        <h2 style="font-family:'EB Garamond',Georgia,serif;font-size:clamp(1.5rem,3vw,2rem);font-weight:400;color:#f5e9d0;margin:0 0 0.8rem;line-height:1.35;">\u00bbWarum dein Enneagrammtyp<br>deine Gesundheit bestimmt\u00ab</h2>
        <p style="color:rgba(245,233,208,0.75);line-height:1.7;margin:0 0 1.8rem;font-size:0.97rem;max-width:560px;margin-left:auto;margin-right:auto;">Ein Gespr\u00e4ch \u00fcber das Verlagsprogramm des Verlagshaus Rathmer \u2014 von Hom\u00f6opathie \u00fcber Enneagramm bis zum Weltfrieden. Was diese B\u00fccher bewegen k\u00f6nnen und warum das Wissen \u00fcber den eigenen Typ so vieles ver\u00e4ndert.</p>
        <audio controls style="width:100%;max-width:560px;border-radius:6px;accent-color:#c4a456;margin-bottom:0.5rem;">
          <source src="https://res.cloudinary.com/ymooybdl/video/upload/kompass/audio/interview-gesundheit.mp4" type="audio/mp4">
          Ihr Browser unterst\u00fctzt keinen Audio-Player.
        </audio>
        <p style="color:rgba(245,233,208,0.45);font-size:0.78rem;margin:0.5rem 0 0;">Laufzeit ca. 22 Minuten \u00b7 Verlagshaus Rathmer</p>
      </div>
    </section>
  `);
}

function werkSection() {
  const w = text.werk;
  const filterLabels = {
    all:                     "Alle",
    enneagramm:              "Enneagramm",
    homoeopathie:            "Hom\u00f6opathie",
    "persoenliche-entwicklung": "Pers\u00f6nl. Entwicklung",
    kalender:                "Kalender",
  };
  const filterBar = Object.entries(filterLabels).map(([key, label]) =>
    `<button class="werk-filter${key === "all" ? " is-active" : ""}" data-werk-filter="${key}">${label}</button>`
  ).join("");

  const cards = werkRegister.map((book) => {
    const isPending = book.status === "link_pruefen";
    const linkLabel = book.category === "kalender" ? "Zum Kalender" : book.id.includes("hoerbuch") ? "Zum H\xf6rbuch" : w.openBook;
    const verlagsLink = isPending
      ? `<span class="deepen-link deepen-link--pending">${w.linkPending}</span>`
      : `<a class="deepen-link" href="${book.link}" target="_blank" rel="noopener">${linkLabel} \u2192</a>`;
    const bodLink = !isPending && book.bodUrl
      ? `<a class="deepen-link deepen-link--bod" href="${book.bodUrl}" target="_blank" rel="noopener">Bei BoD kaufen \u2192</a>`
      : "";
    const coverImg = `<img src="${R2_CDN}assets/covers/${book.id}.jpg" alt="" loading="lazy"
      onerror="this.parentElement.style.display='none'"
      style="width:60px;flex-shrink:0;border-radius:4px;object-fit:cover;align-self:flex-start;box-shadow:0 1px 4px rgba(0,0,0,.18);">`;
    return `
      <article class="werk-card" data-category="${book.category || ""}" style="display:flex;gap:.75rem;align-items:flex-start;">
        <div style="width:60px;flex-shrink:0;">${coverImg}</div>
        <div style="min-width:0;">
          <h3 style="margin-top:0;">${book.title}</h3>
          <p class="werk-card__themes">${w.themes}: ${book.themes.join(" \u00b7 ")}</p>
          <div class="werk-card__links">${verlagsLink}${bodLink}</div>
        </div>
      </article>`;
  }).join("");

  return `
    <section class="werk">
      <div class="section-divider"><span>${w.title}</span></div>
      <p class="lead-small werk__lead">${w.lead}</p>
      <div class="werk-filterbar">${filterBar}</div>
      <div class="werk-grid">${cards}</div>
    </section>
  `;
}

// \u2500\u2500 QUIZ ENGINE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function _quizSeededRng(seed) {
  let s = (seed >>> 0) || 1;
  return function() {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    return (s >>> 0) / 0xffffffff;
  };
}

function _quizShuffleAnswers(question, rng) {
  const items = question.a.map((text, i) => ({ text, correct: i === question.c }));
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function _quizPickQuestions(seed) {
  const qd = window._quizData || [];
  const rng = _quizSeededRng(seed);
  const pick = (pool, n) => {
    const arr = pool.slice().sort(() => rng() - 0.5);
    return arr.slice(0, Math.min(n, arr.length));
  };
  const leicht = qd.filter(q => q.d === "leicht");
  const mittel = qd.filter(q => q.d === "mittel");
  const schwer = qd.filter(q => q.d === "schwer");
  const chosen = [...pick(leicht, 4), ...pick(mittel, 4), ...pick(schwer, 2)];
  return chosen.sort(() => rng() - 0.5);
}

window._startQuiz = function() {
  try {
    const seed = Date.now() & 0xffffffff;
    const rng  = _quizSeededRng(seed);
    const questions = _quizPickQuestions(seed);
    if (!questions || !questions.length) {
      alert("Quiz-Daten nicht geladen. Bitte Seite neu laden.");
      return;
    }
    _quizState = {
      phase: "question",
      questions,
      current: 0,
      score: 0,
      answered: false,
      selectedIdx: null,
      shuffledAnswers: _quizShuffleAnswers(questions[0], rng),
      seed,
    };
    if (location.hash === "#quiz") { render(); } else { location.hash = "quiz"; }
  } catch(e) {
    alert("Quiz-Fehler: " + e.message);
  }
};

window._answerQuiz = function(idx) {
  if (!_quizState || _quizState.answered) return;
  _quizState.answered = true;
  _quizState.selectedIdx = idx;
  if (_quizState.shuffledAnswers[idx].correct) _quizState.score++;
  if (location.hash === "#quiz") { render(); } else { location.hash = "quiz"; }
};

window._nextQuizQuestion = function() {
  if (!_quizState) return;
  _quizState.current++;
  if (_quizState.current >= _quizState.questions.length) {
    _quizState.phase = "result";
  } else {
    _quizState.answered = false;
    _quizState.selectedIdx = null;
    const rng = _quizSeededRng((Date.now() ^ (_quizState.current * 2654435761)) >>> 0);
    _quizState.shuffledAnswers = _quizShuffleAnswers(_quizState.questions[_quizState.current], rng);
  }
  if (location.hash === "#quiz") { render(); } else { location.hash = "quiz"; }
};

window._resetQuiz = function() {
  _quizState = null;
  if (location.hash === "#quiz") { render(); } else { location.hash = "quiz"; }
};


// \u2500\u2500 Globale Suche \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function _sucheResults(q) {
  const lq = q.toLowerCase();
  const res = { subtypen: [], portraits: [], register: [], zitate: [], laender: [] };

  Object.values(subtypeProfiles).forEach(p => {
    const hay = [p.code, p.title, p.titleAlt, p.archetype, p.subtitle || ""].join(" ").toLowerCase();
    if (hay.includes(lq)) {
      res.subtypen.push({ label: p.code + " \u2013 " + p.title, sub: p.archetype || "", route: "subtype/" + p.id });
    }
  });

  KRIMINAL_PORTRAITS.forEach(p => {
    const hay = (p.name + " " + (p.beschreibung || "") + " " + (p.typ || "")).toLowerCase();
    if (hay.includes(lq)) res.portraits.push({ label: p.name, sub: p.typ || "", route: p.route });
  });

  registerEntries.forEach(e => {
    const hay = (e.term + " " + (e.description || "")).toLowerCase();
    if (hay.includes(lq)) res.register.push({ label: e.term, sub: (e.description || "").slice(0, 80), route: e.route });
  });

  LAENDER_REGIONEN.forEach(r => {
    r.laender.forEach(l => {
      if (l.name.toLowerCase().includes(lq)) {
        res.laender.push({ label: l.name, sub: r.region + " \u00b7 Typ " + l.typ, route: "laenderzuordnungen|ll-" + l.iso });
      }
    });
  });

  (window._zitateData || []).forEach(z => {
    const hay = (z.q + " " + z.a + " " + (z.t || "")).toLowerCase();
    if (hay.includes(lq)) {
      const label = "\u201e" + z.q.slice(0, 65) + (z.q.length > 65 ? "\u2026" : "") + "\u201c";
      res.zitate.push({ label, sub: z.a + (z.y ? " (" + z.y + ")" : ""), route: "zitate" });
    }
  });

  return res;
}

function _sucheResultsHtml(res, q) {
  const total = res.subtypen.length + res.portraits.length + res.register.length + res.zitate.length + res.laender.length;
  if (total === 0) return `<p class="suche-hint">Keine Ergebnisse f\u00fcr \u201e${q}\u201c gefunden.</p>`;

  const hl = (txt) => {
    const i = txt.toLowerCase().indexOf(q.toLowerCase());
    if (i === -1) return txt;
    return txt.slice(0, i) + `<mark class="suche-hl">${txt.slice(i, i + q.length)}</mark>` + txt.slice(i + q.length);
  };

  const group = (title, items) => {
    if (!items.length) return "";
    const more = items.length > 6 ? `<p class="suche-more">+ ${items.length - 6} weitere</p>` : "";
    return `<div class="suche-group">
      <h3 class="suche-group-title">${title} <span class="suche-count">${items.length}</span></h3>
      ${items.slice(0, 6).map(it => `<button class="suche-result" data-route="${it.route}">
        <span class="suche-result-label">${hl(it.label)}</span>
        ${it.sub ? `<span class="suche-result-sub">${it.sub}</span>` : ""}
      </button>`).join("")}${more}</div>`;
  };

  return `<p class="suche-total">${total} Ergebnis${total === 1 ? "" : "se"}</p>
    ${group("Subtypen", res.subtypen)}
    ${group("Kriminalportr\u00e4ts", res.portraits)}
    ${group("Register &amp; Schaubilder", res.register)}
    ${group("L\u00e4nder", res.laender)}
    ${group("Zitate der Weisen", res.zitate)}`;
}

window._updateSuche = function(q) {
  _sucheQuery = q;
  const box = document.getElementById("suche-ergebnisse");
  if (!box) return;
  if (q.length < 2) { box.innerHTML = `<p class="suche-hint">Mindestens 2 Zeichen eingeben\u2026</p>`; return; }
  const res = _sucheResults(q);
  box.innerHTML = _sucheResultsHtml(res, q);
  box.querySelectorAll("[data-route]").forEach(btn => {
    btn.addEventListener("click", () => { _sucheQuery = ""; go(btn.dataset.route); });
  });
};

function suchePage() {
  const hasQ = _sucheQuery.length >= 2;
  return shell(`
    ${pageHeader("suche")}
    <section class="narrow suche-page" style="padding:1.5rem 1rem 4rem;">
      <div class="suche-box">
        <svg class="suche-box-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input class="suche-input" id="suche-input" type="search"
               placeholder="Subtypen, Portr\u00e4ts, Schaubilder, Zitate\u2026"
               oninput="window._updateSuche(this.value)"
               value="${_sucheQuery.replace(/"/g, '&quot;')}"
               autocomplete="off" spellcheck="false" />
      </div>
      <div id="suche-ergebnisse">
        ${hasQ ? _sucheResultsHtml(_sucheResults(_sucheQuery), _sucheQuery) : `<p class="suche-hint">Mindestens 2 Zeichen eingeben\u2026</p>`}
      </div>
    </section>
  `);
}


function frankAbagnalePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Frank Abagnale Jr. \u2013 Kriminalpsychologie")}
      <div id="js-back-target" data-route="kriminalpsychologie" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/frank-abagnale-portrait.jpg" alt="Frank Abagnale Jr. \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Frank Abagnale Jr.</p>
        <p class="krim-portrait-typ">SO7w6 &middot; Sozialer Typ 7 mit Sechserfl\u00fcgel</p>
        <p style="color:var(--muted);font-size:0.9rem;margin:0;">US-amerikanischer Hochstapler und Betr\u00fcger &middot; Tierentsprechung: Biber</p>
      </div>

      <p class="psycho-intro">
        <strong>Frank William Abagnale Jr.</strong>, geboren am 27. April 1948
        in Bronxville, New York, gilt als einer der geschicktesten Hochstapler
        der Kriminalgeschichte. Als seine Eltern sich scheiden lie\u00dfen \u2013 er war sechzehn \u2013
        lief er von zu Hause fort und begann eine beispiellose Karriere als
        Betr\u00fcger: Zwischen 1964 und 1969 gab er sich als Pan-Am-Pilot,
        p\u00e4diatrischer Assistenzarzt, Staatsanwalt in Louisiana und FBI-Agent aus.
        Er soll gef\u00e4lschte Schecks im Wert von rund 2,5 Millionen Dollar
        in sechsundzwanzig L\u00e4ndern eingel\u00f6st haben.
        1969 wurde er in Frankreich verhaftet, in mehreren L\u00e4ndern inhaftiert
        und schlie\u00dflich in die USA ausgeliefert. Nach seiner Entlassung arbeitete
        er jahrzehntelang als Sicherheitsberater f\u00fcr Banken und Beh\u00f6rden.
        Steven Spielbergs Film \u201eCatch Me If You Can\u201c (2002) machte seine Geschichte weltber\u00fchmt.
        Sp\u00e4tere journalistische Recherchen stellten Teile seiner Biografie infrage \u2013
        m\u00f6glicherweise ist auch die Geschichte des gr\u00f6\u00dften Hochstaplers selbst eine Hochstapelei.
      </p>

      <div class="vb-section" style="background:rgba(232,146,42,0.08);border-left:3px solid #e8922a;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Frank Abagnale Jr.</strong> wird dem <strong>Sozialen Typ 7
        mit Sechserfl\u00fcgel (SO7w6)</strong> im Enneagramm zugeordnet.
        Naranjo nannte diesen Subtyp <em>Sacrifice</em> (Opferbereitschaft):
        Die soziale Sieben verzichtet auf den ungebremsten, hedonistischen Genuss
        der anderen Siebener-Subtypen und stellt sich stattdessen scheinbar
        selbstlos in den Dienst eines gr\u00f6\u00dferen Systems, einer Gruppe, einer Mission.
        Der Verzicht ist jedoch eine Inszenierung: Wer sich unentbehrlich macht,
        sichert sich Zugang zu immer neuen B\u00fchnen, Rollen und M\u00f6glichkeiten.
        Bei Abagnale zeigte sich das als rastlose Suche nach neuen Systemen,
        in die er sich als n\u00fctzliches, gesch\u00e4tztes Mitglied einf\u00fcgen konnte \u2013
        Fluggesellschaft, Klinik, Kanzlei, zuletzt das FBI selbst.
        Der Sechserfl\u00fcgel bringt eine zus\u00e4tzliche Sicherheitsorientierung:
        das Bed\u00fcrfnis, Autorit\u00e4ten und Systeme auf ihre Vertrauensw\u00fcrdigkeit
        zu testen, und die tiefe Sehnsucht, irgendwann selbst als vertrauensw\u00fcrdig
        in ein stabiles System aufgenommen zu werden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Der Biber</h3>
        <p class="vb-intro">Der <strong>Biber</strong> ist das Tier der sozialen Sieben \u2013 ein
        Baumeister, kein Einzelg\u00e4nger. Er verschwendet keine Energie im Alleingang,
        sondern errichtet Strukturen, die einem gr\u00f6\u00dferen Zweck dienen: den Damm,
        das Revier, das Netzwerk aus Kan\u00e4len, die das ganze \u00d6kosystem ver\u00e4ndern.
        Er ist gesch\u00e4ftig, geschickt, optimistisch \u2013 und stets damit besch\u00e4ftigt,
        sich in ein System einzubauen, das ihn tr\u00e4gt und in dem er unentbehrlich wird.
        Abagnale war dieser Biber: Er baute sich nicht in eine Rolle ein, um zu
        verschwinden, sondern um Teil eines funktionierenden Ganzen zu werden \u2013
        einer Fluglinie, eines Krankenhauses, einer Kanzlei, eines Bundesamts.
        Jede neue Identit\u00e4t war ein neuer Damm, ein neues Bauprojekt, mit dem er
        sich Zugeh\u00f6rigkeit und Bewegungsfreiheit zugleich verschaffte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Blickqualit\u00e4t</h3>
        <p class="vb-intro"><strong>a) Charmant, redegewandt, sofort vertraut wirkend:</strong>
        Abagnale trat nicht als Blender auf, der Misstrauen weckt, sondern als
        jemand, den man sofort ins Herz schlie\u00dft \u2013 zugewandt, gespr\u00e4chig,
        mit einer optimistischen Leichtigkeit, die Skepsis gar nicht erst aufkommen lie\u00df.
        Das ist die soziale Sieben in Reinform: Charme als Eintrittskarte in jedes System.</p>
        <p class="vb-intro"><strong>b) Immer eine Option in der Hinterhand:</strong>
        Zeitgenossen beschrieben ihn als schnell denkend und nie um eine Ausrede
        oder einen Ausweg verlegen. Wurde eine Identit\u00e4t zu eng oder zu riskant,
        hatte er l\u00e4ngst die n\u00e4chste vorbereitet. Diese F\u00e4higkeit, sich mental nie
        in eine Ecke dr\u00e4ngen zu lassen, ist Kernmerkmal der Sieben \u2013 bei der
        sozialen Auspr\u00e4gung gepaart mit dem Anspruch, dass der n\u00e4chste Schritt
        auch dem gr\u00f6\u00dferen Ganzen dient, nicht nur dem eigenen Vergn\u00fcgen.</p>
        <p class="vb-intro"><strong>c) Der Sechserfl\u00fcgel: Autorit\u00e4ten pr\u00fcfen, Sicherheit suchen:</strong>
        Anders als eine Sieben mit schwach ausgepr\u00e4gtem Sechserfl\u00fcgel, die sich eher treiben l\u00e4sst, pr\u00fcfte Abagnale die
        Systeme, in die er eindrang, genau auf ihre Regeln, Schwachstellen und
        Vertrauensmechanismen \u2013 eine typische Sechser-Wachsamkeit. Und genau
        dieselbe Wachsamkeit f\u00fchrte ihn am Ende dorthin, wo er nie hinwollte
        und doch am meisten brauchte: in ein System, dem er wirklich vertrauen konnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Vielfalt statt Sicherheit als prim\u00e4res Motiv:</strong>
        Abagnale wechselte seine Identit\u00e4ten nicht in erster Linie aus Angst
        um sein \u00dcberleben, sondern weil jede Rolle nach einer Weile ihre
        M\u00f6glichkeiten ersch\u00f6pfte. Pilot: freier Zugang zur ganzen Welt.
        Arzt: Zugeh\u00f6rigkeit zu einer angesehenen Institution. Anwalt: Einblick
        in ein weiteres m\u00e4chtiges System. Das ist siebenerhafte Logik \u2013
        die Welt hat so viele T\u00fcren, warum nur eine offenhalten?</p>
        <p class="vb-intro"><strong>b) Der Dienst am System als Tarnung \u2013 das Opferprinzip der SO7:</strong>
        Die soziale Sieben verkauft ihre Rastlosigkeit als Beitrag zum Ganzen:
        Sie ist die N\u00fctzliche, die Kompetente, diejenige, ohne die es nicht
        rundl\u00e4uft. Genau das tat Abagnale \u2013 er stellte sich als hilfreiches,
        funktionierendes Mitglied jeder Institution dar, in die er eindrang,
        und wurde daf\u00fcr mit Vertrauen, Zugang und Bewegungsfreiheit belohnt.
        Anders als eine Drei, die Bewunderung f\u00fcr die eigene Leistung sucht,
        wollte Abagnale vor allem eines: gebraucht werden, ohne festgehalten zu werden.</p>
        <p class="vb-intro"><strong>c) Der Sechserfl\u00fcgel: die Suche nach dem einen verl\u00e4sslichen System:</strong>
        Was den SO7 von einer unbeschwerteren Siebener-Auspr\u00e4gung unterscheidet,
        ist eine untergr\u00fcndige Unruhe: das Bed\u00fcrfnis nach einem System, dem
        wirklich zu vertrauen ist. Dieser Fl\u00fcgel erkl\u00e4rt, warum Abagnale nie
        wirklich zur Ruhe kam, obwohl er scheinbar alles hatte \u2013 Zugang, Status,
        Bewunderung. Er suchte nicht den n\u00e4chsten Kick. Er suchte den einen Ort,
        an dem seine F\u00e4higkeiten legitim gebraucht w\u00fcrden. Er fand ihn am Ende
        ausgerechnet dort, wo er am meisten gef\u00fcrchtet hatte: bei der Beh\u00f6rde,
        die ihn jagte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Konkrete Taten</h3>
        <p class="vb-intro"><strong>a) Die Pan-Am-Uniform per Telefonanruf:</strong>
        Abagnale begann seine Karriere mit einem einzigen Anruf.
        Er rief Pan American World Airways an und behauptete,
        seine Uniform sei verloren gegangen.
        Man nannte ihm den Lieferanten \u2013 der Rest war Routine.
        Mit Uniform und gef\u00e4lschter Pilotenkennung
        stellte er sich vor Schalter und bat um Deadhead-Mitfl\u00fcge \u2013
        Freipl\u00e4tze f\u00fcr reisende Besatzungsmitglieder.
        \u00dcber zwei Jahre flog er in 26 L\u00e4nder.
        Unterkunft und Verpflegung stellte er dem Pan-Am-B\u00fcro in Rechnung.
        Ein neues Revier, ein neuer Damm \u2013 und die ganze Welt als Spielfeld.</p>
        <p class="vb-intro"><strong>b) Ein Jahr als Assistenzarzt in Georgia:</strong>
        Er gab sich als Dr. Frank Adams aus \u2013 P\u00e4diater, frisch aus New York \u2013
        und wurde als leitender Supervisor von Medizinstudenten angestellt.
        Fast ein Jahr lang unterschrieb er Krankenakten
        und organisierte seinen Alltag so,
        dass er nie selbst am Bett behandeln musste.
        Als ein irischer Kollege eine echte, tiefere Freundschaft suchte,
        wich er aus \u2013 N\u00e4he, die ihn h\u00e4tte festlegen k\u00f6nnen, war ihm nicht geheuer.</p>
        <p class="vb-intro"><strong>c) Anwalt in Louisiana \u2013 dreimal den Stempel geholt:</strong>
        Abagnale f\u00e4lschte ein Harvard-Abschlusszeugnis
        und legte das Staatsexamen erst beim dritten Anlauf ab.
        Keine Panik, kein Aufgeben \u2013 die optimistische Beharrlichkeit der Sieben,
        die jeden R\u00fcckschlag nur als vor\u00fcbergehende H\u00fcrde auf dem Weg
        zur n\u00e4chsten offenen T\u00fcr begreift.
        Fast ein Jahr arbeitete er als Assistant Attorney General,
        bis ein echter Harvard-Absolvent in die Kanzlei eintrat.</p>
        <p class="vb-intro"><strong>d) Scheckf\u00e4lschung im industriellen Ma\u00dfstab:</strong>
        Den gr\u00f6\u00dften finanziellen Schaden richtete Abagnale
        durch gef\u00e4lschte Schecks an.
        Er druckte Schecks mit echten Bankleitzahlen,
        l\u00f6ste sie mit seiner Piloten-ID weltweit ein \u2013
        in Hotels, Banken, Wechselstuben.
        Ein System, in immer neue L\u00e4nder und Kan\u00e4le erweitert \u2013 Bibergesch\u00e4ft
        im ganz gro\u00dfen Stil.</p>
        <p class="vb-intro"><strong>e) Verhaftung, Flucht, Verhaftung:</strong>
        1969 erkannte ihn eine Air-France-Stewardess in Montpellier.
        Er wurde in Frankreich, Schweden und den USA inhaftiert.
        Aus dem schwedischen Gef\u00e4ngnis entkam er,
        indem er sich als US-amerikanischer Gef\u00e4ngnisinspektor ausgab.
        In den USA \u00fcberzeugte er einen W\u00e4rter,
        er sei undercover f\u00fcr das Justizministerium t\u00e4tig.
        Selbst hinter Gittern blieb er im Modus: Welche Rolle \u00f6ffnet mir hier die n\u00e4chste T\u00fcr?</p>
        <p class="vb-intro"><strong>f) Vom T\u00e4ter zum FBI-Berater:</strong>
        Nach einer Haftstrafe schloss Abagnale einen Deal mit dem FBI:
        Er half bei der \u00dcberf\u00fchrung von Scheckf\u00e4lschern
        und wurde zum gesuchten Experten f\u00fcr Dokumentenbetrug.
        Das ist die SO7w6-Aufl\u00f6sung pur:
        Aus der endlosen Suche nach dem n\u00e4chsten System wird endlich eine
        Zugeh\u00f6rigkeit, der er wirklich vertrauen kann \u2013 legitim, gebraucht,
        endlich angekommen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. T\u00e4terprofil &amp; Einordnung</h3>
        <p class="vb-intro"><strong>a) Kein Narzisst \u2013 ein rastloser Optimist:</strong>
        Abagnale suchte keine B\u00fchne f\u00fcr Applaus und auch keine stille
        Ressourcensicherung. Er suchte Bewegung, Vielfalt und ein Gef\u00fchl,
        gebraucht zu werden, ohne sich endg\u00fcltig festzulegen. Das macht ihn
        untypisch f\u00fcr das Bild des kalten Hochstaplers: Seine Energie wirkte
        eher wie ungebremster Enthusiasmus als wie Berechnung.</p>
        <p class="vb-intro"><strong>b) Die Biografie als letzte Geschichte:</strong>
        Sp\u00e4tere Recherchen haben Teile seiner Selbstdarstellung als \u00fcbertrieben
        oder erfunden infrage gestellt. Auch das passt zur SO7w6: Die Sieben
        erz\u00e4hlt ihre eigene Geschichte gern gr\u00f6\u00dfer, bunter und bedeutsamer,
        als sie vielleicht war \u2013 nicht aus Berechnung, sondern weil die
        optimistische Umdeutung der eigenen Vergangenheit zu ihrem Grundmuster geh\u00f6rt.</p>
        <p class="vb-intro"><strong>c) Abgrenzung zu anderen Hochstaplern:</strong>
        Anders als selbsterhaltende Dreier-Betr\u00fcger wie Bernie Madoff oder
        Ruja Ignatova, die vor allem stille Kontrolle \u00fcber Ressourcen oder
        eine perfekte B\u00fchne suchten, ging es Abagnale nie um ein einzelnes,
        sorgf\u00e4ltig geh\u00fctetes System. Er wollte viele T\u00fcren offenhalten,
        viele Systeme betreten \u2013 und in jedem von ihnen kurzzeitig unentbehrlich
        sein. Das ist der entscheidende Unterschied zwischen der ruhigen
        Ressourcenlogik der SE3 und der bewegten, systemsuchenden Logik der SO7w6.</p>
      </div>

      <div class="vb-section" style="background:rgba(232,146,42,0.07);border-left:3px solid #e8922a;padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">Zusammenfassung</h3>
        <p style="margin:0 0 0.6rem;font-size:0.95rem;color:var(--ink);">
        Frank Abagnale Jr. ist der SO7w6 in seiner pathologischen Reinform:
        ein Mensch, der Identit\u00e4t nicht als Selbstausdruck versteht,
        sondern als Eintrittskarte in immer neue Systeme, in denen er sich
        n\u00fctzlich, willkommen und lebendig f\u00fchlen konnte.
        Die Leidenschaft der Unm\u00e4\u00dfigkeit zeigt sich bei ihm nicht als Exzess
        oder Vergn\u00fcgungssucht, sondern als rastlose Vielfalt an Rollen,
        Orten und Institutionen, die keine je lange genug hielt.</p>
        <p style="margin:0 0 0.6rem;font-size:0.95rem;color:var(--ink);">
        Der Sechserfl\u00fcgel lie\u00df ihn nie ganz zur Ruhe kommen.
        Hinter jeder neuen Rolle wartete dieselbe Frage:
        Ist das hier endlich ein System, dem ich trauen kann?
        Erst im B\u00fcndnis mit dem FBI \u2013 dem System, das ihn einst jagte \u2013
        fand er eine Antwort, mit der er leben konnte.</p>
        <p style="margin:0;font-size:0.95rem;color:var(--ink);">
        Der Biber baut weiter, bis das \u00d6kosystem um ihn herum vollst\u00e4ndig ist.
        Aber baut er dabei auch etwas, das ihn selbst tr\u00e4gt?
        Das ist die Frage, die Abagnales Leben stellt \u2013
        und die er erst sp\u00e4t, mit dem FBI an seiner Seite, halbwegs beantwortet hat.</p>
      </div>

    </div>
  `);
}
function zitatePage() {
  const data = window._zitateData || [];
  const themes = [...new Set(data.map(z => z.t))];

  const themeColors = {
    "Selbsterkenntnis":      "#5a7a5a",
    "Leidenschaft & Schatten":"#8b4a2a",
    "Wachstum":              "#4a6a8a",
    "Freiheit & Authentizit\u00e4t":"#7a5a8a",
    "Mitgef\u00fchl & Liebe":    "#8a4a5a",
    "Mut & Angst":           "#6a5a2a",
    "Stille & Kontemplation":"#3a5a6a",
    "Weisheit":              "#6a6a2a",
    "Frieden & Gelassenheit":"#3a6a5a",
  };

  window._zShare = data.map(z => ({ q: z.q, a: z.a, y: z.y }));
  if (!window._doCopy) {
    window._doCopy = function(btn, i) {
      const z = window._zShare[i];
      const t = '\u201e' + z.q + '\u201c \u2014 ' + z.a + ' (' + z.y + ')\n\nEnneagramm-Heilungskompass\nhttps://kompass.verlagshausrathmer.com/';
      navigator.clipboard.writeText(t).then(function() {
        const orig = btn.innerHTML; btn.innerHTML = '\u2713 Kopiert!'; btn.style.background='#e8f5e9';
        setTimeout(function(){ btn.innerHTML = orig; btn.style.background=''; }, 2000);
      }).catch(function(){ btn.textContent='\u274c'; setTimeout(function(){ btn.textContent='Kopieren'; },2000); });
    };
    window._doShare = function(btn, i) {
      const z = window._zShare[i];
      const shareText = '\u201e' + z.q + '\u201c \u2014 ' + z.a + ' (' + z.y + ')\n\nEnneagramm-Heilungskompass\nhttps://kompass.verlagshausrathmer.com/';

      function fallback() {
        navigator.clipboard.writeText(shareText).then(function() {
          var orig = btn.innerHTML; btn.innerHTML = '\u2713 Kopiert!'; btn.style.background='#e8f5e9';
          setTimeout(function(){ btn.innerHTML = orig; btn.style.background=''; }, 2000);
        }).catch(function(){ btn.textContent='\u274c'; setTimeout(function(){ btn.textContent='Teilen'; },2000); });
      }

      function shareBlob(blob) {
        var file = new File([blob], 'kompass-zitat.png', { type: 'image/png' });
        var shareObj = { files: [file] };
        if (navigator.canShare && navigator.canShare(shareObj)) {
          navigator.share(shareObj).catch(function(e){ if (e.name !== 'AbortError') fallback(); });
        } else {
          if (navigator.share) {
            navigator.share({ text: shareText }).catch(function(e){ if (e.name !== 'AbortError') fallback(); });
          } else { fallback(); }
        }
      }

      function wrapText(ctx, text, maxW, font) {
        ctx.font = font;
        var words = text.split(' '), lines = [], line = '';
        words.forEach(function(w) {
          var test = line ? line + ' ' + w : w;
          if (ctx.measureText(test).width > maxW) { lines.push(line); line = w; }
          else line = test;
        });
        if (line) lines.push(line);
        return lines;
      }

      function drawCard(logoImg) {
        var W = 1000, H = 1000;
        var cvs = document.createElement('canvas');
        cvs.width = W; cvs.height = H;
        var ctx = cvs.getContext('2d');

        ctx.fillStyle = '#fdf6ec';
        ctx.fillRect(0, 0, W, H);

        // Doppelrahmen
        var brd = 22;
        ctx.strokeStyle = '#c8a964'; ctx.lineWidth = 4;
        ctx.strokeRect(brd, brd, W-brd*2, H-brd*2);
        ctx.strokeStyle = '#c8a96440'; ctx.lineWidth = 1;
        ctx.strokeRect(brd+11, brd+11, W-(brd+11)*2, H-(brd+11)*2);

        // Eckornamente
        function corner(x, y, dx, dy) {
          ctx.strokeStyle = '#c8a96477'; ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x+dx*28, y); ctx.lineTo(x, y); ctx.lineTo(x, y+dy*28);
          ctx.stroke();
        }
        corner(brd+20, brd+20, 1, 1); corner(W-brd-20, brd+20, -1, 1);
        corner(brd+20, H-brd-20, 1, -1); corner(W-brd-20, H-brd-20, -1, -1);

        // Logo zentriert oben
        var logoSize = 130, logoY = 58;
        if (logoImg) ctx.drawImage(logoImg, (W-logoSize)/2, logoY, logoSize, logoSize);

        // Gradient-Linie unter Logo
        var lineY = logoY + logoSize + 22;
        var g = ctx.createLinearGradient(W/2-140, 0, W/2+140, 0);
        g.addColorStop(0, '#c8a96400'); g.addColorStop(0.2, '#c8a964');
        g.addColorStop(0.8, '#c8a964'); g.addColorStop(1, '#c8a96400');
        ctx.strokeStyle = g; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(W/2-140, lineY); ctx.lineTo(W/2+140, lineY); ctx.stroke();

        // Dekoratives Anf\u00fchrungszeichen oben
        ctx.fillStyle = '#c8a96430';
        ctx.font = 'italic 150px Georgia,serif';
        ctx.textAlign = 'center';
        ctx.fillText('\u201e', W/2, lineY + 148);

        // Zitat
        var qFont = 'italic 44px Georgia,serif';
        var lines = wrapText(ctx, z.q, W-160, qFont);
        var lineH = 44 * 1.48;
        var totalH = lines.length * lineH;
        var zoneTop = lineY + 60, zoneBot = H - 160;
        var startY = zoneTop + (zoneBot - zoneTop - totalH) / 2 + 44;
        ctx.fillStyle = '#2c2c2c'; ctx.font = qFont; ctx.textAlign = 'center';
        lines.forEach(function(l, i) { ctx.fillText(l, W/2, startY + i*lineH); });

        // Dekoratives Anf\u00fchrungszeichen unten
        ctx.fillStyle = '#c8a96430';
        ctx.font = 'italic 150px Georgia,serif';
        var closeY = startY + lines.length * lineH + 14;
        ctx.fillText('\u201c', W/2, closeY);

        // Autor + Jahr
        var authorY = closeY + 44;
        ctx.fillStyle = '#7a5c2e';
        ctx.font = '500 30px Georgia,serif'; ctx.textAlign = 'center';
        ctx.fillText('\u2014 ' + z.a + '  (' + z.y + ')', W/2, authorY);

        // Raute als Trenner
        var sepY = authorY + 36;
        ctx.fillStyle = '#c8a964';
        ctx.save(); ctx.translate(W/2, sepY); ctx.rotate(Math.PI/4);
        ctx.fillRect(-5, -5, 10, 10); ctx.restore();

        // Branding
        ctx.fillStyle = '#a08050'; ctx.font = '500 24px Georgia,serif'; ctx.textAlign = 'center';
        ctx.fillText('Enneagramm-Heilungskompass', W/2, H-56);
        ctx.fillStyle = '#c8a96499'; ctx.font = '18px Georgia,serif';
        ctx.fillText('kompass.verlagshausrathmer.com', W/2, H-28);

        cvs.toBlob(function(blob) { shareBlob(blob); }, 'image/png');
      }

      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function() { drawCard(img); };
      img.onerror = function() { drawCard(null); };
      img.src = './apple-touch-icon.png';
    };
  }
  const cards = data.map((z, i) => {
    const col = themeColors[z.t] || "#555";
    return '<div style="background:#fff;border-radius:14px;padding:1.6rem 1.5rem 1rem;margin-bottom:1.2rem;box-shadow:0 2px 8px rgba(0,0,0,0.07);border-left:4px solid '+col+';">'
      + '<p style="font-family:\'EB Garamond\',Georgia,serif;font-size:1.15rem;line-height:1.6;color:#2c2c2c;margin:0 0 0.9rem;">\u201e'+z.q+'\u201c</p>'
      + '<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">'
        + '<div>'
          + '<span style="font-size:0.85rem;font-weight:600;color:#1a1208;">'+z.a+'</span>'
          + '<span style="font-size:0.8rem;color:#888;margin-left:0.4rem;">('+z.y+')</span>'
        + '</div>'
        + '<span style="font-size:0.7rem;background:'+col+'22;color:'+col+';padding:0.2rem 0.6rem;border-radius:20px;white-space:nowrap;">'+z.t+'</span>'
      + '</div>'
      + '<div style="display:flex;gap:0.5rem;padding-top:0.6rem;border-top:1px solid #f0ece4;">'
        + '<button onclick="window._doCopy(this,'+i+')" style="flex:1;display:flex;align-items:center;justify-content:center;gap:0.35rem;padding:0.4rem 0.7rem;border:1.5px solid #d4b896;border-radius:7px;background:#fdf8f1;color:#6b4e2a;font-size:0.82rem;font-family:inherit;cursor:pointer;">'
          + '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
          + ' Kopieren'
        + '</button>'
        + '<button onclick="window._doShare(this,'+i+')" style="flex:1;display:flex;align-items:center;justify-content:center;gap:0.35rem;padding:0.4rem 0.7rem;border:1.5px solid #c8a96444;border-radius:7px;background:#fdf6ec;color:#7a5c2e;font-size:0.82rem;font-family:inherit;cursor:pointer;">'
          + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>'
          + ' Teilen'
        + '</button>'
      + '</div>'
    + '</div>';
  }).join("");

  return shell(`
    ${pageHeader("zitate")}
    <section class="narrow" style="padding:2rem 1rem 5rem;">
      <h1 style="font-family:'EB Garamond',serif;font-size:2rem;color:var(--ink);margin:0 0 0.5rem;line-height:1.2;">Zitate der Weisen</h1>
      <p style="font-size:0.85rem;color:#888;text-align:center;margin:0 0 1.8rem;">${data.length} Zitate \u00b7 ${themes.length} Themen</p>
      ${cards}
    </section>
  `);
}


// \u2500\u2500\u2500 Welches-Tier-Quiz \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
window._tqState = null;

const _TQ_TIERE = {
  SE1:"Adler",SO1:"Gans",SX1:"Schwarze Mamba",
  SE2:"Flusspferd",SO2:"Golden Retriever",SX2:"Kamel",
  SE3:"Waschb\xe4r",SO3:"Gepard",SX3:"Pfau",
  SE4:"Taube",SO4:"G\xfcrteltier",SX4:"Chihuahua",
  SE5:"Eule",SO5:"Oktopus",SX5:"Igel",
  SE6:"Kaninchen",SO6:"Erdm\xe4nnchen",SX6:"Wolf",
  SE7:"Gorilla",SO7:"Biber",SX7:"Schimpanse",
  SE8:"Orang-Utan",SO8:"L\xf6we",SX8:"Krokodil",
  SE9:"Elefant",SO9:"B\xfcffel",SX9:"Faultier"
};
const _TQ_EMOJI = {
  SE1:"\ud83e\udd85",SO1:"\ud83e\udeb7",SX1:"\ud83d\udc0d",
  SE2:"\ud83e\udd9b",SO2:"\ud83d\udc15",SX2:"\ud83d\udc2a",
  SE3:"\ud83e\udd9d",SO3:"\ud83d\udc06",SX3:"\ud83e\udd9a",
  SE4:"\ud83d\udd4a\ufe0f",SO4:"\ud83e\udd94",SX4:"\ud83d\udc15",
  SE5:"\ud83e\udd89",SO5:"\ud83d\udc19",SX5:"\ud83e\udd94",
  SE6:"\ud83d\udc07",SO6:"\ud83e\udda6",SX6:"\ud83d\udc3a",
  SE7:"\ud83e\udd8d",SO7:"\ud83e\udeb8",SX7:"\ud83d\udc12",
  SE8:"\ud83e\udda7",SO8:"\ud83e\udd81",SX8:"\ud83d\udc0a",
  SE9:"\ud83d\udc18",SO9:"\ud83d\udc03",SX9:"\ud83e\udda5"
};
const _TQ_BESCHR = {
  SE1:"Der Adler fliegt allein und h\u00e4lt hohe Standards \u2013 an sich selbst, nicht an andere. Ruhig, pr\u00e4zise, mit einem inneren Kompass, der nicht schweigt.",
  SO1:"Die Gans fliegt in Formation und sorgt daf\u00fcr, dass alle Regeln stimmen. Gerecht, prinzipientreu, mit einem ausgepr\u00e4gten Sinn f\u00fcr das Richtige.",
  SX1:"Die Schwarze Mamba handelt schnell und pr\u00e4zise \u2013 sie duldet keine Kompromisse bei dem, was ihr wichtig ist. Leidenschaftlich und exakt zugleich.",
  SE2:"Das Flusspferd ist w\u00e4rmer als es aussieht \u2013 ruhig, gr\u00fcndend, zutiefst f\u00fcrsorglich f\u00fcr den engen Kreis um es herum. Es braucht Vertrauen, bevor es sich zeigt.",
  SO2:"Der Golden Retriever liebt unbedingt \u2013 und m\u00f6chte, dass alle gl\u00fccklich sind. Er ist der geborene Verbinder, immer bereit zu helfen.",
  SX2:"Das Kamel tr\u00e4gt, was andere nicht tragen w\u00fcrden \u2013 es gibt alles f\u00fcr den, dem es sich verbunden f\u00fchlt. Ausdauernd, treu, manchmal ersch\u00f6pft.",
  SE3:"Der Waschb\u00e4r ist clever, anpassungsf\u00e4hig und immer auf der Suche nach dem, was funktioniert. Pragmatisch und charmant, leise und effektiv.",
  SO3:"Der Gepard ist schnell, brillant und auf Erfolg ausgerichtet \u2013 mit einer nat\u00fcrlichen Eleganz im Umgang mit anderen. Er ist gern vorne.",
  SX3:"Der Pfau wei\u00df, wie er wirkt \u2013 und er setzt das bewusst ein. Charismatisch, intensiv, mit einem Sinn f\u00fcr das Besondere.",
  SE4:"Die Taube tr\u00e4gt ihre Sehnsucht still \u2013 sie sucht Tiefe im Stillen und empfindet intensiver als sie zeigt. Sanft und verletzlich zugleich.",
  SO4:"Das G\u00fcrteltier tr\u00e4gt seinen Schmerz als Schutz \u2013 au\u00dfen hart, innen empfindsam. Es sucht Zugeh\u00f6rigkeit und k\u00e4mpft still um seinen Platz.",
  SX4:"Der Chihuahua ist klein und macht trotzdem auf sich aufmerksam \u2013 leidenschaftlich, intensiv, von tiefer Gef\u00fchlstiefe getrieben.",
  SE5:"Die Eule beobachtet alles, bevor sie sich bewegt \u2013 sie denkt, analysiert und braucht Raum. Klug und zur\u00fcckgezogen, mit einem inneren Reichtum an Wissen.",
  SO5:"Der Oktopus ist das intelligenteste wirbellose Tier der Erde \u2013 er denkt in Systemen, vernetzt still und agiert mit erstaunlicher Pr\u00e4zision.",
  SX5:"Der Igel sch\u00fctzt sich mit Stacheln und \u00f6ffnet sich nur, wenn er vertraut. Intensiv in der Tiefe, aber nach au\u00dfen kaum greifbar.",
  SE6:"Das Kaninchen ist wachsam, liebenswert und braucht sichere Strukturen. Es ist loyal zu denen, denen es vertraut \u2013 und vorsichtig gegen\u00fcber dem Unbekannten.",
  SO6:"Das Erdm\u00e4nnchen h\u00e4lt Wache f\u00fcr die Gruppe \u2013 alert, kooperativ, immer darauf bedacht, dass alle sicher sind. Verl\u00e4sslichkeit ist sein Lebensprinzip.",
  SX6:"Der Wolf ist intensiv loyal \u2013 aber er pr\u00fcft zuerst, ob er wirklich vertrauen kann. Stark in der Verbindung, mutig wenn er sich sicher f\u00fchlt.",
  SE7:"Der Gorilla ist st\u00e4rker als er aussieht \u2013 verspielt, neugierig und voller Energie, wenn er seine Welt erkundet. Er genie\u00dft das Leben mit allen Sinnen.",
  SO7:"Der Biber baut, plant und gestaltet \u2013 er bringt seine Ideen in die Welt und liebt es, wenn alle davon profitieren. Pragmatisch und voller Ideen.",
  SX7:"Der Schimpanse ist sozial, improvisationsfreudig und lebt im Moment \u2013 mit einer Intensit\u00e4t, die ansteckend ist. Er braucht Freiheit und Verbindung zugleich.",
  SE8:"Der Orang-Utan ist m\u00e4chtig und unabh\u00e4ngig \u2013 er braucht niemanden, der ihm sagt, was er tun soll. In seinem Tempo, auf seinem Weg.",
  SO8:"Der L\u00f6we f\u00fchrt und sch\u00fctzt \u2013 mit Kraft, Pr\u00e4senz und dem nat\u00fcrlichen Anspruch, Verantwortung zu \u00fcbernehmen. Er ist f\u00fcr seine Gruppe da.",
  SX8:"Das Krokodil ist still bis es handelt \u2013 und dann mit voller Kraft. Intensiv in der Verbindung, unerbittlich in der Verfolgung seiner Ziele.",
  SE9:"Der Elefant vergisst nicht und bewegt sich in seinem eigenen Rhythmus \u2013 ruhig, gr\u00fcndend, mit einer Pr\u00e4senz, die den Raum ver\u00e4ndert.",
  SO9:"Der B\u00fcffel l\u00e4uft mit der Herde \u2013 beharrlich, verl\u00e4sslich, mit einer stillen Kraft, die andere erst im R\u00fcckblick bemerken.",
  SX9:"Das Faultier spart Energie f\u00fcr das, was wirklich z\u00e4hlt \u2013 und wenn es sich verbindet, tut es das vollst\u00e4ndig. Stille als St\u00e4rke."
};

function _tqBtn(label, sub, onclick) {
  return '<button onclick="'+onclick+'" style="width:100%;text-align:left;padding:1rem 1.2rem;margin-bottom:0.7rem;background:var(--ivory);border:1.5px solid var(--border);border-radius:10px;cursor:pointer;font-family:inherit;transition:border-color .15s,box-shadow .15s;" onmouseover="this.style.borderColor=\'var(--gold)\';this.style.boxShadow=\'0 2px 10px rgba(0,0,0,.08)\'" onmouseout="this.style.borderColor=\'var(--border)\';this.style.boxShadow=\'none\'">'
    +'<div style="font-size:1rem;font-weight:600;color:var(--ink);margin-bottom:0.15rem;">'+label+'</div>'
    +'<div style="font-size:0.85rem;color:var(--muted);">'+sub+'</div>'
    +'</button>';
}

function _tqProgress(step) {
  const steps = ["Instinkt","Zentrum","Typ"];
  return '<div style="display:flex;gap:0.5rem;margin-bottom:1.5rem;">'
    +steps.map((s,i) => '<div style="flex:1;height:4px;border-radius:2px;background:'+(i<step?'var(--gold)':'var(--border)')+'"></div>').join("")
    +'</div><p style="font-size:0.8rem;color:var(--muted);margin-bottom:1rem;">Frage '+(step)+' von 3</p>';
}

// \u2500\u2500 GESICHTS-SCAN (Vorbereitung f\u00fcr die pers\u00f6nliche Typberatung) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Wertet nichts automatisch aus, macht keine Typ-Diagnose. Dient ausschlie\u00dflich
// dazu, gute Fotos/ein kurzes Video f\u00fcr die menschliche Typberatung bei Detlef
// oder David Rathmer vorzubereiten. Die Aufnahmen verlassen das Ger\u00e4t nicht von
// selbst \u2013 der Nutzer entscheidet aktiv, ob er sie \u00fcber den nativen Teilen-
// Dialog an einen der beiden Berater schickt.

const _GS_STEPS = [
  { prompt: "Schauen Sie ganz entspannt direkt in die Kamera Ihres Smartphones \u2013 der Rahmen zeigt nur den Aufnahmebereich.", sub: "Frontal", say: "Schauen Sie ganz entspannt direkt in die Kamera Ihres Smartphones. Der Rahmen zeigt nur den Aufnahmebereich \u2013 Ihr Blick bleibt an der Kamera." },
  { prompt: "Drehen Sie nur den Kopf ganz sacht nach links \u2013 der Blick bleibt weiterhin an der Kamera Ihres Smartphones.", sub: "Sanft nach links", say: "Jetzt drehen Sie den Kopf ganz sacht nach links. Der Blick bleibt dabei weiterhin an der Kamera Ihres Smartphones." },
  { prompt: "Und jetzt ganz sacht nach rechts \u2013 der Blick bleibt weiterhin an der Kamera Ihres Smartphones.", sub: "Sanft nach rechts", say: "Und jetzt ganz sacht nach rechts. Der Blick bleibt weiterhin an der Kamera Ihres Smartphones." },
  { prompt: "Zum Abschluss noch einmal direkt in die Kamera Ihres Smartphones schauen.", sub: "Frontal", say: "Zum Abschluss schauen Sie noch einmal direkt in die Kamera Ihres Smartphones." },
];
const _GS_SETTLE_MS = 2200;
const _GS_COUNTDOWN_MS = 3200;
const _GS_AFTER_SHOT_MS = 1300;
const _GS_SPEECH_MAX_MS = 6000;
const _GS_VIDEO_MAX_S = 120;

const _GS_CONTACT = {
  detlef: { mail: "detlefrathmer@t-online.de", wa: "4915758786201" },
  david:  { mail: "rathmer.david.business@gmail.com", wa: "4915901902479" },
};

let _gsMode = null;
let _gsStream = null;
let _gsShots = [];
let _gsStep = 0;
let _gsVoiceOn = true;
let _gsCancelled = false;
let _gsFemaleVoice = null;
let _gsRecorder = null;
let _gsRecordedChunks = [];
let _gsVideoBlob = null;
let _gsVideoUrl = null;
let _gsTimerHandle = null;
let _gsRecordSeconds = 0;

function gesichtsScanPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("gesichts-scan")}
      <div class="typentest-wrap">

        <div id="gs-stage-intro" class="typentest-card">
          <p class="eyebrow">Vorbereitung f\u00fcr Ihre Typberatung</p>
          <h1 class="typentest-titel" style="margin-bottom:0.6rem;">Ihr Gesichts-Scan</h1>
          <p class="typentest-intro">F\u00fcr eine besonders genaue pers\u00f6nliche Typberatung sind gute Fotos oder ein kurzes Video hilfreich. W\u00e4hlen Sie, was Ihnen lieber ist \u2013 die App f\u00fchrt Sie automatisch durch die Aufnahme.</p>
          <div class="typentest-hinweis" style="margin:1rem 0 1.2rem;">
            <strong>Wichtig zu wissen:</strong> Dieser Scan wertet nichts automatisch aus. Es gibt keine App-Diagnose Ihres Typs \u2013 keine Technik der Welt kann Ihren Enneagrammtyp aus einem Foto oder Video zuverl\u00e4ssig bestimmen. Jede automatisierte Einsch\u00e4tzung w\u00e4re bestenfalls eine grobe Ann\u00e4herung mit Fehlern. Die Aufnahmen verlassen Ihr Ger\u00e4t nicht von selbst \u2013 Sie entscheiden danach, ob Sie sie f\u00fcr eine <strong>pers\u00f6nliche Typberatung</strong> bei Detlef oder David Rathmer mitschicken m\u00f6chten. Die eigentliche Typbestimmung bleibt Menschenwerk.
          </div>
          <button class="typentest-start-btn" id="gs-btn-start-photo">\ud83d\udcf7 Foto-Scan starten (4 Aufnahmen) \u2192</button>
          <button class="typentest-start-btn" id="gs-btn-start-video" style="background:transparent;color:var(--copper,#a5603d);border:1.5px solid var(--copper,#a5603d);margin-top:0.7rem;">\ud83c\udfa5 Kurzvideo aufnehmen (max. 2 Min.) \u2192</button>
          <label style="display:flex;align-items:center;justify-content:center;gap:0.4rem;font-size:0.82rem;color:var(--muted);margin-top:0.9rem;">
            <input type="checkbox" id="gs-chk-voice" checked> Ansage per Sprache (nur beim Foto-Scan)
          </label>
        </div>

        <div id="gs-stage-scan" class="typentest-card hidden">
          <p class="eyebrow">Schritt <span id="gs-step-num">1</span> von 4</p>
          <div class="gs-dots" id="gs-dots"></div>
          <div class="gs-stage">
            <video id="gs-video" autoplay playsinline muted></video>
            <div class="gs-flash" id="gs-flash"></div>
            <div class="gs-sub" id="gs-sub">Bereit machen \u2026</div>
            <div class="gs-oval">
              <svg viewBox="0 0 200 240">
                <ellipse class="gs-oval-ring" cx="100" cy="120" rx="82" ry="110"></ellipse>
                <ellipse class="gs-oval-progress" id="gs-ring" cx="100" cy="120" rx="82" ry="110"></ellipse>
              </svg>
            </div>
            <div class="gs-prompt" id="gs-prompt">Schauen Sie entspannt in die Kamera</div>
          </div>
          <button class="typentest-start-btn" style="background:transparent;color:var(--copper,#a5603d);border:1.5px solid var(--copper,#a5603d);" id="gs-btn-cancel">Abbrechen</button>
        </div>

        <div id="gs-stage-video" class="typentest-card hidden">
          <p class="eyebrow">Kurzvideo</p>
          <div class="gs-stage">
            <video id="gs-video-live" autoplay playsinline muted></video>
            <div class="gs-video-timer" id="gs-video-timer">0:00 / 2:00</div>
          </div>
          <p class="typentest-intro" style="margin:0.8rem 0;">Sagen Sie z. B. kurz Ihren Namen und was Sie zur Typberatung f\u00fchrt. Maximal 2 Minuten.</p>
          <button class="typentest-start-btn" id="gs-btn-record" style="background:#b23b3b;border-color:#8a2c2c;">\u25cf Aufnahme starten</button>
          <button class="typentest-start-btn" style="background:transparent;color:var(--copper,#a5603d);border:1.5px solid var(--copper,#a5603d);" id="gs-btn-cancel-video">Abbrechen</button>
        </div>

        <div id="gs-stage-result" class="typentest-card hidden">
          <p class="eyebrow">Fertig</p>
          <h1 class="typentest-titel" style="margin-bottom:0.5rem;">Ihre Fotos sind bereit</h1>
          <p class="typentest-intro">Diese vier Aufnahmen sind nur auf Ihrem Ger\u00e4t gespeichert \u2013 bislang bei niemandem sonst.</p>
          <button class="typentest-start-btn" id="gs-btn-save-all">\ud83d\udce5 Alle vier Fotos auf einmal sichern</button>
          <div class="gs-photo-grid" id="gs-photo-grid"></div>
          <p class="gs-save-hint" id="gs-save-hint">Oder tippen Sie \u201eSichern" bei einem einzelnen Foto, um nur dieses zu speichern.</p>
          ${_gsContactBlockHTML("photo")}
          <button class="typentest-start-btn" style="background:transparent;color:var(--copper,#a5603d);border:1.5px solid var(--copper,#a5603d);margin-top:1.2rem;" id="gs-btn-retry">\u21ba Scan wiederholen</button>
        </div>

        <div id="gs-stage-video-result" class="typentest-card hidden">
          <p class="eyebrow">Fertig</p>
          <h1 class="typentest-titel" style="margin-bottom:0.5rem;">Ihr Video ist bereit</h1>
          <p class="typentest-intro">Dieses Video ist nur auf Ihrem Ger\u00e4t gespeichert \u2013 bislang bei niemandem sonst.</p>
          <video id="gs-video-preview" controls playsinline style="width:100%;border-radius:12px;border:2px solid var(--gold);margin:0.8rem 0;"></video>
          <button class="typentest-start-btn" id="gs-btn-save-video">\ud83d\udce5 Video sichern</button>
          ${_gsContactBlockHTML("video")}
          <button class="typentest-start-btn" style="background:transparent;color:var(--copper,#a5603d);border:1.5px solid var(--copper,#a5603d);margin-top:1.2rem;" id="gs-btn-retry-video">\u21ba Video wiederholen</button>
        </div>

        <div id="gs-stage-nocam" class="typentest-card hidden">
          <p class="eyebrow">Kein Kamerazugriff</p>
          <h1 class="typentest-titel">Kamera nicht verf\u00fcgbar</h1>
          <p class="typentest-intro">F\u00fcr den Scan wird Kamerazugriff ben\u00f6tigt. Bitte erlauben Sie den Zugriff im Browser oder probieren Sie es auf einem Ger\u00e4t mit Kamera.</p>
          <button class="typentest-start-btn" id="gs-btn-back-nocam">Zur\u00fcck</button>
        </div>

      </div>

      <style>
        .gs-dots { display:flex; gap:0.5rem; justify-content:center; margin-bottom:1rem; }
        .gs-dots span { width:9px; height:9px; border-radius:50%; background:var(--border,rgba(40,36,31,0.14)); transition:background 0.3s; }
        .gs-dots span.done { background:var(--gold,#c4a456); }
        .gs-dots span.active { background:var(--copper,#a5603d); }
        .gs-stage { position:relative; width:100%; aspect-ratio:3/4; border-radius:16px; overflow:hidden; background:#1a1712; margin-bottom:1rem; }
        .gs-stage video { width:100%; height:100%; object-fit:cover; transform:scaleX(-1); }
        .gs-oval { position:absolute; top:8%; left:15%; right:15%; bottom:12%; border-radius:50%/55%; box-shadow:0 0 0 2000px rgba(0,0,0,0.45); pointer-events:none; }
        .gs-oval svg { position:absolute; inset:-3px; width:calc(100% + 6px); height:calc(100% + 6px); }
        .gs-oval-ring { fill:none; stroke:rgba(255,255,255,0.35); stroke-width:3; }
        .gs-oval-progress { fill:none; stroke:var(--gold,#c4a456); stroke-width:4; stroke-linecap:round; transition:stroke-dashoffset 0.1s linear; }
        .gs-prompt { position:absolute; bottom:1rem; left:0.8rem; right:0.8rem; text-align:center; color:#fff; font-family:-apple-system,sans-serif; font-size:1rem; font-weight:600; text-shadow:0 1px 4px rgba(0,0,0,0.7); }
        .gs-sub { position:absolute; top:0.9rem; left:0; right:0; text-align:center; color:rgba(255,255,255,0.85); font-family:-apple-system,sans-serif; font-size:0.78rem; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; text-shadow:0 1px 4px rgba(0,0,0,0.7); }
        .gs-flash { position:absolute; inset:0; background:#fff; opacity:0; pointer-events:none; }
        .gs-flash.active { animation: gsFlashPop 0.35s ease-out; }
        @keyframes gsFlashPop { 0% { opacity:0.85; } 100% { opacity:0; } }
        .gs-video-timer { position:absolute; top:0.8rem; left:0.8rem; background:rgba(0,0,0,0.55); color:#fff; font-family:-apple-system,sans-serif; font-size:0.85rem; font-weight:700; padding:0.3rem 0.7rem; border-radius:20px; }
        .gs-photo-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:0.7rem; margin:1rem 0; }
        .gs-photo-card { position:relative; border-radius:12px; overflow:hidden; border:2px solid var(--gold,#c4a456); }
        .gs-photo-card img { width:100%; aspect-ratio:3/4; object-fit:cover; display:block; }
        .gs-photo-card button { position:absolute; bottom:0.4rem; right:0.4rem; background:rgba(20,17,12,0.72); color:#fff; border:none; border-radius:8px; padding:0.4rem 0.6rem; font-size:0.78rem; font-weight:600; font-family:-apple-system,sans-serif; cursor:pointer; }
        .gs-save-hint { font-size:0.82rem; color:var(--muted); text-align:left; line-height:1.5; margin:0.6rem 0 0; }
        .gs-contact-label { font-family:-apple-system,sans-serif; font-size:0.72rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); margin:1rem 0 0.2rem; text-align:left; }
        .gs-contact-group { display:flex; flex-direction:column; gap:0.6rem; margin-top:0.6rem; }
        .gs-contact-group a { display:flex; align-items:center; justify-content:center; text-decoration:none; background:transparent; border:1.5px solid var(--copper,#a5603d); color:var(--copper,#a5603d); border-radius:10px; padding:0.75rem 1.6rem; font-size:0.95rem; font-weight:600; font-family:'EB Garamond',serif; }
        .hidden { display:none !important; }
      </style>
    </div>
  `);
}

function _gsContactBlockHTML(suffix) {
  const sfx = suffix || "photo";
  return `
    <p class="typentest-intro" style="font-size:0.9rem;margin-top:1rem;">M\u00f6chten Sie mit einer echten Person sprechen? H\u00e4ngen Sie Ihre Aufnahmen der Nachricht an.</p>
    <p class="gs-contact-label">Detlef Rathmer</p>
    <div class="gs-contact-group">
      <a href="#" id="gs-link-mail-detlef-${sfx}">\u2709 E-Mail an Detlef Rathmer</a>
      <a href="#" id="gs-link-wa-detlef-${sfx}" target="_blank" rel="noopener">\ud83d\udcac WhatsApp an Detlef Rathmer</a>
    </div>
    <p class="gs-contact-label">David L. Rathmer</p>
    <div class="gs-contact-group">
      <a href="#" id="gs-link-mail-david-${sfx}">\u2709 E-Mail an David L. Rathmer</a>
      <a href="#" id="gs-link-wa-david-${sfx}" target="_blank" rel="noopener">\ud83d\udcac WhatsApp an David L. Rathmer</a>
    </div>
  `;
}

function _gsQ(id) { return document.getElementById(id); }

function _gsShowStage(id) {
  ["gs-stage-intro","gs-stage-scan","gs-stage-video","gs-stage-result","gs-stage-video-result","gs-stage-nocam"]
    .forEach(s => { const el = _gsQ(s); if (el) el.classList.toggle("hidden", s !== id); });
}

function _gsBuildDots() {
  _gsQ("gs-dots").innerHTML = _GS_STEPS.map((_, i) => `<span class="${i < _gsStep ? 'done' : i === _gsStep ? 'active' : ''}"></span>`).join("");
}

function _gsPickVoice() {
  if (!("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || !voices.length) return;
  const FEMALE_HINTS = ["anna", "petra", "helena", "female", "frau", "samantha", "martina", "google deutsch"];
  _gsFemaleVoice =
    voices.find(v => v.lang && v.lang.startsWith("de") && FEMALE_HINTS.some(h => v.name.toLowerCase().includes(h))) ||
    voices.find(v => v.lang && v.lang.startsWith("de")) ||
    null;
}

function _gsUnlockSpeech() {
  if (!_gsVoiceOn || !("speechSynthesis" in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(" ");
    u.volume = 0.01;
    window.speechSynthesis.speak(u);
  } catch (e) {}
}

function _gsSpeakAndWait(text) {
  return new Promise(resolve => {
    if (!_gsVoiceOn || !("speechSynthesis" in window)) return resolve();
    let done = false;
    const finish = () => { if (!done) { done = true; resolve(); } };
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "de-DE"; u.rate = 0.9; u.pitch = 1.05;
      if (_gsFemaleVoice) u.voice = _gsFemaleVoice;
      u.onend = finish; u.onerror = finish;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
      setTimeout(finish, _GS_SPEECH_MAX_MS);
    } catch (e) { finish(); }
  });
}

function _gsWait(ms) {
  return new Promise(resolve => {
    const start = performance.now();
    (function check() {
      if (_gsCancelled) return resolve();
      if (performance.now() - start >= ms) return resolve();
      requestAnimationFrame(check);
    })();
  });
}

async function _gsStartPhotoScan() {
  _gsMode = "photo"; _gsStep = 0; _gsShots = []; _gsCancelled = false;
  _gsVoiceOn = _gsQ("gs-chk-voice").checked;
  if ("speechSynthesis" in window) { _gsPickVoice(); window.speechSynthesis.onvoiceschanged = _gsPickVoice; }
  _gsUnlockSpeech();
  try {
    _gsStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
  } catch (e) { _gsShowStage("gs-stage-nocam"); return; }
  _gsQ("gs-video").srcObject = _gsStream;
  _gsShowStage("gs-stage-scan");
  _gsRunStep();
}

function _gsSetRing(fraction) {
  const ring = _gsQ("gs-ring");
  const len = 620;
  ring.style.strokeDasharray = len;
  ring.style.strokeDashoffset = len * (1 - fraction);
}

async function _gsRunStep() {
  if (_gsCancelled) return;
  const s = _GS_STEPS[_gsStep];
  _gsQ("gs-step-num").textContent = _gsStep + 1;
  _gsQ("gs-prompt").textContent = s.prompt;
  _gsQ("gs-sub").textContent = s.sub;
  _gsBuildDots();
  _gsSetRing(0);

  await _gsSpeakAndWait(s.say);
  if (_gsCancelled) return;

  _gsQ("gs-sub").textContent = s.sub + " \u00b7 bereit machen";
  await _gsWait(_GS_SETTLE_MS);
  if (_gsCancelled) return;

  _gsQ("gs-sub").textContent = s.sub;
  const start = performance.now();
  await new Promise(resolve => {
    function tick(now) {
      if (_gsCancelled) return resolve();
      const frac = Math.min(1, (now - start) / _GS_COUNTDOWN_MS);
      _gsSetRing(frac);
      if (frac < 1) requestAnimationFrame(tick); else resolve();
    }
    requestAnimationFrame(tick);
  });
  if (_gsCancelled) return;

  _gsCapturePhoto();
}

function _gsCapturePhoto() {
  const video = _gsQ("gs-video");
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth; canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.translate(canvas.width, 0); ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const flash = _gsQ("gs-flash");
  flash.classList.remove("active"); void flash.offsetWidth; flash.classList.add("active");

  canvas.toBlob(blob => {
    _gsShots.push({ url: URL.createObjectURL(blob), blob });
    _gsStep++;
    if (_gsStep >= _GS_STEPS.length) { _gsFinishPhotoScan(); }
    else { setTimeout(_gsRunStep, _GS_AFTER_SHOT_MS); }
  }, "image/jpeg", 0.92);
}

async function _gsSaveShot(index) {
  const shot = _gsShots[index];
  const file = new File([shot.blob], "gesichts-scan-" + (index + 1) + ".jpg", { type: "image/jpeg" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: "Gesichts-Scan " + (index + 1) }); return; } catch (e) {}
  }
  window.open(shot.url, "_blank");
}

async function _gsSaveAllShots() {
  const files = _gsShots.map((s, i) => new File([s.blob], "gesichts-scan-" + (i + 1) + ".jpg", { type: "image/jpeg" }));
  if (navigator.canShare && navigator.canShare({ files })) {
    try { await navigator.share({ files, title: "Gesichts-Scan \u2013 alle Fotos" }); return; } catch (e) {}
  }
  _gsShots.forEach(s => window.open(s.url, "_blank"));
}

function _gsFillContactLinks(mailSubject, waText, sfx) {
  const suffix = sfx || "photo";
  const msg = encodeURIComponent(waText);
  _gsQ("gs-link-mail-detlef-" + suffix).href = "mailto:" + _GS_CONTACT.detlef.mail + "?subject=" + encodeURIComponent(mailSubject) + "&body=" + msg;
  _gsQ("gs-link-wa-detlef-" + suffix).href = "https://wa.me/" + _GS_CONTACT.detlef.wa + "?text=" + msg;
  _gsQ("gs-link-mail-david-" + suffix).href = "mailto:" + _GS_CONTACT.david.mail + "?subject=" + encodeURIComponent(mailSubject) + "&body=" + msg;
  _gsQ("gs-link-wa-david-" + suffix).href = "https://wa.me/" + _GS_CONTACT.david.wa + "?text=" + msg;
}

function _gsFinishPhotoScan() {
  if (_gsStream) { _gsStream.getTracks().forEach(t => t.stop()); }
  _gsQ("gs-photo-grid").innerHTML = _gsShots.map((s, i) =>
    `<div class="gs-photo-card"><img src="${s.url}"><button onclick="_gsSaveShot(${i})">\ud83d\udce5 Sichern</button></div>`
  ).join("");
  const canShareFiles = !!(navigator.canShare && navigator.canShare({ files: [new File([""], "t.jpg", { type: "image/jpeg" })] }));
  _gsQ("gs-save-hint").textContent = canShareFiles
    ? "Tippen Sie \u201eSichern\u201c \u2014 im Teilen-Men\u00fc dann \u201eBild sichern\u201c bzw. \u201eIn Fotos sichern\u201c w\u00e4hlen."
    : "Tippen Sie \u201eSichern\u201c, dann das Bild antippen, gedr\u00fcckt halten und \u201eBild sichern\u201c w\u00e4hlen.";
  _gsFillContactLinks(
    "Typberatung anfragen (Gesichts-Scan)",
    "Hallo, ich habe gerade den Gesichts-Scan im Enneagramm-Heilungskompass gemacht und w\u00fcrde gerne einen Termin f\u00fcr eine pers\u00f6nliche Typberatung vereinbaren. Die Fotos h\u00e4nge ich separat an.",
    "photo"
  );
  _gsShowStage("gs-stage-result");
}

// \u2500\u2500 Video-Modus \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

async function _gsStartVideoMode() {
  _gsMode = "video"; _gsCancelled = false; _gsRecordedChunks = []; _gsVideoBlob = null; _gsRecordSeconds = 0;
  try {
    _gsStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: true });
  } catch (e) { _gsShowStage("gs-stage-nocam"); return; }
  _gsQ("gs-video-live").srcObject = _gsStream;
  _gsQ("gs-video-timer").textContent = "0:00 / 2:00";
  _gsQ("gs-btn-record").textContent = "\u25cf Aufnahme starten";
  _gsQ("gs-btn-record").dataset.recording = "0";
  _gsShowStage("gs-stage-video");
}

function _gsPickVideoMime() {
  const candidates = ["video/mp4", "video/webm;codecs=vp9", "video/webm"];
  for (const c of candidates) {
    if (window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(c)) return c;
  }
  return "";
}

function _gsToggleRecord() {
  const btn = _gsQ("gs-btn-record");
  if (btn.dataset.recording === "1") { _gsStopRecording(); return; }

  _gsRecordedChunks = [];
  const mime = _gsPickVideoMime();
  try {
    _gsRecorder = mime ? new MediaRecorder(_gsStream, { mimeType: mime }) : new MediaRecorder(_gsStream);
  } catch (e) {
    _gsRecorder = new MediaRecorder(_gsStream);
  }
  _gsRecorder.ondataavailable = e => { if (e.data && e.data.size) _gsRecordedChunks.push(e.data); };
  _gsRecorder.onstop = _gsHandleRecordingStopped;
  _gsRecorder.start();
  btn.textContent = "\u25a0 Aufnahme beenden";
  btn.dataset.recording = "1";
  _gsRecordSeconds = 0;
  _gsTimerHandle = setInterval(() => {
    _gsRecordSeconds++;
    const m = Math.floor(_gsRecordSeconds / 60), s = _gsRecordSeconds % 60;
    _gsQ("gs-video-timer").textContent = m + ":" + String(s).padStart(2, "0") + " / 2:00";
    if (_gsRecordSeconds >= _GS_VIDEO_MAX_S) _gsStopRecording();
  }, 1000);
}

function _gsStopRecording() {
  if (_gsTimerHandle) { clearInterval(_gsTimerHandle); _gsTimerHandle = null; }
  if (_gsRecorder && _gsRecorder.state !== "inactive") _gsRecorder.stop();
}

function _gsHandleRecordingStopped() {
  const mime = _gsRecorder.mimeType || "video/webm";
  _gsVideoBlob = new Blob(_gsRecordedChunks, { type: mime });
  _gsVideoUrl = URL.createObjectURL(_gsVideoBlob);
  if (_gsStream) { _gsStream.getTracks().forEach(t => t.stop()); }
  const preview = _gsQ("gs-video-preview");
  preview.src = _gsVideoUrl;
  _gsFillContactLinks(
    "Typberatung anfragen (Video-Vorstellung)",
    "Hallo, ich habe gerade eine kurze Video-Vorstellung im Enneagramm-Heilungskompass aufgenommen und w\u00fcrde gerne einen Termin f\u00fcr eine pers\u00f6nliche Typberatung vereinbaren. Das Video h\u00e4nge ich separat an.",
    "video"
  );
  _gsShowStage("gs-stage-video-result");
}

async function _gsSaveVideo() {
  const ext = (_gsVideoBlob.type || "").includes("mp4") ? "mp4" : "webm";
  const file = new File([_gsVideoBlob], "gesichts-scan-video." + ext, { type: _gsVideoBlob.type || "video/webm" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: "Gesichts-Scan Video" }); return; } catch (e) {}
  }
  window.open(_gsVideoUrl, "_blank");
}

function _gesichtsScanInit() {
  _gsCancelled = true; // etwaigen laufenden Foto-Ablauf einer Vorseite stoppen
  if (_gsStream) { _gsStream.getTracks().forEach(t => t.stop()); _gsStream = null; }
  _gsShowStage("gs-stage-intro");

  _gsQ("gs-btn-start-photo").addEventListener("click", _gsStartPhotoScan);
  _gsQ("gs-btn-start-video").addEventListener("click", _gsStartVideoMode);
  _gsQ("gs-btn-cancel").addEventListener("click", () => {
    _gsCancelled = true;
    if (_gsStream) _gsStream.getTracks().forEach(t => t.stop());
    _gsShowStage("gs-stage-intro");
  });
  _gsQ("gs-btn-cancel-video").addEventListener("click", () => {
    if (_gsTimerHandle) clearInterval(_gsTimerHandle);
    if (_gsRecorder && _gsRecorder.state !== "inactive") { try { _gsRecorder.stop(); } catch (e) {} }
    if (_gsStream) _gsStream.getTracks().forEach(t => t.stop());
    _gsShowStage("gs-stage-intro");
  });
  _gsQ("gs-btn-record").addEventListener("click", _gsToggleRecord);
  _gsQ("gs-btn-back-nocam").addEventListener("click", () => _gsShowStage("gs-stage-intro"));
  _gsQ("gs-btn-save-all").addEventListener("click", _gsSaveAllShots);
  _gsQ("gs-btn-retry").addEventListener("click", _gsStartPhotoScan);
  _gsQ("gs-btn-save-video").addEventListener("click", _gsSaveVideo);
  _gsQ("gs-btn-retry-video").addEventListener("click", _gsStartVideoMode);
}


function tierquizPage() {
  const s = window._tqState;
  if (!s) {
    return shell(`
      <div class="page-container">
        ${pageHeader("Welches Tier bin ich?")}
        <div class="typentest-wrap">
          <div class="typentest-card" style="text-align:center;padding:2rem 1.5rem;">
            <div style="font-size:3.5rem;margin-bottom:1rem;letter-spacing:0.2rem;">&#129413;&#128025;&#129445;</div>
            <p class="eyebrow">Kurztest</p>
            <h1 class="typentest-titel" style="margin-bottom:0.5rem;">Welches Tier bin ich?</h1>
            <p class="typentest-intro">3 kurze Fragen \u2013 und Sie erfahren, welches der 27 Enneagramm-Tiere am ehesten zu Ihnen passt.</p>
            <div class="typentest-hinweis" style="text-align:left;margin-bottom:1.5rem;">
              <strong>Kurzer Hinweis, bevor Sie starten:</strong> Kein Test kann beweisen, wer Sie wirklich sind \u2013 denn Sie bewerten sich selbst, und wir alle haben blinde Flecken f\u00fcr unsere eigenen psychologischen Muster. Dieses Quiz mit 3 Fragen ist nur eine erste, grobe Ann\u00e4herung. Nehmen Sie das Ergebnis als Einladung zum Nachdenken \u2013 nicht als endg\u00fcltige Antwort.
            </div>
            <p style="font-size:0.88rem;color:var(--muted);margin-bottom:2rem;">Ca. 1 Minute &middot; kein Konto n\u00f6tig</p>
            ${bookTip("enneagramm-zoo", "27 Tierportr\u00e4ts \u2013 jedes Subtyp-Tier mit Charakter, Biologie und Enneagramm-Bezug.", "Enneagramm-Zoo")}
            ${bookTip("archetypen-der-tiere-im-enneagramm", "Die archetypischen Tiere der 9 Typen als innere Landkarte \u2013 Bilder, die sofort wirken.", "Archetypen der Tiere im Enneagramm")}
            <button class="typentest-start-btn" onclick="window._tqStart()">Quiz starten &#8594;</button>
          </div>
        </div>
      </div>
    `);
  }
  if (s.step === 1) {
    return shell(`
      <div class="page-container">
        ${pageHeader("Welches Tier bin ich?")}
        <div class="typentest-wrap"><div class="typentest-card">
          ${_tqProgress(1)}
          <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:1.2rem;color:var(--ink);">An einem freien Wochenende zieht es mich am ehesten\u2026</h2>
          ${_tqBtn("\u2026 in meine gewohnte Welt", "Zuhause, Routinen, mein eigener Raum \u2013 ich brauche Zeit f\u00fcr mich.", "window._tqA('SE')")}
          ${_tqBtn("\u2026 zu Menschen", "Eine Gruppe, ein Event, gemeinsame Aktivit\u00e4ten \u2013 das gibt mir Energie.", "window._tqA('SO')")}
          ${_tqBtn("\u2026 zu einer bestimmten Person", "Tiefe, intensive Verbindung mit jemandem, dem ich nahestehe.", "window._tqA('SX')")}
        </div></div>
      </div>
    `);
  }
  if (s.step === 2) {
    return shell(`
      <div class="page-container">
        ${pageHeader("Welches Tier bin ich?")}
        <div class="typentest-wrap"><div class="typentest-card">
          ${_tqProgress(2)}
          <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:1.2rem;color:var(--ink);">Welcher Satz trifft auf Sie am ehesten zu?</h2>
          ${_tqBtn("\u201eIch will die Dinge in die Hand nehmen, stark sein und Kontrolle behalten.\u201c", "St\u00e4rke, Qualit\u00e4t, Frieden oder klare Ordnung sind mir wichtig.", "window._tqA('gut')")}
          ${_tqBtn("\u201eIch will echte Verbindung, gesehen werden und wirklich dazugeh\u00f6ren.\u201c", "Beziehungen, Anerkennung und Tiefe sind f\u00fcr mich zentral.", "window._tqA('heart')")}
          ${_tqBtn("\u201eIch will verstehen, sicher sein und meine Optionen offenhalten.\u201c", "Wissen, Orientierung und Freiheit des Denkens sind mir wichtig.", "window._tqA('head')")}
        </div></div>
      </div>
    `);
  }
  if (s.step === 3) {
    const qMap = {
      gut:  [["Ich stehe f\u00fcr mich ein und scheue keine direkte Konfrontation.","St\u00e4rke und Selbstbestimmung sind mein Grundmodus.","8"],
              ["Ich suche inneren Frieden und vermeide Konflikte, wo es geht.","Harmonie und Ruhe sind das, wonach ich mich sehne.","9"],
              ["Ich habe hohe innere Ma\u00dfst\u00e4be und m\u00f6chte Dinge wirklich richtig machen.","Qualit\u00e4t und Prinzipientreue liegen mir tief im Blut.","1"]],
      heart:[["F\u00fcr Menschen, die mir wichtig sind, gebe ich alles \u2013 oft mehr als f\u00fcr mich selbst.","F\u00fcrsorge und N\u00e4he sind mein nat\u00fcrlicher Ausdruck.","2"],
              ["Ich m\u00f6chte etwas leisten und einen kompetenten, guten Eindruck machen.","Erfolg und Anerkennung motivieren mich.","3"],
              ["Ich suche das Echte und Tiefe \u2013 Oberfl\u00e4chlichkeit langweilt mich schnell.","Sehnsucht nach dem Besonderen und nach echtem Verst\u00e4ndnis.","4"]],
      head: [["Ich beobachte lieber, bevor ich handle, und brauche viel eigenen Raum.","Wissen und R\u00fcckzug geben mir Kraft.","5"],
              ["Ich frage mich oft, ob ich vertrauen kann und ob ich der Situation gewachsen bin.","Sicherheit und Loyalit\u00e4t sind f\u00fcr mich existenziell.","6"],
              ["Ich mag Abwechslung, neue Ideen und will mich nicht festlegen m\u00fcssen.","Freiheit und M\u00f6glichkeiten halten mich lebendig.","7"]]
    };
    const opts = qMap[s.center] || qMap.gut;
    return shell(`
      <div class="page-container">
        ${pageHeader("Welches Tier bin ich?")}
        <div class="typentest-wrap"><div class="typentest-card">
          ${_tqProgress(3)}
          <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:1.2rem;color:var(--ink);">Und welcher Satz beschreibt Sie am treffendsten?</h2>
          ${opts.map(o => _tqBtn('\u201e'+o[0]+'\u201c', o[1], "window._tqA('"+o[2]+"')")).join("")}
        </div></div>
      </div>
    `);
  }
  // Result
  const code = s.inst + s.type;
  const tier  = _TQ_TIERE[code];
  const emoji = _TQ_EMOJI[code] || "\ud83e\udd81";
  const beschr = _TQ_BESCHR[code] || "";
  const subtypRoute = "subtype/" + code.toLowerCase();
  if (!tier) return shell(`
    <div class="page-container">
      ${pageHeader("Welches Tier bin ich?")}
      <div class="typentest-wrap"><div class="typentest-card" style="text-align:center;padding:2rem 1.5rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">\ud83e\udd81</div>
        <h2 class="typentest-titel">Das Tier versteckt sich noch</h2>
        <p style="color:var(--muted);font-size:0.95rem;line-height:1.6;margin-bottom:1.5rem;">Manchmal m\u00fcssen wir zweimal hinschauen. Versuchen Sie es noch einmal \u2013 vielleicht f\u00fchlt sich eine andere Antwort ehrlicher an.</p>
        <button class="typentest-start-btn" onclick="window._tqReset()">\u21ba Nochmal starten</button>
      </div></div>
    </div>
  `);

  return shell(`
    <div class="page-container">
      ${pageHeader("Welches Tier bin ich?")}
      <div class="typentest-wrap">
        <div class="typentest-card" style="text-align:center;padding:2rem 1.5rem;">
          <div style="position:relative;width:120px;height:120px;border-radius:50%;overflow:hidden;border:3px solid var(--gold);margin:0 auto 0.8rem;background:transparent;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-240/${code.toLowerCase()}.jpg" alt="${tier}" style="position:absolute;top:${tierAvatarTop(code)};left:${tierAvatarLeft(code)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.outerHTML='<div style=&quot;font-size:5rem;margin-bottom:0.5rem;&quot;>${emoji}</div>'">
          </div>
          <p class="eyebrow" style="margin-bottom:0.3rem;">Ihr Enneagramm-Tier</p>
          <h1 class="typentest-titel" style="margin-bottom:0.3rem;">${tier}</h1>
          <p style="font-size:1rem;color:var(--gold);font-weight:700;margin-bottom:1.2rem;">${s.inst === "SE" ? "Selbsterhaltender" : s.inst === "SO" ? "Sozialer" : "Sexueller"} Typ ${s.type} <span style="font-weight:400;opacity:0.7;">(${code})</span></p>
          <p style="font-size:0.95rem;line-height:1.6;color:var(--ink);margin-bottom:1.8rem;text-align:left;">${beschr}</p>
          <button class="typentest-start-btn" data-route="${subtypRoute}" style="margin-bottom:0.8rem;">Zum Subtyp-Profil &#8594;</button>
          <br>
          <button class="related-link-btn" onclick="window._tqReset()" style="background:none;border:1.5px solid var(--border);border-radius:8px;padding:0.6rem 1.2rem;cursor:pointer;font-family:inherit;font-size:0.9rem;color:var(--muted);">&#8635; Quiz wiederholen</button>
          <button class="related-link-btn" onclick="window._tqShare('${emoji} Ich bin ${tier} (${code}) \u2013 mein Enneagramm-Tier im Heilungskompass von Detlef Rathmer.')" style="background:none;border:1.5px solid var(--gold);border-radius:8px;padding:0.6rem 1.2rem;cursor:pointer;font-family:inherit;font-size:0.9rem;color:var(--gold);margin-top:0.5rem;">&#8679; Ergebnis teilen</button>
          <div style="margin-top:2rem;background:linear-gradient(135deg,#f5e8cc,#eedda0);border:2px solid var(--gold);border-radius:12px;padding:1.4rem 1.2rem;text-align:left;">
            <p style="font-size:0.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);margin:0 0 .3rem;">M\u00f6chten Sie tiefer gehen?</p>
            <p style="font-family:'EB Garamond',serif;font-size:1.15rem;color:var(--ink);margin:0 0 .5rem;line-height:1.3;">Der Kompass zeigt Ihnen das vollst\u00e4ndige Heilungswissen f\u00fcr Ihr Tier.</p>
            <ul style="font-size:0.85rem;color:var(--muted);margin:0 0 1rem;padding-left:1.2rem;line-height:1.7;">
              <li>Hunderte Schaubilder & Heilmittel f\u00fcr Ihren Subtyp</li>
              <li>Alle 27 Subtyp-Portraits mit Tiefenpsychologie</li>
              <li>Motivationale Typenbestimmung & Begleitung</li>
            </ul>
            <button class="cta-gold-btn" data-route="freischalt" style="background:var(--gold-dark);color:var(--copper);border:3px solid #8a5a1a;border-radius:10px;padding:.7rem 1.8rem;font-size:0.95rem;font-weight:700;cursor:pointer;font-family:'EB Garamond',serif;box-shadow:0 4px 14px rgba(0,0,0,.2);">Jetzt freischalten &#8594;</button>
          </div>
          <p style="font-size:0.82rem;color:var(--muted);margin-top:1.2rem;line-height:1.5;">Dieses Ergebnis ist ein Anhaltspunkt \u2013 kein Test ersetzt eine genaue Typbestimmung. F\u00fcr mehr Tiefe empfehlen wir den <a href="javascript:void(0)" data-route="diagnosetest" style="color:var(--gold);">ausf\u00fchrlichen Diagnose-Test</a>.</p>
        </div>
      </div>
    </div>
  `);
}

function _tqNav() {
  if (location.hash.replace("#","") === "tierquiz") { render(); } else { go("tierquiz"); }
}
window._tqStart = function() { window._tqState = {step:1,inst:"",center:"",type:""}; _tqNav(); };
window._tqA = function(val) {
  const s = window._tqState;
  if (!s) return;
  if (s.step === 1 && ["SE","SO","SX"].indexOf(val) >= 0) { s.inst = val; s.step = 2; }
  else if (s.step === 2 && ["gut","heart","head"].indexOf(val) >= 0) { s.center = val; s.step = 3; }
  else if (s.step === 3 && ["1","2","3","4","5","6","7","8","9"].indexOf(val) >= 0) { s.type = val; s.step = 4; }
  else return;
  _tqNav();
};
window._tqReset = function() { window._tqState = null; _tqNav(); };
window._tqShare = function(text) {
  if (navigator.share) {
    navigator.share({ text: text, url: "https://kompass.verlagshausrathmer.com/#tierquiz" }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text wurde kopiert \u2013 jetzt einfach einf\u00fcgen!");
    }).catch(() => {
      prompt("Text zum Kopieren:", text);
    });
  }
};
// \u2500\u2500\u2500 Ende Welches-Tier-Quiz \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function quizPage() {
  if (!_quizState) return quizIntroScreen();
  if (_quizState.phase === "result") return quizResultScreen();
  return quizQuestionScreen();
}

function quizIntroScreen() {
  const qd = window._quizData || [];
  const counts = { leicht: 0, mittel: 0, schwer: 0 };
  qd.forEach(q => { if (counts[q.d] !== undefined) counts[q.d]++; });
  return shell(`
    ${pageHeader("quiz")}
    <section class="narrow centered" style="padding:2.5rem 1rem 5rem;">
      <p class="eyebrow">Wissen testen</p>
      <h1 style="margin-bottom:0.4rem;">Enneagramm-Quiz</h1>
      <p style="color:var(--text-muted,#888);margin:0 0 2rem;font-size:0.95rem;">10 Fragen pro Runde &middot; ${qd.length} Fragen im Pool</p>
      <div style="display:flex;gap:1.8rem;justify-content:center;flex-wrap:wrap;margin-bottom:2.8rem;font-size:0.88rem;">
        <span><span style="color:#5a9e5a;font-size:1.1em;">&#9679;</span>&ensp;Leicht (${counts.leicht})</span>
        <span><span style="color:#c4a456;font-size:1.1em;">&#9679;&#9679;</span>&ensp;Mittel (${counts.mittel})</span>
        <span><span style="color:#c0392b;font-size:1.1em;">&#9679;&#9679;&#9679;</span>&ensp;Schwer (${counts.schwer})</span>
      </div>
      <button onclick="window._startQuiz()"
        style="background:#c4a456;color:#1a1208;border:none;padding:0.9rem 2.8rem;border-radius:30px;font-size:1.05rem;font-family:inherit;cursor:pointer;font-weight:600;letter-spacing:0.03em;">
        Quiz starten &#8594;
      </button>
    </section>
  `);
}

function quizQuestionScreen() {
  const st = _quizState;
  const q  = st.questions[st.current];
  const total = st.questions.length;
  const pct = Math.round((st.current / total) * 100);

  const diffDots = {
    leicht: '<span style="color:#5a9e5a;">&#9679;</span> Leicht',
    mittel: '<span style="color:#c4a456;">&#9679;&#9679;</span> Mittel',
    schwer: '<span style="color:#c0392b;">&#9679;&#9679;&#9679;</span> Schwer',
  };

  const answersHtml = st.shuffledAnswers.map((item, i) => {
    let bg = "background:var(--surface,#f5f0e8);border:2px solid rgba(0,0,0,0.08);";
    if (st.answered) {
      if (item.correct) bg = "background:#d4edda;border:2px solid #28a745;";
      else if (i === st.selectedIdx) bg = "background:#f8d7da;border:2px solid #dc3545;";
      else bg = "background:var(--surface,#f5f0e8);border:2px solid rgba(0,0,0,0.06);opacity:0.6;";
    }
    const handler = st.answered ? "" : `onclick="window._answerQuiz(${i})"`;
    return `<button ${handler} style="${bg}display:block;width:100%;text-align:left;padding:0.85rem 1.1rem;border-radius:10px;font-size:0.95rem;font-family:inherit;cursor:${st.answered ? "default" : "pointer"};margin-bottom:0.55rem;transition:border .15s,background .15s;">${item.text}</button>`;
  }).join("");

  const correctText = st.answered && !st.shuffledAnswers[st.selectedIdx].correct
    ? `<p style="font-size:0.85rem;color:#555;margin:0.6rem 0 0;">&#10003; Richtig: <strong>${st.shuffledAnswers.find(x => x.correct).text}</strong></p>`
    : "";

  const nextLabel = st.current + 1 >= total ? "Auswertung &#8594;" : "N&auml;chste Frage &#8594;";
  const nextBtn = st.answered
    ? `<div style="text-align:center;margin-top:1.2rem;"><button onclick="window._nextQuizQuestion()" style="background:#c4a456;color:#1a1208;border:none;padding:0.7rem 2rem;border-radius:20px;font-size:0.95rem;font-family:inherit;cursor:pointer;">${nextLabel}</button></div>`
    : "";

  return shell(`
    ${pageHeader("quiz")}
    <section class="narrow" style="padding:2rem 1rem 5rem;">
      <div style="margin-bottom:0.6rem;">
        <div style="height:4px;background:rgba(0,0,0,0.08);border-radius:2px;overflow:hidden;margin-bottom:0.8rem;">
          <div style="height:100%;width:${pct}%;background:#c4a456;transition:width .3s;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.82rem;color:#888;">
          <span>Frage ${st.current + 1} von ${total}</span>
          <span>${diffDots[q.d] || ""}</span>
        </div>
      </div>
      <div style="background:linear-gradient(135deg,#2c2c2c,#1e1e1e);border-radius:14px;padding:1.8rem 1.5rem;margin:1rem 0 1.2rem;">
        <p style="color:#f5e9d0;font-family:'EB Garamond',Georgia,serif;font-size:1.2rem;line-height:1.55;margin:0;">${q.q}</p>
      </div>
      ${answersHtml}
      ${correctText}
      ${nextBtn}
      <div style="text-align:center;margin-top:3.5rem;padding-top:1.5rem;border-top:1px solid rgba(0,0,0,0.08);">
        <a href="mailto:detlefrathmer@t-online.de?subject=Quiz%3A%20Frage%20${q.id}%20melden&body=Frage%20${q.id}%3A%20${encodeURIComponent(q.q)}%0A%0AMein%20Hinweis%3A%20" style="font-size:0.72rem;color:#bbb;text-decoration:none;letter-spacing:0.03em;">Frage melden</a>
      </div>
    </section>
  `);
}

function quizResultScreen() {
  const st = _quizState;
  const score = st.score;
  const total = st.questions.length;
  const pct = Math.round(score / total * 100);
  let msg, icon;
  if (pct >= 90) { msg = "Ausgezeichnet &mdash; Sie kennen das Enneagramm sehr gut!"; icon = "&#127942;"; }
  else if (pct >= 70) { msg = "Sehr gut! Einige Feinheiten warten noch auf Sie."; icon = "&#10024;"; }
  else if (pct >= 50) { msg = "Gut gemacht! Mit mehr &Uuml;bung werden Sie noch sicherer."; icon = "&#128170;"; }
  else { msg = "Das Enneagramm h&auml;lt noch viel bereit &mdash; bleiben Sie dran!"; icon = "&#127807;"; }

  const detailRows = st.questions.map((q, i) => {
    const chosen = st.shuffledAnswers; // not stored per-question, skip detail for now
    const correct = q.a[q.c];
    return "";
  }).join("");

  return shell(`
    ${pageHeader("quiz")}
    <section class="narrow centered" style="padding:3rem 1rem 5rem;">
      <div style="font-size:2.8rem;margin-bottom:1rem;">${icon}</div>
      <h2 style="margin-bottom:0.3rem;">${score} von ${total} richtig</h2>
      <p style="color:#888;font-size:1.1rem;margin:0 0 0.8rem;">${pct}&thinsp;%</p>
      <p style="max-width:400px;margin:0 auto 2.5rem;color:#555;line-height:1.6;">${msg}</p>
      <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
        <button onclick="window._startQuiz()"
          style="background:#c4a456;color:#1a1208;border:none;padding:0.85rem 2rem;border-radius:30px;font-size:0.95rem;font-family:inherit;cursor:pointer;font-weight:600;">
          Neue Runde &#8594;
        </button>
        <button onclick="window._resetQuiz()"
          style="background:transparent;border:1px solid #ccc;color:#666;padding:0.85rem 1.5rem;border-radius:30px;font-size:0.95rem;font-family:inherit;cursor:pointer;">
          Zur &Uuml;bersicht
        </button>
      </div>
    </section>
  `);
}

// \u2500\u2500 ENDE QUIZ ENGINE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function subtypeEntry(code) {
  return knowledgePrototype.subtypes.find(
    (s) => s.code.toLowerCase() === code.toLowerCase()
  );
}

const DYNAMIK_VIDEOS = {
  1: "b3NTI3JH2wo",
  2: "BlxNIC_VxV4",
  3: "Txkm8yZ88kw",
  4: "XoJD38aD5kg",
  5: "kEikxOZt4fM",
  6: "_nQGpZhlsQo",
  7: "l87ai_tZAoU",
  8: "jnyg4qjQUf8",
  9: "GT3XxoDyHeo",
};

const DYNAMIK_TYPE_NAMES = {
  1: "Typ 1 \u2013 Der Reformer",
  2: "Typ 2 \u2013 Der Helfer",
  3: "Typ 3 \u2013 Der Erfolgsmensch",
  4: "Typ 4 \u2013 Der Individualist",
  5: "Typ 5 \u2013 Der Denker",
  6: "Typ 6 \u2013 Der Loyalist",
  7: "Typ 7 \u2013 Der Enthusiast",
  8: "Typ 8 \u2013 Der Herausforderer",
  9: "Typ 9 \u2013 Der Friedensstifter",
};

function dynamikDerTypenPage() {
  const typeColors = ["","#7B7B52","#6B8E6B","#8B5E3C","#4A6670","#5A6E8C","#8B7355","#6B8E8C","#8B3A3A","#5A7A5A"];
  const cards = Object.entries(DYNAMIK_VIDEOS).map(([num, vid]) => {
    const n = parseInt(num);
    const col = typeColors[n] || "var(--copper)";
    return `
      <div style="background:var(--paper);border-radius:14px;overflow:hidden;box-shadow:0 1px 6px rgba(0,0,0,0.08);border-top:3px solid ${col};">
        <p style="margin:0;padding:0.7rem 1rem 0.5rem;font-size:0.88rem;font-weight:600;line-height:1.35;color:var(--ink);">${DYNAMIK_TYPE_NAMES[n]}</p>
        <div style="position:relative;aspect-ratio:16/9;background:#000;">
          <iframe width="100%" height="100%" style="border:none;display:block;"
            src="https://www.youtube.com/embed/${vid}?rel=0"
            allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
      </div>
    `;
  }).join("");

  return shell(`
    ${pageHeader("dynamik-der-typen")}
    <div class="section-content">
      <h1 style="font-size:1.6rem;line-height:1.3;margin-bottom:1rem;">Die innere Dynamik der Enneagrammtypen</h1>
      <p style="font-size:1.05rem;line-height:1.7;margin-bottom:1.8rem;">
        Diese neun Videos vermitteln ein lebendiges Bild der inneren Dynamik der Enneagrammtypen \u2013
        die Denk- und F\u00fchlmuster, Motivationen und blinden Flecken jedes Typs,
        dargestellt in jeweils 10\u201312 Minuten.
        Es sind die meistgesehenen Videos des Kanals.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.2rem;">
        ${cards}
      </div>
      ${bookTip("die-praxis-der-typbestimmung-taschenbuch", "In dieser Zeit entstanden auch die Videos \u2013 das Buch liefert die schriftliche Vertiefung zur Typbestimmung, Schritt f\u00fcr Schritt.", "Die Praxis der Typbestimmung")}
      ${relatedLinks([
        { route: "dynamik-des-bewusstseinszustandes", label: "Dynamik des Bewusstseinszustands" },
        { route: "bedeutung-27-subtypen", label: "Bedeutung der 27 Subtypen" },
        { route: "enneagramm-profiling", label: "Enneagramm-Profiling" },
      ])}
    </div>
  `);
}

const SUBTYPE_SONGS = {
  SE1: { de: "XHB8xTxJtHY", en: "NWj3sLpqm1s" },
  SO1: { de: "eOJAkd-QohU", en: "DkkZS4FkZbA" },
  SX1: { de: "s1AQHS_gOHg", en: "NWj3sLpqm1s" },
  SE2: { de: "Gxgr9xOtKaQ", en: "OT19G0XQsak" },
  SO2: { de: "tLMBN_8wH9g", en: "SaMqeT32TmQ" },
  SX2: { de: "JCoUFccskX0", en: "aTFl_G-AE3E" },
  SE3: { de: "CADA-IqRQWY", en: "fY4bvwCPQoQ" },
  SO3: { de: "Rxprww_GTsc", en: "hFPun_FKul8" },
  SX3: { de: "-ByqceZszZw", en: "vuRc8ToDW6A" },
  SE4: { de: "Q14Rd2iCgzk", en: "E6xQTADTtAo" },
  SO4: { de: "r1ni5PfATM8", en: "dubv-FXZwDo" },
  SX4: { de: "qWQCEAN5TJA", en: "DYC5o5-XQYE" },
  SE5: { de: "200kCwdgywU", en: "hWvUu9t7t88" },
  SO5: { de: "3xyba3n5Iro", en: "4GOof3XqAkg" },
  SX5: { de: "bzOuErO0WF0", en: "VzDs1icqvac" },
  SE6: { de: "_bnbjIyn3qY", en: "KICVKWtfIKk" },
  SO6: { de: "KSeQ5r73C7Q", en: "82Qd_SdH1RI" },
  SX6: { de: "XEAzDNSmVjg", en: "IHDIM7tK4Fs" },
  SE7: { de: "e67bCJpPGo4", en: "_SOvWRQxacw" },
  SO7: { de: "mxSaAfvaBKE", en: "-a261mIny40" },
  SX7: { de: "ubtVaur_QKc", en: "KhvQsODuii8" },
  SE8: { de: "w-l6Otm34QU", en: "PTwXfWpA5sk" },
  SO8: { de: "dR6VaEnpWgE", en: "WnZzoQt45FU" },
  SX8: { de: "THA4awgtiTE", en: "5wCzlEA2cik" },
  SE9: { de: "X7Vw6jtKNMY", en: "XWwqegFjgXM" },
  SO9: { de: "_xYqRYaUsEk", en: "0BW4MaBwT_E" },
  SX9: { de: "Q9p8_1iQhm0", en: "cJN3-HEA-_A" },
};

const SUBTYP_SONG_TYPEN = [
  { nr: 1, name: "Der Reformer" },
  { nr: 2, name: "Der Helfer" },
  { nr: 3, name: "Der Macher" },
  { nr: 4, name: "Der Individualist" },
  { nr: 5, name: "Der Beobachter" },
  { nr: 6, name: "Der Loyale" },
  { nr: 7, name: "Der Enthusiast" },
  { nr: 8, name: "Der Herausforderer" },
  { nr: 9, name: "Der Friedensstifter" },
];

function subtypePage(code) {
  const sp = text.subtypePage;
  const entry = subtypeEntry(code);
  if (!entry) {
    return shell(`
      ${pageHeader("knowledge")}
      <section class="narrow centered">
        <button class="ghost-link" data-route="knowledge">${sp.back}</button>
        <h1>${code.toUpperCase()}</h1>
        <p class="lead-small">F\u00fcr diesen Subtyp ist noch keine Detailseite angelegt.</p>
      </section>
    `);
  }
  const details = subtypeDetails[code.toLowerCase()] || {};
  const tc = typeColorFromCode(code);
  return shell(`
    ${pageHeader("knowledge")}
    <section class="subtype-hero" style="border-top:4px solid ${tc}">
      <button class="ghost-link" data-route="knowledge">${sp.back}</button>
      <p class="eyebrow" style="color:${tc}">${entry.code} \u00b7 ${text.knowledgeCard.animalPrefix} ${entry.animal}</p>
      <h1 style="color:${tc}">${entry.title}</h1>
      <p class="lead-small">${entry.coreSentence}</p>
      <div style="margin-top:1.25rem; border-radius:0.5rem; overflow:hidden; border:1px solid var(--line); cursor:zoom-in;"
           data-comic-open="${code.toLowerCase()}" title="Antippen zum Vergr\u00f6\u00dfern">
        <img src="${R2_CDN}assets/comics/${code.toLowerCase()}.jpg"
             alt="Comic: ${entry.code} &ndash; ${entry.title}"
             style="width:100%; display:block; filter:contrast(1.05); pointer-events:none;" />
      </div>
      <button class="ghost-link" data-tier-laut="${entry.animal}"
              style="margin-top:0.75rem; font-size:0.9rem; opacity:0.85;">
        \ud83d\udd0a ${entry.animal}-Laut
      </button>
    </section>
    ${details.meinKompass ? meinKompassSection(details.meinKompass, sp) : ""}
    ${(function(){ const dn = parseInt(code.match(/\d+/)[0]); const dv = DYNAMIK_VIDEOS[dn]; return dv ? `
    <section class="narrow" style="padding-top:0;padding-bottom:0;">
      <h3 style="margin:0 0 0.6rem;font-size:1rem;color:${tc};">Die Dynamik des Typs ${dn}</h3>
      <div style="position:relative;aspect-ratio:16/9;border-radius:10px;overflow:hidden;box-shadow:0 1px 6px rgba(0,0,0,0.1);">
        <iframe width="100%" height="100%" style="border:none;display:block;"
          src="https://www.youtube.com/embed/${dv}?rel=0"
          allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>
    </section>` : ""; })()} 
    <section class="subtype-sections">
      ${sectionBlock("verstehen", sp.rooms.verstehen, verstehenInner(entry, sp) + impulseBlock(SUBTYP_IMPULSE[code.toLowerCase()], tc), tc)}
      ${sectionBlock("spueren", sp.rooms.spueren, spuerenInner(entry, sp), tc)}
      ${sectionBlock("regulieren", sp.rooms.regulieren, regulierenInner(entry, sp), tc)}
      ${sectionBlock("unterstuetzen", sp.rooms.unterstuetzen, entry.heilmittel ? (hasHeilwissen() ? heilmittelSection(entry.heilmittel, oelForType(entry.code), entry.code) : heilwissenLock()) : "", tc)}
      ${sectionBlock("verkoerpern", sp.rooms.verkoerpern, verkoerpernInner(entry, sp), tc)}
      ${sectionBlock("vertiefen", sp.rooms.vertiefen, vertiefungSection(details.vertiefung, sp), tc)}
    </section>
    ${hasHeilwissen() ? tcmInlineBlock(tcmForType(entry.code)) : ""}
    ${hasHeilwissen() ? kindheitInlineBlock(kindheitForType(entry.code)) : ""}
    <section class="narrow" style="padding-top:0; padding-bottom:0;">
      ${bookTip(`einzelstudie-${code.toLowerCase()}`, `Die vollst\u00e4ndige Einzelstudie zur ${entry.code} &ndash; ${entry.title}. Ca. 70 Seiten tiefgreifende psychologische Analyse.`, `Einzelstudie ${entry.code}: ${entry.title}`)}
    </section>
    ${querverbindungen(entry)}
    <section class="narrow" style="padding:0 0 0.5rem;">
      <details class="subtype-note-wrap">
        <summary class="subtype-note-toggle">\ud83d\udcdd Meine Notiz zu ${entry.code}</summary>
        <textarea class="subtype-note-area" data-note-key="note-${code}" oninput="localStorage.setItem(this.dataset.noteKey,this.value)" placeholder="Pers\u00f6nliche Beobachtungen, Klientenbeispiele, Gedanken \u2026"></textarea>
      </details>
    </section>
    ${beratungsCTA()}
  `);
}

function heilwissenLock(title = "Heilmittel, TCM & Kindheitspr\u00e4gung") {
  return `
    <div class="heilwissen-lock">
      <span class="heilwissen-lock__icon">\ud83d\udd12</span>
      <div>
        <strong>${title}</strong>
        <p>Diese Inhalte sind Teil des Heilungskompass-Upgrades.</p>
      </div>
      <button class="heilwissen-lock__btn" data-route="freischalt/heilwissen">Upgrade ansehen \u2192</button>
    </div>
  `;
}

function beratungsCTA() {
  return `
    <section class="beratungs-cta">
      <div class="beratungs-cta__card beratungs-cta__card--behandlung">
        <div class="beratungs-cta__text">
          <p class="beratungs-cta__eyebrow">Enneagramm-Hom\u00f6opathie</p>
          <h3 class="beratungs-cta__title">Sie m\u00f6chten sich hom\u00f6opathisch behandeln lassen?</h3>
          <p class="beratungs-cta__body">Die Enneagramm-Hom\u00f6opathie arbeitet mit dem individuellen Heilmittel Ihres Typs. Wenn Sie eine pers\u00f6nliche Behandlung anstreben, k\u00f6nnen Sie eine Erstberatung anfragen.</p>
        </div>
        <a class="beratungs-cta__btn" href="https://www.psychologische-homoeopathie.de/beratung.html" target="_blank" rel="noopener">
          Zur Erstberatung \u2192
        </a>
      </div>
      <div class="beratungs-cta__card beratungs-cta__card--typisierung">
        <div class="beratungs-cta__text">
          <p class="beratungs-cta__eyebrow">Typisierungsberatung</p>
          <h3 class="beratungs-cta__title">Noch unsicher \u00fcber Ihren Typ oder Subtyp?</h3>
          <p class="beratungs-cta__body">Eine pers\u00f6nliche Typisierungsberatung gibt Klarheit. Sie k\u00f6nnen sich an Detlef oder David L. Rathmer wenden \u2014 beide sind erfahrene Typisierungsberater.</p>
        </div>
        <div class="beratungs-cta__berater-row">
          <div class="beratungs-cta__berater-item">
            <span class="beratungs-cta__berater-name">Detlef Rathmer</span>
            <div class="beratungs-cta__contact">
              <a class="beratungs-cta__btn beratungs-cta__btn--secondary" href="mailto:detlefrathmer@t-online.de?subject=Typisierungsberatung">\u2709 E-Mail</a>
              <a class="beratungs-cta__btn beratungs-cta__btn--whatsapp" href="https://wa.me/4915758786201?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp</a>
            </div>
            <a class="beratungs-cta__web" href="https://www.psychologische-homoeopathie.de" target="_blank" rel="noopener">Naturheilpraxis Detlef Rathmer \u2192 psychologische-homoeopathie.de</a>
          </div>
          <div class="beratungs-cta__berater-item">
            <span class="beratungs-cta__berater-name">David L. Rathmer</span>
            <div class="beratungs-cta__contact">
              <a class="beratungs-cta__btn beratungs-cta__btn--secondary" href="mailto:rathmer.david.business@gmail.com?subject=Typisierungsberatung">\u2709 E-Mail</a>
              <a class="beratungs-cta__btn beratungs-cta__btn--whatsapp" href="https://wa.me/4915901902479?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp</a>
            </div>
            <a class="beratungs-cta__web" href="https://www.enneascholars.de" target="_blank" rel="noopener">Enneagramm-Profiling f\u00fcr F\u00fchrungskr\u00e4fte &amp; Unternehmen \u2192 enneascholars.de</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function querverbindungen(entry) {
  const oel = oelForType(entry.code);
  const tcm = tcmForType(entry.code);
  const kindheit = kindheitForType(entry.code);
  const links = [
    { label: "Heilmittel", route: "healing", icon: "\u2b21" },
    oel      ? { label: "\u00c4therische \u00d6le", route: "oils", icon: "\u2726" } : null,
    tcm      ? { label: "TCM & Organuhr", route: "tcm", icon: "\u25ce" } : null,
    kindheit ? { label: "Kindheitstraumata", route: "kindheit", icon: "\u25c7" } : null,
    { label: "Bibliothek", route: "library", icon: "\u25c8" },
  ].filter(Boolean);
  return `
    <section class="querverbindungen">
      <p class="querverbindungen__label">Weiterf\u00fchrende Themen</p>
      <div class="querverbindungen__links">
        ${links.map(l => `
          <button class="querverbindungen__chip" data-route="${l.route}">
            <span class="querverbindungen__icon">${l.icon}</span>${l.label}
          </button>`).join("")}
      </div>
    </section>
  `;
}

function meinKompassSection(k, sp) {
  const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  return `
    <section class="mein-kompass">
      <div class="section-divider"><span>${sp.meinKompassTitle}</span></div>
      <div class="mein-kompass__block">
        <strong>${sp.lebensthema}</strong>
        <p>${k.lebensthema}</p>
      </div>
      <div class="mein-kompass__block">
        <strong>${sp.grundstrategie}</strong>
        <p>${k.grundstrategie}</p>
      </div>
      <div class="mein-kompass__cols">
        <div class="mein-kompass__block">
          <strong>${sp.staerken}</strong>
          ${list(k.staerken)}
        </div>
        <div class="mein-kompass__block">
          <strong>${sp.herausforderungen}</strong>
          ${list(k.herausforderungen)}
        </div>
      </div>
      <div class="mein-kompass__block">
        <strong>${sp.entwicklungspotenzial}</strong>
        ${list(k.entwicklungspotenzial)}
        ${k.wandlung ? `<p class="mein-kompass__wandlung">${k.wandlung}</p>` : ""}
      </div>
      ${k.gedankeFuerHeute ? `
        <blockquote class="mein-kompass__gedanke">
          <span>${sp.gedankeFuerHeute}</span>
          <p>${k.gedankeFuerHeute}</p>
        </blockquote>
      ` : ""}
    </section>
  `;
}

function roomCard(key, title, inner) {
  if (!inner) return "";
  return `
    <article class="room room--${key}">
      <h3 class="room__title">${title}</h3>
      <div class="room__body">${inner}</div>
    </article>
  `;
}

function impulseBlock(impulse, color) {
  if (!impulse) return "";
  const paragraphs = impulse.text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  return `
    <div class="typ-impuls" style="border-left-color:${color || "var(--accent)"}">
      ${paragraphs}
      <p class="typ-impuls__impuls"><em>Impuls f\u00fcr heute: ${impulse.impuls}</em></p>
      <p class="typ-impuls__autor">\u2014 Detlef Rathmer</p>
    </div>
  `;
}

function sectionBlock(key, title, inner, color) {
  if (!inner) return "";
  const titleStyle = color ? ` style="color:${color}"` : "";
  return `
    <section class="subtype-section subtype-section--${key}" id="subtype-section-${key}">
      <h2 class="subtype-section__title"${titleStyle}>${title}</h2>
      <div class="subtype-section__body">${inner}</div>
    </section>
  `;
}

function verstehenInner(entry, sp) {
  const blocks = [];
  // Type-Overview-Schaubild (z. B. type-1-overview.jpeg) ganz oben im Verstehen-Raum
  if (entry.visualPages) {
    const overviewPg = entry.visualPages.find(pg => pg.src.includes("overview"));
    if (overviewPg) blocks.push(`
      <figure class="vollseite-karte">
        <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
        <div class="card-pg-wrap">
          <img src="${cdnImg(overviewPg.src)}" alt="${overviewPg.alt}" class="vollseite-karte__img" loading="lazy"
            onerror="this.closest('.vollseite-karte').style.display='none'" />
          <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
        </div>
        <figcaption class="vollseite-karte__titel">${overviewPg.title || ""}</figcaption>
      </figure>
    `);
  }
  if (entry.lifeTheme) blocks.push(`<div class="room-field"><strong>${sp.lifeTheme}</strong><ul>${entry.lifeTheme.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.unconsciousStrategy && entry.unconsciousStrategy.length) blocks.push(`<div class="room-field"><strong>${sp.unconsciousStrategy || "Unbewusste Strategie"}</strong><ul>${entry.unconsciousStrategy.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.organismQuestion) blocks.push(`<div class="room-field"><strong>${sp.organismQuestion}</strong><p>${entry.organismQuestion}</p></div>`);
  if (entry.coreSentence) blocks.push(`<div class="room-field"><strong>${sp.coreSentence}</strong><p>${entry.coreSentence}</p></div>`);
  if (entry.integrationSentence) blocks.push(`<div class="room-field room-field--quote"><strong>${sp.integrationSentence || "Leitsatz der Integration"}</strong><blockquote>${entry.integrationSentence}</blockquote></div>`);
  if (entry.integrationPath && entry.integrationPath.length) blocks.push(`<div class="room-field"><strong>${sp.integrationPath || "Integrationsweg"}</strong><ul>${entry.integrationPath.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  if (entry.woundBehindPassion) blocks.push(woundBehindPassionSection(entry.woundBehindPassion));
  return blocks.join("");
}

function spuerenInner(entry, sp) {
  const blocks = [];
  // Profilbild (Seite 1) \u2014 zeigt Prototypen, Blickqualit\u00e4t, K\u00f6rpersignatur
  const seite1 = `${R2_CDN}assets/knowledge/type-${entry.code.slice(-1)}/${entry.code.toLowerCase()}/${entry.code.toLowerCase()}-page-1.jpeg`;
  blocks.push(`
    <figure class="vollseite-karte">
      <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
      <div class="card-pg-wrap">
        <img src="${seite1}" alt="${entry.code} Seite 1 &ndash; Prototypen, Blickqualit\u00e4t und K\u00f6rpersignatur" class="vollseite-karte__img" loading="lazy"
          onerror="this.closest('.vollseite-karte').style.display='none'" />
        <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
      </div>
      <figcaption class="vollseite-karte__titel">Seite 1 \u00b7 Profil, Prototypen & K\u00f6rpersignatur</figcaption>
    </figure>
  `);
  if (entry.signature) blocks.push(`<div class="room-field"><strong>${entry.signature.title}</strong><p>${entry.signature.text}</p></div>`);
  const bs = entry.bodySignature;
  const bsl = sp.bodySignature || {};
  if (bs) {
    if (bs.basicTension) blocks.push(`<div class="room-field"><strong>${bsl.basicTension || "Grundspannung"}</strong><p>${bs.basicTension}</p></div>`);
    const lists = [
      ["gazeQuality","microTension","breathingRhythm","movementInitiation","contactStyle"],
      [bsl.gazeQuality, bsl.microTension, bsl.breathingRhythm, bsl.movementInitiation, bsl.contactStyle],
    ];
    lists[0].forEach((key, i) => {
      if (bs[key] && bs[key].length) blocks.push(`<div class="room-field"><strong>${lists[1][i] || key}</strong><ul>${bs[key].map((x) => `<li>${x}</li>`).join("")}</ul></div>`);
    });
    if (bs.twoPoints) {
      const tp = bs.twoPoints;
      const pts = [tp.point1, tp.point2].filter(Boolean);
      if (pts.length) {
        const ptHtml = pts.map((p) => `<li><strong>${p.name}</strong> (${p.location})${p.need && p.need.length ? `<ul>${p.need.map((n) => `<li>${n}</li>`).join("")}</ul>` : ""}</li>`).join("");
        blocks.push(`<div class="room-field"><strong>${bsl.twoPoints || "2-Punkte-Integration"}</strong><ul>${ptHtml}</ul></div>`);
      }
      if (tp.microInstructions && tp.microInstructions.length) blocks.push(`<div class="room-field"><strong>${bsl.microInstructions || "Mikro-Anleitung"}</strong><ul>${tp.microInstructions.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
    }
  }
  return blocks.join("");
}

function koerperarbeitBlock(k) {
  if (!k || !k.seiten) return "";
  return k.seiten.map(s => `
    <figure class="vollseite-karte">
      <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
      <div class="card-pg-wrap">
        <img src="${s.src}" alt="${s.alt}" class="vollseite-karte__img" loading="lazy" />
        <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
      </div>
      <figcaption class="vollseite-karte__titel">${s.titel}</figcaption>
    </figure>
  `).join("");
}

function pgFigure(pg) {
  return `
    <figure class="vollseite-karte">
      <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
      <div class="card-pg-wrap">
        <img src="${cdnImg(pg.src)}" alt="${pg.alt}" class="vollseite-karte__img" loading="lazy"
          onerror="this.closest('.vollseite-karte').style.display='none'" />
        <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
      </div>
      <figcaption class="vollseite-karte__titel">${pg.title || pg.titel || ""}</figcaption>
    </figure>
  `;
}

function regulierenInner(entry, sp) {
  const blocks = [];
  const vp = entry.visualPages || [];

  // Seite 2 \u2013 2-Punkte-Integration: Schaubild, dann Praxistext
  const pg2 = vp.find(pg => pg.src.includes("page-2"));
  if (pg2) {
    blocks.push(pgFigure(pg2));
    if (entry.practice) blocks.push(`<div class="room-field"><strong>${sp.practice || "2-Punkte-Integration"}</strong><p>${entry.practice}</p></div>`);
  }

  // Seite 3 \u2013 K\u00f6rperarbeit & Akupressur: Schaubild, dann Wendepunkt / Nervensystem / Spannungsfelder
  const pg3 = vp.find(pg => pg.src.includes("page-3"));
  if (pg3) {
    blocks.push(pgFigure(pg3));
    if (entry.turningPoint && entry.turningPoint.length) blocks.push(`<div class="room-field"><strong>${sp.turningPoint || "Wendepunkt"}</strong><ul>${entry.turningPoint.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
    if (entry.nervousSystemRegulation && entry.nervousSystemRegulation.length) blocks.push(`<div class="room-field"><strong>${sp.nervousSystemRegulation || "Nervensystem-Regulation"}</strong><ul>${entry.nervousSystemRegulation.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
    if (entry.tensionFields && entry.tensionFields.length) blocks.push(`<div class="room-field"><strong>${sp.tensionFields || "Spannungsfelder"}</strong><ul>${entry.tensionFields.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  }
  blocks.push(`
    <div class="room-field" style="margin-top:1.4rem;padding:1.1rem 1.2rem;background:var(--paper);border-radius:12px;border-left:3px solid var(--gold);text-align:left;">
      <p style="margin:0 0 0.5rem;font-size:0.88rem;color:var(--ink-muted);line-height:1.6;">Wenn Sie die Muster dieses Subtyps erkannt haben \u2014 lassen Sie das Gelesene jetzt zur Ruhe kommen. Nicht weiter analysieren. Einfach sein.</p>
      <button class="ghost-link" data-route="stille" style="font-size:0.95rem;">\u23f1 9 Minuten Stille sitzen \u2192</button>
    </div>
  `);
  return blocks.join("");
}

function verkoerpernInner(entry, sp) {
  const blocks = [];

  // Seite 5 \u2013 Integrationspotenzial: Schaubild, dann Beschreibungsfelder
  const pg5 = (entry.visualPages || []).find(pg => pg.src.includes("page-5"));
  if (pg5) {
    blocks.push(pgFigure(pg5));
    if (entry.integrativePotential) blocks.push(`<div class="room-field"><strong>${sp.integrativePotential || "Integrationspotenzial"}</strong><p>${entry.integrativePotential}</p></div>`);
    if (entry.archetypalEssence) blocks.push(`<div class="room-field"><strong>${sp.archetypalEssence || "Archetypische Essenz"}</strong><p>${entry.archetypalEssence}</p></div>`);
    if (entry.essence && entry.essence.qualities) blocks.push(`<div class="room-field"><strong>${sp.essenceQualities || "Verk\u00f6rperte Qualit\u00e4ten"}</strong><ul>${entry.essence.qualities.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
    if (entry.integratedState && entry.integratedState.length) blocks.push(`<div class="room-field"><strong>${sp.integratedState || "Integrierter Zustand"}</strong><ul>${entry.integratedState.map((i) => `<li>${i}</li>`).join("")}</ul></div>`);
  }

  // Musik & Klang
  const hasMedia = entry.mediaGroups || entry.mediaResources;
  if (hasMedia && !hasHeilwissen()) { blocks.push(heilwissenLock("Musik & Klang")); return blocks.join(""); }
  if (entry.mediaGroups) { blocks.push(mediaGroupSection(entry.mediaGroups)); return blocks.join(""); }
  if (entry.mediaResources) { blocks.push(mediaResourceSection(entry.mediaResources)); return blocks.join(""); }
  if (!blocks.length) return `<p class="room-pending">${sp.mediaPending}</p>`;
  return blocks.join("");
}

function vertiefungSection(refs, sp) {
  if (!refs || !refs.length) return "";
  const byId = Object.fromEntries(werkRegister.map((b) => [b.id, b]));
  return `
    <p class="deepen-intro">${sp.deepenIntro}</p>
    <ul class="deepen-list">
      ${refs
        .map((ref) => {
          const book = byId[ref.werkId];
          if (!book) return "";
          const link = book.status === "link_pruefen"
            ? `<span class="deepen-link deepen-link--pending">${sp.linkPending}</span>`
            : `<a class="deepen-link" href="${book.link}" target="_blank" rel="noopener">${sp.openBook} \u2192</a>`;
          return `
            <li class="deepen-item">
              <strong>${book.title}</strong>
              <p>${ref.hinweis}</p>
              ${link}
            </li>`;
        })
        .join("")}
    </ul>
  `;
}

const TYPE_COLORS = {
  1: "#5f5f5f", 2: "#7a2fa8", 3: "#1fa688", 4: "#3cbf1f",
  5: "#124fcc", 6: "#8a5222", 7: "#d4a800", 8: "#a00802", 9: "#cc6e00"
};
function typeColor(num) { return TYPE_COLORS[parseInt(num)] || "var(--copper)"; }
function typeColorFromCode(code) { return typeColor(code ? code.slice(-1) : 0); }

// Feinjustierung der Tierbild-Ausrichtung (Zoom-Crop-Kreise, z. B. Lebensmusterkompass,
// Tritypen-Seite, Kartenansichten): Standard-Linksversatz ist -8%. Einzelne Subtypen,
// deren Tier auf dem Quellbild anders positioniert ist, können hier gezielt überschrieben
// werden, ohne die anderen zu beeinflussen.
const TIER_AVATAR_LEFT_OVERRIDES = {
  SE1: -14, SX1: -11, SO2: -14, SX2: -12, SE3: -6, SE4: -3, SX4: -7, SO4: -20, SE5: -11,
  SO5: -11, SE6: -12, SX6: -12, SE7: -11, SO7: -11, SX7: -6, SE8: -15, SO8: -11, SE9: -15, SO9: -14, SX9: -13,
};
function tierAvatarLeft(code) {
  const c = (code || "").toUpperCase();
  const v = TIER_AVATAR_LEFT_OVERRIDES[c];
  return (typeof v === "number" ? v : -8) + "%";
}
// Vertikale Feinjustierung (Standard -20%) – bislang nur für einzelne Ausnahmen nötig.
const TIER_AVATAR_TOP_OVERRIDES = {
  SX6: -26, SE3: -26,
};
function tierAvatarTop(code) {
  const c = (code || "").toUpperCase();
  const v = TIER_AVATAR_TOP_OVERRIDES[c];
  return (typeof v === "number" ? v : -20) + "%";
}

const GRUNDTYPEN = [
  { num: 1, name: "Der Perfektionist",   label: "Der Ordnungsorientierte",      leidenschaft: "Zorn",    tier: "Adler",    thema: "Richtig & Falsch \u00b7 Integrit\u00e4t & Ordnung",     codes: ["se1","so1","sx1"] },
  { num: 2, name: "Der Helfer",          label: "Der Beziehungsorientierte",    leidenschaft: "Stolz",   tier: "Katze",    thema: "Liebe & Anerkennung \u00b7 Geben & Genommen-Werden", codes: ["se2","so2","sx2"] },
  { num: 3, name: "Der Leistungstr\u00e4ger", label: "Der Erfolgsorientierte",       leidenschaft: "Eitelkeit / T\u00e4uschung",    tier: "Pfau",     thema: "Erfolg & Wert \u00b7 Leistung & Anerkennung",       codes: ["se3","so3","sx3"] },
  { num: 4, name: "Der Individualist",   label: "Der Identit\u00e4tsorientierte",    leidenschaft: "Neid",    tier: "Schwan",    thema: "Echtheit & Tiefe \u00b7 Verlust & Sehnsucht",        codes: ["se4","so4","sx4"] },
  { num: 5, name: "Der Beobachter",      label: "Der Wissensorientierte",       leidenschaft: "Geiz",    tier: "Eule",     thema: "Wissen & Verstehen \u00b7 R\u00fcckzug & Ressourcen",     codes: ["se5","so5","sx5"] },
  { num: 6, name: "Der Loyale",          label: "Der Sicherheitsorientierte",   leidenschaft: "Angst",   tier: "Hase",     thema: "Sicherheit & Vertrauen \u00b7 Gefahr & Loyalit\u00e4t",   codes: ["se6","so6","sx6"] },
  { num: 7, name: "Der Enthusiast",      label: "Der M\u00f6glichkeitsorientierte",  leidenschaft: "Ma\u00dflosigkeit", tier: "Affe", thema: "Freude & F\u00fclle \u00b7 Optionen & Vermeidung",      codes: ["se7","so7","sx7"] },
  { num: 8, name: "Der Herausforderer",  label: "Der Machtorientierte",         leidenschaft: "Wollust", tier: "L\u00f6we",     thema: "St\u00e4rke & Kontrolle \u00b7 Gerechtigkeit & Macht",    codes: ["se8","so8","sx8"] },
  { num: 9, name: "Der Friedensstifter", label: "Der Harmoniebed\u00fcrftige",       leidenschaft: "Tr\u00e4gheit",tier: "Elefant",  thema: "Harmonie & Frieden \u00b7 Verschmelzung & Schlaf",   codes: ["se9","so9","sx9"] },
];

function typesPage() {
  const kartenHtml = GRUNDTYPEN.map(t => {
    const c = typeColor(t.num);
    return `
    <button class="typ-karte" data-route="type/${t.num}" style="border-left-color:${c}">
      <span class="typ-karte__num" style="background:${c}">${t.num}</span>
      <div class="typ-karte__body">
        <strong class="typ-karte__name" style="color:${c}">${t.name}</strong>
        <span class="typ-karte__label" style="color:${c}">${t.label}</span>
        <span class="typ-karte__thema">${t.thema}</span>
      </div>
      <span class="typ-karte__arrow" style="color:${c}">\u2192</span>
    </button>`;
  }).join("");
  return shell(`
    ${pageHeader("knowledge")}
    <section class="narrow">
      <p class="eyebrow">Enneagramm-Heilungskompass</p>
      <h1>Die 9 Grundtypen</h1>
      <p class="lead-small">W\u00e4hlen Sie Ihren Typ, um die drei Subtypen und alle Inhalte zu erkunden.</p>
    </section>
    <section class="typen-liste">${kartenHtml}</section>
  `);
}

function typePage(num) {
  const t = GRUNDTYPEN.find(x => x.num === parseInt(num));
  if (!t) return typesPage();
  const c = typeColor(t.num);
  const subtypenHtml = t.codes.map(code => {
    const p = subtypeProfiles[code];
    if (!p) return "";
    const instinktLabel = { se: "Selbsterhaltung", so: "Sozial", sx: "Sexuell / Partnerschaft" }[code.slice(0,2)] || "";
    return `
      <button class="subtyp-karte" data-route="subtype/${code}" style="border-left-color:${c}">
        <div class="subtyp-karte__icon" style="color:${c}">${p.emoji || p.code}</div>
        <div class="subtyp-karte__body">
          <strong style="color:${c}">${p.title}</strong>
          <span>${p.code} \u00b7 ${instinktLabel}</span>
          <em>${p.focus}</em>
        </div>
        <span class="subtyp-karte__arrow" style="color:${c}">\u2192</span>
      </button>
    `;
  }).join("");
  return shell(`
    ${pageHeader("knowledge")}
    <section class="narrow">
      <button class="ghost-link" data-route="knowledge">\u2190 Alle Typen</button>
      <p class="eyebrow" style="color:${c}">Typ ${t.num} \u00b7 ${t.label}</p>
      <h1 style="color:${c}">${t.name}</h1>
      <p class="lead-small">${t.thema}</p>
      <div class="typ-meta">
        <span class="typ-meta__chip" style="border-color:${c};color:${c}">Leidenschaft: <strong>${t.leidenschaft}</strong></span>
        <span class="typ-meta__chip" style="border-color:${c};color:${c}">Tier: <strong>${t.tier}</strong></span>
      </div>
      ${impulseBlock(TYP_IMPULSE[t.num], c)}
    </section>
    <section class="subtypen-liste">${subtypenHtml}</section>
  `);
}

function knowledgePage() {
  const block = knowledgePrototype.typeBlock;
  const copy = text.routes.knowledge;
  return shell(`
    ${pageHeader("knowledge")}
    <section class="knowledge-hero">
      <div>
        <p class="eyebrow">${copy.eyebrow}</p>
        <h1>${copy.headline}</h1>
        <p class="lead-small">${knowledgePrototype.source}</p>
      </div>
      <aside>
        <span>${block.status}</span>
        <strong>${block.title}</strong>
        <p>${block.note}</p>
      </aside>
    </section>
    <section class="knowledge-grid">
      ${knowledgePrototype.subtypes.map(knowledgeCard).join("")}
    </section>
  `);
}

function knowledgeCard(item) {
  const labels = text.knowledgeCard;
  return `
    <article class="knowledge-card ${item.visualPages ? "knowledge-card--expanded" : ""}">
      <div class="knowledge-card__top">
        <span>${item.code}</span>
        <em class="${item.status === "needs_review" ? "needs-review" : ""}">${statusLabel(item.status)}</em>
      </div>
      <h2>${item.title}</h2>
      <p class="animal">${labels.animalPrefix} ${item.animal}</p>
      <p class="source-line">${item.pages}</p>
      ${subtypeDetails[item.code.toLowerCase()] ? `<button class="card-open" data-route="subtype/${item.code.toLowerCase()}">${text.subtypePage.meinKompassTitle} \u00f6ffnen \u2192</button>` : ""}
      ${item.sourceCoverage ? sourceCoverageSection(item.sourceCoverage) : ""}
      ${item.contentModules ? contentModuleSection(item.contentModules) : ""}
      ${item.remedyCards ? remedyCardSection(item.remedyCards) : ""}
      <div class="knowledge-section organism">
        <strong>${labels.organismQuestion}</strong>
        <p>${item.organismQuestion}</p>
      </div>
      <div class="knowledge-section subtype-question">
        <strong>${labels.subtypeQuestion}</strong>
        <p>${item.subtypeQuestion}</p>
      </div>
      <div class="knowledge-section">
        <strong>${labels.coreSentence}</strong>
        <p>${item.coreSentence}</p>
      </div>
      <div class="knowledge-section">
        <strong>${labels.lifeTheme}</strong>
        <ul>${item.lifeTheme.map((entry) => `<li>${entry}</li>`).join("")}</ul>
      </div>
      <div class="knowledge-section">
        <strong>${labels.practice}</strong>
        <p>${item.practice}</p>
      </div>
      ${item.signature ? `
        <div class="knowledge-section">
          <strong>${item.signature.title}</strong>
          <p>${item.signature.text}</p>
        </div>
      ` : ""}
      ${item.essence ? `
        <div class="knowledge-section essence-box">
          <strong>${item.essence.title}</strong>
          <p>${item.essence.sentence}</p>
          <ul>${item.essence.qualities.map((entry) => `<li>${entry}</li>`).join("")}</ul>
        </div>
      ` : ""}
      ${item.woundBehindPassion ? woundBehindPassionSection(item.woundBehindPassion) : ""}
      ${(item.heilmittel || item.remedies)
          ? hasHeilwissen()
            ? (item.heilmittel ? heilmittelSection(item.heilmittel, oelForType(item.code), item.code) : `
        <div class="knowledge-section">
          <strong>${labels.remedies}</strong>
          <p>${item.remedies.join(" \u00b7 ")}</p>
        </div>
      `)
            : heilwissenLock()
          : ""}
      ${item.visualPages ? visualPageSection(item.visualPages) : ""}
      ${(item.mediaGroups || item.mediaResources)
          ? hasHeilwissen()
            ? (item.mediaGroups ? mediaGroupSection(item.mediaGroups) : mediaResourceSection(item.mediaResources))
            : heilwissenLock("Musik & Klang")
          : ""}
      <div class="review-box">
        <strong>${labels.review}</strong>
        ${item.needsReview.length ? `<ul>${item.needsReview.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : `<p>${labels.noRequiredReviews}</p>`}
      </div>
    </article>
	  `;
}

const MEDITATIONS_SITZHILFEN = [
  { name: "Meditationsmatte", subtitle: "Zabuton", eignung: "Die Basis f\u00fcr alle: Sie wird flach auf den Boden gelegt und d\u00e4mpft Knie und Fu\u00dfgelenke \u2013 egal ob zus\u00e4tzlich ein Kissen oder eine Bank darauf steht. Besonders geeignet f\u00fcr Einsteiger und f\u00fcr alle, die auf hartem Boden (Parkett, Fliesen) sitzen." },
  { name: "Meditationskissen", subtitle: "Zafu", eignung: "Am besten f\u00fcr alle, die im Schneider- oder Lotussitz sitzen m\u00f6chten: Es hebt die H\u00fcfte \u00fcber die Knie an und erm\u00f6glicht einen aufrechten, entspannten R\u00fccken. Gut geeignet, wenn die H\u00fcften bereits einigerma\u00dfen beweglich sind." },
  { name: "Klangschale", subtitle: "Peter Hess Therapie-Klangschale", eignung: "Am besten f\u00fcr alle, die ihre Stille-Praxis durch Klang vertiefen m\u00f6chten: Der Ton einer echten Therapie-Klangschale wirkt beruhigend auf das Nervensystem und markiert Anfang und Ende der \u00dcbung. Besonders geeignet f\u00fcr alle, die mit K\u00f6rperarbeit, Klangmassage oder feinstofflicher Vertiefung arbeiten." },
  { name: "Meditationsbank", subtitle: "Seiza", eignung: "Am besten f\u00fcr alle, denen der Schneidersitz unangenehm ist oder die Knie-, H\u00fcft- oder R\u00fcckenprobleme haben: Im Fersensitz auf der Bank werden die Knie entlastet und der R\u00fccken bleibt m\u00fchelos aufrecht \u2013 auch f\u00fcr unge\u00fcbte Sitzende bequem." },
];

const CARD_AFFILIATE_CATEGORY = {
  "Edelstein": "edelstein",
  "Bachbl\u00fcte": "bachbluete",
  "Mineralstoff": "schuessler",
  "Wundenmittel": "homoeopathie",
  "Tee": "tee",
};

const AFFILIATE_LINKS = {
  edelstein: {
    "Rosenquarz": "https://link.amazon/B00SUkNTI",
    "Amethyst": "https://www.amazon.de/Lebensquelle-Plus-Amethyst-Edelstein-Anh%C3%A4nger/dp/B06XK8T2J3?linkCode=ll2&tag=enneagrammkom-21&linkId=e943ceecdcd6918d8f80446ea49668ad&language=de_DE&ref_=as_li_ss_tl",
    "Tigerauge": "https://www.amazon.de/Lebensquelle-Plus-Tigerauge-Edelstein-Anh%C3%A4nger/dp/B06XGDB3GQ?linkCode=ll2&tag=enneagrammkom-21&linkId=64eacd8a6e2eafd6fd9e3080337ade45&language=de_DE&ref_=as_li_ss_tl",
    "Rhodonit": "https://www.amazon.de/Lebensquelle-Plus-Rhodonit-Edelstein-Anh%C3%A4nger/dp/B06XJ847PJ?linkCode=ll2&tag=enneagrammkom-21&linkId=b702cc213235dd6b07d9154f25ffa807&language=de_DE&ref_=as_li_ss_tl",
    "Amazonit": "https://www.amazon.de/Lebensquelle-Plus-Amazonit-Edelstein-Anh%C3%A4nger/dp/B06XPYZX9L?linkCode=ll2&tag=enneagrammkom-21&linkId=c50a51af59c62f2e9526bae6eb4db93a&language=de_DE&ref_=as_li_ss_tl",
    "H\u00e4matit": "https://www.amazon.de/Lebensquelle-Plus-H%C3%A4matit-Edelstein-Anh%C3%A4nger/dp/B0BMVSJ53N?linkCode=ll2&tag=enneagrammkom-21&linkId=64d7df7e4be338fbd363e9bef0d877a8&language=de_DE&ref_=as_li_ss_tl",
    "Rauchquarz": "https://www.amazon.de/Lebensquelle-Plus-Rauchquarz-Edelstein-Anh%C3%A4nger/dp/B0BZ119GZN?linkCode=ll2&tag=enneagrammkom-21&linkId=f28e45161db0c7faa59781d0ff7baa46&language=de_DE&ref_=as_li_ss_tl",
    "Fluorit": "https://www.amazon.de/Lebensquelle-Plus-Edelstein-Anh%C3%A4nger-Regenbogenfluorit/dp/B01N26C7JA?linkCode=ll2&tag=enneagrammkom-21&linkId=f042b0f895c6ac707bd3f2c152aa6761&language=de_DE&ref_=as_li_ss_tl",
    "Karneol": "https://www.amazon.de/Lebensquelle-Plus-Karneol-Edelstein-Anh%C3%A4nger/dp/B01N5WJ5EF?linkCode=ll2&tag=enneagrammkom-21&linkId=396b104243136d95b7ea068fa5c372f0&language=de_DE&ref_=as_li_ss_tl",
  },
  oel: {
    "Mandarine": "https://www.amazon.de/Heldengr%C3%BCn%C2%AE-Mandarinen%C3%B6l-NATURREIN-Schonend-kaltgepresst/dp/B0GV19CJPX?linkCode=ll2&tag=enneagrammkom-21&linkId=cd48093e3451af34d4b29b932ea8df81&language=de_DE&ref_=as_li_ss_tl",
    "Zirbelkiefer": "https://www.amazon.de/Emma-Gr%C3%BCn%C2%AE-Zirben%C3%B6l-100-NATURREIN/dp/B0F6DB7XS9?linkCode=ll2&tag=enneagrammkom-21&linkId=b4ca6223fdd832160f74fd0abbcaacf1&language=de_DE&ref_=as_li_ss_tl",
    "Orange s\u00fc\u00df": "https://www.amazon.de/Heldengr%C3%BCn%C2%AE-Orangen%C3%B6l-NATURREIN-Kaltgepresst-Orangen/dp/B0CBFVCYL8?linkCode=ll2&tag=enneagrammkom-21&linkId=1d01da69aeaea7991db4d5a906a416d1&language=de_DE&ref_=as_li_ss_tl",
    "Zedernholz": "https://www.amazon.de/Heldengr%C3%BCn%C2%A9-BIO-Zedernholz%C3%B6l-100-NATURREIN/dp/B0D8JDR1NG?linkCode=ll2&tag=enneagrammkom-21&linkId=77467108b162659c8d42aed8a63f6c70&language=de_DE&ref_=as_li_ss_tl",
    "Vetiver": "https://www.amazon.de/dp/B07CYYV9BJ?linkCode=ll2&tag=enneagrammkom-21&linkId=1897d653a9bd3f7370f6cf38595574f9&ref_=as_li_ss_tl",
    "Lavendel fein": "https://www.amazon.de/Heldengr%C3%BCn%C2%AE-BIO-Lavendel%C3%B6l-100-NATURREIN/dp/B09DGFG8KC?linkCode=ll2&tag=enneagrammkom-21&linkId=e4c1e08ba7e4f4e9678c235df635b936&language=de_DE&ref_=as_li_ss_tl",
    "Grapefruit": "https://www.amazon.de/Heldengr%C3%BCn%C2%AE-Grapefruit-NATURREIN-Schonend-kaltgepresst/dp/B0GTZG8NXW?linkCode=ll2&tag=enneagrammkom-21&linkId=ee37b469b3e4108b6941e43fe88d5d41&language=de_DE&ref_=as_li_ss_tl",
    "Palmarosa": "https://www.amazon.de/dp/B09BVBW9QK?linkCode=ll2&tag=enneagrammkom-21&linkId=090067bf34799a5035d895e586b2d93d&ref_=as_li_ss_tl",
    "Majoran": "https://www.amazon.de/Mumianhua-Majoran%C3%B6l%EF%BC%8C100-Majoran-%C3%84therisches-Diffusoren/dp/B0DSZSX2CW?linkCode=ll2&tag=enneagrammkom-21&linkId=a0ea5ad05dd2bc4458f2dfba1c88a0cf&language=de_DE&ref_=as_li_ss_tl",
  },
  bachbluete: {
    "Rock Water": "https://www.amazon.de/BACHBLUETEN-Rock-Water-Tropfen-20/dp/B001FD67DA?linkCode=ll2&tag=enneagrammkom-21&linkId=f9135424e3f3c69dce889ae034b796ed&language=de_DE&ref_=as_li_ss_tl",
    "Chicory": "https://www.amazon.de/BACHBLUETEN-Chicory-Tropfen-20-ml/dp/B001FD474G?linkCode=ll2&tag=enneagrammkom-21&linkId=a9593e39880233078072c5d312b03ea5&language=de_DE&ref_=as_li_ss_tl",
    "Vervain": "https://www.amazon.de/NELSONS-GMBH-Bachbl%C3%BCte-Vervain-20/dp/B001O1KMYS?linkCode=ll2&tag=enneagrammkom-21&linkId=f561648f0a77fdc66489333b199887b9&language=de_DE&ref_=as_li_ss_tl",
    "Sweet Chestnut": "https://www.amazon.de/BACHBLUETEN-Sweet-Chestnut-Tropfen-20/dp/B001FD2J4G?linkCode=ll2&tag=enneagrammkom-21&linkId=9e03c10e03c7beadd4c2ab81f0168d7c&language=de_DE&ref_=as_li_ss_tl",
    "Water Violet": "https://www.amazon.de/BACHBLUETEN-Water-Violet-Tropfen-20/dp/B001FD0KSS?linkCode=ll2&tag=enneagrammkom-21&linkId=d814be82fdcc3f32868bd2d21178dfc0&language=de_DE&ref_=as_li_ss_tl",
    "Aspen": "https://www.amazon.de/Bachbl%C3%BCten-Aspen-Tropfen-20-ml/dp/B001FD46R4?linkCode=ll2&tag=enneagrammkom-21&linkId=75f02c45e704509cb2108182a828d1c7&language=de_DE&ref_=as_li_ss_tl",
    "Agrimony": "https://www.amazon.de/Bachbl%C3%BCten-Agrimony-Tropfen-20-ml/dp/B001FD45TI?linkCode=ll2&tag=enneagrammkom-21&linkId=6311d8a184fdde1a899515c616c31da0&language=de_DE&ref_=as_li_ss_tl",
    "Vine": "https://www.amazon.de/NELSONS-GMBH-Bachbl%C3%BCte-Vine-20/dp/B001O1KMZC?linkCode=ll2&tag=enneagrammkom-21&linkId=7fa0f49179a925d1fad9d001c9f7b57f&language=de_DE&ref_=as_li_ss_tl",
    "Wild Rose": "https://www.amazon.de/BACHBLUETEN-Wild-Rose-Tropfen-20/dp/B001FD493K?linkCode=ll2&tag=enneagrammkom-21&linkId=e1f17723c29c208c7a2cc7b103125d5a&language=de_DE&ref_=as_li_ss_tl",
  },
  schuessler: {
    "Kalium sulfuricum": "https://www.amazon.de/DHU-Sch%C3%BC%C3%9Fler-Salz-Kalium-sulfuricum-umweltfreundlich/dp/B00DIVY1HQ?linkCode=ll2&tag=enneagrammkom-21&linkId=dde4c6ae3a80be23f5f99b9d8533bb1a&language=de_DE&ref_=as_li_ss_tl",
    "Kalium chloratum": "https://www.amazon.de/DHU-Sch%C3%BC%C3%9Fler-Salz-Kalium-chloratum-umweltfreundlich/dp/B0DN6FLGMZ?linkCode=ll2&tag=enneagrammkom-21&linkId=450e54cf0b5115b5ed4749acbfe42aa9&language=de_DE&ref_=as_li_ss_tl",
    "Natrium chloratum": "https://www.amazon.de/DHU-Sch%C3%BC%C3%9Fler-Salz-Natrium-chloratum-Fl%C3%BCssigkeitshaushalts/dp/B0DN6H8R62?linkCode=ll2&tag=enneagrammkom-21&linkId=429aeb8a8da288125cb08515f65bf96e&language=de_DE&ref_=as_li_ss_tl",
    "Ferrum phosphoricum": "https://www.amazon.de/Sch%C3%BC%C3%9Fler-Ferrum-phosphoricum-Tabletten-200/dp/B00E67E4DM?linkCode=ll2&tag=enneagrammkom-21&linkId=177e73fb16e96a2a761b46ff4846e031&language=de_DE&ref_=as_li_ss_tl",
    "Kalium phosphoricum": "https://www.amazon.de/DHU-Sch%C3%BC%C3%9Fler-Salz-Kalium-phosphoricum-umweltfreundlich/dp/B00DIVXVWM?linkCode=ll2&tag=enneagrammkom-21&linkId=efec432d40fe0bc2d6da8aa8844d3678&language=de_DE&ref_=as_li_ss_tl",
    "Silicea": "https://www.amazon.de/DHU-Sch%C3%BC%C3%9Fler-Salz-Nr-Silicea-umweltfreundlich/dp/B00E67E1F8?linkCode=ll2&tag=enneagrammkom-21&linkId=9f7edea18a8959c62f65f052334bf71d&language=de_DE&ref_=as_li_ss_tl",
    "Magnesium phosphoricum": "https://www.amazon.de/Biochemie-Dhu-Magnesium-phosphoricum-Table/dp/B00EMFXNSU?linkCode=ll2&tag=enneagrammkom-21&linkId=e494c9f4125349396bd8d86dd69156ba&language=de_DE&ref_=as_li_ss_tl",
    "Natrium phosphoricum": "https://www.amazon.de/DHU-Sch%C3%BC%C3%9Fler-Salz-Natrium-phosphoricum-umweltfreundlich/dp/B0DN6JPGCC?linkCode=ll2&tag=enneagrammkom-21&linkId=e51ec073b1faf3e1557be34a7b88f042&language=de_DE&ref_=as_li_ss_tl",
    "Calcium fluoratum": "https://www.amazon.de/Sch%C3%BC%C3%9Fler-Calcium-fluoratum-D12-Tabletten/dp/B00E67FOWM?linkCode=ll2&tag=enneagrammkom-21&linkId=29f8ae07c6a4a29716102f9f37027b31&language=de_DE&ref_=as_li_ss_tl",
    "Natrium sulfuricum": "https://www.amazon.de/Sch%C3%BC%C3%9Fler-Natrium-sulfuricum-Tabletten-200/dp/B00E67AL0M?linkCode=ll2&tag=enneagrammkom-21&linkId=0abe6ff6cbcd43b97a673601a19ec9cd&language=de_DE&ref_=as_li_ss_tl",
  },
  homoeopathie: {
    "Platinum metallicum": "https://www.amazon.de/Platinum-Met-12-Globuli-10/dp/B00EM7IJ6E?linkCode=ll2&tag=enneagrammkom-21&linkId=4d2a3d2180dcff2a87773fd3f1d01c72&language=de_DE&ref_=as_li_ss_tl",
    "Arsenicum album": "https://www.amazon.de/DHU-ARSENICUM-ALBUM-Globuli-10/dp/B00EM5BUZS?linkCode=ll2&tag=enneagrammkom-21&linkId=c32c479b5c2e634d1fd0d9262c377866&language=de_DE&ref_=as_li_ss_tl",
    "Hyoscyamus niger": "https://www.amazon.de/DHU-HYOSCYAMUS-Globuli-10/dp/B00DIVR5KQ?linkCode=ll2&tag=enneagrammkom-21&linkId=20aab2badc7cac043c3b3b8f8cf9f2db&language=de_DE&ref_=as_li_ss_tl",
    "Pulsatilla pratensis": "https://www.amazon.de/DHU-Arzneimittel-GmbH-Co-KG-Globuli/dp/B00ELNX9PA?linkCode=ll2&tag=enneagrammkom-21&linkId=c97bc4dc0ef0de7249ad3b5fa628d6f7&language=de_DE&ref_=as_li_ss_tl",
    "Tarentula hispanica": "https://www.amazon.de/DHU-TARANTULA-30-Globuli-10/dp/B00E59ZD54?linkCode=ll2&tag=enneagrammkom-21&linkId=9ada30a9e98b6e75c3a6bf31989218e3&language=de_DE&ref_=as_li_ss_tl",
    "Lycopodium clavatum": "https://www.amazon.de/DHU-Lycopodium-C6-Streuk%C3%BCgelchen-Globuli/dp/B00E5AL686?linkCode=ll2&tag=enneagrammkom-21&linkId=d49ea212b1db5c3306a1458f09e66b6a&language=de_DE&ref_=as_li_ss_tl",
    "Ignatia amara": "https://www.amazon.de/DHU-IGNATIA-Globuli-10/dp/B00E5ABTC4?linkCode=ll2&tag=enneagrammkom-21&linkId=ef97f86439915c93aeb13fa876c22d9b&language=de_DE&ref_=as_li_ss_tl",
    "Stramonium": "https://www.amazon.de/STRAMONIUM-30-Globuli-10/dp/B00ELNX2F2?linkCode=ll2&tag=enneagrammkom-21&linkId=b2bc3a601a40508d98b7f2d12f07d3cc&language=de_DE&ref_=as_li_ss_tl",
    "Silicea": "https://www.amazon.de/DHU-Arzneimittel-GmbH-Co-KG-Tabletten/dp/B00ELJU8X0?linkCode=ll2&tag=enneagrammkom-21&linkId=b0e6120913e0417063d5ce77d8226a59&language=de_DE&ref_=as_li_ss_tl",
    "Opium": "https://www.amazon.de/DHU-Opium-C30-Streuk%C3%BCgelchen-Globuli/dp/B00E5AQ6WM?linkCode=ll2&tag=enneagrammkom-21&linkId=2f67403094f00b5f4e747e5e7f2c88e9&language=de_DE&ref_=as_li_ss_tl",
    "Belladonna": "https://www.amazon.de/DHU-BELLADONNA-30-Globuli-10/dp/B00E4UAG6A?linkCode=ll2&tag=enneagrammkom-21&linkId=461784c1ca19c784a37d6a109cf77938&language=de_DE&ref_=as_li_ss_tl",
    "Calcium carbonicum": "https://www.amazon.de/Calcium-Carbonicum-30-Globuli-Hahnemanni/dp/B00E4ZKF4S?linkCode=ll2&tag=enneagrammkom-21&linkId=217ecd804966a851af4669558448542d&language=de_DE&ref_=as_li_ss_tl",
    "Veratrum album": "https://www.amazon.de/Veratrum-Album-12-Globuli-10/dp/B00ELNZ2VE?linkCode=ll2&tag=enneagrammkom-21&linkId=658e24520fe18bc94653de6704281922&language=de_DE&ref_=as_li_ss_tl",
    "Staphysagria": "https://www.amazon.de/DHU-STAPHISAGRIA-12-Globuli-10/dp/B00E4ZVRXG?linkCode=ll2&tag=enneagrammkom-21&linkId=12e5cade08329e3ed68f53a74af5c3e3&language=de_DE&ref_=as_li_ss_tl",
  },
  sitzhilfe: {
    "Meditationsmatte": "https://www.amazon.de/Lotuscrafts-Meditationsmatte-Zabuton-Standard-Meditationskissen/dp/B00D8E739Q?linkCode=ll2&tag=enneagrammkom-21&linkId=5ed08fee6c47cc4289c1df05d6140301&ref_=as_li_ss_tl",
    "Meditationskissen": "https://www.amazon.de/Lotuscrafts-Yogakissen-Meditationskissen-Extra-Hoch/dp/B01N4DQ30X?linkCode=ll2&tag=enneagrammkom-21&linkId=11ea45ee43d03099e881252afcd938b7&language=de_DE&ref_=as_li_ss_tl",
    "Meditationsbank": "https://www.amazon.de/Bodhi-Meditationsbank-LHOTSE-Buche-ge%C3%B6lt/dp/B08V5FM48T?linkCode=ll2&tag=enneagrammkom-21&linkId=a46e46761384c0c7cdeb46f4d90b9f2c&ref_=as_li_ss_tl",
    "Klangschale": "https://www.amazon.de/KLANGSCHALE-Klangmassage-SET-BECKENSCHALE-Reibekl%C3%B6ppel-Therapie-Kl%C3%B6ppel/dp/B076F92JDF?linkCode=ll2&tag=enneagrammkom-21&linkId=4cc9bc3dc6a4b436b8c8d42aad61adc0&language=de_DE&ref_=as_li_ss_tl",
  },
  tee: {
    "Melissentee": "https://www.amazon.de/Melissentee-Melissenbl%C3%A4tter-geschnitten-vom-Achterhof/dp/B08522M91G?linkCode=ll2&tag=enneagrammkom-21&linkId=20a5a7924414af34e3e287f92aae9356&language=de_DE&ref_=as_li_ss_tl",
    "Rosenbl\u00fctentee": "https://www.amazon.de/Alpi-Nature-Rosenbl%C3%BCten-Rosenknospen-Tee-Rosenbl%C3%BCtentee-Rosentee/dp/B07WNJLKQJ?linkCode=ll2&tag=enneagrammkom-21&linkId=578fd31664949093041a6b57d81d2d00&language=de_DE&ref_=as_li_ss_tl",
    "Rosmarintee": "https://www.amazon.de/Bio-Rosmarin-geschnitten-Rosmarin-Tee-vom-Achterhof-Bio-Gew%C3%BCrze/dp/B071JK4XBK?linkCode=ll2&tag=enneagrammkom-21&linkId=b8a0dea0753415072943cf59f8a43622&language=de_DE&ref_=as_li_ss_tl",
    "Weidenr\u00f6schentee": "https://www.amazon.de/250-Weidenr%C3%B6schen-kleinbl%C3%BCtig-orig-vom-Achterhof/dp/B00MY9TLCI?linkCode=ll2&tag=enneagrammkom-21&linkId=7a1123732564035ca53489f9ada9633c&language=de_DE&ref_=as_li_ss_tl",
    "Haferkrauttee": "https://www.amazon.de/100g-Gr%C3%BCner-Hafer-Tee-geschnitten-Nat%C3%BCrlich/dp/B012COAT3E?linkCode=ll2&tag=enneagrammkom-21&linkId=d027a1f4a3025042715a1c9ec50ee103&language=de_DE&ref_=as_li_ss_tl",
    "Kamillenbl\u00fctentee": "https://www.amazon.de/Kamillentee-lose-Kamillenbl%C3%BCten-Tee-getrocknet-Kamille/dp/B0774LYCW9?linkCode=ll2&tag=enneagrammkom-21&linkId=e74ab6065356acf2b1f52101ee6b30a0&language=de_DE&ref_=as_li_ss_tl",
    "Pfefferminztee": "https://www.amazon.de/Pfefferminzbl%C3%A4tter-getrocknet-geschnitten-Pfefferminz-Tee-Kr%C3%A4utertee/dp/B00MNNW3N4?linkCode=ll2&tag=enneagrammkom-21&linkId=8974284e49f7a023323e476866b7678a&language=de_DE&ref_=as_li_ss_tl",
    "Ingwertee": "https://www.amazon.de/Ingwerwurzel-geschnitten-getrocknet-Kr%C3%A4utertee-vom-Achterhof/dp/B01C06ZSKS?linkCode=ll2&tag=enneagrammkom-21&linkId=14cec56b79963ac6f69be8c556fdc483&language=de_DE&ref_=as_li_ss_tl",
    "Fencheltee": "https://www.amazon.de/Fenchelsamen-Fencheltee-nat%C3%BCrlich-vom-Achterhof/dp/B075HXXPJP?linkCode=ll2&tag=enneagrammkom-21&linkId=1eea7f36bcd5656d9b2c62382fbdaa79&language=de_DE&ref_=as_li_ss_tl",
  },
  astro: {
    "Rotlicht-Taschenlampe": "https://www.amazon.de/dp/B0F8W2559S?tag=enneagrammkom-21",
    "Drehbare Sternkarte": "https://www.amazon.de/dp/3440154513?tag=enneagrammkom-21",
    "Einsteiger-Fernglas": "https://www.amazon.de/dp/B00008Y0VN?tag=enneagrammkom-21",
    "Tisch-Teleskop": "https://www.amazon.de/dp/B00DV6SBRO?tag=enneagrammkom-21",
    "Sonnensystem-Modell": "https://www.amazon.de/dp/B0GRMFGPY9?tag=enneagrammkom-21",
  },
  deko: {
    "Leuchtglobus": "https://www.amazon.de/dp/B07PFCNVYR?tag=enneagrammkom-21",
    "Weltkarte": "https://www.amazon.de/dp/B00JR92Y8Q?tag=enneagrammkom-21",
  },
  fussmassage: {
    "Igelball": "https://www.amazon.de/M-S-Lemberg%C2%AE-Igelball-Massage-Set-H%C3%A4rtegrade/dp/B0FQ2MG1LT?linkCode=ll2&tag=enneagrammkom-21&linkId=1cb86d75d335bb430d366467813f6d0e&ref_=as_li_ss_tl",
    "Kork-Massageball": "https://www.amazon.de/Uttse-Kork-Yoga-Massageball-Umweltfreundliches/dp/B09JYGDGCL?linkCode=ll2&tag=enneagrammkom-21&linkId=135c76ddc6a0e523d9d4b5c2807eb0d2&ref_=as_li_ss_tl",
    "Holz-Massageroller": "https://www.amazon.de/Fu%C3%9Fmassageger%C3%A4t-Holz-Noppen-Fussmassageger%C3%A4t-Fersensporn/dp/B083BRD3JF?linkCode=ll2&tag=enneagrammkom-21&linkId=e85f8cfa0629db187fcc4e80a4c14e63&ref_=as_li_ss_tl",
  },
  fitnessmatte: {
    "Fitnessmatte": "https://www.amazon.de/gp/aw/d/B016GKP7W8?linkCode=ll2&tag=enneagrammkom-21&linkId=cb0bdebeea512156206cc17d31aba879&ref_=as_li_ss_tl",
  },
  vitruv: {
    "Poster": "https://www.amazon.de/Grupo-Erik-Vitruviano-Wandposter-Glanzpapier/dp/B0CP2NXVZ2?linkCode=ll2&tag=enneagrammkom-21&linkId=2ccfcccce149ff0a7f6761daa0de0a90&ref_=as_li_ss_tl",
    "Leinwandbild": "https://www.amazon.de/1art1-111564-Leonardo-Vinci-Vitruvianischer/dp/B0049JM114?linkCode=ll2&tag=enneagrammkom-21&linkId=5f4ca3c06c27080f60cb64afeced402d&ref_=as_li_ss_tl",
    "Buch Gemälde und Zeichnungen": "https://www.amazon.de/gp/aw/d/3836576260?linkCode=ll2&tag=enneagrammkom-21&linkId=c7b13ebc9dbc4540e271297a6d8c531e&ref_=as_li_ss_tl",
    "Buch Biographie": "https://www.amazon.de/Leonardo-Vinci-Biographie-Walter-Isaacson/dp/3549076436?linkCode=ll2&tag=enneagrammkom-21&linkId=618ea3981539e91b8c273a0b79d6cfa7&ref_=as_li_ss_tl",
    "Buch Erfindungen Pop-up": "https://www.amazon.de/Leonardo-Vinci-Erfindungen-Genies-Pop-up/dp/376074124X?linkCode=ll2&tag=enneagrammkom-21&linkId=74940e8c00666a1d9d966e41cc91dacb&ref_=as_li_ss_tl",
    "Buch 100 Erfindungen": "https://www.amazon.de/dp/B0DGSMR4XG?linkCode=ll2&tag=enneagrammkom-21&linkId=8a2d527d7f89e23287256c775f7a492f&ref_=as_li_ss_tl",
    "Buch Zehn Bücher über Architektur": "https://www.amazon.de/Zehn-B%C3%BCcher-%C3%BCber-Architektur-Vitruv/dp/3730608088?linkCode=ll2&tag=enneagrammkom-21&linkId=fdfed96780e21aa3f96c40c966a31a23&ref_=as_li_ss_tl",
  },
};

function affiliateBoxHtml(category, remedyName, label) {
  return `
    <a href="${AFFILIATE_LINKS[category][remedyName]}" target="_blank" rel="noopener sponsored" class="remedy-card__affiliate">
      <img src="assets/detlef-rathmer-empfehlung.jpg" alt="Detlef Rathmer" class="remedy-card__affiliate-photo" loading="lazy" />
      <span class="remedy-card__affiliate-text">
        <span class="remedy-card__affiliate-label">${label || "Meine Empfehlung bei Amazon ansehen"}</span>
        <span class="remedy-card__affiliate-note">Werbelink \u00b7 Amazon-Partnerprogramm</span>
      </span>
    </a>`;
}

function heilmittelSection(h, oel, code) {
  const w = text.knowledgeCard.heilmittel;
  const row = (label, value, category) => {
    const meaning = value && remedyGlossary[value] ? `<small class="remedy-row__meaning">${remedyGlossary[value]}</small>` : "";
    const affiliate = value && category && AFFILIATE_LINKS[category]?.[value] ? affiliateBoxHtml(category, value) : "";
    return `<li class="remedy-row"><span class="remedy-row__label">${label}</span><span class="remedy-row__value${value ? "" : " remedy-row__value--empty"}">${value || w.pending}${meaning}${affiliate}</span></li>`;
  };
  const passion = h.leidenschaft || {};
  const wound = h.wunde || {};
  const seite4 = code ? `${R2_CDN}assets/knowledge/type-${code.slice(-1)}/${code.toLowerCase()}/${code.toLowerCase()}-page-4.jpeg` : null;
  return `
    <div class="knowledge-section heilmittel-box" id="heilmittel-kompass">
      <strong>${w.title}</strong>
      ${seite4 ? `
      <figure class="vollseite-karte">
        <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
        <img src="${seite4}" alt="Heilmittel-Kompass \u00dcbersicht" class="vollseite-karte__img" loading="lazy"
          onerror="this.closest('.vollseite-karte').style.display='none'" />
        <figcaption class="vollseite-karte__titel">Seite 4 \u00b7 Heilmittel-Kompass</figcaption>
      </figure>` : ""}
      <div class="remedy-level">
        <span class="remedy-level__title remedy-level__title--passion">${w.leidenschaftTitle}</span>
        <ul class="remedy-list">
          ${row(w.homoeopathie, passion.homoeopathie, "homoeopathie")}
          ${row(w.schuessler, passion.schuessler, "schuessler")}
          ${row(w.bachbluete, passion.bachbluete, "bachbluete")}
          ${row(w.edelstein, passion.edelstein, "edelstein")}
          ${row(w.tee, passion.tee, "tee")}
        </ul>
        ${
          h.homoeopathieThema
            ? `<p class="remedy-theme"><strong>${passion.homoeopathie || w.homoeopathie}:</strong> ${h.homoeopathieThema} ${h.homoeopathieWirkung || ""}</p>`
            : ""
        }
      </div>
      <div class="remedy-level">
        <span class="remedy-level__title remedy-level__title--wound">${w.wundeTitle}</span>
        <ul class="remedy-list">
          ${row(w.homoeopathie, wound.homoeopathie, "homoeopathie")}
          ${row(w.schuessler, wound.schuessler, "schuessler")}
          ${row(w.bachbluete, wound.bachbluete, "bachbluete")}
        </ul>
        ${
          h.wundeThema
            ? `<p class="remedy-theme"><strong>${wound.homoeopathie || w.homoeopathie}:</strong> ${h.wundeThema} ${h.wundeWirkung || ""}</p>`
            : ""
        }
        ${
          oel
            ? `<div class="remedy-oil">
                 <div class="remedy-oil__image"><img src="${oel.image}" alt="${oel.name}" loading="lazy" /></div>
                 <div class="remedy-oil__body">
                   <span class="remedy-oil__label">${w.aetherischesOel}</span>
                   <strong>${oel.name}</strong>
                   <p>${oel.wirkung}</p>
                   ${AFFILIATE_LINKS.oel[oel.name] ? affiliateBoxHtml("oel", oel.name) : ""}
                 </div>
               </div>`
            : ""
        }
      </div>
      <p class="remedy-note">${w.note}</p>
      <p class="remedy-note remedy-note--individual">${w.individualNote}</p>
    </div>
  `;
}

function woundBehindPassionSection(wound) {
  const w = text.knowledgeCard.woundBehindPassion;
  const steps = [
    ["passion", w.passion],
    ["belief", w.belief],
    ["wound", w.wound],
    ["compensation", w.compensation],
    ["sufferingCycle", w.sufferingCycle],
    ["healingDirection", w.healingDirection],
    ["remedy", w.remedy],
  ];
  const placeholder = `<span class="wound-step__pending">${w.pending}</span>`;
  return `
    <div class="knowledge-section wound-box">
      <strong>${w.title}</strong>
      <ol class="wound-chain">
        ${steps
          .map(
            ([key, label]) => `
          <li class="wound-step${wound[key] ? "" : " wound-step--empty"}">
            <span class="wound-step__label">${label}</span>
            <span class="wound-step__value">${wound[key] ? wound[key] : placeholder}</span>
          </li>`,
          )
          .join("")}
      </ol>
      ${bookTip("hinter-der-leidenschaft", "Die neun Wunden des Enneagramms \u2013 tiefgreifende Analyse der Urwunde hinter jeder Leidenschaft, mit konkreten Heilungswegen f\u00fcr alle 9 Typen.", "Hinter der Leidenschaft")}
    </div>
  `;
}

function remedyCardSection(cards) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section remedy-card-section">
      <strong>${labels.remedyCards}</strong>
      <p class="remedy-card-section__note">${labels.remedyCardsNote}</p>
      <div class="remedy-card-grid">
        ${cards.map((card) => `
          <article class="remedy-card">
            <div class="remedy-card__image">
              <img src="${card.image}" alt="${card.title} \u00b7 ${card.subtitle}" loading="lazy" />
            </div>
            <div class="remedy-card__body">
              <span>${card.category}</span>
              ${card.imageStatus ? `<span class="remedy-card__image-status">${card.imageStatus}</span>` : ""}
              <h3>${card.title}</h3>
              <em>${card.subtitle}</em>
              <p class="remedy-card__field">${card.field}</p>
              <p>${card.text}</p>
              <small>${card.goal}</small>
              ${card.imagePlan ? `<small class="remedy-card__plan">${card.imagePlan}</small>` : ""}
              ${CARD_AFFILIATE_CATEGORY[card.category] && AFFILIATE_LINKS[CARD_AFFILIATE_CATEGORY[card.category]]?.[card.title] ? affiliateBoxHtml(CARD_AFFILIATE_CATEGORY[card.category], card.title) : ""}
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function sourceCoverageSection(pages) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section source-coverage-section">
      <strong>${labels.sourceCoverage}</strong>
      <p>${labels.sourceCoverageNote}</p>
      <div class="source-coverage-grid">
        ${pages.map((page) => `
          <article class="source-page-card">
            <div class="source-page-card__head">
              <h3>${page.page}</h3>
              ${page.status ? `<span class="${page.status}">${coverageStatusLabel(page.status)}</span>` : ""}
            </div>
            <ul>${page.blocks.map((block) => `<li>${block}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function coverageStatusLabel(status) {
  return text.coverageStatusLabels[status] || status;
}

function visualPageSection(pages) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section visual-pages-section">
      <strong>${labels.visualPages}</strong>
      <div class="visual-pages-grid">
        ${pages.map((page) => `
          <figure class="visual-page">
            <div class="card-pg-wrap">
              <a href="${page.src}" target="_blank" rel="noreferrer">
                <img src="${page.src}" alt="${page.alt}" loading="lazy" />
              </a>
              <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
            </div>
            <figcaption>
              <span>${page.title}</span>
              <p>${page.caption}</p>
            </figcaption>
          </figure>
        `).join("")}
      </div>
    </div>
  `;
}

function contentModuleSection(modules) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section module-section">
      <strong>${labels.contentModules}</strong>
      <div class="module-grid">
        ${modules.map((module) => `
          <article class="content-module">
            <h3>${module.title}</h3>
            <p>${module.intro}</p>
            <dl>
              ${module.entries.map((entry) => `
                <div>
                  <dt>${entry.label}</dt>
                  <dd>${entry.text}</dd>
                </div>
              `).join("")}
            </dl>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function mediaResourceSection(resources) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section media-section">
      <strong>${labels.mediaResources}</strong>
      <div class="media-grid">
        ${resources.map(mediaTile).join("")}
      </div>
    </div>
  `;
}

function mediaGroupSection(groups) {
  const labels = text.knowledgeCard;
  return `
    <div class="knowledge-section media-section media-section--grouped">
      <strong>${labels.mediaGroups}</strong>
      ${groups.map((group) => `
        <div class="media-group">
          <div class="media-group__head">
            <h3>${group.title}</h3>
            <p>${group.note}</p>
          </div>
          <div class="media-grid">
            ${group.resources.map(mediaTile).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function mediaTile(resource) {
  const labels = text.knowledgeCard;
  const embedSrc = resource.youtubeVideoId
    ? `https://www.youtube.com/embed/${resource.youtubeVideoId}`
    : resource.youtubePlaylistId
      ? `https://www.youtube.com/embed/videoseries?list=${resource.youtubePlaylistId}`
      : "";
  const youtubeHref = resource.youtubeVideoId
    ? `https://www.youtube.com/watch?v=${resource.youtubeVideoId}`
    : resource.youtubePlaylistId
      ? `https://www.youtube.com/playlist?list=${resource.youtubePlaylistId}`
      : "";

  return `
    <div class="media-tile ${resource.pending ? "media-tile--pending" : ""}">
      <div class="media-meta">
        <span>${resource.category} \u00b7 ${resource.scope}</span>
        <strong>${resource.title}</strong>
      </div>
      ${embedSrc ? `
        <div class="youtube-embed">
          <iframe
            src="${embedSrc}"
            title="${resource.title}"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <a class="media-link" href="${youtubeHref}" target="_blank" rel="noreferrer">${labels.youtubeOpen}</a>
      ` : `
        <div class="media-placeholder">
          <strong>${labels.linkPending}</strong>
          <p>${labels.linkPendingText}</p>
        </div>
      `}
    </div>
  `;
}

function profilePage() {
  const allCodes = Object.keys(subtypeProfiles);
  const sortBy = (order) => (a, b) => order.indexOf(parseInt(a[2])) - order.indexOf(parseInt(b[2]));
  const groups = [
    { label: "Bauchzentrum \u00b7 Typ 8, 9, 1", hint: "Handlung, Instinkt, K\u00f6rper",   codes: allCodes.filter(c => [8,9,1].includes(parseInt(c[2]))).sort(sortBy([8,9,1])) },
    { label: "Herzzentrum \u00b7 Typ 2, 3, 4",  hint: "Gef\u00fchl, Beziehung, Identit\u00e4t", codes: allCodes.filter(c => [2,3,4].includes(parseInt(c[2]))).sort(sortBy([2,3,4])) },
    { label: "Kopfzentrum \u00b7 Typ 5, 6, 7",  hint: "Denken, Sicherheit, Vorstellung", codes: allCodes.filter(c => [5,6,7].includes(parseInt(c[2]))).sort(sortBy([5,6,7])) },
  ];
  const current = state.profile.id;
  const firstVisit = state.isFirstVisit;

  let cardIdx = 0;
  const groupsHTML = groups.map(g => {
    const cardsHTML = g.codes.map(id => {
      const p = subtypeProfiles[id];
      const active = id === current ? ' profile-card--active' : '';
      const delay = (cardIdx++ * 0.035).toFixed(3);
      const tc = typeColorFromCode(p.code);
      return `<button class="profile-card${active}" style="animation-delay:${delay}s" data-select-profile="${id}">
        <div class="profile-card__visual" style="position:relative;border-radius:50%;overflow:hidden;box-shadow:0 0 0 3px ${tc};">
          ${p.image
            ? `<img src="${p.image}" alt="${p.archetype || p.code}" class="profile-card__img" style="position:absolute;top:${tierAvatarTop(p.code)};left:${tierAvatarLeft(p.code)};width:140%;height:140%;object-fit:cover;border-radius:0;animation:none;" />`
            : `<span class="profile-card__emoji">${p.emoji || ''}</span>`}
        </div>
        <span class="profile-card__code" style="color:${tc};">${p.code}</span>
        <strong class="profile-card__title">${p.title}</strong>
        ${p.titleAlt ? `<em class="profile-card__alt">${p.titleAlt}</em>` : ''}
        ${p.variant ? `<span class="profile-card__variant">${p.variant}</span>` : ''}
      </button>`;
    }).join("");
    return `<section class="profile-group">
      <div class="profile-group__head">
        <h2 class="profile-group__label">${g.label}</h2>
        <span class="profile-group__hint">${g.hint}</span>
      </div>
      <div class="profile-grid">${cardsHTML}</div>
    </section>`;
  }).join("");

  return shell(`
    ${firstVisit ? '' : pageHeader("profile")}
    <section class="narrow centered profile-intro">
      ${firstVisit ? `<div class="profile-intro__compass">${compassMark("small")}</div>` : ''}
      <h1>${firstVisit ? 'Welcher Subtyp sind Sie?' : 'Subtyp w\u00e4hlen'}</h1>
      <p class="lead-small">${firstVisit
        ? 'W\u00e4hlen Sie Ihren Enneagramm-Subtyp. Der Kompass richtet sich vollst\u00e4ndig auf Sie aus \u2014 Tagesimpuls, Muster, Werkzeuge und Heilungsweg.'
        : 'Dein aktuelles Profil ist <strong>' + state.profile.code + ' \u00b7 ' + state.profile.title + '</strong>. W\u00e4hle einen anderen Subtyp, um den Kompass neu auszurichten.'
      }</p>
      <p class="profile-type-hint">Kennen Sie Ihren Subtyp noch nicht? Kein Problem \u2014 schauen Sie sich die drei Varianten Ihres Typs an (z.&nbsp;B. SE6, SO6, SX6) und w\u00e4hlen Sie die, die sich am stimmigsten anf\u00fchlt.</p>
    </section>
    ${groupsHTML}
    ${firstVisit ? `<p class="profile-skip">Noch unsicher? <button class="ghost-link" data-route="knowledge">Erst den Wissens-Atlas erkunden</button></p>` : ''}
  `);
}

function statusLabel(status) {
  return text.statusLabels[status] || status;
}

function dailyPick(val) {
  const day = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return Array.isArray(val) ? val[day % val.length] : val;
}
function infoCard(title, text) {
  return `<article class="info-card"><span>${title}</span><p>${text}</p></article>`;
}

function listPanel(title, items, tone) {
  return `
    <article class="list-panel ${tone}">
      <h2>${title}</h2>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function getJournal() {
  return localStorage.getItem("enneagramm-kompass:sx6-journal") || "";
}

function showElementModal(elementName) {
  const el = tcmElemente[elementName];
  if (!el) return;
  const existing = document.querySelector(".tcm-element-modal-overlay");
  if (existing) existing.remove();
  const overlay = document.createElement("div");
  overlay.className = "tcm-element-modal-overlay";
  overlay.innerHTML = `
    <div class="tcm-element-modal" style="--el-color:${el.farbe}">
      <button class="tcm-element-modal__close" aria-label="Schlie\u00dfen">\u2715</button>
      <div class="tcm-element-modal__header">
        <span class="tcm-element-modal__symbol">${el.symbol}</span>
        <div>
          <h2>${elementName}</h2>
          <p class="tcm-element-modal__typen">Enneagramm: ${el.typen}</p>
        </div>
      </div>
      <p class="tcm-element-modal__beschreibung">${el.beschreibung}</p>
      <dl class="tcm-element-modal__facts">
        <dt>${el.jahreszeitLabel}</dt><dd>${el.jahreszeit}</dd>
        <dt>${el.organeLabel}</dt><dd>${el.organe}</dd>
        <dt>${el.emotionLabel}</dt><dd>${el.emotion}</dd>
        <dt>${el.heilungLabel}</dt><dd>${el.heilung}</dd>
        <dt>${el.geschmackLabel}</dt><dd>${el.geschmack}</dd>
        <dt>${el.qualitaetLabel}</dt><dd>${el.qualitaet}</dd>
      </dl>
    </div>
  `;
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.classList.contains("tcm-element-modal__close")) {
      overlay.remove();
    }
  });
  document.body.appendChild(overlay);
}

function bindEvents() {

  // Notizen \u2013 gespeicherten Wert wiederherstellen
  document.querySelectorAll('[data-note-key]').forEach(function(el) {
    el.value = localStorage.getItem(el.dataset.noteKey) || '';
  });

  // Favoriten \u2013 Herz-Button auf Detailseiten
  const _hb = document.getElementById('fav-heart-btn');
  if (_hb) {
    _hb.addEventListener('click', () => {
      const r = _hb.dataset.routeFav;
      const lbl = _favLabel(r);
      _toggleFav(r, lbl);
      const on = _isFav(r);
      _hb.textContent = on ? '\u2665' : '\u2661';
      _hb.title = on ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzuf\u00fcgen';
      _hb.classList.toggle('fav-heart-btn--active', on);
    });
  }
  // Favoriten \u2013 Alle l\u00f6schen
  const _clearBtn = document.getElementById('fav-clear-btn');
  if (_clearBtn) {
    _clearBtn.addEventListener('click', () => {
      if (confirm('Alle Favoriten l\u00f6schen?')) { _setFavs([]); render(); }
    });
  }
  // Favoriten \u2013 Listeneintr\u00e4ge
  document.querySelectorAll('.fav-item').forEach(el => {
    el.addEventListener('click', () => go(el.dataset.route));
  });
  // Kriminalportr\u00e4t-Filter \u2013 Karten-Klick + Initialisierung
  if (document.getElementById('kf-list')) {
    window.kfState = { inst:"ALL", typ:0, tag:"ALL", gender:"ALL", land:"ALL" };
    document.querySelectorAll('.kf-card').forEach(el => {
      el.addEventListener('click', () => go(el.dataset.route));
    });
    window.kfApply();
  }

  // data-scroll-to: store scroll target before navigation
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', () => {
      sessionStorage.setItem('kompass:scrollTo', btn.dataset.scrollTo);
      go(btn.dataset.route);
    });
  });

  // Suche autofocus
  const _si = document.getElementById("suche-input");
  if (_si) { _si.focus(); _si.setSelectionRange(_si.value.length, _si.value.length); }
  // Typenvergleiche Filter
  document.querySelectorAll(".tv-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tv-filter").forEach(b => { b.classList.remove("is-active"); b.style.background=""; b.style.color=""; b.style.borderColor=""; });
      btn.classList.add("is-active");
      if (btn.dataset.color) { btn.style.background=btn.dataset.color; btn.style.color="#fff"; btn.style.borderColor=btn.dataset.color; }
      const typ = parseInt(btn.dataset.typ, 10);
      document.querySelectorAll(".tv-card").forEach(card => {
        card.style.display = parseInt(card.dataset.gruppe, 10) === typ ? "" : "none";
      });
      document.querySelectorAll(".td-row").forEach(row => {
        row.style.display = (typ === 0 || parseInt(row.dataset.typ, 10) === typ) ? "" : "none";
      });
    });
  });

  document.querySelectorAll("[data-comic-open]").forEach(el => {
    el.addEventListener("click", () => {
      const code = el.dataset.comicOpen;
      const lb = document.createElement("div");
      lb.style.cssText = "position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;cursor:zoom-out;padding:1rem;";
      lb.innerHTML = `<img src="${R2_CDN}assets/comics/${code}.jpg" style="max-width:100%;max-height:100vh;border-radius:0.5rem;box-shadow:0 8px 40px rgba(0,0,0,0.6);filter:contrast(1.08);" />`;
      lb.addEventListener("click", () => lb.remove());
      document.body.appendChild(lb);
    });
  });

  document.querySelectorAll("[data-tier-laut]").forEach(btn => {
    btn.addEventListener("click", () => syntheseTierLaut(btn.dataset.tierLaut));
  });

  document.querySelectorAll("[data-situ-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      situKompState.situId = btn.dataset.situId;
      app.innerHTML = situationskompasPage();
      bindEvents();
    });
  });

  document.querySelectorAll("[data-situ-subtype]").forEach(btn => {
    btn.addEventListener("click", () => {
      situKompState.subtypeCode = btn.dataset.situSubtype;
      app.innerHTML = situationskompasPage();
      bindEvents();
    });
  });

  document.querySelectorAll("[data-komm-subtype]").forEach(btn => {
    btn.addEventListener("click", () => {
      kommGuideState.subtypeCode = btn.dataset.kommSubtype;
      app.innerHTML = kommunikationsguidePage();
      bindEvents();
    });
  });


  document.querySelectorAll("[data-krisen-typ]").forEach(btn => {
    btn.addEventListener("click", () => {
      krisenState.typNr = parseInt(btn.dataset.krisenTyp, 10);
      krisenState.krisenId = null;
      app.innerHTML = krisenkompassPage();
      bindEvents();
    });
  });

  document.querySelectorAll("[data-krisen-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      krisenState.krisenId = btn.dataset.krisenId;
      app.innerHTML = krisenkompassPage();
      bindEvents();
    });
  });

  document.querySelectorAll("[data-krisen-reset]").forEach(btn => {
    btn.addEventListener("click", () => {
      krisenState = { typNr: null, krisenId: null };
      app.innerHTML = krisenkompassPage();
      bindEvents();
    });
  });

  document.querySelectorAll("[data-diff-nr]").forEach(btn => {
    btn.addEventListener("click", () => {
      const nr = parseInt(btn.dataset.diffNr, 10);
      if (diffState.a === null || (diffState.a !== null && diffState.b !== null)) {
        diffState = { a: nr, b: null };
      } else if (diffState.b === null) {
        diffState.b = nr;
      }
      app.innerHTML = differenzierungPage();
      bindEvents();
    });
  });

  document.querySelectorAll("[data-bez-code]").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.bezCode;
      beziehungSelected = beziehungSelected === code ? null : code;
      app.style.opacity = "0";
      setTimeout(() => {
        app.innerHTML = beziehungenPage();
        bindEvents();
        requestAnimationFrame(() => requestAnimationFrame(() => { app.style.opacity = "1"; }));
        const sel = document.querySelector("[data-bez-code].active, [data-bez-code]");
        setTimeout(() => document.getElementById("bez-paarungen")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      }, 120);
    });
  });

  // Kompass-Overlay auf ALLEN Vollseiten-Karten sicherstellen (deckt die Seitenzahl oben).
  // Greift auch fuer Seiten, deren Render-Pfad den Wrap nicht selbst setzt (z. B. Heilmittel-Seite 4).
  document.querySelectorAll(".vollseite-karte").forEach((fig) => {
    if (fig.querySelector(".card-pg-compass")) return; // schon vorhanden &ndash; keine Dublette
    const img = fig.querySelector(".vollseite-karte__img");
    if (!img) return;
    let wrap = img.closest(".card-pg-wrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "card-pg-wrap";
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
    }
    const comp = document.createElement("div");
    comp.className = "card-pg-compass";
    comp.setAttribute("aria-hidden", "true");
    comp.innerHTML = compassMark("mini");
    wrap.appendChild(comp);
  });

  document.querySelectorAll("[data-dropdown-toggle]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const wrap = trigger.closest(".nav-dropdown-wrap");
      const menu = wrap.querySelector(".nav-dropdown__menu");
      const isOpen = wrap.classList.contains("is-open");
      document.querySelectorAll(".nav-dropdown-wrap.is-open").forEach(w => w.classList.remove("is-open"));
      if (!isOpen) {
        const rect = trigger.getBoundingClientRect();
        menu.style.top = (rect.bottom + 6) + "px";
        menu.style.right = (window.innerWidth - rect.right) + "px";
        wrap.classList.add("is-open");
      }
    });
  });
  // Close dropdown when clicking outside \u2014 use bubble phase so stopPropagation above works
  document.body.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-dropdown-wrap")) {
      document.querySelectorAll(".nav-dropdown-wrap.is-open").forEach(w => w.classList.remove("is-open"));
    }
  });

  // Schaubilder search: filter items as user types
  document.addEventListener("input", (e) => {
    const input = e.target.closest(".nav-dropdown__search");
    if (!input) return;
    const q = input.value.trim().toLowerCase();
    const menu = input.closest(".nav-dropdown__menu");
    menu.querySelectorAll(".nav-dropdown__item").forEach(btn => {
      btn.style.display = !q || btn.textContent.toLowerCase().includes(q) ? "" : "none";
    });
  });
  // Prevent dropdown close when clicking inside search input
  document.addEventListener("click", (e) => {
    if (e.target.closest(".nav-dropdown__search-wrap")) e.stopPropagation();
  }, true);
  // Clear search when dropdown closes
  document.querySelectorAll(".nav-dropdown-wrap--searchable").forEach(wrap => {
    new MutationObserver(() => {
      if (!wrap.classList.contains("is-open")) {
        const input = wrap.querySelector(".nav-dropdown__search");
        if (input) {
          input.value = "";
          wrap.querySelectorAll(".nav-dropdown__item").forEach(btn => btn.style.display = "");
        }
      }
    }).observe(wrap, { attributes: true, attributeFilter: ["class"] });
  });

  document.getElementById("js-back-btn")?.addEventListener("click", () => {
    // Bevorzugt: tatsächlich besuchte Vorseite aus dem Navigations-Stack
    // (z. B. Lebensmusterkompass, Suche, ...), statt des fest hinterlegten
    // Standardziels der jeweiligen Seite.
    if (window.__routeStack && window.__routeStack.length) {
      go(window.__routeStack.pop());
      return;
    }
    const target = document.getElementById("js-back-target");
    if (target && target.dataset.route) { go(target.dataset.route); }
    else if (history.length > 1) { history.back(); }
    else { go("start"); }
  });

  // Externe Links explizit \u00f6ffnen (\u00fcberbr\u00fcckt Popup-Blocker und PWA-Modus)
  document.querySelectorAll("a[href^='https://'], a[href^='http://']").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(a.href, "_blank", "noopener,noreferrer");
    });
  });

  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.locked) {
        go("freischalt/" + button.dataset.locked);
      } else {
        go(button.dataset.route);
      }
    });
  });

  // Typalbum initialisieren
  if (document.getElementById("grid-se1")) typalbumInit();

  // Mein Foto \u2013 Upload mit Crop-Dialog
  // Foto-Men\u00fc: Toggle
  const photoMenuBtn = document.querySelector("#user-photo-menu-btn");
  const photoMenu = document.querySelector("#user-photo-menu");
  if (photoMenuBtn && photoMenu) {
    photoMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      photoMenu.style.display = photoMenu.style.display === "none" ? "flex" : "none";
    });
    document.addEventListener("click", () => { if (photoMenu) photoMenu.style.display = "none"; }, { once: false });
  }

  // Foto-Upload (beide Inputs)
  function handlePhotoFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => openCropDialog(ev.target.result, (dataUrl) => {
      setUserPhoto(dataUrl);
      render();
    });
    reader.readAsDataURL(file);
  }
  [document.querySelector("#user-photo-input"), document.querySelector("#user-photo-input2")].forEach(inp => {
    if (inp) inp.addEventListener("change", (e) => handlePhotoFile(e.target.files[0]));
  });

  // Foto entfernen
  const photoDel = document.querySelector("#user-photo-del");
  if (photoDel) {
    photoDel.addEventListener("click", () => { delUserPhoto(); render(); });
  }

  // Push-Benachrichtigungen manuell aktivieren
  const pushBtn = document.querySelector("#push-enable-btn");
  if (pushBtn) {
    // Lokaler Zustand \u2013 vermeidet asynchrone OneSignal-State-Probleme
    let pushOptedOut = false;
    try {
      if (typeof OneSignal !== "undefined" && OneSignal.User?.PushSubscription) {
        pushOptedOut = !(OneSignal.User.PushSubscription.optedIn);
      }
    } catch(e) {}

    function setPushBtnState(state) {
      pushBtn.dataset.state = state;
      if (state === "active") {
        pushBtn.textContent = "\ud83d\udd14 Push aktiv \u2013 tippen zum Deaktivieren";
        pushBtn.style.color = "var(--gold)";
      } else if (state === "optedout") {
        pushBtn.textContent = "\ud83d\udd15 Push aus \u2013 tippen zum Aktivieren";
        pushBtn.style.color = "var(--muted)";
      } else if (state === "denied") {
        pushBtn.textContent = "\ud83d\udd15 Push blockiert \u2013 Einstellungen \u2192 App \u2192 Mitteilungen";
        pushBtn.style.color = "#c0392b";
      } else {
        pushBtn.textContent = "\ud83d\udd14 Push-Benachrichtigungen aktivieren";
        pushBtn.style.color = "var(--muted)";
      }
    }

    if (typeof Notification === "undefined") {
      pushBtn.style.display = "none";
    } else if (Notification.permission === "denied") {
      setPushBtnState("denied");
    } else if (Notification.permission === "granted") {
      setPushBtnState(pushOptedOut ? "optedout" : "active");
    } else {
      setPushBtnState("default");
    }

    pushBtn.addEventListener("click", async () => {
      const state = pushBtn.dataset.state;
      if (state === "active") {
        pushBtn.textContent = "\u23f3 \u2026";
        try { if (typeof OneSignal !== "undefined") await OneSignal.User.PushSubscription.optOut(); } catch(e) {}
        pushOptedOut = true;
        setPushBtnState("optedout");
      } else if (state === "optedout") {
        pushBtn.textContent = "\u23f3 \u2026";
        try { if (typeof OneSignal !== "undefined") await OneSignal.User.PushSubscription.optIn(); } catch(e) {}
        pushOptedOut = false;
        setPushBtnState("active");
      } else if (state === "denied") {
        pushBtn.textContent = "\ud83d\udd15 Einstellungen \u2192 [App-Name] \u2192 Mitteilungen \u2192 erlauben";
      } else {
        pushBtn.textContent = "\u23f3 Erlaubnis wird angefragt\u2026";
        try {
          if (typeof OneSignal !== "undefined") await OneSignal.Slidedown.promptPush({ force: true });
          const perm = await Notification.requestPermission();
          if (perm === "granted") {
            try { if (typeof OneSignal !== "undefined") await OneSignal.User.PushSubscription.optIn(); } catch(e) {}
            pushOptedOut = false;
            setPushBtnState("active");
          } else {
            setPushBtnState("denied");
          }
        } catch(e) { setPushBtnState("default"); }
      }
    });
  }

  const save = document.querySelector("#saveJournal");
  if (save) {
    save.addEventListener("click", () => {
      const journalText = document.querySelector("#journalText").value;
      localStorage.setItem("enneagramm-kompass:sx6-journal", journalText);
      document.querySelector("#saveStatus").textContent = text.routes.reflection.saved;
    });
  }

  document.querySelectorAll("[data-tcm-element]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      showElementModal(btn.dataset.tcmElement);
    });
  });

  document.querySelectorAll(".inline-section__toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.closest(".inline-section");
      const collapsed = section.dataset.collapsed === "true";
      section.dataset.collapsed = collapsed ? "false" : "true";
      btn.setAttribute("aria-expanded", collapsed ? "true" : "false");
    });
  });

  document.querySelectorAll("[data-werk-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.werkFilter;
      document.querySelectorAll("[data-werk-filter]").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      document.querySelectorAll(".werk-card").forEach(card => {
        const match = filter === "all" || card.dataset.category === filter;
        card.style.display = match ? "" : "none";
      });
    });
  });

  const unlockBtn = document.querySelector("#unlockBtn");
  if (unlockBtn) {
    const doUnlock = () => {
      const code = (document.querySelector("#unlockCode").value || "").trim().toUpperCase();
      const name = (document.querySelector("#unlockName").value || "").trim();
      const msg = document.querySelector("#unlockMsg");
      if (KOMPASS_CODES.has(code)) {
        if (!name) {
          msg.textContent = "Bitte tragen Sie zuerst Ihren Namen ein.";
          msg.style.color = "var(--copper)";
          document.querySelector("#unlockName").focus();
          return;
        }
        setTier("heilwissen");
        setLizenzName(name);
        playPurchaseWelcome();
        // Erfolgsmeldung + Homescreen-Anleitung anzeigen
        const card = document.querySelector(".freischalt-card");
        if (card) {
          card.innerHTML = `
            <div style="text-align:center;padding:1rem 0 .5rem;">
              <div style="font-size:2.5rem;margin-bottom:.75rem;">\u2705</div>
              <h2 style="font-size:1.4rem;font-weight:700;color:var(--gold);margin-bottom:.5rem;">Herzlich willkommen im Enneagramm-Heilungskompass!</h2>
              <p style="font-size:1rem;line-height:1.7;margin-bottom:1.5rem;">Ihr Zugang zur <strong>Enneagramm-Heilungskompass-App</strong> wurde erfolgreich aktiviert. Sie haben jetzt Zugriff auf alle Inhalte.</p>
            </div>
            <div style="background:var(--surface,#f9f6f0);border-radius:12px;padding:1.1rem 1.2rem;margin-bottom:1.25rem;text-align:left;">
              <p style="font-weight:700;font-size:.95rem;margin-bottom:.6rem;color:var(--ink);">\ud83d\udcf1 App auf den Homescreen legen</p>
              <p style="font-size:.88rem;line-height:1.65;margin-bottom:.7rem;color:var(--ink);"><strong>iPhone / iPad (Safari):</strong><br>Tippen Sie unten auf das Teilen-Symbol <span style="font-size:1rem;">\u2b06</span> und w\u00e4hlen Sie <em>\u201eZum Home-Bildschirm"</em>. Dann k\u00f6nnen Sie die App wie eine normale App \u00f6ffnen.</p>
              <p style="font-size:.88rem;line-height:1.65;margin:0;color:var(--ink);"><strong>Android (Chrome):</strong><br>Tippen Sie oben auf das Men\u00fc <span style="font-size:1rem;">\u22ee</span> und w\u00e4hlen Sie <em>\u201eZum Startbildschirm hinzuf\u00fcgen"</em>.</p>
            </div>
            <button class="primary" style="width:100%;font-size:1rem;" id="unlockWeiter">Jetzt loslegen \u2192</button>
          `;
          document.querySelector("#unlockWeiter").addEventListener("click", () => go("start"));
        } else {
          go("start");
        }
      } else {
        msg.textContent = "Ung\u00fcltiger Code. Bitte pr\u00fcfen Sie die Best\u00e4tigungs-E-Mail von Stripe.";
        msg.style.color = "var(--copper)";
      }
    };
    unlockBtn.addEventListener("click", doUnlock);
    document.querySelector("#unlockCode").addEventListener("keydown", (e) => {
      if (e.key === "Enter") doUnlock();
    });
  }

  // Zugangscode-Toggle
  const toggleCode = document.querySelector("#toggleCode");
  if (toggleCode) {
    toggleCode.addEventListener("click", () => {
      const panel = document.querySelector("#panelCode");
      const visible = panel.style.display !== "none";
      panel.style.display = visible ? "none" : "";
      toggleCode.textContent = visible ? "Ich habe einen Zugangscode" : "Zugangscode ausblenden";
    });
  }

  // Firebase E-Mail-Login
  const fbLoginBtn = document.querySelector("#fbLoginBtn");
  if (fbLoginBtn) {
    const doFbLogin = async () => {
      const email = (document.querySelector("#fbEmail").value || "").trim();
      const pass  = document.querySelector("#fbPass").value || "";
      const msg   = document.querySelector("#fbMsg");
      if (!email || !pass) { msg.textContent = "Bitte E-Mail und Passwort eingeben."; msg.style.color = "var(--copper)"; return; }
      if (!fbAuth || !fbSignIn) { msg.textContent = "Verbindung wird aufgebaut, bitte kurz warten..."; return; }
      msg.textContent = "Anmelden..."; msg.style.color = "var(--muted)";
      try {
        const cred = await fbSignIn(fbAuth, email, pass);
        setTier("heilwissen");
        setLizenzName(cred.user.displayName || cred.user.email);
        playPurchaseWelcome();
        const card = document.querySelector(".freischalt-card");
        if (card) {
          card.innerHTML = `
            <div style="text-align:center;padding:1rem 0 .5rem;">
              <div style="font-size:2.5rem;margin-bottom:.75rem;">\u2705</div>
              <h2 style="font-size:1.4rem;font-weight:700;color:var(--gold);margin-bottom:.5rem;">Herzlich willkommen!</h2>
              <p style="font-size:1rem;line-height:1.7;margin-bottom:1.5rem;">Ihr Zugang wurde erfolgreich aktiviert.</p>
            </div>
            <div style="background:var(--surface,#f9f6f0);border-radius:12px;padding:1.1rem 1.2rem;margin-bottom:1.25rem;text-align:left;">
              <p style="font-weight:700;font-size:.95rem;margin-bottom:.6rem;color:var(--ink);">\ud83d\udcf1 App auf den Homescreen legen</p>
              <p style="font-size:.88rem;line-height:1.65;margin-bottom:.7rem;color:var(--ink);"><strong>iPhone / iPad (Safari):</strong><br>Teilen-Symbol \u2b06 \u2192 <em>\u201eZum Home-Bildschirm"</em></p>
              <p style="font-size:.88rem;line-height:1.65;margin:0;color:var(--ink);"><strong>Android (Chrome):</strong><br>Men\u00fc \u22ee \u2192 <em>\u201eZum Startbildschirm hinzuf\u00fcgen"</em></p>
            </div>
            <button class="primary" style="width:100%;font-size:1rem;" id="unlockWeiter">Jetzt loslegen \u2192</button>
          `;
          document.querySelector("#unlockWeiter").addEventListener("click", () => go("start"));
        } else {
          go("start");
        }
      } catch (e) {
        const map = {
          "auth/invalid-credential": "E-Mail oder Passwort falsch.",
          "auth/user-not-found": "Kein Konto mit dieser E-Mail.",
          "auth/wrong-password": "Falsches Passwort.",
          "auth/too-many-requests": "Zu viele Versuche \u2013 bitte kurz warten.",
          "auth/network-request-failed": "Keine Internetverbindung.",
        };
        msg.textContent = map[e.code] || "Anmeldung fehlgeschlagen.";
        msg.style.color = "var(--copper)";
      }
    };
    fbLoginBtn.addEventListener("click", doFbLogin);
    document.querySelector("#fbPass").addEventListener("keydown", (e) => { if (e.key === "Enter") doFbLogin(); });
  }

  // Abmelden-Button im Footer
  const fbLogoutBtn = document.querySelector("#fbLogoutBtn");
  if (fbLogoutBtn) {
    fbLogoutBtn.addEventListener("click", async () => {
      if (fbAuth && fbSignOut) { try { await fbSignOut(fbAuth); } catch(e) {} }
      setTier("demo");
      setLizenzName("");
      go("start");
    });
  }

  document.querySelectorAll("[data-select-profile]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.selectProfile;
      if (subtypeProfiles[id]) {
        localStorage.setItem(PROFILE_KEY, id);
        localStorage.setItem(VISITED_KEY, "1");
        state.profile = subtypeProfiles[id];
        state.isFirstVisit = false;
        // Verz\u00f6gert, damit die pers\u00f6nliche Begr\u00fc\u00dfung (welcome_${id}), die auf
        // demselben Klick \u00fcber den document-Listener feuert, immer zuerst
        // in der Voice-Queue landet und der Meilenstein danach folgt.
        setTimeout(() => playMilestone("erster-subtyp"), 0);
        go("dashboard");
      }
    });
  });

  if (state.route === "typentest") {
    bindTypentest();
  }
  if (state.route === "typentest-motivational") {
    bindMotivtest();
  }
  if (state.route === "diagnosetest") {
    bindDiagnosetest();
  }
  if (state.route === "motivations-schnelltest") {
    bindSchnelltest();
  }
  bindOnboarding();
}

// -- MOTIVATIONS-SCHNELLTEST --------------------------------------------------
const MOTIV_SCHNELLTEST = [
  { nr: 1, thema: "Entscheidungen", frage: "Wenn Sie vor einer wichtigen Entscheidung stehen, was bewegt Sie im Innersten am meisten?", antworten: {
    E: "Ich will sicherstellen, dass die Entscheidung richtig und vertretbar ist.",
    Z: "Ich frage mich, wem diese Entscheidung am meisten hilft.",
    D: "Ich will die Option w\u00e4hlen, die am ehesten zum Erfolg f\u00fchrt.",
    V: "Ich pr\u00fcfe, ob die Entscheidung wirklich zu mir und meinen Gef\u00fchlen passt.",
    F: "Ich will erst alle Informationen verstanden haben, bevor ich mich festlege.",
    X: "Ich denke an das, was schiefgehen k\u00f6nnte, und will vorbereitet sein.",
    S: "Ich will mir keine spannende M\u00f6glichkeit verbauen.",
    A: "Ich will die Entscheidung selbst kontrollieren, nicht von anderen abh\u00e4ngen.",
    N: "Ich will eine L\u00f6sung, mit der alle gut leben k\u00f6nnen.",
  }},
  { nr: 2, thema: "Kritik", frage: "Wie reagieren Sie innerlich, wenn jemand Sie kritisiert?", antworten: {
    Z: "Ich frage mich, ob ich jetzt nicht mehr gebraucht oder gesch\u00e4tzt werde.",
    D: "Ich will schnell beweisen, dass die Kritik nicht mein wahres K\u00f6nnen trifft.",
    V: "Ich sp\u00fcre die Kritik tief und frage mich, ob mit mir grunds\u00e4tzlich etwas nicht stimmt.",
    F: "Ich ziehe mich zur\u00fcck, um die Kritik erst in Ruhe zu durchdenken.",
    X: "Ich frage mich, ob die Kritik ein Zeichen f\u00fcr eine gr\u00f6\u00dfere Gefahr ist.",
    S: "Ich will schnell wieder zu etwas Positivem \u00fcbergehen.",
    A: "Ich pr\u00fcfe, ob mich hier jemand kontrollieren oder schw\u00e4chen will.",
    N: "Ich will vor allem, dass daraus kein Streit entsteht.",
    E: "Ich pr\u00fcfe sofort, ob die Kritik berechtigt ist \u2013 und was ich verbessern kann.",
  }},
  { nr: 3, thema: "Konflikt", frage: "Was ist Ihr innerster Antrieb in einem Konflikt?", antworten: {
    D: "Ich will den Konflikt m\u00f6glichst schnell und erfolgreich beenden.",
    V: "Ich will, dass meine wirklichen Gef\u00fchle gesehen und verstanden werden.",
    F: "Ich will erst verstehen, worum es eigentlich geht, bevor ich mich \u00e4u\u00dfere.",
    X: "Ich will wissen, wo ich stehe und wem ich vertrauen kann.",
    S: "Ich will die Spannung aufl\u00f6sen, bevor sie zu schwer wird.",
    A: "Ich gehe die Sache direkt an, statt auszuweichen.",
    N: "Ich will vor allem, dass die Verbindung zueinander nicht zerbricht.",
    E: "Ich will, dass am Ende die richtige, faire L\u00f6sung steht.",
    Z: "Ich will die Beziehung retten, auch wenn ich daf\u00fcr zur\u00fcckstecke.",
  }},
  { nr: 4, thema: "Auftanken", frage: "Was gibt Ihnen wirklich innere Erf\u00fcllung in Ihrer freien Zeit?", antworten: {
    V: "Etwas Sch\u00f6nes oder Bedeutungsvolles schaffen, das wirklich meins ist.",
    F: "Ungest\u00f6rte Zeit, um mich in ein Thema zu vertiefen, das mich interessiert.",
    X: "Zeit mit Menschen oder Ritualen, die mir Sicherheit geben.",
    S: "Etwas Neues erleben oder mehrere sch\u00f6ne Dinge gleichzeitig genie\u00dfen.",
    A: "Etwas tun, bei dem ich ganz die Kontrolle habe und mich frei f\u00fchle.",
    N: "Einfach zur Ruhe kommen, ohne dass etwas von mir verlangt wird.",
    E: "Etwas zu Ende bringen, das ich ordentlich und richtig erledigt habe.",
    Z: "Zeit mit Menschen, die ich unterst\u00fctzen und verw\u00f6hnen kann.",
    D: "Ein Ziel erreichen, auf das ich stolz sein kann.",
  }},
  { nr: 5, thema: "Eigene Fehler", frage: "Wie gehen Sie innerlich mit einem eigenen Fehler um?", antworten: {
    F: "Ich analysiere in Ruhe, wie es dazu kommen konnte.",
    X: "Ich frage mich, was das jetzt f\u00fcr Konsequenzen haben k\u00f6nnte.",
    S: "Ich will schnell weiterziehen und nicht lange daran h\u00e4ngen bleiben.",
    A: "Ich stehe offen dazu und handle sofort, um es zu regeln.",
    N: "Ich will vor allem, dass der Fehler keine gr\u00f6\u00dferen Wellen schl\u00e4gt.",
    E: "Ich mache mir selbst starke Vorw\u00fcrfe, bis ich ihn wiedergutgemacht habe.",
    Z: "Ich sorge mich vor allem, ob ich dadurch jemanden entt\u00e4uscht habe.",
    D: "Ich will ihn schnell korrigieren, damit er mein Bild nicht besch\u00e4digt.",
    V: "Ich frage mich, was der Fehler \u00fcber mich als Person aussagt.",
  }},
  { nr: 6, thema: "Pl\u00f6tzliche Ver\u00e4nderung", frage: "Wie reagieren Sie innerlich auf eine pl\u00f6tzliche, ungeplante Ver\u00e4nderung?", antworten: {
    X: "Ich will wissen, worauf ich mich jetzt noch verlassen kann.",
    S: "Ich sehe darin schnell auch neue, spannende M\u00f6glichkeiten.",
    A: "Ich \u00fcbernehme die F\u00fchrung, damit die Lage nicht au\u00dfer Kontrolle ger\u00e4t.",
    N: "Ich will vor allem innerlich ruhig bleiben, egal was kommt.",
    E: "Ich will schnell eine Ordnung finden, an der ich mich wieder ausrichten kann.",
    Z: "Ich frage mich sofort, wie es den Menschen um mich herum damit geht.",
    D: "Ich passe meinen Plan z\u00fcgig an, um weiter erfolgreich zu bleiben.",
    V: "Ich brauche erst Raum, um zu f\u00fchlen, was das f\u00fcr mich bedeutet.",
    F: "Ich ziehe mich zur\u00fcck, um die neue Lage erst zu durchdenken.",
  }},
  { nr: 7, thema: "Was Sie vermeiden wollen", frage: "Was m\u00f6chten Sie um fast jeden Preis vermeiden?", antworten: {
    S: "Eingeengt zu sein oder etwas Wichtiges zu verpassen.",
    A: "Kontrolliert oder schwach zu wirken.",
    N: "Streit oder einen Bruch in einer wichtigen Beziehung.",
    E: "Im Unrecht zu sein oder etwas falsch gemacht zu haben.",
    Z: "Nicht gebraucht oder nicht geliebt zu werden.",
    D: "Als erfolglos oder wertlos dazustehen.",
    V: "Gew\u00f6hnlich oder bedeutungslos zu wirken.",
    F: "\u00dcberfordert zu sein oder nicht genug zu wissen.",
    X: "Ohne Halt oder Unterst\u00fctzung dazustehen.",
  }},
  { nr: 8, thema: "N\u00e4he & Beziehungen", frage: "Was treibt Sie innerlich in engen Beziehungen am meisten an?", antworten: {
    A: "Ich will offen und ehrlich sein, auch wenn es unbequem ist.",
    N: "Ich will, dass zwischen uns nie echte Spannung entsteht.",
    E: "Ich will ein verl\u00e4sslicher, integrer Partner sein.",
    Z: "Ich will sp\u00fcren, dass ich wirklich gebraucht und geliebt werde.",
    D: "Ich will, dass mein Gegen\u00fcber stolz auf mich ist.",
    V: "Ich will wirklich gesehen werden, so wie ich innerlich bin.",
    F: "Ich brauche genug eigenen Raum, um nicht \u00fcberflutet zu werden.",
    X: "Ich will wissen, dass ich mich auf die Beziehung verlassen kann.",
    S: "Ich will, dass die Beziehung leicht und lebendig bleibt.",
  }},
  { nr: 9, thema: "Lob & Erfolg", frage: "Was bedeutet Lob oder Anerkennung innerlich wirklich f\u00fcr Sie?", antworten: {
    N: "Sch\u00f6n, vor allem, weil es zeigt, dass Harmonie zwischen uns herrscht.",
    E: "Best\u00e4tigung, dass ich es richtig gemacht habe.",
    Z: "Der Beweis, dass ich f\u00fcr andere wichtig bin.",
    D: "Der eigentliche Treibstoff, der mich weitermachen l\u00e4sst.",
    V: "Sch\u00f6n, aber nur, wenn es wirklich mein echtes Selbst trifft.",
    F: "Angenehm, aber ich brauche es nicht, um zu wissen, was ich kann.",
    X: "Beruhigend, weil es zeigt, dass ich auf dem richtigen Weg bin.",
    S: "Sch\u00f6n, aber ich bin schon beim n\u00e4chsten spannenden Ding.",
    A: "Nett, aber wichtiger ist mir, dass ich selbst wei\u00df, was ich geleistet habe.",
  }},
  { nr: 10, thema: "Ganz f\u00fcr sich", frage: "Was treibt Sie an, wenn wirklich niemand zuschaut und Sie ganz bei sich sind?", antworten: {
    E: "Der innere Anspruch, es auch dann richtig zu machen.",
    Z: "Die Frage, wie es den Menschen geht, die mir wichtig sind.",
    D: "Der Wunsch, an mir und meinen Zielen weiterzuarbeiten.",
    V: "Die Suche nach dem, was sich f\u00fcr mich wirklich echt anf\u00fchlt.",
    F: "Die Neugier, ein Thema wirklich zu durchdringen.",
    X: "Die Frage, worauf ich mich in Zukunft verlassen kann.",
    S: "Die Vorfreude auf das, was als N\u00e4chstes kommt.",
    A: "Der innere Drang, die Dinge selbst in die Hand zu nehmen.",
    N: "Das Bed\u00fcrfnis, endlich ganz zur Ruhe zu kommen.",
  }},
];

let schnellState = (() => {
  try {
    const saved = localStorage.getItem("kompass:schnellState");
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return { phase: "intro", qIndex: 0, answers: {} };
})();
function _saveSchnellState() {
  try { localStorage.setItem("kompass:schnellState", JSON.stringify(schnellState)); } catch(e) {}
}

function motivationsSchnelltestPage() {
  const ss = schnellState;

  if (ss.phase === "intro") {
    return shell(`
      ${pageHeader("motivations-schnelltest")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Motivations-Schnelltest \u00b7 schnelle Orientierung</p>
          <h1 class="typentest-titel">Was treibt Sie im Kern an?</h1>
          <p class="typentest-intro">Dieser kompakte Test fragt nicht danach, wie Sie sich verhalten, sondern <strong>warum</strong> Sie so handeln. W\u00e4hlen Sie bei jeder der 10 Fragen die eine Aussage, die Ihren inneren Antrieb am treffendsten beschreibt.</p>
          <div class="typentest-hinweis" style="margin-bottom:1.2rem;">
            <strong>Wichtiger Hinweis, bevor Sie starten:</strong> Dieser Schnelltest ersetzt nicht den ausf\u00fchrlichen <a href="javascript:void(0)" data-route="typentest-motivational">100-Fragen-Motivationstest</a>. Er gibt in wenigen Minuten eine erste Richtung \u2013 nicht mehr, aber auch nicht weniger. Verhalten allein verr\u00e4t wenig \u00fcber den Typ; erst das Motiv dahinter, das \u201eWarum\u201c, macht den Unterschied.
          </div>
          <ul class="typentest-hinweis" style="list-style:none;padding:0;margin:1.2rem 0;">
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; 10 Fragen aus unterschiedlichen Lebensbereichen</li>
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; Je Frage: eine Antwort, die am ehesten zutrifft</li>
            <li style="padding:0.35rem 0;">&#8226; Dauer: ca. 3&ndash;5 Minuten</li>
          </ul>
          ${bookTip("motivationaler-enneagramm-typentest", "Das Buch zum ausf\u00fchrlichen Test \u2013 motivationale Hintergr\u00fcnde, Auswertungshilfen und vertiefende Erl\u00e4uterungen zu allen 9 Typen.", "Motivationaler Enneagrammtypentest")}
          <button class="typentest-start-btn" data-schnell-start>Test starten &#8594;</button>
        </div>
      </div>
    `);
  }

  if (ss.phase === "test") {
    const total = MOTIV_SCHNELLTEST.length;
    const qi = ss.qIndex;
    const q = MOTIV_SCHNELLTEST[qi];
    const pct = Math.round((qi / total) * 100);
    const chosen = ss.answers[q.nr];
    const letters = Object.keys(q.antworten);

    const answerCards = letters.map(letter => {
      const isChosen = chosen === letter;
      return `<button class="motiv-answer${isChosen ? " motiv-answer--first" : ""}" data-schnell-answer="${letter}" data-schnell-qnr="${q.nr}">
        <span class="motiv-answer__text">${q.antworten[letter]}</span>
      </button>`;
    }).join("");

    return shell(`
      ${pageHeader("motivations-schnelltest")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <div class="motiv-progress">
            <span class="motiv-progress__label">Frage ${qi + 1} von ${total}</span>
            <div class="motiv-progress__track"><div class="motiv-progress__bar" style="width:${pct}%"></div></div>
          </div>
          <p class="eyebrow" style="margin-top:1.2rem;">Frage ${q.nr}: ${q.thema}</p>
          <p class="typentest-frage">${q.frage}</p>
          <p class="typentest-intro" style="margin-bottom:0.8rem;">W\u00e4hlen Sie die Aussage, die Ihr inneres <strong>Warum</strong> am treffendsten beschreibt.</p>
          <div class="motiv-answer-grid">
            ${answerCards}
          </div>
          <div class="typentest-cta-group" style="margin-top:1.5rem;">
            ${qi > 0 ? `<button class="ghost-link" data-schnell-back>&#8592; Zur\u00fcck</button>` : ""}
            <button class="typentest-start-btn" data-schnell-next ${chosen ? "" : "disabled"} style="${chosen ? "" : "opacity:0.45;cursor:not-allowed;"}">${qi < total - 1 ? "Weiter &#8594;" : "Ergebnis anzeigen &#8594;"}</button>
          </div>
        </div>
      </div>
    `);
  }

  if (ss.phase === "result") {
    const scores = {};
    for (let t = 1; t <= 9; t++) scores[t] = 0;
    for (const [, letter] of Object.entries(ss.answers)) {
      const t = LETTER_TO_TYPE[letter];
      if (t) scores[t] += 1;
    }
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topType = parseInt(sorted[0][0]);
    const topScore = sorted[0][1];
    const maxScore = topScore || 1;
    const col = typeColor(topType);

    const scoreBars = sorted.map(([typ, score], i) => {
      const pct = Math.round((score / maxScore) * 100);
      const highlight = i === 0 ? `style="background:${col}"` : "";
      return `
        <div class="motiv-score-row">
          <span class="motiv-score-label">Typ&nbsp;${typ}</span>
          <div class="motiv-score-track">
            <div class="motiv-score-bar ${i === 0 ? "motiv-score-bar--top" : ""}" ${highlight} style="width:${pct}%"></div>
          </div>
          <span class="motiv-score-num">${score}</span>
        </div>`;
    }).join("");

    return shell(`
      ${pageHeader("motivations-schnelltest")}
      <div class="typentest-wrap">
        <div class="typentest-card typentest-card--result">
          <p class="eyebrow">Ihr Ergebnis</p>
          <div class="typentest-result-badge" style="border-color:${col};color:${col}">${topType}</div>
          <h2 class="typentest-titel" style="color:${col}">${TYPNAMEN[topType]}</h2>
          <p class="typentest-intro">Ihre Antworten deuten auf <strong>Typ&nbsp;${topType}</strong> hin. Bei nur 10 Fragen ist das ein erster Hinweis, kein Beweis.</p>

          <div style="display:grid;gap:0.4rem;margin:1.2rem 0;">${scoreBars}</div>

          <div class="typentest-disclaimer" style="margin-top:0.5rem;">
            <strong>Zur Einordnung:</strong> Dieser Schnelltest ersetzt nicht den ausf\u00fchrlichen 100-Fragen-Test. Wenn zwei oder drei Typen nah beieinanderliegen, lohnt sich der lange Test oder eine pers\u00f6nliche Typisierungsberatung.
          </div>

          <div class="typentest-cta-group">
            <button class="primary" style="background:${col};border-color:${col}" data-route="type/${topType}">Zum Typ&nbsp;${topType} im Kompass &#8594;</button>
            <button class="ghost-link" data-route="typentest-motivational">Ausf\u00fchrlichen 100-Fragen-Test machen &#8594;</button>
          </div>

          <button class="ghost-link" data-schnell-reset>Test wiederholen</button>
          <button class="ghost-link" data-route="dashboard">&#8592; Zum Dashboard</button>
        </div>
      </div>
    `);
  }

  return shell(`${pageHeader("motivations-schnelltest")}<div class="typentest-wrap"><p>Fehler im Test.</p></div>`);
}

function bindSchnelltest() {
  document.querySelector("[data-schnell-start]")?.addEventListener("click", () => {
    schnellState = { phase: "test", qIndex: 0, answers: {} };
    _saveSchnellState();
    history.pushState({test:true}, "");
    render();
  });

  document.querySelector("[data-schnell-next]")?.addEventListener("click", () => {
    if (schnellState.qIndex < MOTIV_SCHNELLTEST.length - 1) {
      schnellState.qIndex++;
    } else {
      schnellState.phase = "result";
    }
    _saveSchnellState();
    history.pushState({test:true}, "");
    render();
  });

  document.querySelector("[data-schnell-back]")?.addEventListener("click", () => {
    if (schnellState.qIndex > 0) { schnellState.qIndex--; render(); }
  });

  document.querySelectorAll("[data-schnell-answer]").forEach(btn => {
    btn.addEventListener("click", () => {
      const letter = btn.dataset.schnellAnswer;
      const nr = parseInt(btn.dataset.schnellQnr);
      schnellState.answers[nr] = letter;
      _saveSchnellState();
      render();
    });
  });

  document.querySelector("[data-schnell-reset]")?.addEventListener("click", () => {
    schnellState = { phase: "intro", qIndex: 0, answers: {} };
    localStorage.removeItem("kompass:schnellState");
    render();
  });
}

// \u2500\u2500 TYPENTEST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function typentestMotivationalPage() {
  const ms = motivState;

  // \u2500\u2500 Phase: Intro \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  if (ms.phase === "intro") {
    return shell(`
      ${pageHeader("typentest-motivational")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Motivationaler Enneagrammtypentest \u00b7 f\u00fcr Fortgeschrittene</p>
          <h1 class="typentest-titel">Den tieferen Antrieb erkennen</h1>
          <p class="typentest-intro">Dieser Test fragt nach Ihren Motivationen, nicht nach Ihrem Verhalten. W\u00e4hlen Sie bei jeder der 100 Fragen die zwei Aussagen, die am ehesten auf Sie zutreffen.</p>
          <div class="typentest-hinweis" style="margin-bottom:1.2rem;">
            <strong>Wichtiger Hinweis, bevor Sie starten:</strong> Auch dieser Test \u2013 so ausf\u00fchrlich er ist \u2013 kann Ihren Typ nicht beweisen. Sie bewerten sich selbst, und wir alle sind f\u00fcr unsere eigenen psychologischen und seelischen Anteile oft blind. Eine Falschtypisierung kann mehr schaden als n\u00fctzen: Wer mit dem falschen Typ durch die Welt geht, interpretiert sich und andere durch eine verzerrte Linse. Nehmen Sie das Ergebnis deshalb als erste Orientierung \u2013 nicht als endg\u00fcltige Wahrheit. Erst wenn ein Typ sich \u00fcber l\u00e4ngere Zeit von innen heraus stimmig anf\u00fchlt, darf man ihm trauen.
          </div>
          <ul class="typentest-hinweis" style="list-style:none;padding:0;margin:1.2rem 0;">
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; 100 Fragen aus verschiedenen Lebensbereichen</li>
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; Je Frage: 1.&nbsp;Wahl (am wichtigsten) + 2.&nbsp;Wahl (zweitwichtigsten)</li>
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; Dauer: ca. 20&ndash;30 Minuten</li>
            <li style="padding:0.35rem 0;">&#8226; Empfehlung: Ruhige Atmosph\u00e4re, ehrliche Antworten</li>
          </ul>
          ${bookTip("motivationaler-enneagramm-typentest", "Das Buch zum Test \u2013 motivationale Hintergr\u00fcnde, Auswertungshilfen und vertiefende Erl\u00e4uterungen zu allen 9 Typen.", "Motivationaler Enneagrammtypentest")}
          <button class="typentest-start-btn" data-motiv-start>Test starten &#8594;</button>
        </div>
      </div>
    `);
  }

  // \u2500\u2500 Phase: Test \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  if (ms.phase === "test") {
    const total = MOTIVTEST.length;
    const qi = ms.qIndex;
    const q = MOTIVTEST[qi];
    const pct = Math.round((qi / total) * 100);
    const ans = ms.answers[q.nr] || {};
    const letters = Object.keys(q.antworten);

    const answerCards = letters.map(letter => {
      const isFirst = ans.first === letter;
      const isSecond = ans.second === letter;
      const cls = isFirst ? "motiv-answer motiv-answer--first"
                : isSecond ? "motiv-answer motiv-answer--second"
                : "motiv-answer";
      const badge = isFirst ? `<span class="motiv-answer__badge">1</span>`
                  : isSecond ? `<span class="motiv-answer__badge">2</span>`
                  : "";
      return `<button class="${cls}" data-motiv-answer="${letter}" data-motiv-qnr="${q.nr}">
        ${badge}
        <span class="motiv-answer__text">${q.antworten[letter]}</span>
      </button>`;
    }).join("");

    const hasTwo = ans.first && ans.second;
    const canNext = hasTwo;

    return shell(`
      ${pageHeader("typentest-motivational")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <div class="motiv-progress">
            <span class="motiv-progress__label">Frage ${qi + 1} von ${total}</span>
            <div class="motiv-progress__track"><div class="motiv-progress__bar" style="width:${pct}%"></div></div>
          </div>
          <p class="eyebrow" style="margin-top:1.2rem;">Frage ${q.nr}: ${q.thema}</p>
          <p class="typentest-frage">${q.frage}</p>
          <p class="typentest-intro" style="margin-bottom:0.8rem;">W\u00e4hlen Sie die <strong>zwei</strong> Aussagen, die am ehesten auf Sie zutreffen &ndash; zuerst die treffendste, dann die zweittreffendste.</p>
          <div class="motiv-answer-grid">
            ${answerCards}
          </div>
          <div class="typentest-cta-group" style="margin-top:1.5rem;">
            ${qi > 0 ? `<button class="ghost-link" data-motiv-back>&#8592; Zur\u00fcck</button>` : ""}
            <button class="typentest-start-btn" data-motiv-next ${canNext ? "" : "disabled"} style="${canNext ? "" : "opacity:0.45;cursor:not-allowed;"}">${qi < total - 1 ? "Weiter &#8594;" : "Ergebnis anzeigen &#8594;"}</button>
            <button class="ghost-link" data-motiv-skip style="font-size:0.8rem;opacity:0.6;">Frage \u00fcberspringen</button>
          </div>
        </div>
      </div>
    `);
  }

  // \u2500\u2500 Phase: Result \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  if (ms.phase === "result") {
    playMilestone("test-abgeschlossen");
    const scores = {};
    for (let t = 1; t <= 9; t++) scores[t] = 0;
    for (const [, ans] of Object.entries(ms.answers)) {
      if (ans.first)  { const t = LETTER_TO_TYPE[ans.first];  if (t) scores[t] += 6; }
      if (ans.second) { const t = LETTER_TO_TYPE[ans.second]; if (t) scores[t] += 3; }
    }
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topType = parseInt(sorted[0][0]);
    const topScore = sorted[0][1];
    const maxScore = topScore || 1;
    const top3 = sorted.slice(0, 3);

    const typColors = {
      1:"#7d593d",2:"#a5603d",3:"#30483d",4:"#5a4070",
      5:"#243948",6:"#607468",7:"#d4900a",8:"#8b2020",9:"#556b2f"
    };
    const typColor = typColors[topType] || "var(--copper)";

    const scoreBars = sorted.map(([typ, score], i) => {
      const pct = Math.round((score / maxScore) * 100);
      const highlight = i === 0 ? `style="background:${typColor}"` : "";
      return `
        <div class="motiv-score-row">
          <span class="motiv-score-label">Typ&nbsp;${typ}</span>
          <div class="motiv-score-track">
            <div class="motiv-score-bar ${i === 0 ? "motiv-score-bar--top" : ""}" ${highlight} style="width:${pct}%"></div>
          </div>
          <span class="motiv-score-num">${score}</span>
        </div>`;
    }).join("");

    return shell(`
      ${pageHeader("typentest-motivational")}
      <div class="typentest-wrap">
        <div class="typentest-card typentest-card--result">
          <p class="eyebrow">Ihr Ergebnis</p>
          <div class="typentest-result-badge" style="border-color:${typColor};color:${typColor}">${topType}</div>
          <h2 class="typentest-titel" style="color:${typColor}">${TYPNAMEN_MOTIV[topType]}</h2>
          <p class="typentest-intro">Ihre Auswertung deutet auf <strong>Typ&nbsp;${topType}</strong> hin. Das Ergebnis basiert auf Ihrer Selbsteinsch\u00e4tzung und ist als Orientierungshinweis zu verstehen.</p>

          <div class="typentest-disclaimer" style="margin-top:1.5rem;">
            <strong>Zur Einordnung:</strong> Kein Selbsttest kann den eigenen blinden Fleck vollst\u00e4ndig \u00fcberbr\u00fccken. Das Ergebnis ist ein <em>Hinweis</em>, kein Urteil. F\u00fcr eine pr\u00e4zise Bestimmung empfiehlt sich eine pers\u00f6nliche Typisierungsberatung.
          </div>

          <div class="typentest-cta-group">
            <button class="primary" style="background:${typColor};border-color:${typColor}" data-route="type/${topType}">Zum Typ&nbsp;${topType} im Kompass &#8594;</button>
            <p class="typentest-berater-label">Beratungstermin anfragen:</p>
            <a class="typentest-cta-btn" href="mailto:detlefrathmer@t-online.de?subject=Typisierungsberatung%20anfragen">&#9993; Beratungstermin bei Detlef Rathmer anfragen</a>
            <a class="typentest-cta-btn typentest-cta-btn--wa" href="https://wa.me/4915758786201?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp Detlef Rathmer</a>
            <a class="typentest-cta-btn" href="mailto:rathmer.david.business@gmail.com?subject=Typisierungsberatung%20anfragen">&#9993; Beratungstermin bei David L. Rathmer anfragen</a>
            <a class="typentest-cta-btn typentest-cta-btn--wa" href="https://wa.me/4915901902479?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp David L. Rathmer</a>
          </div>

          <button class="ghost-link" data-motiv-reset>Test wiederholen</button>
          <button class="ghost-link" data-route="dashboard">&#8592; Zum Dashboard</button>
        </div>
      </div>
    `);
  }

  return shell(`${pageHeader("typentest-motivational")}<div class="typentest-wrap"><p>Fehler im Test.</p></div>`);
}

function typentestPage() {
  if (!hasBasis()) { go("freischalt/basis"); return ""; }
  const ts = testState;
  const navBar = () => pageHeader("typentest");

  // Phase 0: Intro
  if (ts.phase === 0) {
    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Struktureller Enneagrammtypentest \u00b7 f\u00fcr Anf\u00e4nger</p>
          <h1 class="typentest-titel">Den Code deiner Pers\u00f6nlichkeit entschl\u00fcsseln</h1>
          <p class="typentest-intro">Dieser Test f\u00fchrt Sie in drei Schritten zu einem ersten Hinweis auf Ihren Enneagrammtyp und Instinktschwerpunkt. Er dauert etwa 7&ndash;10 Minuten.</p>
          <div class="typentest-hinweis">
            <strong>Wichtiger Hinweis, bevor Sie starten:</strong> Kein Test kann Ihren Typ wirklich beweisen \u2013 denn Sie f\u00fcllen ihn selbst aus, und wir alle sind f\u00fcr unsere eigenen psychologischen und seelischen Anteile oft blind. Das Ergebnis ist daher immer nur eine <em>Ann\u00e4herung</em>: Es macht Sie mit den Fragestellungen des Enneagramms vertraut und gibt einen ersten Orientierungshinweis. Je umfangreicher ein Test, desto n\u00e4her kommt er einer m\u00f6glichen Typenbestimmung \u2013 aber auch dieser Test ersetzt keine pers\u00f6nliche Begleitung oder Typisierungsberatung. Gehen Sie offen und neugierig in die Fragen \u2013 ohne den Anspruch, sofort die endg\u00fcltige Antwort zu finden.
          </div>
          <div class="typentest-steps">
            <div class="typentest-step"><span class="typentest-step__num">1</span><span>Triade erkennen <small>(Bauch \u00b7 Herz \u00b7 Kopf)</small></span></div>
            <div class="typentest-step"><span class="typentest-step__num">2</span><span>Typ innerhalb der Triade</span></div>
            <div class="typentest-step"><span class="typentest-step__num">3</span><span>Instinktschwerpunkt</span></div>
          </div>
          ${bookTip("der-code-deiner-persoenlichkeit", "Wie der Enneagrammtyp entsteht \u2013 und was er \u00fcber unsere tiefsten Pr\u00e4gungen verr\u00e4t.", "Der Code deiner Pers\u00f6nlichkeit")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          <button class="primary" id="tt-start">Test starten \u2192</button>
          <button class="ghost-link" data-route="dashboard">\u2190 Zur\u00fcck</button>
        </div>
      </div>
    `);
  }

  // Phase 1: Triadenwahl
  if (ts.phase === 1) {
    const triaden = Object.entries(TRIADEN);
    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Schritt 1 von 3 \u00b7 Triade</p>
          <h2 class="typentest-titel">Bauch, Herz oder Kopf?</h2>
          <p class="typentest-intro">Lesen Sie die drei Bl\u00f6cke aufmerksam. Welcher beschreibt Sie am besten &ndash; nicht wie Sie sein m\u00f6chten, sondern wie Sie <em>wirklich</em> sind?</p>
          <div class="typentest-triad-grid">
            ${triaden.map(([key, t]) => `
              <button class="typentest-triad-card" data-tt-triad="${key}">
                <div class="typentest-triad-card__label">${t.label}</div>
                <div class="typentest-triad-card__impuls">${t.grundimpuls}</div>
                <ul class="typentest-triad-card__list">
                  ${t.statements.map(s => `<li>${s}</li>`).join("")}
                </ul>
              </button>
            `).join("")}
          </div>
          <button class="ghost-link" id="tt-back-0">\u2190 Zur\u00fcck</button>
        </div>
      </div>
    `);
  }

  // Phase 2: Typfragen (5 Fragen, eine nach der anderen)
  if (ts.phase === 2) {
    const fragen = TYPFRAGEN[ts.triad];
    const qi = ts.qIndex;
    const frage = fragen[qi];
    const total = fragen.length;
    const pct = Math.round((qi / total) * 100);
    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Schritt 2 von 3 \u00b7 Frage ${qi + 1} von ${total}</p>
          <div class="typentest-progress"><div class="typentest-progress__bar" style="width:${pct}%"></div></div>
          <h2 class="typentest-frage">${frage.frage}</h2>
          <p class="typentest-intro">W\u00e4hlen Sie die Aussage, die am ehesten zutrifft &ndash; nicht die ideale, sondern die ehrlichste.</p>
          <div class="typentest-antworten">
            ${frage.antworten.map((a, i) => `
              <button class="typentest-antwort" data-tt-antwort="${a.typ}" data-tt-qi="${qi}">
                <span class="typentest-antwort__buchstabe">${["A","B","C"][i]}</span>
                <span class="typentest-antwort__text">${a.text}</span>
              </button>
            `).join("")}
          </div>
          ${qi > 0 ? `<button class="ghost-link" id="tt-back-q">\u2190 Vorherige Frage</button>` : `<button class="ghost-link" id="tt-back-1">\u2190 Zur Triaden-Auswahl</button>`}
        </div>
      </div>
    `);
  }

  // Phase 3: Instinkt
  if (ts.phase === 3) {
    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Schritt 3 von 3 \u00b7 Instinkt</p>
          <h2 class="typentest-titel">Dein Instinktschwerpunkt</h2>
          <p class="typentest-intro">Jeder Mensch tr\u00e4gt alle drei Instinkte in sich &ndash; aber einer dominiert. Welche Beschreibung trifft am ehesten auf Sie zu?</p>
          <div class="typentest-antworten">
            ${INSTINKTE.map(inst => `
              <button class="typentest-antwort" data-tt-instinkt="${inst.code}">
                <span class="typentest-antwort__buchstabe">${inst.code}</span>
                <div>
                  <strong class="typentest-antwort__label">${inst.label}</strong>
                  <span class="typentest-antwort__text">${inst.beschreibung}</span>
                </div>
              </button>
            `).join("")}
          </div>
          <button class="ghost-link" id="tt-back-2">\u2190 Zur\u00fcck</button>
        </div>
      </div>
    `);
  }

  // Phase 4: Ergebnis
  if (ts.phase === 4) {
    playMilestone("test-abgeschlossen");
    // Typ mit h\u00f6chstem Score ermitteln
    const scores = ts.scores;
    const topTyp = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
    const typNum = parseInt(topTyp);
    const typColor = TYPE_COLORS[typNum] || "var(--accent)";
    const typName = TYPNAMEN[typNum] || "";
    const typKurz = TYPKURZ[typNum] || "";
    const instCode = ts.instinkt || "";
    const instLabel = INSTINKTE.find(i => i.code === instCode)?.label || "";
    const subtypeCode = `${instCode.toLowerCase()}${typNum}`;
    const hasSubtype = !!subtypeDetails[subtypeCode];

    return shell(`
      ${navBar()}
      <div class="typentest-wrap">
        <div class="typentest-card typentest-card--result">
          <p class="eyebrow">Ihr Tipp-Typ</p>
          <div class="typentest-result-badge" style="border-color:${typColor};color:${typColor}">
            Typ ${typNum} \u00b7 ${instCode}
          </div>
          <h2 class="typentest-titel" style="color:${typColor}">${typName}</h2>
          <p class="typentest-subline">${instCode} &ndash; ${instLabel}</p>
          <p class="typentest-result-text">${typKurz}</p>

          <div class="typentest-disclaimer">
            <strong>Zur Einordnung:</strong> Dieser Test basiert auf Selbsteinsch\u00e4tzung. Da blinde Flecken zur Pers\u00f6nlichkeit geh\u00f6ren, ist das Ergebnis ein <em>Orientierungshinweis</em> \u2014 kein Urteil. Selbst sehr bewusste Menschen haben Schwierigkeiten, ihren eigenen Typ sicher zu bestimmen. F\u00fcr eine pr\u00e4zise Einsch\u00e4tzung empfiehlt sich eine pers\u00f6nliche Beratung.
          </div>

          <div class="typentest-cta-group">
            ${hasSubtype ? `<button class="primary" style="background:${typColor};border-color:${typColor}" data-route="subtype/${subtypeCode}">Zum Subtyp-Profil: ${instCode.toUpperCase()}${typNum} \u2192</button>` : `<button class="primary" style="background:${typColor};border-color:${typColor}" data-route="type/${typNum}">Zum Typ ${typNum} im Kompass \u2192</button>`}
            <p class="typentest-berater-label">Beratungstermin anfragen:</p>
            <a class="typentest-cta-btn" href="mailto:detlefrathmer@t-online.de?subject=Typisierungsberatung%20anfragen">\u2709 Beratungstermin bei Detlef Rathmer anfragen</a>
            <a class="typentest-cta-btn typentest-cta-btn--wa" href="https://wa.me/4915758786201?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp Detlef Rathmer</a>
            <a class="typentest-cta-btn" href="mailto:rathmer.david.business@gmail.com?subject=Typisierungsberatung%20anfragen">\u2709 Beratungstermin bei David L. Rathmer anfragen</a>
            <a class="typentest-cta-btn typentest-cta-btn--wa" href="https://wa.me/4915901902479?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp David L. Rathmer</a>
          </div>

          <button class="ghost-link" id="tt-restart">Test wiederholen</button>
          <button class="ghost-link" id="tt-merken" data-tt-code="${subtypeCode}">\u2726 Meinen Typ speichern</button>
          <button class="ghost-link" data-route="dashboard">\u2190 Zum Dashboard</button>
        </div>
      </div>
    `);
  }

  return shell(`${navBar()}<div class="typentest-wrap"><p>Fehler im Test.</p></div>`);
}

function bindTypentest() {
  const ts = testState;

  // Start
  document.getElementById("tt-start")?.addEventListener("click", () => {
    testState = { phase: 1, triad: null, scores: {}, instinkt: null, qIndex: 0 };
    render();
  });

  // Restart
  document.getElementById("tt-restart")?.addEventListener("click", () => {
    testState = { phase: 0, triad: null, scores: {}, instinkt: null, qIndex: 0 };
    render();
  });

  // Typ merken
  document.getElementById("tt-merken")?.addEventListener("click", () => {
    const btn = document.getElementById("tt-merken");
    const code = btn.dataset.ttCode;
    localStorage.setItem("enneagramm-kompass:profile", code);
    localStorage.setItem("enneagramm-kompass:visited", "1");
    btn.textContent = "\u2713 Gespeichert \u2013 auf dem Dashboard immer erreichbar";
    btn.disabled = true;
  });

  // Triaden-Auswahl
  document.querySelectorAll("[data-tt-triad]").forEach(btn => {
    btn.addEventListener("click", () => {
      testState.triad = btn.dataset.ttTriad;
      testState.phase = 2;
      testState.qIndex = 0;
      testState.scores = {};
      history.pushState({test:true}, "");
      render();
    });
  });

  // Antworten Phase 2
  document.querySelectorAll("[data-tt-antwort]").forEach(btn => {
    btn.addEventListener("click", () => {
      const typ = parseInt(btn.dataset.ttAntwort);
      testState.scores[typ] = (testState.scores[typ] || 0) + 1;
      const total = TYPFRAGEN[testState.triad].length;
      if (testState.qIndex < total - 1) {
        testState.qIndex++;
        history.pushState({test:true}, "");
        render();
      } else {
        testState.phase = 3;
        history.pushState({test:true}, "");
        render();
      }
    });
  });

  // Instinkt-Auswahl
  document.querySelectorAll("[data-tt-instinkt]").forEach(btn => {
    btn.addEventListener("click", () => {
      testState.instinkt = btn.dataset.ttInstinkt;
      testState.phase = 4;
      history.pushState({test:true}, "");
      render();
    });
  });

  // Zur\u00fcck-Navigation
  document.getElementById("tt-back-0")?.addEventListener("click", () => { testState.phase = 0; render(); });
  document.getElementById("tt-back-1")?.addEventListener("click", () => { testState.phase = 1; testState.qIndex = 0; render(); });
  document.getElementById("tt-back-2")?.addEventListener("click", () => { testState.phase = 2; testState.qIndex = TYPFRAGEN[testState.triad].length - 1; render(); });
  document.getElementById("tt-back-q")?.addEventListener("click", () => { if (testState.qIndex > 0) { testState.qIndex--; render(); } });
}

function _saveMotivState() {
  try { localStorage.setItem("kompass:motivState", JSON.stringify(motivState)); } catch(e) {}
}

function bindMotivtest() {
  // Intro \u2192 Start
  document.querySelector("[data-motiv-start]")?.addEventListener("click", () => {
    motivState = { phase: "test", qIndex: 0, answers: {} };
    _saveMotivState();
    history.pushState({test:true}, "");
    render();
  });

  // Weiter / Ergebnis
  document.querySelector("[data-motiv-next]")?.addEventListener("click", () => {
    if (motivState.qIndex < MOTIVTEST.length - 1) {
      motivState.qIndex++;
    } else {
      motivState.phase = "result";
    }
    _saveMotivState();
    history.pushState({test:true}, "");
    render();
  });

  // Zur\u00fcck
  document.querySelector("[data-motiv-back]")?.addEventListener("click", () => {
    if (motivState.qIndex > 0) { motivState.qIndex--; render(); }
  });

  // \u00dcberspringen
  document.querySelector("[data-motiv-skip]")?.addEventListener("click", () => {
    if (motivState.qIndex < MOTIVTEST.length - 1) {
      motivState.qIndex++;
    } else {
      motivState.phase = "result";
    }
    render();
  });

  // Antwort ausw\u00e4hlen
  document.querySelectorAll("[data-motiv-answer]").forEach(btn => {
    btn.addEventListener("click", () => {
      const letter = btn.dataset.motivAnswer;
      const nr = parseInt(btn.dataset.motivQnr);
      const cur = motivState.answers[nr] || { first: null, second: null };
      if (cur.first === letter) {
        // Deselect first \u2192 second becomes first
        motivState.answers[nr] = { first: cur.second, second: null };
      } else if (cur.second === letter) {
        // Deselect second
        motivState.answers[nr] = { first: cur.first, second: null };
      } else if (!cur.first) {
        motivState.answers[nr] = { first: letter, second: cur.second };
      } else if (!cur.second) {
        motivState.answers[nr] = { first: cur.first, second: letter };
      } else {
        // Both taken \u2192 replace second
        motivState.answers[nr] = { first: cur.first, second: letter };
      }
      _saveMotivState();
      render();
    });
  });

  // Reset
  document.querySelector("[data-motiv-reset]")?.addEventListener("click", () => {
    motivState = { phase: "intro", qIndex: 0, answers: {} };
    localStorage.removeItem("kompass:motivState");
    render();
  });
}

// \u2500\u2500 DIAGNOSETEST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function diagnosetestPage() {
  const ds = diagnoseState;

  // \u2500\u2500 Phase: Intro \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  if (ds.phase === "intro") {
    return shell(`
      ${pageHeader("diagnosetest")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Enneagramm-Diagnose-Test</p>
          <h1 class="typentest-titel">Welcher Typ bin ich?</h1>
          <p class="typentest-intro">Dieser Test f\u00fchrt Sie durch neun Pers\u00f6nlichkeitsprofile. Kreuzen Sie bei jedem Abschnitt die Aussagen an, die auf Sie zutreffen. Am Ende zeigt Ihnen die Auswertung, welchem Enneagrammtyp Sie am n\u00e4chsten stehen.</p>
          <div class="typentest-hinweis" style="margin-bottom:1.2rem;">
            <strong>Wichtiger Hinweis, bevor Sie starten:</strong> Kein Test kann Ihren Typ wirklich beweisen \u2013 denn Sie f\u00fcllen ihn selbst aus, und wir sind f\u00fcr unsere eigenen psychologischen und seelischen Anteile oft blind. Das Ergebnis ist immer nur eine <em>Ann\u00e4herung</em>: eine Einladung, sich mit den Fragestellungen des Enneagramms vertraut zu machen. Gehen Sie offen in die Abschnitte \u2013 ohne den Anspruch, sofort die endg\u00fcltige Antwort zu finden.
          </div>
          <ul class="typentest-hinweis" style="list-style:none;padding:0;margin:1.2rem 0;">
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; 9 Abschnitte mit je ca. 28&ndash;30 Aussagen</li>
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; Kreuzen Sie alles an, was auf Sie zutrifft</li>
            <li style="padding:0.35rem 0;border-bottom:1px solid var(--line);">&#8226; Die Reihenfolge ist zuf\u00e4llig &ndash; kein Typ wird vorab benannt</li>
            <li style="padding:0.35rem 0;">&#8226; Dauer: ca. 10&ndash;15 Minuten</li>
          </ul>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
          <button class="typentest-start-btn" data-diag-start>Test starten &#8594;</button>
        </div>
      </div>
    `);
  }

  // \u2500\u2500 Phase: Step \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  if (ds.phase === "step") {
    const s = ds.step;
    const entry = DIAGNOSETEST[ds.order[s]];
    const typ = entry.typ;
    const checked = ds.checks[typ] || [];
    const pct = Math.round(((s + 1) / 9) * 100);
    const isLast = s === 8;

    const items = entry.aussagen.map((text, i) => {
      const isChecked = checked.includes(i);
      return `<label class="diag-item${isChecked ? " diag-item--checked" : ""}">
        <input type="checkbox" data-diag-check data-diag-idx="${i}"${isChecked ? " checked" : ""}>
        <span>${text}</span>
      </label>`;
    }).join("");

    return shell(`
      ${pageHeader("diagnosetest")}
      <div class="typentest-wrap">
        <div class="typentest-card">
          <p class="eyebrow">Abschnitt ${s + 1} von 9</p>
          <div style="width:100%;height:6px;background:rgba(114,102,90,0.15);border-radius:3px;margin:0.4rem 0 1.2rem;">
            <div style="width:${pct}%;height:6px;border-radius:3px;background:var(--copper,#a5603d);transition:width 0.3s;"></div>
          </div>
          <h2 class="typentest-titel" style="font-size:1.1rem;margin-bottom:0.3rem;">Welche Aussagen treffen auf Sie zu?</h2>
          <p class="typentest-intro" style="margin-bottom:0.8rem;">Kreuzen Sie alle Aussagen an, die Sie als zutreffend empfinden.</p>
          <div class="diag-list">${items}</div>
          <div class="diag-nav">
            ${s > 0 ? `<button class="typentest-start-btn" style="background:transparent;color:var(--copper,#a5603d);border:1.5px solid var(--copper,#a5603d);" data-diag-back>&#8592; Zur\u00fcck</button>` : `<span></span>`}
            <button class="typentest-start-btn" data-diag-next>${isLast ? "Ergebnis anzeigen &#8594;" : "Weiter &#8594;"}</button>
          </div>
        </div>
      </div>
    `);
  }

  // \u2500\u2500 Phase: Result \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  if (ds.phase === "result") {
    playMilestone("test-abgeschlossen");
    const scores = DIAGNOSETEST.map(entry => ({
      typ: entry.typ,
      name: entry.name,
      total: entry.aussagen.length,
      score: (ds.checks[entry.typ] || []).length,
    }));
    const sorted = [...scores].sort((a, b) => b.score - a.score);
    const winner = sorted[0];
    const maxScore = winner.score || 1;

    const bars = sorted.map((s, i) => `
      <li class="${i === 0 ? "is-top" : ""}">
        <span class="diag-scores__label">Typ ${s.typ} &ndash; ${s.name.replace("Der ", "").replace("Die ", "")}</span>
        <span class="diag-scores__bar-wrap"><span class="diag-scores__bar" style="width:${Math.round((s.score / maxScore) * 100)}%"></span></span>
        <span class="diag-scores__pts">${s.score}</span>
      </li>`).join("");

    return shell(`
      ${pageHeader("diagnosetest")}
      <div class="typentest-wrap">
        <div class="typentest-card typentest-card--result">
          <div class="diag-result__heading">
            <p class="eyebrow">Ihr Ergebnis</p>
            <div class="diag-result__typ">Typ ${winner.typ} &ndash; ${winner.name}</div>
            <p class="typentest-intro">Von ${winner.total} Aussagen haben Sie <strong>${winner.score}</strong> als zutreffend angekreuzt.</p>
            ${TYPKURZ[winner.typ] ? `<p style="font-size:0.95rem;line-height:1.6;color:var(--ink);margin:0.8rem 0 0;font-style:italic;">${TYPKURZ[winner.typ]}</p>` : ""}
          </div>
          <ul class="diag-scores">${bars}</ul>
          <div style="margin:1.5rem 0;background:linear-gradient(135deg,#f5e8cc,#eedda0);border:2px solid var(--gold);border-radius:12px;padding:1.4rem 1.2rem;text-align:left;">
            <p style="font-size:0.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);margin:0 0 .3rem;">M\u00f6chten Sie tiefer gehen?</p>
            <p style="font-family:'EB Garamond',serif;font-size:1.1rem;color:var(--ink);margin:0 0 .5rem;line-height:1.3;">Mit dem Vollzugang sehen Sie das komplette Profil Ihres Typs \u2014 Heilmittel, Schaubilder und alle 27 Subtypen.</p>
            <button class="cta-gold-btn" data-route="freischalt" style="background:var(--gold-dark);color:var(--copper);border:3px solid #8a5a1a;border-radius:10px;padding:.7rem 1.8rem;font-size:0.95rem;font-weight:700;cursor:pointer;font-family:'EB Garamond',serif;box-shadow:0 4px 14px rgba(0,0,0,.2);">Jetzt freischalten &#8594;</button>
          </div>
          <div class="typentest-cta-group" style="margin-top:1.5rem;display:flex;flex-direction:column;gap:0.7rem;">
            <p class="typentest-berater-label">Beratungstermin anfragen:</p>
            <a class="typentest-cta-btn" href="mailto:detlefrathmer@t-online.de?subject=Typisierungsberatung%20anfragen">\u2709 Beratungstermin bei Detlef Rathmer anfragen</a>
            <a class="typentest-cta-btn typentest-cta-btn--wa" href="https://wa.me/4915758786201?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp Detlef Rathmer</a>
            <a class="typentest-cta-btn" href="mailto:rathmer.david.business@gmail.com?subject=Typisierungsberatung%20anfragen">\u2709 Beratungstermin bei David L. Rathmer anfragen</a>
            <a class="typentest-cta-btn typentest-cta-btn--wa" href="https://wa.me/4915901902479?text=Ich%20m%C3%B6chte%20eine%20Typisierungsberatung%20anfragen." target="_blank" rel="noopener">WhatsApp David L. Rathmer</a>
            <button class="typentest-start-btn" style="background:transparent;color:var(--copper,#a5603d);border:1.5px solid var(--copper,#a5603d);" data-diag-reset>Test wiederholen</button>
            <button class="typentest-start-btn" data-route="start">Zur Startseite</button>
          </div>
        </div>
      </div>
    `);
  }

  return shell(`${pageHeader("diagnosetest")}<div class="typentest-wrap"><p>Fehler im Test.</p></div>`);
}

function bindDiagnosetest() {
  document.querySelector("[data-diag-start]")?.addEventListener("click", () => {
    const order = [0,1,2,3,4,5,6,7,8].sort(() => Math.random() - 0.5);
    diagnoseState = { phase: "step", step: 0, order, checks: {} };
    history.pushState({test:true}, "");
    render();
  });

  document.querySelector("[data-diag-next]")?.addEventListener("click", () => {
    if (diagnoseState.step < 8) {
      diagnoseState.step++;
    } else {
      diagnoseState.phase = "result";
    }
    history.pushState({test:true}, "");
    render();
  });

  document.querySelector("[data-diag-back]")?.addEventListener("click", () => {
    if (diagnoseState.step > 0) { diagnoseState.step--; render(); }
  });

  document.querySelectorAll("[data-diag-check]").forEach(cb => {
    cb.addEventListener("change", () => {
      const typ = DIAGNOSETEST[diagnoseState.order[diagnoseState.step]].typ;
      if (!diagnoseState.checks[typ]) diagnoseState.checks[typ] = [];
      const idx = parseInt(cb.dataset.diagIdx);
      const arr = diagnoseState.checks[typ];
      if (cb.checked) {
        if (!arr.includes(idx)) arr.push(idx);
      } else {
        const i = arr.indexOf(idx);
        if (i > -1) arr.splice(i, 1);
      }
      cb.closest(".diag-item")?.classList.toggle("diag-item--checked", cb.checked);
    });
  });

  document.querySelector("[data-diag-reset]")?.addEventListener("click", () => {
    diagnoseState = { phase: "intro", step: 0, order: [], checks: {} };
    render();
  });
}

// \u2500\u2500 PSYCHOGRAMME \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

const PSYCHOGRAMM_TYPEN = [
  { typ: 1, name: "Der Verbesserer",     kern: "Heilige Vollkommenheit \u00b7 Reinheit \u00b7 Richtigkeit" },
  { typ: 2, name: "Der Helfer",          kern: "Heiliger Wille \u00b7 Liebe zum Einssein" },
  { typ: 3, name: "Der Macher",          kern: "Heiliges Gesetz \u00b7 Echtheit \u00b7 Wahrhaftigkeit" },
  { typ: 4, name: "Der Individualist",   kern: "Heiliger Ursprung \u00b7 individueller Ausdruck des Seins" },
  { typ: 5, name: "Der Forscher",        kern: "Heiliges Allwissen \u00b7 Transparenz \u00b7 Klarheit" },
  { typ: 6, name: "Der Loyale",          kern: "Heiliger Glaube \u00b7 Vertrauen \u00b7 Sicherheit" },
  { typ: 7, name: "Der Enthusiast",      kern: "Heiliger Plan \u00b7 Freude \u00b7 Entfaltung" },
  { typ: 8, name: "Der Herausforderer",  kern: "Heilige Wahrheit \u00b7 St\u00e4rke" },
  { typ: 9, name: "Der Vermittler",      kern: "Heilige Liebe \u00b7 Harmonie \u00b7 W\u00fcrde \u00b7 Energie" },
];

function heilungswegPage() {
  return shell(`
    ${pageHeader("heilungsweg")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Enneagramm-Hom\xf6opathie</p>
      <h1 class="section-title">Der Heilungsweg des Menschen</h1>
      <p class="psycho-intro">Diese \xdcbersicht zeigt den Heilungsweg nach dem Modell der Enneagramm-Hom\xf6opathie von Detlef Rathmer: vom unbewussten Muster \xfcber die Erkenntnis der Leidenschaft bis zur Integration und Heilung.</p>
      <div class="psycho-img-wrap" style="margin:1.2rem 0 2.5rem;">
        <img src="./assets/schaubilder/heilungsweg/heilungsweg.jpg"
             alt="Der Heilungsweg des Menschen nach der Enneagramm-Hom\xf6opathie"
             class="psycho-img" style="border-radius:12px;" />
      </div>

      <div class="vb-section" style="max-width:100%;">

        <div class="vb-typ">
          <h3 class="vb-typ__head"><span class="vb-typ__nr">Ausgangspunkt</span> Die Essenz</h3>
          <p class="vb-typ__text">Der Heilungsweg beginnt nicht bei Symptomen, nicht bei Diagnosen und auch nicht bei Verhalten. Er beginnt bei etwas, das im medizinischen Alltag oft gemieden wird, weil es sich nicht messen l\xe4sst: bei der Essenz des Menschen. Gemeint ist damit kein abstraktes Ideal, sondern eine konkrete innere Qualit\xe4t des Seins &ndash; eine grundlegende Weise, wie ein Mensch urspr\xfcnglich in der Welt verankert ist. Diese Essenz ist nicht individuell im psychologischen Sinn, sondern archetypisch. Sie zeigt sich in neun Grundformen, neun Zug\xe4ngen zur Wirklichkeit, neun Weisen, Liebe zu verk\xf6rpern. Diese Essenz geht nicht verloren. Sie wird \xfcberlagert.</p>
        </div>

        <div class="vb-typ">
          <h3 class="vb-typ__head"><span class="vb-typ__nr">Die \xdcberlagerung</span> Entstehung des Egos</h3>
          <p class="vb-typ__text">In dem Moment, in dem das Kind erf\xe4hrt, dass sein Sein nicht bedingungslos gen\xfcgt, beginnt eine Verschiebung. Das innere Erleben trennt sich vom \xe4u\xdferen Leben. Statt aus dem Sein heraus zu handeln, beginnt der Mensch, sich \xfcber Anpassung, Leistung, R\xfcckzug, Kontrolle oder Verschmelzung zu regulieren. Das ist kein moralisches Versagen, sondern ein neurobiologisch und entwicklungspsychologisch plausibler Schutzmechanismus. Das Enneagramm beschreibt diesen Prozess nicht wertend, sondern pr\xe4zise.</p>
          <p class="vb-typ__text">Was dabei entsteht, ist das Ego &ndash; nicht als narzisstische Karikatur, sondern als funktionales Konstrukt. Es organisiert Wahrnehmung, Motivation und Handlung entlang eines zentralen Mangelerlebens. Jede Enneagrammstruktur sucht etwas im Au\xdfen, das im Inneren scheinbar verloren ging: Ordnung, Anerkennung, Identit\xe4t, Wissen, Sicherheit, Freiheit, Macht oder Frieden. Diese Suche ist von Anfang an zum Scheitern verurteilt, weil sie am falschen Ort stattfindet.</p>
        </div>

        <div class="vb-typ">
          <h3 class="vb-typ__head"><span class="vb-typ__nr">Die Leidenschaften</span> Fixierungen des Nervensystems</h3>
          <p class="vb-typ__text">Aus dieser Fehlorientierung entstehen die typischen Leidenschaften. Der Begriff wird oft missverstanden. Es geht nicht um Emotionen im engeren Sinn, sondern um chronische innere Spannungszust\xe4nde, um Fixierungen des Nervensystems. Zorn, Stolz, Neid, Angst oder Tr\xe4gheit sind keine Charakterschw\xe4chen, sondern energetische Dauermuster. Sie treiben an, verengen die Wahrnehmung und halten das System stabil &ndash; solange die urspr\xfcngliche Essenz nicht wieder zug\xe4nglich ist. In der klinischen Realit\xe4t begegnen sie uns als Symptome, als Konflikte, als Ersch\xf6pfung, als psychosomatische Dynamiken.</p>
        </div>

        <div class="vb-typ">
          <h3 class="vb-typ__head"><span class="vb-typ__nr">Der hom\xf6opathische Ansatz</span> Resonanz statt Symptombehandlung</h3>
          <p class="vb-typ__text">Hom\xf6opathie arbeitet seit jeher nicht prim\xe4r gegen Symptome, sondern mit Resonanz. Sie adressiert das Lebendige im Menschen, nicht die Pathologie als isoliertes Objekt. Die Enneagramm-Hom\xf6opathie verbindet diese Sichtweise mit einer differenzierten Typologie des Bewusstseins. Das Heilmittel wirkt nicht gegen Zorn oder Angst, sondern auf das energetische Gleichgewicht zwischen Instinkt, Leidenschaft und Essenz.</p>
          <p class="vb-typ__text">Besonders relevant sind dabei die Instinktvarianten. Selbsterhaltung, Sozialit\xe4t und Beziehung sind keine Zusatzmerkmale, sondern die energetischen Tr\xe4ger der Leidenschaften. Sie bestimmen, wo ein Mensch seinen Schwerpunkt setzt, wo er \xfcberkompensiert und wo er am verletzlichsten ist. Zwei Menschen mit demselben Enneagrammtyp k\xf6nnen klinisch v\xf6llig unterschiedlich erscheinen, weil ihre Instinktstruktur eine andere ist.</p>
        </div>

        <div class="vb-typ">
          <h3 class="vb-typ__head"><span class="vb-typ__nr">Was Heilung bedeutet</span> F\xfchrung zur\xfcckgeben</h3>
          <p class="vb-typ__text">Heilung bedeutet in diesem Modell nicht, das Ego zu zerst\xf6ren oder Leidenschaften zu unterdr\xfccken. Das w\xe4re naiv und therapeutisch kontraproduktiv. Heilung hei\xdft, die F\xfchrung schrittweise zur\xfcckzugeben &ndash; weg vom reflexhaften Reagieren, hin zu einer inneren Pr\xe4senz, die wieder Wahlm\xf6glichkeiten er\xf6ffnet. Die sogenannten heiligen Ideen sind dabei keine metaphysischen Konzepte, sondern korrigierende Wahrnehmungsweisen. Sie zeigen, wie Realit\xe4t jenseits der egoischen Verzerrung erlebt werden kann. Nicht als Ziel, sondern als Erinnerung.</p>
          <p class="vb-typ__text">Der Weg dorthin ist kein linearer Entwicklungsplan und keine spirituelle Erfolgsgeschichte. Er ist br\xfcchig, oft unbequem und konfrontierend. Er nimmt den Menschen ernst, ohne ihn zu schonen. Wer liebgewonnene Selbstbilder aufgibt, Sicherheiten verliert und das eigene Leiden nicht l\xe4nger rechtfertigt, \xf6ffnet sich f\xfcr eine Ver\xe4nderung, die von innen kommt.</p>
        </div>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1rem;">
          <p class="vb-intro">Die Enneagramm-Hom\xf6opathie versteht Krankheit als Ausdruck einer inneren Entfremdung &ndash; nicht im romantischen Sinn, sondern als reale, erfahrbare Spaltung zwischen Wesen und Leben. Das Heilmittel unterst\xfctzt nicht die Anpassung an ein dysfunktionales Gleichgewicht, sondern f\xf6rdert eine Reorganisation von innen. Wenn das gelingt, ver\xe4ndern sich Symptome oft bei\xe4ufig. Nicht, weil sie bek\xe4mpft wurden, sondern weil sie ihren Sinn verloren haben.</p>
        </div>

        <div style="border-left:3px solid var(--gold);padding:.9rem 1.1rem;margin:1.8rem 0;background:var(--paper);border-radius:0 8px 8px 0;">
          <p style="margin:0;font-size:.92rem;color:var(--ink);line-height:1.8;font-style:italic;">Das ist kein schneller Weg. Und er ist nicht f\xfcr jeden. Aber er ist konsequent. Und er ist ehrlich.</p>
        </div>

      </div>
      ${relatedLinks([
        {route:"leidenschaft-und-wunde", label:"Leidenschaft & Wunde"},
        {route:"wunden", label:"Wunden & Schutzstrategien"},
        {route:"bewusstseinsuebungen", label:"Bewusstseins\u00fcbungen"},
      ])}
    </div>
  `);
}

function kindlicheTemperamentePage() {
  return shell(`
    ${pageHeader("kindliche-temperamente")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Entwicklungspsychologie</p>
      <h1>Die neun kindlichen Temperamente</h1>
      <p class="lead-small">Die Chess-&amp;-Thomas-Studie (New Yorker L\u00e4ngsschnittstudie, ab 1956) untersuchte unabh\u00e4ngig vom Enneagramm kindliche Temperamente von Geburt an. Sie zeigt: Diese Grundanlagen sind angeboren und spiegeln sich in den neun Enneagrammtypen wider.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/kindliche-temperamente/temperamente.jpg"
             alt="Die neun kindlichen Temperamente nach Chess"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"kindheitsperspektiven", label:"Kindheitsperspektiven"},
        {route:"kindheit", label:"Kindheit"},
        {route:"wunden", label:"Wunden & Schutzstrategien"},
      ])}
    </section>
  `);
}

function kindheitsperspektivenPage() {
  return shell(`
    ${pageHeader("kindheitsperspektiven")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Kindheitsperspektiven</p>
      <h1>Die subjektiven Wahrnehmungen der 9 Enneagrammtypen in ihrer Kindheit</h1>
      <p class="lead-small">Wie hat jeder Enneagrammtyp seine Kindheit erlebt? Diese \u00dcbersicht zeigt die typischen Kindheitsperspektiven \u2014 die pr\u00e4genden subjektiven Wahrnehmungen, die das sp\u00e4tere Denken, F\u00fchlen und Verhalten tief beeinflussen.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/kindheitsperspektiven/kindheitsperspektiven.jpg"
             alt="Die subjektiven Wahrnehmungen der 9 Enneagrammtypen in ihrer Kindheit"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Jeder der drei Enneagramm-Zentren tr\u00e4gt eine eigene kindliche Grundemotion in sich: Die Bauchtriade (Typ 8, 9, 1) reagiert mit Zorn, Wut und Groll auf die Welt. Die Herztriade (Typ 2, 3, 4) tr\u00e4gt Traurigkeit, Kummer um einen Verlust und emotionalen Schmerz in sich. Die Kopftriade (Typ 5, 6, 7) lebt in Angst, Furcht und Unsicherheit. Aus diesen fr\u00fchen Grundgef\u00fchlen heraus entwickelte jeder Typ eine ganz eigene, oft unbewusste \u00dcberzeugung dar\u00fcber, wie die Welt ist \u2014 ein subjektiver Kindheitseindruck, der bis auf den heutigen Tag nachwirkt.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#5f5f5f;">Typ 1 &ndash; Zorn / Perfektion</h3>
        <p class="vb-intro">\u201eDie Welt bestraft schlechte Einstellungen und alles Spontane.\u201c Der junge Typ 1 erlebt seine Umwelt als streng bewertend \u2014 Fehler werden sanktioniert, Spontaneit\u00e4t wirkt gef\u00e4hrlich. Daraus entsteht die Leidenschaft des Zorns und die Motivation, durch Perfektion Sicherheit und Anerkennung zu gewinnen.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#7a2fa8;">Typ 2 &ndash; Stolz / Liebe</h3>
        <p class="vb-intro">\u201eDie anderen \u00fcbersehen mich. Ich werde zu wenig geliebt.\u201c Der junge Typ 2 f\u00fchlt sich in seinem Bed\u00fcrftig-Sein nicht ausreichend gesehen und entwickelt daraufhin die Leidenschaft des Stolzes: Liebe wird fortan aktiv erarbeitet, indem man sich f\u00fcr andere unentbehrlich macht.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#1fa688;">Typ 3 &ndash; Eitelkeit / Erfolg</h3>
        <p class="vb-intro">\u201eDie anderen lieben mich nur, weil ich etwas Bestimmtes tue.\u201c Zuwendung erscheint dem jungen Typ 3 an Leistung gekoppelt \u2014 nicht das Sein, sondern das Tun wird belohnt. Daraus entsteht die Leidenschaft der Eitelkeit und die Motivation, Erfolg als Liebesbeweis zu erbringen.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#3cbf1f;">Typ 4 &ndash; Neid / Individualit\u00e4t</h3>
        <p class="vb-intro">\u201eMan hat mich verlassen, allein gelassen.\u201c Ein fr\u00fcher Verlust oder ein Gef\u00fchl des Getrennt-Seins pr\u00e4gt den jungen Typ 4. Daraus w\u00e4chst die Leidenschaft des Neids \u2014 die schmerzliche Sehnsucht nach dem, was andere zu haben scheinen \u2014 und die Motivation, die eigene Individualit\u00e4t als Ausgleich zu behaupten.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#124fcc;">Typ 5 &ndash; Geiz / Wissen</h3>
        <p class="vb-intro">\u201eDie Welt ist erdr\u00fcckend, \u00e4u\u00dfere Einfl\u00fcsse \u00fcberw\u00e4ltigen mich regelm\u00e4\u00dfig.\u201c Der junge Typ 5 erlebt die Anforderungen der Welt als \u00fcbergriffig und ersch\u00f6pfend. Er zieht sich zur\u00fcck, hortet seine Energie \u2014 die Leidenschaft des Geizes \u2014 und sucht in Wissen einen sicheren, kontrollierbaren Ersatzraum.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#8a5222;">Typ 6 &ndash; Angst / Sicherheit</h3>
        <p class="vb-intro">\u201eIch bin verraten worden. Die Welt ist b\u00f6se und unzuverl\u00e4ssig.\u201c Ein fr\u00fcher Vertrauensbruch pr\u00e4gt den jungen Typ 6 nachhaltig. Daraus entsteht die Leidenschaft der Angst und ein lebenslanges Streben nach Sicherheit \u2014 durch Wachsamkeit, durch verl\u00e4ssliche Bindungen oder durch aktive Konfrontation der Gefahr.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#d4a800;">Typ 7 &ndash; V\u00f6llerei / Spa\u00df</h3>
        <p class="vb-intro">\u201eIch leide unter den Grenzen dieser Welt, die mich einengt.\u201c Der junge Typ 7 erlebt Begrenzung als Schmerz und flieht in Vielfalt, Optionen und Vergn\u00fcgen. Daraus entsteht die Leidenschaft der V\u00f6llerei \u2014 der unstillbare Hunger nach immer neuen, angenehmen Erfahrungen als Gegenmittel gegen Enge und Schmerz.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#a00802;">Typ 8 &ndash; Wollust / Macht</h3>
        <p class="vb-intro">\u201eDie Welt ist hart und ungerecht; als ich schwach war, hat man mich missbraucht.\u201c Eine fr\u00fche Erfahrung von Ohnmacht pr\u00e4gt den jungen Typ 8 tief. Er schw\u00f6rt sich, nie wieder verletzlich zu erscheinen \u2014 daraus entsteht die Leidenschaft der Wollust (\u00dcberma\u00df, Intensit\u00e4t) und das Streben nach Macht und Kontrolle.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#cc6e00;">Typ 9 &ndash; Tr\u00e4gheit / Harmonie</h3>
        <p class="vb-intro">\u201eDie anderen lehnen mich ab, wenn ich meine eigene Meinung \u00e4u\u00dfere.\u201c Der junge Typ 9 lernt fr\u00fch, dass die eigene Position Konflikt und Ablehnung bedeuten kann. Er l\u00f6st sich lieber selbst auf, um Harmonie zu erhalten \u2014 daraus entsteht die Leidenschaft der Tr\u00e4gheit gegen\u00fcber dem eigenen Willen.</p>

        <p class="vb-anmerkung" style="margin-top:1.5rem;font-style:italic;">\u201eIn jedem Kind tr\u00e4umt Gott den Traum der Liebe.\u201c (Unbekannt)</p>
      </div>
      ${bookTip("in-der-tiefe-der-zeit", "Wie pr\u00e4gende Kindheitserfahrungen die Pers\u00f6nlichkeitsstruktur jedes Enneagrammtyps formen.", "In der Tiefe der Zeit")}
      ${relatedLinks([
        {route:"kindliche-temperamente", label:"Kindliche Temperamente"},
        {route:"kindheit", label:"Kindheit"},
        {route:"kerneberzeugungen", label:"Kern\u00fcberzeugungen"},
      ])}
    </section>
  `);
}

function kerneberzeugungPage() {
  return shell(`
    ${pageHeader("kerneberzeugungen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Kern\u00fcberzeugungen</p>
      <h1>Die tiefsten Kern\u00fcberzeugungen der 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp tr\u00e4gt eine oft unbewusste Grund\u00fcberzeugung \u00fcber sich und die Welt in sich &ndash; sie entstand in der Kindheit und steuert seither das Denken, F\u00fchlen und Handeln. Diese \u00dcbersicht zeigt die Kern\u00fcberzeugung jedes der 9 Typen im Zusammenhang mit der Triaden-Struktur.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/kerneberzeugungen/kerneberzeugungen.jpg"
             alt="Die tiefsten Kern\u00fcberzeugungen der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Jede Kern\u00fcberzeugung ist ein Satz, den der jeweilige Typ nie laut ausspricht \u2014 und der doch, meist unbewusst, sein gesamtes Denken, F\u00fchlen und Handeln steuert. Sie ist die innere Logik hinter der Leidenschaft und der Motivation jedes Typs.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#5f5f5f;">Typ 1 &ndash; Der Perfektionist</h3>
        <p class="vb-intro">\u201eIch habe sicher einige M\u00e4ngel, aber ich tue alles, um Fehler/Irrt\u00fcmer zu vermeiden.\u201c Fehler sind f\u00fcr den Typ 1 kein neutraler Teil des Lebens, sondern eine Bedrohung der eigenen Integrit\u00e4t \u2014 deshalb die st\u00e4ndige innere Kontrolle und der Anspruch, es richtig zu machen.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#7a2fa8;">Typ 2 &ndash; Der Altruist</h3>
        <p class="vb-intro">\u201eWozu lohnt es sich \u00fcberhaupt zu leben, wenn man nicht f\u00fcr andere Menschen da sein kann?\u201c Der eigene Wert ist f\u00fcr den Typ 2 untrennbar an das Gebrauchtwerden gebunden \u2014 F\u00fcrsorge ist hier nicht nur Handlung, sondern Existenzberechtigung.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#1fa688;">Typ 3 &ndash; Der Erfolgreiche</h3>
        <p class="vb-intro">\u201eSpa\u00df an der Arbeit ist der Weg zum Erfolg.\u201c Der Typ 3 verschmilzt mit seiner Leistung so vollst\u00e4ndig, dass Arbeit selbst zur Quelle von Freude und Identit\u00e4t wird \u2014 Stillstand f\u00fchlt sich dagegen wie Bedeutungslosigkeit an.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#3cbf1f;">Typ 4 &ndash; Der Romantiker</h3>
        <p class="vb-intro">\u201eJeder Schmerz ist besser als der des Herzens.\u201c F\u00fcr den Typ 4 ist emotionale Taubheit schlimmer als Leid \u2014 lieber f\u00fchlt er die Tiefe des Schmerzes vollst\u00e4ndig, als in oberfl\u00e4chlicher Gef\u00fchllosigkeit zu verharren.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#124fcc;">Typ 5 &ndash; Der Beobachter</h3>
        <p class="vb-intro">\u201eNur durch blo\u00dfes Zuschauen kann man eine Menge lernen.\u201c Der Typ 5 zieht sich in die Beobachterposition zur\u00fcck, weil er glaubt, dass Distanz Klarheit schafft \u2014 Verstehen geht dem Handeln immer voraus.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#8a5222;">Typ 6 &ndash; Der Loyale</h3>
        <p class="vb-intro">\u201eOhne Zweifel keine Sicherheit.\u201c F\u00fcr den Typ 6 ist Misstrauen kein Makel, sondern ein Schutzmechanismus \u2014 nur wer alles hinterfragt, kann sicher sein, nicht get\u00e4uscht zu werden.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#d4a800;">Typ 7 &ndash; Der Epikureer</h3>
        <p class="vb-intro">\u201eMan lebt schlie\u00dflich nur einmal \u2013 machen wir das Beste daraus!\u201c Der Typ 7 begegnet der Endlichkeit des Lebens mit einem entschlossenen Ja zur F\u00fclle \u2014 jede Erfahrung, jede M\u00f6glichkeit soll ausgekostet werden, bevor die Zeit verrinnt.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#a00802;">Typ 8 &ndash; Der Boss</h3>
        <p class="vb-intro">\u201eEin Recht, das man hat, erbettelt man sich nicht. Man k\u00e4mpft darum.\u201c F\u00fcr den Typ 8 ist Passivit\u00e4t gleichbedeutend mit Schw\u00e4che \u2014 wer etwas will, muss es sich mit Kraft und Entschlossenheit nehmen, statt darauf zu hoffen, dass es einem gegeben wird.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#cc6e00;">Typ 9 &ndash; Der Vermittler</h3>
        <p class="vb-intro">\u201eGott hat dem Menschen die Zeit gegeben, aber von Eile hat er nichts gesagt.\u201c Der Typ 9 lehnt inneren wie \u00e4u\u00dferen Druck instinktiv ab \u2014 echte Dinge, glaubt er, brauchen ihre Zeit und lassen sich nicht erzwingen.</p>

        <p class="vb-anmerkung" style="margin-top:1.5rem;font-style:italic;">\u201eDie \u00dcberzeugung ist das Gewissen des Geistes.\u201c (Nikolas Chamfort, 1741&ndash;1794)</p>
      </div>
      ${bookTip("du-bist-nicht-dein-zweifel", "Kern\u00fcberzeugungen erkennen und loslassen &ndash; ein Wegweiser zu innerer Freiheit f\u00fcr alle 9 Typen.", "Du bist nicht dein Zweifel")}
      ${relatedLinks([
        {route:"kindheitsperspektiven", label:"Kindheitsperspektiven"},
        {route:"wunden", label:"Wunden & Schutzstrategien"},
        {route:"ego-fixierungen", label:"Ego-Fixierungen"},
      ])}
    </section>
  `);
}

function lebensgluckPage() {
  return shell(`
    ${pageHeader("lebensgluck")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Lebensgl\u00fcck</p>
      <h1>Wahres Lebensgl\u00fcck</h1>
      <p class="lead-small">An welcher Stelle werden die 9 Enneagrammtypen ihr wahres Lebensgl\u00fcck finden? Nicht im Au\u00dfen &ndash; sondern dort, wo die tiefste Sehnsucht jedes Typs wirklich beheimatet ist: in sich selbst.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/lebensgluck/lebensgluck.jpg"
             alt="Wahres Lebensgl\u00fcck &ndash; wo die 9 Enneagrammtypen es finden"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"intrinsisches-verlangen", label:"Intrinsisches Verlangen"},
        {route:"frustrationen", label:"Frustrationen"},
        {route:"frieden-schliessen", label:"Frieden schlie\u00dfen"},
      ])}
    </section>
  `);
}

function basisemotionenPage() {
  return shell(`
    ${pageHeader("basisemotionen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Psychologie</p>
      <h1>Vermeidung der Basis-Emotionen</h1>
      <p class="lead-small">Jeder Mensch verdr\u00e4ngt bestimmte Emotionen &ndash; nicht aus Schw\u00e4che, sondern weil sie gesellschaftlich nicht anerkannt sind. Jeder Enneagrammtyp entwickelt daf\u00fcr charakteristische psychologische Abwehrmechanismen. Was nicht gef\u00fchlt werden darf, manifestiert sich: Krankheiten und Symptome sind oft Ausdruck nicht gelebter Emotionen.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/basisemotionen/basisemotionen.jpg"
             alt="Die Vermeidung der Basis-Emotionen der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"frustrationen", label:"Frustrationen"},
        {route:"mangelgefuehle", label:"Mangelgef\u00fchle"},
        {route:"angst-essenz", label:"Angst-Essenz"},
      ])}
    </section>
  `);
}

function intrinsischesVerlangenPage() {
  return shell(`
    ${pageHeader("intrinsisches-verlangen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Tiefenpsychologie</p>
      <h1>Intrinsisches Verlangen</h1>
      <p class="lead-small">Was streben die 9 Enneagrammtypen innerlich (meistens unbewusst) an? Diese \u00dcbersicht zeigt das tiefe intrinsische Verlangen hinter jedem Typ &ndash; und warum die Suche danach im Au\u00dfen letztlich ins Leere f\u00fchrt.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/intrinsisches-verlangen/intrinsisches-verlangen.jpg"
             alt="Das intrinsische Verlangen der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"mangelgefuehle", label:"Mangelgef\u00fchle"},
        {route:"lebensgluck", label:"Lebensgl\u00fcck"},
        {route:"antriebskraefte", label:"Antriebskr\u00e4fte"},
      ])}
    </section>
  `);
}

function frustrationenPage() {
  return shell(`
    ${pageHeader("frustrationen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Tiefenpsychologie</p>
      <h1>Frustrationen der 9 Enneagrammtypen</h1>
      <p class="lead-small">Warum sind die 9 Enneagrammtypen frustriert und demotiviert? Die Antwort ist einfacher, als man denkt: Jeder Typ sucht au\u00dfen, was er nur innen finden kann.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/frustrationen/frustrationen.jpg"
             alt="Warum die 9 Enneagrammtypen frustriert und demotiviert sind"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"basisemotionen", label:"Basisemotionen"},
        {route:"mangelgefuehle", label:"Mangelgef\u00fchle"},
        {route:"intrinsisches-verlangen", label:"Intrinsisches Verlangen"},
      ])}
    </section>
  `);
}

function horneyTriadenPage() {
  return shell(`
    ${pageHeader("horney-triaden")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Diagnostik</p>
      <h1 class="section-title">Horney-Triaden und Subtypen</h1>
      <p class="psycho-intro">Diese \xdcbersicht verbindet zwei hochkompatible Ebenen der Pers\xf6nlichkeitsdiagnostik: die Horney-Triaden als grundlegende Bewegungsrichtungen des Menschen zur Welt und die instinktiven Subtypen als Lebensfelder, in denen sich diese Bewegung konkret zeigt. Zusammengenommen entsteht eine differenzierte, beobachtbare und im Profiling \xe4u\xdferst hilfreiche Landkarte.</p>

      <img src="./assets/horney-triaden-subtypen.jpg" alt="Horney-Triaden und Subtypen"
        style="width:100%;border-radius:12px;margin:0 auto 2.5rem;display:block;" />

      <div class="vb-section" style="max-width:100%;">

        <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">1. Die Horney-Triaden: Bewegungsrichtungen zur Welt</h2>
        <p class="vb-intro">Karen Horney beschrieb drei fundamentale Weisen, wie Menschen unter innerer Spannung mit der Welt in Beziehung treten. Diese Bewegungsrichtungen sind keine bewussten Entscheidungen, sondern tief eingepr\u00e4gte Orientierungen, die sich fr\u00fch ausbilden und das gesamte Beziehungsgeschehen pr\u00e4gen.</p>

        <div class="vb-typ">
          <h3 class="vb-typ__head"><span class="vb-typ__nr">Hin zur Welt</span> &ndash; Anpassung (Typen 1, 2, 6)</h3>
          <p class="vb-typ__text">Menschen dieser Triade suchen Sicherheit, Orientierung und Zugeh\xf6rigkeit durch Anpassung. Sie bewegen sich auf die Welt zu, reagieren auf Erwartungen, Regeln oder Bed\xfcrfnisse anderer und versuchen, durch korrektes, hilfreiches oder loyales Verhalten Stabilit\xe4t herzustellen. Die Aufmerksamkeit richtet sich stark nach au\xdfen &ndash; auf das, was gefordert ist oder erwartet werden k\xf6nnte.</p>
        </div>
        <div class="vb-typ">
          <h3 class="vb-typ__head"><span class="vb-typ__nr">Gegen die Welt</span> &ndash; Durchsetzung (Typen 3, 7, 8)</h3>
          <p class="vb-typ__text">Hier zeigt sich eine expansive Bewegung: Die Welt wird nicht prim\xe4r beantwortet, sondern gestaltet, beeinflusst oder dominiert. Menschen dieser Triade treten mit Energie, Zielgerichtetheit und Durchsetzungskraft auf. Sie suchen Wirkung, Handlungsspielraum und Kontrolle. Die innere Spannung ist meist hoch, wird jedoch aktiv nach au\xdfen getragen &ndash; Aktivit\xe4t erzeugt Entlastung.</p>
        </div>
        <div class="vb-typ">
          <h3 class="vb-typ__head"><span class="vb-typ__nr">Weg von der Welt</span> &ndash; R\xfcckzug (Typen 4, 5, 9)</h3>
          <p class="vb-typ__text">Diese Bewegungsrichtung ist durch Distanzierung gekennzeichnet. Menschen dieser Triade regulieren innere Spannung, indem sie sich zur\xfcckziehen &ndash; innerlich, emotional oder k\xf6rperlich. Die Welt wird beobachtet, nicht unmittelbar beantwortet. Was nach au\xdfen oft ruhig wirkt, birgt innerlich komplexe Prozesse.</p>
        </div>
        <p class="vb-anmerkung"><em>Diese drei Bewegungsrichtungen sind keine Enneagramm-Zentren (Bauch, Herz, Kopf), sondern eine relationale Perspektive: Wie bewege ich mich zur Welt, wenn Spannung entsteht?</em></p>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1.5rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">2. Die Subtypen: Das Lebensfeld der Bewegung</h2>
          <p class="vb-intro">Die Subtypen beschreiben nicht <em>wie</em> jemand sich bewegt, sondern <em>wo</em> diese Bewegung prim\xe4r stattfindet.</p>
          <div style="display:grid;gap:.5rem;font-size:.85rem;margin:.8rem 0 .4rem;line-height:1.65;">
            <div><span style="font-weight:700;color:var(--copper);">Selbsterhaltung (SE)</span> &ndash; Fokus auf Sicherheit, K\xf6rper, Ressourcen und Stabilit\xe4t. Die Bewegung zeigt sich in Fragen von Versorgung, Schutz und Belastbarkeit.</div>
            <div><span style="font-weight:700;color:var(--copper);">Sozial (SO)</span> &ndash; Im Vordergrund stehen Rollen, Zugeh\xf6rigkeit, Verantwortung und Position im System. Die Bewegung entfaltet sich im Kontext von Gruppen und Strukturen.</div>
            <div><span style="font-weight:700;color:var(--copper);">Sexuell (SX)</span> &ndash; Ausgerichtet auf Intensit\xe4t, Bindung und Resonanz. Die Bewegung ist stark polarisiert, emotional aufgeladen und beziehungszentriert.</div>
          </div>
        </div>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1.5rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">3. Beobachtbare Marker im Profiling</h2>
          <p class="vb-intro">Die \xdcbersicht benennt bewusst beobachtbare Marker &ndash; keine inneren Motive oder biografischen Erkl\xe4rungen. Das ist entscheidend f\xfcr Profiling-Arbeit.</p>
          <div style="display:grid;gap:.5rem;font-size:.85rem;margin:.8rem 0;line-height:1.65;padding:.8rem 1rem;background:var(--paper);border-radius:8px;border:1px solid var(--line);">
            <div><span style="font-weight:700;">Blickqualit\xe4t:</span> Wohin gehen Aufmerksamkeit und Energie spontan? Suchend, pr\xfcfend, fokussiert, nach innen gerichtet, fixierend oder ambivalent.</div>
            <div><span style="font-weight:700;">Kontaktstil:</span> Wie wird Beziehung aufgenommen, gehalten oder vermieden? Kontaktaufnehmend, rollenorientiert, zielgerichtet, steuernd, distanziert oder wechselnd.</div>
            <div><span style="font-weight:700;">Spannungsregulation:</span> Wie wird innere Spannung verarbeitet? Gehalten, kontrolliert, expansiv, reduziert, ged\xe4mpft oder schwankend.</div>
          </div>
          <p class="vb-intro">Diese Marker sind direkt wahrnehmbar, wiederholbar und unabh\xe4ngig von Selbstaussagen. Typisierung geschieht nicht \xfcber Geschichten &ndash; sondern \xfcber Pr\xe4senz.</p>
        </div>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1.5rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">4. Zusammenspiel von Triade und Subtyp im Kontakt</h2>
          <p class="vb-intro">Erst das Zusammenspiel beider Ebenen erzeugt diagnostische Sch\xe4rfe. Ein Typ 6 in der Selbsterhaltung zeigt Anpassung v\xf6llig anders als ein Typ 6 im sexuellen Subtyp. Die Triade beschreibt die Bewegungsrichtung, der Subtyp beschreibt das Feld, die Marker machen es sichtbar.</p>

          ${[
            {
              titel:"Hin zur Welt &ndash; Anpassung (Typen 1, 2, 6)",
              kontext:"In einer Gruppe stellt jemand eine neue Aufgabe vor. Personen dieser Triade pr\xfcfen innerlich sofort: Was wird hier erwartet? Was ist richtig? Was wird gebraucht? Der Blick ist suchend oder pr\xfcfend, die Aufmerksamkeit nach au\xdfen gerichtet.",
              beispiele:[
                ["SE","Meldet sich nicht sofort, schaut aber aufmerksam, nickt, stellt kl\xe4rende Fragen. Kontakt entsteht vorsichtig, Spannung wird gehalten.","Bevor ich etwas sage, will ich sicher sein, dass es passt."],
                ["SO","Rasch sichtbares Rollenbewusstsein. \xdcbernahme von Verantwortung, Strukturierung, Erinnerung an Regeln. Spannung wird kontrolliert.","Ich schaue, wie wir das gemeinsam gut hinbekommen."],
                ["SX","Der Blick sucht Bindung. Kontakt ist pers\xf6nlich, zuwendungsorientiert, manchmal intensiv. Spannung ist innerlich hoch, emotional sp\xfcrbar.","Ich m\xf6chte gesehen werden &ndash; und Sie sehen."],
              ]
            },
            {
              titel:"Gegen die Welt &ndash; Durchsetzung (Typen 3, 7, 8)",
              kontext:"In einer Diskussion entsteht Unkl\xe4rheit. Noch w\xe4hrend andere \xfcberlegen, ergreifen Menschen dieser Triade das Wort, setzen einen Punkt oder lenken das Gespr\xe4ch aktiv.",
              beispiele:[
                ["SE","Der Blick ist fokussiert, der Kontakt zielgerichtet. Sachlich, effizient. Spannung ist stabil hoch, aber kontrolliert.","Lassen Sie uns entscheiden und weitermachen."],
                ["SO","Es wird gef\xfchrt. Der Blick ist bestimmend, der Kontakt steuernd. Die Person \xfcbernimmt sichtbar die Richtung f\xfcr die Gruppe.","So machen wir es &ndash; das ist jetzt dran."],
                ["SX","Der Blick kann fixierend wirken, der Kontakt fordernd. Spannung sehr hoch, direkt in Beziehung ausgetragen.","Ich m\xf6chte, dass jetzt reagiert wird."],
              ]
            },
            {
              titel:"Weg von der Welt &ndash; R\xfcckzug (Typen 4, 5, 9)",
              kontext:"In einem intensiven Gespr\xe4ch lehnt sich jemand zur\xfcck, wird ruhiger, schaut weg oder nach innen. Die Beteiligung wirkt reduziert, ist aber innerlich aktiv.",
              beispiele:[
                ["SE","Der Blick geht nach innen, der Kontakt ist minimal. Spannung wird reduziert, der K\xf6rper zieht sich zur\xfcck.","Ich brauche Raum, um das f\xfcr mich zu sortieren."],
                ["SO","Beobachtet die Gruppe, beteiligt sich selektiv. Kontakt distanziert, Spannung ged\xe4mpft.","Ich sehe, was hier passiert, ohne mich einzumischen."],
                ["SX","Der Blick ist ambivalent, der Kontakt wechselnd. N\xe4he und R\xfcckzug wechseln sich ab, Spannung schwankt.","Ich bin pr\xe4sent &ndash; und dann wieder nicht."],
              ]
            },
          ].map(t => `
            <div class="vb-typ" style="margin-bottom:1.4rem;">
              <h3 class="vb-typ__head"><span class="vb-typ__nr" style="font-size:.75rem;">${t.titel.split(" &ndash; ")[0]}</span> ${t.titel.split(" &ndash; ").slice(1).join(" &ndash; ")}</h3>
              <p style="font-size:.83rem;color:var(--muted);line-height:1.6;margin:.4rem 0 .8rem;font-style:italic;">${t.kontext}</p>
              ${t.beispiele.map(([sub,obs,zitat]) => `
                <div style="margin-bottom:.7rem;padding:.6rem .8rem;background:var(--paper);border-radius:6px;border-left:2px solid var(--copper);">
                  <div style="font-size:.78rem;font-weight:700;color:var(--copper);margin-bottom:.25rem;">${sub}</div>
                  <div style="font-size:.82rem;line-height:1.6;margin-bottom:.25rem;">${obs}</div>
                  <div style="font-size:.8rem;font-style:italic;color:var(--muted);">\u201e${zitat}"</div>
                </div>
              `).join("")}
            </div>
          `).join("")}
        </div>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">5. Bedeutung f\xfcr Lehre und Praxis</h2>
          <p class="vb-intro">Diese \xdcbersicht ist keine Typisierungsabk\xfcrzung, sondern eine Orientierungshilfe f\xfcr pr\xe4zise Wahrnehmung. Sie hilft, vorschnelle Deutungen zu vermeiden, Verwechslungen zwischen Typen zu reduzieren und feiner zwischen \xe4hnlichen Erscheinungsbildern zu differenzieren.</p>
          <p class="vb-intro">Sie erm\xf6glicht, Unterschiede nicht nur kognitiv zu erkl\xe4ren, sondern ph\xe4nomenologisch erfahrbar zu machen: durch Beobachtung, Vergleich und Schulung der Wahrnehmung. Wer beginnt, auf Blick, Kontakt und Spannungsregulation zu achten, erkennt die Muster oft innerhalb weniger Minuten &ndash; noch bevor Inhalte ausgesprochen werden.</p>
        </div>

        <div style="border-left:3px solid var(--gold);padding:.9rem 1.1rem;margin:1.8rem 0;background:var(--paper);border-radius:0 8px 8px 0;">
          <p style="margin:0;font-size:.92rem;color:var(--ink);line-height:1.8;font-style:italic;">Zwei Menschen k\xf6nnen dasselbe sagen &ndash; aber v\xf6llig unterschiedlich schauen, in Kontakt gehen und Spannung regulieren. Genau diese Unterschiede sind im Enneagramm-Profiling entscheidend. Die Grafik liefert die Landkarte, die Praxisbeispiele machen sie lebendig.</p>
        </div>

      </div>
      ${relatedLinks([
        {route:"enneagramm-profiling", label:"Enneagramm-Profiling"},
        {route:"subtypen-schaubilder", label:"Subtypen-Schaubilder"},
        {route:"bedeutung-27-subtypen", label:"Bedeutung der 27 Subtypen"},
      ])}
    </div>
  `);
}

function illusionenPage() {
  return shell(`
    ${pageHeader("illusionen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Tiefenpsychologie</p>
      <h1>Illusionen der 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp lebt einer charakteristischen Illusion nach \u2014 einer unbewussten Wahnvorstellung, die das Leben bestimmt. Was der Typ als erstrebenswert erlebt, ist in Wirklichkeit eine Privat-Wirklichkeit, die ihn gefangen h\u00e4lt.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/illusionen/illusionen.jpg"
             alt="Die illusion\u00e4ren Wahnvorstellungen der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"wer-wir-sind", label:"Wer wir sind"},
        {route:"ego-fixierungen", label:"Ego-Fixierungen"},
        {route:"schutzdefizite", label:"Schutzdefizite"},
      ])}
    </section>
  `);
}

function schutzdefizitePage() {
  return shell(`
    ${pageHeader("schutzdefizite")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Triaden</p>
      <h1>Schutz-Defizite der Triaden</h1>
      <p class="lead-small">Bauch-, Herz- und Kopftriade tragen je ein charakteristisches Schutz-Defizit: die Bauchtriade f\u00fcrchtet Einschr\u00e4nkung, die Herztriade Liebesverlust, die Kopftriade Vertrauensverlust. Diese unbewussten Defizite pr\u00e4gen das Verhalten aller drei Typen einer Triade.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/schutzdefizite/schutzdefizite.jpg"
             alt="Die Schutz-Defizite der Bauch-, Herz- und Kopftriade"
             class="psycho-img" />
      </div>
      <div style="margin:2.5rem 0 0;">
        <h2 style="font-family:'EB Garamond',serif;font-size:1.4rem;color:var(--anthracite);margin:0 0 0.75rem;">Der Typ ist Schutz, nicht Identit\u00e4t</h2>
        <img
          src="./assets/schutz.jpg"
          alt="Der Typ ist Schutz, nicht Identit\u00e4t. Muster entstehen dort, wo Freiheit einst verletzt wurde."
          style="width:100%;border-radius:8px;margin:0.75rem 0 1.25rem;"
        />
        <p style="font-size:0.95rem;line-height:1.75;color:var(--anthracite);margin:1rem 0;">Dieser Satz trifft den Kern dessen, was Schutz-Defizite eigentlich sind. Der Enneagrammtyp ist keine Charaktereigenschaft, die man hat wie eine Haarfarbe. Er ist eine Reaktion &ndash; eine fr\u00fch entwickelte Strategie, um mit einer Welt umzugehen, die sich an einem entscheidenden Punkt nicht sicher angef\u00fchlt hat.</p>
        <p style="font-size:0.95rem;line-height:1.75;color:var(--anthracite);margin:1rem 0;">Die Bauchtriade entwickelte Muster rund um Einschr\u00e4nkung: Wo Autonomie einmal in Frage gestellt wurde, entstand das Bed\u00fcrfnis, sich zu behaupten, zu kontrollieren oder sich zu entziehen. Die Herztriade entwickelte Muster rund um Zuwendung: Wo Liebe an Bedingungen gekn\u00fcpft schien, entstand das Bed\u00fcrfnis, sich anzupassen, zu leisten oder aufzufallen. Die Kopftriade entwickelte Muster rund um Sicherheit: Wo Vertrauen einmal ersch\u00fcttert wurde, entstand das Bed\u00fcrfnis, zu analysieren, vorauszudenken oder sich abzusichern.</p>
        <p style="font-size:0.95rem;line-height:1.75;color:var(--anthracite);margin:1rem 0;">Diese Muster sind keine Fehler. Sie waren kluge L\u00f6sungen f\u00fcr echte Herausforderungen. Das Problem entsteht, wenn sie im Erwachsenenleben weiterhin automatisch aktiviert werden &ndash; auch dort, wo die urspr\u00fcngliche Bedrohung l\u00e4ngst nicht mehr existiert. Den Typ zu erkennen bedeutet deshalb nicht, eine Schublade zu benennen. Es bedeutet, den Schutz sichtbar zu machen &ndash; und damit den ersten Schritt in Richtung Freiheit zu gehen.</p>
      </div>

      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist")}
      ${bookTip("der-code-deiner-persoenlichkeit", "Wie der Enneagrammtyp entsteht &ndash; und was er \u00fcber unsere tiefsten Pr\u00e4gungen verr\u00e4t.", "Der Code der Pers\u00f6nlichkeit")}
      ${bookTip("leidenschaft-und-heilung", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Leidenschaft und Heilung")}
      ${relatedLinks([
        {route:"triadendefizite", label:"Triadendefizite"},
        {route:"grundformel", label:"Grundformel"},
        {route:"illusionen", label:"Illusionen"},
      ])}
    </section>
  `);
}

function lasterTugendenAffirmationenPage() {
  return shell(`
    ${pageHeader("laster-tugenden-affirmationen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Laster \u00b7 Tugenden \u00b7 Affirmationen</p>
      <h1>Laster, Tugenden & Affirmationen der 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp hat ein charakteristisches Laster (die verdichtete Leidenschaft) und eine Tugend als heilsames Gegenst\u00fcck. Die Affirmationen sprechen direkt das tiefste Bed\u00fcrfnis jedes Typs an.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/laster-tugenden-affirmationen/laster-tugenden-affirmationen.jpg"
             alt="Laster, Tugenden und Affirmationen der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      <h2 style="margin-top:2.5rem; font-size:1.2rem; text-align:center; letter-spacing:0.05em; color:var(--ink);">Affirmationen f\u00fcr die 9 Enneatypen</h2>
      <div style="margin-top:1rem; display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.75rem; grid-auto-rows:1fr;">
        <div style="background:#c49090; border-radius:0.5rem; padding:0.9rem 0.75rem; text-align:center; font-weight:500; font-size:0.9rem; color:#3a1010; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:110px;">Typ 1<br><span style="font-weight:400; font-size:0.85rem;">Du bist ein wirklich guter Mensch!</span></div>
        <div style="background:#7a2d90; border-radius:0.5rem; padding:0.9rem 0.75rem; text-align:center; font-weight:500; font-size:0.9rem; color:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:110px;">Typ 2<br><span style="font-weight:400; font-size:0.85rem;">Ich bin so dankbar f\u00fcr deine Hilfe!</span></div>
        <div style="background:#9ee0d0; border-radius:0.5rem; padding:0.9rem 0.75rem; text-align:center; font-weight:500; font-size:0.9rem; color:#0a3028; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:110px;">Typ 3<br><span style="font-weight:400; font-size:0.85rem;">Du machst wirklich einen guten Job!</span></div>
        <div style="background:#70e030; border-radius:0.5rem; padding:0.9rem 0.75rem; text-align:center; font-weight:500; font-size:0.9rem; color:#1a3a00; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:110px;">Typ 4<br><span style="font-weight:400; font-size:0.85rem;">Ich sch\u00e4tze dich und deine authentische Wesensart sehr!</span></div>
        <div style="background:#e09060; border-radius:0.5rem; padding:0.9rem 0.75rem; text-align:center; font-weight:500; font-size:0.9rem; color:#3a1800; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:110px;">Typ 5<br><span style="font-weight:400; font-size:0.85rem;">Deine W\u00fcnsche und Bed\u00fcrfnisse sind wirklich keine Belastung!</span></div>
        <div style="background:#f5c0d0; border-radius:0.5rem; padding:0.9rem 0.75rem; text-align:center; font-weight:500; font-size:0.9rem; color:#5a1a28; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:110px;">Typ 6<br><span style="font-weight:400; font-size:0.85rem;">Gott hat mit Sicherheit wunderbare Pl\u00e4ne mit dir!</span></div>
        <div style="background:#f8d820; border-radius:0.5rem; padding:0.9rem 0.75rem; text-align:center; font-weight:500; font-size:0.9rem; color:#3a2e00; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:110px;">Typ 7<br><span style="font-weight:400; font-size:0.85rem;">Dein Lebensgl\u00fcck liegt mir sehr am Herzen!</span></div>
        <div style="background:#8b2014; border-radius:0.5rem; padding:0.9rem 0.75rem; text-align:center; font-weight:500; font-size:0.9rem; color:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:110px;">Typ 8<br><span style="font-weight:400; font-size:0.85rem;">In deiner Gegenwart f\u00fchle ich mich immer so sicher, danke!</span></div>
        <div style="background:#d0dc28; border-radius:0.5rem; padding:0.9rem 0.75rem; text-align:center; font-weight:500; font-size:0.9rem; color:#303800; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:110px;">Typ 9<br><span style="font-weight:400; font-size:0.85rem;">Die Zeit mit dir ist immer sehr wertvoll f\u00fcr mich, danke!</span></div>
      </div>
      <div style="margin:2.5rem 0 0;">
        <h2 style="font-family:'EB Garamond',serif;font-size:1.4rem;color:var(--anthracite);margin:0 0 0.75rem;">Die Tugend ist schon da</h2>
        <img
          src="./assets/tugend.jpg"
          alt="Die Tugend des Typs ist schon da \u2013 sie ist nur von Angst \u00fcberdeckt."
          style="width:100%;border-radius:8px;margin:0.75rem 0 1.25rem;"
        />
        <p style="font-size:0.95rem;line-height:1.75;color:var(--anthracite);margin:1rem 0;">Dieser Satz ver\u00e4ndert die Art, wie man auf Laster und Tugenden schaut. Oft wird die Tugend als Ziel verstanden &ndash; als etwas, das man erst erreichen muss, wenn das Laster \u00fcberwunden ist. Doch das Enneagramm deutet es anders: Die Tugend ist nicht das Gegenteil des Lasters. Sie ist das, was darunter liegt.</p>
        <p style="font-size:0.95rem;line-height:1.75;color:var(--anthracite);margin:1rem 0;">Typ 1 tr\u00e4gt die Gelassenheit schon in sich &ndash; verdeckt von dem Zwang, alles richtig machen zu m\u00fcssen. Typ 4 tr\u00e4gt Gleichmut in sich &ndash; verdeckt von der Sehnsucht, etwas Besonderes sein zu m\u00fcssen. Typ 8 tr\u00e4gt Unschuld in sich &ndash; verdeckt von der Angst, verletzlich zu wirken. Das Muster ist bei allen neun Typen dasselbe: Die Tugend ist keine Leistung. Sie ist das, was \u00fcbrig bleibt, wenn die Angst nachl\u00e4sst.</p>
        <p style="font-size:0.95rem;line-height:1.75;color:var(--anthracite);margin:1rem 0;">Das ist eine der tiefsten Aussagen des Enneagramms: Entwicklung bedeutet nicht, einen neuen Menschen zu erschaffen. Es bedeutet, freizulegen, was schon da ist &ndash; und was das Ego mit seinen Schutzstrategien bisher verborgen hat.</p>
      </div>

      ${bookTip("leidenschaft-und-heilung", "27 Subtypen &ndash; Leidenschaften, Tugenden und Heilungswege direkt aus der therapeutischen Praxis.", "Leidenschaft und Heilung")}
      ${relatedLinks([
        {route:"heilungsweg", label:"Heilungsweg"},
        {route:"leidenschaft-und-wunde", label:"Leidenschaft & Wunde"},
        {route:"spirituelle-uebungen", label:"Spirituelle \u00dcbungen"},
      ])}
    </section>
  `);
}

function spirituelleUebungenPage() {
  return shell(`
    ${pageHeader("spirituelle-uebungen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Spirituelle Praxis</p>
      <h1>Spezielle spirituelle \u00dcbungen f\u00fcr die 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp hat seine eigene spirituelle Sehnsucht \u2014 und damit auch seine eigene spirituelle \u00dcbung. Diese \u00dcbersicht zeigt, welche innere Bewegung jeden Typ auf seinem Weg zur Selbstkenntnis tr\u00e4gt.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/spirituelle-uebungen/spirituelle-uebungen.jpg"
             alt="Spezielle spirituelle \u00dcbungen f\u00fcr die 9 Enneagrammtypen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Jeder Typ befindet sich auf einer \u201eewigen Suche\u201c nach genau der Qualit\u00e4t, die seiner Leidenschaft entgegensteht \u2014 und die spirituelle \u00dcbung besteht jeweils darin, diese Qualit\u00e4t nicht mehr im Au\u00dfen zu suchen, sondern im Inneren als bereits vorhanden wahrzunehmen.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#5f5f5f;">Typ 1 &ndash; Die ewige Suche nach Perfektion</h3>
        <p class="vb-intro">\u00dcbung: Nach innen gehen und die eigene innere Vollkommenheit wahrnehmen \u2014 nicht die Welt verbessern, sondern erkennen, dass das Vollkommene bereits im gegenw\u00e4rtigen Augenblick da ist.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#7a2fa8;">Typ 2 &ndash; Die ewige Suche nach Liebe</h3>
        <p class="vb-intro">\u00dcbung: Nach innen f\u00fchlen und die eigene innere Liebensw\u00fcrdigkeit wahrnehmen \u2014 sp\u00fcren, dass man geliebt werden darf, ohne sich diese Liebe zuvor durch Geben verdienen zu m\u00fcssen.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#1fa688;">Typ 3 &ndash; Die ewige Suche nach Erfolg</h3>
        <p class="vb-intro">\u00dcbung: Nach innen f\u00fchlen und den eigenen inneren Wert wahrnehmen \u2014 erkennen, dass der eigene Wert nicht erst durch Leistung entsteht, sondern immer schon da ist.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#3cbf1f;">Typ 4 &ndash; Die ewige Suche nach Individualit\u00e4t</h3>
        <p class="vb-intro">\u00dcbung: Nach innen f\u00fchlen und den eigenen inneren Ursprung wahrnehmen \u2014 die eigene Einzigartigkeit nicht l\u00e4nger als etwas Fehlendes suchen, sondern als l\u00e4ngst vorhandenen Wesenskern erkennen.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#124fcc;">Typ 5 &ndash; Die ewige Suche nach Wissen</h3>
        <p class="vb-intro">\u00dcbung: Nach innen forschen und die eigene innere Verbundenheit mit allem wahrnehmen \u2014 erkennen, dass wahres Verstehen nicht durch Anh\u00e4ufung von Wissen entsteht, sondern durch das Erleben der eigenen Zugeh\u00f6rigkeit zum Ganzen.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#8a5222;">Typ 6 &ndash; Die ewige Suche nach Sicherheit</h3>
        <p class="vb-intro">\u00dcbung: Nach innen forschen und das eigene innere Urvertrauen wahrnehmen \u2014 sp\u00fcren, dass echte Sicherheit nicht von au\u00dfen kommt, sondern ein innerer, bereits vorhandener Grund ist.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#d4a800;">Typ 7 &ndash; Die ewige Suche nach Spa\u00df</h3>
        <p class="vb-intro">\u00dcbung: Nach innen forschen und die eigene innere Lebensfreude wahrnehmen \u2014 erkennen, dass Freude keine Ansammlung \u00e4u\u00dferer Erlebnisse braucht, sondern bereits im gegenw\u00e4rtigen Moment innewohnt.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#a00802;">Typ 8 &ndash; Die ewige Suche nach Macht</h3>
        <p class="vb-intro">\u00dcbung: Nach innen gehen und die eigene innere St\u00e4rke wahrnehmen \u2014 verstehen, dass wahre Kraft nicht durch Kontrolle \u00fcber andere entsteht, sondern aus der Verbindung mit der eigenen inneren Festigkeit.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:#cc6e00;">Typ 9 &ndash; Die ewige Suche nach Harmonie</h3>
        <p class="vb-intro">\u00dcbung: Nach innen gehen und den eigenen inneren Frieden wahrnehmen \u2014 erkennen, dass Harmonie nicht erst durch Anpassung an andere entstehen muss, sondern der eigene, bereits vorhandene Urgrund ist.</p>

        <p class="vb-anmerkung" style="margin-top:1.5rem;font-style:italic;">\u201eWahrhafte Selbsterkenntnis ist das Ahnen Gottes.\u201c (\u00d6stliche Weisheit)</p>
      </div>
      ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "7 spirituelle Lebenskunst-\u00dcbungen f\u00fcr den Alltag &ndash; der ideale Begleiter zu dieser \u00dcbersicht.", "7 Wege zu Dir selbst")}
      ${bookTip("nichts-und-alles", "Stilles Buch \u00fcber das Schauen nach innen &ndash; Bewusstsein, Raum und innere Freiheit.", "Nichts und Alles")}
      ${relatedLinks([
        {route:"bewusstseinsuebungen", label:"Bewusstseins\u00fcbungen"},
        {route:"heilungsweg", label:"Heilungsweg"},
        {route:"frieden-schliessen", label:"Frieden schlie\u00dfen"},
      ])}
    </section>
  `);
}

const PORTRAIT_TYPEN = [
  { nr: 1, name: "Der Reformer",        subtypen: "SE1 \u00b7 SO1 \u00b7 SX1", start: 1,  farbe: "#7a7a7a",
    intro: "Der Typ 1 tr\u00e4gt das Prinzip der Perfektion in sich \u2014 einen inneren Richter, der unabl\u00e4ssig pr\u00fcft, bewertet und verbessert. Diese Seiten zeigen alle drei Subtypen: der selbsterhaltende Einser (SE1) k\u00e4mpft um Selbstbeherrschung und Kontrolle, der soziale Einser (SO1) wird zum Lehrer und Vorbild, der sexuelle Einser (SX1) tr\u00e4gt seine Reform in Beziehungen und die Welt hinaus." },
  { nr: 2, name: "Der Helfer",           subtypen: "SE2 \u00b7 SO2 \u00b7 SX2", start: 9,  farbe: "#8b3a8b",
    intro: "Der Typ 2 lebt aus dem Impuls der Liebe \u2014 einem tiefen Bed\u00fcrfnis zu geben, gebraucht zu werden und zu verbinden. Der selbsterhaltende Zweier (SE2) zeigt seine Hilflosigkeit nach au\u00dfen, der soziale Zweier (SO2) wird zur Verf\u00fchrerin in Gruppen, der sexuelle Zweier (SX2) \u00fcberflutet einzelne Menschen mit W\u00e4rme und Aufmerksamkeit." },
  { nr: 3, name: "Der Macher",           subtypen: "SE3 \u00b7 SO3 \u00b7 SX3", start: 17, farbe: "#009b9b",
    intro: "Der Typ 3 ist der Archetyp des Erfolgs \u2014 schillernd, effizient, imageorientiert. Der selbsterhaltende Dreier (SE3) schafft Sicherheit durch stille Leistung, der soziale Dreier (SO3) sucht \u00f6ffentliche Anerkennung, der sexuelle Dreier (SX3) bezaubert als charismatischer Verf\u00fchrer." },
  { nr: 4, name: "Der Individualist",    subtypen: "SE4 \u00b7 SO4 \u00b7 SX4", start: 25, farbe: "#1a5c1a",
    intro: "Der Typ 4 tr\u00e4gt die Sehnsucht nach dem Besonderen \u2014 und den Schmerz des Andersseins. Der selbsterhaltende Vierer (SE4) leidet still und kompensiert durch Ausdauer, der soziale Vierer (SO4) zeigt seinen Schmerz und sucht Mitgef\u00fchl, der sexuelle Vierer (SX4) k\u00e4mpft um Intensit\u00e4t und projiziert seinen Mangel auf andere." },
  { nr: 5, name: "Der Beobachter",       subtypen: "SE5 \u00b7 SO5 \u00b7 SX5", start: 33, farbe: "#1a3a8b",
    intro: "Der Typ 5 zieht sich zur\u00fcck, um zu verstehen \u2014 Wissen ist sein Schutzwall gegen eine Welt, die zu viel fordert. Der selbsterhaltende F\u00fcnfer (SE5) baut sich einen privaten R\u00fcckzugsraum, der soziale F\u00fcnfer (SO5) sucht den Zugang zur Welt \u00fcber Ideen und Systeme, der sexuelle F\u00fcnfer (SX5) verbindet sich tief \u2014 aber nur mit einem einzigen Menschen." },
  { nr: 6, name: "Der Loyale",           subtypen: "SE6 \u00b7 SO6 \u00b7 SX6", start: 41, farbe: "#8b6914",
    intro: "Der Typ 6 ist der H\u00fcter der Gemeinschaft \u2014 loyal, wachsam, zutiefst auf Sicherheit bedacht. Der selbsterhaltende Sechser (SE6) sucht Schutz in Vertrauen und N\u00e4he (phobisch), der soziale Sechser (SO6) folgt Regeln und Autorit\u00e4ten, der sexuelle Sechser (SX6) bek\u00e4mpft die Angst durch St\u00e4rke und Provokation (kontraphobisch)." },
  { nr: 7, name: "Der Enthusiast",       subtypen: "SE7 \u00b7 SO7 \u00b7 SX7", start: 49, farbe: "#c17f00",
    intro: "Der Typ 7 ist die Energie der Freude \u2014 immer auf der Suche nach dem n\u00e4chsten Erlebnis, dem n\u00e4chsten Plan, der n\u00e4chsten M\u00f6glichkeit. Der selbsterhaltende Siebener (SE7) sichert sich durch Netzwerke ab, der soziale Siebener (SO7) opfert sich im Dienst an anderen, der sexuelle Siebener (SX7) sucht Ideale und Visionen, die ihn begeistern." },
  { nr: 8, name: "Der Herausforderer",   subtypen: "SE8 \u00b7 SO8 \u00b7 SX8", start: 57, farbe: "#8b1a1a",
    intro: "Der Typ 8 tr\u00e4gt Macht, St\u00e4rke und ungebrochene Lebendigkeit in sich \u2014 er sch\u00fctzt die Schwachen und duldet keine Kontrolle von au\u00dfen. Der selbsterhaltende Achter (SE8) kontrolliert Territorium und Ressourcen, der soziale Achter (SO8) k\u00e4mpft f\u00fcr Gerechtigkeit und seine Gruppe, der sexuelle Achter (SX8) sucht intensive Verbindung und provoziert ohne Scheu." },
  { nr: 9, name: "Der Friedensstifter",  subtypen: "SE9 \u00b7 SO9 \u00b7 SX9", start: 65, farbe: "#2e6b2e",
    intro: "Der Typ 9 tr\u00e4gt das Prinzip des Friedens \u2014 eine tiefe Sehnsucht nach Harmonie, Einheit und dem Verschmelzen aller Widerspr\u00fcche. Der selbsterhaltende Neuner (SE9) findet seinen Frieden in kleinen Ritualen und Trost, der soziale Neuner (SO9) geht in der Gruppe auf, der sexuelle Neuner (SX9) verschmilzt mit anderen Menschen oder Ideen." },
];

function _portraitTypPage(typ) {
  const bilder = Array.from({length: 8}, (_, i) => {
    const nr = String(typ.start + i).padStart(3, "0");
    return `<div class="psycho-img-wrap" style="margin-bottom:1.5rem;">
      <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/portraits-typen/Portraits_der_9_Typen_und_27_Subtypen.${nr}.png"
           alt="Portrait Typ ${typ.nr} \u2013 Seite ${i+1}" class="psycho-img" loading="lazy"/>
    </div>`;
  }).join("");

  const prev = typ.nr > 1 ? `{route:"portrait-typ-${typ.nr-1}", label:"Portr\u00e4t Typ ${typ.nr-1}"}` : null;
  const next = typ.nr < 9 ? `{route:"portrait-typ-${typ.nr+1}", label:"Portr\u00e4t Typ ${typ.nr+1}"}` : null;
  const related = [
    {route:"leidenschaft-und-wunde" , label:"Leidenschaft und Wunde"},
    prev ? eval(`(${prev})`) : null,
    next ? eval(`(${next})`) : null,
    {route:"subtypen-schaubilder", label:"Subtypen-Schaubilder (alle 27)"},
  ].filter(Boolean);

  return shell(`
    ${pageHeader(`portrait-typ-${typ.nr}`)}
    <section class="narrow">
      <p class="eyebrow" style="color:${typ.farbe};">Portr\u00e4ts \u00b7 9 Typen / 27 Subtypen</p>
      <h1>Portr\u00e4t Typ ${typ.nr}: ${typ.name}</h1>
      <p style="font-size:0.88rem;color:var(--copper);margin-bottom:0.3rem;">${typ.subtypen}</p>
      <p class="lead-small">${typ.intro}</p>
      <div style="margin-top:1.5rem;">${bilder}</div>
      ${["se","so","sx"].map(pr => bookTip(`einzelstudie-${pr}${typ.nr}`, `Die vollst\u00e4ndige Einzelstudie zur ${pr.toUpperCase()}${typ.nr} &ndash; ${typ.name}. Ca. 70 Seiten tiefgreifende psychologische Analyse.`, `Einzelstudie ${pr.toUpperCase()}${typ.nr}: ${typ.name}`)).join("")}
      ${bookTip("leidenschaft-und-heilung", "27 Subtypen \u2013 Leidenschaften, Tugenden und Heilungswege direkt aus der therapeutischen Praxis.", "Leidenschaft und Heilung")}
      ${relatedLinks(related)}
    </section>
  `);
}

function portraitTyp1Page() { return _portraitTypPage(PORTRAIT_TYPEN[0]); }
function portraitTyp2Page() { return _portraitTypPage(PORTRAIT_TYPEN[1]); }
function portraitTyp3Page() { return _portraitTypPage(PORTRAIT_TYPEN[2]); }
function portraitTyp4Page() { return _portraitTypPage(PORTRAIT_TYPEN[3]); }
function portraitTyp5Page() { return _portraitTypPage(PORTRAIT_TYPEN[4]); }
function portraitTyp6Page() { return _portraitTypPage(PORTRAIT_TYPEN[5]); }
function portraitTyp7Page() { return _portraitTypPage(PORTRAIT_TYPEN[6]); }
function portraitTyp8Page() { return _portraitTypPage(PORTRAIT_TYPEN[7]); }
function portraitTyp9Page() { return _portraitTypPage(PORTRAIT_TYPEN[8]); }



const ENNEA_TRACKS = {
  "14": ["Galway Light", "Thyme Upon the Hills", "Star of the County Town", "The Fields of Athenry", "Dreams of Home", "Arthur McBride", "The Wild Rover", "The Foggy Dew", "Mountain Thyme"],
  "15": ["Perfei\u00e7\u00e3o Serena", "No Abra\u00e7o do Amor", "Reflexos do Meu Verdadeiro Ser", "Entre as Mar\u00e9s do Meu Ser", "Segredo ao Sol", "Coragem ao Vento", "C\u00e9u Aberto", "Fortaleza Serena", "Na Paz do Caminho"],
  "16": ["SERENE PERFECTION", "IN LOVE\u00b4S EMBRACE", "REFLECTION OF MY TRUE SELF", "WITHIN THE TIDES OF MY BEING", "SECRET IN THE SUN", "COURAGE IN THE WIND", "OPEN SKY", "SERENE STRENGTH", "IN THE PEACE OF THE PATH"],
  "17": ["GELASSENE VOLLKOMMENHEIT", "IN DER UMARMUNG DER LIEBE", "IM SPIEGEL MEINES WAHREN SELBST", "IN DEN GEZEITEN MEINES SEINS", "GEHEIMNIS IM LICHT", "MUT IM WIND", "OFFENER HIMMEL", "GELASSENE ST\u00c4RKE", "IM FRIEDEN DES WEGES"],
  "18": ["Die perfekte Liebe", "F\u00fcr dich gebe ich alles", "Erfolg in der Liebe", "Die unerreichbare Liebe", "Liebe auf Abstand", "Kann ich dir vertrauen?", "Frei und doch bei dir", "Du & ich gegen die Welt", "Sanfte Harmonie"],
  "19": ["Perfection - Anger", "Love - Pride", "Success - Vanity", "Individuality - Envy", "Knowledge - Greed", "Safety - Anxiety", "Joy - Gluttony", "Power - Lust", "Harmony - Inertia"],
  "20": ["Letting Go", "Let Me Be", "Who I Am", "Whole Again", "Step Into the Light", "Stronger Than My Fear", "Here and Now", "Stronger in Love", "Wake Me Up"],
  "21": ["Sunrise of Purpose", "Let Love Flow Free", "True Reflection", "Colors of My Soul", "Into the Light", "Rise Beyond the Fear", "Dance of Freedom", "Open the Gates", "Awakened Peace"],
  "22": ["Ein neuer Tag", "Lass\u2019 die Liebe frei flie\u00dfen", "Wenn die Masken fallen", "Bunte Seelenfarben", "Licht im Kopf", "Durch die Angst ins Licht", "Flieg\u2019 mein Freund, doch lande auch", "Lass\u2019 die Mauern fallen", "Lebe deinen stillen Klang"],
};

const JAZZ_TRACKS = {
  "64": [{t:"Morning Rhapsody",s:0}, {t:"Cityscape Serenade",s:190}, {t:"Midnight Reflections",s:401}, {t:"Blue Notes of Longing",s:596}, {t:"Soulful Interlude",s:769}, {t:"Rhythm of Abundance",s:969}, {t:"Nocturne of Solitude",s:1144}, {t:"Whispers in the Wind",s:1318}, {t:"Harmonious Journeys",s:1508}, {t:"Echoes of the Heart",s:1693}, {t:"Serenade of Truth",s:1878}, {t:"Eternal Dawn",s:2063}],
  "65": [{t:"First Light",s:0}, {t:"Footsteps on the Pavement",s:178}, {t:"The Stranger's Smile",s:386}, {t:"Beneath the Old Sycamore",s:569}, {t:"Echoes in the Rain",s:727}, {t:"The Space Between Notes",s:907}, {t:"Holding a Memory",s:1049}, {t:"Turning Tides",s:1235}, {t:"In a Single Breath",s:1408}, {t:"The Quietest Sound",s:1580}, {t:"Returning to Silence",s:1802}, {t:"After the Music Fades",s:1957}],
  "66": [{t:"Whisper of Dawn",s:0}, {t:"Drifting Through Time",s:176}, {t:"Embers of Yesterday",s:339}, {t:"Unspoken Words",s:526}, {t:"Between the Lines",s:726}, {t:"Winds of Change",s:889}, {t:"Still Water",s:1074}, {t:"Carrying the Light",s:1291}, {t:"Footprints in the Mist",s:1473}, {t:"Unfinished Conversations",s:1690}, {t:"The Weight of Time",s:1894}, {t:"Homeward",s:2068}],
  "67": [{t:"The Way the River Knows",s:0}, {t:"Dancing Between the Raindrops:",s:168}, {t:"A Stranger's Name",s:372}, {t:"Midnight and the Moon",s:549}, {t:"Footprints in the Sand",s:756}, {t:"Love Like a Lantern",s:957}, {t:"Caf\u00e9 Conversations",s:1130}, {t:"When the Musik Fades",s:1322}, {t:"Echoes of Yesterday",s:1497}, {t:"The Space Between the Words",s:1697}, {t:"The Road to Stillness",s:1871}, {t:"Just This Moment",s:2101}],
  "68": [{t:"Before the Day Begins",s:0}, {t:"Stranger in the Rain:",s:223}, {t:"Conversations in Blue",s:428}, {t:"Shadows and Silhouettes",s:608}, {t:"A Door Left Open",s:795}, {t:"The Rhythm of Goodbye",s:988}, {t:"When the World Stands Still",s:1206}, {t:"One Step at a Time",s:1371}, {t:"The Space Between the Stars",s:1554}, {t:"The River Knows the Way",s:1736}, {t:"The Last Light on the Horizon",s:1944}, {t:"Oh, Returning to Silence",s:2157}],
  "69": [{t:"One Breath, One Step",s:0}, {t:"Coffee in a Silent Caf\u00e9",s:187}, {t:"The Language of Rain",s:415}, {t:"Shadows of the Moon",s:608}, {t:"The Heart's Compass",s:811}, {t:"The Dance of Time",s:995}, {t:"Lost in the Moment",s:1188}, {t:"Through the Quiet Storm",s:1385}, {t:"The Light We Share",s:1565}, {t:"The Edge of Tomorrow",s:1748}, {t:"The Quiet Within",s:1951}, {t:"Return to the Heart",s:2121}],
  "70": [{t:"Whispers of the Unknown",s:0}, {t:"A Chance Encounter",s:184}, {t:"The Wind Knows Our Names",s:392}, {t:"Levers Never Sent",s:591}, {t:"Caf\u00e9 of Forgotten Dreams",s:773}, {t:"Oh, Shadows and Silhouettes",s:947}, {t:"The Synchronicity Waltz",s:1103}, {t:"Painted Skies and Passing Trains",s:1267}, {t:"Language of Rain",s:1459}, {t:"The Invisible Thread",s:1624}, {t:"Home is a Feeling",s:1806}, {t:"The Full Circle",s:1968}],
  "71": [{t:"Awakening in Blue",s:0}, {t:"Moonlight Conversations",s:177}, {t:"Tides of Time",s:366}, {t:"Serenade for the Lost",s:557}, {t:"Whispers in the Rain",s:739}, {t:"Dancing with Time",s:922}, {t:"Silent Echoes",s:1098}, {t:"Through the Keyhole",s:1318}, {t:"The Space Between",s:1471}, {t:"Lanterns on the Water",s:1696}, {t:"Where the Wind Goes",s:1898}, {t:"The Quiet Light",s:2053}],
  "72": [{t:"The First Light",s:0}, {t:"Traces on the Tide",s:154}, {t:"Serendipity Blues",s:355}, {t:"Whispers of the Moon",s:568}, {t:"Between the Notes",s:752}, {t:"Unwritten Pages",s:946}, {t:"Velvet Skies",s:1174}, {t:"Dancing with the Wind",s:1413}, {t:"Falling into Time",s:1591}, {t:"Silent Agreements",s:1817}, {t:"The Shape of Light",s:2021}, {t:"Where the Road Begins",s:2241}],
  "73": [{t:"The Echo of Dawn",s:0}, {t:"Midnight Confessions",s:159}, {t:"Chance Encounters",s:376}, {t:"Footprints in the Rain",s:554}, {t:"Paper Boats",s:747}, {t:"Mirror of the Moon",s:975}, {t:"When We Were Fire",s:1214}, {t:"Serendipity Street",s:1443}, {t:"The Space Between Words",s:1625}, {t:"Silent Conversations",s:1826}, {t:"Beneath the Surface",s:2022}, {t:"The Light Within",s:2216}],
  "74": [{t:"Footsteps in the Fog",s:0}, {t:"The Rhythm of Chance",s:203}, {t:"Echoes on the Page",s:332}, {t:"Crossroads Caf\u00e9",s:510}, {t:"When the Wind Decides",s:705}, {t:"Conversations with the Moon",s:931}, {t:"Silent Promises",s:1127}, {t:"The River Remembers",s:1326}, {t:"Shadows That Dance",s:1518}, {t:"The Weight of a Whisper",s:1757}, {t:"The Space Unwritten",s:1941}, {t:"The Open Road",s:2145}],
  "75": [{t:"Awakening Breeze",s:0}, {t:"Fading Footprints",s:189}, {t:"When the Night Sings",s:400}, {t:"Echoes on the Shore",s:541}, {t:"Whispers Left Behind",s:746}, {t:"The Road Not Taken",s:949}, {t:"Unfinished Lines",s:1116}, {t:"Threads of Time",s:1309}, {t:"When the Wind Remembers",s:1527}, {t:"Beneath the Neon Glow",s:1745}, {t:"The Spaces Between Us",s:1952}, {t:"Awaken to the Dawn",s:2170}],
  "77": [{t:"River of Time",s:0}, {t:"The Stranger's Eyes",s:211}, {t:"Footprints on the Wind",s:566}, {t:"Where the Moonlight Falls",s:759}, {t:"Threads of Gold",s:916}, {t:"The Turning of the Tide",s:1125}, {t:"Whispers on the Water",s:1315}, {t:"Written in the Wind",s:1493}, {t:"Between the Silence",s:1700}, {t:"Golden Threads of Time",s:1900}, {t:"The Light Behind the Sky",s:2096}, {t:"Forever in the Moment",s:2327}],
  "78": [{t:"Destiny as Your Friend",s:0}, {t:"The Chance We Never Took",s:169}, {t:"Raindrop Reverie",s:393}, {t:"Echoes of Tomorrow",s:618}, {t:"Serenade of the Unseen",s:811}, {t:"Beneath the Velvet Sky",s:1127}, {t:"Echoes of the Soul",s:1354}, {t:"Spaces in Time",s:1533}, {t:"When the River Sings Your Name",s:1749}, {t:"Whispers of the Forgotten Dream",s:1953}, {t:"In the Quiet of the Night",s:2156}, {t:"The Heart's Eternal Song",s:2367}],
  "79": [{t:"Echoes of an Unfinished Dream",s:0}, {t:"The Distance Between Heartbeats",s:198}, {t:"Golden Threads in a Tapestry of Time",s:398}, {t:"Footsteps on a Vanishing Road",s:621}, {t:"Where the Moonlight Used to Fall",s:847}, {t:"Whispers in a Half-Forgotten Song",s:1047}, {t:"Beneath the Surface of Time",s:1264}, {t:"The Dance of Forgotten Dreams",s:1502}, {t:"In the Quiet of Tomorrow",s:1721}, {t:"Through the Veil of Time",s:1900}, {t:"Echoes of a Soul's Embrace",s:2119}, {t:"The Light We Become",s:2322}],
  "80": [{t:"Silent Wonders",s:0}, {t:"Echoes of a Distant Heart",s:224}, {t:"Silent Verses on the Breeze",s:459}, {t:"A Place Called Home",s:642}, {t:"Hushed Between the Heartbeats",s:788}, {t:"No Yesterday, No Tomorrow",s:979}, {t:"Unwritten Roads",s:1189}, {t:"Shadows of Unspoken Tomorrows",s:1395}, {t:"Where the River Knows",s:1617}, {t:"Woven in the Wind",s:1820}, {t:"Echoes of the Unseen",s:2040}, {t:"Where the River Knows No Name",s:2242}],
  "81": [{t:"Celestial Beginnings",s:0}, {t:"Urban Reverie",s:169}, {t:"Twilight Conversations",s:349}, {t:"Blue Heart Soliloguy",s:541}, {t:"Melody of Embrace",s:721}, {t:"Rhythms of Destiny",s:935}, {t:"Nocturne of Reflection",s:1087}, {t:"Whispers of the Infinite",s:1296}, {t:"Serenade of the Soul",s:1468}, {t:"Harmonic Truth",s:1663}, {t:"Echoes of Unbound Love",s:1825}, {t:"Dawn of Renewal",s:2000}],
  "82": [{t:"Echoes Beyond the Veil",s:0}, {t:"Dawn of Awakening",s:211}, {t:"Ebbing Shadows",s:431}, {t:"Currents of Connection",s:642}, {t:"Mirrors of the Soul",s:863}, {t:"Fragments of Destiny",s:1045}, {t:"Interwoven Fates",s:1237}, {t:"Embers of Reflection",s:1476}, {t:"Resonance of the Heart",s:1697}, {t:"Infinite Embrace",s:1890}, {t:"Clarity in the Silence",s:2069}, {t:"Transcendental Horizon",s:2274}],
  "83": [{t:"Echoes of a Timeless Heart",s:0}, {t:"Underneath the Lantern Glow",s:195}, {t:"Waves of Forgotten Tomorrows",s:387}, {t:"Silhouettes in Silent Rain",s:596}, {t:"The Space Between Our Words",s:795}, {t:"Beneath the Crescent Glow",s:1031}, {t:"Unfinished Letters",s:1226}, {t:"Autumn's Last Serenade",s:1429}, {t:"A Glimpse Beyond Time",s:1641}, {t:"Stillness Between Stars",s:1955}, {t:"The Weight of Unspoken Words",s:2172}, {t:"Where Time Stands Still",s:2498}],
  "84": [{t:"Rhythms of Awakening",s:0}, {t:"Dancing with Destiny",s:227}, {t:"Eternal Echoes",s:390}, {t:"Waves of Unspoken Grace",s:590}, {t:"Symphony of the Heart's Voyage",s:777}, {t:"Melodies in the Midnight Light",s:967}, {t:"Embers of Unconditional Love",s:1112}, {t:"Pathways of Serendipity",s:1304}, {t:"Chords of Inner Clarity",s:1510}, {t:"Whispers of Timeless Hope",s:1691}, {t:"Reflections in a Gentle Breeze",s:1875}, {t:"Final Cadence of Renewal",s:2084}],
  "85": [{t:"Dawn's Swinging Revelation",s:0}, {t:"Destiny's Rhythmic Dance",s:182}, {t:"Echoes of Timeless Swing",s:382}, {t:"Urban Pulse of Healing",s:664}, {t:"Swing of Unfolding Hearts",s:882}, {t:"Cadence of Inner Wisdom",s:1073}, {t:"Syncopated Journeys",s:1266}, {t:"Harmonic Convergence",s:1444}, {t:"Resonance of the Infinite",s:1657}, {t:"Swing of Serendipity",s:1879}, {t:"Unveiled Truths in Swing",s:2080}, {t:"Rebirth Beneath the Swing",s:2275}],
  "86": [{t:"Lighthearted Improvisations",s:0}, {t:"Liveliness of the Moment",s:324}, {t:"Illusion of the Past",s:500}, {t:"Love is a Mystery",s:782}, {t:"Simplicity of Life",s:967}, {t:"Lost Dreams",s:1161}, {t:"Always Now",s:1401}, {t:"The Way Home",s:1575}, {t:"Everlasting Spring",s:1815}, {t:"Past Feelings",s:2048}, {t:"What Else, What Else",s:2288}, {t:"Such Is Life",s:2357}, {t:"Driving Without Destination",s:2579}, {t:"Minor Steps in Major Time",s:2770}, {t:"Highway to Silence",s:2922}, {t:"Moonlight Over Mulholland",s:3070}, {t:"Shadows on Melrose",s:3253}, {t:"Whispers from the Coast",s:3473}, {t:"The Coffee Was Jazz",s:3713}, {t:"Cool Breeze, Warm Soul",s:3884}],
};

