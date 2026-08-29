(function(){
const se1 = {
  meinKompass: {
    lebensthema:
      "Du m\u00f6chtest dein Leben auf ein solides Fundament stellen. Verantwortung, Verl\u00e4sslichkeit und innere Ordnung spielen dabei eine wichtige Rolle. Oft entsteht das Gef\u00fchl, dass vieles von deinem eigenen Einsatz abh\u00e4ngt und dass du wachsam bleiben musst, damit die Dinge nicht aus dem Ruder laufen. Dein Weg besteht nicht darin, noch perfekter zu werden, sondern zu entdecken, dass auch Unvollkommenheit zum Leben geh\u00f6rt und dass Sicherheit nicht nur durch Kontrolle entsteht.",
    grundstrategie:
      "Die selbsterhaltende Eins versucht, Stabilit\u00e4t durch Disziplin, Ordnung und Selbstkontrolle zu schaffen. Sie beobachtet sich selbst aufmerksam und entwickelt hohe Anspr\u00fcche an das eigene Verhalten. Die Grundfrage lautet h\u00e4ufig: \u201eHabe ich alles richtig gemacht?\u201c",
    staerken: [
      "Verantwortungsbewusstsein",
      "Verl\u00e4sslichkeit",
      "Integrit\u00e4t",
      "Ausdauer und Gewissenhaftigkeit",
      "praktische Vernunft",
      "die F\u00e4higkeit, Dinge zu verbessern",
    ],
    herausforderungen: [
      "Selbstkritik und innerer Druck",
      "Anspannung und Perfektionismus",
      "Ungeduld",
      "\u00fcberm\u00e4\u00dfige Kontrolle",
      "Schwierigkeiten, Fehler zu akzeptieren",
    ],
    entwicklungspotenzial: [
      "dass Fehler menschlich sind",
      "dass Bed\u00fcrfnisse wichtig sind",
      "dass Entspannung keine Schw\u00e4che ist",
      "dass das Leben nicht st\u00e4ndig optimiert werden muss",
    ],
    wandlung: "Aus Kontrolle wird Vertrauen. Aus Anspannung wird Pr\u00e4senz. Aus Selbstverbesserung wird Selbstannahme.",
    gedankeFuerHeute:
      "Vielleicht ist heute nicht der Tag, an dem du noch besser werden musst. Vielleicht ist heute der Tag, an dem du bemerkst, dass bereits vieles gut genug ist.",
  },
  meinKompass_en: {
    lebensthema:
      "You want to build your life on a solid foundation. Responsibility, reliability, and inner order play an important role. There is often a feeling that much depends on your own effort and that you need to stay vigilant to keep things from going off track. Your path is not about becoming even more perfect, but about discovering that imperfection is also part of life and that security does not only come through control.",
    grundstrategie:
      "The self-preservation One tries to create stability through discipline, order, and self-control. They observe themselves attentively and develop high standards for their own behavior. The central question is often: Have I done everything right?",
    staerken: [
      "Sense of responsibility",
      "Reliability",
      "Integrity",
      "Perseverance and conscientiousness",
      "Practical reason",
      "Ability to improve things",
    ],
    herausforderungen: [
      "Self-criticism and inner pressure",
      "Tension and perfectionism",
      "Impatience",
      "Excessive control",
      "Difficulty accepting mistakes",
    ],
    entwicklungspotenzial: [
      "that mistakes are human",
      "that needs are important",
      "that relaxation is not weakness",
      "that life does not need to be constantly optimized",
    ],
    wandlung: "From control comes trust. From tension comes presence. From self-improvement comes self-acceptance.",
    gedankeFuerHeute:
      "Perhaps today is not the day you need to become even better. Perhaps today is the day you notice that much is already good enough.",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SE1-Subtypprofil und die Dynamik innerhalb von Typ 1." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt-f\u00fcr-Schritt herausfinden, ob Typ 1 / SE1 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 1 (Kapitel Typ 1)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 1." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Amethyst und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 1 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const se2 = {
  meinKompass: {
    lebensthema:
      "Du tr\u00e4gst ein tiefes Bed\u00fcrfnis nach N\u00e4he und Geborgenheit in dir \u2014 und du dr\u00fcckst es haupts\u00e4chlich dadurch aus, dass du f\u00fcr andere da bist. F\u00fcrsorge, Praktisches, Zuverl\u00e4ssigkeit: Das sind deine Sprachen der Liebe. Dabei verlierst du leicht den Kontakt zu dem, was du selbst brauchst. Dein innerer Weg f\u00fchrt dich nicht weg vom Geben \u2014 sondern hin zu dir selbst: zur Frage, was du brauchst, und zur Erfahrung, dass deine Bed\u00fcrfnisse genauso z\u00e4hlen wie die der anderen.",
    grundstrategie:
      "Die selbsterhaltende Zwei sichert N\u00e4he und Zugeh\u00f6rigkeit \u00fcber praktische F\u00fcrsorge und emotionale Verf\u00fcgbarkeit. Sie richtet sich stark nach den Bed\u00fcrfnissen anderer und h\u00e4lt die eigenen W\u00fcnsche im Hintergrund. Als Kontratyp unter den Zweien lebt sie ihren Stolz am wenigsten offen: Ihre F\u00fcrsorge ist zur\u00fcckhaltender und st\u00e4rker auf die eigene Absicherung bezogen, und sie tut sich besonders schwer, selbst um Unterst\u00fctzung zu bitten. Die innere Grundfrage lautet: \u201eTue ich genug, damit ich dazugeh\u00f6re und geliebt werde?\u201c",
    staerken: [
      "warme, beruhigende Pr\u00e4senz",
      "nat\u00fcrliche Hilfsbereitschaft und Schutzinstinkt",
      "ausgepr\u00e4gtes Feingef\u00fchl f\u00fcr die Bed\u00fcrfnisse anderer",
      "loyale und verl\u00e4ssliche Verbundenheit",
      "praktische F\u00fcrsorge in konkreten Alltagssituationen",
      "Gabe, anderen das Gef\u00fchl von Geborgenheit zu geben",
    ],
    herausforderungen: [
      "Eigene Bed\u00fcrfnisse zur\u00fcckhalten, um N\u00e4he und Anerkennung nicht zu gef\u00e4hrden",
      "Innere Leere eher \u00fcber F\u00fcrsorge als \u00fcber ehrliche Selbstwahrnehmung regulieren",
      "Ersch\u00f6pfung w\u00e4chst, wenn das Geben nicht erwidert wird \u2014 aber weitergegeben wird",
      "Schwierigkeit, um Unterst\u00fctzung zu bitten oder Grenzen zu setzen",
    ],
    entwicklungspotenzial: [
      "F\u00fcr andere sorgen, ohne sich dabei selbst zu verlieren.",
      "Eigene Bed\u00fcrfnisse erkennen, aussprechen und annehmen lassen.",
      "N\u00e4he entsteht nicht nur durch Geben \u2014 sondern auch durch ehrliches Zeigen der eigenen Verletzlichkeit.",
    ],
    wandlung: "Aus F\u00fcrsorge wird Selbstf\u00fcrsorge. Aus Abh\u00e4ngigkeit wird Eigenst\u00e4ndigkeit. Aus Gebrauchtwerden wird Selbstwert. Aus Anpassung wird Echtheit.",
    gedankeFuerHeute:
      "Was brauchst du heute \u2014 wirklich? Nicht was andere brauchen, nicht was du tun solltest. Was brauchst du selbst?",
  },
  meinKompass_en: {
    lebensthema:
      "You carry a deep need for closeness and security \u2014 and you express it mainly by being there for others. Care, practicality, and reliability are your languages of love. In doing so, you easily lose touch with what you yourself need. Your inner path does not lead you away from giving \u2014 but toward yourself: to the question of what you need, and to the experience that your needs count just as much as everyone else's.",
    grundstrategie:
      "The self-preservation Two secures closeness and belonging through practical care and emotional availability. They orient strongly toward the needs of others and keep their own wishes in the background. As the counter-type among the Twos, they live their pride least openly.",
    staerken: [
      "Practical care",
      "Reliability",
      "Warmth and attentiveness",
      "Loyalty",
      "Ability to create security for others",
    ],
    herausforderungen: [
      "Neglecting own needs",
      "Hidden expectations",
      "Difficulty receiving",
      "Subtle control through giving",
      "Tendency toward martyrdom",
    ],
    entwicklungspotenzial: [
      "that they can also receive",
      "that their own needs are worth expressing",
      "that care can also be self-directed",
      "that love does not always need to be earned",
    ],
    wandlung: "From giving comes receiving. From giving away comes presence. From care for others comes care for self.",
    gedankeFuerHeute:
      "What do you need today \u2014 and who could you ask for it?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SE2-Subtypprofil und die Dynamik innerhalb von Typ 2." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt-f\u00fcr-Schritt herausfinden, ob Typ 2 / SE2 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 2 (Kapitel Typ 2)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 2." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Rosenquarz und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 2 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const se3 = {
  meinKompass: {
    lebensthema:
      "Du wei\u00dft, wie man Dinge erledigt. Dein Blick f\u00e4llt schnell auf das, was funktioniert \u2014 was machbar, umsetzbar und n\u00fctzlich ist. Effizienz ist f\u00fcr dich kein Mittel zum Zweck, sondern ein Lebensgef\u00fchl. Dabei verlierst du leicht etwas: den Kontakt zu dem, was du wirklich brauchst und wirklich f\u00fchlst. Als Kontratyp unter den Dreien wirkst du weniger auff\u00e4llig \u2014 dein Ehrgeiz zeigt sich nicht im Rampenlicht, sondern im stillen Kompetenzgef\u00fchl. Dein innerer Weg f\u00fchrt nicht dorthin, weniger zu leisten \u2014 sondern dich selbst in deiner Leistung nicht zu verlieren.",
    grundstrategie:
      "Die selbsterhaltende Drei sichert Selbstwert und innere Stabilit\u00e4t \u00fcber Effizienz, Kompetenz und das zuverl\u00e4ssige Erf\u00fcllen von Aufgaben \u2014 nicht \u00fcber sichtbaren Glanz oder Statusdemonstration. Als Kontratyp bleibt die Eitelkeit leiser: Sie zeigt sich im Bed\u00fcrfnis, wirksam und kompetent zu sein. Die innere Grundfrage lautet: \u201eLeiste ich genug \u2014 bin ich wirklich verl\u00e4sslich und kompetent?\u201c",
    staerken: [
      "pragmatisch und l\u00f6sungsorientiert",
      "flexibel und situationsklug",
      "effizient und ressourcenbewusst",
      "verl\u00e4sslich und loyal",
      "aufmerksame Beobachtungsgabe",
      "bodenst\u00e4ndig und anpassungsf\u00e4hig",
      "strukturierte, klare Kommunikation",
    ],
    herausforderungen: [
      "Selbstwert stark an Leistung und Funktionieren kn\u00fcpfen",
      "Kontakt zu echten Gef\u00fchlen und inneren Bed\u00fcrfnissen verlieren",
      "Innere Unsicherheit eher durch Besch\u00e4ftigung regulieren als durch Selbstwahrnehmung",
      "Schwierigkeit, innezuhalten, ohne sofort in Zielorientierung zur\u00fcckzukehren",
    ],
    entwicklungspotenzial: [
      "Klar und wirksam handeln, ohne sich nur \u00fcber Leistung zu definieren.",
      "Echte Gef\u00fchle und Bed\u00fcrfnisse zulassen und zeigen.",
      "Innerer Wert entsteht aus Authentizit\u00e4t \u2014 nicht aus Effizienz und Erfolg.",
    ],
    wandlung: "Aus Effizienz wird Echtheit. Aus Funktionieren wird Selbstkontakt. Aus Leistung wird Wertgef\u00fchl. Aus Kontrolle wird Lebendigkeit.",
    gedankeFuerHeute:
      "Dein Wert liegt nicht in dem, was du heute erledigst. Was w\u00fcrde passieren, wenn du heute einfach da w\u00e4rst \u2014 ohne Aufgabe?",
  },
  meinKompass_en: {
    lebensthema:
      "You know how to get things done. Your gaze falls quickly on what works \u2014 what is feasible, implementable, and useful. Efficiency is not a means to an end for you, but a way of life. In doing so, you easily lose something: contact with what you really need and really feel. As the counter-type among the Threes, you appear less conspicuous \u2014 your ambition shows not in the spotlight, but in a quiet sense of competence. Your inner path does not lead to achieving less \u2014 but to not losing yourself in your achievement.",
    grundstrategie:
      "The self-preservation Three secures self-worth and inner stability through efficiency, competence, and reliably fulfilling tasks \u2014 not through visible glamour or status demonstration.",
    staerken: [
      "Efficiency and reliability",
      "Pragmatism",
      "Quiet competence",
      "Willingness to work",
      "Ability to inspire through example",
    ],
    herausforderungen: [
      "Suppressing own feelings",
      "Tendency toward workaholism",
      "Difficulty asking for help",
      "Losing contact with own needs",
      "Identifying too strongly with performance",
    ],
    entwicklungspotenzial: [
      "that rest is also productive",
      "that they have value beyond performance",
      "that feelings can be guideposts",
      "that being enough is not the same as doing enough",
    ],
    wandlung: "From doing comes being. From efficiency comes presence. From performance comes authentic self.",
    gedankeFuerHeute:
      "What would you do today if you had nothing left to prove?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SE3-Subtypprofil und die Dynamik innerhalb von Typ 3." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 3 / SE3 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 3 (Kapitel Typ 3)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 3." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Tigerauge und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 3 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const se4 = {
  meinKompass: {
    lebensthema:
      "Du tr\u00e4gst dein Inneres still. Was andere vielleicht dramatisch nach au\u00dfen bringen w\u00fcrden, h\u00e4ltst du in dir \u2014 differenziert, reflektiert, und mit einer stillen H\u00e4rte gegen dich selbst. Dr. Claudio Naranjo nannte diesen Subtyp die \u201estoische Z\u00e4higkeit\u201c \u2014 eine bemerkenswerte F\u00e4higkeit, Schmerz, Entt\u00e4uschung und Sehnsucht auszuhalten, ohne zu zerbrechen. Als Kontratyp wirkst du nach au\u00dfen oft ruhiger und gefasster, als du dich innen erlebst. Dein innerer Weg f\u00fchrt nicht dazu, weniger zu f\u00fchlen \u2014 sondern zu vertrauen, dass du mit deiner Tiefe auch im Kontakt mit anderen sein kannst.",
    grundstrategie:
      "Die selbsterhaltende Vier reguliert innere Spannung durch Selbstkontrolle, R\u00fcckzug und stillen Durchhaltewillen. Emotionale Intensit\u00e4t bleibt innen \u2014 sie wird selektiv, nur dann geteilt, wenn echter Vertrauen entsteht. Die innere Grundfrage lautet: \u201eKann ich das still tragen \u2014 bin ich stark genug, um damit allein zu sein?\u201c",
    staerken: [
      "au\u00dfergew\u00f6hnliche innere Ausdauer und stille St\u00e4rke",
      "differenzierte, tiefe Selbstwahrnehmung",
      "echte Verl\u00e4sslichkeit in engen, vertrauensvollen Beziehungen",
      "hohe emotionale Intelligenz und Einf\u00fchlungsverm\u00f6gen",
      "\u00e4sthetisches Empfinden und Verbindung mit Sch\u00f6nheit",
      "starke Intuition und Gesp\u00fcr f\u00fcr das Wesentliche",
      "F\u00e4higkeit zu tiefer, bedeutungsvoller Verbindung",
    ],
    herausforderungen: [
      "Schmerz und Sehnsucht still tragen, ohne sie mitteilen zu k\u00f6nnen",
      "Innere Verletzung eher verbergen als zeigen \u2014 und dabei emotional ersch\u00f6pfen",
      "Sich emotional isolieren, wenn N\u00e4he Sicherheit braucht",
      "Schwierigkeit, die eigene Tiefe im Kontakt zug\u00e4nglich zu machen",
    ],
    entwicklungspotenzial: [
      "Vertrauen entwickeln, emotionale Tiefe auch im Kontakt zu zeigen.",
      "Unterst\u00fctzung, W\u00e4rme und echte N\u00e4he zulassen.",
      "Aus stiller innerer St\u00e4rke echte Verbindung entstehen lassen.",
    ],
    wandlung: "Aus Durchhalten wird Selbstannahme. Aus stillem Leiden wird innere Entlastung. Aus R\u00fcckzug wird Verbindung. Aus Mangelgef\u00fchl wird innere F\u00fclle.",
    gedankeFuerHeute:
      "Frieden entsteht nicht am Ende aller Schmerzen \u2014 sondern wenn du aufh\u00f6rst, deine Verletzlichkeit vor dir selbst zu verbergen.",
  },
  meinKompass_en: {
    lebensthema:
      "You carry your inner world quietly. What others might express dramatically outward, you hold within \u2014 differentiated, reflective, and with a quiet toughness toward yourself. Claudio Naranjo called this subtype stoic endurance \u2014 a remarkable ability to bear pain, disappointment, and longing without breaking. As the counter-type, you appear calmer and more composed outwardly than you experience yourself inwardly. Your inner path does not lead to feeling less \u2014 but to trusting that you can be in contact with others from your depth.",
    grundstrategie:
      "The self-preservation Four regulates inner tension through self-control, withdrawal, and quiet perseverance. Emotional intensity stays inward \u2014 it is selectively expressed.",
    staerken: [
      "Inner resilience",
      "Depth and sensitivity",
      "Reflective capacity",
      "Ability to endure difficulty",
      "Quiet integrity",
    ],
    herausforderungen: [
      "Self-criticism and inner harshness",
      "Withdrawing rather than connecting",
      "Suppressed longing",
      "Feeling perpetually not enough",
      "Difficulty expressing vulnerability",
    ],
    entwicklungspotenzial: [
      "that their depth is a gift, not a burden",
      "that vulnerability can create connection",
      "that they deserve to be seen as they are",
      "that their inner world has value even when not expressed",
    ],
    wandlung: "From endurance comes openness. From self-sufficiency comes trust. From silent suffering comes shared depth.",
    gedankeFuerHeute:
      "What would change if today you allowed one person to truly see how things are with you?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SE4-Subtypprofil und die Dynamik innerhalb von Typ 4." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 4 / SE4 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 4 (Kapitel Typ 4)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 4." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Rhodonit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 4 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const se5 = {
  meinKompass: {
    lebensthema: "Du tr\u00e4gst Ruhe in dir \u2014 eine Stille, die von au\u00dfen wie Abstand wirken kann, aber f\u00fcr dich oft der einzige Weg ist, klarer zu denken und sicher zu bleiben. Als Verst\u00e4rkungstyp unter den F\u00fcnfern lebst du die Grundstrategie des Typs am reinsten: Du ziehst dich zur\u00fcck, beobachtest, sparst Energie. Dein Eulenblick bleibt ruhig und wissend, selbst wenn du dich innerlich bereits weit zur\u00fcckgezogen hast. Was von au\u00dfen wie Bed\u00fcrfnislosigkeit wirkt, ist oft ein sorgf\u00e4ltig gebauter Schutzraum. Dein innerer Weg f\u00fchrt nicht dorthin, dich mehr zu verausgaben \u2014 sondern zu erfahren, dass Lebendigkeit nicht ersch\u00f6pft, sondern n\u00e4hrt.",
    grundstrategie: "Die selbsterhaltende F\u00fcnf sichert sich durch maximalen R\u00fcckzug, Selbstgen\u00fcgsamkeit und Energiesparen \u2014 als Verst\u00e4rkungstyp zeigt sie die F\u00fcnfer-Strategie in ihrer reinsten Form: R\u00fcckzug, Distanz und das Sch\u00fctzen jedes inneren Vorrats.",
    staerken: [
      "tiefe Ruhe und innere Sammlung",
      "durchdringender, wissender Blick",
      "klares, strukturiertes Denken",
      "wirtschaftliches Energiemanagement",
      "Selbstgen\u00fcgsamkeit und Unabh\u00e4ngigkeit",
      "genaue Beobachtungsgabe",
      "tiefe Verl\u00e4sslichkeit im Stillen",
    ],
    herausforderungen: [
      "R\u00fcckzug als Lebensform, die leicht zur Isolation werden kann",
      "N\u00e4he und Lebendigkeit erscheinen als etwas, das ersch\u00f6pft statt n\u00e4hrt",
      "Das innere Erleben bleibt anderen oft unsichtbar",
      "Energie wirkt so sparsam, dass W\u00e4rme und Kontakt schwer entstehen",
    ],
    entwicklungspotenzial: [
      "Sich zeigen \u2014 und erfahren, dass Energie durch Kontakt flie\u00dft statt verloren geht.",
      "Innere Stille mit lebendiger Beteiligung verbinden.",
      "Aus der Beobachterposition in echte Teilnahme wechseln.",
    ],
    wandlung: "Aus R\u00fcckzug wird Kontakt. Aus Energiesparen wird Lebendigkeit. Aus Selbstgen\u00fcgsamkeit wird echte Verbundenheit.",
    gedankeFuerHeute: "Ich vertraue darauf, dass Lebendigkeit mich nicht ersch\u00f6pft \u2014 sie n\u00e4hrt mich.",
  },
  meinKompass_en: {
    lebensthema:
      "You carry stillness within you \u2014 a quiet that can look like distance from outside, but for you is often the only way to think more clearly and stay safe. As the amplifier type among the Fives, you live the basic strategy of the type most purely: you withdraw, observe, conserve energy. What looks like needlessness from outside is often a carefully constructed protected space. Your inner path does not lead to exhausting yourself more \u2014 but to experiencing that aliveness nourishes rather than depletes.",
    grundstrategie:
      "The self-preservation Five secures through maximum withdrawal, self-sufficiency, and energy conservation \u2014 as the amplifier type, they live the Five dynamics most clearly.",
    staerken: [
      "Keen observation",
      "Analytical depth",
      "Self-sufficiency",
      "Calm in crises",
      "Ability to think independently",
    ],
    herausforderungen: [
      "Social withdrawal and isolation",
      "Hoarding information, time, and energy",
      "Difficulty with spontaneous sharing",
      "Emotional detachment",
      "Living theoretically rather than actually",
    ],
    entwicklungspotenzial: [
      "that sharing knowledge creates connection",
      "that contact gives energy as well as taking it",
      "that enough is already enough",
      "that life does not need to be completely understood to be lived",
    ],
    wandlung: "From withdrawal comes presence. From accumulation comes sharing. From observation comes participation.",
    gedankeFuerHeute:
      "What do you already know \u2014 that you could share with one person today, even before it feels complete?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SE5-Subtypprofil und die Dynamik innerhalb von Typ 5." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 5 / SE5 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 5 (Kapitel Typ 5)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 5." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Amazonit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 5 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const se6 = {
  meinKompass: {
    lebensthema: "Du sp\u00fcrst Gefahr, bevor andere sie sehen \u2014 und du suchst Halt, bevor der Boden wackelt. Als Verst\u00e4rkungstyp unter den Sechsern lebst du die \u00e4ngstliche, phobische Seite des Typs am deutlichsten: nicht die k\u00e4mpferische, sondern die w\u00e4rmesuchende. Du bindest dich, suchst Schutz, Verb\u00fcndete und Verl\u00e4sslichkeit, und du wirkst dabei oft freundlich, vorsichtig und loyal. Dein Blick scannt die Umgebung wie das Kaninchen, das jede Bewegung registriert. Was darunter liegt, ist nicht Schw\u00e4che, sondern ein feiner Sinn f\u00fcr Sicherheit. Dein innerer Weg f\u00fchrt nicht dorthin, alle Risiken auszuschalten \u2014 sondern zu erfahren, dass du auch dann standh\u00e4ltst, wenn nicht alles abgesichert ist.",
    grundstrategie: "Die selbsterhaltende Sechs sichert sich durch Bindung, Schutz und das Suchen verl\u00e4sslicher Verb\u00fcndeter \u2014 als phobischer Verst\u00e4rkungstyp begegnet sie der Angst nicht mit Kampf, sondern mit W\u00e4rme, Vorsicht und dem Wunsch, nicht allein dazustehen.",
    staerken: [
      "feines Gesp\u00fcr f\u00fcr Sicherheit und Gefahr",
      "w\u00e4rmesuchend, bindungsf\u00e4hig und loyal",
      "vorsichtig und verl\u00e4sslich",
      "aufmerksame Wachsamkeit f\u00fcr Details",
      "f\u00fcrsorglich gegen\u00fcber den eigenen Leuten",
      "bescheiden und zugewandt",
      "verantwortungsvoll im Stillen",
    ],
    herausforderungen: [
      "Gefahren fr\u00fch erkennen und sich dauerhaft absichern wollen",
      "Innere Spannung wird abgesichert statt beruhigt",
      "Schutz wird au\u00dfen gesucht statt in sich selbst",
      "Energie wirkt angespannt, vorsichtig und ersch\u00f6pfbar",
    ],
    entwicklungspotenzial: [
      "Unsicherheit begegnen, ohne sich dauerhaft absichern zu m\u00fcssen.",
      "Der eigenen Wahrnehmung und inneren Stabilit\u00e4t vertrauen.",
      "Sicherheit von innen tragen, nicht nur von au\u00dfen suchen.",
    ],
    wandlung: "Aus Vorsicht wird Vertrauen. Aus Absicherung wird innere Ruhe. Aus gesuchtem Schutz wird eigene Standfestigkeit.",
    gedankeFuerHeute: "Ich darf dem Leben vertrauen \u2014 und halte auch dann stand, wenn nicht alles sicher ist.",
  },
  meinKompass_en: {
    lebensthema:
      "You sense danger before others see it \u2014 and you seek support before the ground starts shaking. As the amplifier type among the Sixes, you live the anxious, phobic side of the type most clearly: not the combative, but the warmth-seeking. You bind, seek protection, allies, and reliability, and in doing so you often appear friendly, cautious, and loyal. What lies beneath is not weakness, but a fine sense for safety. Your inner path does not lead to eliminating all risks \u2014 but to experiencing that you can hold steady even when not everything is secured.",
    grundstrategie:
      "The self-preservation Six secures through binding, protection, and seeking reliable relationships and systems.",
    staerken: [
      "Loyalty",
      "Warmheartedness",
      "Reliability",
      "Anticipatory care",
      "Fine instinct for trustworthiness",
    ],
    herausforderungen: [
      "Anxiety and worry",
      "Dependency on reassurance",
      "Difficulty trusting own judgment",
      "Hesitation and self-doubt",
      "Tendency to catastrophize",
    ],
    entwicklungspotenzial: [
      "that they can trust their own inner voice",
      "that uncertainty is not the same as danger",
      "that they are stronger than their anxiety suggests",
      "that support is available even without constant seeking",
    ],
    wandlung: "From anxiety comes trust. From seeking protection comes inner stability. From doubt comes grounded knowing.",
    gedankeFuerHeute:
      "What is one thing you know to be true right now \u2014 without needing anyone to confirm it?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SE6-Subtypprofil und die Dynamik innerhalb von Typ 6." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 6 / SE6 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 6 (Kapitel Typ 6)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 6." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein H\u00e4matit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 6 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const se7 = {
  meinKompass: {
    lebensthema: "Du liebst das Leben in seiner F\u00fclle \u2014 und du sorgst praktisch daf\u00fcr, dass es dir an nichts fehlt. Als Normaltyp unter den Siebenern lebst du die V\u00f6llerei am bodenst\u00e4ndigsten: Du genie\u00dft, planst, vernetzt dich und schaffst dir Verb\u00fcndete und Annehmlichkeiten, die das Leben angenehm machen. Wo andere Siebener in Ideen schw\u00e4rmen, bist du der genussvolle Macher, der wei\u00df, wie man sich ein gutes Leben einrichtet. Was darunter manchmal verborgen liegt: dieselbe Angst vor Mangel und Leere wie bei allen Siebenern, nur in praktische F\u00fclle \u00fcbersetzt. Dein innerer Weg f\u00fchrt nicht dorthin, weniger zu genie\u00dfen \u2014 sondern zu erfahren, dass auch Stille und Begrenzung genug sein k\u00f6nnen.",
    grundstrategie: "Die selbsterhaltende Sieben sichert sich \u00fcber praktischen Genuss, gute Planung und n\u00fctzliche Verb\u00fcndete \u2014 als Normaltyp \u00fcbersetzt sie die V\u00f6llerei in konkrete F\u00fclle: angenehme Erfahrungen, Netzwerke und Vorsorge, damit es nie an etwas mangelt.",
    staerken: [
      "lebensfroh und genussf\u00e4hig",
      "praktisch und vorausschauend planend",
      "warmherzig und verbindend",
      "ressourcenstark und einfallsreich",
      "optimistisch und tatkr\u00e4ftig",
      "bodenst\u00e4ndig im Umsetzen",
      "gro\u00dfz\u00fcgig im Teilen von Freude",
    ],
    herausforderungen: [
      "Sicherheit \u00fcber das Anh\u00e4ufen von Annehmlichkeiten und M\u00f6glichkeiten suchen",
      "Unangenehme Gef\u00fchle und innere Leere durch Genuss \u00fcberdecken",
      "Schwer genug zu haben, ohne mehr zu wollen",
      "Energie wirkt unruhig, zerstreut und dauerhaft stimuliert",
    ],
    entwicklungspotenzial: [
      "Genie\u00dfen, ohne dem gegenw\u00e4rtigen Moment auszuweichen.",
      "Auch Stille, Begrenzung und Tiefe zulassen.",
      "Erfahren, dass weniger genug sein kann.",
    ],
    wandlung: "Aus Anh\u00e4ufen wird Gen\u00fcgsamkeit. Aus Reizsuche wird Pr\u00e4senz. Aus \u00e4u\u00dferer F\u00fclle wird innere Ruhe.",
    gedankeFuerHeute: "Wenn ich genug habe, ohne mehr zu brauchen, entsteht wirklicher Genuss.",
  },
  meinKompass_en: {
    lebensthema:
      "You love life in its fullness \u2014 and you take care practically to ensure you lack nothing. As the standard type among the Sevens, you live gluttony most grounded: you enjoy, plan, network, and create allies and comforts that make life pleasant. What is sometimes hidden beneath: the same fear of lack and emptiness as all Sevens, only translated into practical fullness. Your inner path does not lead to enjoying less \u2014 but to experiencing that stillness and limitation can also be enough.",
    grundstrategie:
      "The self-preservation Seven secures through practical enjoyment, good planning, and networks of pleasure \u2014 as the standard type, they live the gluttony most tangibly.",
    staerken: [
      "Enjoyment of life",
      "Practical planning",
      "Networking",
      "Optimism",
      "Ability to create comfort and pleasure",
    ],
    herausforderungen: [
      "Avoiding depth and pain through pleasure",
      "Overindulgence and excess",
      "Difficulty with commitment",
      "Fear of deprivation",
      "Restlessness when stillness arrives",
    ],
    entwicklungspotenzial: [
      "that limitation can also feel abundant",
      "that stillness is not emptiness",
      "that discomfort does not last forever",
      "that depth is reachable without losing lightness",
    ],
    wandlung: "From seeking more comes finding enough. From planning ahead comes being present. From fullness outside comes fullness within.",
    gedankeFuerHeute:
      "What is already here \u2014 right now \u2014 that is truly enough?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SE7-Subtypprofil und die Dynamik innerhalb von Typ 7." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 7 / SE7 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 7 (Kapitel Typ 7)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 7." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Rauchquarz und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 7 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const se8 = {
  meinKompass: {
    lebensthema: "Du sorgst daf\u00fcr, dass du \u00fcberlebst und dir niemand zu nahe kommt. Als Normaltyp unter den Achtern lebst du die Kraft am direktesten und unpr\u00e4tenti\u00f6sesten: Es geht um Autonomie, ums Bekommen, was du brauchst, und darum, von niemandem abh\u00e4ngig zu sein. Wie der Orang-Utan brauchst du dein Revier, deine Unabh\u00e4ngigkeit, deine handfeste Sicherheit. Du redest nicht viel \u00fcber St\u00e4rke \u2014 du lebst sie einfach, praktisch und kompromisslos. Was darunter besonders stark gesch\u00fctzt wird, ist die Verletzlichkeit, die jeder Achter in sich tr\u00e4gt. Dein innerer Weg f\u00fchrt nicht dorthin, schw\u00e4cher zu werden \u2014 sondern zu erfahren, dass du auch dann sicher bist, wenn du dich \u00f6ffnest.",
    grundstrategie: "Die selbsterhaltende Acht sichert sich \u00fcber Autonomie, Selbstbehauptung und das handfeste Erf\u00fcllen der eigenen Bed\u00fcrfnisse \u2014 als Normaltyp lebt sie die Kraft am direktesten: unabh\u00e4ngig, kompromisslos, auf das eigene \u00dcberleben und Revier bedacht.",
    staerken: [
      "selbstbestimmt und unabh\u00e4ngig",
      "standhaft und durchsetzungsstark",
      "praktisch und handlungsf\u00e4hig",
      "mutig und kompromisslos",
      "verl\u00e4sslich f\u00fcr die eigenen Leute",
      "klare, unpr\u00e4tenti\u00f6se Direktheit",
      "Kraft, die Sicherheit gibt",
    ],
    herausforderungen: [
      "Autonomie und Kontrolle, um Abh\u00e4ngigkeit zu vermeiden",
      "Den Zugang zu weichen, verletzlichen Seiten abschneiden",
      "Schwer, Unterst\u00fctzung anzunehmen oder Bed\u00fcrftigkeit zu zeigen",
      "Energie wirkt hart, dominant und st\u00e4ndig angespannt",
    ],
    entwicklungspotenzial: [
      "St\u00e4rke nutzen, ohne st\u00e4ndig kontrollieren oder k\u00e4mpfen zu m\u00fcssen.",
      "Vertrauen, Offenheit und echte Verletzlichkeit zulassen.",
      "Erfahren, dass Sich-\u00d6ffnen nicht schw\u00e4cht, sondern verbindet.",
    ],
    wandlung: "Aus Kontrolle wird Vertrauen. Aus H\u00e4rte wird lebendige Kraft. Aus Autonomie wird echte Verbundenheit.",
    gedankeFuerHeute: "Wenn ich Kontrolle loslasse, bleibt meine Kraft lebendig, klar und ohne H\u00e4rte.",
  },
  meinKompass_en: {
    lebensthema:
      "You make sure you survive and that no one gets too close. As the standard type among the Eights, you live strength most directly and unpretentiously: it is about autonomy, getting what you need, and not being dependent on anyone. You do not talk much about strength \u2014 you simply live it, practically and without compromise. What is especially strongly protected beneath is the vulnerability that every Eight carries. Your inner path does not lead to becoming weaker \u2014 but to experiencing that you are also safe when you open up.",
    grundstrategie:
      "The self-preservation Eight secures through autonomy, self-assertion, and concretely fulfilling their own needs.",
    staerken: [
      "Self-sufficiency",
      "Directness",
      "Practical strength",
      "Courage",
      "Ability to assert clear boundaries",
    ],
    herausforderungen: [
      "Difficulty with vulnerability",
      "Tendency toward isolation",
      "Distrust",
      "Dominance in relationships",
      "Difficulty asking for help",
    ],
    entwicklungspotenzial: [
      "that vulnerability is also a form of strength",
      "that support does not mean losing autonomy",
      "that trust can be built gradually",
      "that closeness does not have to threaten independence",
    ],
    wandlung: "From isolation comes chosen connection. From self-sufficiency comes shared strength. From protection comes openness.",
    gedankeFuerHeute:
      "What would you allow today \u2014 from someone you trust \u2014 that you usually handle alone?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SE8-Subtypprofil und die Dynamik innerhalb von Typ 8." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 8 / SE8 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 8 (Kapitel Typ 8)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 8." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Fluorit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 8 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const se9 = {
  meinKompass: {
    lebensthema: "Du findest Frieden im Vertrauten \u2014 in Routinen, kleinen Annehmlichkeiten, im behaglichen Rhythmus des Alltags. Als Normaltyp unter den Neunern lebst du die Tr\u00e4gheit am bodenst\u00e4ndigsten: Du machst es dir gem\u00fctlich, h\u00e4ltst Gewohntes aufrecht und beruhigst innere Spannung mit Ersatzbefriedigungen \u2014 Essen, Fernsehen, Besch\u00e4ftigungen, die nicht wehtun. Wie der Elefant bist du ruhig, geerdet und schwer aus der Bahn zu bringen. Die Falle: \u00dcber dem Bewahren der \u00e4u\u00dferen Ruhe verlierst du leicht den Kontakt zu dem, was du wirklich willst und brauchst. Dein innerer Weg f\u00fchrt nicht dorthin, deine Ruhe aufzugeben \u2014 sondern dich selbst darin nicht zu vergessen.",
    grundstrategie: "Die selbsterhaltende Neun sichert ihren Frieden \u00fcber Komfort, Routinen und vertraute Gewohnheiten \u2014 als Normaltyp bet\u00e4ubt sie innere Spannung mit konkreten Ersatzbefriedigungen, statt die eigenen Bed\u00fcrfnisse und Impulse wirklich zu sp\u00fcren.",
    staerken: [
      "ruhig, geerdet und best\u00e4ndig",
      "gelassen und ausgleichend",
      "praktisch und gen\u00fcgsam",
      "verl\u00e4sslich und geduldig",
      "annehmend und unkompliziert",
      "schafft behagliche Stabilit\u00e4t",
      "nat\u00fcrliche, stille Pr\u00e4senz",
    ],
    herausforderungen: [
      "Gewohntes aufrechterhalten, um Spannung zu vermeiden",
      "Innere Spannung mit Ersatzbefriedigungen bet\u00e4uben statt f\u00fchlen",
      "Den Kontakt zu eigenen W\u00fcnschen und Impulsen verlieren",
      "Energie wirkt schwerf\u00e4llig, passiv und zur\u00fcckhaltend",
    ],
    entwicklungspotenzial: [
      "Ruhig bleiben, ohne sich in Gewohnheit oder Passivit\u00e4t zu verlieren.",
      "Eigene Impulse und Bed\u00fcrfnisse bewusst wahrnehmen.",
      "Innere Ruhe mit Klarheit und Handlungskraft verbinden.",
    ],
    wandlung: "Aus Gewohnheit wird lebendige Pr\u00e4senz. Aus Bet\u00e4ubung wird Selbstkontakt. Aus Tr\u00e4gheit wird ruhige Handlungskraft.",
    gedankeFuerHeute: "Wenn ich mich selbst wichtig nehme und nicht bet\u00e4ube, entsteht lebendige innere Pr\u00e4senz.",
  },
  meinKompass_en: {
    lebensthema:
      "You find peace in the familiar \u2014 in routines, small comforts, in the pleasant rhythm of everyday life. As the standard type among the Nines, you live sloth most grounded: you make yourself comfortable, maintain what is familiar, and soothe inner tension with substitute satisfactions. Like the elephant, you are calm, grounded, and hard to derail. The trap: in maintaining outer calm, you easily lose contact with what you truly want and need. Your inner path does not lead to giving up your calm \u2014 but to not forgetting yourself within it.",
    grundstrategie:
      "The self-preservation Nine secures their peace through comfort, routines, and familiar habits \u2014 as the standard type, they live the sloth most tangibly.",
    staerken: [
      "Steadiness",
      "Warmth",
      "Ability to create comfort",
      "Reliability in the everyday",
      "Grounding presence for others",
    ],
    herausforderungen: [
      "Inertia and procrastination",
      "Substitute satisfactions instead of real contact",
      "Loss of own priorities",
      "Difficulty with change",
      "Numbing rather than feeling",
    ],
    entwicklungspotenzial: [
      "that their own wishes deserve space",
      "that small steps count",
      "that discomfort passes",
      "that presence in their own life is the real home",
    ],
    wandlung: "From numbing comes feeling. From habit comes choice. From comfort comes aliveness.",
    gedankeFuerHeute:
      "What is one small thing you have been postponing \u2014 and what would it feel like to simply begin it today?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SE9-Subtypprofil und die Dynamik innerhalb von Typ 9." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 9 / SE9 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 9 (Kapitel Typ 9)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 9." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Karneol und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 9 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const so1 = {
  meinKompass: {
    lebensthema:
      "Du sp\u00fcrst eine tiefe innere Verpflichtung \u2014 nicht nur dein eigenes Leben in Ordnung zu halten, sondern auch das der Gemeinschaft um dich herum. Missst\u00e4nde, Ungerechtigkeiten oder Widerspr\u00fcche zwischen Anspruch und Wirklichkeit siehst du fr\u00fch und deutlich. Oft entsteht daraus der Impuls, etwas zu ver\u00e4ndern, Klarheit einzufordern oder Verantwortung zu \u00fcbernehmen, wo andere es nicht tun. Dein innerer Weg f\u00fchrt nicht darin, diesen Sinn f\u00fcr Gerechtigkeit aufzugeben \u2014 sondern ihn mit mehr Menschlichkeit und innerer Weite zu verbinden.",
    grundstrategie:
      "Die soziale Eins orientiert sich an moralischen und sozialen Ma\u00dfst\u00e4ben und sucht Stabilit\u00e4t durch das Eintreten f\u00fcr Werte und Prinzipien \u2014 im eigenen Leben und im sozialen Umfeld. Die innere Grundfrage lautet h\u00e4ufig: \u201eWird hier nach richtigen Ma\u00dfst\u00e4ben gehandelt \u2014 und tue ich genug daf\u00fcr?\u201c",
    staerken: [
      "moralische Klarheit und nat\u00fcrliche Orientierungskraft",
      "ausgepr\u00e4gtes Gesp\u00fcr f\u00fcr Gerechtigkeit",
      "Bereitschaft, f\u00fcr Werte einzustehen",
      "Verl\u00e4sslichkeit und Verantwortungsgef\u00fchl",
      "F\u00e4higkeit, Missst\u00e4nde pr\u00e4zise zu benennen",
      "Ordnung und Struktur in Gruppen einbringen",
      "klare Haltung und innere Integrit\u00e4t",
    ],
    herausforderungen: [
      "Leicht als streng, belehrend oder korrektiv erlebt werden",
      "Den eigenen moralischen Ma\u00dfstab auf andere anwenden und dabei Widerstand erzeugen",
      "Innere Spannung, weil die Wirklichkeit nie ganz den Idealen entspricht",
      "Schwierigkeit loszulassen, wenn etwas nicht dem eigenen Verst\u00e4ndnis von Richtig entspricht",
    ],
    entwicklungspotenzial: [
      "Moralische Klarheit mit innerer Weite und Gelassenheit verbinden.",
      "F\u00fcr Werte eintreten, ohne andere zu bewerten oder zu korrigieren.",
      "Verantwortung aus innerer St\u00e4rke tragen, nicht aus innerem Druck.",
    ],
    wandlung: "Aus Zorn wird Klarheit. Aus Bewertung wird Verst\u00e4ndnis. Aus Pflicht wird Freude. Aus Prinzipien wird Menschlichkeit.",
    gedankeFuerHeute:
      "Deine Klarheit und dein Gerechtigkeitssinn sind Geschenke. Heute reicht es, sie zu tragen \u2014 ohne dich in Verbesserung ersch\u00f6pfen zu m\u00fcssen.",
  },
  meinKompass_en: {
    lebensthema:
      "You feel a deep inner obligation \u2014 not only to keep your own life in order, but also that of the community around you. You see injustices and contradictions between ideals and reality early and clearly. This often creates an impulse to change things, demand clarity, or take responsibility where others do not. Your inner path is not about giving up this sense of justice \u2014 but about connecting it with greater humanity and inner spaciousness.",
    grundstrategie:
      "The social One orients toward moral and social standards and finds stability by standing up for values and principles \u2014 in their own life and in the social sphere. The central inner question is often: Am I doing enough for what truly matters?",
    staerken: [
      "Moral clarity",
      "Sense of justice",
      "Commitment to change",
      "Reliability",
      "Ability to inspire others",
    ],
    herausforderungen: [
      "Rigidity in own views",
      "Putting social pressure on others",
      "Difficulty accepting imperfection in systems",
      "Tendency toward moral superiority",
      "Difficulty tolerating contradictions",
    ],
    entwicklungspotenzial: [
      "that others have good reasons for their views",
      "that change takes time",
      "that compassion is also a virtue",
      "that imperfect steps are still progress",
    ],
    wandlung: "From judgment comes understanding. From correction comes accompaniment. From demand comes invitation.",
    gedankeFuerHeute:
      "What if the world is not waiting for you to fix it \u2014 but for you to meet it with more compassion?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SO1-Subtypprofil und die Dynamik innerhalb von Typ 1." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt-f\u00fcr-Schritt herausfinden, ob Typ 1 / SO1 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 1 (Kapitel Typ 1)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 1." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Amethyst und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 1 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const so2 = {
  meinKompass: {
    lebensthema:
      "Du bewegst dich in sozialen Feldern mit einer nat\u00fcrlichen W\u00e4rme und einem feinen Gesp\u00fcr daf\u00fcr, wer was braucht \u2014 und wer zu wem geh\u00f6rt. Menschen verbinden, Netzwerke kn\u00fcpfen, gebraucht werden und wichtig sein: Das gibt dir Halt und Sinn. Doch der Preis ist oft, dass du deinen eigenen Wert an die Resonanz anderer bindest. Dein Weg f\u00fchrt nicht weg aus dem sozialen Engagement \u2014 sondern zu einem Fundament, das unabh\u00e4ngig von Anerkennung tr\u00e4gt.",
    grundstrategie:
      "Die soziale Zwei sichert Zugeh\u00f6rigkeit und Bedeutung \u00fcber Engagement, Hilfe und das Kn\u00fcpfen von Verbindungen im sozialen Raum. Sie erkennt rasch, wer Unterst\u00fctzung braucht und wo sie gebraucht werden kann. Als Verst\u00e4rkungstyp unter den Zweien zeigt sich der Stolz am deutlichsten: Sie stellt ihre F\u00fcrsorge sichtbar in den Dienst der Gruppe und gewinnt \u00fcber Einfluss und Unentbehrlichkeit ihren Platz. Die innere Grundfrage lautet: \u201eBin ich wichtig genug \u2014 werde ich gesehen und gebraucht?\u201c",
    staerken: [
      "nat\u00fcrliches Gesp\u00fcr f\u00fcr Beziehungen und soziale Dynamiken",
      "herzliche, einladende Pr\u00e4senz \u2014 der \u201eGolden-Retriever-Blick\u201c",
      "F\u00e4higkeit, Menschen zu verbinden und Gruppen zu st\u00e4rken",
      "gro\u00dfz\u00fcgige Hilfsbereitschaft und Engagement",
      "loyale und verl\u00e4ssliche Verbundenheit",
      "soziale Kompetenz und emotionale W\u00e4rme",
    ],
    herausforderungen: [
      "Den eigenen Wert stark an soziale Anerkennung und Gebrauchtwerden binden",
      "Wenn Anerkennung ausbleibt, noch mehr geben \u2014 statt eigene Bed\u00fcrfnisse zu benennen",
      "Schwierigkeit, Nein zu sagen, wenn Engagement Grenzen \u00fcbersteigt",
      "Innere Ersch\u00f6pfung durch dauerhaftes Funktionieren f\u00fcr andere",
    ],
    entwicklungspotenzial: [
      "F\u00fcr andere da sein, ohne den eigenen Wert daran zu kn\u00fcpfen.",
      "Beziehungen aus echter Gegenseitigkeit gestalten, nicht nur aus Geben.",
      "Innere Stabilit\u00e4t aufbauen, die nicht von sozialer Resonanz abh\u00e4ngt.",
    ],
    wandlung: "Aus Bedeutungssuche wird Selbstwert. Aus sozialem Engagement wird echte Verbundenheit. Aus Geben wird Empfangen. Aus Anpassung wird Authentizit\u00e4t.",
    gedankeFuerHeute:
      "Heute darfst du auch da sein, ohne n\u00fctzlich zu sein. Dein Dasein allein hat Wert \u2014 unabh\u00e4ngig davon, wer dich gerade braucht.",
  },
  meinKompass_en: {
    lebensthema:
      "You move in social fields with natural warmth and a fine sense for who needs what \u2014 and who belongs together. Connecting people, building networks, being needed and being important: these give you stability and meaning. But the price is often that you tie your own worth to others' responses. Your path does not lead away from social engagement \u2014 but toward a foundation that supports you independent of recognition.",
    grundstrategie:
      "The social Two secures belonging and significance through engagement, help, and building connections in the social space. As the amplifier type among the Twos, they show their pride most clearly: they present their care as something special and expect recognition in return.",
    staerken: [
      "Social intelligence",
      "Generosity",
      "Ability to connect others",
      "Warmth and presence",
      "Inspiring leadership through care",
    ],
    herausforderungen: [
      "Need for recognition",
      "Pride and vanity",
      "Difficulty with boundaries",
      "Tendency to manipulate through giving",
      "Emotional dependency on social role",
    ],
    entwicklungspotenzial: [
      "that their value does not depend on recognition",
      "that boundaries are also an act of love",
      "that genuine connection does not require performance",
      "that they can be seen without having to earn it",
    ],
    wandlung: "From performance comes presence. From networking comes genuine meeting. From needing to give comes freedom to simply be.",
    gedankeFuerHeute:
      "Today, notice once: what would you do if no one were watching \u2014 and no one needed to thank you?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SO2-Subtypprofil und die Dynamik innerhalb von Typ 2." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt-f\u00fcr-Schritt herausfinden, ob Typ 2 / SO2 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 2 (Kapitel Typ 2)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 2." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Rosenquarz und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 2 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const so3 = {
  meinKompass: {
    lebensthema:
      "Du bewegst dich in sozialen Feldern mit einer nat\u00fcrlichen Leistungsenergie \u2014 und du wei\u00dft, wie man Wirkung erzeugt. Erfolg soll nicht nur existieren, sondern sichtbar werden. Anerkennung, Status und Einfluss best\u00e4tigen dir, dass du dazugeh\u00f6rst und z\u00e4hlst. Als Verst\u00e4rkungstyp verk\u00f6rperst du das klassische Bild des Dreiers: zielorientiert, pr\u00e4sent, erfolgsorientiert. Das Gef\u00e4hrliche dabei: Je mehr du dich \u00fcber Au\u00dfenwirkung definierst, desto mehr verlierst du den Kontakt zu dem, was in dir wirklich lebt. Dein Weg f\u00fchrt nicht aus dem sozialen Engagement heraus \u2014 sondern tiefer hinein in dich selbst, damit deine Wirkung aus Echtheit entstehen kann.",
    grundstrategie:
      "Die soziale Drei sichert Bedeutung und Selbstwert \u00fcber sichtbaren Erfolg, Anerkennung und Wirkung im sozialen Raum. Sie entwickelt ein ausgepr\u00e4gtes Gesp\u00fcr f\u00fcr soziale Erwartungen und richtet sich entsprechend aus. Die innere Grundfrage lautet: \u201eSieht man mir an, dass ich erfolgreich bin \u2014 werde ich im sozialen Feld anerkannt?\u201c",
    staerken: [
      "starke, charismatische Ausstrahlung",
      "zielgerichtete, \u00fcberzeugende Energie",
      "ausgepr\u00e4gte soziale Kompetenz und Pr\u00e4senz",
      "F\u00e4higkeit, Gruppen und Prozesse voranzubringen",
      "hohe Disziplin und Leistungsbereitschaft",
      "klare, wirkungsvolle Kommunikation",
      "nat\u00fcrliche F\u00fchrungsqualit\u00e4ten im sozialen Feld",
    ],
    herausforderungen: [
      "Selbstwert stark an Status, Anerkennung und soziale Sichtbarkeit kn\u00fcpfen",
      "Echte Gef\u00fchle hinter Erfolgsimage und Rolle verbergen",
      "Innere Leere durch Aktivit\u00e4t und Erfolg \u00fcberdecken statt f\u00fchlen",
      "Schwierigkeit, sich jenseits von Rolle und Leistung als wertvoll zu erleben",
    ],
    entwicklungspotenzial: [
      "F\u00e4higkeiten zum Wohl des Ganzen einsetzen, ohne sich \u00fcber Status zu definieren.",
      "Authentisch und menschlich bleiben \u2014 auch wenn kein Publikum zuschaut.",
      "Wirkung entsteht aus Echtheit, nicht aus Anpassung an Erwartungen.",
    ],
    wandlung: "Aus Status wird Selbstwert. Aus Erfolg wird Authentizit\u00e4t. Aus Image wird Wahrhaftigkeit. Aus Anerkennung wird innere Sicherheit.",
    gedankeFuerHeute:
      "Heute musst du nirgendwo gl\u00e4nzen. Was w\u00e4rst du, wenn niemand zuschaut \u2014 und w\u00e4re das genug?",
  },
  meinKompass_en: {
    lebensthema:
      "You move in social fields with a natural achievement energy \u2014 and you know how to create impact. Success should not only exist but become visible. Recognition, status, and influence confirm to you that you belong and matter. As the amplifier type, you embody the classic image of the Three: goal-oriented, present, success-focused. The risk is that the more you define yourself through outside impact, the more you lose contact with what truly lives in you. Your path does not lead out of social engagement \u2014 but deeper into yourself, so your impact can arise from authenticity.",
    grundstrategie:
      "The social Three secures significance and self-worth through visible success, recognition, and impact in the social space.",
    staerken: [
      "Charisma",
      "Goal-orientation",
      "Social intelligence",
      "Leadership ability",
      "Inspiring presence",
    ],
    herausforderungen: [
      "Defining self through image",
      "Loss of authentic identity",
      "Competitive thinking",
      "Difficulty showing vulnerability",
      "Confusing image with essence",
    ],
    entwicklungspotenzial: [
      "that success from within is more lasting",
      "that vulnerability strengthens real connection",
      "that achievement and authenticity can coexist",
      "that they can rest without losing their standing",
    ],
    wandlung: "From image comes essence. From performance comes authenticity. From role comes self.",
    gedankeFuerHeute:
      "Who are you when no one is applauding?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SO3-Subtypprofil und die Dynamik innerhalb von Typ 3." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 3 / SO3 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 3 (Kapitel Typ 3)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 3." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Tigerauge und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 3 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const so4 = {
  meinKompass: {
    lebensthema:
      "Du wei\u00dft sehr genau, wie es sich anf\u00fchlt, nicht ganz dazuzugeh\u00f6ren. Dein Blick richtet sich oft dorthin, was andere haben und was dir zu fehlen scheint \u2014 Leichtigkeit, Anerkennung, einen festen Platz. Als Verst\u00e4rkungstyp lebst du die Vier-Dynamik besonders deutlich: Neid wird hier zu einem klar sp\u00fcrbaren, innerlich fast unausweichlichen Bewegung des Vergleichens. Das Schwere daran ist: Je mehr du vergleichst, desto mehr entfernst du dich von dem, was du wirklich schon bist. Dein innerer Weg f\u00fchrt nicht dazu, aufzuh\u00f6ren, tief zu f\u00fchlen \u2014 sondern aufzuh\u00f6ren, deinen Wert im Spiegel anderer zu suchen.",
    grundstrategie:
      "Die soziale Vier sichert Zugeh\u00f6rigkeit und Bedeutung \u00fcber Besonderheit, emotionale Tiefe und das Sichtbarmachen von Anderssein im sozialen Raum. Sie beobachtet fein, wie andere wirken \u2014 und f\u00fchlt gleichzeitig, was ihr zu fehlen scheint. Die innere Grundfrage lautet: \u201eGeh\u00f6re ich wirklich dazu \u2014 oder sieht man mir an, dass ich nicht gen\u00fcge?\u201c",
    staerken: [
      "feine Wahrnehmung f\u00fcr menschliche Verletzlichkeit und Scham",
      "tiefes Mitgef\u00fchl und echtes Zuh\u00f6ren",
      "\u00e4sthetisches Empfinden und Gesp\u00fcr f\u00fcr Bedeutung",
      "emotionale Differenziertheit und Selbstreflexion",
      "authentischer Ausdruck und kreative Tiefe",
      "Verbundenheit mit dem Wesentlichen im Leben",
      "Ber\u00fchrbarkeit, die andere wirklich erreicht",
    ],
    herausforderungen: [
      "Den eigenen Wert stark durch Vergleich mit anderen regulieren",
      "Das Gef\u00fchl von Ausgeschlossensein und Scham verst\u00e4rkt sich durch sozialen Kontext",
      "Innere Traurigkeit und Mangelgef\u00fchl eher kultivieren als verwandeln",
      "Den Zugang zum eigenen Wert verlieren, wenn soziale Resonanz ausbleibt",
    ],
    entwicklungspotenzial: [
      "Den eigenen Wert erleben, ohne st\u00e4ndig im Spiegel anderer zu suchen.",
      "Zugeh\u00f6rigkeit entsteht aus Selbstannahme \u2014 nicht aus Anerkennung.",
      "Tiefe und W\u00fcrde sind bereits da \u2014 sie m\u00fcssen nicht erst verdient werden.",
    ],
    wandlung: "Aus Vergleich wird Selbstwert. Aus Scham wird W\u00fcrde. Aus Au\u00dfenseitergef\u00fchl wird Zugeh\u00f6rigkeit. Aus Mangelgef\u00fchl wird innere F\u00fclle.",
    gedankeFuerHeute:
      "Du musst heute niemandem beweisen, dass du dazugeh\u00f6rst. Du bist bereits hier \u2014 und das gen\u00fcgt.",
  },
  meinKompass_en: {
    lebensthema:
      "You know very well what it feels like not quite to belong. Your gaze often turns toward what others have and what seems to be missing for you \u2014 ease, recognition, a fixed place. As the amplifier type, you live the Four dynamic most clearly: envy becomes an almost inescapable inner movement of comparison. The difficult part: the more you compare, the further you move from what you already truly are. Your inner path does not lead to stopping feeling deeply \u2014 but to stopping searching for your worth in the mirror of others.",
    grundstrategie:
      "The social Four secures belonging and significance through uniqueness, emotional depth, and making visible their differentness in the social space.",
    staerken: [
      "Emotional depth",
      "Authenticity",
      "Sensitivity to beauty and meaning",
      "Empathy",
      "Creative self-expression",
    ],
    herausforderungen: [
      "Envy and comparison",
      "Feeling of fundamental insufficiency",
      "Social withdrawal or dramatic attention-seeking",
      "Idealizing what is absent",
      "Difficulty accepting ordinary belonging",
    ],
    entwicklungspotenzial: [
      "that they already belong as they are",
      "that envy can be a compass toward their own desires",
      "that ordinary moments have depth",
      "that their worth is not relative to others",
    ],
    wandlung: "From comparison comes self-recognition. From envy comes longing. From longing comes direction.",
    gedankeFuerHeute:
      "What is already there \u2014 in you, in your life \u2014 that you have not yet truly seen?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SO4-Subtypprofil und die Dynamik innerhalb von Typ 4." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 4 / SO4 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 4 (Kapitel Typ 4)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 4." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Rhodonit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 4 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const so5 = {
  meinKompass: {
    lebensthema: "Du verstehst Zusammenh\u00e4nge \u2014 und du liebst es, tief in Systeme, Wissen und Strukturen einzutauchen. Als Normaltyp unter den F\u00fcnfern ist dein R\u00fcckzug oft weniger vollst\u00e4ndig als der der selbsterhaltenden F\u00fcnf: Du findest Verbindung zur Welt \u00fcber das, was du wei\u00dft und durchschaust. Dein Oktopusblick erfasst viele Felder gleichzeitig \u2014 Wissen wird f\u00fcr dich zur Br\u00fccke, zur Eintrittskarte, zur Art, dazuzugeh\u00f6ren. Was manchmal fehlt: der direkte, spontane Kontakt \u2014 das Teilen von dem, was du bereits wei\u00dft, ohne es erst vollst\u00e4ndig durchdringen zu m\u00fcssen. Dein innerer Weg f\u00fchrt von kluger Distanz hin zu echter Teilhabe.",
    grundstrategie: "Die soziale F\u00fcnf gewinnt Sicherheit \u00fcber intellektuelles Verstehen, Systemkompetenz und den \u00dcberblick \u00fcber das Gro\u00dfe Ganze \u2014 als Normaltyp findet sie \u00fcber Wissen und Klarheit Zugang zur sozialen Welt, h\u00e4lt dabei aber Gef\u00fchle und direkte N\u00e4he h\u00e4ufig auf Distanz.",
    staerken: [
      "weitsichtiger, vernetzter Blick",
      "systemisches Denken und \u00dcberblick",
      "tiefes Zuh\u00f6ren und ruhige Pr\u00e4senz",
      "klare, durchdachte Kommunikation",
      "analytische Sch\u00e4rfe",
      "strukturierte Herangehensweise",
      "verl\u00e4ssliche Tiefe in Themen und Projekten",
    ],
    herausforderungen: [
      "Wissen und Beobachtung als Ersatz f\u00fcr echte Teilhabe nutzen",
      "Sich hinter intellektueller Distanz oder System\u00fcberblick sch\u00fctzen",
      "Emotionale Pr\u00e4senz und menschliche Erreichbarkeit fallen schwer",
      "Verbindung entsteht im Kopf, aber nicht immer im echten Kontakt",
    ],
    entwicklungspotenzial: [
      "Wissen teilen \u2014 und dabei in echter Verbindung bleiben.",
      "Sich beteiligen, bevor alles vollst\u00e4ndig verstanden ist.",
      "Weisheit entsteht aus gelebter Teilnahme am Leben.",
    ],
    wandlung: "Aus Verstehen wird Verbindung. Aus Beobachten wird Mitwirken. Aus Distanz wird lebendiger Austausch.",
    gedankeFuerHeute: "Ich teile mein Wissen in Verbindung und st\u00e4rke damit das Ganze.",
  },
  meinKompass_en: {
    lebensthema:
      "You understand connections \u2014 and you love diving deep into systems, knowledge, and structures. As the standard type among the Fives, your withdrawal is often less complete: you find connection to the world through what you know and understand. Your gaze encompasses many fields at once \u2014 knowledge becomes your bridge, your entry ticket, your way of belonging. What is sometimes missing: direct, spontaneous contact \u2014 sharing what you already know without first having to penetrate it completely. Your inner path leads from clever distance toward genuine participation.",
    grundstrategie:
      "The social Five gains security through intellectual understanding, systems competence, and an overview of the big picture \u2014 as the standard type, they find belonging through knowledge.",
    staerken: [
      "Systems thinking",
      "Breadth of knowledge",
      "Strategic overview",
      "Intellectual generosity",
      "Ability to make complex things accessible",
    ],
    herausforderungen: [
      "Using knowledge as a substitute for direct contact",
      "Difficulty with emotional spontaneity",
      "Remaining in the observer role",
      "Withdrawing behind expertise",
      "Postponing participation until fully prepared",
    ],
    entwicklungspotenzial: [
      "that belonging is possible even without complete understanding",
      "that sharing feels different from losing",
      "that intellectual presence is also a form of connection",
      "that the gap between knowing and being can be bridged",
    ],
    wandlung: "From understanding comes participation. From overview comes encounter. From theory comes lived experience.",
    gedankeFuerHeute:
      "What do you know that someone around you needs to hear \u2014 and what is stopping you from simply saying it?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SO5-Subtypprofil und die Dynamik innerhalb von Typ 5." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 5 / SO5 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 5 (Kapitel Typ 5)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 5." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Amazonit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 5 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const so6 = {
  meinKompass: {
    lebensthema: "Du suchst Sicherheit in Klarheit \u2014 in Regeln, in Pflicht, in der Gewissheit, das Richtige zu tun und dazuzugeh\u00f6ren. Als Normaltyp unter den Sechsern findest du Halt in der Orientierung an etwas Gr\u00f6\u00dferem: an einer Gruppe, einem System, einer Aufgabe, einer Idee, der du dienen kannst. Wie das Erdm\u00e4nnchen stehst du Wache f\u00fcr die Gemeinschaft \u2014 verantwortungsbewusst, loyal und verl\u00e4sslich. Deine Angst zeigt sich nicht offen, sondern als feines Bed\u00fcrfnis nach Klarheit dar\u00fcber, was gilt und wem man trauen kann. Was darunter manchmal verloren geht, ist die eigene innere Autorit\u00e4t. Dein innerer Weg f\u00fchrt dorthin, die eigene Stimme nicht an Regeln oder Gruppen abzugeben.",
    grundstrategie: "Die soziale Sechs gewinnt Sicherheit \u00fcber Zugeh\u00f6rigkeit, Pflicht und klare Orientierung \u2014 als Normaltyp koppelt sie ihren Halt an Regeln, Systeme und das Vertrauen in eine Gemeinschaft, kann dabei aber die eigene innere Autorit\u00e4t leicht aus der Hand geben.",
    staerken: [
      "verantwortungsbewusst und pflichtbewusst",
      "loyal und verl\u00e4sslich im Team",
      "strategisches, vorausschauendes Denken",
      "klare, \u00fcberlegte Kommunikation",
      "Sinn f\u00fcr Gerechtigkeit und Fairness",
      "kooperativ und gemeinschaftsst\u00e4rkend",
      "verbindlich und einsatzbereit",
    ],
    herausforderungen: [
      "Starke Orientierung an Regeln, Pflicht und Zugeh\u00f6rigkeit",
      "Innere Angst wird \u00fcber Anpassung und Absicherung reguliert",
      "Die eigene innere Autorit\u00e4t wird an Au\u00dfen abgegeben",
      "Energie wirkt vorsichtig, kontrolliert und innerlich angespannt",
    ],
    entwicklungspotenzial: [
      "Sich an Gemeinschaft orientieren, ohne die eigene Stimme zu verlieren.",
      "Der inneren Orientierung und dem pers\u00f6nlichen Standpunkt vertrauen.",
      "Zugeh\u00f6rigkeit aus Selbstvertrauen leben statt aus Anpassung.",
    ],
    wandlung: "Aus Regeln wird innere Orientierung. Aus Pflicht wird Eigenst\u00e4ndigkeit. Aus Anpassung wird eine klare, eigene Position.",
    gedankeFuerHeute: "Mein Gewissen ist meine Autorit\u00e4t \u2014 ich vertraue meiner eigenen inneren Stimme.",
  },
  meinKompass_en: {
    lebensthema:
      "You seek security in clarity \u2014 in rules, in duty, in the certainty of doing the right thing and belonging. As the standard type among the Sixes, you find support in orienting toward something larger: a group, a system, a task, an idea you can serve. Like the meerkat, you stand watch for the community \u2014 responsibly, loyally, and reliably. What is sometimes lost is your own inner authority. Your inner path leads toward not handing your own voice over to rules or groups.",
    grundstrategie:
      "The social Six gains security through belonging, duty, and clear orientation \u2014 as the standard type, they find stability in serving a larger whole.",
    staerken: [
      "Reliability",
      "Loyalty to the community",
      "Sense of responsibility",
      "Ability to build structures",
      "Clear orientation toward shared values",
    ],
    herausforderungen: [
      "Over-conformity to rules and authority",
      "Suppressing own needs for the sake of belonging",
      "Difficulty questioning the system",
      "Anxiety about exclusion",
      "Subordinating own authority to external structures",
    ],
    entwicklungspotenzial: [
      "that their own judgment is trustworthy",
      "that belonging does not require blind conformity",
      "that rules serve people, not the reverse",
      "that they can question a system and still belong to it",
    ],
    wandlung: "From conformity comes integrity. From duty comes choice. From group loyalty comes self-loyalty.",
    gedankeFuerHeute:
      "What would you decide today if no one's approval were at stake?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SO6-Subtypprofil und die Dynamik innerhalb von Typ 6." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 6 / SO6 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 6 (Kapitel Typ 6)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 6." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein H\u00e4matit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 6 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const so7 = {
  meinKompass: {
    lebensthema: "Du brennst f\u00fcr das, was sein k\u00f6nnte \u2014 f\u00fcr Visionen, Projekte und eine bessere Zukunft, die du gemeinsam mit anderen erschaffst. Als Kontratyp unter den Siebenern h\u00e4ltst du deine V\u00f6llerei bewusst zur\u00fcck: Statt nur zu genie\u00dfen, stellst du deine Begeisterung in den Dienst eines gr\u00f6\u00dferen Ziels, einer Gruppe, einer Sache. Wie der Biber baust du unerm\u00fcdlich am Gemeinsamen. Das wirkt edel und ist es oft auch \u2014 doch darunter kann die alte Fluchtbewegung weiterlaufen: Im Dienst an der Vision l\u00e4sst sich Tiefe, Schmerz und Begrenzung ebenso umgehen wie im reinen Genuss. Dein innerer Weg f\u00fchrt dorthin, nicht \u201egut\u201c sein zu m\u00fcssen, um dazuzugeh\u00f6ren.",
    grundstrategie: "Die soziale Sieben verzichtet auf den unmittelbaren Genuss zugunsten eines Ideals \u2014 als Kontratyp stellt sie ihre Begeisterung in den Dienst von Gruppe, Vision und Zukunft, kann dabei aber Tiefe und Begrenzung hinter Idealismus und Aktivit\u00e4t umgehen.",
    staerken: [
      "vision\u00e4r und zukunftsgewandt",
      "kontaktfreudig und vernetzend",
      "ideenreich und inspirierend",
      "einsatzbereit f\u00fcr das Gemeinsame",
      "begeisterungsf\u00e4hig und mitrei\u00dfend",
      "kooperativ und gro\u00dfz\u00fcgig",
      "Sinn f\u00fcr das gr\u00f6\u00dfere Ganze",
    ],
    herausforderungen: [
      "Begeisterung f\u00fcr Ideale kann zur feineren Form der Flucht werden",
      "Innere Unsicherheit wird sozial \u00fcberspielt statt integriert",
      "Genuss wird geopfert, ohne dass echte Tiefe entsteht",
      "Energie wirkt rastlos, oberfl\u00e4chlich und dauerhaft besch\u00e4ftigt",
    ],
    entwicklungspotenzial: [
      "Inspiration einbringen, ohne sich in Aktivit\u00e4t zu verlieren.",
      "Pr\u00e4sent und verbindlich im Kontakt bleiben.",
      "Freude und Zugeh\u00f6rigkeit ohne den Druck, \u201egut\u201c sein zu m\u00fcssen.",
    ],
    wandlung: "Aus Idealismus wird gelebte Tiefe. Aus Aktivit\u00e4t wird Pr\u00e4senz. Aus dem Dienst an der Vision wird echte Verbindung.",
    gedankeFuerHeute: "Ich muss nicht gut sein, um dazuzugeh\u00f6ren \u2014 meine Freude darf ehrlich und nahbar sein.",
  },
  meinKompass_en: {
    lebensthema:
      "You burn for what could be \u2014 for visions, projects, and a better future that you create together with others. As the counter-type among the Sevens, you consciously hold back your gluttony: instead of only enjoying, you put your enthusiasm in service of a larger goal, a group, a cause. This looks noble and often is \u2014 yet beneath it the old escape movement can continue: in service to the vision, depth, pain, and limitation can be avoided just as well as in pure enjoyment. Your inner path leads toward not needing to be good to belong.",
    grundstrategie:
      "The social Seven forgoes immediate enjoyment in favor of an ideal \u2014 as the counter-type, they channel their enthusiasm into serving a larger vision.",
    staerken: [
      "Visionary thinking",
      "Enthusiasm for shared projects",
      "Selflessness",
      "Ability to inspire and organize",
      "Commitment to meaningful causes",
    ],
    herausforderungen: [
      "Using idealism to avoid personal pain",
      "Difficulty with own needs in the context of larger goals",
      "Tendency toward burnout from over-commitment",
      "Postponing personal pleasure indefinitely",
      "Fear of appearing selfish",
    ],
    entwicklungspotenzial: [
      "that serving a vision does not require self-sacrifice",
      "that their own pleasure is also a contribution",
      "that belonging does not require earning it through sacrifice",
      "that the present moment is also worthy of their presence",
    ],
    wandlung: "From self-sacrifice comes self-inclusion. From serving the vision comes living it. From belonging through giving comes belonging through being.",
    gedankeFuerHeute:
      "What do you want \u2014 not for the project, not for the group \u2014 but just for yourself, today?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SO7-Subtypprofil und die Dynamik innerhalb von Typ 7." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 7 / SO7 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 7 (Kapitel Typ 7)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 7." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Rauchquarz und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 7 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const so8 = {
  meinKompass: {
    lebensthema: "Du stellst dich sch\u00fctzend vor die, die dir wichtig sind. Als Kontratyp unter den Achtern richtet sich deine Kraft nach au\u00dfen, in den Dienst anderer: Du \u00fcbernimmst Verantwortung, k\u00e4mpfst f\u00fcr Gerechtigkeit und stehst loyal f\u00fcr deine Gruppe ein. Wie der L\u00f6we sch\u00fctzt du dein Rudel \u2014 das macht dich zur sanfteren, sozialeren Acht, deren Aggression sich in F\u00fcrsorge und F\u00fchrung verwandelt. Die Falle liegt darin, dass Schutz unmerklich in Kontrolle und Besitz kippen kann und deine eigene Verletzlichkeit hinter der Rolle des Starken verborgen bleibt. Dein innerer Weg f\u00fchrt dorthin, zu f\u00fchren, ohne besitzen zu m\u00fcssen.",
    grundstrategie: "Die soziale Acht stellt ihre Kraft in den Dienst der Gemeinschaft \u2014 als Kontratyp wandelt sie Aggression in Schutz, Loyalit\u00e4t und Verantwortung f\u00fcr andere, kann dabei aber F\u00fcrsorge in Kontrolle und Besitz verwandeln.",
    staerken: [
      "f\u00fchrungsstark und verantwortungsbewusst",
      "gerecht und prinzipientreu",
      "besch\u00fctzend und loyal",
      "organisiert und durchsetzungsf\u00e4hig",
      "mutig im Einstehen f\u00fcr andere",
      "gro\u00dfz\u00fcgig und tatkr\u00e4ftig",
      "Autorit\u00e4t, die Sicherheit gibt",
    ],
    herausforderungen: [
      "Schutz und Verantwortung kippen leicht in Kontrolle und Besitz",
      "Beziehungen und Situationen werden unbewusst gesteuert",
      "Die eigene Verletzlichkeit bleibt hinter der starken Rolle verborgen",
      "Energie wirkt dominant und fordernd, innere Anspannung kommt schwer zur Ruhe",
    ],
    entwicklungspotenzial: [
      "Verantwortung und F\u00fchrung \u00fcbernehmen, ohne andere kontrollieren zu m\u00fcssen.",
      "St\u00e4rke mit Mitgef\u00fchl und innerer Offenheit verbinden.",
      "Autorit\u00e4t aus Vertrauen leben statt aus Dominanz.",
    ],
    wandlung: "Aus Kontrolle wird Vertrauen. Aus Besitz wird echter Schutz. Aus Dominanz wird F\u00fchrung, die tr\u00e4gt.",
    gedankeFuerHeute: "Wenn Schutz nicht Besitz wird, entsteht starke, gerechte und vertrauensvolle F\u00fchrung.",
  },
  meinKompass_en: {
    lebensthema:
      "You place yourself protectively before those who matter to you. As the counter-type among the Eights, your strength is directed outward in service of others: you take responsibility, fight for justice, and stand loyally for your group. This makes you the gentler, more social Eight, whose aggression transforms into care and leadership. The trap lies in protection imperceptibly tipping into control and possession, and your own vulnerability remaining hidden behind the role of the strong one. Your inner path leads toward leading without needing to possess.",
    grundstrategie:
      "The social Eight places their strength in service of the community \u2014 as the counter-type, they transform aggression into protection, loyalty, and responsibility.",
    staerken: [
      "Protective strength",
      "Loyalty",
      "Leadership",
      "Sense of justice",
      "Ability to advocate for others",
    ],
    herausforderungen: [
      "Difficulty distinguishing protection from control",
      "Possessiveness in relationships",
      "Suppressing own vulnerability behind strength",
      "Tendency toward dominance even in service",
      "Difficulty allowing others their autonomy",
    ],
    entwicklungspotenzial: [
      "that genuine leadership includes letting others lead",
      "that protection does not require control",
      "that their vulnerability makes them more trustworthy",
      "that caring and possessing are not the same thing",
    ],
    wandlung: "From control comes trust. From protection comes freedom. From strength as armor comes strength as presence.",
    gedankeFuerHeute:
      "Who in your life needs not your protection today \u2014 but simply your presence?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SO8-Subtypprofil und die Dynamik innerhalb von Typ 8." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 8 / SO8 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 8 (Kapitel Typ 8)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 8." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Fluorit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 8 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const so9 = {
  meinKompass: {
    lebensthema: "Du gibst dich hin an die Gemeinschaft \u2014 du sorgst daf\u00fcr, dass alle zusammenhalten, dass niemand au\u00dfen vor bleibt, dass die Stimmung gut ist. Als Kontratyp unter den Neunern ist deine Tr\u00e4gheit \u00fcberraschend aktiv: Statt zu ruhen, arbeitest du hart f\u00fcr die Gruppe, \u00fcbernimmst Aufgaben und stellst dich in den Dienst des Ganzen, um wirklich dazuzugeh\u00f6ren. Wie der B\u00fcffel tr\u00e4gst du verl\u00e4sslich deinen Teil zur Herde bei. Die Falle: Im Einsatz f\u00fcr die Gemeinschaft vergisst du dich selbst \u2014 deine eigene Position, Meinung und M\u00fcdigkeit verschwinden hinter dem Mitmachen. Dein innerer Weg f\u00fchrt dorthin, dazuzugeh\u00f6ren, ohne dich dabei zu verlieren.",
    grundstrategie: "Die soziale Neun sucht ihren Frieden in der Zugeh\u00f6rigkeit zur Gruppe \u2014 als Kontratyp wendet sie die Tr\u00e4gheit nach au\u00dfen: Sie arbeitet engagiert f\u00fcr die Gemeinschaft und ordnet die eigene Position dem Zusammenhalt unter.",
    staerken: [
      "verbindend und gemeinschaftsstiftend",
      "gelassen und ausgleichend",
      "verl\u00e4sslich und einsatzbereit",
      "vermittelnd und vers\u00f6hnend",
      "geduldig und gro\u00dfz\u00fcgig",
      "Gesp\u00fcr f\u00fcr das Wesentliche der Gruppe",
      "schafft Vertrauen und Stabilit\u00e4t",
    ],
    herausforderungen: [
      "Die eigene Position hinter den Zusammenhalt zur\u00fcckstellen",
      "Innere Spannung ausgleichen statt klar benennen",
      "\u00dcber das Mitmachen die eigene Stimme verlieren",
      "Energie wirkt diffus, angepasst und wenig fokussiert",
    ],
    entwicklungspotenzial: [
      "Verbunden bleiben, ohne die eigene Position zu verlieren.",
      "Meinung, W\u00fcnsche und Grenzen klarer einbringen.",
      "Zugeh\u00f6rigkeit aus Selbstst\u00e4ndigkeit leben statt aus Selbstvergessenheit.",
    ],
    wandlung: "Aus Anpassung wird eigene Position. Aus Mitmachen wird echte Teilhabe. Aus Selbstvergessenheit wird klare Pr\u00e4senz.",
    gedankeFuerHeute: "Wenn Zugeh\u00f6rigkeit nicht Selbstvergessenheit bedeutet, entsteht echte und stabile Gemeinschaft.",
  },
  meinKompass_en: {
    lebensthema:
      "You give yourself to the community \u2014 you make sure everyone stays together, that no one is left out, that the mood is good. As the counter-type among the Nines, your sloth is surprisingly active: instead of resting, you work hard for the group, take on tasks, and place yourself in service of the whole in order to truly belong. The trap: in the effort for the community, you forget yourself \u2014 your own position, opinion, and tiredness disappear behind the joining in. Your inner path leads toward belonging without losing yourself in it.",
    grundstrategie:
      "The social Nine seeks their peace in belonging to the group \u2014 as the counter-type, they turn their sloth outward, working hard to secure their place.",
    staerken: [
      "Community spirit",
      "Reliability",
      "Ability to mediate",
      "Inclusive warmth",
      "Willingness to contribute",
    ],
    herausforderungen: [
      "Self-erasure for the sake of the group",
      "Difficulty asserting own opinion",
      "Exhaustion from constant giving",
      "Resentment that is never expressed",
      "Confusing belonging with self-abandonment",
    ],
    entwicklungspotenzial: [
      "that they can belong and still have a position",
      "that their opinion strengthens the group",
      "that genuine rest is part of their contribution",
      "that saying no is also a form of care",
    ],
    wandlung: "From self-erasure comes self-inclusion. From serving comes contributing. From merging comes genuine belonging.",
    gedankeFuerHeute:
      "What would you say today if you knew your opinion truly mattered to the group?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SO9-Subtypprofil und die Dynamik innerhalb von Typ 9." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 9 / SO9 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 9 (Kapitel Typ 9)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 9." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Karneol und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 9 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const sx1 = {
  meinKompass: {
    lebensthema:
      "Dein Leben wird von einer inneren Flamme bewegt \u2014 dem Wunsch nach echter Begegnung, pers\u00f6nlicher Integrit\u00e4t und Tiefe. Du m\u00f6chtest nicht nur korrekt leben, du willst transformieren: dich selbst und die Menschen, die dir nah sind. Diese Intensit\u00e4t ist eine St\u00e4rke \u2014 und eine Herausforderung. Wenn das innere Feuer zum Kampf wird statt zur Verbindung, entsteht Spannung. Dein Weg f\u00fchrt dich von innerer Anspannung hin zu bewusster Hingabe.",
    grundstrategie:
      "Die sexuelle Eins sucht Frieden \u00fcber Intensit\u00e4t, Vollkommenheit und Tiefe in pers\u00f6nlichen Begegnungen. Beziehungen werden zum Feld, in dem innere Ideale gelebt \u2014 oder erzwungen \u2014 werden. Die innere Frage lautet h\u00e4ufig: \u201eEntspricht diese Begegnung, dieser Mensch, dieses Gespr\u00e4ch dem, was ich mir wirklich w\u00fcnsche?\u201c",
    staerken: [
      "leidenschaftliche Tiefe und innere Klarheit",
      "inspirierende Wirkung auf andere",
      "kompromisslose Integrit\u00e4t",
      "Mut zu Konfrontation und Wahrheit",
      "hohe Sensibilit\u00e4t f\u00fcr Unstimmigkeiten",
      "transformative Kraft in Beziehungen",
      "starker innerer Antrieb und Ausdauer",
    ],
    herausforderungen: [
      "Beziehungen geraten unter Druck durch hohe innere Anspr\u00fcche",
      "Leicht in Unzufriedenheit mit sich oder anderen geraten",
      "Emotionale Intensit\u00e4t wirkt k\u00e4mpferisch statt verbindend",
      "Innerer Frieden entweicht, weil die Wirklichkeit nie dem Ideal entspricht",
    ],
    entwicklungspotenzial: [
      "Leidenschaft bewusst f\u00fchren, ohne daraus Kontrolle oder Druck zu machen.",
      "Unvollkommenheit bei sich und anderen zulassen.",
      "Liebe statt Anspruch als Grundlage von Verbindung entdecken.",
    ],
    wandlung: "Aus Kampf wird Hingabe. Aus Anspruch wird Liebe. Aus Kontrolle wird Vertrauen. Aus Intensit\u00e4t wird Tiefe.",
    gedankeFuerHeute:
      "Dein Feuer braucht keine Kontrolle \u2014 es braucht Richtung. Was w\u00e4re, wenn du heute eine Situation einfach l\u00e4sst, wie sie ist?",
  },
  meinKompass_en: {
    lebensthema:
      "Your life is moved by an inner flame \u2014 the desire for genuine encounter, personal integrity, and depth. You want not only to live correctly; you want to transform: yourself and the people close to you. This intensity is a strength \u2014 and a challenge. When the inner fire becomes a struggle rather than connection, tension arises. Your path leads you from inner tension toward conscious surrender.",
    grundstrategie:
      "The sexual One seeks peace through intensity, perfection, and depth in personal encounters. Relationships become the field where inner ideals are lived \u2014 or enforced. The inner question is often: Does this encounter, this person, this connection truly match what I really want?",
    staerken: [
      "Depth in relationships",
      "Passion for transformation",
      "Personal integrity",
      "Ability to inspire",
      "Sensitivity to authenticity",
    ],
    herausforderungen: [
      "High expectations of others",
      "Tendency to try to improve the partner",
      "Jealousy and possessiveness",
      "Inner tension and frustration",
      "Difficulty accepting imperfection in close relationships",
    ],
    entwicklungspotenzial: [
      "that others have their own path",
      "that love does not require perfection",
      "that depth can arise without struggle",
      "that intensity can also be gentle",
    ],
    wandlung: "From inner struggle comes openness. From demanding comes genuine meeting. From tension comes connection.",
    gedankeFuerHeute:
      "What if today you let the person in front of you be exactly as they are \u2014 not as a project, but as a gift?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SX1-Subtypprofil und die Dynamik innerhalb von Typ 1." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt-f\u00fcr-Schritt herausfinden, ob Typ 1 / SX1 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 1 (Kapitel Typ 1)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 1." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Amethyst und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 1 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const sx2 = {
  meinKompass: {
    lebensthema:
      "Du liebst tief und intensiv \u2014 und du willst f\u00fcr die Menschen, die dir wichtig sind, unersetzlich sein. Die F\u00e4higkeit, eine besondere Verbindung zu schaffen, Menschen zu ber\u00fchren und ihnen das Gef\u00fchl zu geben, gesehen zu sein: Das ist eine echte St\u00e4rke. Aber wenn N\u00e4he \u00fcber Hingabe gesichert werden muss, entsteht Ersch\u00f6pfung statt Verbundenheit. Dein Weg f\u00fchrt dich zur Entdeckung, dass echte Liebe nicht verdient werden muss \u2014 sie darf sein.",
    grundstrategie:
      "Die sexuelle Zwei sichert emotionale Bedeutung \u00fcber intensive pers\u00f6nliche Bindung, Anziehung und Hingabe. Sie gibt sich stark in bestimmte Beziehungen hinein und erwartet daf\u00fcr tiefe Resonanz und Einzigartigkeit. Als Normaltyp unter den Zweien richtet sich diese Hingabe ganz auf einzelne Menschen: Sie umwirbt, bezaubert und macht sich unentbehrlich, um eine besondere, exklusive Verbindung zu gewinnen. Die innere Grundfrage lautet: \u201eBin ich f\u00fcr diesen Menschen wirklich unentbehrlich und besonders?\u201c",
    staerken: [
      "magnetische, lebendige Ausstrahlung",
      "F\u00e4higkeit zu tiefer emotionaler Verbindung",
      "starke Bindungsf\u00e4higkeit und exklusive Loyalit\u00e4t",
      "tiefe emotionale Intelligenz und Feinf\u00fchligkeit",
      "leidenschaftliche Pr\u00e4senz und Hingabe",
      "sp\u00fcrt feinste Ver\u00e4nderungen in der Beziehungsenergie",
    ],
    herausforderungen: [
      "Den eigenen Wert an das Begehrtwerden und Unentbehrlichsein kn\u00fcpfen",
      "Beziehungen k\u00f6nnen durch hohe Intensit\u00e4t und Erwartung unter Druck geraten",
      "Leicht die innere Mitte verlieren, wenn Resonanz ausbleibt",
      "N\u00e4he durch Verf\u00fchrung oder emotionale Vereinnahmung herstellen wollen",
    ],
    entwicklungspotenzial: [
      "Tief verbunden sein, ohne dich selbst dabei zu verlieren.",
      "Nicht unentbehrlich sein m\u00fcssen, um geliebt zu werden.",
      "Echte N\u00e4he entsteht durch Wahrhaftigkeit \u2014 nicht durch Intensit\u00e4t oder Geben.",
    ],
    wandlung: "Aus Verf\u00fchrung wird Wahrhaftigkeit. Aus Begehren wird Selbstwert. Aus Verschmelzung wird Verbundenheit. Aus Geben wird Empfangen.",
    gedankeFuerHeute:
      "Du musst heute nichts tun, um geliebt zu werden. Dein Dasein \u2014 so wie du bist \u2014 ist genug.",
  },
  meinKompass_en: {
    lebensthema:
      "You love deeply and intensely \u2014 and you want to be irreplaceable for the people who matter to you. The ability to create a special connection, to touch people and make them feel seen: that is a real strength. But when closeness must be secured through surrender, exhaustion arises instead of connection. Your path leads you to discovering that real love does not need to be earned \u2014 it may simply be.",
    grundstrategie:
      "The sexual Two secures emotional significance through intense personal bond, attraction, and surrender. They give themselves strongly into certain relationships and expect deep resonance and uniqueness in return.",
    staerken: [
      "Deep capacity for love",
      "Emotional presence",
      "Ability to create special connection",
      "Passion",
      "Seductive warmth",
    ],
    herausforderungen: [
      "Fear of losing the bond",
      "Emotional dependency",
      "Jealousy",
      "Blurring own identity in relationships",
      "Hidden expectations and hurt",
    ],
    entwicklungspotenzial: [
      "that genuine love does not require surrender",
      "that they can be loved without having to be indispensable",
      "that their own identity deserves space",
      "that closeness is possible without losing themselves",
    ],
    wandlung: "From yearning comes trust. From surrender comes genuine encounter. From needing to be needed comes freedom to love.",
    gedankeFuerHeute:
      "What if today you were loved not because of what you do \u2014 but simply because you are here?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SX2-Subtypprofil und die Dynamik innerhalb von Typ 2." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt-f\u00fcr-Schritt herausfinden, ob Typ 2 / SX2 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 2 (Kapitel Typ 2)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 2." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Rosenquarz und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 2 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const sx3 = {
  meinKompass: {
    lebensthema:
      "Du strahlst \u2014 und das ist keine Maske. Pers\u00f6nliche Wirkung, Charisma und die F\u00e4higkeit, Menschen direkt zu ber\u00fchren und zu faszinieren: Das geh\u00f6rt wirklich zu dir. Doch wenn diese Ausstrahlung zur Bedingung f\u00fcr deinen eigenen Wert wird, entsteht ein innerer Kreislauf: Du inszenierst, um gesehen zu werden \u2014 und verlierst dabei das Wesentliche. Als Normaltyp strukturiert sich die Drei-Dynamik in dir besonders klar: Leistung, Ausstrahlung und Wunsch nach Bewunderung gehen nahtlos ineinander \u00fcber. Dein Weg f\u00fchrt nicht dazu, weniger zu strahlen \u2014 sondern die Quelle dieses Lichts wirklich in dir selbst zu finden.",
    grundstrategie:
      "Die sexuelle Drei erlebt Wert und Erfolg in enger Verbindung mit pers\u00f6nlicher Ausstrahlung und unmittelbarer Resonanz im direkten Kontakt. Sie passt sich fein an das an, was begehrt und bewundert wird \u2014 und verliert dabei leicht Zugang zu authentischem Erleben. Die innere Grundfrage lautet: \u201eWirke ich auf diesen Menschen \u2014 bin ich begehrenswert und besonders genug?\u201c",
    staerken: [
      "magnetische, lebendige Ausstrahlung",
      "nat\u00fcrliche F\u00e4higkeit, Aufmerksamkeit zu binden",
      "charmant, stilsicher und emotional pr\u00e4sent",
      "feine Wahrnehmung f\u00fcr Resonanz und Reaktionen anderer",
      "begeisterungsf\u00e4hig und kreativ",
      "leidenschaftliche Energie und Dynamik",
      "f\u00e4hig zu echter, tiefer Verbindung \u2014 wenn Inszenierung losl\u00e4sst",
    ],
    herausforderungen: [
      "Wert an Bewunderung und Begehrtwerden im direkten Kontakt kn\u00fcpfen",
      "Leicht eine idealisierte Rolle einnehmen statt echte Authentizit\u00e4t zu zeigen",
      "Emotionale Spannung \u00fcber Attraktivit\u00e4t und Wirkung kompensieren",
      "Beziehungen verlieren an Echtheit, wenn Resonanz ausbleibt",
    ],
    entwicklungspotenzial: [
      "Sich offen und strahlend zeigen, ohne eine Rolle aufrechterhalten zu m\u00fcssen.",
      "In echtem Kontakt mit dem inneren Wesen bleiben \u2014 auch wenn niemand bewundert.",
      "Echte Ausstrahlung entsteht aus Wahrhaftigkeit, nicht aus Inszenierung.",
    ],
    wandlung: "Aus Ausstrahlung wird Echtheit. Aus Attraktivit\u00e4t wird Selbstwert. Aus Begehren wird Authentizit\u00e4t. Aus Inszenierung wird lebendige Pr\u00e4senz.",
    gedankeFuerHeute:
      "Wahre Anziehung entsteht, wenn du aufh\u00f6rst, anderen zu gefallen \u2014 und beginnst, du selbst zu sein.",
  },
  meinKompass_en: {
    lebensthema:
      "You radiate \u2014 and that is not a mask. Personal impact, charisma, and the ability to directly touch and fascinate people: these truly belong to you. But when this radiance becomes a condition for your own worth, an inner cycle arises: you perform to be seen \u2014 and lose what is essential in doing so. Your path does not lead to shining less \u2014 but to truly finding the source of that light within yourself.",
    grundstrategie:
      "The sexual Three experiences worth and success in close connection with personal charisma and immediate resonance in direct contact.",
    staerken: [
      "Natural charisma",
      "Magnetic presence",
      "Ability to inspire",
      "Emotional intensity",
      "Direct personal impact",
    ],
    herausforderungen: [
      "Confusing image with identity",
      "Need for admiration",
      "Emotional volatility",
      "Jealousy",
      "Difficulty distinguishing genuine feeling from performance",
    ],
    entwicklungspotenzial: [
      "that their genuine self is more magnetic than any performance",
      "that they can be seen without having to shine",
      "that real connection requires no stage",
      "that stillness is also a form of presence",
    ],
    wandlung: "From radiance comes depth. From performance comes encounter. From impact comes authenticity.",
    gedankeFuerHeute:
      "Today, allow yourself one moment where you do not have to shine \u2014 and see what you find there.",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SX3-Subtypprofil und die Dynamik innerhalb von Typ 3." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 3 / SX3 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 3 (Kapitel Typ 3)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 3." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Tigerauge und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 3 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const sx4 = {
  meinKompass: {
    lebensthema:
      "Du liebst intensiv \u2014 und du leidest intensiv. Das ist keine Schw\u00e4che, sondern der Kern dieses Subtyps: Gef\u00fchle werden nicht ged\u00e4mpft oder verwaltet, sie werden gelebt \u2014 direkt, unmittelbar, sichtbar. Du suchst nach Begegnungen, die wirklich etwas bedeuten, nach Beziehungen, die dich ber\u00fchren und dein Sosein vollst\u00e4ndig sehen. Als Normaltyp des Vierers strukturiert sich die Dynamik hier besonders klar: Sehnsucht, Leidenschaft und das Gef\u00fchl des Mangels geh\u00f6ren zu deinem unmittelbaren Erleben. Dein Weg f\u00fchrt nicht dazu, diese Intensit\u00e4t zu unterdr\u00fccken \u2014 sondern sie nicht mehr als Beweis deines Mangels zu lesen.",
    grundstrategie:
      "Die sexuelle Vier sichert emotionale Bedeutung \u00fcber Intensit\u00e4t, Leidenschaft und unmittelbaren Ausdruck im pers\u00f6nlichen Kontakt. Sie sucht Begegnungen, die wirklich ber\u00fchren \u2014 und reagiert direkt und stark, wenn Entt\u00e4uschung, Frustration oder Neid entstehen. Die innere Grundfrage lautet: \u201eWerde ich wirklich gesehen \u2014 gibt es in dieser Begegnung echte Tiefe?\u201c",
    staerken: [
      "emotionale Intensit\u00e4t und leidenschaftliche Lebendigkeit",
      "direkte, authentische Ausdruckskraft",
      "feine Wahrnehmung f\u00fcr emotionale Qualit\u00e4t und Resonanz",
      "tiefe, loyale Bindungsf\u00e4higkeit",
      "kreative Originalit\u00e4t und \u00e4sthetisches Feingef\u00fchl",
      "magnetische Pr\u00e4senz und Ber\u00fchrbarkeit",
      "F\u00e4higkeit zu echter, tiefer zwischenmenschlicher Verbindung",
    ],
    herausforderungen: [
      "Leicht in Drama, Sehnsucht und emotionale Zuspitzung geraten",
      "Intensit\u00e4t als Mittel einsetzen, um Verbindung zu erzeugen oder Mangel zu \u00fcberdecken",
      "Entt\u00e4uschung und Verletzung stark und direkt zeigen \u2014 was Beziehungen belasten kann",
      "Innere Ruhe verlieren, wenn Resonanz ausbleibt oder N\u00e4he nicht vollst\u00e4ndig erwidert wird",
    ],
    entwicklungspotenzial: [
      "Intensive Gef\u00fchle erleben, ohne sie weiter anzuheizen oder zur Identit\u00e4t zu machen.",
      "Tiefe N\u00e4he zulassen \u2014 ohne emotionale Zuspitzung als Eintritt zu brauchen.",
      "Leidenschaft und innerer Frieden k\u00f6nnen zusammen existieren.",
    ],
    wandlung: "Aus Leidenschaft wird Selbstannahme. Aus Konkurrenz wird Verbundenheit. Aus Intensit\u00e4t wird innerer Frieden. Aus Begehren wird W\u00fcrde.",
    gedankeFuerHeute:
      "Deine Tiefe braucht keine Steigerung, um real zu sein. Was ist heute \u2014 genau jetzt \u2014 wirklich da?",
  },
  meinKompass_en: {
    lebensthema:
      "You love intensely \u2014 and you suffer intensely. That is not a weakness, but the core of this subtype: feelings are not dampened or managed, they are lived \u2014 directly, immediately, visibly. You seek encounters that truly mean something, relationships that touch you and see your being completely. Your path does not lead to suppressing this intensity \u2014 but to no longer reading it as proof of your insufficiency.",
    grundstrategie:
      "The sexual Four secures emotional significance through intensity, passion, and immediate expression in personal contact.",
    staerken: [
      "Emotional intensity",
      "Authenticity",
      "Depth in relationships",
      "Creative passion",
      "Ability to be moved and to move others",
    ],
    herausforderungen: [
      "Emotional turbulence",
      "Idealization and devaluation",
      "Fear of abandonment",
      "Merging identity with suffering",
      "Difficulty with the ordinary in relationships",
    ],
    entwicklungspotenzial: [
      "that intensity can also arise without pain",
      "that stability is not the same as emptiness",
      "that longing can be met in the present",
      "that their depth does not require drama to be real",
    ],
    wandlung: "From drama comes depth. From longing comes presence. From suffering comes aliveness.",
    gedankeFuerHeute:
      "What is here right now \u2014 not in memory or longing \u2014 that you can actually touch?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SX4-Subtypprofil und die Dynamik innerhalb von Typ 4." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 4 / SX4 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 4 (Kapitel Typ 4)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 4." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Rhodonit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 4 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const sx5 = {
  meinKompass: {
    lebensthema: "Du sehnst dich nach Tiefe \u2014 nach dem Einen, dem du dich wirklich zeigen kannst. Als Kontratyp unter den F\u00fcnfern wirkst du \u00fcberraschend intensiv und pers\u00f6nlich, wenn du vertraust. Von au\u00dfen ist das kaum vorherzusagen: Der Igel tr\u00e4gt seinen Schutz nach au\u00dfen \u2014 aber wenn jemand nah genug kommt, \u00f6ffnet er sich mit einer W\u00e4rme, die \u00fcberrascht. Dein Beziehungsideal ist Tiefe: Wissen und Vertrauen, Erkenntnis und N\u00e4he, alles in einer besonderen Verbindung. Was dabei schwer bleibt: diese Offenheit auszuhalten, ohne dich wieder in R\u00fcckzug oder Kontrolle zu fl\u00fcchten. Dein innerer Weg f\u00fchrt von scheuer Sehnsucht hin zu gelebter Verbindung.",
    grundstrategie: "Die sexuelle F\u00fcnf sichert sich \u00fcber selektive, tiefe Bindung an wenige besondere Menschen \u2014 als Kontratyp wirkt sie intensiver und pers\u00f6nlicher als die anderen F\u00fcnfer-Subtypen, sch\u00fctzt ihre Innenwelt aber ebenso sorgf\u00e4ltig: N\u00e4he entsteht langsam, in Vertrauen und Tiefe.",
    staerken: [
      "feine Wahrnehmung und emotionale Tiefe",
      "tiefe Bindungsf\u00e4higkeit mit Wenigen",
      "intellektuelle Intensit\u00e4t und pers\u00f6nliche W\u00e4rme",
      "ehrliches, substanzielles Gespr\u00e4ch",
      "Loyalit\u00e4t und Verl\u00e4sslichkeit in engen Beziehungen",
      "intuitive Weisheit",
      "stille, zugewandte St\u00e4rke",
    ],
    herausforderungen: [
      "Tiefe Sehnsucht nach Verbindung und gleichzeitiger Schutz der Innenwelt",
      "Offene N\u00e4he erzeugt Angst vor Aufl\u00f6sung oder Ersch\u00f6pfung",
      "Beziehungen werden leicht idealisiert und auf Abstand gehalten",
      "Wechsel zwischen intensiver Sehnsucht und R\u00fcckzug kostet viel Energie",
    ],
    entwicklungspotenzial: [
      "Sich \u00f6ffnen \u2014 und erfahren, dass man dabei sich selbst nicht verliert.",
      "Echte N\u00e4he zulassen, bevor alles sicher genug erscheint.",
      "Aus scheuer Sehnsucht wird gelebte, lebendige Verbindung.",
    ],
    wandlung: "Aus Sehnsucht wird Wirklichkeit. Aus Idealisierung wird Begegnung. Aus Scheu wird gelebte N\u00e4he.",
    gedankeFuerHeute: "Ich darf mich zeigen und verbinden, ohne mich zu verlieren.",
  },
  meinKompass_en: {
    lebensthema:
      "You long for depth \u2014 for the one person to whom you can truly show yourself. As the counter-type among the Fives, you appear surprisingly intense and personal when you trust. The hedgehog carries its protection outward \u2014 but when someone comes close enough, it opens with a warmth that surprises. Your relationship ideal is depth: knowledge and trust, insight and closeness, all in one special connection. What remains difficult: enduring this openness without retreating into withdrawal or control. Your inner path leads from shy longing toward lived connection.",
    grundstrategie:
      "The sexual Five secures through selective, deep bonds with a few special people \u2014 as the counter-type, they appear more intense and open when trust is established.",
    staerken: [
      "Depth in relationships",
      "Intellectual and emotional intensity",
      "Loyalty",
      "Unique openness in trust",
      "Ability to see the other deeply",
    ],
    herausforderungen: [
      "Extreme selectivity in relationships",
      "Fear of intrusion",
      "Withdrawing when feeling too close",
      "Difficulty maintaining multiple connections",
      "Jealously protecting the special bond",
    ],
    entwicklungspotenzial: [
      "that closeness does not exhaust if chosen freely",
      "that more connections are possible without losing depth",
      "that vulnerability in relationships is a strength",
      "that trust can grow gradually",
    ],
    wandlung: "From selective withdrawal comes chosen openness. From shy longing comes real encounter. From depth in theory comes depth in life.",
    gedankeFuerHeute:
      "To whom could you show a little more of yourself today \u2014 and what is truly stopping you?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SX5-Subtypprofil und die Dynamik innerhalb von Typ 5." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 5 / SX5 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 5 (Kapitel Typ 5)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 5." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Amazonit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 5 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const sx6 = {
  meinKompass: {
    lebensthema: "Wo andere bei Angst zur\u00fcckweichen, gehst du nach vorn. Als Kontratyp unter den Sechsern begegnest du der Angst nicht mit Vorsicht, sondern mit St\u00e4rke \u2014 du suchst die Herausforderung, um dir selbst zu beweisen, dass du nicht \u00e4ngstlich bist. Dein Wolfsblick ist intensiv, pr\u00fcfend und kampfbereit; du sp\u00fcrst Bedrohung fr\u00fch und stellst dich ihr. In Beziehungen suchst du Intensit\u00e4t, Treue und absolute Verl\u00e4sslichkeit \u2014 und testest sie zugleich. Was unter dem Mut liegt, ist dieselbe Angst wie bei allen Sechsern, nur nach au\u00dfen gewendet. Dein innerer Weg f\u00fchrt nicht dorthin, h\u00e4rter zu werden \u2014 sondern zu erfahren, dass echte St\u00e4rke aus Vertrauen entsteht, nicht aus Kampf.",
    grundstrategie: "Die sexuelle Sechs \u00fcberwindet Angst durch Mut, St\u00e4rke und intensive Bindung \u2014 als gegenphobischer Kontratyp wendet sie sich der Bedrohung k\u00e4mpferisch zu, statt ihr auszuweichen, und verdeckt die innere Unsicherheit hinter Entschlossenheit und Kraft.",
    staerken: [
      "mutig und entschlossen",
      "intensiv wachsam und scharfsinnig",
      "schutzbereit und loyal bis zum \u00c4u\u00dfersten",
      "leidenschaftlich und durchsetzungsstark",
      "strategische Intelligenz unter Druck",
      "Ausdauer und Kampfgeist",
      "kraftvoll und pr\u00e4sent",
    ],
    herausforderungen: [
      "Gegen Angst angehen, indem St\u00e4rke und Widerstand gezeigt werden",
      "Den Zugang zur eigenen Verletzlichkeit leicht verlieren",
      "N\u00e4he wird \u00fcber Kampf und Konfrontation getestet",
      "Energie wirkt k\u00e4mpferisch, impulsiv und dauerhaft unter Strom",
    ],
    entwicklungspotenzial: [
      "Kraft nutzen, ohne st\u00e4ndig k\u00e4mpfen oder sich beweisen zu m\u00fcssen.",
      "Angst wahrnehmen, ohne sie bek\u00e4mpfen zu m\u00fcssen.",
      "Offen f\u00fcr Vertrauen und echte Verletzlichkeit bleiben.",
    ],
    wandlung: "Aus Gegenangriff wird Vertrauen. Aus H\u00e4rte wird Herzenskontakt. Aus Kampf wird innerer Frieden.",
    gedankeFuerHeute: "Echte St\u00e4rke entsteht aus Vertrauen \u2014 ich muss nicht k\u00e4mpfen, um sicher zu sein.",
  },
  meinKompass_en: {
    lebensthema:
      "Where others retreat at fear, you move forward. As the counter-type among the Sixes, you meet fear not with caution but with strength \u2014 you seek the challenge to prove to yourself that you are not afraid. Your gaze is intense, probing, and ready for battle; you sense threat early and face it. In relationships you seek intensity, loyalty, and absolute reliability \u2014 and simultaneously test them. What lies beneath the courage is the same anxiety as in all Sixes, only turned outward. Your inner path does not lead to becoming harder \u2014 but to experiencing that true strength arises from trust, not from combat.",
    grundstrategie:
      "The sexual Six overcomes anxiety through courage, strength, and intense bonding \u2014 as the counter-phobic type, they meet danger head-on rather than avoiding it.",
    staerken: [
      "Courage",
      "Intensity in relationships",
      "Loyalty and commitment",
      "Direct and honest communication",
      "Ability to face what others avoid",
    ],
    herausforderungen: [
      "Aggression and provocativeness",
      "Difficulty trusting completely",
      "Testing the loyalty of others to the breaking point",
      "Confusing strength with hardness",
      "Suppressing the very fear that drives them",
    ],
    entwicklungspotenzial: [
      "that genuine strength includes vulnerability",
      "that trust does not require testing",
      "that courage is also the courage to be afraid",
      "that safety can be built rather than fought for",
    ],
    wandlung: "From combat comes trust. From testing comes acceptance. From proving strength comes being at peace with it.",
    gedankeFuerHeute:
      "What would you risk today if you knew you were truly safe?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SX6-Subtypprofil und die Dynamik innerhalb von Typ 6." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 6 / SX6 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 6 (Kapitel Typ 6)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 6." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein H\u00e4matit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 6 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const sx7 = {
  meinKompass: {
    lebensthema: "Du willst das Leben in seiner h\u00f6chsten Intensit\u00e4t \u2014 leuchtend, grenzenlos, voller M\u00f6glichkeit. Als Verst\u00e4rkungstyp unter den Siebenern lebst du die Begeisterung am gl\u00fchendsten: Du idealisierst, schw\u00e4rmst, malst dir das Au\u00dfergew\u00f6hnliche aus und rei\u00dft andere mit deiner Euphorie mit. Wie der Schimpanse springst du voller Lebenslust von einem Funken zum n\u00e4chsten. Die Welt erscheint dir oft sch\u00f6ner in der Vorstellung als in der n\u00fcchternen Wirklichkeit \u2014 und genau dort liegt die feine Falle: Die Begeisterung f\u00fcr das, was sein k\u00f6nnte, kann von dem ablenken, was gerade ist. Dein innerer Weg f\u00fchrt nicht dorthin, weniger zu leuchten \u2014 sondern zu erfahren, dass echte Tiefe erf\u00fcllender ist als das gejagte Besondere.",
    grundstrategie: "Die sexuelle Sieben sucht Sicherheit in intensiver Begeisterung, Idealisierung und au\u00dfergew\u00f6hnlichen Erfahrungen \u2014 als Verst\u00e4rkungstyp lebt sie die V\u00f6llerei euphorisch und schw\u00e4rmerisch und entfernt sich dabei leicht von der n\u00fcchternen Gegenwart.",
    staerken: [
      "leidenschaftlich und mitrei\u00dfend",
      "magnetisch und begeisterungsf\u00e4hig",
      "fantasievoll und ideenreich",
      "abenteuerlustig und mutig",
      "sinnlich und lebenshungrig",
      "inspirierend f\u00fcr andere",
      "offen f\u00fcr das Au\u00dfergew\u00f6hnliche",
    ],
    herausforderungen: [
      "Idealisierung und Euphorie \u00fcberdecken die n\u00fcchterne Wirklichkeit",
      "Sich leicht vom gegenw\u00e4rtigen Moment in Fantasien entfernen",
      "Ern\u00fcchterung und Begrenzung werden vermieden",
      "Energie wird euphorisch, sprunghaft und schwer zentrierbar",
    ],
    entwicklungspotenzial: [
      "Intensit\u00e4t erleben, ohne sich in Fantasien oder M\u00f6glichkeiten zu verlieren.",
      "Mit dem K\u00f6rper und dem gegenw\u00e4rtigen Moment verbunden bleiben.",
      "Erfahren, dass Tiefe erf\u00fcllender ist als das gejagte Besondere.",
    ],
    wandlung: "Aus Idealisierung wird Wirklichkeit. Aus Euphorie wird Pr\u00e4senz. Aus dem Jagen des Besonderen wird echte, tiefe Verbundenheit.",
    gedankeFuerHeute: "Wenn ich Tiefe zulasse, statt das Besondere zu jagen, entsteht echte Erf\u00fcllung.",
  },
  meinKompass_en: {
    lebensthema:
      "You want life at its highest intensity \u2014 glowing, boundless, full of possibility. As the amplifier type among the Sevens, you live enthusiasm most ardently: you idealize, are captivated, and sweep others along with your euphoria. The world often appears more beautiful in imagination than in sober reality \u2014 and exactly there lies the subtle trap: enthusiasm for what could be can distract from what is right now. Your inner path does not lead to shining less \u2014 but to experiencing that real depth is more fulfilling than the chased extraordinary.",
    grundstrategie:
      "The sexual Seven seeks security in intensity, idealization, and inspiring personal connections.",
    staerken: [
      "Infectious enthusiasm",
      "Creative imagination",
      "Ability to inspire",
      "Openness to the new",
      "Visionary joy of life",
    ],
    herausforderungen: [
      "Difficulty sustaining commitment",
      "Idealization followed by disillusionment",
      "Avoiding ordinariness and depth",
      "Chasing novelty at the expense of presence",
      "Difficulty with painful reality",
    ],
    entwicklungspotenzial: [
      "that depth is more fulfilling than breadth",
      "that the ordinary can also glow",
      "that real encounter includes disappointment",
      "that staying is sometimes the greatest adventure",
    ],
    wandlung: "From the chased extraordinary comes the found ordinary. From euphoria comes presence. From idealization comes real encounter.",
    gedankeFuerHeute:
      "What is here right now \u2014 not in the vision of what could be \u2014 that is worth your full presence?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SX7-Subtypprofil und die Dynamik innerhalb von Typ 7." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 7 / SX7 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 7 (Kapitel Typ 7)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 7." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Rauchquarz und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 7 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const sx8 = {
  meinKompass: {
    lebensthema: "Du willst das Leben ganz \u2014 intensiv, echt, ohne Halbheiten. Als Verst\u00e4rkungstyp unter den Achtern lebst du die Kraft am leidenschaftlichsten: Du rebellierst gegen Konventionen, ziehst an, was du begehrst, und gibst dich dem Moment ganz hin. Wie das Krokodil bist du fasziniert von Intensit\u00e4t und Macht \u2014 du willst besitzen, herausfordern, das Echte sp\u00fcren. Deine magnetische Ausstrahlung zieht andere in deinen Bann. Die Falle: N\u00e4he kann zur Machtprobe werden, und Intensit\u00e4t verwechselt sich leicht mit Kampf. Dein innerer Weg f\u00fchrt nicht dorthin, zahmer zu werden \u2014 sondern zu erfahren, dass echte N\u00e4he ohne Eroberung tiefer tr\u00e4gt.",
    grundstrategie: "Die sexuelle Acht sucht Lebendigkeit in Intensit\u00e4t, Rebellion und leidenschaftlicher Hingabe \u2014 als Verst\u00e4rkungstyp lebt sie die Kraft am sichtbarsten: besitzergreifend, herausfordernd, magnetisch, auf der Suche nach dem ganz Echten.",
    staerken: [
      "magnetisch und mitrei\u00dfend",
      "leidenschaftlich und lebenshungrig",
      "mutig und kompromisslos echt",
      "souver\u00e4n und pr\u00e4sent",
      "loyal und besch\u00fctzend in N\u00e4he",
      "f\u00e4hig zu tiefer, intensiver Bindung",
      "Kraft, die andere in Bewegung bringt",
    ],
    herausforderungen: [
      "Intensit\u00e4t verwechselt sich leicht mit Kampf und Konfrontation",
      "N\u00e4he wird zur Machtprobe; Grenzen werden \u00fcberschritten",
      "Besitzen-Wollen statt freier Verbindung",
      "Energie wirkt \u00fcberw\u00e4ltigend, impulsiv und schwer regulierbar",
    ],
    entwicklungspotenzial: [
      "Kraftvoll begegnen, ohne Druck oder Dominanz erzeugen zu m\u00fcssen.",
      "Offen f\u00fcr N\u00e4he, Vertrauen und emotionale Ehrlichkeit bleiben.",
      "Erfahren, dass N\u00e4he ohne Eroberung tiefer tr\u00e4gt.",
    ],
    wandlung: "Aus Kampf wird Begegnung. Aus Besitz wird freie Verbindung. Aus Eroberung wird Herzensn\u00e4he.",
    gedankeFuerHeute: "Wenn ich Intensit\u00e4t nicht mit Kampf verwechsle, entsteht N\u00e4he ohne Machtprobe.",
  },
  meinKompass_en: {
    lebensthema:
      "You want life completely \u2014 intensely, authentically, without half-measures. As the amplifier type among the Eights, you live strength most passionately: you rebel against conventions, pull toward what you desire, and give yourself wholly to the moment. Your magnetic presence draws others in. The trap: closeness can become a power struggle, and intensity easily confuses itself with combat. Your inner path does not lead to becoming tamer \u2014 but to experiencing that genuine closeness without conquest runs deeper.",
    grundstrategie:
      "The sexual Eight seeks aliveness in intensity, rebellion, and passionate surrender \u2014 as the amplifier type, they live the Eight dynamic most powerfully.",
    staerken: [
      "Magnetic presence",
      "Passion",
      "Courage to go all in",
      "Authenticity",
      "Ability to awaken others",
    ],
    herausforderungen: [
      "Difficulty with vulnerability in closeness",
      "Tendency toward dominance in relationships",
      "Intensity that can overwhelm others",
      "Difficulty sustaining gentle contact",
      "Confusing conquest with genuine union",
    ],
    entwicklungspotenzial: [
      "that depth is possible without dominance",
      "that genuine encounter requires allowing the other to be other",
      "that surrender is also a form of strength",
      "that intensity can be gentle",
    ],
    wandlung: "From conquest comes encounter. From dominance comes presence. From passionate possession comes genuine union.",
    gedankeFuerHeute:
      "What would it feel like today to be fully present with someone \u2014 without needing to win?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SX8-Subtypprofil und die Dynamik innerhalb von Typ 8." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 8 / SX8 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 8 (Kapitel Typ 8)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 8." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Fluorit und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 8 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};


const sx9 = {
  meinKompass: {
    lebensthema: "Du sehnst dich nach Verschmelzung \u2014 danach, mit einem geliebten Menschen, einer Aufgabe oder dem Leben selbst ganz eins zu werden. Als Verst\u00e4rkungstyp unter den Neunern lebst du die Selbstvergessenheit am tiefsten: Du gehst im Anderen auf, nimmst seine W\u00fcnsche, Stimmungen und Welt so sehr in dich auf, dass deine eigene Kontur verschwimmt. Wie das Faultier h\u00e4ngst du dich liebevoll an das, womit du verbunden bist. Deine Hingabe ist eine echte Gabe \u2014 doch die Falle ist der Selbstverlust: \u00dcber die Verschmelzung vergisst du, wer du selbst bist und was du willst. Dein innerer Weg f\u00fchrt dorthin, N\u00e4he zuzulassen, ohne dich aufzugeben.",
    grundstrategie: "Die sexuelle Neun sucht ihren Frieden in der Verschmelzung mit einem Anderen \u2014 als Verst\u00e4rkungstyp lebt sie die Tr\u00e4gheit als Selbstvergessenheit: Sie geht in der Verbindung auf und opfert dabei die eigene Klarheit und Kontur.",
    staerken: [
      "hingebungsvoll und liebevoll",
      "mitf\u00fchlend und einf\u00fchlsam",
      "friedlich und sanft",
      "tief verbindungsf\u00e4hig",
      "annehmend und warmherzig",
      "feines Gesp\u00fcr f\u00fcr andere",
      "f\u00e4hig zu echter N\u00e4he",
    ],
    herausforderungen: [
      "Sich im Anderen verlieren, um Verbindung zu sp\u00fcren",
      "Innere Spannungen vermeiden statt f\u00fchlen",
      "Eigene Impulse, W\u00fcnsche und Grenzen verschwimmen",
      "Energie wirkt tr\u00e4ge, Entscheidungen verz\u00f6gern sich",
    ],
    entwicklungspotenzial: [
      "Mit sich selbst und mit anderen in lebendigem Kontakt bleiben.",
      "Den eigenen Platz einnehmen, ohne im Anderen aufzugehen.",
      "Ruhe wird zu stabiler Kraft, die echte N\u00e4he erm\u00f6glicht.",
    ],
    wandlung: "Aus Verschmelzung wird Begegnung. Aus Selbstverlust wird Selbstkontakt. Aus Anpassung wird klare, liebevolle Pr\u00e4senz.",
    gedankeFuerHeute: "Wenn Verschmelzung nicht zum Selbstverlust f\u00fchrt, kann Liebe wirklich zur Begegnung werden.",
  },
  meinKompass_en: {
    lebensthema:
      "You long for merging \u2014 to become completely one with a beloved person, a task, or life itself. As the amplifier type among the Nines, you live self-forgetting most deeply: you dissolve in the other, absorb their wishes, moods, and world so thoroughly that your own contour blurs. Your surrender is a genuine gift \u2014 yet the trap is self-loss: through merging, you forget who you yourself are and what you want. Your inner path leads toward allowing closeness without giving yourself up.",
    grundstrategie:
      "The sexual Nine seeks peace in merging with another \u2014 as the amplifier type, they live sloth as complete self-surrender to the beloved.",
    staerken: [
      "Deep capacity for connection",
      "Empathy",
      "Ability to make others feel accepted",
      "Gentle presence",
      "Gift for creating harmony",
    ],
    herausforderungen: [
      "Loss of own identity in relationships",
      "Difficulty knowing own wishes",
      "Passive-aggressiveness instead of direct expression",
      "Becoming whoever the other needs them to be",
      "Deep tiredness from constant merging",
    ],
    entwicklungspotenzial: [
      "that they can be close without disappearing",
      "that their own wishes are part of the relationship",
      "that a clear self-position deepens rather than threatens love",
      "that their presence is a gift, not a burden",
    ],
    wandlung: "From merging comes genuine meeting. From self-surrender comes self-presence. From disappearing in love comes loving as oneself.",
    gedankeFuerHeute:
      "What do you want right now \u2014 not what would make the other happy, not what the situation demands \u2014 but what you, in this moment, truly want?",
  },
  vertiefung: [
    { werkId: "dynamik-27-subtypen", hinweis: "Das vollst\u00e4ndige SX9-Subtypprofil und die Dynamik innerhalb von Typ 9." },
    { werkId: "code-der-persoenlichkeit", hinweis: "Schritt f\u00fcr Schritt herausfinden, ob Typ 9 / SX9 zu dir passt." },
    { werkId: "hinter-der-leidenschaft", hinweis: "Die Wunde hinter der Leidenschaft des Typ 9 (Kapitel Typ 9)." },
    { werkId: "kindheitstraumata", hinweis: "Die fr\u00fche Pr\u00e4gung hinter dem Muster des Typ 9." },
    { werkId: "heilsteine-prinzipien", hinweis: "Hintergrund zum Edelstein Karneol und den Enneagrammprinzipien." },
    { werkId: "wenn-die-stille-brennt", hinweis: "Wie Burnout bei Typ 9 entsteht, sich anf\u00fchlt und \u00fcberwunden werden kann \u2013 typspezifische Warnsignale und Pr\u00e4vention." },
  ],
};



const subtypeDetails = {
  se1, se2, se3, se4, se5, se6, se7, se8, se9,
  so1, so2, so3, so4, so5, so6, so7, so8, so9,
  sx1, sx2, sx3, sx4, sx5, sx6, sx7, sx8, sx9,
};

window._subtypeDetails = subtypeDetails;
})();

const subtypeDetails = window._subtypeDetails;

(function(){
// helpers.js \u2014 Hilfsfunktionen fuer die Knowledge-Dateien
// Diese Funktionen wurden aus data/de.js extrahiert, um zirkulaere Importe zu vermeiden.
// Die Knowledge-Dateien sind ES-Module und koennen nicht auf de.js zurueckgreifen.

function type1MediaGroups(subtypeCode, subtypeSong = {}) {
  return [
    {
      title: `${subtypeCode} \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs`,
      note: "Diese Gruppe entspricht dem Medienblock auf Seite 3: Praxislinks, Fl\u00fcgelvideo und die sechs Song-/Affirmationsfelder.",
      resources: [
        { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 1", youtubeVideoId: "Uf0kxyZ6xYM" },
        { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 1", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
        { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 1", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
        { title: "Typ 1 mit 9er- und 2er-Fl\u00fcgel", category: "Fl\u00fcgel", scope: "Typ 1", youtubeVideoId: "Wna7pH0SFkU" },
        { title: "Typ 1 \u00b7 deutscher Song: Alles muss stimmen", category: "Song 1", scope: "Typ 1", youtubeVideoId: "fekERgl63IY" },
        { title: "Typ 1 \u00b7 englischer Song: Everything Must Be Right", category: "Song 2", scope: "Type 1", youtubeVideoId: "aO3eixcmnnA" },
        subtypeSong.deId
          ? { title: `${subtypeCode} \u00b7 deutscher subtypspezifischer Song`, category: "Song 3", scope: subtypeCode, youtubeVideoId: subtypeSong.deId }
          : { title: `${subtypeCode} \u00b7 deutscher subtypspezifischer Song`, category: "Song 3", scope: subtypeCode, pending: true },
        subtypeSong.enId
          ? { title: `${subtypeSong.enCode || subtypeCode} \u00b7 englischer subtypspezifischer Song`, category: "Song 4", scope: subtypeSong.enCode || subtypeCode, youtubeVideoId: subtypeSong.enId }
          : { title: `${subtypeSong.enCode || subtypeCode} \u00b7 englischer subtypspezifischer Song`, category: "Song 4", scope: subtypeSong.enCode || subtypeCode, pending: true },
        subtypeSong.biblicalId
          ? { title: `${subtypeCode} \u00b7 archetypisch-biblischer Song`, category: "Song 5", scope: subtypeCode, youtubeVideoId: subtypeSong.biblicalId }
          : { title: `${subtypeCode} \u00b7 archetypisch-biblischer Song`, category: "Song 5", scope: subtypeCode, pending: true },
        subtypeSong.affirmationsId
          ? { title: `${subtypeCode} \u00b7 100 heilsame Affirmationen`, category: "Affirmationen", scope: subtypeCode, youtubeVideoId: subtypeSong.affirmationsId }
          : { title: `${subtypeCode} \u00b7 100 heilsame Affirmationen`, category: "Affirmationen", scope: subtypeCode, pending: true },
      ],
    },
    {
      title: `${subtypeCode} \u00b7 Seite 4 \u00b7 Heilmittel-Kompass`,
      note: "Diese Gruppe geh\u00f6rt zur Heilungsseite: Hom\u00f6opathie, Enneagramm-Hom\u00f6opathie, Healing Music und Hom\u00f6opathie-Songmaterial.",
      resources: [
        { title: "Zur Wirkweise der Hom\u00f6opathie", category: "Wissen", scope: "Hom\u00f6opathie", youtubeVideoId: "AcYotzwZ3po" },
        { title: "Zur Wirkweise der Enneagramm-Hom\u00f6opathie", category: "Wissen", scope: "Typ 1", youtubeVideoId: "qSwv9ghfLPE" },
        { title: "Typ 1 \u00b7 Relaxing & Healing Music \u00b7 Album 24", category: "Musik", scope: "Typ 1", youtubeVideoId: "mumR1QESNzQ" },
        { title: "Songs zum Wesen der Hom\u00f6opathie", category: "Playlist", scope: "Hom\u00f6opathie", youtubePlaylistId: "PLDDseEKkCveUN1An0u_qdTjjg_JLtOf0S" },
      ],
    },
  ];
}

function type2VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 2 \u00b7 \u00dcberblick",
      caption: "Grundthema, K\u00f6rperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-2/type-2-overview.jpeg",
      alt: "Typ 2 \u00dcberblick mit Grundthema Liebe und Anerkennung",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} \u00b7 Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene fuer die weitere Extraktion.`,
      src: `assets/knowledge/type-2/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-2-Kartenset`,
    })),
  ];
}

function type2SourceCoverage(subtypeCode) {
  return [
    {
      page: "Typ 2 \u00b7 \u00dcberblick",
      status: "basis_angelegt",
      blocks: [
        "Grundthema",
        "Stirnspannung",
        "Blickfokus",
        "Mundlinie",
        "Kiefer & Nacken",
        "K\u00f6rperorganisation",
        "Spaltung / innerer Konflikt",
        "Typische Haltung & Ausdruck",
        "Verk\u00f6rperte Signatur",
        "Integrationsweg",
        "Organismusfrage",
        "Blickqualit\u00e4t",
        "Mikrospannung",
        "Atemrhythmus",
        "Bewegungsinitiierung",
        "Kontaktstil",
        "Spannungsverteilung",
        "Archetypisches Tier",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 1`,
      status: "basis_angelegt",
      blocks: [
        "Grundthema",
        "weiblicher Prototyp",
        "m\u00e4nnlicher Prototyp",
        "Organismusfrage",
        "Blickqualit\u00e4t",
        "Mikrospannung",
        "Atemrhythmus",
        "Bewegungsinitiierung",
        "Kontaktstil",
        "Spannungsverteilung",
        "Verk\u00f6rperte Signatur",
        "Grundtension",
        "Integrationsweg",
        "Tierentsprechung",
        "Ressourcenfeld",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 2`,
      status: "basis_angelegt",
      blocks: [
        "2-Punkte-Integration",
        "Punkt 1",
        "Punkt 2",
        "Vorgehensweise",
        "Prototypen",
        "Lebensthema",
        "unbewusste Strategie",
        "Integration",
        "Kernsatz",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 3`,
      status: "basis_angelegt",
      blocks: [
        "Problem",
        "Wendepunkt",
        "Integration",
        "K\u00f6rperarbeit",
        "Akupressur",
        "Atemimpuls",
        "Vollkommen still sitzen",
        "mentale & emotionale Haltung",
        "Fl\u00fcgel",
        "Medien- und Songfelder",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 4`,
      status: "basis_angelegt",
      blocks: [
        "Heilmittel-Kompass",
        "hom\u00f6opathisches Einzelmittel",
        "Thema",
        "Wirkung auf Lebenskraft und Leidenschaft",
        "Mineralstoffimpuls",
        "Bachbl\u00fcte",
        "Edelstein",
        "Tee",
        "Leidenschaft",
        "innere Motivation",
        "Healing Music",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 5`,
      status: "basis_angelegt",
      blocks: [
        "Integrationspotenzial",
        "archetypische Essenz",
        "verk\u00f6rperte Qualit\u00e4t",
        "Nervensystem-Regulation",
        "Beziehungsebene",
        "neue F\u00e4higkeiten",
        "Integrationssatz",
        "Bewusstseinsraum",
        "Ausstrahlung",
      ],
    },
  ];
}

const type2OverviewModule = {
  title: "Typ 2 \u00b7 Grundkarte",
  intro:
    "Die Typ-2-Grundkarte bildet die gemeinsame Grundlage aller Zweier-Subtypen. Im Zentrum steht das Bed\u00fcrfnis, geliebt, gebraucht und gesch\u00e4tzt zu werden. Der K\u00f6rper sucht Kontakt, Resonanz und Beziehungssicherheit.",
  entries: [
    {
      label: "Grundthema",
      text: "Liebe und Anerkennung. Typ 2 richtet sich auf N\u00e4he, Beziehung, F\u00fcrsorge und das Bed\u00fcrfnis aus, f\u00fcr andere bedeutsam zu sein.",
    },
    {
      label: "Organismusfrage",
      text: "Bin ich liebenswert, wenn ich f\u00fcr andere da bin?",
    },
    {
      label: "Leidenschaft",
      text: "Stolz entsteht, wenn der eigene Wert \u00fcber Geben, Helfen, gebraucht Werden oder emotionale Bedeutung gesichert wird.",
    },
    {
      label: "Innere Motivation",
      text: "Typ 2 m\u00f6chte Liebe, Bindung, N\u00e4he und Bedeutung erfahren. Hilfe und Zuwendung werden zum Weg, Anerkennung und Verbundenheit zu sichern.",
    },
    {
      label: "Stirnspannung",
      text: "Oft angehoben, sorgenvoll und auf das Gegen\u00fcber fokussiert. Die Aufmerksamkeit pr\u00fcft, was andere brauchen k\u00f6nnten.",
    },
    {
      label: "Blickfokus",
      text: "Kontaktorientiert, warm und suchend. Der Blick sucht Resonanz, Dankbarkeit, R\u00fcckmeldung und emotionale \u00d6ffnung.",
    },
    {
      label: "Mundlinie",
      text: "L\u00e4chelnd, sozial einladend und weich. Der Mund wird zum Beziehungsanker und kann eigene Bed\u00fcrfnisse \u00fcberspielen.",
    },
    {
      label: "Kiefer & Nacken",
      text: "Spannung durch Anpassung, Geben und Selbstzur\u00fccknahme. Die Haltung geht h\u00e4ufig nach vorn zum anderen.",
    },
    {
      label: "K\u00f6rperorganisation",
      text: "\u00d6ffnung nach au\u00dfen, Herzenergie aktiv, Schultern getragen, Haltung nach vorn gebend. Brust und Herzraum sind zentrale Spannungs- und Ausdrucksfelder.",
    },
    {
      label: "Spaltung / innerer Konflikt",
      text: "Eigene Bed\u00fcrfnisse werden zur\u00fcckgenommen, w\u00e4hrend die Bed\u00fcrfnisse anderer \u00fcberh\u00f6ht werden.",
    },
    {
      label: "Typische Haltung & Ausdruck",
      text: "Offen, freundlich, hilfsbereit, l\u00e4chelnd und einladend. Die Gestik betont N\u00e4he, W\u00e4rme und positives Feedback.",
    },
    {
      label: "Verk\u00f6rperte Signatur",
      text: "Ich gebe Liebe, Aufmerksamkeit und Hilfe, um wertvoll und gebraucht zu sein.",
    },
    {
      label: "Integrationsweg",
      text: "Vom Geben ohne Erwartung zu echtem Mitgef\u00fchl. Selbstf\u00fcrsorge kultivieren, eigene Bed\u00fcrfnisse ernst nehmen und ausdr\u00fccken.",
    },
    {
      label: "Blickqualit\u00e4t",
      text: "Warm, verbindend und kontaktaufnehmend. In Integration wird daraus ein mitf\u00fchlender Blick, der sich selbst nicht verliert.",
    },
    {
      label: "Mikrospannung",
      text: "Spannung in Augenpartie, Stirn, Mund und Hals-Nacken-Bereich. Die innere Anspannung entsteht h\u00e4ufig aus dem Gef\u00fchl, geben zu m\u00fcssen.",
    },
    {
      label: "Atemrhythmus",
      text: "Eher flach im oberen Brustbereich, gehalten beim Geben oder Leisten. Seufzen kann Entt\u00e4uschung oder \u00dcberforderung anzeigen.",
    },
    {
      label: "Bewegungsinitiierung",
      text: "Bewegt sich auf andere zu, schnell, hilfsbereit und reaktiv. Pausen fallen schwer, weil N\u00e4he oft \u00fcber Tun hergestellt wird.",
    },
    {
      label: "Kontaktstil",
      text: "Herzlich, zugewandt und unterst\u00fctzend. Sucht N\u00e4he und Bindung, kann sich aber selbst verlieren, wenn Liebe erwidert werden soll.",
    },
    {
      label: "Spannungsverteilung",
      text: "Hauptspannung im Brust- und Herzbereich. Nebenspannung in Schultern und Nacken. Unterdr\u00fcckung betrifft h\u00e4ufig eigene Bed\u00fcrfnisse.",
    },
    {
      label: "Archetypisches Tier",
      text: "Treuer Hund: Loyalit\u00e4t, Hingabe, W\u00e4rme, Schutz, N\u00e4he und Verbundenheit. Er zeigt die F\u00e4higkeit, Liebe zu geben, und erinnert zugleich an Selbstf\u00fcrsorge.",
    },
    {
      label: "Lebensfeld",
      text: "Lebensthema: Liebe und Anerkennung. Kernsatz: Ich gebe, damit ich geliebt werde. Ressource: Selbstf\u00fcrsorge entwickeln.",
    },
  ],
};

function type2ContentModules(subtypeCode) {
  const subtypeModules = {
    SE2: [
      {
        title: "SE2 \u00b7 Seite 1 \u00b7 Subtyp-Profil",
        intro:
          "Die SE2 sucht Geborgenheit durch F\u00fcrsorge, Versorgung und pers\u00f6nliche N\u00e4he. Die Zuwendung ist warm und sch\u00fctzend, kann aber in Bed\u00fcrftigkeit, R\u00fcckzug oder stiller Erwartung kippen.",
        entries: [
          {
            label: "Grundthema",
            text: "Liebe und F\u00fcrsorge im selbsterhaltenden Feld. Die SE2 m\u00f6chte gebraucht werden und zugleich selbst sicher, umsorgt und geborgen sein.",
          },
          {
            label: "Organismusfrage",
            text: "Wie kann ich durch F\u00fcrsorge, Unterst\u00fctzung und praktische Hilfe dazu beitragen, dass wir alle gut versorgt und in Sicherheit sind?",
          },
          {
            label: "Blickqualit\u00e4t",
            text: "Warm, weich und einladend, aber pr\u00fcfend: Wer ist sicher f\u00fcr mich? Der Blick sucht Resonanz und Dankbarkeit, \u00f6ffnet sich aber erst nach Beobachtung.",
          },
          {
            label: "Mikrospannung",
            text: "Leichte Sorge in Stirn und Augen, weicher Mund, wenig Druck im Kiefer. Die Haltung ist sch\u00fctzend, zur\u00fcckhaltend und zugleich zugewandt.",
          },
          {
            label: "Atemrhythmus",
            text: "Eher flach im Brustbereich. Atem stockt bei Unsicherheit und reguliert sich \u00fcber Geben, R\u00fcckzug und k\u00f6rperliche N\u00e4he.",
          },
          {
            label: "Bewegungsinitiierung",
            text: "Geht nicht sofort auf andere zu, sondern wartet oder pr\u00fcft zuerst. Handelt aus dem Bed\u00fcrfnis, gebraucht und verbunden zu sein.",
          },
          {
            label: "Kontaktstil",
            text: "Herzlich, warm und einladend. Gibt, um Beziehung und Sicherheit zu schaffen, sucht Dankbarkeit und gegenseitige Verbindlichkeit.",
          },
          {
            label: "Spannungsverteilung",
            text: "Kopf und Stirn: leichte Sorge. Nacken und Schultern: Schutz. Brustbereich: W\u00e4rme und Geben. Bauch: Bed\u00fcrfnis nach Sicherheit.",
          },
          {
            label: "Tierentsprechung",
            text: "Flusspferd: sch\u00fctzt sein Revier, seine Familie und seine Ressourcen. Es wirkt gem\u00fctlich, ist aber stark, loyal und n\u00e4hrend.",
          },
          {
            label: "Ressourcenfeld",
            text: "Herz\u00f6ffnung, Mitgef\u00fchl, Geborgenheit schaffen, praktische Unterst\u00fctzung, Treue, Loyalit\u00e4t, W\u00e4rme und Lebensfreude.",
          },
        ],
      },
      {
        title: "SE2 \u00b7 Seite 2 \u00b7 2-Punkte-Integration",
        intro:
          "Die zentrale Praxis der SE2 verbindet den Herzraum mit dem Oberbauch und inneren Raum. Dadurch wird F\u00fcrsorge mit Selbstkontakt verbunden.",
        entries: [
          {
            label: "Punkt 1",
            text: "Herzraum / Brustmitte: Bed\u00fcrfnis nach N\u00e4he, Verbindung und Resonanz.",
          },
          {
            label: "Punkt 2",
            text: "Oberbauch / innerer Raum: Bed\u00fcrfnis nach Selbstkontakt, Ruhe und eigener Grenze.",
          },
          {
            label: "Vorgehen",
            text: "Eine Hand auf den Herzraum legen, die andere auf den Oberbauch. Erst Punkt 1, dann Punkt 2 sp\u00fcren und anschlie\u00dfend beide Felder gleichzeitig wahrnehmen.",
          },
          {
            label: "Lebensthema",
            text: "Du suchst N\u00e4he, Unterst\u00fctzung und emotionale Sicherheit. Du m\u00f6chtest gebraucht werden und stellst dabei oft Bed\u00fcrfnisse anderer \u00fcber deine eigenen.",
          },
          {
            label: "Unbewusste Strategie",
            text: "Du versuchst, Bindung \u00fcber F\u00fcrsorge und Verf\u00fcgbarkeit abzusichern. Eigene W\u00fcnsche werden zur\u00fcckgehalten, damit N\u00e4he erhalten bleibt.",
          },
          {
            label: "Integration",
            text: "Du lernst, dich selbst wichtiger zu nehmen und deine Grenzen ernst zu nehmen. Verbindung entsteht durch Selbstf\u00fcrsorge, Ehrlichkeit und inneres Gleichgewicht.",
          },
          {
            label: "Kernsatz",
            text: "Wenn du deine eigenen Bed\u00fcrfnisse ernst nimmst, entsteht N\u00e4he ohne Erwartung.",
          },
        ],
      },
      {
        title: "SE2 \u00b7 Seite 3 \u00b7 K\u00f6rperarbeit & Akupressur",
        intro:
          "Die SE2 bewegt sich von Selbstaufgabe zu Selbstf\u00fcrsorge. K\u00f6rperarbeit hilft, F\u00fcrsorge, Bindung und eigene Grenze wieder zusammenzubringen.",
        entries: [
          {
            label: "Problem",
            text: "Du k\u00fcmmerst dich um andere, um N\u00e4he und Zuwendung zu erhalten. Dabei \u00fcbersiehst du leicht deine eigenen Bed\u00fcrfnisse.",
          },
          {
            label: "Wendepunkt",
            text: "Du erkennst, dass st\u00e4ndiges K\u00fcmmern deine eigenen Bed\u00fcrfnisse unsichtbar machen kann. Du beginnst, dich selbst ernst zu nehmen.",
          },
          {
            label: "Integration",
            text: "Du sorgst f\u00fcr andere, ohne dich selbst zu verlieren. Deine Energie wird n\u00e4hrend und stabil.",
          },
          {
            label: "K\u00f6rperliche Integration",
            text: "Verbindung / Herz. Die sechs Zug\u00e4nge sind Gesicht, Hand, Fu\u00df, Bauch, Finger und Ohr.",
          },
          {
            label: "Vollkommen still sitzen",
            text: "Zwei Minuten aufrecht und bequem sitzen. Der K\u00f6rper darf zeigen, was wesentlich ist, ohne dass sofort geholfen werden muss.",
          },
          {
            label: "Mentale & emotionale Haltung",
            text: "Bei Typ 2 zeigt sich mental ein falscher \u00dcberfluss: Ich habe genug Liebe zu geben. Emotional entsteht Stolz, wenn der eigene Wert \u00fcber Gebrauchtwerden definiert wird.",
          },
          {
            label: "Fl\u00fcgel",
            text: "Typ 2 mit 1er-Fl\u00fcgel betont Pflicht, Verl\u00e4sslichkeit und gutes Tun. Typ 2 mit 3er-Fl\u00fcgel betont Kontaktfreude, Aktivit\u00e4t und Motivation.",
          },
          {
            label: "Medienfelder",
            text: "Die Seite enth\u00e4lt die vorbereitete Struktur f\u00fcr Typ-2-Songs, Subtyp-Songs, biblische Songs, Affirmationen, Fl\u00fcgel und Vertiefungen.",
          },
        ],
      },
      {
        title: "SE2 \u00b7 Seite 4 \u00b7 Heilmittel-Kompass",
        intro:
          "Der Heilmittel-Kompass der SE2 \u00fcbersetzt Bed\u00fcrftigkeit, Bindung und emotionale Abh\u00e4ngigkeit in ein heilkundliches Symbolfeld.",
        entries: [
          {
            label: "Hom\u00f6opathisches Einzelmittel",
            text: "Hyoscyamus niger steht hier f\u00fcr emotionale Abh\u00e4ngigkeit, Besitzanspruch und Angst vor Zur\u00fcckweisung. Der Weg f\u00fchrt zu selbstloser Liebe und gesunden Grenzen.",
          },
          {
            label: "Thema",
            text: "Das Bed\u00fcrfnis, gebraucht und geliebt zu werden, wird von einem starken inneren Wunsch nach N\u00e4he und Anerkennung getragen.",
          },
          {
            label: "Wirkung auf Lebenskraft und Leidenschaft",
            text: "Unterst\u00fctzt symbolisch die Wandlung \u00fcberm\u00e4\u00dfiger Bed\u00fcrftigkeit in emotionale Eigenst\u00e4ndigkeit, gesunde Grenzen und freie, liebevolle Zuwendung.",
          },
          {
            label: "Ziel",
            text: "Regulation und St\u00e4rkung der Zweier-Lebenskraft: Ausgleich der \u00fcberschie\u00dfenden, \u00fcbertriebenen Herzenergie.",
          },
          {
            label: "Mineralstoff-Impuls",
            text: "Natrium chloratum unterst\u00fctzt symbolisch die Regulation von N\u00e4he und R\u00fcckzug sowie emotionales Gleichgewicht und innere Balance.",
          },
          {
            label: "Bachbl\u00fcte",
            text: "Chicory f\u00f6rdert bedingungslose Liebe, gesunde Grenzen und emotionale Unabh\u00e4ngigkeit. Die Bl\u00fcte der M\u00fctterlichkeit.",
          },
          {
            label: "Edelstein",
            text: "Rosenquarz steht f\u00fcr Selbstliebe, Mitgef\u00fchl, weiche Herzensbindung und liebevolle Selbstannahme.",
          },
          {
            label: "Tee",
            text: "Rosenbl\u00fctentee wirkt symbolisch herz\u00f6ffnend, harmonisierend und sammelnd f\u00fcr K\u00f6rper, Geist und Seele.",
          },
          {
            label: "Leidenschaft",
            text: "Stolz beim Typ 2 ist innere Selbst\u00fcberh\u00f6hung, gebraucht zu werden, verbunden mit Schwierigkeit, eigene Bed\u00fcrftigkeit und Abh\u00e4ngigkeit anzuerkennen.",
          },
          {
            label: "Innere Motivation",
            text: "Das innere Streben nach N\u00e4he, Anerkennung und Gebrauchtwerden ist verbunden mit dem Wunsch, durch F\u00fcrsorge Liebe, Bindung und Bedeutung zu erfahren.",
          },
        ],
      },
      {
        title: "SE2 \u00b7 Seite 5 \u00b7 Integration",
        intro:
          "Die Integrationsseite der SE2 f\u00fchrt von Selbstaufgabe und Bed\u00fcrftigkeit zu Selbstf\u00fcrsorge, F\u00fclle und freier F\u00fcrsorge.",
        entries: [
          {
            label: "Integrationspotenzial",
            text: "Selbstf\u00fcrsorge und F\u00fclle. Wahre F\u00fcrsorge beginnt bei dir, denn nur aus einem vollen Herzen kannst du wirklich geben.",
          },
          {
            label: "Archetypische Essenz",
            text: "Die Essenz der SE2 ist F\u00fcrsorge. Sie lebt f\u00fcr N\u00e4he und Geborgenheit, in reifer Form aus innerer F\u00fclle statt aus Pflicht.",
          },
          {
            label: "Verk\u00f6rperte Qualit\u00e4t",
            text: "Warme Ausstrahlung, nat\u00fcrliche Hilfsbereitschaft, gut sp\u00fcrbarer K\u00f6rper, beruhigende Pr\u00e4senz, loyale Verbundenheit und Schutzinstinkt.",
          },
          {
            label: "Nervensystem-Regulation",
            text: "Sicherheit im K\u00f6rper verankern, Grenzen wahrnehmen, \u00dcberverantwortung loslassen, sich selbst versorgen und Bed\u00fcrfnisse klar kommunizieren.",
          },
          {
            label: "Beziehungsebene",
            text: "Liebevolle Zuverl\u00e4ssigkeit, echte N\u00e4he, unterst\u00fctzende Pr\u00e4senz, echtes Zuh\u00f6ren, klare gesunde Grenzen und wertsch\u00e4tzende Kommunikation.",
          },
          {
            label: "Neue F\u00e4higkeiten",
            text: "Sich selbst n\u00e4hren, gesunde Grenzen setzen, Bed\u00fcrfnisse ausdr\u00fccken, Vertrauen in Prozesse, Humor und gerechte Entscheidungen.",
          },
          {
            label: "Integrationssatz",
            text: "Ich bin eine Quelle der F\u00fcrsorge, die zuerst mich selbst n\u00e4hrt.",
          },
          {
            label: "Bewusstseinsraum",
            text: "Integration bedeutet, weniger gefallen zu wollen und mehr aus echter F\u00fclle zu geben. Der Wunsch zu helfen wird bewusst und frei.",
          },
          {
            label: "Ausstrahlung",
            text: "Warme Autorit\u00e4t, klare Pr\u00e4senz, n\u00e4hrende W\u00e4rme, geerdete Sanftheit, ordnende Wirkung ohne Druck und menschliche W\u00fcrde.",
          },
        ],
      },
    ],
    SO2: [
      {
        title: "SO2 \u00b7 Extraktion im Aufbau",
        intro:
          "Die SO2 ist als Quellenstruktur vollst\u00e4ndig sichtbar. Die Tiefenextraktion wird nach dem SE2-Muster gef\u00fcllt: Seite 1 Profil, Seite 2 Integration, Seite 3 K\u00f6rperarbeit, Seite 4 Heilmittel, Seite 5 Integration.",
        entries: [
          {
            label: "Kernrichtung",
            text: "Die soziale Zwei sucht Zugeh\u00f6rigkeit, Anerkennung und Verbindung in Gemeinschaften und muss lernen, Liebe nicht \u00fcber N\u00fctzlichkeit zu sichern.",
          },
          {
            label: "Kernsatz",
            text: "Wenn du nicht gebraucht werden musst, wird deine Liebe frei, gro\u00dfz\u00fcgig und liebevoll.",
          },
        ],
      },
    ],
    SX2: [
      {
        title: "SX2 \u00b7 Extraktion im Aufbau",
        intro:
          "Die SX2 ist als Quellenstruktur vollst\u00e4ndig sichtbar. Die Tiefenextraktion wird nach dem SE2-Muster gef\u00fcllt: Seite 1 Profil, Seite 2 Integration, Seite 3 K\u00f6rperarbeit, Seite 4 Heilmittel, Seite 5 Integration.",
        entries: [
          {
            label: "Kernrichtung",
            text: "Die sexuelle Zwei sucht intensive N\u00e4he, besondere Resonanz und emotionale Anziehung und muss lernen, Liebe nicht durch Geben oder Verf\u00fchrung sichern zu m\u00fcssen.",
          },
          {
            label: "Kernsatz",
            text: "Wenn du Liebe nicht erobern musst, kann echte Verbundenheit dich wirklich erreichen.",
          },
        ],
      },
    ],
  };

  return [type2OverviewModule, ...(subtypeModules[subtypeCode] || [])];
}

function type3VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();

  return [
    {
      title: "Typ 3 \u00b7 \u00dcberblick",
      caption:
        "Grundthema, K\u00f6rperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-3/type-3-overview.jpeg",
      alt: "Typ 3 \u00dcberblick mit Grundthema Erfolg und Wert",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} \u00b7 Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene f\u00fcr die weitere Extraktion.`,
      src: `assets/knowledge/type-3/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-3-Kartenset`,
    })),
  ];
}

function type4VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();

  return [
    {
      title: "Typ 4 \u00b7 \u00dcberblick",
      caption:
        "Grundthema, K\u00f6rperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-4/type-4-overview.jpeg",
      alt: "Typ 4 \u00dcberblick mit Grundthema Einzigartigkeit und Tiefe",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} \u00b7 Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene f\u00fcr die weitere Extraktion.`,
      src: `assets/knowledge/type-4/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-4-Kartenset`,
    })),
  ];
}

function type5VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();

  return [
    {
      title: "Typ 5 \u00b7 \u00dcberblick",
      caption:
        "Grundthema, K\u00f6rperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-5/type-5-overview.jpeg",
      alt: "Typ 5 \u00dcberblick mit Grundthema Wissen und Kompetenz",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} \u00b7 Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene f\u00fcr die weitere Extraktion.`,
      src: `assets/knowledge/type-5/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-5-Kartenset`,
    })),
  ];
}


function type6VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 6 \u00b7 \u00dcberblick",
      caption: "Grundthema, K\u00f6rperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-6/type-6-overview.jpeg",
      alt: "Typ 6 \u00dcberblick mit Grundthema Sicherheit und Vertrauen",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} \u00b7 Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene f\u00fcr die weitere Extraktion.`,
      src: `assets/knowledge/type-6/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-6-Kartenset`,
    })),
  ];
}

function type7VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 7 \u00b7 \u00dcberblick",
      caption: "Grundthema, K\u00f6rperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-7/type-7-overview.jpeg",
      alt: "Typ 7 \u00dcberblick mit Grundthema Freude und F\u00fclle",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} \u00b7 Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene f\u00fcr die weitere Extraktion.`,
      src: `assets/knowledge/type-7/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-7-Kartenset`,
    })),
  ];
}

function type8VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 8 \u00b7 \u00dcberblick",
      caption: "Grundthema, K\u00f6rperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-8/type-8-overview.jpeg",
      alt: "Typ 8 \u00dcberblick mit Grundthema St\u00e4rke und Kontrolle",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} \u00b7 Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene f\u00fcr die weitere Extraktion.`,
      src: `assets/knowledge/type-8/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-8-Kartenset`,
    })),
  ];
}

function type9VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 9 \u00b7 \u00dcberblick",
      caption: "Grundthema, K\u00f6rperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-9/type-9-overview.jpeg",
      alt: "Typ 9 \u00dcberblick mit Grundthema Frieden und Harmonie",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} \u00b7 Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene f\u00fcr die weitere Extraktion.`,
      src: `assets/knowledge/type-9/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-9-Kartenset`,
    })),
  ];
}
function type3SourceCoverage(subtypeCode) {
  return [
    {
      page: "Typ 3 \u00b7 \u00dcberblick",
      blocks: [
        "Grundthema",
        "Stirnspannung",
        "Blickfokus",
        "Mundlinie",
        "Kiefer & Nacken",
        "K\u00f6rperorganisation",
        "Spaltung / innerer Konflikt",
        "Typische Haltung & Ausdruck",
        "Verk\u00f6rperte Signatur",
        "Integrationsweg",
        "Organismusfrage",
        "Blickqualit\u00e4t",
        "Mikrospannung",
        "Atemrhythmus",
        "Bewegungsinitiierung",
        "Kontaktstil",
        "Spannungsverteilung",
        "Archetypisches Tier",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 1`,
      blocks: [
        "Grundthema",
        "weiblicher Prototyp",
        "m\u00e4nnlicher Prototyp",
        "Organismusfrage",
        "Blickqualit\u00e4t",
        "Mikrospannung",
        "Atemrhythmus",
        "Bewegungsinitiierung",
        "Kontaktstil",
        "Spannungsverteilung",
        "Verk\u00f6rperte Signatur",
        "Grundtension",
        "Integrationsweg",
        "Tierentsprechung",
        "Ressourcenfeld",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 2`,
      blocks: [
        "2-Punkte-Integration",
        "Punkt 1",
        "Punkt 2",
        "Vorgehensweise",
        "Prototypen",
        "Lebensthema",
        "unbewusste Strategie",
        "Integration",
        "Kernsatz",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 3`,
      blocks: [
        "Problem",
        "Wendepunkt",
        "Integration",
        "K\u00f6rperarbeit",
        "Akupressur",
        "Atemimpuls",
        "Vollkommen still sitzen",
        "mentale & emotionale Haltung",
        "Fl\u00fcgel",
        "Medien- und Songfelder",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 4`,
      blocks: [
        "Heilmittel-Kompass",
        "hom\u00f6opathisches Einzelmittel",
        "Thema",
        "Wirkung auf Lebenskraft und Leidenschaft",
        "Mineralstoffimpuls",
        "Bachbl\u00fcte",
        "Edelstein",
        "Tee",
        "Leidenschaft",
        "innere Motivation",
        "Healing Music",
      ],
    },
    {
      page: `${subtypeCode} \u00b7 Seite 5`,
      blocks: [
        "Integrationspotenzial",
        "archetypische Essenz",
        "verk\u00f6rperte Qualit\u00e4t",
        "Nervensystem-Regulation",
        "Beziehungsebene",
        "neue F\u00e4higkeiten",
        "Integrationssatz",
        "Bewusstseinsraum",
        "Ausstrahlung",
      ],
    },
  ];
}

const type3OverviewModule = {
  title: "Typ 3 \u00b7 Grundkarte",
  intro:
    "Die Typ-3-Grundkarte bildet die gemeinsame Grundlage aller Dreier-Subtypen. Im Zentrum steht das Bed\u00fcrfnis, wertvoll, erfolgreich und anerkannt zu sein. Der K\u00f6rper organisiert sich auf Wirkung, Leistung und sichtbare Kompetenz.",
  entries: [
    {
      label: "Grundthema",
      text: "Erfolg & Wert. Typ 3 richtet Aufmerksamkeit auf Leistung, Wirkung, Anerkennung und die Frage, wie Wert sichtbar bewiesen werden kann.",
    },
    {
      label: "Organismusfrage",
      text: "Wie kann ich erfolgreich sein und dabei meinen Wert beweisen?",
    },
    {
      label: "Innerer Konflikt",
      text: "Sein und Schein stehen gegeneinander: Wer ich wirklich bin gegen\u00fcber dem Bild, das ich zeigen muss.",
    },
    {
      label: "K\u00f6rperorganisation",
      text: "Aufrecht, pr\u00e4sent und leistungsbereit. Brust und Lunge aktiv, Schultern weit offen, Energie stark aktiv und nach vorne gerichtet.",
    },
    {
      label: "Blickqualit\u00e4t",
      text: "Fokussiert und zielgerichtet. Der Blick scannt Chancen, bewertet M\u00f6glichkeiten und sucht Best\u00e4tigung durch Leistung.",
    },
    {
      label: "Mikrospannung",
      text: "Spannung im Stirn- und Kieferbereich, innere Anspannung durch Leistungsdruck und Kontrolle der mimischen Regung.",
    },
    {
      label: "Atemrhythmus",
      text: "Eher flach und schnell, mit Brustatmung bei Aktivit\u00e4t. Seufzen kann bei Druck oder Scheitern auftreten.",
    },
    {
      label: "Bewegungsinitiierung",
      text: "Zielstrebig, effizient und dynamisch. Reagiert auf Chancen und Ziele, bewegt sich, um etwas zu erreichen.",
    },
    {
      label: "Kontaktstil",
      text: "Charismatisch, \u00fcberzeugend und anpassungsf\u00e4hig. Sucht Anerkennung und Bewunderung, orientiert sich an Wirkung und Ergebnis.",
    },
    {
      label: "Spannungsverteilung",
      text: "Hauptspannung in Stirn, Kiefer und Nacken. Nebenaktivit\u00e4t im Solarplexus und in den Schultern.",
    },
    {
      label: "Integrationsweg",
      text: "Vom Funktionieren zur Echtheit. Vom \u00e4u\u00dferen Erfolg zum inneren Wert. Selbstannahme statt Selbstvermarktung.",
    },
    {
      label: "Archetypisches Tier",
      text: "Gepard: Schnelligkeit, Fokus, Eleganz, Zielstrebigkeit, Wettbewerb, Erfolg und Anmut unter Druck.",
    },
  ],
};

function type3ContentModules(subtypeCode) {
  const profiles = {
    SE3: {
      label: "Selbsterhaltende Drei",
      field: "Leistung und Wirksamkeit in der Selbsterhaltung",
      animal: "Waschb\u00e4r",
      subtypeQuestion:
        "Wie kann ich wirksam und verl\u00e4sslich sein, ohne meinen Wert \u00fcber Leistung und Funktionieren zu beweisen?",
      page2Core:
        "Wenn du aufh\u00f6rst, nur zu funktionieren, erscheint dein Wert ohne Leistung und Anpassung.",
      page3Path: "Selbstt\u00e4uschung -> Authentizit\u00e4t",
      problem:
        "Du passt dich effizient an Erwartungen an, um Sicherheit und Anerkennung zu erhalten; dabei verlierst du leicht den Kontakt zu deinen echten Gef\u00fchlen.",
      turningPoint:
        "Du erkennst, dass st\u00e4ndiges Funktionieren dich von deinen echten Gef\u00fchlen entfernt.",
      integration:
        "Du handelst klar und wirksam, ohne dich nur \u00fcber Leistung und Funktionieren zu definieren.",
      page5Title: "Flexibilit\u00e4t & innere Stabilit\u00e4t",
      page5Sentence:
        "Ich passe mich an, ohne mich zu verlieren, und finde Halt in mir selbst.",
    },
    SO3: {
      label: "Soziale Drei",
      field: "Erfolg und Anerkennung im sozialen Umfeld",
      animal: "Gepard",
      subtypeQuestion:
        "Wie kann ich sichtbar wirken und beitragen, ohne mich \u00fcber Erfolg, Rolle oder Anerkennung zu definieren?",
      page2Core:
        "Wenn du nicht gl\u00e4nzen musst, wird deine Wirkung wahrhaftig, menschlich und stark.",
      page3Path: "Selbstt\u00e4uschung -> Authentizit\u00e4t",
      problem:
        "Du orientierst dich stark an Status, Anerkennung und Wirkung; dabei entfernst du dich leicht von deinem inneren Wesen.",
      turningPoint:
        "Du erkennst, dass Status und Anerkennung deinen inneren Wert nicht sichern k\u00f6nnen.",
      integration:
        "Du nutzt deine F\u00e4higkeiten bewusst, ohne dich \u00fcber Status und Anerkennung zu definieren.",
      page5Title: "Wirkung & Exzellenz",
      page5Sentence:
        "Ich nutze meine F\u00e4higkeiten zum Wohl des Ganzen und inspiriere andere durch mein echtes Sein.",
    },
    SX3: {
      label: "Sexuelle Drei",
      field: "Ausstrahlung und Wirkung im direkten 1:1-Kontakt",
      animal: "Pfau",
      subtypeQuestion:
        "Wie kann ich anziehend und lebendig sein, ohne mich f\u00fcr Liebe, Resonanz oder Bewunderung inszenieren zu m\u00fcssen?",
      page2Core:
        "Wenn du dich nicht inszenieren musst, entsteht echte Ausstrahlung aus innerem Wert.",
      page3Path: "Selbstt\u00e4uschung -> Authentizit\u00e4t",
      problem:
        "Du m\u00f6chtest bewundert und begehrt werden, um deinen Wert zu sp\u00fcren; dabei entsteht leicht eine Rolle statt echter Authentizit\u00e4t.",
      turningPoint:
        "Du erkennst, dass Ausstrahlung und Bewunderung keine echte innere N\u00e4he erzeugen.",
      integration:
        "Du zeigst dich offen und strahlend, ohne eine Rolle aufrechterhalten zu m\u00fcssen.",
      page5Title: "Wirkung & Anziehung",
      page5Sentence:
        "Ich bin genug, auch wenn ich nicht performe - meine echte Ausstrahlung zieht an.",
    },
  };

  const profile = profiles[subtypeCode];
  if (!profile) return [type3OverviewModule];

  return [
    type3OverviewModule,
    {
      title: `${subtypeCode} \u00b7 Seite 1 \u00b7 Subtyp-Profil`,
      intro: `${profile.label}: ${profile.field}. Diese Tafel beschreibt Grundthema, Prototypen, Organismusfrage und die verk\u00f6rperten Ausdrucksfelder des Subtyps.`,
      entries: [
        {
          label: "Grundthema",
          text: `Leistung & Erfolg. Im Subtypfeld ${profile.field.toLowerCase()} wird Typ-3-Wert vor allem \u00fcber Wirksamkeit, Kompetenz und sichtbare Resultate organisiert.`,
        },
        {
          label: "Typbedingte Organismusfrage",
          text: "Wie kann ich erfolgreich sein und dabei meinen Wert beweisen?",
        },
        { label: "Subtypvariante", text: profile.subtypeQuestion },
        {
          label: "Blickqualit\u00e4t",
          text: "Wach, pr\u00fcfend und fokussiert. Die Aufmerksamkeit fragt, was Wirkung erzeugt, was n\u00fctzt und wie Ziele erreicht werden.",
        },
        {
          label: "Mikrospannung",
          text: "Stirn, Augen, Mund, Kiefer und Haltung halten Leistung, Kontrolle und Pr\u00e4senz bereit.",
        },
        {
          label: "Atemrhythmus",
          text: "Eher flach im Brustbereich, schneller bei Zielverfolgung, stockend bei Unsicherheit oder Kritik.",
        },
        {
          label: "Tierentsprechung",
          text: `${profile.animal} als archetypisches Resonanzbild des Subtyps.`,
        },
      ],
    },
    {
      title: `${subtypeCode} \u00b7 Seite 2 \u00b7 2-Punkte-Integration`,
      intro:
        "Die zweite Tafel verortet die k\u00f6rperliche Integrationspraxis mit zwei Aufmerksamkeitspunkten und einem Kernsatz f\u00fcr die t\u00e4gliche Regulation.",
      entries: [
        {
          label: "Punkt 1",
          text: "Stirn / Kopf: Wissen, Verstehen, Wahrnehmung und innere Klarheit.",
        },
        {
          label: "Punkt 2",
          text: "Herzraum / Brustmitte: N\u00e4he, Verbindung und Resonanz.",
        },
        {
          label: "Praxis",
          text: "Eine Hand auf die Stirn oder den Kopf legen, die andere auf den Herzraum. Beide Punkte gleichzeitig wahrnehmen und das gesamte Energiefeld des K\u00f6rpers einbeziehen.",
        },
        { label: "Kernsatz", text: profile.page2Core },
      ],
    },
    {
      title: `${subtypeCode} \u00b7 Seite 3 \u00b7 Transformation`,
      intro:
        "Die dritte Tafel beschreibt Problem, Wendepunkt und Integration sowie die k\u00f6rperliche Praxis \u00fcber Akupressur, Atemimpuls und stille Pr\u00e4senz.",
      entries: [
        { label: "Transformationsrichtung", text: profile.page3Path },
        { label: "Problem", text: profile.problem },
        { label: "Wendepunkt", text: profile.turningPoint },
        { label: "Integration", text: profile.integration },
        {
          label: "K\u00f6rperliche Integration",
          text: "Leistung / Energie: sechs Zug\u00e4nge \u00fcber Gesicht, Hand, Fu\u00df, Bauch, Finger und Ohr zur Balance und Regulation.",
        },
        {
          label: "Mentale & emotionale Haltung",
          text: "Typ 3 zeigt mental Selbstt\u00e4uschung und emotional Eitelkeit. Der innere Wert kann hinter Leistung, Wirkung und Image verschwinden.",
        },
      ],
    },
    {
      title: `${subtypeCode} \u00b7 Seite 4 \u00b7 Heilmittel-Kompass`,
      intro:
        "Die vierte Tafel b\u00fcndelt die heilkundliche Ebene f\u00fcr Typ 3: hom\u00f6opathisches Einzelmittel, Mineralstoffimpuls, Bachbl\u00fcte, Edelstein, Tee, Leidenschaft und Motivation.",
      entries: [
        {
          label: "Hom\u00f6opathisches Einzelmittel",
          text: "Tarentula hispanica (Spanische Tarantel) als Typ-3-Mittel f\u00fcr Getriebenheit, Leistungsdruck und die Wandlung hin zu Authentizit\u00e4t.",
        },
        {
          label: "Ziel",
          text: "Regulation und St\u00e4rkung der Dreier-Lebenskraft: Ausgleich der blockierten, verdr\u00e4ngten Herzenergie.",
        },
        {
          label: "Mineralstoffimpuls",
          text: "Ferrum phosphoricum unterst\u00fctzt Aktivierung, Antrieb und vitale frische Energie.",
        },
        {
          label: "Bachbl\u00fcte",
          text: "Vervain unterst\u00fctzt Authentizit\u00e4t, Ausgleich und Ma\u00df.",
        },
        {
          label: "Edelstein",
          text: "Tigerauge steht f\u00fcr Fokus, Klarheit und Selbstvertrauen.",
        },
        {
          label: "Tee",
          text: "Rosmarintee unterst\u00fctzt Konzentration, Kl\u00e4rung und Energie.",
        },
      ],
    },
    {
      title: `${subtypeCode} \u00b7 Seite 5 \u00b7 Integrationspotenzial`,
      intro:
        "Die f\u00fcnfte Tafel verdichtet das Integrationspotenzial mit archetypischer Essenz, verk\u00f6rperter Qualit\u00e4t, Beziehungsebene, Bewusstseinsraum und Ausstrahlung.",
      entries: [
        { label: "Integrationspotenzial", text: profile.page5Title },
        { label: "Integrationssatz", text: profile.page5Sentence },
        {
          label: "Verk\u00f6rperte Qualit\u00e4t",
          text: "Kompetenz und Wirksamkeit verbinden sich mit Echtheit, innerem Wert und menschlicher Pr\u00e4senz.",
        },
        {
          label: "Nervensystem-Regulation",
          text: "Aktivierung wird bewusst gesteuert, Erholung eingeplant, innerer Druck gel\u00f6st und echter Selbstkontakt gest\u00e4rkt.",
        },
        {
          label: "Beziehungsebene",
          text: "Begegnung auf Augenh\u00f6he, klare Kommunikation, echte Verbindung und Wertsch\u00e4tzung ohne Rollenbild.",
        },
      ],
    },
  ];
}


const se1 = {
      code: "SE1",
      title: "Die selbsterhaltende Eins",
      animal: "Adler",
      status: "curated_draft",
      pages: "PDF Seiten 9-13",
      organismQuestion: "Wie kann ich richtig sein und Fehler vermeiden?",
      subtypeQuestion:
        "Wie kann ich richtig handeln und meine Integrit\u00e4t bewahren, ohne mich innerlich zu verh\u00e4rten?",
      integrationSentence: "Ordnung entsteht aus Pr\u00e4senz, nicht aus Kontrolle.",
      coreSentence:
        "Wenn du Ordnung zul\u00e4sst, ohne dich zu verh\u00e4rten, entsteht innere Sicherheit und echte Stabilit\u00e4t.",
      visualPages: [
        {
          title: "Typ 1 \u00b7 \u00dcberblick",
          caption: "Grundthema, K\u00f6rperorganisation, Organismusfrage und archetypisches Tier.",
          src: "assets/knowledge/type-1/type-1-overview.jpeg",
          alt: "Typ 1 \u00dcberblick mit Grundthema Richtig und Falsch, K\u00f6rperorganisation und Adler-Archetyp",
        },
        {
          title: "SE1 \u00b7 Seite 1",
          caption: "Subtyp-Profil mit Prototypen, Organismusfrage, Blickqualit\u00e4t und Spannungsverteilung.",
          src: "assets/knowledge/type-1/se1/se1-page-1.jpeg",
          alt: "SE1 Seite 1 mit Grundthema Integrit\u00e4t und Ordnung",
        },
        {
          title: "SE1 \u00b7 Seite 2",
          caption: "2-Punkte-Integration mit Handpositionen und Kernpraxis.",
          src: "assets/knowledge/type-1/se1/se1-page-2.jpeg",
          alt: "SE1 Seite 2 mit Zwei-Punkte-Integration und Handpositionen",
        },
        {
          title: "SE1 \u00b7 Seite 3",
          caption: "K\u00f6rperarbeit, Akupressur, Atemimpuls, Fl\u00fcgel und Songfelder.",
          src: "assets/knowledge/type-1/se1/se1-page-3.jpeg",
          alt: "SE1 Seite 3 mit K\u00f6rperarbeit, Akupressur und Medienfeldern",
        },
        {
          title: "SE1 \u00b7 Seite 4",
          caption: "Heilmittel-Kompass mit Mineralstoffimpuls, Bachbl\u00fcte, Edelstein und Tee.",
          src: "assets/knowledge/type-1/se1/se1-page-4.jpeg",
          alt: "SE1 Seite 4 Heilmittel-Kompass mit Platinum metallicum und unterst\u00fctzenden Mitteln",
        },
        {
          title: "SE1 \u00b7 Seite 5",
          caption: "Integrationspotenzial, Bewusstseinsraum, neue F\u00e4higkeiten und Ausstrahlung.",
          src: "assets/knowledge/type-1/se1/se1-page-5.jpeg",
          alt: "SE1 Seite 5 mit Integrationspotenzial Ruhe und Integrit\u00e4t",
        },
      ],
      sourceCoverage: [
        {
          page: "Typ 1 \u00b7 \u00dcberblick",
          status: "vollstaendig_angelegt",
          blocks: [
            "Grundthema",
            "Stirnspannung",
            "Blickfokus",
            "Mundlinie",
            "Kiefer & Nacken",
            "K\u00f6rperorganisation",
            "Spaltung / innerer Konflikt",
            "Typische Haltung & Ausdruck",
            "Verk\u00f6rperte Signatur",
            "Integrationsweg",
            "Organismusfrage",
            "Blickqualit\u00e4t",
            "Mikrospannung",
            "Atemrhythmus",
            "Bewegungsinitiierung",
            "Kontaktstil",
            "Spannungsverteilung",
            "Archetypisches Tier",
            "Lebensfeld / Kernsatz / Ressource",
          ],
        },
        {
          page: "SE1 \u00b7 Seite 1",
          status: "vollstaendig_angelegt",
          blocks: [
            "Grundthema",
            "weiblicher Prototyp",
            "m\u00e4nnlicher Prototyp",
            "Organismusfrage",
            "Blickqualit\u00e4t",
            "Mikrospannung",
            "Atemrhythmus",
            "Bewegungsinitiierung",
            "Kontaktstil",
            "Spannungsverteilung",
            "Verk\u00f6rperte Signatur",
            "Grundtension",
            "Integrationsweg",
            "Tierentsprechung",
            "Ressourcenfeld",
            "energetische Temperatur",
            "Aufmerksamkeit",
            "Lebensfokus",
          ],
        },
        {
          page: "SE1 \u00b7 Seite 2",
          status: "vollstaendig_angelegt",
          blocks: [
            "2-Punkte-Integration",
            "Punkt 1",
            "Punkt 2",
            "Bed\u00fcrfnisse pro Punkt",
            "Vorgehensweise",
            "Handposition / K\u00f6rperabbildung",
            "Prototypen",
            "Lebensthema",
            "unbewusste Strategie",
            "Integration",
            "Kernsatz",
            "Fu\u00dfzeile / Subtypbeschreibung",
          ],
        },
        {
          page: "SE1 \u00b7 Seite 3",
          status: "vollstaendig_angelegt",
          blocks: [
            "Problem",
            "Wendepunkt",
            "Integration",
            "K\u00f6rperarbeit / Akupressur",
            "Gesicht",
            "Hand",
            "Fu\u00df",
            "Bauch",
            "Finger",
            "Ohr",
            "Anwendungsanleitung",
            "vollkommen still sitzen",
            "mentale & emotionale Haltung",
            "Fl\u00fcgel",
            "interaktive Elemente",
            "Songs / Medien",
          ],
        },
        {
          page: "SE1 \u00b7 Seite 4",
          status: "vollstaendig_angelegt",
          blocks: [
            "Heilmittel-Kompass",
            "hom\u00f6opathisches Einzelmittel",
            "Thema",
            "Wirkung auf Lebenskraft und Leidenschaft",
            "Ziel",
            "Mineralstoff-Impuls",
            "Bachbl\u00fcte",
            "Edelstein",
            "Tee",
            "Zuordnungshinweis",
            "Leidenschaft",
            "innere Motivation",
            "Relaxing & Healing Music",
            "interaktive Elemente",
            "Wirkweise Hom\u00f6opathie",
            "Wirkweise Enneagramm-Hom\u00f6opathie",
          ],
        },
        {
          page: "SE1 \u00b7 Seite 5",
          status: "vollstaendig_angelegt",
          blocks: [
            "Integrationspotenzial",
            "Leitquote",
            "Archetypische Essenz",
            "verk\u00f6rperte Qualit\u00e4t",
            "Nervensystem-Regulation",
            "Beziehungsebene",
            "neue F\u00e4higkeiten",
            "Integrationssatz",
            "Bewusstseinsraum",
            "Ausstrahlung",
            "archetypische Natur",
            "Integration bedeutet",
          ],
        },
      ],
      lifeTheme: [
        "Sicherheit, Ordnung und Kontrolle im Leben suchen.",
        "Alles richtig machen wollen und sich dabei selbst unter Druck setzen.",
        "Fehler und Schw\u00e4che vermeiden wollen und dadurch innere Entspannung verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Solarplexus / Oberbauch und Unterbauch / Beckenbereich.",
      essence: {
        title: "Integrationspotenzial: Ruhe & Integrit\u00e4t",
        sentence: "Ordnung entsteht aus Pr\u00e4senz, nicht aus Kontrolle.",
        qualities: ["ruhiger Atem", "entspannter Kiefer", "klarer Blick", "mehr Ruhe im Bauchraum", "nat\u00fcrliche K\u00f6rperpr\u00e4senz"],
      },
      integrationPath: [
        "Mehr innere Ruhe entwickeln.",
        "Fehler, Bed\u00fcrfnisse und menschliche Unvollkommenheit erlauben.",
        "Stabilit\u00e4t durch Gelassenheit, Vertrauen und lebendige Selbstannahme finden.",
      ],
      unconsciousStrategy: [
        "Starke Selbstkontrolle, um Fehler und Kritik zu vermeiden.",
        "Bed\u00fcrfnisse und spontane Impulse zur\u00fcckhalten.",
        "Stabilisierung \u00fcber Disziplin, Selbstbeherrschung und hohe Anspr\u00fcche.",
      ],
      turningPoint: [
        "Erkennen, dass dauerhafte Kontrolle und Selbstanspannung von Lebendigkeit trennen.",
        "Sich selbst mit mehr Milde und Verst\u00e4ndnis begegnen.",
        "Entspannung erm\u00f6glicht Nat\u00fcrlichkeit und Vertrauen.",
      ],
      integratedState: [
        "Klar und bewusst handeln, ohne dauerhaft unter Druck zu stehen.",
        "Dem Leben mehr vertrauen und menschliche Unvollkommenheit erlauben.",
        "Ruhe wird zu einer stabilen Kraft, aus der Nat\u00fcrlichkeit, W\u00e4rme und Gelassenheit entstehen.",
      ],
      tensionFields: [
        "Kontrolle \u2192 Vertrauen",
        "Anspannung \u2192 Entspannung",
        "Selbstkontrolle \u2192 Nat\u00fcrlichkeit",
        "Disziplin \u2192 Genuss",
        "Funktionieren \u2192 Wohlbefinden",
        "Perfektion \u2192 Menschlichkeit",
        "Vorsicht \u2192 Lebendigkeit",
        "Pflicht \u2192 Selbstf\u00fcrsorge",
        "Absicherung \u2192 Offenheit",
      ],
      archetypalEssence: "Integrit\u00e4t",
      integrativePotential: "Ruhe & Integrit\u00e4t",
      nervousSystemRegulation: [
        "Spannung schneller loslassen",
        "Kontrolle durch Wahrnehmung ersetzen",
        "zwischen Aktivit\u00e4t und Ruhe wechseln",
        "Perfektionismus und H\u00e4rte l\u00f6sen",
        "Fehler nicht sofort als Bedrohung wahrnehmen",
        "sich selbst weniger unter Dauerdruck setzen",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Anspruch, richtig und gut zu sein, und der Angst, Fehler zu machen oder die Kontrolle zu verlieren.",
        gazeQuality: [
            "aufmerksam und pr\u00fcfend",
            "scannt nach Sicherheit und Ordnung",
            "eher bei sich, weniger expansiv",
            "klare, ruhige Pr\u00e4senz",
          ],
        microTension: [
            "Stirn: leichte Konzentrationsfalten",
            "Augen: fokussiert, kritisch",
            "Mund: kontrolliert, knapp",
            "Kiefer: leicht angespannt",
            "Haltung: aufrecht, zur\u00fcckhaltend",
          ],
        breathingRhythm: [
            "tief, ruhig und kontrolliert",
            "neigt zu Anhalten des Atems bei innerer Anspannung",
            "Regulation \u00fcber Kontrolle",
          ],
        movementInitiation: [
            "\u00fcberlegt und vorsichtig",
            "erst pr\u00fcfen, dann handeln",
            "sch\u00fctzt Energie und Ressourcen",
            "Bewegung zielgerichtet und sparsam",
          ],
        contactStyle: [
            "respektvoll, korrekt, verl\u00e4sslich",
            "wahrt Distanz, bis Vertrauen da ist",
            "klare Grenzen, klare Worte",
            "hilfsbereit, wenn Sicherheit gegeben ist",
          ],
        twoPoints: {
          point1: { name: "Solarplexus / Oberbauch", location: "oberhalb des Nabels", need: [
              "Ordnung",
              "Integrit\u00e4t",
              "Kontrolle",
              "innere Stabilit\u00e4t",
            ] },
          point2: { name: "Unterbauch / Beckenbereich", location: "unterhalb des Nabels", need: [
              "Sicherheit",
              "Schutz",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nichts korrigieren.",
            "Im K\u00f6rper bleiben.",
            "Ruhig weiteratmen.",
            "Einfach wahrnehmen.",
            "Weich werden lassen.",
          ],
        },
      },
      signature: {
        title: "Verk\u00f6rperte Signatur",
        text: "Ich bewahre meine Integrit\u00e4t, indem ich mich selbst sch\u00fctze und richtig handle.",
      },
      remedyCards: [
        {
          title: "Platinum metallicum",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-1/se1/heilmittel/se1-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus dem Edelmetall Platin \u2013 einem der reinsten, kostbarsten und widerstandsf\u00e4higsten Metalle \u00fcberhaupt, das von keiner S\u00e4ure angegriffen wird. Genau diese Signatur pr\u00e4gt das Mittelbild: ein Streben nach Reinheit, Vollkommenheit und moralischer Unantastbarkeit, verbunden mit einem feinen Gef\u00fchl der Erhabenheit \u00fcber das Gew\u00f6hnliche. Wie das Metall sich nicht verunreinigen l\u00e4sst, will die Eins fehlerlos, korrekt und integer sein. Das Bed\u00fcrfnis, alles richtig zu machen, ruht auf einem starken inneren Anspruch nach Perfektion, Ordnung und Integrit\u00e4t \u2013 und auf der Angst, sich durch einen Fehler herabzusetzen.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als strenge Kontrolle, innerer Druck, Anspannung und unerbittliche Selbstverurteilung zeigt. Es hilft, den hohen Anspruch von der erstarrten H\u00e4rte zu l\u00f6sen, sodass W\u00fcrde und Aufrichtigkeit bleiben d\u00fcrfen, ohne in Verbissenheit und \u00dcberlegenheit zu kippen. So darf die Eins Ma\u00df und Menschlichkeit wiederfinden \u2013 richtig sein, ohne sich selbst zu richten.",
        },
        {
          title: "Kalium sulfuricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-1/se1/heilmittel/se1-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Reinigung, Stoffwechsel und innere Erneuerung",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 6 ist das Salz des Stoffwechsels, der Entgiftung und der inneren Erneuerung. Es unterst\u00fctzt die Zellatmung und hilft dem K\u00f6rper, Verbrauchtes auszuscheiden und sich zu regenerieren. Auf seelischer Ebene steht es f\u00fcr Erneuerung und das L\u00f6sen von Festgefahrenem. F\u00fcr die Eins, die sich in Strenge, Druck und Selbstverurteilung verh\u00e4rten kann, f\u00f6rdert es einen lebendigen Fluss. So wirkt es dort, wo starre Kontrolle sich in gesunde Durchl\u00e4ssigkeit wandeln darf.",
          goal: "Auf der Mineralstoff-Ebene f\u00f6rdert es die F\u00e4higkeit, festgehaltene Spannungen und veraltete Ordnungsmuster loszulassen \u2013 hin zu nat\u00fcrlicher Erneuerung ohne Zwang.",
        },
        {
          title: "Rock Water",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-1/se1/heilmittel/se1-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Flexibilit\u00e4t statt starrer Selbststrenge",
          text: "Rock Water ist die Bachbl\u00fcte f\u00fcr Menschen, die hohe Ideale an sich selbst anlegen und streng, fast asketisch mit sich umgehen. Sie hilft jenen, die sich Genuss und Leichtigkeit versagen, um ein selbstgesetztes Vorbild zu erf\u00fcllen. Die Bl\u00fcte l\u00f6st innere H\u00e4rte und starre Selbstdisziplin und bringt Flexibilit\u00e4t und Milde. F\u00fcr die Eins, die unter dem Druck des inneren Richters steht, ist sie ein sanftes Gegenmittel. So darf aus verbissener Strenge eine offene, freundliche Haltung sich selbst gegen\u00fcber werden.",
          goal: "Auf der Seelenebene l\u00e4dt es ein, die eigene Menschlichkeit zu umarmen \u2013 Ideale d\u00fcrfen bleiben, aber der innere Richter darf sich in einen weisen Freund verwandeln.",
        },
        {
          title: "Amethyst",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-1/se1/heilmittel/se1-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Ruhe, Klarheit und Gelassenheit",
          text: "Der Amethyst ist eine violette Variet\u00e4t des Bergkristalls und gilt seit der Antike als Stein der Klarheit, M\u00e4\u00dfigung und geistigen Ruhe. Traditionell setzt man ihn dort ein, wo der Kopf nicht zur Ruhe kommt: bei kreisenden Gedanken, innerer Anspannung und einem \u00fcberaktiven, kritischen Geist. Er wirkt beruhigend, kl\u00e4rend und harmonisierend und unterst\u00fctzt Meditation wie erholsamen Schlaf. F\u00fcr die Eins ist er ein Gegengewicht zur strengen Selbstkontrolle und zum unerm\u00fcdlichen inneren Richter. Er l\u00e4dt ein, Anspannung loszulassen und echte Gelassenheit zuzulassen \u2013 Ruhe statt Verbissenheit, Milde statt H\u00e4rte gegen sich selbst.",
          goal: "Als energetisches Werkzeug l\u00e4dt er ein, innere Strenge durch Klarheit zu ersetzen \u2013 Kontrolle darf Stille werden, Anspannung darf sich in ruhige Ordnung aufl\u00f6sen.",
        },
        {
          title: "Melissentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-1/se1/heilmittel/se1-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "beruhigend und nervenst\u00e4rkend",
          text: "Melisse ist ein klassisches Heilkraut f\u00fcr Nerven und Gem\u00fct, mild beruhigend und herzst\u00e4rkend. Ihr zitronig-frischer Duft entspannt, ohne m\u00fcde zu machen, und l\u00f6st innere Anspannung. Traditionell wird sie bei Unruhe, Reizbarkeit und nerv\u00f6ser Anspannung getrunken. F\u00fcr die Eins, die unter innerem Druck und Selbststrenge steht, ist sie ein sanfter Ausgleich. So hilft ein Melissentee, verkrampfte Anspannung loszulassen und zur Ruhe zu kommen.",
          goal: "Als pflanzliche Begleiterin l\u00e4dt sie t\u00e4glich ein, sich aus dem Kontrollmodus zu l\u00f6sen und den K\u00f6rper als freundlichen Ort zu erleben.",
        },
        {
          title: "Arsenicum album",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/arsenicum-album.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus dem wei\u00dfen Arsenik \u2013 einem mineralischen Stoff, der in materieller Dosis ein t\u00f6dliches Gift ist und im Menschen tiefste Existenzangst spiegelt. Diese Signatur zeigt das Mittelbild deutlich: eine qu\u00e4lende Sorge um Sicherheit, Ordnung und Reinheit, peinliche Genauigkeit und die rastlose Angst, etwas k\u00f6nnte au\u00dfer Kontrolle geraten. Die Wunde der Unvollkommenheit tr\u00e4gt genau diesen Kern \u2013 einen tiefen Wunsch nach Sicherheit und Fehlervermeidung, der hinter Ordnung eine st\u00e4ndige innere Anspannung verbirgt. Wo das Gift Vernichtung bedeutet, sucht die Seele zwanghaft Halt durch Kontrolle.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als \u00e4ngstliche Kontrolle, Unsicherheitsvermeidung und unerm\u00fcdliche Selbstpr\u00fcfung zeigt. Es beruhigt die existenzielle Unruhe und hilft, das Gef\u00fchl von Sicherheit nicht l\u00e4nger durch perfekte Ordnung erzwingen zu m\u00fcssen. So darf an die Stelle der angstgetriebenen Kontrolle ein getragenes inneres Vertrauen treten.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Platinum metallicum",
          schuessler: "Kalium sulfuricum",
          bachbluete: "Rock Water",
          edelstein: "Amethyst",
          tee: "Melissentee",
        },
        homoeopathieThema: "Gewonnen aus dem Edelmetall Platin \u2013 einem der reinsten, kostbarsten und widerstandsf\u00e4higsten Metalle \u00fcberhaupt, das von keiner S\u00e4ure angegriffen wird. Genau diese Signatur pr\u00e4gt das Mittelbild: ein Streben nach Reinheit, Vollkommenheit und moralischer Unantastbarkeit, verbunden mit einem feinen Gef\u00fchl der Erhabenheit \u00fcber das Gew\u00f6hnliche. Wie das Metall sich nicht verunreinigen l\u00e4sst, will die Eins fehlerlos, korrekt und integer sein. Das Bed\u00fcrfnis, alles richtig zu machen, ruht auf einem starken inneren Anspruch nach Perfektion, Ordnung und Integrit\u00e4t \u2013 und auf der Angst, sich durch einen Fehler herabzusetzen.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als strenge Kontrolle, innerer Druck, Anspannung und unerbittliche Selbstverurteilung zeigt. Es hilft, den hohen Anspruch von der erstarrten H\u00e4rte zu l\u00f6sen, sodass W\u00fcrde und Aufrichtigkeit bleiben d\u00fcrfen, ohne in Verbissenheit und \u00dcberlegenheit zu kippen. So darf die Eins Ma\u00df und Menschlichkeit wiederfinden \u2013 richtig sein, ohne sich selbst zu richten.",
        wundeThema: "Bereitet aus dem wei\u00dfen Arsenik \u2013 einem mineralischen Stoff, der in materieller Dosis ein t\u00f6dliches Gift ist und im Menschen tiefste Existenzangst spiegelt. Diese Signatur zeigt das Mittelbild deutlich: eine qu\u00e4lende Sorge um Sicherheit, Ordnung und Reinheit, peinliche Genauigkeit und die rastlose Angst, etwas k\u00f6nnte au\u00dfer Kontrolle geraten. Die Wunde der Unvollkommenheit tr\u00e4gt genau diesen Kern \u2013 einen tiefen Wunsch nach Sicherheit und Fehlervermeidung, der hinter Ordnung eine st\u00e4ndige innere Anspannung verbirgt. Wo das Gift Vernichtung bedeutet, sucht die Seele zwanghaft Halt durch Kontrolle.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als \u00e4ngstliche Kontrolle, Unsicherheitsvermeidung und unerm\u00fcdliche Selbstpr\u00fcfung zeigt. Es beruhigt die existenzielle Unruhe und hilft, das Gef\u00fchl von Sicherheit nicht l\u00e4nger durch perfekte Ordnung erzwingen zu m\u00fcssen. So darf an die Stelle der angstgetriebenen Kontrolle ein getragenes inneres Vertrauen treten.",
        wunde: {
          homoeopathie: "Arsenicum album",
          schuessler: "Kalium chloratum",
          bachbluete: "Rock Water",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 1). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      contentModules: [
        {
          title: "Typ 1 \u00b7 Grundkarte",
          intro:
            "Die allgemeine Typ-1-Karte bildet die Grundlage f\u00fcr alle Einser-Subtypen. Im Zentrum steht das Streben nach Ordnung, Integrit\u00e4t und Richtigkeit. Der Organismus versucht, Fehler, moralisches Versagen und Kontrollverlust zu vermeiden.",
          entries: [
            {
              label: "Thema",
              text: "Grundthema: richtig und falsch. Typ 1 sucht Ordnung, Integrit\u00e4t, Verantwortung und innere Korrektheit.",
            },
            {
              label: "Organismusfrage",
              text: "Wie kann ich richtig sein und Fehler vermeiden?",
            },
            {
              label: "Leidenschaft",
              text: "Die innere Spannung entsteht aus \u00c4rger, Groll oder Unzufriedenheit, die meist kontrolliert, moralisch begr\u00fcndet oder gegen sich selbst gerichtet wird.",
            },
            {
              label: "Innere Motivation",
              text: "Typ 1 m\u00f6chte gut, integer, verantwortungsvoll und richtig handeln. Die Welt soll sinnvoll, geordnet und gerecht sein.",
            },
            {
              label: "Stirnspannung",
              text: "Horizontale Spannung, Kontrollaktivit\u00e4t, innere Bewertung und st\u00e4ndiges Pr\u00fcfen.",
            },
            {
              label: "Blickfokus",
              text: "Pr\u00e4zise, pr\u00fcfend, wach und korrekturorientiert. Der Blick sucht Abweichungen, Unstimmigkeiten oder etwas, das verbessert werden m\u00fcsste.",
            },
            {
              label: "Mundlinie",
              text: "Kontrolliert, leicht angespannt, zur\u00fcckhaltende Emotion. Impulse werden eher gehalten als spontan gezeigt.",
            },
            {
              label: "Kiefer & Nacken",
              text: "Haltespannung, Zur\u00fcckhalten von Impulsen und k\u00f6rperlich sp\u00fcrbare Selbstkontrolle.",
            },
            {
              label: "K\u00f6rperorganisation",
              text: "Aufrecht, gesammelt und kontrolliert, mit subtiler Distanz. Die Energie kanalisiert sich nach oben; Kopf, Stirn, Kiefer und Nacken sind h\u00e4ufig aktiver als Bauch, Becken und spontane Bewegung.",
            },
            {
              label: "Spaltung / innerer Konflikt",
              text: "Selbstanspruch, Perfektion und Richtigkeit stehen Menschlichkeit, Fehlerfreundlichkeit und lebendiger Unvollkommenheit gegen\u00fcber.",
            },
            {
              label: "Typische Haltung & Ausdruck",
              text: "Aufgerichtet, strukturiert und ernst. Gestik und Mimik sind pr\u00e4zise, kontrolliert und sparsam. Der Ausdruck kann reserviert, kritisch oder streng wirken.",
            },
            {
              label: "Verk\u00f6rperte Signatur",
              text: "Ich halte Spannung, um richtig zu handeln und Fehler zu vermeiden.",
            },
            {
              label: "Integrationsweg",
              text: "Vom inneren Kritiker zum weisen H\u00fcter. Mehr Menschlichkeit statt Perfektion, mehr Pr\u00e4senz statt permanenter Korrektur, mehr W\u00fcrde statt innerer Strenge.",
            },
            {
              label: "Blickqualit\u00e4t",
              text: "Pr\u00e4zise, kontrolliert, bewertend und wach. Der Blick sucht Unstimmigkeiten, kann aber in der Integration zu Klarheit und Weisheit werden.",
            },
            {
              label: "Mikrospannung",
              text: "Spannung in Stirn, Augen, Kiefer und Nacken. Der K\u00f6rper h\u00e4lt sich zusammen, um korrekt und beherrscht zu bleiben.",
            },
            {
              label: "Atemrhythmus",
              text: "Eher flach, kontrolliert und gehalten. Der Atem darf lernen, nicht nur Disziplin, sondern auch Loslassen zu unterst\u00fctzen.",
            },
            {
              label: "Bewegungsinitiierung",
              text: "Zielgerichtet, kontrolliert, korrekturorientiert und funktional. Spontane Bewegung wird h\u00e4ufig erst gepr\u00fcft.",
            },
            {
              label: "Kontaktstil",
              text: "Verantwortlich, korrekt und verbindlich. In Stress kann der Kontakt kritisch oder belehrend wirken; in Integration entsteht klare, w\u00fcrdige F\u00fchrung.",
            },
            {
              label: "Spannungsverteilung",
              text: "Hauptspannung in Stirn, Kiefer und Nacken. Nebenaktivit\u00e4t im Solarplexus und in den Schultern.",
            },
            {
              label: "Archetypisches Tier",
              text: "Adler: Weitblick, Integrit\u00e4t, Klarheit und F\u00fchrung. Der Adler steht f\u00fcr den Weg vom kritischen Blick zur weisen \u00dcbersicht.",
            },
            {
              label: "Lebensfeld",
              text: "Lebensthema: Ordnung und Integrit\u00e4t. Kernsatz: Nicht korrigieren. Ressource: weich werden lassen und trotzdem klar bleiben.",
            },
          ],
        },
        {
          title: "SE1 \u00b7 Seite 1 \u00b7 Subtyp-Profil",
          intro:
            "Die SE1 sucht Sicherheit durch Ordnung, Korrektheit und Selbstkontrolle. Der K\u00f6rper zeigt dabei feine Konzentration, zur\u00fcckhaltende Pr\u00e4senz und ein starkes Bed\u00fcrfnis, stabil und integer zu handeln.",
          entries: [
            {
              label: "Grundthema",
              text: "Integrit\u00e4t und Ordnung. Das Richtige ist heilig; Prinzipien sollen sch\u00fctzen, st\u00fctzen und Halt geben.",
            },
            {
              label: "Organismusfrage",
              text: "Wie kann ich richtig handeln und meine Integrit\u00e4t bewahren, um sicher und stabil zu bleiben?",
            },
            {
              label: "Blickqualit\u00e4t",
              text: "aufmerksam und pr\u00fcfend; scannt nach Sicherheit und Ordnung; eher bei sich und weniger expansiv; klare, ruhige Pr\u00e4senz.",
            },
            {
              label: "Mikrospannung",
              text: "leichte Konzentrationsfalten in der Stirn, fokussierte und kritische Augen, kontrollierter Mund, leicht angespannter Kiefer und aufrechte, zur\u00fcckhaltende Haltung.",
            },
            {
              label: "Atemrhythmus",
              text: "tief, ruhig und kontrolliert; neigt zum Anhalten des Atems bei innerer Anspannung; Regulation \u00fcber Kontrolle.",
            },
            {
              label: "Bewegungsinitiierung",
              text: "\u00fcberlegt und vorsichtig; pr\u00fcft erst und handelt dann; sch\u00fctzt Energie und Ressourcen; Bewegung ist zielgerichtet und sparsam.",
            },
            {
              label: "Kontaktstil",
              text: "respektvoll, korrekt und verl\u00e4sslich; nimmt Distanz wahr, bis Vertrauen da ist; klare Grenzen und klare Worte; hilfsbereit, wenn Sicherheit gegeben ist.",
            },
            {
              label: "Spannungsverteilung",
              text: "Kopf und Stirn: moralische Anspannung. Nacken und Schultern: Verantwortungslast. Brustbereich: Schutzpanzer. Bauch: Kontrolle und Selbstregulation. Kiefer: zur\u00fcckgehaltene Spannung.",
            },
            {
              label: "Ressourcenfeld",
              text: "Selbstf\u00fcrsorge und Stabilit\u00e4t, klare Werte und Prinzipien, Struktur und Ordnung, verl\u00e4ssliche Routinen, Grenzen und Selbstschutz, Ehrlichkeit und Gewissen.",
            },
          ],
        },
        {
          title: "Seite 2 \u00b7 2-Punkte-Integration",
          intro:
            "Die zentrale Praxis der SE1 verbindet zwei K\u00f6rperr\u00e4ume: den Solarplexus/Oberbauch als Feld von Ordnung und Ausrichtung mit dem Unterbauch/Beckenbereich als Feld von Sicherheit, Ruhe und Erdung. Die \u00dcbung bringt Aufmerksamkeit in beide Pole zugleich, ohne etwas korrigieren zu m\u00fcssen.",
          entries: [
            {
              label: "Punkt 1",
              text: "Solarplexus / Oberbauch: Bed\u00fcrfnis nach Klarheit, Ordnung und richtiger Ausrichtung. Dieser Punkt h\u00e4lt die innere Frage, was stimmig, korrekt und verantwortbar ist.",
            },
            {
              label: "Punkt 2",
              text: "Unterbauch / Beckenbereich: Bed\u00fcrfnis nach Sicherheit, Ruhe, Erdung und k\u00f6rperlichem Vertrauen. Dieser Punkt bringt die SE1 aus reiner Kopf- und Kontrollspannung zur\u00fcck in den K\u00f6rper.",
            },
            {
              label: "Vorgehen",
              text: "Eine Hand auf den Solarplexus/Oberbauch legen, die andere auf den Unterbauch/Beckenbereich. Erst Punkt 1 sp\u00fcren, dann Punkt 2 sp\u00fcren, danach beide Energiefelder gleichzeitig wahrnehmen. Nichts ver\u00e4ndern, nichts korrigieren, den Atem ruhig flie\u00dfen lassen.",
            },
            {
              label: "Handposition",
              text: "Die H\u00e4nde dienen nicht der Korrektur, sondern der gleichzeitigen Aufmerksamkeit. Die SE1 erlebt dadurch: Klarheit und Sicherheit m\u00fcssen nicht gegeneinander arbeiten.",
            },
            {
              label: "Lebensthema",
              text: "Du suchst Sicherheit durch Ordnung, Integrit\u00e4t und richtiges Handeln. Gleichzeitig entsteht Druck, wenn Sicherheit nur \u00fcber Kontrolle und Fehlervermeidung gesucht wird.",
            },
            {
              label: "Unbewusste Strategie",
              text: "Du versuchst, Stabilit\u00e4t durch Kontrolle, Korrektheit und Vorbereitung herzustellen. Dabei kann der K\u00f6rper eng werden, obwohl er eigentlich nach Ruhe und Vertrauen sucht.",
            },
            {
              label: "Integration",
              text: "Du lernst, Ordnung zuzulassen, ohne dich zu verh\u00e4rten. Sicherheit entsteht nicht nur durch Richtigkeit, sondern auch durch K\u00f6rperkontakt, Erdung und inneres Vertrauen.",
            },
            {
              label: "Prototypen",
              text: "Die weibliche und m\u00e4nnliche SE1-Prototypik zeigt eine ruhige, zur\u00fcckhaltende und kontrollierte Pr\u00e4senz. Beide stehen f\u00fcr die Suche nach Stabilit\u00e4t, Verantwortung und innerer Korrektheit.",
            },
            {
              label: "Kernsatz",
              text: "Wenn du deiner inneren Ordnung vertraust, entsteht Ruhe, auch wenn nicht alles perfekt ist.",
            },
            {
              label: "Fu\u00dfzeile",
              text: "Selbsterhaltende Eins (SE1): Instinkt der Integrit\u00e4t, Ordnung, Stabilit\u00e4t und k\u00f6rperlichen Selbstsicherung.",
            },
          ],
        },
        {
          title: "Seite 3 \u00b7 K\u00f6rperarbeit & Akupressur",
          intro:
            "Diese Seite \u00fcbersetzt die innere Spannung der SE1 in konkrete K\u00f6rperarbeit. Der Weg f\u00fchrt von Selbst\u00fcberforderung und Kontrolle in mehr Lebendigkeit, Vertrauen und k\u00f6rperliche Entspannung.",
          entries: [
            {
              label: "Problem",
              text: "Du versuchst, korrekt, stabil und vorbereitet zu bleiben. Dabei kann innere Spannung entstehen, weil der K\u00f6rper st\u00e4ndig pr\u00fcft, ob etwas falsch, unsicher oder noch nicht gut genug ist.",
            },
            {
              label: "Wendepunkt",
              text: "Du erkennst, dass Kontrolle und Selbstkorrektur nicht dasselbe sind wie echte Sicherheit. Die Energie darf ruhiger werden, ohne dass Integrit\u00e4t verloren geht.",
            },
            {
              label: "Integration",
              text: "Du nutzt deine Klarheit bewusst, ohne sie gegen dich selbst zu richten. Ordnung wird zu Orientierung, nicht zu Druck.",
            },
            {
              label: "Gesicht",
              text: "Klarheit und Ausdruck. Der Gesichtspunkt hilft, die kontrollierte Mimik weicher werden zu lassen und dennoch klar pr\u00e4sent zu bleiben.",
            },
            {
              label: "Hand",
              text: "Handlungskraft und Balance. Die Hand erinnert daran, dass richtiges Handeln nicht aus Verkrampfung entstehen muss.",
            },
            {
              label: "Fu\u00df",
              text: "Erdung und Standfestigkeit. Der Fu\u00dfpunkt bringt die SE1 aus der Bewertung in k\u00f6rperlichen Boden und tragf\u00e4hige Orientierung.",
            },
            {
              label: "Bauch",
              text: "Mitte und Entspannung. Der Bauchpunkt reguliert Kontrolle, Druck und innere Anspannung und st\u00e4rkt eine ruhigere Mitte.",
            },
            {
              label: "Finger",
              text: "Sp\u00fcren und Loslassen. Der Fingerimpuls unterst\u00fctzt, Perfektionismus, festgehaltene Korrektur und innere Enge zu l\u00f6sen.",
            },
            {
              label: "Ohr",
              text: "Stille und Regulation. Der Ohrpunkt l\u00e4dt ein, die innere Stimme milder zu h\u00f6ren und nicht nur den inneren Kritiker wahrzunehmen.",
            },
            {
              label: "Anwendung",
              text: "W\u00e4hle ein bis zwei Zonen. Dr\u00fccke mit Daumen oder Zeigefinger 60 bis 90 Sekunden mit mittlerer Intensit\u00e4t. Atme ruhig weiter und beobachte, wie K\u00f6rperempfindungen, Gedanken und Gef\u00fchle sich ver\u00e4ndern.",
            },
            {
              label: "Vollkommen still sitzen",
              text: "Setze dich f\u00fcr zwei Minuten aufrecht und bequem hin. Der K\u00f6rper darf seine eigene Intelligenz zeigen; in dieser kurzen Zeit muss nichts verbessert werden.",
            },
            {
              label: "Mentale & emotionale Haltung",
              text: "Typ 1 zeigt mentalen Perfektionismus und emotionalen Groll, wenn innere Spannung zu stark wird. Die SE1 lernt, Selbstkontrolle in Selbstkontakt zu verwandeln.",
            },
            {
              label: "Fl\u00fcgel",
              text: "Der 9er-Fl\u00fcgel betont Ruhe, Zur\u00fcckhaltung und Harmonie. Der 2er-Fl\u00fcgel betont Beziehung, Verantwortung und Hilfsbereitschaft. Beide k\u00f6nnen die SE1 entlasten, wenn sie nicht zur zus\u00e4tzlichen Pflicht werden.",
            },
            {
              label: "Medienfelder",
              text: "Die Seite verweist auf Bewusstseins\u00fcbungen, dynamische Enneagramm-Darstellungen, Songs, Fl\u00fcgelvideos und subtypspezifische Medien. Diese Felder sind in der App bereits als Medienbereich vorbereitet.",
            },
          ],
        },
        {
          title: "Seite 4 \u00b7 Heilmittel-Kompass",
          intro:
            "Der Heilmittel-Kompass \u00fcbersetzt das SE1-Muster in ein heilkundliches Symbolfeld. Im Zentrum steht die Wandlung von \u00fcberh\u00f6hter Selbstkontrolle, innerem Druck und angespannter Korrektheit hin zu W\u00fcrde, Milde, innerer Ordnung und lebendiger Integrit\u00e4t.",
          entries: [
            {
              label: "Hom\u00f6opathisches Einzelmittel",
              text: "Platinum metallicum steht hier f\u00fcr die Regulation umgewandelter Bauchenergie. Es symbolisiert den Weg von innerem Anspruch, Selbstverantwortung und Spannung zu W\u00fcrde, Demut und echter Integrit\u00e4t.",
            },
            {
              label: "Thema",
              text: "Das Bed\u00fcrfnis, integer, korrekt und kontrolliert zu bleiben, kann von einem starken inneren Anspruch getragen sein. Der heilende Weg f\u00fchrt von rigider Selbstbeherrschung zu milder, lebendiger Ordnung.",
            },
            {
              label: "Wirkung auf Lebenskraft und Leidenschaft",
              text: "Der Impuls unterst\u00fctzt die Wandlung von angespanntem Perfektionismus, innerer H\u00e4rte und Selbst\u00fcberh\u00f6hung in menschliche Pr\u00e4senz, Selbstannahme und verantwortliche Klarheit.",
            },
            {
              label: "Ziel",
              text: "Regulation und St\u00e4rkung der Einser-Lebenskraft: Die umgewandelte Bauchenergie soll nicht bek\u00e4mpft, sondern in klare, ruhige und dienende Integrit\u00e4t verwandelt werden.",
            },
            {
              label: "Mineralstoff-Impuls",
              text: "Kalium sulfuricum verweist auf Ausgleich, Reinigung und Erneuerung. Es unterst\u00fctzt symbolisch die F\u00e4higkeit, innere Spannung zu l\u00f6sen und Ordnung nicht starr, sondern beweglich zu halten.",
            },
            {
              label: "Bachbl\u00fcte",
              text: "Rock Water steht f\u00fcr innere Flexibilit\u00e4t, wenn Ideale, Disziplin und Selbstanspruch zu hart werden. Die Qualit\u00e4t ist: milder werden, ohne die eigene Integrit\u00e4t aufzugeben.",
            },
            {
              label: "Edelstein",
              text: "Amethyst tr\u00e4gt das Feld von Klarheit, Sammlung und geistiger Beruhigung. Er passt zur SE1, wenn die innere Stimme zu streng, bewertend oder kontrollierend wird.",
            },
            {
              label: "Tee",
              text: "Melissentee steht f\u00fcr sanfte Nervenruhe, Entspannung und emotionale Milde. Er erg\u00e4nzt die SE1 dort, wo Kontrolle durch Beruhigung und weichen Atem abgel\u00f6st werden darf.",
            },
            {
              label: "Leidenschaft",
              text: "Die Leidenschaft der SE1 liegt in der inneren Anspannung, alles richtig machen zu m\u00fcssen. Fehler, Unordnung oder moralische Unklarheit k\u00f6nnen k\u00f6rperlich wie Alarm erlebt werden.",
            },
            {
              label: "Innere Motivation",
              text: "Die Motivation ist der Wunsch nach Integrit\u00e4t, Sicherheit und verl\u00e4sslicher Ordnung. Die SE1 m\u00f6chte stabil, korrekt und verantwortlich handeln.",
            },
            {
              label: "Medien & Wirkweise",
              text: "Zur Seite geh\u00f6ren erg\u00e4nzende Medienfelder: Wirkweise der Hom\u00f6opathie, Wirkweise der Enneagramm-Hom\u00f6opathie, Relaxing & Healing Music und Songs zum Wesen der Hom\u00f6opathie.",
            },
            {
              label: "Zuordnungshinweis",
              text: "Die Zuordnung ist symbolisch und erfahrungsbezogen. Sie ersetzt keine therapeutische oder medizinische Beratung, sondern dient der bewussten Selbstwahrnehmung und Integration.",
            },
          ],
        },
        {
          title: "Seite 5 \u00b7 Integration",
          intro:
            "Seite 5 b\u00fcndelt das Integrationspotenzial der SE1. Die Bewegung geht von angespannter Selbstkontrolle, Fehlervermeidung und innerem Druck zu ruhiger Integrit\u00e4t, Selbstkontakt, Stabilit\u00e4t und milder Klarheit.",
          entries: [
            {
              label: "Integrationspotenzial",
              text: "Ruhe und Integrit\u00e4t. Die SE1 muss Ordnung nicht mehr durch Druck erzwingen, sondern findet eine nat\u00fcrliche, verl\u00e4ssliche innere Ausrichtung.",
            },
            {
              label: "Leitquote",
              text: "Sicherheit entsteht, wenn ich meiner inneren Ordnung vertraue, statt mich dauerhaft korrigieren zu m\u00fcssen.",
            },
            {
              label: "Archetypische Essenz",
              text: "Die SE1 ist der ruhige H\u00fcter der Integrit\u00e4t. Sie sch\u00fctzt Werte, Ordnung und Verantwortung, ohne sich dabei selbst zu verh\u00e4rten.",
            },
            {
              label: "Verk\u00f6rperte Qualit\u00e4t",
              text: "Verantwortungsbewusst, sorgf\u00e4ltig, zuverl\u00e4ssig, strukturiert, gewissenhaft und klar. In der Integration wird diese Qualit\u00e4t w\u00e4rmer, ruhiger und menschlicher.",
            },
            {
              label: "Nervensystem-Regulation",
              text: "Langsame Atmung, weicher Kiefer, Erdung, Grenzen sp\u00fcren und die innere Kritikerstimme beruhigen. Der K\u00f6rper lernt, Sicherheit nicht nur \u00fcber Kontrolle zu erzeugen.",
            },
            {
              label: "Beziehungsebene",
              text: "Vertrauen entsteht, wenn die SE1 sich zeigen darf, ohne perfekt sein zu m\u00fcssen. Klarheit bleibt, aber sie wird durch W\u00e4rme, Zuh\u00f6ren und echte N\u00e4he erg\u00e4nzt.",
            },
            {
              label: "Neue F\u00e4higkeiten",
              text: "Fehlerfreundlichkeit, Gelassenheit, innere Milde, flexible Ordnung, Selbstf\u00fcrsorge, Humor und die F\u00e4higkeit, Verantwortung ohne \u00dcberkontrolle zu \u00fcbernehmen.",
            },
            {
              label: "Integrationssatz",
              text: "Ich handle integer und klar, ohne mich selbst zu verurteilen. Ich darf richtig handeln und zugleich weich, lebendig und menschlich bleiben.",
            },
            {
              label: "Bewusstseinsraum",
              text: "Bewusstsein entsteht, wenn die SE1 erkennt, dass wahre Integrit\u00e4t nicht aus Strenge, sondern aus Pr\u00e4senz, Wahrhaftigkeit und innerer Ruhe kommt.",
            },
            {
              label: "Ausstrahlung",
              text: "Ruhige Pr\u00e4senz, klare Werte, verl\u00e4ssliche W\u00e4rme, sorgf\u00e4ltige Verantwortung und eine nat\u00fcrliche W\u00fcrde, die andere nicht korrigieren muss.",
            },
            {
              label: "Archetypische Natur",
              text: "Der Adler steht f\u00fcr Weitblick und Integrit\u00e4t. In der Integration wird sein Blick nicht nur pr\u00fcfend, sondern \u00fcbersichtlich, weise und sch\u00fctzend.",
            },
            {
              label: "Integration bedeutet",
              text: "Vom Korrigieren zum Erkennen, vom inneren Druck zur Ruhe, vom Perfektionismus zur Menschlichkeit und von Kontrolle zu vertrauensvoller Ordnung.",
            },
          ],
        },
      ],
      woundBehindPassion: {
        passion: "Groll \u2013 eine verhaltene, nach innen gerichtete Anspannung, die entsteht, wenn die Wirklichkeit nicht dem inneren Ideal entspricht.",
        belief: "\u201eDie Welt sollte besser sein \u2013 und ich bin daf\u00fcr verantwortlich.\u201c Darunter: \u201eWenn ich nicht alles kontrolliere, geht es schief.\u201c",
        wound: "Die Wunde der Unvollkommenheit: das tiefe Gef\u00fchl, dass die Wirklichkeit niemals ganz dem inneren Ideal entsprechen kann.",
        compensation: "Ordnung schaffen, korrigieren, verbessern und kontrollieren. Die Energie richtet sich auf das Beseitigen von M\u00e4ngeln. Dabei entsteht eine innere Daueranspannung.",
        sufferingCycle: "Der Einser versucht, durch Verbesserung Frieden zu finden. Doch kaum ist ein Mangel behoben, erscheint der n\u00e4chste. Die Unvollkommenheit best\u00e4tigt sich immer wieder, die Anspannung w\u00e4chst, der Druck zur Verbesserung nimmt zu. Und der Kreislauf beginnt erneut.",
        healingDirection: "Den inneren Richter still werden lassen und entdecken, dass das eigene Menschsein \u2013 mit all seinen Fehlern \u2013 nicht das Problem ist. Frieden entsteht nicht am Ende aller Verbesserungen, sondern mitten im unvollkommenen Leben.",
        remedy: "Wundenmittel: Arsenicum album \u00b7 Leidenschaftsmittel: Platinum metallicum \u00b7 Sch\u00fc\u00dfler-Salz: Kalium chloratum \u00b7 Bach-Bl\u00fcte: Rock Water. Anwendung nur in therapeutischer R\u00fccksprache.",
        needsReview: [
          "\u201eHinter der Leidenschaft \u2013 die neun Wunden des Enneagramms\u201c, Kapitel Typ 1 (S. 30\u201357). Buchtext ist typ-bezogen; SE1-Nuancen aus Codex-JSON erg\u00e4nzt. Bitte gegen Originalseiten pr\u00fcfen.",
        ],
      },
      koerperarbeit: {
        seiten: [
          { src: "assets/knowledge/type-1/se1/se1-page-2.jpeg", alt: "SE1 Seite 2 \u2013 2-Punkte-Integration mit Handpositionen", titel: "Seite 2 \u00b7 2-Punkte-Integration" },
          { src: "assets/knowledge/type-1/se1/se1-page-3.jpeg", alt: "SE1 Seite 3 \u2013 6 K\u00f6rperzug\u00e4nge, Akupressur, Atemimpuls, Vollkommen still sitzen", titel: "Seite 3 \u00b7 K\u00f6rperarbeit & Akupressur" },
          { src: "assets/knowledge/type-1/se1/se1-page-5.jpeg", alt: "SE1 Seite 5 \u2013 Integrationspotenzial, neue F\u00e4higkeiten, Ausstrahlung", titel: "Seite 5 \u00b7 Integrationspotenzial" },
        ],
      },
      mediaGroups: type1MediaGroups("SE1", {
        deId: "XHB8xTxJtHY",
        enCode: "SP1",
        enId: "NWj3sLpqm1s",
        biblicalId: "dKofTwCmedc",
        affirmationsId: "1sieV4-Ah9I",
      }),
      needsReview: [],
    };


const se2 = {
      code: "SE2",
      title: "Die selbsterhaltende Zwei",
      animal: "Flusspferd",
      status: "curated_draft",
      pages: "Typ 2 Grundkarte + SE2 Seiten 1-5",
      organismQuestion: "Bin ich liebenswert, wenn ich f\u00fcr andere da bin?",
      subtypeQuestion:
        "Wie kann ich Geborgenheit und F\u00fcrsorge geben, ohne meine eigenen Bed\u00fcrfnisse zu \u00fcbergehen?",
      integrationSentence: "Ich bin eine Quelle der F\u00fcrsorge, die zuerst mich selbst n\u00e4hrt.",
      coreSentence:
        "Wenn du deine eigenen Bed\u00fcrfnisse ernst nimmst, entsteht N\u00e4he ohne Erwartung.",
      visualPages: type2VisualPages("SE2", "Selbsterhaltende Zwei"),
      sourceCoverage: type2SourceCoverage("SE2"),
      contentModules: type2ContentModules("SE2"),
      lifeTheme: [
        "N\u00e4he, Unterst\u00fctzung und emotionale Sicherheit suchen.",
        "Gebraucht werden wollen und dabei Bed\u00fcrfnisse anderer oft \u00fcber die eigenen stellen.",
        "Liebe und Verbundenheit w\u00fcnschen und dabei leicht eigene Grenzen verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Oberbauch / innerer Raum.",
      essence: {
        title: "Integrationspotenzial: Selbstf\u00fcrsorge & F\u00fclle",
        sentence: "Wahre F\u00fcrsorge beginnt bei dir, denn nur aus einem vollen Herzen kannst du wirklich geben.",
        qualities: ["warme Ausstrahlung", "nat\u00fcrliche Hilfsbereitschaft", "beruhigende Pr\u00e4senz", "loyale Verbundenheit", "Schutzinstinkt"],
      },
      integrationPath: [
        "Sich selbst wichtiger nehmen und die eigenen Grenzen ernst nehmen.",
        "Nicht st\u00e4ndig f\u00fcr andere da sein m\u00fcssen, um geliebt zu werden.",
        "Verbindung durch Selbstf\u00fcrsorge, Ehrlichkeit und inneres Gleichgewicht finden.",
      ],
      unconsciousStrategy: [
        "Bindung \u00fcber F\u00fcrsorge und Verf\u00fcgbarkeit absichern.",
        "Sich stark nach den Bed\u00fcrfnissen anderer richten und eigene W\u00fcnsche zur\u00fcckhalten.",
        "Sich \u00fcber N\u00e4he, Geben und emotionale Bedeutung stabilisieren, auch wenn Ersch\u00f6pfung entsteht.",
      ],
      turningPoint: [
        "Erkennen, dass st\u00e4ndiges K\u00fcmmern die eigenen Bed\u00fcrfnisse unsichtbar macht.",
        "Beginnen, sich selbst ernst zu nehmen und F\u00fcrsorge auch anzunehmen.",
        "Innere Geborgenheit entsteht aus Selbstkontakt statt aus Abh\u00e4ngigkeit.",
      ],
      integratedState: [
        "F\u00fcr andere sorgen, ohne sich selbst zu verlieren.",
        "Die eigenen Bed\u00fcrfnisse erkennen und Unterst\u00fctzung annehmen.",
        "N\u00e4he entsteht aus Selbstf\u00fcrsorge und innerer Geborgenheit.",
      ],
      tensionFields: [
        "Bed\u00fcrftigkeit \u2192 Selbstf\u00fcrsorge",
        "Abh\u00e4ngigkeit \u2192 Eigenst\u00e4ndigkeit",
        "Gebrauchtwerden \u2192 Selbstwert",
        "Anpassung \u2192 Ehrlichkeit",
        "N\u00e4hebed\u00fcrfnis \u2192 innere Geborgenheit",
        "Verf\u00fcgbarkeit \u2192 Abgrenzung",
        "K\u00fcmmern \u2192 Empfangen",
        "Kindlichkeit \u2192 Reife",
        "Erwartung \u2192 freie Zuwendung",
      ],
      archetypalEssence: "F\u00fcrsorge",
      integrativePotential: "Selbstf\u00fcrsorge & F\u00fclle",
      nervousSystemRegulation: [
        "Sicherheit im K\u00f6rper verankern",
        "Grenzen wahrnehmen und achten",
        "zwischen Geben und Nehmen balancieren",
        "\u00dcberverantwortung loslassen",
        "sich selbst versorgen",
        "Bed\u00fcrfnisse klar kommunizieren",
        "Erholung bewusst einplanen",
        "inneren Halt st\u00e4rken",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Wunsch, liebevoll und hilfsbereit zu sein, und der Angst, ausgenutzt, \u00fcbergangen oder nicht wertgesch\u00e4tzt zu werden.",
        gazeQuality: [
            "warm, weich und einladend",
            "pr\u00fcfend: Wer ist sicher f\u00fcr mich?",
            "leicht gierig, bed\u00fcrfnisorientiert",
            "sucht Resonanz und Dankbarkeit",
            "beobachtet, bevor sie oder er sich \u00f6ffnet",
          ],
        microTension: [
            "Stirn: leicht angespannt, sorgend",
            "Augen: vorsichtig, sammelnd",
            "Mund: weich, leicht unsicher",
            "Kiefer: entspannt, wenig Druck",
            "Haltung: weich, sch\u00fctzend, zur\u00fcckhaltend",
          ],
        breathingRhythm: [
            "eher flach im Brustbereich",
            "atmet mit, wenn N\u00e4he entsteht",
            "Atem stockt bei Unsicherheit",
            "reguliert \u00fcber Geben und R\u00fcckzug",
          ],
        movementInitiation: [
            "geht nicht sofort auf andere zu und wartet ab oder pr\u00fcft zuerst",
            "bewegt sich, wenn jemand Unterst\u00fctzung oder N\u00e4he zeigt",
            "handelt aus dem Bed\u00fcrfnis, gebraucht und verbindlich zu sein",
            "bewahrt Energie f\u00fcr Menschen, die ihr oder ihm wichtig sind",
          ],
        contactStyle: [
            "herzlich, warm, einladend",
            "gibt, um Beziehung und Sicherheit zu schaffen",
            "wahrt Dankbarkeit und gegenseitige Verbindlichkeit",
            "zieht sich zur\u00fcck, wenn die Balance nicht stimmt",
          ],
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Oberbauch / Innerer Raum", location: "oberhalb des Nabels", need: [
              "Selbstkontakt",
              "Ruhe",
              "eigene Grenze",
            ] },
          microInstructions: [
            "Nicht leisten.",
            "Bei dir bleiben.",
            "Empfangend werden.",
            "Nichts erwarten.",
            "Dich selbst sp\u00fcren.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Herz\u00f6ffnung, Geborgenheit, praktische Unterst\u00fctzung, Treue und W\u00e4rme.",
      },
      mediaGroups: [
        {
          title: "SE2 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 2", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 2", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 2", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 2 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 2", youtubeVideoId: "jptqNJU0mrw" },
          { title: "Typ 2 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 2", youtubeVideoId: "TSHh5uRJio0" },
          { title: "Type 2 \u00b7 English Theme Song", category: "Song 2", scope: "Type 2", youtubeVideoId: "F2QH_O1BAOE" },
          { title: "SE2 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SE2", youtubeVideoId: "Gxgr9xOtKaQ" },
          { title: "SE2 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SE2", youtubeVideoId: "OT19G0XQsak" },
          { title: "SE2 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SE2", youtubeVideoId: "QrKeNWPeBiU" },
          { title: "SE2 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SE2", youtubeVideoId: "V9Y9EIyfQSw" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Hyoscyamus niger",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-2/se2/heilmittel/se2-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus dem Schwarzen Bilsenkraut, einer Nachtschattenpflanze mit stark berauschender, das Verhalten enthemmender Wirkung. In ihrer Signatur liegt ein verzweifeltes Ringen um Aufmerksamkeit und Liebe: Eifersucht, das Bed\u00fcrfnis, gesehen zu werden, und die Angst, verlassen oder \u00fcbergangen zu werden. Genau das pr\u00e4gt das Mittelbild der Zwei \u2013 das starke Verlangen nach N\u00e4he, Anerkennung und Gebrauchtwerden. Das Bed\u00fcrfnis, geliebt zu werden, wird so gro\u00df, dass die eigene Mitte dar\u00fcber aus dem Blick ger\u00e4t.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als emotionale Abh\u00e4ngigkeit, Besitzanspruch und Angst vor Zur\u00fcckweisung zeigt. Es hilft, das anklammernde Werben um Zuwendung zu beruhigen und die Liebe wieder auf einen festen inneren Grund zu stellen. So darf N\u00e4he entstehen, ohne sich zu verlieren oder st\u00e4ndig um Best\u00e4tigung k\u00e4mpfen zu m\u00fcssen.",
        },
        {
          title: "Natrium chloratum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-2/se2/heilmittel/se2-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Fl\u00fcssigkeitshaushalt und L\u00f6sen von altem Kummer",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 8 reguliert den Fl\u00fcssigkeitshaushalt und ist das gro\u00dfe Salz des seelischen Gleichgewichts. Es ordnet, wo zu viel oder zu wenig flie\u00dft \u2013 im K\u00f6rper wie im Gef\u00fchl. Traditionell hilft es, alten Kummer, zur\u00fcckgehaltene Tr\u00e4nen und verschlucktes Leid zu l\u00f6sen. F\u00fcr die Zwei, die sich f\u00fcr andere aufgibt und eigene Bed\u00fcrfnisse \u00fcberh\u00f6rt, bringt es heilsamen Ausgleich. So unterst\u00fctzt es, wieder bei sich selbst aufzutanken, statt sich im Geben zu verlieren.",
          goal: "Auf der Mineralstoff-Ebene unterst\u00fctzt es, emotionale Distanz und Abkapselung aufzul\u00f6sen, damit echter Kontakt zu anderen und zu sich selbst m\u00f6glich wird.",
        },
        {
          title: "Chicory",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-2/se2/heilmittel/se2-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "selbstlose Liebe ohne Besitzanspruch",
          text: "Chicory ist die Bachbl\u00fcte f\u00fcr eine besitzergreifende, an Bedingungen gekn\u00fcpfte Form der Liebe. Sie hilft Menschen, die viel geben, dabei aber heimlich Dank, N\u00e4he und Gegenleistung erwarten. Die Bl\u00fcte wandelt anklammernde F\u00fcrsorge in echte, selbstlose Zuwendung. F\u00fcr die Zwei, die sich \u00fcber das Gebrauchtwerden definiert, ist sie eine tiefe Heilbl\u00fcte. So darf Liebe flie\u00dfen, ohne sich selbst zu verlieren oder etwas zur\u00fcckzufordern.",
          goal: "Auf der Seelenebene \u00f6ffnet es den Weg zu selbstloser F\u00fcrsorge: Liebe, die gibt, ohne Gegenliebe zu fordern \u2013 und die sich selbst dabei nicht verliert.",
        },
        {
          title: "Rosenquarz",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-2/se2/heilmittel/se2-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Herz\u00f6ffnung, Sanftheit und Selbstliebe",
          text: "Der Rosenquarz ist der zart-rosa Stein des Herzens schlechthin und seit jeher mit Liebe, Sanftheit und Vers\u00f6hnung verbunden. Er \u00f6ffnet das Herz f\u00fcr Mitgef\u00fchl, W\u00e4rme und Vergebung \u2013 und richtet diese liebevolle Haltung ausdr\u00fccklich auch nach innen, auf einen selbst. Traditionell hilft er, alten Kummer und Verletzungen sanft zu l\u00f6sen und wieder Vertrauen in N\u00e4he zu fassen. F\u00fcr die Zwei, deren Liebe fast immer nach au\u00dfen str\u00f6mt, ist er eine stille Erinnerung an die eigene Bed\u00fcrftigkeit. Er n\u00e4hrt die Selbstliebe und schenkt die Erlaubnis, auch selbst zu empfangen, ohne sich erst n\u00fctzlich machen zu m\u00fcssen.",
          goal: "Als energetisches Werkzeug \u00f6ffnet er das Herz f\u00fcr liebevolle Selbstannahme \u2013 F\u00fcrsorge, die aus dem Vollen kommt statt aus Bed\u00fcrftigkeit.",
        },
        {
          title: "Rosenbl\u00fctentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-2/se2/heilmittel/se2-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "herz\u00f6ffnend und harmonisierend",
          text: "Der Rosenbl\u00fctentee gilt als herz\u00f6ffnendes, harmonisierendes Getr\u00e4nk voller Sanftheit. Die Rose steht seit jeher f\u00fcr Liebe, Zartheit und seelische W\u00e4rme. Traditionell wird sie genutzt, um das Gem\u00fct zu bes\u00e4nftigen und das Herz zu erweichen. F\u00fcr die Zwei, deren Liebe stets nach au\u00dfen flie\u00dft, ist sie eine zarte Einladung zur Selbstf\u00fcrsorge. So erinnert ein Rosenbl\u00fctentee daran, die eigene W\u00e4rme auch sich selbst zu schenken.",
          goal: "Als pflanzliche Begleiterin \u00f6ffnet sie das Herz sanft: f\u00fcr sich selbst, f\u00fcr andere, f\u00fcr das Geben ohne Berechnung.",
        },
        {
          title: "Pulsatilla pratensis",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/pulsatilla-pratensis.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Die K\u00fcchenschelle oder Wiesen-Anemone ist eine zarte Pflanze, die sich weich mit dem Wind wiegt und sich stets dem Licht zuwendet. Diese Signatur zeigt ein sanftes, anschmiegsames, leicht weinerliches Wesen, das nach Trost, W\u00e4rme und Zuwendung verlangt. Das spiegelt die Wunde der Zwei: eine tiefe Sehnsucht nach Zugeh\u00f6rigkeit und die Angst, nur durch Gebrauchtwerden liebenswert zu sein. Wie die Bl\u00fcte dem Wind folgt, sucht die Seele Halt im Gegen\u00fcber.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anklammern, Verlassenheitsangst und das Verleugnen eigener Bed\u00fcrfnisse zeigt. Es n\u00e4hrt sanft die F\u00e4higkeit, sich selbst Trost und Halt zu geben, statt ihn nur im Au\u00dfen zu suchen. So darf aus bed\u00fcrftiger Anh\u00e4nglichkeit eine warme, freie Verbundenheit werden.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Hyoscyamus niger",
          schuessler: "Natrium chloratum",
          bachbluete: "Chicory",
          edelstein: "Rosenquarz",
          tee: "Rosenbl\u00fctentee",
        },
        homoeopathieThema: "Gewonnen aus dem Schwarzen Bilsenkraut, einer Nachtschattenpflanze mit stark berauschender, das Verhalten enthemmender Wirkung. In ihrer Signatur liegt ein verzweifeltes Ringen um Aufmerksamkeit und Liebe: Eifersucht, das Bed\u00fcrfnis, gesehen zu werden, und die Angst, verlassen oder \u00fcbergangen zu werden. Genau das pr\u00e4gt das Mittelbild der Zwei \u2013 das starke Verlangen nach N\u00e4he, Anerkennung und Gebrauchtwerden. Das Bed\u00fcrfnis, geliebt zu werden, wird so gro\u00df, dass die eigene Mitte dar\u00fcber aus dem Blick ger\u00e4t.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als emotionale Abh\u00e4ngigkeit, Besitzanspruch und Angst vor Zur\u00fcckweisung zeigt. Es hilft, das anklammernde Werben um Zuwendung zu beruhigen und die Liebe wieder auf einen festen inneren Grund zu stellen. So darf N\u00e4he entstehen, ohne sich zu verlieren oder st\u00e4ndig um Best\u00e4tigung k\u00e4mpfen zu m\u00fcssen.",
        wundeThema: "Die K\u00fcchenschelle oder Wiesen-Anemone ist eine zarte Pflanze, die sich weich mit dem Wind wiegt und sich stets dem Licht zuwendet. Diese Signatur zeigt ein sanftes, anschmiegsames, leicht weinerliches Wesen, das nach Trost, W\u00e4rme und Zuwendung verlangt. Das spiegelt die Wunde der Zwei: eine tiefe Sehnsucht nach Zugeh\u00f6rigkeit und die Angst, nur durch Gebrauchtwerden liebenswert zu sein. Wie die Bl\u00fcte dem Wind folgt, sucht die Seele Halt im Gegen\u00fcber.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anklammern, Verlassenheitsangst und das Verleugnen eigener Bed\u00fcrfnisse zeigt. Es n\u00e4hrt sanft die F\u00e4higkeit, sich selbst Trost und Halt zu geben, statt ihn nur im Au\u00dfen zu suchen. So darf aus bed\u00fcrftiger Anh\u00e4nglichkeit eine warme, freie Verbundenheit werden.",
        wunde: {
          homoeopathie: "Pulsatilla pratensis",
          schuessler: "Natrium chloratum",
          bachbluete: "Chicory",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 2). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      woundBehindPassion: {
        passion: "Stolz \u2013 nicht als \u00dcberheblichkeit, sondern als das Gef\u00fchl, sich durch Geben und Helfen unentbehrlich zu machen. Der Zweier definiert seinen Wert \u00fcber seine Bedeutung f\u00fcr andere und verdr\u00e4ngt dabei die eigene Bed\u00fcrftigkeit.",
        belief: "\u201eIch bin nur liebenswert, wenn ich f\u00fcr andere da bin.\u201c Darunter: \u201eEigene Bed\u00fcrfnisse sind eine Belastung f\u00fcr andere \u2013 und m\u00fcssen versteckt werden.\u201c",
        wound: "Die Wunde der verbotenen Bed\u00fcrftigkeit: das tiefe Gef\u00fchl, dass die eigenen Bed\u00fcrfnisse nicht z\u00e4hlen oder nicht erlaubt sind.",
        compensation: "F\u00fcrsorge, Unterst\u00fctzung und emotionale Verf\u00fcgbarkeit \u2013 immer f\u00fcr andere da sein, bevor die eigenen Bed\u00fcrfnisse sichtbar werden.",
        sufferingCycle: "Der Zweier gibt, unterst\u00fctzt und h\u00f6rt zu, und erwartet daf\u00fcr N\u00e4he und Anerkennung. Wenn diese ausbleibt, gibt er noch mehr \u2013 die eigenen Bed\u00fcrfnisse werden weiter verdr\u00e4ngt, die innere Ersch\u00f6pfung w\u00e4chst.",
        healingDirection: "Erkennen, dass auch eigene Bed\u00fcrfnisse Raum verdienen. N\u00e4he entsteht nicht allein durch Geben, sondern auch durch ehrliches Zeigen dessen, was man selbst braucht.",
        remedy: "Wundenmittel: Pulsatilla pratensis \u00b7 Leidenschaftsmittel: Hyoscyamus niger \u00b7 Sch\u00fc\u00dfler-Salz: Natrium chloratum \u00b7 Bach-Bl\u00fcte: Chicory. Anwendung nur in therapeutischer R\u00fccksprache.",
        needsReview: [
          "\u201eHinter der Leidenschaft \u2013 die neun Wunden des Enneagramms\u201c, Kapitel Typ 2 (S. 59\u201392). Buchtext ist typ-bezogen; SE2-Nuancen aus Codex-JSON erg\u00e4nzt. Bitte gegen Originalseiten pr\u00fcfen.",
        ],
      },
      needsReview: [
        "SE2 ist als erster Typ-2-Prototyp mit Typ-2-Grundkarte und Seiten 1-5 als Wissenskarten angelegt.",
      ],
    };


const se3 = {
      code: "SE3",
      title: "Die selbsterhaltende Drei",
      animal: "Waschb\u00e4r",
      status: "curated_draft",
      pages: "Typ 3 Grundkarte + SE3 Seiten 1-5",
      organismQuestion: "Wie kann ich erfolgreich sein und dabei meinen Wert beweisen?",
      subtypeQuestion:
        "Wie kann ich wirksam und verl\u00e4sslich sein, ohne meinen Wert \u00fcber Leistung und Funktionieren zu beweisen?",
      integrationSentence: "Ich passe mich an, ohne mich zu verlieren, und finde Halt in mir selbst.",
      coreSentence:
        "Wenn du aufh\u00f6rst, nur zu funktionieren, erscheint dein Wert ohne Leistung und Anpassung.",
      visualPages: type3VisualPages("SE3", "Selbsterhaltende Drei"),
      sourceCoverage: type3SourceCoverage("SE3"),
      contentModules: type3ContentModules("SE3"),
      lifeTheme: [
        "Sicherheit durch Leistung, Effizienz und Selbstst\u00e4ndigkeit suchen.",
        "Erfolgreich und wirksam sein wollen und dabei eigene Bed\u00fcrfnisse oft zur\u00fcckhalten.",
        "Sich an Funktionieren und Kontrolle orientieren und dabei Kontakt zum inneren Erleben verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und Herzraum / Brustmitte.",
      essence: {
        title: "Integrationspotenzial: Flexibilit\u00e4t & innere Stabilit\u00e4t",
        sentence: "Ich passe mich an, ohne mich zu verlieren, und finde Halt in mir selbst.",
        qualities: ["praktisch und l\u00f6sungsorientiert", "flexibel", "effizient", "verl\u00e4sslich", "gute Beobachtungsgabe"],
      },
      integrationPath: [
        "Sich nicht nur \u00fcber Leistung und Funktionieren definieren.",
        "Gef\u00fchle, Unsicherheit und echte Bed\u00fcrfnisse zeigen.",
        "Wert durch Echtheit, innere Pr\u00e4senz und lebendige Selbstwahrnehmung finden.",
      ],
      unconsciousStrategy: [
        "Sicherheit \u00fcber Leistung und Kontrolle gewinnen wollen.",
        "Gef\u00fchle und Bed\u00fcrfnisse zur\u00fcckhalten und sich stark auf Funktionieren ausrichten.",
        "Sich \u00fcber Effizienz, Erfolg und Selbstst\u00e4ndigkeit stabilisieren, auch wenn innerer Selbstkontakt verloren geht.",
      ],
      turningPoint: [
        "Erkennen, dass st\u00e4ndiges Funktionieren von echten Gef\u00fchlen entfernt.",
        "Sich unabh\u00e4ngig von Leistung wahrnehmen.",
        "Energie beruhigt sich, Authentizit\u00e4t wird wichtiger als Effizienz und Erfolg.",
      ],
      integratedState: [
        "Klar und wirksam handeln, ohne sich nur \u00fcber Leistung und Funktionieren zu definieren.",
        "Mit echten Gef\u00fchlen und Bed\u00fcrfnissen verbunden bleiben.",
        "Erfolg entsteht aus Authentizit\u00e4t statt aus Selbstoptimierung.",
      ],
      tensionFields: [
        "Effizienz \u2192 Echtheit",
        "Funktionieren \u2192 Selbstkontakt",
        "Leistung \u2192 Wertgef\u00fchl",
        "Kontrolle \u2192 Lebendigkeit",
        "Erfolg \u2192 innere Wahrheit",
        "Anpassung \u2192 Authentizit\u00e4t",
        "Zielstrebigkeit \u2192 Selbstf\u00fcrsorge",
        "Produktivit\u00e4t \u2192 Gegenw\u00e4rtigkeit",
        "\u00e4u\u00dfere Sicherheit \u2192 innerer Wert",
      ],
      archetypalEssence: "Anpassungsf\u00e4higkeit",
      integrativePotential: "Flexibilit\u00e4t & innere Stabilit\u00e4t",
      nervousSystemRegulation: [
        "Sicherheit durch Routine",
        "sich selbst wahrnehmen",
        "zwischen Aktivit\u00e4t und Ruhe balancieren",
        "Reiz\u00fcberflutung reduzieren",
        "Bed\u00fcrfnisse klar kommunizieren",
        "Erholung bewusst einplanen",
        "Grenzen sp\u00fcren und wahren",
        "inneren Halt st\u00e4rken",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Wunsch, wertvoll zu sein und etwas zu erreichen, und der Angst, nicht genug zu sein oder zu versagen und dadurch abgelehnt zu werden.",
        gazeQuality: [
            "wach, pr\u00fcfend und fokussiert",
            "pr\u00fcfend: Was bringt es? Was n\u00fctzt es?",
            "leicht distanziert, n\u00fcchtern",
            "sucht Wirkung und Vorteile",
            "beobachtet, bevor sie oder er handelt",
          ],
        microTension: [
            "Stirn: fokussiert, angespannt",
            "Augen: kontrollierend, durchdringend",
            "Mund: fest, zur\u00fcckhaltend",
            "Kiefer: leicht angespannt, zusammenziehend",
            "Haltung: aufrecht, pr\u00e4sent, leistungsbereit",
          ],
        breathingRhythm: [
            "eher flach im Brustbereich",
            "atmet schneller, wenn Ziele verfolgt werden",
            "Atem stockt bei Unsicherheit oder Kritik",
            "reguliert \u00fcber Erfolg und Best\u00e4tigung",
          ],
        movementInitiation: [
            "geht zielgerichtet und entschlossen",
            "handelt schnell, wenn es Vorteile bringt",
            "bewertet st\u00e4ndig M\u00f6glichkeiten und w\u00e4gt Nutzen ab",
            "orientiert sich an Ergebnissen und Erfolgsaussichten",
            "schafft Bewegung durch Strategie und Planung",
          ],
        contactStyle: [
            "direkt, charmant und angepasst",
            "spricht l\u00f6sungs- und nutzenorientiert",
            "zeigt Kompetenz und \u00dcberblick",
            "h\u00f6rt zu, um Informationen f\u00fcr sich zu nutzen",
            "kommuniziert \u00fcberzeugend und zielgerichtet",
          ],
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen",
              "Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          microInstructions: [
            "Nichts erreichen.",
            "Langsamer werden.",
            "Druck l\u00f6sen.",
            "Nicht funktionieren.",
            "Echtheit sp\u00fcren.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Kompetenz, Ziele, Wert schaffen, Anerkennung und Freude an Ergebnissen.",
      },
      mediaGroups: [
        {
          title: "SE3 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 3", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 3", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 3", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 3 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 3", youtubeVideoId: "U7WEq5E07Wk" },
          { title: "Typ 3 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 3", youtubeVideoId: "W6PZISZQCRY" },
          { title: "Type 3 \u00b7 English Theme Song", category: "Song 2", scope: "Type 3", youtubeVideoId: "NLlrJFYTRwU" },
          { title: "SE3 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SE3", youtubeVideoId: "CADA-IqRQWY" },
          { title: "SE3 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SE3", youtubeVideoId: "fY4bvwCPQoQ" },
          { title: "SE3 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SE3", youtubeVideoId: "2gklX1qArXw" },
          { title: "SE3 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SE3", youtubeVideoId: "r6hmh9wUjNs" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Tarentula hispanica",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-3/se3/heilmittel/se3-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus der spanischen Tarantel \u2013 einem ruhelosen Tier, dessen Biss der \u00dcberlieferung nach zu fiebrigem, getriebenem Tanzen zwingt. Diese Signatur durchzieht das Mittelbild: eine rastlose, hektische Betriebsamkeit, das Bed\u00fcrfnis zu beeindrucken, geschickte Wendigkeit und ein st\u00e4ndiges Unter-Strom-Stehen. Genau das pr\u00e4gt die Drei \u2013 der starke Antrieb nach Wirkung, Erfolg und Anerkennung. Wie die Tarantel kann sie kaum innehalten, immer in Bewegung, immer auf der B\u00fchne.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Leistungsdruck, Getriebenheit und blo\u00dfes Funktionieren zeigt. Es hilft, das innere Tempo zu drosseln und den Wert nicht l\u00e4nger an Wirkung und Applaus zu kn\u00fcpfen. So darf die Drei zur Ruhe kommen und sp\u00fcren, dass sie auch ohne st\u00e4ndiges Gl\u00e4nzen gen\u00fcgt.",
        },
        {
          title: "Ferrum phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-3/se3/heilmittel/se3-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Energie, Widerstandskraft und Initiative",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 3 ist das Salz der Energie, der Sauerstoffaufnahme und der ersten Abwehrkraft. Es st\u00e4rkt Widerstandskraft, Initiative und gesunde Tatkraft. Auf seelischer Ebene steht es f\u00fcr Mut und Belastbarkeit, ohne sich zu verausgaben. F\u00fcr die Drei, die sich \u00fcber Leistung definiert und Versagen f\u00fcrchtet, ist es ein kr\u00e4ftigender Begleiter. So unterst\u00fctzt es echte, getragene Energie statt rastloses Funktionieren unter Hochdruck.",
          goal: "Auf der Mineralstoff-Ebene st\u00e4rkt es den Antrieb und die Ausdauer, ohne in \u00dcberleistung und rastlose Aktivit\u00e4t zu kippen \u2013 Energie wird kanalisiert statt verbrannt.",
        },
        {
          title: "Vervain",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-3/se3/heilmittel/se3-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "gelassene Begeisterung statt \u00dcbereifer",
          text: "Vervain ist die Bachbl\u00fcte f\u00fcr \u00dcbereifer, Begeisterung bis zur Ersch\u00f6pfung und st\u00e4ndiges inneres Anspannen. Sie hilft Menschen, die mit voller Kraft f\u00fcr ihre Ziele brennen und kaum abschalten k\u00f6nnen. Die Bl\u00fcte mildert die \u00dcberspannung und bringt Gelassenheit in den Einsatz. F\u00fcr die Drei, die unter Hochdruck funktioniert und Stillstand f\u00fcrchtet, ist sie eine wohltuende Entlastung. So darf Begeisterung bleiben, aber ruhiger und ma\u00dfvoller flie\u00dfen.",
          goal: "Auf der Seelenebene hilft es, die innere Flamme zu m\u00e4\u00dfigen: \u00dcberzeugungen d\u00fcrfen stark sein, ohne andere zu \u00fcberrennen \u2013 Inspiration statt Druck.",
        },
        {
          title: "Tigerauge",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-3/se3/heilmittel/se3-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Selbstvertrauen, Mut und Klarheit unter Druck",
          text: "Das Tigerauge ist ein goldbraun schimmernder Quarz mit seidigem Lichtspiel und gilt als Stein des Mutes, der Erdung und der klaren Sicht. Es st\u00e4rkt Selbstvertrauen und Willenskraft und hilft, auch unter Druck Ruhe, \u00dcberblick und Standfestigkeit zu bewahren. Traditionell wird es als Schutzstein getragen, der Nervosit\u00e4t, Selbstzweifel und Stress mindert. F\u00fcr die Drei, deren Wert sich an Leistung und Erfolg zu bemessen scheint, lenkt es den Blick nach innen. So wird erfahrbar, dass echter Wert aus innerer Festigkeit und Klarheit erw\u00e4chst \u2013 nicht allein aus dem n\u00e4chsten Ziel.",
          goal: "Als energetisches Werkzeug verbindet er Zielstrebigkeit mit innerer Ruhe \u2013 Erfolg darf entstehen, ohne dass das Selbst dahinter verschwindet.",
        },
        {
          title: "Rosmarintee",
          subtitle: "Tee",
          image: "assets/knowledge/type-3/se3/heilmittel/se3-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "belebend und kr\u00e4ftigend",
          text: "Rosmarin ist ein belebendes, kr\u00e4ftigendes Kraut, das Kreislauf und Geist anregt. Sein w\u00fcrziger Duft weckt, f\u00f6rdert die Konzentration und gibt frische Tatkraft. Traditionell wird er bei M\u00fcdigkeit, Ersch\u00f6pfung und Antriebsschw\u00e4che eingesetzt. F\u00fcr die Drei, die unter Hochdruck l\u00e4uft und sich leicht verausgabt, gibt er klare, getragene Energie. So unterst\u00fctzt ein Rosmarintee belebende Kraft, die aus Frische statt aus Druck kommt.",
          goal: "Als pflanzliche Begleiterin bringt sie Klarheit und Energie in Situationen, wo Kontratyp-Ersch\u00f6pfung und Verschmelzung den eigenen Wunsch verschleiern.",
        },
        {
          title: "Lycopodium clavatum",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/lycopodium-clavatum.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus den Sporen des B\u00e4rlapps \u2013 einer unscheinbaren Pflanze, deren Sporen erst unter Reibung ihre verborgene Kraft entfalten. Diese Signatur trifft den Kern: ein nach au\u00dfen souver\u00e4nes Auftreten, das innen einen tiefen Mangel an Selbstvertrauen und gro\u00dfe Versagensangst verbirgt. Das spiegelt die Wunde der Drei \u2013 die \u00dcberzeugung, nur durch Leistung wertvoll zu sein, w\u00e4hrend verdeckt der Selbstzweifel nagt. Hinter der starken Fassade liegt die Angst, entlarvt zu werden.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Leistungsdruck, verborgene Unsicherheit und die Angst vor dem Versagen zeigt. Es st\u00e4rkt ein echtes Selbstvertrauen, das nicht mehr auf Beweise angewiesen ist. So darf der Wert von innen wachsen, unabh\u00e4ngig von Erfolg und fremdem Urteil.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Tarentula hispanica",
          schuessler: "Ferrum phosphoricum",
          bachbluete: "Vervain",
          edelstein: "Tigerauge",
          tee: "Rosmarintee",
        },
        homoeopathieThema: "Gewonnen aus der spanischen Tarantel \u2013 einem ruhelosen Tier, dessen Biss der \u00dcberlieferung nach zu fiebrigem, getriebenem Tanzen zwingt. Diese Signatur durchzieht das Mittelbild: eine rastlose, hektische Betriebsamkeit, das Bed\u00fcrfnis zu beeindrucken, geschickte Wendigkeit und ein st\u00e4ndiges Unter-Strom-Stehen. Genau das pr\u00e4gt die Drei \u2013 der starke Antrieb nach Wirkung, Erfolg und Anerkennung. Wie die Tarantel kann sie kaum innehalten, immer in Bewegung, immer auf der B\u00fchne.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Leistungsdruck, Getriebenheit und blo\u00dfes Funktionieren zeigt. Es hilft, das innere Tempo zu drosseln und den Wert nicht l\u00e4nger an Wirkung und Applaus zu kn\u00fcpfen. So darf die Drei zur Ruhe kommen und sp\u00fcren, dass sie auch ohne st\u00e4ndiges Gl\u00e4nzen gen\u00fcgt.",
        wundeThema: "Bereitet aus den Sporen des B\u00e4rlapps \u2013 einer unscheinbaren Pflanze, deren Sporen erst unter Reibung ihre verborgene Kraft entfalten. Diese Signatur trifft den Kern: ein nach au\u00dfen souver\u00e4nes Auftreten, das innen einen tiefen Mangel an Selbstvertrauen und gro\u00dfe Versagensangst verbirgt. Das spiegelt die Wunde der Drei \u2013 die \u00dcberzeugung, nur durch Leistung wertvoll zu sein, w\u00e4hrend verdeckt der Selbstzweifel nagt. Hinter der starken Fassade liegt die Angst, entlarvt zu werden.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Leistungsdruck, verborgene Unsicherheit und die Angst vor dem Versagen zeigt. Es st\u00e4rkt ein echtes Selbstvertrauen, das nicht mehr auf Beweise angewiesen ist. So darf der Wert von innen wachsen, unabh\u00e4ngig von Erfolg und fremdem Urteil.",
        wunde: {
          homoeopathie: "Lycopodium clavatum",
          schuessler: "Ferrum phosphoricum",
          bachbluete: "Walnut",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 3). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      woundBehindPassion: {
        passion: "T\u00e4uschung \u2013 nicht unbedingt bewusste L\u00fcge, sondern das Angleichen des eigenen Selbstbildes an das, was Erfolg und Anerkennung bringt.",
        belief: "\u201eMein Wert h\u00e4ngt von meiner Leistung ab.\u201c Darunter: \u201eWer ich wirklich bin, reicht nicht aus \u2013 ich muss zeigen, was ich kann.\u201c",
        wound: "Die Wunde der Wertlosigkeit: das tiefe Gef\u00fchl, dass das eigene Sein ohne Leistung, Erfolg oder Anerkennung nicht genug ist.",
        compensation: "Leisten, optimieren, sich anpassen und sichtbar werden \u2013 der Dreier orientiert sich an dem, was Anerkennung bringt. Das Bild nach au\u00dfen tritt in den Vordergrund, das innere Erleben zur\u00fcck.",
        sufferingCycle: "Der Dreier leistet und erreicht Anerkennung \u2013 doch die Frage \u201eReicht es schon?\u201c verstummt nicht. Kurze Befriedigung weicht schnell dem n\u00e4chsten Ziel.",
        healingDirection: "Entdecken, dass das eigene Sein \u2013 jenseits von Leistung und Erfolg \u2013 wertvoll ist. Ankunft geschieht nicht nach dem n\u00e4chsten Ziel, sondern im Jetzt.",
        remedy: "Wundenmittel: Lycopodium clavatum \u00b7 Leidenschaftsmittel: Tarentula hispanica \u00b7 Sch\u00fc\u00dfler-Salz: Ferrum phosphoricum \u00b7 Bach-Bl\u00fcte: Walnut. Anwendung nur in therapeutischer R\u00fccksprache.",
        needsReview: [
          "\u201eHinter der Leidenschaft \u2013 die neun Wunden des Enneagramms\u201c, Kapitel Typ 3 (S. 93\u2013117). Buchtext ist typ-bezogen; SE3-Nuancen aus Codex-JSON erg\u00e4nzt. Bitte gegen Originalseiten pr\u00fcfen.",
        ],
      },
      needsReview: [
        "Typ-3-Tafeln sind sichtbar verortet; SE3 ist als mehrsprachig vorbereiteter Wissensblock angelegt.",
      ],
    };


const se4 = {
      code: "SE4",
      title: "Die selbsterhaltende Vier",
      animal: "Taube",
      status: "curated_draft",
      pages: "Typ 4 Grundkarte + SE4 Seiten 1-5",
      organismQuestion: "Wer bin ich wirklich und was macht mich einzigartig?",
      subtypeQuestion:
        "Wie kann ich meine Tiefe und Verletzlichkeit tragen, ohne mich \u00fcber Schmerz oder Mangel zu definieren?",
      integrationSentence: "Frieden entsteht, wenn du aufh\u00f6rst, dich selbst zu verleugnen.",
      coreSentence:
        "Wenn du Schmerz nicht still beweisen musst, entsteht w\u00fcrdevolle Lebendigkeit und innere Kraft.",
      visualPages: type4VisualPages("SE4", "Selbsterhaltende Vier"),
      lifeTheme: [
        "Tiefe, Echtheit und inneren Halt in dir selbst suchen.",
        "Mangel und Sehnsucht intensiv sp\u00fcren und still mit dir allein tragen.",
        "Stark bleiben wollen trotz Verletzlichkeit und dabei leicht Leichtigkeit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Unterbauch / Beckenbereich.",
      essence: {
        title: "Integrationspotenzial: Authentizit\u00e4t & Innerer Frieden",
        sentence: "Frieden entsteht, wenn du aufh\u00f6rst, dich selbst zu verleugnen.",
        qualities: ["tiefer innerer R\u00fcckzug", "reiche Gef\u00fchlswelt", "authentischer Ausdruck", "starke Intuition", "verbunden mit dem Wesentlichen"],
      },
      integrationPath: [
        "Dich zeigen, ohne dich hinter Schmerz oder R\u00fcckzug zu sch\u00fctzen.",
        "Nicht alles allein tragen m\u00fcssen, um stark oder echt zu sein.",
        "Halt durch Selbstannahme, Verbundenheit und innere Lebendigkeit finden.",
      ],
      unconsciousStrategy: [
        "Schmerz und Entt\u00e4uschung innerlich festhalten.",
        "Sich zur\u00fcckziehen, wenn Verletzung oder Missverstehen auftaucht.",
        "Sich \u00fcber R\u00fcckzug, Selbstkontrolle und emotionale Tiefe stabilisieren, auch wenn N\u00e4he verloren geht.",
      ],
      turningPoint: [
        "Erkennen, dass stilles Leiden und R\u00fcckzug innere Schwere verst\u00e4rken.",
        "Unterst\u00fctzung annehmen und sich emotional \u00f6ffnen.",
        "Selbstannahme ersetzt inneren Mangel und H\u00e4rte gegen sich selbst.",
      ],
      integratedState: [
        "Mit Gef\u00fchlen verbunden bleiben, ohne sich in Schmerz und R\u00fcckzug zu verlieren.",
        "Unterst\u00fctzung, W\u00e4rme und echte N\u00e4he erlauben.",
        "Energie wird weicher und lebendiger.",
      ],
      tensionFields: [
        "Durchhalten \u2192 Selbstannahme",
        "stilles Leiden \u2192 innere Entlastung",
        "Mangelgef\u00fchl \u2192 innere F\u00fclle",
        "R\u00fcckzug \u2192 Verbindung",
        "Schmerzbindung \u2192 Lebendigkeit",
        "H\u00e4rte gegen sich selbst \u2192 Selbstmitgef\u00fchl",
        "Sehnsucht \u2192 Gegenw\u00e4rtigkeit",
        "Selbstverzicht \u2192 W\u00fcrde",
        "emotionales Aushalten \u2192 heilsames Empfangen",
      ],
      archetypalEssence: "Authentizit\u00e4t",
      integrativePotential: "Authentizit\u00e4t & Innerer Frieden",
      nervousSystemRegulation: [
        "R\u00fcckzug bewusst gestalten",
        "kreativen Ausdruck pflegen",
        "zwischen N\u00e4he und Alleinsein balancieren",
        "Perfektionismus und Selbstkritik l\u00f6sen",
        "Gef\u00fchle flie\u00dfen lassen",
        "sich selbst annehmen",
        "Dauersehnsucht entspannen",
        "im K\u00f6rper ankommen",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Wunsch, authentisch und bedeutungsvoll zu sein, und der Angst, unverstanden oder zu viel zu sein.",
        gazeQuality: [
            "tief, suchend und introspektiv",
            "pr\u00fcfend: Was ber\u00fchrt es? Was bedeutet es?",
            "leicht vertr\u00e4umt, abwesend wirkend",
            "sensibel f\u00fcr Nuancen und Stimmungen",
            "beobachtet innerlich, bevor sie oder er handelt",
          ],
        microTension: [
            "Stirn: leicht angespannt, in Gedanken",
            "Augen: weich, feinf\u00fchlig, aufmerksam",
            "Mund: entspannt, leicht ernst",
            "Kiefer: locker, nicht angespannt",
            "Haltung: zur\u00fcckhaltend, geschlossen",
          ],
        breathingRhythm: [
            "eher flach im Brustbereich",
            "atmet seufzend oder unregelm\u00e4\u00dfig",
            "Atem stockt bei \u00dcberforderung",
            "reguliert \u00fcber R\u00fcckzug und Kreativit\u00e4t",
          ],
        movementInitiation: [
            "bewegt sich z\u00f6gerlich und beobachtend",
            "handelt, wenn es sich stimmig anf\u00fchlt",
            "bevorzugt R\u00fcckzug und Reflexion",
            "nutzt Zeit allein f\u00fcr Kreativit\u00e4t",
            "handelt intuitiv und situationsabh\u00e4ngig",
            "schafft Raum durch Grenzen und inneren R\u00fcckzug",
          ],
        contactStyle: [
            "tiefgr\u00fcndig, authentisch und ehrlich",
            "spricht \u00fcber Gef\u00fchle und Bedeutung",
            "zeigt Verst\u00e4ndnis und Mitgef\u00fchl",
            "h\u00f6rt zu, um wirklich zu verstehen",
            "teilt sich mit, wenn Vertrauen da ist",
            "kommuniziert poetisch und bildhaft",
          ],
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Unterbauch / Beckenbereich", location: "unterhalb des Nabels", need: [
              "Sicherheit",
              "Schutz",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nicht vertiefen.",
            "Schmerz halten.",
            "Ruhig atmen.",
            "Hier bleiben.",
            "Weich werden.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Authentizit\u00e4t, Selbstakzeptanz, Kreativit\u00e4t, Tiefe und Mitgef\u00fchl.",
      },
      contentModules: [
        {
          title: "Typ 4 \u00b7 Grundkarte",
          intro: "Die Typ-4-Grundkarte bildet die gemeinsame Grundlage aller Vierer-Subtypen. Im Zentrum steht die Sehnsucht nach Echtheit, Tiefe und einer unverwechselbaren Identit\u00e4t. Der K\u00f6rper organisiert sich auf Gef\u00fchl, Bedeutung und das, was ber\u00fchrt.",
          entries: [
            { label: "Grundthema", text: "Einzigartigkeit & Tiefe. Typ 4 richtet Aufmerksamkeit auf Authentizit\u00e4t, Gef\u00fchlstiefe und die Frage nach der eigenen, unverwechselbaren Identit\u00e4t." },
            { label: "Organismusfrage", text: "Wer bin ich wirklich und was macht mich einzigartig?" },
            { label: "Innerer Konflikt", text: "Sehnsucht und Mangel stehen gegeneinander: das Gef\u00fchl, etwas Wesentliches zu vermissen, gegen\u00fcber dem Wunsch, ganz und echt zu sein." },
            { label: "K\u00f6rperorganisation", text: "Nach innen gewandt, fein gestimmt und emotional durchl\u00e4ssig. Brust und Herzraum aktiv, die Energie pendelt zwischen R\u00fcckzug und intensivem Ausdruck." },
            { label: "Blickqualit\u00e4t", text: "Tief, suchend und introspektiv. Der Blick fragt nach dem, was ber\u00fchrt und bedeutet, und sucht das Echte hinter der Oberfl\u00e4che." },
            { label: "Mikrospannung", text: "Feine Spannung um Augen und Mund, melancholischer Grundton, innere Bewegtheit, die sich in der Mimik spiegelt." },
            { label: "Atemrhythmus", text: "Ungleichm\u00e4\u00dfig und gef\u00fchlsgebunden. Vertieft sich bei Ber\u00fchrung, stockt bei Verletzung oder Sehnsucht." },
            { label: "Bewegungsinitiierung", text: "Stimmungsabh\u00e4ngig und ausdrucksstark. Bewegt sich aus dem Gef\u00fchl heraus, zieht sich bei \u00dcberforderung zur\u00fcck." },
            { label: "Kontaktstil", text: "Tief, pers\u00f6nlich und wahrhaftig. Sucht echte Begegnung und Verst\u00e4ndnis, reagiert empfindlich auf Oberfl\u00e4chlichkeit." },
            { label: "Spannungsverteilung", text: "Hauptspannung im Herzraum und um die Augen. Nebenaktivit\u00e4t in Kehle und Solarplexus." },
            { label: "Integrationsweg", text: "Vom Mangel zur F\u00fclle. Von der Sehnsucht zur Gegenwart. Selbstannahme statt st\u00e4ndiger Suche nach dem Fehlenden." },
            { label: "Archetypisches Tier", text: "Schwan: Anmut, Sch\u00f6nheit, Tiefe, Sensibilit\u00e4t, W\u00fcrde und Transformation." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SE4 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 4", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 4", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 4", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 4 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 4", youtubeVideoId: "Qa76bXczQGI" },
          { title: "Typ 4 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 4", youtubeVideoId: "Y-ScnvbdFFQ" },
          { title: "Type 4 \u00b7 English Theme Song", category: "Song 2", scope: "Type 4", youtubeVideoId: "VK3YTCdZc10" },
          { title: "SE4 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SE4", youtubeVideoId: "Q14Rd2iCgzk" },
          { title: "SE4 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SE4", youtubeVideoId: "E6xQTADTtAo" },
          { title: "SE4 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SE4", youtubeVideoId: "yI-zk3aHGBQ" },
          { title: "SE4 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SE4", youtubeVideoId: "eiBXCiWsOSA" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Ignatia amara",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-4/se4/heilmittel/se4-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus der Bohne des Ignatiusbaums \u2013 einem Samen mit paradoxer, widerspr\u00fcchlicher Wirkung, der seit jeher mit Kummer und entt\u00e4uschter Liebe verbunden ist. Diese Signatur pr\u00e4gt das Mittelbild: feine Empfindsamkeit, wechselnde, gegens\u00e4tzliche Stimmungen, Seufzen und ein Hang zur Idealisierung. Genau das lebt in der Vier \u2013 das Bed\u00fcrfnis, sich selbst treu zu sein und verstanden zu werden, getragen von tiefer Sehnsucht nach Authentizit\u00e4t und Bedeutung. Das Gef\u00fchl schwingt zwischen H\u00f6hen und Tiefen, immer auf der Suche nach dem Echten.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich emotionale Intensit\u00e4t, innerer R\u00fcckzug und tiefe Sehnsucht zeigen. Es hilft, das Auf und Ab der Gef\u00fchle zu mildern, ohne die Tiefe zu verlieren. So darf die Vier in ihrer Empfindsamkeit ruhen, statt sich in ihr zu verlieren.",
        },
        {
          title: "Kalium phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-4/se4/heilmittel/se4-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Nervenkraft bei Ersch\u00f6pfung, seelische St\u00e4rke",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 5 ist das gro\u00dfe Nerven- und Energiesalz. Es st\u00e4rkt bei seelischer und k\u00f6rperlicher Ersch\u00f6pfung, n\u00e4hrt die Nervenkraft und gibt innere Festigkeit. Traditionell hilft es bei Niedergeschlagenheit, Gr\u00fcbeln und Antriebsschw\u00e4che. F\u00fcr die Vier, die sich in Sehnsucht, Schwermut und dem Gef\u00fchl des Andersseins verlieren kann, schenkt es Stabilit\u00e4t. So unterst\u00fctzt es einen ruhigen, getragenen Boden unter wechselnden Gef\u00fchlen.",
          goal: "Auf der Mineralstoff-Ebene wirkt es ausgleichend auf das Nervensystem, wenn innerer Schmerz, Ersch\u00f6pfung und emotionale \u00dcberflutung die Lebendigkeit d\u00e4mpfen.",
        },
        {
          title: "Sweet Chestnut",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-4/se4/heilmittel/se4-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Hoffnung und Halt in tiefer Not",
          text: "Sweet Chestnut ist die Bachbl\u00fcte f\u00fcr tiefste seelische Not und das Gef\u00fchl \u00e4u\u00dferster Verlassenheit. Sie ist f\u00fcr Momente, in denen alles dunkel und ausweglos erscheint. Die Bl\u00fcte bringt Hoffnung und das Vertrauen, dass auch im tiefsten Tal ein Licht entsteht. F\u00fcr die Vier, die sich in Schwermut und dem Gef\u00fchl des Nicht-Dazugeh\u00f6rens verlieren kann, ist sie ein Trost. So darf aus tiefer Verzweiflung wieder Halt und Zuversicht erwachsen.",
          goal: "Auf der Seelenebene \u00f6ffnet es in der dunkelsten Stunde einen neuen Weg: aus dem Tunnel des Schmerzes zur\u00fcck ins Leben, ins Erleben, ins F\u00fchlen.",
        },
        {
          title: "Rhodonit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-4/se4/heilmittel/se4-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Heilung emotionaler Wunden und Selbstwert",
          text: "Der Rhodonit ist ein rosa-schwarz gemaserter Stein und gilt als gro\u00dfer Helfer bei seelischen Verletzungen. Das Rosa steht f\u00fcr Liebe und Selbstwert, die schwarzen Einschl\u00fcsse f\u00fcr die F\u00e4higkeit, auch dunkle Gef\u00fchle zu halten und zu wandeln. Er bes\u00e4nftigt alte emotionale Wunden, harmonisiert Stimmungsschwankungen und gibt in inneren St\u00fcrmen Halt. F\u00fcr die Vier, die sich oft anders, fremd und nicht zugeh\u00f6rig f\u00fchlt, ist er ein erdender Anker. So f\u00fchrt er aus Schmerz und Sehnsucht in eine ruhige, liebevolle Annahme des eigenen Wertes und der eigenen Geschichte.",
          goal: "Als energetisches Werkzeug h\u00e4lt er den Raum f\u00fcr Wunden und Sch\u00f6nheit gleichzeitig \u2013 der Schmerz des Einzigartigen darf sich in Mitgef\u00fchl wandeln.",
        },
        {
          title: "Weidenr\u00f6schentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-4/se4/heilmittel/se4-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "bes\u00e4nftigend und ausgleichend",
          text: "Das Weidenr\u00f6schen ist ein mildes, ausgleichendes Kraut mit bes\u00e4nftigender Wirkung auf das Gem\u00fct. Es gilt als sanfter Begleiter in Phasen innerer Unruhe und seelischer Wechselb\u00e4der. Traditionell wird es zur Beruhigung und Harmonisierung getrunken. F\u00fcr die Vier, die starke Gef\u00fchle und Sehnsucht durchlebt, schenkt es einen ruhigen Boden. So hilft ein Weidenr\u00f6schentee, in den Wogen der Gef\u00fchle einen stillen Ausgleich zu finden.",
          goal: "Als pflanzliche Begleiterin weitet sie den inneren Raum \u2013 aus Zerstreuung und Vermeidung in sanfte, erdende Gegenw\u00e4rtigkeit.",
        },
        {
          title: "Ignatia amara",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/ignatia-amara.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Auch auf der Wunden-Ebene wirkt die Ignatiusbohne \u2013 das gro\u00dfe hom\u00f6opathische Mittel f\u00fcr nicht verarbeitete Trauer. Seine Signatur ist der konservierte Schmerz: ein Verlust, der innerlich festgehalten und nie ganz losgelassen wurde, mit verschluckten Tr\u00e4nen und stillem Kummer. Das ist die Wunde der Trennung der Vier \u2013 die Erfahrung eines Schmerzes, der nicht vollst\u00e4ndig ausgedr\u00fcckt werden konnte. Die Seele bewahrt das Verlorene, statt es zu betrauern und ziehen zu lassen.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als zur\u00fcckgehaltene Trauer, innere Sehnsucht und konservierter Schmerz zeigt. Es hilft, festgehaltenen Kummer behutsam zu l\u00f6sen und Gef\u00fchltes wirklich abflie\u00dfen zu lassen. So darf aus bewahrtem Schmerz eine vers\u00f6hnte, lebendige Tiefe werden.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Ignatia amara",
          schuessler: "Kalium phosphoricum",
          bachbluete: "Sweet Chestnut",
          edelstein: "Rhodonit",
          tee: "Weidenr\u00f6schentee",
        },
        homoeopathieThema: "Gewonnen aus der Bohne des Ignatiusbaums \u2013 einem Samen mit paradoxer, widerspr\u00fcchlicher Wirkung, der seit jeher mit Kummer und entt\u00e4uschter Liebe verbunden ist. Diese Signatur pr\u00e4gt das Mittelbild: feine Empfindsamkeit, wechselnde, gegens\u00e4tzliche Stimmungen, Seufzen und ein Hang zur Idealisierung. Genau das lebt in der Vier \u2013 das Bed\u00fcrfnis, sich selbst treu zu sein und verstanden zu werden, getragen von tiefer Sehnsucht nach Authentizit\u00e4t und Bedeutung. Das Gef\u00fchl schwingt zwischen H\u00f6hen und Tiefen, immer auf der Suche nach dem Echten.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich emotionale Intensit\u00e4t, innerer R\u00fcckzug und tiefe Sehnsucht zeigen. Es hilft, das Auf und Ab der Gef\u00fchle zu mildern, ohne die Tiefe zu verlieren. So darf die Vier in ihrer Empfindsamkeit ruhen, statt sich in ihr zu verlieren.",
        wundeThema: "Auch auf der Wunden-Ebene wirkt die Ignatiusbohne \u2013 das gro\u00dfe hom\u00f6opathische Mittel f\u00fcr nicht verarbeitete Trauer. Seine Signatur ist der konservierte Schmerz: ein Verlust, der innerlich festgehalten und nie ganz losgelassen wurde, mit verschluckten Tr\u00e4nen und stillem Kummer. Das ist die Wunde der Trennung der Vier \u2013 die Erfahrung eines Schmerzes, der nicht vollst\u00e4ndig ausgedr\u00fcckt werden konnte. Die Seele bewahrt das Verlorene, statt es zu betrauern und ziehen zu lassen.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als zur\u00fcckgehaltene Trauer, innere Sehnsucht und konservierter Schmerz zeigt. Es hilft, festgehaltenen Kummer behutsam zu l\u00f6sen und Gef\u00fchltes wirklich abflie\u00dfen zu lassen. So darf aus bewahrtem Schmerz eine vers\u00f6hnte, lebendige Tiefe werden.",
        wunde: {
          homoeopathie: "Ignatia amara",
          schuessler: "Kalium phosphoricum",
          bachbluete: "Willow",
        },
      },
      woundBehindPassion: {
        passion: "Neid \u2013 nicht als Missgunst, sondern als das schmerzhafte Gef\u00fchl, dass anderen etwas zukommt, das einem selbst fehlt. Bei der SE4 wird dieser Neid nach innen getragen: als stille, stoische Z\u00e4higkeit, die Schmerz und Sehnsucht aush\u00e4lt, ohne sie nach au\u00dfen zu zeigen.",
        belief: "\u201eIch muss aushalten, was mir fehlt, ohne zu klagen.\u201c Darunter: \u201eWenn ich meinen Mangel zeige, werde ich noch weniger geliebt.\u201c",
        wound: "Die Wunde der Trennung: das tiefe Gef\u00fchl, von etwas Wesentlichem abgetrennt zu sein \u2013 von sich selbst, von anderen oder vom Leben. Bei der SE4 wird dieser Schmerz still und z\u00e4h getragen statt dramatisch ausgedr\u00fcckt.",
        compensation: "Durchhalten, sich zusammenrei\u00dfen, den Mangel innerlich ertragen. Statt die Sehnsucht auszuleben, wird sie diszipliniert ausgehalten \u2013 die H\u00e4rte gegen sich selbst wird zur stillen Identit\u00e4t.",
        sufferingCycle: "Die SE4 h\u00e4lt den Mangel still aus und zeigt ihn nicht. Dadurch bleibt sie unverstanden, was das Gef\u00fchl des Getrenntseins verst\u00e4rkt. Das Aushalten sch\u00fctzt vor Zur\u00fcckweisung, verhindert aber echte N\u00e4he.",
        healingDirection: "Erkennen, dass das Wesentliche nicht verloren gegangen ist. Heilung beginnt, wenn die SE4 den stillen Schmerz teilt, statt ihn allein zu tragen \u2013 und erf\u00e4hrt, dass sie auch mit ihrer Sehnsucht gesehen und geliebt wird.",
        remedy: "Wundenmittel: Ignatia amara \u00b7 Leidenschaftsmittel: Ignatia amara \u00b7 Sch\u00fc\u00dfler-Salz: Kalium phosphoricum \u00b7 Bach-Bl\u00fcte: Willow. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const se5 = {
      code: "SE5",
      title: "Die selbsterhaltende F\u00fcnf",
      animal: "Eule",
      status: "curated_draft",
      pages: "Typ 5 Grundkarte + SE5 Seiten 1-5",
      organismQuestion: "Wie kann ich verstehen und sicher sein, dass ich kompetent bin?",
      subtypeQuestion:
        "Wie kann ich meinen Raum und meine Energie sch\u00fctzen, ohne mich vom Leben zur\u00fcckzuziehen?",
      integrationSentence: "Ich vertraue auf mein Wissen und w\u00e4hle, was mir wirklich dient.",
      coreSentence:
        "Wenn du dem Leben wieder Zugang gew\u00e4hrst, entsteht Sicherheit ohne st\u00e4ndigen R\u00fcckzug.",
      visualPages: type5VisualPages("SE5", "Selbsterhaltende F\u00fcnf"),
      lifeTheme: [
        "Sicherheit durch Wissen, R\u00fcckzug und innere Unabh\u00e4ngigkeit suchen.",
        "Lieber aus sicherer Distanz beobachten und dabei den eigenen Raum sch\u00fctzen.",
        "Vorbereitet und autonom bleiben wollen und dabei leicht N\u00e4he und Lebendigkeit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und Bauch / K\u00f6rpermitte.",
      essence: {
        title: "Integrationspotenzial: Wissen & Innere Sicherheit",
        sentence: "Ich vertraue auf mein Wissen und w\u00e4hle, was mir wirklich dient.",
        qualities: ["ruhiger Atem", "fokussierter Blick", "klare Grenzen", "vorausschauendes Handeln", "nat\u00fcrliche Zur\u00fcckhaltung"],
      },
      integrationPath: [
        "Sich zeigen, ohne Freiheit oder Autonomie zu verlieren.",
        "Sich nicht st\u00e4ndig zur\u00fcckziehen m\u00fcssen, um sicher zu bleiben.",
        "Stabilit\u00e4t durch Vertrauen, lebendige N\u00e4he und echten inneren Kontakt finden.",
      ],
      unconsciousStrategy: [
        "Abstand halten und R\u00fcckzug bewahren.",
        "Vereinnahmung vermeiden und Energie, Gef\u00fchle und Bed\u00fcrfnisse stark kontrollieren.",
        "Sich \u00fcber Wissen, Unabh\u00e4ngigkeit und innere Distanz stabilisieren, auch wenn Verbindung verloren geht.",
      ],
      turningPoint: [
        "Erkennen, dass dauerhafter R\u00fcckzug und Distanz innerlich isolieren.",
        "Sich wieder lebendig auf Kontakt und Erfahrung einlassen.",
        "Vertrauen ersetzt den st\u00e4ndigen Schutz innerer R\u00e4ume.",
      ],
      integratedState: [
        "Den inneren Raum sch\u00fctzen, ohne sich vom Leben und von Beziehungen abzuschneiden.",
        "Offen f\u00fcr Kontakt, Erfahrung und echte Begegnung bleiben.",
        "Energie wird ruhig und lebendig.",
      ],
      tensionFields: [
        "R\u00fcckzug \u2192 Kontakt",
        "Energiesparen \u2192 Lebendigkeit",
        "Distanz \u2192 Verbindung",
        "Kontrolle \u2192 Vertrauen",
        "Selbstschutz \u2192 Offenheit",
        "Wissen \u2192 Erfahrung",
        "Isolation \u2192 Teilnahme",
        "Bed\u00fcrfnislosigkeit \u2192 Empfangen",
        "innerer R\u00fcckhalt \u2192 gelebte Pr\u00e4senz",
      ],
      archetypalEssence: "Sicherheit",
      integrativePotential: "Wissen & Innere Sicherheit",
      nervousSystemRegulation: [
        "Reize dosiert aufnehmen",
        "R\u00fcckzug zur Regeneration",
        "zwischen Anspannung und Pause pendeln",
        "Gedanken ordnen und filtern",
        "Informationsflut begrenzen",
        "sich selbst regulieren",
        "Sicherheit im Inneren finden",
        "Perfektionismus sanft l\u00f6sen",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Wunsch, alles zu verstehen, und der Angst, \u00fcberflutet oder vereinnahmt zu werden.",
        gazeQuality: [
            "tief, ruhig und beobachtend",
            "wirkt oft nach innen gerichtet",
            "aufmerksame Klarheit",
            "durchdringend, aber nicht eindringlich",
            "zur\u00fcckhaltend, mit innerer Distanz",
          ],
        microTension: [
            "Stirn: leicht angespannt beim Nachdenken",
            "Augen: fokussiert, leicht verengt",
            "Mund: neutral, Lippen meist zusammen",
            "Kiefer: locker, nach innen entspannt",
            "Haltung: aufrecht, in sich ruhend",
          ],
        breathingRhythm: [
            "atmet flach im Brustbereich",
            "Atem vertieft sich beim Nachdenken",
            "atmet langsamer, wenn in Konzentration",
            "Atem stockt bei \u00dcberforderung",
            "reguliert \u00fcber R\u00fcckzug und Stille",
          ],
        movementInitiation: [
            "bewegt sich gezielt und sparsam",
            "handelt erst, wenn es notwendig ist",
            "nutzt Pausen zur Beobachtung",
            "zieht sich zur\u00fcck, wenn zu viel los ist",
            "liebt geistige Klarheit und Struktur",
          ],
        contactStyle: [
            "lieber wenige, aber echte Gespr\u00e4che",
            "spricht bed\u00e4chtig, \u00fcberlegt und pr\u00e4zise",
            "h\u00f6rt aufmerksam zu",
            "braucht Zeit, um sich zu \u00f6ffnen",
            "kommuniziert tiefgr\u00fcndig und ehrlich",
          ],
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen / Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Bauch / K\u00f6rpermitte", location: "mittig auf dem Bauchnabel", need: [
              "Sp\u00fcren",
              "Pr\u00e4senz",
              "innere Sicherheit",
            ] },
          microInstructions: [
            "K\u00f6rper bewohnen.",
            "Nicht zur\u00fcckziehen.",
            "Wahrnehmung \u00f6ffnen.",
            "Kontakt zulassen.",
            "Pr\u00e4sent bleiben.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Weisheit, Erkenntnis, innere Stille, Klarheit, Tiefe und Vertrauen in den eigenen Verstand.",
      },
      contentModules: [
        {
          title: "Typ 5 \u00b7 Grundkarte",
          intro: "Die Typ-5-Grundkarte bildet die gemeinsame Grundlage aller F\u00fcnfer-Subtypen. Im Zentrum stehen Verstehen, Wissen und das Wahren der eigenen Ressourcen. Der K\u00f6rper organisiert sich auf Beobachtung, Distanz und sparsame Energie.",
          entries: [
            { label: "Grundthema", text: "Wissen & Kompetenz. Typ 5 richtet Aufmerksamkeit auf Verstehen, Klarheit und die Frage, wie man kompetent und unabh\u00e4ngig bleibt." },
            { label: "Organismusfrage", text: "Wie kann ich verstehen und sicher sein, dass ich kompetent bin?" },
            { label: "Innerer Konflikt", text: "N\u00e4he und R\u00fcckzug stehen gegeneinander: der Wunsch nach Verbindung gegen\u00fcber der Angst, durch Kontakt ersch\u00f6pft oder vereinnahmt zu werden." },
            { label: "K\u00f6rperorganisation", text: "Zur\u00fcckgenommen, gesammelt und nach innen gerichtet. Energie sparsam gehalten, der Kopfraum aktiv, der K\u00f6rper eher still und kompakt." },
            { label: "Blickqualit\u00e4t", text: "Tief, ruhig und beobachtend. Der Blick wirkt nach innen gerichtet, nimmt genau wahr, ohne sich einzumischen." },
            { label: "Mikrospannung", text: "Feine Spannung in Stirn und Augen, konzentrierte Sammlung, kontrollierte, sparsame Mimik." },
            { label: "Atemrhythmus", text: "Flach und \u00f6konomisch. Vertieft sich beim Nachdenken, stockt bei \u00dcberforderung oder zu viel N\u00e4he." },
            { label: "Bewegungsinitiierung", text: "Sparsam und gezielt. Handelt erst, wenn es notwendig ist, nutzt Pausen zur Beobachtung." },
            { label: "Kontaktstil", text: "Zur\u00fcckhaltend, pr\u00e4zise und tiefgr\u00fcndig. Wenige, aber echte Gespr\u00e4che; braucht Zeit, um sich zu \u00f6ffnen." },
            { label: "Spannungsverteilung", text: "Hauptspannung in Stirn und Augen. Nebenaktivit\u00e4t in Nacken und Brustraum." },
            { label: "Integrationsweg", text: "Vom R\u00fcckzug zur Teilnahme. Vom Horten zum Teilen. Erfahren, dass Energie w\u00e4chst, wenn sie flie\u00dft." },
            { label: "Archetypisches Tier", text: "Eule: Weisheit, Beobachtung, Klarheit, Diskretion, Tiefe und Intuition." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SE5 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 5", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 5", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 5", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 5 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 5", youtubeVideoId: "7Yfn0V6D0e8" },
          { title: "Typ 5 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 5", youtubeVideoId: "-gH--0BuODw" },
          { title: "Type 5 \u00b7 English Theme Song", category: "Song 2", scope: "Type 5", youtubeVideoId: "H-h2eJ7IJTQ" },
          { title: "SE5 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SE5", youtubeVideoId: "200kCwdgywU" },
          { title: "SE5 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SE5", youtubeVideoId: "hWvUu9t7t88" },
          { title: "SE5 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SE5", youtubeVideoId: "T65cXVpkx9Y" },
          { title: "SE5 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SE5", youtubeVideoId: "IGtdFUC-YAY" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Stramonium",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-5/se5/heilmittel/se5-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Der Stechapfel ist ein hochgiftiges Nachtschattengew\u00e4chs, das Bilder von Dunkelheit, Bedrohung und Schrecken hervorruft. In seiner Signatur liegt das Bed\u00fcrfnis, sich vor einer als \u00fcberw\u00e4ltigend erlebten Welt zu sch\u00fctzen und Halt im Inneren zu suchen. Das pr\u00e4gt das Mittelbild der F\u00fcnf \u2013 der starke Drang, sich zur\u00fcckzuziehen, um zu verstehen, getragen von der Suche nach Wissen, Unabh\u00e4ngigkeit und innerer Klarheit. Der R\u00fcckzug in den Kopf wird zum sicheren Ort gegen\u00fcber einer bedrohlich wirkenden Au\u00dfenwelt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo mentaler R\u00fcckzug, innere Isolation und \u00dcberforderung auftreten. Es hilft, die Distanz zur Welt zu mildern und sich wieder sicherer im Kontakt zu f\u00fchlen. So darf die F\u00fcnf aus dem Beobachten heraustreten und am Leben teilnehmen, ohne sich bedroht zu f\u00fchlen.",
        },
        {
          title: "Silicea",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-5/se5/heilmittel/se5-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "innere Struktur, Standfestigkeit und Selbstvertrauen",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 11 ist das Salz des Bindegewebes, der Struktur und der inneren Standfestigkeit. Es st\u00e4rkt Haut, Haar und N\u00e4gel und gibt dem K\u00f6rper Halt und Form. Auf seelischer Ebene steht es f\u00fcr R\u00fcckgrat, Durchhalteverm\u00f6gen und Selbstvertrauen. F\u00fcr die F\u00fcnf, die sich zum Schutz ihrer Kr\u00e4fte zur\u00fcckzieht, gibt es Halt von innen. So unterst\u00fctzt es, mit eigener Substanz und Festigkeit in Kontakt zu gehen, ohne sich ersch\u00f6pft zu f\u00fchlen.",
          goal: "Auf der Mineralstoff-Ebene st\u00e4rkt es die innere Struktur und das Vertrauen in die eigenen Ressourcen \u2013 weg vom R\u00fcckzug, hin zur gelassenen Pr\u00e4senz.",
        },
        {
          title: "Water Violet",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-5/se5/heilmittel/se5-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "aus R\u00fcckzug zu warmer Verbundenheit",
          text: "Water Violet ist die Bachbl\u00fcte f\u00fcr zur\u00fcckgezogene, gern allein bleibende Menschen, die Distanz wahren. Sie hilft jenen, die sich still abkapseln und N\u00e4he als anstrengend empfinden. Die Bl\u00fcte \u00f6ffnet sanft von k\u00fchler Zur\u00fcckhaltung hin zu warmer Verbundenheit. F\u00fcr die F\u00fcnf, die ihre Kr\u00e4fte durch R\u00fcckzug sch\u00fctzt, ist sie eine Br\u00fccke nach au\u00dfen. So darf aus selbst gew\u00e4hlter Isolation wieder lebendige Teilhabe werden, ohne sich \u00fcberfordert zu f\u00fchlen.",
          goal: "Auf der Seelenebene l\u00e4dt es ein, die Sch\u00f6nheit echter Verbindung zu entdecken \u2013 St\u00e4rke, die sich nicht mehr in Distanz versteckt, sondern in warmem Kontakt zeigt.",
        },
        {
          title: "Amazonit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-5/se5/heilmittel/se5-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "innere Balance und Mut zur Wahrheit",
          text: "Der Amazonit ist ein t\u00fcrkisgr\u00fcner Feldspat und steht f\u00fcr innere Balance, Gelassenheit und Wahrhaftigkeit. Er beruhigt Nerven und kreisende Gedanken, gleicht seelische Wechselb\u00e4der aus und schenkt einen klaren, ruhigen Kopf. Zugleich gilt er als Stein der ehrlichen Kommunikation: Er gibt Mut, das eigene Erleben auszusprechen, statt es zur\u00fcckzuhalten. F\u00fcr die F\u00fcnf, die sich zum Schutz ihrer Kr\u00e4fte zur\u00fcckzieht, baut er eine sanfte Br\u00fccke nach au\u00dfen. So hilft er, aus der inneren Beobachterhaltung in echten, lebendigen Kontakt zu treten \u2013 ohne Angst, sich dabei zu verlieren.",
          goal: "Als energetisches Werkzeug st\u00e4rkt er die innere Stimme und das Vertrauen in die eigene Wahrheit \u2013 Wissen darf nach au\u00dfen treten, ohne die Scheu vor der Welt.",
        },
        {
          title: "Haferkrauttee",
          subtitle: "Tee",
          image: "assets/knowledge/type-5/se5/heilmittel/se5-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "nervenst\u00e4rkend und aufbauend",
          text: "Haferkraut ist ein klassisches Nervenst\u00e4rkungs- und Aufbaukraut, besonders bei Ersch\u00f6pfung. Es n\u00e4hrt und kr\u00e4ftigt die Nerven sanft und gibt neue innere Substanz. Traditionell wird es bei nerv\u00f6ser Schw\u00e4che und Auszehrung eingesetzt. F\u00fcr die F\u00fcnf, die ihre Kr\u00e4fte als knapp erlebt und sich schnell ausgesaugt f\u00fchlt, baut es auf. So hilft ein Haferkrauttee, die eigenen Reserven aufzuf\u00fcllen und gest\u00e4rkt in Kontakt zu gehen.",
          goal: "Als pflanzliche Begleiterin n\u00e4hrt sie das Nervensystem auf dem Weg aus dem Hypervigilanz-Modus in ein ruhiges, verl\u00e4ssliches Inneres.",
        },
        {
          title: "Silicea",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/silicea.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus reiner Kieselerde, dem Quarz \u2013 einem Mineral, das Struktur, Festigkeit und Standkraft verk\u00f6rpert und den Pflanzen ihren Halm aufrichtet. Gerade sein Fehlen pr\u00e4gt das Mittelbild: ein Mangel an innerem Mark, an Kraft und Durchhalteverm\u00f6gen, verbunden mit Nachgiebigkeit und wenig Selbstvertrauen. Das ist die Wunde des Mangels der F\u00fcnf \u2013 das tiefe Gef\u00fchl, nicht genug Kraft, Energie und Substanz zu haben, um dem Leben gewachsen zu sein. Es fehlt das innere R\u00fcckgrat, das Sicherheit von innen g\u00e4be.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als R\u00fcckzug, Ersch\u00f6pfungsangst und das Sch\u00fctzen knapper Ressourcen zeigt. Es baut innere Substanz und Standfestigkeit auf, sodass Kraft nicht l\u00e4nger \u00e4ngstlich geh\u00fctet werden muss. So darf die F\u00fcnf aus einem Gef\u00fchl der F\u00fclle heraus geben und in Beziehung gehen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Stramonium",
          schuessler: "Silicea",
          bachbluete: "Water Violet",
          edelstein: "Amazonit",
          tee: "Haferkrauttee",
        },
        homoeopathieThema: "Der Stechapfel ist ein hochgiftiges Nachtschattengew\u00e4chs, das Bilder von Dunkelheit, Bedrohung und Schrecken hervorruft. In seiner Signatur liegt das Bed\u00fcrfnis, sich vor einer als \u00fcberw\u00e4ltigend erlebten Welt zu sch\u00fctzen und Halt im Inneren zu suchen. Das pr\u00e4gt das Mittelbild der F\u00fcnf \u2013 der starke Drang, sich zur\u00fcckzuziehen, um zu verstehen, getragen von der Suche nach Wissen, Unabh\u00e4ngigkeit und innerer Klarheit. Der R\u00fcckzug in den Kopf wird zum sicheren Ort gegen\u00fcber einer bedrohlich wirkenden Au\u00dfenwelt.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo mentaler R\u00fcckzug, innere Isolation und \u00dcberforderung auftreten. Es hilft, die Distanz zur Welt zu mildern und sich wieder sicherer im Kontakt zu f\u00fchlen. So darf die F\u00fcnf aus dem Beobachten heraustreten und am Leben teilnehmen, ohne sich bedroht zu f\u00fchlen.",
        wundeThema: "Bereitet aus reiner Kieselerde, dem Quarz \u2013 einem Mineral, das Struktur, Festigkeit und Standkraft verk\u00f6rpert und den Pflanzen ihren Halm aufrichtet. Gerade sein Fehlen pr\u00e4gt das Mittelbild: ein Mangel an innerem Mark, an Kraft und Durchhalteverm\u00f6gen, verbunden mit Nachgiebigkeit und wenig Selbstvertrauen. Das ist die Wunde des Mangels der F\u00fcnf \u2013 das tiefe Gef\u00fchl, nicht genug Kraft, Energie und Substanz zu haben, um dem Leben gewachsen zu sein. Es fehlt das innere R\u00fcckgrat, das Sicherheit von innen g\u00e4be.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als R\u00fcckzug, Ersch\u00f6pfungsangst und das Sch\u00fctzen knapper Ressourcen zeigt. Es baut innere Substanz und Standfestigkeit auf, sodass Kraft nicht l\u00e4nger \u00e4ngstlich geh\u00fctet werden muss. So darf die F\u00fcnf aus einem Gef\u00fchl der F\u00fclle heraus geben und in Beziehung gehen.",
        wunde: {
          homoeopathie: "Silicea",
          schuessler: "Silicea",
          bachbluete: "Water Violet",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 5). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      woundBehindPassion: {
        passion: "Geiz \u2013 nicht in erster Linie materiell, sondern ein Geiz mit Energie, Zeit, Aufmerksamkeit und innerer Beteiligung. Der F\u00fcnfer h\u00e4lt zur\u00fcck, weil er bef\u00fcrchtet, mehr zu verlieren, als er geben kann. Bei der SE5 verdichtet sich dies zur vollst\u00e4ndigen Selbstgen\u00fcgsamkeit: R\u00fcckzug wird zur Lebensform, nicht nur zur Strategie.",
        belief: "\u201eWenn ich mich zeige oder gebe, werde ich leer.\u201c Darunter: die eigenen Ressourcen sind begrenzt und m\u00fcssen um jeden Preis gesch\u00fctzt werden \u2014 das Leben zieht mehr ab, als regeneriert werden kann.",
        wound: "Die Wunde des Mangels: das tiefe Gef\u00fchl \u201eIch habe nicht genug\u201c \u2013 nicht genug Kraft, Energie, Wissen oder Kompetenz, um den Anforderungen des Lebens gewachsen zu sein. Bei der SE5 ist dieser Mangel am stillsten und am tiefsten vergraben.",
        compensation: "Maximaler R\u00fcckzug: wenig Kontakt, wenig sichtbare Bed\u00fcrftigkeit, wenig Anspr\u00fcche \u2014 so bleibt der innere Vorrat erhalten. Wissen sammeln und Selbstgen\u00fcgsamkeit als Lebensform stabilisieren die Wunde, ohne sie zu ber\u00fchren.",
        sufferingCycle: "Der Mangel erzeugt R\u00fcckzug. Der R\u00fcckzug erzeugt Distanz. Die Distanz verhindert neue Erfahrungen. Die fehlenden Erfahrungen best\u00e4tigen den Mangel. Und der Kreislauf beginnt erneut.",
        healingDirection: "Erfahren, dass Energie w\u00e4chst, wenn sie flie\u00dft: sich zeigen, bevor alles sicher ist, und wahrnehmen, dass Lebendigkeit nicht ersch\u00f6pft, sondern n\u00e4hrt. Aus vollst\u00e4ndigem R\u00fcckzug wird schrittweise Beteiligung.",
        remedy: "Wundenmittel: Silicea \u00b7 Leidenschaftsmittel: Stramonium \u00b7 Sch\u00fc\u00dfler-Salz: Silicea \u00b7 Bach-Bl\u00fcte: Water Violet. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const se6 = {
      code: "SE6",
      title: "Die selbsterhaltende Sechs",
      animal: "Kaninchen",
      status: "curated_draft",
      pages: "Typ 6 Grundkarte + SE6 Seiten 1-5",
      visualPages: type6VisualPages("SE6", "Selbsterhaltende Sechs"),
      organismQuestion: "Wie kann ich sicher sein, dass ich nicht bedroht bin und Unterst\u00fctzung habe?",
      subtypeQuestion:
        "Wie kann ich Sicherheit und Halt finden, ohne mich dauerhaft abzusichern?",
      integrationSentence: "Ich w\u00e4hle Vertrauen statt Angst und Mut statt Kontrolle.",
      coreSentence:
        "Wenn du deinem K\u00f6rper vertraust, entsteht Ruhe, auch wenn nicht alles sicher ist.",
      lifeTheme: [
        "Sicherheit, Stabilit\u00e4t und verl\u00e4sslichen Halt im Leben suchen.",
        "Vorbereitet und gesch\u00fctzt sein wollen und m\u00f6gliche Gefahren fr\u00fch erkennen.",
        "Unsicherheit kontrollieren wollen und dabei leicht Vertrauen und innere Ruhe verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Oberschenkel.",
      essence: {
        title: "Integrationspotenzial: Mut & Vertrauen",
        sentence: "Ich w\u00e4hle Vertrauen statt Angst und Mut statt Kontrolle.",
        qualities: ["wachsam und loyal", "vorsichtig und verl\u00e4sslich", "innere Sicherheit", "ruhigere Atmung", "belastbare Standfestigkeit"],
      },
      integrationPath: [
        "Dem Leben mehr vertrauen und nicht alles kontrollieren m\u00fcssen.",
        "Nicht st\u00e4ndig vorbereitet oder abgesichert sein m\u00fcssen, um sicher zu bleiben.",
        "Ruhe durch Vertrauen, innere Stabilit\u00e4t und lebendige Gelassenheit finden.",
      ],
      unconsciousStrategy: [
        "Sicherheit durch Kontrolle und Vorbereitung herstellen.",
        "Den Blick stark auf m\u00f6gliche Risiken richten und Anspannung innerlich halten.",
        "Sich \u00fcber Wachsamkeit, Vorsicht und Absicherung stabilisieren, auch wenn Vertrauen verloren geht.",
      ],
      turningPoint: [
        "Erkennen, dass st\u00e4ndige Vorsicht und Absicherung Angst nicht wirklich beruhigen.",
        "Mehr Vertrauen in sich selbst und ins Leben entwickeln.",
        "Innere Sicherheit entsteht zunehmend aus Selbstvertrauen statt aus Kontrolle.",
      ],
      integratedState: [
        "Unsicherheit bewusst begegnen, ohne sich dauerhaft absichern zu m\u00fcssen.",
        "Der eigenen Wahrnehmung und inneren Stabilit\u00e4t vertrauen.",
        "Energie wird ruhig und belastbar.",
      ],
      tensionFields: [
        "Sicherheit \u2192 Vertrauen",
        "Vorsicht \u2192 Lebendigkeit",
        "Absicherung \u2192 Offenheit",
        "Angst \u2192 innere Ruhe",
        "Kontrolle \u2192 Hingabe",
        "Misstrauen \u2192 Geborgenheit",
        "R\u00fcckzug \u2192 Kontakt",
        "Anspannung \u2192 Entspannung",
        "Schutzbed\u00fcrfnis \u2192 Selbstvertrauen",
      ],
      archetypalEssence: "Der loyale W\u00e4chter",
      integrativePotential: "Mut & Vertrauen",
      bodySignature: {
        basicTension: "Zwischen dem Wunsch nach Sicherheit und der Angst vor Gefahr oder Verrat.",
        gazeQuality: [
            "wachsam, pr\u00fcfend und suchend",
            "sieht Details und potenzielle Risiken",
            "misstrauisch, aber zugewandt",
            "scannt Umgebung und Menschen",
            "achtet auf Stimmungen und Signale",
          ],
        microTension: [
            "Stirn: leicht angespannt, sorgenvoll",
            "Augen: wach, angespannt, schnell reagierend",
            "Mund: leicht angespannt, zur\u00fcckhaltend",
            "Kiefer: leicht angespannt, kontrollierend",
            "Haltung: aufmerksam, leicht angespannt",
          ],
        breathingRhythm: [
            "atmet eher flach und unregelm\u00e4\u00dfig",
            "Atem stockt bei Unsicherheit",
            "atmet schneller bei Anspannung",
            "seufzt bei Ersch\u00f6pfung",
            "braucht tiefe, bewusste Atempausen",
          ],
        movementInitiation: [
            "bewegt sich vorsichtig und bedacht",
            "beobachtet erst, dann handelt sie",
            "pr\u00fcft Umfeld, bevor er losgeht",
            "h\u00e4lt sich zur\u00fcck, bis Sicherheit da ist",
            "braucht Best\u00e4tigung, bevor er aktiv wird",
          ],
        contactStyle: [
            "h\u00f6flich, respektvoll und loyal",
            "fragt nach, h\u00f6rt genau zu",
            "sucht Klarheit und Verl\u00e4sslichkeit",
            "braucht Zeit, um Vertrauen zu fassen",
            "ist unterst\u00fctzend, wenn sicher",
          ],
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Oberschenkel", location: "mittig auf dem Oberschenkel", need: [
              "Halt",
              "Vertrauen",
              "Stabilit\u00e4t",
              "Sicherheit",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Vertrauen, Bindung, innere Sicherheit, Loyalit\u00e4t, Gemeinschaft und Mut.",
      },
      nervousSystemRegulation: [
        "den K\u00f6rper als sicheren Halt sp\u00fcren",
        "dem eigenen Urteil vertrauen",
        "Anspannung bewusst l\u00f6sen",
        "den Atem tief und ruhig f\u00fchren",
        "Sicherheit von innen statt nur von au\u00dfen suchen",
        "Katastrophengedanken benennen statt zu glauben",
        "Erdung \u00fcber die Beine finden",
        "Vertrauen schrittweise wagen",
      ],
      contentModules: [
        {
          title: "Typ 6 \u00b7 Grundkarte",
          intro: "Die Typ-6-Grundkarte bildet die gemeinsame Grundlage aller Sechser-Subtypen. Im Zentrum stehen Sicherheit, Vertrauen und Wachsamkeit. Der K\u00f6rper organisiert sich auf Aufmerksamkeit, Absicherung und das fr\u00fche Erkennen von Gefahr.",
          entries: [
            { label: "Grundthema", text: "Sicherheit & Vertrauen. Typ 6 richtet Aufmerksamkeit auf Verl\u00e4sslichkeit, m\u00f6gliche Risiken und die Frage, wem und was man trauen kann." },
            { label: "Organismusfrage", text: "Wie kann ich sicher sein, dass ich nicht bedroht bin und Unterst\u00fctzung habe?" },
            { label: "Innerer Konflikt", text: "Vertrauen und Misstrauen stehen gegeneinander: der Wunsch nach Halt gegen\u00fcber dem st\u00e4ndigen Zweifel und der Suche nach Gefahr." },
            { label: "K\u00f6rperorganisation", text: "Wachsam, aufmerksam und reaktionsbereit. Eine Grundspannung von Bereitschaft, der Blick scannt die Umgebung, die Energie h\u00e4lt sich gefasst." },
            { label: "Blickqualit\u00e4t", text: "Wachsam, pr\u00fcfend und suchend. Sieht Details und potenzielle Risiken, achtet auf Stimmungen und Signale." },
            { label: "Mikrospannung", text: "Spannung in Stirn und Augen, sorgenvolle Wachheit, schnelle, leicht angespannte Reaktion der Mimik." },
            { label: "Atemrhythmus", text: "Eher flach und unregelm\u00e4\u00dfig. Stockt bei Unsicherheit, beschleunigt bei Anspannung, braucht bewusste Atempausen." },
            { label: "Bewegungsinitiierung", text: "Vorsichtig und pr\u00fcfend. Beobachtet erst, dann handelt, braucht Sicherheit, bevor sie aktiv wird." },
            { label: "Kontaktstil", text: "Loyal, pr\u00fcfend und verbindlich. Sucht Klarheit und Verl\u00e4sslichkeit, braucht Zeit, um Vertrauen zu fassen." },
            { label: "Spannungsverteilung", text: "Hauptspannung in Stirn, Augen und Nacken. Nebenaktivit\u00e4t in Schultern und Solarplexus." },
            { label: "Integrationsweg", text: "Vom Zweifel zum Vertrauen. Von der Absicherung zur inneren Sicherheit. Mut statt Kontrolle." },
            { label: "Archetypisches Tier", text: "Erdm\u00e4nnchen: Wachsamkeit, Gemeinschaft, Schutz, Vorsicht, Loyalit\u00e4t und Zusammenhalt." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SE6 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 6", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 6", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 6", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 6 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 6", youtubeVideoId: "x16gtlhjxCs" },
          { title: "Typ 6 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 6", youtubeVideoId: "f72ns-IXMrc" },
          { title: "Type 6 \u00b7 English Theme Song", category: "Song 2", scope: "Type 6", youtubeVideoId: "LJdN12yDBwE" },
          { title: "SE6 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SE6", youtubeVideoId: "_bnbjIyn3qY" },
          { title: "SE6 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SE6", youtubeVideoId: "KICVKWtfIKk" },
          { title: "SE6 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SE6", youtubeVideoId: "z7BZ4KXOAsg" },
          { title: "SE6 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SE6", youtubeVideoId: "kSDqvcVxfjQ" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Opium",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-6/se6/heilmittel/se6-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus dem Schlafmohn \u2013 einem Stoff, der Schmerz, Angst und Wahrnehmung bet\u00e4ubt und in dumpfe Ruhe h\u00fcllt. Diese Signatur zeigt ein Wesen, das nach Sicherheit und Geborgenheit verlangt und Gefahr lieber ausblendet, als sie zu durchleben. Das pr\u00e4gt die Leidenschaft der Sechs \u2013 der starke Wunsch nach Schutz und die Vermeidung von Bedrohung. Wo das Mittel bet\u00e4ubt, sucht die Seele Sicherheit, indem sie das Beunruhigende abd\u00e4mpft.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo \u00fcberm\u00e4\u00dfige Angst, innere Anspannung, Sorgen und dauerhafte Wachsamkeit auftreten. Es hilft, die festgehaltene Schreckspannung zu l\u00f6sen und das Nervensystem zu beruhigen. So darf an die Stelle st\u00e4ndiger Alarmbereitschaft ein Gef\u00fchl von Geborgenheit treten.",
        },
        {
          title: "Magnesium phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-6/se6/heilmittel/se6-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Entspannung und L\u00f6sen von Anspannung",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 7, die \u201ehei\u00dfe Sieben\u201c, ist das gro\u00dfe Salz der Entspannung und Nervenruhe. Es l\u00f6st Kr\u00e4mpfe, Anspannung und nerv\u00f6se Unruhe und beruhigt das \u00fcberreizte System. Auf seelischer Ebene steht es f\u00fcr Loslassen, Gelassenheit und das Nachlassen innerer Anspannung. F\u00fcr die Sechs, die in Wachsamkeit, Zweifel und Angst lebt, ist es ein sanfter Beruhiger. So unterst\u00fctzt es, die st\u00e4ndige innere Alarmbereitschaft loszulassen und Vertrauen zu fassen.",
          goal: "Auf der Mineralstoff-Ebene l\u00f6st es muskul\u00e4re und nerv\u00f6se Verkrampfungen, die entstehen, wenn Sicherheit durch Kontrolle und \u00dcberdenken gesucht wird.",
        },
        {
          title: "Aspen",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-6/se6/heilmittel/se6-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Vertrauen bei unbestimmter Angst",
          text: "Aspen ist die Bachbl\u00fcte f\u00fcr unbestimmte \u00c4ngste, vages Unbehagen und das Gef\u00fchl drohender Gefahr ohne klaren Grund. Sie hilft bei feiner Schreckhaftigkeit und einer reizbaren inneren Wachsamkeit. Die Bl\u00fcte schenkt Vertrauen und ein Gef\u00fchl innerer Sicherheit. F\u00fcr die Sechs, die mit Zweifel und Angst vor dem Ungewissen lebt, ist sie ein tiefer Beruhiger. So darf an die Stelle diffuser Angst ein stilles Grundvertrauen treten.",
          goal: "Auf der Seelenebene wandelt es vages Unbehagen in innere Verl\u00e4sslichkeit: Vertrauen in die eigene Erdung, statt sich in Projektionen und Worst-Case-Szenarien zu verlieren.",
        },
        {
          title: "H\u00e4matit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-6/se6/heilmittel/se6-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Erdung, Schutz und Stabilit\u00e4t",
          text: "Der H\u00e4matit ist ein metallisch gl\u00e4nzender Eisenstein und einer der st\u00e4rksten Erdungs- und Schutzsteine \u00fcberhaupt. Sein hoher Eisengehalt steht sinnbildlich f\u00fcr Festigkeit, Widerstandskraft und ein aufrechtes inneres R\u00fcckgrat. Er gibt Halt, Stabilit\u00e4t und ein k\u00f6rperlich sp\u00fcrbares Gef\u00fchl von Sicherheit und Geborgenheit. F\u00fcr die Sechs, die in Zweifel, Wachsamkeit und der Suche nach verl\u00e4sslichem Halt lebt, ist er ein verl\u00e4sslicher Begleiter. So n\u00e4hrt er Urvertrauen von innen \u2013 eine Sicherheit, die nicht von \u00e4u\u00dferen Garantien abh\u00e4ngt, sondern im eigenen Stand wurzelt.",
          goal: "Als energetisches Werkzeug erdet er in solider Gegenwart \u2013 Verl\u00e4sslichkeit, die nicht aus Angst, sondern aus innerem Halt entsteht.",
        },
        {
          title: "Kamillenbl\u00fctentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-6/se6/heilmittel/se6-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "beruhigend und wohltuend",
          text: "Die Kamille ist eines der bew\u00e4hrtesten Heilkr\u00e4uter, beruhigend, entkrampfend und wohltuend. Sie bes\u00e4nftigt Nerven, Magen und Gem\u00fct und gibt ein Gef\u00fchl von Geborgenheit. Traditionell wird sie bei Unruhe, Anspannung und \u00c4ngstlichkeit getrunken. F\u00fcr die Sechs, die mit Wachsamkeit und Zweifel lebt, wirkt sie wie eine warme, sichere Umh\u00fcllung. So hilft ein Kamillenbl\u00fctentee, die innere Alarmbereitschaft zu beruhigen und Vertrauen zu fassen.",
          goal: "Als pflanzliche Begleiterin l\u00f6st sie das, was sich im Leistungsstreben verknotet hat \u2013 Entspannung wird zu einem erlaubten Zustand.",
        },
        {
          title: "Opium",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/opium.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Auch die Wunde der Sechs tr\u00e4gt die Signatur des Schlafmohns: die Bet\u00e4ubung nach einem Schreck. Sein klassisches Bild ist der Zustand, in dem nach einem ersch\u00fctternden Erlebnis die Angst bleibt, das Gef\u00fchl aber wie eingefroren und abgestumpft ist. Das ist die Wunde des verlorenen Vertrauens \u2013 ein Erlebnis, das die innere Sicherheit ersch\u00fcttert hat, gefolgt von Schutz durch R\u00fcckzug und Bet\u00e4ubung. Die Seele sch\u00fctzt sich, indem sie den Schmerz nicht mehr ganz sp\u00fcrt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Angst, dauerhafte Wachsamkeit und das Abschw\u00e4chen schmerzhafter Wahrnehmung zeigt. Es hilft, das Erstarrte wieder ins Flie\u00dfen zu bringen und Vertrauen behutsam zur\u00fcckzugewinnen. So darf die Sechs sich wieder lebendig und sicher f\u00fchlen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Opium",
          schuessler: "Magnesium phosphoricum",
          bachbluete: "Aspen",
          edelstein: "H\u00e4matit",
          tee: "Kamillenbl\u00fctentee",
        },
        homoeopathieThema: "Gewonnen aus dem Schlafmohn \u2013 einem Stoff, der Schmerz, Angst und Wahrnehmung bet\u00e4ubt und in dumpfe Ruhe h\u00fcllt. Diese Signatur zeigt ein Wesen, das nach Sicherheit und Geborgenheit verlangt und Gefahr lieber ausblendet, als sie zu durchleben. Das pr\u00e4gt die Leidenschaft der Sechs \u2013 der starke Wunsch nach Schutz und die Vermeidung von Bedrohung. Wo das Mittel bet\u00e4ubt, sucht die Seele Sicherheit, indem sie das Beunruhigende abd\u00e4mpft.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo \u00fcberm\u00e4\u00dfige Angst, innere Anspannung, Sorgen und dauerhafte Wachsamkeit auftreten. Es hilft, die festgehaltene Schreckspannung zu l\u00f6sen und das Nervensystem zu beruhigen. So darf an die Stelle st\u00e4ndiger Alarmbereitschaft ein Gef\u00fchl von Geborgenheit treten.",
        wundeThema: "Auch die Wunde der Sechs tr\u00e4gt die Signatur des Schlafmohns: die Bet\u00e4ubung nach einem Schreck. Sein klassisches Bild ist der Zustand, in dem nach einem ersch\u00fctternden Erlebnis die Angst bleibt, das Gef\u00fchl aber wie eingefroren und abgestumpft ist. Das ist die Wunde des verlorenen Vertrauens \u2013 ein Erlebnis, das die innere Sicherheit ersch\u00fcttert hat, gefolgt von Schutz durch R\u00fcckzug und Bet\u00e4ubung. Die Seele sch\u00fctzt sich, indem sie den Schmerz nicht mehr ganz sp\u00fcrt.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Angst, dauerhafte Wachsamkeit und das Abschw\u00e4chen schmerzhafter Wahrnehmung zeigt. Es hilft, das Erstarrte wieder ins Flie\u00dfen zu bringen und Vertrauen behutsam zur\u00fcckzugewinnen. So darf die Sechs sich wieder lebendig und sicher f\u00fchlen.",
        wunde: {
          homoeopathie: "Opium",
          schuessler: "Magnesium phosphoricum",
          bachbluete: "Cerato",
        },
      },
      woundBehindPassion: {
        passion: "Angst \u2013 ein Grundmisstrauen gegen\u00fcber dem Leben, das sich als st\u00e4ndige innere Wachsamkeit, Zweifel und Absicherungsbedarf zeigt. Bei der SE6 wendet sich die Angst nach innen: Sie sucht nicht den Kampf, sondern W\u00e4rme, Bindung und Verb\u00fcndete, die Schutz versprechen.",
        belief: "\u201eDie Welt ist gef\u00e4hrlich, und ich darf nicht allein dastehen.\u201c Darunter: \u201eNur wenn ich verl\u00e4ssliche Verb\u00fcndete habe und vorsichtig bleibe, bin ich sicher.\u201c",
        wound: "Die Wunde des verlorenen Vertrauens: das Gef\u00fchl, dass die innere Gewissheit, vom Leben getragen zu sein, br\u00fcchig ist. Bei der SE6 zeigt sich dies als tiefes Bed\u00fcrfnis nach Schutz und der Angst, schutzlos zu sein.",
        compensation: "Bindung, Vorsicht und das Suchen verl\u00e4sslicher Verb\u00fcndeter. W\u00e4rme, Loyalit\u00e4t und Zugeh\u00f6rigkeit werden zum Schutzraum \u2014 die Sicherheit wird au\u00dfen gesucht statt in sich selbst gefunden.",
        sufferingCycle: "Wer st\u00e4ndig nach Unsicherheiten sucht, findet sie. Mehr Vorsicht schafft mehr Wachsamkeit, die mehr Bedrohungen wahrnimmt, die mehr Angst erzeugt \u2013 und der Kreis schlie\u00dft sich.",
        healingDirection: "Erkennen, dass Sicherheit und Vertrauen nicht dasselbe sind. Vertrauen entsteht nicht durch Beseitigung aller Risiken oder den perfekten Schutz, sondern durch die Erfahrung, auch allein dem Leben standhalten zu k\u00f6nnen.",
        remedy: "Wundenmittel: Opium \u00b7 Leidenschaftsmittel: Opium \u00b7 Sch\u00fc\u00dfler-Salz: Magnesium phosphoricum \u00b7 Bach-Bl\u00fcte: Cerato. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const se7 = {
      code: "SE7",
      title: "Die selbsterhaltende Sieben",
      animal: "Gorilla",
      status: "curated_draft",
      pages: "Typ 7 Grundkarte + SE7 Seiten 1-5",
      visualPages: type7VisualPages("SE7", "Selbsterhaltende Sieben"),
      organismQuestion: "Wie kann ich mehr M\u00f6glichkeiten entdecken und Schwierigkeiten vermeiden?",
      subtypeQuestion:
        "Wie kann ich Freude, Genuss und M\u00f6glichkeiten erleben, ohne vor Begrenzung oder innerer Leere auszuweichen?",
      integrationSentence: "Ich w\u00e4hle das Leben in seiner ganzen Tiefe und schenke meine Freude der Welt.",
      coreSentence:
        "Wenn du genug hast, ohne mehr zu brauchen, entsteht wirklicher Genuss und innere Ruhe.",
      lifeTheme: [
        "Sicherheit durch Freiheit, M\u00f6glichkeiten und positive Erfahrungen suchen.",
        "Lebendig und unabh\u00e4ngig bleiben wollen und dabei Begrenzung und innere Tiefe vermeiden.",
        "Das Angenehme suchen und dabei leicht Ruhe und echte Pr\u00e4senz verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und Unterbauch / Beckenbereich.",
      essence: {
        title: "Integrationspotenzial: Lebensfreude & Ressourcenf\u00fclle",
        sentence: "Ich w\u00e4hle das Leben in seiner ganzen Tiefe und schenke meine Freude der Welt.",
        qualities: ["lebensfroh", "spontan", "ressourcenorientiert", "genussf\u00e4hig", "zentrierte Lebendigkeit"],
      },
      integrationPath: [
        "Auch unangenehme Gef\u00fchle und Begrenzungen annehmen.",
        "Nicht st\u00e4ndig in Bewegung bleiben m\u00fcssen, um sich lebendig zu f\u00fchlen.",
        "Erf\u00fcllung durch innere Ruhe, Pr\u00e4senz und echte Tiefe finden.",
      ],
      turningPoint: [
        "Erkennen, dass st\u00e4ndige Planung und Ablenkung vom gegenw\u00e4rtigen Moment entfernen.",
        "Auch unangenehme Gef\u00fchle bewusst wahrnehmen.",
        "Zufriedenheit entsteht aus Pr\u00e4senz statt aus dauernder Reizsuche.",
      ],
      integrativePotential: "Lebensfreude & Ressourcenf\u00fclle",
      integratedState: [
        "M\u00f6glichkeiten und Freude genie\u00dfen, ohne dem gegenw\u00e4rtigen Moment auszuweichen.",
        "Offen f\u00fcr Tiefe und alle Gef\u00fchle des Lebens bleiben.",
        "Energie wird ruhig und lebendig zugleich.",
      ],
      bodySignature: {
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen / Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Unterbauch / Beckenbereich", location: "unterhalb des Nabels", need: [
              "Sicherheit",
              "Schutz",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Lebensfreude, Dankbarkeit, Genussf\u00e4higkeit, Vertrauen, Kreativit\u00e4t, Bewegung und F\u00fclle.",
      },
      unconsciousStrategy: [
        "Sicherheit \u00fcber praktischen Genuss, Planung und n\u00fctzliche Verb\u00fcndete aufbauen.",
        "Unangenehme Gef\u00fchle und innere Leere mit Annehmlichkeiten \u00fcberdecken.",
        "Sich \u00fcber F\u00fclle, Vorsorge und viele Optionen stabilisieren, auch wenn echte Tiefe fehlt.",
      ],
      tensionFields: [
        "Anh\u00e4ufen \u2192 Gen\u00fcgsamkeit",
        "Reizsuche \u2192 Pr\u00e4senz",
        "\u00e4u\u00dfere F\u00fclle \u2192 innere Ruhe",
        "Genuss \u2192 Tiefe",
        "Ablenkung \u2192 Gegenwart",
        "Mehr-Wollen \u2192 Genug-Haben",
        "Zerstreuung \u2192 Sammlung",
        "Vermeidung \u2192 Annahme",
        "Konsum \u2192 Erf\u00fcllung",
      ],
      archetypalEssence: "Genussvolle Lebensf\u00fclle",
      nervousSystemRegulation: [
        "im K\u00f6rper ankommen statt im Kopf zu planen",
        "einen Genuss bewusst und ganz auskosten",
        "Pausen ohne Ablenkung zulassen",
        "unangenehme Gef\u00fchle benennen statt zu \u00fcberdecken",
        "den Atem in den Bauch lenken",
        "Reize und Optionen bewusst begrenzen",
        "S\u00e4ttigung und Genug-Gef\u00fchl wahrnehmen",
        "Stille als Quelle der Ruhe nutzen",
      ],
      contentModules: [
        {
          title: "Typ 7 \u00b7 Grundkarte",
          intro: "Die Typ-7-Grundkarte bildet die gemeinsame Grundlage aller Sieben-Subtypen. Im Zentrum steht die Suche nach Freude, M\u00f6glichkeiten und angenehmen Erfahrungen \u2014 und die Vermeidung von Schmerz und Begrenzung. Der K\u00f6rper organisiert sich auf Lebendigkeit, Beweglichkeit und Offenheit nach vorn.",
          entries: [
            { label: "Grundthema", text: "Begeisterung & F\u00fclle. Typ 7 richtet Aufmerksamkeit auf M\u00f6glichkeiten, Genuss und positive Erfahrungen und vermeidet Schmerz, Leere und Begrenzung." },
            { label: "Organismusfrage", text: "Wie kann ich mehr M\u00f6glichkeiten entdecken und Schwierigkeiten vermeiden?" },
            { label: "Innerer Konflikt", text: "Lebensfreude und Vermeidung stehen gegeneinander: der Hunger nach angenehmen Erfahrungen gegen\u00fcber der Flucht vor Schmerz, Stille und Tiefe." },
            { label: "K\u00f6rperorganisation", text: "Locker, beweglich und nach vorn gerichtet. Wenig Grundspannung, aber innerlich rastlos; die Energie ist nach au\u00dfen offen und st\u00e4ndig in Bewegung." },
            { label: "Blickqualit\u00e4t", text: "Wach, beweglich und interessiert, mit einem Glanz des inneren Appetits. Der Blick springt zu Neuem und sucht das n\u00e4chste Angenehme." },
            { label: "Mikrospannung", text: "Lebhafte, spontane Mimik mit h\u00e4ufigem L\u00e4cheln; darunter eine feine nerv\u00f6se Unruhe in Zwinkern, Augenbewegungen und schnellem Wechsel." },
            { label: "Atemrhythmus", text: "Eher schnell und lebhaft, gehoben durch Begeisterung; weicht aus oder stockt, wenn Schweres oder Begrenzendes auftaucht." },
            { label: "Bewegungsinitiierung", text: "Impulsiv, geschmeidig und erz\u00e4hlfreudig. Bewegt sich spielerisch, fast t\u00e4nzerisch, mit vielen Positions- und Themenwechseln." },
            { label: "Kontaktstil", text: "Begeistert, melodisch und einladend. Schafft N\u00e4he \u00fcber Lachen und Gespr\u00e4ch, h\u00e4lt emotionale Tiefe aber eher auf Abstand." },
            { label: "Spannungsverteilung", text: "Wenig Grundspannung, daf\u00fcr rastlose Energie in H\u00e4nden, Beinen und Augen \u2014 Wippen, unruhige H\u00e4nde, suchender Blick." },
            { label: "Integrationsweg", text: "Von der Zerstreuung zur Pr\u00e4senz. Von der Reizsuche zur Tiefe. Genug haben, ohne mehr zu brauchen." },
            { label: "Archetypisches Tier", text: "Affe: Beweglichkeit, geistige Wendigkeit, Spielfreude, Kreativit\u00e4t und Optionsvielfalt. Der Affe steht f\u00fcr den Weg von der zerstreuten M\u00f6glichkeitssuche zur inspirierten, pr\u00e4senten Lebendigkeit." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SE7 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 7", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 7", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 7", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 7 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 7", youtubeVideoId: "hFVfMOqKxY8" },
          { title: "Typ 7 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 7", youtubeVideoId: "Z-a77RvGsaU" },
          { title: "Type 7 \u00b7 English Theme Song", category: "Song 2", scope: "Type 7", youtubeVideoId: "YCAFxBpZFKg" },
          { title: "SE7 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SE7", youtubeVideoId: "e67bCJpPGo4" },
          { title: "SE7 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SE7", youtubeVideoId: "_SOvWRQxacw" },
          { title: "SE7 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SE7", youtubeVideoId: "kKxF8Dx-Sc8" },
          { title: "SE7 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SE7", youtubeVideoId: "SiCP41_5iDw" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Belladonna",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-7/se7/heilmittel/se7-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Die Tollkirsche ist eine Nachtschattenpflanze, deren Bild von Hitze, Fieber, F\u00fclle und gl\u00fchender Erregung gepr\u00e4gt ist. Diese Signatur durchzieht das Mittelbild: eine fiebrige Intensit\u00e4t, ein Drang nach lebhaften, starken Eindr\u00fccken und ein rasches Aufflammen. Genau das lebt in der Sieben \u2013 das Bed\u00fcrfnis, Schmerz zu vermeiden und das Leben in vollen Z\u00fcgen zu erleben, getragen von einem fiebrigen Drang nach mehr M\u00f6glichkeiten, Reizen und Genuss. Wie das Fieber will alles hell, schnell und intensiv sein.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als \u00dcberf\u00fclle, rastlose Getriebenheit und fiebrige Reizsuche zeigt. Es hilft, die \u00fcberschie\u00dfende Erregung zu k\u00fchlen und zur Ruhe zu bringen. So darf die Sieben F\u00fclle genie\u00dfen, ohne von ihr getrieben zu werden.",
        },
        {
          title: "Natrium phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-7/se7/heilmittel/se7-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "S\u00e4ure-Basen-Ausgleich und innere Balance",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 9 ist das Salz des S\u00e4ure-Basen-Haushalts und der inneren Balance. Es hilft, \u00dcbers\u00e4uerung auszugleichen und den Stoffwechsel zu harmonisieren. Auf seelischer Ebene steht es f\u00fcr Ma\u00df, Ausgewogenheit und ein gesundes Genug. F\u00fcr die Sieben, die vor Schmerz in immer neue Reize und M\u00f6glichkeiten flieht, bringt es Ausgleich. So unterst\u00fctzt es, statt rastloser \u00dcbers\u00e4ttigung wieder ein ruhiges inneres Gleichgewicht zu finden.",
          goal: "Auf der Mineralstoff-Ebene unterst\u00fctzt es die innere Balance, wenn \u00dcberstimulation, Zerstreuung und die Flucht vor Schmerz zu Ersch\u00f6pfung und \u00dcbers\u00e4uerung f\u00fchren.",
        },
        {
          title: "Agrimony",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-7/se7/heilmittel/se7-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Echtheit hinter der Heiterkeit",
          text: "Agrimony ist die Bachbl\u00fcte f\u00fcr Menschen, die hinter Heiterkeit und Leichtigkeit ihre wahren Sorgen verbergen. Sie hilft jenen, die innere Unruhe und Schmerz mit guter Miene und Ablenkung \u00fcberdecken. Die Bl\u00fcte f\u00fchrt zu echtem Frieden, der auch das Schwere zulassen kann. F\u00fcr die Sieben, die vor Leid in Aktivit\u00e4t und Vorfreude flieht, ist sie eine ehrliche Heilbl\u00fcte. So darf hinter der fr\u00f6hlichen Fassade die wahre Empfindung gef\u00fchlt und gewandelt werden.",
          goal: "Auf der Seelenebene erlaubt es, den inneren Schmerz anzusehen, statt ihn hinter Leichtigkeit zu verbergen \u2013 echte Freude entsteht, wenn auch das Schwere Platz hat.",
        },
        {
          title: "Rauchquarz",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-7/se7/heilmittel/se7-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Erdung und Loslassen von Stress",
          text: "Der Rauchquarz ist eine rauchig-braune Variet\u00e4t des Bergkristalls und gilt als ausgleichender Erdungs- und Anti-Stress-Stein. Er hilft, \u00fcbersch\u00fcssige, nach vorn dr\u00e4ngende Energie zu sammeln, Anspannung abzubauen und Belastendes loszulassen. Traditionell wird er genutzt, um aus Hektik und \u00dcberreizung wieder in Ruhe und Gegenwart zu finden. F\u00fcr die Sieben, die vor Schmerz und Schwere gern nach oben, in Pl\u00e4ne und M\u00f6glichkeiten flieht, ist er ein sanftes Gewicht. So bringt er die sprudelnde Unruhe behutsam zur\u00fcck auf den Boden und macht es leichter, im Hier und Jetzt zu bleiben.",
          goal: "Als energetisches Werkzeug hilft er, loszulassen was nicht mehr n\u00f6tig ist \u2013 Ballast aus Vermeidung, Ablenkung und \u00fcberstimulierter Leichtigkeit darf sich kl\u00e4ren.",
        },
        {
          title: "Pfefferminztee",
          subtitle: "Tee",
          image: "assets/knowledge/type-7/se7/heilmittel/se7-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "erfrischend und kl\u00e4rend",
          text: "Die Pfefferminze ist ein erfrischendes, kl\u00e4rendes Kraut, das Geist und Verdauung anregt. Ihr k\u00fchler Duft belebt, schafft Klarheit und l\u00f6st Schweres und Tr\u00e4ges. Traditionell wird sie bei V\u00f6llegef\u00fchl, M\u00fcdigkeit und zur geistigen Erfrischung getrunken. F\u00fcr die Sieben, deren Geist von Reiz zu Reiz springt, kann sie zugleich kl\u00e4ren und sammeln. So hilft ein Pfefferminztee, den \u00fcberquellenden Kopf zu erfrischen und auf das Wesentliche zu fokussieren.",
          goal: "Als pflanzliche Begleiterin kl\u00e4rt sie den Geist und bringt Frische in festgefahrene Gedankenmuster \u2013 Offenheit statt \u00dcberanalyse.",
        },
        {
          title: "Calcium carbonicum",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/calcarea-carbonica.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Gewonnen aus der Kalkschicht der Austernschale \u2013 dem weichen, verletzlichen Tier, das sich in einer harten Schale birgt. Diese Signatur ist sprechend: ein tiefes Bed\u00fcrfnis nach Sicherheit, Schutz und Nahrung und die Angst, ohne festen Halt \u00fcberw\u00e4ltigt zu werden. Das ist die Wunde der Sieben \u2013 eine Sehnsucht nach Geborgenheit, die hinter Begeisterung und Lebensfreude verborgen liegt. Unter dem sprudelnden Wesen sitzt das weiche Tier, das eine sch\u00fctzende Schale sucht.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als rastlose Suche, Schmerzvermeidung und der Hunger nach Halt zeigt. Es n\u00e4hrt ein Gef\u00fchl innerer Sicherheit, das die Flucht nach vorn \u00fcberfl\u00fcssig macht. So darf die Sieben Geborgenheit in sich selbst finden, statt sie im n\u00e4chsten Reiz zu suchen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Belladonna",
          schuessler: "Natrium phosphoricum",
          bachbluete: "Agrimony",
          edelstein: "Rauchquarz",
          tee: "Pfefferminztee",
        },
        homoeopathieThema: "Die Tollkirsche ist eine Nachtschattenpflanze, deren Bild von Hitze, Fieber, F\u00fclle und gl\u00fchender Erregung gepr\u00e4gt ist. Diese Signatur durchzieht das Mittelbild: eine fiebrige Intensit\u00e4t, ein Drang nach lebhaften, starken Eindr\u00fccken und ein rasches Aufflammen. Genau das lebt in der Sieben \u2013 das Bed\u00fcrfnis, Schmerz zu vermeiden und das Leben in vollen Z\u00fcgen zu erleben, getragen von einem fiebrigen Drang nach mehr M\u00f6glichkeiten, Reizen und Genuss. Wie das Fieber will alles hell, schnell und intensiv sein.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als \u00dcberf\u00fclle, rastlose Getriebenheit und fiebrige Reizsuche zeigt. Es hilft, die \u00fcberschie\u00dfende Erregung zu k\u00fchlen und zur Ruhe zu bringen. So darf die Sieben F\u00fclle genie\u00dfen, ohne von ihr getrieben zu werden.",
        wundeThema: "Gewonnen aus der Kalkschicht der Austernschale \u2013 dem weichen, verletzlichen Tier, das sich in einer harten Schale birgt. Diese Signatur ist sprechend: ein tiefes Bed\u00fcrfnis nach Sicherheit, Schutz und Nahrung und die Angst, ohne festen Halt \u00fcberw\u00e4ltigt zu werden. Das ist die Wunde der Sieben \u2013 eine Sehnsucht nach Geborgenheit, die hinter Begeisterung und Lebensfreude verborgen liegt. Unter dem sprudelnden Wesen sitzt das weiche Tier, das eine sch\u00fctzende Schale sucht.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als rastlose Suche, Schmerzvermeidung und der Hunger nach Halt zeigt. Es n\u00e4hrt ein Gef\u00fchl innerer Sicherheit, das die Flucht nach vorn \u00fcberfl\u00fcssig macht. So darf die Sieben Geborgenheit in sich selbst finden, statt sie im n\u00e4chsten Reiz zu suchen.",
        wunde: {
          homoeopathie: "Calcium carbonicum",
          schuessler: "Natrium phosphoricum",
          bachbluete: "Agrimony",
        },
      },
      woundBehindPassion: {
        passion: "Ma\u00dflosigkeit \u2013 das st\u00e4ndige Suchen nach mehr als Strategie, Schmerz und innerer Leere zu entfliehen. Bei der SE7 richtet sich die V\u00f6llerei auf praktische F\u00fclle: Annehmlichkeiten, Verb\u00fcndete und Vorr\u00e4te, damit es nie an etwas mangelt.",
        belief: "\u201eWenn ich genug angesammelt habe und es mir an nichts fehlt, bin ich sicher.\u201c Darunter: \u201eMangel und Leere sind bedrohlich \u2013 ich muss vorsorgen.\u201c",
        wound: "Die Wunde der Schmerzvermeidung: das Gef\u00fchl, dass tiefere Gef\u00fchle \u2013 besonders Schmerz, Verlust und Begrenztheit \u2013 zu bedrohlich sind, um ihnen zu begegnen. Bei der SE7 wird dies in das Anh\u00e4ufen von Genuss und Sicherheit \u00fcbersetzt.",
        compensation: "Planen, genie\u00dfen, sich vernetzen und absichern \u2013 das Bewusstsein bleibt auf angenehme M\u00f6glichkeiten und Vorsorge gerichtet. Echte Begrenzung und Stille werden umgangen.",
        sufferingCycle: "Die SE7 sucht Erf\u00fcllung im n\u00e4chsten Genuss, der n\u00e4chsten Annehmlichkeit. Kurze Befriedigung weicht dem Bed\u00fcrfnis nach mehr. Die F\u00fclle, die sie sucht, liegt immer einen Schritt weiter.",
        healingDirection: "Erfahren, dass genug genug ist. Heilung beginnt in der F\u00e4higkeit, ganz bei dem zu sein, was gerade ist \u2013 auch in Stille und Begrenzung \u2013 statt immer mehr anzusammeln.",
        remedy: "Wundenmittel: Calcium carbonicum \u00b7 Leidenschaftsmittel: Belladonna \u00b7 Sch\u00fc\u00dfler-Salz: Natrium phosphoricum \u00b7 Bach-Bl\u00fcte: Agrimony. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const se8 = {
      code: "SE8",
      title: "Die selbsterhaltende Acht",
      animal: "Orang-Utan",
      status: "curated_draft",
      pages: "Typ 8 Grundkarte + SE8 Seiten 1-5",
      visualPages: type8VisualPages("SE8", "Selbsterhaltende Acht"),
      organismQuestion: "Wie kann ich meine Grenzen wahren, f\u00fcr mich einstehen und sch\u00fctzen, was mir wichtig ist?",
      subtypeQuestion:
        "Wie kann ich Kraft und Selbstbestimmung leben, ohne Weichheit, Vertrauen oder Verletzlichkeit abzuwehren?",
      integrationSentence: "Ich nutze meine Kraft, um zu sch\u00fctzen, zu gestalten und das Leben zu st\u00e4rken.",
      coreSentence:
        "Wenn du Kontrolle losl\u00e4sst, bleibt deine Kraft lebendig, klar und ohne H\u00e4rte.",
      lifeTheme: [
        "Sicherheit durch Kraft, Kontrolle und Selbstbehauptung suchen.",
        "Unabh\u00e4ngig und unangreifbar bleiben wollen und Verletzlichkeit besonders stark sch\u00fctzen.",
        "Das eigene Leben selbst bestimmen wollen und dabei leicht Weichheit und Vertrauen verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Schambein-Bereich.",
      essence: {
        title: "Integrationspotenzial: Selbstbestimmung & innere St\u00e4rke",
        sentence: "Ich nutze meine Kraft, um zu sch\u00fctzen, zu gestalten und das Leben zu st\u00e4rken.",
        qualities: ["selbstbestimmt", "standhaft", "mutig", "besch\u00fctzend", "vertrauensvolle Kraft"],
      },
      integrationPath: [
        "Weich und offen bleiben, ohne Kontrolle zu verlieren.",
        "Nicht st\u00e4ndig stark oder unangreifbar wirken m\u00fcssen, um sicher zu sein.",
        "Kraft durch Vertrauen, Verletzlichkeit und echte Verbundenheit finden.",
      ],
      turningPoint: [
        "Erkennen, dass Kontrolle und H\u00e4rte von der eigenen Verletzlichkeit abschneiden.",
        "Weicher und empf\u00e4nglicher werden, ohne St\u00e4rke zu verlieren.",
        "Vertrauen ersetzt den dauerhaften inneren Kampf ums \u00dcberleben.",
      ],
      integrativePotential: "Selbstbestimmung & innere St\u00e4rke",
      integratedState: [
        "St\u00e4rke bewusst nutzen, ohne st\u00e4ndig kontrollieren oder k\u00e4mpfen zu m\u00fcssen.",
        "Vertrauen, Offenheit und echte Verletzlichkeit erlauben.",
        "Kraft wird ruhig und lebendig zugleich.",
      ],
      bodySignature: {
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Schambein-Bereich", location: "auf dem Schambein", need: [
              "Urvertrauen",
              "Erdung",
              "Schutz",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Innere St\u00e4rke, Standhaftigkeit, Mut, Entschlossenheit, Loyalit\u00e4t, Schutzinstinkt und Gerechtigkeit.",
      },
      unconsciousStrategy: [
        "Sicherheit \u00fcber Autonomie, Selbstbehauptung und Unabh\u00e4ngigkeit herstellen.",
        "Bed\u00fcrftigkeit und Abh\u00e4ngigkeit konsequent vermeiden.",
        "Sich \u00fcber Kontrolle und handfeste St\u00e4rke stabilisieren, auch wenn N\u00e4he fehlt.",
      ],
      tensionFields: [
        "Kontrolle \u2192 Vertrauen",
        "H\u00e4rte \u2192 lebendige Kraft",
        "Autonomie \u2192 Verbundenheit",
        "Unabh\u00e4ngigkeit \u2192 Annehmen-K\u00f6nnen",
        "Panzer \u2192 Offenheit",
        "St\u00e4rke \u2192 Verletzlichkeit",
        "Distanz \u2192 N\u00e4he",
        "\u00dcberleben \u2192 Leben",
        "Selbstgen\u00fcgsamkeit \u2192 Verbindung",
      ],
      archetypalEssence: "Unabh\u00e4ngige Lebenskraft",
      nervousSystemRegulation: [
        "die weiche Seite bewusst zulassen",
        "Unterst\u00fctzung annehmen statt alles allein zu tragen",
        "Anspannung im K\u00f6rper l\u00f6sen",
        "den Atem tief und langsam f\u00fchren",
        "Kontrolle schrittweise loslassen",
        "Verletzlichkeit als St\u00e4rke erleben",
        "Ruhe statt Daueralarm zulassen",
        "echte N\u00e4he riskieren",
      ],
      contentModules: [
        {
          title: "Typ 8 \u00b7 Grundkarte",
          intro: "Die Typ-8-Grundkarte bildet die gemeinsame Grundlage aller Acht-Subtypen. Im Zentrum stehen Kraft, Selbstbehauptung und der Schutz der eigenen Grenzen. Der K\u00f6rper organisiert sich auf Pr\u00e4senz, Standfestigkeit und Bereitschaft zum Widerstand.",
          entries: [
            { label: "Grundthema", text: "Macht & Kontrolle. Typ 8 richtet Aufmerksamkeit auf St\u00e4rke, Gerechtigkeit und Selbstbestimmung und sch\u00fctzt die eigene Verletzlichkeit." },
            { label: "Organismusfrage", text: "Wie kann ich meine Grenzen wahren, f\u00fcr mich einstehen und sch\u00fctzen, was mir wichtig ist?" },
            { label: "Innerer Konflikt", text: "St\u00e4rke und Verletzlichkeit stehen gegeneinander: der Drang, unangreifbar und m\u00e4chtig zu sein, gegen\u00fcber der verborgenen weichen, schutzbed\u00fcrftigen Seite." },
            { label: "K\u00f6rperorganisation", text: "Stabil, geerdet und mit breiter Basis. Fest verankert und schwer aus dem Gleichgewicht zu bringen, Schultern breit und leicht nach vorn \u2014 bereit zu handeln." },
            { label: "Blickqualit\u00e4t", text: "Geradlinig, kontrollierend und direkt. Der Blick h\u00e4lt dem Gegen\u00fcber stand, pr\u00fcft und weicht nicht aus." },
            { label: "Mikrospannung", text: "Reduzierte, wachsame Mimik, oft fester Kiefer als Ausdruck innerer Selbstbeherrschung." },
            { label: "Atemrhythmus", text: "Tief und kraftvoll, ruhig gehalten; stockt bei Bedrohung und verdichtet sich bei Konfrontation." },
            { label: "Bewegungsinitiierung", text: "Sparsam, funktional und kr\u00e4ftig. Jede Geste hat Gewicht \u2014 entschlossen, nie fahrig." },
            { label: "Kontaktstil", text: "Tief, trocken und direkt. Spricht klar und mit Nachdruck, ohne Umschweife; nah in der Pr\u00e4senz, oft distanziert im Gef\u00fchl." },
            { label: "Spannungsverteilung", text: "Konzentrierte Kraft im Rumpf, im unteren R\u00fccken und im Bauchraum \u2014 eine innere R\u00fcstung gegen Schw\u00e4che und \u00dcbergriff." },
            { label: "Integrationsweg", text: "Von der H\u00e4rte zur Kraft, die sich \u00f6ffnen darf. Von der Kontrolle zum Vertrauen. St\u00e4rke, die Verletzlichkeit zul\u00e4sst." },
            { label: "Archetypisches Tier", text: "Nashorn: Kraft, Standfestigkeit, Drucktoleranz, Entschlossenheit und Schutz. Das Nashorn steht f\u00fcr den Weg von harter Kontrolle zur tragenden, verantwortungsvollen St\u00e4rke." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SE8 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 8", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 8", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 8", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 8 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 8", youtubeVideoId: "T33JfmnS3nQ" },
          { title: "Typ 8 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 8", youtubeVideoId: "OAsfvExdYtw" },
          { title: "Type 8 \u00b7 English Theme Song", category: "Song 2", scope: "Type 8", youtubeVideoId: "NlH4t8RvEfI" },
          { title: "SE8 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SE8", youtubeVideoId: "w-l6Otm34QU" },
          { title: "SE8 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SE8", youtubeVideoId: "PTwXfWpA5sk" },
          { title: "SE8 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SE8", youtubeVideoId: "44TD-meNBt4" },
          { title: "SE8 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SE8", youtubeVideoId: "tdXdVftkUO8" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Veratrum album",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-8/se8/heilmittel/se8-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Der Wei\u00dfe Germer ist eine kraftvolle, giftige Gebirgspflanze, deren Bild von Gr\u00f6\u00dfe, Anspruch und pl\u00f6tzlichem Zusammenbruch gepr\u00e4gt ist. Ihre Signatur zeigt einen m\u00e4chtigen Drang nach Ausweitung, Einfluss und \u00dcberlegenheit \u2013 bis hin zu H\u00e4rte und Hochmut. Genau das pr\u00e4gt die Leidenschaft der Acht \u2013 das Bed\u00fcrfnis, stark, unabh\u00e4ngig und unangreifbar zu sein, getragen von einem m\u00e4chtigen inneren Drang nach Kontrolle. Die Kraft will sich ausdehnen und alles in der Hand behalten.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als ma\u00dflose Expansion, \u00dcbersteigerung und das Erzwingen von Kontrolle zeigt. Es hilft, die \u00fcberschie\u00dfende Kraft zu m\u00e4\u00dfigen, ohne die St\u00e4rke zu verlieren. So darf die Acht f\u00fchren und sch\u00fctzen, ohne sich und andere zu \u00fcberfordern.",
        },
        {
          title: "Calcium fluoratum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-8/se8/heilmittel/se8-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Festigkeit und Elastizit\u00e4t zugleich",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 1 verbindet Festigkeit mit Elastizit\u00e4t \u2013 es st\u00e4rkt B\u00e4nder, Zahnschmelz und Bindegewebe. Es gibt Struktur, die zugleich beweglich und tragf\u00e4hig bleibt. Auf seelischer Ebene steht es f\u00fcr Stabilit\u00e4t, die nicht zur Verh\u00e4rtung wird. F\u00fcr die Acht, die sich mit H\u00e4rte und Kontrolle gegen jede Schw\u00e4che panzert, ist genau das die Heilrichtung. So unterst\u00fctzt es echte Kraft, die auch Weichheit und Beweglichkeit zul\u00e4sst, statt nur zu sch\u00fctzen.",
          goal: "Auf der Mineralstoff-Ebene verbindet es St\u00e4rke mit Anpassungsf\u00e4higkeit \u2013 es hilft, den Panzer aus \u00dcberlegenheit und H\u00e4rte in eine nat\u00fcrliche Widerstandskraft zu wandeln.",
        },
        {
          title: "Vine",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-8/se8/heilmittel/se8-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "St\u00e4rke und F\u00fchrung ohne Dominanz",
          text: "Vine ist die Bachbl\u00fcte f\u00fcr starke, dominante Naturen, die f\u00fchren, bestimmen und ungern Schw\u00e4che zeigen. Sie hilft jenen, deren Kraft leicht in H\u00e4rte und Kontrolle \u00fcber andere kippt. Die Bl\u00fcte wandelt Machtanspruch in eine starke, aber respektvolle und dienende F\u00fchrung. F\u00fcr die Acht, die St\u00e4rke als Schutz vor Verletzlichkeit braucht, ist sie eine reife Heilrichtung. So darf Kraft f\u00fchren, ohne zu beherrschen, und Raum f\u00fcr andere lassen.",
          goal: "Auf der Seelenebene wandelt es Macht, die dominiert, in St\u00e4rke, die erm\u00e4chtigt \u2013 F\u00fchrung ohne Kontrolle, St\u00e4rke ohne \u00dcberw\u00e4ltigung.",
        },
        {
          title: "Fluorit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-8/se8/heilmittel/se8-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Klarheit, Ordnung und Konzentration",
          text: "Der Fluorit ist ein klarer, vielfarbig schimmernder Stein und gilt als Ordnungs- und Klarheitsstein des Geistes. Er hilft, Gedanken zu strukturieren, Konzentration zu b\u00fcndeln und innere wie \u00e4u\u00dfere Unordnung zu kl\u00e4ren. Zugleich gilt er als l\u00f6send: Er weicht H\u00e4rte und Verkrampfung auf und schafft inneren Freiraum. F\u00fcr die Acht, die sich mit Kontrolle und St\u00e4rke gegen jede Schw\u00e4che panzert, \u00f6ffnet er einen sanfteren Weg. So darf hinter der harten Schale wieder Klarheit, Beweglichkeit und ein St\u00fcck Weichheit Platz finden \u2013 ohne dass sich das bedrohlich anf\u00fchlt.",
          goal: "Als energetisches Werkzeug strukturiert er das innere Chaos und bringt mentale Klarheit \u2013 St\u00e4rke darf sich zeigen ohne die R\u00fcstung.",
        },
        {
          title: "Ingwertee",
          subtitle: "Tee",
          image: "assets/knowledge/type-8/se8/heilmittel/se8-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "w\u00e4rmend und anregend",
          text: "Ingwer ist eine w\u00e4rmende, kraftvoll anregende Wurzel, die Durchblutung und Lebensfeuer f\u00f6rdert. Ihr scharf-w\u00fcrziger Charakter weckt Energie, Tatkraft und innere W\u00e4rme. Traditionell wird sie zur St\u00e4rkung, Erw\u00e4rmung und Belebung eingesetzt. F\u00fcr die Acht, die voller Kraft und Schutzimpuls ist, passt ihre warme, klare Energie. So hilft ein Ingwertee, die starke Kraft mit W\u00e4rme zu verbinden statt mit H\u00e4rte.",
          goal: "Als pflanzliche Begleiterin w\u00e4rmt und belebt sie: Kraft, die sich nicht mehr hinter Dominanz verbergen muss, sondern sich als nat\u00fcrliche St\u00e4rke zeigt.",
        },
        {
          title: "Veratrum album",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/veratrum-album.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Auch die Wunde der Acht tr\u00e4gt die Signatur des Wei\u00dfen Germers: hinter gro\u00dfer St\u00e4rke der drohende Kollaps. Sein Bild kennt den Zusammenbruch in K\u00e4lte und Ersch\u00f6pfung, wenn die erzwungene Gr\u00f6\u00dfe nicht mehr tr\u00e4gt. Das ist die Wunde der Verletzlichkeit \u2013 eine tiefe Angst vor Ohnmacht und Dem\u00fctigung, die sich hinter dem Streben nach St\u00e4rke und Kontrolle verbirgt. Unter dem Panzer liegt die Angst, schwach und ausgeliefert zu sein.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als H\u00e4rte, Kontrollzwang und die Abwehr jeder Schw\u00e4che zeigt. Es hilft, die Verletzlichkeit nicht l\u00e4nger bek\u00e4mpfen zu m\u00fcssen, sondern sie als Teil echter St\u00e4rke zuzulassen. So darf hinter der H\u00e4rte wieder Weichheit und Ber\u00fchrbarkeit entstehen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Veratrum album",
          schuessler: "Calcium fluoratum",
          bachbluete: "Vine",
          edelstein: "Fluorit",
          tee: "Ingwertee",
        },
        homoeopathieThema: "Der Wei\u00dfe Germer ist eine kraftvolle, giftige Gebirgspflanze, deren Bild von Gr\u00f6\u00dfe, Anspruch und pl\u00f6tzlichem Zusammenbruch gepr\u00e4gt ist. Ihre Signatur zeigt einen m\u00e4chtigen Drang nach Ausweitung, Einfluss und \u00dcberlegenheit \u2013 bis hin zu H\u00e4rte und Hochmut. Genau das pr\u00e4gt die Leidenschaft der Acht \u2013 das Bed\u00fcrfnis, stark, unabh\u00e4ngig und unangreifbar zu sein, getragen von einem m\u00e4chtigen inneren Drang nach Kontrolle. Die Kraft will sich ausdehnen und alles in der Hand behalten.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als ma\u00dflose Expansion, \u00dcbersteigerung und das Erzwingen von Kontrolle zeigt. Es hilft, die \u00fcberschie\u00dfende Kraft zu m\u00e4\u00dfigen, ohne die St\u00e4rke zu verlieren. So darf die Acht f\u00fchren und sch\u00fctzen, ohne sich und andere zu \u00fcberfordern.",
        wundeThema: "Auch die Wunde der Acht tr\u00e4gt die Signatur des Wei\u00dfen Germers: hinter gro\u00dfer St\u00e4rke der drohende Kollaps. Sein Bild kennt den Zusammenbruch in K\u00e4lte und Ersch\u00f6pfung, wenn die erzwungene Gr\u00f6\u00dfe nicht mehr tr\u00e4gt. Das ist die Wunde der Verletzlichkeit \u2013 eine tiefe Angst vor Ohnmacht und Dem\u00fctigung, die sich hinter dem Streben nach St\u00e4rke und Kontrolle verbirgt. Unter dem Panzer liegt die Angst, schwach und ausgeliefert zu sein.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als H\u00e4rte, Kontrollzwang und die Abwehr jeder Schw\u00e4che zeigt. Es hilft, die Verletzlichkeit nicht l\u00e4nger bek\u00e4mpfen zu m\u00fcssen, sondern sie als Teil echter St\u00e4rke zuzulassen. So darf hinter der H\u00e4rte wieder Weichheit und Ber\u00fchrbarkeit entstehen.",
        wunde: {
          homoeopathie: "Veratrum album",
          schuessler: "Calcium fluoratum",
          bachbluete: "Oak",
        },
      },
      woundBehindPassion: {
        passion: "Wollust \u2013 eine intensive Kraft, die sich als Drang nach St\u00e4rke, Kontrolle und Intensit\u00e4t zeigt. Bei der SE8 richtet sich diese Kraft auf Autonomie und \u00dcberleben: das handfeste Sichern der eigenen Bed\u00fcrfnisse, ohne von jemandem abh\u00e4ngig zu sein.",
        belief: "\u201eSchw\u00e4che ist gef\u00e4hrlich \u2013 ich muss autark sein, um sicher zu sein.\u201c Darunter: \u201eWer auf andere angewiesen ist oder Bed\u00fcrftigkeit zeigt, macht sich angreifbar.\u201c",
        wound: "Die Wunde der Verletzlichkeit: das tiefe Gef\u00fchl, dass das eigene Verletzt-werden-K\u00f6nnen bedrohlich ist. Bei der SE8 wird die Verletzlichkeit hinter Unabh\u00e4ngigkeit und Selbstgen\u00fcgsamkeit besonders gr\u00fcndlich verborgen.",
        compensation: "Autonomie, Direktheit und das eigenst\u00e4ndige Erf\u00fcllen aller Bed\u00fcrfnisse. Die SE8 vermeidet Abh\u00e4ngigkeit und Situationen, die Hilflosigkeit erzeugen k\u00f6nnten. Die R\u00fcstung sch\u00fctzt \u2013 und isoliert.",
        sufferingCycle: "Die Angst vor Verletzlichkeit erzeugt Kontrolle. Die Kontrolle erzeugt Distanz. Die Distanz verhindert tiefe Verbundenheit. Das Fehlen echter N\u00e4he best\u00e4tigt die Notwendigkeit der St\u00e4rke.",
        healingDirection: "Verletzlichkeit nicht als Schw\u00e4che, sondern als Zugang zu echter Kraft entdecken. Erfahren, dass Annehmen und Sich-Verlassen-K\u00f6nnen nicht schw\u00e4chen, sondern verbinden.",
        remedy: "Wundenmittel: Veratrum album \u00b7 Leidenschaftsmittel: Veratrum album \u00b7 Sch\u00fc\u00dfler-Salz: Calcium fluoratum \u00b7 Bach-Bl\u00fcte: Oak. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const se9 = {
      code: "SE9",
      title: "Die selbsterhaltende Neun",
      animal: "Elefant",
      status: "curated_draft",
      pages: "Typ 9 Grundkarte + SE9 Seiten 1-5",
      visualPages: type9VisualPages("SE9", "Selbsterhaltende Neun"),
      organismQuestion: "Wie kann ich in Frieden bleiben und Harmonie bewahren, in mir und um mich herum?",
      subtypeQuestion:
        "Wie kann ich Ruhe und Stabilit\u00e4t bewahren, ohne mich selbst zu bet\u00e4uben oder unsichtbar zu machen?",
      integrationSentence: "Ich nutze meine Kraft, um in innerem Frieden zu leben und das Leben bewusst zu gestalten.",
      coreSentence:
        "Wenn du dich selbst wichtig nimmst und nicht bet\u00e4ubst, entsteht lebendige innere Pr\u00e4senz.",
      lifeTheme: [
        "Ruhe, Stabilit\u00e4t und angenehme Sicherheit im Alltag suchen.",
        "Spannungen vermeiden und sich harmonisch anpassen wollen.",
        "Frieden und innere Balance bewahren wollen und dabei leicht die eigene Klarheit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und suprapubischer Bereich.",
      essence: {
        title: "Integrationspotenzial: Innere Ruhe & stabile Pr\u00e4senz",
        sentence: "Ich nutze meine Kraft, um in innerem Frieden zu leben und das Leben bewusst zu gestalten.",
        qualities: ["ruhig", "geerdet", "standhaft", "weise", "lebendige Selbstpr\u00e4senz"],
      },
      integrationPath: [
        "Sich klar zeigen und die eigenen Bed\u00fcrfnisse ernst nehmen.",
        "Sich nicht anpassen oder zur\u00fccknehmen m\u00fcssen, um Frieden zu bewahren.",
        "Ruhe durch Pr\u00e4senz, Selbstkontakt und lebendige innere Klarheit finden.",
      ],
      turningPoint: [
        "Erkennen, dass R\u00fcckzug, Gewohnheit und innere Tr\u00e4gheit die Lebendigkeit blockieren.",
        "Bewusster auf die eigenen Impulse und Bed\u00fcrfnisse achten.",
        "Pr\u00e4senz ersetzt Passivit\u00e4t und Selbstvergessenheit.",
      ],
      integrativePotential: "Innere Ruhe & stabile Pr\u00e4senz",
      integratedState: [
        "Ruhig und gelassen bleiben, ohne sich in Gewohnheit oder Passivit\u00e4t zu verlieren.",
        "Eigene Impulse und Bed\u00fcrfnisse bewusst wahrnehmen.",
        "Energie wird stabil und lebendig, innere Ruhe verbindet sich mit Klarheit und Handlungskraft.",
      ],
      bodySignature: {
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen / Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Suprapubischer Bereich", location: "knapp oberhalb des Schambeins", need: [
              "Ruhe",
              "Harmonie",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Weisheit, Erfahrung, Verantwortung, Gerechtigkeit, Geduld, Standhaftigkeit, Schutz und F\u00fcrsorge.",
      },
      unconsciousStrategy: [
        "Frieden \u00fcber Komfort, Routinen und vertraute Gewohnheiten sichern.",
        "Innere Spannung mit Ersatzbefriedigungen bet\u00e4uben.",
        "Sich \u00fcber Behaglichkeit stabilisieren, w\u00e4hrend die eigenen W\u00fcnsche verblassen.",
      ],
      tensionFields: [
        "Gewohnheit \u2192 lebendige Pr\u00e4senz",
        "Bet\u00e4ubung \u2192 Selbstkontakt",
        "Tr\u00e4gheit \u2192 ruhige Handlungskraft",
        "Komfort \u2192 Lebendigkeit",
        "Ersatzbefriedigung \u2192 echte Erf\u00fcllung",
        "Vermeidung \u2192 Klarheit",
        "Passivit\u00e4t \u2192 Impuls",
        "R\u00fcckzug \u2192 Kontakt",
        "D\u00e4mmer \u2192 Wachheit",
      ],
      archetypalEssence: "Geerdete innere Ruhe",
      nervousSystemRegulation: [
        "eigene Impulse und Bed\u00fcrfnisse bewusst sp\u00fcren",
        "bewusst aus der Routine heraustreten",
        "den K\u00f6rper aktiv bewegen statt zu erstarren",
        "den Atem belebend vertiefen",
        "Ersatzbefriedigungen bemerken statt ihnen automatisch zu folgen",
        "sich selbst wichtig nehmen",
        "Wachheit statt Bet\u00e4ubung w\u00e4hlen",
        "Pr\u00e4senz im Moment kultivieren",
      ],
      contentModules: [
        {
          title: "Typ 9 \u00b7 Grundkarte",
          intro: "Die Typ-9-Grundkarte bildet die gemeinsame Grundlage aller Neun-Subtypen. Im Zentrum stehen Frieden, Harmonie und die Vermeidung von Konflikt und Reiz\u00fcberflutung. Der K\u00f6rper organisiert sich auf Ruhe, Schonung und Nachgiebigkeit.",
          entries: [
            { label: "Grundthema", text: "Weisheit & Frieden. Typ 9 richtet Aufmerksamkeit auf Harmonie, innere Ruhe und Ausgleich und vermeidet Konflikt, Spannung und Aufruhr." },
            { label: "Organismusfrage", text: "Wie kann ich in Frieden bleiben und Harmonie bewahren, in mir und um mich herum?" },
            { label: "Innerer Konflikt", text: "Frieden und Selbstpr\u00e4senz stehen gegeneinander: das Bed\u00fcrfnis nach Ruhe und Harmonie gegen\u00fcber dem Risiko, sich selbst dabei zu vergessen." },
            { label: "K\u00f6rperorganisation", text: "Entspannt, weich und nach innen gezogen, oft etwas in sich ruhend. Geringe Spannkraft, ein gem\u00e4chlicher, flie\u00dfender Gang." },
            { label: "Blickqualit\u00e4t", text: "Sanft, ruhig und friedlich, manchmal tr\u00e4umerisch oder mit einem leichten Schleier. Wenig Fokus nach au\u00dfen." },
            { label: "Mikrospannung", text: "Milde, ausgeglichene Mimik ohne gro\u00dfe Ausdrucksspitzen; emotionale Reaktionen werden eher ged\u00e4mpft als gezeigt." },
            { label: "Atemrhythmus", text: "Ruhig, tief und kaum h\u00f6rbar \u2014 k\u00f6rperlicher Ausdruck des inneren Friedensbed\u00fcrfnisses." },
            { label: "Bewegungsinitiierung", text: "Reduziert, langsam und flie\u00dfend. Gesten sind rund und beil\u00e4ufig, nie pointiert oder dominierend." },
            { label: "Kontaktstil", text: "Ged\u00e4mpft, freundlich und verbindlich, oft ohne klare Stellungnahme. Berichtend statt wertend, einladend statt fordernd." },
            { label: "Spannungsverteilung", text: "Geringe Grundspannung, besonders im Oberk\u00f6rper \u2014 ein passives Loslassen, das Frieden und Reizvermeidung dient." },
            { label: "Integrationsweg", text: "Von der Selbstvergessenheit zur Selbstpr\u00e4senz. Von der Tr\u00e4gheit zur lebendigen Ruhe. Sich selbst wichtig nehmen." },
            { label: "Archetypisches Tier", text: "Schildkr\u00f6te: innere Stabilit\u00e4t, Ruhe, Konflikttoleranz, Ausdauer und Ausgleich. Die Schildkr\u00f6te steht f\u00fcr den Weg von der Selbstvergessenheit zur ruhig anwesenden Pr\u00e4senz." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SE9 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 9", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 9", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 9", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 9 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 9", youtubeVideoId: "XmpATw12x34" },
          { title: "Typ 9 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 9", youtubeVideoId: "hJXifCvw4LI" },
          { title: "Type 9 \u00b7 English Theme Song", category: "Song 2", scope: "Type 9", youtubeVideoId: "EZ_WLg8nDpA" },
          { title: "SE9 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SE9", youtubeVideoId: "X7Vw6jtKNMY" },
          { title: "SE9 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SE9", youtubeVideoId: "XWwqegFjgXM" },
          { title: "SE9 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SE9", youtubeVideoId: "_l-CH4kXIiQ" },
          { title: "SE9 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SE9", youtubeVideoId: "wQ4FxnKfFko" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Cannabis indica",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-9/se9/heilmittel/se9-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Der indische Hanf ruft Bilder von Vernebelung, traumartiger Ferne und einem seligen Verschwimmen von Zeit und Raum hervor. Diese Signatur pr\u00e4gt das Mittelbild: ein Abtauchen aus der scharfen Wirklichkeit in eine weiche, konfliktfreie Benommenheit. Genau das lebt in der Neun \u2013 das Bed\u00fcrfnis nach Frieden und Harmonie, getragen vom Wunsch, Konflikt, Spannung und Aufruhr zu vermeiden. Die Welt wird weichgezeichnet, damit nichts mehr wehtut oder reibt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Vernebelung, Selbstvergessenheit und das Abtauchen aus der eigenen Pr\u00e4senz zeigt. Es hilft, wieder klarer und wacher gegenw\u00e4rtig zu werden. So darf die Neun aus dem Nebel auftauchen und sich selbst wieder sp\u00fcren.",
        },
        {
          title: "Natrium sulfuricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-9/se9/heilmittel/se9-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Ausscheidung und Loslassen von Belastendem",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 10 ist das gro\u00dfe Salz der Ausscheidung und des Loslassens. Es unterst\u00fctzt Leber, Galle und die Entgiftung und hilft, Belastendes aus dem System zu schaffen. Auf seelischer Ebene steht es f\u00fcr Kl\u00e4rung, Bewegung und das Verabschieden von Altem. F\u00fcr die Neun, die sich in Tr\u00e4gheit und Selbstvergessenheit einrichten kann, bringt es heilsamen Antrieb. So unterst\u00fctzt es, ins Handeln zu kommen und den eigenen Platz aktiv einzunehmen.",
          goal: "Auf der Mineralstoff-Ebene f\u00f6rdert es die Ausscheidung angesammelter Schwere \u2013 Resignation, R\u00fcckzug und das tr\u00e4ge Festhalten an alten Mustern k\u00f6nnen sich l\u00f6sen.",
        },
        {
          title: "Wild Rose",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-9/se9/heilmittel/se9-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "aus Resignation zu lebendiger Teilnahme",
          text: "Wild Rose ist die Bachbl\u00fcte f\u00fcr Resignation, innere Gleichg\u00fcltigkeit und das Sich-Abfinden mit dem, was ist. Sie hilft jenen, die ohne Klage, aber auch ohne Lebensfreude einfach hinnehmen. Die Bl\u00fcte weckt neue Lebenslust, Interesse und aktive Teilnahme. F\u00fcr die Neun, die sich in Tr\u00e4gheit und Selbstvergessenheit verliert, ist sie ein sanfter Funke. So darf aus stiller Ergebung wieder lebendiges, engagiertes Dasein werden.",
          goal: "Auf der Seelenebene weckt es die schlummernde Lebensenergie: aus Resignation und innerem R\u00fcckzug zur\u00fcck zur eigenen Stimme, zu Wunsch und Richtung.",
        },
        {
          title: "Karneol",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-9/se9/heilmittel/se9-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Lebenskraft, Mut und warme Pr\u00e4senz",
          text: "Der Karneol ist ein warm-orange bis r\u00f6tlich leuchtender Chalcedon und ein klassischer Stein der Lebenskraft, des Mutes und der Tatkraft. Seine warme Farbe steht f\u00fcr Vitalit\u00e4t, W\u00e4rme und eine kr\u00e4ftige, f\u00fchlbare Pr\u00e4senz. Er aktiviert, ermutigt und st\u00e4rkt den eigenen Willen und die Freude am Handeln. F\u00fcr die Neun, die sich leicht selbst vergisst, einschl\u00e4ft und meint, keine Rolle zu spielen, ist er ein sanfter Weckruf. So hilft er, aus Tr\u00e4gheit und Selbstvergessenheit aufzutauchen, den eigenen Platz einzunehmen und sp\u00fcrbar ins Leben zu treten.",
          goal: "Als energetisches Werkzeug weckt er die Lebensenergie aus der Stille \u2013 innere Tr\u00e4gheit und Selbstvergessenheit weichen einem sanften, klaren Lebensimpuls.",
        },
        {
          title: "Fencheltee",
          subtitle: "Tee",
          image: "assets/knowledge/type-9/se9/heilmittel/se9-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "entspannend und ausgleichend",
          text: "Fenchel ist ein mildes, entspannendes und ausgleichendes Kraut mit wohltuender Wirkung. Er beruhigt sanft und harmonisiert, ohne zu d\u00e4mpfen. Traditionell wird er bei Unruhe und zur Beruhigung des Bauches getrunken. F\u00fcr die Neun, die Harmonie und Ruhe sucht, ist er ein vertrauter Begleiter \u2013 mit dem Hinweis, dass Ruhe nicht in Tr\u00e4gheit kippen muss. So hilft ein Fencheltee, eine entspannte Gelassenheit zu finden, die wach und pr\u00e4sent bleibt.",
          goal: "Als pflanzliche Begleiterin entspannt sie ohne zu bet\u00e4uben \u2013 eine sanfte Einladung, aus der inneren Stummheit in sp\u00fcrbare Lebendigkeit zur\u00fcckzukehren.",
        },
        {
          title: "Staphysagria",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/staphysagria.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus dem Stephanskraut, einem Rittersporngew\u00e4chs \u2013 das gro\u00dfe Mittel f\u00fcr unterdr\u00fcckten \u00c4rger und verletzte W\u00fcrde. Seine Signatur ist der heruntergeschluckte Zorn: erlittene Kr\u00e4nkungen und Grenzverletzungen, die freundlich hingenommen statt ausgesprochen werden, bis es irgendwann herausbricht. Das ist die Wunde der Selbstvergessenheit der Neun \u2013 getragen von unterdr\u00fccktem \u00c4rger und nicht benannten Grenz\u00fcberschreitungen. Aus Friedfertigkeit schweigt die Seele \u00fcber das, was sie verletzt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anpassung, Schweigen und der verlorene Kontakt zur eigenen Grenze zeigt. Es hilft, berechtigten \u00c4rger zu f\u00fchlen und Grenzen klar zu vertreten. So darf die Neun wieder f\u00fcr sich einstehen und pr\u00e4sent werden.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Cannabis indica",
          schuessler: "Natrium sulfuricum",
          bachbluete: "Wild Rose",
          edelstein: "Karneol",
          tee: "Fencheltee",
        },
        homoeopathieThema: "Der indische Hanf ruft Bilder von Vernebelung, traumartiger Ferne und einem seligen Verschwimmen von Zeit und Raum hervor. Diese Signatur pr\u00e4gt das Mittelbild: ein Abtauchen aus der scharfen Wirklichkeit in eine weiche, konfliktfreie Benommenheit. Genau das lebt in der Neun \u2013 das Bed\u00fcrfnis nach Frieden und Harmonie, getragen vom Wunsch, Konflikt, Spannung und Aufruhr zu vermeiden. Die Welt wird weichgezeichnet, damit nichts mehr wehtut oder reibt.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Vernebelung, Selbstvergessenheit und das Abtauchen aus der eigenen Pr\u00e4senz zeigt. Es hilft, wieder klarer und wacher gegenw\u00e4rtig zu werden. So darf die Neun aus dem Nebel auftauchen und sich selbst wieder sp\u00fcren.",
        wundeThema: "Bereitet aus dem Stephanskraut, einem Rittersporngew\u00e4chs \u2013 das gro\u00dfe Mittel f\u00fcr unterdr\u00fcckten \u00c4rger und verletzte W\u00fcrde. Seine Signatur ist der heruntergeschluckte Zorn: erlittene Kr\u00e4nkungen und Grenzverletzungen, die freundlich hingenommen statt ausgesprochen werden, bis es irgendwann herausbricht. Das ist die Wunde der Selbstvergessenheit der Neun \u2013 getragen von unterdr\u00fccktem \u00c4rger und nicht benannten Grenz\u00fcberschreitungen. Aus Friedfertigkeit schweigt die Seele \u00fcber das, was sie verletzt.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anpassung, Schweigen und der verlorene Kontakt zur eigenen Grenze zeigt. Es hilft, berechtigten \u00c4rger zu f\u00fchlen und Grenzen klar zu vertreten. So darf die Neun wieder f\u00fcr sich einstehen und pr\u00e4sent werden.",
        wunde: {
          homoeopathie: "Staphysagria",
          schuessler: "Natrium sulfuricum",
          bachbluete: "Wild Rose",
        },
      },
      woundBehindPassion: {
        passion: "Tr\u00e4gheit \u2013 nicht als k\u00f6rperliche Faulheit, sondern als eine innere Bewegungslosigkeit, die das eigene Erleben in den Hintergrund treten l\u00e4sst. Bei der SE9 zeigt sie sich als R\u00fcckzug in Komfort, Routine und Ersatzbefriedigungen.",
        belief: "\u201eSolange es bequem und gewohnt ist, ist alles in Ordnung.\u201c Darunter: \u201eWenn ich aus meiner Routine heraustrete und etwas will, gef\u00e4hrde ich meinen Frieden.\u201c",
        wound: "Die Wunde der Selbstvergessenheit: das tiefe Muster, sich selbst unsichtbar zu machen, um Konflikte zu vermeiden und Harmonie zu bewahren. Bei der SE9 wird das Eigene unter Gewohnheit und Behaglichkeit begraben.",
        compensation: "Routine, Komfort und angenehme Ablenkungen \u2013 Essen, Besch\u00e4ftigung, Vertrautes bet\u00e4uben die innere Leere. Das Eigene wird zur\u00fcckgestellt, damit die gewohnte Ruhe erhalten bleibt.",
        sufferingCycle: "Die SE9 h\u00e4lt Gewohntes aufrecht und bet\u00e4ubt Spannung mit Ersatzbefriedigungen. Dadurch wird sie sich selbst immer unsichtbarer. Die Behaglichkeit sch\u00fctzt den Frieden, verhindert aber echte Lebendigkeit.",
        healingDirection: "Wieder sp\u00fcren, dass die eigene Pr\u00e4senz z\u00e4hlt. Heilung beginnt nicht mit mehr Aktivit\u00e4t, sondern mit mehr Bewusstsein daf\u00fcr, was man selbst erlebt, braucht und m\u00f6chte \u2013 jenseits der gewohnten Behaglichkeit.",
        remedy: "Wundenmittel: Staphysagria \u00b7 Leidenschaftsmittel: Cannabis indica \u00b7 Sch\u00fc\u00dfler-Salz: Natrium sulfuricum \u00b7 Bach-Bl\u00fcte: Wild Rose. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const so1 = {
      code: "SO1",
      title: "Die soziale Eins",
      animal: "Gans",
      status: "curated_draft",
      pages: "Typ 1 Grundkarte + SO1 Seiten 1-5",
      organismQuestion: "Wie kann ich richtig sein und Fehler vermeiden?",
      subtypeQuestion:
        "Wie kann ich Orientierung und Integrit\u00e4t geben, ohne andere oder mich selbst zu verurteilen?",
      integrationSentence: "Wahre Ver\u00e4nderung entsteht aus Weisheit, nicht aus Urteil.",
      coreSentence:
        "Wenn du Vorbild bist, ohne zu richten, entsteht W\u00fcrde, Klarheit und nat\u00fcrliche Autorit\u00e4t.",
      visualPages: [
        {
          title: "Typ 1 \u00b7 \u00dcberblick",
          caption: "Grundthema, K\u00f6rperorganisation, Organismusfrage und archetypisches Tier.",
          src: "assets/knowledge/type-1/type-1-overview.jpeg",
          alt: "Typ 1 \u00dcberblick mit Grundthema Richtig und Falsch, K\u00f6rperorganisation und Adler-Archetyp",
        },
        {
          title: "SO1 \u00b7 Seite 1",
          caption: "Subtyp-Profil mit Prototypen, Organismusfrage, Blickqualit\u00e4t und Spannungsverteilung.",
          src: "assets/knowledge/type-1/so1/so1-page-1.jpeg",
          alt: "SO1 Seite 1 mit Grundthema Integrit\u00e4t und Ordnung im sozialen Feld",
        },
        {
          title: "SO1 \u00b7 Seite 2",
          caption: "2-Punkte-Integration mit Handpositionen, Lebensthema und Kernpraxis.",
          src: "assets/knowledge/type-1/so1/so1-page-2.jpeg",
          alt: "SO1 Seite 2 mit Zwei-Punkte-Integration und Handpositionen",
        },
        {
          title: "SO1 \u00b7 Seite 3",
          caption: "K\u00f6rperarbeit, Akupressur, Atemimpuls, Fl\u00fcgel und Songfelder.",
          src: "assets/knowledge/type-1/so1/so1-page-3.jpeg",
          alt: "SO1 Seite 3 mit K\u00f6rperarbeit, Akupressur und Medienfeldern",
        },
        {
          title: "SO1 \u00b7 Seite 4",
          caption: "Heilmittel-Kompass mit Mineralstoffimpuls, Bachbl\u00fcte, Edelstein und Tee.",
          src: "assets/knowledge/type-1/so1/so1-page-4.jpeg",
          alt: "SO1 Seite 4 Heilmittel-Kompass mit Platinum metallicum und unterst\u00fctzenden Mitteln",
        },
        {
          title: "SO1 \u00b7 Seite 5",
          caption: "Integrationspotenzial, Bewusstseinsraum, neue F\u00e4higkeiten und Ausstrahlung.",
          src: "assets/knowledge/type-1/so1/so1-page-5.jpeg",
          alt: "SO1 Seite 5 mit Integrationspotenzial Mitgef\u00fchl und Weisheit",
        },
      ],
      lifeTheme: [
        "Verantwortung \u00fcbernehmen und das Richtige bewirken wollen.",
        "Sich an hohen Idealen orientieren und auch von anderen Integrit\u00e4t und Haltung erwarten.",
        "F\u00fcr Ordnung und Verbesserung k\u00e4mpfen und dabei leicht streng oder unnachgiebig werden.",
      ],
      practice:
        "2-Punkte-Integration: Solarplexus / Oberbauch und Unterbauch / Beckenbereich.",
      essence: {
        title: "Integrationspotenzial: Mitgef\u00fchl & Weisheit",
        sentence: "Wahre Ver\u00e4nderung entsteht aus Weisheit, nicht aus Urteil.",
        qualities: ["ruhiger Atem", "klarer Blick", "offene Brust und Herzraum", "mitf\u00fchlende F\u00fchrung", "lebendige Gerechtigkeit"],
      },
      integrationPath: [
        "Verantwortung mit mehr Menschlichkeit und innerer Ruhe verbinden.",
        "Nicht st\u00e4ndig bewerten, verbessern oder alles richtig machen m\u00fcssen.",
        "Klarheit durch Vertrauen, Offenheit und mitf\u00fchlende Selbstannahme finden.",
      ],
      unconsciousStrategy: [
        "Starke Orientierung an Regeln, Werten und moralischer Klarheit.",
        "Sich und andere kontrollieren, um Fehler oder falsches Verhalten zu vermeiden.",
        "Stabilisierung \u00fcber Disziplin, Verantwortung und hohe Anspr\u00fcche, auch wenn innerer Druck entsteht.",
      ],
      turningPoint: [
        "Erkennen, dass Pflichtgef\u00fchl und moralische Kontrolle vom Herzen entfernen k\u00f6nnen.",
        "Mehr Menschlichkeit, W\u00e4rme und pers\u00f6nliche Lebendigkeit erlauben.",
        "Mitgef\u00fchl ersetzt innere Strenge und Bewertung.",
      ],
      integratedState: [
        "Verantwortung \u00fcbernehmen, ohne sich \u00fcber Strenge und Pflicht zu definieren.",
        "Klarheit mit Menschlichkeit und Mitgef\u00fchl verbinden.",
        "Ordnung entsteht aus innerer Reife statt aus Kontrolle.",
      ],
      tensionFields: [
        "Prinzipien \u2192 Menschlichkeit",
        "Richtigsein \u2192 Mitgef\u00fchl",
        "Moral \u2192 Lebendigkeit",
        "Pflicht \u2192 Freude",
        "Kontrolle \u2192 Vertrauen",
        "Verantwortung \u2192 Leichtigkeit",
        "Urteil \u2192 Verst\u00e4ndnis",
        "Ordnung \u2192 Nat\u00fcrlichkeit",
        "Ernst \u2192 Herzensw\u00e4rme",
      ],
      archetypalEssence: "Verbindung von Ideal, Gewissen und Herz",
      integrativePotential: "Mitgef\u00fchl & Weisheit",
      nervousSystemRegulation: [
        "Spannung schneller loslassen",
        "Bewertung in Verst\u00e4ndnis wandeln",
        "zwischen Aktivit\u00e4t und Ruhe wechseln",
        "Perfektionismus und H\u00e4rte l\u00f6sen",
        "sich selbst weniger verurteilen",
        "Verantwortung entspannter tragen",
        "inneren Druck reduzieren",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Anspruch, perfekt, richtig und gerecht zu sein, und der Angst, Fehler zu machen oder das Ganze im Stich zu lassen.",
        gazeQuality: [
            "klar und wach",
            "beobachtet das Feld",
            "pr\u00fcfend und bewertend",
            "sucht Fairness und Gerechtigkeit",
          ],
        microTension: [
            "Stirn: vertikale Konzentrationsfalten",
            "Augen: gespannt, fokussiert",
            "Mund: kontrolliert, leicht angespannt",
            "Kiefer: fest, zur\u00fcckhaltend",
            "Haltung: aufrecht, kontrolliert",
          ],
        breathingRhythm: [
            "eher flach und kontrolliert",
            "h\u00e4lt Atem an bei innerer Anspannung",
            "reguliert Atem bewusst",
            "Fokus auf Kontrolle und Haltung",
          ],
        movementInitiation: [
            "\u00fcberlegt und ausgerichtet",
            "plant bevor er/sie handelt",
            "strukturiert und geordnet",
            "bewegt sich mit Zweck und Disziplin",
          ],
        contactStyle: [
            "respektvoll und korrekt",
            "klar in Kommunikation und Haltung",
            "vertrauensf\u00f6rdernd durch Verl\u00e4sslichkeit",
            "orientiert sich an gemeinsamen Werten",
          ],
        twoPoints: {
          point1: { name: "Solarplexus / Oberbauch", location: "oberhalb des Nabels", need: [
              "Ordnung",
              "Integrit\u00e4t",
              "Kontrolle",
              "innere Stabilit\u00e4t",
            ] },
          point2: { name: "Unterbauch / Beckenbereich", location: "unterhalb des Nabels", need: [
              "Sicherheit",
              "Schutz",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nicht kontrollieren.",
            "Milde zulassen.",
            "Einfach da sein.",
            "Verantwortung l\u00f6sen.",
            "Ruhig bleiben.",
          ],
        },
      },
      signature: {
        title: "Verk\u00f6rperte Signatur",
        text: "Ich stehe f\u00fcr das Richtige ein \u2013 f\u00fcr mich und f\u00fcr das Ganze.",
      },
      contentModules: [
        {
          title: "Typ 1 \u00b7 Grundkarte",
          intro:
            "Die allgemeine Typ-1-Karte bildet die Grundlage f\u00fcr alle Einser-Subtypen. Im Zentrum steht das Streben nach Ordnung, Integrit\u00e4t und Richtigkeit. Der Organismus versucht, Fehler, moralisches Versagen und Kontrollverlust zu vermeiden.",
          entries: [
            {
              label: "Thema",
              text: "Grundthema: richtig und falsch. Typ 1 sucht Ordnung, Integrit\u00e4t, Verantwortung und innere Korrektheit.",
            },
            {
              label: "Organismusfrage",
              text: "Wie kann ich richtig sein und Fehler vermeiden?",
            },
            {
              label: "Leidenschaft",
              text: "Die innere Spannung entsteht aus \u00c4rger, Groll oder Unzufriedenheit, die meist kontrolliert, moralisch begr\u00fcndet oder gegen sich selbst gerichtet wird.",
            },
            {
              label: "Innere Motivation",
              text: "Typ 1 m\u00f6chte gut, integer, verantwortungsvoll und richtig handeln. Die Welt soll sinnvoll, geordnet und gerecht sein.",
            },
            {
              label: "Stirnspannung",
              text: "Horizontale Spannung, Kontrollaktivit\u00e4t, innere Bewertung und st\u00e4ndiges Pr\u00fcfen.",
            },
            {
              label: "Blickfokus",
              text: "Pr\u00e4zise, pr\u00fcfend, wach und korrekturorientiert. Der Blick sucht Abweichungen, Unstimmigkeiten oder etwas, das verbessert werden m\u00fcsste.",
            },
            {
              label: "Mundlinie",
              text: "Kontrolliert, leicht angespannt, zur\u00fcckhaltende Emotion. Impulse werden eher gehalten als spontan gezeigt.",
            },
            {
              label: "Kiefer & Nacken",
              text: "Haltespannung, Zur\u00fcckhalten von Impulsen und k\u00f6rperlich sp\u00fcrbare Selbstkontrolle.",
            },
            {
              label: "K\u00f6rperorganisation",
              text: "Aufrecht, gesammelt und kontrolliert, mit subtiler Distanz. Die Energie kanalisiert sich nach oben; Kopf, Stirn, Kiefer und Nacken sind h\u00e4ufig aktiver als Bauch, Becken und spontane Bewegung.",
            },
            {
              label: "Spaltung / innerer Konflikt",
              text: "Selbstanspruch, Perfektion und Richtigkeit stehen Menschlichkeit, Fehlerfreundlichkeit und lebendiger Unvollkommenheit gegen\u00fcber.",
            },
            {
              label: "Typische Haltung & Ausdruck",
              text: "Aufgerichtet, strukturiert und ernst. Gestik und Mimik sind pr\u00e4zise, kontrolliert und sparsam. Der Ausdruck kann reserviert, kritisch oder streng wirken.",
            },
            {
              label: "Verk\u00f6rperte Signatur",
              text: "Ich halte Spannung, um richtig zu handeln und Fehler zu vermeiden.",
            },
            {
              label: "Integrationsweg",
              text: "Vom inneren Kritiker zum weisen H\u00fcter. Mehr Menschlichkeit statt Perfektion, mehr Pr\u00e4senz statt permanenter Korrektur, mehr W\u00fcrde statt innerer Strenge.",
            },
            {
              label: "Blickqualit\u00e4t",
              text: "Pr\u00e4zise, kontrolliert, bewertend und wach. Der Blick sucht Unstimmigkeiten, kann aber in der Integration zu Klarheit und Weisheit werden.",
            },
            {
              label: "Mikrospannung",
              text: "Spannung in Stirn, Augen, Kiefer und Nacken. Der K\u00f6rper h\u00e4lt sich zusammen, um korrekt und beherrscht zu bleiben.",
            },
            {
              label: "Atemrhythmus",
              text: "Eher flach, kontrolliert und gehalten. Der Atem darf lernen, nicht nur Disziplin, sondern auch Loslassen zu unterst\u00fctzen.",
            },
            {
              label: "Bewegungsinitiierung",
              text: "Zielgerichtet, kontrolliert, korrekturorientiert und funktional. Spontane Bewegung wird h\u00e4ufig erst gepr\u00fcft.",
            },
            {
              label: "Kontaktstil",
              text: "Verantwortlich, korrekt und verbindlich. In Stress kann der Kontakt kritisch oder belehrend wirken; in Integration entsteht klare, w\u00fcrdige F\u00fchrung.",
            },
            {
              label: "Spannungsverteilung",
              text: "Hauptspannung in Stirn, Kiefer und Nacken. Nebenaktivit\u00e4t im Solarplexus und in den Schultern.",
            },
            {
              label: "Archetypisches Tier",
              text: "Adler: Weitblick, Integrit\u00e4t, Klarheit und F\u00fchrung. Der Adler steht f\u00fcr den Weg vom kritischen Blick zur weisen \u00dcbersicht.",
            },
            {
              label: "Lebensfeld",
              text: "Lebensthema: Ordnung und Integrit\u00e4t. Kernsatz: Nicht korrigieren. Ressource: weich werden lassen und trotzdem klar bleiben.",
            },
          ],
        },
        {
          title: "SE1 \u00b7 Seite 1 \u00b7 Subtyp-Profil",
          intro:
            "Die SE1 sucht Sicherheit durch Ordnung, Korrektheit und Selbstkontrolle. Der K\u00f6rper zeigt dabei feine Konzentration, zur\u00fcckhaltende Pr\u00e4senz und ein starkes Bed\u00fcrfnis, stabil und integer zu handeln.",
          entries: [
            {
              label: "Grundthema",
              text: "Integrit\u00e4t und Ordnung. Das Richtige ist heilig; Prinzipien sollen sch\u00fctzen, st\u00fctzen und Halt geben.",
            },
            {
              label: "Organismusfrage",
              text: "Wie kann ich richtig handeln und meine Integrit\u00e4t bewahren, um sicher und stabil zu bleiben?",
            },
            {
              label: "Blickqualit\u00e4t",
              text: "aufmerksam und pr\u00fcfend; scannt nach Sicherheit und Ordnung; eher bei sich und weniger expansiv; klare, ruhige Pr\u00e4senz.",
            },
            {
              label: "Mikrospannung",
              text: "leichte Konzentrationsfalten in der Stirn, fokussierte und kritische Augen, kontrollierter Mund, leicht angespannter Kiefer und aufrechte, zur\u00fcckhaltende Haltung.",
            },
            {
              label: "Atemrhythmus",
              text: "tief, ruhig und kontrolliert; neigt zum Anhalten des Atems bei innerer Anspannung; Regulation \u00fcber Kontrolle.",
            },
            {
              label: "Bewegungsinitiierung",
              text: "\u00fcberlegt und vorsichtig; pr\u00fcft erst und handelt dann; sch\u00fctzt Energie und Ressourcen; Bewegung ist zielgerichtet und sparsam.",
            },
            {
              label: "Kontaktstil",
              text: "respektvoll, korrekt und verl\u00e4sslich; nimmt Distanz wahr, bis Vertrauen da ist; klare Grenzen und klare Worte; hilfsbereit, wenn Sicherheit gegeben ist.",
            },
            {
              label: "Spannungsverteilung",
              text: "Kopf und Stirn: moralische Anspannung. Nacken und Schultern: Verantwortungslast. Brustbereich: Schutzpanzer. Bauch: Kontrolle und Selbstregulation. Kiefer: zur\u00fcckgehaltene Spannung.",
            },
            {
              label: "Ressourcenfeld",
              text: "Selbstf\u00fcrsorge und Stabilit\u00e4t, klare Werte und Prinzipien, Struktur und Ordnung, verl\u00e4ssliche Routinen, Grenzen und Selbstschutz, Ehrlichkeit und Gewissen.",
            },
          ],
        },
        {
          title: "Seite 2 \u00b7 2-Punkte-Integration",
          intro:
            "Die zentrale Praxis der SE1 verbindet zwei K\u00f6rperr\u00e4ume: den Solarplexus/Oberbauch als Feld von Ordnung und Ausrichtung mit dem Unterbauch/Beckenbereich als Feld von Sicherheit, Ruhe und Erdung. Die \u00dcbung bringt Aufmerksamkeit in beide Pole zugleich, ohne etwas korrigieren zu m\u00fcssen.",
          entries: [
            {
              label: "Punkt 1",
              text: "Solarplexus / Oberbauch: Bed\u00fcrfnis nach Klarheit, Ordnung und richtiger Ausrichtung. Dieser Punkt h\u00e4lt die innere Frage, was stimmig, korrekt und verantwortbar ist.",
            },
            {
              label: "Punkt 2",
              text: "Unterbauch / Beckenbereich: Bed\u00fcrfnis nach Sicherheit, Ruhe, Erdung und k\u00f6rperlichem Vertrauen. Dieser Punkt bringt die SE1 aus reiner Kopf- und Kontrollspannung zur\u00fcck in den K\u00f6rper.",
            },
            {
              label: "Vorgehen",
              text: "Eine Hand auf den Solarplexus/Oberbauch legen, die andere auf den Unterbauch/Beckenbereich. Erst Punkt 1 sp\u00fcren, dann Punkt 2 sp\u00fcren, danach beide Energiefelder gleichzeitig wahrnehmen. Nichts ver\u00e4ndern, nichts korrigieren, den Atem ruhig flie\u00dfen lassen.",
            },
            {
              label: "Handposition",
              text: "Die H\u00e4nde dienen nicht der Korrektur, sondern der gleichzeitigen Aufmerksamkeit. Die SE1 erlebt dadurch: Klarheit und Sicherheit m\u00fcssen nicht gegeneinander arbeiten.",
            },
            {
              label: "Lebensthema",
              text: "Du suchst Sicherheit durch Ordnung, Integrit\u00e4t und richtiges Handeln. Gleichzeitig entsteht Druck, wenn Sicherheit nur \u00fcber Kontrolle und Fehlervermeidung gesucht wird.",
            },
            {
              label: "Unbewusste Strategie",
              text: "Du versuchst, Stabilit\u00e4t durch Kontrolle, Korrektheit und Vorbereitung herzustellen. Dabei kann der K\u00f6rper eng werden, obwohl er eigentlich nach Ruhe und Vertrauen sucht.",
            },
            {
              label: "Integration",
              text: "Du lernst, Ordnung zuzulassen, ohne dich zu verh\u00e4rten. Sicherheit entsteht nicht nur durch Richtigkeit, sondern auch durch K\u00f6rperkontakt, Erdung und inneres Vertrauen.",
            },
            {
              label: "Prototypen",
              text: "Die weibliche und m\u00e4nnliche SE1-Prototypik zeigt eine ruhige, zur\u00fcckhaltende und kontrollierte Pr\u00e4senz. Beide stehen f\u00fcr die Suche nach Stabilit\u00e4t, Verantwortung und innerer Korrektheit.",
            },
            {
              label: "Kernsatz",
              text: "Wenn du deiner inneren Ordnung vertraust, entsteht Ruhe, auch wenn nicht alles perfekt ist.",
            },
            {
              label: "Fu\u00dfzeile",
              text: "Selbsterhaltende Eins (SE1): Instinkt der Integrit\u00e4t, Ordnung, Stabilit\u00e4t und k\u00f6rperlichen Selbstsicherung.",
            },
          ],
        },
        {
          title: "Seite 3 \u00b7 K\u00f6rperarbeit & Akupressur",
          intro:
            "Diese Seite \u00fcbersetzt die innere Spannung der SE1 in konkrete K\u00f6rperarbeit. Der Weg f\u00fchrt von Selbst\u00fcberforderung und Kontrolle in mehr Lebendigkeit, Vertrauen und k\u00f6rperliche Entspannung.",
          entries: [
            {
              label: "Problem",
              text: "Du versuchst, korrekt, stabil und vorbereitet zu bleiben. Dabei kann innere Spannung entstehen, weil der K\u00f6rper st\u00e4ndig pr\u00fcft, ob etwas falsch, unsicher oder noch nicht gut genug ist.",
            },
            {
              label: "Wendepunkt",
              text: "Du erkennst, dass Kontrolle und Selbstkorrektur nicht dasselbe sind wie echte Sicherheit. Die Energie darf ruhiger werden, ohne dass Integrit\u00e4t verloren geht.",
            },
            {
              label: "Integration",
              text: "Du nutzt deine Klarheit bewusst, ohne sie gegen dich selbst zu richten. Ordnung wird zu Orientierung, nicht zu Druck.",
            },
            {
              label: "Gesicht",
              text: "Klarheit und Ausdruck. Der Gesichtspunkt hilft, die kontrollierte Mimik weicher werden zu lassen und dennoch klar pr\u00e4sent zu bleiben.",
            },
            {
              label: "Hand",
              text: "Handlungskraft und Balance. Die Hand erinnert daran, dass richtiges Handeln nicht aus Verkrampfung entstehen muss.",
            },
            {
              label: "Fu\u00df",
              text: "Erdung und Standfestigkeit. Der Fu\u00dfpunkt bringt die SE1 aus der Bewertung in k\u00f6rperlichen Boden und tragf\u00e4hige Orientierung.",
            },
            {
              label: "Bauch",
              text: "Mitte und Entspannung. Der Bauchpunkt reguliert Kontrolle, Druck und innere Anspannung und st\u00e4rkt eine ruhigere Mitte.",
            },
            {
              label: "Finger",
              text: "Sp\u00fcren und Loslassen. Der Fingerimpuls unterst\u00fctzt, Perfektionismus, festgehaltene Korrektur und innere Enge zu l\u00f6sen.",
            },
            {
              label: "Ohr",
              text: "Stille und Regulation. Der Ohrpunkt l\u00e4dt ein, die innere Stimme milder zu h\u00f6ren und nicht nur den inneren Kritiker wahrzunehmen.",
            },
            {
              label: "Anwendung",
              text: "W\u00e4hle ein bis zwei Zonen. Dr\u00fccke mit Daumen oder Zeigefinger 60 bis 90 Sekunden mit mittlerer Intensit\u00e4t. Atme ruhig weiter und beobachte, wie K\u00f6rperempfindungen, Gedanken und Gef\u00fchle sich ver\u00e4ndern.",
            },
            {
              label: "Vollkommen still sitzen",
              text: "Setze dich f\u00fcr zwei Minuten aufrecht und bequem hin. Der K\u00f6rper darf seine eigene Intelligenz zeigen; in dieser kurzen Zeit muss nichts verbessert werden.",
            },
            {
              label: "Mentale & emotionale Haltung",
              text: "Typ 1 zeigt mentalen Perfektionismus und emotionalen Groll, wenn innere Spannung zu stark wird. Die SE1 lernt, Selbstkontrolle in Selbstkontakt zu verwandeln.",
            },
            {
              label: "Fl\u00fcgel",
              text: "Der 9er-Fl\u00fcgel betont Ruhe, Zur\u00fcckhaltung und Harmonie. Der 2er-Fl\u00fcgel betont Beziehung, Verantwortung und Hilfsbereitschaft. Beide k\u00f6nnen die SE1 entlasten, wenn sie nicht zur zus\u00e4tzlichen Pflicht werden.",
            },
            {
              label: "Medienfelder",
              text: "Die Seite verweist auf Bewusstseins\u00fcbungen, dynamische Enneagramm-Darstellungen, Songs, Fl\u00fcgelvideos und subtypspezifische Medien. Diese Felder sind in der App bereits als Medienbereich vorbereitet.",
            },
          ],
        },
        {
          title: "Seite 4 \u00b7 Heilmittel-Kompass",
          intro:
            "Der Heilmittel-Kompass \u00fcbersetzt das SE1-Muster in ein heilkundliches Symbolfeld. Im Zentrum steht die Wandlung von \u00fcberh\u00f6hter Selbstkontrolle, innerem Druck und angespannter Korrektheit hin zu W\u00fcrde, Milde, innerer Ordnung und lebendiger Integrit\u00e4t.",
          entries: [
            {
              label: "Hom\u00f6opathisches Einzelmittel",
              text: "Platinum metallicum steht hier f\u00fcr die Regulation umgewandelter Bauchenergie. Es symbolisiert den Weg von innerem Anspruch, Selbstverantwortung und Spannung zu W\u00fcrde, Demut und echter Integrit\u00e4t.",
            },
            {
              label: "Thema",
              text: "Das Bed\u00fcrfnis, integer, korrekt und kontrolliert zu bleiben, kann von einem starken inneren Anspruch getragen sein. Der heilende Weg f\u00fchrt von rigider Selbstbeherrschung zu milder, lebendiger Ordnung.",
            },
            {
              label: "Wirkung auf Lebenskraft und Leidenschaft",
              text: "Der Impuls unterst\u00fctzt die Wandlung von angespanntem Perfektionismus, innerer H\u00e4rte und Selbst\u00fcberh\u00f6hung in menschliche Pr\u00e4senz, Selbstannahme und verantwortliche Klarheit.",
            },
            {
              label: "Ziel",
              text: "Regulation und St\u00e4rkung der Einser-Lebenskraft: Die umgewandelte Bauchenergie soll nicht bek\u00e4mpft, sondern in klare, ruhige und dienende Integrit\u00e4t verwandelt werden.",
            },
            {
              label: "Mineralstoff-Impuls",
              text: "Kalium sulfuricum verweist auf Ausgleich, Reinigung und Erneuerung. Es unterst\u00fctzt symbolisch die F\u00e4higkeit, innere Spannung zu l\u00f6sen und Ordnung nicht starr, sondern beweglich zu halten.",
            },
            {
              label: "Bachbl\u00fcte",
              text: "Rock Water steht f\u00fcr innere Flexibilit\u00e4t, wenn Ideale, Disziplin und Selbstanspruch zu hart werden. Die Qualit\u00e4t ist: milder werden, ohne die eigene Integrit\u00e4t aufzugeben.",
            },
            {
              label: "Edelstein",
              text: "Amethyst tr\u00e4gt das Feld von Klarheit, Sammlung und geistiger Beruhigung. Er passt zur SE1, wenn die innere Stimme zu streng, bewertend oder kontrollierend wird.",
            },
            {
              label: "Tee",
              text: "Melissentee steht f\u00fcr sanfte Nervenruhe, Entspannung und emotionale Milde. Er erg\u00e4nzt die SE1 dort, wo Kontrolle durch Beruhigung und weichen Atem abgel\u00f6st werden darf.",
            },
            {
              label: "Leidenschaft",
              text: "Die Leidenschaft der SE1 liegt in der inneren Anspannung, alles richtig machen zu m\u00fcssen. Fehler, Unordnung oder moralische Unklarheit k\u00f6nnen k\u00f6rperlich wie Alarm erlebt werden.",
            },
            {
              label: "Innere Motivation",
              text: "Die Motivation ist der Wunsch nach Integrit\u00e4t, Sicherheit und verl\u00e4sslicher Ordnung. Die SE1 m\u00f6chte stabil, korrekt und verantwortlich handeln.",
            },
            {
              label: "Medien & Wirkweise",
              text: "Zur Seite geh\u00f6ren erg\u00e4nzende Medienfelder: Wirkweise der Hom\u00f6opathie, Wirkweise der Enneagramm-Hom\u00f6opathie, Relaxing & Healing Music und Songs zum Wesen der Hom\u00f6opathie.",
            },
            {
              label: "Zuordnungshinweis",
              text: "Die Zuordnung ist symbolisch und erfahrungsbezogen. Sie ersetzt keine therapeutische oder medizinische Beratung, sondern dient der bewussten Selbstwahrnehmung und Integration.",
            },
          ],
        },
        {
          title: "Seite 5 \u00b7 Integration",
          intro:
            "Seite 5 b\u00fcndelt das Integrationspotenzial der SE1. Die Bewegung geht von angespannter Selbstkontrolle, Fehlervermeidung und innerem Druck zu ruhiger Integrit\u00e4t, Selbstkontakt, Stabilit\u00e4t und milder Klarheit.",
          entries: [
            {
              label: "Integrationspotenzial",
              text: "Ruhe und Integrit\u00e4t. Die SE1 muss Ordnung nicht mehr durch Druck erzwingen, sondern findet eine nat\u00fcrliche, verl\u00e4ssliche innere Ausrichtung.",
            },
            {
              label: "Leitquote",
              text: "Sicherheit entsteht, wenn ich meiner inneren Ordnung vertraue, statt mich dauerhaft korrigieren zu m\u00fcssen.",
            },
            {
              label: "Archetypische Essenz",
              text: "Die SE1 ist der ruhige H\u00fcter der Integrit\u00e4t. Sie sch\u00fctzt Werte, Ordnung und Verantwortung, ohne sich dabei selbst zu verh\u00e4rten.",
            },
            {
              label: "Verk\u00f6rperte Qualit\u00e4t",
              text: "Verantwortungsbewusst, sorgf\u00e4ltig, zuverl\u00e4ssig, strukturiert, gewissenhaft und klar. In der Integration wird diese Qualit\u00e4t w\u00e4rmer, ruhiger und menschlicher.",
            },
            {
              label: "Nervensystem-Regulation",
              text: "Langsame Atmung, weicher Kiefer, Erdung, Grenzen sp\u00fcren und die innere Kritikerstimme beruhigen. Der K\u00f6rper lernt, Sicherheit nicht nur \u00fcber Kontrolle zu erzeugen.",
            },
            {
              label: "Beziehungsebene",
              text: "Vertrauen entsteht, wenn die SE1 sich zeigen darf, ohne perfekt sein zu m\u00fcssen. Klarheit bleibt, aber sie wird durch W\u00e4rme, Zuh\u00f6ren und echte N\u00e4he erg\u00e4nzt.",
            },
            {
              label: "Neue F\u00e4higkeiten",
              text: "Fehlerfreundlichkeit, Gelassenheit, innere Milde, flexible Ordnung, Selbstf\u00fcrsorge, Humor und die F\u00e4higkeit, Verantwortung ohne \u00dcberkontrolle zu \u00fcbernehmen.",
            },
            {
              label: "Integrationssatz",
              text: "Ich handle integer und klar, ohne mich selbst zu verurteilen. Ich darf richtig handeln und zugleich weich, lebendig und menschlich bleiben.",
            },
            {
              label: "Bewusstseinsraum",
              text: "Bewusstsein entsteht, wenn die SE1 erkennt, dass wahre Integrit\u00e4t nicht aus Strenge, sondern aus Pr\u00e4senz, Wahrhaftigkeit und innerer Ruhe kommt.",
            },
            {
              label: "Ausstrahlung",
              text: "Ruhige Pr\u00e4senz, klare Werte, verl\u00e4ssliche W\u00e4rme, sorgf\u00e4ltige Verantwortung und eine nat\u00fcrliche W\u00fcrde, die andere nicht korrigieren muss.",
            },
            {
              label: "Archetypische Natur",
              text: "Der Adler steht f\u00fcr Weitblick und Integrit\u00e4t. In der Integration wird sein Blick nicht nur pr\u00fcfend, sondern \u00fcbersichtlich, weise und sch\u00fctzend.",
            },
            {
              label: "Integration bedeutet",
              text: "Vom Korrigieren zum Erkennen, vom inneren Druck zur Ruhe, vom Perfektionismus zur Menschlichkeit und von Kontrolle zu vertrauensvoller Ordnung.",
            },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Platinum metallicum",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-1/so1/heilmittel/so1-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus dem Edelmetall Platin \u2013 einem der reinsten, kostbarsten und widerstandsf\u00e4higsten Metalle \u00fcberhaupt, das von keiner S\u00e4ure angegriffen wird. Genau diese Signatur pr\u00e4gt das Mittelbild: ein Streben nach Reinheit, Vollkommenheit und moralischer Unantastbarkeit, verbunden mit einem feinen Gef\u00fchl der Erhabenheit \u00fcber das Gew\u00f6hnliche. Wie das Metall sich nicht verunreinigen l\u00e4sst, will die Eins fehlerlos, korrekt und integer sein. Das Bed\u00fcrfnis, alles richtig zu machen, ruht auf einem starken inneren Anspruch nach Perfektion, Ordnung und Integrit\u00e4t \u2013 und auf der Angst, sich durch einen Fehler herabzusetzen.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als strenge Kontrolle, innerer Druck, Anspannung und unerbittliche Selbstverurteilung zeigt. Es hilft, den hohen Anspruch von der erstarrten H\u00e4rte zu l\u00f6sen, sodass W\u00fcrde und Aufrichtigkeit bleiben d\u00fcrfen, ohne in Verbissenheit und \u00dcberlegenheit zu kippen. So darf die Eins Ma\u00df und Menschlichkeit wiederfinden \u2013 richtig sein, ohne sich selbst zu richten.",
        },
        {
          title: "Kalium sulfuricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-1/so1/heilmittel/so1-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Reinigung, Stoffwechsel und innere Erneuerung",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 6 ist das Salz des Stoffwechsels, der Entgiftung und der inneren Erneuerung. Es unterst\u00fctzt die Zellatmung und hilft dem K\u00f6rper, Verbrauchtes auszuscheiden und sich zu regenerieren. Auf seelischer Ebene steht es f\u00fcr Erneuerung und das L\u00f6sen von Festgefahrenem. F\u00fcr die Eins, die sich in Strenge, Druck und Selbstverurteilung verh\u00e4rten kann, f\u00f6rdert es einen lebendigen Fluss. So wirkt es dort, wo starre Kontrolle sich in gesunde Durchl\u00e4ssigkeit wandeln darf.",
          goal: "Auf der Mineralstoff-Ebene f\u00f6rdert es die F\u00e4higkeit, festgehaltene Spannungen und veraltete Ordnungsmuster loszulassen \u2013 hin zu nat\u00fcrlicher Erneuerung ohne Zwang.",
        },
        {
          title: "Rock Water",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-1/so1/heilmittel/so1-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Flexibilit\u00e4t statt starrer Selbststrenge",
          text: "Rock Water ist die Bachbl\u00fcte f\u00fcr Menschen, die hohe Ideale an sich selbst anlegen und streng, fast asketisch mit sich umgehen. Sie hilft jenen, die sich Genuss und Leichtigkeit versagen, um ein selbstgesetztes Vorbild zu erf\u00fcllen. Die Bl\u00fcte l\u00f6st innere H\u00e4rte und starre Selbstdisziplin und bringt Flexibilit\u00e4t und Milde. F\u00fcr die Eins, die unter dem Druck des inneren Richters steht, ist sie ein sanftes Gegenmittel. So darf aus verbissener Strenge eine offene, freundliche Haltung sich selbst gegen\u00fcber werden.",
          goal: "Auf der Seelenebene l\u00e4dt es ein, die eigene Menschlichkeit zu umarmen \u2013 Ideale d\u00fcrfen bleiben, aber der innere Richter darf sich in einen weisen Freund verwandeln.",
        },
        {
          title: "Amethyst",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-1/so1/heilmittel/so1-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Ruhe, Klarheit und Gelassenheit",
          text: "Der Amethyst ist eine violette Variet\u00e4t des Bergkristalls und gilt seit der Antike als Stein der Klarheit, M\u00e4\u00dfigung und geistigen Ruhe. Traditionell setzt man ihn dort ein, wo der Kopf nicht zur Ruhe kommt: bei kreisenden Gedanken, innerer Anspannung und einem \u00fcberaktiven, kritischen Geist. Er wirkt beruhigend, kl\u00e4rend und harmonisierend und unterst\u00fctzt Meditation wie erholsamen Schlaf. F\u00fcr die Eins ist er ein Gegengewicht zur strengen Selbstkontrolle und zum unerm\u00fcdlichen inneren Richter. Er l\u00e4dt ein, Anspannung loszulassen und echte Gelassenheit zuzulassen \u2013 Ruhe statt Verbissenheit, Milde statt H\u00e4rte gegen sich selbst.",
          goal: "Als energetisches Werkzeug l\u00e4dt er ein, innere Strenge durch Klarheit zu ersetzen \u2013 Kontrolle darf Stille werden, Anspannung darf sich in ruhige Ordnung aufl\u00f6sen.",
        },
        {
          title: "Melissentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-1/so1/heilmittel/so1-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "beruhigend und nervenst\u00e4rkend",
          text: "Melisse ist ein klassisches Heilkraut f\u00fcr Nerven und Gem\u00fct, mild beruhigend und herzst\u00e4rkend. Ihr zitronig-frischer Duft entspannt, ohne m\u00fcde zu machen, und l\u00f6st innere Anspannung. Traditionell wird sie bei Unruhe, Reizbarkeit und nerv\u00f6ser Anspannung getrunken. F\u00fcr die Eins, die unter innerem Druck und Selbststrenge steht, ist sie ein sanfter Ausgleich. So hilft ein Melissentee, verkrampfte Anspannung loszulassen und zur Ruhe zu kommen.",
          goal: "Als pflanzliche Begleiterin l\u00e4dt sie t\u00e4glich ein, sich aus dem Kontrollmodus zu l\u00f6sen und den K\u00f6rper als freundlichen Ort zu erleben.",
        },
        {
          title: "Arsenicum album",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/arsenicum-album.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus dem wei\u00dfen Arsenik \u2013 einem mineralischen Stoff, der in materieller Dosis ein t\u00f6dliches Gift ist und im Menschen tiefste Existenzangst spiegelt. Diese Signatur zeigt das Mittelbild deutlich: eine qu\u00e4lende Sorge um Sicherheit, Ordnung und Reinheit, peinliche Genauigkeit und die rastlose Angst, etwas k\u00f6nnte au\u00dfer Kontrolle geraten. Die Wunde der Unvollkommenheit tr\u00e4gt genau diesen Kern \u2013 einen tiefen Wunsch nach Sicherheit und Fehlervermeidung, der hinter Ordnung eine st\u00e4ndige innere Anspannung verbirgt. Wo das Gift Vernichtung bedeutet, sucht die Seele zwanghaft Halt durch Kontrolle.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als \u00e4ngstliche Kontrolle, Unsicherheitsvermeidung und unerm\u00fcdliche Selbstpr\u00fcfung zeigt. Es beruhigt die existenzielle Unruhe und hilft, das Gef\u00fchl von Sicherheit nicht l\u00e4nger durch perfekte Ordnung erzwingen zu m\u00fcssen. So darf an die Stelle der angstgetriebenen Kontrolle ein getragenes inneres Vertrauen treten.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Platinum metallicum",
          schuessler: "Kalium sulfuricum",
          bachbluete: "Rock Water",
          edelstein: "Amethyst",
          tee: "Melissentee",
        },
        homoeopathieThema: "Gewonnen aus dem Edelmetall Platin \u2013 einem der reinsten, kostbarsten und widerstandsf\u00e4higsten Metalle \u00fcberhaupt, das von keiner S\u00e4ure angegriffen wird. Genau diese Signatur pr\u00e4gt das Mittelbild: ein Streben nach Reinheit, Vollkommenheit und moralischer Unantastbarkeit, verbunden mit einem feinen Gef\u00fchl der Erhabenheit \u00fcber das Gew\u00f6hnliche. Wie das Metall sich nicht verunreinigen l\u00e4sst, will die Eins fehlerlos, korrekt und integer sein. Das Bed\u00fcrfnis, alles richtig zu machen, ruht auf einem starken inneren Anspruch nach Perfektion, Ordnung und Integrit\u00e4t \u2013 und auf der Angst, sich durch einen Fehler herabzusetzen.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als strenge Kontrolle, innerer Druck, Anspannung und unerbittliche Selbstverurteilung zeigt. Es hilft, den hohen Anspruch von der erstarrten H\u00e4rte zu l\u00f6sen, sodass W\u00fcrde und Aufrichtigkeit bleiben d\u00fcrfen, ohne in Verbissenheit und \u00dcberlegenheit zu kippen. So darf die Eins Ma\u00df und Menschlichkeit wiederfinden \u2013 richtig sein, ohne sich selbst zu richten.",
        wundeThema: "Bereitet aus dem wei\u00dfen Arsenik \u2013 einem mineralischen Stoff, der in materieller Dosis ein t\u00f6dliches Gift ist und im Menschen tiefste Existenzangst spiegelt. Diese Signatur zeigt das Mittelbild deutlich: eine qu\u00e4lende Sorge um Sicherheit, Ordnung und Reinheit, peinliche Genauigkeit und die rastlose Angst, etwas k\u00f6nnte au\u00dfer Kontrolle geraten. Die Wunde der Unvollkommenheit tr\u00e4gt genau diesen Kern \u2013 einen tiefen Wunsch nach Sicherheit und Fehlervermeidung, der hinter Ordnung eine st\u00e4ndige innere Anspannung verbirgt. Wo das Gift Vernichtung bedeutet, sucht die Seele zwanghaft Halt durch Kontrolle.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als \u00e4ngstliche Kontrolle, Unsicherheitsvermeidung und unerm\u00fcdliche Selbstpr\u00fcfung zeigt. Es beruhigt die existenzielle Unruhe und hilft, das Gef\u00fchl von Sicherheit nicht l\u00e4nger durch perfekte Ordnung erzwingen zu m\u00fcssen. So darf an die Stelle der angstgetriebenen Kontrolle ein getragenes inneres Vertrauen treten.",
        wunde: {
          homoeopathie: "Arsenicum album",
          schuessler: "Kalium chloratum",
          bachbluete: "Rock Water",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 1). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      woundBehindPassion: {
        passion: "Groll \u2013 eine Anspannung, die entsteht, wenn die Wirklichkeit nicht dem inneren Ideal entspricht. Bei der SO1 richtet sich dieser Groll besonders nach au\u00dfen: auf gesellschaftliche Missst\u00e4nde, moralische Widerspr\u00fcche, mangelnde Verantwortung.",
        belief: "\u201eDie Welt sollte besser sein \u2013 und ich bin daf\u00fcr verantwortlich.\u201c Darunter: \u201eWenn ich nicht f\u00fcr Ordnung und Gerechtigkeit einstehe, geht es schief.\u201c",
        wound: "Die Wunde der Unvollkommenheit: das tiefe Gef\u00fchl, dass Gesellschaft, Gemeinschaft und Welt niemals ganz dem inneren Ma\u00dfstab von Richtigkeit entsprechen k\u00f6nnen.",
        compensation: "F\u00fcr Werte eintreten, Missst\u00e4nde benennen, Strukturen verbessern und andere auf Prinzipien hinweisen. Die Energie richtet sich stark nach au\u00dfen \u2013 auf das Verbessern von Verh\u00e4ltnissen und das Einfordern von Verantwortung.",
        sufferingCycle: "Die SO1 engagiert sich f\u00fcr eine bessere Welt und findet immer neue Missst\u00e4nde. Kaum ist ein Unrecht benannt, erscheint das n\u00e4chste. Die Wirklichkeit entspricht nie den Idealen, die Anspannung w\u00e4chst, der Druck zur Verbesserung nimmt zu \u2013 und das Engagement ersch\u00f6pft statt zu befreien.",
        healingDirection: "Erkennen, dass moralischer Einsatz nicht aus innerem Druck entstehen muss. Wenn die eigene Klarheit mit innerer Weite und Mitgef\u00fchl verbunden wird, entsteht F\u00fchrung aus St\u00e4rke \u2013 nicht aus Zwang zur Verbesserung.",
        remedy: "Wundenmittel: Arsenicum album \u00b7 Leidenschaftsmittel: Platinum metallicum \u00b7 Sch\u00fc\u00dfler-Salz: Kalium chloratum \u00b7 Bach-Bl\u00fcte: Rock Water. Anwendung nur in therapeutischer R\u00fccksprache.",
        needsReview: [
          "\u201eHinter der Leidenschaft \u2013 die neun Wunden des Enneagramms\u201c, Kapitel Typ 1 (S. 30\u201357). SO1-Nuancen (verst\u00e4rkter Au\u00dfenbezug) erg\u00e4nzt. Bitte gegen Originalseiten pr\u00fcfen.",
        ],
      },
      mediaGroups: type1MediaGroups("SO1", {
        deId: "eOJAkd-QohU",
        enCode: "SO1",
        enId: "DkkZS4FkZbA",
        biblicalId: "XOKO4asfeI8",
        affirmationsId: "u-B8C-cHHk0",
      }),
      needsReview: [],
    };


const so2 = {
      code: "SO2",
      title: "Die soziale Zwei",
      animal: "Golden Retriever",
      status: "curated_draft",
      pages: "Typ 2 Grundkarte + SO2 Seiten 1-5",
      organismQuestion: "Bin ich liebenswert, wenn ich f\u00fcr andere da bin?",
      subtypeQuestion:
        "Wie kann ich Menschen verbinden und unterst\u00fctzen, ohne meinen Wert aus dem Gebrauchtwerden zu beziehen?",
      integrationSentence: "Ich gebe aus Liebe \u2013 und empfange mit offenem Herzen.",
      coreSentence:
        "Wenn du nicht gebraucht werden musst, wird deine Liebe frei, gro\u00dfz\u00fcgig und liebevoll.",
      visualPages: type2VisualPages("SO2", "Soziale Zwei"),
      sourceCoverage: type2SourceCoverage("SO2"),
      contentModules: type2ContentModules("SO2"),
      lifeTheme: [
        "Zugeh\u00f6rigkeit, Anerkennung und Verbindung in Gemeinschaften suchen.",
        "F\u00fcr andere da sein wollen und dar\u00fcber leicht den eigenen Wert gewinnen.",
        "N\u00e4he und Resonanz erleben wollen und dabei Kontakt zu eigenen Bed\u00fcrfnissen verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Oberbauch / innerer Raum.",
      essence: {
        title: "Integrationspotenzial: Herz & Verbundenheit",
        sentence: "Ich gebe aus Liebe und empfange mit offenem Herzen.",
        qualities: ["warme Ausstrahlung", "empathisches Gesp\u00fcr", "aufmerksame Zuwendung", "loyale Verbundenheit", "nat\u00fcrliche Herzlichkeit"],
      },
      integrationPath: [
        "Den eigenen Wert nicht \u00fcber Zustimmung definieren.",
        "Dazugeh\u00f6ren d\u00fcrfen, ohne sich st\u00e4ndig n\u00fctzlich zu machen.",
        "Verbindung durch klare Grenzen, Selbstachtung und echte Gegenseitigkeit finden.",
      ],
      unconsciousStrategy: [
        "\u00dcber N\u00e4he und F\u00fcrsorge sozialen Wert gewinnen.",
        "Sich stark an Erwartungen anderer anpassen und eigene Bed\u00fcrfnisse zur\u00fcckhalten.",
        "Sich \u00fcber Zustimmung, Hilfe und Zugeh\u00f6rigkeit stabilisieren, auch wenn Abh\u00e4ngigkeit entsteht.",
      ],
      turningPoint: [
        "Erkennen, dass Anerkennung und Gebrauchtwerden nicht den inneren Wert bestimmen.",
        "Sich selbst wichtiger nehmen und klare Grenzen setzen.",
        "Beziehungen entstehen aus Echtheit statt aus Anpassung und Helferrolle.",
      ],
      integratedState: [
        "Andere unterst\u00fctzen, ohne sich \u00fcber Anerkennung oder Gebrauchtwerden zu definieren.",
        "In Kontakt mit dem eigenen Wert und pers\u00f6nlichen Grenzen bleiben.",
        "Offen und verbindend werden; Beziehungen entstehen aus Echtheit statt aus Anpassung.",
      ],
      tensionFields: [
        "Helfen \u2192 Selbstachtung",
        "Gebrauchtwerden \u2192 Eigenwert",
        "F\u00fcrsorge \u2192 Abgrenzung",
        "Anerkennung \u2192 Selbstannahme",
        "Einfluss \u2192 Demut",
        "Verantwortung \u2192 Leichtigkeit",
        "Geben \u2192 Empfangen",
        "Beziehungspflege \u2192 Authentizit\u00e4t",
        "soziale Bedeutung \u2192 innere Freiheit",
      ],
      archetypalEssence: "Liebe",
      integrativePotential: "Herz & Verbundenheit",
      nervousSystemRegulation: [
        "Sicherheit durch Beziehung",
        "Grenzen sp\u00fcren und achten",
        "zwischen Geben und Empfangen balancieren",
        "\u00dcberverantwortung loslassen",
        "sich selbst wichtiger nehmen",
        "Bed\u00fcrfnisse klar kommunizieren",
        "Erholung bewusst einplanen",
        "inneren Halt st\u00e4rken",
      ],
      bodySignature: {
        gazeQuality: [
            "warm, weich und einladend",
            "pr\u00fcfend: Was braucht der andere?",
            "liebevoll, herzoffen und zugewandt",
            "leicht gierig, beziehungsorientiert",
            "sucht Resonanz und Dankbarkeit",
            "beobachtet, bevor sie oder er sich \u00f6ffnet",
          ],
        microTension: [
            "Stirn: leicht angespannt, wach",
            "Augen: aufmerksam, verbindend",
            "Mund: weich, freundlich",
            "Kiefer: entspannt oder leicht angespannt",
            "Haltung: offen, nach vorne gewandt",
          ],
        breathingRhythm: [
            "eher tief im Brustbereich",
            "atmet mit, wenn N\u00e4he entsteht",
            "Atem stockt bei Unsicherheit",
            "reguliert \u00fcber Geben und Verbindung",
          ],
        movementInitiation: [
            "geht aktiv auf andere zu",
            "bietet Hilfe an, bevor sie erbeten wird",
            "bewegt sich mit Bedacht und Herz",
            "orientiert sich an Bed\u00fcrfnissen",
            "schafft N\u00e4he und Vertrauen",
          ],
        contactStyle: [
            "herzlich, warm und verbindend",
            "sucht N\u00e4he, Resonanz und Dankbarkeit",
            "zeigt Interesse und Anteilnahme",
            "hilft gerne und zuverl\u00e4ssig",
            "kann sich zur\u00fccknehmen, wenn Liebe erwidert wird",
          ],
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Oberbauch / Innerer Raum", location: "oberhalb des Nabels", need: [
              "Selbstkontakt",
              "Ruhe",
              "eigene Grenze",
            ] },
          microInstructions: [
            "Nicht gebraucht werden.",
            "Raum einnehmen.",
            "Dich mitnehmen.",
            "Grenzen sp\u00fcren.",
            "Einfach bleiben.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Herz\u00f6ffnung, Mitgef\u00fchl, Geborgenheit, praktische Unterst\u00fctzung und Lebensfreude.",
      },
      mediaGroups: [
        {
          title: "SO2 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 2", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 2", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 2", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 2 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 2", youtubeVideoId: "jptqNJU0mrw" },
          { title: "Typ 2 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 2", youtubeVideoId: "TSHh5uRJio0" },
          { title: "Type 2 \u00b7 English Theme Song", category: "Song 2", scope: "Type 2", youtubeVideoId: "F2QH_O1BAOE" },
          { title: "SO2 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SO2", youtubeVideoId: "tLMBN_8wH9g" },
          { title: "SO2 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SO2", youtubeVideoId: "SaMqeT32TmQ" },
          { title: "SO2 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SO2", youtubeVideoId: "3NwdYJLeKN0" },
          { title: "SO2 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SO2", youtubeVideoId: "nv5bpLX_DX4" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Hyoscyamus niger",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-2/so2/heilmittel/so2-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus dem Schwarzen Bilsenkraut, einer Nachtschattenpflanze mit stark berauschender, das Verhalten enthemmender Wirkung. In ihrer Signatur liegt ein verzweifeltes Ringen um Aufmerksamkeit und Liebe: Eifersucht, das Bed\u00fcrfnis, gesehen zu werden, und die Angst, verlassen oder \u00fcbergangen zu werden. Genau das pr\u00e4gt das Mittelbild der Zwei \u2013 das starke Verlangen nach N\u00e4he, Anerkennung und Gebrauchtwerden. Das Bed\u00fcrfnis, geliebt zu werden, wird so gro\u00df, dass die eigene Mitte dar\u00fcber aus dem Blick ger\u00e4t.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als emotionale Abh\u00e4ngigkeit, Besitzanspruch und Angst vor Zur\u00fcckweisung zeigt. Es hilft, das anklammernde Werben um Zuwendung zu beruhigen und die Liebe wieder auf einen festen inneren Grund zu stellen. So darf N\u00e4he entstehen, ohne sich zu verlieren oder st\u00e4ndig um Best\u00e4tigung k\u00e4mpfen zu m\u00fcssen.",
        },
        {
          title: "Natrium chloratum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-2/so2/heilmittel/so2-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Fl\u00fcssigkeitshaushalt und L\u00f6sen von altem Kummer",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 8 reguliert den Fl\u00fcssigkeitshaushalt und ist das gro\u00dfe Salz des seelischen Gleichgewichts. Es ordnet, wo zu viel oder zu wenig flie\u00dft \u2013 im K\u00f6rper wie im Gef\u00fchl. Traditionell hilft es, alten Kummer, zur\u00fcckgehaltene Tr\u00e4nen und verschlucktes Leid zu l\u00f6sen. F\u00fcr die Zwei, die sich f\u00fcr andere aufgibt und eigene Bed\u00fcrfnisse \u00fcberh\u00f6rt, bringt es heilsamen Ausgleich. So unterst\u00fctzt es, wieder bei sich selbst aufzutanken, statt sich im Geben zu verlieren.",
          goal: "Auf der Mineralstoff-Ebene unterst\u00fctzt es, emotionale Distanz und Abkapselung aufzul\u00f6sen, damit echter Kontakt zu anderen und zu sich selbst m\u00f6glich wird.",
        },
        {
          title: "Chicory",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-2/so2/heilmittel/so2-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "selbstlose Liebe ohne Besitzanspruch",
          text: "Chicory ist die Bachbl\u00fcte f\u00fcr eine besitzergreifende, an Bedingungen gekn\u00fcpfte Form der Liebe. Sie hilft Menschen, die viel geben, dabei aber heimlich Dank, N\u00e4he und Gegenleistung erwarten. Die Bl\u00fcte wandelt anklammernde F\u00fcrsorge in echte, selbstlose Zuwendung. F\u00fcr die Zwei, die sich \u00fcber das Gebrauchtwerden definiert, ist sie eine tiefe Heilbl\u00fcte. So darf Liebe flie\u00dfen, ohne sich selbst zu verlieren oder etwas zur\u00fcckzufordern.",
          goal: "Auf der Seelenebene \u00f6ffnet es den Weg zu selbstloser F\u00fcrsorge: Liebe, die gibt, ohne Gegenliebe zu fordern \u2013 und die sich selbst dabei nicht verliert.",
        },
        {
          title: "Rosenquarz",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-2/so2/heilmittel/so2-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Herz\u00f6ffnung, Sanftheit und Selbstliebe",
          text: "Der Rosenquarz ist der zart-rosa Stein des Herzens schlechthin und seit jeher mit Liebe, Sanftheit und Vers\u00f6hnung verbunden. Er \u00f6ffnet das Herz f\u00fcr Mitgef\u00fchl, W\u00e4rme und Vergebung \u2013 und richtet diese liebevolle Haltung ausdr\u00fccklich auch nach innen, auf einen selbst. Traditionell hilft er, alten Kummer und Verletzungen sanft zu l\u00f6sen und wieder Vertrauen in N\u00e4he zu fassen. F\u00fcr die Zwei, deren Liebe fast immer nach au\u00dfen str\u00f6mt, ist er eine stille Erinnerung an die eigene Bed\u00fcrftigkeit. Er n\u00e4hrt die Selbstliebe und schenkt die Erlaubnis, auch selbst zu empfangen, ohne sich erst n\u00fctzlich machen zu m\u00fcssen.",
          goal: "Als energetisches Werkzeug \u00f6ffnet er das Herz f\u00fcr liebevolle Selbstannahme \u2013 F\u00fcrsorge, die aus dem Vollen kommt statt aus Bed\u00fcrftigkeit.",
        },
        {
          title: "Rosenbl\u00fctentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-2/so2/heilmittel/so2-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "herz\u00f6ffnend und harmonisierend",
          text: "Der Rosenbl\u00fctentee gilt als herz\u00f6ffnendes, harmonisierendes Getr\u00e4nk voller Sanftheit. Die Rose steht seit jeher f\u00fcr Liebe, Zartheit und seelische W\u00e4rme. Traditionell wird sie genutzt, um das Gem\u00fct zu bes\u00e4nftigen und das Herz zu erweichen. F\u00fcr die Zwei, deren Liebe stets nach au\u00dfen flie\u00dft, ist sie eine zarte Einladung zur Selbstf\u00fcrsorge. So erinnert ein Rosenbl\u00fctentee daran, die eigene W\u00e4rme auch sich selbst zu schenken.",
          goal: "Als pflanzliche Begleiterin \u00f6ffnet sie das Herz sanft: f\u00fcr sich selbst, f\u00fcr andere, f\u00fcr das Geben ohne Berechnung.",
        },
        {
          title: "Pulsatilla pratensis",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/pulsatilla-pratensis.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Die K\u00fcchenschelle oder Wiesen-Anemone ist eine zarte Pflanze, die sich weich mit dem Wind wiegt und sich stets dem Licht zuwendet. Diese Signatur zeigt ein sanftes, anschmiegsames, leicht weinerliches Wesen, das nach Trost, W\u00e4rme und Zuwendung verlangt. Das spiegelt die Wunde der Zwei: eine tiefe Sehnsucht nach Zugeh\u00f6rigkeit und die Angst, nur durch Gebrauchtwerden liebenswert zu sein. Wie die Bl\u00fcte dem Wind folgt, sucht die Seele Halt im Gegen\u00fcber.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anklammern, Verlassenheitsangst und das Verleugnen eigener Bed\u00fcrfnisse zeigt. Es n\u00e4hrt sanft die F\u00e4higkeit, sich selbst Trost und Halt zu geben, statt ihn nur im Au\u00dfen zu suchen. So darf aus bed\u00fcrftiger Anh\u00e4nglichkeit eine warme, freie Verbundenheit werden.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Hyoscyamus niger",
          schuessler: "Natrium chloratum",
          bachbluete: "Chicory",
          edelstein: "Rosenquarz",
          tee: "Rosenbl\u00fctentee",
        },
        homoeopathieThema: "Gewonnen aus dem Schwarzen Bilsenkraut, einer Nachtschattenpflanze mit stark berauschender, das Verhalten enthemmender Wirkung. In ihrer Signatur liegt ein verzweifeltes Ringen um Aufmerksamkeit und Liebe: Eifersucht, das Bed\u00fcrfnis, gesehen zu werden, und die Angst, verlassen oder \u00fcbergangen zu werden. Genau das pr\u00e4gt das Mittelbild der Zwei \u2013 das starke Verlangen nach N\u00e4he, Anerkennung und Gebrauchtwerden. Das Bed\u00fcrfnis, geliebt zu werden, wird so gro\u00df, dass die eigene Mitte dar\u00fcber aus dem Blick ger\u00e4t.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als emotionale Abh\u00e4ngigkeit, Besitzanspruch und Angst vor Zur\u00fcckweisung zeigt. Es hilft, das anklammernde Werben um Zuwendung zu beruhigen und die Liebe wieder auf einen festen inneren Grund zu stellen. So darf N\u00e4he entstehen, ohne sich zu verlieren oder st\u00e4ndig um Best\u00e4tigung k\u00e4mpfen zu m\u00fcssen.",
        wundeThema: "Die K\u00fcchenschelle oder Wiesen-Anemone ist eine zarte Pflanze, die sich weich mit dem Wind wiegt und sich stets dem Licht zuwendet. Diese Signatur zeigt ein sanftes, anschmiegsames, leicht weinerliches Wesen, das nach Trost, W\u00e4rme und Zuwendung verlangt. Das spiegelt die Wunde der Zwei: eine tiefe Sehnsucht nach Zugeh\u00f6rigkeit und die Angst, nur durch Gebrauchtwerden liebenswert zu sein. Wie die Bl\u00fcte dem Wind folgt, sucht die Seele Halt im Gegen\u00fcber.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anklammern, Verlassenheitsangst und das Verleugnen eigener Bed\u00fcrfnisse zeigt. Es n\u00e4hrt sanft die F\u00e4higkeit, sich selbst Trost und Halt zu geben, statt ihn nur im Au\u00dfen zu suchen. So darf aus bed\u00fcrftiger Anh\u00e4nglichkeit eine warme, freie Verbundenheit werden.",
        wunde: {
          homoeopathie: "Pulsatilla pratensis",
          schuessler: "Natrium chloratum",
          bachbluete: "Chicory",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 2). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      woundBehindPassion: {
        passion: "Stolz \u2013 bei der SO2 zeigt er sich als das Bed\u00fcrfnis, im sozialen Feld bedeutsam, einflussreich und unverzichtbar zu sein. Sie gibt, engagiert sich und verbindet \u2014 und erwartet daf\u00fcr Anerkennung, die ihren sozialen Wert best\u00e4tigt.",
        belief: "\u201eIch bin nur wichtig, wenn ich f\u00fcr andere da bin und gebraucht werde.\u201c Darunter: \u201eWenn ich aufh\u00f6re zu geben, verliere ich meinen Platz in der Gemeinschaft.\u201c",
        wound: "Die Wunde der verbotenen Bed\u00fcrftigkeit: das tiefe Gef\u00fchl, dass eigene Bed\u00fcrfnisse im sozialen Raum keinen Platz haben \u2014 dass nur Geben Zugeh\u00f6rigkeit sichert.",
        compensation: "Im sozialen Raum unverzichtbar werden: Netzwerke kn\u00fcpfen, Verbindungen stiften, Gruppen zusammenhalten. Die Energie richtet sich auf soziale Relevanz \u2014 nicht auf eigene Bed\u00fcrfnisse.",
        sufferingCycle: "Die SO2 engagiert sich, verbindet, unterst\u00fctzt \u2014 und erwartet daf\u00fcr Anerkennung. Bleibt diese aus, w\u00e4chst das Engagement statt zu sinken. Die eigenen Bed\u00fcrfnisse werden weiter zur\u00fcckgestellt, die innere Ersch\u00f6pfung w\u00e4chst im Verborgenen.",
        healingDirection: "Erkennen, dass Zugeh\u00f6rigkeit kein Ergebnis von Leistung ist. Wenn die SO2 auch empfangen kann \u2014 ohne zu geben \u2014 entsteht eine Verbindung, die tr\u00e4gt, ohne zu ersch\u00f6pfen.",
        remedy: "Wundenmittel: Pulsatilla pratensis \u00b7 Leidenschaftsmittel: Hyoscyamus niger \u00b7 Sch\u00fc\u00dfler-Salz: Natrium chloratum \u00b7 Bach-Bl\u00fcte: Chicory. Anwendung nur in therapeutischer R\u00fccksprache.",
        needsReview: [
          "\u201eHinter der Leidenschaft \u2013 die neun Wunden des Enneagramms\u201c, Kapitel Typ 2 (S. 59\u201392). SO2-Nuancen (sozialer Stolz, Verst\u00e4rkungstyp) erg\u00e4nzt. Bitte gegen Originalseiten pr\u00fcfen.",
        ],
      },
      needsReview: [
      ],
    };


const so3 = {
      code: "SO3",
      title: "Die soziale Drei",
      animal: "Gepard",
      status: "curated_draft",
      pages: "Typ 3 Grundkarte + SO3 Seiten 1-5",
      organismQuestion: "Wie kann ich erfolgreich sein und dabei meinen Wert beweisen?",
      subtypeQuestion:
        "Wie kann ich sichtbar wirken und beitragen, ohne mich \u00fcber Erfolg, Rolle oder Anerkennung zu definieren?",
      integrationSentence: "Ich nutze meine F\u00e4higkeiten zum Wohl des Ganzen und inspiriere andere durch mein echtes Sein.",
      coreSentence:
        "Wenn du nicht gl\u00e4nzen musst, wird deine Wirkung wahrhaftig, menschlich und stark.",
      visualPages: type3VisualPages("SO3", "Soziale Drei"),
      sourceCoverage: type3SourceCoverage("SO3"),
      contentModules: type3ContentModules("SO3"),
      lifeTheme: [
        "Anerkennung, Erfolg und Wirkung im sozialen Umfeld suchen.",
        "Gesehen und gesch\u00e4tzt werden wollen und sich leicht an Erwartungen ausrichten.",
        "\u00dcberzeugen und leisten wollen und dabei Kontakt zur inneren Wahrheit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und Herzraum / Brustmitte.",
      essence: {
        title: "Integrationspotenzial: Wirkung & Exzellenz",
        sentence: "Ich nutze meine F\u00e4higkeiten zum Wohl des Ganzen und inspiriere andere durch mein echtes Sein.",
        qualities: ["charismatische Pr\u00e4senz", "klare Zielorientierung", "soziale Kompetenz", "positive Ausstrahlung", "menschliche W\u00e4rme"],
      },
      integrationPath: [
        "Sich nicht nur \u00fcber Erfolg und Wirkung definieren.",
        "Nicht st\u00e4ndig leisten oder \u00fcberzeugen m\u00fcssen, um wertvoll zu sein.",
        "Erf\u00fcllung durch Echtheit, Selbstkontakt und innere Wahrhaftigkeit finden.",
      ],
      unconsciousStrategy: [
        "\u00dcber Leistung und Wirkung den eigenen Wert absichern.",
        "Sich stark an Erwartungen und Erfolgsbilder anpassen.",
        "Sich \u00fcber Anerkennung, Kompetenz und Status stabilisieren, auch wenn echte Gef\u00fchle verborgen bleiben.",
      ],
      turningPoint: [
        "Erkennen, dass Status und Anerkennung den inneren Wert nicht sichern k\u00f6nnen.",
        "Sich von \u00e4u\u00dferen Rollen und Erwartungen l\u00f6sen.",
        "Energie wird authentischer; Wahrhaftigkeit ersetzt Identifikation mit Erfolg und Wirkung.",
      ],
      integratedState: [
        "F\u00e4higkeiten bewusst nutzen, ohne sich \u00fcber Status und Anerkennung zu definieren.",
        "Erfolgreich handeln und gleichzeitig innerlich authentisch bleiben.",
        "Wirkung entsteht aus Echtheit statt aus Anpassung an Erwartungen.",
      ],
      tensionFields: [
        "Status \u2192 Selbstwert",
        "Erfolg \u2192 Authentizit\u00e4t",
        "Image \u2192 Wahrhaftigkeit",
        "Anerkennung \u2192 innere Sicherheit",
        "Wirkung \u2192 echtes Sein",
        "Leistung \u2192 Selbstannahme",
        "Rolle \u2192 Identit\u00e4t",
        "Vergleich \u2192 Eigenwert",
        "Glanz \u2192 Tiefe",
      ],
      archetypalEssence: "charismatische Wirksamkeit",
      integrativePotential: "Wirkung & Exzellenz",
      nervousSystemRegulation: [
        "Aktivierung gezielt steuern",
        "Erholung bewusst einplanen",
        "zwischen Anspannung und Entspannung balancieren",
        "\u00dcberidentifikation vermeiden",
        "sich selbst nicht \u00fcberfordern",
        "Bed\u00fcrfnisse klar kommunizieren",
        "inneren Druck loslassen",
        "inneren Halt st\u00e4rken",
      ],
      bodySignature: {
        gazeQuality: [
            "wach, pr\u00fcfend und fokussiert",
            "pr\u00fcfend: Was bringt es? Was n\u00fctzt es?",
            "leicht distanziert, n\u00fcchtern",
            "sucht Wirkung und Vorteile",
            "beobachtet, bevor sie oder er handelt",
          ],
        movementInitiation: [
            "geht zielgerichtet und entschlossen",
            "handelt schnell, wenn es Vorteile bringt",
            "bewertet st\u00e4ndig M\u00f6glichkeiten und w\u00e4gt Nutzen ab",
            "orientiert sich an Ergebnissen und Erfolgsaussichten",
            "schafft Bewegung durch Strategie und Planung",
          ],
        contactStyle: [
            "direkt, charmant und angepasst",
            "spricht l\u00f6sungs- und nutzenorientiert",
            "zeigt Kompetenz und \u00dcberblick",
            "h\u00f6rt zu, um Informationen f\u00fcr sich zu nutzen",
            "kommuniziert \u00fcberzeugend und zielgerichtet",
          ],
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen",
              "Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          microInstructions: [
            "Keine Rolle spielen.",
            "Echt bleiben.",
            "Maske lockern.",
            "Sichtbar sein.",
            "Ruhig atmen.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Kompetenz, Ziele, Wert schaffen, Anerkennung und Freude an Ergebnissen.",
      },
      mediaGroups: [
        {
          title: "SO3 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 3", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 3", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 3", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 3 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 3", youtubeVideoId: "U7WEq5E07Wk" },
          { title: "Typ 3 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 3", youtubeVideoId: "W6PZISZQCRY" },
          { title: "Type 3 \u00b7 English Theme Song", category: "Song 2", scope: "Type 3", youtubeVideoId: "NLlrJFYTRwU" },
          { title: "SO3 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SO3", youtubeVideoId: "Rxprww_GTsc" },
          { title: "SO3 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SO3", youtubeVideoId: "hFPun_FKul8" },
          { title: "SO3 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SO3", youtubeVideoId: "0I-4rThOvQ0" },
          { title: "SO3 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SO3", youtubeVideoId: "PUSFLCfgqHw" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Tarentula hispanica",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-3/so3/heilmittel/so3-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus der spanischen Tarantel \u2013 einem ruhelosen Tier, dessen Biss der \u00dcberlieferung nach zu fiebrigem, getriebenem Tanzen zwingt. Diese Signatur durchzieht das Mittelbild: eine rastlose, hektische Betriebsamkeit, das Bed\u00fcrfnis zu beeindrucken, geschickte Wendigkeit und ein st\u00e4ndiges Unter-Strom-Stehen. Genau das pr\u00e4gt die Drei \u2013 der starke Antrieb nach Wirkung, Erfolg und Anerkennung. Wie die Tarantel kann sie kaum innehalten, immer in Bewegung, immer auf der B\u00fchne.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Leistungsdruck, Getriebenheit und blo\u00dfes Funktionieren zeigt. Es hilft, das innere Tempo zu drosseln und den Wert nicht l\u00e4nger an Wirkung und Applaus zu kn\u00fcpfen. So darf die Drei zur Ruhe kommen und sp\u00fcren, dass sie auch ohne st\u00e4ndiges Gl\u00e4nzen gen\u00fcgt.",
        },
        {
          title: "Ferrum phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-3/so3/heilmittel/so3-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Energie, Widerstandskraft und Initiative",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 3 ist das Salz der Energie, der Sauerstoffaufnahme und der ersten Abwehrkraft. Es st\u00e4rkt Widerstandskraft, Initiative und gesunde Tatkraft. Auf seelischer Ebene steht es f\u00fcr Mut und Belastbarkeit, ohne sich zu verausgaben. F\u00fcr die Drei, die sich \u00fcber Leistung definiert und Versagen f\u00fcrchtet, ist es ein kr\u00e4ftigender Begleiter. So unterst\u00fctzt es echte, getragene Energie statt rastloses Funktionieren unter Hochdruck.",
          goal: "Auf der Mineralstoff-Ebene st\u00e4rkt es den Antrieb und die Ausdauer, ohne in \u00dcberleistung und rastlose Aktivit\u00e4t zu kippen \u2013 Energie wird kanalisiert statt verbrannt.",
        },
        {
          title: "Vervain",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-3/so3/heilmittel/so3-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "gelassene Begeisterung statt \u00dcbereifer",
          text: "Vervain ist die Bachbl\u00fcte f\u00fcr \u00dcbereifer, Begeisterung bis zur Ersch\u00f6pfung und st\u00e4ndiges inneres Anspannen. Sie hilft Menschen, die mit voller Kraft f\u00fcr ihre Ziele brennen und kaum abschalten k\u00f6nnen. Die Bl\u00fcte mildert die \u00dcberspannung und bringt Gelassenheit in den Einsatz. F\u00fcr die Drei, die unter Hochdruck funktioniert und Stillstand f\u00fcrchtet, ist sie eine wohltuende Entlastung. So darf Begeisterung bleiben, aber ruhiger und ma\u00dfvoller flie\u00dfen.",
          goal: "Auf der Seelenebene hilft es, die innere Flamme zu m\u00e4\u00dfigen: \u00dcberzeugungen d\u00fcrfen stark sein, ohne andere zu \u00fcberrennen \u2013 Inspiration statt Druck.",
        },
        {
          title: "Tigerauge",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-3/so3/heilmittel/so3-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Selbstvertrauen, Mut und Klarheit unter Druck",
          text: "Das Tigerauge ist ein goldbraun schimmernder Quarz mit seidigem Lichtspiel und gilt als Stein des Mutes, der Erdung und der klaren Sicht. Es st\u00e4rkt Selbstvertrauen und Willenskraft und hilft, auch unter Druck Ruhe, \u00dcberblick und Standfestigkeit zu bewahren. Traditionell wird es als Schutzstein getragen, der Nervosit\u00e4t, Selbstzweifel und Stress mindert. F\u00fcr die Drei, deren Wert sich an Leistung und Erfolg zu bemessen scheint, lenkt es den Blick nach innen. So wird erfahrbar, dass echter Wert aus innerer Festigkeit und Klarheit erw\u00e4chst \u2013 nicht allein aus dem n\u00e4chsten Ziel.",
          goal: "Als energetisches Werkzeug verbindet er Zielstrebigkeit mit innerer Ruhe \u2013 Erfolg darf entstehen, ohne dass das Selbst dahinter verschwindet.",
        },
        {
          title: "Rosmarintee",
          subtitle: "Tee",
          image: "assets/knowledge/type-3/so3/heilmittel/so3-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "belebend und kr\u00e4ftigend",
          text: "Rosmarin ist ein belebendes, kr\u00e4ftigendes Kraut, das Kreislauf und Geist anregt. Sein w\u00fcrziger Duft weckt, f\u00f6rdert die Konzentration und gibt frische Tatkraft. Traditionell wird er bei M\u00fcdigkeit, Ersch\u00f6pfung und Antriebsschw\u00e4che eingesetzt. F\u00fcr die Drei, die unter Hochdruck l\u00e4uft und sich leicht verausgabt, gibt er klare, getragene Energie. So unterst\u00fctzt ein Rosmarintee belebende Kraft, die aus Frische statt aus Druck kommt.",
          goal: "Als pflanzliche Begleiterin bringt sie Klarheit und Energie in Situationen, wo Kontratyp-Ersch\u00f6pfung und Verschmelzung den eigenen Wunsch verschleiern.",
        },
        {
          title: "Lycopodium clavatum",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/lycopodium-clavatum.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus den Sporen des B\u00e4rlapps \u2013 einer unscheinbaren Pflanze, deren Sporen erst unter Reibung ihre verborgene Kraft entfalten. Diese Signatur trifft den Kern: ein nach au\u00dfen souver\u00e4nes Auftreten, das innen einen tiefen Mangel an Selbstvertrauen und gro\u00dfe Versagensangst verbirgt. Das spiegelt die Wunde der Drei \u2013 die \u00dcberzeugung, nur durch Leistung wertvoll zu sein, w\u00e4hrend verdeckt der Selbstzweifel nagt. Hinter der starken Fassade liegt die Angst, entlarvt zu werden.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Leistungsdruck, verborgene Unsicherheit und die Angst vor dem Versagen zeigt. Es st\u00e4rkt ein echtes Selbstvertrauen, das nicht mehr auf Beweise angewiesen ist. So darf der Wert von innen wachsen, unabh\u00e4ngig von Erfolg und fremdem Urteil.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Tarentula hispanica",
          schuessler: "Ferrum phosphoricum",
          bachbluete: "Vervain",
          edelstein: "Tigerauge",
          tee: "Rosmarintee",
        },
        homoeopathieThema: "Gewonnen aus der spanischen Tarantel \u2013 einem ruhelosen Tier, dessen Biss der \u00dcberlieferung nach zu fiebrigem, getriebenem Tanzen zwingt. Diese Signatur durchzieht das Mittelbild: eine rastlose, hektische Betriebsamkeit, das Bed\u00fcrfnis zu beeindrucken, geschickte Wendigkeit und ein st\u00e4ndiges Unter-Strom-Stehen. Genau das pr\u00e4gt die Drei \u2013 der starke Antrieb nach Wirkung, Erfolg und Anerkennung. Wie die Tarantel kann sie kaum innehalten, immer in Bewegung, immer auf der B\u00fchne.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Leistungsdruck, Getriebenheit und blo\u00dfes Funktionieren zeigt. Es hilft, das innere Tempo zu drosseln und den Wert nicht l\u00e4nger an Wirkung und Applaus zu kn\u00fcpfen. So darf die Drei zur Ruhe kommen und sp\u00fcren, dass sie auch ohne st\u00e4ndiges Gl\u00e4nzen gen\u00fcgt.",
        wundeThema: "Bereitet aus den Sporen des B\u00e4rlapps \u2013 einer unscheinbaren Pflanze, deren Sporen erst unter Reibung ihre verborgene Kraft entfalten. Diese Signatur trifft den Kern: ein nach au\u00dfen souver\u00e4nes Auftreten, das innen einen tiefen Mangel an Selbstvertrauen und gro\u00dfe Versagensangst verbirgt. Das spiegelt die Wunde der Drei \u2013 die \u00dcberzeugung, nur durch Leistung wertvoll zu sein, w\u00e4hrend verdeckt der Selbstzweifel nagt. Hinter der starken Fassade liegt die Angst, entlarvt zu werden.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Leistungsdruck, verborgene Unsicherheit und die Angst vor dem Versagen zeigt. Es st\u00e4rkt ein echtes Selbstvertrauen, das nicht mehr auf Beweise angewiesen ist. So darf der Wert von innen wachsen, unabh\u00e4ngig von Erfolg und fremdem Urteil.",
        wunde: {
          homoeopathie: "Lycopodium clavatum",
          schuessler: "Ferrum phosphoricum",
          bachbluete: "Walnut",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 3). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      woundBehindPassion: {
        passion: "T\u00e4uschung \u2013 bei der SO3 zeigt sie sich als das Angleichen des eigenen Bildes an das, was im sozialen Feld als erfolgreich, bedeutend und bewundernswert gilt. Status und Sichtbarkeit ersetzen innerlich das Gef\u00fchl von echtem Wert.",
        belief: "\u201eMein Wert zeigt sich darin, wie erfolgreich und anerkannt ich in der Gruppe bin.\u201c Darunter: \u201eWenn niemand meinen Erfolg sieht, z\u00e4hle ich nicht.\u201c",
        wound: "Die Wunde der Wertlosigkeit: das tiefe Gef\u00fchl, dass das eigene Sein \u2014 ohne sichtbaren Erfolg, Status oder Bewunderung im sozialen Raum \u2014 nicht genug ist.",
        compensation: "Leistung sichtbar machen, Rollen einnehmen, Status aufbauen und Anerkennung im sozialen Feld sammeln. Die SO3 richtet sich intensiv an dem aus, was im jeweiligen Umfeld als wertvoll gilt \u2014 und gestaltet das eigene Bild entsprechend.",
        sufferingCycle: "Die SO3 erreicht Anerkennung und Position \u2014 aber kaum ist eine Leistung gesehen, entsteht das Bed\u00fcrfnis nach der n\u00e4chsten. Selbstwert ist an \u00e4u\u00dfere Best\u00e4tigung gebunden; bleibt Resonanz aus, w\u00e4chst die Anspannung und der Druck, mehr zu leisten.",
        healingDirection: "Erkennen, dass Status und Sichtbarkeit keinen echten inneren Wert erzeugen. Wenn die SO3 lernt, sich unabh\u00e4ngig von \u00e4u\u00dferer Best\u00e4tigung als wertvoll zu erleben, entsteht eine tiefere und stabilere Form von Selbstvertrauen.",
        remedy: "Wundenmittel: Lycopodium clavatum \u00b7 Leidenschaftsmittel: Tarentula hispanica \u00b7 Sch\u00fc\u00dfler-Salz: Ferrum phosphoricum \u00b7 Bach-Bl\u00fcte: Walnut. Anwendung nur in therapeutischer R\u00fccksprache.",
        needsReview: [
          "\u201eHinter der Leidenschaft \u2013 die neun Wunden des Enneagramms\u201c, Kapitel Typ 3 (S. 93\u2013117). SO3-Nuancen (Verst\u00e4rkungstyp, sozialer Status) erg\u00e4nzt. Bitte gegen Originalseiten pr\u00fcfen.",
        ],
      },
      needsReview: [
        "Typ-3-Tafeln sind sichtbar verortet; SO3 ist als mehrsprachig vorbereiteter Wissensblock angelegt.",
      ],
    };


const so4 = {
      code: "SO4",
      title: "Die soziale Vier",
      animal: "G\u00fcrteltier",
      status: "curated_draft",
      pages: "Typ 4 Grundkarte + SO4 Seiten 1-5",
      organismQuestion: "Wer bin ich wirklich und was macht mich einzigartig?",
      subtypeQuestion:
        "Wie kann ich mich in meiner Besonderheit zeigen, ohne mich mit anderen zu vergleichen oder ausgeschlossen zu f\u00fchlen?",
      integrationSentence: "Ich bin wertvoll, genau so, wie ich bin. In Echtheit inspiriere ich echte Verbindung.",
      coreSentence:
        "Wenn du deinen Mangel nicht festh\u00e4ltst, entsteht Zugeh\u00f6rigkeit, Selbstannahme und stille W\u00fcrde.",
      visualPages: type4VisualPages("SO4", "Soziale Vier"),
      lifeTheme: [
        "Zugeh\u00f6rigkeit, Tiefe und einen Platz suchen, an dem du wirklich gesehen wirst.",
        "Sich leicht mit anderen vergleichen und sp\u00fcren, was fehlt.",
        "Anerkennung und Verbundenheit suchen und dabei den eigenen Wert verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Unterbauch / Beckenbereich.",
      essence: {
        title: "Integrationspotenzial: Authentizit\u00e4t & Bedeutungsvolle Verbindung",
        sentence: "Ich bin wertvoll, genau so, wie ich bin. In Echtheit inspiriere ich echte Verbindung.",
        qualities: ["emotionale Echtheit", "tiefe Verbindung", "wertsch\u00e4tzende Ehrlichkeit", "Raum f\u00fcr Individualit\u00e4t", "kreatives Miteinander"],
      },
      integrationPath: [
        "Den eigenen Wert nicht st\u00e4ndig \u00fcber Besonderheit beweisen m\u00fcssen.",
        "Dazugeh\u00f6ren d\u00fcrfen, ohne dich \u00fcber Mangel oder Anderssein zu definieren.",
        "Tiefe durch Selbstannahme, echte Verbindung und innere Stabilit\u00e4t finden.",
      ],
      unconsciousStrategy: [
        "\u00dcber Besonderheit und Gef\u00fchlstiefe deinen Platz sichern wollen.",
        "Anderssein sichtbar machen und dar\u00fcber Resonanz und Zugeh\u00f6rigkeit suchen.",
        "Dich \u00fcber Ausdruck, Identit\u00e4t und Emotionen stabilisieren, auch wenn Selbstzweifel entstehen.",
      ],
      turningPoint: [
        "Erkennen, dass Vergleiche und Au\u00dfenseitergef\u00fchle vom eigenen Wert trennen.",
        "Sich selbst annehmen, ohne sich st\u00e4ndig mit anderen zu messen.",
        "Zugeh\u00f6rigkeit entsteht durch Selbstannahme statt durch Leidensidentit\u00e4t.",
      ],
      integratedState: [
        "Den eigenen Wert erkennen, ohne dich st\u00e4ndig mit anderen zu vergleichen.",
        "In Verbindung mit dir selbst und mit anderen Menschen bleiben.",
        "Energie wird stabil und offen, Zugeh\u00f6rigkeit entsteht aus Selbstannahme.",
      ],
      tensionFields: [
        "Vergleich \u2192 Selbstwert",
        "Scham \u2192 W\u00fcrde",
        "Au\u00dfenseitergef\u00fchl \u2192 Zugeh\u00f6rigkeit",
        "Mangelgef\u00fchl \u2192 innere F\u00fclle",
        "Leidensidentit\u00e4t \u2192 Selbstannahme",
        "Sehnsucht \u2192 Gegenw\u00e4rtigkeit",
        "Anderssein \u2192 Verbundenheit",
        "Empfindlichkeit \u2192 innere Stabilit\u00e4t",
        "Traurigkeit \u2192 lebendige Teilhabe",
      ],
      archetypalEssence: "emotionale Echtheit",
      integrativePotential: "Authentizit\u00e4t & Bedeutungsvolle Verbindung",
      bodySignature: {
        basicTension: "Zwischen dem Wunsch, echt und verstanden zu sein, und der Angst, \u00fcbernommen oder nicht gesehen zu werden.",
        gazeQuality: [
            "tief, melancholisch und distanziert",
            "nach innen gerichtet, suchend",
            "leicht traurig, als s\u00e4he er mehr als andere",
            "beobachtet aus der Ferne",
            "zur\u00fcckhaltend, fast unsichtbar wirkend",
          ],
        microTension: [
            "Stirn: leicht angespannt, in Gedanken",
            "Augen: tr\u00e4umerisch, mit feiner Traurigkeit",
            "Mund: neutral bis leicht gesenkt",
            "Kiefer: entspannt, zugespannter Unterton",
            "Haltung: zur\u00fcckhaltend, leicht in sich gekehrt",
          ],
        breathingRhythm: [
            "eher flach im Brustbereich",
            "atmet unregelm\u00e4\u00dfig und tiefer bei R\u00fcckzug",
            "Atem stockt bei emotionaler \u00dcberforderung",
            "reguliert \u00fcber R\u00fcckzug und Kreativit\u00e4t",
          ],
        movementInitiation: [
            "bewegt sich bewusst und dosiert",
            "handelt erst, wenn es sich stimmig anf\u00fchlt",
            "bevorzugt R\u00fcckzug und Reflexion",
            "nutzt Kreativit\u00e4t als Ausdruck",
            "zieht sich bei \u00dcberstimulation zur\u00fcck",
            "schafft Raum durch Grenzen",
          ],
        contactStyle: [
            "zur\u00fcckhaltend, achtend und anspruchsvoll",
            "spricht erst, wenn es wirklich etwas zu sagen gibt",
            "sagt wenig, aber mit Bedeutung",
            "h\u00f6rt tief zu und sp\u00fcrt zwischen den Zeilen",
            "kommuniziert feinf\u00fchlig und differenziert",
          ],
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Unterbauch / Beckenbereich", location: "unterhalb des Nabels", need: [
              "Sicherheit",
              "Schutz",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nicht vergleichen.",
            "Platz sp\u00fcren.",
            "Kontakt halten.",
            "Dazugeh\u00f6ren d\u00fcrfen.",
            "Ruhig bleiben.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Kreativit\u00e4t, Tiefe Verbindung, R\u00fcckzug, Sch\u00f6nheit, Mitgef\u00fchl und Verst\u00e4ndnis.",
      },
      nervousSystemRegulation: [
        "Gef\u00fchle bewusst zulassen statt sie zu vergleichen",
        "den eigenen Wert unabh\u00e4ngig von anderen sp\u00fcren",
        "bewusst zwischen N\u00e4he und R\u00fcckzug pendeln",
        "Selbstkritik sanft transformieren",
        "im K\u00f6rper ankommen statt im Kopf zu kreisen",
        "Scham benennen statt sie zu verbergen",
        "Zugeh\u00f6rigkeit von innen sp\u00fcren",
        "kreativen Ausdruck als Ventil nutzen",
      ],
      contentModules: [
        {
          title: "Typ 4 \u00b7 Grundkarte",
          intro: "Die Typ-4-Grundkarte bildet die gemeinsame Grundlage aller Vierer-Subtypen. Im Zentrum steht die Sehnsucht nach Echtheit, Tiefe und einer unverwechselbaren Identit\u00e4t. Der K\u00f6rper organisiert sich auf Gef\u00fchl, Bedeutung und das, was ber\u00fchrt.",
          entries: [
            { label: "Grundthema", text: "Einzigartigkeit & Tiefe. Typ 4 richtet Aufmerksamkeit auf Authentizit\u00e4t, Gef\u00fchlstiefe und die Frage nach der eigenen, unverwechselbaren Identit\u00e4t." },
            { label: "Organismusfrage", text: "Wer bin ich wirklich und was macht mich einzigartig?" },
            { label: "Innerer Konflikt", text: "Sehnsucht und Mangel stehen gegeneinander: das Gef\u00fchl, etwas Wesentliches zu vermissen, gegen\u00fcber dem Wunsch, ganz und echt zu sein." },
            { label: "K\u00f6rperorganisation", text: "Nach innen gewandt, fein gestimmt und emotional durchl\u00e4ssig. Brust und Herzraum aktiv, die Energie pendelt zwischen R\u00fcckzug und intensivem Ausdruck." },
            { label: "Blickqualit\u00e4t", text: "Tief, suchend und introspektiv. Der Blick fragt nach dem, was ber\u00fchrt und bedeutet, und sucht das Echte hinter der Oberfl\u00e4che." },
            { label: "Mikrospannung", text: "Feine Spannung um Augen und Mund, melancholischer Grundton, innere Bewegtheit, die sich in der Mimik spiegelt." },
            { label: "Atemrhythmus", text: "Ungleichm\u00e4\u00dfig und gef\u00fchlsgebunden. Vertieft sich bei Ber\u00fchrung, stockt bei Verletzung oder Sehnsucht." },
            { label: "Bewegungsinitiierung", text: "Stimmungsabh\u00e4ngig und ausdrucksstark. Bewegt sich aus dem Gef\u00fchl heraus, zieht sich bei \u00dcberforderung zur\u00fcck." },
            { label: "Kontaktstil", text: "Tief, pers\u00f6nlich und wahrhaftig. Sucht echte Begegnung und Verst\u00e4ndnis, reagiert empfindlich auf Oberfl\u00e4chlichkeit." },
            { label: "Spannungsverteilung", text: "Hauptspannung im Herzraum und um die Augen. Nebenaktivit\u00e4t in Kehle und Solarplexus." },
            { label: "Integrationsweg", text: "Vom Mangel zur F\u00fclle. Von der Sehnsucht zur Gegenwart. Selbstannahme statt st\u00e4ndiger Suche nach dem Fehlenden." },
            { label: "Archetypisches Tier", text: "Schwan: Anmut, Sch\u00f6nheit, Tiefe, Sensibilit\u00e4t, W\u00fcrde und Transformation." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SO4 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 4", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 4", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 4", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 4 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 4", youtubeVideoId: "Qa76bXczQGI" },
          { title: "Typ 4 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 4", youtubeVideoId: "Y-ScnvbdFFQ" },
          { title: "Type 4 \u00b7 English Theme Song", category: "Song 2", scope: "Type 4", youtubeVideoId: "VK3YTCdZc10" },
          { title: "SO4 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SO4", youtubeVideoId: "r1ni5PfATM8" },
          { title: "SO4 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SO4", youtubeVideoId: "dubv-FXZwDo" },
          { title: "SO4 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SO4", youtubeVideoId: "1WerclI4m18" },
          { title: "SO4 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SO4", youtubeVideoId: "E3Ih7Y4JsBA" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Ignatia amara",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-4/so4/heilmittel/so4-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus der Bohne des Ignatiusbaums \u2013 einem Samen mit paradoxer, widerspr\u00fcchlicher Wirkung, der seit jeher mit Kummer und entt\u00e4uschter Liebe verbunden ist. Diese Signatur pr\u00e4gt das Mittelbild: feine Empfindsamkeit, wechselnde, gegens\u00e4tzliche Stimmungen, Seufzen und ein Hang zur Idealisierung. Genau das lebt in der Vier \u2013 das Bed\u00fcrfnis, sich selbst treu zu sein und verstanden zu werden, getragen von tiefer Sehnsucht nach Authentizit\u00e4t und Bedeutung. Das Gef\u00fchl schwingt zwischen H\u00f6hen und Tiefen, immer auf der Suche nach dem Echten.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich emotionale Intensit\u00e4t, innerer R\u00fcckzug und tiefe Sehnsucht zeigen. Es hilft, das Auf und Ab der Gef\u00fchle zu mildern, ohne die Tiefe zu verlieren. So darf die Vier in ihrer Empfindsamkeit ruhen, statt sich in ihr zu verlieren.",
        },
        {
          title: "Kalium phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-4/so4/heilmittel/so4-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Nervenkraft bei Ersch\u00f6pfung, seelische St\u00e4rke",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 5 ist das gro\u00dfe Nerven- und Energiesalz. Es st\u00e4rkt bei seelischer und k\u00f6rperlicher Ersch\u00f6pfung, n\u00e4hrt die Nervenkraft und gibt innere Festigkeit. Traditionell hilft es bei Niedergeschlagenheit, Gr\u00fcbeln und Antriebsschw\u00e4che. F\u00fcr die Vier, die sich in Sehnsucht, Schwermut und dem Gef\u00fchl des Andersseins verlieren kann, schenkt es Stabilit\u00e4t. So unterst\u00fctzt es einen ruhigen, getragenen Boden unter wechselnden Gef\u00fchlen.",
          goal: "Auf der Mineralstoff-Ebene wirkt es ausgleichend auf das Nervensystem, wenn innerer Schmerz, Ersch\u00f6pfung und emotionale \u00dcberflutung die Lebendigkeit d\u00e4mpfen.",
        },
        {
          title: "Sweet Chestnut",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-4/so4/heilmittel/so4-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Hoffnung und Halt in tiefer Not",
          text: "Sweet Chestnut ist die Bachbl\u00fcte f\u00fcr tiefste seelische Not und das Gef\u00fchl \u00e4u\u00dferster Verlassenheit. Sie ist f\u00fcr Momente, in denen alles dunkel und ausweglos erscheint. Die Bl\u00fcte bringt Hoffnung und das Vertrauen, dass auch im tiefsten Tal ein Licht entsteht. F\u00fcr die Vier, die sich in Schwermut und dem Gef\u00fchl des Nicht-Dazugeh\u00f6rens verlieren kann, ist sie ein Trost. So darf aus tiefer Verzweiflung wieder Halt und Zuversicht erwachsen.",
          goal: "Auf der Seelenebene \u00f6ffnet es in der dunkelsten Stunde einen neuen Weg: aus dem Tunnel des Schmerzes zur\u00fcck ins Leben, ins Erleben, ins F\u00fchlen.",
        },
        {
          title: "Rhodonit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-4/so4/heilmittel/so4-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Heilung emotionaler Wunden und Selbstwert",
          text: "Der Rhodonit ist ein rosa-schwarz gemaserter Stein und gilt als gro\u00dfer Helfer bei seelischen Verletzungen. Das Rosa steht f\u00fcr Liebe und Selbstwert, die schwarzen Einschl\u00fcsse f\u00fcr die F\u00e4higkeit, auch dunkle Gef\u00fchle zu halten und zu wandeln. Er bes\u00e4nftigt alte emotionale Wunden, harmonisiert Stimmungsschwankungen und gibt in inneren St\u00fcrmen Halt. F\u00fcr die Vier, die sich oft anders, fremd und nicht zugeh\u00f6rig f\u00fchlt, ist er ein erdender Anker. So f\u00fchrt er aus Schmerz und Sehnsucht in eine ruhige, liebevolle Annahme des eigenen Wertes und der eigenen Geschichte.",
          goal: "Als energetisches Werkzeug h\u00e4lt er den Raum f\u00fcr Wunden und Sch\u00f6nheit gleichzeitig \u2013 der Schmerz des Einzigartigen darf sich in Mitgef\u00fchl wandeln.",
        },
        {
          title: "Weidenr\u00f6schentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-4/so4/heilmittel/so4-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "bes\u00e4nftigend und ausgleichend",
          text: "Das Weidenr\u00f6schen ist ein mildes, ausgleichendes Kraut mit bes\u00e4nftigender Wirkung auf das Gem\u00fct. Es gilt als sanfter Begleiter in Phasen innerer Unruhe und seelischer Wechselb\u00e4der. Traditionell wird es zur Beruhigung und Harmonisierung getrunken. F\u00fcr die Vier, die starke Gef\u00fchle und Sehnsucht durchlebt, schenkt es einen ruhigen Boden. So hilft ein Weidenr\u00f6schentee, in den Wogen der Gef\u00fchle einen stillen Ausgleich zu finden.",
          goal: "Als pflanzliche Begleiterin weitet sie den inneren Raum \u2013 aus Zerstreuung und Vermeidung in sanfte, erdende Gegenw\u00e4rtigkeit.",
        },
        {
          title: "Ignatia amara",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/ignatia-amara.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Auch auf der Wunden-Ebene wirkt die Ignatiusbohne \u2013 das gro\u00dfe hom\u00f6opathische Mittel f\u00fcr nicht verarbeitete Trauer. Seine Signatur ist der konservierte Schmerz: ein Verlust, der innerlich festgehalten und nie ganz losgelassen wurde, mit verschluckten Tr\u00e4nen und stillem Kummer. Das ist die Wunde der Trennung der Vier \u2013 die Erfahrung eines Schmerzes, der nicht vollst\u00e4ndig ausgedr\u00fcckt werden konnte. Die Seele bewahrt das Verlorene, statt es zu betrauern und ziehen zu lassen.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als zur\u00fcckgehaltene Trauer, innere Sehnsucht und konservierter Schmerz zeigt. Es hilft, festgehaltenen Kummer behutsam zu l\u00f6sen und Gef\u00fchltes wirklich abflie\u00dfen zu lassen. So darf aus bewahrtem Schmerz eine vers\u00f6hnte, lebendige Tiefe werden.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Ignatia amara",
          schuessler: "Kalium phosphoricum",
          bachbluete: "Sweet Chestnut",
          edelstein: "Rhodonit",
          tee: "Weidenr\u00f6schentee",
        },
        homoeopathieThema: "Gewonnen aus der Bohne des Ignatiusbaums \u2013 einem Samen mit paradoxer, widerspr\u00fcchlicher Wirkung, der seit jeher mit Kummer und entt\u00e4uschter Liebe verbunden ist. Diese Signatur pr\u00e4gt das Mittelbild: feine Empfindsamkeit, wechselnde, gegens\u00e4tzliche Stimmungen, Seufzen und ein Hang zur Idealisierung. Genau das lebt in der Vier \u2013 das Bed\u00fcrfnis, sich selbst treu zu sein und verstanden zu werden, getragen von tiefer Sehnsucht nach Authentizit\u00e4t und Bedeutung. Das Gef\u00fchl schwingt zwischen H\u00f6hen und Tiefen, immer auf der Suche nach dem Echten.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich emotionale Intensit\u00e4t, innerer R\u00fcckzug und tiefe Sehnsucht zeigen. Es hilft, das Auf und Ab der Gef\u00fchle zu mildern, ohne die Tiefe zu verlieren. So darf die Vier in ihrer Empfindsamkeit ruhen, statt sich in ihr zu verlieren.",
        wundeThema: "Auch auf der Wunden-Ebene wirkt die Ignatiusbohne \u2013 das gro\u00dfe hom\u00f6opathische Mittel f\u00fcr nicht verarbeitete Trauer. Seine Signatur ist der konservierte Schmerz: ein Verlust, der innerlich festgehalten und nie ganz losgelassen wurde, mit verschluckten Tr\u00e4nen und stillem Kummer. Das ist die Wunde der Trennung der Vier \u2013 die Erfahrung eines Schmerzes, der nicht vollst\u00e4ndig ausgedr\u00fcckt werden konnte. Die Seele bewahrt das Verlorene, statt es zu betrauern und ziehen zu lassen.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als zur\u00fcckgehaltene Trauer, innere Sehnsucht und konservierter Schmerz zeigt. Es hilft, festgehaltenen Kummer behutsam zu l\u00f6sen und Gef\u00fchltes wirklich abflie\u00dfen zu lassen. So darf aus bewahrtem Schmerz eine vers\u00f6hnte, lebendige Tiefe werden.",
        wunde: {
          homoeopathie: "Ignatia amara",
          schuessler: "Kalium phosphoricum",
          bachbluete: "Willow",
        },
      },
      woundBehindPassion: {
        passion: "Neid \u2013 bei der SO4 zeigt er sich als der schmerzhafte Vergleich mit anderen im sozialen Raum: Andere scheinen leichter dazuzugeh\u00f6ren, mehr Anerkennung zu erhalten oder innere Leichtigkeit zu haben, die der SO4 fehlt.",
        belief: "\u201eAndere haben etwas, das mir fehlt \u2014 und das zeigt sich besonders im Vergleich.\u201c Darunter: \u201eIch geh\u00f6re nicht wirklich dazu \u2014 mein Anderssein trennt mich.\u201c",
        wound: "Die Wunde der Trennung: das tiefe Gef\u00fchl, von Zugeh\u00f6rigkeit und sozialer Anerkennung abgetrennt zu sein \u2014 nicht wegen \u00e4u\u00dferer Umst\u00e4nde, sondern wegen eines inneren Mangels.",
        compensation: "Sich im sozialen Kontext \u00fcber Besonderheit, Tiefe oder emotionale Qualit\u00e4ten zeigen. Die SO4 macht ihr Anderssein sichtbar und hofft, darin Resonanz und Zugeh\u00f6rigkeit zu finden \u2014 doch der Vergleich entleert weiter.",
        sufferingCycle: "Die SO4 beobachtet, was andere haben \u2014 und f\u00fchlt umso deutlicher, was ihr fehlt. Selbst wenn Resonanz entsteht, meldet sich bald der n\u00e4chste Vergleich. Die innere \u00dcberzeugung des Mangelseins best\u00e4tigt sich immer wieder.",
        healingDirection: "Erkennen, dass Zugeh\u00f6rigkeit nicht durch Besonderheit oder Leistung verdient werden muss. Wenn die SO4 ihren Wert unabh\u00e4ngig vom sozialen Vergleich erlebt, entsteht eine tiefere und stabilere Form von Selbstannahme.",
        remedy: "Wundenmittel: Ignatia amara \u00b7 Leidenschaftsmittel: Ignatia amara \u00b7 Sch\u00fc\u00dfler-Salz: Kalium phosphoricum \u00b7 Bach-Bl\u00fcte: Willow. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const so5 = {
      code: "SO5",
      title: "Die soziale F\u00fcnf",
      animal: "Oktopus",
      status: "curated_draft",
      pages: "Typ 5 Grundkarte + SO5 Seiten 1-5",
      organismQuestion: "Wie kann ich verstehen und sicher sein, dass ich kompetent bin?",
      subtypeQuestion:
        "Wie kann ich mein Wissen teilen und Orientierung geben, ohne mich \u00fcber Distanz oder \u00dcberlegenheit zu sichern?",
      integrationSentence: "Ich teile mein Wissen in Verbindung und st\u00e4rke damit das Ganze.",
      coreSentence:
        "Wenn Wissen nicht \u00fcber Menschen steht, entsteht wirkliche Weisheit und lebendiger Kontakt.",
      visualPages: type5VisualPages("SO5", "Soziale F\u00fcnf"),
      lifeTheme: [
        "Orientierung durch Wissen, Verst\u00e4ndnis und geistige Klarheit suchen.",
        "Zusammenh\u00e4nge durchdringen wollen und dabei Gef\u00fchle und N\u00e4he oft auf Abstand halten.",
        "Unabh\u00e4ngig und kompetent bleiben wollen und dabei leicht Verbindung und Teilhabe verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und Bauch / K\u00f6rpermitte.",
      essence: {
        title: "Integrationspotenzial: Wissen teilen & Verbindungen gestalten",
        sentence: "Ich teile mein Wissen in Verbindung und st\u00e4rke damit das Ganze.",
        qualities: ["ruhige Pr\u00e4senz", "analytischer Verstand", "tiefes Zuh\u00f6ren", "klare Struktur", "durchdachte Kommunikation"],
      },
      integrationPath: [
        "Wissen und Gef\u00fchle miteinander verbinden.",
        "Sich nicht zur\u00fcckziehen m\u00fcssen, um klar oder kompetent zu bleiben.",
        "Sicherheit durch echten Austausch, innere Beteiligung und lebendige Verbindung finden.",
      ],
      unconsciousStrategy: [
        "Sicherheit \u00fcber Wissen und geistige Klarheit gewinnen.",
        "Menschen und Systeme lieber aus der Distanz beobachten und Gef\u00fchle zur\u00fcckhalten.",
        "Sich \u00fcber Analyse, Kompetenz und \u00dcberblick stabilisieren, auch wenn Teilhabe schwerf\u00e4llt.",
      ],
      turningPoint: [
        "Erkennen, dass Wissen und Beobachtung allein keine echte Teilhabe ersetzen.",
        "Emotional pr\u00e4senter und menschlich greifbarer werden.",
        "Austausch und Beteiligung statt Distanz und Kontrolle zulassen.",
      ],
      integratedState: [
        "Wissen und Wahrnehmung teilen, ohne sich hinter Distanz zu verstecken.",
        "Menschlich erreichbar und emotional pr\u00e4sent bleiben.",
        "Weisheit entsteht aus gelebter Teilnahme am Leben.",
      ],
      tensionFields: [
        "R\u00fcckzug \u2192 Kontakt",
        "Energiesparen \u2192 Lebendigkeit",
        "Distanz \u2192 Verbindung",
        "Kontrolle \u2192 Vertrauen",
        "Selbstschutz \u2192 Offenheit",
        "Wissen \u2192 Erfahrung",
        "Isolation \u2192 Teilnahme",
        "Bed\u00fcrfnislosigkeit \u2192 Empfangen",
        "innerer R\u00fcckhalt \u2192 gelebte Pr\u00e4senz",
      ],
      archetypalEssence: "Tiefes Verstehen und sinnvolle Verbindung",
      integrativePotential: "Wissen teilen & Verbindungen gestalten",
      nervousSystemRegulation: [
        "Reize filtern und priorisieren",
        "R\u00fcckzug zur Regeneration",
        "innere Ruhe kultivieren",
        "Geist und K\u00f6rper synchronisieren",
        "Informationsflut begrenzen",
        "bewusst Pausen schaffen",
        "Sicherheit im Inneren st\u00e4rken",
        "Vertrauen durch Verbindung",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Wunsch, alles zu verstehen, und der Angst, \u00fcberflutet oder vereinnahmt zu werden.",
        gazeQuality: [
            "tief, ruhig und beobachtend",
            "wirkt oft nach innen gerichtet",
            "aufmerksame Klarheit",
            "durchdringend, aber nicht eindringlich",
            "zur\u00fcckhaltend, mit innerer Distanz",
          ],
        microTension: [
            "Stirn: leicht angespannt beim Nachdenken",
            "Augen: fokussiert, leicht verengt",
            "Mund: neutral, Lippen meist zusammen",
            "Kiefer: locker, nach innen entspannt",
            "Haltung: aufrecht, in sich ruhend",
          ],
        breathingRhythm: [
            "atmet flach im Brustbereich",
            "Atem vertieft sich beim Nachdenken",
            "atmet langsamer, wenn in Konzentration",
            "Atem stockt bei \u00dcberforderung",
            "reguliert \u00fcber R\u00fcckzug und Stille",
          ],
        movementInitiation: [
            "bewegt sich gezielt und sparsam",
            "handelt erst, wenn es notwendig ist",
            "nutzt Pausen zur Beobachtung",
            "zieht sich zur\u00fcck, wenn zu viel los ist",
            "liebt geistige Klarheit und Struktur",
          ],
        contactStyle: [
            "lieber wenige, aber echte Gespr\u00e4che",
            "spricht bed\u00e4chtig, \u00fcberlegt und pr\u00e4zise",
            "h\u00f6rt aufmerksam zu",
            "braucht Zeit, um sich zu \u00f6ffnen",
            "kommuniziert tiefgr\u00fcndig und ehrlich",
          ],
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen / Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Bauch / K\u00f6rpermitte", location: "mittig auf dem Bauchnabel", need: [
              "Sp\u00fcren",
              "Pr\u00e4senz",
              "innere Sicherheit",
            ] },
          microInstructions: [
            "Nicht nur beobachten.",
            "Dich zeigen.",
            "Mitatmen d\u00fcrfen.",
            "N\u00e4he dosieren.",
            "Anwesend bleiben.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Tiefes Verstehen, sinnvolle Verbindung, Vertrauen, klare Struktur und kollektive Klarheit.",
      },
      contentModules: [
        {
          title: "Typ 5 \u00b7 Grundkarte",
          intro: "Die Typ-5-Grundkarte bildet die gemeinsame Grundlage aller F\u00fcnfer-Subtypen. Im Zentrum stehen Verstehen, Wissen und das Wahren der eigenen Ressourcen. Der K\u00f6rper organisiert sich auf Beobachtung, Distanz und sparsame Energie.",
          entries: [
            { label: "Grundthema", text: "Wissen & Kompetenz. Typ 5 richtet Aufmerksamkeit auf Verstehen, Klarheit und die Frage, wie man kompetent und unabh\u00e4ngig bleibt." },
            { label: "Organismusfrage", text: "Wie kann ich verstehen und sicher sein, dass ich kompetent bin?" },
            { label: "Innerer Konflikt", text: "N\u00e4he und R\u00fcckzug stehen gegeneinander: der Wunsch nach Verbindung gegen\u00fcber der Angst, durch Kontakt ersch\u00f6pft oder vereinnahmt zu werden." },
            { label: "K\u00f6rperorganisation", text: "Zur\u00fcckgenommen, gesammelt und nach innen gerichtet. Energie sparsam gehalten, der Kopfraum aktiv, der K\u00f6rper eher still und kompakt." },
            { label: "Blickqualit\u00e4t", text: "Tief, ruhig und beobachtend. Der Blick wirkt nach innen gerichtet, nimmt genau wahr, ohne sich einzumischen." },
            { label: "Mikrospannung", text: "Feine Spannung in Stirn und Augen, konzentrierte Sammlung, kontrollierte, sparsame Mimik." },
            { label: "Atemrhythmus", text: "Flach und \u00f6konomisch. Vertieft sich beim Nachdenken, stockt bei \u00dcberforderung oder zu viel N\u00e4he." },
            { label: "Bewegungsinitiierung", text: "Sparsam und gezielt. Handelt erst, wenn es notwendig ist, nutzt Pausen zur Beobachtung." },
            { label: "Kontaktstil", text: "Zur\u00fcckhaltend, pr\u00e4zise und tiefgr\u00fcndig. Wenige, aber echte Gespr\u00e4che; braucht Zeit, um sich zu \u00f6ffnen." },
            { label: "Spannungsverteilung", text: "Hauptspannung in Stirn und Augen. Nebenaktivit\u00e4t in Nacken und Brustraum." },
            { label: "Integrationsweg", text: "Vom R\u00fcckzug zur Teilnahme. Vom Horten zum Teilen. Erfahren, dass Energie w\u00e4chst, wenn sie flie\u00dft." },
            { label: "Archetypisches Tier", text: "Eule: Weisheit, Beobachtung, Klarheit, Diskretion, Tiefe und Intuition." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SO5 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 5", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 5", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 5", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 5 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 5", youtubeVideoId: "7Yfn0V6D0e8" },
          { title: "Typ 5 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 5", youtubeVideoId: "-gH--0BuODw" },
          { title: "Type 5 \u00b7 English Theme Song", category: "Song 2", scope: "Type 5", youtubeVideoId: "H-h2eJ7IJTQ" },
          { title: "SO5 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SO5", youtubeVideoId: "3xyba3n5Iro" },
          { title: "SO5 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SO5", youtubeVideoId: "4GOof3XqAkg" },
          { title: "SO5 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SO5", youtubeVideoId: "MaAgqDEujDI" },
          { title: "SO5 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SO5", youtubeVideoId: "-DuhmOnNR2s" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Stramonium",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-5/so5/heilmittel/so5-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Der Stechapfel ist ein hochgiftiges Nachtschattengew\u00e4chs, das Bilder von Dunkelheit, Bedrohung und Schrecken hervorruft. In seiner Signatur liegt das Bed\u00fcrfnis, sich vor einer als \u00fcberw\u00e4ltigend erlebten Welt zu sch\u00fctzen und Halt im Inneren zu suchen. Das pr\u00e4gt das Mittelbild der F\u00fcnf \u2013 der starke Drang, sich zur\u00fcckzuziehen, um zu verstehen, getragen von der Suche nach Wissen, Unabh\u00e4ngigkeit und innerer Klarheit. Der R\u00fcckzug in den Kopf wird zum sicheren Ort gegen\u00fcber einer bedrohlich wirkenden Au\u00dfenwelt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo mentaler R\u00fcckzug, innere Isolation und \u00dcberforderung auftreten. Es hilft, die Distanz zur Welt zu mildern und sich wieder sicherer im Kontakt zu f\u00fchlen. So darf die F\u00fcnf aus dem Beobachten heraustreten und am Leben teilnehmen, ohne sich bedroht zu f\u00fchlen.",
        },
        {
          title: "Silicea",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-5/so5/heilmittel/so5-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "innere Struktur, Standfestigkeit und Selbstvertrauen",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 11 ist das Salz des Bindegewebes, der Struktur und der inneren Standfestigkeit. Es st\u00e4rkt Haut, Haar und N\u00e4gel und gibt dem K\u00f6rper Halt und Form. Auf seelischer Ebene steht es f\u00fcr R\u00fcckgrat, Durchhalteverm\u00f6gen und Selbstvertrauen. F\u00fcr die F\u00fcnf, die sich zum Schutz ihrer Kr\u00e4fte zur\u00fcckzieht, gibt es Halt von innen. So unterst\u00fctzt es, mit eigener Substanz und Festigkeit in Kontakt zu gehen, ohne sich ersch\u00f6pft zu f\u00fchlen.",
          goal: "Auf der Mineralstoff-Ebene st\u00e4rkt es die innere Struktur und das Vertrauen in die eigenen Ressourcen \u2013 weg vom R\u00fcckzug, hin zur gelassenen Pr\u00e4senz.",
        },
        {
          title: "Water Violet",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-5/so5/heilmittel/so5-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "aus R\u00fcckzug zu warmer Verbundenheit",
          text: "Water Violet ist die Bachbl\u00fcte f\u00fcr zur\u00fcckgezogene, gern allein bleibende Menschen, die Distanz wahren. Sie hilft jenen, die sich still abkapseln und N\u00e4he als anstrengend empfinden. Die Bl\u00fcte \u00f6ffnet sanft von k\u00fchler Zur\u00fcckhaltung hin zu warmer Verbundenheit. F\u00fcr die F\u00fcnf, die ihre Kr\u00e4fte durch R\u00fcckzug sch\u00fctzt, ist sie eine Br\u00fccke nach au\u00dfen. So darf aus selbst gew\u00e4hlter Isolation wieder lebendige Teilhabe werden, ohne sich \u00fcberfordert zu f\u00fchlen.",
          goal: "Auf der Seelenebene l\u00e4dt es ein, die Sch\u00f6nheit echter Verbindung zu entdecken \u2013 St\u00e4rke, die sich nicht mehr in Distanz versteckt, sondern in warmem Kontakt zeigt.",
        },
        {
          title: "Amazonit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-5/so5/heilmittel/so5-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "innere Balance und Mut zur Wahrheit",
          text: "Der Amazonit ist ein t\u00fcrkisgr\u00fcner Feldspat und steht f\u00fcr innere Balance, Gelassenheit und Wahrhaftigkeit. Er beruhigt Nerven und kreisende Gedanken, gleicht seelische Wechselb\u00e4der aus und schenkt einen klaren, ruhigen Kopf. Zugleich gilt er als Stein der ehrlichen Kommunikation: Er gibt Mut, das eigene Erleben auszusprechen, statt es zur\u00fcckzuhalten. F\u00fcr die F\u00fcnf, die sich zum Schutz ihrer Kr\u00e4fte zur\u00fcckzieht, baut er eine sanfte Br\u00fccke nach au\u00dfen. So hilft er, aus der inneren Beobachterhaltung in echten, lebendigen Kontakt zu treten \u2013 ohne Angst, sich dabei zu verlieren.",
          goal: "Als energetisches Werkzeug st\u00e4rkt er die innere Stimme und das Vertrauen in die eigene Wahrheit \u2013 Wissen darf nach au\u00dfen treten, ohne die Scheu vor der Welt.",
        },
        {
          title: "Haferkrauttee",
          subtitle: "Tee",
          image: "assets/knowledge/type-5/so5/heilmittel/so5-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "nervenst\u00e4rkend und aufbauend",
          text: "Haferkraut ist ein klassisches Nervenst\u00e4rkungs- und Aufbaukraut, besonders bei Ersch\u00f6pfung. Es n\u00e4hrt und kr\u00e4ftigt die Nerven sanft und gibt neue innere Substanz. Traditionell wird es bei nerv\u00f6ser Schw\u00e4che und Auszehrung eingesetzt. F\u00fcr die F\u00fcnf, die ihre Kr\u00e4fte als knapp erlebt und sich schnell ausgesaugt f\u00fchlt, baut es auf. So hilft ein Haferkrauttee, die eigenen Reserven aufzuf\u00fcllen und gest\u00e4rkt in Kontakt zu gehen.",
          goal: "Als pflanzliche Begleiterin n\u00e4hrt sie das Nervensystem auf dem Weg aus dem Hypervigilanz-Modus in ein ruhiges, verl\u00e4ssliches Inneres.",
        },
        {
          title: "Silicea",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/silicea.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus reiner Kieselerde, dem Quarz \u2013 einem Mineral, das Struktur, Festigkeit und Standkraft verk\u00f6rpert und den Pflanzen ihren Halm aufrichtet. Gerade sein Fehlen pr\u00e4gt das Mittelbild: ein Mangel an innerem Mark, an Kraft und Durchhalteverm\u00f6gen, verbunden mit Nachgiebigkeit und wenig Selbstvertrauen. Das ist die Wunde des Mangels der F\u00fcnf \u2013 das tiefe Gef\u00fchl, nicht genug Kraft, Energie und Substanz zu haben, um dem Leben gewachsen zu sein. Es fehlt das innere R\u00fcckgrat, das Sicherheit von innen g\u00e4be.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als R\u00fcckzug, Ersch\u00f6pfungsangst und das Sch\u00fctzen knapper Ressourcen zeigt. Es baut innere Substanz und Standfestigkeit auf, sodass Kraft nicht l\u00e4nger \u00e4ngstlich geh\u00fctet werden muss. So darf die F\u00fcnf aus einem Gef\u00fchl der F\u00fclle heraus geben und in Beziehung gehen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Stramonium",
          schuessler: "Silicea",
          bachbluete: "Water Violet",
          edelstein: "Amazonit",
          tee: "Haferkrauttee",
        },
        homoeopathieThema: "Der Stechapfel ist ein hochgiftiges Nachtschattengew\u00e4chs, das Bilder von Dunkelheit, Bedrohung und Schrecken hervorruft. In seiner Signatur liegt das Bed\u00fcrfnis, sich vor einer als \u00fcberw\u00e4ltigend erlebten Welt zu sch\u00fctzen und Halt im Inneren zu suchen. Das pr\u00e4gt das Mittelbild der F\u00fcnf \u2013 der starke Drang, sich zur\u00fcckzuziehen, um zu verstehen, getragen von der Suche nach Wissen, Unabh\u00e4ngigkeit und innerer Klarheit. Der R\u00fcckzug in den Kopf wird zum sicheren Ort gegen\u00fcber einer bedrohlich wirkenden Au\u00dfenwelt.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo mentaler R\u00fcckzug, innere Isolation und \u00dcberforderung auftreten. Es hilft, die Distanz zur Welt zu mildern und sich wieder sicherer im Kontakt zu f\u00fchlen. So darf die F\u00fcnf aus dem Beobachten heraustreten und am Leben teilnehmen, ohne sich bedroht zu f\u00fchlen.",
        wundeThema: "Bereitet aus reiner Kieselerde, dem Quarz \u2013 einem Mineral, das Struktur, Festigkeit und Standkraft verk\u00f6rpert und den Pflanzen ihren Halm aufrichtet. Gerade sein Fehlen pr\u00e4gt das Mittelbild: ein Mangel an innerem Mark, an Kraft und Durchhalteverm\u00f6gen, verbunden mit Nachgiebigkeit und wenig Selbstvertrauen. Das ist die Wunde des Mangels der F\u00fcnf \u2013 das tiefe Gef\u00fchl, nicht genug Kraft, Energie und Substanz zu haben, um dem Leben gewachsen zu sein. Es fehlt das innere R\u00fcckgrat, das Sicherheit von innen g\u00e4be.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als R\u00fcckzug, Ersch\u00f6pfungsangst und das Sch\u00fctzen knapper Ressourcen zeigt. Es baut innere Substanz und Standfestigkeit auf, sodass Kraft nicht l\u00e4nger \u00e4ngstlich geh\u00fctet werden muss. So darf die F\u00fcnf aus einem Gef\u00fchl der F\u00fclle heraus geben und in Beziehung gehen.",
        wunde: {
          homoeopathie: "Silicea",
          schuessler: "Silicea",
          bachbluete: "Water Violet",
        },
      },
      woundBehindPassion: {
        passion: "Geiz \u2013 nicht in erster Linie materiell, sondern ein Geiz mit Energie, Zeit, Aufmerksamkeit und innerer Beteiligung. Der F\u00fcnfer h\u00e4lt zur\u00fcck, weil er bef\u00fcrchtet, mehr zu verlieren, als er geben kann. Bei der SO5 zeigt sich dies als intellektueller Geiz: Sicherheit wird \u00fcber Wissen und Systeme aufgebaut \u2014 erst wenn man genug versteht, darf man dazugeh\u00f6ren.",
        belief: "\u201eIch muss erst genug wissen und verstehen, bevor ich dazugeh\u00f6ren darf.\u201c Darunter: ohne ausreichendes Wissen oder Kompetenz ist die eigene Beteiligung nicht legitim \u2014 N\u00e4he entsteht nur \u00fcber intellektuelle Br\u00fccken.",
        wound: "Die Wunde des Mangels: das tiefe Gef\u00fchl \u201eIch habe nicht genug\u201c \u2013 nicht genug Wissen, Kompetenz oder \u00dcberblick, um wirklich teilhaben zu d\u00fcrfen. Das soziale Feld erscheint als Ort, an dem man nur bestehen kann, wenn man mehr wei\u00df als andere.",
        compensation: "Wissen sammeln und Systeme durchdringen als Br\u00fccke zur sozialen Welt \u2014 aber aus sicherer Distanz beobachten, ohne emotional wirklich pr\u00e4sent zu werden. Gedankliche Klarheit ersetzt direkte Beteiligung.",
        sufferingCycle: "Der Mangel erzeugt mehr Wissensdrang. Der Wissensdrang erzeugt mehr Distanz. Die Distanz verhindert echten Kontakt. Der fehlende Kontakt best\u00e4tigt, dass man noch nicht genug wei\u00df. Und der Kreislauf beginnt erneut.",
        healingDirection: "Wissen teilen \u2014 auch wenn noch nicht alles vollst\u00e4ndig verstanden ist. Erfahren, dass echte Verbindung nicht aus \u00dcberblick entsteht, sondern aus lebendiger Teilnahme.",
        remedy: "Wundenmittel: Silicea \u00b7 Leidenschaftsmittel: Stramonium \u00b7 Sch\u00fc\u00dfler-Salz: Silicea \u00b7 Bach-Bl\u00fcte: Water Violet. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const so6 = {
      code: "SO6",
      title: "Die soziale Sechs",
      animal: "Erdm\u00e4nnchen",
      status: "curated_draft",
      pages: "Typ 6 Grundkarte + SO6 Seiten 1-5",
      visualPages: type6VisualPages("SO6", "Soziale Sechs"),
      organismQuestion: "Wie kann ich sicher sein, dass ich nicht bedroht bin und Unterst\u00fctzung habe?",
      subtypeQuestion:
        "Wie kann ich loyal beitragen und Orientierung schaffen, ohne meine innere Autorit\u00e4t an Regeln oder Gruppen abzugeben?",
      integrationSentence: "Ich w\u00e4hle Vertrauen statt Angst und Verbundenheit statt Kontrolle.",
      coreSentence:
        "Wenn Regeln nicht dein Gewissen ersetzen, entsteht innere Standfestigkeit und Freiheit.",
      lifeTheme: [
        "Sicherheit durch Zugeh\u00f6rigkeit, Regeln und klare Orientierung suchen.",
        "Loyal und verl\u00e4sslich sein wollen und genau pr\u00fcfen, wem vertraut werden kann.",
        "Halt im System finden wollen und dabei leicht die eigene innere Sicherheit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Oberschenkel.",
      essence: {
        title: "Integrationspotenzial: Zugeh\u00f6rigkeit & Vertrauen",
        sentence: "Ich w\u00e4hle Vertrauen statt Angst und Verbundenheit statt Kontrolle.",
        qualities: ["verantwortungsbewusst", "teamorientiert", "loyal", "klare Kommunikation", "stabile Zugeh\u00f6rigkeit"],
      },
      integrationPath: [
        "Der eigenen Wahrnehmung und inneren Stimme mehr vertrauen.",
        "Nicht st\u00e4ndig pr\u00fcfen oder absichern m\u00fcssen, um Halt zu finden.",
        "Stabilit\u00e4t durch Selbstvertrauen, Offenheit und innere Ruhe finden.",
      ],
      unconsciousStrategy: [
        "Sicherheit \u00fcber Orientierung, Regeln und Zugeh\u00f6rigkeit gewinnen.",
        "Menschen und Situationen genau pr\u00fcfen und Zweifel stark kontrollieren.",
        "Sich \u00fcber Loyalit\u00e4t, Wachsamkeit und klare Strukturen stabilisieren, auch wenn Vertrauen schwerf\u00e4llt.",
      ],
      turningPoint: [
        "Erkennen, dass Anpassung an Regeln und Autorit\u00e4ten die eigene Orientierung schw\u00e4chen kann.",
        "Der inneren Stimme mehr vertrauen.",
        "Selbstverantwortung ersetzt dauerhafte Absicherung und Zweifel.",
      ],
      integratedState: [
        "Sich an Gemeinschaft und Verantwortung orientieren, ohne die eigene Stimme zu verlieren.",
        "Der inneren Orientierung und dem pers\u00f6nlichen Standpunkt vertrauen.",
        "Zugeh\u00f6rigkeit entsteht aus Selbstvertrauen statt aus Anpassung.",
      ],
      tensionFields: [
        "Regeln \u2192 innere Orientierung",
        "Loyalit\u00e4t \u2192 Selbstvertrauen",
        "Pflicht \u2192 Eigenst\u00e4ndigkeit",
        "Anpassung \u2192 klare Position",
        "Zweifel \u2192 Entschiedenheit",
        "Autorit\u00e4t \u2192 innere Sicherheit",
        "Gehorsam \u2192 Selbstverantwortung",
        "Absicherung \u2192 Vertrauen",
        "Zugeh\u00f6rigkeit \u2192 pers\u00f6nlicher Standpunkt",
      ],
      archetypalEssence: "Die treue Besch\u00fctzerin",
      integrativePotential: "Zugeh\u00f6rigkeit & Vertrauen",
      bodySignature: {
        basicTension: "Zwischen dem Bed\u00fcrfnis nach Sicherheit und Zugeh\u00f6rigkeit und der Angst vor Verrat oder \u00dcberforderung.",
        gazeQuality: [
            "wachsam, \u00fcberlegend und gruppenorientiert",
            "sieht Zusammenh\u00e4nge und Dynamiken",
            "Angst nur auf den zweiten Blick erkennbar",
            "ruhig, verantwortungsbewusst, loyal",
            "achtet auf Sicherheit, Vertrautheit und Signale",
          ],
        microTension: [
            "Stirn: leicht angespannt, fokussiert",
            "Augen: aufmerksam, pr\u00fcfend, mit Weitblick",
            "Mund: neutral bis leicht angespannt",
            "Kiefer: moderat angespannt, kontrolliert",
            "Haltung: aufrecht, bereit, wachsam",
          ],
        breathingRhythm: [
            "atmet ruhig und gleichm\u00e4\u00dfig",
            "Atem eher tief in den Brustbereich",
            "atmet bewusster bei Verantwortung",
            "seufzt selten, aber bewusst",
            "braucht Sicherheit und Verbindungsatmen",
          ],
        movementInitiation: [
            "handelt mit Bedacht und im Team",
            "pr\u00fcft erst, dann setzt er sich ein",
            "bewegt sich mit Ziel und Richtung",
            "orientiert sich an Bed\u00fcrfnissen der Gruppe",
            "braucht Sicherheit, bevor er aktiv wird",
          ],
        contactStyle: [
            "freundlich, verbindlich und zuvorkommend",
            "h\u00f6rt zu, beobachtet, fragt nach",
            "spricht klar, \u00fcberlegt und respektvoll",
            "bringt Ideen f\u00fcr das Wohl der Gruppe ein",
            "kommuniziert loyal und unterst\u00fctzend",
          ],
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Oberschenkel", location: "mittig auf dem Oberschenkel", need: [
              "Halt",
              "Vertrauen",
              "Stabilit\u00e4t",
              "Sicherheit",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Vertrauen, Loyalit\u00e4t, Gemeinschaft, Zusammenhalt, Verantwortung und Kooperation.",
      },
      nervousSystemRegulation: [
        "der eigenen inneren Stimme vertrauen",
        "Anspannung bewusst l\u00f6sen",
        "den Atem tief und ruhig f\u00fchren",
        "Sicherheit von innen statt aus Regeln suchen",
        "Zweifel benennen statt ihnen zu folgen",
        "Erdung \u00fcber die Beine finden",
        "die eigene Autorit\u00e4t sp\u00fcren",
        "Vertrauen schrittweise wagen",
      ],
      contentModules: [
        {
          title: "Typ 6 \u00b7 Grundkarte",
          intro: "Die Typ-6-Grundkarte bildet die gemeinsame Grundlage aller Sechser-Subtypen. Im Zentrum stehen Sicherheit, Vertrauen und Wachsamkeit. Der K\u00f6rper organisiert sich auf Aufmerksamkeit, Absicherung und das fr\u00fche Erkennen von Gefahr.",
          entries: [
            { label: "Grundthema", text: "Sicherheit & Vertrauen. Typ 6 richtet Aufmerksamkeit auf Verl\u00e4sslichkeit, m\u00f6gliche Risiken und die Frage, wem und was man trauen kann." },
            { label: "Organismusfrage", text: "Wie kann ich sicher sein, dass ich nicht bedroht bin und Unterst\u00fctzung habe?" },
            { label: "Innerer Konflikt", text: "Vertrauen und Misstrauen stehen gegeneinander: der Wunsch nach Halt gegen\u00fcber dem st\u00e4ndigen Zweifel und der Suche nach Gefahr." },
            { label: "K\u00f6rperorganisation", text: "Wachsam, aufmerksam und reaktionsbereit. Eine Grundspannung von Bereitschaft, der Blick scannt die Umgebung, die Energie h\u00e4lt sich gefasst." },
            { label: "Blickqualit\u00e4t", text: "Wachsam, pr\u00fcfend und suchend. Sieht Details und potenzielle Risiken, achtet auf Stimmungen und Signale." },
            { label: "Mikrospannung", text: "Spannung in Stirn und Augen, sorgenvolle Wachheit, schnelle, leicht angespannte Reaktion der Mimik." },
            { label: "Atemrhythmus", text: "Eher flach und unregelm\u00e4\u00dfig. Stockt bei Unsicherheit, beschleunigt bei Anspannung, braucht bewusste Atempausen." },
            { label: "Bewegungsinitiierung", text: "Vorsichtig und pr\u00fcfend. Beobachtet erst, dann handelt, braucht Sicherheit, bevor sie aktiv wird." },
            { label: "Kontaktstil", text: "Loyal, pr\u00fcfend und verbindlich. Sucht Klarheit und Verl\u00e4sslichkeit, braucht Zeit, um Vertrauen zu fassen." },
            { label: "Spannungsverteilung", text: "Hauptspannung in Stirn, Augen und Nacken. Nebenaktivit\u00e4t in Schultern und Solarplexus." },
            { label: "Integrationsweg", text: "Vom Zweifel zum Vertrauen. Von der Absicherung zur inneren Sicherheit. Mut statt Kontrolle." },
            { label: "Archetypisches Tier", text: "Erdm\u00e4nnchen: Wachsamkeit, Gemeinschaft, Schutz, Vorsicht, Loyalit\u00e4t und Zusammenhalt." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SO6 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 6", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 6", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 6", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 6 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 6", youtubeVideoId: "x16gtlhjxCs" },
          { title: "Typ 6 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 6", youtubeVideoId: "f72ns-IXMrc" },
          { title: "Type 6 \u00b7 English Theme Song", category: "Song 2", scope: "Type 6", youtubeVideoId: "LJdN12yDBwE" },
          { title: "SO6 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SO6", youtubeVideoId: "KSeQ5r73C7Q" },
          { title: "SO6 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SO6", youtubeVideoId: "82Qd_SdH1RI" },
          { title: "SO6 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SO6", youtubeVideoId: "bm3SEsot92E" },
          { title: "SO6 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SO6", youtubeVideoId: "cslwZjG26xw" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Opium",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-6/so6/heilmittel/so6-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus dem Schlafmohn \u2013 einem Stoff, der Schmerz, Angst und Wahrnehmung bet\u00e4ubt und in dumpfe Ruhe h\u00fcllt. Diese Signatur zeigt ein Wesen, das nach Sicherheit und Geborgenheit verlangt und Gefahr lieber ausblendet, als sie zu durchleben. Das pr\u00e4gt die Leidenschaft der Sechs \u2013 der starke Wunsch nach Schutz und die Vermeidung von Bedrohung. Wo das Mittel bet\u00e4ubt, sucht die Seele Sicherheit, indem sie das Beunruhigende abd\u00e4mpft.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo \u00fcberm\u00e4\u00dfige Angst, innere Anspannung, Sorgen und dauerhafte Wachsamkeit auftreten. Es hilft, die festgehaltene Schreckspannung zu l\u00f6sen und das Nervensystem zu beruhigen. So darf an die Stelle st\u00e4ndiger Alarmbereitschaft ein Gef\u00fchl von Geborgenheit treten.",
        },
        {
          title: "Magnesium phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-6/so6/heilmittel/so6-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Entspannung und L\u00f6sen von Anspannung",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 7, die \u201ehei\u00dfe Sieben\u201c, ist das gro\u00dfe Salz der Entspannung und Nervenruhe. Es l\u00f6st Kr\u00e4mpfe, Anspannung und nerv\u00f6se Unruhe und beruhigt das \u00fcberreizte System. Auf seelischer Ebene steht es f\u00fcr Loslassen, Gelassenheit und das Nachlassen innerer Anspannung. F\u00fcr die Sechs, die in Wachsamkeit, Zweifel und Angst lebt, ist es ein sanfter Beruhiger. So unterst\u00fctzt es, die st\u00e4ndige innere Alarmbereitschaft loszulassen und Vertrauen zu fassen.",
          goal: "Auf der Mineralstoff-Ebene l\u00f6st es muskul\u00e4re und nerv\u00f6se Verkrampfungen, die entstehen, wenn Sicherheit durch Kontrolle und \u00dcberdenken gesucht wird.",
        },
        {
          title: "Aspen",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-6/so6/heilmittel/so6-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Vertrauen bei unbestimmter Angst",
          text: "Aspen ist die Bachbl\u00fcte f\u00fcr unbestimmte \u00c4ngste, vages Unbehagen und das Gef\u00fchl drohender Gefahr ohne klaren Grund. Sie hilft bei feiner Schreckhaftigkeit und einer reizbaren inneren Wachsamkeit. Die Bl\u00fcte schenkt Vertrauen und ein Gef\u00fchl innerer Sicherheit. F\u00fcr die Sechs, die mit Zweifel und Angst vor dem Ungewissen lebt, ist sie ein tiefer Beruhiger. So darf an die Stelle diffuser Angst ein stilles Grundvertrauen treten.",
          goal: "Auf der Seelenebene wandelt es vages Unbehagen in innere Verl\u00e4sslichkeit: Vertrauen in die eigene Erdung, statt sich in Projektionen und Worst-Case-Szenarien zu verlieren.",
        },
        {
          title: "H\u00e4matit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-6/so6/heilmittel/so6-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Erdung, Schutz und Stabilit\u00e4t",
          text: "Der H\u00e4matit ist ein metallisch gl\u00e4nzender Eisenstein und einer der st\u00e4rksten Erdungs- und Schutzsteine \u00fcberhaupt. Sein hoher Eisengehalt steht sinnbildlich f\u00fcr Festigkeit, Widerstandskraft und ein aufrechtes inneres R\u00fcckgrat. Er gibt Halt, Stabilit\u00e4t und ein k\u00f6rperlich sp\u00fcrbares Gef\u00fchl von Sicherheit und Geborgenheit. F\u00fcr die Sechs, die in Zweifel, Wachsamkeit und der Suche nach verl\u00e4sslichem Halt lebt, ist er ein verl\u00e4sslicher Begleiter. So n\u00e4hrt er Urvertrauen von innen \u2013 eine Sicherheit, die nicht von \u00e4u\u00dferen Garantien abh\u00e4ngt, sondern im eigenen Stand wurzelt.",
          goal: "Als energetisches Werkzeug erdet er in solider Gegenwart \u2013 Verl\u00e4sslichkeit, die nicht aus Angst, sondern aus innerem Halt entsteht.",
        },
        {
          title: "Kamillenbl\u00fctentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-6/so6/heilmittel/so6-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "beruhigend und wohltuend",
          text: "Die Kamille ist eines der bew\u00e4hrtesten Heilkr\u00e4uter, beruhigend, entkrampfend und wohltuend. Sie bes\u00e4nftigt Nerven, Magen und Gem\u00fct und gibt ein Gef\u00fchl von Geborgenheit. Traditionell wird sie bei Unruhe, Anspannung und \u00c4ngstlichkeit getrunken. F\u00fcr die Sechs, die mit Wachsamkeit und Zweifel lebt, wirkt sie wie eine warme, sichere Umh\u00fcllung. So hilft ein Kamillenbl\u00fctentee, die innere Alarmbereitschaft zu beruhigen und Vertrauen zu fassen.",
          goal: "Als pflanzliche Begleiterin l\u00f6st sie das, was sich im Leistungsstreben verknotet hat \u2013 Entspannung wird zu einem erlaubten Zustand.",
        },
        {
          title: "Opium",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/opium.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Auch die Wunde der Sechs tr\u00e4gt die Signatur des Schlafmohns: die Bet\u00e4ubung nach einem Schreck. Sein klassisches Bild ist der Zustand, in dem nach einem ersch\u00fctternden Erlebnis die Angst bleibt, das Gef\u00fchl aber wie eingefroren und abgestumpft ist. Das ist die Wunde des verlorenen Vertrauens \u2013 ein Erlebnis, das die innere Sicherheit ersch\u00fcttert hat, gefolgt von Schutz durch R\u00fcckzug und Bet\u00e4ubung. Die Seele sch\u00fctzt sich, indem sie den Schmerz nicht mehr ganz sp\u00fcrt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Angst, dauerhafte Wachsamkeit und das Abschw\u00e4chen schmerzhafter Wahrnehmung zeigt. Es hilft, das Erstarrte wieder ins Flie\u00dfen zu bringen und Vertrauen behutsam zur\u00fcckzugewinnen. So darf die Sechs sich wieder lebendig und sicher f\u00fchlen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Opium",
          schuessler: "Magnesium phosphoricum",
          bachbluete: "Aspen",
          edelstein: "H\u00e4matit",
          tee: "Kamillenbl\u00fctentee",
        },
        homoeopathieThema: "Gewonnen aus dem Schlafmohn \u2013 einem Stoff, der Schmerz, Angst und Wahrnehmung bet\u00e4ubt und in dumpfe Ruhe h\u00fcllt. Diese Signatur zeigt ein Wesen, das nach Sicherheit und Geborgenheit verlangt und Gefahr lieber ausblendet, als sie zu durchleben. Das pr\u00e4gt die Leidenschaft der Sechs \u2013 der starke Wunsch nach Schutz und die Vermeidung von Bedrohung. Wo das Mittel bet\u00e4ubt, sucht die Seele Sicherheit, indem sie das Beunruhigende abd\u00e4mpft.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo \u00fcberm\u00e4\u00dfige Angst, innere Anspannung, Sorgen und dauerhafte Wachsamkeit auftreten. Es hilft, die festgehaltene Schreckspannung zu l\u00f6sen und das Nervensystem zu beruhigen. So darf an die Stelle st\u00e4ndiger Alarmbereitschaft ein Gef\u00fchl von Geborgenheit treten.",
        wundeThema: "Auch die Wunde der Sechs tr\u00e4gt die Signatur des Schlafmohns: die Bet\u00e4ubung nach einem Schreck. Sein klassisches Bild ist der Zustand, in dem nach einem ersch\u00fctternden Erlebnis die Angst bleibt, das Gef\u00fchl aber wie eingefroren und abgestumpft ist. Das ist die Wunde des verlorenen Vertrauens \u2013 ein Erlebnis, das die innere Sicherheit ersch\u00fcttert hat, gefolgt von Schutz durch R\u00fcckzug und Bet\u00e4ubung. Die Seele sch\u00fctzt sich, indem sie den Schmerz nicht mehr ganz sp\u00fcrt.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Angst, dauerhafte Wachsamkeit und das Abschw\u00e4chen schmerzhafter Wahrnehmung zeigt. Es hilft, das Erstarrte wieder ins Flie\u00dfen zu bringen und Vertrauen behutsam zur\u00fcckzugewinnen. So darf die Sechs sich wieder lebendig und sicher f\u00fchlen.",
        wunde: {
          homoeopathie: "Opium",
          schuessler: "Magnesium phosphoricum",
          bachbluete: "Cerato",
        },
      },
      woundBehindPassion: {
        passion: "Angst \u2013 ein Grundmisstrauen gegen\u00fcber dem Leben, das sich als st\u00e4ndige innere Wachsamkeit, Zweifel und Absicherungsbedarf zeigt. Bei der SO6 richtet sich die Angst auf das Verh\u00e4ltnis zur Gruppe: Sie sucht Sicherheit in Pflicht, Regeln und Zugeh\u00f6rigkeit.",
        belief: "\u201eDie Welt ist gef\u00e4hrlich, und ich muss wissen, was gilt und wem ich trauen kann.\u201c Darunter: \u201eNur wenn ich das Richtige tue und dazugeh\u00f6re, bin ich sicher.\u201c",
        wound: "Die Wunde des verlorenen Vertrauens: das Gef\u00fchl, dass die innere Gewissheit, vom Leben getragen zu sein, br\u00fcchig ist. Bei der SO6 zeigt sich dies als Misstrauen gegen\u00fcber der eigenen inneren Autorit\u00e4t \u2014 sie wird an Regeln und Gruppen abgegeben.",
        compensation: "Orientierung an Pflicht, Regeln, Systemen und Autorit\u00e4ten. Loyalit\u00e4t zur Gruppe und das genaue Pr\u00fcfen, wem zu trauen ist, ersetzen das Vertrauen in die eigene innere Stimme.",
        sufferingCycle: "Wer st\u00e4ndig nach Unsicherheiten sucht, findet sie. Mehr Absicherung \u00fcber Regeln schafft mehr Abh\u00e4ngigkeit von au\u00dfen, die die eigene innere Autorit\u00e4t schw\u00e4cht, die mehr Zweifel erzeugt \u2013 und der Kreis schlie\u00dft sich.",
        healingDirection: "Erkennen, dass Sicherheit und Vertrauen nicht dasselbe sind. Vertrauen entsteht nicht durch das perfekte Befolgen von Regeln, sondern durch das H\u00f6ren auf das eigene Gewissen und die eigene innere Stimme.",
        remedy: "Wundenmittel: Opium \u00b7 Leidenschaftsmittel: Opium \u00b7 Sch\u00fc\u00dfler-Salz: Magnesium phosphoricum \u00b7 Bach-Bl\u00fcte: Cerato. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const so7 = {
      code: "SO7",
      title: "Die soziale Sieben",
      animal: "Biber",
      status: "curated_draft",
      pages: "Typ 7 Grundkarte + SO7 Seiten 1-5",
      visualPages: type7VisualPages("SO7", "Soziale Sieben"),
      organismQuestion: "Wie kann ich mehr M\u00f6glichkeiten entdecken und Schwierigkeiten vermeiden?",
      subtypeQuestion:
        "Wie kann ich inspirieren und Zukunft gestalten, ohne mich durch Ideen, Projekte oder Gruppenaktivit\u00e4t zu zerstreuen?",
      integrationSentence: "Ich w\u00e4hle das Leben in seiner ganzen Tiefe und schenke meine Freude der Welt.",
      coreSentence:
        "Wenn du nicht gut sein musst, wird deine Freude ehrlich, frei und nahbar.",
      lifeTheme: [
        "Freiheit, Inspiration und M\u00f6glichkeiten im sozialen Umfeld suchen.",
        "Begeistern und verbinden wollen und dabei Schmerz und Begrenzung ausweichen.",
        "Freude und Leichtigkeit teilen wollen und dabei leicht Tiefe und Verbindlichkeit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und Unterbauch / Beckenbereich.",
      essence: {
        title: "Integrationspotenzial: Lebensfreude & inspirierende Verbindung",
        sentence: "Ich w\u00e4hle das Leben in seiner ganzen Tiefe und schenke meine Freude der Welt.",
        qualities: ["vision\u00e4r", "kontaktfreudig", "ideenreich", "verbindend", "kreative Verantwortung"],
      },
      integrationPath: [
        "Auch Ruhe, Tiefe und Begrenzung annehmen.",
        "Nicht st\u00e4ndig neue M\u00f6glichkeiten suchen m\u00fcssen, um erf\u00fcllt zu sein.",
        "Freude durch Pr\u00e4senz, Verbindlichkeit und echten inneren Kontakt finden.",
      ],
      turningPoint: [
        "Erkennen, dass soziale Aktivit\u00e4t und st\u00e4ndige M\u00f6glichkeiten innerlich zerstreuen k\u00f6nnen.",
        "Mehr Tiefe, Ruhe und Verbindlichkeit erlauben.",
        "Echte Freude entsteht durch Pr\u00e4senz statt durch dauernde Ablenkung.",
      ],
      integrativePotential: "Lebensfreude & inspirierende Verbindung",
      integratedState: [
        "Leichtigkeit und Inspiration einbringen, ohne sich in Aktivit\u00e4t zu verlieren.",
        "Pr\u00e4sent und verbindlich im Kontakt bleiben.",
        "Freude entsteht aus Tiefe statt aus Zerstreuung.",
      ],
      bodySignature: {
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen / Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Unterbauch / Beckenbereich", location: "unterhalb des Nabels", need: [
              "Sicherheit",
              "Schutz",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Lebensfreude, Enthusiasmus, Kreativit\u00e4t, Vernetzung, Taktkraft, Inspiration und Motivation.",
      },
      unconsciousStrategy: [
        "Begeisterung in den Dienst von Gruppe, Vision und Zukunft stellen.",
        "Den eigenen Genuss zugunsten eines Ideals zur\u00fcckhalten.",
        "Sich \u00fcber Projekte, Netzwerke und Idealismus stabilisieren, auch wenn Tiefe fehlt.",
      ],
      tensionFields: [
        "Idealismus \u2192 gelebte Tiefe",
        "Aktivit\u00e4t \u2192 Pr\u00e4senz",
        "Dienst an der Vision \u2192 echte Verbindung",
        "Begeisterung \u2192 Verbindlichkeit",
        "Zukunft \u2192 Gegenwart",
        "Gut-sein-M\u00fcssen \u2192 Echtheit",
        "Zerstreuung \u2192 Sammlung",
        "Vermeidung \u2192 Annahme",
        "Anerkennung \u2192 Selbstkontakt",
      ],
      archetypalEssence: "Inspirierende Zukunftskraft",
      nervousSystemRegulation: [
        "im K\u00f6rper ankommen statt im n\u00e4chsten Projekt",
        "Pausen ohne N\u00fctzlichkeit zulassen",
        "eigenen Schmerz wahrnehmen statt zu \u00fcberspringen",
        "den Atem in den Bauch lenken",
        "Verbindlichkeit statt st\u00e4ndiger Bewegung \u00fcben",
        "Reize und Verpflichtungen bewusst begrenzen",
        "Stille und Tiefe aushalten",
        "die Gegenwart vor die M\u00f6glichkeit stellen",
      ],
      contentModules: [
        {
          title: "Typ 7 \u00b7 Grundkarte",
          intro: "Die Typ-7-Grundkarte bildet die gemeinsame Grundlage aller Sieben-Subtypen. Im Zentrum steht die Suche nach Freude, M\u00f6glichkeiten und angenehmen Erfahrungen \u2014 und die Vermeidung von Schmerz und Begrenzung. Der K\u00f6rper organisiert sich auf Lebendigkeit, Beweglichkeit und Offenheit nach vorn.",
          entries: [
            { label: "Grundthema", text: "Begeisterung & F\u00fclle. Typ 7 richtet Aufmerksamkeit auf M\u00f6glichkeiten, Genuss und positive Erfahrungen und vermeidet Schmerz, Leere und Begrenzung." },
            { label: "Organismusfrage", text: "Wie kann ich mehr M\u00f6glichkeiten entdecken und Schwierigkeiten vermeiden?" },
            { label: "Innerer Konflikt", text: "Lebensfreude und Vermeidung stehen gegeneinander: der Hunger nach angenehmen Erfahrungen gegen\u00fcber der Flucht vor Schmerz, Stille und Tiefe." },
            { label: "K\u00f6rperorganisation", text: "Locker, beweglich und nach vorn gerichtet. Wenig Grundspannung, aber innerlich rastlos; die Energie ist nach au\u00dfen offen und st\u00e4ndig in Bewegung." },
            { label: "Blickqualit\u00e4t", text: "Wach, beweglich und interessiert, mit einem Glanz des inneren Appetits. Der Blick springt zu Neuem und sucht das n\u00e4chste Angenehme." },
            { label: "Mikrospannung", text: "Lebhafte, spontane Mimik mit h\u00e4ufigem L\u00e4cheln; darunter eine feine nerv\u00f6se Unruhe in Zwinkern, Augenbewegungen und schnellem Wechsel." },
            { label: "Atemrhythmus", text: "Eher schnell und lebhaft, gehoben durch Begeisterung; weicht aus oder stockt, wenn Schweres oder Begrenzendes auftaucht." },
            { label: "Bewegungsinitiierung", text: "Impulsiv, geschmeidig und erz\u00e4hlfreudig. Bewegt sich spielerisch, fast t\u00e4nzerisch, mit vielen Positions- und Themenwechseln." },
            { label: "Kontaktstil", text: "Begeistert, melodisch und einladend. Schafft N\u00e4he \u00fcber Lachen und Gespr\u00e4ch, h\u00e4lt emotionale Tiefe aber eher auf Abstand." },
            { label: "Spannungsverteilung", text: "Wenig Grundspannung, daf\u00fcr rastlose Energie in H\u00e4nden, Beinen und Augen \u2014 Wippen, unruhige H\u00e4nde, suchender Blick." },
            { label: "Integrationsweg", text: "Von der Zerstreuung zur Pr\u00e4senz. Von der Reizsuche zur Tiefe. Genug haben, ohne mehr zu brauchen." },
            { label: "Archetypisches Tier", text: "Affe: Beweglichkeit, geistige Wendigkeit, Spielfreude, Kreativit\u00e4t und Optionsvielfalt. Der Affe steht f\u00fcr den Weg von der zerstreuten M\u00f6glichkeitssuche zur inspirierten, pr\u00e4senten Lebendigkeit." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SO7 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 7", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 7", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 7", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 7 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 7", youtubeVideoId: "hFVfMOqKxY8" },
          { title: "Typ 7 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 7", youtubeVideoId: "Z-a77RvGsaU" },
          { title: "Type 7 \u00b7 English Theme Song", category: "Song 2", scope: "Type 7", youtubeVideoId: "YCAFxBpZFKg" },
          { title: "SO7 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SO7", youtubeVideoId: "mxSaAfvaBKE" },
          { title: "SO7 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SO7", youtubeVideoId: "-a261mIny40" },
          { title: "SO7 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SO7", youtubeVideoId: "k3ffDHKpbFE" },
          { title: "SO7 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SO7", youtubeVideoId: "wTFxKsjd1jU" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Belladonna",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-7/so7/heilmittel/so7-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Die Tollkirsche ist eine Nachtschattenpflanze, deren Bild von Hitze, Fieber, F\u00fclle und gl\u00fchender Erregung gepr\u00e4gt ist. Diese Signatur durchzieht das Mittelbild: eine fiebrige Intensit\u00e4t, ein Drang nach lebhaften, starken Eindr\u00fccken und ein rasches Aufflammen. Genau das lebt in der Sieben \u2013 das Bed\u00fcrfnis, Schmerz zu vermeiden und das Leben in vollen Z\u00fcgen zu erleben, getragen von einem fiebrigen Drang nach mehr M\u00f6glichkeiten, Reizen und Genuss. Wie das Fieber will alles hell, schnell und intensiv sein.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als \u00dcberf\u00fclle, rastlose Getriebenheit und fiebrige Reizsuche zeigt. Es hilft, die \u00fcberschie\u00dfende Erregung zu k\u00fchlen und zur Ruhe zu bringen. So darf die Sieben F\u00fclle genie\u00dfen, ohne von ihr getrieben zu werden.",
        },
        {
          title: "Natrium phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-7/so7/heilmittel/so7-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "S\u00e4ure-Basen-Ausgleich und innere Balance",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 9 ist das Salz des S\u00e4ure-Basen-Haushalts und der inneren Balance. Es hilft, \u00dcbers\u00e4uerung auszugleichen und den Stoffwechsel zu harmonisieren. Auf seelischer Ebene steht es f\u00fcr Ma\u00df, Ausgewogenheit und ein gesundes Genug. F\u00fcr die Sieben, die vor Schmerz in immer neue Reize und M\u00f6glichkeiten flieht, bringt es Ausgleich. So unterst\u00fctzt es, statt rastloser \u00dcbers\u00e4ttigung wieder ein ruhiges inneres Gleichgewicht zu finden.",
          goal: "Auf der Mineralstoff-Ebene unterst\u00fctzt es die innere Balance, wenn \u00dcberstimulation, Zerstreuung und die Flucht vor Schmerz zu Ersch\u00f6pfung und \u00dcbers\u00e4uerung f\u00fchren.",
        },
        {
          title: "Agrimony",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-7/so7/heilmittel/so7-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Echtheit hinter der Heiterkeit",
          text: "Agrimony ist die Bachbl\u00fcte f\u00fcr Menschen, die hinter Heiterkeit und Leichtigkeit ihre wahren Sorgen verbergen. Sie hilft jenen, die innere Unruhe und Schmerz mit guter Miene und Ablenkung \u00fcberdecken. Die Bl\u00fcte f\u00fchrt zu echtem Frieden, der auch das Schwere zulassen kann. F\u00fcr die Sieben, die vor Leid in Aktivit\u00e4t und Vorfreude flieht, ist sie eine ehrliche Heilbl\u00fcte. So darf hinter der fr\u00f6hlichen Fassade die wahre Empfindung gef\u00fchlt und gewandelt werden.",
          goal: "Auf der Seelenebene erlaubt es, den inneren Schmerz anzusehen, statt ihn hinter Leichtigkeit zu verbergen \u2013 echte Freude entsteht, wenn auch das Schwere Platz hat.",
        },
        {
          title: "Rauchquarz",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-7/so7/heilmittel/so7-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Erdung und Loslassen von Stress",
          text: "Der Rauchquarz ist eine rauchig-braune Variet\u00e4t des Bergkristalls und gilt als ausgleichender Erdungs- und Anti-Stress-Stein. Er hilft, \u00fcbersch\u00fcssige, nach vorn dr\u00e4ngende Energie zu sammeln, Anspannung abzubauen und Belastendes loszulassen. Traditionell wird er genutzt, um aus Hektik und \u00dcberreizung wieder in Ruhe und Gegenwart zu finden. F\u00fcr die Sieben, die vor Schmerz und Schwere gern nach oben, in Pl\u00e4ne und M\u00f6glichkeiten flieht, ist er ein sanftes Gewicht. So bringt er die sprudelnde Unruhe behutsam zur\u00fcck auf den Boden und macht es leichter, im Hier und Jetzt zu bleiben.",
          goal: "Als energetisches Werkzeug hilft er, loszulassen was nicht mehr n\u00f6tig ist \u2013 Ballast aus Vermeidung, Ablenkung und \u00fcberstimulierter Leichtigkeit darf sich kl\u00e4ren.",
        },
        {
          title: "Pfefferminztee",
          subtitle: "Tee",
          image: "assets/knowledge/type-7/so7/heilmittel/so7-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "erfrischend und kl\u00e4rend",
          text: "Die Pfefferminze ist ein erfrischendes, kl\u00e4rendes Kraut, das Geist und Verdauung anregt. Ihr k\u00fchler Duft belebt, schafft Klarheit und l\u00f6st Schweres und Tr\u00e4ges. Traditionell wird sie bei V\u00f6llegef\u00fchl, M\u00fcdigkeit und zur geistigen Erfrischung getrunken. F\u00fcr die Sieben, deren Geist von Reiz zu Reiz springt, kann sie zugleich kl\u00e4ren und sammeln. So hilft ein Pfefferminztee, den \u00fcberquellenden Kopf zu erfrischen und auf das Wesentliche zu fokussieren.",
          goal: "Als pflanzliche Begleiterin kl\u00e4rt sie den Geist und bringt Frische in festgefahrene Gedankenmuster \u2013 Offenheit statt \u00dcberanalyse.",
        },
        {
          title: "Calcium carbonicum",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/calcarea-carbonica.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Gewonnen aus der Kalkschicht der Austernschale \u2013 dem weichen, verletzlichen Tier, das sich in einer harten Schale birgt. Diese Signatur ist sprechend: ein tiefes Bed\u00fcrfnis nach Sicherheit, Schutz und Nahrung und die Angst, ohne festen Halt \u00fcberw\u00e4ltigt zu werden. Das ist die Wunde der Sieben \u2013 eine Sehnsucht nach Geborgenheit, die hinter Begeisterung und Lebensfreude verborgen liegt. Unter dem sprudelnden Wesen sitzt das weiche Tier, das eine sch\u00fctzende Schale sucht.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als rastlose Suche, Schmerzvermeidung und der Hunger nach Halt zeigt. Es n\u00e4hrt ein Gef\u00fchl innerer Sicherheit, das die Flucht nach vorn \u00fcberfl\u00fcssig macht. So darf die Sieben Geborgenheit in sich selbst finden, statt sie im n\u00e4chsten Reiz zu suchen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Belladonna",
          schuessler: "Natrium phosphoricum",
          bachbluete: "Agrimony",
          edelstein: "Rauchquarz",
          tee: "Pfefferminztee",
        },
        homoeopathieThema: "Die Tollkirsche ist eine Nachtschattenpflanze, deren Bild von Hitze, Fieber, F\u00fclle und gl\u00fchender Erregung gepr\u00e4gt ist. Diese Signatur durchzieht das Mittelbild: eine fiebrige Intensit\u00e4t, ein Drang nach lebhaften, starken Eindr\u00fccken und ein rasches Aufflammen. Genau das lebt in der Sieben \u2013 das Bed\u00fcrfnis, Schmerz zu vermeiden und das Leben in vollen Z\u00fcgen zu erleben, getragen von einem fiebrigen Drang nach mehr M\u00f6glichkeiten, Reizen und Genuss. Wie das Fieber will alles hell, schnell und intensiv sein.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als \u00dcberf\u00fclle, rastlose Getriebenheit und fiebrige Reizsuche zeigt. Es hilft, die \u00fcberschie\u00dfende Erregung zu k\u00fchlen und zur Ruhe zu bringen. So darf die Sieben F\u00fclle genie\u00dfen, ohne von ihr getrieben zu werden.",
        wundeThema: "Gewonnen aus der Kalkschicht der Austernschale \u2013 dem weichen, verletzlichen Tier, das sich in einer harten Schale birgt. Diese Signatur ist sprechend: ein tiefes Bed\u00fcrfnis nach Sicherheit, Schutz und Nahrung und die Angst, ohne festen Halt \u00fcberw\u00e4ltigt zu werden. Das ist die Wunde der Sieben \u2013 eine Sehnsucht nach Geborgenheit, die hinter Begeisterung und Lebensfreude verborgen liegt. Unter dem sprudelnden Wesen sitzt das weiche Tier, das eine sch\u00fctzende Schale sucht.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als rastlose Suche, Schmerzvermeidung und der Hunger nach Halt zeigt. Es n\u00e4hrt ein Gef\u00fchl innerer Sicherheit, das die Flucht nach vorn \u00fcberfl\u00fcssig macht. So darf die Sieben Geborgenheit in sich selbst finden, statt sie im n\u00e4chsten Reiz zu suchen.",
        wunde: {
          homoeopathie: "Calcium carbonicum",
          schuessler: "Natrium phosphoricum",
          bachbluete: "Agrimony",
        },
      },
      woundBehindPassion: {
        passion: "Ma\u00dflosigkeit \u2013 das st\u00e4ndige Suchen nach mehr als Strategie, Schmerz und innerer Leere zu entfliehen. Bei der SO7 (Kontratyp) wird die V\u00f6llerei f\u00fcr ein Ideal zur\u00fcckgehalten: Die Flucht geschieht nicht im Genuss, sondern im Dienst an Vision, Gruppe und Zukunft.",
        belief: "\u201eWenn ich f\u00fcr etwas Gutes und Gr\u00f6\u00dferes lebe, bin ich wertvoll und geh\u00f6re dazu.\u201c Darunter: \u201eInnehalten und Begrenzung w\u00e4ren ein Eingest\u00e4ndnis von Mangel.\u201c",
        wound: "Die Wunde der Schmerzvermeidung: das Gef\u00fchl, dass tiefere Gef\u00fchle \u2013 besonders Schmerz, Verlust und Begrenztheit \u2013 zu bedrohlich sind, um ihnen zu begegnen. Bei der SO7 verbirgt sich diese Vermeidung hinter Idealismus und sozialem Engagement.",
        compensation: "Idealismus, Projekte, Netzwerke und Visionen \u2013 die Begeisterung wird in den Dienst des Gemeinsamen gestellt. Der Verzicht auf eigenen Genuss wirkt edel, h\u00e4lt die alte Fluchtbewegung aber am Laufen.",
        sufferingCycle: "Die SO7 sucht Erf\u00fcllung im n\u00e4chsten Ideal, der n\u00e4chsten Vision. Kaum ist ein Projekt da, lockt das n\u00e4chste. Die Tiefe, die sie umgeht, fehlt weiterhin \u2013 und der Einsatz ersch\u00f6pft, statt zu erf\u00fcllen.",
        healingDirection: "Erkennen, dass man nicht \u201egut\u201c sein muss, um dazuzugeh\u00f6ren. Heilung beginnt darin, auch Begrenzung, Stille und eigenen Schmerz zuzulassen \u2013 statt sie im Dienst am Gr\u00f6\u00dferen zu \u00fcberspringen.",
        remedy: "Wundenmittel: Calcium carbonicum \u00b7 Leidenschaftsmittel: Belladonna \u00b7 Sch\u00fc\u00dfler-Salz: Natrium phosphoricum \u00b7 Bach-Bl\u00fcte: Agrimony. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const so8 = {
      code: "SO8",
      title: "Die soziale Acht",
      animal: "L\u00f6we",
      status: "curated_draft",
      pages: "Typ 8 Grundkarte + SO8 Seiten 1-5",
      visualPages: type8VisualPages("SO8", "Soziale Acht"),
      organismQuestion: "Wie kann ich meine Grenzen wahren, f\u00fcr mich einstehen und sch\u00fctzen, was mir wichtig ist?",
      subtypeQuestion:
        "Wie kann ich sch\u00fctzen und f\u00fchren, ohne Verantwortung in Kontrolle oder Besitz zu verwandeln?",
      integrationSentence: "Ich nutze meine Kraft weise, um zu sch\u00fctzen, zu f\u00fchren und das Leben zu gestalten.",
      coreSentence:
        "Wenn Schutz nicht Besitz wird, entsteht starke, gerechte und vertrauensvolle F\u00fchrung.",
      lifeTheme: [
        "Einfluss, Schutz und Gerechtigkeit im sozialen Umfeld suchen.",
        "F\u00fcr andere einstehen und dabei leicht zu viel Kontrolle \u00fcbernehmen.",
        "St\u00e4rke und Loyalit\u00e4t leben wollen und dabei leicht Sanftheit und Vertrauen verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Schambein-Bereich.",
      essence: {
        title: "Integrationspotenzial: Reife St\u00e4rke & verantwortliche F\u00fchrung",
        sentence: "Ich nutze meine Kraft weise, um zu sch\u00fctzen, zu f\u00fchren und das Leben zu gestalten.",
        qualities: ["f\u00fchrungsstark", "gerecht", "besch\u00fctzend", "organisiert", "verantwortliche Autorit\u00e4t"],
      },
      integrationPath: [
        "St\u00e4rke mit Vertrauen und Offenheit verbinden.",
        "Nicht alles kontrollieren oder sch\u00fctzen m\u00fcssen, um wirksam zu sein.",
        "Kraft durch Mitgef\u00fchl, innere Ruhe und echte Verbundenheit finden.",
      ],
      turningPoint: [
        "Erkennen, dass Verantwortung und Kontrolle innerlich verh\u00e4rten k\u00f6nnen.",
        "Nicht immer stark und bestimmend sein m\u00fcssen.",
        "F\u00fchrung entsteht durch Vertrauen statt durch Dominanz und permanente Spannung.",
      ],
      integrativePotential: "Reife St\u00e4rke & verantwortliche F\u00fchrung",
      integratedState: [
        "Verantwortung und F\u00fchrung \u00fcbernehmen, ohne andere kontrollieren zu m\u00fcssen.",
        "St\u00e4rke mit Mitgef\u00fchl und innerer Offenheit verbinden.",
        "Autorit\u00e4t entsteht aus Vertrauen statt aus Dominanz.",
      ],
      bodySignature: {
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Schambein-Bereich", location: "auf dem Schambein", need: [
              "Urvertrauen",
              "Erdung",
              "Schutz",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "F\u00fchrungsst\u00e4rke, Verantwortung, Organisation, Struktur, Schutz, Sicherheit, Gerechtigkeit und Loyalit\u00e4t.",
      },
      unconsciousStrategy: [
        "Die eigene Kraft in den Schutz und die F\u00fchrung anderer stellen.",
        "Verantwortung \u00fcbernehmen und Situationen unbewusst kontrollieren.",
        "Sich \u00fcber St\u00e4rke f\u00fcr andere stabilisieren, w\u00e4hrend die eigene Verletzlichkeit verborgen bleibt.",
      ],
      tensionFields: [
        "Kontrolle \u2192 Vertrauen",
        "Besitz \u2192 echter Schutz",
        "Dominanz \u2192 tragende F\u00fchrung",
        "Verantwortung \u2192 Gelassenheit",
        "St\u00e4rke \u2192 Verletzlichkeit",
        "H\u00e4rte \u2192 Mitgef\u00fchl",
        "Sch\u00fctzen \u2192 Sein-Lassen",
        "Macht \u2192 Vertrauen",
        "Rolle des Starken \u2192 echtes Empfangen",
      ],
      archetypalEssence: "Besch\u00fctzende F\u00fchrungskraft",
      nervousSystemRegulation: [
        "die eigene Verletzlichkeit zulassen",
        "nicht alles kontrollieren oder sch\u00fctzen m\u00fcssen",
        "Anspannung im K\u00f6rper l\u00f6sen",
        "den Atem tief und langsam f\u00fchren",
        "Mitgef\u00fchl statt H\u00e4rte zulassen",
        "Empfangen statt nur Geben \u00fcben",
        "Ruhe statt Daueranspannung zulassen",
        "Vertrauen in andere wagen",
      ],
      contentModules: [
        {
          title: "Typ 8 \u00b7 Grundkarte",
          intro: "Die Typ-8-Grundkarte bildet die gemeinsame Grundlage aller Acht-Subtypen. Im Zentrum stehen Kraft, Selbstbehauptung und der Schutz der eigenen Grenzen. Der K\u00f6rper organisiert sich auf Pr\u00e4senz, Standfestigkeit und Bereitschaft zum Widerstand.",
          entries: [
            { label: "Grundthema", text: "Macht & Kontrolle. Typ 8 richtet Aufmerksamkeit auf St\u00e4rke, Gerechtigkeit und Selbstbestimmung und sch\u00fctzt die eigene Verletzlichkeit." },
            { label: "Organismusfrage", text: "Wie kann ich meine Grenzen wahren, f\u00fcr mich einstehen und sch\u00fctzen, was mir wichtig ist?" },
            { label: "Innerer Konflikt", text: "St\u00e4rke und Verletzlichkeit stehen gegeneinander: der Drang, unangreifbar und m\u00e4chtig zu sein, gegen\u00fcber der verborgenen weichen, schutzbed\u00fcrftigen Seite." },
            { label: "K\u00f6rperorganisation", text: "Stabil, geerdet und mit breiter Basis. Fest verankert und schwer aus dem Gleichgewicht zu bringen, Schultern breit und leicht nach vorn \u2014 bereit zu handeln." },
            { label: "Blickqualit\u00e4t", text: "Geradlinig, kontrollierend und direkt. Der Blick h\u00e4lt dem Gegen\u00fcber stand, pr\u00fcft und weicht nicht aus." },
            { label: "Mikrospannung", text: "Reduzierte, wachsame Mimik, oft fester Kiefer als Ausdruck innerer Selbstbeherrschung." },
            { label: "Atemrhythmus", text: "Tief und kraftvoll, ruhig gehalten; stockt bei Bedrohung und verdichtet sich bei Konfrontation." },
            { label: "Bewegungsinitiierung", text: "Sparsam, funktional und kr\u00e4ftig. Jede Geste hat Gewicht \u2014 entschlossen, nie fahrig." },
            { label: "Kontaktstil", text: "Tief, trocken und direkt. Spricht klar und mit Nachdruck, ohne Umschweife; nah in der Pr\u00e4senz, oft distanziert im Gef\u00fchl." },
            { label: "Spannungsverteilung", text: "Konzentrierte Kraft im Rumpf, im unteren R\u00fccken und im Bauchraum \u2014 eine innere R\u00fcstung gegen Schw\u00e4che und \u00dcbergriff." },
            { label: "Integrationsweg", text: "Von der H\u00e4rte zur Kraft, die sich \u00f6ffnen darf. Von der Kontrolle zum Vertrauen. St\u00e4rke, die Verletzlichkeit zul\u00e4sst." },
            { label: "Archetypisches Tier", text: "Nashorn: Kraft, Standfestigkeit, Drucktoleranz, Entschlossenheit und Schutz. Das Nashorn steht f\u00fcr den Weg von harter Kontrolle zur tragenden, verantwortungsvollen St\u00e4rke." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SO8 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 8", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 8", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 8", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 8 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 8", youtubeVideoId: "T33JfmnS3nQ" },
          { title: "Typ 8 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 8", youtubeVideoId: "OAsfvExdYtw" },
          { title: "Type 8 \u00b7 English Theme Song", category: "Song 2", scope: "Type 8", youtubeVideoId: "NlH4t8RvEfI" },
          { title: "SO8 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SO8", youtubeVideoId: "dR6VaEnpWgE" },
          { title: "SO8 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SO8", youtubeVideoId: "WnZzoQt45FU" },
          { title: "SO8 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SO8", youtubeVideoId: "mCXz3BLUgeo" },
          { title: "SO8 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SO8", youtubeVideoId: "UyIjnxSMmso" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Veratrum album",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-8/so8/heilmittel/so8-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Der Wei\u00dfe Germer ist eine kraftvolle, giftige Gebirgspflanze, deren Bild von Gr\u00f6\u00dfe, Anspruch und pl\u00f6tzlichem Zusammenbruch gepr\u00e4gt ist. Ihre Signatur zeigt einen m\u00e4chtigen Drang nach Ausweitung, Einfluss und \u00dcberlegenheit \u2013 bis hin zu H\u00e4rte und Hochmut. Genau das pr\u00e4gt die Leidenschaft der Acht \u2013 das Bed\u00fcrfnis, stark, unabh\u00e4ngig und unangreifbar zu sein, getragen von einem m\u00e4chtigen inneren Drang nach Kontrolle. Die Kraft will sich ausdehnen und alles in der Hand behalten.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als ma\u00dflose Expansion, \u00dcbersteigerung und das Erzwingen von Kontrolle zeigt. Es hilft, die \u00fcberschie\u00dfende Kraft zu m\u00e4\u00dfigen, ohne die St\u00e4rke zu verlieren. So darf die Acht f\u00fchren und sch\u00fctzen, ohne sich und andere zu \u00fcberfordern.",
        },
        {
          title: "Calcium fluoratum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-8/so8/heilmittel/so8-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Festigkeit und Elastizit\u00e4t zugleich",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 1 verbindet Festigkeit mit Elastizit\u00e4t \u2013 es st\u00e4rkt B\u00e4nder, Zahnschmelz und Bindegewebe. Es gibt Struktur, die zugleich beweglich und tragf\u00e4hig bleibt. Auf seelischer Ebene steht es f\u00fcr Stabilit\u00e4t, die nicht zur Verh\u00e4rtung wird. F\u00fcr die Acht, die sich mit H\u00e4rte und Kontrolle gegen jede Schw\u00e4che panzert, ist genau das die Heilrichtung. So unterst\u00fctzt es echte Kraft, die auch Weichheit und Beweglichkeit zul\u00e4sst, statt nur zu sch\u00fctzen.",
          goal: "Auf der Mineralstoff-Ebene verbindet es St\u00e4rke mit Anpassungsf\u00e4higkeit \u2013 es hilft, den Panzer aus \u00dcberlegenheit und H\u00e4rte in eine nat\u00fcrliche Widerstandskraft zu wandeln.",
        },
        {
          title: "Vine",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-8/so8/heilmittel/so8-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "St\u00e4rke und F\u00fchrung ohne Dominanz",
          text: "Vine ist die Bachbl\u00fcte f\u00fcr starke, dominante Naturen, die f\u00fchren, bestimmen und ungern Schw\u00e4che zeigen. Sie hilft jenen, deren Kraft leicht in H\u00e4rte und Kontrolle \u00fcber andere kippt. Die Bl\u00fcte wandelt Machtanspruch in eine starke, aber respektvolle und dienende F\u00fchrung. F\u00fcr die Acht, die St\u00e4rke als Schutz vor Verletzlichkeit braucht, ist sie eine reife Heilrichtung. So darf Kraft f\u00fchren, ohne zu beherrschen, und Raum f\u00fcr andere lassen.",
          goal: "Auf der Seelenebene wandelt es Macht, die dominiert, in St\u00e4rke, die erm\u00e4chtigt \u2013 F\u00fchrung ohne Kontrolle, St\u00e4rke ohne \u00dcberw\u00e4ltigung.",
        },
        {
          title: "Fluorit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-8/so8/heilmittel/so8-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Klarheit, Ordnung und Konzentration",
          text: "Der Fluorit ist ein klarer, vielfarbig schimmernder Stein und gilt als Ordnungs- und Klarheitsstein des Geistes. Er hilft, Gedanken zu strukturieren, Konzentration zu b\u00fcndeln und innere wie \u00e4u\u00dfere Unordnung zu kl\u00e4ren. Zugleich gilt er als l\u00f6send: Er weicht H\u00e4rte und Verkrampfung auf und schafft inneren Freiraum. F\u00fcr die Acht, die sich mit Kontrolle und St\u00e4rke gegen jede Schw\u00e4che panzert, \u00f6ffnet er einen sanfteren Weg. So darf hinter der harten Schale wieder Klarheit, Beweglichkeit und ein St\u00fcck Weichheit Platz finden \u2013 ohne dass sich das bedrohlich anf\u00fchlt.",
          goal: "Als energetisches Werkzeug strukturiert er das innere Chaos und bringt mentale Klarheit \u2013 St\u00e4rke darf sich zeigen ohne die R\u00fcstung.",
        },
        {
          title: "Ingwertee",
          subtitle: "Tee",
          image: "assets/knowledge/type-8/so8/heilmittel/so8-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "w\u00e4rmend und anregend",
          text: "Ingwer ist eine w\u00e4rmende, kraftvoll anregende Wurzel, die Durchblutung und Lebensfeuer f\u00f6rdert. Ihr scharf-w\u00fcrziger Charakter weckt Energie, Tatkraft und innere W\u00e4rme. Traditionell wird sie zur St\u00e4rkung, Erw\u00e4rmung und Belebung eingesetzt. F\u00fcr die Acht, die voller Kraft und Schutzimpuls ist, passt ihre warme, klare Energie. So hilft ein Ingwertee, die starke Kraft mit W\u00e4rme zu verbinden statt mit H\u00e4rte.",
          goal: "Als pflanzliche Begleiterin w\u00e4rmt und belebt sie: Kraft, die sich nicht mehr hinter Dominanz verbergen muss, sondern sich als nat\u00fcrliche St\u00e4rke zeigt.",
        },
        {
          title: "Veratrum album",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/veratrum-album.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Auch die Wunde der Acht tr\u00e4gt die Signatur des Wei\u00dfen Germers: hinter gro\u00dfer St\u00e4rke der drohende Kollaps. Sein Bild kennt den Zusammenbruch in K\u00e4lte und Ersch\u00f6pfung, wenn die erzwungene Gr\u00f6\u00dfe nicht mehr tr\u00e4gt. Das ist die Wunde der Verletzlichkeit \u2013 eine tiefe Angst vor Ohnmacht und Dem\u00fctigung, die sich hinter dem Streben nach St\u00e4rke und Kontrolle verbirgt. Unter dem Panzer liegt die Angst, schwach und ausgeliefert zu sein.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als H\u00e4rte, Kontrollzwang und die Abwehr jeder Schw\u00e4che zeigt. Es hilft, die Verletzlichkeit nicht l\u00e4nger bek\u00e4mpfen zu m\u00fcssen, sondern sie als Teil echter St\u00e4rke zuzulassen. So darf hinter der H\u00e4rte wieder Weichheit und Ber\u00fchrbarkeit entstehen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Veratrum album",
          schuessler: "Calcium fluoratum",
          bachbluete: "Vine",
          edelstein: "Fluorit",
          tee: "Ingwertee",
        },
        homoeopathieThema: "Der Wei\u00dfe Germer ist eine kraftvolle, giftige Gebirgspflanze, deren Bild von Gr\u00f6\u00dfe, Anspruch und pl\u00f6tzlichem Zusammenbruch gepr\u00e4gt ist. Ihre Signatur zeigt einen m\u00e4chtigen Drang nach Ausweitung, Einfluss und \u00dcberlegenheit \u2013 bis hin zu H\u00e4rte und Hochmut. Genau das pr\u00e4gt die Leidenschaft der Acht \u2013 das Bed\u00fcrfnis, stark, unabh\u00e4ngig und unangreifbar zu sein, getragen von einem m\u00e4chtigen inneren Drang nach Kontrolle. Die Kraft will sich ausdehnen und alles in der Hand behalten.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als ma\u00dflose Expansion, \u00dcbersteigerung und das Erzwingen von Kontrolle zeigt. Es hilft, die \u00fcberschie\u00dfende Kraft zu m\u00e4\u00dfigen, ohne die St\u00e4rke zu verlieren. So darf die Acht f\u00fchren und sch\u00fctzen, ohne sich und andere zu \u00fcberfordern.",
        wundeThema: "Auch die Wunde der Acht tr\u00e4gt die Signatur des Wei\u00dfen Germers: hinter gro\u00dfer St\u00e4rke der drohende Kollaps. Sein Bild kennt den Zusammenbruch in K\u00e4lte und Ersch\u00f6pfung, wenn die erzwungene Gr\u00f6\u00dfe nicht mehr tr\u00e4gt. Das ist die Wunde der Verletzlichkeit \u2013 eine tiefe Angst vor Ohnmacht und Dem\u00fctigung, die sich hinter dem Streben nach St\u00e4rke und Kontrolle verbirgt. Unter dem Panzer liegt die Angst, schwach und ausgeliefert zu sein.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als H\u00e4rte, Kontrollzwang und die Abwehr jeder Schw\u00e4che zeigt. Es hilft, die Verletzlichkeit nicht l\u00e4nger bek\u00e4mpfen zu m\u00fcssen, sondern sie als Teil echter St\u00e4rke zuzulassen. So darf hinter der H\u00e4rte wieder Weichheit und Ber\u00fchrbarkeit entstehen.",
        wunde: {
          homoeopathie: "Veratrum album",
          schuessler: "Calcium fluoratum",
          bachbluete: "Oak",
        },
      },
      woundBehindPassion: {
        passion: "Wollust \u2013 eine intensive Kraft, die sich als Drang nach St\u00e4rke, Kontrolle und Intensit\u00e4t zeigt. Bei der SO8 (Kontratyp) richtet sich diese Kraft nach au\u00dfen, in den Schutz anderer: Verantwortung, Loyalit\u00e4t und das Einstehen f\u00fcr die Gruppe.",
        belief: "\u201eSchw\u00e4che ist gef\u00e4hrlich \u2013 ich muss stark sein, um andere zu sch\u00fctzen.\u201c Darunter: \u201eWenn ich selbst Bed\u00fcrftigkeit zeige, lasse ich die im Stich, die auf mich z\u00e4hlen.\u201c",
        wound: "Die Wunde der Verletzlichkeit: das tiefe Gef\u00fchl, dass das eigene Verletzt-werden-K\u00f6nnen bedrohlich ist. Bei der SO8 verbirgt sich die Verletzlichkeit hinter der Rolle des Starken, der f\u00fcr alle anderen da ist.",
        compensation: "Verantwortung \u00fcbernehmen, f\u00fchren, besch\u00fctzen und f\u00fcr Gerechtigkeit k\u00e4mpfen. Die eigene Bed\u00fcrftigkeit wird in F\u00fcrsorge f\u00fcr andere umgeleitet \u2013 Schutz kann dabei zu Kontrolle und Besitz werden.",
        sufferingCycle: "Die Angst vor Verletzlichkeit erzeugt Kontrolle. Die Kontrolle erzeugt Distanz. Die Distanz verhindert tiefe Verbundenheit. Das Fehlen echter N\u00e4he best\u00e4tigt die Notwendigkeit der St\u00e4rke.",
        healingDirection: "Verletzlichkeit nicht als Schw\u00e4che, sondern als Zugang zu echter Kraft entdecken. Erfahren, dass man f\u00fchren und sch\u00fctzen kann, ohne zu besitzen \u2013 und dass auch der Starke empfangen darf.",
        remedy: "Wundenmittel: Veratrum album \u00b7 Leidenschaftsmittel: Veratrum album \u00b7 Sch\u00fc\u00dfler-Salz: Calcium fluoratum \u00b7 Bach-Bl\u00fcte: Oak. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const so9 = {
      code: "SO9",
      title: "Die soziale Neun",
      animal: "B\u00fcffel",
      status: "curated_draft",
      pages: "Typ 9 Grundkarte + SO9 Seiten 1-5",
      visualPages: type9VisualPages("SO9", "Soziale Neun"),
      organismQuestion: "Wie kann ich in Frieden bleiben und Harmonie bewahren, in mir und um mich herum?",
      subtypeQuestion:
        "Wie kann ich Harmonie und Zugeh\u00f6rigkeit f\u00f6rdern, ohne meine eigene Position zu verlieren?",
      integrationSentence: "Ich nutze meine Kraft, um in Verbindung zu leben und das Leben bewusst zu gestalten.",
      coreSentence:
        "Wenn Zugeh\u00f6rigkeit nicht Selbstvergessenheit bedeutet, entsteht echte und stabile Gemeinschaft.",
      lifeTheme: [
        "Harmonie, Zugeh\u00f6rigkeit und den eigenen Platz im sozialen Gef\u00fcge suchen.",
        "Verbinden und niemanden st\u00f6ren wollen und sich dabei leicht Erwartungen anderer anpassen.",
        "Frieden und Gemeinschaft bewahren wollen und dabei leicht die eigene Stimme verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und suprapubischer Bereich.",
      essence: {
        title: "Integrationspotenzial: Verbindende St\u00e4rke & gelassene Pr\u00e4senz",
        sentence: "Ich nutze meine Kraft, um in Verbindung zu leben und das Leben bewusst zu gestalten.",
        qualities: ["verbindend", "gelassen", "standhaft", "ausgleichend", "klare Zugeh\u00f6rigkeit"],
      },
      integrationPath: [
        "Sich klar zeigen, ohne Angst vor Ablehnung oder Konflikten.",
        "Sich nicht anpassen m\u00fcssen, um dazuzugeh\u00f6ren oder Verbindung zu bewahren.",
        "Frieden durch Selbstkontakt, Eigenst\u00e4ndigkeit und ehrliche Pr\u00e4senz finden.",
      ],
      turningPoint: [
        "Erkennen, dass st\u00e4ndige Anpassung und Zugeh\u00f6rigkeit von der eigenen Position entfernen k\u00f6nnen.",
        "Meinung, W\u00fcnsche und Grenzen bewusster wahrnehmen und ausdr\u00fccken.",
        "Echte Verbindung entsteht durch Selbstst\u00e4ndigkeit statt durch Selbstvergessenheit.",
      ],
      integrativePotential: "Verbindende St\u00e4rke & gelassene Pr\u00e4senz",
      integratedState: [
        "Verbunden bleiben, ohne die eigene Position zu verlieren.",
        "Klarer einbringen und den eigenen Impulsen und Entscheidungen vertrauen.",
        "Zugeh\u00f6rigkeit entsteht aus Selbstst\u00e4ndigkeit und echtem Selbstkontakt.",
      ],
      bodySignature: {
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen / Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Suprapubischer Bereich", location: "knapp oberhalb des Schambeins", need: [
              "Ruhe",
              "Harmonie",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Harmonie, Ausgleich, Geduld, Weitblick, Stabilit\u00e4t, Best\u00e4ndigkeit, Verst\u00e4ndnis und Mitgef\u00fchl.",
      },
      unconsciousStrategy: [
        "Frieden \u00fcber Zugeh\u00f6rigkeit und engagiertes Mitmachen sichern.",
        "Die eigene Position hinter den Zusammenhalt zur\u00fcckstellen.",
        "Sich \u00fcber den Einsatz f\u00fcr die Gruppe stabilisieren, w\u00e4hrend die eigene Stimme verblasst.",
      ],
      tensionFields: [
        "Anpassung \u2192 eigene Position",
        "Mitmachen \u2192 echte Teilhabe",
        "Selbstvergessenheit \u2192 klare Pr\u00e4senz",
        "Zugeh\u00f6rigkeit \u2192 Eigenst\u00e4ndigkeit",
        "Ausgleich \u2192 Klarheit",
        "Vermeidung \u2192 Standpunkt",
        "Diffusion \u2192 Fokus",
        "Schweigen \u2192 eigene Stimme",
        "Pflicht \u2192 freie Wahl",
      ],
      archetypalEssence: "Verbindende, klare Pr\u00e4senz",
      nervousSystemRegulation: [
        "die eigene Meinung und Grenzen sp\u00fcren",
        "sich zeigen statt sich anzupassen",
        "den K\u00f6rper aktiv bewegen statt zu erstarren",
        "den Atem belebend vertiefen",
        "Reibung aushalten statt auszugleichen",
        "eigene Bed\u00fcrfnisse ernst nehmen",
        "Wachheit statt Mitlaufen w\u00e4hlen",
        "Pr\u00e4senz im Kontakt kultivieren",
      ],
      contentModules: [
        {
          title: "Typ 9 \u00b7 Grundkarte",
          intro: "Die Typ-9-Grundkarte bildet die gemeinsame Grundlage aller Neun-Subtypen. Im Zentrum stehen Frieden, Harmonie und die Vermeidung von Konflikt und Reiz\u00fcberflutung. Der K\u00f6rper organisiert sich auf Ruhe, Schonung und Nachgiebigkeit.",
          entries: [
            { label: "Grundthema", text: "Weisheit & Frieden. Typ 9 richtet Aufmerksamkeit auf Harmonie, innere Ruhe und Ausgleich und vermeidet Konflikt, Spannung und Aufruhr." },
            { label: "Organismusfrage", text: "Wie kann ich in Frieden bleiben und Harmonie bewahren, in mir und um mich herum?" },
            { label: "Innerer Konflikt", text: "Frieden und Selbstpr\u00e4senz stehen gegeneinander: das Bed\u00fcrfnis nach Ruhe und Harmonie gegen\u00fcber dem Risiko, sich selbst dabei zu vergessen." },
            { label: "K\u00f6rperorganisation", text: "Entspannt, weich und nach innen gezogen, oft etwas in sich ruhend. Geringe Spannkraft, ein gem\u00e4chlicher, flie\u00dfender Gang." },
            { label: "Blickqualit\u00e4t", text: "Sanft, ruhig und friedlich, manchmal tr\u00e4umerisch oder mit einem leichten Schleier. Wenig Fokus nach au\u00dfen." },
            { label: "Mikrospannung", text: "Milde, ausgeglichene Mimik ohne gro\u00dfe Ausdrucksspitzen; emotionale Reaktionen werden eher ged\u00e4mpft als gezeigt." },
            { label: "Atemrhythmus", text: "Ruhig, tief und kaum h\u00f6rbar \u2014 k\u00f6rperlicher Ausdruck des inneren Friedensbed\u00fcrfnisses." },
            { label: "Bewegungsinitiierung", text: "Reduziert, langsam und flie\u00dfend. Gesten sind rund und beil\u00e4ufig, nie pointiert oder dominierend." },
            { label: "Kontaktstil", text: "Ged\u00e4mpft, freundlich und verbindlich, oft ohne klare Stellungnahme. Berichtend statt wertend, einladend statt fordernd." },
            { label: "Spannungsverteilung", text: "Geringe Grundspannung, besonders im Oberk\u00f6rper \u2014 ein passives Loslassen, das Frieden und Reizvermeidung dient." },
            { label: "Integrationsweg", text: "Von der Selbstvergessenheit zur Selbstpr\u00e4senz. Von der Tr\u00e4gheit zur lebendigen Ruhe. Sich selbst wichtig nehmen." },
            { label: "Archetypisches Tier", text: "Schildkr\u00f6te: innere Stabilit\u00e4t, Ruhe, Konflikttoleranz, Ausdauer und Ausgleich. Die Schildkr\u00f6te steht f\u00fcr den Weg von der Selbstvergessenheit zur ruhig anwesenden Pr\u00e4senz." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SO9 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 9", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 9", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 9", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 9 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 9", youtubeVideoId: "XmpATw12x34" },
          { title: "Typ 9 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 9", youtubeVideoId: "hJXifCvw4LI" },
          { title: "Type 9 \u00b7 English Theme Song", category: "Song 2", scope: "Type 9", youtubeVideoId: "EZ_WLg8nDpA" },
          { title: "SO9 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SO9", youtubeVideoId: "_xYqRYaUsEk" },
          { title: "SO9 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SO9", youtubeVideoId: "0BW4MaBwT_E" },
          { title: "SO9 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SO9", youtubeVideoId: "Hz6P8Sr1iBk" },
          { title: "SO9 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SO9", youtubeVideoId: "WUzICtbZ4Go" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Cannabis indica",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-9/so9/heilmittel/so9-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Der indische Hanf ruft Bilder von Vernebelung, traumartiger Ferne und einem seligen Verschwimmen von Zeit und Raum hervor. Diese Signatur pr\u00e4gt das Mittelbild: ein Abtauchen aus der scharfen Wirklichkeit in eine weiche, konfliktfreie Benommenheit. Genau das lebt in der Neun \u2013 das Bed\u00fcrfnis nach Frieden und Harmonie, getragen vom Wunsch, Konflikt, Spannung und Aufruhr zu vermeiden. Die Welt wird weichgezeichnet, damit nichts mehr wehtut oder reibt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Vernebelung, Selbstvergessenheit und das Abtauchen aus der eigenen Pr\u00e4senz zeigt. Es hilft, wieder klarer und wacher gegenw\u00e4rtig zu werden. So darf die Neun aus dem Nebel auftauchen und sich selbst wieder sp\u00fcren.",
        },
        {
          title: "Natrium sulfuricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-9/so9/heilmittel/so9-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Ausscheidung und Loslassen von Belastendem",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 10 ist das gro\u00dfe Salz der Ausscheidung und des Loslassens. Es unterst\u00fctzt Leber, Galle und die Entgiftung und hilft, Belastendes aus dem System zu schaffen. Auf seelischer Ebene steht es f\u00fcr Kl\u00e4rung, Bewegung und das Verabschieden von Altem. F\u00fcr die Neun, die sich in Tr\u00e4gheit und Selbstvergessenheit einrichten kann, bringt es heilsamen Antrieb. So unterst\u00fctzt es, ins Handeln zu kommen und den eigenen Platz aktiv einzunehmen.",
          goal: "Auf der Mineralstoff-Ebene f\u00f6rdert es die Ausscheidung angesammelter Schwere \u2013 Resignation, R\u00fcckzug und das tr\u00e4ge Festhalten an alten Mustern k\u00f6nnen sich l\u00f6sen.",
        },
        {
          title: "Wild Rose",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-9/so9/heilmittel/so9-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "aus Resignation zu lebendiger Teilnahme",
          text: "Wild Rose ist die Bachbl\u00fcte f\u00fcr Resignation, innere Gleichg\u00fcltigkeit und das Sich-Abfinden mit dem, was ist. Sie hilft jenen, die ohne Klage, aber auch ohne Lebensfreude einfach hinnehmen. Die Bl\u00fcte weckt neue Lebenslust, Interesse und aktive Teilnahme. F\u00fcr die Neun, die sich in Tr\u00e4gheit und Selbstvergessenheit verliert, ist sie ein sanfter Funke. So darf aus stiller Ergebung wieder lebendiges, engagiertes Dasein werden.",
          goal: "Auf der Seelenebene weckt es die schlummernde Lebensenergie: aus Resignation und innerem R\u00fcckzug zur\u00fcck zur eigenen Stimme, zu Wunsch und Richtung.",
        },
        {
          title: "Karneol",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-9/so9/heilmittel/so9-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Lebenskraft, Mut und warme Pr\u00e4senz",
          text: "Der Karneol ist ein warm-orange bis r\u00f6tlich leuchtender Chalcedon und ein klassischer Stein der Lebenskraft, des Mutes und der Tatkraft. Seine warme Farbe steht f\u00fcr Vitalit\u00e4t, W\u00e4rme und eine kr\u00e4ftige, f\u00fchlbare Pr\u00e4senz. Er aktiviert, ermutigt und st\u00e4rkt den eigenen Willen und die Freude am Handeln. F\u00fcr die Neun, die sich leicht selbst vergisst, einschl\u00e4ft und meint, keine Rolle zu spielen, ist er ein sanfter Weckruf. So hilft er, aus Tr\u00e4gheit und Selbstvergessenheit aufzutauchen, den eigenen Platz einzunehmen und sp\u00fcrbar ins Leben zu treten.",
          goal: "Als energetisches Werkzeug weckt er die Lebensenergie aus der Stille \u2013 innere Tr\u00e4gheit und Selbstvergessenheit weichen einem sanften, klaren Lebensimpuls.",
        },
        {
          title: "Fencheltee",
          subtitle: "Tee",
          image: "assets/knowledge/type-9/so9/heilmittel/so9-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "entspannend und ausgleichend",
          text: "Fenchel ist ein mildes, entspannendes und ausgleichendes Kraut mit wohltuender Wirkung. Er beruhigt sanft und harmonisiert, ohne zu d\u00e4mpfen. Traditionell wird er bei Unruhe und zur Beruhigung des Bauches getrunken. F\u00fcr die Neun, die Harmonie und Ruhe sucht, ist er ein vertrauter Begleiter \u2013 mit dem Hinweis, dass Ruhe nicht in Tr\u00e4gheit kippen muss. So hilft ein Fencheltee, eine entspannte Gelassenheit zu finden, die wach und pr\u00e4sent bleibt.",
          goal: "Als pflanzliche Begleiterin entspannt sie ohne zu bet\u00e4uben \u2013 eine sanfte Einladung, aus der inneren Stummheit in sp\u00fcrbare Lebendigkeit zur\u00fcckzukehren.",
        },
        {
          title: "Staphysagria",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/staphysagria.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus dem Stephanskraut, einem Rittersporngew\u00e4chs \u2013 das gro\u00dfe Mittel f\u00fcr unterdr\u00fcckten \u00c4rger und verletzte W\u00fcrde. Seine Signatur ist der heruntergeschluckte Zorn: erlittene Kr\u00e4nkungen und Grenzverletzungen, die freundlich hingenommen statt ausgesprochen werden, bis es irgendwann herausbricht. Das ist die Wunde der Selbstvergessenheit der Neun \u2013 getragen von unterdr\u00fccktem \u00c4rger und nicht benannten Grenz\u00fcberschreitungen. Aus Friedfertigkeit schweigt die Seele \u00fcber das, was sie verletzt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anpassung, Schweigen und der verlorene Kontakt zur eigenen Grenze zeigt. Es hilft, berechtigten \u00c4rger zu f\u00fchlen und Grenzen klar zu vertreten. So darf die Neun wieder f\u00fcr sich einstehen und pr\u00e4sent werden.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Cannabis indica",
          schuessler: "Natrium sulfuricum",
          bachbluete: "Wild Rose",
          edelstein: "Karneol",
          tee: "Fencheltee",
        },
        homoeopathieThema: "Der indische Hanf ruft Bilder von Vernebelung, traumartiger Ferne und einem seligen Verschwimmen von Zeit und Raum hervor. Diese Signatur pr\u00e4gt das Mittelbild: ein Abtauchen aus der scharfen Wirklichkeit in eine weiche, konfliktfreie Benommenheit. Genau das lebt in der Neun \u2013 das Bed\u00fcrfnis nach Frieden und Harmonie, getragen vom Wunsch, Konflikt, Spannung und Aufruhr zu vermeiden. Die Welt wird weichgezeichnet, damit nichts mehr wehtut oder reibt.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Vernebelung, Selbstvergessenheit und das Abtauchen aus der eigenen Pr\u00e4senz zeigt. Es hilft, wieder klarer und wacher gegenw\u00e4rtig zu werden. So darf die Neun aus dem Nebel auftauchen und sich selbst wieder sp\u00fcren.",
        wundeThema: "Bereitet aus dem Stephanskraut, einem Rittersporngew\u00e4chs \u2013 das gro\u00dfe Mittel f\u00fcr unterdr\u00fcckten \u00c4rger und verletzte W\u00fcrde. Seine Signatur ist der heruntergeschluckte Zorn: erlittene Kr\u00e4nkungen und Grenzverletzungen, die freundlich hingenommen statt ausgesprochen werden, bis es irgendwann herausbricht. Das ist die Wunde der Selbstvergessenheit der Neun \u2013 getragen von unterdr\u00fccktem \u00c4rger und nicht benannten Grenz\u00fcberschreitungen. Aus Friedfertigkeit schweigt die Seele \u00fcber das, was sie verletzt.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anpassung, Schweigen und der verlorene Kontakt zur eigenen Grenze zeigt. Es hilft, berechtigten \u00c4rger zu f\u00fchlen und Grenzen klar zu vertreten. So darf die Neun wieder f\u00fcr sich einstehen und pr\u00e4sent werden.",
        wunde: {
          homoeopathie: "Staphysagria",
          schuessler: "Natrium sulfuricum",
          bachbluete: "Wild Rose",
        },
      },
      woundBehindPassion: {
        passion: "Tr\u00e4gheit \u2013 nicht als k\u00f6rperliche Faulheit, sondern als eine innere Bewegungslosigkeit, die das eigene Erleben in den Hintergrund treten l\u00e4sst. Bei der SO9 (Kontratyp) wendet sie sich nach au\u00dfen: als engagiertes Mitmachen, das die eigene Position verschwinden l\u00e4sst.",
        belief: "\u201eMeine Bed\u00fcrfnisse und meine Meinung sind weniger wichtig als der Zusammenhalt der Gruppe.\u201c Darunter: \u201eWenn ich aus der Reihe tanze, gef\u00e4hrde ich meine Zugeh\u00f6rigkeit.\u201c",
        wound: "Die Wunde der Selbstvergessenheit: das tiefe Muster, sich selbst unsichtbar zu machen, um Konflikte zu vermeiden und Harmonie zu bewahren. Bei der SO9 verschwindet das Eigene hinter dem Einsatz f\u00fcr die Gemeinschaft.",
        compensation: "Mitarbeiten, vermitteln, ausgleichen und dazugeh\u00f6ren \u2013 die eigene Position wird zur\u00fcckgestellt, damit der Zusammenhalt erhalten bleibt. Das Engagement f\u00fcr die Gruppe bet\u00e4ubt die Frage nach dem eigenen Wollen.",
        sufferingCycle: "Die SO9 ordnet sich der Gruppe unter und vermeidet Reibung. Dadurch wird sie sich selbst immer unsichtbarer. Das Mitmachen sichert die Zugeh\u00f6rigkeit, verhindert aber echte, eigenst\u00e4ndige Verbundenheit.",
        healingDirection: "Wieder sp\u00fcren, dass die eigene Pr\u00e4senz z\u00e4hlt. Heilung beginnt mit dem Mut, Meinung, W\u00fcnsche und Grenzen einzubringen \u2013 und zu erfahren, dass echte Zugeh\u00f6rigkeit das aush\u00e4lt.",
        remedy: "Wundenmittel: Staphysagria \u00b7 Leidenschaftsmittel: Cannabis indica \u00b7 Sch\u00fc\u00dfler-Salz: Natrium sulfuricum \u00b7 Bach-Bl\u00fcte: Wild Rose. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const sx1 = {
      code: "SX1",
      title: "Die sexuelle Eins",
      animal: "Schwarze Mamba",
      status: "curated_draft",
      pages: "Typ 1 Grundkarte + SX1 Seiten 1-5",
      organismQuestion: "Wie kann ich richtig sein und Fehler vermeiden?",
      subtypeQuestion:
        "Wie kann ich meine Leidenschaft f\u00fcr das Richtige leben, ohne Druck, Kontrolle oder H\u00e4rte zu erzeugen?",
      integrationSentence: "Wahre Ver\u00e4nderung beginnt, wenn Leidenschaft einem h\u00f6heren Zweck dient.",
      coreSentence:
        "Wenn du dein Feuer nicht bek\u00e4mpfst, sondern bewusst f\u00fchrst, wird Leidenschaft klar und heilsam.",
      visualPages: [
        {
          title: "Typ 1 \u00b7 \u00dcberblick",
          caption: "Grundthema, K\u00f6rperorganisation, Organismusfrage und archetypisches Tier.",
          src: "assets/knowledge/type-1/type-1-overview.jpeg",
          alt: "Typ 1 \u00dcberblick mit Grundthema Richtig und Falsch, K\u00f6rperorganisation und Adler-Archetyp",
        },
        {
          title: "SX1 \u00b7 Seite 1",
          caption: "Subtyp-Profil mit Prototypen, Organismusfrage, Blickqualit\u00e4t und Spannungsverteilung.",
          src: "assets/knowledge/type-1/sx1/sx1-page-1.jpeg",
          alt: "SX1 Seite 1 mit Grundthema Integrit\u00e4t und Ordnung im direkten Kontakt",
        },
        {
          title: "SX1 \u00b7 Seite 2",
          caption: "2-Punkte-Integration mit Handpositionen, Lebensthema und Kernpraxis.",
          src: "assets/knowledge/type-1/sx1/sx1-page-2.jpeg",
          alt: "SX1 Seite 2 mit Zwei-Punkte-Integration und Handpositionen",
        },
        {
          title: "SX1 \u00b7 Seite 3",
          caption: "K\u00f6rperarbeit, Akupressur, Atemimpuls, Fl\u00fcgel und Songfelder.",
          src: "assets/knowledge/type-1/sx1/sx1-page-3.jpeg",
          alt: "SX1 Seite 3 mit K\u00f6rperarbeit, Akupressur und Medienfeldern",
        },
        {
          title: "SX1 \u00b7 Seite 4",
          caption: "Heilmittel-Kompass mit Mineralstoffimpuls, Bachbl\u00fcte, Edelstein und Tee.",
          src: "assets/knowledge/type-1/sx1/sx1-page-4.jpeg",
          alt: "SX1 Seite 4 Heilmittel-Kompass mit Platinum metallicum und unterst\u00fctzenden Mitteln",
        },
        {
          title: "SX1 \u00b7 Seite 5",
          caption: "Integrationspotenzial, Bewusstseinsraum, neue F\u00e4higkeiten und Ausstrahlung.",
          src: "assets/knowledge/type-1/sx1/sx1-page-5.jpeg",
          alt: "SX1 Seite 5 mit Integrationspotenzial Leidenschaft und Hingabe",
        },
      ],
      lifeTheme: [
        "Intensive Verbindung und gemeinsame Entwicklung suchen.",
        "Menschen inspirieren und verbessern wollen und dabei leicht in innere Spannung geraten.",
        "Sich nach Tiefe und Echtheit sehnen und dabei leicht Gelassenheit und Frieden verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Solarplexus / Oberbauch und Unterbauch / Beckenbereich.",
      essence: {
        title: "Integrationspotenzial: Leidenschaft & Hingabe",
        sentence: "Wahre Ver\u00e4nderung beginnt, wenn Leidenschaft einem h\u00f6heren Zweck dient.",
        qualities: ["tiefer, fokussierter Blick", "kraftvolle Pr\u00e4senz", "kompromisslose Klarheit", "Leidenschaft klug einsetzen", "Hingabe ohne Selbstaufgabe"],
      },
      integrationPath: [
        "Sicherheit, Ordnung und Kontrolle im eigenen Leben suchen.",
        "Alles richtig machen wollen und sich dabei oft selbst unter Druck setzen.",
        "Fehler und Schw\u00e4che vermeiden wollen und dadurch leicht innere Entspannung verlieren.",
      ],
      unconsciousStrategy: [
        "Gef\u00fchle und Spannungen verst\u00e4rken, um Verbindung lebendig zu halten.",
        "Empfindlich auf Distanz oder Unstimmigkeiten reagieren.",
        "Sich \u00fcber Intensit\u00e4t, Ausdruck und Konfrontation stabilisieren, auch wenn innere Ruhe verloren geht.",
      ],
      turningPoint: [
        "Erkennen, dass innere Intensit\u00e4t und st\u00e4ndige Verbesserung keinen inneren Frieden erzeugen.",
        "Unvollkommenheit bei sich selbst und anderen zulassen.",
        "Liebevolle Hingabe ersetzt inneren Kampf und Druck.",
      ],
      integratedState: [
        "Intensit\u00e4t bewusst nutzen, ohne sich oder andere st\u00e4ndig verbessern zu m\u00fcssen.",
        "Offen f\u00fcr Leidenschaft und Hingabe bleiben, ohne inneren Kampf zu erzeugen.",
        "Liebe ersetzt Kontrolle und Perfektionsdruck.",
      ],
      tensionFields: [
        "Perfektion \u2192 Hingabe",
        "Intensit\u00e4t \u2192 Gelassenheit",
        "Kontrolle \u2192 Vertrauen",
        "Ideale \u2192 Wirklichkeit",
        "Forderung \u2192 Annahme",
        "Spannung \u2192 Entspannung",
        "Kritik \u2192 Mitgef\u00fchl",
        "Leidenschaft \u2192 Frieden",
        "Rechthaben \u2192 Liebe",
      ],
      archetypalEssence: "Hingabe",
      integrativePotential: "Leidenschaft & Hingabe",
      nervousSystemRegulation: [
        "Spannung bewusst regulieren",
        "intensive Energie kanalisieren",
        "zwischen N\u00e4he und R\u00fcckzug pendeln",
        "Perfektionismus und H\u00e4rte l\u00f6sen",
        "Impuls nicht sofort ausagieren",
        "Leidenschaft in Dienst nehmen",
        "sich selbst weniger unter Druck setzen",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Anspruch auf vollkommene Integrit\u00e4t und der Wut \u00fcber Unordnung, Unrecht und menschliche Unvollkommenheit.",
        gazeQuality: [
            "durchdringend und fokussiert",
            "scharf beobachtend",
            "entlarvend",
            "sucht Unstimmigkeiten",
          ],
        microTension: [
            "Stirn: vertikale Falten, gespannt",
            "Augen: intensiv, leicht verengt",
            "Mund: kontrolliert, oft fest",
            "Kiefer: angespannt, Kieferdruck",
            "Haltung: aufrecht, kontrolliert, steif",
          ],
        breathingRhythm: [
            "eher flach und kontrolliert",
            "Atem wird oft angehalten bei innerem Urteil",
            "unbewusste Spannung im Brustkorb",
            "Perfektionsdruck im Atem",
          ],
        movementInitiation: [
            "zielgerichtet und kontrolliert",
            "z\u00f6gert nicht, wenn klar ist, was zu tun ist",
            "bewegt sich geradlinig und effizient",
            "meidet Unordnung und Chaos",
          ],
        contactStyle: [
            "direkt, klar, fordernd",
            "hohe Anspr\u00fcche an sich und andere",
            "sucht Tiefe und Wahrheit",
            "konfrontiert, wenn Prinzipien verletzt werden",
          ],
        twoPoints: {
          point1: { name: "Solarplexus / Oberbauch", location: "oberhalb des Nabels", need: [
              "Ordnung",
              "Integrit\u00e4t",
              "Kontrolle",
              "innere Stabilit\u00e4t",
            ] },
          point2: { name: "Unterbauch / Beckenbereich", location: "unterhalb des Nabels", need: [
              "Sicherheit",
              "Schutz",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nicht antreiben.",
            "Weich bleiben.",
            "W\u00e4rme zulassen.",
            "Intensit\u00e4t beruhigen.",
            "Sanfter werden.",
          ],
        },
      },
      signature: {
        title: "Verk\u00f6rperte Signatur",
        text: "Ich bleibe meiner inneren Wahrheit treu \u2013 ohne Kompromisse.",
      },
      contentModules: [
        {
          title: "Typ 1 \u00b7 Grundkarte",
          intro:
            "Die allgemeine Typ-1-Karte bildet die Grundlage f\u00fcr alle Einser-Subtypen. Im Zentrum steht das Streben nach Ordnung, Integrit\u00e4t und Richtigkeit. Der Organismus versucht, Fehler, moralisches Versagen und Kontrollverlust zu vermeiden.",
          entries: [
            {
              label: "Thema",
              text: "Grundthema: richtig und falsch. Typ 1 sucht Ordnung, Integrit\u00e4t, Verantwortung und innere Korrektheit.",
            },
            {
              label: "Organismusfrage",
              text: "Wie kann ich richtig sein und Fehler vermeiden?",
            },
            {
              label: "Leidenschaft",
              text: "Die innere Spannung entsteht aus \u00c4rger, Groll oder Unzufriedenheit, die meist kontrolliert, moralisch begr\u00fcndet oder gegen sich selbst gerichtet wird.",
            },
            {
              label: "Innere Motivation",
              text: "Typ 1 m\u00f6chte gut, integer, verantwortungsvoll und richtig handeln. Die Welt soll sinnvoll, geordnet und gerecht sein.",
            },
            {
              label: "Stirnspannung",
              text: "Horizontale Spannung, Kontrollaktivit\u00e4t, innere Bewertung und st\u00e4ndiges Pr\u00fcfen.",
            },
            {
              label: "Blickfokus",
              text: "Pr\u00e4zise, pr\u00fcfend, wach und korrekturorientiert. Der Blick sucht Abweichungen, Unstimmigkeiten oder etwas, das verbessert werden m\u00fcsste.",
            },
            {
              label: "Mundlinie",
              text: "Kontrolliert, leicht angespannt, zur\u00fcckhaltende Emotion. Impulse werden eher gehalten als spontan gezeigt.",
            },
            {
              label: "Kiefer & Nacken",
              text: "Haltespannung, Zur\u00fcckhalten von Impulsen und k\u00f6rperlich sp\u00fcrbare Selbstkontrolle.",
            },
            {
              label: "K\u00f6rperorganisation",
              text: "Aufrecht, gesammelt und kontrolliert, mit subtiler Distanz. Die Energie kanalisiert sich nach oben; Kopf, Stirn, Kiefer und Nacken sind h\u00e4ufig aktiver als Bauch, Becken und spontane Bewegung.",
            },
            {
              label: "Spaltung / innerer Konflikt",
              text: "Selbstanspruch, Perfektion und Richtigkeit stehen Menschlichkeit, Fehlerfreundlichkeit und lebendiger Unvollkommenheit gegen\u00fcber.",
            },
            {
              label: "Typische Haltung & Ausdruck",
              text: "Aufgerichtet, strukturiert und ernst. Gestik und Mimik sind pr\u00e4zise, kontrolliert und sparsam. Der Ausdruck kann reserviert, kritisch oder streng wirken.",
            },
            {
              label: "Verk\u00f6rperte Signatur",
              text: "Ich halte Spannung, um richtig zu handeln und Fehler zu vermeiden.",
            },
            {
              label: "Integrationsweg",
              text: "Vom inneren Kritiker zum weisen H\u00fcter. Mehr Menschlichkeit statt Perfektion, mehr Pr\u00e4senz statt permanenter Korrektur, mehr W\u00fcrde statt innerer Strenge.",
            },
            {
              label: "Blickqualit\u00e4t",
              text: "Pr\u00e4zise, kontrolliert, bewertend und wach. Der Blick sucht Unstimmigkeiten, kann aber in der Integration zu Klarheit und Weisheit werden.",
            },
            {
              label: "Mikrospannung",
              text: "Spannung in Stirn, Augen, Kiefer und Nacken. Der K\u00f6rper h\u00e4lt sich zusammen, um korrekt und beherrscht zu bleiben.",
            },
            {
              label: "Atemrhythmus",
              text: "Eher flach, kontrolliert und gehalten. Der Atem darf lernen, nicht nur Disziplin, sondern auch Loslassen zu unterst\u00fctzen.",
            },
            {
              label: "Bewegungsinitiierung",
              text: "Zielgerichtet, kontrolliert, korrekturorientiert und funktional. Spontane Bewegung wird h\u00e4ufig erst gepr\u00fcft.",
            },
            {
              label: "Kontaktstil",
              text: "Verantwortlich, korrekt und verbindlich. In Stress kann der Kontakt kritisch oder belehrend wirken; in Integration entsteht klare, w\u00fcrdige F\u00fchrung.",
            },
            {
              label: "Spannungsverteilung",
              text: "Hauptspannung in Stirn, Kiefer und Nacken. Nebenaktivit\u00e4t im Solarplexus und in den Schultern.",
            },
            {
              label: "Archetypisches Tier",
              text: "Adler: Weitblick, Integrit\u00e4t, Klarheit und F\u00fchrung. Der Adler steht f\u00fcr den Weg vom kritischen Blick zur weisen \u00dcbersicht.",
            },
            {
              label: "Lebensfeld",
              text: "Lebensthema: Ordnung und Integrit\u00e4t. Kernsatz: Nicht korrigieren. Ressource: weich werden lassen und trotzdem klar bleiben.",
            },
          ],
        },
        {
          title: "SE1 \u00b7 Seite 1 \u00b7 Subtyp-Profil",
          intro:
            "Die SE1 sucht Sicherheit durch Ordnung, Korrektheit und Selbstkontrolle. Der K\u00f6rper zeigt dabei feine Konzentration, zur\u00fcckhaltende Pr\u00e4senz und ein starkes Bed\u00fcrfnis, stabil und integer zu handeln.",
          entries: [
            {
              label: "Grundthema",
              text: "Integrit\u00e4t und Ordnung. Das Richtige ist heilig; Prinzipien sollen sch\u00fctzen, st\u00fctzen und Halt geben.",
            },
            {
              label: "Organismusfrage",
              text: "Wie kann ich richtig handeln und meine Integrit\u00e4t bewahren, um sicher und stabil zu bleiben?",
            },
            {
              label: "Blickqualit\u00e4t",
              text: "aufmerksam und pr\u00fcfend; scannt nach Sicherheit und Ordnung; eher bei sich und weniger expansiv; klare, ruhige Pr\u00e4senz.",
            },
            {
              label: "Mikrospannung",
              text: "leichte Konzentrationsfalten in der Stirn, fokussierte und kritische Augen, kontrollierter Mund, leicht angespannter Kiefer und aufrechte, zur\u00fcckhaltende Haltung.",
            },
            {
              label: "Atemrhythmus",
              text: "tief, ruhig und kontrolliert; neigt zum Anhalten des Atems bei innerer Anspannung; Regulation \u00fcber Kontrolle.",
            },
            {
              label: "Bewegungsinitiierung",
              text: "\u00fcberlegt und vorsichtig; pr\u00fcft erst und handelt dann; sch\u00fctzt Energie und Ressourcen; Bewegung ist zielgerichtet und sparsam.",
            },
            {
              label: "Kontaktstil",
              text: "respektvoll, korrekt und verl\u00e4sslich; nimmt Distanz wahr, bis Vertrauen da ist; klare Grenzen und klare Worte; hilfsbereit, wenn Sicherheit gegeben ist.",
            },
            {
              label: "Spannungsverteilung",
              text: "Kopf und Stirn: moralische Anspannung. Nacken und Schultern: Verantwortungslast. Brustbereich: Schutzpanzer. Bauch: Kontrolle und Selbstregulation. Kiefer: zur\u00fcckgehaltene Spannung.",
            },
            {
              label: "Ressourcenfeld",
              text: "Selbstf\u00fcrsorge und Stabilit\u00e4t, klare Werte und Prinzipien, Struktur und Ordnung, verl\u00e4ssliche Routinen, Grenzen und Selbstschutz, Ehrlichkeit und Gewissen.",
            },
          ],
        },
        {
          title: "Seite 2 \u00b7 2-Punkte-Integration",
          intro:
            "Die zentrale Praxis der SE1 verbindet zwei K\u00f6rperr\u00e4ume: den Solarplexus/Oberbauch als Feld von Ordnung und Ausrichtung mit dem Unterbauch/Beckenbereich als Feld von Sicherheit, Ruhe und Erdung. Die \u00dcbung bringt Aufmerksamkeit in beide Pole zugleich, ohne etwas korrigieren zu m\u00fcssen.",
          entries: [
            {
              label: "Punkt 1",
              text: "Solarplexus / Oberbauch: Bed\u00fcrfnis nach Klarheit, Ordnung und richtiger Ausrichtung. Dieser Punkt h\u00e4lt die innere Frage, was stimmig, korrekt und verantwortbar ist.",
            },
            {
              label: "Punkt 2",
              text: "Unterbauch / Beckenbereich: Bed\u00fcrfnis nach Sicherheit, Ruhe, Erdung und k\u00f6rperlichem Vertrauen. Dieser Punkt bringt die SE1 aus reiner Kopf- und Kontrollspannung zur\u00fcck in den K\u00f6rper.",
            },
            {
              label: "Vorgehen",
              text: "Eine Hand auf den Solarplexus/Oberbauch legen, die andere auf den Unterbauch/Beckenbereich. Erst Punkt 1 sp\u00fcren, dann Punkt 2 sp\u00fcren, danach beide Energiefelder gleichzeitig wahrnehmen. Nichts ver\u00e4ndern, nichts korrigieren, den Atem ruhig flie\u00dfen lassen.",
            },
            {
              label: "Handposition",
              text: "Die H\u00e4nde dienen nicht der Korrektur, sondern der gleichzeitigen Aufmerksamkeit. Die SE1 erlebt dadurch: Klarheit und Sicherheit m\u00fcssen nicht gegeneinander arbeiten.",
            },
            {
              label: "Lebensthema",
              text: "Du suchst Sicherheit durch Ordnung, Integrit\u00e4t und richtiges Handeln. Gleichzeitig entsteht Druck, wenn Sicherheit nur \u00fcber Kontrolle und Fehlervermeidung gesucht wird.",
            },
            {
              label: "Unbewusste Strategie",
              text: "Du versuchst, Stabilit\u00e4t durch Kontrolle, Korrektheit und Vorbereitung herzustellen. Dabei kann der K\u00f6rper eng werden, obwohl er eigentlich nach Ruhe und Vertrauen sucht.",
            },
            {
              label: "Integration",
              text: "Du lernst, Ordnung zuzulassen, ohne dich zu verh\u00e4rten. Sicherheit entsteht nicht nur durch Richtigkeit, sondern auch durch K\u00f6rperkontakt, Erdung und inneres Vertrauen.",
            },
            {
              label: "Prototypen",
              text: "Die weibliche und m\u00e4nnliche SE1-Prototypik zeigt eine ruhige, zur\u00fcckhaltende und kontrollierte Pr\u00e4senz. Beide stehen f\u00fcr die Suche nach Stabilit\u00e4t, Verantwortung und innerer Korrektheit.",
            },
            {
              label: "Kernsatz",
              text: "Wenn du deiner inneren Ordnung vertraust, entsteht Ruhe, auch wenn nicht alles perfekt ist.",
            },
            {
              label: "Fu\u00dfzeile",
              text: "Selbsterhaltende Eins (SE1): Instinkt der Integrit\u00e4t, Ordnung, Stabilit\u00e4t und k\u00f6rperlichen Selbstsicherung.",
            },
          ],
        },
        {
          title: "Seite 3 \u00b7 K\u00f6rperarbeit & Akupressur",
          intro:
            "Diese Seite \u00fcbersetzt die innere Spannung der SE1 in konkrete K\u00f6rperarbeit. Der Weg f\u00fchrt von Selbst\u00fcberforderung und Kontrolle in mehr Lebendigkeit, Vertrauen und k\u00f6rperliche Entspannung.",
          entries: [
            {
              label: "Problem",
              text: "Du versuchst, korrekt, stabil und vorbereitet zu bleiben. Dabei kann innere Spannung entstehen, weil der K\u00f6rper st\u00e4ndig pr\u00fcft, ob etwas falsch, unsicher oder noch nicht gut genug ist.",
            },
            {
              label: "Wendepunkt",
              text: "Du erkennst, dass Kontrolle und Selbstkorrektur nicht dasselbe sind wie echte Sicherheit. Die Energie darf ruhiger werden, ohne dass Integrit\u00e4t verloren geht.",
            },
            {
              label: "Integration",
              text: "Du nutzt deine Klarheit bewusst, ohne sie gegen dich selbst zu richten. Ordnung wird zu Orientierung, nicht zu Druck.",
            },
            {
              label: "Gesicht",
              text: "Klarheit und Ausdruck. Der Gesichtspunkt hilft, die kontrollierte Mimik weicher werden zu lassen und dennoch klar pr\u00e4sent zu bleiben.",
            },
            {
              label: "Hand",
              text: "Handlungskraft und Balance. Die Hand erinnert daran, dass richtiges Handeln nicht aus Verkrampfung entstehen muss.",
            },
            {
              label: "Fu\u00df",
              text: "Erdung und Standfestigkeit. Der Fu\u00dfpunkt bringt die SE1 aus der Bewertung in k\u00f6rperlichen Boden und tragf\u00e4hige Orientierung.",
            },
            {
              label: "Bauch",
              text: "Mitte und Entspannung. Der Bauchpunkt reguliert Kontrolle, Druck und innere Anspannung und st\u00e4rkt eine ruhigere Mitte.",
            },
            {
              label: "Finger",
              text: "Sp\u00fcren und Loslassen. Der Fingerimpuls unterst\u00fctzt, Perfektionismus, festgehaltene Korrektur und innere Enge zu l\u00f6sen.",
            },
            {
              label: "Ohr",
              text: "Stille und Regulation. Der Ohrpunkt l\u00e4dt ein, die innere Stimme milder zu h\u00f6ren und nicht nur den inneren Kritiker wahrzunehmen.",
            },
            {
              label: "Anwendung",
              text: "W\u00e4hle ein bis zwei Zonen. Dr\u00fccke mit Daumen oder Zeigefinger 60 bis 90 Sekunden mit mittlerer Intensit\u00e4t. Atme ruhig weiter und beobachte, wie K\u00f6rperempfindungen, Gedanken und Gef\u00fchle sich ver\u00e4ndern.",
            },
            {
              label: "Vollkommen still sitzen",
              text: "Setze dich f\u00fcr zwei Minuten aufrecht und bequem hin. Der K\u00f6rper darf seine eigene Intelligenz zeigen; in dieser kurzen Zeit muss nichts verbessert werden.",
            },
            {
              label: "Mentale & emotionale Haltung",
              text: "Typ 1 zeigt mentalen Perfektionismus und emotionalen Groll, wenn innere Spannung zu stark wird. Die SE1 lernt, Selbstkontrolle in Selbstkontakt zu verwandeln.",
            },
            {
              label: "Fl\u00fcgel",
              text: "Der 9er-Fl\u00fcgel betont Ruhe, Zur\u00fcckhaltung und Harmonie. Der 2er-Fl\u00fcgel betont Beziehung, Verantwortung und Hilfsbereitschaft. Beide k\u00f6nnen die SE1 entlasten, wenn sie nicht zur zus\u00e4tzlichen Pflicht werden.",
            },
            {
              label: "Medienfelder",
              text: "Die Seite verweist auf Bewusstseins\u00fcbungen, dynamische Enneagramm-Darstellungen, Songs, Fl\u00fcgelvideos und subtypspezifische Medien. Diese Felder sind in der App bereits als Medienbereich vorbereitet.",
            },
          ],
        },
        {
          title: "Seite 4 \u00b7 Heilmittel-Kompass",
          intro:
            "Der Heilmittel-Kompass \u00fcbersetzt das SE1-Muster in ein heilkundliches Symbolfeld. Im Zentrum steht die Wandlung von \u00fcberh\u00f6hter Selbstkontrolle, innerem Druck und angespannter Korrektheit hin zu W\u00fcrde, Milde, innerer Ordnung und lebendiger Integrit\u00e4t.",
          entries: [
            {
              label: "Hom\u00f6opathisches Einzelmittel",
              text: "Platinum metallicum steht hier f\u00fcr die Regulation umgewandelter Bauchenergie. Es symbolisiert den Weg von innerem Anspruch, Selbstverantwortung und Spannung zu W\u00fcrde, Demut und echter Integrit\u00e4t.",
            },
            {
              label: "Thema",
              text: "Das Bed\u00fcrfnis, integer, korrekt und kontrolliert zu bleiben, kann von einem starken inneren Anspruch getragen sein. Der heilende Weg f\u00fchrt von rigider Selbstbeherrschung zu milder, lebendiger Ordnung.",
            },
            {
              label: "Wirkung auf Lebenskraft und Leidenschaft",
              text: "Der Impuls unterst\u00fctzt die Wandlung von angespanntem Perfektionismus, innerer H\u00e4rte und Selbst\u00fcberh\u00f6hung in menschliche Pr\u00e4senz, Selbstannahme und verantwortliche Klarheit.",
            },
            {
              label: "Ziel",
              text: "Regulation und St\u00e4rkung der Einser-Lebenskraft: Die umgewandelte Bauchenergie soll nicht bek\u00e4mpft, sondern in klare, ruhige und dienende Integrit\u00e4t verwandelt werden.",
            },
            {
              label: "Mineralstoff-Impuls",
              text: "Kalium sulfuricum verweist auf Ausgleich, Reinigung und Erneuerung. Es unterst\u00fctzt symbolisch die F\u00e4higkeit, innere Spannung zu l\u00f6sen und Ordnung nicht starr, sondern beweglich zu halten.",
            },
            {
              label: "Bachbl\u00fcte",
              text: "Rock Water steht f\u00fcr innere Flexibilit\u00e4t, wenn Ideale, Disziplin und Selbstanspruch zu hart werden. Die Qualit\u00e4t ist: milder werden, ohne die eigene Integrit\u00e4t aufzugeben.",
            },
            {
              label: "Edelstein",
              text: "Amethyst tr\u00e4gt das Feld von Klarheit, Sammlung und geistiger Beruhigung. Er passt zur SE1, wenn die innere Stimme zu streng, bewertend oder kontrollierend wird.",
            },
            {
              label: "Tee",
              text: "Melissentee steht f\u00fcr sanfte Nervenruhe, Entspannung und emotionale Milde. Er erg\u00e4nzt die SE1 dort, wo Kontrolle durch Beruhigung und weichen Atem abgel\u00f6st werden darf.",
            },
            {
              label: "Leidenschaft",
              text: "Die Leidenschaft der SE1 liegt in der inneren Anspannung, alles richtig machen zu m\u00fcssen. Fehler, Unordnung oder moralische Unklarheit k\u00f6nnen k\u00f6rperlich wie Alarm erlebt werden.",
            },
            {
              label: "Innere Motivation",
              text: "Die Motivation ist der Wunsch nach Integrit\u00e4t, Sicherheit und verl\u00e4sslicher Ordnung. Die SE1 m\u00f6chte stabil, korrekt und verantwortlich handeln.",
            },
            {
              label: "Medien & Wirkweise",
              text: "Zur Seite geh\u00f6ren erg\u00e4nzende Medienfelder: Wirkweise der Hom\u00f6opathie, Wirkweise der Enneagramm-Hom\u00f6opathie, Relaxing & Healing Music und Songs zum Wesen der Hom\u00f6opathie.",
            },
            {
              label: "Zuordnungshinweis",
              text: "Die Zuordnung ist symbolisch und erfahrungsbezogen. Sie ersetzt keine therapeutische oder medizinische Beratung, sondern dient der bewussten Selbstwahrnehmung und Integration.",
            },
          ],
        },
        {
          title: "Seite 5 \u00b7 Integration",
          intro:
            "Seite 5 b\u00fcndelt das Integrationspotenzial der SE1. Die Bewegung geht von angespannter Selbstkontrolle, Fehlervermeidung und innerem Druck zu ruhiger Integrit\u00e4t, Selbstkontakt, Stabilit\u00e4t und milder Klarheit.",
          entries: [
            {
              label: "Integrationspotenzial",
              text: "Ruhe und Integrit\u00e4t. Die SE1 muss Ordnung nicht mehr durch Druck erzwingen, sondern findet eine nat\u00fcrliche, verl\u00e4ssliche innere Ausrichtung.",
            },
            {
              label: "Leitquote",
              text: "Sicherheit entsteht, wenn ich meiner inneren Ordnung vertraue, statt mich dauerhaft korrigieren zu m\u00fcssen.",
            },
            {
              label: "Archetypische Essenz",
              text: "Die SE1 ist der ruhige H\u00fcter der Integrit\u00e4t. Sie sch\u00fctzt Werte, Ordnung und Verantwortung, ohne sich dabei selbst zu verh\u00e4rten.",
            },
            {
              label: "Verk\u00f6rperte Qualit\u00e4t",
              text: "Verantwortungsbewusst, sorgf\u00e4ltig, zuverl\u00e4ssig, strukturiert, gewissenhaft und klar. In der Integration wird diese Qualit\u00e4t w\u00e4rmer, ruhiger und menschlicher.",
            },
            {
              label: "Nervensystem-Regulation",
              text: "Langsame Atmung, weicher Kiefer, Erdung, Grenzen sp\u00fcren und die innere Kritikerstimme beruhigen. Der K\u00f6rper lernt, Sicherheit nicht nur \u00fcber Kontrolle zu erzeugen.",
            },
            {
              label: "Beziehungsebene",
              text: "Vertrauen entsteht, wenn die SE1 sich zeigen darf, ohne perfekt sein zu m\u00fcssen. Klarheit bleibt, aber sie wird durch W\u00e4rme, Zuh\u00f6ren und echte N\u00e4he erg\u00e4nzt.",
            },
            {
              label: "Neue F\u00e4higkeiten",
              text: "Fehlerfreundlichkeit, Gelassenheit, innere Milde, flexible Ordnung, Selbstf\u00fcrsorge, Humor und die F\u00e4higkeit, Verantwortung ohne \u00dcberkontrolle zu \u00fcbernehmen.",
            },
            {
              label: "Integrationssatz",
              text: "Ich handle integer und klar, ohne mich selbst zu verurteilen. Ich darf richtig handeln und zugleich weich, lebendig und menschlich bleiben.",
            },
            {
              label: "Bewusstseinsraum",
              text: "Bewusstsein entsteht, wenn die SE1 erkennt, dass wahre Integrit\u00e4t nicht aus Strenge, sondern aus Pr\u00e4senz, Wahrhaftigkeit und innerer Ruhe kommt.",
            },
            {
              label: "Ausstrahlung",
              text: "Ruhige Pr\u00e4senz, klare Werte, verl\u00e4ssliche W\u00e4rme, sorgf\u00e4ltige Verantwortung und eine nat\u00fcrliche W\u00fcrde, die andere nicht korrigieren muss.",
            },
            {
              label: "Archetypische Natur",
              text: "Der Adler steht f\u00fcr Weitblick und Integrit\u00e4t. In der Integration wird sein Blick nicht nur pr\u00fcfend, sondern \u00fcbersichtlich, weise und sch\u00fctzend.",
            },
            {
              label: "Integration bedeutet",
              text: "Vom Korrigieren zum Erkennen, vom inneren Druck zur Ruhe, vom Perfektionismus zur Menschlichkeit und von Kontrolle zu vertrauensvoller Ordnung.",
            },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Platinum metallicum",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-1/sx1/heilmittel/sx1-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus dem Edelmetall Platin \u2013 einem der reinsten, kostbarsten und widerstandsf\u00e4higsten Metalle \u00fcberhaupt, das von keiner S\u00e4ure angegriffen wird. Genau diese Signatur pr\u00e4gt das Mittelbild: ein Streben nach Reinheit, Vollkommenheit und moralischer Unantastbarkeit, verbunden mit einem feinen Gef\u00fchl der Erhabenheit \u00fcber das Gew\u00f6hnliche. Wie das Metall sich nicht verunreinigen l\u00e4sst, will die Eins fehlerlos, korrekt und integer sein. Das Bed\u00fcrfnis, alles richtig zu machen, ruht auf einem starken inneren Anspruch nach Perfektion, Ordnung und Integrit\u00e4t \u2013 und auf der Angst, sich durch einen Fehler herabzusetzen.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als strenge Kontrolle, innerer Druck, Anspannung und unerbittliche Selbstverurteilung zeigt. Es hilft, den hohen Anspruch von der erstarrten H\u00e4rte zu l\u00f6sen, sodass W\u00fcrde und Aufrichtigkeit bleiben d\u00fcrfen, ohne in Verbissenheit und \u00dcberlegenheit zu kippen. So darf die Eins Ma\u00df und Menschlichkeit wiederfinden \u2013 richtig sein, ohne sich selbst zu richten.",
        },
        {
          title: "Kalium sulfuricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-1/sx1/heilmittel/sx1-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Reinigung, Stoffwechsel und innere Erneuerung",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 6 ist das Salz des Stoffwechsels, der Entgiftung und der inneren Erneuerung. Es unterst\u00fctzt die Zellatmung und hilft dem K\u00f6rper, Verbrauchtes auszuscheiden und sich zu regenerieren. Auf seelischer Ebene steht es f\u00fcr Erneuerung und das L\u00f6sen von Festgefahrenem. F\u00fcr die Eins, die sich in Strenge, Druck und Selbstverurteilung verh\u00e4rten kann, f\u00f6rdert es einen lebendigen Fluss. So wirkt es dort, wo starre Kontrolle sich in gesunde Durchl\u00e4ssigkeit wandeln darf.",
          goal: "Auf der Mineralstoff-Ebene f\u00f6rdert es die F\u00e4higkeit, festgehaltene Spannungen und veraltete Ordnungsmuster loszulassen \u2013 hin zu nat\u00fcrlicher Erneuerung ohne Zwang.",
        },
        {
          title: "Rock Water",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-1/sx1/heilmittel/sx1-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Flexibilit\u00e4t statt starrer Selbststrenge",
          text: "Rock Water ist die Bachbl\u00fcte f\u00fcr Menschen, die hohe Ideale an sich selbst anlegen und streng, fast asketisch mit sich umgehen. Sie hilft jenen, die sich Genuss und Leichtigkeit versagen, um ein selbstgesetztes Vorbild zu erf\u00fcllen. Die Bl\u00fcte l\u00f6st innere H\u00e4rte und starre Selbstdisziplin und bringt Flexibilit\u00e4t und Milde. F\u00fcr die Eins, die unter dem Druck des inneren Richters steht, ist sie ein sanftes Gegenmittel. So darf aus verbissener Strenge eine offene, freundliche Haltung sich selbst gegen\u00fcber werden.",
          goal: "Auf der Seelenebene l\u00e4dt es ein, die eigene Menschlichkeit zu umarmen \u2013 Ideale d\u00fcrfen bleiben, aber der innere Richter darf sich in einen weisen Freund verwandeln.",
        },
        {
          title: "Amethyst",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-1/sx1/heilmittel/sx1-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Ruhe, Klarheit und Gelassenheit",
          text: "Der Amethyst ist eine violette Variet\u00e4t des Bergkristalls und gilt seit der Antike als Stein der Klarheit, M\u00e4\u00dfigung und geistigen Ruhe. Traditionell setzt man ihn dort ein, wo der Kopf nicht zur Ruhe kommt: bei kreisenden Gedanken, innerer Anspannung und einem \u00fcberaktiven, kritischen Geist. Er wirkt beruhigend, kl\u00e4rend und harmonisierend und unterst\u00fctzt Meditation wie erholsamen Schlaf. F\u00fcr die Eins ist er ein Gegengewicht zur strengen Selbstkontrolle und zum unerm\u00fcdlichen inneren Richter. Er l\u00e4dt ein, Anspannung loszulassen und echte Gelassenheit zuzulassen \u2013 Ruhe statt Verbissenheit, Milde statt H\u00e4rte gegen sich selbst.",
          goal: "Als energetisches Werkzeug l\u00e4dt er ein, innere Strenge durch Klarheit zu ersetzen \u2013 Kontrolle darf Stille werden, Anspannung darf sich in ruhige Ordnung aufl\u00f6sen.",
        },
        {
          title: "Melissentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-1/sx1/heilmittel/sx1-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "beruhigend und nervenst\u00e4rkend",
          text: "Melisse ist ein klassisches Heilkraut f\u00fcr Nerven und Gem\u00fct, mild beruhigend und herzst\u00e4rkend. Ihr zitronig-frischer Duft entspannt, ohne m\u00fcde zu machen, und l\u00f6st innere Anspannung. Traditionell wird sie bei Unruhe, Reizbarkeit und nerv\u00f6ser Anspannung getrunken. F\u00fcr die Eins, die unter innerem Druck und Selbststrenge steht, ist sie ein sanfter Ausgleich. So hilft ein Melissentee, verkrampfte Anspannung loszulassen und zur Ruhe zu kommen.",
          goal: "Als pflanzliche Begleiterin l\u00e4dt sie t\u00e4glich ein, sich aus dem Kontrollmodus zu l\u00f6sen und den K\u00f6rper als freundlichen Ort zu erleben.",
        },
        {
          title: "Arsenicum album",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/arsenicum-album.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus dem wei\u00dfen Arsenik \u2013 einem mineralischen Stoff, der in materieller Dosis ein t\u00f6dliches Gift ist und im Menschen tiefste Existenzangst spiegelt. Diese Signatur zeigt das Mittelbild deutlich: eine qu\u00e4lende Sorge um Sicherheit, Ordnung und Reinheit, peinliche Genauigkeit und die rastlose Angst, etwas k\u00f6nnte au\u00dfer Kontrolle geraten. Die Wunde der Unvollkommenheit tr\u00e4gt genau diesen Kern \u2013 einen tiefen Wunsch nach Sicherheit und Fehlervermeidung, der hinter Ordnung eine st\u00e4ndige innere Anspannung verbirgt. Wo das Gift Vernichtung bedeutet, sucht die Seele zwanghaft Halt durch Kontrolle.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als \u00e4ngstliche Kontrolle, Unsicherheitsvermeidung und unerm\u00fcdliche Selbstpr\u00fcfung zeigt. Es beruhigt die existenzielle Unruhe und hilft, das Gef\u00fchl von Sicherheit nicht l\u00e4nger durch perfekte Ordnung erzwingen zu m\u00fcssen. So darf an die Stelle der angstgetriebenen Kontrolle ein getragenes inneres Vertrauen treten.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Platinum metallicum",
          schuessler: "Kalium sulfuricum",
          bachbluete: "Rock Water",
          edelstein: "Amethyst",
          tee: "Melissentee",
        },
        homoeopathieThema: "Gewonnen aus dem Edelmetall Platin \u2013 einem der reinsten, kostbarsten und widerstandsf\u00e4higsten Metalle \u00fcberhaupt, das von keiner S\u00e4ure angegriffen wird. Genau diese Signatur pr\u00e4gt das Mittelbild: ein Streben nach Reinheit, Vollkommenheit und moralischer Unantastbarkeit, verbunden mit einem feinen Gef\u00fchl der Erhabenheit \u00fcber das Gew\u00f6hnliche. Wie das Metall sich nicht verunreinigen l\u00e4sst, will die Eins fehlerlos, korrekt und integer sein. Das Bed\u00fcrfnis, alles richtig zu machen, ruht auf einem starken inneren Anspruch nach Perfektion, Ordnung und Integrit\u00e4t \u2013 und auf der Angst, sich durch einen Fehler herabzusetzen.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als strenge Kontrolle, innerer Druck, Anspannung und unerbittliche Selbstverurteilung zeigt. Es hilft, den hohen Anspruch von der erstarrten H\u00e4rte zu l\u00f6sen, sodass W\u00fcrde und Aufrichtigkeit bleiben d\u00fcrfen, ohne in Verbissenheit und \u00dcberlegenheit zu kippen. So darf die Eins Ma\u00df und Menschlichkeit wiederfinden \u2013 richtig sein, ohne sich selbst zu richten.",
        wundeThema: "Bereitet aus dem wei\u00dfen Arsenik \u2013 einem mineralischen Stoff, der in materieller Dosis ein t\u00f6dliches Gift ist und im Menschen tiefste Existenzangst spiegelt. Diese Signatur zeigt das Mittelbild deutlich: eine qu\u00e4lende Sorge um Sicherheit, Ordnung und Reinheit, peinliche Genauigkeit und die rastlose Angst, etwas k\u00f6nnte au\u00dfer Kontrolle geraten. Die Wunde der Unvollkommenheit tr\u00e4gt genau diesen Kern \u2013 einen tiefen Wunsch nach Sicherheit und Fehlervermeidung, der hinter Ordnung eine st\u00e4ndige innere Anspannung verbirgt. Wo das Gift Vernichtung bedeutet, sucht die Seele zwanghaft Halt durch Kontrolle.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als \u00e4ngstliche Kontrolle, Unsicherheitsvermeidung und unerm\u00fcdliche Selbstpr\u00fcfung zeigt. Es beruhigt die existenzielle Unruhe und hilft, das Gef\u00fchl von Sicherheit nicht l\u00e4nger durch perfekte Ordnung erzwingen zu m\u00fcssen. So darf an die Stelle der angstgetriebenen Kontrolle ein getragenes inneres Vertrauen treten.",
        wunde: {
          homoeopathie: "Arsenicum album",
          schuessler: "Kalium chloratum",
          bachbluete: "Rock Water",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 1). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      woundBehindPassion: {
        passion: "Groll \u2013 bei der SX1 verwandelt er sich in innere Intensit\u00e4t und pers\u00f6nlichen Zeal. Der Groll richtet sich vor allem auf nahe Beziehungen: auf mangelnde Tiefe, Unstimmigkeiten oder fehlende Integrit\u00e4t im direkten Kontakt.",
        belief: "\u201eDas Richtige ist nicht verhandelbar \u2013 weder bei mir noch bei denen, die mir nah sind.\u201c Darunter: \u201eWenn jemand nicht bereit ist, sich zu ver\u00e4ndern, ist diese Verbindung wertlos.\u201c",
        wound: "Die Wunde der Unvollkommenheit: das tiefe Gef\u00fchl, dass weder die eigene innere Welt noch enge Beziehungen jemals ganz der ersehnten Reinheit und Vollkommenheit entsprechen k\u00f6nnen.",
        compensation: "Intensit\u00e4t steigern, konfrontieren, korrigieren und transformieren \u2013 vor allem im pers\u00f6nlichen Kontakt. Die Energie richtet sich auf das Verbessern von Menschen und Beziehungen, oft mit starkem inneren Druck.",
        sufferingCycle: "Die SX1 k\u00e4mpft f\u00fcr Tiefe, Echtheit und Vollkommenheit in Beziehungen. Doch kaum scheint eine Verbindung nah genug, taucht die n\u00e4chste Unstimmigkeit auf. Die Intensit\u00e4t steigt, Beziehungen geraten unter Druck, und der Frieden, den die SX1 sucht, entweicht umso mehr, je st\u00e4rker sie k\u00e4mpft.",
        healingDirection: "Erkennen, dass wahre Verbindung nicht durch Perfektionsdruck entsteht. Wenn die innere Flamme bewusst gef\u00fchrt wird \u2013 statt zu k\u00e4mpfen \u2013 wird Leidenschaft zur Kraft der Hingabe und Transformation.",
        remedy: "Wundenmittel: Arsenicum album \u00b7 Leidenschaftsmittel: Platinum metallicum \u00b7 Sch\u00fc\u00dfler-Salz: Kalium chloratum \u00b7 Bach-Bl\u00fcte: Rock Water. Anwendung nur in therapeutischer R\u00fccksprache.",
        needsReview: [
          "\u201eHinter der Leidenschaft \u2013 die neun Wunden des Enneagramms\u201c, Kapitel Typ 1 (S. 30\u201357). SX1-Nuancen (Kontratyp, Beziehungsintensit\u00e4t) erg\u00e4nzt. Bitte gegen Originalseiten pr\u00fcfen.",
        ],
      },
      mediaGroups: type1MediaGroups("SX1", {
        deId: "s1AQHS_gOHg",
        enCode: "SX1",
        enId: "NWj3sLpqm1s",
        biblicalId: "mSDVJQpCVF8",
        affirmationsId: "qDI91oL9TGg",
      }),
      needsReview: [],
    };


const sx2 = {
      code: "SX2",
      title: "Die sexuelle Zwei",
      animal: "Kamel",
      status: "curated_draft",
      pages: "Typ 2 Grundkarte + SX2 Seiten 1-5",
      organismQuestion: "Bin ich liebenswert, wenn ich f\u00fcr andere da bin?",
      subtypeQuestion:
        "Wie kann ich tiefe N\u00e4he und Liebe zulassen, ohne sie durch Geben, Locken oder K\u00fcmmern sichern zu m\u00fcssen?",
      integrationSentence: "Ich gebe mich ganz hin und empfange echte Verbindung.",
      coreSentence:
        "Wenn du Liebe nicht erobern musst, kann echte Verbundenheit dich wirklich erreichen.",
      visualPages: type2VisualPages("SX2", "Sexuelle Zwei"),
      sourceCoverage: type2SourceCoverage("SX2"),
      contentModules: type2ContentModules("SX2"),
      lifeTheme: [
        "Intensive N\u00e4he und besondere emotionale Verbindung suchen.",
        "Viel Liebe und Aufmerksamkeit geben und daf\u00fcr tiefe Resonanz erwarten.",
        "Verschmelzung und Hingabe w\u00fcnschen und dabei leicht innere Unabh\u00e4ngigkeit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Oberbauch / innerer Raum.",
      essence: {
        title: "Integrationspotenzial: Tiefe & Hingabe",
        sentence: "Ich gebe mich ganz hin und empfange echte Verbindung.",
        qualities: ["magnetische Ausstrahlung", "intensive Pr\u00e4senz", "tiefe emotionale Intelligenz", "leidenschaftliche Liebe", "schutzende Hingabe"],
      },
      integrationPath: [
        "N\u00e4he zulassen, ohne sich selbst dabei zu verlieren.",
        "Nicht unentbehrlich sein m\u00fcssen, um geliebt zu werden.",
        "Verbindung durch innere Freiheit, Selbstachtung und echte Gegenseitigkeit finden.",
      ],
      unconsciousStrategy: [
        "\u00dcber besondere N\u00e4he emotionale Bedeutung bekommen wollen.",
        "Sich stark an einzelne Menschen binden und dabei leicht Eigenst\u00e4ndigkeit verlieren.",
        "Sich \u00fcber Aufmerksamkeit, Intensit\u00e4t und Verf\u00fchrung stabilisieren, auch wenn Abh\u00e4ngigkeit entsteht.",
      ],
      turningPoint: [
        "Erkennen, dass intensive Bindung und Verf\u00fchrung keine echte Selbstliebe ersetzen k\u00f6nnen.",
        "Authentisch und verletzlich sein, ohne sich beweisen zu m\u00fcssen.",
        "N\u00e4he entsteht durch Wahrhaftigkeit statt durch emotionale Verschmelzung.",
      ],
      integratedState: [
        "Anderen offen und herzlich begegnen, ohne sich \u00fcber Bindung oder Verf\u00fchrung zu definieren.",
        "Mit den eigenen Gef\u00fchlen und Grenzen verbunden bleiben.",
        "W\u00e4rme und lebendige N\u00e4he entstehen aus Wahrhaftigkeit und Selbstliebe.",
      ],
      tensionFields: [
        "Verf\u00fchrung \u2192 Wahrhaftigkeit",
        "Begehren \u2192 Selbstwert",
        "emotionale Abh\u00e4ngigkeit \u2192 innere Freiheit",
        "Anziehung \u2192 Echtheit",
        "Besitzanspruch \u2192 Vertrauen",
        "Intensit\u00e4t \u2192 Selbstkontakt",
        "Best\u00e4tigung \u2192 Selbstannahme",
        "Verschmelzung \u2192 Abgrenzung",
        "Bed\u00fcrftigkeit \u2192 liebevolle Eigenst\u00e4ndigkeit",
      ],
      archetypalEssence: "Hingabe",
      integrativePotential: "Tiefe & Hingabe",
      nervousSystemRegulation: [
        "Spannung im K\u00f6rper regulieren",
        "Eifersucht und Besitzdenken l\u00f6sen",
        "zwischen N\u00e4he und Freiheit balancieren",
        "\u00dcberidentifikation transformieren",
        "sich selbst nicht verlieren",
        "Bed\u00fcrfnisse klar kommunizieren",
        "Erholung bewusst einplanen",
        "innere Grenzen st\u00e4rken",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Wunsch, gebraucht und einzigartig zu sein, und der Angst, nicht die wichtigste Person zu sein oder verlassen zu werden.",
        gazeQuality: [
            "warm, intensiv und einladend",
            "pr\u00fcfend: Wer ist mir wirklich wichtig?",
            "leicht gierig, fokussiert und durchdringend",
            "sucht Tiefe, Resonanz und Exklusivit\u00e4t",
            "beobachtet, bevor sie oder er sich ganz \u00f6ffnet",
          ],
        microTension: [
            "Stirn: leicht angespannt, konzentriert",
            "Augen: intensiv, fixierend, suchend",
            "Mund: weich, sinnlich, lebendig",
            "Kiefer: entspannt, kann sich anspannen",
            "Haltung: offen, hingezogen, pr\u00e4sent",
          ],
        breathingRhythm: [
            "eher tief im Brust- und Bauchbereich",
            "atmet mit, wenn Verbindung entsteht",
            "Atem stockt bei Distanz oder Ablehnung",
            "reguliert \u00fcber N\u00e4he, Ber\u00fchrung und Tiefe",
          ],
        movementInitiation: [
            "geht aktiv auf Menschen zu, die sie mag",
            "sucht k\u00f6rperliche N\u00e4he und Kontakt",
            "bewegt sich mit Anziehung und Pr\u00e4senz",
            "orientiert sich an intensiven Bindungen",
            "schafft N\u00e4he, Vertrautheit und Loyalit\u00e4t",
          ],
        contactStyle: [
            "herzlich, pers\u00f6nlich und einnehmend",
            "sucht Tiefe, Resonanz und Hingabe",
            "zeigt Interesse und Exklusivit\u00e4t",
            "kann klammern oder eifers\u00fcchtig werden",
            "zieht sich zur\u00fcck, wenn sie oder er sich abgelehnt f\u00fchlt",
          ],
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Oberbauch / Innerer Raum", location: "oberhalb des Nabels", need: [
              "Selbstkontakt",
              "Ruhe",
              "eigene Grenze",
            ] },
          microInstructions: [
            "Nicht verschmelzen.",
            "N\u00e4he halten.",
            "Bei dir bleiben.",
            "Sanft atmen.",
            "F\u00fcr sich bleiben.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Herz\u00f6ffnung, Mitgef\u00fchl, Treue, Sinn f\u00fcr N\u00e4he und emotionale Tiefe.",
      },
      mediaGroups: [
        {
          title: "SX2 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 2", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 2", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 2", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 2 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 2", youtubeVideoId: "jptqNJU0mrw" },
          { title: "Typ 2 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 2", youtubeVideoId: "TSHh5uRJio0" },
          { title: "Type 2 \u00b7 English Theme Song", category: "Song 2", scope: "Type 2", youtubeVideoId: "F2QH_O1BAOE" },
          { title: "SX2 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SX2", youtubeVideoId: "JCoUFccskX0" },
          { title: "SX2 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SX2", youtubeVideoId: "aTFl_G-AE3E" },
          { title: "SX2 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SX2", youtubeVideoId: "bw3-nPmE3OA" },
          { title: "SX2 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SX2", youtubeVideoId: "hdhOJVA9uM4" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Hyoscyamus niger",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-2/sx2/heilmittel/sx2-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus dem Schwarzen Bilsenkraut, einer Nachtschattenpflanze mit stark berauschender, das Verhalten enthemmender Wirkung. In ihrer Signatur liegt ein verzweifeltes Ringen um Aufmerksamkeit und Liebe: Eifersucht, das Bed\u00fcrfnis, gesehen zu werden, und die Angst, verlassen oder \u00fcbergangen zu werden. Genau das pr\u00e4gt das Mittelbild der Zwei \u2013 das starke Verlangen nach N\u00e4he, Anerkennung und Gebrauchtwerden. Das Bed\u00fcrfnis, geliebt zu werden, wird so gro\u00df, dass die eigene Mitte dar\u00fcber aus dem Blick ger\u00e4t.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als emotionale Abh\u00e4ngigkeit, Besitzanspruch und Angst vor Zur\u00fcckweisung zeigt. Es hilft, das anklammernde Werben um Zuwendung zu beruhigen und die Liebe wieder auf einen festen inneren Grund zu stellen. So darf N\u00e4he entstehen, ohne sich zu verlieren oder st\u00e4ndig um Best\u00e4tigung k\u00e4mpfen zu m\u00fcssen.",
        },
        {
          title: "Natrium chloratum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-2/sx2/heilmittel/sx2-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Fl\u00fcssigkeitshaushalt und L\u00f6sen von altem Kummer",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 8 reguliert den Fl\u00fcssigkeitshaushalt und ist das gro\u00dfe Salz des seelischen Gleichgewichts. Es ordnet, wo zu viel oder zu wenig flie\u00dft \u2013 im K\u00f6rper wie im Gef\u00fchl. Traditionell hilft es, alten Kummer, zur\u00fcckgehaltene Tr\u00e4nen und verschlucktes Leid zu l\u00f6sen. F\u00fcr die Zwei, die sich f\u00fcr andere aufgibt und eigene Bed\u00fcrfnisse \u00fcberh\u00f6rt, bringt es heilsamen Ausgleich. So unterst\u00fctzt es, wieder bei sich selbst aufzutanken, statt sich im Geben zu verlieren.",
          goal: "Auf der Mineralstoff-Ebene unterst\u00fctzt es, emotionale Distanz und Abkapselung aufzul\u00f6sen, damit echter Kontakt zu anderen und zu sich selbst m\u00f6glich wird.",
        },
        {
          title: "Chicory",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-2/sx2/heilmittel/sx2-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "selbstlose Liebe ohne Besitzanspruch",
          text: "Chicory ist die Bachbl\u00fcte f\u00fcr eine besitzergreifende, an Bedingungen gekn\u00fcpfte Form der Liebe. Sie hilft Menschen, die viel geben, dabei aber heimlich Dank, N\u00e4he und Gegenleistung erwarten. Die Bl\u00fcte wandelt anklammernde F\u00fcrsorge in echte, selbstlose Zuwendung. F\u00fcr die Zwei, die sich \u00fcber das Gebrauchtwerden definiert, ist sie eine tiefe Heilbl\u00fcte. So darf Liebe flie\u00dfen, ohne sich selbst zu verlieren oder etwas zur\u00fcckzufordern.",
          goal: "Auf der Seelenebene \u00f6ffnet es den Weg zu selbstloser F\u00fcrsorge: Liebe, die gibt, ohne Gegenliebe zu fordern \u2013 und die sich selbst dabei nicht verliert.",
        },
        {
          title: "Rosenquarz",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-2/sx2/heilmittel/sx2-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Herz\u00f6ffnung, Sanftheit und Selbstliebe",
          text: "Der Rosenquarz ist der zart-rosa Stein des Herzens schlechthin und seit jeher mit Liebe, Sanftheit und Vers\u00f6hnung verbunden. Er \u00f6ffnet das Herz f\u00fcr Mitgef\u00fchl, W\u00e4rme und Vergebung \u2013 und richtet diese liebevolle Haltung ausdr\u00fccklich auch nach innen, auf einen selbst. Traditionell hilft er, alten Kummer und Verletzungen sanft zu l\u00f6sen und wieder Vertrauen in N\u00e4he zu fassen. F\u00fcr die Zwei, deren Liebe fast immer nach au\u00dfen str\u00f6mt, ist er eine stille Erinnerung an die eigene Bed\u00fcrftigkeit. Er n\u00e4hrt die Selbstliebe und schenkt die Erlaubnis, auch selbst zu empfangen, ohne sich erst n\u00fctzlich machen zu m\u00fcssen.",
          goal: "Als energetisches Werkzeug \u00f6ffnet er das Herz f\u00fcr liebevolle Selbstannahme \u2013 F\u00fcrsorge, die aus dem Vollen kommt statt aus Bed\u00fcrftigkeit.",
        },
        {
          title: "Rosenbl\u00fctentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-2/sx2/heilmittel/sx2-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "herz\u00f6ffnend und harmonisierend",
          text: "Der Rosenbl\u00fctentee gilt als herz\u00f6ffnendes, harmonisierendes Getr\u00e4nk voller Sanftheit. Die Rose steht seit jeher f\u00fcr Liebe, Zartheit und seelische W\u00e4rme. Traditionell wird sie genutzt, um das Gem\u00fct zu bes\u00e4nftigen und das Herz zu erweichen. F\u00fcr die Zwei, deren Liebe stets nach au\u00dfen flie\u00dft, ist sie eine zarte Einladung zur Selbstf\u00fcrsorge. So erinnert ein Rosenbl\u00fctentee daran, die eigene W\u00e4rme auch sich selbst zu schenken.",
          goal: "Als pflanzliche Begleiterin \u00f6ffnet sie das Herz sanft: f\u00fcr sich selbst, f\u00fcr andere, f\u00fcr das Geben ohne Berechnung.",
        },
        {
          title: "Pulsatilla pratensis",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/pulsatilla-pratensis.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Die K\u00fcchenschelle oder Wiesen-Anemone ist eine zarte Pflanze, die sich weich mit dem Wind wiegt und sich stets dem Licht zuwendet. Diese Signatur zeigt ein sanftes, anschmiegsames, leicht weinerliches Wesen, das nach Trost, W\u00e4rme und Zuwendung verlangt. Das spiegelt die Wunde der Zwei: eine tiefe Sehnsucht nach Zugeh\u00f6rigkeit und die Angst, nur durch Gebrauchtwerden liebenswert zu sein. Wie die Bl\u00fcte dem Wind folgt, sucht die Seele Halt im Gegen\u00fcber.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anklammern, Verlassenheitsangst und das Verleugnen eigener Bed\u00fcrfnisse zeigt. Es n\u00e4hrt sanft die F\u00e4higkeit, sich selbst Trost und Halt zu geben, statt ihn nur im Au\u00dfen zu suchen. So darf aus bed\u00fcrftiger Anh\u00e4nglichkeit eine warme, freie Verbundenheit werden.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Hyoscyamus niger",
          schuessler: "Natrium chloratum",
          bachbluete: "Chicory",
          edelstein: "Rosenquarz",
          tee: "Rosenbl\u00fctentee",
        },
        homoeopathieThema: "Gewonnen aus dem Schwarzen Bilsenkraut, einer Nachtschattenpflanze mit stark berauschender, das Verhalten enthemmender Wirkung. In ihrer Signatur liegt ein verzweifeltes Ringen um Aufmerksamkeit und Liebe: Eifersucht, das Bed\u00fcrfnis, gesehen zu werden, und die Angst, verlassen oder \u00fcbergangen zu werden. Genau das pr\u00e4gt das Mittelbild der Zwei \u2013 das starke Verlangen nach N\u00e4he, Anerkennung und Gebrauchtwerden. Das Bed\u00fcrfnis, geliebt zu werden, wird so gro\u00df, dass die eigene Mitte dar\u00fcber aus dem Blick ger\u00e4t.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als emotionale Abh\u00e4ngigkeit, Besitzanspruch und Angst vor Zur\u00fcckweisung zeigt. Es hilft, das anklammernde Werben um Zuwendung zu beruhigen und die Liebe wieder auf einen festen inneren Grund zu stellen. So darf N\u00e4he entstehen, ohne sich zu verlieren oder st\u00e4ndig um Best\u00e4tigung k\u00e4mpfen zu m\u00fcssen.",
        wundeThema: "Die K\u00fcchenschelle oder Wiesen-Anemone ist eine zarte Pflanze, die sich weich mit dem Wind wiegt und sich stets dem Licht zuwendet. Diese Signatur zeigt ein sanftes, anschmiegsames, leicht weinerliches Wesen, das nach Trost, W\u00e4rme und Zuwendung verlangt. Das spiegelt die Wunde der Zwei: eine tiefe Sehnsucht nach Zugeh\u00f6rigkeit und die Angst, nur durch Gebrauchtwerden liebenswert zu sein. Wie die Bl\u00fcte dem Wind folgt, sucht die Seele Halt im Gegen\u00fcber.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anklammern, Verlassenheitsangst und das Verleugnen eigener Bed\u00fcrfnisse zeigt. Es n\u00e4hrt sanft die F\u00e4higkeit, sich selbst Trost und Halt zu geben, statt ihn nur im Au\u00dfen zu suchen. So darf aus bed\u00fcrftiger Anh\u00e4nglichkeit eine warme, freie Verbundenheit werden.",
        wunde: {
          homoeopathie: "Pulsatilla pratensis",
          schuessler: "Natrium chloratum",
          bachbluete: "Chicory",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 2). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      woundBehindPassion: {
        passion: "Stolz \u2013 bei der SX2 zeigt er sich als der intensive Wunsch, f\u00fcr eine bestimmte Person einzigartig und unersetzbar zu sein. Sie gibt sich voll hin \u2014 und erwartet daf\u00fcr, als die Wichtigste erlebt zu werden.",
        belief: "\u201eIch bin nur liebenswert, wenn ich f\u00fcr diesen einen Menschen unentbehrlich bin.\u201c Darunter: \u201eWenn ich nicht die Bedeutsamste bin, werde ich ersetzt.\u201c",
        wound: "Die Wunde der verbotenen Bed\u00fcrftigkeit: das tiefe Gef\u00fchl, dass eigene Bed\u00fcrfnisse in einer intensiven Bindung keinen Platz haben \u2014 dass nur Geben und Hingabe die Verbindung sichert.",
        compensation: "Sich vollst\u00e4ndig in ausgew\u00e4hlte Beziehungen hineingeben, die andere auf emotionaler Ebene ber\u00fchren, anziehen und halten. Die Energie wird in intensive Bindung investiert \u2014 nicht in die eigene innere Sicherheit.",
        sufferingCycle: "Die SX2 gibt sich tief hin und erwartet daf\u00fcr einzigartige Bedeutung. Wenn diese nicht klar gespiegelt wird, w\u00e4chst die Intensit\u00e4t \u2014 mehr Geben, mehr K\u00fcmmern, mehr Anziehung. Die eigene Ersch\u00f6pfung bleibt unsichtbar, die Abh\u00e4ngigkeit von Resonanz w\u00e4chst.",
        healingDirection: "Erkennen, dass echte Verbundenheit keine Unentbehrlichkeit braucht. Wenn die SX2 N\u00e4he auch ohne vollst\u00e4ndige Hingabe erlaubt, entsteht Liebe aus innerer Freiheit statt aus Bed\u00fcrftigkeit.",
        remedy: "Wundenmittel: Pulsatilla pratensis \u00b7 Leidenschaftsmittel: Hyoscyamus niger \u00b7 Sch\u00fc\u00dfler-Salz: Natrium chloratum \u00b7 Bach-Bl\u00fcte: Chicory. Anwendung nur in therapeutischer R\u00fccksprache.",
        needsReview: [
          "\u201eHinter der Leidenschaft \u2013 die neun Wunden des Enneagramms\u201c, Kapitel Typ 2 (S. 59\u201392). SX2-Nuancen (intensive Bindung, Normaltyp) erg\u00e4nzt. Bitte gegen Originalseiten pr\u00fcfen.",
        ],
      },
      needsReview: [
      ],
    };


const sx3 = {
      code: "SX3",
      title: "Die sexuelle Drei",
      animal: "Pfau",
      status: "curated_draft",
      pages: "Typ 3 Grundkarte + SX3 Seiten 1-5",
      organismQuestion: "Wie kann ich erfolgreich sein und dabei meinen Wert beweisen?",
      subtypeQuestion:
        "Wie kann ich anziehend und lebendig sein, ohne mich f\u00fcr Liebe, Resonanz oder Bewunderung inszenieren zu m\u00fcssen?",
      integrationSentence: "Ich bin genug, auch wenn ich nicht performe \u2013 meine echte Ausstrahlung zieht an.",
      coreSentence:
        "Wenn du dich nicht inszenieren musst, entsteht echte Ausstrahlung aus innerem Wert.",
      visualPages: type3VisualPages("SX3", "Sexuelle Drei"),
      sourceCoverage: type3SourceCoverage("SX3"),
      contentModules: type3ContentModules("SX3"),
      lifeTheme: [
        "Verbindung suchen und durch Ausstrahlung beeindrucken wollen.",
        "Besonders wahrgenommen werden wollen und sich leicht an Idealen und Bildern ausrichten.",
        "Echte Resonanz suchen und dabei leicht das authentische Selbst verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und Herzraum / Brustmitte.",
      essence: {
        title: "Integrationspotenzial: Wirkung & Anziehung",
        sentence: "Ich bin genug, auch wenn ich nicht performe \u2013 meine echte Ausstrahlung zieht an.",
        qualities: ["starke Ausstrahlung", "emotionale Pr\u00e4senz", "magnetische Anziehung", "kreative Selbstdarstellung", "Hingabe ohne Kontrolle"],
      },
      integrationPath: [
        "Sich nicht \u00fcber Wirkung oder Bewunderung definieren.",
        "Echt sein d\u00fcrfen, ohne st\u00e4ndig ein ideales Bild aufrechtzuerhalten.",
        "N\u00e4he durch Wahrhaftigkeit, Selbstkontakt und emotionale Offenheit finden.",
      ],
      unconsciousStrategy: [
        "\u00dcber Ausstrahlung und Wirkung Anerkennung bekommen wollen.",
        "Sich stark an W\u00fcnschen und Idealen anderer anpassen, um begehrt und bewundert zu werden.",
        "Sich \u00fcber Attraktivit\u00e4t, Aufmerksamkeit und Erfolg stabilisieren, auch wenn Echtheit verloren geht.",
      ],
      turningPoint: [
        "Erkennen, dass Ausstrahlung und Bewunderung keine echte innere N\u00e4he erzeugen.",
        "Sich erlauben, hinter Rollen und Bildern sichtbar zu werden.",
        "Energie wird ehrlicher; echte Pr\u00e4senz ersetzt Druck, beeindrucken zu m\u00fcssen.",
      ],
      integratedState: [
        "Sich offen und strahlend zeigen, ohne eine Rolle aufrechterhalten zu m\u00fcssen.",
        "In echtem Kontakt mit dem inneren Wesen bleiben.",
        "Ausstrahlung entsteht aus Wahrhaftigkeit statt aus Inszenierung.",
      ],
      tensionFields: [
        "Ausstrahlung \u2192 Echtheit",
        "Attraktivit\u00e4t \u2192 Selbstwert",
        "Begehren \u2192 Authentizit\u00e4t",
        "Wirkung \u2192 innerer Kontakt",
        "Glanz \u2192 Verletzlichkeit",
        "Verf\u00fchrung \u2192 Wahrhaftigkeit",
        "Bewunderung \u2192 Selbstannahme",
        "Rolle \u2192 lebendige Pr\u00e4senz",
        "Perfektion des Bildes \u2192 Wahrheit des Herzens",
      ],
      archetypalEssence: "magnetische Anziehungskraft",
      integrativePotential: "Wirkung & Anziehung",
      nervousSystemRegulation: [
        "Spannung gezielt steuern",
        "Erregung bewusst kanalisieren",
        "zwischen N\u00e4he und R\u00fcckzug pendeln",
        "Perfektionismus und \u00dcberanpassung l\u00f6sen",
        "sich selbst sp\u00fcren",
        "Bed\u00fcrfnisse ehrlich wahrnehmen",
        "innere Leere f\u00fcllen",
        "im K\u00f6rper ankommen",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Wunsch, wertvoll zu sein und etwas zu erreichen, und der Angst, nicht genug zu sein oder zu versagen und dadurch abgelehnt zu werden.",
        gazeQuality: [
            "durchdringend, pr\u00e4sent und fokussiert",
            "pr\u00fcfend: Was bringt es? Was n\u00fctzt es?",
            "leicht herausfordernd, selbstsicher",
            "sucht Wirkung, Einfluss und Vorteile",
            "beobachtet genau, bevor sie oder er handelt",
          ],
        microTension: [
            "Stirn: fokussiert, leicht angespannt",
            "Augen: kontrollierend, durchdringend",
            "Mund: fest, selbstbewusst, leicht spitz",
            "Kiefer: leicht angespannt, pr\u00e4sent",
            "Haltung: aufrecht, dynamisch, pr\u00e4sent",
          ],
        contactStyle: [
            "charmant, \u00fcberzeugend und angepasst",
            "spricht l\u00f6sungs- und nutzenorientiert",
            "zeigt Kompetenz und \u00dcberblick",
            "h\u00f6rt zu, um Informationen f\u00fcr sich zu nutzen",
            "kommuniziert \u00fcberzeugend und zielgerichtet",
          ],
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen",
              "Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          microInstructions: [
            "Nicht gl\u00e4nzen.",
            "N\u00e4he nicht spielen.",
            "K\u00f6rper sp\u00fcren.",
            "Wahr bleiben.",
            "Echtheit zulassen.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Kompetenz, Ziele, Wert schaffen, Anerkennung und Freude an Ergebnissen.",
      },
      mediaGroups: [
        {
          title: "SX3 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 3", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 3", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 3", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 3 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 3", youtubeVideoId: "U7WEq5E07Wk" },
          { title: "Typ 3 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 3", youtubeVideoId: "W6PZISZQCRY" },
          { title: "Type 3 \u00b7 English Theme Song", category: "Song 2", scope: "Type 3", youtubeVideoId: "NLlrJFYTRwU" },
          { title: "SX3 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SX3", youtubeVideoId: "-ByqceZszZw" },
          { title: "SX3 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SX3", youtubeVideoId: "vuRc8ToDW6A" },
          { title: "SX3 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SX3", youtubeVideoId: "SK724DhEJns" },
          { title: "SX3 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SX3", youtubeVideoId: "wJ2hlh5U1HQ" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Tarentula hispanica",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-3/sx3/heilmittel/sx3-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus der spanischen Tarantel \u2013 einem ruhelosen Tier, dessen Biss der \u00dcberlieferung nach zu fiebrigem, getriebenem Tanzen zwingt. Diese Signatur durchzieht das Mittelbild: eine rastlose, hektische Betriebsamkeit, das Bed\u00fcrfnis zu beeindrucken, geschickte Wendigkeit und ein st\u00e4ndiges Unter-Strom-Stehen. Genau das pr\u00e4gt die Drei \u2013 der starke Antrieb nach Wirkung, Erfolg und Anerkennung. Wie die Tarantel kann sie kaum innehalten, immer in Bewegung, immer auf der B\u00fchne.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Leistungsdruck, Getriebenheit und blo\u00dfes Funktionieren zeigt. Es hilft, das innere Tempo zu drosseln und den Wert nicht l\u00e4nger an Wirkung und Applaus zu kn\u00fcpfen. So darf die Drei zur Ruhe kommen und sp\u00fcren, dass sie auch ohne st\u00e4ndiges Gl\u00e4nzen gen\u00fcgt.",
        },
        {
          title: "Ferrum phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-3/sx3/heilmittel/sx3-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Energie, Widerstandskraft und Initiative",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 3 ist das Salz der Energie, der Sauerstoffaufnahme und der ersten Abwehrkraft. Es st\u00e4rkt Widerstandskraft, Initiative und gesunde Tatkraft. Auf seelischer Ebene steht es f\u00fcr Mut und Belastbarkeit, ohne sich zu verausgaben. F\u00fcr die Drei, die sich \u00fcber Leistung definiert und Versagen f\u00fcrchtet, ist es ein kr\u00e4ftigender Begleiter. So unterst\u00fctzt es echte, getragene Energie statt rastloses Funktionieren unter Hochdruck.",
          goal: "Auf der Mineralstoff-Ebene st\u00e4rkt es den Antrieb und die Ausdauer, ohne in \u00dcberleistung und rastlose Aktivit\u00e4t zu kippen \u2013 Energie wird kanalisiert statt verbrannt.",
        },
        {
          title: "Vervain",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-3/sx3/heilmittel/sx3-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "gelassene Begeisterung statt \u00dcbereifer",
          text: "Vervain ist die Bachbl\u00fcte f\u00fcr \u00dcbereifer, Begeisterung bis zur Ersch\u00f6pfung und st\u00e4ndiges inneres Anspannen. Sie hilft Menschen, die mit voller Kraft f\u00fcr ihre Ziele brennen und kaum abschalten k\u00f6nnen. Die Bl\u00fcte mildert die \u00dcberspannung und bringt Gelassenheit in den Einsatz. F\u00fcr die Drei, die unter Hochdruck funktioniert und Stillstand f\u00fcrchtet, ist sie eine wohltuende Entlastung. So darf Begeisterung bleiben, aber ruhiger und ma\u00dfvoller flie\u00dfen.",
          goal: "Auf der Seelenebene hilft es, die innere Flamme zu m\u00e4\u00dfigen: \u00dcberzeugungen d\u00fcrfen stark sein, ohne andere zu \u00fcberrennen \u2013 Inspiration statt Druck.",
        },
        {
          title: "Tigerauge",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-3/sx3/heilmittel/sx3-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Selbstvertrauen, Mut und Klarheit unter Druck",
          text: "Das Tigerauge ist ein goldbraun schimmernder Quarz mit seidigem Lichtspiel und gilt als Stein des Mutes, der Erdung und der klaren Sicht. Es st\u00e4rkt Selbstvertrauen und Willenskraft und hilft, auch unter Druck Ruhe, \u00dcberblick und Standfestigkeit zu bewahren. Traditionell wird es als Schutzstein getragen, der Nervosit\u00e4t, Selbstzweifel und Stress mindert. F\u00fcr die Drei, deren Wert sich an Leistung und Erfolg zu bemessen scheint, lenkt es den Blick nach innen. So wird erfahrbar, dass echter Wert aus innerer Festigkeit und Klarheit erw\u00e4chst \u2013 nicht allein aus dem n\u00e4chsten Ziel.",
          goal: "Als energetisches Werkzeug verbindet er Zielstrebigkeit mit innerer Ruhe \u2013 Erfolg darf entstehen, ohne dass das Selbst dahinter verschwindet.",
        },
        {
          title: "Rosmarintee",
          subtitle: "Tee",
          image: "assets/knowledge/type-3/sx3/heilmittel/sx3-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "belebend und kr\u00e4ftigend",
          text: "Rosmarin ist ein belebendes, kr\u00e4ftigendes Kraut, das Kreislauf und Geist anregt. Sein w\u00fcrziger Duft weckt, f\u00f6rdert die Konzentration und gibt frische Tatkraft. Traditionell wird er bei M\u00fcdigkeit, Ersch\u00f6pfung und Antriebsschw\u00e4che eingesetzt. F\u00fcr die Drei, die unter Hochdruck l\u00e4uft und sich leicht verausgabt, gibt er klare, getragene Energie. So unterst\u00fctzt ein Rosmarintee belebende Kraft, die aus Frische statt aus Druck kommt.",
          goal: "Als pflanzliche Begleiterin bringt sie Klarheit und Energie in Situationen, wo Kontratyp-Ersch\u00f6pfung und Verschmelzung den eigenen Wunsch verschleiern.",
        },
        {
          title: "Lycopodium clavatum",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/lycopodium-clavatum.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus den Sporen des B\u00e4rlapps \u2013 einer unscheinbaren Pflanze, deren Sporen erst unter Reibung ihre verborgene Kraft entfalten. Diese Signatur trifft den Kern: ein nach au\u00dfen souver\u00e4nes Auftreten, das innen einen tiefen Mangel an Selbstvertrauen und gro\u00dfe Versagensangst verbirgt. Das spiegelt die Wunde der Drei \u2013 die \u00dcberzeugung, nur durch Leistung wertvoll zu sein, w\u00e4hrend verdeckt der Selbstzweifel nagt. Hinter der starken Fassade liegt die Angst, entlarvt zu werden.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Leistungsdruck, verborgene Unsicherheit und die Angst vor dem Versagen zeigt. Es st\u00e4rkt ein echtes Selbstvertrauen, das nicht mehr auf Beweise angewiesen ist. So darf der Wert von innen wachsen, unabh\u00e4ngig von Erfolg und fremdem Urteil.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Tarentula hispanica",
          schuessler: "Ferrum phosphoricum",
          bachbluete: "Vervain",
          edelstein: "Tigerauge",
          tee: "Rosmarintee",
        },
        homoeopathieThema: "Gewonnen aus der spanischen Tarantel \u2013 einem ruhelosen Tier, dessen Biss der \u00dcberlieferung nach zu fiebrigem, getriebenem Tanzen zwingt. Diese Signatur durchzieht das Mittelbild: eine rastlose, hektische Betriebsamkeit, das Bed\u00fcrfnis zu beeindrucken, geschickte Wendigkeit und ein st\u00e4ndiges Unter-Strom-Stehen. Genau das pr\u00e4gt die Drei \u2013 der starke Antrieb nach Wirkung, Erfolg und Anerkennung. Wie die Tarantel kann sie kaum innehalten, immer in Bewegung, immer auf der B\u00fchne.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Leistungsdruck, Getriebenheit und blo\u00dfes Funktionieren zeigt. Es hilft, das innere Tempo zu drosseln und den Wert nicht l\u00e4nger an Wirkung und Applaus zu kn\u00fcpfen. So darf die Drei zur Ruhe kommen und sp\u00fcren, dass sie auch ohne st\u00e4ndiges Gl\u00e4nzen gen\u00fcgt.",
        wundeThema: "Bereitet aus den Sporen des B\u00e4rlapps \u2013 einer unscheinbaren Pflanze, deren Sporen erst unter Reibung ihre verborgene Kraft entfalten. Diese Signatur trifft den Kern: ein nach au\u00dfen souver\u00e4nes Auftreten, das innen einen tiefen Mangel an Selbstvertrauen und gro\u00dfe Versagensangst verbirgt. Das spiegelt die Wunde der Drei \u2013 die \u00dcberzeugung, nur durch Leistung wertvoll zu sein, w\u00e4hrend verdeckt der Selbstzweifel nagt. Hinter der starken Fassade liegt die Angst, entlarvt zu werden.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Leistungsdruck, verborgene Unsicherheit und die Angst vor dem Versagen zeigt. Es st\u00e4rkt ein echtes Selbstvertrauen, das nicht mehr auf Beweise angewiesen ist. So darf der Wert von innen wachsen, unabh\u00e4ngig von Erfolg und fremdem Urteil.",
        wunde: {
          homoeopathie: "Lycopodium clavatum",
          schuessler: "Ferrum phosphoricum",
          bachbluete: "Walnut",
        },
        needsReview: [
          "Wunden-Ebene aus \u201eHinter der Leidenschaft\u201c (Kapitel Typ 3). Bitte gegen die Originalseiten pr\u00fcfen.",
        ],
      },
      woundBehindPassion: {
        passion: "T\u00e4uschung \u2013 bei der SX3 zeigt sie sich als die enge Verkn\u00fcpfung von pers\u00f6nlicher Ausstrahlung und Selbstwert: Das Ich formt sich nach dem, was im direkten Kontakt Bewunderung, Begehren und Resonanz erzeugt.",
        belief: "\u201eMein Wert zeigt sich darin, wie sehr ich auf andere wirke und begehrt werde.\u201c Darunter: \u201eWenn ich nicht strahle und fasziniere, bin ich nichts Besonderes.\u201c",
        wound: "Die Wunde der Wertlosigkeit: das tiefe Gef\u00fchl, dass das eigene Sein \u2014 ohne pers\u00f6nliche Ausstrahlung, Bewunderung und Resonanz im direkten Kontakt \u2014 nicht genug ist.",
        compensation: "Die eigene Pr\u00e4senz sorgf\u00e4ltig gestalten, charismatisch wirken, Bewunderung und Begehren erzeugen \u2014 im direkten, pers\u00f6nlichen Kontakt. Das Selbstbild wird an dem ausgerichtet, was im Gegen\u00fcber Faszination ausl\u00f6st.",
        sufferingCycle: "Die SX3 erzeugt Bewunderung und Resonanz \u2014 doch kaum ist diese da, meldet sich die Frage: \u201eSehe ich wirklich etwas Besonderes, oder spielte ich nur eine Rolle?\u201c Das Bed\u00fcrfnis nach Best\u00e4tigung w\u00e4chst, die Inszenierung nimmt zu.",
        healingDirection: "Erkennen, dass pers\u00f6nliche Ausstrahlung und Begehrtwerden keinen dauerhaften inneren Wert erzeugen. Wenn die SX3 echte Pr\u00e4senz ohne Inszenierung zul\u00e4sst, entsteht Verbindung aus innerem Wert statt aus Wirkung.",
        remedy: "Wundenmittel: Lycopodium clavatum \u00b7 Leidenschaftsmittel: Tarentula hispanica \u00b7 Sch\u00fc\u00dfler-Salz: Ferrum phosphoricum \u00b7 Bach-Bl\u00fcte: Walnut. Anwendung nur in therapeutischer R\u00fccksprache.",
        needsReview: [
          "\u201eHinter der Leidenschaft \u2013 die neun Wunden des Enneagramms\u201c, Kapitel Typ 3 (S. 93\u2013117). SX3-Nuancen (Normaltyp, pers\u00f6nliche Ausstrahlung) erg\u00e4nzt. Bitte gegen Originalseiten pr\u00fcfen.",
        ],
      },
      needsReview: [
        "Typ-3-Tafeln sind sichtbar verortet; SX3 ist als mehrsprachig vorbereiteter Wissensblock angelegt.",
      ],
    };


const sx4 = {
      code: "SX4",
      title: "Die sexuelle Vier",
      animal: "Chihuahua",
      status: "needs_review",
      pages: "Typ 4 Grundkarte + SX4 Seiten 1-5",
      organismQuestion: "Wer bin ich wirklich und was macht mich einzigartig?",
      subtypeQuestion:
        "Wie kann ich Intensit\u00e4t und Echtheit leben, ohne Drama, Konkurrenz oder emotionale Zuspitzung zu brauchen?",
      integrationSentence: "Ich bin einzigartig \u2013 und genau darin liegt meine Verbindung zur Welt.",
      coreSentence:
        "Wenn du Intensit\u00e4t nicht erzwingen musst, wird Tiefe zu Liebe ohne Drama.",
      visualPages: type4VisualPages("SX4", "Sexuelle Vier"),
      lifeTheme: [
        "Intensive Verbindung und tiefe emotionale Resonanz suchen.",
        "Sehnsucht, Leidenschaft und Verletzung besonders intensiv erleben.",
        "Echte N\u00e4he und Verschmelzung w\u00fcnschen und dabei leicht innere Ruhe verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Unterbauch / Beckenbereich.",
      essence: {
        title: "Integrationspotenzial: Tiefe & Einzigartigkeit",
        sentence: "Ich bin einzigartig \u2013 und genau darin liegt meine Verbindung zur Welt.",
        qualities: ["tiefe emotionale Intensit\u00e4t", "authentischer Selbstausdruck", "kreative Originalit\u00e4t", "magnetische Anziehungskraft", "sinnliche Wahrnehmung"],
      },
      integrationPath: [
        "N\u00e4he zulassen, ohne Drama oder emotionale Zuspitzung zu brauchen.",
        "Gef\u00fchle nicht verst\u00e4rken m\u00fcssen, um Verbindung oder Tiefe zu erleben.",
        "Erf\u00fcllung durch innere Ruhe, Selbstannahme und echte Verbundenheit finden.",
      ],
      unconsciousStrategy: [
        "\u00dcber Intensit\u00e4t und starke Gef\u00fchle Verbindung sichern wollen.",
        "Sehnsucht, Verletzung und Spannung sichtbar machen und darin Resonanz suchen.",
        "Dich \u00fcber Leidenschaft, Ausdruck und emotionale Zuspitzung stabilisieren, auch wenn Ruhe verloren geht.",
      ],
      turningPoint: [
        "Erkennen, dass emotionale Intensit\u00e4t und Drama Sehnsucht nicht wirklich erf\u00fcllen.",
        "Gef\u00fchle bewusster wahrnehmen, ohne sie st\u00e4ndig zu steigern.",
        "Echte N\u00e4he entsteht durch innere Reife statt durch emotionale Zuspitzung.",
      ],
      integratedState: [
        "Intensive Gef\u00fchle erleben, ohne sich in Drama oder Sehnsucht zu verlieren.",
        "Offen f\u00fcr N\u00e4he bleiben, ohne emotionale Zuspitzung zu brauchen.",
        "Leidenschaft verbindet sich mit innerem Frieden und Reife.",
      ],
      tensionFields: [
        "Leidenschaft \u2192 Selbstannahme",
        "Konkurrenz \u2192 Verbundenheit",
        "Intensit\u00e4t \u2192 innerer Frieden",
        "Begehren \u2192 W\u00fcrde",
        "Schmerzenssteigerung \u2192 emotionale Befreiung",
        "Drama \u2192 Gleichmut",
        "Sehnsucht \u2192 Gegenw\u00e4rtigkeit",
        "Vergleich \u2192 Eigenwert",
        "Verletztheit \u2192 Herzensreife",
      ],
      archetypalEssence: "emotionale Tiefe",
      integrativePotential: "Tiefe & Einzigartigkeit",
      nervousSystemRegulation: [
        "Gef\u00fchle bewusst zulassen",
        "kreativen Ausdruck kultivieren",
        "zwischen N\u00e4he und R\u00fcckzug pendeln",
        "Selbstkritik sanft transformieren",
        "sich selbst wahrnehmen",
        "innere Leere annehmen",
        "Perfektionismus und Idealismus l\u00f6sen",
        "im K\u00f6rper ankommen",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Wunsch, unverwechselbar und authentisch zu sein, und der Angst, \u00fcbersehen, bewertet oder nicht verstanden zu werden.",
        gazeQuality: [
            "intensiv, durchdringend und magnetisch",
            "sucht Tiefe, Bedeutung und Resonanz",
            "vergleicht sich mit anderen",
            "sp\u00fcrt Neid im Hintergrund",
            "beobachtet genau und sucht Wirkung",
          ],
        microTension: [
            "Stirn: leicht angespannt, konzentriert",
            "Augen: intensiv, nach innen gerichtet",
            "Mund: leicht angespannt, sinnlich",
            "Kiefer: locker, aber wachsam",
            "Haltung: geladen, pr\u00e4sent, bereit",
          ],
        breathingRhythm: [
            "atmet flacher bei Konkurrenz oder Kritik",
            "Atem stockt, wenn nicht verstanden",
            "atmet schneller bei Inspiration",
            "Atem vertieft sich bei echter Verbindung",
          ],
        movementInitiation: [
            "bewegt sich impulsiv und aus Ausdruck",
            "handelt schnell, wenn sie oder er begeistert ist",
            "nutzt Gestik und Mimik stark",
            "zieht sich zur\u00fcck, wenn verletzt oder abgelehnt",
            "liebt extremes Engagement als lebendige Beteiligung",
          ],
        contactStyle: [
            "intensiv, direkt und leidenschaftlich",
            "spricht tiefgr\u00fcndig, emotional und bildhaft",
            "will verstanden werden, nicht nur geh\u00f6rt",
            "testet Grenzen in N\u00e4he und Distanz",
            "zieht sich zur\u00fcck, wenn sie oder er sich nicht echt gesehen f\u00fchlt",
          ],
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Unterbauch / Beckenbereich", location: "unterhalb des Nabels", need: [
              "Sicherheit",
              "Schutz",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Sehnsucht beruhigen.",
            "Nicht hineinsteigern.",
            "N\u00e4he lassen.",
            "K\u00f6rper halten.",
            "Weich bleiben.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Authentizit\u00e4t, Kreativit\u00e4t, Tiefe Verbindung, Selbstachtung, Inspiration und Vision.",
      },
      contentModules: [
        {
          title: "Typ 4 \u00b7 Grundkarte",
          intro: "Die Typ-4-Grundkarte bildet die gemeinsame Grundlage aller Vierer-Subtypen. Im Zentrum steht die Sehnsucht nach Echtheit, Tiefe und einer unverwechselbaren Identit\u00e4t. Der K\u00f6rper organisiert sich auf Gef\u00fchl, Bedeutung und das, was ber\u00fchrt.",
          entries: [
            { label: "Grundthema", text: "Einzigartigkeit & Tiefe. Typ 4 richtet Aufmerksamkeit auf Authentizit\u00e4t, Gef\u00fchlstiefe und die Frage nach der eigenen, unverwechselbaren Identit\u00e4t." },
            { label: "Organismusfrage", text: "Wer bin ich wirklich und was macht mich einzigartig?" },
            { label: "Innerer Konflikt", text: "Sehnsucht und Mangel stehen gegeneinander: das Gef\u00fchl, etwas Wesentliches zu vermissen, gegen\u00fcber dem Wunsch, ganz und echt zu sein." },
            { label: "K\u00f6rperorganisation", text: "Nach innen gewandt, fein gestimmt und emotional durchl\u00e4ssig. Brust und Herzraum aktiv, die Energie pendelt zwischen R\u00fcckzug und intensivem Ausdruck." },
            { label: "Blickqualit\u00e4t", text: "Tief, suchend und introspektiv. Der Blick fragt nach dem, was ber\u00fchrt und bedeutet, und sucht das Echte hinter der Oberfl\u00e4che." },
            { label: "Mikrospannung", text: "Feine Spannung um Augen und Mund, melancholischer Grundton, innere Bewegtheit, die sich in der Mimik spiegelt." },
            { label: "Atemrhythmus", text: "Ungleichm\u00e4\u00dfig und gef\u00fchlsgebunden. Vertieft sich bei Ber\u00fchrung, stockt bei Verletzung oder Sehnsucht." },
            { label: "Bewegungsinitiierung", text: "Stimmungsabh\u00e4ngig und ausdrucksstark. Bewegt sich aus dem Gef\u00fchl heraus, zieht sich bei \u00dcberforderung zur\u00fcck." },
            { label: "Kontaktstil", text: "Tief, pers\u00f6nlich und wahrhaftig. Sucht echte Begegnung und Verst\u00e4ndnis, reagiert empfindlich auf Oberfl\u00e4chlichkeit." },
            { label: "Spannungsverteilung", text: "Hauptspannung im Herzraum und um die Augen. Nebenaktivit\u00e4t in Kehle und Solarplexus." },
            { label: "Integrationsweg", text: "Vom Mangel zur F\u00fclle. Von der Sehnsucht zur Gegenwart. Selbstannahme statt st\u00e4ndiger Suche nach dem Fehlenden." },
            { label: "Archetypisches Tier", text: "Schwan: Anmut, Sch\u00f6nheit, Tiefe, Sensibilit\u00e4t, W\u00fcrde und Transformation." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SX4 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 4", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 4", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 4", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 4 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 4", youtubeVideoId: "Qa76bXczQGI" },
          { title: "Typ 4 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 4", youtubeVideoId: "Y-ScnvbdFFQ" },
          { title: "Type 4 \u00b7 English Theme Song", category: "Song 2", scope: "Type 4", youtubeVideoId: "VK3YTCdZc10" },
          { title: "SX4 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SX4", youtubeVideoId: "qWQCEAN5TJA" },
          { title: "SX4 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SX4", youtubeVideoId: "DYC5o5-XQYE" },
          { title: "SX4 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SX4", youtubeVideoId: "12JIwPNwZN4" },
          { title: "SX4 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SX4", youtubeVideoId: "TQTr-T5yGDs" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Ignatia amara",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-4/sx4/heilmittel/sx4-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus der Bohne des Ignatiusbaums \u2013 einem Samen mit paradoxer, widerspr\u00fcchlicher Wirkung, der seit jeher mit Kummer und entt\u00e4uschter Liebe verbunden ist. Diese Signatur pr\u00e4gt das Mittelbild: feine Empfindsamkeit, wechselnde, gegens\u00e4tzliche Stimmungen, Seufzen und ein Hang zur Idealisierung. Genau das lebt in der Vier \u2013 das Bed\u00fcrfnis, sich selbst treu zu sein und verstanden zu werden, getragen von tiefer Sehnsucht nach Authentizit\u00e4t und Bedeutung. Das Gef\u00fchl schwingt zwischen H\u00f6hen und Tiefen, immer auf der Suche nach dem Echten.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich emotionale Intensit\u00e4t, innerer R\u00fcckzug und tiefe Sehnsucht zeigen. Es hilft, das Auf und Ab der Gef\u00fchle zu mildern, ohne die Tiefe zu verlieren. So darf die Vier in ihrer Empfindsamkeit ruhen, statt sich in ihr zu verlieren.",
        },
        {
          title: "Kalium phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-4/sx4/heilmittel/sx4-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Nervenkraft bei Ersch\u00f6pfung, seelische St\u00e4rke",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 5 ist das gro\u00dfe Nerven- und Energiesalz. Es st\u00e4rkt bei seelischer und k\u00f6rperlicher Ersch\u00f6pfung, n\u00e4hrt die Nervenkraft und gibt innere Festigkeit. Traditionell hilft es bei Niedergeschlagenheit, Gr\u00fcbeln und Antriebsschw\u00e4che. F\u00fcr die Vier, die sich in Sehnsucht, Schwermut und dem Gef\u00fchl des Andersseins verlieren kann, schenkt es Stabilit\u00e4t. So unterst\u00fctzt es einen ruhigen, getragenen Boden unter wechselnden Gef\u00fchlen.",
          goal: "Auf der Mineralstoff-Ebene wirkt es ausgleichend auf das Nervensystem, wenn innerer Schmerz, Ersch\u00f6pfung und emotionale \u00dcberflutung die Lebendigkeit d\u00e4mpfen.",
        },
        {
          title: "Sweet Chestnut",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-4/sx4/heilmittel/sx4-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Hoffnung und Halt in tiefer Not",
          text: "Sweet Chestnut ist die Bachbl\u00fcte f\u00fcr tiefste seelische Not und das Gef\u00fchl \u00e4u\u00dferster Verlassenheit. Sie ist f\u00fcr Momente, in denen alles dunkel und ausweglos erscheint. Die Bl\u00fcte bringt Hoffnung und das Vertrauen, dass auch im tiefsten Tal ein Licht entsteht. F\u00fcr die Vier, die sich in Schwermut und dem Gef\u00fchl des Nicht-Dazugeh\u00f6rens verlieren kann, ist sie ein Trost. So darf aus tiefer Verzweiflung wieder Halt und Zuversicht erwachsen.",
          goal: "Auf der Seelenebene \u00f6ffnet es in der dunkelsten Stunde einen neuen Weg: aus dem Tunnel des Schmerzes zur\u00fcck ins Leben, ins Erleben, ins F\u00fchlen.",
        },
        {
          title: "Rhodonit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-4/sx4/heilmittel/sx4-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Heilung emotionaler Wunden und Selbstwert",
          text: "Der Rhodonit ist ein rosa-schwarz gemaserter Stein und gilt als gro\u00dfer Helfer bei seelischen Verletzungen. Das Rosa steht f\u00fcr Liebe und Selbstwert, die schwarzen Einschl\u00fcsse f\u00fcr die F\u00e4higkeit, auch dunkle Gef\u00fchle zu halten und zu wandeln. Er bes\u00e4nftigt alte emotionale Wunden, harmonisiert Stimmungsschwankungen und gibt in inneren St\u00fcrmen Halt. F\u00fcr die Vier, die sich oft anders, fremd und nicht zugeh\u00f6rig f\u00fchlt, ist er ein erdender Anker. So f\u00fchrt er aus Schmerz und Sehnsucht in eine ruhige, liebevolle Annahme des eigenen Wertes und der eigenen Geschichte.",
          goal: "Als energetisches Werkzeug h\u00e4lt er den Raum f\u00fcr Wunden und Sch\u00f6nheit gleichzeitig \u2013 der Schmerz des Einzigartigen darf sich in Mitgef\u00fchl wandeln.",
        },
        {
          title: "Weidenr\u00f6schentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-4/sx4/heilmittel/sx4-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "bes\u00e4nftigend und ausgleichend",
          text: "Das Weidenr\u00f6schen ist ein mildes, ausgleichendes Kraut mit bes\u00e4nftigender Wirkung auf das Gem\u00fct. Es gilt als sanfter Begleiter in Phasen innerer Unruhe und seelischer Wechselb\u00e4der. Traditionell wird es zur Beruhigung und Harmonisierung getrunken. F\u00fcr die Vier, die starke Gef\u00fchle und Sehnsucht durchlebt, schenkt es einen ruhigen Boden. So hilft ein Weidenr\u00f6schentee, in den Wogen der Gef\u00fchle einen stillen Ausgleich zu finden.",
          goal: "Als pflanzliche Begleiterin weitet sie den inneren Raum \u2013 aus Zerstreuung und Vermeidung in sanfte, erdende Gegenw\u00e4rtigkeit.",
        },
        {
          title: "Ignatia amara",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/ignatia-amara.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Auch auf der Wunden-Ebene wirkt die Ignatiusbohne \u2013 das gro\u00dfe hom\u00f6opathische Mittel f\u00fcr nicht verarbeitete Trauer. Seine Signatur ist der konservierte Schmerz: ein Verlust, der innerlich festgehalten und nie ganz losgelassen wurde, mit verschluckten Tr\u00e4nen und stillem Kummer. Das ist die Wunde der Trennung der Vier \u2013 die Erfahrung eines Schmerzes, der nicht vollst\u00e4ndig ausgedr\u00fcckt werden konnte. Die Seele bewahrt das Verlorene, statt es zu betrauern und ziehen zu lassen.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als zur\u00fcckgehaltene Trauer, innere Sehnsucht und konservierter Schmerz zeigt. Es hilft, festgehaltenen Kummer behutsam zu l\u00f6sen und Gef\u00fchltes wirklich abflie\u00dfen zu lassen. So darf aus bewahrtem Schmerz eine vers\u00f6hnte, lebendige Tiefe werden.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Ignatia amara",
          schuessler: "Kalium phosphoricum",
          bachbluete: "Sweet Chestnut",
          edelstein: "Rhodonit",
          tee: "Weidenr\u00f6schentee",
        },
        homoeopathieThema: "Gewonnen aus der Bohne des Ignatiusbaums \u2013 einem Samen mit paradoxer, widerspr\u00fcchlicher Wirkung, der seit jeher mit Kummer und entt\u00e4uschter Liebe verbunden ist. Diese Signatur pr\u00e4gt das Mittelbild: feine Empfindsamkeit, wechselnde, gegens\u00e4tzliche Stimmungen, Seufzen und ein Hang zur Idealisierung. Genau das lebt in der Vier \u2013 das Bed\u00fcrfnis, sich selbst treu zu sein und verstanden zu werden, getragen von tiefer Sehnsucht nach Authentizit\u00e4t und Bedeutung. Das Gef\u00fchl schwingt zwischen H\u00f6hen und Tiefen, immer auf der Suche nach dem Echten.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich emotionale Intensit\u00e4t, innerer R\u00fcckzug und tiefe Sehnsucht zeigen. Es hilft, das Auf und Ab der Gef\u00fchle zu mildern, ohne die Tiefe zu verlieren. So darf die Vier in ihrer Empfindsamkeit ruhen, statt sich in ihr zu verlieren.",
        wundeThema: "Auch auf der Wunden-Ebene wirkt die Ignatiusbohne \u2013 das gro\u00dfe hom\u00f6opathische Mittel f\u00fcr nicht verarbeitete Trauer. Seine Signatur ist der konservierte Schmerz: ein Verlust, der innerlich festgehalten und nie ganz losgelassen wurde, mit verschluckten Tr\u00e4nen und stillem Kummer. Das ist die Wunde der Trennung der Vier \u2013 die Erfahrung eines Schmerzes, der nicht vollst\u00e4ndig ausgedr\u00fcckt werden konnte. Die Seele bewahrt das Verlorene, statt es zu betrauern und ziehen zu lassen.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als zur\u00fcckgehaltene Trauer, innere Sehnsucht und konservierter Schmerz zeigt. Es hilft, festgehaltenen Kummer behutsam zu l\u00f6sen und Gef\u00fchltes wirklich abflie\u00dfen zu lassen. So darf aus bewahrtem Schmerz eine vers\u00f6hnte, lebendige Tiefe werden.",
        wunde: {
          homoeopathie: "Ignatia amara",
          schuessler: "Kalium phosphoricum",
          bachbluete: "Willow",
        },
      },
      woundBehindPassion: {
        passion: "Neid \u2013 bei der SX4 zeigt er sich als leidenschaftliche Sehnsucht nach emotionaler Tiefe und authentischer Verbindung: Wenn andere etwas verk\u00f6rpern, das als besonders bedeutsam erlebt wird, entstehen starke Gef\u00fchle \u2014 Sehnsucht, Neid, manchmal auch Konkurrenz.",
        belief: "\u201eIch sehne mich nach echter Tiefe \u2014 und f\u00fchle, dass sie mir fehlt.\u201c Darunter: \u201eMeine Intensit\u00e4t ist mein Wert \u2014 aber auch mein Gef\u00e4ngnis.\u201c",
        wound: "Die Wunde der Trennung: das tiefe Gef\u00fchl, von echter emotionaler Verbindung und Authentizit\u00e4t abgetrennt zu sein \u2014 und diesen Mangel durch immer intensivere Erfahrungen ausgleichen zu m\u00fcssen.",
        compensation: "Gef\u00fchle direkt, stark und sichtbar zeigen \u2014 in der Hoffnung, echte Begegnung und Resonanz zu erzeugen. Die SX4 steigert emotionale Intensit\u00e4t, um das Gef\u00fchl des Mangels zu \u00fcberbr\u00fccken. Drama und Leidenschaft werden manchmal zur Identit\u00e4t.",
        sufferingCycle: "Die SX4 sucht echte, tiefe Begegnung \u2014 und reagiert intensiv, wenn Resonanz ausbleibt oder Verbindung sich unecht anf\u00fchlt. Die Intensit\u00e4t steigt, der Druck auf Beziehungen w\u00e4chst, das Gef\u00fchl des Mangels verst\u00e4rkt sich.",
        healingDirection: "Erkennen, dass emotionale Intensit\u00e4t keine Verbindung erzwingt \u2014 und dass das Wesentliche, nach dem die SX4 sucht, nicht au\u00dfen gefunden werden kann. Wenn Intensit\u00e4t sich in innere Stabilit\u00e4t wandelt, entsteht echte Tiefe ohne Drama.",
        remedy: "Wundenmittel: Ignatia amara \u00b7 Leidenschaftsmittel: Ignatia amara \u00b7 Sch\u00fc\u00dfler-Salz: Kalium phosphoricum \u00b7 Bach-Bl\u00fcte: Willow. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const sx5 = {
      code: "SX5",
      title: "Die sexuelle F\u00fcnf",
      animal: "Igel",
      status: "curated_draft",
      pages: "Typ 5 Grundkarte + SX5 Seiten 1-5",
      visualPages: type5VisualPages("SX5", "Sexuelle F\u00fcnf"),
      organismQuestion: "Wie kann ich verstehen und sicher sein, dass ich kompetent bin?",
      subtypeQuestion:
        "Wie kann ich tiefe Verbindung zulassen, ohne mich in Geheimhaltung, R\u00fcckzug oder innerer Kontrolle zu verlieren?",
      integrationSentence: "Ich darf mich zeigen und verbinden, ohne mich zu verlieren.",
      coreSentence:
        "Wenn du dich nicht nur im Geheimen \u00f6ffnest, wird N\u00e4he tragf\u00e4hig und frei.",
      lifeTheme: [
        "Tiefe Verbindung mit wenigen, ausgew\u00e4hlten Menschen suchen.",
        "Sich nur vorsichtig \u00f6ffnen und die Innenwelt besonders stark sch\u00fctzen.",
        "N\u00e4he und Verstehen suchen und dabei leicht Vertrauen und Offenheit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und Bauch / K\u00f6rpermitte.",
      essence: {
        title: "Integrationspotenzial: Vertrauen & Lebendigkeit",
        sentence: "Ich darf mich zeigen und verbinden, ohne mich zu verlieren.",
        qualities: ["feine Wahrnehmung", "emotionale Tiefe", "intellektuelle Klarheit", "vertrauensvolle Offenheit", "stille St\u00e4rke"],
      },
      integrationPath: [
        "Sich emotional \u00f6ffnen, ohne sich dabei ausgeliefert zu f\u00fchlen.",
        "Nicht alles kontrollieren oder zur\u00fcckhalten m\u00fcssen, um sicher zu sein.",
        "N\u00e4he durch Vertrauen, ehrliche Begegnung und innere Beteiligung finden.",
      ],
      unconsciousStrategy: [
        "N\u00e4he nur sehr kontrolliert zulassen.",
        "Menschen aufmerksam beobachten und die Innenwelt lange verborgen halten.",
        "Sich \u00fcber Vertrauen, R\u00fcckzug und selektive Bindung stabilisieren, auch wenn Offenheit schwerf\u00e4llt.",
      ],
      turningPoint: [
        "Erkennen, dass Sehnsucht und Idealisierung echte N\u00e4he oft verhindern.",
        "Beziehungen realistischer und gleichzeitig offener erleben.",
        "Vertrauen statt R\u00fcckzug und Fantasie als Quelle von Verbundenheit zulassen.",
      ],
      integratedState: [
        "N\u00e4he zulassen, ohne sich in Sehnsucht oder Fantasie zu verlieren.",
        "Mit sich selbst verbunden bleiben und sich f\u00fcr echte Begegnung \u00f6ffnen.",
        "Energie wird warm und tief.",
      ],
      tensionFields: [
        "Sehnsucht \u2192 Wirklichkeit",
        "Verschmelzung \u2192 Eigenst\u00e4ndigkeit",
        "Idealisierung \u2192 Wahrhaftigkeit",
        "R\u00fcckzug \u2192 Hingabe",
        "innere Fantasie \u2192 gelebte N\u00e4he",
        "Distanz \u2192 Vertrauen",
        "Beobachtung \u2192 Teilnahme",
        "emotionale Vorsicht \u2192 Offenheit",
        "Isolation \u2192 lebendige Verbindung",
      ],
      archetypalEssence: "Vertrauensvolle Offenheit",
      integrativePotential: "Vertrauen & Lebendigkeit",
      nervousSystemRegulation: [
        "innere Sicherheit kultivieren",
        "langsame, tiefe Atmung",
        "Grenzen sp\u00fcren und wahren",
        "N\u00e4he dosiert zulassen",
        "emotionale Regulation \u00fcben",
        "Erdung im K\u00f6rper verankern",
        "R\u00fcckzug als Ressource nutzen",
        "Verbindung bewusst gestalten",
      ],
      bodySignature: {
        basicTension: "Zwischen dem Wunsch nach tiefer Verbindung und der Angst, sich zu verletzlich zu zeigen.",
        gazeQuality: [
            "weich, suchend und leicht scheu",
            "forschend, aber selektiv",
            "zugewandt, wenn Vertrauen da ist",
            "beobachtend mit emotionaler Tiefe",
            "nicht so distanziert wie SO5 oder SE5",
          ],
        microTension: [
            "Stirn: leicht angespannt beim Nachdenken",
            "Augen: offen, weich, manchmal fragend",
            "Mund: leicht geschlossen, sensibel",
            "Kiefer: zart angespannt, Schutzhaltung",
            "Haltung: zur\u00fcckhaltend, innerlich wach",
          ],
        breathingRhythm: [
            "Atem flach im Brustbereich",
            "Atem vertieft sich bei N\u00e4he und Vertrauen",
            "atmet langsamer, wenn in Kontakt",
            "Atem stockt bei Unsicherheit",
            "reguliert \u00fcber R\u00fcckzug und Intimit\u00e4t",
          ],
        movementInitiation: [
            "bewegt sich z\u00f6gerlich und bedacht",
            "braucht Sicherheit, um aktiv zu werden",
            "nutzt Pausen zur inneren Sortierung",
            "zieht sich zur\u00fcck, wenn zu viel N\u00e4he entsteht",
            "liebt geistige Tiefe und R\u00fcckzug",
          ],
        contactStyle: [
            "sucht tiefe, echte Verbindung",
            "spricht wenig, aber bedeutungsvoll",
            "h\u00f6rt aufmerksam und mitf\u00fchlend zu",
            "braucht Zeit, um sich zu \u00f6ffnen",
            "kommuniziert feinf\u00fchlig und intuitiv",
          ],
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen / Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Bauch / K\u00f6rpermitte", location: "mittig auf dem Bauchnabel", need: [
              "Sp\u00fcren",
              "Pr\u00e4senz",
              "innere Sicherheit",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Weisheit, Tiefe, selektive Intimit\u00e4t, Vertrauen, R\u00fcckzug und echte Verbindung.",
      },
      contentModules: [
        {
          title: "Typ 5 \u00b7 Grundkarte",
          intro: "Die Typ-5-Grundkarte bildet die gemeinsame Grundlage aller F\u00fcnfer-Subtypen. Im Zentrum stehen Verstehen, Wissen und das Wahren der eigenen Ressourcen. Der K\u00f6rper organisiert sich auf Beobachtung, Distanz und sparsame Energie.",
          entries: [
            { label: "Grundthema", text: "Wissen & Kompetenz. Typ 5 richtet Aufmerksamkeit auf Verstehen, Klarheit und die Frage, wie man kompetent und unabh\u00e4ngig bleibt." },
            { label: "Organismusfrage", text: "Wie kann ich verstehen und sicher sein, dass ich kompetent bin?" },
            { label: "Innerer Konflikt", text: "N\u00e4he und R\u00fcckzug stehen gegeneinander: der Wunsch nach Verbindung gegen\u00fcber der Angst, durch Kontakt ersch\u00f6pft oder vereinnahmt zu werden." },
            { label: "K\u00f6rperorganisation", text: "Zur\u00fcckgenommen, gesammelt und nach innen gerichtet. Energie sparsam gehalten, der Kopfraum aktiv, der K\u00f6rper eher still und kompakt." },
            { label: "Blickqualit\u00e4t", text: "Tief, ruhig und beobachtend. Der Blick wirkt nach innen gerichtet, nimmt genau wahr, ohne sich einzumischen." },
            { label: "Mikrospannung", text: "Feine Spannung in Stirn und Augen, konzentrierte Sammlung, kontrollierte, sparsame Mimik." },
            { label: "Atemrhythmus", text: "Flach und \u00f6konomisch. Vertieft sich beim Nachdenken, stockt bei \u00dcberforderung oder zu viel N\u00e4he." },
            { label: "Bewegungsinitiierung", text: "Sparsam und gezielt. Handelt erst, wenn es notwendig ist, nutzt Pausen zur Beobachtung." },
            { label: "Kontaktstil", text: "Zur\u00fcckhaltend, pr\u00e4zise und tiefgr\u00fcndig. Wenige, aber echte Gespr\u00e4che; braucht Zeit, um sich zu \u00f6ffnen." },
            { label: "Spannungsverteilung", text: "Hauptspannung in Stirn und Augen. Nebenaktivit\u00e4t in Nacken und Brustraum." },
            { label: "Integrationsweg", text: "Vom R\u00fcckzug zur Teilnahme. Vom Horten zum Teilen. Erfahren, dass Energie w\u00e4chst, wenn sie flie\u00dft." },
            { label: "Archetypisches Tier", text: "Eule: Weisheit, Beobachtung, Klarheit, Diskretion, Tiefe und Intuition." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SX5 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 5", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 5", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 5", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 5 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 5", youtubeVideoId: "7Yfn0V6D0e8" },
          { title: "Typ 5 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 5", youtubeVideoId: "-gH--0BuODw" },
          { title: "Type 5 \u00b7 English Theme Song", category: "Song 2", scope: "Type 5", youtubeVideoId: "H-h2eJ7IJTQ" },
          { title: "SX5 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SX5", youtubeVideoId: "bzOuErO0WF0" },
          { title: "SX5 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SX5", youtubeVideoId: "VzDs1icqvac" },
          { title: "SX5 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SX5", youtubeVideoId: "gAlYihN7QCE" },
          { title: "SX5 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SX5", youtubeVideoId: "DlEDoOMyKx8" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Stramonium",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-5/sx5/heilmittel/sx5-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Der Stechapfel ist ein hochgiftiges Nachtschattengew\u00e4chs, das Bilder von Dunkelheit, Bedrohung und Schrecken hervorruft. In seiner Signatur liegt das Bed\u00fcrfnis, sich vor einer als \u00fcberw\u00e4ltigend erlebten Welt zu sch\u00fctzen und Halt im Inneren zu suchen. Das pr\u00e4gt das Mittelbild der F\u00fcnf \u2013 der starke Drang, sich zur\u00fcckzuziehen, um zu verstehen, getragen von der Suche nach Wissen, Unabh\u00e4ngigkeit und innerer Klarheit. Der R\u00fcckzug in den Kopf wird zum sicheren Ort gegen\u00fcber einer bedrohlich wirkenden Au\u00dfenwelt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo mentaler R\u00fcckzug, innere Isolation und \u00dcberforderung auftreten. Es hilft, die Distanz zur Welt zu mildern und sich wieder sicherer im Kontakt zu f\u00fchlen. So darf die F\u00fcnf aus dem Beobachten heraustreten und am Leben teilnehmen, ohne sich bedroht zu f\u00fchlen.",
        },
        {
          title: "Silicea",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-5/sx5/heilmittel/sx5-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "innere Struktur, Standfestigkeit und Selbstvertrauen",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 11 ist das Salz des Bindegewebes, der Struktur und der inneren Standfestigkeit. Es st\u00e4rkt Haut, Haar und N\u00e4gel und gibt dem K\u00f6rper Halt und Form. Auf seelischer Ebene steht es f\u00fcr R\u00fcckgrat, Durchhalteverm\u00f6gen und Selbstvertrauen. F\u00fcr die F\u00fcnf, die sich zum Schutz ihrer Kr\u00e4fte zur\u00fcckzieht, gibt es Halt von innen. So unterst\u00fctzt es, mit eigener Substanz und Festigkeit in Kontakt zu gehen, ohne sich ersch\u00f6pft zu f\u00fchlen.",
          goal: "Auf der Mineralstoff-Ebene st\u00e4rkt es die innere Struktur und das Vertrauen in die eigenen Ressourcen \u2013 weg vom R\u00fcckzug, hin zur gelassenen Pr\u00e4senz.",
        },
        {
          title: "Water Violet",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-5/sx5/heilmittel/sx5-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "aus R\u00fcckzug zu warmer Verbundenheit",
          text: "Water Violet ist die Bachbl\u00fcte f\u00fcr zur\u00fcckgezogene, gern allein bleibende Menschen, die Distanz wahren. Sie hilft jenen, die sich still abkapseln und N\u00e4he als anstrengend empfinden. Die Bl\u00fcte \u00f6ffnet sanft von k\u00fchler Zur\u00fcckhaltung hin zu warmer Verbundenheit. F\u00fcr die F\u00fcnf, die ihre Kr\u00e4fte durch R\u00fcckzug sch\u00fctzt, ist sie eine Br\u00fccke nach au\u00dfen. So darf aus selbst gew\u00e4hlter Isolation wieder lebendige Teilhabe werden, ohne sich \u00fcberfordert zu f\u00fchlen.",
          goal: "Auf der Seelenebene l\u00e4dt es ein, die Sch\u00f6nheit echter Verbindung zu entdecken \u2013 St\u00e4rke, die sich nicht mehr in Distanz versteckt, sondern in warmem Kontakt zeigt.",
        },
        {
          title: "Amazonit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-5/sx5/heilmittel/sx5-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "innere Balance und Mut zur Wahrheit",
          text: "Der Amazonit ist ein t\u00fcrkisgr\u00fcner Feldspat und steht f\u00fcr innere Balance, Gelassenheit und Wahrhaftigkeit. Er beruhigt Nerven und kreisende Gedanken, gleicht seelische Wechselb\u00e4der aus und schenkt einen klaren, ruhigen Kopf. Zugleich gilt er als Stein der ehrlichen Kommunikation: Er gibt Mut, das eigene Erleben auszusprechen, statt es zur\u00fcckzuhalten. F\u00fcr die F\u00fcnf, die sich zum Schutz ihrer Kr\u00e4fte zur\u00fcckzieht, baut er eine sanfte Br\u00fccke nach au\u00dfen. So hilft er, aus der inneren Beobachterhaltung in echten, lebendigen Kontakt zu treten \u2013 ohne Angst, sich dabei zu verlieren.",
          goal: "Als energetisches Werkzeug st\u00e4rkt er die innere Stimme und das Vertrauen in die eigene Wahrheit \u2013 Wissen darf nach au\u00dfen treten, ohne die Scheu vor der Welt.",
        },
        {
          title: "Haferkrauttee",
          subtitle: "Tee",
          image: "assets/knowledge/type-5/sx5/heilmittel/sx5-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "nervenst\u00e4rkend und aufbauend",
          text: "Haferkraut ist ein klassisches Nervenst\u00e4rkungs- und Aufbaukraut, besonders bei Ersch\u00f6pfung. Es n\u00e4hrt und kr\u00e4ftigt die Nerven sanft und gibt neue innere Substanz. Traditionell wird es bei nerv\u00f6ser Schw\u00e4che und Auszehrung eingesetzt. F\u00fcr die F\u00fcnf, die ihre Kr\u00e4fte als knapp erlebt und sich schnell ausgesaugt f\u00fchlt, baut es auf. So hilft ein Haferkrauttee, die eigenen Reserven aufzuf\u00fcllen und gest\u00e4rkt in Kontakt zu gehen.",
          goal: "Als pflanzliche Begleiterin n\u00e4hrt sie das Nervensystem auf dem Weg aus dem Hypervigilanz-Modus in ein ruhiges, verl\u00e4ssliches Inneres.",
        },
        {
          title: "Silicea",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/silicea.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus reiner Kieselerde, dem Quarz \u2013 einem Mineral, das Struktur, Festigkeit und Standkraft verk\u00f6rpert und den Pflanzen ihren Halm aufrichtet. Gerade sein Fehlen pr\u00e4gt das Mittelbild: ein Mangel an innerem Mark, an Kraft und Durchhalteverm\u00f6gen, verbunden mit Nachgiebigkeit und wenig Selbstvertrauen. Das ist die Wunde des Mangels der F\u00fcnf \u2013 das tiefe Gef\u00fchl, nicht genug Kraft, Energie und Substanz zu haben, um dem Leben gewachsen zu sein. Es fehlt das innere R\u00fcckgrat, das Sicherheit von innen g\u00e4be.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als R\u00fcckzug, Ersch\u00f6pfungsangst und das Sch\u00fctzen knapper Ressourcen zeigt. Es baut innere Substanz und Standfestigkeit auf, sodass Kraft nicht l\u00e4nger \u00e4ngstlich geh\u00fctet werden muss. So darf die F\u00fcnf aus einem Gef\u00fchl der F\u00fclle heraus geben und in Beziehung gehen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Stramonium",
          schuessler: "Silicea",
          bachbluete: "Water Violet",
          edelstein: "Amazonit",
          tee: "Haferkrauttee",
        },
        homoeopathieThema: "Der Stechapfel ist ein hochgiftiges Nachtschattengew\u00e4chs, das Bilder von Dunkelheit, Bedrohung und Schrecken hervorruft. In seiner Signatur liegt das Bed\u00fcrfnis, sich vor einer als \u00fcberw\u00e4ltigend erlebten Welt zu sch\u00fctzen und Halt im Inneren zu suchen. Das pr\u00e4gt das Mittelbild der F\u00fcnf \u2013 der starke Drang, sich zur\u00fcckzuziehen, um zu verstehen, getragen von der Suche nach Wissen, Unabh\u00e4ngigkeit und innerer Klarheit. Der R\u00fcckzug in den Kopf wird zum sicheren Ort gegen\u00fcber einer bedrohlich wirkenden Au\u00dfenwelt.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo mentaler R\u00fcckzug, innere Isolation und \u00dcberforderung auftreten. Es hilft, die Distanz zur Welt zu mildern und sich wieder sicherer im Kontakt zu f\u00fchlen. So darf die F\u00fcnf aus dem Beobachten heraustreten und am Leben teilnehmen, ohne sich bedroht zu f\u00fchlen.",
        wundeThema: "Bereitet aus reiner Kieselerde, dem Quarz \u2013 einem Mineral, das Struktur, Festigkeit und Standkraft verk\u00f6rpert und den Pflanzen ihren Halm aufrichtet. Gerade sein Fehlen pr\u00e4gt das Mittelbild: ein Mangel an innerem Mark, an Kraft und Durchhalteverm\u00f6gen, verbunden mit Nachgiebigkeit und wenig Selbstvertrauen. Das ist die Wunde des Mangels der F\u00fcnf \u2013 das tiefe Gef\u00fchl, nicht genug Kraft, Energie und Substanz zu haben, um dem Leben gewachsen zu sein. Es fehlt das innere R\u00fcckgrat, das Sicherheit von innen g\u00e4be.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als R\u00fcckzug, Ersch\u00f6pfungsangst und das Sch\u00fctzen knapper Ressourcen zeigt. Es baut innere Substanz und Standfestigkeit auf, sodass Kraft nicht l\u00e4nger \u00e4ngstlich geh\u00fctet werden muss. So darf die F\u00fcnf aus einem Gef\u00fchl der F\u00fclle heraus geben und in Beziehung gehen.",
        wunde: {
          homoeopathie: "Silicea",
          schuessler: "Silicea",
          bachbluete: "Water Violet",
        },
      },
      woundBehindPassion: {
        passion: "Geiz \u2013 nicht in erster Linie materiell, sondern ein Geiz mit Energie, Zeit, Aufmerksamkeit und innerer Beteiligung. Der F\u00fcnfer h\u00e4lt zur\u00fcck, weil er bef\u00fcrchtet, mehr zu verlieren, als er geben kann. Bei der SX5 zeigt sich dies als kontrollierte Scheu: Tiefe Verbindung wird leidenschaftlich ersehnt \u2014 und gleichzeitig auf Abstand gehalten.",
        belief: "\u201eWenn ich mich wirklich zeige, verliere ich mich \u2014 oder werde verletzt.\u201c Darunter: echte N\u00e4he kostet mehr, als man hat; intensive Verbindung ist ein Risiko, das sorgf\u00e4ltig gepr\u00fcft werden muss.",
        wound: "Die Wunde des Mangels: das tiefe Gef\u00fchl \u201eIch habe nicht genug\u201c \u2014 nicht genug innere Substanz, um in N\u00e4he bestehen zu k\u00f6nnen, ohne sich selbst zu verlieren. Die Sehnsucht nach Tiefe ist real; die Angst, darin zu verschwinden, ebenso.",
        compensation: "Selektive, kontrollierte N\u00e4he: Wenige, ausgew\u00e4hlte Verbindungen zulassen \u2014 aber die Innenwelt lange sch\u00fctzen, bevor echtes Vertrauen entsteht. Tiefe Beziehungen werden idealisiert und zugleich auf sicherer Distanz gehalten.",
        sufferingCycle: "Die Sehnsucht erzeugt Ann\u00e4herung. Die Ann\u00e4herung erzeugt Angst vor Aufl\u00f6sung. Die Angst erzeugt R\u00fcckzug. Der R\u00fcckzug best\u00e4tigt die Sehnsucht. Und der Kreislauf beginnt erneut.",
        healingDirection: "Die kontrollierte Scheu loslassen: sich zeigen, auch wenn noch nicht alles sicher ist, und erfahren, dass N\u00e4he nicht aufl\u00f6st, sondern tr\u00e4gt. Aus scheuer Sehnsucht wird gelebte, geteilte Verbindung.",
        remedy: "Wundenmittel: Silicea \u00b7 Leidenschaftsmittel: Stramonium \u00b7 Sch\u00fc\u00dfler-Salz: Silicea \u00b7 Bach-Bl\u00fcte: Water Violet. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const sx6 = {
      code: "SX6",
      title: "Die sexuelle Sechs",
      animal: "Wolf",
      status: "curated_draft",
      pages: "Typ 6 Grundkarte + SX6 Seiten 1-5",
      visualPages: type6VisualPages("SX6", "Sexuelle Sechs"),
      organismQuestion: "Wie kann ich sicher sein, dass ich nicht bedroht bin und Unterst\u00fctzung habe?",
      subtypeQuestion:
        "Wie kann ich mutig und klar sein, ohne Angst durch Kampf, H\u00e4rte oder Misstrauen zu kompensieren?",
      integrationSentence: "Ich w\u00e4hle Vertrauen statt Angst und Verbindung statt Kontrolle.",
      coreSentence:
        "Wenn du nicht k\u00e4mpfen musst, um sicher zu sein, entsteht Mut und Vertrauen.",
      lifeTheme: [
        "Intensive Verbindung, Schutz und absolute Verl\u00e4sslichkeit suchen.",
        "Stark und unabh\u00e4ngig wirken wollen und dabei oft gegen innere Angst und Unsicherheit k\u00e4mpfen.",
        "N\u00e4he und Vertrauen wollen und dabei leicht Ruhe und Offenheit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Oberschenkel.",
      essence: {
        title: "Integrationspotenzial: Mut & bedingungsloser Schutz",
        sentence: "Ich w\u00e4hle Vertrauen statt Angst und Verbindung statt Kontrolle.",
        qualities: ["intensiv wachsam", "mutig", "loyal", "schutzbereit", "kraftvoll und ruhig zugleich"],
      },
      integrationPath: [
        "N\u00e4he zulassen, ohne sich st\u00e4ndig sch\u00fctzen oder kontrollieren zu m\u00fcssen.",
        "Nicht stark oder unangreifbar wirken m\u00fcssen, um sicher zu sein.",
        "Vertrauen durch Offenheit, innere Ruhe und echte Verletzlichkeit finden.",
      ],
      unconsciousStrategy: [
        "Sicherheit \u00fcber St\u00e4rke, Kontrolle und intensive Bindung herstellen.",
        "N\u00e4he und Vertrauen st\u00e4ndig pr\u00fcfen und empfindlich auf Unsicherheit oder Distanz reagieren.",
        "Sich \u00fcber Wachsamkeit, Loyalit\u00e4t und emotionale Kontrolle stabilisieren, auch wenn innere Anspannung bleibt.",
      ],
      turningPoint: [
        "Erkennen, dass Kampf und Gegenangriff die Verletzlichkeit nur verdecken.",
        "Angst bewusst wahrnehmen, ohne sie bek\u00e4mpfen zu m\u00fcssen.",
        "Echte St\u00e4rke entsteht durch Vertrauen statt durch permanente Spannung.",
      ],
      integratedState: [
        "Kraft bewusst nutzen, ohne st\u00e4ndig k\u00e4mpfen oder sich beweisen zu m\u00fcssen.",
        "Offen f\u00fcr Vertrauen und echte Verletzlichkeit bleiben.",
        "Energie wird stark und ruhig zugleich.",
      ],
      tensionFields: [
        "Gegenangriff \u2192 Vertrauen",
        "St\u00e4rke \u2192 Verletzlichkeit",
        "Kontrolle \u2192 Hingabe",
        "Kampf \u2192 innerer Frieden",
        "Provokation \u2192 Offenheit",
        "Mutbeweis \u2192 Selbstannahme",
        "Spannung \u2192 Entspannung",
        "Rebellion \u2192 Vertrauen ins Leben",
        "H\u00e4rte \u2192 Herzenskontakt",
      ],
      archetypalEssence: "Der intensive Besch\u00fctzer",
      integrativePotential: "Mut & bedingungsloser Schutz",
      bodySignature: {
        basicTension: "Zwischen Angst und Mut, R\u00fcckzug und Angriff, Sicherheit und intensiver Bindung.",
        gazeQuality: [
            "durchdringend, intensiv und misstrauisch",
            "wolfsblick: sieht tief und pr\u00fcfend",
            "sucht die Schwachstelle, bevor Vertrauen entsteht",
            "gleichzeitig anziehend und abweisend",
            "immer bereit, zu k\u00e4mpfen oder zu fliehen",
          ],
        microTension: [
            "Stirn: angespannt, fokussiert, kontrollierend",
            "Augen: intensiv, verengt, durchdringend",
            "Mund: fest, oft leicht zusammengepresst",
            "Kiefer: ausgepr\u00e4gt und stark angespannt",
            "Haltung: kampfbereit, stolz, angespannt",
          ],
        breathingRhythm: [
            "atmet tief und kraftvoll in den Brustbereich",
            "Atem stockt bei Bedrohung oder Zur\u00fcckweisung",
            "atmet schneller bei Kampfbereitschaft",
            "Atem vertieft sich, wenn Leidenschaft aktiv ist",
            "seufzt selten, lieber Aktion als Nachgeben",
          ],
        movementInitiation: [
            "bewegt sich zielstrebig und entschlossen",
            "reagiert schnell, wenn Gefahr sp\u00fcrbar ist",
            "geht auf andere zu, wenn Interesse geweckt ist",
            "zieht sich explosiv zur\u00fcck, wenn verletzt",
            "braucht Herausforderung, um sich lebendig und stark zu f\u00fchlen",
          ],
        contactStyle: [
            "sucht intensive, echte Verbindungen",
            "spricht direkt, leidenschaftlich und fordernd",
            "testet Loyalit\u00e4t durch N\u00e4he und Konfrontation",
            "bringt Gef\u00fchl stark und ungefiltert ein",
            "kommuniziert mit Unterton und Spannung",
          ],
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Oberschenkel", location: "mittig auf dem Oberschenkel", need: [
              "Halt",
              "Vertrauen",
              "Stabilit\u00e4t",
              "Sicherheit",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Mut, Entschlossenheit, Loyalit\u00e4t, Schutzinstinkt, Leidenschaft und strategische Intelligenz.",
      },
      nervousSystemRegulation: [
        "Angst wahrnehmen, ohne sie zu bek\u00e4mpfen",
        "Kampfimpulse bemerken statt sofort zu handeln",
        "Anspannung bewusst l\u00f6sen",
        "den Atem tief und ruhig f\u00fchren",
        "Sicherheit von innen statt aus St\u00e4rke suchen",
        "Verletzlichkeit zulassen",
        "Erdung \u00fcber die Beine finden",
        "Vertrauen statt Gegenangriff wagen",
      ],
      contentModules: [
        {
          title: "Typ 6 \u00b7 Grundkarte",
          intro: "Die Typ-6-Grundkarte bildet die gemeinsame Grundlage aller Sechser-Subtypen. Im Zentrum stehen Sicherheit, Vertrauen und Wachsamkeit. Der K\u00f6rper organisiert sich auf Aufmerksamkeit, Absicherung und das fr\u00fche Erkennen von Gefahr.",
          entries: [
            { label: "Grundthema", text: "Sicherheit & Vertrauen. Typ 6 richtet Aufmerksamkeit auf Verl\u00e4sslichkeit, m\u00f6gliche Risiken und die Frage, wem und was man trauen kann." },
            { label: "Organismusfrage", text: "Wie kann ich sicher sein, dass ich nicht bedroht bin und Unterst\u00fctzung habe?" },
            { label: "Innerer Konflikt", text: "Vertrauen und Misstrauen stehen gegeneinander: der Wunsch nach Halt gegen\u00fcber dem st\u00e4ndigen Zweifel und der Suche nach Gefahr." },
            { label: "K\u00f6rperorganisation", text: "Wachsam, aufmerksam und reaktionsbereit. Eine Grundspannung von Bereitschaft, der Blick scannt die Umgebung, die Energie h\u00e4lt sich gefasst." },
            { label: "Blickqualit\u00e4t", text: "Wachsam, pr\u00fcfend und suchend. Sieht Details und potenzielle Risiken, achtet auf Stimmungen und Signale." },
            { label: "Mikrospannung", text: "Spannung in Stirn und Augen, sorgenvolle Wachheit, schnelle, leicht angespannte Reaktion der Mimik." },
            { label: "Atemrhythmus", text: "Eher flach und unregelm\u00e4\u00dfig. Stockt bei Unsicherheit, beschleunigt bei Anspannung, braucht bewusste Atempausen." },
            { label: "Bewegungsinitiierung", text: "Vorsichtig und pr\u00fcfend. Beobachtet erst, dann handelt, braucht Sicherheit, bevor sie aktiv wird." },
            { label: "Kontaktstil", text: "Loyal, pr\u00fcfend und verbindlich. Sucht Klarheit und Verl\u00e4sslichkeit, braucht Zeit, um Vertrauen zu fassen." },
            { label: "Spannungsverteilung", text: "Hauptspannung in Stirn, Augen und Nacken. Nebenaktivit\u00e4t in Schultern und Solarplexus." },
            { label: "Integrationsweg", text: "Vom Zweifel zum Vertrauen. Von der Absicherung zur inneren Sicherheit. Mut statt Kontrolle." },
            { label: "Archetypisches Tier", text: "Erdm\u00e4nnchen: Wachsamkeit, Gemeinschaft, Schutz, Vorsicht, Loyalit\u00e4t und Zusammenhalt." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SX6 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 6", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 6", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 6", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 6 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 6", youtubeVideoId: "x16gtlhjxCs" },
          { title: "Typ 6 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 6", youtubeVideoId: "f72ns-IXMrc" },
          { title: "Type 6 \u00b7 English Theme Song", category: "Song 2", scope: "Type 6", youtubeVideoId: "LJdN12yDBwE" },
          { title: "SX6 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SX6", youtubeVideoId: "XEAzDNSmVjg" },
          { title: "SX6 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SX6", youtubeVideoId: "IHDIM7tK4Fs" },
          { title: "SX6 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SX6", youtubeVideoId: "QqRezX3O6VA" },
          { title: "SX6 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SX6", youtubeVideoId: "tuEDKLgBCSI" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Opium",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-6/sx6/heilmittel/sx6-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Gewonnen aus dem Schlafmohn \u2013 einem Stoff, der Schmerz, Angst und Wahrnehmung bet\u00e4ubt und in dumpfe Ruhe h\u00fcllt. Diese Signatur zeigt ein Wesen, das nach Sicherheit und Geborgenheit verlangt und Gefahr lieber ausblendet, als sie zu durchleben. Das pr\u00e4gt die Leidenschaft der Sechs \u2013 der starke Wunsch nach Schutz und die Vermeidung von Bedrohung. Wo das Mittel bet\u00e4ubt, sucht die Seele Sicherheit, indem sie das Beunruhigende abd\u00e4mpft.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo \u00fcberm\u00e4\u00dfige Angst, innere Anspannung, Sorgen und dauerhafte Wachsamkeit auftreten. Es hilft, die festgehaltene Schreckspannung zu l\u00f6sen und das Nervensystem zu beruhigen. So darf an die Stelle st\u00e4ndiger Alarmbereitschaft ein Gef\u00fchl von Geborgenheit treten.",
        },
        {
          title: "Magnesium phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-6/sx6/heilmittel/sx6-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Entspannung und L\u00f6sen von Anspannung",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 7, die \u201ehei\u00dfe Sieben\u201c, ist das gro\u00dfe Salz der Entspannung und Nervenruhe. Es l\u00f6st Kr\u00e4mpfe, Anspannung und nerv\u00f6se Unruhe und beruhigt das \u00fcberreizte System. Auf seelischer Ebene steht es f\u00fcr Loslassen, Gelassenheit und das Nachlassen innerer Anspannung. F\u00fcr die Sechs, die in Wachsamkeit, Zweifel und Angst lebt, ist es ein sanfter Beruhiger. So unterst\u00fctzt es, die st\u00e4ndige innere Alarmbereitschaft loszulassen und Vertrauen zu fassen.",
          goal: "Auf der Mineralstoff-Ebene l\u00f6st es muskul\u00e4re und nerv\u00f6se Verkrampfungen, die entstehen, wenn Sicherheit durch Kontrolle und \u00dcberdenken gesucht wird.",
        },
        {
          title: "Aspen",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-6/sx6/heilmittel/sx6-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Vertrauen bei unbestimmter Angst",
          text: "Aspen ist die Bachbl\u00fcte f\u00fcr unbestimmte \u00c4ngste, vages Unbehagen und das Gef\u00fchl drohender Gefahr ohne klaren Grund. Sie hilft bei feiner Schreckhaftigkeit und einer reizbaren inneren Wachsamkeit. Die Bl\u00fcte schenkt Vertrauen und ein Gef\u00fchl innerer Sicherheit. F\u00fcr die Sechs, die mit Zweifel und Angst vor dem Ungewissen lebt, ist sie ein tiefer Beruhiger. So darf an die Stelle diffuser Angst ein stilles Grundvertrauen treten.",
          goal: "Auf der Seelenebene wandelt es vages Unbehagen in innere Verl\u00e4sslichkeit: Vertrauen in die eigene Erdung, statt sich in Projektionen und Worst-Case-Szenarien zu verlieren.",
        },
        {
          title: "H\u00e4matit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-6/sx6/heilmittel/sx6-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Erdung, Schutz und Stabilit\u00e4t",
          text: "Der H\u00e4matit ist ein metallisch gl\u00e4nzender Eisenstein und einer der st\u00e4rksten Erdungs- und Schutzsteine \u00fcberhaupt. Sein hoher Eisengehalt steht sinnbildlich f\u00fcr Festigkeit, Widerstandskraft und ein aufrechtes inneres R\u00fcckgrat. Er gibt Halt, Stabilit\u00e4t und ein k\u00f6rperlich sp\u00fcrbares Gef\u00fchl von Sicherheit und Geborgenheit. F\u00fcr die Sechs, die in Zweifel, Wachsamkeit und der Suche nach verl\u00e4sslichem Halt lebt, ist er ein verl\u00e4sslicher Begleiter. So n\u00e4hrt er Urvertrauen von innen \u2013 eine Sicherheit, die nicht von \u00e4u\u00dferen Garantien abh\u00e4ngt, sondern im eigenen Stand wurzelt.",
          goal: "Als energetisches Werkzeug erdet er in solider Gegenwart \u2013 Verl\u00e4sslichkeit, die nicht aus Angst, sondern aus innerem Halt entsteht.",
        },
        {
          title: "Kamillenbl\u00fctentee",
          subtitle: "Tee",
          image: "assets/knowledge/type-6/sx6/heilmittel/sx6-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "beruhigend und wohltuend",
          text: "Die Kamille ist eines der bew\u00e4hrtesten Heilkr\u00e4uter, beruhigend, entkrampfend und wohltuend. Sie bes\u00e4nftigt Nerven, Magen und Gem\u00fct und gibt ein Gef\u00fchl von Geborgenheit. Traditionell wird sie bei Unruhe, Anspannung und \u00c4ngstlichkeit getrunken. F\u00fcr die Sechs, die mit Wachsamkeit und Zweifel lebt, wirkt sie wie eine warme, sichere Umh\u00fcllung. So hilft ein Kamillenbl\u00fctentee, die innere Alarmbereitschaft zu beruhigen und Vertrauen zu fassen.",
          goal: "Als pflanzliche Begleiterin l\u00f6st sie das, was sich im Leistungsstreben verknotet hat \u2013 Entspannung wird zu einem erlaubten Zustand.",
        },
        {
          title: "Opium",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/opium.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Auch die Wunde der Sechs tr\u00e4gt die Signatur des Schlafmohns: die Bet\u00e4ubung nach einem Schreck. Sein klassisches Bild ist der Zustand, in dem nach einem ersch\u00fctternden Erlebnis die Angst bleibt, das Gef\u00fchl aber wie eingefroren und abgestumpft ist. Das ist die Wunde des verlorenen Vertrauens \u2013 ein Erlebnis, das die innere Sicherheit ersch\u00fcttert hat, gefolgt von Schutz durch R\u00fcckzug und Bet\u00e4ubung. Die Seele sch\u00fctzt sich, indem sie den Schmerz nicht mehr ganz sp\u00fcrt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Angst, dauerhafte Wachsamkeit und das Abschw\u00e4chen schmerzhafter Wahrnehmung zeigt. Es hilft, das Erstarrte wieder ins Flie\u00dfen zu bringen und Vertrauen behutsam zur\u00fcckzugewinnen. So darf die Sechs sich wieder lebendig und sicher f\u00fchlen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Opium",
          schuessler: "Magnesium phosphoricum",
          bachbluete: "Aspen",
          edelstein: "H\u00e4matit",
          tee: "Kamillenbl\u00fctentee",
        },
        homoeopathieThema: "Gewonnen aus dem Schlafmohn \u2013 einem Stoff, der Schmerz, Angst und Wahrnehmung bet\u00e4ubt und in dumpfe Ruhe h\u00fcllt. Diese Signatur zeigt ein Wesen, das nach Sicherheit und Geborgenheit verlangt und Gefahr lieber ausblendet, als sie zu durchleben. Das pr\u00e4gt die Leidenschaft der Sechs \u2013 der starke Wunsch nach Schutz und die Vermeidung von Bedrohung. Wo das Mittel bet\u00e4ubt, sucht die Seele Sicherheit, indem sie das Beunruhigende abd\u00e4mpft.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo \u00fcberm\u00e4\u00dfige Angst, innere Anspannung, Sorgen und dauerhafte Wachsamkeit auftreten. Es hilft, die festgehaltene Schreckspannung zu l\u00f6sen und das Nervensystem zu beruhigen. So darf an die Stelle st\u00e4ndiger Alarmbereitschaft ein Gef\u00fchl von Geborgenheit treten.",
        wundeThema: "Auch die Wunde der Sechs tr\u00e4gt die Signatur des Schlafmohns: die Bet\u00e4ubung nach einem Schreck. Sein klassisches Bild ist der Zustand, in dem nach einem ersch\u00fctternden Erlebnis die Angst bleibt, das Gef\u00fchl aber wie eingefroren und abgestumpft ist. Das ist die Wunde des verlorenen Vertrauens \u2013 ein Erlebnis, das die innere Sicherheit ersch\u00fcttert hat, gefolgt von Schutz durch R\u00fcckzug und Bet\u00e4ubung. Die Seele sch\u00fctzt sich, indem sie den Schmerz nicht mehr ganz sp\u00fcrt.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Angst, dauerhafte Wachsamkeit und das Abschw\u00e4chen schmerzhafter Wahrnehmung zeigt. Es hilft, das Erstarrte wieder ins Flie\u00dfen zu bringen und Vertrauen behutsam zur\u00fcckzugewinnen. So darf die Sechs sich wieder lebendig und sicher f\u00fchlen.",
        wunde: {
          homoeopathie: "Opium",
          schuessler: "Magnesium phosphoricum",
          bachbluete: "Cerato",
        },
      },
      woundBehindPassion: {
        passion: "Angst \u2013 ein Grundmisstrauen gegen\u00fcber dem Leben, das sich als st\u00e4ndige innere Wachsamkeit, Zweifel und Absicherungsbedarf zeigt. Bei der SX6 wird die Angst gegenphobisch nach au\u00dfen gewendet: Statt auszuweichen, geht sie in den Angriff \u2014 St\u00e4rke und Kampf verdecken die innere Unsicherheit.",
        belief: "\u201eDie Welt ist gef\u00e4hrlich, und Angst zu zeigen w\u00e4re t\u00f6dlich.\u201c Darunter: \u201eNur wenn ich stark, mutig und unangreifbar bin, bin ich sicher.\u201c",
        wound: "Die Wunde des verlorenen Vertrauens: das Gef\u00fchl, dass die innere Gewissheit, vom Leben getragen zu sein, br\u00fcchig ist. Bei der SX6 wird diese Wunde hinter Kampfbereitschaft und H\u00e4rte besonders tief vergraben.",
        compensation: "Mut, St\u00e4rke und Konfrontation. Die Angst wird bek\u00e4mpft, indem man ihr entgegengeht; N\u00e4he und Loyalit\u00e4t werden durch Intensit\u00e4t und Tests gepr\u00fcft, statt sich verletzlich zu zeigen.",
        sufferingCycle: "Wer st\u00e4ndig gegen die Angst k\u00e4mpft, h\u00e4lt sie lebendig. Mehr St\u00e4rke schafft mehr Anspannung, die mehr Bedrohung wittert, die mehr Kampfbereitschaft erzeugt \u2013 und der Kreis schlie\u00dft sich.",
        healingDirection: "Erkennen, dass Sicherheit und Vertrauen nicht dasselbe sind. Echte St\u00e4rke entsteht nicht aus dem Kampf gegen die Angst, sondern aus dem Mut, die eigene Verletzlichkeit zuzulassen und zu vertrauen.",
        remedy: "Wundenmittel: Opium \u00b7 Leidenschaftsmittel: Opium \u00b7 Sch\u00fc\u00dfler-Salz: Magnesium phosphoricum \u00b7 Bach-Bl\u00fcte: Cerato. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const sx7 = {
      code: "SX7",
      title: "Die sexuelle Sieben",
      animal: "Schimpanse",
      status: "curated_draft",
      pages: "Typ 7 Grundkarte + SX7 Seiten 1-5",
      visualPages: type7VisualPages("SX7", "Sexuelle Sieben"),
      organismQuestion: "Wie kann ich mehr M\u00f6glichkeiten entdecken und Schwierigkeiten vermeiden?",
      subtypeQuestion:
        "Wie kann ich Intensit\u00e4t und Begeisterung leben, ohne Tiefe, Begrenzung oder Ern\u00fcchterung zu vermeiden?",
      integrationSentence: "Ich tauche tief in das Leben ein und erm\u00f6gliche mir echte Verbundenheit.",
      coreSentence:
        "Wenn du Tiefe zul\u00e4sst, statt das Besondere zu jagen, entsteht echte Erf\u00fcllung.",
      lifeTheme: [
        "Intensive Erfahrung, Inspiration und besondere Verbindung suchen.",
        "Frei, lebendig und grenzenlos f\u00fchlen wollen und dabei Schmerz und Ern\u00fcchterung vermeiden.",
        "Intensit\u00e4t und M\u00f6glichkeit suchen und dabei leicht Ruhe und Gegenwart verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und Unterbauch / Beckenbereich.",
      essence: {
        title: "Integrationspotenzial: Lebensfreude & tiefe, erf\u00fcllende Verbindungen",
        sentence: "Ich tauche tief in das Leben ein und erm\u00f6gliche mir echte Verbundenheit.",
        qualities: ["leidenschaftlich", "magnetisch", "sinnlich", "abenteuerlustig", "tiefe erf\u00fcllende Verbindung"],
      },
      integrationPath: [
        "Auch Stille, Begrenzung und unerf\u00fcllte Gef\u00fchle aushalten.",
        "Nicht st\u00e4ndig Intensit\u00e4t oder neue Erfahrungen suchen m\u00fcssen, um lebendig zu sein.",
        "Erf\u00fcllung durch Pr\u00e4senz, innere Ruhe und echte Verbundenheit finden.",
      ],
      turningPoint: [
        "Erkennen, dass Intensit\u00e4t und Begeisterung innere Leere nicht dauerhaft \u00fcberdecken k\u00f6nnen.",
        "Sich tiefer auf den gegenw\u00e4rtigen Moment einlassen.",
        "Echte Lebendigkeit entsteht durch Verk\u00f6rperung statt durch Flucht in M\u00f6glichkeiten.",
      ],
      integrativePotential: "Lebensfreude & tiefe, erf\u00fcllende Verbindungen",
      integratedState: [
        "Begeisterung und Intensit\u00e4t erleben, ohne sich in Fantasien oder M\u00f6glichkeiten zu verlieren.",
        "Mit dem K\u00f6rper und dem gegenw\u00e4rtigen Moment verbunden bleiben.",
        "Lebendigkeit entsteht aus Tiefe und echter Pr\u00e4senz.",
      ],
      bodySignature: {
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen / Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Unterbauch / Beckenbereich", location: "unterhalb des Nabels", need: [
              "Sicherheit",
              "Schutz",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Lebensfreude, Leidenschaft, Mut, Abenteuer, Kreativit\u00e4t, Ausdruckskraft und Freiheit.",
      },
      unconsciousStrategy: [
        "Sicherheit \u00fcber Intensit\u00e4t, Idealisierung und au\u00dfergew\u00f6hnliche Erfahrungen suchen.",
        "Die n\u00fcchterne Wirklichkeit mit Euphorie und Fantasie \u00fcberstrahlen.",
        "Sich \u00fcber das Jagen des Besonderen stabilisieren, auch wenn Tiefe fehlt.",
      ],
      tensionFields: [
        "Idealisierung \u2192 Wirklichkeit",
        "Euphorie \u2192 Pr\u00e4senz",
        "Jagen des Besonderen \u2192 tiefe Verbundenheit",
        "Fantasie \u2192 Gegenwart",
        "Intensit\u00e4t \u2192 Tiefe",
        "Rausch \u2192 Erf\u00fcllung",
        "Zerstreuung \u2192 Sammlung",
        "Vermeidung \u2192 Annahme",
        "H\u00f6henflug \u2192 Verk\u00f6rperung",
      ],
      archetypalEssence: "Leuchtende Lebensintensit\u00e4t",
      nervousSystemRegulation: [
        "im K\u00f6rper und im Moment ankommen",
        "eine Erfahrung ganz auskosten statt zur n\u00e4chsten zu springen",
        "Ern\u00fcchterung und Stille aushalten",
        "den Atem in den Bauch lenken",
        "Reize und H\u00f6henfl\u00fcge bewusst d\u00e4mpfen",
        "unerf\u00fcllte Gef\u00fchle zulassen",
        "S\u00e4ttigung statt Steigerung wahrnehmen",
        "Tiefe vor Intensit\u00e4t stellen",
      ],
      contentModules: [
        {
          title: "Typ 7 \u00b7 Grundkarte",
          intro: "Die Typ-7-Grundkarte bildet die gemeinsame Grundlage aller Sieben-Subtypen. Im Zentrum steht die Suche nach Freude, M\u00f6glichkeiten und angenehmen Erfahrungen \u2014 und die Vermeidung von Schmerz und Begrenzung. Der K\u00f6rper organisiert sich auf Lebendigkeit, Beweglichkeit und Offenheit nach vorn.",
          entries: [
            { label: "Grundthema", text: "Begeisterung & F\u00fclle. Typ 7 richtet Aufmerksamkeit auf M\u00f6glichkeiten, Genuss und positive Erfahrungen und vermeidet Schmerz, Leere und Begrenzung." },
            { label: "Organismusfrage", text: "Wie kann ich mehr M\u00f6glichkeiten entdecken und Schwierigkeiten vermeiden?" },
            { label: "Innerer Konflikt", text: "Lebensfreude und Vermeidung stehen gegeneinander: der Hunger nach angenehmen Erfahrungen gegen\u00fcber der Flucht vor Schmerz, Stille und Tiefe." },
            { label: "K\u00f6rperorganisation", text: "Locker, beweglich und nach vorn gerichtet. Wenig Grundspannung, aber innerlich rastlos; die Energie ist nach au\u00dfen offen und st\u00e4ndig in Bewegung." },
            { label: "Blickqualit\u00e4t", text: "Wach, beweglich und interessiert, mit einem Glanz des inneren Appetits. Der Blick springt zu Neuem und sucht das n\u00e4chste Angenehme." },
            { label: "Mikrospannung", text: "Lebhafte, spontane Mimik mit h\u00e4ufigem L\u00e4cheln; darunter eine feine nerv\u00f6se Unruhe in Zwinkern, Augenbewegungen und schnellem Wechsel." },
            { label: "Atemrhythmus", text: "Eher schnell und lebhaft, gehoben durch Begeisterung; weicht aus oder stockt, wenn Schweres oder Begrenzendes auftaucht." },
            { label: "Bewegungsinitiierung", text: "Impulsiv, geschmeidig und erz\u00e4hlfreudig. Bewegt sich spielerisch, fast t\u00e4nzerisch, mit vielen Positions- und Themenwechseln." },
            { label: "Kontaktstil", text: "Begeistert, melodisch und einladend. Schafft N\u00e4he \u00fcber Lachen und Gespr\u00e4ch, h\u00e4lt emotionale Tiefe aber eher auf Abstand." },
            { label: "Spannungsverteilung", text: "Wenig Grundspannung, daf\u00fcr rastlose Energie in H\u00e4nden, Beinen und Augen \u2014 Wippen, unruhige H\u00e4nde, suchender Blick." },
            { label: "Integrationsweg", text: "Von der Zerstreuung zur Pr\u00e4senz. Von der Reizsuche zur Tiefe. Genug haben, ohne mehr zu brauchen." },
            { label: "Archetypisches Tier", text: "Affe: Beweglichkeit, geistige Wendigkeit, Spielfreude, Kreativit\u00e4t und Optionsvielfalt. Der Affe steht f\u00fcr den Weg von der zerstreuten M\u00f6glichkeitssuche zur inspirierten, pr\u00e4senten Lebendigkeit." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SX7 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 7", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 7", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 7", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 7 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 7", youtubeVideoId: "hFVfMOqKxY8" },
          { title: "Typ 7 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 7", youtubeVideoId: "Z-a77RvGsaU" },
          { title: "Type 7 \u00b7 English Theme Song", category: "Song 2", scope: "Type 7", youtubeVideoId: "YCAFxBpZFKg" },
          { title: "SX7 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SX7", youtubeVideoId: "ubtVaur_QKc" },
          { title: "SX7 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SX7", youtubeVideoId: "KhvQsODuii8" },
          { title: "SX7 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SX7", youtubeVideoId: "kv4pxB6-GAQ" },
          { title: "SX7 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SX7", youtubeVideoId: "dszfqMXfdz4" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Belladonna",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-7/sx7/heilmittel/sx7-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Die Tollkirsche ist eine Nachtschattenpflanze, deren Bild von Hitze, Fieber, F\u00fclle und gl\u00fchender Erregung gepr\u00e4gt ist. Diese Signatur durchzieht das Mittelbild: eine fiebrige Intensit\u00e4t, ein Drang nach lebhaften, starken Eindr\u00fccken und ein rasches Aufflammen. Genau das lebt in der Sieben \u2013 das Bed\u00fcrfnis, Schmerz zu vermeiden und das Leben in vollen Z\u00fcgen zu erleben, getragen von einem fiebrigen Drang nach mehr M\u00f6glichkeiten, Reizen und Genuss. Wie das Fieber will alles hell, schnell und intensiv sein.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als \u00dcberf\u00fclle, rastlose Getriebenheit und fiebrige Reizsuche zeigt. Es hilft, die \u00fcberschie\u00dfende Erregung zu k\u00fchlen und zur Ruhe zu bringen. So darf die Sieben F\u00fclle genie\u00dfen, ohne von ihr getrieben zu werden.",
        },
        {
          title: "Natrium phosphoricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-7/sx7/heilmittel/sx7-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "S\u00e4ure-Basen-Ausgleich und innere Balance",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 9 ist das Salz des S\u00e4ure-Basen-Haushalts und der inneren Balance. Es hilft, \u00dcbers\u00e4uerung auszugleichen und den Stoffwechsel zu harmonisieren. Auf seelischer Ebene steht es f\u00fcr Ma\u00df, Ausgewogenheit und ein gesundes Genug. F\u00fcr die Sieben, die vor Schmerz in immer neue Reize und M\u00f6glichkeiten flieht, bringt es Ausgleich. So unterst\u00fctzt es, statt rastloser \u00dcbers\u00e4ttigung wieder ein ruhiges inneres Gleichgewicht zu finden.",
          goal: "Auf der Mineralstoff-Ebene unterst\u00fctzt es die innere Balance, wenn \u00dcberstimulation, Zerstreuung und die Flucht vor Schmerz zu Ersch\u00f6pfung und \u00dcbers\u00e4uerung f\u00fchren.",
        },
        {
          title: "Agrimony",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-7/sx7/heilmittel/sx7-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "Echtheit hinter der Heiterkeit",
          text: "Agrimony ist die Bachbl\u00fcte f\u00fcr Menschen, die hinter Heiterkeit und Leichtigkeit ihre wahren Sorgen verbergen. Sie hilft jenen, die innere Unruhe und Schmerz mit guter Miene und Ablenkung \u00fcberdecken. Die Bl\u00fcte f\u00fchrt zu echtem Frieden, der auch das Schwere zulassen kann. F\u00fcr die Sieben, die vor Leid in Aktivit\u00e4t und Vorfreude flieht, ist sie eine ehrliche Heilbl\u00fcte. So darf hinter der fr\u00f6hlichen Fassade die wahre Empfindung gef\u00fchlt und gewandelt werden.",
          goal: "Auf der Seelenebene erlaubt es, den inneren Schmerz anzusehen, statt ihn hinter Leichtigkeit zu verbergen \u2013 echte Freude entsteht, wenn auch das Schwere Platz hat.",
        },
        {
          title: "Rauchquarz",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-7/sx7/heilmittel/sx7-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Erdung und Loslassen von Stress",
          text: "Der Rauchquarz ist eine rauchig-braune Variet\u00e4t des Bergkristalls und gilt als ausgleichender Erdungs- und Anti-Stress-Stein. Er hilft, \u00fcbersch\u00fcssige, nach vorn dr\u00e4ngende Energie zu sammeln, Anspannung abzubauen und Belastendes loszulassen. Traditionell wird er genutzt, um aus Hektik und \u00dcberreizung wieder in Ruhe und Gegenwart zu finden. F\u00fcr die Sieben, die vor Schmerz und Schwere gern nach oben, in Pl\u00e4ne und M\u00f6glichkeiten flieht, ist er ein sanftes Gewicht. So bringt er die sprudelnde Unruhe behutsam zur\u00fcck auf den Boden und macht es leichter, im Hier und Jetzt zu bleiben.",
          goal: "Als energetisches Werkzeug hilft er, loszulassen was nicht mehr n\u00f6tig ist \u2013 Ballast aus Vermeidung, Ablenkung und \u00fcberstimulierter Leichtigkeit darf sich kl\u00e4ren.",
        },
        {
          title: "Pfefferminztee",
          subtitle: "Tee",
          image: "assets/knowledge/type-7/sx7/heilmittel/sx7-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "erfrischend und kl\u00e4rend",
          text: "Die Pfefferminze ist ein erfrischendes, kl\u00e4rendes Kraut, das Geist und Verdauung anregt. Ihr k\u00fchler Duft belebt, schafft Klarheit und l\u00f6st Schweres und Tr\u00e4ges. Traditionell wird sie bei V\u00f6llegef\u00fchl, M\u00fcdigkeit und zur geistigen Erfrischung getrunken. F\u00fcr die Sieben, deren Geist von Reiz zu Reiz springt, kann sie zugleich kl\u00e4ren und sammeln. So hilft ein Pfefferminztee, den \u00fcberquellenden Kopf zu erfrischen und auf das Wesentliche zu fokussieren.",
          goal: "Als pflanzliche Begleiterin kl\u00e4rt sie den Geist und bringt Frische in festgefahrene Gedankenmuster \u2013 Offenheit statt \u00dcberanalyse.",
        },
        {
          title: "Calcium carbonicum",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/calcarea-carbonica.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Gewonnen aus der Kalkschicht der Austernschale \u2013 dem weichen, verletzlichen Tier, das sich in einer harten Schale birgt. Diese Signatur ist sprechend: ein tiefes Bed\u00fcrfnis nach Sicherheit, Schutz und Nahrung und die Angst, ohne festen Halt \u00fcberw\u00e4ltigt zu werden. Das ist die Wunde der Sieben \u2013 eine Sehnsucht nach Geborgenheit, die hinter Begeisterung und Lebensfreude verborgen liegt. Unter dem sprudelnden Wesen sitzt das weiche Tier, das eine sch\u00fctzende Schale sucht.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als rastlose Suche, Schmerzvermeidung und der Hunger nach Halt zeigt. Es n\u00e4hrt ein Gef\u00fchl innerer Sicherheit, das die Flucht nach vorn \u00fcberfl\u00fcssig macht. So darf die Sieben Geborgenheit in sich selbst finden, statt sie im n\u00e4chsten Reiz zu suchen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Belladonna",
          schuessler: "Natrium phosphoricum",
          bachbluete: "Agrimony",
          edelstein: "Rauchquarz",
          tee: "Pfefferminztee",
        },
        homoeopathieThema: "Die Tollkirsche ist eine Nachtschattenpflanze, deren Bild von Hitze, Fieber, F\u00fclle und gl\u00fchender Erregung gepr\u00e4gt ist. Diese Signatur durchzieht das Mittelbild: eine fiebrige Intensit\u00e4t, ein Drang nach lebhaften, starken Eindr\u00fccken und ein rasches Aufflammen. Genau das lebt in der Sieben \u2013 das Bed\u00fcrfnis, Schmerz zu vermeiden und das Leben in vollen Z\u00fcgen zu erleben, getragen von einem fiebrigen Drang nach mehr M\u00f6glichkeiten, Reizen und Genuss. Wie das Fieber will alles hell, schnell und intensiv sein.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als \u00dcberf\u00fclle, rastlose Getriebenheit und fiebrige Reizsuche zeigt. Es hilft, die \u00fcberschie\u00dfende Erregung zu k\u00fchlen und zur Ruhe zu bringen. So darf die Sieben F\u00fclle genie\u00dfen, ohne von ihr getrieben zu werden.",
        wundeThema: "Gewonnen aus der Kalkschicht der Austernschale \u2013 dem weichen, verletzlichen Tier, das sich in einer harten Schale birgt. Diese Signatur ist sprechend: ein tiefes Bed\u00fcrfnis nach Sicherheit, Schutz und Nahrung und die Angst, ohne festen Halt \u00fcberw\u00e4ltigt zu werden. Das ist die Wunde der Sieben \u2013 eine Sehnsucht nach Geborgenheit, die hinter Begeisterung und Lebensfreude verborgen liegt. Unter dem sprudelnden Wesen sitzt das weiche Tier, das eine sch\u00fctzende Schale sucht.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als rastlose Suche, Schmerzvermeidung und der Hunger nach Halt zeigt. Es n\u00e4hrt ein Gef\u00fchl innerer Sicherheit, das die Flucht nach vorn \u00fcberfl\u00fcssig macht. So darf die Sieben Geborgenheit in sich selbst finden, statt sie im n\u00e4chsten Reiz zu suchen.",
        wunde: {
          homoeopathie: "Calcium carbonicum",
          schuessler: "Natrium phosphoricum",
          bachbluete: "Agrimony",
        },
      },
      woundBehindPassion: {
        passion: "Ma\u00dflosigkeit \u2013 das st\u00e4ndige Suchen nach mehr als Strategie, Schmerz und innerer Leere zu entfliehen. Bei der SX7 (Verst\u00e4rkungstyp) wird die V\u00f6llerei am gl\u00fchendsten gelebt: als Hunger nach Intensit\u00e4t, Idealisierung und au\u00dfergew\u00f6hnlichen Erfahrungen.",
        belief: "\u201eDas wahre Leben ist aufregend, leuchtend, grenzenlos \u2013 das Gew\u00f6hnliche gen\u00fcgt nicht.\u201c Darunter: \u201eWenn ich innehalte, holt mich die n\u00fcchterne Leere ein.\u201c",
        wound: "Die Wunde der Schmerzvermeidung: das Gef\u00fchl, dass tiefere Gef\u00fchle \u2013 besonders Schmerz, Verlust und Begrenztheit \u2013 zu bedrohlich sind, um ihnen zu begegnen. Bei der SX7 \u00fcberstrahlt die Euphorie die n\u00fcchterne Wirklichkeit.",
        compensation: "Idealisieren, schw\u00e4rmen, das Au\u00dfergew\u00f6hnliche jagen \u2013 die Fantasie malt das Leben sch\u00f6ner, als es im Moment ist. Ern\u00fcchterung und Begrenzung werden gemieden, indem man zum n\u00e4chsten Funken weiterspringt.",
        sufferingCycle: "Die SX7 sucht Erf\u00fcllung im n\u00e4chsten intensiven Erlebnis. Die Begeisterung vergl\u00fcht, die Sehnsucht nach dem Besonderen bleibt. Die Tiefe, die wirklich erf\u00fcllen w\u00fcrde, liegt immer einen Rausch weiter.",
        healingDirection: "Erfahren, dass Tiefe erf\u00fcllender ist als das gejagte Besondere. Heilung beginnt darin, im gegenw\u00e4rtigen Moment zu verk\u00f6rpern, was ist \u2013 auch das Stille, Unspektakul\u00e4re und Schmerzhafte.",
        remedy: "Wundenmittel: Calcium carbonicum \u00b7 Leidenschaftsmittel: Belladonna \u00b7 Sch\u00fc\u00dfler-Salz: Natrium phosphoricum \u00b7 Bach-Bl\u00fcte: Agrimony. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const sx8 = {
      code: "SX8",
      title: "Die sexuelle Acht",
      animal: "Krokodil",
      status: "curated_draft",
      pages: "Typ 8 Grundkarte + SX8 Seiten 1-5",
      visualPages: type8VisualPages("SX8", "Sexuelle Acht"),
      organismQuestion: "Wie kann ich meine Grenzen wahren, f\u00fcr mich einstehen und sch\u00fctzen, was mir wichtig ist?",
      subtypeQuestion:
        "Wie kann ich Intensit\u00e4t und Macht bewusst leben, ohne N\u00e4he zur Machtprobe werden zu lassen?",
      integrationSentence: "Ich nutze meine magnetische Kraft, um zu lieben, zu sch\u00fctzen und das Leben in seiner Tiefe zu erfahren.",
      coreSentence:
        "Wenn du Intensit\u00e4t nicht mit Kampf verwechselst, entsteht N\u00e4he und Vertrauen ohne Machtprobe.",
      lifeTheme: [
        "Intensive Verbindung, St\u00e4rke und absolute Lebendigkeit suchen.",
        "Kontrolle behalten und sich zugleich ganz hingeben wollen.",
        "N\u00e4he, Intensit\u00e4t und Wahrheit suchen und dabei leicht Ruhe und Feinf\u00fchligkeit verlieren.",
      ],
      practice:
        "2-Punkte-Integration: Herzraum / Brustmitte und Schambein-Bereich.",
      essence: {
        title: "Integrationspotenzial: Magnetische Kraft & souver\u00e4ne Intensit\u00e4t",
        sentence: "Ich nutze meine magnetische Kraft, um zu lieben, zu sch\u00fctzen und das Leben in seiner Tiefe zu erfahren.",
        qualities: ["magnetisch", "intensiv", "leidenschaftlich", "souver\u00e4n", "vertrauensvolle N\u00e4he"],
      },
      integrationPath: [
        "N\u00e4he zulassen, ohne Kontrolle oder St\u00e4rke beweisen zu m\u00fcssen.",
        "Nicht k\u00e4mpfen oder dominieren m\u00fcssen, um lebendig und verbunden zu sein.",
        "Kraft durch Vertrauen, Verletzlichkeit und echte Offenheit finden.",
      ],
      turningPoint: [
        "Erkennen, dass Intensit\u00e4t und Konfrontation echte N\u00e4he verhindern k\u00f6nnen.",
        "Kraft bewusster und achtsamer einsetzen.",
        "Herzensn\u00e4he entsteht durch Offenheit statt durch Dominanz und Druck.",
      ],
      integrativePotential: "Magnetische Kraft & souver\u00e4ne Intensit\u00e4t",
      integratedState: [
        "Anderen direkt und kraftvoll begegnen, ohne Druck oder Dominanz erzeugen zu m\u00fcssen.",
        "Offen f\u00fcr N\u00e4he, Vertrauen und emotionale Ehrlichkeit bleiben.",
        "Kraftvolle Lebendigkeit verbindet sich mit Herzkraft und Bewusstheit.",
      ],
      bodySignature: {
        twoPoints: {
          point1: { name: "Herzraum / Brustmitte", location: "mittig auf dem Brustbein", need: [
              "N\u00e4he",
              "Verbindung",
              "Resonanz",
            ] },
          point2: { name: "Schambein-Bereich", location: "auf dem Schambein", need: [
              "Urvertrauen",
              "Erdung",
              "Schutz",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Leidenschaft, Lebensenergie, Pr\u00e4senz, Magnetismus, Mut, Unabh\u00e4ngigkeit, Schutz und Loyalit\u00e4t.",
      },
      unconsciousStrategy: [
        "Lebendigkeit \u00fcber Intensit\u00e4t, Rebellion und leidenschaftliche Hingabe suchen.",
        "N\u00e4he zur Machtprobe machen und Grenzen herausfordern.",
        "Sich \u00fcber Besitz und Konfrontation stabilisieren, w\u00e4hrend Verletzlichkeit verborgen bleibt.",
      ],
      tensionFields: [
        "Kampf \u2192 Begegnung",
        "Besitz \u2192 freie Verbindung",
        "Eroberung \u2192 Herzensn\u00e4he",
        "Intensit\u00e4t \u2192 Tiefe",
        "Machtprobe \u2192 Vertrauen",
        "Provokation \u2192 Offenheit",
        "Kontrolle \u2192 Hingabe",
        "H\u00e4rte \u2192 Z\u00e4rtlichkeit",
        "St\u00e4rke \u2192 Verletzlichkeit",
      ],
      archetypalEssence: "Magnetische Lebensintensit\u00e4t",
      nervousSystemRegulation: [
        "Intensit\u00e4t bewusst dosieren",
        "N\u00e4he ohne Machtprobe zulassen",
        "Anspannung im K\u00f6rper l\u00f6sen",
        "den Atem tief und langsam f\u00fchren",
        "Impulse wahrnehmen statt sofort zu handeln",
        "Verletzlichkeit zeigen statt zu verbergen",
        "Ruhe und Z\u00e4rtlichkeit zulassen",
        "echtes Vertrauen riskieren",
      ],
      contentModules: [
        {
          title: "Typ 8 \u00b7 Grundkarte",
          intro: "Die Typ-8-Grundkarte bildet die gemeinsame Grundlage aller Acht-Subtypen. Im Zentrum stehen Kraft, Selbstbehauptung und der Schutz der eigenen Grenzen. Der K\u00f6rper organisiert sich auf Pr\u00e4senz, Standfestigkeit und Bereitschaft zum Widerstand.",
          entries: [
            { label: "Grundthema", text: "Macht & Kontrolle. Typ 8 richtet Aufmerksamkeit auf St\u00e4rke, Gerechtigkeit und Selbstbestimmung und sch\u00fctzt die eigene Verletzlichkeit." },
            { label: "Organismusfrage", text: "Wie kann ich meine Grenzen wahren, f\u00fcr mich einstehen und sch\u00fctzen, was mir wichtig ist?" },
            { label: "Innerer Konflikt", text: "St\u00e4rke und Verletzlichkeit stehen gegeneinander: der Drang, unangreifbar und m\u00e4chtig zu sein, gegen\u00fcber der verborgenen weichen, schutzbed\u00fcrftigen Seite." },
            { label: "K\u00f6rperorganisation", text: "Stabil, geerdet und mit breiter Basis. Fest verankert und schwer aus dem Gleichgewicht zu bringen, Schultern breit und leicht nach vorn \u2014 bereit zu handeln." },
            { label: "Blickqualit\u00e4t", text: "Geradlinig, kontrollierend und direkt. Der Blick h\u00e4lt dem Gegen\u00fcber stand, pr\u00fcft und weicht nicht aus." },
            { label: "Mikrospannung", text: "Reduzierte, wachsame Mimik, oft fester Kiefer als Ausdruck innerer Selbstbeherrschung." },
            { label: "Atemrhythmus", text: "Tief und kraftvoll, ruhig gehalten; stockt bei Bedrohung und verdichtet sich bei Konfrontation." },
            { label: "Bewegungsinitiierung", text: "Sparsam, funktional und kr\u00e4ftig. Jede Geste hat Gewicht \u2014 entschlossen, nie fahrig." },
            { label: "Kontaktstil", text: "Tief, trocken und direkt. Spricht klar und mit Nachdruck, ohne Umschweife; nah in der Pr\u00e4senz, oft distanziert im Gef\u00fchl." },
            { label: "Spannungsverteilung", text: "Konzentrierte Kraft im Rumpf, im unteren R\u00fccken und im Bauchraum \u2014 eine innere R\u00fcstung gegen Schw\u00e4che und \u00dcbergriff." },
            { label: "Integrationsweg", text: "Von der H\u00e4rte zur Kraft, die sich \u00f6ffnen darf. Von der Kontrolle zum Vertrauen. St\u00e4rke, die Verletzlichkeit zul\u00e4sst." },
            { label: "Archetypisches Tier", text: "Nashorn: Kraft, Standfestigkeit, Drucktoleranz, Entschlossenheit und Schutz. Das Nashorn steht f\u00fcr den Weg von harter Kontrolle zur tragenden, verantwortungsvollen St\u00e4rke." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SX8 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 8", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 8", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 8", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 8 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 8", youtubeVideoId: "T33JfmnS3nQ" },
          { title: "Typ 8 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 8", youtubeVideoId: "OAsfvExdYtw" },
          { title: "Type 8 \u00b7 English Theme Song", category: "Song 2", scope: "Type 8", youtubeVideoId: "NlH4t8RvEfI" },
          { title: "SX8 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SX8", youtubeVideoId: "THA4awgtiTE" },
          { title: "SX8 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SX8", youtubeVideoId: "5wCzlEA2cik" },
          { title: "SX8 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SX8", youtubeVideoId: "mEc9zE0a-Ow" },
          { title: "SX8 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SX8", youtubeVideoId: "NYCrpMnDkBo" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Veratrum album",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-8/sx8/heilmittel/sx8-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Der Wei\u00dfe Germer ist eine kraftvolle, giftige Gebirgspflanze, deren Bild von Gr\u00f6\u00dfe, Anspruch und pl\u00f6tzlichem Zusammenbruch gepr\u00e4gt ist. Ihre Signatur zeigt einen m\u00e4chtigen Drang nach Ausweitung, Einfluss und \u00dcberlegenheit \u2013 bis hin zu H\u00e4rte und Hochmut. Genau das pr\u00e4gt die Leidenschaft der Acht \u2013 das Bed\u00fcrfnis, stark, unabh\u00e4ngig und unangreifbar zu sein, getragen von einem m\u00e4chtigen inneren Drang nach Kontrolle. Die Kraft will sich ausdehnen und alles in der Hand behalten.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als ma\u00dflose Expansion, \u00dcbersteigerung und das Erzwingen von Kontrolle zeigt. Es hilft, die \u00fcberschie\u00dfende Kraft zu m\u00e4\u00dfigen, ohne die St\u00e4rke zu verlieren. So darf die Acht f\u00fchren und sch\u00fctzen, ohne sich und andere zu \u00fcberfordern.",
        },
        {
          title: "Calcium fluoratum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-8/sx8/heilmittel/sx8-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Festigkeit und Elastizit\u00e4t zugleich",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 1 verbindet Festigkeit mit Elastizit\u00e4t \u2013 es st\u00e4rkt B\u00e4nder, Zahnschmelz und Bindegewebe. Es gibt Struktur, die zugleich beweglich und tragf\u00e4hig bleibt. Auf seelischer Ebene steht es f\u00fcr Stabilit\u00e4t, die nicht zur Verh\u00e4rtung wird. F\u00fcr die Acht, die sich mit H\u00e4rte und Kontrolle gegen jede Schw\u00e4che panzert, ist genau das die Heilrichtung. So unterst\u00fctzt es echte Kraft, die auch Weichheit und Beweglichkeit zul\u00e4sst, statt nur zu sch\u00fctzen.",
          goal: "Auf der Mineralstoff-Ebene verbindet es St\u00e4rke mit Anpassungsf\u00e4higkeit \u2013 es hilft, den Panzer aus \u00dcberlegenheit und H\u00e4rte in eine nat\u00fcrliche Widerstandskraft zu wandeln.",
        },
        {
          title: "Vine",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-8/sx8/heilmittel/sx8-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "St\u00e4rke und F\u00fchrung ohne Dominanz",
          text: "Vine ist die Bachbl\u00fcte f\u00fcr starke, dominante Naturen, die f\u00fchren, bestimmen und ungern Schw\u00e4che zeigen. Sie hilft jenen, deren Kraft leicht in H\u00e4rte und Kontrolle \u00fcber andere kippt. Die Bl\u00fcte wandelt Machtanspruch in eine starke, aber respektvolle und dienende F\u00fchrung. F\u00fcr die Acht, die St\u00e4rke als Schutz vor Verletzlichkeit braucht, ist sie eine reife Heilrichtung. So darf Kraft f\u00fchren, ohne zu beherrschen, und Raum f\u00fcr andere lassen.",
          goal: "Auf der Seelenebene wandelt es Macht, die dominiert, in St\u00e4rke, die erm\u00e4chtigt \u2013 F\u00fchrung ohne Kontrolle, St\u00e4rke ohne \u00dcberw\u00e4ltigung.",
        },
        {
          title: "Fluorit",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-8/sx8/heilmittel/sx8-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Klarheit, Ordnung und Konzentration",
          text: "Der Fluorit ist ein klarer, vielfarbig schimmernder Stein und gilt als Ordnungs- und Klarheitsstein des Geistes. Er hilft, Gedanken zu strukturieren, Konzentration zu b\u00fcndeln und innere wie \u00e4u\u00dfere Unordnung zu kl\u00e4ren. Zugleich gilt er als l\u00f6send: Er weicht H\u00e4rte und Verkrampfung auf und schafft inneren Freiraum. F\u00fcr die Acht, die sich mit Kontrolle und St\u00e4rke gegen jede Schw\u00e4che panzert, \u00f6ffnet er einen sanfteren Weg. So darf hinter der harten Schale wieder Klarheit, Beweglichkeit und ein St\u00fcck Weichheit Platz finden \u2013 ohne dass sich das bedrohlich anf\u00fchlt.",
          goal: "Als energetisches Werkzeug strukturiert er das innere Chaos und bringt mentale Klarheit \u2013 St\u00e4rke darf sich zeigen ohne die R\u00fcstung.",
        },
        {
          title: "Ingwertee",
          subtitle: "Tee",
          image: "assets/knowledge/type-8/sx8/heilmittel/sx8-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "w\u00e4rmend und anregend",
          text: "Ingwer ist eine w\u00e4rmende, kraftvoll anregende Wurzel, die Durchblutung und Lebensfeuer f\u00f6rdert. Ihr scharf-w\u00fcrziger Charakter weckt Energie, Tatkraft und innere W\u00e4rme. Traditionell wird sie zur St\u00e4rkung, Erw\u00e4rmung und Belebung eingesetzt. F\u00fcr die Acht, die voller Kraft und Schutzimpuls ist, passt ihre warme, klare Energie. So hilft ein Ingwertee, die starke Kraft mit W\u00e4rme zu verbinden statt mit H\u00e4rte.",
          goal: "Als pflanzliche Begleiterin w\u00e4rmt und belebt sie: Kraft, die sich nicht mehr hinter Dominanz verbergen muss, sondern sich als nat\u00fcrliche St\u00e4rke zeigt.",
        },
        {
          title: "Veratrum album",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/veratrum-album.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Auch die Wunde der Acht tr\u00e4gt die Signatur des Wei\u00dfen Germers: hinter gro\u00dfer St\u00e4rke der drohende Kollaps. Sein Bild kennt den Zusammenbruch in K\u00e4lte und Ersch\u00f6pfung, wenn die erzwungene Gr\u00f6\u00dfe nicht mehr tr\u00e4gt. Das ist die Wunde der Verletzlichkeit \u2013 eine tiefe Angst vor Ohnmacht und Dem\u00fctigung, die sich hinter dem Streben nach St\u00e4rke und Kontrolle verbirgt. Unter dem Panzer liegt die Angst, schwach und ausgeliefert zu sein.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als H\u00e4rte, Kontrollzwang und die Abwehr jeder Schw\u00e4che zeigt. Es hilft, die Verletzlichkeit nicht l\u00e4nger bek\u00e4mpfen zu m\u00fcssen, sondern sie als Teil echter St\u00e4rke zuzulassen. So darf hinter der H\u00e4rte wieder Weichheit und Ber\u00fchrbarkeit entstehen.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Veratrum album",
          schuessler: "Calcium fluoratum",
          bachbluete: "Vine",
          edelstein: "Fluorit",
          tee: "Ingwertee",
        },
        homoeopathieThema: "Der Wei\u00dfe Germer ist eine kraftvolle, giftige Gebirgspflanze, deren Bild von Gr\u00f6\u00dfe, Anspruch und pl\u00f6tzlichem Zusammenbruch gepr\u00e4gt ist. Ihre Signatur zeigt einen m\u00e4chtigen Drang nach Ausweitung, Einfluss und \u00dcberlegenheit \u2013 bis hin zu H\u00e4rte und Hochmut. Genau das pr\u00e4gt die Leidenschaft der Acht \u2013 das Bed\u00fcrfnis, stark, unabh\u00e4ngig und unangreifbar zu sein, getragen von einem m\u00e4chtigen inneren Drang nach Kontrolle. Die Kraft will sich ausdehnen und alles in der Hand behalten.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als ma\u00dflose Expansion, \u00dcbersteigerung und das Erzwingen von Kontrolle zeigt. Es hilft, die \u00fcberschie\u00dfende Kraft zu m\u00e4\u00dfigen, ohne die St\u00e4rke zu verlieren. So darf die Acht f\u00fchren und sch\u00fctzen, ohne sich und andere zu \u00fcberfordern.",
        wundeThema: "Auch die Wunde der Acht tr\u00e4gt die Signatur des Wei\u00dfen Germers: hinter gro\u00dfer St\u00e4rke der drohende Kollaps. Sein Bild kennt den Zusammenbruch in K\u00e4lte und Ersch\u00f6pfung, wenn die erzwungene Gr\u00f6\u00dfe nicht mehr tr\u00e4gt. Das ist die Wunde der Verletzlichkeit \u2013 eine tiefe Angst vor Ohnmacht und Dem\u00fctigung, die sich hinter dem Streben nach St\u00e4rke und Kontrolle verbirgt. Unter dem Panzer liegt die Angst, schwach und ausgeliefert zu sein.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als H\u00e4rte, Kontrollzwang und die Abwehr jeder Schw\u00e4che zeigt. Es hilft, die Verletzlichkeit nicht l\u00e4nger bek\u00e4mpfen zu m\u00fcssen, sondern sie als Teil echter St\u00e4rke zuzulassen. So darf hinter der H\u00e4rte wieder Weichheit und Ber\u00fchrbarkeit entstehen.",
        wunde: {
          homoeopathie: "Veratrum album",
          schuessler: "Calcium fluoratum",
          bachbluete: "Oak",
        },
      },
      woundBehindPassion: {
        passion: "Wollust \u2013 eine intensive Kraft, die sich als Drang nach St\u00e4rke, Kontrolle und Intensit\u00e4t zeigt. Bei der SX8 (Verst\u00e4rkungstyp) wird die Wollust am sichtbarsten gelebt: als leidenschaftliches Begehren, Besitzergreifen und rebellische Lust am ganz echten, intensiven Leben.",
        belief: "\u201eSchw\u00e4che ist gef\u00e4hrlich \u2013 nur in voller Intensit\u00e4t bin ich wirklich lebendig.\u201c Darunter: \u201eWer sich hingibt, ohne zu kontrollieren, verliert.\u201c",
        wound: "Die Wunde der Verletzlichkeit: das tiefe Gef\u00fchl, dass das eigene Verletzt-werden-K\u00f6nnen bedrohlich ist. Bei der SX8 verbirgt sich die Verletzlichkeit hinter leidenschaftlicher Intensit\u00e4t und dem Drang, zu besitzen und herauszufordern.",
        compensation: "Intensit\u00e4t, Rebellion, Besitzergreifen und Konfrontation. N\u00e4he wird zur Machtprobe, Hingabe mit Kontrolle verkn\u00fcpft. Die leidenschaftliche Kraft sch\u00fctzt vor dem Risiko, sich wirklich auszuliefern.",
        sufferingCycle: "Die Angst vor Verletzlichkeit erzeugt Kontrolle und Kampf. Der Kampf erzeugt Distanz in der N\u00e4he. Die Distanz verhindert echtes Vertrauen. Das Fehlen echter Hingabe best\u00e4tigt die Notwendigkeit der Intensit\u00e4t.",
        healingDirection: "Verletzlichkeit nicht als Schw\u00e4che, sondern als Zugang zu echter Kraft entdecken. Erfahren, dass Intensit\u00e4t ohne Kampf und N\u00e4he ohne Eroberung tiefer tragen als jede Machtprobe.",
        remedy: "Wundenmittel: Veratrum album \u00b7 Leidenschaftsmittel: Veratrum album \u00b7 Sch\u00fc\u00dfler-Salz: Calcium fluoratum \u00b7 Bach-Bl\u00fcte: Oak. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };


const sx9 = {
      code: "SX9",
      title: "Die sexuelle Neun",
      animal: "Faultier",
      status: "curated_draft",
      pages: "Typ 9 Grundkarte + SX9 Seiten 1-5",
      visualPages: type9VisualPages("SX9", "Sexuelle Neun"),
      organismQuestion: "Wie kann ich in Frieden bleiben und Harmonie bewahren, in mir und um mich herum?",
      subtypeQuestion:
        "Wie kann ich Verschmelzung und Liebe zulassen, ohne mich selbst im Anderen aufzugeben?",
      integrationSentence: "Ich nutze meine Kraft, um Liebe, Mitgef\u00fchl und Weisheit zu leben und das Leben in seiner Einheit zu ehren.",
      coreSentence:
        "Wenn Verschmelzung nicht zum Selbstverlust f\u00fchrt, kann Liebe wirklich zur Begegnung werden.",
      lifeTheme: [
        "Tiefe Verbindung suchen und m\u00f6glichst im Kontakt eins werden wollen.",
        "Andere intensiv sp\u00fcren und sich dabei leicht selbst verlieren.",
        "Harmonie und Verschmelzung wollen und dabei die eigene Klarheit opfern.",
      ],
      practice:
        "2-Punkte-Integration: Stirn / Kopf und suprapubischer Bereich.",
      essence: {
        title: "Integrationspotenzial: Frieden stiften & universelle Verbundenheit",
        sentence: "Ich nutze meine Kraft, um Liebe, Mitgef\u00fchl und Weisheit zu leben und das Leben in seiner Einheit zu ehren.",
        qualities: ["hingebungsvoll", "mitf\u00fchlend", "friedlich", "verbunden", "klare Selbstpr\u00e4senz"],
      },
      integrationPath: [
        "N\u00e4he zulassen, ohne sich selbst dabei aufzugeben.",
        "Sich nicht anpassen oder verschmelzen m\u00fcssen, um verbunden zu sein.",
        "Frieden durch Selbstkontakt, Eigenst\u00e4ndigkeit und klare Pr\u00e4senz finden.",
      ],
      turningPoint: [
        "Sich selbst wieder wahrnehmen, statt sich im Anderen zu verlieren.",
        "Eigene Impulse, Bed\u00fcrfnisse und Grenzen unabh\u00e4ngig vom Au\u00dfen sp\u00fcren.",
        "Harmonie entsteht durch wache Pr\u00e4senz und echten Selbstkontakt.",
      ],
      integrativePotential: "Frieden stiften & universelle Verbundenheit",
      integratedState: [
        "Mit sich selbst und mit anderen in lebendigem Kontakt bleiben.",
        "Den Platz einnehmen, ohne sich zur\u00fcckzunehmen oder im Anderen aufzugehen.",
        "Ruhe wird zu stabiler Kraft, die echte N\u00e4he, Pr\u00e4senz und Verbundenheit erm\u00f6glicht.",
      ],
      bodySignature: {
        twoPoints: {
          point1: { name: "Stirn / Kopf", location: "mittig auf der Stirn", need: [
              "Wissen / Verstehen",
              "Wahrnehmung",
              "innere Klarheit",
            ] },
          point2: { name: "Suprapubischer Bereich", location: "knapp oberhalb des Schambeins", need: [
              "Ruhe",
              "Harmonie",
              "Verwurzelung",
            ] },
          microInstructions: [
            "Nichts ver\u00e4ndern.",
            "Nichts korrigieren.",
            "Nur halten und atmen.",
            "Lass den Atem ruhig flie\u00dfen.",
            "Bleibe in deiner Aufmerksamkeit.",
          ],
        },
      },
      signature: {
        title: "Ressourcenfeld",
        text: "Einheit, Liebe, Frieden, Sanftheit, Geborgenheit, N\u00e4he, Empfindlichkeit, Hingabe und tiefe Verbindung.",
      },
      unconsciousStrategy: [
        "Frieden \u00fcber die Verschmelzung mit einem geliebten Menschen suchen.",
        "Im Anderen aufgehen und die eigenen Konturen verschwimmen lassen.",
        "Sich \u00fcber Hingabe stabilisieren, w\u00e4hrend das eigene Ich verblasst.",
      ],
      tensionFields: [
        "Verschmelzung \u2192 Begegnung",
        "Selbstverlust \u2192 Selbstkontakt",
        "Anpassung \u2192 liebevolle Pr\u00e4senz",
        "Aufgehen \u2192 Eigenst\u00e4ndigkeit",
        "Sehnsucht \u2192 Wirklichkeit",
        "Vermeidung \u2192 Klarheit",
        "Diffusion \u2192 Kontur",
        "Hingabe \u2192 Selbsttreue",
        "Verschwinden \u2192 Sichtbarkeit",
      ],
      archetypalEssence: "Liebevolle, eigenst\u00e4ndige Verbundenheit",
      nervousSystemRegulation: [
        "sich selbst in der N\u00e4he weiter sp\u00fcren",
        "eigene Impulse unabh\u00e4ngig vom Anderen wahrnehmen",
        "den K\u00f6rper als eigene Grenze sp\u00fcren",
        "den Atem belebend vertiefen",
        "den Verschmelzungssog bemerken statt ihm zu folgen",
        "eigene W\u00fcnsche und Grenzen benennen",
        "Wachheit statt Aufl\u00f6sung w\u00e4hlen",
        "Pr\u00e4senz bei sich selbst kultivieren",
      ],
      contentModules: [
        {
          title: "Typ 9 \u00b7 Grundkarte",
          intro: "Die Typ-9-Grundkarte bildet die gemeinsame Grundlage aller Neun-Subtypen. Im Zentrum stehen Frieden, Harmonie und die Vermeidung von Konflikt und Reiz\u00fcberflutung. Der K\u00f6rper organisiert sich auf Ruhe, Schonung und Nachgiebigkeit.",
          entries: [
            { label: "Grundthema", text: "Weisheit & Frieden. Typ 9 richtet Aufmerksamkeit auf Harmonie, innere Ruhe und Ausgleich und vermeidet Konflikt, Spannung und Aufruhr." },
            { label: "Organismusfrage", text: "Wie kann ich in Frieden bleiben und Harmonie bewahren, in mir und um mich herum?" },
            { label: "Innerer Konflikt", text: "Frieden und Selbstpr\u00e4senz stehen gegeneinander: das Bed\u00fcrfnis nach Ruhe und Harmonie gegen\u00fcber dem Risiko, sich selbst dabei zu vergessen." },
            { label: "K\u00f6rperorganisation", text: "Entspannt, weich und nach innen gezogen, oft etwas in sich ruhend. Geringe Spannkraft, ein gem\u00e4chlicher, flie\u00dfender Gang." },
            { label: "Blickqualit\u00e4t", text: "Sanft, ruhig und friedlich, manchmal tr\u00e4umerisch oder mit einem leichten Schleier. Wenig Fokus nach au\u00dfen." },
            { label: "Mikrospannung", text: "Milde, ausgeglichene Mimik ohne gro\u00dfe Ausdrucksspitzen; emotionale Reaktionen werden eher ged\u00e4mpft als gezeigt." },
            { label: "Atemrhythmus", text: "Ruhig, tief und kaum h\u00f6rbar \u2014 k\u00f6rperlicher Ausdruck des inneren Friedensbed\u00fcrfnisses." },
            { label: "Bewegungsinitiierung", text: "Reduziert, langsam und flie\u00dfend. Gesten sind rund und beil\u00e4ufig, nie pointiert oder dominierend." },
            { label: "Kontaktstil", text: "Ged\u00e4mpft, freundlich und verbindlich, oft ohne klare Stellungnahme. Berichtend statt wertend, einladend statt fordernd." },
            { label: "Spannungsverteilung", text: "Geringe Grundspannung, besonders im Oberk\u00f6rper \u2014 ein passives Loslassen, das Frieden und Reizvermeidung dient." },
            { label: "Integrationsweg", text: "Von der Selbstvergessenheit zur Selbstpr\u00e4senz. Von der Tr\u00e4gheit zur lebendigen Ruhe. Sich selbst wichtig nehmen." },
            { label: "Archetypisches Tier", text: "Schildkr\u00f6te: innere Stabilit\u00e4t, Ruhe, Konflikttoleranz, Ausdauer und Ausgleich. Die Schildkr\u00f6te steht f\u00fcr den Weg von der Selbstvergessenheit zur ruhig anwesenden Pr\u00e4senz." },
          ],
        },
      ],
      mediaGroups: [
        {
          title: "SX9 \u00b7 Seite 3 \u00b7 Praxis, Vertiefung und Songs",
          note: "Medienblock mit Praxis- und Vertiefungslinks, Fl\u00fcgelvideo sowie den Song- und Affirmationsfeldern.",
          resources: [
          { title: "Spezielle Bewusstseins\u00fcbungen f\u00fcr die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 9", youtubeVideoId: "Uf0kxyZ6xYM" },
          { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 9", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
          { title: "Songs about the Art of Living \u00b7 Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 9", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
          { title: "Typ 9 \u00b7 Fl\u00fcgel-Video", category: "Fl\u00fcgel", scope: "Typ 9", youtubeVideoId: "XmpATw12x34" },
          { title: "Typ 9 \u00b7 deutscher Themensong", category: "Song 1", scope: "Typ 9", youtubeVideoId: "hJXifCvw4LI" },
          { title: "Type 9 \u00b7 English Theme Song", category: "Song 2", scope: "Type 9", youtubeVideoId: "EZ_WLg8nDpA" },
          { title: "SX9 \u00b7 deutscher subtypspezifischer Song", category: "Song 3", scope: "SX9", youtubeVideoId: "Q9p8_1iQhm0" },
          { title: "SX9 \u00b7 englischer subtypspezifischer Song", category: "Song 4", scope: "SX9", youtubeVideoId: "cJN3-HEA-_A" },
          { title: "SX9 \u00b7 archetypisch-biblischer Song", category: "Song 5", scope: "SX9", youtubeVideoId: "gJc3U025VpA" },
          { title: "SX9 \u00b7 100 heilsame Affirmationen", category: "Affirmationen", scope: "SX9", youtubeVideoId: "cPIzEC6_a6c" },
          ],
        },
      ],
      remedyCards: [
        {
          title: "Cannabis indica",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/knowledge/type-9/sx9/heilmittel/sx9-homoeopathie.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Zentrum",
          field: "Leidenschaftsmittel",
          text: "Der indische Hanf ruft Bilder von Vernebelung, traumartiger Ferne und einem seligen Verschwimmen von Zeit und Raum hervor. Diese Signatur pr\u00e4gt das Mittelbild: ein Abtauchen aus der scharfen Wirklichkeit in eine weiche, konfliktfreie Benommenheit. Genau das lebt in der Neun \u2013 das Bed\u00fcrfnis nach Frieden und Harmonie, getragen vom Wunsch, Konflikt, Spannung und Aufruhr zu vermeiden. Die Welt wird weichgezeichnet, damit nichts mehr wehtut oder reibt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Vernebelung, Selbstvergessenheit und das Abtauchen aus der eigenen Pr\u00e4senz zeigt. Es hilft, wieder klarer und wacher gegenw\u00e4rtig zu werden. So darf die Neun aus dem Nebel auftauchen und sich selbst wieder sp\u00fcren.",
        },
        {
          title: "Natrium sulfuricum",
          subtitle: "Mineralstoff-Impuls",
          image: "assets/knowledge/type-9/sx9/heilmittel/sx9-schuessler.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Mineralstoff",
          field: "Ausscheidung und Loslassen von Belastendem",
          text: "Das Sch\u00fc\u00dfler-Salz Nr. 10 ist das gro\u00dfe Salz der Ausscheidung und des Loslassens. Es unterst\u00fctzt Leber, Galle und die Entgiftung und hilft, Belastendes aus dem System zu schaffen. Auf seelischer Ebene steht es f\u00fcr Kl\u00e4rung, Bewegung und das Verabschieden von Altem. F\u00fcr die Neun, die sich in Tr\u00e4gheit und Selbstvergessenheit einrichten kann, bringt es heilsamen Antrieb. So unterst\u00fctzt es, ins Handeln zu kommen und den eigenen Platz aktiv einzunehmen.",
          goal: "Auf der Mineralstoff-Ebene f\u00f6rdert es die Ausscheidung angesammelter Schwere \u2013 Resignation, R\u00fcckzug und das tr\u00e4ge Festhalten an alten Mustern k\u00f6nnen sich l\u00f6sen.",
        },
        {
          title: "Wild Rose",
          subtitle: "Bachbl\u00fcte",
          image: "assets/knowledge/type-9/sx9/heilmittel/sx9-bachbluete.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Bachbl\u00fcte",
          field: "aus Resignation zu lebendiger Teilnahme",
          text: "Wild Rose ist die Bachbl\u00fcte f\u00fcr Resignation, innere Gleichg\u00fcltigkeit und das Sich-Abfinden mit dem, was ist. Sie hilft jenen, die ohne Klage, aber auch ohne Lebensfreude einfach hinnehmen. Die Bl\u00fcte weckt neue Lebenslust, Interesse und aktive Teilnahme. F\u00fcr die Neun, die sich in Tr\u00e4gheit und Selbstvergessenheit verliert, ist sie ein sanfter Funke. So darf aus stiller Ergebung wieder lebendiges, engagiertes Dasein werden.",
          goal: "Auf der Seelenebene weckt es die schlummernde Lebensenergie: aus Resignation und innerem R\u00fcckzug zur\u00fcck zur eigenen Stimme, zu Wunsch und Richtung.",
        },
        {
          title: "Karneol",
          subtitle: "Edelstein",
          image: "assets/knowledge/type-9/sx9/heilmittel/sx9-edelstein.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Edelstein",
          field: "Lebenskraft, Mut und warme Pr\u00e4senz",
          text: "Der Karneol ist ein warm-orange bis r\u00f6tlich leuchtender Chalcedon und ein klassischer Stein der Lebenskraft, des Mutes und der Tatkraft. Seine warme Farbe steht f\u00fcr Vitalit\u00e4t, W\u00e4rme und eine kr\u00e4ftige, f\u00fchlbare Pr\u00e4senz. Er aktiviert, ermutigt und st\u00e4rkt den eigenen Willen und die Freude am Handeln. F\u00fcr die Neun, die sich leicht selbst vergisst, einschl\u00e4ft und meint, keine Rolle zu spielen, ist er ein sanfter Weckruf. So hilft er, aus Tr\u00e4gheit und Selbstvergessenheit aufzutauchen, den eigenen Platz einzunehmen und sp\u00fcrbar ins Leben zu treten.",
          goal: "Als energetisches Werkzeug weckt er die Lebensenergie aus der Stille \u2013 innere Tr\u00e4gheit und Selbstvergessenheit weichen einem sanften, klaren Lebensimpuls.",
        },
        {
          title: "Fencheltee",
          subtitle: "Tee",
          image: "assets/knowledge/type-9/sx9/heilmittel/sx9-tee.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Tee",
          field: "entspannend und ausgleichend",
          text: "Fenchel ist ein mildes, entspannendes und ausgleichendes Kraut mit wohltuender Wirkung. Er beruhigt sanft und harmonisiert, ohne zu d\u00e4mpfen. Traditionell wird er bei Unruhe und zur Beruhigung des Bauches getrunken. F\u00fcr die Neun, die Harmonie und Ruhe sucht, ist er ein vertrauter Begleiter \u2013 mit dem Hinweis, dass Ruhe nicht in Tr\u00e4gheit kippen muss. So hilft ein Fencheltee, eine entspannte Gelassenheit zu finden, die wach und pr\u00e4sent bleibt.",
          goal: "Als pflanzliche Begleiterin entspannt sie ohne zu bet\u00e4uben \u2013 eine sanfte Einladung, aus der inneren Stummheit in sp\u00fcrbare Lebendigkeit zur\u00fcckzukehren.",
        },
        {
          title: "Staphysagria",
          subtitle: "Hom\u00f6opathisches Einzelmittel",
          image: "assets/heilmittel/wundenmittel/staphysagria.jpg",
          imageStatus: "Bild aus Kartenset",
          category: "Wundenmittel",
          field: "Wundenmittel",
          text: "Bereitet aus dem Stephanskraut, einem Rittersporngew\u00e4chs \u2013 das gro\u00dfe Mittel f\u00fcr unterdr\u00fcckten \u00c4rger und verletzte W\u00fcrde. Seine Signatur ist der heruntergeschluckte Zorn: erlittene Kr\u00e4nkungen und Grenzverletzungen, die freundlich hingenommen statt ausgesprochen werden, bis es irgendwann herausbricht. Das ist die Wunde der Selbstvergessenheit der Neun \u2013 getragen von unterdr\u00fccktem \u00c4rger und nicht benannten Grenz\u00fcberschreitungen. Aus Friedfertigkeit schweigt die Seele \u00fcber das, was sie verletzt.",
          goal: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anpassung, Schweigen und der verlorene Kontakt zur eigenen Grenze zeigt. Es hilft, berechtigten \u00c4rger zu f\u00fchlen und Grenzen klar zu vertreten. So darf die Neun wieder f\u00fcr sich einstehen und pr\u00e4sent werden.",
        },
      ],
      heilmittel: {
        leidenschaft: {
          homoeopathie: "Cannabis indica",
          schuessler: "Natrium sulfuricum",
          bachbluete: "Wild Rose",
          edelstein: "Karneol",
          tee: "Fencheltee",
        },
        homoeopathieThema: "Der indische Hanf ruft Bilder von Vernebelung, traumartiger Ferne und einem seligen Verschwimmen von Zeit und Raum hervor. Diese Signatur pr\u00e4gt das Mittelbild: ein Abtauchen aus der scharfen Wirklichkeit in eine weiche, konfliktfreie Benommenheit. Genau das lebt in der Neun \u2013 das Bed\u00fcrfnis nach Frieden und Harmonie, getragen vom Wunsch, Konflikt, Spannung und Aufruhr zu vermeiden. Die Welt wird weichgezeichnet, damit nichts mehr wehtut oder reibt.",
        homoeopathieWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Lebenskraft als Vernebelung, Selbstvergessenheit und das Abtauchen aus der eigenen Pr\u00e4senz zeigt. Es hilft, wieder klarer und wacher gegenw\u00e4rtig zu werden. So darf die Neun aus dem Nebel auftauchen und sich selbst wieder sp\u00fcren.",
        wundeThema: "Bereitet aus dem Stephanskraut, einem Rittersporngew\u00e4chs \u2013 das gro\u00dfe Mittel f\u00fcr unterdr\u00fcckten \u00c4rger und verletzte W\u00fcrde. Seine Signatur ist der heruntergeschluckte Zorn: erlittene Kr\u00e4nkungen und Grenzverletzungen, die freundlich hingenommen statt ausgesprochen werden, bis es irgendwann herausbricht. Das ist die Wunde der Selbstvergessenheit der Neun \u2013 getragen von unterdr\u00fccktem \u00c4rger und nicht benannten Grenz\u00fcberschreitungen. Aus Friedfertigkeit schweigt die Seele \u00fcber das, was sie verletzt.",
        wundeWirkung: "Hom\u00f6opathisch unterst\u00fctzt es die Regulation dort, wo sich die Wunde als Anpassung, Schweigen und der verlorene Kontakt zur eigenen Grenze zeigt. Es hilft, berechtigten \u00c4rger zu f\u00fchlen und Grenzen klar zu vertreten. So darf die Neun wieder f\u00fcr sich einstehen und pr\u00e4sent werden.",
        wunde: {
          homoeopathie: "Staphysagria",
          schuessler: "Natrium sulfuricum",
          bachbluete: "Wild Rose",
        },
      },
      woundBehindPassion: {
        passion: "Tr\u00e4gheit \u2013 nicht als k\u00f6rperliche Faulheit, sondern als eine innere Bewegungslosigkeit, die das eigene Erleben in den Hintergrund treten l\u00e4sst. Bei der SX9 (Verst\u00e4rkungstyp) zeigt sie sich als Verschmelzung: das eigene Leben durch und im Anderen leben.",
        belief: "\u201eErst durch die Verbindung mit dem Anderen werde ich ganz.\u201c Darunter: \u201eWenn ich mich abgrenze und Eigenes will, verliere ich die Liebe und die Einheit.\u201c",
        wound: "Die Wunde der Selbstvergessenheit: das tiefe Muster, sich selbst unsichtbar zu machen, um Konflikte zu vermeiden und Harmonie zu bewahren. Bei der SX9 l\u00f6st sich das eigene Ich in der Verschmelzung mit dem Anderen auf.",
        compensation: "Verschmelzen, anpassen und im Anderen aufgehen \u2013 die eigenen W\u00fcnsche und Grenzen verschwimmen mit denen des geliebten Menschen. Die Hingabe bet\u00e4ubt die Angst, allein und getrennt zu sein.",
        sufferingCycle: "Die SX9 sucht Einheit in der Verschmelzung und gibt sich selbst dabei auf. Je mehr sie im Anderen aufgeht, desto weniger sp\u00fcrt sie sich. Die N\u00e4he scheint Verbundenheit zu sichern, verhindert aber echte Begegnung zweier Menschen.",
        healingDirection: "Wieder sp\u00fcren, dass die eigene Pr\u00e4senz z\u00e4hlt. Heilung beginnt darin, sich selbst in der N\u00e4he nicht zu verlieren \u2013 und zu erfahren, dass Liebe als Begegnung zweier eigenst\u00e4ndiger Menschen tiefer tr\u00e4gt als Verschmelzung.",
        remedy: "Wundenmittel: Staphysagria \u00b7 Leidenschaftsmittel: Cannabis indica \u00b7 Sch\u00fc\u00dfler-Salz: Natrium sulfuricum \u00b7 Bach-Bl\u00fcte: Wild Rose. Anwendung nur in therapeutischer R\u00fccksprache.",
      },
      needsReview: [],
    };



const knowledgeSubtypes = [se1, so1, sx1, se2, so2, sx2, se3, so3, sx3, se4, so4, sx4, se5, so5, sx5, se6, so6, sx6, se7, so7, sx7, se8, so8, sx8, se9, so9, sx9];

window._knowledgeSubtypes = knowledgeSubtypes;
})();

const knowledgeSubtypes = window._knowledgeSubtypes;

